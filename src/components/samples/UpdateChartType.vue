<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
                <fusioncharts
                :options="options"
                :dataSource="dataSource"
                ref="fc"
                :style="{ 'text-align': 'center' }"
                ></fusioncharts>
                <br />
                <div class="change-type">
                    <div>
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Column2d" checked/>
                    <label>Column 2D Chart</label>
                    </div>
                    <div>
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Bar2d" />
                    <label>Bar 2D Chart</label>
                    </div>
                    <div>
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Line" />
                    <label>Line 2D Chart</label>
                    </div>
                </div>
    </sample-wrapper>
</template>

<script>

import mixin from './common/SamplesMixin'
import extend from 'extend'

export default {
    mixins:[mixin],
    name: 'UpdateChartAttribute',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
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
        <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Column2d" checked/>
            <label>Column 2D Chart</label>
            </div>
            <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Bar2d" />
            <label>Bar 2D Chart</label>
            </div>
            <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Line" />
            <label>Line 2D Chart</label>
            </div>
    </div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'
import Bar2D from 'fusioncharts/viz/bar2d'
import Line from 'fusioncharts/viz/line'

//import the theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D, Bar2D, Line, FusionTheme)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/;

var app = new Vue({
    el: '#app',
    data: {
        width: '100%',
        height: '400',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: dataSource
    },
    methods:{
        // uses the chartInstance API 'chartType' to change the chart type after render
        onChartTypeChange: function (e) {
            const chart = this.$refs.fc.chartObj,
                type = e.target.value.toLowerCase();
            chart.chartType(type);
        }
    });`,
        options: {
            width: '100%',
            height: '400',
            type: "column2d",
            dataFormat: "json",
            creditLabel: 'false',
        }
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    methods:{
        onChartTypeChange: function (e) {
            const chart = this.$refs.fc.chartObj,
                type = e.target.value.toLowerCase();
            chart.chartType(type);
        }
    }
}
</script>

<style>

</style>
