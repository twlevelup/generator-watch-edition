'use strict';

var Page = require('../framework/page');

var SdfdsffPage = Page.extend({

  id: 'sdfdsff-page',

  template: require('../../templates/pages/sdfdsffPage.hbs'),

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

module.exports = SdfdsffPage;
