var properties = require('./src/js/game/properties.js')

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-cache-bust')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-mkdir')
  grunt.loadNpmTasks('grunt-open')
  grunt.loadNpmTasks('grunt-pngmin')

  var productionBuild = !!(grunt.cli.tasks.length && grunt.cli.tasks[0] === 'build')

  grunt.initConfig(
    { pkg: grunt.file.readJSON('package.json')

    , project:
      { src: 'src/js'
      , js: '<%= project.src %>/game/{,*/}*.js'
      , dest: 'build/js'
      , bundle: 'build/js/app.min.js'
      , port: properties.port
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
        { files: 'src/templates/*.jade'
        , tasks: ['jade']
        }
      , stylus:
        { files: 'src/style/*.styl'
        , tasks: ['stylus']
        }
      , images:
        { files: 'src/images/**/*'
        , tasks: ['copy:images']
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
              [ 'build/index.html'
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
          { 'build/index.html': ['src/templates/index.jade']
          }
        }
      }

    , stylus:
      { compile:
        { files:
          { 'build/style/game.css': ['src/style/*.styl'] }
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
            [ { src: 'src/images/*.png'
              , dest: 'src/images/'
              }
            ]
          }
        }

    , mkdir:
      { all:
        { options:
          { create: ['build/style', 'build/js', 'build/images']
          }
        }
      }

    , copy:
      { images:
        { files:
          [ { expand: true, cwd: 'src/images/', src: ['**'], dest: 'build/images/' }
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
    [ 'clean'
    , 'browserify'
    , 'jade'
    , 'stylus'
    , 'copy:images'
    , 'cacheBust'
    , 'connect'
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
    , 'copy:images'
    , 'cacheBust'
    , 'mkdir'
    , 'copy'
    , 'connect'
    , 'open'
    , 'watch'
    ]
  )

  grunt.registerTask('optimise', ['pngmin'])
}
