/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Clean up dumb artifacts/ghost files
    clean: ['**/._*', '**/.DS_Store'],
    watch: {
      src: {
        files: ['src/**/*.js', 'spec/*.js'],
        tasks: ['clean', 'jasmine', 'jshint', 'concat', 'uglify'],
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/*.js',
      }
    },
    concat: {
      dist: {
        src: ['src/*.js'],
        dest: 'dist/my-library.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      lib: {
        files: {
          'dist/my-library.min.js': ['dist/my-library.js']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jasmine', 'jshint', 'concat', 'uglify']);
};

