import PIXI from 'pixi.js'

// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
let renderer = new PIXI.WebGLRenderer(800, 600)

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view)

// You need to create a root container that will hold the scene you want to draw.
let stage = new PIXI.Container()

// This creates a texture from a 'bunny.png' image.
let bunnyTexture = PIXI.Texture.fromImage('bunny.png')
let bunny = new PIXI.Sprite(bunnyTexture)

// Setup the position and scale of the bunny
bunny.position.x = 400
bunny.position.y = 300

bunny.scale.x = 0.5
bunny.scale.y = 0.5

// Add the bunny to the scene we are building.
stage.addChild(bunny)

// kick off the animation loop (defined below)
animate()

function animate() {
  // start the timer for the next animation loop
  requestAnimationFrame(animate)

  // each frame we spin the bunny around a bit
  bunny.rotation += 0.04

  // this is the main render call that makes pixi draw your container and its children.
  renderer.render(stage)
}
