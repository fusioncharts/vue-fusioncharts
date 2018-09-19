<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        @beforeDataUpdate="beforeDataUpdate"
        @dataUpdated="dataUpdated"
        @drawComplete="drawComplete"
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
    @beforeDataUpdate="beforeDataUpdate"
    @dataUpdated="dataUpdated"
    @drawComplete="drawComplete"
    @renderComplete="renderComplete"
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
        displayValue: '<b>Status: </b>'
	},
    methods: {
		// Binding Life Cycle events
        beforeDataUpdate: function() {
			let prevValue = this.displayValue;
      		this.displayValue = prevValue + " beforeDataUpdate";
    	},
		dataUpdated: function() {
			let prevValue = this.displayValue;
			this.displayValue = prevValue + ", dataUpdated";
		},
		drawComplete: function() {
			let prevValue = this.displayValue;
			this.displayValue = prevValue + ", drawComplete";
		},
		renderComplete: function() {
			let prevValue = this.displayValue;
			this.displayValue = prevValue + ", renderComplete";
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
      displayValue: "<b>Status: </b>"
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
    beforeDataUpdate: function() {
      let prevValue = this.displayValue;
      this.displayValue = prevValue + " beforeDataUpdate";
    },
    dataUpdated: function() {
      let prevValue = this.displayValue;
      this.displayValue = prevValue + ", dataUpdated";
    },
    drawComplete: function() {
      let prevValue = this.displayValue;
      this.displayValue = prevValue + ", drawComplete";
    },
    renderComplete: function() {
      let prevValue = this.displayValue;
      this.displayValue = prevValue + ", renderComplete";
    }
  }
};
</script>

<style>
</style>
