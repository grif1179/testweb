//function getTimeRemaining(currDateStr){
//  var t = Date.parse(endtime) - Date.parse(new Date());
//  var seconds = Math.floor( (t/1000) % 60 );
//  var minutes = Math.floor( (t/1000/60) % 60 );
//  var hours = Math.floor( (t/(1000*60*60)) % 24 );
//  var days = Math.floor( t/(1000*60*60*24) );
//  return {
//    'total': t,
//    'days': days,
//    'hours': hours,
//    'minutes': minutes,
//    'seconds': seconds
//  };
//}

function Clock(workMin,breakMin){
    this.workTime = workMin;
    this.breakMin = breakMin;
    
    this.intialDisplay = function(){
        workMin -= 1;
        return this.workTime + ':' + 60;
    }
    
}








