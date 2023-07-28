const apiKey = "34f8f861f9cff76b2f65566a818030f3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let searhBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
 

async function checkWeather(city){
    const response  = await fetch(apiUrl+ city+ `&appid=${apiKey}`);
    let data = await response.json();

   if (response.status = 404) {
        document.querySelector(".error").style.display ="block"
   }

  

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";;
    document.querySelector(".wind").innerHTML =data.wind.speed + "Km/hr";
 


   if (data.weather[0].main == "Clouds") {
     weatherIcon.src = "images/clouds.png";
   }
   else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  }
  else  if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } 
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } 
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
  else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  }
  document.querySelector(".weather").style.display = "block" ;
};

searhBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
