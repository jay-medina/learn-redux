
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
          query: {
            presets: ['es2015', 'react']
          }
        }
    ];
  }
};
