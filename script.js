// import { moveSlider } from "./js/moveSlider";

const images = [
  {
    url: "./images/Rostov-on-don_admiral.jpg",
    name: "ROSTOV-ON-DON ADMIRAL",
    city: ["Rostov-on-Don", " LCD admiral"],
    area: "81 m<sup>2</sup>",
    time: "3.5 months",
  },
  {
    url: "./images/Sochi.jpg",
    name: "SOCHI THIEVES",
    city: ["Sochi", " Thieves"],
    area: "105 m<sup>2",
    time: "3 months",
  },
  {
    url: "./images/Rostov-on-don_patriotic.jpg",
    name: "ROSTOV-ON-DON PATRIOTIC",
    city: ["Rostov-on-Don", " Patriotic"],
    area: "93 m<sup>2</sup>",
    time: "4 months",
  },
];

function initSlider(images, options) {
  if (!images || !images.length) return;

  options = options || {
    dots: true,
    autoplay: true,
    autoplayInterval: 5000,
    arrows: true,
  };

  const sliderWrapper = document.querySelector(".main__images_slider");
  const sliderImages = sliderWrapper.querySelector(".slider__image");
  const sliderNavigation = document.querySelector(".slider__navigation");
  const oneSliderArrow = sliderNavigation.querySelectorAll(".slider__arrow");
  const textWrapper = document.querySelector(".main__text");
  const dotsWrapper = textWrapper.querySelector(".slider__points")
  const linkWrapper = document.querySelector(".main__images_links");
  const cityWrapper = document.querySelector(".city");
  const areaWrapper = document.querySelector(".area");
  const timeWrapper = document.querySelector(".time");

  initImages();
  initLinks();

  if (options.dots) {
    initDots();
  } else {
    dotsWrapper.style.display = "none"
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
    linkWrapper.querySelector(".active").classList.remove("active");
    linkWrapper.querySelector(`.n${num}`).classList.add("active");
    cityWrapper.querySelector(".active").classList.remove("active");
    cityWrapper.querySelector(`.n${num}`).classList.add("active");
    areaWrapper.querySelector(".active").classList.remove("active");
    areaWrapper.querySelector(`.n${num}`).classList.add("active");
    timeWrapper.querySelector(".active").classList.remove("active");
    timeWrapper.querySelector(`.n${num}`).classList.add("active");

    if (options.dots) {
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

  function initLinks() {
    images.forEach((image, index) => {
      let linkElement = document.createElement("li");
      linkElement.classList = `main__images_link n${index} ${
        index ? "" : "active"
      }`;
      linkElement.dataset.index = index;
      linkElement.innerHTML = image.name;
      linkElement.addEventListener("click", () =>
        moveSlider(this.dataset.index)
      );
      linkWrapper.appendChild(linkElement);
    });
  }

  function initArrows() {
    let lastIndex = images.length - 1;
    oneSliderArrow.forEach((arrow) => {
      arrow.addEventListener("click", () => {
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
    images.forEach((image, index) => {
      let dot = document.createElement("div");
      dot.className = `slider__points_item n${index} ${index ? "" : "active"}`;
      dot.dataset.index = index;
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
      dotsWrapper.appendChild(dot);
    })  }

  function initAutoplay() {
    setInterval(() => {
      let curNum = +sliderImages.querySelector(".active").dataset.index;
      let nextNum = curNum === images.length - 1 ? 0 : curNum + 1;
      moveSlider(nextNum);
    }, options.autoplayInterval);
  }

  function changeTextSpecifications() {
    images.forEach((image, index) => {
      let cityElement = document.createElement("p");
      cityElement.classList = `city-item n${index} ${index ? "" : "active"}`;
      cityElement.dataset.index = index;
      cityElement.innerHTML = image.city;
      cityWrapper.appendChild(cityElement);
      let areaElement = document.createElement("p");
      areaElement.classList = `area-item n${index} ${index ? "" : "active"}`;
      areaElement.dataset.index = index;
      areaElement.innerHTML = image.area;
      areaWrapper.appendChild(areaElement);
      let timeElement = document.createElement("p");
      timeElement.classList = `time-item n${index} ${index ? "" : "active"}`;
      timeElement.dataset.index = index;
      timeElement.innerHTML = image.time;
      timeWrapper.appendChild(timeElement);
    });
  }

  changeTextSpecifications();
}

document.addEventListener("DOMContentLoaded", () => {
  let sliderOptions = {
    dots: true,
    autoplay: true,
    autoplayInterval: 5000,
    arrows: true,
  };

  initSlider(images, sliderOptions);
});
