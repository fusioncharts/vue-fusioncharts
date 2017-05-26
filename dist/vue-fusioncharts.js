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

exports.default = function (FC) {
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
            renderChart: function renderChart() {
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
            updateChart: function updateChart() {}
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
            datasource: {
                handler: function handler() {
                    this.chartObj.setChartData(this.datasource, this.dataformat);
                },
                deep: true
            }
        },
        beforeDestroy: function beforeDestroy() {
            this.chartObj.dispose();
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

var install = function install(Vue) {
    for (var _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        options[_key - 2] = arguments[_key];
    }

    var FC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _fusioncharts2.default;


    options && options.forEach && options.forEach(function (modules) {
        modules(FC);
    });

    Vue.component('fusioncharts', (0, _vueFusioncharts2.default)(FC));
};

exports.default = install;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-fusioncharts.js.map