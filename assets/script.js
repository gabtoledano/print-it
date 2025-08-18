const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

currentSlideIndex = 0;
console.log(slides.length);

// Ajout d'Event Listeners sur les flèches et sur les bullet points
let leftBtn = document.querySelector(".arrow_left");
leftBtn.addEventListener("click", function () {
  console.log("Clic flèche gauche");
  updateSlide(currentSlideIndex - 1);
});

let rightBtn = document.querySelector(".arrow_right");
rightBtn.addEventListener("click", function () {
  console.log("Clic flèche droite");
  updateSlide(currentSlideIndex + 1);
});

let activeDot = document.querySelector(".dots");
activeDot.addEventListener("click", function () {
  console.log("Clic bullet point");
});

// Ajout des bullet points sur le slider et les rendre cliquables pour changer de slide
const dotDiv = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotDiv.appendChild(dot);

  dot.addEventListener("click", function () {
    console.log("Clic bullet point");
    updateSlide(i);
  });
}

// Différencier le slide en cours de visionnage en remplissant le bullet point
const currentSlide = dotDiv.querySelector(".dot");
currentSlide.classList.add("dot_selected");

// Fonction pour mettre à jour le slider avec les données du slide spécifié
function updateSlide(index) {
  const bannerImg = document.querySelector(".banner-img");
  const tagLine = document.querySelector("#banner p");
  const dots = document.querySelectorAll(".dot");

  // Assurer que l'index reste dans les limites du tableau des slides
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  // Mettre à jour le slide
  currentSlideIndex = index;
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;

  // Mettre à jour les points
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Mettre à jour le slide initial
updateSlide(currentSlideIndex);
