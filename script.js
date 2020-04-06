'use strict';


let getString = function (data) {
  if (typeof data ===  'string') {
    data = data.trim();
    if ( data.length >= 30) {
      console.log(data.slice(0, 30) + '...');
    }
  } else {
    console.log('Введена не строка');
  }
}

getString(10);
getString('                       привет мир ksdjvkjsv        dvhksajv kjavklj nvhkjpasv npkvakjspvkjpa  ');