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
    mixins:[ mixin ],
    name: 'RenderAWidget',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0"
    },
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "50",
            "code": "#F2726F"
        }, {
            "minValue": "50",
            "maxValue": "75",
            "code": "#FFC533"
        }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#62B58F"
        }]
    },
    "dials": {
          "dial": [{
              "value": "81"
          }]
    }
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
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets'

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Widgets, FusionTheme)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/;

var app = new Vue({
    el: '#app',
    data: {
        width: '100%',
        height: '400',
        type: 'angulargauge',
        dataFormat: 'json',
        dataSource: dataSource
    }
});`,
        options: {
            width: '100%',
            height: '400',
            type: "angulargauge",
            dataFormat: "json",
            creditLabel: 'false',
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
