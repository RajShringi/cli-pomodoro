import { runCountdown } from "../timer/countdown.js";
import { formatTime } from "../utils/time.js";

export async function start(_args: string[]) {
  let totalSeconds = 10;
  console.log(`🍅 start working`);

  runCountdown(totalSeconds, {
    onTick(seconds) {
      process.stdout.write(`\r${formatTime(seconds)}`);
    },

    onComplete() {
      process.stdout.write("\n");
      console.log("🍅 Session complete!");
    },
  });
}
