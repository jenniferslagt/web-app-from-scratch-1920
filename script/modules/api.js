import {
    locations
} from "./locations.js"

export function getData(positionLocations) {
    console.log("jonhuh werk", positionLocations)

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/21282b7046eefae6d54cf3fa0cf9d8bc/${location.lat},${location.long}`; // first number is latitude and the second is longitude
    // console.log('api: ', api)
    return new Promise((resolve, reject) => {

        fetch(api)
            .then(data => {
                return data.json();
            })
            .then(data => {
                document.getElementById("loading").style.display = "none";

                resolve(data);
                console.log("de darksky data", data);

            })
            .catch(err => reject(err));
    })
}