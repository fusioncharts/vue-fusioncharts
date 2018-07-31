<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
        <div v-html="displayValue" class="chart-hover" />
    </sample-wrapper>
</template>

<script>

import mixin from './common/SamplesMixin'
export default {
    mixins:[mixin],
    name: 'TriggerEventFromChart',
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
    :events="events"
    :dataSource="dataSource"
    ></fusioncharts>
    <div v-html="displayValue"/>
</div>`,
        sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D)

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
        events: {
            dataplotRollover: null
        },
        displayValue:'Hover on the plot to see the value along with the label'
    },
    created: function(){
        this.options.events.dataplotRollover = (e, arg)=>{
            this.displayValue = \`You're are currently hovering over <strong>\${arg.categoryLabel}</strong> whose value is <strong>\${arg.displayValue}</strong>\`;
        }
    },
});`,
        options: {
            width: '100%',
            height: '400',
            type: "column2d",
            dataFormat: "json",
            creditLabel: 'false',
            events: {
                dataplotRollover: null
            }
        },
        displayValue:'Hover on the plot to see the value along with the label'
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    created: function(){
        this.options.events.dataplotRollover = (e, arg)=>{
            this.displayValue = `You're are currently hovering over <strong>${arg.categoryLabel}</strong> whose value is <strong>${arg.displayValue}</strong>`;
        }
    }
}
</script>

<style>

</style>
