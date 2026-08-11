import './style.css';
import {products} from './constants/product.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);



// *****************************************
// ************* DOM ELEMENTS **************
// *****************************************

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navSection = document.querySelector('.nav-section');
const videoSection = document.querySelector('#videoSection');
const productDisplay = document.querySelector('#productDisplay');
const leftButton = document.querySelector('#left-button');
const rightButton = document.querySelector('#right-button');

let currentIndex = 0;

// *****************************************
// ************* FUNCTIONS ******************
// *****************************************
function renderProducts() {
  if (productDisplay) {
  productDisplay.innerHTML = products.map((card) =>
  `
    <div class="flex items-center justify-center flex-col min-w-full shrink-0 snap-start">
      <img src="${card.src}" alt="${card.name}" class="w-60 h-60 object-contain">
      <div class="flex flex-col items-center justify-center w-60 h-auto">
        <p class="mt-4 text-clamp(1rem, 2rem, 3rem) flex justify-center items-center">${card.name}</p>
        <p class="font-inter flex justify-center items-center text-clamp(1rem, 2rem, 3rem) mb-4">${card.subtext}</p>
        <button class="bg-pepsi-blue px-6 py-3 rounded-4xl hover:bg-pepsi-hover hover:text-pepsi-black transition-all duration-200 hover:cursor-pointer ease-in-out">Find Out More</button>
      </div>
    </div>
  `
  ).join('');

  } else {
    return;
  };


  const productCards = [...productDisplay.querySelectorAll('div')];
  if (!productCards.length) return;

  const cardWidth = productCards[0].offsetWidth;
  productDisplay.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });

};

function updateProductPosition() {
  const cards = [...document.querySelectorAll('#productDisplay > div')];
  if (!cards.length) return;

  const cardWidth = cards[0].offsetWidth;

  productDisplay.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });
};


function showNextProduct() {
  const cards = [...document.querySelectorAll('#productDisplay > div')];
  if (!cards.length) return;

  currentIndex = (currentIndex + 1) % cards.length;
  updateProductPosition();
};

function showPreviousProduct() {
  const cards = [...document.querySelectorAll('#productDisplay > div')];
  if (!cards.length) return;

  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateProductPosition();
}


leftButton?.addEventListener('click', showPreviousProduct);
rightButton?.addEventListener('click', showNextProduct);


// *****************************************
// ************* EVENT LISTENERS ***********
// *****************************************

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navSection.classList.toggle('active')
});



// *****************************************
// ************* GSAP Animations ***********
// *****************************************
const videoTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.video-section',
    start: 'top top',
    scrub: true
  }
});

const heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '#hero',
    start: 'bottom bottom',
    scrub: true,
    pin: true,
    pinSpacing: false
  }
});

ScrollTrigger.create({
  trigger: videoSection,
  start: 'top top',
  end: 'center center',
  onEnter: () => videoSection.play(),
  onLeave: () =>  videoSection.play(),
  onEnterBack: () =>  videoSection.play(),
  onLeaveBack: () =>  videoSection.play(),
});




renderProducts();