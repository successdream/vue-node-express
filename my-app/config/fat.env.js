/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const pkg = require('../package.json')

module.exports = {
  env: {
    VUE_APP_BASE_API: JSON.stringify('https://fat-turling-node.hellobike.cn'),
    APP_ENV: JSON.stringify('fat'),
  },
  assetsRoot: path.resolve(__dirname, '../dist/FAT', pkg.version),
  assetsPublicPath: '/',
  devServer: {
    disableHostCheck: true,
  },
}
