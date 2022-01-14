var containerInfoJobDag = document.getElementById("containerInfoJobDag");
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
    var x = document.getElementsByClassName("navLi");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "block") {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
        }
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
function showText(img) {
    img.children[0].style.opacity = "0.1"
    img.children[1].style.visibility = "visible"
    // alert(`${}`)
}

function hideText(img) {
    img.children[0].style.opacity = "1"
    img.children[1].style.visibility = "hidden"
}

function carousel(element) {
    console.log(element.nextElementSibling.children[0].outerHTML)

    var countdownAan = () => {
        element.innerHTML = element.nextElementSibling.children[nummer_carousel % 3].outerHTML
        nummer_carousel++
        // if (nummer_carousel < ) {
        //     pauzeknoppen(aan, "||", "green");
        //     countdown();
        // } else {
        //     pauzeknoppen(aan, "|>", "");
        //     clearInterval(zetaan)
        // }
    }
    // var zetaan = 
    setInterval(countdownAan, 1000);
}



window.addEventListener("load", carousel(carousel_HTML))