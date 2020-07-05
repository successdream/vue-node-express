const path = require('path')
const pkg = require('../package.json')

module.exports = {
  env: {
    VUE_APP_BASE_API: JSON.stringify('https://turling-node.hellobike.cn'),
    APP_ENV: JSON.stringify('pro'),
  },
  assetsRoot: path.resolve(__dirname, '../dist/PRO', pkg.version),
  assetsPublicPath: '/',
  devServer: {
    disableHostCheck: true,
  },
}
