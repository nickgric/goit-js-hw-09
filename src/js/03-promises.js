import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const createBtn = document.querySelector('button');
const form = document.querySelector('form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

function submitEvent(event) {
  event.preventDefault();
  if (
    +delayInput.value <= 0 ||
    +stepInput.value <= 0 ||
    +amountInput.value <= 0
  ) {
    Notify.failure(`Select values more than zero please!`);
    return;
  }

  let delay = +delayInput.value;

  for (position = 1; position <= +amountInput.value; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay = delay + +stepInput.value;
  }
}

form.addEventListener('submit', submitEvent);
