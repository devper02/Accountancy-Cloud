// menu burger
const burgerBtnNode = document.querySelector(".header__burger-btn");
const header = document.querySelector(".header");
const menu = document.querySelector(".nav");

burgerBtnNode.addEventListener("click", function () {
  header.classList.toggle("open");
});

// Закрыть меню при нажатии на Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Действие при клике
    document.querySelector(".header").classList.remove("open");
  }
});

// Закрыть меню при клике вне его
menu.addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
burgerBtnNode.addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".header").classList.remove("open");
});

menu.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.hasAttribute("data-open")) {
    header.classList.remove("open");
  }
});

// AOS
AOS.init();
