var workTime;
var workMin;
var workSec;
var breakTime;
var breakMin;
var breakSec;
var stopWork;
var stopBreak;
var currentPhase;
var init = 0;
$('#startTimer').click(function(){
  if(init === 0)
  {
      $('#startTimer').css('display','none');
      $('#pauseTimer').css('display','block');
      $('#resetTimer').css('display','block');
      breakTime   = $('#breakTime').val();
      workTime    = $('#workTime').val();
      workMin     = workTime;
      workSec     = 0;
      breakMin    = breakTime;
      breakSec    = 0;
      stopWork    = false;
      decWork();
      init++;
  }//first time start is pressed
  else
  {
      if(currentPhase === 'Work')
      {
		$('#startTimer').css('display','none');
        $('#pauseTimer').css('display','block');
        stopWork = false;
        stopBreak = true;
        decWork();
      }
      else if(currentPhase === 'Break')
      {
		$('#startTimer').css('display','none');
        $('#pauseTimer').css('display','block');
        stopBreak = false;
        stopWork = true;
        decBreak();
      }
  }
});


$('#pauseTimer').click(function()
{
  $('#startTimer').css('display','block');
  $('#pauseTimer').css('display','none');
  stopWork  = true;
  stopBreak = true;
});

$('#resetTimer').click(function(){
      stopBreak = true;
      stopWork = true;
      setTimeout(function(){
        $('#startTimer').css('display','none');
        $('#pauseTimer').css('display','block');
        $('#resetTimer').css('display','block');
        breakTime   = $('#breakTime').val();
        workTime    = $('#workTime').val();
        workMin     = workTime;
        workSec     = 0;
        breakMin    = breakTime;
        breakSec    = 0;
        stopWork    = false;
        stopBreak   = true;
        decWork();
      },2000);
});

function decWork()
{
  currentPhase = 'Work';
   if(!stopWork)
   {
      setTimeout(function(){
       if(workMin == 0 && workSec == 0 )
       {
        breakTime   = $('#breakTime').val();
        workTime    = $('#workTime').val();
        workMin     = workTime;
        workSec     = 0;
        breakMin    = breakTime;
        breakSec    = 0;
        stopWork    = true;
        stopBreak   = false;
        decBreak();
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
       decWork();
     },1000);//end of setTimeout fns
   }//end stop
}//end decWork

function decBreak()
{
  currentPhase = 'Break';
   if(!stopBreak)
   {
      setTimeout(function(){
       if(breakMin == 0 && breakSec == 0 )
       {
          breakTime   = $('#breakTime').val();
          workTime    = $('#workTime').val();
          workMin     = workTime;
          workSec     = 0;
          breakMin    = breakTime;
          breakSec    = 0;
         stopWork = false;
         stopBreak = true;
         decWork();
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
       decBreak();
     },1000);//end of setTimeout fns
   }//end stop
}

// function decBreak()
// {
//    if(!stop)
//    {
//      if(breakMin == 0 && breakSec == 0 )
//      {
//        clearTimeout(breakInt)
//        setTimeout(decWork(),1000);
//      }
//      else if(breakMin > 0)
//      {
//        if(breakSec == 0)
//        {
//          breakSec = 59;
//          breakMin--;
//          breakDisplay();
//        }
//        else
//        {
//           breakSec--;
//           breakDisplay();
//        }
//      }
//      else if(breakMin == 0 && breakSec > 0)
//      {
//        breakSec--;
//        breakDisplay();
//      }
//      setTimeout(decBreak,1000);
//    }//end stop
// }

var workDisplay = function()
{
  var currentTime;
  if(workSec < 10)
  {
      currentTime = workMin + ':0' + workSec;
      $('#clock h1').text(currentTime);
  }
  else
    {
      currentTime = workMin + ':' + workSec;
      $('#clock h1').text(currentTime);
    }
}

var breakDisplay = function()
{
  var currentTime;
  if(breakSec < 10)
  {
      currentTime = breakMin + ':0' + breakSec;
      $('#clock h1').text(currentTime);
  }
  else
    {
      currentTime = breakMin + ':' + breakSec;
      $('#clock h1').text(currentTime);
    }
}
