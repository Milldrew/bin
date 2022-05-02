#!/usr/bin/env node
import chokidar from "chokidar";
import { spawnSync } from "child_process";
const watcher = chokidar.watch("src").on("change", () => {
  console.log(process.argv);
  console.log(process.cwd());
  spawnSync("schematics", [`${process.cwd()}:${process.argv[2]}`], {
    stdio: ["inherit", "inherit", "inherit"],
  });
});
