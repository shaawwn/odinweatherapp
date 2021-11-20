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
    } else if(localTime > addTimes(sunset, 1) || localTime < sunrise) {
        // Night
        document.body.style.backgroundImage = `url(${Night})`
    } else if(localTime > sunrise && localTime < addTimes(sunrise, 1)) {
        // Dawn
        document.body.style.backgroundImage = `url(${Dawn})`
    } else if(localTime > sunrise) {
        // Day
        document.body.style.backgroundImage = `url(${Day})`
    } else {
        console.log("No conditions being met to change background.", sunrise, sunset, localTime)
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
    // toCapitolize(data.description)
    const fahCel = 'F';
    if(weatherContainer.innerHTML != '') {
        weatherContainer.innerHTML = '';
    }
    const highLow = document.createElement('div');
    const cityState = document.createElement('p');
    const localTime = document.createElement('p');

    const tempDiv = document.createElement('div');
    const tempDetails = document.createElement('div');
    const currentTemp = document.createElement('p');
    const feelsLike = document.createElement('p');

    const currentWeatherDiv = document.createElement('div');
    const currentWeatherIcon = document.createElement('img') // The 'current weather' iamge, like cloudy, etc
    const currentDescription = document.createElement('p');

    const sunriseSunset = document.createElement('div');
    const wind = document.createElement('p');

    cityState.classList.add('city-state');
    tempDiv.classList.add('temp-container');
    tempDetails.classList.add('temp-details');
    currentWeatherDiv.classList.add('current-weather-container');
    currentTemp.classList.add('current-temp');
    currentWeatherIcon.classList.add('current-weather');
    sunriseSunset.classList.add('sunrise-sunset');
    tempDiv.appendChild(currentTemp);
    tempDiv.appendChild(tempDetails);
    tempDetails.appendChild(highLow);
    tempDetails.appendChild(feelsLike);
    currentWeatherDiv.appendChild(currentDescription);
    currentWeatherDiv.appendChild(currentWeatherIcon);
    
    highLow.innerText = `H: ${data.main.temp_max.toFixed(0)}° L: ${data.main.temp_min.toFixed(0)}°`;
    cityState.innerText = `${data.name}, ${data.country}`;
    localTime.innerText = `${changeTimeFormat(convertUTC((data.dt + data.timezone) * 1000))}`
    currentTemp.innerText = `${data.main.temp.toFixed(0)}°`;
    feelsLike.innerText = `Feels like: ${data.main.feels_like.toFixed(0)}°`
    currentWeatherIcon.src = `http://openweathermap.org/img/wn/${data.icon}@4x.png` // file = 12d.png @4x is the size of the icon
    currentDescription.innerText = toCapitolize(data.description)
    sunriseSunset.innerText = `Sunrise: ${changeTimeFormat(convertUTC(data.sunrise * 1000))} Sunset: ${changeTimeFormat(convertUTC(data.sunset * 1000))}`;
    wind.innerText = `Current Wind Speed: ${data.wind['speed']} Direction: ${data.wind['deg']} Gusts: ${data.wind['gust']}`;
    console.log("Adding data", data)

    weatherContainer.appendChild(cityState)
    weatherContainer.appendChild(localTime);
    weatherContainer.appendChild(tempDiv)
    weatherContainer.appendChild(currentWeatherDiv);
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

// toggle between 24 and 12 hours times
function changeTimeFormat(timeToConvert) {
    // convert a time string in 24 hour format into 12 hour format
    if(timeToConvert.slice(0,2) >= 12) {
        // Subtract 12
        let adjustedTime = timeToConvert.slice(0,2) - 12
        timeToConvert = timeToConvert.split("")
        timeToConvert.splice(0, 2, adjustedTime.toString())
        timeToConvert.push('pm');
        return timeToConvert.join("")
    } else {
        // remove leading 0
        timeToConvert = timeToConvert.split("");
        timeToConvert.splice(0, 1, '');
        timeToConvert.push('am');
        return timeToConvert.join("")
    }
}   

function toCapitolize(string) {
    // Capitolize the first letter in each word of a string
    string = string.split(" ")

    for (let i = 0; i < string.length;i++) {
        // console.log(string[i].slice(0,1).toUpperCase())
        string[i] = string[i].slice(0, 1).toUpperCase() + string[i].slice(1);
    }
    return string.join(" ") 
    // console.log("in funciton", string);
}

addLocationForm();
