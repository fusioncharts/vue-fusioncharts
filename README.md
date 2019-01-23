# vue-fusioncharts

A simple and lightweight `VueJS` component for `FusionCharts` JavaScript Charting Library. The `Vue-FusionCharts` wrapper lets you easily include FusionCharts in your `VueJS` projects.

## [Demo](https://fusioncharts.github.io/vue-fusioncharts/)

- Github Repo: [https://github.com/fusioncharts/vue-fusioncharts](https://github.com/fusioncharts/vue-fusioncharts)
- Documentation: [https://www.fusioncharts.com/dev/getting-started/vue/your-first-chart-using-vuejs](https://www.fusioncharts.com/dev/getting-started/vue/your-first-chart-using-vuejs)
- Support: [https://www.fusioncharts.com/contact-support](https://www.fusioncharts.com/contact-support)
- FusionCharts
  - Official Website: [https://www.fusioncharts.com/](https://www.fusioncharts.com/)
  - Official NPM Package: [https://www.npmjs.com/package/fusioncharts](https://www.npmjs.com/package/fusioncharts)
- Issues: [https://github.com/fusioncharts/vue-fusioncharts/issues](https://github.com/fusioncharts/vue-fusioncharts/issues)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Working with chart API](#working-with-apis)
  - [Working with events](#working-with-events)
- [Quick Start](#quick-start)
- [Going Beyond Charts](#going-beyond-charts)
- [Usage and Integration of FusionTime](#usage-and-integration-of-fusiontime)
- [For Contributors](#for-contributors)
- [Licensing](#licensing)

## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.
- **FusionCharts** and **Vue** installed in your project, as detailed below:

## Installation

**Direct Download**
All binaries are located on our [github repository](https://github.com/fusioncharts/vue-fusioncharts/).

**Install from NPM**

```bash
npm install vue-fusioncharts --save
```

**Install from Yarn**

```bash
yarn add vue-fusioncharts
```

**Include in your script**

Download [`vue-fusioncharts.js`](https://github.com/fusioncharts/vue-fusioncharts/blob/master/dist/vue-fusioncharts.js) and include it in the HTML `<script>` tag.

```html
<script src="vue-fusioncharts.js" type="text/javascript"></script>
```

### Usage

There are two ways of adding `vue-fusioncharts` component in your project

**Registering globally as a plugin**
Import `vue`, `vue-fusioncharts` and FusionCharts in main app file.

```js
import Vue from `vue`;
import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
```

Now, register it as plugin in Vue object

```js
Vue.use(VueFusionCharts, FusionCharts, Charts);
```

This way is recommended when you want component (`vue-fusioncharts` ) available from everywhere in your app.

**Registering locally in your component**
Import the chart component from `vue-fusioncharts/component` package in your component file and use `Vue.component` to register it locally.

```js
import Vue from `vue`;
import VueFusionChartsComponent from 'vue-fusioncharts/component';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

const vueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts);

Vue.component('fusioncharts', vueFusionCharts);
```

This way is recommended when you want component (`vue-fusioncharts` ) only in specific components of your app.

Click [here](https://jsfiddle.net/rohitcoolblog/5Lt720a9/) to view the live example.

Where `eventName` can be any fusioncharts event. You can find the list of events at [fusioncharts devcenter](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-events)

## Working with APIs

To call APIs we will need the chart object. To get the chart object from the component we can use `ref` and retrieve it from `this.$refs[refname].chartObj`

```html
<fusioncharts
  :type="type"
  :width="width"
  :height="height"
  :dataFormat="dataFormat"
  :dataSource="dataSource"
  @dataPlotRollover="onDataPlotRollover"
  ref="fc"
>
</fusioncharts>
```

Now, we can access the chart object from `this.$refs.fc.chartObj`

```js
var app = new Vue({
  el: '#chart',
  data: {
    type: 'Pie2D',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: myDataSource
  },
  methods: {
    onDataPlotRollover: function(e) {
      this.$refs.fc.chartObj.slicePlotItem(0);
    }
  }
});
```

This example will slice a Pie2d section when you rollover the chart.

## Working with Events

To attach event listeners to FusionCharts, you can use the `v-on` or `@` operator in the vue-fusioncharts component.

```html
<fusioncharts
  :type="type"
  :width="width"
  :height="height"
  :dataFormat="dataFormat"
  :dataSource="dataSource"
  @eventName="eventHandler"
>
</fusioncharts>
```

## Quick Start

Here is a basic sample that shows how to create a chart using `vue-fusioncharts`:

```js
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts);

const myDataSource = {
  chart: {
    caption: 'Recommended Portfolio Split',
    subCaption: 'For a net-worth of $1M',
    showValues: '1',
    showPercentInTooltip: '0',
    numberPrefix: '$',
    enableMultiSlicing: '1',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Equity',
      value: '300000'
    },
    {
      label: 'Debt',
      value: '230000'
    },
    {
      label: 'Bullion',
      value: '180000'
    },
    {
      label: 'Real-estate',
      value: '270000'
    },
    {
      label: 'Insurance',
      value: '20000'
    }
  ]
};

const chart = new Vue({
  el: '#app',
  data: {
    type: 'column2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: myDataSource
  }
});
```

Here's HTML template for the above example:

```html
<div id="app">
  <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  >
  </fusioncharts>
</div>
```

links to help you get started:

- [Live Samples with code](https://fusioncharts.github.io/vue-fusioncharts/)
- [Documentation](https://www.fusioncharts.com/dev/getting-started/vue/your-first-chart-using-vuejs)
- [Use Chart API events & methods in Vue](https://www.fusioncharts.com/dev/getting-started/vue/configure-your-chart-using-vuejs)
- [Chart gallery](https://www.fusioncharts.com/explore/chart-gallery)
- [FusionCharts API](https://www.fusioncharts.com/dev/api/fusioncharts)

## Usage and integration of FusionTime

From `fusioncharts@3.13.3-sr.1` and `vue-fusioncharts@3.0.0`, You can visualize timeseries data easily with vue.

Learn more about FusionTime [here](https://www.fusioncharts.com/fusiontime).

### Sample code for FusionTime

```js
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';

// register VueFusionCharts
Vue.use(VueFusionCharts, FusionCharts, TimeSeries);

const jsonify = res => res.json();
const dataFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json'
).then(jsonify);
const schemaFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json'
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
});
```

Here's HTML template for the above example:

```html
<div id="app">
  <fusioncharts
    :width="width"
    :height="height"
    :type="type"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  >
    FusionCharts will render here...
  </fusioncharts>
</div>
```

Useful links for FusionTime

- [How FusionTime works](https://www.fusioncharts.com/dev/fusiontime/getting-started/how-fusion-time-works)
- [Create your first chart](https://www.fusioncharts.com/dev/fusiontime/getting-started/create-your-first-chart-in-fusiontime)

## Going beyond Charts

- Explore 20+ pre-built business specific dashboards for different industries like energy and manufacturing to business functions like sales, marketing and operations [here](https://www.fusioncharts.com/explore/dashboards).
- See [Data Stories](https://www.fusioncharts.com/explore/data-stories) built using FusionCharts’ interactive JavaScript visualizations and learn how to communicate real-world narratives through underlying data to tell compelling stories.

## For Contributors

- Clone the repository and install dependencies

```
$ git clone https://github.com/fusioncharts/vue-fusioncharts.git
$ cd vue-fusioncharts
$ npm install
```

- Run `npm start` to start the dev server and point your browser at [http://localhost:8080/](http://localhost:8080/).

## Licensing

The FusionCharts Vue component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FusionCharts library in your page separately, which has a [separate license](https://www.fusioncharts.com/buy).
