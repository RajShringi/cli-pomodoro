import { breakCompleteMessages, workCompleteMessages } from "../messages.js";
import { getRandomMessage } from "../utils/time.js";
import type { PomodoroMode } from "./runSession.js";

export function onComplete(mode: PomodoroMode) {
  const messages =
    mode === "work" ? workCompleteMessages : breakCompleteMessages;

  process.stdout.write("\n");
  process.stdout.write("\x07");
  console.log(getRandomMessage(messages) + "\n");
}
