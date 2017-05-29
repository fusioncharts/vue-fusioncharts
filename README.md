# Vue FusionCharts
> FusionCharts component for Vue.js

## Quick Start
### 1. Installing the `vue-fusioncharts` package
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
Live demo using cdn click [here](https://jsfiddle.net/rohitcoolblog/5Lt720a9/1/)

### 2. Import `vue`, `vue-fusioncharts` and `fusioncharts`  module
```js
import Vue from 'vue';

import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts library
import FusionCharts from 'fusioncharts';
// Import `Charts` module to render a chart belonging to `FusionCharts` package 
import Charts from 'fusioncharts/fusioncharts.charts';
// Import `Widgets` module to render a chart belonging to `FusionWidgets` package 
import Widgets from 'fusioncharts/fusioncharts.widgets';

```

### 3. Register the plugin:
There are two ways to register the `VueFusionCharts` plugin

* Method 1
 
 Call `Vue.use` global method and pass `VueFusionCharts`, `FusionCharts` followed by `FusionCharts` modules (`Charts`, `Widgets` etc.) 

 In the example we are using Charts and Widgets only you can pass all FusionCharts modules to `Vue.use` method eg. PowerCharts, Maps

 ```js
 // use the plugin globally
 // In this example, we are resolving FusionCharts modules dependency 
 // by passing all FusionCharts modules as argument to `Vue.use` method

 Vue.use(VueFusionCharts, FusionCharts, Charts, Widgets);
 ```
 **or**

 ```js
 // Resolve fusioncharts modules dependency separately
 Charts(FusionCharts);
 Widgets(FusionCharts);

 // use the plugin globally
 Vue.use(VueFusionCharts, FusionCharts);
 ```

* Method 2

 Register the plugin using `Vue.component` method

 In this case we need to resolve `FusionCharts` dependency manually by executing the `Charts` and `Widgets` modules

 ```js
 ...
 import {FCComponent} from 'vue-fusioncharts';
 Charts(FusionCharts);
 Widgets(FusionCharts);

 // Register the plugin locally
 Vue.component(FCComponent.name, FCComponent);
 ```

### 4. Define the component in your HTML template where you wish to render the chart

```html
<div id="pie-chart-sample">
  <fusioncharts :options="options" refs='fusioncharts'></fusioncharts>
</div>
```

### 5. Create the Vue instance and define all configuration required to render the chart
```js
let chart = new Vue({
    el: '#pie-chart-sample',
    data: {
        options: {
          type: 'Pie2D',
          dataSource: {data: [{value: 1.9}, {value: 2.3}, {value: 2.1}]},
          width: '600',
          height: '300'
        }
    }
});
```

### Supported `options` props

<table>
    <thead>
        <tr>
            <th width="160">Name</th>
            <th width="100">Type</th>
            <th width="160">Default value</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>type</td>
            <td>String</td>
            <td>none</td>
            <td>Name of the chart type to be rendered.</td>
        </tr>
        <tr>
            <td>width</td>
            <td>String/Number</td>
            <td><code>400</code></td>
            <td>Set the width in pixels or percent such as <code>640</code> or <code>'50%'</code>.</td>
        </tr>
        <tr>
            <td>height</td>
            <td>String/Number</td>
            <td><code>400</code></td>
            <td>Set the height in pixels or percent such as <code>640</code> or <code>'50%'</code>.</td>
        </tr>
        <tr>
            <td>id</td>
            <td>String</td>
            <td><code>chart-object-*</code></td>
            <td>This name is used to refer to the current chart instance after the chart has been created.</td>
        </tr>
        <tr>
            <td>dataFormat</td>
            <td>String</td>
            <td><code>JSON</code></td>
            <td>This is the name of the format of data passed to the dataSource option below. Currently, <code>FusionCharts</code> accepts only <code>JSON</code> and <code>XML</code> data.</td>
        </tr>
        <tr>
            <td>dataSource</td>
            <td>String/Object</td>
            <td><code>none</code></td>
            <td>Provide the source of data and configuration of the chart. FusionCharts accepts data in the formats specified in dataFormats.</td>
        </tr>
    </tbody>
</table>

The complete list of supported props can be found [here](http://www.fusioncharts.com/dev/api/fusioncharts.html)
