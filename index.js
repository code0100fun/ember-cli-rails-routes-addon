/* jshint node: true */
'use strict';
var assetPrepend = require('./lib/asset-prepend');

module.exports = {
  name: 'ember-cli-rails-routes',
  initializeOptions: function() {
    var defaultOptions = {
      enabled: this.app.env === 'development' || this.app.env === 'test',
      exclude: [],
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map'],
      prepend: '',
      replaceExtensions: ['html', 'css', 'js']
    };

    var options = this.project.config(this.app.env)[this.name];

    // { 'ember-cli-rails-routes': false } to disable
    if (options === false) {
      this.options = { enabled: false };
    } else {
      this.options = options || {};
    }

    this.app.options[this.name] = this.options;

    for (var option in defaultOptions) {
      if (!this.options.hasOwnProperty(option)) {
        this.options[option] = defaultOptions[option];
      }
    }
  },
  postprocessTree: function (type, tree) {
    if (type === 'all' && this.options.enabled) {
      tree = assetPrepend(tree, this.options);
    }
    return tree;
  },
  included: function (app) {
    this.app = app;
    this.initializeOptions();
  },
  treeFor: function() {}
}
