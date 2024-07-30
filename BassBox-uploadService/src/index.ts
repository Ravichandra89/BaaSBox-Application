import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./generate";
import path from "path";
import { uploadFile } from "./aws";
import { createClient } from "redis";
import { getAllFiles } from "./getfile";

const publisher = createClient({
  url: "redis://localhost:6379", // Adjust the URL as needed
});
publisher.connect();

const subscriber = createClient({
  url: "redis://localhost:6379", // Adjust the URL as needed
});
subscriber.connect();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Initilizing EndPoint
app.post("/deploy", async (req, res) => {
  try {
    const repoUrl = req.body.repoUrl;
    console.log(repoUrl);
    const id = generate();
    await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

    // function to get All files
    const files = getAllFiles(path.join(__dirname, `output/${id}`));

    //Function to upload files on S3
    files.forEach(async (file) => {
      await uploadFile(file.slice(__dirname.length + 1), file);
    });

    // Redis Logic
    await new Promise((resolve) => setTimeout(resolve, 5000));
    publisher.lPush("build-queue", id);
    publisher.hSet("status", id, "uploaded");

    res.json(id);
  } catch (error) {
    console.error("Error Occured", error);
  }
});

// Status Endpoint
app.get("/status", async (req, res) => {
  try {
    const id = req.query.id;
    const response = await subscriber.hGet("status", id as string);
    res.json({
      status: response,
    });
  } catch (error) {
    console.error("Error While Status Fetching", error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
