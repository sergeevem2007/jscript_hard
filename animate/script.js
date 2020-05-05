'use strict';


let element = document.getElementById('element'),
    start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    reset = document.getElementById('reset'),
    moveInterval,
    count;

const moveAnimate = function () {
    moveInterval = requestAnimationFrame(moveAnimate);
    count += 0.3;
    if (count <= 75) {
        element.style.left = count + '%';
        element.style.transform = `rotate(${count * 10}deg)`;
    } else {
        count = 0;
    }
    return count;
}
start.addEventListener('click', () => {
  moveAnimate();
  start.classList.toggle('d-none');
  pause.classList.toggle('d-none');
});
pause.addEventListener('click', () => {
  moveInterval = cancelAnimationFrame(moveInterval);
  start.classList.toggle('d-none');
  pause.classList.toggle('d-none');
});
reset.addEventListener('click', () => {
  moveInterval = cancelAnimationFrame(moveInterval);
  count = 0;
  start.classList.remove('d-none');
  pause.classList.add('d-none');
  element.style.left = `${count}`;
  element.style.transform = `rotate(${count}deg)`;
});
