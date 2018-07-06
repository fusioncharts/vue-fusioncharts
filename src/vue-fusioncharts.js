const optionsMap = {
    type: 'type',
    id: 'id',
    width: 'width',
    height: 'height',
    dataFormat: 'dataFormat',
    dataSource: 'dataSource',
    events: 'events',
    link: 'link',
    showDataLoadingMessage: 'showDataLoadingMessage',
    showChartLoadingMessage: 'showChartLoadingMessage',
    baseChartMessageFont: 'baseChartMessageFont',
    baseChartMessageFontSize: 'baseChartMessageFontSize',
    baseChartMessageColor: 'baseChartMessageColor',
    dataLoadStartMessage: 'dataLoadStartMessage',
    dataLoadErrorMessage: 'dataLoadErrorMessage',
    dataInvalidMessage: 'dataInvalidMessage',
    dataEmptyMessage: 'dataEmptyMessage',
    typeNotSupportedMessage: 'typeNotSupportedMessage',
    loadMessage: 'loadMessage',
    renderErrorMessage: 'renderErrorMessage',
    containerBackgroundColor: 'containerBackgroundColor',
    containerBackgroundOpacity: 'containerBackgroundOpacity',
    containerClassName: 'containerClassName',
    baseChartMessageImageHAlign: 'baseChartMessageImageHAlign',
    baseChartMessageImageVAlign: 'baseChartMessageImageVAlign',
    baseChartMessageImageAlpha: 'baseChartMessageImageAlpha',
    baseChartMessageImageScale: 'baseChartMessageImageScale',
    typeNotSupportedMessageImageHAlign: 'typeNotSupportedMessageImageHAlign',
    typeNotSupportedMessageImageVAlign: 'typeNotSupportedMessageImageVAlign',
    typeNotSupportedMessageImageAlpha: 'typeNotSupportedMessageImageAlpha',
    typeNotSupportedMessageImageScale: 'typeNotSupportedMessageImageScale',
    dataLoadErrorMessageImageHAlign: 'dataLoadErrorMessageImageHAlign',
    dataLoadErrorMessageImageVAlign: 'dataLoadErrorMessageImageVAlign',
    dataLoadErrorMessageImageAlpha: 'dataLoadErrorMessageImageAlpha',
    dataLoadErrorMessageImageScale: 'dataLoadErrorMessageImageScale',
    dataLoadStartMessageImageHAlign: 'dataLoadStartMessageImageHAlign',
    dataLoadStartMessageImageVAlign: 'dataLoadStartMessageImageVAlign',
    dataLoadStartMessageImageAlpha: 'dataLoadStartMessageImageAlpha',
    dataLoadStartMessageImageScale: 'dataLoadStartMessageImageScale',
    dataInvalidMessageImageHAlign: 'dataInvalidMessageImageHAlign',
    dataInvalidMessageImageVAlign: 'dataInvalidMessageImageVAlign',
    dataInvalidMessageImageAlpha: 'dataInvalidMessageImageAlpha',
    dataInvalidMessageImageScale: 'dataInvalidMessageImageScale',
    dataEmptyMessageImageHAlign: 'dataEmptyMessageImageHAlign',
    dataEmptyMessageImageVAlign: 'dataEmptyMessageImageVAlign',
    dataEmptyMessageImageAlpha: 'dataEmptyMessageImageAlpha',
    dataEmptyMessageImageScale: 'dataEmptyMessageImageScale',
    renderErrorMessageImageHAlign: 'renderErrorMessageImageHAlign',
    renderErrorMessageImageVAlign: 'renderErrorMessageImageVAlign',
    renderErrorMessageImageAlpha: 'renderErrorMessageImageAlpha',
    renderErrorMessageImageScale: 'renderErrorMessageImageScale',
    loadMessageImageHAlign: 'loadMessageImageHAlign',
    loadMessageImageVAlign: 'loadMessageImageVAlign',
    loadMessageImageAlpha: 'loadMessageImageAlpha',
    loadMessageImageScale: 'loadMessageImageScale'
};

export default (FC) => {
    return {
        name: 'fusioncharts',
        template: '<div></div>',
        render: h => h('div'),
        props: {
            options: Object,
            type: String,
            id: String,
            width: '',
            height: '',
            dataFormat: String,
            dataSource: '',
            events: Object,
            link: Object,
            showDataLoadingMessage: Boolean,
            showChartLoadingMessage: Boolean,
            baseChartMessageFont: String,
            baseChartMessageFontSize: String,
            baseChartMessageColor: String,
            dataLoadStartMessage: String,
            dataLoadErrorMessage: String,
            dataInvalidMessage: String,
            dataEmptyMessage: String,
            typeNotSupportedMessage: String,
            loadMessage: String,
            renderErrorMessage: String,
            containerBackgroundColor: String,
            containerBackgroundOpacity: Number,
            containerClassName: String,
            baseChartMessageImageHAlign: String,
            baseChartMessageImageVAlign: String,
            baseChartMessageImageAlpha: Number,
            baseChartMessageImageScale: Number,
            typeNotSupportedMessageImageHAlign: String,
            typeNotSupportedMessageImageVAlign: String,
            typeNotSupportedMessageImageAlpha: Number,
            typeNotSupportedMessageImageScale: Number,
            dataLoadErrorMessageImageHAlign: String,
            dataLoadErrorMessageImageVAlign: String,
            dataLoadErrorMessageImageAlpha: Number,
            dataLoadErrorMessageImageScale: Number,
            dataLoadStartMessageImageHAlign: String,
            dataLoadStartMessageImageVAlign: String,
            dataLoadStartMessageImageAlpha: Number,
            dataLoadStartMessageImageScale: Number,
            dataInvalidMessageImageHAlign: String,
            dataInvalidMessageImageVAlign: String,
            dataInvalidMessageImageAlpha: Number,
            dataInvalidMessageImageScale: Number,
            dataEmptyMessageImageHAlign: String,
            dataEmptyMessageImageVAlign: String,
            dataEmptyMessageImageAlpha: Number,
            dataEmptyMessageImageScale: Number,
            renderErrorMessageImageHAlign: String,
            renderErrorMessageImageVAlign: String,
            renderErrorMessageImageAlpha: Number,
            renderErrorMessageImageScale: Number,
            loadMessageImageHAlign: String,
            loadMessageImageVAlign: String,
            loadMessageImageAlpha: Number,
            loadMessageImageScale: Number
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
            dataSource: {
                handler: function () {
                    this.chartObj.setChartData(this.dataSource, this.dataformat);
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
