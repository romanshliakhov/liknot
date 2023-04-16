import Swiper from '../vendor/swiper.js';

// slider partners top
let partnersSliderTop = new Swiper('.partners__slider-top', {
  observer: true,
  observeParents: true,
  // centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  loopedSlides: 3000,
  // slidesPerGroup: 1,
  loopPreventsSlide: false,
  // loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true
  }
});

// slider partners bot
let partnersSliderBot = new Swiper('.partners__slider-bot', {
  observer: true,
  observeParents: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  loopedSlides: 3000,
  // slidesPerGroup: 1,
  loopPreventsSlide: false,
  // loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false,
  }
});








