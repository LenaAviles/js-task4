window.onload = function () {
	var create = document.getElementById("create")

	create.onclick = function () {
		new StopWatch();
	}
}

var StopWatch = function () {
	if( typeof StopWatch.counter == 'undefined' ) {
		StopWatch.counter = 0;
	}
	StopWatch.counter++

	var _name;
	
	var minutes = 00; 
	var seconds = 00;	
	var Interval ;

	_name = 'Timer ' + StopWatch.counter;

	var div = document.createElement('div');
	div.className = `wrapper ${_name}`;
	div.innerHTML = `<h2>${_name}</h2>
										<p><span id="minutes${_name}">00</span>:<span id="seconds${_name}">00</span></p>
										<button id="button-start${_name}">Start</button>
										<button id="button-stop${_name}">Stop</button>
										<button id="button-reset${_name}">Reset</button>`;
	
var parentElem = document.body;
parentElem.appendChild(div);

	var appendMinutes = document.getElementById(`minutes${_name}`)
	var appendSeconds = document.getElementById(`seconds${_name}`)
	var buttonStart = document.getElementById(`button-start${_name}`);
	var buttonStop = document.getElementById(`button-stop${_name}`);
	var buttonReset = document.getElementById(`button-reset${_name}`);
	
	buttonStart.onclick = function() {	  
	   clearInterval(Interval);
	   Interval = setInterval(startTimer, 1000);
	}
	
	buttonStop.onclick = function() {
		clearInterval(Interval);
	}
	
  
	buttonReset.onclick = function() {
	    clearInterval(Interval);
	  	minutes = "00";
			seconds = "00";
	  	appendMinutes.innerHTML = minutes;
			appendSeconds.innerHTML = seconds;
	}
	
	function startTimer () {
	  seconds++; 
	  
	  if(seconds < 9){
		appendSeconds.innerHTML = "0" + seconds;
	  }
	  
	  if (seconds > 9){
		appendSeconds.innerHTML = seconds;		
	  } 
	  
	  if (seconds > 60) {		
		minutes++;
		appendMinutes.innerHTML = "0" + minutes;
		seconds = 0;
		appendSeconds.innerHTML = "0" + 0;
	  }	

	  if (minutes > 9){
		appendSeconds.innerHTML = seconds;
	  }

	}	

	return StopWatch;
  
  };