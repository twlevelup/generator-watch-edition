'use strict';
var yeoman = require('yeoman-generator');
var stringUtils = require('underscore.string');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {

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

  // TODO split out code to create template variables
  // TODO split out code to create file names
  writing: function () {

    var done = this.async();

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

    this.title = title;
    this.filesNames = filesNames;
    this.templateParams = templateParams;
    this.jsClassName = jsClassName;

    this.template('_page.js', 'client/src/js/pages/' + filesNames.page, templateParams);
    this.template('_spec.js', 'client/spec/pages/' + filesNames.spec, templateParams);
    this.template('_styles.scss', 'client/src/styles/pages/' + filesNames.scss, templateParams);
    this.template('_template.hbs', 'client/src/templates/pages/' + filesNames.template, templateParams);

    done();

  },

  end: function () {
    // TODO something better than this
    this.log('To complete setup:');
    this.log('add "' + this.title + ': require(\'./' + this.filesNames.base + '\')" to src/js/pages/index.js');
    this.log('add "@import \'pages/' + this.filesNames.base + '\';" to src/styles/app.scss');
  }

});
