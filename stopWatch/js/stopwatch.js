function Stopwatch(elem) {
	var time = 0;
	var interval;
	var offset;

    //Update Function
	function update() {
		if(this.isOn){
			time += delta();
		}
		var formattedTime = timeFormatter(time);
		elem.textContent = formattedTime;
	};

	//Delta Function
	function delta() {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	};

	//Time Formatter Function
	function timeFormatter(timeInMilliseconds) {
		var time = new Date(timeInMilliseconds);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		if(minutes.length < 2){
			minutes = '0' + minutes;
		}
		if (seconds.length < 2){
			seconds = '0' + minutes
		}
		while(milliseconds.length < 3){
			milliseconds = '0' + milliseconds
		}
		return minutes + ' : ' + seconds + ' . ' + milliseconds;
	};

	this.isOn = false;

	//Start Funtion
	this.start = function(){
		if(!this.isOn){
			interval = setInterval(update.bind(this), 10);
			offset = Date.now();
			this.isOn = true;
		}
	};
	//Stop Function
	this.stop = function(){
		if(this.isOn){
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};
	//Reset Function
	this.reset = function() {
		if(!this.isOn){
			time = 0;
			update();
		}
	};
}


