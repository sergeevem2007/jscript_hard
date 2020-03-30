'use strict';

let num = 266219;
let lang;
let ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let en = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let lang_array = [];
let namePerson;  

function opNumbers(num) {
  if (!num)
      return 0;
  let result = 1;
  while (num) {
      result *= num % 10;
      num = Math.floor(num / 10);
  }
  result = result ** 3;
  result = String(result);
  console.log(result[0] + ' ' + result[1]);
  return result; 
}
opNumbers(num);

lang = prompt('введите значение "ru" или "en"');
function langIf(lang) {
  if (lang === 'ru') {
    console.log(ru);
  } else {
    if (lang === 'en') {
      console.log(en);
    } else console.log('Введены некоретные значения');
  }
}
function langSwitch(lang) {
  switch(lang){
    case 'ru':
      console.log(ru);
      break;
    case 'en':
      console.log(en);
      break;
  }
}
function langArray(lang) { 
  lang_array['ru'] = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  lang_array['en'] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  console.log(lang_array[lang]);
}

langIf(lang);
langSwitch(lang);
langArray(lang);

namePerson = prompt('введите значение namePerson');
namePerson.toLowerCase();
(namePerson === 'артем') ? console.log('директор') :
(namePerson === 'максим') ? console.log('преподаватель') :
console.log('студент');