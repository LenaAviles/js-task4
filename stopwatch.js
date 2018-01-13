window.onload = function () {
	var firstTimer = new StopWatch();
}

var StopWatch = (function () {
	var _counter = 0;
	var _name;
	 
	var minutes = 00; 
	var seconds = 00;	
	var Interval ;

	debugger;
	function StopWatch() {
		_counter++;
		_name = 'Timer ' + _counter;
	}

// 	var div = document.createElement('div');
// 	div.className = `wrapper ${_name}`;
// 	div.innerHTML = `<h2>${_name}</h2>
// 										<p><span id="minutes">00</span>:<span id="seconds">00</span></p>
// 										<button id="button-start">Start</button>
// 										<button id="button-stop">Stop</button>
// 										<button id="button-reset">Reset</button>`;
	
// var parentElem = document.body;
// parentElem.appendChild(div);

	// var appendMinutes = document.getElementById("minutes")
	// var appendSeconds = document.getElementById("seconds")
	// var buttonStart = document.getElementById('button-start');
	// var buttonStop = document.getElementById('button-stop');
	// var buttonReset = document.getElementById('button-reset');
	
	// buttonStart.onclick = function() {	  
	//    clearInterval(Interval);
	//    Interval = setInterval(startTimer, 1000);
	// }
	
	// buttonStop.onclick = function() {
	// 	clearInterval(Interval);
	// }
	
  
	// buttonReset.onclick = function() {
	//     clearInterval(Interval);
	//   	minutes = "00";
	// 		seconds = "00";
	//   	appendMinutes.innerHTML = minutes;
	// 		appendSeconds.innerHTML = seconds;
	// }
	
	 
	
	// function startTimer () {
	//   seconds++; 
	//   console.log(seconds);
	  
	//   if(seconds < 9){
	// 	appendSeconds.innerHTML = "0" + seconds;
	//   }
	  
	//   if (seconds > 9){
	// 	appendSeconds.innerHTML = seconds;		
	//   } 
	  
	//   if (seconds > 60) {		
	// 	minutes++;
	// 	appendMinutes.innerHTML = "0" + minutes;
	// 	seconds = 0;
	// 	appendSeconds.innerHTML = "0" + 0;
	//   }	

	//   if (minutes > 9){
	// 	appendSeconds.innerHTML = seconds;
	//   }

	// }	

	return StopWatch;
  
  }());