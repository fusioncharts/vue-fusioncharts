import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js', // replaces "entry"
  output: {
    file: 'dist/vue-fusioncharts.js', // replaces "dest"
    format: 'umd',
    name: 'VueFusionCharts', // replaces "moduleName"
    globals: {
      fusioncharts: 'FusionCharts',
      vue: 'Vue',
      'lodash/cloneDeep': 'cloneDeep',
      'lodash/uniqueId': 'uniqueId',
    },
  },
  external: ['fusioncharts', 'vue', 'lodash/cloneDeep', 'lodash/uniqueId'],
  plugins: [
    nodeResolve(), // allow Rollup to resolve imports from node_modules
    commonjs(), // convert CommonJS modules to ES6
  ],
};
