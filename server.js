require("dotenv").config()
const express = require("express")
const cors =require("cors")
const app = express()
const PORT = 8000
app.use(cors())
// console.log("API Key:", apiKey)
app.get('/weather', async (req,res) => {
    const city = req.query.city 
    // console.log(req.query.city)
    const apiKey = process.env.WEATHER_API_KEY
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        res.json(data)
    }catch (error){
        res.status(500).json({ error: "Failed to fetch data."})
    }
})

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`))

  