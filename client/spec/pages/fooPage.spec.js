'use strict';

var FooPage = require('../../src/js/pages/fooPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('foo', function() {

  var fooPage;

  beforeEach(function () {
    fooPage = new FooPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      fooPage.setButtonEvents();
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
      fooPage.render();
      var html = fooPage.$el.html();
      expect(html).toContainText('foo');
    });

    it('returns the view object', function() {
      expect(fooPage.render()).toEqual(fooPage);
    });

  });

});
