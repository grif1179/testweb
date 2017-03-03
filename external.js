function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function formatTime(workTime,breakTime){
	var daysWork = Math.floor(workTime/(60*24));
	workTime -= daysWork*(1440);
	var hoursWork = Math.floor((workTime/61)%24);
	workTime -= hoursWork*60;
	var workMin = workTime;

	var daysBreak = Math.floor(breakTime/(60*24));
	breakTime -= daysBreak*1440;
        var hoursBreak = Math.floor((breakTime/60)%24);
	breakTime -= hoursBreak*60;
	minsbreak = breakTime;
        
	
}
function startTimer(workTime,breakTime){


}






