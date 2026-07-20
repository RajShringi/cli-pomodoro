#!/usr/bin/env node

async function main() {
  const [, , command, ...commandArgs] = process.argv;
  console.log(`command is = ${command}, args = ${commandArgs[0]}`);
}

try {
  await main();
} catch (error) {
  console.error(error);
  process.exit(1);
}
