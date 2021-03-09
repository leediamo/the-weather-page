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


let currLocation = document.querySelector('.weather-content__overview');
let currTemp = document.querySelector('.weather-content__temp');
let forecast = document.querySelector('.component__forecast-box');

button.addEventListener('click',function getWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&cnt=5&units=imperial&appid=e625f24b32e08b4026e29e46f076673d') 
    .then(response => response.json())
    .then(data => {
    console.log(data)
  });
});
