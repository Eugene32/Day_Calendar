var dateToday = document.getElementById('currentDay');
var hourNowDisplay = moment().format('hA');
var dayBlock = $('#timeblock');
var nineAMBlock = $('#nineAM');
var nineAMBlockTime = moment('9AM', 'hA').format('hA');
var plusOneHour = moment('9AM', 'hA').add(1, 'h').format('hA');
var hiddenHour;



var displayHourNow = $('#hourNow');



$('.hidden').hide();

// Filling the hidden div class with time (hour)
for (var x = 0; x < dayBlock.children().length; x++) {

    var time = moment('9AM', 'hA').add(x, 'h').format('HH');
    dayBlock.children().eq(x).children().eq(3).text(time);

}

setInterval(timeTracking, 1000);
function timeTracking() {

    //hourNowDisplay = moment().format('hA');
    var currentDate = moment().format('dddd[,] MMMM Do');
    dateToday.innerHTML = currentDate;
    var currentHour = moment().format('HH');

    for (var x = 0; x < dayBlock.children().length; x++) {

        var hiddenHour = dayBlock.children().eq(x).children().eq(3).html();
        console.log(hiddenHour);

        if (hiddenHour) {
            if (hiddenHour < currentHour) {
                dayBlock.children().eq(x).children().eq(1).addClass('past');
            }
            else if (hiddenHour == currentHour) {
                dayBlock.children().eq(x).children().eq(1).addClass('present');
            }
            else {
                dayBlock.children().eq(x).children().eq(1).addClass('future');
            }
        }

    }

}






