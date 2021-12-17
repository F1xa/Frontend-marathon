const BUTTON_SEARCH = document.querySelector(".button");
const INPUT = document.querySelector(".input");
const TEMP_INDICATOR = document.querySelector(".current_temperature");
const CITY = document.querySelector(".city");



BUTTON_SEARCH.addEventListener("click", (e) => {
  e.preventDefault();

  getWeather(INPUT.value);
});



function getWeather(cityName) {
  const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
  const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
  const urlWeater = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

  const promiseWeater = fetch(urlWeater);

  
  CITY.textContent = INPUT.value;
  INPUT.value = "";

  promiseWeater
    .then((response) => response.json())
    .then((city) => {
      TEMP_INDICATOR.textContent = city.main.temp.toFixed(0);
    })
    .catch((err) => {
      CITY.textContent = '';
      TEMP_INDICATOR.textContent = 0;
      alert(err)
    });
}
