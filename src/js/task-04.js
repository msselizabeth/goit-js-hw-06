
const valueEl = document.querySelector('#value');
const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onDecrementValue = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const onIncrementValue = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

buttonDecrementEl.addEventListener('click', onDecrementValue);
buttonIncrementEl.addEventListener('click', onIncrementValue);

