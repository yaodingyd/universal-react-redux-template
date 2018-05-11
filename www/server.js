/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?modules!./src/client/App.css?raw":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader?modules!./src/client/App.css?raw ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.hFX_faXujTOjfDyziU80r {\n  background-color: #96f2d7;\n}", ""]);

// exports
exports.locals = {
	"teal-light": "hFX_faXujTOjfDyziU80r"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules!./src/client/components/nav/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader?modules!./src/client/components/nav/style.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".l-C43bPIDTISmbHtyybxM {\n  margin-bottom: 2rem;\n}", ""]);

// exports
exports.locals = {
	"nav": "l-C43bPIDTISmbHtyybxM"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules!./src/client/components/post-entry/style.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader?modules!./src/client/components/post-entry/style.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cySxZM9WbntaPTUHhhBiW {\n  margin: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E6EAEE;\n}", ""]);

// exports
exports.locals = {
	"post": "cySxZM9WbntaPTUHhhBiW"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules!./src/client/components/tags/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader?modules!./src/client/components/tags/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._3jtAoBBTX0JMORBdlgoSEp {\n  padding: 5px;\n}\n\n@media (max-width: 767px) {\n  ._3jtAoBBTX0JMORBdlgoSEp {\n    display: inline-block;\n  }\n}\n\n._2ciMG69wKeDhjdbabf8CBH {\n  padding-left: 10px;\n  font-weight: 700;\n}\n\n.pr5zvPKD9Mn8XV1Myh6iJ {\n  padding-top: 3rem;\n}", ""]);

// exports
exports.locals = {
	"tag": "_3jtAoBBTX0JMORBdlgoSEp",
	"tag-title": "_2ciMG69wKeDhjdbabf8CBH",
	"tag-container": "pr5zvPKD9Mn8XV1Myh6iJ"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules!./src/client/containers/auth/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader?modules!./src/client/containers/auth/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nvRhy0RvpqAkdz-F0UGyL {\n  background-color: #96f2d7;\n  width: 100%;\n  min-height: 100vh;\n}\n\n._2Vnkt-dnbqzBzExC-7GguF {\n  padding-top: 100px;\n  padding-bottom: 50px;\n  width: 300px;\n  margin: 0 auto -150px;\n  min-height: 100vh;\n}\n\n.-HL5vjxFxe9SM0GBaHmDW {\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 3rem;\n  margin-bottom: 1.25rem;\n}\n\n._23zKPtRo0o4VgTjSoOIv10 {\n  display: block;\n  padding-bottom: 2rem;\n}\n\n._2FoQu1e2sDezXD4yW3mYVa {\n  box-sizing: border-box;\n  font-size: 1rem;\n  border: 1px solid #b3b3b3;\n  border-radius: 2px;\n  display: block;\n  -webkit-appearance: none;\n  width: 100%;\n  max-width: 500px;\n  color: #000;\n  line-height: 18px;\n  padding: 10px 11px;\n  height: 44px;\n}\n\n._3JoieDe0AdXu6_jB13kw8R {\n  width: 100%;\n}\n\n.QusAY_-Uiq26R1mL6JOnj {\n  margin-top: 20px;\n}\n\n.SgzHXMOGrweKzT6132h8P {\n  color: red;\n  position: absolute;\n}\n", ""]);

// exports
exports.locals = {
	"container": "nvRhy0RvpqAkdz-F0UGyL",
	"auth": "_2Vnkt-dnbqzBzExC-7GguF",
	"heading": "-HL5vjxFxe9SM0GBaHmDW",
	"group": "_23zKPtRo0o4VgTjSoOIv10",
	"input": "_2FoQu1e2sDezXD4yW3mYVa",
	"button": "_3JoieDe0AdXu6_jB13kw8R",
	"link": "QusAY_-Uiq26R1mL6JOnj",
	"error": "SgzHXMOGrweKzT6132h8P"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules!./src/client/containers/forum/style.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader?modules!./src/client/containers/forum/style.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._11_j2Uh1jx6TCxfaNpE7Dl {\n  padding: 0.75rem;\n}", ""]);

// exports
exports.locals = {
	"container": "_11_j2Uh1jx6TCxfaNpE7Dl"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules!./src/client/containers/post/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader?modules!./src/client/containers/post/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._39qgo3nf4KmrRpOLy6n193 {\n  padding: 0.75rem;\n}\n\n._1aro4jQlnuviBajcahgLrI {\n  margin-bottom: 1rem;\n}", ""]);

// exports
exports.locals = {
	"container": "_39qgo3nf4KmrRpOLy6n193",
	"article": "_1aro4jQlnuviBajcahgLrI"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?modules!./src/client/containers/welcome/style.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader?modules!./src/client/containers/welcome/style.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".qJiq5CHqpMz9F48JimzUH {\n  background-color: #96f2d7;\n}\n\n._2uxT0k9KfhG53Iwhj5SSrB {\n  margin-bottom: 4rem !important;\n}", ""]);

// exports
exports.locals = {
	"my-hero": "qJiq5CHqpMz9F48JimzUH",
	"subtitle": "_2uxT0k9KfhG53Iwhj5SSrB"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/node-style-loader/collect.js":
/*!***************************************************!*\
  !*** ./node_modules/node-style-loader/collect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var styleStack = __webpack_require__(/*! ./lib/styleStack */ "./node_modules/node-style-loader/lib/styleStack.js");
// it's necessary setting initialStyleStack as it may not be required as the same module between webpack and the user
// due to path differences in certain scenarios
global.initialStyleStack = (global.initialStyleStack !== undefined) ? global.initialStyleStack : new styleStack();

// initial style collection
exports.add = add.bind(null, initialStyleStack);

exports.collectInitial = function collectInitial() {
  var styleTag = initialStyleStack.getStyleTag();
  exports.add = inactiveAdd;
  // commented-out so it doesn't have to be stored by the user and to test hot-reload
  //initialStyleStack = undefined;
  return styleTag;
}

exports.collectContext = function collectContext(fn) {

  var contextStyleStack = new styleStack();

  // include path differences may make this fail, TODO: test
  exports.add = add.bind(null, contextStyleStack);
  var result = fn();
  exports.add = inactiveAdd;

  return [
    contextStyleStack.getStyleTag(),
    result
  ]
}

function add(stack, list, options) {
  var styles = styleStack.listToStyles(list);
  stack.addStylesToStack(styles, options);
}

function inactiveAdd() {}


/***/ }),

/***/ "./node_modules/node-style-loader/lib/styleStack.js":
/*!**********************************************************!*\
  !*** ./node_modules/node-style-loader/lib/styleStack.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var styleStack = module.exports = function styleStack() {
  this.stylesInStack = {}; // this is stylesInDom in style-loader
  this.stackStyleElement = { // this is roughly equivalent to singletonElement in style-loader
    cssText: ""
  };
  this.singletonCounter = 0;
}

styleStack.prototype.addStylesToStack = function addStylesToStack(styles, options) {
  for(var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var stackStyle = this.stylesInStack[item.id];
    if(stackStyle) {
      stackStyle.refs++;
      for(var j = 0; j < stackStyle.parts.length; j++) {
        stackStyle.parts[j](item.parts[j]); // calls updateStyle function
      }
      for(; j < item.parts.length; j++) {
        stackStyle.parts.push(this.addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];
      for(var j = 0; j < item.parts.length; j++) {
        parts.push(this.addStyle(item.parts[j], options));
      }
      this.stylesInStack[item.id] = {id: item.id, refs: 1, parts: parts};
    }
  }
}

styleStack.prototype.addStyle = function addStyle(obj) {
  var styleIndex = this.singletonCounter++;
  var update = applyToSingletonTag.bind(null, this.stackStyleElement, styleIndex);

  update(obj); // call update once for first insertion

  return function updateStyle(newObj) {
    if(newObj) {
      if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
        return;
      update(obj = newObj); // this case is not properly handled and would only be reached
                            // if re-including a style while specifying a different sourceMap or media option
    }
  };
}

styleStack.prototype.getStyleTag = function getStyleTag() {
  return '<style class="server-style-loader-element">'+this.stackStyleElement.cssText+'</style>';
}

function applyToSingletonTag(styleElement, index, obj) {
  styleElement.cssText = replaceText(index, obj.css);
}

module.exports.listToStyles = function listToStyles(list) {
  var styles = [];
  var newStyles = {};
  for(var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {css: css, media: media, sourceMap: sourceMap};
    if(!newStyles[id])
      styles.push(newStyles[id] = {id: id, parts: [part]});
    else
      newStyles[id].parts.push(part);
  }
  return styles;
}


var replaceText = (function () {
  var textStore = [];

  return function (index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
})();


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/client/App.css?raw":
/*!********************************!*\
  !*** ./src/client/App.css?raw ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?modules!./App.css?raw */ "./node_modules/css-loader/index.js?modules!./src/client/App.css?raw");
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(/*! ../../node_modules/node-style-loader/collect.js */ "./node_modules/node-style-loader/collect.js").add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default, App, BrowserApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserApp", function() { return BrowserApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history */ "./src/client/history.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/client/store.js");
/* harmony import */ var _containers_welcome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/welcome */ "./src/client/containers/welcome/index.js");
/* harmony import */ var _containers_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/auth */ "./src/client/containers/auth/index.js");
/* harmony import */ var _containers_forum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/forum */ "./src/client/containers/forum/index.js");
/* harmony import */ var _containers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/post */ "./src/client/containers/post/index.js");
/* harmony import */ var _containers_protected__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/protected */ "./src/client/containers/protected/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/header */ "./src/client/components/header/index.js");
/* harmony import */ var _App_css_raw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.css?raw */ "./src/client/App.css?raw");
/* harmony import */ var _App_css_raw__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css_raw__WEBPACK_IMPORTED_MODULE_11__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


















function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"],
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/', exact: true, component: _containers_welcome__WEBPACK_IMPORTED_MODULE_5__["default"] }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/login', component: _containers_auth__WEBPACK_IMPORTED_MODULE_6__["default"] }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/signup', component: _containers_auth__WEBPACK_IMPORTED_MODULE_6__["default"] }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_protected__WEBPACK_IMPORTED_MODULE_9__["default"], { path: '/main', component: _containers_forum__WEBPACK_IMPORTED_MODULE_7__["default"] }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_protected__WEBPACK_IMPORTED_MODULE_9__["default"], { path: '/viewpost', component: _containers_post__WEBPACK_IMPORTED_MODULE_8__["default"] })
    )
  );
}

function BrowserApp() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"],
    { store: _store__WEBPACK_IMPORTED_MODULE_4__["default"] },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Router"],
      { history: _history__WEBPACK_IMPORTED_MODULE_3__["default"] },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null)
    )
  );
}

var _default = BrowserApp;
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', '/Users/yding/projects/universal-react-redux-template/src/client/App.js');
  reactHotLoader.register(BrowserApp, 'BrowserApp', '/Users/yding/projects/universal-react-redux-template/src/client/App.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/App.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_GET_ALL_REQUEST, POST_GET_ALL_SUCCESS, POST_SET_CURRENT, FB_LOGIN_REQUEST, FB_LOGIN_SUCCESS, loginUser, signupUser, reloginUser, logoutUser, postSetCurrent, postCreate, postGetAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAILURE", function() { return LOGOUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_REQUEST", function() { return SIGNUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_FAILURE", function() { return SIGNUP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_CREATE_REQUEST", function() { return POST_CREATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_CREATE_SUCCESS", function() { return POST_CREATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_GET_ALL_REQUEST", function() { return POST_GET_ALL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_GET_ALL_SUCCESS", function() { return POST_GET_ALL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_SET_CURRENT", function() { return POST_SET_CURRENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FB_LOGIN_REQUEST", function() { return FB_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FB_LOGIN_SUCCESS", function() { return FB_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUser", function() { return signupUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reloginUser", function() { return reloginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postSetCurrent", function() { return postSetCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCreate", function() { return postCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postGetAll", function() { return postGetAll; });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../history */ "./src/client/history.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/client/utilities/index.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! whatwg-fetch */ "whatwg-fetch");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();





var LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = 'LOGIN_FAILURE';

var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = 'LOGOUT_FAILURE';

var SIGNUP_REQUEST = 'SIGNUP_REQUEST';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILURE = 'SIGNUP_FAILURE';

var POST_CREATE_REQUEST = 'POST_CREATE_REQUEST';
var POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS';
var POST_GET_ALL_REQUEST = 'POST_GET_ALL_REQUEST';
var POST_GET_ALL_SUCCESS = 'POST_GET_ALL_SUCCESS';
var POST_SET_CURRENT = 'POST_SET_CURRENT';

var FB_LOGIN_REQUEST = 'FB_LOGIN_REQUEST';
var FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS';

var LOGIN_REQUEST_URI = '/auth/login';
var SIGNUP_REQUEST_URI = '/auth/signup';
var MAIN_URL = '/main';
var PROFILE_URL = '/profile';
var POST_URL = '/post';

var loginRequest = function loginRequest(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds: creds
  };
};

var loginSuccess = function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user
  };
};

var loginFailure = function loginFailure(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message: message
  };
};

function authUser(creds, url) {
  var config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'email=' + creds.email + '&password=' + creds.password
  };

  return function (dispatch) {
    dispatch(loginRequest(creds));
    return window.fetch(url, config).then(function (response) {
      return response.json().then(function (user) {
        return { user: user, response: response };
      });
    }).then(function (_ref) {
      var user = _ref.user,
          response = _ref.response;

      if (!response.ok) {
        dispatch(loginFailure(user.message));
        return Promise.reject(user);
      } else {
        _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].setItem('token', user.token);
        _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].setItem('name', user.name);
        _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].setItem('email', user.email);
        _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].setItem('id', user.id);
        dispatch(loginSuccess(user));
        _history__WEBPACK_IMPORTED_MODULE_0__["default"].push(MAIN_URL);
      }
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

var loginUser = function loginUser(creds) {
  return authUser(creds, LOGIN_REQUEST_URI);
};

var signupUser = function signupUser(creds) {
  return authUser(creds, SIGNUP_REQUEST_URI);
};

var reloginUser = function reloginUser(token) {
  var config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'bearer ' + token
    }
  };

  return function (dispatch) {
    return window.fetch('/auth/relogin', config).then(function (response) {
      if (!response.ok) {
        _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].clear();
      } else {
        var user = {
          token: _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('token'),
          name: _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('name'),
          email: _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('email'),
          id: _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('id')
        };
        dispatch(loginSuccess(user));
        _history__WEBPACK_IMPORTED_MODULE_0__["default"].push(MAIN_URL);
      }
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
};

var logoutRequest = function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
};

var logoutSuccess = function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
};

var logoutUser = function logoutUser() {
  return function (dispatch) {
    dispatch(logoutRequest());
    _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].removeItem('token');
    _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].removeItem('name');
    _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].removeItem('id');
    dispatch(logoutSuccess());
    _history__WEBPACK_IMPORTED_MODULE_0__["default"].push('/');
  };
};

// const requestFBLogin = () => ({
//   type: FB_LOGIN_REQUEST,
//   isFetching: true,
//   isAuthenticated: false,
//   creds: ''
// })

// const receiveFBLogin = (user) => ({
//   type: FB_LOGIN_SUCCESS,
//   isFetching: false,
//   isAuthenticated: true,
//   id_token: user.id_token,
//   username: user.username,
//   userId: user.id
// })

// export const FBLoginUser = (user) => {
//   return dispatch => {
//     dispatch(requestFBLogin())
//     localStorage.setItem('id_token', user.id_token)
//     localStorage.setItem('username', user.username)
//     localStorage.setItem('userId', user.id)
//     dispatch(receiveFBLogin(user))
//     browserHistory.push(`/browse`)
//   }
// }

var postCreateRequest = function postCreateRequest(post) {
  return {
    type: POST_CREATE_REQUEST,
    post: post
  };
};

var postCreateSuccess = function postCreateSuccess() {
  return {
    type: POST_CREATE_SUCCESS
  };
};

var postGetAllRequest = function postGetAllRequest() {
  return {
    type: POST_GET_ALL_REQUEST
  };
};

var postGetAllSuccess = function postGetAllSuccess(posts) {
  return {
    type: POST_GET_ALL_SUCCESS,
    posts: posts
  };
};

var postSetCurrent = function postSetCurrent(post) {
  return {
    type: POST_SET_CURRENT,
    post: post
  };
};

var postCreate = function postCreate(post) {
  var config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  };

  return function (dispatch) {
    dispatch(postCreateRequest(post));
    return window.fetch('/post/create', config).then(function (response) {
      if (!response.ok) {
        // TODO: failure
      } else {
        dispatch(postCreateSuccess());
      }
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
};

var postGetAll = function postGetAll() {
  var config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return function (dispatch) {
    dispatch(postGetAllRequest());
    return window.fetch('/post/all', config).then(function (response) {
      return response.json().then(function (posts) {
        dispatch(postGetAllSuccess(posts));
      });
    });
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LOGIN_REQUEST, 'LOGIN_REQUEST', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(LOGIN_SUCCESS, 'LOGIN_SUCCESS', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(LOGIN_FAILURE, 'LOGIN_FAILURE', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(LOGOUT_REQUEST, 'LOGOUT_REQUEST', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(LOGOUT_SUCCESS, 'LOGOUT_SUCCESS', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(LOGOUT_FAILURE, 'LOGOUT_FAILURE', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(SIGNUP_REQUEST, 'SIGNUP_REQUEST', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(SIGNUP_SUCCESS, 'SIGNUP_SUCCESS', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(SIGNUP_FAILURE, 'SIGNUP_FAILURE', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(POST_CREATE_REQUEST, 'POST_CREATE_REQUEST', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(POST_CREATE_SUCCESS, 'POST_CREATE_SUCCESS', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(POST_GET_ALL_REQUEST, 'POST_GET_ALL_REQUEST', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(POST_GET_ALL_SUCCESS, 'POST_GET_ALL_SUCCESS', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(POST_SET_CURRENT, 'POST_SET_CURRENT', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(FB_LOGIN_REQUEST, 'FB_LOGIN_REQUEST', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(FB_LOGIN_SUCCESS, 'FB_LOGIN_SUCCESS', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(LOGIN_REQUEST_URI, 'LOGIN_REQUEST_URI', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(SIGNUP_REQUEST_URI, 'SIGNUP_REQUEST_URI', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(MAIN_URL, 'MAIN_URL', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(PROFILE_URL, 'PROFILE_URL', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(POST_URL, 'POST_URL', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(loginRequest, 'loginRequest', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(loginSuccess, 'loginSuccess', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(loginFailure, 'loginFailure', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(authUser, 'authUser', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(loginUser, 'loginUser', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(signupUser, 'signupUser', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(reloginUser, 'reloginUser', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(logoutRequest, 'logoutRequest', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(logoutSuccess, 'logoutSuccess', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(logoutUser, 'logoutUser', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(postCreateRequest, 'postCreateRequest', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(postCreateSuccess, 'postCreateSuccess', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(postGetAllRequest, 'postGetAllRequest', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(postGetAllSuccess, 'postGetAllSuccess', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(postSetCurrent, 'postSetCurrent', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(postCreate, 'postCreate', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  reactHotLoader.register(postGetAll, 'postGetAll', '/Users/yding/projects/universal-react-redux-template/src/client/actions/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/components/comments/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/comments/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();



var Comment = function Comment() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "div",
    { className: "media" },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      { className: "media-content" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        { className: "content" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "p",
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "strong",
            null,
            "John Smith"
          ),
          " ",
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "small",
            null,
            "@johnsmith"
          ),
          " ",
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "small",
            null,
            "31m"
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis."
        )
      )
    )
  );
};

var Comments = function Comments() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "div",
    { className: "box" },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, null)
  );
};

var _default = Comments;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Comment, "Comment", "/Users/yding/projects/universal-react-redux-template/src/client/components/comments/index.js");
  reactHotLoader.register(Comments, "Comments", "/Users/yding/projects/universal-react-redux-template/src/client/components/comments/index.js");
  reactHotLoader.register(_default, "default", "/Users/yding/projects/universal-react-redux-template/src/client/components/comments/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/components/header/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/header/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();




function Header(_ref) {
    var login = _ref.login,
        signup = _ref.signup;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'nav',
        { className: 'navbar is-light is-fixed-top' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'container' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'navbar-brand' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { className: 'navbar-item', to: '/' },
                    'Home'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'navbar-burger burger' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', null)
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'navbar-menu' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'navbar-start' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { className: 'navbar-item', to: '/main' },
                        'Forum'
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'navbar-end' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'navbar-item' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            { className: 'field is-grouped' },
                            signup && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'p',
                                { className: 'control' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    { className: 'button is-small', to: '/signup' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'span',
                                        { className: 'icon' },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-user-plus' })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'span',
                                        null,
                                        'Sign up'
                                    )
                                )
                            ),
                            login && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'p',
                                { className: 'control' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    { className: 'button is-small is-info is-outlined', to: '/login' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'span',
                                        { className: 'icon' },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-user' })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'span',
                                        null,
                                        'Log in'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}

var _default = Header;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Header, 'Header', '/Users/yding/projects/universal-react-redux-template/src/client/components/header/index.js');
    reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/components/header/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/components/modal/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/modal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this));

    _this.handleTitle = function (e) {
      _this.setState({
        title: e.target.value
      });
    };

    _this.handleBody = function (e) {
      _this.setState({
        body: e.target.value
      });
    };

    _this.handleTags = function (e) {
      _this.setState({
        tags: e.target.value
      });
    };

    _this.hanldeSave = function () {
      _this.props.onSave(_this.state);
    };

    _this.state = {
      title: '',
      body: '',
      tags: ''
    };
    return _this;
  }

  _createClass(Dialog, [{
    key: 'render',
    value: function render() {
      var onClose = this.props.onClose;
      var _state = this.state,
          title = _state.title,
          body = _state.body,
          tags = _state.tags;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'modal is-active' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'modal-background' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'modal-card' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'header',
            { className: 'modal-card-head' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'modal-card-title' },
              'Create a post'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', { className: 'delete', 'aria-label': 'close', onClick: onClose })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'section',
            { className: 'modal-card-body' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'field' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'label',
                { className: 'label' },
                'Title'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'control' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'input', type: 'text', onChange: this.handleTitle, value: title })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'field' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'label',
                { className: 'label' },
                'Body'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'control' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('textarea', { className: 'textarea', onChange: this.handleBody, value: body })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'field' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'label',
                { className: 'label' },
                'Tags'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'control' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'input', onChange: this.handleTags, value: tags, type: 'text' })
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'footer',
            { className: 'modal-card-foot' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'button',
              { className: 'button is-success', onClick: this.hanldeSave },
              'Save changes'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'button',
              { className: 'button', type: 'button', onClick: onClose },
              'Cancel'
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Modal = function (_Component2) {
  _inherits(Modal, _Component2);

  function Modal() {
    _classCallCheck(this, Modal);

    var _this2 = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this2.modalRoot = document.getElementById('modal-root');
    _this2.container = document.createElement('div');
    return _this2;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.modalRoot.appendChild(this.container);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.modalRoot.removeChild(this.container);
    }
  }, {
    key: 'render',
    value: function render() {
      return Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dialog, this.props), this.container);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Modal.propTypes = {
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var _default = Modal;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dialog, 'Dialog', '/Users/yding/projects/universal-react-redux-template/src/client/components/modal/index.js');
  reactHotLoader.register(Modal, 'Modal', '/Users/yding/projects/universal-react-redux-template/src/client/components/modal/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/components/modal/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/components/nav/index.js":
/*!********************************************!*\
  !*** ./src/client/components/nav/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/client/components/nav/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();




var Nav = function Nav(_ref) {
    var handleLogout = _ref.handleLogout,
        username = _ref.username;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'nav',
        { className: 'navbar is-light src-client-components-nav-___style__nav___l-C43' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'container' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'navbar-menu' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'navbar-start' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        { className: 'navbar-item is-active', href: '#' },
                        'Popular'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        { className: 'navbar-item', href: '#' },
                        'Recent'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        { className: 'navbar-item', href: '#' },
                        'Rising'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'navbar-item' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'input', type: 'text', placeholder: 'Search forum...' })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'navbar-end' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'navbar-item' },
                        username
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'navbar-item' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'button',
                            { className: 'button is-small', type: 'button', onClick: handleLogout },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'span',
                                { className: 'icon' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-user-plus' })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'span',
                                null,
                                'Log out'
                            )
                        )
                    )
                )
            )
        )
    );
};

var _default = Nav;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Nav, 'Nav', '/Users/yding/projects/universal-react-redux-template/src/client/components/nav/index.js');
    reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/components/nav/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/components/nav/style.css":
/*!*********************************************!*\
  !*** ./src/client/components/nav/style.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?modules!./style.css */ "./node_modules/css-loader/index.js?modules!./src/client/components/nav/style.css");
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(/*! ../../../../node_modules/node-style-loader/collect.js */ "./node_modules/node-style-loader/collect.js").add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),

/***/ "./src/client/components/post-entry/index.js":
/*!***************************************************!*\
  !*** ./src/client/components/post-entry/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/client/components/post-entry/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();




var PostEntry = function PostEntry(_ref) {
    var title = _ref.title,
        author = _ref.author,
        body = _ref.body,
        comments = _ref.comments;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'article',
        { className: 'post src-client-components-post-entry-___style__post___cySxZ' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h4',
            null,
            title
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'media' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'media-left' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    { className: 'content' },
                    author
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'media-content' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'content' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'span',
                            { className: 'tag' },
                            'Question'
                        )
                    )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'media-right' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'span',
                    { className: 'has-text-grey-light' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-comments' }),
                    ' 0'
                )
            )
        )
    );
};

var _default = PostEntry;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(PostEntry, 'PostEntry', '/Users/yding/projects/universal-react-redux-template/src/client/components/post-entry/index.js');
    reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/components/post-entry/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/components/post-entry/style.css":
/*!****************************************************!*\
  !*** ./src/client/components/post-entry/style.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?modules!./style.css */ "./node_modules/css-loader/index.js?modules!./src/client/components/post-entry/style.css");
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(/*! ../../../../node_modules/node-style-loader/collect.js */ "./node_modules/node-style-loader/collect.js").add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),

/***/ "./src/client/components/tags/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/tags/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/client/components/tags/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();




var Tags = function Tags() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'aside',
    { className: 'menu src-client-components-tags-___style__tag-container___pr5zv' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'p',
      { className: 'menu-label src-client-components-tags-___style__tag-title___2ciMG' },
      'Tags'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'ul',
      { className: 'menu-list' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { className: 'src-client-components-tags-___style__tag___3jtAo' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: 'tag is-primary is-medium' },
          'Dashboard'
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { className: 'src-client-components-tags-___style__tag___3jtAo' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: 'tag is-link is-medium ' },
          'Customers'
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { className: 'src-client-components-tags-___style__tag___3jtAo' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: 'tag is-light is-danger is-medium ' },
          'Authentication'
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { className: 'src-client-components-tags-___style__tag___3jtAo' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: 'tag is-dark is-medium ' },
          'Payments'
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { className: 'src-client-components-tags-___style__tag___3jtAo' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: 'tag is-success is-medium ' },
          'Transfers'
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { className: 'src-client-components-tags-___style__tag___3jtAo' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: 'tag is-warning is-medium ' },
          'Balance'
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { className: 'src-client-components-tags-___style__tag___3jtAo' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: 'tag is-medium ' },
          'Question'
        )
      )
    )
  );
};

var _default = Tags;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tags, 'Tags', '/Users/yding/projects/universal-react-redux-template/src/client/components/tags/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/components/tags/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/components/tags/style.css":
/*!**********************************************!*\
  !*** ./src/client/components/tags/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?modules!./style.css */ "./node_modules/css-loader/index.js?modules!./src/client/components/tags/style.css");
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(/*! ../../../../node_modules/node-style-loader/collect.js */ "./node_modules/node-style-loader/collect.js").add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),

/***/ "./src/client/containers/auth/index.js":
/*!*********************************************!*\
  !*** ./src/client/containers/auth/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions */ "./src/client/actions/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator/lib/isEmail */ "validator/lib/isEmail");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/header */ "./src/client/components/header/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/client/containers/auth/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Auth = function (_Component) {
  _inherits(Auth, _Component);

  function Auth() {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this));

    _this.handleEmail = function (e) {
      var value = e.target.value.trim();
      if (!value) {
        _this.setState({ emailError: 'Email is required' });
      } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_5___default()(value)) {
        _this.setState({ emailError: value + ' is not a valid email' });
      } else {
        _this.setState({
          emailError: null,
          email: value
        });
      }
    };

    _this.handlePassword = function (e) {
      var value = e.target.value.trim();
      if (value.length < 4 && value.length > 60) {
        _this.setState({ passwordError: 'Your password must contain between 4 and 60 characters' });
      } else {
        _this.setState({
          passwordError: null,
          password: value
        });
      }
    };

    _this.handlePasswordMatch = function (e) {
      var value = e.target.value.trim();
      if (_this.state.password !== value) {
        _this.setState({ passwordMatchError: 'Your passwords do not match' });
      } else {
        _this.setState({
          passwordMatchError: null,
          passwordMatch: value
        });
      }
    };

    _this.handleAuth = function (signup) {
      var _this$state = _this.state,
          emailError = _this$state.emailError,
          passwordError = _this$state.passwordError,
          passwordMathError = _this$state.passwordMathError,
          email = _this$state.email,
          password = _this$state.password;

      if (emailError || passwordError || passwordError) {
        _this.setState({
          errorMessage: 'Please make sure all fields are valid'
        });
      } else if (!email || !password) {
        _this.setState({
          errorMessage: 'You must fill up both email and password'
        });
      } else {
        _this.setState({
          errorMessage: ''
        });
        var creds = { email: _this.state.email, password: _this.state.password };
        if (signup) {
          _this.props.handleSignup(creds);
        } else {
          _this.props.handleLogin(creds);
        }
      }
    };

    _this.cleanupError = function () {
      _this.setState({
        errorMessage: '',
        emailError: '',
        passwordError: '',
        passwordMatchError: ''
      });
    };

    _this.state = {
      valid: false,
      errorMessage: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      passwordMatch: '',
      passwordMatchError: ''
    };
    return _this;
  }

  _createClass(Auth, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          emailError = _state.emailError,
          passwordError = _state.passwordError,
          passwordMatchError = _state.passwordMatchError;
      var location = this.props.location;

      var errorMessage = this.state.errorMessage || this.props.errorMessage;
      var signup = location.pathname === '/signup';

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'src-client-containers-auth-___style__container___nvRhy' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'section',
          { className: 'src-client-containers-auth-___style__auth___2Vnkt' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'form',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h1',
              { className: 'title is-2 src-client-containers-auth-___style__heading___-HL5v' },
              signup ? 'Sign Up' : 'Log In'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'label',
              { className: 'control src-client-containers-auth-___style__group___23zKP' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                null,
                'Email'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text', className: 'input is-info src-client-containers-auth-___style__input___2FoQu', onChange: this.handleEmail }),
              emailError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                { className: 'src-client-containers-auth-___style__error___SgzHX' },
                emailError
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'label',
              { className: 'src-client-containers-auth-___style__group___23zKP' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                null,
                'Password'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'password', className: 'input is-success src-client-containers-auth-___style__input___2FoQu', onBlur: this.handlePassword }),
              passwordError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                { className: 'src-client-containers-auth-___style__error___SgzHX' },
                passwordError
              )
            ),
            signup && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'label',
              { className: 'src-client-containers-auth-___style__group___23zKP' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                null,
                'Confirm Password'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'password', className: 'input is-warning src-client-containers-auth-___style__input___2FoQu', onBlur: this.handlePasswordMatch }),
              passwordMatchError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                { className: 'src-client-containers-auth-___style__error___SgzHX' },
                passwordMatchError
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'label',
              { className: 'src-client-containers-auth-___style__group___23zKP' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                { type: 'button', className: 'button is-middle is-primary is-fullwidth', onClick: this.handleAuth.bind(this, signup) },
                signup ? 'Sign Up' : 'Log In'
              ),
              errorMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                { className: 'src-client-containers-auth-___style__error___SgzHX' },
                errorMessage
              )
            )
          ),
          signup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'src-client-containers-auth-___style__link___QusAY' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
              { to: '/login', onClick: this.cleanupError, className: 'button is-middle is-link  is-fullwidth is-rounded' },
              'Already have an account? Log in.'
            )
          ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'src-client-containers-auth-___style__link___QusAY' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              { href: '/auth/facebook', className: 'button is-middle is-success is-fullwidth is-rounded' },
              'Log in via Facebook'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
              { to: '/signup', onClick: this.cleanupError, className: 'button is-middle is-link  is-fullwidth is-rounded src-client-containers-auth-___style__link___QusAY' },
              'Do not have an account? Sign up now.'
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Auth;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Auth.propTypes = {
  handleSignup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleLogin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSignup: function handleSignup(creds) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["signupUser"])(creds));
    },
    handleLogin: function handleLogin(creds) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["loginUser"])(creds));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Auth);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Auth, 'Auth', '/Users/yding/projects/universal-react-redux-template/src/client/containers/auth/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/yding/projects/universal-react-redux-template/src/client/containers/auth/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/yding/projects/universal-react-redux-template/src/client/containers/auth/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/containers/auth/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/containers/auth/style.css":
/*!**********************************************!*\
  !*** ./src/client/containers/auth/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?modules!./style.css */ "./node_modules/css-loader/index.js?modules!./src/client/containers/auth/style.css");
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(/*! ../../../../node_modules/node-style-loader/collect.js */ "./node_modules/node-style-loader/collect.js").add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),

/***/ "./src/client/containers/forum/index.js":
/*!**********************************************!*\
  !*** ./src/client/containers/forum/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/history */ "./src/client/history.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/actions */ "./src/client/actions/index.js");
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/tags */ "./src/client/components/tags/index.js");
/* harmony import */ var _components_post_entry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/post-entry */ "./src/client/components/post-entry/index.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/nav */ "./src/client/components/nav/index.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/modal */ "./src/client/components/modal/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./src/client/containers/forum/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var Forum = function (_Component) {
  _inherits(Forum, _Component);

  function Forum() {
    _classCallCheck(this, Forum);

    var _this = _possibleConstructorReturn(this, (Forum.__proto__ || Object.getPrototypeOf(Forum)).call(this));

    _this.openModal = function () {
      _this.setState({
        open: true
      });
    };

    _this.closeModal = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleSave = function (postContent) {
      var post = Object.assign({}, postContent, { author: _this.props.username });
      _this.props.handleCreatePost(post);
      _this.closeModal();
      _this.props.getAllPost();
    };

    _this.setPost = function (post) {
      _this.props.postSetCurrent(post);
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Forum, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getAllPost();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var _props = this.props,
          handleLogout = _props.handleLogout,
          username = _props.username,
          posts = _props.posts;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_8__["default"], { handleLogout: handleLogout, username: username }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'section',
          { className: 'container src-client-containers-forum-___style__container___11_j2' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'columns' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'column is-3' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                { className: 'button is-primary', type: 'button', onClick: this.openModal },
                'New Post'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tags__WEBPACK_IMPORTED_MODULE_6__["default"], null)
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'column is-9' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'box content' },
                posts.map(function (post) {
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
                    { to: '/viewpost/' + post._id, key: post._id, onClick: _this2.setPost.bind(_this2, post) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_post_entry__WEBPACK_IMPORTED_MODULE_7__["default"], { title: post.title, body: post.body, author: post.author })
                  );
                })
              )
            )
          )
        ),
        open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_modal__WEBPACK_IMPORTED_MODULE_9__["default"], { onClose: this.closeModal, onSave: this.handleSave })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Forum;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Forum.propTypes = {
  handleCreatePost: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  handleLogout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  username: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  posts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLogout: function handleLogout() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["logoutUser"])());
    },
    handleCreatePost: function handleCreatePost(post) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["postCreate"])(post));
    },
    getAllPost: function getAllPost() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["postGetAll"])());
    },
    postSetCurrent: function postSetCurrent(post) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["postSetCurrent"])(post));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.auth.name,
    posts: state.posts.posts
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Forum);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Forum, 'Forum', '/Users/yding/projects/universal-react-redux-template/src/client/containers/forum/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/yding/projects/universal-react-redux-template/src/client/containers/forum/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/yding/projects/universal-react-redux-template/src/client/containers/forum/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/containers/forum/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/containers/forum/style.css":
/*!***********************************************!*\
  !*** ./src/client/containers/forum/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?modules!./style.css */ "./node_modules/css-loader/index.js?modules!./src/client/containers/forum/style.css");
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(/*! ../../../../node_modules/node-style-loader/collect.js */ "./node_modules/node-style-loader/collect.js").add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),

/***/ "./src/client/containers/post/index.js":
/*!*********************************************!*\
  !*** ./src/client/containers/post/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/comments */ "./src/client/components/comments/index.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/nav */ "./src/client/components/nav/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/client/containers/post/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Article = function Article(_ref) {
  var title = _ref.title,
      author = _ref.author,
      body = _ref.body;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'card article src-client-containers-post-___style__article___1aro4' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: 'card-content' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'media' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'media-content has-text-centered' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            { className: 'title article-title' },
            title
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            { className: 'subtitle is-6 article-subtitle' },
            author
          )
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'content article-body' },
        body
      )
    )
  );
};

var Post = function (_Component) {
  _inherits(Post, _Component);

  function Post() {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
  }

  _createClass(Post, [{
    key: 'render',
    value: function render() {
      var post = this.props.post;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'container src-client-containers-post-___style__container___39qgo' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Article, { title: post.title, author: post.author, body: post.body }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_comments__WEBPACK_IMPORTED_MODULE_2__["default"], null)
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Post);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Article, 'Article', '/Users/yding/projects/universal-react-redux-template/src/client/containers/post/index.js');
  reactHotLoader.register(Post, 'Post', '/Users/yding/projects/universal-react-redux-template/src/client/containers/post/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/yding/projects/universal-react-redux-template/src/client/containers/post/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/containers/post/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/containers/post/style.css":
/*!**********************************************!*\
  !*** ./src/client/containers/post/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?modules!./style.css */ "./node_modules/css-loader/index.js?modules!./src/client/containers/post/style.css");
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(/*! ../../../../node_modules/node-style-loader/collect.js */ "./node_modules/node-style-loader/collect.js").add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),

/***/ "./src/client/containers/protected/index.js":
/*!**************************************************!*\
  !*** ./src/client/containers/protected/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Protected = function (_Component) {
  _inherits(Protected, _Component);

  function Protected() {
    _classCallCheck(this, Protected);

    return _possibleConstructorReturn(this, (Protected.__proto__ || Object.getPrototypeOf(Protected)).apply(this, arguments));
  }

  _createClass(Protected, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.component,
          isAuthenticated = _props.isAuthenticated,
          rest = _objectWithoutProperties(_props, ['component', 'isAuthenticated']);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _extends({}, rest, {
        render: function render(props) {
          return isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
            to: {
              pathname: "/login",
              state: { from: props.location }
            }
          });
        }
      }));
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Protected;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Protected);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Protected, 'Protected', '/Users/yding/projects/universal-react-redux-template/src/client/containers/protected/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/yding/projects/universal-react-redux-template/src/client/containers/protected/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/containers/protected/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/containers/welcome/index.js":
/*!************************************************!*\
  !*** ./src/client/containers/welcome/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions */ "./src/client/actions/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/header */ "./src/client/components/header/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/client/containers/welcome/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Welcome = function (_Component) {
  _inherits(Welcome, _Component);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  _createClass(Welcome, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.localStorage.getItem('token')) {
        var token = window.localStorage.getItem('token');
        this.props.handleLogin(token);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var isFetching = this.props.isFetching;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'section',
        { className: 'hero is-fullheight src-client-containers-welcome-___style__my-hero___qJiq5' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], { signup: true }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'hero-body' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'container has-text-centered' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'column is-6 is-offset-3' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h1',
                { className: 'title' },
                'Universal React App'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h2',
                { className: 'subtitle src-client-containers-welcome-___style__subtitle___2uxT0' },
                'With Authentication and Server-side Rendering'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                  { to: '/login', className: 'button is-primary is-large' },
                  'Log In'
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Welcome;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLogin: function handleLogin(token) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["reloginUser"])(token));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Welcome);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Welcome, 'Welcome', '/Users/yding/projects/universal-react-redux-template/src/client/containers/welcome/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/yding/projects/universal-react-redux-template/src/client/containers/welcome/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/yding/projects/universal-react-redux-template/src/client/containers/welcome/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/containers/welcome/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/containers/welcome/style.css":
/*!*************************************************!*\
  !*** ./src/client/containers/welcome/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?modules!./style.css */ "./node_modules/css-loader/index.js?modules!./src/client/containers/welcome/style.css");
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(/*! ../../../../node_modules/node-style-loader/collect.js */ "./node_modules/node-style-loader/collect.js").add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),

/***/ "./src/client/history.js":
/*!*******************************!*\
  !*** ./src/client/history.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


var history = void 0;
if (typeof window !== 'undefined') {
  history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();
} else {
  history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createMemoryHistory"])();
}
var _default = history;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(history, 'history', '/Users/yding/projects/universal-react-redux-template/src/client/history.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/history.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/reducers/auth.js":
/*!*************************************!*\
  !*** ./src/client/reducers/auth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/client/utilities/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();




var auth = function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    isAuthenticated: !!_utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('token'),
    name: _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('name') ? _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('name') : '',
    id: _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('id') ? _utilities__WEBPACK_IMPORTED_MODULE_1__["localStorage"].getItem('id') : '',
    errorMessage: ''
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FB_LOGIN_SUCCESS"]:
    case _actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_SUCCESS"]:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        name: action.user.name,
        id: action.user.id
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILURE"]:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        name: '',
        id: '',
        email: ''
      });
    default:
      return state;
  }
};

var _default = auth;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(auth, 'auth', '/Users/yding/projects/universal-react-redux-template/src/client/reducers/auth.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/reducers/auth.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/client/reducers/auth.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts */ "./src/client/reducers/posts.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();





var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  posts: _posts__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var _default = reducer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(reducer, 'reducer', '/Users/yding/projects/universal-react-redux-template/src/client/reducers/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/reducers/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/reducers/posts.js":
/*!**************************************!*\
  !*** ./src/client/reducers/posts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/client/utilities/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();




var posts = function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    posts: [],
    post: null
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["POST_CREATE_REQUEST"]:
      return Object.assign({}, state, action.post);
    case _actions__WEBPACK_IMPORTED_MODULE_0__["POST_GET_ALL_SUCCESS"]:
      return Object.assign({}, state, {
        posts: action.posts
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__["POST_SET_CURRENT"]:
      return Object.assign({}, state, {
        post: action.post
      });
    default:
      return state;
  }
};

var _default = posts;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(posts, 'posts', '/Users/yding/projects/universal-react-redux-template/src/client/reducers/posts.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/reducers/posts.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/store.js":
/*!*****************************!*\
  !*** ./src/client/store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/client/reducers/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();






var preloadedState = {};
if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}

var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a));

if (false) {}

var _default = store;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(preloadedState, 'preloadedState', '/Users/yding/projects/universal-react-redux-template/src/client/store.js');
  reactHotLoader.register(store, 'store', '/Users/yding/projects/universal-react-redux-template/src/client/store.js');
  reactHotLoader.register(_default, 'default', '/Users/yding/projects/universal-react-redux-template/src/client/store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/utilities/index.js":
/*!***************************************!*\
  !*** ./src/client/utilities/index.js ***!
  \***************************************/
/*! exports provided: getParameterByName, localStorage, resetId, generateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorage", function() { return localStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetId", function() { return resetId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return generateId; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[[]]/g, '\\$&');

  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var localStorage = void 0;
if (typeof window === 'undefined' || window === null) {
  localStorage = {
    getItem: function getItem() {},
    setItem: function setItem() {}
  };
} else {
  localStorage = window.localStorage;
}

var count = 0;

function resetId() {
  count = 0;
}

function generateId() {
  return 'element-id-' + count;
}


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getParameterByName, 'getParameterByName', '/Users/yding/projects/universal-react-redux-template/src/client/utilities/index.js');
  reactHotLoader.register(localStorage, 'localStorage', '/Users/yding/projects/universal-react-redux-template/src/client/utilities/index.js');
  reactHotLoader.register(count, 'count', '/Users/yding/projects/universal-react-redux-template/src/client/utilities/index.js');
  reactHotLoader.register(resetId, 'resetId', '/Users/yding/projects/universal-react-redux-template/src/client/utilities/index.js');
  reactHotLoader.register(generateId, 'generateId', '/Users/yding/projects/universal-react-redux-template/src/client/utilities/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/server/config/index.js":
/*!************************************!*\
  !*** ./src/server/config/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  SECRET: 'peach is delicious',
  DB_URL: 'mongodb://admin:admin@ds135689.mlab.com:35689/authentication'
};

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var express = __webpack_require__(/*! express */ "express");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var passport = __webpack_require__(/*! passport */ "passport");
var dbConnect = __webpack_require__(/*! ./models */ "./src/server/models/index.js");

var postRouter = __webpack_require__(/*! ./routes/post */ "./src/server/routes/post.js");
var authRouter = __webpack_require__(/*! ./routes/auth */ "./src/server/routes/auth.js");
var router = __webpack_require__(/*! ./routes/serverRender */ "./src/server/routes/serverRender.js");

var signup = __webpack_require__(/*! ./passports/local-signup */ "./src/server/passports/local-signup.js");
var login = __webpack_require__(/*! ./passports/local-login */ "./src/server/passports/local-login.js");

var DB_URL = __webpack_require__(/*! ./config */ "./src/server/config/index.js").DB_URL;

passport.use('local-signup', signup);
passport.use('local-login', login);

dbConnect(DB_URL);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/post', postRouter);
// this router has to be the last one for get request might be redirected to login
app.use(router);

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DB_URL, 'DB_URL', '/Users/yding/projects/universal-react-redux-template/src/server/index.js');
  reactHotLoader.register(app, 'app', '/Users/yding/projects/universal-react-redux-template/src/server/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/models/index.js":
/*!************************************!*\
  !*** ./src/server/models/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
// plug in ES6 promise
mongoose.Promise = global.Promise;

function dbConnect(url) {
  mongoose.connect(url);

  mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
    //process.exit(1)
  });

  // require('./user')
}

module.exports = dbConnect;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(dbConnect, 'dbConnect', '/Users/yding/projects/universal-react-redux-template/src/server/models/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/models/post.js":
/*!***********************************!*\
  !*** ./src/server/models/post.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  tags: [String]
});

PostSchema.pre('save', function saveHook(next) {
  if (!this.title || !this.author) {
    var error = new Error('not a valid post');
    next(error);
  }

  next();
});

module.exports = mongoose.model('Post', PostSchema);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PostSchema, 'PostSchema', '/Users/yding/projects/universal-react-redux-template/src/server/models/post.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/models/user.js":
/*!***********************************!*\
  !*** ./src/server/models/user.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, cb);
};

UserSchema.pre('save', function saveHook(next) {
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(function (error, salt) {
    if (error) return next(error);

    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) return next(error);
      user.password = hash;
      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserSchema, 'UserSchema', '/Users/yding/projects/universal-react-redux-template/src/server/models/user.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/passports/local-login.js":
/*!*********************************************!*\
  !*** ./src/server/passports/local-login.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Strategy = __webpack_require__(/*! passport-local */ "passport-local").Strategy;
var User = __webpack_require__(/*! ../models/user */ "./src/server/models/user.js");
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
var SECRET = __webpack_require__(/*! ../config */ "./src/server/config/index.js").SECRET;

var login = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, function (req, email, password, done) {
  var userData = {
    email: email.trim(),
    password: password.trim()
  };

  User.findOne({ email: userData.email }, function (err, user) {
    if (err) return done(err);
    if (!user) return done(null, false, { message: 'This email is not registered.' });

    user.comparePassword(userData.password, function (err, isMatch) {
      if (err) return done(err);
      if (!isMatch) return done(null, false, { message: 'incorrect password' });
      var payload = {
        sub: user._id
      };
      var token = jwt.sign(payload, SECRET);
      var data = {
        name: user.name,
        email: user.email,
        id: user._id,
        token: token
      };
      return done(null, data);
    });
  });
});

module.exports = login;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Strategy, 'Strategy', '/Users/yding/projects/universal-react-redux-template/src/server/passports/local-login.js');
  reactHotLoader.register(SECRET, 'SECRET', '/Users/yding/projects/universal-react-redux-template/src/server/passports/local-login.js');
  reactHotLoader.register(login, 'login', '/Users/yding/projects/universal-react-redux-template/src/server/passports/local-login.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/passports/local-signup.js":
/*!**********************************************!*\
  !*** ./src/server/passports/local-signup.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Strategy = __webpack_require__(/*! passport-local */ "passport-local").Strategy;
var User = __webpack_require__(/*! ../models/user */ "./src/server/models/user.js");
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
var SECRET = __webpack_require__(/*! ../config */ "./src/server/config/index.js").SECRET;

var signup = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, function (req, email, password, done) {
  var userData = {
    email: email.trim(),
    password: password.trim(),
    name: 'user' + Date.now().toString().substring(4)
  };

  var newUser = new User(userData);

  User.findOne({ email: userData.email }, function (err, user) {
    if (err) return done(err);
    if (user) return done(null, false, { message: 'This email is already registered.' });

    newUser.save(function (err, savedUser) {
      if (err) return done(err);
      var payload = {
        sub: newUser._id
      };
      var token = jwt.sign(payload, SECRET);
      var data = {
        name: userData.name,
        email: userDate.email,
        id: savedUser._doc._id,
        token: token
      };
      return done(null, data);
    });
  });
});

module.exports = signup;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Strategy, 'Strategy', '/Users/yding/projects/universal-react-redux-template/src/server/passports/local-signup.js');
  reactHotLoader.register(SECRET, 'SECRET', '/Users/yding/projects/universal-react-redux-template/src/server/passports/local-signup.js');
  reactHotLoader.register(signup, 'signup', '/Users/yding/projects/universal-react-redux-template/src/server/passports/local-signup.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/routes/auth.js":
/*!***********************************!*\
  !*** ./src/server/routes/auth.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var router = __webpack_require__(/*! express */ "express").Router();
var passport = __webpack_require__(/*! passport */ "passport");
var SECRET = __webpack_require__(/*! ../config */ "./src/server/config/index.js").SECRET;
var jwt = __webpack_require__(/*! express-jwt */ "express-jwt");

router.post('/signup', function (req, res) {
  passport.authenticate('local-signup', { session: false }, function (err, user, info) {
    if (err) {
      res.status(500).json({
        message: err
      });
    } else if (!user) {
      res.status(400).json(info);
    } else {
      res.json(user);
    }
  })(req, res);
});

router.post('/login', function (req, res) {
  passport.authenticate('local-login', { session: false }, function (err, user, info) {
    if (err) {
      res.status(500).json({
        message: err
      });
    } else if (!user) {
      res.status(400).json(info);
    } else {
      res.json(user);
    }
  })(req, res);
});

router.get('/facebook', passport.authenticate('facebook-login', { scope: ['email'] }));

router.get('/facebook/callback', function (req, res) {
  passport.authenticate('facebook-login', { session: false }, function (err, user, info) {
    if (err) {
      res.redirect('/login');
    } else if (!user) {
      res.status(400).json(info);
    } else {
      res.redirect('/login?id_token=' + user.token + '&username=' + user.name + '&id=' + user.id);
    }
  })(req, res);
});

router.post('/relogin', jwt({ 'secret': SECRET }), function (req, res) {
  res.sendStatus(200);
});

module.exports = router;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, 'router', '/Users/yding/projects/universal-react-redux-template/src/server/routes/auth.js');
  reactHotLoader.register(SECRET, 'SECRET', '/Users/yding/projects/universal-react-redux-template/src/server/routes/auth.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/routes/post.js":
/*!***********************************!*\
  !*** ./src/server/routes/post.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var router = __webpack_require__(/*! express */ "express").Router();
var Post = __webpack_require__(/*! ../models/post */ "./src/server/models/post.js");

router.get('*', function (req, res, next) {
  console.log(req);
  next();
});

router.post('/create', function (req, res) {
  var post = new Post(req.body);
  post.save(function (err) {
    if (err) res.sendStatus(500);else res.sendStatus(200);
  });
});

router.get('/all', function (req, res) {
  Post.find({}, function (err, posts) {
    res.json(posts);
  });
});

module.exports = router;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, 'router', '/Users/yding/projects/universal-react-redux-template/src/server/routes/post.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/routes/serverRender.js":
/*!*******************************************!*\
  !*** ./src/server/routes/serverRender.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var renderToString = __webpack_require__(/*! react-dom/server */ "react-dom/server").renderToString;
var React = __webpack_require__(/*! react */ "react");
var StaticRouter = __webpack_require__(/*! react-router */ "react-router").StaticRouter;
var Provider = __webpack_require__(/*! react-redux */ "react-redux").Provider;
var createStore = __webpack_require__(/*! redux */ "redux").createStore;
var reducer = __webpack_require__(/*! client/reducers */ "./src/client/reducers/index.js").default;
var router = __webpack_require__(/*! express */ "express").Router();
var App = __webpack_require__(/*! client/App */ "./src/client/App.js").App;

router.get('*', function (req, res) {
  var store = createStore(reducer);
  var context = {};

  var html = renderToString(React.createElement(
    Provider,
    { store: store },
    React.createElement(
      StaticRouter,
      { location: req.url, context: context },
      React.createElement(App, null)
    )
  ));
  var preloadedState = store.getState();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.send(renderFullPage(html, preloadedState));
  }
});

function renderFullPage(html, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n          <title>Universal React</title>\n          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />\n          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">\n          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css" />  \n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <div id="modal-root"></div>\n        <script>\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="http://localhost:8080/bundle.js"></script>\n      </body>\n    </html>\n    ';
}

module.exports = router;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderToString, 'renderToString', '/Users/yding/projects/universal-react-redux-template/src/server/routes/serverRender.js');
  reactHotLoader.register(StaticRouter, 'StaticRouter', '/Users/yding/projects/universal-react-redux-template/src/server/routes/serverRender.js');
  reactHotLoader.register(Provider, 'Provider', '/Users/yding/projects/universal-react-redux-template/src/server/routes/serverRender.js');
  reactHotLoader.register(createStore, 'createStore', '/Users/yding/projects/universal-react-redux-template/src/server/routes/serverRender.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/yding/projects/universal-react-redux-template/src/server/routes/serverRender.js');
  reactHotLoader.register(router, 'router', '/Users/yding/projects/universal-react-redux-template/src/server/routes/serverRender.js');
  reactHotLoader.register(App, 'App', '/Users/yding/projects/universal-react-redux-template/src/server/routes/serverRender.js');
  reactHotLoader.register(renderFullPage, 'renderFullPage', '/Users/yding/projects/universal-react-redux-template/src/server/routes/serverRender.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/server/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/index.js */"./src/server/index.js");


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "validator/lib/isEmail":
/*!****************************************!*\
  !*** external "validator/lib/isEmail" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ "whatwg-fetch":
/*!*******************************!*\
  !*** external "whatwg-fetch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map