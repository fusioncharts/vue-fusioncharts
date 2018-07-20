<template>
    <div :style="{ display: !showMessage ? 'block' : 'none' }" class="clearfix">
        <div class="chart-viewer">
            <!-- <FrameView :styles="{width: '100%', height: '100%' }" :url="chartIframeURL" /> -->
                <fusioncharts
                :options="options"
                :dataSource="dataSource"
                :style="{ 'text-align': 'center' }"
                ></fusioncharts>
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

export default {
    name: 'RenderAMap',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
    },
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [

            {
                "minvalue": "0.5",
                "maxvalue": "1.0",
                "color": "#FFD74D"
            },
            {
                "minvalue": "1.0",
                "maxvalue": "2.0",
                "color": "#FB8C00"
            },
            {
                "minvalue": "2.0",
                "maxvalue": "3.0",
                "color": "#E65100"
            }
        ]
    },
    "data": [{
            "id": "NA",
            "value": ".82",
            "showLabel": "1"

        },
        {
            "id": "SA",
            "value": "2.04",
            "showLabel": "1"
        },
        {
            "id": "AS",
            "value": "1.78",
            "showLabel": "1"

        },
        {
            "id": "EU",
            "value": ".40",
            "showLabel": "1"
        },
        {
            "id": "AF",
            "value": "2.58",
            "showLabel": "1"
        },
        {
            "id": "AU",
            "value": "1.30",
            "showLabel": "1"
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
`FusionCharts.ready(function() {

    Vue.use(VueFusionCharts);
    
    // Load datasource from data.json
    var dataSource = getDataSource(); 

    var app = new Vue({
        el: "#app",
        data: {
            width: '600',
            height: '400',
            type: "world",
            dataFormat: "json",
            dataSource: dataSource
        }
    });
});`,
        options: {
            width: '600',
            height: '400',
            type: "world",
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
    components:{
        TabView,
        Tab,
        CodeWrapper
    }
}
</script>

<style>

</style>
