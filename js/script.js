// BURGER-MENU
const burgerMenu = document.querySelector(".burger-menu");
const openedMenu = document.querySelector(".burger-menu__opened");

burgerMenu.addEventListener("click", () => {
  document.body.classList.toggle("lock");
  openedMenu.classList.toggle("visible");
});

const burgerLink = document.querySelectorAll(".burger-menu__link");

burgerLink.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("lock");
    openedMenu.classList.remove("visible");
    const block = document.querySelector(`#${link.innerText.toLowerCase()}`);

    block.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// SMOOTH SCROLL
const link = document.querySelectorAll(".header-menu__link");

link.forEach((link) => {
  link.addEventListener("click", () => {
    const block = document.querySelector(`#${link.innerText.toLowerCase()}`);

    block.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ABOUT SLIDER
const sliderField = document.querySelector(".about__slider_item-container");
const sliderItems = document.querySelectorAll(".about__slider_item");
const itemContainer = document.querySelector(".about__slider_item-container");

const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;
const prevBtn = isSmallScreen
  ? document.querySelectorAll(".hidden-btns button")[0]
  : document.querySelectorAll(".about__slider_btn")[0];
const nextBtn = isSmallScreen
  ? document.querySelectorAll(".hidden-btns button")[1]
  : document.querySelectorAll(".about__slider_btn")[1];

const gap = parseInt(window.getComputedStyle(itemContainer).gap) || 0;
const itemWidth = sliderItems[0].offsetWidth;
const sliderFieldWidth = window
  .getComputedStyle(sliderField)
  .width.slice(0, window.getComputedStyle(sliderField).width.length - 2);
const itemsToShow = Math.round(sliderFieldWidth / (itemWidth + gap));
const step = (itemWidth + gap) * itemsToShow;
const maxOffset = (sliderItems.length - itemsToShow) * (itemWidth + gap);

let offset = 0;

function updateSliderPosition() {
  sliderField.style.transform = `translateX(-${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  offset = Math.max(offset - step, 0);
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  offset = Math.min(offset + step, maxOffset);
  updateSliderPosition();
});
