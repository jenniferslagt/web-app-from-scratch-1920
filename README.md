# Single page app - The waves and the chance on sunburning
![Schermafbeelding 2020-02-07 om 10 26 08](https://user-images.githubusercontent.com/45489420/74017304-5186d600-4994-11ea-851a-c7d847b90a19.png)


## Description 
I made a single page app for surfers in which I used the Dark Sky API. This allows them to take a look at the current weather of their location. In this way, they can check the waves (based on the wind) and if it's necessary to project yourself against the sun. 

## Actor and Interactive Diagram
I made an actor and an interactive diagram to make a visual presentation of my application.

An Actor diagram is focused on (code)objects that can be seen as the actors of your code. Every actor handles a function. So your diagram is made of modules (like location) and the corresponding functions (like navigator.geolocation()).
![Schermafbeelding 2020-02-13 om 09 31 16](https://user-images.githubusercontent.com/45489420/74415442-a9658700-4e43-11ea-8181-8006316142e0.png)

An interactive diagram is about the user flow between the components on your application. What kind of actions happen in your app? And in what order?
![Schermafbeelding 2020-02-13 om 09 31 24](https://user-images.githubusercontent.com/45489420/74415444-a9fe1d80-4e43-11ea-8282-283827853697.png)

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
