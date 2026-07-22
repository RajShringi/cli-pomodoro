type CountdownOptions = {
  onTick: (remainingSeconds: number) => void;
  onComplete?: () => void;
};

export function runCountdown(totalSeconds: number, options: CountdownOptions) {
  function tick() {
    options.onTick(totalSeconds);
    totalSeconds--;
    if (totalSeconds < 0) {
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
