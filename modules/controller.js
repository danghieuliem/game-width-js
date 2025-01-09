class Controller {
  constructor() {
    const slider = document.getElementById('slider')
    slider.value = gameSpeed

    const showGameSpeed = document.getElementById('showGameSpeed')
    showGameSpeed.innerText = gameSpeed

    slider.addEventListener('change', (e) => {
      gameSpeed = e.target.value
      showGameSpeed.innerText = gameSpeed
    })
  }
}
