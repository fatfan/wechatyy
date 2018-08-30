const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
const conf = require('./env')

let env = conf.env[process.env.NODE_ENV || 'production']
let ghostEnv = conf.ghost[env]

// console.log(ghostEnv)

module.exports = {
  mode: 'production',
  entry: {
    // index: ['babel-polyfill', './src/index.js'],
    // vip: ['babel-polyfill', './src/vip.js'],
    index: ['./src/index.js'],
    vip: ['./src/vip.js']
    // lodash: ['lodash'],
    // jquery: ['jquery']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: `/wechatyy/${process.env.NODE_ENV === 'development' ? 'dist' : ''}`,
    publicPath: '/wechatyy/',
    chunkFilename: 'assets/js/[name]-[contenthash].bandle.js',
    filename: 'assets/js/[name]-[contenthash].js'
  },
  optimization: {
    // runtimeChunk: 'single',
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      // chunks: 'all'
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: -20
        },
        materialUi: {
          test: /[\\/]node_modules[\\/]@material-ui[\\/]/,
          name: 'material-ui',
          chunks: 'all'
        }
      }
    },
    // MiniCssExtractPlugin: with webpack 4 you need to bring your own CSS minimizer for production
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
      test: /\.(eot|woff|woff2|ttf|svg|jpe?g|png)$/,
      // loader: 'url-loader?limit=10000&name=[name]-[hash:16].[ext]',
      loader: 'url-loader',
      options: {
        limit: 10000, // 默认无限制
        name: 'assets/img/[name]-[hash:16].[ext]',
        publicPath: '/wechatyy/'
      }
    }, {
      test: /\.css$/,
      use: [
        // {
        //   loader: 'style-loader'
        // },
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            // publicPath: '../'
          }
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
        // {
        //   loader: 'style-loader'
        // },
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            // publicPath: '../'
          }
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
      chunks: ['manifest', 'vendor', 'material-ui', 'index']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/vip.html'),
      filename: 'vip.html',
      chunks: ['manifest', 'vendor', 'material-ui', 'vip']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'assets/css/[name]-[contenthash].css'
      // chunkFilename: "assets/css/[id]-[hash].css"
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
        //   context: './src',
        //   from: './data/**/*',
        //   to: '',
        //   ignore: ['data/cfg/*']

        from: './src/data/',
        to: './data',
        ignore: ['cfg/*']
      }, {
        from: './src/data/cfg/ghost.' + ghostEnv + '.js',
        to: './data/cfg/ghost.js'
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
