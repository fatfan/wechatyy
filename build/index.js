var ora = require('ora')
// var path = require('path')
// var rm = require('rimraf')
var webpack = require('webpack')

// console.log('build.js cmd argv:>>', process.argv[2])

const env = require('../config/env').env
process.env.NODE_ENV = env[process.argv[2]] || 'production'
// console.log('node env set as>>' + process.env.NODE_ENV)
// var distPath = path.resolve(__dirname, '../dist')
// console.log('dist:' + distPath)

var webpackConfig = require('../config/webpack.prod.config.js')

var spinner = ora(`building for ${process.env.NODE_ENV}...`)
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
