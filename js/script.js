'use strict';

const task1 = document.querySelector('#task1');
const regEx1 = /функци./g;
const funcRepl = task1.textContent.replace(regEx1, '<strong>$&</strong>');
task1.innerHTML = funcRepl;

const task2 = document.querySelectorAll('p');
for (let i = 0; i < task2.length; i++) {
  const regEx2 = /([0,1][0-9]|[2][0-3]):[0-5][0-9]/g;
  let funcRep2 = task2[i].textContent.replace(regEx2, '<b>$&</b>');
  task2[i].innerHTML = funcRep2;
}
  
const allDocument = document.querySelector('body');
const regEx3 = /«.*?»|("[^a-z]*?")/gi;
const funcRep3 = allDocument.innerHTML.replace(regEx3, '<mark>$&</mark>');
allDocument.innerHTML = funcRep3;

const regEx4 = /http:\/\/.*[^\s]/gi;
const funcRep4 = allDocument.innerHTML.replace(regEx4, '<a href="$&">$&</a>');
allDocument.innerHTML = funcRep4;

const funcRep5 = allDocument.innerHTML.match(/#[a-f0-9]{6}/gi);
console.log(funcRep5);

console.dir(allDocument.innerHTML);