/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --form-visibility: block; \n}\n\nhtml, body, #content{\n    margin: 0; \n    width: 100%;\n    height: 100%;\n}\n\n#content{\n    display: flex;\n    flex-direction: row;\n}\n\n\n#list-interface{\n    padding: 20px;\n    height: 100%; \n    width: 50%; \n    background-color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 200px 200px;\n    row-gap: 20px;\n    column-gap: 10px;\n    justify-items: center;\n    overflow: scroll;\n}\n\n #list-maker{\n    background-color: white;\n    border-color: black;\n    border-style: solid;\n} \n\n.add-list-img{\n    width: 50px;\n}\n\n#add-list-form {\n    display: none;\n    position: absolute;\n    top: 10%;\n    background: white;\n    padding: 20px;\n    border: 1px solid;\n    border-radius: 20px;\n}\n\n.list-form {\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n    font-size: 15px;\n    gap: 5px;\n    border-radius: 20px;\n}\n\n.form-close-btn {\n    width: 20px;\n    padding: 3px;\n    background-color: transparent;\n    align-self: flex-end;\n    border:none;\n}\n\nbutton[type=submit]{\n    width: 50px;\n    background-color: transparent;\n    border: none;\n    border-radius: 20px;\n}\n\n[class ^= 'list-card'],\n#list-maker {\n    height: 200px;\n    width: 100%; \n    box-sizing: border-box;\n    /* border: solid; */\n    border-radius: 20px;\n    border-width: 1px;\n}\n\n.list-card{\n    font-family: sans-serif;\n    padding: 10%;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n\n.list-card div:nth-child(1){\n    font-weight: bold;\n}\n\n#list-interface .list-card:nth-child(4n -1){\n    background-color: #ffbe0b;\n}\n\n#list-interface .list-card:nth-child(4n+1){\n    background-color: #Ff006e;\n}\n\n#list-interface .list-card:nth-child(4n){\n    background-color: #Fb5607;\n    color: white;\n}\n\n#list-interface .list-card:nth-child(4n+2){\n    background-color: #8338ec;\n    color: white;\n}\n\n.remove-button{\n    width: 50px;\n    height: 50px;\n    background-color: transparent;\n}\n\n.remove-button img{\n    width: 20px;\n    height: 20px;\n}\n\n\n/* task inter */\n#task-interface{\n    height: 100%;\n    width: 50%;\n    background-color: white;\n    display: flex; \n    flex-direction: column;\n}\n\n.task-interface-header{\n    font-family: sans-serif;\n    font-size: 50px;\n    align-self: flex-end;\n}\n\n.list-page{\n    height: fit-content;\n    width: 80%;\n    align-self: center;\n    background-color: white;\n    /* border: 1px solid; */\n    border-radius: 20px;\n    padding: 5%; \n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n}\n\n.to-do-list{\n    height: fit-content;\n    width: 100%;\n    text-decoration: underline;\n    font-size: 25px;\n    font-weight: bold;\n    padding-bottom: 20px;\n}\n\n\n\n.item-container{\n    display: grid;\n    grid-template-columns: 20px 1fr 1fr 50px 50px;\n    align-items: center;\n}\n\n.list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n}\n\n.task-due{\n    text-align: end;\n    justify-self: end;\n}\n\n.task-view-btn img,\n.task-delete-btn img{\n    width: 15px;\n    height: 15px;\n    filter:opacity(50%);\n}\n\n.task-delete-btn,\n.task-view-btn{\n    width: fit-content;\n    height: fit-content; \n    padding: 0; \n    background-color: transparent;\n    border: none;\n    justify-self: end;\n}\n\n.add-task{\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    margin: 0; \n    font-family: sans-serif;\n    font-size: 1em;\n    padding-top: 10px;\n    align-self: flex-start;\n}\n\n.remove-finished-btn{\n    margin-top: 50px;\n    background-color: transparent;\n    border: none;\n}\n\n.priority-high{\n    background-color: rgb(255, 0, 110, 0.2);\n}\n\n.priority-med{\n    background-color: rgb(251, 86, 7, 0.2);\n}\n\n.priority-low{\n    background-color: rgb(255, 190, 11, 0.2);\n}\n\n/* add task & view form */\n.view-form{\n    position: absolute; \n    top: 20%;\n    left: 20%;\n    right: 20%;\n    background-color: white;\n    border: 1px solid;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 5px;\n    font-family: sans-serif;\n}\n\n#task-title{\n    border: none;\n    font-size: 1em;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --form-visibility: block; \n}\n\nhtml, body, #content{\n    margin: 0; \n    width: 100%;\n    height: 100%;\n}\n\n#content{\n    display: flex;\n    flex-direction: row;\n}\n\n\n#list-interface{\n    padding: 20px;\n    height: 100%; \n    width: 50%; \n    background-color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 200px 200px;\n    row-gap: 20px;\n    column-gap: 10px;\n    justify-items: center;\n    overflow: scroll;\n}\n\n #list-maker{\n    background-color: white;\n    border-color: black;\n    border-style: solid;\n} \n\n.add-list-img{\n    width: 50px;\n}\n\n#add-list-form {\n    display: none;\n    position: absolute;\n    top: 10%;\n    background: white;\n    padding: 20px;\n    border: 1px solid;\n    border-radius: 20px;\n}\n\n.list-form {\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n    font-size: 15px;\n    gap: 5px;\n    border-radius: 20px;\n}\n\n.form-close-btn {\n    width: 20px;\n    padding: 3px;\n    background-color: transparent;\n    align-self: flex-end;\n    border:none;\n}\n\nbutton[type=submit]{\n    width: 50px;\n    background-color: transparent;\n    border: none;\n    border-radius: 20px;\n}\n\n[class ^= 'list-card'],\n#list-maker {\n    height: 200px;\n    width: 100%; \n    box-sizing: border-box;\n    /* border: solid; */\n    border-radius: 20px;\n    border-width: 1px;\n}\n\n.list-card{\n    font-family: sans-serif;\n    padding: 10%;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n\n.list-card div:nth-child(1){\n    font-weight: bold;\n}\n\n#list-interface .list-card:nth-child(4n -1){\n    background-color: #ffbe0b;\n}\n\n#list-interface .list-card:nth-child(4n+1){\n    background-color: #Ff006e;\n}\n\n#list-interface .list-card:nth-child(4n){\n    background-color: #Fb5607;\n    color: white;\n}\n\n#list-interface .list-card:nth-child(4n+2){\n    background-color: #8338ec;\n    color: white;\n}\n\n.remove-button{\n    width: 50px;\n    height: 50px;\n    background-color: transparent;\n}\n\n.remove-button img{\n    width: 20px;\n    height: 20px;\n}\n\n\n/* task inter */\n#task-interface{\n    height: 100%;\n    width: 50%;\n    background-color: white;\n    display: flex; \n    flex-direction: column;\n}\n\n.task-interface-header{\n    font-family: sans-serif;\n    font-size: 50px;\n    align-self: flex-end;\n}\n\n.list-page{\n    height: fit-content;\n    width: 80%;\n    align-self: center;\n    background-color: white;\n    /* border: 1px solid; */\n    border-radius: 20px;\n    padding: 5%; \n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n}\n\n.to-do-list{\n    height: fit-content;\n    width: 100%;\n    text-decoration: underline;\n    font-size: 25px;\n    font-weight: bold;\n    padding-bottom: 20px;\n}\n\n\n\n.item-container{\n    display: grid;\n    grid-template-columns: 20px 1fr 1fr 50px 50px;\n    align-items: center;\n}\n\n.list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n}\n\n.task-due{\n    text-align: end;\n    justify-self: end;\n}\n\n.task-view-btn img,\n.task-delete-btn img{\n    width: 15px;\n    height: 15px;\n    filter:opacity(50%);\n}\n\n.task-delete-btn,\n.task-view-btn{\n    width: fit-content;\n    height: fit-content; \n    padding: 0; \n    background-color: transparent;\n    border: none;\n    justify-self: end;\n}\n\n.add-task{\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    margin: 0; \n    font-family: sans-serif;\n    font-size: 1em;\n    padding-top: 10px;\n    align-self: flex-start;\n}\n\n.remove-finished-btn{\n    margin-top: 50px;\n    background-color: transparent;\n    border: none;\n}\n\n.priority-high{\n    background-color: rgb(255, 0, 110, 0.2);\n}\n\n.priority-med{\n    background-color: rgb(251, 86, 7, 0.2);\n}\n\n.priority-low{\n    background-color: rgb(255, 190, 11, 0.2);\n}\n\n/* add task & view form */\n.view-form{\n    position: absolute; \n    top: 20%;\n    left: 20%;\n    right: 20%;\n    background-color: white;\n    border: 1px solid;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 5px;\n    font-family: sans-serif;\n}\n\n#task-title{\n    border: none;\n    font-size: 1em;\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOM-listinterface.js":
/*!**********************************!*\
  !*** ./src/DOM-listinterface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListBtn": () => (/* binding */ addListBtn),
/* harmony export */   "findList": () => (/* binding */ findList),
/* harmony export */   "initialCardListener": () => (/* binding */ initialCardListener),
/* harmony export */   "listCardListener": () => (/* binding */ listCardListener),
/* harmony export */   "make": () => (/* binding */ make),
/* harmony export */   "makeInitialCards": () => (/* binding */ makeInitialCards),
/* harmony export */   "makeListCard": () => (/* binding */ makeListCard),
/* harmony export */   "updateCardText": () => (/* binding */ updateCardText)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");
/* harmony import */ var _add_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-task */ "./src/add-task.js");
/* harmony import */ var _DOM_taskform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-taskform */ "./src/DOM-taskform.js");
/* harmony import */ var _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM-taskinterface */ "./src/DOM-taskinterface.js");
/* harmony import */ var _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/trash-can-outline.svg */ "./src/icons/trash-can-outline.svg");









function make(element, parent, className) {
    const newElement = document.createElement(element);
    parent.appendChild(newElement); 
    newElement.classList.add(className); 
    return newElement; 
}; 

function addListBtn() {
    const addListBtn = document.querySelector('#list-maker'); 
    const addListForm = document.querySelector('#add-list-form');
    addListBtn.addEventListener('click', () => {
        addListForm.setAttribute('style', 'display: block'); 
    });
    addListForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        addListForm.setAttribute('style', 'display: none');
        _add_list__WEBPACK_IMPORTED_MODULE_1__.add(event.target);
        makeListCard(); 
        listCardListener(); 
    });
    _DOM_taskform__WEBPACK_IMPORTED_MODULE_3__.closeBtnListener();  
}; 

//split apart
function makeListCard(){
        const index = _add_list__WEBPACK_IMPORTED_MODULE_1__.allLists[_add_list__WEBPACK_IMPORTED_MODULE_1__.allLists.length - 1]; 
        const listContainer = document.querySelector('#list-interface');
        const card = make('div', listContainer, `list-card`);
        card.setAttribute('id', `code${_add_list__WEBPACK_IMPORTED_MODULE_1__.allLists.length - 1}`);
        const cardHeader = make('div', card, null);
        cardHeader.textContent = index.title; 

        make('div', card, 'cardItemCount');
        make('div', card, 'cardFinishedCount'); 
       
        const cardDescription = make('div', card, null);
        cardDescription.textContent = index.description; 
        updateCardText();

        if(_add_list__WEBPACK_IMPORTED_MODULE_1__.allLists.length !== 1){
            removeBtn(card);
        }
}; 

function makeInitialCards(){
    _add_list__WEBPACK_IMPORTED_MODULE_1__.allLists.forEach((list) => {
        const listContainer = document.querySelector('#list-interface');
        const card = make('div', listContainer, `list-card`);
        card.setAttribute('id', `code${_add_list__WEBPACK_IMPORTED_MODULE_1__.allLists.indexOf(list)}`);
        const cardHeader = make('div', card, null);
        cardHeader.textContent = list.title; 

        make('div', card, 'cardItemCount');
        make('div', card, 'cardFinishedCount'); 
       
        const cardDescription = make('div', card, null);
        cardDescription.textContent = list.description; 
        updateCardText();
        if(_add_list__WEBPACK_IMPORTED_MODULE_1__.allLists.indexOf(list) !== 0){
            removeBtn(card);
        };
        
    });
};

function updateCardText() {
    const card = document.querySelectorAll('.list-card'); 

    card.forEach((card) => {
        const itemCount = document.querySelectorAll('.cardItemCount');
        const fItemCount = document.querySelectorAll('.cardFinishedCount');
        const list = findList(card); 

        let itemDiv;
        let fItemDiv; 

        itemCount.forEach((item) => {
            if (item.parentNode == card){
                itemDiv = item; 
            };
        }); 

        fItemCount.forEach((item) => {
            if (item.parentNode == card){
                fItemDiv = item; 
            }; 
        }); 
        itemDiv.textContent = `${list.taskList.length} Tasks`
        fItemDiv.textContent = `${list.finishedTasks.length} Finished Tasks`
    }); 
};

function listCardListener(){
    const cardList = document.querySelectorAll('.list-card');
    cardList[cardList.length-1].addEventListener('click', () => {
        _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_4__.replacePage(cardList[cardList.length-1])
    }); 
};

function initialCardListener(){
    const cardList = document.querySelectorAll('.list-card');
    console.log(cardList);
    cardList.forEach((card) => card.addEventListener('click', () => {
        console.log(card); 
        _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_4__.replacePage(card); 
    }))
}


function removeBtn(parent){
    const removeBtn = make('button', parent, 'remove-button');
    make('img', removeBtn, null).setAttribute('src', _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_5__ )
    removeBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const newArray = _add_task__WEBPACK_IMPORTED_MODULE_2__.moveTaskFrom(findList(parent), _add_list__WEBPACK_IMPORTED_MODULE_1__.allLists);
        _add_list__WEBPACK_IMPORTED_MODULE_1__.changeAllList(newArray); 
        _add_list__WEBPACK_IMPORTED_MODULE_1__.test();
        const listPage = document.querySelector('.list-page')
        if(listPage){
            listPage.remove();
        };
        parent.remove(); 
    });
};

//move to add-list
function findList(card){ 
    const cardCode = card.getAttributeNode("id").value;
    const list = _add_list__WEBPACK_IMPORTED_MODULE_1__.allLists.find(list => list.code == cardCode); 
    return list; 
};






/***/ }),

/***/ "./src/DOM-taskform.js":
/*!*****************************!*\
  !*** ./src/DOM-taskform.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskListener": () => (/* binding */ addTaskListener),
/* harmony export */   "closeBtnListener": () => (/* binding */ closeBtnListener),
/* harmony export */   "makeForm": () => (/* binding */ makeForm),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "viewForm": () => (/* binding */ viewForm),
/* harmony export */   "viewFormListener": () => (/* binding */ viewFormListener)
/* harmony export */ });
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");
/* harmony import */ var _add_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-task */ "./src/add-task.js");
/* harmony import */ var _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-listinterface */ "./src/DOM-listinterface.js");
/* harmony import */ var _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-taskinterface */ "./src/DOM-taskinterface.js");





function makeFormElements(element, parent, type, name, id){
    const newElement = document.createElement(element);
    parent.appendChild(newElement); 
    //newElement.classList.add(className); 
    newElement.setAttribute('id', `${id}`);
    newElement.setAttribute('name', `${name}`); 
    newElement.setAttribute('type', `${type}`)
    return newElement; 
}; 

function addFormLabels(parent, id, text){
    const taskDateLabel = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('label', parent, null)
    taskDateLabel.setAttribute('for', id);
    taskDateLabel.textContent = text;
}; 

function makeFormDropdowns(data, parent, type){
    for (let i = 0; i < data.length; i++){
        const listOptions = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('option', parent, `${type}-dropdown`);
        if (data == _add_list__WEBPACK_IMPORTED_MODULE_0__.allLists){
            listOptions.setAttribute('value', data[i].title);
            listOptions.textContent = data[i].title; 
            if (data[i].title == autoPickList()){
                listOptions.setAttribute('selected', 'selected');
            }
        } else {
            listOptions.setAttribute('value', data[i]);
            listOptions.textContent = data[i]; 
        }; 
    };
}; 

function makeForm(){
    const contentWindow = document.querySelector('#content');
    const viewForm = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('form', contentWindow, 'view-form'); 
    viewForm.setAttribute('id', 'add-task-form'); 

    const closeBtn = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', viewForm, 'form-close-btn');
    closeBtn.textContent = 'X';
    closeBtnListener(); 
    

    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('label', viewForm, null).setAttribute('for', 'task-title'); 
    const taskTitle = makeFormElements('input', viewForm, 'text', 'task-title', 'task-title'); 
    taskTitle.setAttribute('placeholder', 'Task Name...')

    addFormLabels(viewForm, 'task-list', 'List:');
    const taskList = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('select', viewForm, null)
    taskList.setAttribute('id', 'task-list'); 
    taskList.setAttribute('name', 'task-list'); 
    makeFormDropdowns(_add_list__WEBPACK_IMPORTED_MODULE_0__.allLists, taskList, 'list');
    console.log(autoPickList())
    
    addFormLabels(viewForm, 'task-date', 'Due Date:');
    makeFormElements('input', viewForm, 'date', 'task-date', 'task-date'); 
    
    addFormLabels(viewForm, 'task-list', 'Priority:');
    let priorities = ['--', 'High', 'Medium', 'Low'];
    const taskPriority = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('select', viewForm, null);
    taskPriority.setAttribute('id', 'task-priority'); 
    taskPriority.setAttribute('name', 'task-priority'); 
    makeFormDropdowns(priorities, taskPriority, 'priority'); 
    
    addFormLabels(viewForm, 'task-description', 'Description:')
    const taskDescrip = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('textarea', viewForm, null);
    taskDescrip.setAttribute('name', 'task-description');
    taskDescrip.setAttribute('id', 'task-description');
    taskDescrip.setAttribute('cols', 30);
    taskDescrip.setAttribute('rows', 4); 
    
    const submitBtn = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', viewForm, 'view-form-submit'); 
    submitBtn.setAttribute('type', 'submit'); 
    submitBtn.textContent = 'Submit'
};

function removeForm(){
    const form = document.querySelector('#add-task-form'); 
    if(form){
    form.remove(); 
    };
};

function addTaskListener(){
    const taskForm = document.querySelector('#add-task-form'); 
    taskForm.addEventListener('submit', function(event) {
        console.log(event.target); 
        event.preventDefault(); 

        if (_add_task__WEBPACK_IMPORTED_MODULE_1__.validateTaskName(event.target) == true) {
        _add_task__WEBPACK_IMPORTED_MODULE_1__.addT(event.target);
        const listPage = document.querySelector('.list-page');
        console.log(listPage); 
        _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_3__.replacePage(listPage); 
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText(); 
        removeForm(); 
        };
    }); 
}; 

function autoPickList(){
    const page = document.querySelector('.list-page');
    const list = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(page);
    return list.title; 
};

function viewForm(task){
    setExistingValues('#task-title', task.title);
    setExistingValues('#task-list', task.parentList); 
    setExistingValues('#task-date', task.dueDate); 
    setExistingValues('#task-priority', task.priority); 
    const description = document.querySelector('#task-description'); 
    description.textContent = task.description; 
};

function setExistingValues(id, value){
    const element = document.querySelector(id); 
    element.setAttribute('value', `${value}`)
};

function viewFormListener(task){
    const taskForm = document.querySelector('#add-task-form');
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const form = _add_list__WEBPACK_IMPORTED_MODULE_0__.getData(event.target);
        console.log(task.title);
        task.title = form[0]; 
        task.parentList = form[1];
        task.dueDate = form[2];
        task.priority = form[3];
        task.description = form[4]; 
        _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
        removeForm(); 

        const cardList = document.querySelectorAll('.list-card');
        _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_3__.replacePage(cardList[cardList.length-1]);
    });
};

function closeBtnListener(){
    const closeBtn = document.querySelectorAll('.form-close-btn');
    const addListForm = document.querySelector('#add-list-form');
    closeBtn.forEach((button) => button.addEventListener('click', (event) => {
        event.preventDefault(); 
        console.log(button.parentElement); 
        if (button.parentElement.getAttributeNode('id').value !== 'add-task-form' ){
            addListForm.setAttribute('style', 'display: none');
            
        } else {
             removeForm(); 
        };
    }));
};
// if (button.parentElement.getAttributeNode('id').value !== 'add-task-form' ){
//     addListForm.setAttribute('style', 'display: none');
    
// } else {
//      removeForm(); 
// };








/***/ }),

/***/ "./src/DOM-taskinterface.js":
/*!**********************************!*\
  !*** ./src/DOM-taskinterface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replacePage": () => (/* binding */ replacePage)
/* harmony export */ });
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");
/* harmony import */ var _add_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-task */ "./src/add-task.js");
/* harmony import */ var _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-listinterface */ "./src/DOM-listinterface.js");
/* harmony import */ var _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-taskinterface */ "./src/DOM-taskinterface.js");
/* harmony import */ var _DOM_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM-tasks */ "./src/DOM-tasks.js");
/* harmony import */ var _DOM_taskform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM-taskform */ "./src/DOM-taskform.js");







function replacePage(card) {
    const listPage = document.querySelector('#task-interface');
    const present = document.querySelector('.list-page');
    const existingDropdown = document.querySelectorAll('.list-dropdown'); 

    if (listPage.lastElementChild == present){
        listPage.lastElementChild.remove(); 
        existingDropdown.forEach((dropdown) => dropdown.remove()); 
    }; 

    if (document.querySelector('.view-form')){
        _DOM_taskform__WEBPACK_IMPORTED_MODULE_5__.removeForm(); 
    }; 

    makePage(card);
    addTaskBtn(); 
    _DOM_tasks__WEBPACK_IMPORTED_MODULE_4__.addRemoveAllBtn();
};

function makePage(card){
    const listPage = document.querySelector('#task-interface');
    const page = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('div', listPage, 'list-page'); 

    console.log('make new')
    const listInfo = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(card); 
    page.setAttribute('id', `${listInfo.code}`);
    const pageTitle = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('div', page, 'to-do-list'); 
    pageTitle.textContent = listInfo.title; 
    _DOM_tasks__WEBPACK_IMPORTED_MODULE_4__.makeListItems(listInfo);
};


function addTaskBtn() {
    const listPage = document.querySelector('.list-page');
    const addTaskBtnn = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', listPage, 'add-task');
    addTaskBtnn.textContent = "+ Add Task";

    addTaskBtnn.addEventListener('click', () => {
        _DOM_taskform__WEBPACK_IMPORTED_MODULE_5__.makeForm(); 
        _DOM_taskform__WEBPACK_IMPORTED_MODULE_5__.addTaskListener(); 
    }); 
};








/***/ }),

/***/ "./src/DOM-tasks.js":
/*!**************************!*\
  !*** ./src/DOM-tasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRemoveAllBtn": () => (/* binding */ addRemoveAllBtn),
/* harmony export */   "makeListItems": () => (/* binding */ makeListItems)
/* harmony export */ });
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");
/* harmony import */ var _add_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-task */ "./src/add-task.js");
/* harmony import */ var _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-listinterface */ "./src/DOM-listinterface.js");
/* harmony import */ var _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-taskinterface */ "./src/DOM-taskinterface.js");
/* harmony import */ var _DOM_taskform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM-taskform */ "./src/DOM-taskform.js");
/* harmony import */ var _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/trash-can-outline.svg */ "./src/icons/trash-can-outline.svg");
/* harmony import */ var _icons_eye_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/eye.svg */ "./src/icons/eye.svg");








function makeListItems(parentList){
    const parentContainer = document.querySelector('.list-page'); 
    const taskList = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('div', parentContainer, 'list');
    const  list = parentList.taskList;

    for (let i = 0; i < list.length; i++){
        const itemsContainer = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('div', taskList, 'item-container'); 
        itemsContainer.setAttribute('id', `list-item${i}`);
        const listItem = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('input', itemsContainer, 'list-item'); 
        const itemLabel = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('label', itemsContainer, 'list-item');
        listItem.setAttribute('type', 'checkbox'); 
        listItem.setAttribute('name', `list-item${i}`); 
        listItem.setAttribute('value', ''); 
        listItem.setAttribute('id', `list-item${i}`);
        itemLabel.setAttribute('id', `list-item${i}`);
        itemLabel.textContent = list[i].title; 
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('div', itemsContainer, 'task-due').textContent = list[i].dueDate
        const viewBtn = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', itemsContainer, 'task-view-btn')
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('img', viewBtn, null).setAttribute('src', _icons_eye_svg__WEBPACK_IMPORTED_MODULE_6__)
        const removeBtn = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', itemsContainer, 'task-delete-btn')
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('img', removeBtn, null).setAttribute('src', _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_5__);
        changePriorityColors(list[i].priority, itemLabel);
        viewItems(list[i]);
        removeTasks(itemsContainer); 
    };
    finishTaskListener();  
};

function changePriorityColors(itemPriority, item){
    switch(itemPriority){
        case ('High'): 
            item.classList.add('priority-high');
            break;
        case 'Medium':
            item.classList.add('priority-med')
            break;
        case 'Low': 
            item. classList.add('priority-low')
            break; 
    }; 
}; 

function viewItems(item){
    const viewBtns = document.querySelectorAll('.task-view-btn'); 
    const viewBtn = viewBtns[viewBtns.length-1]; 
    viewBtn.addEventListener('click', () => {
            _DOM_taskform__WEBPACK_IMPORTED_MODULE_4__.makeForm(); 
            _DOM_taskform__WEBPACK_IMPORTED_MODULE_4__.viewForm(item); 
            _DOM_taskform__WEBPACK_IMPORTED_MODULE_4__.viewFormListener(item); 
        }); 
};

function finishTaskListener(){
    const checkBox = document.querySelectorAll("input[type=checkbox]"); 
    
    checkBox.forEach((box) => box.addEventListener('change', () => {
        const parentList = box.parentElement.parentElement.parentElement;
        const list = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(parentList);
        const task = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(box.getAttribute('id'), list.taskList);

        if (box.checked){
            box.parentElement.classList.add('finished-task'); 
            list.taskList = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(task, list.taskList); 
            list.finishedTasks = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskTo(task, list.finishedTasks); 
            _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText();
            _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
        }
        else if(!box.checked){ 
            const fTask = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(box.getAttribute('id'), list.finishedTasks);
            list.finishedTasks = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(fTask, list.finishedTasks); 
            list.taskList = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskTo(fTask, list.taskList); 
            _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText(); 
            _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
        };
    }
    ));
};

function removeTasks(taskContainer){
    const removeBtns = document.querySelectorAll('.task-delete-btn'); 
    const removeBtn = removeBtns[removeBtns.length-1];
    removeBtn.addEventListener('click', () => {
        const parentList = taskContainer.parentElement.parentElement;
        const list = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(parentList);
        const task = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(taskContainer.getAttribute('id'), list.taskList);
        const newArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(task, list.taskList);
        list.taskList = newArray; 
        console.log(newArray); 
        taskContainer.remove();
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText(); 
        _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
    }); 
}; 

function addRemoveAllBtn(){
    const listPage = document.querySelector('.list-page');
    const removeTaskBtn = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', listPage, 'remove-finished-btn');
    removeTaskBtn.textContent = '- Remove All Finished Tasks'; 

    removeTaskBtn.addEventListener('click', () => {
        const tasks = document.querySelectorAll('.finished-task'); 
        tasks.forEach((task) => {
            const parentList = task.parentElement.parentElement;
            console.log(parentList); 
            const list = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(parentList);
            const taskObj = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(task.getAttribute('id'), list.taskList);
            const newArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(taskObj, list.taskList);
            list.taskList = newArray; 
            console.log(list.taskList); 
            task.remove(); 
        });
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText(); 
        _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
    });
};






/***/ }),

/***/ "./src/add-list.js":
/*!*************************!*\
  !*** ./src/add-list.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "allLists": () => (/* binding */ allLists),
/* harmony export */   "changeAllList": () => (/* binding */ changeAllList),
/* harmony export */   "findMatch": () => (/* binding */ findMatch),
/* harmony export */   "findMatchCode": () => (/* binding */ findMatchCode),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "makeList": () => (/* binding */ makeList),
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");




let allLists = []; 

function test(){
    window.localStorage.setItem('list', JSON.stringify(allLists));
}; 

function getData(form){
    let valuesArr = []; 
    let formData = new FormData(form);
    for (const value of formData.values()){
        valuesArr.push(value); 
    };
    return valuesArr; 
};

function findMatch(name, lists) {
    const names = lists.find(list => list.title == name); 
    return names; 
}; 

function findMatchCode(name, lists) {
    const names = lists.find(list => list.code == name); 
    return names; 
}; 

function titleNameValidation(title){
    if(title == ''){
        return title = `List ${allLists.length}`
    } else if(findMatch(title, allLists)) {
        return title = `${title} (List ${allLists.length})`
    }else{
        return title;
    };
};

const makeList = (title, description, taskList, finishedTasks, code) => {
    title = titleNameValidation(title);
    taskList = []; 
    finishedTasks = []; 
    code = `code${allLists.length}`;
    return { title, description, taskList, finishedTasks, code }
};

function add(form){
    const formData = getData(form);
    const list = makeList(formData[0], formData[1]); 
    allLists.push(list); 
    test(); 
};

function changeAllList(list){
    allLists = list; 
}; 




/***/ }),

/***/ "./src/add-task.js":
/*!*************************!*\
  !*** ./src/add-task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addT": () => (/* binding */ addT),
/* harmony export */   "addTasktoList": () => (/* binding */ addTasktoList),
/* harmony export */   "makeTask": () => (/* binding */ makeTask),
/* harmony export */   "moveTaskFrom": () => (/* binding */ moveTaskFrom),
/* harmony export */   "moveTaskTo": () => (/* binding */ moveTaskTo),
/* harmony export */   "validateTaskName": () => (/* binding */ validateTaskName)
/* harmony export */ });
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");





const makeTask = (title, parentList, dueDate, priority, description, code ) => {
    const list = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatch(parentList, _add_list__WEBPACK_IMPORTED_MODULE_0__.allLists).taskList;
    code = `list-item${list.length}`; 
    console.log(priority);
    return { title, parentList, dueDate, priority, description, code }
};


function addT(form){
    const formData = _add_list__WEBPACK_IMPORTED_MODULE_0__.getData(form);
    console.log(formData[3])
    const task = makeTask(formData[0], formData[1], formData[2], formData[3], formData[4]); 
    addTasktoList(task);
    _add_list__WEBPACK_IMPORTED_MODULE_0__.test(); 
};

function addTasktoList(task){
    const allLists = _add_list__WEBPACK_IMPORTED_MODULE_0__.allLists;
    const parentList = allLists.find(list => list.title == task.parentList);
    parentList.taskList.push(task); 
    
};

function validateTaskName(form){
    const formData = _add_list__WEBPACK_IMPORTED_MODULE_0__.getData(form);
    if(formData[0] == ''){
        alert("Empty Name")
        return false;
    } else{
        return true; 
    }
};

function moveTaskFrom(task, initial){
    const newInitial = initial.filter(item => item !== task);
    let newArray;

    if (!newInitial){
       return newArray = []; 
    } else {
        return newArray = newInitial; 
    }
   
};

function moveTaskTo(task, array){
    array.push(task);
    return array; 
}; 

function changeAllList(list){
    _add_list__WEBPACK_IMPORTED_MODULE_0__.allLists = list; 
}; 








/***/ }),

/***/ "./src/icons/eye.svg":
/*!***************************!*\
  !*** ./src/icons/eye.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8b1612f3981992f76fa.svg";

/***/ }),

/***/ "./src/icons/trash-can-outline.svg":
/*!*****************************************!*\
  !*** ./src/icons/trash-can-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-listinterface */ "./src/DOM-listinterface.js");
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");







//localStorage.removeItem('list')

function defaultList(){
    const defaultList = (0,_add_list__WEBPACK_IMPORTED_MODULE_2__.makeList)("Default List", "This is your first list!");
    _add_list__WEBPACK_IMPORTED_MODULE_2__.allLists.push(defaultList); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.makeListCard(); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.listCardListener(); 
};


if (!localStorage.getItem('list')){
    console.log('hi');
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.addListBtn();
    defaultList(); 
} else {
    (0,_add_list__WEBPACK_IMPORTED_MODULE_2__.changeAllList)(JSON.parse(window.localStorage.getItem('list')));
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.addListBtn();
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.makeInitialCards(); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.initialCardListener(); 

};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdDQUFnQyxHQUFHLHlCQUF5QixpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLGFBQWEsb0JBQW9CLDBCQUEwQixHQUFHLHNCQUFzQixvQkFBb0Isb0JBQW9CLGtCQUFrQiw4QkFBOEIsb0JBQW9CLHlDQUF5QyxzQ0FBc0Msb0JBQW9CLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLEdBQUcsaUJBQWlCLDhCQUE4QiwwQkFBMEIsMEJBQTBCLElBQUksa0JBQWtCLGtCQUFrQixHQUFHLG9CQUFvQixvQkFBb0IseUJBQXlCLGVBQWUsd0JBQXdCLG9CQUFvQix3QkFBd0IsMEJBQTBCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHNCQUFzQixlQUFlLDBCQUEwQixHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLG9DQUFvQywyQkFBMkIsa0JBQWtCLEdBQUcsd0JBQXdCLGtCQUFrQixvQ0FBb0MsbUJBQW1CLDBCQUEwQixHQUFHLDBDQUEwQyxvQkFBb0IsbUJBQW1CLDZCQUE2Qix3QkFBd0IsNEJBQTRCLHdCQUF3QixHQUFHLGVBQWUsOEJBQThCLG1CQUFtQixvQkFBb0IsNkJBQTZCLGVBQWUsOEhBQThILEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLGdEQUFnRCxnQ0FBZ0MsR0FBRywrQ0FBK0MsZ0NBQWdDLEdBQUcsNkNBQTZDLGdDQUFnQyxtQkFBbUIsR0FBRywrQ0FBK0MsZ0NBQWdDLG1CQUFtQixHQUFHLG1CQUFtQixrQkFBa0IsbUJBQW1CLG9DQUFvQyxHQUFHLHVCQUF1QixrQkFBa0IsbUJBQW1CLEdBQUcsd0NBQXdDLG1CQUFtQixpQkFBaUIsOEJBQThCLHFCQUFxQiw2QkFBNkIsR0FBRywyQkFBMkIsOEJBQThCLHNCQUFzQiwyQkFBMkIsR0FBRyxlQUFlLDBCQUEwQixpQkFBaUIseUJBQXlCLDhCQUE4Qiw0QkFBNEIsNEJBQTRCLG1CQUFtQiw4QkFBOEIsb0JBQW9CLDZCQUE2Qix3REFBd0QsR0FBRyxnQkFBZ0IsMEJBQTBCLGtCQUFrQixpQ0FBaUMsc0JBQXNCLHdCQUF3QiwyQkFBMkIsR0FBRyx3QkFBd0Isb0JBQW9CLG9EQUFvRCwwQkFBMEIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssY0FBYyxzQkFBc0Isd0JBQXdCLEdBQUcsOENBQThDLGtCQUFrQixtQkFBbUIsMEJBQTBCLEdBQUcsc0NBQXNDLHlCQUF5QiwyQkFBMkIsa0JBQWtCLG9DQUFvQyxtQkFBbUIsd0JBQXdCLEdBQUcsY0FBYyxvQ0FBb0MsbUJBQW1CLGlCQUFpQixpQkFBaUIsOEJBQThCLHFCQUFxQix3QkFBd0IsNkJBQTZCLEdBQUcseUJBQXlCLHVCQUF1QixvQ0FBb0MsbUJBQW1CLEdBQUcsbUJBQW1CLDhDQUE4QyxHQUFHLGtCQUFrQiw2Q0FBNkMsR0FBRyxrQkFBa0IsK0NBQStDLEdBQUcsMkNBQTJDLDBCQUEwQixlQUFlLGdCQUFnQixpQkFBaUIsOEJBQThCLHdCQUF3QiwwQkFBMEIsb0JBQW9CLDZCQUE2QixvQkFBb0IsZUFBZSw4QkFBOEIsR0FBRyxnQkFBZ0IsbUJBQW1CLHFCQUFxQixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGdDQUFnQyxnQ0FBZ0MsR0FBRyx5QkFBeUIsaUJBQWlCLGtCQUFrQixtQkFBbUIsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIsR0FBRyxzQkFBc0Isb0JBQW9CLG9CQUFvQixrQkFBa0IsOEJBQThCLG9CQUFvQix5Q0FBeUMsc0NBQXNDLG9CQUFvQix1QkFBdUIsNEJBQTRCLHVCQUF1QixHQUFHLGlCQUFpQiw4QkFBOEIsMEJBQTBCLDBCQUEwQixJQUFJLGtCQUFrQixrQkFBa0IsR0FBRyxvQkFBb0Isb0JBQW9CLHlCQUF5QixlQUFlLHdCQUF3QixvQkFBb0Isd0JBQXdCLDBCQUEwQixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLDhCQUE4QixzQkFBc0IsZUFBZSwwQkFBMEIsR0FBRyxxQkFBcUIsa0JBQWtCLG1CQUFtQixvQ0FBb0MsMkJBQTJCLGtCQUFrQixHQUFHLHdCQUF3QixrQkFBa0Isb0NBQW9DLG1CQUFtQiwwQkFBMEIsR0FBRywwQ0FBMEMsb0JBQW9CLG1CQUFtQiw2QkFBNkIsd0JBQXdCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLDhCQUE4QixtQkFBbUIsb0JBQW9CLDZCQUE2QixlQUFlLDhIQUE4SCxHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxnREFBZ0QsZ0NBQWdDLEdBQUcsK0NBQStDLGdDQUFnQyxHQUFHLDZDQUE2QyxnQ0FBZ0MsbUJBQW1CLEdBQUcsK0NBQStDLGdDQUFnQyxtQkFBbUIsR0FBRyxtQkFBbUIsa0JBQWtCLG1CQUFtQixvQ0FBb0MsR0FBRyx1QkFBdUIsa0JBQWtCLG1CQUFtQixHQUFHLHdDQUF3QyxtQkFBbUIsaUJBQWlCLDhCQUE4QixxQkFBcUIsNkJBQTZCLEdBQUcsMkJBQTJCLDhCQUE4QixzQkFBc0IsMkJBQTJCLEdBQUcsZUFBZSwwQkFBMEIsaUJBQWlCLHlCQUF5Qiw4QkFBOEIsNEJBQTRCLDRCQUE0QixtQkFBbUIsOEJBQThCLG9CQUFvQiw2QkFBNkIsd0RBQXdELEdBQUcsZ0JBQWdCLDBCQUEwQixrQkFBa0IsaUNBQWlDLHNCQUFzQix3QkFBd0IsMkJBQTJCLEdBQUcsd0JBQXdCLG9CQUFvQixvREFBb0QsMEJBQTBCLEdBQUcsVUFBVSxvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLGNBQWMsc0JBQXNCLHdCQUF3QixHQUFHLDhDQUE4QyxrQkFBa0IsbUJBQW1CLDBCQUEwQixHQUFHLHNDQUFzQyx5QkFBeUIsMkJBQTJCLGtCQUFrQixvQ0FBb0MsbUJBQW1CLHdCQUF3QixHQUFHLGNBQWMsb0NBQW9DLG1CQUFtQixpQkFBaUIsaUJBQWlCLDhCQUE4QixxQkFBcUIsd0JBQXdCLDZCQUE2QixHQUFHLHlCQUF5Qix1QkFBdUIsb0NBQW9DLG1CQUFtQixHQUFHLG1CQUFtQiw4Q0FBOEMsR0FBRyxrQkFBa0IsNkNBQTZDLEdBQUcsa0JBQWtCLCtDQUErQyxHQUFHLDJDQUEyQywwQkFBMEIsZUFBZSxnQkFBZ0IsaUJBQWlCLDhCQUE4Qix3QkFBd0IsMEJBQTBCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLGVBQWUsOEJBQThCLEdBQUcsZ0JBQWdCLG1CQUFtQixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDejVWO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjtBQUN3RDtBQUN0QztBQUNEO0FBQ0E7QUFDSTtBQUNHO0FBQ1M7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMENBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDJEQUF3QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLCtDQUFnQixDQUFDLHNEQUF1QjtBQUM5RDtBQUNBO0FBQ0EsdUNBQXVDLHNEQUF1QixLQUFLO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsc0RBQXVCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQXdCO0FBQzVCO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQXdCLE9BQU87QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUF3QjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxpQ0FBaUMsc0JBQXNCO0FBQ3ZELGtDQUFrQywyQkFBMkI7QUFDN0QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWlCO0FBQ3pCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBaUI7QUFDekIsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EscURBQXFELHlEQUFTO0FBQzlEO0FBQ0E7QUFDQSx5QkFBeUIsbURBQW9CLG1CQUFtQiwrQ0FBZ0I7QUFDaEYsUUFBUSxvREFBcUI7QUFDN0IsUUFBUSwyQ0FBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBcUI7QUFDdEM7QUFDQTs7QUFFNEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0l2RjtBQUNBO0FBQ0s7QUFDRTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsR0FBRztBQUN4Qyx1Q0FBdUMsS0FBSztBQUM1Qyx1Q0FBdUMsS0FBSztBQUM1QztBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9EQUFRO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsNEJBQTRCLG9EQUFRLHNCQUFzQixLQUFLO0FBQy9ELG9CQUFvQiwrQ0FBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVE7QUFDN0I7O0FBRUEscUJBQXFCLG9EQUFRO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLG9EQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixvREFBUTtBQUM3QjtBQUNBO0FBQ0Esc0JBQXNCLCtDQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksdURBQXdCO0FBQ3BDLFFBQVEsMkNBQVk7QUFDcEI7QUFDQTtBQUNBLFFBQVEsMkRBQWlCO0FBQ3pCLFFBQVEsOERBQWtCO0FBQzFCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix3REFBWTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxNQUFNO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhDQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQVk7QUFDcEI7O0FBRUE7QUFDQSxRQUFRLDJEQUFpQjtBQUN6QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7QUFLOEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2S3pEO0FBQ0E7QUFDSztBQUNFO0FBQ047QUFDRzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFEQUFrQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1REFBdUI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixvREFBUTs7QUFFekI7QUFDQSxxQkFBcUIsd0RBQVk7QUFDakMsK0JBQStCLGNBQWM7QUFDN0Msc0JBQXNCLG9EQUFRO0FBQzlCO0FBQ0EsSUFBSSxxREFBcUI7QUFDekI7OztBQUdBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQVE7QUFDaEM7O0FBRUE7QUFDQSxRQUFRLG1EQUFnQjtBQUN4QixRQUFRLDBEQUF1QjtBQUMvQixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERxQztBQUNBO0FBQ0s7QUFDRTtBQUNIO0FBQ1k7QUFDaEI7O0FBRXJDO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVE7QUFDN0I7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQywrQkFBK0Isb0RBQVE7QUFDdkMsc0RBQXNELEVBQUU7QUFDeEQseUJBQXlCLG9EQUFRO0FBQ2pDLDBCQUEwQixvREFBUTtBQUNsQztBQUNBLGtEQUFrRCxFQUFFO0FBQ3BEO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQsaURBQWlELEVBQUU7QUFDbkQ7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCLHdCQUF3QixvREFBUTtBQUNoQyxRQUFRLG9EQUFRLDJDQUEyQywyQ0FBTztBQUNsRSwwQkFBMEIsb0RBQVE7QUFDbEMsUUFBUSxvREFBUSw2Q0FBNkMseURBQVM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBZ0I7QUFDNUIsWUFBWSxtREFBZ0I7QUFDNUIsWUFBWSwyREFBd0I7QUFDcEMsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVk7QUFDakMscUJBQXFCLG9EQUFxQjs7QUFFMUM7QUFDQTtBQUNBLDRCQUE0QixtREFBb0I7QUFDaEQsaUNBQWlDLGlEQUFrQjtBQUNuRCxZQUFZLDhEQUFrQjtBQUM5QixZQUFZLDJDQUFZO0FBQ3hCO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQXFCO0FBQy9DLGlDQUFpQyxtREFBb0I7QUFDckQsNEJBQTRCLGlEQUFrQjtBQUM5QyxZQUFZLDhEQUFrQjtBQUM5QixZQUFZLDJDQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVk7QUFDakMscUJBQXFCLG9EQUFxQjtBQUMxQyx5QkFBeUIsbURBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQWtCO0FBQzFCLFFBQVEsMkNBQVk7QUFDcEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQVE7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3REFBWTtBQUNyQyw0QkFBNEIsb0RBQXFCO0FBQ2pELDZCQUE2QixtREFBb0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsOERBQWtCO0FBQzFCLFFBQVEsMkNBQVk7QUFDcEIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSG9CO0FBQ3lCO0FBQ1A7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DLE1BQU07QUFDTiwwQkFBMEIsT0FBTyxRQUFRLGdCQUFnQjtBQUN6RCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQyxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RDZDO0FBQ1A7QUFDRDs7O0FBR3JDO0FBQ0EsaUJBQWlCLGdEQUFpQixhQUFhLCtDQUFnQjtBQUMvRCx1QkFBdUIsWUFBWTtBQUNuQztBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQSxxQkFBcUIsOENBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBWTtBQUNoQjs7QUFFQTtBQUNBLHFCQUFxQiwrQ0FBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsOENBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksK0NBQWdCO0FBQ3BCOzs7O0FBSW9GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdEcEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ3lCO0FBQ1A7QUFDSTtBQUNxQjs7O0FBRy9EOztBQUVBO0FBQ0Esd0JBQXdCLG1EQUFRO0FBQ2hDLElBQUksb0RBQWE7QUFDakIsSUFBSSw0REFBZ0I7QUFDcEIsSUFBSSxnRUFBb0I7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDBEQUFjO0FBQ2xCO0FBQ0EsRUFBRTtBQUNGLElBQUksd0RBQWE7QUFDakIsSUFBSSwwREFBYztBQUNsQixJQUFJLGdFQUFvQjtBQUN4QixJQUFJLG1FQUF1Qjs7QUFFM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00tbGlzdGludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00tdGFza2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tpbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZC1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb3JtLXZpc2liaWxpdHk6IGJsb2NrOyBcXG59XFxuXFxuaHRtbCwgYm9keSwgI2NvbnRlbnR7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5cXG4jbGlzdC1pbnRlcmZhY2V7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIHdpZHRoOiA1MCU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAyMDBweDtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4gI2xpc3QtbWFrZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn0gXFxuXFxuLmFkZC1saXN0LWltZ3tcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbiNhZGQtbGlzdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ubGlzdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5mb3JtLWNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyOm5vbmU7XFxufVxcblxcbmJ1dHRvblt0eXBlPXN1Ym1pdF17XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5bY2xhc3MgXj0gJ2xpc3QtY2FyZCddLFxcbiNsaXN0LW1ha2VyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLmxpc3QtY2FyZHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcbn1cXG5cXG4ubGlzdC1jYXJkIGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4gLTEpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZTBiO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4rMSl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGZjAwNmU7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0bil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGYjU2MDc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuKzIpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMzOGVjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9ue1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24gaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4vKiB0YXNrIGludGVyICovXFxuI3Rhc2staW50ZXJmYWNle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2staW50ZXJmYWNlLWhlYWRlcntcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5saXN0LXBhZ2V7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1JTsgXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcbn1cXG5cXG4udG8tZG8tbGlzdHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuXFxuXFxuLml0ZW0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyIDFmciA1MHB4IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi50YXNrLWR1ZXtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRhc2stdmlldy1idG4gaW1nLFxcbi50YXNrLWRlbGV0ZS1idG4gaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmaWx0ZXI6b3BhY2l0eSg1MCUpO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnRuLFxcbi50YXNrLXZpZXctYnRue1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7IFxcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5hZGQtdGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnJlbW92ZS1maW5pc2hlZC1idG57XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAxMTAsIDAuMik7XFxufVxcblxcbi5wcmlvcml0eS1tZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDg2LCA3LCAwLjIpO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDExLCAwLjIpO1xcbn1cXG5cXG4vKiBhZGQgdGFzayAmIHZpZXcgZm9ybSAqL1xcbi52aWV3LWZvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIHJpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGFzay10aXRsZXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJt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QXNDO0FBQzFDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixRQUFRO0lBQ1IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tZm9ybS12aXNpYmlsaXR5OiBibG9jazsgXFxufVxcblxcbmh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuI2xpc3QtaW50ZXJmYWNle1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICB3aWR0aDogNTAlOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMjAwcHg7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuICNsaXN0LW1ha2Vye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59IFxcblxcbi5hZGQtbGlzdC1pbWd7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4jYWRkLWxpc3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmxpc3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jbG9zZS1idG4ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlcjpub25lO1xcbn1cXG5cXG5idXR0b25bdHlwZT1zdWJtaXRde1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuW2NsYXNzIF49ICdsaXN0LWNhcmQnXSxcXG4jbGlzdC1tYWtlciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcblxcbi5saXN0LWNhcmR7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXG59XFxuXFxuLmxpc3QtY2FyZCBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuIC0xKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmUwYjtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuKzEpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRmYwMDZlO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRmI1NjA3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0bisyKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMzhlYztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogdGFzayBpbnRlciAqL1xcbiN0YXNrLWludGVyZmFjZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWludGVyZmFjZS1oZWFkZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubGlzdC1wYWdle1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNSU7IFxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXG59XFxuXFxuLnRvLWRvLWxpc3R7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcblxcblxcbi5pdGVtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciAxZnIgNTBweCA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4udGFzay1kdWV7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50YXNrLXZpZXctYnRuIGltZyxcXG4udGFzay1kZWxldGUtYnRuIGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmlsdGVyOm9wYWNpdHkoNTAlKTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ0bixcXG4udGFzay12aWV3LWJ0bntcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyBcXG4gICAgcGFkZGluZzogMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yZW1vdmUtZmluaXNoZWQtYnRue1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMTEwLCAwLjIpO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCA4NiwgNywgMC4yKTtcXG59XFxuXFxuLnByaW9yaXR5LWxvd3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCAxMSwgMC4yKTtcXG59XFxuXFxuLyogYWRkIHRhc2sgJiB2aWV3IGZvcm0gKi9cXG4udmlldy1mb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMjAlO1xcbiAgICByaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI3Rhc2stdGl0bGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYywgZ2V0T3ZlcmxhcHBpbmdEYXlzSW5JbnRlcnZhbHMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnXG5pbXBvcnQgKiBhcyBhZGRMaXN0IGZyb20gJy4vYWRkLWxpc3QnXG5pbXBvcnQgKiBhcyBhZGRUYXNrIGZyb20gJy4vYWRkLXRhc2snXG5pbXBvcnQgKiBhcyBET01Gb3JtIGZyb20gJy4vRE9NLXRhc2tmb3JtJ1xuaW1wb3J0ICogYXMgRE9NVEkgZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSdcbmltcG9ydCByZW1vdmVJbWcgZnJvbSAnLi9pY29ucy90cmFzaC1jYW4tb3V0bGluZS5zdmcnXG5cbmZ1bmN0aW9uIG1ha2UoZWxlbWVudCwgcGFyZW50LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7IFxuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyBcbiAgICByZXR1cm4gbmV3RWxlbWVudDsgXG59OyBcblxuZnVuY3Rpb24gYWRkTGlzdEJ0bigpIHtcbiAgICBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtbWFrZXInKTsgXG4gICAgY29uc3QgYWRkTGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QtZm9ybScpO1xuICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZExpc3RGb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTsgXG4gICAgfSk7XG4gICAgYWRkTGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGFkZExpc3RGb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuICAgICAgICBhZGRMaXN0LmFkZChldmVudC50YXJnZXQpO1xuICAgICAgICBtYWtlTGlzdENhcmQoKTsgXG4gICAgICAgIGxpc3RDYXJkTGlzdGVuZXIoKTsgXG4gICAgfSk7XG4gICAgRE9NRm9ybS5jbG9zZUJ0bkxpc3RlbmVyKCk7ICBcbn07IFxuXG4vL3NwbGl0IGFwYXJ0XG5mdW5jdGlvbiBtYWtlTGlzdENhcmQoKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhZGRMaXN0LmFsbExpc3RzW2FkZExpc3QuYWxsTGlzdHMubGVuZ3RoIC0gMV07IFxuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtaW50ZXJmYWNlJyk7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBtYWtlKCdkaXYnLCBsaXN0Q29udGFpbmVyLCBgbGlzdC1jYXJkYCk7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGBjb2RlJHthZGRMaXN0LmFsbExpc3RzLmxlbmd0aCAtIDF9YCk7XG4gICAgICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBtYWtlKCdkaXYnLCBjYXJkLCBudWxsKTtcbiAgICAgICAgY2FyZEhlYWRlci50ZXh0Q29udGVudCA9IGluZGV4LnRpdGxlOyBcblxuICAgICAgICBtYWtlKCdkaXYnLCBjYXJkLCAnY2FyZEl0ZW1Db3VudCcpO1xuICAgICAgICBtYWtlKCdkaXYnLCBjYXJkLCAnY2FyZEZpbmlzaGVkQ291bnQnKTsgXG4gICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IG1ha2UoJ2RpdicsIGNhcmQsIG51bGwpO1xuICAgICAgICBjYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpbmRleC5kZXNjcmlwdGlvbjsgXG4gICAgICAgIHVwZGF0ZUNhcmRUZXh0KCk7XG5cbiAgICAgICAgaWYoYWRkTGlzdC5hbGxMaXN0cy5sZW5ndGggIT09IDEpe1xuICAgICAgICAgICAgcmVtb3ZlQnRuKGNhcmQpO1xuICAgICAgICB9XG59OyBcblxuZnVuY3Rpb24gbWFrZUluaXRpYWxDYXJkcygpe1xuICAgIGFkZExpc3QuYWxsTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtaW50ZXJmYWNlJyk7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBtYWtlKCdkaXYnLCBsaXN0Q29udGFpbmVyLCBgbGlzdC1jYXJkYCk7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGBjb2RlJHthZGRMaXN0LmFsbExpc3RzLmluZGV4T2YobGlzdCl9YCk7XG4gICAgICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBtYWtlKCdkaXYnLCBjYXJkLCBudWxsKTtcbiAgICAgICAgY2FyZEhlYWRlci50ZXh0Q29udGVudCA9IGxpc3QudGl0bGU7IFxuXG4gICAgICAgIG1ha2UoJ2RpdicsIGNhcmQsICdjYXJkSXRlbUNvdW50Jyk7XG4gICAgICAgIG1ha2UoJ2RpdicsIGNhcmQsICdjYXJkRmluaXNoZWRDb3VudCcpOyBcbiAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gbWFrZSgnZGl2JywgY2FyZCwgbnVsbCk7XG4gICAgICAgIGNhcmREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGxpc3QuZGVzY3JpcHRpb247IFxuICAgICAgICB1cGRhdGVDYXJkVGV4dCgpO1xuICAgICAgICBpZihhZGRMaXN0LmFsbExpc3RzLmluZGV4T2YobGlzdCkgIT09IDApe1xuICAgICAgICAgICAgcmVtb3ZlQnRuKGNhcmQpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcmRUZXh0KCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jYXJkJyk7IFxuXG4gICAgY2FyZC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkSXRlbUNvdW50Jyk7XG4gICAgICAgIGNvbnN0IGZJdGVtQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZEZpbmlzaGVkQ291bnQnKTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGZpbmRMaXN0KGNhcmQpOyBcblxuICAgICAgICBsZXQgaXRlbURpdjtcbiAgICAgICAgbGV0IGZJdGVtRGl2OyBcblxuICAgICAgICBpdGVtQ291bnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50Tm9kZSA9PSBjYXJkKXtcbiAgICAgICAgICAgICAgICBpdGVtRGl2ID0gaXRlbTsgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTsgXG5cbiAgICAgICAgZkl0ZW1Db3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnROb2RlID09IGNhcmQpe1xuICAgICAgICAgICAgICAgIGZJdGVtRGl2ID0gaXRlbTsgXG4gICAgICAgICAgICB9OyBcbiAgICAgICAgfSk7IFxuICAgICAgICBpdGVtRGl2LnRleHRDb250ZW50ID0gYCR7bGlzdC50YXNrTGlzdC5sZW5ndGh9IFRhc2tzYFxuICAgICAgICBmSXRlbURpdi50ZXh0Q29udGVudCA9IGAke2xpc3QuZmluaXNoZWRUYXNrcy5sZW5ndGh9IEZpbmlzaGVkIFRhc2tzYFxuICAgIH0pOyBcbn07XG5cbmZ1bmN0aW9uIGxpc3RDYXJkTGlzdGVuZXIoKXtcbiAgICBjb25zdCBjYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWNhcmQnKTtcbiAgICBjYXJkTGlzdFtjYXJkTGlzdC5sZW5ndGgtMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTVRJLnJlcGxhY2VQYWdlKGNhcmRMaXN0W2NhcmRMaXN0Lmxlbmd0aC0xXSlcbiAgICB9KTsgXG59O1xuXG5mdW5jdGlvbiBpbml0aWFsQ2FyZExpc3RlbmVyKCl7XG4gICAgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jYXJkJyk7XG4gICAgY29uc29sZS5sb2coY2FyZExpc3QpO1xuICAgIGNhcmRMaXN0LmZvckVhY2goKGNhcmQpID0+IGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmQpOyBcbiAgICAgICAgRE9NVEkucmVwbGFjZVBhZ2UoY2FyZCk7IFxuICAgIH0pKVxufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJ0bihwYXJlbnQpe1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IG1ha2UoJ2J1dHRvbicsIHBhcmVudCwgJ3JlbW92ZS1idXR0b24nKTtcbiAgICBtYWtlKCdpbWcnLCByZW1vdmVCdG4sIG51bGwpLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVtb3ZlSW1nIClcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IFxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKGZpbmRMaXN0KHBhcmVudCksIGFkZExpc3QuYWxsTGlzdHMpO1xuICAgICAgICBhZGRMaXN0LmNoYW5nZUFsbExpc3QobmV3QXJyYXkpOyBcbiAgICAgICAgYWRkTGlzdC50ZXN0KCk7XG4gICAgICAgIGNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpXG4gICAgICAgIGlmKGxpc3RQYWdlKXtcbiAgICAgICAgICAgIGxpc3RQYWdlLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7IFxuICAgIH0pO1xufTtcblxuLy9tb3ZlIHRvIGFkZC1saXN0XG5mdW5jdGlvbiBmaW5kTGlzdChjYXJkKXsgXG4gICAgY29uc3QgY2FyZENvZGUgPSBjYXJkLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKS52YWx1ZTtcbiAgICBjb25zdCBsaXN0ID0gYWRkTGlzdC5hbGxMaXN0cy5maW5kKGxpc3QgPT4gbGlzdC5jb2RlID09IGNhcmRDb2RlKTsgXG4gICAgcmV0dXJuIGxpc3Q7IFxufTtcblxuZXhwb3J0IHsgYWRkTGlzdEJ0biwgbGlzdENhcmRMaXN0ZW5lciwgbWFrZSwgdXBkYXRlQ2FyZFRleHQsIG1ha2VMaXN0Q2FyZCwgZmluZExpc3QsIG1ha2VJbml0aWFsQ2FyZHMsIGluaXRpYWxDYXJkTGlzdGVuZXIgfVxuXG5cbiIsImltcG9ydCAqIGFzIGFkZExpc3QgZnJvbSAnLi9hZGQtbGlzdCdcbmltcG9ydCAqIGFzIGFkZFRhc2sgZnJvbSAnLi9hZGQtdGFzaydcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTS1saXN0aW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NVEkgZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSdcblxuZnVuY3Rpb24gbWFrZUZvcm1FbGVtZW50cyhlbGVtZW50LCBwYXJlbnQsIHR5cGUsIG5hbWUsIGlkKXtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7IFxuICAgIC8vbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IFxuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfWApO1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7bmFtZX1gKTsgXG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0eXBlfWApXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7IFxufTsgXG5cbmZ1bmN0aW9uIGFkZEZvcm1MYWJlbHMocGFyZW50LCBpZCwgdGV4dCl7XG4gICAgY29uc3QgdGFza0RhdGVMYWJlbCA9IERPTS5tYWtlKCdsYWJlbCcsIHBhcmVudCwgbnVsbClcbiAgICB0YXNrRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuICAgIHRhc2tEYXRlTGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xufTsgXG5cbmZ1bmN0aW9uIG1ha2VGb3JtRHJvcGRvd25zKGRhdGEsIHBhcmVudCwgdHlwZSl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgbGlzdE9wdGlvbnMgPSBET00ubWFrZSgnb3B0aW9uJywgcGFyZW50LCBgJHt0eXBlfS1kcm9wZG93bmApO1xuICAgICAgICBpZiAoZGF0YSA9PSBhZGRMaXN0LmFsbExpc3RzKXtcbiAgICAgICAgICAgIGxpc3RPcHRpb25zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhW2ldLnRpdGxlKTtcbiAgICAgICAgICAgIGxpc3RPcHRpb25zLnRleHRDb250ZW50ID0gZGF0YVtpXS50aXRsZTsgXG4gICAgICAgICAgICBpZiAoZGF0YVtpXS50aXRsZSA9PSBhdXRvUGlja0xpc3QoKSl7XG4gICAgICAgICAgICAgICAgbGlzdE9wdGlvbnMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGFbaV0pO1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMudGV4dENvbnRlbnQgPSBkYXRhW2ldOyBcbiAgICAgICAgfTsgXG4gICAgfTtcbn07IFxuXG5mdW5jdGlvbiBtYWtlRm9ybSgpe1xuICAgIGNvbnN0IGNvbnRlbnRXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHZpZXdGb3JtID0gRE9NLm1ha2UoJ2Zvcm0nLCBjb250ZW50V2luZG93LCAndmlldy1mb3JtJyk7IFxuICAgIHZpZXdGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2stZm9ybScpOyBcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIHZpZXdGb3JtLCAnZm9ybS1jbG9zZS1idG4nKTtcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBjbG9zZUJ0bkxpc3RlbmVyKCk7IFxuICAgIFxuXG4gICAgRE9NLm1ha2UoJ2xhYmVsJywgdmlld0Zvcm0sIG51bGwpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stdGl0bGUnKTsgXG4gICAgY29uc3QgdGFza1RpdGxlID0gbWFrZUZvcm1FbGVtZW50cygnaW5wdXQnLCB2aWV3Rm9ybSwgJ3RleHQnLCAndGFzay10aXRsZScsICd0YXNrLXRpdGxlJyk7IFxuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgTmFtZS4uLicpXG5cbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1saXN0JywgJ0xpc3Q6Jyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBET00ubWFrZSgnc2VsZWN0Jywgdmlld0Zvcm0sIG51bGwpXG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWxpc3QnKTsgXG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stbGlzdCcpOyBcbiAgICBtYWtlRm9ybURyb3Bkb3ducyhhZGRMaXN0LmFsbExpc3RzLCB0YXNrTGlzdCwgJ2xpc3QnKTtcbiAgICBjb25zb2xlLmxvZyhhdXRvUGlja0xpc3QoKSlcbiAgICBcbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1kYXRlJywgJ0R1ZSBEYXRlOicpO1xuICAgIG1ha2VGb3JtRWxlbWVudHMoJ2lucHV0Jywgdmlld0Zvcm0sICdkYXRlJywgJ3Rhc2stZGF0ZScsICd0YXNrLWRhdGUnKTsgXG4gICAgXG4gICAgYWRkRm9ybUxhYmVscyh2aWV3Rm9ybSwgJ3Rhc2stbGlzdCcsICdQcmlvcml0eTonKTtcbiAgICBsZXQgcHJpb3JpdGllcyA9IFsnLS0nLCAnSGlnaCcsICdNZWRpdW0nLCAnTG93J107XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gRE9NLm1ha2UoJ3NlbGVjdCcsIHZpZXdGb3JtLCBudWxsKTtcbiAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXByaW9yaXR5Jyk7IFxuICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1wcmlvcml0eScpOyBcbiAgICBtYWtlRm9ybURyb3Bkb3ducyhwcmlvcml0aWVzLCB0YXNrUHJpb3JpdHksICdwcmlvcml0eScpOyBcbiAgICBcbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1kZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbjonKVxuICAgIGNvbnN0IHRhc2tEZXNjcmlwID0gRE9NLm1ha2UoJ3RleHRhcmVhJywgdmlld0Zvcm0sIG51bGwpO1xuICAgIHRhc2tEZXNjcmlwLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCdjb2xzJywgMzApO1xuICAgIHRhc2tEZXNjcmlwLnNldEF0dHJpYnV0ZSgncm93cycsIDQpOyBcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBET00ubWFrZSgnYnV0dG9uJywgdmlld0Zvcm0sICd2aWV3LWZvcm0tc3VibWl0Jyk7IFxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7IFxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG59O1xuXG5mdW5jdGlvbiByZW1vdmVGb3JtKCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1mb3JtJyk7IFxuICAgIGlmKGZvcm0pe1xuICAgIGZvcm0ucmVtb3ZlKCk7IFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBhZGRUYXNrTGlzdGVuZXIoKXtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1mb3JtJyk7IFxuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7IFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICAgICAgICBpZiAoYWRkVGFzay52YWxpZGF0ZVRhc2tOYW1lKGV2ZW50LnRhcmdldCkgPT0gdHJ1ZSkge1xuICAgICAgICBhZGRUYXNrLmFkZFQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RQYWdlKTsgXG4gICAgICAgIERPTVRJLnJlcGxhY2VQYWdlKGxpc3RQYWdlKTsgXG4gICAgICAgIERPTS51cGRhdGVDYXJkVGV4dCgpOyBcbiAgICAgICAgcmVtb3ZlRm9ybSgpOyBcbiAgICAgICAgfTtcbiAgICB9KTsgXG59OyBcblxuZnVuY3Rpb24gYXV0b1BpY2tMaXN0KCl7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICBjb25zdCBsaXN0ID0gRE9NLmZpbmRMaXN0KHBhZ2UpO1xuICAgIHJldHVybiBsaXN0LnRpdGxlOyBcbn07XG5cbmZ1bmN0aW9uIHZpZXdGb3JtKHRhc2spe1xuICAgIHNldEV4aXN0aW5nVmFsdWVzKCcjdGFzay10aXRsZScsIHRhc2sudGl0bGUpO1xuICAgIHNldEV4aXN0aW5nVmFsdWVzKCcjdGFzay1saXN0JywgdGFzay5wYXJlbnRMaXN0KTsgXG4gICAgc2V0RXhpc3RpbmdWYWx1ZXMoJyN0YXNrLWRhdGUnLCB0YXNrLmR1ZURhdGUpOyBcbiAgICBzZXRFeGlzdGluZ1ZhbHVlcygnI3Rhc2stcHJpb3JpdHknLCB0YXNrLnByaW9yaXR5KTsgXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpOyBcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247IFxufTtcblxuZnVuY3Rpb24gc2V0RXhpc3RpbmdWYWx1ZXMoaWQsIHZhbHVlKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7IFxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3ZhbHVlfWApXG59O1xuXG5mdW5jdGlvbiB2aWV3Rm9ybUxpc3RlbmVyKHRhc2spe1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTtcbiAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBhZGRMaXN0LmdldERhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc29sZS5sb2codGFzay50aXRsZSk7XG4gICAgICAgIHRhc2sudGl0bGUgPSBmb3JtWzBdOyBcbiAgICAgICAgdGFzay5wYXJlbnRMaXN0ID0gZm9ybVsxXTtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gZm9ybVsyXTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IGZvcm1bM107XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBmb3JtWzRdOyBcbiAgICAgICAgYWRkTGlzdC50ZXN0KCk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTsgXG5cbiAgICAgICAgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jYXJkJyk7XG4gICAgICAgIERPTVRJLnJlcGxhY2VQYWdlKGNhcmRMaXN0W2NhcmRMaXN0Lmxlbmd0aC0xXSk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBjbG9zZUJ0bkxpc3RlbmVyKCl7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jbG9zZS1idG4nKTtcbiAgICBjb25zdCBhZGRMaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbGlzdC1mb3JtJyk7XG4gICAgY2xvc2VCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbi5wYXJlbnRFbGVtZW50KTsgXG4gICAgICAgIGlmIChidXR0b24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGVOb2RlKCdpZCcpLnZhbHVlICE9PSAnYWRkLXRhc2stZm9ybScgKXtcbiAgICAgICAgICAgIGFkZExpc3RGb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgcmVtb3ZlRm9ybSgpOyBcbiAgICAgICAgfTtcbiAgICB9KSk7XG59O1xuLy8gaWYgKGJ1dHRvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZU5vZGUoJ2lkJykudmFsdWUgIT09ICdhZGQtdGFzay1mb3JtJyApe1xuLy8gICAgIGFkZExpc3RGb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuICAgIFxuLy8gfSBlbHNlIHtcbi8vICAgICAgcmVtb3ZlRm9ybSgpOyBcbi8vIH07XG5cblxuXG5cbmV4cG9ydCB7IG1ha2VGb3JtLCByZW1vdmVGb3JtLCBhZGRUYXNrTGlzdGVuZXIsIHZpZXdGb3JtLCB2aWV3Rm9ybUxpc3RlbmVyLCBjbG9zZUJ0bkxpc3RlbmVyIH1cblxuIiwiaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NVGFzayBmcm9tICcuL0RPTS10YXNrcydcbmltcG9ydCAqIGFzIERPTUZvcm0gZnJvbSAnLi9ET00tdGFza2Zvcm0nXG5cbmZ1bmN0aW9uIHJlcGxhY2VQYWdlKGNhcmQpIHtcbiAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWludGVyZmFjZScpO1xuICAgIGNvbnN0IHByZXNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgY29uc3QgZXhpc3RpbmdEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWRyb3Bkb3duJyk7IFxuXG4gICAgaWYgKGxpc3RQYWdlLmxhc3RFbGVtZW50Q2hpbGQgPT0gcHJlc2VudCl7XG4gICAgICAgIGxpc3RQYWdlLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7IFxuICAgICAgICBleGlzdGluZ0Ryb3Bkb3duLmZvckVhY2goKGRyb3Bkb3duKSA9PiBkcm9wZG93bi5yZW1vdmUoKSk7IFxuICAgIH07IFxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZvcm0nKSl7XG4gICAgICAgIERPTUZvcm0ucmVtb3ZlRm9ybSgpOyBcbiAgICB9OyBcblxuICAgIG1ha2VQYWdlKGNhcmQpO1xuICAgIGFkZFRhc2tCdG4oKTsgXG4gICAgRE9NVGFzay5hZGRSZW1vdmVBbGxCdG4oKTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VQYWdlKGNhcmQpe1xuICAgIGNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staW50ZXJmYWNlJyk7XG4gICAgY29uc3QgcGFnZSA9IERPTS5tYWtlKCdkaXYnLCBsaXN0UGFnZSwgJ2xpc3QtcGFnZScpOyBcblxuICAgIGNvbnNvbGUubG9nKCdtYWtlIG5ldycpXG4gICAgY29uc3QgbGlzdEluZm8gPSBET00uZmluZExpc3QoY2FyZCk7IFxuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsIGAke2xpc3RJbmZvLmNvZGV9YCk7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gRE9NLm1ha2UoJ2RpdicsIHBhZ2UsICd0by1kby1saXN0Jyk7IFxuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IGxpc3RJbmZvLnRpdGxlOyBcbiAgICBET01UYXNrLm1ha2VMaXN0SXRlbXMobGlzdEluZm8pO1xufTtcblxuXG5mdW5jdGlvbiBhZGRUYXNrQnRuKCkge1xuICAgIGNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG5uID0gRE9NLm1ha2UoJ2J1dHRvbicsIGxpc3RQYWdlLCAnYWRkLXRhc2snKTtcbiAgICBhZGRUYXNrQnRubi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVGFza1wiO1xuXG4gICAgYWRkVGFza0J0bm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTUZvcm0ubWFrZUZvcm0oKTsgXG4gICAgICAgIERPTUZvcm0uYWRkVGFza0xpc3RlbmVyKCk7IFxuICAgIH0pOyBcbn07XG5cblxuXG5cblxuXG5leHBvcnQgeyByZXBsYWNlUGFnZSB9IiwiaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NRm9ybSBmcm9tICcuL0RPTS10YXNrZm9ybSdcbmltcG9ydCByZW1vdmVJbWcgZnJvbSAnLi9pY29ucy90cmFzaC1jYW4tb3V0bGluZS5zdmcnXG5pbXBvcnQgdmlld0ltZyBmcm9tICcuL2ljb25zL2V5ZS5zdmcnXG5cbmZ1bmN0aW9uIG1ha2VMaXN0SXRlbXMocGFyZW50TGlzdCl7XG4gICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpOyBcbiAgICBjb25zdCB0YXNrTGlzdCA9IERPTS5tYWtlKCdkaXYnLCBwYXJlbnRDb250YWluZXIsICdsaXN0Jyk7XG4gICAgY29uc3QgIGxpc3QgPSBwYXJlbnRMaXN0LnRhc2tMaXN0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbXNDb250YWluZXIgPSBET00ubWFrZSgnZGl2JywgdGFza0xpc3QsICdpdGVtLWNvbnRhaW5lcicpOyBcbiAgICAgICAgaXRlbXNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBsaXN0LWl0ZW0ke2l9YCk7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gRE9NLm1ha2UoJ2lucHV0JywgaXRlbXNDb250YWluZXIsICdsaXN0LWl0ZW0nKTsgXG4gICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IERPTS5tYWtlKCdsYWJlbCcsIGl0ZW1zQ29udGFpbmVyLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpOyBcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCduYW1lJywgYGxpc3QtaXRlbSR7aX1gKTsgXG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7IFxuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGxpc3QtaXRlbSR7aX1gKTtcbiAgICAgICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCBgbGlzdC1pdGVtJHtpfWApO1xuICAgICAgICBpdGVtTGFiZWwudGV4dENvbnRlbnQgPSBsaXN0W2ldLnRpdGxlOyBcbiAgICAgICAgRE9NLm1ha2UoJ2RpdicsIGl0ZW1zQ29udGFpbmVyLCAndGFzay1kdWUnKS50ZXh0Q29udGVudCA9IGxpc3RbaV0uZHVlRGF0ZVxuICAgICAgICBjb25zdCB2aWV3QnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIGl0ZW1zQ29udGFpbmVyLCAndGFzay12aWV3LWJ0bicpXG4gICAgICAgIERPTS5tYWtlKCdpbWcnLCB2aWV3QnRuLCBudWxsKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZpZXdJbWcpXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IERPTS5tYWtlKCdidXR0b24nLCBpdGVtc0NvbnRhaW5lciwgJ3Rhc2stZGVsZXRlLWJ0bicpXG4gICAgICAgIERPTS5tYWtlKCdpbWcnLCByZW1vdmVCdG4sIG51bGwpLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVtb3ZlSW1nKTtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlDb2xvcnMobGlzdFtpXS5wcmlvcml0eSwgaXRlbUxhYmVsKTtcbiAgICAgICAgdmlld0l0ZW1zKGxpc3RbaV0pO1xuICAgICAgICByZW1vdmVUYXNrcyhpdGVtc0NvbnRhaW5lcik7IFxuICAgIH07XG4gICAgZmluaXNoVGFza0xpc3RlbmVyKCk7ICBcbn07XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5Q29sb3JzKGl0ZW1Qcmlvcml0eSwgaXRlbSl7XG4gICAgc3dpdGNoKGl0ZW1Qcmlvcml0eSl7XG4gICAgICAgIGNhc2UgKCdIaWdoJyk6IFxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbWVkJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdMb3cnOiBcbiAgICAgICAgICAgIGl0ZW0uIGNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdycpXG4gICAgICAgICAgICBicmVhazsgXG4gICAgfTsgXG59OyBcblxuZnVuY3Rpb24gdmlld0l0ZW1zKGl0ZW0pe1xuICAgIGNvbnN0IHZpZXdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdmlldy1idG4nKTsgXG4gICAgY29uc3Qgdmlld0J0biA9IHZpZXdCdG5zW3ZpZXdCdG5zLmxlbmd0aC0xXTsgXG4gICAgdmlld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIERPTUZvcm0ubWFrZUZvcm0oKTsgXG4gICAgICAgICAgICBET01Gb3JtLnZpZXdGb3JtKGl0ZW0pOyBcbiAgICAgICAgICAgIERPTUZvcm0udmlld0Zvcm1MaXN0ZW5lcihpdGVtKTsgXG4gICAgICAgIH0pOyBcbn07XG5cbmZ1bmN0aW9uIGZpbmlzaFRhc2tMaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpOyBcbiAgICBcbiAgICBjaGVja0JveC5mb3JFYWNoKChib3gpID0+IGJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudExpc3QgPSBib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBET00uZmluZExpc3QocGFyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUoYm94LmdldEF0dHJpYnV0ZSgnaWQnKSwgbGlzdC50YXNrTGlzdCk7XG5cbiAgICAgICAgaWYgKGJveC5jaGVja2VkKXtcbiAgICAgICAgICAgIGJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkLXRhc2snKTsgXG4gICAgICAgICAgICBsaXN0LnRhc2tMaXN0ID0gYWRkVGFzay5tb3ZlVGFza0Zyb20odGFzaywgbGlzdC50YXNrTGlzdCk7IFxuICAgICAgICAgICAgbGlzdC5maW5pc2hlZFRhc2tzID0gYWRkVGFzay5tb3ZlVGFza1RvKHRhc2ssIGxpc3QuZmluaXNoZWRUYXNrcyk7IFxuICAgICAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7XG4gICAgICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCFib3guY2hlY2tlZCl7IFxuICAgICAgICAgICAgY29uc3QgZlRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUoYm94LmdldEF0dHJpYnV0ZSgnaWQnKSwgbGlzdC5maW5pc2hlZFRhc2tzKTtcbiAgICAgICAgICAgIGxpc3QuZmluaXNoZWRUYXNrcyA9IGFkZFRhc2subW92ZVRhc2tGcm9tKGZUYXNrLCBsaXN0LmZpbmlzaGVkVGFza3MpOyBcbiAgICAgICAgICAgIGxpc3QudGFza0xpc3QgPSBhZGRUYXNrLm1vdmVUYXNrVG8oZlRhc2ssIGxpc3QudGFza0xpc3QpOyBcbiAgICAgICAgICAgIERPTS51cGRhdGVDYXJkVGV4dCgpOyBcbiAgICAgICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICApKTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tzKHRhc2tDb250YWluZXIpe1xuICAgIGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kZWxldGUtYnRuJyk7IFxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IHJlbW92ZUJ0bnNbcmVtb3ZlQnRucy5sZW5ndGgtMV07XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRMaXN0ID0gdGFza0NvbnRhaW5lci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBET00uZmluZExpc3QocGFyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUodGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2lkJyksIGxpc3QudGFza0xpc3QpO1xuICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKHRhc2ssIGxpc3QudGFza0xpc3QpO1xuICAgICAgICBsaXN0LnRhc2tMaXN0ID0gbmV3QXJyYXk7IFxuICAgICAgICBjb25zb2xlLmxvZyhuZXdBcnJheSk7IFxuICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBET00udXBkYXRlQ2FyZFRleHQoKTsgXG4gICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgIH0pOyBcbn07IFxuXG5mdW5jdGlvbiBhZGRSZW1vdmVBbGxCdG4oKXtcbiAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICBjb25zdCByZW1vdmVUYXNrQnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIGxpc3RQYWdlLCAncmVtb3ZlLWZpbmlzaGVkLWJ0bicpO1xuICAgIHJlbW92ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnLSBSZW1vdmUgQWxsIEZpbmlzaGVkIFRhc2tzJzsgXG5cbiAgICByZW1vdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maW5pc2hlZC10YXNrJyk7IFxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRMaXN0ID0gdGFzay5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRMaXN0KTsgXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gRE9NLmZpbmRMaXN0KHBhcmVudExpc3QpO1xuICAgICAgICAgICAgY29uc3QgdGFza09iaiA9IGFkZExpc3QuZmluZE1hdGNoQ29kZSh0YXNrLmdldEF0dHJpYnV0ZSgnaWQnKSwgbGlzdC50YXNrTGlzdCk7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKHRhc2tPYmosIGxpc3QudGFza0xpc3QpO1xuICAgICAgICAgICAgbGlzdC50YXNrTGlzdCA9IG5ld0FycmF5OyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QudGFza0xpc3QpOyBcbiAgICAgICAgICAgIHRhc2sucmVtb3ZlKCk7IFxuICAgICAgICB9KTtcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICB9KTtcbn07XG5cblxuXG5cbmV4cG9ydCB7IG1ha2VMaXN0SXRlbXMsIGFkZFJlbW92ZUFsbEJ0biB9IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cydcblxubGV0IGFsbExpc3RzID0gW107IFxuXG5mdW5jdGlvbiB0ZXN0KCl7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkoYWxsTGlzdHMpKTtcbn07IFxuXG5mdW5jdGlvbiBnZXREYXRhKGZvcm0pe1xuICAgIGxldCB2YWx1ZXNBcnIgPSBbXTsgXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZm9ybURhdGEudmFsdWVzKCkpe1xuICAgICAgICB2YWx1ZXNBcnIucHVzaCh2YWx1ZSk7IFxuICAgIH07XG4gICAgcmV0dXJuIHZhbHVlc0FycjsgXG59O1xuXG5mdW5jdGlvbiBmaW5kTWF0Y2gobmFtZSwgbGlzdHMpIHtcbiAgICBjb25zdCBuYW1lcyA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LnRpdGxlID09IG5hbWUpOyBcbiAgICByZXR1cm4gbmFtZXM7IFxufTsgXG5cbmZ1bmN0aW9uIGZpbmRNYXRjaENvZGUobmFtZSwgbGlzdHMpIHtcbiAgICBjb25zdCBuYW1lcyA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmNvZGUgPT0gbmFtZSk7IFxuICAgIHJldHVybiBuYW1lczsgXG59OyBcblxuZnVuY3Rpb24gdGl0bGVOYW1lVmFsaWRhdGlvbih0aXRsZSl7XG4gICAgaWYodGl0bGUgPT0gJycpe1xuICAgICAgICByZXR1cm4gdGl0bGUgPSBgTGlzdCAke2FsbExpc3RzLmxlbmd0aH1gXG4gICAgfSBlbHNlIGlmKGZpbmRNYXRjaCh0aXRsZSwgYWxsTGlzdHMpKSB7XG4gICAgICAgIHJldHVybiB0aXRsZSA9IGAke3RpdGxlfSAoTGlzdCAke2FsbExpc3RzLmxlbmd0aH0pYFxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcbn07XG5cbmNvbnN0IG1ha2VMaXN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza0xpc3QsIGZpbmlzaGVkVGFza3MsIGNvZGUpID0+IHtcbiAgICB0aXRsZSA9IHRpdGxlTmFtZVZhbGlkYXRpb24odGl0bGUpO1xuICAgIHRhc2tMaXN0ID0gW107IFxuICAgIGZpbmlzaGVkVGFza3MgPSBbXTsgXG4gICAgY29kZSA9IGBjb2RlJHthbGxMaXN0cy5sZW5ndGh9YDtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tMaXN0LCBmaW5pc2hlZFRhc2tzLCBjb2RlIH1cbn07XG5cbmZ1bmN0aW9uIGFkZChmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGdldERhdGEoZm9ybSk7XG4gICAgY29uc3QgbGlzdCA9IG1ha2VMaXN0KGZvcm1EYXRhWzBdLCBmb3JtRGF0YVsxXSk7IFxuICAgIGFsbExpc3RzLnB1c2gobGlzdCk7IFxuICAgIHRlc3QoKTsgXG59O1xuXG5mdW5jdGlvbiBjaGFuZ2VBbGxMaXN0KGxpc3Qpe1xuICAgIGFsbExpc3RzID0gbGlzdDsgXG59OyBcblxuXG5leHBvcnQgeyB0ZXN0LCBtYWtlTGlzdCwgZ2V0RGF0YSwgYWRkLCBhbGxMaXN0cywgZmluZE1hdGNoLCBjaGFuZ2VBbGxMaXN0LCBmaW5kTWF0Y2hDb2RlIH0iLCJpbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnXG5pbXBvcnQgKiBhcyBhZGRMaXN0IGZyb20gJy4vYWRkLWxpc3QnXG5cblxuY29uc3QgbWFrZVRhc2sgPSAodGl0bGUsIHBhcmVudExpc3QsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgY29kZSApID0+IHtcbiAgICBjb25zdCBsaXN0ID0gYWRkTGlzdC5maW5kTWF0Y2gocGFyZW50TGlzdCwgYWRkTGlzdC5hbGxMaXN0cykudGFza0xpc3Q7XG4gICAgY29kZSA9IGBsaXN0LWl0ZW0ke2xpc3QubGVuZ3RofWA7IFxuICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KTtcbiAgICByZXR1cm4geyB0aXRsZSwgcGFyZW50TGlzdCwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBjb2RlIH1cbn07XG5cblxuZnVuY3Rpb24gYWRkVChmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGFkZExpc3QuZ2V0RGF0YShmb3JtKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YVszXSlcbiAgICBjb25zdCB0YXNrID0gbWFrZVRhc2soZm9ybURhdGFbMF0sIGZvcm1EYXRhWzFdLCBmb3JtRGF0YVsyXSwgZm9ybURhdGFbM10sIGZvcm1EYXRhWzRdKTsgXG4gICAgYWRkVGFza3RvTGlzdCh0YXNrKTtcbiAgICBhZGRMaXN0LnRlc3QoKTsgXG59O1xuXG5mdW5jdGlvbiBhZGRUYXNrdG9MaXN0KHRhc2spe1xuICAgIGNvbnN0IGFsbExpc3RzID0gYWRkTGlzdC5hbGxMaXN0cztcbiAgICBjb25zdCBwYXJlbnRMaXN0ID0gYWxsTGlzdHMuZmluZChsaXN0ID0+IGxpc3QudGl0bGUgPT0gdGFzay5wYXJlbnRMaXN0KTtcbiAgICBwYXJlbnRMaXN0LnRhc2tMaXN0LnB1c2godGFzayk7IFxuICAgIFxufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVUYXNrTmFtZShmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGFkZExpc3QuZ2V0RGF0YShmb3JtKTtcbiAgICBpZihmb3JtRGF0YVswXSA9PSAnJyl7XG4gICAgICAgIGFsZXJ0KFwiRW1wdHkgTmFtZVwiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNle1xuICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgfVxufTtcblxuZnVuY3Rpb24gbW92ZVRhc2tGcm9tKHRhc2ssIGluaXRpYWwpe1xuICAgIGNvbnN0IG5ld0luaXRpYWwgPSBpbml0aWFsLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhc2spO1xuICAgIGxldCBuZXdBcnJheTtcblxuICAgIGlmICghbmV3SW5pdGlhbCl7XG4gICAgICAgcmV0dXJuIG5ld0FycmF5ID0gW107IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXdBcnJheSA9IG5ld0luaXRpYWw7IFxuICAgIH1cbiAgIFxufTtcblxuZnVuY3Rpb24gbW92ZVRhc2tUbyh0YXNrLCBhcnJheSl7XG4gICAgYXJyYXkucHVzaCh0YXNrKTtcbiAgICByZXR1cm4gYXJyYXk7IFxufTsgXG5cbmZ1bmN0aW9uIGNoYW5nZUFsbExpc3QobGlzdCl7XG4gICAgYWRkTGlzdC5hbGxMaXN0cyA9IGxpc3Q7IFxufTsgXG5cblxuXG5leHBvcnQgeyBtYWtlVGFzaywgYWRkVCwgYWRkVGFza3RvTGlzdCwgdmFsaWRhdGVUYXNrTmFtZSwgbW92ZVRhc2tGcm9tLCBtb3ZlVGFza1RvIH1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cydcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTS1saXN0aW50ZXJmYWNlJ1xuaW1wb3J0IHsgYWxsTGlzdHMsIG1ha2VMaXN0LCBjaGFuZ2VBbGxMaXN0IH0gZnJvbSAnLi9hZGQtbGlzdCc7XG5cblxuLy9sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGlzdCcpXG5cbmZ1bmN0aW9uIGRlZmF1bHRMaXN0KCl7XG4gICAgY29uc3QgZGVmYXVsdExpc3QgPSBtYWtlTGlzdChcIkRlZmF1bHQgTGlzdFwiLCBcIlRoaXMgaXMgeW91ciBmaXJzdCBsaXN0IVwiKTtcbiAgICBhbGxMaXN0cy5wdXNoKGRlZmF1bHRMaXN0KTsgXG4gICAgRE9NLm1ha2VMaXN0Q2FyZCgpOyBcbiAgICBET00ubGlzdENhcmRMaXN0ZW5lcigpOyBcbn07XG5cblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKXtcbiAgICBjb25zb2xlLmxvZygnaGknKTtcbiAgICBET00uYWRkTGlzdEJ0bigpO1xuICAgIGRlZmF1bHRMaXN0KCk7IFxufSBlbHNlIHtcbiAgICBjaGFuZ2VBbGxMaXN0KEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpKTtcbiAgICBET00uYWRkTGlzdEJ0bigpO1xuICAgIERPTS5tYWtlSW5pdGlhbENhcmRzKCk7IFxuICAgIERPTS5pbml0aWFsQ2FyZExpc3RlbmVyKCk7IFxuXG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=