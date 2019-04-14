const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //This plugin extracts CSS into separate files.
const config = require('../config');

const ENV = process.env.NODE_ENV || "localhost";
const devMode = ENV === "localhost";

module.exports = {
  mode: devMode ? "development" : "production",
  devtool: devMode ? "#source-map" : "inline-source-map",
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: devMode
      ? config.dev.assetsPublicPath
      : config.build.assetsPublicPath,
    filename: `js/[name]${devMode ? '' : '._[hash:8]'}.js` // 文件名,不加hash,以方便调试时使用，生产环境下可以设置为 [name].[hash:8].js
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)\??.*$/,
        use: {
          loader: "file-loader",
          options: {
            limit: 2048,
            name: path.posix.join('img/[name]._[chuckhash:8].[ext]')
          }
        }
      },

      {
        test: /\. (woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html', //生成的内存首页名称
      favicon: path.resolve(__dirname, '../src/assets/img/favicon.ico'),
      title: "maysa-tech",
      //设置压缩选项
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name]${devMode ? '' : '._[chunkhash:8]'}.css`,
      chunkFilename: `css/[id]${devMode ? '' : '._[chunkhash:8]'}.css`
    })
  ],
  performance: {
    hints: devMode ? false : 'warning'
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
