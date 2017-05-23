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
<div id="chart">
  <fusioncharts
  	:type="type"
  	:data-source="dataSource"
  	:width="width"
  	:height="height"
   >
  </fusioncharts>
</div>

<script type="text/javascript" src="https://unpkg.com/vue@2.3.3"></script>
<script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"></script>
<script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.charts.js"></script>
<script src="https://unpkg.com/vue-fusioncharts@1.0.4/dist/vue-fusioncharts.min.js"></script>

<script type="text/javascript">
// Pass the VueFusionCharts to `Vue.use` global function
Vue.use(VueFusionCharts.default);

var chart = new Vue({
    el: '#chart',
    data: {
    	type: 'Pie2D',
	    dataSource: {data: [{value: 1.9}, {value: 2.3}, {value: 2.1}]},
	    width: '600',
	    height: '300'
    }
});
</script>

```

## Usage
In order to use this plugin, you need to import `vue`, `vue-fusioncharts` and `fusioncharts` in your application and pass the `VueFusionCharts` component to `Vue.use` global method
```js
// Import the required modules
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts modules
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Register `vue-fusioncharts` component by calling the Vue.use() global method
// Also pass the FusionCharts object
Vue.use(VueFusionCharts, {
    core: FusionCharts,
    modules: [Charts, Widgets]
});
```

#### Options
`vue-fusioncharts` allows a few custom options:
```js
Vue.use(VueFusionCharts, FusionCharts, Charts, Widgets)
```

#### Render
Create the `Vue` instance and define all configuration required to render FusionCharts.
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

