import { readFileSync } from "node:fs";

export function version() {
  const file = readFileSync("package.json", "utf-8");
  const version = JSON.parse(file).version;
  console.log(version);
}
