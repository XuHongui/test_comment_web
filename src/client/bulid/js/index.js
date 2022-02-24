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

/***/ "./src/less/index.less":
/*!*****************************!*\
  !*** ./src/less/index.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/less/index.less?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../less/index.less */ \"./src/less/index.less\");\n/* harmony import */ var _jquery1_12_4_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery1.12.4.min.js */ \"./jquery1.12.4.min.js\");\n/* harmony import */ var _jquery1_12_4_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jquery1_12_4_min_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n//提交按钮\r\n_jquery1_12_4_min_js__WEBPACK_IMPORTED_MODULE_1___default()(\"#commitComment\").click(function(){\r\n    // 获得输入框里的值\r\n    var comment = _jquery1_12_4_min_js__WEBPACK_IMPORTED_MODULE_1___default()('#inputText').val();\r\n    // 获取提交时间\r\n    var date = new Date();\r\n    //将字符串抓换变成字符串传入数据库中\r\n    var dateStr = date.getFullYear() + \"-\" + date.getMonth() + '-' + date.getDate() + \"T\" + date.getHours() + \":\" + date.getMinutes() + \":\" + date.getSeconds();\r\n    //插入到评论框当中\r\n    _jquery1_12_4_min_js__WEBPACK_IMPORTED_MODULE_1___default()('#commentList').prepend(`<li><div>${dateStr}   ${comment}</div></li>`);\r\n    \r\n    \r\n    /*\r\n    //向服务器发送请求\r\n    const xhr = new XMLHttpRequest();\r\n    //设置发送的地址\r\n    xhr.open('GET', 'http://127.0.0.1:8089/test');\r\n    //发送请求\r\n    xhr.send();\r\n    //观察请求的变化\r\n    xhr.onreadystatechange = ()=>{\r\n        //请求成功\r\n        if(xhr.readyState == 4){\r\n            if(xhr.status >= 200 && xhr.status < 300){\r\n                var data = JSON.parse(xhr.response);\r\n                //插入到评论框当中\r\n                $('#commentList').prepend(`<li><div>${data.date}   ${data.comment}</div></li>`);\r\n            }\r\n        }\r\n    }\r\n    */\r\n\r\n    const xhr = new XMLHttpRequest();\r\n    xhr.open('POST','http://127.0.0.1:8089/commit');\r\n    xhr.setRequestHeader('contentType', 'application/json');\r\n    xhr.send(JSON.stringify({asdfasd: \"fdsafasd\"}));\r\n    console.log(JSON.stringify({dateStr: dateStr, comment: comment}));\r\n    xhr.onreadystatechange = function(){\r\n        if(xhr.readyState == 4){\r\n            if(xhr.status == 200){\r\n                console.log(\"评论成功\");\r\n            }else{\r\n                console.log(\"评论失败\");\r\n            }\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./jquery1.12.4.min.js":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;