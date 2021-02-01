





    // var canvas = document.getElementById("myCanvas");
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    
    // if(canvas.getContext) {
    //   var ctx = canvas.getContext('2d');
    //   var w = canvas.width;
    //   var h = canvas.height;
    //   ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    //   ctx.lineWidth = 3;
    //   ctx.lineCap = 'round';
      
      
    //   var init = [];
    //   var maxParts = 12 ;
    //   for(var a = 0; a < maxParts; a++) {
    //     init.push({
    //       x: Math.random() * w,
    //       y: Math.random() * h,
    //       l: Math.random() * 15,
    //       xs:  -12 ,
    //       ys: Math.random() * 10 + 10
    //     })
    //   }
      
    //   var particles = [];
    //   for(var b = 0; b < maxParts; b++) {
    //     particles[b] = init[b];
    //   }
    //   var fadeIn  =1;
     
      
    //   function draw() {
    //     ctx.clearRect(0, 0, w, h);
    //     fadeIn -= 0.01;
    //     for(var c = 0; c < particles.length; c++) {
    //       var p = particles[c];
    //       ctx.beginPath();
    //       ctx.moveTo(p.x, p.y);
    //       ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
    //       ctx.globalAlpha = 1-fadeIn  ;

    //       ctx.stroke();
    //     }
        
    //     move();
    //   }
      
    //   function move() {
    //     for(var b = 0; b < particles.length; b++) {
    //       var p = particles[b];
    //       p.x += p.xs;
    //       p.y += p.ys;
    //       if(p.x > w || p.y > h) {
    //         p.x = Math.random() * w;
    //         p.y = -1;
    //       }
    //     }
    //   }
      
    //    setInterval(draw, 40);
      


    //    canvas.addEventListener("mouseover",hover,false);
    //    canvas.addEventListener("mouseout",hoverOut,false);

    //   function hover(e) {
    //     var random = Math.floor(Math.random() * 6) + 1  
        
    //     switch (random) {
    //       case 1:
    //         ctx.strokeStyle = 'red';
    //         break;
    //       case 2:
    //         ctx.strokeStyle = 'yellow';
    //       case 3:
    //         ctx.strokeStyle = 'orange';
    //         break;
    //         case 4:
    //           ctx.strokeStyle = 'purple';
    //           break;
    //         case 5 :
    //           ctx.strokeStyle = 'brown';
    //         case 6:
    //           ctx.strokeStyle = 'red';
    //           break;
    //       default:
    //         ctx.strokeStyle = 'rgba(174,194,224,0.5)';
           
    //     }
        
      
    //   }
    //   function hoverOut(e) {
    //     ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    // }

      

    // }

    //element.scrollIntoView();
 

    var aboutElement = document.getElementById('About')
    aboutElement.style.height = window.innerHeight;

    const [red, green, blue] = [0, 0, 0]
    const body =  document.body;
    body.style.width = window.innerWidth;
    var container = document.getElementById('mainContainer')
    
    var r = 0
    var g = 0
    var b = 0
    
    window.addEventListener('scroll', () => {
      const y =  (window.scrollY || window.pageYOffset) / 60

      console.log(y)

       if(y < 51){
      r = y
       }
       else{
        r = 51 
       }

       if(y < 54){
        g = y
         }
         else{
          g = 54
         }

         if(y < 82){
          b = y
           }
           else{
            b = 82 
           }
           document.documentElement
container.style.background = `rgb(${r}, ${g}, ${b})` ;
container.style.background = `linear-gradient(111deg, rgba(${r}, ${g}, ${b},1) 0%, rgba(${r}, ${g}, ${b},1) 56%, rgba(4,80,149,1) 100%)` ;
document.documentElement.style.background = `rgb(${r}, ${g}, ${b})` ;
document.documentElement.style.background = `linear-gradient(111deg, rgba(${r}, ${g}, ${b},1) 0%, rgba(${r}, ${g}, ${b},1) 56%, rgba(4,80,149,1) 100%)` ;

         container.style.width =  window.innerWidth;
      // if(r === 51 && g === 54 && b === 82){
      //  
      // }
   
    })

    ScrollReveal().reveal('.test',{ delay: 500 });
    ScrollReveal().reveal('.bloc1',{ delay: 500 });
    ScrollReveal().reveal('.bloc2',{ delay: 700 });
    ScrollReveal().reveal('.bloc3',{ delay: 900 });
    ScrollReveal().reveal('.bloc4',{ delay: 1100 });
    ScrollReveal().reveal('.bloc5',{ delay: 1300 });
    ScrollReveal().reveal('.bloc6',{ delay: 1500 });
    ScrollReveal().reveal('.bloc7',{ delay: 1700 });



    // Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
var elementProgess = document.getElementById("skillBars");
var elementsProgressBar = document.querySelectorAll('.progress-bar'); 
var tableValMaxSkill = [90,85,80,75,70,50,20,10]
var i = 0;

function setSkills(index,valMax){

  if(i < valMax){
    i = i + 1;
    elementsProgressBar[index].setAttribute('value', i);
    elementsProgressBar[index].style.setProperty('--value', i + '%');
}

}
function removeSkills(){

}


function loop() {

Array.prototype.forEach.call(elementsToShow, function(element){
if (isElementInViewport(element)) {

  
    element.classList.add('is-visible');



if (element === elementProgess){
  
 for(var j = 0; j<elementsProgressBar.length; j++){
  

  if(i < tableValMaxSkill[j]){
    i = i + 1;
    elementsProgressBar[j].setAttribute('value', i);
    elementsProgressBar[j].style.setProperty('--value', i + '%');
}

 }

}

} else {
 
element.classList.remove('is-visible');
if (element === elementProgess){
  elementsProgressBar[0].setAttribute('value', 0);
 i = 0;

}
}
});

scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
el = el[0];
}
var rect = el.getBoundingClientRect();
return (
(rect.top <= 0
&& rect.bottom >= 0)
||
(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
rect.top <= (window.innerHeight || document.documentElement.clientHeight))
||
(rect.top >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}

var btnSendEmail = document.getElementById('emailbtn')
btnSendEmail.addEventListener('click', () => {
  window.location.href = "mailto:antonimalki1990@gmail.com";
})

//  var btnjedeclare = document.getElementById('btnjedeclare')
//  document.getElementById('jedclarecontent').hidden = true;
//  btnjedeclare.addEventListener('click', () => {
//    btnjedeclare.classList.remove("leave-planet");
//    btnjedeclare.classList.replace("planet-jedeclare", "focus-planet");
//    document.getElementById('jedclarecontent').hidden = false;
//  })
// var leavejdc = document.getElementById('leavejdc')
// leavejdc.addEventListener('click', (e) => {
//   btnjedeclare.classList.replace("focus-planet", "planet-jedeclare");
//   btnjedeclare.classList.add("leave-planet");
//   document.getElementById('jedclarecontent').hidden = true;
//   e.stopPropagation();
// })
document.getElementById('jedeclarecontent').hidden = true;
document.getElementById('maraboucontent').hidden = true;

document.getElementById('dgacontent').hidden = true;
document.getElementById('rsicontent').hidden = true;
document.getElementById('cafcontent').hidden = true;
document.getElementById('gpnetcontent').hidden = true;

var bgstars= document.getElementById('starsbg');

function displayPlanet(planet,planetCss,planetContentId){
  // let planet = document.getElementById(planetId)
  planet.classList.add("planet-focus-size");
  planet.classList.remove("leave-planet");
  planet.classList.replace(planetCss, "focus-planet");
  document.getElementById(planetContentId).hidden = false;
  console.log("displayPlanet")
  clickOutside(planet,planetCss,planetContentId);


}

function clickOutside(planet,planetCss,planetContentId){
  
  bgstars.addEventListener('click', (e) => {
    if(e.target != planet) {
      console.log("clickOutside")
      planet.classList.remove("planet-focus-size");
      planet.classList.replace("focus-planet",planetCss);
      planet.classList.add("leave-planet");
      document.getElementById(planetContentId).hidden = true;
      // bgstars.removeEventListener('click')
      e.stopPropagation();
    } 
})

}

 function hidePlanet(planetId,planetCss,planetContentId,event){
   let planet = document.getElementById(planetId)
   planet.classList.remove("planet-focus-size");
  planet.classList.replace("focus-planet",planetCss);
   planet.classList.add("leave-planet");
   document.getElementById(planetContentId).hidden = true;

   event.stopPropagation();
}
// var btnRetour = document.getElementById('btn-retour')
// btnRetour.addEventListener('click', () => {
//   window.location.href = "mailto:antonimalki1990@gmail.com";
// })