(function(){
'use strict'; //From LinkedIn Learning video "boilerplate"

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function(){
    
    // Store the element to display the time into
    var theTimeNow = document.getElementById('the-time-now');
    
    //Make the updateTime function run every 1 second
    setInterval(updateTime, 1000);
    
    //Update the time in the browser (runs every second)
    function updateTime() {
        var now = new Date();
        theTimeNow.innerHTML = now;
        document.title = now.getHours() + ':' + now.getMinutes();
    }

});
})();