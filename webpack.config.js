const path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');

let assetsPath = function (_path) {
  const assetsSubDirectory = ''
  return path.posix.join(assetsSubDirectory, _path)
}
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.[hash:4].js',
    path: path.resolve('dist')
  },
  mode: 'production',
  optimization: {
    // runtimeChunk: {
    //   name: 'manifest'
    // },
    splitChunks: {
      chunks: 'all',
      minSize: 102400,
      minChunks: 1,
      // maxSize: 409600,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true
    }
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 8000,
    open: true,
    inline: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      // "/api": "http://47.75.145.127:8080"
      "/api": "http://localhost:8080"
    }
  },
  // mode: 'development',
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
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
            use: [{
              loader: 'css-loader'
            }, 'postcss-loader', 'less-loader'],
            publicPath: '../'
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
            use: ['css-loader', 'postcss-loader'],
            publicPath: '../'
        })
        // use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 81920,
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
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}