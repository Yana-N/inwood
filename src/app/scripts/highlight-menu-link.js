const sections = document.querySelectorAll('#menu a');
const navbar = document.querySelector('#navbar');

const highLightonScroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const { height: navbarHeight } = window.getComputedStyle(navbar)

    sections.forEach(section => {
        const currLink = section;
        const linkName = currLink.getAttribute('href');
        const { offsetTop, offsetHeight } = document.querySelector(linkName);
        const menuOffset = parseFloat(navbarHeight) * 2

        if ((offsetTop <= scrollPos + menuOffset) && (offsetTop + offsetHeight > scrollPos + menuOffset)) {
            document.querySelector('#menu ul li a').classList.remove('active');
            currLink.classList.add('active');
        } else {
            currLink.classList.remove('active');
        }
    })
}

highLightonScroll();
window.addEventListener('scroll', highLightonScroll);
