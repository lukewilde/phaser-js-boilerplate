var Phaser = require('Phaser')
  , properties = require('./properties')
  , boot = require('./states/boot.js')
  , game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');

game.state.add('boot', boot(game));

game.state.start('boot');
