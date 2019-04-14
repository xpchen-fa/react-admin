const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const config = require('../config');

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const devConfig = {
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    hot: true, // 模块热更新，取决于HotModuleReplacementPlugin
    contentBase: false, // 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
    compress: true, //启用gzip压缩
    host: HOST || config.dev.host, // 设置默认监听域名，如果省略，默认为“localhost”
    port: PORT || config.dev.port, //设置默认监听端口，如果省略，默认为“8080”
    open: true,
    overlay: true,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      ignored: /node_modules/,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = webpackMerge(devConfig, baseConfig);
