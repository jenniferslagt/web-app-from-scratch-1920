const allSections = document.querySelectorAll('section');

routie({
    // 'test1': function() {
    //     windSpeeds.insertAdjacentHTML('beforeend', `<div>blabla</div>`)
    // }
    // ,
    waves: () => {
        updateUI('choose-waves');
    },
    sun: () => {
        updateUI("choose-sunburning");
    }
});

function updateUI(route) {
    allSections.forEach(section => {
      section.classList.remove('active');
    });
    activeSection = document.querySelector(`[data-route=${route}]`);
    console.log(activeSection);
    activeSection.classList.add('active');
  }

let latitude;
let longitude;

// Making variables which select the DOM elements
let windSpeeds = document.querySelector(".windspeed");
let windBearings = document.querySelector(".windbearing");
let UvIndex = document.querySelector(".uv-index");
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        // The request doesn't work on the localhost. I added the proxy as a solution 
        const proxy = "https://cors-anywhere.herokuapp.com/";

        const api = `${proxy}https://api.darksky.net/forecast/21282b7046eefae6d54cf3fa0cf9d8bc/${latitude},${longitude}`; // first number is latitude and the second is longitude

        // const getData = (api) => {
        fetch(api)
            .then(data => {
                return data.json();
            })

            .then(data => {
                console.log(data);
                const {
                    temperature,
                    summary,
                    windSpeed,
                    windBearing,
                    uvIndex
                } = data.currently; // shortcut voor data.currently.temperature

                // Set DOM Elements from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                windSpeeds.textContent = windSpeed;
                windBearings.textContent = windBearing;
                UvIndex.textContent = uvIndex;
             });

        // return getData();

        // }
    })

}


// I used a part of this tutorial to load the data: http://darkskyapp.github.io/skycons/ (read my wiki for more info)