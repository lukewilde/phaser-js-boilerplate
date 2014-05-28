var shims = Object.keys(require('./shims'))

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-cache-bust')

  grunt.initConfig(
    { pkg: grunt.file.readJSON('package.json')

    , project:
      { src: 'public/js/src'
      , dest: 'public/js/build'
      , port: 3017
      , js: '<%= project.src %>/game/{,*/}*.js'
      , phaser: '<%= project.lib %>/phaser.arcade.js'
      , banner:
        '/*!\n' +
        ' * <%= pkg.title %>\n' +
        ' * <%= pkg.description %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
        ' * Made using Phaser JS Boilerplate <https://github.com/luizbills/phaser-js-boilerplate/>' +
        ' */\n'
      }

    , connect:
      { server:
        { options:
          { port: '<%= project.port %>'
          , base: './public'
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
      { browserify:
        { files: '<%= project.src %>/{,*/}*.js'
        , tasks: ['browserify:app', 'concat']
        }
      }

    , browserify:
      { libs:
        { src: []
        , dest: '<%= project.dest %>/libs.js'
        , options:
          { transform: ['browserify-shim']
          , require: shims
          , bundleOptions:
            { debug: true
            }
          }
        }
      , app:
        { src: ['<%= project.src %>/game/app.js']
        , dest: '<%= project.dest %>/app.js'
        , options:
          { bundleOptions:
            { debug: true
            }
          , external: shims
          }
        }
      }

    , concat:
      { options:
        { separator: ';'
        }
      , dist:
        { src: ['<%= project.dest %>/libs.js', '<%= project.dest %>/app.js']
        , dest: '<%= project.dest %>/bundle.js'
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
          [
            { src:
              [ 'public/index.html'
              , '<%= project.dest %>/app.html'
              , '<%= project.dest %>/lib.html'
              ]
            }
          ]
        }
      }

    , uglify:
      { options:
        { banner: '<%= project.banner %>'
        }
      , dist:
        { files:
          { '<%= project.dest %>/app.js': '<%= project.dest %>/app.js'
          , '<%= project.dest %>/lib.js': '<%= project.dest %>/lib.js'
          }
        }
      }
    }
  )

  grunt.registerTask('default',
    [ 'browserify:libs'
    , 'browserify:app'
    , 'connect'
    , 'watch'
    ]
  )

  grunt.registerTask('build',
    [ 'jshint'
    , 'browserify:libs'
    , 'browserify:app'
    , 'cacheBust'
    , 'uglify'
    ]
  )
}
