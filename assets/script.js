let button= document.querySelector('.button');
let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let wind= document.querySelector('.wind');
let humidity = document.querySelector('.humidity')
let uv = document.querySelector('.uv');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=a0de227abc92faab1408fb9b7d1d15c2')
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
temp.innerHTML ="Tempature: "+tempVal+'&deg;';
humidity.innerHTML ="Humidity: "+humVal;
wind.innerHTML ="Wind Speed: "+windVal;
uv.innerHTML ="UV Index: "+uvVal+uviVal;
input.value ="";

console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal)
console.log(data);  
    
})


.catch(err => alert("Try Again"));
});


