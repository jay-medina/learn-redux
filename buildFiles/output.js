const path = require('path');

function get() {
  return {
    path: './dist',
    publicPath: '/dist/',
    filename: '[name].js'
  };
}

module.exports = {
  get: get
};
