const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('#top-menu');
const closeIcon = document.querySelector('.close-icon');
const links = document.querySelectorAll('#top-menu ul li');

function display() {
  mobileMenu.style.transform = 'translateX(0%)';
}

function disapear() {
  mobileMenu.style.transform = 'translateX(100%)';
}

menuIcon.addEventListener('click', display);
closeIcon.addEventListener('click', disapear);

links.forEach((link) => {
  link.addEventListener('click', disapear);
});