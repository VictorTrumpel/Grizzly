'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true, port: 5000 };
const server = new WebpackDevServer(devServerOptions, compiler);

server.startCallback(() => {
  console.log('Starting server on http://localhost:8080');
});
