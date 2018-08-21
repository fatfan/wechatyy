const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  // entry: './src/index.js',
  entry: {
    index: ['babel-polyfill', './src/index.js'],
    vip: ['babel-polyfill', './src/vip.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/wechatyy/dist/',
    // chunkFilename: '[name].bandle.js',
    filename: '[name]-[contenthash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      // chunks: 'all'
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.(eot|woff|woff2|ttf|svg|jpg|png)$/,
      loader: 'url-loader?limit=10000&name=[name]-[hash:16].[ext]'
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
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '../') }),
    new HtmlWebpackPlugin({
      title: 'caching',
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      chunks: ['runtime', 'vendor', 'index']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/vip.html'),
      filename: 'vip.html',
      chunks: ['runtime', 'vendor', 'vip']
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称。
    // }),
    new webpack.NamedModulesPlugin(), // for development
    // new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([
      {
        from: './static',
        to: './static'
      }, {
        from: './src/data',
        to: './data'
      }
    ])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  }
}
