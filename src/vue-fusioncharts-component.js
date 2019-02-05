import _FC from 'fusioncharts';
const { optionsMap, props } = require('./config.js');
import { addDep, checkIfDataTableExists, cloneDataSource } from './utils';

export default (FC, ...options) => {
  options &&
    options.forEach &&
    options.forEach(modules => {
      addDep(FC, _FC, modules);
    });
  return {
    name: 'fusioncharts',
    template: '<div></div>',
    render: function(h) {
      this.containerID = 'fc-' + this._uid;
      return h('div', {
        attrs: {
          id: this.containerID
        }
      });
    },
    props,
    methods: {
      attachListeners: function() {
        if (this.$listeners && typeof this.$listeners === 'object') {
          Object.keys(this.$listeners).forEach(event => {
            this.chartObj.addEventListener(event, e => {
              this.$emit(event, e);
            });
          });
        }
      },
      createEvents: function() {
        const ret = {
          events: {}
        };
        if (this.$listeners && typeof this.$listeners === 'object') {
          Object.keys(this.$listeners).forEach(event => {
            ret.events[event] = e => {
              this.$emit(event, e);
            };
          });
        }
        return ret;
      },
      setLastOptions: function(config) {
        this._oldOptions = Object.assign({}, config);
      },
      getLastOptions: function() {
        return this._oldOptions;
      },
      getOptions: function() {
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
      renderChart: function() {
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
      updateChart: function() {
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
      }
    },
    watch: {
      type: function() {
        this.chartObj.chartType(this.type);
      },
      width: function() {
        this.chartObj.resizeTo(this.width, this.height);
      },
      height: function() {
        this.chartObj.resizeTo(this.width, this.height);
      },
      options: {
        handler: function() {
          this.updateChart();
        },
        deep: true
      },
      dataSource: {
        handler: function() {
          if (!checkIfDataTableExists(this.dataSource)) {
            this.chartObj.setChartData(
              this.datasource || this.dataSource,
              this.dataFormat || this.dataformat
            );
          }
        },
        deep: true
      },
      datasource: {
        handler: function() {
          if (!checkIfDataTableExists(this.datasource)) {
            this.chartObj.setChartData(
              this.datasource || this.dataSource,
              this.dataFormat || this.dataformat
            );
          }
        },
        deep: true
      },
      'datasource.data': {
        handler: function(newVal, prevVal) {
          if (newVal !== prevVal) {
            // SPECIAL CASE: When DataSource has series attribute, vue internally goes into Infinite recursion
            // specifically on _traverse method. This code is written to tackle that issue. In future a much more
            // concrete solution is required.
            if (this.datasource && this.datasource.series) {
              const _FC_ = _FC || window.FusionCharts;
              const data = JSON.parse(JSON.stringify(newVal._data));
              const schema = JSON.parse(JSON.stringify(newVal._schema));
              const dataTable = new _FC_.DataStore().createDataTable(
                data,
                schema
              );
              const newDs = Object.assign(
                {},
                this.datasource || this.dataSource
              );
              newDs.data = dataTable;
              this.chartObj.setChartData(
                newDs,
                this.dataFormat || this.dataformat
              );
              return null;
            }
            this.chartObj.setChartData(
              this.datasource || this.dataSource,
              this.dataFormat || this.dataformat
            );
          }
        },
        deep: false
      },
      'dataSource.data': {
        handler: function(newVal, prevVal) {
          if (newVal !== prevVal) {
            if (this.dataSource && this.dataSource.series) {
              const _FC_ = _FC || window.FusionCharts;
              const data = JSON.parse(JSON.stringify(newVal._data));
              const schema = JSON.parse(JSON.stringify(newVal._schema));
              const dataTable = new _FC_.DataStore().createDataTable(
                data,
                schema
              );
              let newDs = Object.assign({}, this.datasource || this.dataSource);
              newDs.data = dataTable;
              this.chartObj.setChartData(
                newDs,
                this.dataFormat || this.dataformat
              );
              return null;
            }
            this.chartObj.setChartData(
              this.datasource || this.dataSource,
              this.dataFormat || this.dataformat
            );
          }
        },
        deep: false
      }
    },
    deactivated: function() {
      this.chartObj && this.chartObj.dispose();
    },
    beforeDestroy: function() {
      this.chartObj && this.chartObj.dispose();
    },
    mounted: function() {
      this.renderChart();
    },
    ready: function() {
      this.renderChart();
    },
    beforeUpdate: function() {
      const strPrevClonedDataSource = JSON.stringify(this.prevDataSource);
      const ds = this.datasource || this.dataSource || this.options.dataSource;
      const strCurrClonedDataSource = JSON.stringify(
        cloneDataSource(ds, 'diff')
      );
      if (strPrevClonedDataSource !== strCurrClonedDataSource) {
        this.prevDataSource = cloneDataSource(ds, 'diff');
        // if (ds.series) {
        //   return null;
        // }
        this.chartObj.setChartData(ds, this.dataFormat || this.dataformat);
      }
    }
  };
};
