var temp= 76;
var wind = 5;
var speed = Math.pow(wind, 0.16);
var chill = f = 35.74 + (0.6215 * temp) - 35.75 (speed * 0.16) + 0.4275 * temp * speed * 0.16  

chill = Math.round(chill) + " °F";

document.getElementById('windchill').innerHTML = chill;