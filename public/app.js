



const form = document.querySelector("#location")

const input = document.querySelector("#input")

// input.addEventListener('input', () => {
//     console.log(input.value)
// })

form.addEventListener("submit", function(e){
    e.preventDefault()    
    const location = input.value
        try{
            const response =  fetch(`/weather?city=${location}`)
            const data = response.json()
            console.log(data.current.temp_f)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
})