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
  link.addEventListener('click', disapear);
});

// Popup Detail Window

const popupContent = [
  {
    titleProject: 'Tonic',
    features: ['canopy', 'Back End Dev', '2015'],
    imgProject: 'images/cardsWorksSection/card1Detail.svg',
    contentProject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    links: ['https://jord4n-ac.github.io/my-portfolio/#section-2',
    'https://github.com/Jord4N-AC/my-portfolio']
  },
  {
    titleProject: 'Multi-Post Stories',
    features: ['facebook', 'Full Stack Dev', '2015'],
    imgProject: 'images/cardsWorksSection/card2.svg',
    contentProject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    links: ['https://jord4n-ac.github.io/my-portfolio/#section-2',
    'https://github.com/Jord4N-AC/my-portfolio']
  },
  {
    titleProject: 'Facebook 360',
    features: ['canopy', 'Full Stack Dev', '2015'],
    imgProject: 'images/cardsWorksSection/card1Detail.svg',
    contentProject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    links: ['https://jord4n-ac.github.io/my-portfolio/#section-2',
    'https://github.com/Jord4N-AC/my-portfolio']
  },
  {
    titleProject: 'Uber Navigation',
    features: ['Uber', 'Lead Developer', '2018'],
    imgProject: 'images/cardsWorksSection/card1Detail.svg',
    contentProject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    links: ['https://jord4n-ac.github.io/my-portfolio/#section-2',
    'https://github.com/Jord4N-AC/my-portfolio']
  }
];


const button = document.querySelector('#b1');
button.addEventListener('click', showModal);

function showModal() {    
    title.textContent = popupContent[0].titleProject;
    headerContainer.appendChild(title);
    console.log(popupContent[0]['titleProject']);
}


