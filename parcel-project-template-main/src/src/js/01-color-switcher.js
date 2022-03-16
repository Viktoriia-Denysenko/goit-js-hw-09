const startBtnRef = document.querySelector('button [data - start]');
const stopBtnRef = document.querySelector('button [data - stop]');

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  console.log('start');
}

function onStopBtnClick() {
  console.log('stop');
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
