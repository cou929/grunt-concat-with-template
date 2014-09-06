/*
 * grunt-concat-with-template
 * https://github.com/cou929/grunt-concat-with-template
 *
 * Copyright (c) 2014 Kosei Moriyama
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('concat_with_template', 'Concatenate scripts or stylesheets with template.', function() {

    var vars = {};
    var src = this.data.src;
    Object.keys(src).map(function(key) {
      var content = grunt.file.read(src[key]);
      vars[key] = content;
    });

    var tmpl = grunt.file.read(this.data.tmpl);
    var result = grunt.template.process(tmpl, {data: vars});

    grunt.file.write(this.data.dest, result);

    grunt.log.oklns('File "' + this.data.dest + '" created.');
  });

};
