const argv = require("yargs-parser")(process.argv.slice(2));
const merge = require("webpack-merge");
const {resolve, join, basename} = require("path");
const _mode = argv.mode || "development";
let _mergeconfig = '';

if(argv.env=='server'){
  _mergeconfig = require(`./config/webpack.server.js`);
}else{
  _mergeconfig = require(`./config/webpack.${_mode}.js`);
}
const _modeflag = (_mode == "production" ? true : false);
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let _plugins = [new VueLoaderPlugin()];
let webpackConfig = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // extractCSS:true
      }
    }, {
      test:/\.css$/,
      use:[
          'vue-style-loader',
          'css-loader'
      ]
    }, {
      test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|otf)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: _modeflag ? "images/[name].[hash:5].[ext]" : "images/[name].[ext]"
        }
      }]
    }]
  },
  watch: !_modeflag,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1
  },
  optimization: {},
  output: {
    path: join(__dirname, "./dist/assets"),
    publicPath: "/",
    filename: "scripts/[name].bundle.js"
  },
  plugins: [
    ..._plugins,
    new HtmlWebpackPlugin({
      template: './src/webapp/index.html',
      filename: 'index.html'
    })

  ],
  resolve: {
    modules: [
      resolve(__dirname, 'node_modules') //使用绝对路径指定 node_modules，不做过多查询
    ],
    //删除不必要的后缀自动补全，少了文件后缀的自动匹配，即减少了文件路径查询的工作
    extensions: ['.js', '.css', '.vue']
  }
};
module.exports = merge(webpackConfig, _mergeconfig);
