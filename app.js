const express = require("express")
const app = express()

app.listen(3000, () =>{
    console.log("Listening on Port 3000")
})


// require('dotenv').config()

// const form = document.querySelector("#location")
// // const apiKey = process.env.API_KEY
// const input = document.querySelector("#input")

// input.addEventListener('input', () => {
//     console.log(input.value)
// })

// form.addEventListener("click", function(e){
//     e.preventDefault()    
//     async function weatherDataTest () {
//         try{
//             const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`)
//             const data = await response.json()
//             let location = data.location.name
//             let localTime = data.location.localtime
//             let localTemp = data.current.temp_f

//             console.log(location,localTime,localTemp)
//         } catch (error) {
//             console.error("Error fetching data:", error)
//         }
//     }
//     weatherDataTest()
// })