const icon = document.querySelector("#weather img");
const weather = document.querySelector("#weather span:nth-child(2)");
const city = document.querySelector("#weather span:nth-child(3)");
const load = document.querySelector(".loading");

const API_KEY = "d198a05fa2e0bceae793040752e442d8";

function loading(text, load) {
  if (text === "") {
    load.classList.toggle("hidden");
  } else {
    load.classList.toggle("hidden");
  }
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description}`;
      loading(city.innerText, load);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
loading(city.innerText, load);
