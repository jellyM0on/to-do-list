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
        const parentList = taskContainer.parentElement.parentElement;
        const list = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(parentList);
        const task = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(taskContainer.getAttribute('id'), list.taskList);
        const newArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(task, list.taskList);
        list.taskList = newArray; 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUN5QjtBQUNQO0FBQ0k7QUFDRTtBQUNtQjtBQUNWOzs7QUFHckQ7O0FBRUEsOERBQW9COztBQUVwQjtBQUNBLHdCQUF3QixtREFBUTtBQUNoQyxJQUFJLG9EQUFhO0FBQ2pCLElBQUksNERBQWdCO0FBQ3BCLElBQUksZ0VBQW9CO0FBQ3hCOzs7QUFHQTtBQUNBLElBQUksMERBQWM7QUFDbEI7QUFDQSxFQUFFO0FBQ0YsSUFBSSx3REFBYTtBQUNqQixJQUFJLDBEQUFjO0FBQ2xCLElBQUksZ0VBQW9CO0FBQ3hCLElBQUksbUVBQXVCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLWxpc3RpbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTS10YXNraW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTS10YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9hZGQtbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9hZGQtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tZm9ybS12aXNpYmlsaXR5OiBibG9jazsgXFxufVxcblxcbmh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuI2xpc3QtaW50ZXJmYWNle1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICB3aWR0aDogNTAlOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMjAwcHg7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuICNsaXN0LW1ha2Vye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59IFxcblxcbi5hZGQtbGlzdC1pbWd7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4jYWRkLWxpc3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmxpc3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jbG9zZS1idG4ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlcjpub25lO1xcbn1cXG5cXG5idXR0b25bdHlwZT1zdWJtaXRde1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuW2NsYXNzIF49ICdsaXN0LWNhcmQnXSxcXG4jbGlzdC1tYWtlciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcblxcbi5saXN0LWNhcmR7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXG59XFxuXFxuLmxpc3QtY2FyZCBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuIC0xKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmUwYjtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuKzEpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRmYwMDZlO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRmI1NjA3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0bisyKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMzhlYztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogdGFzayBpbnRlciAqL1xcbiN0YXNrLWludGVyZmFjZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWludGVyZmFjZS1oZWFkZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubGlzdC1wYWdle1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNSU7IFxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXG59XFxuXFxuLnRvLWRvLWxpc3R7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcblxcblxcbi5pdGVtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciAxZnIgNTBweCA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4udGFzay1kdWV7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50YXNrLXZpZXctYnRuIGltZyxcXG4udGFzay1kZWxldGUtYnRuIGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmlsdGVyOm9wYWNpdHkoNTAlKTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ0bixcXG4udGFzay12aWV3LWJ0bntcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyBcXG4gICAgcGFkZGluZzogMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yZW1vdmUtZmluaXNoZWQtYnRue1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMTEwLCAwLjIpO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCA4NiwgNywgMC4yKTtcXG59XFxuXFxuLnByaW9yaXR5LWxvd3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCAxMSwgMC4yKTtcXG59XFxuXFxuLyogYWRkIHRhc2sgJiB2aWV3IGZvcm0gKi9cXG4udmlldy1mb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMjAlO1xcbiAgICByaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI3Rhc2stdGl0bGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0NBRUM7SUFDRyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsdUhBQXVIO0FBQzNIOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBLGVBQWU7QUFDZjtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWZvcm0tdmlzaWJpbGl0eTogYmxvY2s7IFxcbn1cXG5cXG5odG1sLCBib2R5LCAjY29udGVudHtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcblxcbiNsaXN0LWludGVyZmFjZXtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgd2lkdGg6IDUwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDIwMHB4O1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiAjbGlzdC1tYWtlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxufSBcXG5cXG4uYWRkLWxpc3QtaW1ne1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuI2FkZC1saXN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5saXN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmZvcm0tY2xvc2UtYnRuIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXI6bm9uZTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9c3VibWl0XXtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbltjbGFzcyBePSAnbGlzdC1jYXJkJ10sXFxuI2xpc3QtbWFrZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGJvcmRlcjogc29saWQ7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4ubGlzdC1jYXJke1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTNweCAwcHggaW5zZXQ7XFxufVxcblxcbi5saXN0LWNhcmQgZGl2Om50aC1jaGlsZCgxKXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0biAtMSl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJlMGI7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0bisxKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZmMDA2ZTtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZiNTYwNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4rMil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzM4ZWM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b257XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbiBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIHRhc2sgaW50ZXIgKi9cXG4jdGFzay1pbnRlcmZhY2V7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1pbnRlcmZhY2UtaGVhZGVye1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmxpc3QtcGFnZXtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQ7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDUlOyBcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XFxufVxcblxcbi50by1kby1saXN0e1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG4uaXRlbS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnIgMWZyIDUwcHggNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLnRhc2stZHVle1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGFzay12aWV3LWJ0biBpbWcsXFxuLnRhc2stZGVsZXRlLWJ0biBpbWd7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZpbHRlcjpvcGFjaXR5KDUwJSk7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idG4sXFxuLnRhc2stdmlldy1idG57XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgXFxuICAgIHBhZGRpbmc6IDA7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmFkZC10YXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucmVtb3ZlLWZpbmlzaGVkLWJ0bntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDExMCwgMC4yKTtcXG59XFxuXFxuLnByaW9yaXR5LW1lZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgODYsIDcsIDAuMik7XFxufVxcblxcbi5wcmlvcml0eS1sb3d7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MCwgMTEsIDAuMik7XFxufVxcblxcbi8qIGFkZCB0YXNrICYgdmlldyBmb3JtICovXFxuLnZpZXctZm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgcmlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiN0YXNrLXRpdGxle1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MsIGdldE92ZXJsYXBwaW5nRGF5c0luSW50ZXJ2YWxzIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJ1xuaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NRm9ybSBmcm9tICcuL0RPTS10YXNrZm9ybSdcbmltcG9ydCAqIGFzIERPTVRJIGZyb20gJy4vRE9NLXRhc2tpbnRlcmZhY2UnXG5pbXBvcnQgcmVtb3ZlSW1nIGZyb20gJy4vaWNvbnMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnJ1xuXG5mdW5jdGlvbiBtYWtlKGVsZW1lbnQsIHBhcmVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpOyBcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7IFxufTsgXG5cbmZ1bmN0aW9uIGFkZExpc3RCdG4oKSB7XG4gICAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LW1ha2VyJyk7IFxuICAgIGNvbnN0IGFkZExpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1saXN0LWZvcm0nKTtcbiAgICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRMaXN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7IFxuICAgIH0pO1xuICAgIGFkZExpc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICBhZGRMaXN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgICAgICAgYWRkTGlzdC5hZGQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgYWRkTGlzdC5yZW5ldygpO1xuICAgICAgICBtYWtlTGlzdENhcmQoKTsgXG4gICAgICAgIGxpc3RDYXJkTGlzdGVuZXIoKTsgXG4gICAgfSk7XG4gICAgRE9NRm9ybS5jbG9zZUJ0bkxpc3RlbmVyKCk7ICBcbn07IFxuXG4vL3NwbGl0IGFwYXJ0XG5mdW5jdGlvbiBtYWtlTGlzdENhcmQoKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhZGRMaXN0LmFsbExpc3RzW2FkZExpc3QuYWxsTGlzdHMubGVuZ3RoIC0gMV07IFxuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtaW50ZXJmYWNlJyk7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBtYWtlKCdkaXYnLCBsaXN0Q29udGFpbmVyLCBgbGlzdC1jYXJkYCk7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGBjb2RlJHthZGRMaXN0LmFsbExpc3RzLmxlbmd0aCAtIDF9YCk7XG4gICAgICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBtYWtlKCdkaXYnLCBjYXJkLCBudWxsKTtcbiAgICAgICAgY2FyZEhlYWRlci50ZXh0Q29udGVudCA9IGluZGV4LnRpdGxlOyBcblxuICAgICAgICBtYWtlKCdkaXYnLCBjYXJkLCAnY2FyZEl0ZW1Db3VudCcpO1xuICAgICAgICBtYWtlKCdkaXYnLCBjYXJkLCAnY2FyZEZpbmlzaGVkQ291bnQnKTsgXG4gICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IG1ha2UoJ2RpdicsIGNhcmQsIG51bGwpO1xuICAgICAgICBjYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpbmRleC5kZXNjcmlwdGlvbjsgXG4gICAgICAgIHVwZGF0ZUNhcmRUZXh0KCk7XG5cbiAgICAgICAgaWYoYWRkTGlzdC5hbGxMaXN0cy5sZW5ndGggIT09IDEpe1xuICAgICAgICAgICAgcmVtb3ZlQnRuKGNhcmQpO1xuICAgICAgICB9XG59OyBcblxuZnVuY3Rpb24gbWFrZUluaXRpYWxDYXJkcygpe1xuICAgIGFkZExpc3QuYWxsTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtaW50ZXJmYWNlJyk7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBtYWtlKCdkaXYnLCBsaXN0Q29udGFpbmVyLCBgbGlzdC1jYXJkYCk7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGBjb2RlJHthZGRMaXN0LmFsbExpc3RzLmluZGV4T2YobGlzdCl9YCk7XG4gICAgICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBtYWtlKCdkaXYnLCBjYXJkLCBudWxsKTtcbiAgICAgICAgY2FyZEhlYWRlci50ZXh0Q29udGVudCA9IGxpc3QudGl0bGU7IFxuXG4gICAgICAgIG1ha2UoJ2RpdicsIGNhcmQsICdjYXJkSXRlbUNvdW50Jyk7XG4gICAgICAgIG1ha2UoJ2RpdicsIGNhcmQsICdjYXJkRmluaXNoZWRDb3VudCcpOyBcbiAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gbWFrZSgnZGl2JywgY2FyZCwgbnVsbCk7XG4gICAgICAgIGNhcmREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGxpc3QuZGVzY3JpcHRpb247IFxuICAgICAgICB1cGRhdGVDYXJkVGV4dCgpO1xuICAgICAgICBpZihhZGRMaXN0LmFsbExpc3RzLmluZGV4T2YobGlzdCkgIT09IDApe1xuICAgICAgICAgICAgcmVtb3ZlQnRuKGNhcmQpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcmRUZXh0KCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jYXJkJyk7IFxuXG4gICAgY2FyZC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkSXRlbUNvdW50Jyk7XG4gICAgICAgIGNvbnN0IGZJdGVtQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZEZpbmlzaGVkQ291bnQnKTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGZpbmRMaXN0KGNhcmQpOyBcblxuICAgICAgICBsZXQgaXRlbURpdjtcbiAgICAgICAgbGV0IGZJdGVtRGl2OyBcblxuICAgICAgICBpdGVtQ291bnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50Tm9kZSA9PSBjYXJkKXtcbiAgICAgICAgICAgICAgICBpdGVtRGl2ID0gaXRlbTsgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTsgXG5cbiAgICAgICAgZkl0ZW1Db3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnROb2RlID09IGNhcmQpe1xuICAgICAgICAgICAgICAgIGZJdGVtRGl2ID0gaXRlbTsgXG4gICAgICAgICAgICB9OyBcbiAgICAgICAgfSk7IFxuICAgICAgICBpdGVtRGl2LnRleHRDb250ZW50ID0gYCR7bGlzdC50YXNrTGlzdC5sZW5ndGh9IFRhc2tzYFxuICAgICAgICBmSXRlbURpdi50ZXh0Q29udGVudCA9IGAke2xpc3QuZmluaXNoZWRUYXNrcy5sZW5ndGh9IEZpbmlzaGVkIFRhc2tzYFxuICAgIH0pOyBcbn07XG5cbmZ1bmN0aW9uIGxpc3RDYXJkTGlzdGVuZXIoKXtcbiAgICBjb25zdCBjYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWNhcmQnKTtcbiAgICBjYXJkTGlzdFtjYXJkTGlzdC5sZW5ndGgtMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTVRJLnJlcGxhY2VQYWdlKGNhcmRMaXN0W2NhcmRMaXN0Lmxlbmd0aC0xXSlcbiAgICB9KTsgXG59O1xuXG5mdW5jdGlvbiBpbml0aWFsQ2FyZExpc3RlbmVyKCl7XG4gICAgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jYXJkJyk7XG4gICAgY2FyZExpc3QuZm9yRWFjaCgoY2FyZCkgPT4gY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgRE9NVEkucmVwbGFjZVBhZ2UoY2FyZCk7IFxuICAgIH0pKVxufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJ0bihwYXJlbnQpe1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IG1ha2UoJ2J1dHRvbicsIHBhcmVudCwgJ3JlbW92ZS1idXR0b24nKTtcbiAgICBtYWtlKCdpbWcnLCByZW1vdmVCdG4sIG51bGwpLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVtb3ZlSW1nIClcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IFxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKGZpbmRMaXN0KHBhcmVudCksIGFkZExpc3QuYWxsTGlzdHMpO1xuICAgICAgICBhZGRMaXN0LmNoYW5nZUFsbExpc3QobmV3QXJyYXkpOyBcbiAgICAgICAgYWRkTGlzdC50ZXN0KCk7XG4gICAgICAgIGNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpXG4gICAgICAgIGlmKGxpc3RQYWdlKXtcbiAgICAgICAgICAgIGxpc3RQYWdlLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7IFxuICAgIH0pO1xufTtcblxuLy9tb3ZlIHRvIGFkZC1saXN0XG5mdW5jdGlvbiBmaW5kTGlzdChjYXJkKXsgXG4gICAgY29uc3QgY2FyZENvZGUgPSBjYXJkLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKS52YWx1ZTtcbiAgICBjb25zdCBsaXN0ID0gYWRkTGlzdC5hbGxMaXN0cy5maW5kKGxpc3QgPT4gbGlzdC5jb2RlID09IGNhcmRDb2RlKTsgXG4gICAgcmV0dXJuIGxpc3Q7IFxufTtcblxuZXhwb3J0IHsgYWRkTGlzdEJ0biwgbGlzdENhcmRMaXN0ZW5lciwgbWFrZSwgdXBkYXRlQ2FyZFRleHQsIG1ha2VMaXN0Q2FyZCwgZmluZExpc3QsIG1ha2VJbml0aWFsQ2FyZHMsIGluaXRpYWxDYXJkTGlzdGVuZXIgfVxuXG5cbiIsImltcG9ydCAqIGFzIGFkZExpc3QgZnJvbSAnLi9hZGQtbGlzdCdcbmltcG9ydCAqIGFzIGFkZFRhc2sgZnJvbSAnLi9hZGQtdGFzaydcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTS1saXN0aW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NVEkgZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSdcblxuZnVuY3Rpb24gbWFrZUZvcm1FbGVtZW50cyhlbGVtZW50LCBwYXJlbnQsIHR5cGUsIG5hbWUsIGlkKXtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7IFxuICAgIC8vbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IFxuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfWApO1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7bmFtZX1gKTsgXG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0eXBlfWApXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7IFxufTsgXG5cbmZ1bmN0aW9uIGFkZEZvcm1MYWJlbHMocGFyZW50LCBpZCwgdGV4dCl7XG4gICAgY29uc3QgdGFza0RhdGVMYWJlbCA9IERPTS5tYWtlKCdsYWJlbCcsIHBhcmVudCwgbnVsbClcbiAgICB0YXNrRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuICAgIHRhc2tEYXRlTGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xufTsgXG5cbmZ1bmN0aW9uIG1ha2VGb3JtRHJvcGRvd25zKGRhdGEsIHBhcmVudCwgdHlwZSl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgbGlzdE9wdGlvbnMgPSBET00ubWFrZSgnb3B0aW9uJywgcGFyZW50LCBgJHt0eXBlfS1kcm9wZG93bmApO1xuICAgICAgICBpZiAoZGF0YSA9PSBhZGRMaXN0LmFsbExpc3RzKXtcbiAgICAgICAgICAgIGxpc3RPcHRpb25zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhW2ldLnRpdGxlKTtcbiAgICAgICAgICAgIGxpc3RPcHRpb25zLnRleHRDb250ZW50ID0gZGF0YVtpXS50aXRsZTsgXG4gICAgICAgICAgICBpZiAoZGF0YVtpXS50aXRsZSA9PSBhdXRvUGlja0xpc3QoKSl7XG4gICAgICAgICAgICAgICAgbGlzdE9wdGlvbnMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGFbaV0pO1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMudGV4dENvbnRlbnQgPSBkYXRhW2ldOyBcbiAgICAgICAgfTsgXG4gICAgfTtcbn07IFxuXG5mdW5jdGlvbiBtYWtlRm9ybSgpe1xuICAgIGNvbnN0IGNvbnRlbnRXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHZpZXdGb3JtID0gRE9NLm1ha2UoJ2Zvcm0nLCBjb250ZW50V2luZG93LCAndmlldy1mb3JtJyk7IFxuICAgIHZpZXdGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2stZm9ybScpOyBcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIHZpZXdGb3JtLCAnZm9ybS1jbG9zZS1idG4nKTtcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBjbG9zZUJ0bkxpc3RlbmVyKCk7IFxuICAgIFxuXG4gICAgRE9NLm1ha2UoJ2xhYmVsJywgdmlld0Zvcm0sIG51bGwpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stdGl0bGUnKTsgXG4gICAgY29uc3QgdGFza1RpdGxlID0gbWFrZUZvcm1FbGVtZW50cygnaW5wdXQnLCB2aWV3Rm9ybSwgJ3RleHQnLCAndGFzay10aXRsZScsICd0YXNrLXRpdGxlJyk7IFxuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgTmFtZS4uLicpXG5cbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1saXN0JywgJ0xpc3Q6Jyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBET00ubWFrZSgnc2VsZWN0Jywgdmlld0Zvcm0sIG51bGwpXG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWxpc3QnKTsgXG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stbGlzdCcpOyBcbiAgICBtYWtlRm9ybURyb3Bkb3ducyhhZGRMaXN0LmFsbExpc3RzLCB0YXNrTGlzdCwgJ2xpc3QnKTtcbiAgICBjb25zb2xlLmxvZyhhdXRvUGlja0xpc3QoKSlcbiAgICBcbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1kYXRlJywgJ0R1ZSBEYXRlOicpO1xuICAgIG1ha2VGb3JtRWxlbWVudHMoJ2lucHV0Jywgdmlld0Zvcm0sICdkYXRlJywgJ3Rhc2stZGF0ZScsICd0YXNrLWRhdGUnKTsgXG4gICAgXG4gICAgYWRkRm9ybUxhYmVscyh2aWV3Rm9ybSwgJ3Rhc2stbGlzdCcsICdQcmlvcml0eTonKTtcbiAgICBsZXQgcHJpb3JpdGllcyA9IFsnLS0nLCAnSGlnaCcsICdNZWRpdW0nLCAnTG93J107XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gRE9NLm1ha2UoJ3NlbGVjdCcsIHZpZXdGb3JtLCBudWxsKTtcbiAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXByaW9yaXR5Jyk7IFxuICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1wcmlvcml0eScpOyBcbiAgICBtYWtlRm9ybURyb3Bkb3ducyhwcmlvcml0aWVzLCB0YXNrUHJpb3JpdHksICdwcmlvcml0eScpOyBcbiAgICBcbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1kZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbjonKVxuICAgIGNvbnN0IHRhc2tEZXNjcmlwID0gRE9NLm1ha2UoJ3RleHRhcmVhJywgdmlld0Zvcm0sIG51bGwpO1xuICAgIHRhc2tEZXNjcmlwLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCdjb2xzJywgMzApO1xuICAgIHRhc2tEZXNjcmlwLnNldEF0dHJpYnV0ZSgncm93cycsIDQpOyBcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBET00ubWFrZSgnYnV0dG9uJywgdmlld0Zvcm0sICd2aWV3LWZvcm0tc3VibWl0Jyk7IFxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7IFxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG59O1xuXG5mdW5jdGlvbiByZW1vdmVGb3JtKCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1mb3JtJyk7IFxuICAgIGlmKGZvcm0pe1xuICAgIGZvcm0ucmVtb3ZlKCk7IFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBhZGRUYXNrTGlzdGVuZXIoKXtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1mb3JtJyk7IFxuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7IFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICAgICAgICBpZiAoYWRkVGFzay52YWxpZGF0ZVRhc2tOYW1lKGV2ZW50LnRhcmdldCkgPT0gdHJ1ZSkge1xuICAgICAgICBhZGRUYXNrLmFkZFQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RQYWdlKTsgXG4gICAgICAgIERPTVRJLnJlcGxhY2VQYWdlKGxpc3RQYWdlKTsgXG4gICAgICAgIERPTS51cGRhdGVDYXJkVGV4dCgpOyBcbiAgICAgICAgcmVtb3ZlRm9ybSgpOyBcbiAgICAgICAgfTtcbiAgICB9KTsgXG59OyBcblxuZnVuY3Rpb24gYXV0b1BpY2tMaXN0KCl7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICBjb25zdCBsaXN0ID0gRE9NLmZpbmRMaXN0KHBhZ2UpO1xuICAgIHJldHVybiBsaXN0LnRpdGxlOyBcbn07XG5cbmZ1bmN0aW9uIHZpZXdGb3JtKHRhc2spe1xuICAgIHNldEV4aXN0aW5nVmFsdWVzKCcjdGFzay10aXRsZScsIHRhc2sudGl0bGUpO1xuICAgIHNldEV4aXN0aW5nVmFsdWVzKCcjdGFzay1saXN0JywgdGFzay5wYXJlbnRMaXN0KTsgXG4gICAgc2V0RXhpc3RpbmdWYWx1ZXMoJyN0YXNrLWRhdGUnLCB0YXNrLmR1ZURhdGUpOyBcbiAgICBzZXRFeGlzdGluZ1ZhbHVlcygnI3Rhc2stcHJpb3JpdHknLCB0YXNrLnByaW9yaXR5KTsgXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpOyBcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247IFxufTtcblxuZnVuY3Rpb24gc2V0RXhpc3RpbmdWYWx1ZXMoaWQsIHZhbHVlKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7IFxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3ZhbHVlfWApXG59O1xuXG5mdW5jdGlvbiB2aWV3Rm9ybUxpc3RlbmVyKHRhc2spe1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTtcbiAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBhZGRMaXN0LmdldERhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc29sZS5sb2codGFzay50aXRsZSk7XG4gICAgICAgIHRhc2sudGl0bGUgPSBmb3JtWzBdOyBcbiAgICAgICAgdGFzay5wYXJlbnRMaXN0ID0gZm9ybVsxXTtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gZm9ybVsyXTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IGZvcm1bM107XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBmb3JtWzRdOyBcbiAgICAgICAgYWRkTGlzdC50ZXN0KCk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTsgXG5cbiAgICAgICAgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgICAgIERPTVRJLnJlcGxhY2VQYWdlKGNhcmRMaXN0KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNsb3NlQnRuTGlzdGVuZXIoKXtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNsb3NlLWJ0bicpO1xuICAgIGNvbnN0IGFkZExpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1saXN0LWZvcm0nKTtcbiAgICBjbG9zZUJ0bi5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9uLnBhcmVudEVsZW1lbnQpOyBcbiAgICAgICAgaWYgKGJ1dHRvbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZU5vZGUoJ2lkJykudmFsdWUgIT09ICdhZGQtdGFzay1mb3JtJyApe1xuICAgICAgICAgICAgYWRkTGlzdEZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICByZW1vdmVGb3JtKCk7IFxuICAgICAgICB9O1xuICAgIH0pKTtcbn07XG4vLyBpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZSgnaWQnKS52YWx1ZSAhPT0gJ2FkZC10YXNrLWZvcm0nICl7XG4vLyAgICAgYWRkTGlzdEZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgXG4vLyB9IGVsc2Uge1xuLy8gICAgICByZW1vdmVGb3JtKCk7IFxuLy8gfTtcblxuXG5cblxuZXhwb3J0IHsgbWFrZUZvcm0sIHJlbW92ZUZvcm0sIGFkZFRhc2tMaXN0ZW5lciwgdmlld0Zvcm0sIHZpZXdGb3JtTGlzdGVuZXIsIGNsb3NlQnRuTGlzdGVuZXIgfVxuXG4iLCJpbXBvcnQgKiBhcyBhZGRMaXN0IGZyb20gJy4vYWRkLWxpc3QnXG5pbXBvcnQgKiBhcyBhZGRUYXNrIGZyb20gJy4vYWRkLXRhc2snXG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00tbGlzdGludGVyZmFjZSdcbmltcG9ydCAqIGFzIERPTVRJIGZyb20gJy4vRE9NLXRhc2tpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01UYXNrIGZyb20gJy4vRE9NLXRhc2tzJ1xuaW1wb3J0ICogYXMgRE9NRm9ybSBmcm9tICcuL0RPTS10YXNrZm9ybSdcblxuZnVuY3Rpb24gcmVwbGFjZVBhZ2UoY2FyZCkge1xuICAgIGNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staW50ZXJmYWNlJyk7XG4gICAgY29uc3QgcHJlc2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICBjb25zdCBleGlzdGluZ0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtZHJvcGRvd24nKTsgXG5cbiAgICBpZiAobGlzdFBhZ2UubGFzdEVsZW1lbnRDaGlsZCA9PSBwcmVzZW50KXtcbiAgICAgICAgbGlzdFBhZ2UubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTsgXG4gICAgICAgIGV4aXN0aW5nRHJvcGRvd24uZm9yRWFjaCgoZHJvcGRvd24pID0+IGRyb3Bkb3duLnJlbW92ZSgpKTsgXG4gICAgfTsgXG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZm9ybScpKXtcbiAgICAgICAgRE9NRm9ybS5yZW1vdmVGb3JtKCk7IFxuICAgIH07IFxuXG4gICAgbWFrZVBhZ2UoY2FyZCk7XG4gICAgYWRkVGFza0J0bigpOyBcbiAgICBET01UYXNrLmFkZFJlbW92ZUFsbEJ0bigpO1xufTtcblxuZnVuY3Rpb24gbWFrZVBhZ2UoY2FyZCl7XG4gICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbnRlcmZhY2UnKTtcbiAgICBjb25zdCBwYWdlID0gRE9NLm1ha2UoJ2RpdicsIGxpc3RQYWdlLCAnbGlzdC1wYWdlJyk7IFxuXG4gICAgY29uc3QgbGlzdEluZm8gPSBET00uZmluZExpc3QoY2FyZCk7IFxuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsIGAke2xpc3RJbmZvLmNvZGV9YCk7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gRE9NLm1ha2UoJ2RpdicsIHBhZ2UsICd0by1kby1saXN0Jyk7IFxuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IGxpc3RJbmZvLnRpdGxlOyBcbiAgICBET01UYXNrLm1ha2VMaXN0SXRlbXMobGlzdEluZm8pO1xufTtcblxuXG5mdW5jdGlvbiBhZGRUYXNrQnRuKCkge1xuICAgIGNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG5uID0gRE9NLm1ha2UoJ2J1dHRvbicsIGxpc3RQYWdlLCAnYWRkLXRhc2snKTtcbiAgICBhZGRUYXNrQnRubi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVGFza1wiO1xuXG4gICAgYWRkVGFza0J0bm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTUZvcm0ubWFrZUZvcm0oKTsgXG4gICAgICAgIERPTUZvcm0uYWRkVGFza0xpc3RlbmVyKCk7IFxuICAgIH0pOyBcbn07XG5cbmZ1bmN0aW9uIGFkZEN1cnJlbnREYXRlKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staW50ZXJmYWNlLWhlYWRlcicpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpOyBcbiAgICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpKzEpO1xuICAgIGNvbnN0IHkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFRvZGF5IGlzICR7bW19LyR7ZGR9LyR7eX1gXG59XG5cblxuXG5cbmV4cG9ydCB7IHJlcGxhY2VQYWdlLCBhZGRDdXJyZW50RGF0ZSB9IiwiaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NRm9ybSBmcm9tICcuL0RPTS10YXNrZm9ybSdcbmltcG9ydCByZW1vdmVJbWcgZnJvbSAnLi9pY29ucy90cmFzaC1jYW4tb3V0bGluZS5zdmcnXG5pbXBvcnQgdmlld0ltZyBmcm9tICcuL2ljb25zL2V5ZS5zdmcnXG5cbmZ1bmN0aW9uIG1ha2VMaXN0SXRlbXMocGFyZW50TGlzdCl7XG4gICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpOyBcbiAgICBjb25zdCB0YXNrTGlzdCA9IERPTS5tYWtlKCdkaXYnLCBwYXJlbnRDb250YWluZXIsICdsaXN0Jyk7XG4gICAgY29uc3QgIGxpc3QgPSBwYXJlbnRMaXN0LnRhc2tMaXN0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbXNDb250YWluZXIgPSBET00ubWFrZSgnZGl2JywgdGFza0xpc3QsICdpdGVtLWNvbnRhaW5lcicpOyBcbiAgICAgICAgaXRlbXNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBsaXN0LWl0ZW0ke2l9YCk7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gRE9NLm1ha2UoJ2lucHV0JywgaXRlbXNDb250YWluZXIsICdsaXN0LWl0ZW0nKTsgXG4gICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IERPTS5tYWtlKCdsYWJlbCcsIGl0ZW1zQ29udGFpbmVyLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpOyBcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCduYW1lJywgYGxpc3QtaXRlbSR7aX1gKTsgXG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7IFxuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGxpc3QtaXRlbSR7aX1gKTtcbiAgICAgICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCBgbGlzdC1pdGVtJHtpfWApO1xuICAgICAgICBpdGVtTGFiZWwudGV4dENvbnRlbnQgPSBsaXN0W2ldLnRpdGxlOyBcbiAgICAgICAgRE9NLm1ha2UoJ2RpdicsIGl0ZW1zQ29udGFpbmVyLCAndGFzay1kdWUnKS50ZXh0Q29udGVudCA9IGxpc3RbaV0uZHVlRGF0ZVxuICAgICAgICBjb25zdCB2aWV3QnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIGl0ZW1zQ29udGFpbmVyLCAndGFzay12aWV3LWJ0bicpXG4gICAgICAgIERPTS5tYWtlKCdpbWcnLCB2aWV3QnRuLCBudWxsKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZpZXdJbWcpXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IERPTS5tYWtlKCdidXR0b24nLCBpdGVtc0NvbnRhaW5lciwgJ3Rhc2stZGVsZXRlLWJ0bicpXG4gICAgICAgIERPTS5tYWtlKCdpbWcnLCByZW1vdmVCdG4sIG51bGwpLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVtb3ZlSW1nKTtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlDb2xvcnMobGlzdFtpXS5wcmlvcml0eSwgaXRlbUxhYmVsKTtcbiAgICAgICAgdmlld0l0ZW1zKGxpc3RbaV0pO1xuICAgICAgICByZW1vdmVUYXNrcyhpdGVtc0NvbnRhaW5lcik7IFxuICAgIH07XG4gICAgZmluaXNoVGFza0xpc3RlbmVyKCk7ICBcbn07XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5Q29sb3JzKGl0ZW1Qcmlvcml0eSwgaXRlbSl7XG4gICAgc3dpdGNoKGl0ZW1Qcmlvcml0eSl7XG4gICAgICAgIGNhc2UgKCdIaWdoJyk6IFxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbWVkJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdMb3cnOiBcbiAgICAgICAgICAgIGl0ZW0uIGNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdycpXG4gICAgICAgICAgICBicmVhazsgXG4gICAgfTsgXG59OyBcblxuZnVuY3Rpb24gdmlld0l0ZW1zKGl0ZW0pe1xuICAgIGNvbnN0IHZpZXdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdmlldy1idG4nKTsgXG4gICAgY29uc3Qgdmlld0J0biA9IHZpZXdCdG5zW3ZpZXdCdG5zLmxlbmd0aC0xXTsgXG4gICAgdmlld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIERPTUZvcm0ubWFrZUZvcm0oKTsgXG4gICAgICAgICAgICBET01Gb3JtLnZpZXdGb3JtKGl0ZW0pOyBcbiAgICAgICAgICAgIERPTUZvcm0udmlld0Zvcm1MaXN0ZW5lcihpdGVtKTsgXG4gICAgICAgIH0pOyBcbn07XG5cbmZ1bmN0aW9uIGZpbmlzaFRhc2tMaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpOyBcbiAgICBcbiAgICBjaGVja0JveC5mb3JFYWNoKChib3gpID0+IGJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudExpc3QgPSBib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBET00uZmluZExpc3QocGFyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUoYm94LmdldEF0dHJpYnV0ZSgnaWQnKSwgbGlzdC50YXNrTGlzdCk7XG4gICAgICAgIGNvbnN0IGZUYXNrID0gYWRkTGlzdC5maW5kTWF0Y2hDb2RlKGJveC5nZXRBdHRyaWJ1dGUoJ2lkJyksIGxpc3QuZmluaXNoZWRUYXNrcyk7XG5cbiAgICAgICAgaWYgKGJveC5jaGVja2VkKXtcbiAgICAgICAgICAgIGJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkLXRhc2snKTsgXG4gICAgICAgICAgICBsaXN0LnRhc2tMaXN0ID0gYWRkVGFzay5tb3ZlVGFza0Zyb20odGFzaywgbGlzdC50YXNrTGlzdCk7IFxuICAgICAgICAgICAgbGlzdC5maW5pc2hlZFRhc2tzID0gYWRkVGFzay5tb3ZlVGFza1RvKHRhc2ssIGxpc3QuZmluaXNoZWRUYXNrcyk7IFxuICAgICAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7XG4gICAgICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCFib3guY2hlY2tlZCl7IFxuICAgICAgICAgICAgaWYoYm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaW5pc2hlZC10YXNrJykpe1xuICAgICAgICAgICAgICAgIGJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkLXRhc2snKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsaXN0LmZpbmlzaGVkVGFza3MgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbShmVGFzaywgbGlzdC5maW5pc2hlZFRhc2tzKTsgXG4gICAgICAgICAgICBsaXN0LnRhc2tMaXN0ID0gYWRkVGFzay5tb3ZlVGFza1RvKGZUYXNrLCBsaXN0LnRhc2tMaXN0KTsgXG4gICAgICAgICAgICBET00udXBkYXRlQ2FyZFRleHQoKTsgXG4gICAgICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgKSk7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVUYXNrcyh0YXNrQ29udGFpbmVyKXtcbiAgICBjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGVsZXRlLWJ0bicpOyBcbiAgICBjb25zdCByZW1vdmVCdG4gPSByZW1vdmVCdG5zW3JlbW92ZUJ0bnMubGVuZ3RoLTFdO1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50TGlzdCA9IHRhc2tDb250YWluZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBsaXN0ID0gRE9NLmZpbmRMaXN0KHBhcmVudExpc3QpO1xuICAgICAgICBjb25zdCB0YXNrID0gYWRkTGlzdC5maW5kTWF0Y2hDb2RlKHRhc2tDb250YWluZXIuZ2V0QXR0cmlidXRlKCdpZCcpLCBsaXN0LnRhc2tMaXN0KTtcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbSh0YXNrLCBsaXN0LnRhc2tMaXN0KTtcbiAgICAgICAgbGlzdC50YXNrTGlzdCA9IG5ld0FycmF5OyBcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICB9KTsgXG59OyBcblxuZnVuY3Rpb24gYWRkUmVtb3ZlQWxsQnRuKCl7XG4gICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgY29uc3QgcmVtb3ZlVGFza0J0biA9IERPTS5tYWtlKCdidXR0b24nLCBsaXN0UGFnZSwgJ3JlbW92ZS1maW5pc2hlZC1idG4nKTtcbiAgICByZW1vdmVUYXNrQnRuLnRleHRDb250ZW50ID0gJy0gUmVtb3ZlIEFsbCBGaW5pc2hlZCBUYXNrcyc7IFxuXG4gICAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICAgICAgY29uc3QgcGFyZW50TGlzdCA9IERPTS5maW5kTGlzdChsaXN0KTsgXG4gICAgICAgIHBhcmVudExpc3QuZmluaXNoZWRUYXNrcyA9IFtdOyBcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmluaXNoZWQtdGFzaycpO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICB9KTtcbn07XG5cblxuXG5cbmV4cG9ydCB7IG1ha2VMaXN0SXRlbXMsIGFkZFJlbW92ZUFsbEJ0biB9IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cydcblxubGV0IGFsbExpc3RzID0gW107IFxuXG5mdW5jdGlvbiB0ZXN0KCl7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkoYWxsTGlzdHMpKTtcbn07IFxuXG5mdW5jdGlvbiBnZXREYXRhKGZvcm0pe1xuICAgIGxldCB2YWx1ZXNBcnIgPSBbXTsgXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZm9ybURhdGEudmFsdWVzKCkpe1xuICAgICAgICB2YWx1ZXNBcnIucHVzaCh2YWx1ZSk7IFxuICAgIH07XG4gICAgcmV0dXJuIHZhbHVlc0FycjsgXG59O1xuXG5mdW5jdGlvbiBmaW5kTWF0Y2gobmFtZSwgbGlzdHMpIHtcbiAgICBjb25zdCBuYW1lcyA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LnRpdGxlID09IG5hbWUpOyBcbiAgICByZXR1cm4gbmFtZXM7IFxufTsgXG5cbmZ1bmN0aW9uIGZpbmRNYXRjaENvZGUobmFtZSwgbGlzdHMpIHtcbiAgICBjb25zdCBuYW1lcyA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmNvZGUgPT0gbmFtZSk7IFxuICAgIHJldHVybiBuYW1lczsgXG59OyBcblxuZnVuY3Rpb24gdGl0bGVOYW1lVmFsaWRhdGlvbih0aXRsZSl7XG4gICAgaWYodGl0bGUgPT0gJycpe1xuICAgICAgICByZXR1cm4gdGl0bGUgPSBgTGlzdCAke2FsbExpc3RzLmxlbmd0aH1gXG4gICAgfSBlbHNlIGlmKGZpbmRNYXRjaCh0aXRsZSwgYWxsTGlzdHMpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTsgXG4gICAgICAgIHJldHVybiB0aXRsZSA9IGAke3RpdGxlfSAoTGlzdCAke2FsbExpc3RzLmxlbmd0aH0pYFxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcbn07XG5cbmNvbnN0IG1ha2VMaXN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza0xpc3QsIGZpbmlzaGVkVGFza3MsIGNvZGUpID0+IHtcbiAgICB0aXRsZSA9IHRpdGxlTmFtZVZhbGlkYXRpb24odGl0bGUpO1xuICAgIHRhc2tMaXN0ID0gW107IFxuICAgIGZpbmlzaGVkVGFza3MgPSBbXTsgXG4gICAgY29kZSA9IGBjb2RlJHthbGxMaXN0cy5sZW5ndGh9YDtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tMaXN0LCBmaW5pc2hlZFRhc2tzLCBjb2RlIH1cbn07XG5cbmZ1bmN0aW9uIGFkZChmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGdldERhdGEoZm9ybSk7XG4gICAgY29uc3QgbGlzdCA9IG1ha2VMaXN0KGZvcm1EYXRhWzBdLCBmb3JtRGF0YVsxXSk7IFxuICAgIGFsbExpc3RzLnB1c2gobGlzdCk7IFxuICAgIHRlc3QoKTsgXG59O1xuXG5mdW5jdGlvbiByZW5ldyhmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGdldERhdGEoZm9ybSk7XG4gICAgZm9ybURhdGFbMF0gPSAnJzsgXG4gICAgZm9ybURhdGFbMV0gPSAnJztcbn1cblxuZnVuY3Rpb24gY2hhbmdlQWxsTGlzdChsaXN0KXtcbiAgICBhbGxMaXN0cyA9IGxpc3Q7IFxufTsgXG5cblxuZXhwb3J0IHsgdGVzdCwgbWFrZUxpc3QsIGdldERhdGEsIGFkZCwgYWxsTGlzdHMsIGZpbmRNYXRjaCwgY2hhbmdlQWxsTGlzdCwgZmluZE1hdGNoQ29kZSwgcmVuZXcgfSIsImltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cydcbmltcG9ydCAqIGFzIGFkZExpc3QgZnJvbSAnLi9hZGQtbGlzdCdcblxuXG5jb25zdCBtYWtlVGFzayA9ICh0aXRsZSwgcGFyZW50TGlzdCwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBjb2RlICkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhZGRMaXN0LmZpbmRNYXRjaChwYXJlbnRMaXN0LCBhZGRMaXN0LmFsbExpc3RzKS50YXNrTGlzdDtcbiAgICBjb2RlID0gYGxpc3QtaXRlbSR7bGlzdC5sZW5ndGh9YDsgXG4gICAgY29uc29sZS5sb2cocHJpb3JpdHkpO1xuICAgIHJldHVybiB7IHRpdGxlLCBwYXJlbnRMaXN0LCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGNvZGUgfVxufTtcblxuXG5mdW5jdGlvbiBhZGRUKGZvcm0pe1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYWRkTGlzdC5nZXREYXRhKGZvcm0pO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhWzNdKVxuICAgIGNvbnN0IHRhc2sgPSBtYWtlVGFzayhmb3JtRGF0YVswXSwgZm9ybURhdGFbMV0sIGZvcm1EYXRhWzJdLCBmb3JtRGF0YVszXSwgZm9ybURhdGFbNF0pOyBcbiAgICBhZGRUYXNrdG9MaXN0KHRhc2spO1xuICAgIGFkZExpc3QudGVzdCgpOyBcbn07XG5cbmZ1bmN0aW9uIGFkZFRhc2t0b0xpc3QodGFzayl7XG4gICAgY29uc3QgYWxsTGlzdHMgPSBhZGRMaXN0LmFsbExpc3RzO1xuICAgIGNvbnN0IHBhcmVudExpc3QgPSBhbGxMaXN0cy5maW5kKGxpc3QgPT4gbGlzdC50aXRsZSA9PSB0YXNrLnBhcmVudExpc3QpO1xuICAgIHBhcmVudExpc3QudGFza0xpc3QucHVzaCh0YXNrKTsgXG4gICAgXG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVRhc2tOYW1lKGZvcm0pe1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYWRkTGlzdC5nZXREYXRhKGZvcm0pO1xuICAgIGlmKGZvcm1EYXRhWzBdID09ICcnKXtcbiAgICAgICAgYWxlcnQoXCJFbXB0eSBOYW1lXCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2V7XG4gICAgICAgIHJldHVybiB0cnVlOyBcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBtb3ZlVGFza0Zyb20odGFzaywgaW5pdGlhbCl7XG4gICAgY29uc3QgbmV3SW5pdGlhbCA9IGluaXRpYWwuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFzayk7XG4gICAgbGV0IG5ld0FycmF5O1xuXG4gICAgaWYgKCFuZXdJbml0aWFsKXtcbiAgICAgICByZXR1cm4gbmV3QXJyYXkgPSBbXTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5ID0gbmV3SW5pdGlhbDsgXG4gICAgfVxuICAgXG59O1xuXG5mdW5jdGlvbiBtb3ZlVGFza1RvKHRhc2ssIGFycmF5KXtcbiAgICBhcnJheS5wdXNoKHRhc2spO1xuICAgIHJldHVybiBhcnJheTsgXG59OyBcblxuZnVuY3Rpb24gY2hhbmdlQWxsTGlzdChsaXN0KXtcbiAgICBhZGRMaXN0LmFsbExpc3RzID0gbGlzdDsgXG59OyBcblxuXG5cbmV4cG9ydCB7IG1ha2VUYXNrLCBhZGRULCBhZGRUYXNrdG9MaXN0LCB2YWxpZGF0ZVRhc2tOYW1lLCBtb3ZlVGFza0Zyb20sIG1vdmVUYXNrVG8gfVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgZm9ybWF0LCBjb21wYXJlQXNjIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuaW1wb3J0IHsgYWxsTGlzdHMsIG1ha2VMaXN0LCBjaGFuZ2VBbGxMaXN0IH0gZnJvbSAnLi9hZGQtbGlzdCc7XG5pbXBvcnQgeyBhZGRDdXJyZW50RGF0ZSB9IGZyb20gJy4vRE9NLXRhc2tpbnRlcmZhY2UnO1xuXG5cbi8vbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xpc3QnKVxuXG5ET01USS5hZGRDdXJyZW50RGF0ZSgpXG5cbmZ1bmN0aW9uIGRlZmF1bHRMaXN0KCl7XG4gICAgY29uc3QgZGVmYXVsdExpc3QgPSBtYWtlTGlzdChcIkRlZmF1bHQgTGlzdFwiLCBcIlRoaXMgaXMgeW91ciBmaXJzdCBsaXN0IVwiKTtcbiAgICBhbGxMaXN0cy5wdXNoKGRlZmF1bHRMaXN0KTsgXG4gICAgRE9NLm1ha2VMaXN0Q2FyZCgpOyBcbiAgICBET00ubGlzdENhcmRMaXN0ZW5lcigpOyBcbn07XG5cblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKXtcbiAgICBET00uYWRkTGlzdEJ0bigpO1xuICAgIGRlZmF1bHRMaXN0KCk7IFxufSBlbHNlIHtcbiAgICBjaGFuZ2VBbGxMaXN0KEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpKTtcbiAgICBET00uYWRkTGlzdEJ0bigpO1xuICAgIERPTS5tYWtlSW5pdGlhbENhcmRzKCk7IFxuICAgIERPTS5pbml0aWFsQ2FyZExpc3RlbmVyKCk7IFxufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9