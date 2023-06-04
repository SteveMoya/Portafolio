var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        pervEl:".swiper-button-prev"
    }
}
);

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:4,
    spaceBetween: 30,
    loop:true,
    loopFillGroupWithBlack:true,
    navigation: {
        nextEl:".swiper-button-next",
        pervEl:".swiper-button-prev"
    },
    breakpoints : {
        0:{
            slidesPerView:1
        },
        520: {
            slidesPerView:2
        },
        950: {
            slidesPerView:3
        }
    }
});