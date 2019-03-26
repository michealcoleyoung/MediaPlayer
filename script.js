// toggles from play to pause
function playAudio(id) {
    setTime()
	// play and pause
	var audio = document.getElementById(id);
	var element = document.getElementById('play_pause');
    if (audio.paused == true && element.className == "fas fa-play") { 
        audio.play();
        audio.classList.toggle('pause');
        element.className = "fas fa-pause";
 
    }else{
        audio.pause();
        // audio.currentTime = 0;
        element.className = "fas fa-play";
    }
}

// takes the amount of seconds and keeps it in a two digit format such as 00 instead of 0
function min_sec(num, size) {
	var s = "00" + num;
	return s. substr(s.length-size);
}

var aud = document.getElementById('song');

// creates a function expression that will occur automatically without being controlled by an event
aud.ontimeupdate = function() {setTime()};


// displays track time and sets the progress bar or slider
function setTime() {
	var seconds = min_sec(Math.floor(aud.currentTime % 60), 2);	// converts milliseconds to seconds while calling min_sec function
    var minutes = Math.floor(aud.currentTime / 60); // converts milliseconds to minutes
    var duration = Math.floor(aud.duration);
	document.getElementById('time').innerHTML = `<b>${minutes}:${seconds}/${parseInt(duration / 60, 10)}:${parseInt(duration % 60)}</b>`; // shows current time and full length of song
    document.getElementById('progress').value = aud.currentTime;   // sets progress bar to current track time
    document.getElementById('progress').max = aud.duration; // sets max track time value
    var element = document.getElementById('play_pause');

    
    // once the song is complete the pause button switches back to play
    if (aud.currentTime == aud.duration) {
        element.className = "fas fa-play";
    }

}


function sliderControls() {
    // seeks current time from wherever the slider is located during the song
}