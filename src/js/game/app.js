var Phaser = require('Phaser')
  , _ = require('lodash')
  , properties = require('./properties')
  , states =
    { boot: require('./states/boot.js')
    , preloader: require('./states/preloader.js')
    , game: require('./states/game.js')
    }
  , game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');

// Automatically register each state.
_.each(states, function(state, key) {
  game.state.add(key, state);
});

game.state.start('boot');
