loadEventListener();


function loadEventListener() {

document.addEventListener('DomContentLoaded',
function() {
    calculateDate();
});

};

var Timeto = document.getElementById('date-selector').value,
date,
now = new Date(),
newYear = new Date('1.1.2020').getTime(),
startTimer = '';

function calculateDate(dates) {
clearInterval(startTimer);
if (typeof(dates) == 'undefined') {

    date = new Date(newYear).getTime();

} else {
date = new Date(dates).getTime();
}

function UpdateTimer(date) {
var now = new Date().getTime();
var distance = date - now;

//CALCULATING FORMULAS FOR DAYS,HOURS,MINUTES,SECONDS
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
var second = Math.floor((distance % (1000 * 60)) / 1000);

//Selecting out the inner Htlm using Dom methode
document.querySelector('.day').innerHTML = days;
document.querySelector('.minute').innerHTML = minutes;
document.querySelector('.hours').innerHTML = hours;
document.querySelector('.second').innerHTML = second;

//checking if now is larger than the current date
if (now >= date) {
clearInterval(startTimer);
document.querySelector('.day').innerHTML = 'D';
document.querySelector('.minute').innerHTML = 'O';
document.querySelector('.hours').innerHTML = 'N';
document.querySelector('.second').innerHTML = 'E';


}
}

startTimer = setInterval(function () {

    UpdateTimer(date);
},1000);



}


