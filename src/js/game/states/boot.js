var Stats = require('Stats')
  , properties = require('../properties');

module.exports = function(game) {

  var boot = {};

  function addStats() {
    var stats = new Stats();

    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);

    setInterval(function () {
      stats.begin();
      stats.end();
    }, 1000 / 60);
  }

  boot.create = function () {

    if (properties.showStats) {
      addStats();
    }

    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();

    game.state.start('preloader');
  };

  return boot;
};
