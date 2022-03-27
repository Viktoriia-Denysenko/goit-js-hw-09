const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

let timerId = null;

stopBtnRef.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
}

function onStopBtnClick() {
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
  clearInterval(timerId);
}
