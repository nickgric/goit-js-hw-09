const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnStop.disabled = true;
let bodyColorChangerTimer = null;

const startBtnClick = () => {
  bodyColorChanger();
  bodyColorChangerTimer = setInterval(bodyColorChanger, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
};

const bodyColorChanger = () => {
  body.style.backgroundColor = getRandomHexColor();
};

const stopBtnClick = () => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearTimeout(bodyColorChangerTimer);
};

btnStart.addEventListener('click', startBtnClick);
btnStop.addEventListener('click', stopBtnClick);
