<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        @dataplotdragend="dataplotdragend"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
    <div class="text-style" v-html='message'></div>
    </sample-wrapper>
</template>

<script>
import mixin from './common/SamplesMixin'
export default {
    mixins:[mixin],
    name: 'ChartInteractivity',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
      "chart": {
        "caption": "App Publishing Trend",
        "subCaption": "2012-2016",
        "xAxisName": "Years",
        "yAxisName" : "Total number of apps in store",
        "formatnumberscale": "1",
        "drawCrossLine":"1",
        "plotToolText" : "<b>$dataValue</b> apps on $seriesName in $label",
				"theme": "fusion"
      },

      "categories": [{
        "category": [{
          "label": "2012"
        }, {
          "label": "2013"
        }, {
          "label": "2014"
        }, {
          "label": "2015"
        },{
        "label": "2016"
        }
        ]
      }],
      "dataset": [{
        "seriesname": "iOS App Store",
        "data": [{
          "value": "125000"
        }, {
          "value": "300000"
        }, {
          "value": "480000"
        }, {
          "value": "800000"
        }, {
          "value": "1100000"
        }]
      }, {
        "seriesname": "Google Play Store",
        "data": [{
          "value": "70000"
        }, {
          "value": "150000"
        }, {
          "value": "350000"
        }, {
          "value": "600000"
        },{
          "value": "1400000"
        }]
      }, {
        "seriesname": "Amazon AppStore",
        "data": [{
          "value": "10000"
        }, {
          "value": "100000"
        }, {
          "value": "300000"
        }, {
          "value": "600000"
        },{
          "value": "900000"
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
    @dataplotdragend="dataplotdragend"
    ></fusioncharts>
    <div v-html='message'></div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import DragColumn from 'fusioncharts/viz/dragcolumn'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, DragColumn)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/;

var app = new Vue({
    el: '#app',
    data: {
        width: '100%',
        height: '400',
        type: 'dragcolumn2d',
        dataFormat: 'json',
        dataSource: dataSource
    },
    methods: {
        dataplotdragend: function(e){
          let startValue = FusionCharts.formatNumber(e.data.startValue),
            endValue = FusionCharts.formatNumber(e.data.endValue);
          this.message = \`You have dragged a plot of <b>\${e.data.datasetName}</b> dataset, its previous value was <b>\${startValue}</b> and its current value is <b>\${endValue}</b>\`;
        }
    }
});`,
        options: {
            width: '100%',
            height: '400',
            type: "dragcolumn2d",
            dataFormat: "json",
            creditLabel: 'false'
            },
        message: 'You have dragged a plot of ______ dataset, its previous value was _______ and its current value is _______'
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    methods: {
        dataplotdragend: function(e){
          let startValue = FusionCharts.formatNumber(e.data.startValue),
            endValue = FusionCharts.formatNumber(e.data.endValue);
          this.message = `You have dragged a plot of <b>${e.data.datasetName}</b> dataset, its previous value was <b>${startValue}</b> and its current value is <b>${endValue}</b>`;
        }
    }
}
</script>
