/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@material/animation/util.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/animation/util.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCorrectEventName": () => (/* binding */ getCorrectEventName),
/* harmony export */   "getCorrectPropertyName": () => (/* binding */ getCorrectPropertyName)
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
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation',
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform',
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition',
    },
};
var jsEventTypeMap = {
    animationend: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationEnd',
        standard: 'animationend',
    },
    animationiteration: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationIteration',
        standard: 'animationiteration',
    },
    animationstart: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationStart',
        standard: 'animationstart',
    },
    transitionend: {
        cssProperty: 'transition',
        prefixed: 'webkitTransitionEnd',
        standard: 'transitionend',
    },
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
    if (isWindow(windowObj) && eventType in jsEventTypeMap) {
        var el = windowObj.document.createElement('div');
        var _a = jsEventTypeMap[eventType], standard = _a.standard, prefixed = _a.prefixed, cssProperty = _a.cssProperty;
        var isStandard = cssProperty in el.style;
        return isStandard ? standard : prefixed;
    }
    return eventType;
}
//# sourceMappingURL=util.js.map

/***/ }),

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

/***/ "./node_modules/@material/checkbox/component.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCCheckbox": () => (/* binding */ MDCCheckbox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_animation_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/animation/util */ "./node_modules/@material/animation/util.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/checkbox/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/checkbox/foundation.js");
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









var CB_PROTO_PROPS = ['checked', 'indeterminate'];
var MDCCheckbox = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCCheckbox, _super);
    function MDCCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rippleSurface = _this.createRipple();
        return _this;
    }
    MDCCheckbox.attachTo = function (root) {
        return new MDCCheckbox(root);
    };
    Object.defineProperty(MDCCheckbox.prototype, "ripple", {
        get: function () {
            return this.rippleSurface;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "checked", {
        get: function () {
            return this.getNativeControl().checked;
        },
        set: function (checked) {
            this.getNativeControl().checked = checked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
        get: function () {
            return this.getNativeControl().indeterminate;
        },
        set: function (indeterminate) {
            this.getNativeControl().indeterminate = indeterminate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "disabled", {
        get: function () {
            return this.getNativeControl().disabled;
        },
        set: function (disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "value", {
        get: function () {
            return this.getNativeControl().value;
        },
        set: function (value) {
            this.getNativeControl().value = value;
        },
        enumerable: false,
        configurable: true
    });
    MDCCheckbox.prototype.initialize = function () {
        var DATA_INDETERMINATE_ATTR = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.DATA_INDETERMINATE_ATTR;
        this.getNativeControl().indeterminate =
            this.getNativeControl().getAttribute(DATA_INDETERMINATE_ATTR) ===
                'true';
        this.getNativeControl().removeAttribute(DATA_INDETERMINATE_ATTR);
    };
    MDCCheckbox.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange = function () {
            _this.foundation.handleChange();
        };
        this.handleAnimationEnd = function () {
            _this.foundation.handleAnimationEnd();
        };
        this.getNativeControl().addEventListener('change', this.handleChange);
        this.listen((0,_material_animation_util__WEBPACK_IMPORTED_MODULE_2__.getCorrectEventName)(window, 'animationend'), this.handleAnimationEnd);
        this.installPropertyChangeHooks();
    };
    MDCCheckbox.prototype.destroy = function () {
        this.rippleSurface.destroy();
        this.getNativeControl().removeEventListener('change', this.handleChange);
        this.unlisten((0,_material_animation_util__WEBPACK_IMPORTED_MODULE_2__.getCorrectEventName)(window, 'animationend'), this.handleAnimationEnd);
        this.uninstallPropertyChangeHooks();
        _super.prototype.destroy.call(this);
    };
    MDCCheckbox.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            forceLayout: function () { return _this.root.offsetWidth; },
            hasNativeControl: function () { return !!_this.getNativeControl(); },
            isAttachedToDOM: function () { return Boolean(_this.root.parentNode); },
            isChecked: function () { return _this.checked; },
            isIndeterminate: function () { return _this.indeterminate; },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            removeNativeControlAttr: function (attr) {
                _this.getNativeControl().removeAttribute(attr);
            },
            setNativeControlAttr: function (attr, value) {
                _this.getNativeControl().setAttribute(attr, value);
            },
            setNativeControlDisabled: function (disabled) {
                _this.getNativeControl().disabled = disabled;
            },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_3__.MDCCheckboxFoundation(adapter);
    };
    MDCCheckbox.prototype.createRipple = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_4__.MDCRipple.createAdapter(this)), { deregisterInteractionHandler: function (evtType, handler) {
                _this.getNativeControl().removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_5__.applyPassive)());
            }, isSurfaceActive: function () { return (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__.matches)(_this.getNativeControl(), ':active'); }, isUnbounded: function () { return true; }, registerInteractionHandler: function (evtType, handler) {
                _this.getNativeControl().addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_5__.applyPassive)());
            } });
        return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_4__.MDCRipple(this.root, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_7__.MDCRippleFoundation(adapter));
    };
    MDCCheckbox.prototype.installPropertyChangeHooks = function () {
        var e_1, _a;
        var _this = this;
        var nativeCb = this.getNativeControl();
        var cbProto = Object.getPrototypeOf(nativeCb);
        var _loop_1 = function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
            // We have to check for this descriptor, since some browsers (Safari) don't support its return.
            // See: https://bugs.webkit.org/show_bug.cgi?id=49739
            if (!validDescriptor(desc)) {
                return { value: void 0 };
            }
            // Type cast is needed for compatibility with Closure Compiler.
            var nativeGetter = desc.get;
            var nativeCbDesc = {
                configurable: desc.configurable,
                enumerable: desc.enumerable,
                get: nativeGetter,
                set: function (state) {
                    desc.set.call(nativeCb, state);
                    _this.foundation.handleChange();
                },
            };
            Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        };
        try {
            for (var CB_PROTO_PROPS_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(CB_PROTO_PROPS), CB_PROTO_PROPS_1_1 = CB_PROTO_PROPS_1.next(); !CB_PROTO_PROPS_1_1.done; CB_PROTO_PROPS_1_1 = CB_PROTO_PROPS_1.next()) {
                var controlState = CB_PROTO_PROPS_1_1.value;
                var state_1 = _loop_1(controlState);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (CB_PROTO_PROPS_1_1 && !CB_PROTO_PROPS_1_1.done && (_a = CB_PROTO_PROPS_1.return)) _a.call(CB_PROTO_PROPS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MDCCheckbox.prototype.uninstallPropertyChangeHooks = function () {
        var e_2, _a;
        var nativeCb = this.getNativeControl();
        var cbProto = Object.getPrototypeOf(nativeCb);
        try {
            for (var CB_PROTO_PROPS_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(CB_PROTO_PROPS), CB_PROTO_PROPS_2_1 = CB_PROTO_PROPS_2.next(); !CB_PROTO_PROPS_2_1.done; CB_PROTO_PROPS_2_1 = CB_PROTO_PROPS_2.next()) {
                var controlState = CB_PROTO_PROPS_2_1.value;
                var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
                if (!validDescriptor(desc)) {
                    return;
                }
                Object.defineProperty(nativeCb, controlState, desc);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (CB_PROTO_PROPS_2_1 && !CB_PROTO_PROPS_2_1.done && (_a = CB_PROTO_PROPS_2.return)) _a.call(CB_PROTO_PROPS_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MDCCheckbox.prototype.getNativeControl = function () {
        var NATIVE_CONTROL_SELECTOR = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.NATIVE_CONTROL_SELECTOR;
        var el = this.root.querySelector(NATIVE_CONTROL_SELECTOR);
        if (!el) {
            throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
        }
        return el;
    };
    return MDCCheckbox;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_8__.MDCComponent));

function validDescriptor(inputPropDesc) {
    return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/checkbox/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/constants.js ***!
  \******************************************************/
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
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    BACKGROUND: 'mdc-checkbox__background',
    CHECKED: 'mdc-checkbox--checked',
    CHECKMARK: 'mdc-checkbox__checkmark',
    CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
    DISABLED: 'mdc-checkbox--disabled',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    MIXEDMARK: 'mdc-checkbox__mixedmark',
    NATIVE_CONTROL: 'mdc-checkbox__native-control',
    ROOT: 'mdc-checkbox',
    SELECTED: 'mdc-checkbox--selected',
    UPGRADED: 'mdc-checkbox--upgraded',
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
    DATA_INDETERMINATE_ATTR: 'data-indeterminate',
    NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
};
var numbers = {
    ANIM_END_LATCH_MS: 250,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/checkbox/foundation.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/checkbox/foundation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCCheckboxFoundation": () => (/* binding */ MDCCheckboxFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/checkbox/constants.js");
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



var MDCCheckboxFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCCheckboxFoundation, _super);
    function MDCCheckboxFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCCheckboxFoundation.defaultAdapter), adapter)) || this;
        _this.currentCheckState = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INIT;
        _this.currentAnimationClass = '';
        _this.animEndLatchTimer = 0;
        _this.enableAnimationEndHandler = false;
        return _this;
    }
    Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                hasNativeControl: function () { return false; },
                isAttachedToDOM: function () { return false; },
                isChecked: function () { return false; },
                isIndeterminate: function () { return false; },
                removeClass: function () { return undefined; },
                removeNativeControlAttr: function () { return undefined; },
                setNativeControlAttr: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCCheckboxFoundation.prototype.init = function () {
        this.currentCheckState = this.determineCheckState();
        this.updateAriaChecked();
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.UPGRADED);
    };
    MDCCheckboxFoundation.prototype.destroy = function () {
        clearTimeout(this.animEndLatchTimer);
    };
    MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
        this.adapter.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
        }
    };
    /**
     * Handles the animationend event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
        var _this = this;
        if (!this.enableAnimationEndHandler) {
            return;
        }
        clearTimeout(this.animEndLatchTimer);
        this.animEndLatchTimer = setTimeout(function () {
            _this.adapter.removeClass(_this.currentAnimationClass);
            _this.enableAnimationEndHandler = false;
        }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.ANIM_END_LATCH_MS);
    };
    /**
     * Handles the change event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleChange = function () {
        this.transitionCheckState();
    };
    MDCCheckboxFoundation.prototype.transitionCheckState = function () {
        if (!this.adapter.hasNativeControl()) {
            return;
        }
        var oldState = this.currentCheckState;
        var newState = this.determineCheckState();
        if (oldState === newState) {
            return;
        }
        this.updateAriaChecked();
        var TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        var SELECTED = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SELECTED;
        if (newState === TRANSITION_STATE_UNCHECKED) {
            this.adapter.removeClass(SELECTED);
        }
        else {
            this.adapter.addClass(SELECTED);
        }
        // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.
        if (this.currentAnimationClass.length > 0) {
            clearTimeout(this.animEndLatchTimer);
            this.adapter.forceLayout();
            this.adapter.removeClass(this.currentAnimationClass);
        }
        this.currentAnimationClass =
            this.getTransitionAnimationClass(oldState, newState);
        this.currentCheckState = newState;
        // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.
        if (this.adapter.isAttachedToDOM() &&
            this.currentAnimationClass.length > 0) {
            this.adapter.addClass(this.currentAnimationClass);
            this.enableAnimationEndHandler = true;
        }
    };
    MDCCheckboxFoundation.prototype.determineCheckState = function () {
        var TRANSITION_STATE_INDETERMINATE = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        if (this.adapter.isIndeterminate()) {
            return TRANSITION_STATE_INDETERMINATE;
        }
        return this.adapter.isChecked() ? TRANSITION_STATE_CHECKED :
            TRANSITION_STATE_UNCHECKED;
    };
    MDCCheckboxFoundation.prototype.getTransitionAnimationClass = function (oldState, newState) {
        var TRANSITION_STATE_INIT = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        var _a = MDCCheckboxFoundation.cssClasses, ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;
        switch (oldState) {
            case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                    return '';
                }
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
            case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
            default: // TRANSITION_STATE_INDETERMINATE
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
    };
    MDCCheckboxFoundation.prototype.updateAriaChecked = function () {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.adapter.isIndeterminate()) {
            this.adapter.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_ATTR, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_INDETERMINATE_VALUE);
        }
        else {
            // The on/off state does not need to keep track of aria-checked, since
            // the screenreader uses the checked property on the checkbox element.
            this.adapter.removeNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_ATTR);
        }
    };
    return MDCCheckboxFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCCheckboxFoundation);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/checkbox/checkbox.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/checkbox/checkbox.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --mdc-theme-primary: #006874;\n    --mdc-theme-on-primary: #ffffff;\n    --mdc-theme-secondary: #5c6300;\n    --mdc-theme-on-secondary: #ffffff;\n    --mdc-theme-surface: #fafdfd;\n    --mdc-theme-on-surface: #191c1d;\n    --mdc-theme-background: #fafdfd;\n    --mdc-theme-on-background: #191c1d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --mdc-theme-primary: #4fd8eb;\n    --mdc-theme-on-primary: #00363d;\n    --mdc-theme-secondary: #c2d016;\n    --mdc-theme-on-secondary: #2f3300;\n    --mdc-theme-surface-base: 195, 7.4%;\n    --mdc-theme-surface-l: 15.6%;\n    --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\n    --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\n    --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\n    --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\n    --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\n    --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\n    --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\n    --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n    --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\n    --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\n    --mdc-theme-on-surface: #e1e3e3;\n    --mdc-theme-background: #191c1d;\n    --mdc-theme-on-background: #e1e3e3;\n    --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdc-elevation--z1 {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-elevation--z2 {\n    background: var(--mdc-theme-surface-z2);\n  }\n  .mdc-elevation--z3 {\n    background: var(--mdc-theme-surface-z3);\n  }\n  .mdc-elevation--z4 {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-elevation--z5 {\n    background: var(--mdc-theme-surface-z5);\n  }\n  .mdc-elevation--z6 {\n    background: var(--mdc-theme-surface-z6);\n  }\n  .mdc-elevation--z7 {\n    background: var(--mdc-theme-surface-z7);\n  }\n  .mdc-drawer.mdc-drawer--modal {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__title {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__subtitle {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-surface-z9);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar {\n    background-color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar__title {\n    color: var(--mdc-theme-on-primary);\n  }\n  .mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-tab.mdc-tab--active .mdc-tab__icon, .mdc-tab.mdc-tab--active .mdc-tab__text-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__header-cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: var(--mdc-theme-surface-z3);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__title {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog__actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined .mdc-notched-outline {\n    z-index: -1;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-primary);\n  }\n}\n.mdc-typography {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);\n}\n\n.mdc-typography--headline1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 6rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline1-font-size, 6rem);\n  line-height: 6rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline1-line-height, 6rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline1-font-weight, 300);\n  letter-spacing: -0.015625em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline1-text-transform, inherit);\n}\n\n.mdc-typography--headline2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline2-font-size, 3.75rem);\n  line-height: 3.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline2-line-height, 3.75rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline2-font-weight, 300);\n  letter-spacing: -0.0083333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline2-text-transform, inherit);\n}\n\n.mdc-typography--headline3 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline3-font-size, 3rem);\n  line-height: 3.125rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline3-line-height, 3.125rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline3-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline3-text-transform, inherit);\n}\n\n.mdc-typography--headline4 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 2.125rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline4-font-size, 2.125rem);\n  line-height: 2.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline4-line-height, 2.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline4-font-weight, 400);\n  letter-spacing: 0.0073529412em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline4-text-transform, inherit);\n}\n\n.mdc-typography--headline5 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.5rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline5-font-size, 1.5rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline5-line-height, 2rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline5-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline5-text-transform, inherit);\n}\n\n.mdc-typography--headline6 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n}\n\n.mdc-typography--subtitle1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n}\n\n.mdc-typography--subtitle2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n}\n\n.mdc-typography--body1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body1-font-size, 1rem);\n  line-height: 1.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body1-line-height, 1.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body1-font-weight, 400);\n  letter-spacing: 0.03125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body1-text-transform, inherit);\n}\n\n.mdc-typography--body2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-typography--caption {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-typography--button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n}\n\n.mdc-typography--overline {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n}\n\nhtml {\n  background-color: var(--mdc-theme-background);\n}\n\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  vertical-align: middle;\n}\n\n.mdc-icon-button.actionsButton {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n\n.main-content {\n  padding: 1rem;\n}\n\n.content-section {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.demo-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.demo-group.wrap {\n  flex-wrap: wrap;\n}\n\n.mdc-checkbox {\n  padding: calc((40px - 18px) / 2);\n  /* @alternate */\n  padding: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);\n  margin: calc((40px - 40px) / 2);\n  /* @alternate */\n  margin: calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2);\n}\n.mdc-checkbox .mdc-checkbox__ripple::before, .mdc-checkbox .mdc-checkbox__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-checkbox:hover .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-checkbox.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,\n.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-checkbox .mdc-checkbox__background {\n  top: calc((40px - 18px) / 2);\n  /* @alternate */\n  top: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);\n  left: calc((40px - 18px) / 2);\n  /* @alternate */\n  left: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  top: calc((40px - 40px) / 2);\n  /* @alternate */\n  top: calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);\n  right: calc((40px - 40px) / 2);\n  /* @alternate */\n  right: calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);\n  left: calc((40px - 40px) / 2);\n  /* @alternate */\n  left: calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);\n  width: 40px;\n  /* @alternate */\n  width: var(--mdc-checkbox-touch-target-size, 40px);\n  height: 40px;\n  /* @alternate */\n  height: var(--mdc-checkbox-touch-target-size, 40px);\n}\n.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.54);\n  /* @alternate */\n  border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n  background-color: transparent;\n}\n.mdc-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled ~ .mdc-checkbox__background {\n  border-color: #018786;\n  /* @alternate */\n  border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n}\n@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786 {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    /* @alternate */\n    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n    background-color: transparent;\n  }\n  50% {\n    border-color: #018786;\n    /* @alternate */\n    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n    background-color: #018786;\n    /* @alternate */\n    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n  }\n}\n@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786 {\n  0%, 80% {\n    border-color: #018786;\n    /* @alternate */\n    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n    background-color: #018786;\n    /* @alternate */\n    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n  }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    /* @alternate */\n    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n    background-color: transparent;\n  }\n}\n.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786;\n}\n.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786;\n}\n.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  border-color: var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));\n  background-color: transparent;\n}\n.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled] ~ .mdc-checkbox__background {\n  border-color: transparent;\n  background-color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  background-color: var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-checkbox .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-checkbox-ink-color, #fff);\n}\n.mdc-checkbox .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  border-color: #fff;\n  /* @alternate */\n  border-color: var(--mdc-checkbox-ink-color, #fff);\n}\n.mdc-checkbox .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-checkbox-ink-color, #fff);\n}\n.mdc-checkbox .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  border-color: #fff;\n  /* @alternate */\n  border-color: var(--mdc-checkbox-ink-color, #fff);\n}\n\n.mdc-touch-target-wrapper {\n  display: inline;\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: mdc-animation-deceleration-curve-timing-function;\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring {\n  pointer-events: none;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  box-sizing: content-box;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n}\n@media screen and (forced-colors: active) {\n  .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring {\n    border-color: CanvasText;\n  }\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after {\n  content: \"\";\n  border: 2px solid transparent;\n  border-radius: 8px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(100% + 4px);\n  width: calc(100% + 4px);\n}\n@media screen and (forced-colors: active) {\n  .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n@media all and (-ms-high-contrast: none) {\n  .mdc-checkbox .mdc-checkbox__focus-ring {\n    display: none;\n  }\n}\n\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark {\n  opacity: 1;\n}\n\n.mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background, .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background {\n  transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n}\n.mdc-checkbox__native-control:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox--touch {\n  margin: calc((48px - 40px) / 2);\n  /* @alternate */\n  margin: calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);\n}\n.mdc-checkbox--touch .mdc-checkbox__native-control {\n  top: calc((40px - 48px) / 2);\n  /* @alternate */\n  top: calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);\n  right: calc((40px - 48px) / 2);\n  /* @alternate */\n  right: calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);\n  left: calc((40px - 48px) / 2);\n  /* @alternate */\n  left: calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);\n  width: 48px;\n  /* @alternate */\n  width: var(--mdc-checkbox-state-layer-size, 48px);\n  height: 48px;\n  /* @alternate */\n  height: var(--mdc-checkbox-state-layer-size, 48px);\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark,\n.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark,\n.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,\n.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,\n.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,\n.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark {\n  transition: none;\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-checkbox {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-checkbox .mdc-checkbox__ripple::before,\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-checkbox .mdc-checkbox__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-checkbox .mdc-checkbox__ripple::before,\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  top: calc(50% - 50%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-checkbox {\n  z-index: 0;\n}\n.mdc-checkbox .mdc-checkbox__ripple::before,\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  z-index: -1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, -1);\n}\n\n.mdc-checkbox__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-form-field {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.mdc-form-field > label {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  order: 0;\n}\n[dir=rtl] .mdc-form-field > label, .mdc-form-field > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-form-field > label, .mdc-form-field > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 4px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-form-field--nowrap > label {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.mdc-form-field--align-end > label {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 4px;\n  order: -1;\n}\n[dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-form-field--space-between {\n  justify-content: space-between;\n}\n.mdc-form-field--space-between > label {\n  margin: 0;\n}\n[dir=rtl] .mdc-form-field--space-between > label, .mdc-form-field--space-between > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  margin: 0;\n  /*rtl:end:ignore*/\n}", "",{"version":3,"sources":["webpack://./src/styles/_reset.scss","webpack://./src/documentation/checkbox/checkbox.scss","webpack://./src/styles/theme/theme1/_variables.scss","webpack://./node_modules/@material/typography/_typography.scss","webpack://./node_modules/@material/theme/_css.scss","webpack://./node_modules/@material/theme/_gss.scss","webpack://./src/styles/_common.scss","webpack://./node_modules/@material/checkbox/_checkbox.scss","webpack://./node_modules/@material/ripple/_ripple-theme.scss","webpack://./node_modules/@material/checkbox/_checkbox-theme.scss","webpack://./node_modules/@material/touch-target/_touch-target.scss","webpack://./node_modules/@material/animation/_animation.scss","webpack://./node_modules/@material/focus-ring/_focus-ring.scss","webpack://./node_modules/@material/dom/_dom.scss","webpack://./node_modules/@material/ripple/_ripple.scss","webpack://./node_modules/@material/form-field/_mixins.scss","webpack://./node_modules/@material/rtl/_rtl.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;ACCJ;;ADEA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,kCAAA;EACA,mCAAA;EACA,sBAAA;ACCJ;;ADEA;EACI,cAAA;ACCJ;;ADEA;EACI,cAAA;ACCJ;;ADEA;EACI,gBAAA;ACCJ;;ADEA;EACI,YAAA;ACCJ;;ADEA;EACI,WAAA;EACA,aAAA;ACCJ;;ADEA;EACI,yBAAA;EACA,iBAAA;ACCJ;;ADEA;EACI,wBAAA;EACA,gBAAA;ACCJ;;AClCI;EADJ;IAEQ,4BAAA;IACA,+BAAA;IACA,8BAAA;IACA,iCAAA;IACA,4BAAA;IACA,+BAAA;IACA,+BAAA;IACA,kCAAA;EDsCN;AACF;ACpCI;EAZJ;IAaQ,4BAAA;IACA,+BAAA;IACA,8BAAA;IACA,iCAAA;IAEA,mCAAA;IACA,4BAAA;IACA,kFAAA;IACI,gGAAA;IACA,gGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IACA,iGAAA;IAEJ,+BAAA;IACA,+BAAA;IACA,kCAAA;IAIA,6GAAA;EDkCN;AACF;;AC7BA;EACI;IACI,uCAAA;EDgCN;EC9BE;IACI,uCAAA;EDgCN;EC9BE;IACI,uCAAA;EDgCN;EC9BE;IACI,uCAAA;EDgCN;EC9BE;IACI,uCAAA;EDgCN;EC9BE;IACI,uCAAA;EDgCN;EC9BE;IACI,uCAAA;EDgCN;EC1BM;IACI,uCAAA;ED4BV;EC1BU;IACI,uCAAA;ED4Bd;EC1Bc;IACI,kCAAA;ED4BlB;EC1Bc;IACI,kCAAA;ED4BlB;ECvBc;IACI,kCAAA;EDyBlB;ECvBkB;IACI,kCAAA;EDyBtB;ECtBc;IACI,+BAAA;EDwBlB;ECtBkB;IACI,+BAAA;EDwBtB;EChBE;IACI,0CAAA;EDkBN;ECfE;IACI,kCAAA;EDiBN;ECZM;IACI,kCAAA;EDcV;ECVU;IACI,+BAAA;EDYd;AACF;ACLQ;EADJ;IAEQ,kCAAA;EDQV;AACF;ACJQ;EADJ;IAEQ,kCAAA;EDOV;AACF;ACnGA;EAiGI;IACI,6CAAA;EDKN;AACF;ACxGA;EAqGI;IACI,kCAAA;EDMN;AACF;AC7GA;EAyGI;IACI,SAAA;EDON;AACF;AClHA;EA8GI;IACI,oCAAA;EDON;AACF;ACvHA;EAqHI;;;IAGI,yCAAA;IACA,uCAAA;EDKN;AACF;AC/HA;EA4HI;;;IAGI,yCAAA;IACA,uCAAA;EDMN;AACF;ACvIA;EAmII;IACI,WAAA;EDON;AACF;AC5IA;EAuII;IACI,kCAAA;EDQN;AACF;ACjJA;EA2II;IACI,+BAAA;EDSN;AACF;ACtJA;EA+II;IACI,kCAAA;EDUN;AACF;AC3JA;EAsJI;;;IAGI,yCAAA;IACA,uCAAA;EDQN;AACF;ACnKA;EA6JI;;;IAGI,yCAAA;IACA,uCAAA;EDSN;AACF;AC3KA;EAoKI;IACI,kCAAA;EDUN;AACF;AChLA;EAwKI;IACI,+BAAA;EDWN;AACF;ACrLA;EA4KI;IACI,kCAAA;EDYN;AACF;AC1LA;EAgLI;IACI,iCAAA;EDaN;AACF;AC/LA;EAoLI;IACI,8BAAA;EDcN;AACF;AEeE;EAgEE,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,kEAAA;AHkLJ;;AEaI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,2BAAA;ECZF,eAAA;EDwBA,2EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AH4MJ;;AEbI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,+BAAA;ECZF,eAAA;EDwBA,+EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AHsOJ;;AEvCI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,kEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,sBAAA;ECZF,eAAA;EDwBA,sEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AHgQJ;;AEjEI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,gEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,8EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AH0RJ;;AE3FI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,sBAAA;ECZF,eAAA;EDwBA,sEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AHoTJ;;AErHI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,wEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AH8UJ;;AE/II;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,0BAAA;ECZF,eAAA;EDwBA,0EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AHwWJ;;AEzKI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,+GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,kEAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,8EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,yEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,uEAAA;AHkYJ;;AEnMI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,2GAAA;EAZE,eAAA;ECZF,eAAA;EDwBA,sDAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,yDAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,mEAAA;AH4ZJ;;AE7NI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,2GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,yDAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,0EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,mEAAA;AHsbJ;;AEvPI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,6GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,+DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,4EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,uEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,qEAAA;AHgdJ;;AEjRI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,4GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,2DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,8DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,2EAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,mEAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,sEAAA;AH0eJ;;AE3SI;EA2DA,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,8GAAA;EAZE,kBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,iBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,4DAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,6EAAA;EAZE,qBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,wEAAA;AHogBJ;;AK1kBA;EACI,6CAAA;AL6kBJ;;AKvkBY;EACI,sBAAA;AL0kBhB;;AKpkBA;EACI,WAAA;EACA,YAAA;EACA,YAAA;ALukBJ;;AKpkBA;EACI,aAAA;ALukBJ;;AKpkBA;EACI,aAAA;EACA,mBAAA;ALukBJ;;AKpkBA;EACI,aAAA;EACA,WAAA;ALukBJ;AKrkBI;EACI,eAAA;ALukBR;;AMvZE;EHxJI,gCAAA;ECZF,eAAA;EDwBA,iEAAA;EAZE,+BAAA;ECZF,eAAA;EDwBA,sEAAA;AH4iBJ;AOheI;EJxFE,sBAAA;ECZF,eAAA;EDwBA,+CAAA;AHijBJ;AO5FE;EJjeI,aAAA;ECZF,eAAA;EDwBA,8CAAA;AHsjBJ;AOjGE;EA9QI,yBAAA;EJnNA,aAAA;ECZF,eAAA;EDwBA,8CAAA;AH4jBJ;AO3VM;EAEI,gCAAA;AP4VV;AOvVQ;EAEI,yBAhRO;EJ0Bb,aAAA;ECZF,eAAA;EDwBA,8CAAA;AHqkBJ;AOhVI;EJrPA,8DAAA;AHwkBJ;AO5fI;EJxFE,yBAAA;ECZF,eAAA;EDwBA,8EAAA;AH6kBJ;AOxHE;EJjeI,aAAA;ECZF,eAAA;EDwBA,8CAAA;AHklBJ;AO7HE;EA9QI,yBAAA;EJnNA,aAAA;ECZF,eAAA;EDwBA,8CAAA;AHwlBJ;AOvXM;EAEI,gCAAA;APwXV;AOnXQ;EAEI,yBAhRO;EJ0Bb,aAAA;ECZF,eAAA;EDwBA,8CAAA;AHimBJ;AO5WI;EJrPA,8DAAA;AHomBJ;AOxhBI;;EJxFE,yBAAA;ECZF,eAAA;EDwBA,8EAAA;AH0mBJ;AQ1VE;EL5RI,4BAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,6BAAA;ECZF,eAAA;EDwBA,8DAAA;AHknBJ;AQ1TM;ELpUA,4BAAA;ECZF,eAAA;EDwBA,mEAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,6BAAA;ECZF,eAAA;EDwBA,oEAAA;EAZE,WAAA;ECZF,eAAA;EDwBA,kDAAA;EAZE,YAAA;ECZF,eAAA;EDwBA,mDAAA;AHmoBJ;AQkDE;ELjsBI,iCAAA;ECZF,eAAA;EDwBA,sEAAA;EAAA,6BAAA;AHyoBJ;AQ4CE;;;ELjsBI,qBAAA;ECZF,eAAA;EDwBA,oFAAA;EAZE,yBAAA;ECZF,eAAA;EDwBA,wFAAA;AHmpBJ;AQyEE;EACE;ILzuBE,iCAAA;ICZF,eAAA;IDwBA,sEAAA;IAAA,6BAAA;EH0pBF;EQwEE;IL9uBE,qBAAA;ICZF,eAAA;IDwBA,oFAAA;IAZE,yBAAA;ICZF,eAAA;IDwBA,wFAAA;EHkqBF;AACF;AQqEE;EACE;ILrvBE,qBAAA;ICZF,eAAA;IDwBA,oFAAA;IAZE,yBAAA;ICZF,eAAA;IDwBA,wFAAA;EH4qBF;EQmEE;IL3vBE,iCAAA;ICZF,eAAA;IDwBA,sEAAA;IAAA,6BAAA;EHkrBF;AACF;AQjQQ;EAEI,gFAAA;ARkQZ;AQ3PQ;EAEI,iFAAA;AR4PZ;AQJE;ELjsBI,iCAAA;ECZF,eAAA;EDwBA,qEAAA;EAAA,6BAAA;AH+rBJ;AQVE;;;ELrrBE,yBAAA;EAZE,qCAAA;ECZF,eAAA;EDwBA,yEAAA;AHusBJ;AQAI;ELntBE,WAAA;ECZF,eAAA;EDwBA,0CAAA;AH4sBJ;AQCI;ELztBE,kBAAA;ECZF,eAAA;EDwBA,iDAAA;AHitBJ;AQVI;ELntBE,WAAA;ECZF,eAAA;EDwBA,0CAAA;AHstBJ;AQTI;ELztBE,kBAAA;ECZF,eAAA;EDwBA,iDAAA;AH2tBJ;;ASpwBE;EAOM,eAAA;ATiwBR;;AMtQE;EACE;IAEE,6BAPc;EN+QlB;EMrQE;IACE,qDIxhB+B;EV+xBnC;EMpQE;IACE,oBAAA;ENsQJ;AACF;AMnQE;EACE;IAEE,oBAAA;ENoQJ;EMjQE;IACE,mDAAA;ENmQJ;EMhQE;IACE,oBAAA;ENkQJ;AACF;AM/PE;EACE;IACE,qDI/iB+B;IJgjB/B,UAAA;IACA,oBAAA;ENiQJ;EM9PE;IACE,UAAA;IACA,8BAAA;ENgQJ;AACF;AM7PE;EACE;IACE,qDI9jB+B;IJ+jB/B,uBAAA;IACA,UAAA;EN+PJ;EM5PE;IACE,wBAAA;IACA,UAAA;EN8PJ;AACF;AM3PE;EACE;IACE,sDA7DmC;IA8DnC,wBAAA;IACA,UAAA;EN6PJ;EM1PE;IACE,yBAAA;IACA,UAAA;EN4PJ;AACF;AMzPE;EACE;IACE,2EAAA;IACA,yBAAA;IACA,UAAA;EN2PJ;EMxPE;IACE,uBAAA;IACA,UAAA;EN0PJ;AACF;AMvPE;EACE;IACE,sDAvFmC;IAwFnC,uBAAA;IACA,UAAA;ENyPJ;EMtPE;IACE,yBAAA;IACA,UAAA;ENwPJ;AACF;AMrPE;EACE;IACE,iCAAA;IACA,oBAAA;IACA,UAAA;ENuPJ;EMpPE;IAEE,oBAAA;IACA,UAAA;ENqPJ;AACF;AM3zBE;EAqLA,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,WEpNU;EFqNV,YErNU;EFsNV,cAAA;EACA,mBAAA;EACA,eAAA;EACA,sBAAA;ANyoBF;AMj0BM;EKXF,oBAAA;EACA,6BAAA;EACA,kBAAA;EACA,uBAAA;EACA,kBAAA;EACA,QAAA;EPhBA,YAAA,EAAA,aAAA;EOkBA,SAAA;EPlBA,YAAA,EAAA,aAAA;EOoBA,gCAAA;EACA,YA3BwB;EA4BxB,WAtB0B;AXq2B9B;AYl0BI;ENbE;IKGA,wBAAA;EXg1BJ;AACF;AW90BI;EACE,WAAA;EACA,6BAAA;EACA,kBAhEgB;EAiEhB,cAAA;EACA,kBAAA;EACA,QAAA;EPlCF,YAAA,EAAA,aAAA;EOoCE,SAAA;EPpCF,YAAA,EAAA,aAAA;EOsCE,gCAAA;EACA,wBA/BgB;EAgChB,uBAhCgB;AXg3BtB;AYr1BI;EDPA;IAeI,wBAAA;EXi1BN;AACF;AM51BI;EACE;IACE,aAAA;EN81BN;AACF;;AY31BI;ENEA;IAEI,aAAA;EN41BN;AACF;AMv1BE;EAiKA,eAAA;EACA,oBAAA;ANyrBF;;AMr1BE;EA4PE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,WEnUQ;EFoUR,YEpUQ;EFsUR,8BAAA;EACA,kBAAA;EACA,6BAAA;EACA,oBAAA;EACA,2CAAA;EAIA,sHAAA;ANylBJ;;AMj2BE;EAwSE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,UAAA;EAIA,0DAAA;AN0jBJ;AMnjBE;EAEI,UAAA;ANojBN;;AM32BE;EAwWE,oEAAA;EAQA,oBAAA;EACA,oBAAA;EACA,6BAuDgB;EAtDhB,4BAsDgB;AN0cpB;;AM/2BE;EA8XE,WAAA;EACA,SAAA;EACA,iCAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EAIA,0GAAA;ANkfJ;;AMvtBI;EACE,yBAAA;EACA,iCAAA;AN0tBN;AMrtBI;EAIE,wEAAA;EAEA,gBAAA;ANmtBN;AM9sBI;EACE,wEAAA;EAEA,gBAAA;AN+sBN;AM1sBI;EACE,uEAAA;EAEA,gBAAA;AN2sBN;AMtsBI;EACE,sEAAA;EAEA,gBAAA;ANusBN;AMpsBI;EACE,sEAAA;EAEA,gBAAA;ANqsBN;AMhsBI;EACE,uEAAA;EAEA,gBAAA;ANisBN;AM9rBI;EACE,uEAAA;EAEA,gBAAA;AN+rBN;AM1rBI;EACE,yEAAA;EAEA,gBAAA;AN2rBN;;AMp5BE;;;EA2PA,kHAAA;AN+pBF;AMl5BI;;;EAkWF,oBAAA;ANqjBF;;AMh5BE;EAyPA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;AN2pBF;AMn5BI;EAiHF,eAAA;EACA,oBAAA;ANqyBF;;AMh5BE;EHjGI,+BAAA;ECZF,eAAA;EDwBA,2GAAA;AH2+BJ;AQnrBM;ELpUA,4BAAA;ECZF,eAAA;EDwBA,wGAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,0GAAA;EAZE,6BAAA;ECZF,eAAA;EDwBA,yGAAA;EAZE,WAAA;ECZF,eAAA;EDwBA,iDAAA;EAZE,YAAA;ECZF,eAAA;EDwBA,kDAAA;AH4/BJ;;AMx5BI;EAyQA,wGAAA;EASA,UAAA;AN2oBJ;AMz5BI;EAoVF,mCAAA;ANwkBF;;AMn5BI;;EA8QA,wBAAA;EACA,UAAA;EAIA,0GAAA;ANuoBJ;AMt5BI;;EA2UF,iCAAA;EACA,UAAA;AN+kBF;;AMl5BI;;;;EAsEF,gBAAA;ANm1BF;;AarzBE;EACE;IACE,uDH3R2B;IGgS3B,sEAAA;EbozBJ;EajzBE;IACE,gGAAA;EbmzBJ;AACF;Aa/yBE;EACE;IACE,iCAAA;IACA,UAAA;EbizBJ;Ea9yBE;IACE,wCAAA;EbgzBJ;AACF;Aa7yBE;EACE;IACE,iCAAA;IACA,wCAAA;Eb+yBJ;Ea5yBE;IACE,UAAA;Eb8yBJ;AACF;AMt5BE;EOzHE,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,wBAAA;EACA,gCAAA;EACA,kCAAA;EAEA,6CAAA;EAGE,+BAAA;Ab+gCN;Aa3gCE;;EAGI,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;Ab4gCN;AaxgCE;EAGI,6DAAA;EV5EA,UAAA;ECZF,eAAA;EDwBA,qCAAA;AH2kCJ;Aa9/BE;EVzFI,UAAA;ECZF,eAAA;EDwBA,qCAAA;AHglCJ;Aav/BI;EAEI,+CAAA;Abw/BR;Aap/BI;EAEI,MAAA;ETpHJ,YAAA,EAAA,aAAA;ESsHI,OAAA;EACA,mBAAA;EACA,+BAAA;Abq/BR;Aa/+BI;EAEI,6BAAA;EThIJ,YAAA,EAAA,aAAA;ESkII,+BAAA;Abg/BR;Aa1+BI;EAEI,yFAAA;Ab2+BR;Aan+BI;EAEI,0CAAA;EAKA,gGAAA;Abg+BR;Aat7BE;;EAGI,oBAAA;ETtMF,YAAA,EAAA,aAAA;ESwME,qBAAA;EACA,WAZK;EAaL,YAbK;Abo8BX;Aal7BI;;EAGI,2CAAA;ETlNJ,YAAA,EAAA,aAAA;ESoNI,6CAAA;EACA,sCAAA;EACA,uCAAA;Abm7BR;Aa/6BI;EAEI,sCAAA;EACA,uCAAA;Abg7BR;AOtsBE;EAEI,UAAA;APusBN;AOnsBE;;EJtcI,WAAA;ECZF,eAAA;EDwBA,sCAAA;AHmoCJ;;AMv9BE;EO0CE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EAGA,oBAAA;Ab+6BJ;;AcvrCE;EZqSE,kCAAA;EACA,mCAAA;ECvQE,+BAAA;ECZF,eAAA;EDwBA,2GAAA;EAZE,mBAAA;ECZF,eAAA;EDwBA,0DAAA;EAZE,oBAAA;ECZF,eAAA;EDwBA,6DAAA;EAZE,gBAAA;ECZF,eAAA;EDwBA,yDAAA;EAZE,8BAAA;ECZF,eAAA;EDwBA,0EAAA;EAZE,wBAAA;ECZF,eAAA;EDwBA,qEAAA;EAZE,uBAAA;ECZF,eAAA;EDwBA,mEAAA;EAZE,0BAAA;ECZF,eAAA;EDwBA,uEAAA;EWnCE,oBAAA;EACA,mBAAA;EACA,sBAAA;Ad6sCN;Ac1sCI;EVWA,YAAA,EAAA,aAAA;EDmBA,cAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,kBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,iBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,gBAAA;EWzBI,QAAA;AdgtCR;AerrCM;EACE,mBAAA;EXtBJ,YAAA,EAAA,aAAA;EDmBA,iBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,eAAA;EYKI,iBAAA;Af0rCR;;Ae7rCM;EACE,mBAAA;EXtBJ,YAAA,EAAA,aAAA;EDmBA,eAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,kBAAA;EYKI,iBAAA;AfmsCR;;Ac3tCI;EAEI,uBAAA;EACA,gBAAA;EACA,mBAAA;Ad6tCR;;AcvtCI;EVVA,YAAA,EAAA,aAAA;EDmBA,iBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,eAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,eAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,kBAAA;EWJI,SAAA;Ad8tCR;AextCM;EACE,mBAAA;EXtBJ,YAAA,EAAA,aAAA;EDmBA,cAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,kBAAA;EYKI,iBAAA;Af6tCR;;AehuCM;EACE,mBAAA;EXtBJ,YAAA,EAAA,aAAA;EDmBA,iBAAA;ECnBA,YAAA,EAAA,aAAA;EDmBA,gBAAA;EYKI,iBAAA;AfsuCR;;Ac1uCE;EAEI,8BAAA;Ad4uCN;AczuCI;EAEI,SAAA;Ad0uCR;AehvCM;EACE,mBAAA;EDSE,SAAA;ECPF,iBAAA;AfkvCR","sourcesContent":["*, *:before, *:after{\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    text-rendering: optimizeLegibility;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-size-adjust: none;\r\n}\r\n\r\nfooter, header, nav, section, main{\r\n    display: block;\r\n}\r\n\r\nbody{\r\n    line-height: 1;\r\n}\r\n\r\nol, ul{\r\n    list-style: none;\r\n}\r\n\r\nblockquote, q{\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after, q:before, q:after{\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\ninput{\r\n    -webkit-appearance: none;\r\n    border-radius: 0;\r\n}","*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --mdc-theme-primary: #006874;\n    --mdc-theme-on-primary: #ffffff;\n    --mdc-theme-secondary: #5c6300;\n    --mdc-theme-on-secondary: #ffffff;\n    --mdc-theme-surface: #fafdfd;\n    --mdc-theme-on-surface: #191c1d;\n    --mdc-theme-background: #fafdfd;\n    --mdc-theme-on-background: #191c1d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --mdc-theme-primary: #4fd8eb;\n    --mdc-theme-on-primary: #00363d;\n    --mdc-theme-secondary: #c2d016;\n    --mdc-theme-on-secondary: #2f3300;\n    --mdc-theme-surface-base: 195, 7.4%;\n    --mdc-theme-surface-l: 15.6%;\n    --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\n    --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\n    --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\n    --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\n    --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\n    --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\n    --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\n    --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n    --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\n    --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\n    --mdc-theme-on-surface: #e1e3e3;\n    --mdc-theme-background: #191c1d;\n    --mdc-theme-on-background: #e1e3e3;\n    --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdc-elevation--z1 {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-elevation--z2 {\n    background: var(--mdc-theme-surface-z2);\n  }\n  .mdc-elevation--z3 {\n    background: var(--mdc-theme-surface-z3);\n  }\n  .mdc-elevation--z4 {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-elevation--z5 {\n    background: var(--mdc-theme-surface-z5);\n  }\n  .mdc-elevation--z6 {\n    background: var(--mdc-theme-surface-z6);\n  }\n  .mdc-elevation--z7 {\n    background: var(--mdc-theme-surface-z7);\n  }\n  .mdc-drawer.mdc-drawer--modal {\n    background: var(--mdc-theme-surface-z1);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header {\n    background: var(--mdc-theme-surface-z4);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__title {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__header .mdc-drawer__subtitle {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-surface-z9);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-drawer.mdc-drawer--modal .mdc-drawer__content .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {\n    color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar {\n    background-color: var(--mdc-theme-primary);\n  }\n  .mdc-top-app-bar__title {\n    color: var(--mdc-theme-on-primary);\n  }\n  .mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label {\n    color: var(--mdc-theme-on-surface);\n  }\n  .mdc-tab.mdc-tab--active .mdc-tab__icon, .mdc-tab.mdc-tab--active .mdc-tab__text-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__header-cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) and (prefers-color-scheme: dark) {\n  .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: var(--mdc-theme-surface-z3);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__title {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog__actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--outlined .mdc-notched-outline {\n    z-index: -1;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z5);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: var(--mdc-theme-surface-z7);\n    background: var(--mdc-theme-surface-z1);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\n    color: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\n    color: var(--mdc-theme-primary);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\n    color: var(--mdc-theme-on-surface);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-surface-z9);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\n    fill: var(--mdc-theme-primary);\n  }\n}\n.mdc-typography {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);\n}\n\n.mdc-typography--headline1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 6rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline1-font-size, 6rem);\n  line-height: 6rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline1-line-height, 6rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline1-font-weight, 300);\n  letter-spacing: -0.015625em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline1-text-transform, inherit);\n}\n\n.mdc-typography--headline2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline2-font-size, 3.75rem);\n  line-height: 3.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline2-line-height, 3.75rem);\n  font-weight: 300;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline2-font-weight, 300);\n  letter-spacing: -0.0083333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline2-text-transform, inherit);\n}\n\n.mdc-typography--headline3 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 3rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline3-font-size, 3rem);\n  line-height: 3.125rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline3-line-height, 3.125rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline3-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline3-text-transform, inherit);\n}\n\n.mdc-typography--headline4 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 2.125rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline4-font-size, 2.125rem);\n  line-height: 2.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline4-line-height, 2.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline4-font-weight, 400);\n  letter-spacing: 0.0073529412em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline4-text-transform, inherit);\n}\n\n.mdc-typography--headline5 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.5rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline5-font-size, 1.5rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline5-line-height, 2rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline5-font-weight, 400);\n  letter-spacing: normal;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline5-text-transform, inherit);\n}\n\n.mdc-typography--headline6 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1.25rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-headline6-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-headline6-font-weight, 500);\n  letter-spacing: 0.0125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n}\n\n.mdc-typography--subtitle1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n}\n\n.mdc-typography--subtitle2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);\n  line-height: 1.375rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);\n  letter-spacing: 0.0071428571em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);\n}\n\n.mdc-typography--body1 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body1-font-size, 1rem);\n  line-height: 1.5rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body1-line-height, 1.5rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body1-font-weight, 400);\n  letter-spacing: 0.03125em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body1-text-transform, inherit);\n}\n\n.mdc-typography--body2 {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n}\n\n.mdc-typography--caption {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-caption-font-size, 0.75rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-caption-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-caption-font-weight, 400);\n  letter-spacing: 0.0333333333em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-caption-text-transform, inherit);\n}\n\n.mdc-typography--button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n}\n\n.mdc-typography--overline {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.75rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-overline-font-size, 0.75rem);\n  line-height: 2rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-overline-line-height, 2rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-overline-font-weight, 500);\n  letter-spacing: 0.1666666667em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-overline-letter-spacing, 0.1666666667em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-overline-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-overline-text-transform, uppercase);\n}\n\nhtml {\n  background-color: var(--mdc-theme-background);\n}\n\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  vertical-align: middle;\n}\n\n.mdc-icon-button.actionsButton {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n\n.main-content {\n  padding: 1rem;\n}\n\n.content-section {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.demo-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.demo-group.wrap {\n  flex-wrap: wrap;\n}\n\n.mdc-checkbox {\n  padding: calc((40px - 18px) / 2);\n  /* @alternate */\n  padding: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);\n  margin: calc((40px - 40px) / 2);\n  /* @alternate */\n  margin: calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2);\n}\n.mdc-checkbox .mdc-checkbox__ripple::before, .mdc-checkbox .mdc-checkbox__ripple::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-checkbox:hover .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-checkbox.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {\n  transition: opacity 150ms linear;\n}\n.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,\n.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-checkbox .mdc-checkbox__background {\n  top: calc((40px - 18px) / 2);\n  /* @alternate */\n  top: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);\n  left: calc((40px - 18px) / 2);\n  /* @alternate */\n  left: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  top: calc((40px - 40px) / 2);\n  /* @alternate */\n  top: calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);\n  right: calc((40px - 40px) / 2);\n  /* @alternate */\n  right: calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);\n  left: calc((40px - 40px) / 2);\n  /* @alternate */\n  left: calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);\n  width: 40px;\n  /* @alternate */\n  width: var(--mdc-checkbox-touch-target-size, 40px);\n  height: 40px;\n  /* @alternate */\n  height: var(--mdc-checkbox-touch-target-size, 40px);\n}\n.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.54);\n  /* @alternate */\n  border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n  background-color: transparent;\n}\n.mdc-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled ~ .mdc-checkbox__background {\n  border-color: #018786;\n  /* @alternate */\n  border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n}\n@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786 {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    /* @alternate */\n    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n    background-color: transparent;\n  }\n  50% {\n    border-color: #018786;\n    /* @alternate */\n    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n    background-color: #018786;\n    /* @alternate */\n    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n  }\n}\n@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786 {\n  0%, 80% {\n    border-color: #018786;\n    /* @alternate */\n    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n    background-color: #018786;\n    /* @alternate */\n    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));\n  }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    /* @alternate */\n    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));\n    background-color: transparent;\n  }\n}\n.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786;\n}\n.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786;\n}\n.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  border-color: var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));\n  background-color: transparent;\n}\n.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled] ~ .mdc-checkbox__background {\n  border-color: transparent;\n  background-color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  background-color: var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));\n}\n.mdc-checkbox .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-checkbox-ink-color, #fff);\n}\n.mdc-checkbox .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  border-color: #fff;\n  /* @alternate */\n  border-color: var(--mdc-checkbox-ink-color, #fff);\n}\n.mdc-checkbox .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-checkbox-ink-color, #fff);\n}\n.mdc-checkbox .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  border-color: #fff;\n  /* @alternate */\n  border-color: var(--mdc-checkbox-ink-color, #fff);\n}\n\n.mdc-touch-target-wrapper {\n  display: inline;\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: mdc-animation-deceleration-curve-timing-function;\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring {\n  pointer-events: none;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  box-sizing: content-box;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n}\n@media screen and (forced-colors: active) {\n  .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring {\n    border-color: CanvasText;\n  }\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after {\n  content: \"\";\n  border: 2px solid transparent;\n  border-radius: 8px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  left: 50%;\n  /* @noflip */ /*rtl:ignore*/\n  transform: translate(-50%, -50%);\n  height: calc(100% + 4px);\n  width: calc(100% + 4px);\n}\n@media screen and (forced-colors: active) {\n  .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after {\n    border-color: CanvasText;\n  }\n}\n@media all and (-ms-high-contrast: none) {\n  .mdc-checkbox .mdc-checkbox__focus-ring {\n    display: none;\n  }\n}\n\n@media screen and (forced-colors: active), (-ms-high-contrast: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark {\n  opacity: 1;\n}\n\n.mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background, .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background {\n  transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n}\n.mdc-checkbox__native-control:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox--touch {\n  margin: calc((48px - 40px) / 2);\n  /* @alternate */\n  margin: calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);\n}\n.mdc-checkbox--touch .mdc-checkbox__native-control {\n  top: calc((40px - 48px) / 2);\n  /* @alternate */\n  top: calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);\n  right: calc((40px - 48px) / 2);\n  /* @alternate */\n  right: calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);\n  left: calc((40px - 48px) / 2);\n  /* @alternate */\n  left: calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);\n  width: 48px;\n  /* @alternate */\n  width: var(--mdc-checkbox-state-layer-size, 48px);\n  height: 48px;\n  /* @alternate */\n  height: var(--mdc-checkbox-state-layer-size, 48px);\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark,\n.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark,\n.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,\n.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,\n.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,\n.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark {\n  transition: none;\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-checkbox {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-checkbox .mdc-checkbox__ripple::before,\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-checkbox .mdc-checkbox__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  top: 0;\n  /* @noflip */ /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-checkbox .mdc-checkbox__ripple::before,\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  top: calc(50% - 50%);\n  /* @noflip */ /*rtl:ignore*/\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @noflip */ /*rtl:ignore*/\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-checkbox {\n  z-index: 0;\n}\n.mdc-checkbox .mdc-checkbox__ripple::before,\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  z-index: -1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, -1);\n}\n\n.mdc-checkbox__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-form-field {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-body2-font-size, 0.875rem);\n  line-height: 1.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-body2-line-height, 1.25rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-body2-font-weight, 400);\n  letter-spacing: 0.0178571429em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-body2-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-body2-text-transform, inherit);\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.mdc-form-field > label {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  order: 0;\n}\n[dir=rtl] .mdc-form-field > label, .mdc-form-field > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-form-field > label, .mdc-form-field > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 4px;\n  /*rtl:end:ignore*/\n}\n\n.mdc-form-field--nowrap > label {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.mdc-form-field--align-end > label {\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: auto;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 4px;\n  order: -1;\n}\n[dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  margin-left: 0;\n  /* @noflip */ /*rtl:ignore*/\n  margin-right: auto;\n  /*rtl:end:ignore*/\n}\n\n[dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  /* @noflip */ /*rtl:ignore*/\n  padding-left: 4px;\n  /* @noflip */ /*rtl:ignore*/\n  padding-right: 0;\n  /*rtl:end:ignore*/\n}\n\n.mdc-form-field--space-between {\n  justify-content: space-between;\n}\n.mdc-form-field--space-between > label {\n  margin: 0;\n}\n[dir=rtl] .mdc-form-field--space-between > label, .mdc-form-field--space-between > label[dir=rtl] {\n  /*rtl:begin:ignore*/\n  margin: 0;\n  /*rtl:end:ignore*/\n}","// $primary:#38C1D3;\r\n// $on-primary: #2c3400;\r\n// $secondary: #CDDC27;\r\n// $on-secondary: #2e321b;\r\n// $background: #10153D;\r\n// $surface: #10153D;\r\n// $on-surface: #e5e2da;\r\n// $error: #ffb4ab;\r\n// $on-error: #690005;\r\n\r\n:root {\r\n    @media (prefers-color-scheme: light) {\r\n        --mdc-theme-primary: #006874;\r\n        --mdc-theme-on-primary: #ffffff;\r\n        --mdc-theme-secondary: #5c6300;\r\n        --mdc-theme-on-secondary: #ffffff;\r\n        --mdc-theme-surface: #fafdfd;\r\n        --mdc-theme-on-surface: #191c1d;\r\n        --mdc-theme-background: #fafdfd;\r\n        --mdc-theme-on-background: #191c1d;\r\n    }\r\n\r\n    @media (prefers-color-scheme: dark) {\r\n        --mdc-theme-primary: #4fd8eb;\r\n        --mdc-theme-on-primary: #00363d;\r\n        --mdc-theme-secondary: #c2d016;\r\n        --mdc-theme-on-secondary: #2f3300;\r\n\r\n        --mdc-theme-surface-base: 195, 7.4%;\r\n        --mdc-theme-surface-l: 15.6%;\r\n        --mdc-theme-surface: hsl(var(--mdc-theme-surface-base),var(--mdc-theme-surface-l));\r\n            --mdc-theme-surface-z1: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 5%));\r\n            --mdc-theme-surface-z2: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 9%));\r\n            --mdc-theme-surface-z3: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 13%));\r\n            --mdc-theme-surface-z4: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 17%));\r\n            --mdc-theme-surface-z5: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 21%));\r\n            --mdc-theme-surface-z6: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 25%));\r\n            --mdc-theme-surface-z7: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\r\n            --mdc-theme-surface-z8: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 33%));\r\n            --mdc-theme-surface-z9: hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 37%));\r\n\r\n        --mdc-theme-on-surface: #e1e3e3;\r\n        --mdc-theme-background: #191c1d;\r\n        --mdc-theme-on-background: #e1e3e3;\r\n\r\n\r\n        // Others\r\n        --mdc-outlined-button-outline-color:hsl(var(--mdc-theme-surface-base),calc(var(--mdc-theme-surface-l) + 29%));\r\n\r\n    }\r\n}\r\n//#9c27b0 purple-ish\r\n\r\n@media (prefers-color-scheme: dark) {\r\n    .mdc-elevation--z1 {\r\n        background:var(--mdc-theme-surface-z1);\r\n    }\r\n    .mdc-elevation--z2 {\r\n        background:var(--mdc-theme-surface-z2);\r\n    }\r\n    .mdc-elevation--z3 {\r\n        background:var(--mdc-theme-surface-z3);\r\n    }\r\n    .mdc-elevation--z4 {\r\n        background:var(--mdc-theme-surface-z4);\r\n    }\r\n    .mdc-elevation--z5 {\r\n        background:var(--mdc-theme-surface-z5);\r\n    }\r\n    .mdc-elevation--z6 {\r\n        background:var(--mdc-theme-surface-z6);\r\n    }\r\n    .mdc-elevation--z7 {\r\n        background:var(--mdc-theme-surface-z7);\r\n    }\r\n\r\n\r\n    // Drawer Custom\r\n    .mdc-drawer {\r\n        &.mdc-drawer--modal {\r\n            background:var(--mdc-theme-surface-z1);\r\n\r\n            .mdc-drawer__header {\r\n                background:var(--mdc-theme-surface-z4);\r\n\r\n                .mdc-drawer__title {\r\n                    color:var(--mdc-theme-on-surface);\r\n                }\r\n                .mdc-drawer__subtitle {\r\n                    color:var(--mdc-theme-on-surface);\r\n                }\r\n            }\r\n\r\n            .mdc-drawer__content {\r\n                .mdc-deprecated-list-item {\r\n                    color: var(--mdc-theme-on-surface);\r\n\r\n                    .mdc-deprecated-list-item__graphic {\r\n                        color: var(--mdc-theme-surface-z9);\r\n                    }\r\n                }\r\n                .mdc-deprecated-list-item--activated {\r\n                    color: var(--mdc-theme-primary);\r\n\r\n                    .mdc-deprecated-list-item__graphic {\r\n                        color: var(--mdc-theme-primary);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    // Top App Bar Custom\r\n    .mdc-top-app-bar {\r\n        background-color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-top-app-bar__title {\r\n        color: var(--mdc-theme-on-primary);\r\n    }\r\n\r\n    // Tab Custom\r\n    .mdc-tab {\r\n        .mdc-tab__icon, .mdc-tab__text-label {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n\r\n        &.mdc-tab--active {\r\n            .mdc-tab__icon, .mdc-tab__text-label {\r\n                color: var(--mdc-theme-primary);\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    // Table Custom\r\n    .mdc-data-table__header-cell {\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n    }\r\n\r\n    .mdc-data-table__pagination-total, .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__cell {\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--mdc-theme-on-surface);\r\n        }\r\n    }\r\n\r\n\r\n    // Dialog Custom\r\n    .mdc-dialog .mdc-dialog__surface {\r\n        background-color:var(--mdc-theme-surface-z3);\r\n    }\r\n\r\n    .mdc-dialog .mdc-dialog__title {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n    .mdc-dialog__actions {\r\n        gap: 1rem;\r\n    }\r\n\r\n    // Dialog Scrim Custom\r\n    .mdc-dialog .mdc-dialog__scrim {\r\n        background-color: rgba(0, 0, 0, 0.80);\r\n    }\r\n\r\n\r\n\r\n    // Text Field Custom\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z5);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading, \r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch, \r\n    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z7);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-text-field--outlined .mdc-notched-outline {\r\n        z-index:-1;\r\n    }\r\n\r\n    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n\r\n\r\n    // Select Custom\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,\r\n    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z5);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading, \r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch, \r\n    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing {\r\n        border-color: var(--mdc-theme-surface-z7);\r\n        background: var(--mdc-theme-surface-z1);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {\r\n        color: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {\r\n        color: var(--mdc-theme-primary);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {\r\n        color: var(--mdc-theme-on-surface);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {\r\n        fill: var(--mdc-theme-surface-z9);\r\n    }\r\n\r\n    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon {\r\n        fill: var(--mdc-theme-primary);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:string';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/custom-properties';\n@use '@material/theme/keys';\n@use '@material/theme/theme';\n\n/// @deprecated Avoid calling this function directly. Instead, configure the\n/// `$styles-<style>` variable Maps.\n@function set-styles_($base-styles, $scale-styles, $override-styles) {\n  $options: (\n    custom-property-prefix: typography,\n  );\n\n  $base-styles: keys.set-values($base-styles, $options: $options);\n\n  @each $style, $style-props in $scale-styles {\n    @each $base-key in map.keys($base-styles) {\n      // Ignore the return result, it's not needed\n      $unused: keys.add-link(keys.combine($style, $base-key), $base-key);\n    }\n\n    // Merge base properties for all styles.\n    $style-props: map.merge($base-styles, $style-props);\n\n    // Merge overrides onto each style.\n    $style-props: map.merge($style-props, map.get($override-styles, $style));\n\n    // Register keys for this style\n    @each $property, $value in $style-props {\n      $unused: keys.set-value(\n        keys.combine($style, $property),\n        $value,\n        $options: $options\n      );\n    }\n\n    // Override original styles with new styles.\n    $scale-styles: map.merge($scale-styles, (#{$style}: $style-props));\n  }\n\n  @return $scale-styles;\n}\n\n@function get-letter-spacing_($tracking, $font-size) {\n  @return math.div($tracking, $font-size * 16) * 1em;\n}\n\n@function px-to-rem($px) {\n  @if custom-properties.is-custom-prop($px) {\n    @return custom-properties.set-fallback(\n      $px,\n      _px-to-rem(custom-properties.get-fallback($px))\n    );\n  }\n  @return _px-to-rem($px);\n}\n\n@function _px-to-rem($px) {\n  @if $px == null {\n    @return null;\n  }\n  @return math.div($px, 16px) * 1rem;\n}\n\n$font-family: string.unquote('Roboto, sans-serif') !default;\n\n// Override styles\n$styles-headline1: () !default;\n$styles-headline2: () !default;\n$styles-headline3: () !default;\n$styles-headline4: () !default;\n$styles-headline5: () !default;\n$styles-headline6: () !default;\n$styles-subtitle1: () !default;\n$styles-subtitle2: () !default;\n$styles-body1: () !default;\n$styles-body2: () !default;\n$styles-caption: () !default;\n$styles-button: () !default;\n$styles-overline: () !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead, or $font-family to set the base font family.\n$base: (\n  font-family: $font-family,\n) !default;\n\n$font-weight-values: (\n  thin: 100,\n  light: 300,\n  regular: 400,\n  medium: 500,\n  bold: 700,\n  black: 900,\n) !default;\n\n/// @deprecated Do not override this variable. Use the $styles-<style> override\n/// Map variables instead.\n$styles: set-styles_(\n  $base,\n  (\n    headline1: (\n      font-size: px-to-rem(96px),\n      line-height: px-to-rem(96px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-1.5, 6),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline2: (\n      font-size: px-to-rem(60px),\n      line-height: px-to-rem(60px),\n      font-weight: map.get($font-weight-values, light),\n      letter-spacing: get-letter-spacing_(-0.5, 3.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline3: (\n      font-size: px-to-rem(48px),\n      line-height: px-to-rem(50px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline4: (\n      font-size: px-to-rem(34px),\n      line-height: px-to-rem(40px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 2.125),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline5: (\n      font-size: px-to-rem(24px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: normal,\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    headline6: (\n      font-size: px-to-rem(20px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.25, 1.25),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(28px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.15, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    subtitle2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(22px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(0.1, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body1: (\n      font-size: px-to-rem(16px),\n      line-height: px-to-rem(24px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.5, 1),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    body2: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.25, 0.875),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    caption: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(20px),\n      font-weight: map.get($font-weight-values, regular),\n      letter-spacing: get-letter-spacing_(0.4, 0.75),\n      text-decoration: inherit,\n      text-transform: inherit,\n    ),\n    button: (\n      font-size: px-to-rem(14px),\n      line-height: px-to-rem(36px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(1.25, 0.875),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n    overline: (\n      font-size: px-to-rem(12px),\n      line-height: px-to-rem(32px),\n      font-weight: map.get($font-weight-values, medium),\n      letter-spacing: get-letter-spacing_(2, 0.75),\n      text-decoration: none,\n      text-transform: uppercase,\n    ),\n  ),\n  (\n    headline1: $styles-headline1,\n    headline2: $styles-headline2,\n    headline3: $styles-headline3,\n    headline4: $styles-headline4,\n    headline5: $styles-headline5,\n    headline6: $styles-headline6,\n    subtitle1: $styles-subtitle1,\n    subtitle2: $styles-subtitle2,\n    body1: $styles-body1,\n    body2: $styles-body2,\n    caption: $styles-caption,\n    button: $styles-button,\n    overline: $styles-overline,\n  )\n) !default;\n\n// A copy of the styles Map that is used to detect compile-time changes for\n// Angular support.\n$_styles-copy: $styles;\n\n@function is-typography-style($style) {\n  @return map.has-key($styles, $style);\n}\n\n@function get-typography-styles() {\n  @return map.keys($styles);\n}\n\n@mixin core-styles($query: feature-targeting.all()) {\n  .mdc-typography {\n    @include base($query: $query);\n  }\n\n  @each $style in get-typography-styles() {\n    .mdc-typography--#{$style} {\n      @include typography($style, $query: $query);\n    }\n  }\n}\n\n@mixin base($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @include theme.property(font-family, font-family);\n  }\n}\n\n@mixin typography($style, $query: feature-targeting.all(), $exclude-props: ()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @if not is-typography-style($style) {\n    @error \"Invalid style specified! #{$style} doesn't exist. Choose one of #{get-typography-styles()}\";\n  }\n\n  @include smooth-font($query: $query);\n  @include feature-targeting.targets($feat-typography) {\n    @each $key in keys.get-keys($style) {\n      // <style>-<property>: headline1-font-size\n      // Slice the string past the first key separator to retrieve the\n      // property name\n      $property: string.slice($key, string.index($key, '-') + 1);\n      @if list.index($exclude-props, $property) == null {\n        $current-global-value: map.get($styles, $style, $property);\n        $configured-global-value: map.get($_styles-copy, $style, $property);\n        @if $current-global-value != $configured-global-value {\n          // A compile time change was made to $mdc-typography-styles. To\n          // support Angular, use this value instead of the key's value.\n          @if $current-global-value {\n            // Only emit if the overridden value exists\n            $custom-prop: keys.create-custom-property($key);\n            $custom-prop: custom-properties.set-fallback(\n              $custom-prop,\n              $current-global-value\n            );\n            @include theme.property($property, $custom-prop);\n          }\n        } @else {\n          // Otherwise, use the key, which may be different from the original\n          // configured global value.\n          @include theme.property($property, $key);\n        }\n      }\n    }\n  }\n}\n\n/// Applies antialiasing via font-smoothing to text.\n@mixin smooth-font($query: feature-targeting.all()) {\n  $feat-typography: feature-targeting.create-target($query, typography);\n\n  @include feature-targeting.targets($feat-typography) {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n}\n\n// Element must be `display: block` or `display: inline-block` for this to work.\n@mixin overflow-ellipsis($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n/// Sets a container's baseline that text content will align to.\n///\n/// If the `$display` is set to a flexbox display, only `$top` baseline may be\n/// set. A separate element must be added as a child of the container with a\n/// `$bottom` baseline.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {String} $display - the display type of the container. May be `flex`,\n///     `inline-flex`, `block`, or `inline-block`.\n@mixin baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (flex, inline-flex, block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $isFlexbox: $display == 'flex' or $display == 'inline-flex';\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: $display;\n\n    @if $isFlexbox {\n      align-items: baseline;\n    }\n  }\n\n  @if $top > 0 {\n    @include baseline-top($top, $query: $query);\n  }\n\n  @if $bottom > 0 {\n    @if $isFlexbox {\n      @error \"mdc-typography: invalid baseline with display type. #{$display} cannot specifiy $bottom. Add a separate child element with its own $bottom.\";\n    }\n\n    @include baseline-bottom($bottom, $query: $query);\n  }\n}\n\n/// Sets the baseline of flow text content.\n///\n/// Separate `$top` and `$bottom` baselines may be specified. You should ensure\n/// that the `$top` baseline matches the previous text content's $bottom\n/// baseline to ensure text is positioned appropriately.\n///\n/// See go/css-baseline for reference on how this mixin works.\n///\n/// This is intended for text flow content only (e.g. `<h1>`, `<p>`, `<span>`,\n/// or `<div>` with only text content). Use `baseline()` to set the baseline of\n/// containers that are flexbox or have non-flow content children.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {Boolean} $lineHeight - the line-height to use for the text. This\n///     is the distance between baselines of multiple lines of text.\n/// @param {String} $display - the display type of the container. May be `block`\n///     or `inline-block`.\n@mixin text-baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $lineHeight: normal,\n  $query: feature-targeting.all()\n) {\n  $validDisplayTypes: (block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include baseline(\n    $display: $display,\n    $top: $top,\n    $bottom: $bottom,\n    $query: $query\n  );\n  @include feature-targeting.targets($feat-structure) {\n    @if $top > 0 {\n      margin-top: 0;\n      /* @alternate */\n      line-height: #{$lineHeight};\n    }\n\n    @if $bottom > 0 {\n      margin-bottom: -1 * $bottom;\n    }\n  }\n}\n\n/// Creates a baseline strut from the top of a container. This mixin is for\n/// advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the top of the container to\n///     the text's baseline.\n@mixin baseline-top($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: 0;\n    }\n  }\n}\n\n/// Creates a baseline strut from the baseline to the bottom of a container.\n/// This mixin is for advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the text's baseline to the\n///     bottom of the container.\n@mixin baseline-bottom($distance, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: -1 * $distance;\n    }\n  }\n}\n\n/// Adds an invisible, zero-width prefix to a container's text.\n/// This ensures that the baseline is always where the text would be, instead\n/// of defaulting to the container bottom when text is empty. Do not use this\n/// mixin if the `baseline` mixin is already applied.\n@mixin zero-width-prefix($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting.targets($feat-structure) {\n      content: '\\200b';\n    }\n  }\n}\n\n@mixin baseline-strut_($distance) {\n  display: inline-block;\n  width: 0;\n  height: $distance;\n  content: '';\n}\n\n@function get-font($typography) {\n  @return map.get($styles, $typography, font-family);\n}\n\n@function get-line-height($typography) {\n  @return map.get($styles, $typography, line-height);\n}\n\n@function get-size($typography) {\n  @return map.get($styles, $typography, font-size);\n}\n\n@function get-weight($typography) {\n  @return map.get($styles, $typography, font-weight);\n}\n\n@function get-tracking($typography) {\n  @return map.get($styles, $typography, letter-spacing);\n}\n\n$_typography-theme: (\n  font: null,\n  line-height: null,\n  size: null,\n  weight: null,\n  tracking: null,\n);\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme-keys($_typography-theme, $theme);\n\n  @include theme.property(font-family, map.get($theme, font));\n  @include theme.property(line-height, map.get($theme, line-height));\n  @include theme.property(font-size, map.get($theme, size));\n  @include theme.property(font-weight, map.get($theme, weight));\n  @include theme.property(letter-spacing, map.get($theme, tracking));\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n@use './gss';\n\n/// When true, add an additional property/value declaration before declarations\n/// that use advanced features such as custom properties or CSS functions. This\n/// adds fallback support for older browsers such as IE11 that do not support\n/// these features at the cost of additional CSS. Set this variable to false to\n/// disable generating fallback declarations.\n$enable-fallback-declarations: true !default;\n\n/// Writes a CSS property/value declaration. This mixin is used throughout the\n/// theme package for consistency for dynamically setting CSS property values.\n///\n/// This mixin may optionally take a fallback value. For advanced features such\n/// as custom properties or CSS functions like min and max, a fallback value is\n/// recommended to support older browsers.\n///\n/// @param {String} $property - The CSS property of the declaration.\n/// @param {*} $value - The value of the CSS declaration. The value should be\n///     resolved by other theme functions first (i.e. custom property Maps and\n///     Material theme keys are not supported in this mixin). If the value is\n///     null, no declarations will be emitted.\n/// @param {*} $fallback - An optional fallback value for older browsers. If\n///     provided, a second property/value declaration will be added before the\n///     main property/value declaration.\n/// @param {Map} $gss - An optional Map of GSS annotations to add.\n/// @param {Bool} $important - If true, add `!important` to the declaration.\n@mixin declaration(\n  $property,\n  $value,\n  $fallback-value: null,\n  $gss: (),\n  $important: false\n) {\n  // Normally setting a null value to a property will not emit CSS, so mixins\n  // wouldn't need to check this. However, Sass will throw an error if the\n  // interpolated property is a custom property.\n  @if $value != null {\n    $important-rule: if($important, ' !important', '');\n\n    @if $fallback-value and $enable-fallback-declarations {\n      @include gss.annotate($gss);\n      #{$property}: #{$fallback-value} #{$important-rule};\n\n      // Add @alternate to annotations.\n      $gss: map.merge(\n        $gss,\n        (\n          alternate: true,\n        )\n      );\n    }\n\n    @include gss.annotate($gss);\n    #{$property}: #{$value}#{$important-rule};\n  }\n}\n\n/// Unpacks shorthand values for CSS properties (i.e. lists of 1-3 values).\n/// If a list of 4 values is given, it is returned as-is.\n///\n/// Examples:\n///\n/// unpack-value(4px) => 4px 4px 4px 4px\n/// unpack-value(4px 2px) => 4px 2px 4px 2px\n/// unpack-value(4px 2px 2px) => 4px 2px 2px 2px\n/// unpack-value(4px 2px 0 2px) => 4px 2px 0 2px\n///\n/// @param {Number | Map | List} $value - List of 1 to 4 value numbers.\n/// @return {List} a List of 4 value numbers.\n@function unpack-value($value) {\n  @if meta.type-of($value) == 'map' or list.length($value) == 1 {\n    @return $value $value $value $value;\n  } @else if list.length($value) == 4 {\n    @return $value;\n  } @else if list.length($value) == 3 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 3)\n      list.nth($value, 2);\n  } @else if list.length($value) == 2 {\n    @return list.nth($value, 1) list.nth($value, 2) list.nth($value, 1)\n      list.nth($value, 2);\n  }\n\n  @error \"Invalid CSS property value: '#{$value}' is more than 4 values\";\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:map';\n@use 'sass:meta';\n\n/// Adds optional GSS annotation comments. Useful for theme mixins where one or\n/// more properties are set indirectly.\n///\n/// Annotations may be provided as a Map of annotations or as named arguments.\n///\n/// @example - scss\n///   @include annotate((noflip: true));\n///   left: 0;\n///\n/// @example - scss\n///   @include annotate($noflip: true);\n///   left: 0;\n///\n/// @example - css\n///   /* @noflip */ /*rtl:ignore*/\n///   left: 0;\n///\n/// @param {Map} $annotations - Map of annotations. Values must be set to `true`\n///     for an annotation to be added.\n@mixin annotate($annotations...) {\n  $keywords: meta.keywords($annotations);\n  @if list.length($annotations) > 0 {\n    $annotations: list.nth($annotations, 1);\n  } @else {\n    $annotations: $keywords;\n  }\n\n  @if (map.get($annotations, alternate) == true) {\n    /* @alternate */\n  }\n\n  // noflip must be the last tag right before the property\n  @if (map.get($annotations, noflip) == true) {\n    /* @noflip */ /*rtl:ignore*/\n  }\n}\n","//@use \"@material/typography/mdc-typography\";\r\n//@import \"./theme/theme1/variables\";\r\n//@use \"@material/theme\";\r\n@import \"./reset\";\r\n@import \"./theme/theme1/variables\";\r\n//@import \"./theme/theme1/variables-dark\";\r\n@import \"../../node_modules/@material/typography/mdc-typography\";\r\n\r\nhtml {\r\n    background-color: var(--mdc-theme-background);\r\n}\r\n\r\ntable {\r\n    thead, tbody {\r\n        tr {\r\n            th, td {\r\n                vertical-align: middle;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.mdc-icon-button.actionsButton {\r\n    width: 40px;\r\n    height: 40px;\r\n    padding: 8px;\r\n}\r\n\r\n.main-content {\r\n    padding:1rem;\r\n}\r\n\r\n.content-section {\r\n    padding:1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.demo-group {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n\r\n    &.wrap {\r\n        flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use 'sass:math';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as animation-variables;\n@use '@material/density/functions' as density-functions;\n@use '@material/dom/dom';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/focus-ring/focus-ring';\n@use '@material/ripple/ripple';\n@use '@material/ripple/ripple-theme';\n@use '@material/touch-target/mixins' as touch-target-mixins;\n@use '@material/theme/theme-color';\n@use './checkbox-custom-properties';\n@use '@material/theme/theme';\n@use '@material/theme/color-custom-properties';\n@use '@material/theme/custom-properties';\n@use '@material/touch-target/variables' as touch-target-variables;\n@use './checkbox-theme';\n\n///\n/// Checkbox and ripple styles.\n///\n@mixin core-styles($query: feature-targeting.all()) {\n  @include without-ripple($query);\n  @include ripple-styles($query);\n}\n\n/// Checkbox styles (Excluding ripple styles).\n///\n/// NOTE: This API is intended for use by frameworks that may want to separate the ripple-related styles from the other\n/// checkbox styles. It is recommended that most users use `mdc-checkbox-core-styles` instead.\n// TODO(b/162887560): Rename to `checkbox-without-ripple-styles()`\n@mixin without-ripple($query: feature-targeting.all()) {\n  // TODO(b/165005345): Include theme-styles() after static-styles().\n  @include theme-styles($query: $query);\n  @include static-styles($query: $query);\n}\n\n/// Checkbox static styles.\n/// Checkbox styles that are not customizable should go here.\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include touch-target-mixins.wrapper($query); // COPYBARA_COMMENT_THIS_LINE\n\n  @include feature-targeting.targets($feat-animation) {\n    @include mark-keyframes_;\n  }\n\n  .mdc-checkbox {\n    @include feature-targeting.targets($feat-structure) {\n      @include base_;\n    }\n\n    @include ripple-theme.focus {\n      .mdc-checkbox__focus-ring {\n        @include focus-ring.focus-ring(\n          $query: $query,\n          $container-outer-padding-vertical: 0,\n          $container-outer-padding-horizontal: 0\n        );\n      }\n    }\n\n    // Turn off focus ring for IE when HCM is turn off. For some reason this\n    // adds space to the bottom on the focused checkbox inside a dialog.\n    @media all and (-ms-high-contrast: none) {\n      .mdc-checkbox__focus-ring {\n        display: none;\n      }\n    }\n  }\n\n  @include dom.forced-colors-mode {\n    .mdc-checkbox__mixedmark {\n      @include feature-targeting.targets($feat-structure) {\n        margin: 0 1px; // Extra horizontal space around mixedmark symbol.\n      }\n    }\n  }\n\n  // Needed to disable hover effects on CSS-only (non-JS) checkboxes\n  .mdc-checkbox--disabled {\n    @include feature-targeting.targets($feat-structure) {\n      @include disabled_;\n    }\n  }\n\n  .mdc-checkbox__background {\n    @include background_($query);\n  }\n\n  .mdc-checkbox__checkmark {\n    @include checkmark_($query);\n  }\n\n  .mdc-checkbox__checkmark-path {\n    @include checkmark-path_($query);\n  }\n\n  .mdc-checkbox__mixedmark {\n    @include mixedmark_($query);\n  }\n\n  .mdc-checkbox--anim {\n    @include feature-targeting.targets($feat-animation) {\n      @include anim_;\n    }\n  }\n\n  .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control[data-indeterminate='true']\n    ~ .mdc-checkbox__background {\n    @include feature-targeting.targets($feat-animation) {\n      @include background--marked_;\n    }\n\n    .mdc-checkbox__checkmark-path {\n      @include feature-targeting.targets($feat-structure) {\n        @include checkmark-path--marked_;\n      }\n    }\n  }\n\n  .mdc-checkbox__native-control {\n    @include feature-targeting.targets($feat-structure) {\n      @include native-control_;\n    }\n\n    &:disabled {\n      @include feature-targeting.targets($feat-structure) {\n        @include disabled_;\n      }\n    }\n  }\n\n  .mdc-checkbox--touch {\n    @include checkbox-theme.touch-target(\n      custom-properties.create(\n        checkbox-state-layer-size,\n        touch-target-variables.$height\n      ),\n      custom-properties.create(\n        checkbox-state-layer-size,\n        checkbox-theme.$ripple-size\n      ),\n      $query: $query\n    );\n  }\n\n  .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background {\n    .mdc-checkbox__checkmark {\n      @include checkmark--checked_($query);\n    }\n\n    .mdc-checkbox__mixedmark {\n      @include feature-targeting.targets($feat-structure) {\n        @include mixedmark--checked_;\n      }\n    }\n  }\n  .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control[data-indeterminate='true']\n    ~ .mdc-checkbox__background {\n    .mdc-checkbox__checkmark {\n      @include checkmark--indeterminate_($query);\n    }\n\n    .mdc-checkbox__mixedmark {\n      @include feature-targeting.targets($feat-structure) {\n        @include mixedmark--indeterminate_;\n      }\n    }\n  }\n\n  // JS checkbox\n  .mdc-checkbox.mdc-checkbox--upgraded {\n    .mdc-checkbox__background,\n    .mdc-checkbox__checkmark,\n    .mdc-checkbox__checkmark-path,\n    .mdc-checkbox__mixedmark {\n      @include feature-targeting.targets($feat-animation) {\n        @include child--upgraded_;\n      }\n    }\n  }\n}\n\n/// Checkbox theme styles.\n/// Checkbox styles that are customizable should go here.\n@mixin theme-styles($query: feature-targeting.all()) {\n  .mdc-checkbox {\n    @include checkbox-theme.theme-deprecated(\n      checkbox-theme.$light-theme-deprecated,\n      $query: $query\n    );\n  }\n}\n\n/// Checkbox's ripple styles.\n///\n/// NOTE: This API is intended for use by frameworks that may want to separate the ripple-related styles from the other\n/// checkbox styles. It is recommended that most users use `mdc-checkbox-core-styles` instead.\n@mixin ripple-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include ripple.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  .mdc-checkbox {\n    @include ripple.surface(\n      $query: $query,\n      $ripple-target: checkbox-theme.$ripple-target\n    );\n    @include ripple.radius-unbounded(\n      $query: $query,\n      $ripple-target: checkbox-theme.$ripple-target\n    );\n    @include ripple-theme.behind-content(\n      checkbox-theme.$ripple-target,\n      $query: $query\n    );\n  }\n\n  #{checkbox-theme.$ripple-target} {\n    @include ripple.target-common($query: $query);\n  }\n}\n\n@mixin base_ {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 checkbox-theme.$icon-size;\n  box-sizing: content-box;\n  width: checkbox-theme.$icon-size;\n  height: checkbox-theme.$icon-size;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n}\n\n@mixin disabled_ {\n  cursor: default;\n  pointer-events: none;\n}\n\n@mixin child--upgraded_ {\n  transition: none;\n}\n\n// Animation\n\n@mixin anim_ {\n  $mdc-checkbox-indeterminate-change-duration_: 500ms;\n\n  // stylelint-disable no-unknown-animations -- allow unknown animations\n\n  &-unchecked-checked,\n  &-unchecked-indeterminate,\n  &-checked-unchecked,\n  &-indeterminate-unchecked {\n    .mdc-checkbox__background {\n      animation-duration: checkbox-theme.$transition-duration * 2;\n      animation-timing-function: linear;\n    }\n  }\n\n  &-unchecked-checked {\n    .mdc-checkbox__checkmark-path {\n      // Instead of delaying the animation, we simply multiply its length by 2 and begin the\n      // animation at 50% in order to prevent a flash of styles applied to a checked checkmark\n      // as the background is fading in before the animation begins.\n      animation: mdc-checkbox-unchecked-checked-checkmark-path\n        checkbox-theme.$transition-duration * 2 linear 0s;\n      transition: none;\n    }\n  }\n\n  &-unchecked-indeterminate {\n    .mdc-checkbox__mixedmark {\n      animation: mdc-checkbox-unchecked-indeterminate-mixedmark\n        checkbox-theme.$transition-duration linear 0s;\n      transition: none;\n    }\n  }\n\n  &-checked-unchecked {\n    .mdc-checkbox__checkmark-path {\n      animation: mdc-checkbox-checked-unchecked-checkmark-path\n        checkbox-theme.$transition-duration linear 0s;\n      transition: none;\n    }\n  }\n\n  &-checked-indeterminate {\n    .mdc-checkbox__checkmark {\n      animation: mdc-checkbox-checked-indeterminate-checkmark\n        checkbox-theme.$transition-duration linear 0s;\n      transition: none;\n    }\n\n    .mdc-checkbox__mixedmark {\n      animation: mdc-checkbox-checked-indeterminate-mixedmark\n        checkbox-theme.$transition-duration linear 0s;\n      transition: none;\n    }\n  }\n\n  &-indeterminate-checked {\n    .mdc-checkbox__checkmark {\n      animation: mdc-checkbox-indeterminate-checked-checkmark\n        $mdc-checkbox-indeterminate-change-duration_ linear 0s;\n      transition: none;\n    }\n\n    .mdc-checkbox__mixedmark {\n      animation: mdc-checkbox-indeterminate-checked-mixedmark\n        $mdc-checkbox-indeterminate-change-duration_ linear 0s;\n      transition: none;\n    }\n  }\n\n  &-indeterminate-unchecked {\n    .mdc-checkbox__mixedmark {\n      animation: mdc-checkbox-indeterminate-unchecked-mixedmark\n        $mdc-checkbox-indeterminate-change-duration_ * 0.6 linear 0s;\n      transition: none;\n    }\n  }\n\n  // stylelint-enable no-unknown-animations\n}\n\n@mixin background_($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @include feature-targeting.targets($feat-structure) {\n    display: inline-flex;\n    position: absolute;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    width: checkbox-theme.$icon-size;\n    height: checkbox-theme.$icon-size;\n    // border-color is overridden by the mdc-checkbox-unmarked-stroke-color() mixin\n    border: checkbox-theme.$border-width solid currentColor;\n    border-radius: 2px;\n    background-color: transparent;\n    pointer-events: none;\n    will-change: background-color, border-color;\n  }\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: transition-exit(background-color), transition-exit(border-color);\n  }\n}\n\n@mixin background--marked_ {\n  transition: transition-enter(border-color), transition-enter(background-color);\n}\n\n// stylelint-disable block-no-empty -- For backward compatibility.\n@mixin focus-indicator_($query: feature-targeting.all()) {\n}\n@mixin focus-indicator--focused_($query: feature-targeting.all()) {\n}\n// stylelint-enable block-no-empty\n\n// Native input\n\n@mixin native-control_ {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n}\n\n// Check mark\n\n@mixin checkmark_($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    opacity: 0;\n  }\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: transition-exit(\n      opacity,\n      0ms,\n      checkbox-theme.$transition-duration * 2\n    );\n  }\n\n  .mdc-checkbox--upgraded & {\n    @include feature-targeting.targets($feat-structure) {\n      opacity: 1;\n    }\n  }\n}\n\n@mixin checkmark--checked_($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: transition-enter(\n        opacity,\n        0ms,\n        checkbox-theme.$transition-duration * 2\n      ),\n      transition-enter(transform, 0ms, checkbox-theme.$transition-duration * 2);\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    opacity: 1;\n  }\n}\n\n@mixin checkmark--indeterminate_($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: transition-exit(\n        opacity,\n        0ms,\n        checkbox-theme.$transition-duration\n      ),\n      transition-exit(transform, 0ms, checkbox-theme.$transition-duration);\n  }\n}\n\n// Check mark path\n\n@mixin checkmark-path_($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: transition-exit(\n      stroke-dashoffset,\n      0ms,\n      checkbox-theme.$transition-duration * 2\n    );\n  }\n\n  @include feature-targeting.targets($feat-structure) {\n    stroke: currentColor;\n    stroke-width: checkbox-theme.$mark-stroke-size * 1.3;\n    stroke-dashoffset: $mark-path-length_;\n    stroke-dasharray: $mark-path-length_;\n  }\n}\n\n@mixin checkmark-path--marked_ {\n  stroke-dashoffset: 0;\n}\n\n// Mixed mark\n\n@mixin mixedmark_($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    width: 100%;\n    height: 0;\n    transform: scaleX(0) rotate(0deg);\n    border-width: math.div(math.floor(checkbox-theme.$mark-stroke-size), 2);\n    border-style: solid;\n    opacity: 0;\n  }\n\n  @include feature-targeting.targets($feat-animation) {\n    transition: transition-exit(opacity), transition-exit(transform);\n  }\n}\n\n@mixin mixedmark--checked_ {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n@mixin mixedmark--indeterminate_ {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n@function transition-enter(\n  $property,\n  $delay: 0ms,\n  $duration: checkbox-theme.$transition-duration\n) {\n  @return functions2.enter($property, $duration, $delay);\n}\n\n@function transition-exit(\n  $property,\n  $delay: 0ms,\n  $duration: checkbox-theme.$transition-duration\n) {\n  @return functions2.exit-temporary($property, $duration, $delay);\n}\n\n// Manual calculation done on SVG\n$mark-path-length_: 29.7833385 !default;\n$indeterminate-checked-easing-function_: cubic-bezier(0.14, 0, 0, 1) !default;\n\n@mixin mark-keyframes_ {\n  @keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n    0%,\n    50% {\n      stroke-dashoffset: $mark-path-length_;\n    }\n\n    50% {\n      animation-timing-function: animation-variables.$deceleration-curve-timing-function;\n    }\n\n    100% {\n      stroke-dashoffset: 0;\n    }\n  }\n\n  @keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n    0%,\n    68.2% {\n      transform: scaleX(0);\n    }\n\n    68.2% {\n      animation-timing-function: cubic-bezier(0, 0, 0, 1);\n    }\n\n    100% {\n      transform: scaleX(1);\n    }\n  }\n\n  @keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n    from {\n      animation-timing-function: animation-variables.$acceleration-curve-timing-function;\n      opacity: 1;\n      stroke-dashoffset: 0;\n    }\n\n    to {\n      opacity: 0;\n      stroke-dashoffset: $mark-path-length_ * -1;\n    }\n  }\n\n  @keyframes mdc-checkbox-checked-indeterminate-checkmark {\n    from {\n      animation-timing-function: animation-variables.$deceleration-curve-timing-function;\n      transform: rotate(0deg);\n      opacity: 1;\n    }\n\n    to {\n      transform: rotate(45deg);\n      opacity: 0;\n    }\n  }\n\n  @keyframes mdc-checkbox-indeterminate-checked-checkmark {\n    from {\n      animation-timing-function: $indeterminate-checked-easing-function_;\n      transform: rotate(45deg);\n      opacity: 0;\n    }\n\n    to {\n      transform: rotate(360deg);\n      opacity: 1;\n    }\n  }\n\n  @keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n    from {\n      animation-timing-function: mdc-animation-deceleration-curve-timing-function;\n      transform: rotate(-45deg);\n      opacity: 0;\n    }\n\n    to {\n      transform: rotate(0deg);\n      opacity: 1;\n    }\n  }\n\n  @keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n    from {\n      animation-timing-function: $indeterminate-checked-easing-function_;\n      transform: rotate(0deg);\n      opacity: 1;\n    }\n\n    to {\n      transform: rotate(315deg);\n      opacity: 0;\n    }\n  }\n\n  @keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n    0% {\n      animation-timing-function: linear;\n      transform: scaleX(1);\n      opacity: 1;\n    }\n\n    32.8%,\n    100% {\n      transform: scaleX(0);\n      opacity: 0;\n    }\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/theme/css';\n@use '@material/theme/custom-properties';\n@use '@material/theme/theme';\n@use '@material/theme/keys';\n@use '@material/theme/shadow-dom';\n@use '@material/theme/theme-color';\n\n$custom-property-prefix: 'ripple';\n\n$fade-in-duration: 75ms !default;\n$fade-out-duration: 150ms !default;\n$translate-duration: 225ms !default;\n$states-wash-duration: 15ms !default;\n\n// Notes on states:\n// * focus takes precedence over hover (i.e. if an element is both focused and hovered, only focus value applies)\n// * press state applies to a separate pseudo-element, so it has an additive effect on top of other states\n// * selected/activated are applied additively to hover/focus via calculations at preprocessing time\n\n$dark-ink-opacities: (\n  hover: 0.04,\n  focus: 0.12,\n  press: 0.12,\n  selected: 0.08,\n  activated: 0.12,\n) !default;\n\n$light-ink-opacities: (\n  hover: 0.08,\n  focus: 0.24,\n  press: 0.24,\n  selected: 0.16,\n  activated: 0.24,\n) !default;\n\n// Legacy\n\n$pressed-dark-ink-opacity: 0.16 !default;\n$pressed-light-ink-opacity: 0.32 !default;\n\n// State selector variables used for state selector mixins below.\n$_hover-selector: '&:hover';\n$_focus-selector: '&.mdc-ripple-upgraded--background-focused, &:not(.mdc-ripple-upgraded):focus';\n$_active-selector: '&:not(:disabled):active';\n\n$light-theme: (\n  focus-state-layer-color: theme-color.$on-surface,\n  focus-state-layer-opacity: map.get($dark-ink-opacities, focus),\n  hover-state-layer-color: theme-color.$on-surface,\n  hover-state-layer-opacity: map.get($dark-ink-opacities, hover),\n  pressed-state-layer-color: theme-color.$on-surface,\n  pressed-state-layer-opacity: map.get($dark-ink-opacities, press),\n);\n\n@mixin theme($theme) {\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  @if shadow-dom.$css-selector-fallback-declarations {\n    .mdc-ripple-surface {\n      @include theme-styles($theme);\n    }\n  }\n}\n\n$_ripple-theme: (\n  hover-state-layer-color: null,\n  focus-state-layer-color: null,\n  pressed-state-layer-color: null,\n  hover-state-layer-opacity: null,\n  focus-state-layer-opacity: null,\n  pressed-state-layer-opacity: null,\n);\n\n@mixin theme-styles($theme, $ripple-target: '&') {\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  // TODO(b/191298796): Support states layer color for every interactive states.\n  // Use only hover state layer color, ignoring focus and pressed color.\n  @include internal-theme-styles($theme, $ripple-target);\n}\n\n@mixin internal-theme-styles($theme, $ripple-target: '&') {\n  @include theme.validate-theme-keys($_ripple-theme, $theme);\n\n  @include states-base-color(\n    map.get($theme, hover-state-layer-color),\n    $ripple-target: $ripple-target\n  );\n  @include states-hover-opacity(\n    map.get($theme, hover-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-focus-opacity(\n    map.get($theme, focus-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n  @include states-press-opacity(\n    map.get($theme, pressed-state-layer-opacity),\n    $ripple-target: $ripple-target\n  );\n}\n\n@mixin states-base-color(\n  $color,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $color {\n    @if not custom-properties.is-custom-prop($color) {\n      $color: custom-properties.create(\n        ripple-color,\n        theme-color.get-custom-property($color)\n      );\n    }\n\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(background-color, $color);\n      }\n    }\n  }\n}\n\n///\n/// Customizes ripple opacities in `hover`, `focus`, or `press` states\n/// @param {map} $opacity-map - map specifying custom opacity of zero or more states\n/// @param {bool} $has-nested-focusable-element - whether the component contains a focusable element in the root\n/// @param {string} $ripple-target - the optional selector for the ripple element\n///\n@mixin states-opacities(\n  $opacity-map: (),\n  $has-nested-focusable-element: false,\n  $ripple-target: '&',\n  $query: feature-targeting.all()\n) {\n  // Ensure sufficient specificity to override base state opacities\n  @if map.get($opacity-map, hover) {\n    @include states-hover-opacity(\n      map.get($opacity-map, hover),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, focus) {\n    @include states-focus-opacity(\n      map.get($opacity-map, focus),\n      $ripple-target: $ripple-target,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $query: $query\n    );\n  }\n\n  @if map.get($opacity-map, press) {\n    @include states-press-opacity(\n      map.get($opacity-map, press),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n}\n\n@mixin states-hover-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity and not custom-properties.is-custom-prop($opacity) {\n    $opacity: custom-properties.create(ripple-hover-opacity, $opacity);\n  }\n\n  // Background wash styles, for both CSS-only and upgraded stateful surfaces\n  &:hover,\n  &.mdc-ripple-surface--hover {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(opacity, $opacity);\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity(\n  $opacity,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  // Focus overrides hover by reusing the ::before pseudo-element.\n  // :focus-within generally works on non-MS browsers and matches when a *child* of the element has focus.\n  // It is useful for cases where a component has a focusable element within the root node, e.g. text field,\n  // but undesirable in general in case of nested stateful components.\n  // We use a modifier class for JS-enabled surfaces to support all use cases in all browsers.\n  @if $has-nested-focusable-element {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    &.mdc-ripple-upgraded:focus-within,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus,\n    &:not(.mdc-ripple-upgraded):focus-within {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  } @else {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus {\n      @include states-background-selector($ripple-target) {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity-properties_($opacity, $query) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n  $feat-color: feature-targeting.create-target($query, color);\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-focus-opacity, $opacity);\n    }\n\n    // Note that this duration is only effective on focus, not blur\n    @include feature-targeting.targets($feat-animation) {\n      transition-duration: 75ms;\n    }\n\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(opacity, $opacity);\n    }\n  }\n}\n\n@mixin states-press-opacity(\n  $opacity,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  // Styles for non-upgraded (CSS-only) stateful surfaces\n\n  @if $opacity {\n    @if not custom-properties.is-custom-prop($opacity) {\n      $opacity: custom-properties.create(ripple-press-opacity, $opacity);\n    }\n\n    &:not(.mdc-ripple-upgraded) {\n      // Apply press additively by using the ::after pseudo-element\n      #{$ripple-target}::after {\n        @include feature-targeting.targets($feat-animation) {\n          transition: opacity $fade-out-duration linear;\n        }\n      }\n\n      &:active {\n        #{$ripple-target}::after {\n          @include feature-targeting.targets($feat-animation) {\n            transition-duration: $fade-in-duration;\n          }\n\n          // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n          @include feature-targeting.targets($feat-color) {\n            @include theme.property(opacity, $opacity);\n          }\n        }\n      }\n    }\n\n    &.mdc-ripple-upgraded {\n      @include feature-targeting.targets($feat-color) {\n        // Upgraded ripple should always emit custom property, regardless of\n        // configuration, since ripple itself feature detects custom property\n        // support at runtime.\n        @include custom-properties.configure($emit-custom-properties: true) {\n          @include theme.property(\n            custom-properties.create(ripple-fg-opacity, $opacity)\n          );\n        }\n      }\n    }\n  }\n}\n\n// Simple mixin for base states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states(\n  $color: theme-color.prop-value(on-surface),\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include states-interactions_(\n    $color: $color,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $query: $query,\n    $ripple-target: $ripple-target,\n    $opacity-map: $opacity-map\n  );\n}\n\n// Simple mixin for activated states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-activated(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $activated-opacity: states-opacity($color, activated);\n\n  &--activated {\n    // Stylelint seems to think that '&' qualifies as a type selector here?\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-activated-opacity,\n            $activated-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $activated-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n// Simple mixin for selected states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-selected(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $selected-opacity: states-opacity($color, selected);\n\n  &--selected {\n    @include states-background-selector($ripple-target) {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(\n          opacity,\n          custom-properties.create(\n            --mdc-ripple-selected-opacity,\n            $selected-opacity\n          )\n        );\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $selected-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n@mixin states-interactions_(\n  $color,\n  $has-nested-focusable-element,\n  $opacity-modifier: 0,\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $opacity-map: null\n) {\n  @include target-selector($ripple-target) {\n    @include states-base-color($color, $query);\n  }\n\n  @if $opacity-map == null {\n    $opacity-map: (\n      hover: states-opacity($color, hover) + $opacity-modifier,\n      focus: states-opacity($color, focus) + $opacity-modifier,\n      press: states-opacity($color, press) + $opacity-modifier,\n    );\n  }\n\n  @include states-opacities(\n    $opacity-map,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $ripple-target: $ripple-target,\n    $query: $query\n  );\n}\n\n// Wraps content in the `ripple-target` selector if it exists.\n@mixin target-selector($ripple-target: '&') {\n  @if $ripple-target == '&' {\n    @content;\n  } @else {\n    #{$ripple-target} {\n      @content;\n    }\n  }\n}\n\n/// Selector for hover, active and focus states.\n@mixin states-selector() {\n  #{$_hover-selector},\n  #{$_focus-selector},\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n@mixin hover() {\n  #{$_hover-selector} {\n    @content;\n  }\n}\n\n// Selector for focus state. Using ':not(.mdc-ripple-upgraded)' to continue\n// applying focus styles on JS-disabled components, and control focus\n// on JS-enabled components with '.mdc-ripple-upgraded--background-focused'.\n@mixin focus() {\n  #{$_focus-selector} {\n    @content;\n  }\n}\n\n// Selector for active state. Using `:active:active` to override focus styles.\n@mixin pressed() {\n  #{$_active-selector} {\n    @content;\n  }\n}\n\n// @deprecated Use `pressed()` mixin - renamed for consistency.\n@mixin active() {\n  @include pressed() {\n    @content;\n  }\n}\n\n/// Keep the ripple (State overlay) behind the content.\n@mixin behind-content(\n  $ripple-target,\n  $content-root-selector: '&',\n  $query: feature-targeting.all()\n) {\n  // Needed for IE11. Without this, IE11 renders the state layer completely\n  // underneath the container, making it invisible.\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  #{$content-root-selector} {\n    @include feature-targeting.targets($feat-structure) {\n      z-index: 0;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, -1)\n      );\n    }\n  }\n}\n\n@function states-opacity($color, $state) {\n  $color-value: theme-color.prop-value($color);\n  $opacity-map: if(\n    theme-color.tone($color-value) == 'light',\n    $light-ink-opacities,\n    $dark-ink-opacities\n  );\n\n  @if not map.has-key($opacity-map, $state) {\n    @error \"Invalid state: '#{$state}'. Choose one of: #{map.keys($opacity-map)}\";\n  }\n\n  @return map.get($opacity-map, $state);\n}\n\n@mixin states-background-selector($ripple-target) {\n  #{$ripple-target}::before {\n    @content;\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:map';\n@use 'sass:math';\n@use '@material/animation/functions' as functions2;\n@use '@material/density/functions' as density-functions;\n@use '@material/density/variables' as density-variables;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/ripple/ripple';\n@use '@material/ripple/ripple-theme';\n@use '@material/theme/color-custom-properties';\n@use '@material/theme/custom-properties';\n@use '@material/theme/keys';\n@use '@material/theme/theme';\n@use '@material/theme/theme-color';\n@use '@material/theme/shadow-dom';\n@use '@material/touch-target/touch-target';\n@use './checkbox-custom-properties';\n\n$baseline-theme-color: secondary !default;\n$mark-color: theme-color.prop-value(on-secondary) !default;\n$border-color: rgba(theme-color.prop-value(on-surface), 0.54) !default;\n$disabled-color: rgba(theme-color.prop-value(on-surface), 0.38) !default;\n\n$ripple-size: 40px !default;\n$icon-size: 18px !default;\n$mark-stroke-size: math.div(2, 15) * $icon-size !default;\n$border-width: 2px !default;\n$transition-duration: 90ms !default;\n$item-spacing: 4px !default;\n$focus-indicator-opacity: map.get(\n  ripple-theme.$dark-ink-opacities,\n  focus\n) !default;\n\n$minimum-size: 28px !default;\n$maximum-size: $ripple-size !default;\n$density-scale: density-variables.$default-scale !default;\n$density-config: (\n  size: (\n    minimum: $minimum-size,\n    default: $ripple-size,\n    maximum: $maximum-size,\n  ),\n) !default;\n\n$ripple-target: '.mdc-checkbox__ripple';\n$custom-property-prefix: 'checkbox';\n\n// TODO(b/188417756): State layer (ripple) size token is missing including\n//     `state-layer-size`.\n// TODO(b/188529841): `selected-checkmark-color` and `disabled-selected-checkmark-color` does not exist in tokens.\n$light-theme: (\n  disabled-selected-checkmark-color: $mark-color,\n  disabled-selected-icon-color: $disabled-color,\n  disabled-selected-icon-opacity: null,\n  disabled-unselected-icon-color: $disabled-color,\n  disabled-unselected-icon-opacity: null,\n  selected-checkmark-color: $mark-color,\n  selected-focus-icon-color: $baseline-theme-color,\n  selected-focus-state-layer-color: theme-color.$on-surface,\n  selected-focus-state-layer-opacity: 0.12,\n  selected-hover-icon-color: $baseline-theme-color,\n  selected-hover-state-layer-color: $baseline-theme-color,\n  selected-hover-state-layer-opacity:\n    map.get(ripple-theme.$dark-ink-opacities, hover),\n  selected-icon-color: $baseline-theme-color,\n  selected-pressed-icon-color: $baseline-theme-color,\n  selected-pressed-state-layer-color: theme-color.$on-surface,\n  selected-pressed-state-layer-opacity:\n    map.get(ripple-theme.$dark-ink-opacities, pressed),\n  state-layer-size: $ripple-size,\n  unselected-focus-icon-color: $baseline-theme-color,\n  unselected-focus-state-layer-color: theme-color.$on-surface,\n  unselected-focus-state-layer-opacity:\n    map.get(ripple-theme.$dark-ink-opacities, focus),\n  unselected-hover-icon-color: $baseline-theme-color,\n  unselected-hover-state-layer-color: theme-color.$on-surface,\n  unselected-hover-state-layer-opacity:\n    map.get(ripple-theme.$dark-ink-opacities, hover),\n  unselected-icon-color: $border-color,\n  unselected-pressed-icon-color: $border-color,\n  unselected-pressed-state-layer-color: theme-color.$on-surface,\n  unselected-pressed-state-layer-opacity:\n    map.get(ripple-theme.$dark-ink-opacities, pressed),\n);\n\n$forced-colors-theme: (\n  disabled-selected-checkmark-color: ButtonFace,\n  disabled-selected-icon-color: GrayText,\n  disabled-selected-icon-opacity: 1,\n  disabled-unselected-icon-color: GrayText,\n  disabled-unselected-icon-opacity: 1,\n  selected-checkmark-color: ButtonText,\n);\n\n@mixin theme($theme) {\n  @include theme.validate-theme-keys($light-theme, $theme);\n  @include keys.declare-custom-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n}\n\n@mixin theme-styles($theme) {\n  @include theme.validate-theme-keys($light-theme, $theme);\n  $theme: keys.create-theme-properties(\n    $theme,\n    $prefix: $custom-property-prefix\n  );\n\n  @include disabled-container-colors(\n    $unmarked-stroke-color: map.get($theme, disabled-unselected-icon-color),\n    $marked-fill-color: map.get($theme, disabled-selected-icon-color)\n  );\n\n  @include ink-color(map.get($theme, selected-checkmark-color));\n  @include disabled-ink-color(\n    map.get($theme, disabled-selected-checkmark-color)\n  );\n\n  @include _icon-color(\n    map.get($theme, unselected-icon-color),\n    map.get($theme, selected-icon-color)\n  );\n\n  &:hover {\n    @include _icon-color(\n      map.get($theme, unselected-hover-icon-color),\n      map.get($theme, selected-hover-icon-color)\n    );\n  }\n\n  @include ripple-theme.focus() {\n    @include _icon-color(\n      map.get($theme, unselected-focus-icon-color),\n      map.get($theme, selected-focus-icon-color)\n    );\n  }\n\n  @include ripple-theme.active() {\n    @include _icon-color(\n      map.get($theme, unselected-pressed-icon-color),\n      map.get($theme, selected-pressed-icon-color)\n    );\n  }\n\n  @include ripple-color(\n    $color: map.get($theme, unselected-hover-state-layer-color),\n    $opacity-map: (\n      hover: map.get($theme, unselected-hover-state-layer-opacity),\n      focus: map.get($theme, unselected-focus-state-layer-opacity),\n      press: map.get($theme, unselected-pressed-state-layer-opacity),\n    )\n  );\n\n  @include focus-indicator-color(\n    $color: map.get($theme, selected-hover-state-layer-color),\n    $opacity-map: (\n      hover: map.get($theme, selected-hover-state-layer-opacity),\n      focus: map.get($theme, selected-focus-state-layer-opacity),\n      press: map.get($theme, selected-pressed-state-layer-opacity),\n    )\n  );\n\n  @include ripple-size(map.get($theme, state-layer-size));\n  // Set touch target to ripple size.\n  @include touch-target(\n    map.get($theme, state-layer-size),\n    map.get($theme, state-layer-size)\n  );\n}\n\n$light-theme-deprecated: (\n  density-scale: 0,\n  checkmark-color: $mark-color,\n  container-checked-color: $baseline-theme-color,\n  container-checked-hover-color: null,\n  container-disabled-color: $disabled-color,\n  outline-color: $border-color,\n  outline-hover-color: null,\n  ripple-color: theme-color.$on-surface,\n  ripple-opacity: ripple-theme.$dark-ink-opacities,\n  ripple-checked-color: $baseline-theme-color,\n  ripple-checked-opacity: ripple-theme.$dark-ink-opacities,\n);\n\n/// Sets theme to checkbox based on provided theme configuration.\n/// Only emits theme related styles.\n/// @param {Map} $theme - Theme configuration to use for theming checkbox.\n@mixin theme-deprecated($theme, $query: feature-targeting.all()) {\n  @include theme.validate-theme($light-theme-deprecated, $theme);\n\n  $ripple-color: map.get($theme, ripple-color);\n  $ripple-opacity: map.get($theme, ripple-opacity);\n  @if $ripple-opacity == null {\n    $ripple-opacity: ();\n  }\n  @if $ripple-color {\n    @include ripple-color(\n      $color: $ripple-color,\n      $opacity-map: $ripple-opacity,\n      $query: $query\n    );\n  }\n\n  $ripple-checked-color: map.get($theme, ripple-checked-color);\n  $ripple-checked-opacity: map.get($theme, ripple-checked-opacity);\n  @if $ripple-checked-opacity == null {\n    $ripple-checked-opacity: ();\n  }\n  @if $ripple-checked-color {\n    @include focus-indicator-color(\n      $color: $ripple-checked-color,\n      $opacity-map: $ripple-checked-opacity,\n      $query: $query\n    );\n  }\n\n  $density-scale: map.get($theme, density-scale);\n  @if $density-scale != null {\n    @include density($density-scale: $density-scale, $query: $query);\n  }\n\n  $outline-color: map.get($theme, outline-color);\n  $container-checked-color: map.get($theme, container-checked-color);\n  @if (\n    ($outline-color and not $container-checked-color) or\n      (not $outline-color and $container-checked-color)\n  ) {\n    @error 'Both `outline-color` and `container-checked-color` keys should be provided.';\n  }\n  @if ($outline-color and $container-checked-color) {\n    @include container-colors(\n      $unmarked-stroke-color: $outline-color,\n      $marked-stroke-color: $container-checked-color,\n      $marked-fill-color: $container-checked-color,\n      $query: $query\n    );\n  }\n\n  $outline-hover-color: map.get($theme, outline-hover-color);\n  $container-checked-hover-color: map.get(\n    $theme,\n    container-checked-hover-color\n  );\n  @if (\n    ($outline-hover-color and not $container-checked-hover-color) or\n      (not $outline-hover-color and $container-checked-hover-color)\n  ) {\n    @error 'Both `outline-hover-color` and `container-checked-hover-color` keys should be provided.';\n  }\n  @if ($outline-hover-color and $container-checked-hover-color) {\n    @include ripple-theme.states-selector() {\n      @include container-colors(\n        $unmarked-stroke-color: $outline-hover-color,\n        $marked-stroke-color: $container-checked-hover-color,\n        $marked-fill-color: $container-checked-hover-color,\n        $query: $query\n      );\n    }\n  }\n\n  $container-disabled-color: map.get($theme, container-disabled-color);\n  @if $container-disabled-color {\n    @include disabled-container-colors(\n      $unmarked-stroke-color: $container-disabled-color,\n      $marked-fill-color: $container-disabled-color,\n      $query: $query\n    );\n  }\n\n  $checkmark-color: map.get($theme, checkmark-color);\n  @if $checkmark-color {\n    @include ink-color($checkmark-color, $query: $query);\n    @include disabled-ink-color($checkmark-color, $query: $query);\n  }\n}\n\n///\n/// @param {Number | String} $density-scale - Density scale value for component.\n///     Supported density scale values `-3`, `-2`, `-1`, `0`.\n/// @return Returns ripple size of checkbox for given density scale.\n///\n@function get-ripple-size($density-scale) {\n  @return density-functions.prop-value(\n    $density-config: $density-config,\n    $density-scale: $density-scale,\n    $property-name: size\n  );\n}\n\n///\n/// Sets density scale for checkbox.\n///\n/// @param {Number | String} $density-scale - Density scale value for component. Supported density scale values\n///     `-3`, `-2`, `-1`, `0`.\n///\n@mixin density($density-scale, $query: feature-targeting.all()) {\n  $size: get-ripple-size($density-scale);\n\n  @include ripple-size($size, $query: $query);\n  @include touch-target($size, $ripple-size: $size, $query: $query);\n}\n\n/// Sets ripple size of checkbox and optionally set touch target size which can\n/// be more than the size of ripple.\n/// @param {Number} $ripple-size - Visual ripple size of checkbox.\n@mixin ripple-size($ripple-size, $query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @if $ripple-size and not custom-properties.is-custom-prop($ripple-size) {\n    $ripple-size: custom-properties.create(\n      checkbox-custom-properties.$ripple-size,\n      $ripple-size\n    );\n  }\n  $checkbox-padding: 'calc((_ripple-size - _icon-size) / 2)';\n  $replace: (\n    _ripple-size: $ripple-size,\n    _icon-size: $icon-size,\n  );\n\n  @include feature-targeting.targets($feat-structure) {\n    @include theme.property(padding, $checkbox-padding, $replace: $replace);\n  }\n\n  .mdc-checkbox__background {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(top, $checkbox-padding, $replace: $replace);\n      @include theme.property(left, $checkbox-padding, $replace: $replace);\n    }\n  }\n}\n\n/// Sets the touch target size and appropriate margin to accommodate the\n/// touch target.\n/// @param {Number} $touch-target-size Size of touch target (Native input) in `px`.\n/// @param {Number} $ripple-size Size of ripple in `px`.\n@mixin touch-target(\n  $touch-target-size,\n  $ripple-size,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @if $touch-target-size {\n    @if not custom-properties.is-custom-prop($touch-target-size) {\n      $touch-target-size: custom-properties.create(\n        checkbox-custom-properties.$touch-target-size,\n        $touch-target-size\n      );\n    }\n\n    $margin: 'calc((_touch-target-size - _ripple-size) / 2)';\n    $replace: (\n      _touch-target-size: $touch-target-size,\n      _ripple-size: $ripple-size,\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(margin, $margin, $replace: $replace);\n    }\n\n    $offset: 'calc((_ripple-size - _touch-target-size) / 2)';\n\n    @include feature-targeting.targets($feat-structure) {\n      .mdc-checkbox__native-control {\n        @include theme.property(top, $offset, $replace: $replace);\n        @include theme.property(right, $offset, $replace: $replace);\n        @include theme.property(left, $offset, $replace: $replace);\n        @include theme.property(width, $touch-target-size);\n        @include theme.property(height, $touch-target-size);\n      }\n    }\n  }\n}\n\n@mixin _icon-color($unselected-color, $selected-color) {\n  @if $unselected-color and $selected-color {\n    @include container-colors(\n      $unmarked-stroke-color: $unselected-color,\n      $marked-stroke-color: $selected-color,\n      $marked-fill-color: $selected-color\n    );\n  } @else if $unselected-color or $selected-color {\n    @error 'Both unselected and selected icon colors should be provided.';\n  }\n}\n\n///\n/// Sets stroke & fill colors for both marked and unmarked state of enabled checkbox.\n/// Set $generate-keyframes to false to prevent the mixin from generating @keyframes\n/// @param {Color} $unmarked-stroke-color - The desired stroke color for the unmarked state\n/// @param {Color} $unmarked-fill-color - The desired fill color for the unmarked state\n/// @param {Color} $marked-stroke-color - The desired stroke color for the marked state\n/// @param {Color} $marked-fill-color - The desired fill color for the marked state\n/// @param {Boolean} $generate-keyframes [true] - Whether animation keyframes should be generated\n///\n@mixin container-colors(\n  $unmarked-stroke-color: $border-color,\n  $unmarked-fill-color: transparent,\n  $marked-stroke-color: $baseline-theme-color,\n  $marked-fill-color: $baseline-theme-color,\n  $generate-keyframes: true,\n  $query: feature-targeting.all()\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-color: feature-targeting.create-target($query, color);\n\n  // Unchecked colors\n  @if (\n    $unmarked-stroke-color and not\n      custom-properties.is-custom-prop($unmarked-stroke-color)\n  ) {\n    $unmarked-stroke-color: custom-properties.create(\n      checkbox-custom-properties.$unchecked-color,\n      theme-color.prop-value($unmarked-stroke-color)\n    );\n  }\n\n  @include if-unmarked-enabled_ {\n    @include container-colors_(\n      $unmarked-stroke-color,\n      $unmarked-fill-color,\n      $query: $query\n    );\n  }\n\n  // Checked colors\n  @if (\n    $marked-stroke-color and not\n      custom-properties.is-custom-prop($marked-stroke-color)\n  ) {\n    $marked-stroke-color: custom-properties.create(\n      checkbox-custom-properties.$checked-color,\n      custom-properties.create(\n        color-custom-properties.$secondary,\n        theme-color.prop-value($marked-stroke-color)\n      )\n    );\n  }\n  @if (\n    $marked-fill-color and not\n      custom-properties.is-custom-prop($marked-fill-color)\n  ) {\n    $marked-fill-color: custom-properties.create(\n      checkbox-custom-properties.$checked-color,\n      custom-properties.create(\n        color-custom-properties.$secondary,\n        theme-color.prop-value($marked-fill-color)\n      )\n    );\n  }\n\n  @include if-marked-enabled_ {\n    @include container-colors_(\n      $marked-stroke-color,\n      $marked-fill-color,\n      $query: $query\n    );\n  }\n\n  @if $generate-keyframes and\n    $unmarked-stroke-color and\n    $marked-stroke-color and\n    $unmarked-fill-color and\n    $marked-fill-color\n  {\n    $uid: theme-color.color-hash($unmarked-stroke-color) +\n      theme-color.color-hash($marked-stroke-color) +\n      theme-color.color-hash($unmarked-fill-color) +\n      theme-color.color-hash($marked-fill-color);\n\n    $anim-selector: if(&, '&.mdc-checkbox--anim', '.mdc-checkbox--anim');\n\n    @include feature-targeting.targets($feat-animation, $feat-color) {\n      @include container-keyframes_(\n        $from-stroke-color: $unmarked-stroke-color,\n        $to-stroke-color: $marked-stroke-color,\n        $from-fill-color: $unmarked-fill-color,\n        $to-fill-color: $marked-fill-color,\n        $uid: #{$uid}\n      );\n    }\n\n    #{$anim-selector} {\n      &-unchecked-checked,\n      &-unchecked-indeterminate {\n        .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n          @include feature-targeting.targets($feat-animation) {\n            animation-name: mdc-checkbox-fade-in-background-#{$uid};\n          }\n        }\n      }\n\n      &-checked-unchecked,\n      &-indeterminate-unchecked {\n        .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n          @include feature-targeting.targets($feat-animation) {\n            animation-name: mdc-checkbox-fade-out-background-#{$uid};\n          }\n        }\n      }\n    }\n  }\n}\n\n///\n/// Sets stroke & fill colors for both marked and unmarked state of disabled checkbox.\n/// @param {Color} $unmarked-stroke-color - The desired stroke color for the unmarked state\n/// @param {Color} $unmarked-fill-color - The desired fill color for the unmarked state\n/// @param {Color} $marked-stroke-color - The desired stroke color for the marked state\n/// @param {Color} $marked-fill-color - The desired fill color for the marked state\n///\n@mixin disabled-container-colors(\n  $unmarked-stroke-color: $disabled-color,\n  $unmarked-fill-color: transparent,\n  $marked-stroke-color: transparent,\n  $marked-fill-color: $disabled-color,\n  $query: feature-targeting.all()\n) {\n  @if (\n    $unmarked-stroke-color and not\n      custom-properties.is-custom-prop($unmarked-stroke-color)\n  ) {\n    $unmarked-stroke-color: custom-properties.create(\n      checkbox-custom-properties.$disabled-color,\n      theme-color.prop-value($unmarked-stroke-color)\n    );\n  }\n\n  @if $unmarked-stroke-color == null {\n    $unmarked-fill-color: null;\n  }\n\n  @include if-unmarked-disabled_ {\n    @include container-colors_(\n      $unmarked-stroke-color,\n      $unmarked-fill-color,\n      $query: $query\n    );\n  }\n\n  @if (\n    $marked-fill-color and not\n      custom-properties.is-custom-prop($marked-fill-color)\n  ) {\n    $marked-fill-color: custom-properties.create(\n      checkbox-custom-properties.$disabled-color,\n      theme-color.prop-value($marked-fill-color)\n    );\n  }\n\n  @if $marked-fill-color and\n    custom-properties.get-fallback($marked-fill-color) ==\n    GrayText\n  {\n    // Transparent appears white in HCM\n    $marked-stroke-color: GrayText;\n  }\n\n  @if $marked-fill-color == null {\n    $marked-stroke-color: null;\n  }\n\n  @include if-marked-disabled_ {\n    @include container-colors_(\n      $marked-stroke-color,\n      $marked-fill-color,\n      $query: $query\n    );\n  }\n}\n\n///\n/// Sets the ink color of the checked and indeterminate icons for an enabled checkbox\n/// @param {Color} $color - The desired ink color in enabled state\n///\n@mixin ink-color($color, $query: feature-targeting.all()) {\n  @if ($color and not custom-properties.is-custom-prop($color)) {\n    $color: custom-properties.create(\n      checkbox-custom-properties.$ink-color,\n      $color\n    );\n  }\n\n  @include if-enabled_ {\n    @include ink-color_($color, $query: $query);\n  }\n}\n\n///\n/// Sets the ink color of the checked and indeterminate icons for a disabled checkbox\n/// @param {Color} $color - The desired ink color in disabled state\n///\n@mixin disabled-ink-color($color, $query: feature-targeting.all()) {\n  @if ($color and not custom-properties.is-custom-prop($color)) {\n    $color: custom-properties.create(\n      checkbox-custom-properties.$ink-color,\n      $color\n    );\n  }\n\n  @include if-disabled_ {\n    @include ink-color_($color, $query: $query);\n  }\n}\n\n/// Sets ripple color when checkbox is not in checked state.\n@mixin ripple-color(\n  $color,\n  $opacity-map: null,\n  $query: feature-targeting.all()\n) {\n  @include ripple-theme.states(\n    $color: $color,\n    $opacity-map: $opacity-map,\n    $query: $query,\n    $ripple-target: $ripple-target\n  );\n}\n\n/// Sets focus indicator color when checkbox is in checked state.\n@mixin focus-indicator-color(\n  $color,\n  $opacity-map: null,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  &.mdc-checkbox--selected {\n    @include ripple-theme.states(\n      $color: $color,\n      $opacity-map: $opacity-map,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n\n  &.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected {\n    @include ripple-theme.states-base-color(\n      $color: $color,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n//\n// Private\n//\n\n///\n/// Helps select the checkbox background only when its native control is in\n/// enabled state.\n/// @access private\n///\n@mixin if-enabled_ {\n  .mdc-checkbox__native-control:enabled ~ {\n    @content;\n  }\n}\n\n///\n/// Helps select the checkbox background only when its native control is in\n/// disabled state.\n/// @access private\n///\n@mixin if-disabled_ {\n  .mdc-checkbox__native-control:disabled ~ {\n    @content;\n  }\n}\n\n///\n/// Helps select the checkbox background only when its native control is in\n/// unmarked & enabled state.\n/// @access private\n///\n@mixin if-unmarked-enabled_ {\n  .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate='true'])\n    ~ {\n    @content;\n  }\n}\n\n///\n/// Helps select the checkbox background only when its native control is in\n/// unmarked & disabled state.\n/// @access private\n///\n@mixin if-unmarked-disabled_ {\n  // Note: we must use `[disabled]` instead of `:disabled` below because Edge does not always recalculate the style\n  // property when the `:disabled` pseudo-class is followed by a sibling combinator. See:\n  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11295231/\n  .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate='true'])\n    ~ {\n    @content;\n  }\n}\n\n///\n/// Helps select the checkbox background only when its native control is in\n/// marked & enabled state.\n/// @access private\n///\n@mixin if-marked-enabled_ {\n  .mdc-checkbox__native-control:enabled:checked,\n  .mdc-checkbox__native-control:enabled:indeterminate,\n  .mdc-checkbox__native-control[data-indeterminate='true']:enabled {\n    ~ {\n      @content;\n    }\n  }\n}\n\n///\n/// Helps select the checkbox background only when its native control is in\n/// marked & disabled state.\n/// @access private\n///\n@mixin if-marked-disabled_ {\n  // Note: we must use `[disabled]` instead of `:disabled` below because Edge does not always recalculate the style\n  // property when the `:disabled` pseudo-class is followed by a sibling combinator. See:\n  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11295231/\n  .mdc-checkbox__native-control[disabled]:checked,\n  .mdc-checkbox__native-control[disabled]:indeterminate,\n  .mdc-checkbox__native-control[data-indeterminate='true'][disabled] {\n    ~ {\n      @content;\n    }\n  }\n}\n\n///\n/// Sets the stroke & fill colors for the checkbox.\n/// This mixin should be wrapped in a mixin that qualifies state such as\n/// `mdc-checkbox-if-unmarked-enabled_`.\n/// @access private\n///\n@mixin container-colors_(\n  $stroke-color,\n  $fill-color,\n  $query: feature-targeting.all()\n) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-checkbox__background {\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(border-color, $stroke-color);\n      @include theme.property(background-color, $fill-color);\n    }\n  }\n}\n\n///\n/// Sets the ink color of the checked and indeterminate icons for a checkbox.\n/// This mixin should be wrapped in a mixin that qualifies state such as\n/// `mdc-checkbox-if-unmarked_`.\n/// @access private\n///\n@mixin ink-color_($color, $query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n\n  .mdc-checkbox__background {\n    .mdc-checkbox__checkmark {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(color, $color);\n      }\n    }\n\n    .mdc-checkbox__mixedmark {\n      @include feature-targeting.targets($feat-color) {\n        @include theme.property(border-color, $color);\n      }\n    }\n  }\n}\n\n@mixin container-keyframes_(\n  $from-stroke-color,\n  $to-stroke-color,\n  $from-fill-color,\n  $to-fill-color,\n  $uid\n) {\n  @keyframes mdc-checkbox-fade-in-background-#{$uid} {\n    0% {\n      @include theme.property(border-color, $from-stroke-color);\n      @include theme.property(background-color, $from-fill-color);\n    }\n\n    50% {\n      @include theme.property(border-color, $to-stroke-color);\n      @include theme.property(background-color, $to-fill-color);\n    }\n  }\n\n  @keyframes mdc-checkbox-fade-out-background-#{$uid} {\n    0%,\n    80% {\n      @include theme.property(border-color, $to-stroke-color);\n      @include theme.property(background-color, $to-fill-color);\n    }\n\n    100% {\n      @include theme.property(border-color, $from-stroke-color);\n      @include theme.property(background-color, $from-fill-color);\n    }\n  }\n}\n","//\n// Copyright 2019 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use '@material/base/mixins' as base-mixins;\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n\n$height: 48px !default;\n$width: $height !default;\n\n/// Styles applied to the component's touch target wrapper element.\n@mixin wrapper($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-touch-target-wrapper {\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that styles are only emitted once across all components that\n      // have increased touch targets.\n      @include base-mixins.emit-once('mdc-touch-target/wrapper') {\n        // NOTE: Will change to `inline-block` in the future, but keeping as is\n        // temporarily for backwards-compatibility.\n        display: inline;\n      }\n    }\n  }\n}\n\n/// Styles applied to the component's inner touch target element.\n/// By default, only sets the inner element height to the minimum touch target\n/// height ($mdc-touch-target-height).\n/// @param {Boolean} $set-width [false] - Sets the inner element width to the\n///     minimum touch target width ($mdc-touch-target-width).\n/// @param $height [$mdc-touch-target-height] - Touch target height.\n/// @param $width [$mdc-touch-target-width] - Touch target width.\n@mixin touch-target(\n  $set-width: false,\n  $query: feature-targeting.all(),\n  $height: $height,\n  $width: $width\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 50%;\n    height: $height;\n  }\n\n  @if $set-width {\n    @include feature-targeting.targets($feat-structure) {\n      @include rtl.ignore-next-line();\n      left: 50%;\n      width: $width;\n      transform: translate(-50%, -50%);\n    }\n  } @else {\n    @include feature-targeting.targets($feat-structure) {\n      left: 0;\n      right: 0;\n      transform: translateY(-50%);\n    }\n  }\n}\n\n/// Applies margin to the component with the increased touch target,\n/// to compensate for the touch target.\n@mixin margin(\n  $component-height,\n  $component-width: null,\n  $touch-target-height: $height,\n  $touch-target-width: $width,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  $vertical-margin-value: math.div($touch-target-height - $component-height, 2);\n\n  @include feature-targeting.targets($feat-structure) {\n    margin-top: $vertical-margin-value;\n    margin-bottom: $vertical-margin-value;\n  }\n\n  @if $component-width {\n    $horizontal-margin-value: math.div(\n      $touch-target-width - $component-width,\n      2\n    );\n\n    @include feature-targeting.targets($feat-structure) {\n      margin-right: $horizontal-margin-value;\n      margin-left: $horizontal-margin-value;\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n$deceleration-curve-timing-function: cubic-bezier(0, 0, 0.2, 1) !default;\n$standard-curve-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;\n$acceleration-curve-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;\n$sharp-curve-timing-function: cubic-bezier(0.4, 0, 0.6, 1) !default;\n\n@function enter($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $deceleration-curve-timing-function;\n}\n\n@function exit-permanent($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $acceleration-curve-timing-function;\n}\n\n@function exit-temporary($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $sharp-curve-timing-function;\n}\n\n@function standard($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay $standard-curve-timing-function;\n}\n\n@function linear($name, $duration, $delay: 0ms) {\n  @return $name $duration $delay linear;\n}\n","//\n// Copyright 2021 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/dom/dom';\n\n$ring-radius-default: 8px !default;\n$inner-ring-width-default: 2px !default;\n$inner-ring-color-default: transparent !default;\n$outer-ring-width-default: 2px !default;\n$outer-ring-color-default: transparent !default;\n$container-outer-padding-default: 2px !default;\n\n/// Styles applied to the component's inner focus ring element.\n///\n/// @param $ring-radius [$ring-radius-default] - Focus ring radius.\n/// @param $inner-ring-width [$inner-ring-width-default] - Inner focus ring width.\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n/// @param $outer-ring-color [$outer-ring-color-default] - Outer focus ring color.\n/// @param $container-outer-padding [$container-outer-padding-default] - The\n///     distance between the focus ring and the container.\n@mixin focus-ring(\n  $query: feature-targeting.all(),\n  $ring-radius: $ring-radius-default,\n  $inner-ring-width: $inner-ring-width-default,\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-width: $outer-ring-width-default,\n  $outer-ring-color: $outer-ring-color-default,\n  $container-outer-padding-vertical: $container-outer-padding-default,\n  $container-outer-padding-horizontal: $container-outer-padding-default\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  $container-size-vertical: 100%;\n  @if $container-outer-padding-vertical != 0 {\n    $container-size-vertical: calc(\n      100% + #{$container-outer-padding-vertical * 2}\n    );\n  }\n  $container-size-horizontal: 100%;\n  @if $container-outer-padding-horizontal != 0 {\n    $container-size-horizontal: calc(\n      100% + #{$container-outer-padding-horizontal * 2}\n    );\n  }\n  $outer-ring-size: 100%;\n  @if $outer-ring-width > 0 {\n    $outer-ring-size: calc(100% + #{$outer-ring-width * 2});\n  }\n  @include feature-targeting.targets($feat-structure) {\n    pointer-events: none;\n    border: $inner-ring-width solid $inner-ring-color;\n    border-radius: $ring-radius - $outer-ring-width;\n    box-sizing: content-box;\n    position: absolute;\n    top: 50%;\n    @include rtl.ignore-next-line();\n    left: 50%;\n    @include rtl.ignore-next-line();\n    transform: translate(-50%, -50%);\n    height: $container-size-vertical;\n    width: $container-size-horizontal;\n\n    @include dom.forced-colors-mode($exclude-ie11: true) {\n      border-color: CanvasText;\n    }\n\n    &::after {\n      content: '';\n      border: $outer-ring-width solid $outer-ring-color;\n      border-radius: $ring-radius;\n      display: block;\n      position: absolute;\n      top: 50%;\n      @include rtl.ignore-next-line();\n      left: 50%;\n      @include rtl.ignore-next-line();\n      transform: translate(-50%, -50%);\n      height: $outer-ring-size;\n      width: $outer-ring-size;\n\n      @include dom.forced-colors-mode($exclude-ie11: true) {\n        border-color: CanvasText;\n      }\n    }\n  }\n}\n/// Customizes the color of the button focus ring.\n///\n/// @param $inner-ring-color [$inner-ring-color-default] - Inner focus ring color.\n/// @param $outer-ring-width [$outer-ring-width-default] - Outer focus ring width.\n@mixin focus-ring-color(\n  $inner-ring-color: $inner-ring-color-default,\n  $outer-ring-color: $outer-ring-color-default\n) {\n  border-color: $inner-ring-color;\n\n  &::after {\n    border-color: $outer-ring-color;\n  }\n}\n\n/// Customizes the border radius of the button focus ring.\n///\n/// @param {Number} $ring-radius - The border radius of the focus ring.\n/// @param {Number} $outer-ring-width [$outer-ring-width] - Width of the outer\n///     ring, required to compute the radius for the inner ring.\n@mixin focus-ring-radius(\n  $ring-radius,\n  $outer-ring-width: $outer-ring-width-default,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    border-radius: $ring-radius - $outer-ring-width;\n\n    &::after {\n      border-radius: $ring-radius;\n    }\n  }\n}\n","// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n@use '@material/feature-targeting/feature-targeting';\n///\n/// Emits necessary layout styles to set a transparent border around an element\n/// without interfering with the rest of its component layout. The border is\n/// only visible in high-contrast mode. The target element should be a child of\n/// a relatively positioned top-level element (i.e. a ::before pseudo-element).\n///\n/// @param {number} $border-width - The width of the transparent border.\n/// @param {string} $border-style - The style of the transparent border.\n///\n@mixin transparent-border(\n  $border-width: 1px,\n  $border-style: solid,\n  $query: feature-targeting.all()\n) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: $border-width $border-style transparent;\n    border-radius: inherit;\n    content: '';\n    pointer-events: none;\n  }\n\n  // Used to satisfy Firefox v94 which does not render transparent borders in HCM (b/206440838).\n  @include forced-colors-mode($exclude-ie11: true) {\n    @include feature-targeting.targets($feat-structure) {\n      border-color: CanvasText;\n    }\n  }\n}\n\n///\n/// Visually hides text content for accessibility. This text should only be\n/// visible to screen reader users.\n/// See https://a11yproject.com/posts/how-to-hide-content/\n///\n@mixin visually-hidden($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap; /* added line */\n    width: 1px;\n  }\n}\n\n/// Selects for IE11 support.\n///\n/// @content styles to emit for IE11 support\n@mixin ie11-support {\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    @content;\n  }\n}\n\n/// Selects for `forced-colors` high contrast mode.\n///\n/// While in `forced-colors` mode, only system colors should be used.\n///\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors\n/// @link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors\n/// @content styles to emit in `forced-colors` mode\n@mixin forced-colors-mode($exclude-ie11: false) {\n  @if $exclude-ie11 {\n    @media screen and (forced-colors: active) {\n      @content;\n    }\n  } @else {\n    @media screen and (forced-colors: active), (-ms-high-contrast: active) {\n      @content;\n    }\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use 'sass:math';\n@use 'sass:color';\n@use 'sass:map';\n@use '@material/animation/functions' as functions2;\n@use '@material/animation/variables' as variables2;\n@use '@material/base/mixins' as base-mixins;\n@use '@material/theme/custom-properties';\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use './ripple-theme';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  @include static-styles($query: $query);\n\n  .mdc-ripple-surface {\n    @include ripple-theme.states($query: $query);\n  }\n}\n\n@mixin static-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-ripple-surface {\n    @include surface($query: $query);\n    @include radius-bounded($query: $query);\n    @include surface-styles($query: $query);\n  }\n\n  .mdc-ripple-surface[data-mdc-ripple-is-unbounded],\n  .mdc-ripple-upgraded--unbounded {\n    @include radius-unbounded($query: $query);\n    @include unbounded-styles($query: $query);\n  }\n}\n\n/// Sets all states (including hover, focus, press, activated and selected) with\n/// given color as base color.\n///\n/// This mixin is for internal use only. Use `ripple-theme.states($color)` mixin\n/// to set interactive states (hover, focus & press) color.\n///\n/// @param {Color|String} $color - Target base color. Can be valid CSS color or\n///     a color string literal (i.e., `primary`, `secondary`, etc).\n@mixin states-for-color($color, $query: feature-targeting.all()) {\n  @include ripple-theme.states($color, $query: $query);\n  @include ripple-theme.states-activated($color, $query: $query);\n  @include ripple-theme.states-selected($color, $query: $query);\n}\n\n@mixin surface-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: relative;\n    outline: none;\n    overflow: hidden;\n  }\n}\n\n@mixin unbounded-styles($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n  @include feature-targeting.targets($feat-structure) {\n    overflow: visible;\n  }\n}\n\n@mixin common($query: feature-targeting.all()) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n\n  // Ensure that styles needed by any component using MDC Ripple are emitted, but only once.\n  // (Every component using MDC Ripple imports these mixins, but doesn't necessarily import\n  // mdc-ripple.scss.)\n  @include feature-targeting.targets($feat-animation) {\n    @include base-mixins.emit-once('mdc-ripple/common/animation') {\n      @include keyframes_;\n    }\n  }\n}\n\n@mixin surface(\n  $query: feature-targeting.all(),\n  $ripple-target: '&',\n  $include-will-change: true // TODO(b/151931961): Remove once resolved\n) {\n  $feat-animation: feature-targeting.create-target($query, animation);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    // TODO(b/151931961): Remove the following block once resolved\n    @if $include-will-change {\n      will-change: transform, opacity;\n    }\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: '';\n    }\n  }\n\n  #{$ripple-target}::before {\n    @include feature-targeting.targets($feat-animation) {\n      // Also transition background-color to avoid unnatural color flashes when toggling activated/selected state\n      transition: opacity ripple-theme.$states-wash-duration linear,\n        background-color ripple-theme.$states-wash-duration linear;\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      // Ensure that the ripple wash for hover/focus states is displayed on top of positioned child elements\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 1)\n      );\n    }\n  }\n\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-structure) {\n      @include theme.property(\n        z-index,\n        custom-properties.create(--mdc-ripple-z-index, 0)\n      );\n    }\n  }\n\n  // Common styles for upgraded surfaces (some of these depend on custom properties set via JS or other mixins)\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before {\n      @include feature-targeting.targets($feat-structure) {\n        transform: scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: 0;\n        @include rtl.ignore-next-line();\n        left: 0;\n        transform: scale(0);\n        transform-origin: center center;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--unbounded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-structure) {\n        top: var(--mdc-ripple-top, 0);\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, 0);\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-activation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-radius-in ripple-theme.$translate-duration\n            forwards,\n          mdc-ripple-fg-opacity-in ripple-theme.$fade-in-duration forwards;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-deactivation {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-animation) {\n        animation: mdc-ripple-fg-opacity-out ripple-theme.$fade-out-duration;\n      }\n\n      @include feature-targeting.targets($feat-structure) {\n        // Retain transform from mdc-ripple-fg-radius-in activation\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n          scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n  }\n}\n\n@mixin radius-bounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{$radius});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{$radius});\n      width: $radius * 2;\n      height: $radius * 2;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n@mixin radius-unbounded(\n  $radius: 100%,\n  $query: feature-targeting.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting.targets($feat-struture) {\n      top: calc(50% - #{math.div($radius, 2)});\n      @include rtl.ignore-next-line();\n      left: calc(50% - #{math.div($radius, 2)});\n      width: $radius;\n      height: $radius;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        top: var(--mdc-ripple-top, calc(50% - #{math.div($radius, 2)}));\n        @include rtl.ignore-next-line();\n        left: var(--mdc-ripple-left, calc(50% - #{math.div($radius, 2)}));\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n// Common styles for a ripple target element.\n// Used for components which have an inner ripple target element.\n@mixin target-common($query: feature-targeting.all()) {\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  @include feature-targeting.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    // Necessary for clicks on other inner elements (e.g. close icon in chip)\n    // to go through.\n    pointer-events: none;\n  }\n}\n\n@mixin keyframes_ {\n  @keyframes mdc-ripple-fg-radius-in {\n    from {\n      animation-timing-function: variables2.$standard-curve-timing-function;\n      // NOTE: For these keyframes, we do not need custom property fallbacks because they are only\n      // used in conjunction with `.mdc-ripple-upgraded`. Since MDCRippleFoundation checks to ensure\n      // that custom properties are supported within the browser before adding this class, we can\n      // safely use them without a fallback.\n      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    }\n\n    to {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n        scale(var(--mdc-ripple-fg-scale, 1));\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-in {\n    from {\n      animation-timing-function: linear;\n      opacity: 0;\n    }\n\n    to {\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-out {\n    from {\n      animation-timing-function: linear;\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n}\n","//\n// Copyright 2019 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// stylelint-disable selector-class-pattern --\n// Selector '.mdc-*' should only be used in this project.\n\n@use '@material/feature-targeting/feature-targeting';\n@use '@material/rtl/rtl';\n@use '@material/theme/theme';\n@use '@material/typography/typography';\n@use './variables';\n\n@mixin core-styles($query: feature-targeting.all()) {\n  $feat-color: feature-targeting.create-target($query, color);\n  $feat-structure: feature-targeting.create-target($query, structure);\n\n  .mdc-form-field {\n    @include typography.typography(body2, $query);\n\n    @include feature-targeting.targets($feat-color) {\n      @include theme.property(color, text-primary-on-background);\n    }\n\n    @include feature-targeting.targets($feat-structure) {\n      display: inline-flex;\n      align-items: center;\n      vertical-align: middle;\n    }\n\n    > label {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.reflexive-property(margin, 0, auto);\n        @include rtl.reflexive-property(padding, variables.$item-spacing, 0);\n\n        order: 0;\n      }\n    }\n  }\n\n  .mdc-form-field--nowrap {\n    > label {\n      @include feature-targeting.targets($feat-structure) {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n    }\n  }\n\n  .mdc-form-field--align-end {\n    > label {\n      @include feature-targeting.targets($feat-structure) {\n        @include rtl.reflexive-property(margin, auto, 0);\n        @include rtl.reflexive-property(padding, 0, variables.$item-spacing);\n\n        order: -1;\n      }\n    }\n  }\n\n  .mdc-form-field--space-between {\n    @include feature-targeting.targets($feat-structure) {\n      justify-content: space-between;\n    }\n\n    > label {\n      @include feature-targeting.targets($feat-structure) {\n        margin: 0;\n\n        @include rtl.rtl {\n          // RTL needed for specificity\n          margin: 0;\n        }\n      }\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use 'sass:list';\n@use 'sass:meta';\n@use 'sass:selector';\n@use '@material/theme/gss';\n@use '@material/theme/selector-ext';\n@use '@material/theme/theme';\n\n$include: true !default;\n\n/// Creates a rule that will be applied when a component is within the context\n/// of an RTL layout.\n///\n/// @example - scss\n/// .mdc-foo {\n///   padding-left: 4px;\n///\n///   @include rtl {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n/// }\n///\n/// @example - css\n///   .mdc-foo {\n///     padding-left: 4px;\n///   }\n///\n///   [dir=\"rtl\"] .mdc-foo,\n///   .mdc-foo[dir=\"rtl\"] {\n///     padding-left: auto;\n///     padding-right: 4px;\n///   }\n///\n/// Note that this mixin works by checking for an ancestor element with\n/// `[dir=\"rtl\"]`. As a result, nested `dir` values are not supported:\n///\n/// @example - html\n/// <html dir=\"rtl\">\n///   <!-- ... -->\n///   <div dir=\"ltr\">\n///     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n///   </div>\n/// </html>\n///\n/// In the future, selectors such as the `:dir` pseudo-class\n/// (http://mdn.io/css/:dir) will help us mitigate this.\n///\n/// @content Content to be styled in an RTL context.\n@mixin rtl() {\n  @if ($include) {\n    $dir-rtl: '[dir=rtl]';\n\n    $rtl-selectors: list.join(\n      selector.nest($dir-rtl, &),\n      selector-ext.append-strict(&, $dir-rtl)\n    );\n\n    @at-root {\n      #{$rtl-selectors} {\n        /*rtl:begin:ignore*/\n        @content;\n        /*rtl:end:ignore*/\n      }\n    }\n  }\n}\n\n// Takes a base box-model property name (`margin`, `border`, `padding`, etc.) along with a\n// default direction (`left` or `right`) and value, and emits rules which apply the given value to the\n// specified direction by default and the opposite direction in RTL.\n//\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, left, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 8px;\n//   margin-right: 0;\n//\n//   @include rtl {\n//     margin-left: 0;\n//     margin-right: 8px;\n//   }\n// }\n// ```\n//\n// whereas:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, right, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 0;\n//   margin-right: 8px;\n//\n//   @include rtl {\n//     margin-left: 8px;\n//     margin-right: 0;\n//   }\n// }\n// ```\n//\n// You can also pass an optional 4th `$root-selector` argument which will be forwarded to `mdc-rtl`,\n// e.g. `@include rtl-reflexive-box(margin, left, 8px, '.mdc-component')`.\n//\n// Note that this function will always zero out the original value in an RTL context.\n// If you're trying to flip the values, use `mdc-rtl-reflexive-property()` instead.\n@mixin reflexive-box(\n  $base-property,\n  $default-direction,\n  $value,\n  $replace: null\n) {\n  @if (list.index((right, left), $default-direction) == null) {\n    @error \"Invalid default direction: '#{$default-direction}'. Please specifiy either 'right' or 'left'.\";\n  }\n\n  $left-value: $value;\n  $right-value: 0;\n\n  @if ($default-direction == right) {\n    $left-value: 0;\n    $right-value: $value;\n  }\n\n  @include reflexive-property(\n    $base-property,\n    $left-value,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n// <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-property(margin, auto, 12px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: auto;\n//   margin-right: 12px;\n//\n//   @include rtl {\n//     margin-left: 12px;\n//     margin-right: auto;\n//   }\n// }\n// ```\n//\n// An optional 4th `$root-selector` argument can be given, which will be passed to `mdc-rtl`.\n@mixin reflexive-property(\n  $base-property,\n  $left-value,\n  $right-value,\n  $replace: null\n) {\n  $prop-left: #{$base-property}-left;\n  $prop-right: #{$base-property}-right;\n\n  @include reflexive(\n    $prop-left,\n    $left-value,\n    $prop-right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes an argument specifying a horizontal position property (either 'left' or 'right') as well\n// as a value, and applies that value to the specified position in a LTR context, and flips it in a\n// RTL context. For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-position(left, 0);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 0;\n//   right: initial;\n//\n//   @include rtl {\n//     left: initial;\n//     right: 0;\n//   }\n// }\n// ```\n//\n// An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive-position($position-property, $value, $replace: null) {\n  @if (list.index((right, left), $position-property) == null) {\n    @error \"Invalid position #{position-property}. Please specifiy either right or left\";\n  }\n\n  // TODO: 'initial' is not supported in IE 11. https://caniuse.com/#feat=css-initial-value\n  $left-value: $value;\n  $right-value: initial;\n\n  @if ($position-property == right) {\n    $right-value: $value;\n    $left-value: initial;\n  }\n\n  @include reflexive(\n    left,\n    $left-value,\n    right,\n    $right-value,\n    $replace: $replace\n  );\n}\n\n// Takes pair of properties with values as arguments and flips it in RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive(left, 2px, right, 5px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 2px;\n//   right: 5px;\n//\n//   @include rtl {\n//     right: 2px;\n//     left: 5px;\n//   }\n// }\n// ```\n//\n// An optional fifth `$root-selector` argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive(\n  $left-property,\n  $left-value,\n  $right-property,\n  $right-value,\n  $replace: null\n) {\n  $left-replace: null;\n  $right-replace: null;\n  @if $replace {\n    @if meta.type-of($left-value) == 'string' {\n      $left-replace: $replace;\n    }\n\n    @if meta.type-of($right-value) == 'string' {\n      $right-replace: $replace;\n    }\n\n    @if $left-replace == null and $right-replace == null {\n      @error 'mdc-rtl: $replace may only be used with strings but neither left nor right values are strings.';\n    }\n\n    // If any replacements are null, treat the entire value as null (do not\n    // emit anything).\n    @each $name, $replacement in $replace {\n      @if $replacement == null {\n        $left-value: null;\n        $right-value: null;\n      }\n    }\n  }\n\n  // Do not emit if either value are null\n  @if $left-value and $right-value {\n    @include _property($left-property, $left-value, $replace: $left-replace);\n    @include _property($right-property, $right-value, $replace: $right-replace);\n\n    @include rtl {\n      @include _property(\n        $left-property,\n        $right-value,\n        $replace: $right-replace\n      );\n      @include _property($right-property, $left-value, $replace: $left-replace);\n    }\n  }\n}\n\n///\n/// Adds RTL ignore annotation when `$mdc-rtl-include` is true.\n///\n@mixin ignore-next-line() {\n  @include gss.annotate(\n    (\n      noflip: $include,\n    )\n  );\n}\n\n///\n/// Adds `@noflip` annotation when `$mdc-rtl-include` is true.\n///\n/// @param {String} $property\n/// @param {String} $value\n/// @param {Map} $replace\n///\n@mixin _property($property, $value, $replace: null) {\n  @include theme.property(\n    $property,\n    $value,\n    $replace: $replace,\n    $gss: (noflip: $include)\n  );\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/documentation/checkbox/checkbox.scss":
/*!**************************************************!*\
  !*** ./src/documentation/checkbox/checkbox.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./checkbox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/documentation/checkbox/checkbox.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  !*** ./src/documentation/checkbox/checkbox.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.scss */ "./src/documentation/checkbox/checkbox.scss");
/* harmony import */ var _material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/form-field */ "./node_modules/@material/form-field/component.js");
/* harmony import */ var _material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/checkbox */ "./node_modules/@material/checkbox/component.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

console.log("check here1");


var checkbox = document.querySelectorAll('.mdc-checkbox');
var _iterator = _createForOfIteratorHelper(checkbox),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var item = _step.value;
    new _material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MDCCheckbox.attachTo(item);
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
formField.input = checkbox;
})();

/******/ })()
;
//# sourceMappingURL=checkboxe5209b95f86c013d76ab.js.map