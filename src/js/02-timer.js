import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const timeInput = document.querySelector('#datetime-picker');

const labelDays = document.querySelector('[data-days]');
const labelHours = document.querySelector('[data-hours]');
const labelMinutes = document.querySelector('[data-minutes]');
const labelSeconds = document.querySelector('[data-seconds]');

const timer = document.querySelector('.timer');
const values = document.querySelectorAll('.value');
const labels = document.querySelectorAll('.label');
const fields = document.querySelectorAll('.field');

timer.style.display = 'flex';
timer.style.gap = '20px';
timer.style.marginTop = '20px';

startBtn.disabled = true;

values.forEach(value => {
  value.style.fontSize = '40px';
  value.style.fontWeight = '900';
});

labels.forEach(label => {
  label.style.fontSize = '8px';
  label.style.display = 'flex';
  label.style.justifyContent = 'center';
});

fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
});

let currentDate = new Date();
let timerMs = 0;
let timerObj = {};
let selectedDate = 0;

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = +Date.parse(selectedDates[0]);
    timerMs = selectedDate - +Date.parse(currentDate);
    if (timerMs <= 0) {
      Notify.failure('Please choose a date in the future!');
      return;
    }

    startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', flatpickrOptions);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function timerUpdater() {
  labelsUpdater();
  Notify.success('The timer has started');
  setInterval(labelsUpdater, 1000);
}

function labelsUpdater() {
  startBtn.disabled = true;
  timeInput.disabled = true;

  timerMs = selectedDate - +Date.parse(currentDate);

  if (timerMs < 0) {
    Notify.success('Timer has expired');
    return;
  }

  timerObj = convertMs(timerMs);

  labelDays.textContent = addLeadingZero(timerObj.days);
  labelHours.textContent = addLeadingZero(timerObj.hours);
  labelMinutes.textContent = addLeadingZero(timerObj.minutes);
  labelSeconds.textContent = addLeadingZero(timerObj.seconds);

  timerMs = timerMs - 1000;
}

startBtn.addEventListener('click', timerUpdater);
