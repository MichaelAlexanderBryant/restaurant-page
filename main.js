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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/website */ \"./src/modules/website.js\");\n\n\n(0,_modules_website__WEBPACK_IMPORTED_MODULE_0__.initializeWebsite)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction addContactInfo() {\n    const contactDiv = document.createElement(\"div\");\n    contactDiv.textContent = \"Miguel Bryant (760) 867-5309\";\n    return contactDiv;\n};\n\nfunction loadContact() {\n    const contentDiv = document.getElementById(\"content\");\n    contentDiv.appendChild(addContactInfo());\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomepage\": () => (/* binding */ loadHomepage)\n/* harmony export */ });\nfunction addImage() {\n    const restaurantPhoto = document.createElement(\"img\");\n    restaurantPhoto.id = \"burrito-image\"\n    restaurantPhoto.src = \"./img/photo.jpg\";\n    return restaurantPhoto;\n};\n\nfunction addHeadline() {\n    const headlineDiv = document.createElement(\"div\");\n    headlineDiv.id = \"headline\";\n    headlineDiv.textContent = \"Cooking up your new burrito cravings\";\n    return headlineDiv;\n};\n\nfunction loadHomepage() {\n    const contentDiv = document.getElementById(\"content\");\n    contentDiv.textContent = '';\n    contentDiv.appendChild(addImage());\n    contentDiv.appendChild(addHeadline());\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction addMenu() {\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.textContent = \"Burrito: $5.99\";\n    return menuDiv;\n};\n\nfunction loadMenu() {\n    const contentDiv = document.getElementById(\"content\");\n    contentDiv.appendChild(addMenu());\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/website.js":
/*!********************************!*\
  !*** ./src/modules/website.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeWebsite\": () => (/* binding */ initializeWebsite)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/modules/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n\n\n\n\nfunction addHeader() {\n    const header = document.createElement(\"div\");\n    header.id = \"header\";\n    header.textContent = \"Miguel's Burrito Shop\";\n    return header;\n};\n\nfunction addNavigation() {\n    const nav = document.createElement(\"div\");\n    nav.id = \"navigation\";\n    const home = document.createElement(\"span\");\n    home.addEventListener(\"click\", () => {\n        document.getElementById(\"content\").textContent = '';\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\n    });\n    const contact = document.createElement(\"span\");\n    contact.addEventListener(\"click\", () => {\n        document.getElementById(\"content\").textContent = '';\n        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadContact)();\n    });\n    const menu = document.createElement(\"span\");\n    menu.addEventListener(\"click\", () => {\n        document.getElementById(\"content\").textContent = '';\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n    });\n    home.textContent = \"Home\";\n    contact.textContent = \"Contact\";\n    menu.textContent = \"Menu\";\n    nav.appendChild(home);\n    nav.appendChild(contact);\n    nav.appendChild(menu);\n    return nav;\n};\n\nfunction initializeWebsite() {\n    const contentDiv = document.getElementById(\"header-nav\");\n    contentDiv.appendChild(addHeader());\n    contentDiv.appendChild(addNavigation());\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/website.js?");

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
/******/ })()
;