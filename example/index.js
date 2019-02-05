import Vue from 'vue';
import VueFusionCharts from '../src';
import VueFCComponent from '../src/vue-fusioncharts-component';
// import VueFCComponent from '../component';
// import VueFusionCharts from '../dist/vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';

const jsonify = res => res.json();
var dataFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json'
).then(jsonify);
var schemaFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json'
).then(jsonify);

// Use VueFusionCharts plugins by calling the Vue.use() global method:
// Vue.use(VueFusionCharts, FusionCharts, Charts);

//Use this to add vue-fusioncharts a component
let vFC = VueFCComponent(FusionCharts, Charts, TimeSeries);
Vue.component('fusioncharts', vFC);

// bootstrap the demo
var chart = new Vue({
  el: '#chart1',
  components: { fusioncharts: vFC },
  data: {
    counter: 0,
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
    width: '600',
    height: '400',
    type: 'timeseries',
    dataFormat: 'json',
    dataSource: {
      data: null,
      caption: {
        text: 'Sales Analysis'
      },
      subcaption: {
        text: 'Grocery & Footwear'
      },
      series: 'Type',
      yAxis: [
        {
          plot: 'Sales Value',
          title: 'Sale Value',
          format: {
            prefix: '$'
          }
        }
      ]
    },
    pieType: 'Pie2D',
    chartDs: {
      chart: {
        caption: 'Vue FusionCharts Sample',
        theme: 'fint',
        animation: '1',
        updateanimduration: '100'
      },
      data: [{ value: 1.9 }, { value: 2.3 }, { value: 2.1 }]
    },
    options: {
      width: '600',
      height: '400',
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
      width: '600',
      height: '400',
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
    }
  },
  methods: {
    changeFirstChartAttr: function() {
      // let dataSource = Object.assign({}, this.pieDataSource);
      this.chartDs.chart.caption = 'Changed to something else';
      // this.chartDs.data[2].value = this.getRandomNumber();
      // this.chartDs.data[1].value = this.getRandomNumber();
      // this.pieDataSource = dataSource;
    },
    changeSecondChartAttr: function() {
      let dataSource = Object.assign({}, this.dataSource);
      dataSource.caption.text = 'Changed to something else';
      this.dataSource = dataSource;
    },
    getRandomNumber: function() {
      var max = 5,
        min = 2;
      return Math.round((max - min) * Math.random() + min);
    }
  },
  mounted: function() {
    // Promise.all([dataFetch, schemaFetch]).then(res => {
    //   const data = res[0];
    //   const schema = res[1];
    //   const fusionTable = new FusionCharts.DataStore().createDataTable(
    //     data,
    //     schema
    //   );
    //   this.dataSource.data = fusionTable;
    // });
  },
  beforeMount: function() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      this.dataSource.data = fusionTable;
    });
  }
});

window.chart = chart;
