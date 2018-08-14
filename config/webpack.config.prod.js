const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
    // greeter: './src/components/greeter'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
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
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      // 'src': path.resolve(__dirname, './src')
    }
  }
}
