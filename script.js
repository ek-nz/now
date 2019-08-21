(function(){

    'use strict';
document.addEventListener('DOMContentLoaded', function(){
    
    var theTimeNow = document.getElementById('the-time-now');
    
    setInterval(updateTime, 1000);
    function updateTime() {
        var now = new Date();
        theTimeNow.innerHTML = now;
        document.title = now.getHours() + ':' + now.getMinutes();
    }

});
})();