<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        @dataplotRollover="dataplotRollover"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
        <div v-html="displayValue" class="text-style" />
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
    :dataSource="dataSource"
    @dataplotRollover="dataplotRollover"
    ></fusioncharts>
    <div v-html="displayValue"/>
</div>`,
        sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'

//import the theme
import * as FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme)

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
    methods: {
        dataplotRollover: (e) => {
            this.displayValue = \`You are currently hovering over <strong>\${e.data.categoryLabel}</strong> whose value is <strong>\${e.data.displayValue}</strong>\`;
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
        displayValue:'Hover on the plot to see the value along with the label'
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    methods: {
        dataplotRollover: function (e) {
            this.displayValue = `You are currently hovering over <strong>${e.data.categoryLabel}</strong> whose value is <strong>${e.data.displayValue}</strong>`;
        }
    }
}
</script>

<style>

</style>
