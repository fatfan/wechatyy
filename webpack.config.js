const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    index: ['babel-polyfill', './src/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true'],
    vip: ['babel-polyfill', './src/vip.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(eot|woff|woff2|ttf|svg|jpg|png)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash:16].[ext]'
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:8]'
            }
          }
        ]
      }, {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:8]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline'
            }
          }, {
            loader: 'less-loader',
            options: {
              ieCompat: false,
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.js$|\.jsx$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
        // test: /\.js$|\.jsx$/,
        // loader: 'babel-loader',
        // exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //     template: './src/index.html'
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  }
}
