// JavaScript source code


//Set the countdown date
var countDownDate = new Date("Mar 22, 2019, 17:00:00").getTime();

var interval = setInterval(function () {

    //get today date and time
    var now = new Date().getTime();

    //diff between today and countdown date
    var diff = countDownDate - now;

    //calculate time
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    if (diff < 0) {
        clearInterval(interval);
    }
}, 1000);