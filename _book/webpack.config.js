const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname,
    filename: './release/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      }
    ],
  },

  // 代码模块路径解析的配置
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],
    alias: {
      utils: path.resolve(__dirname, 'src/utils')
    },
    extensions: [".js", ".json", ".jsx", ".css"],
  }
}