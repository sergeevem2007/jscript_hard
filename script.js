'use strict';

document.addEventListener("DOMContentLoaded", function() {
  function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
  
  DomElement.prototype.createElem = function(){
    let body = document.querySelector('body');
      let div = document.createElement('div');
      div.classList.add(this.selector.slice(1));
      div.style.cssText=
      `
      height: ${this.height}px;
      width: ${this.width}px;
      background:${this.bg};
      position: absolute;
      `;
      body.append(div);
  };
  
  let elem = new DomElement ('.block','100','100','red');
  elem.createElem();
  let bottom = 0,
      left = 0,
      right = 0,
      block = document.querySelector('.block');

  document.addEventListener('keydown', function (event) {
    if ( event.key == "ArrowDown") {
      bottom += 10;
      block.style.marginTop = bottom + 'px';
    }
    if ( event.key == "ArrowUp") {
      bottom -= 10;
      block.style.marginTop = bottom + 'px';
    }
    if ( event.key == "ArrowLeft") {
      right -= 10;
      left += 10;
      block.style.marginRight = left + 'px';
      block.style.marginLeft = right + 'px';
    }
    if ( event.key == "ArrowRight") {
      right += 10;
      left -= 10;
      block.style.marginRight = left + 'px';
      block.style.marginLeft = right + 'px';
    }
  });

});

