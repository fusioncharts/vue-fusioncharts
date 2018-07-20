<template>
    <div :style="{ display: !showMessage ? 'block' : 'none' }" class="clearfix">
        <div class="chart-viewer">
            <!-- <FrameView :styles="{width: '100%', height: '100%' }" :url="chartIframeURL" /> -->
                <fusioncharts
                :options="options"
                :dataSource="dataSource"
                :style="{ 'text-align': 'center' }"
                ></fusioncharts>
        </div>
        <div class="code-viewer">
            <TabView border>
            <Tab label="JavaScript" slot='tab'>
                <div class="code-tab-container">
                <div class="code-tab">
                    <CodeWrapper
                    :styles="{width: '100%', height: '100%' }"
                    language="javascript"
                    :code="sourceJS"
                    />
                </div>
                </div>
            </Tab>
            <Tab label="HTML" slot='tab'>
                <div class="code-tab-container">
                <div class="code-tab">
                    <CodeWrapper
                    :styles="{width: '100%', height: '100%' }"
                    language="html"
                    :code="sourceHTML"
                    />
                </div>
                </div>
            </Tab>
            <Tab label="Data" slot='tab'>
                <div class="code-tab-container">
                <div class="code-tab">
                    <CodeWrapper
                    :styles="{width: '100%', height: '100%' }"
                    language="javascript"
                    :code="sourceData"
                    />
                </div>
                </div>
            </Tab>
            </TabView>
        </div>
        <div :styles="{ clear: 'both' }" />
        </div>
</template>

<script>

import TabView from './../TabView';
import Tab from './../Tab'
import CodeWrapper from './../CodeWrapper'

export default {
    name: 'FetchDataFromXmlUrl',
    props:['showMessage'],
    data(){
        return {
        sourceData:
`<chart caption="Countries With Most Oil Reserves [2017-18]" subcaption="In MMbbl = One Million barrels" xaxisname="Country" yaxisname="Reserves (MMbbl)" numbersuffix="K" theme="fusion">
    <set label="Venezuela" value="290" />
    <set label="Saudi" value="260" />
    <set label="Canada" value="180" />
    <set label="Iran" value="140" />
    <set label="Russia" value="115" />
    <set label="UAE" value="100" />
    <set label="US" value="30" />
    <set label="China" value="30" />
</chart>`,
    sourceHTML:
`<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
</div>`,
sourceJS:
`FusionCharts.ready(function() {

    Vue.use(VueFusionCharts);

    var app = new Vue({
        el: "#app",
        data: {
            type: "mscombi2d",
            width: "600",
            height: "400",
            dataFormat: "xmlurl",
            dataSource: "data.xml"
        }
    });
});`,
        options: {
                type: "column2d",
                width: "600",
                height: "400",
                dataFormat: "xmlurl"
            }
        }
    },
    computed: {
        dataSource: function(){
            return "./dist/samples/fetch-data-from-xml-url/data.xml"
        }
    },
    components:{
        TabView,
        Tab,
        CodeWrapper
    }
}
</script>

<style>

</style>
