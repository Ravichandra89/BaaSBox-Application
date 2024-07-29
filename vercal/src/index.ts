import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./generate";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Initilizing EndPoint
app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;
  console.log(repoUrl);
  const id = generate();
  // await simpleGit().clone(repoUrl, `output/${id}`);
  await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

  // 
  res.json(id);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
