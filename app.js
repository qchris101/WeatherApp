
const form = document.querySelector("#location")

form.addEventListener("click", function(e){
    e.preventDefault()
    fetch("https://api.weatherapi.com/v1/current.json?key=a8e4f0b4ef48439180934250250102&q=London&aqi=no")
    .then(response => {
        if(!response.ok) {
            throw new Error (`HTTP error! Status: $response.status`)
        }
        return response.json()
    })
    .then (data => (data))
    .catch (error => console.error('Fetch error:', error))
    
})
