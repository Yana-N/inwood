import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('#swiper-testimonials', {
    modules: [Navigation],
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 80,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
