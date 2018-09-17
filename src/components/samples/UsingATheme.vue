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
import mixin from "./common/SamplesMixin";

export default {
  mixins: [mixin],
  name: "UpdateChartAttribute",
  props: ["showMessage"],
  data() {
    return {
      sourceData: `{
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
      sourceHTML: `<div id="app">
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
</div>`,
      sourceJS: `import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

//import the themes
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel'
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy'
import ZuneTheme from 'fusioncharts/themes/fusioncharts.theme.zune'
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean'
import CarbonTheme from 'fusioncharts/themes/fusioncharts.theme.carbon'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme, GammelTheme, CandyTheme, ZuneTheme, OceanTheme, CarbonTheme)

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
        // sets the theme attribute through FusionCharts API 'setChartAttribute'
        onChangeTheme: function (e) {
            const chart = this.$refs.fc.chartObj,
                theme = e.target.value.toLowerCase();
            chart.setChartAttribute('theme', theme);
        }
    }
});`,
      options: {
        width: "100%",
        height: "400",
        type: "column2d",
        dataFormat: "json",
        creditLabel: "false"
      }
    };
  },
  computed: {
    dataSource: function() {
      return JSON.parse(this.sourceData);
    }
  },
  methods: {
    onChangeTheme: function(e) {
      const chart = this.$refs.fc.chartObj,
        theme = e.target.value.toLowerCase();
      chart.setChartAttribute("theme", theme);
    }
  }
};
</script>

<style>
</style>
