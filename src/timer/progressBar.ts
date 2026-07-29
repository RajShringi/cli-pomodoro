import chalk from "chalk";
import { formatTime } from "../utils/time.js";
import type { PomodoroMode } from "./runSession.js";

export function progressBar(
  mode: PomodoroMode,
  totalSeconds: number,
  remainingSeconds: number,
) {
  const progressBarWidth = 25;
  const completedSeconds = totalSeconds - remainingSeconds;

  const filledBars = Math.floor(
    (completedSeconds / totalSeconds) * progressBarWidth,
  );

  const theme = {
    filled: "█",
    empty: "░",
  };

  const completed =
    mode === "work"
      ? chalk.green(`${theme.filled}`.repeat(filledBars))
      : chalk.yellow(`${theme.filled}`.repeat(filledBars));
  const remaining = chalk.gray(
    `${theme.empty}`.repeat(progressBarWidth - filledBars),
  );

  const bar = completed + remaining;

  process.stdout.write("\r");
  process.stdout.clearLine(0);

  process.stdout.write(`[${bar}] ${formatTime(remainingSeconds)} remaining`);
}
