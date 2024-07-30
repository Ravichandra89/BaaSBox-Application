import { createClient, commandOptions } from "redis";
import { copyFilesFromBuildProjectModule, downloadS3Folder } from "./aws";
import { BuildTheProject } from "./utils";
const subscriber = createClient();
subscriber.connect();

const publisher = createClient();
publisher.connect();

async function main() {
  while (true) {
    try {
      const res = await subscriber.brPop(
        commandOptions({ isolated: true }),
        "build-queue",
        0
      );

      if (res && res.element) {
        const id = res.element;

        await downloadS3Folder(`output/${id}`);
        await BuildTheProject(id);
        copyFilesFromBuildProjectModule(id);
        publisher.hSet("status", id, "deployed");
      } else {
        console.log("No jobs in queue");
      }
      
    } catch (error) {
      console.error("Error processing Build Queue", error);
    }
  }
}

// Running Infinitly?
main();
