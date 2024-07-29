import fs from "fs";
import path from "path";

export const getAllFiles = (folderPath: string): string[] => {
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
    console.error("Error reading directory:", error);
  }

  return response;
};
