
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json')
module.exports = {
  env: {
    VUE_APP_BASE_API: JSON.stringify('http://localhost:3000/'),
    APP_ENV: JSON.stringify('dev'),
  },
  assetsRoot: path.resolve(__dirname, '../dist/DEV', pkg.version),
  assetsPublicPath: '/',
  devServer: {
    disableHostCheck: true,
  },
}
