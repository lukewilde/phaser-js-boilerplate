var Stats = require('Stats')
  , properties = require('../properties')
  , boot = {};

boot.create = function () {

  if (properties.showStats) {
    addStats();
  }

  this.game.sound.mute = properties.mute;

  this.game.state.start('preloader');
};

function addStats() {
  var stats = new Stats();

  stats.setMode(0);

  stats.domElement.style.position = 'absolute';
  stats.domElement.style.right = '0px';
  stats.domElement.style.top = '0px';

  document.body.appendChild(stats.domElement);

  setInterval(function () {
    stats.begin();
    stats.end();
  }, 1000 / 60);
}

module.exports = boot;
