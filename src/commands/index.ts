import { start } from "./start.js";

export const COMMANDS = {
  start,
};

export type Command = keyof typeof COMMANDS;
