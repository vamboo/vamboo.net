const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: 'pug-loader'
      },
      {
        test: /\.styl$/,
        include: __dirname + '/src',
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          }, {
            loader: 'css-loader',
            options: {
              localIdentName: '[sha512:hash:base32]-[name]-[local]',
              modules: true,
              sourceMap: true
            }
          }, {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    })
  ]
}
