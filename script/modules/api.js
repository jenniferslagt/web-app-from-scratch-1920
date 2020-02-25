import {location} from "./helpers.js"

export function getData(location){
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/21282b7046eefae6d54cf3fa0cf9d8bc/${location.lat},${location.long}`; // first number is latitude and the second is longitude

    
    return new Promise((resolve,reject)=>{
        fetch(api)
            .then(data => {
                return data.json();
            })
            .then(data => {
                resolve(data);
                console.log(data)
            })
            .catch(err=>reject(err));
    })
}



// // Making variables which select the DOM elements
// const windSpeeds = document.querySelector(".windspeed");
// const windBearings = document.querySelector(".windbearing");
// const UvIndex = document.querySelector(".uv-index");
// const temperatureDescription = document.querySelector(".temperature-description");
// const temperatureDegree = document.querySelector(".temperature-degree");
// const locationTimezone = document.querySelector(".location-timezone");


// const {
//     temperature,
//     summary,
//     windSpeed,
//     windBearing,
//     uvIndex
// } = data.currently; // shortcut for data.currently.temperature



// // Set DOM Elements from the API
// export function setElements() {
//     console.log('render.js')

//     temperatureDegree.textContent = temperature;
//     temperatureDescription.textContent = summary;
//     locationTimezone.textContent = data.timezone;
//     windSpeeds.textContent = windSpeed;
//     windBearings.textContent = windBearing;
//     UvIndex.textContent = uvIndex;
// };
