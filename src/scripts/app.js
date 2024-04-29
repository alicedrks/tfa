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

const description = document.querySelector('.description__canva');
const texture = new Image();
texture.src = '../assets/images/illu/balleTennis.svg';

const engine = Matter.Engine.create();
const world = engine.world;
const render = Matter.Render.create({
  element: description,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: 'transparent'
  }
});

engine.timing.timeScale = 0.03;

const circles = [];
const stopHeight = render.canvas.height - 70;

function createCircle(x, y) {
  const circle = Matter.Bodies.circle(
    Matter.Common.clamp(x, 30, render.canvas.width - 30),
    y,
    30,
    {
      frictionAir: 0.02,
      restitution: 0.5,
      collisionFilter: {
        category: 0x0002,
        mask: 0x0002
      },
      render: {
        sprite: {
          texture: texture.src,
          xScale: 2 * 30 / texture.width,
          yScale: 2 * 30 / texture.height
        }
      }
    }
  );
  circle.isCircle = true;
  return circle;
}

function createCircles() {
  for (let i = 0; i < 40; i++) {
    const circle = createCircle(
      Matter.Common.random(0, render.canvas.width),
      -30 - i * 200
    );
    Matter.World.add(world, circle);
    circles.push(circle);
  }
}

createCircles();

Matter.Events.on(engine, "beforeUpdate", function(event) {
  const deltaTime = event.timestamp - engine.timing.timestamp;
  const deltaHeight = 0.03 * deltaTime;
  circles.forEach(circle => {
    Matter.Body.translate(circle, { x: 0, y: deltaHeight });
    if (circle.position.y > stopHeight) {
      Matter.Body.setPosition(circle, { x: circle.position.x, y: stopHeight });
    }
    // Pour empêcher la balle de sortir sur les côtés gauche et droit
    const circleRadius = circle.circleRadius || circle.circleRadiusMax;
    const maxX = render.canvas.width - circleRadius;
    const minX = circleRadius;
    const newX = Matter.Common.clamp(circle.position.x, minX, maxX);
    Matter.Body.setPosition(circle, { x: newX, y: circle.position.y });
  });
});

let lastScrollY = 0;

function launchBalls() {
    circles.forEach(circle => {
      const forceX = Math.random() * 0.5 - 0.3; 
      const forceY = Math.random() * -0.1 - 0.3; 
  
      Matter.Body.applyForce(circle, circle.position, { x: forceX, y: forceY });
    });

  }

function handleScroll() {
  const triggerSection = document.querySelector("#trigger-section");
  const triggerSectionBounds = triggerSection.getBoundingClientRect();
  
  if (triggerSectionBounds.top <= 10) {
    Matter.Runner.run(engine) 
    Matter.Render.run(render);
  }
}


window.addEventListener('scroll', launchBalls);


window.addEventListener("scroll", handleScroll);
