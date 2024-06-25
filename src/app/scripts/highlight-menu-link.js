const sections = document.querySelectorAll('#menu a');

const highLightonScroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const linkName = currLink.getAttribute('href');

        const { offsetTop, offsetHeight } = document.querySelector(linkName);
        if (offsetTop <= scrollPos && (offsetTop + offsetHeight > scrollPos)) {
            document.querySelector('#menu ul li a').classList.remove('active');
            currLink.classList.add('active');
        } else {
            currLink.classList.remove('active');
        }
    }
}

highLightonScroll();
window.addEventListener('scroll', highLightonScroll);
