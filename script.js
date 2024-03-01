let weather = {
    "apikey": "4fe253a26a70341e62928d5760ef5d76",
    fetchweather: function (city) {
        fetch ( 
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=metric&appid=" 
             + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        const { name } = data;
        const {   icon, description  } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name.icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/"+ icon + "@2x.png"
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp +  "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "km/h";

    } ,
    search: function () {
        this.fetchweather(document.querySelector(".search-input").value);
    }
};

document
.querySelector(".search button")
.addEventListener("click" , function () {
    weather.search();


});