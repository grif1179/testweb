var clock = new FlipClock($('.clock'),3300,{
    clockFace: 'MinuteCounter',
		        autoStart: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('The clock has stopped!')
		        	}
		        }
		    });
				    
clock.setTime(2200);
clock.setCountdown(true);
clock.start();
    

