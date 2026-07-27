import { getConfig } from "../storage/config.js";
import { runCountdown } from "../timer/countdown.js";
import { formatTime } from "../utils/time.js";
import chalk from "chalk";

export function start(_args: string[]) {
  const { workDuration } = getConfig();
  // const totalSeconds = workDuration * 60;
  process.stdout.write(`🍅 Work session (${workDuration} minutes) \n`);

  runCountdown(10, {
    onTick,
    onComplete,
  });
}

function onTick(totalSeconds: number, remainingSeconds: number) {
  progressBar(totalSeconds, remainingSeconds);
}

function progressBar(totalSeconds: number, remainingSeconds: number) {
  const progressBarWidth = 25;
  const completedSeconds = totalSeconds - remainingSeconds;

  const filledBars = Math.floor(
    (completedSeconds / totalSeconds) * progressBarWidth,
  );

  const theme = {
    filled: "█",
    empty: "░",
  };
  const completed = chalk.rgb(
    166,
    227,
    161,
  )(`${theme.filled}`.repeat(filledBars));
  const remaining = chalk.rgb(
    180,
    190,
    254,
  )(`${theme.empty}`.repeat(progressBarWidth - filledBars));

  const bar = completed + remaining;

  process.stdout.write("\r");
  process.stdout.clearLine(0);

  process.stdout.write(`[${bar}] ${formatTime(remainingSeconds)} remaining`);
}

function onComplete() {
  process.stdout.write("\n");
  process.stdout.write("\n☕️ Session complete! Take a break\n");
}
