'use strict';

var SdfdsffPage = require('../../src/js/pages/sdfdsffPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('sdfdsff', function() {

  var sdfdsffPage;

  beforeEach(function () {
    sdfdsffPage = new SdfdsffPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      sdfdsffPage.setButtonEvents();
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
      sdfdsffPage.render();
      var html = sdfdsffPage.$el.html();
      expect(html).toContainText('sdfdsff');
    });

    it('returns the view object', function() {
      expect(sdfdsffPage.render()).toEqual(sdfdsffPage);
    });

  });

});
