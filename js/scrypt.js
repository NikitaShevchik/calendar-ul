"use strict"
/*------------Получаем теги куда записывать год и месяц-------------*/
const month = document.querySelector(".calendar__month");
const year = document.querySelector(".calendar__year");
/*------------Получаем в ДОМ стрелочки------------*/
const arrowYearLeft = document.querySelector(".year__left");
const arrowYearRight = document.querySelector(".year__right");
const arrowMonthLeft = document.querySelector(".month__left");
const arrowMonthRight = document.querySelector(".month__right");
/*------------ДОМ всех дат(родителя)-------------*/
const allDaysCalendar = document.querySelector(".calendar__days");
/*------------Получаем сегодняшние: число, месяц, год-------------*/
var todayDate = (new Date()).toISOString().slice(8, 10);
var todayMounth = (new Date()).toISOString().slice(5, 7);
var todayYear = (new Date()).toISOString().slice(0, 4);
/*------------Вывод для удобства в консоль-------------*/
console.log(todayDate);
console.log(todayMounth);
console.log(todayYear);
/*------------Создаем массив из месяцев на русском-------------*/
var monthRussian = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентрябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
/*------------Выводим текущий год-------------*/
function whatYearToday() {
    year.innerHTML = todayYear;
}
/*------------Выводим текущий месяц-------------*/
function whatMonthToday() {
    month.innerHTML = monthRussian[Number(todayMounth) - 1];
}
/*------------Какой сейчас день (красит его красным)-------------*/
function whatDayToday() {
    var monthNow; // месяц сейчас записаный
    monthNow = monthRussian.indexOf(month.innerHTML); // его индекс (реал номер - 1)
    if (Number(todayMounth) - 1 == monthNow && todayYear == year.innerHTML) {
        var today = document.getElementById(todayDate);
        today.classList.add("_today");
    } else {
        var today = document.getElementById(todayDate);
        today.classList.remove("_today");
    }
};
/*------------Запускаем эти функции. Функция красного дня нам еще пригодится ниже.-------------*/
whatYearToday();
whatMonthToday();
whatDayToday();
/*------------Предыдущий год-------------*/
arrowYearLeft.addEventListener('click', function () {
    var yearNew = year.innerHTML;
    year.innerHTML = yearNew - 1;
    whatDayToday(); //окрашиваем ли сегодняшнее число?
});
/*------------Следующий год-------------*/
arrowYearRight.addEventListener('click', function () {
    var yearNew = year.innerHTML;
    year.innerHTML = Number(yearNew) + 1;
    whatDayToday(); //окрашиваем ли сегодняшнее число?
});
/*------------Предыдущий месяц-------------*/
arrowMonthLeft.addEventListener('click', function () {
    var monthNow;
    monthNow = monthRussian.indexOf(month.innerHTML);
    if (monthNow == 0) {
        console.log('prevyear')
        monthNow = 11;
        month.innerHTML = monthRussian[monthNow];
        var yearNew = year.innerHTML;
        year.innerHTML = yearNew - 1;
        howMuchDays(); //сколько дней?
        whatDayToday(); //окрашиваем ли сегодняшнее число?
    } else {
        month.innerHTML = monthRussian[monthNow - 1];
        howMuchDays(); //сколько дней?
        whatDayToday(); //окрашиваем ли сегодняшнее число?
    }
});
/*------------Следующий месяц-------------*/
arrowMonthRight.addEventListener('click', function () {
    var monthNow;
    monthNow = monthRussian.indexOf(month.innerHTML);
    if (monthNow == 11) {
        console.log('newyear');
        monthNow = 0;
        month.innerHTML = monthRussian[monthNow];
        var yearNew = year.innerHTML;
        year.innerHTML = Number(yearNew) + 1;
        howMuchDays(); //сколько дней?
        whatDayToday(); //окрашиваем ли сегодняшнее число?
    } else {
        month.innerHTML = monthRussian[monthNow + 1];
        howMuchDays(); //сколько дней?
        whatDayToday(); //окрашиваем ли сегодняшнее число?
    }
});
/*------------3 переменные для вывода. 30, 31 и 28 дней в месяце-------------*/
var thirtyDays = allDaysCalendar.innerHTML;
var thirtyOneDays = allDaysCalendar.innerHTML + `<li class="calendar__day" id="31">31</li>`;
var twentyEight = `<li class="calendar__day" id="01">1</li>
<li class="calendar__day" id="02">2</li>
<li class="calendar__day" id="03">3</li>
<li class="calendar__day" id="04">4</li>
<li class="calendar__day" id="05">5</li>
<li class="calendar__day" id="06">6</li>
<li class="calendar__day" id="07">7</li>
<li class="calendar__day" id="08">8</li>
<li class="calendar__day" id="09">9</li>
<li class="calendar__day" id="10">10</li>
<li class="calendar__day" id="11">11</li>
<li class="calendar__day" id="12">12</li>
<li class="calendar__day" id="13">13</li>
<li class="calendar__day" id="14">14</li>
<li class="calendar__day" id="15">15</li>
<li class="calendar__day" id="16">16</li>
<li class="calendar__day" id="17">17</li>
<li class="calendar__day" id="18">18</li>
<li class="calendar__day" id="19">19</li>
<li class="calendar__day" id="20">20</li>
<li class="calendar__day" id="21">21</li>
<li class="calendar__day" id="22">22</li>
<li class="calendar__day" id="23">23</li>
<li class="calendar__day" id="24">24</li>
<li class="calendar__day" id="25">25</li>
<li class="calendar__day" id="26">26</li>
<li class="calendar__day" id="27">27</li>
<li class="calendar__day" id="28">28</li>`;
/*------------Функция которая должна понять какой сейчас месяц и вывести нужное количество дней-------------*/
function howMuchDays() {
    var monthSelect = monthRussian.indexOf(month.innerHTML);
    if (monthSelect == 1) {
        allDaysCalendar.innerHTML = twentyEight;
    } else if (monthSelect == 0 || monthSelect == 2 || monthSelect == 4 || monthSelect == 6 || monthSelect == 7 || monthSelect == 9 || monthSelect == 11) {
        allDaysCalendar.innerHTML = thirtyOneDays;
    } else {
        allDaysCalendar.innerHTML = thirtyDays;
    }
    console.log(monthSelect);
}