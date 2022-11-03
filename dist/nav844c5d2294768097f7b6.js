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

/***/ "./node_modules/@material/dom/focus-trap.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/dom/focus-trap.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */
var FocusTrap = /** @class */ (function () {
    function FocusTrap(root, options) {
        if (options === void 0) { options = {}; }
        this.root = root;
        this.options = options;
        // Previously focused element before trapping focus.
        this.elFocusedBeforeTrapFocus = null;
    }
    /**
     * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
     * otherwises sets initial focus to the first focusable child element.
     */
    FocusTrap.prototype.trapFocus = function () {
        var focusableEls = this.getFocusableElements(this.root);
        if (focusableEls.length === 0) {
            throw new Error('FocusTrap: Element must have at least one focusable child.');
        }
        this.elFocusedBeforeTrapFocus =
            document.activeElement instanceof HTMLElement ? document.activeElement :
                null;
        this.wrapTabFocus(this.root);
        if (!this.options.skipInitialFocus) {
            this.focusInitialElement(focusableEls, this.options.initialFocusEl);
        }
    };
    /**
     * Releases focus from `root`. Also restores focus to the previously focused
     * element.
     */
    FocusTrap.prototype.releaseFocus = function () {
        [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS))
            .forEach(function (sentinelEl) {
            sentinelEl.parentElement.removeChild(sentinelEl);
        });
        if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
            this.elFocusedBeforeTrapFocus.focus();
        }
    };
    /**
     * Wraps tab focus within `el` by adding two hidden sentinel divs which are
     * used to mark the beginning and the end of the tabbable region. When
     * focused, these sentinel elements redirect focus to the first/last
     * children elements of the tabbable region, ensuring that focus is trapped
     * within that region.
     */
    FocusTrap.prototype.wrapTabFocus = function (el) {
        var _this = this;
        var sentinelStart = this.createSentinel();
        var sentinelEnd = this.createSentinel();
        sentinelStart.addEventListener('focus', function () {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) {
                focusableEls[focusableEls.length - 1].focus();
            }
        });
        sentinelEnd.addEventListener('focus', function () {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) {
                focusableEls[0].focus();
            }
        });
        el.insertBefore(sentinelStart, el.children[0]);
        el.appendChild(sentinelEnd);
    };
    /**
     * Focuses on `initialFocusEl` if defined and a child of the root element.
     * Otherwise, focuses on the first focusable child element of the root.
     */
    FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
        var focusIndex = 0;
        if (initialFocusEl) {
            focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
        }
        focusableEls[focusIndex].focus();
    };
    FocusTrap.prototype.getFocusableElements = function (root) {
        var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
        return focusableEls.filter(function (el) {
            var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' ||
                el.getAttribute('disabled') != null ||
                el.getAttribute('hidden') != null ||
                el.getAttribute('aria-hidden') === 'true';
            var isTabbableAndVisible = el.tabIndex >= 0 &&
                el.getBoundingClientRect().width > 0 &&
                !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
            var isProgrammaticallyHidden = false;
            if (isTabbableAndVisible) {
                var style = getComputedStyle(el);
                isProgrammaticallyHidden =
                    style.display === 'none' || style.visibility === 'hidden';
            }
            return isTabbableAndVisible && !isProgrammaticallyHidden;
        });
    };
    FocusTrap.prototype.createSentinel = function () {
        var sentinel = document.createElement('div');
        sentinel.setAttribute('tabindex', '0');
        // Don't announce in screen readers.
        sentinel.setAttribute('aria-hidden', 'true');
        sentinel.classList.add(FOCUS_SENTINEL_CLASS);
        return sentinel;
    };
    return FocusTrap;
}());

//# sourceMappingURL=focus-trap.js.map

/***/ }),

/***/ "./node_modules/@material/dom/keyboard.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/keyboard.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY": () => (/* binding */ KEY),
/* harmony export */   "isNavigationEvent": () => (/* binding */ isNavigationEvent),
/* harmony export */   "normalizeKey": () => (/* binding */ normalizeKey)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
 * KEY provides normalized string values for keys.
 */
var KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
    ESCAPE: 'Escape',
    TAB: 'Tab',
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9,
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) {
        return key;
    }
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
        return mappedKey;
    }
    return KEY.UNKNOWN;
}
/**
 * isNavigationEvent returns whether the event is a navigation event
 */
function isNavigationEvent(evt) {
    return navigationKeys.has(normalizeKey(evt));
}
//# sourceMappingURL=keyboard.js.map

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

/***/ "./node_modules/@material/drawer/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/drawer/component.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCDrawer": () => (/* binding */ MDCDrawer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/focus-trap */ "./node_modules/@material/dom/focus-trap.js");
/* harmony import */ var _material_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/list/component */ "./node_modules/@material/list/component.js");
/* harmony import */ var _dismissible_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dismissible/foundation */ "./node_modules/@material/drawer/dismissible/foundation.js");
/* harmony import */ var _modal_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/foundation */ "./node_modules/@material/drawer/modal/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/@material/drawer/util.js");
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







var cssClasses = _dismissible_foundation__WEBPACK_IMPORTED_MODULE_0__.MDCDismissibleDrawerFoundation.cssClasses, strings = _dismissible_foundation__WEBPACK_IMPORTED_MODULE_0__.MDCDismissibleDrawerFoundation.strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */
var MDCDrawer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MDCDrawer, _super);
    function MDCDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCDrawer.attachTo = function (root) {
        return new MDCDrawer(root);
    };
    Object.defineProperty(MDCDrawer.prototype, "open", {
        /**
         * @return boolean Proxies to the foundation's `open`/`close` methods.
         * Also returns true if drawer is in the open position.
         */
        get: function () {
            return this.foundation.isOpen();
        },
        /**
         * Toggles the drawer open and closed.
         */
        set: function (isOpen) {
            if (isOpen) {
                this.foundation.open();
            }
            else {
                this.foundation.close();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDrawer.prototype, "list", {
        // initialSyncWithDOM()
        get: function () {
            return this.innerList;
        },
        enumerable: false,
        configurable: true
    });
    MDCDrawer.prototype.initialize = function (focusTrapFactory, listFactory) {
        if (focusTrapFactory === void 0) { focusTrapFactory = function (el) { return new _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_2__.FocusTrap(el); }; }
        if (listFactory === void 0) { listFactory = function (el) { return new _material_list_component__WEBPACK_IMPORTED_MODULE_3__.MDCList(el); }; }
        var listEl = this.root.querySelector(strings.LIST_SELECTOR);
        if (listEl) {
            this.innerList = listFactory(listEl);
            this.innerList.wrapFocus = true;
        }
        this.focusTrapFactory = focusTrapFactory;
    };
    MDCDrawer.prototype.initialSyncWithDOM = function () {
        var _this = this;
        var MODAL = cssClasses.MODAL;
        var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
        this.scrim = this.root.parentNode
            .querySelector(SCRIM_SELECTOR);
        if (this.scrim && this.root.classList.contains(MODAL)) {
            this.handleScrimClick = function () {
                return _this.foundation.handleScrimClick();
            };
            this.scrim.addEventListener('click', this.handleScrimClick);
            this.focusTrap = _util__WEBPACK_IMPORTED_MODULE_4__.createFocusTrapInstance(this.root, this.focusTrapFactory);
        }
        this.handleKeydown = function (evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleTransitionEnd = function (evt) {
            _this.foundation.handleTransitionEnd(evt);
        };
        this.listen('keydown', this.handleKeydown);
        this.listen('transitionend', this.handleTransitionEnd);
    };
    MDCDrawer.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten('transitionend', this.handleTransitionEnd);
        if (this.innerList) {
            this.innerList.destroy();
        }
        var MODAL = cssClasses.MODAL;
        if (this.scrim && this.handleScrimClick &&
            this.root.classList.contains(MODAL)) {
            this.scrim.removeEventListener('click', this.handleScrimClick);
            // Ensure drawer is closed to hide scrim and release focus
            this.open = false;
        }
    };
    MDCDrawer.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            elementHasClass: function (element, className) {
                return element.classList.contains(className);
            },
            saveFocus: function () {
                _this.previousFocus = document.activeElement;
            },
            restoreFocus: function () {
                var previousFocus = _this.previousFocus;
                if (previousFocus && previousFocus.focus &&
                    _this.root.contains(document.activeElement)) {
                    previousFocus.focus();
                }
            },
            focusActiveNavigationItem: function () {
                var activeNavItemEl = _this.root.querySelector(strings.LIST_ITEM_ACTIVATED_SELECTOR);
                if (activeNavItemEl) {
                    activeNavItemEl.focus();
                }
            },
            notifyClose: function () {
                _this.emit(strings.CLOSE_EVENT, {}, true /* shouldBubble */);
            },
            notifyOpen: function () {
                _this.emit(strings.OPEN_EVENT, {}, true /* shouldBubble */);
            },
            trapFocus: function () {
                _this.focusTrap.trapFocus();
            },
            releaseFocus: function () {
                _this.focusTrap.releaseFocus();
            },
        };
        // tslint:enable:object-literal-sort-keys
        var DISMISSIBLE = cssClasses.DISMISSIBLE, MODAL = cssClasses.MODAL;
        if (this.root.classList.contains(DISMISSIBLE)) {
            return new _dismissible_foundation__WEBPACK_IMPORTED_MODULE_0__.MDCDismissibleDrawerFoundation(adapter);
        }
        else if (this.root.classList.contains(MODAL)) {
            return new _modal_foundation__WEBPACK_IMPORTED_MODULE_5__.MDCModalDrawerFoundation(adapter);
        }
        else {
            throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
        }
    };
    return MDCDrawer;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_6__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/drawer/constants.js ***!
  \****************************************************/
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
    ANIMATE: 'mdc-drawer--animate',
    CLOSING: 'mdc-drawer--closing',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    OPENING: 'mdc-drawer--opening',
    ROOT: 'mdc-drawer',
};
var strings = {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
    LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
    LIST_ITEM_ACTIVATED_SELECTOR: '.mdc-list-item--activated,.mdc-deprecated-list-item--activated',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/dismissible/foundation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/drawer/dismissible/foundation.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCDismissibleDrawerFoundation": () => (/* binding */ MDCDismissibleDrawerFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/drawer/constants.js");
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



var MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCDismissibleDrawerFoundation, _super);
    function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCDismissibleDrawerFoundation.defaultAdapter), adapter)) || this;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                elementHasClass: function () { return false; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                focusActiveNavigationItem: function () { return undefined; },
                trapFocus: function () { return undefined; },
                releaseFocus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCDismissibleDrawerFoundation.prototype.destroy = function () {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
        }
    };
    /**
     * Opens the drawer from the closed state.
     */
    MDCDismissibleDrawerFoundation.prototype.open = function () {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPEN);
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPENING);
        });
        this.adapter.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */
    MDCDismissibleDrawerFoundation.prototype.close = function () {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPENING) ||
            this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */
    MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */
    MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */
    MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
        var OPENING = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPENING, CLOSING = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CLOSING, OPEN = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPEN, ANIMATE = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ANIMATE, ROOT = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
        var isRootElement = this.isElement(evt.target) &&
            this.adapter.elementHasClass(evt.target, ROOT);
        if (!isRootElement) {
            return;
        }
        if (this.isClosing()) {
            this.adapter.removeClass(OPEN);
            this.closed();
            this.adapter.restoreFocus();
            this.adapter.notifyClose();
        }
        else {
            this.adapter.focusActiveNavigationItem();
            this.opened();
            this.adapter.notifyOpen();
        }
        this.adapter.removeClass(ANIMATE);
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */
    MDCDismissibleDrawerFoundation.prototype.opened = function () { }; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */
    MDCDismissibleDrawerFoundation.prototype.closed = function () { }; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation.prototype.isElement = function (element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCDismissibleDrawerFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/modal/foundation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/drawer/modal/foundation.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCModalDrawerFoundation": () => (/* binding */ MDCModalDrawerFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dismissible_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dismissible/foundation */ "./node_modules/@material/drawer/dismissible/foundation.js");
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
var MDCModalDrawerFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCModalDrawerFoundation, _super);
    function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */
    MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */
    MDCModalDrawerFoundation.prototype.opened = function () {
        this.adapter.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */
    MDCModalDrawerFoundation.prototype.closed = function () {
        this.adapter.releaseFocus();
    };
    return MDCModalDrawerFoundation;
}(_dismissible_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCDismissibleDrawerFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCModalDrawerFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/drawer/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/drawer/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFocusTrapInstance": () => (/* binding */ createFocusTrapInstance)
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
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
    return focusTrapFactory(surfaceEl, {
        // Component handles focusing on active nav item.
        skipInitialFocus: true,
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/list/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/component.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCList": () => (/* binding */ MDCList)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/list/foundation.js");
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





var MDCList = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCList, _super);
    function MDCList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList.prototype, "vertical", {
        set: function (value) {
            this.foundation.setVerticalOrientation(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "listElements", {
        get: function () {
            return Array.from(this.root.querySelectorAll("." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_CLASS]));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "wrapFocus", {
        set: function (value) {
            this.foundation.setWrapFocus(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "typeaheadInProgress", {
        /**
         * @return Whether typeahead is currently matching a user-specified prefix.
         */
        get: function () {
            return this.foundation.isTypeaheadInProgress();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "hasTypeahead", {
        /**
         * Sets whether typeahead functionality is enabled on the list.
         * @param hasTypeahead Whether typeahead is enabled.
         */
        set: function (hasTypeahead) {
            this.foundation.setHasTypeahead(hasTypeahead);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "singleSelection", {
        set: function (isSingleSelectionList) {
            this.foundation.setSingleSelection(isSingleSelectionList);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "disabledItemsFocusable", {
        set: function (areDisabledItemsFocusable) {
            this.foundation.setDisabledItemsFocusable(areDisabledItemsFocusable);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "selectedIndex", {
        get: function () {
            return this.foundation.getSelectedIndex();
        },
        set: function (index) {
            this.foundation.setSelectedIndex(index);
        },
        enumerable: false,
        configurable: true
    });
    MDCList.attachTo = function (root) {
        return new MDCList(root);
    };
    MDCList.prototype.initialSyncWithDOM = function () {
        this.isEvolutionEnabled =
            _constants__WEBPACK_IMPORTED_MODULE_1__.evolutionAttribute in this.root.dataset;
        if (this.isEvolutionEnabled) {
            this.classNameMap = _constants__WEBPACK_IMPORTED_MODULE_1__.evolutionClassNameMap;
        }
        else if ((0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__.matches)(this.root, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.DEPRECATED_SELECTOR)) {
            this.classNameMap = _constants__WEBPACK_IMPORTED_MODULE_1__.deprecatedClassNameMap;
        }
        else {
            this.classNameMap =
                Object.values(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses)
                    .reduce(function (obj, className) {
                    obj[className] = className;
                    return obj;
                }, {});
        }
        this.handleClick = this.handleClickEvent.bind(this);
        this.handleKeydown = this.handleKeydownEvent.bind(this);
        this.focusInEventListener = this.handleFocusInEvent.bind(this);
        this.focusOutEventListener = this.handleFocusOutEvent.bind(this);
        this.listen('keydown', this.handleKeydown);
        this.listen('click', this.handleClick);
        this.listen('focusin', this.focusInEventListener);
        this.listen('focusout', this.focusOutEventListener);
        this.layout();
        this.initializeListType();
        this.ensureFocusable();
    };
    MDCList.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten('click', this.handleClick);
        this.unlisten('focusin', this.focusInEventListener);
        this.unlisten('focusout', this.focusOutEventListener);
    };
    MDCList.prototype.layout = function () {
        var direction = this.root.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_ORIENTATION);
        this.vertical = direction !== _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_ORIENTATION_HORIZONTAL;
        var itemSelector = "." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_CLASS] + ":not([tabindex])";
        var childSelector = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.FOCUSABLE_CHILD_ELEMENTS;
        // List items need to have at least tabindex=-1 to be focusable.
        var itemEls = this.root.querySelectorAll(itemSelector);
        if (itemEls.length) {
            Array.prototype.forEach.call(itemEls, function (el) {
                el.setAttribute('tabindex', '-1');
            });
        }
        // Child button/a elements are not tabbable until the list item is focused.
        var focusableChildEls = this.root.querySelectorAll(childSelector);
        if (focusableChildEls.length) {
            Array.prototype.forEach.call(focusableChildEls, function (el) {
                el.setAttribute('tabindex', '-1');
            });
        }
        if (this.isEvolutionEnabled) {
            this.foundation.setUseSelectedAttribute(true);
        }
        this.foundation.layout();
    };
    /**
     * Extracts the primary text from a list item.
     * @param item The list item element.
     * @return The primary text in the element.
     */
    MDCList.prototype.getPrimaryText = function (item) {
        var _a;
        var primaryText = item.querySelector("." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS]);
        if (this.isEvolutionEnabled || primaryText) {
            return (_a = primaryText === null || primaryText === void 0 ? void 0 : primaryText.textContent) !== null && _a !== void 0 ? _a : '';
        }
        var singleLineText = item.querySelector("." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_TEXT_CLASS]);
        return (singleLineText && singleLineText.textContent) || '';
    };
    /**
     * Initialize selectedIndex value based on pre-selected list items.
     */
    MDCList.prototype.initializeListType = function () {
        var _this = this;
        this.isInteractive =
            (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__.matches)(this.root, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_INTERACTIVE_ROLES_SELECTOR);
        if (this.isEvolutionEnabled && this.isInteractive) {
            var selection = Array.from(this.root.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.SELECTED_ITEM_SELECTOR), function (listItem) { return _this.listElements.indexOf(listItem); });
            if ((0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__.matches)(this.root, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_MULTI_SELECTABLE_SELECTOR)) {
                this.selectedIndex = selection;
            }
            else if (selection.length > 0) {
                this.selectedIndex = selection[0];
            }
            return;
        }
        var checkboxListItems = this.root.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
        var radioSelectedListItem = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex = Array.from(preselectedItems, function (listItem) { return _this.listElements.indexOf(listItem); });
        }
        else if (radioSelectedListItem) {
            this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
    };
    /**
     * Updates the list item at itemIndex to the desired isEnabled state.
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
        this.foundation.setEnabled(itemIndex, isEnabled);
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Defaults to
     *     the currently focused index.
     * @return The index of the matched item.
     */
    MDCList.prototype.typeaheadMatchItem = function (nextChar, startingIndex) {
        return this.foundation.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */ true);
    };
    MDCList.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.add(_this.classNameMap[className]);
                }
            },
            focusItemAtIndex: function (index) {
                var element = _this.listElements[index];
                if (element) {
                    element.focus();
                }
            },
            getAttributeForElementIndex: function (index, attr) {
                return _this.listElements[index].getAttribute(attr);
            },
            getFocusedElementIndex: function () {
                return _this.listElements.indexOf(document.activeElement);
            },
            getListItemCount: function () { return _this.listElements.length; },
            getPrimaryTextAtIndex: function (index) {
                return _this.getPrimaryText(_this.listElements[index]);
            },
            hasCheckboxAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function (index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function () {
                return _this.root !== document.activeElement &&
                    _this.root.contains(document.activeElement);
            },
            isRootFocused: function () { return document.activeElement === _this.root; },
            listItemAtIndexHasClass: function (index, className) {
                return _this.listElements[index].classList.contains(_this.classNameMap[className]);
            },
            notifyAction: function (index) {
                _this.emit(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ACTION_EVENT, { index: index }, /** shouldBubble */ true);
            },
            notifySelectionChange: function (changedIndices) {
                _this.emit(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.SELECTION_CHANGE_EVENT, { changedIndices: changedIndices }, /** shouldBubble */ true);
            },
            removeClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.remove(_this.classNameMap[className]);
                }
            },
            setAttributeForElementIndex: function (index, attr, value) {
                var element = _this.listElements[index];
                if (element) {
                    element.setAttribute(attr, value);
                }
            },
            setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var selector = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
                Array.prototype.forEach.call(element.querySelectorAll(selector), function (el) {
                    el.setAttribute('tabindex', tabIndexValue);
                });
            },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_3__.MDCListFoundation(adapter);
    };
    /**
     * Ensures that at least one item is focusable if the list is interactive and
     * doesn't specify a suitable tabindex.
     */
    MDCList.prototype.ensureFocusable = function () {
        if (this.isEvolutionEnabled && this.isInteractive) {
            if (!this.root.querySelector("." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_CLASS] + "[tabindex=\"0\"]")) {
                var index = this.initialFocusIndex();
                if (index !== -1) {
                    this.listElements[index].tabIndex = 0;
                }
            }
        }
    };
    MDCList.prototype.initialFocusIndex = function () {
        if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) {
            return this.selectedIndex[0];
        }
        if (typeof this.selectedIndex === 'number' &&
            this.selectedIndex !== _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            return this.selectedIndex;
        }
        var el = this.root.querySelector("." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_DISABLED_CLASS] + ")");
        if (el === null) {
            return -1;
        }
        return this.getListItemIndex(el);
    };
    /**
     * Used to figure out which list item this event is targetting. Or returns -1
     * if there is no list item
     */
    MDCList.prototype.getListItemIndex = function (el) {
        var nearestParent = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__.closest)(el, "." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_CLASS] + ", ." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ROOT]);
        // Get the index of the element if it is a list item.
        if (nearestParent &&
            (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__.matches)(nearestParent, "." + this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_CLASS])) {
            return this.listElements.indexOf(nearestParent);
        }
        return -1;
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    MDCList.prototype.handleFocusInEvent = function (evt) {
        var index = this.getListItemIndex(evt.target);
        this.foundation.handleFocusIn(index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    MDCList.prototype.handleFocusOutEvent = function (evt) {
        var index = this.getListItemIndex(evt.target);
        this.foundation.handleFocusOut(index);
    };
    /**
     * Used to figure out which element was focused when keydown event occurred
     * before sending the event to the foundation.
     */
    MDCList.prototype.handleKeydownEvent = function (evt) {
        var index = this.getListItemIndex(evt.target);
        var target = evt.target;
        this.foundation.handleKeydown(evt, target.classList.contains(this.classNameMap[_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_CLASS]), index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */
    MDCList.prototype.handleClickEvent = function (evt) {
        var index = this.getListItemIndex(evt.target);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the
        // checkbox will have 2 change events.
        var toggleCheckbox = !(0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__.matches)(target, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.CHECKBOX_RADIO_SELECTOR);
        this.foundation.handleClick(index, toggleCheckbox, evt);
    };
    return MDCList;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_4__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/list/constants.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "deprecatedClassNameMap": () => (/* binding */ deprecatedClassNameMap),
/* harmony export */   "evolutionAttribute": () => (/* binding */ evolutionAttribute),
/* harmony export */   "evolutionClassNameMap": () => (/* binding */ evolutionClassNameMap),
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
var _a, _b;
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
    LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
    ROOT: 'mdc-list',
};
var evolutionClassNameMap = (_a = {},
    _a["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated',
    _a["" + cssClasses.LIST_ITEM_CLASS] = 'mdc-list-item',
    _a["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled',
    _a["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected',
    _a["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text',
    _a["" + cssClasses.ROOT] = 'mdc-list',
    _a);
var deprecatedClassNameMap = (_b = {},
    _b["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated',
    _b["" + cssClasses.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item',
    _b["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled',
    _b["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected',
    _b["" + cssClasses.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text',
    _b["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text',
    _b["" + cssClasses.ROOT] = 'mdc-deprecated-list',
    _b);
var strings = {
    ACTION_EVENT: 'MDCList:action',
    SELECTION_CHANGE_EVENT: 'MDCList:selectionChange',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
};
var numbers = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
var evolutionAttribute = 'evolution';

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/list/events.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/list/events.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preventDefaultEvent": () => (/* binding */ preventDefaultEvent)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
/**
 * Ensures that preventDefault is only called if the containing element
 * doesn't consume the event, and it will cause an unintended scroll.
 *
 * @param evt keyboard event to be prevented.
 */
var preventDefaultEvent = function (evt) {
    var target = evt.target;
    if (!target) {
        return;
    }
    var tagName = ("" + target.tagName).toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
    }
};
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@material/list/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/list/foundation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCListFoundation": () => (/* binding */ MDCListFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/keyboard */ "./node_modules/@material/dom/keyboard.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./node_modules/@material/list/events.js");
/* harmony import */ var _typeahead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeahead */ "./node_modules/@material/list/typeahead.js");
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






function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
/** List of modifier keys to consider while handling keyboard events. */
var handledModifierKeys = ['Alt', 'Control', 'Meta', 'Shift'];
/** Checks if the event has the given modifier keys. */
function createModifierChecker(event) {
    var eventModifiers = new Set(event ? handledModifierKeys.filter(function (m) { return event.getModifierState(m); }) : []);
    return function (modifiers) {
        return modifiers.every(function (m) { return eventModifiers.has(m); }) &&
            modifiers.length === eventModifiers.size;
    };
}
var MDCListFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCListFoundation.defaultAdapter), adapter)) || this;
        _this.wrapFocus = false;
        _this.isVertical = true;
        _this.isSingleSelectionList = false;
        _this.areDisabledItemsFocusable = true;
        _this.selectedIndex = _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX;
        _this.focusedItemIndex = _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX;
        _this.useActivatedClass = false;
        _this.useSelectedAttr = false;
        _this.ariaCurrentAttrValue = null;
        _this.isCheckboxList = false;
        _this.isRadioList = false;
        _this.lastSelectedIndex = null;
        _this.hasTypeahead = false;
        // Transiently holds current typeahead prefix from user.
        _this.typeaheadState = _typeahead__WEBPACK_IMPORTED_MODULE_2__.initState();
        _this.sortedIndexByFirstChar = new Map();
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClassForElementIndex: function () { return undefined; },
                focusItemAtIndex: function () { return undefined; },
                getAttributeForElementIndex: function () { return null; },
                getFocusedElementIndex: function () { return 0; },
                getListItemCount: function () { return 0; },
                hasCheckboxAtIndex: function () { return false; },
                hasRadioAtIndex: function () { return false; },
                isCheckboxCheckedAtIndex: function () { return false; },
                isFocusInsideList: function () { return false; },
                isRootFocused: function () { return false; },
                listItemAtIndexHasClass: function () { return false; },
                notifyAction: function () { return undefined; },
                notifySelectionChange: function () { },
                removeClassForElementIndex: function () { return undefined; },
                setAttributeForElementIndex: function () { return undefined; },
                setCheckedCheckboxOrRadioAtIndex: function () { return undefined; },
                setTabIndexForListItemChildren: function () { return undefined; },
                getPrimaryTextAtIndex: function () { return ''; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter.getListItemCount() === 0) {
            return;
        }
        // TODO(b/172274142): consider all items when determining the list's type.
        if (this.adapter.hasCheckboxAtIndex(0)) {
            this.isCheckboxList = true;
        }
        else if (this.adapter.hasRadioAtIndex(0)) {
            this.isRadioList = true;
        }
        else {
            this.maybeInitializeSingleSelection();
        }
        if (this.hasTypeahead) {
            this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
        }
    };
    /** Returns the index of the item that was last focused. */
    MDCListFoundation.prototype.getFocusedItemIndex = function () {
        return this.focusedItemIndex;
    };
    /** Toggles focus wrapping with keyboard navigation. */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus = value;
    };
    /**
     * Toggles orientation direction for keyboard navigation (true for vertical,
     * false for horizontal).
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical = value;
    };
    /** Toggles single-selection behavior. */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList = value;
        if (value) {
            this.maybeInitializeSingleSelection();
            this.selectedIndex = this.getSelectedIndexFromDOM();
        }
    };
    MDCListFoundation.prototype.setDisabledItemsFocusable = function (value) {
        this.areDisabledItemsFocusable = value;
    };
    /**
     * Automatically determines whether the list is single selection list. If so,
     * initializes the internal state to match the selected item.
     */
    MDCListFoundation.prototype.maybeInitializeSingleSelection = function () {
        var selectedItemIndex = this.getSelectedIndexFromDOM();
        if (selectedItemIndex === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX)
            return;
        var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
        if (hasActivatedClass) {
            this.setUseActivatedClass(true);
        }
        this.isSingleSelectionList = true;
        this.selectedIndex = selectedItemIndex;
    };
    /** @return Index of the first selected item based on the DOM state. */
    MDCListFoundation.prototype.getSelectedIndexFromDOM = function () {
        var selectedIndex = _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX;
        var listItemsCount = this.adapter.getListItemCount();
        for (var i = 0; i < listItemsCount; i++) {
            var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_SELECTED_CLASS);
            var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
            if (!(hasSelectedClass || hasActivatedClass)) {
                continue;
            }
            selectedIndex = i;
            break;
        }
        return selectedIndex;
    };
    /**
     * Sets whether typeahead is enabled on the list.
     * @param hasTypeahead Whether typeahead is enabled.
     */
    MDCListFoundation.prototype.setHasTypeahead = function (hasTypeahead) {
        this.hasTypeahead = hasTypeahead;
        if (hasTypeahead) {
            this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
        }
    };
    /**
     * @return Whether typeahead is currently matching a user-specified prefix.
     */
    MDCListFoundation.prototype.isTypeaheadInProgress = function () {
        return this.hasTypeahead &&
            _typeahead__WEBPACK_IMPORTED_MODULE_2__.isTypingInProgress(this.typeaheadState);
    };
    /** Toggle use of the "activated" CSS class. */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass = useActivated;
    };
    /**
     * Toggles use of the selected attribute (true for aria-selected, false for
     * aria-checked).
     */
    MDCListFoundation.prototype.setUseSelectedAttribute = function (useSelected) {
        this.useSelectedAttr = useSelected;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index, options) {
        if (options === void 0) { options = {}; }
        if (!this.isIndexValid(index)) {
            return;
        }
        if (this.isCheckboxList) {
            this.setCheckboxAtIndex(index, options);
        }
        else if (this.isRadioList) {
            this.setRadioAtIndex(index, options);
        }
        else {
            this.setSingleSelectionAtIndex(index, options);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (listItemIndex) {
        if (listItemIndex >= 0) {
            this.focusedItemIndex = listItemIndex;
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '0');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '-1');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */
        setTimeout(function () {
            if (!_this.adapter.isFocusInsideList()) {
                _this.setTabindexToFirstSelectedOrFocusedItem();
            }
        }, 0);
    };
    MDCListFoundation.prototype.isIndexDisabled = function (index) {
        return this.adapter.listItemAtIndexHasClass(index, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_DISABLED_CLASS);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (event, isRootListItem, listItemIndex) {
        var _this = this;
        var _a;
        var isArrowLeft = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__.normalizeKey)(event) === 'ArrowLeft';
        var isArrowUp = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__.normalizeKey)(event) === 'ArrowUp';
        var isArrowRight = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__.normalizeKey)(event) === 'ArrowRight';
        var isArrowDown = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__.normalizeKey)(event) === 'ArrowDown';
        var isHome = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__.normalizeKey)(event) === 'Home';
        var isEnd = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__.normalizeKey)(event) === 'End';
        var isEnter = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__.normalizeKey)(event) === 'Enter';
        var isSpace = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_3__.normalizeKey)(event) === 'Spacebar';
        // The keys for forward and back differ based on list orientation.
        var isForward = (this.isVertical && isArrowDown) || (!this.isVertical && isArrowRight);
        var isBack = (this.isVertical && isArrowUp) || (!this.isVertical && isArrowLeft);
        // Have to check both upper and lower case, because having caps lock on
        // affects the value.
        var isLetterA = event.key === 'A' || event.key === 'a';
        var eventHasModifiers = createModifierChecker(event);
        if (this.adapter.isRootFocused()) {
            if ((isBack || isEnd) && eventHasModifiers([])) {
                event.preventDefault();
                this.focusLastElement();
            }
            else if ((isForward || isHome) && eventHasModifiers([])) {
                event.preventDefault();
                this.focusFirstElement();
            }
            else if (isBack && eventHasModifiers(['Shift']) && this.isCheckboxList) {
                event.preventDefault();
                var focusedIndex = this.focusLastElement();
                if (focusedIndex !== -1) {
                    this.setSelectedIndexOnAction(focusedIndex, false);
                }
            }
            else if (isForward && eventHasModifiers(['Shift']) && this.isCheckboxList) {
                event.preventDefault();
                var focusedIndex = this.focusFirstElement();
                if (focusedIndex !== -1) {
                    this.setSelectedIndexOnAction(focusedIndex, false);
                }
            }
            if (this.hasTypeahead) {
                var handleKeydownOpts = {
                    event: event,
                    focusItemAtIndex: function (index) {
                        _this.focusItemAtIndex(index);
                    },
                    focusedItemIndex: -1,
                    isTargetListItem: isRootListItem,
                    sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                    isItemAtIndexDisabled: function (index) { return _this.isIndexDisabled(index); },
                };
                _typeahead__WEBPACK_IMPORTED_MODULE_2__.handleKeydown(handleKeydownOpts, this.typeaheadState);
            }
            return;
        }
        var currentIndex = this.adapter.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        if (isForward && eventHasModifiers([])) {
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            this.focusNextElement(currentIndex);
        }
        else if (isBack && eventHasModifiers([])) {
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            this.focusPrevElement(currentIndex);
        }
        else if (isForward && eventHasModifiers(['Shift']) && this.isCheckboxList) {
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            var focusedIndex = this.focusNextElement(currentIndex);
            if (focusedIndex !== -1) {
                this.setSelectedIndexOnAction(focusedIndex, false);
            }
        }
        else if (isBack && eventHasModifiers(['Shift']) && this.isCheckboxList) {
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            var focusedIndex = this.focusPrevElement(currentIndex);
            if (focusedIndex !== -1) {
                this.setSelectedIndexOnAction(focusedIndex, false);
            }
        }
        else if (isHome && eventHasModifiers([])) {
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            this.focusFirstElement();
        }
        else if (isEnd && eventHasModifiers([])) {
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            this.focusLastElement();
        }
        else if (isHome && eventHasModifiers(['Control', 'Shift']) &&
            this.isCheckboxList) {
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            this.focusFirstElement();
            this.toggleCheckboxRange(0, currentIndex, currentIndex);
        }
        else if (isEnd && eventHasModifiers(['Control', 'Shift']) &&
            this.isCheckboxList) {
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            this.focusLastElement();
            this.toggleCheckboxRange(currentIndex, this.adapter.getListItemCount() - 1, currentIndex);
        }
        else if (isLetterA && eventHasModifiers(['Control']) && this.isCheckboxList) {
            event.preventDefault();
            this.checkboxListToggleAll(this.selectedIndex === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX ?
                [] :
                this.selectedIndex, true);
        }
        else if ((isEnter || isSpace) && eventHasModifiers([])) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                var target = event.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
                if (this.isIndexDisabled(currentIndex)) {
                    return;
                }
                if (!this.isTypeaheadInProgress()) {
                    if (this.isSelectableList()) {
                        this.setSelectedIndexOnAction(currentIndex, false);
                    }
                    this.adapter.notifyAction(currentIndex);
                }
            }
        }
        else if ((isEnter || isSpace) && eventHasModifiers(['Shift']) &&
            this.isCheckboxList) {
            // Return early if enter key is pressed on anchor element which triggers
            // synthetic MouseEvent event.
            var target = event.target;
            if (target && target.tagName === 'A' && isEnter) {
                return;
            }
            (0,_events__WEBPACK_IMPORTED_MODULE_4__.preventDefaultEvent)(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            if (!this.isTypeaheadInProgress()) {
                this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : currentIndex, currentIndex, currentIndex);
                this.adapter.notifyAction(currentIndex);
            }
        }
        if (this.hasTypeahead) {
            var handleKeydownOpts = {
                event: event,
                focusItemAtIndex: function (index) { _this.focusItemAtIndex(index); },
                focusedItemIndex: this.focusedItemIndex,
                isTargetListItem: isRootListItem,
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                isItemAtIndexDisabled: function (index) { return _this.isIndexDisabled(index); },
            };
            _typeahead__WEBPACK_IMPORTED_MODULE_2__.handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
    };
    /**
     * Click handler for the list.
     *
     * @param index Index for the item that has been clicked.
     * @param isCheckboxAlreadyUpdatedInAdapter Whether the checkbox for
     *   the list item has already been updated in the adapter. This attribute
     *   should be set to `true` when e.g. the click event directly landed on
     *   the underlying native checkbox element which would cause the checked
     *   state to be already toggled within `adapter.isCheckboxCheckedAtIndex`.
     */
    MDCListFoundation.prototype.handleClick = function (index, isCheckboxAlreadyUpdatedInAdapter, event) {
        var _a;
        var eventHasModifiers = createModifierChecker(event);
        if (index === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            return;
        }
        if (this.isIndexDisabled(index)) {
            return;
        }
        if (eventHasModifiers([])) {
            if (this.isSelectableList()) {
                this.setSelectedIndexOnAction(index, isCheckboxAlreadyUpdatedInAdapter);
            }
            this.adapter.notifyAction(index);
        }
        else if (this.isCheckboxList && eventHasModifiers(['Shift'])) {
            this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : index, index, index);
            this.adapter.notifyAction(index);
        }
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter.getListItemCount();
        var nextIndex = index;
        var firstChecked = null;
        do {
            nextIndex++;
            if (nextIndex >= count) {
                if (this.wrapFocus) {
                    nextIndex = 0;
                }
                else {
                    // Return early because last item is already focused.
                    return index;
                }
            }
            if (nextIndex === firstChecked) {
                return -1;
            }
            firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : nextIndex;
        } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(nextIndex));
        this.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var count = this.adapter.getListItemCount();
        var prevIndex = index;
        var firstChecked = null;
        do {
            prevIndex--;
            if (prevIndex < 0) {
                if (this.wrapFocus) {
                    prevIndex = count - 1;
                }
                else {
                    // Return early because first item is already focused.
                    return index;
                }
            }
            if (prevIndex === firstChecked) {
                return -1;
            }
            firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : prevIndex;
        } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(prevIndex));
        this.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        // Pass -1 to `focusNextElement`, since it will incremement to 0 and focus
        // the first element.
        return this.focusNextElement(-1);
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        // Pass the length of the list to `focusNextElement` since it will decrement
        // to length - 1 and focus the last element.
        return this.focusPrevElement(this.adapter.getListItemCount());
    };
    MDCListFoundation.prototype.focusInitialElement = function () {
        var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.focusItemAtIndex(initialIndex);
        return initialIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
        if (!this.isIndexValid(itemIndex, false)) {
            return;
        }
        if (isEnabled) {
            this.adapter.removeClassForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DISABLED, 'false');
        }
        else {
            this.adapter.addClassForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DISABLED, 'true');
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex = function (index, options) {
        if (options === void 0) { options = {}; }
        if (this.selectedIndex === index && !options.forceUpdate) {
            return;
        }
        var selectedClassName = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass) {
            selectedClassName = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex !== _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
        }
        this.setAriaForSingleSelectionAtIndex(index);
        this.setTabindexAtIndex(index);
        if (index !== _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            this.adapter.addClassForElementIndex(index, selectedClassName);
        }
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && !options.forceUpdate) {
            this.adapter.notifySelectionChange([index]);
        }
    };
    /**
     * Sets aria attribute for single selection at given index.
     */
    MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex = function (index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            this.ariaCurrentAttrValue =
                this.adapter.getAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue !== null;
        var ariaAttribute = isAriaCurrent ? _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CURRENT : _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SELECTED;
        if (this.selectedIndex !== _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, 'false');
        }
        if (index !== _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : 'true';
            this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
        }
    };
    /**
     * Returns the attribute to use for indicating selection status.
     */
    MDCListFoundation.prototype.getSelectionAttribute = function () {
        return this.useSelectedAttr ? _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SELECTED : _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED;
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it
     * is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex = function (index, options) {
        if (options === void 0) { options = {}; }
        var selectionAttribute = this.getSelectionAttribute();
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex === index && !options.forceUpdate) {
            return;
        }
        if (this.selectedIndex !== _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, 'false');
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, 'true');
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && !options.forceUpdate) {
            this.adapter.notifySelectionChange([index]);
        }
    };
    MDCListFoundation.prototype.setCheckboxAtIndex = function (index, options) {
        if (options === void 0) { options = {}; }
        var currentIndex = this.selectedIndex;
        // If this update is not triggered by a user interaction, we do not
        // need to know about the currently selected indices and can avoid
        // constructing the `Set` for performance reasons.
        var currentlySelected = options.isUserInteraction ?
            new Set(currentIndex === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX ? [] :
                currentIndex) :
            null;
        var selectionAttribute = this.getSelectionAttribute();
        var changedIndices = [];
        for (var i = 0; i < this.adapter.getListItemCount(); i++) {
            var previousIsChecked = currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(i);
            var newIsChecked = index.indexOf(i) >= 0;
            // If the selection has changed for this item, we keep track of it
            // so that we can notify the adapter.
            if (newIsChecked !== previousIsChecked) {
                changedIndices.push(i);
            }
            this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
            this.adapter.setAttributeForElementIndex(i, selectionAttribute, newIsChecked ? 'true' : 'false');
        }
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && changedIndices.length) {
            this.adapter.notifySelectionChange(changedIndices);
        }
    };
    /**
     * Toggles the state of all checkboxes in the given range (inclusive) based on
     * the state of the checkbox at the `toggleIndex`. To determine whether to set
     * the given range to checked or unchecked, read the value of the checkbox at
     * the `toggleIndex` and negate it. Then apply that new checked state to all
     * checkboxes in the range.
     * @param fromIndex The start of the range of checkboxes to toggle
     * @param toIndex The end of the range of checkboxes to toggle
     * @param toggleIndex The index that will be used to determine the new state
     *     of the given checkbox range.
     */
    MDCListFoundation.prototype.toggleCheckboxRange = function (fromIndex, toIndex, toggleIndex) {
        this.lastSelectedIndex = toggleIndex;
        var currentlySelected = new Set(this.selectedIndex === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX ?
            [] :
            this.selectedIndex);
        var newIsChecked = !(currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(toggleIndex));
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)([fromIndex, toIndex].sort(), 2), startIndex = _a[0], endIndex = _a[1];
        var selectionAttribute = this.getSelectionAttribute();
        var changedIndices = [];
        for (var i = startIndex; i <= endIndex; i++) {
            if (this.isIndexDisabled(i)) {
                continue;
            }
            var previousIsChecked = currentlySelected.has(i);
            // If the selection has changed for this item, we keep track of it
            // so that we can notify the adapter.
            if (newIsChecked !== previousIsChecked) {
                changedIndices.push(i);
                this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
                this.adapter.setAttributeForElementIndex(i, selectionAttribute, "" + newIsChecked);
                if (newIsChecked) {
                    currentlySelected.add(i);
                }
                else {
                    currentlySelected.delete(i);
                }
            }
        }
        // If the selected value has changed, update and notify the selection change
        // to the adapter.
        if (changedIndices.length) {
            this.selectedIndex = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(currentlySelected));
            this.adapter.notifySelectionChange(changedIndices);
        }
    };
    MDCListFoundation.prototype.setTabindexAtIndex = function (index) {
        if (this.focusedItemIndex === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX && index !== 0) {
            // If some list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no
            // preselected items.
            this.adapter.setAttributeForElementIndex(0, 'tabindex', '-1');
        }
        else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
            this.adapter.setAttributeForElementIndex(this.focusedItemIndex, 'tabindex', '-1');
        }
        // Set the previous selection's tabindex to -1. We need this because
        // in selection menus that are not visible, programmatically setting an
        // option will not change focus but will change where tabindex should be 0.
        if (!(this.selectedIndex instanceof Array) &&
            this.selectedIndex !== index) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, 'tabindex', '-1');
        }
        if (index !== _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(index, 'tabindex', '0');
        }
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio
     *     list.
     */
    MDCListFoundation.prototype.isSelectableList = function () {
        return this.isSingleSelectionList || this.isCheckboxList ||
            this.isRadioList;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
        var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation.prototype.getFirstSelectedOrFocusedItemIndex = function () {
        // Action lists retain focus on the most recently focused item.
        if (!this.isSelectableList()) {
            return Math.max(this.focusedItemIndex, 0);
        }
        // Single-selection lists focus the selected item.
        if (typeof this.selectedIndex === 'number' &&
            this.selectedIndex !== _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX) {
            return this.selectedIndex;
        }
        // Multiple-selection lists focus the first selected item.
        if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) {
            return this.selectedIndex.reduce(function (minIndex, currentIndex) { return Math.min(minIndex, currentIndex); });
        }
        // Selection lists without a selection focus the first item.
        return 0;
    };
    MDCListFoundation.prototype.isIndexValid = function (index, validateListType) {
        var _this = this;
        if (validateListType === void 0) { validateListType = true; }
        if (index instanceof Array) {
            if (!this.isCheckboxList && validateListType) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            }
            else {
                return index.some(function (i) { return _this.isIndexInRange(i); });
            }
        }
        else if (typeof index === 'number') {
            if (this.isCheckboxList && validateListType) {
                throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
            }
            return this.isIndexInRange(index) ||
                this.isSingleSelectionList && index === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX;
        }
        else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange = function (index) {
        var listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    };
    /**
     * Sets selected index on user action, toggles checkboxes in checkbox lists
     * by default, unless `isCheckboxAlreadyUpdatedInAdapter` is set to `true`.
     *
     * In cases where `isCheckboxAlreadyUpdatedInAdapter` is set to `true`, the
     * UI is just updated to reflect the value returned by the adapter.
     *
     * When calling this, make sure user interaction does not toggle disabled
     * list items.
     */
    MDCListFoundation.prototype.setSelectedIndexOnAction = function (index, isCheckboxAlreadyUpdatedInAdapter) {
        this.lastSelectedIndex = index;
        if (this.isCheckboxList) {
            this.toggleCheckboxAtIndex(index, isCheckboxAlreadyUpdatedInAdapter);
            this.adapter.notifySelectionChange([index]);
        }
        else {
            this.setSelectedIndex(index, { isUserInteraction: true });
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex = function (index, isCheckboxAlreadyUpdatedInAdapter) {
        var selectionAttribute = this.getSelectionAttribute();
        var adapterIsChecked = this.adapter.isCheckboxCheckedAtIndex(index);
        // By default the checked value from the adapter is toggled unless the
        // checked state in the adapter has already been updated beforehand.
        // This can be happen when the underlying native checkbox has already
        // been updated through the native click event.
        var newCheckedValue;
        if (isCheckboxAlreadyUpdatedInAdapter) {
            newCheckedValue = adapterIsChecked;
        }
        else {
            newCheckedValue = !adapterIsChecked;
            this.adapter.setCheckedCheckboxOrRadioAtIndex(index, newCheckedValue);
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, newCheckedValue ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not
        // initialized then provide a default value.
        var selectedIndexes = this.selectedIndex === _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX ?
            [] :
            this.selectedIndex.slice();
        if (newCheckedValue) {
            selectedIndexes.push(index);
        }
        else {
            selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
        }
        this.selectedIndex = selectedIndexes;
    };
    MDCListFoundation.prototype.focusItemAtIndex = function (index) {
        this.adapter.focusItemAtIndex(index);
        this.focusedItemIndex = index;
    };
    MDCListFoundation.prototype.checkboxListToggleAll = function (currentlySelectedIndexes, isUserInteraction) {
        var count = this.adapter.getListItemCount();
        // If all items are selected, deselect everything.
        if (currentlySelectedIndexes.length === count) {
            this.setCheckboxAtIndex([], { isUserInteraction: isUserInteraction });
        }
        else {
            // Otherwise select all enabled options.
            var allIndexes = [];
            for (var i = 0; i < count; i++) {
                if (!this.isIndexDisabled(i) ||
                    currentlySelectedIndexes.indexOf(i) > -1) {
                    allIndexes.push(i);
                }
            }
            this.setCheckboxAtIndex(allIndexes, { isUserInteraction: isUserInteraction });
        }
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Only relevant
     *     when starting a new match sequence. To start a new match sequence,
     *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
     *     to clear after a set interval defined in list foundation. Defaults to
     *     the currently focused index.
     * @return The index of the matched item, or -1 if no match.
     */
    MDCListFoundation.prototype.typeaheadMatchItem = function (nextChar, startingIndex, skipFocus) {
        var _this = this;
        if (skipFocus === void 0) { skipFocus = false; }
        var opts = {
            focusItemAtIndex: function (index) {
                _this.focusItemAtIndex(index);
            },
            focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
            nextChar: nextChar,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            skipFocus: skipFocus,
            isItemAtIndexDisabled: function (index) { return _this.isIndexDisabled(index); }
        };
        return _typeahead__WEBPACK_IMPORTED_MODULE_2__.matchItem(opts, this.typeaheadState);
    };
    /**
     * Initializes the MDCListTextAndIndex data structure by indexing the current
     * list items by primary text.
     *
     * @return The primary texts of all the list items sorted by first character.
     */
    MDCListFoundation.prototype.typeaheadInitSortedIndex = function () {
        return _typeahead__WEBPACK_IMPORTED_MODULE_2__.initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    };
    /**
     * Clears the typeahead buffer.
     */
    MDCListFoundation.prototype.clearTypeaheadBuffer = function () {
        _typeahead__WEBPACK_IMPORTED_MODULE_2__.clearBuffer(this.typeaheadState);
    };
    return MDCListFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_5__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCListFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/list/typeahead.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/typeahead.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBuffer": () => (/* binding */ clearBuffer),
/* harmony export */   "handleKeydown": () => (/* binding */ handleKeydown),
/* harmony export */   "initSortedIndex": () => (/* binding */ initSortedIndex),
/* harmony export */   "initState": () => (/* binding */ initState),
/* harmony export */   "isTypingInProgress": () => (/* binding */ isTypingInProgress),
/* harmony export */   "matchItem": () => (/* binding */ matchItem)
/* harmony export */ });
/* harmony import */ var _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/dom/keyboard */ "./node_modules/@material/dom/keyboard.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./node_modules/@material/list/events.js");
/**
 * @license
 * Copyright 2020 Google Inc.
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
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */
function initState() {
    var state = {
        bufferClearTimeout: 0,
        currentFirstChar: '',
        sortedIndexCursor: 0,
        typeaheadBuffer: '',
    };
    return state;
}
/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and it's index
 */
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
    var sortedIndexByFirstChar = new Map();
    // Aggregate item text to index mapping
    for (var i = 0; i < listItemCount; i++) {
        var primaryText = getPrimaryTextByItemIndex(i).trim();
        if (!primaryText) {
            continue;
        }
        var firstChar = primaryText[0].toLowerCase();
        if (!sortedIndexByFirstChar.has(firstChar)) {
            sortedIndexByFirstChar.set(firstChar, []);
        }
        sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
    }
    // Sort the mapping
    // TODO(b/157162694): Investigate replacing forEach with Map.values()
    sortedIndexByFirstChar.forEach(function (values) {
        values.sort(function (first, second) {
            return first.index - second.index;
        });
    });
    return sortedIndexByFirstChar;
}
/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */
function matchItem(opts, state) {
    var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    clearTimeout(state.bufferClearTimeout);
    state.bufferClearTimeout = setTimeout(function () {
        clearBuffer(state);
    }, _constants__WEBPACK_IMPORTED_MODULE_0__.numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
    state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
    var index;
    if (state.typeaheadBuffer.length === 1) {
        index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
    }
    else {
        index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
    }
    if (index !== -1 && !skipFocus) {
        focusItemAtIndex(index);
    }
    return index;
}
/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */
function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
        return -1;
    }
    // Has the same firstChar been recently matched?
    // Also, did starting index remain the same between key presses?
    // If both hold true, simply increment index.
    if (firstChar === state.currentFirstChar &&
        itemsMatchingFirstChar[state.sortedIndexCursor].index ===
            focusedItemIndex) {
        state.sortedIndexCursor =
            (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
        var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
        if (!isItemAtIndexDisabled(newIndex)) {
            return newIndex;
        }
    }
    // If we're here, it means one of the following happened:
    // - either firstChar or startingIndex has changed, invalidating the
    // cursor.
    // - The next item of typeahead is disabled, so we have to look further.
    state.currentFirstChar = firstChar;
    var newCursorPosition = -1;
    var cursorPosition;
    // Find the first non-disabled item as a fallback.
    for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
        if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
            newCursorPosition = cursorPosition;
            break;
        }
    }
    // Advance cursor to first item matching the firstChar that is positioned
    // after starting item. Cursor is unchanged from fallback if there's no
    // such item.
    for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
        if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex &&
            !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
            newCursorPosition = cursorPosition;
            break;
        }
    }
    if (newCursorPosition !== -1) {
        state.sortedIndexCursor = newCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */
function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
        return -1;
    }
    // Do nothing if text already matches
    var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
    if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 &&
        !isItemAtIndexDisabled(startingItem.index)) {
        return startingItem.index;
    }
    // Find next item that matches completely; if no match, we'll eventually
    // loop around to same position
    var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var nextCursorPosition = -1;
    while (cursorPosition !== state.sortedIndexCursor) {
        var currentItem = itemsMatchingFirstChar[cursorPosition];
        var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
        var isEnabled = !isItemAtIndexDisabled(currentItem.index);
        if (matches && isEnabled) {
            nextCursorPosition = cursorPosition;
            break;
        }
        cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
    }
    if (nextCursorPosition !== -1) {
        state.sortedIndexCursor = nextCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function isTypingInProgress(state) {
    return state.typeaheadBuffer.length > 0;
}
/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function clearBuffer(state) {
    state.typeaheadBuffer = '';
}
/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicing the typeahead functionality of
 * a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @returns index of the item matched by the keydown. -1 if not matched.
 */
function handleKeydown(opts, state) {
    var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    var isArrowLeft = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__.normalizeKey)(event) === 'ArrowLeft';
    var isArrowUp = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__.normalizeKey)(event) === 'ArrowUp';
    var isArrowRight = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__.normalizeKey)(event) === 'ArrowRight';
    var isArrowDown = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__.normalizeKey)(event) === 'ArrowDown';
    var isHome = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__.normalizeKey)(event) === 'Home';
    var isEnd = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__.normalizeKey)(event) === 'End';
    var isEnter = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__.normalizeKey)(event) === 'Enter';
    var isSpace = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_1__.normalizeKey)(event) === 'Spacebar';
    if (event.altKey || event.ctrlKey || event.metaKey || isArrowLeft ||
        isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
        return -1;
    }
    var isCharacterKey = !isSpace && event.key.length === 1;
    if (isCharacterKey) {
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.preventDefaultEvent)(event);
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: event.key.toLowerCase(),
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled,
        };
        return matchItem(matchItemOpts, state);
    }
    if (!isSpace) {
        return -1;
    }
    if (isTargetListItem) {
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.preventDefaultEvent)(event);
    }
    var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
    if (typeaheadOnListItem) {
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: ' ',
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled,
        };
        // space participates in typeahead matching if in rapid typing mode
        return matchItem(matchItemOpts, state);
    }
    return -1;
}
//# sourceMappingURL=typeahead.js.map

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/component/nav.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/component/nav.scss ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".mdc-drawer {\n  border-color: rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: var(--mdc-shape-large, 0);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: var(--mdc-shape-large, 0);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n  z-index: 6;\n  width: 256px;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  height: 100%;\n  /* @noflip */ /*rtl:ignore*/\n  border-right-width: 1px;\n  /* @noflip */ /*rtl:ignore*/\n  border-right-style: solid;\n  overflow: hidden;\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-drawer .mdc-drawer__title {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mdc-drawer .mdc-deprecated-list-group__subheader {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-drawer .mdc-drawer__subtitle {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-drawer .mdc-deprecated-list-item__graphic {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-drawer .mdc-deprecated-list-item {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n  color: #6200ee;\n}\n.mdc-drawer .mdc-deprecated-list-item--activated {\n  color: rgba(98, 0, 238, 0.87);\n}\n[dir=rtl] .mdc-drawer, .mdc-drawer[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: var(--mdc-shape-large, 0);\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: var(--mdc-shape-large, 0);\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer .mdc-deprecated-list-item {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-shape-small, 4px);\n}\n.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 256px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n}\n[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content, .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 256px;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-drawer, .mdc-drawer[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-right-width: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-left-width: 1px;\n  /* @noflip */ /*rtl:ignore*/\n  border-right-style: none;\n  /* @noflip */ /*rtl:ignore*/\n  border-left-style: solid;\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer .mdc-deprecated-list-item {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n  height: calc(48px - 2 * 4px);\n  margin: 8px 8px;\n  padding: 0 8px;\n}\n.mdc-drawer .mdc-deprecated-list-item:nth-child(1) {\n  margin-top: 2px;\n}\n.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1) {\n  margin-bottom: 0;\n}\n.mdc-drawer .mdc-deprecated-list-group__subheader {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin: 0;\n  padding: 0 16px;\n}\n.mdc-drawer .mdc-deprecated-list-group__subheader::before {\n  display: inline-block;\n  width: 0;\n  height: 24px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-drawer .mdc-deprecated-list-divider {\n  margin: 3px 0 4px;\n}\n.mdc-drawer .mdc-deprecated-list-item__text,\n.mdc-drawer .mdc-deprecated-list-item__graphic {\n  pointer-events: none;\n}\n\n.mdc-drawer--animate {\n  transform: translateX(-100%);\n}\n[dir=rtl] .mdc-drawer--animate, .mdc-drawer--animate[dir=rtl] {\n  /*rtl:begin:ignore*/\n  transform: translateX(100%);\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--opening {\n  transform: translateX(0);\n  transition-duration: 250ms;\n}\n[dir=rtl] .mdc-drawer--opening, .mdc-drawer--opening[dir=rtl] {\n  /*rtl:begin:ignore*/\n  transform: translateX(0);\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--closing {\n  transform: translateX(-100%);\n  transition-duration: 200ms;\n}\n[dir=rtl] .mdc-drawer--closing, .mdc-drawer--closing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  transform: translateX(100%);\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer__header {\n  flex-shrink: 0;\n  box-sizing: border-box;\n  min-height: 64px;\n  padding: 0 16px 4px;\n}\n\n.mdc-drawer__title {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-drawer__title::before {\n  display: inline-block;\n  width: 0;\n  height: 36px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-drawer__title::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n\n.mdc-drawer__subtitle {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: 0;\n}\n.mdc-drawer__subtitle::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n\n.mdc-drawer__content {\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdc-drawer--dismissible {\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n  display: none;\n  position: absolute;\n}\n[dir=rtl] .mdc-drawer--dismissible, .mdc-drawer--dismissible[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--dismissible.mdc-drawer--open {\n  display: flex;\n}\n\n.mdc-drawer-app-content {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  position: relative;\n}\n[dir=rtl] .mdc-drawer-app-content, .mdc-drawer-app-content[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--modal {\n  /* @alternate */\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n  display: none;\n  position: fixed;\n}\n.mdc-drawer--modal + .mdc-drawer-scrim {\n  background-color: rgba(0, 0, 0, 0.32);\n}\n[dir=rtl] .mdc-drawer--modal, .mdc-drawer--modal[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--modal.mdc-drawer--open {\n  display: flex;\n}\n\n.mdc-drawer-scrim {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-drawer--open + .mdc-drawer-scrim {\n  display: block;\n}\n.mdc-drawer--animate + .mdc-drawer-scrim {\n  opacity: 0;\n}\n.mdc-drawer--opening + .mdc-drawer-scrim {\n  transition-duration: 250ms;\n  opacity: 1;\n}\n.mdc-drawer--closing + .mdc-drawer-scrim {\n  transition-duration: 200ms;\n  opacity: 0;\n}\n\n.mdc-deprecated-list {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  /* @alternate */\n  line-height: 1.5rem;\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n.mdc-deprecated-list:focus {\n  outline: none;\n}\n\n.mdc-deprecated-list-item {\n  height: 48px;\n}\n\n.mdc-deprecated-list-item__secondary-text {\n  color: rgba(0, 0, 0, 0.54);\n  /* @alternate */\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-deprecated-list-item__graphic {\n  background-color: transparent;\n}\n\n.mdc-deprecated-list-item__graphic {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-deprecated-list-item__meta {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-deprecated-list-group__subheader {\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text {\n  opacity: 0.38;\n}\n\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__primary-text,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__secondary-text {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n\n.mdc-deprecated-list-item--selected,\n.mdc-deprecated-list-item--activated {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,\n.mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-deprecated-list--dense {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 0.812rem;\n}\n\n.mdc-deprecated-list-item__wrapper {\n  display: block;\n}\n\n.mdc-deprecated-list-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 48px;\n}\n.mdc-deprecated-list-item:focus {\n  outline: none;\n}\n.mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus::before, .mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus::before, .mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused::before {\n    border-color: CanvasText;\n  }\n}\n.mdc-deprecated-list-item.mdc-deprecated-list-item--selected::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 3px double transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-deprecated-list-item.mdc-deprecated-list-item--selected::before {\n    border-color: CanvasText;\n  }\n}\n[dir=rtl] .mdc-deprecated-list-item, .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 72px;\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item, .mdc-deprecated-list--image-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 72px;\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item, .mdc-deprecated-list--video-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 20px;\n  height: 20px;\n}\n[dir=rtl] .mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list-item__graphic {\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  fill: currentColor;\n  -o-object-fit: cover;\n     object-fit: cover;\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 32px;\n  width: 24px;\n  height: 24px;\n}\n[dir=rtl] .mdc-deprecated-list-item__graphic, .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 32px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 32px;\n  width: 24px;\n  height: 24px;\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 32px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 40px;\n  height: 40px;\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 56px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 100px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-item__graphic {\n  display: inline-flex;\n}\n\n.mdc-deprecated-list-item__meta {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n}\n.mdc-deprecated-list-item__meta:not(.material-icons) {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n.mdc-deprecated-list-item[dir=rtl] .mdc-deprecated-list-item__meta, [dir=rtl] .mdc-deprecated-list-item .mdc-deprecated-list-item__meta {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n}\n\n.mdc-deprecated-list-item__text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.mdc-deprecated-list-item__text[for] {\n  pointer-events: none;\n}\n\n.mdc-deprecated-list-item__primary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-deprecated-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-deprecated-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text, .mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text::before, .mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text::before, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text::before, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text::before, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text::after, .mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text::after, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text::after, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text::after, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 24px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n\n.mdc-deprecated-list-item__secondary-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-deprecated-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text {\n  font-size: inherit;\n}\n\n.mdc-deprecated-list--dense .mdc-deprecated-list-item {\n  height: 40px;\n}\n\n.mdc-deprecated-list--two-line .mdc-deprecated-list-item__text {\n  align-self: flex-start;\n}\n\n.mdc-deprecated-list--two-line .mdc-deprecated-list-item {\n  height: 64px;\n}\n.mdc-deprecated-list--two-line.mdc-deprecated-list--video-list .mdc-deprecated-list-item, .mdc-deprecated-list--two-line.mdc-deprecated-list--image-list .mdc-deprecated-list-item, .mdc-deprecated-list--two-line.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item, .mdc-deprecated-list--two-line.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item, .mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item {\n  height: 72px;\n}\n.mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n\n.mdc-deprecated-list--two-line.mdc-deprecated-list--dense .mdc-deprecated-list-item,\n.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item {\n  height: 60px;\n}\n\n.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 36px;\n  height: 36px;\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item {\n  cursor: pointer;\n}\n\na.mdc-deprecated-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-deprecated-list-divider {\n  height: 0;\n  margin: 0;\n  border: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.mdc-deprecated-list-divider {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-deprecated-list-divider--padded {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list-divider--padded, .mdc-deprecated-list-divider--padded[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list-divider--inset {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 72px);\n}\n[dir=rtl] .mdc-deprecated-list-divider--inset, .mdc-deprecated-list-divider--inset[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded, .mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 72px);\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 72px);\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 72px);\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 88px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 88px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 88px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 104px);\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 88px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 116px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 116px);\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 116px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 116px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 132px);\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 116px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 0px);\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list-group .mdc-deprecated-list {\n  padding: 0;\n}\n\n.mdc-deprecated-list-group__subheader {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  margin: calc((3rem - 1.5rem) / 2) 16px;\n}\n\n.mdc-list-item__primary-text {\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-list-item__secondary-text {\n  color: rgba(0, 0, 0, 0.54);\n  /* @alternate */\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-list-item__overline-text {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start,\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  background-color: transparent;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start,\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list-item__end {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list-item--disabled .mdc-list-item__start,\n.mdc-list-item--disabled .mdc-list-item__content,\n.mdc-list-item--disabled .mdc-list-item__end {\n  opacity: 0.38;\n}\n\n.mdc-list-item--disabled .mdc-list-item__primary-text {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled .mdc-list-item__secondary-text {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled .mdc-list-item__overline-text {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n\n.mdc-list-item--selected .mdc-list-item__primary-text,\n.mdc-list-item--activated .mdc-list-item__primary-text {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,\n.mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-deprecated-list-group__subheader {\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-list-divider::after {\n    content: \"\";\n    display: block;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: white;\n  }\n}\n.mdc-list {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  /* @alternate */\n  line-height: 1.5rem;\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n}\n.mdc-list:focus {\n  outline: none;\n}\n\n.mdc-list-item__wrapper {\n  display: block;\n}\n\n.mdc-list-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  align-items: stretch;\n  cursor: pointer;\n}\n.mdc-list-item:focus {\n  outline: none;\n}\n.mdc-list-item.mdc-list-item--with-one-line {\n  height: 48px;\n}\n.mdc-list-item.mdc-list-item--with-two-lines {\n  height: 64px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines {\n  height: 88px;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--disabled, .mdc-list-item.mdc-list-item--non-interactive {\n  cursor: auto;\n}\n.mdc-list-item:not(.mdc-list-item--selected):focus::before, .mdc-list-item.mdc-ripple-upgraded--background-focused::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-list-item:not(.mdc-list-item--selected):focus::before, .mdc-list-item.mdc-ripple-upgraded--background-focused::before {\n    border-color: CanvasText;\n  }\n}\n.mdc-list-item.mdc-list-item--selected::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 3px double transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-list-item.mdc-list-item--selected::before {\n    border-color: CanvasText;\n  }\n}\n.mdc-list-item.mdc-list-item--selected:focus::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 3px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-list-item.mdc-list-item--selected:focus::before {\n    border-color: CanvasText;\n  }\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item__start {\n  fill: currentColor;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.mdc-list-item__end {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.mdc-list-item__content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  flex: 1;\n  pointer-events: none;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {\n  align-self: stretch;\n}\n.mdc-list-item__content[for] {\n  pointer-events: none;\n}\n\n.mdc-list-item__primary-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n\n.mdc-list-item__secondary-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {\n  white-space: normal;\n  line-height: 20px;\n}\n.mdc-list-item--with-overline .mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: auto;\n}\n\n.mdc-list-item__overline-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-overline-text-decoration, none);\n          text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 24px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n\n.mdc-list-item--with-leading-avatar.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item, .mdc-list-item--with-leading-avatar.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start, .mdc-list-item--with-leading-avatar .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  border-radius: 50%;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  width: 24px;\n  height: 24px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item, .mdc-list-item--with-leading-icon.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 32px;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start, .mdc-list-item--with-leading-icon .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 32px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-thumbnail.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-thumbnail.mdc-list-item, .mdc-list-item--with-leading-thumbnail.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-thumbnail .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-thumbnail .mdc-list-item__start, .mdc-list-item--with-leading-thumbnail .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-thumbnail .mdc-list-item__start {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-image.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-image.mdc-list-item, .mdc-list-item--with-leading-image.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-image .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-image .mdc-list-item__start, .mdc-list-item--with-leading-image .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-image .mdc-list-item__start {\n  width: 56px;\n  height: 56px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-one-line {\n  height: 72px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-video.mdc-list-item, .mdc-list-item--with-leading-video.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-video .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-video .mdc-list-item__start, .mdc-list-item--with-leading-video .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-video .mdc-list-item__start {\n  width: 100px;\n  height: 56px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-one-line {\n  height: 72px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-checkbox.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item, .mdc-list-item--with-leading-checkbox.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start, .mdc-list-item--with-leading-checkbox .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-radio.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item, .mdc-list-item--with-leading-radio.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start, .mdc-list-item--with-leading-radio .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-switch.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-switch.mdc-list-item, .mdc-list-item--with-leading-switch.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-switch .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-switch .mdc-list-item__start, .mdc-list-item--with-leading-switch .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-switch .mdc-list-item__start {\n  width: 36px;\n  height: 20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-trailing-icon.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item, .mdc-list-item--with-trailing-icon.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-icon .mdc-list-item__end, .mdc-list-item--with-trailing-icon .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  width: 24px;\n  height: 24px;\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item, .mdc-list-item--with-trailing-meta.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 28px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end, .mdc-list-item--with-trailing-meta .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 28px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item, .mdc-list-item--with-trailing-checkbox.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end, .mdc-list-item--with-trailing-checkbox .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 24px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-radio.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item, .mdc-list-item--with-trailing-radio.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-radio .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end, .mdc-list-item--with-trailing-radio .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 24px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-radio .mdc-list-item__end {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-switch.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-switch.mdc-list-item, .mdc-list-item--with-trailing-switch.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-switch .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-switch .mdc-list-item__end, .mdc-list-item--with-trailing-switch .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-switch .mdc-list-item__end {\n  width: 36px;\n  height: 20px;\n}\n.mdc-list-item--with-trailing-switch.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n\n.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n\n.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-item, .mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-group .mdc-deprecated-list {\n  padding: 0;\n}\n\n.mdc-list-group__subheader {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n          text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  margin: calc((3rem - 1.5rem) / 2) 16px;\n}\n\n.mdc-list-divider {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-list-divider {\n  height: 1px;\n}\n\n.mdc-list-divider {\n  padding: 0;\n  background-clip: content-box;\n}\n\n.mdc-list-divider.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-divider.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset, .mdc-list-divider.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-divider.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-divider.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset, .mdc-list-divider.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset, .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-list-divider, .mdc-list-divider[dir=rtl] {\n  /*rtl:begin:ignore*/\n  padding: 0;\n  /*rtl:end:ignore*/\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-activated-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.16;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.16);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-activated-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.16;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.16);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-selected-opacity, 0.08);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-selected-opacity, 0.08);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-deprecated-list-item--disabled {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before, .mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, .mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple,\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n:not(.mdc-list-item--disabled).mdc-list-item {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n:not(.mdc-list-item--disabled).mdc-list-item:hover .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-activated-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated:hover .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.16;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.16);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-selected-opacity, 0.08);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected:hover .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.2);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-list-item--disabled {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-list-item--disabled .mdc-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-list-item--disabled .mdc-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-list-item--disabled .mdc-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, .mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-list-item--disabled .mdc-list-item__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./node_modules/@material/drawer/_mixins.scss","webpack://./node_modules/@material/theme/_css.scss","webpack://./node_modules/@material/theme/_gss.scss","webpack://./node_modules/@material/drawer/_variables.scss","webpack://./node_modules/@material/animation/_animation.scss","webpack://./src/component/nav.scss","webpack://./node_modules/@material/list/_mixins.scss","webpack://./node_modules/@material/rtl/_rtl.scss","webpack://./node_modules/@material/typography/_typography.scss","webpack://./node_modules/@material/elevation/_elevation-theme.scss","webpack://./node_modules/@material/list/_variables.scss","webpack://./node_modules/@material/dom/_dom.scss","webpack://./node_modules/@material/list/_evolution-mixins.scss","webpack://./node_modules/@material/list/_evolution-variables.scss","webpack://./node_modules/@material/ripple/_ripple.scss","webpack://./node_modules/@material/ripple/_ripple-theme.scss"],"names":[],"mappings":"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A,aAAA;EDmBA,cAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,iBAAA;EMKI,iBAAA;AF80CR;;ACt6BM;EACE,UAAA;ADy6BR;;ACp6BE;EEzLE,kCAAA;EACA,mCAAA;EPvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,0BAAA;ECZF,eAAA;EDwBA,0EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,iFAAA;UAAA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;EKgcE,sCAAA;ADk7BN;;AOtoBE;EXxvBI,0BAAA;ECZF,eAAA;EDwBA,uEAAA;AIw3CJ;;AOloBE;EXlwBI,0BAAA;ECZF,eAAA;EDwBA,yEAAA;AI83CJ;;AOxnBE;EXlxBI,0BAAA;ECZF,eAAA;EDwBA,oEAAA;AIo4CJ;;AO/lBE;;EXryBE,6BAAA;AIy4CJ;;AO/mBE;;EXtyBI,0BAAA;ECZF,eAAA;EDwBA,oEAAA;AIg5CJ;;AOhoBE;EX5xBI,0BAAA;ECZF,eAAA;EDwBA,oEAAA;AIs5CJ;;AOnkBI;;;EAII,aC/5BmB;ARo+C3B;;AOhrBE;EXxvBI,WAAA;ECZF,eAAA;EDwBA,wCAAA;AIk6CJ;AO5qBE;EXlwBI,WAAA;ECZF,eAAA;EDwBA,wCAAA;AIu6CJ;AOjqBE;EXlxBI,WAAA;ECZF,eAAA;EDwBA,wCAAA;AI46CJ;AO1FI;EX91CE,WAAA;ECZF,eAAA;EDwBA,wCAAA;AIi7CJ;AOtFM;EXv2CA,WAAA;ECZF,eAAA;EDwBA,wCAAA;AIs7CJ;AOpHI;EX90CE,WAAA;ECZF,eAAA;EDwBA,wCAAA;AI27CJ;;AO/sBE;;EXxvBI,cAAA;ECZF,eAAA;EDwBA,wCAAA;AIk8CJ;AOhHI;;EX91CE,cAAA;ECZF,eAAA;EDwBA,wCAAA;AIw8CJ;;AOxmBE;EX52BI,0BAAA;ECZF,eAAA;EDwBA,uEAAA;AI88CJ;;AM17CI;ECq1CA;IAEI,WAAA;IACA,cAAA;IACA,wBAAA;IACA,0BAAA;IX92CJ,0BAAA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eAAA;EDwBA,8CAAA;AIuqGJ;AUltFE;EA9QI,yBAAA;EdnNA,aAAA;ECZF,eAAA;EDwBA,8CAAA;AI6qGJ;AU58FM;EAEI,gCAAA;AV68FV;AUx8FQ;EAEI,yBAhRO;Ed0Bb,aAAA;ECZF,eAAA;EDwBA,8CAAA;AIsrGJ;AUj8FI;EdrPA,8DAAA;AIyrGJ;AUpuFE;EdjeI,aAAA;ECZF,eAAA;EDwBA,kDAAA;AI8rGJ;AUlnGI;EdxFE,yBAAA;ECZF,eAAA;EDwBA,4EAAA;AImsGJ;AU9uFE;EdjeI,aAAA;ECZF,eAAA;EDwBA,8CAAA;AIwsGJ;AUnvFE;EA9QI,yBAAA;EdnNA,aAAA;ECZF,eAAA;EDwBA,8CAAA;AI8sGJ;AU7+FM;EAEI,gCAAA;AV8+FV;AUz+FQ;EAEI,yBAhRO;Ed0Bb,aAAA;ECZF,eAAA;EDwBA,8CAAA;AIutGJ;AUl+FI;EdrPA,8DAAA;AI0tGJ;AUrwFE;EdjeI,aAAA;ECZF,eAAA;EDwBA,iDAAA;AI+tGJ;AUnpGI;EdxFE,yBAAA;ECZF,eAAA;EDwBA,4EAAA;AIouGJ;AU/wFE;EdjeI,aAAA;ECZF,eAAA;EDwBA,8CAAA;AIyuGJ;AUpxFE;EA9QI,yBAAA;EdnNA,YAAA;ECZF,eAAA;EDwBA,6CAAA;AI+uGJ;AU9gGM;EAEI,gCAAA;AV+gGV;AU1gGQ;EAEI,yBAhRO;Ed0Bb,YAAA;ECZF,eAAA;EDwBA,6CAAA;AIwvGJ;AUngGI;EdrPA,6DAAA;AI2vGJ;AUtyFE;EdjeI,aAAA;ECZF,eAAA;EDwBA,iDAAA;AIgwGJ;AUprGI;EdxFE,yBAAA;ECZF,eAAA;EDwBA,4EAAA;AIqwGJ;AUhzFE;EdjeI,aAAA;ECZF,eAAA;EDwBA,8CAAA;AI0wGJ;AUrzFE;EA9QI,yBAAA;EdnNA,YAAA;ECZF,eAAA;EDwBA,6CAAA;AIgxGJ;AU/iGM;EAEI,gCAAA;AVgjGV;AU3iGQ;EAEI,yBAhRO;Ed0Bb,YAAA;ECZF,eAAA;EDwBA,6CAAA;AIyxGJ;AUpiGI;EdrPA,6DAAA;AI4xGJ;ACptEE;;EQl3BE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EAGA,oBAAA;AT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","sourcesContent":["//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:meta';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as animation-variables;\n@use '@material/rtl/rtl';\n@use '@material/typography/typography';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n@use '@material/list/mixins' as list-mixins;\n@use '@material/ripple/ripple-theme';\n@use '@material/shape/mixins' as shape-mixins;\n@use '@material/elevation/mixins' as elevation-mixins;\n@use './variables';\n\n//\n// Public\n//\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // postcss-bem-linter: define drawer\n  .mdc-drawer {\n    @include title-ink-color(variables.$title-ink-color, $query: $query);\n    @include subtitle-ink-color(variables.$subtitle-ink-color, $query: $query);\n    @include border-color(variables.$divider-color, $query: $query);\n    @include surface-fill-color(variables.$surface-fill-color, $query: $query);\n    @include item-icon-ink-color(\n      variables.$item-inactive-ink-color,\n      $query: $query\n    );\n    @include item-text-ink-color(\n      variables.$item-inactive-ink-color,\n      $query: $query\n    );\n    @include item-activated-icon-ink-color(\n      variables.$item-activated-ink-color,\n      $query: $query\n    );\n    @include item-activated-text-ink-color(\n      variables.$item-activated-ink-color,\n      $query: $query\n    );\n    @include shape-radius(variables.$shape-radius, $query: $query);\n    @include item-shape-radius(variables.$item-shape-radius, $query: $query);\n    @include z-index(variables.$z-index, $query: $query);\n    @include width(variables.$width, $query: $query);\n\n    @include feature-targeting.targets($feat-structure) {\n      display: flex;\n      flex-direction: column;\n      flex-shrink: 0;\n      box-sizing: border-box;\n      height: 100%;\n      @include rtl.ignore-next-line();\n      border-right-width: 1px;\n      @include rtl.ignore-next-line();\n      border-right-style: solid;\n      overflow: hidden;\n\n      @include rtl.rtl {\n        @include rtl.ignore-next-line();\n        border-right-width: 0;\n        @include rtl.ignore-next-line();\n        border-left-width: 1px;\n        @include rtl.ignore-next-line();\n        border-right-style: none;\n        @include rtl.ignore-next-line();\n        border-left-style: solid;\n      }\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      transition-property: transform;\n      transition-timing-function: animation-variables.$standard-curve-timing-function;\n    }\n\n    @include list-item_($query);\n  }\n\n  .mdc-drawer--animate {\n    @include feature-targeting.targets($feat-structure) {\n      transform: translateX(-100%);\n\n      @include rtl.rtl {\n        transform: translateX(100%);\n      }\n    }\n  }\n\n  .mdc-drawer--opening {\n    @include feature-targeting.targets($feat-structure) {\n      transform: translateX(0);\n\n      // Required to level the specificity with animate class.\n      @include rtl.rtl {\n        transform: translateX(0);\n      }\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      transition-duration: variables.$animation-enter;\n    }\n  }\n\n  .mdc-drawer--closing {\n    @include feature-targeting.targets($feat-structure) {\n      transform: translateX(-100%);\n\n      @include rtl.rtl {\n        transform: translateX(100%);\n      }\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      transition-duration: variables.$animation-exit;\n    }\n  }\n\n  .mdc-drawer__header {\n    @include feature-targeting.targets($feat-structure) {\n      flex-shrink: 0;\n      box-sizing: border-box;\n      min-height: 64px; // same as $mdc-top-app-bar-row-height\n      padding: 0 variables.$surface-padding 4px;\n    }\n  }\n\n  .mdc-drawer__title {\n    @include typography.typography(headline6, $query: $query);\n    @include typography.text-baseline(\n      $top: 36px,\n      $bottom: 20px,\n      $query: $query\n    );\n  }\n\n  .mdc-drawer__subtitle {\n    @include typography.typography(body2, $query: $query);\n    @include typography.text-baseline($top: 20px, $query: $query);\n\n    @include feature-targeting.targets($feat-structure) {\n      margin-bottom: 0;\n    }\n  }\n\n  .mdc-drawer__content {\n    @include feature-targeting.targets($feat-structure) {\n      height: 100%;\n      overflow-y: auto;\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n\n  // postcss-bem-linter: end\n}\n\n@mixin dismissible-core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-drawer--dismissible {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-position(left, 0);\n\n      display: none;\n      position: absolute;\n\n      &.mdc-drawer--open {\n        display: flex;\n      }\n    }\n  }\n\n  .mdc-drawer-app-content {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-box(margin, left, 0);\n\n      position: relative;\n    }\n  }\n}\n\n@mixin modal-core-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  .mdc-drawer--modal {\n    @include scrim-fill-color(variables.$modal-scrim-color, $query: $query);\n    @include elevation-mixins.elevation(\n      variables.$modal-elevation,\n      $query: $query\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-position(left, 0);\n\n      display: none;\n      position: fixed;\n    }\n\n    &.mdc-drawer--open {\n      @include feature-targeting.targets($feat-structure) {\n        display: flex;\n      }\n    }\n  }\n\n  .mdc-drawer-scrim {\n    @include feature-targeting.targets($feat-structure) {\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: variables.$z-index - 1;\n    }\n\n    @include feature-targeting.targets($feat-animation) {\n      transition-property: opacity;\n      transition-timing-function: animation-variables.$standard-curve-timing-function;\n    }\n\n    .mdc-drawer--open + & {\n      @include feature-targeting.targets($feat-structure) {\n        display: block;\n      }\n    }\n\n    .mdc-drawer--animate + & {\n      @include feature-targeting.targets($feat-structure) {\n        opacity: 0;\n      }\n    }\n\n    .mdc-drawer--opening + & {\n      @include feature-targeting.targets($feat-animation) {\n        transition-duration: variables.$animation-enter;\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        opacity: 1;\n      }\n    }\n\n    .mdc-drawer--closing + & {\n      @include feature-targeting.targets($feat-animation) {\n        transition-duration: variables.$animation-exit;\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        opacity: 0;\n      }\n    }\n  }\n}\n\n@mixin activated-overlay-color($color, $query: feature-targeting.all()) {\n  :not(.mdc-deprecated-list--non-interactive) > .mdc-deprecated-list-item {\n    @include ripple-theme.states-activated($color, $query: $query);\n  }\n}\n\n@mixin border-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $value: rgba(theme-color.prop-value($color), variables.$divider-opacity);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(border-color, $value);\n  }\n}\n\n@mixin item-shape-radius(\n  $radius,\n  $rtl-reflexive: true,\n  $query: feature-targeting.all()\n) {\n  @include list-mixins.deprecated-single-line-shape-radius(\n    $radius,\n    $rtl-reflexive,\n    $query: $query\n  );\n}\n\n@mixin shape-radius($radius, $query: feature-targeting.all()) {\n  // Check type since $radius may be a custom property Map\n  $is-list: meta.type-of($radius) == 'list';\n  @if $is-list and list.length($radius) > 2 {\n    @error \"Invalid radius: '#{$radius}' component doesn't allow customizing all corners\";\n  } @else if $is-list and list.length($radius) == 2 {\n    $radius: 0 list.nth($radius, 1) list.nth($radius, 2) 0;\n  } @else {\n    $radius: 0 $radius $radius 0;\n  }\n\n  @include shape-mixins.radius($radius, $rtl-reflexive: true, $query: $query);\n}\n\n@mixin divider-color($color, $query: feature-targeting.all()) {\n  $value: rgba(theme-color.prop-value($color), variables.$divider-opacity);\n\n  @include list-mixins.deprecated-divider-color($value, $query: $query);\n}\n\n@mixin title-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $value: rgba(theme-color.prop-value($color), variables.$title-ink-opacity);\n\n  .mdc-drawer__title {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $value);\n    }\n  }\n}\n\n@mixin subtitle-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $value: rgba(theme-color.prop-value($color), variables.$subtitle-ink-opacity);\n\n  @include list-mixins.deprecated-group-subheader-ink-color(\n    $value,\n    $query: $query\n  );\n\n  .mdc-drawer__subtitle {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $value);\n    }\n  }\n}\n\n@mixin fill-color-accessible($color, $query: feature-targeting.all()) {\n  $accessibleColor: theme-color.accessible-ink-color($color);\n\n  @include title-ink-color($accessibleColor, $query: $query);\n  @include subtitle-ink-color($accessibleColor, $query: $query);\n  @include item-text-ink-color($accessibleColor, $query: $query);\n  @include item-icon-ink-color($accessibleColor, $query: $query);\n  @include surface-fill-color($color, $query: $query);\n}\n\n@mixin item-icon-ink-color($color, $query: feature-targeting.all()) {\n  $value: rgba(\n    theme-color.prop-value($color),\n    variables.$item-inactive-icon-ink-opacity\n  );\n\n  @include list-mixins.deprecated-item-graphic-ink-color(\n    $value,\n    $query: $query\n  );\n}\n\n@mixin item-activated-icon-ink-color($color, $query: feature-targeting.all()) {\n  $value: rgba(\n    theme-color.prop-value($color),\n    variables.$item-active-icon-ink-opacity\n  );\n\n  .mdc-deprecated-list-item--activated {\n    @include list-mixins.deprecated-item-graphic-ink-color(\n      $value,\n      $query: $query\n    );\n  }\n}\n\n@mixin item-activated-text-ink-color($color, $query: feature-targeting.all()) {\n  $value: rgba(\n    theme-color.prop-value($color),\n    variables.$item-active-text-ink-opacity\n  );\n\n  .mdc-deprecated-list-item--activated {\n    @include list-mixins.deprecated-item-primary-text-ink-color(\n      $value,\n      $query: $query\n    );\n  }\n}\n\n@mixin item-text-ink-color($color, $query: feature-targeting.all()) {\n  $value: rgba(\n    theme-color.prop-value($color),\n    variables.$item-inactive-text-ink-opacity\n  );\n\n  .mdc-deprecated-list-item {\n    @include list-mixins.deprecated-item-primary-text-ink-color(\n      $value,\n      $query: $query\n    );\n  }\n}\n\n@mixin surface-fill-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(background-color, $color);\n  }\n}\n\n@mixin scrim-fill-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $value: rgba(theme-color.prop-value($color), variables.$modal-scrim-opacity);\n\n  + .mdc-drawer-scrim {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(background-color, $value);\n    }\n  }\n}\n\n@mixin z-index($value, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    z-index: $value;\n  }\n}\n\n@mixin width($width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include theme.property(width, $width);\n  }\n\n  &.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.reflexive-box(margin, left, $width);\n    }\n  }\n}\n\n//\n// Private\n//\n@mixin list-item_($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  // postcss-bem-linter: ignore\n  .mdc-deprecated-list-item {\n    @include typography.typography(subtitle2, $query: $query);\n\n    @include feature-targeting.targets($feat-structure) {\n      height: calc(48px - 2 * #{variables.$list-item-spacing});\n      // To accomodate margin conflict.\n      margin: (variables.$list-item-spacing * 2) 8px;\n      padding: 0 math.div(variables.$surface-padding, 2);\n    }\n  }\n\n  // postcss-bem-linter: ignore\n  .mdc-deprecated-list-item:nth-child(1) {\n    @include feature-targeting.targets($feat-structure) {\n      margin-top: 2px;\n    }\n  }\n\n  // postcss-bem-linter: ignore\n  .mdc-deprecated-list-item:nth-last-child(1) {\n    @include feature-targeting.targets($feat-structure) {\n      margin-bottom: 0;\n    }\n  }\n\n  // postcss-bem-linter: ignore\n  .mdc-deprecated-list-group__subheader {\n    @include typography.typography(body2, $query: $query);\n    @include typography.text-baseline($top: 24px, $query: $query);\n\n    @include feature-targeting.targets($feat-structure) {\n      margin: 0;\n      padding: 0 variables.$surface-padding;\n    }\n  }\n\n  // postcss-bem-linter: ignore\n  .mdc-deprecated-list-divider {\n    @include feature-targeting.targets($feat-structure) {\n      margin: 3px 0 4px;\n    }\n  }\n\n  // Prevents list item children from being included in the click target.\n  // postcss-bem-linter: ignore\n  .mdc-deprecated-list-item__text,\n  .mdc-deprecated-list-item__graphic {\n    @include feature-targeting.targets($feat-structure) {\n      pointer-events: none;\n    }\n  }\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n@use './gss';\n\n/// When true, add an additional property/value declaration before declarations\n/// that use advanced features such as custom properties or CSS functions. This\n/// adds fallback support for older browsers such as IE11 that do not support\n/// these features at the cost of additional CSS. Set this variable to false to\n/// disable generating fallback declarations.\n$enable-fallback-declarations: true !default;\n\n/// Writes a CSS property/value declaration. This mixin is used throughout the\n/// theme package for consistency for dynamically setting CSS property values.\n///\n/// This mixin may optionally take a fallback value. For advanced features such\n/// as custom properties or CSS functions like min and max, a fallback value is\n/// recommended to support older browsers.\n///\n/// @param {String} $property - The CSS property of the declaration.\n/// @param {*} $value - The value of the CSS declaration. The value should be\n///     resolved by other theme functions first (i.e. custom property Maps and\n///     Material theme keys are not supported in this mixin). If the value is\n///     null, no declarations will be emitted.\n/// @param {*} $fallback - An optional fallback value for older browsers. If\n///     provided, a second property/value declaration will be added before the\n///     main property/value declaration.\n/// @param {Map} $gss - An optional Map of GSS annotations to add.\n/// @param {Bool} $important - If true, add `!important` to the declaration.\n@mixin declaration(\n  $property,\n  $value,\n  $fallback-value: null,\n  $gss: (),\n  $important: false\n) {\n  // Normally setting a null value to a property will not emit CSS, so mixins\n  // wouldn't need to check this. However, Sass will throw an error if the\n  // interpolated property is a custom property.\n  @if $value != null {\n    $important-rule: if($important, ' !important', '');\n\n    @if $fallback-value and $enable-fallback-declarations {\n      @include gss.annotate($gss);\n      #{$property}: #{$fallback-value} #{$important-rule};\n\n      // Add @alternate to annotations.\n      $gss: map.merge(\n        $gss,\n        (\n          alternate: true,\n        )\n      );\n    }\n\n    @include gss.annotate($gss);\n    #{$property}: #{$value}#{$important-rule};\n  }\n}\n\n/// Unpacks shorthand values for CSS properties (i.e. lists of 1-3 values).\n/// If a list of 4 values is given, it is returned as-is.\n///\n/// Examples:\n///\n/// unpack-value(4px) => 4px 4px 4px 4px\n/// unpack-value(4px 2px) => 4px 2px 4px 2px\n/// unpack-value(4px 2px 2px) => 4px 2px 2px 2px\n/// unpack-value(4px 2px 0 2px) => 4px 2px 0 2px\n///\n/// @param {Number | Map | List} $value - List of 1 to 4 value numbers.\n/// @return {List} a List of 4 value numbers.\n@function unpack-value($value) {\n  @if meta.type-of($value) == 'map' or list.length($value) == 1 {\n    @return $value $value $value $value;\n  } @else if list.length($value) == 4 {\n    @return $value;\n  } @else if list.length($value) == 3 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 3)\n      list.nth($value, 2);\n  } @else if list.length($value) == 2 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 1)\n      list.nth($value, 2);\n  }\n\n  @error \"Invalid CSS property value: '#{$value}' is more than 4 values\";\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n\n/// Adds optional GSS annotation comments. Useful for theme mixins where one or\n/// more properties are set indirectly.\n///\n/// Annotations may be provided as a Map of annotations or as named arguments.\n///\n/// @example - scss\n///   @include annotate((noflip: true));\n///   left: 0;\n///\n/// @example - scss\n///   @include annotate($noflip: true);\n///   left: 0;\n///\n/// @example - css\n///   /* @noflip */ /*rtl:ignore*/\n///   left: 0;\n///\n/// @param {Map} $annotations - Map of annotations. Values must be set to `true`\n///     for an annotation to be added.\n@mixin annotate($annotations...) {\n  $keywords: meta.keywords($annotations);\n  @if list.length($annotations) > 0 {\n    $annotations: list.nth($annotations, 1);\n  } @else {\n    $annotations: $keywords;\n  }\n\n  @if (map.get($annotations, alternate) == true) {\n    /* @alternate */\n  }\n\n  // noflip must be the last tag right before the property\n  @if (map.get($annotations, noflip) == true) {\n    /* @noflip */ /*rtl:ignore*/\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use '@material/theme/theme-color';\n\n// Colors\n$title-ink-color: theme-color.prop-value(on-surface) !default;\n$subtitle-ink-color: theme-color.prop-value(on-surface) !default;\n$item-inactive-ink-color: theme-color.prop-value(on-surface) !default;\n$item-activated-ink-color: theme-color.prop-value(primary) !default;\n$divider-color: theme-color.prop-value(on-surface) !default;\n$surface-fill-color: surface !default;\n\n// Opacity\n$title-ink-opacity: theme-color.text-emphasis(high) !default;\n$subtitle-ink-opacity: theme-color.text-emphasis(medium) !default;\n$item-inactive-icon-ink-opacity: theme-color.text-emphasis(medium) !default;\n$item-inactive-text-ink-opacity: theme-color.text-emphasis(high) !default;\n$item-active-icon-ink-opacity: 1 !default;\n$item-active-text-ink-opacity: theme-color.text-emphasis(high) !default;\n$divider-opacity: 0.12 !default;\n\n// Widths\n$width: 256px !default;\n$list-item-spacing: 4px !default;\n$surface-padding: 16px !default;\n$shape-radius: large !default;\n$item-shape-radius: small !default;\n\n// Animations\n$animation-enter: 250ms !default;\n$animation-exit: 200ms !default;\n\n// Scrim\n$modal-scrim-color: theme-color.prop-value(on-surface) !default;\n$modal-scrim-opacity: 0.32 !default;\n\n$z-index: 6 !default;\n$modal-elevation: 16 !default;\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n$deceleration-curve-timing-function: cubic-bezier(0, 0, 0.2, 1) !default;\n$standard-curve-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;\n$acceleration-curve-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;\n$sharp-curve-timing-function: cubic-bezier(0.4, 0, 0.6, 1) !default;\n\n@function enter($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $deceleration-curve-timing-function;\n}\n\n@function exit-permanent($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $acceleration-curve-timing-function;\n}\n\n@function exit-temporary($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $sharp-curve-timing-function;\n}\n\n@function standard($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $standard-curve-timing-function;\n}\n\n@function linear($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay linear;\n}\n",".mdc-drawer {\n  border-color: rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: var(--mdc-shape-large, 0);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: var(--mdc-shape-large, 0);\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n  z-index: 6;\n  width: 256px;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  height: 100%;\n  /* @noflip */ /*rtl:ignore*/\n  border-right-width: 1px;\n  /* @noflip */ /*rtl:ignore*/\n  border-right-style: solid;\n  overflow: hidden;\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-drawer .mdc-drawer__title {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mdc-drawer .mdc-deprecated-list-group__subheader {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-drawer .mdc-drawer__subtitle {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-drawer .mdc-deprecated-list-item__graphic {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mdc-drawer .mdc-deprecated-list-item {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n  color: #6200ee;\n}\n.mdc-drawer .mdc-deprecated-list-item--activated {\n  color: rgba(98, 0, 238, 0.87);\n}\n[dir=rtl] .mdc-drawer, .mdc-drawer[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: 0;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-top-left-radius: var(--mdc-shape-large, 0);\n  /* @noflip */ /*rtl:ignore*/\n  border-top-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-right-radius: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: 0;\n  /* @alternate */\n  /* @noflip */ /*rtl:ignore*/\n  border-bottom-left-radius: var(--mdc-shape-large, 0);\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer .mdc-deprecated-list-item {\n  border-radius: 4px;\n  /* @alternate */\n  border-radius: var(--mdc-shape-small, 4px);\n}\n.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 256px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n}\n[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content, .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 256px;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-drawer, .mdc-drawer[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  border-right-width: 0;\n  /* @noflip */ /*rtl:ignore*/\n  border-left-width: 1px;\n  /* @noflip */ /*rtl:ignore*/\n  border-right-style: none;\n  /* @noflip */ /*rtl:ignore*/\n  border-left-style: solid;\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer .mdc-deprecated-list-item {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n  height: calc(48px - 2 * 4px);\n  margin: 8px 8px;\n  padding: 0 8px;\n}\n.mdc-drawer .mdc-deprecated-list-item:nth-child(1) {\n  margin-top: 2px;\n}\n.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1) {\n  margin-bottom: 0;\n}\n.mdc-drawer .mdc-deprecated-list-group__subheader {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin: 0;\n  padding: 0 16px;\n}\n.mdc-drawer .mdc-deprecated-list-group__subheader::before {\n  display: inline-block;\n  width: 0;\n  height: 24px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-drawer .mdc-deprecated-list-divider {\n  margin: 3px 0 4px;\n}\n.mdc-drawer .mdc-deprecated-list-item__text,\n.mdc-drawer .mdc-deprecated-list-item__graphic {\n  pointer-events: none;\n}\n\n.mdc-drawer--animate {\n  transform: translateX(-100%);\n}\n[dir=rtl] .mdc-drawer--animate, .mdc-drawer--animate[dir=rtl] {\n  /*rtl:begin:ignore*/\n  transform: translateX(100%);\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--opening {\n  transform: translateX(0);\n  transition-duration: 250ms;\n}\n[dir=rtl] .mdc-drawer--opening, .mdc-drawer--opening[dir=rtl] {\n  /*rtl:begin:ignore*/\n  transform: translateX(0);\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--closing {\n  transform: translateX(-100%);\n  transition-duration: 200ms;\n}\n[dir=rtl] .mdc-drawer--closing, .mdc-drawer--closing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  transform: translateX(100%);\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer__header {\n  flex-shrink: 0;\n  box-sizing: border-box;\n  min-height: 64px;\n  padding: 0 16px 4px;\n}\n\n.mdc-drawer__title {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-drawer__title::before {\n  display: inline-block;\n  width: 0;\n  height: 36px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-drawer__title::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n\n.mdc-drawer__subtitle {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: 0;\n}\n.mdc-drawer__subtitle::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n\n.mdc-drawer__content {\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdc-drawer--dismissible {\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n  display: none;\n  position: absolute;\n}\n[dir=rtl] .mdc-drawer--dismissible, .mdc-drawer--dismissible[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--dismissible.mdc-drawer--open {\n  display: flex;\n}\n\n.mdc-drawer-app-content {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  position: relative;\n}\n[dir=rtl] .mdc-drawer-app-content, .mdc-drawer-app-content[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--modal {\n  /* @alternate */\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  right: initial;\n  display: none;\n  position: fixed;\n}\n.mdc-drawer--modal + .mdc-drawer-scrim {\n  background-color: rgba(0, 0, 0, 0.32);\n}\n[dir=rtl] .mdc-drawer--modal, .mdc-drawer--modal[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  left: initial;\n  /* @noflip */ /*rtl:ignore*/\n  right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-drawer--modal.mdc-drawer--open {\n  display: flex;\n}\n\n.mdc-drawer-scrim {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-drawer--open + .mdc-drawer-scrim {\n  display: block;\n}\n.mdc-drawer--animate + .mdc-drawer-scrim {\n  opacity: 0;\n}\n.mdc-drawer--opening + .mdc-drawer-scrim {\n  transition-duration: 250ms;\n  opacity: 1;\n}\n.mdc-drawer--closing + .mdc-drawer-scrim {\n  transition-duration: 200ms;\n  opacity: 0;\n}\n\n.mdc-deprecated-list {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  /* @alternate */\n  line-height: 1.5rem;\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n.mdc-deprecated-list:focus {\n  outline: none;\n}\n\n.mdc-deprecated-list-item {\n  height: 48px;\n}\n\n.mdc-deprecated-list-item__secondary-text {\n  color: rgba(0, 0, 0, 0.54);\n  /* @alternate */\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-deprecated-list-item__graphic {\n  background-color: transparent;\n}\n\n.mdc-deprecated-list-item__graphic {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-deprecated-list-item__meta {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-deprecated-list-group__subheader {\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text {\n  opacity: 0.38;\n}\n\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__primary-text,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__secondary-text {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n\n.mdc-deprecated-list-item--selected,\n.mdc-deprecated-list-item--activated {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,\n.mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-deprecated-list--dense {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 0.812rem;\n}\n\n.mdc-deprecated-list-item__wrapper {\n  display: block;\n}\n\n.mdc-deprecated-list-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 48px;\n}\n.mdc-deprecated-list-item:focus {\n  outline: none;\n}\n.mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus::before, .mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus::before, .mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused::before {\n    border-color: CanvasText;\n  }\n}\n.mdc-deprecated-list-item.mdc-deprecated-list-item--selected::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 3px double transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-deprecated-list-item.mdc-deprecated-list-item--selected::before {\n    border-color: CanvasText;\n  }\n}\n[dir=rtl] .mdc-deprecated-list-item, .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 72px;\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item, .mdc-deprecated-list--image-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  height: 72px;\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item, .mdc-deprecated-list--video-list .mdc-deprecated-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 20px;\n  height: 20px;\n}\n[dir=rtl] .mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list-item__graphic {\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  fill: currentColor;\n  object-fit: cover;\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 32px;\n  width: 24px;\n  height: 24px;\n}\n[dir=rtl] .mdc-deprecated-list-item__graphic, .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 32px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 32px;\n  width: 24px;\n  height: 24px;\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 32px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 40px;\n  height: 40px;\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 56px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 100px;\n  height: 56px;\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-item__graphic {\n  display: inline-flex;\n}\n\n.mdc-deprecated-list-item__meta {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n}\n.mdc-deprecated-list-item__meta:not(.material-icons) {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n.mdc-deprecated-list-item[dir=rtl] .mdc-deprecated-list-item__meta, [dir=rtl] .mdc-deprecated-list-item .mdc-deprecated-list-item__meta {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n}\n\n.mdc-deprecated-list-item__text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.mdc-deprecated-list-item__text[for] {\n  pointer-events: none;\n}\n\n.mdc-deprecated-list-item__primary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-deprecated-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-deprecated-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text, .mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text::before, .mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text::before, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text::before, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text::before, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text::after, .mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text::after, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text::after, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text::after, .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 24px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n\n.mdc-deprecated-list-item__secondary-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-deprecated-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text {\n  font-size: inherit;\n}\n\n.mdc-deprecated-list--dense .mdc-deprecated-list-item {\n  height: 40px;\n}\n\n.mdc-deprecated-list--two-line .mdc-deprecated-list-item__text {\n  align-self: flex-start;\n}\n\n.mdc-deprecated-list--two-line .mdc-deprecated-list-item {\n  height: 64px;\n}\n.mdc-deprecated-list--two-line.mdc-deprecated-list--video-list .mdc-deprecated-list-item, .mdc-deprecated-list--two-line.mdc-deprecated-list--image-list .mdc-deprecated-list-item, .mdc-deprecated-list--two-line.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item, .mdc-deprecated-list--two-line.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item, .mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item {\n  height: 72px;\n}\n.mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n\n.mdc-deprecated-list--two-line.mdc-deprecated-list--dense .mdc-deprecated-list-item,\n.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item {\n  height: 60px;\n}\n\n.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  width: 36px;\n  height: 36px;\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic, .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item {\n  cursor: pointer;\n}\n\na.mdc-deprecated-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-deprecated-list-divider {\n  height: 0;\n  margin: 0;\n  border: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.mdc-deprecated-list-divider {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-deprecated-list-divider--padded {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list-divider--padded, .mdc-deprecated-list-divider--padded[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list-divider--inset {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 72px);\n}\n[dir=rtl] .mdc-deprecated-list-divider--inset, .mdc-deprecated-list-divider--inset[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded, .mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 72px);\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 72px);\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 72px);\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 72px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 72px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 88px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 88px);\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 88px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 88px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 104px);\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 88px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 32px);\n}\n[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 116px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 116px);\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading, .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 116px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-trailing {\n  width: calc(100% - 16px);\n}\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 116px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 132px);\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing, .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 116px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 0px);\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding, .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  width: calc(100% - 16px);\n}\n[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding, .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-deprecated-list-group .mdc-deprecated-list {\n  padding: 0;\n}\n\n.mdc-deprecated-list-group__subheader {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  margin: calc((3rem - 1.5rem) / 2) 16px;\n}\n\n.mdc-list-item__primary-text {\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-list-item__secondary-text {\n  color: rgba(0, 0, 0, 0.54);\n  /* @alternate */\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-list-item__overline-text {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start,\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  background-color: transparent;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start,\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list-item__end {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list-item--disabled .mdc-list-item__start,\n.mdc-list-item--disabled .mdc-list-item__content,\n.mdc-list-item--disabled .mdc-list-item__end {\n  opacity: 0.38;\n}\n\n.mdc-list-item--disabled .mdc-list-item__primary-text {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled .mdc-list-item__secondary-text {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled .mdc-list-item__overline-text {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  color: #000;\n  /* @alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n\n.mdc-list-item--selected .mdc-list-item__primary-text,\n.mdc-list-item--activated .mdc-list-item__primary-text {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,\n.mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-deprecated-list-group__subheader {\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-list-divider::after {\n    content: \"\";\n    display: block;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: white;\n  }\n}\n.mdc-list {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  /* @alternate */\n  line-height: 1.5rem;\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n}\n.mdc-list:focus {\n  outline: none;\n}\n\n.mdc-list-item__wrapper {\n  display: block;\n}\n\n.mdc-list-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  align-items: stretch;\n  cursor: pointer;\n}\n.mdc-list-item:focus {\n  outline: none;\n}\n.mdc-list-item.mdc-list-item--with-one-line {\n  height: 48px;\n}\n.mdc-list-item.mdc-list-item--with-two-lines {\n  height: 64px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines {\n  height: 88px;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--disabled, .mdc-list-item.mdc-list-item--non-interactive {\n  cursor: auto;\n}\n.mdc-list-item:not(.mdc-list-item--selected):focus::before, .mdc-list-item.mdc-ripple-upgraded--background-focused::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-list-item:not(.mdc-list-item--selected):focus::before, .mdc-list-item.mdc-ripple-upgraded--background-focused::before {\n    border-color: CanvasText;\n  }\n}\n.mdc-list-item.mdc-list-item--selected::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 3px double transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-list-item.mdc-list-item--selected::before {\n    border-color: CanvasText;\n  }\n}\n.mdc-list-item.mdc-list-item--selected:focus::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 3px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n@media screen and (forced-colors: active) {\n  .mdc-list-item.mdc-list-item--selected:focus::before {\n    border-color: CanvasText;\n  }\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item__start {\n  fill: currentColor;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.mdc-list-item__end {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.mdc-list-item__content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  flex: 1;\n  pointer-events: none;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {\n  align-self: stretch;\n}\n.mdc-list-item__content[for] {\n  pointer-events: none;\n}\n\n.mdc-list-item__primary-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n\n.mdc-list-item__secondary-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {\n  white-space: normal;\n  line-height: 20px;\n}\n.mdc-list-item--with-overline .mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: auto;\n}\n\n.mdc-list-item__overline-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 24px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n\n.mdc-list-item--with-leading-avatar.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item, .mdc-list-item--with-leading-avatar.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start, .mdc-list-item--with-leading-avatar .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  border-radius: 50%;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  width: 24px;\n  height: 24px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item, .mdc-list-item--with-leading-icon.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 32px;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start, .mdc-list-item--with-leading-icon .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 32px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-thumbnail.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-thumbnail.mdc-list-item, .mdc-list-item--with-leading-thumbnail.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-thumbnail .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-thumbnail .mdc-list-item__start, .mdc-list-item--with-leading-thumbnail .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-thumbnail .mdc-list-item__start {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-image.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-image.mdc-list-item, .mdc-list-item--with-leading-image.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-image .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-image .mdc-list-item__start, .mdc-list-item--with-leading-image .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-image .mdc-list-item__start {\n  width: 56px;\n  height: 56px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-one-line {\n  height: 72px;\n}\n.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-video.mdc-list-item, .mdc-list-item--with-leading-video.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-video .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-video .mdc-list-item__start, .mdc-list-item--with-leading-video .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-video .mdc-list-item__start {\n  width: 100px;\n  height: 56px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-one-line {\n  height: 72px;\n}\n.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-checkbox.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item, .mdc-list-item--with-leading-checkbox.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start, .mdc-list-item--with-leading-checkbox .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-radio.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item, .mdc-list-item--with-leading-radio.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start, .mdc-list-item--with-leading-radio .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-leading-switch.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-item--with-leading-switch.mdc-list-item, .mdc-list-item--with-leading-switch.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-switch .mdc-list-item__start {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-switch .mdc-list-item__start, .mdc-list-item--with-leading-switch .mdc-list-item__start[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-leading-switch .mdc-list-item__start {\n  width: 36px;\n  height: 20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-one-line {\n  height: 56px;\n}\n.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines {\n  height: 72px;\n}\n\n.mdc-list-item--with-trailing-icon.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item, .mdc-list-item--with-trailing-icon.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-icon .mdc-list-item__end, .mdc-list-item--with-trailing-icon .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  width: 24px;\n  height: 24px;\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item, .mdc-list-item--with-trailing-meta.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 28px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end, .mdc-list-item--with-trailing-meta .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 28px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item, .mdc-list-item--with-trailing-checkbox.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end, .mdc-list-item--with-trailing-checkbox .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 24px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-radio.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item, .mdc-list-item--with-trailing-radio.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-radio .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 24px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end, .mdc-list-item--with-trailing-radio .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 8px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 24px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-radio .mdc-list-item__end {\n  width: 40px;\n  height: 40px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-switch.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-switch.mdc-list-item, .mdc-list-item--with-trailing-switch.mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-switch .mdc-list-item__end {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-switch .mdc-list-item__end, .mdc-list-item--with-trailing-switch .mdc-list-item__end[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-item--with-trailing-switch .mdc-list-item__end {\n  width: 36px;\n  height: 20px;\n}\n.mdc-list-item--with-trailing-switch.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n\n.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n}\n.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: \"\";\n  vertical-align: 0;\n}\n\n.mdc-list-item {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-item, .mdc-list-item[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-group .mdc-deprecated-list {\n  padding: 0;\n}\n\n.mdc-list-group__subheader {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  margin: calc((3rem - 1.5rem) / 2) 16px;\n}\n\n.mdc-list-divider {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-list-divider {\n  height: 1px;\n}\n\n.mdc-list-divider {\n  padding: 0;\n  background-clip: content-box;\n}\n\n.mdc-list-divider.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,\n.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-divider.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset, [dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset, .mdc-list-divider.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset[dir=rtl], .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-divider.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,\n.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-divider.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset, [dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset, .mdc-list-divider.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset[dir=rtl], .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 16px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n  /*rtl:end:ignore*/\n}\n\n.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset {\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: auto;\n}\n[dir=rtl] .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset, .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0px;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-list-divider, .mdc-list-divider[dir=rtl] {\n  /*rtl:begin:ignore*/\n  padding: 0;\n  /*rtl:end:ignore*/\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-activated-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.16;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.16);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-activated-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.16;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.16);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-selected-opacity, 0.08);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-selected-opacity, 0.08);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.12);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple,\n:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-deprecated-list-item--disabled {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before, .mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, .mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple,\n.mdc-deprecated-list-item--disabled .mdc-list-item__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n:not(.mdc-list-item--disabled).mdc-list-item {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n:not(.mdc-list-item--disabled).mdc-list-item:hover .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-activated-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated:hover .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.16;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.16);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-selected-opacity, 0.08);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected:hover .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.12);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, :not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.2);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after {\n  transition: opacity 150ms linear;\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-list-item--disabled {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-list-item--disabled .mdc-list-item__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-list-item--disabled .mdc-list-item__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-list-item--disabled .mdc-list-item__ripple::before,\n.mdc-list-item--disabled .mdc-list-item__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before, .mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-list-item--disabled .mdc-list-item__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}","// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n// Selector '.mdc-*' should only be used in this project.\n// stylelint-disable selector-class-pattern --\n// NOTE: this is the implementation of the aforementioned classes.\n\n@use 'sass:list';\n@use 'sass:map';\n@use '@material/density/functions' as density-functions;\n@use '@material/dom/mixins' as dom-mixins;\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use '@material/shape/functions' as shape-functions;\n@use '@material/shape/mixins' as shape-mixins;\n@use '@material/ripple/ripple';\n@use '@material/ripple/ripple-theme';\n@use '@material/typography/typography';\n@use '@material/feature-targeting/feature-targeting';\n@use './variables';\n@use '@material/theme/theme-color';\n@use './evolution-mixins';\n\n@mixin deprecated-core-styles($query: feature-targeting.all()) {\n  @include deprecated-without-ripple($query);\n  @include deprecated-ripple($query);\n}\n\n// This API is intended for use by frameworks that may want to separate the\n// ripple-related styles from the other list styles. It is recommended that most\n// users use `mdc-deprecated-list-core-styles` instead.\n@mixin deprecated-without-ripple($query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  $divider-color: if(\n    theme-color.tone(theme-color.$background) == 'dark',\n    variables.$deprecated-divider-color-on-dark-bg,\n    variables.$deprecated-divider-color-on-light-bg\n  );\n\n  .mdc-deprecated-list {\n    @include deprecated-base_($query);\n  }\n\n  @include deprecated-single-line-density(\n    variables.$deprecated-single-line-density-scale,\n    $query: $query\n  );\n  @include deprecated-item-secondary-text-ink-color(\n    text-secondary-on-background,\n    $query\n  );\n  @include deprecated-item-graphic-fill-color(transparent, $query);\n  @include deprecated-item-graphic-ink-color(text-icon-on-background, $query);\n  @include deprecated-item-meta-ink-color(text-hint-on-background, $query);\n  @include deprecated-group-subheader-ink-color(\n    text-primary-on-background,\n    $query\n  );\n  @include deprecated-item-disabled-text-opacity(\n    variables.$deprecated-text-disabled-opacity,\n    $query\n  );\n  @include deprecated-item-disabled-text-color(\n    variables.$deprecated-text-disabled-color,\n    $query\n  );\n  @include deprecated-item-selected-text-color(\n    variables.$deprecated-text-selected-color,\n    $query\n  );\n\n  .mdc-deprecated-list--dense {\n    @include feature-targeting.targets($feat-structure) {\n      padding-top: 4px;\n      padding-bottom: 4px;\n      font-size: 0.812rem;\n    }\n  }\n\n  .mdc-deprecated-list-item__wrapper {\n    @include feature-targeting.targets($feat-structure) {\n      display: block;\n    }\n  }\n\n  .mdc-deprecated-list-item {\n    @include feature-targeting.targets($feat-structure) {\n      @include deprecated-item-base_;\n    }\n\n    // For components using aria-activedescendant, the focus pseudoclass is\n    // never applied and use `.mdc-ripple-upgraded--background-focused` instead.\n    &:not(.mdc-deprecated-list-item--selected):focus::before,\n    &.mdc-ripple-upgraded--background-focused::before {\n      @include dom-mixins.transparent-border($query: $query);\n    }\n\n    &.mdc-deprecated-list-item--selected::before {\n      @include dom-mixins.transparent-border(\n        $border-width: 3px,\n        $border-style: double,\n        $query: $query\n      );\n    }\n\n    @include deprecated-list-item-padding-variant(\n      variables.$deprecated-textual-variant-config,\n      $query\n    );\n    @include deprecated-list-item-height-variant(\n      variables.$deprecated-textual-variant-config,\n      $query\n    );\n\n    .mdc-deprecated-list--icon-list & {\n      @include deprecated-list-item-padding-variant(\n        variables.$deprecated-icon-variant-config,\n        $query\n      );\n      @include deprecated-list-item-height-variant(\n        variables.$deprecated-icon-variant-config,\n        $query\n      );\n    }\n\n    .mdc-deprecated-list--avatar-list & {\n      @include deprecated-list-item-padding-variant(\n        variables.$deprecated-avatar-variant-config,\n        $query\n      );\n      @include deprecated-list-item-height-variant(\n        variables.$deprecated-avatar-variant-config,\n        $query\n      );\n    }\n\n    .mdc-deprecated-list--thumbnail-list & {\n      @include deprecated-list-item-padding-variant(\n        variables.$deprecated-thumbnail-variant-config,\n        $query\n      );\n      @include deprecated-list-item-height-variant(\n        variables.$deprecated-thumbnail-variant-config,\n        $query\n      );\n    }\n\n    .mdc-deprecated-list--image-list & {\n      @include deprecated-list-item-padding-variant(\n        variables.$deprecated-image-variant-config,\n        $query\n      );\n      @include deprecated-list-item-height-variant(\n        variables.$deprecated-image-variant-config,\n        $query\n      );\n    }\n\n    .mdc-deprecated-list--video-list & {\n      @include deprecated-list-item-padding-variant(\n        variables.$deprecated-video-variant-config,\n        $query\n      );\n      @include deprecated-list-item-height-variant(\n        variables.$deprecated-video-variant-config,\n        $query\n      );\n    }\n  }\n\n  // This is included here to preserve expected specificity behavior (avatar\n  // graphic styles must take priority).\n  // TODO(b/157038316): regroup this with density styles when nesting is fixed.\n  .mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic {\n    @include deprecated-graphic-size-dense_(20px, $query);\n  }\n\n  .mdc-deprecated-list-item__graphic {\n    @include feature-targeting.targets($feat-structure) {\n      flex-shrink: 0;\n      align-items: center;\n      justify-content: center;\n      fill: currentColor;\n      object-fit: cover;\n    }\n\n    // TODO(b/156624966): this retains legacy spacing but should be updated.\n    @include deprecated-graphic-size-variant(\n      variables.$deprecated-deprecated-graphic-config,\n      $query\n    );\n\n    .mdc-deprecated-list--icon-list & {\n      @include deprecated-graphic-size-variant(\n        variables.$deprecated-icon-variant-config,\n        $query\n      );\n    }\n\n    .mdc-deprecated-list--avatar-list & {\n      @include deprecated-graphic-size-variant(\n        variables.$deprecated-avatar-variant-config,\n        $query\n      );\n      @include feature-targeting.targets($feat-structure) {\n        border-radius: 50%;\n      }\n    }\n\n    .mdc-deprecated-list--thumbnail-list & {\n      @include deprecated-graphic-size-variant(\n        variables.$deprecated-thumbnail-variant-config,\n        $query\n      );\n    }\n\n    .mdc-deprecated-list--image-list & {\n      @include deprecated-graphic-size-variant(\n        variables.$deprecated-image-variant-config,\n        $query\n      );\n    }\n\n    .mdc-deprecated-list--video-list & {\n      @include deprecated-graphic-size-variant(\n        variables.$deprecated-video-variant-config,\n        $query\n      );\n    }\n  }\n\n  // Extra specificity is to override .material-icons display style if used in\n  // conjunction with mdc-deprecated-list-item__graphic\n  // stylelint-disable plugin/selector-bem-pattern\n  .mdc-deprecated-list .mdc-deprecated-list-item__graphic {\n    @include feature-targeting.targets($feat-structure) {\n      display: inline-flex;\n    }\n  }\n  // stylelint-enable plugin/selector-bem-pattern\n\n  .mdc-deprecated-list-item__meta {\n    &:not(.material-icons) {\n      @include typography.typography(caption, $query);\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.ignore-next-line();\n      margin-left: auto;\n      @include rtl.ignore-next-line();\n      margin-right: 0;\n\n      @at-root {\n        .mdc-deprecated-list-item[dir='rtl'] &,\n        [dir='rtl'] .mdc-deprecated-list-item & {\n          @include rtl.ignore-next-line();\n          margin-left: 0;\n          @include rtl.ignore-next-line();\n          margin-right: auto;\n        }\n      }\n    }\n  }\n\n  .mdc-deprecated-list-item__text {\n    @include typography.overflow-ellipsis($query);\n  }\n\n  // Disable interaction on label elements that may automatically\n  // toggle corresponding checkbox / radio input.\n  .mdc-deprecated-list-item__text[for] {\n    @include feature-targeting.targets($feat-structure) {\n      pointer-events: none;\n    }\n  }\n\n  .mdc-deprecated-list-item__primary-text {\n    @include typography.overflow-ellipsis($query);\n    @include typography.text-baseline(\n      $top: variables.$deprecated-item-primary-text-baseline-height,\n      $bottom: variables.$deprecated-item-secondary-text-baseline-height,\n      $display: block,\n      $query: $query\n    );\n\n    .mdc-deprecated-list--video-list &,\n    .mdc-deprecated-list--image-list &,\n    .mdc-deprecated-list--thumbnail-list &,\n    .mdc-deprecated-list--avatar-list &,\n    .mdc-deprecated-list--icon-list & {\n      @include typography.text-baseline(\n        $top:\n          variables.$deprecated-item-primary-text-baseline-height-with-graphic,\n        $bottom: variables.$deprecated-item-secondary-text-baseline-height,\n        $query: $query\n      );\n    }\n\n    // stylelint-disable plugin/selector-bem-pattern\n    .mdc-deprecated-list--dense & {\n      @include typography.text-baseline(\n        $top: variables.$deprecated-dense-item-primary-text-baseline-height,\n        $bottom: variables.$deprecated-item-secondary-text-baseline-height,\n        $query: $query\n      );\n    }\n    // stylelint-enable plugin/selector-bem-pattern\n  }\n\n  .mdc-deprecated-list-item__secondary-text {\n    @include typography.typography(body2, $query);\n    @include typography.overflow-ellipsis($query);\n    @include typography.text-baseline(\n      $top: variables.$deprecated-item-secondary-text-baseline-height,\n      $display: block,\n      $query: $query\n    );\n\n    // stylelint-disable plugin/selector-bem-pattern\n    .mdc-deprecated-list--dense & {\n      @include feature-targeting.targets($feat-structure) {\n        font-size: inherit;\n      }\n    }\n    // stylelint-enable plugin/selector-bem-pattern\n  }\n\n  // stylelint-disable plugin/selector-bem-pattern\n  .mdc-deprecated-list--dense .mdc-deprecated-list-item {\n    @include feature-targeting.targets($feat-structure) {\n      height: 40px;\n    }\n  }\n\n  .mdc-deprecated-list--two-line .mdc-deprecated-list-item__text {\n    @include feature-targeting.targets($feat-structure) {\n      align-self: flex-start;\n    }\n  }\n\n  .mdc-deprecated-list--two-line {\n    .mdc-deprecated-list-item {\n      @include feature-targeting.targets($feat-structure) {\n        height: variables.$deprecated-two-line-height;\n      }\n    }\n\n    &.mdc-deprecated-list--video-list .mdc-deprecated-list-item,\n    &.mdc-deprecated-list--image-list .mdc-deprecated-list-item,\n    &.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item,\n    &.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item,\n    &.mdc-deprecated-list--icon-list .mdc-deprecated-list-item {\n      @include feature-targeting.targets($feat-structure) {\n        height: variables.$deprecated-two-line-graphic-height;\n      }\n    }\n\n    // Icons in multiline lists are the only graphic that isn't centered.\n    &.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic {\n      @include feature-targeting.targets($feat-structure) {\n        align-self: flex-start;\n        margin-top: variables.$deprecated-two-line-icon-top-margin;\n      }\n    }\n  }\n\n  .mdc-deprecated-list--two-line.mdc-deprecated-list--dense\n    .mdc-deprecated-list-item,\n  .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense\n    .mdc-deprecated-list-item {\n    @include feature-targeting.targets($feat-structure) {\n      height: 60px;\n    }\n  }\n\n  .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense\n    .mdc-deprecated-list-item__graphic {\n    @include deprecated-graphic-size-dense_(36px, $query);\n  }\n\n  // Only change mouse cursor for list items which are not disabled.\n  :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item {\n    @include feature-targeting.targets($feat-structure) {\n      cursor: pointer;\n    }\n  }\n\n  // Override anchor tag styles for the use-case of a list being used for navigation\n  // stylelint-disable selector-max-type,selector-no-qualifying-type\n  a.mdc-deprecated-list-item {\n    @include feature-targeting.targets($feat-structure) {\n      color: inherit;\n      text-decoration: none;\n    }\n  }\n  // stylelint-enable selector-max-type,selector-no-qualifying-type\n\n  .mdc-deprecated-list-divider {\n    @include feature-targeting.targets($feat-structure) {\n      height: 0;\n      margin: 0;\n      border: none;\n      border-bottom-width: 1px;\n      border-bottom-style: solid;\n    }\n  }\n\n  // Note: ideally we'd be able to hoist this to the top-level `$feat-color`,\n  // but doing so will cause the `border` declaration on\n  // `.mdc-deprecated-list-divider` above to override it.\n  @include deprecated-divider-color($divider-color, $query);\n\n  // Deprecated. Use the specialized inset classes instead.\n  // Items are fully inset using padding.\n  .mdc-deprecated-list-divider--padded {\n    @include deprecated-divider-inset-variant(\n      variables.$deprecated-textual-variant-config,\n      $use-padding: true,\n      $query: $query\n    );\n  }\n\n  // Deprecated. Use the specialized inset classes instead.\n  // Items's leading, but not trailing, edge is inset to account for *avatar*\n  // width.\n  .mdc-deprecated-list-divider--inset {\n    @include deprecated-divider-inset-variant(\n      variables.$deprecated-avatar-variant-config,\n      $trailing: false,\n      $query: $query\n    );\n  }\n\n  // Deprecated. Use the specialized inset classes instead.\n  // Item's leading and trailing edges are inset to account for *avatar* width.\n  .mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded {\n    @include deprecated-divider-inset-variant(\n      variables.$deprecated-avatar-variant-config,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list {\n    @include deprecated-divider-insets-variant(\n      variables.$deprecated-textual-variant-config,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list--icon-list {\n    @include deprecated-divider-insets-variant(\n      variables.$deprecated-icon-variant-config,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list--avatar-list {\n    @include deprecated-divider-insets-variant(\n      variables.$deprecated-avatar-variant-config,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list--thumbnail-list {\n    @include deprecated-divider-insets-variant(\n      variables.$deprecated-thumbnail-variant-config,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list--image-list {\n    @include deprecated-divider-insets-variant(\n      variables.$deprecated-image-variant-config,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list--video-list {\n    @include deprecated-divider-insets-variant(\n      variables.$deprecated-video-variant-config,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list-group {\n    @include feature-targeting.targets($feat-structure) {\n      // Cancel top/bottom padding on individual lists within group\n      .mdc-deprecated-list {\n        padding: 0;\n      }\n    }\n  }\n\n  .mdc-deprecated-list-group__subheader {\n    $list-subheader-virtual-height: 3rem;\n    $list-subheader-leading: map.get(\n      map.get(typography.$styles, body1),\n      line-height\n    );\n    $list-subheader-margin: calc(\n      (#{$list-subheader-virtual-height} - #{$list-subheader-leading}) / 2\n    );\n\n    @include typography.typography(subtitle1, $query);\n\n    @include feature-targeting.targets($feat-structure) {\n      margin: $list-subheader-margin variables.$deprecated-side-padding;\n    }\n  }\n\n  @include evolution-mixins.without-ripple($query: $query);\n}\n\n// This API is intended for use by frameworks that may want to separate the ripple-related styles from the other\n// list styles. It is recommended that most users use `mdc-deprecated-list-core-styles` instead.\n@mixin deprecated-ripple($query: feature-targeting.all()) {\n  @include ripple.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  // List items should support states by default, but it should be possible to opt out.\n  :not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item {\n    @include deprecated-item-interactive-ripple_($query);\n  }\n\n  // Set styles only for focus state on disabled list item.\n  .mdc-deprecated-list-item--disabled {\n    @include ripple.surface(\n      $ripple-target: variables.$deprecated-ripple-target,\n      $query: $query\n    );\n    @include ripple.surface(\n      $ripple-target: variables.$deprecated-temporary-ripple-target,\n      $query: $query\n    );\n    @include ripple.radius-bounded(\n      $ripple-target: variables.$deprecated-ripple-target,\n      $query: $query\n    );\n    @include ripple.radius-bounded(\n      $ripple-target: variables.$deprecated-temporary-ripple-target,\n      $query: $query\n    );\n    @include ripple-theme.states-base-color(\n      theme-color.prop-value(on-surface),\n      $ripple-target: variables.$deprecated-ripple-target,\n      $query: $query\n    );\n    @include ripple-theme.states-base-color(\n      theme-color.prop-value(on-surface),\n      $ripple-target: variables.$deprecated-temporary-ripple-target,\n      $query: $query\n    );\n    @include ripple-theme.states-focus-opacity(\n      ripple-theme.states-opacity(primary, focus),\n      $ripple-target: variables.$deprecated-ripple-target,\n      $query: $query\n    );\n    @include ripple-theme.states-focus-opacity(\n      ripple-theme.states-opacity(primary, focus),\n      $ripple-target: variables.$deprecated-temporary-ripple-target,\n      $query: $query\n    );\n\n    #{variables.$deprecated-ripple-target},\n    #{variables.$deprecated-temporary-ripple-target} {\n      @include ripple.target-common($query: $query);\n    }\n  }\n\n  @include evolution-mixins.with-ripple($query: $query);\n}\n\n///\n/// Sets ripple color for a list item.\n///\n@mixin deprecated-ripple-states($color, $query: feature-targeting.all()) {\n  @include ripple-theme.states(\n    $color: $color,\n    $query: $query,\n    $ripple-target: variables.$deprecated-ripple-target\n  );\n  @include ripple-theme.states(\n    $color: $color,\n    $query: $query,\n    $ripple-target: variables.$deprecated-temporary-ripple-target\n  );\n}\n\n/// Sets the text color of the list item in selected or activated state.\n/// @param {color} $color - The desired text color.\n@mixin deprecated-item-selected-text-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  // \"Selected\" is ephemeral and likely to change soon. E.g., selecting one or more photos to share in Google Photos.\n  // \"Activated\" is more permanent. E.g., the currently highlighted navigation destination in a drawer.\n  .mdc-deprecated-list-item--selected,\n  .mdc-deprecated-list-item--activated {\n    @include deprecated-item-primary-text-ink-color($color, $query: $query);\n    @include deprecated-item-graphic-ink-color($color, $query: $query);\n  }\n}\n\n@mixin deprecated-item-primary-text-ink-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.prop(color, $color);\n  }\n}\n\n@mixin deprecated-item-secondary-text-ink-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-item__secondary-text {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.prop(color, $color);\n    }\n  }\n}\n\n@mixin deprecated-item-graphic-fill-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-item__graphic {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.prop(background-color, $color);\n    }\n  }\n}\n\n@mixin deprecated-item-graphic-ink-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-item__graphic {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.prop(color, $color);\n    }\n  }\n}\n\n@mixin deprecated-item-meta-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-item__meta {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.prop(color, $color);\n    }\n  }\n}\n\n///\n/// Sets shape radius (rounded) to single line list variant.\n///\n/// @param {Number | List<Number>} $radius Radius size in `px` or percentage. It can be 4 value corner or single radius.\n///     Set to `50%` for rounded shape.\n/// @param {Boolean} $rtl-reflexive Set to true to flip border radius in RTL context. Defaults to `false`.\n/// @param {Number} $density-scale Density scale of single line list. Set this only when custom density is applied.\n///     Defaults to `$mdc-deprecated-list-single-line-density-scale`.\n///\n/// @access public\n///\n@mixin deprecated-single-line-shape-radius(\n  $radius,\n  $rtl-reflexive: false,\n  $density-scale: variables.$deprecated-single-line-density-scale,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$deprecated-single-line-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  .mdc-deprecated-list-item {\n    @include shape-mixins.radius(\n      $radius,\n      $rtl-reflexive,\n      $component-height: $height,\n      $query: $query\n    );\n  }\n}\n\n@mixin deprecated-divider-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-divider {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.prop(border-bottom-color, $color);\n    }\n  }\n}\n\n@mixin deprecated-group-subheader-ink-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-group__subheader {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.prop(color, $color);\n    }\n  }\n}\n\n@mixin deprecated-item-disabled-text-opacity(\n  $opacity,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text {\n    @include feature-targeting.targets($feat-color) {\n      opacity: $opacity;\n    }\n  }\n}\n\n@mixin deprecated-item-disabled-text-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-item--disabled {\n    .mdc-deprecated-list-item__text,\n    .mdc-deprecated-list-item__primary-text,\n    .mdc-deprecated-list-item__secondary-text {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.prop(color, $color);\n      }\n    }\n  }\n}\n\n///\n/// Establishes each list item's padding using a variant config.\n///\n/// @param {Map} $variant-config The list variant's configuration.\n///\n/// @access public\n///\n@mixin deprecated-list-item-padding-variant(\n  $variant-config,\n  $query: feature-targeting.all()\n) {\n  $leading-padding: map.get($variant-config, leading-padding);\n  @include deprecated-list-item-padding($leading-padding, $query);\n}\n\n///\n/// Establishes each list item's padding.\n///\n/// @param {Number} $leading-padding The item's leading padding.\n///\n/// @access public\n///\n@mixin deprecated-list-item-padding(\n  $leading-padding,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-property(\n      padding,\n      $leading-padding,\n      variables.$deprecated-trailing-padding\n    );\n  }\n}\n\n///\n/// Establishes each list item's single line height using a variant config.\n///\n/// @param {Map} $variant-config The list variant's configuration.\n///\n/// @access public\n///\n@mixin deprecated-list-item-height-variant(\n  $variant-config,\n  $query: feature-targeting.all()\n) {\n  $single-line-height: map.get($variant-config, single-line-height);\n  @include deprecated-list-item-height($single-line-height, $query);\n}\n\n///\n/// Establishes each list item's height.\n///\n/// @param {Number} $height The item's height.\n///\n/// @access public\n///\n@mixin deprecated-list-item-height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    height: $height;\n  }\n}\n\n///\n/// Sets the trailing margin used by icons.\n///\n/// @param {Number} $margin The trailing margin applied to icons.\n///\n/// @access public\n///\n@mixin deprecated-icon-margin($margin, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    .mdc-deprecated-list-item__graphic {\n      @include rtl.reflexive-box(margin, right, $margin);\n    }\n  }\n}\n\n///\n/// Sets divider inset sizes for each list variant.\n///\n/// @param {Map} $variant-config The list variant's configuration.\n///\n/// @access public\n///\n@mixin deprecated-divider-insets-variant(\n  $variant-config,\n  $query: feature-targeting.all()\n) {\n  $leading-padding: map.get($variant-config, leading-padding);\n  $text-offset: map.get($variant-config, text-offset);\n  @include deprecated-divider-insets($leading-padding, $text-offset, $query);\n}\n\n///\n/// Sets divider inset sizes for each list variant.\n///\n/// @param {Number} $leading-padding The item's leading padding.\n/// @param {Number} $text-offset The item's text offset.\n///\n/// @access public\n///\n@mixin deprecated-divider-insets(\n  $leading-padding,\n  $text-offset,\n  $query: feature-targeting.all()\n) {\n  .mdc-deprecated-list-divider--inset-leading {\n    @include deprecated-divider-inset(\n      $leading-padding,\n      $text-offset,\n      $trailing: false,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list-divider--inset-trailing {\n    @include deprecated-divider-inset(\n      $leading-padding,\n      $text-offset,\n      $leading: false,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing {\n    @include deprecated-divider-inset(\n      $leading-padding,\n      $text-offset,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding {\n    @include deprecated-divider-inset(\n      $leading-padding,\n      $text-offset,\n      $trailing: false,\n      $use-padding: true,\n      $query: $query\n    );\n  }\n\n  .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding {\n    @include deprecated-divider-inset(\n      $leading-padding,\n      $text-offset,\n      $use-padding: true,\n      $query: $query\n    );\n  }\n}\n\n// Sets the width and height of the graphic element using a variant config.\n@mixin deprecated-graphic-size-variant(\n  $variant-config,\n  $query: feature-targeting.all()\n) {\n  $leading-padding: map.get($variant-config, leading-padding);\n  $text-offset: map.get($variant-config, text-offset);\n  $width: map.get(map.get($variant-config, graphic-size), width);\n  $height: map.get(map.get($variant-config, graphic-size), height);\n\n  @include deprecated-graphic-size(\n    $leading-padding,\n    $text-offset,\n    $width,\n    $height,\n    $query\n  );\n}\n\n// Sets the width and height of the graphic element, as well as calculates the\n// trailing margin for the graphic element such that the text is always offset\n// from the item's leading edge by 72px, which is defined within the spec. If\n// height isn't specified, the graphic is assumed to be square.\n// TODO(b/155397992): restructure to use symmetric margins.\n@mixin deprecated-graphic-size(\n  $leading-padding,\n  $text-offset,\n  $width,\n  $height,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $margin-value: max(\n    $text-offset - $leading-padding - $width,\n    $leading-padding\n  );\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-box(margin, right, $margin-value);\n    width: $width;\n    height: $height;\n  }\n}\n\n// Deprecated. Supports legacy density styles.\n@mixin deprecated-graphic-size-dense_($size, $query: feature-targeting.all()) {\n  @include deprecated-graphic-size(\n    $leading-padding: 16px,\n    $text-offset: 16px,\n    $width: $size,\n    $height: $size,\n    $query: $query\n  );\n}\n\n///\n/// Computes the appropriate leading inset for a divider based on list type.\n///\n/// @param {String}  $variant-config The list variant configuration.\n/// @param {Boolean} $leading Whether to apply the leading inset.\n/// @param {Boolean} $trailing Whether to apply the trailing inset.\n/// @param {Boolean} $use-padding Whether to align with padding vs. text offset.\n///\n/// @access private\n///\n@mixin deprecated-divider-inset-variant(\n  $variant-config,\n  $leading: true,\n  $trailing: true,\n  $use-padding: false,\n  $query: feature-targeting.all()\n) {\n  $leading-padding: map.get($variant-config, leading-padding);\n  $text-offset: map.get($variant-config, text-offset);\n\n  @include deprecated-divider-inset(\n    $leading-padding,\n    $text-offset,\n    $leading,\n    $trailing,\n    $use-padding,\n    $query\n  );\n}\n\n@mixin deprecated-divider-inset(\n  $leading-padding,\n  $text-offset,\n  $leading: true,\n  $trailing: true,\n  $use-padding: false,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $trailing-inset: if($trailing, variables.$deprecated-trailing-padding, 0);\n  $leading-inset: if(\n    $leading,\n    if($use-padding, $leading-padding, $text-offset),\n    0\n  );\n\n  @include feature-targeting.targets($feat-structure) {\n    @if $leading {\n      @include rtl.reflexive-box(margin, left, $leading-inset);\n    }\n    width: calc(100% - #{$leading-inset + $trailing-inset});\n  }\n}\n\n///\n/// Sets density scale to single line list variant.\n///\n/// @param {Number} $density-scale Density scale for list. Supported density scales are `-4`, `-3`, `-2`, `-1` and  `0`.\n///\n/// @access public\n///\n@mixin deprecated-single-line-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$deprecated-single-line-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  .mdc-deprecated-list-item {\n    @include deprecated-single-line-height($height, $query: $query);\n  }\n}\n\n///\n/// Sets height to single line list variant.\n///\n/// @param {Number} $height Height value in `px`.\n///\n/// @access public\n///\n@mixin deprecated-single-line-height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    height: $height;\n  }\n}\n\n//\n// Private\n//\n\n@mixin deprecated-base_($query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include typography.typography(subtitle1, $query);\n\n  @include feature-targeting.targets($feat-typography) {\n    // According to the mocks and stickersheet, the line-height is\n    // adjusted to 24px for text content, same as for body1.\n    /* @alternate */\n    line-height: map.get(map.get(typography.$styles, body1), line-height);\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    margin: 0;\n    padding: 8px 0;\n    list-style-type: none;\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  @include deprecated-item-primary-text-ink-color(\n    text-primary-on-background,\n    $query\n  );\n}\n\n@mixin deprecated-item-base_ {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n\n  &:focus {\n    outline: none;\n  }\n}\n\n// Ripple styles for an interactive list item (one that is enabled and inside an interactive list).\n@mixin deprecated-item-interactive-ripple_($query: feature-targeting.all()) {\n  @include ripple.surface(\n    $ripple-target: variables.$deprecated-ripple-target,\n    $query: $query\n  );\n  @include ripple.surface(\n    $ripple-target: variables.$deprecated-temporary-ripple-target,\n    $query: $query\n  );\n  @include ripple.radius-bounded(\n    $ripple-target: variables.$deprecated-ripple-target,\n    $query: $query\n  );\n  @include ripple.radius-bounded(\n    $ripple-target: variables.$deprecated-temporary-ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states(\n    theme-color.prop-value(on-surface),\n    false,\n    $ripple-target: variables.$deprecated-ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states(\n    theme-color.prop-value(on-surface),\n    false,\n    $ripple-target: variables.$deprecated-temporary-ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states-activated(\n    primary,\n    false,\n    $ripple-target: variables.$deprecated-ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states-activated(\n    primary,\n    false,\n    $ripple-target: variables.$deprecated-temporary-ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states-selected(\n    primary,\n    false,\n    $ripple-target: variables.$deprecated-ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states-selected(\n    primary,\n    false,\n    $ripple-target: variables.$deprecated-temporary-ripple-target,\n    $query: $query\n  );\n\n  #{variables.$deprecated-ripple-target},\n  #{variables.$deprecated-temporary-ripple-target} {\n    @include ripple.target-common($query: $query);\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:meta';\n@use 'sass:selector';\n@use '@material/theme/gss';\n@use '@material/theme/selector-ext';\n@use '@material/theme/theme';\n\n$include: true !default;\n\n/// Creates a rule that will be applied when a component is within the context\n/// of an RTL layout.\n///\n/// @example - scss\n/// .mdc-foo {\n///   padding-left: 4px;\n///\n///   @include rtl {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n/// }\n///\n/// @example - css\n///   .mdc-foo {\n///     padding-left: 4px;\n///   }\n///\n///   [dir=\"rtl\"] .mdc-foo,\n///   .mdc-foo[dir=\"rtl\"] {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n///\n/// Note that this mixin works by checking for an ancestor element with\n/// `[dir=\"rtl\"]`. As a result, nested `dir` values are not supported:\n///\n/// @example - html\n/// <html dir=\"rtl\">\n///   <!-- ... -->\n///   <div dir=\"ltr\">\n///     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n///   </div>\n/// </html>\n///\n/// In the future, selectors such as the `:dir` pseudo-class\n/// (http://mdn.io/css/:dir) will help us mitigate this.\n///\n/// @content Content to be styled in an RTL context.\n@mixin rtl() {\n  @if ($include) {\n    $dir-rtl: '[dir=rtl]';\n\n    $rtl-selectors: list.join(\n      selector.nest($dir-rtl, &),\n      selector-ext.append-strict(&, $dir-rtl)\n    );\n\n    @at-root {\n      #{$rtl-selectors} {\n        /*rtl:begin:ignore*/\n        @content;\n        /*rtl:end:ignore*/\n      }\n    }\n  }\n}\n\n// Takes a base box-model property name (`margin`, `border`, `padding`, etc.) along with a\n// default direction (`left` or `right`) and value, and emits rules which apply the given value to the\n// specified direction by default and the opposite direction in RTL.\n//\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, left, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 8px;\n//   margin-right: 0;\n//\n//   @include rtl {\n//     margin-left: 0;\n//     margin-right: 8px;\n//   }\n// }\n// ```\n//\n// whereas:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, right, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 0;\n//   margin-right: 8px;\n//\n//   @include rtl {\n//     margin-left: 8px;\n//     margin-right: 0;\n//   }\n// }\n// ```\n//\n// You can also pass an optional 4th `$root-selector` argument which will be forwarded to `mdc-rtl`,\n// e.g. `@include rtl-reflexive-box(margin, left, 8px, '.mdc-component')`.\n//\n// Note that this function will always zero out the original value in an RTL context.\n// If you're trying to flip the values, use `mdc-rtl-reflexive-property()` instead.\n@mixin reflexive-box(\n  $base-property,\n  $default-direction,\n  $value,\n  $replace: null\n) {\n  @if (list.index((right, left), $default-direction) == null) {\n    @error \"Invalid default direction: '#{$default-direction}'. Please specifiy either 'right' or 'left'.\";\n  }\n\n  $left-value: $value;\n  $right-value: 0;\n\n  @if ($default-direction == right) {\n    $left-value: 0;\n    $right-value: $value;\n  }\n\n  @include reflexive-property(\n    $base-property,\n    $left-value,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n// <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-property(margin, auto, 12px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: auto;\n//   margin-right: 12px;\n//\n//   @include rtl {\n//     margin-left: 12px;\n//     margin-right: auto;\n//   }\n// }\n// ```\n//\n// An optional 4th `$root-selector` argument can be given, which will be passed to `mdc-rtl`.\n@mixin reflexive-property(\n  $base-property,\n  $left-value,\n  $right-value,\n  $replace: null\n) {\n  $prop-left: #{$base-property}-left;\n  $prop-right: #{$base-property}-right;\n\n  @include reflexive(\n    $prop-left,\n    $left-value,\n    $prop-right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes an argument specifying a horizontal position property (either 'left' or 'right') as well\n// as a value, and applies that value to the specified position in a LTR context, and flips it in a\n// RTL context. For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-position(left, 0);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 0;\n//   right: initial;\n//\n//   @include rtl {\n//     left: initial;\n//     right: 0;\n//   }\n// }\n// ```\n//\n// An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive-position($position-property, $value, $replace: null) {\n  @if (list.index((right, left), $position-property) == null) {\n    @error \"Invalid position #{position-property}. Please specifiy either right or left\";\n  }\n\n  // TODO: 'initial' is not supported in IE 11. https://caniuse.com/#feat=css-initial-value\n  $left-value: $value;\n  $right-value: initial;\n\n  @if ($position-property == right) {\n    $right-value: $value;\n    $left-value: initial;\n  }\n\n  @include reflexive(\n    left,\n    $left-value,\n    right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes pair of properties with values as arguments and flips it in RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive(left, 2px, right, 5px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 2px;\n//   right: 5px;\n//\n//   @include rtl {\n//     right: 2px;\n//     left: 5px;\n//   }\n// }\n// ```\n//\n// An optional fifth `$root-selector` argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive(\n  $left-property,\n  $left-value,\n  $right-property,\n  $right-value,\n  $replace: null\n) {\n  $left-replace: null;\n  $right-replace: null;\n  @if $replace {\n    @if meta.type-of($left-value) == 'string' {\n      $left-replace: $replace;\n    }\n\n    @if meta.type-of($right-value) == 'string' {\n      $right-replace: $replace;\n    }\n\n    @if $left-replace == null and $right-replace == null {\n      @error 'mdc-rtl: $replace may only be used with strings but neither left nor right values are strings.';\n    }\n\n    // If any replacements are null, treat the entire value as null (do not\n    // emit anything).\n    @each $name, $replacement in $replace {\n      @if $replacement == null {\n        $left-value: null;\n        $right-value: null;\n      }\n    }\n  }\n\n  // Do not emit if either value are null\n  @if $left-value and $right-value {\n    @include _property($left-property, $left-value, $replace: $left-replace);\n    @include _property($right-property, $right-value, $replace: $right-replace);\n\n    @include rtl {\n      @include _property(\n        $left-property,\n        $right-value,\n        $replace: $right-replace\n      );\n      @include _property($right-property, $left-value, $replace: $left-replace);\n    }\n  }\n}\n\n///\n/// Adds RTL ignore annotation when `$mdc-rtl-include` is true.\n///\n@mixin ignore-next-line() {\n  @include gss.annotate(\n    (\n      noflip: $include,\n    )\n  );\n}\n\n///\n/// Adds `@noflip` annotation when `$mdc-rtl-include` is true.\n///\n/// @param {String} $property\n/// @param {String} $value\n/// @param {Map} $replace\n///\n@mixin _property($property, $value, $replace: null) {\n  @include theme.property(\n    $property,\n    $value,\n    $replace: $replace,\n    $gss: (noflip: $include)\n  );\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:string';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/custom-properties';\n@use '@material/theme/keys';\n@use '@material/theme/theme';\n\n/// @deprecated Avoid calling this function directly. Instead, configure the\n/// `$styles-<style>` variable Maps.\n@function set-styles_($base-styles, $scale-styles, $override-styles) {\n  $options: (\n    custom-property-prefix: typography,\n  );\n\n  $base-styles: keys.set-values($base-styles, $options: $options);\n\n  @each $style, $style-props in $scale-styles {\n    @each $base-key in map.keys($base-styles) {\n      // Ignore the return result, it's not needed\n      $unused: keys.add-link(keys.combine($style, $base-key), $base-key);\n    }\n\n    // Merge base properties for all styles.\n    $style-props: map.merge($base-styles, $style-props);\n\n    // Merge overrides onto each style.\n    $style-props: map.merge($style-props, map.get($override-styles, $style));\n\n    // Register keys for this style\n    @each $property, $value in $style-props {\n      $unused: keys.set-value(\n        keys.combine($style, $property),\n        $value,\n        $options: $options\n      );\n    }\n\n    // Override original styles with new styles.\n    $scale-styles: map.merge($scale-styles, (#{$style}: $style-props));\n  }\n\n  @return $scale-styles;\n}\n\n@function get-letter-spacing_($tracking, $font-size) {\n  @return math.div($tracking, $font-size * 16) * 1em;\n}\n\n@function px-to-rem($px) {\n  @if custom-properties.is-custom-prop($px) {\n    @return custom-properties.set-fallback(\n      $px,\n      _px-to-rem(custom-properties.get-fallback($px))\n    );\n  }\n  @return _px-to-rem($px);\n}\n\n@function _px-to-rem($px) {\n  @if $px == null {\n    @return null;\n  }\n  @return math.div($px, 16px) * 1rem;\n}\n\n$font-family: string.unquote('Roboto, sans-serif') !default;\n\n// Override styles\n$styles-headline1: () !default;\n$styles-headline2: () !default;\n$styles-headline3: () !default;\n$styles-headline4: () !default;\n$styles-headline5: () !default;\n$styles-headline6: () !default;\n$styles-subtitle1: () !default;\n$styles-subtitle2: () !default;\n$styles-body1: () !default;\n$styles-body2: () !default;\n$styles-caption: () !default;\n$styles-button: () !default;\n$styles-overline: () !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead, or $font-family to set the base font family.\n$base: (\n  font-family: $font-family,\n) !default;\n\n$font-weight-values: (\n  thin: 100,\n  light: 300,\n  regular: 400,\n  medium: 500,\n  bold: 700,\n  black: 900,\n) !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead.\n$styles: set-styles_(\n  $base,\n  (\n    headline1: (\n      font-size: px-to-rem(96px),\n      line-height: px-to-rem(96px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-1.5, 6),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline2: (\n      font-size: px-to-rem(60px),\n      line-height: px-to-rem(60px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-0.5, 3.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline3: (\n      font-size: px-to-rem(48px),\n      line-height: px-to-rem(50px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline4: (\n      font-size: px-to-rem(34px),\n      line-height: px-to-rem(40px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 2.125),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline5: (\n      font-size: px-to-rem(24px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline6: (\n      font-size: px-to-rem(20px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.25, 1.25),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(28px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.15, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(22px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.1, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(24px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.5, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    caption: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.4, 0.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    button: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(36px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(1.25, 0.875),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n    overline: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(2, 0.75),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n  ),\n  (\n    headline1: $styles-headline1,\n    headline2: $styles-headline2,\n    headline3: $styles-headline3,\n    headline4: $styles-headline4,\n    headline5: $styles-headline5,\n    headline6: $styles-headline6,\n    subtitle1: $styles-subtitle1,\n    subtitle2: $styles-subtitle2,\n    body1: $styles-body1,\n    body2: $styles-body2,\n    caption: $styles-caption,\n    button: $styles-button,\n    overline: $styles-overline,\n  )\n) !default;\n\n// A copy of the styles Map that is used to detect compile-time changes for\n// Angular support.\n$_styles-copy: $styles;\n\n@function is-typography-style($style) {\n  @return map.has-key($styles, $style);\n}\n\n@function get-typography-styles() {\n  @return map.keys($styles);\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  .mdc-typography {\n    @include base($query: $query);\n  }\n\n  @each $style in get-typography-styles() {\n    .mdc-typography--#{$style} {\n      @include typography($style, $query: $query);\n    }\n  }\n}\n\n@mixin base($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @include theme.property(font-family, font-family);\n  }\n}\n\n@mixin typography($style, $query: feature-targeting.all(), $exclude-props: ()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @if not is-typography-style($style) {\n    @error \"Invalid style specified! #{$style} doesn't exist. Choose one of #{get-typography-styles()}\";\n  }\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @each $key in keys.get-keys($style) {\n      // <style>-<property>: headline1-font-size\n      // Slice the string past the first key separator to retrieve the\n      // property name\n      $property: string.slice($key, string.index($key, '-') + 1);\n      @if list.index($exclude-props, $property) == null {\n        $current-global-value: map.get($styles, $style, $property);\n        $configured-global-value: map.get($_styles-copy, $style, $property);\n        @if $current-global-value != $configured-global-value {\n          // A compile time change was made to $mdc-typography-styles. To\n          // support Angular, use this value instead of the key's value.\n          @if $current-global-value {\n            // Only emit if the overridden value exists\n            $custom-prop: keys.create-custom-property($key);\n            $custom-prop: custom-properties.set-fallback(\n              $custom-prop,\n              $current-global-value\n            );\n            @include theme.property($property, $custom-prop);\n          }\n        } @else {\n          // Otherwise, use the key, which may be different from the original\n          // configured global value.\n          @include theme.property($property, $key);\n        }\n      }\n    }\n  }\n}\n\n/// Applies antialiasing via font-smoothing to text.\n@mixin smooth-font($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include feature-targeting.targets($feat-typography) {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n}\n\n// Element must be `display: block` or `display: inline-block` for this to work.\n@mixin overflow-ellipsis($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n/// Sets a container's baseline that text content will align to.\n///\n/// If the `$display` is set to a flexbox display, only `$top` baseline may be\n/// set. A separate element must be added as a child of the container with a\n/// `$bottom` baseline.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {String} $display - the display type of the container. May be `flex`,\n///     `inline-flex`, `block`, or `inline-block`.\n@mixin baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (flex, inline-flex, block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $isFlexbox: $display == 'flex' or $display == 'inline-flex';\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: $display;\n\n    @if $isFlexbox {\n      align-items: baseline;\n    }\n  }\n\n  @if $top > 0 {\n    @include baseline-top($top, $query: $query);\n  }\n\n  @if $bottom > 0 {\n    @if $isFlexbox {\n      @error \"mdc-typography: invalid baseline with display type. #{$display} cannot specifiy $bottom. Add a separate child element with its own $bottom.\";\n    }\n\n    @include baseline-bottom($bottom, $query: $query);\n  }\n}\n\n/// Sets the baseline of flow text content.\n///\n/// Separate `$top` and `$bottom` baselines may be specified. You should ensure\n/// that the `$top` baseline matches the previous text content's $bottom\n/// baseline to ensure text is positioned appropriately.\n///\n/// See go/css-baseline for reference on how this mixin works.\n///\n/// This is intended for text flow content only (e.g. `<h1>`, `<p>`, `<span>`,\n/// or `<div>` with only text content). Use `baseline()` to set the baseline of\n/// containers that are flexbox or have non-flow content children.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {Boolean} $lineHeight - the line-height to use for the text. This\n///     is the distance between baselines of multiple lines of text.\n/// @param {String} $display - the display type of the container. May be `block`\n///     or `inline-block`.\n@mixin text-baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $lineHeight: normal,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include baseline(\n    $display: $display,\n    $top: $top,\n    $bottom: $bottom,\n    $query: $query\n  );\n  @include feature-targeting.targets($feat-structure) {\n    @if $top > 0 {\n      margin-top: 0;\n      /* @alternate */\n      line-height: #{$lineHeight};\n    }\n\n    @if $bottom > 0 {\n      margin-bottom: -1 * $bottom;\n    }\n  }\n}\n\n/// Creates a baseline strut from the top of a container. This mixin is for\n/// advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the top of the container to\n///     the text's baseline.\n@mixin baseline-top($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: 0;\n    }\n  }\n}\n\n/// Creates a baseline strut from the baseline to the bottom of a container.\n/// This mixin is for advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the text's baseline to the\n///     bottom of the container.\n@mixin baseline-bottom($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: -1 * $distance;\n    }\n  }\n}\n\n/// Adds an invisible, zero-width prefix to a container's text.\n/// This ensures that the baseline is always where the text would be, instead\n/// of defaulting to the container bottom when text is empty. Do not use this\n/// mixin if the `baseline` mixin is already applied.\n@mixin zero-width-prefix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      content: '\\200b';\n    }\n  }\n}\n\n@mixin baseline-strut_($distance) {\n  display: inline-block;\n  width: 0;\n  height: $distance;\n  content: '';\n}\n\n@function get-font($typography) {\n  @return map.get($styles, $typography, font-family);\n}\n\n@function get-line-height($typography) {\n  @return map.get($styles, $typography, line-height);\n}\n\n@function get-size($typography) {\n  @return map.get($styles, $typography, font-size);\n}\n\n@function get-weight($typography) {\n  @return map.get($styles, $typography, font-weight);\n}\n\n@function get-tracking($typography) {\n  @return map.get($styles, $typography, letter-spacing);\n}\n\n$_typography-theme: (\n  font: null,\n  line-height: null,\n  size: null,\n  weight: null,\n  tracking: null,\n);\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme-keys($_typography-theme, $theme);\n\n  @include theme.property(font-family, map.get($theme, font));\n  @include theme.property(line-height, map.get($theme, line-height));\n  @include theme.property(font-size, map.get($theme, size));\n  @include theme.property(font-weight, map.get($theme, weight));\n  @include theme.property(letter-spacing, map.get($theme, tracking));\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use 'sass:math';\n@use 'sass:meta';\n@use '@material/animation/variables' as animation-variables;\n@use '@material/theme/custom-properties';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/css';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n\n$baseline-color: black !default;\n$umbra-opacity: 0.2 !default;\n$penumbra-opacity: 0.14 !default;\n$ambient-opacity: 0.12 !default;\n\n$umbra-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 2px 1px -1px',\n  2: '0px 3px 1px -2px',\n  3: '0px 3px 3px -2px',\n  4: '0px 2px 4px -1px',\n  5: '0px 3px 5px -1px',\n  6: '0px 3px 5px -1px',\n  7: '0px 4px 5px -2px',\n  8: '0px 5px 5px -3px',\n  9: '0px 5px 6px -3px',\n  10: '0px 6px 6px -3px',\n  11: '0px 6px 7px -4px',\n  12: '0px 7px 8px -4px',\n  13: '0px 7px 8px -4px',\n  14: '0px 7px 9px -4px',\n  15: '0px 8px 9px -5px',\n  16: '0px 8px 10px -5px',\n  17: '0px 8px 11px -5px',\n  18: '0px 9px 11px -5px',\n  19: '0px 9px 12px -6px',\n  20: '0px 10px 13px -6px',\n  21: '0px 10px 13px -6px',\n  22: '0px 10px 14px -6px',\n  23: '0px 11px 14px -7px',\n  24: '0px 11px 15px -7px',\n) !default;\n\n$penumbra-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 1px 1px 0px',\n  2: '0px 2px 2px 0px',\n  3: '0px 3px 4px 0px',\n  4: '0px 4px 5px 0px',\n  5: '0px 5px 8px 0px',\n  6: '0px 6px 10px 0px',\n  7: '0px 7px 10px 1px',\n  8: '0px 8px 10px 1px',\n  9: '0px 9px 12px 1px',\n  10: '0px 10px 14px 1px',\n  11: '0px 11px 15px 1px',\n  12: '0px 12px 17px 2px',\n  13: '0px 13px 19px 2px',\n  14: '0px 14px 21px 2px',\n  15: '0px 15px 22px 2px',\n  16: '0px 16px 24px 2px',\n  17: '0px 17px 26px 2px',\n  18: '0px 18px 28px 2px',\n  19: '0px 19px 29px 2px',\n  20: '0px 20px 31px 3px',\n  21: '0px 21px 33px 3px',\n  22: '0px 22px 35px 3px',\n  23: '0px 23px 36px 3px',\n  24: '0px 24px 38px 3px',\n) !default;\n\n$ambient-map: (\n  0: '0px 0px 0px 0px',\n  1: '0px 1px 3px 0px',\n  2: '0px 1px 5px 0px',\n  3: '0px 1px 8px 0px',\n  4: '0px 1px 10px 0px',\n  5: '0px 1px 14px 0px',\n  6: '0px 1px 18px 0px',\n  7: '0px 2px 16px 1px',\n  8: '0px 3px 14px 2px',\n  9: '0px 3px 16px 2px',\n  10: '0px 4px 18px 3px',\n  11: '0px 4px 20px 3px',\n  12: '0px 5px 22px 4px',\n  13: '0px 5px 24px 4px',\n  14: '0px 5px 26px 4px',\n  15: '0px 6px 28px 5px',\n  16: '0px 6px 30px 5px',\n  17: '0px 6px 32px 5px',\n  18: '0px 7px 34px 6px',\n  19: '0px 7px 36px 6px',\n  20: '0px 8px 38px 7px',\n  21: '0px 8px 40px 7px',\n  22: '0px 8px 42px 7px',\n  23: '0px 9px 44px 8px',\n  24: '0px 9px 46px 8px',\n) !default;\n\n// The css property used for elevation. In most cases this should not be changed. It is exposed\n// as a variable for abstraction / easy use when needing to reference the property directly, for\n// example in a `will-change` rule.\n$property: box-shadow !default;\n\n// The default color for the elevation overlay.\n$overlay-color: #fff;\n\n// The css property used for elevation overlay transitions. In most cases this should not be changed. It is exposed\n// as a variable for abstraction / easy use when needing to reference the property directly, for\n// example in a `will-change` rule.\n$overlay-property: opacity !default;\n\n// The default duration value for elevation transitions.\n$transition-duration: 280ms !default;\n\n// The default easing value for elevation transitions.\n$transition-timing-function: animation-variables.$standard-curve-timing-function !default;\n\n///\n/// Sets the elevation transition value.\n///\n/// @param {String} $duration - The duration of the transition.\n/// @param {String} $easing - The easing function for the transition.\n/// @return {String}\n///\n@function transition-value(\n  $duration: $transition-duration,\n  $easing: $transition-timing-function\n) {\n  @return #{$property} #{$duration} #{$easing};\n}\n\n///\n/// Sets the elevation overlay transition value.\n///\n/// @param {String} $duration - The duration of the transition.\n/// @param {String} $easing - The easing function for the transition.\n/// @return {String}\n///\n@function overlay-transition-value(\n  $duration: $transition-duration,\n  $easing: $transition-timing-function\n) {\n  @return #{$overlay-property} #{$duration} #{$easing};\n}\n\n///\n/// Creates a box-shadow from the Material elevation system.\n/// @param {Number} $level - the level of the Material elevation system.\n/// @param {String} $color - the color of the shadow.\n/// @param {Number} $opacity-boost [0] - optional opacity boost for the shadow.\n/// @return {List} the complete box shadow.\n///\n@function _box-shadow($level, $color, $opacity-boost: 0) {\n  $color: theme-color.prop-value($color);\n  $umbra-z-value: map.get($umbra-map, $level);\n  $penumbra-z-value: map.get($penumbra-map, $level);\n  $ambient-z-value: map.get($ambient-map, $level);\n\n  $umbra-color: rgba($color, $umbra-opacity + $opacity-boost);\n  $penumbra-color: rgba($color, $penumbra-opacity + $opacity-boost);\n  $ambient-color: rgba($color, $ambient-opacity + $opacity-boost);\n\n  @return (\n    #{'#{$umbra-z-value} #{$umbra-color}'},\n    #{'#{$penumbra-z-value} #{$penumbra-color}'},\n    #{$ambient-z-value} $ambient-color\n  );\n}\n\n// Returns the correct box-shadow specified by $z-value.\n// The $z-value must be between 0 and 24.\n// If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n// $opacity-boost.\n@function elevation-box-shadow(\n  $z-value,\n  $color: $baseline-color,\n  $opacity-boost: 0\n) {\n  @if meta.type-of($z-value) != number or not math.is-unitless($z-value) {\n    @error \"$z-value must be a unitless number, but received '#{$z-value}'\";\n  }\n\n  @if $z-value < 0 or $z-value > 24 {\n    @error \"$z-value must be between 0 and 24, but received '#{$z-value}'\";\n  }\n\n  @return _box-shadow($z-value, $color, $opacity-boost);\n}\n\n///\n/// Returns a shadow or null if params are invalid.\n/// @param {Number} $level - the level of the Material elevation system.\n/// @param {String} $color - the color of the shadow.\n/// @return {List|null} the complete box shadow or null.\n///\n@function _shadow($level, $color) {\n  @if $level == null and $color == null {\n    // Do not emit a warning if both are null, which means the user did not\n    // provide tokens.\n    @return null;\n  }\n\n  @if $level == null or $color == null {\n    // If one of the tokens is null, emit a warning: the user may not realize\n    // that both are required.\n    @warn \"both $level and $color are required; received $level: '#{$level}', $color: '#{$color}'\";\n    @return null;\n  }\n\n  @if $level < 0 or $level > 24 {\n    @warn \"$level must be between 0 and 24; received '#{$level}'\";\n    @return null;\n  }\n\n  @return _box-shadow($level, $color);\n}\n\n@function get-elevation($level) {\n  @return (box-shadow: elevation-box-shadow($level));\n}\n\n///\n/// Sets the shadow of the element.\n///\n/// @param {String} $box-shadow - The shadow to apply to the element.\n///\n@mixin _box-shadow($shadow, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(box-shadow, $shadow);\n  }\n}\n\n///\n/// Sets the shadow of the element.\n///\n/// @param {String} $box-shadow - The shadow to apply to the element.\n///\n@mixin shadow($box-shadow, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @if custom-properties.is-custom-prop($box-shadow) {\n      // TODO(b/185188458): Use theme.property() once resolved.\n      $fallback: custom-properties.get-fallback($box-shadow);\n\n      // var(--<box-shadow-prop>, var(--m-elevation-box-shadow-for-gss))\n      $gss-custom-prop: custom-properties.create(\n        custom-properties.get-varname($box-shadow),\n        custom-properties.create(elevation-box-shadow-for-gss)\n      );\n\n      $value: custom-properties.create-var($gss-custom-prop);\n      @if $value == null {\n        // Custom properties are disabled, since $gss-custom-prop\n        // does not have a fallback. Avoid emitting two non-custom\n        // prop declarations by setting $fallback to null.\n        $value: $fallback;\n        $fallback: null;\n      }\n\n      @include custom-properties.declaration(\n        custom-properties.create(elevation-box-shadow-for-gss, $fallback)\n      );\n      @include css.declaration(box-shadow, $value, $fallback-value: $fallback);\n    } @else {\n      /* @alternate */\n      box-shadow: $box-shadow;\n    }\n  }\n}\n\n///\n/// Sets the elevation overlay surface required positioning.\n///\n@mixin overlay-surface-position($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    /* @alternate */\n    position: relative;\n  }\n}\n\n///\n/// Sets the dimensions of the elevation overlay, including positioning and sizing.\n///\n/// @param {Number} $width - The width of the elevation overlay\n/// @param {Number} [$height] - The height of the elevation overlay\n/// @param {Boolean} [$has-content-sizing] - Set to false if the container has no content sizing\n///\n@mixin overlay-dimensions(\n  $width,\n  $height: $width,\n  $has-content-sizing: true,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-elevation-overlay {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(width, $width);\n      @include theme.property(height, $height);\n\n      @if $has-content-sizing {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n      } @else {\n        top: 50%;\n        @include rtl.ignore-next-line();\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n    }\n  }\n}\n\n///\n/// Sets the elevation overlay fill color.\n/// Expected to be called directly on the elevation overlay element.\n///\n/// @param {Color} $color - The color of the elevation overlay.\n///\n@mixin overlay-fill-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-color) {\n    @include theme.property(background-color, $color);\n  }\n}\n\n///\n/// Applies the given color to the container of the overlay.\n/// @param {color} $color - the color of the overlay container\n///\n@mixin overlay-container-color($color, $query: feature-targeting.all()) {\n  .mdc-elevation-overlay {\n    @include overlay-fill-color($color, $query: $query);\n  }\n}\n\n///\n/// Sets the elevation overlay opacity.\n/// Expected to be called from a parent element.\n///\n/// @param {Number} $opacity - The opacity of the elevation overlay.\n///\n@mixin overlay-opacity($opacity, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-elevation-overlay {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n// Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n// The $z-value must be between 0 and 24.\n// If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n// $opacity-boost.\n@mixin elevation(\n  $z-value,\n  $color: $baseline-color,\n  $opacity-boost: 0,\n  $query: feature-targeting.all()\n) {\n  $box-shadow: elevation-box-shadow(\n    $z-value,\n    $color: $color,\n    $opacity-boost: $opacity-boost\n  );\n\n  @include shadow($box-shadow, $query: $query);\n}\n\n///\n/// Represents the configurable values of the elevation theme.\n///\n$_theme-values: (\n  shadow: null,\n  overlay-opacity: null,\n  overlay-color: null,\n);\n\n///\n/// Applies the shadow theme with the given $resolver function.\n/// @param {Function} $resolver - a function that returns a valid theme config.\n///   @see resolver for an example and expected arguments and return value.\n/// Accepts the following optional keyword args:\n/// @param {Number} $elevation - the level in the elevation system.\n/// @param {String} $shadow-color - the color used for the shadow.\n///\n@mixin with-resolver($resolver, $query: feature-targeting.all(), $args...) {\n  @if $resolver {\n    @include _theme(meta.call($resolver, $args...), $query: $query);\n  }\n}\n\n///\n/// Applies the given theme with validation.\n/// @param {Map} $theme - @see $_theme-values for accepted theme properties.\n///\n@mixin theme($theme: (), $query: feature-targeting.all()) {\n  @include theme.validate-theme($_theme-values, $theme);\n  @include _theme($theme, $query: $query);\n}\n\n///\n/// Applies the given theme.\n/// @param {Map} $theme - @see $_theme-values for accepted theme properties.\n///\n@mixin _theme($theme: (), $query: feature-targeting.all()) {\n  @include shadow(map.get($theme, shadow), $query: $query);\n  @include overlay-opacity(map.get($theme, overlay-opacity), $query: $query);\n  @include overlay-container-color(\n    map.get($theme, overlay-color),\n    $query: $query\n  );\n}\n\n///\n/// Transforms the following optional parameters into a theme config.\n/// @param {Number} $elevation - the level of the elevation system in Material.\n/// @param {String} $shadow-color - the color to be used by the shadow.\n/// @return {Map} @see $_theme-values for accepted theme properties.\n///\n@function resolver($args...) {\n  $opts: meta.keywords($args);\n  $elevation: map.get($opts, elevation);\n  $shadow-color: map.get($opts, shadow-color);\n  @if custom-properties.is-custom-prop($elevation) {\n    @return _resolve-custom-props($elevation, $shadow-color);\n  }\n\n  @return (shadow: _shadow($elevation, $shadow-color));\n}\n\n@function _resolve-custom-props($elevation, $shadow-color) {\n  $fallback-dp: custom-properties.get-fallback($elevation);\n  $fallback-shadow-color: custom-properties.get-fallback($shadow-color);\n  $shadow: custom-properties.set-fallback(\n    $elevation,\n    _shadow($fallback-dp, $fallback-shadow-color)\n  );\n  @return (shadow: $shadow);\n}\n","// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use '@material/density/variables' as density-variables;\n@use '@material/theme/theme-color';\n\n$deprecated-ripple-target: '.mdc-deprecated-list-item__ripple';\n$deprecated-temporary-ripple-target: '.mdc-list-item__ripple';\n\n$deprecated-divider-color-on-light-bg: rgba(0, 0, 0, 0.12) !default;\n$deprecated-divider-color-on-dark-bg: rgba(255, 255, 255, 0.2) !default;\n$deprecated-side-padding: 16px !default;\n$deprecated-trailing-padding: 16px !default;\n$deprecated-text-offset: 72px !default;\n$deprecated-text-disabled-opacity: theme-color.text-emphasis(disabled) !default;\n$deprecated-text-disabled-color: on-surface !default;\n$deprecated-text-selected-color: primary !default;\n\n$deprecated-single-line-height: 48px !default;\n$deprecated-single-line-minimum-height: 24px !default;\n$deprecated-single-line-maximum-height: $deprecated-single-line-height !default;\n$deprecated-single-line-density-scale: density-variables.$default-scale !default;\n$deprecated-single-line-density-config: (\n  height: (\n    default: $deprecated-single-line-height,\n    maximum: $deprecated-single-line-maximum-height,\n    minimum: $deprecated-single-line-minimum-height,\n  ),\n) !default;\n\n$deprecated-item-primary-text-baseline-height: 28px !default;\n$deprecated-item-primary-text-baseline-height-with-graphic: 32px !default;\n$deprecated-item-secondary-text-baseline-height: 20px !default;\n$deprecated-dense-item-primary-text-baseline-height: 24px !default;\n\n$deprecated-two-line-height: 64px !default;\n$deprecated-two-line-graphic-height: 72px !default;\n$deprecated-two-line-icon-top-margin: 16px !default;\n\n// TODO(b/156624966): this is used to support legacy usage of embedded graphics.\n$deprecated-deprecated-graphic-config: (\n  graphic-size: (\n    width: 24px,\n    height: 24px,\n  ),\n  leading-padding: 16px,\n  text-offset: 72px,\n) !default;\n\n$deprecated-textual-variant-config: (\n  single-line-height: $deprecated-single-line-height,\n  graphic-size: (\n    width: 24px,\n    height: 24px,\n  ),\n  leading-padding: 16px,\n  text-offset: 16px,\n) !default;\n\n$deprecated-icon-variant-config: (\n  single-line-height: 56px,\n  graphic-size: (\n    width: 24px,\n    height: 24px,\n  ),\n  leading-padding: 16px,\n  text-offset: 72px,\n) !default;\n\n$deprecated-avatar-variant-config: (\n  single-line-height: 56px,\n  graphic-size: (\n    width: 40px,\n    height: 40px,\n  ),\n  leading-padding: 16px,\n  text-offset: 72px,\n) !default;\n\n$deprecated-thumbnail-variant-config: (\n  single-line-height: 56px,\n  graphic-size: (\n    width: 40px,\n    height: 40px,\n  ),\n  leading-padding: 16px,\n  text-offset: 72px,\n) !default;\n\n$deprecated-image-variant-config: (\n  single-line-height: 72px,\n  graphic-size: (\n    width: 56px,\n    height: 56px,\n  ),\n  leading-padding: 16px,\n  text-offset: 88px,\n) !default;\n\n$deprecated-video-variant-config: (\n  single-line-height: 72px,\n  graphic-size: (\n    width: 100px,\n    height: 56px,\n  ),\n  leading-padding: 0px,\n  text-offset: 116px,\n) !default;\n","// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use '@material/feature-targeting/feature-targeting';\n///\n/// Emits necessary layout styles to set a transparent border around an element\n/// without interfering with the rest of its component layout. The border is\n/// only visible in high-contrast mode. The target element should be a child of\n/// a relatively positioned top-level element (i.e. a ::before pseudo-element).\n///\n/// @param {number} $border-width - The width of the transparent border.\n/// @param {string} $border-style - The style of the transparent border.\n///\n@mixin transparent-border(\n  $border-width: 1px,\n  $border-style: solid,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: $border-width $border-style transparent;\n    border-radius: inherit;\n    content: '';\n    pointer-events: none;\n  }\n\n  // Used to satisfy Firefox v94 which does not render transparent borders in HCM (b/206440838).\n  @include forced-colors-mode($exclude-ie11: true) {\n    @include feature-targeting.targets($feat-structure) {\n      border-color: CanvasText;\n    }\n  }\n}\n\n///\n/// Visually hides text content for accessibility. This text should only be\n/// visible to screen reader users.\n/// See https://a11yproject.com/posts/how-to-hide-content/\n///\n@mixin visually-hidden($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap; /* added line */\n    width: 1px;\n  }\n}\n\n/// Selects for IE11 support.\n///\n/// @content styles to emit for IE11 support\n@mixin ie11-support {\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    @content;\n  }\n}\n\n/// Selects for `forced-colors` high contrast mode.\n///\n/// While in `forced-colors` mode, only system colors should be used.\n///\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors\n/// @content styles to emit in `forced-colors` mode\n@mixin forced-colors-mode($exclude-ie11: false) {\n  @if $exclude-ie11 {\n    @media screen and (forced-colors: active) {\n      @content;\n    }\n  } @else {\n    @media screen and (forced-colors: active), (-ms-high-contrast: active) {\n      @content;\n    }\n  }\n}\n","// Selector '.mdc-*' should only be used in this project.\n// stylelint-disable selector-class-pattern --\n// NOTE: this is the implementation of the aforementioned classes.\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:map';\n@use '@material/theme/theme';\n@use '@material/ripple/ripple';\n@use '@material/ripple/ripple-theme';\n@use '@material/rtl/rtl';\n@use '@material/density/functions' as density-functions;\n@use '@material/dom/mixins' as dom-mixins;\n@use '@material/shape/mixins' as shape-mixins;\n@use '@material/typography/typography';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/theme-color';\n@use './evolution-variables' as variables;\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include without-ripple($query);\n  @include with-ripple($query);\n}\n\n@mixin without-ripple($query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  //\n  // Items\n  //\n\n  @include list-primary-text-ink-color(text-primary-on-background, $query);\n  @include list-secondary-text-ink-color(text-secondary-on-background, $query);\n  @include list-overline-text-ink-color(text-hint-on-background, $query);\n  @include list-icon-fill-color(transparent, $query);\n  @include list-icon-ink-color(text-icon-on-background, $query);\n  @include list-meta-text-ink-color(text-hint-on-background, $query);\n  @include list-disabled-opacity(variables.$content-disabled-opacity, $query);\n  @include list-disabled-ink-color(variables.$content-disabled-color, $query);\n  @include list-selected-ink-color(variables.$content-selected-color, $query);\n\n  @include group-subheader-ink-color(text-primary-on-background, $query);\n\n  @include _high-contrast-mode($query);\n\n  .mdc-list {\n    @include list-base($query: $query);\n  }\n\n  .mdc-list-item__wrapper {\n    @include feature-targeting.targets($feat-structure) {\n      display: block;\n    }\n  }\n\n  .mdc-list-item {\n    @include item-base($query: $query);\n\n    @include _one-line-item-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n    @include _three-line-item-density(\n      variables.$three-line-item-density-scale,\n      $query: $query\n    );\n\n    @include one-line-item-start-alignment(center, $query: $query);\n    @include two-line-item-start-alignment(\n      $alignment: flex-start,\n      $offset: 16px,\n      $query: $query\n    );\n    @include three-line-item-start-alignment(\n      $alignment: flex-start,\n      $offset: 16px,\n      $query: $query\n    );\n\n    @include one-line-item-end-alignment(center, $query: $query);\n    @include two-line-item-end-alignment(center, $query: $query);\n    @include three-line-item-end-alignment(\n      $alignment: flex-start,\n      $offset: 16px,\n      $query: $query\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      align-items: stretch;\n      cursor: pointer;\n    }\n\n    // Reset mouse cursor for disabled and non-interactive items.\n    &.mdc-list-item--disabled,\n    &.mdc-list-item--non-interactive {\n      @include feature-targeting.targets($feat-structure) {\n        cursor: auto;\n      }\n    }\n\n    // For components using aria-activedescendant, the focus pseudoclass is\n    // never applied and use `.mdc-ripple-upgraded--background-focused` instead.\n    &:not(.mdc-list-item--selected):focus::before, // lint-disable-focus-psuedo-selector\n    &.mdc-ripple-upgraded--background-focused::before {\n      @include dom-mixins.transparent-border($query: $query);\n    }\n\n    &.mdc-list-item--selected::before {\n      @include dom-mixins.transparent-border(\n        $border-width: 3px,\n        $border-style: double,\n        $query: $query\n      );\n    }\n\n    // lint-disable-focus-psuedo-selector\n    &.mdc-list-item--selected:focus::before {\n      @include dom-mixins.transparent-border(\n        $border-width: 3px,\n        $query: $query\n      );\n    }\n  }\n\n  // Override anchor tag styles for the use-case of a list being used for navigation\n  // stylelint-disable selector-max-type,selector-no-qualifying-type\n  a.mdc-list-item {\n    @include feature-targeting.targets($feat-structure) {\n      color: inherit;\n      text-decoration: none;\n    }\n  }\n  // stylelint-enable selector-max-type,selector-no-qualifying-type\n\n  .mdc-list-item__start {\n    @include feature-targeting.targets($feat-structure) {\n      fill: currentColor;\n      flex-shrink: 0;\n      pointer-events: none;\n    }\n  }\n\n  .mdc-list-item__end {\n    @include feature-targeting.targets($feat-structure) {\n      flex-shrink: 0;\n      pointer-events: none;\n    }\n  }\n\n  .mdc-list-item__content {\n    @include typography.overflow-ellipsis($query);\n    @include feature-targeting.targets($feat-structure) {\n      align-self: center;\n      flex: 1;\n      pointer-events: none;\n    }\n\n    .mdc-list-item--with-two-lines &,\n    .mdc-list-item--with-three-lines & {\n      @include feature-targeting.targets($feat-structure) {\n        align-self: stretch;\n      }\n    }\n\n    // Disable interaction on label elements that may automatically\n    // toggle corresponding checkbox / radio input.\n    &[for] {\n      @include feature-targeting.targets($feat-structure) {\n        pointer-events: none;\n      }\n    }\n  }\n\n  .mdc-list-item__primary-text {\n    @include typography.typography(subtitle1, $query);\n    @include typography.overflow-ellipsis($query);\n\n    .mdc-list-item--with-two-lines &,\n    .mdc-list-item--with-three-lines & {\n      @include typography.text-baseline(\n        $top: 28px,\n        $bottom: 20px,\n        $query: $query\n      );\n    }\n  }\n\n  .mdc-list-item__secondary-text {\n    @include typography.typography(body2, $query);\n    @include typography.overflow-ellipsis($query);\n    @include typography.text-baseline(\n      $top: 20px,\n      $display: block,\n      $query: $query\n    );\n\n    .mdc-list-item--with-three-lines & {\n      @include feature-targeting.targets($feat-structure) {\n        white-space: normal;\n        line-height: 20px;\n      }\n    }\n\n    .mdc-list-item--with-overline & {\n      @include feature-targeting.targets($feat-structure) {\n        white-space: nowrap;\n        line-height: auto;\n      }\n    }\n  }\n\n  .mdc-list-item__overline-text {\n    @include typography.typography(overline, $query);\n    @include typography.overflow-ellipsis($query);\n\n    .mdc-list-item--with-two-lines & {\n      @include typography.text-baseline(\n        $top: 24px,\n        $bottom: 20px,\n        $query: $query\n      );\n    }\n\n    .mdc-list-item--with-three-lines & {\n      @include typography.text-baseline(\n        $top: 28px,\n        $bottom: 20px,\n        $query: $query\n      );\n    }\n  }\n\n  .mdc-list-item--with-leading-avatar {\n    @include item-start-spacing(16px, $query: $query);\n    @include item-start-size(40px, $query: $query);\n    @include _two-line-item-primary-baseline(32px, 20px, $query: $query);\n    @include _two-line-item-overline-baseline(28px, 20px, $query: $query);\n    @include _two-line-item-meta-baseline($top: 32px, $query: $query);\n    @include _one-line-item-tall-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-tall-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n\n    .mdc-list-item__start {\n      @include feature-targeting.targets($feat-structure) {\n        border-radius: 50%;\n      }\n    }\n  }\n\n  .mdc-list-item--with-leading-icon {\n    @include item-start-size(24px, $query: $query);\n    @include item-start-spacing(\n      $leading: 16px,\n      $trailing: 32px,\n      $query: $query\n    );\n    @include _two-line-item-primary-baseline(32px, 20px, $query: $query);\n    @include _two-line-item-overline-baseline(28px, 20px, $query: $query);\n    @include _two-line-item-meta-baseline($top: 32px, $query: $query);\n    @include _one-line-item-tall-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-tall-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-leading-thumbnail {\n    @include item-start-spacing(16px, $query: $query);\n    @include item-start-size(40px, $query: $query);\n    @include _two-line-item-primary-baseline(32px, 20px, $query: $query);\n    @include _two-line-item-overline-baseline(28px, 20px, $query: $query);\n    @include _two-line-item-meta-baseline($top: 32px, $query: $query);\n    @include _one-line-item-tall-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-tall-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-leading-image {\n    @include item-start-spacing(16px, $query: $query);\n    @include item-start-size(56px, $query: $query);\n    @include _two-line-item-primary-baseline(32px, 20px, $query: $query);\n    @include _two-line-item-overline-baseline(28px, 20px, $query: $query);\n    @include _two-line-item-meta-baseline($top: 32px, $query: $query);\n    @include _one-line-item-taller-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-tall-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-leading-video {\n    @include two-line-item-start-alignment(\n      $alignment: flex-start,\n      $offset: 8px,\n      $query: $query\n    );\n    @include item-start-spacing($leading: 0, $trailing: 16px, $query: $query);\n    @include item-start-size($width: 100px, $height: 56px, $query: $query);\n    @include _two-line-item-primary-baseline(32px, 20px, $query: $query);\n    @include _two-line-item-overline-baseline(28px, 20px, $query: $query);\n    @include _two-line-item-meta-baseline($top: 32px, $query: $query);\n    @include _one-line-item-taller-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-tall-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-leading-checkbox {\n    $leading: absorb-overflow(16px, $actual: 40px, $available: 24px);\n    $trailing: absorb-overflow(32px, $actual: 40px, $available: 24px);\n    $top: absorb-overflow(16px, $actual: 40px, $available: 24px);\n\n    @include item-start-spacing($leading, $trailing, $query: $query);\n    @include item-start-size(40px, $query: $query);\n    @include two-line-item-start-alignment(\n      $alignment: flex-start,\n      $offset: $top,\n      $query: $query\n    );\n    @include _two-line-item-primary-baseline(32px, 20px, $query: $query);\n    @include _two-line-item-overline-baseline(28px, 20px, $query: $query);\n    @include _two-line-item-meta-baseline($top: 32px, $query: $query);\n    @include _one-line-item-tall-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-tall-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-leading-radio {\n    $leading: absorb-overflow(16px, $actual: 40px, $available: 24px);\n    $trailing: absorb-overflow(32px, $actual: 40px, $available: 24px);\n    $top: absorb-overflow(16px, $actual: 40px, $available: 24px);\n\n    @include item-start-spacing($leading, $trailing, $query: $query);\n    @include item-start-size(40px, $query: $query);\n    @include two-line-item-start-alignment(\n      $alignment: flex-start,\n      $offset: $top,\n      $query: $query\n    );\n    @include _two-line-item-primary-baseline(32px, 20px, $query: $query);\n    @include _two-line-item-overline-baseline(28px, 20px, $query: $query);\n    @include _two-line-item-meta-baseline($top: 32px, $query: $query);\n    @include _one-line-item-tall-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-tall-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-leading-switch {\n    @include item-start-spacing(16px, $query: $query);\n    @include item-start-size($width: 36px, $height: 20px, $query: $query);\n    @include two-line-item-start-alignment(\n      $alignment: flex-start,\n      $offset: 16px,\n      $query: $query\n    );\n    @include _two-line-item-primary-baseline(32px, 20px, $query: $query);\n    @include _two-line-item-overline-baseline(28px, 20px, $query: $query);\n    @include _two-line-item-meta-baseline($top: 32px, $query: $query);\n    @include _one-line-item-tall-density(\n      variables.$one-line-item-density-scale,\n      $query: $query\n    );\n    @include _two-line-item-tall-density(\n      variables.$two-line-item-density-scale,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-trailing-icon {\n    @include item-end-spacing(16px, $query: $query);\n    @include item-end-size(24px, $query: $query);\n  }\n\n  .mdc-list-item--with-trailing-meta {\n    @include two-line-item-end-alignment(flex-start, $query: $query);\n    @include three-line-item-end-alignment(flex-start, $query: $query);\n    @include item-end-spacing($leading: 28px, $trailing: 16px, $query: $query);\n    @include _two-line-item-end-baseline($top: 28px, $query: $query);\n    @include _three-line-item-end-baseline($top: 28px, $query: $query);\n\n    .mdc-list-item__end {\n      @include typography.typography(caption, $query);\n    }\n  }\n\n  .mdc-list-item--with-trailing-checkbox {\n    $leading: absorb-overflow(32px, $actual: 40px, $available: 24px);\n    $trailing: absorb-overflow(16px, $actual: 40px, $available: 24px);\n    $top: absorb-overflow(16px, $actual: 40px, $available: 24px);\n\n    @include item-end-spacing($leading, $trailing, $query: $query);\n    @include item-end-size(40px, $query: $query);\n    @include three-line-item-end-alignment(\n      $alignment: flex-start,\n      $offset: $top,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-trailing-radio {\n    $leading: absorb-overflow(32px, $actual: 40px, $available: 24px);\n    $trailing: absorb-overflow(16px, $actual: 40px, $available: 24px);\n    $top: absorb-overflow(16px, $actual: 40px, $available: 24px);\n\n    @include item-end-spacing($leading, $trailing, $query: $query);\n    @include item-end-size(40px, $query: $query);\n    @include three-line-item-end-alignment(\n      $alignment: flex-start,\n      $offset: $top,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-trailing-switch {\n    @include item-end-spacing(16px, $query: $query);\n    @include item-end-size($width: 36px, $height: 20px, $query: $query);\n    @include three-line-item-end-alignment(\n      $alignment: flex-start,\n      $offset: 16px,\n      $query: $query\n    );\n  }\n\n  .mdc-list-item--with-overline {\n    @include _two-line-item-primary-baseline(20px, 0px, $query: $query);\n    @include _three-line-item-primary-baseline(20px, 0px, $query: $query);\n  }\n\n  // This must be specified last to ensure that RTL padding takes priority over\n  // LTR padding in the cascade.\n  .mdc-list-item {\n    @include item-spacing(16px, $query: $query);\n  }\n\n  //\n  // Grouping\n  //\n\n  .mdc-list-group {\n    @include feature-targeting.targets($feat-structure) {\n      // Cancel top/bottom padding on individual lists within group\n      .mdc-deprecated-list {\n        padding: 0;\n      }\n    }\n  }\n\n  .mdc-list-group__subheader {\n    $mdc-list-subheader-virtual-height: 3rem;\n    $mdc-list-subheader-leading: map.get(\n      map.get(typography.$styles, body1),\n      line-height\n    );\n    $mdc-list-subheader-margin: calc(\n      (#{$mdc-list-subheader-virtual-height} - #{$mdc-list-subheader-leading}) /\n        2\n    );\n\n    @include typography.typography(subtitle1, $query);\n    @include feature-targeting.targets($feat-structure) {\n      margin: $mdc-list-subheader-margin variables.$side-padding;\n    }\n  }\n\n  //\n  // Dividers\n  //\n\n  $divider-color: if(\n    theme-color.tone(theme-color.$background) == 'dark',\n    variables.$divider-color-on-dark-bg,\n    variables.$divider-color-on-light-bg\n  );\n\n  @include divider-color($divider-color, $query: $query);\n  @include divider-height(1px, $query: $query);\n\n  .mdc-list-divider {\n    @include feature-targeting.targets($feat-structure) {\n      padding: 0;\n\n      // Allows the use of padding to specify leading and trailing insets\n      // independently.\n      background-clip: content-box;\n    }\n  }\n\n  // The base inset variant corresponds to the item's padding.\n  .mdc-list-divider,\n  .mdc-list-divider--with-leading-text,\n  .mdc-list-divider--with-leading-icon,\n  .mdc-list-divider--with-leading-image,\n  .mdc-list-divider--with-leading-thumbnail,\n  .mdc-list-divider--with-leading-avatar,\n  .mdc-list-divider--with-leading-checkbox,\n  .mdc-list-divider--with-leading-switch,\n  .mdc-list-divider--with-leading-radio {\n    @include divider-leading-inset(16px, $query: $query);\n    @include divider-trailing-inset(16px, $query: $query);\n  }\n\n  .mdc-list-divider--with-leading-video {\n    @include divider-leading-inset(0px, $query: $query);\n  }\n\n  // This is needed to ensure that default padding isn't applied in RTL locales.\n  .mdc-list-divider {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.rtl {\n        padding: 0;\n      }\n    }\n  }\n}\n\n@mixin with-ripple($query: feature-targeting.all()) {\n  @include ripple.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  :not(.mdc-list-item--disabled).mdc-list-item {\n    @include _item-interactive-ripple($query);\n  }\n\n  .mdc-list-item--disabled {\n    @include ripple.surface(\n      $ripple-target: variables.$ripple-target,\n      $query: $query\n    );\n    @include ripple.radius-bounded(\n      $ripple-target: variables.$ripple-target,\n      $query: $query\n    );\n    @include ripple-theme.states-base-color(\n      theme-color.prop-value(on-surface),\n      $ripple-target: variables.$ripple-target,\n      $query: $query\n    );\n    @include ripple-theme.states-focus-opacity(\n      ripple-theme.states-opacity(primary, focus),\n      $ripple-target: variables.$ripple-target,\n      $query: $query\n    );\n\n    #{variables.$ripple-target} {\n      @include ripple.target-common($query: $query);\n    }\n  }\n}\n\n///\n/// Adjusts an offset (i.e., margin) to accomodate contents that are larger than\n/// the space allocated by the specification.\n///\n/// For instance, the specification provides 24x24dp for a checkbox with a 16dp\n/// margin. However, checkboxes are actually 40x40dp. To ensure that the\n/// checkbox is positioned correctly, the margin is reduced by 8dp to reflect\n/// that the margin is already \"baked into\" the checkbox.\n///\n/// Concretely, 40dp - 24dp = 16dp. Assuming that the control is symmetrical,\n/// half of the overflow (8dp) is on the leading side and half on the trailing\n/// side. Therefore, the leading and trailing margins are reduced by 8dp.\n///\n/// Note: this might be more useful if it's added into the leading/trailing\n/// margin mixins as a parameter.\n///\n@function absorb-overflow($offset, $actual, $available, $symmetric: true) {\n  @if $actual <= $available {\n    @return $offset;\n  }\n  $overflow: $actual - $available;\n  @return $offset - math.div($overflow, if($symmetric, 2, 1));\n}\n\n@mixin one-line-item-height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-one-line {\n    @include feature-targeting.targets($feat-structure) {\n      height: $height;\n    }\n  }\n}\n\n@mixin two-line-item-height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-two-lines {\n    @include feature-targeting.targets($feat-structure) {\n      height: $height;\n    }\n  }\n}\n@mixin three-line-item-height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-three-lines {\n    @include feature-targeting.targets($feat-structure) {\n      height: $height;\n    }\n  }\n}\n\n@mixin list-item-height($height) {\n  &.mdc-list-item--with-one-line,\n  &.mdc-list-item--with-two-lines,\n  &.mdc-list-item--with-three-lines {\n    height: $height;\n  }\n}\n\n@mixin item-spacing(\n  $leading,\n  $trailing: $leading,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    @include rtl.reflexive-property(padding, $leading, $trailing);\n  }\n}\n\n@mixin one-line-item-start-alignment(\n  $alignment,\n  $offset: 0,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-one-line {\n    .mdc-list-item__start {\n      @include feature-targeting.targets($feat-structure) {\n        align-self: $alignment;\n        margin-top: $offset;\n      }\n    }\n  }\n}\n\n@mixin two-line-item-start-alignment(\n  $alignment,\n  $offset: 0,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-two-lines {\n    .mdc-list-item__start {\n      @include feature-targeting.targets($feat-structure) {\n        align-self: $alignment;\n        margin-top: $offset;\n      }\n    }\n  }\n}\n\n@mixin three-line-item-start-alignment(\n  $alignment,\n  $offset: 0,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-three-lines {\n    .mdc-list-item__start {\n      @include feature-targeting.targets($feat-structure) {\n        align-self: $alignment;\n        margin-top: $offset;\n      }\n    }\n  }\n}\n\n@mixin one-line-item-end-alignment(\n  $alignment,\n  $offset: 0,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-one-line {\n    .mdc-list-item__end {\n      @include feature-targeting.targets($feat-structure) {\n        align-self: $alignment;\n        margin-top: $offset;\n      }\n    }\n  }\n}\n\n@mixin two-line-item-end-alignment(\n  $alignment,\n  $offset: 0,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-two-lines {\n    .mdc-list-item__end {\n      @include feature-targeting.targets($feat-structure) {\n        align-self: $alignment;\n        margin-top: $offset;\n      }\n    }\n  }\n}\n\n@mixin three-line-item-end-alignment(\n  $alignment,\n  $offset: 0,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-item--with-three-lines {\n    .mdc-list-item__end {\n      @include feature-targeting.targets($feat-structure) {\n        align-self: $alignment;\n        margin-top: $offset;\n      }\n    }\n  }\n}\n\n@mixin item-start-spacing(\n  $leading,\n  $trailing: $leading,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    // Extra specificity needed to override default customizations.\n    &.mdc-list-item {\n      // We rely on auto to avoid clobbering the opposite padding.\n      @include rtl.reflexive-property(padding, 0, auto);\n    }\n\n    .mdc-list-item__start {\n      @include rtl.reflexive-property(margin, $leading, $trailing);\n    }\n  }\n}\n\n@mixin item-end-spacing(\n  $leading,\n  $trailing: $leading,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    // Extra specificity needed to override default customizations.\n    &.mdc-list-item {\n      // We rely on auto to avoid clobbering the opposite padding.\n      @include rtl.reflexive-property(padding, auto, 0);\n    }\n\n    .mdc-list-item__end {\n      @include rtl.reflexive-property(margin, $leading, $trailing);\n    }\n  }\n}\n\n@mixin item-start-size(\n  $width,\n  $height: $width,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    .mdc-list-item__start {\n      width: $width;\n      height: $height;\n    }\n  }\n}\n\n@mixin item-end-size($width, $height: $width, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    .mdc-list-item__end {\n      width: $width;\n      height: $height;\n    }\n  }\n}\n\n@mixin list-item-selected-container-color($color) {\n  &.mdc-list-item--selected {\n    @include theme.property(background-color, $color);\n  }\n}\n\n@mixin list-primary-text-typography($typography-theme) {\n  .mdc-list-item__primary-text {\n    @include typography.theme-styles($typography-theme);\n  }\n}\n\n@mixin list-primary-text-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item__primary-text {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin list-secondary-text-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item__secondary-text {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin list-secondary-text-typography($typography-theme) {\n  .mdc-list-item__secondary-text {\n    @include typography.theme-styles($typography-theme);\n  }\n}\n\n@mixin list-overline-text-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item__overline-text {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin list-meta-text-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item__end {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin list-icon-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item--with-leading-icon .mdc-list-item__start,\n  .mdc-list-item--with-trailing-icon .mdc-list-item__end {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n@mixin list-icon-fill-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item--with-leading-icon .mdc-list-item__start,\n  .mdc-list-item--with-trailing-icon .mdc-list-item__end {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(background-color, $color);\n    }\n  }\n}\n\n@mixin list-selected-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item--selected,\n  .mdc-list-item--activated {\n    @include list-primary-text-ink-color($color, $query);\n    @include _item-icon-ink-color($color, $leading-only: true, $query: $query);\n  }\n}\n\n@mixin list-selected-meta-text-ink-color(\n  $color,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item--selected,\n  .mdc-list-item--activated {\n    @include list-meta-text-ink-color($color, $query);\n  }\n}\n\n@mixin list-disabled-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item--disabled {\n    @include list-primary-text-ink-color($color, $query);\n    @include list-secondary-text-ink-color($color, $query);\n    @include list-overline-text-ink-color($color, $query);\n    @include _item-icon-ink-color($color, $query: $query);\n    @include _item-meta-text-ink-color($color, $query);\n  }\n}\n\n@mixin list-disabled-opacity($opacity, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-item--disabled {\n    .mdc-list-item__start,\n    .mdc-list-item__content,\n    .mdc-list-item__end {\n      @include feature-targeting.targets($feat-color) {\n        opacity: $opacity;\n      }\n    }\n  }\n}\n\n@mixin group-subheader-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-deprecated-list-group__subheader {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, $color);\n    }\n  }\n}\n\n///\n/// Sets shape radius (rounded) to single line list variant.\n///\n/// @param {Number | List<Number>} $radius Radius size in `px` or percentage. It can be 4 value corner or single radius.\n///     Set to `50%` for rounded shape.\n/// @param {Boolean} $rtl-reflexive Set to true to flip border radius in RTL context. Defaults to `false`.\n/// @param {Number} $density-scale Density scale of single line list. Set this only when custom density is applied.\n///     Defaults to `$mdc-deprecated-list-single-line-density-scale`.\n///\n/// @access public\n///\n@mixin one-line-list-radius(\n  $radius,\n  $rtl-reflexive: false,\n  $density-scale: variables.$one-line-item-density-scale,\n  $query: feature-targeting.all()\n) {\n  .mdc-list-item--with-one-line {\n    @include shape-mixins.radius(\n      $radius,\n      $rtl-reflexive,\n      $component-height:\n        density-functions.prop-value(\n          $density-config: variables.$one-line-item-density-config,\n          $density-scale: $density-scale,\n          $property-name: height\n        ),\n      $query: $query\n    );\n\n    &.mdc-list-item--with-leading-avatar,\n    &.mdc-list-item--with-leading-icon,\n    &.mdc-list-item--with-leading-thumbnail,\n    &.mdc-list-item--with-leading-checkbox,\n    &.mdc-list-item--with-leading-radio,\n    &.mdc-list-item--with-leading-switch {\n      @include shape-mixins.radius(\n        $radius,\n        $rtl-reflexive,\n        $component-height:\n          density-functions.prop-value(\n            $density-config: variables.$one-line-item-tall-density-config,\n            $density-scale: $density-scale,\n            $property-name: height\n          ),\n        $query: $query\n      );\n    }\n\n    &.mdc-list-item--with-leading-image,\n    &.mdc-list-item--with-leading-video {\n      @include shape-mixins.radius(\n        $radius,\n        $rtl-reflexive,\n        $component-height:\n          density-functions.prop-value(\n            $density-config: variables.$one-line-item-taller-density-config,\n            $density-scale: $density-scale,\n            $property-name: height\n          ),\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin two-line-list-radius(\n  $radius,\n  $rtl-reflexive: false,\n  $density-scale: variables.$two-line-item-density-scale,\n  $query: feature-targeting.all()\n) {\n  .mdc-list-item--with-two-lines {\n    @include shape-mixins.radius(\n      $radius,\n      $rtl-reflexive,\n      $component-height:\n        density-functions.prop-value(\n          $density-config: variables.$two-line-item-density-config,\n          $density-scale: $density-scale,\n          $property-name: height\n        ),\n      $query: $query\n    );\n\n    &.mdc-list-item--with-leading-avatar,\n    &.mdc-list-item--with-leading-icon,\n    &.mdc-list-item--with-leading-thumbnail,\n    &.mdc-list-item--with-leading-checkbox,\n    &.mdc-list-item--with-leading-radio,\n    &.mdc-list-item--with-leading-switch,\n    &.mdc-list-item--with-leading-image,\n    &.mdc-list-item--with-leading-video {\n      @include shape-mixins.radius(\n        $radius,\n        $rtl-reflexive,\n        $component-height:\n          density-functions.prop-value(\n            $density-config: variables.$two-line-item-tall-density-config,\n            $density-scale: $density-scale,\n            $property-name: height\n          ),\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin three-line-list-radius(\n  $radius,\n  $rtl-reflexive: false,\n  $density-scale: variables.$three-line-item-density-scale,\n  $query: feature-targeting.all()\n) {\n  .mdc-list-item--with-three-lines {\n    @include shape-mixins.radius(\n      $radius,\n      $rtl-reflexive,\n      $component-height:\n        density-functions.prop-value(\n          $density-config: variables.$three-line-item-density-config,\n          $density-scale: $density-scale,\n          $property-name: height\n        ),\n      $query: $query\n    );\n  }\n}\n\n@mixin divider-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-list-divider {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(background-color, $color);\n    }\n  }\n}\n\n@mixin divider-height($height, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-list-divider {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(height, $height);\n    }\n  }\n}\n\n@mixin divider-leading-inset($inset, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-divider--with-leading-inset {\n    @include feature-targeting.targets($feat-structure) {\n      // We rely on auto to avoid clobbering the opposite padding.\n      @include rtl.reflexive-property(padding, $inset, auto);\n    }\n  }\n}\n\n@mixin divider-trailing-inset($inset, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  &.mdc-list-divider--with-trailing-inset {\n    @include feature-targeting.targets($feat-structure) {\n      // We rely on auto to avoid clobbering the opposite padding.\n      @include rtl.reflexive-property(padding, auto, $inset);\n    }\n  }\n}\n\n// The public density mixins apply the appropriate density styles regardless of\n// the item's start contents.\n@mixin one-line-item-density(\n  $density-scale,\n  $exclude-variants: false,\n  $query: feature-targeting.all()\n) {\n  @include _one-line-item-density($density-scale, $query: $query);\n\n  @if not $exclude-variants {\n    &.mdc-list-item--with-leading-avatar,\n    &.mdc-list-item--with-leading-icon,\n    &.mdc-list-item--with-leading-thumbnail,\n    &.mdc-list-item--with-leading-checkbox,\n    &.mdc-list-item--with-leading-radio,\n    &.mdc-list-item--with-leading-switch {\n      @include _one-line-item-tall-density($density-scale, $query: $query);\n    }\n\n    &.mdc-list-item--with-leading-image,\n    &.mdc-list-item--with-leading-video {\n      @include _one-line-item-taller-density($density-scale, $query: $query);\n    }\n  }\n}\n\n@mixin two-line-item-density($density-scale, $query: feature-targeting.all()) {\n  @include _two-line-item-density($density-scale, $query: $query);\n\n  &.mdc-list-item--with-leading-avatar,\n  &.mdc-list-item--with-leading-icon,\n  &.mdc-list-item--with-leading-thumbnail,\n  &.mdc-list-item--with-leading-checkbox,\n  &.mdc-list-item--with-leading-radio,\n  &.mdc-list-item--with-leading-switch,\n  &.mdc-list-item--with-leading-image,\n  &.mdc-list-item--with-leading-video {\n    @include _two-line-item-tall-density($density-scale, $query: $query);\n  }\n}\n\n@mixin three-line-item-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  @include _three-line-item-density($density-scale, $query: $query);\n}\n\n//\n// Private\n//\n\n// The private density mixins allow density properties to be overridden\n// individually to avoid increasing specificity.\n@mixin _one-line-item-density($density-scale, $query: feature-targeting.all()) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$one-line-item-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include one-line-item-height($height, $query: $query);\n}\n\n@mixin _one-line-item-tall-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$one-line-item-tall-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include one-line-item-height($height, $query: $query);\n}\n\n@mixin _one-line-item-taller-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$one-line-item-taller-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include one-line-item-height($height, $query: $query);\n}\n\n@mixin _two-line-item-density($density-scale, $query: feature-targeting.all()) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$two-line-item-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include two-line-item-height($height, $query: $query);\n}\n\n@mixin _two-line-item-tall-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$two-line-item-tall-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include two-line-item-height($height, $query: $query);\n}\n\n@mixin _three-line-item-density(\n  $density-scale,\n  $query: feature-targeting.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$three-line-item-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  @include three-line-item-height($height, $query: $query);\n}\n\n@mixin list-base($query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include typography.typography(subtitle1, $query);\n  @include feature-targeting.targets($feat-typography) {\n    // According to the mocks and stickersheet, the line-height is\n    // adjusted to 24px for text content, same as for body1.\n    /* @alternate */\n    line-height: map.get(map.get(typography.$styles, body1), line-height);\n  }\n  @include feature-targeting.targets($feat-structure) {\n    margin: 0;\n    padding: 8px 0;\n    list-style-type: none;\n\n    &:focus // lint-disable-focus-psuedo-selector\n    {\n      outline: none;\n    }\n  }\n}\n\n@mixin item-base($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: flex-start;\n    overflow: hidden;\n    padding: 0;\n\n    &:focus // lint-disable-focus-psuedo-selector\n    {\n      outline: none;\n    }\n  }\n}\n\n@mixin _item-interactive-ripple($query: feature-targeting.all()) {\n  @include ripple.surface(\n    $ripple-target: variables.$ripple-target,\n    $query: $query\n  );\n  @include ripple.radius-bounded(\n    $ripple-target: variables.$ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states(\n    theme-color.prop-value(on-surface),\n    false,\n    $ripple-target: variables.$ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states-activated(\n    primary,\n    false,\n    $ripple-target: variables.$ripple-target,\n    $query: $query\n  );\n  @include ripple-theme.states-selected(\n    primary,\n    false,\n    $ripple-target: variables.$ripple-target,\n    $query: $query\n  );\n\n  #{variables.$ripple-target} {\n    @include ripple.target-common($query: $query);\n  }\n}\n\n@mixin _two-line-item-primary-baseline(\n  $top,\n  $bottom,\n  $query: feature-targeting.all()\n) {\n  &.mdc-list-item--with-two-lines {\n    .mdc-list-item__primary-text {\n      @include typography.text-baseline(\n        $top: $top,\n        $bottom: $bottom,\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin _three-line-item-primary-baseline(\n  $top,\n  $bottom,\n  $query: feature-targeting.all()\n) {\n  &.mdc-list-item--with-three-lines {\n    .mdc-list-item__primary-text {\n      @include typography.text-baseline(\n        $top: $top,\n        $bottom: $bottom,\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin _two-line-item-overline-baseline(\n  $top,\n  $bottom,\n  $query: feature-targeting.all()\n) {\n  &.mdc-list-item--with-two-lines {\n    .mdc-list-item__overline-text {\n      @include typography.text-baseline(\n        $top: $top,\n        $bottom: $bottom,\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin _three-line-item-overline-baseline(\n  $top,\n  $bottom,\n  $query: feature-targeting.all()\n) {\n  &.mdc-list-item--with-three-lines {\n    .mdc-list-item__overline-text {\n      @include typography.text-baseline(\n        $top: $top,\n        $bottom: $bottom,\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin _two-line-item-end-baseline($top, $query: feature-targeting.all()) {\n  &.mdc-list-item--with-two-lines {\n    .mdc-list-item__end {\n      @include typography.text-baseline(\n        $display: block,\n        $top: $top,\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin _three-line-item-end-baseline($top, $query: feature-targeting.all()) {\n  &.mdc-list-item--with-three-lines {\n    .mdc-list-item__end {\n      @include typography.text-baseline(\n        $display: block,\n        $top: $top,\n        $query: $query\n      );\n    }\n  }\n}\n\n@mixin _two-line-item-meta-baseline($top, $query: feature-targeting.all()) {\n  &.mdc-list-item--with-two-lines {\n    &.mdc-list-item--with-trailing-meta {\n      .mdc-list-item__end {\n        @include typography.text-baseline(\n          $display: block,\n          $top: $top,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n\n@mixin _item-meta-text-ink-color($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  &.mdc-list-item--with-trailing-meta {\n    .mdc-list-item__end {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(color, $color);\n      }\n    }\n  }\n}\n\n@mixin _item-icon-ink-color(\n  $color,\n  $leading-only: false,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  &.mdc-list-item--with-leading-icon {\n    .mdc-list-item__start {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(color, $color);\n      }\n    }\n  }\n\n  @if (not $leading-only) {\n    &.mdc-list-item--with-trailing-icon {\n      .mdc-list-item__end {\n        @include feature-targeting.targets($feat-color) {\n          @include theme.property(color, $color);\n        }\n      }\n    }\n  }\n}\n\n@mixin _high-contrast-mode($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include dom-mixins.forced-colors-mode {\n    .mdc-list-divider::after {\n      @include feature-targeting.targets($feat-structure) {\n        content: '';\n        display: block;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n      }\n\n      @include feature-targeting.targets($feat-color) {\n        // Color ensures border is shown, but will be overridden by the browser.\n        @include theme.property(border-bottom-color, white);\n      }\n    }\n  }\n}\n","@use '@material/theme/theme-color';\n@use '@material/density/variables' as density-variables;\n\n$ripple-target: '.mdc-list-item__ripple';\n$divider-color-on-light-bg: rgba(0, 0, 0, 0.12) !default;\n$divider-color-on-dark-bg: rgba(255, 255, 255, 0.2) !default;\n$content-disabled-opacity: theme-color.text-emphasis(disabled) !default;\n$content-disabled-color: on-surface !default;\n$content-selected-color: primary !default;\n$side-padding: 16px !default;\n\n$one-line-item-density-scale: density-variables.$default-scale !default;\n$two-line-item-density-scale: density-variables.$default-scale !default;\n$three-line-item-density-scale: density-variables.$default-scale !default;\n$one-line-item-density-config: (\n  height: (\n    default: 48px,\n    maximum: 48px,\n    minimum: 24px,\n  ),\n) !default;\n$one-line-item-tall-density-config: (\n  height: (\n    default: 56px,\n    maximum: 56px,\n    minimum: 40px,\n  ),\n) !default;\n$one-line-item-taller-density-config: (\n  height: (\n    default: 72px,\n    maximum: 72px,\n    minimum: 56px,\n  ),\n) !default;\n$two-line-item-density-config: (\n  height: (\n    default: 64px,\n    maximum: 64px,\n    minimum: 48px,\n  ),\n) !default;\n$two-line-item-tall-density-config: (\n  height: (\n    default: 72px,\n    maximum: 72px,\n    minimum: 56px,\n  ),\n) !default;\n$three-line-item-density-config: (\n  height: (\n    default: 88px,\n    maximum: 88px,\n    minimum: 56px,\n  ),\n) !default;\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/theme/custom-properties';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use './ripple-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include static-styles($query: $query);\n\n  .mdc-ripple-surface {\n    @include ripple-theme.states($query: $query);\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-ripple-surface {\n    @include surface($query: $query);\n    @include radius-bounded($query: $query);\n    @include surface-styles($query: $query);\n  }\n\n  .mdc-ripple-surface[data-mdc-ripple-is-unbounded],\n  .mdc-ripple-upgraded--unbounded {\n    @include radius-unbounded($query: $query);\n    @include unbounded-styles($query: $query);\n  }\n}\n\n/// Sets all states (including hover, focus, press, activated and selected) with\n/// given color as base color.\n///\n/// This mixin is for internal use only. Use `ripple-theme.states($color)` mixin\n/// to set interactive states (hover, focus & press) color.\n///\n/// @param {Color|String} $color - Target base color. Can be valid CSS color or\n///     a color string literal (i.e., `primary`, `secondary`, etc).\n@mixin states-for-color($color, $query: feature-targeting.all()) {\n  @include ripple-theme.states($color, $query: $query);\n  @include ripple-theme.states-activated($color, $query: $query);\n  @include ripple-theme.states-selected($color, $query: $query);\n}\n\n@mixin surface-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: relative;\n    outline: none;\n    overflow: hidden;\n  }\n}\n\n@mixin unbounded-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    overflow: visible;\n  }\n}\n\n@mixin common($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // Ensure that styles needed by any component using MDC Ripple are emitted, but only once.\n  // (Every component using MDC Ripple imports these mixins, but doesn't necessarily import\n  // mdc-ripple.scss.)\n  @include feature-targeting.targets($feat-animation) {\n    @include base-mixins.emit-once('mdc-ripple/common/animation') {\n      @include keyframes_;\n    }\n  }\n}\n\n@mixin surface(\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $include-will-change: true // TODO(b/151931961): Remove once resolved\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    // TODO(b/151931961): Remove the following block once resolved\n    @if $include-will-change {\n      will-change: transform, opacity;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: '';\n    }\n  }\n\n  #{$ripple-target}::before {\n    @include feature-targeting.targets($feat-animation) {\n      // Also transition background-color to avoid unnatural color flashes when toggling activated/selected state\n      transition: opacity ripple-theme.$states-wash-duration linear,\n        background-color ripple-theme.$states-wash-duration linear;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that the ripple wash for hover/focus states is displayed on top of positioned child elements\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 1)\n      );\n    }\n  }\n\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 0)\n      );\n    }\n  }\n\n  // Common styles for upgraded surfaces (some of these depend on custom properties set via JS or other mixins)\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before {\n      @include feature-targeting.targets($feat-structure) {\n        transform: scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n        transform: scale(0);\n        transform-origin: center center;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--unbounded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: var(--mdc-ripple-top, 0);\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, 0);\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-activation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-radius-in ripple-theme.$translate-duration\n            forwards,\n          mdc-ripple-fg-opacity-in ripple-theme.$fade-in-duration forwards;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-deactivation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-opacity-out ripple-theme.$fade-out-duration;\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        // Retain transform from mdc-ripple-fg-radius-in activation\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n          scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n  }\n}\n\n@mixin radius-bounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{$radius});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{$radius});\n      width: $radius * 2;\n      height: $radius * 2;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n@mixin radius-unbounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{math.div($radius, 2)});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{math.div($radius, 2)});\n      width: $radius;\n      height: $radius;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        top: var(--mdc-ripple-top, calc(50% - #{math.div($radius, 2)}));\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, calc(50% - #{math.div($radius, 2)}));\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n// Common styles for a ripple target element.\n// Used for components which have an inner ripple target element.\n@mixin target-common($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    // Necessary for clicks on other inner elements (e.g. close icon in chip)\n    // to go through.\n    pointer-events: none;\n  }\n}\n\n@mixin keyframes_ {\n  @keyframes mdc-ripple-fg-radius-in {\n    from {\n      animation-timing-function: variables2.$standard-curve-timing-function;\n      // NOTE: For these keyframes, we do not need custom property fallbacks because they are only\n      // used in conjunction with `.mdc-ripple-upgraded`. Since MDCRippleFoundation checks to ensure\n      // that custom properties are supported within the browser before adding this class, we can\n      // safely use them without a fallback.\n      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    }\n\n    to {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n        scale(var(--mdc-ripple-fg-scale, 1));\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-in {\n    from {\n      animation-timing-function: linear;\n      opacity: 0;\n    }\n\n    to {\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-out {\n    from {\n      animation-timing-function: linear;\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/css';\n@use '@material/theme/custom-properties';\n@use '@material/theme/theme';\n@use '@material/theme/keys';\n@use '@material/theme/shadow-dom';\n@use '@material/theme/theme-color';\n\n$custom-property-prefix: 'ripple';\n\n$fade-in-duration: 75ms !default;\n$fade-out-duration: 150ms !default;\n$translate-duration: 225ms !default;\n$states-wash-duration: 15ms !default;\n\n// Notes on states:\n// * focus takes precedence over hover (i.e. if an element is both focused and hovered, only focus value applies)\n// * press state applies to a separate pseudo-element, so it has an additive effect on top of other states\n// * selected/activated are applied additively to hover/focus via calculations at preprocessing time\n\n$dark-ink-opacities: (\n  hover: 0.04,\n  focus: 0.12,\n  press: 0.12,\n  selected: 0.08,\n  activated: 0.12,\n) !default;\n\n$light-ink-opacities: (\n  hover: 0.08,\n  focus: 0.24,\n  press: 0.24,\n  selected: 0.16,\n  activated: 0.24,\n) !default;\n\n// Legacy\n\n$pressed-dark-ink-opacity: 0.16 !default;\n$pressed-light-ink-opacity: 0.32 !default;\n\n// State selector variables used for state selector mixins below.\n$_hover-selector: '&:hover';\n$_focus-selector: '&.mdc-ripple-upgraded--background-focused, &:not(.mdc-ripple-upgraded):focus';\n$_active-selector: '&:not(:disabled):active';\n\n$light-theme: (\n  focus-state-layer-color: theme-color.$on-surface,\n  focus-state-layer-opacity: map.get($dark-ink-opacities, focus),\n  hover-state-layer-color: theme-color.$on-surface,\n  hover-state-layer-opacity: map.get($dark-ink-opacities, hover),\n  pressed-state-layer-color: theme-color.$on-surface,\n  pressed-state-layer-opacity: map.get($dark-ink-opacities, press),\n);\n\n@mixin theme($theme) {\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  @if shadow-dom.$css-selector-fallback-declarations {\n    .mdc-ripple-surface {\n      @include theme-styles($theme);\n    }\n  }\n}\n\n$_ripple-theme: (\n  hover-state-layer-color: null,\n  focus-state-layer-color: null,\n  pressed-state-layer-color: null,\n  hover-state-layer-opacity: null,\n  focus-state-layer-opacity: null,\n  pressed-state-layer-opacity: null,\n);\n\n@mixin theme-styles($theme, $ripple-target: '&') {\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  // TODO(b/191298796): Support states layer color for every interactive states.\n  // Use only hover state layer color, ignoring focus and pressed color.\n  @include internal-theme-styles($theme, $ripple-target);\n}\n\n@mixin internal-theme-styles($theme, $ripple-target: '&') {\n  @include theme.validate-theme-keys($_ripple-theme, $theme);\n\n  @include states-base-color(\n    map.get($theme, hover-state-layer-color),\n    $ripple-target: $ripple-target\n  );\n  @include states-hover-opacity(\n    map.get($theme, hover-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-focus-opacity(\n    map.get($theme, focus-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-press-opacity(\n    map.get($theme, pressed-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin states-base-color(\n  $color,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @if not custom-properties.is-custom-prop($color) {\n      $color: custom-properties.create(\n        ripple-color,\n        theme-color.get-custom-property($color)\n      );\n    }\n\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(background-color, $color);\n      }\n    }\n  }\n}\n\n///\n/// Customizes ripple opacities in `hover`, `focus`, or `press` states\n/// @param {map} $opacity-map - map specifying custom opacity of zero or more states\n/// @param {bool} $has-nested-focusable-element - whether the component contains a focusable element in the root\n/// @param {string} $ripple-target - the optional selector for the ripple element\n///\n@mixin states-opacities(\n  $opacity-map: (),\n  $has-nested-focusable-element: false,\n  $ripple-target: '&',\n  $query: feature-targeting.all()\n) {\n  // Ensure sufficient specificity to override base state opacities\n  @if map.get($opacity-map, hover) {\n    @include states-hover-opacity(\n      map.get($opacity-map, hover),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, focus) {\n    @include states-focus-opacity(\n      map.get($opacity-map, focus),\n      $ripple-target: $ripple-target,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, press) {\n    @include states-press-opacity(\n      map.get($opacity-map, press),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n}\n\n@mixin states-hover-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity and not custom-properties.is-custom-prop($opacity) {\n    $opacity: custom-properties.create(ripple-hover-opacity, $opacity);\n  }\n\n  // Background wash styles, for both CSS-only and upgraded stateful surfaces\n  &:hover,\n  &.mdc-ripple-surface--hover {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(opacity, $opacity);\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity(\n  $opacity,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  // Focus overrides hover by reusing the ::before pseudo-element.\n  // :focus-within generally works on non-MS browsers and matches when a *child* of the element has focus.\n  // It is useful for cases where a component has a focusable element within the root node, e.g. text field,\n  // but undesirable in general in case of nested stateful components.\n  // We use a modifier class for JS-enabled surfaces to support all use cases in all browsers.\n  @if $has-nested-focusable-element {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    &.mdc-ripple-upgraded:focus-within,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus,\n    &:not(.mdc-ripple-upgraded):focus-within {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  } @else {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity-properties_($opacity, $query) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-focus-opacity, $opacity);\n    }\n\n    // Note that this duration is only effective on focus, not blur\n    @include feature-targeting.targets($feat-animation) {\n      transition-duration: 75ms;\n    }\n\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n@mixin states-press-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  // Styles for non-upgraded (CSS-only) stateful surfaces\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-press-opacity, $opacity);\n    }\n\n    &:not(.mdc-ripple-upgraded) {\n      // Apply press additively by using the ::after pseudo-element\n      #{$ripple-target}::after {\n        @include feature-targeting.targets($feat-animation) {\n          transition: opacity $fade-out-duration linear;\n        }\n      }\n\n      &:active {\n        #{$ripple-target}::after {\n          @include feature-targeting.targets($feat-animation) {\n            transition-duration: $fade-in-duration;\n          }\n\n          // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n          @include feature-targeting.targets($feat-color) {\n            @include theme.property(opacity, $opacity);\n          }\n        }\n      }\n    }\n\n    &.mdc-ripple-upgraded {\n      @include feature-targeting.targets($feat-color) {\n        // Upgraded ripple should always emit custom property, regardless of\n        // configuration, since ripple itself feature detects custom property\n        // support at runtime.\n        @include custom-properties.configure($emit-custom-properties: true) {\n          @include theme.property(\n            custom-properties.create(ripple-fg-opacity, $opacity)\n          );\n        }\n      }\n    }\n  }\n}\n\n// Simple mixin for base states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states(\n  $color: theme-color.prop-value(on-surface),\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include states-interactions_(\n    $color: $color,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $query: $query,\n    $ripple-target: $ripple-target,\n    $opacity-map: $opacity-map\n  );\n}\n\n// Simple mixin for activated states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-activated(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $activated-opacity: states-opacity($color, activated);\n\n  &--activated {\n    // Stylelint seems to think that '&' qualifies as a type selector here?\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-activated-opacity,\n            $activated-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $activated-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n// Simple mixin for selected states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-selected(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $selected-opacity: states-opacity($color, selected);\n\n  &--selected {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-selected-opacity,\n            $selected-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $selected-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n@mixin states-interactions_(\n  $color,\n  $has-nested-focusable-element,\n  $opacity-modifier: 0,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include target-selector($ripple-target) {\n    @include states-base-color($color, $query);\n  }\n\n  @if $opacity-map == null {\n    $opacity-map: (\n      hover: states-opacity($color, hover) + $opacity-modifier,\n      focus: states-opacity($color, focus) + $opacity-modifier,\n      press: states-opacity($color, press) + $opacity-modifier,\n    );\n  }\n\n  @include states-opacities(\n    $opacity-map,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $ripple-target: $ripple-target,\n    $query: $query\n  );\n}\n\n// Wraps content in the `ripple-target` selector if it exists.\n@mixin target-selector($ripple-target: '&') {\n  @if $ripple-target == '&' {\n    @content;\n  } @else {\n    #{$ripple-target} {\n      @content;\n    }\n  }\n}\n\n/// Selector for hover, active and focus states.\n@mixin states-selector() {\n  #{$_hover-selector},\n  #{$_focus-selector},\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n@mixin hover() {\n  #{$_hover-selector} {\n    @content;\n  }\n}\n\n// Selector for focus state. Using ':not(.mdc-ripple-upgraded)' to continue\n// applying focus styles on JS-disabled components, and control focus\n// on JS-enabled components with '.mdc-ripple-upgraded--background-focused'.\n@mixin focus() {\n  #{$_focus-selector} {\n    @content;\n  }\n}\n\n// Selector for active state. Using `:active:active` to override focus styles.\n@mixin pressed() {\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n// @deprecated Use `pressed()` mixin - renamed for consistency.\n@mixin active() {\n  @include pressed() {\n    @content;\n  }\n}\n\n/// Keep the ripple (State overlay) behind the content.\n@mixin behind-content(\n  $ripple-target,\n  $content-root-selector: '&',\n  $query: feature-targeting.all()\n) {\n  // Needed for IE11. Without this, IE11 renders the state layer completely\n  // underneath the container, making it invisible.\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  #{$content-root-selector} {\n    @include feature-targeting.targets($feat-structure) {\n      z-index: 0;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, -1)\n      );\n    }\n  }\n}\n\n@function states-opacity($color, $state) {\n  $color-value: theme-color.prop-value($color);\n  $opacity-map: if(\n    theme-color.tone($color-value) == 'light',\n    $light-ink-opacities,\n    $dark-ink-opacities\n  );\n\n  @if not map.has-key($opacity-map, $state) {\n    @error \"Invalid state: '#{$state}'. Choose one of: #{map.keys($opacity-map)}\";\n  }\n\n  @return map.get($opacity-map, $state);\n}\n\n@mixin states-background-selector($ripple-target) {\n  #{$ripple-target}::before {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/component/nav.scss":
/*!********************************!*\
  !*** ./src/component/nav.scss ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_nav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./nav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/component/nav.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!******************************!*\
  !*** ./src/component/nav.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.scss */ "./src/component/nav.scss");
/* harmony import */ var _material_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/drawer */ "./node_modules/@material/drawer/component.js");
/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/list */ "./node_modules/@material/list/component.js");
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/component.js");

console.log("nav here1");

// Instantiation drawer, add action to hamburger button to open drawer

var drawer = _material_drawer__WEBPACK_IMPORTED_MODULE_1__.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
var drawerTriggerBtn = document.getElementById('drawerTrigger');
drawerTriggerBtn.addEventListener('click', function () {
  // Set the draw to whatever state it was not in last
  drawer.open = !drawer.open;
});

// Instantiation list, add ripple effect to list items

var list = new _material_list__WEBPACK_IMPORTED_MODULE_2__.MDCList(document.querySelector('.drawerNav'));

var listItemRipples = list.listElements.map(function (listItemEl) {
  return new _material_ripple__WEBPACK_IMPORTED_MODULE_3__.MDCRipple(listItemEl);
});
})();

/******/ })()
;
//# sourceMappingURL=nav844c5d2294768097f7b6.js.map