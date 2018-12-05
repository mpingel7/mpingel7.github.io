function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
}

var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=4b16756ef2f79712167ad71f85a69a6f&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
    document.getElementById('currentHumidity').innerHTML = weatherInfo.main.humidity;


    var iconcode = townInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

} // end of function

