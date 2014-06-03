# Another Phaser.js Boilerplate

https://github.com/photonstorm/phaser

## Why

* Browserify
* Source maps
* JsHint
* Cache busted assets
* Image optimisation tools
* Lodash
* Uglify.js
* Jade
* Stylus
* Live reload

## How

    git clone git@github.com:lukewilde/phaser-blank.git
    cd phaser-blank
    git remote rename origin blank
    npm install
    grunt

### Available targets

#### grunt default

Configures and runs a development build optimised for fast watch performance.

#### grunt build

Creates a production ready build of the application.

#### grunt optimise

Lossy compression of all png's in the `public/images/` directory using pngquant.

(Linux users will need to have a version of [pngquant](http://pngquant.org/) available on their paths).

## Who

  Built with some ideas from the retired https://github.com/luizbills/phaser-js-boilerplate
