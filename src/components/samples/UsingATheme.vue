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
    name: 'UsingATheme',
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
        "theme": "gammel"
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
    ></fusioncharts>
</div>`,
sourceJS:
`FusionCharts.ready(function() {

    Vue.use(VueFusionCharts);
    
    // Load datasource from data.json
    var dataSource = getDataSource(); 

    var app = new Vue({
        el: '#app',
        data: {
            width: '800',
            height: '400',
            type: 'column2d',
            dataFormat: 'json',
            dataSource: dataSource
        }
    });
});`,
        options: {
            width: '800',
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
    }
}
</script>

<style>

</style>
