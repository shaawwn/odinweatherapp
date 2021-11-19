import './style.css';
import { getWeatherData, formatData } from './weather.js';
import { convertUTC } from './functions.js';
import Dawn from './images/dawn1.jpeg';
import Day from './images/day1.jpeg';
import Dusk from './images/dusk2.jpeg';
import Night from './images/nightsnow.jpeg';
import Rain from './images/rain1.jpeg';



console.log("Running index scripts...install style loaders...installing assets")
const weatherContainer = document.createElement('div');
weatherContainer.classList.add('weather-container');

function addWeatherDiv() {
    // Add the main weather container and populate it with
    // weather data
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('container-main');
    return weatherContainer;
}

function changeBackground(data) {
    // Change the background based on the time of data
    const localTime = convertUTC((data.dt + data.timezone) * 1000)
    const sunrise = convertUTC(data.sunrise * 1000)
    const sunset = convertUTC(data.sunset * 1000)

    // Check Dusk -> Night, and Dawn -> Day
    if(localTime > sunset && localTime < addTimes(sunset, 1)) {
        // Dusk
        document.body.style.backgroundImage = `url(${Dusk})`
    } else if(localTime > addTimes(sunset, 1)) {
        // Night
        document.body.style.backgroundImage = `url(${Night})`
    } else if(localTime > sunrise && localTime < addTimes(sunrise, 1)) {
        // Dawn
        document.body.style.backgroundImage = `url(${Dawn})`
    } else if(localTime > sunrise) {
        // Day
        document.body.style.backgroundImage = `url(${Day})`
    }
}
function addLocationForm() {
    const testForm = document.createElement('div');

    const locationInput = document.createElement('input');
    const submitBtn = document.createElement('button');
    locationInput.placeholder = 'Enter location';
    testForm.classList.add('search-form');
    submitBtn.innerText = 'Search';
    testForm.appendChild(locationInput);
    testForm.appendChild(submitBtn);

    submitBtn.addEventListener('click', () => {
        const weatherData = getWeatherData(locationInput.value, 'imperial') // Seattle is jsut a testing placeholder
        weatherData.then(response => response.json())
        .then(data => 
            document.body.appendChild(addWeatherDataToPage(formatData(data))));
    })
    document.body.appendChild(testForm);
}

function addWeatherDataToPage(data) {
    // Use the formatted weather data from the api, create and populate
    // elements
    changeBackground(data);
    if(weatherContainer.innerHTML != '') {
        weatherContainer.innerHTML = '';
    }
    const highLow = document.createElement('div');
    const cityState = document.createElement('p');
    const localTime = document.createElement('p');
    const currentTemp = document.createElement('p');
    const feelsLike = document.createElement('p');
    const currentWeather = document.createElement('img') // The 'current weather' iamge, like cloudy, etc
    const sunriseSunset = document.createElement('div');
    const wind = document.createElement('p');

    currentTemp.classList.add('current-temp');

    highLow.innerText = `High: ${data.main.temp_max.toFixed(0)}° Low: ${data.main.temp_min.toFixed(0)}°`;
    cityState.innerText = `${data.name}, ${data.country}`;
    localTime.innerText = `Local time ${changeTimeFormat(convertUTC((data.dt + data.timezone) * 1000))}`
    currentTemp.innerText = `${data.main.temp.toFixed(0)}°`;
    feelsLike.innerText = `Feels like: ${data.main.feels_like.toFixed(0)}°`
    // currentWeather
    sunriseSunset.innerText = `Sunrise: ${changeTimeFormat(convertUTC(data.sunrise * 1000))} Sunset: ${changeTimeFormat(convertUTC(data.sunset * 1000))}`;
    wind.innerText = `Current Wind Speed: ${data.wind['speed']} Direction: ${data.wind['deg']} Gusts: ${data.wind['gust']}`;
    console.log("Adding data", data)

    weatherContainer.appendChild(highLow)
    weatherContainer.appendChild(cityState)
    weatherContainer.appendChild(localTime);
    weatherContainer.appendChild(currentTemp)
    weatherContainer.appendChild(feelsLike)
    weatherContainer.appendChild(sunriseSunset)
    weatherContainer.appendChild(wind)

    return weatherContainer;
}

// combine two string dates together 
function addTimes(toChange, increment) {
    // add times together so they don't just concatonate strings
    // ex. 11:30pm + 2 hours = 1:30am
    // Always gonna increment the 'ones' number
    toChange = toChange.split("")
    let changeInt = parseInt(toChange.slice(1, 2))
    increment = parseInt(increment)
    toChange.splice(1, 1, (changeInt + increment))
    return toChange.join("")
}


// if(changeTimeFormat('23:00') === '11:00') {
//     console.log("23 => 11")
// } else {
//     throw new Error("23:00 did not become 11:00")
// }

// if(changeTimeFormat('03:00') === '03:00') {
//     console.log("3:00 remains unchange")
// } else {
//     throw new Error("Uneeded conversion of pre-12 time")
// }


// toggle between 24 and 12 hours times
function changeTimeFormat(timeToConvert) {
    // convert a time string in 24 hour format into 12 hour format
    if(timeToConvert.slice(0,2) >= 12) {
        // Subtract 12
        let adjustedTime = timeToConvert.slice(0,2) - 12
        timeToConvert = timeToConvert.split("")
        timeToConvert.splice(0, 2, adjustedTime.toString())
        return timeToConvert.join("")
    } else {
        // do nothing
        return timeToConvert
    }
}   


// console.log(addTimes("11:30", "2"))
// Testing
function testComponent() {
    let testbanner = document.createElement('div');
    testbanner.classList.add('test');

    document.body.appendChild(testbanner);
}

addLocationForm();
// testComponent()