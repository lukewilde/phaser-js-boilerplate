(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Phaser = require('Phaser')
  , game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create })

function preload () {
  game.load.image('logo', 'images/phaser.png')
}

function create () {
  var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo')
  logo.anchor.setTo(0.5, 0.5)
}

},{"Phaser":false}]},{},[1])