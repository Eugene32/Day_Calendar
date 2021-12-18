
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

$('.hidden').hide();

function timeTracking () {

    hourNowDisplay = moment().format('hA');
    var currentDate = moment().format('dddd[,] MMMM Do');  
    dateToday.innerHTML = currentDate;
    nineAMBlock.children().eq(3).text(hiddenHour);

}





