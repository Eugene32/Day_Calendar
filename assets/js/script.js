
var dateToday = document.getElementById('currentDay');
var hourNowDisplay = moment().format('hA');

var dayBlock = $('#timeblock');
var currentHour = moment().format('HH');
//var hiddenHour = moment('9', 'H').format('HH');
var nineAMBlock = $('#nineAM');
var nineAMBlockTime = moment('9AM', 'hA').format('hA');
var hiddenHour = moment(nineAMBlockTime, 'hA').format('HH');

var displayHourNow = $('#hourNow');

setInterval ( timeTracking , 1000);


function timeTracking () {

    hourNowDisplay = moment().format('hA');
    var currentDate = moment().format('dddd[,] MMMM Do');  
    dateToday.innerHTML = currentDate;
    var currentHour = moment().format('H');

    nineAMBlock.text(nineAMBlockTime);
  
    console.log(hiddenHour);
    console.log(currentHour);
  

    if (hiddenHour < currentHour){
        console.log('This');
    }


}

console.log(dayBlock.children().eq(0).children().eq(0).text());



