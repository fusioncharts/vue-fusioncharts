<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        @disposed="disposed"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
        <div class="text-style" v-html="message" ></div>
        <br>
        <div :style="{textAlign: 'center'}">
            <button class='btn btn-outline-secondary btn-sm' @click="attachHandler">TRACK DATA PLOT CLICK</button>
            <button class='btn btn-outline-secondary btn-sm negitive-btn' @click="removeHandler">Reset Listener</button>
        </div>
    </sample-wrapper>
</template>

<script>
import mixin from './common/SamplesMixin'
import FusionCharts from 'fusioncharts'
var handler = function (e) {
        this.message = `You have clicked plot ${e.data.categoryLabel} whose value is ${e.data.displayValue}.` 
     },
    attached = false,
    defaultMessage = 'Click on <b>TRACK DATA PLOT CLICK</b> button to listen to dataPlotClick event';
export default {
    mixins:[mixin],
    name: 'ChartInteractivity',
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
    "data": [
        {
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
}`,
    sourceHTML:
`<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    @disposed="disposed"
    ></fusioncharts>
    <div class="text-style" v-html="message" ></div>
    <br>
    <div>
        <button @click="attachHandler">TRACK DATA PLOT CLICK</button>
        <button @click="removeHandler">Reset Listener</button>
    </div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D)

// Copy datasource from 'Data' tab
var handler = function (e) {
        this.message = \`You have clicked plot \${e.data.categoryLabel} whose value is \${e.data.displayValue}.\`
     },
    attached = false,
    defaultMessage = 'Click on <b>TRACK DATA PLOT CLICK</b> button to listen to dataPlotClick event';

var app = new Vue({
    el: '#app',
    data: {
        width: '100%',
        height: '400',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: dataSource
    },
    methods: {
        attachHandler: function () {
            if (attached) return;
            attached = true;
            handler = handler.bind(this);
            this.message = 'Click on a plot to see the value along with the label'
            FusionCharts.addEventListener('dataPlotClick', handler);
        },
        removeHandler: function () {
            attached = false;
            this.message = defaultMessage;
            FusionCharts.removeEventListener('dataPlotClick', handler);
        },
        disposed: function () {
            FusionCharts.removeEventListener('dataPlotClick', handler);
        }
    }
    }
});`,
        options: {
            width: '100%',
            height: '400',
            type: "column2d",
            dataFormat: "json",
            creditLabel: 'false'
            },
        message: defaultMessage
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    methods: {
        attachHandler: function () {
            if (attached) return;
            attached = true;
            handler = handler.bind(this);
            this.message = 'Click on a plot to see the value along with the label'
            FusionCharts.addEventListener('dataPlotClick', handler);
        },
        removeHandler: function () {
            attached = false;
            this.message = defaultMessage;
            FusionCharts.removeEventListener('dataPlotClick', handler);
        },
        disposed: function () {
            FusionCharts.removeEventListener('dataPlotClick', handler);
        }
    }
}
</script>
