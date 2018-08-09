(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fusioncharts"));
	else if(typeof define === 'function' && define.amd)
		define(["fusioncharts"], factory);
	else if(typeof exports === 'object')
		exports["VueFusionCharts"] = factory(require("fusioncharts"));
	else
		root["VueFusionCharts"] = factory(root["FusionCharts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

exports.default = function (FC) {
    return {
        name: 'fusioncharts',
        template: '<div></div>',
        render: function render(h) {
            this.containerID = 'fc-' + this._uid;
            return h('div', {
                attrs: {
                    'id': this.containerID
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
                    'events': {}
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
                    chartObj.setChartData(config.dataSource, config.dataFormat);
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
                    this.chartObj.setChartData(this.datasource || this.dataSource, this.dataFormat || this.dataformat);
                },
                deep: true
            },
            datasource: {
                handler: function handler() {
                    this.chartObj.setChartData(this.datasource || this.dataSource, this.dataFormat || this.dataformat);
                },
                deep: true
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
        }
    };
};

module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fusioncharts = __webpack_require__(1);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _vueFusioncharts = __webpack_require__(0);

var _vueFusioncharts2 = _interopRequireDefault(_vueFusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addDep = function addDep(FC, _FC, modules) {
    if (FC) {
        if (modules.getName || modules.name) {
            FC.addDep(modules);
        } else {
            modules(FC);
        }
    } else {
        modules(_FC);
    }
};
var install = function install(Vue, FC) {
    for (var _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        options[_key - 2] = arguments[_key];
    }

    options && options.forEach && options.forEach(function (modules) {
        addDep(FC, _fusioncharts2.default, modules);
    });
    var component = (0, _vueFusioncharts2.default)(FC);

    Vue.component(component.name, component);
};

exports.default = install;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-fusioncharts.js.map