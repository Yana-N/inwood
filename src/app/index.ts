// core app styles:
import './index.scss'

// Toggle to show and hide navbar menu
const navbarWrapper = document.querySelector("#navbar");
const navbarMenu = document.querySelector("#menu");
const burgerMenu = document.querySelector("#burger");

burgerMenu.addEventListener("click", () => {
    navbarWrapper.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
    burgerMenu.classList.toggle("is-active");
});

// Fixed navbar menu on window resizing
window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
            burgerMenu.classList.remove("is-active");
        }
    }
});
