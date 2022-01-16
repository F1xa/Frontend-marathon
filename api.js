
export const API = {
  NOW : "http://api.openweathermap.org/data/2.5/weather",
  FORECAST: "https://api.openweathermap.org/data/2.5/forecast",
  API_KEY : "07c965802dbd021a52da8f792cfe263d",
}

 export function createData(data) {
  this.temp = data.main.temp.toFixed(0);
  this.city = data.name;
  this.image = data.weather[0].icon;
  this.feels_like = data.main.feels_like.toFixed(0);
  this.weather = data.weather[0].main;
  this.sunrise = data.sys.sunrise;
  this.sunset = data.sys.sunset;
}

export function getWeather(cityName, callback) {
  const urlWeater = `${API.NOW}?q=${cityName}&appid=${API.API_KEY}&units=metric`;

  fetch(urlWeater)
    .then((response) => response.json())
    .then(callback)
    .catch(alert);
}