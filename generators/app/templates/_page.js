'use strict';

var Page = require('../framework/page');

var <%= className %> = Page.extend({

  id: '<%= id %>',

  template: require('../../templates/pages/<%= filesNames.template %>'),

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

module.exports = <%= className %>;
