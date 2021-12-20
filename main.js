import { UI } from "./view.js";

const SERVER_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f660a2fb1e4bad108d6160b7f58c555f";

UI.BUTTON_SEARCH.addEventListener("click", (e) => {
  e.preventDefault();

  getWeather(UI.INPUT.value);
  
});

function getWeather(cityName) {
  const urlWeater = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
  const promiseWeater = fetch(urlWeater);

  
  UI.INPUT.value = "";

  promiseWeater
    .then((response) => response.json())
    .then((city) => {
      UI.TEMP_INDICATOR.textContent = city.main.temp.toFixed(0);
      UI.CITY_TAB.textContent = city.name;
    })
    .catch((err) => {
      alert((err.massage = "Error: there is no such city"));
    });
}


UI.BUTTON_HEARTH.addEventListener("click", () => {
  const isNoteValidCity = UI.CITY_TAB.textContent === 'City';

  if (isNoteValidCity) {
    return false;
  }
  createCity();
});

function createCity() {
  const locationCity = document.createElement("div");
  const deleteButton = document.createElement("button");

  locationCity.className = "locations__city";
  deleteButton.className = "button-close";
  UI.IMAGE_HEART.classList.toggle("image-heart");

  locationCity.textContent = UI.CITY_TAB.textContent;

  deleteButton.insertAdjacentHTML(
    "afterbegin",
    '<img src="./assets/img/close-icon.svg" alt="close-icon">'
  );
  locationCity.append(deleteButton);
  
  addCityToTheList(locationCity);
  
}


function addCityToTheList(City) {
  const CityName = City.innerText;
  const arrayLocationList = Array.from(UI.locationList.children);
  const foundCity = arrayLocationList.find((city) => city.innerText === CityName);

  if (!foundCity) {
    UI.locationList.prepend(City);
    
  } else {
    foundCity.remove();
  }
 
  
  City.addEventListener('click', ()=> {
    getWeather(City.textContent)
  })
}



UI.CITIES.forEach(city => {
city.addEventListener('click', ()=> {
  console.log(city.textContent)
  getWeather(city.textContent);

})
})



