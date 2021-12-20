
export const UI = {
   BUTTON_SEARCH : document.querySelector(".button"),
   INPUT : document.querySelector(".input"),
   TEMP_INDICATOR : document.querySelector(".current_temperature"),
   CITY_TAB : document.querySelector(".city"),
   CITIES : document.querySelectorAll('.locations__city'),
   BUTTON_HEARTH : document.querySelector('.button-heart'),
   locationList : document.querySelector('.locations__list'),
   IMAGE_HEART : document.querySelector(".button-heart > img"),
}


const BUTTONS_TABS = document.querySelectorAll('.weather__button');
const TABS = document.querySelectorAll('.weather__content__item');


BUTTONS_TABS.forEach((button, index) => {

  button.addEventListener('click', ()=> {
    
    BUTTONS_TABS.forEach(item => {
      item.classList.remove('active')
    });

    TABS.forEach(item => {
      item.classList.remove('active')
    });

    TABS[index].classList.add('active');
    button.classList.add('active');

  })
})



