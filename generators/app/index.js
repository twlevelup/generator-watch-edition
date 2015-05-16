'use strict';
var yeoman = require('yeoman-generator');
var stringUtils = require('underscore.string');
// var chalk = require('chalk');
// var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  promptUser: function () {

    var done = this.async();

    var prompts = [
      {
        name: 'pageName',
        message: 'What is the name of the new page?'
      }
    ];

    this.prompt(prompts, function (props) {
      this.pageName = props.pageName;
      done();
    }.bind(this));

  },

  setupFolders: function () {
    this.mkdir('pages');
    this.mkdir('specs');
    this.mkdir('templates');
    this.mkdir('styles');
  },

  // TODO split out code to create template variables
  // TODO split out code to create file names
  copyMainFiles: function () {

    var title = this.pageName;

    var pageName = this.pageName.toLowerCase();

    var jsClassName = stringUtils.classify(pageName + 'Page');
    var baseFileName = stringUtils.decapitalize(jsClassName);

    var filesNames = {
      base: baseFileName,
      page: baseFileName + '.js',
      template: baseFileName + '.hbs',
      scss: '_' + baseFileName + '.scss',
      spec: baseFileName + '.spec.js'
    };

    var templateParams = {
      title: title,
      id: stringUtils.slugify(pageName + ' page'),
      className: jsClassName,
      instanceName: stringUtils.decapitalize(jsClassName),
      filesNames: filesNames
    };

    this.template('_page.js', 'client/src/js/pages/' + filesNames.page, templateParams);
    this.template('_spec.js', 'client/spec/pages/' + filesNames.spec, templateParams);
    this.template('_styles.scss', 'client/src/styles/pages/' + filesNames.scss, templateParams);
    this.template('_template.hbs', 'client/src/templates/pages/' + filesNames.template, templateParams);

    // TODO something better than this
    console.log('Now add ' + jsClassName + ' to the router');
    console.log('Then add @import(\'' + filesNames.scss + '\'); to app.scss');

  }

});
