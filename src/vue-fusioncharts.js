
export default (FC) => {
    return {
        name: 'fusioncharts',
        template: '<div></div>',
        props: {
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
            renderChart: function () {
                this.chartObj = new FC({
                    type: this.type,
                    id: this.id,
                    width: this.width,
                    height: this.height,
                    dataFormat: this.dataformat,
                    dataSource: this.datasource,
                    renderAt: this.$el,
                    events: this.events,
                    link: this.link,
                    showDataLoadingMessage: this.showdataloadingmessage,
                    showChartLoadingMessage: this.showchartloadingmessage,
                    baseChartMessageFont: this.basechartmessagefont,
                    baseChartMessageFontSize: this.basechartmessagefontsize,
                    baseChartMessageColor: this.basechartmessagecolor,
                    dataLoadStartMessage: this.dataloadstartmessage,
                    dataLoadErrorMessage: this.dataloaderrormessage,
                    dataInvalidMessage: this.datainvalidmessage,
                    dataEmptyMessage: this.dataemptymessage,
                    typeNotSupportedMessage: this.typenotsupportedmessage,
                    loadMessage: this.loadmessage,
                    renderErrorMessage: this.rendererrormessage,
                    containerBackgroundColor: this.containerbackgroundcolor,
                    containerBackgroundOpacity: this.containerbackgroundopacity,
                    containerClassName: this.containerclassname,
                    baseChartMessageImageHAlign: this.basechartmessageimagehalign,
                    baseChartMessageImageVAlign: this.basechartmessageimagevalign,
                    baseChartMessageImageAlpha: this.basechartmessageimagealpha,
                    baseChartMessageImageScale: this.basechartmessageimagescale,
                    typeNotSupportedMessageImageHAlign: this.typenotsupportedmessageimagehalign,
                    typeNotSupportedMessageImageVAlign: this.typenotsupportedmessageimagevalign,
                    typeNotSupportedMessageImageAlpha: this.typenotsupportedmessageimagealpha,
                    typeNotSupportedMessageImageScale: this.typenotsupportedmessageimagescale,
                    dataLoadErrorMessageImageHAlign: this.dataloaderrormessageimagehalign,
                    dataLoadErrorMessageImageVAlign: this.dataloaderrormessageimagevalign,
                    dataLoadErrorMessageImageAlpha: this.dataloaderrormessageimagealpha,
                    dataLoadErrorMessageImageScale: this.dataloaderrormessageimagescale,
                    dataLoadStartMessageImageHAlign: this.dataloadstartmessageimagehalign,
                    dataLoadStartMessageImageVAlign: this.dataloadstartmessageimagevalign,
                    dataLoadStartMessageImageAlpha: this.dataloadstartmessageimagealpha,
                    dataLoadStartMessageImageScale: this.dataloadstartmessageimagescale,
                    dataInvalidMessageImageHAlign: this.datainvalidmessageimagehalign,
                    dataInvalidMessageImageVAlign: this.datainvalidmessageimagevalign,
                    dataInvalidMessageImageAlpha: this.datainvalidmessageimagealpha,
                    dataInvalidMessageImageScale: this.datainvalidmessageimagescale,
                    dataEmptyMessageImageHAlign: this.dataemptymessageimagehalign,
                    dataEmptyMessageImageVAlign: this.dataemptymessageimagevalign,
                    dataEmptyMessageImageAlpha: this.dataemptymessageimagealpha,
                    dataEmptyMessageImageScale: this.dataemptymessageimagescale,
                    renderErrorMessageImageHAlign: this.rendererrormessageimagehalign,
                    renderErrorMessageImageVAlign: this.rendererrormessageimagevalign,
                    renderErrorMessageImageAlpha: this.rendererrormessageimagealpha,
                    renderErrorMessageImageScale: this.rendererrormessageimagescale,
                    loadMessageImageHAlign: this.loadmessageimagehalign,
                    loadMessageImageVAlign: this.loadmessageimagevalign,
                    loadMessageImageAlpha: this.loadmessageimagealpha,
                    loadMessageImageScale: this.loadmessageimagescale
                });
                this.chartObj.render();
            },
            updateChart: function () {
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
