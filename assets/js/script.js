var dateToday = document.getElementById('currentDay');
var hourNowDisplay = moment().format('hA');
var dayBlock = $('#timeblock');
var nineAMBlock = $('#nineAM');
var nineAMBlockTime = moment('9AM', 'hA').format('hA');
var plusOneHour = moment('9AM', 'hA').add(1, 'h').format('hA');
var hiddenHour;
var displayHourNow = $('#hourNow');
var textEntry;
var myObj = [];


$('.hidden').hide();  //hides the container of hour.

// Filling the hidden div class with time (hour)
for (var x = 0; x < dayBlock.children().length; x++) {

    
    var time = moment('9AM', 'hA').add(x, 'h').format('HH');
    dayBlock.children().eq(x).children().eq(3).text(time);

}

// Provides internal refresh routine to scan for current date.
setInterval(timeTracking, 1000);

//setInterval function to refresh each 'timeblocks'
function timeTracking() {

    var currentDate = moment().format('dddd[,] MMMM Do');
    dateToday.innerHTML = currentDate;

}

// Serves as a scan for the row's hour versus system time hour.
setInterval(scanTimeBlocks, 500);

//Changes the background color depending on the current hour
function scanTimeBlocks() {

    for (var x = 0; x < dayBlock.children().length; x++) {

        var hiddenHour = dayBlock.children().eq(x).children().eq(3).html();
        var currentHour = moment().format('HH');

        if (hiddenHour) {                                                           // If hiddenHour is not empty  add a CSS class to format background color
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
if (localStorage.length) {

    var tempStringList = localStorage.getItem('dayList');
    myObj = JSON.parse(tempStringList);

    for (var i = 0; i < myObj.length; i++) {

        var ptr = document.getElementById(myObj[i].marker);
        ptr.children[1].value = myObj[i].data;

    }

}


// Save the data to the local storage
dayBlock.on('click', '.saveBtn', function (event) {

    var btnClicked = $(event.target);                       // Determines which child element from the 'timeblock' got the click event and assign element to btnClicked.
    var sectionID = btnClicked.parent().attr('id');         // Determines the row that is receiving the 'click' event.
    var textEntry = btnClicked.siblings('input').val();     // Extracts the data entry. 

    var tempObj = {};                                       // Creates a obj data.

    tempObj.marker = sectionID;                             // saves the pointer to tempObj.
    tempObj.data = textEntry;                               // saves the point to tempObj


    var indexPos = -1                                       // Intialize a flag - (-1 as not found to be a default for the array search)

    // Search through myObj for the same sectionID
    if (myObj) {
        for (i = 0; i < myObj.length; i++) {

            if (myObj[i].marker === sectionID) {            // Test if sectionID matches an entry in myObj.marker
                indexPos = i;                               // saves the index position
                break;                                      // exits the loop if a match is found
            }

        }

        if (indexPos === -1) {

            myObj.push(tempObj);                            // add the tempObj to myObj if there is not previous entry of the same marker.

        }
        else {

            myObj[indexPos].data = textEntry;               // replaces the old entry for data as a match had been found.

        }
        localStorage.setItem('dayList', JSON.stringify(myObj));     // saves the myObj array to local storage.
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
