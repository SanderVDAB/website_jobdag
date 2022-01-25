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

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// function navMenue() {
//     // let x = document.getElementsByClassName("navLi");
//     let x = document.getElementById("nav-list-container");
//     x.style.display === "flex" ? x.style.display = "none" : x.style.display = "flex";
// }

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

function loopHuidigeTest() {
    return nummer_carousel = (nummer_carousel + 1) % (pupil.length);
}

function carousel() {
    carousel_HTML.classList.add("outro");
    setTimeout(function () {
        carousel_HTML.classList.remove("outro");
        carousel_HTML.innerHTML = pupil[loopHuidigeTest()].outerHTML;
        carousel_HTML.classList.add("intro");
    }, 1000)
    setTimeout(function () {
        carousel_HTML.classList.remove("intro");
        carousel_HTML.classList.add("stay");
    }, 2000)
    setTimeout(function () {
        carousel_HTML.classList.remove("stay");
    }, 3000)
}

setInterval(carousel, 3000)

// function fixHeight() {
//     var pupils = document.getElementById("pupils")
//     var img_height = pupils.children[0].children[0].children[0].clientHeight
//     for (var i = 0; i < pupils.children.length; i++) {
//         pupils.children[i].style.height = `${img_height}px`
//     }
//     console.log(img_height, pupils.children[0])
// }

window.addEventListener("load", carousel(carousel_HTML))
// window.addEventListener("resize", fixHeight());

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
