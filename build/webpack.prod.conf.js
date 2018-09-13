const path = require('path')
const merge = require('webpack-merge')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[hash].css'
    }),
    new OptimizeCSSPlugin({
      // cssProcessorOptions: { safe: true }
    }),
    new CleanWebpackPlugin('dist', {root: path.join(__dirname, '../')})
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  }
})
