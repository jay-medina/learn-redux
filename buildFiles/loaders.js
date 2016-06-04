
module.exports = {
  getLoaders: function() {
    return [
          {
          test: /\.css$/,
          loader: "style!css"
        },
        {
          test: /\.jsx?$/,
          loader: ['babel'],
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
    ];
  }
};
