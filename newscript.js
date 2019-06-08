function playAudio(btn, song) {
  var song = document.getElementById(song);
  var button = document.getElementById('play_pause');
  song.onended = function() {
    button.className = "fas fa-play";
  }
  if (song.paused == true && button.className == "fas fa-play") {
    song.play();
    button.className = "fas fa-pause";
  } else {
    song.pause();
    button.className = "fas fa-play";
  } 
}