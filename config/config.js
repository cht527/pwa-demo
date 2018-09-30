/**
 * Created by lunachi on 2018/4/25.
 * 项目配置
 */
module.exports = {
  development: {
    host: 'localhost',
    port: 8081,
    publicPath: '/',
    mock: true,
    autoOpenBrowser: true,
  },
  production: {
    publicPath: '/',
    compressCss: false,
    minimize: true
  }
}
