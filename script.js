'use strict';

let color = document.querySelector('#color'),
    container = document.querySelector('.container'),
    button = document.querySelector('button');

let getRandomInt = function() {
  return '#' + Math.floor(Math.random()*16777215).toString(16); // 16777215 - это колличество возможных цветов в палитре
};

let changeColor =  function() {
  let colorValue = getRandomInt();
  
  color.innerHTML = colorValue;
  button.style.color = colorValue;
  container.style.backgroundColor = colorValue;
};


button.addEventListener('click', changeColor);