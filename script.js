// TODO
// Add toggle function for play and pause
// Create function to handle slide bar for song


function playAudio(id) {
	// play and pause
	var audio = document.getElementById(id);
    if (audio.paused == true) {
        audio.play();
        audio.classList.toggle('pause');
 
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}