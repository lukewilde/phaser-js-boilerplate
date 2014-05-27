module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.initConfig(
    { pkg: grunt.file.readJSON('package.json')

    , project:
      { src: 'public/js/src/'
      , dest: 'public/js/bundle.js'
      , port: 3017
      , js: '<%= project.src %>/game/{,*/}*.js'
      , lib: '<%= project.src %>/lib/'
      , phaser: '<%= project.lib %>/phaser.arcade.js'
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
        { files: '<%= project.src %>/{,*/}*.js'
        , tasks: ['jshint', 'browserify']
      }
      }

    , browserify:
      { build:
        { src: ['<%= project.src %>/game/app.js']
        , dest: '<%= project.dest %>'
        }
      , bundleOptions: { debug: true }
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
    }
  )

  grunt.registerTask('default',
    [ 'browserify'
    , 'connect'
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
