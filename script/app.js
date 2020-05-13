// Importing the functions / variables from the modules
import {
    allSections,
    myRouter,
    updateUI
} from './modules/router.js'
import {
    getData
} from './modules/api.js'
import {
    renderData
} from './modules/render.js'
import {
    locations
}
from './modules/locations.js'
import {
    weatherData
}
from './modules/weatherData.js'

// Making my app to work and adding a loading state before rendering the data
async function app() {
    document.getElementById("loading").style.display = "block";
    // const data = await getData(await location())
    // renderData(data);
}
app()

// Add an overview page
locations.map(location => {
    const list = document.querySelector(".list")
    console.log(list);
    list.insertAdjacentHTML('beforeend', `
    <article> 
    <a href="#details${location.id}">Check ${location.timezone} </a>
    <img src="${location.image}">
</article>  `)
})


// .filter() takes the array and returns a new array (returns true to keep the element).
const selectToday = Object.entries(weatherData[0].daily.data[0]); // Object.entries returns an array of [key, value] pairs.
const selectTemperatureMin = selectToday[31];
const selectTemperatureMax = selectToday[33];
const tempMinAndMax = selectTemperatureMin.concat(selectTemperatureMax); // .concat() method is used to join two or more arrays.

const selectTemperatureNumbers = tempMinAndMax.filter(element => {
    return element > 0; // returns a number that's greater than 0 
})
console.log("Numbers of the temperatures:", selectTemperatureNumbers)


//  .reduce() loops over an array and let 's you "collect" items into something else.
const total = selectTemperatureNumbers.reduce((accumulator, element) => {
    return accumulator + element;
});
const averageTemperature = total / 2;
console.log("Average temperature:", averageTemperature)

// Add detail sections
// .map() loops over an array, and returns a new element for each spot in the array (like a transform function).
locations.map(location => {
    const detailContainer = document.querySelector(".content")
    console.log(detailContainer);
    console.log("data", weatherData);
    detailContainer.insertAdjacentHTML('beforeend', `

    <section detail-page class="location-${location.id}" data-route="detail${location.id}" > 
     <h1> ${location.timezone}</h1>
     <ul>
         <li> ${weatherData[0].currently.summary} </li> 
        <li>${Math.round((weatherData[0].currently.temperature - 32) * (5/9)) + "°C"} </li> 
        <li>${Math.round((selectTemperatureMin[1] - 32) * (5/9)) + "°C"}
        /${Math.round((selectTemperatureMax[1] - 32) * (5/9)) + "°C"}  </li> 
    </ul>

    <ul class='extra-weather-info'>  
        <li>🌡️ Average temperature:${Math.round((averageTemperature - 32) * (5/9)) + "°C"}  </li> 
        <li>🌬️ Windspeed: ${weatherData[0].currently.windSpeed} meters per second </li> 
        <li>🌞 UV-index: ${weatherData[0].currently.uvIndex} </li> 
        <li>🌫️ Humidity: ${weatherData[0].currently.humidity} on scale 0-1 </li>  
        <li>⛅ Cloud cover: ${weatherData[0].currently.cloudCover} on scale 0-1 </li>  
    </ul>

    <h2>Weather for today: </h2>
    <p>
    ${weatherData[0].minutely.summary}
    ${weatherData[0].hourly.summary} 
    </p>
     <img src="${location.image}">


</section>
    `)

})