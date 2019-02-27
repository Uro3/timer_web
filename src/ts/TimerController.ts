import Timer from './Timer';
import utils from './utils';

class TimerController {
  private minuteElement: Element;
  private secondElement: Element;
  private timer: Timer;

  constructor(minuteElement: Element, secondElement: Element) {
    this.minuteElement = minuteElement;
    this.secondElement = secondElement;
    this.timer = new Timer(0, 500);
  }

  get isRunning(): boolean {
    return this.timer.isRunning;
  }

  public addMinutes = (value: number) => {
    const newMinutes = parseInt(this.minuteElement.innerHTML, 10) + value;
    if (newMinutes < 60) {
      this.minuteElement.innerHTML = utils.addZero(newMinutes);
    }
  }

  public addSeconds = (value: number) => {
    const newSeconds = parseInt(this.secondElement.innerHTML, 10) + value;
    if (newSeconds < 60) {
      this.secondElement.innerHTML = utils.addZero(newSeconds);
    }
  }

  public operateTimer = () => {
    if (this.timer.isRunning) {
      this.timer.stop();
    } else {
      const targetTime = utils.calculateMillsecond(
        parseInt(this.minuteElement.innerHTML, 10),
        parseInt(this.secondElement.innerHTML, 10),
      );
      this.timer.setTargetTime(targetTime);
      this.timer.registerCallback(this.updateView);
      this.timer.start();
    }
  }

  public start = () => {
    const targetTime = utils.calculateMillsecond(
      parseInt(this.minuteElement.innerHTML, 10),
      parseInt(this.secondElement.innerHTML, 10),
    );
    this.timer.setTargetTime(targetTime);
    this.timer.registerCallback(this.updateView);
    this.timer.start();
  }

  public stop = () => {
    this.timer.stop();
  }

  private updateView = (time: number) => {
    if (time === 0) {
      alert('finish!');
    }
    this.minuteElement.innerHTML = utils.addZero(Math.floor(time / (60 * 1000)));
    this.secondElement.innerHTML = utils.addZero(Math.floor((time % (60 * 1000)) / 1000));
  }
}

export default TimerController;
