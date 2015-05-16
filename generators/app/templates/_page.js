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

  goToContacts: function() {
    global.App.navigate('contacts', true);
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = <%= className %>;
