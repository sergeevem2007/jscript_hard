'use strict';

function addFunc(){
  if (document.querySelector("input").value != '') {
    let collection = document.querySelector('ul'),
        newElem = document.createElement('li');

    newElem.textContent = document.querySelector("input").value;
    collection.append(newElem);
  }
  document.querySelector("input").value = '';
  }

  document.querySelector("button").onclick = addFunc;
  