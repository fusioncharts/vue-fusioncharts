import Vue from 'vue';
import VueFusionCharts from '../src';
import VueFCComponent from '../src/vue-fusioncharts-component';
// import VueFCComponent from '../component';
// import VueFusionCharts from '../dist/vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';

const jsonify = res => res.json();
const dataFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json'
).then(jsonify);
const schemaFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json'
).then(jsonify);

// Use VueFusionCharts plugins by calling the Vue.use() global method:
// Vue.use(VueFusionCharts, FusionCharts, Charts);

//Use this to add vue-fusioncharts a component
let vFC = VueFCComponent(FusionCharts, Charts, TimeSeries);
Vue.component('fusioncharts', vFC);

// bootstrap the demo
var chart = new Vue({
  el: '#chart1',
  // components: { fusioncharts: vFC },
  data: {
    chartType: 'Pie2D',
    pieDataSource: {
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
    },
    width: '500',
    height: '300',
    type: 'timeseries',
    dataFormat: 'json',
    dataSource: {
      caption: { text: 'Online Sales of a SuperStore in the US' },
      data: null,
      yAxis: [
        {
          plot: [
            {
              value: 'Sales ($)'
            }
          ]
        }
      ]
    },
    options: {
      width: '500',
      height: '300',
      type: 'Pie2D',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Vue FusionCharts Sample',
          theme: 'fint'
        },
        data: [{ value: 1.9 }, { value: 2.3 }, { value: 2.1 }]
      }
    },
    timeseriesOptions: {
      width: '500',
      height: '300',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        caption: { text: 'Online Sales of a SuperStore in the US' },
        data: null,
        yAxis: [
          {
            plot: [
              {
                value: 'Sales ($)'
              }
            ]
          }
        ]
      }
    },
    displayChart: false
  },
  methods: {
    changeFirstChartAttr: function() {
      // let dataSource = Object.assign({}, this.pieDataSource);
      this.options.dataSource.chart.caption = 'Changed to something else';
      // dataSource.data[2].value = this.getRandomNumber();
      // dataSource.data[1].value = this.getRandomNumber();
      // this.pieDataSource = dataSource;
    },
    changeSecondChartAttr: function() {
      let dataSource = Object.assign({}, this.dataSource);
      dataSource.caption.text = 'Changed to something else';
      this.dataSource = dataSource;
    },
    getRandomNumber: function() {
      var max = 5,
        min = 1;
      return Math.round((max - min) * Math.random() + min);
    }
  },
  mounted: function() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      this.dataSource.data = fusionTable;
      this.displayChart = true;
    });
  }
});

window.chart = chart;
