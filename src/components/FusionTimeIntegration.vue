<template>
  <div>
    <div class="row">
      <div class="col-12 pt-3">
        <p class="code-desc">
          From
          <span class="code">fusioncharts@3.13.3-sr.1</span> and
          <span class="code">vue-fusioncharts@3.0.0</span>, You can visualize timeseries data easily with vue.
        </p>
        <div class="h6 mt-2">Consider the example below for integration of FusionTime</div>
        <div class="code-view mt-2">
          <div class="card-shadow">
            <div class="card-body p-0">
              <div class="code-panel">
                <div class="codeMirrorDiv" id="c5">
                  <codemirror v-model="code.c5"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="code-desc">Here's the HTML template for the above example</p>
        <div class="code-view mt-2">
          <div class="card-shadow">
            <div class="card-body p-0">
              <div class="code-panel">
                <div class="codeMirrorDiv" id="c6">
                  <codemirror v-model="code.c6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FusionTimeIntegration",
  data() {
    return {
      code: {
        c1: "$ npm install vue-fusioncharts --save",
        c2: "$ npm install fusioncharts --save",
        c3: `import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts);`,
        c4: `import Vue from 'vue';
import FusionCharts from 'fusioncharts';
import { FCComponent } from 'vue-fusioncharts';

// register Vue-FusionCharts component
Vue.component('fusioncharts', FCComponent, FusionCharts);`,
        c5: `import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';

// register VueFusionCharts
Vue.use(VueFusionCharts, FusionCharts, TimeSeries);

const jsonify = res => res.json();
const dataFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/data.json'
).then(jsonify);
const schemaFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/schema.json'
).then(jsonify);

const chart = new Vue({
  el: '#app',
  data: {
    width: '500',
    height: '300',
    type: 'timeseries',
    dataFormat: 'json',
    dataSource: {
      caption: { text: 'Online Sales of a SuperStore in the US' },
      data: null,
      yAxis: [
        {
          plot: [
            {
              value: 'Sales ($)'
            }
          ]
        }
      ]
    }
  },
  mounted: function() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      this.dataSource.data = fusionTable;
    });
  }
});`,
        c6: `<div id="app">
  <fusioncharts
    :width="width"
    :height="height"
    :type="type"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  >
    FusionCharts will render here...
  </fusioncharts>
</div>`
      }
    };
  }
};
</script>