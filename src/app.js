function displayWeather(response){
  let temp = document.querySelector("#temp");
  temp.innerHTML = Math.round(response.data.main.temp);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let icon = document.querySelector("#weather-icon");
  icon.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
} 

function getCity(city){
  let apiKey = "7796ed76d4738ed90e39d5875eb78f75";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function searchCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-Input");
  getCity(cityInput.value);
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", searchCity);

getCity("London");