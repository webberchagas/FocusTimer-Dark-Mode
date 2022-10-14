
export function Controls({
  buttonForestSound,
  buttonRainSound,
  buttonCoffeSound,
  buttonFireSound,
  ForestSound,
  RainSound,
  CoffeSound,
  FireSound,
  btnLightMode,
  btnDarkMode
}){
  let isPlay = true

  function toggleMode() {
    document.body.classList.toggle('dark-mode')
    btnLightMode.classList.toggle('hide')
    btnDarkMode.classList.toggle('hide')
  }
  
  function forestsPlay(){
      buttonForestSound.classList.toggle('ativo')
      buttonRainSound.classList.remove('ativo')
      buttonCoffeSound.classList.remove('ativo')
      buttonFireSound.classList.remove('ativo')
      RainSound.pause()
      CoffeSound.pause()
      FireSound.pause()
  }

  function rainPlay(){
      buttonForestSound.classList.remove('ativo')
      buttonRainSound.classList.toggle('ativo')
      buttonCoffeSound.classList.remove('ativo')
      buttonFireSound.classList.remove('ativo')
      ForestSound.pause()
      RainSound.play()
      CoffeSound.pause()
      FireSound.pause()
  }

  function coffePlay(){
      buttonForestSound.classList.remove('ativo')
      buttonRainSound.classList.remove('ativo')
      buttonCoffeSound.classList.toggle('ativo')
      buttonFireSound.classList.remove('ativo')
      ForestSound.pause()
      RainSound.pause()
      CoffeSound.play()
      FireSound.pause()
  }

  function firePlay(){
      buttonForestSound.classList.remove('ativo')
      buttonRainSound.classList.remove('ativo')
      buttonCoffeSound.classList.remove('ativo')
      buttonFireSound.classList.toggle('ativo')
      ForestSound.pause()
      RainSound.pause()
      CoffeSound.pause()
      FireSound.play()
  }

  return {
    toggleMode,
    forestsPlay,
    rainPlay,
    coffePlay,
    firePlay
  }
}