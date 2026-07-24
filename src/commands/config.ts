import { getConfig } from "../storage/config.js";

export function config(_args: string[]) {
  const userConfig = getConfig();
  console.log(`
Current Configuration

Work Duration: ${userConfig.workDuration} minutes
Break Duration: ${userConfig.breakDuration} minutes
`);
}
