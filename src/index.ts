#!/usr/bin/env node

import { COMMANDS } from "./commands/index.js";
import { isCommand } from "./validation/isCommand.js";

async function main() {
  const [, , command, ...commandArgs] = process.argv;

  if (!command || !isCommand(command)) {
    console.error(`Invalid command`);
    process.exit(1);
  }

  const commandHandler = COMMANDS[command];
  await commandHandler(commandArgs);
}

try {
  await main();
} catch (error) {
  console.error(error);
  process.exit(1);
}
