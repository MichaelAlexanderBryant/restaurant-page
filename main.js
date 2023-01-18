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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction addContactInfo() {\n    const contactDiv = document.createElement(\"div\");\n    contactDiv.id = \"contact\";\n\n    const addressDiv = document.createElement(\"div\");\n    addressDiv.id = \"address\";\n    const addressHeader = document.createElement(\"h1\");\n    addressHeader.textContent = \"Address:\";\n    addressDiv.appendChild(addressHeader);\n    const address = document.createElement(\"div\");\n    address.textContent = \"3772 Mission Ave #13, Oceanside, CA 922058\";\n    addressDiv.append(address);\n    contactDiv.appendChild(addressDiv);\n\n    const phoneDiv = document.createElement(\"div\");\n    phoneDiv.id = \"phone\";\n    const phoneHeader = document.createElement(\"h1\");\n    phoneHeader.textContent = \"Phone:\";\n    phoneDiv.appendChild(phoneHeader);\n    const phone = document.createElement(\"div\");\n    phone.textContent = \"(760) 721-7829\"\n    phoneDiv.appendChild(phone);\n    contactDiv.appendChild(phoneDiv);\n\n    const hoursDiv = document.createElement(\"div\");\n    hoursDiv.id = \"hours\";\n    const hoursHeader = document.createElement(\"h1\");\n    hoursHeader.textContent = \"Hours:\";\n    hoursDiv.appendChild(hoursHeader);\n    const monday = document.createElement(\"p\");\n    monday.textContent = \"Monday: 8AM - 9PM\"\n    hoursDiv.appendChild(monday);\n    const tuesday = document.createElement(\"p\");\n    tuesday.textContent = \"Tuesday: CLOSED\"\n    hoursDiv.appendChild(tuesday);\n    const wednesday = document.createElement(\"p\");\n    wednesday.textContent = \"Wednesday: 8AM - 9PM\"\n    hoursDiv.appendChild(wednesday);\n    const thursday = document.createElement(\"p\");\n    thursday.textContent = \"Thursday: 8AM - 9PM\"\n    hoursDiv.appendChild(thursday);\n    const friday = document.createElement(\"p\");\n    friday.textContent = \"Friday: 8AM - 9PM\"\n    hoursDiv.appendChild(friday);\n    const saturday = document.createElement(\"p\");\n    saturday.textContent = \"Saturday: 8AM - 9PM\"\n    hoursDiv.appendChild(saturday);\n    const sunday = document.createElement(\"p\");\n    sunday.textContent = \"Sunday: 8AM - 9PM\"\n    hoursDiv.appendChild(sunday);\n    contactDiv.appendChild(hoursDiv);\n    \n    return contactDiv;\n};\n\nfunction loadContact() {\n    const contentDiv = document.getElementById(\"content\");\n    contentDiv.appendChild(addContactInfo());\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomepage\": () => (/* binding */ loadHomepage)\n/* harmony export */ });\nfunction addHeadline() {\nconst headlineDiv = document.createElement(\"div\");\nheadlineDiv.id = \"headline\";\nheadlineDiv.textContent = \"Serving Mexican food since 2012\";\nreturn headlineDiv;\n};\n\nfunction addImage() {\n    const restaurantPhoto = document.createElement(\"img\");\n    restaurantPhoto.id = \"front-page-image\"\n    restaurantPhoto.src = \"./img/photo.jpg\";\n    return restaurantPhoto;\n};\n\nfunction addBio() {\n    const bioDiv = document.createElement(\"div\");\n    bioDiv.id = \"bio\";\n    bioDiv.textContent = \"More than 10 years ago, this couple decided to take the biggest risk they had ever taken. They did not know the language, the outcome, or if they would be able to do it. One thing was for sure: they had a love for food and eagerness to succeed. So what did they do? From all these challenges, Los Kompadres was born. Los Kompadres marks a huge endeavor. Juan couldn't have done it without the knowledge and special touch his wife brings into the kitchen. \";\n    return bioDiv;\n};\n\nfunction loadHomepage() {\n    const contentDiv = document.getElementById(\"content\");\n    contentDiv.textContent = '';\n    contentDiv.appendChild(addHeadline());\n    contentDiv.appendChild(addImage());\n    contentDiv.appendChild(addBio());\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction addMenu() {\n    const menuImg1 = document.createElement(\"img\");\n    menuImg1.id = \"menu1\";\n    menuImg1.src = \"./img/menu1.jpg\";\n    const menuImg2 = document.createElement(\"img\");\n    menuImg2.id = \"menu2\";\n    menuImg2.src = \"./img/menu2.jpg\";\n    return [menuImg1, menuImg2];\n};\n\nfunction loadMenu() {\n    const contentDiv = document.getElementById(\"content\");\n    console.log(addMenu())\n    contentDiv.appendChild(addMenu()[0]);\n    contentDiv.appendChild(addMenu()[1]);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/website.js":
/*!********************************!*\
  !*** ./src/modules/website.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeWebsite\": () => (/* binding */ initializeWebsite)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/modules/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n\n\n\n\nfunction addHeader() {\n    const header = document.createElement(\"div\");\n    header.id = \"header\";\n    header.textContent = \"Los Kompadres Mexican Food\";\n    return header;\n};\n\nfunction addNavigation() {\n    const nav = document.createElement(\"div\");\n    nav.id = \"navigation\";\n    const home = document.createElement(\"span\");\n    home.addEventListener(\"click\", () => {\n        document.getElementById(\"content\").textContent = '';\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\n    });\n    const contact = document.createElement(\"span\");\n    contact.addEventListener(\"click\", () => {\n        document.getElementById(\"content\").textContent = '';\n        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadContact)();\n    });\n    const menu = document.createElement(\"span\");\n    menu.addEventListener(\"click\", () => {\n        document.getElementById(\"content\").textContent = '';\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n    });\n    home.textContent = \"Home\";\n    contact.textContent = \"Contact\";\n    menu.textContent = \"Menu\";\n    nav.appendChild(home);\n    nav.appendChild(contact);\n    nav.appendChild(menu);\n    return nav;\n};\n\nfunction initializeWebsite() {\n    const contentDiv = document.getElementById(\"header-nav\");\n    contentDiv.appendChild(addHeader());\n    contentDiv.appendChild(addNavigation());\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/website.js?");

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