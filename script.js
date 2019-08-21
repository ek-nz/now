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
        if (minutes < 10) minutes = '0' + minutes;
        var time = now.getHours() + ':' + minutes;
        theDateNow.innerHTML = date;
        theTimeNow.innerHTML = time;
        document.title = time;
    }

});
})();