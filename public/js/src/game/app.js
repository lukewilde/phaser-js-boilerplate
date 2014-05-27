require('Phaser')

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container');

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('MainMenu', require('./states/main-menu'));
game.state.add('Game', require('./states/game'));

game.state.start('Boot');
