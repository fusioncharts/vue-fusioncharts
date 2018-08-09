<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
    </sample-wrapper>
</template>

<script>

import mixin from './common/SamplesMixin'

export default {
    mixins:[mixin],
    name: 'ColumnAreaLineCombiChart',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
        "caption": "Expense Analysis",
        "subCaption": "ACME Inc.",
        "xAxisname": "Region",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [{
        "category": [{
        "label": "East"
        }, {
        "label": "West"
        }, {
        "label": "South"
        }, {
        "label": "North"
        }]
    }],
    "dataset": [{
        "seriesName": "Actual Expenses",
        "data": [{
        "value": "1441290"
        }, {
        "value": "855912"
        }, {
        "value": "911404"
        }, {
        "value": "648136"
        }]
    }, {
        "seriesName": "Budgeted Expenses",
        "renderAs": "line",
        "data": [{
        "value": "1297430"
        }, {
        "value": "776485"
        }, {
        "value": "685352"
        }, {
        "value": "726791"
        }]
    }, {
        "seriesName": "Unknown liabilities",
        "renderAs": "area",
        "showAnchors" : "0",
        "data": [{
        "value": "143860"
        }, {
        "value": "79427"
        }, {
        "value": "226052"
        }, {
        "value": "78655"
        }]
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
    ></fusioncharts>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import MSCombi2D from 'fusioncharts/viz/mscombi2d'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, MSCombi2D)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/; 

var app = new Vue({
    el: '#app',
    data: {
        type: 'mscombi2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: dataSource
    }
});`,
        options: {
                type: "mscombi2d",
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
    }
}
</script>

<style>

</style>
