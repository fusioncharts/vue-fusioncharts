const optionsMap = {
    type: 'type',
    id: 'id',
    width: 'width',
    height: 'height',
    dataformat: 'dataFormat',
    datasource: 'dataSource',
    events: 'events',
    link: 'link',
    showdataloadingmessage: 'showDataLoadingMessage',
    showchartloadingmessage: 'showChartLoadingMessage',
    basechartmessagefont: 'baseChartMessageFont',
    basechartmessagefontsize: 'baseChartMessageFontSize',
    basechartmessagecolor: 'baseChartMessageColor',
    dataloadstartmessage: 'dataLoadStartMessage',
    dataloaderrormessage: 'dataLoadErrorMessage',
    datainvalidmessage: 'dataInvalidMessage',
    dataemptymessage: 'dataEmptyMessage',
    typenotsupportedmessage: 'typeNotSupportedMessage',
    loadmessage: 'loadMessage',
    rendererrormessage: 'renderErrorMessage',
    containerbackgroundcolor: 'containerBackgroundColor',
    containerbackgroundopacity: 'containerBackgroundOpacity',
    containerclassname: 'containerClassName',
    basechartmessageimagehalign: 'baseChartMessageImageHAlign',
    basechartmessageimagevalign: 'baseChartMessageImageVAlign',
    basechartmessageimagealpha: 'baseChartMessageImageAlpha',
    basechartmessageimagescale: 'baseChartMessageImageScale',
    typenotsupportedmessageimagehalign: 'typeNotSupportedMessageImageHAlign',
    typenotsupportedmessageimagevalign: 'typeNotSupportedMessageImageVAlign',
    typenotsupportedmessageimagealpha: 'typeNotSupportedMessageImageAlpha',
    typenotsupportedmessageimagescale: 'typeNotSupportedMessageImageScale',
    dataloaderrormessageimagehalign: 'dataLoadErrorMessageImageHAlign',
    dataloaderrormessageimagevalign: 'dataLoadErrorMessageImageVAlign',
    dataloaderrormessageimagealpha: 'dataLoadErrorMessageImageAlpha',
    dataloaderrormessageimagescale: 'dataLoadErrorMessageImageScale',
    dataloadstartmessageimagehalign: 'dataLoadStartMessageImageHAlign',
    dataloadstartmessageimagevalign: 'dataLoadStartMessageImageVAlign',
    dataloadstartmessageimagealpha: 'dataLoadStartMessageImageAlpha',
    dataloadstartmessageimagescale: 'dataLoadStartMessageImageScale',
    datainvalidmessageimagehalign: 'dataInvalidMessageImageHAlign',
    datainvalidmessageimagevalign: 'dataInvalidMessageImageVAlign',
    datainvalidmessageimagealpha: 'dataInvalidMessageImageAlpha',
    datainvalidmessageimagescale: 'dataInvalidMessageImageScale',
    dataemptymessageimagehalign: 'dataEmptyMessageImageHAlign',
    dataemptymessageimagevalign: 'dataEmptyMessageImageVAlign',
    dataemptymessageimagealpha: 'dataEmptyMessageImageAlpha',
    dataemptymessageimagescale: 'dataEmptyMessageImageScale',
    rendererrormessageimagehalign: 'renderErrorMessageImageHAlign',
    rendererrormessageimagevalign: 'renderErrorMessageImageVAlign',
    rendererrormessageimagealpha: 'renderErrorMessageImageAlpha',
    rendererrormessageimagescale: 'renderErrorMessageImageScale',
    loadmessageimagehalign: 'loadMessageImageHAlign',
    loadmessageimagevalign: 'loadMessageImageVAlign',
    loadmessageimagealpha: 'loadMessageImageAlpha',
    loadmessageimagescale: 'loadMessageImageScale'
};

export default (FC) => {
    return {
        name: 'fusioncharts',
        template: '<div></div>',
        props: {
            options: Object,
            type: String,
            id: String,
            width: '',
            height: '',
            dataformat: String,
            datasource: '',
            events: Object,
            link: Object,
            showdataloadingmessage: Boolean,
            showchartloadingmessage: Boolean,
            basechartmessagefont: String,
            basechartmessagefontsize: String,
            basechartmessagecolor: String,
            dataloadstartmessage: String,
            dataloaderrormessage: String,
            datainvalidmessage: String,
            dataemptymessage: String,
            typenotsupportedmessage: String,
            loadmessage: String,
            rendererrormessage: String,
            containerbackgroundcolor: String,
            containerbackgroundopacity: Number,
            containerclassname: String,
            basechartmessageimagehalign: String,
            basechartmessageimagevalign: String,
            basechartmessageimagealpha: Number,
            basechartmessageimagescale: Number,
            typenotsupportedmessageimagehalign: String,
            typenotsupportedmessageimagevalign: String,
            typenotsupportedmessageimagealpha: Number,
            typenotsupportedmessageimagescale: Number,
            dataloaderrormessageimagehalign: String,
            dataloaderrormessageimagevalign: String,
            dataloaderrormessageimagealpha: Number,
            dataloaderrormessageimagescale: Number,
            dataloadstartmessageimagehalign: String,
            dataloadstartmessageimagevalign: String,
            dataloadstartmessageimagealpha: Number,
            dataloadstartmessageimagescale: Number,
            datainvalidmessageimagehalign: String,
            datainvalidmessageimagevalign: String,
            datainvalidmessageimagealpha: Number,
            datainvalidmessageimagescale: Number,
            dataemptymessageimagehalign: String,
            dataemptymessageimagevalign: String,
            dataemptymessageimagealpha: Number,
            dataemptymessageimagescale: Number,
            rendererrormessageimagehalign: String,
            rendererrormessageimagevalign: String,
            rendererrormessageimagealpha: Number,
            rendererrormessageimagescale: Number,
            loadmessageimagehalign: String,
            loadmessageimagevalign: String,
            loadmessageimagealpha: Number,
            loadmessageimagescale: Number
        },
        methods: {
            setLastOptions: function (config) {
                this._oldOptions = Object.assign({}, config);
            },
            getLastOptions: function () {
                return this._oldOptions;
            },
            getOptions: function () {
                let config = {},
                    THIS = this;
                for (let i in optionsMap) {
                    if (THIS[i] !== undefined && THIS[i] !== null) {
                        config[optionsMap[i]] = THIS[i];
                    }
                }

                let options = Object.assign(Object.assign({}, THIS.options), config);

                return options;
            },
            renderChart: function () {
                let THIS = this,
                    config = THIS.getOptions(),
                    chartObj = THIS.chartObj;

                config.renderAt = THIS.$el;
                THIS.setLastOptions(config);

                if (chartObj && chartObj.dispose) {
                    chartObj.dispose();
                }

                THIS.chartObj = chartObj = new FC(config);
                chartObj.render();
            },
            updateChart: function () {
                let THIS = this,
                    config = THIS.getOptions(),
                    prevConfig = THIS.getLastOptions(),
                    chartObj = THIS.chartObj;

                if (config.width !== prevConfig.width || config.height !== prevConfig.height) {
                    chartObj && chartObj.resizeTo(config.width, config.height);
                } else if (config.type !== prevConfig.type) {
                    chartObj.chartType(config.type);
                } else {
                    chartObj.setChartData(config.dataSource, config.dataFormat);
                }

                THIS.setLastOptions(config);
            }
        },
        watch: {
            type: function () {
                this.chartObj.chartType(this.type);
            },
            width: function () {
                this.chartObj.resizeTo(this.width, this.height);
            },
            height: function () {
                this.chartObj.resizeTo(this.width, this.height);
            },
            options: {
                handler: function () {
                    this.updateChart();
                },
                deep: true
            },
            datasource: {
                handler: function () {
                    this.chartObj.setChartData(this.datasource, this.dataformat);
                },
                deep: true
            }
        },
        beforeDestroy: function() {
            this.chartObj.dispose();
        },
        mounted: function () {
            this.renderChart();
        },
        ready: function () {
            this.renderChart();
        }
    };

};
