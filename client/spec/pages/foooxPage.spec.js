'use strict';

var FoooxPage = require('../../src/js/pages/foooxPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('fooox', function() {

  var foooxPage;

  beforeEach(function () {
    foooxPage = new FoooxPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      foooxPage.setButtonEvents();
    });

    describe('left', function () {

      xit('should have tests');

    });

    describe('right', function () {

      xit('should have tests');

    });

    describe('top', function () {

      xit('should have tests');

    });

    describe('bottom', function () {

      xit('should have tests');

    });

    describe('face', function () {

      xit('should have tests');

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      foooxPage.render();
      var html = foooxPage.$el.html();
      expect(html).toContainText('fooox');
    });

    it('returns the view object', function() {
      expect(foooxPage.render()).toEqual(foooxPage);
    });

  });

});
