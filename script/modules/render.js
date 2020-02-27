export function renderData(data) {
    // Making variables which select the DOM elements
    const windSpeeds = document.querySelector(".windspeed");
    const windBearings = document.querySelector(".windbearing");
    const UvIndex = document.querySelector(".uv-index");
    const temperatureDescription = document.querySelector(".temperature-description");
    const temperatureDegree = document.querySelector(".temperature-degree");
    const locationTimezone = document.querySelector(".location-timezone");

    const {
        temperature,
        summary,
        windSpeed,
        windBearing,
        uvIndex
    } = data.currently; // shortcut for data.currently.temperature

    // Set DOM Elements from the API
    temperatureDegree.textContent = temperature;
    temperatureDescription.textContent = summary;
    locationTimezone.textContent = data.timezone;
    windSpeeds.textContent = windSpeed;
    windBearings.textContent = windBearing;
    UvIndex.textContent = uvIndex;
}