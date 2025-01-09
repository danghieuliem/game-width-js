const playerCanvas = document.getElementById('player')
/** @type {CanvasRenderingContext2D} */
const playerCtx = playerCanvas.getContext('2d')

playerCanvas.height = 200
playerCanvas.width = 200

class Player {
  constructor() {
    const image = new Image()
    image.src = './assets/player/shadow_dog.png'
    this.playerImage = image
    this.spriteWidth = 575
    this.spriteHeight = 523
    this.staggerFrames = 8
    this.spriteAnimations = {}
    this.playerState = 'run'
    this.animationStates = [
      {
        name: 'idle',
        frames: 7,
      },
      {
        name: 'jump',
        frames: 7,
      },
      {
        name: 'fall',
        frames: 7,
      },
      {
        name: 'run',
        frames: 9,
      },
      {
        name: 'dizzy',
        frames: 11,
      },
      {
        name: 'sit',
        frames: 5,
      },
      {
        name: 'roll',
        frames: 7,
      },
      {
        name: 'bite',
        frames: 7,
      },
      {
        name: 'ko',
        frames: 12,
      },
      {
        name: 'getHit',
        frames: 4,
      },
    ]
    this.animationStates.forEach((state, index) => {
      const frames = {
        loc: [],
      }
      for (let j = 0; j < state.frames; j++) {
        const positionX = j * this.spriteWidth
        const positionY = index * this.spriteHeight
        frames.loc.push({ x: positionX, y: positionY })
      }
      this.spriteAnimations[state.name] = frames
    })
  }

  draw() {
    playerCtx
    const position =
      Math.floor(gameFrame / (this.staggerFrames / (gameSpeed * (15 / 100)))) %
      this.spriteAnimations[this.playerState].loc.length

    let frameX = this.spriteWidth * position

    const frameY = this.spriteAnimations[this.playerState].loc[position].y
    playerCtx.clearRect(0, 0, playerCanvas.width, playerCanvas.height)
    playerCtx.drawImage(
      this.playerImage,
      frameX,
      frameY,
      this.spriteWidth,
      this.spriteHeight,
      0,
      0,
      playerCanvas.width,
      playerCanvas.height
    )

    if (gameFrame % this.staggerFrames === 0)
      if (frameX < 6) frameX++
      else frameX = 0
  }

  initController() {
    const control = document.getElementById('animations')
    control.value = this.playerState
    control.addEventListener('change', (e) => {
      this.playerState = e.target.value
    })

    window.addEventListener('keydown', (e) => {
      console.log('keydown', e.key)
      switch (e.key) {
        case 's':
          this.playerState = 'sit'
          break
        case ' ':
          this.playerState = 'jump'
          break
        case 'd':
          this.playerState = 'run'
          break
        case 'k':
          this.playerState = 'bite'
          break
      }
    })

    window.addEventListener('keyup', (e) => {
      console.log('keyup', e.key)
      switch (e.key) {
        case 's':
          this.playerState = 'run'
          break
        case ' ':
          this.playerState = 'fall'
          break
        case 'k':
          this.playerState = 'run'
          break
      }
    })
  }
}
