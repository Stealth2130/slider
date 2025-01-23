const images = [
  {
    url: "./images/Rostov-on-don_admiral.jpg",
    //     alt: "Фото квартиры в Ростове-на-Дону, Адмирал",
  },
  {
    url: "./images/Sochi.jpg",
    // alt: "Фото квартиры в Сочи, Thieves"
  },
  {
    url: "./images/Rostov-on-don_patriotic.jpg",
    // alt: "Фото квартиры в Ростове-на-Дону, Патриотик",
  },
];



function initSlider(images, options) {
  if (!images || !images.length) return;

  options = options || {
    dots: true,
    autoplay: true,
    autoplayInterval: 5000,
    arrows: false,
  };

  const sliderWrapper = document.querySelector(".main__images_slider");
  const sliderImages = sliderWrapper.querySelector(".slider__image");
  const sliderArrows = sliderWrapper.querySelector(".slider__arrows");
  const oneSliderArrow = sliderArrows.querySelectorAll(".slider__arrow");
  const textWrapper = document.querySelector(".main__text")

  initImages();

  if (options.dots) {
    initDots();
  }

  if (options.autoplay) {
    initAutoplay();
  }

  if (options.arrows) {
    initArrows();
  } else {
    oneSliderArrow.forEach((arrow) => {
      arrow.style.display = "none";
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(`.n${num}`).classList.add("active");

    if (options.dots) {
      let dotsWrapper = document.querySelector(".slider__points");
      dotsWrapper.querySelector(".active").classList.remove("active");
      dotsWrapper.querySelector(`.n${num}`).classList.add("active");
    }
  }

  function initImages() {
    images.forEach((image, index) => {
      let imageElement = document.createElement("div");
      imageElement.classList = `image n${index} ${index ? "" : "active"}`;
      imageElement.dataset.index = index;
      imageElement.style.backgroundImage = `url(${image.url})`;
      sliderImages.appendChild(imageElement);
      console.log(`url(${image.url})`);

    });
  }

  function initArrows() {
    let lastIndex = images.length - 1;
    oneSliderArrow.forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNum = +sliderImages.querySelector(".active").dataset.index;
        let nextNum;
        if (arrow.classList.contains("left")) {
          nextNum = curNum === 0 ? lastIndex : curNum - 1;
        } else {
          nextNum = curNum === lastIndex ? 0 : curNum + 1;
        }
        moveSlider(nextNum);
      });
    });
  }

  function initDots() {
    let dotsWrapper = document.createElement("div");
    dotsWrapper.className = "slider__points";
    images.forEach((image, index) => {
      let dot = document.createElement("div");
      dot.className = `slider__points_item n${index} ${
        index ? "" : "active"
      }`;
      dot.dataset.index = index;
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
      dotsWrapper.appendChild(dot);
    });
    textWrapper.appendChild(dotsWrapper);
  }

  function initAutoplay() {
    setInterval(() => {
      let curNum = +sliderImages.querySelector(".active").dataset.index;
      let nextNum = curNum === images.length - 1 ? 0 : curNum + 1;
      moveSlider(nextNum);
    }, options.autoplayInterval);
  }
}

function initLinks () {
  const link_1 = document.getElementById("link-1");
  const link_2 = document.getElementById("link-2");
  const link_3 = document.getElementById("link-3");

}

document.addEventListener("DOMContentLoaded", () => {
  let sliderOptions = {
    dots: true,
    autoplay: true,
    autoplayInterval: 5000,
    arrows: false,
  };

  initSlider(images, sliderOptions);
});
