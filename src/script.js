function toggleSecondSidebar() {

    const firstSidebar = document.getElementById('sidebar1');
    const secondSidebar = document.getElementById('sidebar2');

    // Toggle visibility of the sidebars
    firstSidebar.classList.toggle('hidden');
    secondSidebar.classList.toggle('hidden');
}

// Swiper
var slider = new Swiper('.product-swiper-container', {
    slidesPerView: 4,
    loop: false,
    spaceBetween: 5,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        width: 1120,
      },
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }
  });