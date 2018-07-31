<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource.columnData"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
        <fusioncharts
        width="800"
        height="600"
        type="stackedcolumn2d"
        dataFormat="json"
        :dataSource="dataSource.stackedColumnData">
        </fusioncharts>
        <br/>
        <div :style="{textAlign: 'center'}">
            <button class='btn btn-outline-secondary btn-sm' @click="exportToPdf">Export both charts as a single PDF</button>
        </div>
    </sample-wrapper>
</template>

<script>

import mixin from './common/SamplesMixin'
import FusionCharts from 'fusioncharts'

export default {
    mixins:[ mixin ],
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
    "stackedColumnData":
    {
      "chart": {
        "caption": "Yearly Energy Production Rate",
        "subCaption": " Top 5 Developed Countries",
        "numbersuffix": " TWh",
        "showSum": "1",
        "plotToolText": "$label produces <b>$dataValue</b> of energy from $seriesName",
        "theme": "fusion"
      },
      "categories": [
        {
          "category": [
            {
              "label": "Canada"
            },
            {
              "label": "China"
            },
            {
              "label": "Russia"
            },
            {
              "label": "Australia"
            },
            {
              "label": "United States"
            },
            {
              "label": "France"
            }
          ]
        }
      ],
      "dataSet": [
        {
          "seriesName": "Coal",
          "data": [
            {
              "value": "400"
            },
            {
              "value": "830"
            },
            {
              "value": "500"
            },
            {
              "value": "420"
            },
            {
              "value": "790"
            },
            {
              "value": "380"
            }
          ]
        },
        {
          "seriesName": "Hydro",
          "data": [
            {
              "value": "350"
            },
            {
              "value": "620"
            },
            {
              "value": "410"
            },
            {
              "value": "370"
            },
            {
              "value": "720"
            },
            {
              "value": "310"
            }
          ]
        },
        {
          "seriesName": "Nuclear",
          "data": [
            {
              "value": "210"
            },
            {
              "value": "400"
            },
            {
              "value": "450"
            },
            {
              "value": "180"
            },
            {
              "value": "570"
            },
            {
              "value": "270"
            }
          ]
        },
        {
          "seriesName": "Gas",
          "data": [
            {
              "value": "180"
            },
            {
              "value": "330"
            },
            {
              "value": "230"
            },
            {
              "value": "160"
            },
            {
              "value": "440"
            },
            {
              "value": "350"
            }
          ]
        },
        {
          "seriesName": "Oil",
          "data": [
            {
              "value": "60"
            },
            {
              "value": "200"
            },
            {
              "value": "200"
            },
            {
              "value": "50"
            },
            {
              "value": "230"
            },
            {
              "value": "150"
            }
          ]
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
    :dataSource="dataSource.columnData"
    ></fusioncharts>
    <fusioncharts
    width="800"
    height="600"
    type="stackedcolumn2d"
    dataFormat="json"
    :dataSource="dataSource.stackedColumnData">
    </fusioncharts>
    <div :style="{textAlign: 'center'}">
        <button @click="exportToPdf">Export both charts as a single PDF</button>
    </div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'
import StackedColumn2D from 'fusioncharts/viz/stackedcolumn2d';

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D, StackedColumn2D)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/; 

var app = new Vue({
    el: '#app',
    data: {
        width: '800',
        height: '400',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: dataSource.columnData
    },
    methods: {
        // Export to pdf
        exportToPdf: function(){
            FusionCharts.batchExport({
                exportFormat:'pdf'
            });
        }
    }
});`,
            options: {
                width: '800',
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
    }
}
</script>

<style>

</style>
