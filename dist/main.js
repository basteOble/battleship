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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/ethnocentric rg.otf */ \"./src/style/font/ethnocentric rg.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**********************************/\n\n@font-face {\n    font-family: 'ethnocentric';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n}\n\n:root {\n    --dark: #343a40;\n    --light: #f3f4f6;\n    --danger: #dc3545;\n    --btn-bg: #0f766e;\n    --primary: #007bff;\n    --secondary: #6c757d;\n    --white: #fff;\n    --success: #28a745;\n    --warning: #ffc107;\n    font-family: 'ethnocentric', sans-serif;\n    color: var(--dark);\n    font-weight: bold;\n}\n\nbody {\n    background-color: var(--light);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n}\n\nheader {\n    margin: 20px 0;\n    text-align: center;\n    font-size: 40px;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    flex: 1;\n}\n\nmain > div {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-height: 391px;\n}\n\n.message {\n    font-size: 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\n.again {\n    font-family: inherit;\n    width: 120px;\n    font-size: 15px;\n    cursor: pointer;\n    border: 1px solid var(--secondary);\n    border-radius: 2px;\n}\n\n.again:hover {\n    background-color: var(--secondary);\n}\n\n.win {\n    color: var(--success);\n}\n\n.lose {\n    color: var(--danger);\n}\n\n.ai {\n    background-color: var(--light);\n}\n\n.ai:hover {\n    background-color: var(--warning);\n}\n\n.board { \n    display: grid;\n    grid-template-rows: repeat(15, 1fr);\n    grid-template-columns: repeat(15, 1fr);\n    gap: 1px;\n    height: 335px;\n    width: 335px;\n    background-color: var(--dark);\n    border: 2px solid var(--dark);\n}\n\n.cell {\n    cursor: pointer;\n    background-color: var(--light);\n}\n\n.orientation {\n    font-family: inherit;\n    height: 35px;\n    min-width: 135px;\n    background-color: var();\n}\n\n.error {\n    text-align: center;\n    color: var(--danger);\n    height: 16px;\n}\n\n.preview-invalid {\n    background-color: var(--danger);\n}\n\n.preview-valid {\n    background-color: var(--success);\n}\n\n.position-mark {\n    background-color: var(--dark);\n}\n\n.miss {\n    background-color: var(--primary);\n}\n\n.hit {\n    background-color: var(--danger);\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 20px;\n}\n\nfooter i {\n    color: var(--dark);\n    font-size: 25px;\n    transition: 0.2s ease-in-out;\n}\n\nfooter i:hover {\n    transform: scale(1.2) rotate(360deg);\n}\n\n@media (min-width: 800px) {\n    main {\n        flex-direction: row;\n        gap: 40px;\n    }\n}\n\n@media (min-width: 1080px) {\n    .board {\n        height: 500px;\n        width: 500px;\n    }\n\n    main {\n        gap: 50px;\n    }\n\n    main > div {\n        min-height: 546px;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ \"./src/style/styles.css\");\n/* harmony import */ var _modules_gameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameLogic */ \"./src/modules/gameLogic.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n    _modules_gameLogic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeGame()\n})\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/modules/gameLogic.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n\n\nfunction createBoard (board, boardData, player) {\n  for (let i = 0; i < 15; i++) {\n    for (let j = 0; j < 15; j++) {\n      const cell = document.createElement('div')\n      cell.classList.add('cell')\n      cell.setAttribute('data-key', `[${i},${j}]`)\n      if (player) {\n        if (boardData[i][j] !== null) {\n          cell.classList.add('position-mark')\n        }\n        cell.classList.add('player')\n      } else if (player === false) {\n        cell.classList.add('ai')\n      }\n      board.append(cell)\n    }\n  }\n}\n\nfunction promptPlaceShip() {\n  const main = document.querySelector('main')\n\n  const container = document.createElement('div')\n  const orientation = `<button class=\"orientation\" data-key=\"horizontal\">Horizontal</button>`\n\n  const error = document.createElement('p')\n  const board = document.createElement('div')\n\n  createBoard(board)\n\n  board.classList.add('board')\n  error.classList.add('error')\n\n  container.innerHTML += orientation\n  container.append(board, error)\n  main.append(container)\n\n  changeShipOrientation()\n}\n\nfunction getShipOrientation() {\n  const button = document.querySelector('.orientation')\n  const orientation = button.getAttribute('data-key')\n  return orientation\n}\n\nfunction changeShipOrientation() {\n  const button = document.querySelector('.orientation')\n\n  button.addEventListener('click', function () {\n    const value = this.getAttribute('data-key') === 'horizontal' ? 'vertical' : 'horizontal'\n    this.textContent = value\n    this.setAttribute('data-key', value)\n  })\n}\n\nfunction updateShipPlacementPreview (length, coord, orientation, board, remove) {\n  const valid = 'preview-valid'\n  const invalid = 'preview-invalid'\n  let isValid = valid\n  \n  if (!_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isValidPosition(length, coord[0], coord[1], orientation, board)) {\n    isValid = invalid\n    if (orientation === 'horizontal') {\n      length = Math.min(length, 15 - coord[1]);\n    } else {\n      length = Math.min(length, 15 - coord[0]);\n    }\n  }\n  for (let i = 0; i < length; i++) {\n    let position\n    if (orientation === 'horizontal') {\n      position = document.querySelector(`div[data-key=\"[${coord[0]},${coord[1] + i}]\"]`)\n    } else {\n      position = document.querySelector(`div[data-key=\"[${coord[0] + i},${coord[1]}]\"]`)\n    }\n    \n    if (remove) {\n      position.classList.remove(valid, invalid)\n    } else {\n      position.classList.toggle(isValid)\n    }\n  }\n}\n\nfunction markPlacedShip (coord, length, orientation) {\n  const mark = 'position-mark'\n  for (let i = 0; i < length; i++) {\n    let position\n    if (orientation === 'horizontal') {\n      position = document.querySelector(`div[data-key=\"[${coord[0]},${coord[1] + i}]\"]`)\n    } else {\n      position = document.querySelector(`div[data-key=\"[${coord[0] + i},${coord[1]}]\"]`)\n    }\n    position.classList.add(mark)\n  }\n}\n\nfunction invalidMessage(message = '') {\n  const error = document.querySelector('.error')\n  error.textContent = message\n}\n\nfunction createGameBoards (player) {\n  const main = document.querySelector('main')\n  clearMain(main)\n\n  const playerBoard = document.createElement('div')\n  const playerName = document.createElement('p')\n  const aiBoard = document.createElement('div')\n  const aiName = document.createElement('p')\n  const playerArea = document.createElement('div')\n  const aiArea = document.createElement('div')\n  const message = document.createElement('p')\n  message.classList.add('error')\n  \n  \n  playerName.textContent = player.playerName\n  aiName.textContent = 'AI'\n  playerBoard.classList.add('board')\n  aiBoard.classList.add('board')\n\n  createBoard(playerBoard, player.playerBoard.board, true)\n  createBoard(aiBoard, player.aiBoard.board, false)\n\n  playerArea.append(playerName, playerBoard)\n  aiArea.append(aiName, aiBoard, message)\n\n  main.append(playerArea, aiArea)\n}\n\nfunction markHitArea (row, col, boardData, position) {\n  if (boardData[row][col] !== null) {\n    position.classList.add('hit')\n  } else {\n    position.classList.add('miss')\n  }\n}\n\nfunction winMessage (win) {\n  const main = document.querySelector('main')\n  clearMain(main)\n\n  const container = document.createElement('div')\n  const message = document.createElement('p')\n  const button = document.createElement('button')\n  container.classList.add('message')\n  button.textContent = 'again'\n  button.classList.add('again')\n  container.append(message,button)\n\n  if (win) {\n    message.textContent = `you win!`\n    message.classList.add('win')\n  } else {\n    message.textContent = 'you lose :('\n    message.classList.add('lose')\n  }\n\n  main.append(container)\n}\n\nfunction clearMain(main) {\n  main.innerHTML = ''\n}\n\nfunction playAgain () {\n  const button = document.querySelector('.again')\n  const main = document.querySelector('main')\n  button.addEventListener('click', () => {\n    clearMain(main)\n    _gameLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeGame()\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  promptPlaceShip,\n  getShipOrientation,\n  changeShipOrientation,\n  updateShipPlacementPreview,\n  invalidMessage,\n  markPlacedShip,\n  createGameBoards,\n  markHitArea,\n  winMessage,\n  playAgain\n});\n\n//# sourceURL=webpack://battleship/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/gameLogic.js":
/*!**********************************!*\
  !*** ./src/modules/gameLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n\n\n// Prompt player to ship their ships (6 ships)\nfunction getPlayerShipPosition () {\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].promptPlaceShip()\n  const user = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  const board = user.playerBoard.board\n  const positions = document.querySelectorAll('.cell')\n  let currShipLength = 6\n\n  function handleMouseOver (e) {\n    const coord = JSON.parse(e.target.dataset.key)\n    const orientation = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getShipOrientation()\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateShipPlacementPreview(currShipLength, coord, orientation, board)\n  }\n\n  function handleMouseOut (e) {\n    const coord = JSON.parse(e.target.dataset.key)\n    const orientation = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getShipOrientation()\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateShipPlacementPreview(currShipLength, coord, orientation, board, true)\n  }\n\n  function handleClick (e) {\n    const coord = JSON.parse(e.target.dataset.key)\n    const orientation = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getShipOrientation()\n    // if the ship is invalid, show a message to the player\n    if (!user.playerBoard.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(currShipLength), coord[0], coord[1], orientation)) {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].invalidMessage('Invalid ship placement!')\n    } else {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].invalidMessage('')\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].markPlacedShip(coord, currShipLength, orientation)\n      currShipLength--\n      // if all ships is placed, show the player board and the ai board(ai ships is hidden and will show only the part of the ship that's been hit)\n      if (currShipLength === 0) {\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGameBoards(user)\n        beginGame(user)\n      }\n    }\n  }\n\n  positions.forEach(position => {\n    // preview ship position\n    position.addEventListener('mouseover', handleMouseOver)\n    // remove preview\n    position.addEventListener('mouseout', handleMouseOut)\n    // place ship on the selected position\n    position.addEventListener('click', handleClick)\n  })\n}\n\n// When the player is finish setting up their ship position the game starts\nfunction beginGame (user) {\n  const aiBoard = document.querySelectorAll('.ai')\n  let turn = false\n\n  function handleClick (e, position) {\n    const [row, col] = JSON.parse(e.target.dataset.key)\n    const aiBoardData = user.aiBoard.board\n    if (aiBoardData[row][col] === false) {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].invalidMessage('Coordinates already hit')\n    } else {  \n      handlePlayerTurn(row, col, aiBoardData, position)\n    }\n    if (turn) {\n      handleAiTurn()\n    }\n  }\n\n  function handlePlayerTurn (row, col, aiBoardData, position) {\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].invalidMessage('')\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].markHitArea(row, col, aiBoardData, position)\n    user.playerAttack(row,col)\n    if (user.aiBoard.isShipsSunken()) {\n      turn = false\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].winMessage(true)\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playAgain()\n    } else {\n      turn = true\n    }\n  }\n\n  function handleAiTurn () {\n    const [row, col] = user.aiAttack()\n    const playerBoardData = user.playerBoard.board\n    const position = document.querySelector(`div[data-key=\"[${row},${col}]\"]`)\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].markHitArea(row, col, playerBoardData, position)\n    user.playerBoard.receiveAttack(row, col)\n    if (user.playerBoard.isShipsSunken()) {\n      turn = true\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].winMessage(false)\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playAgain()\n    } else {\n      turn = false\n    }\n  }\n\n  aiBoard.forEach(position => {\n    position.addEventListener('click', function (e) {\n      handleClick(e, position)\n    })\n  })  \n}\n\n// Starts game\nfunction initializeGame () {\n  getPlayerShipPosition();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  initializeGame,\n});\n\n//# sourceURL=webpack://battleship/./src/modules/gameLogic.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n\nfunction gameboard() {\n  const shipList = []\n  const boardSize = 15\n  const board = []\n  function initializeBoard(boardSize) {\n    for (let i = 0; i < boardSize; i++) {\n      board.push(Array(boardSize).fill(null))\n    }\n  }\n\n  // check if input row and col is in range of board\n  initializeBoard(boardSize)\n  return {\n    board,\n\n    // return true if the ship is placed on the position\n    placeShip: function (ship, row, col, orientation = 'horizontal') {\n      // check if the ship can fit in the position or if it is occupied\n      if (!_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidPosition(ship.length, row, col, orientation, board)) {\n        return false\n      }\n\n      // Make the position as the reference to the ship\n      shipList.push(ship)\n      for (let i = 0; i < ship.length; i++) {\n        const currentRow = orientation === 'horizontal' ? row : row + i\n        const currentCol = orientation === 'vertical' ? col : col + i\n\n        board[currentRow][currentCol] = ship\n      }\n\n      // return true if ship is on placed\n      return true\n    },\n\n    // receive attack to the players board\n    receiveAttack: function (row, col) {\n      // Check if row and col is in range\n      if (!_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isInRange(row) || !_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isInRange(col)) {\n        throw new Error('Invalid attack coordinates')\n      }\n      // if coordinate is null turn it to false\n      const coord = board[row][col]\n      if (coord === null) {\n        board[row][col] = false\n        // if false alert the user that the coordinate is already hit\n      } else if (coord === false) {\n        throw new Error('Coodinates is already hit!')\n        // else add hit to the ship and false the coordinate\n      } else {\n        board[row][col].hit()\n        board[row][col] = false\n      }\n    },\n\n    // Check if the ships on playersboard is sunken\n    isShipsSunken: function () {\n      return shipList.every(ship => ship.isSunken() === true)\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// check if input row and col is in range of 15 x 15 board\nfunction isInRange (position) {\n  return position >= 0 && position < 15\n}\n\nfunction isValidPosition (shipLength, row, col, orientation, board) {\n  const rowEnd = orientation === 'horizontal' ? row : row + shipLength - 1\n  const colEnd = orientation === 'vertical' ? col : col + shipLength - 1\n\n  // Check if the ships length fit in the selected position\n  if (!isInRange(rowEnd) || !isInRange(colEnd)) {\n    return false\n  }\n  // Check if position is occupied or is next to a ship (ships should be 1 'square' apart)\n  for (let i = -1; i <= shipLength; i++) {\n    for (let j = -1; j <= 1; j++) {\n      const currentRow = orientation === 'horizontal' ? row + j : row + i\n      const currentCol = orientation === 'vertical' ? col + j : col + i\n\n      if (isInRange(currentRow) && isInRange(currentCol)) {\n        if (board[currentRow][currentCol] !== null) {\n          return false\n        }\n      }\n    }\n  }\n  return true\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  isInRange,\n  isValidPosition\n});\n\n//# sourceURL=webpack://battleship/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n\nfunction player (name = 'You') {\n  const playerName = name\n  const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  const aiBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n  function randomNumber (range) {\n    return Math.floor(Math.random() * range)\n  }\n\n  function positionAIShips() {\n    const orientation = ['horizontal', 'vertical']\n    let shipsCount = 6\n    while (shipsCount > 0) {\n      const randomPick = orientation[Math.floor(Math.random() * 2)]\n      const row = randomNumber(15)\n      const col = randomNumber(15)\n      if (aiBoard.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shipsCount), row, col, randomPick)) {\n        shipsCount--\n      }\n    }\n  }\n\n  positionAIShips()\n\n  return {\n    playerName,\n    playerBoard,\n    aiBoard,\n    playerAttack: function (row, col) {\n      aiBoard.receiveAttack(row, col)\n    },\n    aiAttack: function () {\n      let row = randomNumber(15)\n      let col = randomNumber(15)\n      while (playerBoard.board[row][col] === false) {\n        row = randomNumber(15)\n        col = randomNumber(15)\n      }\n      return [row, col]\n    }\n  }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ship (length) {\n    let hitCount = 0\n    return {\n        length, \n        hitCount,\n        hit: function () {\n            this.hitCount++\n        },\n        isSunken: function () {\n            return this.hitCount === this.length\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/style/font/ethnocentric rg.otf":
/*!********************************************!*\
  !*** ./src/style/font/ethnocentric rg.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be90612cdf104f2057e4.otf\";\n\n//# sourceURL=webpack://battleship/./src/style/font/ethnocentric_rg.otf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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