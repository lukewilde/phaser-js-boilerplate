var preloader = {};

preloader.preload = function () {
  this.game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
};

preloader.create = function () {
  this.game.state.start('game');
};

module.exports = preloader;
