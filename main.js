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
      
    })
    .catch(alert);
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

  const isNoteValidList = (storageList === null || !storageList.includes(storageData.city));

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
  
  if (targetCity.classList.contains("button-close")) {

    storage.saveFavorits(storageList.filter(city => city !== targetCity.parentNode.innerText))

    targetCity.parentNode.remove();

    UI.NOW.IMAGE_HEART.classList.remove("image-heart");
  } else 

  
  getWeather(targetCity.innerText);
  
})

