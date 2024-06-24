import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('#swiper-products', {
    modules: [Navigation],
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    slideToClickedSlide: true,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 576px
        576: {
            slidesPerView: 2
        },
        // when window width is >= 1440px
        1440: {
            slidesPerView: 4
        }
    }
});
