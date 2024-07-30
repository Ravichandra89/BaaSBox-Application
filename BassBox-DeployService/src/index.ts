import { createClient, commandOptions } from "redis";
import { copyFinalDist, downloadS3Folder } from "./aws";
import { BuildProject } from "./utils";

async function main() {
  while (true) {
    const value = await subscriber.brPop(
        commandOptions({isolated: true}),
        "build-queue",
        0
    );

  }
}
