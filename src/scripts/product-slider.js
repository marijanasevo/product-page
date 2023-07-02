import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    breakpoints: {
      950: {
        perPage: 1.2,
        gap: '3rem',
        arrows: false,
        autoWidth: true,
      },
    },
    perPage: 3,
    gap: '3rem',
    width: '96.6rem',
    autoWidth: false,
    pagination: false,
  }).mount();
});
