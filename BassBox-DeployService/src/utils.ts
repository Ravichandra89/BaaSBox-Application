// Logic to convert things into HTML/ Css / JS

import { spawn, exec } from "child_process";
import path from "path";

export function BuildTheProject(id: string) {
  const child = exec(
    `cd ${path.join(__dirname, `output/${id}`)} npm install && npm run build`
  );

  child.stdout?.on("data", function (data) {
    console.log("stdout" + data);
  });

  child.stderr?.on("data", function (data) {
    console.log("stderr" + data);
  });

  child.on("close", function (code) {
    path.resolve("");
  });
}
