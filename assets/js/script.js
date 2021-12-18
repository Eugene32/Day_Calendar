
var dateToday = document.getElementById('currentDay');
var hourNowDisplay = moment().format('hA');

var dayBlock = $('#timeblock');
var currentHour = moment().format('HH');
//var hiddenHour = moment('9', 'H').format('HH');
var nineAMBlock = $('#nineAM');
var nineAMBlockTime = moment('9AM', 'hA').format('hA');
//var hiddenHour = moment(nineAMBlockTime, 'hA').format('HH');
var plusOneHour = moment('9AM', 'hA').add(1, 'h').format('hA');

console.log(plusOneHour);

var displayHourNow = $('#hourNow');

setInterval(timeTracking, 1000);

$('.hidden').hide();


for (var x = 0; x < dayBlock.children().length; x++) {



    //console.log(x);
    //console.log(y);

    var time = moment('9AM', 'hA').add(x, 'h').format('HH');
    // console.log(time);
    dayBlock.children().eq(x).children().eq(3).text(time);



    //nineAMBlock.children().eq(3).text();
}


function timeTracking() {

    hourNowDisplay = moment().format('hA');
    var currentDate = moment().format('dddd[,] MMMM Do');
    dateToday.innerHTML = currentDate;
    //nineAMBlock.children().eq(3).text(hiddenHour);

    for (var x = 0; x < dayBlock.children().length; x++) {

        var hiddenHour = dayBlock.children().eq(x).children().eq(3).text();
        console.log(hiddenHour);

        if (hiddenHour < currentHour) {
            dayBlock.children().eq(x).children().eq(1).addClass('past');
        }
        else if(hiddenHour == currentHour) {
            dayBlock.children().eq(x).children().eq(1).addClass('present');

        }
        else{
            dayBlock.children().eq(x).children().eq(1).addClass('future');

        }
       

    }


}

if (hiddenHour < currentHour) {
    nineAMBlock.children().eq(1).addClass('past');
}





