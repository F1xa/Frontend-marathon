import { UI } from "./view.js";

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
      UI.TEMP_INDICATOR.textContent = city.main.temp.toFixed(0);
      UI.CITY.textContent = city.name;
    })
    .catch((err) => {
      UI.CITY.textContent = "";
      UI.TEMP_INDICATOR.textContent = 0;
      alert((err.massage = "Error: there is no such city"));
    });
}

function addCityList() {
  const locationCity = document.createElement("div");
  const deleteButton = document.createElement("button");
  const imageHeart = document.querySelector(".button-heart > img");

  locationCity.className = "locations__city";
  deleteButton.className = "button-close";
  imageHeart.classList.toggle("image-heart");

  locationCity.textContent = UI.CITY.textContent;

  deleteButton.insertAdjacentHTML(
    "afterbegin",
    '<img src="./assets/img/close-icon.svg" alt="close-icon">'
  );
  locationCity.append(deleteButton);
  
  getCityName(locationCity.innerText);
  
  //UI.locationList.prepend(locationCity);

}

function getCityName(CityName) {
  const arrayLocationList = Array.from(UI.locationList.children);
  const getCity = arrayLocationList.find((city) => city.innerText === CityName);
  console.log(locationCity)
  return (typeof getCity === 'undefined') ? UI.locationList.prepend(locationCity) : false;
  //this.arrayLocationList.remove()
}

UI.BUTTON_HEARTH.addEventListener("click", () => {
  addCityList();
  UI.BUTTON_HEARTH.addEventListener("click", () => {
    this.locationCity.remove();
  });
});

// function deleteCityList() {
//   UI.BUTTON_HEARTH.addEventListener('click', ()=> {
//     console.log(UI.locationcity)
//   })
// }
