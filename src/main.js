import Vue from 'vue';
import App from './App.vue';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import Maps from 'fusioncharts/fusioncharts.maps';
import world from 'fusioncharts/maps/fusioncharts.world';

import VueFusionCharts from 'vue-fusioncharts';
import VueCodemirror from 'vue-codemirror';

import Gammel from 'fusioncharts/themes/fusioncharts.theme.gammel';
import Candy from 'fusioncharts/themes/fusioncharts.theme.candy';
import Zune from 'fusioncharts/themes/fusioncharts.theme.zune';
import Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import Carbon from 'fusioncharts/themes/fusioncharts.theme.carbon';

Vue.use(
  VueFusionCharts,
  FusionCharts,
  Charts,
  TimeSeries,
  PowerCharts,
  Widgets,
  Maps,
  world,
  Gammel,
  Candy,
  Zune,
  Ocean,
  Carbon
);
Vue.use(VueCodemirror, {
  options: {
    theme: 'dracula',
    mode: 'javascript',
    tabSize: '4',
    smartIndent: true,
    lineNumbers: true,
    readOnly: true
  }
});
//require css files
import './assets/css/style.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/theme/dracula.css';

import './assets/css/fusioncharts.theme.fusion.css';
import './assets/js/fusioncharts.theme.fusion';
////////

new Vue({
  el: '#app',
  render: h => h(App)
});
