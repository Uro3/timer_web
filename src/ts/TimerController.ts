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

  public clear = () => {
    if (this.timer.isRunning) {
      this.stop();
    }
    this.minuteElement.innerHTML = '00';
    this.secondElement.innerHTML = '00';
  }

  public operateTimer = () => {
    if (this.timer.isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }

  private start = () => {
    const event = new Event('timer_start');
    const targetTime = utils.calculateMillsecond(
      parseInt(this.minuteElement.innerHTML, 10),
      parseInt(this.secondElement.innerHTML, 10),
    );
    this.timer.setTargetTime(targetTime);
    this.timer.registerCallback(this.updateView);
    this.timer.start();
    document.dispatchEvent(event);
  }

  private stop = () => {
    const event = new Event('timer_stop');
    this.timer.stop();
    document.dispatchEvent(event);
  }

  private updateView = (time: number) => {
    if (time === 0) {
      const event = new Event('timer_finish');
      document.dispatchEvent(event);
    }
    this.minuteElement.innerHTML = utils.addZero(Math.floor(time / (60 * 1000)));
    this.secondElement.innerHTML = utils.addZero(Math.floor((time % (60 * 1000)) / 1000));
  }
}

export default TimerController;
