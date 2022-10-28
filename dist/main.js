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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --form-visibility: block; \n}\n\nhtml, body, #content{\n    margin: 0; \n    width: 100%;\n    height: 100%;\n}\n\n#content{\n    display: flex;\n    flex-direction: row;\n}\n\n#sidebar{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%; \n    background-color: pink;\n    display: none;\n}\n\n#list-interface{\n    height: 100%; \n    width: 50%; \n    background-color: antiquewhite;\n}\n\n\n#add-list-form {\n    display: none;\n}\n\n[class ^= 'list-card']{\n    background-color: aliceblue;\n    height: 200px;\n    width: 200px; \n    border:solid;\n}\n\n#task-interface{\n    height: 100%;\n    width: 50%;\n    background-color: pink;\n}\n\n.list-page{\n    height: 200px;\n    width: 100px;\n    background-color: white;\n}\n\n.to-do-list{\n    height: 50px;\n    width: 50px;\n}\n\n.high-priority{\n    background-color: pink; \n}\n\n.view-form{\n    position: absolute; \n    top: 50%;\n    left: 50%; \n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,UAAU;IACV,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,8BAA8B;AAClC;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb","sourcesContent":[":root{\n    --form-visibility: block; \n}\n\nhtml, body, #content{\n    margin: 0; \n    width: 100%;\n    height: 100%;\n}\n\n#content{\n    display: flex;\n    flex-direction: row;\n}\n\n#sidebar{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%; \n    background-color: pink;\n    display: none;\n}\n\n#list-interface{\n    height: 100%; \n    width: 50%; \n    background-color: antiquewhite;\n}\n\n\n#add-list-form {\n    display: none;\n}\n\n[class ^= 'list-card']{\n    background-color: aliceblue;\n    height: 200px;\n    width: 200px; \n    border:solid;\n}\n\n#task-interface{\n    height: 100%;\n    width: 50%;\n    background-color: pink;\n}\n\n.list-page{\n    height: 200px;\n    width: 100px;\n    background-color: white;\n}\n\n.to-do-list{\n    height: 50px;\n    width: 50px;\n}\n\n.high-priority{\n    background-color: pink; \n}\n\n.view-form{\n    position: absolute; \n    top: 50%;\n    left: 50%; \n}"],"sourceRoot":""}]);
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
/* harmony export */   "listCardListener": () => (/* binding */ listCardListener),
/* harmony export */   "make": () => (/* binding */ make),
/* harmony export */   "makeListCard": () => (/* binding */ makeListCard),
/* harmony export */   "updateCardText": () => (/* binding */ updateCardText)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _add_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-list */ "./src/add-list.js");
/* harmony import */ var _add_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-task */ "./src/add-task.js");
/* harmony import */ var _DOM_taskform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-taskform */ "./src/DOM-taskform.js");
/* harmony import */ var _DOM_taskinterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM-taskinterface */ "./src/DOM-taskinterface.js");








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
        removeBtn(card);
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


function removeBtn(parent){
    const removeBtn = make('button', parent, 'remove-button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const newArray = _add_task__WEBPACK_IMPORTED_MODULE_2__.moveTaskFrom(findList(parent), _add_list__WEBPACK_IMPORTED_MODULE_1__.allLists);
        _add_list__WEBPACK_IMPORTED_MODULE_1__.changeAllList(newArray); 
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
        if (button.parentElement.getAttributeNode('id').value == 'add-task-form'){
            removeForm(); 
        } else {
            addListForm.setAttribute('style', 'display: none');
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
    addTaskBtnn.textContent = "Add Task";

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
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', itemsContainer, 'task-view-btn').textContent = 'View';
        _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', itemsContainer, 'task-delete-btn').textContent = 'Remove'; 
        changePriorityColors(list[i].priority, itemLabel);
        viewItems(list[i]);
        removeTasks(itemsContainer); 
    };
    finishTaskListener();  
};

function changePriorityColors(itemPriority, item){
    switch(itemPriority){
        case ('High'): 
            item.setAttribute('style', 'background-color: red');
            break;
        case 'Medium':
            item.setAttribute('style', 'background-color: yellow');
            break;
        case 'Low': 
            item.setAttribute('style', 'background-color: green'); 
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
        }
        else if(!box.checked){
            list.finishedTasks = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskFrom(fTask, list.finishedTasks); 
            list.taskList = _add_task__WEBPACK_IMPORTED_MODULE_1__.moveTaskTo(fTask, list.taskList); 
            _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.updateCardText(); 
        }
    }));
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
    }); 
}; 

function addRemoveAllBtn(){
    const listPage = document.querySelector('.list-page');
    const removeTaskBtn = _DOM_listinterface__WEBPACK_IMPORTED_MODULE_2__.make('button', listPage, 'remove-finished-btn');
    removeTaskBtn.textContent = 'Remove All Finished Tasks from View'; 

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
/* harmony export */   "makeList": () => (/* binding */ makeList)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");




let allLists = []; 

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
};

function addTasktoList(task){
    const allLists = _add_list__WEBPACK_IMPORTED_MODULE_0__.allLists;
    const parentList = allLists.find(list => list.title == task.parentList);
    parentList.taskList.push(task); 
    console.log(parentList.taskList);
    console.log(task); 
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






_DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.addListBtn();
defaultList(); 

function defaultList(){
const defaultList = (0,_add_list__WEBPACK_IMPORTED_MODULE_2__.makeList)("Default List", "This is your first list!");
_add_list__WEBPACK_IMPORTED_MODULE_2__.allLists.push(defaultList); 
_DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.makeListCard(); 
_DOM_listinterface__WEBPACK_IMPORTED_MODULE_1__.listCardListener(); 
};

// function populateStorage(){
//     localStorage.setItem()
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiw4Q0FBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBZ0I7QUFDcEI7Ozs7QUFJb0Y7Ozs7Ozs7OztVQzdEcEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ3lCO0FBQ1A7QUFDSTtBQUNNOztBQUVoRCwwREFBYztBQUNkOztBQUVBO0FBQ0Esb0JBQW9CLG1EQUFRO0FBQzVCLG9EQUFhO0FBQ2IsNERBQWdCO0FBQ2hCLGdFQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00tbGlzdGludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00tdGFza2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tpbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NLXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZC1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tZm9ybS12aXNpYmlsaXR5OiBibG9jazsgXFxufVxcblxcbmh0bWwsIGJvZHksICNjb250ZW50e1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNsaXN0LWludGVyZmFjZXtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgd2lkdGg6IDUwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuXFxuI2FkZC1saXN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5bY2xhc3MgXj0gJ2xpc3QtY2FyZCdde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDsgXFxuICAgIGJvcmRlcjpzb2xpZDtcXG59XFxuXFxuI3Rhc2staW50ZXJmYWNle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi5saXN0LXBhZ2V7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50by1kby1saXN0e1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgXFxufVxcblxcbi52aWV3LWZvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7IFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1mb3JtLXZpc2liaWxpdHk6IGJsb2NrOyBcXG59XFxuXFxuaHRtbCwgYm9keSwgI2NvbnRlbnR7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAlOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2xpc3QtaW50ZXJmYWNle1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICB3aWR0aDogNTAlOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG5cXG4jYWRkLWxpc3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbltjbGFzcyBePSAnbGlzdC1jYXJkJ117XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4OyBcXG4gICAgYm9yZGVyOnNvbGlkO1xcbn1cXG5cXG4jdGFzay1pbnRlcmZhY2V7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLmxpc3QtcGFnZXtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvLWRvLWxpc3R7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyBcXG59XFxuXFxuLnZpZXctZm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYywgZ2V0T3ZlcmxhcHBpbmdEYXlzSW5JbnRlcnZhbHMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnXG5pbXBvcnQgKiBhcyBhZGRMaXN0IGZyb20gJy4vYWRkLWxpc3QnXG5pbXBvcnQgKiBhcyBhZGRUYXNrIGZyb20gJy4vYWRkLXRhc2snXG5pbXBvcnQgKiBhcyBET01Gb3JtIGZyb20gJy4vRE9NLXRhc2tmb3JtJ1xuaW1wb3J0ICogYXMgRE9NVEkgZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSdcblxuZnVuY3Rpb24gbWFrZShlbGVtZW50LCBwYXJlbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTsgXG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IFxuICAgIHJldHVybiBuZXdFbGVtZW50OyBcbn07IFxuXG5mdW5jdGlvbiBhZGRMaXN0QnRuKCkge1xuICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1tYWtlcicpOyBcbiAgICBjb25zdCBhZGRMaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbGlzdC1mb3JtJyk7XG4gICAgYWRkTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkTGlzdEZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpOyBcbiAgICB9KTtcbiAgICBhZGRMaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgYWRkTGlzdEZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgICAgIGFkZExpc3QuYWRkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIG1ha2VMaXN0Q2FyZCgpOyBcbiAgICAgICAgbGlzdENhcmRMaXN0ZW5lcigpOyBcbiAgICB9KTtcbiAgICBET01Gb3JtLmNsb3NlQnRuTGlzdGVuZXIoKTsgIFxufTsgXG5cbi8vc3BsaXQgYXBhcnRcbmZ1bmN0aW9uIG1ha2VMaXN0Q2FyZCgpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGFkZExpc3QuYWxsTGlzdHNbYWRkTGlzdC5hbGxMaXN0cy5sZW5ndGggLSAxXTsgXG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1pbnRlcmZhY2UnKTtcbiAgICAgICAgY29uc3QgY2FyZCA9IG1ha2UoJ2RpdicsIGxpc3RDb250YWluZXIsIGBsaXN0LWNhcmRgKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNvZGUke2FkZExpc3QuYWxsTGlzdHMubGVuZ3RoIC0gMX1gKTtcbiAgICAgICAgY29uc3QgY2FyZEhlYWRlciA9IG1ha2UoJ2RpdicsIGNhcmQsIG51bGwpO1xuICAgICAgICBjYXJkSGVhZGVyLnRleHRDb250ZW50ID0gaW5kZXgudGl0bGU7IFxuXG4gICAgICAgIG1ha2UoJ2RpdicsIGNhcmQsICdjYXJkSXRlbUNvdW50Jyk7XG4gICAgICAgIG1ha2UoJ2RpdicsIGNhcmQsICdjYXJkRmluaXNoZWRDb3VudCcpOyBcbiAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gbWFrZSgnZGl2JywgY2FyZCwgbnVsbCk7XG4gICAgICAgIGNhcmREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGluZGV4LmRlc2NyaXB0aW9uOyBcbiAgICAgICAgdXBkYXRlQ2FyZFRleHQoKTtcbiAgICAgICAgcmVtb3ZlQnRuKGNhcmQpO1xufTsgXG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcmRUZXh0KCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jYXJkJyk7IFxuXG4gICAgY2FyZC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkSXRlbUNvdW50Jyk7XG4gICAgICAgIGNvbnN0IGZJdGVtQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZEZpbmlzaGVkQ291bnQnKTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGZpbmRMaXN0KGNhcmQpOyBcblxuICAgICAgICBsZXQgaXRlbURpdjtcbiAgICAgICAgbGV0IGZJdGVtRGl2OyBcblxuICAgICAgICBpdGVtQ291bnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50Tm9kZSA9PSBjYXJkKXtcbiAgICAgICAgICAgICAgICBpdGVtRGl2ID0gaXRlbTsgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTsgXG5cbiAgICAgICAgZkl0ZW1Db3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnROb2RlID09IGNhcmQpe1xuICAgICAgICAgICAgICAgIGZJdGVtRGl2ID0gaXRlbTsgXG4gICAgICAgICAgICB9OyBcbiAgICAgICAgfSk7IFxuICAgICAgICBpdGVtRGl2LnRleHRDb250ZW50ID0gYCR7bGlzdC50YXNrTGlzdC5sZW5ndGh9IFRhc2tzYFxuICAgICAgICBmSXRlbURpdi50ZXh0Q29udGVudCA9IGAke2xpc3QuZmluaXNoZWRUYXNrcy5sZW5ndGh9IEZpbmlzaGVkIFRhc2tzYFxuICAgIH0pOyBcbn07XG5cbmZ1bmN0aW9uIGxpc3RDYXJkTGlzdGVuZXIoKXtcbiAgICBjb25zdCBjYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWNhcmQnKTtcbiAgICBjYXJkTGlzdFtjYXJkTGlzdC5sZW5ndGgtMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTVRJLnJlcGxhY2VQYWdlKGNhcmRMaXN0W2NhcmRMaXN0Lmxlbmd0aC0xXSlcbiAgICB9KTsgXG59O1xuXG5cbmZ1bmN0aW9uIHJlbW92ZUJ0bihwYXJlbnQpe1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IG1ha2UoJ2J1dHRvbicsIHBhcmVudCwgJ3JlbW92ZS1idXR0b24nKTtcbiAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IFxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKGZpbmRMaXN0KHBhcmVudCksIGFkZExpc3QuYWxsTGlzdHMpO1xuICAgICAgICBhZGRMaXN0LmNoYW5nZUFsbExpc3QobmV3QXJyYXkpOyBcbiAgICAgICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJylcbiAgICAgICAgaWYobGlzdFBhZ2Upe1xuICAgICAgICAgICAgbGlzdFBhZ2UucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTsgXG4gICAgfSk7XG59O1xuXG4vL21vdmUgdG8gYWRkLWxpc3RcbmZ1bmN0aW9uIGZpbmRMaXN0KGNhcmQpeyBcbiAgICBjb25zdCBjYXJkQ29kZSA9IGNhcmQuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLnZhbHVlO1xuICAgIGNvbnN0IGxpc3QgPSBhZGRMaXN0LmFsbExpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmNvZGUgPT0gY2FyZENvZGUpOyBcbiAgICByZXR1cm4gbGlzdDsgXG59O1xuXG5leHBvcnQgeyBhZGRMaXN0QnRuLCBsaXN0Q2FyZExpc3RlbmVyLCBtYWtlLCB1cGRhdGVDYXJkVGV4dCwgbWFrZUxpc3RDYXJkLCBmaW5kTGlzdCB9XG5cblxuIiwiaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuXG5mdW5jdGlvbiBtYWtlRm9ybUVsZW1lbnRzKGVsZW1lbnQsIHBhcmVudCwgdHlwZSwgbmFtZSwgaWQpe1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTsgXG4gICAgLy9uZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgXG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9YCk7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtuYW1lfWApOyBcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3R5cGV9YClcbiAgICByZXR1cm4gbmV3RWxlbWVudDsgXG59OyBcblxuZnVuY3Rpb24gYWRkRm9ybUxhYmVscyhwYXJlbnQsIGlkLCB0ZXh0KXtcbiAgICBjb25zdCB0YXNrRGF0ZUxhYmVsID0gRE9NLm1ha2UoJ2xhYmVsJywgcGFyZW50LCBudWxsKVxuICAgIHRhc2tEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG4gICAgdGFza0RhdGVMYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG59OyBcblxuZnVuY3Rpb24gbWFrZUZvcm1Ecm9wZG93bnMoZGF0YSwgcGFyZW50LCB0eXBlKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBsaXN0T3B0aW9ucyA9IERPTS5tYWtlKCdvcHRpb24nLCBwYXJlbnQsIGAke3R5cGV9LWRyb3Bkb3duYCk7XG4gICAgICAgIGlmIChkYXRhID09IGFkZExpc3QuYWxsTGlzdHMpe1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGFbaV0udGl0bGUpO1xuICAgICAgICAgICAgbGlzdE9wdGlvbnMudGV4dENvbnRlbnQgPSBkYXRhW2ldLnRpdGxlOyBcbiAgICAgICAgICAgIGlmIChkYXRhW2ldLnRpdGxlID09IGF1dG9QaWNrTGlzdCgpKXtcbiAgICAgICAgICAgICAgICBsaXN0T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YVtpXSk7XG4gICAgICAgICAgICBsaXN0T3B0aW9ucy50ZXh0Q29udGVudCA9IGRhdGFbaV07IFxuICAgICAgICB9OyBcbiAgICB9O1xufTsgXG5cbmZ1bmN0aW9uIG1ha2VGb3JtKCl7XG4gICAgY29uc3QgY29udGVudFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3Qgdmlld0Zvcm0gPSBET00ubWFrZSgnZm9ybScsIGNvbnRlbnRXaW5kb3csICd2aWV3LWZvcm0nKTsgXG4gICAgdmlld0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1mb3JtJyk7IFxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBET00ubWFrZSgnYnV0dG9uJywgdmlld0Zvcm0sICdmb3JtLWNsb3NlLWJ0bicpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNsb3NlQnRuTGlzdGVuZXIoKTsgXG4gICAgXG5cbiAgICBET00ubWFrZSgnbGFiZWwnLCB2aWV3Rm9ybSwgbnVsbCkuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay10aXRsZScpOyBcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBtYWtlRm9ybUVsZW1lbnRzKCdpbnB1dCcsIHZpZXdGb3JtLCAndGV4dCcsICd0YXNrLXRpdGxlJywgJ3Rhc2stdGl0bGUnKTsgXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBOYW1lLi4uJylcblxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWxpc3QnLCAnTGlzdDonKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IERPTS5tYWtlKCdzZWxlY3QnLCB2aWV3Rm9ybSwgbnVsbClcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbGlzdCcpOyBcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1saXN0Jyk7IFxuICAgIG1ha2VGb3JtRHJvcGRvd25zKGFkZExpc3QuYWxsTGlzdHMsIHRhc2tMaXN0LCAnbGlzdCcpO1xuICAgIGNvbnNvbGUubG9nKGF1dG9QaWNrTGlzdCgpKVxuICAgIFxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWRhdGUnLCAnRHVlIERhdGU6Jyk7XG4gICAgbWFrZUZvcm1FbGVtZW50cygnaW5wdXQnLCB2aWV3Rm9ybSwgJ2RhdGUnLCAndGFzay1kYXRlJywgJ3Rhc2stZGF0ZScpOyBcbiAgICBcbiAgICBhZGRGb3JtTGFiZWxzKHZpZXdGb3JtLCAndGFzay1saXN0JywgJ1ByaW9yaXR5OicpO1xuICAgIGxldCBwcmlvcml0aWVzID0gWyctLScsICdIaWdoJywgJ01lZGl1bScsICdMb3cnXTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBET00ubWFrZSgnc2VsZWN0Jywgdmlld0Zvcm0sIG51bGwpO1xuICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stcHJpb3JpdHknKTsgXG4gICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXByaW9yaXR5Jyk7IFxuICAgIG1ha2VGb3JtRHJvcGRvd25zKHByaW9yaXRpZXMsIHRhc2tQcmlvcml0eSwgJ3ByaW9yaXR5Jyk7IFxuICAgIFxuICAgIGFkZEZvcm1MYWJlbHModmlld0Zvcm0sICd0YXNrLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uOicpXG4gICAgY29uc3QgdGFza0Rlc2NyaXAgPSBET00ubWFrZSgndGV4dGFyZWEnLCB2aWV3Rm9ybSwgbnVsbCk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzY3JpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzY3JpcC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAzMCk7XG4gICAgdGFza0Rlc2NyaXAuc2V0QXR0cmlidXRlKCdyb3dzJywgNCk7IFxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IERPTS5tYWtlKCdidXR0b24nLCB2aWV3Rm9ybSwgJ3ZpZXctZm9ybS1zdWJtaXQnKTsgXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTsgXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTsgXG4gICAgaWYoZm9ybSl7XG4gICAgZm9ybS5yZW1vdmUoKTsgXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcigpe1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTsgXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTsgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgICAgIGlmIChhZGRUYXNrLnZhbGlkYXRlVGFza05hbWUoZXZlbnQudGFyZ2V0KSA9PSB0cnVlKSB7XG4gICAgICAgIGFkZFRhc2suYWRkVChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBhZ2UnKTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdFBhZ2UpOyBcbiAgICAgICAgRE9NVEkucmVwbGFjZVBhZ2UobGlzdFBhZ2UpOyBcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICByZW1vdmVGb3JtKCk7IFxuICAgICAgICB9O1xuICAgIH0pOyBcbn07IFxuXG5mdW5jdGlvbiBhdXRvUGlja0xpc3QoKXtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpO1xuICAgIGNvbnN0IGxpc3QgPSBET00uZmluZExpc3QocGFnZSk7XG4gICAgcmV0dXJuIGxpc3QudGl0bGU7IFxufTtcblxuZnVuY3Rpb24gdmlld0Zvcm0odGFzayl7XG4gICAgc2V0RXhpc3RpbmdWYWx1ZXMoJyN0YXNrLXRpdGxlJywgdGFzay50aXRsZSk7XG4gICAgc2V0RXhpc3RpbmdWYWx1ZXMoJyN0YXNrLWxpc3QnLCB0YXNrLnBhcmVudExpc3QpOyBcbiAgICBzZXRFeGlzdGluZ1ZhbHVlcygnI3Rhc2stZGF0ZScsIHRhc2suZHVlRGF0ZSk7IFxuICAgIHNldEV4aXN0aW5nVmFsdWVzKCcjdGFzay1wcmlvcml0eScsIHRhc2sucHJpb3JpdHkpOyBcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJyk7IFxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjsgXG59O1xuXG5mdW5jdGlvbiBzZXRFeGlzdGluZ1ZhbHVlcyhpZCwgdmFsdWUpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTsgXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dmFsdWV9YClcbn07XG5cbmZ1bmN0aW9uIHZpZXdGb3JtTGlzdGVuZXIodGFzayl7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZm9ybScpO1xuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgZm9ybSA9IGFkZExpc3QuZ2V0RGF0YShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlKTtcbiAgICAgICAgdGFzay50aXRsZSA9IGZvcm1bMF07IFxuICAgICAgICB0YXNrLnBhcmVudExpc3QgPSBmb3JtWzFdO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSBmb3JtWzJdO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gZm9ybVszXTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGZvcm1bNF07IFxuICAgICAgICByZW1vdmVGb3JtKCk7IFxuXG4gICAgICAgIGNvbnN0IGNhcmRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY2FyZCcpO1xuICAgICAgICBET01USS5yZXBsYWNlUGFnZShjYXJkTGlzdFtjYXJkTGlzdC5sZW5ndGgtMV0pO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gY2xvc2VCdG5MaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY2xvc2UtYnRuJyk7XG4gICAgY29uc3QgYWRkTGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QtZm9ybScpO1xuICAgIGNsb3NlQnRuLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICBpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZSgnaWQnKS52YWx1ZSA9PSAnYWRkLXRhc2stZm9ybScpe1xuICAgICAgICAgICAgcmVtb3ZlRm9ybSgpOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZExpc3RGb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuICAgICAgICB9O1xuICAgIH0pKTtcbn07XG5cblxuXG5leHBvcnQgeyBtYWtlRm9ybSwgcmVtb3ZlRm9ybSwgYWRkVGFza0xpc3RlbmVyLCB2aWV3Rm9ybSwgdmlld0Zvcm1MaXN0ZW5lciwgY2xvc2VCdG5MaXN0ZW5lciB9XG5cbiIsImltcG9ydCAqIGFzIGFkZExpc3QgZnJvbSAnLi9hZGQtbGlzdCdcbmltcG9ydCAqIGFzIGFkZFRhc2sgZnJvbSAnLi9hZGQtdGFzaydcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTS1saXN0aW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NVEkgZnJvbSAnLi9ET00tdGFza2ludGVyZmFjZSdcbmltcG9ydCAqIGFzIERPTVRhc2sgZnJvbSAnLi9ET00tdGFza3MnXG5pbXBvcnQgKiBhcyBET01Gb3JtIGZyb20gJy4vRE9NLXRhc2tmb3JtJ1xuXG5mdW5jdGlvbiByZXBsYWNlUGFnZShjYXJkKSB7XG4gICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbnRlcmZhY2UnKTtcbiAgICBjb25zdCBwcmVzZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtcGFnZScpO1xuICAgIGNvbnN0IGV4aXN0aW5nRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1kcm9wZG93bicpOyBcblxuICAgIGlmIChsaXN0UGFnZS5sYXN0RWxlbWVudENoaWxkID09IHByZXNlbnQpe1xuICAgICAgICBsaXN0UGFnZS5sYXN0RWxlbWVudENoaWxkLnJlbW92ZSgpOyBcbiAgICAgICAgZXhpc3RpbmdEcm9wZG93bi5mb3JFYWNoKChkcm9wZG93bikgPT4gZHJvcGRvd24ucmVtb3ZlKCkpOyBcbiAgICB9OyBcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mb3JtJykpe1xuICAgICAgICBET01Gb3JtLnJlbW92ZUZvcm0oKTsgXG4gICAgfTsgXG5cbiAgICBtYWtlUGFnZShjYXJkKTtcbiAgICBhZGRUYXNrQnRuKCk7IFxuICAgIERPTVRhc2suYWRkUmVtb3ZlQWxsQnRuKCk7XG59O1xuXG5mdW5jdGlvbiBtYWtlUGFnZShjYXJkKXtcbiAgICBjb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWludGVyZmFjZScpO1xuICAgIGNvbnN0IHBhZ2UgPSBET00ubWFrZSgnZGl2JywgbGlzdFBhZ2UsICdsaXN0LXBhZ2UnKTsgXG5cbiAgICBjb25zdCBsaXN0SW5mbyA9IERPTS5maW5kTGlzdChjYXJkKTsgXG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bGlzdEluZm8uY29kZX1gKTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBET00ubWFrZSgnZGl2JywgcGFnZSwgJ3RvLWRvLWxpc3QnKTsgXG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gbGlzdEluZm8udGl0bGU7IFxuICAgIERPTVRhc2subWFrZUxpc3RJdGVtcyhsaXN0SW5mbyk7XG59O1xuXG5cbmZ1bmN0aW9uIGFkZFRhc2tCdG4oKSB7XG4gICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgY29uc3QgYWRkVGFza0J0bm4gPSBET00ubWFrZSgnYnV0dG9uJywgbGlzdFBhZ2UsICdhZGQtdGFzaycpO1xuICAgIGFkZFRhc2tCdG5uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgYWRkVGFza0J0bm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTUZvcm0ubWFrZUZvcm0oKTsgXG4gICAgICAgIERPTUZvcm0uYWRkVGFza0xpc3RlbmVyKCk7IFxuICAgIH0pOyBcbn07XG5cblxuXG5cblxuXG5leHBvcnQgeyByZXBsYWNlUGFnZSB9IiwiaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuaW1wb3J0ICogYXMgYWRkVGFzayBmcm9tICcuL2FkZC10YXNrJ1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NLWxpc3RpbnRlcmZhY2UnXG5pbXBvcnQgKiBhcyBET01USSBmcm9tICcuL0RPTS10YXNraW50ZXJmYWNlJ1xuaW1wb3J0ICogYXMgRE9NRm9ybSBmcm9tICcuL0RPTS10YXNrZm9ybSdcblxuZnVuY3Rpb24gbWFrZUxpc3RJdGVtcyhwYXJlbnRMaXN0KXtcbiAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7IFxuICAgIGNvbnN0IHRhc2tMaXN0ID0gRE9NLm1ha2UoJ2RpdicsIHBhcmVudENvbnRhaW5lciwgJ2xpc3QnKTtcbiAgICBjb25zdCAgbGlzdCA9IHBhcmVudExpc3QudGFza0xpc3Q7IFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbXNDb250YWluZXIgPSBET00ubWFrZSgnZGl2JywgdGFza0xpc3QsICdpdGVtLWNvbnRhaW5lcicpOyBcbiAgICAgICAgaXRlbXNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBsaXN0LWl0ZW0ke2l9YCk7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gRE9NLm1ha2UoJ2lucHV0JywgaXRlbXNDb250YWluZXIsICdsaXN0LWl0ZW0nKTsgXG4gICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IERPTS5tYWtlKCdsYWJlbCcsIGl0ZW1zQ29udGFpbmVyLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpOyBcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCduYW1lJywgYGxpc3QtaXRlbSR7aX1gKTsgXG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7IFxuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGxpc3QtaXRlbSR7aX1gKTtcbiAgICAgICAgaXRlbUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCBgbGlzdC1pdGVtJHtpfWApO1xuICAgICAgICBpdGVtTGFiZWwudGV4dENvbnRlbnQgPSBsaXN0W2ldLnRpdGxlOyBcbiAgICAgICAgRE9NLm1ha2UoJ2J1dHRvbicsIGl0ZW1zQ29udGFpbmVyLCAndGFzay12aWV3LWJ0bicpLnRleHRDb250ZW50ID0gJ1ZpZXcnO1xuICAgICAgICBET00ubWFrZSgnYnV0dG9uJywgaXRlbXNDb250YWluZXIsICd0YXNrLWRlbGV0ZS1idG4nKS50ZXh0Q29udGVudCA9ICdSZW1vdmUnOyBcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlDb2xvcnMobGlzdFtpXS5wcmlvcml0eSwgaXRlbUxhYmVsKTtcbiAgICAgICAgdmlld0l0ZW1zKGxpc3RbaV0pO1xuICAgICAgICByZW1vdmVUYXNrcyhpdGVtc0NvbnRhaW5lcik7IFxuICAgIH07XG4gICAgZmluaXNoVGFza0xpc3RlbmVyKCk7ICBcbn07XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5Q29sb3JzKGl0ZW1Qcmlvcml0eSwgaXRlbSl7XG4gICAgc3dpdGNoKGl0ZW1Qcmlvcml0eSl7XG4gICAgICAgIGNhc2UgKCdIaWdoJyk6IFxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHJlZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01lZGl1bSc6XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTG93JzogXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4nKTsgXG4gICAgICAgICAgICBicmVhazsgXG4gICAgfTsgXG59OyBcblxuZnVuY3Rpb24gdmlld0l0ZW1zKGl0ZW0pe1xuICAgIGNvbnN0IHZpZXdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdmlldy1idG4nKTsgXG4gICAgY29uc3Qgdmlld0J0biA9IHZpZXdCdG5zW3ZpZXdCdG5zLmxlbmd0aC0xXTsgXG4gICAgdmlld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIERPTUZvcm0ubWFrZUZvcm0oKTsgXG4gICAgICAgICAgICBET01Gb3JtLnZpZXdGb3JtKGl0ZW0pOyBcbiAgICAgICAgICAgIERPTUZvcm0udmlld0Zvcm1MaXN0ZW5lcihpdGVtKTsgXG4gICAgICAgIH0pOyBcbn07XG5cbmZ1bmN0aW9uIGZpbmlzaFRhc2tMaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpOyBcbiAgICBcbiAgICBjaGVja0JveC5mb3JFYWNoKChib3gpID0+IGJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudExpc3QgPSBib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBET00uZmluZExpc3QocGFyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBhZGRMaXN0LmZpbmRNYXRjaENvZGUoYm94LmdldEF0dHJpYnV0ZSgnaWQnKSwgbGlzdC50YXNrTGlzdCk7XG4gICAgICAgIGNvbnN0IGZUYXNrID0gYWRkTGlzdC5maW5kTWF0Y2hDb2RlKGJveC5nZXRBdHRyaWJ1dGUoJ2lkJyksIGxpc3QuZmluaXNoZWRUYXNrcyk7XG5cbiAgICAgICAgaWYgKGJveC5jaGVja2VkKXtcbiAgICAgICAgICAgIGJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkLXRhc2snKTsgXG4gICAgICAgICAgICBsaXN0LnRhc2tMaXN0ID0gYWRkVGFzay5tb3ZlVGFza0Zyb20odGFzaywgbGlzdC50YXNrTGlzdCk7IFxuICAgICAgICAgICAgbGlzdC5maW5pc2hlZFRhc2tzID0gYWRkVGFzay5tb3ZlVGFza1RvKHRhc2ssIGxpc3QuZmluaXNoZWRUYXNrcyk7IFxuICAgICAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZighYm94LmNoZWNrZWQpe1xuICAgICAgICAgICAgbGlzdC5maW5pc2hlZFRhc2tzID0gYWRkVGFzay5tb3ZlVGFza0Zyb20oZlRhc2ssIGxpc3QuZmluaXNoZWRUYXNrcyk7IFxuICAgICAgICAgICAgbGlzdC50YXNrTGlzdCA9IGFkZFRhc2subW92ZVRhc2tUbyhmVGFzaywgbGlzdC50YXNrTGlzdCk7IFxuICAgICAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgICAgICB9XG4gICAgfSkpO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlVGFza3ModGFza0NvbnRhaW5lcil7XG4gICAgY29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRlbGV0ZS1idG4nKTsgXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gcmVtb3ZlQnRuc1tyZW1vdmVCdG5zLmxlbmd0aC0xXTtcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudExpc3QgPSB0YXNrQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGlzdCA9IERPTS5maW5kTGlzdChwYXJlbnRMaXN0KTtcbiAgICAgICAgY29uc3QgdGFzayA9IGFkZExpc3QuZmluZE1hdGNoQ29kZSh0YXNrQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaWQnKSwgbGlzdC50YXNrTGlzdCk7XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gYWRkVGFzay5tb3ZlVGFza0Zyb20odGFzaywgbGlzdC50YXNrTGlzdCk7XG4gICAgICAgIGxpc3QudGFza0xpc3QgPSBuZXdBcnJheTsgXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0FycmF5KTsgXG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIERPTS51cGRhdGVDYXJkVGV4dCgpOyBcbiAgICB9KTsgXG59OyBcblxuZnVuY3Rpb24gYWRkUmVtb3ZlQWxsQnRuKCl7XG4gICAgY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1wYWdlJyk7XG4gICAgY29uc3QgcmVtb3ZlVGFza0J0biA9IERPTS5tYWtlKCdidXR0b24nLCBsaXN0UGFnZSwgJ3JlbW92ZS1maW5pc2hlZC1idG4nKTtcbiAgICByZW1vdmVUYXNrQnRuLnRleHRDb250ZW50ID0gJ1JlbW92ZSBBbGwgRmluaXNoZWQgVGFza3MgZnJvbSBWaWV3JzsgXG5cbiAgICByZW1vdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maW5pc2hlZC10YXNrJyk7IFxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRMaXN0ID0gdGFzay5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRMaXN0KTsgXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gRE9NLmZpbmRMaXN0KHBhcmVudExpc3QpO1xuICAgICAgICAgICAgY29uc3QgdGFza09iaiA9IGFkZExpc3QuZmluZE1hdGNoQ29kZSh0YXNrLmdldEF0dHJpYnV0ZSgnaWQnKSwgbGlzdC50YXNrTGlzdCk7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFkZFRhc2subW92ZVRhc2tGcm9tKHRhc2tPYmosIGxpc3QudGFza0xpc3QpO1xuICAgICAgICAgICAgbGlzdC50YXNrTGlzdCA9IG5ld0FycmF5OyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QudGFza0xpc3QpOyBcbiAgICAgICAgICAgIHRhc2sucmVtb3ZlKCk7IFxuICAgICAgICB9KTtcbiAgICAgICAgRE9NLnVwZGF0ZUNhcmRUZXh0KCk7IFxuICAgIH0pO1xufTtcblxuXG5cblxuZXhwb3J0IHsgbWFrZUxpc3RJdGVtcywgYWRkUmVtb3ZlQWxsQnRuIH0iLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgZm9ybWF0LCBjb21wYXJlQXNjIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJ1xuXG5sZXQgYWxsTGlzdHMgPSBbXTsgXG5cbmZ1bmN0aW9uIGdldERhdGEoZm9ybSl7XG4gICAgbGV0IHZhbHVlc0FyciA9IFtdOyBcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBmb3JtRGF0YS52YWx1ZXMoKSl7XG4gICAgICAgIHZhbHVlc0Fyci5wdXNoKHZhbHVlKTsgXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVzQXJyOyBcbn07XG5cbmZ1bmN0aW9uIGZpbmRNYXRjaChuYW1lLCBsaXN0cykge1xuICAgIGNvbnN0IG5hbWVzID0gbGlzdHMuZmluZChsaXN0ID0+IGxpc3QudGl0bGUgPT0gbmFtZSk7IFxuICAgIHJldHVybiBuYW1lczsgXG59OyBcblxuXG5mdW5jdGlvbiBmaW5kTWF0Y2hDb2RlKG5hbWUsIGxpc3RzKSB7XG4gICAgY29uc3QgbmFtZXMgPSBsaXN0cy5maW5kKGxpc3QgPT4gbGlzdC5jb2RlID09IG5hbWUpOyBcbiAgICByZXR1cm4gbmFtZXM7IFxufTsgXG5cblxuZnVuY3Rpb24gdGl0bGVOYW1lVmFsaWRhdGlvbih0aXRsZSl7XG4gICAgaWYodGl0bGUgPT0gJycpe1xuICAgICAgICByZXR1cm4gdGl0bGUgPSBgTGlzdCAke2FsbExpc3RzLmxlbmd0aH1gXG4gICAgfSBlbHNlIGlmKGZpbmRNYXRjaCh0aXRsZSwgYWxsTGlzdHMpKSB7XG4gICAgICAgIHJldHVybiB0aXRsZSA9IGAke3RpdGxlfSAoTGlzdCAke2FsbExpc3RzLmxlbmd0aH0pYFxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcbn07XG5cbmNvbnN0IG1ha2VMaXN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza0xpc3QsIGZpbmlzaGVkVGFza3MsIGNvZGUpID0+IHtcbiAgICB0aXRsZSA9IHRpdGxlTmFtZVZhbGlkYXRpb24odGl0bGUpO1xuICAgIHRhc2tMaXN0ID0gW107IFxuICAgIGZpbmlzaGVkVGFza3MgPSBbXTsgXG4gICAgY29kZSA9IGBjb2RlJHthbGxMaXN0cy5sZW5ndGh9YDtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tMaXN0LCBmaW5pc2hlZFRhc2tzLCBjb2RlIH1cbn07XG5cbmZ1bmN0aW9uIGFkZChmb3JtKXtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGdldERhdGEoZm9ybSk7XG4gICAgY29uc3QgbGlzdCA9IG1ha2VMaXN0KGZvcm1EYXRhWzBdLCBmb3JtRGF0YVsxXSk7IFxuICAgIGFsbExpc3RzLnB1c2gobGlzdCk7IFxufTtcblxuZnVuY3Rpb24gY2hhbmdlQWxsTGlzdChsaXN0KXtcbiAgICBhbGxMaXN0cyA9IGxpc3Q7IFxufTsgXG5cblxuZXhwb3J0IHsgbWFrZUxpc3QsIGdldERhdGEsIGFkZCwgYWxsTGlzdHMsIGZpbmRNYXRjaCwgY2hhbmdlQWxsTGlzdCwgZmluZE1hdGNoQ29kZSB9IiwiaW1wb3J0IHsgZm9ybWF0LCBjb21wYXJlQXNjIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJ1xuaW1wb3J0ICogYXMgYWRkTGlzdCBmcm9tICcuL2FkZC1saXN0J1xuXG5cbmNvbnN0IG1ha2VUYXNrID0gKHRpdGxlLCBwYXJlbnRMaXN0LCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGNvZGUgKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGFkZExpc3QuZmluZE1hdGNoKHBhcmVudExpc3QsIGFkZExpc3QuYWxsTGlzdHMpLnRhc2tMaXN0O1xuICAgIGNvZGUgPSBgbGlzdC1pdGVtJHtsaXN0Lmxlbmd0aH1gOyBcbiAgICBjb25zb2xlLmxvZyhwcmlvcml0eSk7XG4gICAgcmV0dXJuIHsgdGl0bGUsIHBhcmVudExpc3QsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgY29kZSB9XG59O1xuXG5cbmZ1bmN0aW9uIGFkZFQoZm9ybSl7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhZGRMaXN0LmdldERhdGEoZm9ybSk7XG4gICAgY29uc29sZS5sb2coZm9ybURhdGFbM10pXG4gICAgY29uc3QgdGFzayA9IG1ha2VUYXNrKGZvcm1EYXRhWzBdLCBmb3JtRGF0YVsxXSwgZm9ybURhdGFbMl0sIGZvcm1EYXRhWzNdLCBmb3JtRGF0YVs0XSk7IFxuICAgIGFkZFRhc2t0b0xpc3QodGFzayk7XG59O1xuXG5mdW5jdGlvbiBhZGRUYXNrdG9MaXN0KHRhc2spe1xuICAgIGNvbnN0IGFsbExpc3RzID0gYWRkTGlzdC5hbGxMaXN0cztcbiAgICBjb25zdCBwYXJlbnRMaXN0ID0gYWxsTGlzdHMuZmluZChsaXN0ID0+IGxpc3QudGl0bGUgPT0gdGFzay5wYXJlbnRMaXN0KTtcbiAgICBwYXJlbnRMaXN0LnRhc2tMaXN0LnB1c2godGFzayk7IFxuICAgIGNvbnNvbGUubG9nKHBhcmVudExpc3QudGFza0xpc3QpO1xuICAgIGNvbnNvbGUubG9nKHRhc2spOyBcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGFza05hbWUoZm9ybSl7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhZGRMaXN0LmdldERhdGEoZm9ybSk7XG4gICAgaWYoZm9ybURhdGFbMF0gPT0gJycpe1xuICAgICAgICBhbGVydChcIkVtcHR5IE5hbWVcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZXtcbiAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG1vdmVUYXNrRnJvbSh0YXNrLCBpbml0aWFsKXtcbiAgICBjb25zdCBuZXdJbml0aWFsID0gaW5pdGlhbC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXNrKTtcbiAgICBsZXQgbmV3QXJyYXk7XG5cbiAgICBpZiAoIW5ld0luaXRpYWwpe1xuICAgICAgIHJldHVybiBuZXdBcnJheSA9IFtdOyBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3QXJyYXkgPSBuZXdJbml0aWFsOyBcbiAgICB9XG4gICBcbn07XG5cbmZ1bmN0aW9uIG1vdmVUYXNrVG8odGFzaywgYXJyYXkpe1xuICAgIGFycmF5LnB1c2godGFzayk7XG4gICAgcmV0dXJuIGFycmF5OyBcbn07IFxuXG5mdW5jdGlvbiBjaGFuZ2VBbGxMaXN0KGxpc3Qpe1xuICAgIGFkZExpc3QuYWxsTGlzdHMgPSBsaXN0OyBcbn07IFxuXG5cblxuZXhwb3J0IHsgbWFrZVRhc2ssIGFkZFQsIGFkZFRhc2t0b0xpc3QsIHZhbGlkYXRlVGFza05hbWUsIG1vdmVUYXNrRnJvbSwgbW92ZVRhc2tUbyB9XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cydcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTS1saXN0aW50ZXJmYWNlJ1xuaW1wb3J0IHsgYWxsTGlzdHMsIG1ha2VMaXN0IH0gZnJvbSAnLi9hZGQtbGlzdCc7XG5cbkRPTS5hZGRMaXN0QnRuKCk7XG5kZWZhdWx0TGlzdCgpOyBcblxuZnVuY3Rpb24gZGVmYXVsdExpc3QoKXtcbmNvbnN0IGRlZmF1bHRMaXN0ID0gbWFrZUxpc3QoXCJEZWZhdWx0IExpc3RcIiwgXCJUaGlzIGlzIHlvdXIgZmlyc3QgbGlzdCFcIik7XG5hbGxMaXN0cy5wdXNoKGRlZmF1bHRMaXN0KTsgXG5ET00ubWFrZUxpc3RDYXJkKCk7IFxuRE9NLmxpc3RDYXJkTGlzdGVuZXIoKTsgXG59O1xuXG4vLyBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKXtcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgpXG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=