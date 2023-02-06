function playSound(event){
     const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

     if(!audio) return; //skip the function if does not have audio.
     audio.currentTime=0; // rewind the audio.   
     audio.play();

     key.classList.add('playing');
}

function clickAnim(event){
    console.log(event);
    if(event.propertyName !== 'transform') return; // skip the function if it isn't a transform.

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend',clickAnim));

window.addEventListener('keydown',playSound);