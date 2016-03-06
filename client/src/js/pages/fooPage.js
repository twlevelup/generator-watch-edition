'use strict';

var Page = require('../framework/page');

var FooPage = Page.extend({

  id: 'foo-page',

  template: require('../../templates/pages/fooPage.hbs'),

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

module.exports = FooPage;
