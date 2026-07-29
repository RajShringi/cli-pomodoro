#!/usr/bin/env node

import { help } from "./commands/help.js";
import { COMMANDS } from "./commands/index.js";
import { version } from "./commands/version.js";
import { isCommand } from "./validation/isCommand.js";

async function main() {
  const [, , command, ...commandArgs] = process.argv;

  if (command === "help") {
    help();
    return;
  }
  if (command === "version") {
    version();
    return;
  }

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
