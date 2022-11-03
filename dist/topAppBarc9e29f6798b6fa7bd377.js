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

/***/ "./node_modules/@material/top-app-bar/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTopAppBar": () => (/* binding */ MDCTopAppBar)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _fixed_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixed/foundation */ "./node_modules/@material/top-app-bar/fixed/foundation.js");
/* harmony import */ var _short_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short/foundation */ "./node_modules/@material/top-app-bar/short/foundation.js");
/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
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







var MDCTopAppBar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTopAppBar, _super);
    function MDCTopAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar.attachTo = function (root) {
        return new MDCTopAppBar(root);
    };
    MDCTopAppBar.prototype.initialize = function (rippleFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el) { return _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__.MDCRipple.attachTo(el); }; }
        this.navIcon = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_2__.strings.NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_2__.strings.ACTION_ITEM_SELECTOR));
        if (this.navIcon) {
            icons.push(this.navIcon);
        }
        this.iconRipples = icons.map(function (icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget = window;
    };
    MDCTopAppBar.prototype.initialSyncWithDOM = function () {
        this.handleNavigationClick =
            this.foundation.handleNavigationClick.bind(this.foundation);
        this.handleWindowResize =
            this.foundation.handleWindowResize.bind(this.foundation);
        this.handleTargetScroll =
            this.foundation.handleTargetScroll.bind(this.foundation);
        this.scrollTarget.addEventListener('scroll', this.handleTargetScroll);
        if (this.navIcon) {
            this.navIcon.addEventListener('click', this.handleNavigationClick);
        }
        var isFixed = this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.FIXED_CLASS);
        var isShort = this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.addEventListener('resize', this.handleWindowResize);
        }
    };
    MDCTopAppBar.prototype.destroy = function () {
        var e_1, _a;
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(this.iconRipples), _c = _b.next(); !_c.done; _c = _b.next()) {
                var iconRipple = _c.value;
                iconRipple.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
        if (this.navIcon) {
            this.navIcon.removeEventListener('click', this.handleNavigationClick);
        }
        var isFixed = this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.FIXED_CLASS);
        var isShort = this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.removeEventListener('resize', this.handleWindowResize);
        }
        _super.prototype.destroy.call(this);
    };
    MDCTopAppBar.prototype.setScrollTarget = function (target) {
        // Remove scroll handler from the previous scroll target
        this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
        this.scrollTarget = target;
        // Initialize scroll handler on the new scroll target
        this.handleTargetScroll =
            this.foundation.handleTargetScroll.bind(this.foundation);
        this.scrollTarget.addEventListener('scroll', this.handleTargetScroll);
    };
    MDCTopAppBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root.classList.contains(className); },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setStyle: function (property, value) {
                return _this.root.style.setProperty(property, value);
            },
            getTopAppBarHeight: function () { return _this.root.clientHeight; },
            notifyNavigationIconClicked: function () {
                return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_2__.strings.NAVIGATION_EVENT, {});
            },
            getViewportScrollY: function () {
                var win = _this.scrollTarget;
                var el = _this.scrollTarget;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function () {
                return _this.root.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_2__.strings.ACTION_ITEM_SELECTOR).length;
            },
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.SHORT_CLASS)) {
            foundation = new _short_foundation__WEBPACK_IMPORTED_MODULE_3__.MDCShortTopAppBarFoundation(adapter);
        }
        else if (this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.FIXED_CLASS)) {
            foundation = new _fixed_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCFixedTopAppBarFoundation(adapter);
        }
        else {
            foundation = new _standard_foundation__WEBPACK_IMPORTED_MODULE_5__.MDCTopAppBarFoundation(adapter);
        }
        return foundation;
    };
    return MDCTopAppBar;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_6__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/constants.js ***!
  \*********************************************************/
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
var cssClasses = {
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
};
var numbers = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128,
};
var strings = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/fixed/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/fixed/foundation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFixedTopAppBarFoundation": () => (/* binding */ MDCFixedTopAppBarFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
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



var MDCFixedTopAppBarFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFixedTopAppBarFoundation, _super);
    function MDCFixedTopAppBarFoundation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */
        _this.wasScrolled = false;
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     */
    MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScroll = this.adapter.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled) {
                this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled = false;
            }
        }
        else {
            if (!this.wasScrolled) {
                this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled = true;
            }
        }
    };
    return MDCFixedTopAppBarFoundation;
}(_standard_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCTopAppBarFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFixedTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/foundation.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTopAppBarBaseFoundation": () => (/* binding */ MDCTopAppBarBaseFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
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



var MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTopAppBarBaseFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarBaseFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTopAppBarBaseFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                getTopAppBarHeight: function () { return 0; },
                notifyNavigationIconClicked: function () { return undefined; },
                getViewportScrollY: function () { return 0; },
                getTotalActionItems: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () { }; // tslint:disable-line:no-empty
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () { }; // tslint:disable-line:no-empty
    MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
        this.adapter.notifyNavigationIconClicked();
    };
    return MDCTopAppBarBaseFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTopAppBarBaseFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/short/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/short/foundation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCShortTopAppBarFoundation": () => (/* binding */ MDCShortTopAppBarFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
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



var MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.collapsed = false;
        _this.isAlwaysCollapsed = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function () {
            return this.collapsed;
        },
        enumerable: false,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.adapter.getTotalActionItems() > 0) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
        }
        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
        this.setAlwaysCollapsed(this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SHORT_COLLAPSED_CLASS));
    };
    /**
     * Set if the short top app bar should always be collapsed.
     *
     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
     */
    MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
        this.isAlwaysCollapsed = !!value;
        if (this.isAlwaysCollapsed) {
            this.collapse();
        }
        else {
            // let maybeCollapseBar determine if the bar should be collapsed
            this.maybeCollapseBar();
        }
    };
    MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
        return this.isAlwaysCollapsed;
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     */
    MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
        this.maybeCollapseBar();
    };
    MDCShortTopAppBarFoundation.prototype.maybeCollapseBar = function () {
        if (this.isAlwaysCollapsed) {
            return;
        }
        var currentScroll = this.adapter.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.collapsed) {
                this.uncollapse();
            }
        }
        else {
            if (!this.collapsed) {
                this.collapse();
            }
        }
    };
    MDCShortTopAppBarFoundation.prototype.uncollapse = function () {
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SHORT_COLLAPSED_CLASS);
        this.collapsed = false;
    };
    MDCShortTopAppBarFoundation.prototype.collapse = function () {
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SHORT_COLLAPSED_CLASS);
        this.collapsed = true;
    };
    return MDCShortTopAppBarFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCTopAppBarBaseFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCShortTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/standard/foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/standard/foundation.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTopAppBarFoundation": () => (/* binding */ MDCTopAppBarFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
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



var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * Indicates if the top app bar was docked in the previous scroll handler iteration.
         */
        _this.wasDocked = true;
        /**
         * Indicates if the top app bar is docked in the fully shown position.
         */
        _this.isDockedShowing = true;
        /**
         * Variable for current scroll position of the top app bar
         */
        _this.currentAppBarOffsetTop = 0;
        /**
         * Used to prevent the top app bar from being scrolled out of view during resize events
         */
        _this.isCurrentlyBeingResized = false;
        /**
         * The timeout that's used to throttle the resize events
         */
        _this.resizeThrottleId = INITIAL_VALUE;
        /**
         * The timeout that's used to debounce toggling the isCurrentlyBeingResized
         * variable after a resize
         */
        _this.resizeDebounceId = INITIAL_VALUE;
        _this.lastScrollPosition = _this.adapter.getViewportScrollY();
        _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
        return _this;
    }
    MDCTopAppBarFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.adapter.setStyle('top', '');
    };
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     */
    MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
        // If the window is being resized the lastScrollPosition needs to be updated
        // but the current scroll of the top app bar should stay in the same
        // position.
        if (!this.isCurrentlyBeingResized) {
            this.currentAppBarOffsetTop -= diff;
            if (this.currentAppBarOffsetTop > 0) {
                this.currentAppBarOffsetTop = 0;
            }
            else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) {
                this.currentAppBarOffsetTop = -this.topAppBarHeight;
            }
            this.moveTopAppBar();
        }
    };
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     */
    MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
        var _this = this;
        // Throttle resize events 10 p/s
        if (!this.resizeThrottleId) {
            this.resizeThrottleId = setTimeout(function () {
                _this.resizeThrottleId = INITIAL_VALUE;
                _this.throttledResizeHandler();
            }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        }
        this.isCurrentlyBeingResized = true;
        if (this.resizeDebounceId) {
            clearTimeout(this.resizeDebounceId);
        }
        this.resizeDebounceId = setTimeout(function () {
            _this.handleTargetScroll();
            _this.isCurrentlyBeingResized = false;
            _this.resizeDebounceId = INITIAL_VALUE;
        }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    /**
     * Function to determine if the DOM needs to update.
     */
    MDCTopAppBarFoundation.prototype.checkForUpdate = function () {
        var offscreenBoundaryTop = -this.topAppBarHeight;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        // If it's partially showing, it can't be docked.
        if (partiallyShowing) {
            this.wasDocked = false;
        }
        else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked) {
                this.wasDocked = true;
                return true;
            }
            else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
                this.isDockedShowing = hasAnyPixelsOnscreen;
                return true;
            }
        }
        return partiallyShowing;
    };
    /**
     * Function to move the top app bar if needed.
     */
    MDCTopAppBarFoundation.prototype.moveTopAppBar = function () {
        if (this.checkForUpdate()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop;
            if (Math.abs(offset) >= this.topAppBarHeight) {
                offset = -_constants__WEBPACK_IMPORTED_MODULE_1__.numbers.MAX_TOP_APP_BAR_HEIGHT;
            }
            this.adapter.setStyle('top', offset + 'px');
        }
    };
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */
    MDCTopAppBarFoundation.prototype.throttledResizeHandler = function () {
        var currentHeight = this.adapter.getTopAppBarHeight();
        if (this.topAppBarHeight !== currentHeight) {
            this.wasDocked = false;
            // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.
            this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
            this.topAppBarHeight = currentHeight;
        }
        this.handleTargetScroll();
    };
    return MDCTopAppBarFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCTopAppBarBaseFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/component/topAppBar.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/component/topAppBar.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mdc-elevation--z0 {\n  /* @alternate */\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z1 {\n  /* @alternate */\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z2 {\n  /* @alternate */\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z3 {\n  /* @alternate */\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z4 {\n  /* @alternate */\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z5 {\n  /* @alternate */\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z6 {\n  /* @alternate */\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z7 {\n  /* @alternate */\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z8 {\n  /* @alternate */\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z9 {\n  /* @alternate */\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z10 {\n  /* @alternate */\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z11 {\n  /* @alternate */\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z12 {\n  /* @alternate */\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z13 {\n  /* @alternate */\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z14 {\n  /* @alternate */\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z15 {\n  /* @alternate */\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z16 {\n  /* @alternate */\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z17 {\n  /* @alternate */\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z18 {\n  /* @alternate */\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z19 {\n  /* @alternate */\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z20 {\n  /* @alternate */\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z21 {\n  /* @alternate */\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z22 {\n  /* @alternate */\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z23 {\n  /* @alternate */\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z24 {\n  /* @alternate */\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation-transition {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n}\n\n.mdc-top-app-bar {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-theme-primary, #6200ee);\n  color: white;\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  width: 100%;\n  z-index: 4;\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-theme-on-primary, #fff);\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item::before, .mdc-top-app-bar .mdc-top-app-bar__action-item::after,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before, .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.08);\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before, .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n.mdc-top-app-bar__row {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 64px;\n}\n.mdc-top-app-bar__section {\n  display: inline-flex;\n  flex: 1 1 auto;\n  align-items: center;\n  min-width: 0;\n  padding: 8px 12px;\n  z-index: 1;\n}\n.mdc-top-app-bar__section--align-start {\n  justify-content: flex-start;\n  order: -1;\n}\n.mdc-top-app-bar__section--align-end {\n  justify-content: flex-end;\n  order: 1;\n}\n.mdc-top-app-bar__title {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 20px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  z-index: 1;\n}\n[dir=rtl] .mdc-top-app-bar__title, .mdc-top-app-bar__title[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 20px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--short-collapsed {\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .mdc-top-app-bar--short-collapsed, .mdc-top-app-bar--short-collapsed[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 24px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--short {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  right: auto;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  width: 100%;\n  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n[dir=rtl] .mdc-top-app-bar--short, .mdc-top-app-bar--short[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--short .mdc-top-app-bar__row {\n  height: 56px;\n}\n.mdc-top-app-bar--short .mdc-top-app-bar__section {\n  padding: 4px;\n}\n.mdc-top-app-bar--short .mdc-top-app-bar__title {\n  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n}\n\n.mdc-top-app-bar--short-collapsed {\n  /* @alternate */\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  width: 56px;\n  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title {\n  display: none;\n}\n.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item {\n  transition: padding 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item {\n  width: 112px;\n}\n.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end, .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--dense .mdc-top-app-bar__row {\n  height: 48px;\n}\n.mdc-top-app-bar--dense .mdc-top-app-bar__section {\n  padding: 0 4px;\n}\n.mdc-top-app-bar--dense .mdc-top-app-bar__title {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title, .mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--prominent .mdc-top-app-bar__row {\n  height: 128px;\n}\n.mdc-top-app-bar--prominent .mdc-top-app-bar__title {\n  align-self: flex-end;\n  padding-bottom: 2px;\n}\n.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,\n.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon {\n  align-self: flex-start;\n}\n\n.mdc-top-app-bar--fixed {\n  transition: box-shadow 200ms linear;\n}\n\n.mdc-top-app-bar--fixed-scrolled {\n  /* @alternate */\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 200ms linear;\n}\n\n.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row {\n  height: 96px;\n}\n.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section {\n  padding: 0 12px;\n}\n.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 20px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  padding-bottom: 9px;\n}\n[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title, .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 20px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--fixed-adjust {\n  padding-top: 64px;\n}\n\n.mdc-top-app-bar--dense-fixed-adjust {\n  padding-top: 48px;\n}\n\n.mdc-top-app-bar--short-fixed-adjust {\n  padding-top: 56px;\n}\n\n.mdc-top-app-bar--prominent-fixed-adjust {\n  padding-top: 128px;\n}\n\n.mdc-top-app-bar--dense-prominent-fixed-adjust {\n  padding-top: 96px;\n}\n\n@media (max-width: 599px) {\n  .mdc-top-app-bar__row {\n    height: 56px;\n  }\n  .mdc-top-app-bar__section {\n    padding: 4px;\n  }\n  .mdc-top-app-bar--short {\n    transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .mdc-top-app-bar--short-collapsed {\n    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: 0;\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: 12px;\n  }\n  [dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end, .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl] {\n    /*rtl:begin:ignore*/\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: 12px;\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: 0;\n    /*rtl:end:ignore*/\n  }\n  .mdc-top-app-bar--prominent .mdc-top-app-bar__title {\n    padding-bottom: 6px;\n  }\n  .mdc-top-app-bar--fixed-adjust {\n    padding-top: 56px;\n  }\n}\n.mdc-icon-button {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n}\n.mdc-icon-button .mdc-icon-button__focus-ring {\n  display: none;\n}\n.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring {\n  display: block;\n  max-height: 48px;\n  max-width: 48px;\n}\n@media screen and (forced-colors: active) {\n  .mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring {\n    pointer-events: none;\n    border: 2px solid transparent;\n    border-radius: 6px;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    left: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    transform: translate(-50%, -50%);\n    height: 100%;\n    width: 100%;\n  }\n}\n@media screen and (forced-colors: active) and (forced-colors: active) {\n  .mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring {\n    border-color: CanvasText;\n  }\n}\n@media screen and (forced-colors: active) {\n  .mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after {\n    content: \"\";\n    border: 2px solid transparent;\n    border-radius: 8px;\n    display: block;\n    position: absolute;\n    top: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    left: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    transform: translate(-50%, -50%);\n    height: calc(100% + 4px);\n    width: calc(100% + 4px);\n  }\n}\n@media screen and (forced-colors: active) and (forced-colors: active) {\n  .mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple {\n  width: 40px;\n  height: 40px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring, .mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring {\n  max-height: 40px;\n  max-width: 40px;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n.mdc-icon-button svg,\n.mdc-icon-button img {\n  width: 24px;\n  height: 24px;\n}\n\n.mdc-icon-button {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 0;\n  overflow: visible;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-icon-button--display-flex {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n\n.mdc-icon-button__icon {\n  display: inline-block;\n}\n.mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: none;\n}\n\n.mdc-icon-button--on .mdc-icon-button__icon {\n  display: none;\n}\n.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: inline-block;\n}\n\n.mdc-icon-button__link {\n  height: 100%;\n  left: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-icon-button {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-icon-button .mdc-icon-button__ripple::before,\n.mdc-icon-button .mdc-icon-button__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-icon-button .mdc-icon-button__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-icon-button .mdc-icon-button__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-icon-button.mdc-ripple-upgraded--unbounded .mdc-icon-button__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-icon-button.mdc-ripple-upgraded--foreground-activation .mdc-icon-button__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation .mdc-icon-button__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-icon-button .mdc-icon-button__ripple::before,\n.mdc-icon-button .mdc-icon-button__ripple::after {\n  top: calc(50% - 50%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before,\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-icon-button .mdc-icon-button__ripple::before, .mdc-icon-button .mdc-icon-button__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-icon-button:hover .mdc-icon-button__ripple::before, .mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-icon-button.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-icon-button .mdc-icon-button__ripple {\n  height: 100%;\n  left: 0px;\n  pointer-events: none;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  z-index: -1;\n}", "",{"version":3,"sources":["webpack://./node_modules/@material/elevation/_elevation.scss","webpack://./node_modules/@material/elevation/_elevation-theme.scss","webpack://./src/component/topAppBar.scss","webpack://./node_modules/@material/top-app-bar/mdc-top-app-bar.scss","webpack://./node_modules/@material/theme/_css.scss","webpack://./node_modules/@material/theme/_gss.scss","webpack://./node_modules/@material/top-app-bar/_mixins.scss","webpack://./node_modules/@material/ripple/_ripple-theme.scss","webpack://./node_modules/@material/top-app-bar/_variables.scss","webpack://./node_modules/@material/typography/_typography.scss","webpack://./node_modules/@material/rtl/_rtl.scss","webpack://./node_modules/@material/icon-button/_icon-button.scss","webpack://./node_modules/@material/icon-button/_icon-button-theme.scss","webpack://./node_modules/@material/dom/_dom.scss","webpack://./node_modules/@material/focus-ring/_focus-ring.scss","webpack://./node_modules/@material/touch-target/_touch-target.scss","webpack://./node_modules/@material/ripple/_ripple.scss","webpack://./node_modules/@material/animation/_animation.scss"],"names":[],"mappings":"AAqCI;ECkQE,eAAA;EACA,wHAqGS;AC1Yf;;AFkCI;ECkQE,eAAA;EACA,yHAqGS;ACrYf;;AF6BI;ECkQE,eAAA;EACA,yHAqGS;AChYf;;AFwBI;ECkQE,eAAA;EACA,yHAqGS;AC3Xf;;AFmBI;ECkQE,eAAA;EACA,0HAqGS;ACtXf;;AFcI;ECkQE,eAAA;EACA,0HAqGS;ACjXf;;AFSI;ECkQE,eAAA;EACA,2HAqGS;AC5Wf;;AFII;ECkQE,eAAA;EACA,2HAqGS;ACvWf;;AFDI;ECkQE,eAAA;EACA,2HAqGS;AClWf;;AFNI;ECkQE,eAAA;EACA,2HAqGS;AC7Vf;;AFXI;ECkQE,eAAA;EACA,4HAqGS;ACxVf;;AFhBI;ECkQE,eAAA;EACA,4HAqGS;ACnVf;;AFrBI;ECkQE,eAAA;EACA,4HAqGS;AC9Uf;;AF1BI;ECkQE,eAAA;EACA,4HAqGS;ACzUf;;AF/BI;ECkQE,eAAA;EACA,4HAqGS;ACpUf;;AFpCI;ECkQE,eAAA;EACA,4HAqGS;AC/Tf;;AFzCI;ECkQE,eAAA;EACA,6HAqGS;AC1Tf;;AF9CI;ECkQE,eAAA;EACA,6HAqGS;ACrTf;;AFnDI;ECkQE,eAAA;EACA,6HAqGS;AChTf;;AFxDI;ECkQE,eAAA;EACA,6HAqGS;AC3Sf;;AF7DI;ECkQE,eAAA;EACA,8HAqGS;ACtSf;;AFlEI;ECkQE,eAAA;EACA,8HAqGS;ACjSf;;AFvEI;ECkQE,eAAA;EACA,8HAqGS;AC5Rf;;AF5EI;ECkQE,eAAA;EACA,8HAqGS;ACvRf;;AFjFI;ECkQE,eAAA;EACA,8HAqGS;AClRf;;AFjFE;EAEI,yDAAA;EAIA,uBCiFK;ACDX;;AC/FA;ECiCM,yBAAA;ECZF,eAAA;EDwBA,mDAAA;EAAA,YAAA;EDzCF,aAAA;EACA,eAAA;EACA,sBAAA;EACA,8BAAA;EACA,sBAAA;EACA,WAAA;EACA,UAAA;ADmGF;AIxFE;;EFYI,WAAA;ECZF,eAAA;EDwBA,wCAAA;AFsEJ;AKMI;;;EHxFE,sBAAA;ECZF,eAAA;EDwBA,4EAAA;AF6EJ;AKwYE;;;EHjeI,aAAA;ECZF,eAAA;EDwBA,8CAAA;AFoFJ;AKiYE;;;EA9QI,yBAAA;EHnNA,aAAA;ECZF,eAAA;EDwBA,8CAAA;AF4FJ;AKqIM;;EAEI,gCAAA;ALnIV;AKwIQ;;EAEI,yBAhRO;EH0Bb,aAAA;ECZF,eAAA;EDwBA,8CAAA;AFuGJ;AK8II;;EHrPA,8DAAA;AF2GJ;AC5IE;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YK3BS;ANyKb;AC3IE;EACE,oBAAA;EACA,cAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EAEA,UAAA;AD4IJ;AC1II;EACE,2BAAA;EACA,SAAA;AD4IN;ACzII;EACE,yBAAA;EACA,QAAA;AD2IN;ACvIE;EM+PE,kCAAA;EACA,mCAAA;ELvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,wEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,iFAAA;UAAA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,kBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,gBAAA;EDDA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;ADiKJ;AQjKM;EACE,mBAAA;ELtBJ,YAAA,EAAA,aAAA;EDmBA,eAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,mBAAA;EMKI,iBAAA;ARsKR;;AI/KE;EDfE,YAAA,EAAA,aAAA;EDmBA,yBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,0BAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,gCAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,4BAAA;AFsLJ;AQpLM;EACE,mBAAA;ELtBJ,YAAA,EAAA,aAAA;EDmBA,yBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,0BAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,6BAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,+BAAA;EMKI,iBAAA;AR6LR;;ACxLA;EACE,MAAA;EE9BE,YAAA,EAAA,aAAA;EFgCF,WAAA;EEhCE,YAAA,EAAA,aAAA;EFkCF,OAAA;EACA,WAAA;EACA,oDAAA;AD2LF;AQ1MM;EACE,mBAAA;ELtBJ,YAAA,EAAA,aAAA;EFwCA,QAAA;EExCA,YAAA,EAAA,aAAA;EF0CA,UAAA;EOlBI,iBAAA;AR+MR;;AC1LE;EACE,YK1EgB;ANuQpB;AC1LE;EACE,YK7EqB;ANyQzB;ACzLE;EACE,sDAAA;EAEA,UAAA;AD0LJ;;ACtLA;EFgLM,eAAA;EACA,0HAqGS;EEnRb,WKtFsB;ELuFtB,oDAAA;ADyLF;ACvLE;EACE,aAAA;ADyLJ;ACtLE;EACE,sDAAA;ADwLJ;;ACnLA;EACE,YAAA;ADsLF;ACpLE;EE/EE,YAAA,EAAA,aAAA;EDmBA,eAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,mBAAA;AFsPJ;AQpPM;EACE,mBAAA;ELtBJ,YAAA,EAAA,aAAA;EDmBA,kBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,gBAAA;EMKI,iBAAA;ARyPR;;AC5LE;EACE,YKlGe;ANiSnB;AC5LE;EACE,cAAA;AD8LJ;AC3LE;EE7FE,YAAA,EAAA,aAAA;EDmBA,kBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,gBAAA;AF2QJ;AQzQM;EACE,mBAAA;ELtBJ,YAAA,EAAA,aAAA;EDmBA,eAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,mBAAA;EMKI,iBAAA;AR8QR;;AC/LE;EACE,aK3HmB;AN6TvB;AC/LE;EACE,oBAAA;EACA,mBK/H6B;ANgUjC;AC9LE;;EAEE,sBAAA;ADgMJ;;AC5LA;EACE,mCAAA;AD+LF;;AC5LA;EFkHM,eAAA;EACA,0HAqGS;EErNb,mCAAA;AD+LF;;AC1LE;EACE,YAAA;AD6LJ;AC1LE;EACE,eAAA;AD4LJ;ACzLE;EE1IE,YAAA,EAAA,aAAA;EDmBA,kBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,gBAAA;ED0HA,mBKpJmC;ANiVvC;AQrTM;EACE,mBAAA;ELtBJ,YAAA,EAAA,aAAA;EDmBA,eAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,mBAAA;EMKI,iBAAA;AR0TR;;ACjMA;EACE,iBKtLW;AN0Xb;;ACjMA;EACE,iBKlKiB;ANsWnB;;ACjMA;EACE,iBKtLkB;AN0XpB;;ACjMA;EACE,kBKjLqB;ANqXvB;;ACjMA;EACE,iBAAA;ADoMF;;AIzUE;EACE;IACE,YE3Dc;ENuYlB;EIzUE;IACE,YE9DmB;ENyYvB;EIxUE;IACE,oDAAA;EJ0UJ;EItUE;IACE,oDAAA;EJwUJ;EIrUI;ID/CF,YAAA,EAAA,aAAA;IDmBA,eAAA;ICnBA,YAAA,EAAA,aAAA;IDmBA,mBAAA;EFuWF;EQrWI;IACE,mBAAA;ILtBJ,YAAA,EAAA,aAAA;IDmBA,kBAAA;ICnBA,YAAA,EAAA,aAAA;IDmBA,gBAAA;IMKI,iBAAA;ER0WN;EIzUI;IACE,mBEzEgC;ENoZtC;EIvUE;IACE,iBE3Fc;ENoalB;AACF;AS1UE;EAEI,eChFM;EAuGR,WAnBK;EAoBL,YApBK;EAqBL,aAAA;AVqTJ;AUlTE;EAEI,aAAA;AVmTN;AU9SI;EAUI,cAAA;EACA,gBA1CC;EA2CD,eA3CC;AVkVT;AWpXI;EDiEA;IEzFA,oBAAA;IACA,6BAAA;IACA,kBAAA;IACA,uBAAA;IACA,kBAAA;IACA,QAAA;IThBA,YAAA,EAAA,aAAA;ISkBA,SAAA;ITlBA,YAAA,EAAA,aAAA;ISoBA,gCAAA;IACA,YA3BwB;IA4BxB,WAtB0B;EZsa5B;AACF;AWpYI;EDiEA;IE3EE,wBAAA;EZkZJ;AACF;AWzYI;ECPA;IACE,WAAA;IACA,6BAAA;IACA,kBAhEgB;IAiEhB,cAAA;IACA,kBAAA;IACA,QAAA;ITlCF,YAAA,EAAA,aAAA;ISoCE,SAAA;ITpCF,YAAA,EAAA,aAAA;ISsCE,gCAAA;IACA,wBA/BgB;IAgChB,uBAhCgB;EZmbpB;AACF;AWzZI;ECPA;IAeI,wBAAA;EZqZN;AACF;AUnUI;EAEI,WALe;EAMf,YANe;EGjFnB,eAHsB;EAItB,kBAJsB;EAcpB,iBANwB;EAOxB,gBAPwB;Ab0Z9B;AU3TM;EAEI,gBArBa;EAsBb,eAtBa;AVkVvB;AUtTE;EGhJE,kBAAA;EACA,QAAA;EACA,YH4DK;EPrEL,YAAA,EAAA,aAAA;EUeE,SAAA;EACA,WHqDG;EGpDH,gCAAA;AbqcN;AU1HE;ERrVI,0BAAA;ECZF,eAAA;EDwBA,mEAAA;AFwcJ;AShZI;;EAGI,WC7FI;ED8FJ,YC9FI;AV+eZ;;ASnfE;EAEI,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,UAAA;EACA,iBAAA;ATqfN;ASlfI;EISA,kBAAA;EACA,QAAA;EACA,YAtCK;EV6BL,YAAA,EAAA,aAAA;EUeE,SAAA;EACA,WA7CG;EA8CH,gCAAA;AbweN;AS7XE;EArHM,eAAA;EACA,oBAAA;ATqfR;;AShfE;EAEI,mBAAA;EACA,oBAAA;EACA,uBAAA;ATkfN;;AS9eE;EAEI,qBAAA;ATgfN;AS7eI;EAEI,aAAA;AT8eR;;ASxeI;EAEI,aAAA;AT0eR;ASveM;EAEI,qBAAA;ATweV;;ASjeE;EAEI,YAAA;EACA,OAAA;EACA,aAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;ATmeN;;AcrSE;EACE;IACE,uDC3R2B;IDgS3B,sEAAA;EdoSJ;EcjSE;IACE,gGAAA;EdmSJ;AACF;Ac/RE;EACE;IACE,iCAAA;IACA,UAAA;EdiSJ;Ec9RE;IACE,wCAAA;EdgSJ;AACF;Ac7RE;EACE;IACE,iCAAA;IACA,wCAAA;Ed+RJ;Ec5RE;IACE,UAAA;Ed8RJ;AACF;AS5dE;EKnCE,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,wBAAA;EACA,gCAAA;EACA,kCAAA;EAEA,6CAAA;EAGE,+BAAA;Ad+fN;Ac3fE;;EAGI,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;Ad4fN;AcxfE;EAGI,6DAAA;EZ5EA,UAAA;ECZF,eAAA;EDwBA,qCAAA;AF2jBJ;Ac9eE;EZzFI,UAAA;ECZF,eAAA;EDwBA,qCAAA;AFgkBJ;AcveI;EAEI,+CAAA;AdweR;AcpeI;EAEI,MAAA;EXpHJ,YAAA,EAAA,aAAA;EWsHI,OAAA;EACA,mBAAA;EACA,+BAAA;AdqeR;Ac/dI;EAEI,6BAAA;EXhIJ,YAAA,EAAA,aAAA;EWkII,+BAAA;AdgeR;Ac1dI;EAEI,yFAAA;Ad2dR;AcndI;EAEI,0CAAA;EAKA,gGAAA;AdgdR;ActaE;;EAGI,oBAAA;EXtMF,YAAA,EAAA,aAAA;EWwME,qBAAA;EACA,WAZK;EAaL,YAbK;AdobX;AclaI;;EAGI,2CAAA;EXlNJ,YAAA,EAAA,aAAA;EWoNI,6CAAA;EACA,sCAAA;EACA,uCAAA;AdmaR;Ac/ZI;EAEI,sCAAA;EACA,uCAAA;AdgaR;AK9hBI;EHxFE,sBAAA;ECZF,eAAA;EDwBA,+CAAA;AF+mBJ;AK1JE;EHjeI,aAAA;ECZF,eAAA;EDwBA,8CAAA;AFonBJ;AK/JE;EA9QI,yBAAA;EHnNA,aAAA;ECZF,eAAA;EDwBA,8CAAA;AF0nBJ;AKzZM;EAEI,gCAAA;AL0ZV;AKrZQ;EAEI,yBAhRO;EH0Bb,aAAA;ECZF,eAAA;EDwBA,8CAAA;AFmoBJ;AK9YI;EHrPA,8DAAA;AFsoBJ;ASjjBI;EAGI,YAAA;EACA,SAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;ATijBR","sourcesContent":["//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/theme/custom-properties';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n@use './elevation-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @for $z-value from 0 through 24 {\n    .mdc-elevation--z#{$z-value} {\n      @include elevation-theme.elevation($z-value, $query: $query);\n    }\n  }\n\n  .mdc-elevation-transition {\n    @include feature-targeting.targets($feat-animation) {\n      transition: elevation-theme.transition-value();\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      will-change: elevation-theme.$property;\n    }\n  }\n}\n\n///\n/// Called once per application to set up the global default elevation styles.\n///\n@mixin overlay-common($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-elevation-overlay {\n    @include feature-targeting.targets($feat-structure) {\n      @include base-mixins.emit-once('mdc-elevation/common/structure') {\n        position: absolute;\n        border-radius: inherit;\n        pointer-events: none;\n\n        @include theme.property(\n          opacity,\n          custom-properties.create(--mdc-elevation-overlay-opacity, 0)\n        );\n      }\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      @include base-mixins.emit-once('mdc-elevation/common/animation') {\n        transition: elevation-theme.overlay-transition-value();\n      }\n    }\n\n    @include base-mixins.emit-once('mdc-elevation/common/color') {\n      $fill-color: custom-properties.create(\n        --mdc-elevation-overlay-color,\n        elevation-theme.$overlay-color\n      );\n      @include elevation-theme.overlay-fill-color($fill-color, $query: $query);\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use 'sass:math';\n@use 'sass:meta';\n@use '@material/animation/variables' as animation-variables;\n@use '@material/theme/custom-properties';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/css';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n\n$baseline-color: black !default;\n$umbra-opacity: 0.2 !default;\n$penumbra-opacity: 0.14 !default;\n$ambient-opacity: 0.12 !default;\n\n$umbra-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 2px 1px -1px',\n  2: '0px 3px 1px -2px',\n  3: '0px 3px 3px -2px',\n  4: '0px 2px 4px -1px',\n  5: '0px 3px 5px -1px',\n  6: '0px 3px 5px -1px',\n  7: '0px 4px 5px -2px',\n  8: '0px 5px 5px -3px',\n  9: '0px 5px 6px -3px',\n  10: '0px 6px 6px -3px',\n  11: '0px 6px 7px -4px',\n  12: '0px 7px 8px -4px',\n  13: '0px 7px 8px -4px',\n  14: '0px 7px 9px -4px',\n  15: '0px 8px 9px -5px',\n  16: '0px 8px 10px -5px',\n  17: '0px 8px 11px -5px',\n  18: '0px 9px 11px -5px',\n  19: '0px 9px 12px -6px',\n  20: '0px 10px 13px -6px',\n  21: '0px 10px 13px -6px',\n  22: '0px 10px 14px -6px',\n  23: '0px 11px 14px -7px',\n  24: '0px 11px 15px -7px',\n) !default;\n\n$penumbra-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 1px 1px 0px',\n  2: '0px 2px 2px 0px',\n  3: '0px 3px 4px 0px',\n  4: '0px 4px 5px 0px',\n  5: '0px 5px 8px 0px',\n  6: '0px 6px 10px 0px',\n  7: '0px 7px 10px 1px',\n  8: '0px 8px 10px 1px',\n  9: '0px 9px 12px 1px',\n  10: '0px 10px 14px 1px',\n  11: '0px 11px 15px 1px',\n  12: '0px 12px 17px 2px',\n  13: '0px 13px 19px 2px',\n  14: '0px 14px 21px 2px',\n  15: '0px 15px 22px 2px',\n  16: '0px 16px 24px 2px',\n  17: '0px 17px 26px 2px',\n  18: '0px 18px 28px 2px',\n  19: '0px 19px 29px 2px',\n  20: '0px 20px 31px 3px',\n  21: '0px 21px 33px 3px',\n  22: '0px 22px 35px 3px',\n  23: '0px 23px 36px 3px',\n  24: '0px 24px 38px 3px',\n) !default;\n\n$ambient-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 1px 3px 0px',\n  2: '0px 1px 5px 0px',\n  3: '0px 1px 8px 0px',\n  4: '0px 1px 10px 0px',\n  5: '0px 1px 14px 0px',\n  6: '0px 1px 18px 0px',\n  7: '0px 2px 16px 1px',\n  8: '0px 3px 14px 2px',\n  9: '0px 3px 16px 2px',\n  10: '0px 4px 18px 3px',\n  11: '0px 4px 20px 3px',\n  12: '0px 5px 22px 4px',\n  13: '0px 5px 24px 4px',\n  14: '0px 5px 26px 4px',\n  15: '0px 6px 28px 5px',\n  16: '0px 6px 30px 5px',\n  17: '0px 6px 32px 5px',\n  18: '0px 7px 34px 6px',\n  19: '0px 7px 36px 6px',\n  20: '0px 8px 38px 7px',\n  21: '0px 8px 40px 7px',\n  22: '0px 8px 42px 7px',\n  23: '0px 9px 44px 8px',\n  24: '0px 9px 46px 8px',\n) !default;\n\n// The css property used for elevation. In most cases this should not be changed. It is exposed\n// as a variable for abstraction / easy use when needing to reference the property directly, for\n// example in a `will-change` rule.\n$property: box-shadow !default;\n\n// The default color for the elevation overlay.\n$overlay-color: #fff;\n\n// The css property used for elevation overlay transitions. In most cases this should not be changed. It is exposed\n// as a variable for abstraction / easy use when needing to reference the property directly, for\n// example in a `will-change` rule.\n$overlay-property: opacity !default;\n\n// The default duration value for elevation transitions.\n$transition-duration: 280ms !default;\n\n// The default easing value for elevation transitions.\n$transition-timing-function: animation-variables.$standard-curve-timing-function !default;\n\n///\n/// Sets the elevation transition value.\n///\n/// @param {String} $duration - The duration of the transition.\n/// @param {String} $easing - The easing function for the transition.\n/// @return {String}\n///\n@function transition-value(\n  $duration: $transition-duration,\n  $easing: $transition-timing-function\n) {\n  @return #{$property} #{$duration} #{$easing};\n}\n\n///\n/// Sets the elevation overlay transition value.\n///\n/// @param {String} $duration - The duration of the transition.\n/// @param {String} $easing - The easing function for the transition.\n/// @return {String}\n///\n@function overlay-transition-value(\n  $duration: $transition-duration,\n  $easing: $transition-timing-function\n) {\n  @return #{$overlay-property} #{$duration} #{$easing};\n}\n\n///\n/// Creates a box-shadow from the Material elevation system.\n/// @param {Number} $level - the level of the Material elevation system.\n/// @param {String} $color - the color of the shadow.\n/// @param {Number} $opacity-boost [0] - optional opacity boost for the shadow.\n/// @return {List} the complete box shadow.\n///\n@function _box-shadow($level, $color, $opacity-boost: 0) {\n  $color: theme-color.prop-value($color);\n  $umbra-z-value: map.get($umbra-map, $level);\n  $penumbra-z-value: map.get($penumbra-map, $level);\n  $ambient-z-value: map.get($ambient-map, $level);\n\n  $umbra-color: rgba($color, $umbra-opacity + $opacity-boost);\n  $penumbra-color: rgba($color, $penumbra-opacity + $opacity-boost);\n  $ambient-color: rgba($color, $ambient-opacity + $opacity-boost);\n\n  @return (\n    #{'#{$umbra-z-value} #{$umbra-color}'},\n    #{'#{$penumbra-z-value} #{$penumbra-color}'},\n    #{$ambient-z-value} $ambient-color\n  );\n}\n\n// Returns the correct box-shadow specified by $z-value.\n// The $z-value must be between 0 and 24.\n// If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n// $opacity-boost.\n@function elevation-box-shadow(\n  $z-value,\n  $color: $baseline-color,\n  $opacity-boost: 0\n) {\n  @if meta.type-of($z-value) != number or not math.is-unitless($z-value) {\n    @error \"$z-value must be a unitless number, but received '#{$z-value}'\";\n  }\n\n  @if $z-value < 0 or $z-value > 24 {\n    @error \"$z-value must be between 0 and 24, but received '#{$z-value}'\";\n  }\n\n  @return _box-shadow($z-value, $color, $opacity-boost);\n}\n\n///\n/// Returns a shadow or null if params are invalid.\n/// @param {Number} $level - the level of the Material elevation system.\n/// @param {String} $color - the color of the shadow.\n/// @return {List|null} the complete box shadow or null.\n///\n@function _shadow($level, $color) {\n  @if $level == null and $color == null {\n    // Do not emit a warning if both are null, which means the user did not\n    // provide tokens.\n    @return null;\n  }\n\n  @if $level == null or $color == null {\n    // If one of the tokens is null, emit a warning: the user may not realize\n    // that both are required.\n    @warn \"both $level and $color are required; received $level: '#{$level}', $color: '#{$color}'\";\n    @return null;\n  }\n\n  @if $level < 0 or $level > 24 {\n    @warn \"$level must be between 0 and 24; received '#{$level}'\";\n    @return null;\n  }\n\n  @return _box-shadow($level, $color);\n}\n\n@function get-elevation($level) {\n  @return (box-shadow: elevation-box-shadow($level));\n}\n\n///\n/// Sets the shadow of the element.\n///\n/// @param {String} $box-shadow - The shadow to apply to the element.\n///\n@mixin _box-shadow($shadow, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(box-shadow, $shadow);\n  }\n}\n\n///\n/// Sets the shadow of the element.\n///\n/// @param {String} $box-shadow - The shadow to apply to the element.\n///\n@mixin shadow($box-shadow, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @if custom-properties.is-custom-prop($box-shadow) {\n      // TODO(b/185188458): Use theme.property() once resolved.\n      $fallback: custom-properties.get-fallback($box-shadow);\n\n      // var(--<box-shadow-prop>, var(--m-elevation-box-shadow-for-gss))\n      $gss-custom-prop: custom-properties.create(\n        custom-properties.get-varname($box-shadow),\n        custom-properties.create(elevation-box-shadow-for-gss)\n      );\n\n      $value: custom-properties.create-var($gss-custom-prop);\n      @if $value == null {\n        // Custom properties are disabled, since $gss-custom-prop\n        // does not have a fallback. Avoid emitting two non-custom\n        // prop declarations by setting $fallback to null.\n        $value: $fallback;\n        $fallback: null;\n      }\n\n      @include custom-properties.declaration(\n        custom-properties.create(elevation-box-shadow-for-gss, $fallback)\n      );\n      @include css.declaration(box-shadow, $value, $fallback-value: $fallback);\n    } @else {\n      /* @alternate */\n      box-shadow: $box-shadow;\n    }\n  }\n}\n\n///\n/// Sets the elevation overlay surface required positioning.\n///\n@mixin overlay-surface-position($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    /* @alternate */\n    position: relative;\n  }\n}\n\n///\n/// Sets the dimensions of the elevation overlay, including positioning and sizing.\n///\n/// @param {Number} $width - The width of the elevation overlay\n/// @param {Number} [$height] - The height of the elevation overlay\n/// @param {Boolean} [$has-content-sizing] - Set to false if the container has no content sizing\n///\n@mixin overlay-dimensions(\n  $width,\n  $height: $width,\n  $has-content-sizing: true,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-elevation-overlay {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(width, $width);\n      @include theme.property(height, $height);\n\n      @if $has-content-sizing {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n      } @else {\n        top: 50%;\n        @include rtl.ignore-next-line();\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n    }\n  }\n}\n\n///\n/// Sets the elevation overlay fill color.\n/// Expected to be called directly on the elevation overlay element.\n///\n/// @param {Color} $color - The color of the elevation overlay.\n///\n@mixin overlay-fill-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(background-color, $color);\n  }\n}\n\n///\n/// Applies the given color to the container of the overlay.\n/// @param {color} $color - the color of the overlay container\n///\n@mixin overlay-container-color($color, $query: feature-targeting.all()) {\n  .mdc-elevation-overlay {\n    @include overlay-fill-color($color, $query: $query);\n  }\n}\n\n///\n/// Sets the elevation overlay opacity.\n/// Expected to be called from a parent element.\n///\n/// @param {Number} $opacity - The opacity of the elevation overlay.\n///\n@mixin overlay-opacity($opacity, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-elevation-overlay {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n// Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n// The $z-value must be between 0 and 24.\n// If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n// $opacity-boost.\n@mixin elevation(\n  $z-value,\n  $color: $baseline-color,\n  $opacity-boost: 0,\n  $query: feature-targeting.all()\n) {\n  $box-shadow: elevation-box-shadow(\n    $z-value,\n    $color: $color,\n    $opacity-boost: $opacity-boost\n  );\n\n  @include shadow($box-shadow, $query: $query);\n}\n\n///\n/// Represents the configurable values of the elevation theme.\n///\n$_theme-values: (\n  shadow: null,\n  overlay-opacity: null,\n  overlay-color: null,\n);\n\n///\n/// Applies the shadow theme with the given $resolver function.\n/// @param {Function} $resolver - a function that returns a valid theme config.\n///   @see resolver for an example and expected arguments and return value.\n/// Accepts the following optional keyword args:\n/// @param {Number} $elevation - the level in the elevation system.\n/// @param {String} $shadow-color - the color used for the shadow.\n///\n@mixin with-resolver($resolver, $query: feature-targeting.all(), $args...) {\n  @if $resolver {\n    @include _theme(meta.call($resolver, $args...), $query: $query);\n  }\n}\n\n///\n/// Applies the given theme with validation.\n/// @param {Map} $theme - @see $_theme-values for accepted theme properties.\n///\n@mixin theme($theme: (), $query: feature-targeting.all()) {\n  @include theme.validate-theme($_theme-values, $theme);\n  @include _theme($theme, $query: $query);\n}\n\n///\n/// Applies the given theme.\n/// @param {Map} $theme - @see $_theme-values for accepted theme properties.\n///\n@mixin _theme($theme: (), $query: feature-targeting.all()) {\n  @include shadow(map.get($theme, shadow), $query: $query);\n  @include overlay-opacity(map.get($theme, overlay-opacity), $query: $query);\n  @include overlay-container-color(\n    map.get($theme, overlay-color),\n    $query: $query\n  );\n}\n\n///\n/// Transforms the following optional parameters into a theme config.\n/// @param {Number} $elevation - the level of the elevation system in Material.\n/// @param {String} $shadow-color - the color to be used by the shadow.\n/// @return {Map} @see $_theme-values for accepted theme properties.\n///\n@function resolver($args...) {\n  $opts: meta.keywords($args);\n  $elevation: map.get($opts, elevation);\n  $shadow-color: map.get($opts, shadow-color);\n  @if custom-properties.is-custom-prop($elevation) {\n    @return _resolve-custom-props($elevation, $shadow-color);\n  }\n\n  @return (shadow: _shadow($elevation, $shadow-color));\n}\n\n@function _resolve-custom-props($elevation, $shadow-color) {\n  $fallback-dp: custom-properties.get-fallback($elevation);\n  $fallback-shadow-color: custom-properties.get-fallback($shadow-color);\n  $shadow: custom-properties.set-fallback(\n    $elevation,\n    _shadow($fallback-dp, $fallback-shadow-color)\n  );\n  @return (shadow: $shadow);\n}\n",".mdc-elevation--z0 {\n  /* @alternate */\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z1 {\n  /* @alternate */\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z2 {\n  /* @alternate */\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z3 {\n  /* @alternate */\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z4 {\n  /* @alternate */\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z5 {\n  /* @alternate */\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z6 {\n  /* @alternate */\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z7 {\n  /* @alternate */\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z8 {\n  /* @alternate */\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z9 {\n  /* @alternate */\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z10 {\n  /* @alternate */\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z11 {\n  /* @alternate */\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z12 {\n  /* @alternate */\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z13 {\n  /* @alternate */\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z14 {\n  /* @alternate */\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z15 {\n  /* @alternate */\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z16 {\n  /* @alternate */\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z17 {\n  /* @alternate */\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z18 {\n  /* @alternate */\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z19 {\n  /* @alternate */\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z20 {\n  /* @alternate */\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z21 {\n  /* @alternate */\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z22 {\n  /* @alternate */\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z23 {\n  /* @alternate */\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z24 {\n  /* @alternate */\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation-transition {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n}\n\n.mdc-top-app-bar {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-theme-primary, #6200ee);\n  color: white;\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  width: 100%;\n  z-index: 4;\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-theme-on-primary, #fff);\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item::before, .mdc-top-app-bar .mdc-top-app-bar__action-item::after,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff));\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before, .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.08);\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before, .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,\n.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n.mdc-top-app-bar__row {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 64px;\n}\n.mdc-top-app-bar__section {\n  display: inline-flex;\n  flex: 1 1 auto;\n  align-items: center;\n  min-width: 0;\n  padding: 8px 12px;\n  z-index: 1;\n}\n.mdc-top-app-bar__section--align-start {\n  justify-content: flex-start;\n  order: -1;\n}\n.mdc-top-app-bar__section--align-end {\n  justify-content: flex-end;\n  order: 1;\n}\n.mdc-top-app-bar__title {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 20px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  z-index: 1;\n}\n[dir=rtl] .mdc-top-app-bar__title, .mdc-top-app-bar__title[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 20px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--short-collapsed {\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .mdc-top-app-bar--short-collapsed, .mdc-top-app-bar--short-collapsed[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 24px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--short {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  right: auto;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  width: 100%;\n  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n[dir=rtl] .mdc-top-app-bar--short, .mdc-top-app-bar--short[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--short .mdc-top-app-bar__row {\n  height: 56px;\n}\n.mdc-top-app-bar--short .mdc-top-app-bar__section {\n  padding: 4px;\n}\n.mdc-top-app-bar--short .mdc-top-app-bar__title {\n  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n}\n\n.mdc-top-app-bar--short-collapsed {\n  /* @alternate */\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  width: 56px;\n  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title {\n  display: none;\n}\n.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item {\n  transition: padding 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item {\n  width: 112px;\n}\n.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end, .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--dense .mdc-top-app-bar__row {\n  height: 48px;\n}\n.mdc-top-app-bar--dense .mdc-top-app-bar__section {\n  padding: 0 4px;\n}\n.mdc-top-app-bar--dense .mdc-top-app-bar__title {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 12px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title, .mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 12px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--prominent .mdc-top-app-bar__row {\n  height: 128px;\n}\n.mdc-top-app-bar--prominent .mdc-top-app-bar__title {\n  align-self: flex-end;\n  padding-bottom: 2px;\n}\n.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,\n.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon {\n  align-self: flex-start;\n}\n\n.mdc-top-app-bar--fixed {\n  transition: box-shadow 200ms linear;\n}\n\n.mdc-top-app-bar--fixed-scrolled {\n  /* @alternate */\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 200ms linear;\n}\n\n.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row {\n  height: 96px;\n}\n.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section {\n  padding: 0 12px;\n}\n.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 20px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  padding-bottom: 9px;\n}\n[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title, .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 20px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-top-app-bar--fixed-adjust {\n  padding-top: 64px;\n}\n\n.mdc-top-app-bar--dense-fixed-adjust {\n  padding-top: 48px;\n}\n\n.mdc-top-app-bar--short-fixed-adjust {\n  padding-top: 56px;\n}\n\n.mdc-top-app-bar--prominent-fixed-adjust {\n  padding-top: 128px;\n}\n\n.mdc-top-app-bar--dense-prominent-fixed-adjust {\n  padding-top: 96px;\n}\n\n@media (max-width: 599px) {\n  .mdc-top-app-bar__row {\n    height: 56px;\n  }\n  .mdc-top-app-bar__section {\n    padding: 4px;\n  }\n  .mdc-top-app-bar--short {\n    transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .mdc-top-app-bar--short-collapsed {\n    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end {\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: 0;\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: 12px;\n  }\n  [dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end, .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl] {\n    /*rtl:begin:ignore*/\n    /* @noflip */ /*rtl:ignore*/\n    padding-left: 12px;\n    /* @noflip */ /*rtl:ignore*/\n    padding-right: 0;\n    /*rtl:end:ignore*/\n  }\n  .mdc-top-app-bar--prominent .mdc-top-app-bar__title {\n    padding-bottom: 6px;\n  }\n  .mdc-top-app-bar--fixed-adjust {\n    padding-top: 56px;\n  }\n}\n.mdc-icon-button {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n}\n.mdc-icon-button .mdc-icon-button__focus-ring {\n  display: none;\n}\n.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring {\n  display: block;\n  max-height: 48px;\n  max-width: 48px;\n}\n@media screen and (forced-colors: active) {\n  .mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring {\n    pointer-events: none;\n    border: 2px solid transparent;\n    border-radius: 6px;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    left: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    transform: translate(-50%, -50%);\n    height: 100%;\n    width: 100%;\n  }\n}\n@media screen and (forced-colors: active) and (forced-colors: active) {\n  .mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring {\n    border-color: CanvasText;\n  }\n}\n@media screen and (forced-colors: active) {\n  .mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after {\n    content: \"\";\n    border: 2px solid transparent;\n    border-radius: 8px;\n    display: block;\n    position: absolute;\n    top: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    left: 50%;\n    /* @noflip */ /*rtl:ignore*/\n    transform: translate(-50%, -50%);\n    height: calc(100% + 4px);\n    width: calc(100% + 4px);\n  }\n}\n@media screen and (forced-colors: active) and (forced-colors: active) {\n  .mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple {\n  width: 40px;\n  height: 40px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring, .mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring {\n  max-height: 40px;\n  max-width: 40px;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n.mdc-icon-button svg,\n.mdc-icon-button img {\n  width: 24px;\n  height: 24px;\n}\n\n.mdc-icon-button {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n  z-index: 0;\n  overflow: visible;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-icon-button--display-flex {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n\n.mdc-icon-button__icon {\n  display: inline-block;\n}\n.mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: none;\n}\n\n.mdc-icon-button--on .mdc-icon-button__icon {\n  display: none;\n}\n.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: inline-block;\n}\n\n.mdc-icon-button__link {\n  height: 100%;\n  left: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-icon-button {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-icon-button .mdc-icon-button__ripple::before,\n.mdc-icon-button .mdc-icon-button__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-icon-button .mdc-icon-button__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-icon-button .mdc-icon-button__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-icon-button.mdc-ripple-upgraded--unbounded .mdc-icon-button__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-icon-button.mdc-ripple-upgraded--foreground-activation .mdc-icon-button__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation .mdc-icon-button__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-icon-button .mdc-icon-button__ripple::before,\n.mdc-icon-button .mdc-icon-button__ripple::after {\n  top: calc(50% - 50%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before,\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-icon-button .mdc-icon-button__ripple::before, .mdc-icon-button .mdc-icon-button__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-icon-button:hover .mdc-icon-button__ripple::before, .mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before, .mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-icon-button.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-icon-button .mdc-icon-button__ripple {\n  height: 100%;\n  left: 0px;\n  pointer-events: none;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  z-index: -1;\n}","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/elevation/mixins' as elevation-mixins;\n@use '@material/animation/variables' as animation-variables;\n@use '@material/rtl/rtl';\n@use '@material/typography/typography';\n@use './mixins';\n@use './variables';\n\n// postcss-bem-linter: define top-app-bar\n.mdc-top-app-bar {\n  @include mixins.fill-color-accessible(primary);\n  @include mixins.icon-ink-color(on-primary);\n\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  width: 100%;\n  z-index: 4;\n\n  &__row {\n    display: flex;\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n    height: variables.$row-height;\n  }\n\n  &__section {\n    display: inline-flex;\n    flex: 1 1 auto;\n    align-items: center;\n    min-width: 0;\n    padding: variables.$section-vertical-padding\n      variables.$section-horizontal-padding;\n    z-index: 1;\n\n    &--align-start {\n      justify-content: flex-start;\n      order: -1;\n    }\n\n    &--align-end {\n      justify-content: flex-end;\n      order: 1;\n    }\n  }\n\n  &__title {\n    @include typography.typography(headline6);\n    @include rtl.reflexive-box(padding, left, variables.$title-left-padding);\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    z-index: 1;\n  }\n}\n\n@at-root {\n  @include mixins.short-shape-radius(24px);\n}\n\n.mdc-top-app-bar--short {\n  top: 0;\n  @include rtl.ignore-next-line();\n  right: auto;\n  @include rtl.ignore-next-line();\n  left: 0;\n  width: 100%;\n  transition: width 250ms animation-variables.$standard-curve-timing-function;\n\n  @include rtl.rtl {\n    @include rtl.ignore-next-line();\n    right: 0;\n    @include rtl.ignore-next-line();\n    left: auto;\n  }\n\n  .mdc-top-app-bar__row {\n    height: variables.$mobile-row-height;\n  }\n\n  .mdc-top-app-bar__section {\n    padding: variables.$mobile-section-padding;\n  }\n\n  .mdc-top-app-bar__title {\n    transition: opacity 200ms\n      animation-variables.$standard-curve-timing-function;\n    opacity: 1;\n  }\n}\n\n.mdc-top-app-bar--short-collapsed {\n  @include elevation-mixins.elevation(4);\n\n  width: variables.$short-collapsed-width;\n  transition: width 300ms animation-variables.$standard-curve-timing-function;\n\n  .mdc-top-app-bar__title {\n    display: none;\n  }\n\n  .mdc-top-app-bar__action-item {\n    transition: padding 150ms\n      animation-variables.$standard-curve-timing-function;\n  }\n}\n\n.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item {\n  width: variables.$short-collapsed-width * 2;\n\n  .mdc-top-app-bar__section--align-end {\n    @include rtl.reflexive-box(padding, right, 12px);\n  }\n}\n\n.mdc-top-app-bar--dense {\n  .mdc-top-app-bar__row {\n    height: variables.$dense-row-height;\n  }\n\n  .mdc-top-app-bar__section {\n    padding: 0 variables.$dense-section-horizontal-padding;\n  }\n\n  .mdc-top-app-bar__title {\n    @include rtl.reflexive-box(\n      padding,\n      left,\n      variables.$dense-title-left-padding\n    );\n  }\n}\n\n.mdc-top-app-bar--prominent {\n  .mdc-top-app-bar__row {\n    height: variables.$prominent-row-height;\n  }\n\n  .mdc-top-app-bar__title {\n    align-self: flex-end;\n    padding-bottom: variables.$prominent-title-bottom-padding;\n  }\n\n  .mdc-top-app-bar__action-item,\n  .mdc-top-app-bar__navigation-icon {\n    align-self: flex-start;\n  }\n}\n\n.mdc-top-app-bar--fixed {\n  transition: box-shadow 200ms linear;\n}\n\n.mdc-top-app-bar--fixed-scrolled {\n  @include elevation-mixins.elevation(4);\n\n  transition: box-shadow 200ms linear;\n}\n\n// Specific styles for dense and prominent styled top app bar\n.mdc-top-app-bar--dense.mdc-top-app-bar--prominent {\n  .mdc-top-app-bar__row {\n    height: variables.$dense-row-height * 2;\n  }\n\n  .mdc-top-app-bar__section {\n    padding: 0 variables.$section-horizontal-padding;\n  }\n\n  .mdc-top-app-bar__title {\n    @include rtl.reflexive-box(padding, left, variables.$title-left-padding);\n\n    padding-bottom: variables.$dense-prominent-title-bottom-padding;\n  }\n}\n\n.mdc-top-app-bar--fixed-adjust {\n  padding-top: variables.$row-height;\n}\n\n.mdc-top-app-bar--dense-fixed-adjust {\n  padding-top: variables.$dense-row-height;\n}\n\n.mdc-top-app-bar--short-fixed-adjust {\n  padding-top: variables.$mobile-row-height;\n}\n\n.mdc-top-app-bar--prominent-fixed-adjust {\n  padding-top: variables.$prominent-row-height;\n}\n\n.mdc-top-app-bar--dense-prominent-fixed-adjust {\n  padding-top: variables.$dense-row-height * 2;\n}\n\n// Mobile Styles\n@include mixins.mobile-breakpoint_;\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n@use './gss';\n\n/// When true, add an additional property/value declaration before declarations\n/// that use advanced features such as custom properties or CSS functions. This\n/// adds fallback support for older browsers such as IE11 that do not support\n/// these features at the cost of additional CSS. Set this variable to false to\n/// disable generating fallback declarations.\n$enable-fallback-declarations: true !default;\n\n/// Writes a CSS property/value declaration. This mixin is used throughout the\n/// theme package for consistency for dynamically setting CSS property values.\n///\n/// This mixin may optionally take a fallback value. For advanced features such\n/// as custom properties or CSS functions like min and max, a fallback value is\n/// recommended to support older browsers.\n///\n/// @param {String} $property - The CSS property of the declaration.\n/// @param {*} $value - The value of the CSS declaration. The value should be\n///     resolved by other theme functions first (i.e. custom property Maps and\n///     Material theme keys are not supported in this mixin). If the value is\n///     null, no declarations will be emitted.\n/// @param {*} $fallback - An optional fallback value for older browsers. If\n///     provided, a second property/value declaration will be added before the\n///     main property/value declaration.\n/// @param {Map} $gss - An optional Map of GSS annotations to add.\n/// @param {Bool} $important - If true, add `!important` to the declaration.\n@mixin declaration(\n  $property,\n  $value,\n  $fallback-value: null,\n  $gss: (),\n  $important: false\n) {\n  // Normally setting a null value to a property will not emit CSS, so mixins\n  // wouldn't need to check this. However, Sass will throw an error if the\n  // interpolated property is a custom property.\n  @if $value != null {\n    $important-rule: if($important, ' !important', '');\n\n    @if $fallback-value and $enable-fallback-declarations {\n      @include gss.annotate($gss);\n      #{$property}: #{$fallback-value} #{$important-rule};\n\n      // Add @alternate to annotations.\n      $gss: map.merge(\n        $gss,\n        (\n          alternate: true,\n        )\n      );\n    }\n\n    @include gss.annotate($gss);\n    #{$property}: #{$value}#{$important-rule};\n  }\n}\n\n/// Unpacks shorthand values for CSS properties (i.e. lists of 1-3 values).\n/// If a list of 4 values is given, it is returned as-is.\n///\n/// Examples:\n///\n/// unpack-value(4px) => 4px 4px 4px 4px\n/// unpack-value(4px 2px) => 4px 2px 4px 2px\n/// unpack-value(4px 2px 2px) => 4px 2px 2px 2px\n/// unpack-value(4px 2px 0 2px) => 4px 2px 0 2px\n///\n/// @param {Number | Map | List} $value - List of 1 to 4 value numbers.\n/// @return {List} a List of 4 value numbers.\n@function unpack-value($value) {\n  @if meta.type-of($value) == 'map' or list.length($value) == 1 {\n    @return $value $value $value $value;\n  } @else if list.length($value) == 4 {\n    @return $value;\n  } @else if list.length($value) == 3 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 3)\n      list.nth($value, 2);\n  } @else if list.length($value) == 2 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 1)\n      list.nth($value, 2);\n  }\n\n  @error \"Invalid CSS property value: '#{$value}' is more than 4 values\";\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n\n/// Adds optional GSS annotation comments. Useful for theme mixins where one or\n/// more properties are set indirectly.\n///\n/// Annotations may be provided as a Map of annotations or as named arguments.\n///\n/// @example - scss\n///   @include annotate((noflip: true));\n///   left: 0;\n///\n/// @example - scss\n///   @include annotate($noflip: true);\n///   left: 0;\n///\n/// @example - css\n///   /* @noflip */ /*rtl:ignore*/\n///   left: 0;\n///\n/// @param {Map} $annotations - Map of annotations. Values must be set to `true`\n///     for an annotation to be added.\n@mixin annotate($annotations...) {\n  $keywords: meta.keywords($annotations);\n  @if list.length($annotations) > 0 {\n    $annotations: list.nth($annotations, 1);\n  } @else {\n    $annotations: $keywords;\n  }\n\n  @if (map.get($annotations, alternate) == true) {\n    /* @alternate */\n  }\n\n  // noflip must be the last tag right before the property\n  @if (map.get($annotations, noflip) == true) {\n    /* @noflip */ /*rtl:ignore*/\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:list';\n@use 'sass:meta';\n@use '@material/animation/variables' as animation-variables;\n@use '@material/ripple/ripple-theme';\n@use '@material/theme/theme-color';\n@use '@material/theme/theme';\n@use '@material/shape/mixins' as shape-mixins;\n@use '@material/shape/functions';\n@use './variables';\n@use '@material/rtl/rtl';\n\n//\n// Public\n//\n\n@mixin ink-color($color) {\n  @include theme.property(color, $color);\n}\n\n@mixin fill-color($color) {\n  @include theme.property(background-color, $color);\n}\n\n@mixin fill-color-accessible($color) {\n  @include fill-color($color);\n  @include ink-color(theme-color.accessible-ink-color($color));\n}\n\n@mixin icon-ink-color($color) {\n  .mdc-top-app-bar__action-item,\n  .mdc-top-app-bar__navigation-icon {\n    @include theme.property(color, $color);\n    @include ripple-theme.states($color);\n  }\n}\n\n@mixin short-shape-radius($radius, $rtl-reflexive: true) {\n  @if meta.type-of($radius) == 'list' and list.length($radius) > 1 {\n    @error \"Invalid radius: '#{$radius}' component doesn't allow customizing all corners\";\n  }\n\n  $radius: 0 0 $radius 0;\n\n  $selector: if(\n    &,\n    '&.mdc-top-app-bar--short-collapsed',\n    '.mdc-top-app-bar--short-collapsed'\n  );\n\n  #{$selector} {\n    @include shape-mixins.radius(\n      $radius,\n      $rtl-reflexive,\n      $component-height: variables.$dense-row-height\n    );\n  }\n}\n\n//\n// Private\n//\n\n@mixin mobile-breakpoint_($mobile-breakpoint: variables.$mobile-breakpoint) {\n  @media (max-width: $mobile-breakpoint) {\n    .mdc-top-app-bar__row {\n      height: variables.$mobile-row-height;\n    }\n\n    .mdc-top-app-bar__section {\n      padding: variables.$mobile-section-padding;\n    }\n\n    .mdc-top-app-bar--short {\n      transition: width 200ms\n        animation-variables.$standard-curve-timing-function;\n    }\n\n    .mdc-top-app-bar--short-collapsed {\n      transition: width 250ms\n        animation-variables.$standard-curve-timing-function;\n\n      .mdc-top-app-bar__section--align-end {\n        @include rtl.reflexive-box(\n          padding,\n          right,\n          variables.$short-collapsed-right-icon-padding\n        );\n      }\n    }\n\n    .mdc-top-app-bar--prominent {\n      .mdc-top-app-bar__title {\n        padding-bottom: variables.$prominent-mobile-title-bottom-padding;\n      }\n    }\n\n    .mdc-top-app-bar--fixed-adjust {\n      padding-top: variables.$mobile-row-height;\n    }\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/css';\n@use '@material/theme/custom-properties';\n@use '@material/theme/theme';\n@use '@material/theme/keys';\n@use '@material/theme/shadow-dom';\n@use '@material/theme/theme-color';\n\n$custom-property-prefix: 'ripple';\n\n$fade-in-duration: 75ms !default;\n$fade-out-duration: 150ms !default;\n$translate-duration: 225ms !default;\n$states-wash-duration: 15ms !default;\n\n// Notes on states:\n// * focus takes precedence over hover (i.e. if an element is both focused and hovered, only focus value applies)\n// * press state applies to a separate pseudo-element, so it has an additive effect on top of other states\n// * selected/activated are applied additively to hover/focus via calculations at preprocessing time\n\n$dark-ink-opacities: (\n  hover: 0.04,\n  focus: 0.12,\n  press: 0.12,\n  selected: 0.08,\n  activated: 0.12,\n) !default;\n\n$light-ink-opacities: (\n  hover: 0.08,\n  focus: 0.24,\n  press: 0.24,\n  selected: 0.16,\n  activated: 0.24,\n) !default;\n\n// Legacy\n\n$pressed-dark-ink-opacity: 0.16 !default;\n$pressed-light-ink-opacity: 0.32 !default;\n\n// State selector variables used for state selector mixins below.\n$_hover-selector: '&:hover';\n$_focus-selector: '&.mdc-ripple-upgraded--background-focused, &:not(.mdc-ripple-upgraded):focus';\n$_active-selector: '&:not(:disabled):active';\n\n$light-theme: (\n  focus-state-layer-color: theme-color.$on-surface,\n  focus-state-layer-opacity: map.get($dark-ink-opacities, focus),\n  hover-state-layer-color: theme-color.$on-surface,\n  hover-state-layer-opacity: map.get($dark-ink-opacities, hover),\n  pressed-state-layer-color: theme-color.$on-surface,\n  pressed-state-layer-opacity: map.get($dark-ink-opacities, press),\n);\n\n@mixin theme($theme) {\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  @if shadow-dom.$css-selector-fallback-declarations {\n    .mdc-ripple-surface {\n      @include theme-styles($theme);\n    }\n  }\n}\n\n$_ripple-theme: (\n  hover-state-layer-color: null,\n  focus-state-layer-color: null,\n  pressed-state-layer-color: null,\n  hover-state-layer-opacity: null,\n  focus-state-layer-opacity: null,\n  pressed-state-layer-opacity: null,\n);\n\n@mixin theme-styles($theme, $ripple-target: '&') {\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  // TODO(b/191298796): Support states layer color for every interactive states.\n  // Use only hover state layer color, ignoring focus and pressed color.\n  @include internal-theme-styles($theme, $ripple-target);\n}\n\n@mixin internal-theme-styles($theme, $ripple-target: '&') {\n  @include theme.validate-theme-keys($_ripple-theme, $theme);\n\n  @include states-base-color(\n    map.get($theme, hover-state-layer-color),\n    $ripple-target: $ripple-target\n  );\n  @include states-hover-opacity(\n    map.get($theme, hover-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-focus-opacity(\n    map.get($theme, focus-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-press-opacity(\n    map.get($theme, pressed-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin states-base-color(\n  $color,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @if not custom-properties.is-custom-prop($color) {\n      $color: custom-properties.create(\n        ripple-color,\n        theme-color.get-custom-property($color)\n      );\n    }\n\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(background-color, $color);\n      }\n    }\n  }\n}\n\n///\n/// Customizes ripple opacities in `hover`, `focus`, or `press` states\n/// @param {map} $opacity-map - map specifying custom opacity of zero or more states\n/// @param {bool} $has-nested-focusable-element - whether the component contains a focusable element in the root\n/// @param {string} $ripple-target - the optional selector for the ripple element\n///\n@mixin states-opacities(\n  $opacity-map: (),\n  $has-nested-focusable-element: false,\n  $ripple-target: '&',\n  $query: feature-targeting.all()\n) {\n  // Ensure sufficient specificity to override base state opacities\n  @if map.get($opacity-map, hover) {\n    @include states-hover-opacity(\n      map.get($opacity-map, hover),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, focus) {\n    @include states-focus-opacity(\n      map.get($opacity-map, focus),\n      $ripple-target: $ripple-target,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, press) {\n    @include states-press-opacity(\n      map.get($opacity-map, press),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n}\n\n@mixin states-hover-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity and not custom-properties.is-custom-prop($opacity) {\n    $opacity: custom-properties.create(ripple-hover-opacity, $opacity);\n  }\n\n  // Background wash styles, for both CSS-only and upgraded stateful surfaces\n  &:hover,\n  &.mdc-ripple-surface--hover {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(opacity, $opacity);\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity(\n  $opacity,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  // Focus overrides hover by reusing the ::before pseudo-element.\n  // :focus-within generally works on non-MS browsers and matches when a *child* of the element has focus.\n  // It is useful for cases where a component has a focusable element within the root node, e.g. text field,\n  // but undesirable in general in case of nested stateful components.\n  // We use a modifier class for JS-enabled surfaces to support all use cases in all browsers.\n  @if $has-nested-focusable-element {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    &.mdc-ripple-upgraded:focus-within,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus,\n    &:not(.mdc-ripple-upgraded):focus-within {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  } @else {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity-properties_($opacity, $query) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-focus-opacity, $opacity);\n    }\n\n    // Note that this duration is only effective on focus, not blur\n    @include feature-targeting.targets($feat-animation) {\n      transition-duration: 75ms;\n    }\n\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n@mixin states-press-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  // Styles for non-upgraded (CSS-only) stateful surfaces\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-press-opacity, $opacity);\n    }\n\n    &:not(.mdc-ripple-upgraded) {\n      // Apply press additively by using the ::after pseudo-element\n      #{$ripple-target}::after {\n        @include feature-targeting.targets($feat-animation) {\n          transition: opacity $fade-out-duration linear;\n        }\n      }\n\n      &:active {\n        #{$ripple-target}::after {\n          @include feature-targeting.targets($feat-animation) {\n            transition-duration: $fade-in-duration;\n          }\n\n          // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n          @include feature-targeting.targets($feat-color) {\n            @include theme.property(opacity, $opacity);\n          }\n        }\n      }\n    }\n\n    &.mdc-ripple-upgraded {\n      @include feature-targeting.targets($feat-color) {\n        // Upgraded ripple should always emit custom property, regardless of\n        // configuration, since ripple itself feature detects custom property\n        // support at runtime.\n        @include custom-properties.configure($emit-custom-properties: true) {\n          @include theme.property(\n            custom-properties.create(ripple-fg-opacity, $opacity)\n          );\n        }\n      }\n    }\n  }\n}\n\n// Simple mixin for base states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states(\n  $color: theme-color.prop-value(on-surface),\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include states-interactions_(\n    $color: $color,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $query: $query,\n    $ripple-target: $ripple-target,\n    $opacity-map: $opacity-map\n  );\n}\n\n// Simple mixin for activated states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-activated(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $activated-opacity: states-opacity($color, activated);\n\n  &--activated {\n    // Stylelint seems to think that '&' qualifies as a type selector here?\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-activated-opacity,\n            $activated-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $activated-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n// Simple mixin for selected states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-selected(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $selected-opacity: states-opacity($color, selected);\n\n  &--selected {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-selected-opacity,\n            $selected-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $selected-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n@mixin states-interactions_(\n  $color,\n  $has-nested-focusable-element,\n  $opacity-modifier: 0,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include target-selector($ripple-target) {\n    @include states-base-color($color, $query);\n  }\n\n  @if $opacity-map == null {\n    $opacity-map: (\n      hover: states-opacity($color, hover) + $opacity-modifier,\n      focus: states-opacity($color, focus) + $opacity-modifier,\n      press: states-opacity($color, press) + $opacity-modifier,\n    );\n  }\n\n  @include states-opacities(\n    $opacity-map,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $ripple-target: $ripple-target,\n    $query: $query\n  );\n}\n\n// Wraps content in the `ripple-target` selector if it exists.\n@mixin target-selector($ripple-target: '&') {\n  @if $ripple-target == '&' {\n    @content;\n  } @else {\n    #{$ripple-target} {\n      @content;\n    }\n  }\n}\n\n/// Selector for hover, active and focus states.\n@mixin states-selector() {\n  #{$_hover-selector},\n  #{$_focus-selector},\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n@mixin hover() {\n  #{$_hover-selector} {\n    @content;\n  }\n}\n\n// Selector for focus state. Using ':not(.mdc-ripple-upgraded)' to continue\n// applying focus styles on JS-disabled components, and control focus\n// on JS-enabled components with '.mdc-ripple-upgraded--background-focused'.\n@mixin focus() {\n  #{$_focus-selector} {\n    @content;\n  }\n}\n\n// Selector for active state. Using `:active:active` to override focus styles.\n@mixin pressed() {\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n// @deprecated Use `pressed()` mixin - renamed for consistency.\n@mixin active() {\n  @include pressed() {\n    @content;\n  }\n}\n\n/// Keep the ripple (State overlay) behind the content.\n@mixin behind-content(\n  $ripple-target,\n  $content-root-selector: '&',\n  $query: feature-targeting.all()\n) {\n  // Needed for IE11. Without this, IE11 renders the state layer completely\n  // underneath the container, making it invisible.\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  #{$content-root-selector} {\n    @include feature-targeting.targets($feat-structure) {\n      z-index: 0;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, -1)\n      );\n    }\n  }\n}\n\n@function states-opacity($color, $state) {\n  $color-value: theme-color.prop-value($color);\n  $opacity-map: if(\n    theme-color.tone($color-value) == 'light',\n    $light-ink-opacities,\n    $dark-ink-opacities\n  );\n\n  @if not map.has-key($opacity-map, $state) {\n    @error \"Invalid state: '#{$state}'. Choose one of: #{map.keys($opacity-map)}\";\n  }\n\n  @return map.get($opacity-map, $state);\n}\n\n@mixin states-background-selector($ripple-target) {\n  #{$ripple-target}::before {\n    @content;\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// Default styles\n$row-height: 64px !default;\n$title-left-padding: 20px !default;\n$section-vertical-padding: 8px !default;\n$section-horizontal-padding: 12px !default;\n\n$mobile-breakpoint: 599px !default;\n\n// Default mobile styles\n$mobile-row-height: 56px !default;\n$mobile-section-padding: 4px !default;\n\n// Short top app bar\n$short-collapsed-border-radius: 4px !default;\n$short-collapsed-width: 56px !default;\n$short-collapsed-right-icon-padding: 12px !default;\n\n// Prominent styles\n$prominent-row-height: 128px !default;\n$prominent-title-bottom-padding: 2px !default;\n\n// Prominent mobile styles\n$prominent-mobile-title-bottom-padding: 6px !default;\n\n// Dense styles\n$dense-row-height: 48px !default;\n$dense-section-horizontal-padding: 4px !default;\n$dense-title-left-padding: 12px !default;\n\n// Dense & Prominent styles\n$dense-prominent-title-bottom-padding: 9px !default;\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:string';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/custom-properties';\n@use '@material/theme/keys';\n@use '@material/theme/theme';\n\n/// @deprecated Avoid calling this function directly. Instead, configure the\n/// `$styles-<style>` variable Maps.\n@function set-styles_($base-styles, $scale-styles, $override-styles) {\n  $options: (\n    custom-property-prefix: typography,\n  );\n\n  $base-styles: keys.set-values($base-styles, $options: $options);\n\n  @each $style, $style-props in $scale-styles {\n    @each $base-key in map.keys($base-styles) {\n      // Ignore the return result, it's not needed\n      $unused: keys.add-link(keys.combine($style, $base-key), $base-key);\n    }\n\n    // Merge base properties for all styles.\n    $style-props: map.merge($base-styles, $style-props);\n\n    // Merge overrides onto each style.\n    $style-props: map.merge($style-props, map.get($override-styles, $style));\n\n    // Register keys for this style\n    @each $property, $value in $style-props {\n      $unused: keys.set-value(\n        keys.combine($style, $property),\n        $value,\n        $options: $options\n      );\n    }\n\n    // Override original styles with new styles.\n    $scale-styles: map.merge($scale-styles, (#{$style}: $style-props));\n  }\n\n  @return $scale-styles;\n}\n\n@function get-letter-spacing_($tracking, $font-size) {\n  @return math.div($tracking, $font-size * 16) * 1em;\n}\n\n@function px-to-rem($px) {\n  @if custom-properties.is-custom-prop($px) {\n    @return custom-properties.set-fallback(\n      $px,\n      _px-to-rem(custom-properties.get-fallback($px))\n    );\n  }\n  @return _px-to-rem($px);\n}\n\n@function _px-to-rem($px) {\n  @if $px == null {\n    @return null;\n  }\n  @return math.div($px, 16px) * 1rem;\n}\n\n$font-family: string.unquote('Roboto, sans-serif') !default;\n\n// Override styles\n$styles-headline1: () !default;\n$styles-headline2: () !default;\n$styles-headline3: () !default;\n$styles-headline4: () !default;\n$styles-headline5: () !default;\n$styles-headline6: () !default;\n$styles-subtitle1: () !default;\n$styles-subtitle2: () !default;\n$styles-body1: () !default;\n$styles-body2: () !default;\n$styles-caption: () !default;\n$styles-button: () !default;\n$styles-overline: () !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead, or $font-family to set the base font family.\n$base: (\n  font-family: $font-family,\n) !default;\n\n$font-weight-values: (\n  thin: 100,\n  light: 300,\n  regular: 400,\n  medium: 500,\n  bold: 700,\n  black: 900,\n) !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead.\n$styles: set-styles_(\n  $base,\n  (\n    headline1: (\n      font-size: px-to-rem(96px),\n      line-height: px-to-rem(96px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-1.5, 6),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline2: (\n      font-size: px-to-rem(60px),\n      line-height: px-to-rem(60px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-0.5, 3.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline3: (\n      font-size: px-to-rem(48px),\n      line-height: px-to-rem(50px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline4: (\n      font-size: px-to-rem(34px),\n      line-height: px-to-rem(40px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 2.125),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline5: (\n      font-size: px-to-rem(24px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline6: (\n      font-size: px-to-rem(20px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.25, 1.25),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(28px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.15, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(22px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.1, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(24px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.5, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    caption: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.4, 0.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    button: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(36px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(1.25, 0.875),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n    overline: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(2, 0.75),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n  ),\n  (\n    headline1: $styles-headline1,\n    headline2: $styles-headline2,\n    headline3: $styles-headline3,\n    headline4: $styles-headline4,\n    headline5: $styles-headline5,\n    headline6: $styles-headline6,\n    subtitle1: $styles-subtitle1,\n    subtitle2: $styles-subtitle2,\n    body1: $styles-body1,\n    body2: $styles-body2,\n    caption: $styles-caption,\n    button: $styles-button,\n    overline: $styles-overline,\n  )\n) !default;\n\n// A copy of the styles Map that is used to detect compile-time changes for\n// Angular support.\n$_styles-copy: $styles;\n\n@function is-typography-style($style) {\n  @return map.has-key($styles, $style);\n}\n\n@function get-typography-styles() {\n  @return map.keys($styles);\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  .mdc-typography {\n    @include base($query: $query);\n  }\n\n  @each $style in get-typography-styles() {\n    .mdc-typography--#{$style} {\n      @include typography($style, $query: $query);\n    }\n  }\n}\n\n@mixin base($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @include theme.property(font-family, font-family);\n  }\n}\n\n@mixin typography($style, $query: feature-targeting.all(), $exclude-props: ()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @if not is-typography-style($style) {\n    @error \"Invalid style specified! #{$style} doesn't exist. Choose one of #{get-typography-styles()}\";\n  }\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @each $key in keys.get-keys($style) {\n      // <style>-<property>: headline1-font-size\n      // Slice the string past the first key separator to retrieve the\n      // property name\n      $property: string.slice($key, string.index($key, '-') + 1);\n      @if list.index($exclude-props, $property) == null {\n        $current-global-value: map.get($styles, $style, $property);\n        $configured-global-value: map.get($_styles-copy, $style, $property);\n        @if $current-global-value != $configured-global-value {\n          // A compile time change was made to $mdc-typography-styles. To\n          // support Angular, use this value instead of the key's value.\n          @if $current-global-value {\n            // Only emit if the overridden value exists\n            $custom-prop: keys.create-custom-property($key);\n            $custom-prop: custom-properties.set-fallback(\n              $custom-prop,\n              $current-global-value\n            );\n            @include theme.property($property, $custom-prop);\n          }\n        } @else {\n          // Otherwise, use the key, which may be different from the original\n          // configured global value.\n          @include theme.property($property, $key);\n        }\n      }\n    }\n  }\n}\n\n/// Applies antialiasing via font-smoothing to text.\n@mixin smooth-font($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include feature-targeting.targets($feat-typography) {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n}\n\n// Element must be `display: block` or `display: inline-block` for this to work.\n@mixin overflow-ellipsis($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n/// Sets a container's baseline that text content will align to.\n///\n/// If the `$display` is set to a flexbox display, only `$top` baseline may be\n/// set. A separate element must be added as a child of the container with a\n/// `$bottom` baseline.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {String} $display - the display type of the container. May be `flex`,\n///     `inline-flex`, `block`, or `inline-block`.\n@mixin baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (flex, inline-flex, block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $isFlexbox: $display == 'flex' or $display == 'inline-flex';\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: $display;\n\n    @if $isFlexbox {\n      align-items: baseline;\n    }\n  }\n\n  @if $top > 0 {\n    @include baseline-top($top, $query: $query);\n  }\n\n  @if $bottom > 0 {\n    @if $isFlexbox {\n      @error \"mdc-typography: invalid baseline with display type. #{$display} cannot specifiy $bottom. Add a separate child element with its own $bottom.\";\n    }\n\n    @include baseline-bottom($bottom, $query: $query);\n  }\n}\n\n/// Sets the baseline of flow text content.\n///\n/// Separate `$top` and `$bottom` baselines may be specified. You should ensure\n/// that the `$top` baseline matches the previous text content's $bottom\n/// baseline to ensure text is positioned appropriately.\n///\n/// See go/css-baseline for reference on how this mixin works.\n///\n/// This is intended for text flow content only (e.g. `<h1>`, `<p>`, `<span>`,\n/// or `<div>` with only text content). Use `baseline()` to set the baseline of\n/// containers that are flexbox or have non-flow content children.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {Boolean} $lineHeight - the line-height to use for the text. This\n///     is the distance between baselines of multiple lines of text.\n/// @param {String} $display - the display type of the container. May be `block`\n///     or `inline-block`.\n@mixin text-baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $lineHeight: normal,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include baseline(\n    $display: $display,\n    $top: $top,\n    $bottom: $bottom,\n    $query: $query\n  );\n  @include feature-targeting.targets($feat-structure) {\n    @if $top > 0 {\n      margin-top: 0;\n      /* @alternate */\n      line-height: #{$lineHeight};\n    }\n\n    @if $bottom > 0 {\n      margin-bottom: -1 * $bottom;\n    }\n  }\n}\n\n/// Creates a baseline strut from the top of a container. This mixin is for\n/// advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the top of the container to\n///     the text's baseline.\n@mixin baseline-top($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: 0;\n    }\n  }\n}\n\n/// Creates a baseline strut from the baseline to the bottom of a container.\n/// This mixin is for advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the text's baseline to the\n///     bottom of the container.\n@mixin baseline-bottom($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: -1 * $distance;\n    }\n  }\n}\n\n/// Adds an invisible, zero-width prefix to a container's text.\n/// This ensures that the baseline is always where the text would be, instead\n/// of defaulting to the container bottom when text is empty. Do not use this\n/// mixin if the `baseline` mixin is already applied.\n@mixin zero-width-prefix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      content: '\\200b';\n    }\n  }\n}\n\n@mixin baseline-strut_($distance) {\n  display: inline-block;\n  width: 0;\n  height: $distance;\n  content: '';\n}\n\n@function get-font($typography) {\n  @return map.get($styles, $typography, font-family);\n}\n\n@function get-line-height($typography) {\n  @return map.get($styles, $typography, line-height);\n}\n\n@function get-size($typography) {\n  @return map.get($styles, $typography, font-size);\n}\n\n@function get-weight($typography) {\n  @return map.get($styles, $typography, font-weight);\n}\n\n@function get-tracking($typography) {\n  @return map.get($styles, $typography, letter-spacing);\n}\n\n$_typography-theme: (\n  font: null,\n  line-height: null,\n  size: null,\n  weight: null,\n  tracking: null,\n);\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme-keys($_typography-theme, $theme);\n\n  @include theme.property(font-family, map.get($theme, font));\n  @include theme.property(line-height, map.get($theme, line-height));\n  @include theme.property(font-size, map.get($theme, size));\n  @include theme.property(font-weight, map.get($theme, weight));\n  @include theme.property(letter-spacing, map.get($theme, tracking));\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:meta';\n@use 'sass:selector';\n@use '@material/theme/gss';\n@use '@material/theme/selector-ext';\n@use '@material/theme/theme';\n\n$include: true !default;\n\n/// Creates a rule that will be applied when a component is within the context\n/// of an RTL layout.\n///\n/// @example - scss\n/// .mdc-foo {\n///   padding-left: 4px;\n///\n///   @include rtl {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n/// }\n///\n/// @example - css\n///   .mdc-foo {\n///     padding-left: 4px;\n///   }\n///\n///   [dir=\"rtl\"] .mdc-foo,\n///   .mdc-foo[dir=\"rtl\"] {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n///\n/// Note that this mixin works by checking for an ancestor element with\n/// `[dir=\"rtl\"]`. As a result, nested `dir` values are not supported:\n///\n/// @example - html\n/// <html dir=\"rtl\">\n///   <!-- ... -->\n///   <div dir=\"ltr\">\n///     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n///   </div>\n/// </html>\n///\n/// In the future, selectors such as the `:dir` pseudo-class\n/// (http://mdn.io/css/:dir) will help us mitigate this.\n///\n/// @content Content to be styled in an RTL context.\n@mixin rtl() {\n  @if ($include) {\n    $dir-rtl: '[dir=rtl]';\n\n    $rtl-selectors: list.join(\n      selector.nest($dir-rtl, &),\n      selector-ext.append-strict(&, $dir-rtl)\n    );\n\n    @at-root {\n      #{$rtl-selectors} {\n        /*rtl:begin:ignore*/\n        @content;\n        /*rtl:end:ignore*/\n      }\n    }\n  }\n}\n\n// Takes a base box-model property name (`margin`, `border`, `padding`, etc.) along with a\n// default direction (`left` or `right`) and value, and emits rules which apply the given value to the\n// specified direction by default and the opposite direction in RTL.\n//\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, left, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 8px;\n//   margin-right: 0;\n//\n//   @include rtl {\n//     margin-left: 0;\n//     margin-right: 8px;\n//   }\n// }\n// ```\n//\n// whereas:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, right, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 0;\n//   margin-right: 8px;\n//\n//   @include rtl {\n//     margin-left: 8px;\n//     margin-right: 0;\n//   }\n// }\n// ```\n//\n// You can also pass an optional 4th `$root-selector` argument which will be forwarded to `mdc-rtl`,\n// e.g. `@include rtl-reflexive-box(margin, left, 8px, '.mdc-component')`.\n//\n// Note that this function will always zero out the original value in an RTL context.\n// If you're trying to flip the values, use `mdc-rtl-reflexive-property()` instead.\n@mixin reflexive-box(\n  $base-property,\n  $default-direction,\n  $value,\n  $replace: null\n) {\n  @if (list.index((right, left), $default-direction) == null) {\n    @error \"Invalid default direction: '#{$default-direction}'. Please specifiy either 'right' or 'left'.\";\n  }\n\n  $left-value: $value;\n  $right-value: 0;\n\n  @if ($default-direction == right) {\n    $left-value: 0;\n    $right-value: $value;\n  }\n\n  @include reflexive-property(\n    $base-property,\n    $left-value,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n// <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-property(margin, auto, 12px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: auto;\n//   margin-right: 12px;\n//\n//   @include rtl {\n//     margin-left: 12px;\n//     margin-right: auto;\n//   }\n// }\n// ```\n//\n// An optional 4th `$root-selector` argument can be given, which will be passed to `mdc-rtl`.\n@mixin reflexive-property(\n  $base-property,\n  $left-value,\n  $right-value,\n  $replace: null\n) {\n  $prop-left: #{$base-property}-left;\n  $prop-right: #{$base-property}-right;\n\n  @include reflexive(\n    $prop-left,\n    $left-value,\n    $prop-right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes an argument specifying a horizontal position property (either 'left' or 'right') as well\n// as a value, and applies that value to the specified position in a LTR context, and flips it in a\n// RTL context. For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-position(left, 0);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 0;\n//   right: initial;\n//\n//   @include rtl {\n//     left: initial;\n//     right: 0;\n//   }\n// }\n// ```\n//\n// An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive-position($position-property, $value, $replace: null) {\n  @if (list.index((right, left), $position-property) == null) {\n    @error \"Invalid position #{position-property}. Please specifiy either right or left\";\n  }\n\n  // TODO: 'initial' is not supported in IE 11. https://caniuse.com/#feat=css-initial-value\n  $left-value: $value;\n  $right-value: initial;\n\n  @if ($position-property == right) {\n    $right-value: $value;\n    $left-value: initial;\n  }\n\n  @include reflexive(\n    left,\n    $left-value,\n    right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes pair of properties with values as arguments and flips it in RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive(left, 2px, right, 5px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 2px;\n//   right: 5px;\n//\n//   @include rtl {\n//     right: 2px;\n//     left: 5px;\n//   }\n// }\n// ```\n//\n// An optional fifth `$root-selector` argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive(\n  $left-property,\n  $left-value,\n  $right-property,\n  $right-value,\n  $replace: null\n) {\n  $left-replace: null;\n  $right-replace: null;\n  @if $replace {\n    @if meta.type-of($left-value) == 'string' {\n      $left-replace: $replace;\n    }\n\n    @if meta.type-of($right-value) == 'string' {\n      $right-replace: $replace;\n    }\n\n    @if $left-replace == null and $right-replace == null {\n      @error 'mdc-rtl: $replace may only be used with strings but neither left nor right values are strings.';\n    }\n\n    // If any replacements are null, treat the entire value as null (do not\n    // emit anything).\n    @each $name, $replacement in $replace {\n      @if $replacement == null {\n        $left-value: null;\n        $right-value: null;\n      }\n    }\n  }\n\n  // Do not emit if either value are null\n  @if $left-value and $right-value {\n    @include _property($left-property, $left-value, $replace: $left-replace);\n    @include _property($right-property, $right-value, $replace: $right-replace);\n\n    @include rtl {\n      @include _property(\n        $left-property,\n        $right-value,\n        $replace: $right-replace\n      );\n      @include _property($right-property, $left-value, $replace: $left-replace);\n    }\n  }\n}\n\n///\n/// Adds RTL ignore annotation when `$mdc-rtl-include` is true.\n///\n@mixin ignore-next-line() {\n  @include gss.annotate(\n    (\n      noflip: $include,\n    )\n  );\n}\n\n///\n/// Adds `@noflip` annotation when `$mdc-rtl-include` is true.\n///\n/// @param {String} $property\n/// @param {String} $value\n/// @param {Map} $replace\n///\n@mixin _property($property, $value, $replace: null) {\n  @include theme.property(\n    $property,\n    $value,\n    $replace: $replace,\n    $gss: (noflip: $include)\n  );\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/ripple/ripple';\n@use '@material/ripple/ripple-theme';\n@use '@material/touch-target/mixins' as touch-target-mixins;\n@use './icon-button-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include without-ripple($query);\n  @include ripple($query);\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // postcss-bem-linter: define icon-button\n  .mdc-icon-button {\n    @include feature-targeting.targets($feat-structure) {\n      display: inline-block;\n      position: relative;\n      box-sizing: border-box;\n      border: none;\n      outline: none;\n      background-color: transparent;\n      fill: currentColor;\n      color: inherit;\n      text-decoration: none;\n      cursor: pointer;\n      user-select: none;\n      z-index: 0; // Added to render above the container in IE11 tests.\n      overflow: visible; // Added to fix IE11 touch target tests.\n    }\n\n    .mdc-icon-button__touch {\n      @include touch-target-mixins.touch-target(\n        $set-width: true,\n        $query: $query\n      );\n    }\n\n    @include if-disabled_ {\n      @include feature-targeting.targets($feat-structure) {\n        cursor: default;\n        pointer-events: none;\n      }\n    }\n  }\n\n  .mdc-icon-button--display-flex {\n    @include feature-targeting.targets($feat-structure) {\n      align-items: center;\n      display: inline-flex;\n      justify-content: center;\n    }\n  }\n\n  .mdc-icon-button__icon {\n    @include feature-targeting.targets($feat-structure) {\n      display: inline-block;\n    }\n\n    &.mdc-icon-button__icon--on {\n      @include feature-targeting.targets($feat-structure) {\n        display: none;\n      }\n    }\n  }\n\n  .mdc-icon-button--on {\n    .mdc-icon-button__icon {\n      @include feature-targeting.targets($feat-structure) {\n        display: none;\n      }\n\n      &.mdc-icon-button__icon--on {\n        @include feature-targeting.targets($feat-structure) {\n          display: inline-block;\n        }\n      }\n    }\n  }\n  // postcss-bem-linter: end\n\n  .mdc-icon-button__link {\n    @include feature-targeting.targets($feat-structure) {\n      height: 100%;\n      left: 0;\n      outline: none;\n      position: absolute;\n      top: 0;\n      width: 100%;\n    }\n  }\n}\n\n@mixin without-ripple($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-icon-button {\n    @include feature-targeting.targets($feat-structure) {\n      font-size: icon-button-theme.$icon-size;\n    }\n\n    @include icon-button-theme.density(0, $query: $query);\n\n    @include icon-button-theme.disabled-ink-color(\n      text-disabled-on-light,\n      $query: $query\n    );\n\n    svg,\n    img {\n      @include feature-targeting.targets($feat-structure) {\n        width: icon-button-theme.$icon-size;\n        height: icon-button-theme.$icon-size;\n      }\n    }\n  }\n\n  @include static-styles($query: $query);\n}\n\n@mixin ripple($query: feature-targeting.all()) {\n  @include ripple.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  .mdc-icon-button {\n    @include ripple.surface(\n      $query: $query,\n      $ripple-target: icon-button-theme.$ripple-target\n    );\n    @include ripple.radius-unbounded(\n      $query: $query,\n      $ripple-target: icon-button-theme.$ripple-target\n    );\n    @include ripple-theme.states(\n      $query: $query,\n      $ripple-target: icon-button-theme.$ripple-target\n    );\n\n    .mdc-icon-button__ripple {\n      $feat-structure: feature-targeting.create-target($query, structure);\n      @include feature-targeting.targets($feat-structure) {\n        height: 100%;\n        left: 0px;\n        pointer-events: none;\n        position: absolute;\n        top: 0px;\n        width: 100%;\n        z-index: -1;\n      }\n    }\n  }\n}\n\n///\n/// Helps style the icon button in its disabled state.\n/// @access private\n///\n@mixin if-disabled_ {\n  &:disabled {\n    @content;\n  }\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:map';\n@use 'sass:meta';\n@use '@material/density/functions' as density-functions;\n@use '@material/density/variables' as density-variables;\n@use '@material/elevation/elevation-theme';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/focus-ring/focus-ring';\n@use '@material/ripple/ripple-theme';\n@use '@material/rtl/rtl';\n@use '@material/dom/dom';\n@use '@material/theme/keys';\n@use '@material/theme/state';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n@use '@material/touch-target/mixins' as touch-target-mixins;\n\n$ripple-target: '.mdc-icon-button__ripple';\n\n$icon-size: 24px !default;\n$size: 48px !default;\n$minimum-height: 28px !default;\n$maximum-height: $size !default;\n$container-shape: 50%;\n$density-scale: density-variables.$default-scale !default;\n$density-config: (\n  size: (\n    default: $size,\n    maximum: $maximum-height,\n    minimum: $minimum-height,\n  ),\n) !default;\n\n$_custom-property-prefix: 'icon-button';\n\n$light-theme: (\n  disabled-icon-color: theme-color.$on-surface,\n  disabled-icon-opacity: 0.38,\n  icon-color: theme-color.$primary,\n  icon-size: $icon-size,\n  focus-icon-color: theme-color.$primary,\n  focus-state-layer-color: theme-color.$primary,\n  focus-state-layer-opacity: 0.12,\n  hover-icon-color: theme-color.$primary,\n  hover-state-layer-color: theme-color.$primary,\n  hover-state-layer-opacity: 0.08,\n  pressed-icon-color: theme-color.$primary,\n  pressed-state-layer-color: theme-color.$primary,\n  pressed-state-layer-opacity: 0.12,\n  state-layer-size: $size,\n);\n\n@mixin theme($theme) {\n  @include theme.validate-theme($light-theme, $theme);\n\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $_custom-property-prefix\n  );\n}\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme($light-theme, $theme);\n\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $_custom-property-prefix\n  );\n\n  @include _state-layer-size($size: map.get($theme, state-layer-size));\n  @include _icon-size(map.get($theme, icon-size));\n  @include _disabled-icon-opacity(map.get($theme, disabled-icon-opacity));\n  @include _icon-color-with-map(\n    (\n      default: map.get($theme, icon-color),\n      disabled: map.get($theme, disabled-icon-color),\n      focus: map.get($theme, focus-icon-color),\n      hover: map.get($theme, hover-icon-color),\n      pressed: map.get($theme, pressed-icon-color),\n    )\n  );\n\n  // States styles\n  @include ripple-theme.theme-styles(\n    (\n      focus-state-layer-color: map.get($theme, focus-state-layer-color),\n      focus-state-layer-opacity: map.get($theme, focus-state-layer-opacity),\n      hover-state-layer-color: map.get($theme, hover-state-layer-color),\n      hover-state-layer-opacity: map.get($theme, hover-state-layer-opacity),\n      pressed-state-layer-color: map.get($theme, pressed-state-layer-color),\n      pressed-state-layer-opacity: map.get($theme, pressed-state-layer-opacity),\n    ),\n    $ripple-target: $ripple-target\n  );\n}\n\n///\n/// Sets the density scale for icon button.\n///\n/// @param {Number | String} $density-scale - Density scale value for component.\n///     Supported density scale values range from `-5` to `0`, with `0` being the default.\n///\n@mixin density($density-scale, $query: feature-targeting.all()) {\n  $size: density-functions.prop-value(\n    $density-config: $density-config,\n    $density-scale: $density-scale,\n    $property-name: size,\n  );\n\n  @include size($size, $query: $query);\n}\n\n///\n/// Sets the size of the icon-button.\n///\n/// @param {Number} $size - Size value for icon-button.\n///     Size will set the width, height, and padding for the overall component.\n///\n@mixin size($size, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    width: $size;\n    height: $size;\n    padding: math.div($size - $icon-size, 2);\n  }\n\n  .mdc-icon-button__focus-ring {\n    @include feature-targeting.targets($feat-structure) {\n      display: none;\n    }\n  }\n\n  @include ripple-theme.focus {\n    .mdc-icon-button__focus-ring {\n      @include dom.forced-colors-mode($exclude-ie11: true) {\n        @include focus-ring.focus-ring(\n          $query: $query,\n          $container-outer-padding-vertical: 0,\n          $container-outer-padding-horizontal: 0\n        );\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        display: block;\n        max-height: $size;\n        max-width: $size;\n      }\n    }\n  }\n\n  &.mdc-icon-button--reduced-size {\n    $component-size: $size;\n    // Icon button ripple size is capped at 40px for icon buttons with\n    // densities -1 and 0 (icon buttons with sizes 44x44 and 48x48px).\n    // See http://b/192353968 for more info.\n    @if $size >= 40px and $size <= 48px {\n      $component-size: 40px;\n    }\n\n    .mdc-icon-button__ripple {\n      @include feature-targeting.targets($feat-structure) {\n        width: $component-size;\n        height: $component-size;\n      }\n\n      @include touch-target-mixins.margin(\n        $component-height: $component-size,\n        $component-width: $component-size,\n        $touch-target-height: $size,\n        $touch-target-width: $size,\n        $query: $query\n      );\n    }\n\n    @include ripple-theme.focus {\n      .mdc-icon-button__focus-ring {\n        @include feature-targeting.targets($feat-structure) {\n          max-height: $component-size;\n          max-width: $component-size;\n        }\n      }\n    }\n  }\n\n  .mdc-icon-button__touch {\n    @include touch-target-mixins.touch-target(\n      $set-width: true,\n      $query: $query,\n      $height: $size,\n      $width: $size\n    );\n  }\n}\n\n///\n/// Sets the width, height and padding of icon button. Also changes the size of\n/// the icon itself based on button size.\n///\n/// @param {Number} $width - Width value for icon-button.\n/// @param {Number} $height - Height value for icon-button. (default: $width)\n/// @param {Number} $padding - Padding value for icon-button. (default: max($width, $height) / 2)\n/// @deprecated\n///     This mixin provides too much of low level customization.\n///     Please use mdc-icon-button-size instead.\n///\n@mixin icon-size(\n  $width,\n  $height: $width,\n  $padding: math.div(math.max($width, $height), 2),\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  $component-width: $width + $padding * 2;\n  $component-height: $height + $padding * 2;\n\n  @include feature-targeting.targets($feat-structure) {\n    width: $component-width;\n    height: $component-height;\n    padding: $padding;\n    font-size: math.max($width, $height);\n  }\n\n  svg,\n  img {\n    @include feature-targeting.targets($feat-structure) {\n      width: $width;\n      height: $height;\n    }\n  }\n}\n\n///\n/// Sets the font color and the ripple color to the provided color value.\n/// @param {Color} $color - The desired font and ripple color.\n///\n@mixin ink-color($color, $query: feature-targeting.all()) {\n  @include ink-color_($color, $query: $query);\n  @include ripple-theme.states(\n    $color,\n    $query: $query,\n    $ripple-target: $ripple-target\n  );\n}\n\n///\n/// Flips icon only in RTL context.\n///\n@mixin flip-icon-in-rtl($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-button__icon {\n    @include rtl.rtl {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.ignore-next-line();\n        transform: rotate(180deg);\n      }\n    }\n  }\n}\n\n///\n/// Sets the font color to the provided color value for a disabled icon button.\n/// @param {Color} $color - The desired font color.\n///\n@mixin disabled-ink-color($color, $query: feature-targeting.all()) {\n  @include if-disabled_ {\n    @include ink-color_($color, $query: $query);\n  }\n}\n\n///\n/// Includes ad-hoc high contrast mode support.\n///\n@mixin high-contrast-mode-shim($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    // TODO(b/175806874): Use the DOM border mixin after the ripple is moved\n    // away from :before to a dedicated element.\n    outline: solid 3px transparent;\n\n    &:focus {\n      outline: double 5px transparent;\n    }\n  }\n}\n\n///\n/// Sets the font color to the provided color value. This can be wrapped in\n/// a state qualifier such as `mdc-icon-button-if-disabled_`.\n/// @access private\n///\n@mixin ink-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(color, $color);\n  }\n}\n\n@mixin _state-layer-size($size) {\n  @include theme.property(height, $size);\n  @include theme.property(width, $size);\n}\n\n@mixin _icon-size($size) {\n  @include theme.property(font-size, $size);\n\n  svg,\n  img {\n    @include theme.property(width, $size);\n    @include theme.property(height, $size);\n  }\n}\n\n///\n/// Sets the icon opacity to the given opacity.\n/// @access private\n///\n@mixin _disabled-icon-opacity($opacity) {\n  &:disabled {\n    @include theme.property(opacity, $opacity);\n  }\n}\n\n///\n/// Sets the icon color to the given color.\n/// @param {map} $color-map - The desired icon color, specified as a map of\n///     colors with states {default, disabled, focus, hover, pressed} as keys.\n/// @access private\n///\n@mixin _icon-color-with-map($color-map) {\n  @include ink-color_(state.get-default-state($color-map));\n\n  $disabled: state.get-disabled-state($color-map);\n  @if $disabled {\n    &:disabled {\n      @include ink-color_($disabled);\n    }\n  }\n\n  $focus: state.get-focus-state($color-map);\n  @if $focus {\n    @include ripple-theme.focus {\n      @include ink-color_($focus);\n    }\n  }\n\n  $hover: state.get-hover-state($color-map);\n  @if $hover {\n    &:hover {\n      @include ink-color_($hover);\n    }\n  }\n\n  $pressed: state.get-pressed-state($color-map);\n  @if $pressed {\n    @include ripple-theme.active {\n      @include ink-color_($pressed);\n    }\n  }\n}\n\n@mixin _states-colors($color-map) {\n  // TODO(b/191298796): support focused & pressed key colors.\n\n  $hover: map.get($color-map, hover);\n  @if $hover {\n    @include ripple-theme.states-base-color(\n      $color: $hover,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n///\n/// Helps style the icon button in its disabled state.\n/// @access private\n///\n@mixin if-disabled_ {\n  &:disabled {\n    @content;\n  }\n}\n","// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use '@material/feature-targeting/feature-targeting';\n///\n/// Emits necessary layout styles to set a transparent border around an element\n/// without interfering with the rest of its component layout. The border is\n/// only visible in high-contrast mode. The target element should be a child of\n/// a relatively positioned top-level element (i.e. a ::before pseudo-element).\n///\n/// @param {number} $border-width - The width of the transparent border.\n/// @param {string} $border-style - The style of the transparent border.\n///\n@mixin transparent-border(\n  $border-width: 1px,\n  $border-style: solid,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: $border-width $border-style transparent;\n    border-radius: inherit;\n    content: '';\n    pointer-events: none;\n  }\n\n  // Used to satisfy Firefox v94 which does not render transparent borders in HCM (b/206440838).\n  @include forced-colors-mode($exclude-ie11: true) {\n    @include feature-targeting.targets($feat-structure) {\n      border-color: CanvasText;\n    }\n  }\n}\n\n///\n/// Visually hides text content for accessibility. This text should only be\n/// visible to screen reader users.\n/// See https://a11yproject.com/posts/how-to-hide-content/\n///\n@mixin visually-hidden($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap; /* added line */\n    width: 1px;\n  }\n}\n\n/// Selects for IE11 support.\n///\n/// @content styles to emit for IE11 support\n@mixin ie11-support {\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    @content;\n  }\n}\n\n/// Selects for `forced-colors` high contrast mode.\n///\n/// While in `forced-colors` mode, only system colors should be used.\n///\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors\n/// @content styles to emit in `forced-colors` mode\n@mixin forced-colors-mode($exclude-ie11: false) {\n  @if $exclude-ie11 {\n    @media screen and (forced-colors: active) {\n      @content;\n    }\n  } @else {\n    @media screen and (forced-colors: active), (-ms-high-contrast: active) {\n      @content;\n    }\n  }\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/dom/dom';\n\n$ring-radius-default: 8px !default;\n$inner-ring-width-default: 2px !default;\n$inner-ring-color-default: transparent !default;\n$outer-ring-width-default: 2px !default;\n$outer-ring-color-default: transparent !default;\n$container-outer-padding-default: 2px !default;\n\n/// Styles applied to the component's inner focus ring element.\n///\n/// @param $ring-radius [$ring-radius-default] - Focus ring radius.\n/// @param $inner-ring-width [$inner-ring-width-default] - Inner focus ring width.\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n/// @param $outer-ring-color [$outer-ring-color-default] - Outer focus ring color.\n/// @param $container-outer-padding [$container-outer-padding-default] - The\n///     distance between the focus ring and the container.\n@mixin focus-ring(\n  $query: feature-targeting.all(),\n  $ring-radius: $ring-radius-default,\n  $inner-ring-width: $inner-ring-width-default,\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-width: $outer-ring-width-default,\n  $outer-ring-color: $outer-ring-color-default,\n  $container-outer-padding-vertical: $container-outer-padding-default,\n  $container-outer-padding-horizontal: $container-outer-padding-default\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $container-size-vertical: 100%;\n  @if $container-outer-padding-vertical != 0 {\n    $container-size-vertical: calc(\n      100% + #{$container-outer-padding-vertical * 2}\n    );\n  }\n  $container-size-horizontal: 100%;\n  @if $container-outer-padding-horizontal != 0 {\n    $container-size-horizontal: calc(\n      100% + #{$container-outer-padding-horizontal * 2}\n    );\n  }\n  $outer-ring-size: 100%;\n  @if $outer-ring-width > 0 {\n    $outer-ring-size: calc(100% + #{$outer-ring-width * 2});\n  }\n  @include feature-targeting.targets($feat-structure) {\n    pointer-events: none;\n    border: $inner-ring-width solid $inner-ring-color;\n    border-radius: $ring-radius - $outer-ring-width;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    @include rtl.ignore-next-line();\n    left: 50%;\n    @include rtl.ignore-next-line();\n    transform: translate(-50%, -50%);\n    height: $container-size-vertical;\n    width: $container-size-horizontal;\n\n    @include dom.forced-colors-mode($exclude-ie11: true) {\n      border-color: CanvasText;\n    }\n\n    &::after {\n      content: '';\n      border: $outer-ring-width solid $outer-ring-color;\n      border-radius: $ring-radius;\n      display: block;\n      position: absolute;\n      top: 50%;\n      @include rtl.ignore-next-line();\n      left: 50%;\n      @include rtl.ignore-next-line();\n      transform: translate(-50%, -50%);\n      height: $outer-ring-size;\n      width: $outer-ring-size;\n\n      @include dom.forced-colors-mode($exclude-ie11: true) {\n        border-color: CanvasText;\n      }\n    }\n  }\n}\n/// Customizes the color of the button focus ring.\n///\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n@mixin focus-ring-color(\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-color: $outer-ring-color-default\n) {\n  border-color: $inner-ring-color;\n\n  &::after {\n    border-color: $outer-ring-color;\n  }\n}\n\n/// Customizes the border radius of the button focus ring.\n///\n/// @param {Number} $ring-radius - The border radius of the focus ring.\n/// @param {Number} $outer-ring-width [$outer-ring-width] - Width of the outer\n///     ring, required to compute the radius for the inner ring.\n@mixin focus-ring-radius(\n  $ring-radius,\n  $outer-ring-width: $outer-ring-width-default,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    border-radius: $ring-radius - $outer-ring-width;\n\n    &::after {\n      border-radius: $ring-radius;\n    }\n  }\n}\n","//\n// Copyright 2019 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n\n$height: 48px !default;\n$width: $height !default;\n\n/// Styles applied to the component's touch target wrapper element.\n@mixin wrapper($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-touch-target-wrapper {\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that styles are only emitted once across all components that\n      // have increased touch targets.\n      @include base-mixins.emit-once('mdc-touch-target/wrapper') {\n        // NOTE: Will change to `inline-block` in the future, but keeping as is\n        // temporarily for backwards-compatibility.\n        display: inline;\n      }\n    }\n  }\n}\n\n/// Styles applied to the component's inner touch target element.\n/// By default, only sets the inner element height to the minimum touch target\n/// height ($mdc-touch-target-height).\n/// @param {Boolean} $set-width [false] - Sets the inner element width to the\n///     minimum touch target width ($mdc-touch-target-width).\n/// @param $height [$mdc-touch-target-height] - Touch target height.\n/// @param $width [$mdc-touch-target-width] - Touch target width.\n@mixin touch-target(\n  $set-width: false,\n  $query: feature-targeting.all(),\n  $height: $height,\n  $width: $width\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 50%;\n    height: $height;\n  }\n\n  @if $set-width {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.ignore-next-line();\n      left: 50%;\n      width: $width;\n      transform: translate(-50%, -50%);\n    }\n  } @else {\n    @include feature-targeting.targets($feat-structure) {\n      left: 0;\n      right: 0;\n      transform: translateY(-50%);\n    }\n  }\n}\n\n/// Applies margin to the component with the increased touch target,\n/// to compensate for the touch target.\n@mixin margin(\n  $component-height,\n  $component-width: null,\n  $touch-target-height: $height,\n  $touch-target-width: $width,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  $vertical-margin-value: math.div($touch-target-height - $component-height, 2);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-top: $vertical-margin-value;\n    margin-bottom: $vertical-margin-value;\n  }\n\n  @if $component-width {\n    $horizontal-margin-value: math.div(\n      $touch-target-width - $component-width,\n      2\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      margin-right: $horizontal-margin-value;\n      margin-left: $horizontal-margin-value;\n    }\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/theme/custom-properties';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use './ripple-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include static-styles($query: $query);\n\n  .mdc-ripple-surface {\n    @include ripple-theme.states($query: $query);\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-ripple-surface {\n    @include surface($query: $query);\n    @include radius-bounded($query: $query);\n    @include surface-styles($query: $query);\n  }\n\n  .mdc-ripple-surface[data-mdc-ripple-is-unbounded],\n  .mdc-ripple-upgraded--unbounded {\n    @include radius-unbounded($query: $query);\n    @include unbounded-styles($query: $query);\n  }\n}\n\n/// Sets all states (including hover, focus, press, activated and selected) with\n/// given color as base color.\n///\n/// This mixin is for internal use only. Use `ripple-theme.states($color)` mixin\n/// to set interactive states (hover, focus & press) color.\n///\n/// @param {Color|String} $color - Target base color. Can be valid CSS color or\n///     a color string literal (i.e., `primary`, `secondary`, etc).\n@mixin states-for-color($color, $query: feature-targeting.all()) {\n  @include ripple-theme.states($color, $query: $query);\n  @include ripple-theme.states-activated($color, $query: $query);\n  @include ripple-theme.states-selected($color, $query: $query);\n}\n\n@mixin surface-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: relative;\n    outline: none;\n    overflow: hidden;\n  }\n}\n\n@mixin unbounded-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    overflow: visible;\n  }\n}\n\n@mixin common($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // Ensure that styles needed by any component using MDC Ripple are emitted, but only once.\n  // (Every component using MDC Ripple imports these mixins, but doesn't necessarily import\n  // mdc-ripple.scss.)\n  @include feature-targeting.targets($feat-animation) {\n    @include base-mixins.emit-once('mdc-ripple/common/animation') {\n      @include keyframes_;\n    }\n  }\n}\n\n@mixin surface(\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $include-will-change: true // TODO(b/151931961): Remove once resolved\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    // TODO(b/151931961): Remove the following block once resolved\n    @if $include-will-change {\n      will-change: transform, opacity;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: '';\n    }\n  }\n\n  #{$ripple-target}::before {\n    @include feature-targeting.targets($feat-animation) {\n      // Also transition background-color to avoid unnatural color flashes when toggling activated/selected state\n      transition: opacity ripple-theme.$states-wash-duration linear,\n        background-color ripple-theme.$states-wash-duration linear;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that the ripple wash for hover/focus states is displayed on top of positioned child elements\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 1)\n      );\n    }\n  }\n\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 0)\n      );\n    }\n  }\n\n  // Common styles for upgraded surfaces (some of these depend on custom properties set via JS or other mixins)\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before {\n      @include feature-targeting.targets($feat-structure) {\n        transform: scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n        transform: scale(0);\n        transform-origin: center center;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--unbounded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: var(--mdc-ripple-top, 0);\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, 0);\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-activation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-radius-in ripple-theme.$translate-duration\n            forwards,\n          mdc-ripple-fg-opacity-in ripple-theme.$fade-in-duration forwards;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-deactivation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-opacity-out ripple-theme.$fade-out-duration;\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        // Retain transform from mdc-ripple-fg-radius-in activation\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n          scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n  }\n}\n\n@mixin radius-bounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{$radius});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{$radius});\n      width: $radius * 2;\n      height: $radius * 2;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n@mixin radius-unbounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{math.div($radius, 2)});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{math.div($radius, 2)});\n      width: $radius;\n      height: $radius;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        top: var(--mdc-ripple-top, calc(50% - #{math.div($radius, 2)}));\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, calc(50% - #{math.div($radius, 2)}));\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n// Common styles for a ripple target element.\n// Used for components which have an inner ripple target element.\n@mixin target-common($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    // Necessary for clicks on other inner elements (e.g. close icon in chip)\n    // to go through.\n    pointer-events: none;\n  }\n}\n\n@mixin keyframes_ {\n  @keyframes mdc-ripple-fg-radius-in {\n    from {\n      animation-timing-function: variables2.$standard-curve-timing-function;\n      // NOTE: For these keyframes, we do not need custom property fallbacks because they are only\n      // used in conjunction with `.mdc-ripple-upgraded`. Since MDCRippleFoundation checks to ensure\n      // that custom properties are supported within the browser before adding this class, we can\n      // safely use them without a fallback.\n      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    }\n\n    to {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n        scale(var(--mdc-ripple-fg-scale, 1));\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-in {\n    from {\n      animation-timing-function: linear;\n      opacity: 0;\n    }\n\n    to {\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-out {\n    from {\n      animation-timing-function: linear;\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n$deceleration-curve-timing-function: cubic-bezier(0, 0, 0.2, 1) !default;\n$standard-curve-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;\n$acceleration-curve-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;\n$sharp-curve-timing-function: cubic-bezier(0.4, 0, 0.6, 1) !default;\n\n@function enter($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $deceleration-curve-timing-function;\n}\n\n@function exit-permanent($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $acceleration-curve-timing-function;\n}\n\n@function exit-temporary($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $sharp-curve-timing-function;\n}\n\n@function standard($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $standard-curve-timing-function;\n}\n\n@function linear($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay linear;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/component/topAppBar.scss":
/*!**************************************!*\
  !*** ./src/component/topAppBar.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_topAppBar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./topAppBar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/component/topAppBar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_topAppBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_topAppBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_topAppBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_topAppBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!************************************!*\
  !*** ./src/component/topAppBar.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topAppBar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topAppBar.scss */ "./src/component/topAppBar.scss");
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/top-app-bar */ "./node_modules/@material/top-app-bar/component.js");
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/component.js");


console.log('topappbar');
// Instantiation
var topAppBarElement = document.querySelector('.mdc-top-app-bar');
var topAppBar = new _material_top_app_bar__WEBPACK_IMPORTED_MODULE_1__.MDCTopAppBar(topAppBarElement);

var iconButtonRipple = new _material_ripple__WEBPACK_IMPORTED_MODULE_2__.MDCRipple(document.querySelector('.topAppRipple'));
iconButtonRipple.unbounded = true;
})();

/******/ })()
;
//# sourceMappingURL=topAppBarc9e29f6798b6fa7bd377.js.map