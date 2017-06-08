// rollup configuration
export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'VueFusionCharts',
  globals: {fusioncharts: 'FusionCharts'},
  external: [ 'fusioncharts' ],
  dest: 'dist/bundle.js'
};

