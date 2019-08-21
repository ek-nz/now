(function(){

    'use strict';
document.addEventListener('DOMContentLoaded', function(){
    
    var theTimeNow = document.getElementById('the-time-now');
var now = new Date();
    theTimeNow.innerHTML = now;
});
})();