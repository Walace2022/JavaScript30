//My Solution

//Components
const videoPlayer = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.player__slider[name="volume"]');
const speedSlider = document.querySelector('.player__slider[name="playbackRate"]');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');
const progessBar = document.querySelector('.progress__filled');
const videoBar = document.querySelector('.progress');
const fullscreen = document.querySelector('[name="fullscreen"]');
const player = document.querySelector('.player');

//Functions
function togglePlay(){
    let method = videoPlayer.paused ? 'play' : 'pause';
    videoPlayer[method]();
    if(videoPlayer.paused){
        playButton.textContent = "►";
    }else{
        playButton.textContent = "◼";
    }
}

function setVolume(){
    videoPlayer.volume = this.value;
}

function setPlaybackRate(){
    videoPlayer.playbackRate = this.value;
}

function skipVideo(){
    videoPlayer.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress(){
    let percent = (videoPlayer.currentTime / videoPlayer.duration)*100;
    progessBar.style.flexBasis =`${percent}%`;

}

function setVideoTime(e){
    let percent = (e.offsetX/videoBar.clientWidth) *100;
    let time = (videoPlayer.duration * percent)/100;

    videoPlayer.currentTime = time;
}

function setFullscreen(){
    player.requestFullscreen();
}

//Event Listeners
videoPlayer.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skipVideo));
videoBar.addEventListener('click', setVideoTime);
fullscreen.addEventListener('click', setFullscreen);

volumeSlider.addEventListener('change', setVolume);
volumeSlider.addEventListener('mousemove', setVolume);
speedSlider.addEventListener('change',setPlaybackRate);
speedSlider.addEventListener('mousemove', setPlaybackRate);

videoPlayer.addEventListener("timeupdate",handleProgress);

let mouseDown = false;
videoBar.addEventListener('mousedown', () => mouseDown = true);
videoBar.addEventListener('mouseup', () => mouseDown = false);
videoBar.addEventListener('mousemover', (e) => mouseDown && setVideoTime(e));