<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        ref="fc"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
        <br>
        <div class="change-type">
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="none" checked/>
            <label>None</label>
            </div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="0" />
            <label>Apache</label>
            </div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="1" />
            <label>Microsoft</label>
            </div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="2" />
            <label>Zeus</label>
            </div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="3" />
            <label>Other</label>
            </div>
        </div>
    </sample-wrapper>
</template>

<script>

import mixin from './common/SamplesMixin'
export default {
    mixins: [mixin],
    name: 'Pie3dChart',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
    "caption": "Market Share of Web Servers",
    "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
    "showLegend": "1",
    "showPercentValues": "1",
    "legendPosition": "bottom",
    "useDataPlotColorForLabels": "1",
    "enableMultiSlicing": "0",
    "theme": "fusion"
    },
    "data": [
        {
            "label": "Apache",
            "value": "32647479"
        },
        {
            "label": "Microsoft",
            "value": "22100932"
        }, {
            "label": "Zeus",
            "value": "14376"
        }, {
            "label": "Other",
            "value": "18674221"
        }
    ]
}
`,
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
    <br>
        <div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="none" checked/>
            <label>None</label>
            </div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="0" />
            <label>Apache</label>
            </div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="1" />
            <label>Microsoft</label>
            </div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="2" />
            <label>Zeus</label>
            </div>
            <div>
            <input name='items' type="radio" @change="onChangeItem" value="3" />
            <label>Other</label>
            </div>
        </div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Pie2D from 'fusioncharts/viz/pie2d'

//import the theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Pie2D, Fusion)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/; 

var app = new Vue({
    el: '#app',
    data: {
        type: 'pie2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: dataSource
    },
    methods: {
        onChangeItem: function (e) {
            const chart = this.$refs.fc.chartObj,
                value = e.target.value;
            if (value === 'none') {
                var iterator = this.dataSource.data.keys(),
                    key;
                for (key of iterator) {
                    chart.slicePlotItem(key, false);
                }
            } else {
                chart.slicePlotItem(value, true);
            }
        }
    }
});`,
        options: {
                type: "pie2d",
                width: "100%",
                height: "400",
                dataFormat: "json"
            }
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    methods: {
        onChangeItem: function (e) {
            const chart = this.$refs.fc.chartObj,
                value = e.target.value;
            if (value === 'none') {
                var iterator = this.dataSource.data.keys(),
                    key;
                for (key of iterator) {
                    chart.slicePlotItem(key, false);
                }
            } else {
                chart.slicePlotItem(value, true);
            }
        }
    }
}
</script>

<style>

</style>
