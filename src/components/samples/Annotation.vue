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
    name: 'SimpleChart',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
        "caption": "Bakersfield Central - Total footfalls",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors (In 1000s)",
        "showValues": "0",
        "theme": "fusion"
    },
    "annotations": {
        "groups": [
            {
                "id": "anchor-highlight",
                "items": [
                    {
                        "id": "high-star",
                        "type": "circle",
                        "x": "$dataset.0.set.2.x",
                        "y": "$dataset.0.set.2.y",
                        "radius": "12",
                        "color": "#6baa01",
                        "border": "2",
                        "borderColor": "#f8bd19"
                    },
                    {
                        "id": "label",
                        "type": "text",
                        "text": "Highest footfall 25.5K",
                        "fillcolor": "#6baa01",
                        "rotate": "90",
                        "x": "$dataset.0.set.2.x+75",
                        "y": "$dataset.0.set.2.y-2"
                    }
                ]
            }
        ]
    },
    "data": [
        {
            "label": "Mon",
            "value": "15123"
        },
        {
            "label": "Tue",
            "value": "14233"
        },
        {
            "label": "Wed",
            "value": "25507"
        },
        {
            "label": "Thu",
            "value": "9110"
        },
        {
            "label": "Fri",
            "value": "15529"
        },
        {
            "label": "Sat",
            "value": "20803"
        },
        {
            "label": "Sun",
            "value": "19202"
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
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
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
        type: 'spline',
        dataFormat: 'json',
        dataSource: dataSource
    }
});`,
        options: {
            width: '100%',
            height: '400',
            type: "spline",
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
