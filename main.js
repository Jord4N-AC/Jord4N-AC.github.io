const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('#top-menu');
const closeIcon = document.querySelector('.close-icon');
const links = document.querySelectorAll('#top-menu ul li');
const blurIntro = document.querySelector('#intro');

function display() {
  mobileMenu.style.transform = 'translateX(0%)';
  blurIntro.style.filter = 'blur(3px)';
  menuIcon.style.display = 'none';
}

function disapear() {
  mobileMenu.style.transform = 'translateX(-100%)';
  blurIntro.style.filter = 'blur(0px)';
  menuIcon.style.display = 'inline-block';
}

menuIcon.addEventListener('click', display);
closeIcon.addEventListener('click', disapear);

links.forEach((link) => {
  link.addEventListener('click', display);
});