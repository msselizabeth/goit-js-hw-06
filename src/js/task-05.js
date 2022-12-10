
const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output')

const onInputName = (event) => {
return inputEl.value
? nameEl.textContent = inputEl.value
: nameEl.textContent = 'Anonymous'
}

inputEl.addEventListener('input', onInputName);

