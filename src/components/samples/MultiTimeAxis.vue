<template>
  <sample-wrapper :panels="panels" :activePanel="selectedPanel">
    <fusioncharts
      :width="width"
      :height="height"
      :type="type"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      :style="{ 'text-align': 'center' }"
    ></fusioncharts>
  </sample-wrapper>
</template>

<script>
var jsonify = res => res.json();
var dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json"
).then(jsonify);
var schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json"
).then(jsonify);

import mixin from "./common/SamplesMixin";
import FusionCharts from "fusioncharts";
export default {
  mixins: [mixin],
  name: "MultiTimeAxis",
  props: ["showMessage"],
  data() {
    return {
      sourceData: `// A shortened version of the data is given here.
// Please check the link below to see the complete data:
// https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json
[
  [
    "01-Feb-11",
    "Grocery",
    8866
  ],
  [
    "01-Feb-11",
    "Footwear",
    984
  ],
  [
    "02-Feb-11",
    "Grocery",
    2174
  ],
  [
    "02-Feb-11",
    "Footwear",
    1109
  ],
  [
    "03-Feb-11",
    "Grocery",
    2084
  ],
  [
    "03-Feb-11",
    "Footwear",
    6526
  ],
  [
    "04-Feb-11",
    "Grocery",
    1503
  ],
  [
    "04-Feb-11",
    "Footwear",
    1007
  ],
  [
    "05-Feb-11",
    "Grocery",
    4928
  ],
  [
    "05-Feb-11",
    "Footwear",
    4112
  ],
  [
    "06-Feb-11",
    "Grocery",
    4667
  ],
  [
    "06-Feb-11",
    "Footwear",
    7206
  ],
  [
    "07-Feb-11",
    "Grocery",
    1064
  ],
  [
    "07-Feb-11",
    "Footwear",
    7890
  ],
  [
    "08-Feb-11",
    "Grocery",
    851
  ],
  [
    "08-Feb-11",
    "Footwear",
    6002
  ],
  [
    "09-Feb-11",
    "Grocery",
    7326
  ],
  [
    "09-Feb-11",
    "Footwear",
    5168
  ],
  [
    "10-Feb-11",
    "Grocery",
    8399
  ],
  [
    "10-Feb-11",
    "Footwear",
    7992
  ],
  [
    "11-Feb-11",
    "Grocery",
    4084
  ],
  [
    "11-Feb-11",
    "Footwear",
    3001
  ],
  [
    "12-Feb-11",
    "Grocery",
    4012
  ],
  [
    "12-Feb-11",
    "Footwear",
    7891
  ],
  [
    "13-Feb-11",
    "Grocery",
    1673
  ],
  [
    "13-Feb-11",
    "Footwear",
    511
  ],
  [
    "14-Feb-11",
    "Grocery",
    6018
  ],
  [
    "14-Feb-11",
    "Footwear",
    1861
  ],
  [
    "15-Feb-11",
    "Grocery",
    9011
  ],
  [
    "15-Feb-11",
    "Footwear",
    1424
  ],
  [
    "16-Feb-11",
    "Grocery",
    5817
  ],
  [
    "16-Feb-11",
    "Footwear",
    6807
  ],
  [
    "17-Feb-11",
    "Grocery",
    5813
  ],
  [
    "17-Feb-11",
    "Footwear",
    4126
  ],
  [
    "18-Feb-11",
    "Grocery",
    566
  ],
  [
    "18-Feb-11",
    "Footwear",
    3482
  ],
  [
    "19-Feb-11",
    "Grocery",
    9065
  ],
  [
    "19-Feb-11",
    "Footwear",
    5649
  ],
  [
    "20-Feb-11",
    "Grocery",
    6734
  ],
  [
    "20-Feb-11",
    "Footwear",
    309
  ],
  [
    "21-Feb-11",
    "Grocery",
    6937
  ],
  [
    "21-Feb-11",
    "Footwear",
    6568
  ],
  [
    "22-Feb-11",
    "Grocery",
    3038
  ],
  [
    "22-Feb-11",
    "Footwear",
    2458
  ],
  [
    "23-Feb-11",
    "Grocery",
    4445
  ],
  [
    "23-Feb-11",
    "Footwear",
    356
  ],
  [
    "24-Feb-11",
    "Grocery",
    8782
  ],
  [
    "24-Feb-11",
    "Footwear",
    5883
  ],
  [
    "25-Feb-11",
    "Grocery",
    9489
  ],
  [
    "25-Feb-11",
    "Footwear",
    6556
  ],
  [
    "26-Feb-11",
    "Grocery",
    9624
  ],
  [
    "26-Feb-11",
    "Footwear",
    1601
  ],
  [
    "27-Feb-11",
    "Grocery",
    9033
  ],
  [
    "27-Feb-11",
    "Footwear",
    1359
  ],
  [
    "28-Feb-11",
    "Grocery",
    6932
  ],
  [
    "28-Feb-11",
    "Footwear",
    4361
  ],
  [
    "01-Mar-11",
    "Grocery",
    625
  ],
  [
    "01-Mar-11",
    "Footwear",
    3807
  ],
  [
    "02-Mar-11",
    "Grocery",
    904
  ],
  [
    "02-Mar-11",
    "Footwear",
    2279
  ],
  [
    "03-Mar-11",
    "Grocery",
    7572
  ],
  [
    "03-Mar-11",
    "Footwear",
    7226
  ],
  [
    "04-Mar-11",
    "Grocery",
    2124
  ],
  [
    "04-Mar-11",
    "Footwear",
    6155
  ],
  [
    "05-Mar-11",
    "Grocery",
    8157
  ],
  [
    "05-Mar-11",
    "Footwear",
    1908
  ],
  [
    "06-Mar-11",
    "Grocery",
    8666
  ]
]`,
      sourceSchema: `[
  {
    "name": "Time",
    "type": "date",
    "format": "%d-%b-%y"
  },
  {
    "name": "Type",
    "type": "string"
  },
  {
    "name": "Sales Value",
    "type": "number"
  }
]`,
      sourceHTML: `<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
</div>`,
      sourceJS: `import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, TimeSeries)

var jsonify = res => res.json();
var dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json"
).then(jsonify);
var schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json"
).then(jsonify);

var app = new Vue({
    el: '#app',
    data: {
      width: "100%",
      height: "400",
      type: "timeseries",
      dataFormat: "json",
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
      });
    }
});`,
      width: "100%",
      height: "400",
      type: "timeseries",
      dataFormat: "json",
      dataSource: {
        data: null,
        caption: {
          text: "Sales Analysis"
        },
        subcaption: {
          text: "Grocery & Footwear"
        },
        series: "Type",
        yAxis: [
          {
            plot: "Sales Value",
            title: "Sale Value",
            format: {
              prefix: "$"
            }
          }
        ]
      }
    };
  },
  computed: {},
  mounted: function() {
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
};
</script>
