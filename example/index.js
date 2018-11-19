import Vue from 'vue';
// import VueFusionCharts from '../src';
// import VueFCComponent from '../src/vue-fusioncharts-component';
import VueFCComponent from '../component/vue-fusioncharts-component';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Fint from 'fusioncharts/themes/fusioncharts.theme.fint';

// Charts(FusionCharts);
// Fint(FusionCharts);

// Use VueFusionCharts plugins by calling the Vue.use() global method:
// Vue.use(VueFusionCharts, FusionCharts, Charts);

//Use this to add vue-fusioncharts a component
let vFC = VueFCComponent(FusionCharts, Charts, Fint);
// Vue.component('fusioncharts', vFC);

// bootstrap the demo
var chart = new Vue({
  el: '#chart1',
  components: { fusioncharts: vFC },
  data: {
    options: {
      type: 'Pie2D',
      width: '500',
      height: '300',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Vue FusionCharts Sample',
          theme: 'fint'
        },
        data: [{ value: 1.9 }, { value: 2.3 }, { value: 2.1 }]
      },
      displayValue: 'nothing',
      events: {
        dataplotRollover: function(ev, props) {
          chart.displayValue = props.value;
        }
      }
    },
    displayValue: 'nothing'
  }
});

window.chart = chart;
