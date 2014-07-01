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
* Cache busted assets (WIP)
* Zip compression
* [.gitignore](https://github.com/serby/GitIgnore)

## Installing

### Node.js and Grunt

You will need to first install [Node.js](http://nodejs.org/download/) and the grunt-cli: `npm install -g grunt-cli`.

### Setup Your Project

Download and unpack [The Phaser.js Boilerplate](https://github.com/lukewilde/phaser-js-boilerplate/archive/master.zip). Or alternatively checkout from source:

    git clone git@github.com:lukewilde/phaser-js-boilerplate.git my-sweet-game
    cd my-sweet-game
    git remote rename origin boilerplate

Next, inside the project, you need to install the project's various NPM dependencies:

    npm install

And you should now be ready to spin up a development build of your new project:

    grunt

## Developing

All of the files required to run the game will live in the `src` folder, this will include any JavaScript, images, HTML ([Jade](http://jade-lang.com/)), and CSS ([Stylus](http://learnboost.github.io/stylus/)). When the default grunt task is invoked, these files are compiled to a `build` directory.

Files in the `build` directory will always be generated and excluded from Git by the `.gitignore`, as such these will removed without warning and should generally not be edited.

### Recommendations

* Use relative file paths for any assets loaded by your HTML or JavaScript. This will negate any potential path issues when the game is later uploaded to a webserver.
* If working with [Texture Atlases](http://en.wikipedia.org/wiki/Texture_atlas) create an `assets` directory and place individual sprites and template files in here. Output your atlases and their associated data to the `src/images` directory.
* Borwserify is crazy powerful. I'm not going to quote Spiderman, but you should definitely check out [Substack's Browserify Handbook](https://github.com/substack/browserify-handbook).

### Updating or Adding Libraries

The project comes with an unminified version of Phaser with arcade physics, this can be replaced if you require updates or one of the alternate physics engines.

When adding new libraries that aren't CommonJS compatible, you'll have to update the [Browserify Shim configuration](https://github.com/thlorenz/browserify-shim#you-will-always).

### Available Targets

    grunt

Configures and runs an unminified development build optimised for fast watch performance with source maps and live reload.

    grunt build

Creates an uglified, production ready build with no source maps.

    grunt optimise

Lossy compression of all png's in the `src/images/` directory using [pngquant](http://pngquant.org/).

(Linux users will need to have a version of pngquant available on their paths).

    grunt zip

Compiles the current build into `build/{title}.zip` with an internal folder. This is intended for use when transferring the build to a third party for upload webserver.

    grunt cocoon

Compiles the current build into `build/{title}.zip` ready for upload to [CocoonJs](https://www.ludei.com/cocoonjs/).

### Coding Style and Linting

I follow [Ben Gourley's JavaScript Style Guide](https://github.com/bengourley/js-style-guide).

## Created with contributions and inspiration from

  * [Craig Beswetherick](http://grindheadgames.com)
  * [Jesse Freeman's Phaser template](https://github.com/gamecook/phaser-project-template)
  * The retired https://github.com/luizbills/phaser-js-boilerplate
