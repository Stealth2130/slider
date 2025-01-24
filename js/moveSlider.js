const sliderWrapper = document.querySelector(".main__images_slider");
const sliderImages = sliderWrapper.querySelector(".slider__image");
const sliderArrows = sliderWrapper.querySelector(".slider__arrows");
const oneSliderArrow = sliderArrows.querySelectorAll(".slider__arrow");
const textWrapper = document.querySelector(".main__text");
const linkWrapper = document.querySelector(".main__images_links");
const cityWrapper = document.querySelector(".text__specifications_city");
const areaWrapper = document.querySelector(".area");
const timeWrapper = document.querySelector(".time");

export function moveSlider(num) {
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
    let dotsWrapper = document.querySelector(".slider__points");
    dotsWrapper.querySelector(".active").classList.remove("active");
    dotsWrapper.querySelector(`.n${num}`).classList.add("active");
  }
}
