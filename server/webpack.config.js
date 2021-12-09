const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
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
