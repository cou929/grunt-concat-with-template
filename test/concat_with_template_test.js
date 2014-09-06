'use strict';

var grunt = require('grunt');

exports.concat_with_template = {
  default_options: function(test) {
    var actual = grunt.file.read('tmp/test.html');
    var expected = grunt.file.read('test/expected/test.html');
    test.equal(actual, expected, 'should expand and concatinate files into template');

    test.done();
  }
};
