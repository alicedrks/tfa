/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap/scrollTrigger'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap/scrollTrigger'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var home = document.querySelector('.home');
var rux = document.querySelector('.fyt');
var dataplay = document.querySelector('.dataplay');
var december = document.querySelector('.decembre');
var annexe = document.querySelector('.annexe'); //burger Menu

var menuToggle = document.querySelector('.burgerMenu');
var bodyc = document.querySelector('.body');
var header = document.querySelector('.header');
var workButton = document.querySelector('.navigation__button');
var backButton = document.querySelector('.navigation__back');
var nav1 = document.querySelector('.navFirst');
var nav2 = document.querySelector('.navSecond');
workButton.addEventListener('click', menu2);
backButton.addEventListener('click', menu1);
menuToggle.addEventListener('click', menuOpen);

function menuOpen() {
  document.body.classList.toggle("navigation__liens--open");
  header.classList.toggle('header--burgerMenu');
  bodyc.classList.toggle("body--burgerMenu");

  if (bodyc.classList.contains('navigation__liens--open')) {
    menuToggle.style.backgroundImage = "url('assets/images/icon/burgerMenuCroix.svg')";
  } else {
    menuToggle.style.backgroundImage = "url('assets/images/icon/burgerMenu.svg')";
  }
}

function menu2() {
  nav1.classList.add('navigation__liens--hide');
  nav2.classList.remove('navigation__liens--hide');
}

function menu1() {
  nav1.classList.remove('navigation__liens--hide');
  nav2.classList.add('navigation__liens--hide');
}

window.addEventListener('resize', nav);
var work = document.querySelector('.work');
var largeur = window.innerWidth;

if (largeur >= 760) {
  work.classList.remove('navigation__el--work');
} else if (largeur <= 760) {
  work.classList.add('navigation__el--work');
}

function nav() {
  largeur = window.innerWidth;

  if (largeur >= 760) {
    work.classList.remove('navigation__el--work');
  } else if (largeur <= 760) {
    work.classList.add('navigation__el--work');
  }
} //déplacement hommes


document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  var posX = (x / window.innerWidth).toFixed(1);
  var posY = (y / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty('--x-mouse', posX);
  document.documentElement.style.setProperty('--y-mouse', posY);
});

if (home) {
  var updateMenuActiveState = function updateMenuActiveState(activeIndex) {
    menuLinks.forEach(function (item, index) {
      if (index === activeIndex) {
        item.classList.add("navigation__el--active");
      } else {
        item.classList.remove("navigation__el--active");
      }
    });
  };

  var keyboardListener = function keyboardListener(event) {
    if (event.code == "ArrowLeft") {
      nextSlide();
    } else if (event.code == "ArrowRight") {
      prevSlide();
    }
  };

  var prevSlide = function prevSlide() {
    var activeSlideEl = document.querySelector(".projet__element--active");
    var prevSlideEl = activeSlideEl.previousElementSibling;
    var nextSlideEl = activeSlideEl.nextElementSibling;

    if (!prevSlideEl) {
      prevSlideEl = activeSlideEl.parentNode.lastElementChild;
    }

    if (!nextSlideEl) {
      nextSlideEl = activeSlideEl.parentNode.firstElementChild;
    }

    rota = rota - 120;
    rotah = rotah - 120;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.projet__illu', {
      duration: 3,
      rotation: rota,
      ease: "power4.out"
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("html", {
      "--bulles-rotation": rota,
      duration: 2,
      ease: "power2.out"
    }), "-=5";
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("html", {
      "--hommes-rotation": rotah,
      duration: 2,
      ease: "power2.out"
    }), "-=5";

    if ((rota - 120) % 360 == 0) {
      train.classList.add('projet__train--active');
      nuage.classList.add('projet__container--active');
    } else {
      train.classList.remove('projet__train--active');
      nuage.classList.remove('projet__container--active');
    }

    activeSlideEl.classList.remove("projet__element--active");
    activeSlideEl.classList.add("projet__element--rotateLeft");
    nextSlideEl.classList.remove("projet__element--rotateLeft");
    prevSlideEl.classList.add("projet__element--active");
  };

  var nextSlide = function nextSlide() {
    var activeSlideEl = document.querySelector(".projet__element--active");
    var nextSlideEl = activeSlideEl.nextElementSibling;
    var prevSlideEl = activeSlideEl.previousElementSibling;

    if (!nextSlideEl) {
      nextSlideEl = activeSlideEl.parentNode.firstElementChild;
    }

    if (!prevSlideEl) {
      prevSlideEl = activeSlideEl.parentNode.lastElementChild;
    }

    rota = rota + 120;
    rotah = rotah + 120;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.projet__illu', {
      duration: 3,
      rotation: rota,
      ease: "power4.out"
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("html", {
      "--bulles-rotation": rota,
      duration: 2,
      ease: "power2.out"
    }), "-=5";
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("html", {
      "--hommes-rotation": rotah,
      duration: 2,
      ease: "power2.out"
    }), "-=5";

    if ((rota - 120) % 360 == 0) {
      train.classList.add('projet__train--active');
      nuage.classList.add('projet__container--active');
    } else {
      train.classList.remove('projet__train--active');
      nuage.classList.remove('projet__container--active');
    }

    activeSlideEl.classList.remove("projet__element--active");
    prevSlideEl.classList.add("projet__element--rotateLeft");
    nextSlideEl.classList.remove("projet__element--rotateLeft");
    nextSlideEl.classList.add("projet__element--active");
  };

  //Balle de tennis
  setTimeout(function () {
    var Engine = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        Render = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        Runner = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        Bodies = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        Composite = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        Mouse = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        MouseConstraint = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
      for (var i = 0; i < count; i++) {
        var circle = Bodies.circle(Math.random() * width, Math.random() * height / 2, 30, {
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

    var ground = Bodies.rectangle(width / 2, height + thiccness / 2, width, thiccness, {
      isStatic: true,
      friction: 1
    });
    var leftWall = Bodies.rectangle(0 - thiccness / 2, height / 2, thiccness, height * 5, {
      isStatic: true,
      friction: 1
    });
    var rightWall = Bodies.rectangle(width + thiccness / 2, height / 2, thiccness, height * 5, {
      isStatic: true,
      friction: 1
    });
    Composite.add(engine.world, [ground, leftWall, rightWall]);
    var mouse = Mouse.create(render.canvas);
    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2
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
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ground, {
        x: width / 2,
        y: height + thiccness / 2
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(rightWall, {
        x: width + thiccness / 2,
        y: height / 2
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matter-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(leftWall, {
        x: 0 - thiccness / 2,
        y: height / 2
      });
    }

    window.addEventListener('resize', function () {
      return handleResize(description);
    });
  }, 100);
  var description = document.querySelector(".description");
  var thiccness = 60;
  var texture = new Image();
  texture.src = 'assets/images/illu/balleTennis.svg';
  var texture2 = new Image();
  texture2.src = 'assets/images/illu/balleTennis100.svg'; //etat actif nav

  var sections = document.querySelectorAll("section");
  var menuLinks = document.querySelectorAll(".navigation__el");
  sections.forEach(function (section, index) {
    var trigger = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap/scrollTrigger'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: function onEnter() {
        if (index <= 1) {
          updateMenuActiveState(0);
        } else {
          updateMenuActiveState(index - 1);
        }
      },
      onLeaveBack: function onLeaveBack() {
        if (index <= 2) {
          updateMenuActiveState(0);
        } else {
          updateMenuActiveState(index - 2);
        }
      }
    });
    var resizeObserver = new ResizeObserver(function () {
      trigger.refresh();
    });
    resizeObserver.observe(section);
  }); //slider

  var prevButton = document.querySelector(".projet__btnSlider--prev");
  var nextButton = document.querySelector(".projet__btnSlider--next");
  nextButton.addEventListener("click", prevSlide);
  prevButton.addEventListener("click", nextSlide); //navigation clavier

  document.addEventListener("keydown", keyboardListener);
  var rota = 0;
  var rotah = 120;
  var train = document.querySelector('.projet__train');
  var nuage = document.querySelector('.projet__container');
} else if (rux) {
  var tl = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    scrollTrigger: {
      trigger: '.projetVisuel',
      start: '10% 0%',
      end: 'bottom 80%',
      scrub: 1,
      ease: 'linear',
      pin: true
    }
  });
  tl.from('.projetVisuel', {
    scale: 0.8
  });
  tl.to('.projetVisuel', {
    scale: 1
  });
} else if (december) {
  var _tl = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    scrollTrigger: {
      trigger: '.projetVisuel',
      start: '20% 15%',
      end: 'bottom center',
      scrub: 1,
      pin: true
    }
  }); //anim gsap


  _tl.to('.main1', {
    rotation: -20,
    x: -220,
    duration: 3,
    opacity: 0
  }, '+=2').to('.main2', {
    x: 220,
    rotation: 20,
    duration: 5,
    opacity: 0
  }, '-=3').to('.visu', {
    scale: 1,
    duration: 7
  }, '-=5');
} else if (dataplay) {
  var _tl2 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    scrollTrigger: {
      trigger: '.projetVisuel',
      start: '0% 15%',
      end: 'bottom center',
      scrub: 1,
      pin: false
    }
  }); //anim gsap


  _tl2.from('.projetVisuel__img--left', {
    rotation: -4,
    duration: 1
  }).to('.projetVisuel__img--left', {
    rotation: -10,
    duration: 5
  }).from('.projetVisuel__img--right', {
    rotation: 4,
    duration: 1
  }).to('.projetVisuel__img--right', {
    rotation: 10,
    duration: 5
  });
} else if (annexe) {
  var tennisScene = function tennisScene() {
    joueurDroit.classList.add('joueurDroit--active');
    joueurGauche.classList.add('joueurGauche--active');
    balle.classList.add('balle--active');
    filet.classList.add('filet--active');
    fond.classList.add('fondExpo--remove');
    fondE.classList.add('fondEtoile--remove');
    fondT.classList.remove('fondTennis--remove');
    setTimeout(function () {
      joueurDroit.classList.remove('joueurDroit--active');
      joueurGauche.classList.remove('joueurGauche--active');
      balle.classList.remove('balle--active');
      filet.classList.remove('filet--active');

      if (!scoutGauche.classList.contains('persoGauche--active')) {
        fond.classList.remove('fondExpo--remove');
        fondE.classList.remove('fondEtoile--remove');
      }
    }, "19000");
  }; //scout


  var scoutScene = function scoutScene() {
    scoutDroite.classList.add('persoDroite--active');
    scoutGauche.classList.add('persoGauche--active');
    tente.classList.add('tente--active');
    arbre.classList.add('arbres--active');
    feu.classList.add('feu--active');
    fond.classList.add('fondExpo--remove');
    fondT.classList.add('fondTennis--remove');
    fondE.classList.remove('fondEtoile--remove');
    setTimeout(function () {
      scoutDroite.classList.remove('persoDroite--active');
      scoutGauche.classList.remove('persoGauche--active');
      tente.classList.remove('tente--active');
      arbre.classList.remove('arbres--active');
      feu.classList.remove('feu--active');

      if (!joueurDroit.classList.contains('joueurDroit--active')) {
        fond.classList.remove('fondExpo--remove');
        fondT.classList.remove('fondTennis--remove');
      }
    }, "19000");
  }; //music


  var musicButton = function musicButton() {
    var btnM = document.querySelector('.btnM');
    btnM.classList.toggle('btnM--show');
  };

  var playFunction = function playFunction() {
    play.classList.add('hide');
    pause.classList.remove('hide');
    audio.play();
    audio.volume = 0.5;
  };

  var pauseFunction = function pauseFunction() {
    play.classList.remove('hide');
    pause.classList.add('hide');
    audio.pause();
  };

  //alcoves
  var fond = document.querySelector('.fondExpo'); //tennis

  var tennis = document.querySelector('.alcoveTennis');
  var joueurDroit = document.querySelector('.joueurDroit');
  var joueurGauche = document.querySelector('.joueurGauche');
  var balle = document.querySelector('.balle');
  var filet = document.querySelector('.filet');
  var fondT = document.querySelector('.fondTennis');
  tennis.addEventListener('click', tennisScene);
  var scout = document.querySelector('.alcoveScout');
  var scoutGauche = document.querySelector('.persoGauche');
  var scoutDroite = document.querySelector('.persoDroite');
  var tente = document.querySelector('.tente');
  var arbre = document.querySelector('.arbres');
  var feu = document.querySelector('.feu');
  var fondE = document.querySelector('.fondEtoile');
  scout.addEventListener('click', scoutScene);
  var button = document.getElementById('play-sound-btn');
  var audio = document.getElementById('sound');
  var music = document.querySelector('.alcoveMusic');
  var play = document.querySelector('.btnMPL');
  var pause = document.querySelector('.btnMPA');
  music.addEventListener('click', musicButton);
  play.addEventListener('click', playFunction);
  pause.addEventListener('click', pauseFunction);
  var scrollContainer = document.querySelector('.scroll-container');
  var scrollContent = document.querySelector('.scroll-content');
  var scrollingImage = document.querySelector('.scrolling-image');
  /*scrollContainer.addEventListener('scroll', () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContent.clientWidth) {
        const imageClone = scrollingImage.cloneNode(true); 
        scrollContent.appendChild(imageClone);
      }
  });*/

  document.addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
      document.querySelector('.scroll-container').scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, {
    passive: false
  });
}

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/scripts/app": 0,
/******/ 			"styles/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_dwmaj_workflow"] = self["webpackChunk_dwmaj_workflow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles/app"], () => (__webpack_require__("./src/scripts/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/app"], () => (__webpack_require__("./src/styles/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map