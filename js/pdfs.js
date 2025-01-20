const swipers = document.querySelectorAll('.swiper-container');
swipers.forEach(swiperEl => {
    new Swiper(swiperEl, {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});