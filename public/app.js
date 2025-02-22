
const form = document.querySelector("#getWeather")
const input = document.querySelector("#location")
const showError = document.querySelector("#error_message")

function toggleVis(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block"; // Show element
    } else {
        element.style.display = "none"; // Hide element
    }
}

const weatherElements = {
    temp_f : document.querySelector("#temp_f"),
    location_name : document.querySelector("#location_name"),
    weather_text : document.querySelector("#weather_text"),
    feel_like : document.querySelector("#feel_like"),
    humid : document.querySelector("#humid"),
    precip : document.querySelector("#precip"),
    wind_mph : document.querySelector("#wind_mph"),
    img : document.querySelector("#temp_icon"),
}

const customWeatherImg = {
    "Partly cloudy": "./Images/Partly_cloudy.jpg",
    "Sunny": "./Images/Sunny.jpg",
    "Light snow": "./Images/Snow.jpg",
    "Rain": "./Images/Rain.jpg"
}

const weatherImg = (data) =>{
        const condition = data.current.condition.text
        return customWeatherImg[condition]
    } 


const fetchWeather = async (location) => {
    try{
        const response = await fetch(`http://localhost:8000/weather?city=${location}`)
        if(!response.ok) throw new Error("Failed to fetch Weather Data.")
            return await response.json()
    } catch(error){
        errorUI(error.message)
        return null
    }
}


const errorUI = (message) => {
    errorUI.innerText = message
    // errorUI.style.display = message ? "block" : "none"
}

const updateUI = (data) => {
    if(!data) return
    errorUI("")
    const {location, current } = data
    weatherElements.location_name.innerText = data.location.name + ", "+ data.location.region
    weatherElements.temp_f.innerText = data.current.temp_f + "°F"
    weatherElements.weather_text.innerText= data.current.condition.text
    weatherElements.feel_like.innerText= "Feels like: " + data.current.feelslike_f + "°F"
    weatherElements.humid.innerText= "Humidity: " + data.current.humidity
    weatherElements.precip.innerText= "Precipitation: " + data.current.precip_in
    weatherElements.wind_mph.innerText= "Current Wind Speed: " + data.current.wind_mph +"mph"
    const imgSrc = weatherImg(data)
    weatherElements.img.setAttribute('src', `${imgSrc}`)
}

form.addEventListener("click", async (e) =>{
    e.preventDefault()    
    const location = input.value
    if(!location) return errorUI
    const data = await fetchWeather(location)
    updateUI(data)    
        input.value = ""
        console.log(data.current.condition.text)
})
