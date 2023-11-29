
// slider hello
let sliderElement = document.querySelector("#helloSlider");
let swiperSlider = {};

let helloSliderType = window.innerWidth < 991 ? 'mobile' : 'desktop'

function initSlider(type) {
  let sliderSettings = {}
  if (type === 'mobile') {
    sliderSettings = {
      // mobile settings
      direction: 'horizontal',
      observer: true,
      observeParents: true,
      loop: true,
      speed: 1500,
      effect: 'fade',
      autoplay: {
        delay: 2000,
      },
      slidesPerView: 1,
      sliderPerGroup: 1,
      pagination: {
        el: '#helloSlider .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    }
  } else {
    sliderSettings = {
      // desktop settings 
      direction: 'vertical',
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      speed: 1500,
      effect: 'fade',
      slidesPerView: 1,
      sliderPerGroup: 1,
      pagination: {
        el: '#helloSlider .swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    }
  }

  if (swiperSlider.destroy && typeof swiperSlider.destroy === "function") {
    swiperSlider.destroy(true);
  }

  swiperSlider = new Swiper(sliderElement, sliderSettings)
}
initSlider(helloSliderType)
window.addEventListener("resize", () => {
  if (window.innerWidth < 991 && helloSliderType == 'desktop') {
    helloSliderType = 'mobile'
    initSlider(helloSliderType)

  } else if (window.innerWidth > 991 && helloSliderType == 'mobile') {
    helloSliderType = 'desktop'
    initSlider(helloSliderType)
  }
});

// slider catalog
let catalogSliderElement = document.querySelector("#catalogSlider");
let catalogSwiperSlider = {};
let catalogSliderType = window.innerWidth < 768 ? 'mobile' : 'desktop'

function initSliderCatalog(type) {
  let catalogSliderSettings = {}
  if (type == 'desktop') {
    catalogSliderSettings = {
      direction: 'horizontal',
      grabCursor: true,
      observer: true,
      observeParents: true,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 16,
      pagination: {
        el: '#catalogSlider .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1400: {
          slidesPerView: 4
        }
      }
    }
  }

  if (type == "mobile" && catalogSwiperSlider.destroy && typeof catalogSwiperSlider.destroy === "function") {
    catalogSwiperSlider.destroy(true);
  }

  if (type == "desktop") {
    catalogSwiperSlider = new Swiper(catalogSliderElement, catalogSliderSettings)
  }

}

initSliderCatalog(catalogSliderType)

window.addEventListener("resize", () => {
  if (window.innerWidth < 768 && catalogSliderType == 'desktop') {
    catalogSliderType = 'mobile'
    initSliderCatalog(catalogSliderType)
  } else if (window.innerWidth > 768 && catalogSliderType == 'mobile') {
    catalogSliderType = 'desktop'
    initSliderCatalog(catalogSliderType)
  }
});


// slider catalogFav
let catalogFavSliderElement = document.querySelector("#catalogFavSlider");
let catalogFavSwiperSlider = {};
// унифицировать
let catalogFavSliderType = window.innerWidth < 768 ? 'mobile' : 'desktop'

function initSliderCatalogFav(type) {
  let catalogFavSliderSettings = {}
  if (type == 'desktop') {
    catalogFavSliderSettings = {
      direction: 'horizontal',
      grabCursor: true,
      slidesPerView: 2,
      spaceBetween: 16,
      pagination: {
        el: '#catalogFavSlider .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1400: {
          slidesPerView: 4,
        }
      }
    }
  }

  if (catalogFavSwiperSlider.destroy && typeof catalogFavSwiperSlider.destroy === "function") {
    catalogFavSwiperSlider.destroy(true);
  }

  if (type == "desktop") {
    catalogFavSwiperSlider = new Swiper(catalogFavSliderElement, catalogFavSliderSettings)
  }

}

initSliderCatalogFav(catalogFavSliderType)

window.addEventListener("resize", () => {
  if (window.innerWidth < 768 && catalogFavSliderType == 'desktop') {
    catalogFavSliderType = 'mobile'
    initSliderCatalogFav(catalogFavSliderType)
  } else if (window.innerWidth > 768 && catalogFavSliderType == 'mobile') {
    catalogFavSliderType = 'desktop'
    initSliderCatalogFav(catalogFavSliderType)
  }
});

// slider catalogFavourites
let catalogFavouritesSliderElement = document.querySelector("#catalogFavouritesSlider");
let catalogFavouritesSlider = {};
// унифицировать 
let catalogFavouritesSliderType = window.innerWidth < 768 ? 'mobile' : 'desktop'

function initSliderCatalogFavourites(type) {
  let catalogFavouritesSliderSettings = {}
  if (type == 'desktop') {
    catalogFavouritesSliderSettings = {
      direction: 'horizontal',
      grabCursor: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 16,
      // sliderPerGroup: 1,
      pagination: {
        el: '#catalogFavouritesSlider .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1400: {
          slidesPerView: 4,
        }
      }
    }
  }

  if (catalogFavouritesSlider.destroy && typeof catalogFavouritesSlider.destroy === "function") {
    catalogFavouritesSlider.destroy(true);
  }

  if (type == "desktop") {
    catalogFavouritesSlider = new Swiper(catalogFavouritesSliderElement, catalogFavouritesSliderSettings)
  }

}

initSliderCatalogFavourites(catalogFavouritesSliderType)

window.addEventListener("resize", () => {
  if (window.innerWidth < 768 && catalogFavouritesSliderType == 'desktop') {
    catalogFavouritesSliderType = 'mobile'
    initSliderCatalogFavourites(catalogFavouritesSliderType)
  } else if (window.innerWidth > 768 && catalogFavouritesSliderType == 'mobile') {
    catalogFavouritesSliderType = 'desktop'
    initSliderCatalogFavourites(catalogFavouritesSliderType)
  }
});


// slider reviews
const swiperReviews = new Swiper('#reviewsSlider', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ' #reviewsSlider .swiper-pagination',
    type: 'bullets',
    clickable: true,

  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 22
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 1
    },
    1200: {
      slidesPerView: 2,
    }
  }
});
