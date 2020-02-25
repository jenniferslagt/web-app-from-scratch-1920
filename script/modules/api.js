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