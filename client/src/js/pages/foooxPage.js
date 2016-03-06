'use strict';

var Page = require('../framework/page');

var FoooxPage = Page.extend({

  id: 'fooox-page',

  template: require('../../templates/pages/foooxPage.hbs'),

  buttonEvents: {
    right: '',
    left: '',
    top: '',
    bottom: '',
    face: ''
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = FoooxPage;
