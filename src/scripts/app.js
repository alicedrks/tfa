'use strict';

import Matter from 'matter-js';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let home = document.querySelector('.home');
let rux = document.querySelector('.rux');
let dataplay = document.querySelector('.dataplay');
let december = document.querySelector('.decembre');
let annexe = document.querySelector('.annexe');



//Burger Menu
const menuToggle = document.querySelector('.burgerMenu');
const bodyc = document.querySelector('.home');


menuToggle.addEventListener('click', menuOpen);

function menuOpen(){
    document.body.classList.toggle("navigation__liens--open");

    if (bodyc.classList.contains('navigation__liens--open')) {
        
        menuToggle.style.backgroundImage = 'url("../../assets/images/icon/burgerMenuCroix.svg")'; 

    } else {
        menuToggle.style.backgroundImage = 'url("../../assets/images/icon/burgerMenu.svg")'; 
    }   
}


if(home){
  //Balle de tennis
  var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite;

  const description = document.querySelector(".description");
  const thiccness = 60;
  const texture = new Image();
  texture.src = '../assets/images/illu/balleTennis.svg';

  var height = description.clientHeight;
  var width = description.clientWidth;
  var windowWidth = window.innerWidth;

  var engine = Engine.create();

  var render = Matter.Render.create({
  element: description,
  engine: engine,
  options: {
      width: width,
      height: height,
      wireframes: false,
      background: 'transparent'
    }
  });

  if (windowWidth < 760){
    for (let i = 0; i < 20; i++){
      let circle = Bodies.circle(i, 10, 30, {
          friction: 0.3,
          frictionAir: 0.00001,
          restitution: 0.8,
          render: {
            sprite: {
              texture: texture.src,
              xScale: 2 * 30 / texture.width,
              yScale: 2 * 30 / texture.height
            }
          }
      });
      Composite.add(engine.world, circle);
    }
  } else if (windowWidth < 950){
    for (let i = 0; i < 30; i++){
      let circle = Bodies.circle(i, 10, 30, {
          friction: 0.3,
          frictionAir: 0.00001,
          restitution: 0.8,
          render: {
            sprite: {
              texture: texture.src,
              xScale: 2 * 30 / texture.width,
              yScale: 2 * 30 / texture.height
            }
          }
      });
      Composite.add(engine.world, circle);
    }
  } else if (windowWidth < 1530){
    for (let i = 0; i < 50; i++){
      let circle = Bodies.circle(i, 10, 30, {
          friction: 0.3,
          frictionAir: 0.00001,
          restitution: 0.8,
          render: {
            sprite: {
              texture: texture.src,
              xScale: 2 * 30 / texture.width,
              yScale: 2 * 30 / texture.height
            }
          }
      });
      Composite.add(engine.world, circle);
    }
  } else if (windowWidth < 1820){
    for (let i = 0; i < 80; i++){
      let circle = Bodies.circle(i, 10, 30, {
          friction: 0.3,
          frictionAir: 0.00001,
          restitution: 0.8,
          render: {
            sprite: {
              texture: texture.src,
              xScale: 2 * 30 / texture.width,
              yScale: 2 * 30 / texture.height
            }
          }
      });
      Composite.add(engine.world, circle);
    }
  } else {
    for (let i = 0; i < 120; i++){
      let circle = Bodies.circle(i, 10, 30, {
          friction: 0.3,
          frictionAir: 0.00001,
          restitution: 0.8,
          render: {
            sprite: {
              texture: texture.src,
              xScale: 2 * 30 / texture.width,
              yScale: 2 * 30 / texture.height
            }
          }
      });
      Composite.add(engine.world, circle);
    }
  }



  let ground = Bodies.rectangle(
    width / 2, 
    height + thiccness / 2, 
    width, 
    thiccness, 
    { isStatic: true })
  let leftWall = Bodies.rectangle(
    0 - thiccness / 2,
    height / 2,
    thiccness,
    height * 5,
    { isStatic: true }
  );
  let rightWall = Bodies.rectangle(
      width + thiccness / 2,
      height / 2,
      thiccness,
      height * 5,
      { isStatic: true }
        );

  Composite.add(engine.world, [ground, leftWall, rightWall]);

  let mouse = Matter.Mouse.create(render.canvas);
  let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
    }
  });
  Composite.add(engine.world, mouseConstraint);

  mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel);

  Render.run(render);

  var runner = Runner.create();

  Runner.run(runner, engine);

  function handleResize() {
    height = description.clientHeight;
    width = description.clientWidth;

    render.canvas.width = width;
    render.canvas.height = height;
    Matter.Body.setPosition(
        ground,
        Matter.Vector.create(
            width / 2,
            height + thiccness / 2,
            width,
            thiccness
        )
    );
    Matter.Body.setPosition(
        rightWall,
        Matter.Vector.create(
            width + thiccness / 2,
            height / 2
        )
    );
    Matter.Body.setPosition(
        leftWall,
        Matter.Vector.create(
            0 - thiccness / 2,
            height / 2
        )
    );
  }

  window.addEventListener('resize', () => handleResize(description));


  /*window.addEventListener('wheel', function(event) {

    if (event.deltaY > 0) {
        Matter.Composite.allBodies(engine.world).forEach(body => {
            if (body.label === 'Circle Body') {
                Matter.Body.applyForce(body, body.position, { x: 0, y: -0.006 });
            }
        });
    }
  });*/

  /*function handleScroll() {
    const triggerSection = document.querySelector("#trigger-section");
    const triggerSectionBounds = triggerSection.getBoundingClientRect();
    
    if (triggerSectionBounds.top <= 10) {
      Matter.Runner.run(engine) 
      Matter.Render.run(render);
    }
  }

  window.addEventListener("scroll", handleScroll);*/





















  /*

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
} else if (december){
  document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    //console.log(e.clientX, e.clientY);
    const posX = (x / window.innerWidth).toFixed(2);
    const posY = (y / window.innerHeight).toFixed(2);
    console.log(posX, posY);
    document.documentElement.style.setProperty('--x-mouse', posX);
    document.documentElement.style.setProperty('--y-mouse', posY);
  });
}






