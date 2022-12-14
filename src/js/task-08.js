
const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit (event) {
event.preventDefault();
const {email, password} = event.currentTarget.elements;
const userLog = {
    email: email.value,
    password: password.value,
}

 email.value === ''|| password.value === '' 
? alert ('Всі поля повинні бути заповнені') 
: console.log(userLog, formEl.reset());

}

