import Vue from 'vue';
import VueFc from '../dist/vue-fusioncharts.js';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Fint from 'fusioncharts/themes/fusioncharts.theme.fint';

// Use VueFusionCharts plugins by calling the Vue.use() global method:
Vue.use(VueFc, FusionCharts, Charts, Fint);

// bootstrap the demo
var chart = new Vue({
    el: '#chart1',
    data: {
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
    }
});

