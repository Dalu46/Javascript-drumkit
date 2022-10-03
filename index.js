
function playsound(e) {
    // console.log(e.keyCode)
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key)

    console.log(this)
    
    //stop the function from running if there's no audio
    if(!audio) return;
    
    //rewind to the start
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing')
}

function removeTransition(e) {
    //skip if it is not a transform
    if(e.propertyName !== 'transform') return;
    // console.log(this)
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playsound)

// window.addEventListener('keydown', e => {
//     const audios = document.querySelectorAll('.audio-sound');
//     audios.forEach(audio => audio.play())

// })

// console.log(3)