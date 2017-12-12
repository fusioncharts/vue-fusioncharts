import Vue from 'vue';
import VueFusionCharts from '../dist/vue-fusioncharts.js';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Fint from 'fusioncharts/themes/fusioncharts.theme.fint';


Charts(FusionCharts);
Fint(FusionCharts);

// Use VueFusionCharts plugins by calling the Vue.use() global method:
Vue.use(VueFusionCharts);

// bootstrap the demo
var chart = new Vue({
    el: '#chart1',
    data: {
        options: {
            type: 'column2d',
            width: '600',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                'chart': {
                    'caption': 'Top 3 Juice Flavors',
                    'subcaption': 'Last year',
                    'xaxisname': 'Flavor',
                    'yaxisname': 'Amount (In USD)',
                    'numberprefix': '$',
                    'palettecolors': '#008ee4',
                    'canvasbgalpha': '0',
                    'canvasborderalpha': '0',
                    'useplotgradientcolor': '0',
                    'showplotborder': '0',
                    'placevaluesinside': '1',
                    'valuefontcolor': '#ffffff',
                    'captionpadding': '20',
                    'showaxislines': '1',
                    'axislinealpha': '20',
                    'divlinealpha': '20',
                    'showborder': '1',
                    'bgalpha': '0',
                    'animation': '0',
                    'theme': 'fint'
                },
                'data': [{
                    'label': 'Apple',
                    'value': '810000',
                    'link': 'newchart-xml-apple'
                }, {
                    'label': 'Cranberry',
                    'value': '620000',
                    'link': 'newchart-xml-cranberry'
                }, {
                    'label': 'Grapes',
                    'value': '350000',
                    'link': 'newchart-xml-grapes'
                }],
                'linkeddata': [{
                    'id': 'apple',
                    'linkedchart': {
                        'chart': {
                            'caption': 'Apple Juice - Quarterly Sales',
                            'subcaption': 'Last year',
                            'xaxisname': 'Quarter',
                            'yaxisname': 'Amount (In USD)',
                            'numberprefix': '$',
                            'palettecolors': '#008ee4',
                            'canvasbgalpha': '0',
                            'canvasborderalpha': '0',
                            'useplotgradientcolor': '0',
                            'showplotborder': '0',
                            'placevaluesinside': '1',
                            'valuefontcolor': '#ffffff',
                            'captionpadding': '20',
                            'showaxislines': '1',
                            'axislinealpha': '20',
                            'divlinealpha': '20',
                            'showborder': '1',
                            'bgalpha': '0',
                            'animation': '0'
                        },
                        'data': [{
                            'label': 'Q1',
                            'value': '157000'
                        }, {
                            'label': 'Q2',
                            'value': '172000'
                        }, {
                            'label': 'Q3',
                            'value': '206000'
                        }, {
                            'label': 'Q4',
                            'value': '275000'
                        }]
                    }
                }, {
                    'id': 'cranberry',
                    'linkedchart': {
                        'chart': {
                            'caption': 'Cranberry Juice - Quarterly Sales',
                            'subcaption': 'Last year',
                            'xaxisname': 'Quarter',
                            'yaxisname': 'Amount (In USD)',
                            'numberprefix': '$',
                            'palettecolors': '#008ee4',
                            'canvasbgalpha': '0',
                            'canvasborderalpha': '0',
                            'useplotgradientcolor': '0',
                            'showplotborder': '0',
                            'placevaluesinside': '1',
                            'valuefontcolor': '#ffffff',
                            'captionpadding': '20',
                            'showaxislines': '1',
                            'axislinealpha': '20',
                            'divlinealpha': '20',
                            'showborder': '1',
                            'bgalpha': '0',
                            'animation': '0'
                        },
                        'data': [{
                            'label': 'Q1',
                            'value': '102000'
                        }, {
                            'label': 'Q2',
                            'value': '142000'
                        }, {
                            'label': 'Q3',
                            'value': '187000'
                        }, {
                            'label': 'Q4',
                            'value': '189000'
                        }]
                    }
                }, {
                    'id': 'grapes',
                    'linkedchart': {
                        'chart': {
                            'caption': 'Grape Juice - Quarterly Sales',
                            'subcaption': 'Last year',
                            'xaxisname': 'Quarter',
                            'yaxisname': 'Amount (In USD)',
                            'numberprefix': '$',
                            'palettecolors': '#008ee4',
                            'canvasbgalpha': '0',
                            'canvasborderalpha': '0',
                            'useplotgradientcolor': '0',
                            'showplotborder': '0',
                            'placevaluesinside': '1',
                            'valuefontcolor': '#ffffff',
                            'captionpadding': '20',
                            'showaxislines': '1',
                            'axislinealpha': '20',
                            'divlinealpha': '20',
                            'showborder': '1',
                            'bgalpha': '0',
                            'animation': '0'
                        },
                        'data': [{
                            'label': 'Q1',
                            'value': '45000'
                        }, {
                            'label': 'Q2',
                            'value': '72000'
                        }, {
                            'label': 'Q3',
                            'value': '95000'
                        }, {
                            'label': 'Q4',
                            'value': '108000'
                        }]
                    }
                }]
            },
            displayValue: 'nothing',
            events: {
                dataplotRollover: function (ev, props) {
                    chart.displayValue = props.displayValue;
                }
            }
        },
        displayValue: 'nothing'
    }
});

window.chart = chart;

