/* eslint-disable no-var */
var path = require('path')

module.exports = {
  entry: './src/index.js',
  devtool: '#eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint-loader'] },
      { test: /\.json$/, include: /node_modules\/pixi\.js/, loaders: ['json'] },
    ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
}
