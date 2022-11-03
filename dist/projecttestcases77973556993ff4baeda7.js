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

/***/ "./node_modules/@material/tab-bar/component.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-bar/component.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabBar": () => (/* binding */ MDCTabBar)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_tab_scroller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/tab-scroller/component */ "./node_modules/@material/tab-scroller/component.js");
/* harmony import */ var _material_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/tab/component */ "./node_modules/@material/tab/component.js");
/* harmony import */ var _material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/tab/foundation */ "./node_modules/@material/tab/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-bar/foundation.js");
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






var strings = _foundation__WEBPACK_IMPORTED_MODULE_0__.MDCTabBarFoundation.strings;
var tabIdCounter = 0;
var MDCTabBar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MDCTabBar, _super);
    function MDCTabBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabBar.attachTo = function (root) {
        return new MDCTabBar(root);
    };
    Object.defineProperty(MDCTabBar.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            var e_1, _a;
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.tabList), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var tab = _c.value;
                    tab.focusOnActivate = focusOnActivate;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabBar.prototype, "useAutomaticActivation", {
        set: function (useAutomaticActivation) {
            this.foundation.setUseAutomaticActivation(useAutomaticActivation);
        },
        enumerable: false,
        configurable: true
    });
    MDCTabBar.prototype.initialize = function (tabFactory, tabScrollerFactory) {
        if (tabFactory === void 0) { tabFactory = function (el) { return new _material_tab_component__WEBPACK_IMPORTED_MODULE_2__.MDCTab(el); }; }
        if (tabScrollerFactory === void 0) { tabScrollerFactory = function (el) { return new _material_tab_scroller_component__WEBPACK_IMPORTED_MODULE_3__.MDCTabScroller(el); }; }
        this.tabList = this.instantiateTabs(tabFactory);
        this.tabScroller = this.instantiatetabScroller(tabScrollerFactory);
    };
    MDCTabBar.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleTabInteraction = function (evt) {
            _this.foundation.handleTabInteraction(evt);
        };
        this.handleKeyDown = function (evt) {
            _this.foundation.handleKeyDown(evt);
        };
        this.listen(_material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction);
        this.listen('keydown', this.handleKeyDown);
        for (var i = 0; i < this.tabList.length; i++) {
            if (this.tabList[i].active) {
                this.scrollIntoView(i);
                break;
            }
        }
    };
    MDCTabBar.prototype.destroy = function () {
        var e_2, _a;
        _super.prototype.destroy.call(this);
        this.unlisten(_material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction);
        this.unlisten('keydown', this.handleKeyDown);
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.tabList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tab = _c.value;
                tab.destroy();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (this.tabScroller) {
            this.tabScroller.destroy();
        }
    };
    MDCTabBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            scrollTo: function (scrollX) {
                _this.tabScroller.scrollTo(scrollX);
            },
            incrementScroll: function (scrollXIncrement) {
                _this.tabScroller.incrementScroll(scrollXIncrement);
            },
            getScrollPosition: function () { return _this.tabScroller.getScrollPosition(); },
            getScrollContentWidth: function () { return _this.tabScroller.getScrollContentWidth(); },
            getOffsetWidth: function () { return _this.root.offsetWidth; },
            isRTL: function () { return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            setActiveTab: function (index) {
                _this.foundation.activateTab(index);
            },
            activateTabAtIndex: function (index, clientRect) {
                _this.tabList[index].activate(clientRect);
            },
            deactivateTabAtIndex: function (index) {
                _this.tabList[index].deactivate();
            },
            focusTabAtIndex: function (index) {
                _this.tabList[index].focus();
            },
            getTabIndicatorClientRectAtIndex: function (index) {
                return _this.tabList[index].computeIndicatorClientRect();
            },
            getTabDimensionsAtIndex: function (index) {
                return _this.tabList[index].computeDimensions();
            },
            getPreviousActiveTabIndex: function () {
                for (var i = 0; i < _this.tabList.length; i++) {
                    if (_this.tabList[i].active) {
                        return i;
                    }
                }
                return -1;
            },
            getFocusedTabIndex: function () {
                var tabElements = _this.getTabElements();
                var activeElement = document.activeElement;
                return tabElements.indexOf(activeElement);
            },
            getIndexOfTabById: function (id) {
                for (var i = 0; i < _this.tabList.length; i++) {
                    if (_this.tabList[i].id === id) {
                        return i;
                    }
                }
                return -1;
            },
            getTabListLength: function () { return _this.tabList.length; },
            notifyTabActivated: function (index) { return _this.emit(strings.TAB_ACTIVATED_EVENT, { index: index }, true); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_0__.MDCTabBarFoundation(adapter);
    };
    /**
     * Activates the tab at the given index
     * @param index The index of the tab
     */
    MDCTabBar.prototype.activateTab = function (index) {
        this.foundation.activateTab(index);
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index THe index of the tab
     */
    MDCTabBar.prototype.scrollIntoView = function (index) {
        this.foundation.scrollIntoView(index);
    };
    /**
     * Returns all the tab elements in a nice clean array
     */
    MDCTabBar.prototype.getTabElements = function () {
        return [].slice.call(this.root.querySelectorAll(strings.TAB_SELECTOR));
    };
    /**
     * Instantiates tab components on all child tab elements
     */
    MDCTabBar.prototype.instantiateTabs = function (tabFactory) {
        return this.getTabElements().map(function (el) {
            el.id = el.id || "mdc-tab-" + ++tabIdCounter;
            return tabFactory(el);
        });
    };
    /**
     * Instantiates tab scroller component on the child tab scroller element
     */
    MDCTabBar.prototype.instantiatetabScroller = function (tabScrollerFactory) {
        var tabScrollerElement = this.root.querySelector(strings.TAB_SCROLLER_SELECTOR);
        if (tabScrollerElement) {
            return tabScrollerFactory(tabScrollerElement);
        }
        return null;
    };
    return MDCTabBar;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_5__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-bar/constants.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    HOME_KEY: 'Home',
    SPACE_KEY: 'Space',
    TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
    TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
    TAB_SELECTOR: '.mdc-tab',
};
var numbers = {
    ARROW_LEFT_KEYCODE: 37,
    ARROW_RIGHT_KEYCODE: 39,
    END_KEYCODE: 35,
    ENTER_KEYCODE: 13,
    EXTRA_SCROLL_AMOUNT: 20,
    HOME_KEYCODE: 36,
    SPACE_KEYCODE: 32,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/foundation.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/tab-bar/foundation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabBarFoundation": () => (/* binding */ MDCTabBarFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-bar/constants.js");
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



var ACCEPTABLE_KEYS = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_0__.strings.ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_0__.strings.ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_0__.strings.END_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_0__.strings.HOME_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_0__.strings.ENTER_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_0__.strings.SPACE_KEY);
var KEYCODE_MAP = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this by hand
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.ARROW_LEFT_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_0__.strings.ARROW_LEFT_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.ARROW_RIGHT_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_0__.strings.ARROW_RIGHT_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.END_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_0__.strings.END_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.HOME_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_0__.strings.HOME_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.ENTER_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_0__.strings.ENTER_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.SPACE_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_0__.strings.SPACE_KEY);
var MDCTabBarFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MDCTabBarFoundation, _super);
    function MDCTabBarFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, MDCTabBarFoundation.defaultAdapter), adapter)) || this;
        _this.useAutomaticActivation = false;
        return _this;
    }
    Object.defineProperty(MDCTabBarFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_0__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_0__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                scrollTo: function () { return undefined; },
                incrementScroll: function () { return undefined; },
                getScrollPosition: function () { return 0; },
                getScrollContentWidth: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                isRTL: function () { return false; },
                setActiveTab: function () { return undefined; },
                activateTabAtIndex: function () { return undefined; },
                deactivateTabAtIndex: function () { return undefined; },
                focusTabAtIndex: function () { return undefined; },
                getTabIndicatorClientRectAtIndex: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getTabDimensionsAtIndex: function () {
                    return ({ rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 });
                },
                getPreviousActiveTabIndex: function () { return -1; },
                getFocusedTabIndex: function () { return -1; },
                getIndexOfTabById: function () { return -1; },
                getTabListLength: function () { return 0; },
                notifyTabActivated: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Switches between automatic and manual activation modes.
     * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
     */
    MDCTabBarFoundation.prototype.setUseAutomaticActivation = function (useAutomaticActivation) {
        this.useAutomaticActivation = useAutomaticActivation;
    };
    MDCTabBarFoundation.prototype.activateTab = function (index) {
        var previousActiveIndex = this.adapter.getPreviousActiveTabIndex();
        if (!this.indexIsInRange(index) || index === previousActiveIndex) {
            return;
        }
        var previousClientRect;
        if (previousActiveIndex !== -1) {
            this.adapter.deactivateTabAtIndex(previousActiveIndex);
            previousClientRect =
                this.adapter.getTabIndicatorClientRectAtIndex(previousActiveIndex);
        }
        this.adapter.activateTabAtIndex(index, previousClientRect);
        this.scrollIntoView(index);
        this.adapter.notifyTabActivated(index);
    };
    MDCTabBarFoundation.prototype.handleKeyDown = function (evt) {
        // Get the key from the event
        var key = this.getKeyFromEvent(evt);
        // Early exit if the event key isn't one of the keyboard navigation keys
        if (key === undefined) {
            return;
        }
        // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple
        if (!this.isActivationKey(key)) {
            evt.preventDefault();
        }
        if (this.useAutomaticActivation) {
            if (this.isActivationKey(key)) {
                return;
            }
            var index = this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(), key);
            this.adapter.setActiveTab(index);
            this.scrollIntoView(index);
        }
        else {
            var focusedTabIndex = this.adapter.getFocusedTabIndex();
            if (this.isActivationKey(key)) {
                this.adapter.setActiveTab(focusedTabIndex);
            }
            else {
                var index = this.determineTargetFromKey(focusedTabIndex, key);
                this.adapter.focusTabAtIndex(index);
                this.scrollIntoView(index);
            }
        }
    };
    /**
     * Handles the MDCTab:interacted event
     */
    MDCTabBarFoundation.prototype.handleTabInteraction = function (evt) {
        this.adapter.setActiveTab(this.adapter.getIndexOfTabById(evt.detail.tabId));
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoView = function (index) {
        // Early exit if the index is out of range
        if (!this.indexIsInRange(index)) {
            return;
        }
        // Always scroll to 0 if scrolling to the 0th index
        if (index === 0) {
            this.adapter.scrollTo(0);
            return;
        }
        // Always scroll to the max value if scrolling to the Nth index
        // MDCTabScroller.scrollTo() will never scroll past the max possible value
        if (index === this.adapter.getTabListLength() - 1) {
            this.adapter.scrollTo(this.adapter.getScrollContentWidth());
            return;
        }
        if (this.isRTL()) {
            this.scrollIntoViewImplRTL(index);
            return;
        }
        this.scrollIntoViewImpl(index);
    };
    /**
     * Private method for determining the index of the destination tab based on what key was pressed
     * @param origin The original index from which to determine the destination
     * @param key The name of the key
     */
    MDCTabBarFoundation.prototype.determineTargetFromKey = function (origin, key) {
        var isRTL = this.isRTL();
        var maxIndex = this.adapter.getTabListLength() - 1;
        var shouldGoToEnd = key === _constants__WEBPACK_IMPORTED_MODULE_0__.strings.END_KEY;
        var shouldDecrement = key === _constants__WEBPACK_IMPORTED_MODULE_0__.strings.ARROW_LEFT_KEY && !isRTL || key === _constants__WEBPACK_IMPORTED_MODULE_0__.strings.ARROW_RIGHT_KEY && isRTL;
        var shouldIncrement = key === _constants__WEBPACK_IMPORTED_MODULE_0__.strings.ARROW_RIGHT_KEY && !isRTL || key === _constants__WEBPACK_IMPORTED_MODULE_0__.strings.ARROW_LEFT_KEY && isRTL;
        var index = origin;
        if (shouldGoToEnd) {
            index = maxIndex;
        }
        else if (shouldDecrement) {
            index -= 1;
        }
        else if (shouldIncrement) {
            index += 1;
        }
        else {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }
        else if (index > maxIndex) {
            index = 0;
        }
        return index;
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrement = function (index, nextIndex, scrollPosition, barWidth) {
        var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
        var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
        var leftIncrement = relativeContentRight - _constants__WEBPACK_IMPORTED_MODULE_0__.numbers.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft + _constants__WEBPACK_IMPORTED_MODULE_0__.numbers.EXTRA_SCROLL_AMOUNT;
        if (nextIndex < index) {
            return Math.min(leftIncrement, 0);
        }
        return Math.max(rightIncrement, 0);
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     * @param scrollContentWidth The width of the scroll content
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrementRTL = function (index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
        var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
        var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
        var leftIncrement = relativeContentRight + _constants__WEBPACK_IMPORTED_MODULE_0__.numbers.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft - _constants__WEBPACK_IMPORTED_MODULE_0__.numbers.EXTRA_SCROLL_AMOUNT;
        if (nextIndex > index) {
            return Math.max(leftIncrement, 0);
        }
        return Math.min(rightIncrement, 0);
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge = function (index, tabDimensions, scrollPosition, barWidth) {
        /**
         * Tabs are laid out in the Tab Scroller like this:
         *
         *    Scroll Position
         *    +---+
         *    |   |   Bar Width
         *    |   +-----------------------------------+
         *    |   |                                   |
         *    |   V                                   V
         *    |   +-----------------------------------+
         *    V   |             Tab Scroller          |
         *    +------------+--------------+-------------------+
         *    |    Tab     |      Tab     |        Tab        |
         *    +------------+--------------+-------------------+
         *        |                                   |
         *        +-----------------------------------+
         *
         * To determine the next adjacent index, we look at the Tab root left and
         * Tab root right, both relative to the scroll position. If the Tab root
         * left is less than 0, then we know it's out of view to the left. If the
         * Tab root right minus the bar width is greater than 0, we know the Tab is
         * out of view to the right. From there, we either increment or decrement
         * the index.
         */
        var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
        var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
        var relativeRootDelta = relativeRootLeft + relativeRootRight;
        var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
        var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;
        if (leftEdgeIsCloser) {
            return index - 1;
        }
        if (rightEdgeIsCloser) {
            return index + 1;
        }
        return -1;
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     * @param scrollContentWidth The width of the scroller content
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL = function (index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
        var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
        var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
        var rootDelta = rootLeft + rootRight;
        var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
        var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;
        if (leftEdgeIsCloser) {
            return index + 1;
        }
        if (rightEdgeIsCloser) {
            return index - 1;
        }
        return -1;
    };
    /**
     * Returns the key associated with a keydown event
     * @param evt The keydown event
     */
    MDCTabBarFoundation.prototype.getKeyFromEvent = function (evt) {
        if (ACCEPTABLE_KEYS.has(evt.key)) {
            return evt.key;
        }
        return KEYCODE_MAP.get(evt.keyCode);
    };
    MDCTabBarFoundation.prototype.isActivationKey = function (key) {
        return key === _constants__WEBPACK_IMPORTED_MODULE_0__.strings.SPACE_KEY || key === _constants__WEBPACK_IMPORTED_MODULE_0__.strings.ENTER_KEY;
    };
    /**
     * Returns whether a given index is inclusively between the ends
     * @param index The index to test
     */
    MDCTabBarFoundation.prototype.indexIsInRange = function (index) {
        return index >= 0 && index < this.adapter.getTabListLength();
    };
    /**
     * Returns the view's RTL property
     */
    MDCTabBarFoundation.prototype.isRTL = function () {
        return this.adapter.isRTL();
    };
    /**
     * Scrolls the tab at the given index into view for left-to-right user agents.
     * @param index The index of the tab to scroll into view
     */
    MDCTabBarFoundation.prototype.scrollIntoViewImpl = function (index) {
        var scrollPosition = this.adapter.getScrollPosition();
        var barWidth = this.adapter.getOffsetWidth();
        var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
        var nextIndex = this.findAdjacentTabIndexClosestToEdge(index, tabDimensions, scrollPosition, barWidth);
        if (!this.indexIsInRange(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrement(index, nextIndex, scrollPosition, barWidth);
        this.adapter.incrementScroll(scrollIncrement);
    };
    /**
     * Scrolls the tab at the given index into view in RTL
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoViewImplRTL = function (index) {
        var scrollPosition = this.adapter.getScrollPosition();
        var barWidth = this.adapter.getOffsetWidth();
        var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
        var scrollWidth = this.adapter.getScrollContentWidth();
        var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL(index, tabDimensions, scrollPosition, barWidth, scrollWidth);
        if (!this.indexIsInRange(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrementRTL(index, nextIndex, scrollPosition, barWidth, scrollWidth);
        this.adapter.incrementScroll(scrollIncrement);
    };
    return MDCTabBarFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTabBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/component.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-indicator/component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabIndicator": () => (/* binding */ MDCTabIndicator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _fading_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fading-foundation */ "./node_modules/@material/tab-indicator/fading-foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
/* harmony import */ var _sliding_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliding-foundation */ "./node_modules/@material/tab-indicator/sliding-foundation.js");
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





var MDCTabIndicator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTabIndicator, _super);
    function MDCTabIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabIndicator.attachTo = function (root) {
        return new MDCTabIndicator(root);
    };
    MDCTabIndicator.prototype.initialize = function () {
        this.content = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTabIndicator.prototype.computeContentClientRect = function () {
        return this.foundation.computeContentClientRect();
    };
    MDCTabIndicator.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            computeContentClientRect: function () { return _this.content.getBoundingClientRect(); },
            setContentStyleProperty: function (prop, value) {
                _this.content.style.setProperty(prop, value);
            },
        };
        // tslint:enable:object-literal-sort-keys
        if (this.root.classList.contains(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.cssClasses.FADE)) {
            return new _fading_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFadingTabIndicatorFoundation(adapter);
        }
        // Default to the sliding indicator
        return new _sliding_foundation__WEBPACK_IMPORTED_MODULE_3__.MDCSlidingTabIndicatorFoundation(adapter);
    };
    MDCTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
        this.foundation.activate(previousIndicatorClientRect);
    };
    MDCTabIndicator.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    return MDCTabIndicator;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_4__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-indicator/constants.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
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
var cssClasses = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition',
};
var strings = {
    CONTENT_SELECTOR: '.mdc-tab-indicator__content',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/fading-foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/fading-foundation.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFadingTabIndicatorFoundation": () => (/* binding */ MDCFadingTabIndicatorFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
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


/* istanbul ignore next: subclass is not a branch statement */
var MDCFadingTabIndicatorFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFadingTabIndicatorFoundation, _super);
    function MDCFadingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFadingTabIndicatorFoundation.prototype.activate = function () {
        this.adapter.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    return MDCFadingTabIndicatorFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFadingTabIndicatorFoundation);
//# sourceMappingURL=fading-foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/foundation.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/foundation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabIndicatorFoundation": () => (/* binding */ MDCTabIndicatorFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-indicator/constants.js");
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



var MDCTabIndicatorFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTabIndicatorFoundation, _super);
    function MDCTabIndicatorFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTabIndicatorFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                computeContentClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                setContentStyleProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
        return this.adapter.computeContentClientRect();
    };
    return MDCTabIndicatorFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTabIndicatorFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/sliding-foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/sliding-foundation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSlidingTabIndicatorFoundation": () => (/* binding */ MDCSlidingTabIndicatorFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
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


/* istanbul ignore next: subclass is not a branch statement */
var MDCSlidingTabIndicatorFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCSlidingTabIndicatorFoundation, _super);
    function MDCSlidingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
        // Early exit if no indicator is present to handle cases where an indicator
        // may be activated without a prior indicator state
        if (!previousIndicatorClientRect) {
            this.adapter.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
            return;
        }
        // This animation uses the FLIP approach. You can read more about it at the link below:
        // https://aerotwist.com/blog/flip-your-animations/
        // Calculate the dimensions based on the dimensions of the previous indicator
        var currentClientRect = this.computeContentClientRect();
        var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        this.adapter.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
        // Force repaint before updating classes and transform to ensure the transform properly takes effect
        this.computeContentClientRect();
        this.adapter.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
        this.adapter.setContentStyleProperty('transform', '');
    };
    MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    return MDCSlidingTabIndicatorFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabIndicatorFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCSlidingTabIndicatorFoundation);
//# sourceMappingURL=sliding-foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/component.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/component.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabScroller": () => (/* binding */ MDCTabScroller)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-scroller/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/@material/tab-scroller/util.js");
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






var MDCTabScroller = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTabScroller, _super);
    function MDCTabScroller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScroller.attachTo = function (root) {
        return new MDCTabScroller(root);
    };
    // initialSyncWithDOM()
    MDCTabScroller.prototype.initialize = function () {
        this.area = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabScrollerFoundation.strings.AREA_SELECTOR);
        this.content = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTabScroller.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction = function () {
            _this.foundation.handleInteraction();
        };
        this.handleTransitionEnd = function (evt) {
            _this.foundation.handleTransitionEnd(evt);
        };
        this.area.addEventListener('wheel', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.area.addEventListener('touchstart', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.area.addEventListener('pointerdown', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.area.addEventListener('mousedown', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.area.addEventListener('keydown', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.content.addEventListener('transitionend', this.handleTransitionEnd);
    };
    MDCTabScroller.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.area.removeEventListener('wheel', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.area.removeEventListener('touchstart', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.area.removeEventListener('pointerdown', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.area.removeEventListener('mousedown', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.area.removeEventListener('keydown', this.handleInteraction, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());
        this.content.removeEventListener('transitionend', this.handleTransitionEnd);
    };
    MDCTabScroller.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            eventTargetMatchesSelector: function (evtTarget, selector) {
                return (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__.matches)(evtTarget, selector);
            },
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            addScrollAreaClass: function (className) {
                _this.area.classList.add(className);
            },
            setScrollAreaStyleProperty: function (prop, value) {
                _this.area.style.setProperty(prop, value);
            },
            setScrollContentStyleProperty: function (prop, value) {
                _this.content.style.setProperty(prop, value);
            },
            getScrollContentStyleValue: function (propName) {
                return window.getComputedStyle(_this.content).getPropertyValue(propName);
            },
            setScrollAreaScrollLeft: function (scrollX) { return _this.area.scrollLeft = scrollX; },
            getScrollAreaScrollLeft: function () { return _this.area.scrollLeft; },
            getScrollContentOffsetWidth: function () { return _this.content.offsetWidth; },
            getScrollAreaOffsetWidth: function () { return _this.area.offsetWidth; },
            computeScrollAreaClientRect: function () { return _this.area.getBoundingClientRect(); },
            computeScrollContentClientRect: function () {
                return _this.content.getBoundingClientRect();
            },
            computeHorizontalScrollbarHeight: function () {
                return _util__WEBPACK_IMPORTED_MODULE_4__.computeHorizontalScrollbarHeight(document);
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTabScrollerFoundation(adapter);
    };
    /**
     * Returns the current visual scroll position
     */
    MDCTabScroller.prototype.getScrollPosition = function () {
        return this.foundation.getScrollPosition();
    };
    /**
     * Returns the width of the scroll content
     */
    MDCTabScroller.prototype.getScrollContentWidth = function () {
        return this.content.offsetWidth;
    };
    /**
     * Increments the scroll value by the given amount
     * @param scrollXIncrement The pixel value by which to increment the scroll value
     */
    MDCTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
        this.foundation.incrementScroll(scrollXIncrement);
    };
    /**
     * Scrolls to the given pixel position
     * @param scrollX The pixel value to scroll to
     */
    MDCTabScroller.prototype.scrollTo = function (scrollX) {
        this.foundation.scrollTo(scrollX);
    };
    return MDCTabScroller;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_5__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/constants.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
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
var cssClasses = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
    SCROLL_TEST: 'mdc-tab-scroller__test',
};
var strings = {
    AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
    CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/foundation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/foundation.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabScrollerFoundation": () => (/* binding */ MDCTabScrollerFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-scroller/constants.js");
/* harmony import */ var _rtl_default_scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rtl-default-scroller */ "./node_modules/@material/tab-scroller/rtl-default-scroller.js");
/* harmony import */ var _rtl_negative_scroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rtl-negative-scroller */ "./node_modules/@material/tab-scroller/rtl-negative-scroller.js");
/* harmony import */ var _rtl_reverse_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rtl-reverse-scroller */ "./node_modules/@material/tab-scroller/rtl-reverse-scroller.js");
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






var MDCTabScrollerFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTabScrollerFoundation, _super);
    function MDCTabScrollerFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTabScrollerFoundation.defaultAdapter), adapter)) || this;
        /**
         * Controls whether we should handle the transitionend and interaction events during the animation.
         */
        _this.isAnimating = false;
        return _this;
    }
    Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                eventTargetMatchesSelector: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addScrollAreaClass: function () { return undefined; },
                setScrollAreaStyleProperty: function () { return undefined; },
                setScrollContentStyleProperty: function () { return undefined; },
                getScrollContentStyleValue: function () { return ''; },
                setScrollAreaScrollLeft: function () { return undefined; },
                getScrollAreaScrollLeft: function () { return 0; },
                getScrollContentOffsetWidth: function () { return 0; },
                getScrollAreaOffsetWidth: function () { return 0; },
                computeScrollAreaClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                computeScrollContentClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                computeHorizontalScrollbarHeight: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTabScrollerFoundation.prototype.init = function () {
        // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
        // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
        var horizontalScrollbarHeight = this.adapter.computeHorizontalScrollbarHeight();
        this.adapter.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
        this.adapter.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    };
    /**
     * Computes the current visual scroll position
     */
    MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
        if (this.isRTL()) {
            return this.computeCurrentScrollPositionRTL();
        }
        var currentTranslateX = this.calculateCurrentTranslateX();
        var scrollLeft = this.adapter.getScrollAreaScrollLeft();
        return scrollLeft - currentTranslateX;
    };
    /**
     * Handles interaction events that occur during transition
     */
    MDCTabScrollerFoundation.prototype.handleInteraction = function () {
        // Early exit if we aren't animating
        if (!this.isAnimating) {
            return;
        }
        // Prevent other event listeners from handling this event
        this.stopScrollAnimation();
    };
    /**
     * Handles the transitionend event
     */
    MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
        // Early exit if we aren't animating or the event was triggered by a different element.
        var evtTarget = evt.target;
        if (!this.isAnimating ||
            !this.adapter.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
            return;
        }
        this.isAnimating = false;
        this.adapter.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    };
    /**
     * Increment the scroll value by the scrollXIncrement using animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        this.animate(this.getIncrementScrollOperation(scrollXIncrement));
    };
    /**
     * Increment the scroll value by the scrollXIncrement without animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScrollImmediate = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        var operation = this.getIncrementScrollOperation(scrollXIncrement);
        if (operation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation();
        this.adapter.setScrollAreaScrollLeft(operation.finalScrollPosition);
    };
    /**
     * Scrolls to the given scrollX value
     */
    MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
        if (this.isRTL()) {
            this.scrollToImplRTL(scrollX);
            return;
        }
        this.scrollToImpl(scrollX);
    };
    /**
     * @return Browser-specific {@link MDCTabScrollerRTL} instance.
     */
    MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
        if (!this.rtlScrollerInstance) {
            this.rtlScrollerInstance = this.rtlScrollerFactory();
        }
        return this.rtlScrollerInstance;
    };
    /**
     * @return translateX value from a CSS matrix transform function string.
     */
    MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX = function () {
        var transformValue = this.adapter.getScrollContentStyleValue('transform');
        // Early exit if no transform is present
        if (transformValue === 'none') {
            return 0;
        }
        // The transform value comes back as a matrix transformation in the form
        // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
        // we're going to grab all the parenthesized values, strip out tx, and
        // parse it.
        var match = /\((.+?)\)/.exec(transformValue);
        if (!match) {
            return 0;
        }
        var matrixParams = match[1];
        // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
        // @ts-ignore These unused variables should retain their semantic names for clarity.
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(matrixParams.split(','), 6), a = _a[0], b = _a[1], c = _a[2], d = _a[3], tx = _a[4], ty = _a[5];
        return parseFloat(tx); // tslint:disable-line:ban
    };
    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param scrollX The distance to scroll
     */
    MDCTabScrollerFoundation.prototype.clampScrollValue = function (scrollX) {
        var edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL = function () {
        var translateX = this.calculateCurrentTranslateX();
        return this.getRTLScroller().getScrollPositionRTL(translateX);
    };
    MDCTabScrollerFoundation.prototype.calculateScrollEdges = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    /**
     * Internal scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollToImpl = function (scrollX) {
        var currentScrollX = this.getScrollPosition();
        var safeScrollX = this.clampScrollValue(scrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        this.animate({
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        });
    };
    /**
     * Internal RTL scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollToImplRTL = function (scrollX) {
        var animation = this.getRTLScroller().scrollToRTL(scrollX);
        this.animate(animation);
    };
    /**
     * Internal method to compute the increment scroll operation values.
     * @param scrollX The desired scroll position increment
     * @return MDCTabScrollerAnimation with the sanitized values for performing the scroll operation.
     */
    MDCTabScrollerFoundation.prototype.getIncrementScrollOperation = function (scrollX) {
        if (this.isRTL()) {
            return this.getRTLScroller().incrementScrollRTL(scrollX);
        }
        var currentScrollX = this.getScrollPosition();
        var targetScrollX = scrollX + currentScrollX;
        var safeScrollX = this.clampScrollValue(targetScrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        return {
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        };
    };
    /**
     * Animates the tab scrolling
     * @param animation The animation to apply
     */
    MDCTabScrollerFoundation.prototype.animate = function (animation) {
        var _this = this;
        // Early exit if translateX is 0, which means there's no animation to perform
        if (animation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation();
        // This animation uses the FLIP approach.
        // Read more here: https://aerotwist.com/blog/flip-your-animations/
        this.adapter.setScrollAreaScrollLeft(animation.finalScrollPosition);
        this.adapter.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)");
        // Force repaint
        this.adapter.computeScrollAreaClientRect();
        requestAnimationFrame(function () {
            _this.adapter.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
            _this.adapter.setScrollContentStyleProperty('transform', 'none');
        });
        this.isAnimating = true;
    };
    /**
     * Stops scroll animation
     */
    MDCTabScrollerFoundation.prototype.stopScrollAnimation = function () {
        this.isAnimating = false;
        var currentScrollPosition = this.getAnimatingScrollPosition();
        this.adapter.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
        this.adapter.setScrollContentStyleProperty('transform', 'translateX(0px)');
        this.adapter.setScrollAreaScrollLeft(currentScrollPosition);
    };
    /**
     * Gets the current scroll position during animation
     */
    MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition = function () {
        var currentTranslateX = this.calculateCurrentTranslateX();
        var scrollLeft = this.adapter.getScrollAreaScrollLeft();
        if (this.isRTL()) {
            return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
        }
        return scrollLeft - currentTranslateX;
    };
    /**
     * Determines the RTL Scroller to use
     */
    MDCTabScrollerFoundation.prototype.rtlScrollerFactory = function () {
        // Browsers have three different implementations of scrollLeft in RTL mode,
        // dependent on the browser. The behavior is based off the max LTR
        // scrollLeft value and 0.
        //
        // * Default scrolling in RTL *
        //    - Left-most value: 0
        //    - Right-most value: Max LTR scrollLeft value
        //
        // * Negative scrolling in RTL *
        //    - Left-most value: Negated max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // * Reverse scrolling in RTL *
        //    - Left-most value: Max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // We use those principles below to determine which RTL scrollLeft
        // behavior is implemented in the current browser.
        var initialScrollLeft = this.adapter.getScrollAreaScrollLeft();
        this.adapter.setScrollAreaScrollLeft(initialScrollLeft - 1);
        var newScrollLeft = this.adapter.getScrollAreaScrollLeft();
        // If the newScrollLeft value is negative,then we know that the browser has
        // implemented negative RTL scrolling, since all other implementations have
        // only positive values.
        if (newScrollLeft < 0) {
            // Undo the scrollLeft test check
            this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
            return new _rtl_negative_scroller__WEBPACK_IMPORTED_MODULE_2__.MDCTabScrollerRTLNegative(this.adapter);
        }
        var rootClientRect = this.adapter.computeScrollAreaClientRect();
        var contentClientRect = this.adapter.computeScrollContentClientRect();
        var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
        // Undo the scrollLeft test check
        this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
        // By calculating the clientRect of the root element and the clientRect of
        // the content element, we can determine how much the scroll value changed
        // when we performed the scrollLeft subtraction above.
        if (rightEdgeDelta === newScrollLeft) {
            return new _rtl_reverse_scroller__WEBPACK_IMPORTED_MODULE_3__.MDCTabScrollerRTLReverse(this.adapter);
        }
        return new _rtl_default_scroller__WEBPACK_IMPORTED_MODULE_4__.MDCTabScrollerRTLDefault(this.adapter);
    };
    MDCTabScrollerFoundation.prototype.isRTL = function () {
        return this.adapter.getScrollContentStyleValue('direction') === 'rtl';
    };
    return MDCTabScrollerFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_5__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTabScrollerFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-default-scroller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-default-scroller.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabScrollerRTLDefault": () => (/* binding */ MDCTabScrollerRTLDefault),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
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


var MDCTabScrollerRTLDefault = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTabScrollerRTLDefault, _super);
    function MDCTabScrollerRTLDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var right = this.calculateScrollEdges().right;
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(right - currentScrollLeft);
    };
    MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
        var edges = this.calculateScrollEdges();
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(edges.right - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
        return scrollX;
    };
    MDCTabScrollerRTLDefault.prototype.calculateScrollEdges = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    MDCTabScrollerRTLDefault.prototype.clampScrollValue = function (scrollX) {
        var edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    return MDCTabScrollerRTLDefault;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__.MDCTabScrollerRTL));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTabScrollerRTLDefault);
//# sourceMappingURL=rtl-default-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-negative-scroller.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-negative-scroller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabScrollerRTLNegative": () => (/* binding */ MDCTabScrollerRTLNegative),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
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


var MDCTabScrollerRTLNegative = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTabScrollerRTLNegative, _super);
    function MDCTabScrollerRTLNegative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        return Math.round(translateX - currentScrollLeft);
    };
    MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(-scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX - translateX;
    };
    MDCTabScrollerRTLNegative.prototype.calculateScrollEdges = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: rootWidth - contentWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLNegative.prototype.clampScrollValue = function (scrollX) {
        var edges = this.calculateScrollEdges();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLNegative;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__.MDCTabScrollerRTL));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTabScrollerRTLNegative);
//# sourceMappingURL=rtl-negative-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-reverse-scroller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-reverse-scroller.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabScrollerRTLReverse": () => (/* binding */ MDCTabScrollerRTLReverse),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
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


var MDCTabScrollerRTLReverse = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTabScrollerRTLReverse, _super);
    function MDCTabScrollerRTLReverse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(currentScrollLeft - translateX);
    };
    MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(currentScrollLeft + scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX + translateX;
    };
    MDCTabScrollerRTLReverse.prototype.calculateScrollEdges = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: contentWidth - rootWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLReverse.prototype.clampScrollValue = function (scrollX) {
        var edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLReverse;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__.MDCTabScrollerRTL));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTabScrollerRTLReverse);
//# sourceMappingURL=rtl-reverse-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-scroller.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-scroller.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabScrollerRTL": () => (/* binding */ MDCTabScrollerRTL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
var MDCTabScrollerRTL = /** @class */ (function () {
    function MDCTabScrollerRTL(adapter) {
        this.adapter = adapter;
    }
    return MDCTabScrollerRTL;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTabScrollerRTL);
//# sourceMappingURL=rtl-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-scroller/util.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeHorizontalScrollbarHeight": () => (/* binding */ computeHorizontalScrollbarHeight)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-scroller/constants.js");
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
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 */
var horizontalScrollbarHeight_;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 */
function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
    if (shouldCacheResult === void 0) { shouldCacheResult = true; }
    if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
        return horizontalScrollbarHeight_;
    }
    var el = documentObj.createElement('div');
    el.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__.cssClasses.SCROLL_TEST);
    documentObj.body.appendChild(el);
    var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
    documentObj.body.removeChild(el);
    if (shouldCacheResult) {
        horizontalScrollbarHeight_ = horizontalScrollbarHeight;
    }
    return horizontalScrollbarHeight;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/tab/component.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab/component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTab": () => (/* binding */ MDCTab)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _material_tab_indicator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/tab-indicator/component */ "./node_modules/@material/tab-indicator/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab/foundation.js");
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






var MDCTab = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTab, _super);
    function MDCTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTab.attachTo = function (root) {
        return new MDCTab(root);
    };
    MDCTab.prototype.initialize = function (rippleFactory, tabIndicatorFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__.MDCRipple(el, foundation); }; }
        if (tabIndicatorFactory === void 0) { tabIndicatorFactory = function (el) { return new _material_tab_indicator_component__WEBPACK_IMPORTED_MODULE_2__.MDCTabIndicator(el); }; }
        this.id = this.root.id;
        var rippleFoundation = new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_3__.MDCRippleFoundation(_material_ripple_component__WEBPACK_IMPORTED_MODULE_1__.MDCRipple.createAdapter(this));
        this.ripple = rippleFactory(this.root, rippleFoundation);
        var tabIndicatorElement = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
        this.tabIndicator = tabIndicatorFactory(tabIndicatorElement);
        this.content = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTab.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick = function () {
            _this.foundation.handleClick();
        };
        this.listen('click', this.handleClick);
    };
    MDCTab.prototype.destroy = function () {
        this.unlisten('click', this.handleClick);
        this.ripple.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCTab.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            activateIndicator: function (previousIndicatorClientRect) {
                _this.tabIndicator.activate(previousIndicatorClientRect);
            },
            deactivateIndicator: function () {
                _this.tabIndicator.deactivate();
            },
            notifyInteracted: function () { return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation.strings.INTERACTED_EVENT, { tabId: _this.id }, true /* bubble */); },
            getOffsetLeft: function () { return _this.root.offsetLeft; },
            getOffsetWidth: function () { return _this.root.offsetWidth; },
            getContentOffsetLeft: function () { return _this.content.offsetLeft; },
            getContentOffsetWidth: function () { return _this.content.offsetWidth; },
            focus: function () { return _this.root.focus(); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation(adapter);
    };
    Object.defineProperty(MDCTab.prototype, "active", {
        /**
         * Getter for the active state of the tab
         */
        get: function () {
            return this.foundation.isActive();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            this.foundation.setFocusOnActivate(focusOnActivate);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Activates the tab
     */
    MDCTab.prototype.activate = function (computeIndicatorClientRect) {
        this.foundation.activate(computeIndicatorClientRect);
    };
    /**
     * Deactivates the tab
     */
    MDCTab.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    /**
     * Returns the indicator's client rect
     */
    MDCTab.prototype.computeIndicatorClientRect = function () {
        return this.tabIndicator.computeContentClientRect();
    };
    MDCTab.prototype.computeDimensions = function () {
        return this.foundation.computeDimensions();
    };
    /**
     * Focuses the tab
     */
    MDCTab.prototype.focus = function () {
        this.root.focus();
    };
    return MDCTab;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_5__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab/constants.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
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
var cssClasses = {
    ACTIVE: 'mdc-tab--active',
};
var strings = {
    ARIA_SELECTED: 'aria-selected',
    CONTENT_SELECTOR: '.mdc-tab__content',
    INTERACTED_EVENT: 'MDCTab:interacted',
    RIPPLE_SELECTOR: '.mdc-tab__ripple',
    TABINDEX: 'tabIndex',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab/foundation.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/tab/foundation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTabFoundation": () => (/* binding */ MDCTabFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab/constants.js");
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



var MDCTabFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTabFoundation, _super);
    function MDCTabFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTabFoundation.defaultAdapter), adapter)) || this;
        _this.focusOnActivate = true;
        return _this;
    }
    Object.defineProperty(MDCTabFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                activateIndicator: function () { return undefined; },
                deactivateIndicator: function () { return undefined; },
                notifyInteracted: function () { return undefined; },
                getOffsetLeft: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                getContentOffsetLeft: function () { return 0; },
                getContentOffsetWidth: function () { return 0; },
                focus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTabFoundation.prototype.handleClick = function () {
        // It's up to the parent component to keep track of the active Tab and
        // ensure we don't activate a Tab that's already active.
        this.adapter.notifyInteracted();
    };
    MDCTabFoundation.prototype.isActive = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ACTIVE);
    };
    /**
     * Sets whether the tab should focus itself when activated
     */
    MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
        this.focusOnActivate = focusOnActivate;
    };
    /**
     * Activates the Tab
     */
    MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ACTIVE);
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SELECTED, 'true');
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.TABINDEX, '0');
        this.adapter.activateIndicator(previousIndicatorClientRect);
        if (this.focusOnActivate) {
            this.adapter.focus();
        }
    };
    /**
     * Deactivates the Tab
     */
    MDCTabFoundation.prototype.deactivate = function () {
        // Early exit
        if (!this.isActive()) {
            return;
        }
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ACTIVE);
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SELECTED, 'false');
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.TABINDEX, '-1');
        this.adapter.deactivateIndicator();
    };
    /**
     * Returns the dimensions of the Tab
     */
    MDCTabFoundation.prototype.computeDimensions = function () {
        var rootWidth = this.adapter.getOffsetWidth();
        var rootLeft = this.adapter.getOffsetLeft();
        var contentWidth = this.adapter.getContentOffsetWidth();
        var contentLeft = this.adapter.getContentOffsetLeft();
        return {
            contentLeft: rootLeft + contentLeft,
            contentRight: rootLeft + contentLeft + contentWidth,
            rootLeft: rootLeft,
            rootRight: rootLeft + rootWidth,
        };
    };
    return MDCTabFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTabFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/projecttestcases/projectTestCases.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/projecttestcases/projectTestCases.scss ***!
  \***************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px;\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px);\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px);\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px);\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 24px;\n      grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__cell {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n    width: calc(8.3333333333% - 24px);\n    width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n    width: calc(16.6666666667% - 24px);\n    width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n    width: calc(25% - 24px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n    width: calc(41.6666666667% - 24px);\n    width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n    width: calc(50% - 24px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n    width: calc(58.3333333333% - 24px);\n    width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n    width: calc(66.6666666667% - 24px);\n    width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n    width: calc(75% - 24px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n      width: auto;\n      grid-column-end: span 9;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n    width: calc(83.3333333333% - 24px);\n    width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n      width: auto;\n      grid-column-end: span 10;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n    width: calc(91.6666666667% - 24px);\n    width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n      width: auto;\n      grid-column-end: span 11;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n    width: calc(100% - 24px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n      width: auto;\n      grid-column-end: span 12;\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__cell {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n    width: calc(12.5% - 16px);\n    width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n    width: calc(37.5% - 16px);\n    width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n    width: calc(62.5% - 16px);\n    width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n    width: calc(87.5% - 16px);\n    width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__cell {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n}\n.mdc-layout-grid__cell--order-1 {\n  order: 1;\n}\n.mdc-layout-grid__cell--order-2 {\n  order: 2;\n}\n.mdc-layout-grid__cell--order-3 {\n  order: 3;\n}\n.mdc-layout-grid__cell--order-4 {\n  order: 4;\n}\n.mdc-layout-grid__cell--order-5 {\n  order: 5;\n}\n.mdc-layout-grid__cell--order-6 {\n  order: 6;\n}\n.mdc-layout-grid__cell--order-7 {\n  order: 7;\n}\n.mdc-layout-grid__cell--order-8 {\n  order: 8;\n}\n.mdc-layout-grid__cell--order-9 {\n  order: 9;\n}\n.mdc-layout-grid__cell--order-10 {\n  order: 10;\n}\n.mdc-layout-grid__cell--order-11 {\n  order: 11;\n}\n.mdc-layout-grid__cell--order-12 {\n  order: 12;\n}\n.mdc-layout-grid__cell--align-top {\n  align-self: flex-start;\n}\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-top {\n    align-self: start;\n  }\n}\n.mdc-layout-grid__cell--align-middle {\n  align-self: center;\n}\n.mdc-layout-grid__cell--align-bottom {\n  align-self: flex-end;\n}\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-bottom {\n    align-self: end;\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 1176px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-desktop, 72px) * 12 +\n      var(--mdc-layout-grid-gutter-desktop, 24px) * 11 +\n      var(--mdc-layout-grid-margin-desktop, 24px) * 2\n  );\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 720px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-tablet, 72px) * 8 +\n      var(--mdc-layout-grid-gutter-tablet, 16px) * 7 +\n      var(--mdc-layout-grid-margin-tablet, 16px) * 2\n  );\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 368px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-phone, 72px) * 4 +\n      var(--mdc-layout-grid-gutter-phone, 16px) * 3 +\n      var(--mdc-layout-grid-margin-phone, 16px) * 2\n  );\n  }\n}\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-bar {\n  width: 100%;\n}\n\n.mdc-tab {\n  height: 48px;\n}\n\n.mdc-tab--stacked {\n  height: 72px;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-scroller {\n  overflow-y: hidden;\n}\n.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content {\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-scroller__test {\n  position: absolute;\n  top: -9999px;\n  width: 100px;\n  height: 100px;\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: touch;\n  display: flex;\n  overflow-x: hidden;\n}\n\n.mdc-tab-scroller__scroll-area::-webkit-scrollbar,\n.mdc-tab-scroller__test::-webkit-scrollbar {\n  display: none;\n}\n\n.mdc-tab-scroller__scroll-area--scroll {\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-content {\n  position: relative;\n  display: flex;\n  flex: 1 0 auto;\n  transform: none;\n  will-change: transform;\n}\n\n.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {\n  justify-content: flex-start;\n}\n\n.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {\n  justify-content: flex-end;\n}\n\n.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {\n  justify-content: center;\n}\n\n.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: auto;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #6200ee;\n  /* @alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  color: #018786;\n  /* @alternate */\n  color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-top-width: 2px;\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  height: 34px;\n  font-size: 34px;\n}\n\n.mdc-tab-indicator {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.mdc-tab-indicator__content {\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator__content--icon {\n  align-self: center;\n  margin: 0 auto;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  transition: none;\n}\n\n.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  transition: 150ms opacity linear;\n}\n\n.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  transition-delay: 100ms;\n}\n\n.mdc-tab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n  position: relative;\n}\n.mdc-tab .mdc-tab__text-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-tab .mdc-tab__icon {\n  color: rgba(0, 0, 0, 0.54);\n  fill: currentColor;\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring, .mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring {\n  pointer-events: none;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  box-sizing: content-box;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(\n      100% + -12px\n    );\n  width: calc(\n      100% + -8px\n    );\n  margin-top: -2px;\n  z-index: 2;\n}\n@media screen and (forced-colors: active) {\n  .mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring, .mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring {\n    border-color: CanvasText;\n  }\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after, .mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after {\n  content: \"\";\n  border: 2px solid transparent;\n  border-radius: 10px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(100% + 4px);\n  width: calc(100% + 4px);\n}\n@media screen and (forced-colors: active) {\n  .mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after, .mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring {\n  pointer-events: none;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  box-sizing: content-box;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(\n      100% + -8px\n    );\n  width: calc(\n      100% + -8px\n    );\n  z-index: 2;\n}\n@media screen and (forced-colors: active) {\n  .mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring {\n    border-color: CanvasText;\n  }\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after {\n  content: \"\";\n  border: 2px solid transparent;\n  border-radius: 10px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(100% + 4px);\n  width: calc(100% + 4px);\n}\n@media screen and (forced-colors: active) {\n  .mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-tab__content {\n  position: relative;\n}\n\n.mdc-tab__icon {\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n}\n\n.mdc-tab--active .mdc-tab__text-label {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-tab--active .mdc-tab__icon {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n  fill: currentColor;\n}\n\n.mdc-tab {\n  background: none;\n}\n\n.mdc-tab {\n  min-width: 90px;\n  padding-right: 24px;\n  padding-left: 24px;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  outline: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-appearance: none;\n  z-index: 1;\n}\n.mdc-tab::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n.mdc-tab--min-width {\n  flex: 0 1 auto;\n}\n\n.mdc-tab__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n  pointer-events: none;\n}\n\n.mdc-tab__text-label {\n  transition: 150ms color linear;\n  display: inline-block;\n  line-height: 1;\n  z-index: 2;\n}\n\n.mdc-tab__icon {\n  transition: 150ms color linear;\n  z-index: 2;\n}\n\n.mdc-tab--stacked .mdc-tab__content {\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.mdc-tab--stacked .mdc-tab__text-label {\n  padding-top: 6px;\n  padding-bottom: 4px;\n}\n\n.mdc-tab--active .mdc-tab__text-label,\n.mdc-tab--active .mdc-tab__icon {\n  transition-delay: 100ms;\n}\n\n.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label, .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 8px;\n  /*rtl:end:ignore*/\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-tab {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.mdc-tab .mdc-tab__ripple::before,\n.mdc-tab .mdc-tab__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-tab .mdc-tab__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-tab .mdc-tab__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-tab .mdc-tab__ripple::before,\n.mdc-tab .mdc-tab__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-tab .mdc-tab__ripple::before, .mdc-tab .mdc-tab__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-tab:hover .mdc-tab__ripple::before, .mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-tab.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n\n.mdc-tab__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --mdc-theme-primary: #006874;\n    --mdc-theme-on-primary: #ffffff;\n    --mdc-theme-secondary: #5c6300;\n    --mdc-theme-on-secondary: #ffffff;\n    --mdc-theme-surface: #fafdfd;\n    --mdc-theme-on-surface: #191c1d;\n    --mdc-theme-background: #fafdfd;\n    --mdc-theme-on-background: #191c1d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --mdc-theme-primary: #4fd8eb;\n    --mdc-theme-on-primary: #00363d;\n    --mdc-theme-secondary: #c2d016;\n    --mdc-theme-on-secondary: #2f3300;\n    --mdc-theme-surface-base: 195, 7.4%;\n    --mdc-theme-surface-l: 15.6%;\n    --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\n    --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\n    --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\n    --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\n    --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\n    --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\n    --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\n    --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n    --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\n    --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\n    --mdc-theme-on-surface: #e1e3e3;\n    --mdc-theme-background: #191c1d;\n    --mdc-theme-on-background: #e1e3e3;\n    --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdc-elevation--z1 {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-elevation--z2 {\n    background: var(--mdc-theme-surface-z2);\n  }\n  .mdc-elevation--z3 {\n    background: var(--mdc-theme-surface-z3);\n  }\n  .mdc-elevation--z4 {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-elevation--z5 {\n    background: var(--mdc-theme-surface-z5);\n  }\n  .mdc-elevation--z6 {\n    background: var(--mdc-theme-surface-z6);\n  }\n  .mdc-elevation--z7 {\n    background: var(--mdc-theme-surface-z7);\n  }\n  .mdc-drawer.mdc-drawer--modal {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__title {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__subtitle {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-surface-z9);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar {\n    background-color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar__title {\n    color: var(--mdc-theme-on-primary);\n  }\n  .mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-tab.mdc-tab--active .mdc-tab__icon, .mdc-tab.mdc-tab--active .mdc-tab__text-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__header-cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: var(--mdc-theme-surface-z3);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__title {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog__actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined .mdc-notched-outline {\n    z-index: -1;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-primary);\n  }\n}\n.mdc-typography {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);\n}\n\n.mdc-typography--headline1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 6rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline1-font-size, 6rem);\n  line-height: 6rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline1-line-height, 6rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline1-font-weight, 300);\n  letter-spacing: -0.015625em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline1-text-transform, inherit);\n}\n\n.mdc-typography--headline2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline2-font-size, 3.75rem);\n  line-height: 3.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline2-line-height, 3.75rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline2-font-weight, 300);\n  letter-spacing: -0.0083333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline2-text-transform, inherit);\n}\n\n.mdc-typography--headline3 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline3-font-size, 3rem);\n  line-height: 3.125rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline3-line-height, 3.125rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline3-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline3-text-transform, inherit);\n}\n\n.mdc-typography--headline4 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 2.125rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline4-font-size, 2.125rem);\n  line-height: 2.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline4-line-height, 2.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline4-font-weight, 400);\n  letter-spacing: 0.0073529412em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline4-text-transform, inherit);\n}\n\n.mdc-typography--headline5 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.5rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline5-font-size, 1.5rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline5-line-height, 2rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline5-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline5-text-transform, inherit);\n}\n\n.mdc-typography--headline6 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n}\n\n.mdc-typography--subtitle1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n}\n\n.mdc-typography--subtitle2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n}\n\n.mdc-typography--body1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body1-font-size, 1rem);\n  line-height: 1.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body1-line-height, 1.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body1-font-weight, 400);\n  letter-spacing: 0.03125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body1-text-transform, inherit);\n}\n\n.mdc-typography--body2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-typography--caption {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-typography--button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n}\n\n.mdc-typography--overline {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n}\n\nhtml {\n  background-color: var(--mdc-theme-background);\n}\n\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  vertical-align: middle;\n}\n\n.mdc-icon-button.actionsButton {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n\n.main-content {\n  padding: 1rem;\n}\n\n.content-section {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.demo-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.demo-group.wrap {\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./node_modules/@material/layout-grid/mdc-layout-grid.scss","webpack://./src/documentation/projecttestcases/projectTestCases.scss","webpack://./node_modules/@material/layout-grid/_mixins.scss","webpack://./node_modules/@material/tab-bar/mdc-tab-bar.scss","webpack://./node_modules/@material/tab-bar/_mixins.scss","webpack://./node_modules/@material/tab/_mixins.scss","webpack://./node_modules/@material/tab-scroller/mdc-tab-scroller.scss","webpack://./node_modules/@material/tab-scroller/_mixins.scss","webpack://./node_modules/@material/tab-indicator/mdc-tab-indicator.scss","webpack://./node_modules/@material/tab-indicator/_mixins.scss","webpack://./node_modules/@material/theme/_css.scss","webpack://./node_modules/@material/theme/_gss.scss","webpack://./node_modules/@material/typography/_typography.scss","webpack://./node_modules/@material/focus-ring/_focus-ring.scss","webpack://./node_modules/@material/dom/_dom.scss","webpack://./node_modules/@material/tab/_variables.scss","webpack://./node_modules/@material/rtl/_rtl.scss","webpack://./node_modules/@material/ripple/_ripple.scss","webpack://./node_modules/@material/animation/_animation.scss","webpack://./node_modules/@material/ripple/_ripple-theme.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/theme/theme1/_variables.scss","webpack://./src/styles/_common.scss"],"names":[],"mappings":"AAyBA;EAEI,sCAAA;EAIA,sCAAA;EAIA,4CAAA;EARA,qCAAA;EAIA,qCAAA;EAIA,2CAAA;EARA,oCAAA;EAIA,oCAAA;EAIA,0CAAA;ACzBJ;;AC0DI;EFzBJ;IE+DE,sBAAA;IACA,cAAA;IACA,aF9Da;IEgEb,oDAAA;ED5FA;AACF;AC4CI;EFpBJ;IE+DE,sBAAA;IACA,cAAA;IACA,aF9Da;IEgEb,mDAAA;EDpFA;AACF;AC+BI;EFfJ;IE+DE,sBAAA;IACA,cAAA;IACA,aF9Da;IEgEb,kDAAA;ED5EA;AACF;;ACiCI;EFfJ;IEqEE,aAAA;IACA,mBAAA;IACA,oBAAA;IACA,aAAA;IAEA,kEAAA;EDnFA;ECqFA;IF5EF;ME6EI,aAAA;MACA,SAAA;MACA,cF3EW;ME6EX,qDAAA;MACA,iDAAA;IDnFA;EACF;AACF;ACSI;EFVJ;IEqEE,aAAA;IACA,mBAAA;IACA,oBAAA;IACA,YAAA;IAEA,iEAAA;EDjEA;ECmEA;IF5EF;ME6EI,aAAA;MACA,SAAA;MACA,cF3EW;ME6EX,oDAAA;MACA,gDAAA;IDjEA;EACF;AACF;ACdI;EFLJ;IEqEE,aAAA;IACA,mBAAA;IACA,oBAAA;IACA,YAAA;IAEA,gEAAA;ED/CA;ECiDA;IF5EF;ME6EI,aAAA;MACA,SAAA;MACA,cF3EW;ME6EX,mDAAA;MACA,gDAAA;ID/CA;EACF;AACF;;ACtBI;EFJJ;IE0BE,kCAAA;IAEA,yEAAA;IAyDA,sBAAA;IACA,YAAA;IAEA,6DAAA;EDrDA;ECLA;IF9BF;ME+BI,WAAA;MACA,uBAAA;IDQA;EACF;ECiDA;IF1FF;ME2FI,SAAA;ID9CA;EACF;EDjCe;;IEaf,iCAAA;IAEA,wEAAA;EDuBA;ECrBA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyBA;EACF;ED7Ce;;IEaf,kCAAA;IAEA,yEAAA;EDmCA;ECjCA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqCA;EACF;EDzDe;;IEaf,uBAAA;IAEA,8DAAA;ED+CA;EC7CA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiDA;EACF;EDrEe;;IEaf,kCAAA;IAEA,yEAAA;ED2DA;ECzDA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6DA;EACF;EDjFe;;IEaf,kCAAA;IAEA,yEAAA;EDuEA;ECrEA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyEA;EACF;ED7Fe;;IEaf,uBAAA;IAEA,8DAAA;EDmFA;ECjFA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqFA;EACF;EDzGe;;IEaf,kCAAA;IAEA,yEAAA;ED+FA;EC7FA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiGA;EACF;EDrHe;;IEaf,kCAAA;IAEA,yEAAA;ED2GA;ECzGA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6GA;EACF;EDjIe;;IEaf,uBAAA;IAEA,8DAAA;EDuHA;ECrHA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyHA;EACF;ED7Ie;;IEaf,kCAAA;IAEA,yEAAA;EDmIA;ECjIA;IFjBe;;MEkBb,WAAA;MACA,wBAAA;IDqIA;EACF;EDzJe;;IEaf,kCAAA;IAEA,yEAAA;ED+IA;EC7IA;IFjBe;;MEkBb,WAAA;MACA,wBAAA;IDiJA;EACF;EDrKe;;IEaf,wBAAA;IAEA,+DAAA;ED2JA;ECzJA;IFjBe;;MEkBb,WAAA;MACA,wBAAA;ID6JA;EACF;AACF;AChMI;EFCJ;IE0BE,uBAAA;IAEA,6DAAA;IAyDA,sBAAA;IACA,WAAA;IAEA,4DAAA;ED+GA;ECzKA;IF9BF;ME+BI,WAAA;MACA,uBAAA;ID4KA;EACF;ECnHA;IF1FF;ME2FI,SAAA;IDsHA;EACF;EDrMe;;IEaf,yBAAA;IAEA,+DAAA;ED2LA;ECzLA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6LA;EACF;EDjNe;;IEaf,uBAAA;IAEA,6DAAA;EDuMA;ECrMA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyMA;EACF;ED7Ne;;IEaf,yBAAA;IAEA,+DAAA;EDmNA;ECjNA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqNA;EACF;EDzOe;;IEaf,uBAAA;IAEA,6DAAA;ED+NA;EC7NA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiOA;EACF;EDrPe;;IEaf,yBAAA;IAEA,+DAAA;ED2OA;ECzOA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6OA;EACF;EDjQe;;IEaf,uBAAA;IAEA,6DAAA;EDuPA;ECrPA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyPA;EACF;ED7Qe;;IEaf,yBAAA;IAEA,+DAAA;EDmQA;ECjQA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqQA;EACF;EDzRe;;IEaf,wBAAA;IAEA,8DAAA;ED+QA;EC7QA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiRA;EACF;EDrSe;;IEaf,wBAAA;IAEA,8DAAA;ED2RA;ECzRA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6RA;EACF;EDjTe;;IEaf,wBAAA;IAEA,8DAAA;EDuSA;ECrSA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDySA;EACF;ED7Te;;IEaf,wBAAA;IAEA,8DAAA;EDmTA;ECjTA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqTA;EACF;EDzUe;;IEaf,wBAAA;IAEA,8DAAA;ED+TA;EC7TA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiUA;EACF;AACF;ACzWI;EFMJ;IE0BE,wBAAA;IAEA,6DAAA;IAyDA,sBAAA;IACA,WAAA;IAEA,2DAAA;EDmRA;EC7UA;IF9BF;ME+BI,WAAA;MACA,uBAAA;IDgVA;EACF;ECvRA;IF1FF;ME2FI,SAAA;ID0RA;EACF;EDzWe;;IEaf,uBAAA;IAEA,4DAAA;ED+VA;EC7VA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiWA;EACF;EDrXe;;IEaf,uBAAA;IAEA,4DAAA;ED2WA;ECzWA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6WA;EACF;EDjYe;;IEaf,uBAAA;IAEA,4DAAA;EDuXA;ECrXA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyXA;EACF;ED7Ye;;IEaf,wBAAA;IAEA,6DAAA;EDmYA;ECjYA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqYA;EACF;EDzZe;;IEaf,wBAAA;IAEA,6DAAA;ED+YA;EC7YA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDiZA;EACF;EDrae;;IEaf,wBAAA;IAEA,6DAAA;ED2ZA;ECzZA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6ZA;EACF;EDjbe;;IEaf,wBAAA;IAEA,6DAAA;EDuaA;ECraA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDyaA;EACF;ED7be;;IEaf,wBAAA;IAEA,6DAAA;EDmbA;ECjbA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqbA;EACF;EDzce;;IEaf,wBAAA;IAEA,6DAAA;ED+bA;EC7bA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDicA;EACF;EDrde;;IEaf,wBAAA;IAEA,6DAAA;ED2cA;ECzcA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;ID6cA;EACF;EDjee;;IEaf,wBAAA;IAEA,6DAAA;EDudA;ECrdA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDydA;EACF;ED7ee;;IEaf,wBAAA;IAEA,6DAAA;EDmeA;ECjeA;IFjBe;;MEkBb,WAAA;MACA,uBAAA;IDqeA;EACF;AACF;AD/eI;EEwEF,QFzEa;ACmff;ADlfI;EEwEF,QFzEa;ACsff;ADrfI;EEwEF,QFzEa;ACyff;ADxfI;EEwEF,QFzEa;AC4ff;AD3fI;EEwEF,QFzEa;AC+ff;AD9fI;EEwEF,QFzEa;ACkgBf;ADjgBI;EEwEF,QFzEa;ACqgBf;ADpgBI;EEwEF,QFzEa;ACwgBf;ADvgBI;EEwEF,QFzEa;AC2gBf;AD1gBI;EEwEF,SFzEa;AC8gBf;AD7gBI;EEwEF,SFzEa;ACihBf;ADhhBI;EEwEF,SFzEa;ACohBf;AD7gBE;EEuEE,sBAAA;ADycJ;ACvcI;EFzEF;IE0EI,iBAAA;ED0cJ;AACF;ADjhBE;EE2EE,kBAAA;ADycJ;ADhhBE;EE2EE,oBAAA;ADwcJ;ACtcI;EF7EF;IE8EI,eAAA;EDycJ;AACF;;AC1jBI;EFuCJ;IE2FE,aAAA;IAGA;;;;GAAA;ED+bA;AACF;AC1kBI;EF4CJ;IE2FE,YAAA;IAGA;;;;GAAA;EDycA;AACF;ACzlBI;EFiDJ;IE2FE,YAAA;IAGA;;;;GAAA;EDmdA;AACF;;ADjiBA;EACE,kBAAA;EACA,cAAA;ACoiBF;;ADjiBA;EACE,eAAA;EACA,iBAAA;ACoiBF;;AEvqBA;;;;;;;;;;;;;;;;;;;;;EAAA;ACiCE;EAiBE,WAhBe;AH+pBnB;;AG9nBE;EC4ME,YDlNO;AHwoBX;;AGjnBE;EC2LE,YDjMO;AH2nBX;;AKzsBA;;;;;;;;;;;;;;;;;;;;;EAAA;AC2DE;EAOI,kBAAA;ANiqBN;AMxrBE;EAEI,wDAAA;ANyrBN;;AM/pBE;EAEI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;ANiqBN;;AM7pBE;EAEI,iCAAA;EACA,aAAA;EACA,kBAAA;AN+pBN;;AMxpBM;;EACE,aAAA;AN4pBR;;AMtpBE;EAEI,kBAAA;ANwpBN;;AMppBE;EFiJE,kBAAA;EErGA,aAAA;EACA,cAAA;EACA,eAAA;EAIA,sBAAA;AN0mBJ;;AMxpBE;EAEI,2BAAA;AN0pBN;;AMtpBE;EAEI,yBAAA;ANwpBN;;AMppBE;EAEI,uBAAA;ANspBN;;AMjpBI;EAEI,gCAAA;ANmpBR;;AOrxBA;;;;;;;;;;;;;;;;;;;;;EAAA;ACmIE;ECjEI,qBAAA;ECZF,eAAA;EDwBA,+CAAA;ATmuBJ;AQzoBE;ECtGI,cAAA;ECZF,eAAA;EDwBA,0CAAA;ATwuBJ;AQzqBE;EAEI,qBAoDsB;ARsnB5B;AQvoBE;EAEI,YAgBiB;EAfjB,eAeiB;ARynBvB;;AQ5xBE;EAEI,aAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,UAAA;AR8xBN;;AQ1xBE;EAEI,sBAAA;EACA,UAAA;AR4xBN;;AQxxBE;EAEI,oBAAA;EACA,sBAAA;EACA,WAAA;EACA,uBAAA;AR0xBN;;AQtxBE;EAEI,kBAAA;EACA,cAAA;ARwxBN;;AQpxBE;EAEI,UAAA;ARsxBN;;AQjxBE;EAEI,wDAAA;ARmxBN;;AQ9wBE;EAEI,gBAAA;ARgxBN;;AQ5wBE;EAEI,gCAAA;AR8wBN;;AQzwBE;EAGI,uBAAA;AR0wBN;;AI7tBE;EOuLE,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,4GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,2EAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,mEAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,sEAAA;ED8CA,kBAAA;AR6wBJ;AItsBE;EKrHE,yBAAA;AT8zBJ;AI/rBE;EK/HE,0BAAA;ELmIE,kBAAA;AJ+rBN;AItlBI;EQpPA,oBAAA;EACA,6BAAA;EACA,kBAAA;EACA,uBAAA;EACA,kBAAA;EACA,QAAA;EFhBA,YAAA,EAAA,aAAA;EEkBA,SAAA;EFlBA,YAAA,EAAA,aAAA;EEoBA,gCAAA;EACA;;KAzB0B;EA0B1B;;KApB4B;ERsQxB,gBAAA;EAEA,UAAA;AJ+lBR;Aat0BI;ET4NA;IQtOE,wBAAA;EZo1BJ;AACF;AYl1BI;EACE,WAAA;EACA,6BAAA;EACA,mBRmOgB;EQlOhB,cAAA;EACA,kBAAA;EACA,QAAA;EFlCF,YAAA,EAAA,aAAA;EEoCE,SAAA;EFpCF,YAAA,EAAA,aAAA;EEsCE,gCAAA;EACA,wBA/BgB;EAgChB,uBAhCgB;AZo3BtB;Aaz1BI;EDPA;IAeI,wBAAA;EZq1BN;AACF;AInnBI;EQnQA,oBAAA;EACA,6BAAA;EACA,kBAAA;EACA,uBAAA;EACA,kBAAA;EACA,QAAA;EFhBA,YAAA,EAAA,aAAA;EEkBA,SAAA;EFlBA,YAAA,EAAA,aAAA;EEoBA,gCAAA;EACA;;KAzB0B;EA0B1B;;KApB4B;ERsRxB,UAAA;AJ4nBR;Aaj3BI;ET2OA;IQrPE,wBAAA;EZ+3BJ;AACF;AY73BI;EACE,WAAA;EACA,6BAAA;EACA,mBRkPgB;EQjPhB,cAAA;EACA,kBAAA;EACA,QAAA;EFlCF,YAAA,EAAA,aAAA;EEoCE,SAAA;EFpCF,YAAA,EAAA,aAAA;EEsCE,gCAAA;EACA,wBA/BgB;EAgChB,uBAhCgB;AZ+5BtB;Aap4BI;EDPA;IAeI,wBAAA;EZg4BN;AACF;;AIl1BE;EIzBE,kBAAA;AR+2BJ;;AIl1BE;EAEI,WUnIM;EVoIN,YUpIM;EVqIN,eUrIM;Ady9BZ;;AI9yBE;EKjII,cAAA;ECZF,eAAA;EDwBA,wCAAA;ATy6BJ;AI1yBE;EK3II,cAAA;ECZF,eAAA;EDwBA,wCAAA;ELmIE,kBAAA;AJ4yBN;;AIx1BE;EAEI,gBAAA;AJ01BN;;AIn9BE;EA2PE,eU9QQ;EVgKR,mBU/JiB;EVgKjB,kBUhKiB;EVuBf,aAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EAEA,SAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,wBAAA;EACA,UAAA;AJo9BN;AIj9BM;EACE,UAAA;EACA,SAAA;AJm9BR;;AI98BE;EAEI,cAAA;AJg9BN;;AI58BE;EAEI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,oBAAA;AJ88BN;;AI18BE;EAEI,8BAAA;EAIA,qBAAA;EAKA,cAAA;EACA,UAAA;AJq8BN;;AIj8BE;EAEI,8BAAA;EAIA,UAAA;AJg8BN;;AI5qBI;EACE,sBAAA;EACA,mBAAA;EACA,uBAAA;AJ+qBN;AI5qBI;EACE,gBAAA;EACA,mBAAA;AJ8qBN;;AIj8BI;;EAGI,uBAAA;AJm8BR;;AI97BE;EMvEE,YAAA,EAAA,aAAA;EDmBA,iBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,gBAAA;ATy/BJ;Aev/BM;EACE,mBAAA;ELtBJ,YAAA,EAAA,aAAA;EDmBA,eAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,kBAAA;EMKI,iBAAA;Af4/BR;;AgB/xBE;EACE;IACE,uDC3R2B;IDgS3B,sEAAA;EhB8xBJ;EgB3xBE;IACE,gGAAA;EhB6xBJ;AACF;AgBzxBE;EACE;IACE,iCAAA;IACA,UAAA;EhB2xBJ;EgBxxBE;IACE,wCAAA;EhB0xBJ;AACF;AgBvxBE;EACE;IACE,iCAAA;IACA,wCAAA;EhByxBJ;EgBtxBE;IACE,UAAA;EhBwxBJ;AACF;AI/wBE;EY1OE,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,wBAAA;EACA,gCAAA;EACA,kCAAA;EAEA,6CAAA;AhB2/BJ;AgBp/BE;;EAGI,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;AhBq/BN;AgBj/BE;EAGI,6DAAA;EP5EA,UAAA;ECZF,eAAA;EDwBA,qCAAA;ATojCJ;AgBv+BE;EPzFI,UAAA;ECZF,eAAA;EDwBA,qCAAA;ATyjCJ;AgBh+BI;EAEI,+CAAA;AhBi+BR;AgB79BI;EAEI,MAAA;ENpHJ,YAAA,EAAA,aAAA;EMsHI,OAAA;EACA,mBAAA;EACA,+BAAA;AhB89BR;AgBx9BI;EAEI,6BAAA;ENhIJ,YAAA,EAAA,aAAA;EMkII,+BAAA;AhBy9BR;AgBn9BI;EAEI,yFAAA;AhBo9BR;AgB58BI;EAEI,0CAAA;EAKA,gGAAA;AhBy8BR;AgB37BE;;EAGI,qBAAA;EN1KF,YAAA,EAAA,aAAA;EM4KE,sBAAA;EACA,WAAA;EACA,YAAA;AhB47BN;AgBv7BI;EAEI,sCAAA;EACA,uCAAA;AhBw7BR;AkB/gCI;ETxFE,yBAAA;ECZF,eAAA;EDwBA,4EAAA;ATgmCJ;AkB3oBE;ETjeI,aAAA;ECZF,eAAA;EDwBA,8CAAA;ATqmCJ;AkBhpBE;EA9QI,yBAAA;ETnNA,aAAA;ECZF,eAAA;EDwBA,8CAAA;AT2mCJ;AkB14BM;EAEI,gCAAA;AlB24BV;AkBt4BQ;EAEI,yBAhRO;ET0Bb,aAAA;ECZF,eAAA;EDwBA,8CAAA;ATonCJ;AkB/3BI;ETrPA,8DAAA;ATunCJ;;AIx1BE;EAEI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EAEA,+BAAA;AJy1BN;;AmB/sCA;EACI,sBAAA;AnBktCJ;;AmB/sCA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,kCAAA;EACA,mCAAA;EACA,sBAAA;AnBktCJ;;AmB/sCA;EACI,cAAA;AnBktCJ;;AmB/sCA;EACI,cAAA;AnBktCJ;;AmB/sCA;EACI,gBAAA;AnBktCJ;;AmB/sCA;EACI,YAAA;AnBktCJ;;AmB/sCA;EACI,WAAA;EACA,aAAA;AnBktCJ;;AmB/sCA;EACI,yBAAA;EACA,iBAAA;AnBktCJ;;AmB/sCA;EACI,wBAAA;EACA,gBAAA;AnBktCJ;;AoBnvCI;EADJ;IAEQ,4BAAA;IACA,+BAAA;IACA,8BAAA;IACA,iCAAA;IACA,4BAAA;IACA,+BAAA;IACA,+BAAA;IACA,kCAAA;EpBuvCN;AACF;AoBrvCI;EAZJ;IAaQ,4BAAA;IACA,+BAAA;IACA,8BAAA;IACA,iCAAA;IAEA,mCAAA;IACA,4BAAA;IACA,kFAAA;IACI,gGAAA;IACA,gGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IAEJ,+BAAA;IACA,+BAAA;IACA,kCAAA;IAIA,6GAAA;EpBmvCN;AACF;;AoB9uCA;EACI;IACI,uCAAA;EpBivCN;EoB/uCE;IACI,uCAAA;EpBivCN;EoB/uCE;IACI,uCAAA;EpBivCN;EoB/uCE;IACI,uCAAA;EpBivCN;EoB/uCE;IACI,uCAAA;EpBivCN;EoB/uCE;IACI,uCAAA;EpBivCN;EoB/uCE;IACI,uCAAA;EpBivCN;EoB3uCM;IACI,uCAAA;EpB6uCV;EoB3uCU;IACI,uCAAA;EpB6uCd;EoB3uCc;IACI,kCAAA;EpB6uClB;EoB3uCc;IACI,kCAAA;EpB6uClB;EoBxuCc;IACI,kCAAA;EpB0uClB;EoBxuCkB;IACI,kCAAA;EpB0uCtB;EoBvuCc;IACI,+BAAA;EpByuClB;EoBvuCkB;IACI,+BAAA;EpByuCtB;EoBjuCE;IACI,0CAAA;EpBmuCN;EoBhuCE;IACI,kCAAA;EpBkuCN;EoB7tCM;IACI,kCAAA;EpB+tCV;EoB3tCU;IACI,+BAAA;EpB6tCd;AACF;AoBttCQ;EADJ;IAEQ,kCAAA;EpBytCV;AACF;AoBrtCQ;EADJ;IAEQ,kCAAA;EpBwtCV;AACF;AoBpzCA;EAiGI;IACI,6CAAA;EpBstCN;AACF;AoBzzCA;EAqGI;IACI,kCAAA;EpButCN;AACF;AoB9zCA;EAyGI;IACI,SAAA;EpBwtCN;AACF;AoBn0CA;EA8GI;IACI,oCAAA;EpBwtCN;AACF;AoBx0CA;EAqHI;;;IAGI,yCAAA;IACA,uCAAA;EpBstCN;AACF;AoBh1CA;EA4HI;;;IAGI,yCAAA;IACA,uCAAA;EpButCN;AACF;AoBx1CA;EAmII;IACI,WAAA;EpBwtCN;AACF;AoB71CA;EAuII;IACI,kCAAA;EpBytCN;AACF;AoBl2CA;EA2II;IACI,+BAAA;EpB0tCN;AACF;AoBv2CA;EA+II;IACI,kCAAA;EpB2tCN;AACF;AoB52CA;EAsJI;;;IAGI,yCAAA;IACA,uCAAA;EpBytCN;AACF;AoBp3CA;EA6JI;;;IAGI,yCAAA;IACA,uCAAA;EpB0tCN;AACF;AoB53CA;EAoKI;IACI,kCAAA;EpB2tCN;AACF;AoBj4CA;EAwKI;IACI,+BAAA;EpB4tCN;AACF;AoBt4CA;EA4KI;IACI,kCAAA;EpB6tCN;AACF;AoB34CA;EAgLI;IACI,iCAAA;EpB8tCN;AACF;AoBh5CA;EAoLI;IACI,8BAAA;EpB+tCN;AACF;AWlsCE;EAgEE,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,kEAAA;ATm4CJ;;AWpsCI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,2BAAA;ECZF,eAAA;EDwBA,2EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AT65CJ;;AW9tCI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,+BAAA;ECZF,eAAA;EDwBA,+EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;ATu7CJ;;AWxvCI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,kEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,sBAAA;ECZF,eAAA;EDwBA,sEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;ATi9CJ;;AWlxCI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,gEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,8EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AT2+CJ;;AW5yCI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,sBAAA;ECZF,eAAA;EDwBA,sEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;ATqgDJ;;AWt0CI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,wEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AT+hDJ;;AWh2CI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,0BAAA;ECZF,eAAA;EDwBA,0EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;ATyjDJ;;AW13CI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,kEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,8EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;ATmlDJ;;AWp5CI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,2GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,sDAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,yDAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,mEAAA;AT6mDJ;;AW96CI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,2GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,yDAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,0EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,mEAAA;ATuoDJ;;AWx8CI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,6GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,+DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,4EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,uEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,qEAAA;ATiqDJ;;AWl+CI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,4GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,2EAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,mEAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,sEAAA;AT2rDJ;;AW5/CI;EA2DA,kCAAA;EACA,mCAAA;EFvQE,+BAAA;ECZF,eAAA;EDwBA,8GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,6EAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,wEAAA;ATqtDJ;;AqB3xDA;EACI,6CAAA;ArB8xDJ;;AqBxxDY;EACI,sBAAA;ArB2xDhB;;AqBrxDA;EACI,WAAA;EACA,YAAA;EACA,YAAA;ArBwxDJ;;AqBrxDA;EACI,aAAA;ArBwxDJ;;AqBrxDA;EACI,aAAA;EACA,mBAAA;ArBwxDJ;;AqBrxDA;EACI,aAAA;EACA,WAAA;ArBwxDJ;AqBtxDI;EACI,eAAA;ArBwxDR","sourcesContent":["// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use 'sass:list';\n@use 'sass:map';\n@use './variables';\n@use './mixins';\n\n:root {\n  @each $size in map.keys(variables.$columns) {\n    --mdc-layout-grid-margin-#{$size}: #{map.get(\n        variables.$default-margin,\n        $size\n      )};\n    --mdc-layout-grid-gutter-#{$size}: #{map.get(\n        variables.$default-gutter,\n        $size\n      )};\n    --mdc-layout-grid-column-width-#{$size}: #{map.get(\n        variables.$column-width,\n        $size\n      )};\n  }\n}\n\n// postcss-bem-linter: define layout-grid\n.mdc-layout-grid {\n  @each $size in map.keys(variables.$columns) {\n    @include mixins.media-query_($size) {\n      $margin: map.get(variables.$default-margin, $size);\n\n      @include mixins.layout-grid($size, $margin, variables.$max-width);\n    }\n  }\n}\n\n.mdc-layout-grid__inner {\n  @each $size in map.keys(variables.$columns) {\n    @include mixins.media-query_($size) {\n      $margin: map.get(variables.$default-margin, $size);\n      $gutter: map.get(variables.$default-gutter, $size);\n\n      @include mixins.inner($size, $margin, $gutter);\n    }\n  }\n}\n\n.mdc-layout-grid__cell {\n  // select the upper breakpoint\n  $upper-breakpoint: list.nth(map.keys(variables.$columns), 1);\n\n  @each $size in map.keys(variables.$columns) {\n    @include mixins.media-query_($size) {\n      $gutter: map.get(variables.$default-gutter, $size);\n\n      @include mixins.cell($size, variables.$default-column-span, $gutter);\n\n      @for $span from 1 through map.get(variables.$columns, $upper-breakpoint) {\n        // Span classes.\n        // stylelint-disable max-nesting-depth\n        @at-root .mdc-layout-grid__cell--span-#{$span},\n          .mdc-layout-grid__cell--span-#{$span}-#{$size} {\n          @include mixins.cell-span_($size, $span, $gutter);\n        }\n        // stylelint-enable max-nesting-depth\n      }\n    }\n  }\n\n  // Order override classes.\n  @for $i from 1 through map.get(variables.$columns, $upper-breakpoint) {\n    &--order-#{$i} {\n      @include mixins.cell-order($i);\n    }\n  }\n\n  // Alignment classes.\n  &--align-top {\n    @include mixins.cell-align(top);\n  }\n\n  &--align-middle {\n    @include mixins.cell-align(middle);\n  }\n\n  &--align-bottom {\n    @include mixins.cell-align(bottom);\n  }\n}\n\n.mdc-layout-grid--fixed-column-width {\n  @each $size in map.keys(variables.$columns) {\n    @include mixins.media-query_($size) {\n      $margin: map.get(variables.$default-margin, $size);\n      $gutter: map.get(variables.$default-gutter, $size);\n      $column-width: map.get(variables.$column-width, $size);\n\n      @include mixins.fixed-column-width(\n        $size,\n        $margin,\n        $gutter,\n        $column-width\n      );\n    }\n  }\n}\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto;\n}\n// postcss-bem-linter: end\n",":root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px;\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px);\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px);\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px);\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 24px;\n      grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__cell {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n    width: calc(8.3333333333% - 24px);\n    width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n    width: calc(16.6666666667% - 24px);\n    width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n    width: calc(25% - 24px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n    width: calc(41.6666666667% - 24px);\n    width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n    width: calc(50% - 24px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n    width: calc(58.3333333333% - 24px);\n    width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n    width: calc(66.6666666667% - 24px);\n    width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n    width: calc(75% - 24px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n      width: auto;\n      grid-column-end: span 9;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n    width: calc(83.3333333333% - 24px);\n    width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n      width: auto;\n      grid-column-end: span 10;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n    width: calc(91.6666666667% - 24px);\n    width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n      width: auto;\n      grid-column-end: span 11;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n    width: calc(100% - 24px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n      width: auto;\n      grid-column-end: span 12;\n    }\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid__cell {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n    width: calc(12.5% - 16px);\n    width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n    width: calc(37.5% - 16px);\n    width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n    width: calc(62.5% - 16px);\n    width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n    width: calc(87.5% - 16px);\n    width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid__cell {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n}\n.mdc-layout-grid__cell--order-1 {\n  order: 1;\n}\n.mdc-layout-grid__cell--order-2 {\n  order: 2;\n}\n.mdc-layout-grid__cell--order-3 {\n  order: 3;\n}\n.mdc-layout-grid__cell--order-4 {\n  order: 4;\n}\n.mdc-layout-grid__cell--order-5 {\n  order: 5;\n}\n.mdc-layout-grid__cell--order-6 {\n  order: 6;\n}\n.mdc-layout-grid__cell--order-7 {\n  order: 7;\n}\n.mdc-layout-grid__cell--order-8 {\n  order: 8;\n}\n.mdc-layout-grid__cell--order-9 {\n  order: 9;\n}\n.mdc-layout-grid__cell--order-10 {\n  order: 10;\n}\n.mdc-layout-grid__cell--order-11 {\n  order: 11;\n}\n.mdc-layout-grid__cell--order-12 {\n  order: 12;\n}\n.mdc-layout-grid__cell--align-top {\n  align-self: flex-start;\n}\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-top {\n    align-self: start;\n  }\n}\n.mdc-layout-grid__cell--align-middle {\n  align-self: center;\n}\n.mdc-layout-grid__cell--align-bottom {\n  align-self: flex-end;\n}\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-bottom {\n    align-self: end;\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 1176px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-desktop, 72px) * 12 +\n      var(--mdc-layout-grid-gutter-desktop, 24px) * 11 +\n      var(--mdc-layout-grid-margin-desktop, 24px) * 2\n  );\n  }\n}\n@media (min-width: 600px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 720px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-tablet, 72px) * 8 +\n      var(--mdc-layout-grid-gutter-tablet, 16px) * 7 +\n      var(--mdc-layout-grid-margin-tablet, 16px) * 2\n  );\n  }\n}\n@media (max-width: 599px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 368px;\n    width: calc(\n    var(--mdc-layout-grid-column-width-phone, 72px) * 4 +\n      var(--mdc-layout-grid-gutter-phone, 16px) * 3 +\n      var(--mdc-layout-grid-margin-phone, 16px) * 2\n  );\n  }\n}\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-bar {\n  width: 100%;\n}\n\n.mdc-tab {\n  height: 48px;\n}\n\n.mdc-tab--stacked {\n  height: 72px;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-scroller {\n  overflow-y: hidden;\n}\n.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content {\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-scroller__test {\n  position: absolute;\n  top: -9999px;\n  width: 100px;\n  height: 100px;\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: touch;\n  display: flex;\n  overflow-x: hidden;\n}\n\n.mdc-tab-scroller__scroll-area::-webkit-scrollbar,\n.mdc-tab-scroller__test::-webkit-scrollbar {\n  display: none;\n}\n\n.mdc-tab-scroller__scroll-area--scroll {\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-content {\n  position: relative;\n  display: flex;\n  flex: 1 0 auto;\n  transform: none;\n  will-change: transform;\n}\n\n.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {\n  justify-content: flex-start;\n}\n\n.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {\n  justify-content: flex-end;\n}\n\n.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {\n  justify-content: center;\n}\n\n.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: auto;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #6200ee;\n  /* @alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  color: #018786;\n  /* @alternate */\n  color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-top-width: 2px;\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  height: 34px;\n  font-size: 34px;\n}\n\n.mdc-tab-indicator {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.mdc-tab-indicator__content {\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator__content--icon {\n  align-self: center;\n  margin: 0 auto;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  transition: none;\n}\n\n.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  transition: 150ms opacity linear;\n}\n\n.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  transition-delay: 100ms;\n}\n\n.mdc-tab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n  position: relative;\n}\n.mdc-tab .mdc-tab__text-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-tab .mdc-tab__icon {\n  color: rgba(0, 0, 0, 0.54);\n  fill: currentColor;\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring, .mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring {\n  pointer-events: none;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  box-sizing: content-box;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(\n      100% + -12px\n    );\n  width: calc(\n      100% + -8px\n    );\n  margin-top: -2px;\n  z-index: 2;\n}\n@media screen and (forced-colors: active) {\n  .mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring, .mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring {\n    border-color: CanvasText;\n  }\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after, .mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after {\n  content: \"\";\n  border: 2px solid transparent;\n  border-radius: 10px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(100% + 4px);\n  width: calc(100% + 4px);\n}\n@media screen and (forced-colors: active) {\n  .mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after, .mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring {\n  pointer-events: none;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  box-sizing: content-box;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(\n      100% + -8px\n    );\n  width: calc(\n      100% + -8px\n    );\n  z-index: 2;\n}\n@media screen and (forced-colors: active) {\n  .mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring {\n    border-color: CanvasText;\n  }\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after {\n  content: \"\";\n  border: 2px solid transparent;\n  border-radius: 10px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(100% + 4px);\n  width: calc(100% + 4px);\n}\n@media screen and (forced-colors: active) {\n  .mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-tab__content {\n  position: relative;\n}\n\n.mdc-tab__icon {\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n}\n\n.mdc-tab--active .mdc-tab__text-label {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-tab--active .mdc-tab__icon {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n  fill: currentColor;\n}\n\n.mdc-tab {\n  background: none;\n}\n\n.mdc-tab {\n  min-width: 90px;\n  padding-right: 24px;\n  padding-left: 24px;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  outline: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-appearance: none;\n  z-index: 1;\n}\n.mdc-tab::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n.mdc-tab--min-width {\n  flex: 0 1 auto;\n}\n\n.mdc-tab__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n  pointer-events: none;\n}\n\n.mdc-tab__text-label {\n  transition: 150ms color linear;\n  display: inline-block;\n  line-height: 1;\n  z-index: 2;\n}\n\n.mdc-tab__icon {\n  transition: 150ms color linear;\n  z-index: 2;\n}\n\n.mdc-tab--stacked .mdc-tab__content {\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.mdc-tab--stacked .mdc-tab__text-label {\n  padding-top: 6px;\n  padding-bottom: 4px;\n}\n\n.mdc-tab--active .mdc-tab__text-label,\n.mdc-tab--active .mdc-tab__icon {\n  transition-delay: 100ms;\n}\n\n.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label, .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 8px;\n  /*rtl:end:ignore*/\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-tab {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.mdc-tab .mdc-tab__ripple::before,\n.mdc-tab .mdc-tab__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-tab .mdc-tab__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-tab .mdc-tab__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-tab .mdc-tab__ripple::before,\n.mdc-tab .mdc-tab__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-tab .mdc-tab__ripple::before, .mdc-tab .mdc-tab__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-tab:hover .mdc-tab__ripple::before, .mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before, .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-tab.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n\n.mdc-tab__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --mdc-theme-primary: #006874;\n    --mdc-theme-on-primary: #ffffff;\n    --mdc-theme-secondary: #5c6300;\n    --mdc-theme-on-secondary: #ffffff;\n    --mdc-theme-surface: #fafdfd;\n    --mdc-theme-on-surface: #191c1d;\n    --mdc-theme-background: #fafdfd;\n    --mdc-theme-on-background: #191c1d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --mdc-theme-primary: #4fd8eb;\n    --mdc-theme-on-primary: #00363d;\n    --mdc-theme-secondary: #c2d016;\n    --mdc-theme-on-secondary: #2f3300;\n    --mdc-theme-surface-base: 195, 7.4%;\n    --mdc-theme-surface-l: 15.6%;\n    --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\n    --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\n    --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\n    --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\n    --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\n    --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\n    --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\n    --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n    --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\n    --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\n    --mdc-theme-on-surface: #e1e3e3;\n    --mdc-theme-background: #191c1d;\n    --mdc-theme-on-background: #e1e3e3;\n    --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdc-elevation--z1 {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-elevation--z2 {\n    background: var(--mdc-theme-surface-z2);\n  }\n  .mdc-elevation--z3 {\n    background: var(--mdc-theme-surface-z3);\n  }\n  .mdc-elevation--z4 {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-elevation--z5 {\n    background: var(--mdc-theme-surface-z5);\n  }\n  .mdc-elevation--z6 {\n    background: var(--mdc-theme-surface-z6);\n  }\n  .mdc-elevation--z7 {\n    background: var(--mdc-theme-surface-z7);\n  }\n  .mdc-drawer.mdc-drawer--modal {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__title {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__subtitle {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-surface-z9);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar {\n    background-color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar__title {\n    color: var(--mdc-theme-on-primary);\n  }\n  .mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-tab.mdc-tab--active .mdc-tab__icon, .mdc-tab.mdc-tab--active .mdc-tab__text-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__header-cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: var(--mdc-theme-surface-z3);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__title {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog__actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined .mdc-notched-outline {\n    z-index: -1;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-primary);\n  }\n}\n.mdc-typography {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);\n}\n\n.mdc-typography--headline1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 6rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline1-font-size, 6rem);\n  line-height: 6rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline1-line-height, 6rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline1-font-weight, 300);\n  letter-spacing: -0.015625em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline1-text-transform, inherit);\n}\n\n.mdc-typography--headline2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline2-font-size, 3.75rem);\n  line-height: 3.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline2-line-height, 3.75rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline2-font-weight, 300);\n  letter-spacing: -0.0083333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline2-text-transform, inherit);\n}\n\n.mdc-typography--headline3 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline3-font-size, 3rem);\n  line-height: 3.125rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline3-line-height, 3.125rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline3-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline3-text-transform, inherit);\n}\n\n.mdc-typography--headline4 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 2.125rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline4-font-size, 2.125rem);\n  line-height: 2.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline4-line-height, 2.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline4-font-weight, 400);\n  letter-spacing: 0.0073529412em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline4-text-transform, inherit);\n}\n\n.mdc-typography--headline5 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.5rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline5-font-size, 1.5rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline5-line-height, 2rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline5-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline5-text-transform, inherit);\n}\n\n.mdc-typography--headline6 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n}\n\n.mdc-typography--subtitle1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n}\n\n.mdc-typography--subtitle2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n}\n\n.mdc-typography--body1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body1-font-size, 1rem);\n  line-height: 1.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body1-line-height, 1.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body1-font-weight, 400);\n  letter-spacing: 0.03125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body1-text-transform, inherit);\n}\n\n.mdc-typography--body2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-typography--caption {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-typography--button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n}\n\n.mdc-typography--overline {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n}\n\nhtml {\n  background-color: var(--mdc-theme-background);\n}\n\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  vertical-align: middle;\n}\n\n.mdc-icon-button.actionsButton {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n\n.main-content {\n  padding: 1rem;\n}\n\n.content-section {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.demo-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.demo-group.wrap {\n  flex-wrap: wrap;\n}","// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:math';\n@use './variables';\n\n// returns the lower grid boundary or null if the smallest grid is selected\n@function breakpoint-min($size) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n  $min: map.get(variables.$breakpoints, $size);\n\n  @return if($min > 0, $min, null);\n}\n\n// returns the upper grid boundary or null if the largest grid is selected\n@function breakpoint-max($size) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n  $names: map.keys(variables.$columns);\n  $n: list.index($names, $size);\n  $prev: if($n > 1, list.nth($names, $n - 1), null);\n\n  @return if($prev, (breakpoint-min($prev) - 1px), null);\n}\n\n// Private mixins, meant for internal use.\n@mixin media-query_($size) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  $min: breakpoint-min($size);\n  $max: breakpoint-max($size);\n\n  @if $min == null and $max != null {\n    // Phone\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else if $min != null and $max != null {\n    // Tablet\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $min != null and $max == null {\n    // Desktop\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    // Fallback - no breakpoints defined\n    @content;\n  }\n}\n\n@mixin cell-span_($size, $span, $gutter) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  $percent: math.percentage(\n    math.div($span, map.get(variables.$columns, $size))\n  );\n\n  @if $percent > 100% {\n    $percent: 100%;\n  }\n\n  width: calc(#{$percent} - #{$gutter});\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  width: calc(#{$percent} - var(--mdc-layout-grid-gutter-#{$size}, #{$gutter}));\n\n  @supports (display: grid) {\n    width: auto;\n    grid-column-end: span math.min($span, map.get(variables.$columns, $size));\n  }\n}\n\n// Public mixins, meant for developer usage.\n@mixin layout-grid($size, $margin, $max-width: null) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: $margin;\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  padding: var(--mdc-layout-grid-margin-#{$size}, #{$margin});\n\n  @if $max-width {\n    max-width: $max-width;\n  }\n}\n\n@mixin inner($size, $margin, $gutter) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  margin: math.div(-$gutter, 2);\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  margin: calc(var(--mdc-layout-grid-gutter-#{$size}, #{$gutter}) / 2 * -1);\n\n  @supports (display: grid) {\n    display: grid;\n    margin: 0;\n    grid-gap: $gutter;\n    // stylelint-disable-next-line declaration-block-no-duplicate-properties\n    grid-gap: var(--mdc-layout-grid-gutter-#{$size}, $gutter);\n    grid-template-columns: repeat(\n      map.get(variables.$columns, $size),\n      minmax(0, 1fr)\n    );\n  }\n}\n\n@mixin cell($size, $default-span, $gutter) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  @include cell-span_($size, $default-span, $gutter);\n\n  box-sizing: border-box;\n  margin: math.div($gutter, 2);\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  margin: calc(var(--mdc-layout-grid-gutter-#{$size}, #{$gutter}) / 2);\n\n  @supports (display: grid) {\n    margin: 0;\n  }\n}\n\n@mixin cell-order($order) {\n  order: $order;\n}\n\n@mixin cell-align($position) {\n  @if $position == 'top' {\n    align-self: flex-start;\n\n    @supports (display: grid) {\n      align-self: start;\n    }\n  }\n\n  @if $position == 'middle' {\n    align-self: center;\n  }\n\n  @if $position == 'bottom' {\n    align-self: flex-end;\n\n    @supports (display: grid) {\n      align-self: end;\n    }\n  }\n\n  @if $position == 'stretch' {\n    align-self: stretch;\n  }\n}\n\n@mixin fixed-column-width($size, $margin, $gutter, $column-width) {\n  @if not map.has-key(variables.$columns, $size) {\n    @error \"Invalid style specified! Choose one of #{map.keys(variables.$columns)}\";\n  }\n\n  $columnCount: map.get(variables.$columns, $size);\n  $gutter-number: $columnCount - 1;\n  $margin-number: 2;\n\n  width: $column-width * $columnCount + $gutter * $gutter-number + $margin *\n    $margin-number;\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  width: calc(\n    var(--mdc-layout-grid-column-width-#{$size}, #{$column-width}) * #{$columnCount} +\n      var(--mdc-layout-grid-gutter-#{$size}, #{$gutter}) * #{$gutter-number} +\n      var(--mdc-layout-grid-margin-#{$size}, #{$margin}) * #{$margin-number}\n  );\n}\n","/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n@use './mixins';\n@include mixins.core-styles;\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/animation/variables' as animation-variables;\n@use '@material/density/functions' as density-functions;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/tab-scroller/mixins' as tab-scroller-mixins;\n@use '@material/tab/mixins' as tab-mixins;\n@use './variables';\n\n@mixin static-styles($query: feature-targeting.all()) {\n  .mdc-tab-bar {\n    @include width(100%, $query);\n  }\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  // postcss-bem-linter: define tab-bar\n  @include static-styles($query: $query);\n  @include density(variables.$density-scale, $query: $query);\n  @include stacked-density(variables.$stacked-density-scale, $query: $query);\n  // postcss-bem-linter: end\n}\n\n@mixin width($width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    width: $width;\n  }\n}\n\n///\n/// Sets density scale to default tab bar variant. Use `mdc-tab-bar-stacked-density()` mixin for stacked tab bar\n/// variant.\n///\n/// @param {Number} $density-scale Density scale value. Supported density scales `-4`, `-3`, `-2`, `-1` and `0`.\n///\n@mixin density($density-scale, $query: feature-targeting.all()) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  .mdc-tab {\n    @include tab-mixins.height($height, $query: $query);\n  }\n}\n\n///\n/// Sets density scale to stacked tab bar variant.\n///\n/// @param {Number} $density-scale Density scale value. Supported density scales `-4`, `-3`, `-2`, `-1` and `0`.\n///\n@mixin stacked-density($density-scale, $query: feature-targeting.all()) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$stacked-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  .mdc-tab--stacked {\n    @include tab-mixins.height($height, $query: $query);\n  }\n}\n\n///\n/// Sets the CSS transition for the tab scrolling animation. This mixin is a proxy to `mdc-tab-scroller-transition`\n/// mixin.\n///\n/// @param {Number | String} $duration-ms - Duration (in ms) of the animation.\n/// @param {String} $timing-function - Optionally overrides the default animation timing function.\n///\n@mixin tab-scroller-transition(\n  $duration-ms,\n  $timing-function: animation-variables.$standard-curve-timing-function,\n  $query: feature-targeting.all()\n) {\n  .mdc-tab-scroller {\n    @include tab-scroller-mixins.transition(\n      $duration-ms,\n      $timing-function: $timing-function,\n      $query: $query\n    );\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/focus-ring/focus-ring';\n@use '@material/ripple/ripple';\n@use '@material/ripple/ripple-theme';\n@use '@material/theme/theme';\n@use '@material/typography/typography';\n@use '@material/rtl/rtl';\n@use '@material/tab-indicator/mixins' as tab-indicator-mixins;\n@use './variables';\n\n// Public mixins\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include without-ripple($query);\n  @include ripple($query);\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  .mdc-tab {\n    @include min-width(variables.$min-width, $query);\n    @include horizontal-padding(variables.$horizontal-padding, $query);\n\n    @include feature-targeting.targets($feat-structure) {\n      display: flex;\n      flex: 1 0 auto;\n      justify-content: center;\n      box-sizing: border-box;\n      // Explicitly setting margin to 0 is to override safari default margin for button elements.\n      margin: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      border: none;\n      outline: none;\n      text-align: center;\n      white-space: nowrap;\n      cursor: pointer;\n      -webkit-appearance: none;\n      z-index: 1;\n\n      // Firefox still draws a dotted border around focused buttons unless specifically overridden.\n      &::-moz-focus-inner {\n        padding: 0;\n        border: 0;\n      }\n    }\n  }\n\n  .mdc-tab--min-width {\n    @include feature-targeting.targets($feat-structure) {\n      flex: 0 1 auto;\n    }\n  }\n\n  .mdc-tab__content {\n    @include feature-targeting.targets($feat-structure) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: inherit;\n      pointer-events: none;\n    }\n  }\n\n  .mdc-tab__text-label {\n    @include feature-targeting.targets($feat-animation) {\n      transition: 150ms color linear;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      display: inline-block;\n      // Setting line-height here overrides the line-height from the typography\n      // mixin above. The line-height needs to be overridden so that the spacing\n      // between the text label and the icon as well as the text label and the\n      // bottom of the tab remain the same.\n      line-height: 1;\n      z-index: 2;\n    }\n  }\n\n  .mdc-tab__icon {\n    @include feature-targeting.targets($feat-animation) {\n      transition: 150ms color linear;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      z-index: 2;\n    }\n  }\n\n  .mdc-tab--stacked {\n    @include stacked_($query);\n  }\n\n  .mdc-tab--active {\n    .mdc-tab__text-label,\n    .mdc-tab__icon {\n      @include feature-targeting.targets($feat-animation) {\n        transition-delay: 100ms;\n      }\n    }\n  }\n\n  .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-box(padding, left, 8px);\n    }\n  }\n}\n\n// This API is intended for use by frameworks that may want to separate the ripple-related styles\n// from the other tah styles. It is recommended that most users use `mdc-tab-core-styles` instead.\n@mixin without-ripple($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // postcss-bem-linter: define tab\n\n  .mdc-tab {\n    @include base_($query);\n  }\n\n  .mdc-tab__content {\n    @include content_($query);\n  }\n\n  .mdc-tab__icon {\n    @include feature-targeting.targets($feat-structure) {\n      width: variables.$icon-size;\n      height: variables.$icon-size;\n      font-size: variables.$icon-size;\n    }\n  }\n\n  .mdc-tab--active {\n    @include active_($query);\n  }\n\n  .mdc-tab {\n    @include feature-targeting.targets($feat-structure) {\n      background: none;\n    }\n  }\n\n  @include static-styles($query: $query);\n  // postcss-bem-linter: end\n}\n\n// This API is intended for use by frameworks that may want to separate the ripple-related styles\n// from the other tah styles. It is recommended that most users use `mdc-tab-core-styles` instead.\n@mixin ripple($query: feature-targeting.all()) {\n  @include ripple.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  @include ripple_($query);\n}\n\n@mixin horizontal-padding($padding, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    padding-right: $padding;\n    padding-left: $padding;\n  }\n}\n\n@mixin text-label-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-tab__text-label {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin icon-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-tab__icon {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n\n      fill: currentColor;\n    }\n  }\n}\n\n@mixin states-color($color, $query: feature-targeting.all()) {\n  @include ripple-theme.states(\n    $color,\n    $query: $query,\n    $ripple-target: variables.$ripple-target\n  );\n}\n\n@mixin ink-color($color, $query: feature-targeting.all()) {\n  @include icon-color($color, $query);\n  @include states-color($color, $query);\n  @include text-label-color($color, $query);\n}\n\n@mixin active-text-label-color($color, $query: feature-targeting.all()) {\n  &.mdc-tab--active {\n    @include text-label-color($color, $query);\n  }\n}\n\n@mixin active-icon-color($color, $query: feature-targeting.all()) {\n  &.mdc-tab--active {\n    @include icon-color($color, $query);\n  }\n}\n\n@mixin active-states-color($color, $query: feature-targeting.all()) {\n  &.mdc-tab--active {\n    @include states-color($color, $query);\n  }\n}\n\n@mixin parent-positioning($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: relative;\n  }\n}\n\n@mixin fixed-width($width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    flex: 0 1 $width;\n  }\n}\n\n///\n/// Sets tab height\n///\n/// @param {Number} $height Height value in `px`.\n///\n@mixin height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    height: $height;\n  }\n}\n\n///\n/// Sets tab text transform\n///\n/// @param {String} $transform The text-transform property to apply.\n///\n@mixin text-transform($transform, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    text-transform: $transform;\n  }\n}\n\n///\n/// Sets tab min-width.\n///\n/// @param {Number} $min-width Minimum width value in `px`.\n///\n@mixin min-width($min-width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    min-width: $min-width;\n  }\n}\n\n//\n// Private\n//\n\n@mixin base_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include typography.typography(button, $query);\n  @include text-label-color(variables.$text-label-color-default, $query);\n  @include icon-color(variables.$icon-color-default, $query);\n  @include tab-indicator-mixins.surface($query);\n\n  @include ripple-theme.focus() {\n    &.mdc-tab--active .mdc-tab__focus-ring {\n      @include focus-ring.focus-ring(\n        $query: $query,\n        $ring-radius: 10px,\n        $container-outer-padding-vertical: -6px,\n        $container-outer-padding-horizontal: -4px\n      );\n\n      @include feature-targeting.targets($feat-structure) {\n        margin-top: -2px;\n        // Set z-index to +1 above the .mdc-tab\n        z-index: 2;\n      }\n    }\n\n    .mdc-tab__focus-ring {\n      @include focus-ring.focus-ring(\n        $query: $query,\n        $ring-radius: 10px,\n        $container-outer-padding-vertical: -4px,\n        $container-outer-padding-horizontal: -4px\n      );\n\n      @include feature-targeting.targets($feat-structure) {\n        // Set z-index to +1 above the .mdc-tab\n        z-index: 2;\n      }\n    }\n  }\n}\n\n@mixin ripple_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-tab {\n    @include ripple.surface(\n      $query,\n      $ripple-target: variables.$ripple-target,\n      $include-will-change: false\n    );\n    @include ripple.radius-bounded(\n      $query: $query,\n      $ripple-target: variables.$ripple-target\n    );\n    @include ripple-theme.states(\n      $color: primary,\n      $query: $query,\n      $ripple-target: variables.$ripple-target\n    );\n  }\n\n  #{variables.$ripple-target} {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      // TODO(b/151931961): Remove the following line once resolved\n      will-change: transform, opacity;\n    }\n  }\n}\n\n@mixin content_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include tab-indicator-mixins.surface($query);\n}\n\n@mixin stacked_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    .mdc-tab__content {\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .mdc-tab__text-label {\n      padding-top: 6px;\n      padding-bottom: 4px;\n    }\n  }\n}\n\n@mixin active_($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  @include text-label-color(variables.$text-label-color-active, $query);\n  @include icon-color(variables.$icon-color-active, $query);\n}\n","/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n@use './mixins';\n@include mixins.core-styles;\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/animation/variables' as animation-variables;\n@use '@material/tab/mixins' as tab-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use './variables';\n\n///\n/// Sets the CSS transition for the tab scrolling animation.\n///\n/// @param {Number | String} $duration-ms - Duration (in ms) of the animation.\n/// @param {String} $timing-function - Optionally overrides the default animation timing function.\n///\n@mixin transition(\n  $duration-ms,\n  $timing-function: animation-variables.$standard-curve-timing-function,\n  $query: feature-targeting.all()\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  &.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content {\n    @include feature-targeting.targets($feat-animation) {\n      transition: $duration-ms transform $timing-function;\n    }\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  @include core-styles($query: $query);\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // postcss-bem-linter: define tab-scroller\n  .mdc-tab-scroller {\n    @include transition(\n      $duration-ms: variables.$transition-duration,\n      $query: $query\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      overflow-y: hidden;\n    }\n  }\n\n  // Selector for test element used to feature-detect horizontal scrollbar height\n  .mdc-tab-scroller__test {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      top: -9999px;\n      width: 100px;\n      height: 100px;\n      overflow-x: scroll;\n    }\n  }\n\n  .mdc-tab-scroller__scroll-area {\n    @include feature-targeting.targets($feat-structure) {\n      -webkit-overflow-scrolling: touch;\n      display: flex;\n      overflow-x: hidden;\n    }\n  }\n\n  .mdc-tab-scroller__scroll-area,\n  .mdc-tab-scroller__test {\n    @include feature-targeting.targets($feat-structure) {\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n  }\n\n  // This modifier class will be added in JS after computing the OS scrollbar size in order to hide the scrollbar.\n  .mdc-tab-scroller__scroll-area--scroll {\n    @include feature-targeting.targets($feat-structure) {\n      overflow-x: scroll;\n    }\n  }\n\n  .mdc-tab-scroller__scroll-content {\n    @include scroll-content_($query);\n  }\n\n  .mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {\n    @include feature-targeting.targets($feat-structure) {\n      justify-content: flex-start;\n    }\n  }\n\n  .mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {\n    @include feature-targeting.targets($feat-structure) {\n      justify-content: flex-end;\n    }\n  }\n\n  .mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {\n    @include feature-targeting.targets($feat-structure) {\n      justify-content: center;\n    }\n  }\n\n  .mdc-tab-scroller--animating {\n    .mdc-tab-scroller__scroll-area {\n      @include feature-targeting.targets($feat-animation) {\n        -webkit-overflow-scrolling: auto;\n      }\n    }\n  }\n\n  // postcss-bem-linter: end\n}\n\n//\n// Private\n//\n\n@mixin scroll-content_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  @include tab-mixins.parent-positioning($query);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: flex;\n    flex: 1 0 auto;\n    transform: none;\n  }\n\n  @include feature-targeting.targets($feat-animation) {\n    will-change: transform;\n  }\n}\n","/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n@use './mixins';\n@include mixins.core-styles;\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/animation/variables';\n@use '@material/theme/theme';\n@use '@material/feature-targeting/feature-targeting';\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  .mdc-tab-indicator {\n    @include feature-targeting.targets($feat-structure) {\n      display: flex;\n      position: absolute;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n      z-index: 1;\n    }\n  }\n\n  .mdc-tab-indicator__content {\n    @include feature-targeting.targets($feat-structure) {\n      transform-origin: left;\n      opacity: 0;\n    }\n  }\n\n  .mdc-tab-indicator__content--underline {\n    @include feature-targeting.targets($feat-structure) {\n      align-self: flex-end;\n      box-sizing: border-box;\n      width: 100%;\n      border-top-style: solid;\n    }\n  }\n\n  .mdc-tab-indicator__content--icon {\n    @include feature-targeting.targets($feat-structure) {\n      align-self: center;\n      margin: 0 auto;\n    }\n  }\n\n  .mdc-tab-indicator--active .mdc-tab-indicator__content {\n    @include feature-targeting.targets($feat-structure) {\n      opacity: 1;\n    }\n  }\n\n  // Slide by default\n  .mdc-tab-indicator .mdc-tab-indicator__content {\n    @include feature-targeting.targets($feat-animation) {\n      transition: 250ms transform variables.$standard-curve-timing-function;\n    }\n  }\n\n  // --no-transition is applied in cases where styles need to be applied immediately to set up a transition\n  .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n    @include feature-targeting.targets($feat-animation) {\n      transition: none;\n    }\n  }\n\n  .mdc-tab-indicator--fade .mdc-tab-indicator__content {\n    @include feature-targeting.targets($feat-animation) {\n      transition: 150ms opacity linear;\n    }\n  }\n\n  // postcss-bem-linter: ignore\n  .mdc-tab-indicator--active.mdc-tab-indicator--fade\n    .mdc-tab-indicator__content {\n    @include feature-targeting.targets($feat-animation) {\n      transition-delay: 100ms;\n    }\n  }\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // postcss-bem-linter: define tab-indicator\n\n  .mdc-tab-indicator {\n    @include base_($query);\n  }\n\n  @include static-styles($query: $query);\n\n  // postcss-bem-linter: end\n}\n\n@mixin surface($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: relative;\n  }\n}\n\n@mixin underline-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-tab-indicator__content--underline {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(border-color, $color);\n    }\n  }\n}\n\n@mixin underline-height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-tab-indicator__content--underline {\n    @include feature-targeting.targets($feat-structure) {\n      border-top-width: $height;\n    }\n  }\n}\n\n@mixin underline-shape($radius) {\n  .mdc-tab-indicator__content--underline {\n    @include theme.property('border-radius', $radius);\n  }\n}\n\n@mixin underline-top-corner-radius($radius, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-tab-indicator__content--underline {\n    @include feature-targeting.targets($feat-structure) {\n      border-top-left-radius: $radius;\n      border-top-right-radius: $radius;\n    }\n  }\n}\n\n@mixin icon-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-tab-indicator__content--icon {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin icon-height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-tab-indicator__content--icon {\n    @include feature-targeting.targets($feat-structure) {\n      height: $height;\n      font-size: $height;\n    }\n  }\n}\n\n//\n// Private\n//\n\n@mixin base_($query) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include underline-color(primary, $query);\n  @include icon-color(secondary, $query);\n  @include underline-height(2px, $query);\n  @include icon-height(34px, $query);\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n@use './gss';\n\n/// When true, add an additional property/value declaration before declarations\n/// that use advanced features such as custom properties or CSS functions. This\n/// adds fallback support for older browsers such as IE11 that do not support\n/// these features at the cost of additional CSS. Set this variable to false to\n/// disable generating fallback declarations.\n$enable-fallback-declarations: true !default;\n\n/// Writes a CSS property/value declaration. This mixin is used throughout the\n/// theme package for consistency for dynamically setting CSS property values.\n///\n/// This mixin may optionally take a fallback value. For advanced features such\n/// as custom properties or CSS functions like min and max, a fallback value is\n/// recommended to support older browsers.\n///\n/// @param {String} $property - The CSS property of the declaration.\n/// @param {*} $value - The value of the CSS declaration. The value should be\n///     resolved by other theme functions first (i.e. custom property Maps and\n///     Material theme keys are not supported in this mixin). If the value is\n///     null, no declarations will be emitted.\n/// @param {*} $fallback - An optional fallback value for older browsers. If\n///     provided, a second property/value declaration will be added before the\n///     main property/value declaration.\n/// @param {Map} $gss - An optional Map of GSS annotations to add.\n/// @param {Bool} $important - If true, add `!important` to the declaration.\n@mixin declaration(\n  $property,\n  $value,\n  $fallback-value: null,\n  $gss: (),\n  $important: false\n) {\n  // Normally setting a null value to a property will not emit CSS, so mixins\n  // wouldn't need to check this. However, Sass will throw an error if the\n  // interpolated property is a custom property.\n  @if $value != null {\n    $important-rule: if($important, ' !important', '');\n\n    @if $fallback-value and $enable-fallback-declarations {\n      @include gss.annotate($gss);\n      #{$property}: #{$fallback-value} #{$important-rule};\n\n      // Add @alternate to annotations.\n      $gss: map.merge(\n        $gss,\n        (\n          alternate: true,\n        )\n      );\n    }\n\n    @include gss.annotate($gss);\n    #{$property}: #{$value}#{$important-rule};\n  }\n}\n\n/// Unpacks shorthand values for CSS properties (i.e. lists of 1-3 values).\n/// If a list of 4 values is given, it is returned as-is.\n///\n/// Examples:\n///\n/// unpack-value(4px) => 4px 4px 4px 4px\n/// unpack-value(4px 2px) => 4px 2px 4px 2px\n/// unpack-value(4px 2px 2px) => 4px 2px 2px 2px\n/// unpack-value(4px 2px 0 2px) => 4px 2px 0 2px\n///\n/// @param {Number | Map | List} $value - List of 1 to 4 value numbers.\n/// @return {List} a List of 4 value numbers.\n@function unpack-value($value) {\n  @if meta.type-of($value) == 'map' or list.length($value) == 1 {\n    @return $value $value $value $value;\n  } @else if list.length($value) == 4 {\n    @return $value;\n  } @else if list.length($value) == 3 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 3)\n      list.nth($value, 2);\n  } @else if list.length($value) == 2 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 1)\n      list.nth($value, 2);\n  }\n\n  @error \"Invalid CSS property value: '#{$value}' is more than 4 values\";\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n\n/// Adds optional GSS annotation comments. Useful for theme mixins where one or\n/// more properties are set indirectly.\n///\n/// Annotations may be provided as a Map of annotations or as named arguments.\n///\n/// @example - scss\n///   @include annotate((noflip: true));\n///   left: 0;\n///\n/// @example - scss\n///   @include annotate($noflip: true);\n///   left: 0;\n///\n/// @example - css\n///   /* @noflip */ /*rtl:ignore*/\n///   left: 0;\n///\n/// @param {Map} $annotations - Map of annotations. Values must be set to `true`\n///     for an annotation to be added.\n@mixin annotate($annotations...) {\n  $keywords: meta.keywords($annotations);\n  @if list.length($annotations) > 0 {\n    $annotations: list.nth($annotations, 1);\n  } @else {\n    $annotations: $keywords;\n  }\n\n  @if (map.get($annotations, alternate) == true) {\n    /* @alternate */\n  }\n\n  // noflip must be the last tag right before the property\n  @if (map.get($annotations, noflip) == true) {\n    /* @noflip */ /*rtl:ignore*/\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:string';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/custom-properties';\n@use '@material/theme/keys';\n@use '@material/theme/theme';\n\n/// @deprecated Avoid calling this function directly. Instead, configure the\n/// `$styles-<style>` variable Maps.\n@function set-styles_($base-styles, $scale-styles, $override-styles) {\n  $options: (\n    custom-property-prefix: typography,\n  );\n\n  $base-styles: keys.set-values($base-styles, $options: $options);\n\n  @each $style, $style-props in $scale-styles {\n    @each $base-key in map.keys($base-styles) {\n      // Ignore the return result, it's not needed\n      $unused: keys.add-link(keys.combine($style, $base-key), $base-key);\n    }\n\n    // Merge base properties for all styles.\n    $style-props: map.merge($base-styles, $style-props);\n\n    // Merge overrides onto each style.\n    $style-props: map.merge($style-props, map.get($override-styles, $style));\n\n    // Register keys for this style\n    @each $property, $value in $style-props {\n      $unused: keys.set-value(\n        keys.combine($style, $property),\n        $value,\n        $options: $options\n      );\n    }\n\n    // Override original styles with new styles.\n    $scale-styles: map.merge($scale-styles, (#{$style}: $style-props));\n  }\n\n  @return $scale-styles;\n}\n\n@function get-letter-spacing_($tracking, $font-size) {\n  @return math.div($tracking, $font-size * 16) * 1em;\n}\n\n@function px-to-rem($px) {\n  @if custom-properties.is-custom-prop($px) {\n    @return custom-properties.set-fallback(\n      $px,\n      _px-to-rem(custom-properties.get-fallback($px))\n    );\n  }\n  @return _px-to-rem($px);\n}\n\n@function _px-to-rem($px) {\n  @if $px == null {\n    @return null;\n  }\n  @return math.div($px, 16px) * 1rem;\n}\n\n$font-family: string.unquote('Roboto, sans-serif') !default;\n\n// Override styles\n$styles-headline1: () !default;\n$styles-headline2: () !default;\n$styles-headline3: () !default;\n$styles-headline4: () !default;\n$styles-headline5: () !default;\n$styles-headline6: () !default;\n$styles-subtitle1: () !default;\n$styles-subtitle2: () !default;\n$styles-body1: () !default;\n$styles-body2: () !default;\n$styles-caption: () !default;\n$styles-button: () !default;\n$styles-overline: () !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead, or $font-family to set the base font family.\n$base: (\n  font-family: $font-family,\n) !default;\n\n$font-weight-values: (\n  thin: 100,\n  light: 300,\n  regular: 400,\n  medium: 500,\n  bold: 700,\n  black: 900,\n) !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead.\n$styles: set-styles_(\n  $base,\n  (\n    headline1: (\n      font-size: px-to-rem(96px),\n      line-height: px-to-rem(96px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-1.5, 6),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline2: (\n      font-size: px-to-rem(60px),\n      line-height: px-to-rem(60px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-0.5, 3.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline3: (\n      font-size: px-to-rem(48px),\n      line-height: px-to-rem(50px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline4: (\n      font-size: px-to-rem(34px),\n      line-height: px-to-rem(40px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 2.125),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline5: (\n      font-size: px-to-rem(24px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline6: (\n      font-size: px-to-rem(20px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.25, 1.25),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(28px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.15, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(22px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.1, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(24px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.5, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    caption: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.4, 0.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    button: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(36px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(1.25, 0.875),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n    overline: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(2, 0.75),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n  ),\n  (\n    headline1: $styles-headline1,\n    headline2: $styles-headline2,\n    headline3: $styles-headline3,\n    headline4: $styles-headline4,\n    headline5: $styles-headline5,\n    headline6: $styles-headline6,\n    subtitle1: $styles-subtitle1,\n    subtitle2: $styles-subtitle2,\n    body1: $styles-body1,\n    body2: $styles-body2,\n    caption: $styles-caption,\n    button: $styles-button,\n    overline: $styles-overline,\n  )\n) !default;\n\n// A copy of the styles Map that is used to detect compile-time changes for\n// Angular support.\n$_styles-copy: $styles;\n\n@function is-typography-style($style) {\n  @return map.has-key($styles, $style);\n}\n\n@function get-typography-styles() {\n  @return map.keys($styles);\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  .mdc-typography {\n    @include base($query: $query);\n  }\n\n  @each $style in get-typography-styles() {\n    .mdc-typography--#{$style} {\n      @include typography($style, $query: $query);\n    }\n  }\n}\n\n@mixin base($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @include theme.property(font-family, font-family);\n  }\n}\n\n@mixin typography($style, $query: feature-targeting.all(), $exclude-props: ()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @if not is-typography-style($style) {\n    @error \"Invalid style specified! #{$style} doesn't exist. Choose one of #{get-typography-styles()}\";\n  }\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @each $key in keys.get-keys($style) {\n      // <style>-<property>: headline1-font-size\n      // Slice the string past the first key separator to retrieve the\n      // property name\n      $property: string.slice($key, string.index($key, '-') + 1);\n      @if list.index($exclude-props, $property) == null {\n        $current-global-value: map.get($styles, $style, $property);\n        $configured-global-value: map.get($_styles-copy, $style, $property);\n        @if $current-global-value != $configured-global-value {\n          // A compile time change was made to $mdc-typography-styles. To\n          // support Angular, use this value instead of the key's value.\n          @if $current-global-value {\n            // Only emit if the overridden value exists\n            $custom-prop: keys.create-custom-property($key);\n            $custom-prop: custom-properties.set-fallback(\n              $custom-prop,\n              $current-global-value\n            );\n            @include theme.property($property, $custom-prop);\n          }\n        } @else {\n          // Otherwise, use the key, which may be different from the original\n          // configured global value.\n          @include theme.property($property, $key);\n        }\n      }\n    }\n  }\n}\n\n/// Applies antialiasing via font-smoothing to text.\n@mixin smooth-font($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include feature-targeting.targets($feat-typography) {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n}\n\n// Element must be `display: block` or `display: inline-block` for this to work.\n@mixin overflow-ellipsis($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n/// Sets a container's baseline that text content will align to.\n///\n/// If the `$display` is set to a flexbox display, only `$top` baseline may be\n/// set. A separate element must be added as a child of the container with a\n/// `$bottom` baseline.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {String} $display - the display type of the container. May be `flex`,\n///     `inline-flex`, `block`, or `inline-block`.\n@mixin baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (flex, inline-flex, block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $isFlexbox: $display == 'flex' or $display == 'inline-flex';\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: $display;\n\n    @if $isFlexbox {\n      align-items: baseline;\n    }\n  }\n\n  @if $top > 0 {\n    @include baseline-top($top, $query: $query);\n  }\n\n  @if $bottom > 0 {\n    @if $isFlexbox {\n      @error \"mdc-typography: invalid baseline with display type. #{$display} cannot specifiy $bottom. Add a separate child element with its own $bottom.\";\n    }\n\n    @include baseline-bottom($bottom, $query: $query);\n  }\n}\n\n/// Sets the baseline of flow text content.\n///\n/// Separate `$top` and `$bottom` baselines may be specified. You should ensure\n/// that the `$top` baseline matches the previous text content's $bottom\n/// baseline to ensure text is positioned appropriately.\n///\n/// See go/css-baseline for reference on how this mixin works.\n///\n/// This is intended for text flow content only (e.g. `<h1>`, `<p>`, `<span>`,\n/// or `<div>` with only text content). Use `baseline()` to set the baseline of\n/// containers that are flexbox or have non-flow content children.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {Boolean} $lineHeight - the line-height to use for the text. This\n///     is the distance between baselines of multiple lines of text.\n/// @param {String} $display - the display type of the container. May be `block`\n///     or `inline-block`.\n@mixin text-baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $lineHeight: normal,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include baseline(\n    $display: $display,\n    $top: $top,\n    $bottom: $bottom,\n    $query: $query\n  );\n  @include feature-targeting.targets($feat-structure) {\n    @if $top > 0 {\n      margin-top: 0;\n      /* @alternate */\n      line-height: #{$lineHeight};\n    }\n\n    @if $bottom > 0 {\n      margin-bottom: -1 * $bottom;\n    }\n  }\n}\n\n/// Creates a baseline strut from the top of a container. This mixin is for\n/// advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the top of the container to\n///     the text's baseline.\n@mixin baseline-top($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: 0;\n    }\n  }\n}\n\n/// Creates a baseline strut from the baseline to the bottom of a container.\n/// This mixin is for advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the text's baseline to the\n///     bottom of the container.\n@mixin baseline-bottom($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: -1 * $distance;\n    }\n  }\n}\n\n/// Adds an invisible, zero-width prefix to a container's text.\n/// This ensures that the baseline is always where the text would be, instead\n/// of defaulting to the container bottom when text is empty. Do not use this\n/// mixin if the `baseline` mixin is already applied.\n@mixin zero-width-prefix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      content: '\\200b';\n    }\n  }\n}\n\n@mixin baseline-strut_($distance) {\n  display: inline-block;\n  width: 0;\n  height: $distance;\n  content: '';\n}\n\n@function get-font($typography) {\n  @return map.get($styles, $typography, font-family);\n}\n\n@function get-line-height($typography) {\n  @return map.get($styles, $typography, line-height);\n}\n\n@function get-size($typography) {\n  @return map.get($styles, $typography, font-size);\n}\n\n@function get-weight($typography) {\n  @return map.get($styles, $typography, font-weight);\n}\n\n@function get-tracking($typography) {\n  @return map.get($styles, $typography, letter-spacing);\n}\n\n$_typography-theme: (\n  font: null,\n  line-height: null,\n  size: null,\n  weight: null,\n  tracking: null,\n);\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme-keys($_typography-theme, $theme);\n\n  @include theme.property(font-family, map.get($theme, font));\n  @include theme.property(line-height, map.get($theme, line-height));\n  @include theme.property(font-size, map.get($theme, size));\n  @include theme.property(font-weight, map.get($theme, weight));\n  @include theme.property(letter-spacing, map.get($theme, tracking));\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/dom/dom';\n\n$ring-radius-default: 8px !default;\n$inner-ring-width-default: 2px !default;\n$inner-ring-color-default: transparent !default;\n$outer-ring-width-default: 2px !default;\n$outer-ring-color-default: transparent !default;\n$container-outer-padding-default: 2px !default;\n\n/// Styles applied to the component's inner focus ring element.\n///\n/// @param $ring-radius [$ring-radius-default] - Focus ring radius.\n/// @param $inner-ring-width [$inner-ring-width-default] - Inner focus ring width.\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n/// @param $outer-ring-color [$outer-ring-color-default] - Outer focus ring color.\n/// @param $container-outer-padding [$container-outer-padding-default] - The\n///     distance between the focus ring and the container.\n@mixin focus-ring(\n  $query: feature-targeting.all(),\n  $ring-radius: $ring-radius-default,\n  $inner-ring-width: $inner-ring-width-default,\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-width: $outer-ring-width-default,\n  $outer-ring-color: $outer-ring-color-default,\n  $container-outer-padding-vertical: $container-outer-padding-default,\n  $container-outer-padding-horizontal: $container-outer-padding-default\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $container-size-vertical: 100%;\n  @if $container-outer-padding-vertical != 0 {\n    $container-size-vertical: calc(\n      100% + #{$container-outer-padding-vertical * 2}\n    );\n  }\n  $container-size-horizontal: 100%;\n  @if $container-outer-padding-horizontal != 0 {\n    $container-size-horizontal: calc(\n      100% + #{$container-outer-padding-horizontal * 2}\n    );\n  }\n  $outer-ring-size: 100%;\n  @if $outer-ring-width > 0 {\n    $outer-ring-size: calc(100% + #{$outer-ring-width * 2});\n  }\n  @include feature-targeting.targets($feat-structure) {\n    pointer-events: none;\n    border: $inner-ring-width solid $inner-ring-color;\n    border-radius: $ring-radius - $outer-ring-width;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    @include rtl.ignore-next-line();\n    left: 50%;\n    @include rtl.ignore-next-line();\n    transform: translate(-50%, -50%);\n    height: $container-size-vertical;\n    width: $container-size-horizontal;\n\n    @include dom.forced-colors-mode($exclude-ie11: true) {\n      border-color: CanvasText;\n    }\n\n    &::after {\n      content: '';\n      border: $outer-ring-width solid $outer-ring-color;\n      border-radius: $ring-radius;\n      display: block;\n      position: absolute;\n      top: 50%;\n      @include rtl.ignore-next-line();\n      left: 50%;\n      @include rtl.ignore-next-line();\n      transform: translate(-50%, -50%);\n      height: $outer-ring-size;\n      width: $outer-ring-size;\n\n      @include dom.forced-colors-mode($exclude-ie11: true) {\n        border-color: CanvasText;\n      }\n    }\n  }\n}\n/// Customizes the color of the button focus ring.\n///\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n@mixin focus-ring-color(\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-color: $outer-ring-color-default\n) {\n  border-color: $inner-ring-color;\n\n  &::after {\n    border-color: $outer-ring-color;\n  }\n}\n\n/// Customizes the border radius of the button focus ring.\n///\n/// @param {Number} $ring-radius - The border radius of the focus ring.\n/// @param {Number} $outer-ring-width [$outer-ring-width] - Width of the outer\n///     ring, required to compute the radius for the inner ring.\n@mixin focus-ring-radius(\n  $ring-radius,\n  $outer-ring-width: $outer-ring-width-default,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    border-radius: $ring-radius - $outer-ring-width;\n\n    &::after {\n      border-radius: $ring-radius;\n    }\n  }\n}\n","// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use '@material/feature-targeting/feature-targeting';\n///\n/// Emits necessary layout styles to set a transparent border around an element\n/// without interfering with the rest of its component layout. The border is\n/// only visible in high-contrast mode. The target element should be a child of\n/// a relatively positioned top-level element (i.e. a ::before pseudo-element).\n///\n/// @param {number} $border-width - The width of the transparent border.\n/// @param {string} $border-style - The style of the transparent border.\n///\n@mixin transparent-border(\n  $border-width: 1px,\n  $border-style: solid,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: $border-width $border-style transparent;\n    border-radius: inherit;\n    content: '';\n    pointer-events: none;\n  }\n\n  // Used to satisfy Firefox v94 which does not render transparent borders in HCM (b/206440838).\n  @include forced-colors-mode($exclude-ie11: true) {\n    @include feature-targeting.targets($feat-structure) {\n      border-color: CanvasText;\n    }\n  }\n}\n\n///\n/// Visually hides text content for accessibility. This text should only be\n/// visible to screen reader users.\n/// See https://a11yproject.com/posts/how-to-hide-content/\n///\n@mixin visually-hidden($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap; /* added line */\n    width: 1px;\n  }\n}\n\n/// Selects for IE11 support.\n///\n/// @content styles to emit for IE11 support\n@mixin ie11-support {\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    @content;\n  }\n}\n\n/// Selects for `forced-colors` high contrast mode.\n///\n/// While in `forced-colors` mode, only system colors should be used.\n///\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors\n/// @content styles to emit in `forced-colors` mode\n@mixin forced-colors-mode($exclude-ie11: false) {\n  @if $exclude-ie11 {\n    @media screen and (forced-colors: active) {\n      @content;\n    }\n  } @else {\n    @media screen and (forced-colors: active), (-ms-high-contrast: active) {\n      @content;\n    }\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use '@material/theme/theme-color';\n\n$icon-size: 24px !default;\n$height: 48px !default;\n$stacked-height: 72px !default;\n$min-width: 90px !default;\n$horizontal-padding: 24px !default;\n$text-label-opacity: 0.6 !default;\n$icon-opacity: 0.54 !default;\n$text-label-color-default: rgba(\n  theme-color.prop-value(on-surface),\n  $text-label-opacity\n) !default;\n$icon-color-default: rgba(\n  theme-color.prop-value(on-surface),\n  $icon-opacity\n) !default;\n$text-label-color-active: primary !default;\n$icon-color-active: primary !default;\n$ripple-target: '.mdc-tab__ripple';\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:meta';\n@use 'sass:selector';\n@use '@material/theme/gss';\n@use '@material/theme/selector-ext';\n@use '@material/theme/theme';\n\n$include: true !default;\n\n/// Creates a rule that will be applied when a component is within the context\n/// of an RTL layout.\n///\n/// @example - scss\n/// .mdc-foo {\n///   padding-left: 4px;\n///\n///   @include rtl {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n/// }\n///\n/// @example - css\n///   .mdc-foo {\n///     padding-left: 4px;\n///   }\n///\n///   [dir=\"rtl\"] .mdc-foo,\n///   .mdc-foo[dir=\"rtl\"] {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n///\n/// Note that this mixin works by checking for an ancestor element with\n/// `[dir=\"rtl\"]`. As a result, nested `dir` values are not supported:\n///\n/// @example - html\n/// <html dir=\"rtl\">\n///   <!-- ... -->\n///   <div dir=\"ltr\">\n///     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n///   </div>\n/// </html>\n///\n/// In the future, selectors such as the `:dir` pseudo-class\n/// (http://mdn.io/css/:dir) will help us mitigate this.\n///\n/// @content Content to be styled in an RTL context.\n@mixin rtl() {\n  @if ($include) {\n    $dir-rtl: '[dir=rtl]';\n\n    $rtl-selectors: list.join(\n      selector.nest($dir-rtl, &),\n      selector-ext.append-strict(&, $dir-rtl)\n    );\n\n    @at-root {\n      #{$rtl-selectors} {\n        /*rtl:begin:ignore*/\n        @content;\n        /*rtl:end:ignore*/\n      }\n    }\n  }\n}\n\n// Takes a base box-model property name (`margin`, `border`, `padding`, etc.) along with a\n// default direction (`left` or `right`) and value, and emits rules which apply the given value to the\n// specified direction by default and the opposite direction in RTL.\n//\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, left, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 8px;\n//   margin-right: 0;\n//\n//   @include rtl {\n//     margin-left: 0;\n//     margin-right: 8px;\n//   }\n// }\n// ```\n//\n// whereas:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, right, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 0;\n//   margin-right: 8px;\n//\n//   @include rtl {\n//     margin-left: 8px;\n//     margin-right: 0;\n//   }\n// }\n// ```\n//\n// You can also pass an optional 4th `$root-selector` argument which will be forwarded to `mdc-rtl`,\n// e.g. `@include rtl-reflexive-box(margin, left, 8px, '.mdc-component')`.\n//\n// Note that this function will always zero out the original value in an RTL context.\n// If you're trying to flip the values, use `mdc-rtl-reflexive-property()` instead.\n@mixin reflexive-box(\n  $base-property,\n  $default-direction,\n  $value,\n  $replace: null\n) {\n  @if (list.index((right, left), $default-direction) == null) {\n    @error \"Invalid default direction: '#{$default-direction}'. Please specifiy either 'right' or 'left'.\";\n  }\n\n  $left-value: $value;\n  $right-value: 0;\n\n  @if ($default-direction == right) {\n    $left-value: 0;\n    $right-value: $value;\n  }\n\n  @include reflexive-property(\n    $base-property,\n    $left-value,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n// <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-property(margin, auto, 12px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: auto;\n//   margin-right: 12px;\n//\n//   @include rtl {\n//     margin-left: 12px;\n//     margin-right: auto;\n//   }\n// }\n// ```\n//\n// An optional 4th `$root-selector` argument can be given, which will be passed to `mdc-rtl`.\n@mixin reflexive-property(\n  $base-property,\n  $left-value,\n  $right-value,\n  $replace: null\n) {\n  $prop-left: #{$base-property}-left;\n  $prop-right: #{$base-property}-right;\n\n  @include reflexive(\n    $prop-left,\n    $left-value,\n    $prop-right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes an argument specifying a horizontal position property (either 'left' or 'right') as well\n// as a value, and applies that value to the specified position in a LTR context, and flips it in a\n// RTL context. For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-position(left, 0);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 0;\n//   right: initial;\n//\n//   @include rtl {\n//     left: initial;\n//     right: 0;\n//   }\n// }\n// ```\n//\n// An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive-position($position-property, $value, $replace: null) {\n  @if (list.index((right, left), $position-property) == null) {\n    @error \"Invalid position #{position-property}. Please specifiy either right or left\";\n  }\n\n  // TODO: 'initial' is not supported in IE 11. https://caniuse.com/#feat=css-initial-value\n  $left-value: $value;\n  $right-value: initial;\n\n  @if ($position-property == right) {\n    $right-value: $value;\n    $left-value: initial;\n  }\n\n  @include reflexive(\n    left,\n    $left-value,\n    right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes pair of properties with values as arguments and flips it in RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive(left, 2px, right, 5px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 2px;\n//   right: 5px;\n//\n//   @include rtl {\n//     right: 2px;\n//     left: 5px;\n//   }\n// }\n// ```\n//\n// An optional fifth `$root-selector` argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive(\n  $left-property,\n  $left-value,\n  $right-property,\n  $right-value,\n  $replace: null\n) {\n  $left-replace: null;\n  $right-replace: null;\n  @if $replace {\n    @if meta.type-of($left-value) == 'string' {\n      $left-replace: $replace;\n    }\n\n    @if meta.type-of($right-value) == 'string' {\n      $right-replace: $replace;\n    }\n\n    @if $left-replace == null and $right-replace == null {\n      @error 'mdc-rtl: $replace may only be used with strings but neither left nor right values are strings.';\n    }\n\n    // If any replacements are null, treat the entire value as null (do not\n    // emit anything).\n    @each $name, $replacement in $replace {\n      @if $replacement == null {\n        $left-value: null;\n        $right-value: null;\n      }\n    }\n  }\n\n  // Do not emit if either value are null\n  @if $left-value and $right-value {\n    @include _property($left-property, $left-value, $replace: $left-replace);\n    @include _property($right-property, $right-value, $replace: $right-replace);\n\n    @include rtl {\n      @include _property(\n        $left-property,\n        $right-value,\n        $replace: $right-replace\n      );\n      @include _property($right-property, $left-value, $replace: $left-replace);\n    }\n  }\n}\n\n///\n/// Adds RTL ignore annotation when `$mdc-rtl-include` is true.\n///\n@mixin ignore-next-line() {\n  @include gss.annotate(\n    (\n      noflip: $include,\n    )\n  );\n}\n\n///\n/// Adds `@noflip` annotation when `$mdc-rtl-include` is true.\n///\n/// @param {String} $property\n/// @param {String} $value\n/// @param {Map} $replace\n///\n@mixin _property($property, $value, $replace: null) {\n  @include theme.property(\n    $property,\n    $value,\n    $replace: $replace,\n    $gss: (noflip: $include)\n  );\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/theme/custom-properties';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use './ripple-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include static-styles($query: $query);\n\n  .mdc-ripple-surface {\n    @include ripple-theme.states($query: $query);\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-ripple-surface {\n    @include surface($query: $query);\n    @include radius-bounded($query: $query);\n    @include surface-styles($query: $query);\n  }\n\n  .mdc-ripple-surface[data-mdc-ripple-is-unbounded],\n  .mdc-ripple-upgraded--unbounded {\n    @include radius-unbounded($query: $query);\n    @include unbounded-styles($query: $query);\n  }\n}\n\n/// Sets all states (including hover, focus, press, activated and selected) with\n/// given color as base color.\n///\n/// This mixin is for internal use only. Use `ripple-theme.states($color)` mixin\n/// to set interactive states (hover, focus & press) color.\n///\n/// @param {Color|String} $color - Target base color. Can be valid CSS color or\n///     a color string literal (i.e., `primary`, `secondary`, etc).\n@mixin states-for-color($color, $query: feature-targeting.all()) {\n  @include ripple-theme.states($color, $query: $query);\n  @include ripple-theme.states-activated($color, $query: $query);\n  @include ripple-theme.states-selected($color, $query: $query);\n}\n\n@mixin surface-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: relative;\n    outline: none;\n    overflow: hidden;\n  }\n}\n\n@mixin unbounded-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    overflow: visible;\n  }\n}\n\n@mixin common($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // Ensure that styles needed by any component using MDC Ripple are emitted, but only once.\n  // (Every component using MDC Ripple imports these mixins, but doesn't necessarily import\n  // mdc-ripple.scss.)\n  @include feature-targeting.targets($feat-animation) {\n    @include base-mixins.emit-once('mdc-ripple/common/animation') {\n      @include keyframes_;\n    }\n  }\n}\n\n@mixin surface(\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $include-will-change: true // TODO(b/151931961): Remove once resolved\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    // TODO(b/151931961): Remove the following block once resolved\n    @if $include-will-change {\n      will-change: transform, opacity;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: '';\n    }\n  }\n\n  #{$ripple-target}::before {\n    @include feature-targeting.targets($feat-animation) {\n      // Also transition background-color to avoid unnatural color flashes when toggling activated/selected state\n      transition: opacity ripple-theme.$states-wash-duration linear,\n        background-color ripple-theme.$states-wash-duration linear;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that the ripple wash for hover/focus states is displayed on top of positioned child elements\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 1)\n      );\n    }\n  }\n\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 0)\n      );\n    }\n  }\n\n  // Common styles for upgraded surfaces (some of these depend on custom properties set via JS or other mixins)\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before {\n      @include feature-targeting.targets($feat-structure) {\n        transform: scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n        transform: scale(0);\n        transform-origin: center center;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--unbounded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: var(--mdc-ripple-top, 0);\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, 0);\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-activation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-radius-in ripple-theme.$translate-duration\n            forwards,\n          mdc-ripple-fg-opacity-in ripple-theme.$fade-in-duration forwards;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-deactivation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-opacity-out ripple-theme.$fade-out-duration;\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        // Retain transform from mdc-ripple-fg-radius-in activation\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n          scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n  }\n}\n\n@mixin radius-bounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{$radius});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{$radius});\n      width: $radius * 2;\n      height: $radius * 2;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n@mixin radius-unbounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{math.div($radius, 2)});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{math.div($radius, 2)});\n      width: $radius;\n      height: $radius;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        top: var(--mdc-ripple-top, calc(50% - #{math.div($radius, 2)}));\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, calc(50% - #{math.div($radius, 2)}));\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n// Common styles for a ripple target element.\n// Used for components which have an inner ripple target element.\n@mixin target-common($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    // Necessary for clicks on other inner elements (e.g. close icon in chip)\n    // to go through.\n    pointer-events: none;\n  }\n}\n\n@mixin keyframes_ {\n  @keyframes mdc-ripple-fg-radius-in {\n    from {\n      animation-timing-function: variables2.$standard-curve-timing-function;\n      // NOTE: For these keyframes, we do not need custom property fallbacks because they are only\n      // used in conjunction with `.mdc-ripple-upgraded`. Since MDCRippleFoundation checks to ensure\n      // that custom properties are supported within the browser before adding this class, we can\n      // safely use them without a fallback.\n      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    }\n\n    to {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n        scale(var(--mdc-ripple-fg-scale, 1));\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-in {\n    from {\n      animation-timing-function: linear;\n      opacity: 0;\n    }\n\n    to {\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-out {\n    from {\n      animation-timing-function: linear;\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n$deceleration-curve-timing-function: cubic-bezier(0, 0, 0.2, 1) !default;\n$standard-curve-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;\n$acceleration-curve-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;\n$sharp-curve-timing-function: cubic-bezier(0.4, 0, 0.6, 1) !default;\n\n@function enter($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $deceleration-curve-timing-function;\n}\n\n@function exit-permanent($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $acceleration-curve-timing-function;\n}\n\n@function exit-temporary($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $sharp-curve-timing-function;\n}\n\n@function standard($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $standard-curve-timing-function;\n}\n\n@function linear($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay linear;\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/css';\n@use '@material/theme/custom-properties';\n@use '@material/theme/theme';\n@use '@material/theme/keys';\n@use '@material/theme/shadow-dom';\n@use '@material/theme/theme-color';\n\n$custom-property-prefix: 'ripple';\n\n$fade-in-duration: 75ms !default;\n$fade-out-duration: 150ms !default;\n$translate-duration: 225ms !default;\n$states-wash-duration: 15ms !default;\n\n// Notes on states:\n// * focus takes precedence over hover (i.e. if an element is both focused and hovered, only focus value applies)\n// * press state applies to a separate pseudo-element, so it has an additive effect on top of other states\n// * selected/activated are applied additively to hover/focus via calculations at preprocessing time\n\n$dark-ink-opacities: (\n  hover: 0.04,\n  focus: 0.12,\n  press: 0.12,\n  selected: 0.08,\n  activated: 0.12,\n) !default;\n\n$light-ink-opacities: (\n  hover: 0.08,\n  focus: 0.24,\n  press: 0.24,\n  selected: 0.16,\n  activated: 0.24,\n) !default;\n\n// Legacy\n\n$pressed-dark-ink-opacity: 0.16 !default;\n$pressed-light-ink-opacity: 0.32 !default;\n\n// State selector variables used for state selector mixins below.\n$_hover-selector: '&:hover';\n$_focus-selector: '&.mdc-ripple-upgraded--background-focused, &:not(.mdc-ripple-upgraded):focus';\n$_active-selector: '&:not(:disabled):active';\n\n$light-theme: (\n  focus-state-layer-color: theme-color.$on-surface,\n  focus-state-layer-opacity: map.get($dark-ink-opacities, focus),\n  hover-state-layer-color: theme-color.$on-surface,\n  hover-state-layer-opacity: map.get($dark-ink-opacities, hover),\n  pressed-state-layer-color: theme-color.$on-surface,\n  pressed-state-layer-opacity: map.get($dark-ink-opacities, press),\n);\n\n@mixin theme($theme) {\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  @if shadow-dom.$css-selector-fallback-declarations {\n    .mdc-ripple-surface {\n      @include theme-styles($theme);\n    }\n  }\n}\n\n$_ripple-theme: (\n  hover-state-layer-color: null,\n  focus-state-layer-color: null,\n  pressed-state-layer-color: null,\n  hover-state-layer-opacity: null,\n  focus-state-layer-opacity: null,\n  pressed-state-layer-opacity: null,\n);\n\n@mixin theme-styles($theme, $ripple-target: '&') {\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  // TODO(b/191298796): Support states layer color for every interactive states.\n  // Use only hover state layer color, ignoring focus and pressed color.\n  @include internal-theme-styles($theme, $ripple-target);\n}\n\n@mixin internal-theme-styles($theme, $ripple-target: '&') {\n  @include theme.validate-theme-keys($_ripple-theme, $theme);\n\n  @include states-base-color(\n    map.get($theme, hover-state-layer-color),\n    $ripple-target: $ripple-target\n  );\n  @include states-hover-opacity(\n    map.get($theme, hover-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-focus-opacity(\n    map.get($theme, focus-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-press-opacity(\n    map.get($theme, pressed-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin states-base-color(\n  $color,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @if not custom-properties.is-custom-prop($color) {\n      $color: custom-properties.create(\n        ripple-color,\n        theme-color.get-custom-property($color)\n      );\n    }\n\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(background-color, $color);\n      }\n    }\n  }\n}\n\n///\n/// Customizes ripple opacities in `hover`, `focus`, or `press` states\n/// @param {map} $opacity-map - map specifying custom opacity of zero or more states\n/// @param {bool} $has-nested-focusable-element - whether the component contains a focusable element in the root\n/// @param {string} $ripple-target - the optional selector for the ripple element\n///\n@mixin states-opacities(\n  $opacity-map: (),\n  $has-nested-focusable-element: false,\n  $ripple-target: '&',\n  $query: feature-targeting.all()\n) {\n  // Ensure sufficient specificity to override base state opacities\n  @if map.get($opacity-map, hover) {\n    @include states-hover-opacity(\n      map.get($opacity-map, hover),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, focus) {\n    @include states-focus-opacity(\n      map.get($opacity-map, focus),\n      $ripple-target: $ripple-target,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, press) {\n    @include states-press-opacity(\n      map.get($opacity-map, press),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n}\n\n@mixin states-hover-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity and not custom-properties.is-custom-prop($opacity) {\n    $opacity: custom-properties.create(ripple-hover-opacity, $opacity);\n  }\n\n  // Background wash styles, for both CSS-only and upgraded stateful surfaces\n  &:hover,\n  &.mdc-ripple-surface--hover {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(opacity, $opacity);\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity(\n  $opacity,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  // Focus overrides hover by reusing the ::before pseudo-element.\n  // :focus-within generally works on non-MS browsers and matches when a *child* of the element has focus.\n  // It is useful for cases where a component has a focusable element within the root node, e.g. text field,\n  // but undesirable in general in case of nested stateful components.\n  // We use a modifier class for JS-enabled surfaces to support all use cases in all browsers.\n  @if $has-nested-focusable-element {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    &.mdc-ripple-upgraded:focus-within,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus,\n    &:not(.mdc-ripple-upgraded):focus-within {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  } @else {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity-properties_($opacity, $query) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-focus-opacity, $opacity);\n    }\n\n    // Note that this duration is only effective on focus, not blur\n    @include feature-targeting.targets($feat-animation) {\n      transition-duration: 75ms;\n    }\n\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n@mixin states-press-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  // Styles for non-upgraded (CSS-only) stateful surfaces\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-press-opacity, $opacity);\n    }\n\n    &:not(.mdc-ripple-upgraded) {\n      // Apply press additively by using the ::after pseudo-element\n      #{$ripple-target}::after {\n        @include feature-targeting.targets($feat-animation) {\n          transition: opacity $fade-out-duration linear;\n        }\n      }\n\n      &:active {\n        #{$ripple-target}::after {\n          @include feature-targeting.targets($feat-animation) {\n            transition-duration: $fade-in-duration;\n          }\n\n          // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n          @include feature-targeting.targets($feat-color) {\n            @include theme.property(opacity, $opacity);\n          }\n        }\n      }\n    }\n\n    &.mdc-ripple-upgraded {\n      @include feature-targeting.targets($feat-color) {\n        // Upgraded ripple should always emit custom property, regardless of\n        // configuration, since ripple itself feature detects custom property\n        // support at runtime.\n        @include custom-properties.configure($emit-custom-properties: true) {\n          @include theme.property(\n            custom-properties.create(ripple-fg-opacity, $opacity)\n          );\n        }\n      }\n    }\n  }\n}\n\n// Simple mixin for base states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states(\n  $color: theme-color.prop-value(on-surface),\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include states-interactions_(\n    $color: $color,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $query: $query,\n    $ripple-target: $ripple-target,\n    $opacity-map: $opacity-map\n  );\n}\n\n// Simple mixin for activated states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-activated(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $activated-opacity: states-opacity($color, activated);\n\n  &--activated {\n    // Stylelint seems to think that '&' qualifies as a type selector here?\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-activated-opacity,\n            $activated-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $activated-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n// Simple mixin for selected states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-selected(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $selected-opacity: states-opacity($color, selected);\n\n  &--selected {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-selected-opacity,\n            $selected-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $selected-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n@mixin states-interactions_(\n  $color,\n  $has-nested-focusable-element,\n  $opacity-modifier: 0,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include target-selector($ripple-target) {\n    @include states-base-color($color, $query);\n  }\n\n  @if $opacity-map == null {\n    $opacity-map: (\n      hover: states-opacity($color, hover) + $opacity-modifier,\n      focus: states-opacity($color, focus) + $opacity-modifier,\n      press: states-opacity($color, press) + $opacity-modifier,\n    );\n  }\n\n  @include states-opacities(\n    $opacity-map,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $ripple-target: $ripple-target,\n    $query: $query\n  );\n}\n\n// Wraps content in the `ripple-target` selector if it exists.\n@mixin target-selector($ripple-target: '&') {\n  @if $ripple-target == '&' {\n    @content;\n  } @else {\n    #{$ripple-target} {\n      @content;\n    }\n  }\n}\n\n/// Selector for hover, active and focus states.\n@mixin states-selector() {\n  #{$_hover-selector},\n  #{$_focus-selector},\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n@mixin hover() {\n  #{$_hover-selector} {\n    @content;\n  }\n}\n\n// Selector for focus state. Using ':not(.mdc-ripple-upgraded)' to continue\n// applying focus styles on JS-disabled components, and control focus\n// on JS-enabled components with '.mdc-ripple-upgraded--background-focused'.\n@mixin focus() {\n  #{$_focus-selector} {\n    @content;\n  }\n}\n\n// Selector for active state. Using `:active:active` to override focus styles.\n@mixin pressed() {\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n// @deprecated Use `pressed()` mixin - renamed for consistency.\n@mixin active() {\n  @include pressed() {\n    @content;\n  }\n}\n\n/// Keep the ripple (State overlay) behind the content.\n@mixin behind-content(\n  $ripple-target,\n  $content-root-selector: '&',\n  $query: feature-targeting.all()\n) {\n  // Needed for IE11. Without this, IE11 renders the state layer completely\n  // underneath the container, making it invisible.\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  #{$content-root-selector} {\n    @include feature-targeting.targets($feat-structure) {\n      z-index: 0;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, -1)\n      );\n    }\n  }\n}\n\n@function states-opacity($color, $state) {\n  $color-value: theme-color.prop-value($color);\n  $opacity-map: if(\n    theme-color.tone($color-value) == 'light',\n    $light-ink-opacities,\n    $dark-ink-opacities\n  );\n\n  @if not map.has-key($opacity-map, $state) {\n    @error \"Invalid state: '#{$state}'. Choose one of: #{map.keys($opacity-map)}\";\n  }\n\n  @return map.get($opacity-map, $state);\n}\n\n@mixin states-background-selector($ripple-target) {\n  #{$ripple-target}::before {\n    @content;\n  }\n}\n","*, *:before, *:after{\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    text-rendering: optimizeLegibility;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-size-adjust: none;\r\n}\r\n\r\nfooter, header, nav, section, main{\r\n    display: block;\r\n}\r\n\r\nbody{\r\n    line-height: 1;\r\n}\r\n\r\nol, ul{\r\n    list-style: none;\r\n}\r\n\r\nblockquote, q{\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after, q:before, q:after{\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\ninput{\r\n    -webkit-appearance: none;\r\n    border-radius: 0;\r\n}","// $primary:#38C1D3;\r\n// $on-primary: #2c3400;\r\n// $secondary: #CDDC27;\r\n// $on-secondary: #2e321b;\r\n// $background: #10153D;\r\n// $surface: #10153D;\r\n// $on-surface: #e5e2da;\r\n// $error: #ffb4ab;\r\n// $on-error: #690005;\r\n\r\n:root {\r\n    @media (prefers-color-scheme: light) {\r\n        --mdc-theme-primary: #006874;\r\n        --mdc-theme-on-primary: #ffffff;\r\n        --mdc-theme-secondary: #5c6300;\r\n        --mdc-theme-on-secondary: #ffffff;\r\n        --mdc-theme-surface: #fafdfd;\r\n        --mdc-theme-on-surface: #191c1d;\r\n        --mdc-theme-background: #fafdfd;\r\n        --mdc-theme-on-background: #191c1d;\r\n    }\r\n\r\n    @media (prefers-color-scheme: dark) {\r\n        --mdc-theme-primary: #4fd8eb;\r\n        --mdc-theme-on-primary: #00363d;\r\n        --mdc-theme-secondary: #c2d016;\r\n        --mdc-theme-on-secondary: #2f3300;\r\n\r\n        --mdc-theme-surface-base: 195, 7.4%;\r\n        --mdc-theme-surface-l: 15.6%;\r\n        --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\r\n            --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\r\n            --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\r\n            --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\r\n            --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\r\n            --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\r\n            --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\r\n            --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\r\n            --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\r\n            --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\r\n\r\n        --mdc-theme-on-surface: #e1e3e3;\r\n        --mdc-theme-background: #191c1d;\r\n        --mdc-theme-on-background: #e1e3e3;\r\n\r\n\r\n        // Others\r\n        --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\r\n\r\n    }\r\n}\r\n//#9c27b0 purple-ish\r\n\r\n@media (prefers-color-scheme: dark) {\r\n    .mdc-elevation--z1 {\r\n        background:var(--mdc-theme-surface-z1);\r\n    }\r\n    .mdc-elevation--z2 {\r\n        background:var(--mdc-theme-surface-z2);\r\n    }\r\n    .mdc-elevation--z3 {\r\n        background:var(--mdc-theme-surface-z3);\r\n    }\r\n    .mdc-elevation--z4 {\r\n        background:var(--mdc-theme-surface-z4);\r\n    }\r\n    .mdc-elevation--z5 {\r\n        background:var(--mdc-theme-surface-z5);\r\n    }\r\n    .mdc-elevation--z6 {\r\n        background:var(--mdc-theme-surface-z6);\r\n    }\r\n    .mdc-elevation--z7 {\r\n        background:var(--mdc-theme-surface-z7);\r\n    }\r\n\r\n\r\n    // Drawer Custom\r\n    .mdc-drawer {\r\n        &.mdc-drawer--modal {\r\n            background:var(--mdc-theme-surface-z1);\r\n\r\n            .mdc-drawer__header {\r\n                background:var(--mdc-theme-surface-z4);\r\n\r\n                .mdc-drawer__title {\r\n                    color:var(--mdc-theme-on-surface);\r\n                }\r\n                .mdc-drawer__subtitle {\r\n                    color:var(--mdc-theme-on-surface);\r\n                }\r\n            }\r\n\r\n            .mdc-drawer__content {\r\n                .mdc-deprecated-list-item {\r\n                    color: var(--mdc-theme-on-surface);\r\n\r\n                    .mdc-deprecated-list-item__graphic {\r\n                        color: var(--mdc-theme-surface-z9);\r\n                    }\r\n                }\r\n                .mdc-deprecated-list-item--activated {\r\n                    color: var(--mdc-theme-primary);\r\n\r\n                    .mdc-deprecated-list-item__graphic {\r\n                        color: var(--mdc-theme-primary);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    // Top App Bar Custom\r\n    .mdc-top-app-bar {\r\n        background-color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-top-app-bar__title {\r\n        color: var(--mdc-theme-on-primary);\r\n    }\r\n\r\n    // Tab Custom\r\n    .mdc-tab {\r\n        .mdc-tab__icon, .mdc-tab__text-label {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n\r\n        &.mdc-tab--active {\r\n            .mdc-tab__icon, .mdc-tab__text-label {\r\n                color: var(--mdc-theme-primary);\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    // Table Custom\r\n    .mdc-data-table__header-cell {\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n    }\r\n\r\n    .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n    }\r\n\r\n\r\n    // Dialog Custom\r\n    .mdc-dialog .mdc-dialog__surface {\r\n        background-color:var(--mdc-theme-surface-z3);\r\n    }\r\n\r\n    .mdc-dialog .mdc-dialog__title {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n    .mdc-dialog__actions {\r\n        gap: 1rem;\r\n    }\r\n\r\n    // Dialog Scrim Custom\r\n    .mdc-dialog .mdc-dialog__scrim {\r\n        background-color: rgba(0, 0, 0, 0.80);\r\n    }\r\n\r\n\r\n\r\n    // Text Field Custom\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z5);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading, \r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch, \r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z7);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-text-field--outlined .mdc-notched-outline {\r\n        z-index:-1;\r\n    }\r\n\r\n    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n\r\n\r\n    // Select Custom\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z5);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading, \r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch, \r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z7);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\r\n        color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\r\n        fill: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\r\n        fill: var(--mdc-theme-primary);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n","//@use \"@material/typography/mdc-typography\";\r\n//@import \"./theme/theme1/variables\";\r\n//@use \"@material/theme\";\r\n@import \"./reset\";\r\n@import \"./theme/theme1/variables\";\r\n//@import \"./theme/theme1/variables-dark\";\r\n@import \"../../node_modules/@material/typography/mdc-typography\";\r\n\r\nhtml {\r\n    background-color: var(--mdc-theme-background);\r\n}\r\n\r\ntable {\r\n    thead, tbody {\r\n        tr {\r\n            th, td {\r\n                vertical-align: middle;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.mdc-icon-button.actionsButton {\r\n    width: 40px;\r\n    height: 40px;\r\n    padding: 8px;\r\n}\r\n\r\n.main-content {\r\n    padding:1rem;\r\n}\r\n\r\n.content-section {\r\n    padding:1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.demo-group {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n\r\n    &.wrap {\r\n        flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/documentation/projecttestcases/projectTestCases.scss":
/*!******************************************************************!*\
  !*** ./src/documentation/projecttestcases/projectTestCases.scss ***!
  \******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_projectTestCases_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./projectTestCases.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/projecttestcases/projectTestCases.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_projectTestCases_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_projectTestCases_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_projectTestCases_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_projectTestCases_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!****************************************************************!*\
  !*** ./src/documentation/projecttestcases/projectTestCases.js ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectTestCases_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectTestCases.scss */ "./src/documentation/projecttestcases/projectTestCases.scss");
/* harmony import */ var _material_tab_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/tab-bar */ "./node_modules/@material/tab-bar/component.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var tabBar = document.querySelectorAll('.mdc-tab-bar');
var _iterator = _createForOfIteratorHelper(tabBar),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var item = _step.value;
    new _material_tab_bar__WEBPACK_IMPORTED_MODULE_1__.MDCTabBar.attachTo(item);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
})();

/******/ })()
;
//# sourceMappingURL=projecttestcases77973556993ff4baeda7.js.map