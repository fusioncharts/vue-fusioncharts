import images from './images';
export default {
  sampleRouteMapping: {
    '1': 'simple-chart',
    '2': 'simple-time-series',
    '3': 'column-time-axis',
    '4': 'area-time-axis',
    '5': 'pie-3d-chart',
    '6': 'render-a-widget',
    '7': 'column-area-line-combi-chart',
    '8': 'column-line-time-axis',
    '9': 'multi-time-axis',
    '10': 'plotting-two-var',
    '11': 'fetch-data-from-json-url',
    '12': 'fetch-data-from-xml-url',
    '13': 'update-chart-data',
    '14': 'update-chart-attribute',
    '15': 'trigger-event-from-chart',
    '16': 'percentage-calculation',
    '17': 'drill-down-chart',
    '18': 'adding-reference-line',
    '19': 'annotating-single-data',
    '20': 'single-event-overlay',
    '21': 'date-event-overlay',
    '22': 'render-a-map',
    '23': 'client-side-export',
    // "15": "render-alert",
    '24': 'special-events',
    '25': 'life-cycle-events',
    '26': 'dynamically-add',
    '27': 'special-chart-api',
    '28': 'dynamic-size-change',
    '29': 'update-chart-type',
    '30': 'annotation',
    '31': 'update-chart-attribute-api',
    '32': 'using-a-theme',
    '33': 'interactive-candle-stick'
  },
  sampleImages: images.sampleLogo,
  sampleProps: {
    '1': {
      title: 'A Simple Chart',
      desc: 'A simple chart with all data embedded into the directive',
      interactiveViewURL: {
        'vue-fc': 'https://embed.plnkr.co/F70SeRSv6B4gBNtR7mTA'
      }
    },
    '2': {
      type: 'FusionTime',
      title: 'A Simple TimeSeries Chart',
      desc: 'A simple time-series chart with a single series plotted as line',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '3': {
      type: 'FusionTime',
      title: 'Column chart with time axis',
      desc: 'Time-series chart with series plotted as column.',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '4': {
      type: 'FusionTime',
      title: 'Area chart with time axis',
      desc: 'Time-series chart with series plotted as area.',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '5': {
      title: 'A 3D Pie Chart',
      desc:
        'A 3D pie chart using the datasource attribute from components scope',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '6': {
      title: 'A simple gauge',
      desc: 'A simple gauge to show customer satisfaction score',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '7': {
      title: 'A Column, Line and Area Combi Chart',
      desc: 'A combination chart of column, line and area',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '8': {
      type: 'FusionTime',
      title: 'Column and line combination on time axis',
      desc:
        'Two series of data plotted as a combination of column & line on the same y-axis',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '9': {
      type: 'FusionTime',
      title: 'Plotting multiple series on time axis',
      desc:
        'A multi-series chart with 2 variables plotted as line on the same y-axis.',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '10': {
      type: 'FusionTime',
      title: 'Plotting two variables (measures)',
      desc:
        'Plotting 2 different variables in 2 different vertically stacked canvases',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '11': {
      title: 'Fetch data from JSON URL',
      desc: 'Fetch data remotely from a JSON file or URL',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '12': {
      title: 'Fetch data from XML URL',
      desc: 'Fetch data remotely from an XML file or URL',
      data: 'data.xml',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '13': {
      title: 'Update chart data',
      desc:
        'Change the data dynamically and watch the chart update automatically',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '14': {
      title: 'Update chart attribute',
      desc: 'Update the chart with new attributes',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '15': {
      title: 'Listen to events from chart',
      desc: 'Bind event listener to the chart and get the related event data',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '16': {
      title: 'Percentage Calculation',
      desc: 'Hover on a plot to see the percentage value with respect to total',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '17': {
      title: 'Add drill-down to chart',
      desc: 'Use LinkedCharts to quickly add drill-down to charts',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '18': {
      type: 'FusionTime',
      title: 'Adding a reference line',
      desc:
        'Adding a static reference line (by value) to indicate targets or threshold.',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '19': {
      type: 'FusionTime',
      title: 'Annotating single data point',
      desc: 'Annotating specific data point using data markers on line series',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '20': {
      type: 'FusionTime',
      title: 'Single event overlay',
      desc:
        'Plotting an event marker to indicate an event for a specific date.',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '21': {
      type: 'FusionTime',
      title: 'Date range event overlay',
      desc:
        'Plotting an event marker as a band, to indicate an event that spans a data range.',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '22': {
      title: 'World Map',
      desc: 'World map showing data for different continents',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '23': {
      title: 'Export multiple charts',
      desc:
        'Use Batch Export Feature to export multiple charts as a single image/PDF',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    // "15": {
    //     "title": "Lifecycle events",
    //     "desc": "This sample lists the basic lifecycle events at the time of rendering FusionCharts",
    //     "interactiveViewURL": {
    //         "vue-fc": "//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/"
    //     }
    // },
    '24': {
      title: 'Special Events',
      desc: 'Drag a projected column to see its change',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '25': {
      title: 'Lifecycle events',
      desc:
        'This sample lists the basic lifecycle events at the time of rendering FusionCharts',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '26': {
      title: 'Dynamically add chart event listener',
      desc:
        'How you can dynamically(runtime) add & remove chart specific events in FusionCharts',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '27': {
      title: 'Slice data plots',
      desc: 'Use Chart specific custom API',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '28': {
      title: 'Responsive charts',
      desc:
        'Select any of the dimensions given in the list. The chart adjusts itself to its alloted percentage',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '29': {
      title: 'Change chart type at run time',
      desc: 'Change the chart type dynamically or at runtime',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '30': {
      title: 'Use Annotations',
      desc: 'Add custom shapes to highlight a specific data point',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '31': {
      title: 'Usage of FusionCharts methods (API)',
      desc:
        'Change a chart attribute by calling FusionCharts setChartAttribute API',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '32': {
      title: 'Applying a different theme',
      desc: 'Choosing from different themes available in FusionCharts Suite',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    },
    '33': {
      type: 'FusionTime',
      title: 'Interactive candlestick chart',
      desc:
        'Time-series chart plotted as candlestick, with 4 different values for each plot (open, high, low, close)',
      interactiveViewURL: {
        'vue-fc': '//jsfiddle.net/fusioncharts/f0b2e0ms/embedded/'
      }
    }
  }
};
