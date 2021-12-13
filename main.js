const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('#top-menu');

menuIcon.addEventListener('click', ()=>{
  mobileMenu.classList.toggle('menu-active');
});
