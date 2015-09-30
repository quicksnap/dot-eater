/* eslint-disable no-var */
var path = require('path')

module.exports = {
  entry: './src/index.js',
  devtool: '#eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint-loader'] }]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
}
