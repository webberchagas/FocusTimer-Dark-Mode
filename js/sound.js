export function Sound(){
  const ForestSound = new Audio('../sounds/Floresta.wav')
  const RainSound = new Audio('../sounds/Chuva.wav')
  const CoffeSound = new Audio('../sounds/Cafeteria.wav')
  const FireSound = new Audio('../sounds/Lareira.wav')
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  ForestSound.loop = true
  RainSound.loop = true
  CoffeSound.loop = true
  FireSound.loop = true
  
  ForestSound.volume = 0.5
  RainSound.volume = 0.5
  CoffeSound.volume = 0.5
  FireSound.volume = 0.5

  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    kitchenTimer.play()
  }

  function toggleSounds(sounds) {
    let paused = sounds.paused

    if (paused) {
      sounds.play()
    } else {
      sounds.pause()
    }
  }

  return {
    pressButton,
    timeEnd,
    toggleSounds,
    ForestSound,
    RainSound,
    CoffeSound,
    FireSound
  }
}