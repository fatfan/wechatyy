var path = require('path')
var ora = require('ora')
// var rm = require('rimraf')
var webpack = require('webpack')
var webpackConfig = require('../config/webpack.prod.config.js')

var distPath = path.resolve(__dirname, '../dist')
console.log('dist:' + distPath)

var spinner = ora('building for production...')
spinner.start()

// rm(distPath, err => {
//   if (err) {
//     throw err
//   }
//   console.log('clear build path success...')
//   webpack(webpackConfig, function (err, stats) {
//     spinner.stop()
//     if (err) {
//       throw err
//     }
//     // TODO：复制src/lib下所有js文件到发布目录dist/static/js/目录下
//     console.log('build success...')
//   })
// })

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) {
    throw err
  }
  console.log('build success...')
})
