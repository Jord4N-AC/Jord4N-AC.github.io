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

// Popup Detail Window and Section 2 Content
const popupContent = [
  {
    titleProject: "Tonic",
    features: ["canopy", "BackEndDev", "2015"],
    imgProject: "images/cardsWorksSection/card1Detail.svg",
    contentProject:
      ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      "A daily selection of privately personalized reads; no accounts or sign-ups required."],
    technologies: ["html", "css", "javaScript", "github", "ruby", "Bootstraps"],
    links: [
      "https://jord4n-ac.github.io/my-portfolio/#section-2",
      "https://github.com/Jord4N-AC/my-portfolio"
    ],
    icons: [
      "images/icons/exit-icon-gray.svg", // x-Icon
      "images/cardsWorksSection/see_live_btn.svg",
      "images/cardsWorksSection/github_btn.svg"
    ],
    btnText: [
      "See Project"
    ]
  },
  {
    titleProject: "Multi-Post Stories",
    features: ["facebook", "FullStackDev", "2015"],
    imgProject: "images/cardsWorksSection/card2.svg",
    contentProject:
      ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      "A daily selection of privately personalized reads; no accounts or sign-ups required."],
    technologies: ["html", "css", "javaScript", "github", "ruby", "Bootstraps"],
    links: [
      "https://jord4n-ac.github.io/my-portfolio/#section-2",
      "https://github.com/Jord4N-AC/my-portfolio"
    ],
    icons: [
      "images/icons/exit-icon-gray.svg", // x-Icon
      "images/cardsWorksSection/see_live_btn.svg",
      "images/cardsWorksSection/github_btn.svg"
    ],
    btnText: [
      "See Project"
    ]
  },
  {
    titleProject: "Facebook 360",
    features: ["canopy", "FullStackDev", "2015"],
    imgProject: "images/cardsWorksSection/card3.svg",
    contentProject:
    ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "A daily selection of privately personalized reads; no accounts or sign-ups required."],
    technologies: ["html", "css", "javaScript", "github", "ruby", "Bootstraps"],
    links: [
      "https://jord4n-ac.github.io/my-portfolio/#section-2",
      "https://github.com/Jord4N-AC/my-portfolio"
    ],
    icons: [
      "images/icons/exit-icon-gray.svg",
      "images/cardsWorksSection/see_live_btn.svg",
      "images/cardsWorksSection/github_btn.svg"
    ],
    btnText: [
      "See Project"
    ]
  },
  {
    titleProject: "Uber Navigation",
    features: ["Uber", "LeadDeveloper", "2018"],
    imgProject: "images/cardsWorksSection/card4.svg",
    contentProject:
    ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      "A daily selection of privately personalized reads; no accounts or sign-ups required."],  
    technologies: ["html", "css", "javaScript", "github", "ruby", "Bootstraps"],
    links: [
      "https://jord4n-ac.github.io/my-portfolio/#section-2",
      "https://github.com/Jord4N-AC/my-portfolio"
    ],
    icons: [
      "images/icons/exit-icon-gray.svg",
      "images/cardsWorksSection/see_live_btn.svg",
      "images/cardsWorksSection/github_btn.svg"
    ],
    btnText: [
      "See Project"
    ]
  }
];

// Form Validation

function showModal(ind) {
  const section = document.querySelectorAll(".card");
  const modalHtml = `
      <div class="modal-container">
          <div class="header-container">
              <div>
                  <h3 class="proj-header">${popupContent[ind].titleProject}</h3>
                  <img class="x-icon" src="${popupContent[ind].icons[0]}" alt="close window icon">
              </div>
              <ul class="features">
                  <li class="f f1 upper-case">${popupContent[ind].features[0]}</li>
                  <li class="dot">.</li>
                  <li class="f f2">${popupContent[ind].features[1]}</li>
                  <li class="dot">.</li>
                  <li class="f f3">${popupContent[ind].features[2]}</li>
              </ul>
          </div>
          <div class="img-container">
              <img class="img-proj" src="${popupContent[ind].imgProject}" alt="project1 image modal">
          </div>
          <div class="content-container">
              <p class="p p-proj">
                  ${popupContent[ind].contentProject}
              </p>
              <div class="tech-btns-container">
                  <ul class="tags">
                      <li>${popupContent[ind].technologies[0]}</li>
                      <li>${popupContent[ind].technologies[1]}</li>
                      <li>${popupContent[ind].technologies[2]}</li>
                      <li class="hide">${popupContent[ind].technologies[3]}</li>
                      <li class="hide">${popupContent[ind].technologies[4]}</li>
                      <li class="hide">${popupContent[ind].technologies[5]}</li>
                  </ul>
                  <div class="btns-container">
                      <a class="btn sp-button" href="${popupContent[ind].links[0]}">
                          See live
                          <img src="${popupContent[ind].icons[1]}" alt="See live icon">
                      </a>
                      <a class="btn sp-button" href="${popupContent[ind].links[1]}">
                          See Source
                          <img src="${popupContent[ind].icons[2]}" alt="Github icon">
                      </a>
                  </div>
              </div>
          </div>
      </div>
  `;

  section[ind].insertAdjacentHTML("afterbegin", modalHtml);

  const closeModalIcon = document.querySelector(".x-icon");
  const modal = document.querySelector(".modal-container");

  closeModalIcon.addEventListener("click", () => {
    modal.remove();
  });
}

function createCard() {
  const cardSection = document.querySelector(".card-container");
  for (let i = popupContent.length - 1; i >= 0; i -= 1) {
    const card = `
    <div class="card card${i + 1}">
    <img class="img-proj" src="${popupContent[i].imgProject}" alt="Project 1 Image">
    <div class="proj-content">
        <h3 class="proj-header">${popupContent[i].titleProject}</h3>
        <div class="features">
            <div class="f f1 upper-case">${popupContent[i].features[0]}</div>
            <span>.</span>
            <div class="f f2">${popupContent[i].features[1]}</div>
            <span>.</span>
            <div class="f f3">${popupContent[i].features[2]}</div>
        </div>
        <p class="p p-proj">${popupContent[i].contentProject[1]}</p>
        <ul class="tags">
            <li>${popupContent[i].technologies[0]}</li>
            <li>${popupContent[i].technologies[1]}</li>
            <li>${popupContent[i].technologies[3]}</li>
        </ul>
        <a class="btn sp-button">${popupContent[i].btnText[0]}</a>  
    </div>
  </div>
    `;

    cardSection.insertAdjacentHTML("afterbegin", card);
  }
}

createCard();

document.querySelectorAll(".sp-button").forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    showModal(ind);
  });
});
