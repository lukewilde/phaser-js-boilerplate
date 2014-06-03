var Phaser = require('Phaser')
  , game = new Phaser.Game(800, 600, Phaser.AUTO, '')
  , boot = require('./states/boot.js')

game.state.add('boot', boot(game))

game.state.start('boot')
