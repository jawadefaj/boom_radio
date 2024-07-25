

// JavaScript function to control audio playback
function playAudio() {
    var audio = document.getElementById('radioPlayer');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
