import { startBreak } from "./break.js";
import { config } from "./config.js";
import { help } from "./help.js";
import { set } from "./set.js";
import { start } from "./start.js";
import { version } from "./version.js";

export const COMMANDS = {
  start,
  set,
  config,
  break: startBreak,
  help,
  version,
};

export type Command = keyof typeof COMMANDS;
