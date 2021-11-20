/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/dusk2.jpeg */ "./src/images/dusk2.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/dawn2.jpeg */ "./src/images/dawn2.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    height: 100vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.search-form {\n    margin: auto;\n    width: 200px;\n    text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\n.weather-container {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    margin: auto;\n    color: white;\n    text-align: center;\n}\n\n.weather-container > p {\n    font-size: 24px;\n    margin: 5px;\n}\n\n.current-temp {\n    font-size: 150px;\n}\n\n.temp-container {\n    display: flex;\n    margin: auto;\n}\n\n.temp-details {\n    display: flex;\n    flex-direction: column;\n    justify-content:center;\n}\n\n.temp-details {\n    margin: 0px;\n}\n.temp-container > p {\n    margin: 0px;\n}\n\n.weather-container > .city-state {\n    font-size: 36px;\n    text-decoration: underline;\n}\n\n.weather-container > .current-weather {\n    width: 200px;\n    height: 200px;\n    margin: auto;\n}\n\n.weather-container > .current-weather-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: auto;\n    margin-bottom: 0px;\n    position: relative;\n}\n\n.current-weather-container > .current-weather{\n    width: 200px;\n    height: 200px;\n    margin: auto;\n    position: relative;\n    bottom: 60px;\n}\n\n.current-weather-container > p {\n    margin-top: 0px;\n    font-size: 48px;\n}\n\n.sunrise-sunset {\n    font-size: 24px;\n}\n\n\n.test {\n    height: 1000px;\n    /* background-color: green; */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n}\n\n@media (max-width: 450px) {\n\n    .weather-container > p {\n        font-size: 14px;\n        margin: 5px;\n    }\n    \n    .current-temp {\n        font-size: 75px;\n    }\n    \n    .temp-container {\n        display: flex;\n    }\n    \n    .temp-details {\n        display: flex;\n        flex-direction: column;\n        justify-content:center;\n    }\n    \n    .temp-details {\n        margin: 0px;\n    }\n\n    .temp-details > div, p {\n        font-size: 13px;\n    }\n\n    .weather-container > .city-state {\n        font-size: 28px;\n        text-decoration: underline;\n    }\n    \n    .weather-container > .current-weather-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        margin: auto;\n        margin-bottom: 0px;\n        position: relative;\n    }\n    \n    .current-weather-container {\n        height: 100px;\n    }\n    \n    .current-weather-container > .current-weather{\n        width: 100px;\n        height: 100px;\n        margin: auto;\n        position: relative;\n        bottom: 45px;\n    }\n    \n    .current-weather-container > p {\n        margin-top: 40px;\n        font-size: 24px;\n    }\n\n    .sunrise-sunset {\n        display: flex;\n        font-size: 12px;\n        justify-content: center;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,yDAA4C;IAC5C,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,cAAc;IACd,6BAA6B;IAC7B,yDAA4C;IAC5C,4BAA4B;IAC5B,sBAAsB;IACtB,WAAW;AACf;;AAEA;;IAEI;QACI,eAAe;QACf,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,sBAAsB;IAC1B;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;QACf,0BAA0B;IAC9B;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,YAAY;QACZ,kBAAkB;QAClB,kBAAkB;IACtB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,YAAY;QACZ,kBAAkB;QAClB,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,eAAe;IACnB;;IAEA;QACI,aAAa;QACb,eAAe;QACf,uBAAuB;IAC3B;;AAEJ","sourcesContent":["body {\n    margin: 0px;\n    height: 100vh;\n    background-image: url('./images/dusk2.jpeg');\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.search-form {\n    margin: auto;\n    width: 200px;\n    text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\n.weather-container {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    margin: auto;\n    color: white;\n    text-align: center;\n}\n\n.weather-container > p {\n    font-size: 24px;\n    margin: 5px;\n}\n\n.current-temp {\n    font-size: 150px;\n}\n\n.temp-container {\n    display: flex;\n    margin: auto;\n}\n\n.temp-details {\n    display: flex;\n    flex-direction: column;\n    justify-content:center;\n}\n\n.temp-details {\n    margin: 0px;\n}\n.temp-container > p {\n    margin: 0px;\n}\n\n.weather-container > .city-state {\n    font-size: 36px;\n    text-decoration: underline;\n}\n\n.weather-container > .current-weather {\n    width: 200px;\n    height: 200px;\n    margin: auto;\n}\n\n.weather-container > .current-weather-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: auto;\n    margin-bottom: 0px;\n    position: relative;\n}\n\n.current-weather-container > .current-weather{\n    width: 200px;\n    height: 200px;\n    margin: auto;\n    position: relative;\n    bottom: 60px;\n}\n\n.current-weather-container > p {\n    margin-top: 0px;\n    font-size: 48px;\n}\n\n.sunrise-sunset {\n    font-size: 24px;\n}\n\n\n.test {\n    height: 1000px;\n    /* background-color: green; */\n    background-image: url('./images/dawn2.jpeg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n}\n\n@media (max-width: 450px) {\n\n    .weather-container > p {\n        font-size: 14px;\n        margin: 5px;\n    }\n    \n    .current-temp {\n        font-size: 75px;\n    }\n    \n    .temp-container {\n        display: flex;\n    }\n    \n    .temp-details {\n        display: flex;\n        flex-direction: column;\n        justify-content:center;\n    }\n    \n    .temp-details {\n        margin: 0px;\n    }\n\n    .temp-details > div, p {\n        font-size: 13px;\n    }\n\n    .weather-container > .city-state {\n        font-size: 28px;\n        text-decoration: underline;\n    }\n    \n    .weather-container > .current-weather-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        margin: auto;\n        margin-bottom: 0px;\n        position: relative;\n    }\n    \n    .current-weather-container {\n        height: 100px;\n    }\n    \n    .current-weather-container > .current-weather{\n        width: 100px;\n        height: 100px;\n        margin: auto;\n        position: relative;\n        bottom: 45px;\n    }\n    \n    .current-weather-container > p {\n        margin-top: 40px;\n        font-size: 24px;\n    }\n\n    .sunrise-sunset {\n        display: flex;\n        font-size: 12px;\n        justify-content: center;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertUTC": () => (/* binding */ convertUTC)
/* harmony export */ });
console.log("Loading function scripts...")


function convertUTC(utcValue, timezone) {
    // timeFormat as 12 or 24 hour time, converts UTC value to one of those
    // utc in seconds -> minutes -> hours -> days
    let newDate = new Date(utcValue);
    // console.log("LOCAL", formatAMPM(newDate))
    newDate = newDate.toUTCString();
    return newDate.split(' ')[4].split(":").slice(0,2).join(":")

}

// function getLocalTime(utcValue, timezoneShift) {
//     // convert a date UTC to local date time
//     let newDate = new Date(utcValue).toUTCString();

//     //
//     console.log("LOCAL", newDate);
// }


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
// getLocalTime(1637047000 * 1000)
// console.log("LOCAL", getLocalTime(1637047000))
// console.log("SEATTLE TIME", convertUTC((1637121527 - 36000) * 1000)) // UTC multiplied by 1000
// console.log("TIME", convertUTC(1637047000 * 100)) // UTC multiplied by 1000



/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "formatData": () => (/* binding */ formatData)
/* harmony export */ });

console.log("Loading weather API functions")

function getWeatherData(location, unitOfMeasure) {
    // Return the promise form the open weather api call
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unitOfMeasure}&APPID=722fa4f411061b4d1c67abdb35712816`)
}

function formatData(data) {

    // let windData = getWindData(data.wind);
    // console.log("WIND DATA", formatwindData, data.wind);
    const weatherData = {
        "id": data.weather[0].id,
        "description": data.weather[0].description,
        "icon": data.weather[0].icon, 
        "main": data.main,
        "wind": getWindData(data.wind),
        "clouds": data.clouds, // I think this is a measure of cloudcoverage
        "country": data.sys.country,
        "sunrise": data.sys.sunrise + data.timezone,
        "sunset": data.sys.sunset + data.timezone,
        "timezone": data.timezone, // UTC
        "dt": data.dt,
        "name": data.name,
    }
    // console.log("WEATHER DATA", weatherData)
    return weatherData
}

function convertTime(UTCString) {
    // Convert a UTC timestring to readable locale time

}

function getWindData(windData) {
    // Given wind data as an array with speed, direction, and gust strenght
    // return a formatted array to add to the weather data
    let parsedWindData = {
        "speed": null,
        "deg": null,
        "gust": null,
    };
    // Speed, deg, gust
    // wind: {'speed': 11, 'deg': 29} // Maybe undefined
    let windKeys = Object.keys(parsedWindData);

    for (let i = 0; i < windKeys.length; i++) {
        // console.log(windData[windKeys[i]])

        if(windData[windKeys[i]] === undefined) {
            parsedWindData[windKeys[i]] = 'N/A';
        } else {
            if(windKeys[i] === 'deg') {
                parsedWindData[windKeys[i]] = getWindDirection(windData[windKeys[i]]);
                // console.log(parsedWindData[windKeys[i]])
            } else {
                parsedWindData[windKeys[i]] = windData[windKeys[i]];

            }
            // parsedWindData[windKeys[i]] = windData[windKeys[i]];
        }
    }
    return parsedWindData;

    
}
function getWindDirection(windDirection) {
    // Given a wind direction in degrees (360), return
    // a direction (90deg = East)

    if(windDirection > 0 && windDirection < 45) {
        return 'Northeast'
    } else if(windDirection > 45 && windDirection < 90) {
        return 'East'
    } else if(windDirection > 90 && windDirection < 135) {
        return 'Southeast'
    } else if(windDirection > 135 && windDirection < 180) {
        return 'South'
    } else if(windDirection > 180 && windDirection < 225) {
        return 'Southwest'
    } else if(windDirection > 225 && windDirection < 270) {
        return 'West'
    } else if(windDirection > 270 && windDirection < 315) {
        return 'Northwest'
    } else if(windDirection > 315 && windDirection < 360) {
        return 'North'
    } else return 'N/A'
}




// {"coord":{"lon":-122.3321,"lat":47.6062},
// "weather":[{"id":804,"main":"Clouds",
// "description":"overcast clouds","icon":"04n"}],
// "base":"stations",
// "main":{"temp":281.76,"feels_like":281.76,"temp_min":279.55,"temp_max":283.35,"pressure":1027,"humidity":94},
// "visibility":10000,
// "wind":{"speed":0.45,"deg":110,"gust":1.34},
// "clouds":{"all":90},"dt":1636795852,
// "sys":{"type":2,"id":2004026,
// "country":"US",
// "sunrise":1636816330,
// "sunset":1636850122},
// "timezone":-28800, 'formatted as seconds from UTC, -28800 = -8 hours'
// "id":5809844,
// "name":"Seattle",
// "cod":200}

/***/ }),

/***/ "./src/images/dawn1.jpeg":
/*!*******************************!*\
  !*** ./src/images/dawn1.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c24bd0158542159af0f.jpeg";

/***/ }),

/***/ "./src/images/dawn2.jpeg":
/*!*******************************!*\
  !*** ./src/images/dawn2.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1764f0d21aa91d65ee1d.jpeg";

/***/ }),

/***/ "./src/images/day1.jpeg":
/*!******************************!*\
  !*** ./src/images/day1.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e8aedde26f3507cf707.jpeg";

/***/ }),

/***/ "./src/images/dusk2.jpeg":
/*!*******************************!*\
  !*** ./src/images/dusk2.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13c5ff6670918556a268.jpeg";

/***/ }),

/***/ "./src/images/nightsnow.jpeg":
/*!***********************************!*\
  !*** ./src/images/nightsnow.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80c0b9798d1b155acd21.jpeg";

/***/ }),

/***/ "./src/images/rain1.jpeg":
/*!*******************************!*\
  !*** ./src/images/rain1.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58df15b95f1b7e9148f2.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");
/* harmony import */ var _images_dawn1_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dawn1.jpeg */ "./src/images/dawn1.jpeg");
/* harmony import */ var _images_day1_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/day1.jpeg */ "./src/images/day1.jpeg");
/* harmony import */ var _images_dusk2_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/dusk2.jpeg */ "./src/images/dusk2.jpeg");
/* harmony import */ var _images_nightsnow_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/nightsnow.jpeg */ "./src/images/nightsnow.jpeg");
/* harmony import */ var _images_rain1_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/rain1.jpeg */ "./src/images/rain1.jpeg");











console.log("Running index scripts...install style loaders...installing assets")
const weatherContainer = document.createElement('div');
weatherContainer.classList.add('weather-container');

function addWeatherDiv() {
    // Add the main weather container and populate it with
    // weather data
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('container-main');
    return weatherContainer;
}

function changeBackground(data) {
    // Change the background based on the time of data
    const localTime = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.convertUTC)((data.dt + data.timezone) * 1000)
    const sunrise = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.convertUTC)(data.sunrise * 1000)
    const sunset = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.convertUTC)(data.sunset * 1000)

    // Check Dusk -> Night, and Dawn -> Day
    if(localTime > sunset && localTime < addTimes(sunset, 1)) {
        // Dusk
        document.body.style.backgroundImage = `url(${_images_dusk2_jpeg__WEBPACK_IMPORTED_MODULE_5__})`
    } else if(localTime > addTimes(sunset, 1) || localTime < sunrise) {
        // Night
        document.body.style.backgroundImage = `url(${_images_nightsnow_jpeg__WEBPACK_IMPORTED_MODULE_6__})`
    } else if(localTime > sunrise && localTime < addTimes(sunrise, 1)) {
        // Dawn
        document.body.style.backgroundImage = `url(${_images_dawn1_jpeg__WEBPACK_IMPORTED_MODULE_3__})`
    } else if(localTime > sunrise) {
        // Day
        document.body.style.backgroundImage = `url(${_images_day1_jpeg__WEBPACK_IMPORTED_MODULE_4__})`
    } else {
        console.log("No conditions being met to change background.", sunrise, sunset, localTime)
    }
}
function addLocationForm() {
    const testForm = document.createElement('div');

    const locationInput = document.createElement('input');
    const submitBtn = document.createElement('button');
    locationInput.placeholder = 'Enter location';
    testForm.classList.add('search-form');
    submitBtn.innerText = 'Search';
    testForm.appendChild(locationInput);
    testForm.appendChild(submitBtn);

    submitBtn.addEventListener('click', () => {
        const weatherData = (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(locationInput.value, 'imperial') // Seattle is jsut a testing placeholder
        weatherData.then(response => response.json())
        .then(data => 
            document.body.appendChild(addWeatherDataToPage((0,_weather_js__WEBPACK_IMPORTED_MODULE_1__.formatData)(data))));
    })
    document.body.appendChild(testForm);
}

function addWeatherDataToPage(data) {
    // Use the formatted weather data from the api, create and populate
    // elements
    changeBackground(data);
    // toCapitolize(data.description)
    const fahCel = 'F';
    if(weatherContainer.innerHTML != '') {
        weatherContainer.innerHTML = '';
    }
    const highLow = document.createElement('div');
    const cityState = document.createElement('p');
    const localTime = document.createElement('p');

    const tempDiv = document.createElement('div');
    const tempDetails = document.createElement('div');
    const currentTemp = document.createElement('p');
    const feelsLike = document.createElement('p');

    const currentWeatherDiv = document.createElement('div');
    const currentWeatherIcon = document.createElement('img') // The 'current weather' iamge, like cloudy, etc
    const currentDescription = document.createElement('p');

    const sunriseSunset = document.createElement('div');
    const wind = document.createElement('p');

    cityState.classList.add('city-state');
    tempDiv.classList.add('temp-container');
    tempDetails.classList.add('temp-details');
    currentWeatherDiv.classList.add('current-weather-container');
    currentTemp.classList.add('current-temp');
    currentWeatherIcon.classList.add('current-weather');
    sunriseSunset.classList.add('sunrise-sunset');
    tempDiv.appendChild(currentTemp);
    tempDiv.appendChild(tempDetails);
    tempDetails.appendChild(highLow);
    tempDetails.appendChild(feelsLike);
    currentWeatherDiv.appendChild(currentDescription);
    currentWeatherDiv.appendChild(currentWeatherIcon);
    
    highLow.innerText = `H: ${data.main.temp_max.toFixed(0)}° L: ${data.main.temp_min.toFixed(0)}°`;
    cityState.innerText = `${data.name}, ${data.country}`;
    localTime.innerText = `${changeTimeFormat((0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.convertUTC)((data.dt + data.timezone) * 1000))}`
    currentTemp.innerText = `${data.main.temp.toFixed(0)}°`;
    feelsLike.innerText = `Feels like: ${data.main.feels_like.toFixed(0)}°`
    currentWeatherIcon.src = `http://openweathermap.org/img/wn/${data.icon}@4x.png` // file = 12d.png @4x is the size of the icon
    currentDescription.innerText = toCapitolize(data.description)
    sunriseSunset.innerText = `Sunrise: ${changeTimeFormat((0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.convertUTC)(data.sunrise * 1000))} Sunset: ${changeTimeFormat((0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.convertUTC)(data.sunset * 1000))}`;
    wind.innerText = `Current Wind Speed: ${data.wind['speed']} Direction: ${data.wind['deg']} Gusts: ${data.wind['gust']}`;
    console.log("Adding data", data)

    weatherContainer.appendChild(cityState)
    weatherContainer.appendChild(localTime);
    weatherContainer.appendChild(tempDiv)
    weatherContainer.appendChild(currentWeatherDiv);
    weatherContainer.appendChild(sunriseSunset)
    weatherContainer.appendChild(wind)

    return weatherContainer;
}

// combine two string dates together 
function addTimes(toChange, increment) {
    // add times together so they don't just concatonate strings
    // ex. 11:30pm + 2 hours = 1:30am
    // Always gonna increment the 'ones' number
    toChange = toChange.split("")
    let changeInt = parseInt(toChange.slice(1, 2))
    increment = parseInt(increment)
    toChange.splice(1, 1, (changeInt + increment))
    return toChange.join("")
}

// toggle between 24 and 12 hours times
function changeTimeFormat(timeToConvert) {
    // convert a time string in 24 hour format into 12 hour format
    if(timeToConvert.slice(0,2) >= 12) {
        // Subtract 12
        let adjustedTime = timeToConvert.slice(0,2) - 12
        timeToConvert = timeToConvert.split("")
        timeToConvert.splice(0, 2, adjustedTime.toString())
        timeToConvert.push('pm');
        return timeToConvert.join("")
    } else {
        // remove leading 0
        timeToConvert = timeToConvert.split("");
        timeToConvert.splice(0, 1, '');
        timeToConvert.push('am');
        return timeToConvert.join("")
    }
}   

function toCapitolize(string) {
    // Capitolize the first letter in each word of a string
    string = string.split(" ")

    for (let i = 0; i < string.length;i++) {
        // console.log(string[i].slice(0,1).toUpperCase())
        string[i] = string[i].slice(0, 1).toUpperCase() + string[i].slice(1);
    }
    return string.join(" ") 
    // console.log("in funciton", string);
}

addLocationForm();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw4QkFBOEIsT0FBTyw4QkFBOEI7QUFDakcsNkJBQTZCLFVBQVUsSUFBSSxhQUFhO0FBQ3hELDZCQUE2QixpQkFBaUIseURBQVUsb0NBQW9DO0FBQzVGLCtCQUErQiwwQkFBMEI7QUFDekQseUNBQXlDLGdDQUFnQztBQUN6RSxpRUFBaUUsVUFBVTtBQUMzRTtBQUNBLDBDQUEwQyxpQkFBaUIseURBQVUsd0JBQXdCLFVBQVUsaUJBQWlCLHlEQUFVLHNCQUFzQjtBQUN4Siw0Q0FBNEMsb0JBQW9CLGFBQWEsa0JBQWtCLFNBQVMsa0JBQWtCO0FBQzFIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kdXNrMi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZGF3bjIuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lciA+IHAge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxNTBweDtcXG59XFxuXFxuLnRlbXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG59XFxuXFxuLnRlbXAtZGV0YWlscyB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG4udGVtcC1jb250YWluZXIgPiBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lciA+IC5jaXR5LXN0YXRlIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyID4gLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ud2VhdGhlci1jb250YWluZXIgPiAuY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciA+IC5jdXJyZW50LXdlYXRoZXJ7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNjBweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIgPiBwIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5zdW5yaXNlLXN1bnNldCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuLnRlc3Qge1xcbiAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXG5cXG4gICAgLndlYXRoZXItY29udGFpbmVyID4gcCB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmN1cnJlbnQtdGVtcCB7XFxuICAgICAgICBmb250LXNpemU6IDc1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC50ZW1wLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIFxcbiAgICAudGVtcC1kZXRhaWxzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRlbXAtZGV0YWlscyB7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgfVxcblxcbiAgICAudGVtcC1kZXRhaWxzID4gZGl2LCBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgfVxcblxcbiAgICAud2VhdGhlci1jb250YWluZXIgPiAuY2l0eS1zdGF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLndlYXRoZXItY29udGFpbmVyID4gLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIgPiAuY3VycmVudC13ZWF0aGVye1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvdHRvbTogNDVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIgPiBwIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLnN1bnJpc2Utc3Vuc2V0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix5REFBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHlEQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7UUFDZix1QkFBdUI7SUFDM0I7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2R1c2syLmpwZWcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgICBmb250LXNpemU6IDE1MHB4O1xcbn1cXG5cXG4udGVtcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50ZW1wLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcbi50ZW1wLWNvbnRhaW5lciA+IHAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyID4gLmNpdHktc3RhdGUge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ud2VhdGhlci1jb250YWluZXIgPiAuY3VycmVudC13ZWF0aGVyIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi53ZWF0aGVyLWNvbnRhaW5lciA+IC5jdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItY29udGFpbmVyID4gLmN1cnJlbnQtd2VhdGhlcntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciA+IHAge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLnN1bnJpc2Utc3Vuc2V0IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4udGVzdCB7XFxuICAgIGhlaWdodDogMTAwMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9kYXduMi5qcGVnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXG5cXG4gICAgLndlYXRoZXItY29udGFpbmVyID4gcCB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmN1cnJlbnQtdGVtcCB7XFxuICAgICAgICBmb250LXNpemU6IDc1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC50ZW1wLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIFxcbiAgICAudGVtcC1kZXRhaWxzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRlbXAtZGV0YWlscyB7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgfVxcblxcbiAgICAudGVtcC1kZXRhaWxzID4gZGl2LCBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgfVxcblxcbiAgICAud2VhdGhlci1jb250YWluZXIgPiAuY2l0eS1zdGF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLndlYXRoZXItY29udGFpbmVyID4gLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIgPiAuY3VycmVudC13ZWF0aGVye1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvdHRvbTogNDVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIgPiBwIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLnN1bnJpc2Utc3Vuc2V0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc29sZS5sb2coXCJMb2FkaW5nIGZ1bmN0aW9uIHNjcmlwdHMuLi5cIilcblxuXG5mdW5jdGlvbiBjb252ZXJ0VVRDKHV0Y1ZhbHVlLCB0aW1lem9uZSkge1xuICAgIC8vIHRpbWVGb3JtYXQgYXMgMTIgb3IgMjQgaG91ciB0aW1lLCBjb252ZXJ0cyBVVEMgdmFsdWUgdG8gb25lIG9mIHRob3NlXG4gICAgLy8gdXRjIGluIHNlY29uZHMgLT4gbWludXRlcyAtPiBob3VycyAtPiBkYXlzXG4gICAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSh1dGNWYWx1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJMT0NBTFwiLCBmb3JtYXRBTVBNKG5ld0RhdGUpKVxuICAgIG5ld0RhdGUgPSBuZXdEYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgcmV0dXJuIG5ld0RhdGUuc3BsaXQoJyAnKVs0XS5zcGxpdChcIjpcIikuc2xpY2UoMCwyKS5qb2luKFwiOlwiKVxuXG59XG5cbi8vIGZ1bmN0aW9uIGdldExvY2FsVGltZSh1dGNWYWx1ZSwgdGltZXpvbmVTaGlmdCkge1xuLy8gICAgIC8vIGNvbnZlcnQgYSBkYXRlIFVUQyB0byBsb2NhbCBkYXRlIHRpbWVcbi8vICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHV0Y1ZhbHVlKS50b1VUQ1N0cmluZygpO1xuXG4vLyAgICAgLy9cbi8vICAgICBjb25zb2xlLmxvZyhcIkxPQ0FMXCIsIG5ld0RhdGUpO1xuLy8gfVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFNUE0oZGF0ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIHZhciBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcbiAgICBob3VycyA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyAnMCcrbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgdmFyIHN0clRpbWUgPSBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnICcgKyBhbXBtO1xuICAgIHJldHVybiBzdHJUaW1lO1xuICB9XG4vLyBnZXRMb2NhbFRpbWUoMTYzNzA0NzAwMCAqIDEwMDApXG4vLyBjb25zb2xlLmxvZyhcIkxPQ0FMXCIsIGdldExvY2FsVGltZSgxNjM3MDQ3MDAwKSlcbi8vIGNvbnNvbGUubG9nKFwiU0VBVFRMRSBUSU1FXCIsIGNvbnZlcnRVVEMoKDE2MzcxMjE1MjcgLSAzNjAwMCkgKiAxMDAwKSkgLy8gVVRDIG11bHRpcGxpZWQgYnkgMTAwMFxuLy8gY29uc29sZS5sb2coXCJUSU1FXCIsIGNvbnZlcnRVVEMoMTYzNzA0NzAwMCAqIDEwMCkpIC8vIFVUQyBtdWx0aXBsaWVkIGJ5IDEwMDBcblxuZXhwb3J0IHsgY29udmVydFVUQyB9IiwiXG5jb25zb2xlLmxvZyhcIkxvYWRpbmcgd2VhdGhlciBBUEkgZnVuY3Rpb25zXCIpXG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0T2ZNZWFzdXJlKSB7XG4gICAgLy8gUmV0dXJuIHRoZSBwcm9taXNlIGZvcm0gdGhlIG9wZW4gd2VhdGhlciBhcGkgY2FsbFxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRPZk1lYXN1cmV9JkFQUElEPTcyMmZhNGY0MTEwNjFiNGQxYzY3YWJkYjM1NzEyODE2YClcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0YShkYXRhKSB7XG5cbiAgICAvLyBsZXQgd2luZERhdGEgPSBnZXRXaW5kRGF0YShkYXRhLndpbmQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiV0lORCBEQVRBXCIsIGZvcm1hdHdpbmREYXRhLCBkYXRhLndpbmQpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0ge1xuICAgICAgICBcImlkXCI6IGRhdGEud2VhdGhlclswXS5pZCxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgIFwiaWNvblwiOiBkYXRhLndlYXRoZXJbMF0uaWNvbiwgXG4gICAgICAgIFwibWFpblwiOiBkYXRhLm1haW4sXG4gICAgICAgIFwid2luZFwiOiBnZXRXaW5kRGF0YShkYXRhLndpbmQpLFxuICAgICAgICBcImNsb3Vkc1wiOiBkYXRhLmNsb3VkcywgLy8gSSB0aGluayB0aGlzIGlzIGEgbWVhc3VyZSBvZiBjbG91ZGNvdmVyYWdlXG4gICAgICAgIFwiY291bnRyeVwiOiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgICBcInN1bnJpc2VcIjogZGF0YS5zeXMuc3VucmlzZSArIGRhdGEudGltZXpvbmUsXG4gICAgICAgIFwic3Vuc2V0XCI6IGRhdGEuc3lzLnN1bnNldCArIGRhdGEudGltZXpvbmUsXG4gICAgICAgIFwidGltZXpvbmVcIjogZGF0YS50aW1lem9uZSwgLy8gVVRDXG4gICAgICAgIFwiZHRcIjogZGF0YS5kdCxcbiAgICAgICAgXCJuYW1lXCI6IGRhdGEubmFtZSxcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJXRUFUSEVSIERBVEFcIiwgd2VhdGhlckRhdGEpXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUaW1lKFVUQ1N0cmluZykge1xuICAgIC8vIENvbnZlcnQgYSBVVEMgdGltZXN0cmluZyB0byByZWFkYWJsZSBsb2NhbGUgdGltZVxuXG59XG5cbmZ1bmN0aW9uIGdldFdpbmREYXRhKHdpbmREYXRhKSB7XG4gICAgLy8gR2l2ZW4gd2luZCBkYXRhIGFzIGFuIGFycmF5IHdpdGggc3BlZWQsIGRpcmVjdGlvbiwgYW5kIGd1c3Qgc3RyZW5naHRcbiAgICAvLyByZXR1cm4gYSBmb3JtYXR0ZWQgYXJyYXkgdG8gYWRkIHRvIHRoZSB3ZWF0aGVyIGRhdGFcbiAgICBsZXQgcGFyc2VkV2luZERhdGEgPSB7XG4gICAgICAgIFwic3BlZWRcIjogbnVsbCxcbiAgICAgICAgXCJkZWdcIjogbnVsbCxcbiAgICAgICAgXCJndXN0XCI6IG51bGwsXG4gICAgfTtcbiAgICAvLyBTcGVlZCwgZGVnLCBndXN0XG4gICAgLy8gd2luZDogeydzcGVlZCc6IDExLCAnZGVnJzogMjl9IC8vIE1heWJlIHVuZGVmaW5lZFxuICAgIGxldCB3aW5kS2V5cyA9IE9iamVjdC5rZXlzKHBhcnNlZFdpbmREYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2luZERhdGFbd2luZEtleXNbaV1dKVxuXG4gICAgICAgIGlmKHdpbmREYXRhW3dpbmRLZXlzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJzZWRXaW5kRGF0YVt3aW5kS2V5c1tpXV0gPSAnTi9BJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHdpbmRLZXlzW2ldID09PSAnZGVnJykge1xuICAgICAgICAgICAgICAgIHBhcnNlZFdpbmREYXRhW3dpbmRLZXlzW2ldXSA9IGdldFdpbmREaXJlY3Rpb24od2luZERhdGFbd2luZEtleXNbaV1dKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJzZWRXaW5kRGF0YVt3aW5kS2V5c1tpXV0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZFdpbmREYXRhW3dpbmRLZXlzW2ldXSA9IHdpbmREYXRhW3dpbmRLZXlzW2ldXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGFyc2VkV2luZERhdGFbd2luZEtleXNbaV1dID0gd2luZERhdGFbd2luZEtleXNbaV1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRXaW5kRGF0YTtcblxuICAgIFxufVxuZnVuY3Rpb24gZ2V0V2luZERpcmVjdGlvbih3aW5kRGlyZWN0aW9uKSB7XG4gICAgLy8gR2l2ZW4gYSB3aW5kIGRpcmVjdGlvbiBpbiBkZWdyZWVzICgzNjApLCByZXR1cm5cbiAgICAvLyBhIGRpcmVjdGlvbiAoOTBkZWcgPSBFYXN0KVxuXG4gICAgaWYod2luZERpcmVjdGlvbiA+IDAgJiYgd2luZERpcmVjdGlvbiA8IDQ1KSB7XG4gICAgICAgIHJldHVybiAnTm9ydGhlYXN0J1xuICAgIH0gZWxzZSBpZih3aW5kRGlyZWN0aW9uID4gNDUgJiYgd2luZERpcmVjdGlvbiA8IDkwKSB7XG4gICAgICAgIHJldHVybiAnRWFzdCdcbiAgICB9IGVsc2UgaWYod2luZERpcmVjdGlvbiA+IDkwICYmIHdpbmREaXJlY3Rpb24gPCAxMzUpIHtcbiAgICAgICAgcmV0dXJuICdTb3V0aGVhc3QnXG4gICAgfSBlbHNlIGlmKHdpbmREaXJlY3Rpb24gPiAxMzUgJiYgd2luZERpcmVjdGlvbiA8IDE4MCkge1xuICAgICAgICByZXR1cm4gJ1NvdXRoJ1xuICAgIH0gZWxzZSBpZih3aW5kRGlyZWN0aW9uID4gMTgwICYmIHdpbmREaXJlY3Rpb24gPCAyMjUpIHtcbiAgICAgICAgcmV0dXJuICdTb3V0aHdlc3QnXG4gICAgfSBlbHNlIGlmKHdpbmREaXJlY3Rpb24gPiAyMjUgJiYgd2luZERpcmVjdGlvbiA8IDI3MCkge1xuICAgICAgICByZXR1cm4gJ1dlc3QnXG4gICAgfSBlbHNlIGlmKHdpbmREaXJlY3Rpb24gPiAyNzAgJiYgd2luZERpcmVjdGlvbiA8IDMxNSkge1xuICAgICAgICByZXR1cm4gJ05vcnRod2VzdCdcbiAgICB9IGVsc2UgaWYod2luZERpcmVjdGlvbiA+IDMxNSAmJiB3aW5kRGlyZWN0aW9uIDwgMzYwKSB7XG4gICAgICAgIHJldHVybiAnTm9ydGgnXG4gICAgfSBlbHNlIHJldHVybiAnTi9BJ1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZm9ybWF0RGF0YSB9XG5cblxuLy8ge1wiY29vcmRcIjp7XCJsb25cIjotMTIyLjMzMjEsXCJsYXRcIjo0Ny42MDYyfSxcbi8vIFwid2VhdGhlclwiOlt7XCJpZFwiOjgwNCxcIm1haW5cIjpcIkNsb3Vkc1wiLFxuLy8gXCJkZXNjcmlwdGlvblwiOlwib3ZlcmNhc3QgY2xvdWRzXCIsXCJpY29uXCI6XCIwNG5cIn1dLFxuLy8gXCJiYXNlXCI6XCJzdGF0aW9uc1wiLFxuLy8gXCJtYWluXCI6e1widGVtcFwiOjI4MS43NixcImZlZWxzX2xpa2VcIjoyODEuNzYsXCJ0ZW1wX21pblwiOjI3OS41NSxcInRlbXBfbWF4XCI6MjgzLjM1LFwicHJlc3N1cmVcIjoxMDI3LFwiaHVtaWRpdHlcIjo5NH0sXG4vLyBcInZpc2liaWxpdHlcIjoxMDAwMCxcbi8vIFwid2luZFwiOntcInNwZWVkXCI6MC40NSxcImRlZ1wiOjExMCxcImd1c3RcIjoxLjM0fSxcbi8vIFwiY2xvdWRzXCI6e1wiYWxsXCI6OTB9LFwiZHRcIjoxNjM2Nzk1ODUyLFxuLy8gXCJzeXNcIjp7XCJ0eXBlXCI6MixcImlkXCI6MjAwNDAyNixcbi8vIFwiY291bnRyeVwiOlwiVVNcIixcbi8vIFwic3VucmlzZVwiOjE2MzY4MTYzMzAsXG4vLyBcInN1bnNldFwiOjE2MzY4NTAxMjJ9LFxuLy8gXCJ0aW1lem9uZVwiOi0yODgwMCwgJ2Zvcm1hdHRlZCBhcyBzZWNvbmRzIGZyb20gVVRDLCAtMjg4MDAgPSAtOCBob3Vycydcbi8vIFwiaWRcIjo1ODA5ODQ0LFxuLy8gXCJuYW1lXCI6XCJTZWF0dGxlXCIsXG4vLyBcImNvZFwiOjIwMH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGZvcm1hdERhdGEgfSBmcm9tICcuL3dlYXRoZXIuanMnO1xuaW1wb3J0IHsgY29udmVydFVUQyB9IGZyb20gJy4vZnVuY3Rpb25zLmpzJztcbmltcG9ydCBEYXduIGZyb20gJy4vaW1hZ2VzL2Rhd24xLmpwZWcnO1xuaW1wb3J0IERheSBmcm9tICcuL2ltYWdlcy9kYXkxLmpwZWcnO1xuaW1wb3J0IER1c2sgZnJvbSAnLi9pbWFnZXMvZHVzazIuanBlZyc7XG5pbXBvcnQgTmlnaHQgZnJvbSAnLi9pbWFnZXMvbmlnaHRzbm93LmpwZWcnO1xuaW1wb3J0IFJhaW4gZnJvbSAnLi9pbWFnZXMvcmFpbjEuanBlZyc7XG5cblxuXG5jb25zb2xlLmxvZyhcIlJ1bm5pbmcgaW5kZXggc2NyaXB0cy4uLmluc3RhbGwgc3R5bGUgbG9hZGVycy4uLmluc3RhbGxpbmcgYXNzZXRzXCIpXG5jb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGFkZFdlYXRoZXJEaXYoKSB7XG4gICAgLy8gQWRkIHRoZSBtYWluIHdlYXRoZXIgY29udGFpbmVyIGFuZCBwb3B1bGF0ZSBpdCB3aXRoXG4gICAgLy8gd2VhdGhlciBkYXRhXG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLW1haW4nKTtcbiAgICByZXR1cm4gd2VhdGhlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZChkYXRhKSB7XG4gICAgLy8gQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGJhc2VkIG9uIHRoZSB0aW1lIG9mIGRhdGFcbiAgICBjb25zdCBsb2NhbFRpbWUgPSBjb252ZXJ0VVRDKChkYXRhLmR0ICsgZGF0YS50aW1lem9uZSkgKiAxMDAwKVxuICAgIGNvbnN0IHN1bnJpc2UgPSBjb252ZXJ0VVRDKGRhdGEuc3VucmlzZSAqIDEwMDApXG4gICAgY29uc3Qgc3Vuc2V0ID0gY29udmVydFVUQyhkYXRhLnN1bnNldCAqIDEwMDApXG5cbiAgICAvLyBDaGVjayBEdXNrIC0+IE5pZ2h0LCBhbmQgRGF3biAtPiBEYXlcbiAgICBpZihsb2NhbFRpbWUgPiBzdW5zZXQgJiYgbG9jYWxUaW1lIDwgYWRkVGltZXMoc3Vuc2V0LCAxKSkge1xuICAgICAgICAvLyBEdXNrXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke0R1c2t9KWBcbiAgICB9IGVsc2UgaWYobG9jYWxUaW1lID4gYWRkVGltZXMoc3Vuc2V0LCAxKSB8fCBsb2NhbFRpbWUgPCBzdW5yaXNlKSB7XG4gICAgICAgIC8vIE5pZ2h0XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke05pZ2h0fSlgXG4gICAgfSBlbHNlIGlmKGxvY2FsVGltZSA+IHN1bnJpc2UgJiYgbG9jYWxUaW1lIDwgYWRkVGltZXMoc3VucmlzZSwgMSkpIHtcbiAgICAgICAgLy8gRGF3blxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtEYXdufSlgXG4gICAgfSBlbHNlIGlmKGxvY2FsVGltZSA+IHN1bnJpc2UpIHtcbiAgICAgICAgLy8gRGF5XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke0RheX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY29uZGl0aW9ucyBiZWluZyBtZXQgdG8gY2hhbmdlIGJhY2tncm91bmQuXCIsIHN1bnJpc2UsIHN1bnNldCwgbG9jYWxUaW1lKVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2F0aW9uRm9ybSgpIHtcbiAgICBjb25zdCB0ZXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbG9jYXRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBsb2NhdGlvbic7XG4gICAgdGVzdEZvcm0uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWZvcm0nKTtcbiAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1NlYXJjaCc7XG4gICAgdGVzdEZvcm0uYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dCk7XG4gICAgdGVzdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbklucHV0LnZhbHVlLCAnaW1wZXJpYWwnKSAvLyBTZWF0dGxlIGlzIGpzdXQgYSB0ZXN0aW5nIHBsYWNlaG9sZGVyXG4gICAgICAgIHdlYXRoZXJEYXRhLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRXZWF0aGVyRGF0YVRvUGFnZShmb3JtYXREYXRhKGRhdGEpKSkpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXN0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIGFkZFdlYXRoZXJEYXRhVG9QYWdlKGRhdGEpIHtcbiAgICAvLyBVc2UgdGhlIGZvcm1hdHRlZCB3ZWF0aGVyIGRhdGEgZnJvbSB0aGUgYXBpLCBjcmVhdGUgYW5kIHBvcHVsYXRlXG4gICAgLy8gZWxlbWVudHNcbiAgICBjaGFuZ2VCYWNrZ3JvdW5kKGRhdGEpO1xuICAgIC8vIHRvQ2FwaXRvbGl6ZShkYXRhLmRlc2NyaXB0aW9uKVxuICAgIGNvbnN0IGZhaENlbCA9ICdGJztcbiAgICBpZih3ZWF0aGVyQ29udGFpbmVyLmlubmVySFRNTCAhPSAnJykge1xuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICBjb25zdCBoaWdoTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2l0eVN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZW1wRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgLy8gVGhlICdjdXJyZW50IHdlYXRoZXInIGlhbWdlLCBsaWtlIGNsb3VkeSwgZXRjXG4gICAgY29uc3QgY3VycmVudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29uc3Qgc3VucmlzZVN1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjaXR5U3RhdGUuY2xhc3NMaXN0LmFkZCgnY2l0eS1zdGF0ZScpO1xuICAgIHRlbXBEaXYuY2xhc3NMaXN0LmFkZCgndGVtcC1jb250YWluZXInKTtcbiAgICB0ZW1wRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0ZW1wLWRldGFpbHMnKTtcbiAgICBjdXJyZW50V2VhdGhlckRpdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXItY29udGFpbmVyJyk7XG4gICAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZCgnY3VycmVudC10ZW1wJyk7XG4gICAgY3VycmVudFdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtd2VhdGhlcicpO1xuICAgIHN1bnJpc2VTdW5zZXQuY2xhc3NMaXN0LmFkZCgnc3VucmlzZS1zdW5zZXQnKTtcbiAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcbiAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKHRlbXBEZXRhaWxzKTtcbiAgICB0ZW1wRGV0YWlscy5hcHBlbmRDaGlsZChoaWdoTG93KTtcbiAgICB0ZW1wRGV0YWlscy5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICAgIGN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGN1cnJlbnREZXNjcmlwdGlvbik7XG4gICAgY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJJY29uKTtcbiAgICBcbiAgICBoaWdoTG93LmlubmVyVGV4dCA9IGBIOiAke2RhdGEubWFpbi50ZW1wX21heC50b0ZpeGVkKDApfcKwIEw6ICR7ZGF0YS5tYWluLnRlbXBfbWluLnRvRml4ZWQoMCl9wrBgO1xuICAgIGNpdHlTdGF0ZS5pbm5lclRleHQgPSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuY291bnRyeX1gO1xuICAgIGxvY2FsVGltZS5pbm5lclRleHQgPSBgJHtjaGFuZ2VUaW1lRm9ybWF0KGNvbnZlcnRVVEMoKGRhdGEuZHQgKyBkYXRhLnRpbWV6b25lKSAqIDEwMDApKX1gXG4gICAgY3VycmVudFRlbXAuaW5uZXJUZXh0ID0gYCR7ZGF0YS5tYWluLnRlbXAudG9GaXhlZCgwKX3CsGA7XG4gICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlOiAke2RhdGEubWFpbi5mZWVsc19saWtlLnRvRml4ZWQoMCl9wrBgXG4gICAgY3VycmVudFdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbn1ANHgucG5nYCAvLyBmaWxlID0gMTJkLnBuZyBANHggaXMgdGhlIHNpemUgb2YgdGhlIGljb25cbiAgICBjdXJyZW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9DYXBpdG9saXplKGRhdGEuZGVzY3JpcHRpb24pXG4gICAgc3VucmlzZVN1bnNldC5pbm5lclRleHQgPSBgU3VucmlzZTogJHtjaGFuZ2VUaW1lRm9ybWF0KGNvbnZlcnRVVEMoZGF0YS5zdW5yaXNlICogMTAwMCkpfSBTdW5zZXQ6ICR7Y2hhbmdlVGltZUZvcm1hdChjb252ZXJ0VVRDKGRhdGEuc3Vuc2V0ICogMTAwMCkpfWA7XG4gICAgd2luZC5pbm5lclRleHQgPSBgQ3VycmVudCBXaW5kIFNwZWVkOiAke2RhdGEud2luZFsnc3BlZWQnXX0gRGlyZWN0aW9uOiAke2RhdGEud2luZFsnZGVnJ119IEd1c3RzOiAke2RhdGEud2luZFsnZ3VzdCddfWA7XG4gICAgY29uc29sZS5sb2coXCJBZGRpbmcgZGF0YVwiLCBkYXRhKVxuXG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5U3RhdGUpXG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhbFRpbWUpO1xuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcERpdilcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGl2KTtcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1bnJpc2VTdW5zZXQpXG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kKVxuXG4gICAgcmV0dXJuIHdlYXRoZXJDb250YWluZXI7XG59XG5cbi8vIGNvbWJpbmUgdHdvIHN0cmluZyBkYXRlcyB0b2dldGhlciBcbmZ1bmN0aW9uIGFkZFRpbWVzKHRvQ2hhbmdlLCBpbmNyZW1lbnQpIHtcbiAgICAvLyBhZGQgdGltZXMgdG9nZXRoZXIgc28gdGhleSBkb24ndCBqdXN0IGNvbmNhdG9uYXRlIHN0cmluZ3NcbiAgICAvLyBleC4gMTE6MzBwbSArIDIgaG91cnMgPSAxOjMwYW1cbiAgICAvLyBBbHdheXMgZ29ubmEgaW5jcmVtZW50IHRoZSAnb25lcycgbnVtYmVyXG4gICAgdG9DaGFuZ2UgPSB0b0NoYW5nZS5zcGxpdChcIlwiKVxuICAgIGxldCBjaGFuZ2VJbnQgPSBwYXJzZUludCh0b0NoYW5nZS5zbGljZSgxLCAyKSlcbiAgICBpbmNyZW1lbnQgPSBwYXJzZUludChpbmNyZW1lbnQpXG4gICAgdG9DaGFuZ2Uuc3BsaWNlKDEsIDEsIChjaGFuZ2VJbnQgKyBpbmNyZW1lbnQpKVxuICAgIHJldHVybiB0b0NoYW5nZS5qb2luKFwiXCIpXG59XG5cbi8vIHRvZ2dsZSBiZXR3ZWVuIDI0IGFuZCAxMiBob3VycyB0aW1lc1xuZnVuY3Rpb24gY2hhbmdlVGltZUZvcm1hdCh0aW1lVG9Db252ZXJ0KSB7XG4gICAgLy8gY29udmVydCBhIHRpbWUgc3RyaW5nIGluIDI0IGhvdXIgZm9ybWF0IGludG8gMTIgaG91ciBmb3JtYXRcbiAgICBpZih0aW1lVG9Db252ZXJ0LnNsaWNlKDAsMikgPj0gMTIpIHtcbiAgICAgICAgLy8gU3VidHJhY3QgMTJcbiAgICAgICAgbGV0IGFkanVzdGVkVGltZSA9IHRpbWVUb0NvbnZlcnQuc2xpY2UoMCwyKSAtIDEyXG4gICAgICAgIHRpbWVUb0NvbnZlcnQgPSB0aW1lVG9Db252ZXJ0LnNwbGl0KFwiXCIpXG4gICAgICAgIHRpbWVUb0NvbnZlcnQuc3BsaWNlKDAsIDIsIGFkanVzdGVkVGltZS50b1N0cmluZygpKVxuICAgICAgICB0aW1lVG9Db252ZXJ0LnB1c2goJ3BtJyk7XG4gICAgICAgIHJldHVybiB0aW1lVG9Db252ZXJ0LmpvaW4oXCJcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgbGVhZGluZyAwXG4gICAgICAgIHRpbWVUb0NvbnZlcnQgPSB0aW1lVG9Db252ZXJ0LnNwbGl0KFwiXCIpO1xuICAgICAgICB0aW1lVG9Db252ZXJ0LnNwbGljZSgwLCAxLCAnJyk7XG4gICAgICAgIHRpbWVUb0NvbnZlcnQucHVzaCgnYW0nKTtcbiAgICAgICAgcmV0dXJuIHRpbWVUb0NvbnZlcnQuam9pbihcIlwiKVxuICAgIH1cbn0gICBcblxuZnVuY3Rpb24gdG9DYXBpdG9saXplKHN0cmluZykge1xuICAgIC8vIENhcGl0b2xpemUgdGhlIGZpcnN0IGxldHRlciBpbiBlYWNoIHdvcmQgb2YgYSBzdHJpbmdcbiAgICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0cmluZ1tpXS5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIHN0cmluZ1tpXSA9IHN0cmluZ1tpXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nW2ldLnNsaWNlKDEpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nLmpvaW4oXCIgXCIpIFxuICAgIC8vIGNvbnNvbGUubG9nKFwiaW4gZnVuY2l0b25cIiwgc3RyaW5nKTtcbn1cblxuYWRkTG9jYXRpb25Gb3JtKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=