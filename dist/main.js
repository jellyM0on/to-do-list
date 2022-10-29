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
        _add_list__WEBPACK_IMPORTED_MODULE_1__.renew();
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
    cardList.forEach((card) => card.addEventListener('click', () => {
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

        const cardList = document.querySelector('.list-page');
        _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_3__.replacePage(cardList);
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
/* harmony export */   "addCurrentDate": () => (/* binding */ addCurrentDate),
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

function addCurrentDate(){
    const header = document.querySelector('.task-interface-header');
    const today = new Date();
    const dd = String(today.getDate()); 
    const mm = String(today.getMonth()+1);
    const y = today.getFullYear();
   
    header.textContent = `Today is ${mm}/${dd}/${y}`
}






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
        const fTask = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(box.getAttribute('id'), list.finishedTasks);

        if (box.checked){
            box.parentElement.classList.add('finished-task'); 
            list.taskList = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(task, list.taskList); 
            list.finishedTasks = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskTo(task, list.finishedTasks); 
            _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText();
            _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
        }
        else if(!box.checked){ 
            if(box.parentElement.classList.contains('finished-task')){
                box.parentElement.classList.remove('finished-task');
            };
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
        const parentList = document.querySelector('.list-page')
        const list = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(parentList);
        const task = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(taskContainer.getAttribute('id'), list.taskList);
        
        if (taskContainer.classList.contains('finished-task')){
            const fTask = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(taskContainer.getAttribute('id'), list.finishedTasks);
            const fnewArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(fTask, list.finishedTasks); 
            list.finishedTasks = fnewArray; 
            console.log(fnewArray); 
        } else {
            const newArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(task, list.taskList);
            list.taskList = newArray; 
        }
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
        const list = document.querySelector('.list-page');
        const parentList = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(list); 
        parentList.finishedTasks = []; 
        const tasks = document.querySelectorAll('.finished-task');
        tasks.forEach((task) => {
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
/* harmony export */   "renew": () => (/* binding */ renew),
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
        console.log(title); 
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

function renew(form){
    const formData = getData(form);
    formData[0] = ''; 
    formData[1] = '';
}

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
/* harmony import */ var _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-taskinterface */ "./src/DOM-taskinterface.js");
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");









//localStorage.removeItem('list')

_DOM_taskinterface__WEBPACK_IMPORTED_MODULE_2__.addCurrentDate()

function defaultList(){
    const defaultList = (0,_add_list__WEBPACK_IMPORTED_MODULE_3__.makeList)("Default List", "This is your first list!");
    _add_list__WEBPACK_IMPORTED_MODULE_3__.allLists.push(defaultList); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.makeListCard(); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.listCardListener(); 
};


if (!localStorage.getItem('list')){
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.addListBtn();
    defaultList(); 
} else {
    (0,_add_list__WEBPACK_IMPORTED_MODULE_3__.changeAllList)(JSON.parse(window.localStorage.getItem('list')));
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.addListBtn();
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.makeInitialCards(); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.initialCardListener(); 
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsSUFBSSwrQ0FBZ0I7QUFDcEI7Ozs7QUFJb0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RwRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ3lCO0FBQ1A7QUFDSTtBQUNFO0FBQ21CO0FBQ1Y7OztBQUdyRDs7QUFFQSw4REFBb0I7O0FBRXBCO0FBQ0Esd0JBQXdCLG1EQUFRO0FBQ2hDLElBQUksb0RBQWE7QUFDakIsSUFBSSw0REFBZ0I7QUFDcEIsSUFBSSxnRUFBb0I7QUFDeEI7OztBQUdBO0FBQ0EsSUFBSSwwREFBYztBQUNsQjtBQUNBLEVBQUU7QUFDRixJQUFJLHdEQUFhO0FBQ2pCLElBQUksMERBQWM7QUFDbEIsSUFBSSxnRUFBb0I7QUFDeEIsSUFBSSxtRUFBdUI7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00tbGlzdGludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00tdGFza2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tpbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZC1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb3JtLXZpc2liaWxpdHk6IGJsb2NrOyBcXG59XFxuXFxuaHRtbCwgYm9keSwgI2NvbnRlbnR7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5cXG4jbGlzdC1pbnRlcmZhY2V7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIHdpZHRoOiA1MCU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAyMDBweDtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4gI2xpc3QtbWFrZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn0gXFxuXFxuLmFkZC1saXN0LWltZ3tcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbiNhZGQtbGlzdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ubGlzdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5mb3JtLWNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyOm5vbmU7XFxufVxcblxcbmJ1dHRvblt0eXBlPXN1Ym1pdF17XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5bY2xhc3MgXj0gJ2xpc3QtY2FyZCddLFxcbiNsaXN0LW1ha2VyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLmxpc3QtY2FyZHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcbn1cXG5cXG4ubGlzdC1jYXJkIGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4gLTEpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZTBiO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4rMSl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGZjAwNmU7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0bil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGYjU2MDc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuKzIpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMzOGVjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9ue1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24gaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4vKiB0YXNrIGludGVyICovXFxuI3Rhc2staW50ZXJmYWNle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2staW50ZXJmYWNlLWhlYWRlcntcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5saXN0LXBhZ2V7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1JTsgXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcbn1cXG5cXG4udG8tZG8tbGlzdHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuXFxuXFxuLml0ZW0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyIDFmciA1MHB4IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi50YXNrLWR1ZXtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRhc2stdmlldy1idG4gaW1nLFxcbi50YXNrLWRlbGV0ZS1idG4gaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmaWx0ZXI6b3BhY2l0eSg1MCUpO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnRuLFxcbi50YXNrLXZpZXctYnRue1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7IFxcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5hZGQtdGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnJlbW92ZS1maW5pc2hlZC1idG57XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAxMTAsIDAuMik7XFxufVxcblxcbi5wcmlvcml0eS1tZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDg2LCA3LCAwLjIpO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDExLCAwLjIpO1xcbn1cXG5cXG4vKiBhZGQgdGFzayAmIHZpZXcgZm9ybSAqL1xcbi52aWV3LWZvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIHJpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGFzay10aXRsZXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7Q0FFQztJQUNHLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix1SEFBdUg7QUFDM0g7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBR0EsZUFBZTtBQUNmO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixRQUFRO0lBQ1IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tZm9ybS12aXNpYmlsaXR5OiBibG9jazsgXFxufVxcblxcbmh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuI2xpc3QtaW50ZXJmYWNle1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICB3aWR0aDogNTAlOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMjAwcHg7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuICNsaXN0LW1ha2Vye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59IFxcblxcbi5hZGQtbGlzdC1pbWd7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4jYWRkLWxpc3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmxpc3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jbG9zZS1idG4ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlcjpub25lO1xcbn1cXG5cXG5idXR0b25bdHlwZT1zdWJtaXRde1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuW2NsYXNzIF49ICdsaXN0LWNhcmQnXSxcXG4jbGlzdC1tYWtlciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcblxcbi5saXN0LWNhcmR7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXG59XFxuXFxuLmxpc3QtY2FyZCBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuIC0xKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmUwYjtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuKzEpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRmYwMDZlO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRmI1NjA3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0bisyKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMzhlYztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogdGFzayBpbnRlciAqL1xcbiN0YXNrLWludGVyZmFjZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWludGVyZmFjZS1oZWFkZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubGlzdC1wYWdle1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNSU7IFxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXG59XFxuXFxuLnRvLWRvLWxpc3R7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcblxcblxcbi5pdGVtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciAxZnIgNTBweCA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4udGFzay1kdWV7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50YXNrLXZpZXctYnRuIGltZyxcXG4udGFzay1kZWxldGUtYnRuIGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmlsdGVyOm9wYWNpdHkoNTAlKTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ0bixcXG4udGFzay12aWV3LWJ0bntcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyBcXG4gICAgcGFkZGluZzogMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yZW1vdmUtZmluaXNoZWQtYnRue1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMTEwLCAwLjIpO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCA4NiwgNywgMC4yKTtcXG59XFxuXFxuLnByaW9yaXR5LWxvd3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCAxMSwgMC4yKTtcXG59XFxuXFxuLyogYWRkIHRhc2sgJiB2aWV3IGZvcm0gKi9cXG4udmlldy1mb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMjAlO1xcbiAgICByaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI3Rhc2stdGl0bGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYywgZ2V0T3ZlcmxhcHBpbmdEYXlzSW5JbnRlcnZhbHMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnXG5pbXBvcnQgKiBhcyBhZGRMaXN0IGZyb20gJy4vYWRkLWxpc3QnXG5pbXBvcnQgKiBhcyBhZGRUYXNrIGZyb20gJy4vYWRkLXRhc2snXG5pbXBvcnQgKiBhcyBET01Gb3JtIGZyb20gJy4vRE9NLXRhc2tmb3JtJ1xuaW1wb3J0ICogYXMgRE9NVEkgZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSdcbmltcG9ydCByZW1vdmVJbWcgZnJvbSAnLi9pY29ucy90cmFzaC1jYW4tb3V0bGluZS5zdmcnXG5cbmZ1bmN0aW9uIG1ha2UoZWxlbWVudCwgcGFyZW50LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7IFxuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyBcbiAgICByZXR1cm4gbmV3RWxlbWVudDsgXG59OyBcblxuZnVuY3Rpb24gYWRkTGlzdEJ0bigpIHtcbiAgICBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtbWFrZXInKTsgXG4gICAgY29uc3QgYWRkTGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QtZm9ybScpO1xuICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZExpc3RGb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTsgXG4gICAgfSk7XG4gICAgYWRkTGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGFkZExpc3RGb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuICAgICAgICBhZGRMaXN0LmFkZChldmVudC50YXJnZXQpO1xuICAgICAgICBhZGRMaXN0LnJlbmV3KCk7XG4gICAgICAgIG1ha2VMaXN0Q2FyZCgpOyBcbiAgICAgICAgbGlzdENhcmRMaXN0ZW5lcigpOyBcbiAgICB9KTtcbiAgICBET01Gb3JtLmNsb3NlQnRuTGlzdGVuZXIoKTsgIFxufTsgXG5cbi8vc3BsaXQgYXBhcnRcbmZ1bmN0aW9uIG1ha2VMaXN0Q2FyZCgpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGFkZExpc3QuYWxsTGlzdHNbYWRkTGlzdC5hbGxMaXN0cy5sZW5ndGggLSAxXTsgXG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1pbnRlcmZhY2UnKTtcbiAgICAgICAgY29uc3QgY2FyZCA9IG1ha2UoJ2RpdicsIGxpc3RDb250YWluZXIsIGBsaXN0LWNhcmRgKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNvZGUke2FkZExpc3QuYWxsTGlzdHMubGVuZ3RoIC0gMX1gKTtcbiAgICAgICAgY29uc3QgY2FyZEhlYWRlciA9IG1ha2UoJ2RpdicsIGNhcmQsIG51bGwpO1xuICAgICAgICBjYXJkSGVhZGVyLnRleHRDb250ZW50ID0gaW5kZXgudGl0bGU7IFxuXG4gICAgICAgIG1ha2UoJ2RpdicsIGNhcmQsICdjYXJkSXRlbUNvdW50Jyk7XG4gICAgICAgIG1ha2UoJ2RpdicsIGNhcmQsICdjYXJkRmluaXNoZWRDb3VudCcpOyBcbiAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gbWFrZSgnZGl2JywgY2FyZCwgbnVsbCk7XG4gICAgICAgIGNhcmREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGluZGV4LmRlc2NyaXB0aW9uOyBcbiAgICAgICAgdXBkYXRlQ2FyZFRleHQoKTtcblxuICAgICAgICBpZihhZGRMaXN0LmFsbExpc3RzLmxlbmd0aCAhPT0gMSl7XG4gICAgICAgICAgICByZW1vdmVCdG4oY2FyZCk7XG4gICAgICAgIH1cbn07IFxuXG5mdW5jdGlvbiBtYWtlSW5pdGlhbENhcmRzKCl7XG4gICAgYWRkTGlzdC5hbGxMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1pbnRlcmZhY2UnKTtcbiAgICAgICAgY29uc3QgY2FyZCA9IG1ha2UoJ2RpdicsIGxpc3RDb250YWluZXIsIGBsaXN0LWNhcmRgKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNvZGUke2FkZExpc3QuYWxsTGlzdHMuaW5kZXhPZihsaXN0KX1gKTtcbiAgICAgICAgY29uc3QgY2FyZEhlYWRlciA9IG1ha2UoJ2RpdicsIGNhcmQsIG51bGwpO1xuICAgICAgICBjYXJkSGVhZGVyLnRleHRDb250ZW50ID0gbGlzdC50aXRsZTsgXG5cbiAgICAgICAgbWFrZSgnZGl2JywgY2FyZCwgJ2NhcmRJdGVtQ291bnQnKTtcbiAgICAgICAgbWFrZSgnZGl2JywgY2FyZCwgJ2NhcmRGaW5pc2hlZENvdW50Jyk7IFxuICAgICAgIFxuICAgICAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBtYWtlKCdkaXYnLCBjYXJkLCBudWxsKTtcbiAgICAgICAgY2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbGlzdC5kZXNjcmlwdGlvbjsgXG4gICAgICAgIHVwZGF0ZUNhcmRUZXh0KCk7XG4gICAgICAgIGlmKGFkZExpc3QuYWxsTGlzdHMuaW5kZXhPZihsaXN0KSAhPT0gMCl7XG4gICAgICAgICAgICByZW1vdmVCdG4oY2FyZCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlQ2FyZFRleHQoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWNhcmQnKTsgXG5cbiAgICBjYXJkLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRJdGVtQ291bnQnKTtcbiAgICAgICAgY29uc3QgZkl0ZW1Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkRmluaXNoZWRDb3VudCcpO1xuICAgICAgICBjb25zdCBsaXN0ID0gZmluZExpc3QoY2FyZCk7IFxuXG4gICAgICAgIGxldCBpdGVtRGl2O1xuICAgICAgICBsZXQgZkl0ZW1EaXY7IFxuXG4gICAgICAgIGl0ZW1Db3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnROb2RlID09IGNhcmQpe1xuICAgICAgICAgICAgICAgIGl0ZW1EaXYgPSBpdGVtOyBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pOyBcblxuICAgICAgICBmSXRlbUNvdW50LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudE5vZGUgPT0gY2FyZCl7XG4gICAgICAgICAgICAgICAgZkl0ZW1EaXYgPSBpdGVtOyBcbiAgICAgICAgICAgIH07IFxuICAgICAgICB9KTsgXG4gICAgICAgIGl0ZW1EaXYudGV4dENvbnRlbnQgPSBgJHtsaXN0LnRhc2tMaXN0Lmxlbmd0aH0gVGFza3NgXG4gICAgICAgIGZJdGVtRGl2LnRleHRDb250ZW50ID0gYCR7bGlzdC5maW5pc2hlZFRhc2tzLmxlbmd0aH0gRmluaXNoZWQgVGFza3NgXG4gICAgfSk7IFxufTtcblxuZnVuY3Rpb24gbGlzdENhcmRMaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNhcmRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY2FyZCcpO1xuICAgIGNhcmRMaXN0W2NhcmRMaXN0Lmxlbmd0aC0xXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgRE9NVEkucmVwbGFjZVBhZ2UoY2FyZExpc3RbY2FyZExpc3QubGVuZ3RoLTFdKVxuICAgIH0pOyBcbn07XG5cbmZ1bmN0aW9uIGluaXRpYWxDYXJkTGlzdGVuZXIoKXtcbiAgICBjb25zdCBjYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWNhcmQnKTtcbiAgICBjYXJkTGlzdC5mb3JFYWNoKChjYXJkKSA9PiBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBET01USS5yZXBsYWNlUGFnZShjYXJkKTsgXG4gICAgfSkpXG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlQnRuKHBhcmVudCl7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gbWFrZSgnYnV0dG9uJywgcGFyZW50LCAncmVtb3ZlLWJ1dHRvbicpO1xuICAgIG1ha2UoJ2ltZycsIHJlbW92ZUJ0biwgbnVsbCkuc2V0QXR0cmlidXRlKCdzcmMnLCByZW1vdmVJbWcgKVxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gYWRkVGFzay5tb3ZlVGFza0Zyb20oZmluZExpc3QocGFyZW50KSwgYWRkTGlzdC5hbGxMaXN0cyk7XG4gICAgICAgIGFkZExpc3QuY2hhbmdlQWxsTGlzdChuZXdBcnJheSk7IFxuICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICAgICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJylcbiAgICAgICAgaWYobGlzdFBhZ2Upe1xuICAgICAgICAgICAgbGlzdFBhZ2UucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTsgXG4gICAgfSk7XG59O1xuXG4vL21vdmUgdG8gYWRkLWxpc3RcbmZ1bmN0aW9uIGZpbmRMaXN0KGNhcmQpeyBcbiAgICBjb25zdCBjYXJkQ29kZSA9IGNhcmQuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLnZhbHVlO1xuICAgIGNvbnN0IGxpc3QgPSBhZGRMaXN0LmFsbExpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmNvZGUgPT0gY2FyZENvZGUpOyBcbiAgICByZXR1cm4gbGlzdDsgXG59O1xuXG5leHBvcnQgeyBhZGRMaXN0QnRuLCBsaXN0Q2FyZExpc3RlbmVyLCBtYWtlLCB1cGRhdGVDYXJkVGV4dCwgbWFrZUxpc3RDYXJkLCBmaW5kTGlzdCwgbWFrZUluaXRpYWxDYXJkcywgaW5pdGlhbENhcmRMaXN0ZW5lciB9XG5cblxuIiwiaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuXG5mdW5jdGlvbiBtYWtlRm9ybUVsZW1lbnRzKGVsZW1lbnQsIHBhcmVudCwgdHlwZSwgbmFtZSwgaWQpe1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTsgXG4gICAgLy9uZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgXG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9YCk7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtuYW1lfWApOyBcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3R5cGV9YClcbiAgICByZXR1cm4gbmV3RWxlbWVudDsgXG59OyBcblxuZnVuY3Rpb24gYWRkRm9ybUxhYmVscyhwYXJlbnQsIGlkLCB0ZXh0KXtcbiAgICBjb25zdCB0YXNrRGF0ZUxhYmVsID0gRE9NLm1ha2UoJ2xhYmVsJywgcGFyZW50LCBudWxsKVxuICAgIHRhc2tEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG4gICAgdGFza0RhdGVMYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG59OyBcblxuZnVuY3Rpb24gbWFrZUZvcm1Ecm9wZG93bnMoZGF0YSwgcGFyZW50LCB0eXBlKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBsaXN0T3B0aW9ucyA9IERPTS5tYWtlKCdvcHRpb24nLCBwYXJlbnQsIGAke3R5cGV9LWRyb3Bkb3duYCk7XG4gICAgICAgIGlmIChkYXRhID09IGFkZExpc3QuYWxsTGlzdHMpe1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGFbaV0udGl0bGUpO1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMudGV4dENvbnRlbnQgPSBkYXRhW2ldLnRpdGxlOyBcbiAgICAgICAgICAgIGlmIChkYXRhW2ldLnRpdGxlID09IGF1dG9QaWNrTGlzdCgpKXtcbiAgICAgICAgICAgICAgICBsaXN0T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YVtpXSk7XG4gICAgICAgICAgICBsaXN0T3B0aW9ucy50ZXh0Q29udGVudCA9IGRhdGFbaV07IFxuICAgICAgICB9OyBcbiAgICB9O1xufTsgXG5cbmZ1bmN0aW9uIG1ha2VGb3JtKCl7XG4gICAgY29uc3QgY29udGVudFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3Qgdmlld0Zvcm0gPSBET00ubWFrZSgnZm9ybScsIGNvbnRlbnRXaW5kb3csICd2aWV3LWZvcm0nKTsgXG4gICAgdmlld0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1mb3JtJyk7IFxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBET00ubWFrZSgnYnV0dG9uJywgdmlld0Zvcm0sICdmb3JtLWNsb3NlLWJ0bicpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNsb3NlQnRuTGlzdGVuZXIoKTsgXG4gICAgXG5cbiAgICBET00ubWFrZSgnbGFiZWwnLCB2aWV3Rm9ybSwgbnVsbCkuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay10aXRsZScpOyBcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBtYWtlRm9ybUVsZW1lbnRzKCdpbnB1dCcsIHZpZXdGb3JtLCAndGV4dCcsICd0YXNrLXRpdGxlJywgJ3Rhc2stdGl0bGUnKTsgXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBOYW1lLi4uJylcblxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWxpc3QnLCAnTGlzdDonKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IERPTS5tYWtlKCdzZWxlY3QnLCB2aWV3Rm9ybSwgbnVsbClcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbGlzdCcpOyBcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1saXN0Jyk7IFxuICAgIG1ha2VGb3JtRHJvcGRvd25zKGFkZExpc3QuYWxsTGlzdHMsIHRhc2tMaXN0LCAnbGlzdCcpO1xuICAgIGNvbnNvbGUubG9nKGF1dG9QaWNrTGlzdCgpKVxuICAgIFxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWRhdGUnLCAnRHVlIERhdGU6Jyk7XG4gICAgbWFrZUZvcm1FbGVtZW50cygnaW5wdXQnLCB2aWV3Rm9ybSwgJ2RhdGUnLCAndGFzay1kYXRlJywgJ3Rhc2stZGF0ZScpOyBcbiAgICBcbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1saXN0JywgJ1ByaW9yaXR5OicpO1xuICAgIGxldCBwcmlvcml0aWVzID0gWyctLScsICdIaWdoJywgJ01lZGl1bScsICdMb3cnXTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBET00ubWFrZSgnc2VsZWN0Jywgdmlld0Zvcm0sIG51bGwpO1xuICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stcHJpb3JpdHknKTsgXG4gICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXByaW9yaXR5Jyk7IFxuICAgIG1ha2VGb3JtRHJvcGRvd25zKHByaW9yaXRpZXMsIHRhc2tQcmlvcml0eSwgJ3ByaW9yaXR5Jyk7IFxuICAgIFxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uOicpXG4gICAgY29uc3QgdGFza0Rlc2NyaXAgPSBET00ubWFrZSgndGV4dGFyZWEnLCB2aWV3Rm9ybSwgbnVsbCk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzY3JpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzY3JpcC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAzMCk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCdyb3dzJywgNCk7IFxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IERPTS5tYWtlKCdidXR0b24nLCB2aWV3Rm9ybSwgJ3ZpZXctZm9ybS1zdWJtaXQnKTsgXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTsgXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTsgXG4gICAgaWYoZm9ybSl7XG4gICAgZm9ybS5yZW1vdmUoKTsgXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcigpe1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTsgXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTsgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgICAgIGlmIChhZGRUYXNrLnZhbGlkYXRlVGFza05hbWUoZXZlbnQudGFyZ2V0KSA9PSB0cnVlKSB7XG4gICAgICAgIGFkZFRhc2suYWRkVChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdFBhZ2UpOyBcbiAgICAgICAgRE9NVEkucmVwbGFjZVBhZ2UobGlzdFBhZ2UpOyBcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICByZW1vdmVGb3JtKCk7IFxuICAgICAgICB9O1xuICAgIH0pOyBcbn07IFxuXG5mdW5jdGlvbiBhdXRvUGlja0xpc3QoKXtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpO1xuICAgIGNvbnN0IGxpc3QgPSBET00uZmluZExpc3QocGFnZSk7XG4gICAgcmV0dXJuIGxpc3QudGl0bGU7IFxufTtcblxuZnVuY3Rpb24gdmlld0Zvcm0odGFzayl7XG4gICAgc2V0RXhpc3RpbmdWYWx1ZXMoJyN0YXNrLXRpdGxlJywgdGFzay50aXRsZSk7XG4gICAgc2V0RXhpc3RpbmdWYWx1ZXMoJyN0YXNrLWxpc3QnLCB0YXNrLnBhcmVudExpc3QpOyBcbiAgICBzZXRFeGlzdGluZ1ZhbHVlcygnI3Rhc2stZGF0ZScsIHRhc2suZHVlRGF0ZSk7IFxuICAgIHNldEV4aXN0aW5nVmFsdWVzKCcjdGFzay1wcmlvcml0eScsIHRhc2sucHJpb3JpdHkpOyBcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJyk7IFxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjsgXG59O1xuXG5mdW5jdGlvbiBzZXRFeGlzdGluZ1ZhbHVlcyhpZCwgdmFsdWUpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTsgXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dmFsdWV9YClcbn07XG5cbmZ1bmN0aW9uIHZpZXdGb3JtTGlzdGVuZXIodGFzayl7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZm9ybScpO1xuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgZm9ybSA9IGFkZExpc3QuZ2V0RGF0YShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlKTtcbiAgICAgICAgdGFzay50aXRsZSA9IGZvcm1bMF07IFxuICAgICAgICB0YXNrLnBhcmVudExpc3QgPSBmb3JtWzFdO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSBmb3JtWzJdO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gZm9ybVszXTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGZvcm1bNF07IFxuICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpOyBcblxuICAgICAgICBjb25zdCBjYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICAgICAgRE9NVEkucmVwbGFjZVBhZ2UoY2FyZExpc3QpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gY2xvc2VCdG5MaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY2xvc2UtYnRuJyk7XG4gICAgY29uc3QgYWRkTGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QtZm9ybScpO1xuICAgIGNsb3NlQnRuLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICBjb25zb2xlLmxvZyhidXR0b24ucGFyZW50RWxlbWVudCk7IFxuICAgICAgICBpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZSgnaWQnKS52YWx1ZSAhPT0gJ2FkZC10YXNrLWZvcm0nICl7XG4gICAgICAgICAgICBhZGRMaXN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIHJlbW92ZUZvcm0oKTsgXG4gICAgICAgIH07XG4gICAgfSkpO1xufTtcbi8vIGlmIChidXR0b24ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGVOb2RlKCdpZCcpLnZhbHVlICE9PSAnYWRkLXRhc2stZm9ybScgKXtcbi8vICAgICBhZGRMaXN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgICBcbi8vIH0gZWxzZSB7XG4vLyAgICAgIHJlbW92ZUZvcm0oKTsgXG4vLyB9O1xuXG5cblxuXG5leHBvcnQgeyBtYWtlRm9ybSwgcmVtb3ZlRm9ybSwgYWRkVGFza0xpc3RlbmVyLCB2aWV3Rm9ybSwgdmlld0Zvcm1MaXN0ZW5lciwgY2xvc2VCdG5MaXN0ZW5lciB9XG5cbiIsImltcG9ydCAqIGFzIGFkZExpc3QgZnJvbSAnLi9hZGQtbGlzdCdcbmltcG9ydCAqIGFzIGFkZFRhc2sgZnJvbSAnLi9hZGQtdGFzaydcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTS1saXN0aW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NVEkgZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSdcbmltcG9ydCAqIGFzIERPTVRhc2sgZnJvbSAnLi9ET00tdGFza3MnXG5pbXBvcnQgKiBhcyBET01Gb3JtIGZyb20gJy4vRE9NLXRhc2tmb3JtJ1xuXG5mdW5jdGlvbiByZXBsYWNlUGFnZShjYXJkKSB7XG4gICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbnRlcmZhY2UnKTtcbiAgICBjb25zdCBwcmVzZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpO1xuICAgIGNvbnN0IGV4aXN0aW5nRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1kcm9wZG93bicpOyBcblxuICAgIGlmIChsaXN0UGFnZS5sYXN0RWxlbWVudENoaWxkID09IHByZXNlbnQpe1xuICAgICAgICBsaXN0UGFnZS5sYXN0RWxlbWVudENoaWxkLnJlbW92ZSgpOyBcbiAgICAgICAgZXhpc3RpbmdEcm9wZG93bi5mb3JFYWNoKChkcm9wZG93bikgPT4gZHJvcGRvd24ucmVtb3ZlKCkpOyBcbiAgICB9OyBcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mb3JtJykpe1xuICAgICAgICBET01Gb3JtLnJlbW92ZUZvcm0oKTsgXG4gICAgfTsgXG5cbiAgICBtYWtlUGFnZShjYXJkKTtcbiAgICBhZGRUYXNrQnRuKCk7IFxuICAgIERPTVRhc2suYWRkUmVtb3ZlQWxsQnRuKCk7XG59O1xuXG5mdW5jdGlvbiBtYWtlUGFnZShjYXJkKXtcbiAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWludGVyZmFjZScpO1xuICAgIGNvbnN0IHBhZ2UgPSBET00ubWFrZSgnZGl2JywgbGlzdFBhZ2UsICdsaXN0LXBhZ2UnKTsgXG5cbiAgICBjb25zdCBsaXN0SW5mbyA9IERPTS5maW5kTGlzdChjYXJkKTsgXG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bGlzdEluZm8uY29kZX1gKTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBET00ubWFrZSgnZGl2JywgcGFnZSwgJ3RvLWRvLWxpc3QnKTsgXG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gbGlzdEluZm8udGl0bGU7IFxuICAgIERPTVRhc2subWFrZUxpc3RJdGVtcyhsaXN0SW5mbyk7XG59O1xuXG5cbmZ1bmN0aW9uIGFkZFRhc2tCdG4oKSB7XG4gICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgY29uc3QgYWRkVGFza0J0bm4gPSBET00ubWFrZSgnYnV0dG9uJywgbGlzdFBhZ2UsICdhZGQtdGFzaycpO1xuICAgIGFkZFRhc2tCdG5uLnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XG5cbiAgICBhZGRUYXNrQnRubi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgRE9NRm9ybS5tYWtlRm9ybSgpOyBcbiAgICAgICAgRE9NRm9ybS5hZGRUYXNrTGlzdGVuZXIoKTsgXG4gICAgfSk7IFxufTtcblxuZnVuY3Rpb24gYWRkQ3VycmVudERhdGUoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnRlcmZhY2UtaGVhZGVyJyk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSk7IFxuICAgIGNvbnN0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkrMSk7XG4gICAgY29uc3QgeSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICBcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgVG9kYXkgaXMgJHttbX0vJHtkZH0vJHt5fWBcbn1cblxuXG5cblxuZXhwb3J0IHsgcmVwbGFjZVBhZ2UsIGFkZEN1cnJlbnREYXRlIH0iLCJpbXBvcnQgKiBhcyBhZGRMaXN0IGZyb20gJy4vYWRkLWxpc3QnXG5pbXBvcnQgKiBhcyBhZGRUYXNrIGZyb20gJy4vYWRkLXRhc2snXG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00tbGlzdGludGVyZmFjZSdcbmltcG9ydCAqIGFzIERPTVRJIGZyb20gJy4vRE9NLXRhc2tpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01Gb3JtIGZyb20gJy4vRE9NLXRhc2tmb3JtJ1xuaW1wb3J0IHJlbW92ZUltZyBmcm9tICcuL2ljb25zL3RyYXNoLWNhbi1vdXRsaW5lLnN2ZydcbmltcG9ydCB2aWV3SW1nIGZyb20gJy4vaWNvbnMvZXllLnN2ZydcblxuZnVuY3Rpb24gbWFrZUxpc3RJdGVtcyhwYXJlbnRMaXN0KXtcbiAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7IFxuICAgIGNvbnN0IHRhc2tMaXN0ID0gRE9NLm1ha2UoJ2RpdicsIHBhcmVudENvbnRhaW5lciwgJ2xpc3QnKTtcbiAgICBjb25zdCAgbGlzdCA9IHBhcmVudExpc3QudGFza0xpc3Q7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpdGVtc0NvbnRhaW5lciA9IERPTS5tYWtlKCdkaXYnLCB0YXNrTGlzdCwgJ2l0ZW0tY29udGFpbmVyJyk7IFxuICAgICAgICBpdGVtc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYGxpc3QtaXRlbSR7aX1gKTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBET00ubWFrZSgnaW5wdXQnLCBpdGVtc0NvbnRhaW5lciwgJ2xpc3QtaXRlbScpOyBcbiAgICAgICAgY29uc3QgaXRlbUxhYmVsID0gRE9NLm1ha2UoJ2xhYmVsJywgaXRlbXNDb250YWluZXIsICdsaXN0LWl0ZW0nKTtcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7IFxuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgbGlzdC1pdGVtJHtpfWApOyBcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTsgXG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBgbGlzdC1pdGVtJHtpfWApO1xuICAgICAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsIGBsaXN0LWl0ZW0ke2l9YCk7XG4gICAgICAgIGl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGxpc3RbaV0udGl0bGU7IFxuICAgICAgICBET00ubWFrZSgnZGl2JywgaXRlbXNDb250YWluZXIsICd0YXNrLWR1ZScpLnRleHRDb250ZW50ID0gbGlzdFtpXS5kdWVEYXRlXG4gICAgICAgIGNvbnN0IHZpZXdCdG4gPSBET00ubWFrZSgnYnV0dG9uJywgaXRlbXNDb250YWluZXIsICd0YXNrLXZpZXctYnRuJylcbiAgICAgICAgRE9NLm1ha2UoJ2ltZycsIHZpZXdCdG4sIG51bGwpLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlld0ltZylcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIGl0ZW1zQ29udGFpbmVyLCAndGFzay1kZWxldGUtYnRuJylcbiAgICAgICAgRE9NLm1ha2UoJ2ltZycsIHJlbW92ZUJ0biwgbnVsbCkuc2V0QXR0cmlidXRlKCdzcmMnLCByZW1vdmVJbWcpO1xuICAgICAgICBjaGFuZ2VQcmlvcml0eUNvbG9ycyhsaXN0W2ldLnByaW9yaXR5LCBpdGVtTGFiZWwpO1xuICAgICAgICB2aWV3SXRlbXMobGlzdFtpXSk7XG4gICAgICAgIHJlbW92ZVRhc2tzKGl0ZW1zQ29udGFpbmVyKTsgXG4gICAgfTtcbiAgICBmaW5pc2hUYXNrTGlzdGVuZXIoKTsgIFxufTtcblxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlDb2xvcnMoaXRlbVByaW9yaXR5LCBpdGVtKXtcbiAgICBzd2l0Y2goaXRlbVByaW9yaXR5KXtcbiAgICAgICAgY2FzZSAoJ0hpZ2gnKTogXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tZWQnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xvdyc6IFxuICAgICAgICAgICAgaXRlbS4gY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93JylcbiAgICAgICAgICAgIGJyZWFrOyBcbiAgICB9OyBcbn07IFxuXG5mdW5jdGlvbiB2aWV3SXRlbXMoaXRlbSl7XG4gICAgY29uc3Qgdmlld0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay12aWV3LWJ0bicpOyBcbiAgICBjb25zdCB2aWV3QnRuID0gdmlld0J0bnNbdmlld0J0bnMubGVuZ3RoLTFdOyBcbiAgICB2aWV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgRE9NRm9ybS5tYWtlRm9ybSgpOyBcbiAgICAgICAgICAgIERPTUZvcm0udmlld0Zvcm0oaXRlbSk7IFxuICAgICAgICAgICAgRE9NRm9ybS52aWV3Rm9ybUxpc3RlbmVyKGl0ZW0pOyBcbiAgICAgICAgfSk7IFxufTtcblxuZnVuY3Rpb24gZmluaXNoVGFza0xpc3RlbmVyKCl7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIik7IFxuICAgIFxuICAgIGNoZWNrQm94LmZvckVhY2goKGJveCkgPT4gYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50TGlzdCA9IGJveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGlzdCA9IERPTS5maW5kTGlzdChwYXJlbnRMaXN0KTtcbiAgICAgICAgY29uc3QgdGFzayA9IGFkZExpc3QuZmluZE1hdGNoQ29kZShib3guZ2V0QXR0cmlidXRlKCdpZCcpLCBsaXN0LnRhc2tMaXN0KTtcbiAgICAgICAgY29uc3QgZlRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUoYm94LmdldEF0dHJpYnV0ZSgnaWQnKSwgbGlzdC5maW5pc2hlZFRhc2tzKTtcblxuICAgICAgICBpZiAoYm94LmNoZWNrZWQpe1xuICAgICAgICAgICAgYm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQtdGFzaycpOyBcbiAgICAgICAgICAgIGxpc3QudGFza0xpc3QgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbSh0YXNrLCBsaXN0LnRhc2tMaXN0KTsgXG4gICAgICAgICAgICBsaXN0LmZpbmlzaGVkVGFza3MgPSBhZGRUYXNrLm1vdmVUYXNrVG8odGFzaywgbGlzdC5maW5pc2hlZFRhc2tzKTsgXG4gICAgICAgICAgICBET00udXBkYXRlQ2FyZFRleHQoKTtcbiAgICAgICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIWJveC5jaGVja2VkKXsgXG4gICAgICAgICAgICBpZihib3gucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbmlzaGVkLXRhc2snKSl7XG4gICAgICAgICAgICAgICAgYm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQtdGFzaycpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxpc3QuZmluaXNoZWRUYXNrcyA9IGFkZFRhc2subW92ZVRhc2tGcm9tKGZUYXNrLCBsaXN0LmZpbmlzaGVkVGFza3MpOyBcbiAgICAgICAgICAgIGxpc3QudGFza0xpc3QgPSBhZGRUYXNrLm1vdmVUYXNrVG8oZlRhc2ssIGxpc3QudGFza0xpc3QpOyBcbiAgICAgICAgICAgIERPTS51cGRhdGVDYXJkVGV4dCgpOyBcbiAgICAgICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICApKTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tzKHRhc2tDb250YWluZXIpe1xuICAgIGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kZWxldGUtYnRuJyk7IFxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IHJlbW92ZUJ0bnNbcmVtb3ZlQnRucy5sZW5ndGgtMV07XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpXG4gICAgICAgIGNvbnN0IGxpc3QgPSBET00uZmluZExpc3QocGFyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUodGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2lkJyksIGxpc3QudGFza0xpc3QpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaW5pc2hlZC10YXNrJykpe1xuICAgICAgICAgICAgY29uc3QgZlRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUodGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2lkJyksIGxpc3QuZmluaXNoZWRUYXNrcyk7XG4gICAgICAgICAgICBjb25zdCBmbmV3QXJyYXkgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbShmVGFzaywgbGlzdC5maW5pc2hlZFRhc2tzKTsgXG4gICAgICAgICAgICBsaXN0LmZpbmlzaGVkVGFza3MgPSBmbmV3QXJyYXk7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coZm5ld0FycmF5KTsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKHRhc2ssIGxpc3QudGFza0xpc3QpO1xuICAgICAgICAgICAgbGlzdC50YXNrTGlzdCA9IG5ld0FycmF5OyBcbiAgICAgICAgfVxuICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBET00udXBkYXRlQ2FyZFRleHQoKTsgXG4gICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgIH0pOyBcbn07IFxuXG5mdW5jdGlvbiBhZGRSZW1vdmVBbGxCdG4oKXtcbiAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICBjb25zdCByZW1vdmVUYXNrQnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIGxpc3RQYWdlLCAncmVtb3ZlLWZpbmlzaGVkLWJ0bicpO1xuICAgIHJlbW92ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnLSBSZW1vdmUgQWxsIEZpbmlzaGVkIFRhc2tzJzsgXG5cbiAgICByZW1vdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpO1xuICAgICAgICBjb25zdCBwYXJlbnRMaXN0ID0gRE9NLmZpbmRMaXN0KGxpc3QpOyBcbiAgICAgICAgcGFyZW50TGlzdC5maW5pc2hlZFRhc2tzID0gW107IFxuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maW5pc2hlZC10YXNrJyk7XG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBET00udXBkYXRlQ2FyZFRleHQoKTsgXG4gICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgIH0pO1xufTtcblxuXG5leHBvcnQgeyBtYWtlTGlzdEl0ZW1zLCBhZGRSZW1vdmVBbGxCdG4gfSIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnXG5cbmxldCBhbGxMaXN0cyA9IFtdOyBcblxuZnVuY3Rpb24gdGVzdCgpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KGFsbExpc3RzKSk7XG59OyBcblxuZnVuY3Rpb24gZ2V0RGF0YShmb3JtKXtcbiAgICBsZXQgdmFsdWVzQXJyID0gW107IFxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGZvcm1EYXRhLnZhbHVlcygpKXtcbiAgICAgICAgdmFsdWVzQXJyLnB1c2godmFsdWUpOyBcbiAgICB9O1xuICAgIHJldHVybiB2YWx1ZXNBcnI7IFxufTtcblxuZnVuY3Rpb24gZmluZE1hdGNoKG5hbWUsIGxpc3RzKSB7XG4gICAgY29uc3QgbmFtZXMgPSBsaXN0cy5maW5kKGxpc3QgPT4gbGlzdC50aXRsZSA9PSBuYW1lKTsgXG4gICAgcmV0dXJuIG5hbWVzOyBcbn07IFxuXG5mdW5jdGlvbiBmaW5kTWF0Y2hDb2RlKG5hbWUsIGxpc3RzKSB7XG4gICAgY29uc3QgbmFtZXMgPSBsaXN0cy5maW5kKGxpc3QgPT4gbGlzdC5jb2RlID09IG5hbWUpOyBcbiAgICByZXR1cm4gbmFtZXM7IFxufTsgXG5cbmZ1bmN0aW9uIHRpdGxlTmFtZVZhbGlkYXRpb24odGl0bGUpe1xuICAgIGlmKHRpdGxlID09ICcnKXtcbiAgICAgICAgcmV0dXJuIHRpdGxlID0gYExpc3QgJHthbGxMaXN0cy5sZW5ndGh9YFxuICAgIH0gZWxzZSBpZihmaW5kTWF0Y2godGl0bGUsIGFsbExpc3RzKSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSk7IFxuICAgICAgICByZXR1cm4gdGl0bGUgPSBgJHt0aXRsZX0gKExpc3QgJHthbGxMaXN0cy5sZW5ndGh9KWBcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH07XG59O1xuXG5jb25zdCBtYWtlTGlzdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tMaXN0LCBmaW5pc2hlZFRhc2tzLCBjb2RlKSA9PiB7XG4gICAgdGl0bGUgPSB0aXRsZU5hbWVWYWxpZGF0aW9uKHRpdGxlKTtcbiAgICB0YXNrTGlzdCA9IFtdOyBcbiAgICBmaW5pc2hlZFRhc2tzID0gW107IFxuICAgIGNvZGUgPSBgY29kZSR7YWxsTGlzdHMubGVuZ3RofWA7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrTGlzdCwgZmluaXNoZWRUYXNrcywgY29kZSB9XG59O1xuXG5mdW5jdGlvbiBhZGQoZm9ybSl7XG4gICAgY29uc3QgZm9ybURhdGEgPSBnZXREYXRhKGZvcm0pO1xuICAgIGNvbnN0IGxpc3QgPSBtYWtlTGlzdChmb3JtRGF0YVswXSwgZm9ybURhdGFbMV0pOyBcbiAgICBhbGxMaXN0cy5wdXNoKGxpc3QpOyBcbiAgICB0ZXN0KCk7IFxufTtcblxuZnVuY3Rpb24gcmVuZXcoZm9ybSl7XG4gICAgY29uc3QgZm9ybURhdGEgPSBnZXREYXRhKGZvcm0pO1xuICAgIGZvcm1EYXRhWzBdID0gJyc7IFxuICAgIGZvcm1EYXRhWzFdID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUFsbExpc3QobGlzdCl7XG4gICAgYWxsTGlzdHMgPSBsaXN0OyBcbn07IFxuXG5cbmV4cG9ydCB7IHRlc3QsIG1ha2VMaXN0LCBnZXREYXRhLCBhZGQsIGFsbExpc3RzLCBmaW5kTWF0Y2gsIGNoYW5nZUFsbExpc3QsIGZpbmRNYXRjaENvZGUsIHJlbmV3IH0iLCJpbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnXG5pbXBvcnQgKiBhcyBhZGRMaXN0IGZyb20gJy4vYWRkLWxpc3QnXG5cblxuY29uc3QgbWFrZVRhc2sgPSAodGl0bGUsIHBhcmVudExpc3QsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgY29kZSApID0+IHtcbiAgICBjb25zdCBsaXN0ID0gYWRkTGlzdC5maW5kTWF0Y2gocGFyZW50TGlzdCwgYWRkTGlzdC5hbGxMaXN0cykudGFza0xpc3Q7XG4gICAgY29kZSA9IGBsaXN0LWl0ZW0ke2xpc3QubGVuZ3RofWA7IFxuICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KTtcbiAgICByZXR1cm4geyB0aXRsZSwgcGFyZW50TGlzdCwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBjb2RlIH1cbn07XG5cblxuZnVuY3Rpb24gYWRkVChmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGFkZExpc3QuZ2V0RGF0YShmb3JtKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YVszXSlcbiAgICBjb25zdCB0YXNrID0gbWFrZVRhc2soZm9ybURhdGFbMF0sIGZvcm1EYXRhWzFdLCBmb3JtRGF0YVsyXSwgZm9ybURhdGFbM10sIGZvcm1EYXRhWzRdKTsgXG4gICAgYWRkVGFza3RvTGlzdCh0YXNrKTtcbiAgICBhZGRMaXN0LnRlc3QoKTsgXG59O1xuXG5mdW5jdGlvbiBhZGRUYXNrdG9MaXN0KHRhc2spe1xuICAgIGNvbnN0IGFsbExpc3RzID0gYWRkTGlzdC5hbGxMaXN0cztcbiAgICBjb25zdCBwYXJlbnRMaXN0ID0gYWxsTGlzdHMuZmluZChsaXN0ID0+IGxpc3QudGl0bGUgPT0gdGFzay5wYXJlbnRMaXN0KTtcbiAgICBwYXJlbnRMaXN0LnRhc2tMaXN0LnB1c2godGFzayk7IFxuICAgIFxufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVUYXNrTmFtZShmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGFkZExpc3QuZ2V0RGF0YShmb3JtKTtcbiAgICBpZihmb3JtRGF0YVswXSA9PSAnJyl7XG4gICAgICAgIGFsZXJ0KFwiRW1wdHkgTmFtZVwiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNle1xuICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgfVxufTtcblxuZnVuY3Rpb24gbW92ZVRhc2tGcm9tKHRhc2ssIGluaXRpYWwpe1xuICAgIGNvbnN0IG5ld0luaXRpYWwgPSBpbml0aWFsLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhc2spO1xuICAgIFxuICAgIGxldCBuZXdBcnJheTtcbiAgICBpZiAoIW5ld0luaXRpYWwpe1xuICAgICAgIHJldHVybiBuZXdBcnJheSA9IFtdOyBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3QXJyYXkgPSBuZXdJbml0aWFsOyBcbiAgICB9XG4gICBcbn07XG5cbmZ1bmN0aW9uIG1vdmVUYXNrVG8odGFzaywgYXJyYXkpe1xuICAgIGFycmF5LnB1c2godGFzayk7XG4gICAgcmV0dXJuIGFycmF5OyBcbn07IFxuXG5mdW5jdGlvbiBjaGFuZ2VBbGxMaXN0KGxpc3Qpe1xuICAgIGFkZExpc3QuYWxsTGlzdHMgPSBsaXN0OyBcbn07IFxuXG5cblxuZXhwb3J0IHsgbWFrZVRhc2ssIGFkZFQsIGFkZFRhc2t0b0xpc3QsIHZhbGlkYXRlVGFza05hbWUsIG1vdmVUYXNrRnJvbSwgbW92ZVRhc2tUbyB9XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnXG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00tbGlzdGludGVyZmFjZSdcbmltcG9ydCAqIGFzIERPTVRJIGZyb20gJy4vRE9NLXRhc2tpbnRlcmZhY2UnXG5pbXBvcnQgeyBhbGxMaXN0cywgbWFrZUxpc3QsIGNoYW5nZUFsbExpc3QgfSBmcm9tICcuL2FkZC1saXN0JztcbmltcG9ydCB7IGFkZEN1cnJlbnREYXRlIH0gZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSc7XG5cblxuLy9sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGlzdCcpXG5cbkRPTVRJLmFkZEN1cnJlbnREYXRlKClcblxuZnVuY3Rpb24gZGVmYXVsdExpc3QoKXtcbiAgICBjb25zdCBkZWZhdWx0TGlzdCA9IG1ha2VMaXN0KFwiRGVmYXVsdCBMaXN0XCIsIFwiVGhpcyBpcyB5b3VyIGZpcnN0IGxpc3QhXCIpO1xuICAgIGFsbExpc3RzLnB1c2goZGVmYXVsdExpc3QpOyBcbiAgICBET00ubWFrZUxpc3RDYXJkKCk7IFxuICAgIERPTS5saXN0Q2FyZExpc3RlbmVyKCk7IFxufTtcblxuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0Jykpe1xuICAgIERPTS5hZGRMaXN0QnRuKCk7XG4gICAgZGVmYXVsdExpc3QoKTsgXG59IGVsc2Uge1xuICAgIGNoYW5nZUFsbExpc3QoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSkpO1xuICAgIERPTS5hZGRMaXN0QnRuKCk7XG4gICAgRE9NLm1ha2VJbml0aWFsQ2FyZHMoKTsgXG4gICAgRE9NLmluaXRpYWxDYXJkTGlzdGVuZXIoKTsgXG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=