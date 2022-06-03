"use strict"

const month = document.querySelector(".calendar__month");
const year = document.querySelector(".calendar__year");

const arrowYearLeft = document.querySelector(".year__left");
const arrowYearRight = document.querySelector(".year__right");
const arrowMonthLeft = document.querySelector(".month__left");
const arrowMonthRight = document.querySelector(".month__right");

var todayDate = (new Date()).toISOString().slice(8, 10);
var todayMounth = (new Date()).toISOString().slice(5, 7);
var todayYear = (new Date()).toISOString().slice(0, 4);

console.log(todayDate);
console.log(todayMounth);
console.log(todayYear);

var monthRussian = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентрябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function whatYearToday() {
    year.innerHTML = todayYear;
}
function whatMonthToday() {
    if (todayMounth < 10) {
        month.innerHTML = monthRussian[Number(todayMounth[1]) - 1];
    } else {
        month.innerHTML = monthRussian[Number(todayMounth) - 1];
    }
}
function whatDayToday() {
    var today = document.getElementById(todayDate);
    today.classList.add("_today");
};
whatYearToday();
whatMonthToday();
whatDayToday();

arrowYearLeft.addEventListener('click', function () {
    var yearNew = year.innerHTML;
    year.innerHTML = yearNew - 1;
});

arrowYearRight.addEventListener('click', function () {
    var yearNew = year.innerHTML;
    year.innerHTML = Number(yearNew) + 1;
});

arrowMonthLeft.addEventListener('click', function () {
    var monthNow;
    monthNow = monthRussian.indexOf(month.innerHTML);
    if (monthNow == 0) {
        console.log('prevyear')
        monthNow = 11;
        month.innerHTML = monthRussian[monthNow];
        var yearNew = year.innerHTML;
        year.innerHTML = yearNew - 1;
    } else {
        month.innerHTML = monthRussian[monthNow - 1];
    }
});

arrowMonthRight.addEventListener('click', function () {
    var monthNow;
    monthNow = monthRussian.indexOf(month.innerHTML);
    if (monthNow == 11) {
        console.log('newyear');
        monthNow = 0;
        month.innerHTML = monthRussian[monthNow];
        var yearNew = year.innerHTML;
        year.innerHTML = Number(yearNew) + 1;
    } else {
        month.innerHTML = monthRussian[monthNow + 1];
    }
});
