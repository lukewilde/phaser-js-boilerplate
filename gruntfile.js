module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-open')

  grunt.initConfig(
    { pkg: grunt.file.readJSON('package.json')

    , project:
      { src: 'public/js/src/'
      , dest: 'public/js/build/bundle.js'
      , port: 3017
      , js: '<%= project.src %>/game/{,*/}*.js'
      , phaser: '<%= project.src %>/lib/phaser.arcade.js'
      }

    , tag:
      { banner:
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
        { files: '<%= project.src %>/js/{,*/}*.js'
        , tasks: ['jshint', 'browserify']
        }
      }

    , browserify:
      { build:
        { src: ['<%= project.src %>/game/app.js']
        , dest: '<%= project.dest %>'
        , options:
          { alias:
            [ '<%= project.phaser %>:Phaser'
            ]
          , shim:
            { 'Phaser':
              { path: '<%= project.phaser %>'
              , exports: null
              }
            }
          }
        }
      }

    , uglify:
      { options:
        { banner: '<%= tag.banner %>'
        }
      , dist:
        { files:
          { '<%= project.dest %>': '<%= project.dest %>'
          }
        }
      }

    , open:
      { dev:
        { path: 'http://localhost:<%= project.port %>/index.html'
        }
      }
    }
  )

  grunt.registerTask('default',
    [ 'jshint'
    , 'browserify'
    , 'connect'
    , 'open'
    , 'watch'
    ]
  )

  grunt.registerTask('build',
    [ 'jshint'
    , 'browserify'
    , 'uglify'
    ]
  )
}
