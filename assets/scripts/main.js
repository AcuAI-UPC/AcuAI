const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu_horizontal");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
