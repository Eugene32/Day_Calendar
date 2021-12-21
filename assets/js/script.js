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

$('.hidden').hide();  //hides the container of hour.

// Filling the hidden div class with time (hour)
for (var x = 0; x < dayBlock.children().length; x++) {

    var time = moment('9AM', 'hA').add(x, 'h').format('HH');
    dayBlock.children().eq(x).children().eq(3).text(time);

}

setInterval(timeTracking, 100);

//setInterval function
function timeTracking() {

    var currentDate = moment().format('dddd[,] MMMM Do');
    dateToday.innerHTML = currentDate;

    scanTimeBlocks();

}

//Changes the background color depending on the current hour
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


// Data retrieval and display
if (localStorage.length){
    var tempStringList = localStorage.getItem('dayList');
    myObj = JSON.parse(tempStringList);
      
    for (var i = 0 ; i < myObj.length; i++){
               
        var ptr = document.getElementById(myObj[i].marker);
        ptr.children[1].value = myObj[i].data;
        
    }

}


// Save the data to the local storage
dayBlock.on('click', '.saveBtn', function (event) {
    console.log(myObj);
    var btnClicked = $(event.target);
    var sectionID = btnClicked.parent().attr('id');
    var textEntry = btnClicked.siblings('input').val();

    var tempObj = {};

    tempObj.marker = sectionID;
    tempObj.data = textEntry;

    // Search through myObj for the same sectionID
    var indexPos = -1
    if (myObj) {
        for (i = 0; i < myObj.length; i++) {
            if (myObj[i].marker === sectionID) {
                indexPos = i;
                break;
            }

        }

        if (indexPos === -1) {
            myObj.push(tempObj);
            console.log('Object had been push to the array.');
        }
        else {
            myObj[indexPos].data = textEntry;
            console.log(myObj[indexPos].data + ' had been replaced');
        }
        localStorage.setItem('dayList', JSON.stringify(myObj));
    }

});

// Adds a footer
var footerEl = document.createElement('h4');
footerEl.innerHTML = '&copy &#x1d19&#670 2021';
footerEl.classList.add('footer');
document.body.appendChild(footerEl);

/*
    To make this page more flexible: 
        - hour block display on the html should be dependent on the loop that fills the hidden div that contains the hour.  
        - user should have an option to choose the 'working hour.
        - be able to create and retrieve an entry based on date(s).
        - Web API should be used to display the day calendar as to adopt to the choices of the user.
*/
