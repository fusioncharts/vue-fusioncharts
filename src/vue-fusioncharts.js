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
    loadMessageImageScale: 'loadMessageImageScale',
    ///////////////////////////////////////////////////////
    dataformat: 'dataFormat',
    datasource: 'dataSource',
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
        render: function(h){
            this.containerID = 'fc-'+this._uid;
            return h('div', {
                attrs:{
                    'id':this.containerID
                }
            });
        },
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
            loadMessageImageScale: Number,
            ///////////////////////////////////////////////
            dataformat: String,
            datasource: '',
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
            attachListeners: function (){
                if(this.$listeners && typeof this.$listeners === 'object'){
                    Object.keys(this.$listeners).forEach((event)=>{
                        this.chartObj.addEventListener(event, (e)=>{
                            this.$emit(event, e);
                        });
                    });
                }
            },
            createEvents: function(){
                if(this.$listeners && typeof this.$listeners === 'object'){
                    const ret = {
                        'events':{}
                    };
                    Object.keys(this.$listeners).forEach((event)=>{
                        ret.events[event] = (e)=>{
                            this.$emit(event, e);
                        };
                    });
                    return ret;
                }
            },
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

                config.renderAt = this.containerID;
                THIS.setLastOptions(config);

                if (chartObj && chartObj.dispose) {
                    chartObj.dispose();
                }
                const events = this.createEvents();
                config.events = Object.assign({}, config.events, events.events);

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
                    this.chartObj.setChartData(this.datasource || this.dataSource, this.dataFormat || this.dataformat);
                },
                deep: true
            },
            datasource: {
                handler: function () {
                    this.chartObj.setChartData(this.datasource || this.dataSource, this.dataFormat || this.dataformat);
                },
                deep: true
            }
        },
        deactivated: function() {
            this.chartObj && this.chartObj.dispose();
        },
        beforeDestroy: function() {
            this.chartObj && this.chartObj.dispose();
        },
        mounted: function () {
            this.renderChart();
        },
        ready: function () {
            this.renderChart();
        }
    };

};
