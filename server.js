require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 8000

app.get('/weather', async (req,res) => {
    const city = req.query.city 
    const apiKey = process.env.WEATHER_API_KEY
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`

    try {
        const response = await fetch(url)
        const data = await response.json()
        res.json(data)
    }catch (error){
        res.status(500).json({ error: "Failed to fetch data."})
    }
})

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`))

  