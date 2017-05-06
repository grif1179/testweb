var currentDate;
var currDateStr;
var dateObj;
var workTime;
var workMin;
var workSec;
var breakTime;
var breakMin;
var breakSec;
var stop;
var workInt;
var breakInt;

$('#startTimer').click(function(){
    breakTime   = $('#breakTime').val();
    workTime    = $('#workTime').val();
    workMin     = workTime;
    workSec     = 0;
    breakMin    = breakTime;
    breakSec    = 0;
    stop        = false;

    workInt     = setTimeout(decWork(),1000);

});

$('#pauseTimer').click(function()
{
  stop = true;
});

function decWork()
{
   if(!stop)
   {
     if(workMin == 0 && workSec == 0 )
     {
       clearTimeout(workInt);
       setTimeout(decBreak(),1000);
     }
     else if(workMin > 0)
     {
       if(workSec == 0)
       {
         workSec = 59;
         workMin--;
         workDisplay();
       }
       else
       {
          workSec--;
          workDisplay();
       }
     }
     else if(workMin == 0 && workSec > 0)
     {
       workSec--;
       workDisplay();
     }
     setTimeout(decWork,1000);
   }//end stop
}//end decWork


function decBreak()
{
   if(!stop)
   {
     if(breakMin == 0 && breakSec == 0 )
     {
       clearTimeout(breakInt)
       setTimeout(decWork(),1000);
     }
     else if(breakMin > 0)
     {
       if(breakSec == 0)
       {
         breakSec = 59;
         breakMin--;
         breakDisplay();
       }
       else
       {
          breakSec--;
          breakDisplay();
       }
     }
     else if(breakMin == 0 && breakSec > 0)
     {
       breakSec--;
       breakDisplay();
     }
     setTimeout(decBreak,1000);
   }//end stop
}

var workDisplay = function()
{
  var currentTime;
  if(workSec < 10)
  {
      currentTime = workMin + ':0' + workSec;
      $('#clock').text(currentTime);
  }
  else
    {
      currentTime = workMin + ':' + workSec;
      $('#clock').text(currentTime);
    }
}

var breakDisplay = function()
{
  var currentTime;
  if(breakSec < 10)
  {
      currentTime = breakMin + ':0' + breakSec;
      $('#clock').text(currentTime);
  }
  else
    {
      currentTime = breakMin + ':' + breakSec;
      $('#clock').text(currentTime);
    }
}
