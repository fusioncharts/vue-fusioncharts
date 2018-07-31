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
    name: 'FetchDataFromXmlUrl',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`<chart caption="Countries With Most Oil Reserves [2017-18]" subcaption="In MMbbl = One Million barrels" xaxisname="Country" yaxisname="Reserves (MMbbl)" numbersuffix="K" theme="fusion">
    <set label="Venezuela" value="290" />
    <set label="Saudi" value="260" />
    <set label="Canada" value="180" />
    <set label="Iran" value="140" />
    <set label="Russia" value="115" />
    <set label="UAE" value="100" />
    <set label="US" value="30" />
    <set label="China" value="30" />
</chart>`,
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
import Column2D from 'fusioncharts/viz/column2d'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D)

var app = new Vue({
    el: '#app',
    data: {
        type: 'column2d',
        width: '100%',
        height: '400',
        dataFormat: 'xmlurl',
        dataSource: 'data.xml' // url of datasource
    }
});`,
        options: {
                type: "column2d",
                width: "100%",
                height: "400",
                dataFormat: "xmlurl"
            }
        }
    },
    computed: {
        dataSource: function(){
            return "./dist/samples/fetch-data-from-xml-url/data.xml"
        }
    }
}
</script>

<style>

</style>
