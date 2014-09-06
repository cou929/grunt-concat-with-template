/*
 * grunt-concat-with-template
 * https://github.com/cou929/grunt-concat-with-template
 *
 * Copyright (c) 2014 Kosei Moriyama
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp']
    },

    concat_with_template: {
      test: {
        src: {
            script: 'test/fixtures/src_script.js',
            style: 'test/fixtures/src_style.css'
        },
        dest: 'tmp/test.html',
        tmpl: 'test/fixtures/template.html'
      },
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'concat_with_template', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
