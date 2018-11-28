var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=84057,us&appid=4b16756ef2f79712167ad71f85a69a6f&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;

    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

} // end of function

var townObject = new XMLHttpRequest();
townObject.open('GET','//byui-cit230.github.io/weather/data/towndata.json',true);

townObject.send();

townObject.onload = function() {
    var townInfo = JSON.parse(townObject.responseText);
    console.log(townInfo);

    document.getElementById('city').innerhtml = towns.name.preston;


    document.getElementById('currentTemp').innerHTML = townInfo.main.temp;
    document.getElementById('currentWind').innerHTML = townInfo.wind.speed;

    var iconcode = townInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

} // end of function
