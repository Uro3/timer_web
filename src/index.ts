import './style.scss';

import Timer from './js/timer';

const timer = new Timer(4000, 500);
const callback = (time: number) => {
  console.log(time);
};
timer.registerCallback(callback);
timer.start();
