var aboutElement = document.getElementById("About");
aboutElement.style.height = window.innerHeight;

const [red, green, blue] = [0, 0, 0];
const body = document.body;
body.style.width = window.innerWidth;
var container = document.getElementById("mainContainer");

var r = 0;
var g = 0;
var b = 0;

// window.addEventListener("scroll", () => {
//   const y = (window.scrollY || window.pageYOffset) / 60;

//   if (y < 51) {
//     r = y;
//   } else {
//     r = 51;
//   }

//   if (y < 54) {
//     g = y;
//   } else {
//     g = 54;
//   }

//   if (y < 82) {
//     b = y;
//   } else {
//     b = 82;
//   }
  
  // container.style.background = `rgb(${r}, ${g}, ${b})`;
  // container.style.background = `linear-gradient(111deg, rgba(${r}, ${g}, ${b},1) 0%, rgba(${r}, ${g}, ${b},1) 56%, rgba(4,80,149,1) 100%)`;
  // document.documentElement.style.background = `rgb(${r}, ${g}, ${b})`;
  // container.style.background = `rgb(0, 0, 0)`;
  
  document.documentElement.style.background = `rgb(0, 0, 0)`;
  

  container.style.width = window.innerWidth;
// });

ScrollReveal().reveal(".test", { delay: 500 });
ScrollReveal().reveal(".bloc1", { delay: 500 });
ScrollReveal().reveal(".bloc2", { delay: 700 });
ScrollReveal().reveal(".bloc3", { delay: 900 });
ScrollReveal().reveal(".bloc4", { delay: 1100 });
ScrollReveal().reveal(".bloc5", { delay: 1300 });
ScrollReveal().reveal(".bloc6", { delay: 1500 });
ScrollReveal().reveal(".bloc7", { delay: 1700 });

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");
var elementProgess = document.getElementById("skillBars");
var elementsProgressBar = document.querySelectorAll(".progress-bar");
var tableValMaxSkill = [90, 85, 80, 75, 70, 50, 20, 10];
var i = 0;

function setSkills(index, valMax) {
  if (i < valMax) {
    i = i + 1;
    elementsProgressBar[index].setAttribute("value", i);
    elementsProgressBar[index].style.setProperty("--value", i + "%");
  }
}
function removeSkills() {}

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");

      if (element === elementProgess) {
        for (var j = 0; j < elementsProgressBar.length; j++) {
          if (i < tableValMaxSkill[j]) {
            i = i + 1;
            elementsProgressBar[j].setAttribute("value", i);
            elementsProgressBar[j].style.setProperty("--value", i + "%");
          }
        }
      }
    } else {
      element.classList.remove("is-visible");
      if (element === elementProgess) {
        elementsProgressBar[0].setAttribute("value", 0);
        i = 0;
      }
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

var btnSendEmail = document.getElementById("emailbtn");
btnSendEmail.addEventListener("click", () => {
  window.location.href = "mailto:antonimalki1990@gmail.com";
});

document.getElementById("jedeclarecontent").hidden = true;
document.getElementById("maraboucontent").hidden = true;
document.getElementById("dgacontent").hidden = true;
document.getElementById("rsicontent").hidden = true;
document.getElementById("cafcontent").hidden = true;
document.getElementById("gpnetcontent").hidden = true;

var bgstars = document.getElementById("starsbg");

function displayPlanet(planet, planetCss, planetContentId,titleId) {
  // let planet = document.getElementById(planetId)
  planet.classList.add("planet-focus-size");
  planet.classList.remove("leave-planet");
  planet.classList.replace(planetCss, "focus-planet");
  document.getElementById(planetContentId).hidden = false;
  document.getElementById(titleId).hidden = true;
  clickOutside(planet, planetCss, planetContentId,titleId);
}

function clickOutside(planet, planetCss, planetContentId,titleId) {
  bgstars.addEventListener("click", (e) => {
    if (e.target != planet) {
      planet.classList.remove("planet-focus-size");
      planet.classList.replace("focus-planet", planetCss);
      planet.classList.add("leave-planet");
      document.getElementById(planetContentId).hidden = true;
      document.getElementById(titleId).hidden = false;
      // bgstars.removeEventListener('click')
      e.stopPropagation();
    }
  });
}

function hidePlanet(planetId, planetCss, planetContentId, event,titleId) {
  let planet = document.getElementById(planetId);
  planet.classList.remove("planet-focus-size");
  planet.classList.replace("focus-planet", planetCss);
  planet.classList.add("leave-planet");
  document.getElementById(planetContentId).hidden = true;
  document.getElementById(titleId).hidden = false;

  event.stopPropagation();
}
