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
    name: 'RenderAMap',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
    },
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [

            {
                "minvalue": "0.5",
                "maxvalue": "1.0",
                "color": "#FFD74D"
            },
            {
                "minvalue": "1.0",
                "maxvalue": "2.0",
                "color": "#FB8C00"
            },
            {
                "minvalue": "2.0",
                "maxvalue": "3.0",
                "color": "#E65100"
            }
        ]
    },
    "data": [{
            "id": "NA",
            "value": ".82",
            "showLabel": "1"

        },
        {
            "id": "SA",
            "value": "2.04",
            "showLabel": "1"
        },
        {
            "id": "AS",
            "value": "1.78",
            "showLabel": "1"

        },
        {
            "id": "EU",
            "value": ".40",
            "showLabel": "1"
        },
        {
            "id": "AF",
            "value": "2.58",
            "showLabel": "1"
        },
        {
            "id": "AU",
            "value": "1.30",
            "showLabel": "1"
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
    ></fusioncharts>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Maps from 'fusioncharts/maps'
import World from 'fusioncharts/maps/es/fusioncharts.world'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Maps, World)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/; 

var app = new Vue({
        el: '#app',
        data: {
            width: '100%',
            height: '400',
            type: 'world',
            dataFormat: 'json',
            dataSource: dataSource
        }
    });
});`,
        options: {
            width: '100%',
            height: '400',
            type: "world",
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
