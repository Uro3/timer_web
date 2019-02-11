class Timer {
  private targetTime: number;
  private frequency: number;
  private startTime: number = 0;
  private intervalId: number = 0;
  private callback: (time: number) => void = (time: number) => {};

  constructor(targetTime: number, frequency: number) {
    this.targetTime = targetTime;
    this.frequency = frequency;
  }

  public registerCallback = (callback: (time: number) => void) => {
    this.callback = callback;
  }

  public start = () => {
    this.startTime = Date.now();
    const handler = () => {
      const time = this.countdown();
      this.callback(time);
    }
    this.intervalId = setInterval(handler, this.frequency);
  }

  private countdown = () => {
    const pastTime = Date.now() - this.startTime;
    const leftTime = this.targetTime - pastTime;
    if(leftTime < 0) {
      this.stop();
      return 0;
    } else {
      return leftTime;
    }

  }

  public stop = () => {
    clearInterval(this.intervalId);
  }
}

export default Timer;
