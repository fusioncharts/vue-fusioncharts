<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        ref="fc"
        @dataPlotClick="onSliceClick"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
        <br>
        <div class="change-type">
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="none" checked/>
            <label>None</label>
            </div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="0" />
            <label>Apache</label>
            </div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="1" />
            <label>Microsoft</label>
            </div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="2" />
            <label>Zeus</label>
            </div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="3" />
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
    "theme": "fusion",
    "showlegend":"0"
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
    @dataPlotClick="onSliceClick"
    ref="fc"
    ></fusioncharts>
    <br>
        <div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="none" checked/>
            <label>None</label>
            </div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="0" />
            <label>Apache</label>
            </div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="1" />
            <label>Microsoft</label>
            </div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="2" />
            <label>Zeus</label>
            </div>
            <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="3" />
            <label>Other</label>
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
Vue.use(VueFusionCharts, FusionCharts, Charts, Fusion)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/; 

var app = new Vue({
    el: '#app',
    data: {
        type: 'pie2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: dataSource,
        radioValue: 'none',
        lastActive: 'none'
    },
    methods: {
        // function to slice items when radio buttons are clicked using the slicePlotItems api
        onChangeItem: function () {
            const chart = this.$refs.fc.chartObj,
                lastActive = this.lastActive,
                value = this.radioValue;
            this.lastActive = value;
            if (value === 'none') {
                chart.slicePlotItem(lastActive, false);
            } else {
                chart.slicePlotItem(value, true);
            }
        },
        // function to actiavte radio buttons when plots are clicked
        onSliceClick: function (e) {
            var isSliced = e.data.isSliced;
            if (isSliced) {
                this.lastActive = this.radioValue = 'none'
            } else {
                this.lastActive = this.radioValue = e.data.index
            }
        }
    }
});`,
        options: {
                type: "pie2d",
                width: "100%",
                height: "400",
                dataFormat: "json"
            },
        radioValue: 'none',
        lastActive: 'none'
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    methods: {
        onChangeItem: function () {
            const chart = this.$refs.fc.chartObj,
                lastActive = this.lastActive,
                value = this.radioValue;
            this.lastActive = value;
            if (value === 'none') {
                chart.slicePlotItem(lastActive, false);
            } else {
                chart.slicePlotItem(value, true);
            }
        },
        onSliceClick: function (e) {
            var isSliced = e.data.isSliced;
            if (isSliced) {
                this.lastActive = this.radioValue = 'none'
            } else {
                this.lastActive = this.radioValue = e.data.index
            }
        }
    }
}
</script>

<style>

</style>
