'use strict';

let color = document.querySelector('#color'),
    container = document.querySelector('.container'),
    button = document.querySelector('button'),
    arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'],
    colorValue;

let getRandomInt = function() {
  let min = 0;
  let max = 16;
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};

let changeColor =  function() {
  let colorValue = '';
  for (let i = 0; i < 6; i++) {
    let random = arr[getRandomInt()].toString();
    colorValue += random;
  }
  color.innerHTML = '#' + colorValue;
  button.style.color = '#' + colorValue;
  container.style.backgroundColor = '#' + colorValue;
};


button.addEventListener('click', changeColor);