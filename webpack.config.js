const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { clear } = require('console')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
  entry: {
    main: './src/index.js',
    analytics: './src/analytics.js'
  },
  output: {
    filename: "[name].[hash].js",
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'webpack beh',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
      minify: { collapseWhitespace: false & isProd },
    }),
  ],
}

