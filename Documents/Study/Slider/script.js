const arrow_left = document.getElementById("arrow-left");
const arrow_right = document.getElementById("arrow-right");
const dot_1 = document.getElementById("dot-1");
const dot_2 = document.getElementById("dot-2");
const dot_3 = document.getElementById("dot-3");
const link_1 = document.getElementById("link-1");
const link_2 = document.getElementById("link-2");
const link_3 = document.getElementById("link-3");
const image = document.getElementById("image");
const rostov_admiral = document.querySelectorAll(".rostov-admiral");
const sochi = document.querySelectorAll(".sochi");
const rostov_patriotic = document.querySelectorAll(".rostov-patriotic");

const aparts = [
  { src: "images/Rostov-on-don admiral.jpg", alt: "Фото квартиры в Ростове-на-Дону, Адмирал"},
  { src: "images/Sochi.jpg", alt: "Фото квартиры в Сочи, Thieves"},
  { src: "images/Rostov-on-don patriotic.jpg", alt: "Фото квартиры в Ростове-на-Дону, Патриотик", },
];

const setImg = (index) => {
  image.src = aparts[index].src;
  image.alt = aparts[index].alt;
};

let currentIndex = "0";

arrow_left.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex == "-1") currentIndex = aparts.length - 1;
  console.log(aparts.length);
  setImg(currentIndex);
  class_active(currentIndex);
});

arrow_right.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex == aparts.length) currentIndex = "0";
  setImg(currentIndex);
  class_active(currentIndex);
});

link_1.addEventListener("click", () => {
  setImg("0");
  class_active("0");
});

link_2.addEventListener("click", () => {
  setImg("1");
  class_active("1");
});

link_3.addEventListener("click", () => {
  setImg("2");
  class_active("2");
});

dot_1.onclick = () => {
  setImg("0");
  class_active("0");
};

dot_2.onclick = () => {
  setImg("1");
  class_active("1");
};

dot_3.onclick = () => {
  setImg("2");
  class_active("2");
};

const class_active = (num_img) => {
  if (num_img == "0") {
    link_1.classList.add("active");
    link_2.classList.remove("active");
    link_3.classList.remove("active");
    dot_1.classList.add("active");
    dot_2.classList.remove("active");
    dot_3.classList.remove("active");
    for (let index = 0; index < rostov_admiral.length; index++) {
      rostov_admiral[index].style.display = "block";
    }
    for (let index = 0; index < sochi.length; index++) {
      sochi[index].style.display = "none";
    }
    for (let index = 0; index < rostov_patriotic.length; index++) {
      rostov_patriotic[index].style.display = "none";
    }
  } else if (num_img == "1") {
    link_1.classList.remove("active");
    link_2.classList.add("active");
    link_3.classList.remove("active");
    dot_1.classList.remove("active");
    dot_2.classList.add("active");
    dot_3.classList.remove("active");
    for (let index = 0; index < rostov_admiral.length; index++) {
      rostov_admiral[index].style.display = "none";
    }
    for (let index = 0; index < sochi.length; index++) {
      sochi[index].style.display = "block";
    }
    for (let index = 0; index < rostov_patriotic.length; index++) {
      rostov_patriotic[index].style.display = "none";
    }
  } else {
    link_1.classList.remove("active");
    link_2.classList.remove("active");
    link_3.classList.add("active");
    dot_1.classList.remove("active");
    dot_2.classList.remove("active");
    dot_3.classList.add("active");
    for (let index = 0; index < rostov_admiral.length; index++) {
      rostov_admiral[index].style.display = "none";
    }
    for (let index = 0; index < sochi.length; index++) {
      sochi[index].style.display = "none";
    }
    for (let index = 0; index < rostov_patriotic.length; index++) {
      rostov_patriotic[index].style.display = "block";
    }
  }
};

console.log(window.screen.width);
console.log(document.documentElement.clientWidth);
console.log(window.screen.height);
console.log(
document.documentElement.clientHeight);