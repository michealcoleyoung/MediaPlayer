// TODO
// Add toggle function for play and pause
// Create function to handle slide bar for song

function playAudio(id) {
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


var aud = document.getElementById('song');
aud.ontimeupdate = function() {setTime()};

function setTime() {
	var seconds = Math.floor(aud.currentTime % 60);	// converts milliseconds to seconds
	var minutes = Math.floor(aud.currentTime / 60); // converts milliseconds to minutes
	document.getElementById('time').innerHTML = `${minutes}:${seconds}`; // sets appropriate format of minutes:seconds 
	document.getElementById('progress').value = aud.currentTime; // still needs work
}

// function setTrackProgress() {
// 	// document.getElementById('progress').value = "100";
// 	document.getElementById('derp').innerHTML = audio.currentTime;
// }