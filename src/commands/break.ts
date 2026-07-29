import { runSession } from "../timer/runSession.js";

export function startBreak(_args: string[]) {
  runSession("break");
}
