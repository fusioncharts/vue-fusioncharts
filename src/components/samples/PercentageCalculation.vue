<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        @dataplotRollover="dataplotRollover"
        @renderComplete="renderComplete"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
        <div v-html="displayValue" class="text-style"></div>
    </sample-wrapper>
</template>

<script>
import mixin from "./common/SamplesMixin";
export default {
  mixins: [mixin],
  name: "PercentageCalculation",
  props: ["showMessage"],
  data() {
    return {
      sourceData: `{
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
}`,
      sourceHTML: `<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    @dataplotRollover="dataplotRollover"
    ></fusioncharts>
    <div v-html="displayValue"></div>
</div>`,
      sourceJS: `import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/;

var app = new Vue({
    el: '#app',
    data: {
        width: '100%',
        height: '400',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: dataSource,
        displayValue:'Hover on the plot to see the value along with the label'
    },
    created: function () {
        let myData = this.dataSource.data;
        this.total = myData.reduce((p,c)=>p+Number(c.value), 0);
    },
    methods: {
        // uses the data info of the event 'dataplotrollover' and represents it
        dataplotRollover: function (e) {
            let value = (e.data.value / this.total * 100).toFixed(2);
            this.displayValue =  \`<strong>\${e.data.categoryLabel}</strong> is <strong>\${value}%</strong> of the total\`;
        }
    }
});`,
      options: {
        width: "100%",
        height: "400",
        type: "column2d",
        dataFormat: "json",
        creditLabel: "false"
      },
      displayValue: "Hover on the plot to see the value along with the label"
    };
  },
  computed: {
    dataSource: function() {
      return JSON.parse(this.sourceData);
    }
  },
  created: function() {
    let myData = this.dataSource.data;
    this.total = myData.reduce((p, c) => p + Number(c.value), 0);
  },
  methods: {
    dataplotRollover: function(e) {
      let value = (e.data.value / this.total * 100).toFixed(2);
      this.displayValue = `<strong>${
        e.data.categoryLabel
      }</strong> is <strong>${value}%</strong> of the total`;
    },
    renderComplete: function(chart) {
      console.log('Render completed');
    }
  }
};
</script>

<style>
</style>
