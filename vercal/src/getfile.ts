import path from "path";
import fs from "fs/promises";

export const getAllFiles = async (folderPath: string): Promise<string[]> => {
  let response: string[] = [];

  const allFilesAndFolders = await fs.readdir(folderPath);

  for (const file of allFilesAndFolders) {
    const fullFilePath = path.join(folderPath, file);
    const fileStat = await fs.stat(fullFilePath);

    if (fileStat.isDirectory()) {
      // Iterate it's file Recursivly
      const nestedFiles = await getAllFiles(fullFilePath);

      response = response.concat(nestedFiles);
    } else {
      response.push(fullFilePath);
    }
  }

  return response;
};
