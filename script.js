'use strict';


let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let ArrayMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
let letterDate = document.querySelector('.letter-date'),
    numberDate = document.querySelector('.number-date');
    
let renameHour = function(n) {
  let nameHour = 'часов';
  if (n === 1 || n === 21) {
    nameHour = 'час';
  } else if (n >= 2 && n <= 4 || n === 22 || n === 23) {
    nameHour = 'часа';
  }
  return nameHour;
};

let renameMinute = function(n) {
  let nameMinute = 'минут';
  if (n === 1 || n === 21 || n === 31 || n === 41 || n === 51) {
    nameMinute = 'минута';
  } else if (n >= 2 && n <= 4) {
    nameMinute = 'минуты';
  }
  return nameMinute;
};

let renameSeconds = function(n) {
  let nameSeconds = 'секунд';
  if (n === 1 || n === 21 || n === 31 || n === 41 || n === 51) {
    nameSeconds = 'секунда';
  } else if (n >= 2 && n <= 4) {
    nameSeconds = 'секунды';
  }
  return nameSeconds;
};

let rename = function(n) {
  if (n >= 0 && n <= 9 ) {
    n = '0' + n;
  }
  return n;
};

let nameLetterDate = function() {
  let date = new Date(),
      dayWeek = date.getDay()-1,
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      seconds = date.getSeconds();
  letterDate.innerHTML = ('Сегодня ' + week[dayWeek] + ', ' + day + ' ' + ArrayMonth[month] + ' ' + year + ' года, ' + hour + ' ' + renameHour(hour) + ' ' + minute + ' ' + renameMinute(minute) + ' ' + seconds + ' ' + renameSeconds(seconds));
};
let nameNumberDate = function() {
  let date = new Date(),
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      seconds = date.getSeconds();
  numberDate.innerHTML = (rename(day) + '.' + rename(month) + '.' + year + ' - ' + rename(hour) + ':' + rename(minute) + ':' + rename(seconds));
};
nameLetterDate();
nameNumberDate();
setInterval(nameLetterDate , 1000);
setInterval(nameNumberDate , 1000);
