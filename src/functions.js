console.log("Loading function scripts...")


function convertUTC(utcValue, timezone) {
    // timeFormat as 12 or 24 hour time, converts UTC value to one of those
    // utc in seconds -> minutes -> hours -> days
    let newDate = new Date(utcValue);
    // console.log("LOCAL", formatAMPM(newDate))
    newDate = newDate.toUTCString();
    return newDate.split(' ')[4].split(":").slice(0,2).join(":")

}

// function getLocalTime(utcValue, timezoneShift) {
//     // convert a date UTC to local date time
//     let newDate = new Date(utcValue).toUTCString();

//     //
//     console.log("LOCAL", newDate);
// }


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
// getLocalTime(1637047000 * 1000)
// console.log("LOCAL", getLocalTime(1637047000))
// console.log("SEATTLE TIME", convertUTC((1637121527 - 36000) * 1000)) // UTC multiplied by 1000
// console.log("TIME", convertUTC(1637047000 * 100)) // UTC multiplied by 1000

export { convertUTC }