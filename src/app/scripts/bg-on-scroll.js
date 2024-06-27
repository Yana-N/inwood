const header = document.querySelector('#header');
const logoDark = header.querySelector('.logo--dark');
const logoLight = header.querySelector('.logo--light');
const showPoint = document.documentElement.clientHeight * 0.1; // 10% of clientHeight

window.addEventListener('scroll', () => {
    if (!header || !logoDark || !logoLight) return

    if (window.scrollY >= showPoint) {
        header.classList.add('header--on-scroll');
        logoDark.classList.add('is-hidden');
        logoLight.classList.remove('is-hidden');
    } else {
        header.classList.remove('header--on-scroll');
        logoDark.classList.remove('is-hidden');
        logoLight.classList.add('is-hidden');
    }
});
