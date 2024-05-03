'use strict';

/*const menuToggle = document.querySelector('.burgerMenu');
const bodyc = document.querySelector('.home');


menuToggle.addEventListener('click', menuOpen);

function menuOpen(){
    document.body.classList.toggle("navigation__liens--open");

    if (bodyc.classList.contains('navigation__liens--open')) {
        
        menuToggle.style.backgroundImage = 'url("../../assets/images/icon/burgerMenuCroix.svg")'; 

    } else {
        menuToggle.style.backgroundImage = 'url("../../assets/images/icon/burgerMenu.svg")'; 
    }   
}*/


/*import { gsap } from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    /*scrollTrigger: {
        trigger: '.projet',
        start: 'top top',
        end: 'bottom center',
        scrub: 10, 
        pin: true,
        markers: true,
        }*/
/*})*/




//anim gsap
/*tl.from('.projet__illu', {
        rotation:0, 
        duration:2,
    })
    .to('.projet__illu', {
        rotation:120, 
        duration: 40,
        ease: "slow(0.7,0.7,false)",
    })
    .set('.projet__illu', {
        rotation:120, 
        duration: 20,
    })
    .to('.projet__illu', {
        rotation:240, 
        duration: 40,
        ease: "slow(0.7,0.7,false)",
    })




// slider
let element = document.querySelector('.projet__illu');
let roundedAngle = 1;
let lastAngle = 0;
let projets = document.querySelectorAll('.projet__element');
let projet1 = document.querySelector('#projet1');
let projet2 = document.querySelector('#projet2');
let projet3 = document.querySelector('#projet3');


function calculerAngleRotation() {
    let style = window.getComputedStyle(element);
    let transform = style.getPropertyValue('transform');

    let values = transform.split('(')[1].split(')')[0].split(',');
    let a = values[0];
    let b = values[1];
    let angle = Math.atan2(b, a) * (180 / Math.PI);
    
    if (angle < 0) {
        angle += 360;
    }
    
    roundedAngle = Math.round(angle);

    if (roundedAngle > lastAngle) {
        if(roundedAngle >= 80 && roundedAngle <= 100){
            for(let i = 0; i < projets.length; i++){
                projets[i].classList.remove('projet__element--active');
            }
            projet2.classList.add('projet__element--active');
        
        } else if(roundedAngle >= 200 && roundedAngle <= 220){
            for(let i = 0; i < projets.length; i++){
                projets[i].classList.remove('projet__element--active');
            }
            projet3.classList.add('projet__element--active');
        }
    } else if (roundedAngle < lastAngle) {
        if(roundedAngle <= 160 && roundedAngle >= 140){
            for(let i = 0; i < projets.length; i++){
                projets[i].classList.remove('projet__element--active');
            }
            projet2.classList.add('projet__element--active');
        } else if(roundedAngle <= 40 && roundedAngle >= 20){
            for(let i = 0; i < projets.length; i++){
                projets[i].classList.remove('projet__element--active');
            }
            projet1.classList.add('projet__element--active');
        }
    }
    lastAngle = roundedAngle;

    requestAnimationFrame(calculerAngleRotation);
}






calculerAngleRotation();*/








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
