/* Development build:
  ========================================================================== */
const { merge } = require('webpack-merge')

// default config
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  // spin up a server for quick development
  devServer: {
    compress: true,
    open: false,
    hot: true,
    port: 8084,
    client: {
      progress: false,
      overlay: {
        errors: false,
        warnings: false
      }
    },
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  watchOptions: {
    ignored: /node_modules/
  }
})
