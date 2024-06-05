'use strict';

import Matter from 'matter-js';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let home = document.querySelector('.home');
let rux = document.querySelector('.fyt');
let dataplay = document.querySelector('.dataplay');
let december = document.querySelector('.decembre');
let annexe = document.querySelector('.annexe');



//burger Menu
const menuToggle = document.querySelector('.burgerMenu');
const bodyc = document.querySelector('.body');
const header = document.querySelector('.header');
const workButton = document.querySelector('.navigation__button');
const backButton = document.querySelector('.navigation__back');

let nav1 = document.querySelector('.navFirst');
let nav2 = document.querySelector('.navSecond');

workButton.addEventListener('click', menu2);
backButton.addEventListener('click', menu1);
menuToggle.addEventListener('click', menuOpen);


function menuOpen(){
    document.body.classList.toggle("navigation__liens--open");
    header.classList.toggle('header--burgerMenu');
    bodyc.classList.toggle("body--burgerMenu");

    if (bodyc.classList.contains('navigation__liens--open')) {
    
        menuToggle.style.backgroundImage = "url('assets/images/icon/burgerMenuCroix.svg')";

    } else {
        menuToggle.style.backgroundImage = "url('assets/images/icon/burgerMenu.svg')"; 
    }   
}

function menu2(){
  nav1.classList.add('navigation__liens--hide');
  nav2.classList.remove('navigation__liens--hide');
}

function menu1(){
  nav1.classList.remove('navigation__liens--hide');
  nav2.classList.add('navigation__liens--hide');
}

window.addEventListener('resize', nav);
const work = document.querySelector('.work');

let largeur = window.innerWidth;
if (largeur >= 760){
  work.classList.remove('navigation__el--work');
} else if(largeur <= 760){
  work.classList.add('navigation__el--work');
}

function nav(){
  largeur = window.innerWidth;

  if (largeur >= 760){
    work.classList.remove('navigation__el--work');
  } else if(largeur <= 760){
    work.classList.add('navigation__el--work');
  }
}


//déplacement hommes
document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  const posX = (x / window.innerWidth).toFixed(1);
  const posY = (y / window.innerHeight).toFixed(2);

  document.documentElement.style.setProperty('--x-mouse', posX);
  document.documentElement.style.setProperty('--y-mouse', posY);
});


if(home){

  //Balle de tennis
    setTimeout(function() {
      var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint
  
      var height = description.clientHeight;
      var width = description.clientWidth;
      var windowWidth = window.innerWidth;
  
      var engine = Engine.create();
      engine.positionIterations = 20;
      engine.velocityIterations = 20;
  
      var render = Render.create({
          element: description,
          engine: engine,
          options: {
              width: width,
              height: height,
              wireframes: false,
              background: 'transparent'
          }
      });
    
      if (windowWidth < 760) {
        createCircles(20, texture.src);
        createCircles(2, texture2.src);
      } else if (windowWidth < 950) {
        createCircles(30, texture.src);
        createCircles(4, texture2.src);
      } else if (windowWidth < 1530) {
        createCircles(50, texture.src);
        createCircles(6, texture2.src);
      } else if (windowWidth < 1820) {
        createCircles(80, texture.src);
        createCircles(8, texture2.src);
      } else {
        createCircles(120, texture.src);
        createCircles(10, texture2.src);
      }
  
      function createCircles(count, textureSrc) {
        for (let i = 0; i < count; i++) {
            let circle = Bodies.circle(Math.random() * width, Math.random() * height / 2, 30, {
                friction: 0.2,
                frictionAir: 0.01,
                restitution: 1,
                render: {
                    sprite: {
                        texture: textureSrc,
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
          { isStatic: true, friction: 1 }
      );
      let leftWall = Bodies.rectangle(
          0 - thiccness / 2,
          height / 2,
          thiccness,
          height * 5,
          { isStatic: true, friction: 1 }
      );
      let rightWall = Bodies.rectangle(
          width + thiccness / 2,
          height / 2,
          thiccness,
          height * 5,
          { isStatic: true, friction: 1 }
      );
  
      Composite.add(engine.world, [ground, leftWall, rightWall]);
  
      let mouse = Mouse.create(render.canvas);
      let mouseConstraint = MouseConstraint.create(engine, {
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
  
        Matter.Body.setPosition(ground, { x: width / 2, y: height + thiccness / 2 });
        Matter.Body.setPosition(rightWall, { x: width + thiccness / 2, y: height / 2 });
        Matter.Body.setPosition(leftWall, { x: 0 - thiccness / 2, y: height / 2 });
      }
  
      window.addEventListener('resize', () => handleResize(description));
    }, 100);

  
  const description = document.querySelector(".description");
  const thiccness = 60;
  const texture = new Image();
  texture.src = 'assets/images/illu/balleTennis.svg';
  const texture2 = new Image();
  texture2.src = 'assets/images/illu/balleTennis100.svg';



 
  

  //etat actif nav
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".navigation__el");
  
  function updateMenuActiveState(activeIndex) {
    menuLinks.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add("navigation__el--active");
      } else {
        item.classList.remove("navigation__el--active");
      }
    });
  }
  
  sections.forEach((section, index) => {
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        if (index <= 1) {
          updateMenuActiveState(0); 
        } else {
          updateMenuActiveState(index - 1);
        }
      },
      onLeaveBack: () => {
        if (index <= 2) {
          updateMenuActiveState(0);
        } else {
          updateMenuActiveState(index - 2);
        }
      },
    });
  
    const resizeObserver = new ResizeObserver(() => {
      trigger.refresh();
    });
    resizeObserver.observe(section);
  });

//slider
let prevButton = document.querySelector(".projet__btnSlider--prev");
let nextButton = document.querySelector(".projet__btnSlider--next");

nextButton.addEventListener("click", prevSlide);
prevButton.addEventListener("click", nextSlide);

//navigation clavier
document.addEventListener("keydown", keyboardListener);

function keyboardListener(event){
    if(event.code == "ArrowLeft"){
        nextSlide();
    }else if(event.code == "ArrowRight"){
        prevSlide();
    }
}

let rota = 0;
let rotah = 120;
let train = document.querySelector('.projet__train');
let nuage = document.querySelector('.projet__container');

function prevSlide(){
    let activeSlideEl = document.querySelector(".projet__element--active");
    let prevSlideEl = activeSlideEl.previousElementSibling;
    let nextSlideEl = activeSlideEl.nextElementSibling;

    if(!prevSlideEl){
        prevSlideEl = activeSlideEl.parentNode.lastElementChild;
    }
    if(!nextSlideEl){
      nextSlideEl = activeSlideEl.parentNode.firstElementChild;
    }

    rota = rota - 120;
    rotah = rotah - 120;

    gsap.to('.projet__illu', { 
      duration: 3,
      rotation: rota,
      ease: "power4.out" 
    });

    gsap.to("html", {
      "--bulles-rotation": rota,
      duration: 2,
      ease: "power2.out",
    }), "-=5";

    gsap.to("html", {
      "--hommes-rotation": rotah,
      duration: 2,
      ease: "power2.out",
    }), "-=5";

    if ((rota - 120) % 360 == 0){
      train.classList.add('projet__train--active');
      nuage.classList.add('projet__container--active');
    } else {
      train.classList.remove('projet__train--active');
      nuage.classList.remove('projet__container--active')
    }

    activeSlideEl.classList.remove("projet__element--active");
    activeSlideEl.classList.add("projet__element--rotateLeft");
    nextSlideEl.classList.remove("projet__element--rotateLeft");
    prevSlideEl.classList.add("projet__element--active");
}

function nextSlide(){
    let activeSlideEl = document.querySelector(".projet__element--active");
    let nextSlideEl = activeSlideEl.nextElementSibling;
    let prevSlideEl = activeSlideEl.previousElementSibling;

    if(!nextSlideEl){
        nextSlideEl = activeSlideEl.parentNode.firstElementChild;
    }
    if(!prevSlideEl){
      prevSlideEl = activeSlideEl.parentNode.lastElementChild;
  }

    rota = rota + 120;
    rotah = rotah + 120;

    gsap.to('.projet__illu', { 
      duration: 3,
      rotation: rota,
      ease: "power4.out"
     });

     gsap.to("html", {
      "--bulles-rotation": rota,
      duration: 2,
      ease: "power2.out",
    }), "-=5";

    gsap.to("html", {
      "--hommes-rotation": rotah,
      duration: 2,
      ease: "power2.out",
    }), "-=5";

    if ((rota - 120) % 360 == 0){
      train.classList.add('projet__train--active');
      nuage.classList.add('projet__container--active')
    } else {
      train.classList.remove('projet__train--active');
      nuage.classList.remove('projet__container--active')
    }

     activeSlideEl.classList.remove("projet__element--active");
     prevSlideEl.classList.add("projet__element--rotateLeft");
     nextSlideEl.classList.remove("projet__element--rotateLeft");
     nextSlideEl.classList.add("projet__element--active");

}

} else if (rux){
  let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projetVisuel',
        start: '10% 0%',
        end: 'bottom 80%',
        scrub: 1, 
        ease: 'linear',
        pin: true,
        }
      })

  tl.from('.projetVisuel', {
    scale: 0.8
  })
  tl.to('.projetVisuel', {
    scale: 1,
  })



} else if (december){
  let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projetVisuel',
        start: '20% 15%',
        end: 'bottom center',
        scrub: 1, 
        pin: true,
        }
      })

  //anim gsap
  tl.to('.main1', {
      rotation:-20, 
      x: -220,
      duration: 3,
      opacity: 0
    }, '+=2')
    .to('.main2', {
      x: 220,
      rotation:20, 
      duration: 5,
      opacity: 0
    }, '-=3')
    .to('.visu', {
      scale: 1,
      duration: 7
    },
  '-=5')

} else if (dataplay){
  let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projetVisuel',
        start: '0% 15%',
        end: 'bottom center',
        scrub: 1, 
        pin: false,
        }
      })

  //anim gsap
  tl.from('.projetVisuel__img--left', {
      rotation:-4, 
      duration: 1
    })
    .to('.projetVisuel__img--left', {
      rotation:-10, 
      duration: 5
    })
    .from('.projetVisuel__img--right', {
      rotation:4, 
      duration: 1
    })
    .to('.projetVisuel__img--right', {
      rotation:10, 
      duration: 5
    })
} else if (annexe){
  //alcoves
  let fond = document.querySelector('.fondExpo');

  //tennis
  let tennis = document.querySelector('.alcoveTennis');
  let joueurDroit = document.querySelector('.joueurDroit');
  let joueurGauche = document.querySelector('.joueurGauche');
  let balle = document.querySelector('.balle');
  let filet = document.querySelector('.filet');
  let fondT = document.querySelector('.fondTennis');

  tennis.addEventListener('click', tennisScene);

  function tennisScene(){
    joueurDroit.classList.add('joueurDroit--active');
    joueurGauche.classList.add('joueurGauche--active');
    balle.classList.add('balle--active');
    filet.classList.add('filet--active');
    fond.classList.add('fondExpo--remove');
    fondE.classList.add('fondEtoile--remove');
    fondT.classList.remove('fondTennis--remove');

    setTimeout(() => {
      joueurDroit.classList.remove('joueurDroit--active');
      joueurGauche.classList.remove('joueurGauche--active');
      balle.classList.remove('balle--active');
      filet.classList.remove('filet--active');

      if (!scoutGauche.classList.contains('persoGauche--active')){
        fond.classList.remove('fondExpo--remove');
        fondE.classList.remove('fondEtoile--remove');
      } 

    }, "19000");
  }

  //scout
  let scout = document.querySelector('.alcoveScout');
  let scoutGauche = document.querySelector('.persoGauche');
  let scoutDroite = document.querySelector('.persoDroite');
  let tente = document.querySelector('.tente');
  let arbre = document.querySelector('.arbres');
  let feu = document.querySelector('.feu');
  let fondE = document.querySelector('.fondEtoile');

  scout.addEventListener('click', scoutScene);

  function scoutScene(){
    scoutDroite.classList.add('persoDroite--active');
    scoutGauche.classList.add('persoGauche--active');
    tente.classList.add('tente--active');
    arbre.classList.add('arbres--active');
    feu.classList.add('feu--active');
    fond.classList.add('fondExpo--remove');
    fondT.classList.add('fondTennis--remove');
    fondE.classList.remove('fondEtoile--remove');

    setTimeout(() => {
      scoutDroite.classList.remove('persoDroite--active');
      scoutGauche.classList.remove('persoGauche--active');
      tente.classList.remove('tente--active');
      arbre.classList.remove('arbres--active');
      feu.classList.remove('feu--active');

      if (!joueurDroit.classList.contains('joueurDroit--active')){
        fond.classList.remove('fondExpo--remove');
        fondT.classList.remove('fondTennis--remove');
      } 
    }, "19000");
  }


  //music

  const button = document.getElementById('play-sound-btn');
  const audio = document.getElementById('sound');



  let music = document.querySelector('.alcoveMusic');
  let play = document.querySelector('.btnMPL');
  let pause= document.querySelector('.btnMPA');

  music.addEventListener('click', musicButton);
  play.addEventListener('click', playFunction);
  pause.addEventListener('click', pauseFunction);

  function musicButton(){
    let btnM = document.querySelector('.btnM');
    btnM.classList.toggle('btnM--show');
  }

  function playFunction(){
    play.classList.add('hide');
    pause.classList.remove('hide');
    audio.play();
  }
  function pauseFunction(){
    play.classList.remove('hide');
    pause.classList.add('hide');
    audio.pause();
  }

const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.querySelector('.scroll-content');
const scrollingImage = document.querySelector('.scrolling-image');


                                                                                                                                                          
/*scrollContainer.addEventListener('scroll', () => {
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContent.clientWidth) {
      const imageClone = scrollingImage.cloneNode(true); 
      scrollContent.appendChild(imageClone);
    }
});*/


document.addEventListener('wheel', function(e) {
  if (e.deltaY !== 0) {
      document.querySelector('.scroll-container').scrollLeft += e.deltaY;
      e.preventDefault();
  }
}, { passive: false });



}






