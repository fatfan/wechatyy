var path = require('path')
var rm = require('rimraf')
var webpack = require('webpack')
var webpackConfig = require('../config/webpack.config.prod.js')

var distPath = path.resolve(__dirname, '../dist')
console.log('dist:' + distPath)
rm(distPath, err => {
  if (err) {
    throw err
  }
  console.log('clear build path success...')
  webpack(webpackConfig, function (err, stats) {
    if (err) {
      throw err
    }
    // TODO：复制src/lib下所有js文件到发布目录dist/static/js/目录下
    var fs = require('fs')
    var path = require('path')

    var fileName = 'flexible.js'

    var sourceFile = path.join(__dirname, '../src/lib', fileName)
    var destPath = path.join(__dirname, '../dist/static/js', fileName)
    console.log(sourceFile)
    console.log(destPath)
    var readStream = fs.createReadStream(sourceFile)
    var writeStream = fs.createWriteStream(destPath)
    readStream.pipe(writeStream)
    // console.log("移动完成")
    console.log('build success...')
  })
})
