'use strict';

/*const menuToggle = document.querySelector('.burgerMenu');
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
}*/

import Matter from 'matter-js';

var description = document.querySelector('.description__canva');

var texture = new Image();
texture.src = '../assets/images/illu/balleTennis.svg';

var engine = Matter.Engine.create();
var world = engine.world;
var render = Matter.Render.create({
  element: description,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: 'transparent'
  }
});

engine.timing = {
    timeScale: 0.1, 
    timestamp: 0, 
    delta: 1000 / 60 
};

var circles = [];
var stopHeight = render.canvas.height - 28; // Hauteur à laquelle les balles s'arrêtent

Matter.Events.on(render, "afterRender", function() {
  if (circles.length < 40) {
    var circle = Matter.Bodies.circle(
      Matter.Common.clamp(Matter.Common.random(0, render.canvas.width), 30, render.canvas.width - 30),
      -30,
      30,
      {
        frictionAir: 0.01,
        restitution: 0.5,
        collisionFilter: {
          category: 0x0002, // Catégorie de collision des cercles
          mask: 0x0002 // Masque de collision des cercles
        },
        render: {
            sprite: {
              texture: texture.src ,
              xScale: 2 * 30 / texture.width, 
              yScale: 2 * 30 / texture.height 
            }
          }
      }
    );
    circle.isCircle = true; // Marquer le cercle comme un cercle
    Matter.World.add(world, circle);
    circles.push(circle);
  }
});

Matter.Events.on(engine, "afterUpdate", function() {
  circles.forEach(function(circle) {
    if (circle.position.y > stopHeight) {
      Matter.Body.setPosition(circle, { x: circle.position.x, y: stopHeight });
      Matter.Body.setStatic(circle, true);
    }
  });
});


function myFunction() {
    Matter.Engine.run(engine);
    Matter.Render.run(render);
}

window.addEventListener("scroll", function() {
    var triggerSection = document.querySelector("#trigger-section");
    var triggerSectionBounds = triggerSection.getBoundingClientRect();
    
    if (triggerSectionBounds.top <= 10) {
        myFunction();
    }
});





