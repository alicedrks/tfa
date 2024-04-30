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


import { gsap } from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projet',
        start: 'top top',
        end: 'bottom center',
        scrub: 4, 
        pin: true,
        markers: true,
        }
})

let projet1 = document.querySelector('#projet1');
let projet2 = document.querySelector('#projet2');
let projet3 = document.querySelector('#projet3');


tl.from('.projet__illu', {
    rotation:120, 
    duration:2,
    
})

    .to('.projet__illu', {
        rotation:0, 
        duration: 20,
        ease: "slow(0.7,0.7,false)",
        onEnter() {
            projet1.classList.remove('projet__element--active');
            projet2.classList.add('projet__element--active');
        },
        onLeave() {
            projet2.classList.remove('projet__element--active');
            projet3.classList.add('projet__element--active');
        },
          onEnterBack() {
            projet1.classList.remove('projet__element--active');
            projet2.classList.add('projet__element--active');
        },
          onLeaveBack() {
            projet2.classList.remove('projet__element--active');
            projet3.classList.add('projet__element--active');
        }
        
    })

    .set('.projet__illu', {
        rotation:0, 
        duration: 20,
        })

    //.to('.projet__element--active', 0.5, { className: '-=projet__element--active' })

    .to('.projet__illu', {
        rotation:-120, 
        duration: 20,
        ease: "slow(0.7,0.7,false)",
        onEnter() {
            projet2.classList.remove('projet__element--active');
            projet3.classList.add('projet__element--active');
          }
    })






/*import Matter from 'matter-js';

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

function launchBalls() {
    circles.forEach(circle => {
      const forceX = Math.random() * 0.5 - 0.3; 
      const forceY = Math.random() * -0.3 - 0.5; 
  
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


window.addEventListener("scroll", handleScroll);*/
