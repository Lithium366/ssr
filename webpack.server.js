const merge = require('webpack-merge');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: process.env.NODE_ENV || 'production',
  target: 'node',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [webpackNodeExternals({
    whitelist: [/@material-ui/],
  })],
});
