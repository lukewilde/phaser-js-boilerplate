var properties = require('./public/js/src/game/properties.js')

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-cache-bust')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-open')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-pngmin')
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-mkdir')
  grunt.loadNpmTasks('grunt-contrib-copy')

  var productionBuild = !!(grunt.cli.tasks.length && grunt.cli.tasks[0] === 'build')

  grunt.initConfig(
    { pkg: grunt.file.readJSON('package.json')

    , project:
      { src: 'public/js/src'
      , js: '<%= project.src %>/game/{,*/}*.js'
      , dest: 'public/js'
      , bundle: 'public/js/app.min.js'
      , port: properties.port
      , phaser: '<%= project.lib %>/phaser.arcade.js'
      , banner:
        '/*!\n' +
        ' * <%= pkg.title %>\n' +
        ' * <%= pkg.description %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * Copyright <%= pkg.author %>. <%= pkg.license %> licensed.\n' +
        ' * Made using Phaser Blank <https://github.com/lukewilde/phaser-blank/>\n' +
        ' */\n'
      }

    , connect:
      { dev:
        { options:
          { port: '<%= project.port %>'
          , base: './public'
          }
        }
      , build:
        { options:
          { port: '<%= project.port %>'
          , base: './build'
          }
        }
      }

    , jshint:
      { files:
        [ 'gruntfile.js'
        , '<%= project.js %>'
        ]
      , options:
        { jshintrc: '.jshintrc'
        }
      }

    , watch:
      { options:
        { livereload: !productionBuild
        }
      , js:
        { files: '<%= project.dest %>/**/*.js'
        }
      , jade:
        { files: 'templates/*.jade'
        , tasks: ['jade']
        }
      , stylus:
        { files: 'public/css/*.styl'
        , tasks: ['stylus']
        }
      }

    , browserify:
      { app:
        { src: ['<%= project.src %>/game/app.js']
        , dest: '<%= project.bundle %>'
        , options:
          { transform: ['browserify-shim']
          , watch: true
          , bundleOptions:
            { debug: !productionBuild
            }
          }
        }
      }

    , open:
      { server:
        { path: 'http://localhost:<%= project.port %>'
        }
      }

    , cacheBust:
      { options:
        { encoding: 'utf8'
        , algorithm: 'md5'
        , length: 8
        }
      , assets:
        { files:
          [ { src:
              [ 'public/index.html'
              , '<%= project.bundle %>'
              ]
            }
          ]
        }
      }

    , jade:
      { compile:
        { options:
          { data:
            { properties: properties
            , productionBuild: productionBuild
            }
          }
        , files:
          { 'public/index.html': ['templates/index.jade']
          }
        }
      }

    , stylus:
      { compile:
        { files:
          { 'public/css/game.css': ['public/css/*.styl'] }
        , options:
          { sourcemaps: !productionBuild
          }
        }
      }

    , clean: ['./build/']

    , pngmin:
      { options:
        { ext: '.png'
        , force: true
        }
      , compile:
        { files:
            [ { src: 'public/images/*.png'
              , dest: 'public/images/'
              }
            ]
          }
        }

    , mkdir:
      { all:
        { options:
          { create: ['build/css', 'build/js', 'build/images']
          }
        }
      }

    , copy:
      { main:
        { files:
          [ { expand: true, flatten: true, src: ['public/images/*'], dest: 'build/images/' }
          , { expand: true, flatten: true, src: ['public/css/game.css'], dest: 'build/css/' }
          , { expand: true, flatten: true, src: ['public/js/app.min.js'], dest: 'build/js/' }
          , { expand: true, flatten: true, src: ['public/index.html'], dest: 'build/' }
          ]
        }
      }

    , uglify:
      { options:
        { banner: '<%= project.banner %>'
        }
      , dist:
        { files:
          { '<%= project.bundle %>': '<%= project.bundle %>'
          }
        }
      }
    }
  )

  grunt.registerTask('default',
    [ 'browserify'
    , 'jade'
    , 'stylus'
    , 'cacheBust'
    , 'connect:dev'
    , 'open'
    , 'watch'
    ]
  )

  grunt.registerTask('build',
    [ 'jshint'
    , 'clean'
    , 'browserify'
    , 'jade'
    , 'stylus'
    , 'uglify'
    , 'cacheBust'
    , 'mkdir'
    , 'copy'
    , 'connect:build'
    , 'open'
    , 'watch'
    ]
  )

  grunt.registerTask('optimise', ['pngmin'])
}
