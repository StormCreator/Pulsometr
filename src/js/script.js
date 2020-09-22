import cards from './modules/cards';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', function() {
    $('.slider__wrapper').slick({
        autoplay: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/next-arrow.png"></button>',
    });

   cards('.catalog__item-link', '.catalog__item-hide', '.catalog__item-show', 'catalog__item-hide-active', 'inActive', '.catalog__item-back');
   tabs('.button-tab', '.catalog__content', 'button-tab-active', 'catalog__content-active');
});




