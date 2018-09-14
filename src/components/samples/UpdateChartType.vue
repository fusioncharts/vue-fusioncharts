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
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Column2d" checked/>
                    <label>Column 2D Chart</label>
                    </div>
                    <div>
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Bar2d" />
                    <label>Bar 2D Chart</label>
                    </div>
                    <div>
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Pie2d" />
                    <label>Pie 2D Chart</label>
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
        "caption": "Recommended Portfolio Split",
        "subCaption" : "For a net-worth of $1M",
        "showValues":"1",
        "showPercentInTooltip" : "0",
        "numberPrefix" : "$",
        "enableMultiSlicing":"1",
        "theme": "fusion"
    },
    "data": [{
        "label": "Equity",
        "value": "300000"
    }, {
        "label": "Debt",
        "value": "230000"
    }, {
        "label": "Bullion",
        "value": "180000"
    }, {
        "label": "Real-estate",
        "value": "270000"
    }, {
        "label": "Insurance",
        "value": "20000"
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
    <div>
        <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Column2d" checked/>
            <label>Column 2D Chart</label>
            </div>
            <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Bar2d" />
            <label>Bar 2D Chart</label>
            </div>
            <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Pie2d" />
            <label>Pie 2D Chart</label>
            </div>
    </div>
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
        type: 'column2d',
        dataFormat: 'json',
        dataSource: dataSource
    },
    methods:{
        // uses the chartInstance API 'chartType' to change the chart type after render
        onChartTypeChange: function (e) {
            const chart = this.$refs.fc.chartObj,
                type = e.target.value.toLowerCase();
            chart.chartType(type);
        }
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
    methods:{
        onChartTypeChange: function (e) {
            const chart = this.$refs.fc.chartObj,
                type = e.target.value.toLowerCase();
            chart.chartType(type);
        }
    }
}
</script>

<style>

</style>
