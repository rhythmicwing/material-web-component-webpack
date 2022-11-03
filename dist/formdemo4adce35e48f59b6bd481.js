/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCComponent": () => (/* binding */ MDCComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root = root;
        this.initialize.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
        // Note that we initialize foundation here and not within the constructor's
        // default param so that this.root is defined and can be used within the
        // foundation class.
        this.foundation =
            foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCFoundation({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFoundation": () => (/* binding */ MDCFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyPassive": () => (/* binding */ applyPassive)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closest": () => (/* binding */ closest),
/* harmony export */   "estimateScrollWidth": () => (/* binding */ estimateScrollWidth),
/* harmony export */   "matches": () => (/* binding */ matches)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFloatingLabel": () => (/* binding */ MDCFloatingLabel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/floating-label/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCFloatingLabel = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFloatingLabel, _super);
    function MDCFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel.attachTo = function (root) {
        return new MDCFloatingLabel(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */
    MDCFloatingLabel.prototype.shake = function (shouldShake) {
        this.foundation.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MDCFloatingLabel.prototype.float = function (shouldFloat) {
        this.foundation.float(shouldFloat);
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabel.prototype.setRequired = function (isRequired) {
        this.foundation.setRequired(isRequired);
    };
    MDCFloatingLabel.prototype.getWidth = function () {
        return this.foundation.getWidth();
    };
    MDCFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            getWidth: function () { return (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_1__.estimateScrollWidth)(_this.root); },
            registerInteractionHandler: function (evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return _this.unlisten(evtType, handler);
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFloatingLabelFoundation(adapter);
    };
    return MDCFloatingLabel;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_3__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/constants.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/floating-label/foundation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFloatingLabelFoundation": () => (/* binding */ MDCFloatingLabelFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/floating-label/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler = function () {
            _this.handleShakeAnimationEnd();
        };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
            this.adapter.addClass(LABEL_REQUIRED);
        }
        else {
            this.adapter.removeClass(LABEL_REQUIRED);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFloatingLabelFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/form-field/component.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/form-field/component.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFormField": () => (/* binding */ MDCFormField)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/form-field/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFormField = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFormField, _super);
    function MDCFormField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFormField.attachTo = function (root) {
        return new MDCFormField(root);
    };
    MDCFormField.prototype.labelEl = function () {
        var LABEL_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCFormFieldFoundation.strings.LABEL_SELECTOR;
        return this.root.querySelector(LABEL_SELECTOR);
    };
    MDCFormField.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            activateInputRipple: function () {
                if (_this.input && _this.input.ripple) {
                    _this.input.ripple.activate();
                }
            },
            deactivateInputRipple: function () {
                if (_this.input && _this.input.ripple) {
                    _this.input.ripple.deactivate();
                }
            },
            deregisterInteractionHandler: function (evtType, handler) {
                var labelEl = _this.labelEl();
                if (labelEl) {
                    labelEl.removeEventListener(evtType, handler);
                }
            },
            registerInteractionHandler: function (evtType, handler) {
                var labelEl = _this.labelEl();
                if (labelEl) {
                    labelEl.addEventListener(evtType, handler);
                }
            },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCFormFieldFoundation(adapter);
    };
    return MDCFormField;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/form-field/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/form-field/constants.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ROOT: 'mdc-form-field',
};
var strings = {
    LABEL_SELECTOR: '.mdc-form-field > label',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/form-field/foundation.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/form-field/foundation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFormFieldFoundation": () => (/* binding */ MDCFormFieldFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/form-field/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFormFieldFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFormFieldFoundation, _super);
    function MDCFormFieldFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCFormFieldFoundation.defaultAdapter), adapter)) || this;
        _this.click = function () {
            _this.handleClick();
        };
        return _this;
    }
    Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
        get: function () {
            return {
                activateInputRipple: function () { return undefined; },
                deactivateInputRipple: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCFormFieldFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('click', this.click);
    };
    MDCFormFieldFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('click', this.click);
    };
    MDCFormFieldFoundation.prototype.handleClick = function () {
        var _this = this;
        this.adapter.activateInputRipple();
        requestAnimationFrame(function () {
            _this.adapter.deactivateInputRipple();
        });
    };
    return MDCFormFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFormFieldFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCLineRipple": () => (/* binding */ MDCLineRipple)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/line-ripple/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRipple = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCLineRipple, _super);
    function MDCLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple.attachTo = function (root) {
        return new MDCLineRipple(root);
    };
    /**
     * Activates the line ripple
     */
    MDCLineRipple.prototype.activate = function () {
        this.foundation.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MDCLineRipple.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        this.foundation.setRippleCenter(xCoordinate);
    };
    MDCLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            setStyle: function (propertyName, value) { return _this.root.style.setProperty(propertyName, value); },
            registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCLineRippleFoundation(adapter);
    };
    return MDCLineRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/line-ripple/foundation.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCLineRippleFoundation": () => (/* binding */ MDCLineRippleFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/line-ripple/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRippleFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler = function (evt) {
            _this.handleTransitionEnd(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCLineRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCNotchedOutline": () => (/* binding */ MDCNotchedOutline)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/floating-label/foundation */ "./node_modules/@material/floating-label/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/notched-outline/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCNotchedOutline = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCNotchedOutline, _super);
    function MDCNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline.attachTo = function (root) {
        return new MDCNotchedOutline(root);
    };
    MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
        this.notchElement =
            this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.NOTCH_ELEMENT_SELECTOR);
        var label = this.root.querySelector('.' + _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFloatingLabelFoundation.cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label.style.transitionDuration = '';
            });
        }
        else {
            this.root.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.NO_LABEL);
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MDCNotchedOutline.prototype.notch = function (notchWidth) {
        this.foundation.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MDCNotchedOutline.prototype.closeNotch = function () {
        this.foundation.closeNotch();
    };
    MDCNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setNotchWidthProperty: function (width) {
                _this.notchElement.style.setProperty('width', width + 'px');
            },
            removeNotchWidthProperty: function () {
                _this.notchElement.style.removeProperty('width');
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_3__.MDCNotchedOutlineFoundation(adapter);
    };
    return MDCNotchedOutline;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_4__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/constants.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "numbers": () => (/* binding */ numbers),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/notched-outline/foundation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCNotchedOutlineFoundation": () => (/* binding */ MDCNotchedOutlineFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCNotchedOutlineFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/radio/component.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/radio/component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCRadio": () => (/* binding */ MDCRadio)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/radio/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCRadio = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCRadio, _super);
    function MDCRadio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rippleSurface = _this.createRipple();
        return _this;
    }
    MDCRadio.attachTo = function (root) {
        return new MDCRadio(root);
    };
    Object.defineProperty(MDCRadio.prototype, "checked", {
        get: function () {
            return this.nativeControl.checked;
        },
        set: function (checked) {
            this.nativeControl.checked = checked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadio.prototype, "disabled", {
        get: function () {
            return this.nativeControl.disabled;
        },
        set: function (disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadio.prototype, "value", {
        get: function () {
            return this.nativeControl.value;
        },
        set: function (value) {
            this.nativeControl.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadio.prototype, "ripple", {
        get: function () {
            return this.rippleSurface;
        },
        enumerable: false,
        configurable: true
    });
    MDCRadio.prototype.destroy = function () {
        this.rippleSurface.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCRadio.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setNativeControlDisabled: function (disabled) { return _this.nativeControl.disabled =
                disabled; },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCRadioFoundation(adapter);
    };
    MDCRadio.prototype.createRipple = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__.MDCRipple.createAdapter(this)), { registerInteractionHandler: function (evtType, handler) {
                _this.nativeControl.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_3__.applyPassive)());
            }, deregisterInteractionHandler: function (evtType, handler) {
                _this.nativeControl.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_3__.applyPassive)());
            }, 
            // Radio buttons technically go "active" whenever there is *any* keyboard
            // interaction. This is not the UI we desire.
            isSurfaceActive: function () { return false; }, isUnbounded: function () { return true; } });
        // tslint:enable:object-literal-sort-keys
        return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__.MDCRipple(this.root, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCRippleFoundation(adapter));
    };
    Object.defineProperty(MDCRadio.prototype, "nativeControl", {
        get: function () {
            var NATIVE_CONTROL_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR;
            var el = this.root.querySelector(NATIVE_CONTROL_SELECTOR);
            if (!el) {
                throw new Error("Radio component requires a " + NATIVE_CONTROL_SELECTOR + " element");
            }
            return el;
        },
        enumerable: false,
        configurable: true
    });
    return MDCRadio;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_5__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/radio/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/radio/constants.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
};
var cssClasses = {
    DISABLED: 'mdc-radio--disabled',
    ROOT: 'mdc-radio',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/radio/foundation.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/radio/foundation.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCRadioFoundation": () => (/* binding */ MDCRadioFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/radio/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCRadioFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCRadioFoundation, _super);
    function MDCRadioFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCRadioFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCRadioFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadioFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadioFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRadioFoundation.prototype.setDisabled = function (disabled) {
        var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
        this.adapter.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter.addClass(DISABLED);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
    };
    return MDCRadioFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCRadioFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCRipple": () => (/* binding */ MDCRipple)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCRipple = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = {
            isUnbounded: undefined
        }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root.classList.add(className); },
            browserSupportsCssVars: function () { return _util__WEBPACK_IMPORTED_MODULE_1__.supportsCssVariables(window); },
            computeBoundingRect: function () { return instance.root.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root
                    .removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
            },
            deregisterResizeHandler: function (handler) {
                return window.removeEventListener('resize', handler);
            },
            getWindowPageOffset: function () {
                return ({ x: window.pageXOffset, y: window.pageYOffset });
            },
            isSurfaceActive: function () { return (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__.matches)(instance.root, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root
                    .addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
            },
            registerResizeHandler: function (handler) {
                return window.addEventListener('resize', handler);
            },
            removeClass: function (className) { return instance.root.classList.remove(className); },
            updateCssVariable: function (varName, value) {
                return instance.root.style.setProperty(varName, value);
            },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.isUnbounded);
        },
        set: function (unbounded) {
            this.isUnbounded = Boolean(unbounded);
            this.setUnbounded();
        },
        enumerable: false,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__.MDCRippleFoundation(MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root;
        this.isUnbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded = function () {
        this.foundation.setUnbounded(Boolean(this.isUnbounded));
    };
    return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_5__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "numbers": () => (/* binding */ numbers),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCRippleFoundation": () => (/* binding */ MDCRippleFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = '0';
        _this.frame = { width: 0, height: 0 };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = { left: 0, top: 0 };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function () {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function (e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function () {
            _this.deactivateImpl();
        };
        _this.focusHandler = function () {
            _this.handleFocus();
        };
        _this.blurHandler = function () {
            _this.handleBlur();
        };
        _this.resizeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivateImpl();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame) {
            cancelAnimationFrame(this.layoutFrame);
        }
        this.layoutFrame = requestAnimationFrame(function () {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for (var ACTIVATION_EVENT_TYPES_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler);
        this.adapter.registerInteractionHandler('blur', this.blurHandler);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
        var e_2, _a;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
        }
        else {
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
        var e_3, _a;
        try {
            for (var ACTIVATION_EVENT_TYPES_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
        try {
            for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MDCRippleFoundation.prototype.removeCssVars = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activateImpl = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState = _this.defaultActivationState();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function () {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getNormalizedEventCoords)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame.width / 2,
                y: this.frame.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        var endPoint = {
            x: (this.frame.width / 2) - (this.initialSize / 2),
            y: (this.frame.height / 2) - (this.initialSize / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState = function () {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivateImpl = function () {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        }
        else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function () {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal = function () {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize = initialSize - 1;
        }
        else {
            this.initialSize = initialSize;
        }
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_3__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNormalizedEventCoords": () => (/* binding */ getNormalizedEventCoords),
/* harmony export */   "supportsCssVariables": () => (/* binding */ supportsCssVariables)
/* harmony export */ });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    supportsCssVars =
        explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/component.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextFieldCharacterCounter": () => (/* binding */ MDCTextFieldCharacterCounter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounter = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldCharacterCounter, _super);
    function MDCTextFieldCharacterCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldCharacterCounter.attachTo = function (root) {
        return new MDCTextFieldCharacterCounter(root);
    };
    Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function (content) {
                _this.root.textContent = content;
            },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTextFieldCharacterCounterFoundation(adapter);
    };
    return MDCTextFieldCharacterCounter;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/constants.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ROOT: 'mdc-text-field-character-counter',
};
var strings = {
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/foundation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/foundation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextFieldCharacterCounterFoundation": () => (/* binding */ MDCTextFieldCharacterCounterFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldCharacterCounterFoundation, _super);
    function MDCTextFieldCharacterCounterFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */
        get: function () {
            return {
                setContent: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldCharacterCounterFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/component.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextField": () => (/* binding */ MDCTextField)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_floating_label_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/floating-label/component */ "./node_modules/@material/floating-label/component.js");
/* harmony import */ var _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/line-ripple/component */ "./node_modules/@material/line-ripple/component.js");
/* harmony import */ var _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/notched-outline/component */ "./node_modules/@material/notched-outline/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _character_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character-counter/component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony import */ var _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-counter/foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony import */ var _helper_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-text/component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony import */ var _helper_text_foundation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper-text/foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/component */ "./node_modules/@material/textfield/icon/component.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
















var MDCTextField = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextField, _super);
    function MDCTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextField.attachTo = function (root) {
        return new MDCTextField(root);
    };
    MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__.MDCRipple(el, foundation); }; }
        if (lineRippleFactory === void 0) { lineRippleFactory = function (el) { return new _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_2__.MDCLineRipple(el); }; }
        if (helperTextFactory === void 0) { helperTextFactory = function (el) {
            return new _helper_text_component__WEBPACK_IMPORTED_MODULE_3__.MDCTextFieldHelperText(el);
        }; }
        if (characterCounterFactory === void 0) { characterCounterFactory = function (el) {
            return new _character_counter_component__WEBPACK_IMPORTED_MODULE_4__.MDCTextFieldCharacterCounter(el);
        }; }
        if (iconFactory === void 0) { iconFactory = function (el) { return new _icon_component__WEBPACK_IMPORTED_MODULE_5__.MDCTextFieldIcon(el); }; }
        if (labelFactory === void 0) { labelFactory = function (el) { return new _material_floating_label_component__WEBPACK_IMPORTED_MODULE_6__.MDCFloatingLabel(el); }; }
        if (outlineFactory === void 0) { outlineFactory = function (el) { return new _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_7__.MDCNotchedOutline(el); }; }
        this.input =
            this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.INPUT_SELECTOR);
        var labelElement = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.LABEL_SELECTOR);
        this.label = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.LINE_RIPPLE_SELECTOR);
        this.lineRipple =
            lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.OUTLINE_SELECTOR);
        this.outline = outlineElement ? outlineFactory(outlineElement) : null;
        // Helper text
        var helperTextStrings = _helper_text_foundation__WEBPACK_IMPORTED_MODULE_9__.MDCTextFieldHelperTextFoundation.strings;
        var nextElementSibling = this.root.nextElementSibling;
        var hasHelperLine = (nextElementSibling && nextElementSibling.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_8__.cssClasses.HELPER_LINE));
        var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
        this.helperText = helperTextEl ? helperTextFactory(helperTextEl) : null;
        // Character counter
        var characterCounterStrings = _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__.MDCTextFieldCharacterCounterFoundation.strings;
        var characterCounterEl = this.root.querySelector(characterCounterStrings.ROOT_SELECTOR);
        // If character counter is not found in root element search in sibling element.
        if (!characterCounterEl && hasHelperLine && nextElementSibling) {
            characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
        }
        this.characterCounter =
            characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
        // Leading icon
        var leadingIconEl = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.LEADING_ICON_SELECTOR);
        this.leadingIcon = leadingIconEl ? iconFactory(leadingIconEl) : null;
        // Trailing icon
        var trailingIconEl = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.TRAILING_ICON_SELECTOR);
        this.trailingIcon = trailingIconEl ? iconFactory(trailingIconEl) : null;
        // Prefix and Suffix
        this.prefix = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.PREFIX_SELECTOR);
        this.suffix = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.SUFFIX_SELECTOR);
        this.ripple = this.createRipple(rippleFactory);
    };
    MDCTextField.prototype.destroy = function () {
        if (this.ripple) {
            this.ripple.destroy();
        }
        if (this.lineRipple) {
            this.lineRipple.destroy();
        }
        if (this.helperText) {
            this.helperText.destroy();
        }
        if (this.characterCounter) {
            this.characterCounter.destroy();
        }
        if (this.leadingIcon) {
            this.leadingIcon.destroy();
        }
        if (this.trailingIcon) {
            this.trailingIcon.destroy();
        }
        if (this.label) {
            this.label.destroy();
        }
        if (this.outline) {
            this.outline.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Initializes the Text Field's internal state based on the environment's
     * state.
     */
    MDCTextField.prototype.initialSyncWithDOM = function () {
        this.disabled = this.input.disabled;
    };
    Object.defineProperty(MDCTextField.prototype, "value", {
        get: function () {
            return this.foundation.getValue();
        },
        /**
         * @param value The value to set on the input.
         */
        set: function (value) {
            this.foundation.setValue(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "disabled", {
        get: function () {
            return this.foundation.isDisabled();
        },
        /**
         * @param disabled Sets the Text Field disabled or enabled.
         */
        set: function (disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "valid", {
        get: function () {
            return this.foundation.isValid();
        },
        /**
         * @param valid Sets the Text Field valid or invalid.
         */
        set: function (valid) {
            this.foundation.setValid(valid);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "required", {
        get: function () {
            return this.input.required;
        },
        /**
         * @param required Sets the Text Field to required.
         */
        set: function (required) {
            this.input.required = required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "pattern", {
        get: function () {
            return this.input.pattern;
        },
        /**
         * @param pattern Sets the input element's validation pattern.
         */
        set: function (pattern) {
            this.input.pattern = pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "minLength", {
        get: function () {
            return this.input.minLength;
        },
        /**
         * @param minLength Sets the input element's minLength.
         */
        set: function (minLength) {
            this.input.minLength = minLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "maxLength", {
        get: function () {
            return this.input.maxLength;
        },
        /**
         * @param maxLength Sets the input element's maxLength.
         */
        set: function (maxLength) {
            // Chrome throws exception if maxLength is set to a value less than zero
            if (maxLength < 0) {
                this.input.removeAttribute('maxLength');
            }
            else {
                this.input.maxLength = maxLength;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "min", {
        get: function () {
            return this.input.min;
        },
        /**
         * @param min Sets the input element's min.
         */
        set: function (min) {
            this.input.min = min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "max", {
        get: function () {
            return this.input.max;
        },
        /**
         * @param max Sets the input element's max.
         */
        set: function (max) {
            this.input.max = max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "step", {
        get: function () {
            return this.input.step;
        },
        /**
         * @param step Sets the input element's step.
         */
        set: function (step) {
            this.input.step = step;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
        /**
         * Sets the helper text element content.
         */
        set: function (content) {
            this.foundation.setHelperTextContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
        /**
         * Sets the aria label of the leading icon.
         */
        set: function (label) {
            this.foundation.setLeadingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function (content) {
            this.foundation.setLeadingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
        /**
         * Sets the aria label of the trailing icon.
         */
        set: function (label) {
            this.foundation.setTrailingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
        /**
         * Sets the text content of the trailing icon.
         */
        set: function (content) {
            this.foundation.setTrailingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
        /**
         * Enables or disables the use of native validation. Use this for custom validation.
         * @param useNativeValidation Set this to false to ignore native input validation.
         */
        set: function (useNativeValidation) {
            this.foundation.setUseNativeValidation(useNativeValidation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "prefixText", {
        /**
         * Gets the text content of the prefix, or null if it does not exist.
         */
        get: function () {
            return this.prefix ? this.prefix.textContent : null;
        },
        /**
         * Sets the text content of the prefix, if it exists.
         */
        set: function (prefixText) {
            if (this.prefix) {
                this.prefix.textContent = prefixText;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "suffixText", {
        /**
         * Gets the text content of the suffix, or null if it does not exist.
         */
        get: function () {
            return this.suffix ? this.suffix.textContent : null;
        },
        /**
         * Sets the text content of the suffix, if it exists.
         */
        set: function (suffixText) {
            if (this.suffix) {
                this.suffix.textContent = suffixText;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Focuses the input element.
     */
    MDCTextField.prototype.focus = function () {
        this.input.focus();
    };
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    MDCTextField.prototype.layout = function () {
        var openNotch = this.foundation.shouldFloat;
        this.foundation.notchOutline(openNotch);
    };
    MDCTextField.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_11__.MDCTextFieldFoundation(adapter, this.getFoundationMap());
    };
    MDCTextField.prototype.getRootAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            registerTextFieldInteractionHandler: function (evtType, handler) {
                _this.listen(evtType, handler);
            },
            deregisterTextFieldInteractionHandler: function (evtType, handler) {
                _this.unlisten(evtType, handler);
            },
            registerValidationAttributeChangeHandler: function (handler) {
                var getAttributesList = function (mutationsList) {
                    return mutationsList
                        .map(function (mutation) { return mutation.attributeName; })
                        .filter(function (attributeName) { return attributeName; });
                };
                var observer = new MutationObserver(function (mutationsList) { return handler(getAttributesList(mutationsList)); });
                var config = { attributes: true };
                observer.observe(_this.input, config);
                return observer;
            },
            deregisterValidationAttributeChangeHandler: function (observer) {
                observer.disconnect();
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getInputAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getNativeInput: function () { return _this.input; },
            setInputAttr: function (attr, value) {
                _this.input.setAttribute(attr, value);
            },
            removeInputAttr: function (attr) {
                _this.input.removeAttribute(attr);
            },
            isFocused: function () { return document.activeElement === _this.input; },
            registerInputInteractionHandler: function (evtType, handler) {
                _this.input.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_12__.applyPassive)());
            },
            deregisterInputInteractionHandler: function (evtType, handler) {
                _this.input.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_12__.applyPassive)());
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getLabelAdapterMethods = function () {
        var _this = this;
        return {
            floatLabel: function (shouldFloat) {
                _this.label && _this.label.float(shouldFloat);
            },
            getLabelWidth: function () { return _this.label ? _this.label.getWidth() : 0; },
            hasLabel: function () { return Boolean(_this.label); },
            shakeLabel: function (shouldShake) {
                _this.label && _this.label.shake(shouldShake);
            },
            setLabelRequired: function (isRequired) {
                _this.label && _this.label.setRequired(isRequired);
            },
        };
    };
    MDCTextField.prototype.getLineRippleAdapterMethods = function () {
        var _this = this;
        return {
            activateLineRipple: function () {
                if (_this.lineRipple) {
                    _this.lineRipple.activate();
                }
            },
            deactivateLineRipple: function () {
                if (_this.lineRipple) {
                    _this.lineRipple.deactivate();
                }
            },
            setLineRippleTransformOrigin: function (normalizedX) {
                if (_this.lineRipple) {
                    _this.lineRipple.setRippleCenter(normalizedX);
                }
            },
        };
    };
    MDCTextField.prototype.getOutlineAdapterMethods = function () {
        var _this = this;
        return {
            closeOutline: function () {
                _this.outline && _this.outline.closeNotch();
            },
            hasOutline: function () { return Boolean(_this.outline); },
            notchOutline: function (labelWidth) {
                _this.outline && _this.outline.notch(labelWidth);
            },
        };
    };
    /**
     * @return A map of all subcomponents to subfoundations.
     */
    MDCTextField.prototype.getFoundationMap = function () {
        return {
            characterCounter: this.characterCounter ?
                this.characterCounter.foundationForTextField :
                undefined,
            helperText: this.helperText ? this.helperText.foundationForTextField :
                undefined,
            leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForTextField :
                undefined,
            trailingIcon: this.trailingIcon ?
                this.trailingIcon.foundationForTextField :
                undefined,
        };
    };
    MDCTextField.prototype.createRipple = function (rippleFactory) {
        var _this = this;
        var isTextArea = this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_8__.cssClasses.TEXTAREA);
        var isOutlined = this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_8__.cssClasses.OUTLINED);
        if (isTextArea || isOutlined) {
            return null;
        }
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__.MDCRipple.createAdapter(this)), { isSurfaceActive: function () { return _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_13__.matches(_this.input, ':active'); }, registerInteractionHandler: function (evtType, handler) {
                _this.input.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_12__.applyPassive)());
            }, deregisterInteractionHandler: function (evtType, handler) {
                _this.input.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_12__.applyPassive)());
            } });
        // tslint:enable:object-literal-sort-keys
        return rippleFactory(this.root, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_14__.MDCRippleFoundation(adapter));
    };
    return MDCTextField;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_15__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/constants.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALWAYS_FLOAT_TYPES": () => (/* binding */ ALWAYS_FLOAT_TYPES),
/* harmony export */   "VALIDATION_ATTR_WHITELIST": () => (/* binding */ VALIDATION_ATTR_WHITELIST),
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "numbers": () => (/* binding */ numbers),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
    SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses = {
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    LABEL_FLOATING: 'mdc-text-field--label-floating',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
    WITH_INTERNAL_COUNTER: 'mdc-text-field--with-internal-counter',
};
var numbers = {
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern',
    'min',
    'max',
    'required',
    'step',
    'minlength',
    'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value
 * is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color',
    'date',
    'datetime-local',
    'month',
    'range',
    'time',
    'week',
];

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/foundation.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/foundation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextFieldFoundation": () => (/* binding */ MDCTextFieldFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;
        _this.isFocused = false;
        _this.receivedUserInput = false;
        _this.valid = true;
        _this.useNativeValidation = true;
        _this.validateOnValueChange = true;
        _this.helperText = foundationMap.helperText;
        _this.characterCounter = foundationMap.characterCounter;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.trailingIcon = foundationMap.trailingIcon;
        _this.inputFocusHandler = function () {
            _this.activateFocus();
        };
        _this.inputBlurHandler = function () {
            _this.deactivateFocus();
        };
        _this.inputInputHandler = function () {
            _this.handleInput();
        };
        _this.setPointerXOffset = function (evt) {
            _this.setTransformOrigin(evt);
        };
        _this.textFieldInteractionHandler = function () {
            _this.handleTextFieldInteraction();
        };
        _this.validationAttributeChangeHandler = function (attributesList) {
            _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat", {
        get: function () {
            var type = this.getNativeInput().type;
            return _constants__WEBPACK_IMPORTED_MODULE_1__.ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() ||
                this.isBadInput();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                setInputAttr: function () { return undefined; },
                removeInputAttr: function () { return undefined; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () {
                    return new MutationObserver(function () { return undefined; });
                },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                setLabelRequired: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var e_1, _a, e_2, _b;
        if (this.adapter.hasLabel() && this.getNativeInput().required) {
            this.adapter.setLabelRequired(true);
        }
        if (this.adapter.isFocused()) {
            this.inputFocusHandler();
        }
        else if (this.adapter.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter.floatLabel(true);
            this.styleFloating(true);
        }
        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
                var evtType = POINTERDOWN_EVENTS_1_1.value;
                this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var INTERACTION_EVENTS_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.validationObserver =
            this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var e_3, _a, e_4, _b;
        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
                var evtType = POINTERDOWN_EVENTS_2_1.value;
                this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var INTERACTION_EVENTS_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (_constants__WEBPACK_IMPORTED_MODULE_1__.VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                _this.styleValidity(true);
                _this.adapter.setLabelRequired(_this.getNativeInput().required);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setcharacterCounter(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
            return;
        }
        if (openNotch) {
            var labelWidth = this.adapter.getLabelWidth() * _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.LABEL_SCALE;
            this.adapter.notchOutline(labelWidth);
        }
        else {
            this.adapter.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused = true;
        this.styleFocused(this.isFocused);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText &&
            (this.helperText.isPersistent() || !this.helperText.isValidation() ||
                !this.valid)) {
            this.helperText.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) {
            return;
        }
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity(isValid);
        this.styleFocused(this.isFocused);
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the
        // value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput().value = value;
        }
        this.setcharacterCounter(value.length);
        if (this.validateOnValueChange) {
            var isValid = this.isValid();
            this.styleValidity(isValid);
        }
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            if (this.validateOnValueChange) {
                this.adapter.shakeLabel(this.shouldShake);
            }
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a
     *     native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.valid = isValid;
        this.styleValidity(isValid);
        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
        if (this.adapter.hasLabel()) {
            this.adapter.shakeLabel(shouldShake);
        }
    };
    /**
     * @param shouldValidate Whether or not validity should be updated on
     *     value change.
     */
    MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
        this.validateOnValueChange = shouldValidate;
    };
    /**
     * @return Whether or not validity should be updated on value change. `true`
     *     by default.
     */
    MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
        return this.validateOnValueChange;
    };
    /**
     * Enables or disables the use of native validation. Use this for custom
     * validation.
     * @param useNativeValidation Set this to false to ignore native input
     *     validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput().disabled = disabled;
        this.styleDisabled(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon) {
            this.trailingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon) {
            this.trailingIcon.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total
     * character limit.
     */
    MDCTextFieldFoundation.prototype.setcharacterCounter = function (currentLength) {
        if (!this.characterCounter) {
            return;
        }
        var maxLength = this.getNativeInput().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied
     *     value.
     */
    MDCTextFieldFoundation.prototype.isBadInput = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid = function () {
        return this.getNativeInput().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.addClass(INVALID);
        }
        if (this.helperText) {
            this.helperText.setValidity(isValid);
            // We dynamically set or unset aria-describedby for validation helper text
            // only, based on whether the field is valid
            var helperTextValidation = this.helperText.isValidation();
            if (!helperTextValidation) {
                return;
            }
            var helperTextVisible = this.helperText.isVisible();
            var helperTextId = this.helperText.getId();
            if (helperTextVisible && helperTextId) {
                this.adapter.setInputAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DESCRIBEDBY, helperTextId);
            }
            else {
                this.adapter.removeInputAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DESCRIBEDBY);
            }
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter.addClass(FOCUSED);
        }
        else {
            this.adapter.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter.addClass(DISABLED);
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(isDisabled);
        }
        if (this.trailingIcon) {
            this.trailingIcon.setDisabled(isDisabled);
        }
    };
    /**
     * Styles the component based on the label floating state.
     */
    MDCTextFieldFoundation.prototype.styleFloating = function (isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
        if (isFloating) {
            this.adapter.addClass(LABEL_FLOATING);
        }
        else {
            this.adapter.removeClass(LABEL_FLOATING);
        }
    };
    /**
     * @return The native text input element from the host environment, or an
     *     object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput = function () {
        // this.adapter may be undefined in foundation unit tests. This happens when
        // testdouble is creating a mock object and invokes the
        // shouldShake/shouldFloat getters (which in turn call getValue(), which
        // calls this method) before init() has been called from the MDCTextField
        // constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            required: false,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/component.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/component.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextFieldHelperText": () => (/* binding */ MDCTextFieldHelperText)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperText = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldHelperText, _super);
    function MDCTextFieldHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText.attachTo = function (root) {
        return new MDCTextFieldHelperText(root);
    };
    Object.defineProperty(MDCTextFieldHelperText.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTextFieldHelperTextFoundation(adapter);
    };
    return MDCTextFieldHelperText;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
    ROOT: 'mdc-text-field-helper-text',
};
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/foundation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextFieldHelperTextFoundation": () => (/* binding */ MDCTextFieldHelperTextFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldHelperTextFoundation, _super);
    function MDCTextFieldHelperTextFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldHelperTextFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperTextFoundation.prototype.getId = function () {
        return this.adapter.getAttr('id');
    };
    MDCTextFieldHelperTextFoundation.prototype.isVisible = function () {
        return this.adapter.getAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN) !== 'true';
    };
    /**
     * Sets the content of the helper text field.
     */
    MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldHelperTextFoundation.prototype.isPersistent = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_PERSISTENT);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */
    MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_PERSISTENT);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @return whether the helper text acts as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.isValidation = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to the screen reader.
     */
    MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
        var helperTextIsPersistent = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.showToScreenReader();
            // If role is already alert, refresh it to trigger another announcement
            // from screenreader.
            if (this.adapter.getAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE) === 'alert') {
                this.refreshAlertRole();
            }
            else {
                this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE, 'alert');
            }
        }
        else {
            this.adapter.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCTextFieldHelperTextFoundation.prototype.hide = function () {
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN, 'true');
    };
    MDCTextFieldHelperTextFoundation.prototype.refreshAlertRole = function () {
        var _this = this;
        this.adapter.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE);
        requestAnimationFrame(function () {
            _this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE, 'alert');
        });
    };
    return MDCTextFieldHelperTextFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldHelperTextFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextFieldIcon": () => (/* binding */ MDCTextFieldIcon)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldIcon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldIcon, _super);
    function MDCTextFieldIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon.attachTo = function (root) {
        return new MDCTextFieldIcon(root);
    };
    Object.defineProperty(MDCTextFieldIcon.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTextFieldIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTextFieldIconFoundation(adapter);
    };
    return MDCTextFieldIcon;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/constants.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button',
};
var cssClasses = {
    ROOT: 'mdc-text-field__icon',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/foundation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextFieldIconFoundation": () => (/* binding */ MDCTextFieldIconFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldIconFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldIconFoundation, _super);
    function MDCTextFieldIconFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldIconFoundation.defaultAdapter), adapter)) || this;
        _this.savedTabIndex = null;
        _this.interactionHandler = function (evt) {
            _this.handleInteraction(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIconFoundation.prototype.init = function () {
        var e_1, _a;
        this.savedTabIndex = this.adapter.getAttr('tabindex');
        try {
            for (var INTERACTION_EVENTS_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerInteractionHandler(evtType, this.interactionHandler);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_a = INTERACTION_EVENTS_1.return)) _a.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MDCTextFieldIconFoundation.prototype.destroy = function () {
        var e_2, _a;
        try {
            for (var INTERACTION_EVENTS_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.interactionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_a = INTERACTION_EVENTS_2.return)) _a.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex) {
            return;
        }
        if (disabled) {
            this.adapter.setAttr('tabindex', '-1');
            this.adapter.removeAttr('role');
        }
        else {
            this.adapter.setAttr('tabindex', this.savedTabIndex);
            this.adapter.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter.setAttr('aria-label', label);
    };
    MDCTextFieldIconFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            evt.preventDefault(); // stop click from causing host label to focus
            // input
            this.adapter.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldIconFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/formdemo/formDemo.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/formdemo/formDemo.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px;\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px);\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px);\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px);\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 24px;\n      grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__cell {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n    width: calc(8.3333333333% - 24px);\n    width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n    width: calc(16.6666666667% - 24px);\n    width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n    width: calc(25% - 24px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n    width: calc(41.6666666667% - 24px);\n    width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n    width: calc(50% - 24px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n    width: calc(58.3333333333% - 24px);\n    width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n    width: calc(66.6666666667% - 24px);\n    width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n    width: calc(75% - 24px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n      width: auto;\n      grid-column-end: span 9;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n    width: calc(83.3333333333% - 24px);\n    width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n      width: auto;\n      grid-column-end: span 10;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n    width: calc(91.6666666667% - 24px);\n    width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n      width: auto;\n      grid-column-end: span 11;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n    width: calc(100% - 24px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n      width: auto;\n      grid-column-end: span 12;\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__cell {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n    width: calc(12.5% - 16px);\n    width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n    width: calc(37.5% - 16px);\n    width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n    width: calc(62.5% - 16px);\n    width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n    width: calc(87.5% - 16px);\n    width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__cell {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n}\n.mdc-layout-grid__cell--order-1 {\n  order: 1;\n}\n.mdc-layout-grid__cell--order-2 {\n  order: 2;\n}\n.mdc-layout-grid__cell--order-3 {\n  order: 3;\n}\n.mdc-layout-grid__cell--order-4 {\n  order: 4;\n}\n.mdc-layout-grid__cell--order-5 {\n  order: 5;\n}\n.mdc-layout-grid__cell--order-6 {\n  order: 6;\n}\n.mdc-layout-grid__cell--order-7 {\n  order: 7;\n}\n.mdc-layout-grid__cell--order-8 {\n  order: 8;\n}\n.mdc-layout-grid__cell--order-9 {\n  order: 9;\n}\n.mdc-layout-grid__cell--order-10 {\n  order: 10;\n}\n.mdc-layout-grid__cell--order-11 {\n  order: 11;\n}\n.mdc-layout-grid__cell--order-12 {\n  order: 12;\n}\n.mdc-layout-grid__cell--align-top {\n  align-self: flex-start;\n}\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-top {\n    align-self: start;\n  }\n}\n.mdc-layout-grid__cell--align-middle {\n  align-self: center;\n}\n.mdc-layout-grid__cell--align-bottom {\n  align-self: flex-end;\n}\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-bottom {\n    align-self: end;\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 1176px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-desktop, 72px) * 12 +\n      var(--mdc-layout-grid-gutter-desktop, 24px) * 11 +\n      var(--mdc-layout-grid-margin-desktop, 24px) * 2\n  );\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 720px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-tablet, 72px) * 8 +\n      var(--mdc-layout-grid-gutter-tablet, 16px) * 7 +\n      var(--mdc-layout-grid-margin-tablet, 16px) * 2\n  );\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 368px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-phone, 72px) * 4 +\n      var(--mdc-layout-grid-gutter-phone, 16px) * 3 +\n      var(--mdc-layout-grid-margin-phone, 16px) * 2\n  );\n  }\n}\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n.mdc-touch-target-wrapper {\n  display: inline;\n}\n\n.mdc-radio {\n  padding: calc((40px - 20px) / 2);\n}\n.mdc-radio .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mdc-radio .mdc-radio__native-control:enabled:checked + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: #018786;\n  /* @alternate */\n  border-color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-radio .mdc-radio__native-control:enabled + .mdc-radio__background .mdc-radio__inner-circle {\n  border-color: #018786;\n  /* @alternate */\n  border-color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio .mdc-radio__native-control:disabled:checked + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mdc-radio [aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-radio .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mdc-radio .mdc-radio__background::before {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-radio .mdc-radio__background::before {\n  top: calc(-1 * (40px - 20px) / 2);\n  left: calc(-1 * (40px - 20px) / 2);\n  width: 40px;\n  height: 40px;\n}\n.mdc-radio .mdc-radio__native-control {\n  top: calc((40px - 40px) / 2);\n  right: calc((40px - 40px) / 2);\n  left: calc((40px - 40px) / 2);\n  width: 40px;\n  height: 40px;\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {\n    border-color: GrayText;\n  }\n  .mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked + .mdc-radio__background .mdc-radio__outer-circle {\n    border-color: GrayText;\n  }\n  .mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n    border-color: GrayText;\n  }\n}\n\n.mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  /* @alternate */\n  will-change: opacity, transform, border-color, color;\n}\n.mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0, 0);\n  border-width: 10px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n}\n.mdc-radio--touch {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n.mdc-radio--touch .mdc-radio__native-control {\n  top: calc((40px - 48px) / 2);\n  right: calc((40px - 48px) / 2);\n  left: calc((40px - 48px) / 2);\n  width: 48px;\n  height: 48px;\n}\n.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring {\n  pointer-events: none;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  box-sizing: content-box;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n}\n@media screen and (forced-colors: active) {\n  .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring {\n    border-color: CanvasText;\n  }\n}\n.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after {\n  content: \"\";\n  border: 2px solid transparent;\n  border-radius: 8px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(100% + 4px);\n  width: calc(100% + 4px);\n}\n@media screen and (forced-colors: active) {\n  .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background,\n.mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle {\n  transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio__native-control:disabled + .mdc-radio__background,\n[aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background {\n  cursor: default;\n}\n\n.mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(1);\n  opacity: 0.12;\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-radio {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-radio .mdc-radio__ripple::before,\n.mdc-radio .mdc-radio__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-radio .mdc-radio__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-radio .mdc-radio__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-radio .mdc-radio__ripple::before,\n.mdc-radio .mdc-radio__ripple::after {\n  top: calc(50% - 50%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before,\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-radio .mdc-radio__ripple::before, .mdc-radio .mdc-radio__ripple::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-radio:hover .mdc-radio__ripple::before, .mdc-radio.mdc-ripple-surface--hover .mdc-radio__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-radio.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__background::before, .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before {\n  content: none;\n}\n\n.mdc-radio__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-floating-label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  position: absolute;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  -webkit-transform-origin: left top;\n  /* @noflip */ /*rtl:ignore*/\n  transform-origin: left top;\n  line-height: 1.15rem;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  /* @alternate */\n  will-change: transform;\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n[dir=rtl] .mdc-floating-label, .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  -webkit-transform-origin: right top;\n  /* @noflip */ /*rtl:ignore*/\n  transform-origin: right top;\n  /* @noflip */ /*rtl:ignore*/\n  text-align: right;\n  /*rtl:end:ignore*/\n}\n\n.mdc-floating-label--float-above {\n  cursor: auto;\n}\n\n.mdc-floating-label--required::after {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 1px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  content: \"*\";\n}\n[dir=rtl] .mdc-floating-label--required, .mdc-floating-label--required[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /*rtl:end:ignore*/\n}\n[dir=rtl] .mdc-floating-label--required::after, .mdc-floating-label--required[dir=rtl]::after {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 1px;\n}\n\n.mdc-floating-label--float-above {\n  transform: translateY(-106%) scale(0.75);\n}\n\n.mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-standard 250ms 1;\n}\n\n@keyframes mdc-floating-label-shake-float-above-standard {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);\n  }\n}\n.mdc-line-ripple::before, .mdc-line-ripple::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom-style: solid;\n  content: \"\";\n}\n.mdc-line-ripple::before {\n  border-bottom-width: 1px;\n}\n.mdc-line-ripple::before {\n  z-index: 1;\n}\n.mdc-line-ripple::after {\n  transform: scaleX(0);\n  border-bottom-width: 2px;\n  opacity: 0;\n  z-index: 2;\n}\n.mdc-line-ripple::after {\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-line-ripple--active::after {\n  transform: scaleX(1);\n  opacity: 1;\n}\n\n.mdc-line-ripple--deactivating::after {\n  opacity: 0;\n}\n\n.mdc-notched-outline {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  /* @noflip */ /*rtl:ignore*/\n  text-align: left;\n  pointer-events: none;\n}\n[dir=rtl] .mdc-notched-outline, .mdc-notched-outline[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  text-align: right;\n  /*rtl:end:ignore*/\n}\n\n.mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {\n  box-sizing: border-box;\n  height: 100%;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  pointer-events: none;\n}\n.mdc-notched-outline__leading {\n  /* @noflip */ /*rtl:ignore*/\n  border-left: 1px solid;\n  /* @noflip */ /*rtl:ignore*/\n  border-right: none;\n  width: 12px;\n}\n[dir=rtl] .mdc-notched-outline__leading, .mdc-notched-outline__leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-left: none;\n  /* @noflip */ /*rtl:ignore*/\n  border-right: 1px solid;\n  /*rtl:end:ignore*/\n}\n\n.mdc-notched-outline__trailing {\n  /* @noflip */ /*rtl:ignore*/\n  border-left: none;\n  /* @noflip */ /*rtl:ignore*/\n  border-right: 1px solid;\n  flex-grow: 1;\n}\n[dir=rtl] .mdc-notched-outline__trailing, .mdc-notched-outline__trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-left: 1px solid;\n  /* @noflip */ /*rtl:ignore*/\n  border-right: none;\n  /*rtl:end:ignore*/\n}\n\n.mdc-notched-outline__notch {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: calc(100% - 12px * 2);\n}\n.mdc-notched-outline .mdc-floating-label {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n.mdc-notched-outline .mdc-floating-label--float-above {\n  text-overflow: clip;\n}\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: 133.3333333333%;\n}\n\n.mdc-notched-outline--notched .mdc-notched-outline__notch {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 8px;\n  border-top: none;\n}\n[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch, .mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-notched-outline--no-label .mdc-notched-outline__notch {\n  display: none;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --mdc-theme-primary: #006874;\n    --mdc-theme-on-primary: #ffffff;\n    --mdc-theme-secondary: #5c6300;\n    --mdc-theme-on-secondary: #ffffff;\n    --mdc-theme-surface: #fafdfd;\n    --mdc-theme-on-surface: #191c1d;\n    --mdc-theme-background: #fafdfd;\n    --mdc-theme-on-background: #191c1d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --mdc-theme-primary: #4fd8eb;\n    --mdc-theme-on-primary: #00363d;\n    --mdc-theme-secondary: #c2d016;\n    --mdc-theme-on-secondary: #2f3300;\n    --mdc-theme-surface-base: 195, 7.4%;\n    --mdc-theme-surface-l: 15.6%;\n    --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\n    --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\n    --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\n    --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\n    --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\n    --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\n    --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\n    --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n    --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\n    --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\n    --mdc-theme-on-surface: #e1e3e3;\n    --mdc-theme-background: #191c1d;\n    --mdc-theme-on-background: #e1e3e3;\n    --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdc-elevation--z1 {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-elevation--z2 {\n    background: var(--mdc-theme-surface-z2);\n  }\n  .mdc-elevation--z3 {\n    background: var(--mdc-theme-surface-z3);\n  }\n  .mdc-elevation--z4 {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-elevation--z5 {\n    background: var(--mdc-theme-surface-z5);\n  }\n  .mdc-elevation--z6 {\n    background: var(--mdc-theme-surface-z6);\n  }\n  .mdc-elevation--z7 {\n    background: var(--mdc-theme-surface-z7);\n  }\n  .mdc-drawer.mdc-drawer--modal {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__title {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__subtitle {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-surface-z9);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar {\n    background-color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar__title {\n    color: var(--mdc-theme-on-primary);\n  }\n  .mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-tab.mdc-tab--active .mdc-tab__icon, .mdc-tab.mdc-tab--active .mdc-tab__text-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__header-cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: var(--mdc-theme-surface-z3);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__title {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog__actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined .mdc-notched-outline {\n    z-index: -1;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-primary);\n  }\n}\n.mdc-typography {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);\n}\n\n.mdc-typography--headline1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 6rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline1-font-size, 6rem);\n  line-height: 6rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline1-line-height, 6rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline1-font-weight, 300);\n  letter-spacing: -0.015625em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline1-text-transform, inherit);\n}\n\n.mdc-typography--headline2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline2-font-size, 3.75rem);\n  line-height: 3.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline2-line-height, 3.75rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline2-font-weight, 300);\n  letter-spacing: -0.0083333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline2-text-transform, inherit);\n}\n\n.mdc-typography--headline3 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline3-font-size, 3rem);\n  line-height: 3.125rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline3-line-height, 3.125rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline3-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline3-text-transform, inherit);\n}\n\n.mdc-typography--headline4 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 2.125rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline4-font-size, 2.125rem);\n  line-height: 2.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline4-line-height, 2.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline4-font-weight, 400);\n  letter-spacing: 0.0073529412em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline4-text-transform, inherit);\n}\n\n.mdc-typography--headline5 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.5rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline5-font-size, 1.5rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline5-line-height, 2rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline5-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline5-text-transform, inherit);\n}\n\n.mdc-typography--headline6 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n}\n\n.mdc-typography--subtitle1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n}\n\n.mdc-typography--subtitle2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n}\n\n.mdc-typography--body1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body1-font-size, 1rem);\n  line-height: 1.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body1-line-height, 1.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body1-font-weight, 400);\n  letter-spacing: 0.03125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body1-text-transform, inherit);\n}\n\n.mdc-typography--body2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-typography--caption {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-typography--button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n}\n\n.mdc-typography--overline {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n}\n\nhtml {\n  background-color: var(--mdc-theme-background);\n}\n\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  vertical-align: middle;\n}\n\n.mdc-icon-button.actionsButton {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n\n.main-content {\n  padding: 1rem;\n}\n\n.content-section {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.demo-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.demo-group.wrap {\n  flex-wrap: wrap;\n}\n\n.mdc-form-field {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.mdc-form-field > label {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  order: 0;\n}\n[dir=rtl] .mdc-form-field > label, .mdc-form-field > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-form-field > label, .mdc-form-field > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 4px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-form-field--nowrap > label {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.mdc-form-field--align-end > label {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 4px;\n  order: -1;\n}\n[dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-form-field--space-between {\n  justify-content: space-between;\n}\n.mdc-form-field--space-between > label {\n  margin: 0;\n}\n[dir=rtl] .mdc-form-field--space-between > label, .mdc-form-field--space-between > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  margin: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--filled {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-text-field--filled .mdc-text-field__ripple::before,\n.mdc-text-field--filled .mdc-text-field__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-text-field--filled .mdc-text-field__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-text-field--filled .mdc-text-field__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-text-field--filled .mdc-text-field__ripple::before,\n.mdc-text-field--filled .mdc-text-field__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-text-field__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-text-field {\n  border-top-left-radius: 4px;\n  /* @alternate */\n  border-top-left-radius: var(--mdc-shape-small, 4px);\n  border-top-right-radius: 4px;\n  /* @alternate */\n  border-top-right-radius: var(--mdc-shape-small, 4px);\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  display: inline-flex;\n  align-items: baseline;\n  padding: 0 16px;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  /* @alternate */\n  will-change: opacity, transform, color;\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: rgba(0, 0, 0, 0.87);\n}\n@media all {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n    color: rgba(0, 0, 0, 0.54);\n  }\n}\n@media all {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.54);\n  }\n}\n.mdc-text-field .mdc-text-field__input {\n  caret-color: #6200ee;\n  /* @alternate */\n  caret-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,\n.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field .mdc-floating-label {\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.mdc-text-field__input {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  height: 28px;\n  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n  min-width: 0;\n  border: none;\n  border-radius: 0;\n  background: none;\n  appearance: none;\n  padding: 0;\n}\n.mdc-text-field__input::-ms-clear {\n  display: none;\n}\n.mdc-text-field__input::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.mdc-text-field__input:focus {\n  outline: none;\n}\n.mdc-text-field__input:invalid {\n  box-shadow: none;\n}\n@media all {\n  .mdc-text-field__input::placeholder {\n    transition: opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n    opacity: 0;\n  }\n}\n@media all {\n  .mdc-text-field__input:-ms-input-placeholder {\n    transition: opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n    opacity: 0;\n  }\n}\n@media all {\n  .mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {\n    transition-delay: 40ms;\n    transition-duration: 110ms;\n    opacity: 1;\n  }\n}\n@media all {\n  .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n    transition-delay: 40ms;\n    transition-duration: 110ms;\n    opacity: 1;\n  }\n}\n\n.mdc-text-field__affix {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  height: 28px;\n  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  white-space: nowrap;\n}\n.mdc-text-field--label-floating .mdc-text-field__affix, .mdc-text-field--no-label .mdc-text-field__affix {\n  opacity: 1;\n}\n@supports (-webkit-hyphens: none) {\n  .mdc-text-field--outlined .mdc-text-field__affix {\n    align-items: center;\n    align-self: center;\n    display: inline-flex;\n    height: 100%;\n  }\n}\n\n.mdc-text-field__affix--prefix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 2px;\n}\n[dir=rtl] .mdc-text-field__affix--prefix, .mdc-text-field__affix--prefix[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 2px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--end-aligned .mdc-text-field__affix--prefix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix, .mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__affix--suffix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-text-field__affix--suffix, .mdc-text-field__affix--suffix[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--end-aligned .mdc-text-field__affix--suffix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 2px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix, .mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 2px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--filled {\n  height: 56px;\n}\n.mdc-text-field--filled .mdc-text-field__ripple::before,\n.mdc-text-field--filled .mdc-text-field__ripple::after {\n  background-color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, rgba(0, 0, 0, 0.87));\n}\n.mdc-text-field--filled:hover .mdc-text-field__ripple::before, .mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before, .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-text-field--filled::before {\n  display: inline-block;\n  width: 0;\n  height: 40px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: whitesmoke;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: rgba(0, 0, 0, 0.42);\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {\n  border-bottom-color: rgba(0, 0, 0, 0.87);\n}\n.mdc-text-field--filled .mdc-line-ripple::after {\n  border-bottom-color: #6200ee;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-text-field--filled .mdc-floating-label {\n  /* @noflip */ /*rtl:ignore*/\n  left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n}\n[dir=rtl] .mdc-text-field--filled .mdc-floating-label, .mdc-text-field--filled .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--filled .mdc-floating-label--float-above {\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {\n  height: 100%;\n}\n.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {\n  display: none;\n}\n.mdc-text-field--filled.mdc-text-field--no-label::before {\n  display: none;\n}\n@supports (-webkit-hyphens: none) {\n  .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix {\n    align-items: center;\n    align-self: center;\n    display: inline-flex;\n    height: 100%;\n  }\n}\n\n.mdc-text-field--outlined {\n  height: 56px;\n  overflow: visible;\n}\n.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-37.25px) scale(1);\n}\n.mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: 0.75rem;\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-34.75px) scale(0.75);\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n.mdc-text-field--outlined .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;\n}\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);\n  }\n}\n.mdc-text-field--outlined .mdc-text-field__input {\n  height: 100%;\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #6200ee;\n  /* @alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: var(--mdc-shape-small, 4px);\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n  /*rtl:end:ignore*/\n}\n\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n    width: max(12px, var(--mdc-shape-small, 4px));\n  }\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {\n    max-width: calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2);\n  }\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: var(--mdc-shape-small, 4px);\n  /*rtl:end:ignore*/\n}\n\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));\n  }\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined {\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: max(16px, var(--mdc-shape-small, 4px));\n  }\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined + .mdc-text-field-helper-line {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));\n  }\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined + .mdc-text-field-helper-line {\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: max(16px, var(--mdc-shape-small, 4px));\n  }\n}\n.mdc-text-field--outlined.mdc-text-field--with-leading-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined.mdc-text-field--with-leading-icon {\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: max(16px, var(--mdc-shape-small, 4px));\n  }\n}\n[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon, .mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n@supports (top: max(0%)) {\n  [dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon, .mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl] {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: max(16px, var(--mdc-shape-small, 4px));\n  }\n}\n\n.mdc-text-field--outlined.mdc-text-field--with-trailing-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined.mdc-text-field--with-trailing-icon {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));\n  }\n}\n[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon, .mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /*rtl:end:ignore*/\n}\n@supports (top: max(0%)) {\n  [dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon, .mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl] {\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));\n  }\n}\n\n.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 1px;\n}\n.mdc-text-field--outlined .mdc-text-field__ripple::before,\n.mdc-text-field--outlined .mdc-text-field__ripple::after {\n  background-color: transparent;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, transparent);\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  /* @noflip */ /*rtl:ignore*/\n  left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--outlined .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 4px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--outlined .mdc-text-field__input {\n  display: flex;\n  border: none !important;\n  background-color: transparent;\n}\n.mdc-text-field--outlined .mdc-notched-outline {\n  z-index: 1;\n}\n\n.mdc-text-field--textarea {\n  flex-direction: column;\n  align-items: center;\n  width: auto;\n  height: auto;\n  padding: 0;\n  transition: none;\n}\n.mdc-text-field--textarea .mdc-floating-label {\n  top: 19px;\n}\n.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above) {\n  transform: none;\n}\n.mdc-text-field--textarea .mdc-text-field__input {\n  flex-grow: 1;\n  height: auto;\n  min-height: 1.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  box-sizing: border-box;\n  resize: none;\n  padding: 0 16px;\n  line-height: 1.5rem;\n}\n.mdc-text-field--textarea.mdc-text-field--filled::before {\n  display: none;\n}\n.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above {\n  transform: translateY(-10.25px) scale(0.75);\n}\n.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-textarea-filled 250ms 1;\n}\n@keyframes mdc-floating-label-shake-float-above-textarea-filled {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);\n  }\n}\n.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input {\n  margin-top: 23px;\n  margin-bottom: 9px;\n}\n.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 0;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-27.25px) scale(1);\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: 0.75rem;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-24.75px) scale(0.75);\n}\n.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-textarea-outlined 250ms 1;\n}\n@keyframes mdc-floating-label-shake-float-above-textarea-outlined {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n  }\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label {\n  top: 18px;\n}\n.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input {\n  margin-bottom: 2px;\n}\n.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter {\n  align-self: flex-end;\n  padding: 0 16px;\n}\n.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after {\n  display: inline-block;\n  width: 0;\n  height: 16px;\n  content: \"\";\n  vertical-align: -16px;\n}\n.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before {\n  display: none;\n}\n\n.mdc-text-field__resizer {\n  align-self: stretch;\n  display: inline-flex;\n  flex-direction: column;\n  flex-grow: 1;\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 56px;\n  min-width: fit-content;\n  /* @alternate */\n  min-width: -moz-available;\n  /* @alternate */\n  min-width: -webkit-fill-available;\n  overflow: hidden;\n  resize: both;\n}\n.mdc-text-field--filled .mdc-text-field__resizer {\n  transform: translateY(-1px);\n}\n.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,\n.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter {\n  transform: translateY(1px);\n}\n.mdc-text-field--outlined .mdc-text-field__resizer {\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateX(-1px) translateY(-1px);\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer, .mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateX(1px) translateY(-1px);\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,\n.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter {\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateX(1px) translateY(1px);\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input, [dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter, .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl], .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateX(-1px) translateY(1px);\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-text-field--with-leading-icon, .mdc-text-field--with-leading-icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label {\n  max-width: calc(100% - 48px);\n  /* @noflip */ /*rtl:ignore*/\n  left: 48px;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 48px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 64px / 0.75);\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {\n  /* @noflip */ /*rtl:ignore*/\n  left: 36px;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 36px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {\n  max-width: calc(100% - 60px);\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateY(-37.25px) translateX(-32px) scale(1);\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateY(-37.25px) translateX(32px) scale(1);\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: 0.75rem;\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateY(-34.75px) translateX(-32px) scale(0.75);\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl], .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateY(-34.75px) translateX(32px) scale(0.75);\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;\n}\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);\n  }\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /*rtl:end:ignore*/\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;\n}\n\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);\n  }\n}\n\n.mdc-text-field--with-trailing-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-text-field--with-trailing-icon, .mdc-text-field--with-trailing-icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label {\n  max-width: calc(100% - 64px);\n}\n.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 64px / 0.75);\n}\n.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {\n  max-width: calc(100% - 60px);\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label {\n  max-width: calc(100% - 96px);\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 96px / 0.75);\n}\n\n.mdc-text-field-helper-line {\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n.mdc-text-field + .mdc-text-field-helper-line {\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\n.mdc-form-field > .mdc-text-field + label {\n  align-self: flex-start;\n}\n\n.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: rgba(98, 0, 238, 0.87);\n}\n.mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-width: 2px;\n}\n.mdc-text-field--focused + .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {\n  opacity: 1;\n}\n.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 2px;\n}\n.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 0;\n}\n\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {\n  border-bottom-color: #b00020;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: #b00020;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: #b00020;\n  /* @alternate */\n  color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {\n  color: #b00020;\n  /* @alternate */\n  color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid .mdc-text-field__input {\n  caret-color: #b00020;\n  /* @alternate */\n  caret-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {\n  color: #b00020;\n  /* @alternate */\n  color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: #b00020;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n  border-color: #b00020;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: #b00020;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #b00020;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {\n  opacity: 1;\n}\n\n.mdc-text-field--disabled {\n  pointer-events: none;\n}\n.mdc-text-field--disabled .mdc-text-field__input {\n  color: rgba(0, 0, 0, 0.38);\n}\n@media all {\n  .mdc-text-field--disabled .mdc-text-field__input::placeholder {\n    color: rgba(0, 0, 0, 0.38);\n  }\n}\n@media all {\n  .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.38);\n  }\n}\n.mdc-text-field--disabled .mdc-floating-label {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled .mdc-text-field-character-counter,\n.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled .mdc-text-field__icon--leading {\n  color: rgba(0, 0, 0, 0.3);\n}\n.mdc-text-field--disabled .mdc-text-field__icon--trailing {\n  color: rgba(0, 0, 0, 0.3);\n}\n.mdc-text-field--disabled .mdc-text-field__affix--prefix {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled .mdc-text-field__affix--suffix {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled .mdc-line-ripple::before {\n  border-bottom-color: rgba(0, 0, 0, 0.06);\n}\n.mdc-text-field--disabled .mdc-notched-outline__leading,\n.mdc-text-field--disabled .mdc-notched-outline__notch,\n.mdc-text-field--disabled .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.06);\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__input::placeholder {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-floating-label {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field-character-counter,\n.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__icon--leading {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__icon--trailing {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__affix--prefix {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__affix--suffix {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-line-ripple::before {\n    border-bottom-color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-notched-outline__leading,\n.mdc-text-field--disabled .mdc-notched-outline__notch,\n.mdc-text-field--disabled .mdc-notched-outline__trailing {\n    border-color: GrayText;\n  }\n}\n@media screen and (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-text-field__input {\n    background-color: Window;\n  }\n  .mdc-text-field--disabled .mdc-floating-label {\n    z-index: 1;\n  }\n}\n.mdc-text-field--disabled .mdc-floating-label {\n  cursor: default;\n}\n.mdc-text-field--disabled.mdc-text-field--filled {\n  background-color: #fafafa;\n}\n.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple {\n  display: none;\n}\n.mdc-text-field--disabled .mdc-text-field__input {\n  pointer-events: auto;\n}\n\n.mdc-text-field--end-aligned .mdc-text-field__input {\n  /* @noflip */ /*rtl:ignore*/\n  text-align: right;\n}\n[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input, .mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  text-align: left;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-text-field--ltr-text, .mdc-text-field--ltr-text[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /*rtl:end:ignore*/\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,\n.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix {\n  /* @noflip */ /*rtl:ignore*/\n  direction: ltr;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 2px;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading {\n  order: 1;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix {\n  order: 2;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input {\n  order: 3;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix {\n  order: 4;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing {\n  order: 5;\n}\n\n[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /*rtl:end:ignore*/\n}\n[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input {\n  /* @noflip */ /*rtl:ignore*/\n  text-align: right;\n}\n[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 2px;\n}\n\n.mdc-text-field-helper-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin: 0;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-text-field-helper-text::before {\n  display: inline-block;\n  width: 0;\n  height: 16px;\n  content: \"\";\n  vertical-align: 0;\n}\n\n.mdc-text-field-helper-text--persistent {\n  transition: none;\n  opacity: 1;\n  will-change: initial;\n}\n\n.mdc-text-field-character-counter {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  white-space: nowrap;\n}\n.mdc-text-field-character-counter::before {\n  display: inline-block;\n  width: 0;\n  height: 16px;\n  content: \"\";\n  vertical-align: 0;\n}\n[dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__icon {\n  align-self: center;\n  cursor: pointer;\n}\n.mdc-text-field__icon:not([tabindex]), .mdc-text-field__icon[tabindex=\"-1\"] {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-text-field__icon svg {\n  display: block;\n}\n\n.mdc-text-field__icon--leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-text-field__icon--leading, .mdc-text-field__icon--leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__icon--trailing {\n  padding: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n}\n[dir=rtl] .mdc-text-field__icon--trailing, .mdc-text-field__icon--trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__icon {\n  align-self: center;\n  cursor: pointer;\n}\n.mdc-text-field__icon:not([tabindex]), .mdc-text-field__icon[tabindex=\"-1\"] {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-text-field__icon svg {\n  display: block;\n}\n\n.mdc-text-field__icon--leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-text-field__icon--leading, .mdc-text-field__icon--leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__icon--trailing {\n  padding: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n}\n[dir=rtl] .mdc-text-field__icon--trailing, .mdc-text-field__icon--trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  /*rtl:end:ignore*/\n}", "",{"version":3,"sources":["webpack://./node_modules/@material/layout-grid/mdc-layout-grid.scss","webpack://./src/documentation/formdemo/formDemo.scss","webpack://./node_modules/@material/layout-grid/_mixins.scss","webpack://./node_modules/@material/touch-target/_touch-target.scss","webpack://./node_modules/@material/radio/_radio.scss","webpack://./node_modules/@material/theme/_css.scss","webpack://./node_modules/@material/radio/_radio-theme.scss","webpack://./node_modules/@material/theme/_gss.scss","webpack://./node_modules/@material/dom/_dom.scss","webpack://./node_modules/@material/focus-ring/_focus-ring.scss","webpack://./node_modules/@material/ripple/_ripple.scss","webpack://./node_modules/@material/animation/_animation.scss","webpack://./node_modules/@material/ripple/_ripple-theme.scss","webpack://./node_modules/@material/floating-label/_mixins.scss","webpack://./node_modules/@material/typography/_typography.scss","webpack://./node_modules/@material/rtl/_rtl.scss","webpack://./node_modules/@material/line-ripple/_mixins.scss","webpack://./node_modules/@material/notched-outline/_mixins.scss","webpack://./node_modules/@material/notched-outline/_variables.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/theme/theme1/_variables.scss","webpack://./src/styles/_common.scss","webpack://./node_modules/@material/form-field/_mixins.scss","webpack://./node_modules/@material/textfield/_mixins.scss","webpack://./node_modules/@material/textfield/helper-text/_mixins.scss","webpack://./node_modules/@material/textfield/character-counter/_mixins.scss","webpack://./node_modules/@material/textfield/icon/_mixins.scss","webpack://./node_modules/@material/textfield/_variables.scss"],"names":[],"mappings":"AAyBA;EAEI,sCAAA;EAIA,sCAAA;EAIA,4CAAA;EARA,qCAAA;EAIA,qCAAA;EAIA,2CAAA;EARA,oCAAA;EAIA,oCAAA;EAIA,0CAAA;ACzBJ;;AC0DI;EFzBJ;IE+DE,sBAAA;IACA,cAAA;IACA,aF9Da;IEgEb,oDAAA;ED5FA;AACF;AC4CI;EFpBJ;IE+DE,sBAAA;IACA,cAAA;IACA,aF9Da;IEgEb,mDAAA;EDpFA;AACF;AC+BI;EFfJ;IE+DE,sBAAA;IACA,cAAA;IACA,aF9Da;IEgEb,kDAAA;ED5EA;AACF;;ACiCI;EFfJ;IEqEE,aAAA;IACA,mBAAA;IACA,oBAAA;IACA,aAAA;IAEA,kEAAA;EDnFA;ECqFA;IF5EF;ME6EI,aAAA;MACA,SAAA;MACA,cF3EW;ME6EX,qDAAA;MACA,iDAAA;IDnFA;EACF;AACF;ACSI;EFVJ;IEqEE,aAAA;IACA,mBAAA;IACA,oBAAA;IACA,YAAA;IAEA,iEAAA;EDjEA;ECmEA;IF5EF;ME6EI,aAAA;MACA,SAAA;MACA,cF3EW;ME6EX,oDAAA;MACA,gDAAA;IDjEA;EACF;AACF;ACdI;EFLJ;IEqEE,aAAA;IACA,mBAAA;IACA,oBAAA;IACA,YAAA;IAEA,gEAAA;ED/CA;ECiDA;IF5EF;ME6EI,aAAA;MACA,SAAA;MACA,cF3EW;ME6EX,mDAAA;MACA,gDAAA;ID/CA;EACF;AACF;;ACtBI;EFJJ;IE0BE,kCAAA;IAEA,yEAAA;IAyDA,sBAAA;IACA,YAAA;IAEA,6DAAA;EDrDA;ECLA;IF9BF;ME+BI,WAAA;MACA,uBAAA;IDQA;EACF;ECiDA;IF1FF;ME2FI,SAAA;ID9CA;EACF;EDjCe;;IEaf,iCAAA;IAEA,wEAAA;EDuBA;ECrBA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyBA;EACF;ED7Ce;;IEaf,kCAAA;IAEA,yEAAA;EDmCA;ECjCA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqCA;EACF;EDzDe;;IEaf,uBAAA;IAEA,8DAAA;ED+CA;EC7CA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiDA;EACF;EDrEe;;IEaf,kCAAA;IAEA,yEAAA;ED2DA;ECzDA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6DA;EACF;EDjFe;;IEaf,kCAAA;IAEA,yEAAA;EDuEA;ECrEA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyEA;EACF;ED7Fe;;IEaf,uBAAA;IAEA,8DAAA;EDmFA;ECjFA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqFA;EACF;EDzGe;;IEaf,kCAAA;IAEA,yEAAA;ED+FA;EC7FA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiGA;EACF;EDrHe;;IEaf,kCAAA;IAEA,yEAAA;ED2GA;ECzGA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6GA;EACF;EDjIe;;IEaf,uBAAA;IAEA,8DAAA;EDuHA;ECrHA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyHA;EACF;ED7Ie;;IEaf,kCAAA;IAEA,yEAAA;EDmIA;ECjIA;IFjBe;;MEkBb,WAAA;MACA,wBAAA;IDqIA;EACF;EDzJe;;IEaf,kCAAA;IAEA,yEAAA;ED+IA;EC7IA;IFjBe;;MEkBb,WAAA;MACA,wBAAA;IDiJA;EACF;EDrKe;;IEaf,wBAAA;IAEA,+DAAA;ED2JA;ECzJA;IFjBe;;MEkBb,WAAA;MACA,wBAAA;ID6JA;EACF;AACF;AChMI;EFCJ;IE0BE,uBAAA;IAEA,6DAAA;IAyDA,sBAAA;IACA,WAAA;IAEA,4DAAA;ED+GA;ECzKA;IF9BF;ME+BI,WAAA;MACA,uBAAA;ID4KA;EACF;ECnHA;IF1FF;ME2FI,SAAA;IDsHA;EACF;EDrMe;;IEaf,yBAAA;IAEA,+DAAA;ED2LA;ECzLA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6LA;EACF;EDjNe;;IEaf,uBAAA;IAEA,6DAAA;EDuMA;ECrMA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyMA;EACF;ED7Ne;;IEaf,yBAAA;IAEA,+DAAA;EDmNA;ECjNA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqNA;EACF;EDzOe;;IEaf,uBAAA;IAEA,6DAAA;ED+NA;EC7NA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiOA;EACF;EDrPe;;IEaf,yBAAA;IAEA,+DAAA;ED2OA;ECzOA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6OA;EACF;EDjQe;;IEaf,uBAAA;IAEA,6DAAA;EDuPA;ECrPA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyPA;EACF;ED7Qe;;IEaf,yBAAA;IAEA,+DAAA;EDmQA;ECjQA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqQA;EACF;EDzRe;;IEaf,wBAAA;IAEA,8DAAA;ED+QA;EC7QA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiRA;EACF;EDrSe;;IEaf,wBAAA;IAEA,8DAAA;ED2RA;ECzRA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6RA;EACF;EDjTe;;IEaf,wBAAA;IAEA,8DAAA;EDuSA;ECrSA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDySA;EACF;ED7Te;;IEaf,wBAAA;IAEA,8DAAA;EDmTA;ECjTA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqTA;EACF;EDzUe;;IEaf,wBAAA;IAEA,8DAAA;ED+TA;EC7TA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiUA;EACF;AACF;ACzWI;EFMJ;IE0BE,wBAAA;IAEA,6DAAA;IAyDA,sBAAA;IACA,WAAA;IAEA,2DAAA;EDmRA;EC7UA;IF9BF;ME+BI,WAAA;MACA,uBAAA;IDgVA;EACF;ECvRA;IF1FF;ME2FI,SAAA;ID0RA;EACF;EDzWe;;IEaf,uBAAA;IAEA,4DAAA;ED+VA;EC7VA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiWA;EACF;EDrXe;;IEaf,uBAAA;IAEA,4DAAA;ED2WA;ECzWA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6WA;EACF;EDjYe;;IEaf,uBAAA;IAEA,4DAAA;EDuXA;ECrXA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyXA;EACF;ED7Ye;;IEaf,wBAAA;IAEA,6DAAA;EDmYA;ECjYA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqYA;EACF;EDzZe;;IEaf,wBAAA;IAEA,6DAAA;ED+YA;EC7YA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiZA;EACF;EDrae;;IEaf,wBAAA;IAEA,6DAAA;ED2ZA;ECzZA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6ZA;EACF;EDjbe;;IEaf,wBAAA;IAEA,6DAAA;EDuaA;ECraA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyaA;EACF;ED7be;;IEaf,wBAAA;IAEA,6DAAA;EDmbA;ECjbA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqbA;EACF;EDzce;;IEaf,wBAAA;IAEA,6DAAA;ED+bA;EC7bA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDicA;EACF;EDrde;;IEaf,wBAAA;IAEA,6DAAA;ED2cA;ECzcA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6cA;EACF;EDjee;;IEaf,wBAAA;IAEA,6DAAA;EDudA;ECrdA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDydA;EACF;ED7ee;;IEaf,wBAAA;IAEA,6DAAA;EDmeA;ECjeA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqeA;EACF;AACF;AD/eI;EEwEF,QFzEa;ACmff;ADlfI;EEwEF,QFzEa;ACsff;ADrfI;EEwEF,QFzEa;ACyff;ADxfI;EEwEF,QFzEa;AC4ff;AD3fI;EEwEF,QFzEa;AC+ff;AD9fI;EEwEF,QFzEa;ACkgBf;ADjgBI;EEwEF,QFzEa;ACqgBf;ADpgBI;EEwEF,QFzEa;ACwgBf;ADvgBI;EEwEF,QFzEa;AC2gBf;AD1gBI;EEwEF,SFzEa;AC8gBf;AD7gBI;EEwEF,SFzEa;ACihBf;ADhhBI;EEwEF,SFzEa;ACohBf;AD7gBE;EEuEE,sBAAA;ADycJ;ACvcI;EFzEF;IE0EI,iBAAA;ED0cJ;AACF;ADjhBE;EE2EE,kBAAA;ADycJ;ADhhBE;EE2EE,oBAAA;ADwcJ;ACtcI;EF7EF;IE8EI,eAAA;EDycJ;AACF;;AC1jBI;EFuCJ;IE2FE,aAAA;IAGA;;;;GAAA;ED+bA;AACF;AC1kBI;EF4CJ;IE2FE,YAAA;IAGA;;;;GAAA;EDycA;AACF;ACzlBI;EFiDJ;IE2FE,YAAA;IAGA;;;;GAAA;EDmdA;AACF;;ADjiBA;EACE,kBAAA;EACA,cAAA;ACoiBF;;ADjiBA;EACE,eAAA;EACA,iBAAA;ACoiBF;;AEloBE;EAOM,eAAA;AF+nBR;;AGncE;EC1JE,gCAAA;AJimBJ;AK5HE;EDreE,iCAAA;AJomBJ;AK/HE;EDjfI,qBAAA;EEZF,eAAA;EFwBA,iDAAA;AJymBJ;AKzJE;ED5dI,qBAAA;EEZF,eAAA;EFwBA,iDAAA;AJ8mBJ;AKzIE;;EDreE,iCAAA;AJknBJ;AK7IE;;EDreE,iCAAA;AJsnBJ;AKtKE;;EDhdE,iCAAA;AJ0nBJ;AKpWE;EDlSI,yBAAA;EEZF,eAAA;EFwBA,qDAAA;AJ+nBJ;AK5RE;EDnWE,iCAAA;EAAA,kCAAA;EAAA,WAAA;EAAA,YAAA;AJqoBJ;AKrVE;EDhTE,4BAAA;EAAA,8BAAA;EAAA,6BAAA;EAAA,WAAA;EAAA,YAAA;AJ4oBJ;AOxnBI;EFidF;;IDreE,sBAAA;EJipBF;EK5KA;;IDreE,sBAAA;EJqpBF;EKrMA;;IDhdE,sBAAA;EJypBF;AACF;;AGrrBE;EAEI,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,WEtBM;EFuBN,YEvBM;EFwBN,eAAA;EACA,eAAA;EACA,oDAAA;AHurBN;AGnrBI;EAEI,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,WEnCI;EFoCJ,YEpCI;ALwtBZ;AGjrBM;EAEI,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;EAIA,4GAAA;AH+qBV;AG1qBI;EAEI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EAIA,+DAAA;AHwqBR;AGpqBI;EAEI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EAIA,iHAAA;AHkqBR;AG9pBI;EAEI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,UAAA;AH+pBR;AG3pBI;EDrCA,eAHsB;EAItB,kBAJsB;EAcpB,iBANwB;EAOxB,gBAPwB;AFisB9B;AK7aE;EDhTE,4BAAA;EAAA,8BAAA;EAAA,6BAAA;EAAA,WAAA;EAAA,YAAA;AJouBJ;AG3pBM;EKjFF,oBAAA;EACA,6BAAA;EACA,kBAAA;EACA,uBAAA;EACA,kBAAA;EACA,QAAA;EFhBA,YAAA,EAAA,aAAA;EEkBA,SAAA;EFlBA,YAAA,EAAA,aAAA;EEoBA,gCAAA;EACA,YA3BwB;EA4BxB,WAtB0B;ARqwB9B;AOluBI;EJyDE;IKnEA,wBAAA;ERgvBJ;AACF;AQ9uBI;EACE,WAAA;EACA,6BAAA;EACA,kBAhEgB;EAiEhB,cAAA;EACA,kBAAA;EACA,QAAA;EFlCF,YAAA,EAAA,aAAA;EEoCE,SAAA;EFpCF,YAAA,EAAA,aAAA;EEsCE,gCAAA;EACA,wBA/BgB;EAgChB,uBAhCgB;ARgxBtB;AOrvBI;ECPA;IAeI,wBAAA;ERivBN;AACF;;AGrrBI;;EAEI,wGAAA;AHwrBR;AGrrBM;;EAEI,6DAAA;AHurBV;AGnrBM;;EAEI,6GAAA;AHqrBV;;AG/qBE;EAEI,eAAA;EACA,oBAAA;AHirBN;;AG3qBM;EAEI,qBAAA;EAIA,6GAAA;AH0qBV;;AGlqBI;;EAEI,eAAA;AHqqBR;;AG/pBI;EAEI,mBAAA;EACA,aAAA;EAIA,wGAAA;AH8pBR;;AS1kBE;EACE;IACE,uDC3R2B;IDgS3B,sEAAA;ETykBJ;EStkBE;IACE,gGAAA;ETwkBJ;AACF;ASpkBE;EACE;IACE,iCAAA;IACA,UAAA;ETskBJ;ESnkBE;IACE,wCAAA;ETqkBJ;AACF;ASlkBE;EACE;IACE,iCAAA;IACA,wCAAA;ETokBJ;ESjkBE;IACE,UAAA;ETmkBJ;AACF;AGrnBE;EM/KE,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,wBAAA;EACA,gCAAA;EACA,kCAAA;EAEA,6CAAA;EAGE,+BAAA;AToyBN;AShyBE;;EAGI,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;ATiyBN;AS7xBE;EAGI,6DAAA;EL5EA,UAAA;EEZF,eAAA;EFwBA,qCAAA;AJg2BJ;ASnxBE;ELzFI,UAAA;EEZF,eAAA;EFwBA,qCAAA;AJq2BJ;AS5wBI;EAEI,+CAAA;AT6wBR;ASzwBI;EAEI,MAAA;EHpHJ,YAAA,EAAA,aAAA;EGsHI,OAAA;EACA,mBAAA;EACA,+BAAA;AT0wBR;ASpwBI;EAEI,6BAAA;EHhIJ,YAAA,EAAA,aAAA;EGkII,+BAAA;ATqwBR;AS/vBI;EAEI,yFAAA;ATgwBR;ASxvBI;EAEI,0CAAA;EAKA,gGAAA;ATqvBR;AS3sBE;;EAGI,oBAAA;EHtMF,YAAA,EAAA,aAAA;EGwME,qBAAA;EACA,WAZK;EAaL,YAbK;ATytBX;ASvsBI;;EAGI,2CAAA;EHlNJ,YAAA,EAAA,aAAA;EGoNI,6CAAA;EACA,sCAAA;EACA,uCAAA;ATwsBR;ASpsBI;EAEI,sCAAA;EACA,uCAAA;ATqsBR;AWn0BI;EPxFE,yBAAA;EEZF,eAAA;EFwBA,8EAAA;AJo5BJ;AW/bE;EPjeI,aAAA;EEZF,eAAA;EFwBA,8CAAA;AJy5BJ;AWpcE;EA9QI,yBAAA;EPnNA,aAAA;EEZF,eAAA;EFwBA,8CAAA;AJ+5BJ;AW9rBM;EAEI,gCAAA;AX+rBV;AW1rBQ;EAEI,yBAhRO;EP0Bb,aAAA;EEZF,eAAA;EFwBA,8CAAA;AJw6BJ;AWnrBI;EPrPA,8DAAA;AJ26BJ;AG1sBM;EAEI,aAAA;AH2sBV;;AGrsBE;EMnBE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EAGA,oBAAA;AT0tBJ;;AY/9BE;ECkSE,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,eAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,0BAAA;EEZF,eAAA;EFwBA,0EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;EQhCE,kBAAA;ENaF,YAAA,EAAA,aAAA;EMXE,OAAA;ENWF,YAAA,EAAA,aAAA;EMTE,kCAAA;ENSF,YAAA,EAAA,aAAA;EMPE,0BAAA;EACA,oBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;EAEA,eAAA;EAGA,sBAAA;EAiBA,kGAAA;AZ49BN;Ac59BM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EMQI,QAAA;ENRJ,YAAA,EAAA,aAAA;EMUI,UAAA;ENVJ,YAAA,EAAA,aAAA;EMYI,mCAAA;ENZJ,YAAA,EAAA,aAAA;EMcI,2BAAA;ENdJ,YAAA,EAAA,aAAA;EMgBI,iBAAA;EEQA,iBAAA;Adu+BR;;AYn+BE;EAEI,YAAA;AZq+BN;;AYh+BI;ENnCA,YAAA,EAAA,aAAA;EM0LA,gBAAA;EN1LA,YAAA,EAAA,aAAA;EM4LA,iBAAA;EACA,YAAA;AZ80BJ;Act/BM;EACE,mBAAA;EAEA,iBAAA;Adu/BR;AYv+BM;ENxCF,YAAA,EAAA,aAAA;EMwMA,cAAA;ENxMA,YAAA,EAAA,aAAA;EM0MA,iBAAA;AZ20BJ;;AYz5BE;EAcM,wCAAA;AZ+4BR;;AYt4BE;EAEI,gEAAA;AZw4BN;;AY58BI;EACE;INlFF,YAAA,EAAA,aAAA;IMoFI,iEAAA;EZ+8BN;EY38BI;IACE,mEAAA;INzFJ,YAAA,EAAA,aAAA;IM2FI,kEAAA;EZ68BN;EYz8BI;IACE,2EAAA;INhGJ,YAAA,EAAA,aAAA;IMuGI,mEAAA;EZs8BN;EYl8BI;IN3GF,YAAA,EAAA,aAAA;IM6GI,iEAAA;EZo8BN;AACF;AevkCM;EAEE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,0BAAA;EACA,WAAA;AfwkCR;AehiCE;EACE,wBAtCkB;AfwkCtB;AetkCM;EACE,UAAA;AfwkCR;AerkCM;EACE,oBAAA;EACA,wBAAA;EACA,UAAA;EACA,UAAA;AfukCR;AelkCM;EACE,oGAAA;AfokCR;;Ae9jCE;EAEI,oBAAA;EACA,UAAA;AfgkCN;;Ae5jCE;EAEI,UAAA;Af8jCN;;AgBvmCE;EA0UE,aAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EV7TA,YAAA,EAAA,aAAA;EU+TA,gBAAA;EACA,oBAAA;AhBiyBJ;Ac5kCM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EUoUE,iBAAA;EF5SE,iBAAA;Ad+kCR;;AgBznCI;EAII,sBAAA;EACA,YAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;AhBynCR;AgBrnCI;EVMA,YAAA,EAAA,aAAA;EFmBA,sBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EYjBI,WCjCQ;AjBqpChB;AcjmCM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,uBAAA;EUKI,iBAAA;AdsmCR;;AgBxnCI;EVNA,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,uBAAA;EYLI,YAAA;AhBwnCR;AcjnCM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,sBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EUKI,iBAAA;AdsnCR;;AgB5nCI;EAEI,cAAA;EACA,WAAA;EACA,gCAAA;AhB8nCR;AgB1nCI;EAEI,qBAAA;EACA,kBAAA;EACA,eAAA;AhB2nCR;AgBvnCI;EAEI,mBAAA;AhBwnCR;AgBpnCI;EAEI,0BAAA;AhBqnCR;;AgB/mCI;EVhDA,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EYiCI,gBAAA;AhBmnCR;AclpCM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;EUKI,iBAAA;AdupCR;;AgBrnCI;EAEI,aAAA;AhBunCR;;AkB9uCA;EACI,sBAAA;AlBivCJ;;AkB9uCA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,kCAAA;EACA,mCAAA;EACA,sBAAA;AlBivCJ;;AkB9uCA;EACI,cAAA;AlBivCJ;;AkB9uCA;EACI,cAAA;AlBivCJ;;AkB9uCA;EACI,gBAAA;AlBivCJ;;AkB9uCA;EACI,YAAA;AlBivCJ;;AkB9uCA;EACI,WAAA;EACA,aAAA;AlBivCJ;;AkB9uCA;EACI,yBAAA;EACA,iBAAA;AlBivCJ;;AkB9uCA;EACI,wBAAA;EACA,gBAAA;AlBivCJ;;AmBlxCI;EADJ;IAEQ,4BAAA;IACA,+BAAA;IACA,8BAAA;IACA,iCAAA;IACA,4BAAA;IACA,+BAAA;IACA,+BAAA;IACA,kCAAA;EnBsxCN;AACF;AmBpxCI;EAZJ;IAaQ,4BAAA;IACA,+BAAA;IACA,8BAAA;IACA,iCAAA;IAEA,mCAAA;IACA,4BAAA;IACA,kFAAA;IACI,gGAAA;IACA,gGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IAEJ,+BAAA;IACA,+BAAA;IACA,kCAAA;IAIA,6GAAA;EnBkxCN;AACF;;AmB7wCA;EACI;IACI,uCAAA;EnBgxCN;EmB9wCE;IACI,uCAAA;EnBgxCN;EmB9wCE;IACI,uCAAA;EnBgxCN;EmB9wCE;IACI,uCAAA;EnBgxCN;EmB9wCE;IACI,uCAAA;EnBgxCN;EmB9wCE;IACI,uCAAA;EnBgxCN;EmB9wCE;IACI,uCAAA;EnBgxCN;EmB1wCM;IACI,uCAAA;EnB4wCV;EmB1wCU;IACI,uCAAA;EnB4wCd;EmB1wCc;IACI,kCAAA;EnB4wClB;EmB1wCc;IACI,kCAAA;EnB4wClB;EmBvwCc;IACI,kCAAA;EnBywClB;EmBvwCkB;IACI,kCAAA;EnBywCtB;EmBtwCc;IACI,+BAAA;EnBwwClB;EmBtwCkB;IACI,+BAAA;EnBwwCtB;EmBhwCE;IACI,0CAAA;EnBkwCN;EmB/vCE;IACI,kCAAA;EnBiwCN;EmB5vCM;IACI,kCAAA;EnB8vCV;EmB1vCU;IACI,+BAAA;EnB4vCd;AACF;AmBrvCQ;EADJ;IAEQ,kCAAA;EnBwvCV;AACF;AmBpvCQ;EADJ;IAEQ,kCAAA;EnBuvCV;AACF;AmBn1CA;EAiGI;IACI,6CAAA;EnBqvCN;AACF;AmBx1CA;EAqGI;IACI,kCAAA;EnBsvCN;AACF;AmB71CA;EAyGI;IACI,SAAA;EnBuvCN;AACF;AmBl2CA;EA8GI;IACI,oCAAA;EnBuvCN;AACF;AmBv2CA;EAqHI;;;IAGI,yCAAA;IACA,uCAAA;EnBqvCN;AACF;AmB/2CA;EA4HI;;;IAGI,yCAAA;IACA,uCAAA;EnBsvCN;AACF;AmBv3CA;EAmII;IACI,WAAA;EnBuvCN;AACF;AmB53CA;EAuII;IACI,kCAAA;EnBwvCN;AACF;AmBj4CA;EA2II;IACI,+BAAA;EnByvCN;AACF;AmBt4CA;EA+II;IACI,kCAAA;EnB0vCN;AACF;AmB34CA;EAsJI;;;IAGI,yCAAA;IACA,uCAAA;EnBwvCN;AACF;AmBn5CA;EA6JI;;;IAGI,yCAAA;IACA,uCAAA;EnByvCN;AACF;AmB35CA;EAoKI;IACI,kCAAA;EnB0vCN;AACF;AmBh6CA;EAwKI;IACI,+BAAA;EnB2vCN;AACF;AmBr6CA;EA4KI;IACI,kCAAA;EnB4vCN;AACF;AmB16CA;EAgLI;IACI,iCAAA;EnB6vCN;AACF;AmB/6CA;EAoLI;IACI,8BAAA;EnB8vCN;AACF;AajuCE;EAgEE,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,kEAAA;AJk6CJ;;AanuCI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,eAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,iBAAA;EEZF,eAAA;EFwBA,8DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,2BAAA;EEZF,eAAA;EFwBA,2EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;AJ47CJ;;Aa7vCI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,kBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,oBAAA;EEZF,eAAA;EFwBA,iEAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,+BAAA;EEZF,eAAA;EFwBA,+EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;AJs9CJ;;AavxCI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,eAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,qBAAA;EEZF,eAAA;EFwBA,kEAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,sBAAA;EEZF,eAAA;EFwBA,sEAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;AJg/CJ;;AajzCI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,mBAAA;EEZF,eAAA;EFwBA,8DAAA;EAZE,mBAAA;EEZF,eAAA;EFwBA,gEAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,8EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;AJ0gDJ;;Aa30CI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,iBAAA;EEZF,eAAA;EFwBA,4DAAA;EAZE,iBAAA;EEZF,eAAA;EFwBA,8DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,sBAAA;EEZF,eAAA;EFwBA,sEAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;AJoiDJ;;Aar2CI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,kBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,iBAAA;EEZF,eAAA;EFwBA,8DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,wEAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;AJ8jDJ;;Aa/3CI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,eAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,oBAAA;EEZF,eAAA;EFwBA,iEAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,0BAAA;EEZF,eAAA;EFwBA,0EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;AJwlDJ;;Aaz5CI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,mBAAA;EEZF,eAAA;EFwBA,8DAAA;EAZE,qBAAA;EEZF,eAAA;EFwBA,kEAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,8EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;AJknDJ;;Aan7CI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,2GAAA;EAZE,eAAA;EEZF,eAAA;EFwBA,sDAAA;EAZE,mBAAA;EEZF,eAAA;EFwBA,4DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,yDAAA;EAZE,yBAAA;EEZF,eAAA;EFwBA,qEAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,qEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,mEAAA;AJ4oDJ;;Aa78CI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,2GAAA;EAZE,mBAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,oBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,yDAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,0EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,qEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,mEAAA;AJsqDJ;;Aav+CI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,6GAAA;EAZE,kBAAA;EEZF,eAAA;EFwBA,2DAAA;EAZE,oBAAA;EEZF,eAAA;EFwBA,+DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,2DAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,4EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,uEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,qEAAA;AJgsDJ;;AajgDI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,4GAAA;EAZE,mBAAA;EEZF,eAAA;EFwBA,2DAAA;EAZE,oBAAA;EEZF,eAAA;EFwBA,8DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,2EAAA;EAZE,qBAAA;EEZF,eAAA;EFwBA,mEAAA;EAZE,yBAAA;EEZF,eAAA;EFwBA,sEAAA;AJ0tDJ;;Aa3hDI;EA2DA,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,8GAAA;EAZE,kBAAA;EEZF,eAAA;EFwBA,4DAAA;EAZE,iBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,4DAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,6EAAA;EAZE,qBAAA;EEZF,eAAA;EFwBA,qEAAA;EAZE,yBAAA;EEZF,eAAA;EFwBA,wEAAA;AJovDJ;;AoB1zDA;EACI,6CAAA;ApB6zDJ;;AoBvzDY;EACI,sBAAA;ApB0zDhB;;AoBpzDA;EACI,WAAA;EACA,YAAA;EACA,YAAA;ApBuzDJ;;AoBpzDA;EACI,aAAA;ApBuzDJ;;AoBpzDA;EACI,aAAA;EACA,mBAAA;ApBuzDJ;;AoBpzDA;EACI,aAAA;EACA,WAAA;ApBuzDJ;AoBrzDI;EACI,eAAA;ApBuzDR;;AqB9zDE;ERqSE,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,2GAAA;EAZE,mBAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,oBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,yDAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,0EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,qEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,mEAAA;EAZE,0BAAA;EEZF,eAAA;EFwBA,uEAAA;EiBnCE,oBAAA;EACA,mBAAA;EACA,sBAAA;ArBo1DN;AqBj1DI;EfWA,YAAA,EAAA,aAAA;EFmBA,cAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;EiBzBI,QAAA;ArBu1DR;Ac5zDM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,eAAA;EUKI,iBAAA;Adi0DR;;Acp0DM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EUKI,iBAAA;Ad00DR;;AqBl2DI;EAEI,uBAAA;EACA,gBAAA;EACA,mBAAA;ArBo2DR;;AqB91DI;EfVA,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EiBJI,SAAA;ArBq2DR;Ac/1DM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,cAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EUKI,iBAAA;Ado2DR;;Acv2DM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;EUKI,iBAAA;Ad62DR;;AqBj3DE;EAEI,8BAAA;ArBm3DN;AqBh3DI;EAEI,SAAA;ArBi3DR;Acv3DM;EACE,mBAAA;EOSE,SAAA;EPPF,iBAAA;Ady3DR;;AsBjpDE;EbzME,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,wBAAA;EACA,gCAAA;EACA,kCAAA;EAEA,6CAAA;EAGE,+BAAA;AT21DN;ASv1DE;;EAGI,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;ATw1DN;ASp1DE;EAGI,6DAAA;EL5EA,UAAA;EEZF,eAAA;EFwBA,qCAAA;AJu5DJ;AS10DE;ELzFI,UAAA;EEZF,eAAA;EFwBA,qCAAA;AJ45DJ;ASn0DI;EAEI,+CAAA;ATo0DR;ASh0DI;EAEI,MAAA;EHpHJ,YAAA,EAAA,aAAA;EGsHI,OAAA;EACA,mBAAA;EACA,+BAAA;ATi0DR;AS3zDI;EAEI,6BAAA;EHhIJ,YAAA,EAAA,aAAA;EGkII,+BAAA;AT4zDR;AStzDI;EAEI,yFAAA;ATuzDR;AS/yDI;EAEI,0CAAA;EAKA,gGAAA;AT4yDR;AS9xDE;;EAGI,qBAAA;EH1KF,YAAA,EAAA,aAAA;EG4KE,sBAAA;EACA,WAAA;EACA,YAAA;AT+xDN;AS1xDI;EAEI,sCAAA;EACA,uCAAA;AT2xDR;;AsBtsDE;EblCE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EAGA,oBAAA;AT0uDJ;;AsBp9DE;ElBCI,2BAAA;EEZF,eAAA;EFwBA,mDAAA;EAZE,4BAAA;EEZF,eAAA;EFwBA,oDAAA;EAAA,6BAAA;EAAA,4BAAA;EkBgyCA,oBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,sCAAA;AtBmrBJ;AsBqcE;ElB/5EE,yBAAA;AJ69DJ;AsB6XE;ElB11EE,0BAAA;AJg+DJ;AsBieE;EAGE;IlBp8EA,0BAAA;EJo+DF;AACF;AsBoeE;EAGE;IlB58EA,0BAAA;EJy+DF;AACF;AsBtlCE;ElBh6BI,oBAAA;EEZF,eAAA;EFwBA,8CAAA;AJ++DJ;AuB19DE;EnBrBE,yBAAA;AJk/DJ;AwB79DE;;EpBrBE,yBAAA;AJs/DJ;AyB16DE;ErB5EE,0BAAA;AJy/DJ;AyBn6DE;ErBtFE,0BAAA;AJ4/DJ;AsB4aI;ElBx6EA,yBAAA;AJ+/DJ;AsBmbI;ElBl7EA,yBAAA;AJkgEJ;AsBnpBE;EAEI,QAAA;EACA,2BAAA;EACA,oBAAA;AtBopBN;;AsBhhEE;ETmQE,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,eAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,0BAAA;EEZF,eAAA;EFwBA,0EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;EkBkmEA,YIrjEW;EJyjEX,0DAAA;EASA,WAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,UAAA;AtB9EJ;AsBkFI;EACE,aAAA;AtBhFN;AsBoFI;EACE,aAAA;AtBlFN;AsBqFI;EACE,aAAA;AtBnFN;AsBuFI;EACE,gBAAA;AtBrFN;AsB8YE;EAGE;IAlTA,yDAAA;IAIA,UAAA;EtB9FF;AACF;AsBgZE;EAGE;IA1TA,yDAAA;IAIA,UAAA;EtBxFF;AACF;AsBkYE;EAGE;IArSA,sBAAA;IACA,0BAAA;IAIA,UAAA;EtB/FF;AACF;AsBmYE;EAGE;IA7SA,sBAAA;IACA,0BAAA;IAIA,UAAA;EtBxFF;AACF;;AsBrkEE;ETkPE,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,+GAAA;EAZE,eAAA;EEZF,eAAA;EFwBA,0DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,6DAAA;EAZE,0BAAA;EEZF,eAAA;EFwBA,0EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,yEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,uEAAA;EkBkmEA,YIrjEW;EJyjEX,0DAAA;EAuEA,UAAA;EACA,mBAAA;AtBtEJ;AsB7lEI;EAwrEA,UAAA;AtBxFJ;AsB1lEI;EACE;IAsqEF,mBAAA;IACA,kBAAA;IACA,oBAAA;IACA,YAAA;EtBzEF;AACF;;AsB3lEE;EhB3CE,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;AJ0nEJ;AcxnEM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;EUKI,iBAAA;Ad6nER;;AsBvmEI;EhB9CA,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,mBAAA;AJyoEJ;AcvoEM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,kBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;EUKI,iBAAA;Ad4oER;;AsBjnEE;EhBnDE,YAAA,EAAA,aAAA;EFmBA,kBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;AJwpEJ;ActpEM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,mBAAA;EUKI,iBAAA;Ad2pER;;AsB7nEI;EhBtDA,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;AJuqEJ;AcrqEM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EUKI,iBAAA;Ad0qER;;AsBroEE;EAqhBE,YI5iBK;A1BgqET;AWvmEI;;EPxFE,qCAAA;EEZF,eAAA;EFwBA,8DAAA;AJyrEJ;AWpuDE;EPjeI,aAAA;EEZF,eAAA;EFwBA,8CAAA;AJ8rEJ;AWzuDE;EA9QI,yBAAA;EPnNA,aAAA;EEZF,eAAA;EFwBA,8CAAA;AJosEJ;Aa50DE;EAyCA,qBAAA;EACA,QAAA;EACA,YavXoB;EbwXpB,WAAA;EAxCI,iBAAA;Ab+0DN;AsB8QE;ElBz9EE,4BAAA;AJ8sEJ;AeprEI;EX1BA,wCAAA;AJitEJ;AevrEI;EX1BA,wCAAA;AJotEJ;AepsEI;EX5BE,4BAAA;EEZF,eAAA;EFwBA,sDAAA;AJytEJ;AsB3zBE;EhBj7CE,YAAA,EAAA,aAAA;EFmBA,UAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,cAAA;AJ+tEJ;Ac7tEM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,aAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,WAAA;EUKI,iBAAA;AdkuER;;AY9nEE;EAcM,wCAAA;AZonER;AsBh6BI;EACE,YAAA;AtBk6BN;AsB5zBI;EACE,aAAA;AtB8zBN;AsB3zBI;EAEE,aAAA;AtB4zBN;AsBvzBE;EACE;IA0vBA,mBAAA;IACA,kBAAA;IACA,oBAAA;IACA,YAAA;EtBgEF;AACF;;AsB1sEE;EAyjBE,YIxlBK;EJ+8CL,iBAAA;AtB+xBJ;AYxpEE;EAcM,wCAAA;AZ6oER;AgBhhEE;EAEI,kBAAA;AhBihEN;AY9pEE;;EAcM,2CAAA;AZopER;AgBvgEI;;EAEI,eAAA;AhBygER;AY/oEE;EAEI,2EAAA;AZgpEN;AYptEI;EACE;INlFF,YAAA,EAAA,aAAA;IMoFI,oEAAA;EZstEN;EYltEI;IACE,mEAAA;INzFJ,YAAA,EAAA,aAAA;IM2FI,qEAAA;EZotEN;EYhtEI;IACE,2EAAA;INhGJ,YAAA,EAAA,aAAA;IMuGI,sEAAA;EZ6sEN;EYzsEI;IN3GF,YAAA,EAAA,aAAA;IM6GI,oEAAA;EZ2sEN;AACF;AsB39BI;EACE,YAAA;AtB69BN;AgBvvEE;;;EZlDE,iCAAA;AJ8yEJ;AgB5vEE;;;EZlDE,iCAAA;AJmzEJ;AgBjwEE;;;EZ9DI,qBAAA;EEZF,eAAA;EFwBA,+CAAA;AJ0zEJ;AgBxsEE;EVrIE,YAAA,EAAA,aAAA;EFOE,2BAAA;EEZF,eAAA;EAKA,YAAA,EAAA,aAAA;EFmBA,mDAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,0BAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,6BAAA;EEnBA,YAAA,EAAA,aAAA;EFOE,8BAAA;EEZF,eAAA;EAKA,YAAA,EAAA,aAAA;EFmBA,sDAAA;AJ00EJ;Acx0EM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,yBAAA;EEnBA,YAAA,EAAA,aAAA;EFOE,4BAAA;EEZF,eAAA;EAKA,YAAA,EAAA,aAAA;EFmBA,oDAAA;EEnBA,YAAA,EAAA,aAAA;EFOE,+BAAA;EEZF,eAAA;EAKA,YAAA,EAAA,aAAA;EFmBA,uDAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,4BAAA;EUKI,iBAAA;Adu1ER;;AgB/sEQ;EA3BN;IA4BQ,6CAAA;EhBmtER;AACF;AgBhsEQ;EAZN;IAaQ,kEAAA;EhBmsER;AACF;AgB9rEE;EV5LE,YAAA,EAAA,aAAA;EFmBA,yBAAA;EEnBA,YAAA,EAAA,aAAA;EFOE,4BAAA;EEZF,eAAA;EAKA,YAAA,EAAA,aAAA;EFmBA,oDAAA;EEnBA,YAAA,EAAA,aAAA;EFOE,+BAAA;EEZF,eAAA;EAKA,YAAA,EAAA,aAAA;EFmBA,uDAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,4BAAA;AJu3EJ;Acr3EM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFOE,2BAAA;EEZF,eAAA;EAKA,YAAA,EAAA,aAAA;EFmBA,mDAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,0BAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,6BAAA;EEnBA,YAAA,EAAA,aAAA;EFOE,8BAAA;EEZF,eAAA;EAKA,YAAA,EAAA,aAAA;EFmBA,sDAAA;EUKI,iBAAA;Ado4ER;;AsB9sCM;EAzoCJ;IhBrEE,YAAA,EAAA,aAAA;IgBmtCI,gEAAA;EtB+sCN;AACF;AsBrtCM;EAzoCJ;IhBrEE,YAAA,EAAA,aAAA;IgBmtCI,qDAAA;EtBqtCN;AACF;AsB3tCM;EA3LF;IhBnhCA,YAAA,EAAA,aAAA;IgBmtCI,gEAAA;EtB2tCN;AACF;AsBjuCM;EA3LF;IhBnhCA,YAAA,EAAA,aAAA;IgBmtCI,qDAAA;EtBiuCN;AACF;AsBl5CI;EhBniCA,YAAA,EAAA,aAAA;EgBuiCM,eAAA;AtBk5CV;AsB3uCM;EA3KF;IhBniCA,YAAA,EAAA,aAAA;IgBmtCI,qDAAA;EtB2uCN;AACF;Ac16EM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EgBujCQ,gBAAA;ER/hCJ,iBAAA;Ad66ER;AsBvvCM;ERzrCA;IRrBF,YAAA,EAAA,aAAA;IgBmtCI,oDAAA;EtBuvCN;AACF;;AsB54CI;EhB/jCA,YAAA,EAAA,aAAA;EgB6kCM,gBAAA;AtBm4CV;AsBlwCM;EA/IF;IhB/jCA,YAAA,EAAA,aAAA;IgBmtCI,gEAAA;EtBkwCN;AACF;Acj8EM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EgBmlCQ,eAAA;ER3jCJ,iBAAA;Ado8ER;AsB9wCM;ERzrCA;IRrBF,YAAA,EAAA,aAAA;IgBmtCI,iEAAA;EtB8wCN;AACF;;AsBj4CI;EhBjmCA,YAAA,EAAA,aAAA;EgBy3CA,eAAA;EhBz3CA,YAAA,EAAA,aAAA;EgB23CA,gBAAA;AtB8mCJ;AgBv4EE;EAEI,gBCpIS;AjB4gFf;AW74EI;;EPxFE,6BAAA;EEZF,eAAA;EFwBA,sDAAA;AJ+9EJ;AsB7+BE;EhBrgDE,YAAA,EAAA,aAAA;EFmBA,SAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,cAAA;AJq+EJ;Acn+EM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,aAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,UAAA;EUKI,iBAAA;Adw+ER;;AsBxgCE;EAGI,aAAA;EACA,uBAAA;EACA,6BAAA;AtBygCN;AsB97EI;EA48CA,UAAA;AtBq/BJ;;AsB17EE;EA0wDE,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EAIA,gBAAA;AtBirBJ;AsBtkBE;EAEI,SI74De;A1Bo9ErB;AsBnkBI;EAEI,eAAA;AtBokBR;AsBt8EI;EA64DA,YAAA;EACA,YAAA;EACA,kBI75DmB;EJ85DnB,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,YAAA;EAGA,eAAA;EAIA,mBIx6DmB;A1B+9EvB;AsBphBI;EAGE,aAAA;AtBohBN;AY16EE;EAcM,2CAAA;AZ+5ER;AYt5EE;EAEI,uEAAA;AZu5EN;AY39EI;EACE;INlFF,YAAA,EAAA,aAAA;IMoFI,oEAAA;EZ69EN;EYz9EI;IACE,mEAAA;INzFJ,YAAA,EAAA,aAAA;IM2FI,qEAAA;EZ29EN;EYv9EI;IACE,2EAAA;INhGJ,YAAA,EAAA,aAAA;IMuGI,sEAAA;EZo9EN;EYh9EI;IN3GF,YAAA,EAAA,aAAA;IM6GI,oEAAA;EZk9EN;AACF;AsBv+EM;EAs9DF,gBI98D+B;EJ+8D/B,kBI98DkC;A1Bk+EtC;AsBt+EQ;EA09DJ,gBIv8DwC;EJw8DxC,mBIv8D2C;A1Bs9E/C;AgBt+EE;EAEI,cM09DyC;AtB6gB/C;AY/8EE;EAcM,wCAAA;AZo8ER;AgBv0EE;EAEI,kBAAA;AhBw0EN;AYr9EE;;EAcM,2CAAA;AZ28ER;AgB9zEI;;EAEI,eAAA;AhBg0ER;AYt8EE;EAEI,yEAAA;AZu8EN;AY3gFI;EACE;INlFF,YAAA,EAAA,aAAA;IMoFI,oEAAA;EZ6gFN;EYzgFI;IACE,mEAAA;INzFJ,YAAA,EAAA,aAAA;IM2FI,qEAAA;EZ2gFN;EYvgFI;IACE,2EAAA;INhGJ,YAAA,EAAA,aAAA;IMuGI,sEAAA;EZogFN;EYhgFI;IN3GF,YAAA,EAAA,aAAA;IM6GI,oEAAA;EZkgFN;AACF;AsBzgFM;EA0/DF,gBIrhEiC;EJshEjC,mBIrhEoC;A1BuiFxC;AsBzgFM;EA8+DF,SIvhE0B;A1BqjF9B;AsBtgFM;EAs5DF,kBIx4D4C;A1B2/EhD;AsBrgFM;EAm4DF,oBAAA;EAEA,eAAA;AtBooBJ;AaluEE;EAwBA,qBAAA;EACA,QAAA;EACA,YatT0C;EbuT1C,WAAA;EAvBI,qBAAA;AbquEN;AsBzoBI;EAEE,aAAA;AtB0oBN;;AsB3gFE;EA4uDE,mBAAA;EACA,oBAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,gBIz0DK;EJq1DL,sBAAA;EACA,eAAA;EACA,yBAAA;EACA,eAAA;EACA,iCAAA;EAEA,gBAAA;EACA,YAAA;AtBuxBJ;AsBzhFI;EAgxDA,2BAAA;AtB4wBJ;AsBzhFM;;EAwxDF,0BAAA;AtBqwBJ;AsBvhFI;EhBzIA,YAAA,EAAA,aAAA;EgB26DA,4CAAA;AtByvBJ;Ac/oFM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EgBg7DE,2CAAA;ERx5DE,iBAAA;AdkpFR;;AsB9hFM;;EhB5IF,YAAA,EAAA,aAAA;EgB87DA,0CAAA;AtBkvBJ;Ac3pFM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EgBm8DE,2CAAA;ER36DE,iBAAA;Ad8pFR;;AsBniFE;EhBnJE,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,mBAAA;AJ0qFJ;AcxqFM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,kBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;EUKI,iBAAA;Ad6qFR;;AsBrgCE;EVliDE,4BU6pDA;EhB3zDA,YAAA,EAAA,aAAA;EFmBA,UAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,cAAA;AJ0rFJ;AcxrFM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,aAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,WAAA;EUKI,iBAAA;Ad6rFR;;AsB5gCE;EV3iDE,0CU6qDA;AtB84BJ;AsB59BE;EhB7vDE,YAAA,EAAA,aAAA;EFmBA,UAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,cAAA;AJ4sFJ;Ac1sFM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,aAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,WAAA;EUKI,iBAAA;Ad+sFR;;AgBh8EE;EAEI,4BMmgDF;AtB+7BJ;AY/mFE;EN5HE,YAAA,EAAA,aAAA;EMgII,0DAAA;AZ+mFR;Ac1tFM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EMsIM,yDAAA;EE9GF,iBAAA;Ad6tFR;;AgB9+EE;EAEI,kBAAA;AhBg/EN;AY7nFE;;EN5HE,YAAA,EAAA,aAAA;EMgII,6DAAA;AZ8nFR;AczuFM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EMsIM,4DAAA;EE9GF,iBAAA;Ad4uFR;;AgB7+EI;;EAEI,eAAA;AhBg/ER;AYtnFE;EAEI,wFAAA;AZunFN;AY3rFI;EACE;INlFF,YAAA,EAAA,aAAA;IMoFI,sEAAA;EZ6rFN;EYzrFI;IACE,mEAAA;INzFJ,YAAA,EAAA,aAAA;IM2FI,uEAAA;EZ2rFN;EYvrFI;IACE,2EAAA;INhGJ,YAAA,EAAA,aAAA;IMuGI,wEAAA;EZorFN;EYhrFI;IN3GF,YAAA,EAAA,aAAA;IM6GI,sEAAA;EZkrFN;AACF;Ac3wFM;EACE,mBAAA;EAEA,iBAAA;Ad4wFR;AYjpFE;EAEI,wFAAA;AZkpFN;;AYttFI;EACE;INlFF,YAAA,EAAA,aAAA;IMoFI,uEAAA;EZytFN;EYrtFI;IACE,mEAAA;INzFJ,YAAA,EAAA,aAAA;IM2FI,wEAAA;EZutFN;EYntFI;IACE,2EAAA;INhGJ,YAAA,EAAA,aAAA;IMuGI,yEAAA;EZgtFN;EY5sFI;IN3GF,YAAA,EAAA,aAAA;IM6GI,uEAAA;EZ8sFN;AACF;;AsB7pFE;EhB/JE,YAAA,EAAA,aAAA;EFmBA,kBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;AJgzFJ;Ac9yFM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,mBAAA;EUKI,iBAAA;AdmzFR;;AsBrnCE;EVxjDE,4BU6pDA;AtBohCJ;AsBrnCE;EV5jDE,0CU6qDA;AtBugCJ;AgB3iFE;EAEI,4BMmgDF;AtByiCJ;;AsB1qFE;EhB3KE,YAAA,EAAA,aAAA;EgBy3CA,eAAA;EhBz3CA,YAAA,EAAA,aAAA;EgB23CA,gBAAA;AtBi+CJ;AsBnnCE;EV3kDE,4BU6pDA;AtBoiCJ;AsBlnCE;EV/kDE,0CU6qDA;AtBuhCJ;;AsB5qFE;EAEI,aAAA;EACA,8BAAA;EACA,sBAAA;AtB8qFN;AsB3qFI;EAEI,mBIjIc;EJkId,kBIlIc;A1B8yFtB;;AsBlqFE;EAEI,sBAAA;AtBoqFN;;AsB9bE;ElB/5EE,6BAAA;AJi2FJ;AgBnyFE;;;EAII,iBUhDkB;A1Bo1FxB;AsBptCE;EAGI,UAAA;AtBotCN;AgB1xFE;EAEI,gBU/DkB;A1B01FxB;AgB7xFE;EAEI,cMilDyC;AtB6sC/C;;Aer1FI;EXtCE,4BAAA;EEZF,eAAA;EFwBA,oDAAA;AJq3FJ;Aer2FI;EX5BE,4BAAA;EEZF,eAAA;EFwBA,oDAAA;AJ03FJ;AsB3dE;ElB36EI,cAAA;EEZF,eAAA;EFwBA,sCAAA;AJ+3FJ;AuBh2FE;EnB3CI,cAAA;EEZF,eAAA;EFwBA,sCAAA;AJo4FJ;AsBh/DE;ElBh6BI,oBAAA;EEZF,eAAA;EFwBA,4CAAA;AJy4FJ;AyBnzFE;ErBlGI,cAAA;EEZF,eAAA;EFwBA,sCAAA;AJ84FJ;Aep3FI;EXtCE,4BAAA;EEZF,eAAA;EFwBA,oDAAA;AJm5FJ;AgBj2FE;;;EZ9DI,qBAAA;EEZF,eAAA;EFwBA,6CAAA;AJ05FJ;AgBx2FE;;;EZ9DI,qBAAA;EEZF,eAAA;EFwBA,6CAAA;AJi6FJ;AgB/2FE;;;EZ9DI,qBAAA;EEZF,eAAA;EFwBA,6CAAA;AJw6FJ;AsBxyCE;EAEI,UAAA;AtByyCN;;AsB5tFE;EA43CE,oBAAA;AtBo2CJ;AsBrlBE;ElB11EE,0BAAA;AJk7FJ;AsBjfE;EAGE;IlBp8EA,0BAAA;EJs7FF;AACF;AsB9eE;EAGE;IlB58EA,0BAAA;EJ27FF;AACF;AsB7hBE;ElB/5EE,0BAAA;AJ+7FJ;AuB16FE;EnBrBE,0BAAA;AJk8FJ;AwB76FE;;EpBrBE,0BAAA;AJs8FJ;AyB13FE;ErB5EE,yBAAA;AJy8FJ;AyBn3FE;ErBtFE,yBAAA;AJ48FJ;AsBpiBI;ElBx6EA,0BAAA;AJ+8FJ;AsB7hBI;ElBl7EA,0BAAA;AJk9FJ;Aex7FI;EX1BA,wCAAA;AJq9FJ;AgBn6FE;;;EZlDE,iCAAA;AJ09FJ;AsBzhBE;EAGE;IlBp8EA,eAAA;EJ89FF;AACF;AsBthBE;EAGE;IlB58EA,eAAA;EJm+FF;AACF;AOh9FI;Ee24EF;IlB/5EE,eAAA;EJw+FF;AACF;AOr9FI;EgBCF;InBrBE,eAAA;EJ6+FF;AACF;AO19FI;EiBCF;;IpBrBE,eAAA;EJm/FF;AACF;AOh+FI;EkBwDF;IrB5EE,eAAA;EJw/FF;AACF;AOr+FI;EkBkEF;IrBtFE,eAAA;EJ6/FF;AACF;AO1+FI;Eeo5EA;IlBx6EA,eAAA;EJkgGF;AACF;AO/+FI;Ee85EA;IlBl7EA,eAAA;EJugGF;AACF;AOp/FI;EQMA;IX1BA,6BAAA;EJ4gGF;AACF;AOz/FI;ES8BF;;;IZlDE,sBAAA;EJmhGF;AACF;AOpgGI;Ee6iDA;IAEI,wBAAA;EtBy9CN;EsBr9CE;IAEI,UAAA;EtBs9CN;AACF;AsB98CE;EAEI,eAAA;AtB+8CN;AsB70FI;ElBlNA,yBAAA;AJkiGJ;AsB97CE;EAII,aAAA;AtB67CN;AsB/0FI;EAq4CA,oBAAA;AtB68CJ;;AsBrzBE;EhBtwEE,YAAA,EAAA,aAAA;EgB0wEE,iBAAA;AtBszBN;Ac3iGM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EgBgxEI,gBAAA;ERxvEA,iBAAA;Ad8iGR;;AcjjGM;EACE,mBAAA;EAEA,iBAAA;AdmjGR;AsB9yBM;;;EhB7xEF,YAAA,EAAA,aAAA;EgBgyEI,cAAA;AtBizBR;AsB9yBM;EhBnyEF,YAAA,EAAA,aAAA;EgBqyEI,eAAA;EhBryEJ,YAAA,EAAA,aAAA;EgBuyEI,kBIpqES;A1Bo9FjB;AsB7yBM;EhB1yEF,YAAA,EAAA,aAAA;EgB4yEI,kBIvqES;EpBrIb,YAAA,EAAA,aAAA;EgB8yEI,gBAAA;AtB+yBR;AsB1yBM;EACE,QAAA;AtB4yBR;AsBzyBM;EACE,QAAA;AtB2yBR;AsBxyBM;EACE,QAAA;AtB0yBR;AsBvyBM;EACE,QAAA;AtByyBR;AsBtyBM;EACE,QAAA;AtBwyBR;;AcvlGM;EACE,mBAAA;EAEA,iBAAA;AdylGR;AsB/xBM;EhBl1EF,YAAA,EAAA,aAAA;EgBs1EI,iBAAA;AtB+xBR;AsB5xBM;EhBz1EF,YAAA,EAAA,aAAA;EgB41EI,mBIxtEqB;A1Bq/F7B;AsB1xBM;EhB/1EF,YAAA,EAAA,aAAA;EgBi2EI,iBI3tEqB;A1Bu/F7B;;AuBjpGE;EViSE,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,6GAAA;EAZE,kBAAA;EEZF,eAAA;EFwBA,2DAAA;EAZE,oBAAA;EEZF,eAAA;EFwBA,+DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,2DAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,4EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,uEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,qEAAA;ESsSA,cA2CQ;EAoBN,aAAA;EACA,eAAA;EACA,mBAAA;EUzYA,SAAA;EACA,UAAA;EACA,oBAAA;EAIA,0DAAA;AvBwqGN;AapxFE;EAyCA,qBAAA;EACA,QAAA;EACA,YUxc0C;EVyc1C,WAAA;EAxCI,iBAAA;AbuxFN;;AuB3qGE;EAEI,gBAAA;EAIA,UAAA;EACA,oBAAA;AvB0qGN;;AwBlsGE;EXmSE,kCAAA;EACA,mCAAA;ETvQE,+BAAA;EEZF,eAAA;EFwBA,6GAAA;EAZE,kBAAA;EEZF,eAAA;EFwBA,2DAAA;EAZE,oBAAA;EEZF,eAAA;EFwBA,+DAAA;EAZE,gBAAA;EEZF,eAAA;EFwBA,2DAAA;EAZE,8BAAA;EEZF,eAAA;EFwBA,4EAAA;EAZE,wBAAA;EEZF,eAAA;EFwBA,uEAAA;EAZE,uBAAA;EEZF,eAAA;EFwBA,qEAAA;ESsSA,cA2CQ;EAoBN,aAAA;EACA,eAAA;EACA,mBAAA;EP1XF,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,gBAAA;EoBhCE,mBAAA;AxBguGN;Aax0FE;EAyCA,qBAAA;EACA,QAAA;EACA,YW1c0C;EX2c1C,WAAA;EAxCI,iBAAA;Ab20FN;AcrsGM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,cAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EUKI,iBAAA;Ad0sGR;;Ac7sGM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,eAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,mBAAA;EUKI,iBAAA;AdmtGR;;AyBpwGE;EAoEE,kBAAA;EACA,eAAA;AzBosGJ;AyBjsGE;EAGI,eAAA;EACA,oBAAA;AzBisGN;AyB1wGI;EAqFA,cAAA;AzBwrGJ;;AyBxwGE;EnBiBE,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,iBAAA;AJ2uGJ;AczuGM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,gBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EUKI,iBAAA;Ad8uGR;;AyBnxGE;EAoGE,aAJU;EnBnFV,YAAA,EAAA,aAAA;EFmBA,gBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,iBAAA;AJ2vGJ;AczvGM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,gBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,iBAAA;EUKI,iBAAA;Ad8vGR;;AyB/yGE;EAoEE,kBAAA;EACA,eAAA;AzB+uGJ;AyB5uGE;EAGI,eAAA;EACA,oBAAA;AzB4uGN;AyBrzGI;EAqFA,cAAA;AzBmuGJ;;AyBnzGE;EnBiBE,YAAA,EAAA,aAAA;EFmBA,iBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,iBAAA;AJsxGJ;AcpxGM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,gBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,kBAAA;EUKI,iBAAA;AdyxGR;;AyB9zGE;EAoGE,aAJU;EnBnFV,YAAA,EAAA,aAAA;EFmBA,gBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,iBAAA;AJsyGJ;AcpyGM;EACE,mBAAA;ERtBJ,YAAA,EAAA,aAAA;EFmBA,gBAAA;EEnBA,YAAA,EAAA,aAAA;EFmBA,iBAAA;EUKI,iBAAA;AdyyGR","sourcesContent":["// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use 'sass:list';\n@use 'sass:map';\n@use './variables';\n@use './mixins';\n\n:root {\n  @each $size in map.keys(variables.$columns) {\n    --mdc-layout-grid-margin-#{$size}: #{map.get(\n        variables.$default-margin,\n        $size\n      )};\n    --mdc-layout-grid-gutter-#{$size}: #{map.get(\n        variables.$default-gutter,\n        $size\n      )};\n    --mdc-layout-grid-column-width-#{$size}: #{map.get(\n        variables.$column-width,\n        $size\n      )};\n  }\n}\n\n// postcss-bem-linter: define layout-grid\n.mdc-layout-grid {\n  @each $size in map.keys(variables.$columns) {\n    @include mixins.media-query_($size) {\n      $margin: map.get(variables.$default-margin, $size);\n\n      @include mixins.layout-grid($size, $margin, variables.$max-width);\n    }\n  }\n}\n\n.mdc-layout-grid__inner {\n  @each $size in map.keys(variables.$columns) {\n    @include mixins.media-query_($size) {\n      $margin: map.get(variables.$default-margin, $size);\n      $gutter: map.get(variables.$default-gutter, $size);\n\n      @include mixins.inner($size, $margin, $gutter);\n    }\n  }\n}\n\n.mdc-layout-grid__cell {\n  // select the upper breakpoint\n  $upper-breakpoint: list.nth(map.keys(variables.$columns), 1);\n\n  @each $size in map.keys(variables.$columns) {\n    @include mixins.media-query_($size) {\n      $gutter: map.get(variables.$default-gutter, $size);\n\n      @include mixins.cell($size, variables.$default-column-span, $gutter);\n\n      @for $span from 1 through map.get(variables.$columns, $upper-breakpoint) {\n        // Span classes.\n        // stylelint-disable max-nesting-depth\n        @at-root .mdc-layout-grid__cell--span-#{$span},\n          .mdc-layout-grid__cell--span-#{$span}-#{$size} {\n          @include mixins.cell-span_($size, $span, $gutter);\n        }\n        // stylelint-enable max-nesting-depth\n      }\n    }\n  }\n\n  // Order override classes.\n  @for $i from 1 through map.get(variables.$columns, $upper-breakpoint) {\n    &--order-#{$i} {\n      @include mixins.cell-order($i);\n    }\n  }\n\n  // Alignment classes.\n  &--align-top {\n    @include mixins.cell-align(top);\n  }\n\n  &--align-middle {\n    @include mixins.cell-align(middle);\n  }\n\n  &--align-bottom {\n    @include mixins.cell-align(bottom);\n  }\n}\n\n.mdc-layout-grid--fixed-column-width {\n  @each $size in map.keys(variables.$columns) {\n    @include mixins.media-query_($size) {\n      $margin: map.get(variables.$default-margin, $size);\n      $gutter: map.get(variables.$default-gutter, $size);\n      $column-width: map.get(variables.$column-width, $size);\n\n      @include mixins.fixed-column-width(\n        $size,\n        $margin,\n        $gutter,\n        $column-width\n      );\n    }\n  }\n}\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto;\n}\n// postcss-bem-linter: end\n",":root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px;\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px);\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px);\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px);\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 24px;\n      grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__cell {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n    width: calc(8.3333333333% - 24px);\n    width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n    width: calc(16.6666666667% - 24px);\n    width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n    width: calc(25% - 24px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n    width: calc(41.6666666667% - 24px);\n    width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n    width: calc(50% - 24px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n    width: calc(58.3333333333% - 24px);\n    width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n    width: calc(66.6666666667% - 24px);\n    width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n    width: calc(75% - 24px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n      width: auto;\n      grid-column-end: span 9;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n    width: calc(83.3333333333% - 24px);\n    width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n      width: auto;\n      grid-column-end: span 10;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n    width: calc(91.6666666667% - 24px);\n    width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n      width: auto;\n      grid-column-end: span 11;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n    width: calc(100% - 24px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n      width: auto;\n      grid-column-end: span 12;\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__cell {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n    width: calc(12.5% - 16px);\n    width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n    width: calc(37.5% - 16px);\n    width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n    width: calc(62.5% - 16px);\n    width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n    width: calc(87.5% - 16px);\n    width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__cell {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n}\n.mdc-layout-grid__cell--order-1 {\n  order: 1;\n}\n.mdc-layout-grid__cell--order-2 {\n  order: 2;\n}\n.mdc-layout-grid__cell--order-3 {\n  order: 3;\n}\n.mdc-layout-grid__cell--order-4 {\n  order: 4;\n}\n.mdc-layout-grid__cell--order-5 {\n  order: 5;\n}\n.mdc-layout-grid__cell--order-6 {\n  order: 6;\n}\n.mdc-layout-grid__cell--order-7 {\n  order: 7;\n}\n.mdc-layout-grid__cell--order-8 {\n  order: 8;\n}\n.mdc-layout-grid__cell--order-9 {\n  order: 9;\n}\n.mdc-layout-grid__cell--order-10 {\n  order: 10;\n}\n.mdc-layout-grid__cell--order-11 {\n  order: 11;\n}\n.mdc-layout-grid__cell--order-12 {\n  order: 12;\n}\n.mdc-layout-grid__cell--align-top {\n  align-self: flex-start;\n}\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-top {\n    align-self: start;\n  }\n}\n.mdc-layout-grid__cell--align-middle {\n  align-self: center;\n}\n.mdc-layout-grid__cell--align-bottom {\n  align-self: flex-end;\n}\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-bottom {\n    align-self: end;\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 1176px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-desktop, 72px) * 12 +\n      var(--mdc-layout-grid-gutter-desktop, 24px) * 11 +\n      var(--mdc-layout-grid-margin-desktop, 24px) * 2\n  );\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 720px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-tablet, 72px) * 8 +\n      var(--mdc-layout-grid-gutter-tablet, 16px) * 7 +\n      var(--mdc-layout-grid-margin-tablet, 16px) * 2\n  );\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 368px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-phone, 72px) * 4 +\n      var(--mdc-layout-grid-gutter-phone, 16px) * 3 +\n      var(--mdc-layout-grid-margin-phone, 16px) * 2\n  );\n  }\n}\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n.mdc-touch-target-wrapper {\n  display: inline;\n}\n\n.mdc-radio {\n  padding: calc((40px - 20px) / 2);\n}\n.mdc-radio .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mdc-radio .mdc-radio__native-control:enabled:checked + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: #018786;\n  /* @alternate */\n  border-color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-radio .mdc-radio__native-control:enabled + .mdc-radio__background .mdc-radio__inner-circle {\n  border-color: #018786;\n  /* @alternate */\n  border-color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio .mdc-radio__native-control:disabled:checked + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mdc-radio [aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-radio .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mdc-radio .mdc-radio__background::before {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-radio .mdc-radio__background::before {\n  top: calc(-1 * (40px - 20px) / 2);\n  left: calc(-1 * (40px - 20px) / 2);\n  width: 40px;\n  height: 40px;\n}\n.mdc-radio .mdc-radio__native-control {\n  top: calc((40px - 40px) / 2);\n  right: calc((40px - 40px) / 2);\n  left: calc((40px - 40px) / 2);\n  width: 40px;\n  height: 40px;\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {\n    border-color: GrayText;\n  }\n  .mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked + .mdc-radio__background .mdc-radio__outer-circle {\n    border-color: GrayText;\n  }\n  .mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n    border-color: GrayText;\n  }\n}\n\n.mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  /* @alternate */\n  will-change: opacity, transform, border-color, color;\n}\n.mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0, 0);\n  border-width: 10px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n}\n.mdc-radio--touch {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n.mdc-radio--touch .mdc-radio__native-control {\n  top: calc((40px - 48px) / 2);\n  right: calc((40px - 48px) / 2);\n  left: calc((40px - 48px) / 2);\n  width: 48px;\n  height: 48px;\n}\n.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring {\n  pointer-events: none;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  box-sizing: content-box;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n}\n@media screen and (forced-colors: active) {\n  .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring {\n    border-color: CanvasText;\n  }\n}\n.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after {\n  content: \"\";\n  border: 2px solid transparent;\n  border-radius: 8px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(100% + 4px);\n  width: calc(100% + 4px);\n}\n@media screen and (forced-colors: active) {\n  .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background,\n.mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle {\n  transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio__native-control:disabled + .mdc-radio__background,\n[aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background {\n  cursor: default;\n}\n\n.mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(1);\n  opacity: 0.12;\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-radio {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-radio .mdc-radio__ripple::before,\n.mdc-radio .mdc-radio__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-radio .mdc-radio__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-radio .mdc-radio__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-radio .mdc-radio__ripple::before,\n.mdc-radio .mdc-radio__ripple::after {\n  top: calc(50% - 50%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before,\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-radio .mdc-radio__ripple::before, .mdc-radio .mdc-radio__ripple::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-radio:hover .mdc-radio__ripple::before, .mdc-radio.mdc-ripple-surface--hover .mdc-radio__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before, .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-radio.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__background::before, .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before {\n  content: none;\n}\n\n.mdc-radio__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-floating-label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  position: absolute;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  -webkit-transform-origin: left top;\n  /* @noflip */ /*rtl:ignore*/\n  transform-origin: left top;\n  line-height: 1.15rem;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  /* @alternate */\n  will-change: transform;\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n[dir=rtl] .mdc-floating-label, .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  -webkit-transform-origin: right top;\n  /* @noflip */ /*rtl:ignore*/\n  transform-origin: right top;\n  /* @noflip */ /*rtl:ignore*/\n  text-align: right;\n  /*rtl:end:ignore*/\n}\n\n.mdc-floating-label--float-above {\n  cursor: auto;\n}\n\n.mdc-floating-label--required::after {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 1px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  content: \"*\";\n}\n[dir=rtl] .mdc-floating-label--required, .mdc-floating-label--required[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /*rtl:end:ignore*/\n}\n[dir=rtl] .mdc-floating-label--required::after, .mdc-floating-label--required[dir=rtl]::after {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 1px;\n}\n\n.mdc-floating-label--float-above {\n  transform: translateY(-106%) scale(0.75);\n}\n\n.mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-standard 250ms 1;\n}\n\n@keyframes mdc-floating-label-shake-float-above-standard {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);\n  }\n}\n.mdc-line-ripple::before, .mdc-line-ripple::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom-style: solid;\n  content: \"\";\n}\n.mdc-line-ripple::before {\n  border-bottom-width: 1px;\n}\n.mdc-line-ripple::before {\n  z-index: 1;\n}\n.mdc-line-ripple::after {\n  transform: scaleX(0);\n  border-bottom-width: 2px;\n  opacity: 0;\n  z-index: 2;\n}\n.mdc-line-ripple::after {\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-line-ripple--active::after {\n  transform: scaleX(1);\n  opacity: 1;\n}\n\n.mdc-line-ripple--deactivating::after {\n  opacity: 0;\n}\n\n.mdc-notched-outline {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  /* @noflip */ /*rtl:ignore*/\n  text-align: left;\n  pointer-events: none;\n}\n[dir=rtl] .mdc-notched-outline, .mdc-notched-outline[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  text-align: right;\n  /*rtl:end:ignore*/\n}\n\n.mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {\n  box-sizing: border-box;\n  height: 100%;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  pointer-events: none;\n}\n.mdc-notched-outline__leading {\n  /* @noflip */ /*rtl:ignore*/\n  border-left: 1px solid;\n  /* @noflip */ /*rtl:ignore*/\n  border-right: none;\n  width: 12px;\n}\n[dir=rtl] .mdc-notched-outline__leading, .mdc-notched-outline__leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-left: none;\n  /* @noflip */ /*rtl:ignore*/\n  border-right: 1px solid;\n  /*rtl:end:ignore*/\n}\n\n.mdc-notched-outline__trailing {\n  /* @noflip */ /*rtl:ignore*/\n  border-left: none;\n  /* @noflip */ /*rtl:ignore*/\n  border-right: 1px solid;\n  flex-grow: 1;\n}\n[dir=rtl] .mdc-notched-outline__trailing, .mdc-notched-outline__trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-left: 1px solid;\n  /* @noflip */ /*rtl:ignore*/\n  border-right: none;\n  /*rtl:end:ignore*/\n}\n\n.mdc-notched-outline__notch {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: calc(100% - 12px * 2);\n}\n.mdc-notched-outline .mdc-floating-label {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n.mdc-notched-outline .mdc-floating-label--float-above {\n  text-overflow: clip;\n}\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: 133.3333333333%;\n}\n\n.mdc-notched-outline--notched .mdc-notched-outline__notch {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 8px;\n  border-top: none;\n}\n[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch, .mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-notched-outline--no-label .mdc-notched-outline__notch {\n  display: none;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --mdc-theme-primary: #006874;\n    --mdc-theme-on-primary: #ffffff;\n    --mdc-theme-secondary: #5c6300;\n    --mdc-theme-on-secondary: #ffffff;\n    --mdc-theme-surface: #fafdfd;\n    --mdc-theme-on-surface: #191c1d;\n    --mdc-theme-background: #fafdfd;\n    --mdc-theme-on-background: #191c1d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --mdc-theme-primary: #4fd8eb;\n    --mdc-theme-on-primary: #00363d;\n    --mdc-theme-secondary: #c2d016;\n    --mdc-theme-on-secondary: #2f3300;\n    --mdc-theme-surface-base: 195, 7.4%;\n    --mdc-theme-surface-l: 15.6%;\n    --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\n    --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\n    --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\n    --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\n    --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\n    --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\n    --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\n    --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n    --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\n    --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\n    --mdc-theme-on-surface: #e1e3e3;\n    --mdc-theme-background: #191c1d;\n    --mdc-theme-on-background: #e1e3e3;\n    --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdc-elevation--z1 {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-elevation--z2 {\n    background: var(--mdc-theme-surface-z2);\n  }\n  .mdc-elevation--z3 {\n    background: var(--mdc-theme-surface-z3);\n  }\n  .mdc-elevation--z4 {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-elevation--z5 {\n    background: var(--mdc-theme-surface-z5);\n  }\n  .mdc-elevation--z6 {\n    background: var(--mdc-theme-surface-z6);\n  }\n  .mdc-elevation--z7 {\n    background: var(--mdc-theme-surface-z7);\n  }\n  .mdc-drawer.mdc-drawer--modal {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__title {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__subtitle {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-surface-z9);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar {\n    background-color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar__title {\n    color: var(--mdc-theme-on-primary);\n  }\n  .mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-tab.mdc-tab--active .mdc-tab__icon, .mdc-tab.mdc-tab--active .mdc-tab__text-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__header-cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: var(--mdc-theme-surface-z3);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__title {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog__actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined .mdc-notched-outline {\n    z-index: -1;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-primary);\n  }\n}\n.mdc-typography {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);\n}\n\n.mdc-typography--headline1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 6rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline1-font-size, 6rem);\n  line-height: 6rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline1-line-height, 6rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline1-font-weight, 300);\n  letter-spacing: -0.015625em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline1-text-transform, inherit);\n}\n\n.mdc-typography--headline2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline2-font-size, 3.75rem);\n  line-height: 3.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline2-line-height, 3.75rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline2-font-weight, 300);\n  letter-spacing: -0.0083333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline2-text-transform, inherit);\n}\n\n.mdc-typography--headline3 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline3-font-size, 3rem);\n  line-height: 3.125rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline3-line-height, 3.125rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline3-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline3-text-transform, inherit);\n}\n\n.mdc-typography--headline4 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 2.125rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline4-font-size, 2.125rem);\n  line-height: 2.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline4-line-height, 2.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline4-font-weight, 400);\n  letter-spacing: 0.0073529412em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline4-text-transform, inherit);\n}\n\n.mdc-typography--headline5 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.5rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline5-font-size, 1.5rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline5-line-height, 2rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline5-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline5-text-transform, inherit);\n}\n\n.mdc-typography--headline6 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n}\n\n.mdc-typography--subtitle1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n}\n\n.mdc-typography--subtitle2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n}\n\n.mdc-typography--body1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body1-font-size, 1rem);\n  line-height: 1.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body1-line-height, 1.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body1-font-weight, 400);\n  letter-spacing: 0.03125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body1-text-transform, inherit);\n}\n\n.mdc-typography--body2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-typography--caption {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-typography--button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n}\n\n.mdc-typography--overline {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n}\n\nhtml {\n  background-color: var(--mdc-theme-background);\n}\n\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  vertical-align: middle;\n}\n\n.mdc-icon-button.actionsButton {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n\n.main-content {\n  padding: 1rem;\n}\n\n.content-section {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.demo-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.demo-group.wrap {\n  flex-wrap: wrap;\n}\n\n.mdc-form-field {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.mdc-form-field > label {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  order: 0;\n}\n[dir=rtl] .mdc-form-field > label, .mdc-form-field > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-form-field > label, .mdc-form-field > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 4px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-form-field--nowrap > label {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.mdc-form-field--align-end > label {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 4px;\n  order: -1;\n}\n[dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-form-field--space-between {\n  justify-content: space-between;\n}\n.mdc-form-field--space-between > label {\n  margin: 0;\n}\n[dir=rtl] .mdc-form-field--space-between > label, .mdc-form-field--space-between > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  margin: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--filled {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-text-field--filled .mdc-text-field__ripple::before,\n.mdc-text-field--filled .mdc-text-field__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-text-field--filled .mdc-text-field__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-text-field--filled .mdc-text-field__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-text-field--filled .mdc-text-field__ripple::before,\n.mdc-text-field--filled .mdc-text-field__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-text-field__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-text-field {\n  border-top-left-radius: 4px;\n  /* @alternate */\n  border-top-left-radius: var(--mdc-shape-small, 4px);\n  border-top-right-radius: 4px;\n  /* @alternate */\n  border-top-right-radius: var(--mdc-shape-small, 4px);\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  display: inline-flex;\n  align-items: baseline;\n  padding: 0 16px;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  /* @alternate */\n  will-change: opacity, transform, color;\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: rgba(0, 0, 0, 0.87);\n}\n@media all {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n    color: rgba(0, 0, 0, 0.54);\n  }\n}\n@media all {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.54);\n  }\n}\n.mdc-text-field .mdc-text-field__input {\n  caret-color: #6200ee;\n  /* @alternate */\n  caret-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,\n.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-text-field .mdc-floating-label {\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.mdc-text-field__input {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  height: 28px;\n  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n  min-width: 0;\n  border: none;\n  border-radius: 0;\n  background: none;\n  appearance: none;\n  padding: 0;\n}\n.mdc-text-field__input::-ms-clear {\n  display: none;\n}\n.mdc-text-field__input::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.mdc-text-field__input:focus {\n  outline: none;\n}\n.mdc-text-field__input:invalid {\n  box-shadow: none;\n}\n@media all {\n  .mdc-text-field__input::placeholder {\n    transition: opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n    opacity: 0;\n  }\n}\n@media all {\n  .mdc-text-field__input:-ms-input-placeholder {\n    transition: opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n    opacity: 0;\n  }\n}\n@media all {\n  .mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {\n    transition-delay: 40ms;\n    transition-duration: 110ms;\n    opacity: 1;\n  }\n}\n@media all {\n  .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n    transition-delay: 40ms;\n    transition-duration: 110ms;\n    opacity: 1;\n  }\n}\n\n.mdc-text-field__affix {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  height: 28px;\n  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  white-space: nowrap;\n}\n.mdc-text-field--label-floating .mdc-text-field__affix, .mdc-text-field--no-label .mdc-text-field__affix {\n  opacity: 1;\n}\n@supports (-webkit-hyphens: none) {\n  .mdc-text-field--outlined .mdc-text-field__affix {\n    align-items: center;\n    align-self: center;\n    display: inline-flex;\n    height: 100%;\n  }\n}\n\n.mdc-text-field__affix--prefix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 2px;\n}\n[dir=rtl] .mdc-text-field__affix--prefix, .mdc-text-field__affix--prefix[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 2px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--end-aligned .mdc-text-field__affix--prefix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix, .mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__affix--suffix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-text-field__affix--suffix, .mdc-text-field__affix--suffix[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--end-aligned .mdc-text-field__affix--suffix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 2px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix, .mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 2px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--filled {\n  height: 56px;\n}\n.mdc-text-field--filled .mdc-text-field__ripple::before,\n.mdc-text-field--filled .mdc-text-field__ripple::after {\n  background-color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, rgba(0, 0, 0, 0.87));\n}\n.mdc-text-field--filled:hover .mdc-text-field__ripple::before, .mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before, .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-text-field--filled::before {\n  display: inline-block;\n  width: 0;\n  height: 40px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: whitesmoke;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: rgba(0, 0, 0, 0.42);\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {\n  border-bottom-color: rgba(0, 0, 0, 0.87);\n}\n.mdc-text-field--filled .mdc-line-ripple::after {\n  border-bottom-color: #6200ee;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-text-field--filled .mdc-floating-label {\n  /* @noflip */ /*rtl:ignore*/\n  left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n}\n[dir=rtl] .mdc-text-field--filled .mdc-floating-label, .mdc-text-field--filled .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--filled .mdc-floating-label--float-above {\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {\n  height: 100%;\n}\n.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {\n  display: none;\n}\n.mdc-text-field--filled.mdc-text-field--no-label::before {\n  display: none;\n}\n@supports (-webkit-hyphens: none) {\n  .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix {\n    align-items: center;\n    align-self: center;\n    display: inline-flex;\n    height: 100%;\n  }\n}\n\n.mdc-text-field--outlined {\n  height: 56px;\n  overflow: visible;\n}\n.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-37.25px) scale(1);\n}\n.mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: 0.75rem;\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-34.75px) scale(0.75);\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n.mdc-text-field--outlined .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;\n}\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);\n  }\n}\n.mdc-text-field--outlined .mdc-text-field__input {\n  height: 100%;\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #6200ee;\n  /* @alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: var(--mdc-shape-small, 4px);\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n  /*rtl:end:ignore*/\n}\n\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n    width: max(12px, var(--mdc-shape-small, 4px));\n  }\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {\n    max-width: calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2);\n  }\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: var(--mdc-shape-small, 4px);\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 4px;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: var(--mdc-shape-small, 4px);\n  /*rtl:end:ignore*/\n}\n\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));\n  }\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined {\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: max(16px, var(--mdc-shape-small, 4px));\n  }\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined + .mdc-text-field-helper-line {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));\n  }\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined + .mdc-text-field-helper-line {\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: max(16px, var(--mdc-shape-small, 4px));\n  }\n}\n.mdc-text-field--outlined.mdc-text-field--with-leading-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined.mdc-text-field--with-leading-icon {\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: max(16px, var(--mdc-shape-small, 4px));\n  }\n}\n[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon, .mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n@supports (top: max(0%)) {\n  [dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon, .mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl] {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: max(16px, var(--mdc-shape-small, 4px));\n  }\n}\n\n.mdc-text-field--outlined.mdc-text-field--with-trailing-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n@supports (top: max(0%)) {\n  .mdc-text-field--outlined.mdc-text-field--with-trailing-icon {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));\n  }\n}\n[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon, .mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /*rtl:end:ignore*/\n}\n@supports (top: max(0%)) {\n  [dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon, .mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl] {\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));\n  }\n}\n\n.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 1px;\n}\n.mdc-text-field--outlined .mdc-text-field__ripple::before,\n.mdc-text-field--outlined .mdc-text-field__ripple::after {\n  background-color: transparent;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, transparent);\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  /* @noflip */ /*rtl:ignore*/\n  left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--outlined .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 4px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--outlined .mdc-text-field__input {\n  display: flex;\n  border: none !important;\n  background-color: transparent;\n}\n.mdc-text-field--outlined .mdc-notched-outline {\n  z-index: 1;\n}\n\n.mdc-text-field--textarea {\n  flex-direction: column;\n  align-items: center;\n  width: auto;\n  height: auto;\n  padding: 0;\n  transition: none;\n}\n.mdc-text-field--textarea .mdc-floating-label {\n  top: 19px;\n}\n.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above) {\n  transform: none;\n}\n.mdc-text-field--textarea .mdc-text-field__input {\n  flex-grow: 1;\n  height: auto;\n  min-height: 1.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  box-sizing: border-box;\n  resize: none;\n  padding: 0 16px;\n  line-height: 1.5rem;\n}\n.mdc-text-field--textarea.mdc-text-field--filled::before {\n  display: none;\n}\n.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above {\n  transform: translateY(-10.25px) scale(0.75);\n}\n.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-textarea-filled 250ms 1;\n}\n@keyframes mdc-floating-label-shake-float-above-textarea-filled {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);\n  }\n}\n.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input {\n  margin-top: 23px;\n  margin-bottom: 9px;\n}\n.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 0;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-27.25px) scale(1);\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: 0.75rem;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-24.75px) scale(0.75);\n}\n.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-textarea-outlined 250ms 1;\n}\n@keyframes mdc-floating-label-shake-float-above-textarea-outlined {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);\n  }\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label {\n  top: 18px;\n}\n.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input {\n  margin-bottom: 2px;\n}\n.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter {\n  align-self: flex-end;\n  padding: 0 16px;\n}\n.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after {\n  display: inline-block;\n  width: 0;\n  height: 16px;\n  content: \"\";\n  vertical-align: -16px;\n}\n.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before {\n  display: none;\n}\n\n.mdc-text-field__resizer {\n  align-self: stretch;\n  display: inline-flex;\n  flex-direction: column;\n  flex-grow: 1;\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 56px;\n  min-width: fit-content;\n  /* @alternate */\n  min-width: -moz-available;\n  /* @alternate */\n  min-width: -webkit-fill-available;\n  overflow: hidden;\n  resize: both;\n}\n.mdc-text-field--filled .mdc-text-field__resizer {\n  transform: translateY(-1px);\n}\n.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,\n.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter {\n  transform: translateY(1px);\n}\n.mdc-text-field--outlined .mdc-text-field__resizer {\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateX(-1px) translateY(-1px);\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer, .mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateX(1px) translateY(-1px);\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,\n.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter {\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateX(1px) translateY(1px);\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input, [dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter, .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl], .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateX(-1px) translateY(1px);\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-text-field--with-leading-icon, .mdc-text-field--with-leading-icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label {\n  max-width: calc(100% - 48px);\n  /* @noflip */ /*rtl:ignore*/\n  left: 48px;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 48px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 64px / 0.75);\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {\n  /* @noflip */ /*rtl:ignore*/\n  left: 36px;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 36px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {\n  max-width: calc(100% - 60px);\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateY(-37.25px) translateX(-32px) scale(1);\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateY(-37.25px) translateX(32px) scale(1);\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: 0.75rem;\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateY(-34.75px) translateX(-32px) scale(0.75);\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl], .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  transform: translateY(-34.75px) translateX(32px) scale(0.75);\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;\n}\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);\n  }\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /*rtl:end:ignore*/\n}\n[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;\n}\n\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {\n  0% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);\n  }\n  100% {\n    /* @noflip */ /*rtl:ignore*/\n    transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);\n  }\n}\n\n.mdc-text-field--with-trailing-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-text-field--with-trailing-icon, .mdc-text-field--with-trailing-icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label {\n  max-width: calc(100% - 64px);\n}\n.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 64px / 0.75);\n}\n.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {\n  max-width: calc(100% - 60px);\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label {\n  max-width: calc(100% - 96px);\n}\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 96px / 0.75);\n}\n\n.mdc-text-field-helper-line {\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n.mdc-text-field + .mdc-text-field-helper-line {\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\n.mdc-form-field > .mdc-text-field + label {\n  align-self: flex-start;\n}\n\n.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: rgba(98, 0, 238, 0.87);\n}\n.mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-width: 2px;\n}\n.mdc-text-field--focused + .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {\n  opacity: 1;\n}\n.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 2px;\n}\n.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 0;\n}\n\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {\n  border-bottom-color: #b00020;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: #b00020;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: #b00020;\n  /* @alternate */\n  color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {\n  color: #b00020;\n  /* @alternate */\n  color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid .mdc-text-field__input {\n  caret-color: #b00020;\n  /* @alternate */\n  caret-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {\n  color: #b00020;\n  /* @alternate */\n  color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: #b00020;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n  border-color: #b00020;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: #b00020;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #b00020;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #b00020);\n}\n.mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {\n  opacity: 1;\n}\n\n.mdc-text-field--disabled {\n  pointer-events: none;\n}\n.mdc-text-field--disabled .mdc-text-field__input {\n  color: rgba(0, 0, 0, 0.38);\n}\n@media all {\n  .mdc-text-field--disabled .mdc-text-field__input::placeholder {\n    color: rgba(0, 0, 0, 0.38);\n  }\n}\n@media all {\n  .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.38);\n  }\n}\n.mdc-text-field--disabled .mdc-floating-label {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled .mdc-text-field-character-counter,\n.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled .mdc-text-field__icon--leading {\n  color: rgba(0, 0, 0, 0.3);\n}\n.mdc-text-field--disabled .mdc-text-field__icon--trailing {\n  color: rgba(0, 0, 0, 0.3);\n}\n.mdc-text-field--disabled .mdc-text-field__affix--prefix {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled .mdc-text-field__affix--suffix {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mdc-text-field--disabled .mdc-line-ripple::before {\n  border-bottom-color: rgba(0, 0, 0, 0.06);\n}\n.mdc-text-field--disabled .mdc-notched-outline__leading,\n.mdc-text-field--disabled .mdc-notched-outline__notch,\n.mdc-text-field--disabled .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.06);\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__input::placeholder {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-floating-label {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field-character-counter,\n.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__icon--leading {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__icon--trailing {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__affix--prefix {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-text-field__affix--suffix {\n    color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-line-ripple::before {\n    border-bottom-color: GrayText;\n  }\n}\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-text-field--disabled .mdc-notched-outline__leading,\n.mdc-text-field--disabled .mdc-notched-outline__notch,\n.mdc-text-field--disabled .mdc-notched-outline__trailing {\n    border-color: GrayText;\n  }\n}\n@media screen and (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-text-field__input {\n    background-color: Window;\n  }\n  .mdc-text-field--disabled .mdc-floating-label {\n    z-index: 1;\n  }\n}\n.mdc-text-field--disabled .mdc-floating-label {\n  cursor: default;\n}\n.mdc-text-field--disabled.mdc-text-field--filled {\n  background-color: #fafafa;\n}\n.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple {\n  display: none;\n}\n.mdc-text-field--disabled .mdc-text-field__input {\n  pointer-events: auto;\n}\n\n.mdc-text-field--end-aligned .mdc-text-field__input {\n  /* @noflip */ /*rtl:ignore*/\n  text-align: right;\n}\n[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input, .mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  text-align: left;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-text-field--ltr-text, .mdc-text-field--ltr-text[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /*rtl:end:ignore*/\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,\n.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix {\n  /* @noflip */ /*rtl:ignore*/\n  direction: ltr;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 2px;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading {\n  order: 1;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix {\n  order: 2;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input {\n  order: 3;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix {\n  order: 4;\n}\n[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing {\n  order: 5;\n}\n\n[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /*rtl:end:ignore*/\n}\n[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input {\n  /* @noflip */ /*rtl:ignore*/\n  text-align: right;\n}\n[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 2px;\n}\n\n.mdc-text-field-helper-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin: 0;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-text-field-helper-text::before {\n  display: inline-block;\n  width: 0;\n  height: 16px;\n  content: \"\";\n  vertical-align: 0;\n}\n\n.mdc-text-field-helper-text--persistent {\n  transition: none;\n  opacity: 1;\n  will-change: initial;\n}\n\n.mdc-text-field-character-counter {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  white-space: nowrap;\n}\n.mdc-text-field-character-counter::before {\n  display: inline-block;\n  width: 0;\n  height: 16px;\n  content: \"\";\n  vertical-align: 0;\n}\n[dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__icon {\n  align-self: center;\n  cursor: pointer;\n}\n.mdc-text-field__icon:not([tabindex]), .mdc-text-field__icon[tabindex=\"-1\"] {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-text-field__icon svg {\n  display: block;\n}\n\n.mdc-text-field__icon--leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-text-field__icon--leading, .mdc-text-field__icon--leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__icon--trailing {\n  padding: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n}\n[dir=rtl] .mdc-text-field__icon--trailing, .mdc-text-field__icon--trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__icon {\n  align-self: center;\n  cursor: pointer;\n}\n.mdc-text-field__icon:not([tabindex]), .mdc-text-field__icon[tabindex=\"-1\"] {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-text-field__icon svg {\n  display: block;\n}\n\n.mdc-text-field__icon--leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-text-field__icon--leading, .mdc-text-field__icon--leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-text-field__icon--trailing {\n  padding: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n}\n[dir=rtl] .mdc-text-field__icon--trailing, .mdc-text-field__icon--trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  /*rtl:end:ignore*/\n}","// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:math';\n@use './variables';\n\n// returns the lower grid boundary or null if the smallest grid is selected\n@function breakpoint-min($size) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n  $min: map.get(variables.$breakpoints, $size);\n\n  @return if($min > 0, $min, null);\n}\n\n// returns the upper grid boundary or null if the largest grid is selected\n@function breakpoint-max($size) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n  $names: map.keys(variables.$columns);\n  $n: list.index($names, $size);\n  $prev: if($n > 1, list.nth($names, $n - 1), null);\n\n  @return if($prev, (breakpoint-min($prev) - 1px), null);\n}\n\n// Private mixins, meant for internal use.\n@mixin media-query_($size) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  $min: breakpoint-min($size);\n  $max: breakpoint-max($size);\n\n  @if $min == null and $max != null {\n    // Phone\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else if $min != null and $max != null {\n    // Tablet\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $min != null and $max == null {\n    // Desktop\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    // Fallback - no breakpoints defined\n    @content;\n  }\n}\n\n@mixin cell-span_($size, $span, $gutter) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  $percent: math.percentage(\n    math.div($span, map.get(variables.$columns, $size))\n  );\n\n  @if $percent > 100% {\n    $percent: 100%;\n  }\n\n  width: calc(#{$percent} - #{$gutter});\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  width: calc(#{$percent} - var(--mdc-layout-grid-gutter-#{$size}, #{$gutter}));\n\n  @supports (display: grid) {\n    width: auto;\n    grid-column-end: span math.min($span, map.get(variables.$columns, $size));\n  }\n}\n\n// Public mixins, meant for developer usage.\n@mixin layout-grid($size, $margin, $max-width: null) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: $margin;\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  padding: var(--mdc-layout-grid-margin-#{$size}, #{$margin});\n\n  @if $max-width {\n    max-width: $max-width;\n  }\n}\n\n@mixin inner($size, $margin, $gutter) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  margin: math.div(-$gutter, 2);\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  margin: calc(var(--mdc-layout-grid-gutter-#{$size}, #{$gutter}) / 2 * -1);\n\n  @supports (display: grid) {\n    display: grid;\n    margin: 0;\n    grid-gap: $gutter;\n    // stylelint-disable-next-line declaration-block-no-duplicate-properties\n    grid-gap: var(--mdc-layout-grid-gutter-#{$size}, $gutter);\n    grid-template-columns: repeat(\n      map.get(variables.$columns, $size),\n      minmax(0, 1fr)\n    );\n  }\n}\n\n@mixin cell($size, $default-span, $gutter) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  @include cell-span_($size, $default-span, $gutter);\n\n  box-sizing: border-box;\n  margin: math.div($gutter, 2);\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  margin: calc(var(--mdc-layout-grid-gutter-#{$size}, #{$gutter}) / 2);\n\n  @supports (display: grid) {\n    margin: 0;\n  }\n}\n\n@mixin cell-order($order) {\n  order: $order;\n}\n\n@mixin cell-align($position) {\n  @if $position == 'top' {\n    align-self: flex-start;\n\n    @supports (display: grid) {\n      align-self: start;\n    }\n  }\n\n  @if $position == 'middle' {\n    align-self: center;\n  }\n\n  @if $position == 'bottom' {\n    align-self: flex-end;\n\n    @supports (display: grid) {\n      align-self: end;\n    }\n  }\n\n  @if $position == 'stretch' {\n    align-self: stretch;\n  }\n}\n\n@mixin fixed-column-width($size, $margin, $gutter, $column-width) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  $columnCount: map.get(variables.$columns, $size);\n  $gutter-number: $columnCount - 1;\n  $margin-number: 2;\n\n  width: $column-width * $columnCount + $gutter * $gutter-number + $margin *\n    $margin-number;\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  width: calc(\n    var(--mdc-layout-grid-column-width-#{$size}, #{$column-width}) * #{$columnCount} +\n      var(--mdc-layout-grid-gutter-#{$size}, #{$gutter}) * #{$gutter-number} +\n      var(--mdc-layout-grid-margin-#{$size}, #{$margin}) * #{$margin-number}\n  );\n}\n","//\n// Copyright 2019 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n\n$height: 48px !default;\n$width: $height !default;\n\n/// Styles applied to the component's touch target wrapper element.\n@mixin wrapper($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-touch-target-wrapper {\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that styles are only emitted once across all components that\n      // have increased touch targets.\n      @include base-mixins.emit-once('mdc-touch-target/wrapper') {\n        // NOTE: Will change to `inline-block` in the future, but keeping as is\n        // temporarily for backwards-compatibility.\n        display: inline;\n      }\n    }\n  }\n}\n\n/// Styles applied to the component's inner touch target element.\n/// By default, only sets the inner element height to the minimum touch target\n/// height ($mdc-touch-target-height).\n/// @param {Boolean} $set-width [false] - Sets the inner element width to the\n///     minimum touch target width ($mdc-touch-target-width).\n/// @param $height [$mdc-touch-target-height] - Touch target height.\n/// @param $width [$mdc-touch-target-width] - Touch target width.\n@mixin touch-target(\n  $set-width: false,\n  $query: feature-targeting.all(),\n  $height: $height,\n  $width: $width\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 50%;\n    height: $height;\n  }\n\n  @if $set-width {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.ignore-next-line();\n      left: 50%;\n      width: $width;\n      transform: translate(-50%, -50%);\n    }\n  } @else {\n    @include feature-targeting.targets($feat-structure) {\n      left: 0;\n      right: 0;\n      transform: translateY(-50%);\n    }\n  }\n}\n\n/// Applies margin to the component with the increased touch target,\n/// to compensate for the touch target.\n@mixin margin(\n  $component-height,\n  $component-width: null,\n  $touch-target-height: $height,\n  $touch-target-width: $width,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  $vertical-margin-value: math.div($touch-target-height - $component-height, 2);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-top: $vertical-margin-value;\n    margin-bottom: $vertical-margin-value;\n  }\n\n  @if $component-width {\n    $horizontal-margin-value: math.div(\n      $touch-target-width - $component-width,\n      2\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      margin-right: $horizontal-margin-value;\n      margin-left: $horizontal-margin-value;\n    }\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use '@material/animation/animation';\n@use '@material/dom/dom';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/ripple/ripple';\n@use '@material/ripple/ripple-theme';\n@use '@material/touch-target/mixins' as touch-target-mixins;\n@use '@material/touch-target/variables' as touch-target-variables;\n@use './radio-theme';\n@use '@material/focus-ring/focus-ring';\n\n$ripple-target: radio-theme.$ripple-target;\n\n///\n/// Radio core styles.\n///\n@mixin core-styles($query: feature-targeting.all()) {\n  @include without-ripple($query);\n  @include ripple($query);\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-color: feature-targeting.create-target($query, color);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-radio {\n    @include feature-targeting.targets($feat-structure) {\n      display: inline-block;\n      position: relative;\n      flex: 0 0 auto;\n      box-sizing: content-box;\n      width: radio-theme.$icon-size;\n      height: radio-theme.$icon-size;\n      cursor: pointer;\n      /* @alternate */\n      will-change: opacity, transform, border-color, color;\n    }\n\n    // Container for radio circles and ripple.\n    &__background {\n      @include feature-targeting.targets($feat-structure) {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        width: radio-theme.$icon-size;\n        height: radio-theme.$icon-size;\n      }\n\n      &::before {\n        @include feature-targeting.targets($feat-structure) {\n          position: absolute;\n          transform: scale(0, 0);\n          border-radius: 50%;\n          opacity: 0;\n          pointer-events: none;\n          content: '';\n        }\n\n        @include feature-targeting.targets($feat-animation) {\n          transition: exit(opacity), exit(transform);\n        }\n      }\n    }\n\n    &__outer-circle {\n      @include feature-targeting.targets($feat-structure) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        border-width: 2px;\n        border-style: solid;\n        border-radius: 50%;\n      }\n\n      @include feature-targeting.targets($feat-animation) {\n        transition: exit(border-color);\n      }\n    }\n\n    &__inner-circle {\n      @include feature-targeting.targets($feat-structure) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        transform: scale(0, 0);\n        border-width: 10px;\n        border-style: solid;\n        border-radius: 50%;\n      }\n\n      @include feature-targeting.targets($feat-animation) {\n        transition: exit(transform), exit(border-color);\n      }\n    }\n\n    &__native-control {\n      @include feature-targeting.targets($feat-structure) {\n        position: absolute;\n        margin: 0;\n        padding: 0;\n        opacity: 0;\n        cursor: inherit;\n        z-index: 1;\n      }\n    }\n\n    &--touch {\n      @include touch-target-mixins.margin(\n        $component-height: radio-theme.$ripple-size,\n        $component-width: radio-theme.$ripple-size,\n        $query: $query\n      );\n      @include radio-theme.touch-target(\n        $size: touch-target-variables.$height,\n        $query: $query\n      );\n    }\n\n    @include ripple-theme.focus {\n      .mdc-radio__focus-ring {\n        @include focus-ring.focus-ring(\n          $container-outer-padding-vertical: 0,\n          $container-outer-padding-horizontal: 0,\n          $query: $query\n        );\n      }\n    }\n  }\n\n  .mdc-radio__native-control:checked,\n  .mdc-radio__native-control:disabled {\n    + .mdc-radio__background {\n      @include feature-targeting.targets($feat-animation) {\n        transition: enter(opacity), enter(transform);\n      }\n\n      .mdc-radio__outer-circle {\n        @include feature-targeting.targets($feat-animation) {\n          transition: enter(border-color);\n        }\n      }\n\n      .mdc-radio__inner-circle {\n        @include feature-targeting.targets($feat-animation) {\n          transition: enter(transform), enter(border-color);\n        }\n      }\n    }\n  }\n\n  .mdc-radio--disabled {\n    @include feature-targeting.targets($feat-structure) {\n      cursor: default;\n      pointer-events: none;\n    }\n  }\n\n  .mdc-radio__native-control:checked {\n    + .mdc-radio__background {\n      .mdc-radio__inner-circle {\n        @include feature-targeting.targets($feat-structure) {\n          transform: scale(0.5);\n        }\n\n        @include feature-targeting.targets($feat-animation) {\n          transition: enter(transform), enter(border-color);\n        }\n      }\n    }\n  }\n\n  .mdc-radio__native-control:disabled,\n  [aria-disabled='true'] .mdc-radio__native-control {\n    + .mdc-radio__background {\n      @include feature-targeting.targets($feat-structure) {\n        cursor: default;\n      }\n    }\n  }\n\n  .mdc-radio__native-control:focus {\n    + .mdc-radio__background::before {\n      @include feature-targeting.targets($feat-structure) {\n        transform: scale(1);\n        opacity: map.get(ripple-theme.$dark-ink-opacities, focus);\n      }\n\n      @include feature-targeting.targets($feat-animation) {\n        transition: enter(opacity), enter(transform);\n      }\n    }\n  }\n}\n\n// This API is intended for use by frameworks that may want to separate the ripple-related styles from the other\n// radio styles. It is recommended that most users use `mdc-radio-core-styles` instead.\n@mixin without-ripple($query: feature-targeting.all()) {\n  // postcss-bem-linter: define radio\n  @include touch-target-mixins.wrapper($query); // COPYBARA_COMMENT_THIS_LINE\n\n  .mdc-radio {\n    @include radio-theme.unchecked-stroke-color(\n      radio-theme.$unchecked-color,\n      $query: $query\n    );\n    @include radio-theme.checked-stroke-color(\n      radio-theme.$baseline-theme-color,\n      $query: $query\n    );\n    @include radio-theme.ink-color(\n      radio-theme.$baseline-theme-color,\n      $query: $query\n    );\n    @include radio-theme.disabled-unchecked-stroke-color(\n      radio-theme.$disabled-circle-color,\n      $query: $query\n    );\n    @include radio-theme.disabled-checked-stroke-color(\n      radio-theme.$disabled-circle-color,\n      $query: $query\n    );\n    @include radio-theme.disabled-ink-color(\n      radio-theme.$disabled-circle-color,\n      $query: $query\n    );\n    @include radio-theme.focus-indicator-color(\n      radio-theme.$baseline-theme-color,\n      $query: $query\n    );\n    @include radio-theme.density(radio-theme.$density-scale, $query: $query);\n\n    @include dom.forced-colors-mode {\n      &.mdc-radio--disabled {\n        @include radio-theme.disabled-unchecked-stroke-color(\n          GrayText,\n          $query: $query\n        );\n        @include radio-theme.disabled-checked-stroke-color(\n          GrayText,\n          $query: $query\n        );\n        @include radio-theme.disabled-ink-color(GrayText, $query: $query);\n      }\n    }\n  }\n\n  @include static-styles($query: $query);\n  // postcss-bem-linter: end\n}\n\n// This API is intended for use by frameworks that may want to separate the ripple-related styles from the other\n// radio styles. It is recommended that most users use `mdc-radio-core-styles` instead.\n@mixin ripple($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include ripple.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  .mdc-radio {\n    @include ripple.surface($query: $query, $ripple-target: $ripple-target);\n    @include ripple.radius-unbounded(\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n    @include ripple-theme.states(\n      $color: radio-theme.$baseline-theme-color,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n\n    &.mdc-ripple-upgraded,\n    &.mdc-ripple-upgraded--background-focused {\n      .mdc-radio__background::before {\n        @include feature-targeting.targets($feat-structure) {\n          content: none;\n        }\n      }\n    }\n  }\n\n  #{$ripple-target} {\n    @include ripple.target-common($query: $query);\n  }\n}\n\n@function enter($name) {\n  @return animation.enter($name, radio-theme.$transition-duration);\n}\n\n@function exit($name) {\n  @return animation.exit-temporary($name, radio-theme.$transition-duration);\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n@use './gss';\n\n/// When true, add an additional property/value declaration before declarations\n/// that use advanced features such as custom properties or CSS functions. This\n/// adds fallback support for older browsers such as IE11 that do not support\n/// these features at the cost of additional CSS. Set this variable to false to\n/// disable generating fallback declarations.\n$enable-fallback-declarations: true !default;\n\n/// Writes a CSS property/value declaration. This mixin is used throughout the\n/// theme package for consistency for dynamically setting CSS property values.\n///\n/// This mixin may optionally take a fallback value. For advanced features such\n/// as custom properties or CSS functions like min and max, a fallback value is\n/// recommended to support older browsers.\n///\n/// @param {String} $property - The CSS property of the declaration.\n/// @param {*} $value - The value of the CSS declaration. The value should be\n///     resolved by other theme functions first (i.e. custom property Maps and\n///     Material theme keys are not supported in this mixin). If the value is\n///     null, no declarations will be emitted.\n/// @param {*} $fallback - An optional fallback value for older browsers. If\n///     provided, a second property/value declaration will be added before the\n///     main property/value declaration.\n/// @param {Map} $gss - An optional Map of GSS annotations to add.\n/// @param {Bool} $important - If true, add `!important` to the declaration.\n@mixin declaration(\n  $property,\n  $value,\n  $fallback-value: null,\n  $gss: (),\n  $important: false\n) {\n  // Normally setting a null value to a property will not emit CSS, so mixins\n  // wouldn't need to check this. However, Sass will throw an error if the\n  // interpolated property is a custom property.\n  @if $value != null {\n    $important-rule: if($important, ' !important', '');\n\n    @if $fallback-value and $enable-fallback-declarations {\n      @include gss.annotate($gss);\n      #{$property}: #{$fallback-value} #{$important-rule};\n\n      // Add @alternate to annotations.\n      $gss: map.merge(\n        $gss,\n        (\n          alternate: true,\n        )\n      );\n    }\n\n    @include gss.annotate($gss);\n    #{$property}: #{$value}#{$important-rule};\n  }\n}\n\n/// Unpacks shorthand values for CSS properties (i.e. lists of 1-3 values).\n/// If a list of 4 values is given, it is returned as-is.\n///\n/// Examples:\n///\n/// unpack-value(4px) => 4px 4px 4px 4px\n/// unpack-value(4px 2px) => 4px 2px 4px 2px\n/// unpack-value(4px 2px 2px) => 4px 2px 2px 2px\n/// unpack-value(4px 2px 0 2px) => 4px 2px 0 2px\n///\n/// @param {Number | Map | List} $value - List of 1 to 4 value numbers.\n/// @return {List} a List of 4 value numbers.\n@function unpack-value($value) {\n  @if meta.type-of($value) == 'map' or list.length($value) == 1 {\n    @return $value $value $value $value;\n  } @else if list.length($value) == 4 {\n    @return $value;\n  } @else if list.length($value) == 3 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 3)\n      list.nth($value, 2);\n  } @else if list.length($value) == 2 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 1)\n      list.nth($value, 2);\n  }\n\n  @error \"Invalid CSS property value: '#{$value}' is more than 4 values\";\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use '@material/density/functions' as density-functions;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/theme';\n@use '@material/theme/keys';\n@use '@material/density/variables' as density-variables;\n@use '@material/theme/theme-color';\n@use '@material/ripple/ripple-theme';\n\n$ripple-size: 40px !default;\n$icon-size: 20px !default;\n$transition-duration: 120ms !default;\n$ripple-opacity: 0.14 !default;\n$baseline-theme-color: secondary !default;\n$unchecked-color: rgba(theme-color.prop-value(on-surface), 0.54) !default;\n$disabled-circle-color: rgba(theme-color.prop-value(on-surface), 0.38) !default;\n\n$minimum-size: 28px !default;\n$maximum-size: $ripple-size !default;\n$density-scale: density-variables.$default-scale !default;\n$density-config: (\n  size: (\n    minimum: $minimum-size,\n    default: $ripple-size,\n    maximum: $maximum-size,\n  ),\n) !default;\n\n$ripple-target: '.mdc-radio__ripple';\n$unselected-ripple-target: '.mdc-radio__native-control:enabled:not(:checked) ~ #{$ripple-target}';\n$custom-property-prefix: 'radio';\n\n// TODO(b/188417756): `icon-size` token key is not supported.\n$light-theme: (\n  disabled-selected-icon-color: theme-color.$on-surface,\n  disabled-selected-icon-opacity: 0.38,\n  disabled-unselected-icon-color: theme-color.$on-surface,\n  disabled-unselected-icon-opacity: 0.38,\n  selected-focus-icon-color: theme-color.$primary,\n  selected-focus-state-layer-color: theme-color.$primary,\n  selected-focus-state-layer-opacity: 0.12,\n  selected-hover-icon-color: theme-color.$primary,\n  selected-hover-state-layer-color: theme-color.$primary,\n  selected-hover-state-layer-opacity: 0.04,\n  selected-icon-color: theme-color.$primary,\n  selected-pressed-icon-color: theme-color.$primary,\n  selected-pressed-state-layer-color: theme-color.$primary,\n  selected-pressed-state-layer-opacity: 0.1,\n  state-layer-size: $ripple-size,\n  unselected-focus-icon-color: theme-color.$on-surface,\n  unselected-focus-state-layer-color: theme-color.$on-surface,\n  unselected-focus-state-layer-opacity: 0.12,\n  unselected-hover-icon-color: theme-color.$on-surface,\n  unselected-hover-state-layer-color: theme-color.$on-surface,\n  unselected-hover-state-layer-opacity: 0.04,\n  unselected-icon-color: theme-color.$on-surface,\n  unselected-pressed-icon-color: theme-color.$on-surface,\n  unselected-pressed-state-layer-color: theme-color.$on-surface,\n  unselected-pressed-state-layer-opacity: 0.1,\n);\n\n@mixin theme($theme) {\n  @include theme.validate-theme($light-theme, $theme);\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n}\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme-keys($light-theme, $theme);\n\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  @include _disabled-selected-icon-color(\n    map.get($theme, disabled-selected-icon-color)\n  );\n  @include _disabled-selected-icon-opacity(\n    map.get($theme, disabled-selected-icon-opacity)\n  );\n  @include _disabled-unselected-icon-color(\n    map.get($theme, disabled-unselected-icon-color)\n  );\n  @include _disabled-unselected-icon-opacity(\n    map.get($theme, disabled-unselected-icon-opacity)\n  );\n\n  // selected\n  @include ripple-theme.focus() {\n    @include _selected-icon-color(map.get($theme, selected-focus-icon-color));\n    @include _selected-state-layer-color(\n      map.get($theme, selected-focus-state-layer-color)\n    );\n    @include _selected-focus-state-layer-opacity(\n      map.get($theme, selected-focus-state-layer-opacity)\n    );\n  }\n  @include ripple-theme.hover() {\n    @include _selected-icon-color(map.get($theme, selected-hover-icon-color));\n    @include _selected-state-layer-color(\n      map.get($theme, selected-hover-state-layer-color)\n    );\n    @include _selected-hover-state-layer-opacity(\n      map.get($theme, selected-hover-state-layer-opacity)\n    );\n  }\n  @include _selected-icon-color(map.get($theme, selected-icon-color));\n  @include ripple-theme.active() {\n    @include _selected-icon-color(map.get($theme, selected-pressed-icon-color));\n    @include _selected-state-layer-color(\n      map.get($theme, selected-pressed-state-layer-color)\n    );\n    @include _selected-pressed-state-layer-opacity(\n      map.get($theme, selected-pressed-state-layer-opacity)\n    );\n  }\n\n  // unselected\n  @include ripple-theme.focus() {\n    @include _unselected-icon-color(\n      map.get($theme, unselected-focus-icon-color)\n    );\n    @include _unselected-state-layer-color(\n      map.get($theme, unselected-focus-state-layer-color)\n    );\n    @include _unselected-focus-state-layer-opacity(\n      map.get($theme, unselected-focus-state-layer-opacity)\n    );\n  }\n  @include ripple-theme.hover() {\n    @include _unselected-icon-color(\n      map.get($theme, unselected-hover-icon-color)\n    );\n    @include _unselected-state-layer-color(\n      map.get($theme, unselected-hover-state-layer-color)\n    );\n    @include _unselected-hover-state-layer-opacity(\n      map.get($theme, unselected-hover-state-layer-opacity)\n    );\n  }\n  @include _unselected-icon-color(map.get($theme, unselected-icon-color));\n  @include ripple-theme.active() {\n    @include _unselected-icon-color(\n      map.get($theme, unselected-pressed-icon-color)\n    );\n    @include _unselected-state-layer-color(\n      map.get($theme, unselected-pressed-state-layer-color)\n    );\n    @include _unselected-pressed-state-layer-opacity(\n      map.get($theme, unselected-pressed-state-layer-opacity)\n    );\n  }\n\n  @include ripple-size(map.get($theme, state-layer-size));\n  // Set touch target size same as ripple size.\n  @include touch-target(\n    $size: map.get($theme, state-layer-size),\n    $ripple-size: map.get($theme, state-layer-size)\n  );\n}\n\n@mixin _disabled-selected-icon-color($color) {\n  @include disabled-checked-stroke-color($color);\n  @include disabled-ink-color($color);\n}\n\n@mixin _disabled-selected-icon-opacity($opacity) {\n  @include _disabled-checked-stroke-opacity($opacity);\n  @include _disabled-ink-opacity($opacity);\n}\n\n@mixin _disabled-unselected-icon-color($color) {\n  @include disabled-unchecked-stroke-color($color);\n}\n\n@mixin _disabled-unselected-icon-opacity($opacity) {\n  @include _disabled-unchecked-stroke-opacity($opacity);\n}\n\n@mixin _selected-icon-color($color) {\n  @include checked-stroke-color($color);\n  @include ink-color($color);\n}\n\n@mixin _selected-state-layer-color($color) {\n  @include ripple-theme.states-base-color(\n    $color: $color,\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin _selected-hover-state-layer-opacity($opacity) {\n  @include ripple-theme.states-hover-opacity(\n    $opacity: $opacity,\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin _selected-focus-state-layer-opacity($opacity) {\n  @include ripple-theme.states-focus-opacity(\n    $opacity: $opacity,\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin _selected-pressed-state-layer-opacity($opacity) {\n  @include ripple-theme.states-press-opacity(\n    $opacity: $opacity,\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin _unselected-icon-color($color) {\n  @include unchecked-stroke-color($color);\n}\n\n@mixin _unselected-state-layer-color($color) {\n  @include ripple-theme.states-base-color(\n    $color: $color,\n    $ripple-target: $unselected-ripple-target\n  );\n}\n\n@mixin _unselected-hover-state-layer-opacity($opacity) {\n  @include ripple-theme.states-hover-opacity(\n    $opacity: $opacity,\n    $ripple-target: $unselected-ripple-target\n  );\n}\n\n@mixin _unselected-focus-state-layer-opacity($opacity) {\n  @include ripple-theme.states-focus-opacity(\n    $opacity: $opacity,\n    $ripple-target: $unselected-ripple-target\n  );\n}\n\n@mixin _unselected-pressed-state-layer-opacity($opacity) {\n  @include ripple-theme.states-press-opacity(\n    $opacity: $opacity,\n    $ripple-target: $unselected-ripple-target\n  );\n}\n\n///\n/// Sets the stroke color of an unchecked, enabled radio button.\n/// @param {Color} $color - The desired stroke color.\n///\n@mixin unchecked-stroke-color($color, $query: feature-targeting.all()) {\n  @include _if-enabled-unchecked {\n    @include _stroke-color($color, $query: $query);\n  }\n}\n\n///\n/// Sets the stroke color of a checked, enabled radio button.\n/// @param {Color} $color - The desired stroke color.\n///\n@mixin checked-stroke-color($color, $query: feature-targeting.all()) {\n  @include _if-enabled-checked {\n    @include _stroke-color($color, $query: $query);\n  }\n}\n\n///\n/// Sets the ink color of an enabled radio button.\n/// @param {Color} $color - The desired ink color.\n///\n@mixin ink-color($color, $query: feature-targeting.all()) {\n  @include _if-enabled {\n    @include _ink-color($color, $query: $query);\n  }\n}\n\n///\n/// Sets the stroke color of an unchecked, disabled radio button.\n/// @param {Color} $color - The desired stroke color.\n///\n@mixin disabled-unchecked-stroke-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  @include _if-disabled-unchecked {\n    @include _stroke-color($color, $query: $query);\n  }\n}\n\n@mixin _disabled-unchecked-stroke-opacity($opacity) {\n  @include _if-disabled-unchecked {\n    @include _stroke-opacity($opacity);\n  }\n}\n\n///\n/// Sets the stroke color of a checked, disabled radio button.\n/// @param {Color} $color - The desired stroke color.\n///\n@mixin disabled-checked-stroke-color($color, $query: feature-targeting.all()) {\n  @include if-disabled-checked_ {\n    @include _stroke-color($color, $query: $query);\n  }\n}\n\n@mixin _disabled-checked-stroke-opacity($opacity) {\n  @include if-disabled-checked_ {\n    @include _stroke-opacity($opacity);\n  }\n}\n\n///\n/// Sets the ink color of a disabled radio button.\n/// @param {Color} $color - The desired ink color\n///\n@mixin disabled-ink-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include _ink-color($color, $query: $query);\n  }\n}\n\n@mixin _disabled-ink-opacity($opacity) {\n  @include if-disabled_ {\n    @include _ink-opacity($opacity);\n  }\n}\n\n@mixin focus-indicator-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-radio__background::before {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(background-color, $color);\n    }\n  }\n}\n\n///\n/// Sets radio touch target size which can be more than the ripple size. Param `$ripple-size` is required for custom\n/// ripple size.\n///\n/// @param {Number} $size Size of touch target (Native input) in `px`.\n/// @param {Number} $ripple-size Size of ripple in `px`. Required only for custom ripple size.\n///\n@mixin touch-target(\n  $size: $ripple-size,\n  $ripple-size: $ripple-size,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $offset: 'calc((__ripple_size - __size) / 2)';\n  $replace: (\n    __ripple_size: $ripple-size,\n    __size: $size,\n  );\n\n  .mdc-radio__native-control {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property('top', $offset, $replace: $replace);\n      @include theme.property('right', $offset, $replace: $replace);\n      @include theme.property('left', $offset, $replace: $replace);\n      @include theme.property('width', $size);\n      @include theme.property('height', $size);\n    }\n  }\n}\n\n///\n/// Sets density scale for radio.\n///\n/// @param {Number | String} $density-scale - Density scale value for component. Supported density scale values\n///     `-3`, `-2`, `-1`, `0`.\n///\n@mixin density($density-scale, $query: feature-targeting.all()) {\n  $size: density-functions.prop-value(\n    $density-config: $density-config,\n    $density-scale: $density-scale,\n    $property-name: size,\n  );\n\n  @include ripple-size($size, $query: $query);\n  // Sets touch target size same as ripple size.\n  @include touch-target($size: $size, $ripple-size: $size, $query: $query);\n\n  @if $density-scale != 0 {\n    @include touch-target-reset_($query: $query);\n  }\n}\n\n///\n/// Sets radio ripple size.\n///\n/// @param {Number} $size - Ripple size in `px`.\n///\n@mixin ripple-size($size, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $replace: (\n    __size: $size,\n    __icon_size: $icon-size,\n  );\n\n  @include feature-targeting.targets($feat-structure) {\n    $padding: 'calc((__size - __icon_size) / 2)';\n\n    @include theme.property('padding', $padding, $replace: $replace);\n  }\n\n  .mdc-radio__background::before {\n    @include feature-targeting.targets($feat-structure) {\n      $padding-offset: 'calc(-1 * (__size - __icon_size) / 2)';\n\n      @include theme.property('top', $padding-offset, $replace: $replace);\n      @include theme.property('left', $padding-offset, $replace: $replace);\n      @include theme.property('width', $size);\n      @include theme.property('height', $size);\n    }\n  }\n}\n\n///\n/// Resets touch target-related styles. This is called from the density mixin to\n/// automatically remove the increased touch target, since dense components\n/// don't have the same default a11y requirements.\n/// @access private\n///\n@mixin touch-target-reset_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin: 0;\n  }\n}\n\n///\n/// Helps select the radio background only when its native control is in the\n/// enabled state.\n/// @access private\n///\n@mixin _if-enabled {\n  .mdc-radio__native-control:enabled + {\n    @content;\n  }\n}\n\n///\n/// Helps select the radio background only when its native control is in the\n/// enabled & unchecked state.\n/// @access private\n///\n@mixin _if-enabled-unchecked {\n  .mdc-radio__native-control:enabled:not(:checked) + {\n    @content;\n  }\n}\n\n///\n/// Helps select the radio background only when its native control is in the\n/// enabled & checked state.\n/// @access private\n///\n@mixin _if-enabled-checked {\n  .mdc-radio__native-control:enabled:checked + {\n    @content;\n  }\n}\n\n///\n/// Helps select the radio background only when its native control is in the\n/// disabled state.\n/// @access private\n///\n@mixin if-disabled_ {\n  [aria-disabled='true'] .mdc-radio__native-control,\n  .mdc-radio__native-control:disabled {\n    + {\n      @content;\n    }\n  }\n}\n\n///\n/// Helps select the radio background only when its native control is in the\n/// disabled & unchecked state.\n/// @access private\n///\n@mixin _if-disabled-unchecked {\n  [aria-disabled='true'] .mdc-radio__native-control,\n  .mdc-radio__native-control:disabled {\n    &:not(:checked) + {\n      @content;\n    }\n  }\n}\n\n///\n/// Helps select the radio background only when its native control is in the\n/// disabled & checked state.\n/// @access private\n///\n@mixin if-disabled-checked_ {\n  [aria-disabled='true'] .mdc-radio__native-control,\n  .mdc-radio__native-control:disabled {\n    &:checked + {\n      @content;\n    }\n  }\n}\n\n///\n/// Sets the ink color for radio. This is wrapped in a mixin\n/// that qualifies state such as `_if-enabled`\n/// @access private\n///\n@mixin _ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-radio__background .mdc-radio__inner-circle {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(border-color, $color);\n    }\n  }\n}\n\n@mixin _ink-opacity($opacity) {\n  .mdc-radio__background .mdc-radio__inner-circle {\n    @include theme.property(opacity, $opacity);\n  }\n}\n\n///\n/// Sets the stroke color for radio. This is wrapped in a mixin\n/// that qualifies state such as `_if-enabled`\n/// @access private\n///\n@mixin _stroke-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-radio__background .mdc-radio__outer-circle {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(border-color, $color);\n    }\n  }\n}\n\n@mixin _stroke-opacity($opacity) {\n  .mdc-radio__background .mdc-radio__outer-circle {\n    @include theme.property(opacity, $opacity);\n  }\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n\n/// Adds optional GSS annotation comments. Useful for theme mixins where one or\n/// more properties are set indirectly.\n///\n/// Annotations may be provided as a Map of annotations or as named arguments.\n///\n/// @example - scss\n///   @include annotate((noflip: true));\n///   left: 0;\n///\n/// @example - scss\n///   @include annotate($noflip: true);\n///   left: 0;\n///\n/// @example - css\n///   /* @noflip */ /*rtl:ignore*/\n///   left: 0;\n///\n/// @param {Map} $annotations - Map of annotations. Values must be set to `true`\n///     for an annotation to be added.\n@mixin annotate($annotations...) {\n  $keywords: meta.keywords($annotations);\n  @if list.length($annotations) > 0 {\n    $annotations: list.nth($annotations, 1);\n  } @else {\n    $annotations: $keywords;\n  }\n\n  @if (map.get($annotations, alternate) == true) {\n    /* @alternate */\n  }\n\n  // noflip must be the last tag right before the property\n  @if (map.get($annotations, noflip) == true) {\n    /* @noflip */ /*rtl:ignore*/\n  }\n}\n","// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use '@material/feature-targeting/feature-targeting';\n///\n/// Emits necessary layout styles to set a transparent border around an element\n/// without interfering with the rest of its component layout. The border is\n/// only visible in high-contrast mode. The target element should be a child of\n/// a relatively positioned top-level element (i.e. a ::before pseudo-element).\n///\n/// @param {number} $border-width - The width of the transparent border.\n/// @param {string} $border-style - The style of the transparent border.\n///\n@mixin transparent-border(\n  $border-width: 1px,\n  $border-style: solid,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: $border-width $border-style transparent;\n    border-radius: inherit;\n    content: '';\n    pointer-events: none;\n  }\n\n  // Used to satisfy Firefox v94 which does not render transparent borders in HCM (b/206440838).\n  @include forced-colors-mode($exclude-ie11: true) {\n    @include feature-targeting.targets($feat-structure) {\n      border-color: CanvasText;\n    }\n  }\n}\n\n///\n/// Visually hides text content for accessibility. This text should only be\n/// visible to screen reader users.\n/// See https://a11yproject.com/posts/how-to-hide-content/\n///\n@mixin visually-hidden($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap; /* added line */\n    width: 1px;\n  }\n}\n\n/// Selects for IE11 support.\n///\n/// @content styles to emit for IE11 support\n@mixin ie11-support {\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    @content;\n  }\n}\n\n/// Selects for `forced-colors` high contrast mode.\n///\n/// While in `forced-colors` mode, only system colors should be used.\n///\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors\n/// @content styles to emit in `forced-colors` mode\n@mixin forced-colors-mode($exclude-ie11: false) {\n  @if $exclude-ie11 {\n    @media screen and (forced-colors: active) {\n      @content;\n    }\n  } @else {\n    @media screen and (forced-colors: active), (-ms-high-contrast: active) {\n      @content;\n    }\n  }\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/dom/dom';\n\n$ring-radius-default: 8px !default;\n$inner-ring-width-default: 2px !default;\n$inner-ring-color-default: transparent !default;\n$outer-ring-width-default: 2px !default;\n$outer-ring-color-default: transparent !default;\n$container-outer-padding-default: 2px !default;\n\n/// Styles applied to the component's inner focus ring element.\n///\n/// @param $ring-radius [$ring-radius-default] - Focus ring radius.\n/// @param $inner-ring-width [$inner-ring-width-default] - Inner focus ring width.\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n/// @param $outer-ring-color [$outer-ring-color-default] - Outer focus ring color.\n/// @param $container-outer-padding [$container-outer-padding-default] - The\n///     distance between the focus ring and the container.\n@mixin focus-ring(\n  $query: feature-targeting.all(),\n  $ring-radius: $ring-radius-default,\n  $inner-ring-width: $inner-ring-width-default,\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-width: $outer-ring-width-default,\n  $outer-ring-color: $outer-ring-color-default,\n  $container-outer-padding-vertical: $container-outer-padding-default,\n  $container-outer-padding-horizontal: $container-outer-padding-default\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $container-size-vertical: 100%;\n  @if $container-outer-padding-vertical != 0 {\n    $container-size-vertical: calc(\n      100% + #{$container-outer-padding-vertical * 2}\n    );\n  }\n  $container-size-horizontal: 100%;\n  @if $container-outer-padding-horizontal != 0 {\n    $container-size-horizontal: calc(\n      100% + #{$container-outer-padding-horizontal * 2}\n    );\n  }\n  $outer-ring-size: 100%;\n  @if $outer-ring-width > 0 {\n    $outer-ring-size: calc(100% + #{$outer-ring-width * 2});\n  }\n  @include feature-targeting.targets($feat-structure) {\n    pointer-events: none;\n    border: $inner-ring-width solid $inner-ring-color;\n    border-radius: $ring-radius - $outer-ring-width;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    @include rtl.ignore-next-line();\n    left: 50%;\n    @include rtl.ignore-next-line();\n    transform: translate(-50%, -50%);\n    height: $container-size-vertical;\n    width: $container-size-horizontal;\n\n    @include dom.forced-colors-mode($exclude-ie11: true) {\n      border-color: CanvasText;\n    }\n\n    &::after {\n      content: '';\n      border: $outer-ring-width solid $outer-ring-color;\n      border-radius: $ring-radius;\n      display: block;\n      position: absolute;\n      top: 50%;\n      @include rtl.ignore-next-line();\n      left: 50%;\n      @include rtl.ignore-next-line();\n      transform: translate(-50%, -50%);\n      height: $outer-ring-size;\n      width: $outer-ring-size;\n\n      @include dom.forced-colors-mode($exclude-ie11: true) {\n        border-color: CanvasText;\n      }\n    }\n  }\n}\n/// Customizes the color of the button focus ring.\n///\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n@mixin focus-ring-color(\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-color: $outer-ring-color-default\n) {\n  border-color: $inner-ring-color;\n\n  &::after {\n    border-color: $outer-ring-color;\n  }\n}\n\n/// Customizes the border radius of the button focus ring.\n///\n/// @param {Number} $ring-radius - The border radius of the focus ring.\n/// @param {Number} $outer-ring-width [$outer-ring-width] - Width of the outer\n///     ring, required to compute the radius for the inner ring.\n@mixin focus-ring-radius(\n  $ring-radius,\n  $outer-ring-width: $outer-ring-width-default,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    border-radius: $ring-radius - $outer-ring-width;\n\n    &::after {\n      border-radius: $ring-radius;\n    }\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/theme/custom-properties';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use './ripple-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include static-styles($query: $query);\n\n  .mdc-ripple-surface {\n    @include ripple-theme.states($query: $query);\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-ripple-surface {\n    @include surface($query: $query);\n    @include radius-bounded($query: $query);\n    @include surface-styles($query: $query);\n  }\n\n  .mdc-ripple-surface[data-mdc-ripple-is-unbounded],\n  .mdc-ripple-upgraded--unbounded {\n    @include radius-unbounded($query: $query);\n    @include unbounded-styles($query: $query);\n  }\n}\n\n/// Sets all states (including hover, focus, press, activated and selected) with\n/// given color as base color.\n///\n/// This mixin is for internal use only. Use `ripple-theme.states($color)` mixin\n/// to set interactive states (hover, focus & press) color.\n///\n/// @param {Color|String} $color - Target base color. Can be valid CSS color or\n///     a color string literal (i.e., `primary`, `secondary`, etc).\n@mixin states-for-color($color, $query: feature-targeting.all()) {\n  @include ripple-theme.states($color, $query: $query);\n  @include ripple-theme.states-activated($color, $query: $query);\n  @include ripple-theme.states-selected($color, $query: $query);\n}\n\n@mixin surface-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: relative;\n    outline: none;\n    overflow: hidden;\n  }\n}\n\n@mixin unbounded-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    overflow: visible;\n  }\n}\n\n@mixin common($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // Ensure that styles needed by any component using MDC Ripple are emitted, but only once.\n  // (Every component using MDC Ripple imports these mixins, but doesn't necessarily import\n  // mdc-ripple.scss.)\n  @include feature-targeting.targets($feat-animation) {\n    @include base-mixins.emit-once('mdc-ripple/common/animation') {\n      @include keyframes_;\n    }\n  }\n}\n\n@mixin surface(\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $include-will-change: true // TODO(b/151931961): Remove once resolved\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    // TODO(b/151931961): Remove the following block once resolved\n    @if $include-will-change {\n      will-change: transform, opacity;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: '';\n    }\n  }\n\n  #{$ripple-target}::before {\n    @include feature-targeting.targets($feat-animation) {\n      // Also transition background-color to avoid unnatural color flashes when toggling activated/selected state\n      transition: opacity ripple-theme.$states-wash-duration linear,\n        background-color ripple-theme.$states-wash-duration linear;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that the ripple wash for hover/focus states is displayed on top of positioned child elements\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 1)\n      );\n    }\n  }\n\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 0)\n      );\n    }\n  }\n\n  // Common styles for upgraded surfaces (some of these depend on custom properties set via JS or other mixins)\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before {\n      @include feature-targeting.targets($feat-structure) {\n        transform: scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n        transform: scale(0);\n        transform-origin: center center;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--unbounded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: var(--mdc-ripple-top, 0);\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, 0);\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-activation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-radius-in ripple-theme.$translate-duration\n            forwards,\n          mdc-ripple-fg-opacity-in ripple-theme.$fade-in-duration forwards;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-deactivation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-opacity-out ripple-theme.$fade-out-duration;\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        // Retain transform from mdc-ripple-fg-radius-in activation\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n          scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n  }\n}\n\n@mixin radius-bounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{$radius});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{$radius});\n      width: $radius * 2;\n      height: $radius * 2;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n@mixin radius-unbounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{math.div($radius, 2)});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{math.div($radius, 2)});\n      width: $radius;\n      height: $radius;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        top: var(--mdc-ripple-top, calc(50% - #{math.div($radius, 2)}));\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, calc(50% - #{math.div($radius, 2)}));\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n// Common styles for a ripple target element.\n// Used for components which have an inner ripple target element.\n@mixin target-common($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    // Necessary for clicks on other inner elements (e.g. close icon in chip)\n    // to go through.\n    pointer-events: none;\n  }\n}\n\n@mixin keyframes_ {\n  @keyframes mdc-ripple-fg-radius-in {\n    from {\n      animation-timing-function: variables2.$standard-curve-timing-function;\n      // NOTE: For these keyframes, we do not need custom property fallbacks because they are only\n      // used in conjunction with `.mdc-ripple-upgraded`. Since MDCRippleFoundation checks to ensure\n      // that custom properties are supported within the browser before adding this class, we can\n      // safely use them without a fallback.\n      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    }\n\n    to {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n        scale(var(--mdc-ripple-fg-scale, 1));\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-in {\n    from {\n      animation-timing-function: linear;\n      opacity: 0;\n    }\n\n    to {\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-out {\n    from {\n      animation-timing-function: linear;\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n$deceleration-curve-timing-function: cubic-bezier(0, 0, 0.2, 1) !default;\n$standard-curve-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;\n$acceleration-curve-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;\n$sharp-curve-timing-function: cubic-bezier(0.4, 0, 0.6, 1) !default;\n\n@function enter($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $deceleration-curve-timing-function;\n}\n\n@function exit-permanent($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $acceleration-curve-timing-function;\n}\n\n@function exit-temporary($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $sharp-curve-timing-function;\n}\n\n@function standard($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $standard-curve-timing-function;\n}\n\n@function linear($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay linear;\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/css';\n@use '@material/theme/custom-properties';\n@use '@material/theme/theme';\n@use '@material/theme/keys';\n@use '@material/theme/shadow-dom';\n@use '@material/theme/theme-color';\n\n$custom-property-prefix: 'ripple';\n\n$fade-in-duration: 75ms !default;\n$fade-out-duration: 150ms !default;\n$translate-duration: 225ms !default;\n$states-wash-duration: 15ms !default;\n\n// Notes on states:\n// * focus takes precedence over hover (i.e. if an element is both focused and hovered, only focus value applies)\n// * press state applies to a separate pseudo-element, so it has an additive effect on top of other states\n// * selected/activated are applied additively to hover/focus via calculations at preprocessing time\n\n$dark-ink-opacities: (\n  hover: 0.04,\n  focus: 0.12,\n  press: 0.12,\n  selected: 0.08,\n  activated: 0.12,\n) !default;\n\n$light-ink-opacities: (\n  hover: 0.08,\n  focus: 0.24,\n  press: 0.24,\n  selected: 0.16,\n  activated: 0.24,\n) !default;\n\n// Legacy\n\n$pressed-dark-ink-opacity: 0.16 !default;\n$pressed-light-ink-opacity: 0.32 !default;\n\n// State selector variables used for state selector mixins below.\n$_hover-selector: '&:hover';\n$_focus-selector: '&.mdc-ripple-upgraded--background-focused, &:not(.mdc-ripple-upgraded):focus';\n$_active-selector: '&:not(:disabled):active';\n\n$light-theme: (\n  focus-state-layer-color: theme-color.$on-surface,\n  focus-state-layer-opacity: map.get($dark-ink-opacities, focus),\n  hover-state-layer-color: theme-color.$on-surface,\n  hover-state-layer-opacity: map.get($dark-ink-opacities, hover),\n  pressed-state-layer-color: theme-color.$on-surface,\n  pressed-state-layer-opacity: map.get($dark-ink-opacities, press),\n);\n\n@mixin theme($theme) {\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  @if shadow-dom.$css-selector-fallback-declarations {\n    .mdc-ripple-surface {\n      @include theme-styles($theme);\n    }\n  }\n}\n\n$_ripple-theme: (\n  hover-state-layer-color: null,\n  focus-state-layer-color: null,\n  pressed-state-layer-color: null,\n  hover-state-layer-opacity: null,\n  focus-state-layer-opacity: null,\n  pressed-state-layer-opacity: null,\n);\n\n@mixin theme-styles($theme, $ripple-target: '&') {\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  // TODO(b/191298796): Support states layer color for every interactive states.\n  // Use only hover state layer color, ignoring focus and pressed color.\n  @include internal-theme-styles($theme, $ripple-target);\n}\n\n@mixin internal-theme-styles($theme, $ripple-target: '&') {\n  @include theme.validate-theme-keys($_ripple-theme, $theme);\n\n  @include states-base-color(\n    map.get($theme, hover-state-layer-color),\n    $ripple-target: $ripple-target\n  );\n  @include states-hover-opacity(\n    map.get($theme, hover-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-focus-opacity(\n    map.get($theme, focus-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-press-opacity(\n    map.get($theme, pressed-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin states-base-color(\n  $color,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @if not custom-properties.is-custom-prop($color) {\n      $color: custom-properties.create(\n        ripple-color,\n        theme-color.get-custom-property($color)\n      );\n    }\n\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(background-color, $color);\n      }\n    }\n  }\n}\n\n///\n/// Customizes ripple opacities in `hover`, `focus`, or `press` states\n/// @param {map} $opacity-map - map specifying custom opacity of zero or more states\n/// @param {bool} $has-nested-focusable-element - whether the component contains a focusable element in the root\n/// @param {string} $ripple-target - the optional selector for the ripple element\n///\n@mixin states-opacities(\n  $opacity-map: (),\n  $has-nested-focusable-element: false,\n  $ripple-target: '&',\n  $query: feature-targeting.all()\n) {\n  // Ensure sufficient specificity to override base state opacities\n  @if map.get($opacity-map, hover) {\n    @include states-hover-opacity(\n      map.get($opacity-map, hover),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, focus) {\n    @include states-focus-opacity(\n      map.get($opacity-map, focus),\n      $ripple-target: $ripple-target,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, press) {\n    @include states-press-opacity(\n      map.get($opacity-map, press),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n}\n\n@mixin states-hover-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity and not custom-properties.is-custom-prop($opacity) {\n    $opacity: custom-properties.create(ripple-hover-opacity, $opacity);\n  }\n\n  // Background wash styles, for both CSS-only and upgraded stateful surfaces\n  &:hover,\n  &.mdc-ripple-surface--hover {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(opacity, $opacity);\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity(\n  $opacity,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  // Focus overrides hover by reusing the ::before pseudo-element.\n  // :focus-within generally works on non-MS browsers and matches when a *child* of the element has focus.\n  // It is useful for cases where a component has a focusable element within the root node, e.g. text field,\n  // but undesirable in general in case of nested stateful components.\n  // We use a modifier class for JS-enabled surfaces to support all use cases in all browsers.\n  @if $has-nested-focusable-element {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    &.mdc-ripple-upgraded:focus-within,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus,\n    &:not(.mdc-ripple-upgraded):focus-within {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  } @else {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity-properties_($opacity, $query) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-focus-opacity, $opacity);\n    }\n\n    // Note that this duration is only effective on focus, not blur\n    @include feature-targeting.targets($feat-animation) {\n      transition-duration: 75ms;\n    }\n\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n@mixin states-press-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  // Styles for non-upgraded (CSS-only) stateful surfaces\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-press-opacity, $opacity);\n    }\n\n    &:not(.mdc-ripple-upgraded) {\n      // Apply press additively by using the ::after pseudo-element\n      #{$ripple-target}::after {\n        @include feature-targeting.targets($feat-animation) {\n          transition: opacity $fade-out-duration linear;\n        }\n      }\n\n      &:active {\n        #{$ripple-target}::after {\n          @include feature-targeting.targets($feat-animation) {\n            transition-duration: $fade-in-duration;\n          }\n\n          // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n          @include feature-targeting.targets($feat-color) {\n            @include theme.property(opacity, $opacity);\n          }\n        }\n      }\n    }\n\n    &.mdc-ripple-upgraded {\n      @include feature-targeting.targets($feat-color) {\n        // Upgraded ripple should always emit custom property, regardless of\n        // configuration, since ripple itself feature detects custom property\n        // support at runtime.\n        @include custom-properties.configure($emit-custom-properties: true) {\n          @include theme.property(\n            custom-properties.create(ripple-fg-opacity, $opacity)\n          );\n        }\n      }\n    }\n  }\n}\n\n// Simple mixin for base states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states(\n  $color: theme-color.prop-value(on-surface),\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include states-interactions_(\n    $color: $color,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $query: $query,\n    $ripple-target: $ripple-target,\n    $opacity-map: $opacity-map\n  );\n}\n\n// Simple mixin for activated states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-activated(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $activated-opacity: states-opacity($color, activated);\n\n  &--activated {\n    // Stylelint seems to think that '&' qualifies as a type selector here?\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-activated-opacity,\n            $activated-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $activated-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n// Simple mixin for selected states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-selected(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $selected-opacity: states-opacity($color, selected);\n\n  &--selected {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-selected-opacity,\n            $selected-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $selected-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n@mixin states-interactions_(\n  $color,\n  $has-nested-focusable-element,\n  $opacity-modifier: 0,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include target-selector($ripple-target) {\n    @include states-base-color($color, $query);\n  }\n\n  @if $opacity-map == null {\n    $opacity-map: (\n      hover: states-opacity($color, hover) + $opacity-modifier,\n      focus: states-opacity($color, focus) + $opacity-modifier,\n      press: states-opacity($color, press) + $opacity-modifier,\n    );\n  }\n\n  @include states-opacities(\n    $opacity-map,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $ripple-target: $ripple-target,\n    $query: $query\n  );\n}\n\n// Wraps content in the `ripple-target` selector if it exists.\n@mixin target-selector($ripple-target: '&') {\n  @if $ripple-target == '&' {\n    @content;\n  } @else {\n    #{$ripple-target} {\n      @content;\n    }\n  }\n}\n\n/// Selector for hover, active and focus states.\n@mixin states-selector() {\n  #{$_hover-selector},\n  #{$_focus-selector},\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n@mixin hover() {\n  #{$_hover-selector} {\n    @content;\n  }\n}\n\n// Selector for focus state. Using ':not(.mdc-ripple-upgraded)' to continue\n// applying focus styles on JS-disabled components, and control focus\n// on JS-enabled components with '.mdc-ripple-upgraded--background-focused'.\n@mixin focus() {\n  #{$_focus-selector} {\n    @content;\n  }\n}\n\n// Selector for active state. Using `:active:active` to override focus styles.\n@mixin pressed() {\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n// @deprecated Use `pressed()` mixin - renamed for consistency.\n@mixin active() {\n  @include pressed() {\n    @content;\n  }\n}\n\n/// Keep the ripple (State overlay) behind the content.\n@mixin behind-content(\n  $ripple-target,\n  $content-root-selector: '&',\n  $query: feature-targeting.all()\n) {\n  // Needed for IE11. Without this, IE11 renders the state layer completely\n  // underneath the container, making it invisible.\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  #{$content-root-selector} {\n    @include feature-targeting.targets($feat-structure) {\n      z-index: 0;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, -1)\n      );\n    }\n  }\n}\n\n@function states-opacity($color, $state) {\n  $color-value: theme-color.prop-value($color);\n  $opacity-map: if(\n    theme-color.tone($color-value) == 'light',\n    $light-ink-opacities,\n    $dark-ink-opacities\n  );\n\n  @if not map.has-key($opacity-map, $state) {\n    @error \"Invalid state: '#{$state}'. Choose one of: #{map.keys($opacity-map)}\";\n  }\n\n  @return map.get($opacity-map, $state);\n}\n\n@mixin states-background-selector($ripple-target) {\n  #{$ripple-target}::before {\n    @content;\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/rtl/rtl';\n@use '@material/theme/theme-color';\n@use '@material/theme/theme';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/animation/variables' as animation-variables;\n@use '@material/typography/typography';\n@use './variables';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // postcss-bem-linter: define floating-label\n  .mdc-floating-label {\n    @include typography.typography(\n      subtitle1,\n      $exclude-props: (line-height),\n      $query: $query\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      @include rtl.ignore-next-line();\n      left: 0;\n      @include rtl.ignore-next-line();\n      -webkit-transform-origin: left top;\n      @include rtl.ignore-next-line();\n      transform-origin: left top;\n      line-height: 1.15rem;\n      text-align: left;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      cursor: text;\n      overflow: hidden;\n\n      /* @alternate */\n      // Force the label into its own layer to prevent visible layer promotion adjustments\n      // when the ripple is activated behind it.\n      will-change: transform;\n\n      @include rtl.rtl {\n        @include rtl.ignore-next-line();\n        right: 0;\n        @include rtl.ignore-next-line();\n        left: auto;\n        @include rtl.ignore-next-line();\n        -webkit-transform-origin: right top;\n        @include rtl.ignore-next-line();\n        transform-origin: right top;\n        @include rtl.ignore-next-line();\n        text-align: right;\n      }\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      transition: transform variables.$transition-duration\n          animation-variables.$standard-curve-timing-function,\n        color variables.$transition-duration\n          animation-variables.$standard-curve-timing-function;\n    }\n  }\n\n  .mdc-floating-label--float-above {\n    @include feature-targeting.targets($feat-structure) {\n      cursor: auto;\n    }\n  }\n\n  .mdc-floating-label--required {\n    &::after {\n      @include _required-content($query);\n    }\n\n    @include rtl.rtl {\n      &::after {\n        @include _required-content-rtl($query);\n      }\n    }\n  }\n\n  @at-root {\n    @include float-position(variables.$position-y, $query: $query);\n    @include shake-animation(standard, $query: $query);\n  }\n\n  @include shake-keyframes(standard, variables.$position-y, $query: $query);\n}\n\n@mixin ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(color, $color);\n  }\n}\n\n// Used for textarea in case of scrolling\n@mixin fill-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(background-color, $color);\n  }\n}\n\n@mixin shake-keyframes(\n  $modifier,\n  $positionY,\n  $positionX: 0%,\n  $scale: variables.$float-scale,\n  $query: feature-targeting.all()\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  @include feature-targeting.targets($feat-animation) {\n    @keyframes mdc-floating-label-shake-float-above-#{$modifier} {\n      0% {\n        @include rtl.ignore-next-line();\n        transform: translateX(calc(0 - #{$positionX}))\n          translateY(-#{$positionY}) scale(#{$scale});\n      }\n\n      33% {\n        animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n        @include rtl.ignore-next-line();\n        transform: translateX(calc(4% - #{$positionX}))\n          translateY(-#{$positionY}) scale(#{$scale});\n      }\n\n      66% {\n        animation-timing-function: cubic-bezier(\n          0.302435,\n          0.381352,\n          0.55,\n          0.956352\n        );\n        @include rtl.ignore-next-line();\n        transform: translateX(calc(-4% - #{$positionX}))\n          translateY(-#{$positionY}) scale(#{$scale});\n      }\n\n      100% {\n        @include rtl.ignore-next-line();\n        transform: translateX(calc(0 - #{$positionX}))\n          translateY(-#{$positionY}) scale(#{$scale});\n      }\n    }\n  }\n}\n\n@mixin float-position(\n  $positionY,\n  $positionX: 0%,\n  $scale: variables.$float-scale,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-floating-label--float-above {\n    @include feature-targeting.targets($feat-structure) {\n      @if $positionX > 0 or $positionX < 0 {\n        @include rtl.ignore-next-line();\n        transform: translateY(-1 * $positionY)\n          translateX(-1 * $positionX)\n          scale($scale);\n\n        @include rtl.rtl {\n          @include rtl.ignore-next-line();\n          transform: translateY(-1 * $positionY) translateX($positionX)\n            scale($scale);\n        }\n      } @else {\n        transform: translateY(-1 * $positionY) scale($scale);\n      }\n    }\n  }\n}\n\n@mixin shake-animation($modifier, $query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  .mdc-floating-label--shake {\n    @include feature-targeting.targets($feat-animation) {\n      animation: mdc-floating-label-shake-float-above-#{$modifier} 250ms 1;\n    }\n  }\n}\n\n@mixin max-width($max-width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    max-width: $max-width;\n  }\n}\n\n///\n/// Sets the CSS transition for the floating animation.\n///\n/// @param {Number} $duration-ms - Duration (in ms) of the animation.\n/// @param {String} $timing-function - Optionally overrides the default animation timing function.\n///\n@mixin float-transition(\n  $duration-ms,\n  $timing-function: animation-variables.$standard-curve-timing-function,\n  $query: feature-targeting.all()\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: color $duration-ms $timing-function,\n      transform $duration-ms $timing-function;\n  }\n}\n\n@mixin _required-content($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.ignore-next-line();\n    margin-left: 1px;\n    @include rtl.ignore-next-line();\n    margin-right: 0px;\n    content: '*';\n  }\n}\n\n// Need to specify LTR/RTL manually since rtl mixins will add ::after[dir=rtl]\n// selector and that breaks some browsers\n@mixin _required-content-rtl($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.ignore-next-line();\n    margin-left: 0;\n    @include rtl.ignore-next-line();\n    margin-right: 1px;\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:string';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/custom-properties';\n@use '@material/theme/keys';\n@use '@material/theme/theme';\n\n/// @deprecated Avoid calling this function directly. Instead, configure the\n/// `$styles-<style>` variable Maps.\n@function set-styles_($base-styles, $scale-styles, $override-styles) {\n  $options: (\n    custom-property-prefix: typography,\n  );\n\n  $base-styles: keys.set-values($base-styles, $options: $options);\n\n  @each $style, $style-props in $scale-styles {\n    @each $base-key in map.keys($base-styles) {\n      // Ignore the return result, it's not needed\n      $unused: keys.add-link(keys.combine($style, $base-key), $base-key);\n    }\n\n    // Merge base properties for all styles.\n    $style-props: map.merge($base-styles, $style-props);\n\n    // Merge overrides onto each style.\n    $style-props: map.merge($style-props, map.get($override-styles, $style));\n\n    // Register keys for this style\n    @each $property, $value in $style-props {\n      $unused: keys.set-value(\n        keys.combine($style, $property),\n        $value,\n        $options: $options\n      );\n    }\n\n    // Override original styles with new styles.\n    $scale-styles: map.merge($scale-styles, (#{$style}: $style-props));\n  }\n\n  @return $scale-styles;\n}\n\n@function get-letter-spacing_($tracking, $font-size) {\n  @return math.div($tracking, $font-size * 16) * 1em;\n}\n\n@function px-to-rem($px) {\n  @if custom-properties.is-custom-prop($px) {\n    @return custom-properties.set-fallback(\n      $px,\n      _px-to-rem(custom-properties.get-fallback($px))\n    );\n  }\n  @return _px-to-rem($px);\n}\n\n@function _px-to-rem($px) {\n  @if $px == null {\n    @return null;\n  }\n  @return math.div($px, 16px) * 1rem;\n}\n\n$font-family: string.unquote('Roboto, sans-serif') !default;\n\n// Override styles\n$styles-headline1: () !default;\n$styles-headline2: () !default;\n$styles-headline3: () !default;\n$styles-headline4: () !default;\n$styles-headline5: () !default;\n$styles-headline6: () !default;\n$styles-subtitle1: () !default;\n$styles-subtitle2: () !default;\n$styles-body1: () !default;\n$styles-body2: () !default;\n$styles-caption: () !default;\n$styles-button: () !default;\n$styles-overline: () !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead, or $font-family to set the base font family.\n$base: (\n  font-family: $font-family,\n) !default;\n\n$font-weight-values: (\n  thin: 100,\n  light: 300,\n  regular: 400,\n  medium: 500,\n  bold: 700,\n  black: 900,\n) !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead.\n$styles: set-styles_(\n  $base,\n  (\n    headline1: (\n      font-size: px-to-rem(96px),\n      line-height: px-to-rem(96px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-1.5, 6),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline2: (\n      font-size: px-to-rem(60px),\n      line-height: px-to-rem(60px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-0.5, 3.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline3: (\n      font-size: px-to-rem(48px),\n      line-height: px-to-rem(50px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline4: (\n      font-size: px-to-rem(34px),\n      line-height: px-to-rem(40px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 2.125),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline5: (\n      font-size: px-to-rem(24px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline6: (\n      font-size: px-to-rem(20px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.25, 1.25),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(28px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.15, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(22px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.1, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(24px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.5, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    caption: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.4, 0.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    button: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(36px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(1.25, 0.875),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n    overline: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(2, 0.75),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n  ),\n  (\n    headline1: $styles-headline1,\n    headline2: $styles-headline2,\n    headline3: $styles-headline3,\n    headline4: $styles-headline4,\n    headline5: $styles-headline5,\n    headline6: $styles-headline6,\n    subtitle1: $styles-subtitle1,\n    subtitle2: $styles-subtitle2,\n    body1: $styles-body1,\n    body2: $styles-body2,\n    caption: $styles-caption,\n    button: $styles-button,\n    overline: $styles-overline,\n  )\n) !default;\n\n// A copy of the styles Map that is used to detect compile-time changes for\n// Angular support.\n$_styles-copy: $styles;\n\n@function is-typography-style($style) {\n  @return map.has-key($styles, $style);\n}\n\n@function get-typography-styles() {\n  @return map.keys($styles);\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  .mdc-typography {\n    @include base($query: $query);\n  }\n\n  @each $style in get-typography-styles() {\n    .mdc-typography--#{$style} {\n      @include typography($style, $query: $query);\n    }\n  }\n}\n\n@mixin base($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @include theme.property(font-family, font-family);\n  }\n}\n\n@mixin typography($style, $query: feature-targeting.all(), $exclude-props: ()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @if not is-typography-style($style) {\n    @error \"Invalid style specified! #{$style} doesn't exist. Choose one of #{get-typography-styles()}\";\n  }\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @each $key in keys.get-keys($style) {\n      // <style>-<property>: headline1-font-size\n      // Slice the string past the first key separator to retrieve the\n      // property name\n      $property: string.slice($key, string.index($key, '-') + 1);\n      @if list.index($exclude-props, $property) == null {\n        $current-global-value: map.get($styles, $style, $property);\n        $configured-global-value: map.get($_styles-copy, $style, $property);\n        @if $current-global-value != $configured-global-value {\n          // A compile time change was made to $mdc-typography-styles. To\n          // support Angular, use this value instead of the key's value.\n          @if $current-global-value {\n            // Only emit if the overridden value exists\n            $custom-prop: keys.create-custom-property($key);\n            $custom-prop: custom-properties.set-fallback(\n              $custom-prop,\n              $current-global-value\n            );\n            @include theme.property($property, $custom-prop);\n          }\n        } @else {\n          // Otherwise, use the key, which may be different from the original\n          // configured global value.\n          @include theme.property($property, $key);\n        }\n      }\n    }\n  }\n}\n\n/// Applies antialiasing via font-smoothing to text.\n@mixin smooth-font($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include feature-targeting.targets($feat-typography) {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n}\n\n// Element must be `display: block` or `display: inline-block` for this to work.\n@mixin overflow-ellipsis($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n/// Sets a container's baseline that text content will align to.\n///\n/// If the `$display` is set to a flexbox display, only `$top` baseline may be\n/// set. A separate element must be added as a child of the container with a\n/// `$bottom` baseline.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {String} $display - the display type of the container. May be `flex`,\n///     `inline-flex`, `block`, or `inline-block`.\n@mixin baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (flex, inline-flex, block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $isFlexbox: $display == 'flex' or $display == 'inline-flex';\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: $display;\n\n    @if $isFlexbox {\n      align-items: baseline;\n    }\n  }\n\n  @if $top > 0 {\n    @include baseline-top($top, $query: $query);\n  }\n\n  @if $bottom > 0 {\n    @if $isFlexbox {\n      @error \"mdc-typography: invalid baseline with display type. #{$display} cannot specifiy $bottom. Add a separate child element with its own $bottom.\";\n    }\n\n    @include baseline-bottom($bottom, $query: $query);\n  }\n}\n\n/// Sets the baseline of flow text content.\n///\n/// Separate `$top` and `$bottom` baselines may be specified. You should ensure\n/// that the `$top` baseline matches the previous text content's $bottom\n/// baseline to ensure text is positioned appropriately.\n///\n/// See go/css-baseline for reference on how this mixin works.\n///\n/// This is intended for text flow content only (e.g. `<h1>`, `<p>`, `<span>`,\n/// or `<div>` with only text content). Use `baseline()` to set the baseline of\n/// containers that are flexbox or have non-flow content children.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {Boolean} $lineHeight - the line-height to use for the text. This\n///     is the distance between baselines of multiple lines of text.\n/// @param {String} $display - the display type of the container. May be `block`\n///     or `inline-block`.\n@mixin text-baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $lineHeight: normal,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include baseline(\n    $display: $display,\n    $top: $top,\n    $bottom: $bottom,\n    $query: $query\n  );\n  @include feature-targeting.targets($feat-structure) {\n    @if $top > 0 {\n      margin-top: 0;\n      /* @alternate */\n      line-height: #{$lineHeight};\n    }\n\n    @if $bottom > 0 {\n      margin-bottom: -1 * $bottom;\n    }\n  }\n}\n\n/// Creates a baseline strut from the top of a container. This mixin is for\n/// advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the top of the container to\n///     the text's baseline.\n@mixin baseline-top($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: 0;\n    }\n  }\n}\n\n/// Creates a baseline strut from the baseline to the bottom of a container.\n/// This mixin is for advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the text's baseline to the\n///     bottom of the container.\n@mixin baseline-bottom($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: -1 * $distance;\n    }\n  }\n}\n\n/// Adds an invisible, zero-width prefix to a container's text.\n/// This ensures that the baseline is always where the text would be, instead\n/// of defaulting to the container bottom when text is empty. Do not use this\n/// mixin if the `baseline` mixin is already applied.\n@mixin zero-width-prefix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      content: '\\200b';\n    }\n  }\n}\n\n@mixin baseline-strut_($distance) {\n  display: inline-block;\n  width: 0;\n  height: $distance;\n  content: '';\n}\n\n@function get-font($typography) {\n  @return map.get($styles, $typography, font-family);\n}\n\n@function get-line-height($typography) {\n  @return map.get($styles, $typography, line-height);\n}\n\n@function get-size($typography) {\n  @return map.get($styles, $typography, font-size);\n}\n\n@function get-weight($typography) {\n  @return map.get($styles, $typography, font-weight);\n}\n\n@function get-tracking($typography) {\n  @return map.get($styles, $typography, letter-spacing);\n}\n\n$_typography-theme: (\n  font: null,\n  line-height: null,\n  size: null,\n  weight: null,\n  tracking: null,\n);\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme-keys($_typography-theme, $theme);\n\n  @include theme.property(font-family, map.get($theme, font));\n  @include theme.property(line-height, map.get($theme, line-height));\n  @include theme.property(font-size, map.get($theme, size));\n  @include theme.property(font-weight, map.get($theme, weight));\n  @include theme.property(letter-spacing, map.get($theme, tracking));\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:meta';\n@use 'sass:selector';\n@use '@material/theme/gss';\n@use '@material/theme/selector-ext';\n@use '@material/theme/theme';\n\n$include: true !default;\n\n/// Creates a rule that will be applied when a component is within the context\n/// of an RTL layout.\n///\n/// @example - scss\n/// .mdc-foo {\n///   padding-left: 4px;\n///\n///   @include rtl {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n/// }\n///\n/// @example - css\n///   .mdc-foo {\n///     padding-left: 4px;\n///   }\n///\n///   [dir=\"rtl\"] .mdc-foo,\n///   .mdc-foo[dir=\"rtl\"] {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n///\n/// Note that this mixin works by checking for an ancestor element with\n/// `[dir=\"rtl\"]`. As a result, nested `dir` values are not supported:\n///\n/// @example - html\n/// <html dir=\"rtl\">\n///   <!-- ... -->\n///   <div dir=\"ltr\">\n///     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n///   </div>\n/// </html>\n///\n/// In the future, selectors such as the `:dir` pseudo-class\n/// (http://mdn.io/css/:dir) will help us mitigate this.\n///\n/// @content Content to be styled in an RTL context.\n@mixin rtl() {\n  @if ($include) {\n    $dir-rtl: '[dir=rtl]';\n\n    $rtl-selectors: list.join(\n      selector.nest($dir-rtl, &),\n      selector-ext.append-strict(&, $dir-rtl)\n    );\n\n    @at-root {\n      #{$rtl-selectors} {\n        /*rtl:begin:ignore*/\n        @content;\n        /*rtl:end:ignore*/\n      }\n    }\n  }\n}\n\n// Takes a base box-model property name (`margin`, `border`, `padding`, etc.) along with a\n// default direction (`left` or `right`) and value, and emits rules which apply the given value to the\n// specified direction by default and the opposite direction in RTL.\n//\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, left, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 8px;\n//   margin-right: 0;\n//\n//   @include rtl {\n//     margin-left: 0;\n//     margin-right: 8px;\n//   }\n// }\n// ```\n//\n// whereas:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, right, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 0;\n//   margin-right: 8px;\n//\n//   @include rtl {\n//     margin-left: 8px;\n//     margin-right: 0;\n//   }\n// }\n// ```\n//\n// You can also pass an optional 4th `$root-selector` argument which will be forwarded to `mdc-rtl`,\n// e.g. `@include rtl-reflexive-box(margin, left, 8px, '.mdc-component')`.\n//\n// Note that this function will always zero out the original value in an RTL context.\n// If you're trying to flip the values, use `mdc-rtl-reflexive-property()` instead.\n@mixin reflexive-box(\n  $base-property,\n  $default-direction,\n  $value,\n  $replace: null\n) {\n  @if (list.index((right, left), $default-direction) == null) {\n    @error \"Invalid default direction: '#{$default-direction}'. Please specifiy either 'right' or 'left'.\";\n  }\n\n  $left-value: $value;\n  $right-value: 0;\n\n  @if ($default-direction == right) {\n    $left-value: 0;\n    $right-value: $value;\n  }\n\n  @include reflexive-property(\n    $base-property,\n    $left-value,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n// <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-property(margin, auto, 12px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: auto;\n//   margin-right: 12px;\n//\n//   @include rtl {\n//     margin-left: 12px;\n//     margin-right: auto;\n//   }\n// }\n// ```\n//\n// An optional 4th `$root-selector` argument can be given, which will be passed to `mdc-rtl`.\n@mixin reflexive-property(\n  $base-property,\n  $left-value,\n  $right-value,\n  $replace: null\n) {\n  $prop-left: #{$base-property}-left;\n  $prop-right: #{$base-property}-right;\n\n  @include reflexive(\n    $prop-left,\n    $left-value,\n    $prop-right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes an argument specifying a horizontal position property (either 'left' or 'right') as well\n// as a value, and applies that value to the specified position in a LTR context, and flips it in a\n// RTL context. For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-position(left, 0);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 0;\n//   right: initial;\n//\n//   @include rtl {\n//     left: initial;\n//     right: 0;\n//   }\n// }\n// ```\n//\n// An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive-position($position-property, $value, $replace: null) {\n  @if (list.index((right, left), $position-property) == null) {\n    @error \"Invalid position #{position-property}. Please specifiy either right or left\";\n  }\n\n  // TODO: 'initial' is not supported in IE 11. https://caniuse.com/#feat=css-initial-value\n  $left-value: $value;\n  $right-value: initial;\n\n  @if ($position-property == right) {\n    $right-value: $value;\n    $left-value: initial;\n  }\n\n  @include reflexive(\n    left,\n    $left-value,\n    right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes pair of properties with values as arguments and flips it in RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive(left, 2px, right, 5px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 2px;\n//   right: 5px;\n//\n//   @include rtl {\n//     right: 2px;\n//     left: 5px;\n//   }\n// }\n// ```\n//\n// An optional fifth `$root-selector` argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive(\n  $left-property,\n  $left-value,\n  $right-property,\n  $right-value,\n  $replace: null\n) {\n  $left-replace: null;\n  $right-replace: null;\n  @if $replace {\n    @if meta.type-of($left-value) == 'string' {\n      $left-replace: $replace;\n    }\n\n    @if meta.type-of($right-value) == 'string' {\n      $right-replace: $replace;\n    }\n\n    @if $left-replace == null and $right-replace == null {\n      @error 'mdc-rtl: $replace may only be used with strings but neither left nor right values are strings.';\n    }\n\n    // If any replacements are null, treat the entire value as null (do not\n    // emit anything).\n    @each $name, $replacement in $replace {\n      @if $replacement == null {\n        $left-value: null;\n        $right-value: null;\n      }\n    }\n  }\n\n  // Do not emit if either value are null\n  @if $left-value and $right-value {\n    @include _property($left-property, $left-value, $replace: $left-replace);\n    @include _property($right-property, $right-value, $replace: $right-replace);\n\n    @include rtl {\n      @include _property(\n        $left-property,\n        $right-value,\n        $replace: $right-replace\n      );\n      @include _property($right-property, $left-value, $replace: $left-replace);\n    }\n  }\n}\n\n///\n/// Adds RTL ignore annotation when `$mdc-rtl-include` is true.\n///\n@mixin ignore-next-line() {\n  @include gss.annotate(\n    (\n      noflip: $include,\n    )\n  );\n}\n\n///\n/// Adds `@noflip` annotation when `$mdc-rtl-include` is true.\n///\n/// @param {String} $property\n/// @param {String} $value\n/// @param {Map} $replace\n///\n@mixin _property($property, $value, $replace: null) {\n  @include theme.property(\n    $property,\n    $value,\n    $replace: $replace,\n    $gss: (noflip: $include)\n  );\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/theme';\n@use './functions';\n\n// Public\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // postcss-bem-linter: define line-ripple\n  .mdc-line-ripple {\n    @include feature-targeting.targets($feat-structure) {\n      &::before,\n      &::after {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        border-bottom-style: solid;\n        content: '';\n      }\n\n      @include height(1px);\n\n      &::before {\n        z-index: 1;\n      }\n\n      &::after {\n        transform: scaleX(0);\n        border-bottom-width: 2px;\n        opacity: 0;\n        z-index: 2;\n      }\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      &::after {\n        transition: functions.transition-value(transform),\n          functions.transition-value(opacity);\n      }\n    }\n  }\n\n  .mdc-line-ripple--active::after {\n    @include feature-targeting.targets($feat-structure) {\n      transform: scaleX(1);\n      opacity: 1;\n    }\n  }\n\n  .mdc-line-ripple--deactivating::after {\n    @include feature-targeting.targets($feat-structure) {\n      opacity: 0;\n    }\n  }\n}\n\n@mixin height($height) {\n  &::before {\n    border-bottom-width: $height;\n  }\n}\n\n@mixin active-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    &::after {\n      @include theme.property(border-bottom-color, $color);\n    }\n  }\n}\n\n@mixin inactive-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    &::before {\n      @include theme.property(border-bottom-color, $color);\n    }\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:list';\n@use '@material/theme/custom-properties';\n@use '@material/theme/theme';\n@use '@material/shape/functions' as shape-functions;\n@use '@material/shape/mixins' as shape-mixins;\n@use '@material/floating-label/mixins' as floating-label-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use './variables';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-notched-outline {\n    @include base_($query);\n\n    &__leading,\n    &__notch,\n    &__trailing {\n      @include feature-targeting.targets($feat-structure) {\n        box-sizing: border-box;\n        height: 100%;\n        border-top: variables.$border-width solid;\n        border-bottom: variables.$border-width solid;\n        pointer-events: none;\n      }\n    }\n\n    &__leading {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.reflexive-property(\n          border,\n          variables.$border-width solid,\n          none\n        );\n\n        width: variables.$leading-width;\n      }\n    }\n\n    &__trailing {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.reflexive-property(\n          border,\n          none,\n          variables.$border-width solid\n        );\n\n        flex-grow: 1;\n      }\n    }\n\n    &__notch {\n      @include feature-targeting.targets($feat-structure) {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: calc(100% - #{variables.$leading-width} * 2);\n      }\n    }\n\n    .mdc-floating-label {\n      @include feature-targeting.targets($feat-structure) {\n        display: inline-block;\n        position: relative;\n        max-width: 100%;\n      }\n    }\n\n    .mdc-floating-label--float-above {\n      @include feature-targeting.targets($feat-structure) {\n        text-overflow: clip;\n      }\n    }\n\n    &--upgraded .mdc-floating-label--float-above {\n      @include feature-targeting.targets($feat-structure) {\n        max-width: calc(100% / 0.75);\n      }\n    }\n  }\n\n  .mdc-notched-outline--notched {\n    .mdc-notched-outline__notch {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.reflexive-box(padding, right, 8px);\n\n        border-top: none;\n      }\n    }\n  }\n\n  .mdc-notched-outline--no-label {\n    .mdc-notched-outline__notch {\n      @include feature-targeting.targets($feat-structure) {\n        display: none;\n      }\n    }\n  }\n}\n\n@mixin color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-notched-outline__leading,\n  .mdc-notched-outline__notch,\n  .mdc-notched-outline__trailing {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(border-color, $color);\n    }\n  }\n}\n\n@mixin stroke-width($width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-notched-outline__leading,\n  .mdc-notched-outline__notch,\n  .mdc-notched-outline__trailing {\n    @include feature-targeting.targets($feat-structure) {\n      border-width: $width;\n    }\n  }\n}\n\n///\n/// Adds top offset to compensate for border width box size when it is notched.\n/// Use this when floating label is aligned to center to prevent label jump on focus.\n/// @param {Number} $stroke-width Stroke width of notched outline that needs to be offset.\n///\n@mixin notch-offset($stroke-width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-notched-outline--notched .mdc-notched-outline__notch {\n    @include feature-targeting.targets($feat-structure) {\n      padding-top: $stroke-width;\n    }\n  }\n}\n\n@mixin shape-radius(\n  $radius,\n  $rtl-reflexive: false,\n  $component-height: null,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  // Resolve the radius relative to the notched outline component's height. The\n  // component should provide its current height from its density. The resolved\n  // radius allows percentage radii to be converted to pixels.\n  $resolved-radius: shape-functions.resolve-radius(\n    $radius,\n    $component-height: $component-height\n  );\n\n  // Grab the top-left radius. We'll need it to adjust the leading for the\n  // label notch if the resulting radius shape is larger than the default\n  // leading.\n  $top-left-radius: list.nth(\n    shape-functions.unpack-radius($resolved-radius),\n    1\n  );\n  $top-left-is-custom-prop: custom-properties.is-custom-prop($top-left-radius);\n  $top-left-radius-px: $top-left-radius;\n  @if ($top-left-is-custom-prop) {\n    $top-left-radius-px: custom-properties.get-fallback($top-left-radius);\n  }\n\n  .mdc-notched-outline__leading {\n    // mask the leading to apply the top-left and bottom-left corners\n    @include shape-mixins.radius(\n      shape-functions.mask-radius($radius, 1 0 0 1),\n      $rtl-reflexive: true,\n      $component-height: $component-height,\n      $query: $query\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      @if ($top-left-radius-px > variables.$leading-width) {\n        // If the radius is bigger than the default leading width, we need to\n        // increase the leading width\n        width: $top-left-radius-px;\n        @if ($top-left-is-custom-prop) {\n          // The radius may be a custom property, in which case the above width\n          // is the IE11 fallback value.\n          /* @alternate */\n        }\n      }\n\n      @if ($top-left-is-custom-prop) {\n        // If the top-left radius is dynamic, the width of the leading is\n        // the max of whichever is larger: the default leading width or the\n        // value of the custom property.\n        $var: custom-properties.create-var($top-left-radius);\n        // Interpolation is a workaround for sass/sass#3259.\n        @supports (top: max(#{0%})) {\n          width: max(#{variables.$leading-width}, #{$var});\n        }\n      }\n    }\n  }\n\n  // Similar to above, adjust the max-width of the notch if we adjusted the\n  // leading's width.\n  .mdc-notched-outline__notch {\n    @include feature-targeting.targets($feat-structure) {\n      @if ($top-left-radius-px > variables.$leading-width) {\n        max-width: calc(100% - #{$top-left-radius-px} * 2);\n        @if ($top-left-is-custom-prop) {\n          /* @alternate */\n        }\n      }\n\n      @if ($top-left-is-custom-prop) {\n        $var: custom-properties.create-var($top-left-radius);\n        // Interpolation is a workaround for sass/sass#3259.\n        @supports (top: max(#{0%})) {\n          max-width: calc(100% - max(#{variables.$leading-width}, #{$var}) * 2);\n        }\n      }\n    }\n  }\n\n  .mdc-notched-outline__trailing {\n    // mask the leading to apply the top-right and bottom-right corners\n    @include shape-mixins.radius(\n      shape-functions.mask-radius($radius, 0 1 1 0),\n      $rtl-reflexive: true,\n      $component-height: $component-height,\n      $query: $query\n    );\n  }\n}\n\n@mixin floating-label-float-position(\n  $positionY,\n  $positionX: 0%,\n  $scale: 0.75,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include floating-label-mixins.float-position(\n    $positionY + variables.$label-adjust,\n    $positionX,\n    1,\n    $query: $query\n  );\n\n  .mdc-floating-label--float-above {\n    @include feature-targeting.targets($feat-structure) {\n      font-size: ($scale * 1rem);\n    }\n  }\n\n  // Two selectors to ensure we select the appropriate class when applied from this component or a parent component.\n  &.mdc-notched-outline--upgraded,\n  .mdc-notched-outline--upgraded {\n    @include floating-label-mixins.float-position(\n      $positionY,\n      $positionX,\n      $scale,\n      $query: $query\n    );\n\n    .mdc-floating-label--float-above {\n      @include feature-targeting.targets($feat-structure) {\n        font-size: 1rem;\n      }\n    }\n  }\n}\n\n///\n/// Sets floating label position in notched outline when label is afloat.\n///\n/// @param {Number} $positionY Absolute Y-axis position in `px`.\n/// @param {Number} $positionX Absolute X-axis position in `px`. Defaults to `0`.\n/// @param {Number} $scale Defaults to `.75`.\n///\n/// @todo Replace mixin `mdc-notched-outline-floating-label-float-position` with this mixin when floating label is\n///     center aligned in all the places.\n///\n@mixin floating-label-float-position-absolute(\n  $positionY,\n  $positionX: 0,\n  $scale: 0.75,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include floating-label-mixins.float-position(\n    $positionY + variables.$label-adjust-absolute,\n    $positionX,\n    1,\n    $query: $query\n  );\n\n  .mdc-floating-label--float-above {\n    @include feature-targeting.targets($feat-structure) {\n      font-size: ($scale * 1rem);\n    }\n  }\n\n  // Two selectors to ensure we select the appropriate class when applied from this component or a parent component.\n  &.mdc-notched-outline--upgraded,\n  .mdc-notched-outline--upgraded {\n    @include floating-label-mixins.float-position(\n      $positionY,\n      $positionX,\n      $scale,\n      $query: $query\n    );\n\n    .mdc-floating-label--float-above {\n      @include feature-targeting.targets($feat-structure) {\n        font-size: 1rem;\n      }\n    }\n  }\n}\n\n///\n/// Sets the max-width for the notch\n///\n/// @param {Number} $max-width Max-width for the notch\n///\n@mixin notch-max-width($max-width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {\n    @include feature-targeting.targets($feat-structure) {\n      max-width: $max-width;\n    }\n  }\n}\n\n//\n// Private\n//\n@mixin base_($query) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    box-sizing: border-box;\n    width: 100%;\n    max-width: 100%;\n    height: 100%;\n    @include rtl.ignore-next-line();\n    text-align: left;\n    pointer-events: none;\n\n    @include rtl.rtl {\n      @include rtl.ignore-next-line();\n      text-align: right;\n    }\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// Keep this in sync with constants.numbers.MIN_LEADING_STROKE_EDGE_POSITION\n$min-leading-stroke-edge-position: 12px !default;\n// The gap between the stroke end and floating label\n// Keep this in sync with constants.numbers.NOTCH_GUTTER_SIZE\n$notch-gutter-size: 4px !default;\n$border-width: 1px !default;\n$leading-width: 12px !default;\n$padding: 4px !default;\n// This variable keeps the before/after JS label centered in the notch when the font-size is changed.\n$label-adjust: 14% !default;\n\n/// Label box height when it is floating above for notched upgraded. This value is used to put the label vertically in\n/// the middle when it is notched.\n$label-box-height: 13.5px !default;\n\n/// Label adjust offset applied to floating label when it is notched. Since notch without upgraded has different font\n/// size we add additional offset value.\n$label-adjust-absolute: 2.5px !default;\n","*, *:before, *:after{\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    text-rendering: optimizeLegibility;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-size-adjust: none;\r\n}\r\n\r\nfooter, header, nav, section, main{\r\n    display: block;\r\n}\r\n\r\nbody{\r\n    line-height: 1;\r\n}\r\n\r\nol, ul{\r\n    list-style: none;\r\n}\r\n\r\nblockquote, q{\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after, q:before, q:after{\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\ninput{\r\n    -webkit-appearance: none;\r\n    border-radius: 0;\r\n}","// $primary:#38C1D3;\r\n// $on-primary: #2c3400;\r\n// $secondary: #CDDC27;\r\n// $on-secondary: #2e321b;\r\n// $background: #10153D;\r\n// $surface: #10153D;\r\n// $on-surface: #e5e2da;\r\n// $error: #ffb4ab;\r\n// $on-error: #690005;\r\n\r\n:root {\r\n    @media (prefers-color-scheme: light) {\r\n        --mdc-theme-primary: #006874;\r\n        --mdc-theme-on-primary: #ffffff;\r\n        --mdc-theme-secondary: #5c6300;\r\n        --mdc-theme-on-secondary: #ffffff;\r\n        --mdc-theme-surface: #fafdfd;\r\n        --mdc-theme-on-surface: #191c1d;\r\n        --mdc-theme-background: #fafdfd;\r\n        --mdc-theme-on-background: #191c1d;\r\n    }\r\n\r\n    @media (prefers-color-scheme: dark) {\r\n        --mdc-theme-primary: #4fd8eb;\r\n        --mdc-theme-on-primary: #00363d;\r\n        --mdc-theme-secondary: #c2d016;\r\n        --mdc-theme-on-secondary: #2f3300;\r\n\r\n        --mdc-theme-surface-base: 195, 7.4%;\r\n        --mdc-theme-surface-l: 15.6%;\r\n        --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\r\n            --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\r\n            --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\r\n            --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\r\n            --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\r\n            --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\r\n            --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\r\n            --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\r\n            --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\r\n            --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\r\n\r\n        --mdc-theme-on-surface: #e1e3e3;\r\n        --mdc-theme-background: #191c1d;\r\n        --mdc-theme-on-background: #e1e3e3;\r\n\r\n\r\n        // Others\r\n        --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\r\n\r\n    }\r\n}\r\n//#9c27b0 purple-ish\r\n\r\n@media (prefers-color-scheme: dark) {\r\n    .mdc-elevation--z1 {\r\n        background:var(--mdc-theme-surface-z1);\r\n    }\r\n    .mdc-elevation--z2 {\r\n        background:var(--mdc-theme-surface-z2);\r\n    }\r\n    .mdc-elevation--z3 {\r\n        background:var(--mdc-theme-surface-z3);\r\n    }\r\n    .mdc-elevation--z4 {\r\n        background:var(--mdc-theme-surface-z4);\r\n    }\r\n    .mdc-elevation--z5 {\r\n        background:var(--mdc-theme-surface-z5);\r\n    }\r\n    .mdc-elevation--z6 {\r\n        background:var(--mdc-theme-surface-z6);\r\n    }\r\n    .mdc-elevation--z7 {\r\n        background:var(--mdc-theme-surface-z7);\r\n    }\r\n\r\n\r\n    // Drawer Custom\r\n    .mdc-drawer {\r\n        &.mdc-drawer--modal {\r\n            background:var(--mdc-theme-surface-z1);\r\n\r\n            .mdc-drawer__header {\r\n                background:var(--mdc-theme-surface-z4);\r\n\r\n                .mdc-drawer__title {\r\n                    color:var(--mdc-theme-on-surface);\r\n                }\r\n                .mdc-drawer__subtitle {\r\n                    color:var(--mdc-theme-on-surface);\r\n                }\r\n            }\r\n\r\n            .mdc-drawer__content {\r\n                .mdc-deprecated-list-item {\r\n                    color: var(--mdc-theme-on-surface);\r\n\r\n                    .mdc-deprecated-list-item__graphic {\r\n                        color: var(--mdc-theme-surface-z9);\r\n                    }\r\n                }\r\n                .mdc-deprecated-list-item--activated {\r\n                    color: var(--mdc-theme-primary);\r\n\r\n                    .mdc-deprecated-list-item__graphic {\r\n                        color: var(--mdc-theme-primary);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    // Top App Bar Custom\r\n    .mdc-top-app-bar {\r\n        background-color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-top-app-bar__title {\r\n        color: var(--mdc-theme-on-primary);\r\n    }\r\n\r\n    // Tab Custom\r\n    .mdc-tab {\r\n        .mdc-tab__icon, .mdc-tab__text-label {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n\r\n        &.mdc-tab--active {\r\n            .mdc-tab__icon, .mdc-tab__text-label {\r\n                color: var(--mdc-theme-primary);\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    // Table Custom\r\n    .mdc-data-table__header-cell {\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n    }\r\n\r\n    .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n    }\r\n\r\n\r\n    // Dialog Custom\r\n    .mdc-dialog .mdc-dialog__surface {\r\n        background-color:var(--mdc-theme-surface-z3);\r\n    }\r\n\r\n    .mdc-dialog .mdc-dialog__title {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n    .mdc-dialog__actions {\r\n        gap: 1rem;\r\n    }\r\n\r\n    // Dialog Scrim Custom\r\n    .mdc-dialog .mdc-dialog__scrim {\r\n        background-color: rgba(0, 0, 0, 0.80);\r\n    }\r\n\r\n\r\n\r\n    // Text Field Custom\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z5);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading, \r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch, \r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z7);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-text-field--outlined .mdc-notched-outline {\r\n        z-index:-1;\r\n    }\r\n\r\n    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n\r\n\r\n    // Select Custom\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z5);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading, \r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch, \r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z7);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\r\n        color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\r\n        fill: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\r\n        fill: var(--mdc-theme-primary);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n","//@use \"@material/typography/mdc-typography\";\r\n//@import \"./theme/theme1/variables\";\r\n//@use \"@material/theme\";\r\n@import \"./reset\";\r\n@import \"./theme/theme1/variables\";\r\n//@import \"./theme/theme1/variables-dark\";\r\n@import \"../../node_modules/@material/typography/mdc-typography\";\r\n\r\nhtml {\r\n    background-color: var(--mdc-theme-background);\r\n}\r\n\r\ntable {\r\n    thead, tbody {\r\n        tr {\r\n            th, td {\r\n                vertical-align: middle;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.mdc-icon-button.actionsButton {\r\n    width: 40px;\r\n    height: 40px;\r\n    padding: 8px;\r\n}\r\n\r\n.main-content {\r\n    padding:1rem;\r\n}\r\n\r\n.content-section {\r\n    padding:1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.demo-group {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n\r\n    &.wrap {\r\n        flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","//\n// Copyright 2019 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use '@material/typography/typography';\n@use './variables';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-form-field {\n    @include typography.typography(body2, $query);\n\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, text-primary-on-background);\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      display: inline-flex;\n      align-items: center;\n      vertical-align: middle;\n    }\n\n    > label {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.reflexive-property(margin, 0, auto);\n        @include rtl.reflexive-property(padding, variables.$item-spacing, 0);\n\n        order: 0;\n      }\n    }\n  }\n\n  .mdc-form-field--nowrap {\n    > label {\n      @include feature-targeting.targets($feat-structure) {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n    }\n  }\n\n  .mdc-form-field--align-end {\n    > label {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.reflexive-property(margin, auto, 0);\n        @include rtl.reflexive-property(padding, 0, variables.$item-spacing);\n\n        order: -1;\n      }\n    }\n  }\n\n  .mdc-form-field--space-between {\n    @include feature-targeting.targets($feat-structure) {\n      justify-content: space-between;\n    }\n\n    > label {\n      @include feature-targeting.targets($feat-structure) {\n        margin: 0;\n\n        @include rtl.rtl {\n          // RTL needed for specificity\n          margin: 0;\n        }\n      }\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// Selector '.mdc-*' should only be used in this project.\n// stylelint-disable selector-class-pattern --\n// TODO: document why this disable is neccessary\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:meta';\n@use '@material/animation/animation';\n@use '@material/density/functions' as density-functions;\n@use '@material/dom/dom';\n@use '@material/floating-label/mixins' as floating-label-mixins;\n@use '@material/floating-label/variables' as floating-label-variables;\n@use '@material/line-ripple/mixins' as line-ripple-mixins;\n@use '@material/notched-outline/mixins' as notched-outline-mixins;\n@use '@material/notched-outline/variables' as notched-outline-variables;\n@use '@material/ripple/ripple';\n@use '@material/ripple/ripple-theme';\n@use '@material/theme/custom-properties';\n@use '@material/theme/theme';\n@use '@material/shape/mixins' as shape-mixins;\n@use '@material/shape/functions' as shape-functions;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/typography/typography';\n@use 'helper-text/mixins' as helper-text-mixins;\n@use 'character-counter/mixins' as character-counter-mixins;\n@use 'icon/mixins' as icon-mixins;\n@use 'icon/variables' as icon-variables;\n@use './variables';\n@use '@material/rtl/rtl';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include ripple($query);\n  @include without-ripple($query);\n  @include helper-text-mixins.helper-text-core-styles($query);\n  @include character-counter-mixins.character-counter-core-styles($query);\n  @include icon-mixins.icon-core-styles($query);\n}\n\n@mixin without-ripple($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // Baseline\n  // postcss-bem-linter: define text-field\n  .mdc-text-field {\n    @include _base($query);\n  }\n\n  .mdc-text-field__input {\n    @include _input($query);\n\n    @include placeholder-selector_ {\n      @include _input-placeholder($query);\n    }\n\n    // Always show placeholder for text fields that has no\n    // label and show only on focused state when label is present.\n    .mdc-text-field--no-label &,\n    .mdc-text-field--focused & {\n      @include placeholder-selector_ {\n        @include _input-placeholder-visible($query);\n      }\n    }\n  }\n\n  .mdc-text-field__affix {\n    @include _affix($query: $query);\n\n    .mdc-text-field--label-floating &,\n    .mdc-text-field--no-label & {\n      @include _affix-visible($query: $query);\n    }\n\n    // Safari only\n    @supports (-webkit-hyphens: none) {\n      .mdc-text-field--outlined & {\n        @include _centered-affix-safari-support($query: $query);\n      }\n    }\n  }\n\n  .mdc-text-field__affix--prefix {\n    @include _prefix($query: $query);\n\n    .mdc-text-field--end-aligned & {\n      @include _prefix-end-aligned($query: $query);\n    }\n  }\n\n  .mdc-text-field__affix--suffix {\n    @include _suffix($query: $query);\n\n    .mdc-text-field--end-aligned & {\n      @include _suffix-end-aligned($query: $query);\n    }\n  }\n\n  // Variants\n\n  .mdc-text-field--filled {\n    @include _filled($query);\n\n    &.mdc-text-field--no-label {\n      @include _filled-no-label($query);\n    }\n  }\n\n  .mdc-text-field--outlined {\n    @include outlined_($query);\n\n    .mdc-notched-outline {\n      @include _outlined-notched-outline($query);\n    }\n  }\n\n  // Other Variations\n\n  .mdc-text-field--textarea {\n    @include textarea_($query);\n\n    .mdc-text-field__input {\n      @include _textarea-input($query);\n    }\n\n    &.mdc-text-field--filled {\n      @include _textarea-filled($query);\n\n      .mdc-text-field__input {\n        @include _textarea-filled-input($query);\n      }\n\n      &.mdc-text-field--no-label {\n        .mdc-text-field__input {\n          @include _textarea-filled-no-label-input($query);\n        }\n      }\n    }\n\n    &.mdc-text-field--outlined {\n      @include _textarea-outlined($query);\n\n      .mdc-text-field__input {\n        @include _textarea-outlined-input($query);\n      }\n\n      .mdc-floating-label {\n        @include _textarea-outlined-floating-label($query);\n      }\n    }\n\n    &.mdc-text-field--with-internal-counter {\n      .mdc-text-field__input {\n        @include _textarea-input-with-internal-counter($query);\n      }\n\n      .mdc-text-field-character-counter {\n        @include _textarea-internal-counter($query);\n      }\n    }\n  }\n\n  // Resizer element does not need to be under mdc-text-field--textarea, that\n  // just adds specificity\n  .mdc-text-field__resizer {\n    @include _textarea-resizer($query);\n\n    .mdc-text-field--filled & {\n      @include _textarea-filled-resizer($query);\n\n      .mdc-text-field__input,\n      .mdc-text-field-character-counter {\n        @include _textarea-filled-resizer-children($query);\n      }\n    }\n\n    .mdc-text-field--outlined & {\n      @include _textarea-outlined-resizer($query);\n\n      .mdc-text-field__input,\n      .mdc-text-field-character-counter {\n        @include _textarea-outlined-resizer-children($query);\n      }\n    }\n  }\n\n  .mdc-text-field--with-leading-icon {\n    @include _padding-horizontal-with-leading-icon($query);\n\n    &.mdc-text-field--filled {\n      @include with-leading-icon_($query);\n    }\n\n    &.mdc-text-field--outlined {\n      @include outlined-with-leading-icon_($query);\n    }\n  }\n\n  .mdc-text-field--with-trailing-icon {\n    @include _padding-horizontal-with-trailing-icon($query);\n\n    &.mdc-text-field--filled {\n      @include _with-trailing-icon($query);\n    }\n\n    &.mdc-text-field--outlined {\n      @include _outlined-with-trailing-icon($query);\n    }\n  }\n\n  .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {\n    @include _padding-horizontal-with-both-icons($query);\n\n    &.mdc-text-field--filled {\n      @include _with-leading-and-trailing-icon($query);\n    }\n  }\n\n  // postcss-bem-linter: define text-field-helper-text\n  // stylelint-disable plugin/selector-bem-pattern --\n  // TODO: document why this disable is neccessary\n  .mdc-text-field-helper-line {\n    @include feature-targeting.targets($feat-structure) {\n      display: flex;\n      justify-content: space-between;\n      box-sizing: border-box;\n    }\n\n    .mdc-text-field + & {\n      @include feature-targeting.targets($feat-structure) {\n        padding-right: variables.$helper-line-padding;\n        padding-left: variables.$helper-line-padding;\n      }\n    }\n  }\n  // stylelint-enable plugin/selector-bem-pattern\n  // postcss-bem-linter: end\n\n  // mdc-form-field tweaks to align text field label correctly\n  // stylelint-disable selector-max-type --\n  // TODO: document why this disable is neccessary\n  .mdc-form-field > .mdc-text-field + label {\n    @include feature-targeting.targets($feat-structure) {\n      align-self: flex-start;\n    }\n  }\n  // stylelint-enable selector-max-type\n\n  // States\n  .mdc-text-field--focused {\n    @include focused_($query);\n\n    &.mdc-text-field--outlined {\n      @include _focused-outlined($query);\n\n      &.mdc-text-field--textarea {\n        @include _focused-outlined-textarea($query);\n      }\n    }\n  }\n\n  .mdc-text-field--invalid {\n    @include invalid_($query);\n  }\n\n  .mdc-text-field--disabled {\n    @include disabled_($query);\n\n    &.mdc-text-field--filled {\n      @include _disabled-filled($query);\n    }\n\n    .mdc-text-field__input {\n      @include _disabled-input($query);\n    }\n  }\n\n  .mdc-text-field--end-aligned {\n    @include end-aligned_($query);\n  }\n\n  .mdc-text-field--ltr-text {\n    @include _ltr-text($query);\n\n    &.mdc-text-field--end-aligned {\n      @include _ltr-text-end-aligned($query);\n    }\n  }\n}\n\n// This API is intended for use by frameworks that may want to separate the ripple-related styles\n// from the other text field styles. It is recommended that most users use `mdc-text-field-core-styles` instead.\n@mixin ripple($query: feature-targeting.all()) {\n  @include ripple.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  .mdc-text-field--filled {\n    @include ripple.surface(\n      $query: $query,\n      $ripple-target: variables.$ripple-target\n    );\n    @include ripple.radius-bounded(\n      $query: $query,\n      $ripple-target: variables.$ripple-target\n    );\n  }\n\n  #{variables.$ripple-target} {\n    @include ripple.target-common($query: $query);\n  }\n}\n\n///\n/// Sets density scale for default text field variant.\n///\n/// @param {Number | String} $density-scale - Density scale value for component. Supported density scale values `-4`,\n///     `-3`, `-2`, `-1`, `0`. Default is `0`.\n/// @param {Number} $minimum-height-for-filled-label Sets the minimum height for\n///     filled textfields at which to allow floating labels.\n///\n@mixin density(\n  $density-scale,\n  $minimum-height-for-filled-label: variables.$minimum-height-for-filled-label,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include height(\n    $height,\n    $minimum-height-for-filled-label: $minimum-height-for-filled-label,\n    $query: $query\n  );\n  // TODO(b/151839219): resize icons and adjust label position\n  // @if $density-scale < 0 {\n  //   @include icon-mixins.size(icon-variables.$dense-icon-size);\n  // }\n}\n\n///\n/// Sets density scale for outlined text field (Excluding outlined text field with leading icon).\n///\n/// @param {Number | String} $density-scale - Density scale value for component. Supported density scale values `-4`,\n///     `-3`, `-2`, `-1`, `0`. Default is `0`.\n///\n@mixin outlined-density($density-scale, $query: feature-targeting.all()) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include outlined-height($height, $query: $query);\n  // TODO(b/151839219): resize icons and adjust label position\n  // @if $density-scale < 0 {\n  //   @include icon-mixins.size(icon-variables.$dense-icon-size);\n  // }\n}\n\n///\n/// Sets density scale for outlined text field with leading icon.\n///\n/// @param {Number | String} $density-scale - Density scale value for component. Supported density scale values `-4`,\n///     `-3`, `-2`, `-1`, `0`. Default is `0`.\n///\n@mixin outlined-with-leading-icon-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include outlined-with-leading-icon-height($height, $query: $query);\n  // TODO(b/151839219): resize icons and adjust label position\n  // @if $density-scale < 0 {\n  //   @include icon-mixins.size(icon-variables.$dense-icon-size);\n  // }\n}\n\n///\n/// Sets density scale for filled textarea.\n///\n/// @param {Number | String} $density-scale - Density scale value for component. Supported density scale values `-4`,\n///     `-3`, `-2`, `-1`, `0`. Default is `0`.\n///\n@mixin filled-textarea-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $textfield-height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n  $no-label-margin-top: density-functions.prop-value(\n    $density-config: variables.$textarea-filled-no-label-density-config,\n    $density-scale: math.div($density-scale, 2),\n    $property-name: margin-top,\n  );\n  $no-label-margin-bottom: density-functions.prop-value(\n    $density-config: variables.$textarea-filled-no-label-density-config,\n    $density-scale: math.div($density-scale, 2),\n    $property-name: margin-bottom,\n  );\n\n  // Textarea mixins require two modifier classes since two are used internally\n  // for styles (textarea and filled). An extra class is added for the public\n  // mixin so that only a single public class is needed for specificity.\n  &.mdc-text-field--filled {\n    .mdc-text-field__resizer {\n      @include feature-targeting.targets($feat-structure) {\n        min-height: $textfield-height;\n      }\n    }\n\n    @if $density-scale >= -1 {\n      $keyframe-suffix: text-field-filled-#{$density-scale};\n      $label-top: density-functions.prop-value(\n        $density-config: variables.$textarea-filled-label-density-config,\n        $density-scale: math.div($density-scale, 2),\n        $property-name: top,\n      );\n\n      // Adjust the floating position and animation/keyframes of the floating\n      // label by the new position of the resting label\n      $label-top-difference: variables.$textarea-outlined-label-top -\n        $label-top;\n\n      // Floating label position\n      @include floating-label-mixins.float-position(\n        variables.$textarea-filled-label-position-y - $label-top-difference,\n        $query: $query\n      );\n\n      // Floating label animation\n      @include floating-label-mixins.shake-animation(\n        $keyframe-suffix,\n        $query: $query\n      );\n      @at-root {\n        @include floating-label-mixins.shake-keyframes(\n          $keyframe-suffix,\n          variables.$textarea-filled-label-position-y - $label-top-difference,\n          0%,\n          $query: $query\n        );\n      }\n\n      // Resting label position\n      .mdc-floating-label {\n        @include feature-targeting.targets($feat-structure) {\n          top: $label-top;\n        }\n      }\n\n      $margin-bottom: density-functions.prop-value(\n        $density-config: variables.$textarea-filled-density-config,\n        $density-scale: $density-scale,\n        $property-name: margin-bottom,\n      );\n\n      .mdc-text-field__input {\n        @include feature-targeting.targets($feat-structure) {\n          margin-bottom: $margin-bottom;\n        }\n      }\n    } @else {\n      // The textarea is too dense to show a floating label\n      .mdc-floating-label {\n        @include feature-targeting.targets($feat-structure) {\n          display: none;\n        }\n      }\n\n      .mdc-text-field__input {\n        @include feature-targeting.targets($feat-structure) {\n          margin-top: $no-label-margin-top;\n          margin-bottom: $no-label-margin-bottom;\n        }\n      }\n    }\n\n    &.mdc-text-field--no-label {\n      .mdc-text-field__input {\n        @include feature-targeting.targets($feat-structure) {\n          margin-top: $no-label-margin-top;\n          margin-bottom: $no-label-margin-bottom;\n        }\n      }\n    }\n\n    &.mdc-text-field--with-internal-counter {\n      .mdc-text-field__input {\n        // Space between textarea and internal counter should not be affected\n        @include _textarea-input-with-internal-counter($query);\n      }\n    }\n  }\n}\n\n///\n/// Sets density scale for outlined textarea.\n///\n/// @param {Number | String} $density-scale - Density scale value for component. Supported density scale values `-4`,\n///     `-3`, `-2`, `-1`, `0`. Default is `0`.\n///\n@mixin outlined-textarea-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $keyframe-suffix: text-field-outlined-#{$density-scale};\n  $label-top: density-functions.prop-value(\n    $density-config: variables.$textarea-outlined-label-density-config,\n    $density-scale: math.div($density-scale, 2),\n    $property-name: top,\n  );\n  $textfield-height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n  $margin-top: density-functions.prop-value(\n    $density-config: variables.$textarea-outlined-density-config,\n    $density-scale: math.div($density-scale, 2),\n    $property-name: margin-top,\n  );\n  $margin-bottom: density-functions.prop-value(\n    $density-config: variables.$textarea-outlined-density-config,\n    $density-scale: math.div($density-scale, 2),\n    $property-name: margin-bottom,\n  );\n\n  // Textarea mixins require two modifier classes since two are used internally\n  // for styles (textarea and outlined). An extra class is added for the public\n  // mixin so that only a single public class is needed for specificity.\n  &.mdc-text-field--outlined {\n    // Adjust the floating position and animation/keyframes of the floating\n    // label by the new position of the resting label\n    $label-top-difference: variables.$textarea-outlined-label-top - $label-top;\n\n    // Floating label position\n    @include notched-outline-mixins.floating-label-float-position-absolute(\n      variables.$textarea-outlined-label-position-y - $label-top-difference,\n      $query: $query\n    );\n\n    // Floating label animation\n    @include floating-label-mixins.shake-animation(\n      $keyframe-suffix,\n      $query: $query\n    );\n    @at-root {\n      @include floating-label-mixins.shake-keyframes(\n        $keyframe-suffix,\n        variables.$textarea-outlined-label-position-y - $label-top-difference,\n        0%,\n        $query: $query\n      );\n    }\n\n    // Resting label position\n    .mdc-floating-label {\n      @include feature-targeting.targets($feat-structure) {\n        top: $label-top;\n      }\n    }\n\n    .mdc-text-field__resizer {\n      @include feature-targeting.targets($feat-structure) {\n        min-height: $textfield-height;\n      }\n    }\n\n    .mdc-text-field__input {\n      @include feature-targeting.targets($feat-structure) {\n        margin-top: $margin-top;\n        margin-bottom: $margin-bottom;\n      }\n    }\n\n    &.mdc-text-field--with-internal-counter {\n      .mdc-text-field__input {\n        // Space between textarea and internal counter should not be affected\n        @include _textarea-input-with-internal-counter($query);\n      }\n    }\n  }\n}\n\n///\n/// Sets the minimum number of rows for a textarea a textarea may be resized to.\n///\n/// For IE11 this mixin can be used instead of the rows attribute.\n///\n/// @param {Number} $rows - The minimum number of rows for a textarea.\n/// @param {Number} $line-height - The line-height of the textarea.\n///\n@mixin textarea-min-rows(\n  $rows,\n  $line-height: variables.$textarea-line-height,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-text-field__input {\n    @include feature-targeting.targets($feat-structure) {\n      min-height: $rows * $line-height;\n    }\n  }\n}\n\n///\n/// Sets height of default text field variant.\n///\n/// @param {Number} $height\n/// @param {Number} $minimum-height-for-filled-label Sets the minimum height for\n///     filled textfields at which to allow floating labels.\n/// @access public\n///\n@mixin height(\n  $height,\n  $minimum-height-for-filled-label: variables.$minimum-height-for-filled-label,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    height: $height;\n  }\n\n  @if $height < $minimum-height-for-filled-label {\n    @include _filled-no-label($query: $query);\n  }\n}\n\n///\n/// Sets height of outlined text field variant (Excluding outlined text field with leading icon).\n///\n/// @param {Number} $height\n/// @param {String} $keyframe-suffix - Optional suffix to use for generated\n///     floating label keyframes\n/// @access public\n///\n@mixin outlined-height(\n  $height,\n  $keyframe-suffix: text-field-outlined-#{$height},\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $positionY: variables.get-outlined-label-position-y($height);\n\n  // Floating label position\n  @include notched-outline-mixins.floating-label-float-position-absolute(\n    $positionY,\n    $query: $query\n  );\n\n  // Floating label animation\n  @include floating-label-mixins.shake-animation(\n    $keyframe-suffix,\n    $query: $query\n  );\n  @at-root {\n    @include floating-label-mixins.shake-keyframes(\n      $keyframe-suffix,\n      $positionY,\n      $query: $query\n    );\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    height: $height;\n  }\n}\n\n///\n/// Sets height of outlined text field with leading icon variant.\n///\n/// @param {Number} $height\n/// @param {String} $keyframe-suffix - Optional suffix to use for generated\n///     floating label keyframes\n/// @access public\n///\n@mixin outlined-with-leading-icon-height(\n  $height,\n  $keyframe-suffix: null,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // This extra specificity is needed because textfield applies the below mixin\n  // already to two selectors (outlined + with-leading-icon). To override\n  // them with a new label position and animation, another selector is needed.\n  &.mdc-text-field--outlined {\n    @include _outlined-with-leading-icon-floating-label-position-animation(\n      $height,\n      $keyframe-suffix,\n      $query\n    );\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    height: $height;\n  }\n}\n\n// Mixin that sets the floating label position and animations for a given height.\n// This mixin is separate to allow outlined-with-leading-icon-height() to\n// provide greater specificity over the default mixin that adds styles for\n// outlined with leading icons.\n@mixin _outlined-with-leading-icon-floating-label-position-animation(\n  $height,\n  $keyframe-suffix: text-field-outlined-with-leading-icon-#{$height},\n  $query: feature-targeting.all()\n) {\n  $positionY: variables.get-outlined-label-position-y($height);\n\n  // Floating label position\n  @include notched-outline-mixins.floating-label-float-position-absolute(\n    $positionY,\n    variables.$outlined-with-leading-icon-label-position-x,\n    $query: $query\n  );\n\n  // Floating label animation\n  @include floating-label-mixins.shake-animation(\n    $keyframe-suffix,\n    $query: $query\n  );\n  @at-root {\n    @include floating-label-mixins.shake-keyframes(\n      $keyframe-suffix,\n      $positionY,\n      variables.$outlined-with-leading-icon-label-position-x,\n      $query: $query\n    );\n  }\n\n  $keyframe-suffix-rtl: #{$keyframe-suffix}-rtl;\n  @include rtl.rtl {\n    @include floating-label-mixins.shake-animation(\n      $keyframe-suffix,\n      $query: $query\n    );\n  }\n  @at-root {\n    @include floating-label-mixins.shake-keyframes(\n      $keyframe-suffix-rtl,\n      $positionY,\n      -(variables.$outlined-with-leading-icon-label-position-x),\n      $query: $query\n    );\n  }\n}\n\n///\n/// Sets shape radius of default text field variant.\n///\n/// @param {Number} $radius Shape radius value in `px` or in percentage.\n/// @param {Number} $text-field-height Height of default text field variant. Required only when `$radius` is in\n///     percentage unit and if text field has custom height. Defaults to `variables.$height`.\n/// @param {Boolean} $rtl-reflexive Set to true to flip shape radius in RTL context. Defaults to `false`.\n///\n@mixin shape-radius(\n  $radius,\n  $density-scale: variables.$density-scale,\n  $rtl-reflexive: false,\n  $query: feature-targeting.all()\n) {\n  @if meta.type-of($radius) == 'list' and list.length($radius) > 2 {\n    @error \"mdc-textfield: Invalid radius #{$radius}. Only top-left and top-right corners may be customized.\";\n  }\n\n  $height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  $masked-radius: shape-functions.mask-radius($radius, 1 1 0 0);\n\n  @include shape-mixins.radius(\n    $masked-radius,\n    $rtl-reflexive,\n    $component-height: $height,\n    $query: $query\n  );\n}\n\n@mixin textarea-shape-radius(\n  $radius,\n  $rtl-reflexive: false,\n  $query: feature-targeting.all()\n) {\n  @include notched-outline-mixins.shape-radius(\n    $radius,\n    $rtl-reflexive,\n    $query: $query\n  );\n}\n\n///\n/// Customizes the color of the text entered into an enabled text field.\n/// @param {Color} $color - The desired input text color.\n///\n@mixin ink-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include ink-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the color of the entered text in a disabled text field.\n/// @param {Color} $color - The desired input text color.\n///\n@mixin disabled-ink-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include ink-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the color of the placeholder in an enabled text field.\n/// @param {Color} $color - The desired placeholder text color.\n///\n@mixin placeholder-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include placeholder-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the color of the placeholder in a disabled text field.\n/// @param {Color} $color - The desired placeholder text color.\n///\n@mixin disabled-placeholder-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include placeholder-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the background color of the text field or textarea when enabled.\n/// @param {Color} $color - The desired background color.\n///\n@mixin fill-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include fill-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the background color of the text field or textarea when disabled.\n/// @param {Color} $color - The desired background color.\n///\n@mixin disabled-fill-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include fill-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the text field bottom line color for the filled variant.\n/// @param {Color} $color - The desired bottom line color.\n///\n@mixin bottom-line-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include bottom-line-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the disabled text field bottom line color for the filled variant.\n/// @param {Color} $color - The desired bottom line color.\n///\n@mixin disabled-bottom-line-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include bottom-line-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the hover text field bottom line color for the filled variant.\n/// @param {Color} $color - The desired bottom line color.\n///\n@mixin hover-bottom-line-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include hover-bottom-line-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the color of the default line ripple of the text field.\n/// @param {Color} $color - The desired line ripple color.\n///\n@mixin line-ripple-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include line-ripple-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the text color of the label in an enabled text field.\n/// @param {Color} $color - The desired label text color.\n///\n@mixin label-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include label-ink-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the text color of the label in a disabled text field.\n/// @param {Color} $color - The desired label text color.\n///\n@mixin disabled-label-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include label-ink-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the border color of the outlined text field or textarea.\n/// @param {Color} $color - The desired outline border color.\n///\n@mixin outline-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include notched-outline-mixins.color($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the outline border color when the text field or textarea is hovered.\n/// @param {Color} $color - The desired outline border color.\n///\n@mixin hover-outline-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include hover-outline-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the outline border color when the text field or textarea is focused.\n/// @param {Color} $color - The desired outline border color.\n///\n@mixin focused-outline-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include focused-outline-color_($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the outline border color when the text field or textarea is disabled.\n/// @param {Color} $color - The desired outline border color.\n///\n@mixin disabled-outline-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include notched-outline-mixins.color($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the caret color of the text field or textarea.\n/// @param {Color} $color - The desired caret color.\n///\n@mixin caret-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-text-field__input {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.prop(caret-color, $color);\n    }\n  }\n}\n\n///\n/// Customizes the color of the prefix text for an enabled text field.\n/// @param {Color} $color - The desired prefix text color.\n///\n@mixin prefix-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include _prefix-color($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the color of the prefix text for a disabled text field.\n/// @param {Color} $color - The desired prefix text color.\n///\n@mixin disabled-prefix-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include _prefix-color($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the color of the suffix text for an enabled text field.\n/// @param {Color} $color - The desired suffix text color.\n///\n@mixin suffix-color($color, $query: feature-targeting.all()) {\n  @include if-enabled_ {\n    @include _suffix-color($color, $query: $query);\n  }\n}\n\n///\n/// Customizes the color of the suffix text for a disabled text field.\n/// @param {Color} $color - The desired suffix text color.\n///\n@mixin disabled-suffix-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include _suffix-color($color, $query: $query);\n  }\n}\n\n///\n/// Sets shape radius of outlined text field variant.\n///\n/// @param {Number} $radius Shape radius value in `px` or in percentage.\n/// @param {Number} $text-field-height Height of outlined text field variant. Required only when `$radius` is in\n///     percentage unit and if text field has custom height. Defaults to `variables.$height`.\n/// @param {Boolean} $rtl-reflexive Set to true to flip shape radius in RTL context. Defaults to `false`.\n///\n@mixin outline-shape-radius(\n  $radius,\n  $density-scale: variables.$density-scale,\n  $rtl-reflexive: false,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  .mdc-notched-outline {\n    @include notched-outline-mixins.shape-radius(\n      $radius,\n      $rtl-reflexive,\n      $component-height: $height,\n      $query: $query\n    );\n  }\n\n  $resolved-radius: shape-functions.resolve-radius(\n    $radius,\n    $component-height: $height\n  );\n  $unpacked-radius: shape-functions.unpack-radius($resolved-radius);\n  $top-left-radius: list.nth($unpacked-radius, 1);\n  $top-left-is-custom-prop: custom-properties.is-custom-prop($top-left-radius);\n  $top-left-radius-px: $top-left-radius;\n  @if ($top-left-is-custom-prop) {\n    $top-left-radius-px: custom-properties.get-fallback($top-left-radius);\n  }\n  $top-right-radius: list.nth($unpacked-radius, 2);\n  $top-right-is-custom-prop: custom-properties.is-custom-prop(\n    $top-right-radius\n  );\n\n  @if (\n    $top-left-is-custom-prop or\n      $top-right-is-custom-prop or\n      $top-left-radius-px >\n      notched-outline-variables.$leading-width\n  ) {\n    // The horizontal padding only needs to be overriden from the base padding\n    // if the radius is a custom property, or if the top-left radius is a value\n    // that is large than that default notched outline's leading width.\n    @include _outline-shape-radius-horizontal-padding(\n      $top-left-radius,\n      $top-right-radius,\n      $query: $query\n    );\n\n    + .mdc-text-field-helper-line {\n      @include _outline-shape-radius-horizontal-padding(\n        $top-left-radius,\n        $top-right-radius,\n        $query: $query\n      );\n    }\n\n    // Ensure that leading/trailing icon padding is overriden. Even if the\n    // top left/right isn't a custom property or the leading isn't larger, we\n    // still need to override. The above left/right padding rules have more\n    // specificty than the original leading/trailing icon rules, so we need to\n    // re-apply them.\n    // Additionally, if the top left/right radii _are_ custom properties, we\n    // should use those instead.\n\n    &.mdc-text-field--with-leading-icon {\n      @if ($top-right-is-custom-prop) {\n        @include feature-targeting.targets($feat-structure) {\n          @include rtl.ignore-next-line();\n          padding-left: 0;\n        }\n        @include _apply-outline-shape-padding(\n          padding-right,\n          $top-right-radius,\n          $query: $query\n        );\n\n        @include rtl.rtl {\n          @include _apply-outline-shape-padding(\n            padding-left,\n            $top-right-radius,\n            $query: $query\n          );\n          @include feature-targeting.targets($feat-structure) {\n            @include rtl.ignore-next-line();\n            padding-right: 0;\n          }\n        }\n      } @else {\n        @include _padding-horizontal-with-leading-icon($query);\n      }\n    }\n\n    &.mdc-text-field--with-trailing-icon {\n      @if (\n        $top-left-is-custom-prop or\n          $top-left-radius-px >\n          notched-outline-variables.$leading-width\n      ) {\n        @include _apply-outline-shape-padding(\n          padding-left,\n          $top-left-radius,\n          $add-label-padding: true,\n          $query: $query\n        );\n        @include feature-targeting.targets($feat-structure) {\n          @include rtl.ignore-next-line();\n          padding-right: 0;\n        }\n\n        @include rtl.rtl {\n          @include feature-targeting.targets($feat-structure) {\n            @include rtl.ignore-next-line();\n            padding-left: 0;\n          }\n          @include _apply-outline-shape-padding(\n            padding-right,\n            $top-left-radius,\n            $add-label-padding: true,\n            $query: $query\n          );\n        }\n      } @else {\n        @include _padding-horizontal-with-trailing-icon($query);\n      }\n    }\n\n    &.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {\n      @include _padding-horizontal-with-both-icons($query);\n    }\n  }\n}\n\n@mixin _outline-shape-radius-horizontal-padding(\n  $top-left-radius,\n  $top-right-radius,\n  $query: feature-targeting.all()\n) {\n  @include _apply-outline-shape-padding(\n    padding-left,\n    $top-left-radius,\n    $add-label-padding: true,\n    $query: $query\n  );\n  @include _apply-outline-shape-padding(\n    padding-right,\n    $top-right-radius,\n    $query: $query\n  );\n\n  $top-left-is-custom-prop: custom-properties.is-custom-prop($top-left-radius);\n  $top-left-radius-px: $top-left-radius;\n  @if ($top-left-is-custom-prop) {\n    $top-left-radius-px: custom-properties.get-fallback($top-left-radius);\n  }\n  $top-right-is-custom-prop: custom-properties.is-custom-prop(\n    $top-right-radius\n  );\n  $top-right-radius-px: $top-right-radius;\n  @if ($top-right-is-custom-prop) {\n    $top-right-radius-px: custom-properties.get-fallback($top-right-radius);\n  }\n\n  @if (\n    (\n        $top-left-is-custom-prop and\n          $top-right-is-custom-prop and not\n          custom-properties.are-equal($top-left-radius, $top-right-radius)\n      ) or\n      $top-left-radius-px !=\n      $top-right-radius-px\n  ) {\n    // Normally base horizontal padding doesn't need RTL, but if the values\n    // are different or they are two different custom properties, they need to\n    // be reversed.\n    @include rtl.rtl {\n      @include _apply-outline-shape-padding(\n        padding-right,\n        $top-left-radius,\n        $add-label-padding: true,\n        $query: $query\n      );\n      @include _apply-outline-shape-padding(\n        padding-left,\n        $top-right-radius,\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin _apply-outline-shape-padding(\n  $property,\n  $padding,\n  $add-label-padding: false,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $padding-is-custom-prop: custom-properties.is-custom-prop($padding);\n  $padding-px: $padding;\n  @if ($padding-is-custom-prop) {\n    $padding-px: custom-properties.get-fallback($padding);\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    // The shape should only change the padding if the radius becomes greater\n    // than the default padding. That means we need to add more padding.\n    @if ($padding-px > variables.$padding-horizontal) {\n      // Set a px value if it's greater. This is either the only value (if\n      // we're given an exact value), or an IE11 fallback if we're given a\n      // custom property and the fallback value is greater than the padding.\n      $value: $padding-px;\n      @if ($add-label-padding) {\n        // If this is for the top-left leading, add the notched outline padding\n        // to keep it aligned with the label\n        $value: $padding-px + notched-outline-variables.$padding;\n      }\n\n      @include rtl.ignore-next-line();\n      #{$property}: $value;\n      @if ($padding-is-custom-prop) {\n        // Add an alternate GSS tag b/c this was an IE11 fallback and we're\n        // going to add another property with the var() value\n        /* @alternate */\n      }\n    }\n    @if ($padding-is-custom-prop) {\n      // If it's a custom property, always add it since the value may change\n      // to be greater than the padding at runtime, even if the fallback is\n      // not currently greater than the default padding.\n      $value: custom-properties.create-var($padding);\n      @if ($add-label-padding) {\n        $value: calc(#{$value} + #{notched-outline-variables.$padding});\n      }\n\n      // Interpolation is a workaround for sass/sass#3259.\n      @supports (top: max(#{0%})) {\n        // A max() function makes this runtime dynamic. The padding will be\n        // whichever is greater: the default horizontal padding, or the calculated\n        // custom property plus extra padding.\n        @include rtl.ignore-next-line();\n        #{$property}: max(#{variables.$padding-horizontal}, #{$value});\n      }\n    }\n  }\n}\n\n///\n/// Sets the CSS transition for the floating label's 'float' animation.\n///\n/// @param {Number} $duration-ms - Duration (in ms) of the animation.\n/// @param {String} $timing-function - Optionally overrides the default animation timing function.\n///\n@mixin floating-label-float-transition(\n  $duration-ms,\n  $timing-function: null,\n  $query: feature-targeting.all()\n) {\n  .mdc-floating-label {\n    @include floating-label-mixins.float-transition(\n      $duration-ms,\n      $timing-function,\n      $query: $query\n    );\n  }\n}\n\n///\n/// Sets custom font size of the input.\n///\n/// @param {number} $font-size - Overrides the font size.\n///\n@mixin input-font-size($font-size, $query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  .mdc-text-field__input {\n    @include feature-targeting.targets($feat-typography) {\n      font-size: $font-size;\n    }\n  }\n}\n\n///\n/// Sets custom font family of the input.\n///\n/// @param {String} $font-family - Selected font family.\n///\n@mixin input-font-family($font-family, $query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  .mdc-text-field__input {\n    @include feature-targeting.targets($feat-typography) {\n      font-family: $font-family;\n    }\n  }\n}\n\n// Private mixins\n\n// Base shared styles\n@mixin _base($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // Shape\n  @include shape-radius(variables.$shape-radius, $query: $query);\n\n  // Colors\n  @include label-color(variables.$label, $query: $query);\n  @include ink-color(variables.$ink-color, $query: $query);\n  @include placeholder-color(variables.$placeholder-ink-color, $query: $query);\n  @include caret-color(primary, $query: $query);\n  @include helper-text-mixins.helper-text-color(\n    variables.$helper-text-color,\n    $query: $query\n  );\n  @include character-counter-mixins.character-counter-color(\n    variables.$helper-text-color,\n    $query: $query\n  );\n  @include icon-mixins.leading-icon-color(\n    variables.$icon-color,\n    $query: $query\n  );\n  @include icon-mixins.trailing-icon-color(\n    variables.$icon-color,\n    $query: $query\n  );\n  @include prefix-color(variables.$affix-color, $query: $query);\n  @include suffix-color(variables.$affix-color, $query: $query);\n\n  // Floating Label\n  @include floating-label_($query);\n\n  @include feature-targeting.targets($feat-structure) {\n    // display and align-items are necessary to make the text field participate\n    // in baseline alignment, even though some variants are 'centered'. Those\n    // variants should use the _baseline-center-aligned() mixin\n    display: inline-flex;\n    align-items: baseline;\n    padding: 0 variables.$padding-horizontal;\n    position: relative;\n    box-sizing: border-box;\n    overflow: hidden;\n    /* @alternate */\n    will-change: opacity, transform, color;\n  }\n}\n\n// This mixin adds styles to visually center the text within the text field.\n// Sibling text will align to the baseline and appear centered next to the\n// text field.\n@mixin _baseline-center-aligned($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    // In order for a flexbox container to participate in baseline alignment,\n    // it follows these rules to determine where its baseline is:\n    // https://www.w3.org/TR/css-flexbox-1/#flex-baselines\n    //\n    // In order to avoid leading icons 'controlling' the baseline (since they\n    // are the first child), flexbox will generate a baseline from any child\n    // flex items that participate in baseline alignment.\n    //\n    // Icons are set to \"align-self: center\", while all other children are\n    // aligned to baseline. The next problem is deciding which child is\n    // used to determine the baseline.\n    //\n    // According to spec, the item with the largest distance between its\n    // baseline and the edge of the cross axis is placed flush with that edge,\n    // making it the baseline of the container.\n    // https://www.w3.org/TR/css-flexbox-1/#baseline-participation\n    //\n    // For the filled variant, the pseudo ::before strut is the 'largest'\n    // child since the input has a height of 28px and the strut is 40px. We\n    // can emulate center alignment and force the baseline to use the input\n    // text by making the input the full height of the container and removing\n    // the baseline strut.\n\n    // IE11 does not respect this, and makes the leading icon (if present) the\n    // baseline. This is a gap with IE11 that we have accepted.\n    .mdc-text-field__input {\n      height: 100%;\n    }\n  }\n}\n\n@mixin _padding-horizontal-with-leading-icon($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-property(padding, 0, variables.$padding-horizontal);\n  }\n}\n\n@mixin _padding-horizontal-with-trailing-icon($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-property(padding, variables.$padding-horizontal, 0);\n  }\n}\n\n@mixin _padding-horizontal-with-both-icons($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.ignore-next-line();\n    padding-left: 0;\n    @include rtl.ignore-next-line();\n    padding-right: 0;\n  }\n}\n\n@mixin floating-label_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-floating-label {\n    @include feature-targeting.targets($feat-structure) {\n      top: 50%;\n      transform: translateY(-50%);\n      pointer-events: none;\n    }\n  }\n}\n\n// Filled\n\n@mixin _filled($query: feature-targeting.all()) {\n  // Text Field intentionally omits press ripple, so each state needs to be specified individually.\n  @include ripple-theme.states-base-color(\n    variables.$ink-color,\n    $query: $query,\n    $ripple-target: variables.$ripple-target\n  );\n  @include ripple-theme.states-hover-opacity(\n    ripple-theme.states-opacity(variables.$ink-color, hover),\n    $query: $query,\n    $ripple-target: variables.$ripple-target\n  );\n  @include ripple-theme.states-focus-opacity(\n    ripple-theme.states-opacity(variables.$ink-color, focus),\n    $query: $query,\n    $ripple-target: variables.$ripple-target\n  );\n\n  @include height(variables.$height, $query: $query);\n  @include typography.baseline-top(\n    variables.$filled-baseline-top,\n    $query: $query\n  );\n  @include fill-color(variables.$background, $query: $query);\n  @include bottom-line-color(variables.$bottom-line-idle, $query: $query);\n  @include hover-bottom-line-color(\n    variables.$bottom-line-hover,\n    $query: $query\n  );\n  @include line-ripple-color_(primary, $query: $query);\n  @include _filled-floating-label($query);\n}\n\n@mixin _filled-floating-label($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-floating-label {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-position(left, variables.$label-offset);\n    }\n  }\n\n  @include floating-label-mixins.float-position(\n    variables.$label-position-y,\n    $query: $query\n  );\n}\n\n// Filled variant with no label. This variant centers the text elements and\n// hides the label and is used with there is explicitly no label provided or\n// when the height of the text field is too small for a label to be allowed.\n@mixin _filled-no-label($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include _baseline-center-aligned($query);\n  @include feature-targeting.targets($feat-structure) {\n    .mdc-floating-label {\n      display: none;\n    }\n\n    &::before {\n      // Remove baseline-top strut\n      display: none;\n    }\n  }\n\n  // Safari only\n  @supports (-webkit-hyphens: none) {\n    .mdc-text-field__affix {\n      @include _centered-affix-safari-support($query: $query);\n    }\n  }\n}\n\n// Outlined\n\n@mixin outlined_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include outlined-height(\n    $height: variables.$height,\n    $keyframe-suffix: text-field-outlined,\n    $query: $query\n  );\n  @include _baseline-center-aligned($query: $query);\n  @include outline-color(variables.$outlined-idle-border, $query: $query);\n  @include hover-outline-color(\n    variables.$outlined-hover-border,\n    $query: $query\n  );\n  @include focused-outline-color(primary, $query: $query);\n  @include outline-shape-radius(variables.$shape-radius, $query: $query);\n  @include notched-outline-mixins.notch-offset(\n    notched-outline-variables.$border-width,\n    $query: $query\n  );\n  @include ripple-theme.states-base-color(\n    transparent,\n    $query: $query,\n    $ripple-target: variables.$ripple-target\n  );\n  @include _outlined-floating-label($query);\n\n  @include feature-targeting.targets($feat-structure) {\n    overflow: visible;\n  }\n\n  .mdc-text-field__input {\n    @include feature-targeting.targets($feat-structure) {\n      // TODO(b/154349735): Investigate the neccessity of these styles\n      display: flex;\n      border: none !important; // FF adds unwanted border in HC mode on windows.\n      background-color: transparent;\n    }\n  }\n}\n\n@mixin _outlined-floating-label($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-floating-label {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-position(left, notched-outline-variables.$padding);\n    }\n  }\n}\n\n@mixin _outlined-notched-outline($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    // Force the outline to appear \"above\" the textfield elements, even though\n    // it is absolutely positioned and comes before the input in the DOM. This\n    // is primarily for the textarea scrollbar and resize elements, which may\n    // clip with with outline border.\n    z-index: 1;\n  }\n}\n\n// States\n\n@mixin disabled_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include ink-color_(variables.$disabled-ink-color, $query: $query);\n  @include placeholder-color_(\n    variables.$disabled-placeholder-ink-color,\n    $query: $query\n  );\n  @include label-ink-color_(variables.$disabled-label-color, $query: $query);\n  @include helper-text-mixins.helper-text-color_(\n    variables.$disabled-helper-text-color,\n    $query: $query\n  );\n  @include character-counter-mixins.character-counter-color_(\n    variables.$disabled-helper-text-color,\n    $query: $query\n  );\n  @include icon-mixins.leading-icon-color_(\n    variables.$disabled-icon,\n    $query: $query\n  );\n  @include icon-mixins.trailing-icon-color_(\n    variables.$disabled-icon,\n    $query: $query\n  );\n  @include _prefix-color(variables.$disabled-affix-color, $query: $query);\n  @include _suffix-color(variables.$disabled-affix-color, $query: $query);\n\n  // Mixins that are ok to include since they target variant-specific elements\n  @include bottom-line-color_(variables.$disabled-border, $query: $query);\n  @include notched-outline-mixins.color(\n    variables.$outlined-disabled-border,\n    $query: $query\n  );\n\n  @include dom.forced-colors-mode {\n    @include placeholder-color_(GrayText, $query: $query);\n    @include label-ink-color_(GrayText, $query: $query);\n    @include helper-text-mixins.helper-text-color_(GrayText, $query: $query);\n    @include character-counter-mixins.character-counter-color_(\n      GrayText,\n      $query: $query\n    );\n    @include icon-mixins.leading-icon-color_(GrayText, $query: $query);\n    @include icon-mixins.trailing-icon-color_(GrayText, $query: $query);\n    @include _prefix-color(GrayText, $query: $query);\n    @include _suffix-color(GrayText, $query: $query);\n\n    // Mixins that are ok to include since they target variant-specific elements\n    @include bottom-line-color_(GrayText, $query: $query);\n    @include notched-outline-mixins.color(GrayText, $query: $query);\n  }\n\n  @include dom.forced-colors-mode($exclude-ie11: true) {\n    .mdc-text-field__input {\n      @include feature-targeting.targets($feat-structure) {\n        background-color: Window;\n      }\n    }\n\n    .mdc-floating-label {\n      @include feature-targeting.targets($feat-structure) {\n        z-index: 1;\n      }\n    }\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    pointer-events: none;\n  }\n\n  .mdc-floating-label {\n    @include feature-targeting.targets($feat-structure) {\n      cursor: default;\n    }\n  }\n}\n\n@mixin _disabled-input($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    // disabled inputs should still allow users to interact with them to select\n    // text and scroll for textareas\n    pointer-events: auto;\n  }\n}\n\n@mixin _disabled-filled($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include fill-color_(variables.$disabled-background, $query: $query);\n\n  #{variables.$ripple-target} {\n    @include feature-targeting.targets($feat-structure) {\n      // prevent ripple from displaying on hover when some interactible\n      // elements like input and resize handles are hovered\n      display: none;\n    }\n  }\n}\n\n@mixin invalid_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include hover-bottom-line-color(variables.$error, $query: $query);\n  @include line-ripple-color(variables.$error, $query: $query);\n  @include label-color(variables.$error, $query: $query);\n  @include helper-text-mixins.helper-text-validation-color(\n    variables.$error,\n    $query: $query\n  );\n  @include caret-color(variables.$error, $query: $query);\n  @include icon-mixins.trailing-icon-color(variables.$error, $query: $query);\n\n  // Mixins that are ok to include since they target variant-specific elements\n  @include bottom-line-color(variables.$error, $query: $query);\n  @include outline-color(variables.$error, $query: $query);\n  @include hover-outline-color(variables.$error, $query: $query);\n  @include focused-outline-color(variables.$error, $query: $query);\n\n  + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {\n    @include feature-targeting.targets($feat-structure) {\n      opacity: 1;\n    }\n  }\n}\n\n@mixin focused_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include label-color(variables.$focused-label-color, $query: $query);\n\n  // Mixins that are ok to include since they target variant-specific elements\n  @include notched-outline-mixins.stroke-width(\n    variables.$outlined-stroke-width,\n    $query: $query\n  );\n\n  + .mdc-text-field-helper-line\n    .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {\n    @include feature-targeting.targets($feat-structure) {\n      opacity: 1;\n    }\n  }\n}\n\n@mixin _focused-outlined($query: feature-targeting.all()) {\n  @include notched-outline-mixins.notch-offset(\n    variables.$outlined-stroke-width,\n    $query: $query\n  );\n}\n\n@mixin _focused-outlined-textarea($query: feature-targeting.all()) {\n  @include notched-outline-mixins.notch-offset(0, $query: $query);\n}\n\n// Icons\n\n@mixin with-leading-icon_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  $icon-padding: icon-variables.$leading-icon-padding-left +\n    icon-variables.$icon-size + icon-variables.$leading-icon-padding-right;\n\n  .mdc-floating-label {\n    @include _truncate-floating-label-max-width($icon-padding, $query: $query);\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-position(left, $icon-padding);\n    }\n  }\n\n  $truncation: $icon-padding + variables.$padding-horizontal;\n\n  .mdc-floating-label--float-above {\n    @include _truncate-floating-label-floated-max-width(\n      $truncation,\n      $query: $query\n    );\n  }\n}\n\n@mixin _with-trailing-icon($query: feature-targeting.all()) {\n  $truncation: icon-variables.$trailing-icon-padding-left +\n    icon-variables.$icon-size + icon-variables.$trailing-icon-padding-right +\n    variables.$label-offset;\n\n  .mdc-floating-label {\n    @include _truncate-floating-label-max-width($truncation, $query: $query);\n  }\n\n  .mdc-floating-label--float-above {\n    @include _truncate-floating-label-floated-max-width(\n      $truncation,\n      $query: $query\n    );\n  }\n}\n\n@mixin _with-leading-and-trailing-icon($query: feature-targeting.all()) {\n  $leading-icon: icon-variables.$leading-icon-padding-left +\n    icon-variables.$icon-size + icon-variables.$leading-icon-padding-right;\n  $trailing-icon: icon-variables.$trailing-icon-padding-left +\n    icon-variables.$icon-size + icon-variables.$trailing-icon-padding-right;\n  $truncation: $leading-icon + $trailing-icon;\n\n  .mdc-floating-label {\n    @include _truncate-floating-label-max-width($truncation, $query: $query);\n  }\n\n  .mdc-floating-label--float-above {\n    @include _truncate-floating-label-floated-max-width(\n      $truncation,\n      $query: $query\n    );\n  }\n}\n\n@mixin outlined-with-leading-icon_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // Resting label position\n  $icon-padding: icon-variables.$leading-icon-padding-left +\n    icon-variables.$icon-size + icon-variables.$leading-icon-padding-right;\n  $left-spacing: $icon-padding - notched-outline-variables.$leading-width;\n\n  .mdc-floating-label {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-position(left, $left-spacing);\n    }\n  }\n\n  // Notch width\n  $notch-truncation: $icon-padding + notched-outline-variables.$leading-width;\n  @include _truncate-notched-outline-max-width(\n    $notch-truncation,\n    $query: $query\n  );\n\n  // Floating label position and animation\n  @include _outlined-with-leading-icon-floating-label-position-animation(\n    $height: variables.$height,\n    $keyframe-suffix: text-field-outlined-leading-icon,\n    $query: $query\n  );\n}\n\n///\n/// Applied to the outlined text field with a trailing icon\n///\n@mixin _outlined-with-trailing-icon($query: feature-targeting.all()) {\n  // Resting label position\n  $icon-padding: icon-variables.$trailing-icon-padding-left +\n    icon-variables.$icon-size + icon-variables.$trailing-icon-padding-right;\n  // Notch width\n  $notch-truncation: $icon-padding + notched-outline-variables.$leading-width;\n\n  @include _truncate-notched-outline-max-width(\n    $notch-truncation,\n    $query: $query\n  );\n}\n\n///\n/// Truncates the max-width of the notched outline by the given amount\n///\n/// @param {Number} $truncation - Amount to truncate the notched outline max-width\n///\n@mixin _truncate-notched-outline-max-width(\n  $truncation,\n  $query: feature-targeting.all()\n) {\n  @include notched-outline-mixins.notch-max-width(\n    calc(100% - #{$truncation}),\n    $query: $query\n  );\n}\n\n///\n/// Truncates the max-width of the floating label by the given amount\n///\n/// @param {Number} $truncation - Amount to truncate the floating label max-width\n///\n@mixin _truncate-floating-label-max-width(\n  $truncation,\n  $query: feature-targeting.all()\n) {\n  @include floating-label-mixins.max-width(\n    calc(100% - #{$truncation}),\n    $query: $query\n  );\n}\n\n///\n/// Truncates the max-width of the floating label by the given amount while scaling by the given scale value\n///\n/// @param {Number} $truncation - Amount to truncate the floating label max-width\n///\n@mixin _truncate-floating-label-floated-max-width(\n  $truncation,\n  $query: feature-targeting.all()\n) {\n  $scale: floating-label-variables.$float-scale;\n  @include floating-label-mixins.max-width(\n    calc(100% / #{$scale} - #{$truncation} / #{$scale}),\n    $query: $query\n  );\n}\n\n// Textarea\n\n@mixin textarea_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  @include _textarea-floating-label($query);\n\n  @include feature-targeting.targets($feat-structure) {\n    flex-direction: column;\n    align-items: center;\n    width: auto;\n    height: auto;\n    padding: 0; // see below for explanation\n  }\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: none;\n  }\n}\n\n@mixin _textarea-resizer($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    align-self: stretch;\n    display: inline-flex;\n    flex-direction: column;\n    flex-grow: 1;\n    max-height: 100%;\n    max-width: 100%;\n    min-height: variables.$height;\n    // stylelint-disable declaration-block-no-duplicate-properties --\n    // TODO: document why this disable is neccessary\n\n    // 'stretch' is the preferred rule here. It will allow the textarea to grow\n    // to the min/max width of the container, but if an explicit width is set,\n    // it cannot be resized horizontally.\n    // Stretch is still a working draft. Chrome and Firefox have it implemented\n    // with 'available' prefixes. fit-content is another good target for\n    // Safari since it works in almost all use cases except when an explicit\n    // width is set (the user can make the textarea smaller than the container).\n    // None of this matters for IE11, which doesn't support resize.\n    min-width: fit-content;\n    /* @alternate */\n    min-width: -moz-available;\n    /* @alternate */\n    min-width: -webkit-fill-available;\n    // stylelint-enable declaration-block-no-duplicate-properties\n    overflow: hidden;\n    resize: both;\n  }\n}\n\n@mixin _textarea-filled-resizer($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  // Shift the resizer element up by a margin amount to make space for the\n  // resize handle. For filled elements, the resize handle directly touches\n  // the bottom line and is hard to see.\n  // Using a margin affects the width and positioning of the overall component\n  // and underlying textarea, which is why a transform is used instead.\n  $y: -1 * variables.$textarea-input-handle-margin;\n\n  @include feature-targeting.targets($feat-structure) {\n    transform: translateY($y);\n  }\n}\n\n@mixin _textarea-filled-resizer-children($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  // See above. After shifting the resize wrapper element, all of its children\n  // should be shifted in the opposite direction (down) to compensate.\n  $y: variables.$textarea-input-handle-margin;\n\n  @include feature-targeting.targets($feat-structure) {\n    transform: translateY($y);\n  }\n}\n\n@mixin _textarea-outlined-resizer($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  // Shift the resizer element left/up by a margin amount to make space for the\n  // resize handle. For outlined elements, the resize handle directly touches\n  // the outline and is hard to see.\n  // Using a margin affects the width and positioning of the overall component\n  // and underlying textarea, which is why a transform is used instead.\n  $x: -1 * variables.$textarea-input-handle-margin;\n  $y: -1 * variables.$textarea-input-handle-margin;\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.ignore-next-line();\n    transform: translateX($x) translateY($y);\n\n    @include rtl.rtl {\n      // Flip the horizontal shifting direction for RTL\n      @include rtl.ignore-next-line();\n      transform: translateX(-1 * $x) translateY($y);\n    }\n  }\n}\n\n@mixin _textarea-outlined-resizer-children($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  // See above. After shifting the resize wrapper element, all of its children\n  // should be shifted in the opposite direction (right and down) to compensate.\n  $x: variables.$textarea-input-handle-margin;\n  $y: variables.$textarea-input-handle-margin;\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.ignore-next-line();\n    transform: translateX($x) translateY($y);\n\n    @include rtl.rtl {\n      // Flip the horizontal shifting direction for RTL\n      @include rtl.ignore-next-line();\n      transform: translateX(-1 * $x) translateY($y);\n    }\n  }\n}\n\n@mixin _textarea-floating-label($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // Resting label position\n  .mdc-floating-label {\n    @include feature-targeting.targets($feat-structure) {\n      top: variables.$textarea-label-top;\n    }\n\n    // Resets center aligning the floating label.\n    &:not(.mdc-floating-label--float-above) {\n      @include feature-targeting.targets($feat-structure) {\n        transform: none;\n      }\n    }\n  }\n}\n\n@mixin _textarea-input($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include feature-targeting.targets($feat-structure) {\n    flex-grow: 1;\n    height: auto;\n    min-height: variables.$textarea-line-height;\n    overflow-x: hidden; // https://bugzilla.mozilla.org/show_bug.cgi?id=33654\n    overflow-y: auto;\n    box-sizing: border-box;\n    resize: none;\n    // Textarea has horizontal padding instead of the container. This allows the\n    // resize handle to extend to the edge of the container.\n    padding: 0 variables.$padding-horizontal;\n  }\n\n  @include feature-targeting.targets($feat-typography) {\n    line-height: variables.$textarea-line-height;\n  }\n}\n\n@mixin _textarea-internal-counter($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include typography.baseline-bottom(\n    variables.$textarea-internal-counter-baseline-bottom,\n    $query: $query\n  );\n  @include feature-targeting.targets($feat-structure) {\n    align-self: flex-end;\n    // Needed since padding is on the textarea and not the container\n    padding: 0 variables.$padding-horizontal;\n\n    &::before {\n      // Remove baseline-top\n      display: none;\n    }\n  }\n}\n\n@mixin _textarea-input-with-internal-counter($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-bottom: variables.$textarea-internal-counter-input-margin-bottom;\n  }\n}\n\n@mixin _textarea-filled($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    &::before {\n      // <textarea> does not align to baseline when it does not have a value,\n      // unlike <input>, so we have to use padding to fake it instead\n      display: none;\n    }\n  }\n\n  // Floating label position\n  @include floating-label-mixins.float-position(\n    variables.$textarea-filled-label-position-y,\n    $query: $query\n  );\n\n  // Floating label animation\n  @include floating-label-mixins.shake-animation(\n    textarea-filled,\n    $query: $query\n  );\n  @at-root {\n    @include floating-label-mixins.shake-keyframes(\n      textarea-filled,\n      variables.$textarea-filled-label-position-y,\n      0%,\n      $query: $query\n    );\n  }\n}\n\n@mixin _textarea-filled-input($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-top: variables.$textarea-filled-input-margin-top;\n    margin-bottom: variables.$textarea-filled-input-margin-bottom;\n  }\n}\n\n@mixin _textarea-filled-no-label-input($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-top: variables.$textarea-filled-no-label-input-margin-top;\n    margin-bottom: variables.$textarea-filled-no-label-input-margin-bottom;\n  }\n}\n\n@mixin _textarea-outlined($query: feature-targeting.all()) {\n  @include notched-outline-mixins.notch-offset(0, $query: $query);\n\n  // Floating label position\n  @include notched-outline-mixins.floating-label-float-position-absolute(\n    variables.$textarea-outlined-label-position-y,\n    $query: $query\n  );\n\n  // Floating label animation\n  @include floating-label-mixins.shake-animation(\n    textarea-outlined,\n    $query: $query\n  );\n  @at-root {\n    @include floating-label-mixins.shake-keyframes(\n      textarea-outlined,\n      variables.$textarea-outlined-label-position-y,\n      0%,\n      $query: $query\n    );\n  }\n}\n\n@mixin _textarea-outlined-floating-label($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    top: variables.$textarea-outlined-label-top;\n  }\n}\n\n@mixin _textarea-outlined-input($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-top: variables.$textarea-outlined-input-margin-top;\n    margin-bottom: variables.$textarea-outlined-input-margin-bottom;\n  }\n}\n\n// Text, Prefix and Suffix\n\n// Common styles for the text of the text field, including the prefix, suffix,\n// and input.\n@mixin _text($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // Exclude setting line-height to keep caret (text cursor) same height as the input text in iOS browser.\n  @include typography.typography(\n    subtitle1,\n    $exclude-props: (line-height),\n    $query: $query\n  );\n  @include feature-targeting.targets($feat-structure) {\n    height: variables.$input-height;\n  }\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: animation.standard(opacity, 150ms);\n  }\n}\n\n@mixin _input($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include _text($query: $query);\n  @include feature-targeting.targets($feat-structure) {\n    width: 100%;\n    min-width: 0; // Fixes flex issues on Firefox\n    border: none;\n    border-radius: 0;\n    background: none;\n    appearance: none;\n    padding: 0;\n\n    // Remove built-in trailing clear icon on IE11. IE vendor prefixes cannot\n    // be combined with other vendor prefixes like the webkit one below.\n    &::-ms-clear {\n      display: none;\n    }\n\n    // Remove built-in datepicker icon on Chrome\n    &::-webkit-calendar-picker-indicator {\n      display: none;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    // Remove red outline on firefox\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n}\n\n@mixin _input-placeholder($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: animation.standard(opacity, 67ms);\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    opacity: 0;\n  }\n}\n\n@mixin _input-placeholder-visible($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-animation) {\n    transition-delay: 40ms;\n    transition-duration: 110ms;\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    opacity: 1;\n  }\n}\n\n@mixin _affix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include _text($query: $query);\n  @include feature-targeting.targets($feat-structure) {\n    opacity: 0;\n    white-space: nowrap;\n  }\n}\n\n// TODO(b/155467610): Remove when Safari supports baseline alignment\n// https://github.com/material-components/material-components-web/issues/5879\n@mixin _centered-affix-safari-support($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    align-items: center;\n    align-self: center;\n    display: inline-flex;\n    height: 100%;\n  }\n}\n\n@mixin _affix-visible($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    opacity: 1;\n  }\n}\n\n@mixin _prefix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-box(padding, right, variables.$prefix-padding);\n  }\n}\n\n@mixin _prefix-end-aligned($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-box(\n      padding,\n      right,\n      variables.$prefix-end-aligned-padding\n    );\n  }\n}\n\n@mixin _suffix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-box(padding, left, variables.$suffix-padding);\n  }\n}\n\n@mixin _suffix-end-aligned($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-box(\n      padding,\n      left,\n      variables.$suffix-end-aligned-padding\n    );\n  }\n}\n\n// End aligned\n@mixin end-aligned_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-text-field__input {\n    @include feature-targeting.targets($feat-structure) {\n      // IE11 does not support text-align: end\n      @include rtl.ignore-next-line();\n      text-align: right;\n    }\n\n    @include rtl.rtl {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.ignore-next-line();\n        text-align: left;\n      }\n    }\n  }\n}\n\n// Forces input, prefix, and suffix to be LTR when in an RTL environment. Other\n// elements such as labels and icons will remain RTL.\n@mixin _ltr-text($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.rtl {\n      .mdc-text-field__input,\n      .mdc-text-field__affix {\n        @include rtl.ignore-next-line();\n        direction: ltr;\n      }\n\n      .mdc-text-field__affix--prefix {\n        @include rtl.ignore-next-line();\n        padding-left: 0;\n        @include rtl.ignore-next-line();\n        padding-right: variables.$prefix-padding;\n      }\n\n      .mdc-text-field__affix--suffix {\n        @include rtl.ignore-next-line();\n        padding-left: variables.$suffix-padding;\n        @include rtl.ignore-next-line();\n        padding-right: 0;\n      }\n\n      // Need to specify an order for all elements since icons maintain their\n      // original positions. We can't just reverse the container.\n      .mdc-text-field__icon--leading {\n        order: 1;\n      }\n\n      .mdc-text-field__affix--suffix {\n        order: 2;\n      }\n\n      .mdc-text-field__input {\n        order: 3;\n      }\n\n      .mdc-text-field__affix--prefix {\n        order: 4;\n      }\n\n      .mdc-text-field__icon--trailing {\n        order: 5;\n      }\n    }\n  }\n}\n\n// Forces input, prefix, and suffix that are already forced to LTR to also be\n// end-aligned. This mixin should be used alongside the styles provided in\n// _ltr-text().\n@mixin _ltr-text-end-aligned($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.rtl {\n      .mdc-text-field__input {\n        // IE11 does not support text-align: end, so we need to duplicate\n        // the LTR end-aligned style here.\n        @include rtl.ignore-next-line();\n        text-align: right;\n      }\n\n      .mdc-text-field__affix--prefix {\n        // padding-left: 0 provided by _ltr-text mixin\n        @include rtl.ignore-next-line();\n        padding-right: variables.$prefix-end-aligned-padding;\n      }\n\n      .mdc-text-field__affix--suffix {\n        @include rtl.ignore-next-line();\n        padding-left: variables.$suffix-end-aligned-padding;\n        // padding-right: 0 provided by _ltr-text mixin\n      }\n    }\n  }\n}\n\n// Customization\n\n@mixin ink-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-text-field__input {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.prop(color, $color);\n    }\n  }\n}\n\n@mixin placeholder-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    .mdc-text-field__input {\n      @include placeholder-selector_ {\n        @include theme.prop(color, $color);\n      }\n    }\n  }\n}\n\n@mixin fill-color_(\n  $color,\n  $query: feature-targeting.all(),\n  $addAlternate: false\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @if ($addAlternate) {\n      /* @alternate */\n    }\n    @include theme.prop(background-color, $color);\n  }\n}\n\n@mixin bottom-line-color_($color, $query: feature-targeting.all()) {\n  .mdc-line-ripple {\n    @include line-ripple-mixins.inactive-color($color, $query: $query);\n  }\n}\n\n@mixin hover-bottom-line-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  &:hover .mdc-line-ripple {\n    @include line-ripple-mixins.inactive-color($color, $query: $query);\n  }\n}\n\n@mixin line-ripple-color_($color, $query: feature-targeting.all()) {\n  .mdc-line-ripple {\n    @include line-ripple-mixins.active-color($color, $query: $query);\n  }\n}\n\n@mixin hover-outline-color_($color, $query: feature-targeting.all()) {\n  &:not(.mdc-text-field--focused):hover {\n    .mdc-notched-outline {\n      @include notched-outline-mixins.color($color, $query: $query);\n    }\n  }\n}\n\n@mixin focused-outline-color_($color, $query: feature-targeting.all()) {\n  &.mdc-text-field--focused {\n    @include notched-outline-mixins.color($color, $query: $query);\n  }\n}\n\n@mixin label-ink-color_($color, $query: feature-targeting.all()) {\n  .mdc-floating-label {\n    @include floating-label-mixins.ink-color($color, $query: $query);\n  }\n}\n\n@mixin _prefix-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    .mdc-text-field__affix--prefix {\n      @include theme.prop(color, $color);\n    }\n  }\n}\n\n@mixin _suffix-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    .mdc-text-field__affix--suffix {\n      @include theme.prop(color, $color);\n    }\n  }\n}\n\n// Selectors\n\n@mixin placeholder-selector_ {\n  // GSS will combine selectors with the same content, and some browsers have a\n  // CSS quirk where it drops a rule if it does not recognize one of the\n  // selectors.\n  // To avoid GSS combining the ::placeholder and :-ms-input-placeholder\n  // selectors, we wrap them in `@media all`.\n  // TODO(b/142329051)\n  @media all {\n    // ::placeholder needs to be wrapped because IE11 will drop other selectors\n    // with the same content\n    &::placeholder {\n      @content;\n    }\n  }\n\n  @media all {\n    // :-ms-input-placeholder needs to be wrapped because Firefox will drop\n    // other selectors with the same content\n    &:-ms-input-placeholder {\n      @content;\n    }\n  }\n}\n\n// State qualifiers\n\n///\n/// Helps style the text-field only when it's enabled.\n/// @access private\n///\n@mixin if-enabled_ {\n  &:not(.mdc-text-field--disabled) {\n    @content;\n  }\n}\n\n///\n/// Helps style the text-field only when it's disabled.\n/// @access private\n///\n@mixin if-disabled_ {\n  &.mdc-text-field--disabled {\n    @content;\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/animation/animation';\n@use '@material/animation/variables';\n@use '@material/theme/theme';\n@use '@material/typography/typography';\n@use '@material/feature-targeting/feature-targeting';\n\n// Public mixins\n\n@mixin helper-text-core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // postcss-bem-linter: define text-field-helper-text\n\n  .mdc-text-field-helper-text {\n    @include typography.typography(caption, $query: $query);\n    @include typography.text-baseline($top: 16px, $query: $query);\n\n    @include feature-targeting.targets($feat-structure) {\n      margin: 0;\n      opacity: 0;\n      will-change: opacity;\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      transition: animation.standard(opacity, 150ms);\n    }\n  }\n\n  .mdc-text-field-helper-text--persistent {\n    @include feature-targeting.targets($feat-animation) {\n      transition: none;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      opacity: 1;\n      will-change: initial;\n    }\n  }\n\n  // postcss-bem-linter: end\n}\n\n///\n/// Customizes the color of the helper text following an enabled text-field.\n/// @param {Color} $color - The desired helper text color.\n///\n@mixin helper-text-color($color, $query: feature-targeting.all()) {\n  &:not(.mdc-text-field--disabled) {\n    @include helper-text-color_($color, $query);\n  }\n}\n\n///\n/// Customizes the color of the helper text following a disabled text-field.\n/// @param {Color} $color - The desired helper text color.\n///\n@mixin disabled-helper-text-color($color, $query: feature-targeting.all()) {\n  &.mdc-text-field--disabled {\n    @include helper-text-color_($color, $query);\n  }\n}\n\n@mixin helper-text-validation-color($color, $query: feature-targeting.all()) {\n  &:not(.mdc-text-field--disabled) {\n    @include helper-text-validation-color_($color, $query);\n  }\n}\n\n// Private mixins\n\n@mixin helper-text-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin helper-text-validation-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  &.mdc-text-field--invalid\n    + .mdc-text-field-helper-line\n    .mdc-text-field-helper-text--validation-msg {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n","//\n// Copyright 2019 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/theme/theme';\n@use '@material/rtl/rtl';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/typography/typography';\n\n// Public mixins\n\n@mixin character-counter-core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // postcss-bem-linter: define text-field-character-counter\n\n  .mdc-text-field-character-counter {\n    @include typography.typography(caption, $query: $query);\n    @include typography.text-baseline($top: 16px, $query: $query);\n\n    @include feature-targeting.targets($feat-structure) {\n      // Keep flex item align to trailing side on absence of helper text.\n      @include rtl.reflexive-box(margin, left, auto);\n      @include rtl.reflexive-box(padding, left, 16px);\n\n      white-space: nowrap;\n    }\n  }\n\n  // postcss-bem-linter: end\n}\n\n///\n/// Customizes the color of the character counter associated with an enabled text field.\n/// @param {Color} $color - The desired character counter color.\n///\n@mixin character-counter-color($color, $query: feature-targeting.all()) {\n  &:not(.mdc-text-field--disabled) {\n    @include character-counter-color_($color, $query);\n  }\n}\n\n///\n/// Customizes the color of the character counter associated with a disabled text field.\n/// @param {Color} $color - The desired character counter color.\n///\n@mixin disabled-character-counter-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  &.mdc-text-field--disabled {\n    @include character-counter-color_($color, $query);\n  }\n}\n\n@mixin character-counter-position(\n  $xOffset,\n  $yOffset,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-text-field-character-counter {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-position(right, $xOffset);\n      position: absolute;\n      bottom: $yOffset;\n    }\n  }\n}\n\n// Private mixins\n\n@mixin character-counter-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  // Character counter is placed inside mdc-textfield element (for textarea variant) or\n  // inside helper line which is sibling to mdc-textfield.\n  .mdc-text-field-character-counter,\n  + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use '@material/feature-targeting/feature-targeting';\n@use './variables';\n\n// Public mixins\n\n@mixin icon-core-styles($query: feature-targeting.all()) {\n  .mdc-text-field__icon {\n    @include icon_($query: $query);\n\n    svg {\n      @include _icon-svg($query: $query);\n    }\n  }\n\n  .mdc-text-field__icon--leading {\n    @include leading-icon_($query: $query);\n  }\n\n  .mdc-text-field__icon--trailing {\n    @include trailing-icon_($query: $query);\n  }\n}\n\n///\n/// Customizes the color for the leading icon in an enabled text-field.\n/// @param {Color} $color - The desired icon color.\n///\n@mixin leading-icon-color($color, $query: feature-targeting.all()) {\n  &:not(.mdc-text-field--disabled) {\n    @include leading-icon-color_($color, $query);\n  }\n}\n\n///\n/// Customizes the color for the trailing icon in an enabled text-field.\n/// @param {Color} $color - The desired icon color.\n///\n@mixin trailing-icon-color($color, $query: feature-targeting.all()) {\n  &:not(.mdc-text-field--disabled) {\n    @include trailing-icon-color_($color, $query);\n  }\n}\n\n///\n/// Customizes the color for the leading/trailing icons in a disabled text-field.\n/// @param {Color} $color - The desired icon color.\n///\n@mixin disabled-icon-color($color, $query: feature-targeting.all()) {\n  &.mdc-text-field--disabled {\n    @include leading-icon-color_($color, $query);\n    @include trailing-icon-color_($color, $query);\n  }\n}\n\n/// Sets the size of the leading and trailing icons.\n///\n/// @param {Number} $size - the size of the icon in px\n@mixin size($size, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    .mdc-text-field__icon {\n      font-size: $size;\n    }\n  }\n}\n\n// Private mixins\n\n@mixin icon_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-structure) {\n    align-self: center;\n    cursor: pointer;\n  }\n\n  &:not([tabindex]),\n  &[tabindex='-1'] {\n    @include feature-targeting.targets($feat-color) {\n      cursor: default;\n      pointer-events: none;\n    }\n  }\n}\n\n@mixin _icon-svg($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    // SVG children can cause misalignment when displayed as inline since\n    // line-height will be inherited and cause additional vertical space.\n    // Setting the display to block prevents this.\n    display: block;\n  }\n}\n\n@mixin leading-icon_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-property(\n      margin,\n      variables.$leading-icon-padding-left,\n      variables.$leading-icon-padding-right\n    );\n  }\n}\n\n@mixin trailing-icon_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    $padding: math.div(variables.$touch-target-size - variables.$icon-size, 2);\n    $left-margin: variables.$trailing-icon-padding-left - $padding;\n    $right-margin: variables.$trailing-icon-padding-right - $padding;\n\n    padding: $padding;\n    @include rtl.reflexive-property(margin, $left-margin, $right-margin);\n  }\n}\n\n@mixin leading-icon-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-text-field__icon--leading {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin trailing-icon-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-text-field__icon--trailing {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:math';\n@use 'sass:color';\n@use '@material/density/variables' as density-variables;\n@use '@material/floating-label/variables' as floating-label-variables;\n@use '@material/notched-outline/variables' as notched-outline-variables;\n@use '@material/theme/theme-color';\n\n///\n/// Returns outlined text field floating label position for given height.\n///\n/// @todo Instead of adjusting `$positionY` with label box height that might change based on floating label font size\n///     wrap label in a child element to apply `transitionY(-50%)` to automatically offset based on box height.\n///\n@function get-outlined-label-position-y($text-field-height) {\n  @return math.div($text-field-height, 2) +\n    math.div(notched-outline-variables.$label-box-height, 2);\n}\n\n$error: error !default;\n$disabled-border: rgba(theme-color.prop-value(on-surface), 0.06) !default;\n$disabled-icon: rgba(theme-color.prop-value(on-surface), 0.3) !default;\n$bottom-line-hover: rgba(theme-color.prop-value(on-surface), 0.87) !default;\n$bottom-line-idle: rgba(theme-color.prop-value(on-surface), 0.42) !default;\n$label: rgba(theme-color.prop-value(on-surface), 0.6) !default;\n\n$ink-color: rgba(theme-color.prop-value(on-surface), 0.87) !default;\n$helper-text-color: rgba(theme-color.prop-value(on-surface), 0.6) !default;\n$icon-color: rgba(theme-color.prop-value(on-surface), 0.54) !default;\n$focused-label-color: rgba(theme-color.prop-value(primary), 0.87) !default;\n$placeholder-ink-color: rgba(theme-color.prop-value(on-surface), 0.54) !default;\n$affix-color: rgba(theme-color.prop-value(on-surface), 0.6) !default;\n\n$disabled-label-color: rgba(theme-color.prop-value(on-surface), 0.38) !default;\n$disabled-ink-color: rgba(theme-color.prop-value(on-surface), 0.38) !default;\n$disabled-placeholder-ink-color: rgba(\n  theme-color.prop-value(on-surface),\n  0.38\n) !default;\n$disabled-helper-text-color: rgba(\n  theme-color.prop-value(on-surface),\n  0.38\n) !default;\n$disabled-affix-color: rgba(theme-color.prop-value(on-surface), 0.38) !default;\n\n$background: color.mix(\n  theme-color.prop-value(on-surface),\n  theme-color.prop-value(surface),\n  4%\n) !default;\n$disabled-background: color.mix(\n  theme-color.prop-value(on-surface),\n  theme-color.prop-value(surface),\n  2%\n) !default;\n$secondary-text: rgba(theme-color.prop-value(on-surface), 0.6) !default;\n\n$outlined-idle-border: rgba(theme-color.prop-value(on-surface), 0.38) !default;\n$outlined-disabled-border: rgba(\n  theme-color.prop-value(on-surface),\n  0.06\n) !default;\n$outlined-hover-border: rgba(theme-color.prop-value(on-surface), 0.87) !default;\n\n$textarea-border: rgba(theme-color.prop-value(on-surface), 0.73) !default;\n$textarea-background: rgba(theme-color.prop-value(surface), 1) !default;\n$textarea-disabled-border-color: rgba(\n  theme-color.prop-value(on-surface),\n  0.26\n) !default;\n// cannot be transparent because multiline textarea input\n// will make text unreadable\n$textarea-disabled-background: rgba(249, 249, 249, 1) !default;\n\n$ripple-target: '.mdc-text-field__ripple';\n$outlined-stroke-width: 2px !default;\n$height: 56px !default;\n$minimum-height: 40px !default;\n$minimum-height-for-filled-label: 52px !default;\n$maximum-height: $height !default;\n$padding-horizontal: 16px !default;\n$density-scale: density-variables.$default-scale !default;\n$density-config: (\n  height: (\n    default: $height,\n    maximum: $maximum-height,\n    minimum: $minimum-height,\n  ),\n) !default;\n$shape-radius: small !default;\n$label-position-y: floating-label-variables.$position-y !default;\n$label-offset: 16px !default;\n// TODO(b/154350788): Remove this variable, it's not used internally but it is\n// externally in Angular\n/// @deprecated this variable will be removed in the future.\n/// Use get-outlined-label-position-y($height) instead\n$outlined-label-position-y: get-outlined-label-position-y($height) !default;\n$outlined-with-leading-icon-label-position-x: 32px !default;\n$textarea-outlined-label-position-y: 24.75px !default; // visually ~4dp from top to baseline\n$textarea-filled-label-position-y: 10.25px !default; // visually ~20dp from top to label baseline\n$helper-line-padding: 16px !default;\n$filled-baseline-top: 40px !default;\n$input-height: 28px !default;\n$textarea-label-top: 19px !default; // visually ~32dp from top to label baseline\n$textarea-outlined-label-top: $textarea-label-top -\n  notched-outline-variables.$border-width !default;\n$textarea-line-height: 1.5rem !default; // 24dp from baseline to baseline\n$textarea-input-handle-margin: 1px !default;\n// Outlined textarea's first line should be placed at the same position as\n// outlined textfield, and should look identical if it is 1 row. Since textfield\n// is centered and font metrics vary for where the baseline is, the best way to\n// ensure textarea and textfield align is with padding. At 56px height with a\n// 24px line-height, a centered textfield has 16px of top and bottom padding.\n// Textarea should use this to position itself.\n$textarea-outlined-input-margin-top: 16px !default;\n$textarea-outlined-input-margin-bottom: 16px !default;\n$textarea-outlined-density-config: (\n  margin-top: (\n    default: $textarea-outlined-input-margin-top,\n    maximum: $textarea-outlined-input-margin-top,\n    minimum: $textarea-outlined-input-margin-top - 8,\n  ),\n  margin-bottom: (\n    default: $textarea-outlined-input-margin-bottom,\n    maximum: $textarea-outlined-input-margin-bottom,\n    minimum: $textarea-outlined-input-margin-bottom - 8,\n  ),\n) !default; // remove 1/2 of scale to -4 for minimum\n$textarea-outlined-label-density-config: (\n  top: (\n    default: $textarea-outlined-label-top,\n    maximum: $textarea-outlined-label-top,\n    minimum: $textarea-outlined-label-top - 8,\n  ),\n) !default; // remove 1/2 of scale to -4 for minimum\n$textarea-filled-input-margin-top: 23px !default; // visually ~40dp from top to baseline\n$textarea-filled-input-margin-bottom: 9px !default; // visually ~16dp from baseline to bottom\n$textarea-filled-density-config: (\n  margin-bottom: (\n    default: $textarea-filled-input-margin-bottom,\n    maximum: $textarea-filled-input-margin-bottom,\n    minimum: $textarea-filled-input-margin-bottom - 4,\n  ),\n) !default; // scale to -1 for minimum\n$textarea-filled-label-density-config: (\n  top: (\n    default: $textarea-label-top,\n    maximum: $textarea-label-top,\n    minimum: $textarea-label-top - 2,\n  ),\n) !default; // remove 1/2 of scale to -1 for minimm\n$textarea-filled-no-label-input-margin-top: 16px !default; // see above explanation for outlined textarea margin\n$textarea-filled-no-label-input-margin-bottom: 16px !default; // see above explanation for outlined textarea margin\n$textarea-filled-no-label-density-config: (\n  margin-top: (\n    default: $textarea-filled-no-label-input-margin-top,\n    maximum: $textarea-filled-no-label-input-margin-top,\n    minimum: $textarea-filled-no-label-input-margin-top - 8,\n  ),\n  margin-bottom: (\n    default: $textarea-filled-no-label-input-margin-bottom,\n    maximum: $textarea-filled-no-label-input-margin-bottom,\n    minimum: $textarea-filled-no-label-input-margin-bottom - 8,\n  ),\n) !default; // remove 1/2 of scale to -4 for minimum\n$textarea-internal-counter-input-margin-bottom: 2px !default; // visually ~20dp from baseline to counter baseline\n$textarea-internal-counter-baseline-bottom: 16px !default;\n// Note that the scale factor is an eyeballed approximation of what's shown in the mocks.\n\n$prefix-padding: 2px !default;\n$prefix-end-aligned-padding: 12px !default;\n$suffix-padding: 12px !default;\n$suffix-end-aligned-padding: 2px !default;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/documentation/formdemo/formDemo.scss":
/*!**************************************************!*\
  !*** ./src/documentation/formdemo/formDemo.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_formDemo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./formDemo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/formdemo/formDemo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_formDemo_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_formDemo_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_formDemo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_formDemo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

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
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/documentation/formdemo/formdemo.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formDemo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formDemo.scss */ "./src/documentation/formdemo/formDemo.scss");
/* harmony import */ var _material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/form-field */ "./node_modules/@material/form-field/component.js");
/* harmony import */ var _material_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/radio */ "./node_modules/@material/radio/component.js");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/component.js");
/* harmony import */ var _material_textfield_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/textfield/icon */ "./node_modules/@material/textfield/icon/component.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var radio = document.querySelectorAll('.mdc-radio');
var _iterator = _createForOfIteratorHelper(radio),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var item = _step.value;
    new _material_radio__WEBPACK_IMPORTED_MODULE_1__.MDCRadio.attachTo(item);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var formField = document.querySelectorAll('.mdc-form-field');
var _iterator2 = _createForOfIteratorHelper(formField),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _item = _step2.value;
    new _material_form_field__WEBPACK_IMPORTED_MODULE_2__.MDCFormField.attachTo(_item);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
formField.input = radio;
var textField = document.querySelectorAll('.mdc-text-field');
var _iterator3 = _createForOfIteratorHelper(textField),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _item2 = _step3.value;
    new _material_textfield__WEBPACK_IMPORTED_MODULE_3__.MDCTextField.attachTo(_item2);
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var icon = new _material_textfield_icon__WEBPACK_IMPORTED_MODULE_4__.MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));
})();

/******/ })()
;
//# sourceMappingURL=formdemo4adce35e48f59b6bd481.js.map