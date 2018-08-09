import Vue from 'vue'
import App from './App.vue'

import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'; 
import Widgets from 'fusioncharts/fusioncharts.widgets'
import Maps from 'fusioncharts/fusioncharts.maps'
import world from 'fusioncharts/maps/fusioncharts.world'

import VueFusionCharts from './vue-fusioncharts/vue-fusioncharts'
import VueCodemirror from 'vue-codemirror'

import "./assets/js/fusioncharts.theme.gammel";

Vue.use(VueFusionCharts, FusionCharts, Charts, Widgets, Maps, world)
Vue.use(VueCodemirror, {
  options: {
    theme:'dracula',
    mode: 'javascript',
    tabSize: "4",
    smartIndent: true,
    lineNumbers: true,
    readOnly: true
  }
})
//require css files
import './assets/css/style.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/htmlembedded/htmlembedded'
import 'codemirror/theme/dracula.css'

import './assets/css/fusioncharts.theme.fusion.css'
import './assets/js/fusioncharts.theme.fusion'
////////

new Vue({
  el: '#app',
  render: h => h(App)
})
