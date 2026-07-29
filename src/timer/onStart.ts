import { breakStartMessages, workStartMessages } from "../messages.js";
import { getRandomMessage } from "../utils/time.js";
import type { PomodoroMode } from "./runSession.js";

export function onStart(mode: PomodoroMode) {
  const messages = mode === "work" ? workStartMessages : breakStartMessages;

  console.log(getRandomMessage(messages));
}
