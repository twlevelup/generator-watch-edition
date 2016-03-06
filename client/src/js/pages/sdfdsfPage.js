'use strict';

var Page = require('../framework/page');

var SdfdsfPage = Page.extend({

  id: 'sdfdsf-page',

  template: require('../../templates/pages/sdfdsfPage.hbs'),

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

module.exports = SdfdsfPage;
