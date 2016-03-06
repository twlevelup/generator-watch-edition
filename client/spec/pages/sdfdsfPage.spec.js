'use strict';

var SdfdsfPage = require('../../src/js/pages/sdfdsfPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('sdfdsf', function() {

  var sdfdsfPage;

  beforeEach(function () {
    sdfdsfPage = new SdfdsfPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      sdfdsfPage.setButtonEvents();
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
      sdfdsfPage.render();
      var html = sdfdsfPage.$el.html();
      expect(html).toContainText('sdfdsf');
    });

    it('returns the view object', function() {
      expect(sdfdsfPage.render()).toEqual(sdfdsfPage);
    });

  });

});
