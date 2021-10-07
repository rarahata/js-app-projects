function displayCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-Input");
  let city = document.querySelector("#city");
  city.innerHTML =  cityInput.value;
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", displayCity);