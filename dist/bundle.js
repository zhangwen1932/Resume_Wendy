/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/timg.gif":
/*!*****************************!*\
  !*** ./assets/img/timg.gif ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9dac2e8e374ea0a829e01cb62d8e2461.gif\";\n\n//# sourceURL=webpack:///./assets/img/timg.gif?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../../assets/img/timg.gif */ \"./assets/img/timg.gif\"));\n// Module\nexports.push([module.i, \"@charset \\\"utf-8\\\";\\n@-webkit-viewport   { width: device-width; }\\n@-moz-viewport      { width: device-width; }\\n@-ms-viewport       { width: device-width; }\\n@-o-viewport        { width: device-width; }\\n@viewport           { width: device-width; }\\n\\n/******************************************\\nPRELOADER\\n*******************************************/\\n#preloader {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #fff;\\n  z-index: 1400;\\n}\\n#status{\\n  width: 200px;\\n  height: 200px;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  margin: -100px 0 0 -100px;\\n}\\n\\n\\n/*******************************************\\nBODY\\n*******************************************/\\nbody{\\n  font-family: 'Open Sans', Arial, Tahoma;\\n  font-weight: 400;\\n  font-size: 10px;\\n  color: #363636;\\n  background: #ededed;\\n}\\nh1, .h1, h2, .h2, h3, .h3 {\\n    margin-top: 20px;\\n    margin-bottom: 10px;\\n}\\n.row{\\n  margin-left: 0;\\n  margin-right: 0;\\n}\\n/*******************************************\\nCONTAINER\\n*******************************************/\\n.container{\\n  margin-top: 100px;\\n  margin-bottom: 15px;\\n  background: #fff;\\n}\\n/*******************************************\\nPHOTO (AVATAR)\\n*******************************************/\\n#photo-header{\\n  margin-top: -75px;\\n}\\n#photo{\\n  width: 160px;\\n  height: 160px;\\n  border-radius: 50%;\\n  overflow: hidden;\\n  padding: 5px;\\n  background: #ededed;\\n  display: inline-block;\\n}\\n#photo img{\\n  width: 150px;\\n  height: 150px;\\n  border-radius: 50%;\\n}\\n#text-header h1{\\n  margin: 0;\\n  padding: 0;\\n  font-size: 2.4em;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  letter-spacing: -1px;\\n}\\n#text-header h1::first-line{\\n  font-size: 1.5em;\\n  letter-spacing: -4px;\\n  font-weight: 800;\\n  line-height: 1.5em;\\n}\\n#text-header h1 span{\\n  color: #F0563D;\\n}\\n#text-header h1 sup{\\n  opacity: 0.5;\\n}\\n#text-header:after{\\n  width: 100%;\\n  height: 3px;\\n  /* background: url(../img/line.png); */\\n  margin-top: 15px;\\n  content: '';\\n  display: block;\\n  border: 2px solid #eee;\\n}\\n/*******************************************\\nDEFAULT BOX\\n*******************************************/\\n.box{\\n  margin-bottom: 15px;\\n}\\n.box h2{\\n  color: #EC7263;\\n  font-size: 1.8em;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n}\\n.box h2:before{\\n  content: '//';\\n  margin-right: 5px;\\n}\\n.box p{\\n  font-size: 1.3em;\\n  line-height: 1.5em;\\n}\\n/*******************************************\\nEDUCATION\\n*******************************************/\\n#education{\\n  margin-top: 20px;\\n  position: relative;\\n  padding: 1em 0;\\n  list-style: none;\\n}\\n#education:before {\\n  width: 5px;\\n  height: 100%;\\n  position: absolute;\\n  left: 25px;\\n  top: 0;\\n  content: ' ';\\n  display: block;\\n  background: #ec7263;\\n  background: -moz-linear-gradient(top,  #ffffff 0%, #ec7263 7%, #ec7263 89%, #ffffff 100%);\\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(7%,#ec7263), color-stop(89%,#ec7263), color-stop(100%,#ffffff));\\n  background: -webkit-linear-gradient(top,  #ffffff 0%,#ec7263 7%,#ec7263 89%,#ffffff 100%);\\n  background: -o-linear-gradient(top,  #ffffff 0%,#ec7263 7%,#ec7263 89%,#ffffff 100%);\\n  background: -ms-linear-gradient(top,  #ffffff 0%,#ec7263 7%,#ec7263 89%,#ffffff 100%);\\n  background: linear-gradient(to bottom,  #ffffff 0%,#ec7263 7%,#ec7263 89%,#ffffff 100%);\\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 );\\n}\\n#education li{\\n  width: 100%;\\n  z-index: 2;\\n  position: relative;\\n  float: left;\\n}\\n#education .year{\\n  width: 10%;\\n  height: 40px;\\n  background: #fff;\\n  padding: 10px;\\n  font-size: 1.5em;\\n  font-weight: 700;\\n  display: inline-block;\\n}\\n#education .description{\\n  width: 80%;\\n  display: inline-block;\\n  background: #eee;\\n  margin-bottom: 10px;\\n  position: relative;\\n  padding: 10px 10px 0 10px;\\n  border-bottom: 1px solid #ddd;\\n}\\n#education .description:after {\\n  content: '';\\n  position: absolute;\\n  top: 15px;\\n  right: 0;\\n  left: -16px;\\n  height: 0;\\n  width: 0;\\n  border: solid transparent;\\n  border-right-color: #eee;\\n  border-width: 8px;\\n  pointer-events: none;\\n}\\n#education .description h3{\\n  font-size: 1.6em;\\n  margin: 0;\\n  padding: 0;\\n  font-weight: 700;\\n}\\n#education .description p{\\n  font-size: 1.3em;\\n  margin-top: 5px;\\n  padding: 0;\\n}\\n/*******************************************\\nEXPERIENCES\\n*******************************************/\\n.job{\\n  margin-bottom: 15px;\\n}\\n.job .where{\\n  font-size: 1.4em;\\n  font-weight: bold;\\n}\\n.job .year{\\n  font-size: 1.3em;\\n  opacity: 0.7;\\n}\\n.job .profession{\\n  font-size: 1.6em;\\n  font-weight: bold;\\n}\\n.job .description{\\n  font-size: 1.2em;\\n  line-height: 1.5em;\\n}\\n/*******************************************\\nCONTACT\\n*******************************************/\\n.contact-item{\\n  width: 100%;\\n  float: left;\\n}\\n.contact-item .row .iconfont{\\n  padding: 10px;\\n  border-right: 1px solid #aaa;\\n  border-bottom: 1px solid #aaa;\\n  opacity: 0.2;\\n  font-size: 2rem;\\n}\\n.contact-item:last-child .iconfont{\\n  border-bottom: none;\\n}\\n.contact-item .row .title{\\n  width: 80%;\\n  width: calc(100% - 55px);\\n  font-size: 1.5em;\\n  font-weight: 700;\\n  opacity: 0.9;\\n}\\n.contact-item .row .title.only{\\n  margin-top: 10px;\\n}\\n.contact-item .row .description{\\n  width: 80%;\\n  width: calc(100% - 55px);\\n  font-size: 1.2em;\\n  opacity: 0.7;\\n}\\n/*******************************************\\nSKILLS\\n*******************************************/\\n.skill-item{\\n  height: 30px;\\n  background: #F0563D;\\n  color: #fff;\\n  padding: 5px 10px;\\n  margin-bottom: 5px;\\n  white-space: nowrap;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  font-size: 1.3em;\\n  font-weight: 600;\\n}\\n.skills-legend{\\n  margin-top: 20px;\\n  opacity: 0.8;\\n}\\n.skills-legend:before{\\n  width: 100%;\\n  height: 3px;\\n  position: relative;\\n  content: ' ';\\n  display: block;\\n  margin-bottom: -13px;\\n  background: #c6c6c6;\\n}\\n.skills-legend div{\\n  width: 25%;\\n  display: inline-block;\\n  font-size: 1.2em;\\n  color: #a9a9a9;\\n  float: left;\\n}\\n.legend:before{\\n  width: 3px;\\n  height: 10px;\\n  position: relative;\\n  content: ' ';\\n  display: block;\\n  margin: auto;\\n  margin-bottom: 15px;\\n  background: #c6c6c6;\\n}\\n.legend-left.legend:before{\\n  margin-left: 0;\\n}\\n.legend-right.legend:before{\\n  margin-right: 0;\\n}\\n.legend-left:nth-child(2) span{\\n  margin-left: -25px;\\n}\\n.legend-right:nth-child(3) span{\\n  margin-right: -20px;\\n}\\n.legend-right{\\n  text-align: right;\\n}\\n\\n/*******************************************\\nHOBBIES\\n*******************************************/\\n.hobby-item{\\n  color: #fff;\\n  display: inline-block;\\n  margin-right: 5px;\\n  margin-bottom: 5px;\\n  padding: 5px 5px 5px 25px;\\n  background: #A75265;\\n  position: relative;\\n  font-size: 1.2em;\\n}\\n.hobby-item:before{\\n  content: \\\"\\\\f004\\\";\\n  font-family: FontAwesome;\\n  font-style: normal;\\n  font-weight: normal;\\n  position: absolute;\\n  top: 6px;\\n  left: 7px;\\n}\\n/*******************************************\\nMEDIA\\n*******************************************/\\n@media (min-width: 500px) {\\n  #education .description{\\n    width: 85%;\\n  }\\n}\\n@media (min-width: 768px) {\\n  #education .description{\\n    width: 85%;\\n  }\\n}\\n@media (min-width: 992px) {\\n  #education .description{\\n    width: 87%;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  #education .description{\\n    width: 90%;\\n  }\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/switch-style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/switch-style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".switch-style {\\n  background: #fff;\\n  border-top-left-radius: 6px;\\n  border-bottom-left-radius: 6px;\\n  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.1);\\n  padding: 20px 18px;\\n  position: fixed;\\n  z-index: 100;\\n  top: 150px;\\n  right: -205px;\\n  width: 205px;\\n  transition: right 0.3s ease-in-out;\\n}\\n\\n.switch-style .switch-style-toggle {\\n  background: #ffffff;\\n  border-top-left-radius: 6px;\\n  border-bottom-left-radius: 6px;\\n  box-shadow: -9px 5px 20px 0 rgba(0, 0, 0, 0.07);\\n  position: absolute;\\n  top: 30px;\\n  right: 205px;\\n  width: 40px;\\n  height: 40px;\\n  text-align: center;\\n}\\n\\n.switch-style .switch-style-toggle span {\\n  font-size: 20px;\\n  line-height: 40px;\\n}\\n\\n.switch-style.active{\\n  right: 0;\\n}\\n.switch-style h4{\\n  font-size: 18px;\\n  font-weight: 400;\\n  margin-bottom: 8px;\\n}\\n.switch-style ul{\\n  margin-left: 0;\\n}\\n.list-unstyled{\\n  padding-left: 0;\\n  list-style: none;\\n}\\n.list-inline {\\n    padding-left: 0;\\n    list-style: none;\\n    margin-left: -5px;\\n}\\n.list-inline>li {\\n    display: inline-block;\\n    padding-left: 5px;\\n    /* padding-right: 5px; */\\n}\\n.switch-style ul > li {\\n    padding-right: 4px;\\n    padding-left: 0;\\n}\\n.switch-style ul > li > a {\\n    border-radius: 2px;\\n    display: block;\\n    width: 35px;\\n    height: 30px;\\n}\\n.switch-style ul > li > a.blue {\\n    background: #016cff;\\n}\\n.switch-style ul > li > a.orange {\\n    background: #ff4f00;\\n}\\n.switch-style ul > li > a.pink {\\n    background: #ff4081;\\n}\\n.switch-style ul > li > a.green {\\n    background: #53d769;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/switch-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/css/switch-style.css":
/*!**********************************!*\
  !*** ./src/css/switch-style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./switch-style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/switch-style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/switch-style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/init */ \"./src/js/init.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _switch_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-style */ \"./src/js/switch-style.js\");\n\n\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const callback = () => {\n  // $('.skill-item').each(function () {\n  //   newWidth = $(this).parent().width() * $(this).data('percent');\n  //   $(this).width(0);\n  //   $(this).animate({\n  //     width: newWidth,\n  //   }, 1000);\n  // });\n  $('.icons-red').each(() => {\n    height = $(this).height();\n    $(this).animate({\n      height: 14,\n    }, 2000);\n  });\n};\n$(document).ready(() => {\n  // $('#status').fadeOut();\n  // $('#preloader').delay(350).fadeOut('slow');\n  // $('body').delay(350).css({\n  //   'overflow': 'visible'\n  // });\n  callback();\n  $.ajax({\n    method: \"GET\",\n    url: \"documents/info.json\",\n    cache: false,\n    dataType: \"text\"\n  }).done((data)=>{\n    $('#preloader').remove();\n    const info = $.parseJSON(data);\n    if(info.success){\n      const userInfo = info.data;\n      // 渲染about板块\n      const about = userInfo.about;\n      $('#about').html(about);\n      // 渲染教育板块\n      const eduction = userInfo.eduction;\n      let edcutionRender = '';\n      if(eduction.length>0){\n        eduction.forEach(item => {\n          edcutionRender += \n          `<li>\n            <div class=\"row\">\n              <div class=\"year pull-left\">${item.time}</div>\n              <div class=\"description pull-right\">\n                <h3>${item.school}</h3>\n                <p>${item.content}</p>\n              </div>\n            </div>\n          </li>`\n        });\n        $('#education').html(edcutionRender);\n      }\n      // 渲染经历板块\n      const experience = userInfo.experience;\n      let experienceRender = '';\n      if (experience.length>0){\n        experience.forEach((item) => {\n          experienceRender +=\n            `\n        <div class=\"job clearfix\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <div class=\"where\">${item.company}</div>\n                <div class=\"year\">${item.time}</div>\n              </div>\n              <div class=\"col-9\">\n                <div class=\"profession\">${item.position}</div>\n                <div class=\"description\">\n                  ${item.content}\n                </div>\n              </div>\n            </div>\n          </div>\n        `\n        })\n        $('#job').html(experienceRender);\n      }\n      // 渲染联系板块\n      const contact = userInfo.contact;\n      let contactRender = '';\n      if(contact.length > 0){\n        contact.forEach((item) => {\n          contactRender += `\n          <div class=\"contact-item\">\n            <div class=\"row\">\n              <div class=\"col-2\">\n                <div class=\"icon pull-left text-center\">\n                  <i class=\"iconfont ${item.icon}\"></i>\n                </div>\n              </div>\n              <div class=\"col-10\">\n                <div class=\"title pull-right\">${item.nickname}</div>\n                <div class=\"description pull-right\">${item.content}</div>\n              </div>\n            </div>\n          </div>\n          `\n        })\n        $(\"#contact\").html(contactRender);\n      }\n      // 渲染技能板块\n      const skill = userInfo.skill;\n      let skillRender = '';\n      if(skill.length>0){\n        skill.forEach((item) => {\n          skillRender += `\n          <div class=\"skill-item\" data-percent=\"${item.percent}\">\n              ${item.name}\n            </div>\n          `\n        })\n        $('#skill').html(skillRender);\n        $('.skill-item').each(function () {\n          newWidth = $(this).parent().width() * $(this).data('percent');\n          $(this).width(0);\n          $(this).animate({\n            width: newWidth,\n          }, 1000);\n        });\n      }\n      // 渲染爱好板块\n      const hobbies = userInfo.hobbies;\n      let hobbiesRender = '';\n      if(hobbies.length>0){\n        hobbies.forEach((item) => {\n          hobbiesRender += `\n          <div class=\"hobby-item\">${item.name}</div>\n          `\n        })\n        $('#hobbies').html(hobbiesRender);\n      }\n    }\n  }).fail((error)=>{\n    console.log('error', error);\n  });\n});\n\nlet resize;\nwindow.onresize = () => {\n  clearTimeout(resize);\n  resize = setTimeout(() => {\n    callback();\n  }, 100);\n};\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/switch-style.js":
/*!********************************!*\
  !*** ./src/js/switch-style.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_switch_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/switch-style.css */ \"./src/css/switch-style.css\");\n/* harmony import */ var _css_switch_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_switch_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n$(document).ready(function () {\n  var $switchStyle = $('.switch-style');\n  $('.switch-style-toggle').click(function () {\n    $switchStyle.toggleClass('active');\n  });\n  $(\".color\").click(function(e){\n    var id = $(this).attr(\"id\");\n    $('#switch-style').attr(\"href\", \"src/css/colors/\" + id + \".css\");\n    $switchStyle.removeClass('active');\n    e.preventDefault();\n  })\n});\n\n//# sourceURL=webpack:///./src/js/switch-style.js?");

/***/ })

/******/ });