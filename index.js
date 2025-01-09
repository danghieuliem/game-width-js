const canvas = document.getElementById('mainCanvas')
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

let gameSpeed = 7
let gameFrame = 0

const CANVAS_WIDTH = (canvas.width = 800)
const CANVAS_HEIGHT = (canvas.height = 700)

window.addEventListener('load', () => {
  const background = new BackGround()

  const controller = new Controller()

  const player = new Player()

  player.initController()

  const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    background.updateAndDraw()
    player.draw()

    gameFrame++
    requestAnimationFrame(animate)
  }

  animate()
})
