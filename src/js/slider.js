const swiper = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  simulateTouch: true,
  touchRatio: 2,
  grabCursor: true,

  breakpoints: {
    480: {
      spaceBetween: -95,
    },
    610: {
      spaceBetween: -160,
    },
    768: {
      spaceBetween: 0,
    },
    1200: {
      spaceBetween: -100,
    },
    1440: {
      spaceBetween: -200,
      touchRatio: 3,
    },
  },
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
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});

const swiperGallery = new Swiper('.swiper-gallery', {
  speed: 750,
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  effect: 'fade',
  simulateTouch: true,
  touchRatio: 3,
  grabCursor: true,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
