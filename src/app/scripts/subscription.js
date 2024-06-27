// subscription
const email = document.querySelector("#email");
const submitButton = document.querySelector("#submit-btn");

const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
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
