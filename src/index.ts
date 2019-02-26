import './style.scss';

import TimerController from './ts/TimerController';

const timerView = document.getElementById('timer_view_container');
const startButton = document.getElementById('timer_start_button');
const stopButton = document.getElementById('timer_stop_button');
const addMinutesButton = document.getElementById('add_minutes_button');
const addSecondsButton = document.getElementById('add_seconds_button');

if (timerView && startButton && stopButton && addMinutesButton && addSecondsButton) {
  const minute = timerView.getElementsByClassName('minute')[0];
  const second = timerView.getElementsByClassName('second')[0];
  const timer = new TimerController(minute, second);

  startButton.addEventListener('click', timer.start);
  stopButton.addEventListener('click', timer.stop);
  addMinutesButton.addEventListener('click', () => timer.addMinutes(1));
  addSecondsButton.addEventListener('click', () => timer.addSeconds(10));
}
