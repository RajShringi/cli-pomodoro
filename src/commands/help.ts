export function help() {
  console.log(
    `
Pomodoro CLI

Usage:
  pomodoro start               Start a work session
  pomodoro break               Start a break session
  pomodoro set work <minutes>  Set work duration
  pomodoro set break <minutes> Set break duration
  pomodoro config              Show current configuration
  pomodoro version             Show application version
  pomodoro help                Show this help message

Examples:
  pomodoro start
  pomodoro break
  pomodoro set work 50
  pomodoro set break 10
  pomodoro config
`,
  );
}
