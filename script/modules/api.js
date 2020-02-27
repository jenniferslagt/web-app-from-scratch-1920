import {
    location
} from "./location.js"

// Making a function which retrieves the data from the Dark Sky API
export function getData(location) {
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
                console.log(data.daily.data);

                const selectToday = Object.entries(data.daily.data[0]); // Object.entries returns an array of [key, value] pairs.

                // -----------------------  Using .filter() -----------------------
                // Filter takes the array and returns a new array (returns true to keep the element).
                const selectTemperatureMin = selectToday[31];
                const selectTemperatureMax = selectToday[33];
                const tempMinAndMax = selectTemperatureMin.concat(selectTemperatureMax); // .concat() method is used to join two or more arrays.
                // console.log("The min and max temperature:", tempMinAndMax);
                const selectTemperatureNumbers = tempMinAndMax.filter(function(element) {
                    return element > 0; // returns a number that's greater than 0 
                })
                console.log("Numbers of the temperatures:", selectTemperatureNumbers)


                // -----------------------  Using .reduce()-----------------------
                // Reduce loops over an array and let's you "collect" items into something else.
                const total = selectTemperatureNumbers.reduce(function(accumulator, element) {
                    return accumulator + element;
                });
                // console.log("The min and max temperature together:", total)
                const averageTemperature = total / 2;
                console.log("Average temperature:", averageTemperature)


                // -----------------------  Using .map() -----------------------
                // Map loops over an array, and returns a new element for each spot in the array (like a transform function).
                const selectSummary = selectToday[1];
                // console.log(selectSummary);
                const countLetters = selectSummary.map(function(element) {
                    return element.length;
                })
                console.log("Total letters:", countLetters);
            })
            .catch(err => reject(err));
    })
}