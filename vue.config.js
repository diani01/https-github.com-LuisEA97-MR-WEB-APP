'use strict'
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

function resolve (dir) {
  return path.join(__dirname, dir)
}

const name = 'Brand Alliance'

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@i': resolve('src/api'),
        '@c': resolve('src/components'),
        '@v': resolve('src/pages'),
        '@s': resolve('src/static'),
        '@u': resolve('src/utils')
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[name].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), // match file name
        threshold: 10240, // compress data above 10K
        minRatio: 0.8,
        deleteOriginalAssets: false // Whether to delete the source file
      })
    ]
  }
}
