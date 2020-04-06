'use strict';


let lang;
let ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let en = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let lang_array = [];
let namePerson;  

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