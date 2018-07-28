<template>
    <div>
        <div class="row">
            <div class="col-12 pt-3">
                <div class="h5">
                    <span>Step 1: Install the Vue-FusionCharts wrapper framework</span>
                </div>
                <p class="code-desc">In the terminal run the following command:</p>
                <div class="code-view mt-2">
                    <div class="card-shadow">
                        <div class="card-body p-0">
                            <div class="code-panel">
                                
                                <div class="codeMirrorDiv" id="c1">
                                    <codemirror v-model="code.c1"></codemirror>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="code-desc">Also install fusionCharts, if it is not already installed:</p>
                <div class="code-view mt-2">
                    <div class="card-shadow">
                        <div class="card-body p-0">
                            <div class="code-panel">
                                <div class="codeMirrorDiv" id="c2">
                                    <codemirror v-model="code.c2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 pt-3">
                <div class="h5">
                    <span>Step 2: Register the VueFusionCharts component</span>
                </div>
                <p class="code-desc">Use the Vue.use method to register the component globally:</p>
                <div class="code-view mt-2">
                    <div class="card-shadow">
                        <div class="card-body p-0">
                            <div class="code-panel">
                                <div class="codeMirrorDiv" id="c3">
                                    <codemirror v-model="code.c3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="code-desc">Use the Vue.component method to register the component locally:</p>
                <div class="code-view mt-2">
                    <div class="card-shadow">
                        <div class="card-body p-0">
                            <div class="code-panel">
                                <div class="codeMirrorDiv" id="c4">
                                    <codemirror v-model="code.c4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 pt-3">
                <div class="h5">
                    <span>Step 3: Render your Chart</span>
                </div>
                <p class="code-desc">For example render a simple pie chart</p>
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
    name: 'QuickStart',
    data(){
        return {
code: {
    c1: "$ npm install vue-fusioncharts --save",
    c2: "$ npm install fusioncharts --save",
    c3: `import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

// resolve charts dependency
Charts(FusionCharts);

// register VueFusionCharts component
Vue.use(VueFusionCharts);`,
    c4:`import Vue from 'vue';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import { FCComponent } from 'vue-fusioncharts';

// resolve charts dependency
Charts(FusionCharts);

// register Vue-FusionCharts component
Vue.component('fusioncharts', FCComponent);`,
    c5:`Vue.use(VueFusionCharts);

const myDataSource = {
    "chart": {
        "caption": "Age profile of website visitors",
        "subcaption": "Last Year",
        "theme": "ocean"
    },
    "data": [
        {
            "label": "Teenage",
            "value": "1250400"
        },
        {
            "label": "Adult",
            "value": "1463300"
        },
        {
            "label": "Mid-age",
            "value": "1050700"
        },
        {
            "label": "Senior",
            "value": "491000"
        }
    ]
};

const chart = new Vue({
    el: '#app',
    data: {
        type: 'pie2d',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: myDataSource
    }
});`,
    c6: `<div id="app">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
    </fusioncharts>
</div>`
}
        }
    }
}
</script>