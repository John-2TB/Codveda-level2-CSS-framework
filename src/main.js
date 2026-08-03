import './style.css';
import { gsap } from 'gsap';



// *****************************************
// ************* DOM ELEMENTS **************
// *****************************************

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navSection = document.querySelector('.nav-section');






// *****************************************
// ************* EVENT LISTENERS ***********
// *****************************************

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navSection.classList.toggle('active')
});
