// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 3001
  },
  devtool: 'cheap-module-eval-source-map',
});
