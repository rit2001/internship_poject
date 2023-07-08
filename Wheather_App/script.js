const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind_speed');


async  function  checkWeather(city)
{
    const api_key="6688af56c3e9fcdf84cdde0241610827";
    const url='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';

    const weather_data= await fetch('${url}').then(response=> response.Json());

    console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});


