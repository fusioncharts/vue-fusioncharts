
const TerserPlugin = require('terser-webpack-plugin');
const libraryNamePlugin = 'VueFusionCharts';
const libraryNameComponent = 'VueFusionChartsComponent';

const vueFCPluginConfig = {
  entry: {
    'vue-fusioncharts': __dirname + '/src/index.js',
    'vue-fusioncharts.min': __dirname + '/src/index.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: libraryNamePlugin,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    fusioncharts: {
      commonjs2: 'fusioncharts',
      commonjs: 'fusioncharts',
      amd: 'fusioncharts',
      root: 'FusionCharts'
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        include: 'vue-fusioncharts.min.js',
      }),
    ],
  }
};

const vueFCComponentConfig = {
  entry: {
    index: __dirname + '/src/vue-fusioncharts-component.js',
    'index.min': __dirname + '/src/vue-fusioncharts-component.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/component',
    filename: '[name].js',
    library: libraryNameComponent,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    fusioncharts: {
      commonjs2: 'fusioncharts',
      commonjs: 'fusioncharts',
      amd: 'fusioncharts',
      root: 'FusionCharts'
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        include: 'index.min.js',
      }),
    ],
  }
};

module.exports = [vueFCPluginConfig, vueFCComponentConfig];
