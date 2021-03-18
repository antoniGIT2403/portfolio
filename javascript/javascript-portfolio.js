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
var languageSkillTable =[90, 85, 80, 75, 70, 60, 45];
var frameworkSkillTable =[85, 70, 70, 65, 55, 50];
var softwareSkillTable =[80, 75, 70, 65];
var databaseSkillTable =[65, 60, 55, 50];
var tableValMaxSkill = [];
tableValMaxSkill.push(...languageSkillTable)
tableValMaxSkill.push(...frameworkSkillTable)
tableValMaxSkill.push(...softwareSkillTable)
tableValMaxSkill.push(...databaseSkillTable)
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


var languageskill = document.getElementById("language")
var frameworkskill = document.getElementById("framework")
var softwareskill = document.getElementById("software")
var databaseskill = document.getElementById("database")
languageskill.hidden  = false;
frameworkskill.hidden = true;
softwareskill.hidden= true;
databaseskill.hidden = true;

function displayskill(navactive,skill){
  cleanCssActif();
  navactive.classList.add("active-nav");
  switch (navactive,skill) {
    case 'language':
      
      languageskill.hidden  = false;
      frameworkskill.hidden = true;
      softwareskill.hidden= true;
      databaseskill.hidden = true;
     
      break;
    case 'framework':
     
      languageskill.hidden  = true;
      frameworkskill.hidden = false;
      softwareskill.hidden= true;
      databaseskill.hidden = true;
     
      break;
    case 'software':
  
      languageskill.hidden  = true;
      frameworkskill.hidden = true;
      softwareskill.hidden= false;
      databaseskill.hidden = true;
      break;
      case 'database':
      
        languageskill.hidden  = true;
        frameworkskill.hidden = true;
        softwareskill.hidden= true;
        databaseskill.hidden = false;
        break;
    default:
     
  }
  
  function cleanCssActif(){
    navArray = document.querySelectorAll('.nav-skill');
    navArray.forEach(element => {
      element.classList.remove("active-nav");
    });
  }

}

