
export const UI = {
   BUTTON_SEARCH : document.querySelector(".button"),
   INPUT : document.querySelector(".input"),

   FavoriteList : document.querySelector('.locations__list'),
   CITIES : document.querySelectorAll('.locations__city'),

   NOW : {
    TEMP_INDICATOR : document.querySelector(".current_temperature"),
    IMAGE : document.querySelector(".weather__img__now > img"),
    CITY : document.querySelector(".city"),
    IMAGE_HEART : document.querySelector(".button-heart > img"),
    BUTTON_HEARTH : document.querySelector(".button-heart"),
  },
   
  DETAILS : {
    CITY : document.querySelector(".weather__city__details > .city"),
    TEMP_INDICATOR : document.querySelector(".details-temp"),
    FEELS_LIKE : document.querySelector(".details-feels"),
    WEATHER : document.querySelector(".details-weather"),
    SUNRISE : document.querySelector(".details-sunrise"),
    SUNSET : document.querySelector(".details-sunset"),
  }
}


const BUTTONS_TABS = document.querySelectorAll('.weather__button');
const DISPLAY_TABS = document.querySelectorAll('.weather__content__item');


BUTTONS_TABS.forEach((button, index) => {

  button.addEventListener('click', ()=> {
    
    BUTTONS_TABS.forEach(item => {
      item.classList.remove('active')
    });

    DISPLAY_TABS.forEach(item => {
      item.classList.remove('active')
    });

    DISPLAY_TABS[index].classList.add('active');
    button.classList.add('active');

  })
})





