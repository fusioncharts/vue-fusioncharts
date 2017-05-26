# Vue FusionCharts
> FusionCharts component for Vue.js

## Installation
#### yarn
```sh
yarn add vue-fusioncharts
```
#### npm
```sh
npm install vue-fusioncharts --save
```
#### cdn
```html
<!-- Minified -->
<script src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"></script>
<!-- Source -->
<script src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.js"></script>

```

## Usage
#### Method 1
In order to use this plugin, you need to call `Vue.use` global method and pass `VueFusionCharts` component followed by `FusionCharts` and package-specific dependencies for `FusionCharts`

```js
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts library
import FusionCharts from 'fusioncharts';
// Import `Charts` module to render a chart belonging to `FusionCharts` package 
import Charts from 'fusioncharts/fusioncharts.charts';
// Import `Widgets` module to render a chart belonging to `FusionWidgets` package 
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Register `vue-fusioncharts` component by calling the Vue.use() global method
// And pass `VueFusionCharts` as a 1st argument and `FusionCharts` as a 2nd argument
// and then comma separated package-specific dependencies eg Chart and Widgets.
// To render a chart belonging to the Charts package and widgets belong to FusionWidgets package, pass the Charts module
Vue.use(VueFusionCharts, FusionCharts, Charts, Widgets);
```
#### Method 2
Instead of passing `FusionCharts` specific dependency to `Vue.use` global method you can directly pass `FusionCharts` to the specific dependencies

```js
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts library
import FusionCharts from 'fusioncharts';
// Import `Charts` module to render a chart belonging to `FusionCharts` package 
import Charts from 'fusioncharts/fusioncharts.charts';
// Import `Widgets` module to render a chart belonging to `FusionWidgets` package 
import Widgets from 'fusioncharts/fusioncharts.widgets';

Charts(FusionCharts);
Widgets(FusionCharts)

Vue.use(VueFusionCharts, FusionCharts);
```
 To know which chart belongs to which package, refer the [list of charts](http://www.fusioncharts.com/dev/getting-started/list-of-charts.html).

Define the component in your HTML template where you wish to render the chart

```html
<div id="chart1">
  <fusioncharts
    :type="type"
    :data-source="dataSource"
    :width="width"
    :height="height"
   >
  </fusioncharts>
</div>
```

Create the `Vue` instance and define all configuration required to render the chart

```js
let chart = new Vue({
    el: '#pie-chart',
    data: {
      type: 'Pie2D',
      dataSource: {data: [{value: 1.9}, {value: 2.3}, {value: 2.1}]},
      width: '600',
      height: '300'
    }
});
```

