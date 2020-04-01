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
  console.log(result);
  let arr = [];
  while (result) {
    arr.unshift(result % 10);
    result = Math.floor(result / 10);
  }
  console.log(arr[0] , arr[1]);
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

const getString = function (data) {
  if (typeof data ===  'string') {
    data = data.trim();
    if ( data.length > 30) {
      console.log(data.slice(0, 31) + '...');
    }
  } else {
    console.log('Введена не строка');
  }
}

getString(10);
getString('                       привет мир ksdjvkjsv        dvhksajv kjavklj nvhkjpasv npkvakjspvkjpa  ');

let arr2 = ['543', '2999', '7998', '456', '6481', '200', '1900'];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i].charAt(0) === '2' || arr2[i].charAt(0) === '4') {
    console.log(arr2[i]);
  }
}

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log( i + ' Делители этого числа: 1 и ' + i); 
  }
}
showPrimes(100);