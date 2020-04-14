'use strict';

function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElem = function(){
  let body = document.querySelector('body');
  console.log(this);
  if (this.selector.charAt(0) === '.') {
    let div = document.createElement('div');
    div.classList.add(this.selector.slice(1));
    div.style.cssText=`height: `+ this.height +`px;
    width: `+ this.width +`px;
    background:`+ this.bg +`;
    font-size:`+ this.fontSize +`px;`;
    div.innerHTML = 'Всю отвергает если, потому, не истину приносило того по: вы я умеет было раз. Наслаждение умеет порицающих предаваться, за страдания из-за презирает справедливости это я. Стал неприятностей из никого, такого то воспользоваться, вами всю разумно вами никто, открывший перед постигают приносят возлюбил:'+
    'Никто нас возлюбил воспользоваться физическими отвергает из никаких, наслаждений предпочел упрекнуть истину никаких разъясню из. Постигают само всю, назвал — избегает не нет упражнениями раскрою пользы поняли.';
    body.append(div);
  } else if (this.selector.charAt(0) === '#') {
    let p = document.createElement('p');
    p.id = this.selector.slice(1);
    p.style.cssText=`height: `+ this.height +`px;
    width: `+ this.width +`px;
    background:`+ this.bg +`;
    font-size:`+ this.fontSize +`px;`;
    p.innerHTML = 'Всю отвергает если, потому, не истину приносило того по: вы я умеет было раз. Наслаждение умеет порицающих предаваться, за страдания из-за презирает справедливости это я. Стал неприятностей из никого, такого то воспользоваться, вами всю разумно вами никто, открывший перед постигают приносят возлюбил:';
    body.append(p);
  }
};

let elem1 = new DomElement ('.block','400','500','red','20');
let elem2 = new DomElement ('#best','500','900','green','30');

elem1.createElem();
elem2.createElem();

