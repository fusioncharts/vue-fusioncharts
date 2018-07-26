import Vue from 'vue'
import App from './App.vue'

import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'; 
import Widgets from 'fusioncharts/fusioncharts.widgets'
import Maps from 'fusioncharts/fusioncharts.maps'
import world from 'fusioncharts/maps/fusioncharts.world'
import VueFusionCharts from './vue-fusioncharts/vue-fusioncharts'

import "./utils/fusioncharts.theme.gammel";

Vue.use(VueFusionCharts, FusionCharts, Charts, Widgets, Maps, world)
//require css files
import './assets/css/main.css'
import 'prismjs/themes/prism.css'
import './assets/css/quick-start.css'
import './assets/css/slick.min.css'
import './assets/css/slick-theme.min.css'
import './assets/css/fusioncharts.theme.fusion.css'
import './assets/js/fusioncharts.theme.fusion'
////////

new Vue({
  el: '#app',
  render: h => h(App)
})
