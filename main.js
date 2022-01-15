import { UI } from "./view.js";
import { storage } from "./storage.js";
import { createData, getWeather } from "./api.js";


UI.BUTTON_SEARCH.addEventListener("click", (e) => {
  e.preventDefault();
  const currentCity = UI.INPUT.value;

  getWeather(currentCity, saveUpdateWeather);

  UI.INPUT.value = "";
  UI.NOW.IMAGE_HEART.classList.remove("image-heart");
});


function updateTabs() {
  const storageData = storage.getCurrentCity();

  UI.NOW.TEMP_INDICATOR.textContent = storageData.temp;
  UI.NOW.IMAGE.src = `http://openweathermap.org/img/wn/${storageData.image}@2x.png`;
  UI.NOW.CITY.textContent = storageData.city;

  UI.DETAILS.CITY.textContent = storageData.city;
  UI.DETAILS.TEMP_INDICATOR.textContent = `Temperature: ${storageData.temp}°`;
  UI.DETAILS.FEELS_LIKE.textContent = `Feels like: ${storageData.feels_like}°`;
  UI.DETAILS.WEATHER.textContent = `Weather: ${storageData.weather}`;
  UI.DETAILS.SUNRISE.textContent = `Sunrise: ${storageData.sunrise}`;
  UI.DETAILS.SUNSET.textContent = `Sunset: ${storageData.sunset}`
}

updateTabs()

function saveUpdateWeather(weather) {
  storage.saveCurrentCity(new createData(weather));
  updateTabs();
};


function createTemplate(cityName) {
  return `<div class="locations__city">
              ${cityName}
            <button class="button-close"></button>
        </div>`;
}



function fillFavoriteList() {
  const storageList = storage.getFavoriteCities();
  
  if (storageList) {
    storageList.forEach((city) => {

      UI.FavoriteList.innerHTML += createTemplate(city);
      UI.NOW.IMAGE_HEART.classList.add("image-heart");

    });
  }
}

fillFavoriteList();


UI.NOW.BUTTON_HEARTH.addEventListener("click", () => {
  const storageList = storage.getFavoriteCities();
  const storageData = storage.getCurrentCity();

  const isNoteValidCity = UI.NOW.CITY.textContent === "City";
  const checkImageHeartClass = UI.NOW.IMAGE_HEART.classList.contains("image-heart");

  if (isNoteValidCity || checkImageHeartClass) {
    return false;
  }

  const isNoteValidList = (!storageList.includes(storageData.city));

  if (isNoteValidList) {
    storage.saveFavoriteCity(storageData.city)
  } else {
    UI.NOW.IMAGE_HEART.classList.add("image-heart");
    return;
  }
  
  UI.FavoriteList.innerHTML += createTemplate(storageData.city)
  UI.NOW.IMAGE_HEART.classList.add("image-heart");
});



UI.FavoriteList.addEventListener("click", (e) => {
  const targetCity = e.target;
  const storageList = storage.getFavoriteCities();
  
  UI.NOW.IMAGE_HEART.classList.add("image-heart");

  if (targetCity.classList.contains("button-close")) {
   
    storage.saveFavorits(storageList.filter(city => city !== targetCity.parentNode.innerText))

    targetCity.parentNode.remove();

    UI.NOW.IMAGE_HEART.classList.remove("image-heart");
  } else 

  
  getWeather(targetCity.innerText, saveUpdateWeather);
  
})


if (UI.NOW.CITY.textContent === "City") {
  UI.NOW.IMAGE_HEART.classList.remove("image-heart");
 }