
function showClock1(){
var nowTime = new Date();
var nowHour = nowTime.getHours(); 
var nowMin  = nowTime.getMinutes();
var nowSec  = nowTime.getSeconds(); 
var msg =  nowHour + ":" + nowMin + "." + nowSec ;
document.getElementById("RealtimeClock").innerHTML = msg; 
}
setInterval('showClock1()',1000);