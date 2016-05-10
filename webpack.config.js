const loaders = require('./buildFiles/loaders.js');
const plugins = require('./buildFiles/plugins.js');
const entry = require('./buildFiles/entry.js');
const output = require('./buildFiles/output.js');

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
