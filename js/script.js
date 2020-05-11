window.addEventListener('DOMContentLoaded', function(){
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
      return timer.timeRemaining;
    }
    if (updateClock() > 0) {
      setInterval(updateClock, 1000);
    }
  }
  countTimer('27 april 2020 19:45:00');

  // Menu
  const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu');
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    menu.addEventListener('click' , (event) =>{
      let target = event.target;
      if (target.tagName === 'A') {
        handlerMenu();
      }
    });
  };
  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
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
    popup.addEventListener('click', (event) =>{
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };
  togglePopUp();

  // tabs
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
          target = target.closest('.service-header-tab');
      if (target) {
        tab.forEach( (item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();

  // slider
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
          slider = document.querySelector('.portfolio-content'),
          dots = document.querySelector('.portfolio-dots');
    for (let i = 0; i < slide.length; i++) {
      let li = document.createElement('li');
      li.classList.add('dot');
      dots.append(li);
    }
    const dot = document.querySelectorAll('.dot');
    let currentSlide = 0,
        interval;
    
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time) => {
      interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };
    slider.addEventListener('click', (event) =>{
      event.preventDefault();
      let target = event.target;
      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) =>{
          if (elem === target) {
            currentSlide = index;
            console.log(index);
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      } else if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });
    slider.addEventListener('mouseover', (event) =>{
      if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')) {
        stopSlide();
      }
    });
    slider.addEventListener('mouseout', (event) =>{
      if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')) {
        startSlide(1500);
      }
    });
    startSlide(1500);
  };
  slider();

  // validate form
  const validateForm = () => {
    const input = document.querySelectorAll('.calc-block>input');
    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('input', () => {
        input[i].value = input[i].value.replace(/[^\d]/g, '');
      });
    }
  };
  validateForm();

  // hover image
  const hoverImage = () => {
    const comand = document.querySelector('.command');
    comand.addEventListener('mouseover', (event) =>{
      if (event.target.matches('.command__photo')) {
        event.target.src = event.target.dataset.img;
      }
      
    });
    comand.addEventListener('mouseout', (event) =>{
      if (event.target.matches('.command__photo')) {
        event.target.src = event.target.dataset.img.replace(/a(?=\.jpg)/gi, '');
      }
    });

  };
  hoverImage();

  //calculator
  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcCount = document.querySelector('.calc-count'),
          calcDay = document.querySelector('.calc-day'),
          totalValue = document.getElementById('total');
    const countSum = () => {
      let total = 0,
          countValue = 1,
          dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;
      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }
      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
        total = Math.ceil(total);
      }
      totalValue.textContent = total;
    };
    calcBlock.addEventListener('change', (event) => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')) {
        countSum();
      }
    });
  };
  calc(100);

  // send-ajax-form
  const sendForm = () => {
    const errorMesage = 'Что-то пошло не так...',
          loadMessage = `
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          <style>
          .lds-ring {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .lds-ring div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 64px;
            height: 64px;
            margin: 8px;
            border: 8px solid #fff;
            border-radius: 50%;
            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: #fff transparent transparent transparent;
          }
          .lds-ring div:nth-child(1) {
            animation-delay: -0.45s;
          }
          .lds-ring div:nth-child(2) {
            animation-delay: -0.3s;
          }
          .lds-ring div:nth-child(3) {
            animation-delay: -0.15s;
          }
          @keyframes lds-ring {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          </style>
          `,
          successMesage = 'Спасибо! Мы скоро с вами свяжемся!';
    const form1 = document.getElementById('form1'),
          form2 = document.getElementById('form2'),
          form3 = document.getElementById('form3'),
          form = [form1, form2, form3];
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `
    font-size: 2rem;
    z-index : 1;
    color : #ffffff;
    `;
    form.forEach( (elem , index) => {
      form[index].addEventListener('submit', (event) =>{
        event.preventDefault();
        form[index].appendChild(statusMessage);
        statusMessage.innerHTML = loadMessage;
        const formData = new FormData(form[index]);
        let body = {};
        for (let value of formData.entries()) {
          body[value[0]] = value[1];
        }
        postData(body , () => {
          statusMessage.textContent = successMesage;
          clearInput(form[index]);
        }, (error) => {
          statusMessage.textContent = errorMesage;
          console.error(error);
        });
      });
    }); 
    const postData = (body, outputData, errorData) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () =>{
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          outputData();
        } else {
          errorData(request.status);
        }
      });
      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'aplication/json');
      request.send(JSON.stringify(body));
    };
    const clearInput = (target) => {
      for (let i = 0; i < target.length; i++) {
        target[i].value = '';
      }
    };
  };
  sendForm();
  //validate input
  const validateInput = () => {
    const inputs = document.querySelectorAll('input');
    const formButtons =  document.querySelectorAll('.form-btn');
    for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input' , () =>{
      let target = event.target;
      if (target.name === 'user_name' || target.name === 'user_message' || target.name === 'top-form') {
        target.value = target.value.replace(/[^а-я\s]/gi, '');
      } else if (target.name === 'user_phone') {
        const mask = /^\+?[\d]{8,18}$/g;
        target.value = target.value.replace(/[^\d+]/g, '');
        let valid = mask.test(target.value);
        if (valid) {
          target.style.border = '';
          let i = 0;
          for (i; i < formButtons.length; i++){
            formButtons[i].disabled = false;
            }
          } else {
          target.style.border = '2px solid red';
          let j = 0;
          for (j; j < formButtons.length; j++){
            formButtons[j].disabled = true;
            }
        }
        
      }
    });
    }
  };
  validateInput();
});