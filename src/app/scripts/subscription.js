// subscription
const email = document.querySelector("#email");
const submitButton = document.querySelector("#submit-btn");

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validateEmail = (email) => String(email).toLowerCase().match(regexp);

const checkInputEmail = (e) => {
    const target = e?.target?.value

    !target || !validateEmail(target)
        ? submitButton.setAttribute("disabled", "disabled")
        : submitButton.removeAttribute("disabled")
}

checkInputEmail()
email.addEventListener("blur", checkInputEmail)
email.addEventListener("input", checkInputEmail)
