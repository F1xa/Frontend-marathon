import { UI, API } from "./view.js";
import { storage } from "./storage.js";

UI.BUTTON_SEARCH.addEventListener("click", (e) => {
  e.preventDefault();
  const currentCity = UI.INPUT.value;

  getWeather(currentCity);

  UI.INPUT.value = "";
  UI.NOW.IMAGE_HEART.classList.remove("image-heart");
});

function getWeather(cityName) {
  const urlWeater = `${API.SERVER_URL}?q=${cityName}&appid=${API.API_KEY}&units=metric`;

  fetch(urlWeater)
    .then((response) => response.json())
    .then((result) => {
      
      const data = {
        temp: result.main.temp.toFixed(0),
        city: result.name,
        image: result.weather[0].icon,
        feels_like: result.main.feels_like.toFixed(0),
        weather: result.weather[0].main,
        sunrise: result.sys.sunrise,
        sunset: result.sys.sunset,
      };

      storage.saveCurrentCity(data);

      addDataCurrentCity();
      addCityStorageList();
    })
    .catch(alert);
}

function addCityStorageList() {
  const storageData = storage.getCurrentCity();
  const storageList = storage.getFavoriteCities();
  const isNoteValidList =
    storageList === null || !storageList.includes(storageData.city);

  if (isNoteValidList) {
    storage.saveFavoriteCities(storageData.city);
  } else {
    UI.NOW.IMAGE_HEART.classList.add("image-heart");
    return;
  }
}


function addDataCurrentCity() {
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



function createTemplate(cityName) {
  return `<div class="locations__city">
              ${cityName}
            <button class="button-close">
              <img src="./assets/img/close-icon.svg" alt="close-icon">
            </button>
        </div>`;
}



function test() {
  const storageList = storage.getFavoriteCities();

  storageList.forEach((city) => {
    UI.FavoriteList.innerHTML += createTemplate(city);
  });
}

test();



UI.NOW.BUTTON_HEARTH.addEventListener("click", () => {

  const isNoteValidCity = UI.NOW.CITY.textContent === "City";
  const checkImageHeartClass = UI.NOW.IMAGE_HEART.classList.contains("image-heart")

  if (isNoteValidCity || checkImageHeartClass) {
    return false;
  }
  UI.FavoriteList.innerHTML += createTemplate(UI.NOW.CITY.textContent)
  UI.NOW.IMAGE_HEART.classList.add("image-heart");

});



UI.FavoriteList.addEventListener("click", (e) => {

  const targetCity = e.target;
  getWeather(targetCity.textContent)

})
