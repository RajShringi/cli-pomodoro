import { startBreak } from "./break.js";
import { config } from "./config.js";
import { set } from "./set.js";
import { start } from "./start.js";

export const COMMANDS = {
  start,
  set,
  config,
  break: startBreak,
};

export type Command = keyof typeof COMMANDS;
