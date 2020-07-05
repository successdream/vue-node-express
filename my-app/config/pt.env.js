const path = require('path')
const pkg = require('../package.json')

module.exports = {
  env: {
    VUE_APP_BASE_API: JSON.stringify(''),
    APP_ENV: JSON.stringify('pt'),
  },
  assetsRoot: path.resolve(__dirname, '../dist/PT', pkg.version),
  assetsPublicPath: '/',
  devServer: {
    disableHostCheck: false,
  },
}
