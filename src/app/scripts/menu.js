const navbarWrapper = document.querySelector("#navbar");
const navbarMenu = document.querySelector("#menu");
const burgerMenu = document.querySelector("#burger");
const logoDark = header.querySelector('.logo--dark');
const logoLight = header.querySelector('.logo--light');
const body = document.body

burgerMenu?.addEventListener("click", () => {
    navbarWrapper.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
    burgerMenu.classList.toggle("is-active");
    body.classList.toggle('lock');

    logoDark.classList.add('is-hidden');
    logoLight.classList.remove('is-hidden');
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
