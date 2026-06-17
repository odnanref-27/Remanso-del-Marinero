var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,

    coverflowEffect: {
        depth: 500,
        modifier: 1,
        rotate: 0,
        stretch: 0,
        slideShadows: true
    }
});

