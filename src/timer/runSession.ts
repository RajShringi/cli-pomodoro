import { getConfig } from "../storage/config.js";
import { runCountdown } from "./countdown.js";
import { onComplete } from "./onComplete.js";
import { onStart } from "./onStart.js";
import { progressBar } from "./progressBar.js";

export type PomodoroMode = "work" | "break";

export function runSession(mode: PomodoroMode) {
  const { workDuration, breakDuration } = getConfig();
  const totalSeconds = (mode === "work" ? workDuration : breakDuration) * 60;
  onStart(mode);
  runCountdown(totalSeconds, {
    onTick: (total, remaining) => progressBar(mode, total, remaining),
    onComplete: () => onComplete(mode),
  });
}
