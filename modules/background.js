const rootPath = './assets/background/'

class Layer {
  constructor(img, speedModi) {
    this.x = 0
    this.y = 0
    this.width = 2400
    this.height = 700
    this.x2 = this.width
    this.image = img
    this.speedModifier = speedModi
    this.speed = gameSpeed * this.speedModifier
  }
  update() {
    this.speed = gameSpeed * this.speedModifier
    if (this.x <= -this.width) this.x = 0
    this.x = this.x - this.speed
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    )
  }
}

class BackGround {
  constructor() {
    const backgroundLayer1 = new Image()
    const backgroundLayer2 = new Image()
    const backgroundLayer3 = new Image()
    const backgroundLayer4 = new Image()
    const backgroundLayer5 = new Image()

    backgroundLayer1.src = `${rootPath}layer-1.png`
    backgroundLayer2.src = `${rootPath}layer-2.png`
    backgroundLayer3.src = `${rootPath}layer-3.png`
    backgroundLayer4.src = `${rootPath}layer-4.png`
    backgroundLayer5.src = `${rootPath}layer-5.png`

    const layer1 = new Layer(backgroundLayer1, 0)
    const layer2 = new Layer(backgroundLayer2, 0.3)
    const layer3 = new Layer(backgroundLayer3, 0.2)
    const layer4 = new Layer(backgroundLayer4, 0.5)
    const layer5 = new Layer(backgroundLayer5, 1)

    this.layers = [layer1, layer2, layer3, layer4, layer5]
  }

  updateAndDraw() {
    this.layers.forEach((layer) => {
      layer.update()
      layer.draw()
    })
  }
}
