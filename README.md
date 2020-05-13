# Single page app - Check the weather of the best surf spots in Europe!
![Schermafbeelding 2020-05-13 om 12 53 12](https://user-images.githubusercontent.com/45489420/81804077-dbf14f80-9518-11ea-9fa1-27f6bd8ecf01.png)[Visit the website here!](https://jenniferslagt.github.io/web-app-from-scratch-1920/)

## Description 
I made a single page app for surfers in which I used the Dark Sky API. This allows them to take a look at the current weather of their location. In this way, they can check the waves (based on the wind) and if it's necessary to project theirselves against the sun. 

## Actor and Interactive Diagram
I made an actor and an interactive diagram to make a visual presentation of my application.

An Actor diagram is focused on (code)objects that can be seen as the actors of your code. Every actor handles a function. So your diagram is made of modules (like location) and the corresponding functions (like location()).
![Schermafbeelding 2020-02-27 om 21 35 10](https://user-images.githubusercontent.com/45489420/75484461-2139c280-59a9-11ea-90df-5aeb87f76c99.png)


An interactive diagram is about the user flow between the components on your application. What kind of actions happen in your app? And in what order?
![Schermafbeelding 2020-02-27 om 20 52 21](https://user-images.githubusercontent.com/45489420/75481316-23008780-59a3-11ea-8a5f-a13f7bec3b0a.png)


## What is "Dark Sky API"?

What is an API? 
Application programming interfaces (APIs) helps to make data available for extern users. In this way, you can request data to use it in different applications (like my page).  

The Dark Sky API allows you to look up the weather anywhere on the globe, returning (where available):

* Current weather conditions (This is what I use).
* Minute-by-minute forecasts out to one hour.
* Hour-by-hour and day-by-day forecasts out to seven days.
* Hour-by-hour and day-by-day observations going back decades.
* Severe weather alerts in the US, Canada, European Union member nations, and Israel.


## Used data
I request the next data (from the Dark Sky API) to make this possible:

* Windspeed: The wind speed in miles per hour.
* Wind bearing: The direction that the wind is coming from in degrees, with true north at 0° and progressing clockwise. (If windSpeed is zero, then this value will not be defined.)
* Temperature: The temperature in degree Celsius or Fahrenheit.
* UV-index: how big is the risk on sunburning?

## How to fetch data from the Dark Sky API?
I wrote the function `getData(location)` to fetch the data. In this function I gave "location" which determines the current location of the user. This is neccessary because the data is based on the location.
This is how I fetched the data: 
```
import {
    location
} from "./location.js"

export function getData(location) {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/21282b7046eefae6d54cf3fa0cf9d8bc/${location.lat},${location.long}`; 
    // console.log('api: ', api)
    return new Promise((resolve, reject) => {
        fetch(api)
            .then(data => {
                return data.json();
            })
            .then(data => {
                resolve(data);
                // console.log(data)
                })
            .catch(err => reject(err));
    })
}
```
When the data is fetched, it gets converted and return as a JSON data type to make it readable. 

## The difference between a promise and a new promise
As you'll see, I fetched the data from the API by returning a new promise. What is a new promise?

Let start with a "normal" promise. A promise is actually an object which represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. The asynchronous operation is about the part where you want to fetch data from the api and the resultating value is the data. Instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

But what about new promises? `new Promise` is actually a syntax of promise. When called via new, the Promise constructor (`Promise()`) returns a promise object. The promise object will become "resolved" when either of the functions resolutionFunc or rejectionFunc are invoked. Note that if you call resolutionFunc or rejectionFunc and pass another Promise object as an argument, you can say that it is "resolved", but still cannot be said to be "settled".
 
## My learning goals
I've learned a lot in past few weeks. I also have written a lot in my wiki about my learned subject. I've learned: 
* How to work with an external API (Dark Sky).
* How to retrieve data and to manipulate it with filter, map and reduce.
* How to render data on my HTML page.
* How to make a actor and a interactive diagram.
* What a promise is and how it works.
* How to add routes from a micro library by cloning a routie.js file from github.
* How to add structure to my code by applying modules based on the actor diagram.
* How to manage a loading state in my application to inform that the user needs to wait for the data.
<br>

* I also learned a few things that were actually not a part of my goals, but it was certainly very related and interesting to learn about:<br>

-How to interact with data in an array / object. I had some struggles with manipulating my data, because I needed an array to apply a filter/map/reduce. My big question was: How can I create a data structure which is easy to manipulate? Well, here is my answer: there are three methods for objects (with a specific syntax). Here are the methods: <br>
1. Object.keys(obj) – returns an array of keys.<br>
2. Object.values(obj) – returns an array of values. <br>
3. Object.entries(obj) – returns an array of [key, value] pairs.<br>
<br>
- I also learned more about github itself. For example, I added a project in which I made my planning. 
<br> 
<br>
<b><i>You can go to my wiki to read more about my learning goals.</i></b> [Visit wiki.](https://github.com/jenniferslagt/web-app-from-scratch-1920/wiki)
 
## Sources
* [Dark Sky API](https://darksky.net/dev) <br>
<br>
<b><i>You can go to my wiki to find the sources per topic.</i></b>

## What if I had more time?
Well, if I had more time, this will be my "wishlist":
* I am very curious about local storage. So will definitely take a look at this.
* I would like to discover more micro libraries. What kind of micro libraries are there?
* I would like to add a kind of state when someone rejects to give his current location. Maybe an error state can be interesting for this.
* I will add more CSS to my page so there is a better user experience.

## Credits
I would like to thank the teachers, the extra "help students", the visitors and my fellow students for helping me to accomplish my learning goals. 
