<template>
    <div :style="{ display: !showMessage ? 'block' : 'none' }" class="clearfix">
        <div class="chart-viewer">
            <!-- <FrameView :styles="{width: '100%', height: '100%' }" :url="chartIframeURL" /> -->
                <fusioncharts
                :options="options"
                :dataSource="dataSource"
                :style="{ 'text-align': 'center' }"
                ></fusioncharts>
                <br/>
                <div :style="{textAlign: 'center'}">
                    <button @click="updateData">Click to Update Data</button>
                </div>
        </div>
        <div class="code-viewer">
            <TabView border>
            <Tab label="JavaScript" slot='tab'>
                <div class="code-tab-container">
                <div class="code-tab">
                    <CodeWrapper
                    :styles="{width: '100%', height: '100%' }"
                    language="javascript"
                    :code="sourceJS"
                    />
                </div>
                </div>
            </Tab>
            <Tab label="HTML" slot='tab'>
                <div class="code-tab-container">
                <div class="code-tab">
                    <CodeWrapper
                    :styles="{width: '100%', height: '100%' }"
                    language="html"
                    :code="sourceHTML"
                    />
                </div>
                </div>
            </Tab>
            <Tab label="Data" slot='tab'>
                <div class="code-tab-container">
                <div class="code-tab">
                    <CodeWrapper
                    :styles="{width: '100%', height: '100%' }"
                    language="javascript"
                    :code="sourceData"
                    />
                </div>
                </div>
            </Tab>
            </TabView>
        </div>
        <div :styles="{ clear: 'both' }" />
        </div>
</template>

<script>

import TabView from './../TabView';
import Tab from './../Tab'
import CodeWrapper from './../CodeWrapper'
import extend from 'extend'

export default {
    name: 'UpdateChartData',
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
        "theme": "fusion",
        "updateAnimDuration":"0.4"
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
    <button @click="updateData">Click to Update Data</button>
</div>`,
sourceJS:
`FusionCharts.ready(function() {

    Vue.use(VueFusionCharts);
    
    // Load datasource from data.json
    var dataSource = getDataSource(); 

    var app = new Vue({
        el: '#app',
        data: {
            type: 'column2d',
            width: '400',
            height: '350',
            dataFormat: 'json',
            dataSource: dataSource
        },
        methods:{
            // Updates the chart data
            updateData: function(){
                const data = Object.assign({}, this.dataSource); //clones data
                data.data[2].label = 'This Label is Updated';
                data.data[2].value = this.getRandomNumber();

                data.data[3].label = 'This is updated as well';
                data.data[3].value = this.getRandomNumber();
                this.dataSource = data;
            },
            // Generates a random number between min and max
            getRandomNumber: function () {
                var max = 300, min = 50;
                return Math.round(((max - min) * Math.random()) + min);
            }
        },
    });
});`,
        options: {
            type: "Column2D",
            width: "600",
            height: "350",
            dataFormat: "json"
        },
        dataSource: null
        }
    },
    methods:{
        updateData: function(){
            const data = extend({}, this.dataSource);
            data.data[2].label = "This Label is Updated";
            data.data[2].value = this.getRandomNumber();

            data.data[3].label = "This is updated as well";
            data.data[3].value = this.getRandomNumber();
            this.dataSource = data;
        },
        getRandomNumber: function () {
            var max = 300, min = 50;
            return Math.round(((max - min) * Math.random()) + min);
        }
    },
    created: function(){
        this.dataSource = JSON.parse(this.sourceData)
    },
    components:{
        TabView,
        Tab,
        CodeWrapper
    }
}
</script>

<style>

</style>
