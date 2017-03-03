var currentDate;
var currDateStr;
var dateObj;
var workTime;
var breakTime;

$('#startTimer').click(function(){
    breakTime   = $('#breakTime').attr('value');
    workTime    = $('#workTime').attr('value');
    var myClock = new Clock(workTime,breakTime);
    $('#clock').text(myClock.intialDisplay());
});


