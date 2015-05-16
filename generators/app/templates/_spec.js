'use strict';

var <%= className %> = require('../../src/js/pages/<%= filesNames.page %>'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('<%= title %>', function() {

  var <%= instanceName %>;

  beforeEach(function () {
    <%= instanceName %> = new <%= className %>();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      <%= instanceName %>.setButtonEvents();
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
      <%= instanceName %>.render();
      var html = <%= instanceName %>.$el.html();
      expect(html).toContainText('<%= title %>');
    });

    it('returns the view object', function() {
      expect(<%= instanceName %>.render()).toEqual(<%= instanceName %>);
    });

  });

});
