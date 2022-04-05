
// let theboard = document.querySelector(class"board");
// let theBody = document.querySelector("body")
// let theTxt = document.querySelector("h3")

let theperson = document.getElementById ("person")
let theHeadline = document.getElementById ("headline")
// theperson.addEventListener('click', jump)

function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
}
function bounce(timeFraction) { 
    // I have no idea what this is but it makes the verticle bouncing movement
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}
function quad(timeFraction) {
    return Math.pow(timeFraction, 10);
}
//mouse clicked on
theperson.onclick = function() {
    jump(this,theperson);
    rise(this,theHeadline)
}

//the person
function jump(){
    // theperson.style.backgroundColor = "rgb(138, 92, 245)";
    let height1 = 600 - (theperson.clientHeight);
    let width = 800 - (theperson.clientWidth);
    
    
    animate({
        duration: 1200,
        timing: makeEaseOut(bounce),
    // trigger jumping
        draw: function(progress) {
            theperson.style.top = height1 * progress
        }
    })
    animate({
        duration: 2000,
        timing: makeEaseOut(quad),
        draw: function(progress) {
            theperson.style.left = width * progress 
        }
    });
}    

function rise(){
    let height2 = theHeadline.clientHeight - 200;

    animate({
        duration: 2200,
        timing: makeEaseOut(bounce),
    
        draw: function(progress) {
            theHeadline.style.top = height2 * progress
        }
    })
}
