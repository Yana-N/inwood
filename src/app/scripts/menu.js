const navbarWrapper = document.querySelector("#navbar");
const navbarMenu = document.querySelector("#menu");
const burgerMenu = document.querySelector("#burger");

burgerMenu.addEventListener("click", () => {
    navbarWrapper.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
    burgerMenu.classList.toggle("is-active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarWrapper.classList.remove("is-active");
            navbarMenu.classList.remove("is-active");
            burgerMenu.classList.remove("is-active");
        }
    }
});
