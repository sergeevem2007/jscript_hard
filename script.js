'use strict';

let date = new Date();
console.log(date);
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let ArrayMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
let letterDate = document.querySelector('.letter-date'),
    numberDate = document.querySelector('.number-date');
    dayWeek = date.getDay()-1,
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hour = date.getHours();

let nameHour = function() {
  let nameHour = 'часов';
  if (hour === 0) {
    nameHour = 'часа';
  } else if ()
};
let parseDate = function() {
  
  
  letterDate = document.write('Сегодня ' + week[dayWeek] + ', ' + day + ' ' + ArrayMonth[month] + ' ' + year + ' года, ' + hour + ' ' + nameHour());
};

console.log(parseDate());