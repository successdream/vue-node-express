/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const envConfig = require('./config')
const name = '图灵制图工具'

const env = process.env.APP_ENV || 'dev'
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/', // TODO: Remember to change this to fit your need
  publicPath: envConfig[env].assetsPublicPath,
  outputDir: envConfig[env].assetsRoot,
  lintOnSave: process.env.NODE_ENV === 'development',
  pwa: {
    name: name,
  },
  devServer: {
    ...envConfig[env].devServer,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss'),
      ],
    },
  },
  chainWebpack(config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)
    config.plugin('define')
      .tap((definitions) => {
        definitions[0]['process.env'] = envConfig[env].env
        return definitions
      })
  },
}
