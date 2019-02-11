class Timer {
  private targetTime: number;
  private frequency: number;
  private startTime: number = 0;
  private intervalId: number = 0;
  private _leftTime: number = 0

  constructor(targetTime: number, frequency: number) {
    this.targetTime = targetTime;
    this.frequency = frequency;
  }

  get leftTime(): number {
    return this._leftTime;
  } 

  public start = () => {
    this.startTime = Date.now();
    this.intervalId = setInterval(this.countdown, this.frequency);
  }

  private countdown = () => {
    const pastTime = Date.now() - this.startTime;
    this._leftTime = this.targetTime - pastTime;
    console.log(this._leftTime);
    if(this._leftTime < 0) {
      this.stop();
    }
  }
  
  public stop = () => {
    clearInterval(this.intervalId);
  }
}

export default Timer;
