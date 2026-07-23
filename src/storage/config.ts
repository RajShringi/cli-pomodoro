import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

type Config = {
  workDuration: number;
  breakDuration: number;
};

const DEFAULT_CONFIG: Config = {
  workDuration: 25,
  breakDuration: 5,
};

const POMODIR = join(homedir(), ".pomodoro");
const CONFIG_FILE = join(POMODIR, "config.json");

function initializeStorage() {
  mkdirSync(POMODIR, { recursive: true });

  if (!existsSync(CONFIG_FILE)) {
    writeFileSync(CONFIG_FILE, JSON.stringify(DEFAULT_CONFIG, null, 2));
  }
}

export function getConfig(): Config {
  initializeStorage();

  const file = readFileSync(CONFIG_FILE, "utf-8");
  return JSON.parse(file) as Config;
}

export function updateConfig(config: Partial<Config>) {
  initializeStorage();

  const currentConfig = getConfig();

  const updatedConfig: Config = {
    ...currentConfig,
    ...config,
  };

  writeFileSync(CONFIG_FILE, JSON.stringify(updatedConfig, null, 2));
}
