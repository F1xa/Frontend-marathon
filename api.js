
export const API = {
  SERVER_URL : "http://api.openweathermap.org/data/2.5/weather",
  API_KEY : "f660a2fb1e4bad108d6160b7f58c555f",
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
  const urlWeater = `${API.SERVER_URL}?q=${cityName}&appid=${API.API_KEY}&units=metric`;

  fetch(urlWeater)
    .then((response) => response.json())
    .then(callback)
    .catch(alert);
}