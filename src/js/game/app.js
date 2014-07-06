var Phaser = require('Phaser')
  , properties = require('./properties')
  , states =
    { boot: require('./states/boot.js')
    , preloader: require('./states/preloader.js')
    , game: require('./states/game.js')
    }
  , game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');

game.state.add('boot', states.boot(game));
game.state.add('preloader', states.preloader(game));
game.state.add('game', states.game(game));

game.state.start('boot');
