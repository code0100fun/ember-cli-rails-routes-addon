var AssetMap = require('./asset-map');
var AssetRewrite = require('broccoli-asset-rewrite');

function AssetPrepend(inputTree, options) {
  if (!(this instanceof AssetPrepend)) {
    return new AssetPrepend(inputTree, options);
  }

  options = options || {};

  this.extensions = options.extensions || ['js', 'css', 'png', 'jpg', 'gif', 'map'];
  this.replaceExtensions = options.replaceExtensions || ['html', 'css', 'js'];
  this.exclude = options.exclude || [];
  this.prepend = options.prepend || '';
  this.ignore = options.ignore;

  this.assetMap = {}
  inputTree = AssetMap(inputTree, this);

  return AssetRewrite(inputTree, this);
}

module.exports = AssetPrepend;
