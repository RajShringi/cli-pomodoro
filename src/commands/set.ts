import { updateConfig } from "../storage/config.js";
import { isSetField } from "../validation/isSetField.js";

export const SET_FIELDS = ["work", "break"] as const;
export type SetField = (typeof SET_FIELDS)[number];

export function set(args: string[]) {
  const [field, value] = args;
  const duration = Number(value);

  if (!field || !isSetField(field)) {
    console.error(`Error: Unknown setting "${field ?? ""}".

Usage:
  pomodoro set work <minutes>
  pomodoro set break <minutes>
`);
    return;
  }

  if (Number.isNaN(duration)) {
    console.error("Error: Duration must be a number.");
    return;
  }

  if (!Number.isInteger(duration)) {
    console.error("Error: Duration must be a whole number.");
    return;
  }

  if (duration <= 0) {
    console.error("Error: Duration must be greater than zero.");
    return;
  }

  // update work duration
  if (field === "work") {
    updateConfig({
      workDuration: duration,
    });
    console.log(`✅ Work duration set to ${duration} minutes`);
    return;
  }
  // update break duration
  updateConfig({
    breakDuration: duration,
  });
  console.log(`✅ Break duration set to ${duration} minutes`);
}
