import './style.scss';

import TimerController from './ts/TimerController';

const timerView = document.getElementById('timer_view_container');
const startButton = document.getElementById('timer_start_button');
const stopButton = document.getElementById('timer_stop_button');
const timeInput = document.getElementById('time_input') as HTMLInputElement;
const setButton = document.getElementById('time_set_button');

if (timerView && startButton && stopButton && timeInput && setButton) {
  const hour = timerView.getElementsByClassName('hour')[0];
  const minute = timerView.getElementsByClassName('minute')[0];
  const second = timerView.getElementsByClassName('second')[0];
  const timer = new TimerController(hour, minute, second);

  startButton.addEventListener('click', timer.start);
  stopButton.addEventListener('click', timer.stop);
  setButton.addEventListener('click', () => {
    const timeStr = ('' + timeInput.value).split(':');
    hour.innerHTML = timeStr[0] || '00';
    minute.innerHTML = timeStr[1] || '00';
    second.innerHTML = timeStr[2] || '00';
  });
}
