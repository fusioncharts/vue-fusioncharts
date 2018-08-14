<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        ref="fc"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
        <div :style="{textAlign: 'center'}">
            <button class='btn btn-outline-secondary btn-sm' @click="sliceOutItems">Slice out Microsoft</button>
            <button class='btn btn-outline-secondary btn-sm' @click="sliceInItems">Slice in Microsoft</button>
        </div>
    </sample-wrapper>
</template>

<script>

import mixin from './common/SamplesMixin'
export default {
    mixins: [mixin],
    name: 'Pie3dChart',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
	"chart": {
		"caption": "Market Share of Web Servers",
		"plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
		"showLegend": "1",
		"showPercentValues": "1",
		"legendPosition": "bottom",
		"useDataPlotColorForLabels": "1",
		"theme": "fusion"
	},
	"data": [{
		"label": "Apache",
		"value": "32647479"
	}, {
		"label": "Microsoft",
		"value": "22100932"
	}, {
		"label": "Zeus",
		"value": "14376"
	}, {
		"label": "Other",
		"value": "18674221"
	}]
}`,
    sourceHTML:
`<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ref="fc"
    ></fusioncharts>
    <div>
        <button @click="sliceOutItems">Slice out Microsoft</button>
        <button @click="sliceInItems">Slice in Microsoft</button>
    </div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Pie2D from 'fusioncharts/viz/pie2d'

//import the theme
import * as FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Pie2D, Fusion)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/; 

var app = new Vue({
    el: '#app',
    data: {
        type: 'pie2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: dataSource
    },
    methods: {
        sliceOutItems: function () {
            const chart = this.$refs.fc.chartObj;
            chart.slicePlotItem(1, true);
        },
        sliceInItems: function () {
            const chart = this.$refs.fc.chartObj;
            chart.slicePlotItem(1, false);
        }
    }
});`,
        options: {
                type: "pie2d",
                width: "100%",
                height: "400",
                dataFormat: "json"
            }
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    methods: {
        sliceOutItems: function () {
            const chart = this.$refs.fc.chartObj;
            chart.slicePlotItem(1, true);
        },
        sliceInItems: function () {
            const chart = this.$refs.fc.chartObj;
            chart.slicePlotItem(1, false);
        }
    }
}
</script>

<style>

</style>
