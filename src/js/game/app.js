var Phaser = require('Phaser')
  , properties = require('./properties')
  , game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, '')
  , boot = require('./states/boot.js')

game.state.add('boot', boot(game))

game.state.start('boot')
