import {
  UI
} from './view.js';

const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

UI.BUTTON_SEARCH.addEventListener("click", (e) => {
  e.preventDefault();

  getWeather(UI.INPUT.value);
});



function getWeather(cityName) {
  const urlWeater = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

  const promiseWeater = fetch(urlWeater);

  UI.INPUT.value = "";

  promiseWeater
    .then((response) => response.json())
    .then((city) => {
      UI.TEMP_INDICATOR.textContent = city.main.temp.toFixed(0)
      UI.CITY.textContent = city.name;
    })
    .catch((err) => {
      UI.CITY.textContent = '';
      UI.TEMP_INDICATOR.textContent = 0;
      alert(err.massage = 'Error: there is no such city')
    });
}



UI.BUTTON_HEARTH.addEventListener('click', () => {
  const locationCity = document.createElement('div');
  const deleteButton = document.createElement('button');
  const imageHeart = document.querySelector('.button-heart > img')
  

  locationCity.className ='locations__city city';
  deleteButton.className = 'button-close';
  imageHeart.classList.add('image-heart')

  locationCity.textContent = UI.CITY.textContent

  deleteButton.insertAdjacentHTML('afterbegin', '<img src="./assets/img/close-icon.svg" alt="close-icon">');
  locationCity.append(deleteButton)
  
  UI.locationList.prepend(locationCity)
  
})
