 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

function onChangeColor () {
  body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = body.style.backgroundColor;
}

changeColorBtn.addEventListener('click', onChangeColor)



