/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!*************************!*\
  !*** ./client/guide.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _guide = __webpack_require__(/*! ./guide.md */ 51);
	
	var _guide2 = _interopRequireDefault(_guide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log('/ webpage \\');
	console.log('\\ guide   /');
	
	window.onload = function () {
	  console.log('page loaded');
	
	  var doc = document.createElement('div');
	  doc.className = 'doc';
	  doc.innerHTML = _guide2.default;
	  document.body.appendChild(doc);
	};

/***/ },

/***/ 51:
/*!*************************!*\
  !*** ./client/guide.md ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = "<h1 id=\"test\">Test</h1>\n<ul>\n<li>one</li>\n<li>two</li>\n</ul>\n";

/***/ }

/******/ });
//# sourceMappingURL=guide.js.map