/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOGIN_FAILURE; });
/* unused harmony export LOGOUT_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOGOUT_SUCCESS; });
/* unused harmony export LOGOUT_FAILURE */
/* unused harmony export SIGNUP_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SIGNUP_SUCCESS; });
/* unused harmony export SIGNUP_FAILURE */
/* unused harmony export FB_LOGIN_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FB_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return signupUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FBLoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reloginUser; });




var LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = 'LOGIN_FAILURE';
var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = 'LOGOUT_FAILURE';
var SIGNUP_REQUEST = 'SIGNUP_REQUEST';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILURE = 'SIGNUP_FAILURE';
var FB_LOGIN_REQUEST = 'FB_LOGIN_REQUEST';
var FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS';

var LOGIN_URL = '/auth/login';
var SIGNUP_URL = '/auth/signup';

function authUser(creds, url) {
  var config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'email=' + creds.email + '&password=' + creds.password
  };

  return function (dispatch) {
    dispatch(requestLogin(creds));
    return window.fetch(url, config).then(function (response) {
      return response.json().then(function (user) {
        return { user: user, response: response };
      });
    }).then(function (_ref) {
      var user = _ref.user,
          response = _ref.response;

      if (!response.ok) {
        dispatch(loginError(user.message));
        return Promise.reject(user);
      } else {
        __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].setItem('token', user.token);
        __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].setItem('name', user.username);
        __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].setItem('id', user.id);
        dispatch(receiveLogin(user));
        __WEBPACK_IMPORTED_MODULE_0_react_router__["browserHistory"].push('/dashboard');
      }
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

var requestLogin = function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds: creds
  };
};

var receiveLogin = function receiveLogin(userData) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    userData: userData
  };
};

var loginError = function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message: message
  };
};

var loginUser = function loginUser(creds) {
  return authUser(creds, LOGIN_URL);
};

var requestLogout = function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
};

var receiveLogout = function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
};

var logoutUser = function logoutUser() {
  return function (dispatch) {
    dispatch(requestLogout());
    __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].removeItem('token');
    __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].removeItem('name');
    __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].removeItem('id');
    dispatch(receiveLogout());
    __WEBPACK_IMPORTED_MODULE_0_react_router__["browserHistory"].push('/');
  };
};

var signupUser = function signupUser(creds) {
  return authUser(creds, SIGNUP_URL);
};

var requestFBLogin = function requestFBLogin() {
  return {
    type: FB_LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds: ''
  };
};

var receiveFBLogin = function receiveFBLogin(user) {
  return {
    type: FB_LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
    username: user.username,
    userId: user.id
  };
};

var FBLoginUser = function FBLoginUser(user) {
  return function (dispatch) {
    dispatch(requestFBLogin());
    __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].setItem('id_token', user.id_token);
    __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].setItem('username', user.username);
    __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].setItem('userId', user.id);
    dispatch(receiveFBLogin(user));
    __WEBPACK_IMPORTED_MODULE_0_react_router__["browserHistory"].push('/browse');
  };
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
        __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].clear();
      } else {
        var user = {
          token: __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].getItem('token'),
          username: __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].getItem('name'),
          id: __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].getItem('id')
        };
        dispatch(receiveLogin(user));
        __WEBPACK_IMPORTED_MODULE_0_react_router__["browserHistory"].push('/dashboard');
      }
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOGIN_REQUEST, 'LOGIN_REQUEST', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(LOGIN_SUCCESS, 'LOGIN_SUCCESS', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(LOGIN_FAILURE, 'LOGIN_FAILURE', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(LOGOUT_REQUEST, 'LOGOUT_REQUEST', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(LOGOUT_SUCCESS, 'LOGOUT_SUCCESS', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(LOGOUT_FAILURE, 'LOGOUT_FAILURE', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(SIGNUP_REQUEST, 'SIGNUP_REQUEST', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(SIGNUP_SUCCESS, 'SIGNUP_SUCCESS', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(SIGNUP_FAILURE, 'SIGNUP_FAILURE', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(FB_LOGIN_REQUEST, 'FB_LOGIN_REQUEST', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(FB_LOGIN_SUCCESS, 'FB_LOGIN_SUCCESS', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(LOGIN_URL, 'LOGIN_URL', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(SIGNUP_URL, 'SIGNUP_URL', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(authUser, 'authUser', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(requestLogin, 'requestLogin', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(receiveLogin, 'receiveLogin', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(loginError, 'loginError', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(loginUser, 'loginUser', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(requestLogout, 'requestLogout', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(receiveLogout, 'receiveLogout', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(logoutUser, 'logoutUser', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(signupUser, 'signupUser', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(requestFBLogin, 'requestFBLogin', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(receiveFBLogin, 'receiveFBLogin', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(FBLoginUser, 'FBLoginUser', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');

  __REACT_HOT_LOADER__.register(reloginUser, 'reloginUser', '/Users/yding/projects/authentication-demo-app/src/client/actions/index.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  SECRET: 'peach is delicious',
  DB_URL: 'mongodb://admin:admin@ds135689.mlab.com:35689/authentication'
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var styleStack = __webpack_require__(40);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localStorage; });
/* unused harmony export resetId */
/* unused harmony export generateId */
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

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getParameterByName, 'getParameterByName', '/Users/yding/projects/authentication-demo-app/src/client/utilities/index.js');

  __REACT_HOT_LOADER__.register(localStorage, 'localStorage', '/Users/yding/projects/authentication-demo-app/src/client/utilities/index.js');

  __REACT_HOT_LOADER__.register(count, 'count', '/Users/yding/projects/authentication-demo-app/src/client/utilities/index.js');

  __REACT_HOT_LOADER__.register(resetId, 'resetId', '/Users/yding/projects/authentication-demo-app/src/client/utilities/index.js');

  __REACT_HOT_LOADER__.register(generateId, 'generateId', '/Users/yding/projects/authentication-demo-app/src/client/utilities/index.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(13);
var bcrypt = __webpack_require__(44);

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

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserSchema, 'UserSchema', '/Users/yding/projects/authentication-demo-app/src/server/models/user.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(39);
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(7).add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(9);
var path = __webpack_require__(48);
var bodyParser = __webpack_require__(45);
var morgan = __webpack_require__(47);
var passport = __webpack_require__(14);
var dbConnect = __webpack_require__(31);
var authRouter = __webpack_require__(34);
var defaultRouter = __webpack_require__(35);
var signup = __webpack_require__(33);
var login = __webpack_require__(32);

var DB_URL = __webpack_require__(5).DB_URL;

passport.use('local-signup', signup);
passport.use('local-login', login);

dbConnect(DB_URL);

var app = express();
// app.use(express.static(path.join('./', 'www')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(passport.initialize());

app.use(defaultRouter);
app.use('/auth', authRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DB_URL, 'DB_URL', '/Users/yding/projects/authentication-demo-app/src/server/index.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/yding/projects/authentication-demo-app/src/server/index.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_AuthedHeader__ = __webpack_require__(21);



function AuthedApp(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_header_AuthedHeader__["a" /* default */], null),
    children
  );
}

var _default = AuthedApp;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthedApp, 'AuthedApp', '/Users/yding/projects/authentication-demo-app/src/client/apps/authedApp.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/apps/authedApp.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_UnauthedHeader__ = __webpack_require__(22);



function UnauthedApp(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_header_UnauthedHeader__["a" /* default */], null),
    children
  );
}

var _default = UnauthedApp;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UnauthedApp, 'UnauthedApp', '/Users/yding/projects/authentication-demo-app/src/client/apps/unauthedApp.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/apps/unauthedApp.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var AuthedHeader = function (_Component) {
  _inherits(AuthedHeader, _Component);

  function AuthedHeader() {
    _classCallCheck(this, AuthedHeader);

    return _possibleConstructorReturn(this, (AuthedHeader.__proto__ || Object.getPrototypeOf(AuthedHeader)).apply(this, arguments));
  }

  _createClass(AuthedHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSignout = _props.handleSignout,
          name = _props.name,
          email = _props.email;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"],
        { inverse: true },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Header,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Brand,
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_router__["Link"],
              { to: '/' },
              'React App'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Toggle, null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Collapse,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"],
            { pullRight: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavDropdown"],
              { eventKey: '1', title: 'my account', id: 'menu-dropdown' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"],
                { className: __WEBPACK_IMPORTED_MODULE_5__style_css___default.a.dropdown },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Row"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"],
                    { sm: 4 },
                    'image'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"],
                    { sm: 8 },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      null,
                      name
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      null,
                      email
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"],
                { eventKey: '1.1' },
                'Settings',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Glyphicon"], { glyph: 'cog', className: 'pull-right' })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"],
                { eventKey: '1.2' },
                'Statistics',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Glyphicon"], { glyph: 'stats', className: 'pull-right' })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"],
                { eventKey: '1.3' },
                'Message',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Badge"],
                  { pullRight: true },
                  '42'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"],
                { eventKey: '1.4' },
                'Favourites',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Glyphicon"], { glyph: 'heart', className: 'pull-right' })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"], { divider: true }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"],
                { eventKey: '1.5', onClick: handleSignout },
                'Sign Out',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Glyphicon"], { glyph: 'log-out', className: 'pull-right' })
              )
            )
          )
        )
      );
    }
  }]);

  return AuthedHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSignout: function handleSignout() {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* logoutUser */])());
    }
  };
};

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(null, mapDispatchToProps)(AuthedHeader);

/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthedHeader, 'AuthedHeader', '/Users/yding/projects/authentication-demo-app/src/client/components/header/AuthedHeader.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/yding/projects/authentication-demo-app/src/client/components/header/AuthedHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/components/header/AuthedHeader.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);





function UnauthedHeader() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"],
    { inverse: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Header,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Brand,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
          { to: '/' },
          'React App'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Toggle, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Collapse,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"],
        { pullRight: true },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__["LinkContainer"],
          { to: '/login' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
            { eventKey: 1 },
            'Log In'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__["LinkContainer"],
          { to: '/signup' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
            { eventKey: 2 },
            'Sign Up'
          )
        )
      )
    )
  );
}

var _default = UnauthedHeader;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UnauthedHeader, 'UnauthedHeader', '/Users/yding/projects/authentication-demo-app/src/client/components/header/UnauthedHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/components/header/UnauthedHeader.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



function Hello() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.hello },
    'finally it\'s workidsdsng lalalaand server is working too'
  );
}

var _default = Hello;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Hello, 'Hello', '/Users/yding/projects/authentication-demo-app/src/client/components/hello/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/components/hello/index.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



function Spinner() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { 'class': __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.loader });
}

var _default = Spinner;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Spinner, 'Spinner', '/Users/yding/projects/authentication-demo-app/src/client/components/spinner/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/components/spinner/index.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_validator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.componentDidMount = function () {
      return _this.__componentDidMount__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleEmail = function () {
      return _this.__handleEmail__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handlePassword = function () {
      return _this.__handlePassword__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleLogin = function () {
      return _this.__handleLogin__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: '__componentDidMount__REACT_HOT_LOADER__',
    value: function __componentDidMount__REACT_HOT_LOADER__() {
      if (typeof __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utilities__["b" /* getParameterByName */])('id_token') === 'string') {
        var idToken = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utilities__["b" /* getParameterByName */])('id_token');
        var username = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utilities__["b" /* getParameterByName */])('username');
        var id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utilities__["b" /* getParameterByName */])('id');
        this.props.fbLogin({
          idToken: idToken,
          username: username,
          id: id
        });
      }
    }
  }, {
    key: '__handleEmail__REACT_HOT_LOADER__',
    value: function __handleEmail__REACT_HOT_LOADER__(e) {
      var value = e.target.value.trim();
      this.setState({ email: value });
      if (!__WEBPACK_IMPORTED_MODULE_6_validator___default.a.isEmail(value)) {
        this.setState({ emailError: value + ' is not a valid email' });
      } else if (value === '') {
        this.setState({ emailError: 'Email is required' });
      } else {
        this.setState({ emailError: '' });
      }
    }
  }, {
    key: '__handlePassword__REACT_HOT_LOADER__',
    value: function __handlePassword__REACT_HOT_LOADER__(e) {
      var value = e.target.value.trim();
      this.setState({ password: value });
      if (value.length < 4 && value.length > 60) {
        this.setState({ passwordError: 'Your password must contain between 4 and 60 characters' });
      } else {
        this.setState({ passwordError: '' });
      }
    }
  }, {
    key: '__handleLogin__REACT_HOT_LOADER__',
    value: function __handleLogin__REACT_HOT_LOADER__() {
      var creds = { email: this.state.email, password: this.state.password };
      this.props.handleLogin(creds);
    }
  }, {
    key: 'render',
    value: function render() {
      var errorMessage = this.props.errorMessage;
      var _state = this.state,
          emailError = _state.emailError,
          passwordError = _state.passwordError;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.auth },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.heading },
            'Log in'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.group },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Email'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.input, onChange: this.handleEmail }),
            emailError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.error },
              emailError
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.group },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Password'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.input, onBlur: this.handlePassword }),
            passwordError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.error },
              passwordError
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"],
            { block: true, bsStyle: 'primary', bsSize: 'large', onClick: this.handleLogin },
            'Log In'
          ),
          errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.error },
            errorMessage
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__style_css___default.a.link },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '/auth/facebook' },
            'Log in via Facebook'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
              { to: '/dashboard' },
              'Dashboard'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Do not have an account? ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
              { to: '/signup' },
              'Sign up now.'
            )
          )
        )
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Login.propTypes = {
  handleLogin: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  handleFBLogin: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  errorMessage: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLogin: function handleLogin(creds) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions__["c" /* loginUser */])(creds));
    },
    handleFBLogin: function handleFBLogin(token, username) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions__["d" /* FBLoginUser */])(token, username));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
};

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Login);

/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Login, 'Login', '/Users/yding/projects/authentication-demo-app/src/client/containers/login/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/yding/projects/authentication-demo-app/src/client/containers/login/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/yding/projects/authentication-demo-app/src/client/containers/login/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/containers/login/index.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_validator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__login_style_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

    _this.handleEmail = function () {
      return _this.__handleEmail__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handlePassword = function () {
      return _this.__handlePassword__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handlePasswordMatch = function () {
      return _this.__handlePasswordMatch__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSignup = function () {
      return _this.__handleSignup__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      passwordMatch: '',
      passwordMatchError: ''
    };
    return _this;
  }

  _createClass(Signup, [{
    key: '__handleEmail__REACT_HOT_LOADER__',
    value: function __handleEmail__REACT_HOT_LOADER__(e) {
      var value = e.target.value.trim();
      this.setState({ email: value });
      if (!__WEBPACK_IMPORTED_MODULE_5_validator___default.a.isEmail(value)) {
        this.setState({ emailError: value + ' is not a valid email' });
      } else if (value === '') {
        this.setState({ emailError: 'Email is required' });
      } else {
        this.setState({ emailError: '' });
      }
    }
  }, {
    key: '__handlePassword__REACT_HOT_LOADER__',
    value: function __handlePassword__REACT_HOT_LOADER__(e) {
      var value = e.target.value.trim();
      this.setState({ password: value });
      if (value.length < 4 && value.length > 60) {
        this.setState({ passwordError: 'Your password must contain between 4 and 60 characters' });
      } else {
        this.setState({ passwordError: '' });
      }
    }
  }, {
    key: '__handlePasswordMatch__REACT_HOT_LOADER__',
    value: function __handlePasswordMatch__REACT_HOT_LOADER__(e) {
      var value = e.target.value.trim();
      this.setState({ passwordMatch: value });
      if (this.state.password !== value) {
        this.setState({ passwordMatchError: 'Your passwords do not match' });
      } else {
        this.setState({ passwordMatchError: '' });
      }
    }
  }, {
    key: '__handleSignup__REACT_HOT_LOADER__',
    value: function __handleSignup__REACT_HOT_LOADER__() {
      var creds = { email: this.state.email, password: this.state.password };
      this.props.handleSignup(creds);
    }
  }, {
    key: 'render',
    value: function render() {
      var errorMessage = this.props.errorMessage;
      var _state = this.state,
          emailError = _state.emailError,
          passwordError = _state.passwordError,
          passwordMatchError = _state.passwordMatchError;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.auth },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.heading },
            'Sign Up'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.group },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Email'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.input, onChange: this.handleEmail }),
            emailError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.error },
              emailError
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.group },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Password'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.input, onBlur: this.handlePassword }),
            passwordError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.error },
              passwordError
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.group },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Confirm Password'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.input, onBlur: this.handlePasswordMatch }),
            passwordMatchError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.error },
              passwordMatchError
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Button"],
            { block: true, bsStyle: 'primary', bsSize: 'large', onClick: this.handleSignup },
            'Sign Up'
          ),
          errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.error },
            errorMessage
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_6__login_style_css___default.a.link },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Already have an account? ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
              { to: '/login' },
              'Log in now.'
            )
          )
        )
      );
    }
  }]);

  return Signup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Signup.propTypes = {
  handleSignup: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  errorMessage: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSignup: function handleSignup(creds) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["b" /* signupUser */])(creds));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
};

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Signup);

/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Signup, 'Signup', '/Users/yding/projects/authentication-demo-app/src/client/containers/signup/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/yding/projects/authentication-demo-app/src/client/containers/signup/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/yding/projects/authentication-demo-app/src/client/containers/signup/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/containers/signup/index.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_spinner__ = __webpack_require__(24);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    key: 'handleLogin',
    value: function handleLogin() {
      __WEBPACK_IMPORTED_MODULE_2_react_router__["browserHistory"].push('/login');
    }
  }, {
    key: 'render',
    value: function render() {
      var isFetching = this.props.isFetching;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container' },
        isFetching && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_spinner__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Jumbotron"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Node Authentication and Server-side Rendering'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'This is a demo app for node authentication using passport.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
              { bsStyle: 'success', onClick: this.handleLogin },
              'Log In'
            )
          )
        )
      );
    }
  }]);

  return Welcome;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLogin: function handleLogin(token) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions__["e" /* reloginUser */])(token));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching
  };
};

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Welcome);

/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Welcome, 'Welcome', '/Users/yding/projects/authentication-demo-app/src/client/containers/welcome/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/yding/projects/authentication-demo-app/src/client/containers/welcome/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/yding/projects/authentication-demo-app/src/client/containers/welcome/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/containers/welcome/index.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(8);



var auth = function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    isAuthenticated: !!__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].getItem('token'),
    username: __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].getItem('username') ? __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].getItem('username') : '',
    userId: __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].getItem('userId') ? __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* localStorage */].getItem('userId') : ''
  };
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* LOGIN_REQUEST */]:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* FB_LOGIN_SUCCESS */]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* LOGIN_SUCCESS */]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["i" /* SIGNUP_SUCCESS */]:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        username: action.username,
        userId: action.userId
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions__["j" /* LOGIN_FAILURE */]:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions__["k" /* LOGOUT_SUCCESS */]:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    default:
      return state;
  }
};

var _default = auth;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(auth, 'auth', '/Users/yding/projects/authentication-demo-app/src/client/reducers/auth.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/reducers/auth.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(28);



var reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  auth: __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */]
});

var _default = reducer;
/* harmony default export */ __webpack_exports__["default"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/yding/projects/authentication-demo-app/src/client/reducers/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/reducers/index.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apps_authedApp__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apps_unauthedApp__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_hello__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_welcome__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_login__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_signup__ = __webpack_require__(26);











var routes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { path: '/', component: __WEBPACK_IMPORTED_MODULE_3__apps_unauthedApp__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_5__containers_welcome__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__containers_login__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__containers_signup__["a" /* default */] })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { path: '/dashboard', component: __WEBPACK_IMPORTED_MODULE_2__apps_authedApp__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_4__components_hello__["a" /* default */] })
  )
);

var _default = routes;
/* harmony default export */ __webpack_exports__["default"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/yding/projects/authentication-demo-app/src/client/routes/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yding/projects/authentication-demo-app/src/client/routes/index.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(13);
// plug in ES6 promise
mongoose.Promise = global.Promise;

function dbConnect(url) {
  mongoose.connect(url);

  mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
    process.exit(1);
  });

  // require('./user')
}

module.exports = dbConnect;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(dbConnect, 'dbConnect', '/Users/yding/projects/authentication-demo-app/src/server/models/index.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Strategy = __webpack_require__(15).Strategy;
var User = __webpack_require__(10);
var jwt = __webpack_require__(12);
var SECRET = __webpack_require__(5).SECRET;

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
        username: userData.email,
        id: user._id,
        token: token
      };
      return done(null, data);
    });
  });
});

module.exports = login;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Strategy, 'Strategy', '/Users/yding/projects/authentication-demo-app/src/server/passports/local-login.js');

  __REACT_HOT_LOADER__.register(SECRET, 'SECRET', '/Users/yding/projects/authentication-demo-app/src/server/passports/local-login.js');

  __REACT_HOT_LOADER__.register(login, 'login', '/Users/yding/projects/authentication-demo-app/src/server/passports/local-login.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Strategy = __webpack_require__(15).Strategy;
var User = __webpack_require__(10);
var jwt = __webpack_require__(12);
var SECRET = __webpack_require__(5).SECRET;

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
        username: userData.email,
        id: savedUser._doc._id,
        token: token
      };
      return done(null, data);
    });
  });
});

module.exports = signup;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Strategy, 'Strategy', '/Users/yding/projects/authentication-demo-app/src/server/passports/local-signup.js');

  __REACT_HOT_LOADER__.register(SECRET, 'SECRET', '/Users/yding/projects/authentication-demo-app/src/server/passports/local-signup.js');

  __REACT_HOT_LOADER__.register(signup, 'signup', '/Users/yding/projects/authentication-demo-app/src/server/passports/local-signup.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var router = __webpack_require__(9).Router();
var passport = __webpack_require__(14);
var SECRET = __webpack_require__(5).SECRET;
var jwt = __webpack_require__(46);

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

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/yding/projects/authentication-demo-app/src/server/routes/auth.js');

  __REACT_HOT_LOADER__.register(SECRET, 'SECRET', '/Users/yding/projects/authentication-demo-app/src/server/routes/auth.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var renderToString = __webpack_require__(49).renderToString;
var React = __webpack_require__(0);
var match = __webpack_require__(1).match;
var RouterContext = __webpack_require__(1).RouterContext;
var Provider = __webpack_require__(4).Provider;
var createStore = __webpack_require__(16).createStore;
var reducer = __webpack_require__(29).default;
var router = __webpack_require__(9).Router();
var routes = __webpack_require__(30).default;

router.get('*', function (req, res) {
  match({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      handleRender(req, res, renderProps);
    } else {
      res.status(404).send('Not found');
    }
  });
});

function handleRender(req, res, renderProps) {
  var store = createStore(reducer);
  var html = renderToString(React.createElement(
    Provider,
    { store: store },
    React.createElement(RouterContext, renderProps)
  ));
  var preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="http://localhost:8080/assets/bundle.js"></script>\n      </body>\n    </html>\n    ';
}

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderToString, 'renderToString', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(match, 'match', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(RouterContext, 'RouterContext', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(Provider, 'Provider', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(createStore, 'createStore', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(handleRender, 'handleRender', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');

  __REACT_HOT_LOADER__.register(renderFullPage, 'renderFullPage', '/Users/yding/projects/authentication-demo-app/src/server/routes/serverRender.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._2DkBWFJjYk4NCAH8Felg3L {\n  min-width: 250px;\n}\n", ""]);

// exports
exports.locals = {
	"dropdown": "_2DkBWFJjYk4NCAH8Felg3L"
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._3GNDMB8l1nplIk4RkEkorS {\n  background: #000;\n  color: #fff;\n}\n", ""]);

// exports
exports.locals = {
	"hello": "_3GNDMB8l1nplIk4RkEkorS"
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._3UYMEZZ5wAWpCLth6xD5PA, ._3UYMEZZ5wAWpCLth6xD5PA::before, ._3UYMEZZ5wAWpCLth6xD5PA::after {\n  border-radius: 50%;\n}\n\n._3UYMEZZ5wAWpCLth6xD5PA {\n  color: #fff;\n  font-size: 11px;\n  text-indent: -99999em;\n  margin: 55px auto;\n  position: relative;\n  width: 10em;\n  height: 10em;\n  box-shadow: inset 0 0 0 1em;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n\n._3UYMEZZ5wAWpCLth6xD5PA::before, ._3UYMEZZ5wAWpCLth6xD5PA::after {\n  position: absolute;\n  content: '';\n}\n\n._3UYMEZZ5wAWpCLth6xD5PA::before {\n  width: 5.2em;\n  height: 10.2em;\n  background: #0dc5c1;\n  border-radius: 10.2em 0 0 10.2em;\n  top: -0.1em;\n  left: -0.1em;\n  -webkit-transform-origin: 5.2em 5.1em;\n          transform-origin: 5.2em 5.1em;\n  -webkit-animation: _3SgiatipIWPem4W_Pdt69H 2s infinite ease 1.5s;\n          animation: _3SgiatipIWPem4W_Pdt69H 2s infinite ease 1.5s;\n}\n\n._3UYMEZZ5wAWpCLth6xD5PA::after {\n  width: 5.2em;\n  height: 10.2em;\n  background: #0dc5c1;\n  border-radius: 0 10.2em 10.2em 0;\n  top: -0.1em;\n  left: 5.1em;\n  -webkit-transform-origin: 0 5.1em;\n          transform-origin: 0 5.1em;\n  -webkit-animation: _3SgiatipIWPem4W_Pdt69H 2s infinite ease;\n          animation: _3SgiatipIWPem4W_Pdt69H 2s infinite ease;\n}\n\n@-webkit-keyframes _3SgiatipIWPem4W_Pdt69H {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes _3SgiatipIWPem4W_Pdt69H {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports
exports.locals = {
	"loader": "_3UYMEZZ5wAWpCLth6xD5PA",
	"load2": "_3SgiatipIWPem4W_Pdt69H"
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._37h7txY5DMoaP5829gQs6O {\n  padding-top: 100px;\n  padding-bottom: 50px;\n  width: 300px;\n  margin: 0 auto -150px;\n  min-height: 100vh;\n}\n\n._3FK5blunu5m61pEMsGjGEG {\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 3rem;\n  margin-bottom: 1.25rem;\n}\n\n._1PgssqrPy-x5Ts59eu3HAB {\n  display: block;\n  padding-bottom: 2rem;\n}\n\n.OWWj3T6iD8AKZvvbIWnkg {\n  box-sizing: border-box;\n  font-size: 1rem;\n  border: 1px solid #b3b3b3;\n  border-radius: 2px;\n  display: block;\n  -webkit-appearance: none;\n  width: 100%;\n  max-width: 500px;\n  color: #000;\n  line-height: 18px;\n  padding: 10px 11px;\n  height: 44px;\n}\n\n._3grdniCgY4FvoCiy6ZlvLD {\n  width: 100%;\n}\n\n._3E3WtCzJ-dsLmlgwlzjkYr {\n  margin-top: 20px;\n}\n\n._3K98Kq7gWvqa-HZrL5Q5MK {\n  color: red;\n  position: absolute;\n}\n", ""]);

// exports
exports.locals = {
	"auth": "_37h7txY5DMoaP5829gQs6O",
	"heading": "_3FK5blunu5m61pEMsGjGEG",
	"group": "_1PgssqrPy-x5Ts59eu3HAB",
	"input": "OWWj3T6iD8AKZvvbIWnkg",
	"button": "_3grdniCgY4FvoCiy6ZlvLD",
	"link": "_3E3WtCzJ-dsLmlgwlzjkYr",
	"error": "_3K98Kq7gWvqa-HZrL5Q5MK"
};

/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(36);
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(7).add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(37);
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(7).add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(38);
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(7).add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ })
/******/ ]);