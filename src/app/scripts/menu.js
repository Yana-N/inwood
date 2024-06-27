const navbarWrapper = document.querySelector("#navbar");
const navbarMenu = document.querySelector("#menu");
const burgerMenu = document.querySelector("#burger");
const logoDark = header.querySelector('.logo--dark');
const logoLight = header.querySelector('.logo--light');
const body = document.body
const menuBreakpoint = 1024

const handleMenuDisplay = (action) => {
    navbarWrapper.classList[action]("is-active");
    navbarMenu.classList[action]("is-active");
    burgerMenu.classList[action]("is-active");
    body.classList[action]('lock');
}

const reverseLogoColor = () => {
    logoDark.classList.add('is-hidden');
    logoLight.classList.remove('is-hidden');
}

burgerMenu?.addEventListener("click", () => {
    handleMenuDisplay('toggle');
    reverseLogoColor();
});

navbarMenu?.addEventListener('click', e => {
    if (e.target.closest('a')) handleMenuDisplay('remove');
})

window.addEventListener("resize", () => {
    if (window.innerWidth > menuBreakpoint && navbarMenu.classList.contains("is-active")) {
        handleMenuDisplay('remove');
    }
});
