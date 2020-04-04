'use strict';


let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let text;
let date = new Date();

for (let i = 0; i < week.length; i++) {
  document.write('<p id="'+ i + '">')
  text = document.write( week[i] );
}

let italicStyle = document.getElementById('5');
italicStyle.style.fontStyle = 'italic';
italicStyle = document.getElementById('6');
italicStyle.style.fontStyle = 'italic';
let boldStyle = document.getElementById(''+date.getDay()+'');
boldStyle.style.fontWeight = 'bold';