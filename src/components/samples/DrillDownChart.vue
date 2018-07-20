<template>
    <div :style="{ display: !showMessage ? 'block' : 'none' }" class="clearfix">
        <div class="chart-viewer">
            <!-- <FrameView :styles="{width: '100%', height: '100%' }" :url="chartIframeURL" /> -->
                <fusioncharts
                :options="options"
                :dataSource="dataSource"
                :style="{ 'text-align': 'center' }"
                ref='fc'
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
import FusionCharts from 'fusioncharts'

export default {
    name: 'DrillDownChart',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
        "caption": "Top 3 Juice Flavors",
        "subcaption": "Last year",
        "xaxisname": "Flavor",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fusion",
        "rotateValues": "0"
    },
    "data": [
      {
        "label": "Apple",
        "value": "810000",
        "link": "newchart-xml-apple"
      },
      {
        "label": "Cranberry",
        "value": "620000",
        "link": "newchart-xml-cranberry"
      },
      {
        "label": "Grapes",
        "value": "350000",
        "link": "newchart-xml-grapes"
      }],
      "linkeddata": [
        {
          "id": "apple",
          "linkedchart": {
              "chart": {
                  "caption": "Apple Juice - Quarterly Sales",
                  "subcaption": "Last year",
                  "numberprefix": "$",
                  "theme": "fusion",
                  "rotateValues": "0",
                  "plottooltext": "$label, $dataValue,  $percentValue"
              },
              "data": [{
                  "label": "Q1",
                  "value": "157000"
              }, {
                  "label": "Q2",
                  "value": "172000"
              }, {
                  "label": "Q3",
                  "value": "206000"
              }, {
                  "label": "Q4",
                  "value": "275000"
              }]
            }
          },
        {
          "id": "cranberry",
          "linkedchart": {
            "chart": {
                "caption": "Cranberry Juice - Quarterly Sales",
                "subcaption": "Last year",
                "numberprefix": "$",
                "theme": "fusion",
                "plottooltext": "$label, $dataValue,  $percentValue"
            },
            "data": [
              {
                "label": "Q1",
                "value": "102000"
              },
              {
                "label": "Q2",
                "value": "142000"
              },
              {
                "label": "Q3",
                "value": "187000"
              },
              {
                "label": "Q4",
                "value": "189000"
              }]
          }
        },
        {
          "id": "grapes",
          "linkedchart": {
              "chart": {
                  "caption": "Grapes Juice - Quarterly Sales",
                  "subcaption": "Last year",
                  "numberprefix": "$",
                  "theme": "fusion",
                  "rotateValues": "0",
                  "plottooltext": "$label, $dataValue,  $percentValue"
              },
              "data": [{
                  "label": "Q1",
                  "value": "45000"
              }, {
                  "label": "Q2",
                  "value": "72000"
              }, {
                  "label": "Q3",
                  "value": "95000"
              }, {
                  "label": "Q4",
                  "value": "108000"
              }]
          }
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
    ref="fc"
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
            type: "column2d",
            dataFormat: "json",
            dataSource: dataSource
        },
        methods: {
            configureLink: function(chart){
                this.chartInstance = chart; // Save it for further use
        
                // Configure Drilldown attributes 
                // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
                this.chartInstance.configureLink({
                type: "pie2d",
                overlayButton: {
                    message: 'close',
                    fontColor: '880000',
                    bgColor: 'FFEEEE',
                    borderColor: '660000'
                    }
                },0)
            }
        },
        mounted: function(){
            this.configureLink(this.$refs.fc.chartObj); // this.$refs.fc gets the vue-fusionchart component
        }
    });
});`,
        options: {
            width: '600',
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
    methods: {
        configureLink: function(chart){
            this.chartInstance = chart; // Save it for further use
    
            // Configure Drilldown attributes 
            // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
            this.chartInstance.configureLink({
            type: "pie2d",
            overlayButton: {
                message: 'close',
                fontColor: '880000',
                bgColor: 'FFEEEE',
                borderColor: '660000'
                }
            },0)
        }
    },
    mounted: function(){
        this.configureLink(this.$refs.fc.chartObj);
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
