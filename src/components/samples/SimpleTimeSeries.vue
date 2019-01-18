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
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json"
).then(jsonify);
var schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json"
).then(jsonify);

import mixin from "./common/SamplesMixin";
import FusionCharts from "fusioncharts";
export default {
  mixins: [mixin],
  name: "SimpleTimeSeries",
  props: ["showMessage"],
  data() {
    return {
      sourceData: `// A shortened version of the data is given here.
// Please check the link below to see the complete data:
// https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/data.json
[
  [
      "United States",
      "1/4/2011",
      16.448
  ],
  [
      "United States",
      "1/5/2011",
      272.736
  ],
  [
      "United States",
      "1/5/2011",
      11.784
  ],
  [
      "United States",
      "1/5/2011",
      3.54
  ],
  [
      "United States",
      "1/6/2011",
      19.536
  ],
  [
      "United States",
      "1/7/2011",
      2573.82
  ],
  [
      "United States",
      "1/7/2011",
      609.98
  ],
  [
      "United States",
      "1/7/2011",
      391.98
  ],
  [
      "United States",
      "1/7/2011",
      755.96
  ],
  [
      "United States",
      "1/7/2011",
      19.44
  ],
  [
      "United States",
      "1/7/2011",
      12.78
  ],
  [
      "United States",
      "1/7/2011",
      31.12
  ],
  [
      "United States",
      "1/7/2011",
      6.54
  ],
  [
      "United States",
      "1/7/2011",
      5.48
  ],
  [
      "United States",
      "1/8/2011",
      76.728
  ],
  [
      "United States",
      "1/8/2011",
      10.43
  ],
  [
      "United States",
      "1/10/2011",
      31.2
  ],
  [
      "United States",
      "1/10/2011",
      9.344
  ],
  [
      "United States",
      "1/11/2011",
      51.94
  ],
  [
      "United States",
      "1/11/2011",
      2.89
  ],
  [
      "United States",
      "1/12/2011",
      9.94
  ],
  [
      "United States",
      "1/14/2011",
      1325.85
  ],
  [
      "United States",
      "1/14/2011",
      572.58
  ],
  [
      "United States",
      "1/14/2011",
      646.74
  ],
  [
      "United States",
      "1/14/2011",
      545.94
  ],
  [
      "United States",
      "1/14/2011",
      333.999
  ],
  [
      "United States",
      "1/14/2011",
      50.94
  ],
  [
      "United States",
      "1/14/2011",
      19.9
  ],
  [
      "United States",
      "1/14/2011",
      11.36
  ],
  [
      "United States",
      "1/14/2011",
      37.408
  ],
  [
      "United States",
      "1/14/2011",
      5.64
  ],
  [
      "United States",
      "1/14/2011",
      3.438
  ],
  [
      "United States",
      "1/15/2011",
      61.96
  ],
  [
      "United States",
      "1/16/2011",
      149.95
  ],
  [
      "United States",
      "1/17/2011",
      127.104
  ],
  [
      "United States",
      "1/17/2011",
      124.2
  ],
  [
      "United States",
      "1/17/2011",
      30.072
  ],
  [
      "United States",
      "1/17/2011",
      18.588
  ],
  [
      "United States",
      "1/19/2011",
      64.864
  ],
  [
      "United States",
      "1/20/2011",
      181.47
  ],
  [
      "United States",
      "1/20/2011",
      56.064
  ],
  [
      "United States",
      "1/20/2011",
      108.72
  ],
  [
      "United States",
      "1/20/2011",
      32.34
  ],
  [
      "United States",
      "1/21/2011",
      1067.94
  ],
  [
      "United States",
      "1/21/2011",
      699.93
  ],
  [
      "United States",
      "1/21/2011",
      272.94
  ],
  [
      "United States",
      "1/21/2011",
      247.716
  ],
  [
      "United States",
      "1/21/2011",
      66.58
  ],
  [
      "United States",
      "1/21/2011",
      43.92
  ],
  [
      "United States",
      "1/21/2011",
      67.194
  ],
  [
      "United States",
      "1/21/2011",
      23.34
  ],
  [
      "United States",
      "1/21/2011",
      38.6
  ],
  [
      "United States",
      "1/21/2011",
      29.7
  ],
  [
      "United States",
      "1/21/2011",
      22.96
  ],
  [
      "United States",
      "1/21/2011",
      19.05
  ],
  [
      "United States",
      "1/21/2011",
      13.98
  ],
  [
      "United States",
      "1/21/2011",
      19.36
  ],
  [
      "United States",
      "1/21/2011",
      14.73
  ],
  [
      "United States",
      "1/21/2011",
      19.3
  ],
  [
      "United States",
      "1/21/2011",
      6.63
  ],
  [
      "United States",
      "1/22/2011",
      25.248
  ],
  [
      "United States",
      "1/24/2011",
      40.08
  ],
  [
      "United States",
      "1/24/2011",
      5.94
  ],
  [
      "United States",
      "1/27/2011",
      141.96
  ],
  [
      "United States",
      "1/27/2011",
      489.92
  ],
  [
      "United States",
      "1/27/2011",
      187.98
  ],
  [
      "United States",
      "1/27/2011",
      155.35
  ],
  [
      "United States",
      "1/27/2011",
      62.82
  ],
  [
      "United States",
      "1/27/2011",
      19.44
  ],
  [
      "United States",
      "1/27/2011",
      10.68
  ],
  [
      "United States",
      "1/27/2011",
      16.68
  ],
  [
      "United States",
      "1/27/2011",
      12.42
  ],
  [
      "United States",
      "1/28/2011",
      333
  ],
  [
      "United States",
      "1/28/2011",
      57.23
  ],
  [
      "United States",
      "1/28/2011",
      36.44
  ],
  [
      "United States",
      "1/29/2011",
      3.928
  ],
  [
      "United States",
      "1/31/2011",
      229.94
  ],
  [
      "United States",
      "1/31/2011",
      10.56
  ],
  [
      "United States",
      "2/1/2011",
      290.666
  ],
  [
      "United States",
      "2/2/2011",
      468.9
  ],
  [
      "United States",
      "2/3/2011",
      180.96
  ],
  [
      "United States",
      "2/3/2011",
      18.336
  ],
  [
      "United States",
      "2/3/2011",
      12.35
  ],
  [
      "United States",
      "2/4/2011",
      83.84
  ],
  [
      "United States",
      "2/4/2011",
      13.272
  ],
  [
      "United States",
      "2/5/2011",
      17.248
  ],
  [
      "United States",
      "2/5/2011",
      34.24
  ],
  [
      "United States",
      "2/5/2011",
      82.896
  ],
  [
      "United States",
      "2/7/2011",
      144.95
  ],
  [
      "United States",
      "2/7/2011",
      161.61
  ],
  [
      "United States",
      "2/7/2011",
      15
  ],
  [
      "United States",
      "2/7/2011",
      8.952
  ],
  [
      "United States",
      "2/8/2011",
      64.96
  ],
  [
      "United States",
      "2/8/2011",
      115.36
  ],
  [
      "United States",
      "2/9/2011",
      14.56
  ],
  [
      "United States",
      "2/12/2011",
      1256.22
  ],
  [
      "United States",
      "2/12/2011",
      234.45
  ],
  [
      "United States",
      "2/12/2011",
      332.94
  ],
  [
      "United States",
      "2/12/2011",
      60.89
  ],
  [
      "United States",
      "2/12/2011",
      64.96
  ],
  [
      "United States",
      "2/12/2011",
      51.9
  ],
  [
      "United States",
      "2/12/2011",
      17.46
  ],
  [
      "United States",
      "2/12/2011",
      14.94
  ],
  [
      "United States",
      "2/12/2011",
      9.64
  ],
  [
      "United States",
      "2/13/2011",
      129.568
  ],
  [
      "United States",
      "2/15/2011",
      238.62
  ],
  [
      "United States",
      "2/15/2011",
      239.97
  ],
  [
      "United States",
      "2/15/2011",
      81.96
  ],
  [
      "United States",
      "2/15/2011",
      16.176
  ],
  [
      "United States",
      "2/16/2011",
      21.36
  ],
  [
      "United States",
      "2/17/2011",
      7.96
  ],
  [
      "United States",
      "2/17/2011",
      1.08
  ],
  [
      "United States",
      "2/18/2011",
      54.208
  ],
  [
      "United States",
      "2/19/2011",
      25.16
  ],
  [
      "United States",
      "2/19/2011",
      12.624
  ],
  [
      "United States",
      "2/21/2011",
      62.31
  ],
  [
      "United States",
      "2/21/2011",
      12.96
  ],
  [
      "United States",
      "2/21/2011",
      20.32
  ],
  [
      "United States",
      "2/22/2011",
      8.85
  ],
  [
      "United States",
      "2/23/2011",
      19.44
  ],
  [
      "United States",
      "2/24/2011",
      6.936
  ],
  [
      "United States",
      "12/29/2014",
      2.48
  ],
  [
      "United States",
      "12/30/2014",
      1207.84
  ],
  [
      "United States",
      "12/30/2014",
      300.98
  ],
  [
      "United States",
      "12/30/2014",
      302.376
  ],
  [
      "United States",
      "12/30/2014",
      209.7
  ],
  [
      "United States",
      "12/30/2014",
      101.12
  ],
  [
      "United States",
      "12/30/2014",
      68.46
  ],
  [
      "United States",
      "12/30/2014",
      258.75
  ],
  [
      "United States",
      "12/30/2014",
      393.568
  ],
  [
      "United States",
      "12/30/2014",
      34.58
  ],
  [
      "United States",
      "12/30/2014",
      19.6
  ],
  [
      "United States",
      "12/30/2014",
      6.03
  ],
  [
      "United States",
      "12/30/2014",
      12.53
  ],
  [
      "United States",
      "12/31/2014",
      323.136
  ],
  [
      "United States",
      "12/31/2014",
      90.93
  ],
  [
      "United States",
      "12/31/2014",
      209.3
  ],
  [
      "United States",
      "12/31/2014",
      52.776
  ],
  [
      "United States",
      "12/31/2014",
      20.72
  ],
  [
      "United States",
      "12/31/2014",
      13.904
  ],
  [
      "United States",
      "12/31/2014",
      3.024
  ]
]`,
      sourceSchema: `[
  {
    "name": "Country",
    "type": "string"
  },
  {
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
  },
  {
    "name": "Sales",
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
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json"
).then(jsonify);
var schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json"
).then(jsonify);

var app = new Vue({
    el: '#app',
    data: {
      width: "100%",
      height: "400",
      type: "timeseries",
      dataFormat: "json",
      dataSource: {
        caption: { text: "Online Sales of a SuperStore in the US" },
        data: null,
        yAxis: [
          {
            plot: [
              {
                value: "Sales ($)"
              }
            ]
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
        caption: { text: "Online Sales of a SuperStore in the US" },
        data: null,
        yAxis: [
          {
            plot: [
              {
                value: "Sales ($)"
              }
            ]
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
