'use strict';


let elem = document.getElementById('my-element'),
    start = document.getElementById('start');

const startAnimate = () => {
  let count = 0,
  moveInterval,
  moveAnimate = function(){
  moveInterval = requestAnimationFrame(moveAnimate);
  count += 0.3;
  if (count <= 75) {
    elem.style.left = count + '%';
  } else {
    count = 0;
  }
  }
  moveInterval = requestAnimationFrame(moveAnimate);  
};

start.addEventListener('click', () => {
  startAnimate();
})



