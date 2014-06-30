var Stats = require('Stats')
  , properties = require('../properties')

module.exports = function(game) {

  var boot = {}

  function addStats() {
    var stats = new Stats()

    stats.setMode(0)

    stats.domElement.style.position = 'absolute'
    stats.domElement.style.left = '0px'
    stats.domElement.style.top = '0px'

    document.body.appendChild(stats.domElement)

    setInterval(function () {
      stats.begin()
      stats.end()
    }, 1000 / 60)
  }

  boot.preload = function () {
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust')
  }

  boot.create = function () {

    if (properties.showStats) {
      addStats()
    }

    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo')
    logo.anchor.setTo(0.5, 0.5)
  }

  return boot
}
