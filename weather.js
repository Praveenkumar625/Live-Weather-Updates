const apiKey = "e324a4a87b9bfe4a3ed42f24d6b842fe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button ");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );

    if (response.status === 400 || response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

    var data = await response.json();   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/New folder/img/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/New folder/img/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/New folder/img/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/New folder/img/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/New folder/img/images/mist.png";
    }

    }
}

searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
})


document.addEventListener("DOMContentLoaded", function () {
    var iconbg = document.querySelector('.iconbg');
    var icons = document.querySelectorAll('.iconbg img');

    icons.forEach(function (icon) {
      var randomX = Math.floor(Math.random() * 70);
      var randomY = Math.floor(Math.random() * 85);

      icon.style.top = randomY + '%';
      icon.style.left = randomX + '%';
    });
});
