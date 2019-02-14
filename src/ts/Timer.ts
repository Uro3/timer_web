class Timer {
  private targetTime: number;
  private frequency: number;
  private callback: (time: number) => void;
  private startTime: number = 0;
  private intervalId: number = 0;

  constructor(targetTime: number, frequency: number) {
    this.targetTime = targetTime;
    this.frequency = frequency;
    this.callback = (time: number) => null;
  }

  public setTargetTime = (targetTime: number) => {
    this.targetTime = targetTime;
  }

  public registerCallback = (callback: (time: number) => void) => {
    this.callback = callback;
  }

  public start = () => {
    this.startTime = Date.now();
    const handler = () => {
      const time = this.countdown();
      this.callback(time);
    };
    setTimeout(handler, 1);
    this.intervalId = setInterval(handler, this.frequency);
  }

  public stop = () => {
    clearInterval(this.intervalId);
  }

  private countdown = () => {
    const pastTime = Date.now() - this.startTime;
    const leftTime = this.targetTime - pastTime;
    if (leftTime < 0) {
      this.stop();
      return 0;
    } else {
      return leftTime;
    }
  }
}

export default Timer;
