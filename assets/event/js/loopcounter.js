jQuery(document).ready(function($){
	setInterval(function() { makeTimer(); }, 1000);
	function makeTimer() {

	
		var endTime = new Date("05 June 2023 15:00:00 GMT+05:30");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".counter-days").html("0");
			$(".counter-hours").html("00");
			$(".counter-minutes").html("00");
			$(".counter-seconds").html("00");		

	}

	
	//loopcounter( 'counter-id' );
});
