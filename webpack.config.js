var loaders = require('./buildFiles/loaders.js');
var plugins = require('./buildFiles/plugins.js');
var entry = require('./buildFiles/entry.js');
var output = require('./buildFiles/output.js');

module.exports = {
  entry: entry.getEntries(),
  output: output.get(),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
      loaders: loaders.getLoaders()
  },
  plugins: plugins.getPlugins()
};
