//  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

 const weatherApi={
    key: "0cbd462e2fba5e1aabaf46c60df26738",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
 }

 const searchInputBox=document.getElementById('input-box');
 searchInputBox.addEventListener('keypress', (event) =>{
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display="block";
    }
 })

 function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(weather => {
        return weather.json();
    }).then(showMetheReport);
 }

 function showMetheReport(weather){
   console.log(weather);
   let city=document.getElementById('city');
   city.innerText=`${weather.name}, ${weather.sys.country}`;

   let temp=document.getElementById('temp');
   temp.innerText=`${Math.round(weather.main.temp)}°C`;

   let minmax=document.getElementById('min-max');
   minmax.innerText=`${Math.floor(weather.main.temp_min)}°C / ${Math.ceil(weather.main.temp_max)}°C`

   let weathertype=document.getElementById('weather-type');
   weathertype.innerText=`${weather.weather[0].main}`;

   let date=document.getElementById('date');
   let todayDate=new Date();
   date.innerText=setDate(todayDate);

   if(weathertype.textContent=='Clear'){
      document.body.style.backgroundImage = "url('images/clear.jpg')";  
   } else if(weathertype.textContent=='Clouds'){
      document.body.style.backgroundImage = "url('images/clouds.jpg')";  
   } else if(weathertype.textContent=='Drizzle'){
      document.body.style.backgroundImage = "url('images/drizzle.jpg')";  
   } else if(weathertype.textContent=='Haze'){
      document.body.style.backgroundImage = "url('images/haze.jpg')";  
   } else if(weathertype.textContent=='Rain'){
      document.body.style.backgroundImage = "url('images/rain.jpg')";  
   } else if(weathertype.textContent=='Snow'){
      document.body.style.backgroundImage = "url('images/snow.jpg')";  
   } else if(weathertype.textContent=='Thunderstorm'){
      document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";  
   }
 }

 function setDate(today){
   let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let months=["January", "February", "March", "April", "May","June", "July","August", "September", "October", "November","December"];

   let year=today.getFullYear();
   let month=months[today.getMonth()];
   let date=today.getDate();
   let day=days[today.getDay()];

   return `${date} ${month} (${day}), ${year}`;

 }