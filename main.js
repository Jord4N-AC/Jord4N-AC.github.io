const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector("#top-menu");

function display() {
  mobileMenu.style.transform = "translateX(0%)";
}

menuIcon.addEventListener("click", display);