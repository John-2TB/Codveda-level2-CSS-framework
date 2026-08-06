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
    start: 'center center',
    scrub: true,
    pin: true,
  }
});

ScrollTrigger.create({
  trigger: mobileVideo,
  start: 'top top',
  end: 'bottom bottom',
  onEnter: () => mobileVideo.play(),
  onLeave: () => mobileVideo.pause(),
  onEnterBack: () => mobileVideo.play(),
  onLeaveBack: () => mobileVideo.pause(),
});

ScrollTrigger.create({
  trigger: '#large-screen-video',
  start: 'top top',
  end: 'bottom bottom',
  onEnter: () => mobileVideo.play(),
  onLeave: () => mobileVideo.pause(),
  onEnterBack: () => mobileVideo.play(),
  onLeaveBack: () => mobileVideo.pause(),
})


heroTimeline.to('.video-section', {translateY: '-100%', duration: 1});
videoTimeline.fromTo(mobileVideo, {scale: 0.8, rotate: -45, opacity: 0}, {scale: 1, duration: 1, rotate: 0, opacity: 1});
