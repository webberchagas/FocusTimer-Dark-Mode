export function Timer({
  minutesDisplay,
  secondsDisplay,
  timeEnd
}){
  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes 
    seconds = seconds === undefined ? 0 : seconds 
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function countdown(){
    timerTimeout = setTimeout(function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinish = minutes <=0 && seconds <=0
  
      if(isFinish){
        timeEnd()
        updateDisplay()
        return
      }
    
      if(seconds <= 0){
        seconds = 2
        --minutes
      }
  
      updateDisplay(minutes, seconds -1)
    
      countdown()
    }, 1000)
  }

  function reset(){
    clearTimeout(timerTimeout)
    updateDisplay()
  }

  function plus(){
    reset()
    if(minutes <= 55){
      minutes = minutes + 5
      updateDisplay()
    }
  }

  function minus(){
    reset()
    if(minutes > 5){
      minutes = minutes - 5
      updateDisplay()
    }
  }

  return {
    updateDisplay,
    countdown,
    reset,
    plus,
    minus
  }
}
