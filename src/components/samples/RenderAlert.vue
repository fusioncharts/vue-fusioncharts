<template>
    <sample-wrapper :panels="panels" :activePanel="selectedPanel">
        <fusioncharts
        :options="options"
        :dataSource="dataSource"
        @disposed="disposed"
        :style="{ 'text-align': 'center' }"
        ></fusioncharts>
    <div class="text-style" >
        <table class="tables">
            <tr>
                <th>Events</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>beforeDataUpdate</td>
                <td>{{beforeDataUpdateEvent}}</td>
            </tr>
            <tr>
                <td>dataUpdated</td>
                <td>{{dataUpdatedEvent}}</td>
            </tr>
            <tr>
                <td>renderComplete</td>
                <td>{{renderCompleteEvent}}</td>
            </tr>
            <tr>
                <td>animationComplete</td>
                <td>{{animationCompleteEvent}}</td>
            </tr>
        </table>
    </div>
    </sample-wrapper>
</template>

<script>
import mixin from './common/SamplesMixin'
import FusionCharts from 'fusioncharts'
var mapping = {
        beforedataupdate: 'beforeDataUpdateEvent',
        dataupdated: 'dataUpdatedEvent',
        rendercomplete: 'renderCompleteEvent',
        animationcomplete: 'animationCompleteEvent'
    },
    handler = function (e) {
        let doFormat = (text, reqLen) => {
                text = text.toString();
                let count = Math.max(reqLen - text.length, 0);
                while(count--) {
                    text = '0' + text
                }
                return text;
            },
            date = new Date(),
            hours = doFormat(date.getHours(), 2),
            mins = doFormat(date.getMinutes(), 2),
            secs = doFormat(date.getSeconds(), 2),
            ms = doFormat(date.getMilliseconds(), 3);
        this[mapping[e.type]] = `Fired at ${hours}:${mins}:${secs}.${ms}`;
    },
    bindedFn;
export default {
    mixins:[mixin],
    name: 'ChartInteractivity',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`{
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
        "animationDuration":"2"
    },
    "data": [
        {
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
}`,
    sourceHTML:
`<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    @disposed="disposed"
    ></fusioncharts>
    <div>
        <table>
            <tr>
                <th>Events</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>beforeDataUpdate</td>
                <td>{{beforeDataUpdateEvent}}</td>
            </tr>
            <tr>
                <td>dataUpdated</td>
                <td>{{dataUpdatedEvent}}</td>
            </tr>
            <tr>
                <td>renderComplete</td>
                <td>{{renderCompleteEvent}}</td>
            </tr>
            <tr>
                <td>animationComplete</td>
                <td>{{animationCompleteEvent}}</td>
            </tr>
        </table>
    </div>
</div>`,
sourceJS:
`import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/,
    mapping = {
        beforedataupdate: 'beforeDataUpdateEvent',
        dataupdated: 'dataUpdatedEvent',
        rendercomplete: 'renderCompleteEvent',
        animationcomplete: 'animationCompleteEvent'
    },
    // function to listen events and log time accordingly
    handler = function (e) {
        // adds the required zeros with for time format
        let doFormat = (text, reqLen) => {
                text = text.toString();
                let count = Math.max(reqLen - text.length, 0);
                while(count--) {
                    text = '0' + text
                }
                return text;
            },
            date = new Date(),
            hours = doFormat(date.getHours(), 2),
            mins = doFormat(date.getMinutes(), 2),
            secs = doFormat(date.getSeconds(), 2),
            ms = doFormat(date.getMilliseconds(), 3);
        this[mapping[e.type]] = \`Fired at \${hours}:\${mins}:\${secs}.\${ms}\`;
    },
    bindedFn;

var app = new Vue({
    el: '#app',
    data: {
        width: '100%',
        height: '400',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: dataSource,
        beforeDataUpdateEvent: 'Not Fired',
        dataUpdatedEvent: 'Not Fired',
        renderCompleteEvent: 'Not Fired',
        animationCompleteEvent: 'Not Fired'
    },
    created: function () {
            // binds the function with the context of vue
            bindedFn = handler.bind(this);
            // adds listener in FusionCharts
            FusionCharts.addEventListener('beforeDataUpdate', bindedFn);
            FusionCharts.addEventListener('dataUpdated', bindedFn);
            FusionCharts.addEventListener('renderComplete', bindedFn);
            FusionCharts.addEventListener('animationComplete', bindedFn);
        },
    methods: {
        // removes the listener when the instance of chart gets disposed
        disposed: function () {
            FusionCharts.removeEventListener('beforeDataUpdate', bindedFn);
            FusionCharts.removeEventListener('dataUpdated', bindedFn);
            FusionCharts.removeEventListener('renderComplete', bindedFn);
            FusionCharts.removeEventListener('animationComplete', bindedFn);
        }
    }
});`,
        options: {
            width: '100%',
            height: '400',
            type: "column2d",
            dataFormat: "json",
            creditLabel: 'false'
            },
        beforeDataUpdateEvent: 'Not Fired',
        dataUpdatedEvent: 'Not Fired',
        renderCompleteEvent: 'Not Fired',
        animationCompleteEvent: 'Not Fired'
        }
    },
    computed: {
        dataSource: function(){
            return JSON.parse(this.sourceData)
        }
    },
    created: function () {
            bindedFn = handler.bind(this);
            FusionCharts.addEventListener('beforeDataUpdate', bindedFn);
            FusionCharts.addEventListener('dataUpdated', bindedFn);
            FusionCharts.addEventListener('renderComplete', bindedFn);
            FusionCharts.addEventListener('animationComplete', bindedFn);
        },
    methods: {
        disposed: function () {
            FusionCharts.removeEventListener('beforeDataUpdate', bindedFn);
            FusionCharts.removeEventListener('dataUpdated', bindedFn);
            FusionCharts.removeEventListener('renderComplete', bindedFn);
            FusionCharts.removeEventListener('animationComplete', bindedFn);
        }
    }
}
</script>
