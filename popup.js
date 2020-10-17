//region {variables and functions}
var timeId;
var dateId;
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var consoleGreeting = "Hello World! - from popup_script.js";
console.log(consoleGreeting);
function setTimeAndDate() {
    console.log("hello from mytime");
    var date = new Date();
    var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    var time = date.getHours() + ":" + minutes;
    var date = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
    var timeElement = document.getElementById("time");
    var dateElement = document.getElementById("date");
    timeElement.innerHTML = time;
    dateElement.innerHTML = date;
    console.log("time", time);
    console.log("date", date);
}
document.addEventListener("DOMContentLoaded",function(dcle) {setTimeAndDate();})
