const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { clear } = require('console')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  output: {
    filename: "[name].[hash].js",
    // filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
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
      template: 'template.html',
      filename: 'index.html',
      minify: { collapseWhitespace: false & isProd },
    }),
  ],
}

