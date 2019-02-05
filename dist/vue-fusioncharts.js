(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fusioncharts"));
	else if(typeof define === 'function' && define.amd)
		define(["fusioncharts"], factory);
	else if(typeof exports === 'object')
		exports["VueFusionCharts"] = factory(require("fusioncharts"));
	else
		root["VueFusionCharts"] = factory(root["FusionCharts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fusioncharts = __webpack_require__(4);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(1),
    optionsMap = _require.optionsMap,
    props = _require.props;

exports.default = function (FC) {
  for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    options[_key - 1] = arguments[_key];
  }

  options && options.forEach && options.forEach(function (modules) {
    (0, _utils.addDep)(FC, _fusioncharts2.default, modules);
  });
  return {
    name: 'fusioncharts',
    template: '<div></div>',
    render: function render(h) {
      this.containerID = 'fc-' + this._uid;
      return h('div', {
        attrs: {
          id: this.containerID
        }
      });
    },
    props: props,
    methods: {
      attachListeners: function attachListeners() {
        var _this = this;

        if (this.$listeners && _typeof(this.$listeners) === 'object') {
          Object.keys(this.$listeners).forEach(function (event) {
            _this.chartObj.addEventListener(event, function (e) {
              _this.$emit(event, e);
            });
          });
        }
      },
      createEvents: function createEvents() {
        var _this2 = this;

        var ret = {
          events: {}
        };
        if (this.$listeners && _typeof(this.$listeners) === 'object') {
          Object.keys(this.$listeners).forEach(function (event) {
            ret.events[event] = function (e) {
              _this2.$emit(event, e);
            };
          });
        }
        return ret;
      },
      setLastOptions: function setLastOptions(config) {
        this._oldOptions = Object.assign({}, config);
      },
      getLastOptions: function getLastOptions() {
        return this._oldOptions;
      },
      getOptions: function getOptions() {
        var config = {},
            THIS = this;
        for (var i in optionsMap) {
          if (THIS[i] !== undefined && THIS[i] !== null) {
            config[optionsMap[i]] = THIS[i];
          }
        }

        var options = Object.assign(Object.assign({}, THIS.options), config);

        return options;
      },
      renderChart: function renderChart() {
        var THIS = this,
            config = THIS.getOptions(),
            chartObj = THIS.chartObj;

        config.renderAt = this.containerID;
        THIS.setLastOptions(config);

        if (chartObj && chartObj.dispose) {
          chartObj.dispose();
        }
        var events = this.createEvents();
        config.events = Object.assign({}, config.events, events.events);

        var ds = config.dataSource || config.datasource;

        if ((0, _utils.checkIfDataTableExists)(ds)) this.prevDataSource = (0, _utils.cloneDataSource)(ds, 'diff');else this.prevDataSource = (0, _utils.cloneDataSource)(ds, 'clone');

        THIS.chartObj = chartObj = new FC(config);
        chartObj.render();
      },
      updateChart: function updateChart() {
        var THIS = this,
            config = THIS.getOptions(),
            prevConfig = THIS.getLastOptions(),
            chartObj = THIS.chartObj;

        if (config.width !== prevConfig.width || config.height !== prevConfig.height) {
          chartObj && chartObj.resizeTo(config.width, config.height);
        } else if (config.type !== prevConfig.type) {
          chartObj.chartType(config.type);
        } else {
          if (!(0, _utils.checkIfDataTableExists)(config.dataSource)) chartObj.setChartData(config.dataSource, config.dataFormat);
        }

        THIS.setLastOptions(config);
      }
    },
    watch: {
      type: function type() {
        this.chartObj.chartType(this.type);
      },
      width: function width() {
        this.chartObj.resizeTo(this.width, this.height);
      },
      height: function height() {
        this.chartObj.resizeTo(this.width, this.height);
      },
      options: {
        handler: function handler() {
          this.updateChart();
        },
        deep: true
      },
      dataSource: {
        handler: function handler() {
          if (!(0, _utils.checkIfDataTableExists)(this.dataSource)) {
            this.chartObj.setChartData(this.datasource || this.dataSource, this.dataFormat || this.dataformat);
          }
        },
        deep: true
      },
      datasource: {
        handler: function handler() {
          if (!(0, _utils.checkIfDataTableExists)(this.datasource)) {
            this.chartObj.setChartData(this.datasource || this.dataSource, this.dataFormat || this.dataformat);
          }
        },
        deep: true
      },
      'datasource.data': {
        handler: function handler(newVal, prevVal) {
          if (newVal !== prevVal) {
            // SPECIAL CASE: When DataSource has series attribute, vue internally goes into Infinite recursion
            // specifically on _traverse method. This code is written to tackle that issue. In future a much more
            // concrete solution is required.
            if (this.datasource && this.datasource.series) {
              var _FC_ = _fusioncharts2.default || window.FusionCharts;
              var data = JSON.parse(JSON.stringify(newVal._data));
              var schema = JSON.parse(JSON.stringify(newVal._schema));
              var dataTable = new _FC_.DataStore().createDataTable(data, schema);
              var newDs = Object.assign({}, this.datasource || this.dataSource);
              newDs.data = dataTable;
              this.chartObj.setChartData(newDs, this.dataFormat || this.dataformat);
              return null;
            }
            this.chartObj.setChartData(this.datasource || this.dataSource, this.dataFormat || this.dataformat);
          }
        },
        deep: false
      },
      'dataSource.data': {
        handler: function handler(newVal, prevVal) {
          if (newVal !== prevVal) {
            if (this.dataSource && this.dataSource.series) {
              var _FC_ = _fusioncharts2.default || window.FusionCharts;
              var data = JSON.parse(JSON.stringify(newVal._data));
              var schema = JSON.parse(JSON.stringify(newVal._schema));
              var dataTable = new _FC_.DataStore().createDataTable(data, schema);
              var newDs = Object.assign({}, this.datasource || this.dataSource);
              newDs.data = dataTable;
              this.chartObj.setChartData(newDs, this.dataFormat || this.dataformat);
              return null;
            }
            this.chartObj.setChartData(this.datasource || this.dataSource, this.dataFormat || this.dataformat);
          }
        },
        deep: false
      }
    },
    deactivated: function deactivated() {
      this.chartObj && this.chartObj.dispose();
    },
    beforeDestroy: function beforeDestroy() {
      this.chartObj && this.chartObj.dispose();
    },
    mounted: function mounted() {
      this.renderChart();
    },
    ready: function ready() {
      this.renderChart();
    },
    beforeUpdate: function beforeUpdate() {
      var strPrevClonedDataSource = JSON.stringify(this.prevDataSource);
      var ds = this.datasource || this.dataSource || this.options.dataSource;
      var strCurrClonedDataSource = JSON.stringify((0, _utils.cloneDataSource)(ds, 'diff'));
      if (strPrevClonedDataSource !== strCurrClonedDataSource) {
        this.prevDataSource = (0, _utils.cloneDataSource)(ds, 'diff');
        // if (ds.series) {
        //   return null;
        // }
        this.chartObj.setChartData(ds, this.dataFormat || this.dataformat);
      }
    }
  };
};

module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var optionsMap = {
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

var props = {
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
};

module.exports = { optionsMap: optionsMap, props: props };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueFusionchartsComponent = __webpack_require__(0);

var _vueFusionchartsComponent2 = _interopRequireDefault(_vueFusionchartsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue, FC) {
  for (var _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    options[_key - 2] = arguments[_key];
  }

  var component = _vueFusionchartsComponent2.default.apply(undefined, [FC].concat(options));
  Vue.component(component.name, component);
};

exports.default = install;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.checkIfDataTableExists = checkIfDataTableExists;
exports.cloneDataSource = cloneDataSource;
exports.attachListeners = attachListeners;
exports.createEvents = createEvents;
exports.setLastOptions = setLastOptions;
exports.getLastOptions = getLastOptions;
exports.getOptions = getOptions;
exports.renderChart = renderChart;
exports.updateChart = updateChart;
var addDep = exports.addDep = function addDep(FC, _FC, modules) {
  if (FC) {
    if (modules.getName && modules.getType || modules.name && modules.type) {
      FC.addDep(modules);
    } else {
      modules(FC);
    }
  } else {
    modules(_FC);
  }
};

function checkIfDataTableExists(dataSource) {
  // eslint-disable-next-line no-underscore-dangle
  if (dataSource && dataSource.data && dataSource.data._dataStore) {
    return true;
  }
  return false;
}

function cloneDataSource(obj) {
  var purpose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'clone';

  var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  if (type === 'string' || type === 'number' || type === 'function' || type === 'boolean') {
    return obj;
  }
  if (obj === null || obj === undefined) {
    return obj;
  }
  if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(cloneDataSource(obj[i]));
    }
    return arr;
  }
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    var clonedObj = {};
    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (var prop in obj) {
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

function attachListeners(THIS) {
  if (THIS.$listeners && _typeof(THIS.$listeners) === 'object') {
    Object.keys(THIS.$listeners).forEach(function (event) {
      THIS.chartObj.addEventListener(event, function (e) {
        THIS.$emit(event, e);
      });
    });
  }
}

function createEvents(THIS) {
  var ret = {
    events: {}
  };
  if (THIS.$listeners && _typeof(THIS.$listeners) === 'object') {
    Object.keys(THIS.$listeners).forEach(function (event) {
      ret.events[event] = function (e) {
        THIS.$emit(event, e);
      };
    });
  }
  return ret;
}

function setLastOptions(config, THIS) {
  THIS._oldOptions = Object.assign({}, config);
}

function getLastOptions(THIS) {
  return THIS._oldOptions;
}

function getOptions(This, optionsMap) {
  var config = {},
      THIS = This;
  for (var i in optionsMap) {
    if (THIS[i] !== undefined && THIS[i] !== null) {
      config[optionsMap[i]] = THIS[i];
    }
  }
  var options = Object.assign(Object.assign({}, THIS.options), config);
  return options;
}

function renderChart(This, FC) {
  var THIS = This,
      config = THIS.getOptions(),
      chartObj = THIS.chartObj;

  config.renderAt = this.containerID;
  THIS.setLastOptions(config);

  if (chartObj && chartObj.dispose) {
    chartObj.dispose();
  }
  var events = this.createEvents();
  config.events = Object.assign({}, config.events, events.events);

  THIS.chartObj = chartObj = new FC(config);
  chartObj.render();
}

function updateChart(This) {
  var THIS = This,
      config = THIS.getOptions(),
      prevConfig = THIS.getLastOptions(),
      chartObj = THIS.chartObj;

  if (config.width !== prevConfig.width || config.height !== prevConfig.height) {
    chartObj && chartObj.resizeTo(config.width, config.height);
  } else if (config.type !== prevConfig.type) {
    chartObj.chartType(config.type);
  } else {
    if (!checkIfDataTableExists(config.dataSource)) chartObj.setChartData(config.dataSource, config.dataFormat);
  }

  THIS.setLastOptions(config);
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-fusioncharts.js.map