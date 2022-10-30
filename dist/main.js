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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --form-visibility: block; \n}\n\nhtml, body, #content{\n    margin: 0; \n    width: 100%;\n    height: 100%;\n}\n\n#content{\n    display: flex;\n    flex-direction: row;\n}\n\n\n#list-interface{\n    padding: 20px;\n    height: 100%; \n    width: 50%; \n    background-color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 200px 200px;\n    row-gap: 20px;\n    column-gap: 10px;\n    justify-items: center;\n    overflow: scroll;\n}\n\n #list-maker{\n    background-color: white;\n    border-color: black;\n    border-style: solid;\n} \n\n.add-list-img{\n    width: 50px;\n}\n\n#add-list-form {\n    display: none;\n    position: absolute;\n    top: 10%;\n    background: white;\n    padding: 20px;\n    border: 1px solid;\n    border-radius: 20px;\n}\n\n.list-form {\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n    font-size: 15px;\n    gap: 5px;\n    border-radius: 20px;\n}\n\n.form-close-btn {\n    width: 20px;\n    padding: 3px;\n    background-color: transparent;\n    align-self: flex-end;\n    border:none;\n}\n\nbutton[type=submit]{\n    width: 50px;\n    background-color: transparent;\n    border: none;\n    border-radius: 20px;\n}\n\n[class ^= 'list-card'],\n#list-maker {\n    height: 200px;\n    width: 100%; \n    box-sizing: border-box;\n    /* border: solid; */\n    border-radius: 20px;\n    border-width: 1px;\n}\n\n.list-card{\n    font-family: sans-serif;\n    padding: 10%;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n\n.list-card div:nth-child(1){\n    font-weight: bold;\n}\n\n#list-interface .list-card:nth-child(4n -1){\n    background-color: #ffbe0b;\n}\n\n#list-interface .list-card:nth-child(4n+1){\n    background-color: #Ff006e;\n}\n\n#list-interface .list-card:nth-child(4n){\n    background-color: #Fb5607;\n    color: white;\n}\n\n#list-interface .list-card:nth-child(4n+2){\n    background-color: #8338ec;\n    color: white;\n}\n\n.remove-button{\n    width: 50px;\n    height: 50px;\n    background-color: transparent;\n}\n\n.remove-button img{\n    width: 20px;\n    height: 20px;\n}\n\n\n/* task inter */\n#task-interface{\n    height: 100%;\n    width: 50%;\n    background-color: white;\n    display: flex; \n    flex-direction: column;\n}\n\n.task-interface-header{\n    font-family: sans-serif;\n    font-size: 50px;\n    align-self: flex-end;\n}\n\n.list-page{\n    height: fit-content;\n    width: 80%;\n    align-self: center;\n    background-color: white;\n    /* border: 1px solid; */\n    border-radius: 20px;\n    padding: 5%; \n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n}\n\n.to-do-list{\n    height: fit-content;\n    width: 100%;\n    text-decoration: underline;\n    font-size: 25px;\n    font-weight: bold;\n    padding-bottom: 20px;\n}\n\n\n\n.item-container{\n    display: grid;\n    grid-template-columns: 20px 1fr 1fr 50px 50px;\n    align-items: center;\n}\n\n.list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n}\n\n.task-due{\n    text-align: end;\n    justify-self: end;\n}\n\n.task-view-btn img,\n.task-delete-btn img{\n    width: 15px;\n    height: 15px;\n    filter:opacity(50%);\n}\n\n.task-delete-btn,\n.task-view-btn{\n    width: fit-content;\n    height: fit-content; \n    padding: 0; \n    background-color: transparent;\n    border: none;\n    justify-self: end;\n}\n\n.add-task{\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    margin: 0; \n    font-family: sans-serif;\n    font-size: 1em;\n    padding-top: 10px;\n    align-self: flex-start;\n}\n\n.remove-finished-btn{\n    margin-top: 50px;\n    background-color: transparent;\n    border: none;\n}\n\n.priority-high{\n    background-color: rgb(255, 0, 110, 0.2);\n}\n\n.priority-med{\n    background-color: rgb(251, 86, 7, 0.2);\n}\n\n.priority-low{\n    background-color: rgb(255, 190, 11, 0.2);\n}\n\n/* add task & view form */\n.view-form{\n    position: absolute; \n    top: 20%;\n    left: 20%;\n    right: 20%;\n    background-color: white;\n    border: 1px solid;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 5px;\n    font-family: sans-serif;\n}\n\n#task-title{\n    border: none;\n    font-size: 1em;\n}\n\n.finished-task{\n    text-decoration:line-through;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --form-visibility: block; \n}\n\nhtml, body, #content{\n    margin: 0; \n    width: 100%;\n    height: 100%;\n}\n\n#content{\n    display: flex;\n    flex-direction: row;\n}\n\n\n#list-interface{\n    padding: 20px;\n    height: 100%; \n    width: 50%; \n    background-color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 200px 200px;\n    row-gap: 20px;\n    column-gap: 10px;\n    justify-items: center;\n    overflow: scroll;\n}\n\n #list-maker{\n    background-color: white;\n    border-color: black;\n    border-style: solid;\n} \n\n.add-list-img{\n    width: 50px;\n}\n\n#add-list-form {\n    display: none;\n    position: absolute;\n    top: 10%;\n    background: white;\n    padding: 20px;\n    border: 1px solid;\n    border-radius: 20px;\n}\n\n.list-form {\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n    font-size: 15px;\n    gap: 5px;\n    border-radius: 20px;\n}\n\n.form-close-btn {\n    width: 20px;\n    padding: 3px;\n    background-color: transparent;\n    align-self: flex-end;\n    border:none;\n}\n\nbutton[type=submit]{\n    width: 50px;\n    background-color: transparent;\n    border: none;\n    border-radius: 20px;\n}\n\n[class ^= 'list-card'],\n#list-maker {\n    height: 200px;\n    width: 100%; \n    box-sizing: border-box;\n    /* border: solid; */\n    border-radius: 20px;\n    border-width: 1px;\n}\n\n.list-card{\n    font-family: sans-serif;\n    padding: 10%;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n\n.list-card div:nth-child(1){\n    font-weight: bold;\n}\n\n#list-interface .list-card:nth-child(4n -1){\n    background-color: #ffbe0b;\n}\n\n#list-interface .list-card:nth-child(4n+1){\n    background-color: #Ff006e;\n}\n\n#list-interface .list-card:nth-child(4n){\n    background-color: #Fb5607;\n    color: white;\n}\n\n#list-interface .list-card:nth-child(4n+2){\n    background-color: #8338ec;\n    color: white;\n}\n\n.remove-button{\n    width: 50px;\n    height: 50px;\n    background-color: transparent;\n}\n\n.remove-button img{\n    width: 20px;\n    height: 20px;\n}\n\n\n/* task inter */\n#task-interface{\n    height: 100%;\n    width: 50%;\n    background-color: white;\n    display: flex; \n    flex-direction: column;\n}\n\n.task-interface-header{\n    font-family: sans-serif;\n    font-size: 50px;\n    align-self: flex-end;\n}\n\n.list-page{\n    height: fit-content;\n    width: 80%;\n    align-self: center;\n    background-color: white;\n    /* border: 1px solid; */\n    border-radius: 20px;\n    padding: 5%; \n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n}\n\n.to-do-list{\n    height: fit-content;\n    width: 100%;\n    text-decoration: underline;\n    font-size: 25px;\n    font-weight: bold;\n    padding-bottom: 20px;\n}\n\n\n\n.item-container{\n    display: grid;\n    grid-template-columns: 20px 1fr 1fr 50px 50px;\n    align-items: center;\n}\n\n.list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n}\n\n.task-due{\n    text-align: end;\n    justify-self: end;\n}\n\n.task-view-btn img,\n.task-delete-btn img{\n    width: 15px;\n    height: 15px;\n    filter:opacity(50%);\n}\n\n.task-delete-btn,\n.task-view-btn{\n    width: fit-content;\n    height: fit-content; \n    padding: 0; \n    background-color: transparent;\n    border: none;\n    justify-self: end;\n}\n\n.add-task{\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    margin: 0; \n    font-family: sans-serif;\n    font-size: 1em;\n    padding-top: 10px;\n    align-self: flex-start;\n}\n\n.remove-finished-btn{\n    margin-top: 50px;\n    background-color: transparent;\n    border: none;\n}\n\n.priority-high{\n    background-color: rgb(255, 0, 110, 0.2);\n}\n\n.priority-med{\n    background-color: rgb(251, 86, 7, 0.2);\n}\n\n.priority-low{\n    background-color: rgb(255, 190, 11, 0.2);\n}\n\n/* add task & view form */\n.view-form{\n    position: absolute; \n    top: 20%;\n    left: 20%;\n    right: 20%;\n    background-color: white;\n    border: 1px solid;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 5px;\n    font-family: sans-serif;\n}\n\n#task-title{\n    border: none;\n    font-size: 1em;\n}\n\n.finished-task{\n    text-decoration:line-through;\n}"],"sourceRoot":""}]);
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
    const list = parentList.allTasks;
    console.log(parentList.allTasks);
    console.log(parentList.finishedTasks);
    console.log(parentList.taskList);

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
        makeChecks(list[i].status, listItem, itemsContainer); 
        changePriorityColors(list[i].priority, itemLabel);
        viewItems(list[i]);
        removeTasks(itemsContainer); 
    };
    finishTaskListener();  
};
function makeChecks(status, box, container){
    if(status == 'checked' && !container.classList.contains('finished-task')){
        box.checked = true;
        container.classList.add('finished-task');
    }
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
            task.status = 'checked'; 
            list.taskList = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(task, list.taskList); 
            list.finishedTasks = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskTo(task, list.finishedTasks); 
            _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText();
            _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
        }
        else if(!box.checked){ 
            const fTask = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(box.getAttribute('id'), list.finishedTasks);
            if(box.parentElement.classList.contains('finished-task')){
                box.parentElement.classList.remove('finished-task');
            };
            list.finishedTasks = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(fTask, list.finishedTasks); 
            list.taskList = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskTo(fTask, list.taskList); 
            fTask.status = 'unchecked'; 
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
        const aTask = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(taskContainer.getAttribute('id'), list.allTasks);

        if (taskContainer.classList.contains('finished-task')){
            const fTask = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatchCode(taskContainer.getAttribute('id'), list.finishedTasks);
            const fAllNewArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(aTask, list.allTasks);
            list.allTasks = fAllNewArray; 
            const fnewArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(fTask, list.finishedTasks); 
            list.finishedTasks = fnewArray; 
             
        } else {
            const allNewArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(aTask, list.allTasks);
            list.allTasks = allNewArray; 

            const newArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(task, list.taskList);
            list.taskList = newArray; 
           
        }
        taskContainer.remove();
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText(); 
        _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
    }); 
}; 

function addRemoveAllBtn(){
    const listPage = document.querySelector('.list-page')
    const removeTaskBtn = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', listPage, 'remove-finished-btn');
    removeTaskBtn.textContent = 'Remove All Finished Tasks'; 

    removeTaskBtn.addEventListener('click', () => {
        const parentList = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.findList(listPage); 

        parentList.finishedTasks.forEach((task) => {
            const newArray = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(task, parentList.allTasks);
            parentList.allTasks = newArray; 
            _add_list__WEBPACK_IMPORTED_MODULE_0__.test();
        }); 
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

const makeList = (title, description, taskList, finishedTasks, allTasks, code) => {
    title = titleNameValidation(title);
    taskList = []; 
    finishedTasks = []; 
    allTasks = [];
    code = `code${allLists.length}`;
    return { title, description, taskList, finishedTasks, allTasks, code }
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





const makeTask = (title, parentList, dueDate, priority, description, status, code ) => {
    const list = _add_list__WEBPACK_IMPORTED_MODULE_0__.findMatch(parentList, _add_list__WEBPACK_IMPORTED_MODULE_0__.allLists).taskList;
    code = `list-item${list.length}`; 
    status = 'unchecked';
    return { title, parentList, dueDate, priority, description, status, code }
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
    parentList.allTasks.push(task); 
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
/* harmony import */ var _DOM_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-tasks */ "./src/DOM-tasks.js");
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");










//localStorage.removeItem('list')

_DOM_taskinterface__WEBPACK_IMPORTED_MODULE_2__.addCurrentDate()

function defaultList(){
    const defaultList = (0,_add_list__WEBPACK_IMPORTED_MODULE_4__.makeList)("Default List", "This is your first list!");
    _add_list__WEBPACK_IMPORTED_MODULE_4__.allLists.push(defaultList); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.makeListCard(); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.listCardListener(); 
};


if (!localStorage.getItem('list')){
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.addListBtn();
    defaultList(); 
} else {
    (0,_add_list__WEBPACK_IMPORTED_MODULE_4__.changeAllList)(JSON.parse(window.localStorage.getItem('list')));
    
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.addListBtn();
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.makeInitialCards(); 
    _DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.initialCardListener(); 
};

console.log(_add_list__WEBPACK_IMPORTED_MODULE_4__.allLists); 

// function loadChecks(){
//     for (let i=0; i<DOMTask.savedChecks.length; i++){
//         const checked = JSON.parse(window.localStorage.getItem(`checkbox${i}`));
//         document.getElementById(`list-item${i}}`).checked == checked;
//     }; 
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbEI7QUFDQSxFQUFFO0FBQ0YsSUFBSSx3REFBYTtBQUNqQjtBQUNBLElBQUksMERBQWM7QUFDbEIsSUFBSSxnRUFBb0I7QUFDeEIsSUFBSSxtRUFBdUI7QUFDM0I7O0FBRUEsWUFBWSwrQ0FBUTs7QUFFcEI7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25ELDZFQUE2RSxFQUFFO0FBQy9FLCtDQUErQyxHQUFHO0FBQ2xEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00tbGlzdGludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00tdGFza2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tpbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZC1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb3JtLXZpc2liaWxpdHk6IGJsb2NrOyBcXG59XFxuXFxuaHRtbCwgYm9keSwgI2NvbnRlbnR7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5cXG4jbGlzdC1pbnRlcmZhY2V7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIHdpZHRoOiA1MCU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAyMDBweDtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4gI2xpc3QtbWFrZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn0gXFxuXFxuLmFkZC1saXN0LWltZ3tcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbiNhZGQtbGlzdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ubGlzdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5mb3JtLWNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyOm5vbmU7XFxufVxcblxcbmJ1dHRvblt0eXBlPXN1Ym1pdF17XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5bY2xhc3MgXj0gJ2xpc3QtY2FyZCddLFxcbiNsaXN0LW1ha2VyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLmxpc3QtY2FyZHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcbn1cXG5cXG4ubGlzdC1jYXJkIGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4gLTEpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZTBiO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4rMSl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGZjAwNmU7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0bil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGYjU2MDc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuKzIpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMzOGVjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9ue1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24gaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4vKiB0YXNrIGludGVyICovXFxuI3Rhc2staW50ZXJmYWNle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2staW50ZXJmYWNlLWhlYWRlcntcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5saXN0LXBhZ2V7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1JTsgXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcbn1cXG5cXG4udG8tZG8tbGlzdHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuXFxuXFxuLml0ZW0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyIDFmciA1MHB4IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi50YXNrLWR1ZXtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRhc2stdmlldy1idG4gaW1nLFxcbi50YXNrLWRlbGV0ZS1idG4gaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmaWx0ZXI6b3BhY2l0eSg1MCUpO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnRuLFxcbi50YXNrLXZpZXctYnRue1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7IFxcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5hZGQtdGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnJlbW92ZS1maW5pc2hlZC1idG57XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAxMTAsIDAuMik7XFxufVxcblxcbi5wcmlvcml0eS1tZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDg2LCA3LCAwLjIpO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDExLCAwLjIpO1xcbn1cXG5cXG4vKiBhZGQgdGFzayAmIHZpZXcgZm9ybSAqL1xcbi52aWV3LWZvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIHJpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGFzay10aXRsZXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmZpbmlzaGVkLXRhc2t7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0NBRUM7SUFDRyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsdUhBQXVIO0FBQzNIOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBLGVBQWU7QUFDZjtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWZvcm0tdmlzaWJpbGl0eTogYmxvY2s7IFxcbn1cXG5cXG5odG1sLCBib2R5LCAjY29udGVudHtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcblxcbiNsaXN0LWludGVyZmFjZXtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgd2lkdGg6IDUwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDIwMHB4O1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiAjbGlzdC1tYWtlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxufSBcXG5cXG4uYWRkLWxpc3QtaW1ne1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuI2FkZC1saXN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5saXN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmZvcm0tY2xvc2UtYnRuIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXI6bm9uZTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9c3VibWl0XXtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbltjbGFzcyBePSAnbGlzdC1jYXJkJ10sXFxuI2xpc3QtbWFrZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGJvcmRlcjogc29saWQ7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4ubGlzdC1jYXJke1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTNweCAwcHggaW5zZXQ7XFxufVxcblxcbi5saXN0LWNhcmQgZGl2Om50aC1jaGlsZCgxKXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0biAtMSl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJlMGI7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZSAubGlzdC1jYXJkOm50aC1jaGlsZCg0bisxKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZmMDA2ZTtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNlIC5saXN0LWNhcmQ6bnRoLWNoaWxkKDRuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZiNTYwNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbGlzdC1pbnRlcmZhY2UgLmxpc3QtY2FyZDpudGgtY2hpbGQoNG4rMil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzM4ZWM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b257XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbiBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIHRhc2sgaW50ZXIgKi9cXG4jdGFzay1pbnRlcmZhY2V7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1pbnRlcmZhY2UtaGVhZGVye1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmxpc3QtcGFnZXtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQ7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDUlOyBcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XFxufVxcblxcbi50by1kby1saXN0e1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG4uaXRlbS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnIgMWZyIDUwcHggNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLnRhc2stZHVle1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGFzay12aWV3LWJ0biBpbWcsXFxuLnRhc2stZGVsZXRlLWJ0biBpbWd7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZpbHRlcjpvcGFjaXR5KDUwJSk7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idG4sXFxuLnRhc2stdmlldy1idG57XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgXFxuICAgIHBhZGRpbmc6IDA7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmFkZC10YXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucmVtb3ZlLWZpbmlzaGVkLWJ0bntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDExMCwgMC4yKTtcXG59XFxuXFxuLnByaW9yaXR5LW1lZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgODYsIDcsIDAuMik7XFxufVxcblxcbi5wcmlvcml0eS1sb3d7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MCwgMTEsIDAuMik7XFxufVxcblxcbi8qIGFkZCB0YXNrICYgdmlldyBmb3JtICovXFxuLnZpZXctZm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgcmlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiN0YXNrLXRpdGxle1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uZmluaXNoZWQtdGFza3tcXG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgZm9ybWF0LCBjb21wYXJlQXNjLCBnZXRPdmVybGFwcGluZ0RheXNJbkludGVydmFscyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cydcbmltcG9ydCAqIGFzIGFkZExpc3QgZnJvbSAnLi9hZGQtbGlzdCdcbmltcG9ydCAqIGFzIGFkZFRhc2sgZnJvbSAnLi9hZGQtdGFzaydcbmltcG9ydCAqIGFzIERPTUZvcm0gZnJvbSAnLi9ET00tdGFza2Zvcm0nXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuaW1wb3J0IHJlbW92ZUltZyBmcm9tICcuL2ljb25zL3RyYXNoLWNhbi1vdXRsaW5lLnN2ZydcblxuZnVuY3Rpb24gbWFrZShlbGVtZW50LCBwYXJlbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTsgXG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IFxuICAgIHJldHVybiBuZXdFbGVtZW50OyBcbn07IFxuXG5mdW5jdGlvbiBhZGRMaXN0QnRuKCkge1xuICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1tYWtlcicpOyBcbiAgICBjb25zdCBhZGRMaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbGlzdC1mb3JtJyk7XG4gICAgYWRkTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkTGlzdEZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpOyBcbiAgICB9KTtcbiAgICBhZGRMaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgYWRkTGlzdEZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgICAgIGFkZExpc3QuYWRkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGFkZExpc3QucmVuZXcoKTtcbiAgICAgICAgbWFrZUxpc3RDYXJkKCk7IFxuICAgICAgICBsaXN0Q2FyZExpc3RlbmVyKCk7IFxuICAgIH0pO1xuICAgIERPTUZvcm0uY2xvc2VCdG5MaXN0ZW5lcigpOyAgXG59OyBcblxuLy9zcGxpdCBhcGFydFxuZnVuY3Rpb24gbWFrZUxpc3RDYXJkKCl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWRkTGlzdC5hbGxMaXN0c1thZGRMaXN0LmFsbExpc3RzLmxlbmd0aCAtIDFdOyBcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LWludGVyZmFjZScpO1xuICAgICAgICBjb25zdCBjYXJkID0gbWFrZSgnZGl2JywgbGlzdENvbnRhaW5lciwgYGxpc3QtY2FyZGApO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgY29kZSR7YWRkTGlzdC5hbGxMaXN0cy5sZW5ndGggLSAxfWApO1xuICAgICAgICBjb25zdCBjYXJkSGVhZGVyID0gbWFrZSgnZGl2JywgY2FyZCwgbnVsbCk7XG4gICAgICAgIGNhcmRIZWFkZXIudGV4dENvbnRlbnQgPSBpbmRleC50aXRsZTsgXG5cbiAgICAgICAgbWFrZSgnZGl2JywgY2FyZCwgJ2NhcmRJdGVtQ291bnQnKTtcbiAgICAgICAgbWFrZSgnZGl2JywgY2FyZCwgJ2NhcmRGaW5pc2hlZENvdW50Jyk7IFxuICAgICAgIFxuICAgICAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBtYWtlKCdkaXYnLCBjYXJkLCBudWxsKTtcbiAgICAgICAgY2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaW5kZXguZGVzY3JpcHRpb247IFxuICAgICAgICB1cGRhdGVDYXJkVGV4dCgpO1xuXG4gICAgICAgIGlmKGFkZExpc3QuYWxsTGlzdHMubGVuZ3RoICE9PSAxKXtcbiAgICAgICAgICAgIHJlbW92ZUJ0bihjYXJkKTtcbiAgICAgICAgfVxufTsgXG5cbmZ1bmN0aW9uIG1ha2VJbml0aWFsQ2FyZHMoKXtcbiAgICBhZGRMaXN0LmFsbExpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LWludGVyZmFjZScpO1xuICAgICAgICBjb25zdCBjYXJkID0gbWFrZSgnZGl2JywgbGlzdENvbnRhaW5lciwgYGxpc3QtY2FyZGApO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgY29kZSR7YWRkTGlzdC5hbGxMaXN0cy5pbmRleE9mKGxpc3QpfWApO1xuICAgICAgICBjb25zdCBjYXJkSGVhZGVyID0gbWFrZSgnZGl2JywgY2FyZCwgbnVsbCk7XG4gICAgICAgIGNhcmRIZWFkZXIudGV4dENvbnRlbnQgPSBsaXN0LnRpdGxlOyBcblxuICAgICAgICBtYWtlKCdkaXYnLCBjYXJkLCAnY2FyZEl0ZW1Db3VudCcpO1xuICAgICAgICBtYWtlKCdkaXYnLCBjYXJkLCAnY2FyZEZpbmlzaGVkQ291bnQnKTsgXG4gICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IG1ha2UoJ2RpdicsIGNhcmQsIG51bGwpO1xuICAgICAgICBjYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBsaXN0LmRlc2NyaXB0aW9uOyBcbiAgICAgICAgdXBkYXRlQ2FyZFRleHQoKTtcbiAgICAgICAgaWYoYWRkTGlzdC5hbGxMaXN0cy5pbmRleE9mKGxpc3QpICE9PSAwKXtcbiAgICAgICAgICAgIHJlbW92ZUJ0bihjYXJkKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVDYXJkVGV4dCgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY2FyZCcpOyBcblxuICAgIGNhcmQuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZEl0ZW1Db3VudCcpO1xuICAgICAgICBjb25zdCBmSXRlbUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRGaW5pc2hlZENvdW50Jyk7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBmaW5kTGlzdChjYXJkKTsgXG5cbiAgICAgICAgbGV0IGl0ZW1EaXY7XG4gICAgICAgIGxldCBmSXRlbURpdjsgXG5cbiAgICAgICAgaXRlbUNvdW50LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudE5vZGUgPT0gY2FyZCl7XG4gICAgICAgICAgICAgICAgaXRlbURpdiA9IGl0ZW07IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7IFxuXG4gICAgICAgIGZJdGVtQ291bnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50Tm9kZSA9PSBjYXJkKXtcbiAgICAgICAgICAgICAgICBmSXRlbURpdiA9IGl0ZW07IFxuICAgICAgICAgICAgfTsgXG4gICAgICAgIH0pOyBcbiAgICAgICAgaXRlbURpdi50ZXh0Q29udGVudCA9IGAke2xpc3QudGFza0xpc3QubGVuZ3RofSBUYXNrc2BcbiAgICAgICAgZkl0ZW1EaXYudGV4dENvbnRlbnQgPSBgJHtsaXN0LmZpbmlzaGVkVGFza3MubGVuZ3RofSBGaW5pc2hlZCBUYXNrc2BcbiAgICB9KTsgXG59O1xuXG5mdW5jdGlvbiBsaXN0Q2FyZExpc3RlbmVyKCl7XG4gICAgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jYXJkJyk7XG4gICAgY2FyZExpc3RbY2FyZExpc3QubGVuZ3RoLTFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBET01USS5yZXBsYWNlUGFnZShjYXJkTGlzdFtjYXJkTGlzdC5sZW5ndGgtMV0pXG4gICAgfSk7IFxufTtcblxuZnVuY3Rpb24gaW5pdGlhbENhcmRMaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNhcmRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY2FyZCcpO1xuICAgIGNhcmRMaXN0LmZvckVhY2goKGNhcmQpID0+IGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTVRJLnJlcGxhY2VQYWdlKGNhcmQpOyBcbiAgICB9KSlcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVCdG4ocGFyZW50KXtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBtYWtlKCdidXR0b24nLCBwYXJlbnQsICdyZW1vdmUtYnV0dG9uJyk7XG4gICAgbWFrZSgnaW1nJywgcmVtb3ZlQnRuLCBudWxsKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHJlbW92ZUltZyApXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbShmaW5kTGlzdChwYXJlbnQpLCBhZGRMaXN0LmFsbExpc3RzKTtcbiAgICAgICAgYWRkTGlzdC5jaGFuZ2VBbGxMaXN0KG5ld0FycmF5KTsgXG4gICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgICAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKVxuICAgICAgICBpZihsaXN0UGFnZSl7XG4gICAgICAgICAgICBsaXN0UGFnZS5yZW1vdmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpOyBcbiAgICB9KTtcbn07XG5cbi8vbW92ZSB0byBhZGQtbGlzdFxuZnVuY3Rpb24gZmluZExpc3QoY2FyZCl7IFxuICAgIGNvbnN0IGNhcmRDb2RlID0gY2FyZC5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikudmFsdWU7XG4gICAgY29uc3QgbGlzdCA9IGFkZExpc3QuYWxsTGlzdHMuZmluZChsaXN0ID0+IGxpc3QuY29kZSA9PSBjYXJkQ29kZSk7IFxuICAgIHJldHVybiBsaXN0OyBcbn07XG5cblxuXG5leHBvcnQgeyBhZGRMaXN0QnRuLCBsaXN0Q2FyZExpc3RlbmVyLCBtYWtlLCB1cGRhdGVDYXJkVGV4dCwgbWFrZUxpc3RDYXJkLCBmaW5kTGlzdCwgbWFrZUluaXRpYWxDYXJkcywgaW5pdGlhbENhcmRMaXN0ZW5lciB9XG5cblxuIiwiaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuXG5mdW5jdGlvbiBtYWtlRm9ybUVsZW1lbnRzKGVsZW1lbnQsIHBhcmVudCwgdHlwZSwgbmFtZSwgaWQpe1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTsgXG4gICAgLy9uZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgXG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9YCk7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtuYW1lfWApOyBcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3R5cGV9YClcbiAgICByZXR1cm4gbmV3RWxlbWVudDsgXG59OyBcblxuZnVuY3Rpb24gYWRkRm9ybUxhYmVscyhwYXJlbnQsIGlkLCB0ZXh0KXtcbiAgICBjb25zdCB0YXNrRGF0ZUxhYmVsID0gRE9NLm1ha2UoJ2xhYmVsJywgcGFyZW50LCBudWxsKVxuICAgIHRhc2tEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG4gICAgdGFza0RhdGVMYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG59OyBcblxuZnVuY3Rpb24gbWFrZUZvcm1Ecm9wZG93bnMoZGF0YSwgcGFyZW50LCB0eXBlKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBsaXN0T3B0aW9ucyA9IERPTS5tYWtlKCdvcHRpb24nLCBwYXJlbnQsIGAke3R5cGV9LWRyb3Bkb3duYCk7XG4gICAgICAgIGlmIChkYXRhID09IGFkZExpc3QuYWxsTGlzdHMpe1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGFbaV0udGl0bGUpO1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMudGV4dENvbnRlbnQgPSBkYXRhW2ldLnRpdGxlOyBcbiAgICAgICAgICAgIGlmIChkYXRhW2ldLnRpdGxlID09IGF1dG9QaWNrTGlzdCgpKXtcbiAgICAgICAgICAgICAgICBsaXN0T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YVtpXSk7XG4gICAgICAgICAgICBsaXN0T3B0aW9ucy50ZXh0Q29udGVudCA9IGRhdGFbaV07IFxuICAgICAgICB9OyBcbiAgICB9O1xufTsgXG5cbmZ1bmN0aW9uIG1ha2VGb3JtKCl7XG4gICAgY29uc3QgY29udGVudFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3Qgdmlld0Zvcm0gPSBET00ubWFrZSgnZm9ybScsIGNvbnRlbnRXaW5kb3csICd2aWV3LWZvcm0nKTsgXG4gICAgdmlld0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1mb3JtJyk7IFxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBET00ubWFrZSgnYnV0dG9uJywgdmlld0Zvcm0sICdmb3JtLWNsb3NlLWJ0bicpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNsb3NlQnRuTGlzdGVuZXIoKTsgXG4gICAgXG5cbiAgICBET00ubWFrZSgnbGFiZWwnLCB2aWV3Rm9ybSwgbnVsbCkuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay10aXRsZScpOyBcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBtYWtlRm9ybUVsZW1lbnRzKCdpbnB1dCcsIHZpZXdGb3JtLCAndGV4dCcsICd0YXNrLXRpdGxlJywgJ3Rhc2stdGl0bGUnKTsgXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBOYW1lLi4uJylcblxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWxpc3QnLCAnTGlzdDonKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IERPTS5tYWtlKCdzZWxlY3QnLCB2aWV3Rm9ybSwgbnVsbClcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbGlzdCcpOyBcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1saXN0Jyk7IFxuICAgIG1ha2VGb3JtRHJvcGRvd25zKGFkZExpc3QuYWxsTGlzdHMsIHRhc2tMaXN0LCAnbGlzdCcpO1xuICAgIGNvbnNvbGUubG9nKGF1dG9QaWNrTGlzdCgpKVxuICAgIFxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWRhdGUnLCAnRHVlIERhdGU6Jyk7XG4gICAgbWFrZUZvcm1FbGVtZW50cygnaW5wdXQnLCB2aWV3Rm9ybSwgJ2RhdGUnLCAndGFzay1kYXRlJywgJ3Rhc2stZGF0ZScpOyBcbiAgICBcbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1saXN0JywgJ1ByaW9yaXR5OicpO1xuICAgIGxldCBwcmlvcml0aWVzID0gWyctLScsICdIaWdoJywgJ01lZGl1bScsICdMb3cnXTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBET00ubWFrZSgnc2VsZWN0Jywgdmlld0Zvcm0sIG51bGwpO1xuICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stcHJpb3JpdHknKTsgXG4gICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXByaW9yaXR5Jyk7IFxuICAgIG1ha2VGb3JtRHJvcGRvd25zKHByaW9yaXRpZXMsIHRhc2tQcmlvcml0eSwgJ3ByaW9yaXR5Jyk7IFxuICAgIFxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uOicpXG4gICAgY29uc3QgdGFza0Rlc2NyaXAgPSBET00ubWFrZSgndGV4dGFyZWEnLCB2aWV3Rm9ybSwgbnVsbCk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzY3JpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzY3JpcC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAzMCk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCdyb3dzJywgNCk7IFxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IERPTS5tYWtlKCdidXR0b24nLCB2aWV3Rm9ybSwgJ3ZpZXctZm9ybS1zdWJtaXQnKTsgXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTsgXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTsgXG4gICAgaWYoZm9ybSl7XG4gICAgZm9ybS5yZW1vdmUoKTsgXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcigpe1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTsgXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTsgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgICAgIGlmIChhZGRUYXNrLnZhbGlkYXRlVGFza05hbWUoZXZlbnQudGFyZ2V0KSA9PSB0cnVlKSB7XG4gICAgICAgIGFkZFRhc2suYWRkVChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdFBhZ2UpOyBcbiAgICAgICAgRE9NVEkucmVwbGFjZVBhZ2UobGlzdFBhZ2UpOyBcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICByZW1vdmVGb3JtKCk7IFxuICAgICAgICB9O1xuICAgIH0pOyBcbn07IFxuXG5mdW5jdGlvbiBhdXRvUGlja0xpc3QoKXtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpO1xuICAgIGNvbnN0IGxpc3QgPSBET00uZmluZExpc3QocGFnZSk7XG4gICAgcmV0dXJuIGxpc3QudGl0bGU7IFxufTtcblxuZnVuY3Rpb24gdmlld0Zvcm0odGFzayl7XG4gICAgc2V0RXhpc3RpbmdWYWx1ZXMoJyN0YXNrLXRpdGxlJywgdGFzay50aXRsZSk7XG4gICAgc2V0RXhpc3RpbmdWYWx1ZXMoJyN0YXNrLWxpc3QnLCB0YXNrLnBhcmVudExpc3QpOyBcbiAgICBzZXRFeGlzdGluZ1ZhbHVlcygnI3Rhc2stZGF0ZScsIHRhc2suZHVlRGF0ZSk7IFxuICAgIHNldEV4aXN0aW5nVmFsdWVzKCcjdGFzay1wcmlvcml0eScsIHRhc2sucHJpb3JpdHkpOyBcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJyk7IFxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjsgXG59O1xuXG5mdW5jdGlvbiBzZXRFeGlzdGluZ1ZhbHVlcyhpZCwgdmFsdWUpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTsgXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dmFsdWV9YClcbn07XG5cbmZ1bmN0aW9uIHZpZXdGb3JtTGlzdGVuZXIodGFzayl7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZm9ybScpO1xuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgZm9ybSA9IGFkZExpc3QuZ2V0RGF0YShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlKTtcbiAgICAgICAgdGFzay50aXRsZSA9IGZvcm1bMF07IFxuICAgICAgICB0YXNrLnBhcmVudExpc3QgPSBmb3JtWzFdO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSBmb3JtWzJdO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gZm9ybVszXTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGZvcm1bNF07IFxuICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpOyBcblxuICAgICAgICBjb25zdCBjYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICAgICAgRE9NVEkucmVwbGFjZVBhZ2UoY2FyZExpc3QpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gY2xvc2VCdG5MaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY2xvc2UtYnRuJyk7XG4gICAgY29uc3QgYWRkTGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QtZm9ybScpO1xuICAgIGNsb3NlQnRuLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICBjb25zb2xlLmxvZyhidXR0b24ucGFyZW50RWxlbWVudCk7IFxuICAgICAgICBpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZSgnaWQnKS52YWx1ZSAhPT0gJ2FkZC10YXNrLWZvcm0nICl7XG4gICAgICAgICAgICBhZGRMaXN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIHJlbW92ZUZvcm0oKTsgXG4gICAgICAgIH07XG4gICAgfSkpO1xufTtcblxuXG5cbmV4cG9ydCB7IG1ha2VGb3JtLCByZW1vdmVGb3JtLCBhZGRUYXNrTGlzdGVuZXIsIHZpZXdGb3JtLCB2aWV3Rm9ybUxpc3RlbmVyLCBjbG9zZUJ0bkxpc3RlbmVyIH1cblxuIiwiaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NVGFzayBmcm9tICcuL0RPTS10YXNrcydcbmltcG9ydCAqIGFzIERPTUZvcm0gZnJvbSAnLi9ET00tdGFza2Zvcm0nXG5cbmZ1bmN0aW9uIHJlcGxhY2VQYWdlKGNhcmQpIHtcbiAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWludGVyZmFjZScpO1xuICAgIGNvbnN0IHByZXNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgY29uc3QgZXhpc3RpbmdEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWRyb3Bkb3duJyk7IFxuXG4gICAgaWYgKGxpc3RQYWdlLmxhc3RFbGVtZW50Q2hpbGQgPT0gcHJlc2VudCl7XG4gICAgICAgIGxpc3RQYWdlLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7IFxuICAgICAgICBleGlzdGluZ0Ryb3Bkb3duLmZvckVhY2goKGRyb3Bkb3duKSA9PiBkcm9wZG93bi5yZW1vdmUoKSk7IFxuICAgIH07IFxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZvcm0nKSl7XG4gICAgICAgIERPTUZvcm0ucmVtb3ZlRm9ybSgpOyBcbiAgICB9OyBcblxuICAgIG1ha2VQYWdlKGNhcmQpO1xuICAgIGFkZFRhc2tCdG4oKTsgXG4gICAgRE9NVGFzay5hZGRSZW1vdmVBbGxCdG4oKTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VQYWdlKGNhcmQpe1xuICAgIGNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staW50ZXJmYWNlJyk7XG4gICAgY29uc3QgcGFnZSA9IERPTS5tYWtlKCdkaXYnLCBsaXN0UGFnZSwgJ2xpc3QtcGFnZScpOyBcblxuICAgIGNvbnN0IGxpc3RJbmZvID0gRE9NLmZpbmRMaXN0KGNhcmQpOyBcbiAgICBwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtsaXN0SW5mby5jb2RlfWApO1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IERPTS5tYWtlKCdkaXYnLCBwYWdlLCAndG8tZG8tbGlzdCcpOyBcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBsaXN0SW5mby50aXRsZTsgXG4gICAgRE9NVGFzay5tYWtlTGlzdEl0ZW1zKGxpc3RJbmZvKTtcbn07XG5cblxuZnVuY3Rpb24gYWRkVGFza0J0bigpIHtcbiAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRubiA9IERPTS5tYWtlKCdidXR0b24nLCBsaXN0UGFnZSwgJ2FkZC10YXNrJyk7XG4gICAgYWRkVGFza0J0bm4udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcblxuICAgIGFkZFRhc2tCdG5uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBET01Gb3JtLm1ha2VGb3JtKCk7IFxuICAgICAgICBET01Gb3JtLmFkZFRhc2tMaXN0ZW5lcigpOyBcbiAgICB9KTsgXG59O1xuXG5mdW5jdGlvbiBhZGRDdXJyZW50RGF0ZSgpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWludGVyZmFjZS1oZWFkZXInKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKTsgXG4gICAgY29uc3QgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSsxKTtcbiAgICBjb25zdCB5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgIFxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBUb2RheSBpcyAke21tfS8ke2RkfS8ke3l9YFxufVxuXG5cblxuXG5leHBvcnQgeyByZXBsYWNlUGFnZSwgYWRkQ3VycmVudERhdGUgfSIsImltcG9ydCAqIGFzIGFkZExpc3QgZnJvbSAnLi9hZGQtbGlzdCdcbmltcG9ydCAqIGFzIGFkZFRhc2sgZnJvbSAnLi9hZGQtdGFzaydcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTS1saXN0aW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NVEkgZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSdcbmltcG9ydCAqIGFzIERPTUZvcm0gZnJvbSAnLi9ET00tdGFza2Zvcm0nXG5pbXBvcnQgcmVtb3ZlSW1nIGZyb20gJy4vaWNvbnMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnJ1xuaW1wb3J0IHZpZXdJbWcgZnJvbSAnLi9pY29ucy9leWUuc3ZnJ1xuXG5mdW5jdGlvbiBtYWtlTGlzdEl0ZW1zKHBhcmVudExpc3Qpe1xuICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTsgXG4gICAgY29uc3QgdGFza0xpc3QgPSBET00ubWFrZSgnZGl2JywgcGFyZW50Q29udGFpbmVyLCAnbGlzdCcpO1xuICAgIGNvbnN0IGxpc3QgPSBwYXJlbnRMaXN0LmFsbFRhc2tzO1xuICAgIGNvbnNvbGUubG9nKHBhcmVudExpc3QuYWxsVGFza3MpO1xuICAgIGNvbnNvbGUubG9nKHBhcmVudExpc3QuZmluaXNoZWRUYXNrcyk7XG4gICAgY29uc29sZS5sb2cocGFyZW50TGlzdC50YXNrTGlzdCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpdGVtc0NvbnRhaW5lciA9IERPTS5tYWtlKCdkaXYnLCB0YXNrTGlzdCwgJ2l0ZW0tY29udGFpbmVyJyk7IFxuICAgICAgICBpdGVtc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYGxpc3QtaXRlbSR7aX1gKTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBET00ubWFrZSgnaW5wdXQnLCBpdGVtc0NvbnRhaW5lciwgJ2xpc3QtaXRlbScpOyBcbiAgICAgICAgY29uc3QgaXRlbUxhYmVsID0gRE9NLm1ha2UoJ2xhYmVsJywgaXRlbXNDb250YWluZXIsICdsaXN0LWl0ZW0nKTtcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7IFxuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgbGlzdC1pdGVtJHtpfWApOyBcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTsgXG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBgbGlzdC1pdGVtJHtpfWApO1xuICAgICAgICBpdGVtTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsIGBsaXN0LWl0ZW0ke2l9YCk7XG4gICAgICAgIGl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGxpc3RbaV0udGl0bGU7IFxuICAgICAgICBET00ubWFrZSgnZGl2JywgaXRlbXNDb250YWluZXIsICd0YXNrLWR1ZScpLnRleHRDb250ZW50ID0gbGlzdFtpXS5kdWVEYXRlXG4gICAgICAgIGNvbnN0IHZpZXdCdG4gPSBET00ubWFrZSgnYnV0dG9uJywgaXRlbXNDb250YWluZXIsICd0YXNrLXZpZXctYnRuJylcbiAgICAgICAgRE9NLm1ha2UoJ2ltZycsIHZpZXdCdG4sIG51bGwpLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlld0ltZylcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIGl0ZW1zQ29udGFpbmVyLCAndGFzay1kZWxldGUtYnRuJylcbiAgICAgICAgRE9NLm1ha2UoJ2ltZycsIHJlbW92ZUJ0biwgbnVsbCkuc2V0QXR0cmlidXRlKCdzcmMnLCByZW1vdmVJbWcpO1xuICAgICAgICBtYWtlQ2hlY2tzKGxpc3RbaV0uc3RhdHVzLCBsaXN0SXRlbSwgaXRlbXNDb250YWluZXIpOyBcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlDb2xvcnMobGlzdFtpXS5wcmlvcml0eSwgaXRlbUxhYmVsKTtcbiAgICAgICAgdmlld0l0ZW1zKGxpc3RbaV0pO1xuICAgICAgICByZW1vdmVUYXNrcyhpdGVtc0NvbnRhaW5lcik7IFxuICAgIH07XG4gICAgZmluaXNoVGFza0xpc3RlbmVyKCk7ICBcbn07XG5mdW5jdGlvbiBtYWtlQ2hlY2tzKHN0YXR1cywgYm94LCBjb250YWluZXIpe1xuICAgIGlmKHN0YXR1cyA9PSAnY2hlY2tlZCcgJiYgIWNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbmlzaGVkLXRhc2snKSl7XG4gICAgICAgIGJveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkLXRhc2snKTtcbiAgICB9XG59O1xuXG5cblxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlDb2xvcnMoaXRlbVByaW9yaXR5LCBpdGVtKXtcbiAgICBzd2l0Y2goaXRlbVByaW9yaXR5KXtcbiAgICAgICAgY2FzZSAoJ0hpZ2gnKTogXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tZWQnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xvdyc6IFxuICAgICAgICAgICAgaXRlbS4gY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93JylcbiAgICAgICAgICAgIGJyZWFrOyBcbiAgICB9OyBcbn07IFxuXG5mdW5jdGlvbiB2aWV3SXRlbXMoaXRlbSl7XG4gICAgY29uc3Qgdmlld0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay12aWV3LWJ0bicpOyBcbiAgICBjb25zdCB2aWV3QnRuID0gdmlld0J0bnNbdmlld0J0bnMubGVuZ3RoLTFdOyBcbiAgICB2aWV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgRE9NRm9ybS5tYWtlRm9ybSgpOyBcbiAgICAgICAgICAgIERPTUZvcm0udmlld0Zvcm0oaXRlbSk7IFxuICAgICAgICAgICAgRE9NRm9ybS52aWV3Rm9ybUxpc3RlbmVyKGl0ZW0pOyBcbiAgICAgICAgfSk7IFxufTtcblxuZnVuY3Rpb24gZmluaXNoVGFza0xpc3RlbmVyKCl7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIik7IFxuICAgIFxuICAgIGNoZWNrQm94LmZvckVhY2goKGJveCkgPT4gYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50TGlzdCA9IGJveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGlzdCA9IERPTS5maW5kTGlzdChwYXJlbnRMaXN0KTtcbiAgICAgICAgY29uc3QgdGFzayA9IGFkZExpc3QuZmluZE1hdGNoQ29kZShib3guZ2V0QXR0cmlidXRlKCdpZCcpLCBsaXN0LnRhc2tMaXN0KTtcblxuICAgICAgICBpZiAoYm94LmNoZWNrZWQpe1xuICAgICAgICAgICAgYm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQtdGFzaycpOyBcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID0gJ2NoZWNrZWQnOyBcbiAgICAgICAgICAgIGxpc3QudGFza0xpc3QgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbSh0YXNrLCBsaXN0LnRhc2tMaXN0KTsgXG4gICAgICAgICAgICBsaXN0LmZpbmlzaGVkVGFza3MgPSBhZGRUYXNrLm1vdmVUYXNrVG8odGFzaywgbGlzdC5maW5pc2hlZFRhc2tzKTsgXG4gICAgICAgICAgICBET00udXBkYXRlQ2FyZFRleHQoKTtcbiAgICAgICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIWJveC5jaGVja2VkKXsgXG4gICAgICAgICAgICBjb25zdCBmVGFzayA9IGFkZExpc3QuZmluZE1hdGNoQ29kZShib3guZ2V0QXR0cmlidXRlKCdpZCcpLCBsaXN0LmZpbmlzaGVkVGFza3MpO1xuICAgICAgICAgICAgaWYoYm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaW5pc2hlZC10YXNrJykpe1xuICAgICAgICAgICAgICAgIGJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkLXRhc2snKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsaXN0LmZpbmlzaGVkVGFza3MgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbShmVGFzaywgbGlzdC5maW5pc2hlZFRhc2tzKTsgXG4gICAgICAgICAgICBsaXN0LnRhc2tMaXN0ID0gYWRkVGFzay5tb3ZlVGFza1RvKGZUYXNrLCBsaXN0LnRhc2tMaXN0KTsgXG4gICAgICAgICAgICBmVGFzay5zdGF0dXMgPSAndW5jaGVja2VkJzsgXG4gICAgICAgICAgICBET00udXBkYXRlQ2FyZFRleHQoKTsgXG4gICAgICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgKSk7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVUYXNrcyh0YXNrQ29udGFpbmVyKXtcbiAgICBjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGVsZXRlLWJ0bicpOyBcbiAgICBjb25zdCByZW1vdmVCdG4gPSByZW1vdmVCdG5zW3JlbW92ZUJ0bnMubGVuZ3RoLTFdO1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKVxuICAgICAgICBjb25zdCBsaXN0ID0gRE9NLmZpbmRMaXN0KHBhcmVudExpc3QpO1xuICAgICAgICBjb25zdCB0YXNrID0gYWRkTGlzdC5maW5kTWF0Y2hDb2RlKHRhc2tDb250YWluZXIuZ2V0QXR0cmlidXRlKCdpZCcpLCBsaXN0LnRhc2tMaXN0KTtcbiAgICAgICAgY29uc3QgYVRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUodGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2lkJyksIGxpc3QuYWxsVGFza3MpO1xuXG4gICAgICAgIGlmICh0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZmluaXNoZWQtdGFzaycpKXtcbiAgICAgICAgICAgIGNvbnN0IGZUYXNrID0gYWRkTGlzdC5maW5kTWF0Y2hDb2RlKHRhc2tDb250YWluZXIuZ2V0QXR0cmlidXRlKCdpZCcpLCBsaXN0LmZpbmlzaGVkVGFza3MpO1xuICAgICAgICAgICAgY29uc3QgZkFsbE5ld0FycmF5ID0gYWRkVGFzay5tb3ZlVGFza0Zyb20oYVRhc2ssIGxpc3QuYWxsVGFza3MpO1xuICAgICAgICAgICAgbGlzdC5hbGxUYXNrcyA9IGZBbGxOZXdBcnJheTsgXG4gICAgICAgICAgICBjb25zdCBmbmV3QXJyYXkgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbShmVGFzaywgbGlzdC5maW5pc2hlZFRhc2tzKTsgXG4gICAgICAgICAgICBsaXN0LmZpbmlzaGVkVGFza3MgPSBmbmV3QXJyYXk7IFxuICAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWxsTmV3QXJyYXkgPSBhZGRUYXNrLm1vdmVUYXNrRnJvbShhVGFzaywgbGlzdC5hbGxUYXNrcyk7XG4gICAgICAgICAgICBsaXN0LmFsbFRhc2tzID0gYWxsTmV3QXJyYXk7IFxuXG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKHRhc2ssIGxpc3QudGFza0xpc3QpO1xuICAgICAgICAgICAgbGlzdC50YXNrTGlzdCA9IG5ld0FycmF5OyBcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICB9KTsgXG59OyBcblxuZnVuY3Rpb24gYWRkUmVtb3ZlQWxsQnRuKCl7XG4gICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJylcbiAgICBjb25zdCByZW1vdmVUYXNrQnRuID0gRE9NLm1ha2UoJ2J1dHRvbicsIGxpc3RQYWdlLCAncmVtb3ZlLWZpbmlzaGVkLWJ0bicpO1xuICAgIHJlbW92ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlIEFsbCBGaW5pc2hlZCBUYXNrcyc7IFxuXG4gICAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50TGlzdCA9IERPTS5maW5kTGlzdChsaXN0UGFnZSk7IFxuXG4gICAgICAgIHBhcmVudExpc3QuZmluaXNoZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKHRhc2ssIHBhcmVudExpc3QuYWxsVGFza3MpO1xuICAgICAgICAgICAgcGFyZW50TGlzdC5hbGxUYXNrcyA9IG5ld0FycmF5OyBcbiAgICAgICAgICAgIGFkZExpc3QudGVzdCgpO1xuICAgICAgICB9KTsgXG4gICAgICAgIHBhcmVudExpc3QuZmluaXNoZWRUYXNrcyA9IFtdOyBcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmluaXNoZWQtdGFzaycpO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICBhZGRMaXN0LnRlc3QoKTtcbiAgICB9KTtcbn07XG5cblxuZXhwb3J0IHsgbWFrZUxpc3RJdGVtcywgYWRkUmVtb3ZlQWxsQnRuIH0iLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgZm9ybWF0LCBjb21wYXJlQXNjIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJ1xuXG5sZXQgYWxsTGlzdHMgPSBbXTsgXG5cbmZ1bmN0aW9uIHRlc3QoKXtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeShhbGxMaXN0cykpO1xufTsgXG5cbmZ1bmN0aW9uIGdldERhdGEoZm9ybSl7XG4gICAgbGV0IHZhbHVlc0FyciA9IFtdOyBcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBmb3JtRGF0YS52YWx1ZXMoKSl7XG4gICAgICAgIHZhbHVlc0Fyci5wdXNoKHZhbHVlKTsgXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVzQXJyOyBcbn07XG5cbmZ1bmN0aW9uIGZpbmRNYXRjaChuYW1lLCBsaXN0cykge1xuICAgIGNvbnN0IG5hbWVzID0gbGlzdHMuZmluZChsaXN0ID0+IGxpc3QudGl0bGUgPT0gbmFtZSk7IFxuICAgIHJldHVybiBuYW1lczsgXG59OyBcblxuZnVuY3Rpb24gZmluZE1hdGNoQ29kZShuYW1lLCBsaXN0cykge1xuICAgIGNvbnN0IG5hbWVzID0gbGlzdHMuZmluZChsaXN0ID0+IGxpc3QuY29kZSA9PSBuYW1lKTsgXG4gICAgcmV0dXJuIG5hbWVzOyBcbn07IFxuXG5mdW5jdGlvbiB0aXRsZU5hbWVWYWxpZGF0aW9uKHRpdGxlKXtcbiAgICBpZih0aXRsZSA9PSAnJyl7XG4gICAgICAgIHJldHVybiB0aXRsZSA9IGBMaXN0ICR7YWxsTGlzdHMubGVuZ3RofWBcbiAgICB9IGVsc2UgaWYoZmluZE1hdGNoKHRpdGxlLCBhbGxMaXN0cykpIHtcbiAgICAgICAgY29uc29sZS5sb2codGl0bGUpOyBcbiAgICAgICAgcmV0dXJuIHRpdGxlID0gYCR7dGl0bGV9IChMaXN0ICR7YWxsTGlzdHMubGVuZ3RofSlgXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9O1xufTtcblxuY29uc3QgbWFrZUxpc3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrTGlzdCwgZmluaXNoZWRUYXNrcywgYWxsVGFza3MsIGNvZGUpID0+IHtcbiAgICB0aXRsZSA9IHRpdGxlTmFtZVZhbGlkYXRpb24odGl0bGUpO1xuICAgIHRhc2tMaXN0ID0gW107IFxuICAgIGZpbmlzaGVkVGFza3MgPSBbXTsgXG4gICAgYWxsVGFza3MgPSBbXTtcbiAgICBjb2RlID0gYGNvZGUke2FsbExpc3RzLmxlbmd0aH1gO1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza0xpc3QsIGZpbmlzaGVkVGFza3MsIGFsbFRhc2tzLCBjb2RlIH1cbn07XG5cbmZ1bmN0aW9uIGFkZChmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGdldERhdGEoZm9ybSk7XG4gICAgY29uc3QgbGlzdCA9IG1ha2VMaXN0KGZvcm1EYXRhWzBdLCBmb3JtRGF0YVsxXSk7IFxuICAgIGFsbExpc3RzLnB1c2gobGlzdCk7IFxuICAgIHRlc3QoKTsgXG59O1xuXG5mdW5jdGlvbiByZW5ldyhmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGdldERhdGEoZm9ybSk7XG4gICAgZm9ybURhdGFbMF0gPSAnJzsgXG4gICAgZm9ybURhdGFbMV0gPSAnJztcbn1cblxuZnVuY3Rpb24gY2hhbmdlQWxsTGlzdChsaXN0KXtcbiAgICBhbGxMaXN0cyA9IGxpc3Q7IFxufTsgXG5cblxuZXhwb3J0IHsgdGVzdCwgbWFrZUxpc3QsIGdldERhdGEsIGFkZCwgYWxsTGlzdHMsIGZpbmRNYXRjaCwgY2hhbmdlQWxsTGlzdCwgZmluZE1hdGNoQ29kZSwgcmVuZXcgfSIsImltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cydcbmltcG9ydCAqIGFzIGFkZExpc3QgZnJvbSAnLi9hZGQtbGlzdCdcblxuXG5jb25zdCBtYWtlVGFzayA9ICh0aXRsZSwgcGFyZW50TGlzdCwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBzdGF0dXMsIGNvZGUgKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGFkZExpc3QuZmluZE1hdGNoKHBhcmVudExpc3QsIGFkZExpc3QuYWxsTGlzdHMpLnRhc2tMaXN0O1xuICAgIGNvZGUgPSBgbGlzdC1pdGVtJHtsaXN0Lmxlbmd0aH1gOyBcbiAgICBzdGF0dXMgPSAndW5jaGVja2VkJztcbiAgICByZXR1cm4geyB0aXRsZSwgcGFyZW50TGlzdCwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBzdGF0dXMsIGNvZGUgfVxufTtcblxuXG5mdW5jdGlvbiBhZGRUKGZvcm0pe1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYWRkTGlzdC5nZXREYXRhKGZvcm0pO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhWzNdKVxuICAgIGNvbnN0IHRhc2sgPSBtYWtlVGFzayhmb3JtRGF0YVswXSwgZm9ybURhdGFbMV0sIGZvcm1EYXRhWzJdLCBmb3JtRGF0YVszXSwgZm9ybURhdGFbNF0pOyBcbiAgICBhZGRUYXNrdG9MaXN0KHRhc2spO1xuICAgIGFkZExpc3QudGVzdCgpOyBcbn07XG5cbmZ1bmN0aW9uIGFkZFRhc2t0b0xpc3QodGFzayl7XG4gICAgY29uc3QgYWxsTGlzdHMgPSBhZGRMaXN0LmFsbExpc3RzO1xuICAgIGNvbnN0IHBhcmVudExpc3QgPSBhbGxMaXN0cy5maW5kKGxpc3QgPT4gbGlzdC50aXRsZSA9PSB0YXNrLnBhcmVudExpc3QpO1xuICAgIHBhcmVudExpc3QudGFza0xpc3QucHVzaCh0YXNrKTsgXG4gICAgcGFyZW50TGlzdC5hbGxUYXNrcy5wdXNoKHRhc2spOyBcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGFza05hbWUoZm9ybSl7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhZGRMaXN0LmdldERhdGEoZm9ybSk7XG4gICAgaWYoZm9ybURhdGFbMF0gPT0gJycpe1xuICAgICAgICBhbGVydChcIkVtcHR5IE5hbWVcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZXtcbiAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG1vdmVUYXNrRnJvbSh0YXNrLCBpbml0aWFsKXtcbiAgICBjb25zdCBuZXdJbml0aWFsID0gaW5pdGlhbC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXNrKTtcbiAgICBcbiAgICBsZXQgbmV3QXJyYXk7XG4gICAgaWYgKCFuZXdJbml0aWFsKXtcbiAgICAgICByZXR1cm4gbmV3QXJyYXkgPSBbXTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5ID0gbmV3SW5pdGlhbDsgXG4gICAgfVxuICAgXG59O1xuXG5mdW5jdGlvbiBtb3ZlVGFza1RvKHRhc2ssIGFycmF5KXtcbiAgICBhcnJheS5wdXNoKHRhc2spO1xuICAgIHJldHVybiBhcnJheTsgXG59OyBcblxuZnVuY3Rpb24gY2hhbmdlQWxsTGlzdChsaXN0KXtcbiAgICBhZGRMaXN0LmFsbExpc3RzID0gbGlzdDsgXG59OyBcblxuXG5cbmV4cG9ydCB7IG1ha2VUYXNrLCBhZGRULCBhZGRUYXNrdG9MaXN0LCB2YWxpZGF0ZVRhc2tOYW1lLCBtb3ZlVGFza0Zyb20sIG1vdmVUYXNrVG8gfVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgZm9ybWF0LCBjb21wYXJlQXNjIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NVGFzayBmcm9tICcuL0RPTS10YXNrcydcbmltcG9ydCB7IGFsbExpc3RzLCBtYWtlTGlzdCwgY2hhbmdlQWxsTGlzdCB9IGZyb20gJy4vYWRkLWxpc3QnO1xuaW1wb3J0IHsgYWRkQ3VycmVudERhdGUgfSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJztcblxuXG4vL2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsaXN0JylcblxuRE9NVEkuYWRkQ3VycmVudERhdGUoKVxuXG5mdW5jdGlvbiBkZWZhdWx0TGlzdCgpe1xuICAgIGNvbnN0IGRlZmF1bHRMaXN0ID0gbWFrZUxpc3QoXCJEZWZhdWx0IExpc3RcIiwgXCJUaGlzIGlzIHlvdXIgZmlyc3QgbGlzdCFcIik7XG4gICAgYWxsTGlzdHMucHVzaChkZWZhdWx0TGlzdCk7IFxuICAgIERPTS5tYWtlTGlzdENhcmQoKTsgXG4gICAgRE9NLmxpc3RDYXJkTGlzdGVuZXIoKTsgXG59O1xuXG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSl7XG4gICAgRE9NLmFkZExpc3RCdG4oKTtcbiAgICBkZWZhdWx0TGlzdCgpOyBcbn0gZWxzZSB7XG4gICAgY2hhbmdlQWxsTGlzdChKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKSk7XG4gICAgXG4gICAgRE9NLmFkZExpc3RCdG4oKTtcbiAgICBET00ubWFrZUluaXRpYWxDYXJkcygpOyBcbiAgICBET00uaW5pdGlhbENhcmRMaXN0ZW5lcigpOyBcbn07XG5cbmNvbnNvbGUubG9nKGFsbExpc3RzKTsgXG5cbi8vIGZ1bmN0aW9uIGxvYWRDaGVja3MoKXtcbi8vICAgICBmb3IgKGxldCBpPTA7IGk8RE9NVGFzay5zYXZlZENoZWNrcy5sZW5ndGg7IGkrKyl7XG4vLyAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY2hlY2tib3gke2l9YCkpO1xuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlzdC1pdGVtJHtpfX1gKS5jaGVja2VkID09IGNoZWNrZWQ7XG4vLyAgICAgfTsgXG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=