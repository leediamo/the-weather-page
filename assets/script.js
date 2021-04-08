let button= document.querySelector('.button');
let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let wind= document.querySelector('.wind');
let humidity = document.querySelector('.humidity')
let uv = document.querySelector('.uv');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=1c470dd7875eca98609861a853e532a6')
.then(response => response.json())
.then(data => {
    
let nameVal =data['name'];
let tempVal =data['main']['temp'];
let humVal =data['main']['humidity'];
let windVal =data['wind']['speed'];
let uvVal =data['coord']['lat']
let uviVal =data['coord']['lon']
//let celcius = Math.round(parseFloat(name.main.temp)-273.15);
//let fahrenheit = Math.round(((parseFloat(name.main.temp)-273.15)*1.8)+32);

main.innerHTML =nameVal;
temp.innerHTML ="Tempature: "+tempVal+ 'F'+'&deg;';
humidity.innerHTML ="Humidity: "+humVal+'%"';
wind.innerHTML ="Wind Speed: "+windVal+'MPH';
uv.innerHTML ="UV Index: "+uvVal+uviVal;
input.value ="";

console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal)
console.log(data);     
})

.catch(err => alert("Try Again"));
});


const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0]

button.addEventListener('click',function getWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&cnt=5&units=imperial&appid=e625f24b32e08b4026e29e46f076673d') 
    .then(response => response.json())
    .then(data => {
    console.log(data)
});
getWeatherData().then(data => {
  let city = data.city.name;
  let dailyForecast = data.list;
  
    renderData(city, dailyForecast);
  });
  renderData = (location, forecast) => {
    const currentWeather = forecast[0].weather[0];
    const widgetHeader =
    `<h1>${location}</h1><small>${currentWeather.description}</small>`;
  
    CURRENT_TEMP.innerHTML =
    `<i class="wi ${applyIcon(currentWeather.icon)}"></i>
    ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;
  
    CURRENT_LOCATION.innerHTML = widgetHeader;
  
    // render each daily forecast
    forecast.forEach(day => {
      let date = new Date(day.dt * 1000);
      let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      let name = days[date.getDay()];
      let dayBlock = document.createElement("div");
      dayBlock.className = 'forecast__item';
      dayBlock.innerHTML =
        `<div class="forecast-item__heading">${name}</div>
        <div class="forecast-item__info">
        <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
        <span class="degrees">${Math.round(day.temp.day)}
        <i class="wi wi-degrees"></i></span></div>`;
      FORECAST.appendChild(dayBlock);
    });
  }
});

