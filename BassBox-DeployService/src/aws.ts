import { S3 } from "aws-sdk";
import fs from "fs";
import path from "path";

const s3 = new S3({
  accessKeyId: "7ea9c3f8c7f0f26f0d21c5ce99d1ad6a",
  secretAccessKey:
    "b4df203781dd711223ce931a2d7ca269cdbf81bb530de4548474584951b798be",
  endpoint: "https://e21220f4758c0870ba9c388712d42ef2.r2.cloudflarestorage.com",
});

// Function to download files from s3
export async function downloadS3Folder(prefix: string) {
  const allFiles = await s3
    .listObjectsV2({
      Bucket: "vercel",
      Prefix: prefix,
    })
    .promise();

  const allPromises =
    allFiles.Contents?.map(({ Key }) => {
      return new Promise((resolve, reject) => {
        if (!Key) {
          resolve("");
          return;
        }

        const localFilePath = path.join(__dirname, Key);
        const outputFile = fs.createWriteStream(localFilePath);
        const dirName = path.dirname(localFilePath);

        if (!fs.existsSync(dirName)) {
          fs.mkdirSync(dirName, { recursive: true });
        }

        s3.getObject({
          Bucket: "vercel",
          Key,
        })
          .createReadStream()
          .pipe(outputFile)
          .on("finish", () => resolve(""))
          .on("error", (err) => reject(err));
      });
    }) || [];

  console.log("Awaiting");

  await Promise.all(allPromises.filter((x) => x != undefined));
}
