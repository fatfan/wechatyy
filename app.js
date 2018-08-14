/**
 * webpack-dev-server implementation
 */
// const webpackDevServer = require('webpack-dev-server');
// const webpack = require('webpack');

// const config = require('./webpack.config.js');
// const options = {
//   contentBase: './dist',
//   hot: true,
//   host: 'localhost'
// };

// webpackDevServer.addDevServerEntrypoints(config, options);
// const compiler = webpack(config);
// const server = new webpackDevServer(compiler, options);

// server.listen(5000, 'localhost', () => {
//   console.log('dev server listening on port 5000');
// });

/**
 * webpack-dev-midware & webpack-hot-midware impamentation
 */
var webpack = require('webpack')
var webpackBaseConfig = require('./webpack.config.js')

var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var express = require('express')

var app = express()

// app.use(webpackDevMiddleware(webpack(webpackBaseConfig), {
// publicPath: webpackBaseConfig.output.publicPath,
//     noInfo: true,
//     stats: {
//         colors: true
//     }
// }));
// app.use(webpackHotMiddleware(webpack(webpackBaseConfig)));

var compiler = webpack(webpackBaseConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackBaseConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use('/', express.static(__dirname))

app.listen(5000)
