const signUpForm = document.querySelector("#sign-up-form");

const pw = document.querySelector("#pass");
const confirm = document.querySelector("#confirm");

const pwError = document.querySelector("#pw-error");
const confirmError = document.querySelector("#match-error");

signUpForm.addEventListener("submit", submitForm);

function submitForm(e) {
    if(pw.value.length < 8) {
        pwError.textContent = "* Password must be 8 characters long";
    }
};
