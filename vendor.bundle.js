webpackJsonpac__name_([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["a"] = __decorate;
/* unused harmony export __param */
/* harmony export (immutable) */ __webpack_exports__["b"] = __metadata;
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
};

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), q = [], c, i;
    return i = { next: verb("next"), "throw": verb("throw"), "return": verb("return") }, i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { return function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]), next(); }); }; }
    function next() { if (!c && q.length) resume((c = q.shift())[0], c[1]); }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(c[3], e); } }
    function step(r) { r.done ? settle(c[2], r) : r.value[0] === "yield" ? settle(c[2], { value: r.value[1], done: false }) : Promise.resolve(r.value[1]).then(r.value[0] === "delegate" ? delegate : fulfill, reject); }
    function delegate(r) { step(r.done ? r : { value: ["yield", r.value], done: false }); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { c = void 0, f(v), next(); }
};

function __asyncDelegator(o) {
    var i = { next: verb("next"), "throw": verb("throw", function (e) { throw e; }), "return": verb("return", function (v) { return { value: v, done: true }; }) };
    return o = __asyncValues(o), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { return function (v) { return { value: ["delegate", (o[n] || f).call(o, v)], done: false }; }; }
};

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = extend;
/* harmony export (immutable) */ __webpack_exports__["d"] = arrayUnion;
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsKey;
/* unused harmony export toStyleString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseCompleter; });
/* harmony export (immutable) */ __webpack_exports__["c"] = noop;
/**
 * Simple object extend
 * @param m1
 * @param m2
 * @returns {{}}
 */
/**
 * Simple object extend
 * @param m1
 * @param m2
 * @returns {{}}
 */ function extend(m1, m2) {
    var m = {};
    for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
            m[attr] = m1[attr];
        }
    }
    for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
            m[attr] = m2[attr];
        }
    }
    return m;
}
/**
 * Simple, not optimized, array union of unique values.
 * @param arr1
 * @param arr2
 * @returns {T[]|any[]|any[][]|any[]}
 */
function arrayUnion(arr1, arr2) {
    return arr1
        .concat(arr2.filter(function (v) { return arr1.indexOf(v) === -1; }));
}
/**
 * Returns true if the config supports a given key.
 * @param key
 * @returns {boolean}
 */
function supportsKey(keyCode, config) {
    if (!Array.isArray(config))
        return config === null ? false : true;
    return config.indexOf(keyCode) > -1;
}
/**
 * Given an object representing a key/value map of css properties, returns a valid css string
 * representing the object.
 * Example:
 * console.log(toStyleString({
 *     position: 'absolute',
 *     width: '100%',
 *     height: '100%',
 *     top: '0',
 *     left: '0',
 *     right: '0',
 *     bottom: '0'
 * }));
 * // position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0
 * @param obj
 * @returns {string}
 */
function toStyleString(obj) {
    return Object.getOwnPropertyNames(obj)
        .map(function (k) { return k + ":" + obj[k]; })
        .join(';');
    // let objStr = JSON.stringify(obj);
    // return objStr.substr(1, objStr.length - 2)
    //     .replace(/,/g, ';')
    //     .replace(/"/g, '');
}
var PromiseCompleter = (function () {
    function PromiseCompleter() {
        var _this = this;
        this.promise = new Promise(function (res, rej) {
            _this.resolve = res;
            _this.reject = rej;
        });
    }
    return PromiseCompleter;
}());

function noop() { }
//# sourceMappingURL=utils.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__framework_utils__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__framework_utils__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__framework_utils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_createComponent__ = __webpack_require__(17);
/* unused harmony reexport createComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_errors__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_tokens__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__models_tokens__["b"]; });
/* unused harmony reexport OverlayRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_index__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__providers_index__["a"]; });
/* unused harmony reexport DOMOverlayRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_overlay_context__ = __webpack_require__(36);
/* unused harmony reexport overlayConfigFactory */
/* unused harmony reexport OverlayContext */
/* unused harmony reexport OverlayContextBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__overlay_index__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__overlay_index__["a"]; });
/* unused harmony reexport ModalOverlay */
/* unused harmony reexport OverlayDialogBoundary */
/* unused harmony reexport OverlayTarget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_modal_context__ = __webpack_require__(35);
/* unused harmony reexport DEFAULT_VALUES */
/* unused harmony reexport ModalContext */
/* unused harmony reexport ModalContextBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_modal_open_context__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_10__models_modal_open_context__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__models_modal_open_context__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_index__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__components_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_11__components_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular2_modal_module__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_12__angular2_modal_module__["a"]; });













//# sourceMappingURL=index.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_errors__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogRef; });



/**
 * API to an open modal window.
 */
var DialogRef = (function () {
    function DialogRef(overlay, context) {
        this.overlay = overlay;
        this.context = context;
        this._resultDeferred = new __WEBPACK_IMPORTED_MODULE_1__framework_utils__["a" /* PromiseCompleter */]();
        this._onDestroy = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.onDestroy = this._onDestroy.asObservable();
    }
    Object.defineProperty(DialogRef.prototype, "result", {
        /**
         * A Promise that is resolved on a close event and rejected on a dismiss event.
         * @returns {Promise<T>|any|*|Promise<any>}
         */
        get: function () {
            return this._resultDeferred.promise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set a close/dismiss guard
     * @param g
     */
    DialogRef.prototype.setCloseGuard = function (guard) {
        this.closeGuard = guard;
    };
    /**
     *  Close the modal with a return value, i.e: result.
     */
    DialogRef.prototype.close = function (result) {
        var _this = this;
        if (result === void 0) { result = null; }
        var _close = function () {
            _this.destroy();
            _this._resultDeferred.resolve(result);
        };
        this._fireHook('beforeClose')
            .then(function (value) { return value !== true && _close(); })
            .catch(_close);
    };
    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    DialogRef.prototype.dismiss = function () {
        var _this = this;
        var _dismiss = function () {
            _this.destroy();
            _this._resultDeferred.promise.catch(function () { });
            _this._resultDeferred.reject();
        };
        this._fireHook('beforeDismiss')
            .then(function (value) { return value !== true && _dismiss(); })
            .catch(_dismiss);
    };
    /**
     * Gracefully close the overlay/dialog with a rejected result.
     * Does not trigger canDestroy on the overlay.
     */
    DialogRef.prototype.bailOut = function () {
        if (this.destroyed !== true) {
            this.destroyed = true;
            this._onDestroy.next(null);
            this._onDestroy.complete();
            this._resultDeferred.reject(new __WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* DialogBailOutError */]());
        }
    };
    DialogRef.prototype.destroy = function () {
        var _this = this;
        if (this.destroyed !== true) {
            this.destroyed = true;
            if (typeof this.overlayRef.instance.canDestroy === 'function') {
                this.overlayRef.instance.canDestroy()
                    .catch(function () { })
                    .then(function () { return _this._destroy(); });
            }
            else {
                this._destroy();
            }
        }
    };
    DialogRef.prototype._destroy = function () {
        this._onDestroy.next(null);
        this._onDestroy.complete();
        this.overlayRef.destroy();
    };
    DialogRef.prototype._fireHook = function (name) {
        var gurad = this.closeGuard, fn = gurad && typeof gurad[name] === 'function' && gurad[name];
        return Promise.resolve(fn ? fn.call(gurad) : false);
    };
    return DialogRef;
}());

//# sourceMappingURL=dialog-ref.js.map

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VEXDialogButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DialogFormModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormDropIn; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A Dialog is a
 */
var VEXDialogButtons = (function () {
    function VEXDialogButtons() {
        /**
         * Emitted when a button was clicked
         * @type {EventEmitter<VEXButtonClickEvent>}
         */
        this.onButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VEXDialogButtons.prototype.onClick = function (btn, $event) {
        $event.stopPropagation();
        this.onButtonClick.emit({ btn: btn, $event: $event });
    };
    return VEXDialogButtons;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], VEXDialogButtons.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], VEXDialogButtons.prototype, "onButtonClick", void 0);
VEXDialogButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vex-dialog-buttons',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "<div class=\"vex-dialog-buttons\">\n    <button type=\"button\" \n         *ngFor=\"let btn of buttons;\"\n         [class]=\"btn.cssClass\"\n         (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
    })
], VEXDialogButtons);

/**
 * A Dialog with customized buttons wrapped in a form.
 *
 */
var DialogFormModal = (function () {
    function DialogFormModal(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    DialogFormModal.prototype.onButtonClick = function ($event) {
        $event.btn.onClick(this, $event.$event);
    };
    return DialogFormModal;
}());
DialogFormModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-dialog',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "<form class=\"vex-dialog-form\">\n    <template [swapCmp]=\"context.content\"></template>\n    <vex-dialog-buttons [buttons]=\"context.buttons\"\n                        (onButtonClick)=\"onButtonClick($event)\"></vex-dialog-buttons>\n</form>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["c" /* DialogRef */]])
], DialogFormModal);

var FormDropIn = (function () {
    function FormDropIn(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    return FormDropIn;
}());
FormDropIn = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'drop-in-dialog',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "<div class=\"vex-dialog-message\">{{context.message}}</div>\n <div *ngIf=\"context.showInput\" class=\"vex-dialog-input\">\n   <input #input\n          autofocus\n          name=\"vex\" \n          type=\"text\" \n          class=\"vex-dialog-prompt-input\"\n           (change)=\"context.defaultResult = input.value\" \n          placeholder=\"{{context.placeholder}}\">\n </div>\n <div *ngIf=\"context.showCloseButton\" \n      [class]=\"context.closeClassName\"\n      (click)=\"dialog.dismiss()\"></div>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["c" /* DialogRef */]])
], FormDropIn);

//# sourceMappingURL=dialog-form-modal.js.map

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_createComponent__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDynamicComponent; });



var BROWSER_PREFIX = ['webkit', 'moz', 'MS', 'o', ''];
function register(eventName, element, cb) {
    BROWSER_PREFIX.forEach(function (p) {
        element.addEventListener(p ? p + eventName : eventName.toLowerCase(), cb, false);
    });
}
/**
 * A base class for supporting dynamic components.
 * There are 3 main support areas:
 * 1 - Easy wrapper for dynamic styling via CSS classes and inline styles.
 * 2 - Easy wrapper for interception of transition/animation end events.
 * 3 - Easy wrapper for component creation and injection.
 *
 * Dynamic css is done via direct element manipulation (via renderer), it does not use change detection
 * or binding. This is to allow better control over animation.
 *
 * Animation support is limited, only transition/keyframes END even are notified.
 * The animation support is needed since currently the angular animation module is limited as well and
 * does not support CSS animation that are not pre-parsed and are not in the styles metadata of a component.
 *
 * Capabilities: Add/Remove styls, Add/Remove classes, listen to animation/transition end event,
 * add components
 */
var BaseDynamicComponent = (function () {
    function BaseDynamicComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    BaseDynamicComponent.prototype.activateAnimationListener = function () {
        var _this = this;
        if (this.animationEnd)
            return;
        this.animationEnd = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.animationEnd$ = this.animationEnd.asObservable();
        register('TransitionEnd', this.el.nativeElement, function (e) { return _this.onEnd(e); });
        register('AnimationEnd', this.el.nativeElement, function (e) { return _this.onEnd(e); });
    };
    /**
     * Set a specific inline style on the overlay host element.
     * @param prop The style key
     * @param value The value, undefined to remove
     * @returns {ModalOverlay}
     */
    BaseDynamicComponent.prototype.setStyle = function (prop, value) {
        this.renderer.setElementStyle(this.el.nativeElement, prop, value);
        return this;
    };
    BaseDynamicComponent.prototype.forceReflow = function () {
        this.el.nativeElement.offsetWidth;
    };
    BaseDynamicComponent.prototype.addClass = function (css, forceReflow) {
        var _this = this;
        if (forceReflow === void 0) { forceReflow = false; }
        css.split(' ')
            .forEach(function (c) { return _this.renderer.setElementClass(_this.el.nativeElement, c, true); });
        if (forceReflow)
            this.forceReflow();
    };
    BaseDynamicComponent.prototype.removeClass = function (css, forceReflow) {
        var _this = this;
        if (forceReflow === void 0) { forceReflow = false; }
        css.split(' ')
            .forEach(function (c) { return _this.renderer.setElementClass(_this.el.nativeElement, c, false); });
        if (forceReflow)
            this.forceReflow();
    };
    BaseDynamicComponent.prototype.ngOnDestroy = function () {
        if (this.animationEnd && !this.animationEnd.closed) {
            this.animationEnd.complete();
        }
    };
    BaseDynamicComponent.prototype.myAnimationEnd$ = function () {
        var _this = this;
        return this.animationEnd$
            .filter(function (e) { return e.target === _this.el.nativeElement; });
    };
    /**
     * Add a component, supply a view container ref.
     * Note: The components vcRef will result in a sibling.
     * @param component The component to add
     * @param vcRef The container to add to
     * @param bindings Bindings to use (added on top of the ViewContainerRef)
     * @returns {Promise<ComponentRef<any>>}
     */
    BaseDynamicComponent.prototype._addComponent = function (instructions) {
        var cmpRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__framework_createComponent__["a" /* createComponent */])(instructions);
        cmpRef.changeDetectorRef.detectChanges();
        return cmpRef;
    };
    BaseDynamicComponent.prototype.onEnd = function (event) {
        if (!this.animationEnd.closed) {
            this.animationEnd.next(event);
        }
    };
    return BaseDynamicComponent;
}());

//# sourceMappingURL=base-dynamic-component.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swap_component_directive__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__swap_component_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_backdrop__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__css_backdrop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_dialog_container__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__css_dialog_container__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = createComponent;

function createComponent(instructions) {
    var injector = getInjector(instructions);
    return instructions.vcRef.createComponent(injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]).resolveComponentFactory(instructions.component), instructions.vcRef.length, injector, instructions.projectableNodes);
}
function getInjector(instructions) {
    var ctxInjector = instructions.injector || instructions.vcRef.parentInjector;
    return Array.isArray(instructions.bindings) && instructions.bindings.length > 0 ?
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(instructions.bindings, ctxInjector) : ctxInjector;
}
//# sourceMappingURL=createComponent.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DROP_IN_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayRenderer; });
var DROP_IN_TYPE;
(function (DROP_IN_TYPE) {
    DROP_IN_TYPE[DROP_IN_TYPE["alert"] = 0] = "alert";
    DROP_IN_TYPE[DROP_IN_TYPE["prompt"] = 1] = "prompt";
    DROP_IN_TYPE[DROP_IN_TYPE["confirm"] = 2] = "confirm";
})(DROP_IN_TYPE || (DROP_IN_TYPE = {}));
var OverlayRenderer = (function () {
    function OverlayRenderer() {
    }
    return OverlayRenderer;
}());

//# sourceMappingURL=tokens.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overlay_directives__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_component__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__overlay_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_service__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__overlay_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_modal_renderer__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dom_modal_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outside_event_plugin__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__outside_event_plugin__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = privateKey;
/* unused harmony export setAssignMethod */
/* unused harmony export setAssignAlias */
/* unused harmony export FluentAssignFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FluentAssign; });
var PRIVATE_PREFIX = '$$';
var RESERVED_REGEX = /^(\$\$).*/;
function validateMethodName(name) {
    if (!name) {
        throw new Error("Illegal method name. Empty method name is not allowed");
    }
    else if (name in this) {
        throw new Error("A member name '" + name + "' already defined.");
    }
}
/**
 * Returns a list of assigned property names (non private)
 * @param subject
 * @returns {string[]}
 */
function getAssignedPropertyNames(subject) {
    return Object.getOwnPropertyNames(subject)
        .filter(function (name) { return RESERVED_REGEX.test(name); })
        .map(function (name) { return name.substr(2); });
}
function privateKey(name) {
    return PRIVATE_PREFIX + name;
}
function objectDefinePropertyValue(obj, propertyName, value) {
    Object.defineProperty(obj, propertyName, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: value
    });
}
/**
 * Given a FluentAssign instance, apply all of the supplied default values so calling
 * instance.toJSON will return those values (does not create a setter function)
 * @param instance
 * @param defaultValues
 */
function applyDefaultValues(instance, defaultValues) {
    Object.getOwnPropertyNames(defaultValues)
        .forEach(function (name) { return instance[privateKey(name)] = defaultValues[name]; });
}
/**
 * Create a function for setting a value for a property on a given object.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param writeOnce If true will allow writing once (default: false)
 *
 * Example:
 * let obj = new FluentAssign<any>;
 * setAssignMethod(obj, 'myProp');
 * obj.myProp('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 *
 *
 * let obj = new FluentAssign<any>;
 * setAssignMethod(obj, 'myProp', true); // applying writeOnce
 * obj.myProp('someValue');
 * obj.myProp('someValue'); // ERROR: Overriding config property 'myProp' is not allowed.
 */
function setAssignMethod(obj, propertyName, writeOnce) {
    var _this = this;
    if (writeOnce === void 0) { writeOnce = false; }
    validateMethodName.call(obj, propertyName);
    var key = privateKey(propertyName);
    objectDefinePropertyValue(obj, propertyName, function (value) {
        if (writeOnce && _this.hasOwnProperty(key)) {
            throw new Error("Overriding config property '" + propertyName + "' is not allowed.");
        }
        obj[key] = value;
        return obj;
    });
}
/**
 * Create a function for setting a value that is an alias to an other setter function.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param srcPropertyName The name of the property on the object this alias points to
 * @param hard If true, will set a readonly property on the object that returns
 *        the value of the source property. Default: false
 *
 * Example:
 * let obj = new FluentAssign<any> ;
 * setAssignMethod(obj, 'myProp');
 * setAssignAlias(obj, 'myPropAlias', 'myProp');
 * obj.myPropAlias('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 * result.myPropAlias // undefined
 *
 *
 * let obj = new FluentAssign<any> ;
 * setAssignMethod(obj, 'myProp');
 * setAssignAlias(obj, 'myPropAlias', 'myProp', true); // setting a hard alias.
 * obj.myPropAlias('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 * result.myPropAlias // someValue
 */
function setAssignAlias(obj, propertyName, srcPropertyName, hard) {
    if (hard === void 0) { hard = false; }
    validateMethodName.call(obj, propertyName);
    objectDefinePropertyValue(obj, propertyName, function (value) {
        obj[srcPropertyName](value);
        return obj;
    });
    if (hard === true) {
        var key = privateKey(propertyName), srcKey_1 = privateKey(srcPropertyName);
        Object.defineProperty(obj, key, {
            configurable: false,
            enumerable: false,
            get: function () { return obj[srcKey_1]; }
        });
    }
}
/**
 * Represent a fluent API factory wrapper for defining FluentAssign instances.
 */
var FluentAssignFactory = (function () {
    function FluentAssignFactory(fluentAssign) {
        this._fluentAssign =
            fluentAssign instanceof FluentAssign ? fluentAssign : new FluentAssign();
    }
    /**
     * Create a setter method on the FluentAssign instance.
     * @param name The name of the setter function.
     * @param defaultValue If set (not undefined) set's the value on the instance immediately.
     * @returns {FluentAssignFactory}
     */
    FluentAssignFactory.prototype.setMethod = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        setAssignMethod(this._fluentAssign, name);
        if (defaultValue !== undefined) {
            this._fluentAssign[name](defaultValue);
        }
        return this;
    };
    Object.defineProperty(FluentAssignFactory.prototype, "fluentAssign", {
        /**
         * The FluentAssign instance.
         * @returns {FluentAssign<T>}
         */
        get: function () {
            return this._fluentAssign;
        },
        enumerable: true,
        configurable: true
    });
    return FluentAssignFactory;
}());

/**
 * Represent an object where every property is a function representing an assignment function.
 * Calling each function with a value will assign the value to the object and return the object.
 * Calling 'toJSON' returns an object with the same properties but this time representing the
 * assigned values.
 *
 * This allows setting an object in a fluent API manner.
 * Example:
 let fluent = new FluentAssign<any>(undefined, ['some', 'went']);
 fluent.some('thing').went('wrong').toJSON();
 // { some: 'thing', went: 'wrong' }
 */
var FluentAssign = (function () {
    /**
     *
     * @param defaultValues An object representing default values for the underlying object.
     * @param initialSetters A list of initial setters for this FluentAssign.
     * @param baseType the class/type to create a new base. optional, {} is used if not supplied.
     */
    function FluentAssign(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        var _this = this;
        if (Array.isArray(defaultValues)) {
            defaultValues.forEach(function (d) { return applyDefaultValues(_this, d); });
        }
        else if (defaultValues) {
            applyDefaultValues(this, defaultValues);
        }
        if (Array.isArray(initialSetters)) {
            initialSetters.forEach(function (name) { return setAssignMethod(_this, name); });
        }
        if (baseType) {
            this.__fluent$base__ = baseType;
        }
    }
    /**
     * Returns a FluentAssignFactory<FluentAssign<T>> ready to define a FluentAssign type.
     * @param defaultValues An object representing default values for the instance.
     * @param initialSetters A list of initial setters for the instance.
     * @returns {FluentAssignFactory<T>}
     */
    FluentAssign.compose = function (defaultValues, initialSetters) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        return FluentAssign.composeWith(new FluentAssign(defaultValues, initialSetters));
    };
    /**
     * Returns a FluentAssignFactory<Z> where Z is an instance of FluentAssign<?> or a derived
     * class of it.
     * @param fluentAssign An instance of FluentAssign<?> or a derived class of FluentAssign<?>.
     * @returns {any}
     */
    FluentAssign.composeWith = function (fluentAssign) {
        return new FluentAssignFactory(fluentAssign);
    };
    FluentAssign.prototype.toJSON = function () {
        var _this = this;
        return getAssignedPropertyNames(this)
            .reduce(function (obj, name) {
            var key = privateKey(name);
            // re-define property descriptors (we dont want their value)
            var propDesc = Object.getOwnPropertyDescriptor(_this, key);
            if (propDesc) {
                Object.defineProperty(obj, name, propDesc);
            }
            else {
                obj[name] = _this[key];
            }
            return obj;
        }, this.__fluent$base__ ? new this.__fluent$base__() : {});
    };
    return FluentAssign;
}());

//# sourceMappingURL=fluent-assign.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogBailOutError; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DialogBailOutError = (function (_super) {
    __extends(DialogBailOutError, _super);
    function DialogBailOutError(value) {
        var _this = _super.call(this) || this;
        if (!value) {
            value = 'Dialog was forced to close by an unknown source.';
        }
        _this.message = value;
        return _this;
    }
    return DialogBailOutError;
}(Error));

//# sourceMappingURL=errors.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_context__ = __webpack_require__(36);
/* unused harmony export DEFAULT_VALUES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContextBuilder; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var DEFAULT_VALUES = {};
var DEFAULT_SETTERS = [
    'message'
];
var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(__WEBPACK_IMPORTED_MODULE_1__overlay_context__["a" /* OverlayContext */]));

/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
var ModalContextBuilder = (function (_super) {
    __extends(ModalContextBuilder, _super);
    function ModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        return _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__framework_utils__["e" /* extend */])(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__framework_utils__["d" /* arrayUnion */])(DEFAULT_SETTERS, initialSetters || []), baseType) || this;
    }
    return ModalContextBuilder;
}(__WEBPACK_IMPORTED_MODULE_1__overlay_context__["b" /* OverlayContextBuilder */]));

//# sourceMappingURL=modal-context.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(6);
/* unused harmony export DEFAULT_VALUES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OverlayContextBuilder; });
/* unused harmony export overlayConfigFactory */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var DEFAULT_VALUES = {
    inElement: false,
    isBlocking: true,
    keyboard: [27],
    supportsKey: function supportsKey(keyCode) {
        return this.keyboard.indexOf(keyCode) > -1;
    }
};
var DEFAULT_SETTERS = [
    'inElement',
    'isBlocking',
    'keyboard'
];
var OverlayContext = (function () {
    function OverlayContext() {
    }
    OverlayContext.prototype.normalize = function () {
        if (this.isBlocking !== false)
            this.isBlocking = true;
        if (this.keyboard === null) {
            this.keyboard = [];
        }
        else if (typeof this.keyboard === 'number') {
            this.keyboard = [this.keyboard];
        }
        else if (!Array.isArray(this.keyboard)) {
            this.keyboard = DEFAULT_VALUES.keyboard;
        }
    };
    return OverlayContext;
}());

/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
var OverlayContextBuilder = (function (_super) {
    __extends(OverlayContextBuilder, _super);
    function OverlayContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        return _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__["e" /* extend */])(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__["d" /* arrayUnion */])(DEFAULT_SETTERS, initialSetters || []), baseType || OverlayContext // https://github.com/Microsoft/TypeScript/issues/7234
        ) || this;
    }
    /**
     * Returns an new OverlayConfig with a context property representing the data in this builder.
     * @param base A base configuration that the result will extend
     * @returns OverlayConfig
     */
    OverlayContextBuilder.prototype.toOverlayConfig = function (base) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__["e" /* extend */])(base || {}, {
            context: this.toJSON()
        });
    };
    return OverlayContextBuilder;
}(__WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__["a" /* FluentAssign */]));

/**
 * A helper to create an `OverlayConfig` on the fly.
 * Since `OverlayConfig` requires context it means a builder is needed, this process had some boilerplate.
 * When a quick, on the fly overlay config is needed use this helper to avoid that boilerplate.
 *
 * A builder is used as an API to allow setting the context and providing some operations around the modal.
 * When a developers knows the context before hand we can skip this step, this is what this factory is for.
 *
 * @param context The context for the modal
 * @param baseContextType Optional. The type/class of the context. This is the class used to init a new instance of the context
 * @param baseConfig A base configuration that the result will extend
 * @returns {OverlayConfig}
 */
function overlayConfigFactory(context, baseContextType, baseConfig) {
    return new OverlayContextBuilder(context, undefined, baseContextType).toOverlayConfig(baseConfig);
}
//# sourceMappingURL=overlay-context.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vcRefStore; });
var vcRefCollection = {};
function getVCRef(key) {
    return vcRefCollection[key] ? vcRefCollection[key].slice() : [];
}
function setVCRef(key, vcRef) {
    if (!vcRefCollection.hasOwnProperty(key)) {
        vcRefCollection[key] = [];
    }
    vcRefCollection[key].push(vcRef);
}
function delVCRef(key, vcRef) {
    if (!vcRef) {
        vcRefCollection[key] = [];
    }
    else {
        var coll = vcRefCollection[key] || [], idx = coll.indexOf(vcRef);
        if (idx > -1) {
            coll.splice(idx, 1);
        }
    }
}
/**
 * A Simple store that holds a reference to ViewContainerRef instances by a user defined key.
 * This, with the OverlayTarget directive makes it easy to block the overlay inside an element
 * without having to use the angular query boilerplate.
 * @type {{
 *  getVCRef: (function(string): ViewContainerRef),
 *  setVCRef: (function(string, ViewContainerRef): void),
 *  delVCRef: (function(string): void)
 *  }}
 */
var vcRefStore = { getVCRef: getVCRef, setVCRef: setVCRef, delVCRef: delVCRef };
//# sourceMappingURL=vc-ref-store.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tokens__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref_stack__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_vc_ref_store__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Overlay; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var _stack = new __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref_stack__["a" /* DialogRefStack */]();
var Overlay = (function () {
    function Overlay(_modalRenderer) {
        this._modalRenderer = _modalRenderer;
    }
    Object.defineProperty(Overlay.prototype, "stackLength", {
        get: function () {
            return _stack.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
    Overlay.prototype.isTopMost = function (dialogRef) {
        return _stack.indexOf(dialogRef) === _stack.length - 1;
    };
    Overlay.prototype.stackPosition = function (dialogRef) {
        return _stack.indexOf(dialogRef);
    };
    Overlay.prototype.groupStackLength = function (dialogRef) {
        return _stack.groupLength(_stack.groupOf(dialogRef));
    };
    /**
     * Creates an overlay and returns a dialog ref.
     * @param config instructions how to create the overlay
     * @param group A token to associate the new overlay with, used for reference (stacks usually)
     * @returns {DialogRef<T>[]}
     */
    Overlay.prototype.open = function (config, group) {
        var _this = this;
        var viewContainer = config.viewContainer, containers = [];
        if (typeof viewContainer === 'string') {
            containers = __WEBPACK_IMPORTED_MODULE_3__models_vc_ref_store__["a" /* vcRefStore */].getVCRef(viewContainer);
        }
        else if (Array.isArray(viewContainer)) {
            containers = viewContainer;
        }
        else if (viewContainer) {
            containers = [viewContainer];
        }
        if (!containers || !containers[0]) {
            if (!this.defaultViewContainer) {
                throw new Error('Default view container not set. Add the "defaultOverlayTarget" directive ' +
                    'to the application root component template (e.g: <span defaultOverlayTarget></span>. ' +
                    'You can also set it manually using the "Overlay" service "defaultViewContainer" property.');
            }
            containers = [this.defaultViewContainer];
        }
        return containers
            .map(function (vc) { return _this.createOverlay(config.renderer || _this._modalRenderer, vc, config, group); });
    };
    Overlay.prototype.createOverlay = function (renderer, vcRef, config, group) {
        if (config.context) {
            config.context.normalize();
        }
        var dialog = new __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__["a" /* DialogRef */](this, config.context || {});
        dialog.inElement = config.context && !!config.context.inElement;
        var cmpRef = renderer.render(dialog, vcRef, config.injector);
        Object.defineProperty(dialog, 'overlayRef', { value: cmpRef });
        _stack.pushManaged(dialog, group);
        return dialog;
    };
    return Overlay;
}());
Overlay = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_tokens__["a" /* OverlayRenderer */]])
], Overlay);

//# sourceMappingURL=overlay.service.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(40);
/* unused harmony reexport VEXModalContext */
/* unused harmony reexport VEXModalContextBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__presets_dropin_preset__ = __webpack_require__(43);
/* unused harmony reexport DropInPreset */
/* unused harmony reexport DropInPresetBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_form_modal__ = __webpack_require__(11);
/* unused harmony reexport DialogFormModal */
/* unused harmony reexport FormDropIn */
/* unused harmony reexport VEXDialogButtons */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presets_dialog_preset__ = __webpack_require__(42);
/* unused harmony reexport DialogPreset */
/* unused harmony reexport DialogPresetBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vex_module__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__vex_module__["a"]; });
/* unused harmony reexport providers */






//# sourceMappingURL=index.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VEXModalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VEXModalContextBuilder; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var DEFAULT_VALUES = {
    className: 'default',
    overlayClassName: 'vex-overlay',
    contentClassName: 'vex-content',
    closeClassName: 'vex-close'
};
var DEFAULT_SETTERS = [
    'className',
    'overlayClassName',
    'contentClassName',
    'closeClassName',
    'showCloseButton'
];
var VEXModalContext = (function (_super) {
    __extends(VEXModalContext, _super);
    function VEXModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VEXModalContext.prototype.normalize = function () {
        if (!this.className) {
            this.className = DEFAULT_VALUES.className;
        }
        if (!this.overlayClassName) {
            this.overlayClassName = DEFAULT_VALUES.overlayClassName;
        }
        if (!this.contentClassName) {
            this.contentClassName = DEFAULT_VALUES.contentClassName;
        }
        if (!this.closeClassName) {
            this.closeClassName = DEFAULT_VALUES.closeClassName;
        }
        _super.prototype.normalize.call(this);
    };
    return VEXModalContext;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["l" /* ModalOpenContext */]));

var VEXModalContextBuilder = (function (_super) {
    __extends(VEXModalContextBuilder, _super);
    function VEXModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        return _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["i" /* extend */])(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["j" /* arrayUnion */])(DEFAULT_SETTERS, initialSetters || []), baseType || VEXModalContext // https://github.com/Microsoft/TypeScript/issues/7234
        ) || this;
    }
    /**
     *
     * @aliasFor isBlocking
     */
    VEXModalContextBuilder.prototype.overlayClosesOnClick = function (value) {
        this[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["k" /* privateKey */])('isBlocking')] = !value;
        return this;
    };
    return VEXModalContextBuilder;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["m" /* ModalOpenContextBuilder */]));

//# sourceMappingURL=modal-context.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        return _super.call(this, overlay) || this;
    }
    Modal.prototype.alert = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__["a" /* DropInPresetBuilder */](this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["d" /* DROP_IN_TYPE */].alert, { isBlocking: false });
    };
    Modal.prototype.prompt = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__["a" /* DropInPresetBuilder */](this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["d" /* DROP_IN_TYPE */].prompt, {
            isBlocking: true,
            keyboard: null
        });
    };
    Modal.prototype.confirm = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__["a" /* DropInPresetBuilder */](this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["d" /* DROP_IN_TYPE */].confirm, {
            isBlocking: true,
            keyboard: null
        });
    };
    Modal.prototype.create = function (dialogRef, content, bindings) {
        var _this = this;
        var backdropRef = this.createBackdrop(dialogRef, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["e" /* CSSBackdrop */]);
        var containerRef = this.createContainer(dialogRef, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["f" /* CSSDialogContainer */], content, bindings);
        var overlay = dialogRef.overlayRef.instance;
        var backdrop = backdropRef.instance;
        var container = containerRef.instance;
        dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
        // add body class if this is the only dialog in the stack
        if (!document.body.classList.contains('vex-open')) {
            document.body.classList.add('vex-open');
        }
        overlay.addClass("vex vex-theme-" + dialogRef.context.className);
        backdrop.addClass('vex-overlay');
        container.addClass(dialogRef.context.contentClassName);
        container.setStyle('display', 'block');
        if (dialogRef.inElement) {
            overlay.setStyle('padding', '0');
            container.setStyle('margin-top', '20px');
        }
        if (containerRef.location.nativeElement) {
            containerRef.location.nativeElement.focus();
        }
        if (dialogRef.context.className === 'bottom-right-corner') {
            overlay.setStyle('overflow-y', 'hidden');
            container.setStyle('position', 'absolute');
        }
        overlay.beforeDestroy(function () {
            overlay.addClass('vex-closing');
            var completer = new __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["g" /* PromiseCompleter */]();
            var animationEnd$ = container.myAnimationEnd$();
            if (dialogRef.context.className !== 'bottom-right-corner') {
                animationEnd$ = animationEnd$.combineLatest(backdrop.myAnimationEnd$(), function (s1, s2) { return [s1, s2]; });
            }
            animationEnd$.subscribe(function (sources) {
                _this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('vex-open');
                completer.resolve();
            });
            return completer.promise;
        });
        overlay.setClickBoundary(containerRef.location.nativeElement);
        return dialogRef;
    };
    return Modal;
}(__WEBPACK_IMPORTED_MODULE_3_angular2_modal__["b" /* Modal */]));
Modal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_modal__["h" /* Overlay */]])
], Modal);

//# sourceMappingURL=modal.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_form_modal__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogPresetBuilder; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var DEFAULT_SETTERS = [
    'content'
];
/**
 * Data definition
 */
var DialogPreset = (function (_super) {
    __extends(DialogPreset, _super);
    function DialogPreset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DialogPreset;
}(__WEBPACK_IMPORTED_MODULE_1__modal_context__["a" /* VEXModalContext */]));

/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
var DialogPresetBuilder = (function (_super) {
    __extends(DialogPresetBuilder, _super);
    function DialogPresetBuilder(modal, defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        return _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["i" /* extend */])({ modal: modal, component: __WEBPACK_IMPORTED_MODULE_2__dialog_form_modal__["c" /* DialogFormModal */], buttons: [], defaultResult: true }, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["j" /* arrayUnion */])(DEFAULT_SETTERS, initialSetters || []), baseType || DialogPreset // https://github.com/Microsoft/TypeScript/issues/7234
        ) || this;
    }
    DialogPresetBuilder.prototype.addButton = function (css, caption, onClick) {
        var btn = {
            cssClass: css,
            caption: caption,
            onClick: onClick
        };
        var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["k" /* privateKey */])('buttons');
        this[key].push(btn);
        return this;
    };
    DialogPresetBuilder.prototype.addOkButton = function (text) {
        if (text === void 0) { text = 'OK'; }
        this.addButton('vex-dialog-button-primary vex-dialog-button vex-first', text, function (cmp, $event) { return cmp.dialog.close(cmp.dialog.context.defaultResult); });
        return this;
    };
    DialogPresetBuilder.prototype.addCancelButton = function (text) {
        if (text === void 0) { text = 'CANCEL'; }
        this.addButton('vex-dialog-button-secondary vex-dialog-button vex-last', text, function (cmp, $event) { return cmp.dialog.dismiss(); });
        return this;
    };
    return DialogPresetBuilder;
}(__WEBPACK_IMPORTED_MODULE_1__modal_context__["b" /* VEXModalContextBuilder */]));

//# sourceMappingURL=dialog-preset.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_preset__ = __webpack_require__(42);
/* unused harmony export DropInPreset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropInPresetBuilder; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var DEFAULT_VALUES = {
    component: __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__["c" /* DialogFormModal */],
    content: __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__["b" /* FormDropIn */],
    okBtn: 'OK',
    cancelBtn: 'Cancel'
};
var DEFAULT_SETTERS = [
    'okBtn',
    'cancelBtn',
    'placeholder'
];
/**
 * Data definition
 */
var DropInPreset = (function (_super) {
    __extends(DropInPreset, _super);
    function DropInPreset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DropInPreset.prototype, "showInput", {
        get: function () {
            return this.dropInType === __WEBPACK_IMPORTED_MODULE_0_angular2_modal__["d" /* DROP_IN_TYPE */].prompt;
        },
        enumerable: true,
        configurable: true
    });
    return DropInPreset;
}(__WEBPACK_IMPORTED_MODULE_2__dialog_preset__["a" /* DialogPreset */]));

/**
 * A Preset representing all 3 drop ins (alert, prompt, confirm)
 */
var DropInPresetBuilder = (function (_super) {
    __extends(DropInPresetBuilder, _super);
    function DropInPresetBuilder(modal, dropInType, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        return _super.call(this, modal, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["i" /* extend */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__["i" /* extend */])({ modal: modal, dropInType: dropInType }, DEFAULT_VALUES), defaultValues || {}), DEFAULT_SETTERS, DropInPreset) || this;
    }
    DropInPresetBuilder.prototype.$$beforeOpen = function (config) {
        if (config.okBtn) {
            this.addOkButton(config.okBtn);
        }
        switch (config.dropInType) {
            case __WEBPACK_IMPORTED_MODULE_0_angular2_modal__["d" /* DROP_IN_TYPE */].prompt:
                config.defaultResult = undefined;
            case __WEBPACK_IMPORTED_MODULE_0_angular2_modal__["d" /* DROP_IN_TYPE */].confirm:
                if (config.cancelBtn) {
                    this.addCancelButton(config.cancelBtn);
                }
                break;
        }
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return DropInPresetBuilder;
}(__WEBPACK_IMPORTED_MODULE_2__dialog_preset__["b" /* DialogPresetBuilder */]));

//# sourceMappingURL=dropin-preset.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
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

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_tokens__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlay_index__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ModalModule = ModalModule_1 = (function () {
    function ModalModule() {
    }
    /**
     * Returns a ModalModule pre-loaded with a list of dynamically inserted components.
     * Since dynamic components are not analysed by the angular compiler they must register manually
     * using entryComponents, this is an easy way to do it.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns {{ngModule: ModalModule, providers: {provide: OpaqueToken, useValue: Array<Type|any[]>, multi: boolean}[]}}
     */
    ModalModule.withComponents = function (entryComponents) {
        return {
            ngModule: ModalModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ANALYZE_FOR_ENTRY_COMPONENTS"], useValue: entryComponents, multi: true }
            ]
        };
    };
    /**
     * Returns a NgModule for use in the root Module.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns ModuleWithProviders
     */
    ModalModule.forRoot = function (entryComponents) {
        return {
            ngModule: ModalModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__overlay_index__["a" /* Overlay */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__models_tokens__["a" /* OverlayRenderer */], useClass: __WEBPACK_IMPORTED_MODULE_2__providers_index__["b" /* DOMOverlayRenderer */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["EVENT_MANAGER_PLUGINS"], useClass: __WEBPACK_IMPORTED_MODULE_2__providers_index__["c" /* DOMOutsideEventPlugin */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ANALYZE_FOR_ENTRY_COMPONENTS"], useValue: entryComponents || [], multi: true }
            ]
        };
    };
    return ModalModule;
}());
ModalModule = ModalModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__overlay_index__["b" /* ModalOverlay */],
            __WEBPACK_IMPORTED_MODULE_4__components_index__["a" /* SwapComponentDirective */],
            __WEBPACK_IMPORTED_MODULE_4__components_index__["b" /* CSSBackdrop */],
            __WEBPACK_IMPORTED_MODULE_4__components_index__["c" /* CSSDialogContainer */],
            __WEBPACK_IMPORTED_MODULE_5__overlay_index__["c" /* OverlayDialogBoundary */],
            __WEBPACK_IMPORTED_MODULE_5__overlay_index__["d" /* OverlayTarget */],
            __WEBPACK_IMPORTED_MODULE_5__overlay_index__["e" /* DefaultOverlayTarget */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__components_index__["b" /* CSSBackdrop */],
            __WEBPACK_IMPORTED_MODULE_4__components_index__["c" /* CSSDialogContainer */],
            __WEBPACK_IMPORTED_MODULE_4__components_index__["a" /* SwapComponentDirective */],
            __WEBPACK_IMPORTED_MODULE_5__overlay_index__["c" /* OverlayDialogBoundary */],
            __WEBPACK_IMPORTED_MODULE_5__overlay_index__["d" /* OverlayTarget */],
            __WEBPACK_IMPORTED_MODULE_5__overlay_index__["e" /* DefaultOverlayTarget */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__overlay_index__["b" /* ModalOverlay */],
            __WEBPACK_IMPORTED_MODULE_4__components_index__["b" /* CSSBackdrop */],
            __WEBPACK_IMPORTED_MODULE_4__components_index__["c" /* CSSDialogContainer */]
        ]
    })
], ModalModule);

var ModalModule_1;
//# sourceMappingURL=angular2-modal.module.js.map

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSBackdrop; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Represents the modal backdrop shaped by CSS.
 */
var CSSBackdrop = (function (_super) {
    __extends(CSSBackdrop, _super);
    function CSSBackdrop(el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.activateAnimationListener();
        var style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        };
        Object.keys(style).forEach(function (k) { return _this.setStyle(k, style[k]); });
        return _this;
    }
    return CSSBackdrop;
}(__WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__["a" /* BaseDynamicComponent */]));
CSSBackdrop = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'css-backdrop',
        host: {
            '[attr.class]': 'cssClass',
            '[attr.style]': 'styleStr'
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: ""
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], CSSBackdrop);

//# sourceMappingURL=css-backdrop.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSDialogContainer; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * A component that acts as a top level container for an open modal window.
 */
var CSSDialogContainer = (function (_super) {
    __extends(CSSDialogContainer, _super);
    function CSSDialogContainer(dialog, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.dialog = dialog;
        _this.activateAnimationListener();
        return _this;
    }
    return CSSDialogContainer;
}(__WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__["a" /* BaseDynamicComponent */]));
CSSDialogContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'css-dialog-container',
        host: {
            'tabindex': '-1',
            'role': 'dialog'
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__["a" /* DialogRef */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], CSSDialogContainer);

//# sourceMappingURL=css-dialog-container.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwapComponentDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// <template [dynCmp]="myCmp" [dynCmpBindings]="myBindings"></template>
// <template [dynCmp]="ctx.component" [dynCmpBindings]="ctx.bindings" [dynCmpProjectables]="ctx.projectableNodes"></template>
var SwapComponentDirective = (function () {
    function SwapComponentDirective(cfr, vcRef, tRef) {
        this.cfr = cfr;
        this.vcRef = vcRef;
        this.tRef = tRef;
        this.onCreate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
    }
    Object.defineProperty(SwapComponentDirective.prototype, "swapCmp", {
        set: function (component) {
            this.component = component;
            this.vcRef.clear();
            if (this.component) {
                var injector = this.swapCmpInjector || this.vcRef.parentInjector;
                if (Array.isArray(this.swapCmpBindings) && this.swapCmpBindings.length > 0) {
                    injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(this.swapCmpBindings, injector);
                }
                var cmpRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(component), this.vcRef.length, injector, this.swapCmpProjectables);
                cmpRef.changeDetectorRef.detectChanges();
                this.onCreate.emit(cmpRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    return SwapComponentDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SwapComponentDirective.prototype, "swapCmpBindings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"])
], SwapComponentDirective.prototype, "swapCmpInjector", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SwapComponentDirective.prototype, "swapCmpProjectables", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SwapComponentDirective.prototype, "onCreate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SwapComponentDirective.prototype, "swapCmp", null);
SwapComponentDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[swapCmp]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]])
], SwapComponentDirective);

//# sourceMappingURL=swap-component.directive.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogRefStack; });
var BASKET_GROUP = {};
/**
 * A dumb stack implementation over an array.
 */
var DialogRefStack = (function () {
    function DialogRefStack() {
        this._stack = [];
        this._stackMap = new Map();
    }
    Object.defineProperty(DialogRefStack.prototype, "length", {
        get: function () {
            return this._stack.length;
        },
        enumerable: true,
        configurable: true
    });
    DialogRefStack.prototype.push = function (dialogRef, group) {
        if (this._stack.indexOf(dialogRef) === -1) {
            this._stack.push(dialogRef);
            this._stackMap.set(dialogRef, group || BASKET_GROUP);
        }
    };
    /**
     * Push a DialogRef into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param dialogRef
     */
    DialogRefStack.prototype.pushManaged = function (dialogRef, group) {
        var _this = this;
        this.push(dialogRef, group);
        dialogRef.onDestroy.subscribe(function () { return _this.remove(dialogRef); });
    };
    DialogRefStack.prototype.pop = function () {
        var dialogRef = this._stack.pop();
        this._stackMap.delete(dialogRef);
        return dialogRef;
    };
    /**
     * Remove a DialogRef from the stack.
     * @param dialogRef
     */
    DialogRefStack.prototype.remove = function (dialogRef) {
        var idx = this.indexOf(dialogRef);
        if (idx > -1) {
            this._stack.splice(idx, 1);
            this._stackMap.delete(dialogRef);
        }
    };
    DialogRefStack.prototype.index = function (index) {
        return this._stack[index];
    };
    DialogRefStack.prototype.indexOf = function (dialogRef) {
        return this._stack.indexOf(dialogRef);
    };
    DialogRefStack.prototype.groupOf = function (dialogRef) {
        return this._stackMap.get(dialogRef);
    };
    DialogRefStack.prototype.groupBy = function (group) {
        var arr = [];
        if (group) {
            this._stackMap.forEach(function (value, key) {
                if (value === group) {
                    arr.push(key);
                }
            });
        }
        return arr;
    };
    DialogRefStack.prototype.groupLength = function (group) {
        var count = 0;
        if (group) {
            this._stackMap.forEach(function (value, key) {
                if (value === group) {
                    count++;
                }
            });
        }
        return count;
    };
    return DialogRefStack;
}());

//# sourceMappingURL=dialog-ref-stack.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_index__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalOpenContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalOpenContextBuilder; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var DEFAULT_SETTERS = [
    'component'
];
var ModalOpenContext = (function (_super) {
    __extends(ModalOpenContext, _super);
    function ModalOpenContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalOpenContext;
}(__WEBPACK_IMPORTED_MODULE_1__modal_context__["a" /* ModalContext */]));

/**
 * A Modal Context that knows about the modal service, and so can open a modal window on demand.
 * Use the fluent API to configure the preset and then invoke the 'open' method to open a modal
 * based on the context.
 */
var ModalOpenContextBuilder = (function (_super) {
    __extends(ModalOpenContextBuilder, _super);
    function ModalOpenContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        return _super.call(this, defaultValues || {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__framework_utils__["d" /* arrayUnion */])(DEFAULT_SETTERS, initialSetters || []), baseType) || this;
    }
    /**
     * Hook to alter config and return bindings.
     * @param config
     */
    ModalOpenContextBuilder.prototype.$$beforeOpen = function (config) {
        return [];
    };
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
    ModalOpenContextBuilder.prototype.open = function (viewContainer) {
        var context = this.toJSON();
        if (!(context.modal instanceof __WEBPACK_IMPORTED_MODULE_0__providers_index__["a" /* Modal */])) {
            return Promise.reject(new Error('Configuration Error: modal service not set.'));
        }
        var overlayConfig = {
            context: context,
            viewContainer: viewContainer,
            bindings: typeof this.$$beforeOpen === 'function' && this.$$beforeOpen(context)
        };
        return context.modal.open(context.component, overlayConfig);
    };
    return ModalOpenContextBuilder;
}(__WEBPACK_IMPORTED_MODULE_1__modal_context__["b" /* ModalContextBuilder */]));

//# sourceMappingURL=modal-open-context.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalOverlay; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Represents the modal overlay.
 */
var ModalOverlay = (function (_super) {
    __extends(ModalOverlay, _super);
    function ModalOverlay(dialogRef, vcr, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.dialogRef = dialogRef;
        _this.vcr = vcr;
        _this.activateAnimationListener();
        return _this;
    }
    /**
     * @internal
     */
    ModalOverlay.prototype.getProjectables = function (content, bindings) {
        var nodes;
        if (typeof content === 'string') {
            nodes = [[this.renderer.createText(null, "" + content)]];
        }
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            nodes = [
                this.dialogRef.overlay.defaultViewContainer
                    .createEmbeddedView(content, { dialogRef: this.dialogRef }).rootNodes
            ];
        }
        else {
            nodes = [this.embedComponent({ component: content, bindings: bindings }).rootNodes];
        }
        return nodes;
    };
    ModalOverlay.prototype.embedComponent = function (config) {
        return this.vcr.createEmbeddedView(this.template, {
            $implicit: config
        });
    };
    ModalOverlay.prototype.addComponent = function (type, bindings, projectableNodes) {
        if (bindings === void 0) { bindings = []; }
        if (projectableNodes === void 0) { projectableNodes = []; }
        return _super.prototype._addComponent.call(this, {
            component: type,
            vcRef: this.innerVcr,
            bindings: bindings,
            projectableNodes: projectableNodes
        });
    };
    ModalOverlay.prototype.fullscreen = function () {
        var _this = this;
        var style = {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            'z-index': 1500
        };
        Object.keys(style).forEach(function (k) { return _this.setStyle(k, style[k]); });
    };
    ModalOverlay.prototype.insideElement = function () {
        var _this = this;
        var style = {
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        Object.keys(style).forEach(function (k) { return _this.setStyle(k, style[k]); });
    };
    /**
     * Define an element that click inside it will not trigger modal close.
     * Since events bubble, clicking on a dialog will bubble up to the overlay, a plugin
     * must define an element that represent the dialog, the overlay will make sure no to close when
     * it was clicked.
     * @param element
     */
    ModalOverlay.prototype.setClickBoundary = function (element) {
        var _this = this;
        var target;
        var elListener = function (event) { return target = event.target; };
        var docListener = function (event) {
            if (_this.dialogRef.context.isBlocking || !_this.dialogRef.overlay.isTopMost(_this.dialogRef)) {
                return;
            }
            var current = event.target;
            // on click, this will hit.
            if (current === target)
                return;
            // on mouse down -> drag -> release the current might not be 'target', it might be
            // a sibling or a child (i.e: not part of the tree-up direction). It might also be a release
            // outside the dialog... so we compare to the boundary element
            do {
                if (current === element) {
                    return;
                }
            } while (current.parentNode && (current = current.parentNode));
            _this.dialogRef.dismiss();
        };
        this.dialogRef.onDestroy.subscribe(function () {
            element.removeEventListener('click', elListener, false);
            element.removeEventListener('touchstart', elListener, false);
            document.removeEventListener('click', docListener, false);
            document.removeEventListener('touchend', docListener, false);
        });
        setTimeout(function () {
            element.addEventListener('mousedown', elListener, false);
            element.addEventListener('touchstart', docListener, false);
            document.addEventListener('click', docListener, false);
            document.addEventListener('touchend', docListener, false);
        });
    };
    /**
     * Temp workaround for animation where destruction of the top level component does not
     * trigger child animations. Solution should be found either in animation module or in design
     * of the modal component tree.
     * @returns {Promise<void>}
     */
    ModalOverlay.prototype.canDestroy = function () {
        var completer = new __WEBPACK_IMPORTED_MODULE_1__framework_utils__["a" /* PromiseCompleter */]();
        if (!Array.isArray(this.beforeDestroyHandlers)) {
            completer.resolve();
        }
        else {
            // run destroy notification but protect against halt.
            var id_1 = setTimeout(function () {
                id_1 = null;
                completer.reject();
            }, 1000);
            var resolve = function () {
                if (id_1 === null)
                    return;
                clearTimeout(id_1);
                completer.resolve();
            };
            Promise.all(this.beforeDestroyHandlers.map(function (fn) { return fn(); }))
                .then(resolve)
                .catch(resolve);
        }
        return completer.promise;
    };
    /**
     * A handler running before destruction of the overlay
     * use to delay destruction due to animation.
     * This is part of the workaround for animation, see canDestroy.
     *
     * NOTE: There is no guarantee that the listeners will fire, use dialog.onDestory for that.
     * @param fn
     */
    ModalOverlay.prototype.beforeDestroy = function (fn) {
        if (!this.beforeDestroyHandlers) {
            this.beforeDestroyHandlers = [];
        }
        this.beforeDestroyHandlers.push(fn);
    };
    ModalOverlay.prototype.documentKeypress = function (event) {
        // check that this modal is the last in the stack.
        if (!this.dialogRef.overlay.isTopMost(this.dialogRef))
            return;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__["b" /* supportsKey */])(event.keyCode, this.dialogRef.context.keyboard)) {
            this.dialogRef.dismiss();
        }
    };
    ModalOverlay.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this.dialogRef.destroyed !== true) {
            // if we're here the overlay is destroyed by an external event that is not user invoked.
            // i.e: The user did no call dismiss or close and dialogRef.destroy() did not invoke.
            // this will happen when routing or killing an element containing a blocked overlay (ngIf)
            // we bail out, i.e gracefully shutting down.
            this.dialogRef.bailOut();
        }
    };
    return ModalOverlay;
}(__WEBPACK_IMPORTED_MODULE_3__components_index__["d" /* BaseDynamicComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('innerView', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
], ModalOverlay.prototype, "innerVcr", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('template'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
], ModalOverlay.prototype, "template", void 0);
ModalOverlay = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-overlay',
        host: {
            '(body:keydown)': 'documentKeypress($event)'
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "<template #innerView></template>\n<template #template let-ctx>\n    <template [swapCmp]=\"ctx.component\" [swapCmpBindings]=\"ctx.bindings\" [swapCmpProjectables]=\"ctx.projectableNodes\"></template>\n</template>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__["a" /* DialogRef */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], ModalOverlay);

//# sourceMappingURL=overlay.component.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OverlayDialogBoundary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DefaultOverlayTarget; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * A directive use to signal the overlay that the host of this directive
 * is a dialog boundary, i.e: over click outside of the element should close the modal
 * (if non blocking)
 */
var OverlayDialogBoundary = (function () {
    function OverlayDialogBoundary(el, dialogRef) {
        if (dialogRef && el.nativeElement) {
            dialogRef.overlayRef.instance.setClickBoundary(el.nativeElement);
        }
    }
    return OverlayDialogBoundary;
}());
OverlayDialogBoundary = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[overlayDialogBoundary]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__["a" /* DialogRef */]])
], OverlayDialogBoundary);

var OverlayTarget = (function () {
    function OverlayTarget(vcRef) {
        this.vcRef = vcRef;
    }
    Object.defineProperty(OverlayTarget.prototype, "targetKey", {
        set: function (value) {
            this._targetKey = value;
            if (value) {
                __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__["a" /* vcRefStore */].setVCRef(value, this.vcRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    OverlayTarget.prototype.ngOnDestroy = function () {
        if (this._targetKey) {
            __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__["a" /* vcRefStore */].delVCRef(this._targetKey, this.vcRef);
        }
    };
    return OverlayTarget;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('overlayTarget'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], OverlayTarget.prototype, "targetKey", null);
OverlayTarget = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[overlayTarget]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], OverlayTarget);

var noop = function () { };
var DefaultOverlayTarget = (function () {
    function DefaultOverlayTarget(overlay, vcRef) {
        this.overlay = overlay;
        overlay.defaultViewContainer = vcRef;
    }
    DefaultOverlayTarget.prototype.ngOnDestroy = function () {
        this.overlay.defaultViewContainer = undefined;
    };
    return DefaultOverlayTarget;
}());
DefaultOverlayTarget = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[defaultOverlayTarget]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__overlay_service__["a" /* Overlay */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], DefaultOverlayTarget);

//# sourceMappingURL=overlay.directives.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_createComponent__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_index__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMOverlayRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DOMOverlayRenderer = (function () {
    function DOMOverlayRenderer() {
    }
    DOMOverlayRenderer.prototype.render = function (dialog, vcRef, injector) {
        var bindings = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([
            { provide: __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__["a" /* DialogRef */], useValue: dialog }
        ]);
        var cmpRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_createComponent__["a" /* createComponent */])({
            component: __WEBPACK_IMPORTED_MODULE_3__overlay_index__["b" /* ModalOverlay */],
            vcRef: vcRef,
            injector: injector,
            bindings: bindings
        });
        if (dialog.inElement) {
            vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement);
        }
        else {
            document.body.appendChild(cmpRef.location.nativeElement);
        }
        return cmpRef;
    };
    return DOMOverlayRenderer;
}());
DOMOverlayRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DOMOverlayRenderer);

//# sourceMappingURL=dom-modal-renderer.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__ = __webpack_require__(8);
/* unused harmony export UnsupportedDropInError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var UnsupportedDropInError = (function (_super) {
    __extends(UnsupportedDropInError, _super);
    function UnsupportedDropInError(dropInName) {
        var _this = _super.call(this) || this;
        _this.message = "Unsupported Drop-In " + dropInName;
        return _this;
    }
    return UnsupportedDropInError;
}(Error));

var Modal = (function () {
    function Modal(overlay) {
        this.overlay = overlay;
    }
    Modal.prototype.alert = function () {
        throw new UnsupportedDropInError('alert');
    };
    Modal.prototype.prompt = function () {
        throw new UnsupportedDropInError('prompt');
    };
    Modal.prototype.confirm = function () {
        throw new UnsupportedDropInError('confirm');
    };
    /**
     * Opens a modal window inside an existing component.
     * @param content The content to display, either string, template ref or a component.
     * @param config Additional settings.
     * @returns {Promise<DialogRef>}
     */
    Modal.prototype.open = function (content, config) {
        config = config || {};
        try {
            var dialogs = this.overlay.open(config, this.constructor);
            if (dialogs.length > 1) {
                console.warn("Attempt to open more then 1 overlay detected.\n        Multiple modal copies are not supported at the moment, \n        only the first viewContainer will display.");
            }
            // TODO:  Currently supporting 1 view container, hence working on dialogs[0].
            //        upgrade to multiple containers.
            return Promise.resolve(this.create(dialogs[0], content, config.bindings));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    Modal.prototype.createBackdrop = function (dialogRef, BackdropComponent) {
        var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([{ provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__["a" /* DialogRef */], useValue: dialogRef }]);
        return dialogRef.overlayRef.instance.addComponent(BackdropComponent, b);
    };
    Modal.prototype.createContainer = function (dialogRef, ContainerComponent, content, bindings) {
        var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([{ provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__["a" /* DialogRef */], useValue: dialogRef }])
            .concat(bindings || []);
        var nodes = dialogRef.overlayRef.instance.getProjectables(content, b);
        return dialogRef.overlayRef.instance.addComponent(ContainerComponent, b, nodes);
    };
    /**
     * A helper function for derived classes to create backdrop & container
     * @param dialogRef
     * @param backdrop
     * @param container
     * @returns { backdropRef: ComponentRef<B>, containerRef: ComponentRef<C> }
     *
     * @deprecated use createBackdrop and createContainer instead
     */
    Modal.prototype.createModal = function (dialogRef, backdrop, container) {
        var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([{ provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__["a" /* DialogRef */], useValue: dialogRef }]);
        return {
            backdropRef: dialogRef.overlayRef.instance.addComponent(backdrop, b),
            containerRef: dialogRef.overlayRef.instance.addComponent(container, b)
        };
    };
    return Modal;
}());

//# sourceMappingURL=modal.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMOutsideEventPlugin; });
// heavily inspired by:
// http://www.bennadel.com/blog/3025-creating-custom-dom-and-host-event-bindings-in-angular-2-beta-6.htm
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var eventMap = {
    clickOutside: 'click',
    mousedownOutside: 'mousedown',
    mouseupOutside: 'mouseup',
    mousemoveOutside: 'mousemove'
};
/**
 * An event handler factory for event handlers that bubble the event to a given handler
 * if the event target is not an ancestor of the given element.
 * @param element
 * @param handler
 * @returns {function(any): undefined}
 */
function bubbleNonAncestorHandlerFactory(element, handler) {
    return function (event) {
        var current = event.target;
        do {
            if (current === element) {
                return;
            }
        } while (current.parentNode && (current = current.parentNode));
        handler(event);
    };
}
var DOMOutsideEventPlugin = (function () {
    function DOMOutsideEventPlugin() {
        // TODO: use DI factory for this.
        if (!document || typeof document.addEventListener !== 'function') {
            this.addEventListener = __WEBPACK_IMPORTED_MODULE_1__framework_utils__["c" /* noop */];
        }
    }
    DOMOutsideEventPlugin.prototype.supports = function (eventName) {
        return eventMap.hasOwnProperty(eventName);
    };
    DOMOutsideEventPlugin.prototype.addEventListener = function (element, eventName, handler) {
        var zone = this.manager.getZone();
        // A Factory that registers the event on the document, instead of the element.
        // the handler is created at runtime, and it acts as a propagation/bubble predicate, it will
        // bubble up the event (i.e: execute our original event handler) only if the event targer
        // is an ancestor of our element.
        // The event is fired inside the angular zone so change detection can kick into action.
        var onceOnOutside = function () {
            var listener = bubbleNonAncestorHandlerFactory(element, function (evt) { return zone.runGuarded(function () { return handler(evt); }); });
            // mimic BrowserDomAdapter.onAndCancel
            document.addEventListener(eventMap[eventName], listener, false);
            return function () { return document.removeEventListener(eventMap[eventName], listener, false); };
        };
        // we run the event registration for the document in a different zone, this will make sure
        // change detection is off.
        // It turns out that if a component that use DOMOutsideEventPlugin is built from a click
        // event, we might get here before the event reached the document, causing a quick false
        // positive handling (when stopPropagation() was'nt invoked). To workaround this we wait
        // for the next vm turn and register.
        // Event registration returns a dispose function for that event, angular use it to clean
        // up after component get's destroyed. Since we need to return a dispose function
        // synchronously we have to put a wrapper for it since we will get it asynchronously,
        // i.e: after we need to return it.
        //
        return zone.runOutsideAngular(function () {
            var fn;
            setTimeout(function () { return fn = onceOnOutside(); }, 0);
            return function () { return fn(); };
        });
    };
    DOMOutsideEventPlugin.prototype.addGlobalEventListener = function (target, eventName, handler) {
        throw 'not supported';
    };
    return DOMOutsideEventPlugin;
}());
DOMOutsideEventPlugin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DOMOutsideEventPlugin);

//# sourceMappingURL=outside-event-plugin.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__ = __webpack_require__(11);
/* unused harmony export providers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VexModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var providers = [
    { provide: __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* Modal */], useClass: __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */] },
    { provide: __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */], useClass: __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */] }
];
var VexModalModule = (function () {
    function VexModalModule() {
    }
    VexModalModule.getProviders = function () {
        return providers;
    };
    return VexModalModule;
}());
VexModalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2_angular2_modal__["a" /* ModalModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__["a" /* VEXDialogButtons */],
            __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__["b" /* FormDropIn */],
            __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__["c" /* DialogFormModal */]
        ],
        providers: providers,
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__["c" /* DialogFormModal */],
            __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__["b" /* FormDropIn */]
        ]
    })
], VexModalModule);

//# sourceMappingURL=vex.module.js.map

/***/ })
]);
//# sourceMappingURL=vendor.bundle.js.map