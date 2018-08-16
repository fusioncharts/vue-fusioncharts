<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        @disposed="disposed"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
    <div class="text-style" >{{message}}</div>
    </sample-wrapper>
</template>

<script>
import mixin from './common/SamplesMixin'
import FusionCharts from 'fusioncharts'
var handler = function () { this.message = 'Chart has completed rendering.' },
    bindedFn;
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
    <div>{{message}}</div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'

//import the theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/,
    handler = function () { this.message = 'Chart has completed rendering.' },
    bindedFn;

var app = new Vue({
    el: '#app',
    data: {
        width: '100%',
        height: '400',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: dataSource,
        message: 'You will see a notification here after chart completes rendering.'
    },
    mounted: function () {
            // binds the function with the context of vue
            bindedFn = handler.bind(this);
            // adds listener in FusionCharts
            FusionCharts.addEventListener('rendered', bindedFn);
        },
    methods: {
        // removes the listener when the instance of chart gets disposed
        disposed: function () {
            FusionCharts.removeEventListener('rendered', bindedFn);
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
        message: 'You will see a notification here after chart completes rendering.'
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    mounted: function () {
            bindedFn = handler.bind(this);
            FusionCharts.addEventListener('rendered', bindedFn);
        },
    methods: {
        disposed: function () {
            FusionCharts.removeEventListener('rendered', bindedFn);
        }
    }
}
</script>
