/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-react-library"] = factory();
	else
		root["my-react-library"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/UL.jsx":
/*!*******************************!*\
  !*** ./src/components/UL.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hoc_withValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hoc/withValidation */ \"./src/hoc/withValidation.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar UL = function UL(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", null, children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hoc_withValidation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(UL, {\n  childrenType: 'li',\n  childrenRequired: true\n}));\n\n//# sourceURL=webpack://my-react-library/./src/components/UL.jsx?");

/***/ }),

/***/ "./src/hoc/withValidation.jsx":
/*!************************************!*\
  !*** ./src/hoc/withValidation.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_validateChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/validateChildren */ \"./src/utils/validateChildren.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _excluded = [\"children\"];\nfunction _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }\nfunction _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }\n\n\nvar withValidation = function withValidation(Component, config) {\n  var WrappedComponent = function WrappedComponent(_ref) {\n    var children = _ref.children,\n      props = _objectWithoutProperties(_ref, _excluded);\n    if (true) {\n      (0,_utils_validateChildren__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        children: children,\n        config: config\n      });\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, props, children);\n  };\n  return WrappedComponent;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withValidation);\n\n//# sourceURL=webpack://my-react-library/./src/hoc/withValidation.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UL: () => (/* reexport safe */ _components_UL__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   validateChildren: () => (/* reexport safe */ _utils_validateChildren__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   withValidation: () => (/* reexport safe */ _hoc_withValidation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _components_UL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/UL */ \"./src/components/UL.jsx\");\n/* harmony import */ var _hoc_withValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoc/withValidation */ \"./src/hoc/withValidation.jsx\");\n/* harmony import */ var _utils_validateChildren__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/validateChildren */ \"./src/utils/validateChildren.js\");\n\n\n\n\n\n//# sourceURL=webpack://my-react-library/./src/index.js?");

/***/ }),

/***/ "./src/utils/validateChildren.js":
/*!***************************************!*\
  !*** ./src/utils/validateChildren.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar validateChildren = function validateChildren(_ref) {\n  var children = _ref.children,\n    config = _ref.config;\n  if (!children) throw new Error('Component must have children.');\n  if (Array.isArray(children)) {\n    children.forEach(function (child) {\n      if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) || child.type !== config.childrenType) {\n        throw new Error(\"Component only accepts <\".concat(config.childrenType, \"> elements as children.\"));\n      }\n    });\n  } else if ( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children) && children.type !== config.childrenType) {\n    throw new Error(\"Component only accepts <\".concat(config.childrenType, \"> elements as children.\"));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateChildren);\n\n//# sourceURL=webpack://my-react-library/./src/utils/validateChildren.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});