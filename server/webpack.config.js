const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeModules = {};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  .filter((x) => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        enforce: 'pre',
        use: [
          'ts-loader',
          {
            options: { eslintPath: require.resolve('eslint') },
            loader: require.resolve('eslint-loader')
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
