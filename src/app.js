function displayTempandCity(response){
  let temp = document.querySelector("#temp");
  temp.innerHTML = Math.round(response.data.main.temp);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
}

function getCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-Input");
  let apiKey = "7796ed76d4738ed90e39d5875eb78f75";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTempandCity);
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", getCity);