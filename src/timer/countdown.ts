type CountdownOptions = {
  onTick: (totalSeconds: number, remainingSeconds: number) => void;
  onComplete?: () => void;
};

export function runCountdown(seconds: number, options: CountdownOptions) {
  const totalSeconds = seconds;
  function tick() {
    options.onTick(totalSeconds, seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(intervalId);
      options.onComplete?.();
    }
  }

  tick();

  const intervalId = setInterval(tick, 1000);

  return {
    stop: () => clearInterval(intervalId),
  };
}
