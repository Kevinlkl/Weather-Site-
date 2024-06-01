const key = "QNVZNJSQ9XK6B54CM8DQZFVM3"

const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${key}&unitGroup=us&locations=${location}`

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))