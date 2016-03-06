'use strict';

var Page = require('../framework/page');

var FffffffffPage = Page.extend({

  id: 'fffffffff-page',

  template: require('../../templates/pages/fffffffffPage.hbs'),

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

module.exports = FffffffffPage;
