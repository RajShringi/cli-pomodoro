import { getConfig } from "../storage/config.js";
import { runCountdown } from "../timer/countdown.js";
import { formatTime } from "../utils/time.js";

export function start(_args: string[]) {
  const { workDuration } = getConfig();
  const totalSeconds = workDuration * 60;
  console.log(`🍅 Work session (${workDuration} minutes)\n`);

  runCountdown(totalSeconds, {
    onTick,
    onComplete,
  });
}

function onTick(seconds: number) {
  process.stdout.write(`\r${formatTime(seconds)} remaining`);
}

function onComplete() {
  process.stdout.write("\n");
  console.log("🍅 Session complete!");
}
