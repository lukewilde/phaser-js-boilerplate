var Phaser = require('Phaser')
  , game = new Phaser.Game(800, 600, Phaser.AUTO, '')
  , boot = require('./screens/boot.js')

  game.state.add('boot', boot(game))
