'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('watch-page:app', function () {

  var prompts = {
    pageName: 'another test'
  };

  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts)
      .inTmpDir()
      .on('end', done);
  });

  it('creates the expected files', function () {
    var expectedFiles = [
      'client/spec/pages/anotherTestPage.spec.js',
      'client/src/js/pages/anotherTestPage.js',
      'client/src/styles/pages/_anotherTestPage.scss',
      'client/src/templates/pages/anotherTestPage.hbs'
    ];
    assert.file(expectedFiles);
  });

  it('should tell you what to do next');

});
