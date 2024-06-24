const header = document.querySelector('#header');
const logoDark = header.querySelector('.logo--dark');
const logoLight = header.querySelector('.logo--light');
const halfScreen = document.documentElement.clientHeight / 2;

window.addEventListener('scroll', () => {
    if (!header || !logoDark || !logoLight) return

    if (window.scrollY >= halfScreen) {
        header.classList.add('header--on-scroll');
        logoDark.classList.add('is-hidden');
        logoLight.classList.remove('is-hidden');
    } else {
        header.classList.remove('header--on-scroll');
        logoDark.classList.remove('is-hidden');
        logoLight.classList.add('is-hidden');
    }
});
