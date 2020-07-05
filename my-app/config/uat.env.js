const path = require('path')
const pkg = require('../package.json')

module.exports = {
  env: {
    VUE_APP_BASE_API: JSON.stringify('https://uat-turling-node.hellobike.cn'),
    APP_ENV: JSON.stringify('uat'),
  },
  assetsRoot: path.resolve(__dirname, '../dist/UAT', pkg.version),
  assetsPublicPath: '/',
  devServer: {
    disableHostCheck: true,
  },
}
