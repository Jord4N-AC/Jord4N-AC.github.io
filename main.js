const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector("#top-menu");
const closeIcon = document.querySelector(".close-icon");
const links = document.querySelectorAll("#top-menu ul li");
const blurIntro = document.querySelector("#intro");

function display() {
  mobileMenu.style.transform = "translateX(0%)";
  blurIntro.style.filter = "blur(3px)";
  menuIcon.style.display = "none";
}

function disapear() {
  mobileMenu.style.transform = "translateX(-100%)";
  blurIntro.style.filter = "blur(0px)";
  menuIcon.style.display = "inline-block";
}

menuIcon.addEventListener("click", display);
closeIcon.addEventListener("click", disapear);

links.forEach((link) => {
  link.addEventListener("click", disapear);
});

// Popup Detail Window

const popupContent = [
  {
    titleProject: "Tonic",

    features: ["canopy", "Back End Dev", "2015"],

    imgProject: "images/cardsWorksSection/card1Detail.svg",

    contentProject: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

    technologies: ["html", "Ruby on rails", "css", "javaScript"],

    links: [
      "https://jord4n-ac.github.io/my-portfolio/#section-2",
      "https://github.com/Jord4N-AC/my-portfolio",
    ],
  },
  {
    titleProject: "Multi-Post Stories",
    features: ["facebook", "Full Stack Dev", "2015"],
    imgProject: "images/cardsWorksSection/card2.svg",
    contentProject: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

    technologies: ["html", "Ruby on rails", "css", "javaScript"],

    links: [
      "https://jord4n-ac.github.io/my-portfolio/#section-2",
      "https://github.com/Jord4N-AC/my-portfolio",
    ],
  },
  {
    titleProject: "Facebook 360",
    features: ["canopy", "Full Stack Dev", "2015"],
    imgProject: "images/cardsWorksSection/card1Detail.svg",
    contentProject: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

    technologies: ["html", "Ruby on rails", "css", "javaScript"],

    links: [
      "https://jord4n-ac.github.io/my-portfolio/#section-2",
      "https://github.com/Jord4N-AC/my-portfolio",
    ],
  },
  {
    titleProject: "Uber Navigation",
    features: ["Uber", "Lead Developer", "2018"],
    imgProject: "images/cardsWorksSection/card1Detail.svg",
    contentProject: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

    technologies: ["html", "Ruby on rails", "css", "javaScript"],

    links: [
      "https://jord4n-ac.github.io/my-portfolio/#section-2",
      "https://github.com/Jord4N-AC/my-portfolio",
    ],
  },

  //name, description, featured image, technologies, link to live version, link to source.
];

// Form Validation

function showModal(ind) {
  const section = document.querySelector('#section-2');

  const modalHtml = `
  <div class="modal-container">
  <div class="header-container">
      <div>
          <h3 class="proj-header">Tonic</h3>
          <img class="x-icon" src="images/icons/exit-icon-gray.svg" alt="close window icon">
      </div>
      <ul class="features">
          <li class="f f1 upper-case">canopy</li>
          <li class="dot">.</li>
          <li class="f f2">BackEndDev</li>
          <li class="dot">.</li>
          <li class="f f3">2015</li>
      </ul>
  </div>
  <div class="img-container">
      <img class="img-proj" src="${popupContent[ind].imgProject}" alt="project1 image modal">
  </div>
  <div class="content-container">
      <p class="p p-proj">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <div class="tech-btns-container">
          <ul class="tags">
              <li>html</li>
              <li>css</li>
              <li>javaScript</li>
              <li class="hide">github</li>
              <li class="hide">ruby</li>
              <li class="hide">Bootstraps</li>
          </ul>
          <div class="btns-container">
              <a class="btn sp-button">
                  See live
                  <img src="images/cardsWorksSection/see_live_btn.svg" alt="See live icon">
              </a>
              <a class="btn sp-button">
                  See Source
                  <img src="images/cardsWorksSection/github_btn.svg" alt="Github icon">
              </a>
          </div>
      </div>
  </div>
</div>
`;

  section.insertAdjacentHTML('afterbegin', modalHtml);

  const closeModalIcon = document.querySelector('.x-icon');
  const modal = document.querySelector('.modal-container');

  closeModalIcon.addEventListener('click', () => {
    modal.remove()
  });
}

document.querySelectorAll('.sp-button').forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    showModal(ind);
  });
});