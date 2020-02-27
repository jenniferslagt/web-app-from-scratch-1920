# Single page app - The waves and the chance on sunburning
![Schermafbeelding 2020-02-07 om 10 26 08](https://user-images.githubusercontent.com/45489420/74017304-5186d600-4994-11ea-851a-c7d847b90a19.png)


## Description 
I made a single page app for surfers in which I used the Dark Sky API. This allows them to take a look at the current weather of their location. In this way, they can check the waves (based on the wind) and if it's necessary to project yourself against the sun. 

## Actor and Interactive Diagram
I made an actor and an interactive diagram to make a visual presentation of my application.

An Actor diagram is focused on (code)objects that can be seen as the actors of your code. Every actor handles a function. So your diagram is made of modules (like location) and the corresponding functions (like navigator.geolocation()).
![Schermafbeelding 2020-02-27 om 20 52 13](https://user-images.githubusercontent.com/45489420/75481311-209e2d80-59a3-11ea-927f-93072c1ef989.png)

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
* I also learned a few things that were actually not a part of my goals, but it was certainly very related and interesting to learn about:
  - How to interact with data in a array / object. I had some struggles with manipulating my data, because I needed a array to apply a filter/map/reduce. My big question was: How can I create a data structur which is easy to manipulate? Well, here is my answer: there are three methods for objects (with a specific syntax). Here are the methods: <br>
1. Object.keys(obj) – returns an array of keys.
2. Object.values(obj) – returns an array of values.
3. Object.entries(obj) – returns an array of [key, value] pairs.

  
  
  


You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns
You can retrieve data, manipulate it and dynamically convert it to html elements using templating
You understand how you can work with an external API using asynchronous code
You understand how you can manage state in your application and you inform the user of state where necessary


## Sources


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
