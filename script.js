var jobdag = document.getElementById("jobdag");
var countdown = document.getElementById("countdown");
var redirectToSignUp = document.getElementById("redirectToSignUp");
var dayDiv = document.getElementById("day");
var hrDiv = document.getElementById("hr");
var minDiv = document.getElementById("min");
var secDiv = document.getElementById("sec");
// var = document.getElementById("");
//SW
var carousel_HTML = document.getElementById("pupil-carousel")
var pupil = document.getElementsByClassName("pupil");
var nummer_carousel = 0;

function navMenue() {
    // let x = document.getElementsByClassName("navLi");
    let x = document.getElementsByClassName("navLiHam");
    for (let i = 0; i < x.length; i++) {
        (x[i].style.display === "block" ? x[i].style.display = "none" : x[i].style.display = "block");
    }
}

function clickMenuItem() {
    // let x = document.getElementsByClassName("navLi");
    let x = document.getElementsByClassName("navLiHam");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

function getCurrentDateTime() {
    var time = new Date().getTime() / 1000;     //current in unix
    return time;
}

const endTime = 1645430400;  //unix tijdcode 21 februari om 9uur onze tijd

function calcDifference() {
    let currentTime = getCurrentDateTime();
    let difference = endTime - currentTime;

    let days = Math.floor(difference / 86400);
    let rest = Math.floor(difference % 86400);
    let hours = Math.floor(rest / 3600);
    let rest2 = Math.floor(rest % 3600);
    let minutes = Math.floor(rest2 / 60);
    let seconds = Math.floor(rest2 % 60);

    if (hours < 10) { hours = "0" + hours }
    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds }



    dayDiv.innerText = days;
    hrDiv.innerText = hours;
    minDiv.innerText = minutes;
    secDiv.innerText = seconds;
}

setInterval(() => {
    calcDifference();
}, 1000);

//SW
function showText(badge) {
    badge.children[0].style.opacity = "0.1"
    badge.children[1].style.visibility = "visible"
}

function hideText(badge) {
    badge.children[0].style.opacity = "1"
    badge.children[1].style.visibility = "hidden"
}

function carousel(element) {
    console.log(element.nextElementSibling.children.length)
    var countdownAan = () => {
        nummer_carousel++
        var aantal_pupils = element.nextElementSibling.children.length;
        var orgineel = element;
        var nieuw = element.nextElementSibling.children[nummer_carousel % aantal_pupils];
        orgineel.style.left = "50%";
        nieuw.style.right = "50%";
        orgineel.innerHTML = nieuw.outerHTML
    }
    // var zetaan = 
    setInterval(countdownAan, 3000);
}



window.addEventListener("load", carousel(carousel_HTML))

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbarContainer").style.top = "0";
    } else {
        document.getElementById("navbarContainer").style.top = "-70.8px";
    }
    prevScrollpos = currentScrollPos;
}
