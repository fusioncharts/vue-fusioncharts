# Vue-FusionCharts

> FusionCharts component for Vue

This component allows to easily insert `FusionCharts` to your `Vue.js` projects and works in the `Vue.js` Way.

## Installation

### npm

```bash
npm install vue-fusioncharts --save
```

### yarn

```bash
yarn add vue-fusioncharts
```

### manual

Download [`vue-fusioncharts.js`](https://github.com/fusioncharts/vue-fusioncharts/blob/feature/plugin-development/dist/vue-fusioncharts.js) and include in your HTML `<script>` tag.

```html
<script src='path/to/vue-fusioncharts/dist/vue-fusioncharts.js' type='text/javascript'></script>
```

## Usage

### ES6 Modules (Recommended)

```js
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'

// resolve charts dependency
Chart(FusionCharts);

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts);
```

### CommonJS Modules

```js
var Vue = require('vue');

// require the UMD module
var VueFusionCharts = require('vue-fusioncharts');

// import FusionCharts modules and resolve dependency
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');

// resolve charts dependency
Charts(FusionCharts);

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts);
```


### AMD

```js
require.config({
  paths: {
    'vue': 'path/to/vue',
    'vue-fusioncharts': 'path/to/vue-fusioncharts',
    'fusioncharts': 'path/to/fusioncharts'
    'charts': 'path/to/fusioncharts/fusioncharts.charts'
  }
})

require(['vue', 'vue-fusioncharts', 'fusioncharts', 'charts'], function (Vue, VueFusionCharts, FusionCharts, Charts) {

  // register VueFusionCharts component
  Vue.use(VueFusionCharts, FusionCharts, Charts);
});
```

### Standalone / CDN
If you are not using any bundler. You can just reference the file in a script tag. The library will be available in a global object named `VueFusionCharts`.


```html
<head>
    <script type="text/javascript" src="https://unpkg.com/vue@2.3.3"></script>
    <script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.charts.js"></script>
    <script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"></script>
</head>

<body>
    <div id='chart'>
        <fusioncharts :options="pieChartConfig"></fusioncharts>
        <p class="message-box">The value that you have selected is: {{displayValue}} </p>
    </div>
    
    <style>
      .message-box {
          text-align: center;
          margin-top: 0px;
          background-color: #F5FBFF;
          width: 500px;
          color: #006BB8;
          padding: 5px 10px;
          box-sizing: border-box;
          border: 1px solid #B8E1FF;
      }
    </style>
    
    <script>
    // Use VueFusionCharts component by calling the Vue.use() global method:
    Vue.use(VueFusionCharts);
    
    // bootstrap the demo
    var chart = new Vue({
        el: '#chart',
        data: {
          pieChartConfig: {
            type: 'Pie2D',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
              chart: {
                caption: 'Vue FusionCharts Sample',
                theme: 'fint'
              },
              data: [{value: 1.9}, {value: 2.3}, {value: 2.1}]
            },
            displayValue: 'nothing',
            events: {
              dataplotRollover: function (ev, props) {
                chart.displayValue = props.displayValue       
              }       
            }
          },
          displayValue: 'nothing'
        }
    });
    </script>
</body>
```
See this examples live, click [here](https://jsfiddle.net/rohitcoolblog/5Lt720a9/).

## Register `vue-fusioncharts` component
### Using `Vue.use` global method to register the component globally
```js
Vue.use(VueFusionCharts, FusionCharts, Charts);
```
### Using `Vue.component` method to register the component locally
```js
// es6 style
import {FCComponent} from 'vue-fusioncharts'

// CommpnJS
var FCComponent = require('vue-fusioncharts').FCComponent;

Vue.component('fusioncharts', FCComponent);

```

### props

* `options`

    Configuration needed to initialize FusionCharts. The complete list of supported configuration option can be found on [FusionCharts' API documentation](http://www.fusioncharts.com/dev/api/fusioncharts.html).

    <table>
        <thead>
            <tr>
                <th width="20%">Name</th>
                <th width="25%">Type</th>
                <th width="20%">Default value</th>
                <th width="35%">Description</th>
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



## Development
* Clone the repository
* Install dependency
* Run `npm start` to start the dev server
* Open `http://localhost:8080/` in your browser

```bash
$ git clone https://github.com/fusioncharts/vue-fusioncharts.git
$ cd vue-fusioncharts
$ npm install
$ npm start
```

