import './style.scss';

import TimerController from './ts/TimerController';

const timerView = document.getElementById('timer_view_container');

if (timerView) {
  const addMinutesButton = timerView.getElementsByClassName('add_minutes_button')[0];
  const addSecondsButton = timerView.getElementsByClassName('add_seconds_button')[0];
  const operationButton = timerView.getElementsByClassName('operation_button')[0];
  const clearButton = timerView.getElementsByClassName('clear_button')[0];
  const minute = timerView.getElementsByClassName('minute')[0];
  const second = timerView.getElementsByClassName('second')[0];

  const timer = new TimerController(minute, second);

  addMinutesButton.addEventListener('click', () => timer.addMinutes(1));
  addSecondsButton.addEventListener('click', () => timer.addSeconds(10));
  operationButton.addEventListener('click', timer.operateTimer);
  clearButton.addEventListener('click', timer.clear);
  document.addEventListener('timer_start', () => {
    operationButton.innerHTML = 'stop';
  });
  document.addEventListener('timer_stop', () => {
    operationButton.innerHTML = 'start';
  });
  document.addEventListener('timer_finish', () => {
    operationButton.innerHTML = 'start';
    alert('finish');
  });
}
