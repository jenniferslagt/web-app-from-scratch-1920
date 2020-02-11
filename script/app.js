window.addEventListener("load", ()=> {
    let latitude;
    let longitude;

    let windSpeeds = document.querySelector(".windspeed");
    let windBearings = document.querySelector(".windbearing");
    let UvIndex = document.querySelector(".uv-index");
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");


    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const proxy = "https://cors-anywhere.herokuapp.com/";

        const api = `${proxy}https://api.darksky.net/forecast/21282b7046eefae6d54cf3fa0cf9d8bc/${latitude},${longitude}`; // first number is latitude and the second is longitude
       
        const getData = (api) => {
        fetch(api)
        .then(data => {
             return data.json();
        })
        
        .then(data => {
            console.log(data);
            const {temperature, summary, windSpeed, windBearing, uvIndex} = data.currently; // shortcut voor data.currently.temperature
        
        // Set DOM Elements from the API
        temperatureDegree.textContent = temperature; 
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        windSpeeds.textContent = windSpeed;
        windBearings.textContent = windBearing;
        UvIndex.textContent = uvIndex;

        obj.windSpeed = windSpeed
        });

        return getData();

    }
        })

    } else h1.textContent= "This is not working."
    

    routie({
        // '': function() {
        //   alert('root');
        // },
        'test1': function() {
        //   alert('popup 1 alert');
          windSpeeds.insertAdjacentHTML('beforeend', `<div>blabla</div>`)
        }
        // ,
        // 'test2': function() {
        //   alert('popup 2 alert');
        // }
      });
    

});


// request op localhost werkt niet, dus daarom gebruiken we proxy
// I used a part of this tutorial to load the data: http://darkskyapp.github.io/skycons/ (read my wiki for more info)