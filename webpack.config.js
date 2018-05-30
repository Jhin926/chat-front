const path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.[hash:4].js',
    path: path.resolve('dist')
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 8000,
    open: true,
    inline: true,
    hot: true,
    proxy: {
      "/login": "http://localhost:8080"
    }
  },
  mode: 'development',
  plugins: [
    // 通过new一下这个类来使用插件
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: './src/index.html',
      hash: true, // 会在打包好的bundle.js后面加上hash串
    }),
    new ExtractTextWebpackPlugin('css/style.css'),
    new cleanWebpackPlugin('dist'),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
            use: ['css-loader', 'postcss-loader'],
            publicPath: '../'
        })
        // use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.html?$/,
        use: [
          {
            loader: 'html-withimg-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env', 'react'
            ]
          }
        },
        include: /src/,
        exclude: /node_modules/
      }
    ]
  }
}