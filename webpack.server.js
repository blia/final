/* eslint-disable no-console */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require("path");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
  headers: {'Access-Control-Allow-Origin': '*'},
  resolve: {
    root: path.join(__dirname, 'app')
  },
  stats: {
    colors: true
  }
}).listen(config.devServerPort, 'localhost', function errorCallback(err) {
  if (err) {
    console.error(err);
  }

  console.info('==> 🚧  Webpack development server listening on port ' + config.devServerPort);
});
