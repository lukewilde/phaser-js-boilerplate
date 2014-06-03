var makeBootState = function(game) {

  function preload () {
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust')
  }

  function create() {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo')
    logo.anchor.setTo(0.5, 0.5)
  }

  var boot =
      { preload: preload
      , create: create
      }

  return boot
}

module.exports = makeBootState
