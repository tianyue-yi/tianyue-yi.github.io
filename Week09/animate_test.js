
// let theboard = document.querySelector(class"board");
// let theBody = document.querySelector("body")
// let theTxt = document.querySelector("h3")

let theperson = document.getElementById ("")

function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}

ball.onclick = function() {

    let height = field.clientHeight - ball.clientHeight;
    let width = 100;

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw: function(progress) {
        ball.style.top = height * progress + 'px'
        }
    });
}