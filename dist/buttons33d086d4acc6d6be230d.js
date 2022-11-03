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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/buttons/buttons.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/buttons/buttons.scss ***!
  \*********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".mdc-touch-target-wrapper {\n  display: inline;\n}\n\n.mdc-elevation-overlay {\n  position: absolute;\n  border-radius: inherit;\n  pointer-events: none;\n  opacity: 0;\n  /* @alternate */\n  opacity: var(--mdc-elevation-overlay-opacity, 0);\n  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-elevation-overlay-color, #fff);\n}\n\n.mdc-button {\n  /* @alternate */\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 64px;\n  border: none;\n  outline: none;\n  /* @alternate */\n  line-height: inherit;\n  user-select: none;\n  -webkit-appearance: none;\n  overflow: visible;\n  vertical-align: middle;\n  background: transparent;\n}\n.mdc-button .mdc-elevation-overlay {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n}\n.mdc-button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mdc-button:active {\n  outline: none;\n}\n.mdc-button:hover {\n  cursor: pointer;\n}\n.mdc-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-button .mdc-button__icon { /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n}\n[dir=rtl] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-button .mdc-button__label {\n  position: relative;\n}\n.mdc-button .mdc-button__focus-ring {\n  display: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring {\n    pointer-events: none;\n    border: 2px solid transparent;\n    border-radius: 6px;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    left: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    transform: translate(-50%, -50%);\n    height: calc(\n      100% + 4px\n    );\n    width: calc(\n      100% + 4px\n    );\n    display: block;\n  }\n}\n@media screen and (forced-colors: active) and (forced-colors: active) {\n  .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring {\n    border-color: CanvasText;\n  }\n}\n@media screen and (forced-colors: active) {\n  .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after {\n    content: \"\";\n    border: 2px solid transparent;\n    border-radius: 8px;\n    display: block;\n    position: absolute;\n    top: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    left: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    transform: translate(-50%, -50%);\n    height: calc(100% + 4px);\n    width: calc(100% + 4px);\n  }\n}\n@media screen and (forced-colors: active) and (forced-colors: active) {\n  .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n.mdc-button .mdc-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.mdc-button__label + .mdc-button__icon {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n}\n[dir=rtl] .mdc-button__label + .mdc-button__icon, .mdc-button__label + .mdc-button__icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  /*rtl:end:ignore*/\n}\n\nsvg.mdc-button__icon {\n  fill: currentColor;\n}\n\n.mdc-button--touch {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.mdc-button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n}\n\n.mdc-button {\n  padding: 0 8px 0 8px;\n}\n\n.mdc-button--unelevated {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0 16px 0 16px;\n}\n.mdc-button--unelevated.mdc-button--icon-trailing {\n  padding: 0 12px 0 16px;\n}\n.mdc-button--unelevated.mdc-button--icon-leading {\n  padding: 0 16px 0 12px;\n}\n\n.mdc-button--raised {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0 16px 0 16px;\n}\n.mdc-button--raised.mdc-button--icon-trailing {\n  padding: 0 12px 0 16px;\n}\n.mdc-button--raised.mdc-button--icon-leading {\n  padding: 0 16px 0 12px;\n}\n\n.mdc-button--outlined {\n  border-style: solid;\n  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-button--outlined .mdc-button__ripple {\n  border-style: solid;\n  border-color: transparent;\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-button {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-button .mdc-button__ripple::before,\n.mdc-button .mdc-button__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-button .mdc-button__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-button .mdc-button__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-button .mdc-button__ripple::before,\n.mdc-button .mdc-button__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-button__ripple {\n  position: absolute;\n  box-sizing: content-box;\n  overflow: hidden;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.mdc-button {\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-text-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-text-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-text-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-text-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-text-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));\n  height: 36px;\n  /* @alternate */\n  height: var(--mdc-text-button-container-height, 36px);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px));\n}\n.mdc-button:not(:disabled) {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-text-button-label-text-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-button .mdc-button__icon {\n  font-size: 1.125rem;\n  /* @alternate */\n  font-size: var(--mdc-text-button-with-icon-icon-size, 1.125rem);\n  width: 1.125rem;\n  /* @alternate */\n  width: var(--mdc-text-button-with-icon-icon-size, 1.125rem);\n  height: 1.125rem;\n  /* @alternate */\n  height: var(--mdc-text-button-with-icon-icon-size, 1.125rem);\n}\n.mdc-button .mdc-button__ripple::before,\n.mdc-button .mdc-button__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-text-button-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button:hover .mdc-button__ripple::before, .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-text-button-hover-state-layer-opacity, 0.04);\n}\n.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-text-button-focus-state-layer-opacity, 0.12);\n}\n.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-text-button-pressed-state-layer-opacity, 0.12);\n}\n.mdc-button.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-text-button-pressed-state-layer-opacity, 0.12);\n}\n.mdc-button .mdc-button__ripple {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px));\n}\n\n.mdc-button--unelevated {\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-filled-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-filled-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-filled-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-filled-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-filled-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));\n  height: 36px;\n  /* @alternate */\n  height: var(--mdc-filled-button-container-height, 36px);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px));\n}\n.mdc-button--unelevated:not(:disabled) {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-filled-button-container-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button--unelevated:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  background-color: var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12));\n}\n.mdc-button--unelevated:not(:disabled) {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-filled-button-label-text-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-button--unelevated:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-button--unelevated .mdc-button__icon {\n  font-size: 1.125rem;\n  /* @alternate */\n  font-size: var(--mdc-filled-button-with-icon-icon-size, 1.125rem);\n  width: 1.125rem;\n  /* @alternate */\n  width: var(--mdc-filled-button-with-icon-icon-size, 1.125rem);\n  height: 1.125rem;\n  /* @alternate */\n  height: var(--mdc-filled-button-with-icon-icon-size, 1.125rem);\n}\n.mdc-button--unelevated .mdc-button__ripple::before,\n.mdc-button--unelevated .mdc-button__ripple::after {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-filled-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-button--unelevated:hover .mdc-button__ripple::before, .mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-filled-button-hover-state-layer-opacity, 0.08);\n}\n.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-filled-button-focus-state-layer-opacity, 0.24);\n}\n.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-filled-button-pressed-state-layer-opacity, 0.24);\n}\n.mdc-button--unelevated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-filled-button-pressed-state-layer-opacity, 0.24);\n}\n.mdc-button--unelevated .mdc-button__ripple {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px));\n}\n\n.mdc-button--raised {\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-protected-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-protected-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-protected-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-protected-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-protected-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));\n  height: 36px;\n  /* @alternate */\n  height: var(--mdc-protected-button-container-height, 36px);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));\n  --mdc-elevation-box-shadow-for-gss: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--raised:not(:disabled) {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button--raised:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  background-color: var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12));\n}\n.mdc-button--raised:not(:disabled) {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-protected-button-label-text-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-button--raised:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-button--raised .mdc-button__icon {\n  font-size: 1.125rem;\n  /* @alternate */\n  font-size: var(--mdc-protected-button-with-icon-icon-size, 1.125rem);\n  width: 1.125rem;\n  /* @alternate */\n  width: var(--mdc-protected-button-with-icon-icon-size, 1.125rem);\n  height: 1.125rem;\n  /* @alternate */\n  height: var(--mdc-protected-button-with-icon-icon-size, 1.125rem);\n}\n.mdc-button--raised .mdc-button__ripple::before,\n.mdc-button--raised .mdc-button__ripple::after {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-protected-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-button--raised:hover .mdc-button__ripple::before, .mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-protected-button-hover-state-layer-opacity, 0.08);\n}\n.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-protected-button-focus-state-layer-opacity, 0.24);\n}\n.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-protected-button-pressed-state-layer-opacity, 0.24);\n}\n.mdc-button--raised.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-protected-button-pressed-state-layer-opacity, 0.24);\n}\n.mdc-button--raised .mdc-button__ripple {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));\n}\n.mdc-button--raised.mdc-ripple-upgraded--background-focused, .mdc-button--raised:not(.mdc-ripple-upgraded):focus {\n  --mdc-elevation-box-shadow-for-gss: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-focus-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--raised:hover {\n  --mdc-elevation-box-shadow-for-gss: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-hover-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--raised:not(:disabled):active {\n  --mdc-elevation-box-shadow-for-gss: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-pressed-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--raised:disabled {\n  --mdc-elevation-box-shadow-for-gss: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-disabled-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--outlined {\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-outlined-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-outlined-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-outlined-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-outlined-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-outlined-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));\n  height: 36px;\n  /* @alternate */\n  height: var(--mdc-outlined-button-container-height, 36px);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));\n  padding: 0 15px 0 15px;\n  border-width: 1px;\n  /* @alternate */\n  border-width: var(--mdc-outlined-button-outline-width, 1px);\n}\n.mdc-button--outlined:not(:disabled) {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-outlined-button-label-text-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button--outlined:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-button--outlined .mdc-button__icon {\n  font-size: 1.125rem;\n  /* @alternate */\n  font-size: var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);\n  width: 1.125rem;\n  /* @alternate */\n  width: var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);\n  height: 1.125rem;\n  /* @alternate */\n  height: var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);\n}\n.mdc-button--outlined .mdc-button__ripple::before,\n.mdc-button--outlined .mdc-button__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-outlined-button-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button--outlined:hover .mdc-button__ripple::before, .mdc-button--outlined.mdc-ripple-surface--hover .mdc-button__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-outlined-button-hover-state-layer-opacity, 0.04);\n}\n.mdc-button--outlined.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--outlined:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-outlined-button-focus-state-layer-opacity, 0.12);\n}\n.mdc-button--outlined:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button--outlined:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-outlined-button-pressed-state-layer-opacity, 0.12);\n}\n.mdc-button--outlined.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-outlined-button-pressed-state-layer-opacity, 0.12);\n}\n.mdc-button--outlined .mdc-button__ripple {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));\n}\n.mdc-button--outlined:not(:disabled) {\n  border-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  border-color: var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12));\n}\n.mdc-button--outlined:disabled {\n  border-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  border-color: var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12));\n}\n.mdc-button--outlined.mdc-button--icon-trailing {\n  padding: 0 11px 0 15px;\n}\n.mdc-button--outlined.mdc-button--icon-leading {\n  padding: 0 15px 0 11px;\n}\n.mdc-button--outlined .mdc-button__ripple {\n  top: -1px;\n  left: -1px;\n  bottom: -1px;\n  right: -1px;\n  border-width: 1px;\n  /* @alternate */\n  border-width: var(--mdc-outlined-button-outline-width, 1px);\n}\n.mdc-button--outlined .mdc-button__touch {\n  left: calc(-1 * 1px);\n  /* @alternate */\n  left: calc(-1 * var(--mdc-outlined-button-outline-width, 1px));\n  width: calc(100% + 2 * 1px);\n  /* @alternate */\n  width: calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px));\n}\n\n.mdc-button--raised .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__icon,\n.mdc-button--outlined .mdc-button__icon {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: -4px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-button--raised .mdc-button__icon, [dir=rtl] .mdc-button--unelevated .mdc-button__icon, [dir=rtl] .mdc-button--outlined .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=rtl], .mdc-button--unelevated .mdc-button__icon[dir=rtl], .mdc-button--outlined .mdc-button__icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: -4px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-button--raised .mdc-button__label + .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__label + .mdc-button__icon,\n.mdc-button--outlined .mdc-button__label + .mdc-button__icon {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: -4px;\n}\n[dir=rtl] .mdc-button--raised .mdc-button__label + .mdc-button__icon, [dir=rtl] .mdc-button--unelevated .mdc-button__label + .mdc-button__icon, [dir=rtl] .mdc-button--outlined .mdc-button__label + .mdc-button__icon, .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir=rtl], .mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir=rtl], .mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: -4px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  /*rtl:end:ignore*/\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --mdc-theme-primary: #006874;\n    --mdc-theme-on-primary: #ffffff;\n    --mdc-theme-secondary: #5c6300;\n    --mdc-theme-on-secondary: #ffffff;\n    --mdc-theme-surface: #fafdfd;\n    --mdc-theme-on-surface: #191c1d;\n    --mdc-theme-background: #fafdfd;\n    --mdc-theme-on-background: #191c1d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --mdc-theme-primary: #4fd8eb;\n    --mdc-theme-on-primary: #00363d;\n    --mdc-theme-secondary: #c2d016;\n    --mdc-theme-on-secondary: #2f3300;\n    --mdc-theme-surface-base: 195, 7.4%;\n    --mdc-theme-surface-l: 15.6%;\n    --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\n    --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\n    --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\n    --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\n    --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\n    --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\n    --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\n    --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n    --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\n    --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\n    --mdc-theme-on-surface: #e1e3e3;\n    --mdc-theme-background: #191c1d;\n    --mdc-theme-on-background: #e1e3e3;\n    --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdc-elevation--z1 {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-elevation--z2 {\n    background: var(--mdc-theme-surface-z2);\n  }\n  .mdc-elevation--z3 {\n    background: var(--mdc-theme-surface-z3);\n  }\n  .mdc-elevation--z4 {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-elevation--z5 {\n    background: var(--mdc-theme-surface-z5);\n  }\n  .mdc-elevation--z6 {\n    background: var(--mdc-theme-surface-z6);\n  }\n  .mdc-elevation--z7 {\n    background: var(--mdc-theme-surface-z7);\n  }\n  .mdc-drawer.mdc-drawer--modal {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__title {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__subtitle {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-surface-z9);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar {\n    background-color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar__title {\n    color: var(--mdc-theme-on-primary);\n  }\n  .mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-tab.mdc-tab--active .mdc-tab__icon, .mdc-tab.mdc-tab--active .mdc-tab__text-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__header-cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: var(--mdc-theme-surface-z3);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__title {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog__actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined .mdc-notched-outline {\n    z-index: -1;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-primary);\n  }\n}\n.mdc-typography {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);\n}\n\n.mdc-typography--headline1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 6rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline1-font-size, 6rem);\n  line-height: 6rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline1-line-height, 6rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline1-font-weight, 300);\n  letter-spacing: -0.015625em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline1-text-transform, inherit);\n}\n\n.mdc-typography--headline2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline2-font-size, 3.75rem);\n  line-height: 3.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline2-line-height, 3.75rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline2-font-weight, 300);\n  letter-spacing: -0.0083333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline2-text-transform, inherit);\n}\n\n.mdc-typography--headline3 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline3-font-size, 3rem);\n  line-height: 3.125rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline3-line-height, 3.125rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline3-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline3-text-transform, inherit);\n}\n\n.mdc-typography--headline4 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 2.125rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline4-font-size, 2.125rem);\n  line-height: 2.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline4-line-height, 2.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline4-font-weight, 400);\n  letter-spacing: 0.0073529412em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline4-text-transform, inherit);\n}\n\n.mdc-typography--headline5 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.5rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline5-font-size, 1.5rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline5-line-height, 2rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline5-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline5-text-transform, inherit);\n}\n\n.mdc-typography--headline6 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n}\n\n.mdc-typography--subtitle1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n}\n\n.mdc-typography--subtitle2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n}\n\n.mdc-typography--body1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body1-font-size, 1rem);\n  line-height: 1.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body1-line-height, 1.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body1-font-weight, 400);\n  letter-spacing: 0.03125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body1-text-transform, inherit);\n}\n\n.mdc-typography--body2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-typography--caption {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-typography--button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n}\n\n.mdc-typography--overline {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n}\n\nhtml {\n  background-color: var(--mdc-theme-background);\n}\n\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  vertical-align: middle;\n}\n\n.mdc-icon-button.actionsButton {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n\n.main-content {\n  padding: 1rem;\n}\n\n.content-section {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.demo-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.demo-group.wrap {\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./node_modules/@material/touch-target/_touch-target.scss","webpack://./src/documentation/buttons/buttons.scss","webpack://./node_modules/@material/elevation/_elevation.scss","webpack://./node_modules/@material/theme/_css.scss","webpack://./node_modules/@material/theme/_gss.scss","webpack://./node_modules/@material/button/_button-base.scss","webpack://./node_modules/@material/elevation/_elevation-theme.scss","webpack://./node_modules/@material/rtl/_rtl.scss","webpack://./node_modules/@material/dom/_dom.scss","webpack://./node_modules/@material/focus-ring/_focus-ring.scss","webpack://./node_modules/@material/typography/_typography.scss","webpack://./node_modules/@material/button/_button-text.scss","webpack://./node_modules/@material/button/_button-shared-theme.scss","webpack://./node_modules/@material/button/_button-filled.scss","webpack://./node_modules/@material/button/_button-protected.scss","webpack://./node_modules/@material/button/_button-outlined.scss","webpack://./node_modules/@material/ripple/_ripple.scss","webpack://./node_modules/@material/animation/_animation.scss","webpack://./node_modules/@material/button/_button-ripple.scss","webpack://./node_modules/@material/button/_button.scss","webpack://./node_modules/@material/ripple/_ripple-theme.scss","webpack://./node_modules/@material/button/_button-outlined-theme.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/theme/theme1/_variables.scss","webpack://./src/styles/_common.scss"],"names":[],"mappings":"AAqCE;EAOM,eAAA;AC1CR;;AC0DE;EAGM,kBAAA;EACA,sBAAA;EACA,oBAAA;ECCF,UAAA;ECZF,eAAA;EDwBA,gDAAA;EDFI,sDAAA;ECVF,sBAAA;ECZF,eAAA;EDwBA,0DAAA;AF/DJ;;AIkCE;ECmQE,eAAA;EACA,kBAAA;EDlJA,oBAAA;EAEA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,wBAAA;EAGA,iBAAA;EACA,sBAAA;EACA,uBAAA;AJjJJ;AKsSE;EH1PE,WAAA;EAAA,YAAA;EGgQI,MAAA;EFnRJ,YAAA,EAAA,aAAA;EEqRI,OAAA;ALvSR;AI6IE;EAEI,UAAA;EACA,SAAA;AJ5IN;AIiJE;EAEI,aAAA;AJhJN;AIoJE;EAEI,eAAA;AJnJN;AIuJE;EAEI,eAAA;EACA,oBAAA;AJtJN;AIAI,gCDIA,YAAA,EAAA,aAAA;EDmBA,cAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,iBAAA;EE4IF,qBAAA;EACA,kBAAA;EACA,mBAAA;AJ7JF;AMiBM;EACE,mBAAA;EHtBJ,YAAA,EAAA,aAAA;EDmBA,gBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,eAAA;EIKI,iBAAA;ANZR;;AIVI;EAKI,kBAAA;AJSR;AILI;EAEI,aAAA;AJMR;AOgBI;EHjBE;IIPF,oBAAA;IACA,6BAAA;IACA,kBAAA;IACA,uBAAA;IACA,kBAAA;IACA,QAAA;ILhBA,YAAA,EAAA,aAAA;IKkBA,SAAA;ILlBA,YAAA,EAAA,aAAA;IKoBA,gCAAA;IACA;;KAzB0B;IA0B1B;;KApB4B;IJqBpB,cAAA;EJgBV;AACF;AOLI;EHjBE;IIOA,wBAAA;ERmBJ;AACF;AOVI;ECPA;IACE,WAAA;IACA,6BAAA;IACA,kBAhEgB;IAiEhB,cAAA;IACA,kBAAA;IACA,QAAA;ILlCF,YAAA,EAAA,aAAA;IKoCE,SAAA;ILpCF,YAAA,EAAA,aAAA;IKsCE,gCAAA;IACA,wBA/BgB;IAgChB,uBAhCgB;ERoDpB;AACF;AO1BI;ECPA;IAeI,wBAAA;ERsBN;AACF;AIrCI;ELtBA,kBAAA;EACA,QAAA;EACA,YAtCK;EAkDH,OAAA;EACA,QAAA;EACA,2BAAA;ACmDN;;AIxCE;EDlCE,YAAA,EAAA,aAAA;EDmBA,gBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,eAAA;AF8DJ;AM5DM;EACE,mBAAA;EHtBJ,YAAA,EAAA,aAAA;EDmBA,cAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,iBAAA;EIKI,iBAAA;ANiER;;AIjDE;EAyIA,kBAAA;AJpFF;;AI/CE;ELJE,eAHsB;EAItB,kBAJsB;AC2D1B;;AIxCE;EKmNE,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,4GAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,mEAAA;AF0FJ;;AUvHE;ECmdE,oBAAA;AXxVJ;;AYtHE;ERqME,yDAAA;EOyQA,sBAAA;AXnVJ;AWuVI;EAII,sBAAA;AXxVR;AW4VI;EAII,sBAAA;AX7VR;;AajIE;ETqME,yDAAA;EOyQA,sBAAA;AXxUJ;AW4UI;EAII,sBAAA;AX7UR;AWiVI;EAII,sBAAA;AXlVR;;Ac/IE;EAUE,mBAAA;EAMA,qDAAA;AdoIJ;AcjIE;EAEI,mBAAA;EACA,yBAAA;AdkIN;;AeqGE;EACE;IACE,uDC3R2B;IDgS3B,sEAAA;EftGJ;EeyGE;IACE,gGAAA;EfvGJ;AACF;Ae2GE;EACE;IACE,iCAAA;IACA,UAAA;EfzGJ;Ee4GE;IACE,wCAAA;Ef1GJ;AACF;Ae6GE;EACE;IACE,iCAAA;IACA,wCAAA;Ef3GJ;Ee8GE;IACE,UAAA;Ef5GJ;AACF;AiBpME;EF+EE,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,wBAAA;EACA,gCAAA;EACA,kCAAA;EAEA,6CAAA;EAGE,+BAAA;AfqHN;AejHE;;EAGI,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;AfkHN;Ae9GE;EAGI,6DAAA;Eb5EA,UAAA;ECZF,eAAA;EDwBA,qCAAA;AFiLJ;AepGE;EbzFI,UAAA;ECZF,eAAA;EDwBA,qCAAA;AFsLJ;Ae7FI;EAEI,+CAAA;Af8FR;Ae1FI;EAEI,MAAA;EZpHJ,YAAA,EAAA,aAAA;EYsHI,OAAA;EACA,mBAAA;EACA,+BAAA;Af2FR;AerFI;EAEI,6BAAA;EZhIJ,YAAA,EAAA,aAAA;EYkII,+BAAA;AfsFR;AehFI;EAEI,yFAAA;AfiFR;AezEI;EAEI,0CAAA;EAKA,gGAAA;AfsER;AexDE;;EAGI,qBAAA;EZ1KF,YAAA,EAAA,aAAA;EY4KE,sBAAA;EACA,WAAA;EACA,YAAA;AfyDN;AepDI;EAEI,sCAAA;EACA,uCAAA;AfqDR;;AiB3PE;EAEI,kBAAA;EAGA,uBAAA;EACA,gBAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;AjB2PN;;AkB9PE;EhBeI,+BAAA;ECZF,eAAA;EDwBA,oJAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,mGAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,uHAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,oGAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,mHAAA;EAZE,YAAA;ECZF,eAAA;EDwBA,qDAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,kFAAA;AF2PJ;AWoCE;ET3SI,cAAA;ECZF,eAAA;EDwBA,iFAAA;AFgQJ;AWkDE;ET9TI,0BAAA;ECZF,eAAA;EDwBA,4EAAA;AFqQJ;AWgRI;ETjiBE,mBAAA;ECZF,eAAA;EDwBA,+DAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,4DAAA;AFgRJ;AmBpMI;;EjBxFE,yBAAA;ECZF,eAAA;EDwBA,mGAAA;AFsRJ;AmB+LE;EjBjeI,aAAA;ECZF,eAAA;EDwBA,+DAAA;AF2RJ;AmB0LE;EA9QI,yBAAA;EjBnNA,aAAA;ECZF,eAAA;EDwBA,+DAAA;AFiSJ;AmBhEM;EAEI,gCAAA;AnBiEV;AmB5DQ;EAEI,yBAhRO;EjB0Bb,aAAA;ECZF,eAAA;EDwBA,iEAAA;AF0SJ;AmBrDI;EjBrPA,iFAAA;AF6SJ;AW+GE;ETxaI,kBAAA;ECZF,eAAA;EDwBA,kFAAA;AFkTJ;;AkBvUE;EhBSI,+BAAA;ECZF,eAAA;EDwBA,sJAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,qGAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,yHAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,sGAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,qHAAA;EAZE,YAAA;ECZF,eAAA;EDwBA,uDAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,oFAAA;AF0UJ;AWhKE;ETtLI,yBAAA;ECZF,eAAA;EDwBA,6FAAA;AF+UJ;AWzIE;ETlNI,qCAAA;ECZF,eAAA;EDwBA,wFAAA;AFoVJ;AWrDE;ET3SI,WAAA;ECZF,eAAA;EDwBA,mFAAA;AFyVJ;AWvCE;ET9TI,0BAAA;ECZF,eAAA;EDwBA,8EAAA;AF8VJ;AWuLI;ETjiBE,mBAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,8DAAA;AFyWJ;AmB7RI;;EjBxFE,sBAAA;ECZF,eAAA;EDwBA,qGAAA;AF+WJ;AmBsGE;EjBjeI,aAAA;ECZF,eAAA;EDwBA,iEAAA;AFoXJ;AmBiGE;EA9QI,yBAAA;EjBnNA,aAAA;ECZF,eAAA;EDwBA,iEAAA;AF0XJ;AmBzJM;EAEI,gCAAA;AnB0JV;AmBrJQ;EAEI,yBAhRO;EjB0Bb,aAAA;ECZF,eAAA;EDwBA,mEAAA;AFmYJ;AmB9II;EjBrPA,mFAAA;AFsYJ;AWsBE;ETxaI,kBAAA;ECZF,eAAA;EDwBA,oFAAA;AF2YJ;;AkB1ZE;EhBGI,+BAAA;ECZF,eAAA;EDwBA,yJAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,wGAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,4HAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,yGAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,wHAAA;EAZE,YAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,uFAAA;EAAA,iJAAA;EAZE,yHAAA;ECZF,eAAA;EDwBA,oGAAA;AFuaJ;AW7PE;ETtLI,yBAAA;ECZF,eAAA;EDwBA,gGAAA;AF4aJ;AWtOE;ETlNI,qCAAA;ECZF,eAAA;EDwBA,2FAAA;AFibJ;AWlJE;ET3SI,WAAA;ECZF,eAAA;EDwBA,sFAAA;AFsbJ;AWpIE;ET9TI,0BAAA;ECZF,eAAA;EDwBA,iFAAA;AF2bJ;AW0FI;ETjiBE,mBAAA;ECZF,eAAA;EDwBA,oEAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,gEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,iEAAA;AFscJ;AmB1XI;;EjBxFE,sBAAA;ECZF,eAAA;EDwBA,wGAAA;AF4cJ;AmBSE;EjBjeI,aAAA;ECZF,eAAA;EDwBA,oEAAA;AFidJ;AmBIE;EA9QI,yBAAA;EjBnNA,aAAA;ECZF,eAAA;EDwBA,oEAAA;AFudJ;AmBtPM;EAEI,gCAAA;AnBuPV;AmBlPQ;EAEI,yBAhRO;EjB0Bb,aAAA;ECZF,eAAA;EDwBA,sEAAA;AFgeJ;AmB3OI;EjBrPA,sFAAA;AFmeJ;AWvEE;ETxaI,kBAAA;ECZF,eAAA;EDwBA,uFAAA;AFweJ;AmBjFE;EjBvZE,kJAAA;EAZE,0HAAA;ECZF,eAAA;EDwBA,0GAAA;AF8eJ;AWyIM;ETvnBF,kJAAA;EAZE,0HAAA;ECZF,eAAA;EDwBA,0GAAA;AFofJ;AmBtFE;EjB9ZE,mJAAA;EAZE,2HAAA;ECZF,eAAA;EDwBA,4GAAA;AF0fJ;AWqJM;ET/oBF,gJAAA;EAZE,wHAAA;ECZF,eAAA;EDwBA,6GAAA;AFggBJ;AkBzgBE;EhBHI,+BAAA;ECZF,eAAA;EDwBA,wJAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,uGAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,2HAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,wGAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,uHAAA;EAZE,YAAA;ECZF,eAAA;EDwBA,yDAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,sFAAA;ESsbA,sBAAA;ETlcE,iBAAA;ECZF,eAAA;EDwBA,2DAAA;AF2hBJ;AW5PE;ET3SI,cAAA;ECZF,eAAA;EDwBA,qFAAA;AFgiBJ;AW9OE;ET9TI,0BAAA;ECZF,eAAA;EDwBA,gFAAA;AFqiBJ;AWhBI;ETjiBE,mBAAA;ECZF,eAAA;EDwBA,mEAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,+DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,gEAAA;AFgjBJ;AmBpeI;;EjBxFE,yBAAA;ECZF,eAAA;EDwBA,uGAAA;AFsjBJ;AmBjGE;EjBjeI,aAAA;ECZF,eAAA;EDwBA,mEAAA;AF2jBJ;AmBtGE;EA9QI,yBAAA;EjBnNA,aAAA;ECZF,eAAA;EDwBA,mEAAA;AFikBJ;AmBhWM;EAEI,gCAAA;AnBiWV;AmB5VQ;EAEI,yBAhRO;EjB0Bb,aAAA;ECZF,eAAA;EDwBA,qEAAA;AF0kBJ;AmBrVI;EjBrPA,qFAAA;AF6kBJ;AWjLE;ETxaI,kBAAA;ECZF,eAAA;EDwBA,sFAAA;AFklBJ;AoBhhBE;ElB9EI,iCAAA;ECZF,eAAA;EDwBA,2EAAA;AFulBJ;AoBvfE;ElB5GI,iCAAA;ECZF,eAAA;EDwBA,oFAAA;AF4lBJ;AWlKI;EAII,sBAAA;AXiKR;AW7JI;EAII,sBAAA;AX4JR;AoB7cI;ElBrJA,SAAA;EAAA,UAAA;EAAA,YAAA;EAAA,WAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,2DAAA;AF2mBJ;AoB7cI;ElB1KE,oBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,2BAAA;ECZF,eAAA;EDwBA,qEAAA;AFmnBJ;;AkBzkBI;;;Ef7DA,YAAA,EAAA,aAAA;EDmBA,iBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,iBAAA;AF4nBJ;AM1nBM;EACE,mBAAA;EHtBJ,YAAA,EAAA,aAAA;EDmBA,gBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,kBAAA;EIKI,iBAAA;AN+nBR;;AkBnlBI;;;EfpEA,YAAA,EAAA,aAAA;EDmBA,gBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,kBAAA;AF6oBJ;AM3oBM;EACE,mBAAA;EHtBJ,YAAA,EAAA,aAAA;EDmBA,iBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,iBAAA;EIKI,iBAAA;ANgpBR;;AqBnuBA;EACI,sBAAA;ArBsuBJ;;AqBnuBA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,kCAAA;EACA,mCAAA;EACA,sBAAA;ArBsuBJ;;AqBnuBA;EACI,cAAA;ArBsuBJ;;AqBnuBA;EACI,cAAA;ArBsuBJ;;AqBnuBA;EACI,gBAAA;ArBsuBJ;;AqBnuBA;EACI,YAAA;ArBsuBJ;;AqBnuBA;EACI,WAAA;EACA,aAAA;ArBsuBJ;;AqBnuBA;EACI,yBAAA;EACA,iBAAA;ArBsuBJ;;AqBnuBA;EACI,wBAAA;EACA,gBAAA;ArBsuBJ;;AsBvwBI;EADJ;IAEQ,4BAAA;IACA,+BAAA;IACA,8BAAA;IACA,iCAAA;IACA,4BAAA;IACA,+BAAA;IACA,+BAAA;IACA,kCAAA;EtB2wBN;AACF;AsBzwBI;EAZJ;IAaQ,4BAAA;IACA,+BAAA;IACA,8BAAA;IACA,iCAAA;IAEA,mCAAA;IACA,4BAAA;IACA,kFAAA;IACI,gGAAA;IACA,gGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IAEJ,+BAAA;IACA,+BAAA;IACA,kCAAA;IAIA,6GAAA;EtBuwBN;AACF;;AsBlwBA;EACI;IACI,uCAAA;EtBqwBN;EsBnwBE;IACI,uCAAA;EtBqwBN;EsBnwBE;IACI,uCAAA;EtBqwBN;EsBnwBE;IACI,uCAAA;EtBqwBN;EsBnwBE;IACI,uCAAA;EtBqwBN;EsBnwBE;IACI,uCAAA;EtBqwBN;EsBnwBE;IACI,uCAAA;EtBqwBN;EsB/vBM;IACI,uCAAA;EtBiwBV;EsB/vBU;IACI,uCAAA;EtBiwBd;EsB/vBc;IACI,kCAAA;EtBiwBlB;EsB/vBc;IACI,kCAAA;EtBiwBlB;EsB5vBc;IACI,kCAAA;EtB8vBlB;EsB5vBkB;IACI,kCAAA;EtB8vBtB;EsB3vBc;IACI,+BAAA;EtB6vBlB;EsB3vBkB;IACI,+BAAA;EtB6vBtB;EsBrvBE;IACI,0CAAA;EtBuvBN;EsBpvBE;IACI,kCAAA;EtBsvBN;EsBjvBM;IACI,kCAAA;EtBmvBV;EsB/uBU;IACI,+BAAA;EtBivBd;AACF;AsB1uBQ;EADJ;IAEQ,kCAAA;EtB6uBV;AACF;AsBzuBQ;EADJ;IAEQ,kCAAA;EtB4uBV;AACF;AsBx0BA;EAiGI;IACI,6CAAA;EtB0uBN;AACF;AsB70BA;EAqGI;IACI,kCAAA;EtB2uBN;AACF;AsBl1BA;EAyGI;IACI,SAAA;EtB4uBN;AACF;AsBv1BA;EA8GI;IACI,oCAAA;EtB4uBN;AACF;AsB51BA;EAqHI;;;IAGI,yCAAA;IACA,uCAAA;EtB0uBN;AACF;AsBp2BA;EA4HI;;;IAGI,yCAAA;IACA,uCAAA;EtB2uBN;AACF;AsB52BA;EAmII;IACI,WAAA;EtB4uBN;AACF;AsBj3BA;EAuII;IACI,kCAAA;EtB6uBN;AACF;AsBt3BA;EA2II;IACI,+BAAA;EtB8uBN;AACF;AsB33BA;EA+II;IACI,kCAAA;EtB+uBN;AACF;AsBh4BA;EAsJI;;;IAGI,yCAAA;IACA,uCAAA;EtB6uBN;AACF;AsBx4BA;EA6JI;;;IAGI,yCAAA;IACA,uCAAA;EtB8uBN;AACF;AsBh5BA;EAoKI;IACI,kCAAA;EtB+uBN;AACF;AsBr5BA;EAwKI;IACI,+BAAA;EtBgvBN;AACF;AsB15BA;EA4KI;IACI,kCAAA;EtBivBN;AACF;AsB/5BA;EAgLI;IACI,iCAAA;EtBkvBN;AACF;AsBp6BA;EAoLI;IACI,8BAAA;EtBmvBN;AACF;ASttBE;EAgEE,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,kEAAA;AFu5BJ;;ASxtBI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,2BAAA;ECZF,eAAA;EDwBA,2EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AFi7BJ;;ASlvBI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,+BAAA;ECZF,eAAA;EDwBA,+EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AF28BJ;;AS5wBI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,kEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,sBAAA;ECZF,eAAA;EDwBA,sEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AFq+BJ;;AStyBI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,gEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,8EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AF+/BJ;;ASh0BI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,sBAAA;ECZF,eAAA;EDwBA,sEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AFyhCJ;;AS11BI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,wEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AFmjCJ;;ASp3BI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,0BAAA;ECZF,eAAA;EDwBA,0EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AF6kCJ;;AS94BI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,kEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,8EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AFumCJ;;ASx6BI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,2GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,sDAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,yDAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,mEAAA;AFioCJ;;ASl8BI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,2GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,yDAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,0EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,mEAAA;AF2pCJ;;AS59BI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,6GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,+DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,4EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,uEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,qEAAA;AFqrCJ;;ASt/BI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,4GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,2EAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,mEAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,sEAAA;AF+sCJ;;AShhCI;EA2DA,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,8GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,6EAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,wEAAA;AFyuCJ;;AuB/yCA;EACI,6CAAA;AvBkzCJ;;AuB5yCY;EACI,sBAAA;AvB+yChB;;AuBzyCA;EACI,WAAA;EACA,YAAA;EACA,YAAA;AvB4yCJ;;AuBzyCA;EACI,aAAA;AvB4yCJ;;AuBzyCA;EACI,aAAA;EACA,mBAAA;AvB4yCJ;;AuBzyCA;EACI,aAAA;EACA,WAAA;AvB4yCJ;AuB1yCI;EACI,eAAA;AvB4yCR","sourcesContent":["//\n// Copyright 2019 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n\n$height: 48px !default;\n$width: $height !default;\n\n/// Styles applied to the component's touch target wrapper element.\n@mixin wrapper($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-touch-target-wrapper {\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that styles are only emitted once across all components that\n      // have increased touch targets.\n      @include base-mixins.emit-once('mdc-touch-target/wrapper') {\n        // NOTE: Will change to `inline-block` in the future, but keeping as is\n        // temporarily for backwards-compatibility.\n        display: inline;\n      }\n    }\n  }\n}\n\n/// Styles applied to the component's inner touch target element.\n/// By default, only sets the inner element height to the minimum touch target\n/// height ($mdc-touch-target-height).\n/// @param {Boolean} $set-width [false] - Sets the inner element width to the\n///     minimum touch target width ($mdc-touch-target-width).\n/// @param $height [$mdc-touch-target-height] - Touch target height.\n/// @param $width [$mdc-touch-target-width] - Touch target width.\n@mixin touch-target(\n  $set-width: false,\n  $query: feature-targeting.all(),\n  $height: $height,\n  $width: $width\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 50%;\n    height: $height;\n  }\n\n  @if $set-width {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.ignore-next-line();\n      left: 50%;\n      width: $width;\n      transform: translate(-50%, -50%);\n    }\n  } @else {\n    @include feature-targeting.targets($feat-structure) {\n      left: 0;\n      right: 0;\n      transform: translateY(-50%);\n    }\n  }\n}\n\n/// Applies margin to the component with the increased touch target,\n/// to compensate for the touch target.\n@mixin margin(\n  $component-height,\n  $component-width: null,\n  $touch-target-height: $height,\n  $touch-target-width: $width,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  $vertical-margin-value: math.div($touch-target-height - $component-height, 2);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-top: $vertical-margin-value;\n    margin-bottom: $vertical-margin-value;\n  }\n\n  @if $component-width {\n    $horizontal-margin-value: math.div(\n      $touch-target-width - $component-width,\n      2\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      margin-right: $horizontal-margin-value;\n      margin-left: $horizontal-margin-value;\n    }\n  }\n}\n",".mdc-touch-target-wrapper {\n  display: inline;\n}\n\n.mdc-elevation-overlay {\n  position: absolute;\n  border-radius: inherit;\n  pointer-events: none;\n  opacity: 0;\n  /* @alternate */\n  opacity: var(--mdc-elevation-overlay-opacity, 0);\n  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-elevation-overlay-color, #fff);\n}\n\n.mdc-button {\n  /* @alternate */\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 64px;\n  border: none;\n  outline: none;\n  /* @alternate */\n  line-height: inherit;\n  user-select: none;\n  -webkit-appearance: none;\n  overflow: visible;\n  vertical-align: middle;\n  background: transparent;\n}\n.mdc-button .mdc-elevation-overlay {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n}\n.mdc-button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mdc-button:active {\n  outline: none;\n}\n.mdc-button:hover {\n  cursor: pointer;\n}\n.mdc-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-button .mdc-button__icon { /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n}\n[dir=rtl] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-button .mdc-button__label {\n  position: relative;\n}\n.mdc-button .mdc-button__focus-ring {\n  display: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring {\n    pointer-events: none;\n    border: 2px solid transparent;\n    border-radius: 6px;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    left: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    transform: translate(-50%, -50%);\n    height: calc(\n      100% + 4px\n    );\n    width: calc(\n      100% + 4px\n    );\n    display: block;\n  }\n}\n@media screen and (forced-colors: active) and (forced-colors: active) {\n  .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring {\n    border-color: CanvasText;\n  }\n}\n@media screen and (forced-colors: active) {\n  .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after {\n    content: \"\";\n    border: 2px solid transparent;\n    border-radius: 8px;\n    display: block;\n    position: absolute;\n    top: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    left: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    transform: translate(-50%, -50%);\n    height: calc(100% + 4px);\n    width: calc(100% + 4px);\n  }\n}\n@media screen and (forced-colors: active) and (forced-colors: active) {\n  .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n.mdc-button .mdc-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.mdc-button__label + .mdc-button__icon {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n}\n[dir=rtl] .mdc-button__label + .mdc-button__icon, .mdc-button__label + .mdc-button__icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  /*rtl:end:ignore*/\n}\n\nsvg.mdc-button__icon {\n  fill: currentColor;\n}\n\n.mdc-button--touch {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.mdc-button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n}\n\n.mdc-button {\n  padding: 0 8px 0 8px;\n}\n\n.mdc-button--unelevated {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0 16px 0 16px;\n}\n.mdc-button--unelevated.mdc-button--icon-trailing {\n  padding: 0 12px 0 16px;\n}\n.mdc-button--unelevated.mdc-button--icon-leading {\n  padding: 0 16px 0 12px;\n}\n\n.mdc-button--raised {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0 16px 0 16px;\n}\n.mdc-button--raised.mdc-button--icon-trailing {\n  padding: 0 12px 0 16px;\n}\n.mdc-button--raised.mdc-button--icon-leading {\n  padding: 0 16px 0 12px;\n}\n\n.mdc-button--outlined {\n  border-style: solid;\n  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-button--outlined .mdc-button__ripple {\n  border-style: solid;\n  border-color: transparent;\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-button {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-button .mdc-button__ripple::before,\n.mdc-button .mdc-button__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-button .mdc-button__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-button .mdc-button__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-button .mdc-button__ripple::before,\n.mdc-button .mdc-button__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-button__ripple {\n  position: absolute;\n  box-sizing: content-box;\n  overflow: hidden;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.mdc-button {\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-text-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-text-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-text-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-text-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-text-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));\n  height: 36px;\n  /* @alternate */\n  height: var(--mdc-text-button-container-height, 36px);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px));\n}\n.mdc-button:not(:disabled) {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-text-button-label-text-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-button .mdc-button__icon {\n  font-size: 1.125rem;\n  /* @alternate */\n  font-size: var(--mdc-text-button-with-icon-icon-size, 1.125rem);\n  width: 1.125rem;\n  /* @alternate */\n  width: var(--mdc-text-button-with-icon-icon-size, 1.125rem);\n  height: 1.125rem;\n  /* @alternate */\n  height: var(--mdc-text-button-with-icon-icon-size, 1.125rem);\n}\n.mdc-button .mdc-button__ripple::before,\n.mdc-button .mdc-button__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-text-button-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button:hover .mdc-button__ripple::before, .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-text-button-hover-state-layer-opacity, 0.04);\n}\n.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-text-button-focus-state-layer-opacity, 0.12);\n}\n.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-text-button-pressed-state-layer-opacity, 0.12);\n}\n.mdc-button.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-text-button-pressed-state-layer-opacity, 0.12);\n}\n.mdc-button .mdc-button__ripple {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px));\n}\n\n.mdc-button--unelevated {\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-filled-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-filled-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-filled-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-filled-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-filled-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));\n  height: 36px;\n  /* @alternate */\n  height: var(--mdc-filled-button-container-height, 36px);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px));\n}\n.mdc-button--unelevated:not(:disabled) {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-filled-button-container-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button--unelevated:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  background-color: var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12));\n}\n.mdc-button--unelevated:not(:disabled) {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-filled-button-label-text-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-button--unelevated:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-button--unelevated .mdc-button__icon {\n  font-size: 1.125rem;\n  /* @alternate */\n  font-size: var(--mdc-filled-button-with-icon-icon-size, 1.125rem);\n  width: 1.125rem;\n  /* @alternate */\n  width: var(--mdc-filled-button-with-icon-icon-size, 1.125rem);\n  height: 1.125rem;\n  /* @alternate */\n  height: var(--mdc-filled-button-with-icon-icon-size, 1.125rem);\n}\n.mdc-button--unelevated .mdc-button__ripple::before,\n.mdc-button--unelevated .mdc-button__ripple::after {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-filled-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-button--unelevated:hover .mdc-button__ripple::before, .mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-filled-button-hover-state-layer-opacity, 0.08);\n}\n.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-filled-button-focus-state-layer-opacity, 0.24);\n}\n.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-filled-button-pressed-state-layer-opacity, 0.24);\n}\n.mdc-button--unelevated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-filled-button-pressed-state-layer-opacity, 0.24);\n}\n.mdc-button--unelevated .mdc-button__ripple {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px));\n}\n\n.mdc-button--raised {\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-protected-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-protected-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-protected-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-protected-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-protected-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));\n  height: 36px;\n  /* @alternate */\n  height: var(--mdc-protected-button-container-height, 36px);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));\n  --mdc-elevation-box-shadow-for-gss: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--raised:not(:disabled) {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button--raised:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  background-color: var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12));\n}\n.mdc-button--raised:not(:disabled) {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-protected-button-label-text-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-button--raised:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-button--raised .mdc-button__icon {\n  font-size: 1.125rem;\n  /* @alternate */\n  font-size: var(--mdc-protected-button-with-icon-icon-size, 1.125rem);\n  width: 1.125rem;\n  /* @alternate */\n  width: var(--mdc-protected-button-with-icon-icon-size, 1.125rem);\n  height: 1.125rem;\n  /* @alternate */\n  height: var(--mdc-protected-button-with-icon-icon-size, 1.125rem);\n}\n.mdc-button--raised .mdc-button__ripple::before,\n.mdc-button--raised .mdc-button__ripple::after {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-protected-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-button--raised:hover .mdc-button__ripple::before, .mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-protected-button-hover-state-layer-opacity, 0.08);\n}\n.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-protected-button-focus-state-layer-opacity, 0.24);\n}\n.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-protected-button-pressed-state-layer-opacity, 0.24);\n}\n.mdc-button--raised.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-protected-button-pressed-state-layer-opacity, 0.24);\n}\n.mdc-button--raised .mdc-button__ripple {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));\n}\n.mdc-button--raised.mdc-ripple-upgraded--background-focused, .mdc-button--raised:not(.mdc-ripple-upgraded):focus {\n  --mdc-elevation-box-shadow-for-gss: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-focus-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--raised:hover {\n  --mdc-elevation-box-shadow-for-gss: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-hover-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--raised:not(:disabled):active {\n  --mdc-elevation-box-shadow-for-gss: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-pressed-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--raised:disabled {\n  --mdc-elevation-box-shadow-for-gss: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  box-shadow: var(--mdc-protected-button-disabled-container-elevation, var(--mdc-elevation-box-shadow-for-gss));\n}\n.mdc-button--outlined {\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-outlined-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-outlined-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-outlined-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-outlined-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-outlined-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));\n  height: 36px;\n  /* @alternate */\n  height: var(--mdc-outlined-button-container-height, 36px);\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));\n  padding: 0 15px 0 15px;\n  border-width: 1px;\n  /* @alternate */\n  border-width: var(--mdc-outlined-button-outline-width, 1px);\n}\n.mdc-button--outlined:not(:disabled) {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-outlined-button-label-text-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button--outlined:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-button--outlined .mdc-button__icon {\n  font-size: 1.125rem;\n  /* @alternate */\n  font-size: var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);\n  width: 1.125rem;\n  /* @alternate */\n  width: var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);\n  height: 1.125rem;\n  /* @alternate */\n  height: var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);\n}\n.mdc-button--outlined .mdc-button__ripple::before,\n.mdc-button--outlined .mdc-button__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-outlined-button-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-button--outlined:hover .mdc-button__ripple::before, .mdc-button--outlined.mdc-ripple-surface--hover .mdc-button__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-outlined-button-hover-state-layer-opacity, 0.04);\n}\n.mdc-button--outlined.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before, .mdc-button--outlined:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-outlined-button-focus-state-layer-opacity, 0.12);\n}\n.mdc-button--outlined:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-button--outlined:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-outlined-button-pressed-state-layer-opacity, 0.12);\n}\n.mdc-button--outlined.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-outlined-button-pressed-state-layer-opacity, 0.12);\n}\n.mdc-button--outlined .mdc-button__ripple {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));\n}\n.mdc-button--outlined:not(:disabled) {\n  border-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  border-color: var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12));\n}\n.mdc-button--outlined:disabled {\n  border-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  border-color: var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12));\n}\n.mdc-button--outlined.mdc-button--icon-trailing {\n  padding: 0 11px 0 15px;\n}\n.mdc-button--outlined.mdc-button--icon-leading {\n  padding: 0 15px 0 11px;\n}\n.mdc-button--outlined .mdc-button__ripple {\n  top: -1px;\n  left: -1px;\n  bottom: -1px;\n  right: -1px;\n  border-width: 1px;\n  /* @alternate */\n  border-width: var(--mdc-outlined-button-outline-width, 1px);\n}\n.mdc-button--outlined .mdc-button__touch {\n  left: calc(-1 * 1px);\n  /* @alternate */\n  left: calc(-1 * var(--mdc-outlined-button-outline-width, 1px));\n  width: calc(100% + 2 * 1px);\n  /* @alternate */\n  width: calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px));\n}\n\n.mdc-button--raised .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__icon,\n.mdc-button--outlined .mdc-button__icon {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: -4px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-button--raised .mdc-button__icon, [dir=rtl] .mdc-button--unelevated .mdc-button__icon, [dir=rtl] .mdc-button--outlined .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=rtl], .mdc-button--unelevated .mdc-button__icon[dir=rtl], .mdc-button--outlined .mdc-button__icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: -4px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-button--raised .mdc-button__label + .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__label + .mdc-button__icon,\n.mdc-button--outlined .mdc-button__label + .mdc-button__icon {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: -4px;\n}\n[dir=rtl] .mdc-button--raised .mdc-button__label + .mdc-button__icon, [dir=rtl] .mdc-button--unelevated .mdc-button__label + .mdc-button__icon, [dir=rtl] .mdc-button--outlined .mdc-button__label + .mdc-button__icon, .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir=rtl], .mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir=rtl], .mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: -4px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  /*rtl:end:ignore*/\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --mdc-theme-primary: #006874;\n    --mdc-theme-on-primary: #ffffff;\n    --mdc-theme-secondary: #5c6300;\n    --mdc-theme-on-secondary: #ffffff;\n    --mdc-theme-surface: #fafdfd;\n    --mdc-theme-on-surface: #191c1d;\n    --mdc-theme-background: #fafdfd;\n    --mdc-theme-on-background: #191c1d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --mdc-theme-primary: #4fd8eb;\n    --mdc-theme-on-primary: #00363d;\n    --mdc-theme-secondary: #c2d016;\n    --mdc-theme-on-secondary: #2f3300;\n    --mdc-theme-surface-base: 195, 7.4%;\n    --mdc-theme-surface-l: 15.6%;\n    --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\n    --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\n    --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\n    --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\n    --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\n    --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\n    --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\n    --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n    --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\n    --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\n    --mdc-theme-on-surface: #e1e3e3;\n    --mdc-theme-background: #191c1d;\n    --mdc-theme-on-background: #e1e3e3;\n    --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdc-elevation--z1 {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-elevation--z2 {\n    background: var(--mdc-theme-surface-z2);\n  }\n  .mdc-elevation--z3 {\n    background: var(--mdc-theme-surface-z3);\n  }\n  .mdc-elevation--z4 {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-elevation--z5 {\n    background: var(--mdc-theme-surface-z5);\n  }\n  .mdc-elevation--z6 {\n    background: var(--mdc-theme-surface-z6);\n  }\n  .mdc-elevation--z7 {\n    background: var(--mdc-theme-surface-z7);\n  }\n  .mdc-drawer.mdc-drawer--modal {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__title {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__subtitle {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-surface-z9);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar {\n    background-color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar__title {\n    color: var(--mdc-theme-on-primary);\n  }\n  .mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-tab.mdc-tab--active .mdc-tab__icon, .mdc-tab.mdc-tab--active .mdc-tab__text-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__header-cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: var(--mdc-theme-surface-z3);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__title {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog__actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined .mdc-notched-outline {\n    z-index: -1;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-primary);\n  }\n}\n.mdc-typography {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);\n}\n\n.mdc-typography--headline1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 6rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline1-font-size, 6rem);\n  line-height: 6rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline1-line-height, 6rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline1-font-weight, 300);\n  letter-spacing: -0.015625em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline1-text-transform, inherit);\n}\n\n.mdc-typography--headline2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline2-font-size, 3.75rem);\n  line-height: 3.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline2-line-height, 3.75rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline2-font-weight, 300);\n  letter-spacing: -0.0083333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline2-text-transform, inherit);\n}\n\n.mdc-typography--headline3 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline3-font-size, 3rem);\n  line-height: 3.125rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline3-line-height, 3.125rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline3-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline3-text-transform, inherit);\n}\n\n.mdc-typography--headline4 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 2.125rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline4-font-size, 2.125rem);\n  line-height: 2.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline4-line-height, 2.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline4-font-weight, 400);\n  letter-spacing: 0.0073529412em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline4-text-transform, inherit);\n}\n\n.mdc-typography--headline5 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.5rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline5-font-size, 1.5rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline5-line-height, 2rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline5-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline5-text-transform, inherit);\n}\n\n.mdc-typography--headline6 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n}\n\n.mdc-typography--subtitle1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n}\n\n.mdc-typography--subtitle2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n}\n\n.mdc-typography--body1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body1-font-size, 1rem);\n  line-height: 1.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body1-line-height, 1.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body1-font-weight, 400);\n  letter-spacing: 0.03125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body1-text-transform, inherit);\n}\n\n.mdc-typography--body2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-typography--caption {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-typography--button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n}\n\n.mdc-typography--overline {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n}\n\nhtml {\n  background-color: var(--mdc-theme-background);\n}\n\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  vertical-align: middle;\n}\n\n.mdc-icon-button.actionsButton {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n\n.main-content {\n  padding: 1rem;\n}\n\n.content-section {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.demo-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.demo-group.wrap {\n  flex-wrap: wrap;\n}","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/theme/custom-properties';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n@use './elevation-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @for $z-value from 0 through 24 {\n    .mdc-elevation--z#{$z-value} {\n      @include elevation-theme.elevation($z-value, $query: $query);\n    }\n  }\n\n  .mdc-elevation-transition {\n    @include feature-targeting.targets($feat-animation) {\n      transition: elevation-theme.transition-value();\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      will-change: elevation-theme.$property;\n    }\n  }\n}\n\n///\n/// Called once per application to set up the global default elevation styles.\n///\n@mixin overlay-common($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-elevation-overlay {\n    @include feature-targeting.targets($feat-structure) {\n      @include base-mixins.emit-once('mdc-elevation/common/structure') {\n        position: absolute;\n        border-radius: inherit;\n        pointer-events: none;\n\n        @include theme.property(\n          opacity,\n          custom-properties.create(--mdc-elevation-overlay-opacity, 0)\n        );\n      }\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      @include base-mixins.emit-once('mdc-elevation/common/animation') {\n        transition: elevation-theme.overlay-transition-value();\n      }\n    }\n\n    @include base-mixins.emit-once('mdc-elevation/common/color') {\n      $fill-color: custom-properties.create(\n        --mdc-elevation-overlay-color,\n        elevation-theme.$overlay-color\n      );\n      @include elevation-theme.overlay-fill-color($fill-color, $query: $query);\n    }\n  }\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n@use './gss';\n\n/// When true, add an additional property/value declaration before declarations\n/// that use advanced features such as custom properties or CSS functions. This\n/// adds fallback support for older browsers such as IE11 that do not support\n/// these features at the cost of additional CSS. Set this variable to false to\n/// disable generating fallback declarations.\n$enable-fallback-declarations: true !default;\n\n/// Writes a CSS property/value declaration. This mixin is used throughout the\n/// theme package for consistency for dynamically setting CSS property values.\n///\n/// This mixin may optionally take a fallback value. For advanced features such\n/// as custom properties or CSS functions like min and max, a fallback value is\n/// recommended to support older browsers.\n///\n/// @param {String} $property - The CSS property of the declaration.\n/// @param {*} $value - The value of the CSS declaration. The value should be\n///     resolved by other theme functions first (i.e. custom property Maps and\n///     Material theme keys are not supported in this mixin). If the value is\n///     null, no declarations will be emitted.\n/// @param {*} $fallback - An optional fallback value for older browsers. If\n///     provided, a second property/value declaration will be added before the\n///     main property/value declaration.\n/// @param {Map} $gss - An optional Map of GSS annotations to add.\n/// @param {Bool} $important - If true, add `!important` to the declaration.\n@mixin declaration(\n  $property,\n  $value,\n  $fallback-value: null,\n  $gss: (),\n  $important: false\n) {\n  // Normally setting a null value to a property will not emit CSS, so mixins\n  // wouldn't need to check this. However, Sass will throw an error if the\n  // interpolated property is a custom property.\n  @if $value != null {\n    $important-rule: if($important, ' !important', '');\n\n    @if $fallback-value and $enable-fallback-declarations {\n      @include gss.annotate($gss);\n      #{$property}: #{$fallback-value} #{$important-rule};\n\n      // Add @alternate to annotations.\n      $gss: map.merge(\n        $gss,\n        (\n          alternate: true,\n        )\n      );\n    }\n\n    @include gss.annotate($gss);\n    #{$property}: #{$value}#{$important-rule};\n  }\n}\n\n/// Unpacks shorthand values for CSS properties (i.e. lists of 1-3 values).\n/// If a list of 4 values is given, it is returned as-is.\n///\n/// Examples:\n///\n/// unpack-value(4px) => 4px 4px 4px 4px\n/// unpack-value(4px 2px) => 4px 2px 4px 2px\n/// unpack-value(4px 2px 2px) => 4px 2px 2px 2px\n/// unpack-value(4px 2px 0 2px) => 4px 2px 0 2px\n///\n/// @param {Number | Map | List} $value - List of 1 to 4 value numbers.\n/// @return {List} a List of 4 value numbers.\n@function unpack-value($value) {\n  @if meta.type-of($value) == 'map' or list.length($value) == 1 {\n    @return $value $value $value $value;\n  } @else if list.length($value) == 4 {\n    @return $value;\n  } @else if list.length($value) == 3 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 3)\n      list.nth($value, 2);\n  } @else if list.length($value) == 2 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 1)\n      list.nth($value, 2);\n  }\n\n  @error \"Invalid CSS property value: '#{$value}' is more than 4 values\";\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n\n/// Adds optional GSS annotation comments. Useful for theme mixins where one or\n/// more properties are set indirectly.\n///\n/// Annotations may be provided as a Map of annotations or as named arguments.\n///\n/// @example - scss\n///   @include annotate((noflip: true));\n///   left: 0;\n///\n/// @example - scss\n///   @include annotate($noflip: true);\n///   left: 0;\n///\n/// @example - css\n///   /* @noflip */ /*rtl:ignore*/\n///   left: 0;\n///\n/// @param {Map} $annotations - Map of annotations. Values must be set to `true`\n///     for an annotation to be added.\n@mixin annotate($annotations...) {\n  $keywords: meta.keywords($annotations);\n  @if list.length($annotations) > 0 {\n    $annotations: list.nth($annotations, 1);\n  } @else {\n    $annotations: $keywords;\n  }\n\n  @if (map.get($annotations, alternate) == true) {\n    /* @alternate */\n  }\n\n  // noflip must be the last tag right before the property\n  @if (map.get($annotations, noflip) == true) {\n    /* @noflip */ /*rtl:ignore*/\n  }\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/elevation/elevation';\n@use '@material/elevation/elevation-theme';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/ripple/ripple-theme';\n@use '@material/rtl/rtl';\n@use '@material/dom/dom';\n@use '@material/touch-target/touch-target';\n@use '@material/focus-ring/focus-ring';\n@use '@material/typography/typography';\n@use './button-shared-theme';\n\n@mixin static-styles($query: feature-targeting.all()) {\n  @include _static-styles-base($query: $query);\n  @include _typography-styles($query: $query);\n}\n\n@mixin _static-styles-base($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include touch-target.wrapper($query); // COPYBARA_COMMENT_THIS_LINE\n  // prettier-ignore\n  @include elevation.overlay-common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  // postcss-bem-linter: define button\n  .mdc-button {\n    @include _root-structure($query);\n    // The icon CSS class overrides styles defined in the .material-icons CSS\n    // class, which is loaded separately so the order of CSS definitions is not\n    // guaranteed. Therefore, increase specifity by nesting this class to ensure\n    // overrides apply.\n    .mdc-button__icon {\n      @include feature-targeting.targets($feat-structure) {\n        @include _icon-structure;\n      }\n    }\n\n    .mdc-button__label {\n      @include feature-targeting.targets($feat-structure) {\n        // Necessary such that label is stacked on top of ripple\n        // (since ripple is a positioned element, non-positioned elements\n        // appear under it).\n        position: relative;\n      }\n    }\n\n    .mdc-button__focus-ring {\n      @include feature-targeting.targets($feat-structure) {\n        display: none;\n      }\n    }\n\n    @include ripple-theme.focus {\n      .mdc-button__focus-ring {\n        @include dom.forced-colors-mode($exclude-ie11: true) {\n          @include focus-ring.focus-ring($query: $query);\n\n          @include feature-targeting.targets($feat-structure) {\n            display: block;\n          }\n        }\n      }\n    }\n\n    .mdc-button__touch {\n      @include touch-target.touch-target($query: $query);\n    }\n  }\n\n  .mdc-button__label + .mdc-button__icon {\n    @include feature-targeting.targets($feat-structure) {\n      @include icon-trailing;\n    }\n  }\n\n  svg.mdc-button__icon {\n    @include feature-targeting.targets($feat-structure) {\n      @include icon-svg;\n    }\n  }\n\n  .mdc-button--touch {\n    // Touch target doesn't change with height. It simply gets removed if\n    // density (height) changes. Therefore, it is a static style.\n    @include touch-target.margin(\n      $component-height: button-shared-theme.$height,\n      $query: $query\n    );\n  }\n  // postcss-bem-linter: end\n}\n\n@mixin _typography-styles($query) {\n  .mdc-button {\n    // Exclude properties declared in theme styles.\n    @include typography.typography(\n      button,\n      $exclude-props: (\n        font-size,\n        line-height,\n        font-weight,\n        letter-spacing,\n        text-transform\n      ),\n      $query: $query\n    );\n  }\n}\n\n/// @deprecated Contains typography declarations now part of theme-styles.\n@mixin deprecated-static-styles-without-ripple(\n  $query: feature-targeting.all()\n) {\n  @include _deprecated-typography-styles($query: $query);\n  @include _static-styles-base($query: $query);\n}\n\n@mixin _deprecated-typography-styles($query) {\n  .mdc-button {\n    @include typography.typography(button, $query);\n  }\n}\n\n@mixin deprecated-base($query) {\n  @include base($query);\n}\n\n@mixin base($query) {\n  @include typography.typography(button, $query);\n  @include _root-structure($query: $query);\n}\n\n@mixin _root-structure($query) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include elevation-theme.overlay-surface-position($query: $query);\n  @include elevation-theme.overlay-dimensions(100%, $query: $query);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: inline-flex;\n    // position: relative; already set in mdc-elevation-overlay-surface-position\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    min-width: 64px;\n    border: none;\n    outline: none;\n    /* @alternate */\n    line-height: inherit;\n    user-select: none;\n    -webkit-appearance: none;\n    // Even though `visible` is the default, IE 11 computes the property as\n    // `hidden` in some cases, unless it's explicitly defined here.\n    overflow: visible;\n    vertical-align: middle;\n    background: transparent;\n  }\n\n  &::-moz-focus-inner {\n    @include feature-targeting.targets($feat-structure) {\n      padding: 0;\n      border: 0;\n    }\n  }\n\n  // postcss-bem-linter: ignore\n  &:active {\n    @include feature-targeting.targets($feat-structure) {\n      outline: none;\n    }\n  }\n\n  &:hover {\n    @include feature-targeting.targets($feat-structure) {\n      cursor: pointer;\n    }\n  }\n\n  &:disabled {\n    @include feature-targeting.targets($feat-structure) {\n      cursor: default;\n      pointer-events: none;\n    }\n  }\n}\n\n@mixin icon {\n  @include _icon-structure;\n  @include _icon-size(18px);\n}\n\n@mixin _icon-structure {\n  @include rtl.reflexive-box(margin, right, 8px);\n\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n}\n\n@mixin _icon-size($size-px) {\n  $icon-size: typography.px-to-rem($size-px);\n\n  font-size: $icon-size;\n  height: $icon-size;\n  width: $icon-size;\n}\n\n@mixin icon-trailing {\n  @include rtl.reflexive-box(margin, left, 8px);\n}\n\n@mixin icon-svg {\n  fill: currentColor;\n}\n\n@mixin icon-contained {\n  @include rtl.reflexive-property(margin, -4px, 8px);\n}\n\n@mixin icon-contained-trailing {\n  @include rtl.reflexive-property(margin, 8px, -4px);\n}\n\n@mixin raised-transition($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: elevation-theme.transition-value();\n  }\n}\n\n/// @deprecated Private style mixin for partners; not available for public use.\n@mixin deprecated-icon {\n  @include icon;\n}\n\n/// @deprecated Private style mixin for partners; not available for public use.\n@mixin deprecated-icon-trailing {\n  @include icon-trailing;\n}\n\n/// @deprecated Private style mixin for partners; not available for public use.\n@mixin deprecated-icon-svg {\n  @include icon-svg;\n}\n\n/// @deprecated Private style mixin for partners; not available for public use.\n@mixin deprecated-icon-contained {\n  @include icon-contained;\n}\n\n/// @deprecated Private style mixin for partners; not available for public use.\n@mixin deprecated-icon-contained-trailing {\n  @include icon-contained-trailing;\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use 'sass:math';\n@use 'sass:meta';\n@use '@material/animation/variables' as animation-variables;\n@use '@material/theme/custom-properties';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/css';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n\n$baseline-color: black !default;\n$umbra-opacity: 0.2 !default;\n$penumbra-opacity: 0.14 !default;\n$ambient-opacity: 0.12 !default;\n\n$umbra-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 2px 1px -1px',\n  2: '0px 3px 1px -2px',\n  3: '0px 3px 3px -2px',\n  4: '0px 2px 4px -1px',\n  5: '0px 3px 5px -1px',\n  6: '0px 3px 5px -1px',\n  7: '0px 4px 5px -2px',\n  8: '0px 5px 5px -3px',\n  9: '0px 5px 6px -3px',\n  10: '0px 6px 6px -3px',\n  11: '0px 6px 7px -4px',\n  12: '0px 7px 8px -4px',\n  13: '0px 7px 8px -4px',\n  14: '0px 7px 9px -4px',\n  15: '0px 8px 9px -5px',\n  16: '0px 8px 10px -5px',\n  17: '0px 8px 11px -5px',\n  18: '0px 9px 11px -5px',\n  19: '0px 9px 12px -6px',\n  20: '0px 10px 13px -6px',\n  21: '0px 10px 13px -6px',\n  22: '0px 10px 14px -6px',\n  23: '0px 11px 14px -7px',\n  24: '0px 11px 15px -7px',\n) !default;\n\n$penumbra-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 1px 1px 0px',\n  2: '0px 2px 2px 0px',\n  3: '0px 3px 4px 0px',\n  4: '0px 4px 5px 0px',\n  5: '0px 5px 8px 0px',\n  6: '0px 6px 10px 0px',\n  7: '0px 7px 10px 1px',\n  8: '0px 8px 10px 1px',\n  9: '0px 9px 12px 1px',\n  10: '0px 10px 14px 1px',\n  11: '0px 11px 15px 1px',\n  12: '0px 12px 17px 2px',\n  13: '0px 13px 19px 2px',\n  14: '0px 14px 21px 2px',\n  15: '0px 15px 22px 2px',\n  16: '0px 16px 24px 2px',\n  17: '0px 17px 26px 2px',\n  18: '0px 18px 28px 2px',\n  19: '0px 19px 29px 2px',\n  20: '0px 20px 31px 3px',\n  21: '0px 21px 33px 3px',\n  22: '0px 22px 35px 3px',\n  23: '0px 23px 36px 3px',\n  24: '0px 24px 38px 3px',\n) !default;\n\n$ambient-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 1px 3px 0px',\n  2: '0px 1px 5px 0px',\n  3: '0px 1px 8px 0px',\n  4: '0px 1px 10px 0px',\n  5: '0px 1px 14px 0px',\n  6: '0px 1px 18px 0px',\n  7: '0px 2px 16px 1px',\n  8: '0px 3px 14px 2px',\n  9: '0px 3px 16px 2px',\n  10: '0px 4px 18px 3px',\n  11: '0px 4px 20px 3px',\n  12: '0px 5px 22px 4px',\n  13: '0px 5px 24px 4px',\n  14: '0px 5px 26px 4px',\n  15: '0px 6px 28px 5px',\n  16: '0px 6px 30px 5px',\n  17: '0px 6px 32px 5px',\n  18: '0px 7px 34px 6px',\n  19: '0px 7px 36px 6px',\n  20: '0px 8px 38px 7px',\n  21: '0px 8px 40px 7px',\n  22: '0px 8px 42px 7px',\n  23: '0px 9px 44px 8px',\n  24: '0px 9px 46px 8px',\n) !default;\n\n// The css property used for elevation. In most cases this should not be changed. It is exposed\n// as a variable for abstraction / easy use when needing to reference the property directly, for\n// example in a `will-change` rule.\n$property: box-shadow !default;\n\n// The default color for the elevation overlay.\n$overlay-color: #fff;\n\n// The css property used for elevation overlay transitions. In most cases this should not be changed. It is exposed\n// as a variable for abstraction / easy use when needing to reference the property directly, for\n// example in a `will-change` rule.\n$overlay-property: opacity !default;\n\n// The default duration value for elevation transitions.\n$transition-duration: 280ms !default;\n\n// The default easing value for elevation transitions.\n$transition-timing-function: animation-variables.$standard-curve-timing-function !default;\n\n///\n/// Sets the elevation transition value.\n///\n/// @param {String} $duration - The duration of the transition.\n/// @param {String} $easing - The easing function for the transition.\n/// @return {String}\n///\n@function transition-value(\n  $duration: $transition-duration,\n  $easing: $transition-timing-function\n) {\n  @return #{$property} #{$duration} #{$easing};\n}\n\n///\n/// Sets the elevation overlay transition value.\n///\n/// @param {String} $duration - The duration of the transition.\n/// @param {String} $easing - The easing function for the transition.\n/// @return {String}\n///\n@function overlay-transition-value(\n  $duration: $transition-duration,\n  $easing: $transition-timing-function\n) {\n  @return #{$overlay-property} #{$duration} #{$easing};\n}\n\n///\n/// Creates a box-shadow from the Material elevation system.\n/// @param {Number} $level - the level of the Material elevation system.\n/// @param {String} $color - the color of the shadow.\n/// @param {Number} $opacity-boost [0] - optional opacity boost for the shadow.\n/// @return {List} the complete box shadow.\n///\n@function _box-shadow($level, $color, $opacity-boost: 0) {\n  $color: theme-color.prop-value($color);\n  $umbra-z-value: map.get($umbra-map, $level);\n  $penumbra-z-value: map.get($penumbra-map, $level);\n  $ambient-z-value: map.get($ambient-map, $level);\n\n  $umbra-color: rgba($color, $umbra-opacity + $opacity-boost);\n  $penumbra-color: rgba($color, $penumbra-opacity + $opacity-boost);\n  $ambient-color: rgba($color, $ambient-opacity + $opacity-boost);\n\n  @return (\n    #{'#{$umbra-z-value} #{$umbra-color}'},\n    #{'#{$penumbra-z-value} #{$penumbra-color}'},\n    #{$ambient-z-value} $ambient-color\n  );\n}\n\n// Returns the correct box-shadow specified by $z-value.\n// The $z-value must be between 0 and 24.\n// If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n// $opacity-boost.\n@function elevation-box-shadow(\n  $z-value,\n  $color: $baseline-color,\n  $opacity-boost: 0\n) {\n  @if meta.type-of($z-value) != number or not math.is-unitless($z-value) {\n    @error \"$z-value must be a unitless number, but received '#{$z-value}'\";\n  }\n\n  @if $z-value < 0 or $z-value > 24 {\n    @error \"$z-value must be between 0 and 24, but received '#{$z-value}'\";\n  }\n\n  @return _box-shadow($z-value, $color, $opacity-boost);\n}\n\n///\n/// Returns a shadow or null if params are invalid.\n/// @param {Number} $level - the level of the Material elevation system.\n/// @param {String} $color - the color of the shadow.\n/// @return {List|null} the complete box shadow or null.\n///\n@function _shadow($level, $color) {\n  @if $level == null and $color == null {\n    // Do not emit a warning if both are null, which means the user did not\n    // provide tokens.\n    @return null;\n  }\n\n  @if $level == null or $color == null {\n    // If one of the tokens is null, emit a warning: the user may not realize\n    // that both are required.\n    @warn \"both $level and $color are required; received $level: '#{$level}', $color: '#{$color}'\";\n    @return null;\n  }\n\n  @if $level < 0 or $level > 24 {\n    @warn \"$level must be between 0 and 24; received '#{$level}'\";\n    @return null;\n  }\n\n  @return _box-shadow($level, $color);\n}\n\n@function get-elevation($level) {\n  @return (box-shadow: elevation-box-shadow($level));\n}\n\n///\n/// Sets the shadow of the element.\n///\n/// @param {String} $box-shadow - The shadow to apply to the element.\n///\n@mixin _box-shadow($shadow, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(box-shadow, $shadow);\n  }\n}\n\n///\n/// Sets the shadow of the element.\n///\n/// @param {String} $box-shadow - The shadow to apply to the element.\n///\n@mixin shadow($box-shadow, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @if custom-properties.is-custom-prop($box-shadow) {\n      // TODO(b/185188458): Use theme.property() once resolved.\n      $fallback: custom-properties.get-fallback($box-shadow);\n\n      // var(--<box-shadow-prop>, var(--m-elevation-box-shadow-for-gss))\n      $gss-custom-prop: custom-properties.create(\n        custom-properties.get-varname($box-shadow),\n        custom-properties.create(elevation-box-shadow-for-gss)\n      );\n\n      $value: custom-properties.create-var($gss-custom-prop);\n      @if $value == null {\n        // Custom properties are disabled, since $gss-custom-prop\n        // does not have a fallback. Avoid emitting two non-custom\n        // prop declarations by setting $fallback to null.\n        $value: $fallback;\n        $fallback: null;\n      }\n\n      @include custom-properties.declaration(\n        custom-properties.create(elevation-box-shadow-for-gss, $fallback)\n      );\n      @include css.declaration(box-shadow, $value, $fallback-value: $fallback);\n    } @else {\n      /* @alternate */\n      box-shadow: $box-shadow;\n    }\n  }\n}\n\n///\n/// Sets the elevation overlay surface required positioning.\n///\n@mixin overlay-surface-position($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    /* @alternate */\n    position: relative;\n  }\n}\n\n///\n/// Sets the dimensions of the elevation overlay, including positioning and sizing.\n///\n/// @param {Number} $width - The width of the elevation overlay\n/// @param {Number} [$height] - The height of the elevation overlay\n/// @param {Boolean} [$has-content-sizing] - Set to false if the container has no content sizing\n///\n@mixin overlay-dimensions(\n  $width,\n  $height: $width,\n  $has-content-sizing: true,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-elevation-overlay {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(width, $width);\n      @include theme.property(height, $height);\n\n      @if $has-content-sizing {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n      } @else {\n        top: 50%;\n        @include rtl.ignore-next-line();\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n    }\n  }\n}\n\n///\n/// Sets the elevation overlay fill color.\n/// Expected to be called directly on the elevation overlay element.\n///\n/// @param {Color} $color - The color of the elevation overlay.\n///\n@mixin overlay-fill-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(background-color, $color);\n  }\n}\n\n///\n/// Applies the given color to the container of the overlay.\n/// @param {color} $color - the color of the overlay container\n///\n@mixin overlay-container-color($color, $query: feature-targeting.all()) {\n  .mdc-elevation-overlay {\n    @include overlay-fill-color($color, $query: $query);\n  }\n}\n\n///\n/// Sets the elevation overlay opacity.\n/// Expected to be called from a parent element.\n///\n/// @param {Number} $opacity - The opacity of the elevation overlay.\n///\n@mixin overlay-opacity($opacity, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-elevation-overlay {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n// Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n// The $z-value must be between 0 and 24.\n// If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n// $opacity-boost.\n@mixin elevation(\n  $z-value,\n  $color: $baseline-color,\n  $opacity-boost: 0,\n  $query: feature-targeting.all()\n) {\n  $box-shadow: elevation-box-shadow(\n    $z-value,\n    $color: $color,\n    $opacity-boost: $opacity-boost\n  );\n\n  @include shadow($box-shadow, $query: $query);\n}\n\n///\n/// Represents the configurable values of the elevation theme.\n///\n$_theme-values: (\n  shadow: null,\n  overlay-opacity: null,\n  overlay-color: null,\n);\n\n///\n/// Applies the shadow theme with the given $resolver function.\n/// @param {Function} $resolver - a function that returns a valid theme config.\n///   @see resolver for an example and expected arguments and return value.\n/// Accepts the following optional keyword args:\n/// @param {Number} $elevation - the level in the elevation system.\n/// @param {String} $shadow-color - the color used for the shadow.\n///\n@mixin with-resolver($resolver, $query: feature-targeting.all(), $args...) {\n  @if $resolver {\n    @include _theme(meta.call($resolver, $args...), $query: $query);\n  }\n}\n\n///\n/// Applies the given theme with validation.\n/// @param {Map} $theme - @see $_theme-values for accepted theme properties.\n///\n@mixin theme($theme: (), $query: feature-targeting.all()) {\n  @include theme.validate-theme($_theme-values, $theme);\n  @include _theme($theme, $query: $query);\n}\n\n///\n/// Applies the given theme.\n/// @param {Map} $theme - @see $_theme-values for accepted theme properties.\n///\n@mixin _theme($theme: (), $query: feature-targeting.all()) {\n  @include shadow(map.get($theme, shadow), $query: $query);\n  @include overlay-opacity(map.get($theme, overlay-opacity), $query: $query);\n  @include overlay-container-color(\n    map.get($theme, overlay-color),\n    $query: $query\n  );\n}\n\n///\n/// Transforms the following optional parameters into a theme config.\n/// @param {Number} $elevation - the level of the elevation system in Material.\n/// @param {String} $shadow-color - the color to be used by the shadow.\n/// @return {Map} @see $_theme-values for accepted theme properties.\n///\n@function resolver($args...) {\n  $opts: meta.keywords($args);\n  $elevation: map.get($opts, elevation);\n  $shadow-color: map.get($opts, shadow-color);\n  @if custom-properties.is-custom-prop($elevation) {\n    @return _resolve-custom-props($elevation, $shadow-color);\n  }\n\n  @return (shadow: _shadow($elevation, $shadow-color));\n}\n\n@function _resolve-custom-props($elevation, $shadow-color) {\n  $fallback-dp: custom-properties.get-fallback($elevation);\n  $fallback-shadow-color: custom-properties.get-fallback($shadow-color);\n  $shadow: custom-properties.set-fallback(\n    $elevation,\n    _shadow($fallback-dp, $fallback-shadow-color)\n  );\n  @return (shadow: $shadow);\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:meta';\n@use 'sass:selector';\n@use '@material/theme/gss';\n@use '@material/theme/selector-ext';\n@use '@material/theme/theme';\n\n$include: true !default;\n\n/// Creates a rule that will be applied when a component is within the context\n/// of an RTL layout.\n///\n/// @example - scss\n/// .mdc-foo {\n///   padding-left: 4px;\n///\n///   @include rtl {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n/// }\n///\n/// @example - css\n///   .mdc-foo {\n///     padding-left: 4px;\n///   }\n///\n///   [dir=\"rtl\"] .mdc-foo,\n///   .mdc-foo[dir=\"rtl\"] {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n///\n/// Note that this mixin works by checking for an ancestor element with\n/// `[dir=\"rtl\"]`. As a result, nested `dir` values are not supported:\n///\n/// @example - html\n/// <html dir=\"rtl\">\n///   <!-- ... -->\n///   <div dir=\"ltr\">\n///     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n///   </div>\n/// </html>\n///\n/// In the future, selectors such as the `:dir` pseudo-class\n/// (http://mdn.io/css/:dir) will help us mitigate this.\n///\n/// @content Content to be styled in an RTL context.\n@mixin rtl() {\n  @if ($include) {\n    $dir-rtl: '[dir=rtl]';\n\n    $rtl-selectors: list.join(\n      selector.nest($dir-rtl, &),\n      selector-ext.append-strict(&, $dir-rtl)\n    );\n\n    @at-root {\n      #{$rtl-selectors} {\n        /*rtl:begin:ignore*/\n        @content;\n        /*rtl:end:ignore*/\n      }\n    }\n  }\n}\n\n// Takes a base box-model property name (`margin`, `border`, `padding`, etc.) along with a\n// default direction (`left` or `right`) and value, and emits rules which apply the given value to the\n// specified direction by default and the opposite direction in RTL.\n//\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, left, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 8px;\n//   margin-right: 0;\n//\n//   @include rtl {\n//     margin-left: 0;\n//     margin-right: 8px;\n//   }\n// }\n// ```\n//\n// whereas:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, right, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 0;\n//   margin-right: 8px;\n//\n//   @include rtl {\n//     margin-left: 8px;\n//     margin-right: 0;\n//   }\n// }\n// ```\n//\n// You can also pass an optional 4th `$root-selector` argument which will be forwarded to `mdc-rtl`,\n// e.g. `@include rtl-reflexive-box(margin, left, 8px, '.mdc-component')`.\n//\n// Note that this function will always zero out the original value in an RTL context.\n// If you're trying to flip the values, use `mdc-rtl-reflexive-property()` instead.\n@mixin reflexive-box(\n  $base-property,\n  $default-direction,\n  $value,\n  $replace: null\n) {\n  @if (list.index((right, left), $default-direction) == null) {\n    @error \"Invalid default direction: '#{$default-direction}'. Please specifiy either 'right' or 'left'.\";\n  }\n\n  $left-value: $value;\n  $right-value: 0;\n\n  @if ($default-direction == right) {\n    $left-value: 0;\n    $right-value: $value;\n  }\n\n  @include reflexive-property(\n    $base-property,\n    $left-value,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n// <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-property(margin, auto, 12px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: auto;\n//   margin-right: 12px;\n//\n//   @include rtl {\n//     margin-left: 12px;\n//     margin-right: auto;\n//   }\n// }\n// ```\n//\n// An optional 4th `$root-selector` argument can be given, which will be passed to `mdc-rtl`.\n@mixin reflexive-property(\n  $base-property,\n  $left-value,\n  $right-value,\n  $replace: null\n) {\n  $prop-left: #{$base-property}-left;\n  $prop-right: #{$base-property}-right;\n\n  @include reflexive(\n    $prop-left,\n    $left-value,\n    $prop-right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes an argument specifying a horizontal position property (either 'left' or 'right') as well\n// as a value, and applies that value to the specified position in a LTR context, and flips it in a\n// RTL context. For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-position(left, 0);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 0;\n//   right: initial;\n//\n//   @include rtl {\n//     left: initial;\n//     right: 0;\n//   }\n// }\n// ```\n//\n// An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive-position($position-property, $value, $replace: null) {\n  @if (list.index((right, left), $position-property) == null) {\n    @error \"Invalid position #{position-property}. Please specifiy either right or left\";\n  }\n\n  // TODO: 'initial' is not supported in IE 11. https://caniuse.com/#feat=css-initial-value\n  $left-value: $value;\n  $right-value: initial;\n\n  @if ($position-property == right) {\n    $right-value: $value;\n    $left-value: initial;\n  }\n\n  @include reflexive(\n    left,\n    $left-value,\n    right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes pair of properties with values as arguments and flips it in RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive(left, 2px, right, 5px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 2px;\n//   right: 5px;\n//\n//   @include rtl {\n//     right: 2px;\n//     left: 5px;\n//   }\n// }\n// ```\n//\n// An optional fifth `$root-selector` argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive(\n  $left-property,\n  $left-value,\n  $right-property,\n  $right-value,\n  $replace: null\n) {\n  $left-replace: null;\n  $right-replace: null;\n  @if $replace {\n    @if meta.type-of($left-value) == 'string' {\n      $left-replace: $replace;\n    }\n\n    @if meta.type-of($right-value) == 'string' {\n      $right-replace: $replace;\n    }\n\n    @if $left-replace == null and $right-replace == null {\n      @error 'mdc-rtl: $replace may only be used with strings but neither left nor right values are strings.';\n    }\n\n    // If any replacements are null, treat the entire value as null (do not\n    // emit anything).\n    @each $name, $replacement in $replace {\n      @if $replacement == null {\n        $left-value: null;\n        $right-value: null;\n      }\n    }\n  }\n\n  // Do not emit if either value are null\n  @if $left-value and $right-value {\n    @include _property($left-property, $left-value, $replace: $left-replace);\n    @include _property($right-property, $right-value, $replace: $right-replace);\n\n    @include rtl {\n      @include _property(\n        $left-property,\n        $right-value,\n        $replace: $right-replace\n      );\n      @include _property($right-property, $left-value, $replace: $left-replace);\n    }\n  }\n}\n\n///\n/// Adds RTL ignore annotation when `$mdc-rtl-include` is true.\n///\n@mixin ignore-next-line() {\n  @include gss.annotate(\n    (\n      noflip: $include,\n    )\n  );\n}\n\n///\n/// Adds `@noflip` annotation when `$mdc-rtl-include` is true.\n///\n/// @param {String} $property\n/// @param {String} $value\n/// @param {Map} $replace\n///\n@mixin _property($property, $value, $replace: null) {\n  @include theme.property(\n    $property,\n    $value,\n    $replace: $replace,\n    $gss: (noflip: $include)\n  );\n}\n","// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use '@material/feature-targeting/feature-targeting';\n///\n/// Emits necessary layout styles to set a transparent border around an element\n/// without interfering with the rest of its component layout. The border is\n/// only visible in high-contrast mode. The target element should be a child of\n/// a relatively positioned top-level element (i.e. a ::before pseudo-element).\n///\n/// @param {number} $border-width - The width of the transparent border.\n/// @param {string} $border-style - The style of the transparent border.\n///\n@mixin transparent-border(\n  $border-width: 1px,\n  $border-style: solid,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: $border-width $border-style transparent;\n    border-radius: inherit;\n    content: '';\n    pointer-events: none;\n  }\n\n  // Used to satisfy Firefox v94 which does not render transparent borders in HCM (b/206440838).\n  @include forced-colors-mode($exclude-ie11: true) {\n    @include feature-targeting.targets($feat-structure) {\n      border-color: CanvasText;\n    }\n  }\n}\n\n///\n/// Visually hides text content for accessibility. This text should only be\n/// visible to screen reader users.\n/// See https://a11yproject.com/posts/how-to-hide-content/\n///\n@mixin visually-hidden($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap; /* added line */\n    width: 1px;\n  }\n}\n\n/// Selects for IE11 support.\n///\n/// @content styles to emit for IE11 support\n@mixin ie11-support {\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    @content;\n  }\n}\n\n/// Selects for `forced-colors` high contrast mode.\n///\n/// While in `forced-colors` mode, only system colors should be used.\n///\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors\n/// @content styles to emit in `forced-colors` mode\n@mixin forced-colors-mode($exclude-ie11: false) {\n  @if $exclude-ie11 {\n    @media screen and (forced-colors: active) {\n      @content;\n    }\n  } @else {\n    @media screen and (forced-colors: active), (-ms-high-contrast: active) {\n      @content;\n    }\n  }\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/dom/dom';\n\n$ring-radius-default: 8px !default;\n$inner-ring-width-default: 2px !default;\n$inner-ring-color-default: transparent !default;\n$outer-ring-width-default: 2px !default;\n$outer-ring-color-default: transparent !default;\n$container-outer-padding-default: 2px !default;\n\n/// Styles applied to the component's inner focus ring element.\n///\n/// @param $ring-radius [$ring-radius-default] - Focus ring radius.\n/// @param $inner-ring-width [$inner-ring-width-default] - Inner focus ring width.\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n/// @param $outer-ring-color [$outer-ring-color-default] - Outer focus ring color.\n/// @param $container-outer-padding [$container-outer-padding-default] - The\n///     distance between the focus ring and the container.\n@mixin focus-ring(\n  $query: feature-targeting.all(),\n  $ring-radius: $ring-radius-default,\n  $inner-ring-width: $inner-ring-width-default,\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-width: $outer-ring-width-default,\n  $outer-ring-color: $outer-ring-color-default,\n  $container-outer-padding-vertical: $container-outer-padding-default,\n  $container-outer-padding-horizontal: $container-outer-padding-default\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $container-size-vertical: 100%;\n  @if $container-outer-padding-vertical != 0 {\n    $container-size-vertical: calc(\n      100% + #{$container-outer-padding-vertical * 2}\n    );\n  }\n  $container-size-horizontal: 100%;\n  @if $container-outer-padding-horizontal != 0 {\n    $container-size-horizontal: calc(\n      100% + #{$container-outer-padding-horizontal * 2}\n    );\n  }\n  $outer-ring-size: 100%;\n  @if $outer-ring-width > 0 {\n    $outer-ring-size: calc(100% + #{$outer-ring-width * 2});\n  }\n  @include feature-targeting.targets($feat-structure) {\n    pointer-events: none;\n    border: $inner-ring-width solid $inner-ring-color;\n    border-radius: $ring-radius - $outer-ring-width;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    @include rtl.ignore-next-line();\n    left: 50%;\n    @include rtl.ignore-next-line();\n    transform: translate(-50%, -50%);\n    height: $container-size-vertical;\n    width: $container-size-horizontal;\n\n    @include dom.forced-colors-mode($exclude-ie11: true) {\n      border-color: CanvasText;\n    }\n\n    &::after {\n      content: '';\n      border: $outer-ring-width solid $outer-ring-color;\n      border-radius: $ring-radius;\n      display: block;\n      position: absolute;\n      top: 50%;\n      @include rtl.ignore-next-line();\n      left: 50%;\n      @include rtl.ignore-next-line();\n      transform: translate(-50%, -50%);\n      height: $outer-ring-size;\n      width: $outer-ring-size;\n\n      @include dom.forced-colors-mode($exclude-ie11: true) {\n        border-color: CanvasText;\n      }\n    }\n  }\n}\n/// Customizes the color of the button focus ring.\n///\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n@mixin focus-ring-color(\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-color: $outer-ring-color-default\n) {\n  border-color: $inner-ring-color;\n\n  &::after {\n    border-color: $outer-ring-color;\n  }\n}\n\n/// Customizes the border radius of the button focus ring.\n///\n/// @param {Number} $ring-radius - The border radius of the focus ring.\n/// @param {Number} $outer-ring-width [$outer-ring-width] - Width of the outer\n///     ring, required to compute the radius for the inner ring.\n@mixin focus-ring-radius(\n  $ring-radius,\n  $outer-ring-width: $outer-ring-width-default,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    border-radius: $ring-radius - $outer-ring-width;\n\n    &::after {\n      border-radius: $ring-radius;\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:string';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/custom-properties';\n@use '@material/theme/keys';\n@use '@material/theme/theme';\n\n/// @deprecated Avoid calling this function directly. Instead, configure the\n/// `$styles-<style>` variable Maps.\n@function set-styles_($base-styles, $scale-styles, $override-styles) {\n  $options: (\n    custom-property-prefix: typography,\n  );\n\n  $base-styles: keys.set-values($base-styles, $options: $options);\n\n  @each $style, $style-props in $scale-styles {\n    @each $base-key in map.keys($base-styles) {\n      // Ignore the return result, it's not needed\n      $unused: keys.add-link(keys.combine($style, $base-key), $base-key);\n    }\n\n    // Merge base properties for all styles.\n    $style-props: map.merge($base-styles, $style-props);\n\n    // Merge overrides onto each style.\n    $style-props: map.merge($style-props, map.get($override-styles, $style));\n\n    // Register keys for this style\n    @each $property, $value in $style-props {\n      $unused: keys.set-value(\n        keys.combine($style, $property),\n        $value,\n        $options: $options\n      );\n    }\n\n    // Override original styles with new styles.\n    $scale-styles: map.merge($scale-styles, (#{$style}: $style-props));\n  }\n\n  @return $scale-styles;\n}\n\n@function get-letter-spacing_($tracking, $font-size) {\n  @return math.div($tracking, $font-size * 16) * 1em;\n}\n\n@function px-to-rem($px) {\n  @if custom-properties.is-custom-prop($px) {\n    @return custom-properties.set-fallback(\n      $px,\n      _px-to-rem(custom-properties.get-fallback($px))\n    );\n  }\n  @return _px-to-rem($px);\n}\n\n@function _px-to-rem($px) {\n  @if $px == null {\n    @return null;\n  }\n  @return math.div($px, 16px) * 1rem;\n}\n\n$font-family: string.unquote('Roboto, sans-serif') !default;\n\n// Override styles\n$styles-headline1: () !default;\n$styles-headline2: () !default;\n$styles-headline3: () !default;\n$styles-headline4: () !default;\n$styles-headline5: () !default;\n$styles-headline6: () !default;\n$styles-subtitle1: () !default;\n$styles-subtitle2: () !default;\n$styles-body1: () !default;\n$styles-body2: () !default;\n$styles-caption: () !default;\n$styles-button: () !default;\n$styles-overline: () !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead, or $font-family to set the base font family.\n$base: (\n  font-family: $font-family,\n) !default;\n\n$font-weight-values: (\n  thin: 100,\n  light: 300,\n  regular: 400,\n  medium: 500,\n  bold: 700,\n  black: 900,\n) !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead.\n$styles: set-styles_(\n  $base,\n  (\n    headline1: (\n      font-size: px-to-rem(96px),\n      line-height: px-to-rem(96px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-1.5, 6),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline2: (\n      font-size: px-to-rem(60px),\n      line-height: px-to-rem(60px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-0.5, 3.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline3: (\n      font-size: px-to-rem(48px),\n      line-height: px-to-rem(50px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline4: (\n      font-size: px-to-rem(34px),\n      line-height: px-to-rem(40px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 2.125),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline5: (\n      font-size: px-to-rem(24px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline6: (\n      font-size: px-to-rem(20px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.25, 1.25),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(28px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.15, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(22px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.1, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(24px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.5, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    caption: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.4, 0.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    button: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(36px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(1.25, 0.875),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n    overline: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(2, 0.75),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n  ),\n  (\n    headline1: $styles-headline1,\n    headline2: $styles-headline2,\n    headline3: $styles-headline3,\n    headline4: $styles-headline4,\n    headline5: $styles-headline5,\n    headline6: $styles-headline6,\n    subtitle1: $styles-subtitle1,\n    subtitle2: $styles-subtitle2,\n    body1: $styles-body1,\n    body2: $styles-body2,\n    caption: $styles-caption,\n    button: $styles-button,\n    overline: $styles-overline,\n  )\n) !default;\n\n// A copy of the styles Map that is used to detect compile-time changes for\n// Angular support.\n$_styles-copy: $styles;\n\n@function is-typography-style($style) {\n  @return map.has-key($styles, $style);\n}\n\n@function get-typography-styles() {\n  @return map.keys($styles);\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  .mdc-typography {\n    @include base($query: $query);\n  }\n\n  @each $style in get-typography-styles() {\n    .mdc-typography--#{$style} {\n      @include typography($style, $query: $query);\n    }\n  }\n}\n\n@mixin base($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @include theme.property(font-family, font-family);\n  }\n}\n\n@mixin typography($style, $query: feature-targeting.all(), $exclude-props: ()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @if not is-typography-style($style) {\n    @error \"Invalid style specified! #{$style} doesn't exist. Choose one of #{get-typography-styles()}\";\n  }\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @each $key in keys.get-keys($style) {\n      // <style>-<property>: headline1-font-size\n      // Slice the string past the first key separator to retrieve the\n      // property name\n      $property: string.slice($key, string.index($key, '-') + 1);\n      @if list.index($exclude-props, $property) == null {\n        $current-global-value: map.get($styles, $style, $property);\n        $configured-global-value: map.get($_styles-copy, $style, $property);\n        @if $current-global-value != $configured-global-value {\n          // A compile time change was made to $mdc-typography-styles. To\n          // support Angular, use this value instead of the key's value.\n          @if $current-global-value {\n            // Only emit if the overridden value exists\n            $custom-prop: keys.create-custom-property($key);\n            $custom-prop: custom-properties.set-fallback(\n              $custom-prop,\n              $current-global-value\n            );\n            @include theme.property($property, $custom-prop);\n          }\n        } @else {\n          // Otherwise, use the key, which may be different from the original\n          // configured global value.\n          @include theme.property($property, $key);\n        }\n      }\n    }\n  }\n}\n\n/// Applies antialiasing via font-smoothing to text.\n@mixin smooth-font($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include feature-targeting.targets($feat-typography) {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n}\n\n// Element must be `display: block` or `display: inline-block` for this to work.\n@mixin overflow-ellipsis($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n/// Sets a container's baseline that text content will align to.\n///\n/// If the `$display` is set to a flexbox display, only `$top` baseline may be\n/// set. A separate element must be added as a child of the container with a\n/// `$bottom` baseline.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {String} $display - the display type of the container. May be `flex`,\n///     `inline-flex`, `block`, or `inline-block`.\n@mixin baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (flex, inline-flex, block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $isFlexbox: $display == 'flex' or $display == 'inline-flex';\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: $display;\n\n    @if $isFlexbox {\n      align-items: baseline;\n    }\n  }\n\n  @if $top > 0 {\n    @include baseline-top($top, $query: $query);\n  }\n\n  @if $bottom > 0 {\n    @if $isFlexbox {\n      @error \"mdc-typography: invalid baseline with display type. #{$display} cannot specifiy $bottom. Add a separate child element with its own $bottom.\";\n    }\n\n    @include baseline-bottom($bottom, $query: $query);\n  }\n}\n\n/// Sets the baseline of flow text content.\n///\n/// Separate `$top` and `$bottom` baselines may be specified. You should ensure\n/// that the `$top` baseline matches the previous text content's $bottom\n/// baseline to ensure text is positioned appropriately.\n///\n/// See go/css-baseline for reference on how this mixin works.\n///\n/// This is intended for text flow content only (e.g. `<h1>`, `<p>`, `<span>`,\n/// or `<div>` with only text content). Use `baseline()` to set the baseline of\n/// containers that are flexbox or have non-flow content children.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {Boolean} $lineHeight - the line-height to use for the text. This\n///     is the distance between baselines of multiple lines of text.\n/// @param {String} $display - the display type of the container. May be `block`\n///     or `inline-block`.\n@mixin text-baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $lineHeight: normal,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include baseline(\n    $display: $display,\n    $top: $top,\n    $bottom: $bottom,\n    $query: $query\n  );\n  @include feature-targeting.targets($feat-structure) {\n    @if $top > 0 {\n      margin-top: 0;\n      /* @alternate */\n      line-height: #{$lineHeight};\n    }\n\n    @if $bottom > 0 {\n      margin-bottom: -1 * $bottom;\n    }\n  }\n}\n\n/// Creates a baseline strut from the top of a container. This mixin is for\n/// advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the top of the container to\n///     the text's baseline.\n@mixin baseline-top($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: 0;\n    }\n  }\n}\n\n/// Creates a baseline strut from the baseline to the bottom of a container.\n/// This mixin is for advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the text's baseline to the\n///     bottom of the container.\n@mixin baseline-bottom($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: -1 * $distance;\n    }\n  }\n}\n\n/// Adds an invisible, zero-width prefix to a container's text.\n/// This ensures that the baseline is always where the text would be, instead\n/// of defaulting to the container bottom when text is empty. Do not use this\n/// mixin if the `baseline` mixin is already applied.\n@mixin zero-width-prefix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      content: '\\200b';\n    }\n  }\n}\n\n@mixin baseline-strut_($distance) {\n  display: inline-block;\n  width: 0;\n  height: $distance;\n  content: '';\n}\n\n@function get-font($typography) {\n  @return map.get($styles, $typography, font-family);\n}\n\n@function get-line-height($typography) {\n  @return map.get($styles, $typography, line-height);\n}\n\n@function get-size($typography) {\n  @return map.get($styles, $typography, font-size);\n}\n\n@function get-weight($typography) {\n  @return map.get($styles, $typography, font-weight);\n}\n\n@function get-tracking($typography) {\n  @return map.get($styles, $typography, letter-spacing);\n}\n\n$_typography-theme: (\n  font: null,\n  line-height: null,\n  size: null,\n  weight: null,\n  tracking: null,\n);\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme-keys($_typography-theme, $theme);\n\n  @include theme.property(font-family, map.get($theme, font));\n  @include theme.property(line-height, map.get($theme, line-height));\n  @include theme.property(font-size, map.get($theme, size));\n  @include theme.property(font-weight, map.get($theme, weight));\n  @include theme.property(letter-spacing, map.get($theme, tracking));\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/tokens/resolvers';\n@use './button-ripple';\n@use './button-shared-theme';\n@use './button-text-theme';\n\n@mixin styles(\n  $theme: button-text-theme.$light-theme,\n  $resolver: resolvers.$material,\n  $query: feature-targeting.all()\n) {\n  @include button-base.static-styles($query: $query);\n  @include static-styles($query: $query);\n  .mdc-button {\n    @include button-text-theme.theme-styles($theme, $query: $query);\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  @include static-styles-without-ripple($query: $query);\n  @include button-ripple.static-styles($query: $query);\n}\n\n@mixin static-styles-without-ripple($query: feature-targeting.all()) {\n  .mdc-button {\n    // TODO(b/179402677): move this into theme config\n    @include button-shared-theme.horizontal-padding(\n      button-shared-theme.$horizontal-padding,\n      $query: $query\n    );\n  }\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use 'sass:math';\n@use 'sass:meta';\n@use '@material/density/functions' as density-functions;\n@use '@material/density/variables' as density-variables;\n@use '@material/dom/mixins' as dom-mixins;\n@use '@material/elevation/elevation-theme';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/focus-ring/focus-ring';\n@use '@material/ripple/ripple-theme';\n@use '@material/shape/mixins' as shape-mixins;\n@use '@material/theme/custom-properties';\n@use '@material/theme/state';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n@use '@material/typography/typography';\n@use './button-ripple';\n\n$height: 36px !default;\n$horizontal-padding: 8px !default;\n$contained-horizontal-padding: 16px !default;\n// For a contained button with an icon, the padding on the side of the\n// button with the icon.\n$contained-horizontal-padding-icon: 12px !default;\n\n$minimum-height: 24px !default;\n$maximum-height: $height !default;\n$density-scale: density-variables.$default-scale !default;\n$density-config: (\n  height: (\n    default: $height,\n    maximum: $maximum-height,\n    minimum: $minimum-height,\n  ),\n) !default;\n\n$shape-radius: small !default;\n\n$disabled-ink-color: rgba(theme-color.prop-value(on-surface), 0.38) !default;\n$disabled-container-color: rgba(\n  theme-color.prop-value(on-surface),\n  0.12\n) !default;\n\n@mixin theme($theme, $resolver, $query: feature-targeting.all()) {\n  @include _label-text-typography(\n    (\n      family: map.get($theme, label-text-font),\n      size: map.get($theme, label-text-size),\n      tracking: map.get($theme, label-text-tracking),\n      weight: map.get($theme, label-text-weight),\n      transform: map.get($theme, label-text-transform),\n    ),\n    $query: $query\n  );\n\n  @include container-fill-color(\n    (\n      default: map.get($theme, container-color),\n      disabled: map.get($theme, disabled-container-color),\n    ),\n    $query: $query\n  );\n\n  @include ink-color(\n    (\n      default: map.get($theme, label-text-color),\n      hover: map.get($theme, hover-label-text-color),\n      focus: map.get($theme, focus-label-text-color),\n      pressed: map.get($theme, pressed-label-text-color),\n      disabled: map.get($theme, disabled-label-text-color),\n    ),\n    $query: $query\n  );\n\n  @include icon-color(\n    (\n      default: map.get($theme, with-icon-icon-color),\n      hover: map.get($theme, with-icon-hover-icon-color),\n      focus: map.get($theme, with-icon-focus-icon-color),\n      pressed: map.get($theme, with-icon-pressed-icon-color),\n      disabled: map.get($theme, with-icon-disabled-icon-color),\n    ),\n    $query: $query\n  );\n\n  $icon-size: map.get($theme, with-icon-icon-size);\n  @include _icon-size($icon-size, $query: $query);\n\n  @include _states-colors(\n    (\n      focus: map.get($theme, focus-state-layer-color),\n      hover: map.get($theme, hover-state-layer-color),\n      pressed: map.get($theme, pressed-state-layer-color),\n    ),\n    $query: $query\n  );\n\n  $hover-state-layer-opacity: map.get($theme, hover-state-layer-opacity);\n  $focus-state-layer-opacity: map.get($theme, focus-state-layer-opacity);\n  $pressed-state-layer-opacity: map.get($theme, pressed-state-layer-opacity);\n  @include ripple-theme.states-opacities(\n    $opacity-map: (\n      focus: $focus-state-layer-opacity,\n      hover: $hover-state-layer-opacity,\n      press: $pressed-state-layer-opacity,\n    ),\n    $ripple-target: button-ripple.$ripple-target,\n    $query: $query\n  );\n\n  $container-height: map.get($theme, container-height);\n  @include height($container-height, $query: $query);\n\n  $container-height-value: if(\n    custom-properties.is-custom-prop($container-height),\n    custom-properties.get-fallback($container-height),\n    $container-height\n  );\n  @if $container-height-value != null and $container-height-value != $height {\n    @include _touch-target-reset($query: $query);\n  }\n\n  $shape: map.get($theme, container-shape);\n  @if $shape {\n    $container-height: if(\n      $container-height != null,\n      $container-height,\n      $height\n    );\n    @include _shape-radius-with-height(\n      $shape,\n      $height: $container-height,\n      $query: $query\n    );\n  }\n\n  @include _elevation(\n    $resolver,\n    $elevation-map: (\n      default: map.get($theme, container-elevation),\n      disabled: map.get($theme, disabled-container-elevation),\n      focus: map.get($theme, focus-container-elevation),\n      hover: map.get($theme, hover-container-elevation),\n      pressed: map.get($theme, pressed-container-elevation)\n    ),\n    $shadow-color: map.get($theme, container-shadow-color),\n    $query: $query\n  );\n}\n\n@function resolve-theme-elevation-keys($theme, $resolver) {\n  $elevation-resolver: map.get($resolver, elevation);\n  $shadow-color: map.get($theme, container-shadow-color);\n  @if $elevation-resolver == null or $shadow-color == null {\n    @return $theme;\n  }\n\n  $elevation-keys: (\n    container-elevation,\n    hover-container-elevation,\n    focus-container-elevation,\n    pressed-container-elevation,\n    disabled-container-elevation\n  );\n\n  @each $key in $elevation-keys {\n    $elevation: map.get($theme, $key);\n    @if $elevation != null {\n      $resolved-value: meta.call(\n        $resolver,\n        $elevation: $elevation,\n        $shadow-color: $shadow-color\n      );\n      // Update the key with the resolved value.\n      $theme: map.set($theme, $key, $resolved-value);\n    }\n  }\n  @return $theme;\n}\n\n///\n/// Sets ripple color for button.\n///\n@mixin ripple-states(\n  $color,\n  $opacity-map: null,\n  $query: feature-targeting.all()\n) {\n  @include ripple-theme.states(\n    $color: $color,\n    $opacity-map: $opacity-map,\n    $query: $query,\n    $ripple-target: button-ripple.$ripple-target\n  );\n}\n\n@mixin filled-accessible(\n  $container-fill-color,\n  $query: feature-targeting.all()\n) {\n  $fill-tone: theme-color.tone($container-fill-color);\n\n  @include container-fill-color($container-fill-color, $query);\n\n  @if ($fill-tone == 'dark') {\n    @include ink-color(text-primary-on-dark, $query);\n    @include ripple-states($color: text-primary-on-dark, $query: $query);\n  } @else {\n    @include ink-color(text-primary-on-light, $query);\n    @include ripple-states($color: text-primary-on-light, $query: $query);\n  }\n}\n\n///\n/// Sets the container fill color to the given color for an enabled button.\n/// @param {Color|map} $color-or-map - The desired container fill color,\n///     specified either as a flat value or a map of colors with states\n///     {default, hover, focused, pressed, disabled} as keys.\n///\n@mixin container-fill-color($color-or-map, $query: feature-targeting.all()) {\n  // :not(:disabled) is used to support link styled as button\n  // as link does not support :enabled style\n  &:not(:disabled) {\n    @include _container-fill-color(\n      state.get-default-state($color-or-map),\n      $query: $query\n    );\n\n    &:hover {\n      @include _container-fill-color(\n        state.get-hover-state($color-or-map),\n        $query: $query\n      );\n    }\n\n    @include ripple-theme.focus() {\n      @include _container-fill-color(\n        state.get-focus-state($color-or-map),\n        $query: $query\n      );\n    }\n\n    @include ripple-theme.active {\n      @include _container-fill-color(\n        state.get-pressed-state($color-or-map),\n        $query: $query\n      );\n    }\n  }\n\n  &:disabled {\n    @include _container-fill-color(\n      state.get-disabled-state($color-or-map),\n      $query: $query\n    );\n  }\n}\n\n///\n/// Sets the container fill color to the given color for a disabled button.\n/// @param {Color} $color - The desired container fill color.\n/// @deprecated - call `container-fill-color` instead with `disabled` as a map\n///     key.\n///\n@mixin disabled-container-fill-color($color, $query: feature-targeting.all()) {\n  @include container-fill-color(\n    (\n      disabled: $color,\n    ),\n    $query: $query\n  );\n}\n\n///\n/// Sets the icon color to the given color for an enabled button.\n/// @param {Color} $color-or-map - The desired icon color, specified either\n///     as a flat value or a map of colors with states\n///     {default, hover, focused, pressed, disabled} as keys.\n///\n@mixin icon-color($color-or-map, $query: feature-targeting.all()) {\n  &:not(:disabled) {\n    @include _icon-color(\n      state.get-default-state($color-or-map),\n      $query: $query\n    );\n\n    &:hover {\n      @include _icon-color(\n        state.get-hover-state($color-or-map),\n        $query: $query\n      );\n    }\n\n    @include ripple-theme.focus() {\n      @include _icon-color(\n        state.get-focus-state($color-or-map),\n        $query: $query\n      );\n    }\n\n    @include ripple-theme.active {\n      @include _icon-color(\n        state.get-pressed-state($color-or-map),\n        $query: $query\n      );\n    }\n  }\n\n  &:disabled {\n    @include _icon-color(\n      state.get-disabled-state($color-or-map),\n      $query: $query\n    );\n  }\n}\n\n///\n/// Sets the icon color to the given color for a disabled button.\n/// @param {Color} $color - The desired icon color.\n/// @deprecated - call `icon-color` instead with `disabled` as a map key.\n///\n@mixin disabled-icon-color($color, $query: feature-targeting.all()) {\n  @include icon-color(\n    (\n      disabled: $color,\n    ),\n    $query: $query\n  );\n}\n\n///\n/// Sets the ink color to the given color for an enabled button,\n/// and sets the icon color to the given color unless `mdc-button-icon-color`\n/// is also used.\n/// @param {Color} $color-or-map - The desired ink color, specified either\n///     as a flat value or a map of colors with states\n///     {default, hover, focused, pressed, disabled} as keys.\n///\n@mixin ink-color($color-or-map, $query: feature-targeting.all()) {\n  &:not(:disabled) {\n    @include _ink-color(state.get-default-state($color-or-map), $query: $query);\n\n    &:hover {\n      @include _ink-color(state.get-hover-state($color-or-map), $query: $query);\n    }\n\n    @include ripple-theme.focus() {\n      @include _ink-color(state.get-focus-state($color-or-map), $query: $query);\n    }\n\n    @include ripple-theme.active {\n      @include _ink-color(\n        state.get-pressed-state($color-or-map),\n        $query: $query\n      );\n    }\n  }\n\n  &:disabled {\n    @include _ink-color(\n      state.get-disabled-state($color-or-map),\n      $query: $query\n    );\n  }\n}\n\n///\n/// Sets the ink color to the given color for a disabled button,\n/// and sets the icon color to the given color unless `mdc-button-icon-color`\n/// is also used.\n/// @param {Color} $color - The desired ink color.\n/// @deprecated - call `ink-color` instead with `disabled` as a map key.\n///\n@mixin disabled-ink-color($color, $query: feature-targeting.all()) {\n  @include ink-color(\n    (\n      disabled: $color,\n    ),\n    $query: $query\n  );\n}\n\n///\n/// Sets density scale for button.\n///\n/// @param {Number | String} $density-scale - Density scale value for component. Supported density scale values `-3`,\n///     `-2`, `-1`, `0`.\n///\n@mixin density($density-scale, $query: feature-targeting.all()) {\n  $height: density-functions.prop-value(\n    $density-config: $density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include height($height, $query: $query);\n\n  @if $density-scale != 0 {\n    @include _touch-target-reset($query: $query);\n  }\n}\n\n///\n/// Resets touch target-related styles. This is called from the density mixin to\n/// automatically remove the increased touch target, since dense components\n/// don't have the same default a11y requirements.\n/// @access private\n///\n@mixin _touch-target-reset($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .mdc-button__touch {\n    @include feature-targeting.targets($feat-structure) {\n      // Do not set display: none in case the touch target is <a> element.\n      height: 100%;\n    }\n  }\n}\n\n///\n/// Sets custom height for button.\n/// @param {Number} $height - Height of button in `px`.\n///\n@mixin height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include theme.property(height, $height);\n  }\n}\n\n@mixin shape-radius(\n  $radius,\n  $rtl-reflexive: false,\n  $density-scale: $density-scale,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: $density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include _shape-radius-with-height($radius, $rtl-reflexive, $height, $query);\n}\n\n@mixin _shape-radius-with-height(\n  $radius,\n  $rtl-reflexive: false,\n  $height: $height,\n  $query: feature-targeting.all()\n) {\n  @include shape-mixins.radius(\n    $radius,\n    $rtl-reflexive,\n    $component-height: $height,\n    $query: $query\n  );\n\n  #{button-ripple.$ripple-target} {\n    @include shape-mixins.radius(\n      $radius,\n      $rtl-reflexive,\n      $component-height: $height,\n      $query: $query\n    );\n  }\n}\n\n///\n/// Sets horizontal padding to the given number.\n/// @param {Number} $padding\n/// @param {Number} $padding-icon [null] For buttons with an icon, the\n///     horizontal padding on the side with the icon, if different from\n///     $padding.\n///\n@mixin horizontal-padding(\n  $padding,\n  $padding-icon: null,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    // $padding should be a single value; enforce it by specifying all 4 sides in the output\n    padding: 0 $padding 0 $padding;\n  }\n\n  @if $padding-icon != null {\n    &.mdc-button--icon-trailing {\n      @include feature-targeting.targets($feat-structure) {\n        // $padding should be a single value; enforce it by specifying all 4\n        // sides in the output.\n        padding: 0 $padding-icon 0 $padding;\n      }\n    }\n\n    &.mdc-button--icon-leading {\n      @include feature-targeting.targets($feat-structure) {\n        // $padding should be a single value; enforce it by specifying all 4\n        // sides in the output.\n        padding: 0 $padding 0 $padding-icon;\n      }\n    }\n  }\n}\n\n///\n/// Sets the button label to overflow as ellipsis\n///\n@mixin label-overflow-ellipsis($query: feature-targeting.all()) {\n  .mdc-button__label {\n    @include typography.overflow-ellipsis($query: $query);\n  }\n}\n\n///\n/// Add a visible outline to the button in high contrast mode.\n///\n@mixin outline-hcm-shim($query: feature-targeting.all()) {\n  &::before {\n    @include dom-mixins.transparent-border($query: $query);\n  }\n}\n\n///\n/// Includes ad-hoc high contrast mode support.\n/// @deprecated Use `outline-hcm-shim` for the outline button. The focus ring\n///     is provided by default.\n///\n@mixin high-contrast-mode-shim($query: feature-targeting.all()) {\n  @include outline-hcm-shim($query: $query);\n\n  // Link buttons apply focus to the contained link. Focus is indicated via the\n  // link since focus-within isn't supported by IE.\n  & .mdc-button__link:focus,\n  &:focus {\n    &::before {\n      @include focus-ring.focus-ring($query: $query);\n    }\n  }\n}\n\n///\n/// Sets the container fill color to the given color. This mixin should be\n/// wrapped in a selector that qualifies button state.\n/// @access private\n///\n@mixin _container-fill-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(background-color, $color);\n    }\n  }\n}\n\n///\n/// Sets the icon color to the given color. This mixin should be\n/// wrapped in a selector that qualifies button state.\n/// @access private\n///\n@mixin _icon-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    .mdc-button__icon {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(color, $color);\n      }\n    }\n  }\n}\n\n@mixin _icon-size($size-px, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @if $size-px != null {\n    $size-rem: typography.px-to-rem($size-px);\n    .mdc-button__icon {\n      @include feature-targeting.targets($feat-structure) {\n        @include theme.property(font-size, $size-rem);\n        @include theme.property(width, $size-rem);\n        @include theme.property(height, $size-rem);\n      }\n    }\n  }\n}\n\n///\n/// Sets the ink color to the given color. This mixin should be\n/// wrapped in a selector that qualifies button state.\n/// @access private\n///\n@mixin _ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin _states-colors($color-map, $query: feature-targeting.all()) {\n  $hover: map.get($color-map, hover);\n\n  $hover-value: if(\n    custom-properties.is-custom-prop($hover),\n    custom-properties.get-fallback($hover),\n    $hover\n  );\n  // TODO(b/191298796): support focused & pressed key colors.\n\n  @if $hover-value != null {\n    @include ripple-theme.states-base-color(\n      $color: $hover,\n      $ripple-target: button-ripple.$ripple-target,\n      $query: $query\n    );\n  }\n}\n\n@mixin _label-text-typography(\n  $typography-map,\n  $query: feature-targeting.all()\n) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  $family: map.get($typography-map, family);\n  $size: map.get($typography-map, size);\n  $tracking: map.get($typography-map, tracking);\n  $weight: map.get($typography-map, weight);\n  $transform: map.get($typography-map, transform);\n\n  @include feature-targeting.targets($feat-typography) {\n    @include theme.property(font-family, $family);\n    @include theme.property(font-size, $size);\n    @include theme.property(letter-spacing, $tracking);\n    @include theme.property(font-weight, $weight);\n    @include theme.property(text-transform, $transform);\n  }\n}\n\n@mixin _elevation(\n  $resolver,\n  $elevation-map,\n  $shadow-color,\n  $query: feature-targeting.all()\n) {\n  $elevation-resolver: map.get($resolver, elevation);\n\n  @if $shadow-color {\n    $default: state.get-default-state($elevation-map);\n    @if $default != null {\n      @include elevation-theme.with-resolver(\n        $elevation-resolver,\n        $elevation: $default,\n        $shadow-color: $shadow-color,\n        $query: $query\n      );\n    }\n\n    $focus: state.get-focus-state($elevation-map);\n    @if $focus != null {\n      @include ripple-theme.focus {\n        @include elevation-theme.with-resolver(\n          $elevation-resolver,\n          $elevation: $focus,\n          $shadow-color: $shadow-color,\n          $query: $query\n        );\n      }\n    }\n\n    $hover: state.get-hover-state($elevation-map);\n    @if $hover != null {\n      &:hover {\n        @include elevation-theme.with-resolver(\n          $elevation-resolver,\n          $elevation: $hover,\n          $shadow-color: $shadow-color,\n          $query: $query\n        );\n      }\n    }\n\n    $pressed: state.get-pressed-state($elevation-map);\n    @if $pressed != null {\n      @include ripple-theme.active {\n        @include elevation-theme.with-resolver(\n          $elevation-resolver,\n          $elevation: $pressed,\n          $shadow-color: $shadow-color,\n          $query: $query\n        );\n      }\n    }\n\n    $disabled: state.get-disabled-state($elevation-map);\n    @if $disabled != null {\n      &:disabled {\n        @include elevation-theme.with-resolver(\n          $elevation-resolver,\n          $elevation: $disabled,\n          $shadow-color: $shadow-color,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/tokens/resolvers';\n@use './button-base';\n@use './button-filled-theme';\n@use './button-ripple';\n@use './button-shared-theme';\n\n@mixin styles(\n  $theme: button-filled-theme.$light-theme,\n  $resolver: resolvers.$material,\n  $query: feature-targeting.all()\n) {\n  @include button-base.static-styles($query: $query);\n  @include static-styles($query: $query);\n  .mdc-button--unelevated {\n    @include button-filled-theme.theme-styles(\n      $theme,\n      $resolver,\n      $query: $query\n    );\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  @include static-styles-without-ripple($query: $query);\n  @include button-ripple.static-styles($query: $query);\n}\n\n@mixin static-styles-without-ripple($query: feature-targeting.all()) {\n  .mdc-button--unelevated {\n    @include button-base.raised-transition($query: $query);\n    // TODO(b/179402677): move into theme config\n    @include button-shared-theme.horizontal-padding(\n      $padding: button-shared-theme.$contained-horizontal-padding,\n      $padding-icon: button-shared-theme.$contained-horizontal-padding-icon,\n      $query: $query\n    );\n  }\n}\n\n// Legacy mixins\n\n@mixin filled($query: feature-targeting.all()) {\n  // TODO(b/179402677): move into theme config\n  @include button-shared-theme.horizontal-padding(\n    $padding: button-shared-theme.$contained-horizontal-padding,\n    $padding-icon: button-shared-theme.$contained-horizontal-padding-icon,\n    $query: $query\n  );\n  @include button-filled-theme.theme-styles(\n    button-filled-theme.$light-theme,\n    $query: $query\n  );\n}\n\n/// @deprecated Private style mixin for partners; not available for public use.\n@mixin deprecated-filled($query) {\n  @include filled($query);\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/elevation/elevation-theme';\n@use '@material/feature-targeting/feature-targeting';\n@use './button-base';\n@use './button-protected-theme';\n@use './button-ripple';\n@use './button-shared-theme';\n\n@mixin styles(\n  $theme: button-protected-theme.$light-theme,\n  $resolver: resolvers.$material,\n  $query: feature-targeting.all()\n) {\n  @include button-base.static-styles($query: $query);\n  @include static-styles($query: $query);\n  .mdc-button--raised {\n    @include button-protected-theme.theme-styles(\n      $theme,\n      $resolver: $resolver,\n      $query: $query\n    );\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  @include static-styles-without-ripple($query: $query);\n  @include button-ripple.static-styles($query: $query);\n}\n\n@mixin static-styles-without-ripple($query: feature-targeting.all()) {\n  .mdc-button--raised {\n    @include button-base.raised-transition($query);\n    // TODO(b/179402677): move into theme config\n    @include button-shared-theme.horizontal-padding(\n      $padding: button-shared-theme.$contained-horizontal-padding,\n      $padding-icon: button-shared-theme.$contained-horizontal-padding-icon,\n      $query: $query\n    );\n  }\n}\n\n/// @deprecated Private style mixin for partners; not available for public use.\n@mixin deprecated-raised($query) {\n  @include raised($query);\n}\n\n@mixin raised($query) {\n  @include elevation-theme.elevation(2, $query: $query);\n\n  &:hover,\n  &:focus {\n    @include elevation-theme.elevation(4, $query: $query);\n  }\n\n  &:active {\n    @include elevation-theme.elevation(8, $query: $query);\n  }\n\n  &:disabled {\n    @include elevation-theme.elevation(0, $query: $query);\n  }\n\n  @include button-base.raised-transition($query);\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use '@material/elevation/elevation-theme';\n@use '@material/feature-targeting/feature-targeting';\n@use './button-base';\n@use './button-outlined-theme';\n@use './button-ripple';\n@use './button-shared-theme';\n\n@mixin styles(\n  $theme: button-outlined-theme.$light-theme,\n  $resolver: resolvers.$material,\n  $query: feature-targeting.all()\n) {\n  @include button-base.static-styles($query: $query);\n  @include static-styles($query: $query);\n  .mdc-button--outlined {\n    @include theme-styles($theme, $resolver, $query: $query);\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  @include static-styles-without-ripple($query: $query);\n  @include button-ripple.static-styles($query: $query);\n}\n\n@mixin static-styles-without-ripple($query: feature-targeting.all()) {\n  .mdc-button--outlined {\n    @include _static-styles($query: $query);\n  }\n}\n\n@mixin _static-styles($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    border-style: solid;\n  }\n\n  @include feature-targeting.targets($feat-animation) {\n    $duration: elevation-theme.$transition-duration;\n    $easing: elevation-theme.$transition-timing-function;\n    transition: border #{$duration} #{$easing};\n  }\n\n  #{button-ripple.$ripple-target} {\n    @include feature-targeting.targets($feat-structure) {\n      border-style: solid;\n      border-color: transparent;\n    }\n  }\n}\n\n@mixin outlined($query: feature-targeting.all()) {\n  @include _static-styles($query: $query);\n  @include button-outlined-theme.theme-styles(\n    button-outlined-theme.$light-theme,\n    $query: $query\n  );\n}\n\n/// @deprecated Private style mixin for partners; not available for public use.\n@mixin deprecated-outlined($query) {\n  @include outlined($query);\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/theme/custom-properties';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use './ripple-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include static-styles($query: $query);\n\n  .mdc-ripple-surface {\n    @include ripple-theme.states($query: $query);\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-ripple-surface {\n    @include surface($query: $query);\n    @include radius-bounded($query: $query);\n    @include surface-styles($query: $query);\n  }\n\n  .mdc-ripple-surface[data-mdc-ripple-is-unbounded],\n  .mdc-ripple-upgraded--unbounded {\n    @include radius-unbounded($query: $query);\n    @include unbounded-styles($query: $query);\n  }\n}\n\n/// Sets all states (including hover, focus, press, activated and selected) with\n/// given color as base color.\n///\n/// This mixin is for internal use only. Use `ripple-theme.states($color)` mixin\n/// to set interactive states (hover, focus & press) color.\n///\n/// @param {Color|String} $color - Target base color. Can be valid CSS color or\n///     a color string literal (i.e., `primary`, `secondary`, etc).\n@mixin states-for-color($color, $query: feature-targeting.all()) {\n  @include ripple-theme.states($color, $query: $query);\n  @include ripple-theme.states-activated($color, $query: $query);\n  @include ripple-theme.states-selected($color, $query: $query);\n}\n\n@mixin surface-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: relative;\n    outline: none;\n    overflow: hidden;\n  }\n}\n\n@mixin unbounded-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    overflow: visible;\n  }\n}\n\n@mixin common($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // Ensure that styles needed by any component using MDC Ripple are emitted, but only once.\n  // (Every component using MDC Ripple imports these mixins, but doesn't necessarily import\n  // mdc-ripple.scss.)\n  @include feature-targeting.targets($feat-animation) {\n    @include base-mixins.emit-once('mdc-ripple/common/animation') {\n      @include keyframes_;\n    }\n  }\n}\n\n@mixin surface(\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $include-will-change: true // TODO(b/151931961): Remove once resolved\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    // TODO(b/151931961): Remove the following block once resolved\n    @if $include-will-change {\n      will-change: transform, opacity;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: '';\n    }\n  }\n\n  #{$ripple-target}::before {\n    @include feature-targeting.targets($feat-animation) {\n      // Also transition background-color to avoid unnatural color flashes when toggling activated/selected state\n      transition: opacity ripple-theme.$states-wash-duration linear,\n        background-color ripple-theme.$states-wash-duration linear;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that the ripple wash for hover/focus states is displayed on top of positioned child elements\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 1)\n      );\n    }\n  }\n\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 0)\n      );\n    }\n  }\n\n  // Common styles for upgraded surfaces (some of these depend on custom properties set via JS or other mixins)\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before {\n      @include feature-targeting.targets($feat-structure) {\n        transform: scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n        transform: scale(0);\n        transform-origin: center center;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--unbounded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: var(--mdc-ripple-top, 0);\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, 0);\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-activation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-radius-in ripple-theme.$translate-duration\n            forwards,\n          mdc-ripple-fg-opacity-in ripple-theme.$fade-in-duration forwards;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-deactivation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-opacity-out ripple-theme.$fade-out-duration;\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        // Retain transform from mdc-ripple-fg-radius-in activation\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n          scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n  }\n}\n\n@mixin radius-bounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{$radius});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{$radius});\n      width: $radius * 2;\n      height: $radius * 2;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n@mixin radius-unbounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{math.div($radius, 2)});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{math.div($radius, 2)});\n      width: $radius;\n      height: $radius;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        top: var(--mdc-ripple-top, calc(50% - #{math.div($radius, 2)}));\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, calc(50% - #{math.div($radius, 2)}));\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n// Common styles for a ripple target element.\n// Used for components which have an inner ripple target element.\n@mixin target-common($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    // Necessary for clicks on other inner elements (e.g. close icon in chip)\n    // to go through.\n    pointer-events: none;\n  }\n}\n\n@mixin keyframes_ {\n  @keyframes mdc-ripple-fg-radius-in {\n    from {\n      animation-timing-function: variables2.$standard-curve-timing-function;\n      // NOTE: For these keyframes, we do not need custom property fallbacks because they are only\n      // used in conjunction with `.mdc-ripple-upgraded`. Since MDCRippleFoundation checks to ensure\n      // that custom properties are supported within the browser before adding this class, we can\n      // safely use them without a fallback.\n      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    }\n\n    to {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n        scale(var(--mdc-ripple-fg-scale, 1));\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-in {\n    from {\n      animation-timing-function: linear;\n      opacity: 0;\n    }\n\n    to {\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-out {\n    from {\n      animation-timing-function: linear;\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n$deceleration-curve-timing-function: cubic-bezier(0, 0, 0.2, 1) !default;\n$standard-curve-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;\n$acceleration-curve-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;\n$sharp-curve-timing-function: cubic-bezier(0.4, 0, 0.6, 1) !default;\n\n@function enter($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $deceleration-curve-timing-function;\n}\n\n@function exit-permanent($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $acceleration-curve-timing-function;\n}\n\n@function exit-temporary($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $sharp-curve-timing-function;\n}\n\n@function standard($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $standard-curve-timing-function;\n}\n\n@function linear($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay linear;\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/ripple/ripple';\n\n$ripple-target: '.mdc-button__ripple';\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include ripple.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  .mdc-button {\n    @include ripple.surface($query: $query, $ripple-target: $ripple-target);\n    @include ripple.radius-bounded(\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n\n  #{$ripple-target} {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      // Ripple needs content-box as the box sizing and box-sizing: border-box\n      // is often set as a default, so we override that here.\n      box-sizing: content-box;\n      overflow: hidden;\n      z-index: 0;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n    }\n  }\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/touch-target/mixins' as touch-target-mixins;\n@use '@material/typography/typography';\n@use './button-base';\n@use './button-filled';\n@use './button-filled-theme';\n@use './button-outlined';\n@use './button-outlined-theme';\n@use './button-protected';\n@use './button-protected-theme';\n@use './button-ripple';\n@use './button-text';\n@use './button-text-theme';\n@use './button-theme';\n@use './button-shared-theme';\n\n// For backwards compatibility.\n@forward './button-base' show deprecated-base, base, icon, icon-trailing, icon-svg, icon-contained, icon-contained-trailing, deprecated-icon, deprecated-icon-trailing, deprecated-icon-svg, deprecated-icon-contained, deprecated-icon-contained-trailing;\n\n@mixin styles($query: feature-targeting.all()) {\n  @include static-styles($query: $query);\n  @include theme-styles($query: $query);\n}\n\n@mixin theme-styles($query: feature-targeting.all()) {\n  .mdc-button {\n    @include button-text-theme.theme-styles(\n      button-text-theme.$light-theme,\n      $query: $query\n    );\n  }\n  .mdc-button--unelevated {\n    @include button-filled-theme.theme-styles(\n      button-filled-theme.$light-theme,\n      $query: $query\n    );\n  }\n  .mdc-button--raised {\n    @include button-protected-theme.theme-styles(\n      button-protected-theme.$light-theme,\n      $query: $query\n    );\n  }\n  .mdc-button--outlined {\n    @include button-outlined-theme.theme-styles(\n      button-outlined-theme.$light-theme,\n      $query: $query\n    );\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  @include static-styles-without-ripple($query: $query);\n  @include button-ripple.static-styles($query: $query);\n}\n\n@mixin static-styles-without-ripple($query: feature-targeting.all()) {\n  @include button-base.static-styles($query: $query);\n  @include button-text.static-styles-without-ripple($query: $query);\n  @include button-filled.static-styles-without-ripple($query: $query);\n  @include button-protected.static-styles-without-ripple($query: $query);\n  @include button-outlined.static-styles-without-ripple($query: $query);\n}\n\n// Legacy mixins\n\n@mixin without-ripple($query: feature-targeting.all()) {\n  @include button-base.deprecated-static-styles-without-ripple($query: $query);\n  @include button-text.static-styles-without-ripple($query: $query);\n  @include button-filled.static-styles-without-ripple($query: $query);\n  @include button-protected.static-styles-without-ripple($query: $query);\n  @include button-outlined.static-styles-without-ripple($query: $query);\n  @include _theme-styles-without-ripple($query: $query);\n}\n\n@mixin _theme-styles-without-ripple($query: feature-targeting.all()) {\n  @include button-text-theme.deprecated-theme-styles($query: $query);\n  @include button-filled-theme.deprecated-theme-styles($query: $query);\n  @include button-outlined-theme.deprecated-theme-styles($query: $query);\n  // Elevation has been recategorized into theme styles. Keeping old elevation\n  // styles here for backwards compatibility.\n  .mdc-button--raised {\n    @include button-protected.raised($query: $query);\n  }\n}\n\n// @deprecated - use styles() instead.\n@mixin core-styles($query: feature-targeting.all()) {\n  @include styles($query: $query);\n  // TODO: remove this rule since padding now takes care of icon margins.\n  $feat-structure: feature-targeting.create-target($query, structure);\n  .mdc-button--raised,\n  .mdc-button--unelevated,\n  .mdc-button--outlined {\n    .mdc-button__icon {\n      @include feature-targeting.targets($feat-structure) {\n        // Icons inside contained buttons have different styles due to increased button padding\n        @include button-base.icon-contained;\n      }\n    }\n\n    .mdc-button__label + .mdc-button__icon {\n      @include feature-targeting.targets($feat-structure) {\n        @include button-base.icon-contained-trailing;\n      }\n    }\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/css';\n@use '@material/theme/custom-properties';\n@use '@material/theme/theme';\n@use '@material/theme/keys';\n@use '@material/theme/shadow-dom';\n@use '@material/theme/theme-color';\n\n$custom-property-prefix: 'ripple';\n\n$fade-in-duration: 75ms !default;\n$fade-out-duration: 150ms !default;\n$translate-duration: 225ms !default;\n$states-wash-duration: 15ms !default;\n\n// Notes on states:\n// * focus takes precedence over hover (i.e. if an element is both focused and hovered, only focus value applies)\n// * press state applies to a separate pseudo-element, so it has an additive effect on top of other states\n// * selected/activated are applied additively to hover/focus via calculations at preprocessing time\n\n$dark-ink-opacities: (\n  hover: 0.04,\n  focus: 0.12,\n  press: 0.12,\n  selected: 0.08,\n  activated: 0.12,\n) !default;\n\n$light-ink-opacities: (\n  hover: 0.08,\n  focus: 0.24,\n  press: 0.24,\n  selected: 0.16,\n  activated: 0.24,\n) !default;\n\n// Legacy\n\n$pressed-dark-ink-opacity: 0.16 !default;\n$pressed-light-ink-opacity: 0.32 !default;\n\n// State selector variables used for state selector mixins below.\n$_hover-selector: '&:hover';\n$_focus-selector: '&.mdc-ripple-upgraded--background-focused, &:not(.mdc-ripple-upgraded):focus';\n$_active-selector: '&:not(:disabled):active';\n\n$light-theme: (\n  focus-state-layer-color: theme-color.$on-surface,\n  focus-state-layer-opacity: map.get($dark-ink-opacities, focus),\n  hover-state-layer-color: theme-color.$on-surface,\n  hover-state-layer-opacity: map.get($dark-ink-opacities, hover),\n  pressed-state-layer-color: theme-color.$on-surface,\n  pressed-state-layer-opacity: map.get($dark-ink-opacities, press),\n);\n\n@mixin theme($theme) {\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  @if shadow-dom.$css-selector-fallback-declarations {\n    .mdc-ripple-surface {\n      @include theme-styles($theme);\n    }\n  }\n}\n\n$_ripple-theme: (\n  hover-state-layer-color: null,\n  focus-state-layer-color: null,\n  pressed-state-layer-color: null,\n  hover-state-layer-opacity: null,\n  focus-state-layer-opacity: null,\n  pressed-state-layer-opacity: null,\n);\n\n@mixin theme-styles($theme, $ripple-target: '&') {\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  // TODO(b/191298796): Support states layer color for every interactive states.\n  // Use only hover state layer color, ignoring focus and pressed color.\n  @include internal-theme-styles($theme, $ripple-target);\n}\n\n@mixin internal-theme-styles($theme, $ripple-target: '&') {\n  @include theme.validate-theme-keys($_ripple-theme, $theme);\n\n  @include states-base-color(\n    map.get($theme, hover-state-layer-color),\n    $ripple-target: $ripple-target\n  );\n  @include states-hover-opacity(\n    map.get($theme, hover-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-focus-opacity(\n    map.get($theme, focus-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-press-opacity(\n    map.get($theme, pressed-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin states-base-color(\n  $color,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @if not custom-properties.is-custom-prop($color) {\n      $color: custom-properties.create(\n        ripple-color,\n        theme-color.get-custom-property($color)\n      );\n    }\n\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(background-color, $color);\n      }\n    }\n  }\n}\n\n///\n/// Customizes ripple opacities in `hover`, `focus`, or `press` states\n/// @param {map} $opacity-map - map specifying custom opacity of zero or more states\n/// @param {bool} $has-nested-focusable-element - whether the component contains a focusable element in the root\n/// @param {string} $ripple-target - the optional selector for the ripple element\n///\n@mixin states-opacities(\n  $opacity-map: (),\n  $has-nested-focusable-element: false,\n  $ripple-target: '&',\n  $query: feature-targeting.all()\n) {\n  // Ensure sufficient specificity to override base state opacities\n  @if map.get($opacity-map, hover) {\n    @include states-hover-opacity(\n      map.get($opacity-map, hover),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, focus) {\n    @include states-focus-opacity(\n      map.get($opacity-map, focus),\n      $ripple-target: $ripple-target,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, press) {\n    @include states-press-opacity(\n      map.get($opacity-map, press),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n}\n\n@mixin states-hover-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity and not custom-properties.is-custom-prop($opacity) {\n    $opacity: custom-properties.create(ripple-hover-opacity, $opacity);\n  }\n\n  // Background wash styles, for both CSS-only and upgraded stateful surfaces\n  &:hover,\n  &.mdc-ripple-surface--hover {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(opacity, $opacity);\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity(\n  $opacity,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  // Focus overrides hover by reusing the ::before pseudo-element.\n  // :focus-within generally works on non-MS browsers and matches when a *child* of the element has focus.\n  // It is useful for cases where a component has a focusable element within the root node, e.g. text field,\n  // but undesirable in general in case of nested stateful components.\n  // We use a modifier class for JS-enabled surfaces to support all use cases in all browsers.\n  @if $has-nested-focusable-element {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    &.mdc-ripple-upgraded:focus-within,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus,\n    &:not(.mdc-ripple-upgraded):focus-within {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  } @else {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity-properties_($opacity, $query) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-focus-opacity, $opacity);\n    }\n\n    // Note that this duration is only effective on focus, not blur\n    @include feature-targeting.targets($feat-animation) {\n      transition-duration: 75ms;\n    }\n\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n@mixin states-press-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  // Styles for non-upgraded (CSS-only) stateful surfaces\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-press-opacity, $opacity);\n    }\n\n    &:not(.mdc-ripple-upgraded) {\n      // Apply press additively by using the ::after pseudo-element\n      #{$ripple-target}::after {\n        @include feature-targeting.targets($feat-animation) {\n          transition: opacity $fade-out-duration linear;\n        }\n      }\n\n      &:active {\n        #{$ripple-target}::after {\n          @include feature-targeting.targets($feat-animation) {\n            transition-duration: $fade-in-duration;\n          }\n\n          // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n          @include feature-targeting.targets($feat-color) {\n            @include theme.property(opacity, $opacity);\n          }\n        }\n      }\n    }\n\n    &.mdc-ripple-upgraded {\n      @include feature-targeting.targets($feat-color) {\n        // Upgraded ripple should always emit custom property, regardless of\n        // configuration, since ripple itself feature detects custom property\n        // support at runtime.\n        @include custom-properties.configure($emit-custom-properties: true) {\n          @include theme.property(\n            custom-properties.create(ripple-fg-opacity, $opacity)\n          );\n        }\n      }\n    }\n  }\n}\n\n// Simple mixin for base states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states(\n  $color: theme-color.prop-value(on-surface),\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include states-interactions_(\n    $color: $color,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $query: $query,\n    $ripple-target: $ripple-target,\n    $opacity-map: $opacity-map\n  );\n}\n\n// Simple mixin for activated states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-activated(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $activated-opacity: states-opacity($color, activated);\n\n  &--activated {\n    // Stylelint seems to think that '&' qualifies as a type selector here?\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-activated-opacity,\n            $activated-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $activated-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n// Simple mixin for selected states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-selected(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $selected-opacity: states-opacity($color, selected);\n\n  &--selected {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-selected-opacity,\n            $selected-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $selected-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n@mixin states-interactions_(\n  $color,\n  $has-nested-focusable-element,\n  $opacity-modifier: 0,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include target-selector($ripple-target) {\n    @include states-base-color($color, $query);\n  }\n\n  @if $opacity-map == null {\n    $opacity-map: (\n      hover: states-opacity($color, hover) + $opacity-modifier,\n      focus: states-opacity($color, focus) + $opacity-modifier,\n      press: states-opacity($color, press) + $opacity-modifier,\n    );\n  }\n\n  @include states-opacities(\n    $opacity-map,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $ripple-target: $ripple-target,\n    $query: $query\n  );\n}\n\n// Wraps content in the `ripple-target` selector if it exists.\n@mixin target-selector($ripple-target: '&') {\n  @if $ripple-target == '&' {\n    @content;\n  } @else {\n    #{$ripple-target} {\n      @content;\n    }\n  }\n}\n\n/// Selector for hover, active and focus states.\n@mixin states-selector() {\n  #{$_hover-selector},\n  #{$_focus-selector},\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n@mixin hover() {\n  #{$_hover-selector} {\n    @content;\n  }\n}\n\n// Selector for focus state. Using ':not(.mdc-ripple-upgraded)' to continue\n// applying focus styles on JS-disabled components, and control focus\n// on JS-enabled components with '.mdc-ripple-upgraded--background-focused'.\n@mixin focus() {\n  #{$_focus-selector} {\n    @content;\n  }\n}\n\n// Selector for active state. Using `:active:active` to override focus styles.\n@mixin pressed() {\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n// @deprecated Use `pressed()` mixin - renamed for consistency.\n@mixin active() {\n  @include pressed() {\n    @content;\n  }\n}\n\n/// Keep the ripple (State overlay) behind the content.\n@mixin behind-content(\n  $ripple-target,\n  $content-root-selector: '&',\n  $query: feature-targeting.all()\n) {\n  // Needed for IE11. Without this, IE11 renders the state layer completely\n  // underneath the container, making it invisible.\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  #{$content-root-selector} {\n    @include feature-targeting.targets($feat-structure) {\n      z-index: 0;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, -1)\n      );\n    }\n  }\n}\n\n@function states-opacity($color, $state) {\n  $color-value: theme-color.prop-value($color);\n  $opacity-map: if(\n    theme-color.tone($color-value) == 'light',\n    $light-ink-opacities,\n    $dark-ink-opacities\n  );\n\n  @if not map.has-key($opacity-map, $state) {\n    @error \"Invalid state: '#{$state}'. Choose one of: #{map.keys($opacity-map)}\";\n  }\n\n  @return map.get($opacity-map, $state);\n}\n\n@mixin states-background-selector($ripple-target) {\n  #{$ripple-target}::before {\n    @content;\n  }\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use 'sass:math';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/custom-properties';\n@use '@material/theme/keys';\n@use '@material/theme/state';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n@use '@material/tokens/resolvers';\n@use '@material/ripple/ripple-theme';\n@use './button-base';\n@use './button-shared-theme';\n@use './button-ripple';\n\n$outlined-border-width: 1px !default;\n$outline-color: rgba(theme-color.prop-value(on-surface), 0.12) !default;\n\n$_custom-property-prefix: 'outlined-button';\n\n$light-theme: (\n  container-height: button-shared-theme.$height,\n  container-shape: button-shared-theme.$shape-radius,\n  disabled-label-text-color: button-shared-theme.$disabled-ink-color,\n  disabled-outline-color: button-shared-theme.$disabled-container-color,\n  focus-label-text-color: null,\n  focus-outline-color: null,\n  focus-state-layer-color: primary,\n  focus-state-layer-opacity: 0.12,\n  hover-label-text-color: null,\n  hover-outline-color: null,\n  hover-state-layer-color: primary,\n  hover-state-layer-opacity: 0.04,\n  label-text-color: primary,\n  label-text-font: button-font-family,\n  label-text-size: button-font-size,\n  label-text-tracking: button-letter-spacing,\n  label-text-transform: button-text-transform,\n  label-text-weight: button-font-weight,\n  outline-color: $outline-color,\n  outline-width: $outlined-border-width,\n  pressed-label-text-color: null,\n  pressed-state-layer-color: primary,\n  pressed-state-layer-opacity: 0.12,\n  with-icon-icon-color: null,\n  with-icon-icon-size: 18px,\n  with-icon-hover-icon-color: null,\n  with-icon-focus-icon-color: null,\n  with-icon-pressed-icon-color: null,\n  with-icon-disabled-icon-color: null,\n);\n\n/// Sets theme based on provided theme configuration.\n/// Only emits theme related styles.\n/// @param {Map} $theme - Theme configuration to use.\n@mixin theme($theme, $resolver: resolvers.$material) {\n  @include theme.validate-theme($light-theme, $theme);\n  $theme: button-shared-theme.resolve-theme-elevation-keys(\n    $theme,\n    $resolver: $resolver\n  );\n  @include keys.declare-custom-properties($theme, $_custom-property-prefix);\n}\n\n@mixin theme-styles(\n  $theme,\n  $resolver: resolvers.$material,\n  $query: feature-targeting.all()\n) {\n  @include theme.validate-theme-keys($light-theme, $theme);\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $_custom-property-prefix\n  );\n  @include _theme($theme, $resolver, $query: $query);\n}\n\n@mixin _theme($theme, $resolver, $query) {\n  @include button-shared-theme.theme($theme, $resolver, $query: $query);\n  @include outline-color(\n    (\n      default: map.get($theme, outline-color),\n      disabled: map.get($theme, disabled-outline-color),\n      focus: map.get($theme, focus-outline-color),\n      hover: map.get($theme, hover-outline-color),\n    ),\n    $query: $query\n  );\n  @include outline-width(map.get($theme, outline-width), $query: $query);\n}\n\n@mixin deprecated-theme-styles($query: feature-targeting.all()) {\n  .mdc-button--outlined {\n    $theme: map.merge(\n      $light-theme,\n      (\n        focus-state-layer-color: null,\n        focus-state-layer-opacity: null,\n        hover-state-layer-color: null,\n        hover-state-layer-opacity: null,\n        pressed-state-layer-color: null,\n        pressed-state-layer-opacity: null,\n        label-text-font: null,\n        label-text-size: null,\n        label-text-tracking: null,\n        label-text-transform: null,\n        label-text-weight: null,\n      )\n    );\n    @include _theme($theme, resolvers.$material, $query: $query);\n  }\n}\n\n///\n/// Sets the outline color to the given color for an enabled button.\n/// @param {Color} $color-or-map - The desired outline color, specified either\n///     as a flat value or a map of colors with states\n///     {default, hover, focused, pressed, disabled} as keys.\n///\n@mixin outline-color($color-or-map, $query: feature-targeting.all()) {\n  &:not(:disabled) {\n    @include _outline-color(\n      state.get-default-state($color-or-map),\n      $query: $query\n    );\n\n    &:hover {\n      @include _outline-color(\n        state.get-hover-state($color-or-map),\n        $query: $query\n      );\n    }\n\n    @include ripple-theme.focus() {\n      @include _outline-color(\n        state.get-focus-state($color-or-map),\n        $query: $query\n      );\n    }\n\n    // Increase active state specificity due to ripple-theme.focus().\n    &:active,\n    &:focus:active {\n      @include _outline-color(\n        state.get-pressed-state($color-or-map),\n        $query: $query\n      );\n    }\n  }\n\n  &:disabled {\n    @include _outline-color(\n      state.get-disabled-state($color-or-map),\n      $query: $query\n    );\n  }\n}\n\n///\n/// Sets the outline color to the given color for a disabled button.\n/// @param {Color} $color - The desired outline color.\n/// @deprecated - call `outline-color` instead with `disabled` as a map key.\n///\n@mixin disabled-outline-color($color, $query: feature-targeting.all()) {\n  @include outline-color(\n    (\n      disabled: $color,\n    ),\n    $query: $query\n  );\n}\n\n@mixin outline-width(\n  $outline-width,\n  $padding: button-shared-theme.$contained-horizontal-padding,\n  // For a button with an icon, the padding on the side of the button with the\n  // icon.\n  $padding-icon: button-shared-theme.$contained-horizontal-padding-icon,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @if $outline-width != null {\n    $outline-width-value: if(\n      custom-properties.is-custom-prop($outline-width),\n      custom-properties.get-fallback($outline-width),\n      $outline-width\n    );\n    // TODO(b/194792044): uncouple padding from outline-width\n    // Note: Adjust padding to maintain consistent width with non-outlined buttons\n    $padding-value: math.max($padding - $outline-width-value, 0);\n    $padding-icon-value: math.max($padding-icon - $outline-width-value, 0);\n\n    @include button-shared-theme.horizontal-padding(\n      $padding: $padding-value,\n      $padding-icon: $padding-icon-value,\n      $query: $query\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(border-width, $outline-width);\n    }\n\n    #{button-ripple.$ripple-target} {\n      @include feature-targeting.targets($feat-structure) {\n        @include theme.property(top, -1 * $outline-width-value);\n        @include theme.property(left, -1 * $outline-width-value);\n        @include theme.property(bottom, -1 * $outline-width-value);\n        @include theme.property(right, -1 * $outline-width-value);\n        @include theme.property(border-width, $outline-width);\n      }\n    }\n    .mdc-button__touch {\n      @include feature-targeting.targets($feat-structure) {\n        @include theme.property(\n          left,\n          'calc(-1 * outline-width)',\n          $replace: (outline-width: $outline-width)\n        );\n        @include theme.property(\n          width,\n          'calc(100% + 2 * outline-width)',\n          $replace: (outline-width: $outline-width)\n        );\n      }\n    }\n  }\n}\n\n///\n/// Sets the outline color to the given color. This mixin should be\n/// wrapped in a selector that qualifies button state.\n/// @access private\n///\n@mixin _outline-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(border-color, $color);\n    }\n  }\n}\n","*, *:before, *:after{\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    text-rendering: optimizeLegibility;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-size-adjust: none;\r\n}\r\n\r\nfooter, header, nav, section, main{\r\n    display: block;\r\n}\r\n\r\nbody{\r\n    line-height: 1;\r\n}\r\n\r\nol, ul{\r\n    list-style: none;\r\n}\r\n\r\nblockquote, q{\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after, q:before, q:after{\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\ninput{\r\n    -webkit-appearance: none;\r\n    border-radius: 0;\r\n}","// $primary:#38C1D3;\r\n// $on-primary: #2c3400;\r\n// $secondary: #CDDC27;\r\n// $on-secondary: #2e321b;\r\n// $background: #10153D;\r\n// $surface: #10153D;\r\n// $on-surface: #e5e2da;\r\n// $error: #ffb4ab;\r\n// $on-error: #690005;\r\n\r\n:root {\r\n    @media (prefers-color-scheme: light) {\r\n        --mdc-theme-primary: #006874;\r\n        --mdc-theme-on-primary: #ffffff;\r\n        --mdc-theme-secondary: #5c6300;\r\n        --mdc-theme-on-secondary: #ffffff;\r\n        --mdc-theme-surface: #fafdfd;\r\n        --mdc-theme-on-surface: #191c1d;\r\n        --mdc-theme-background: #fafdfd;\r\n        --mdc-theme-on-background: #191c1d;\r\n    }\r\n\r\n    @media (prefers-color-scheme: dark) {\r\n        --mdc-theme-primary: #4fd8eb;\r\n        --mdc-theme-on-primary: #00363d;\r\n        --mdc-theme-secondary: #c2d016;\r\n        --mdc-theme-on-secondary: #2f3300;\r\n\r\n        --mdc-theme-surface-base: 195, 7.4%;\r\n        --mdc-theme-surface-l: 15.6%;\r\n        --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\r\n            --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\r\n            --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\r\n            --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\r\n            --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\r\n            --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\r\n            --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\r\n            --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\r\n            --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\r\n            --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\r\n\r\n        --mdc-theme-on-surface: #e1e3e3;\r\n        --mdc-theme-background: #191c1d;\r\n        --mdc-theme-on-background: #e1e3e3;\r\n\r\n\r\n        // Others\r\n        --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\r\n\r\n    }\r\n}\r\n//#9c27b0 purple-ish\r\n\r\n@media (prefers-color-scheme: dark) {\r\n    .mdc-elevation--z1 {\r\n        background:var(--mdc-theme-surface-z1);\r\n    }\r\n    .mdc-elevation--z2 {\r\n        background:var(--mdc-theme-surface-z2);\r\n    }\r\n    .mdc-elevation--z3 {\r\n        background:var(--mdc-theme-surface-z3);\r\n    }\r\n    .mdc-elevation--z4 {\r\n        background:var(--mdc-theme-surface-z4);\r\n    }\r\n    .mdc-elevation--z5 {\r\n        background:var(--mdc-theme-surface-z5);\r\n    }\r\n    .mdc-elevation--z6 {\r\n        background:var(--mdc-theme-surface-z6);\r\n    }\r\n    .mdc-elevation--z7 {\r\n        background:var(--mdc-theme-surface-z7);\r\n    }\r\n\r\n\r\n    // Drawer Custom\r\n    .mdc-drawer {\r\n        &.mdc-drawer--modal {\r\n            background:var(--mdc-theme-surface-z1);\r\n\r\n            .mdc-drawer__header {\r\n                background:var(--mdc-theme-surface-z4);\r\n\r\n                .mdc-drawer__title {\r\n                    color:var(--mdc-theme-on-surface);\r\n                }\r\n                .mdc-drawer__subtitle {\r\n                    color:var(--mdc-theme-on-surface);\r\n                }\r\n            }\r\n\r\n            .mdc-drawer__content {\r\n                .mdc-deprecated-list-item {\r\n                    color: var(--mdc-theme-on-surface);\r\n\r\n                    .mdc-deprecated-list-item__graphic {\r\n                        color: var(--mdc-theme-surface-z9);\r\n                    }\r\n                }\r\n                .mdc-deprecated-list-item--activated {\r\n                    color: var(--mdc-theme-primary);\r\n\r\n                    .mdc-deprecated-list-item__graphic {\r\n                        color: var(--mdc-theme-primary);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    // Top App Bar Custom\r\n    .mdc-top-app-bar {\r\n        background-color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-top-app-bar__title {\r\n        color: var(--mdc-theme-on-primary);\r\n    }\r\n\r\n    // Tab Custom\r\n    .mdc-tab {\r\n        .mdc-tab__icon, .mdc-tab__text-label {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n\r\n        &.mdc-tab--active {\r\n            .mdc-tab__icon, .mdc-tab__text-label {\r\n                color: var(--mdc-theme-primary);\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    // Table Custom\r\n    .mdc-data-table__header-cell {\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n    }\r\n\r\n    .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n    }\r\n\r\n\r\n    // Dialog Custom\r\n    .mdc-dialog .mdc-dialog__surface {\r\n        background-color:var(--mdc-theme-surface-z3);\r\n    }\r\n\r\n    .mdc-dialog .mdc-dialog__title {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n    .mdc-dialog__actions {\r\n        gap: 1rem;\r\n    }\r\n\r\n    // Dialog Scrim Custom\r\n    .mdc-dialog .mdc-dialog__scrim {\r\n        background-color: rgba(0, 0, 0, 0.80);\r\n    }\r\n\r\n\r\n\r\n    // Text Field Custom\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z5);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading, \r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch, \r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z7);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-text-field--outlined .mdc-notched-outline {\r\n        z-index:-1;\r\n    }\r\n\r\n    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n\r\n\r\n    // Select Custom\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z5);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading, \r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch, \r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z7);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\r\n        color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\r\n        fill: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\r\n        fill: var(--mdc-theme-primary);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n","//@use \"@material/typography/mdc-typography\";\r\n//@import \"./theme/theme1/variables\";\r\n//@use \"@material/theme\";\r\n@import \"./reset\";\r\n@import \"./theme/theme1/variables\";\r\n//@import \"./theme/theme1/variables-dark\";\r\n@import \"../../node_modules/@material/typography/mdc-typography\";\r\n\r\nhtml {\r\n    background-color: var(--mdc-theme-background);\r\n}\r\n\r\ntable {\r\n    thead, tbody {\r\n        tr {\r\n            th, td {\r\n                vertical-align: middle;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.mdc-icon-button.actionsButton {\r\n    width: 40px;\r\n    height: 40px;\r\n    padding: 8px;\r\n}\r\n\r\n.main-content {\r\n    padding:1rem;\r\n}\r\n\r\n.content-section {\r\n    padding:1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.demo-group {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n\r\n    &.wrap {\r\n        flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/documentation/buttons/buttons.scss":
/*!************************************************!*\
  !*** ./src/documentation/buttons/buttons.scss ***!
  \************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_buttons_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./buttons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/buttons/buttons.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_buttons_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_buttons_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_buttons_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_buttons_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!**********************************************!*\
  !*** ./src/documentation/buttons/buttons.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.scss */ "./src/documentation/buttons/buttons.scss");
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/component.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
var buttonRipple = document.querySelectorAll('.mdc-button');
var _iterator = _createForOfIteratorHelper(buttonRipple),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var item = _step.value;
    new _material_ripple__WEBPACK_IMPORTED_MODULE_1__.MDCRipple.attachTo(item);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
console.log("buttons here1");
})();

/******/ })()
;
//# sourceMappingURL=buttons33d086d4acc6d6be230d.js.map