import { set } from "./set.js";
import { start } from "./start.js";

export const COMMANDS = {
  start,
  set,
};

export type Command = keyof typeof COMMANDS;
