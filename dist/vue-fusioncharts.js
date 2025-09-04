(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash/cloneDeep'), require('lodash/uniqueId'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['lodash/cloneDeep', 'lodash/uniqueId', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VueFusionCharts = factory(global.cloneDeep, global.uniqueId, global.Vue));
})(this, (function (cloneDeep, uniqueId, vue) { 'use strict';

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
    loadmessageimagescale: 'loadMessageImageScale',
  };

  const props = {
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
    loadmessageimagescale: Number,
  };

  const addDep = (FC, modules) => {
    if (FC) {
      if (
        (modules.getName && modules.getType) ||
        (modules.name && modules.type)
      ) {
        FC.addDep(modules);
      } else {
        modules(FC);
      }
    }
  };

  function checkIfDataTableExists(dataSource) {
    // eslint-disable-next-line no-underscore-dangle
    if (dataSource && dataSource.data && dataSource.data._dataStore) {
      return true;
    }
    return false;
  }

  function cloneDataSource(obj, purpose = 'clone') {
    const type = typeof obj;
    if (
      type === 'string' ||
      type === 'number' ||
      type === 'function' ||
      type === 'boolean'
    ) {
      return obj;
    }
    if (obj === null || obj === undefined) {
      return obj;
    }
    if (Array.isArray(obj)) {
      const arr = [];
      for (let i = 0; i < obj.length; i++) {
        arr.push(cloneDataSource(obj[i]));
      }
      return arr;
    }
    if (typeof obj === 'object') {
      const clonedObj = {};
      // eslint-disable-next-line guard-for-in
      // eslint-disable-next-line no-restricted-syntax
      for (const prop in obj) {
        // Edge case handling for DataTable
        if (prop === 'data') {
          // eslint-disable-next-line no-underscore-dangle
          if (obj[prop] && obj[prop]._dataStore && purpose === 'clone') {
            clonedObj[prop] = obj[prop];
            // eslint-disable-next-line no-underscore-dangle
          } else if (obj[prop] && obj[prop]._dataStore && purpose === 'diff') {
            clonedObj[prop] = '-';
          } else {
            clonedObj[prop] = cloneDataSource(obj[prop]);
          }
          continue;
        }
        clonedObj[prop] = cloneDataSource(obj[prop]);
      }
      return clonedObj;
    }
    return undefined;
  }

  var _FCComponent = (FC, ...options) => {
    options &&
      options.forEach &&
      options.forEach((modules) => {
        addDep(FC, modules);
      });
    return {
      name: 'fusioncharts',
      render: function () {
        this.containerID = 'fc-' + uniqueId();
        return vue.h('div', {
          id: this.containerID,
        });
      },
      props,
      methods: {
        createEvents: function () {
          const myattrs = this.$attrs;
          const ret = {
            events: {},
          };

          if (myattrs && typeof myattrs === 'object') {
            Object.keys(myattrs).forEach((event) => {
              if (event.startsWith('on') && typeof myattrs[event] === 'function') {
                const myEvent = event.replace('on', '');
                ret.events[myEvent] = e => {
                  this.$emit(myEvent, e);
                };
              }
            });
          }
          return ret;
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

          let ds = config.dataSource || config.datasource;

          if (checkIfDataTableExists(ds))
            this.prevDataSource = cloneDataSource(ds, 'diff');
          else this.prevDataSource = cloneDataSource(ds, 'clone');

          THIS.chartObj = chartObj = new FC(config);
          chartObj.render();
        },
        updateChart: function () {
          let THIS = this,
            config = THIS.getOptions(),
            prevConfig = THIS.getLastOptions(),
            chartObj = THIS.chartObj;

          if (
            config.width !== prevConfig.width ||
            config.height !== prevConfig.height
          ) {
            chartObj && chartObj.resizeTo(config.width, config.height);
          } else if (config.type !== prevConfig.type) {
            chartObj.chartType(config.type);
          } else {
            if (!checkIfDataTableExists(config.dataSource))
              chartObj.setChartData(config.dataSource, config.dataFormat);
          }

          THIS.setLastOptions(config);
        },
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
          deep: true,
        },
        dataSource: {
          handler: function () {
            if (!checkIfDataTableExists(this.dataSource)) {
              this.chartObj.setChartData(
                this.datasource || this.dataSource,
                this.dataFormat || this.dataformat
              );
            }
          },
          deep: true,
        },
        datasource: {
          handler: function () {
            if (!checkIfDataTableExists(this.datasource)) {
              this.chartObj.setChartData(
                this.datasource || this.dataSource,
                this.dataFormat || this.dataformat
              );
            }
          },
          deep: true,
        },
        'datasource.data': {
          handler: function (newVal, prevVal) {
            if (newVal !== prevVal) {
              let clonedDataSource;
              if (this.datasource.series) {
                clonedDataSource = cloneDeep(this.datasource);
              } else clonedDataSource = this.datasource;
              this.chartObj.setChartData(
                clonedDataSource,
                this.dataFormat || this.dataformat
              );
            }
          },
          deep: false,
        },
        'dataSource.data': {
          handler: function (newVal, prevVal) {
            if (newVal !== prevVal) {
              let clonedDataSource;
              if (this.dataSource.series) {
                clonedDataSource = cloneDeep(this.dataSource);
              } else clonedDataSource = this.dataSource;
              this.chartObj.setChartData(
                clonedDataSource,
                this.dataFormat || this.dataformat
              );
            }
          },
          deep: false,
        },
      },
      deactivated: function () {
        this.chartObj && this.chartObj.dispose();
      },
      beforeUnmount: function () {
        this.chartObj && this.chartObj.dispose();
      },
      mounted: function () {
        this.renderChart();
      },
      ready: function () {
        this.renderChart();
      },
      beforeUpdate: function () {
        const strPrevClonedDataSource = JSON.stringify(this.prevDataSource);
        let ds = this.datasource || this.dataSource || this.options.dataSource;
        const strCurrClonedDataSource = JSON.stringify(
          cloneDataSource(ds, 'diff')
        );
        if (strPrevClonedDataSource !== strCurrClonedDataSource) {
          this.prevDataSource = cloneDataSource(ds, 'diff');
          if (ds.series) {
            ds = cloneDeep(ds);
          }
          this.chartObj.setChartData(ds, this.dataFormat || this.dataformat);
        }
      },
    };
  };

  const install = (app, FC, ...options) => {
    let component = _FCComponent(FC, ...options);
    app.component(component.name, component);
  };

  return install;

}));
