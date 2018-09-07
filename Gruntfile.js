module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        stripBanners: false,
        banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: {
          'builds/bfe.js': ['build_support/mini_require.js',
            'src/bfe.js',
            'src/bfestore.js',
            'src/bfelogging.js',
            'src/bfelookups.js',
            'src/lib/aceconfig.js'],
          'builds/bfe.css': ['src/css/bootstrap.css', 'src/css/typeahead.css']
        }
      }
    },
    uglify: {
      options: {
        stripBanners: true,
        banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: [
          { src: 'builds/bfe.js', dest: 'builds/bfe.min.js' }
        ]
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
        }
      },
      combine: {
        files: {
          'builds/bfe.min.css': ['builds/bfe.css']
        }
      }
    },
    eslint: {
        target: ['src/*.js',
                 '__tests__/*.js']
    }

  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-concat')

  // This order builds crappy js code in builds, should move eslint tasks to
  // run before concat
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'eslint'])
  grunt.registerTask('test', ['eslint'])

}
