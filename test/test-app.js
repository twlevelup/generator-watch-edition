'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

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

  describe('creating new files', function () {

    it('should create the spec file', function () {
      var expectedFile = 'client/spec/pages/anotherTestPage.spec.js';
      assert.file(expectedFile);
    });

    it('should create the JS file', function () {
      var expectedFile = 'client/src/js/pages/anotherTestPage.js';
      assert.file(expectedFile);
    });

    it('should create the SCSS file', function () {
      var expectedFile = 'client/src/styles/pages/_anotherTestPage.scss';
      assert.file(expectedFile);
    });

    it('should create the template file', function () {
      var expectedFile = 'client/src/templates/pages/anotherTestPage.hbs';
      assert.file(expectedFile);
    });

  });

  describe('end', function () {
    it('should tell you what to do next');
  });


});
