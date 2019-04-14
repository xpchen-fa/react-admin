const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('../config');
const baseConfig = require('./webpack.base.conf');


const prodConfig = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    // build 开始阶段需要删除的文件
    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../'), //根目录
      watch: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    })
  ]
};

module.exports = webpackMerge(prodConfig, baseConfig);
