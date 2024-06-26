const defines = require('./webpack-defines')
const pages = require('./webpack-pages')

// copy files from dev (i.g. `assets/img/*`) to dist (i.g `static/img/*`)
const CopyWebpackPlugin = require('copy-webpack-plugin')
// extract css from js to another files
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// html support
const HtmlWebpackPlugin = require('html-webpack-plugin')

// helpers:
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: `${defines.src}/index.ts`
  },
  output: {
    path: defines.dist,
    filename: `${defines.assets}js/[name].js`
  },

  // optimization (chunks)
  optimization: {
    chunkIds: 'named',
    mergeDuplicateChunks: true,

    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          name: 'vendors', // or comment name to make chunks works
          chunks: 'all',
          // the way to keep kit in the vendors
          test: /[\\/]node_modules[\\/]|[\\/]ui-kit[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  module: {
    rules: [
      // js(x) & ts(x)
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },

      // sass & css
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env'
                  ]
                ],
                postcssOptions: {
                  parser: 'postcss-js'
                },
                execute: true
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },

      // svg in js(x) & ts(x)
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          '@svgr/webpack'
        ]
      },

      // fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },

      // images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    ...pages.map(
      page =>
        new HtmlWebpackPlugin({
          title: page.title,
          template: defines.public + '/' + page.template,
          filename: page.filename,
          // default:
          favicon: defines.src + '/shared/misc/favicon.ico'
        })
    ),

    new MiniCssExtractPlugin({
      filename: `${defines.assets}css/[name].css`,
      chunkFilename: '[id].css'
    }),

    // copy files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${defines.src}/shared/img`,
          to: `${defines.dist}/${defines.static}/img`
        },
        {
          from: `${defines.src}/shared/misc`,
          to: `${defines.dist}`
        }
      ]
    })
  ],

  experiments: {
    topLevelAwait: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}
