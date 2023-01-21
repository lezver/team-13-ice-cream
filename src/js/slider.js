const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,

  // simulateTouch: true,
  touchRatio: 2,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 10000,
    stopOnLastSlide: false,
  },
});
