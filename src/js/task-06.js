
const inputEl = document.querySelector('#validation-input');

const onInput = (event) => {    
   let userName = inputEl.value;
    return userName.length >= inputEl.dataset.length 
    ? inputEl.classList.add('valid') 
    : inputEl.classList.add('invalid');
    
}

inputEl.addEventListener('blur', onInput);
