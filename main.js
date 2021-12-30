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
      };
      storage.saveCurrentCity(data);

      addDataCurrentCity();
      addCityStorageList();
    })
    .catch(alert);
}

function addCityStorageList() {
  const storagetData = storage.getCurrentCity();
  const storageList = storage.getFavoriteCities();
  const isNoteValidList =
    storageList === null || !storageList.includes(storagetData.city);

  if (isNoteValidList) {
    storage.saveFavoriteCities(storagetData.city);
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
    console.log(city);
    UI.FavoriteList.innerHTML += createTemplate(city);
  });
}

test();

UI.NOW.BUTTON_HEARTH.addEventListener("click", () => {
  // const currentCity = TABS.NOW.CITY.textContent;
  const isNoteValidCity = TABS.NOW.CITY.textContent === "City";

  if (isNoteValidCity) {
    return false;
  }

  // storage.arrayFavoriteList.push(currentCity);
  // storage.saveFavoriteCity(currentCity);

  //const filteredFavoriteList = !storage.arrayFavoriteList.filter(city => city === currentCity);
});

// function createCity() {
//   const locationCity = document.createElement("div");
//   const deleteButton = document.createElement("button");

//   locationCity.className = "locations__city";
//   deleteButton.className = "button-close";
//   UI.IMAGE_HEART.classList.toggle("image-heart");

//   locationCity.textContent = NOW.UI.CITY.textContent;

//   deleteButton.insertAdjacentHTML(
//     "afterbegin",
//     '<img src="./assets/img/close-icon.svg" alt="close-icon">'
//   );
//   locationCity.append(deleteButton);
//   console.log(locationCity)

//   addCityToTheList(locationCity);
//   addCityStorage(locationCity);
// }

// function addCityToTheList(сity) {
//   const CityName = сity.innerText;
//   const arrayFavoriteList = Array.from(UI.LOCATION_LIST.children);
//   const foundCity = arrayFavoriteList.find((city) => city.innerText === CityName);

//    localStorage.setItem('FavoriteList', JSON.stringify(UI.FavoriteList))

//   (!foundCity) ? UI.LOCATION_LIST.prepend(сity) : foundCity.remove();

//   for (let city of UI.LOCATION_LIST.children) {
//     city.addEventListener('click', ()=> {
//       getWeather(city.textContent)
//     })

// }}

// function addCityStorage(city) {
//   const cityName = city.innerText;
//   StorageCityList.push(cityName)
//   localStorage.setItem('citis', JSON.stringify(StorageCityList))
// }
