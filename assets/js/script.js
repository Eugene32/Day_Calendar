var dateToday = document.getElementById('currentDay');
var hourNowDisplay = moment().format('hA');
var dayBlock = $('#timeblock');
var nineAMBlock = $('#nineAM');
var nineAMBlockTime = moment('9AM', 'hA').format('hA');
var plusOneHour = moment('9AM', 'hA').add(1, 'h').format('hA');
var hiddenHour;
var displayHourNow = $('#hourNow');
var textEntry;
var locData = [];
var myObj = [];

$('.hidden').hide();

// Filling the hidden div class with time (hour)
for (var x = 0; x < dayBlock.children().length; x++) {

    var time = moment('9AM', 'hA').add(x, 'h').format('HH');
    dayBlock.children().eq(x).children().eq(3).text(time);

}

setInterval(timeTracking, 100);

function timeTracking() {

    var currentDate = moment().format('dddd[,] MMMM Do');
    dateToday.innerHTML = currentDate;

    scanTimeBlocks();

}

function scanTimeBlocks() {

    for (var x = 0; x < dayBlock.children().length; x++) {

        var hiddenHour = dayBlock.children().eq(x).children().eq(3).html();
        var currentHour = moment().format('HH');

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



dayBlock.on('click', '.saveBtn', function (event) {


    var btnClicked = $(event.target);
    var textEntry = btnClicked.siblings('input').val();
    var textEntryMarker = btnClicked.siblings('.hidden').text();
    
    var tempObj = {};

    tempObj.marker = textEntryMarker;
    tempObj.data = textEntry;

    myObj.push(tempObj);

    console.log(textEntryMarker);
    console.log(textEntry);
    console.log(myObj);


    localStorage.setItem( 'dayList', JSON.stringify(myObj));
    // var sectionBlock = btnClicked.parent('section');   
    // var textEntryMarker = sectionBlock.children().eq(0).text();
 
 


});


