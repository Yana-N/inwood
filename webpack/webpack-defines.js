const path = require('path')

const dirs = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  public: path.join(__dirname, '../public')
}

const subDirs = {
  assets: 'assets/',
  static: 'static/'
}

module.exports = {
  ...dirs,
  ...subDirs
}
