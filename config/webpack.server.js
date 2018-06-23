const path = require('path');
const rootPath = path.join(__dirname, '..');
const vueSSRServerPlugin=require('vue-server-renderer/server-plugin');

module.exports = {
  target: 'node',
  entry: [rootPath + "/src/webapp/entry-server.js"],
  output: {
    //告诉node使用node-style风格渲染
    libraryTarget: "commonjs2"
  },
  plugins: [
    new vueSSRServerPlugin()
  ]
};