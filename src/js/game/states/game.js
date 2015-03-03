var Phaser = require('Phaser');

module.exports = function(game) {

  var gameState = new Phaser.State();
  var logo = null;

  gameState.create = function () {
    logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    logo.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(logo);
  };

  gameState.update = function () {
    console.log('update')

  }
  gameState.render = function () {
    console.log('render')
    game.debug.body(logo);
  };

  return gameState;
};
