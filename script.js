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