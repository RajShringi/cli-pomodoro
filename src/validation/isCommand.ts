import { COMMANDS, type Command } from "../commands/index.js";

export function isCommand(value: string): value is Command {
  return value in COMMANDS;
}
