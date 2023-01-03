var turnOff = document.getElementById('btnOff')
var music = document.getElementById('imgBtn')
var audio = document.querySelector('audio')

function musicOn() {
    if (audio.paused) {
        music.src = '../img/volume on.png'
        audio.play()
    } else {
        music.src = '../img/volume off.png'
        audio.pause()
    }
}

turnOff.addEventListener('click', musicOn())






