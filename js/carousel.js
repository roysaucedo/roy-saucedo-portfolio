const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButon = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);


const slideSize = slides[0].getBoundingClientRect();

console.log(slideSize);
// when I click left move slides to the left
// when I click right move slides to right
// when I click the nav indicator, move to that slide