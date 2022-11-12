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

eval("\r\nvar message_1 = __webpack_require__(/*! ./message */ \"./src/extension/message.ts\");\r\nvar twitch_1 = __webpack_require__(/*! ./twitch */ \"./src/extension/twitch.ts\");\r\nmodule.exports = function (nodecg) {\r\n    (0, message_1.message)(nodecg);\r\n    (0, twitch_1.twitch)(nodecg);\r\n};\r\n\n\n//# sourceURL=webpack://ome-speedrun-layouts/./src/extension/index.ts?");

/***/ }),

/***/ "./src/extension/message.ts":
/*!**********************************!*\
  !*** ./src/extension/message.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.message = void 0;\r\nvar message = function (nodecg) {\r\n    var messageRep = nodecg.Replicant('message', {\r\n        defaultValue: ''\r\n    });\r\n    nodecg.listenFor('message:get', function (_, cb) {\r\n        if (cb && cb.handled) {\r\n            return;\r\n        }\r\n        cb && cb(null, messageRep.value);\r\n    });\r\n    nodecg.listenFor('message:set', function (newMessage, cb) {\r\n        if (cb && cb.handled) {\r\n            return;\r\n        }\r\n        messageRep.value = newMessage;\r\n        cb && cb(null, true);\r\n    });\r\n};\r\nexports.message = message;\r\n\n\n//# sourceURL=webpack://ome-speedrun-layouts/./src/extension/message.ts?");

/***/ }),

/***/ "./src/extension/twitch.ts":
/*!*********************************!*\
  !*** ./src/extension/twitch.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.twitch = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar isValidConfig = function (config) {\r\n    return (config === null || config === void 0 ? void 0 : config.clientId) && config.clientSecret && config.redirectUrl && config.loginName;\r\n};\r\nvar twitch = function (nodecg) {\r\n    var logger = new nodecg.Logger('ome-speedrun-layouts.twitch');\r\n    var twitchConfig = nodecg.bundleConfig.twitch;\r\n    var credentialRep = nodecg.Replicant('twitchCredential');\r\n    if (!isValidConfig(twitchConfig)) {\r\n        logger.warn('Twitch config is invalid.');\r\n        return;\r\n    }\r\n    nodecg.mount('/ome-speedrun-layouts/auth/twitch/token', function (req, res) {\r\n        res.redirect(generateAuthUrl(twitchConfig));\r\n    });\r\n    nodecg.mount('/ome-speedrun-layouts/auth/twitch/callback', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var code, credentials, e_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    code = req.query.code;\r\n                    if (typeof code !== 'string') {\r\n                        return [2 /*return*/, res.send('Unknown type access token received. Failed to authorization.')];\r\n                    }\r\n                    _a.label = 1;\r\n                case 1:\r\n                    _a.trys.push([1, 3, , 4]);\r\n                    return [4 /*yield*/, exchangeToken(twitchConfig, code)];\r\n                case 2:\r\n                    credentials = _a.sent();\r\n                    credentialRep.value = {\r\n                        accessToken: credentials.accessToken,\r\n                        refreshToken: credentials.refreshToken,\r\n                    };\r\n                    return [2 /*return*/, res.send('Success to authorization! Feel free to close this window.')];\r\n                case 3:\r\n                    e_1 = _a.sent();\r\n                    logger.warn(e_1);\r\n                    return [2 /*return*/, res.send('Something went wrong to authorization. Please make sure console log.')];\r\n                case 4: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); });\r\n    var axiosInstance = axios_1.default.create();\r\n    axiosInstance.interceptors.request.use(function (config) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var data, refreshed;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    if (!credentialRep.value) {\r\n                        credentialRep.value = null;\r\n                        throw new axios_1.default.Cancel('Expired authorization.');\r\n                    }\r\n                    data = {\r\n                        client_id: twitchConfig.clientId,\r\n                        client_secret: twitchConfig.clientSecret,\r\n                        grant_type: 'refresh_token',\r\n                        refresh_token: credentialRep.value.refreshToken,\r\n                    };\r\n                    return [4 /*yield*/, axios_1.default.post('https://id.twitch.tv/oauth2/token', data, {\r\n                            headers: {\r\n                                Authorization: 'x-www-form-urlencoded',\r\n                            }\r\n                        })];\r\n                case 1:\r\n                    refreshed = _a.sent();\r\n                    credentialRep.value = {\r\n                        accessToken: refreshed.data.access_token,\r\n                        refreshToken: refreshed.data.refresh_token,\r\n                    };\r\n                    config.headers.Authorization = \"Bearer \" + refreshed.data.access_token;\r\n                    return [2 /*return*/, config];\r\n            }\r\n        });\r\n    }); });\r\n    nodecg.listenFor('twitch:mark', function (_, cb) {\r\n        if (!cb || (cb === null || cb === void 0 ? void 0 : cb.handled)) {\r\n            return;\r\n        }\r\n        if (!credentialRep.value) {\r\n            logger.warn('Not authorized to twitch!');\r\n            cb(null, false);\r\n            return;\r\n        }\r\n        markStream(axiosInstance, twitchConfig.loginName, {\r\n            accessToken: credentialRep.value.accessToken,\r\n            refreshToken: credentialRep.value.refreshToken,\r\n        }, twitchConfig)\r\n            .then(function () {\r\n            cb(null, true);\r\n        })\r\n            .catch(function (e) {\r\n            logger.error(e);\r\n            cb(e);\r\n        });\r\n    });\r\n    nodecg.listenFor('twitch:logout', function (_, cb) {\r\n        if (!cb || (cb === null || cb === void 0 ? void 0 : cb.handled)) {\r\n            return;\r\n        }\r\n        credentialRep.value = null;\r\n    });\r\n};\r\nexports.twitch = twitch;\r\nvar generateAuthUrl = function (config) {\r\n    var scopes = [\r\n        'channel:manage:broadcast'\r\n    ];\r\n    var urlParams = new URLSearchParams({\r\n        response_type: 'code',\r\n        client_id: config.clientId,\r\n        redirect_uri: config.redirectUrl,\r\n        scope: scopes.join(' '),\r\n    });\r\n    return \"https://id.twitch.tv/oauth2/authorize?\" + urlParams.toString();\r\n};\r\nvar exchangeToken = function (config, code) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data, response;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                data = {\r\n                    client_id: config.clientId,\r\n                    client_secret: config.clientSecret,\r\n                    code: code,\r\n                    grant_type: 'authorization_code',\r\n                    redirect_uri: config.redirectUrl,\r\n                };\r\n                return [4 /*yield*/, axios_1.default.post('https://id.twitch.tv/oauth2/token', data, {\r\n                        headers: {\r\n                            Authorization: 'x-www-form-urlencoded',\r\n                        },\r\n                    })];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [2 /*return*/, {\r\n                        accessToken: response.data.access_token,\r\n                        refreshToken: response.data.refresh_token,\r\n                    }];\r\n        }\r\n    });\r\n}); };\r\nvar markStream = function (axios, login, credentials, config) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var userResponse, user;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, axios.get(\"https://api.twitch.tv/helix/users?login=\" + login, {\r\n                    headers: {\r\n                        Authorization: \"Bearer \" + credentials.accessToken,\r\n                        'Client-Id': config.clientId,\r\n                    }\r\n                })];\r\n            case 1:\r\n                userResponse = _a.sent();\r\n                user = userResponse.data.data[0];\r\n                return [4 /*yield*/, axios.post('https://api.twitch.tv/helix/streams/markers', {\r\n                        user_id: user.id\r\n                    }, {\r\n                        headers: {\r\n                            Authorization: \"Bearer \" + credentials.accessToken,\r\n                            'Client-Id': config.clientId,\r\n                        }\r\n                    })];\r\n            case 2:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack://ome-speedrun-layouts/./src/extension/twitch.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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