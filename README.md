# Vue FusionCharts Component

The `vue-fusioncharts` component provides a straightforward and efficient way to integrate the powerful `FusionCharts` JavaScript Charting Library with your Vue.js (Vue 3) applications.

## Quick Links

- [Demo](https://fusioncharts.github.io/vue-fusioncharts/)
- [Documentation](https://www.fusioncharts.com/dev/getting-started/vue/your-first-chart-using-vuejs)
- [FusionCharts NPM Package](https://www.npmjs.com/package/fusioncharts)
- [Support](https://www.fusioncharts.com/contact-support)
- [Official Website](https://www.fusioncharts.com/)

## Table of Contents

1. [Getting Started](#getting-started)
   - [Requirements](#requirements)
   - [Installation](#installation)
   - [Usage](#usage)
2. [Quick Start](#quick-start)
3. [Working with Events](#working-with-events)
4. [Working with APIs](#working-with-apis)
5. [Advanced Usage and FusionTime](#advanced-usage-and-fusiontime)
6. [Contributing](#contributing)
7. [Licensing](#licensing)

## Getting Started

### Requirements

Ensure you have **Node.js**, **NPM/Yarn** installed globally. Additionally, you need **FusionCharts** and **Vue** installed in your project.

### Installation

You can install `vue-fusioncharts` directly via NPM or Yarn, or by downloading the binaries from our GitHub repository.

#### NPM

```bash
npm install vue-fusioncharts --save
```

#### Yarn

```bash
yarn add vue-fusioncharts
```

#### Direct Download

Download the [`vue-fusioncharts.js`](https://github.com/fusioncharts/vue-fusioncharts/blob/master/dist/vue-fusioncharts.js) file and include it in your project using a `<script>` tag:

```html
<script src="path/to/vue-fusioncharts.js"></script>
```

### Usage

`vue-fusioncharts` can be integrated into your Vue application either globally as a plugin or locally within a component.

#### Global Registration

```javascript
import { createApp } from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

const app = createApp(App);
app.use(VueFusionCharts, FusionCharts, Charts);
```

#### Local Registration

```javascript
import { createApp } from 'vue';
import VueFusionChartsComponent from 'vue-fusioncharts/component';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

const app = createApp(App);
const VueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts);
app.component('fusioncharts', VueFusionCharts);
```

## Quick Start

Here is an example to quickly set up a chart using `vue-fusioncharts`:

```javascript
import { createApp } from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

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
    { label: 'Equity', value: '300000' },
    { label: 'Debt', value: '230000' },
    // more data
  ]
};

const App = {
  data() {
    return {
      type: 'column2d',
      width: '500',
      height: '300',
      dataFormat: 'json',
      dataSource: myDataSource
    };
  }
};

const app = createApp(App);
app.use(VueFusionCharts, FusionCharts, Charts);
app.mount('#app');
```

```html
<div id="app">
  <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource">
  </fusioncharts>
</div>
```

## Working with Events

To handle events within `vue-fusioncharts`, use Vue event handling syntax:

```html


<fusioncharts
  :type="type"
  :width="width"
  :height="height"
  :dataFormat="dataFormat"
  :dataSource="dataSource"
  @dataPlotRollover="onDataPlotRollover"
  ref="fc">
</fusioncharts>
```

## Advanced Usage and FusionTime

From `fusioncharts@3.13.3-sr.1` and `vue-fusioncharts@3.0.0`, FusionTime allows easy visualization of time series data.

```javascript
import { createApp } from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';

const app = createApp(App);
app.use(VueFusionCharts, FusionCharts, TimeSeries);
app.mount('#app');
```

## Contributing

Contributions are welcome! Please refer to the repository's [issue tracker](https://github.com/fusioncharts/vue-fusioncharts/issues) to report bugs or submit feature requests.

## Licensing

`vue-fusioncharts` is open-source under the MIT/X11 License. Note that FusionCharts itself is separately licensed, and you need to purchase a commercial license for production use.
