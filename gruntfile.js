module.exports = function (grunt) {

  grunt.initConfig(
    { pkg: grunt.file.readJSON('package.json')
    , connect:
      { server:
        { options:
          { port: 8080
          , base: './build'
          }
        }
      }
    , concat:
      { dist:
        { src:
          [ 'src/lib/**/*.js'
          , 'src/game/**/*.js'
          ]
        , dest: 'build/js/<%= pkg.name %>.js'
        }
      }
    , watch:
      { files: 'src/**/*.js'
      , tasks: ['concat']
      }
    , open:
      { dev:
        { path: 'http://localhost:8080/index.html'
        }
      }
    }
  )

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-open')
  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.registerTask('default', ['concat', 'connect', 'open', 'watch'])
}
