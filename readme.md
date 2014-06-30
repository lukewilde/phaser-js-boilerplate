# A Phaser.js Boilerplate

A template to boost the productivity of Phaser.js game developers. Provides tools to improve code reuse, assist in development activities, and can package projects into production ready bundles.

## What's in the Box

* [NPM](https://www.npmjs.org/) via [Browserify](http://browserify.org/)
* [Jade](http://jade-lang.com/)
* [Stylus](http://learnboost.github.io/stylus/)
* [Lodash](http://lodash.com/)
* [JsHint](http://www.jshint.com/)
* [Uglify.js](https://github.com/mishoo/UglifyJS)
* [Source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
* [Stats.js](https://github.com/mrdoob/stats.js/)
* [Image optimisation tools](http://pngquant.org/)
* Livereload (auto refresh)
* Cache busted assets
* Zip compression
* [.gitignore](https://github.com/serby/GitIgnore)

## Installing

### Node.js and Grunt

You will need to first install [Node.js](http://nodejs.org/download/) and the grunt-cli: `npm install -g grunt-cli`.

### Setup Your Project

Download and unpack [The Phaser.js Boilerplate](https://github.com/lukewilde/phaser-blank/archive/master.zip). Or alternatively checkout from source:

    git clone git@github.com:lukewilde/phaser-blank.git my-sweet-game
    cd my-sweet-game
    git remote rename origin blank

Next you need to install the projects various NPM dependencies:

    npm install

And you should finally be ready to spin up a development build of your new project:

    grunt

### Available Targets

    grunt

Configures and runs a development build optimised for fast watch performance, running with source maps and live reload.

    grunt build

Creates a production ready build of the application.

    grunt optimise

Lossy compression of all png's in the `build/images/` directory using pngquant.

(Linux users will need to have a version of [pngquant](http://pngquant.org/) available on their paths).

### Keep Phaser.js Up To Date

The project comes with an unminified version of Phaser with Arcade physics, this can be replaced if you require updates or one of the alternate physics engines. When updating you'll have to update the Browserify shims configuration found in the projects `package.json`.

## Created with Contributors and Inspiration from

  * [Luke Wilde](http://lukewilde.co.uk)
  * The retired https://github.com/luizbills/phaser-js-boilerplate
  * [Craig Beswetherick](http://grindheadgames.com)
