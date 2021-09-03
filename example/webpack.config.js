var path = require('path');

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    library: 'FC',
    path: path.resolve(__dirname, './')
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
    }
  },
  devServer: {
    contentBase: './example'
    // open: true
  },
  mode: 'development',
};
