/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extension/index.ts":
/*!********************************!*\
  !*** ./src/extension/index.ts ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nvar message_1 = __webpack_require__(/*! ./message */ \"./src/extension/message.ts\");\r\nmodule.exports = function (nodecg) {\r\n    (0, message_1.message)(nodecg);\r\n};\r\n\n\n//# sourceURL=webpack://ome-speedrun-layouts/./src/extension/index.ts?");

/***/ }),

/***/ "./src/extension/message.ts":
/*!**********************************!*\
  !*** ./src/extension/message.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.message = void 0;\r\nvar message = function (nodecg) {\r\n    var messageRep = nodecg.Replicant('message', {\r\n        defaultValue: ''\r\n    });\r\n    nodecg.listenFor('message:get', function (_, cb) {\r\n        if (cb && cb.handled) {\r\n            return;\r\n        }\r\n        cb && cb(null, messageRep.value);\r\n    });\r\n    nodecg.listenFor('message:set', function (newMessage, cb) {\r\n        if (cb && cb.handled) {\r\n            return;\r\n        }\r\n        messageRep.value = newMessage;\r\n        cb && cb(null, true);\r\n    });\r\n};\r\nexports.message = message;\r\n\n\n//# sourceURL=webpack://ome-speedrun-layouts/./src/extension/message.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/extension/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;