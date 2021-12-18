
var dateToday = document.getElementById("currentDay");

// 
setInterval ( timeTracking , 1000);

// 
function timeTracking () {

    var hourNow = moment().format("HHA");
    var currentDate = moment().format("dddd[,] MMMM Do");  
    dateToday.innerHTML = currentDate;
}
