var myInterval = setInterval(updateTime,1000);
function updateTime(){
	var dateObj = getTimeRemaining('2/22/2017');
	$('#clock').text(dateObj.hours + ':'+dateObj.minutes+ ':' + dateObj.seconds);
}

