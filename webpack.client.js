const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist/client'),
  },
  stats: true,
});
