'use strict';

const menuToggle = document.querySelector('.burgerMenu');
const bodyc = document.querySelector('.home');


menuToggle.addEventListener('click', menuOpen);

let pew = document.querySelector('.navigation__liens');

function menuOpen(){
    document.body.classList.toggle("navigation__liens--open");

    if (bodyc.classList.contains('navigation__liens--open')) {
        

        menuToggle.style.backgroundImage = 'url("../../assets/images/icon/burgerMenuCroix.svg")'; 

    } else {
        menuToggle.style.backgroundImage = 'url("../../assets/images/icon/burgerMenu.svg")'; 
    }   
}

const links = document.querySelectorAll('.navigation__el');

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    links.forEach(function(link) {
      link.classList.remove('navigation__el--active');
    });
  
    link.classList.add('navigation__el--active');
  });
});




