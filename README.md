# vue-fusioncharts

A simple and lightweight `VueJS` component for `FusionCharts` JavaScript Charting Library. The `Vue-FusionCharts` wrapper lets you easily include FusionCharts in your `VueJS` projects.

## Installation

### npm

```bash
npm install vue-fusioncharts --save
```

### yarn

```bash
yarn add vue-fusioncharts
```

### VanillaJS

Download [`vue-fusioncharts.js`](https://github.com/fusioncharts/vue-fusioncharts/blob/master/dist/vue-fusioncharts.js) and include it in the HTML `<script>` tag.

```html
<script src='vue-fusioncharts.js' type='text/javascript'></script>
```

## Getting Started

### ES6 Module

```js
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts/core'
import Pie2D from 'fusioncharts/viz/pie2d'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Pie2D);
```

### CommonJS

```js
const Vue = require('vue');
const VueFusionCharts = require('vue-fusioncharts');

// import FusionCharts modules and resolve dependency
const FusionCharts = require('fusioncharts');
const Charts = require('fusioncharts/fusioncharts.charts');

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts);
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

### VanillaJS

If you are not using any bundler, you can refer the file in a script tag. The library will be available in a global object named `VueFusionCharts`.

```html
<head>
    <script type="text/javascript" src="https://unpkg.com/vue@2.3.3"></script>
    <script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.charts.js"></script>
    <script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"></script>
</head>

<body>

    <div id="app">
        <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
        @dataplotRollover="dataplotRollover">
        </fusioncharts>
        <p>Display Value: {{displayValue}}</p>
    </div>
    
    <script>
        // Use VueFusionCharts component by calling the Vue.use() method:
        Vue.use(VueFusionCharts);
        
        const myDataSource = {
            chart: {
                caption: 'Vue FusionCharts Sample',
                theme: 'fint'
            }
            data: [{value: 1.9}, {value: 2.3}, {value: 2.1}]
        }
        // bootstrap the demo
        var app = new Vue({
            el: '#chart',
            data: {
                type: 'Pie2D',
                width: '500',
                height: '300',
                dataFormat: 'json',
                dataSource: myDataSource,
                displayValue: ''
              },
            methods:{
                dataplotRollover: function (e) {
                    app.displayValue = e.data.displayValue       
                }
              }
            }
        });
    </script>
</body>
```
Click [here](https://jsfiddle.net/rohitcoolblog/5Lt720a9/) to view the live example.

## Register `vue-fusioncharts` Component

### Register Globally

Use the `Vue.use` method to register the component globally.

```js
Vue.use(VueFusionCharts, FusionCharts, Charts);
```

### Register Locally

Use the `Vue.component` method to register the component locally.

```js
// es6 style
import { FCComponent } from 'vue-fusioncharts'

// CommpnJS
const FCComponent = require('vue-fusioncharts').FCComponent;

Vue.component('fusioncharts', FCComponent);
```

### Component Props

* `options`

    The commonly used configurations required to initialize FusionCharts are described in the table below. The complete list of supported configurations can be found in the [FusionCharts API documentation](http://www.fusioncharts.com/dev/api/fusioncharts.html).

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
                <td>Width in pixels (for example, <code>640</code>) or percent (for example, <code>50%</code>).</td>
            </tr>
            <tr>
                <td>height</td>
                <td>String/Number</td>
                <td><code>400</code></td>
                <td>Height in pixels (for example, <code>640</code>) or percent (for example, <code>50%</code>).</td>
            </tr>
            <tr>
                <td>id</td>
                <td>String</td>
                <td><code>chart-object-*</code></td>
                <td>Name of the current chart instance, after the chart has been created.</td>
            </tr>
            <tr>
                <td>dataFormat</td>
                <td>String</td>
                <td><code>JSON</code></td>
                <td>Format of the source data, passed to the <code>dataSource</code> attribute. Currently FusionCharts accepts data in the <code>JSON</code> and <code>XML</code> formats.</td>
            </tr>
            <tr>
                <td>dataSource</td>
                <td>String/Object</td>
                <td><code>none</code></td>
                <td>Source data/source of the chart data and the chart configuration. Currently FusionCharts accepts data in the <code>JSON</code> and <code>XML</code> formats.</td>
            </tr>
        </tbody>
    </table>
## Working with Events

To attach event listeners to FusionCharts, you can use the `v-on` or `@` operator in the vue-fusioncharts component.

```html
<fusioncharts
:type="type"
:width="width"
:height="height"
:dataFormat="dataFormat"
:dataSource="dataSource"
@eventName="eventHandler">
</fusioncharts>
```
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
ref="fc">
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
        dataSource: myDataSource,
        },
    methods:{
        onDataPlotRollover: function (e) {
            this.$refs.fc.chartObj.slicePlotItem(0);  
        }
    }
});
```
This example will slice a Pie2d section when you rollover the chart. 

## Contributing

* Clone the repository.
* Install dependencies
* Run `npm start` to start the dev server.
* Open `http://localhost:8080/` in your browser.

```sh
$ git clone https://github.com/fusioncharts/vue-fusioncharts.git
$ cd vue-fusioncharts
$ npm install
$ npm start
```

### [Demos and Documentation](https://fusioncharts.github.io/vue-fusioncharts/)

> ### Using Legacy Webpack Templates
> If you are using legacy webpack templates using (ex: `vue init webpack-simple myProject`), you need to use the new UglifyJS webpack plugin as the default plugin doesn't support ES5+ syntaxes.  
> Refer here on what to change in the webpack.config.js: https://github.com/vuejs-templates/webpack-simple/issues/166#issuecomment-354394253
