<template>
    <div :style="{ display: !showMessage ? 'block' : 'none' }" class="clearfix">
        <div class="chart-viewer">
            <!-- <FrameView :styles="{width: '100%', height: '100%' }" :url="chartIframeURL" /> -->
                <fusioncharts
                :options="options"
                :dataSource="dataSource.columnData"
                :style="{ 'text-align': 'center' }"
                ></fusioncharts>
                <fusioncharts
                width="600"
                height="600"
                type="bar2d"
                dataFormat="json"
                :dataSource="dataSource.barData">
                </fusioncharts>
                <br/>
                <button @click="exportToPdf">Export to PDF</button>
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
import FusionCharts from 'fusioncharts'

export default {
    name: 'ClientSideExport',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "columnData":
    {
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
    },
    "barData":
    {
      "chart": {
        "caption": "Lead sources by industry",
        "yAxisName": "Number of Leads",
        "alignCaptionWithCanvas": "0",
        "plotToolText": "<b>$dataValue</b> leads received",
        "theme": "fusion"
      },

      "data": [{
          "label": "Travel & Leisure",
          "value": "41"
        },
        {
          "label": "Advertising/Marketing/PR",
          "value": "39"
        },
        {
          "label": "Other",
          "value": "38"
        },
        {
          "label": "Real Estate",
          "value": "32"
        },
        {
          "label": "Communications/Cable/Phone",
          "value": "26"
        },
        {
          "label": "Construction",
          "value": "25"
        },
        {
          "label": "Entertainment",
          "value": "25"
        },
        {
          "label": "Staffing Firm/Full Time/Temporary",
          "value": "24"
        },
        {
          "label": "Transportation/Logistics",
          "value": "23"
        },
        {
          "label": "Utilities",
          "value": "22"
        },
        {
          "label": "Aerospace/Defense Products",
          "value": "18"
        },
        {
          "label": "Banking/Finance/Securities",
          "value": "16"
        },
        {
          "label": "Consumer Products - Non-Durables",
          "value": "15"
        },
        {
          "label": "Distribution",
          "value": "13"
        },
        {
          "label": "Education",
          "value": "12"
        },
        {
          "label": "Health Products & Services",
          "value": "11"
        },
        {
          "label": "Hospitality & Hotels",
          "value": "10"
        },
        {
          "label": "Non-Business/Residential",
          "value": "6"
        },
        {
          "label": "Pharmaceutical",
          "value": "4"
        },
        {
          "label": "Printing & Publishing",
          "value": "1"
        },
        {
          "label": "Professional Services",
          "value": "1"
        },
        {
          "label": "VAR/ISV",
          "value": "1"
        },
        {
          "label": "Warranty Administrators",
          "value": "1"
        }
      ]
    }
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
    <button @click="exportToPdf">Export to PDF</button>
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
            type: "column2d",
            dataFormat: "json",
            dataSource: dataSource
        },
        methods: {
            exportToPdf: function(){
                FusionCharts.batchExport({
                    exportFormat:'pdf'
                });
            }
        }
    });
});`,
            options: {
                width: '600',
                height: '400',
                type: "column2d",
                dataFormat: "json",
                creditLabel: 'false',
            },
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    methods: {
        exportToPdf: function(){
            FusionCharts.batchExport({
                exportFormat:'pdf'
            });
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
