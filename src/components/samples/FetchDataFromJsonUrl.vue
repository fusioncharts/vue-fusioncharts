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
    mixins: [ mixin ],
    name: 'FetchDataFromJsonUrl',
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
    ></fusioncharts>
</div>`,
sourceJS:
`FusionCharts.ready(function() {

    Vue.use(VueFusionCharts);

    var app = new Vue({
        el: '#app',
        data: {
            type: 'mscombi2d',
            width: '800',
            height: '400',
            dataFormat: 'jsonurl',
            dataSource: 'data.json'
        }
    });
});`,
        options: {
                type: "column2d",
                width: "800",
                height: "400",
                dataFormat: "jsonurl"
            }
        }
    },
    computed: {
        dataSource: function(){
            return "./dist/samples/fetch-data-from-json-url/data.json"
        }
    }
}
</script>

<style>

</style>
