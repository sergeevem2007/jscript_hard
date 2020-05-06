window.addEventListener('DOMContentLoaded', () =>{
  'use strict';

  // Timer
  const countTimer = (deadline) =>{
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds'),
        dateStop = new Date(deadline).getTime();

    const getTimeRemaining = () =>{
      
      let dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000;
          while (timeRemaining <= 0) {
            dateStop += 86400000;
            timeRemaining = (dateStop - dateNow) / 1000;
          }
      let seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);
          return {timeRemaining, hours, minutes, seconds};
    }
    const updateClock = () =>{
      let timer = getTimeRemaining();
      timer.hours < 10 ? timerHours.textContent = '0' + timer.hours : timerHours.textContent = timer.hours;
      timer.minutes < 10 ? timerMinutes.textContent = '0' + timer.minutes : timerMinutes.textContent = timer.minutes;
      timer.seconds < 10 ? timerSeconds.textContent = '0' + timer.seconds : timerSeconds.textContent = timer.seconds;
      
      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
      }
    }
    
    updateClock();
  }
  countTimer('27 april 2020 19:45:00');
  // Menu
  const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };
  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close'),
          popupContent = popup.querySelector('.popup-content');
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () =>{
        popup.style.display = 'block';
        if (screen.width > 768) {
          let countTop = 0,
              countOpacity = 0,
              moveInterval,
          moveAnimate = function(){
            moveInterval = requestAnimationFrame(moveAnimate);
            countOpacity += 0.03;
            countTop += 0.3;
            if (countTop <= 10 && countOpacity <= 1) {
              popupContent.style.top = countTop + '%';
              popupContent.style.opacity = countOpacity;
            } else {
            cancelAnimationFrame(moveInterval);
            }
          }
          moveInterval = requestAnimationFrame(moveAnimate); 
        }
      });
    });
    popupClose.addEventListener('click', () =>{
      popup.style.display = 'none';
    });
  };
  togglePopUp();
  // scroll
  const scrollTo = (elem) => {
    window.scroll({
      left: 0,
      top: elem.offsetTop,
      behavior: 'smooth'
    });
  };
  const getScrollElem = () => {
    const mainA = document.querySelector('main>a'),
          menuA = document.querySelectorAll('menu>ul>li>a'),
    serviceBlock = document.querySelector('#service-block');
    mainA.addEventListener('click', ()=>{
      event.preventDefault();
      scrollTo(serviceBlock);
    });
    for (let i = 0; i < menuA.length; i++) {
      menuA[i].addEventListener('click', ()=>{
        event.preventDefault();
        let section = document.querySelector(`${menuA[i].hash}`);
        scrollTo(section);
      });
    }
  }
  getScrollElem();
});