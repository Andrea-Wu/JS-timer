
var hours;
var minutes;
var seconds;
var time;
function start(){
	
	//get values from input boxes
	hours = document.getElementById("hourInput").value;
	minutes = document.getElementById("minuteInput").value;
	seconds = document.getElementById("secondInput").value;

	//if more than 60 seconds or minutes, convert to standard time measurements
	if (seconds > 59){
		var xS = Math.floor(seconds / 60);
		xS = xS/1;
		seconds = Math.floor(seconds % 60);   //JAVASCRIPT DOESN'T HAVE INTEGER DIVISION :(
		minutes += xS;
	}

	if(minutes > 59){
		var xM = Math.floor(minutes / 60);
		xM = xM/1;
		minutes = Math.floor(minutes % 60);
		hours += xM;
	}

	$("#start").css("color", "white"); //hides start button & removes functionality
	$("#start").removeAttr("onClick");

	$(".hidden").css("color", "black");
	$("#continue").css("color", "white");


						 //pause has functionality
	$("#pause").attr("onClick", "pause();");
	
	var b  = new timer();
	

}

function timer(){
	 time = setInterval(function(){
		seconds = seconds - 1;
		if(seconds < 0){
			if(hours != 0){
				if(minutes != 0){ 
					seconds = 59;
					minutes--;
				}else{                   //minutes == 0
					seconds = 59;
					minutes = 59;
					hours--;
				}
			}else{ //hours == 0
				if(minutes != 0){
					seconds = 59;
					minutes--;
				}else{ 			//minutes == 0
					clearInterval(time);
					seconds = 0;
				}
			}
		}
		
		seconds = seconds.toString();
		minutes = minutes.toString();
		hours = hours.toString();

		console.log(seconds);
		console.log(minutes);
		console.log(hours);

		if(seconds.length < 2){
			seconds = "0" + seconds;
		}else if(seconds.length ==3){
			seconds = seconds.substring(1);
		}

		if(minutes.length < 2){
			minutes = "0" + minutes;
		}else if(minutes.length ==3){
			minutes = minutes.substring(1);
		}
	
		if(hours.length < 2){
			hours = "0" + hours;
		}else if(hours.length ==3){
			hours = hours.substring(1);
		}
		
		document.getElementById("hrDisplay").innerHTML = hours;
		document.getElementById("minDisplay").innerHTML = minutes;
		document.getElementById("secDisplay").innerHTML = seconds;
	}, 1000);
}

function reload(){
	clearInterval(time);
	$(".hidden").css("color", "white");
	document.getElementById("hourInput").value = 0;
	document.getElementById("minuteInput").value = 0;
	document.getElementById("secondInput").value = 0;

	$("#pause").removeAttr("onClick");
	$("#continue").removeAttr("onClick");


	document.getElementById("hrDisplay").innerHTML = "";
	document.getElementById("minDisplay").innerHTML = "";
	document.getElementById("secDisplay").innerHTML = "";

	$("#start").attr("onClick", "start();");
	$("#start").html("time me!");
	$("#start").css("color", "black");

	
}
function pause(){
	clearInterval(time);
	$("#pause").css("color", "white");
	$("#pause").removeAttr("onClick");
	$("#continue").css("color", "black");
	$("#continue").attr("onClick", "cont();");
}
function cont(){
	var a = new timer();
	$("#pause").css("color", "black");
	$("#pause").attr("onClick", "pause();");
	$("#continue").css("color", "white");
	$("#continue").removeAttr("onClick");
}
