// function showTemperature(response) {
//   console.log(response.data.main.temp);
//   let h1 = document.querySelector("h1");
//   h1.innerHTML = response.data.main.temp;
// }

// let apiKey = "28b89a027ca36429077890b9084e664e";

// let apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric";

// axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);



// function showPosition(position) {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
// }


// navigator.geolocation.getCurrentPosition(showPosition);




function showPosition(position) {
    let apiKey = "28b89a027ca36429077890b9084e664e";
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;    
    axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
    let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

navigator.geolocation.getCurrentPosition(showPosition);



