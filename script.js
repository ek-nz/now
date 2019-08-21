(function(){
'use strict'; //From LinkedIn Learning video "boilerplate"

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function(){
    
    // Store the element to display the time into
    var theDateNow = document.getElementById('the-date-now');
    var theTimeNow = document.getElementById('the-time-now');
    
    //Make the updateTime function run every 1 second
    setInterval(updateTime, 1000);
    
    //Update the time in the browser (runs every second)
    function updateTime() {
        var now = new Date(),
            minutes = now.getMinutes(),
            month = now.toLocaleString('default', { month: 'long' }),
            date = now.getDate() + ' ' + month;
        
        //Add leading zero to minutes below 10
        if (minutes < 10) minutes = '0' + minutes;

        //Concatinate the time
        var time = now.getHours() + ':' + minutes;

        //Show date and time on the page
        theDateNow.innerHTML = date;
        theTimeNow.innerHTML = time;

        //Show time only in the tab label
        document.title = time;
    }

});
})();

//https://pro.openweathermap.org/data/2.5/climate/month?id=7910038&appid=[log in to get key] Dunedin City current weather API call