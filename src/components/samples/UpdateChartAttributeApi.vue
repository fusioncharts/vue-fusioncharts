<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
                <fusioncharts
                :options="options"
                :dataSource="dataSource"
                ref="fc"
                :style="{ 'text-align': 'center' }"
                ></fusioncharts>
                <br />
                <div class="change-type">
                    <div>
                    <input name='theme' type="radio" @change="onChangeTheme" value="Fusion" checked/>
                    <label>Fusion</label>
                    </div>
                    <div>
                    <input name='theme' type="radio" @change="onChangeTheme" value="Gammel" />
                    <label>Gammel</label>
                    </div>
                    <div>
                    <input name='theme' type="radio" @change="onChangeTheme" value="Candy" />
                    <label>Candy</label>
                    </div>
                    <div>
                    <input name='theme' type="radio" @change="onChangeTheme" value="Zune" />
                    <label>Zune</label>
                    </div>
                    <div>
                    <input name='theme' type="radio" @change="onChangeTheme" value="Ocean" />
                    <label>Ocean</label>
                    </div>
                    <div>
                    <input name='theme' type="radio" @change="onChangeTheme" value="Carbon" />
                    <label>Carbon</label>
                    </div>
                </div>
    </sample-wrapper>
</template>

<script>

import mixin from './common/SamplesMixin'
import extend from 'extend'

export default {
    mixins:[mixin],
    name: 'UpdateChartAttribute',
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
    ref="fc"
    ></fusioncharts>
    <button @click="changeBackground">Change Chart Background</button>
    <button @click="makeCaptionLeft">Make Caption text left-aligned</button>
    <button @click="resetAttr">Reset Attributes</button>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D)

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
    created: function(){
        this.originalData = JSON.parse(JSON.stringify(this.dataSource)); //for deep copy
    },
    methods:{
        // Changes chart background
        changeBackground: function(){
            const data = Object.assign({}, this.dataSource); //copy of object
            data.chart.bgColor = '#efefef';
            this.dataSource = data;
        },
        // Resets all the chart data to it's initial verison
        resetAttr: function(){
            this.dataSource = JSON.parse(JSON.stringify(this.originalData));
        },
        // Makes the caption text left aligned
        makeCaptionLeft: function(){
            const data = Object.assign({}, this.dataSource);
            data.chart.captionAlignment = 'left';
            this.dataSource = data;
        }
    }
});`,
        options: {
            width: '100%',
            height: '400',
            type: "column2d",
            dataFormat: "json",
            creditLabel: 'false',
        },
        dataSource: null
        }
    },
    created: function(){
        this.dataSource = JSON.parse(this.sourceData)
        this.originalData = JSON.parse(this.sourceData);
    },
    methods:{
        onChangeTheme: function (e) {
            const chart = this.$refs.fc.chartObj,
                theme = e.target.value.toLowerCase();
            chart.setChartAttribute('theme', theme);
        }
    }
}
</script>

<style>

</style>
