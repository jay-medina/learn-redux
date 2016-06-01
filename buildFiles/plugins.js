const webpack = require('webpack');


function forProduction() {
  const argv = process.argv;
  return argv.length > 2 && argv[2] === '--production';
}

function getPlugins() {
  const plugins = [];

  if(forProduction()){
    return plugins.concat([
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['vendor']
      })
    ]);
  }

  return plugins;
}

module.exports = {
  getPlugins: getPlugins
};
