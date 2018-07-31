<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">    
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        :style="{ 'text-align': 'center' }"
        ref='fc'
        ></fusioncharts>
    </sample-wrapper>
</template>

<script>

import mixin from './common/SamplesMixin'

export default {
    mixins:[mixin],
    name: 'DrillDownChart',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
        "caption": "Sales of top 3 juice flavors last year",
        "subcaption": "Click on a column to see details",
        "xaxisname": "Flavor",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fusion",
        "rotateValues": "0"
    },
    "data": [
        {
            "label": "Apple",
            "value": "810000",
            "link": "newchart-xml-apple"
        },
        {
            "label": "Cranberry",
            "value": "620000",
            "link": "newchart-xml-cranberry"
        },
        {
            "label": "Grape",
            "value": "350000",
            "link": "newchart-xml-grape"
        }],
        "linkeddata": [
            {
                "id": "apple",
                "linkedchart": {
                "chart": {
                    "caption": "Apple Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "rotateValues": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [{
                    "label": "Q1",
                    "value": "157000",
                    "displayValue": "Q1, $157K"
                }, {
                    "label": "Q2",
                    "value": "172000",
                    "displayValue": "Q2, $172K"
                }, {
                    "label": "Q3",
                    "value": "206000",
                    "displayValue": "Q3, $206K"
                }, {
                    "label": "Q4",
                    "value": "275000",
                    "displayValue": "Q4, $275K"
                }]
                }
            },
            {
                "id": "cranberry",
                "linkedchart": {
                "chart": {
                    "caption": "Cranberry Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [
                    {
                    "label": "Q1",
                    "value": "102000",
                    "displayValue": "Q1, $102K"
                    },
                    {
                    "label": "Q2",
                    "value": "142000",
                    "displayValue": "Q2, $142K"
                    },
                    {
                    "label": "Q3",
                    "value": "187000",
                    "displayValue": "Q3, $187K"
                    },
                    {
                    "label": "Q4",
                    "value": "189000",
                    "displayValue": "Q4, $189K"
                    }
                ]
                }
            },
            {
                "id": "grape",
                "linkedchart": {
                "chart": {
                    "caption": "Grape Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "rotateValues": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [{
                    "label": "Q1",
                    "value": "45000",
                    "displayValue": "Q1, $45K"
                }, {
                    "label": "Q2",
                    "value": "72000",
                    "displayValue": "Q2, $72K"
                }, {
                    "label": "Q3",
                    "value": "95000",
                    "displayValue": "Q3, $95K"
                }, {
                    "label": "Q4",
                    "value": "108000",
                    "displayValue": "Q4, $108K"
                }]
                }
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
    ref="fc"
    ></fusioncharts>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'
import Pie2D from 'fusioncharts/viz/pie2d';

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D, Pie2D)

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
    methods: {
        configureLink: function(chart){
            this.chartInstance = chart; // Save it for further use
    
            // Configure Drilldown attributes 
            // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
            this.chartInstance.configureLink({
            type: "pie2d",
            overlayButton: {
                message: 'Back',
                fontColor: '880000',
                bgColor: 'FFEEEE',
                borderColor: '660000'
                }
            },0)
        }
    },
    mounted: function(){
        this.configureLink(this.$refs.fc.chartObj); // this.$refs.fc gets the vue-fusionchart component
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
    methods: {
        configureLink: function(chart){
            this.chartInstance = chart; // Save it for further use
    
            // Configure Drilldown attributes 
            // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
            this.chartInstance.configureLink({
            type: "pie2d",
            overlayButton: {
                message: 'Back',
                color: '6957da',
                bgColor: 'FFFFFF',
                borderColor: '6957da',
                padding:'5'
                }
            },0)
        }
    },
    mounted: function(){
        this.configureLink(this.$refs.fc.chartObj);
    }
}
</script>

<style>

</style>
