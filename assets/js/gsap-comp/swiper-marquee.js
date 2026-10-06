(function ($) {
    "use strict";
    var windowOn = $(window);

swiper = new Swiper(".heading-slide__active", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    speed: 8000,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 0.9,
        reverseDirection: false,
        disableOnInteraction: false
    }
});

})(jQuery);