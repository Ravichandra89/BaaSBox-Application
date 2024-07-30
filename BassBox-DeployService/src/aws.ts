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
  try {
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

    await Promise.all(allPromises.filter((x) => x !== undefined));
  } catch (error) {
    console.error("Error while downloading files from S3", error);
  }
}

// Function to get all files
const getAllFiles = (folderPath: string): string[] => {
  let response: string[] = [];
  try {
    const allFilesAndFolders = fs.readdirSync(folderPath);
    allFilesAndFolders.forEach((file) => {
      const fullFilePath = path.join(folderPath, file);
      if (fs.statSync(fullFilePath).isDirectory()) {
        response = response.concat(getAllFiles(fullFilePath));
      } else {
        response.push(fullFilePath);
      }
    });
  } catch (error) {
    console.error("Error while getting all files", error);
  }
  return response;
};

// Function to copy the files from BuildProject process
export async function copyFilesFromBuildProjectModule(id: string) {
  try {
    const folderPath = path.join(__dirname, `output/${id}/dist`);
    const allFiles = getAllFiles(folderPath);
    allFiles.forEach((file) => {
      uploadFile(`dist/${id}` + file.slice(folderPath.length + 1), file);
    });
  } catch (error) {
    console.error("Error while copying files", error);
  }
}

// Function to upload on s3
const uploadFile = async (fileName: string, localFilePath: string) => {
  try {
    const fileContent = fs.readFileSync(localFilePath);
    await s3
      .upload({
        Body: fileContent,
        Bucket: "vercel",
        Key: fileName,
      })
      .promise();
  } catch (error) {
    console.error("Error while uploading BuildProject files to S3", error);
  }
};

export default getAllFiles;
