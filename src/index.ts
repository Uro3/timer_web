import './style.scss';

import TimerController from './ts/TimerController';

const timerView = document.getElementById('timer_view_container');

if (timerView) {
  const startButton = timerView.getElementsByClassName('timer_start_button')[0];
  const stopButton = timerView.getElementsByClassName('timer_stop_button')[0];
  const addMinutesButton = timerView.getElementsByClassName('add_minutes_button')[0];
  const addSecondsButton = timerView.getElementsByClassName('add_seconds_button')[0];
  const minute = timerView.getElementsByClassName('minute')[0];
  const second = timerView.getElementsByClassName('second')[0];

  const timer = new TimerController(minute, second);

  startButton.addEventListener('click', timer.start);
  stopButton.addEventListener('click', timer.stop);
  addMinutesButton.addEventListener('click', () => timer.addMinutes(1));
  addSecondsButton.addEventListener('click', () => timer.addSeconds(10));
}
