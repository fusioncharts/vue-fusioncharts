<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
                <div class="min-size">
                    <div id="container" ref="container" class='dynamic-container'>
                        <fusioncharts
                        :options="options"
                        :dataSource="dataSource"
                        ref="fc"
                        :style="{ 'width': '100%', 'height': '100%' }"
                        ></fusioncharts>
                    </div>
                </div>
                <br />
                <div class="change-type">
                    <div>
                    <input name='chartSize' type="radio" @change="onChartSizeChange" value="400x250"/>
                    <label>400 &#10005; 250</label>
                    </div>
                    <div>
                    <input name='chartSize' type="radio" @change="onChartSizeChange" value="600x350" checked/>
                    <label>600 &#10005; 350</label>
                    </div>
                    <div>
                    <input name='chartSize' type="radio" @change="onChartSizeChange" value="700x400" />
                    <label>700 &#10005; 400</label>
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
    <div>
        <div id="container" ref="container">
            <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataFormat="dataFormat"
            :dataSource="dataSource"
            ref="fc"
            ></fusioncharts>
        </div>
    </div>
    <br />
    <div class="change-type">
        <div>
        <input name='chartSize' type="radio" @change="onChartSizeChange" value="400x250"/>
        <label>400 &#10005 250</label>
        </div>
        <div>
        <input name='chartSize' type="radio" @change="onChartSizeChange" value="600x350" checked/>
        <label>600 &#10005 350</label>
        </div>
        <div>
        <input name='chartSize' type="radio" @change="onChartSizeChange" value="700x400" />
        <label>700 &#10005 400</label>
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
        height: '100%',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: dataSource
    },
    methods:{
        // changes the height and width of the parent container of FusionCharts
        onChartSizeChange: function (e) {
            const container = this.$refs.container,
                size = e.target.value.split('x');
            container.style.width = size[0] + 'px';
            container.style.height = size[1] + 'px';
        }
    }
});`,
        options: {
            width: '100%',
            height: '100%',
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
        onChartSizeChange: function (e) {
            const container = this.$refs.container,
                size = e.target.value.split('x');
            container.style.width = size[0] + 'px';
            container.style.height = size[1] + 'px';
        }
    }
}
</script>

<style>

</style>
