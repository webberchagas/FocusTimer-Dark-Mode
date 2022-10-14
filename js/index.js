import { Timer } from './timer.js'
import { Sound } from './sound.js'
import { Controls } from './controls.js'
import { Events } from './events.js'

import {
  minutesDisplay,
  secondsDisplay,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeSound,
  buttonFireSound,
  btnLightMode,
  btnDarkMode
} from './elements.js'

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timeEnd: sound.timeEnd
})



const controls = Controls({
  buttonForestSound,
  buttonRainSound,
  buttonCoffeSound,
  buttonFireSound,
  ForestSound: sound.ForestSound,
  RainSound: sound.RainSound,
  CoffeSound: sound.CoffeSound,
  FireSound: sound.FireSound,
  btnLightMode,
  btnDarkMode
})


Events({controls, timer, sound})