const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = "e918ea3f2c8634510680b63680705816";

function getWeather(lat,long){
fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })


}


function saveCoords(coordsobj){
localStorage.setItem(COORDS,JSON.stringify(coordsobj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude:latitude,
        longitude:longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}


function loadCoords(){
const loadedCoords = localStorage.getItem(COORDS);
if(loadedCoords === null){
askForCoords();
}
else{
const parseCoords = JSON.parse(loadedCoords);
console.log(parseCoords);
getWeather(parseCoords.latitude,parseCoords.longitude);

}

}


function init(){
loadCoords();

}
init();