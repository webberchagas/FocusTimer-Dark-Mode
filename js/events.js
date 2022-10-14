import { 
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeSound,
  buttonFireSound,
  forestVolume,
  rainVolume,
  coffeVolume,
  fireVolume,
  btnLightMode,
  btnDarkMode 
} from "./elements.js"

export function Events({controls, timer, sound}){
  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', function() {
    timer.reset()
    sound.pressButton()
  })
  
  buttonPlus.addEventListener('click', function() {
    timer.plus()
    sound.pressButton()
  })
  
  buttonMinus.addEventListener('click', function() {
    timer.minus()
    sound.pressButton()
  })
  
  
  
  buttonForestSound.addEventListener('click', function() {
    sound.toggleSounds(sound.ForestSound)
    controls.forestsPlay()
  })
  
  buttonRainSound.addEventListener('click', function() {
    sound.toggleSounds(sound.RainSound)
    controls.rainPlay()
  })
  
  buttonCoffeSound.addEventListener('click', function() {
    sound.toggleSounds(sound.CoffeSound)
    controls.coffePlay()
  })
  
  buttonFireSound.addEventListener('click', function() {
    sound.toggleSounds(sound.FireSound)
    controls.firePlay()
  })
  
  forestVolume.addEventListener('change', function() {
      sound.ForestSound.volume = forestVolume.value
  })
  
  rainVolume.addEventListener('input', function() {
    sound.RainSound.volume = rainVolume.value
  })
  
  coffeVolume.addEventListener('input', function() {
    sound.CoffeSound.volume = coffeVolume.value
  })
  
  fireVolume.addEventListener('input', function() {
    sound.FireSound.volume = fireVolume.value
  })
  
  btnLightMode.addEventListener('click', controls.toggleMode)
  btnDarkMode.addEventListener('click',  controls.toggleMode)
}