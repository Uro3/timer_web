import './style.scss';

import Timer from './ts/Timer';

const timer = new Timer(4000, 500);
const callback = (time: number) => {
  console.log(time);
};
timer.registerCallback(callback);
timer.start();
