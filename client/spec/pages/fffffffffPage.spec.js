'use strict';

var FffffffffPage = require('../../src/js/pages/fffffffffPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('fffffffff', function() {

  var fffffffffPage;

  beforeEach(function () {
    fffffffffPage = new FffffffffPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      fffffffffPage.setButtonEvents();
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
      fffffffffPage.render();
      var html = fffffffffPage.$el.html();
      expect(html).toContainText('fffffffff');
    });

    it('returns the view object', function() {
      expect(fffffffffPage.render()).toEqual(fffffffffPage);
    });

  });

});
