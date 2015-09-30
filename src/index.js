import PIXI from 'pixi.js'

function animate(previousState, cb) {
  // Get input, calculate next state
  let nextState = { ...previousState }

  // Queue up next frame with next state
  requestAnimationFrame(() => animate(nextState, cb))

  // Perform draw with current state
  cb(nextState)
}

function preAnimateSetup() {
  let renderer = new PIXI.WebGLRenderer(800, 400)
  let stage = new PIXI.Container()

  // // Sprite setup
  // let texture = PIXI.Texture.fromImage('bunny.png')
  // let sprite = new PIXI.Sprite(texture)

  // sprite.scale.set(0.4)

  // // Add sprites
  // stage.addChild(sprite)

  return { renderer, stage }
}

let initialState = {
  _unsafe: { ...preAnimateSetup() }
}

document.body.appendChild(initialState._unsafe.renderer.view)

animate(initialState, function animateCb(state) {
  state._unsafe.renderer.render(state._unsafe.stage)
})
