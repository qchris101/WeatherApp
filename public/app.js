
const form = document.querySelector("#getWeather")

const input = document.querySelector("#location")

form.addEventListener("click", async (e) =>{
    e.preventDefault()    
    const location = input.value
        try{
            const response = await fetch(`http://localhost:8000/weather?city=${location}`)
            const data = await response.json()
            // console.log(data.location.name)
            // console.log(data.current.temp_f)
            // console.log(data.location.localtime)
            // console.log(data.current.condition.text)
            // const locationData = {
            //     "name": data.location.name,
            //     "localTime": data.location.localtime,
            //     "localTemp": data.current.temp_f
            // }
            console.log(data)
            // Object.entries(data.location).forEach((key,value) => {
            //     console.log(`${key}: ${value}`)
            // })

            const img = document.createElement('img')
            img.setAttribute('src', `https:${data.current.condition.icon}`)
            document.body.appendChild(img)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
})