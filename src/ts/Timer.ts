class Timer {
  private targetTime: number;
  private frequency: number;
  private callback: (time: number) => void;
  private startTime: number = 0;
  private intervalId: number = 0;
  private _isRunning: boolean = false;

  constructor(targetTime: number, frequency: number) {
    this.targetTime = targetTime;
    this.frequency = frequency;
    this.callback = (time: number) => null;
  }

  get isRunning(): boolean {
    return this._isRunning;
  }

  public setTargetTime = (targetTime: number) => {
    this.targetTime = targetTime;
  }

  public registerCallback = (callback: (time: number) => void) => {
    this.callback = callback;
  }

  public start = () => {
    if (!this._isRunning) {
      this._isRunning = true;
      this.startTime = Date.now();
      const handler = () => {
        const time = this.countdown();
        this.callback(time);
      };
      setTimeout(handler, 1);
      this.intervalId = setInterval(handler, this.frequency);
    }
  }

  public stop = () => {
    if (this._isRunning) {
      clearInterval(this.intervalId);
      this._isRunning = false;
    }
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
