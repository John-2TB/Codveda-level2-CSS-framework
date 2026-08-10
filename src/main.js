import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);



// *****************************************
// ************* DOM ELEMENTS **************
// *****************************************

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navSection = document.querySelector('.nav-section');
const mobileVideo = document.querySelector('#mobile-video');


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
  trigger: '#videoSection',
  start: 'top top',
  end: 'center center',
  onEnter: () => mobileVideo.play(),
  onLeave: () => mobileVideo.pause(),
  onEnterBack: () => mobileVideo.play(),
  onLeaveBack: () => mobileVideo.pause(),
});




