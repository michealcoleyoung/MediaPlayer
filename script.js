function initializePlayer() {
    let aud = document.getElementById('song');
    let seekslider = document.getElementById('progress');
    seekslider.addEventListener("change", audioSeek, false);
    aud.addEventListener("timeupdate", seekUpdate, false);
}

window.onload = initializePlayer();

// toggles from play to pause
function playAudio(id) {
	// play and pause
	let audio = document.getElementById(id);
	let element = document.getElementById('play_pause');
    if (audio.paused == true && element.className == "fas fa-play") { 
        audio.play();
        audio.classList.toggle('pause');
        element.className = "fas fa-pause";
 
    }
    else
    {
        audio.pause();
        // audio.currentTime = 0;
        element.className = "fas fa-play";
    }
}

// takes the amount of seconds and keeps it in a two digit format such as 00 instead of 0
function min_sec(num, size) {
	let seconds = "00" + num;
	return seconds.substr(seconds.length-size);
}

let aud = document.getElementById('song');
// aud.muted = true; 

// creates a function expression that will occur automatically without being controlled by an event
window.onload = aud.ontimeupdate = function() {setTime()};

// displays track time and sets the progress bar or slider
function setTime() {
	let seconds = min_sec(Math.floor(aud.currentTime % 60), 2);	// converts milliseconds to seconds while calling min_sec function
    let minutes = Math.floor(aud.currentTime / 60); // converts milliseconds to minutes
    let duration = Math.floor(aud.duration);
	document.getElementById('time').innerHTML = `<b>${minutes}:${seconds} / ${parseInt(duration / 60, 10)}:${parseInt(duration % 60)}</b>`; // shows current time and full length of song
    document.getElementById('progress').value = aud.currentTime;   // sets progress bar to current track time
    document.getElementById('progress').max = aud.duration; // sets max track time value
    let element = document.getElementById('play_pause');
    
    // once the song is complete the pause button switches back to play
    if (aud.currentTime == aud.duration) {
        element.className = "fas fa-play";
    }

}

let seekslider = document.getElementById('progress');

function audioSeek() {

    let seekto = aud.duration * (seekslider.value / 100);
    aud.currentTime = seekto;
}


function seekUpdate() {
    let newTime = aud.currentTime * (100 / aud.duration);
    seekslider.value = newTime;
}

