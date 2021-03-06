const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Functions
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email 
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid')
    }
}

//check all fields
function checkRequired(inputArr){
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        }else {
            showSuccess(input);
        }
    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`)
    }else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2){
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

//EventListeners
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);


    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else{
    //     showSuccess(username)
    // }

    // if (email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid')
    // } else{
    //     showSuccess(email)
    // }

    // if (password.value === '') {
    //     showError(password, 'password is required');
    // } else{
    //     showSuccess(password)
    // }

    // if (password2.value === '') {
    //     showError(password2, 'password2 is required');
    // } else{
    //     showSuccess(password2)
    // }
})
