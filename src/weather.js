
console.log("Loading weather API functions")

function getWeatherData(location, unitOfMeasure) {
    // Return the promise form the open weather api call
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unitOfMeasure}&APPID=722fa4f411061b4d1c67abdb35712816`)
}

function formatData(data) {

    // let windData = getWindData(data.wind);
    // console.log("WIND DATA", formatwindData, data.wind);
    const weatherData = {
        "description": data.weather[0].description,
        "main": data.main,
        "wind": getWindData(data.wind),
        "clouds": data.clouds, // I think this is a measure of cloudcoverage
        "country": data.sys.country,
        "sunrise": data.sys.sunrise + data.timezone,
        "sunset": data.sys.sunset + data.timezone,
        "timezone": data.timezone, // UTC
        "dt": data.dt,
        "name": data.name,
    }
    console.log("WEATHER DATA", weatherData)
    return weatherData
}


function getWindData(windData) {
    // Given wind data as an array with speed, direction, and gust strenght
    // return a formatted array to add to the weather data
    let parsedWindData = {
        "speed": null,
        "deg": null,
        "gust": null,
    };
    // Speed, deg, gust
    // wind: {'speed': 11, 'deg': 29} // Maybe undefined
    let windKeys = Object.keys(parsedWindData);

    for (let i = 0; i < windKeys.length; i++) {
        console.log(windData[windKeys[i]])

        if(windData[windKeys[i]] === undefined) {
            parsedWindData[windKeys[i]] = 'N/A';
        } else {
            if(windKeys[i] === 'deg') {
                parsedWindData[windKeys[i]] = getWindDirection(windData[windKeys[i]]);
                console.log(parsedWindData[windKeys[i]])
            } else {
                parsedWindData[windKeys[i]] = windData[windKeys[i]];

            }
            // parsedWindData[windKeys[i]] = windData[windKeys[i]];
        }
    }
    return parsedWindData;

    
}
function getWindDirection(windDirection) {
    // Given a wind direction in degrees (360), return
    // a direction (90deg = East)

    if(windDirection > 0 && windDirection < 45) {
        return 'Northeast'
    } else if(windDirection > 45 && windDirection < 90) {
        return 'East'
    } else if(windDirection > 90 && windDirection < 135) {
        return 'Southeast'
    } else if(windDirection > 135 && windDirection < 180) {
        return 'South'
    } else if(windDirection > 180 && windDirection < 225) {
        return 'Southwest'
    } else if(windDirection > 225 && windDirection < 270) {
        return 'West'
    } else if(windDirection > 270 && windDirection < 315) {
        return 'Northwest'
    } else if(windDirection > 315 && windDirection < 360) {
        return 'North'
    }
}

export { getWeatherData, formatData }


// {"coord":{"lon":-122.3321,"lat":47.6062},
// "weather":[{"id":804,"main":"Clouds",
// "description":"overcast clouds","icon":"04n"}],
// "base":"stations",
// "main":{"temp":281.76,"feels_like":281.76,"temp_min":279.55,"temp_max":283.35,"pressure":1027,"humidity":94},
// "visibility":10000,
// "wind":{"speed":0.45,"deg":110,"gust":1.34},
// "clouds":{"all":90},"dt":1636795852,
// "sys":{"type":2,"id":2004026,
// "country":"US",
// "sunrise":1636816330,
// "sunset":1636850122},
// "timezone":-28800, 'formatted as seconds from UTC, -28800 = -8 hours'
// "id":5809844,
// "name":"Seattle",
// "cod":200}