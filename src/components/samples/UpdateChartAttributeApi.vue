<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
                <fusioncharts
                :options="options"
                :dataSource="dataSource"
                ref="fc"
                :style="{ 'text-align': 'center' }"
                ></fusioncharts>
                <br />
                <div :style="{textAlign: 'center'}">
                    <button class='btn btn-outline-secondary btn-sm' @click="changeCaption">CHANGE CAPTION TO: CAPTION</button>
                    <button class='btn btn-outline-secondary btn-sm' @click="changeXAxisName">CHANGE X_AXIS NAME TO: X-AXIS NAME</button>
                    <button class='btn btn-outline-secondary btn-sm' @click="changeYAxisName">CHANGE Y_AXIS NAME TO: Y-AXIS NAME</button>
                    <button class='btn btn-outline-secondary btn-sm' @click="resetAttr">Reset</button>
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
        <button @click="changeCaption">CHANGE CAPTION TO: CAPTION</button>
        <button @click="changeXAxisName">CHANGE X_AXIS NAME TO: X-AXIS NAME</button>
        <button @click="changeYAxisName">CHANGE Y_AXIS NAME TO: Y-AXIS NAME</button>
        <button @click="resetAttr">RESET</button>
    </div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts'

//import the themes
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
        dataSource: dataSource
    },
    methods:{
        // chnages caption text
        changeCaption: function () {
            const chart = this.$refs.fc.chartObj;
            chart.setChartAttribute('caption', 'Caption');
        },
        // changes x axis name
        changeXAxisName: function () {
            const chart = this.$refs.fc.chartObj;
            chart.setChartAttribute('xAxisName', 'X-Axis Name');
        },
        // changes y axis name
        changeYAxisName: function () {
            const chart = this.$refs.fc.chartObj;
            chart.setChartAttribute('yAxisName', 'Y-Axis Name');
        },
        // resets all chart attributes to default
        resetAttr: function () {
            const chart = this.$refs.fc.chartObj;
            Object.entries(this.dataSource.chart).forEach(el => chart.setChartAttribute(el[0], el[1]));
        }
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
        changeCaption: function () {
            const chart = this.$refs.fc.chartObj;
            chart.setChartAttribute('caption', 'Caption');
        },
        changeXAxisName: function () {
            const chart = this.$refs.fc.chartObj;
            chart.setChartAttribute('xAxisName', 'X-Axis Name');
        },
        changeYAxisName: function () {
            const chart = this.$refs.fc.chartObj;
            chart.setChartAttribute('yAxisName', 'Y-Axis Name');
        },
        resetAttr: function () {
            const chart = this.$refs.fc.chartObj;
            Object.entries(this.dataSource.chart).forEach(el => chart.setChartAttribute(el[0], el[1]));
        }
    }
}
</script>

<style>

</style>
