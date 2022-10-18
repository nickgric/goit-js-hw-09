import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const timeInput = document.querySelector('[datetime-picker]');

const labelDays = document.querySelector('[data-days]');
const labelHours = document.querySelector('[data-hours]');
const labelMinutes = document.querySelector('[data-minutes]');
const labelSeconds = document.querySelector('[data-seconds]');

const timer = document.querySelector('.timer');
const values = document.querySelectorAll('.value');
const labels = document.querySelectorAll('.label');
const fields = document.querySelectorAll('.field');

timer.style.display = 'flex';
timer.style.gap = '10px';
timer.style.marginTop = '20px';

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

console.log(fields);
