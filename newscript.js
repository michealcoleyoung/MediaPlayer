let song, button, seekslider;

// initializes elements of the player through the use of an onload
function initializePlayer() {
  song = document.getElementById('song');
  button = document.getElementById('play_pause');
  seekslider = document.getElementById('seekslider');

  button.addEventListener("click", playAudio, false);
  seekslider.addEventListener("change", audioSeek, false);
  song.addEventListener("timeupdate", seekTimeUpdate, false);
}

window.onload = initializePlayer();

function playAudio() {
  if (song.paused == true && button.className == "fas fa-play") {
    song.play();
    button.className = "fas fa-pause";
  } else {
    song.pause();
    button.className = "fas fa-play";
  }
  // once song has ended this places the button back into the fas fa-play class 
  song.onended = function() {
    button.className = "fas fa-play";
  }
}

// slider controls
function audioSeek() {
  let seekto = song.duration * (seekslider.value / 100);
  song.currentTime - seekto;
}

// slider time update
function seekTimeUpdate() {
  newTime = song.currentTime * (100 / song.duration);
  seekslider.value = newTime;
}

window.onload = song.ontimeupdate = function() {setTime()}

// shows the amount of time played and the full duration of the song (0:00 / 5:29)
function setTime() {
  let formatSeconds = function(num, size) {
    // once number of seconds reaches the double digits this function formats this correctly
    let number = "00" + num;
    return number.substr(number.length - size)
  }
  let minutes = Math.floor(song.currentTime / 60);
  let seconds = formatSeconds(Math.floor(song.currentTime - minutes * 60), 2);
  let songLength = `${parseInt(song.duration / 60, 10)}:${parseInt(song.duration % 60)}`;
  document.getElementById('time').innerHTML = `${minutes}:${seconds} / ${songLength}`;
}
