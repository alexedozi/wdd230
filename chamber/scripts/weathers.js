// Function to display the three-day forecast
function displayForecast(forecastData) {
    const forecastList = forecastData.list;
    const forecastContainer = document.getElementById('forecast-container'); // Get the forecast container by ID

    // Assuming the forecast provides data for the next 3 days in 3-hour increments
    // You can adjust this logic based on your specific needs
    const threeDayForecast = forecastList.slice(0, 8); // 8 entries for the next 24 hours

    for (const forecast of threeDayForecast) {
        const forecastTime = new Date(forecast.dt * 1000); // Convert timestamp to Date object
        const forecastTemp = forecast.main.temp;
        const forecastDescription = forecast.weather[0].description;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `<strong>${forecastTime.toLocaleTimeString()}</strong>: ${forecastTemp}&deg;F, ${forecastDescription}`;

        forecastContainer.appendChild(forecastItem);
    }
}
// Select HTML elements in the document
const currentTemp = document.getElementById('current-temp');
const weatherCondition = document.getElementById('weather-condition');
const weatherIcon = document.getElementById('weather-icon');

const latitude = -26.0167; // Latitude of Johannesburg, South Africa
const longitude = 28.1274; // Longitude of Johannesburg, South Africa
const apiKey = 'e5ebe8a0797e67b19f0e019049a15861'; // Replace with your actual API key
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Call the displayResults function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to display weather data in HTML
function displayResults(data) {
    currentTemp.textContent = `${data.main.temp}°F`;
    weatherCondition.textContent = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute('src', iconUrl);
}

apiFetch(); // Call the API fetch function
