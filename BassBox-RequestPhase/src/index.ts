import express from "express";
import { S3 } from "aws-sdk";

const s3 = new S3({
  accessKeyId: "7ea9c3f8c7f0f26f0d21c5ce99d1ad6a",
  secretAccessKey:
    "b4df203781dd711223ce931a2d7ca269cdbf81bb530de4548474584951b798be",
  endpoint: "https://e21220f4758c0870ba9c388712d42ef2.r2.cloudflarestorage.com",
});

const app = express();
const port = process.env.PORT || 3001;

// Request Handler Route
app.get("/*", async (req, res) => {
  try {
    const host = req.hostname;
    const id = host.split(".")[0];
    const filePath = req.path;

    const response = await s3
      .getObject({
        Bucket: "vercel",
        Key: `output/${id}${filePath}`,
      })
      .promise();

    const contents = response.Body;

    if (!contents) {
      res.status(404).send("File not found");
      return;
    }

    const type = filePath.endsWith(".html")
      ? "text/html"
      : filePath.endsWith(".css")
      ? "text/css"
      : "application/javascript";

    res.set("Content-Type", type);
    res.send(contents);
  } catch (error) {
    console.error("Error retrieving file from S3", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
