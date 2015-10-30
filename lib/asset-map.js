var stewMap = require('broccoli-stew').map;

function excludeFile(relativePath, exclude) {
  for (var i = 0; i < exclude.length; i++) {
    if (relativePath.indexOf(exclude[i]) !== -1) {
      return true;
    }
  }
  return false;
}

function AssetMap(inputTree, options) {
  return stewMap(inputTree, function(content, relativePath){
    if (!excludeFile(relativePath, options.exclude)) {
      options.assetMap[relativePath] = relativePath;
    }
    return content;
  });
}

module.exports = AssetMap;
