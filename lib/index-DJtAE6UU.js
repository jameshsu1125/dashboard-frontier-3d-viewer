var ck = Object.defineProperty;
var fk = (z, H, b) => H in z ? ck(z, H, { enumerable: !0, configurable: !0, writable: !0, value: b }) : z[H] = b;
var ju = (z, H, b) => (fk(z, typeof H != "symbol" ? H + "" : H, b), b);
var dk = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fR(z) {
  return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, "default") ? z.default : z;
}
function Yk(z) {
  if (z.__esModule)
    return z;
  var H = z.default;
  if (typeof H == "function") {
    var b = function Ce() {
      return this instanceof Ce ? Reflect.construct(H, arguments, this.constructor) : H.apply(this, arguments);
    };
    b.prototype = H.prototype;
  } else
    b = {};
  return Object.defineProperty(b, "__esModule", { value: !0 }), Object.keys(z).forEach(function(Ce) {
    var oe = Object.getOwnPropertyDescriptor(z, Ce);
    Object.defineProperty(b, Ce, oe.get ? oe : {
      enumerable: !0,
      get: function() {
        return z[Ce];
      }
    });
  }), b;
}
var gS = { exports: {} }, qp = {}, Im = { exports: {} }, $t = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function pk() {
  if (tR)
    return $t;
  tR = 1;
  var z = Symbol.for("react.element"), H = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), Ce = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), g = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), ie = Symbol.iterator;
  function X(L) {
    return L === null || typeof L != "object" ? null : (L = ie && L[ie] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var ne = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Te = Object.assign, xe = {};
  function Ye(L, x, J) {
    this.props = L, this.context = x, this.refs = xe, this.updater = J || ne;
  }
  Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(L, x) {
    if (typeof L != "object" && typeof L != "function" && L != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, x, "setState");
  }, Ye.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function mt() {
  }
  mt.prototype = Ye.prototype;
  function ct(L, x, J) {
    this.props = L, this.context = x, this.refs = xe, this.updater = J || ne;
  }
  var Ne = ct.prototype = new mt();
  Ne.constructor = ct, Te(Ne, Ye.prototype), Ne.isPureReactComponent = !0;
  var me = Array.isArray, q = Object.prototype.hasOwnProperty, je = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function vt(L, x, J) {
    var Se, Oe = {}, _e = null, k = null;
    if (x != null)
      for (Se in x.ref !== void 0 && (k = x.ref), x.key !== void 0 && (_e = "" + x.key), x)
        q.call(x, Se) && !ge.hasOwnProperty(Se) && (Oe[Se] = x[Se]);
    var B = arguments.length - 2;
    if (B === 1)
      Oe.children = J;
    else if (1 < B) {
      for (var ee = Array(B), se = 0; se < B; se++)
        ee[se] = arguments[se + 2];
      Oe.children = ee;
    }
    if (L && L.defaultProps)
      for (Se in B = L.defaultProps, B)
        Oe[Se] === void 0 && (Oe[Se] = B[Se]);
    return { $$typeof: z, type: L, key: _e, ref: k, props: Oe, _owner: je.current };
  }
  function jt(L, x) {
    return { $$typeof: z, type: L.type, key: x, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function Lt(L) {
    return typeof L == "object" && L !== null && L.$$typeof === z;
  }
  function wt(L) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(J) {
      return x[J];
    });
  }
  var Pt = /\/+/g;
  function qe(L, x) {
    return typeof L == "object" && L !== null && L.key != null ? wt("" + L.key) : x.toString(36);
  }
  function ot(L, x, J, Se, Oe) {
    var _e = typeof L;
    (_e === "undefined" || _e === "boolean") && (L = null);
    var k = !1;
    if (L === null)
      k = !0;
    else
      switch (_e) {
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (L.$$typeof) {
            case z:
            case H:
              k = !0;
          }
      }
    if (k)
      return k = L, Oe = Oe(k), L = Se === "" ? "." + qe(k, 0) : Se, me(Oe) ? (J = "", L != null && (J = L.replace(Pt, "$&/") + "/"), ot(Oe, x, J, "", function(se) {
        return se;
      })) : Oe != null && (Lt(Oe) && (Oe = jt(Oe, J + (!Oe.key || k && k.key === Oe.key ? "" : ("" + Oe.key).replace(Pt, "$&/") + "/") + L)), x.push(Oe)), 1;
    if (k = 0, Se = Se === "" ? "." : Se + ":", me(L))
      for (var B = 0; B < L.length; B++) {
        _e = L[B];
        var ee = Se + qe(_e, B);
        k += ot(_e, x, J, ee, Oe);
      }
    else if (ee = X(L), typeof ee == "function")
      for (L = ee.call(L), B = 0; !(_e = L.next()).done; )
        _e = _e.value, ee = Se + qe(_e, B++), k += ot(_e, x, J, ee, Oe);
    else if (_e === "object")
      throw x = String(L), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function Nt(L, x, J) {
    if (L == null)
      return L;
    var Se = [], Oe = 0;
    return ot(L, Se, "", "", function(_e) {
      return x.call(J, _e, Oe++);
    }), Se;
  }
  function ft(L) {
    if (L._status === -1) {
      var x = L._result;
      x = x(), x.then(function(J) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = J);
      }, function(J) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = J);
      }), L._status === -1 && (L._status = 0, L._result = x);
    }
    if (L._status === 1)
      return L._result.default;
    throw L._result;
  }
  var Ae = { current: null }, ce = { transition: null }, Pe = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: ce, ReactCurrentOwner: je };
  function be() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $t.Children = { map: Nt, forEach: function(L, x, J) {
    Nt(L, function() {
      x.apply(this, arguments);
    }, J);
  }, count: function(L) {
    var x = 0;
    return Nt(L, function() {
      x++;
    }), x;
  }, toArray: function(L) {
    return Nt(L, function(x) {
      return x;
    }) || [];
  }, only: function(L) {
    if (!Lt(L))
      throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, $t.Component = Ye, $t.Fragment = b, $t.Profiler = oe, $t.PureComponent = ct, $t.StrictMode = Ce, $t.Suspense = Q, $t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, $t.act = be, $t.cloneElement = function(L, x, J) {
    if (L == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var Se = Te({}, L.props), Oe = L.key, _e = L.ref, k = L._owner;
    if (x != null) {
      if (x.ref !== void 0 && (_e = x.ref, k = je.current), x.key !== void 0 && (Oe = "" + x.key), L.type && L.type.defaultProps)
        var B = L.type.defaultProps;
      for (ee in x)
        q.call(x, ee) && !ge.hasOwnProperty(ee) && (Se[ee] = x[ee] === void 0 && B !== void 0 ? B[ee] : x[ee]);
    }
    var ee = arguments.length - 2;
    if (ee === 1)
      Se.children = J;
    else if (1 < ee) {
      B = Array(ee);
      for (var se = 0; se < ee; se++)
        B[se] = arguments[se + 2];
      Se.children = B;
    }
    return { $$typeof: z, type: L.type, key: Oe, ref: _e, props: Se, _owner: k };
  }, $t.createContext = function(L) {
    return L = { $$typeof: g, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: te, _context: L }, L.Consumer = L;
  }, $t.createElement = vt, $t.createFactory = function(L) {
    var x = vt.bind(null, L);
    return x.type = L, x;
  }, $t.createRef = function() {
    return { current: null };
  }, $t.forwardRef = function(L) {
    return { $$typeof: Ve, render: L };
  }, $t.isValidElement = Lt, $t.lazy = function(L) {
    return { $$typeof: he, _payload: { _status: -1, _result: L }, _init: ft };
  }, $t.memo = function(L, x) {
    return { $$typeof: Z, type: L, compare: x === void 0 ? null : x };
  }, $t.startTransition = function(L) {
    var x = ce.transition;
    ce.transition = {};
    try {
      L();
    } finally {
      ce.transition = x;
    }
  }, $t.unstable_act = be, $t.useCallback = function(L, x) {
    return Ae.current.useCallback(L, x);
  }, $t.useContext = function(L) {
    return Ae.current.useContext(L);
  }, $t.useDebugValue = function() {
  }, $t.useDeferredValue = function(L) {
    return Ae.current.useDeferredValue(L);
  }, $t.useEffect = function(L, x) {
    return Ae.current.useEffect(L, x);
  }, $t.useId = function() {
    return Ae.current.useId();
  }, $t.useImperativeHandle = function(L, x, J) {
    return Ae.current.useImperativeHandle(L, x, J);
  }, $t.useInsertionEffect = function(L, x) {
    return Ae.current.useInsertionEffect(L, x);
  }, $t.useLayoutEffect = function(L, x) {
    return Ae.current.useLayoutEffect(L, x);
  }, $t.useMemo = function(L, x) {
    return Ae.current.useMemo(L, x);
  }, $t.useReducer = function(L, x, J) {
    return Ae.current.useReducer(L, x, J);
  }, $t.useRef = function(L) {
    return Ae.current.useRef(L);
  }, $t.useState = function(L) {
    return Ae.current.useState(L);
  }, $t.useSyncExternalStore = function(L, x, J) {
    return Ae.current.useSyncExternalStore(L, x, J);
  }, $t.useTransition = function() {
    return Ae.current.useTransition();
  }, $t.version = "18.3.1", $t;
}
var Jp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Jp.exports;
var nR;
function vk() {
  return nR || (nR = 1, function(z, H) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var b = "18.3.1", Ce = Symbol.for("react.element"), oe = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), Ve = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), Z = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), Ye = Symbol.iterator, mt = "@@iterator";
      function ct(h) {
        if (h === null || typeof h != "object")
          return null;
        var R = Ye && h[Ye] || h[mt];
        return typeof R == "function" ? R : null;
      }
      var Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, me = {
        transition: null
      }, q = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, je = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ge = {}, vt = null;
      function jt(h) {
        vt = h;
      }
      ge.setExtraStackFrame = function(h) {
        vt = h;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var h = "";
        vt && (h += vt);
        var R = ge.getCurrentStack;
        return R && (h += R() || ""), h;
      };
      var Lt = !1, wt = !1, Pt = !1, qe = !1, ot = !1, Nt = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: me,
        ReactCurrentOwner: je
      };
      Nt.ReactDebugCurrentFrame = ge, Nt.ReactCurrentActQueue = q;
      function ft(h) {
        {
          for (var R = arguments.length, F = new Array(R > 1 ? R - 1 : 0), I = 1; I < R; I++)
            F[I - 1] = arguments[I];
          ce("warn", h, F);
        }
      }
      function Ae(h) {
        {
          for (var R = arguments.length, F = new Array(R > 1 ? R - 1 : 0), I = 1; I < R; I++)
            F[I - 1] = arguments[I];
          ce("error", h, F);
        }
      }
      function ce(h, R, F) {
        {
          var I = Nt.ReactDebugCurrentFrame, ye = I.getStackAddendum();
          ye !== "" && (R += "%s", F = F.concat([ye]));
          var dt = F.map(function(Le) {
            return String(Le);
          });
          dt.unshift("Warning: " + R), Function.prototype.apply.call(console[h], console, dt);
        }
      }
      var Pe = {};
      function be(h, R) {
        {
          var F = h.constructor, I = F && (F.displayName || F.name) || "ReactClass", ye = I + "." + R;
          if (Pe[ye])
            return;
          Ae("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, I), Pe[ye] = !0;
        }
      }
      var L = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, R, F) {
          be(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, R, F, I) {
          be(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, R, F, I) {
          be(h, "setState");
        }
      }, x = Object.assign, J = {};
      Object.freeze(J);
      function Se(h, R, F) {
        this.props = h, this.context = R, this.refs = J, this.updater = F || L;
      }
      Se.prototype.isReactComponent = {}, Se.prototype.setState = function(h, R) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, R, "setState");
      }, Se.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Oe = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, _e = function(h, R) {
          Object.defineProperty(Se.prototype, h, {
            get: function() {
              ft("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
            }
          });
        };
        for (var k in Oe)
          Oe.hasOwnProperty(k) && _e(k, Oe[k]);
      }
      function B() {
      }
      B.prototype = Se.prototype;
      function ee(h, R, F) {
        this.props = h, this.context = R, this.refs = J, this.updater = F || L;
      }
      var se = ee.prototype = new B();
      se.constructor = ee, x(se, Se.prototype), se.isPureReactComponent = !0;
      function ke() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var et = Array.isArray;
      function gt(h) {
        return et(h);
      }
      function St(h) {
        {
          var R = typeof Symbol == "function" && Symbol.toStringTag, F = R && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return F;
        }
      }
      function nn(h) {
        try {
          return qt(h), !1;
        } catch {
          return !0;
        }
      }
      function qt(h) {
        return "" + h;
      }
      function fn(h) {
        if (nn(h))
          return Ae("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(h)), qt(h);
      }
      function An(h, R, F) {
        var I = h.displayName;
        if (I)
          return I;
        var ye = R.displayName || R.name || "";
        return ye !== "" ? F + "(" + ye + ")" : F;
      }
      function gr(h) {
        return h.displayName || "Context";
      }
      function Wn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ae("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case te:
            return "Fragment";
          case oe:
            return "Portal";
          case Ve:
            return "Profiler";
          case g:
            return "StrictMode";
          case ie:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Z:
              var R = h;
              return gr(R) + ".Consumer";
            case Q:
              var F = h;
              return gr(F._context) + ".Provider";
            case he:
              return An(h, h.render, "ForwardRef");
            case ne:
              var I = h.displayName || null;
              return I !== null ? I : Wn(h.type) || "Memo";
            case Te: {
              var ye = h, dt = ye._payload, Le = ye._init;
              try {
                return Wn(Le(dt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var lr = Object.prototype.hasOwnProperty, Sr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ur, Ar, Jn;
      Jn = {};
      function Zn(h) {
        if (lr.call(h, "ref")) {
          var R = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function yn(h) {
        if (lr.call(h, "key")) {
          var R = Object.getOwnPropertyDescriptor(h, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function or(h, R) {
        var F = function() {
          ur || (ur = !0, Ae("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        F.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: F,
          configurable: !0
        });
      }
      function la(h, R) {
        var F = function() {
          Ar || (Ar = !0, Ae("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        F.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: F,
          configurable: !0
        });
      }
      function Er(h) {
        if (typeof h.ref == "string" && je.current && h.__self && je.current.stateNode !== h.__self) {
          var R = Wn(je.current.type);
          Jn[R] || (Ae('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, h.ref), Jn[R] = !0);
        }
      }
      var we = function(h, R, F, I, ye, dt, Le) {
        var st = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ce,
          // Built-in properties that belong on the element
          type: h,
          key: R,
          ref: F,
          props: Le,
          // Record the component responsible for creating this element.
          _owner: dt
        };
        return st._store = {}, Object.defineProperty(st._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(st, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: I
        }), Object.defineProperty(st, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
      };
      function tt(h, R, F) {
        var I, ye = {}, dt = null, Le = null, st = null, Ut = null;
        if (R != null) {
          Zn(R) && (Le = R.ref, Er(R)), yn(R) && (fn(R.key), dt = "" + R.key), st = R.__self === void 0 ? null : R.__self, Ut = R.__source === void 0 ? null : R.__source;
          for (I in R)
            lr.call(R, I) && !Sr.hasOwnProperty(I) && (ye[I] = R[I]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          ye.children = F;
        else if (Qt > 1) {
          for (var vn = Array(Qt), cn = 0; cn < Qt; cn++)
            vn[cn] = arguments[cn + 2];
          Object.freeze && Object.freeze(vn), ye.children = vn;
        }
        if (h && h.defaultProps) {
          var hn = h.defaultProps;
          for (I in hn)
            ye[I] === void 0 && (ye[I] = hn[I]);
        }
        if (dt || Le) {
          var En = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          dt && or(ye, En), Le && la(ye, En);
        }
        return we(h, dt, Le, st, Ut, je.current, ye);
      }
      function kt(h, R) {
        var F = we(h.type, R, h.ref, h._self, h._source, h._owner, h.props);
        return F;
      }
      function Gt(h, R, F) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var I, ye = x({}, h.props), dt = h.key, Le = h.ref, st = h._self, Ut = h._source, Qt = h._owner;
        if (R != null) {
          Zn(R) && (Le = R.ref, Qt = je.current), yn(R) && (fn(R.key), dt = "" + R.key);
          var vn;
          h.type && h.type.defaultProps && (vn = h.type.defaultProps);
          for (I in R)
            lr.call(R, I) && !Sr.hasOwnProperty(I) && (R[I] === void 0 && vn !== void 0 ? ye[I] = vn[I] : ye[I] = R[I]);
        }
        var cn = arguments.length - 2;
        if (cn === 1)
          ye.children = F;
        else if (cn > 1) {
          for (var hn = Array(cn), En = 0; En < cn; En++)
            hn[En] = arguments[En + 2];
          ye.children = hn;
        }
        return we(h.type, dt, Le, st, Ut, Qt, ye);
      }
      function Wt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ce;
      }
      var Dn = ".", Rn = ":";
      function sr(h) {
        var R = /[=:]/g, F = {
          "=": "=0",
          ":": "=2"
        }, I = h.replace(R, function(ye) {
          return F[ye];
        });
        return "$" + I;
      }
      var rn = !1, Cr = /\/+/g;
      function Xt(h) {
        return h.replace(Cr, "$&/");
      }
      function Kt(h, R) {
        return typeof h == "object" && h !== null && h.key != null ? (fn(h.key), sr("" + h.key)) : R.toString(36);
      }
      function xa(h, R, F, I, ye) {
        var dt = typeof h;
        (dt === "undefined" || dt === "boolean") && (h = null);
        var Le = !1;
        if (h === null)
          Le = !0;
        else
          switch (dt) {
            case "string":
            case "number":
              Le = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ce:
                case oe:
                  Le = !0;
              }
          }
        if (Le) {
          var st = h, Ut = ye(st), Qt = I === "" ? Dn + Kt(st, 0) : I;
          if (gt(Ut)) {
            var vn = "";
            Qt != null && (vn = Xt(Qt) + "/"), xa(Ut, R, vn, "", function(Gf) {
              return Gf;
            });
          } else
            Ut != null && (Wt(Ut) && (Ut.key && (!st || st.key !== Ut.key) && fn(Ut.key), Ut = kt(
              Ut,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              F + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Ut.key && (!st || st.key !== Ut.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Xt("" + Ut.key) + "/"
              ) : "") + Qt
            )), R.push(Ut));
          return 1;
        }
        var cn, hn, En = 0, Bt = I === "" ? Dn : I + Rn;
        if (gt(h))
          for (var Ii = 0; Ii < h.length; Ii++)
            cn = h[Ii], hn = Bt + Kt(cn, Ii), En += xa(cn, R, F, hn, ye);
        else {
          var Gu = ct(h);
          if (typeof Gu == "function") {
            var Zo = h;
            Gu === Zo.entries && (rn || ft("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), rn = !0);
            for (var Qf = Gu.call(Zo), vi, es = 0; !(vi = Qf.next()).done; )
              cn = vi.value, hn = Bt + Kt(cn, es++), En += xa(cn, R, F, hn, ye);
          } else if (dt === "object") {
            var ts = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (ts === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : ts) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return En;
      }
      function zr(h, R, F) {
        if (h == null)
          return h;
        var I = [], ye = 0;
        return xa(h, I, "", "", function(dt) {
          return R.call(F, dt, ye++);
        }), I;
      }
      function Qn(h) {
        var R = 0;
        return zr(h, function() {
          R++;
        }), R;
      }
      function ci(h, R, F) {
        zr(h, function() {
          R.apply(this, arguments);
        }, F);
      }
      function Hi(h) {
        return zr(h, function(R) {
          return R;
        }) || [];
      }
      function jr(h) {
        if (!Wt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function fi(h) {
        var R = {
          $$typeof: Z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        R.Provider = {
          $$typeof: Q,
          _context: R
        };
        var F = !1, I = !1, ye = !1;
        {
          var dt = {
            $$typeof: Z,
            _context: R
          };
          Object.defineProperties(dt, {
            Provider: {
              get: function() {
                return I || (I = !0, Ae("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
              },
              set: function(Le) {
                R.Provider = Le;
              }
            },
            _currentValue: {
              get: function() {
                return R._currentValue;
              },
              set: function(Le) {
                R._currentValue = Le;
              }
            },
            _currentValue2: {
              get: function() {
                return R._currentValue2;
              },
              set: function(Le) {
                R._currentValue2 = Le;
              }
            },
            _threadCount: {
              get: function() {
                return R._threadCount;
              },
              set: function(Le) {
                R._threadCount = Le;
              }
            },
            Consumer: {
              get: function() {
                return F || (F = !0, Ae("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
              }
            },
            displayName: {
              get: function() {
                return R.displayName;
              },
              set: function(Le) {
                ye || (ft("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Le), ye = !0);
              }
            }
          }), R.Consumer = dt;
        }
        return R._currentRenderer = null, R._currentRenderer2 = null, R;
      }
      var Yr = -1, _a = 0, Wr = 1, ua = 2;
      function cr(h) {
        if (h._status === Yr) {
          var R = h._result, F = R();
          if (F.then(function(dt) {
            if (h._status === _a || h._status === Yr) {
              var Le = h;
              Le._status = Wr, Le._result = dt;
            }
          }, function(dt) {
            if (h._status === _a || h._status === Yr) {
              var Le = h;
              Le._status = ua, Le._result = dt;
            }
          }), h._status === Yr) {
            var I = h;
            I._status = _a, I._result = F;
          }
        }
        if (h._status === Wr) {
          var ye = h._result;
          return ye === void 0 && Ae(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || Ae(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw h._result;
      }
      function Pr(h) {
        var R = {
          // We use these fields to store the result.
          _status: Yr,
          _result: h
        }, F = {
          $$typeof: Te,
          _payload: R,
          _init: cr
        };
        {
          var I, ye;
          Object.defineProperties(F, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return I;
              },
              set: function(dt) {
                Ae("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), I = dt, Object.defineProperty(F, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(dt) {
                Ae("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = dt, Object.defineProperty(F, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return F;
      }
      function Ha(h) {
        h != null && h.$$typeof === ne ? Ae("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ae("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ae("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ae("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var R = {
          $$typeof: he,
          render: h
        };
        {
          var F;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(I) {
              F = I, !h.name && !h.displayName && (h.displayName = I);
            }
          });
        }
        return R;
      }
      var ka;
      ka = Symbol.for("react.module.reference");
      function T(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === te || h === Ve || ot || h === g || h === ie || h === X || qe || h === xe || Lt || wt || Pt || typeof h == "object" && h !== null && (h.$$typeof === Te || h.$$typeof === ne || h.$$typeof === Q || h.$$typeof === Z || h.$$typeof === he || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === ka || h.getModuleId !== void 0));
      }
      function le(h, R) {
        T(h) || Ae("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var F = {
          $$typeof: ne,
          type: h,
          compare: R === void 0 ? null : R
        };
        {
          var I;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return I;
            },
            set: function(ye) {
              I = ye, !h.name && !h.displayName && (h.displayName = ye);
            }
          });
        }
        return F;
      }
      function de() {
        var h = Ne.current;
        return h === null && Ae(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Xe(h) {
        var R = de();
        if (h._context !== void 0) {
          var F = h._context;
          F.Consumer === h ? Ae("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === h && Ae("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return R.useContext(h);
      }
      function Dt(h) {
        var R = de();
        return R.useState(h);
      }
      function zt(h, R, F) {
        var I = de();
        return I.useReducer(h, R, F);
      }
      function S(h) {
        var R = de();
        return R.useRef(h);
      }
      function M(h, R) {
        var F = de();
        return F.useEffect(h, R);
      }
      function K(h, R) {
        var F = de();
        return F.useInsertionEffect(h, R);
      }
      function ae(h, R) {
        var F = de();
        return F.useLayoutEffect(h, R);
      }
      function Re(h, R) {
        var F = de();
        return F.useCallback(h, R);
      }
      function xt(h, R) {
        var F = de();
        return F.useMemo(h, R);
      }
      function Mt(h, R, F) {
        var I = de();
        return I.useImperativeHandle(h, R, F);
      }
      function $e(h, R) {
        {
          var F = de();
          return F.useDebugValue(h, R);
        }
      }
      function an() {
        var h = de();
        return h.useTransition();
      }
      function gn(h) {
        var R = de();
        return R.useDeferredValue(h);
      }
      function lt() {
        var h = de();
        return h.useId();
      }
      function Sn(h, R, F) {
        var I = de();
        return I.useSyncExternalStore(h, R, F);
      }
      var Fr = 0, Rr, Ri, Tr, yl, Qr, Xo, Ko;
      function tc() {
      }
      tc.__reactDisabledLog = !0;
      function Fu() {
        {
          if (Fr === 0) {
            Rr = console.log, Ri = console.info, Tr = console.warn, yl = console.error, Qr = console.group, Xo = console.groupCollapsed, Ko = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: tc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Fr++;
        }
      }
      function gl() {
        {
          if (Fr--, Fr === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: x({}, h, {
                value: Rr
              }),
              info: x({}, h, {
                value: Ri
              }),
              warn: x({}, h, {
                value: Tr
              }),
              error: x({}, h, {
                value: yl
              }),
              group: x({}, h, {
                value: Qr
              }),
              groupCollapsed: x({}, h, {
                value: Xo
              }),
              groupEnd: x({}, h, {
                value: Ko
              })
            });
          }
          Fr < 0 && Ae("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = Nt.ReactCurrentDispatcher, Gr;
      function Sl(h, R, F) {
        {
          if (Gr === void 0)
            try {
              throw Error();
            } catch (ye) {
              var I = ye.stack.trim().match(/\n( *(at )?)/);
              Gr = I && I[1] || "";
            }
          return `
` + Gr + h;
        }
      }
      var El = !1, Cl;
      {
        var Hu = typeof WeakMap == "function" ? WeakMap : Map;
        Cl = new Hu();
      }
      function Vu(h, R) {
        if (!h || El)
          return "";
        {
          var F = Cl.get(h);
          if (F !== void 0)
            return F;
        }
        var I;
        El = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var dt;
        dt = di.current, di.current = null, Fu();
        try {
          if (R) {
            var Le = function() {
              throw Error();
            };
            if (Object.defineProperty(Le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Le, []);
              } catch (Bt) {
                I = Bt;
              }
              Reflect.construct(h, [], Le);
            } else {
              try {
                Le.call();
              } catch (Bt) {
                I = Bt;
              }
              h.call(Le.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Bt) {
              I = Bt;
            }
            h();
          }
        } catch (Bt) {
          if (Bt && I && typeof Bt.stack == "string") {
            for (var st = Bt.stack.split(`
`), Ut = I.stack.split(`
`), Qt = st.length - 1, vn = Ut.length - 1; Qt >= 1 && vn >= 0 && st[Qt] !== Ut[vn]; )
              vn--;
            for (; Qt >= 1 && vn >= 0; Qt--, vn--)
              if (st[Qt] !== Ut[vn]) {
                if (Qt !== 1 || vn !== 1)
                  do
                    if (Qt--, vn--, vn < 0 || st[Qt] !== Ut[vn]) {
                      var cn = `
` + st[Qt].replace(" at new ", " at ");
                      return h.displayName && cn.includes("<anonymous>") && (cn = cn.replace("<anonymous>", h.displayName)), typeof h == "function" && Cl.set(h, cn), cn;
                    }
                  while (Qt >= 1 && vn >= 0);
                break;
              }
          }
        } finally {
          El = !1, di.current = dt, gl(), Error.prepareStackTrace = ye;
        }
        var hn = h ? h.displayName || h.name : "", En = hn ? Sl(hn) : "";
        return typeof h == "function" && Cl.set(h, En), En;
      }
      function Vi(h, R, F) {
        return Vu(h, !1);
      }
      function Wf(h) {
        var R = h.prototype;
        return !!(R && R.isReactComponent);
      }
      function Ti(h, R, F) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Vu(h, Wf(h));
        if (typeof h == "string")
          return Sl(h);
        switch (h) {
          case ie:
            return Sl("Suspense");
          case X:
            return Sl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case he:
              return Vi(h.render);
            case ne:
              return Ti(h.type, R, F);
            case Te: {
              var I = h, ye = I._payload, dt = I._init;
              try {
                return Ti(dt(ye), R, F);
              } catch {
              }
            }
          }
        return "";
      }
      var Jt = {}, Bu = Nt.ReactDebugCurrentFrame;
      function Jl(h) {
        if (h) {
          var R = h._owner, F = Ti(h.type, h._source, R ? R.type : null);
          Bu.setExtraStackFrame(F);
        } else
          Bu.setExtraStackFrame(null);
      }
      function $u(h, R, F, I, ye) {
        {
          var dt = Function.call.bind(lr);
          for (var Le in h)
            if (dt(h, Le)) {
              var st = void 0;
              try {
                if (typeof h[Le] != "function") {
                  var Ut = Error((I || "React class") + ": " + F + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ut.name = "Invariant Violation", Ut;
                }
                st = h[Le](R, Le, I, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Qt) {
                st = Qt;
              }
              st && !(st instanceof Error) && (Jl(ye), Ae("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", F, Le, typeof st), Jl(null)), st instanceof Error && !(st.message in Jt) && (Jt[st.message] = !0, Jl(ye), Ae("Failed %s type: %s", F, st.message), Jl(null));
            }
        }
      }
      function Vt(h) {
        if (h) {
          var R = h._owner, F = Ti(h.type, h._source, R ? R.type : null);
          jt(F);
        } else
          jt(null);
      }
      var Iu;
      Iu = !1;
      function Yu() {
        if (je.current) {
          var h = Wn(je.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Rt(h) {
        if (h !== void 0) {
          var R = h.fileName.replace(/^.*[\\\/]/, ""), F = h.lineNumber;
          return `

Check your code at ` + R + ":" + F + ".";
        }
        return "";
      }
      function Zl(h) {
        return h != null ? Rt(h.__source) : "";
      }
      var Mn = {};
      function oa(h) {
        var R = Yu();
        if (!R) {
          var F = typeof h == "string" ? h : h.displayName || h.name;
          F && (R = `

Check the top-level render call using <` + F + ">.");
        }
        return R;
      }
      function qr(h, R) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var F = oa(R);
          if (!Mn[F]) {
            Mn[F] = !0;
            var I = "";
            h && h._owner && h._owner !== je.current && (I = " It was passed a child from " + Wn(h._owner.type) + "."), Vt(h), Ae('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, I), Vt(null);
          }
        }
      }
      function Rl(h, R) {
        if (typeof h == "object") {
          if (gt(h))
            for (var F = 0; F < h.length; F++) {
              var I = h[F];
              Wt(I) && qr(I, R);
            }
          else if (Wt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ye = ct(h);
            if (typeof ye == "function" && ye !== h.entries)
              for (var dt = ye.call(h), Le; !(Le = dt.next()).done; )
                Wt(Le.value) && qr(Le.value, R);
          }
        }
      }
      function zn(h) {
        {
          var R = h.type;
          if (R == null || typeof R == "string")
            return;
          var F;
          if (typeof R == "function")
            F = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === he || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          R.$$typeof === ne))
            F = R.propTypes;
          else
            return;
          if (F) {
            var I = Wn(R);
            $u(F, h.props, "prop", I, h);
          } else if (R.PropTypes !== void 0 && !Iu) {
            Iu = !0;
            var ye = Wn(R);
            Ae("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && Ae("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function un(h) {
        {
          for (var R = Object.keys(h.props), F = 0; F < R.length; F++) {
            var I = R[F];
            if (I !== "children" && I !== "key") {
              Vt(h), Ae("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), Vt(null);
              break;
            }
          }
          h.ref !== null && (Vt(h), Ae("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
        }
      }
      function nc(h, R, F) {
        var I = T(h);
        if (!I) {
          var ye = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var dt = Zl(R);
          dt ? ye += dt : ye += Yu();
          var Le;
          h === null ? Le = "null" : gt(h) ? Le = "array" : h !== void 0 && h.$$typeof === Ce ? (Le = "<" + (Wn(h.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof h, Ae("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, ye);
        }
        var st = tt.apply(this, arguments);
        if (st == null)
          return st;
        if (I)
          for (var Ut = 2; Ut < arguments.length; Ut++)
            Rl(arguments[Ut], h);
        return h === te ? un(st) : zn(st), st;
      }
      var sa = !1;
      function fr(h) {
        var R = nc.bind(null, h);
        return R.type = h, sa || (sa = !0, ft("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", {
          enumerable: !1,
          get: function() {
            return ft("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), R;
      }
      function bi(h, R, F) {
        for (var I = Gt.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          Rl(arguments[ye], I.type);
        return zn(I), I;
      }
      function rc(h, R) {
        var F = me.transition;
        me.transition = {};
        var I = me.transition;
        me.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (me.transition = F, F === null && I._updatedFibers) {
            var ye = I._updatedFibers.size;
            ye > 10 && ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), I._updatedFibers.clear();
          }
        }
      }
      var Bi = !1, Tl = null;
      function ac(h) {
        if (Tl === null)
          try {
            var R = ("require" + Math.random()).slice(0, 7), F = z && z[R];
            Tl = F.call(z, "timers").setImmediate;
          } catch {
            Tl = function(ye) {
              Bi === !1 && (Bi = !0, typeof MessageChannel > "u" && Ae("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var dt = new MessageChannel();
              dt.port1.onmessage = ye, dt.port2.postMessage(void 0);
            };
          }
        return Tl(h);
      }
      var Va = 0, bl = !1;
      function $i(h) {
        {
          var R = Va;
          Va++, q.current === null && (q.current = []);
          var F = q.isBatchingLegacy, I;
          try {
            if (q.isBatchingLegacy = !0, I = h(), !F && q.didScheduleLegacyUpdate) {
              var ye = q.current;
              ye !== null && (q.didScheduleLegacyUpdate = !1, xl(ye));
            }
          } catch (hn) {
            throw Ba(R), hn;
          } finally {
            q.isBatchingLegacy = F;
          }
          if (I !== null && typeof I == "object" && typeof I.then == "function") {
            var dt = I, Le = !1, st = {
              then: function(hn, En) {
                Le = !0, dt.then(function(Bt) {
                  Ba(R), Va === 0 ? Wu(Bt, hn, En) : hn(Bt);
                }, function(Bt) {
                  Ba(R), En(Bt);
                });
              }
            };
            return !bl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Le || (bl = !0, Ae("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), st;
          } else {
            var Ut = I;
            if (Ba(R), Va === 0) {
              var Qt = q.current;
              Qt !== null && (xl(Qt), q.current = null);
              var vn = {
                then: function(hn, En) {
                  q.current === null ? (q.current = [], Wu(Ut, hn, En)) : hn(Ut);
                }
              };
              return vn;
            } else {
              var cn = {
                then: function(hn, En) {
                  hn(Ut);
                }
              };
              return cn;
            }
          }
        }
      }
      function Ba(h) {
        h !== Va - 1 && Ae("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Va = h;
      }
      function Wu(h, R, F) {
        {
          var I = q.current;
          if (I !== null)
            try {
              xl(I), ac(function() {
                I.length === 0 ? (q.current = null, R(h)) : Wu(h, R, F);
              });
            } catch (ye) {
              F(ye);
            }
          else
            R(h);
        }
      }
      var wl = !1;
      function xl(h) {
        if (!wl) {
          wl = !0;
          var R = 0;
          try {
            for (; R < h.length; R++) {
              var F = h[R];
              do
                F = F(!0);
              while (F !== null);
            }
            h.length = 0;
          } catch (I) {
            throw h = h.slice(R + 1), I;
          } finally {
            wl = !1;
          }
        }
      }
      var eu = nc, Qu = bi, Jo = fr, pi = {
        map: zr,
        forEach: ci,
        count: Qn,
        toArray: Hi,
        only: jr
      };
      H.Children = pi, H.Component = Se, H.Fragment = te, H.Profiler = Ve, H.PureComponent = ee, H.StrictMode = g, H.Suspense = ie, H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nt, H.act = $i, H.cloneElement = Qu, H.createContext = fi, H.createElement = eu, H.createFactory = Jo, H.createRef = ke, H.forwardRef = Ha, H.isValidElement = Wt, H.lazy = Pr, H.memo = le, H.startTransition = rc, H.unstable_act = $i, H.useCallback = Re, H.useContext = Xe, H.useDebugValue = $e, H.useDeferredValue = gn, H.useEffect = M, H.useId = lt, H.useImperativeHandle = Mt, H.useInsertionEffect = K, H.useLayoutEffect = ae, H.useMemo = xt, H.useReducer = zt, H.useRef = S, H.useState = Dt, H.useSyncExternalStore = Sn, H.useTransition = an, H.version = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var rR;
function ev() {
  return rR || (rR = 1, process.env.NODE_ENV === "production" ? Im.exports = pk() : Im.exports = vk()), Im.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function hk() {
  if (aR)
    return qp;
  aR = 1;
  var z = ev(), H = Symbol.for("react.element"), b = Symbol.for("react.fragment"), Ce = Object.prototype.hasOwnProperty, oe = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(Ve, Q, Z) {
    var he, ie = {}, X = null, ne = null;
    Z !== void 0 && (X = "" + Z), Q.key !== void 0 && (X = "" + Q.key), Q.ref !== void 0 && (ne = Q.ref);
    for (he in Q)
      Ce.call(Q, he) && !te.hasOwnProperty(he) && (ie[he] = Q[he]);
    if (Ve && Ve.defaultProps)
      for (he in Q = Ve.defaultProps, Q)
        ie[he] === void 0 && (ie[he] = Q[he]);
    return { $$typeof: H, type: Ve, key: X, ref: ne, props: ie, _owner: oe.current };
  }
  return qp.Fragment = b, qp.jsx = g, qp.jsxs = g, qp;
}
var Xp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function mk() {
  return iR || (iR = 1, process.env.NODE_ENV !== "production" && function() {
    var z = ev(), H = Symbol.for("react.element"), b = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), Ve = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), Te = Symbol.iterator, xe = "@@iterator";
    function Ye(T) {
      if (T === null || typeof T != "object")
        return null;
      var le = Te && T[Te] || T[xe];
      return typeof le == "function" ? le : null;
    }
    var mt = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ct(T) {
      {
        for (var le = arguments.length, de = new Array(le > 1 ? le - 1 : 0), Xe = 1; Xe < le; Xe++)
          de[Xe - 1] = arguments[Xe];
        Ne("error", T, de);
      }
    }
    function Ne(T, le, de) {
      {
        var Xe = mt.ReactDebugCurrentFrame, Dt = Xe.getStackAddendum();
        Dt !== "" && (le += "%s", de = de.concat([Dt]));
        var zt = de.map(function(S) {
          return String(S);
        });
        zt.unshift("Warning: " + le), Function.prototype.apply.call(console[T], console, zt);
      }
    }
    var me = !1, q = !1, je = !1, ge = !1, vt = !1, jt;
    jt = Symbol.for("react.module.reference");
    function Lt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === Ce || T === te || vt || T === oe || T === Z || T === he || ge || T === ne || me || q || je || typeof T == "object" && T !== null && (T.$$typeof === X || T.$$typeof === ie || T.$$typeof === g || T.$$typeof === Ve || T.$$typeof === Q || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === jt || T.getModuleId !== void 0));
    }
    function wt(T, le, de) {
      var Xe = T.displayName;
      if (Xe)
        return Xe;
      var Dt = le.displayName || le.name || "";
      return Dt !== "" ? de + "(" + Dt + ")" : de;
    }
    function Pt(T) {
      return T.displayName || "Context";
    }
    function qe(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && ct("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case Ce:
          return "Fragment";
        case b:
          return "Portal";
        case te:
          return "Profiler";
        case oe:
          return "StrictMode";
        case Z:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case Ve:
            var le = T;
            return Pt(le) + ".Consumer";
          case g:
            var de = T;
            return Pt(de._context) + ".Provider";
          case Q:
            return wt(T, T.render, "ForwardRef");
          case ie:
            var Xe = T.displayName || null;
            return Xe !== null ? Xe : qe(T.type) || "Memo";
          case X: {
            var Dt = T, zt = Dt._payload, S = Dt._init;
            try {
              return qe(S(zt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ot = Object.assign, Nt = 0, ft, Ae, ce, Pe, be, L, x;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function Se() {
      {
        if (Nt === 0) {
          ft = console.log, Ae = console.info, ce = console.warn, Pe = console.error, be = console.group, L = console.groupCollapsed, x = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        Nt++;
      }
    }
    function Oe() {
      {
        if (Nt--, Nt === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, T, {
              value: ft
            }),
            info: ot({}, T, {
              value: Ae
            }),
            warn: ot({}, T, {
              value: ce
            }),
            error: ot({}, T, {
              value: Pe
            }),
            group: ot({}, T, {
              value: be
            }),
            groupCollapsed: ot({}, T, {
              value: L
            }),
            groupEnd: ot({}, T, {
              value: x
            })
          });
        }
        Nt < 0 && ct("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = mt.ReactCurrentDispatcher, k;
    function B(T, le, de) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (Dt) {
            var Xe = Dt.stack.trim().match(/\n( *(at )?)/);
            k = Xe && Xe[1] || "";
          }
        return `
` + k + T;
      }
    }
    var ee = !1, se;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      se = new ke();
    }
    function et(T, le) {
      if (!T || ee)
        return "";
      {
        var de = se.get(T);
        if (de !== void 0)
          return de;
      }
      var Xe;
      ee = !0;
      var Dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var zt;
      zt = _e.current, _e.current = null, Se();
      try {
        if (le) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (an) {
              Xe = an;
            }
            Reflect.construct(T, [], S);
          } else {
            try {
              S.call();
            } catch (an) {
              Xe = an;
            }
            T.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (an) {
            Xe = an;
          }
          T();
        }
      } catch (an) {
        if (an && Xe && typeof an.stack == "string") {
          for (var M = an.stack.split(`
`), K = Xe.stack.split(`
`), ae = M.length - 1, Re = K.length - 1; ae >= 1 && Re >= 0 && M[ae] !== K[Re]; )
            Re--;
          for (; ae >= 1 && Re >= 0; ae--, Re--)
            if (M[ae] !== K[Re]) {
              if (ae !== 1 || Re !== 1)
                do
                  if (ae--, Re--, Re < 0 || M[ae] !== K[Re]) {
                    var xt = `
` + M[ae].replace(" at new ", " at ");
                    return T.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", T.displayName)), typeof T == "function" && se.set(T, xt), xt;
                  }
                while (ae >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        ee = !1, _e.current = zt, Oe(), Error.prepareStackTrace = Dt;
      }
      var Mt = T ? T.displayName || T.name : "", $e = Mt ? B(Mt) : "";
      return typeof T == "function" && se.set(T, $e), $e;
    }
    function gt(T, le, de) {
      return et(T, !1);
    }
    function St(T) {
      var le = T.prototype;
      return !!(le && le.isReactComponent);
    }
    function nn(T, le, de) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return et(T, St(T));
      if (typeof T == "string")
        return B(T);
      switch (T) {
        case Z:
          return B("Suspense");
        case he:
          return B("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case Q:
            return gt(T.render);
          case ie:
            return nn(T.type, le, de);
          case X: {
            var Xe = T, Dt = Xe._payload, zt = Xe._init;
            try {
              return nn(zt(Dt), le, de);
            } catch {
            }
          }
        }
      return "";
    }
    var qt = Object.prototype.hasOwnProperty, fn = {}, An = mt.ReactDebugCurrentFrame;
    function gr(T) {
      if (T) {
        var le = T._owner, de = nn(T.type, T._source, le ? le.type : null);
        An.setExtraStackFrame(de);
      } else
        An.setExtraStackFrame(null);
    }
    function Wn(T, le, de, Xe, Dt) {
      {
        var zt = Function.call.bind(qt);
        for (var S in T)
          if (zt(T, S)) {
            var M = void 0;
            try {
              if (typeof T[S] != "function") {
                var K = Error((Xe || "React class") + ": " + de + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              M = T[S](le, S, Xe, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              M = ae;
            }
            M && !(M instanceof Error) && (gr(Dt), ct("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Xe || "React class", de, S, typeof M), gr(null)), M instanceof Error && !(M.message in fn) && (fn[M.message] = !0, gr(Dt), ct("Failed %s type: %s", de, M.message), gr(null));
          }
      }
    }
    var lr = Array.isArray;
    function Sr(T) {
      return lr(T);
    }
    function ur(T) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, de = le && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return de;
      }
    }
    function Ar(T) {
      try {
        return Jn(T), !1;
      } catch {
        return !0;
      }
    }
    function Jn(T) {
      return "" + T;
    }
    function Zn(T) {
      if (Ar(T))
        return ct("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(T)), Jn(T);
    }
    var yn = mt.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, la, Er, we;
    we = {};
    function tt(T) {
      if (qt.call(T, "ref")) {
        var le = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function kt(T) {
      if (qt.call(T, "key")) {
        var le = Object.getOwnPropertyDescriptor(T, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Gt(T, le) {
      if (typeof T.ref == "string" && yn.current && le && yn.current.stateNode !== le) {
        var de = qe(yn.current.type);
        we[de] || (ct('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', qe(yn.current.type), T.ref), we[de] = !0);
      }
    }
    function Wt(T, le) {
      {
        var de = function() {
          la || (la = !0, ct("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        de.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function Dn(T, le) {
      {
        var de = function() {
          Er || (Er = !0, ct("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        de.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var Rn = function(T, le, de, Xe, Dt, zt, S) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: H,
        // Built-in properties that belong on the element
        type: T,
        key: le,
        ref: de,
        props: S,
        // Record the component responsible for creating this element.
        _owner: zt
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Dt
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function sr(T, le, de, Xe, Dt) {
      {
        var zt, S = {}, M = null, K = null;
        de !== void 0 && (Zn(de), M = "" + de), kt(le) && (Zn(le.key), M = "" + le.key), tt(le) && (K = le.ref, Gt(le, Dt));
        for (zt in le)
          qt.call(le, zt) && !or.hasOwnProperty(zt) && (S[zt] = le[zt]);
        if (T && T.defaultProps) {
          var ae = T.defaultProps;
          for (zt in ae)
            S[zt] === void 0 && (S[zt] = ae[zt]);
        }
        if (M || K) {
          var Re = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          M && Wt(S, Re), K && Dn(S, Re);
        }
        return Rn(T, M, K, Dt, Xe, yn.current, S);
      }
    }
    var rn = mt.ReactCurrentOwner, Cr = mt.ReactDebugCurrentFrame;
    function Xt(T) {
      if (T) {
        var le = T._owner, de = nn(T.type, T._source, le ? le.type : null);
        Cr.setExtraStackFrame(de);
      } else
        Cr.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function xa(T) {
      return typeof T == "object" && T !== null && T.$$typeof === H;
    }
    function zr() {
      {
        if (rn.current) {
          var T = qe(rn.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Qn(T) {
      return "";
    }
    var ci = {};
    function Hi(T) {
      {
        var le = zr();
        if (!le) {
          var de = typeof T == "string" ? T : T.displayName || T.name;
          de && (le = `

Check the top-level render call using <` + de + ">.");
        }
        return le;
      }
    }
    function jr(T, le) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var de = Hi(le);
        if (ci[de])
          return;
        ci[de] = !0;
        var Xe = "";
        T && T._owner && T._owner !== rn.current && (Xe = " It was passed a child from " + qe(T._owner.type) + "."), Xt(T), ct('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, Xe), Xt(null);
      }
    }
    function fi(T, le) {
      {
        if (typeof T != "object")
          return;
        if (Sr(T))
          for (var de = 0; de < T.length; de++) {
            var Xe = T[de];
            xa(Xe) && jr(Xe, le);
          }
        else if (xa(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Dt = Ye(T);
          if (typeof Dt == "function" && Dt !== T.entries)
            for (var zt = Dt.call(T), S; !(S = zt.next()).done; )
              xa(S.value) && jr(S.value, le);
        }
      }
    }
    function Yr(T) {
      {
        var le = T.type;
        if (le == null || typeof le == "string")
          return;
        var de;
        if (typeof le == "function")
          de = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === Q || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === ie))
          de = le.propTypes;
        else
          return;
        if (de) {
          var Xe = qe(le);
          Wn(de, T.props, "prop", Xe, T);
        } else if (le.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var Dt = qe(le);
          ct("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Dt || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && ct("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _a(T) {
      {
        for (var le = Object.keys(T.props), de = 0; de < le.length; de++) {
          var Xe = le[de];
          if (Xe !== "children" && Xe !== "key") {
            Xt(T), ct("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Xe), Xt(null);
            break;
          }
        }
        T.ref !== null && (Xt(T), ct("Invalid attribute `ref` supplied to `React.Fragment`."), Xt(null));
      }
    }
    var Wr = {};
    function ua(T, le, de, Xe, Dt, zt) {
      {
        var S = Lt(T);
        if (!S) {
          var M = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Qn();
          K ? M += K : M += zr();
          var ae;
          T === null ? ae = "null" : Sr(T) ? ae = "array" : T !== void 0 && T.$$typeof === H ? (ae = "<" + (qe(T.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof T, ct("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, M);
        }
        var Re = sr(T, le, de, Dt, zt);
        if (Re == null)
          return Re;
        if (S) {
          var xt = le.children;
          if (xt !== void 0)
            if (Xe)
              if (Sr(xt)) {
                for (var Mt = 0; Mt < xt.length; Mt++)
                  fi(xt[Mt], T);
                Object.freeze && Object.freeze(xt);
              } else
                ct("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fi(xt, T);
        }
        if (qt.call(le, "key")) {
          var $e = qe(T), an = Object.keys(le).filter(function(Sn) {
            return Sn !== "key";
          }), gn = an.length > 0 ? "{key: someKey, " + an.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wr[$e + gn]) {
            var lt = an.length > 0 ? "{" + an.join(": ..., ") + ": ...}" : "{}";
            ct(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gn, $e, lt, $e), Wr[$e + gn] = !0;
          }
        }
        return T === Ce ? _a(Re) : Yr(Re), Re;
      }
    }
    function cr(T, le, de) {
      return ua(T, le, de, !0);
    }
    function Pr(T, le, de) {
      return ua(T, le, de, !1);
    }
    var Ha = Pr, ka = cr;
    Xp.Fragment = Ce, Xp.jsx = Ha, Xp.jsxs = ka;
  }()), Xp;
}
process.env.NODE_ENV === "production" ? gS.exports = hk() : gS.exports = mk();
var Fi = gS.exports, Zp = {}, SS = { exports: {} }, oi = {}, Ym = { exports: {} }, mS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function yk() {
  return lR || (lR = 1, function(z) {
    function H(ce, Pe) {
      var be = ce.length;
      ce.push(Pe);
      e:
        for (; 0 < be; ) {
          var L = be - 1 >>> 1, x = ce[L];
          if (0 < oe(x, Pe))
            ce[L] = Pe, ce[be] = x, be = L;
          else
            break e;
        }
    }
    function b(ce) {
      return ce.length === 0 ? null : ce[0];
    }
    function Ce(ce) {
      if (ce.length === 0)
        return null;
      var Pe = ce[0], be = ce.pop();
      if (be !== Pe) {
        ce[0] = be;
        e:
          for (var L = 0, x = ce.length, J = x >>> 1; L < J; ) {
            var Se = 2 * (L + 1) - 1, Oe = ce[Se], _e = Se + 1, k = ce[_e];
            if (0 > oe(Oe, be))
              _e < x && 0 > oe(k, Oe) ? (ce[L] = k, ce[_e] = be, L = _e) : (ce[L] = Oe, ce[Se] = be, L = Se);
            else if (_e < x && 0 > oe(k, be))
              ce[L] = k, ce[_e] = be, L = _e;
            else
              break e;
          }
      }
      return Pe;
    }
    function oe(ce, Pe) {
      var be = ce.sortIndex - Pe.sortIndex;
      return be !== 0 ? be : ce.id - Pe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var te = performance;
      z.unstable_now = function() {
        return te.now();
      };
    } else {
      var g = Date, Ve = g.now();
      z.unstable_now = function() {
        return g.now() - Ve;
      };
    }
    var Q = [], Z = [], he = 1, ie = null, X = 3, ne = !1, Te = !1, xe = !1, Ye = typeof setTimeout == "function" ? setTimeout : null, mt = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ne(ce) {
      for (var Pe = b(Z); Pe !== null; ) {
        if (Pe.callback === null)
          Ce(Z);
        else if (Pe.startTime <= ce)
          Ce(Z), Pe.sortIndex = Pe.expirationTime, H(Q, Pe);
        else
          break;
        Pe = b(Z);
      }
    }
    function me(ce) {
      if (xe = !1, Ne(ce), !Te)
        if (b(Q) !== null)
          Te = !0, ft(q);
        else {
          var Pe = b(Z);
          Pe !== null && Ae(me, Pe.startTime - ce);
        }
    }
    function q(ce, Pe) {
      Te = !1, xe && (xe = !1, mt(vt), vt = -1), ne = !0;
      var be = X;
      try {
        for (Ne(Pe), ie = b(Q); ie !== null && (!(ie.expirationTime > Pe) || ce && !wt()); ) {
          var L = ie.callback;
          if (typeof L == "function") {
            ie.callback = null, X = ie.priorityLevel;
            var x = L(ie.expirationTime <= Pe);
            Pe = z.unstable_now(), typeof x == "function" ? ie.callback = x : ie === b(Q) && Ce(Q), Ne(Pe);
          } else
            Ce(Q);
          ie = b(Q);
        }
        if (ie !== null)
          var J = !0;
        else {
          var Se = b(Z);
          Se !== null && Ae(me, Se.startTime - Pe), J = !1;
        }
        return J;
      } finally {
        ie = null, X = be, ne = !1;
      }
    }
    var je = !1, ge = null, vt = -1, jt = 5, Lt = -1;
    function wt() {
      return !(z.unstable_now() - Lt < jt);
    }
    function Pt() {
      if (ge !== null) {
        var ce = z.unstable_now();
        Lt = ce;
        var Pe = !0;
        try {
          Pe = ge(!0, ce);
        } finally {
          Pe ? qe() : (je = !1, ge = null);
        }
      } else
        je = !1;
    }
    var qe;
    if (typeof ct == "function")
      qe = function() {
        ct(Pt);
      };
    else if (typeof MessageChannel < "u") {
      var ot = new MessageChannel(), Nt = ot.port2;
      ot.port1.onmessage = Pt, qe = function() {
        Nt.postMessage(null);
      };
    } else
      qe = function() {
        Ye(Pt, 0);
      };
    function ft(ce) {
      ge = ce, je || (je = !0, qe());
    }
    function Ae(ce, Pe) {
      vt = Ye(function() {
        ce(z.unstable_now());
      }, Pe);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(ce) {
      ce.callback = null;
    }, z.unstable_continueExecution = function() {
      Te || ne || (Te = !0, ft(q));
    }, z.unstable_forceFrameRate = function(ce) {
      0 > ce || 125 < ce ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jt = 0 < ce ? Math.floor(1e3 / ce) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, z.unstable_getFirstCallbackNode = function() {
      return b(Q);
    }, z.unstable_next = function(ce) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var Pe = 3;
          break;
        default:
          Pe = X;
      }
      var be = X;
      X = Pe;
      try {
        return ce();
      } finally {
        X = be;
      }
    }, z.unstable_pauseExecution = function() {
    }, z.unstable_requestPaint = function() {
    }, z.unstable_runWithPriority = function(ce, Pe) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ce = 3;
      }
      var be = X;
      X = ce;
      try {
        return Pe();
      } finally {
        X = be;
      }
    }, z.unstable_scheduleCallback = function(ce, Pe, be) {
      var L = z.unstable_now();
      switch (typeof be == "object" && be !== null ? (be = be.delay, be = typeof be == "number" && 0 < be ? L + be : L) : be = L, ce) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = be + x, ce = { id: he++, callback: Pe, priorityLevel: ce, startTime: be, expirationTime: x, sortIndex: -1 }, be > L ? (ce.sortIndex = be, H(Z, ce), b(Q) === null && ce === b(Z) && (xe ? (mt(vt), vt = -1) : xe = !0, Ae(me, be - L))) : (ce.sortIndex = x, H(Q, ce), Te || ne || (Te = !0, ft(q))), ce;
    }, z.unstable_shouldYield = wt, z.unstable_wrapCallback = function(ce) {
      var Pe = X;
      return function() {
        var be = X;
        X = Pe;
        try {
          return ce.apply(this, arguments);
        } finally {
          X = be;
        }
      };
    };
  }(mS)), mS;
}
var yS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function gk() {
  return uR || (uR = 1, function(z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var H = !1, b = !1, Ce = 5;
      function oe(we, tt) {
        var kt = we.length;
        we.push(tt), Ve(we, tt, kt);
      }
      function te(we) {
        return we.length === 0 ? null : we[0];
      }
      function g(we) {
        if (we.length === 0)
          return null;
        var tt = we[0], kt = we.pop();
        return kt !== tt && (we[0] = kt, Q(we, kt, 0)), tt;
      }
      function Ve(we, tt, kt) {
        for (var Gt = kt; Gt > 0; ) {
          var Wt = Gt - 1 >>> 1, Dn = we[Wt];
          if (Z(Dn, tt) > 0)
            we[Wt] = tt, we[Gt] = Dn, Gt = Wt;
          else
            return;
        }
      }
      function Q(we, tt, kt) {
        for (var Gt = kt, Wt = we.length, Dn = Wt >>> 1; Gt < Dn; ) {
          var Rn = (Gt + 1) * 2 - 1, sr = we[Rn], rn = Rn + 1, Cr = we[rn];
          if (Z(sr, tt) < 0)
            rn < Wt && Z(Cr, sr) < 0 ? (we[Gt] = Cr, we[rn] = tt, Gt = rn) : (we[Gt] = sr, we[Rn] = tt, Gt = Rn);
          else if (rn < Wt && Z(Cr, tt) < 0)
            we[Gt] = Cr, we[rn] = tt, Gt = rn;
          else
            return;
        }
      }
      function Z(we, tt) {
        var kt = we.sortIndex - tt.sortIndex;
        return kt !== 0 ? kt : we.id - tt.id;
      }
      var he = 1, ie = 2, X = 3, ne = 4, Te = 5;
      function xe(we, tt) {
      }
      var Ye = typeof performance == "object" && typeof performance.now == "function";
      if (Ye) {
        var mt = performance;
        z.unstable_now = function() {
          return mt.now();
        };
      } else {
        var ct = Date, Ne = ct.now();
        z.unstable_now = function() {
          return ct.now() - Ne;
        };
      }
      var me = 1073741823, q = -1, je = 250, ge = 5e3, vt = 1e4, jt = me, Lt = [], wt = [], Pt = 1, qe = null, ot = X, Nt = !1, ft = !1, Ae = !1, ce = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(we) {
        for (var tt = te(wt); tt !== null; ) {
          if (tt.callback === null)
            g(wt);
          else if (tt.startTime <= we)
            g(wt), tt.sortIndex = tt.expirationTime, oe(Lt, tt);
          else
            return;
          tt = te(wt);
        }
      }
      function x(we) {
        if (Ae = !1, L(we), !ft)
          if (te(Lt) !== null)
            ft = !0, Zn(J);
          else {
            var tt = te(wt);
            tt !== null && yn(x, tt.startTime - we);
          }
      }
      function J(we, tt) {
        ft = !1, Ae && (Ae = !1, or()), Nt = !0;
        var kt = ot;
        try {
          var Gt;
          if (!b)
            return Se(we, tt);
        } finally {
          qe = null, ot = kt, Nt = !1;
        }
      }
      function Se(we, tt) {
        var kt = tt;
        for (L(kt), qe = te(Lt); qe !== null && !H && !(qe.expirationTime > kt && (!we || gr())); ) {
          var Gt = qe.callback;
          if (typeof Gt == "function") {
            qe.callback = null, ot = qe.priorityLevel;
            var Wt = qe.expirationTime <= kt, Dn = Gt(Wt);
            kt = z.unstable_now(), typeof Dn == "function" ? qe.callback = Dn : qe === te(Lt) && g(Lt), L(kt);
          } else
            g(Lt);
          qe = te(Lt);
        }
        if (qe !== null)
          return !0;
        var Rn = te(wt);
        return Rn !== null && yn(x, Rn.startTime - kt), !1;
      }
      function Oe(we, tt) {
        switch (we) {
          case he:
          case ie:
          case X:
          case ne:
          case Te:
            break;
          default:
            we = X;
        }
        var kt = ot;
        ot = we;
        try {
          return tt();
        } finally {
          ot = kt;
        }
      }
      function _e(we) {
        var tt;
        switch (ot) {
          case he:
          case ie:
          case X:
            tt = X;
            break;
          default:
            tt = ot;
            break;
        }
        var kt = ot;
        ot = tt;
        try {
          return we();
        } finally {
          ot = kt;
        }
      }
      function k(we) {
        var tt = ot;
        return function() {
          var kt = ot;
          ot = tt;
          try {
            return we.apply(this, arguments);
          } finally {
            ot = kt;
          }
        };
      }
      function B(we, tt, kt) {
        var Gt = z.unstable_now(), Wt;
        if (typeof kt == "object" && kt !== null) {
          var Dn = kt.delay;
          typeof Dn == "number" && Dn > 0 ? Wt = Gt + Dn : Wt = Gt;
        } else
          Wt = Gt;
        var Rn;
        switch (we) {
          case he:
            Rn = q;
            break;
          case ie:
            Rn = je;
            break;
          case Te:
            Rn = jt;
            break;
          case ne:
            Rn = vt;
            break;
          case X:
          default:
            Rn = ge;
            break;
        }
        var sr = Wt + Rn, rn = {
          id: Pt++,
          callback: tt,
          priorityLevel: we,
          startTime: Wt,
          expirationTime: sr,
          sortIndex: -1
        };
        return Wt > Gt ? (rn.sortIndex = Wt, oe(wt, rn), te(Lt) === null && rn === te(wt) && (Ae ? or() : Ae = !0, yn(x, Wt - Gt))) : (rn.sortIndex = sr, oe(Lt, rn), !ft && !Nt && (ft = !0, Zn(J))), rn;
      }
      function ee() {
      }
      function se() {
        !ft && !Nt && (ft = !0, Zn(J));
      }
      function ke() {
        return te(Lt);
      }
      function et(we) {
        we.callback = null;
      }
      function gt() {
        return ot;
      }
      var St = !1, nn = null, qt = -1, fn = Ce, An = -1;
      function gr() {
        var we = z.unstable_now() - An;
        return !(we < fn);
      }
      function Wn() {
      }
      function lr(we) {
        if (we < 0 || we > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        we > 0 ? fn = Math.floor(1e3 / we) : fn = Ce;
      }
      var Sr = function() {
        if (nn !== null) {
          var we = z.unstable_now();
          An = we;
          var tt = !0, kt = !0;
          try {
            kt = nn(tt, we);
          } finally {
            kt ? ur() : (St = !1, nn = null);
          }
        } else
          St = !1;
      }, ur;
      if (typeof be == "function")
        ur = function() {
          be(Sr);
        };
      else if (typeof MessageChannel < "u") {
        var Ar = new MessageChannel(), Jn = Ar.port2;
        Ar.port1.onmessage = Sr, ur = function() {
          Jn.postMessage(null);
        };
      } else
        ur = function() {
          ce(Sr, 0);
        };
      function Zn(we) {
        nn = we, St || (St = !0, ur());
      }
      function yn(we, tt) {
        qt = ce(function() {
          we(z.unstable_now());
        }, tt);
      }
      function or() {
        Pe(qt), qt = -1;
      }
      var la = Wn, Er = null;
      z.unstable_IdlePriority = Te, z.unstable_ImmediatePriority = he, z.unstable_LowPriority = ne, z.unstable_NormalPriority = X, z.unstable_Profiling = Er, z.unstable_UserBlockingPriority = ie, z.unstable_cancelCallback = et, z.unstable_continueExecution = se, z.unstable_forceFrameRate = lr, z.unstable_getCurrentPriorityLevel = gt, z.unstable_getFirstCallbackNode = ke, z.unstable_next = _e, z.unstable_pauseExecution = ee, z.unstable_requestPaint = la, z.unstable_runWithPriority = Oe, z.unstable_scheduleCallback = B, z.unstable_shouldYield = gr, z.unstable_wrapCallback = k, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(yS)), yS;
}
var oR;
function dR() {
  return oR || (oR = 1, process.env.NODE_ENV === "production" ? Ym.exports = yk() : Ym.exports = gk()), Ym.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sR;
function Sk() {
  if (sR)
    return oi;
  sR = 1;
  var z = ev(), H = dR();
  function b(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ce = /* @__PURE__ */ new Set(), oe = {};
  function te(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (oe[n] = r, n = 0; n < r.length; n++)
      Ce.add(r[n]);
  }
  var Ve = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Q = Object.prototype.hasOwnProperty, Z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, he = {}, ie = {};
  function X(n) {
    return Q.call(ie, n) ? !0 : Q.call(he, n) ? !1 : Z.test(n) ? ie[n] = !0 : (he[n] = !0, !1);
  }
  function ne(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Te(n, r, l, o) {
    if (r === null || typeof r > "u" || ne(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function xe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ye = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ye[n] = new xe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ye[r] = new xe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ye[n] = new xe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ye[n] = new xe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ye[n] = new xe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ye[n] = new xe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ye[n] = new xe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ye[n] = new xe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ye[n] = new xe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var mt = /[\-:]([a-z])/g;
  function ct(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      mt,
      ct
    );
    Ye[r] = new xe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(mt, ct);
    Ye[r] = new xe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(mt, ct);
    Ye[r] = new xe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ye[n] = new xe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ye.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ye[n] = new xe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ne(n, r, l, o) {
    var c = Ye.hasOwnProperty(r) ? Ye[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Te(r, l, c, o) && (l = null), o || c === null ? X(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var me = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, q = Symbol.for("react.element"), je = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), jt = Symbol.for("react.profiler"), Lt = Symbol.for("react.provider"), wt = Symbol.for("react.context"), Pt = Symbol.for("react.forward_ref"), qe = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), ft = Symbol.for("react.lazy"), Ae = Symbol.for("react.offscreen"), ce = Symbol.iterator;
  function Pe(n) {
    return n === null || typeof n != "object" ? null : (n = ce && n[ce] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var be = Object.assign, L;
  function x(n) {
    if (L === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        L = r && r[1] || "";
      }
    return `
` + L + n;
  }
  var J = !1;
  function Se(n, r) {
    if (!n || J)
      return "";
    J = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (V) {
            var o = V;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (V) {
            o = V;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (V) {
          o = V;
        }
        n();
      }
    } catch (V) {
      if (V && o && typeof V.stack == "string") {
        for (var c = V.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, C = d.length - 1; 1 <= m && 0 <= C && c[m] !== d[C]; )
          C--;
        for (; 1 <= m && 0 <= C; m--, C--)
          if (c[m] !== d[C]) {
            if (m !== 1 || C !== 1)
              do
                if (m--, C--, 0 > C || c[m] !== d[C]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= C);
            break;
          }
      }
    } finally {
      J = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? x(n) : "";
  }
  function Oe(n) {
    switch (n.tag) {
      case 5:
        return x(n.type);
      case 16:
        return x("Lazy");
      case 13:
        return x("Suspense");
      case 19:
        return x("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Se(n.type, !1), n;
      case 11:
        return n = Se(n.type.render, !1), n;
      case 1:
        return n = Se(n.type, !0), n;
      default:
        return "";
    }
  }
  function _e(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ge:
        return "Fragment";
      case je:
        return "Portal";
      case jt:
        return "Profiler";
      case vt:
        return "StrictMode";
      case qe:
        return "Suspense";
      case ot:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case wt:
          return (n.displayName || "Context") + ".Consumer";
        case Lt:
          return (n._context.displayName || "Context") + ".Provider";
        case Pt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Nt:
          return r = n.displayName || null, r !== null ? r : _e(n.type) || "Memo";
        case ft:
          r = n._payload, n = n._init;
          try {
            return _e(n(r));
          } catch {
          }
      }
    return null;
  }
  function k(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _e(r);
      case 8:
        return r === vt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function B(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ee(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function se(n) {
    var r = ee(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function ke(n) {
    n._valueTracker || (n._valueTracker = se(n));
  }
  function et(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = ee(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function gt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function St(n, r) {
    var l = r.checked;
    return be({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function nn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = B(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function qt(n, r) {
    r = r.checked, r != null && Ne(n, "checked", r, !1);
  }
  function fn(n, r) {
    qt(n, r);
    var l = B(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? gr(n, r.type, l) : r.hasOwnProperty("defaultValue") && gr(n, r.type, B(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function An(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function gr(n, r, l) {
    (r !== "number" || gt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Wn = Array.isArray;
  function lr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + B(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Sr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(b(91));
    return be({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ur(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(b(92));
        if (Wn(l)) {
          if (1 < l.length)
            throw Error(b(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: B(l) };
  }
  function Ar(n, r) {
    var l = B(r.value), o = B(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Jn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Zn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Zn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var or, la = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (or = or || document.createElement("div"), or.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = or.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Er(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var we = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(we).forEach(function(n) {
    tt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), we[r] = we[n];
    });
  });
  function kt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || we.hasOwnProperty(n) && we[n] ? ("" + r).trim() : r + "px";
  }
  function Gt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = kt(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Wt = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dn(n, r) {
    if (r) {
      if (Wt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(b(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(b(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(b(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(b(62));
    }
  }
  function Rn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var sr = null;
  function rn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Cr = null, Xt = null, Kt = null;
  function xa(n) {
    if (n = ds(n)) {
      if (typeof Cr != "function")
        throw Error(b(280));
      var r = n.stateNode;
      r && (r = it(r), Cr(n.stateNode, n.type, r));
    }
  }
  function zr(n) {
    Xt ? Kt ? Kt.push(n) : Kt = [n] : Xt = n;
  }
  function Qn() {
    if (Xt) {
      var n = Xt, r = Kt;
      if (Kt = Xt = null, xa(n), r)
        for (n = 0; n < r.length; n++)
          xa(r[n]);
    }
  }
  function ci(n, r) {
    return n(r);
  }
  function Hi() {
  }
  var jr = !1;
  function fi(n, r, l) {
    if (jr)
      return n(r, l);
    jr = !0;
    try {
      return ci(n, r, l);
    } finally {
      jr = !1, (Xt !== null || Kt !== null) && (Hi(), Qn());
    }
  }
  function Yr(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = it(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(b(231, r, typeof l));
    return l;
  }
  var _a = !1;
  if (Ve)
    try {
      var Wr = {};
      Object.defineProperty(Wr, "passive", { get: function() {
        _a = !0;
      } }), window.addEventListener("test", Wr, Wr), window.removeEventListener("test", Wr, Wr);
    } catch {
      _a = !1;
    }
  function ua(n, r, l, o, c, d, m, C, w) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, V);
    } catch (fe) {
      this.onError(fe);
    }
  }
  var cr = !1, Pr = null, Ha = !1, ka = null, T = { onError: function(n) {
    cr = !0, Pr = n;
  } };
  function le(n, r, l, o, c, d, m, C, w) {
    cr = !1, Pr = null, ua.apply(T, arguments);
  }
  function de(n, r, l, o, c, d, m, C, w) {
    if (le.apply(this, arguments), cr) {
      if (cr) {
        var V = Pr;
        cr = !1, Pr = null;
      } else
        throw Error(b(198));
      Ha || (Ha = !0, ka = V);
    }
  }
  function Xe(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Dt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function zt(n) {
    if (Xe(n) !== n)
      throw Error(b(188));
  }
  function S(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Xe(n), r === null)
        throw Error(b(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return zt(c), n;
          if (d === o)
            return zt(c), r;
          d = d.sibling;
        }
        throw Error(b(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, C = c.child; C; ) {
          if (C === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (C === o) {
            m = !0, o = c, l = d;
            break;
          }
          C = C.sibling;
        }
        if (!m) {
          for (C = d.child; C; ) {
            if (C === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (C === o) {
              m = !0, o = d, l = c;
              break;
            }
            C = C.sibling;
          }
          if (!m)
            throw Error(b(189));
        }
      }
      if (l.alternate !== o)
        throw Error(b(190));
    }
    if (l.tag !== 3)
      throw Error(b(188));
    return l.stateNode.current === l ? n : r;
  }
  function M(n) {
    return n = S(n), n !== null ? K(n) : null;
  }
  function K(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = K(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var ae = H.unstable_scheduleCallback, Re = H.unstable_cancelCallback, xt = H.unstable_shouldYield, Mt = H.unstable_requestPaint, $e = H.unstable_now, an = H.unstable_getCurrentPriorityLevel, gn = H.unstable_ImmediatePriority, lt = H.unstable_UserBlockingPriority, Sn = H.unstable_NormalPriority, Fr = H.unstable_LowPriority, Rr = H.unstable_IdlePriority, Ri = null, Tr = null;
  function yl(n) {
    if (Tr && typeof Tr.onCommitFiberRoot == "function")
      try {
        Tr.onCommitFiberRoot(Ri, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Qr = Math.clz32 ? Math.clz32 : tc, Xo = Math.log, Ko = Math.LN2;
  function tc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Xo(n) / Ko | 0) | 0;
  }
  var Fu = 64, gl = 4194304;
  function di(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Gr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var C = m & ~c;
      C !== 0 ? o = di(C) : (d &= m, d !== 0 && (o = di(d)));
    } else
      m = l & ~c, m !== 0 ? o = di(m) : d !== 0 && (o = di(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Qr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Sl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function El(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Qr(d), C = 1 << m, w = c[m];
      w === -1 ? (!(C & l) || C & o) && (c[m] = Sl(C, r)) : w <= r && (n.expiredLanes |= C), d &= ~C;
    }
  }
  function Cl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Hu() {
    var n = Fu;
    return Fu <<= 1, !(Fu & 4194240) && (Fu = 64), n;
  }
  function Vu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Vi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Qr(r), n[r] = l;
  }
  function Wf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Qr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ti(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Qr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Jt = 0;
  function Bu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Jl, $u, Vt, Iu, Yu, Rt = !1, Zl = [], Mn = null, oa = null, qr = null, Rl = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), un = [], nc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function sa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Mn = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        qr = null;
        break;
      case "pointerover":
      case "pointerout":
        Rl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(r.pointerId);
    }
  }
  function fr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ds(r), r !== null && $u(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function bi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Mn = fr(Mn, n, r, l, o, c), !0;
      case "dragenter":
        return oa = fr(oa, n, r, l, o, c), !0;
      case "mouseover":
        return qr = fr(qr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Rl.set(d, fr(Rl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, zn.set(d, fr(zn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function rc(n) {
    var r = Ia(n.target);
    if (r !== null) {
      var l = Xe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Dt(l), r !== null) {
            n.blockedOn = r, Yu(n.priority, function() {
              Vt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Bi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Qu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        sr = o, l.target.dispatchEvent(o), sr = null;
      } else
        return r = ds(l), r !== null && $u(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Tl(n, r, l) {
    Bi(n) && l.delete(r);
  }
  function ac() {
    Rt = !1, Mn !== null && Bi(Mn) && (Mn = null), oa !== null && Bi(oa) && (oa = null), qr !== null && Bi(qr) && (qr = null), Rl.forEach(Tl), zn.forEach(Tl);
  }
  function Va(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Rt || (Rt = !0, H.unstable_scheduleCallback(H.unstable_NormalPriority, ac)));
  }
  function bl(n) {
    function r(c) {
      return Va(c, n);
    }
    if (0 < Zl.length) {
      Va(Zl[0], n);
      for (var l = 1; l < Zl.length; l++) {
        var o = Zl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Mn !== null && Va(Mn, n), oa !== null && Va(oa, n), qr !== null && Va(qr, n), Rl.forEach(r), zn.forEach(r), l = 0; l < un.length; l++)
      o = un[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < un.length && (l = un[0], l.blockedOn === null); )
      rc(l), l.blockedOn === null && un.shift();
  }
  var $i = me.ReactCurrentBatchConfig, Ba = !0;
  function Wu(n, r, l, o) {
    var c = Jt, d = $i.transition;
    $i.transition = null;
    try {
      Jt = 1, xl(n, r, l, o);
    } finally {
      Jt = c, $i.transition = d;
    }
  }
  function wl(n, r, l, o) {
    var c = Jt, d = $i.transition;
    $i.transition = null;
    try {
      Jt = 4, xl(n, r, l, o);
    } finally {
      Jt = c, $i.transition = d;
    }
  }
  function xl(n, r, l, o) {
    if (Ba) {
      var c = Qu(n, r, l, o);
      if (c === null)
        pc(n, r, o, eu, l), sa(n, o);
      else if (bi(c, n, r, l, o))
        o.stopPropagation();
      else if (sa(n, o), r & 4 && -1 < nc.indexOf(n)) {
        for (; c !== null; ) {
          var d = ds(c);
          if (d !== null && Jl(d), d = Qu(n, r, l, o), d === null && pc(n, r, o, eu, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        pc(n, r, o, null, l);
    }
  }
  var eu = null;
  function Qu(n, r, l, o) {
    if (eu = null, n = rn(o), n = Ia(n), n !== null)
      if (r = Xe(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Dt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return eu = n, null;
  }
  function Jo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (an()) {
          case gn:
            return 1;
          case lt:
            return 4;
          case Sn:
          case Fr:
            return 16;
          case Rr:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pi = null, h = null, R = null;
  function F() {
    if (R)
      return R;
    var n, r = h, l = r.length, o, c = "value" in pi ? pi.value : pi.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return R = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function I(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ye() {
    return !0;
  }
  function dt() {
    return !1;
  }
  function Le(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var C in n)
        n.hasOwnProperty(C) && (l = n[C], this[C] = l ? l(d) : d[C]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ye : dt, this.isPropagationStopped = dt, this;
    }
    return be(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ye);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ye);
    }, persist: function() {
    }, isPersistent: ye }), r;
  }
  var st = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ut = Le(st), Qt = be({}, st, { view: 0, detail: 0 }), vn = Le(Qt), cn, hn, En, Bt = be({}, Qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Kf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== En && (En && n.type === "mousemove" ? (cn = n.screenX - En.screenX, hn = n.screenY - En.screenY) : hn = cn = 0, En = n), cn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : hn;
  } }), Ii = Le(Bt), Gu = be({}, Bt, { dataTransfer: 0 }), Zo = Le(Gu), Qf = be({}, Qt, { relatedTarget: 0 }), vi = Le(Qf), es = be({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ts = Le(es), Gf = be({}, st, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Qm = Le(Gf), Gm = be({}, st, { data: 0 }), qf = Le(Gm), Xf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, tv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function rv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = nv[n]) ? !!r[n] : !1;
  }
  function Kf() {
    return rv;
  }
  var Yi = be({}, Qt, { key: function(n) {
    if (n.key) {
      var r = Xf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = I(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Kf, charCode: function(n) {
    return n.type === "keypress" ? I(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? I(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), qm = Le(Yi), Jf = be({}, Bt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ic = Le(Jf), Zf = be({}, Qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Kf }), Xm = Le(Zf), lc = be({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), av = Le(lc), ca = be({}, Bt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wi = Le(ca), Gn = [9, 13, 27, 32], hi = Ve && "CompositionEvent" in window, tu = null;
  Ve && "documentMode" in document && (tu = document.documentMode);
  var uc = Ve && "TextEvent" in window && !tu, iv = Ve && (!hi || tu && 8 < tu && 11 >= tu), qu = " ", lv = !1;
  function uv(n, r) {
    switch (n) {
      case "keyup":
        return Gn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function oc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Xu = !1;
  function Km(n, r) {
    switch (n) {
      case "compositionend":
        return oc(r);
      case "keypress":
        return r.which !== 32 ? null : (lv = !0, qu);
      case "textInput":
        return n = r.data, n === qu && lv ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (Xu)
      return n === "compositionend" || !hi && uv(n, r) ? (n = F(), R = h = pi = null, Xu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return iv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ov = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function sv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ov[n.type] : r === "textarea";
  }
  function cv(n, r, l, o) {
    zr(o), r = ss(r, "onChange"), 0 < r.length && (l = new Ut("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ns = null, Ku = null;
  function Ju(n) {
    dc(n, 0);
  }
  function Zu(n) {
    var r = to(n);
    if (et(r))
      return n;
  }
  function fv(n, r) {
    if (n === "change")
      return r;
  }
  var ed = !1;
  if (Ve) {
    var td;
    if (Ve) {
      var nd = "oninput" in document;
      if (!nd) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"), nd = typeof dv.oninput == "function";
      }
      td = nd;
    } else
      td = !1;
    ed = td && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    ns && (ns.detachEvent("onpropertychange", vv), Ku = ns = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Zu(Ku)) {
      var r = [];
      cv(r, Ku, n, rn(n)), fi(Ju, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (pv(), ns = r, Ku = l, ns.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function ey(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Zu(Ku);
  }
  function ty(n, r) {
    if (n === "click")
      return Zu(r);
  }
  function hv(n, r) {
    if (n === "input" || n === "change")
      return Zu(r);
  }
  function ny(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var $a = typeof Object.is == "function" ? Object.is : ny;
  function rs(n, r) {
    if ($a(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Q.call(r, c) || !$a(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function mv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function yv(n, r) {
    var l = mv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = mv(l);
    }
  }
  function gv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? gv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function sc() {
    for (var n = window, r = gt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = gt(n.document);
    }
    return r;
  }
  function Qi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function cc(n) {
    var r = sc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && gv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Qi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = yv(l, d);
          var m = yv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Sv = Ve && "documentMode" in document && 11 >= document.documentMode, mi = null, rd = null, as = null, ad = !1;
  function Ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || mi == null || mi !== gt(o) || (o = mi, "selectionStart" in o && Qi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), as && rs(as, o) || (as = o, o = ss(rd, "onSelect"), 0 < o.length && (r = new Ut("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = mi)));
  }
  function fc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var nu = { animationend: fc("Animation", "AnimationEnd"), animationiteration: fc("Animation", "AnimationIteration"), animationstart: fc("Animation", "AnimationStart"), transitionend: fc("Transition", "TransitionEnd") }, id = {}, ld = {};
  Ve && (ld = document.createElement("div").style, "AnimationEvent" in window || (delete nu.animationend.animation, delete nu.animationiteration.animation, delete nu.animationstart.animation), "TransitionEvent" in window || delete nu.transitionend.transition);
  function dr(n) {
    if (id[n])
      return id[n];
    if (!nu[n])
      return n;
    var r = nu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in ld)
        return id[n] = r[l];
    return n;
  }
  var ud = dr("animationend"), Cv = dr("animationiteration"), Rv = dr("animationstart"), Tv = dr("transitionend"), bv = /* @__PURE__ */ new Map(), wv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gi(n, r) {
    bv.set(n, r), te(r, [n]);
  }
  for (var is = 0; is < wv.length; is++) {
    var ru = wv[is], ry = ru.toLowerCase(), ls = ru[0].toUpperCase() + ru.slice(1);
    Gi(ry, "on" + ls);
  }
  Gi(ud, "onAnimationEnd"), Gi(Cv, "onAnimationIteration"), Gi(Rv, "onAnimationStart"), Gi("dblclick", "onDoubleClick"), Gi("focusin", "onFocus"), Gi("focusout", "onBlur"), Gi(Tv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), te("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), te("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), te("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), te("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), te("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), te("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
  function xv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, de(o, r, void 0, n), n.currentTarget = null;
  }
  function dc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var C = o[m], w = C.instance, V = C.currentTarget;
            if (C = C.listener, w !== d && c.isPropagationStopped())
              break e;
            xv(c, C, V), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (C = o[m], w = C.instance, V = C.currentTarget, C = C.listener, w !== d && c.isPropagationStopped())
              break e;
            xv(c, C, V), d = w;
          }
      }
    }
    if (Ha)
      throw n = ka, Ha = !1, ka = null, n;
  }
  function mn(n, r) {
    var l = r[vd];
    l === void 0 && (l = r[vd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (_v(r, n, 2, !1), l.add(o));
  }
  function _l(n, r, l) {
    var o = 0;
    r && (o |= 4), _v(l, n, o, r);
  }
  var qi = "_reactListening" + Math.random().toString(36).slice(2);
  function eo(n) {
    if (!n[qi]) {
      n[qi] = !0, Ce.forEach(function(l) {
        l !== "selectionchange" && (ay.has(l) || _l(l, !1, n), _l(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[qi] || (r[qi] = !0, _l("selectionchange", !1, r));
    }
  }
  function _v(n, r, l, o) {
    switch (Jo(r)) {
      case 1:
        var c = Wu;
        break;
      case 4:
        c = wl;
        break;
      default:
        c = xl;
    }
    l = c.bind(null, r, l, n), c = void 0, !_a || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function pc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var C = o.stateNode.containerInfo;
            if (C === c || C.nodeType === 8 && C.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; C !== null; ) {
              if (m = Ia(C), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                o = d = m;
                continue e;
              }
              C = C.parentNode;
            }
          }
          o = o.return;
        }
    fi(function() {
      var V = d, fe = rn(l), pe = [];
      e: {
        var ue = bv.get(n);
        if (ue !== void 0) {
          var Fe = Ut, We = n;
          switch (n) {
            case "keypress":
              if (I(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Fe = qm;
              break;
            case "focusin":
              We = "focus", Fe = vi;
              break;
            case "focusout":
              We = "blur", Fe = vi;
              break;
            case "beforeblur":
            case "afterblur":
              Fe = vi;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Fe = Ii;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Fe = Zo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Fe = Xm;
              break;
            case ud:
            case Cv:
            case Rv:
              Fe = ts;
              break;
            case Tv:
              Fe = av;
              break;
            case "scroll":
              Fe = vn;
              break;
            case "wheel":
              Fe = Wi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Fe = Qm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Fe = ic;
          }
          var Ke = (r & 4) !== 0, $n = !Ke && n === "scroll", N = Ke ? ue !== null ? ue + "Capture" : null : ue;
          Ke = [];
          for (var O = V, j; O !== null; ) {
            j = O;
            var Ee = j.stateNode;
            if (j.tag === 5 && Ee !== null && (j = Ee, N !== null && (Ee = Yr(O, N), Ee != null && Ke.push(os(O, Ee, j)))), $n)
              break;
            O = O.return;
          }
          0 < Ke.length && (ue = new Fe(ue, We, null, l, fe), pe.push({ event: ue, listeners: Ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ue = n === "mouseover" || n === "pointerover", Fe = n === "mouseout" || n === "pointerout", ue && l !== sr && (We = l.relatedTarget || l.fromElement) && (Ia(We) || We[Xi]))
            break e;
          if ((Fe || ue) && (ue = fe.window === fe ? fe : (ue = fe.ownerDocument) ? ue.defaultView || ue.parentWindow : window, Fe ? (We = l.relatedTarget || l.toElement, Fe = V, We = We ? Ia(We) : null, We !== null && ($n = Xe(We), We !== $n || We.tag !== 5 && We.tag !== 6) && (We = null)) : (Fe = null, We = V), Fe !== We)) {
            if (Ke = Ii, Ee = "onMouseLeave", N = "onMouseEnter", O = "mouse", (n === "pointerout" || n === "pointerover") && (Ke = ic, Ee = "onPointerLeave", N = "onPointerEnter", O = "pointer"), $n = Fe == null ? ue : to(Fe), j = We == null ? ue : to(We), ue = new Ke(Ee, O + "leave", Fe, l, fe), ue.target = $n, ue.relatedTarget = j, Ee = null, Ia(fe) === V && (Ke = new Ke(N, O + "enter", We, l, fe), Ke.target = j, Ke.relatedTarget = $n, Ee = Ke), $n = Ee, Fe && We)
              t: {
                for (Ke = Fe, N = We, O = 0, j = Ke; j; j = au(j))
                  O++;
                for (j = 0, Ee = N; Ee; Ee = au(Ee))
                  j++;
                for (; 0 < O - j; )
                  Ke = au(Ke), O--;
                for (; 0 < j - O; )
                  N = au(N), j--;
                for (; O--; ) {
                  if (Ke === N || N !== null && Ke === N.alternate)
                    break t;
                  Ke = au(Ke), N = au(N);
                }
                Ke = null;
              }
            else
              Ke = null;
            Fe !== null && od(pe, ue, Fe, Ke, !1), We !== null && $n !== null && od(pe, $n, We, Ke, !0);
          }
        }
        e: {
          if (ue = V ? to(V) : window, Fe = ue.nodeName && ue.nodeName.toLowerCase(), Fe === "select" || Fe === "input" && ue.type === "file")
            var Ze = fv;
          else if (sv(ue))
            if (ed)
              Ze = hv;
            else {
              Ze = ey;
              var pt = Zm;
            }
          else
            (Fe = ue.nodeName) && Fe.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (Ze = ty);
          if (Ze && (Ze = Ze(n, V))) {
            cv(pe, Ze, l, fe);
            break e;
          }
          pt && pt(n, ue, V), n === "focusout" && (pt = ue._wrapperState) && pt.controlled && ue.type === "number" && gr(ue, "number", ue.value);
        }
        switch (pt = V ? to(V) : window, n) {
          case "focusin":
            (sv(pt) || pt.contentEditable === "true") && (mi = pt, rd = V, as = null);
            break;
          case "focusout":
            as = rd = mi = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Ev(pe, l, fe);
            break;
          case "selectionchange":
            if (Sv)
              break;
          case "keydown":
          case "keyup":
            Ev(pe, l, fe);
        }
        var Qe;
        if (hi)
          e: {
            switch (n) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break e;
              case "compositionend":
                ht = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break e;
            }
            ht = void 0;
          }
        else
          Xu ? uv(n, l) && (ht = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ht = "onCompositionStart");
        ht && (iv && l.locale !== "ko" && (Xu || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Xu && (Qe = F()) : (pi = fe, h = "value" in pi ? pi.value : pi.textContent, Xu = !0)), pt = ss(V, ht), 0 < pt.length && (ht = new qf(ht, n, null, l, fe), pe.push({ event: ht, listeners: pt }), Qe ? ht.data = Qe : (Qe = oc(l), Qe !== null && (ht.data = Qe)))), (Qe = uc ? Km(n, l) : Jm(n, l)) && (V = ss(V, "onBeforeInput"), 0 < V.length && (fe = new qf("onBeforeInput", "beforeinput", null, l, fe), pe.push({ event: fe, listeners: V }), fe.data = Qe));
      }
      dc(pe, r);
    });
  }
  function os(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ss(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Yr(n, l), d != null && o.unshift(os(n, d, c)), d = Yr(n, r), d != null && o.push(os(n, d, c))), n = n.return;
    }
    return o;
  }
  function au(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function od(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var C = l, w = C.alternate, V = C.stateNode;
      if (w !== null && w === o)
        break;
      C.tag === 5 && V !== null && (C = V, c ? (w = Yr(l, d), w != null && m.unshift(os(l, w, C))) : c || (w = Yr(l, d), w != null && m.push(os(l, w, C)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var sd = /\r\n?/g, iy = /\u0000|\uFFFD/g;
  function cd(n) {
    return (typeof n == "string" ? n : "" + n).replace(sd, `
`).replace(iy, "");
  }
  function vc(n, r, l) {
    if (r = cd(r), cd(n) !== r && l)
      throw Error(b(425));
  }
  function hc() {
  }
  var fd = null, iu = null;
  function cs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var lu = typeof setTimeout == "function" ? setTimeout : void 0, kv = typeof clearTimeout == "function" ? clearTimeout : void 0, dd = typeof Promise == "function" ? Promise : void 0, pd = typeof queueMicrotask == "function" ? queueMicrotask : typeof dd < "u" ? function(n) {
    return dd.resolve(null).then(n).catch(ly);
  } : lu;
  function ly(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function kl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), bl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    bl(r);
  }
  function yi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function fs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ol = Math.random().toString(36).slice(2), wi = "__reactFiber$" + Ol, uu = "__reactProps$" + Ol, Xi = "__reactContainer$" + Ol, vd = "__reactEvents$" + Ol, uy = "__reactListeners$" + Ol, hd = "__reactHandles$" + Ol;
  function Ia(n) {
    var r = n[wi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Xi] || l[wi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = fs(n); n !== null; ) {
            if (l = n[wi])
              return l;
            n = fs(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ds(n) {
    return n = n[wi] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function to(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(b(33));
  }
  function it(n) {
    return n[uu] || null;
  }
  var Dl = [], Tn = -1;
  function Ot(n) {
    return { current: n };
  }
  function ln(n) {
    0 > Tn || (n.current = Dl[Tn], Dl[Tn] = null, Tn--);
  }
  function on(n, r) {
    Tn++, Dl[Tn] = n.current, n.current = r;
  }
  var xi = {}, Et = Ot(xi), jn = Ot(!1), fa = xi;
  function Ya(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return xi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function _n(n) {
    return n = n.childContextTypes, n != null;
  }
  function Wa() {
    ln(jn), ln(Et);
  }
  function Ml(n, r, l) {
    if (Et.current !== xi)
      throw Error(b(168));
    on(Et, r), on(jn, l);
  }
  function ps(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(b(108, k(n) || "Unknown", c));
    return be({}, l, o);
  }
  function mc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || xi, fa = Et.current, on(Et, n), on(jn, jn.current), !0;
  }
  function Ov(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(b(169));
    l ? (n = ps(n, r, fa), o.__reactInternalMemoizedMergedChildContext = n, ln(jn), ln(Et), on(Et, n)) : ln(jn), on(jn, l);
  }
  var Oa = null, pr = !1, vs = !1;
  function md(n) {
    Oa === null ? Oa = [n] : Oa.push(n);
  }
  function yd(n) {
    pr = !0, md(n);
  }
  function da() {
    if (!vs && Oa !== null) {
      vs = !0;
      var n = 0, r = Jt;
      try {
        var l = Oa;
        for (Jt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Oa = null, pr = !1;
      } catch (c) {
        throw Oa !== null && (Oa = Oa.slice(n + 1)), ae(gn, da), c;
      } finally {
        Jt = r, vs = !1;
      }
    }
    return null;
  }
  var Ll = [], pa = 0, ou = null, no = 0, va = [], Hr = 0, Qa = null, br = 1, Ki = "";
  function Da(n, r) {
    Ll[pa++] = no, Ll[pa++] = ou, ou = n, no = r;
  }
  function gd(n, r, l) {
    va[Hr++] = br, va[Hr++] = Ki, va[Hr++] = Qa, Qa = n;
    var o = br;
    n = Ki;
    var c = 32 - Qr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Qr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, br = 1 << 32 - Qr(r) + c | l << c | o, Ki = d + n;
    } else
      br = 1 << d | l << c | o, Ki = n;
  }
  function yc(n) {
    n.return !== null && (Da(n, 1), gd(n, 1, 0));
  }
  function Sd(n) {
    for (; n === ou; )
      ou = Ll[--pa], Ll[pa] = null, no = Ll[--pa], Ll[pa] = null;
    for (; n === Qa; )
      Qa = va[--Hr], va[Hr] = null, Ki = va[--Hr], va[Hr] = null, br = va[--Hr], va[Hr] = null;
  }
  var Ma = null, ha = null, bn = !1, Ga = null;
  function Ed(n, r) {
    var l = ni(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Dv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ma = n, ha = yi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ma = n, ha = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Qa !== null ? { id: br, overflow: Ki } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ni(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ma = n, ha = null, !0) : !1;
      default:
        return !1;
    }
  }
  function gc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Sc(n) {
    if (bn) {
      var r = ha;
      if (r) {
        var l = r;
        if (!Dv(n, r)) {
          if (gc(n))
            throw Error(b(418));
          r = yi(l.nextSibling);
          var o = Ma;
          r && Dv(n, r) ? Ed(o, l) : (n.flags = n.flags & -4097 | 2, bn = !1, Ma = n);
        }
      } else {
        if (gc(n))
          throw Error(b(418));
        n.flags = n.flags & -4097 | 2, bn = !1, Ma = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ma = n;
  }
  function Ec(n) {
    if (n !== Ma)
      return !1;
    if (!bn)
      return Mv(n), bn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !cs(n.type, n.memoizedProps)), r && (r = ha)) {
      if (gc(n))
        throw Lv(), Error(b(418));
      for (; r; )
        Ed(n, r), r = yi(r.nextSibling);
    }
    if (Mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(b(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ha = yi(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ha = null;
      }
    } else
      ha = Ma ? yi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Lv() {
    for (var n = ha; n; )
      n = yi(n.nextSibling);
  }
  function Ln() {
    ha = Ma = null, bn = !1;
  }
  function Cd(n) {
    Ga === null ? Ga = [n] : Ga.push(n);
  }
  var Cc = me.ReactCurrentBatchConfig;
  function su(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(b(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(b(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var C = c.refs;
          m === null ? delete C[d] : C[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(b(284));
      if (!l._owner)
        throw Error(b(290, n));
    }
    return n;
  }
  function _i(n, r) {
    throw n = Object.prototype.toString.call(r), Error(b(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Rc(n) {
    function r(N, O) {
      if (n) {
        var j = N.deletions;
        j === null ? (N.deletions = [O], N.flags |= 16) : j.push(O);
      }
    }
    function l(N, O) {
      if (!n)
        return null;
      for (; O !== null; )
        r(N, O), O = O.sibling;
      return null;
    }
    function o(N, O) {
      for (N = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? N.set(O.key, O) : N.set(O.index, O), O = O.sibling;
      return N;
    }
    function c(N, O) {
      return N = Hl(N, O), N.index = 0, N.sibling = null, N;
    }
    function d(N, O, j) {
      return N.index = j, n ? (j = N.alternate, j !== null ? (j = j.index, j < O ? (N.flags |= 2, O) : j) : (N.flags |= 2, O)) : (N.flags |= 1048576, O);
    }
    function m(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function C(N, O, j, Ee) {
      return O === null || O.tag !== 6 ? (O = cf(j, N.mode, Ee), O.return = N, O) : (O = c(O, j), O.return = N, O);
    }
    function w(N, O, j, Ee) {
      var Ze = j.type;
      return Ze === ge ? fe(N, O, j.props.children, Ee, j.key) : O !== null && (O.elementType === Ze || typeof Ze == "object" && Ze !== null && Ze.$$typeof === ft && Nv(Ze) === O.type) ? (Ee = c(O, j.props), Ee.ref = su(N, O, j), Ee.return = N, Ee) : (Ee = of(j.type, j.key, j.props, null, N.mode, Ee), Ee.ref = su(N, O, j), Ee.return = N, Ee);
    }
    function V(N, O, j, Ee) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== j.containerInfo || O.stateNode.implementation !== j.implementation ? (O = Ls(j, N.mode, Ee), O.return = N, O) : (O = c(O, j.children || []), O.return = N, O);
    }
    function fe(N, O, j, Ee, Ze) {
      return O === null || O.tag !== 7 ? (O = bu(j, N.mode, Ee, Ze), O.return = N, O) : (O = c(O, j), O.return = N, O);
    }
    function pe(N, O, j) {
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return O = cf("" + O, N.mode, j), O.return = N, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case q:
            return j = of(O.type, O.key, O.props, null, N.mode, j), j.ref = su(N, null, O), j.return = N, j;
          case je:
            return O = Ls(O, N.mode, j), O.return = N, O;
          case ft:
            var Ee = O._init;
            return pe(N, Ee(O._payload), j);
        }
        if (Wn(O) || Pe(O))
          return O = bu(O, N.mode, j, null), O.return = N, O;
        _i(N, O);
      }
      return null;
    }
    function ue(N, O, j, Ee) {
      var Ze = O !== null ? O.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number")
        return Ze !== null ? null : C(N, O, "" + j, Ee);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case q:
            return j.key === Ze ? w(N, O, j, Ee) : null;
          case je:
            return j.key === Ze ? V(N, O, j, Ee) : null;
          case ft:
            return Ze = j._init, ue(
              N,
              O,
              Ze(j._payload),
              Ee
            );
        }
        if (Wn(j) || Pe(j))
          return Ze !== null ? null : fe(N, O, j, Ee, null);
        _i(N, j);
      }
      return null;
    }
    function Fe(N, O, j, Ee, Ze) {
      if (typeof Ee == "string" && Ee !== "" || typeof Ee == "number")
        return N = N.get(j) || null, C(O, N, "" + Ee, Ze);
      if (typeof Ee == "object" && Ee !== null) {
        switch (Ee.$$typeof) {
          case q:
            return N = N.get(Ee.key === null ? j : Ee.key) || null, w(O, N, Ee, Ze);
          case je:
            return N = N.get(Ee.key === null ? j : Ee.key) || null, V(O, N, Ee, Ze);
          case ft:
            var pt = Ee._init;
            return Fe(N, O, j, pt(Ee._payload), Ze);
        }
        if (Wn(Ee) || Pe(Ee))
          return N = N.get(j) || null, fe(O, N, Ee, Ze, null);
        _i(O, Ee);
      }
      return null;
    }
    function We(N, O, j, Ee) {
      for (var Ze = null, pt = null, Qe = O, ht = O = 0, ar = null; Qe !== null && ht < j.length; ht++) {
        Qe.index > ht ? (ar = Qe, Qe = null) : ar = Qe.sibling;
        var Zt = ue(N, Qe, j[ht], Ee);
        if (Zt === null) {
          Qe === null && (Qe = ar);
          break;
        }
        n && Qe && Zt.alternate === null && r(N, Qe), O = d(Zt, O, ht), pt === null ? Ze = Zt : pt.sibling = Zt, pt = Zt, Qe = ar;
      }
      if (ht === j.length)
        return l(N, Qe), bn && Da(N, ht), Ze;
      if (Qe === null) {
        for (; ht < j.length; ht++)
          Qe = pe(N, j[ht], Ee), Qe !== null && (O = d(Qe, O, ht), pt === null ? Ze = Qe : pt.sibling = Qe, pt = Qe);
        return bn && Da(N, ht), Ze;
      }
      for (Qe = o(N, Qe); ht < j.length; ht++)
        ar = Fe(Qe, N, ht, j[ht], Ee), ar !== null && (n && ar.alternate !== null && Qe.delete(ar.key === null ? ht : ar.key), O = d(ar, O, ht), pt === null ? Ze = ar : pt.sibling = ar, pt = ar);
      return n && Qe.forEach(function(al) {
        return r(N, al);
      }), bn && Da(N, ht), Ze;
    }
    function Ke(N, O, j, Ee) {
      var Ze = Pe(j);
      if (typeof Ze != "function")
        throw Error(b(150));
      if (j = Ze.call(j), j == null)
        throw Error(b(151));
      for (var pt = Ze = null, Qe = O, ht = O = 0, ar = null, Zt = j.next(); Qe !== null && !Zt.done; ht++, Zt = j.next()) {
        Qe.index > ht ? (ar = Qe, Qe = null) : ar = Qe.sibling;
        var al = ue(N, Qe, Zt.value, Ee);
        if (al === null) {
          Qe === null && (Qe = ar);
          break;
        }
        n && Qe && al.alternate === null && r(N, Qe), O = d(al, O, ht), pt === null ? Ze = al : pt.sibling = al, pt = al, Qe = ar;
      }
      if (Zt.done)
        return l(
          N,
          Qe
        ), bn && Da(N, ht), Ze;
      if (Qe === null) {
        for (; !Zt.done; ht++, Zt = j.next())
          Zt = pe(N, Zt.value, Ee), Zt !== null && (O = d(Zt, O, ht), pt === null ? Ze = Zt : pt.sibling = Zt, pt = Zt);
        return bn && Da(N, ht), Ze;
      }
      for (Qe = o(N, Qe); !Zt.done; ht++, Zt = j.next())
        Zt = Fe(Qe, N, ht, Zt.value, Ee), Zt !== null && (n && Zt.alternate !== null && Qe.delete(Zt.key === null ? ht : Zt.key), O = d(Zt, O, ht), pt === null ? Ze = Zt : pt.sibling = Zt, pt = Zt);
      return n && Qe.forEach(function(wy) {
        return r(N, wy);
      }), bn && Da(N, ht), Ze;
    }
    function $n(N, O, j, Ee) {
      if (typeof j == "object" && j !== null && j.type === ge && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case q:
            e: {
              for (var Ze = j.key, pt = O; pt !== null; ) {
                if (pt.key === Ze) {
                  if (Ze = j.type, Ze === ge) {
                    if (pt.tag === 7) {
                      l(N, pt.sibling), O = c(pt, j.props.children), O.return = N, N = O;
                      break e;
                    }
                  } else if (pt.elementType === Ze || typeof Ze == "object" && Ze !== null && Ze.$$typeof === ft && Nv(Ze) === pt.type) {
                    l(N, pt.sibling), O = c(pt, j.props), O.ref = su(N, pt, j), O.return = N, N = O;
                    break e;
                  }
                  l(N, pt);
                  break;
                } else
                  r(N, pt);
                pt = pt.sibling;
              }
              j.type === ge ? (O = bu(j.props.children, N.mode, Ee, j.key), O.return = N, N = O) : (Ee = of(j.type, j.key, j.props, null, N.mode, Ee), Ee.ref = su(N, O, j), Ee.return = N, N = Ee);
            }
            return m(N);
          case je:
            e: {
              for (pt = j.key; O !== null; ) {
                if (O.key === pt)
                  if (O.tag === 4 && O.stateNode.containerInfo === j.containerInfo && O.stateNode.implementation === j.implementation) {
                    l(N, O.sibling), O = c(O, j.children || []), O.return = N, N = O;
                    break e;
                  } else {
                    l(N, O);
                    break;
                  }
                else
                  r(N, O);
                O = O.sibling;
              }
              O = Ls(j, N.mode, Ee), O.return = N, N = O;
            }
            return m(N);
          case ft:
            return pt = j._init, $n(N, O, pt(j._payload), Ee);
        }
        if (Wn(j))
          return We(N, O, j, Ee);
        if (Pe(j))
          return Ke(N, O, j, Ee);
        _i(N, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, O !== null && O.tag === 6 ? (l(N, O.sibling), O = c(O, j), O.return = N, N = O) : (l(N, O), O = cf(j, N.mode, Ee), O.return = N, N = O), m(N)) : l(N, O);
    }
    return $n;
  }
  var ro = Rc(!0), Uv = Rc(!1), Ji = Ot(null), er = null, De = null, qa = null;
  function La() {
    qa = De = er = null;
  }
  function Rd(n) {
    var r = Ji.current;
    ln(Ji), n._currentValue = r;
  }
  function Td(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ao(n, r) {
    er = n, qa = De = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ga = !0), n.firstContext = null);
  }
  function Xa(n) {
    var r = n._currentValue;
    if (qa !== n)
      if (n = { context: n, memoizedValue: r, next: null }, De === null) {
        if (er === null)
          throw Error(b(308));
        De = n, er.dependencies = { lanes: 0, firstContext: n };
      } else
        De = De.next = n;
    return r;
  }
  var cu = null;
  function qn(n) {
    cu === null ? cu = [n] : cu.push(n);
  }
  function Av(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, qn(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Zi(n, o);
  }
  function Zi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Nl = !1;
  function Tc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function io(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ma(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ul(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Ft & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Zi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, qn(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Zi(n, l);
  }
  function bc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ti(n, l);
    }
  }
  function zv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function wc(n, r, l, o) {
    var c = n.updateQueue;
    Nl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var w = C, V = w.next;
      w.next = null, m === null ? d = V : m.next = V, m = w;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, C = fe.lastBaseUpdate, C !== m && (C === null ? fe.firstBaseUpdate = V : C.next = V, fe.lastBaseUpdate = w));
    }
    if (d !== null) {
      var pe = c.baseState;
      m = 0, fe = V = w = null, C = d;
      do {
        var ue = C.lane, Fe = C.eventTime;
        if ((o & ue) === ue) {
          fe !== null && (fe = fe.next = {
            eventTime: Fe,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var We = n, Ke = C;
            switch (ue = r, Fe = l, Ke.tag) {
              case 1:
                if (We = Ke.payload, typeof We == "function") {
                  pe = We.call(Fe, pe, ue);
                  break e;
                }
                pe = We;
                break e;
              case 3:
                We.flags = We.flags & -65537 | 128;
              case 0:
                if (We = Ke.payload, ue = typeof We == "function" ? We.call(Fe, pe, ue) : We, ue == null)
                  break e;
                pe = be({}, pe, ue);
                break e;
              case 2:
                Nl = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (n.flags |= 64, ue = c.effects, ue === null ? c.effects = [C] : ue.push(C));
        } else
          Fe = { eventTime: Fe, lane: ue, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, fe === null ? (V = fe = Fe, w = pe) : fe = fe.next = Fe, m |= ue;
        if (C = C.next, C === null) {
          if (C = c.shared.pending, C === null)
            break;
          ue = C, C = ue.next, ue.next = null, c.lastBaseUpdate = ue, c.shared.pending = null;
        }
      } while (!0);
      if (fe === null && (w = pe), c.baseState = w, c.firstBaseUpdate = V, c.lastBaseUpdate = fe, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Eu |= m, n.lanes = m, n.memoizedState = pe;
    }
  }
  function jv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(b(191, c));
          c.call(o);
        }
      }
  }
  var hs = {}, gi = Ot(hs), lo = Ot(hs), ms = Ot(hs);
  function fu(n) {
    if (n === hs)
      throw Error(b(174));
    return n;
  }
  function bd(n, r) {
    switch (on(ms, r), on(lo, n), on(gi, hs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = yn(r, n);
    }
    ln(gi), on(gi, r);
  }
  function uo() {
    ln(gi), ln(lo), ln(ms);
  }
  function Pv(n) {
    fu(ms.current);
    var r = fu(gi.current), l = yn(r, n.type);
    r !== l && (on(lo, n), on(gi, l));
  }
  function wd(n) {
    lo.current === n && (ln(gi), ln(lo));
  }
  var kn = Ot(0);
  function xc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var _c = [];
  function xd() {
    for (var n = 0; n < _c.length; n++)
      _c[n]._workInProgressVersionPrimary = null;
    _c.length = 0;
  }
  var kc = me.ReactCurrentDispatcher, ys = me.ReactCurrentBatchConfig, Je = 0, nt = null, Ct = null, At = null, Na = !1, oo = !1, gs = 0, oy = 0;
  function Vr() {
    throw Error(b(321));
  }
  function Ss(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!$a(n[l], r[l]))
        return !1;
    return !0;
  }
  function re(n, r, l, o, c, d) {
    if (Je = d, nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, kc.current = n === null || n.memoizedState === null ? sy : Cn, n = l(o, c), oo) {
      d = 0;
      do {
        if (oo = !1, gs = 0, 25 <= d)
          throw Error(b(301));
        d += 1, At = Ct = null, r.updateQueue = null, kc.current = $c, n = l(o, c);
      } while (oo);
    }
    if (kc.current = Br, r = Ct !== null && Ct.next !== null, Je = 0, At = Ct = nt = null, Na = !1, r)
      throw Error(b(300));
    return n;
  }
  function Xn() {
    var n = gs !== 0;
    return gs = 0, n;
  }
  function at() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return At === null ? nt.memoizedState = At = n : At = At.next = n, At;
  }
  function wr() {
    if (Ct === null) {
      var n = nt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Ct.next;
    var r = At === null ? nt.memoizedState : At.next;
    if (r !== null)
      At = r, Ct = n;
    else {
      if (n === null)
        throw Error(b(310));
      Ct = n, n = { memoizedState: Ct.memoizedState, baseState: Ct.baseState, baseQueue: Ct.baseQueue, queue: Ct.queue, next: null }, At === null ? nt.memoizedState = At = n : At = At.next = n;
    }
    return At;
  }
  function Ua(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function el(n) {
    var r = wr(), l = r.queue;
    if (l === null)
      throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = Ct, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var C = m = null, w = null, V = d;
      do {
        var fe = V.lane;
        if ((Je & fe) === fe)
          w !== null && (w = w.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), o = V.hasEagerState ? V.eagerState : n(o, V.action);
        else {
          var pe = {
            lane: fe,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          w === null ? (C = w = pe, m = o) : w = w.next = pe, nt.lanes |= fe, Eu |= fe;
        }
        V = V.next;
      } while (V !== null && V !== d);
      w === null ? m = o : w.next = C, $a(o, r.memoizedState) || (ga = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, nt.lanes |= d, Eu |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ka(n) {
    var r = wr(), l = r.queue;
    if (l === null)
      throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      $a(d, r.memoizedState) || (ga = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function du(n, r) {
    var l = nt, o = wr(), c = r(), d = !$a(o.memoizedState, c);
    if (d && (o.memoizedState = c, ga = !0), o = o.queue, Es(Dc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || At !== null && At.memoizedState.tag & 1) {
      if (l.flags |= 2048, pu(9, Oc.bind(null, l, o, c, r), void 0, null), Fn === null)
        throw Error(b(349));
      Je & 30 || co(l, r, c);
    }
    return c;
  }
  function co(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Oc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Mc(r) && Lc(n);
  }
  function Dc(n, r, l) {
    return l(function() {
      Mc(r) && Lc(n);
    });
  }
  function Mc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !$a(n, l);
    } catch {
      return !0;
    }
  }
  function Lc(n) {
    var r = Zi(n, 1);
    r !== null && Nn(r, n, 1, -1);
  }
  function Nc(n) {
    var r = at();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ua, lastRenderedState: n }, r.queue = n, n = n.dispatch = Cs.bind(null, nt, n), [r.memoizedState, n];
  }
  function pu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Uc() {
    return wr().memoizedState;
  }
  function fo(n, r, l, o) {
    var c = at();
    nt.flags |= n, c.memoizedState = pu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function po(n, r, l, o) {
    var c = wr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ct !== null) {
      var m = Ct.memoizedState;
      if (d = m.destroy, o !== null && Ss(o, m.deps)) {
        c.memoizedState = pu(r, l, d, o);
        return;
      }
    }
    nt.flags |= n, c.memoizedState = pu(1 | r, l, d, o);
  }
  function Ac(n, r) {
    return fo(8390656, 8, n, r);
  }
  function Es(n, r) {
    return po(2048, 8, n, r);
  }
  function zc(n, r) {
    return po(4, 2, n, r);
  }
  function jc(n, r) {
    return po(4, 4, n, r);
  }
  function Pc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Fc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, po(4, 4, Pc.bind(null, r, n), l);
  }
  function vo() {
  }
  function vu(n, r) {
    var l = wr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ss(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Hc(n, r) {
    var l = wr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ss(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Vc(n, r, l) {
    return Je & 21 ? ($a(l, r) || (l = Hu(), nt.lanes |= l, Eu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ga = !0), n.memoizedState = l);
  }
  function _d(n, r) {
    var l = Jt;
    Jt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ys.transition;
    ys.transition = {};
    try {
      n(!1), r();
    } finally {
      Jt = l, ys.transition = o;
    }
  }
  function Bc() {
    return wr().memoizedState;
  }
  function Fv(n, r, l) {
    var o = rl(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, kd(n))
      ho(r, l);
    else if (l = Av(n, r, l, o), l !== null) {
      var c = mr();
      Nn(l, n, o, c), Al(l, r, o);
    }
  }
  function Cs(n, r, l) {
    var o = rl(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (kd(n))
      ho(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, C = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = C, $a(C, m)) {
            var w = r.interleaved;
            w === null ? (c.next = c, qn(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Av(n, r, c, o), l !== null && (c = mr(), Nn(l, n, o, c), Al(l, r, o));
    }
  }
  function kd(n) {
    var r = n.alternate;
    return n === nt || r !== null && r === nt;
  }
  function ho(n, r) {
    oo = Na = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Al(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ti(n, l);
    }
  }
  var Br = { readContext: Xa, useCallback: Vr, useContext: Vr, useEffect: Vr, useImperativeHandle: Vr, useInsertionEffect: Vr, useLayoutEffect: Vr, useMemo: Vr, useReducer: Vr, useRef: Vr, useState: Vr, useDebugValue: Vr, useDeferredValue: Vr, useTransition: Vr, useMutableSource: Vr, useSyncExternalStore: Vr, useId: Vr, unstable_isNewReconciler: !1 }, sy = { readContext: Xa, useCallback: function(n, r) {
    return at().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Xa, useEffect: Ac, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(
      4194308,
      4,
      Pc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return fo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return fo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = at();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = at();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Fv.bind(null, nt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = at();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Nc, useDebugValue: vo, useDeferredValue: function(n) {
    return at().memoizedState = n;
  }, useTransition: function() {
    var n = Nc(!1), r = n[0];
    return n = _d.bind(null, n[1]), at().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = nt, c = at();
    if (bn) {
      if (l === void 0)
        throw Error(b(407));
      l = l();
    } else {
      if (l = r(), Fn === null)
        throw Error(b(349));
      Je & 30 || co(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ac(Dc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, pu(9, Oc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = at(), r = Fn.identifierPrefix;
    if (bn) {
      var l = Ki, o = br;
      l = (o & ~(1 << 32 - Qr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = oy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cn = {
    readContext: Xa,
    useCallback: vu,
    useContext: Xa,
    useEffect: Es,
    useImperativeHandle: Fc,
    useInsertionEffect: zc,
    useLayoutEffect: jc,
    useMemo: Hc,
    useReducer: el,
    useRef: Uc,
    useState: function() {
      return el(Ua);
    },
    useDebugValue: vo,
    useDeferredValue: function(n) {
      var r = wr();
      return Vc(r, Ct.memoizedState, n);
    },
    useTransition: function() {
      var n = el(Ua)[0], r = wr().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: du,
    useId: Bc,
    unstable_isNewReconciler: !1
  }, $c = { readContext: Xa, useCallback: vu, useContext: Xa, useEffect: Es, useImperativeHandle: Fc, useInsertionEffect: zc, useLayoutEffect: jc, useMemo: Hc, useReducer: Ka, useRef: Uc, useState: function() {
    return Ka(Ua);
  }, useDebugValue: vo, useDeferredValue: function(n) {
    var r = wr();
    return Ct === null ? r.memoizedState = n : Vc(r, Ct.memoizedState, n);
  }, useTransition: function() {
    var n = Ka(Ua)[0], r = wr().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: du, useId: Bc, unstable_isNewReconciler: !1 };
  function ya(n, r) {
    if (n && n.defaultProps) {
      r = be({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function hu(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : be({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var mu = { isMounted: function(n) {
    return (n = n._reactInternals) ? Xe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = mr(), c = rl(n), d = ma(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ul(n, d, c), r !== null && (Nn(r, n, c, o), bc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = mr(), c = rl(n), d = ma(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ul(n, d, c), r !== null && (Nn(r, n, c, o), bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = mr(), o = rl(n), c = ma(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ul(n, c, o), r !== null && (Nn(r, n, o, l), bc(r, n, o));
  } };
  function Hv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !rs(l, o) || !rs(c, d) : !0;
  }
  function Vv(n, r, l) {
    var o = !1, c = xi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Xa(d) : (c = _n(r) ? fa : Et.current, o = r.contextTypes, d = (o = o != null) ? Ya(n, c) : xi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = mu, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Bv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && mu.enqueueReplaceState(r, r.state, null);
  }
  function Od(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Tc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Xa(d) : (d = _n(r) ? fa : Et.current, c.context = Ya(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (hu(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && mu.enqueueReplaceState(c, c.state, null), wc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function zl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Oe(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Rs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var $v = typeof WeakMap == "function" ? WeakMap : Map;
  function Iv(n, r, l) {
    l = ma(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      tf || (tf = !0, Fd = o), Rs(n, r);
    }, l;
  }
  function Yv(n, r, l) {
    l = ma(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Rs(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Rs(n, r), typeof o != "function" && (ei === null ? ei = /* @__PURE__ */ new Set([this]) : ei.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ts(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new $v();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Sy.bind(null, n, r, l), r.then(n, n));
  }
  function Wv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Md(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ma(-1, 1), r.tag = 2, Ul(l, r, 1))), l.lanes |= 1), n);
  }
  var Qv = me.ReactCurrentOwner, ga = !1;
  function Vn(n, r, l, o) {
    r.child = n === null ? Uv(r, null, l, o) : ro(r, n.child, l, o);
  }
  function mo(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ao(r, c), o = re(n, r, l, o, d, c), l = Xn(), n !== null && !ga ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Bn(n, r, c)) : (bn && l && yc(r), r.flags |= 1, Vn(n, r, o, c), r.child);
  }
  function jl(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Id(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ic(n, r, d, o, c)) : (n = of(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : rs, l(m, o) && n.ref === r.ref)
        return Bn(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ic(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (rs(d, o) && n.ref === r.ref)
        if (ga = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (ga = !0);
        else
          return r.lanes = n.lanes, Bn(n, r, c);
    }
    return _t(n, r, l, o, c);
  }
  function Sa(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, on(xo, Ea), Ea |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, on(xo, Ea), Ea |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, on(xo, Ea), Ea |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, on(xo, Ea), Ea |= o;
    return Vn(n, r, c, l), r.child;
  }
  function yu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function _t(n, r, l, o, c) {
    var d = _n(l) ? fa : Et.current;
    return d = Ya(r, d), ao(r, c), l = re(n, r, l, o, d, c), o = Xn(), n !== null && !ga ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Bn(n, r, c)) : (bn && o && yc(r), r.flags |= 1, Vn(n, r, l, c), r.child);
  }
  function bs(n, r, l, o, c) {
    if (_n(l)) {
      var d = !0;
      mc(r);
    } else
      d = !1;
    if (ao(r, c), r.stateNode === null)
      xs(n, r), Vv(r, l, o), Od(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, C = r.memoizedProps;
      m.props = C;
      var w = m.context, V = l.contextType;
      typeof V == "object" && V !== null ? V = Xa(V) : (V = _n(l) ? fa : Et.current, V = Ya(r, V));
      var fe = l.getDerivedStateFromProps, pe = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      pe || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== o || w !== V) && Bv(r, m, o, V), Nl = !1;
      var ue = r.memoizedState;
      m.state = ue, wc(r, o, m, c), w = r.memoizedState, C !== o || ue !== w || jn.current || Nl ? (typeof fe == "function" && (hu(r, l, fe, o), w = r.memoizedState), (C = Nl || Hv(r, l, C, o, ue, w, V)) ? (pe || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = V, o = C) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, io(n, r), C = r.memoizedProps, V = r.type === r.elementType ? C : ya(r.type, C), m.props = V, pe = r.pendingProps, ue = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = Xa(w) : (w = _n(l) ? fa : Et.current, w = Ya(r, w));
      var Fe = l.getDerivedStateFromProps;
      (fe = typeof Fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== pe || ue !== w) && Bv(r, m, o, w), Nl = !1, ue = r.memoizedState, m.state = ue, wc(r, o, m, c);
      var We = r.memoizedState;
      C !== pe || ue !== We || jn.current || Nl ? (typeof Fe == "function" && (hu(r, l, Fe, o), We = r.memoizedState), (V = Nl || Hv(r, l, V, o, ue, We, w) || !1) ? (fe || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, We, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, We, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = We), m.props = o, m.state = We, m.context = w, o = V) : (typeof m.componentDidUpdate != "function" || C === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Yc(n, r, l, o, d, c);
  }
  function Yc(n, r, l, o, c, d) {
    yu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Ov(r, l, !1), Bn(n, r, d);
    o = r.stateNode, Qv.current = r;
    var C = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ro(r, n.child, null, d), r.child = ro(r, null, C, d)) : Vn(n, r, C, d), r.memoizedState = o.state, c && Ov(r, l, !0), r.child;
  }
  function cy(n) {
    var r = n.stateNode;
    r.pendingContext ? Ml(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ml(n, r.context, !1), bd(n, r.containerInfo);
  }
  function Gv(n, r, l, o, c) {
    return Ln(), Cd(c), r.flags |= 256, Vn(n, r, l, o), r.child;
  }
  var ws = { dehydrated: null, treeContext: null, retryLane: 0 };
  function gu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function qv(n, r, l) {
    var o = r.pendingProps, c = kn.current, d = !1, m = (r.flags & 128) !== 0, C;
    if ((C = m) || (C = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), C ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), on(kn, c & 1), n === null)
      return Sc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = sf(m, o, 0, null), n = bu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = gu(l), r.memoizedState = ws, n) : Wc(r, m));
    if (c = n.memoizedState, c !== null && (C = c.dehydrated, C !== null))
      return Ld(n, r, m, o, C, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, C = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Hl(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), C !== null ? d = Hl(C, d) : (d = bu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? gu(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = ws, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Wc(n, r) {
    return r = sf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Qc(n, r, l, o) {
    return o !== null && Cd(o), ro(r, n.child, null, l), n = Wc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ld(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(b(422))), Qc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = sf({ mode: "visible", children: o.children }, c, 0, null), d = bu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ro(r, n.child, null, m), r.child.memoizedState = gu(m), r.memoizedState = ws, d);
    if (!(r.mode & 1))
      return Qc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var C = o.dgst;
      return o = C, d = Error(b(419)), o = Dd(d, o, void 0), Qc(n, r, m, o);
    }
    if (C = (m & n.childLanes) !== 0, ga || C) {
      if (o = Fn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Zi(n, c), Nn(o, n, c, -1));
      }
      return Ms(), o = Dd(Error(b(421))), Qc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = $d.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ha = yi(c.nextSibling), Ma = r, bn = !0, Ga = null, n !== null && (va[Hr++] = br, va[Hr++] = Ki, va[Hr++] = Qa, br = n.id, Ki = n.overflow, Qa = r), r = Wc(r, o.children), r.flags |= 4096, r);
  }
  function Xv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Td(n.return, r, l);
  }
  function Gc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Nd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Vn(n, r, o.children, l), o = kn.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Xv(n, l, r);
            else if (n.tag === 19)
              Xv(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (on(kn, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && xc(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Gc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && xc(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Gc(r, !0, l, null, d);
          break;
        case "together":
          Gc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function xs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Bn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Eu |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(b(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tl(n, r, l) {
    switch (r.tag) {
      case 3:
        cy(r), Ln();
        break;
      case 5:
        Pv(r);
        break;
      case 1:
        _n(r.type) && mc(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        on(Ji, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (on(kn, kn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? qv(n, r, l) : (on(kn, kn.current & 1), n = Bn(n, r, l), n !== null ? n.sibling : null);
        on(kn, kn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Nd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), on(kn, kn.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Sa(n, r, l);
    }
    return Bn(n, r, l);
  }
  var ki, yo, go, Ja;
  ki = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, yo = function() {
  }, go = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, fu(gi.current);
      var d = null;
      switch (l) {
        case "input":
          c = St(n, c), o = St(n, o), d = [];
          break;
        case "select":
          c = be({}, c, { value: void 0 }), o = be({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Sr(n, c), o = Sr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = hc);
      }
      Dn(l, o);
      var m;
      l = null;
      for (V in c)
        if (!o.hasOwnProperty(V) && c.hasOwnProperty(V) && c[V] != null)
          if (V === "style") {
            var C = c[V];
            for (m in C)
              C.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (oe.hasOwnProperty(V) ? d || (d = []) : (d = d || []).push(V, null));
      for (V in o) {
        var w = o[V];
        if (C = c != null ? c[V] : void 0, o.hasOwnProperty(V) && w !== C && (w != null || C != null))
          if (V === "style")
            if (C) {
              for (m in C)
                !C.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && C[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
            } else
              l || (d || (d = []), d.push(
                V,
                l
              )), l = w;
          else
            V === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, C = C ? C.__html : void 0, w != null && C !== w && (d = d || []).push(V, w)) : V === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(V, "" + w) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (oe.hasOwnProperty(V) ? (w != null && V === "onScroll" && mn("scroll", n), d || C === w || (d = [])) : (d = d || []).push(V, w));
      }
      l && (d = d || []).push("style", l);
      var V = d;
      (r.updateQueue = V) && (r.flags |= 4);
    }
  }, Ja = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Pn(n, r) {
    if (!bn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function $r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function fy(n, r, l) {
    var o = r.pendingProps;
    switch (Sd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $r(r), null;
      case 1:
        return _n(r.type) && Wa(), $r(r), null;
      case 3:
        return o = r.stateNode, uo(), ln(jn), ln(Et), xd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ec(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ga !== null && (Hd(Ga), Ga = null))), yo(n, r), $r(r), null;
      case 5:
        wd(r);
        var c = fu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null)
          go(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(b(166));
            return $r(r), null;
          }
          if (n = fu(gi.current), Ec(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[wi] = r, o[uu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                mn("cancel", o), mn("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                mn("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < us.length; c++)
                  mn(us[c], o);
                break;
              case "source":
                mn("error", o);
                break;
              case "img":
              case "image":
              case "link":
                mn(
                  "error",
                  o
                ), mn("load", o);
                break;
              case "details":
                mn("toggle", o);
                break;
              case "input":
                nn(o, d), mn("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, mn("invalid", o);
                break;
              case "textarea":
                ur(o, d), mn("invalid", o);
            }
            Dn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var C = d[m];
                m === "children" ? typeof C == "string" ? o.textContent !== C && (d.suppressHydrationWarning !== !0 && vc(o.textContent, C, n), c = ["children", C]) : typeof C == "number" && o.textContent !== "" + C && (d.suppressHydrationWarning !== !0 && vc(
                  o.textContent,
                  C,
                  n
                ), c = ["children", "" + C]) : oe.hasOwnProperty(m) && C != null && m === "onScroll" && mn("scroll", o);
              }
            switch (l) {
              case "input":
                ke(o), An(o, d, !0);
                break;
              case "textarea":
                ke(o), Jn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = hc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Zn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[wi] = r, n[uu] = o, ki(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Rn(l, o), l) {
                case "dialog":
                  mn("cancel", n), mn("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  mn("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < us.length; c++)
                    mn(us[c], n);
                  c = o;
                  break;
                case "source":
                  mn("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  mn(
                    "error",
                    n
                  ), mn("load", n), c = o;
                  break;
                case "details":
                  mn("toggle", n), c = o;
                  break;
                case "input":
                  nn(n, o), c = St(n, o), mn("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = be({}, o, { value: void 0 }), mn("invalid", n);
                  break;
                case "textarea":
                  ur(n, o), c = Sr(n, o), mn("invalid", n);
                  break;
                default:
                  c = o;
              }
              Dn(l, c), C = c;
              for (d in C)
                if (C.hasOwnProperty(d)) {
                  var w = C[d];
                  d === "style" ? Gt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && la(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && Er(n, w) : typeof w == "number" && Er(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (oe.hasOwnProperty(d) ? w != null && d === "onScroll" && mn("scroll", n) : w != null && Ne(n, d, w, m));
                }
              switch (l) {
                case "input":
                  ke(n), An(n, o, !1);
                  break;
                case "textarea":
                  ke(n), Jn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + B(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? lr(n, !!o.multiple, d, !1) : o.defaultValue != null && lr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = hc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return $r(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ja(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(b(166));
          if (l = fu(ms.current), fu(gi.current), Ec(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[wi] = r, (d = o.nodeValue !== l) && (n = Ma, n !== null))
              switch (n.tag) {
                case 3:
                  vc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && vc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[wi] = r, r.stateNode = o;
        }
        return $r(r), null;
      case 13:
        if (ln(kn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (bn && ha !== null && r.mode & 1 && !(r.flags & 128))
            Lv(), Ln(), r.flags |= 98560, d = !1;
          else if (d = Ec(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(b(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(b(317));
              d[wi] = r;
            } else
              Ln(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            $r(r), d = !1;
          } else
            Ga !== null && (Hd(Ga), Ga = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || kn.current & 1 ? nr === 0 && (nr = 3) : Ms())), r.updateQueue !== null && (r.flags |= 4), $r(r), null);
      case 4:
        return uo(), yo(n, r), n === null && eo(r.stateNode.containerInfo), $r(r), null;
      case 10:
        return Rd(r.type._context), $r(r), null;
      case 17:
        return _n(r.type) && Wa(), $r(r), null;
      case 19:
        if (ln(kn), d = r.memoizedState, d === null)
          return $r(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Pn(d, !1);
          else {
            if (nr !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = xc(n), m !== null) {
                  for (r.flags |= 128, Pn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return on(kn, kn.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && $e() > ko && (r.flags |= 128, o = !0, Pn(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = xc(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Pn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !bn)
                return $r(r), null;
            } else
              2 * $e() - d.renderingStartTime > ko && l !== 1073741824 && (r.flags |= 128, o = !0, Pn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = $e(), r.sibling = null, l = kn.current, on(kn, o ? l & 1 | 2 : l & 1), r) : ($r(r), null);
      case 22:
      case 23:
        return lf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ea & 1073741824 && ($r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : $r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(b(156, r.tag));
  }
  function dy(n, r) {
    switch (Sd(r), r.tag) {
      case 1:
        return _n(r.type) && Wa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return uo(), ln(jn), ln(Et), xd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (ln(kn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(b(340));
          Ln();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ln(kn), null;
      case 4:
        return uo(), null;
      case 10:
        return Rd(r.type._context), null;
      case 22:
      case 23:
        return lf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var So = !1, xr = !1, qc = typeof WeakSet == "function" ? WeakSet : Set, Ie = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Hn(n, r, o);
        }
      else
        l.current = null;
  }
  function Ud(n, r, l) {
    try {
      l();
    } catch (o) {
      Hn(n, r, o);
    }
  }
  var Xc = !1;
  function py(n, r) {
    if (fd = Ba, n = sc(), Qi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, C = -1, w = -1, V = 0, fe = 0, pe = n, ue = null;
            t:
              for (; ; ) {
                for (var Fe; pe !== l || c !== 0 && pe.nodeType !== 3 || (C = m + c), pe !== d || o !== 0 && pe.nodeType !== 3 || (w = m + o), pe.nodeType === 3 && (m += pe.nodeValue.length), (Fe = pe.firstChild) !== null; )
                  ue = pe, pe = Fe;
                for (; ; ) {
                  if (pe === n)
                    break t;
                  if (ue === l && ++V === c && (C = m), ue === d && ++fe === o && (w = m), (Fe = pe.nextSibling) !== null)
                    break;
                  pe = ue, ue = pe.parentNode;
                }
                pe = Fe;
              }
            l = C === -1 || w === -1 ? null : { start: C, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (iu = { focusedElem: n, selectionRange: l }, Ba = !1, Ie = r; Ie !== null; )
      if (r = Ie, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ie = n;
      else
        for (; Ie !== null; ) {
          r = Ie;
          try {
            var We = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (We !== null) {
                    var Ke = We.memoizedProps, $n = We.memoizedState, N = r.stateNode, O = N.getSnapshotBeforeUpdate(r.elementType === r.type ? Ke : ya(r.type, Ke), $n);
                    N.__reactInternalSnapshotBeforeUpdate = O;
                  }
                  break;
                case 3:
                  var j = r.stateNode.containerInfo;
                  j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(b(163));
              }
          } catch (Ee) {
            Hn(r, r.return, Ee);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ie = n;
            break;
          }
          Ie = r.return;
        }
    return We = Xc, Xc = !1, We;
  }
  function Co(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ud(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Kc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Jc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Kv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Kv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[wi], delete r[uu], delete r[vd], delete r[uy], delete r[hd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ad(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Jv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Ad(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function _s(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = hc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (_s(n, r, l), n = n.sibling; n !== null; )
        _s(n, r, l), n = n.sibling;
  }
  function Ro(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ro(n, r, l), n = n.sibling; n !== null; )
        Ro(n, r, l), n = n.sibling;
  }
  var On = null, vr = !1;
  function Xr(n, r, l) {
    for (l = l.child; l !== null; )
      To(n, r, l), l = l.sibling;
  }
  function To(n, r, l) {
    if (Tr && typeof Tr.onCommitFiberUnmount == "function")
      try {
        Tr.onCommitFiberUnmount(Ri, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        xr || Eo(l, r);
      case 6:
        var o = On, c = vr;
        On = null, Xr(n, r, l), On = o, vr = c, On !== null && (vr ? (n = On, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : On.removeChild(l.stateNode));
        break;
      case 18:
        On !== null && (vr ? (n = On, l = l.stateNode, n.nodeType === 8 ? kl(n.parentNode, l) : n.nodeType === 1 && kl(n, l), bl(n)) : kl(On, l.stateNode));
        break;
      case 4:
        o = On, c = vr, On = l.stateNode.containerInfo, vr = !0, Xr(n, r, l), On = o, vr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ud(l, r, m), c = c.next;
          } while (c !== o);
        }
        Xr(n, r, l);
        break;
      case 1:
        if (!xr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (C) {
            Hn(l, r, C);
          }
        Xr(n, r, l);
        break;
      case 21:
        Xr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (xr = (o = xr) || l.memoizedState !== null, Xr(n, r, l), xr = o) : Xr(n, r, l);
        break;
      default:
        Xr(n, r, l);
    }
  }
  function bo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new qc()), r.forEach(function(o) {
        var c = Ey.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function hr(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, C = m;
          e:
            for (; C !== null; ) {
              switch (C.tag) {
                case 5:
                  On = C.stateNode, vr = !1;
                  break e;
                case 3:
                  On = C.stateNode.containerInfo, vr = !0;
                  break e;
                case 4:
                  On = C.stateNode.containerInfo, vr = !0;
                  break e;
              }
              C = C.return;
            }
          if (On === null)
            throw Error(b(160));
          To(d, m, c), On = null, vr = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (V) {
          Hn(c, r, V);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Zv(r, n), r = r.sibling;
  }
  function Zv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (hr(r, n), Oi(n), o & 4) {
          try {
            Co(3, n, n.return), Kc(3, n);
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
          try {
            Co(5, n, n.return);
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
        }
        break;
      case 1:
        hr(r, n), Oi(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (hr(r, n), Oi(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Er(c, "");
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, C = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              C === "input" && d.type === "radio" && d.name != null && qt(c, d), Rn(C, m);
              var V = Rn(C, d);
              for (m = 0; m < w.length; m += 2) {
                var fe = w[m], pe = w[m + 1];
                fe === "style" ? Gt(c, pe) : fe === "dangerouslySetInnerHTML" ? la(c, pe) : fe === "children" ? Er(c, pe) : Ne(c, fe, pe, V);
              }
              switch (C) {
                case "input":
                  fn(c, d);
                  break;
                case "textarea":
                  Ar(c, d);
                  break;
                case "select":
                  var ue = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var Fe = d.value;
                  Fe != null ? lr(c, !!d.multiple, Fe, !1) : ue !== !!d.multiple && (d.defaultValue != null ? lr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : lr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[uu] = d;
            } catch (Ke) {
              Hn(n, n.return, Ke);
            }
        }
        break;
      case 6:
        if (hr(r, n), Oi(n), o & 4) {
          if (n.stateNode === null)
            throw Error(b(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
        }
        break;
      case 3:
        if (hr(r, n), Oi(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            bl(r.containerInfo);
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
        break;
      case 4:
        hr(r, n), Oi(n);
        break;
      case 13:
        hr(r, n), Oi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (ef = $e())), o & 4 && bo(n);
        break;
      case 22:
        if (fe = l !== null && l.memoizedState !== null, n.mode & 1 ? (xr = (V = xr) || fe, hr(r, n), xr = V) : hr(r, n), Oi(n), o & 8192) {
          if (V = n.memoizedState !== null, (n.stateNode.isHidden = V) && !fe && n.mode & 1)
            for (Ie = n, fe = n.child; fe !== null; ) {
              for (pe = Ie = fe; Ie !== null; ) {
                switch (ue = Ie, Fe = ue.child, ue.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Co(4, ue, ue.return);
                    break;
                  case 1:
                    Eo(ue, ue.return);
                    var We = ue.stateNode;
                    if (typeof We.componentWillUnmount == "function") {
                      o = ue, l = ue.return;
                      try {
                        r = o, We.props = r.memoizedProps, We.state = r.memoizedState, We.componentWillUnmount();
                      } catch (Ke) {
                        Hn(o, l, Ke);
                      }
                    }
                    break;
                  case 5:
                    Eo(ue, ue.return);
                    break;
                  case 22:
                    if (ue.memoizedState !== null) {
                      eh(pe);
                      continue;
                    }
                }
                Fe !== null ? (Fe.return = ue, Ie = Fe) : eh(pe);
              }
              fe = fe.sibling;
            }
          e:
            for (fe = null, pe = n; ; ) {
              if (pe.tag === 5) {
                if (fe === null) {
                  fe = pe;
                  try {
                    c = pe.stateNode, V ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (C = pe.stateNode, w = pe.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, C.style.display = kt("display", m));
                  } catch (Ke) {
                    Hn(n, n.return, Ke);
                  }
                }
              } else if (pe.tag === 6) {
                if (fe === null)
                  try {
                    pe.stateNode.nodeValue = V ? "" : pe.memoizedProps;
                  } catch (Ke) {
                    Hn(n, n.return, Ke);
                  }
              } else if ((pe.tag !== 22 && pe.tag !== 23 || pe.memoizedState === null || pe === n) && pe.child !== null) {
                pe.child.return = pe, pe = pe.child;
                continue;
              }
              if (pe === n)
                break e;
              for (; pe.sibling === null; ) {
                if (pe.return === null || pe.return === n)
                  break e;
                fe === pe && (fe = null), pe = pe.return;
              }
              fe === pe && (fe = null), pe.sibling.return = pe.return, pe = pe.sibling;
            }
        }
        break;
      case 19:
        hr(r, n), Oi(n), o & 4 && bo(n);
        break;
      case 21:
        break;
      default:
        hr(
          r,
          n
        ), Oi(n);
    }
  }
  function Oi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ad(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(b(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Er(c, ""), o.flags &= -33);
            var d = Jv(n);
            Ro(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, C = Jv(n);
            _s(n, C, m);
            break;
          default:
            throw Error(b(161));
        }
      } catch (w) {
        Hn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function vy(n, r, l) {
    Ie = n, zd(n);
  }
  function zd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ie !== null; ) {
      var c = Ie, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || So;
        if (!m) {
          var C = c.alternate, w = C !== null && C.memoizedState !== null || xr;
          C = So;
          var V = xr;
          if (So = m, (xr = w) && !V)
            for (Ie = c; Ie !== null; )
              m = Ie, w = m.child, m.tag === 22 && m.memoizedState !== null ? jd(c) : w !== null ? (w.return = m, Ie = w) : jd(c);
          for (; d !== null; )
            Ie = d, zd(d), d = d.sibling;
          Ie = c, So = C, xr = V;
        }
        wo(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ie = d) : wo(n);
    }
  }
  function wo(n) {
    for (; Ie !== null; ) {
      var r = Ie;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                xr || Kc(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !xr)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ya(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && jv(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  jv(r, m, l);
                }
                break;
              case 5:
                var C = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = C;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var V = r.alternate;
                  if (V !== null) {
                    var fe = V.memoizedState;
                    if (fe !== null) {
                      var pe = fe.dehydrated;
                      pe !== null && bl(pe);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(b(163));
            }
          xr || r.flags & 512 && Jc(r);
        } catch (ue) {
          Hn(r, r.return, ue);
        }
      }
      if (r === n) {
        Ie = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ie = l;
        break;
      }
      Ie = r.return;
    }
  }
  function eh(n) {
    for (; Ie !== null; ) {
      var r = Ie;
      if (r === n) {
        Ie = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ie = l;
        break;
      }
      Ie = r.return;
    }
  }
  function jd(n) {
    for (; Ie !== null; ) {
      var r = Ie;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Kc(4, r);
            } catch (w) {
              Hn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                Hn(r, c, w);
              }
            }
            var d = r.return;
            try {
              Jc(r);
            } catch (w) {
              Hn(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Jc(r);
            } catch (w) {
              Hn(r, m, w);
            }
        }
      } catch (w) {
        Hn(r, r.return, w);
      }
      if (r === n) {
        Ie = null;
        break;
      }
      var C = r.sibling;
      if (C !== null) {
        C.return = r.return, Ie = C;
        break;
      }
      Ie = r.return;
    }
  }
  var hy = Math.ceil, Su = me.ReactCurrentDispatcher, Zc = me.ReactCurrentOwner, Za = me.ReactCurrentBatchConfig, Ft = 0, Fn = null, wn = null, tr = 0, Ea = 0, xo = Ot(0), nr = 0, ks = null, Eu = 0, _o = 0, Pd = 0, Pl = null, Ir = null, ef = 0, ko = 1 / 0, nl = null, tf = !1, Fd = null, ei = null, Oo = !1, ti = null, nf = 0, Os = 0, rf = null, Ds = -1, Cu = 0;
  function mr() {
    return Ft & 6 ? $e() : Ds !== -1 ? Ds : Ds = $e();
  }
  function rl(n) {
    return n.mode & 1 ? Ft & 2 && tr !== 0 ? tr & -tr : Cc.transition !== null ? (Cu === 0 && (Cu = Hu()), Cu) : (n = Jt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Jo(n.type)), n) : 1;
  }
  function Nn(n, r, l, o) {
    if (50 < Os)
      throw Os = 0, rf = null, Error(b(185));
    Vi(n, l, o), (!(Ft & 2) || n !== Fn) && (n === Fn && (!(Ft & 2) && (_o |= l), nr === 4 && Di(n, tr)), rr(n, o), l === 1 && Ft === 0 && !(r.mode & 1) && (ko = $e() + 500, pr && da()));
  }
  function rr(n, r) {
    var l = n.callbackNode;
    El(n, r);
    var o = Gr(n, n === Fn ? tr : 0);
    if (o === 0)
      l !== null && Re(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Re(l), r === 1)
        n.tag === 0 ? yd(Do.bind(null, n)) : md(Do.bind(null, n)), pd(function() {
          !(Ft & 6) && da();
        }), l = null;
      else {
        switch (Bu(o)) {
          case 1:
            l = gn;
            break;
          case 4:
            l = lt;
            break;
          case 16:
            l = Sn;
            break;
          case 536870912:
            l = Rr;
            break;
          default:
            l = Sn;
        }
        l = oh(l, af.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function af(n, r) {
    if (Ds = -1, Cu = 0, Ft & 6)
      throw Error(b(327));
    var l = n.callbackNode;
    if (Mo() && n.callbackNode !== l)
      return null;
    var o = Gr(n, n === Fn ? tr : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = uf(n, o);
    else {
      r = o;
      var c = Ft;
      Ft |= 2;
      var d = nh();
      (Fn !== n || tr !== r) && (nl = null, ko = $e() + 500, Tu(n, r));
      do
        try {
          yy();
          break;
        } catch (C) {
          th(n, C);
        }
      while (!0);
      La(), Su.current = d, Ft = c, wn !== null ? r = 0 : (Fn = null, tr = 0, r = nr);
    }
    if (r !== 0) {
      if (r === 2 && (c = Cl(n), c !== 0 && (o = c, r = Ru(n, c))), r === 1)
        throw l = ks, Tu(n, 0), Di(n, o), rr(n, $e()), l;
      if (r === 6)
        Di(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Vd(c) && (r = uf(n, o), r === 2 && (d = Cl(n), d !== 0 && (o = d, r = Ru(n, d))), r === 1))
          throw l = ks, Tu(n, 0), Di(n, o), rr(n, $e()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(b(345));
          case 2:
            Fl(n, Ir, nl);
            break;
          case 3:
            if (Di(n, o), (o & 130023424) === o && (r = ef + 500 - $e(), 10 < r)) {
              if (Gr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                mr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = lu(Fl.bind(null, n, Ir, nl), r);
              break;
            }
            Fl(n, Ir, nl);
            break;
          case 4:
            if (Di(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Qr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = $e() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * hy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = lu(Fl.bind(null, n, Ir, nl), o);
              break;
            }
            Fl(n, Ir, nl);
            break;
          case 5:
            Fl(n, Ir, nl);
            break;
          default:
            throw Error(b(329));
        }
      }
    }
    return rr(n, $e()), n.callbackNode === l ? af.bind(null, n) : null;
  }
  function Ru(n, r) {
    var l = Pl;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = uf(n, r), n !== 2 && (r = Ir, Ir = l, r !== null && Hd(r)), n;
  }
  function Hd(n) {
    Ir === null ? Ir = n : Ir.push.apply(Ir, n);
  }
  function Vd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!$a(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Di(n, r) {
    for (r &= ~Pd, r &= ~_o, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Qr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Do(n) {
    if (Ft & 6)
      throw Error(b(327));
    Mo();
    var r = Gr(n, 0);
    if (!(r & 1))
      return rr(n, $e()), null;
    var l = uf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Cl(n);
      o !== 0 && (r = o, l = Ru(n, o));
    }
    if (l === 1)
      throw l = ks, Tu(n, 0), Di(n, r), rr(n, $e()), l;
    if (l === 6)
      throw Error(b(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Fl(n, Ir, nl), rr(n, $e()), null;
  }
  function Bd(n, r) {
    var l = Ft;
    Ft |= 1;
    try {
      return n(r);
    } finally {
      Ft = l, Ft === 0 && (ko = $e() + 500, pr && da());
    }
  }
  function Mi(n) {
    ti !== null && ti.tag === 0 && !(Ft & 6) && Mo();
    var r = Ft;
    Ft |= 1;
    var l = Za.transition, o = Jt;
    try {
      if (Za.transition = null, Jt = 1, n)
        return n();
    } finally {
      Jt = o, Za.transition = l, Ft = r, !(Ft & 6) && da();
    }
  }
  function lf() {
    Ea = xo.current, ln(xo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, kv(l)), wn !== null)
      for (l = wn.return; l !== null; ) {
        var o = l;
        switch (Sd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Wa();
            break;
          case 3:
            uo(), ln(jn), ln(Et), xd();
            break;
          case 5:
            wd(o);
            break;
          case 4:
            uo();
            break;
          case 13:
            ln(kn);
            break;
          case 19:
            ln(kn);
            break;
          case 10:
            Rd(o.type._context);
            break;
          case 22:
          case 23:
            lf();
        }
        l = l.return;
      }
    if (Fn = n, wn = n = Hl(n.current, null), tr = Ea = r, nr = 0, ks = null, Pd = _o = Eu = 0, Ir = Pl = null, cu !== null) {
      for (r = 0; r < cu.length; r++)
        if (l = cu[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      cu = null;
    }
    return n;
  }
  function th(n, r) {
    do {
      var l = wn;
      try {
        if (La(), kc.current = Br, Na) {
          for (var o = nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Na = !1;
        }
        if (Je = 0, At = Ct = nt = null, oo = !1, gs = 0, Zc.current = null, l === null || l.return === null) {
          nr = 1, ks = r, wn = null;
          break;
        }
        e: {
          var d = n, m = l.return, C = l, w = r;
          if (r = tr, C.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var V = w, fe = C, pe = fe.tag;
            if (!(fe.mode & 1) && (pe === 0 || pe === 11 || pe === 15)) {
              var ue = fe.alternate;
              ue ? (fe.updateQueue = ue.updateQueue, fe.memoizedState = ue.memoizedState, fe.lanes = ue.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var Fe = Wv(m);
            if (Fe !== null) {
              Fe.flags &= -257, Md(Fe, m, C, d, r), Fe.mode & 1 && Ts(d, V, r), r = Fe, w = V;
              var We = r.updateQueue;
              if (We === null) {
                var Ke = /* @__PURE__ */ new Set();
                Ke.add(w), r.updateQueue = Ke;
              } else
                We.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                Ts(d, V, r), Ms();
                break e;
              }
              w = Error(b(426));
            }
          } else if (bn && C.mode & 1) {
            var $n = Wv(m);
            if ($n !== null) {
              !($n.flags & 65536) && ($n.flags |= 256), Md($n, m, C, d, r), Cd(zl(w, C));
              break e;
            }
          }
          d = w = zl(w, C), nr !== 4 && (nr = 2), Pl === null ? Pl = [d] : Pl.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var N = Iv(d, w, r);
                zv(d, N);
                break e;
              case 1:
                C = w;
                var O = d.type, j = d.stateNode;
                if (!(d.flags & 128) && (typeof O.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (ei === null || !ei.has(j)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Ee = Yv(d, C, r);
                  zv(d, Ee);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (Ze) {
        r = Ze, wn === l && l !== null && (wn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = Su.current;
    return Su.current = Br, n === null ? Br : n;
  }
  function Ms() {
    (nr === 0 || nr === 3 || nr === 2) && (nr = 4), Fn === null || !(Eu & 268435455) && !(_o & 268435455) || Di(Fn, tr);
  }
  function uf(n, r) {
    var l = Ft;
    Ft |= 2;
    var o = nh();
    (Fn !== n || tr !== r) && (nl = null, Tu(n, r));
    do
      try {
        my();
        break;
      } catch (c) {
        th(n, c);
      }
    while (!0);
    if (La(), Ft = l, Su.current = o, wn !== null)
      throw Error(b(261));
    return Fn = null, tr = 0, nr;
  }
  function my() {
    for (; wn !== null; )
      rh(wn);
  }
  function yy() {
    for (; wn !== null && !xt(); )
      rh(wn);
  }
  function rh(n) {
    var r = uh(n.alternate, n, Ea);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : wn = r, Zc.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = dy(l, r), l !== null) {
          l.flags &= 32767, wn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          nr = 6, wn = null;
          return;
        }
      } else if (l = fy(l, r, Ea), l !== null) {
        wn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        wn = r;
        return;
      }
      wn = r = n;
    } while (r !== null);
    nr === 0 && (nr = 5);
  }
  function Fl(n, r, l) {
    var o = Jt, c = Za.transition;
    try {
      Za.transition = null, Jt = 1, gy(n, r, l, o);
    } finally {
      Za.transition = c, Jt = o;
    }
    return null;
  }
  function gy(n, r, l, o) {
    do
      Mo();
    while (ti !== null);
    if (Ft & 6)
      throw Error(b(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(b(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Wf(n, d), n === Fn && (wn = Fn = null, tr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Oo || (Oo = !0, oh(Sn, function() {
      return Mo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Za.transition, Za.transition = null;
      var m = Jt;
      Jt = 1;
      var C = Ft;
      Ft |= 4, Zc.current = null, py(n, l), Zv(l, n), cc(iu), Ba = !!fd, iu = fd = null, n.current = l, vy(l), Mt(), Ft = C, Jt = m, Za.transition = d;
    } else
      n.current = l;
    if (Oo && (Oo = !1, ti = n, nf = c), d = n.pendingLanes, d === 0 && (ei = null), yl(l.stateNode), rr(n, $e()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (tf)
      throw tf = !1, n = Fd, Fd = null, n;
    return nf & 1 && n.tag !== 0 && Mo(), d = n.pendingLanes, d & 1 ? n === rf ? Os++ : (Os = 0, rf = n) : Os = 0, da(), null;
  }
  function Mo() {
    if (ti !== null) {
      var n = Bu(nf), r = Za.transition, l = Jt;
      try {
        if (Za.transition = null, Jt = 16 > n ? 16 : n, ti === null)
          var o = !1;
        else {
          if (n = ti, ti = null, nf = 0, Ft & 6)
            throw Error(b(331));
          var c = Ft;
          for (Ft |= 4, Ie = n.current; Ie !== null; ) {
            var d = Ie, m = d.child;
            if (Ie.flags & 16) {
              var C = d.deletions;
              if (C !== null) {
                for (var w = 0; w < C.length; w++) {
                  var V = C[w];
                  for (Ie = V; Ie !== null; ) {
                    var fe = Ie;
                    switch (fe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Co(8, fe, d);
                    }
                    var pe = fe.child;
                    if (pe !== null)
                      pe.return = fe, Ie = pe;
                    else
                      for (; Ie !== null; ) {
                        fe = Ie;
                        var ue = fe.sibling, Fe = fe.return;
                        if (Kv(fe), fe === V) {
                          Ie = null;
                          break;
                        }
                        if (ue !== null) {
                          ue.return = Fe, Ie = ue;
                          break;
                        }
                        Ie = Fe;
                      }
                  }
                }
                var We = d.alternate;
                if (We !== null) {
                  var Ke = We.child;
                  if (Ke !== null) {
                    We.child = null;
                    do {
                      var $n = Ke.sibling;
                      Ke.sibling = null, Ke = $n;
                    } while (Ke !== null);
                  }
                }
                Ie = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, Ie = m;
            else
              e:
                for (; Ie !== null; ) {
                  if (d = Ie, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Co(9, d, d.return);
                    }
                  var N = d.sibling;
                  if (N !== null) {
                    N.return = d.return, Ie = N;
                    break e;
                  }
                  Ie = d.return;
                }
          }
          var O = n.current;
          for (Ie = O; Ie !== null; ) {
            m = Ie;
            var j = m.child;
            if (m.subtreeFlags & 2064 && j !== null)
              j.return = m, Ie = j;
            else
              e:
                for (m = O; Ie !== null; ) {
                  if (C = Ie, C.flags & 2048)
                    try {
                      switch (C.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Kc(9, C);
                      }
                    } catch (Ze) {
                      Hn(C, C.return, Ze);
                    }
                  if (C === m) {
                    Ie = null;
                    break e;
                  }
                  var Ee = C.sibling;
                  if (Ee !== null) {
                    Ee.return = C.return, Ie = Ee;
                    break e;
                  }
                  Ie = C.return;
                }
          }
          if (Ft = c, da(), Tr && typeof Tr.onPostCommitFiberRoot == "function")
            try {
              Tr.onPostCommitFiberRoot(Ri, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Jt = l, Za.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = zl(l, r), r = Iv(n, r, 1), n = Ul(n, r, 1), r = mr(), n !== null && (Vi(n, 1, r), rr(n, r));
  }
  function Hn(n, r, l) {
    if (n.tag === 3)
      ih(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          ih(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ei === null || !ei.has(o))) {
            n = zl(l, n), n = Yv(r, n, 1), r = Ul(r, n, 1), n = mr(), r !== null && (Vi(r, 1, n), rr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = mr(), n.pingedLanes |= n.suspendedLanes & l, Fn === n && (tr & l) === l && (nr === 4 || nr === 3 && (tr & 130023424) === tr && 500 > $e() - ef ? Tu(n, 0) : Pd |= l), rr(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = gl, gl <<= 1, !(gl & 130023424) && (gl = 4194304)) : r = 1);
    var l = mr();
    n = Zi(n, r), n !== null && (Vi(n, r, l), rr(n, l));
  }
  function $d(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function Ey(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(b(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var uh;
  uh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || jn.current)
        ga = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return ga = !1, tl(n, r, l);
        ga = !!(n.flags & 131072);
      }
    else
      ga = !1, bn && r.flags & 1048576 && gd(r, no, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        xs(n, r), n = r.pendingProps;
        var c = Ya(r, Et.current);
        ao(r, l), c = re(null, r, o, n, c, l);
        var d = Xn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, _n(o) ? (d = !0, mc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Tc(r), c.updater = mu, r.stateNode = c, c._reactInternals = r, Od(r, o, n, l), r = Yc(null, r, o, !0, d, l)) : (r.tag = 0, bn && d && yc(r), Vn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (xs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Cy(o), n = ya(o, n), c) {
            case 0:
              r = _t(null, r, o, n, l);
              break e;
            case 1:
              r = bs(null, r, o, n, l);
              break e;
            case 11:
              r = mo(null, r, o, n, l);
              break e;
            case 14:
              r = jl(null, r, o, ya(o.type, n), l);
              break e;
          }
          throw Error(b(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), _t(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), bs(n, r, o, c, l);
      case 3:
        e: {
          if (cy(r), n === null)
            throw Error(b(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, io(n, r), wc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = zl(Error(b(423)), r), r = Gv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = zl(Error(b(424)), r), r = Gv(n, r, o, l, c);
              break e;
            } else
              for (ha = yi(r.stateNode.containerInfo.firstChild), Ma = r, bn = !0, Ga = null, l = Uv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ln(), o === c) {
              r = Bn(n, r, l);
              break e;
            }
            Vn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Pv(r), n === null && Sc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, cs(o, c) ? m = null : d !== null && cs(o, d) && (r.flags |= 32), yu(n, r), Vn(n, r, m, l), r.child;
      case 6:
        return n === null && Sc(r), null;
      case 13:
        return qv(n, r, l);
      case 4:
        return bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ro(r, null, o, l) : Vn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), mo(n, r, o, c, l);
      case 7:
        return Vn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Vn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Vn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, on(Ji, o._currentValue), o._currentValue = m, d !== null)
            if ($a(d.value, m)) {
              if (d.children === c.children && !jn.current) {
                r = Bn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var C = d.dependencies;
                if (C !== null) {
                  m = d.child;
                  for (var w = C.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = ma(-1, l & -l), w.tag = 2;
                        var V = d.updateQueue;
                        if (V !== null) {
                          V = V.shared;
                          var fe = V.pending;
                          fe === null ? w.next = w : (w.next = fe.next, fe.next = w), V.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), Td(
                        d.return,
                        l,
                        r
                      ), C.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(b(341));
                  m.lanes |= l, C = m.alternate, C !== null && (C.lanes |= l), Td(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Vn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ao(r, l), c = Xa(c), o = o(c), r.flags |= 1, Vn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ya(o, r.pendingProps), c = ya(o.type, c), jl(n, r, o, c, l);
      case 15:
        return Ic(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), xs(n, r), r.tag = 1, _n(o) ? (n = !0, mc(r)) : n = !1, ao(r, l), Vv(r, o, c), Od(r, o, c, l), Yc(null, r, o, !0, n, l);
      case 19:
        return Nd(n, r, l);
      case 22:
        return Sa(n, r, l);
    }
    throw Error(b(156, r.tag));
  };
  function oh(n, r) {
    return ae(n, r);
  }
  function sh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ni(n, r, l, o) {
    return new sh(n, r, l, o);
  }
  function Id(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Cy(n) {
    if (typeof n == "function")
      return Id(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Pt)
        return 11;
      if (n === Nt)
        return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ni(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function of(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Id(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case ge:
            return bu(l.children, c, d, r);
          case vt:
            m = 8, c |= 8;
            break;
          case jt:
            return n = ni(12, l, r, c | 2), n.elementType = jt, n.lanes = d, n;
          case qe:
            return n = ni(13, l, r, c), n.elementType = qe, n.lanes = d, n;
          case ot:
            return n = ni(19, l, r, c), n.elementType = ot, n.lanes = d, n;
          case Ae:
            return sf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Lt:
                  m = 10;
                  break e;
                case wt:
                  m = 9;
                  break e;
                case Pt:
                  m = 11;
                  break e;
                case Nt:
                  m = 14;
                  break e;
                case ft:
                  m = 16, o = null;
                  break e;
              }
            throw Error(b(130, n == null ? n : typeof n, ""));
        }
    return r = ni(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function bu(n, r, l, o) {
    return n = ni(7, n, o, r), n.lanes = l, n;
  }
  function sf(n, r, l, o) {
    return n = ni(22, n, o, r), n.elementType = Ae, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function cf(n, r, l) {
    return n = ni(6, n, null, r), n.lanes = l, n;
  }
  function Ls(n, r, l) {
    return r = ni(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ns(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vu(0), this.expirationTimes = Vu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Yd(n, r, l, o, c, d, m, C, w) {
    return n = new Ns(n, r, l, C, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ni(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Tc(d), n;
  }
  function ch(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: je, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Wd(n) {
    if (!n)
      return xi;
    n = n._reactInternals;
    e: {
      if (Xe(n) !== n || n.tag !== 1)
        throw Error(b(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (_n(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(b(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (_n(l))
        return ps(n, l, r);
    }
    return r;
  }
  function Qd(n, r, l, o, c, d, m, C, w) {
    return n = Yd(l, o, !0, n, c, d, m, C, w), n.context = Wd(null), l = n.current, o = mr(), c = rl(l), d = ma(o, c), d.callback = r ?? null, Ul(l, d, c), n.current.lanes = c, Vi(n, c, o), rr(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = mr(), m = rl(c);
    return l = Wd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ma(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ul(c, r, m), n !== null && (Nn(n, c, m, d), bc(n, c, m)), m;
  }
  function Us(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function fh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Gd(n, r) {
    fh(n, r), (n = n.alternate) && fh(n, r);
  }
  function Ry() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function df(n) {
    this._internalRoot = n;
  }
  As.prototype.render = df.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(b(409));
    ff(n, r, null, null);
  }, As.prototype.unmount = df.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mi(function() {
        ff(null, n, null, null);
      }), r[Xi] = null;
    }
  };
  function As(n) {
    this._internalRoot = n;
  }
  As.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Iu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < un.length && r !== 0 && r < un[l].priority; l++)
        ;
      un.splice(l, 0, n), l === 0 && rc(n);
    }
  };
  function Vl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function pf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function dh() {
  }
  function Ty(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var V = Us(m);
          d.call(V);
        };
      }
      var m = Qd(r, o, n, 0, null, !1, !1, "", dh);
      return n._reactRootContainer = m, n[Xi] = m.current, eo(n.nodeType === 8 ? n.parentNode : n), Mi(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var C = o;
      o = function() {
        var V = Us(w);
        C.call(V);
      };
    }
    var w = Yd(n, 0, !1, null, null, !1, !1, "", dh);
    return n._reactRootContainer = w, n[Xi] = w.current, eo(n.nodeType === 8 ? n.parentNode : n), Mi(function() {
      ff(r, w, l, o);
    }), w;
  }
  function vf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var C = c;
        c = function() {
          var w = Us(m);
          C.call(w);
        };
      }
      ff(r, m, n, c);
    } else
      m = Ty(l, r, n, c, o);
    return Us(m);
  }
  Jl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = di(r.pendingLanes);
          l !== 0 && (Ti(r, l | 1), rr(r, $e()), !(Ft & 6) && (ko = $e() + 500, da()));
        }
        break;
      case 13:
        Mi(function() {
          var o = Zi(n, 1);
          if (o !== null) {
            var c = mr();
            Nn(o, n, 1, c);
          }
        }), Gd(n, 1);
    }
  }, $u = function(n) {
    if (n.tag === 13) {
      var r = Zi(n, 134217728);
      if (r !== null) {
        var l = mr();
        Nn(r, n, 134217728, l);
      }
      Gd(n, 134217728);
    }
  }, Vt = function(n) {
    if (n.tag === 13) {
      var r = rl(n), l = Zi(n, r);
      if (l !== null) {
        var o = mr();
        Nn(l, n, r, o);
      }
      Gd(n, r);
    }
  }, Iu = function() {
    return Jt;
  }, Yu = function(n, r) {
    var l = Jt;
    try {
      return Jt = n, r();
    } finally {
      Jt = l;
    }
  }, Cr = function(n, r, l) {
    switch (r) {
      case "input":
        if (fn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = it(o);
              if (!c)
                throw Error(b(90));
              et(o), fn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ar(n, l);
        break;
      case "select":
        r = l.value, r != null && lr(n, !!l.multiple, r, !1);
    }
  }, ci = Bd, Hi = Mi;
  var by = { usingClientEntryPoint: !1, Events: [ds, to, it, zr, Qn, Bd] }, zs = { findFiberByHostInstance: Ia, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ph = { bundleType: zs.bundleType, version: zs.version, rendererPackageName: zs.rendererPackageName, rendererConfig: zs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = M(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: zs.findFiberByHostInstance || Ry, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hf.isDisabled && hf.supportsFiber)
      try {
        Ri = hf.inject(ph), Tr = hf;
      } catch {
      }
  }
  return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by, oi.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vl(r))
      throw Error(b(200));
    return ch(n, r, null, l);
  }, oi.createRoot = function(n, r) {
    if (!Vl(n))
      throw Error(b(299));
    var l = !1, o = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Yd(n, 1, !1, null, null, l, !1, o, c), n[Xi] = r.current, eo(n.nodeType === 8 ? n.parentNode : n), new df(r);
  }, oi.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(b(188)) : (n = Object.keys(n).join(","), Error(b(268, n)));
    return n = M(r), n = n === null ? null : n.stateNode, n;
  }, oi.flushSync = function(n) {
    return Mi(n);
  }, oi.hydrate = function(n, r, l) {
    if (!pf(r))
      throw Error(b(200));
    return vf(null, n, r, !0, l);
  }, oi.hydrateRoot = function(n, r, l) {
    if (!Vl(n))
      throw Error(b(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Qd(r, null, n, 1, l ?? null, c, !1, d, m), n[Xi] = r.current, eo(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new As(r);
  }, oi.render = function(n, r, l) {
    if (!pf(r))
      throw Error(b(200));
    return vf(null, n, r, !1, l);
  }, oi.unmountComponentAtNode = function(n) {
    if (!pf(n))
      throw Error(b(40));
    return n._reactRootContainer ? (Mi(function() {
      vf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xi] = null;
      });
    }), !0) : !1;
  }, oi.unstable_batchedUpdates = Bd, oi.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!pf(l))
      throw Error(b(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(b(38));
    return vf(n, r, l, !1, o);
  }, oi.version = "18.3.1-next-f1338f8080-20240426", oi;
}
var si = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cR;
function Ek() {
  return cR || (cR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var z = ev(), H = dR(), b = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ce = !1;
    function oe(e) {
      Ce = e;
    }
    function te(e) {
      if (!Ce) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ve("warn", e, a);
      }
    }
    function g(e) {
      if (!Ce) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ve("error", e, a);
      }
    }
    function Ve(e, t, a) {
      {
        var i = b.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Q = 0, Z = 1, he = 2, ie = 3, X = 4, ne = 5, Te = 6, xe = 7, Ye = 8, mt = 9, ct = 10, Ne = 11, me = 12, q = 13, je = 14, ge = 15, vt = 16, jt = 17, Lt = 18, wt = 19, Pt = 21, qe = 22, ot = 23, Nt = 24, ft = 25, Ae = !0, ce = !1, Pe = !1, be = !1, L = !1, x = !0, J = !1, Se = !0, Oe = !0, _e = !0, k = !0, B = /* @__PURE__ */ new Set(), ee = {}, se = {};
    function ke(e, t) {
      et(e, t), et(e + "Capture", t);
    }
    function et(e, t) {
      ee[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ee[e] = t;
      {
        var a = e.toLowerCase();
        se[a] = e, e === "onDoubleClick" && (se.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        B.add(t[i]);
    }
    var gt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", St = Object.prototype.hasOwnProperty;
    function nn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function qt(e) {
      try {
        return fn(e), !1;
      } catch {
        return !0;
      }
    }
    function fn(e) {
      return "" + e;
    }
    function An(e, t) {
      if (qt(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, nn(e)), fn(e);
    }
    function gr(e) {
      if (qt(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nn(e)), fn(e);
    }
    function Wn(e, t) {
      if (qt(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, nn(e)), fn(e);
    }
    function lr(e, t) {
      if (qt(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, nn(e)), fn(e);
    }
    function Sr(e) {
      if (qt(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", nn(e)), fn(e);
    }
    function ur(e) {
      if (qt(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", nn(e)), fn(e);
    }
    var Ar = 0, Jn = 1, Zn = 2, yn = 3, or = 4, la = 5, Er = 6, we = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", tt = we + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", kt = new RegExp("^[" + we + "][" + tt + "]*$"), Gt = {}, Wt = {};
    function Dn(e) {
      return St.call(Wt, e) ? !0 : St.call(Gt, e) ? !1 : kt.test(e) ? (Wt[e] = !0, !0) : (Gt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Rn(e, t, a) {
      return t !== null ? t.type === Ar : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function sr(e, t, a, i) {
      if (a !== null && a.type === Ar)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function rn(e, t, a, i) {
      if (t === null || typeof t > "u" || sr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case yn:
            return !t;
          case or:
            return t === !1;
          case la:
            return isNaN(t);
          case Er:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Cr(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function Xt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Zn || t === yn || t === or, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Kt = {}, xa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    xa.forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Ar,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Kt[t] = new Xt(
        t,
        Jn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Zn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Zn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        yn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        or,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        la,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var zr = /[\-\:]([a-z])/g, Qn = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(zr, Qn);
      Kt[t] = new Xt(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(zr, Qn);
      Kt[t] = new Xt(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(zr, Qn);
      Kt[t] = new Xt(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ci = "xlinkHref";
    Kt[ci] = new Xt(
      "xlinkHref",
      Jn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Hi = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, jr = !1;
    function fi(e) {
      !jr && Hi.test(e) && (jr = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Yr(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        An(a, t), i.sanitizeURL && fi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === or) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : rn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (rn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === yn)
            return a;
          f = e.getAttribute(s);
        }
        return rn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function _a(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return An(a, t), u === "" + a ? a : u;
      }
    }
    function Wr(e, t, a, i) {
      var u = Cr(t);
      if (!Rn(t, u, i)) {
        if (rn(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (An(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === yn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, E = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var D = u.type, _;
          D === yn || D === or && a === !0 ? _ = "" : (An(a, y), _ = "" + a, u.sanitizeURL && fi(_.toString())), E ? e.setAttributeNS(E, y, _) : e.setAttribute(y, _);
        }
      }
    }
    var ua = Symbol.for("react.element"), cr = Symbol.for("react.portal"), Pr = Symbol.for("react.fragment"), Ha = Symbol.for("react.strict_mode"), ka = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), le = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), Dt = Symbol.for("react.suspense_list"), zt = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), M = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), ae = Symbol.for("react.offscreen"), Re = Symbol.for("react.legacy_hidden"), xt = Symbol.for("react.cache"), Mt = Symbol.for("react.tracing_marker"), $e = Symbol.iterator, an = "@@iterator";
    function gn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = $e && e[$e] || e[an];
      return typeof t == "function" ? t : null;
    }
    var lt = Object.assign, Sn = 0, Fr, Rr, Ri, Tr, yl, Qr, Xo;
    function Ko() {
    }
    Ko.__reactDisabledLog = !0;
    function tc() {
      {
        if (Sn === 0) {
          Fr = console.log, Rr = console.info, Ri = console.warn, Tr = console.error, yl = console.group, Qr = console.groupCollapsed, Xo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ko,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Sn++;
      }
    }
    function Fu() {
      {
        if (Sn--, Sn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, e, {
              value: Fr
            }),
            info: lt({}, e, {
              value: Rr
            }),
            warn: lt({}, e, {
              value: Ri
            }),
            error: lt({}, e, {
              value: Tr
            }),
            group: lt({}, e, {
              value: yl
            }),
            groupCollapsed: lt({}, e, {
              value: Qr
            }),
            groupEnd: lt({}, e, {
              value: Xo
            })
          });
        }
        Sn < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gl = b.ReactCurrentDispatcher, di;
    function Gr(e, t, a) {
      {
        if (di === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            di = i && i[1] || "";
          }
        return `
` + di + e;
      }
    }
    var Sl = !1, El;
    {
      var Cl = typeof WeakMap == "function" ? WeakMap : Map;
      El = new Cl();
    }
    function Hu(e, t) {
      if (!e || Sl)
        return "";
      {
        var a = El.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Sl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = gl.current, gl.current = null, tc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch ($) {
              i = $;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch ($) {
              i = $;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            i = $;
          }
          e();
        }
      } catch ($) {
        if ($ && i && typeof $.stack == "string") {
          for (var p = $.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, E = v.length - 1; y >= 1 && E >= 0 && p[y] !== v[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (p[y] !== v[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || p[y] !== v[E]) {
                    var D = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && El.set(e, D), D;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Sl = !1, gl.current = s, Fu(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", P = _ ? Gr(_) : "";
      return typeof e == "function" && El.set(e, P), P;
    }
    function Vu(e, t, a) {
      return Hu(e, !0);
    }
    function Vi(e, t, a) {
      return Hu(e, !1);
    }
    function Wf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ti(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Hu(e, Wf(e));
      if (typeof e == "string")
        return Gr(e);
      switch (e) {
        case Xe:
          return Gr("Suspense");
        case Dt:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case de:
            return Vi(e.render);
          case zt:
            return Ti(e.type, t, a);
          case S: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Ti(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Jt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ne:
          return Gr(e.type);
        case vt:
          return Gr("Lazy");
        case q:
          return Gr("Suspense");
        case wt:
          return Gr("SuspenseList");
        case Q:
        case he:
        case ge:
          return Vi(e.type);
        case Ne:
          return Vi(e.type.render);
        case Z:
          return Vu(e.type);
        default:
          return "";
      }
    }
    function Bu(e) {
      try {
        var t = "", a = e;
        do
          t += Jt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Jl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function $u(e) {
      return e.displayName || "Context";
    }
    function Vt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Pr:
          return "Fragment";
        case cr:
          return "Portal";
        case ka:
          return "Profiler";
        case Ha:
          return "StrictMode";
        case Xe:
          return "Suspense";
        case Dt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case le:
            var t = e;
            return $u(t) + ".Consumer";
          case T:
            var a = e;
            return $u(a._context) + ".Provider";
          case de:
            return Jl(e, e.render, "ForwardRef");
          case zt:
            var i = e.displayName || null;
            return i !== null ? i : Vt(e.type) || "Memo";
          case S: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Vt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Iu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Yu(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Nt:
          return "Cache";
        case mt:
          var i = a;
          return Yu(i) + ".Consumer";
        case ct:
          var u = a;
          return Yu(u._context) + ".Provider";
        case Lt:
          return "DehydratedFragment";
        case Ne:
          return Iu(a, a.render, "ForwardRef");
        case xe:
          return "Fragment";
        case ne:
          return a;
        case X:
          return "Portal";
        case ie:
          return "Root";
        case Te:
          return "Text";
        case vt:
          return Vt(a);
        case Ye:
          return a === Ha ? "StrictMode" : "Mode";
        case qe:
          return "Offscreen";
        case me:
          return "Profiler";
        case Pt:
          return "Scope";
        case q:
          return "Suspense";
        case wt:
          return "SuspenseList";
        case ft:
          return "TracingMarker";
        case Z:
        case Q:
        case jt:
        case he:
        case je:
        case ge:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zl = b.ReactDebugCurrentFrame, Mn = null, oa = !1;
    function qr() {
      {
        if (Mn === null)
          return null;
        var e = Mn._debugOwner;
        if (e !== null && typeof e < "u")
          return Rt(e);
      }
      return null;
    }
    function Rl() {
      return Mn === null ? "" : Bu(Mn);
    }
    function zn() {
      Zl.getCurrentStack = null, Mn = null, oa = !1;
    }
    function un(e) {
      Zl.getCurrentStack = e === null ? null : Rl, Mn = e, oa = !1;
    }
    function nc() {
      return Mn;
    }
    function sa(e) {
      oa = e;
    }
    function fr(e) {
      return "" + e;
    }
    function bi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ur(e), e;
        default:
          return "";
      }
    }
    var rc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Bi(e, t) {
      rc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Tl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ac(e) {
      return e._valueTracker;
    }
    function Va(e) {
      e._valueTracker = null;
    }
    function bl(e) {
      var t = "";
      return e && (Tl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function $i(e) {
      var t = Tl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      ur(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            ur(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            ur(p), i = "" + p;
          },
          stopTracking: function() {
            Va(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ba(e) {
      ac(e) || (e._valueTracker = $i(e));
    }
    function Wu(e) {
      if (!e)
        return !1;
      var t = ac(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = bl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function wl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var xl = !1, eu = !1, Qu = !1, Jo = !1;
    function pi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function R(e, t) {
      Bi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !eu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component", t.type), eu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !xl && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component", t.type), xl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: bi(t.value != null ? t.value : i),
        controlled: pi(t)
      };
    }
    function F(e, t) {
      var a = e, i = t.checked;
      i != null && Wr(a, "checked", i, !1);
    }
    function I(e, t) {
      var a = e;
      {
        var i = pi(t);
        !a._wrapperState.controlled && i && !Jo && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Jo = !0), a._wrapperState.controlled && !i && !Qu && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Qu = !0);
      }
      F(e, t);
      var u = bi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = fr(u)) : a.value !== fr(u) && (a.value = fr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? st(a, t.type, u) : t.hasOwnProperty("defaultValue") && st(a, t.type, bi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ye(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = fr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function dt(e, t) {
      var a = e;
      I(a, t), Le(a, t);
    }
    function Le(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        An(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Dh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Wu(f), I(f, p);
          }
        }
      }
    }
    function st(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = fr(e._wrapperState.initialValue) : e.defaultValue !== fr(a) && (e.defaultValue = fr(a)));
    }
    var Ut = !1, Qt = !1, vn = !1;
    function cn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? z.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Qt || (Qt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vn || (vn = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ut && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ut = !0);
    }
    function hn(e, t) {
      t.value != null && e.setAttribute("value", fr(bi(t.value)));
    }
    var En = Array.isArray;
    function Bt(e) {
      return En(e);
    }
    var Ii;
    Ii = !1;
    function Gu() {
      var e = qr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zo = ["value", "defaultValue"];
    function Qf(e) {
      {
        Bi("select", e);
        for (var t = 0; t < Zo.length; t++) {
          var a = Zo[t];
          if (e[a] != null) {
            var i = Bt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Gu()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Gu());
          }
        }
      }
    }
    function vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var E = fr(bi(a)), D = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === E) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          D === null && !u[_].disabled && (D = u[_]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function es(e, t) {
      return lt({}, t, {
        value: void 0
      });
    }
    function ts(e, t) {
      var a = e;
      Qf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ii && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ii = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? vi(a, !!t.multiple, i, !1) : t.defaultValue != null && vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Qm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? vi(a, !!t.multiple, t.defaultValue, !0) : vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Gm(e, t) {
      var a = e, i = t.value;
      i != null && vi(a, !!t.multiple, i, !1);
    }
    var qf = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: fr(a._wrapperState.initialValue)
      });
      return i;
    }
    function tv(e, t) {
      var a = e;
      Bi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !qf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component"), qf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Bt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: bi(i)
      };
    }
    function nv(e, t) {
      var a = e, i = bi(t.value), u = bi(t.defaultValue);
      if (i != null) {
        var s = fr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = fr(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Kf(e, t) {
      nv(e, t);
    }
    var Yi = "http://www.w3.org/1999/xhtml", qm = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function ic(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return qm;
        default:
          return Yi;
      }
    }
    function Zf(e, t) {
      return e == null || e === Yi ? ic(t) : e === Jf && t === "foreignObject" ? Yi : e;
    }
    var Xm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, lc, av = Xm(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        lc = lc || document.createElement("div"), lc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = lc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ca = 1, Wi = 3, Gn = 8, hi = 9, tu = 11, uc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Wi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, iv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, qu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(qu).forEach(function(e) {
      uv.forEach(function(t) {
        qu[lv(t, e)] = qu[e];
      });
    });
    function oc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(qu.hasOwnProperty(e) && qu[e]) ? t + "px" : (lr(t, e), ("" + t).trim());
    }
    var Xu = /([A-Z])/g, Km = /^ms-/;
    function Jm(e) {
      return e.replace(Xu, "-$1").toLowerCase().replace(Km, "-ms-");
    }
    var ov = function() {
    };
    {
      var sv = /^(?:webkit|moz|o)[A-Z]/, cv = /^-ms-/, ns = /-(.)/g, Ku = /;\s*$/, Ju = {}, Zu = {}, fv = !1, ed = !1, td = function(e) {
        return e.replace(ns, function(t, a) {
          return a.toUpperCase();
        });
      }, nd = function(e) {
        Ju.hasOwnProperty(e) && Ju[e] || (Ju[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          td(e.replace(cv, "ms-"))
        ));
      }, dv = function(e) {
        Ju.hasOwnProperty(e) && Ju[e] || (Ju[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, pv = function(e, t) {
        Zu.hasOwnProperty(t) && Zu[t] || (Zu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ku, "")));
      }, vv = function(e, t) {
        fv || (fv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Zm = function(e, t) {
        ed || (ed = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ov = function(e, t) {
        e.indexOf("-") > -1 ? nd(e) : sv.test(e) ? dv(e) : Ku.test(t) && pv(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || Zm(e, t));
      };
    }
    var ey = ov;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Jm(i)) + ":", t += oc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ey(i, t[i]);
          var s = oc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function $a(e) {
      var t = {};
      for (var a in e)
        for (var i = iv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function rs(e, t) {
      {
        if (!t)
          return;
        var a = $a(e), i = $a(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var mv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, yv = lt({
      menuitem: !0
    }, mv), gv = "__html";
    function sc(e, t) {
      if (t) {
        if (yv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Qi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var cc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Sv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, mi = {}, rd = new RegExp("^(aria)-[" + tt + "]*$"), as = new RegExp("^(aria)[A-Z][" + tt + "]*$");
    function ad(e, t) {
      {
        if (St.call(mi, t) && mi[t])
          return !0;
        if (as.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), mi[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), mi[t] = !0, !0;
        }
        if (rd.test(t)) {
          var u = t.toLowerCase(), s = Sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return mi[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), mi[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ev(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ad(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function fc(e, t) {
      Qi(e, t) || Ev(e, t);
    }
    var nu = !1;
    function id(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !nu && (nu = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ld = function() {
    };
    {
      var dr = {}, ud = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + tt + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + tt + "]*$");
      ld = function(e, t, a, i) {
        if (St.call(dr, t) && dr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), dr[t] = !0, !0;
          if (ud.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (ud.test(t))
          return Cv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (Rv.test(t) || Tv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), dr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var v = Cr(t), y = v !== null && v.type === Ar;
        if (cc.hasOwnProperty(u)) {
          var E = cc[u];
          if (E !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, E), dr[t] = !0, !0;
        } else if (!y && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), dr[t] = !0, !0;
        return typeof a == "boolean" && sr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), dr[t] = !0, !0) : y ? !0 : sr(t, a, v, !1) ? (dr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === yn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), dr[t] = !0), !0);
      };
    }
    var bv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ld(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function wv(e, t, a) {
      Qi(e, t) || bv(e, t, a);
    }
    var Gi = 1, is = 2, ru = 4, ry = Gi | is | ru, ls = null;
    function us(e) {
      ls !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ls = e;
    }
    function ay() {
      ls === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ls = null;
    }
    function xv(e) {
      return e === ls;
    }
    function dc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Wi ? t.parentNode : t;
    }
    var mn = null, _l = null, qi = null;
    function eo(e) {
      var t = Uo(e);
      if (t) {
        if (typeof mn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Dh(a);
          mn(t.stateNode, t.type, i);
        }
      }
    }
    function _v(e) {
      mn = e;
    }
    function pc(e) {
      _l ? qi ? qi.push(e) : qi = [e] : _l = e;
    }
    function os() {
      return _l !== null || qi !== null;
    }
    function ss() {
      if (_l) {
        var e = _l, t = qi;
        if (_l = null, qi = null, eo(e), t)
          for (var a = 0; a < t.length; a++)
            eo(t[a]);
      }
    }
    var au = function(e, t) {
      return e(t);
    }, od = function() {
    }, sd = !1;
    function iy() {
      var e = os();
      e && (od(), ss());
    }
    function cd(e, t, a) {
      if (sd)
        return e(t, a);
      sd = !0;
      try {
        return au(e, t, a);
      } finally {
        sd = !1, iy();
      }
    }
    function vc(e, t, a) {
      au = e, od = a;
    }
    function hc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function fd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && hc(t));
        default:
          return !1;
      }
    }
    function iu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Dh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (fd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var cs = !1;
    if (gt)
      try {
        var lu = {};
        Object.defineProperty(lu, "passive", {
          get: function() {
            cs = !0;
          }
        }), window.addEventListener("test", lu, lu), window.removeEventListener("test", lu, lu);
      } catch {
        cs = !1;
      }
    function kv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (E) {
        this.onError(E);
      }
    }
    var dd = kv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      dd = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), D = !1, _ = !0, P = window.event, $ = Object.getOwnPropertyDescriptor(window, "event");
        function Y() {
          pd.removeEventListener(W, ut, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = P);
        }
        var Ue = Array.prototype.slice.call(arguments, 3);
        function ut() {
          D = !0, Y(), a.apply(i, Ue), _ = !1;
        }
        var rt, Yt = !1, Ht = !1;
        function U(A) {
          if (rt = A.error, Yt = !0, rt === null && A.colno === 0 && A.lineno === 0 && (Ht = !0), A.defaultPrevented && rt != null && typeof rt == "object")
            try {
              rt._suppressLogging = !0;
            } catch {
            }
        }
        var W = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", U), pd.addEventListener(W, ut, !1), E.initEvent(W, !1, !1), pd.dispatchEvent(E), $ && Object.defineProperty(window, "event", $), D && _ && (Yt ? Ht && (rt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : rt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(rt)), window.removeEventListener("error", U), !D)
          return Y(), kv.apply(this, arguments);
      };
    }
    var ly = dd, kl = !1, yi = null, fs = !1, Ol = null, wi = {
      onError: function(e) {
        kl = !0, yi = e;
      }
    };
    function uu(e, t, a, i, u, s, f, p, v) {
      kl = !1, yi = null, ly.apply(wi, arguments);
    }
    function Xi(e, t, a, i, u, s, f, p, v) {
      if (uu.apply(this, arguments), kl) {
        var y = hd();
        fs || (fs = !0, Ol = y);
      }
    }
    function vd() {
      if (fs) {
        var e = Ol;
        throw fs = !1, Ol = null, e;
      }
    }
    function uy() {
      return kl;
    }
    function hd() {
      if (kl) {
        var e = yi;
        return kl = !1, yi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ia(e) {
      return e._reactInternals;
    }
    function ds(e) {
      return e._reactInternals !== void 0;
    }
    function to(e, t) {
      e._reactInternals = t;
    }
    var it = (
      /*                      */
      0
    ), Dl = (
      /*                */
      1
    ), Tn = (
      /*                    */
      2
    ), Ot = (
      /*                       */
      4
    ), ln = (
      /*                */
      16
    ), on = (
      /*                 */
      32
    ), xi = (
      /*                     */
      64
    ), Et = (
      /*                   */
      128
    ), jn = (
      /*            */
      256
    ), fa = (
      /*                          */
      512
    ), Ya = (
      /*                     */
      1024
    ), _n = (
      /*                      */
      2048
    ), Wa = (
      /*                    */
      4096
    ), Ml = (
      /*                   */
      8192
    ), ps = (
      /*             */
      16384
    ), mc = _n | Ot | xi | fa | Ya | ps, Ov = (
      /*               */
      32767
    ), Oa = (
      /*                   */
      32768
    ), pr = (
      /*                */
      65536
    ), vs = (
      /* */
      131072
    ), md = (
      /*                       */
      1048576
    ), yd = (
      /*                    */
      2097152
    ), da = (
      /*                 */
      4194304
    ), Ll = (
      /*                */
      8388608
    ), pa = (
      /*               */
      16777216
    ), ou = (
      /*              */
      33554432
    ), no = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ot | Ya | 0
    ), va = Tn | Ot | ln | on | fa | Wa | Ml, Hr = Ot | xi | fa | Ml, Qa = _n | ln, br = da | Ll | yd, Ki = b.ReactCurrentOwner;
    function Da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Tn | Wa)) !== it && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ie ? a : null;
    }
    function gd(e) {
      if (e.tag === q) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function yc(e) {
      return e.tag === ie ? e.stateNode.containerInfo : null;
    }
    function Sd(e) {
      return Da(e) === e;
    }
    function Ma(e) {
      {
        var t = Ki.current;
        if (t !== null && t.tag === Z) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ia(e);
      return u ? Da(u) === u : !1;
    }
    function ha(e) {
      if (Da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function bn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ha(s), e;
            if (v === u)
              return ha(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, E = s.child; E; ) {
            if (E === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (E === u) {
              y = !0, u = s, i = f;
              break;
            }
            E = E.sibling;
          }
          if (!y) {
            for (E = f.child; E; ) {
              if (E === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (E === u) {
                y = !0, u = f, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ie)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ga(e) {
      var t = bn(e);
      return t !== null ? Ed(t) : null;
    }
    function Ed(e) {
      if (e.tag === ne || e.tag === Te)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Ed(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Dv(e) {
      var t = bn(e);
      return t !== null ? gc(t) : null;
    }
    function gc(e) {
      if (e.tag === ne || e.tag === Te)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== X) {
          var a = gc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Sc = H.unstable_scheduleCallback, Mv = H.unstable_cancelCallback, Ec = H.unstable_shouldYield, Lv = H.unstable_requestPaint, Ln = H.unstable_now, Cd = H.unstable_getCurrentPriorityLevel, Cc = H.unstable_ImmediatePriority, su = H.unstable_UserBlockingPriority, _i = H.unstable_NormalPriority, Nv = H.unstable_LowPriority, Rc = H.unstable_IdlePriority, ro = H.unstable_yieldValue, Uv = H.unstable_setDisableYieldValue, Ji = null, er = null, De = null, qa = !1, La = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Rd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Oe && (e = lt({}, e, {
          getLaneLabelMap: Zi,
          injectProfilingHooks: Av
        })), Ji = t.inject(e), er = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Td(e, t) {
      if (er && typeof er.onScheduleFiberRoot == "function")
        try {
          er.onScheduleFiberRoot(Ji, e, t);
        } catch (a) {
          qa || (qa = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function ao(e, t) {
      if (er && typeof er.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Et) === Et;
          if (_e) {
            var i;
            switch (t) {
              case Bn:
                i = Cc;
                break;
              case tl:
                i = su;
                break;
              case ki:
                i = _i;
                break;
              case yo:
                i = Rc;
                break;
              default:
                i = _i;
                break;
            }
            er.onCommitFiberRoot(Ji, e, i, a);
          }
        } catch (u) {
          qa || (qa = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Xa(e) {
      if (er && typeof er.onPostCommitFiberRoot == "function")
        try {
          er.onPostCommitFiberRoot(Ji, e);
        } catch (t) {
          qa || (qa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function cu(e) {
      if (er && typeof er.onCommitFiberUnmount == "function")
        try {
          er.onCommitFiberUnmount(Ji, e);
        } catch (t) {
          qa || (qa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function qn(e) {
      if (typeof ro == "function" && (Uv(e), oe(e)), er && typeof er.setStrictMode == "function")
        try {
          er.setStrictMode(Ji, e);
        } catch (t) {
          qa || (qa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Av(e) {
      De = e;
    }
    function Zi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ss; a++) {
          var i = sy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Nl(e) {
      De !== null && typeof De.markCommitStarted == "function" && De.markCommitStarted(e);
    }
    function Tc() {
      De !== null && typeof De.markCommitStopped == "function" && De.markCommitStopped();
    }
    function io(e) {
      De !== null && typeof De.markComponentRenderStarted == "function" && De.markComponentRenderStarted(e);
    }
    function ma() {
      De !== null && typeof De.markComponentRenderStopped == "function" && De.markComponentRenderStopped();
    }
    function Ul(e) {
      De !== null && typeof De.markComponentPassiveEffectMountStarted == "function" && De.markComponentPassiveEffectMountStarted(e);
    }
    function bc() {
      De !== null && typeof De.markComponentPassiveEffectMountStopped == "function" && De.markComponentPassiveEffectMountStopped();
    }
    function zv(e) {
      De !== null && typeof De.markComponentPassiveEffectUnmountStarted == "function" && De.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      De !== null && typeof De.markComponentPassiveEffectUnmountStopped == "function" && De.markComponentPassiveEffectUnmountStopped();
    }
    function jv(e) {
      De !== null && typeof De.markComponentLayoutEffectMountStarted == "function" && De.markComponentLayoutEffectMountStarted(e);
    }
    function hs() {
      De !== null && typeof De.markComponentLayoutEffectMountStopped == "function" && De.markComponentLayoutEffectMountStopped();
    }
    function gi(e) {
      De !== null && typeof De.markComponentLayoutEffectUnmountStarted == "function" && De.markComponentLayoutEffectUnmountStarted(e);
    }
    function lo() {
      De !== null && typeof De.markComponentLayoutEffectUnmountStopped == "function" && De.markComponentLayoutEffectUnmountStopped();
    }
    function ms(e, t, a) {
      De !== null && typeof De.markComponentErrored == "function" && De.markComponentErrored(e, t, a);
    }
    function fu(e, t, a) {
      De !== null && typeof De.markComponentSuspended == "function" && De.markComponentSuspended(e, t, a);
    }
    function bd(e) {
      De !== null && typeof De.markLayoutEffectsStarted == "function" && De.markLayoutEffectsStarted(e);
    }
    function uo() {
      De !== null && typeof De.markLayoutEffectsStopped == "function" && De.markLayoutEffectsStopped();
    }
    function Pv(e) {
      De !== null && typeof De.markPassiveEffectsStarted == "function" && De.markPassiveEffectsStarted(e);
    }
    function wd() {
      De !== null && typeof De.markPassiveEffectsStopped == "function" && De.markPassiveEffectsStopped();
    }
    function kn(e) {
      De !== null && typeof De.markRenderStarted == "function" && De.markRenderStarted(e);
    }
    function xc() {
      De !== null && typeof De.markRenderYielded == "function" && De.markRenderYielded();
    }
    function _c() {
      De !== null && typeof De.markRenderStopped == "function" && De.markRenderStopped();
    }
    function xd(e) {
      De !== null && typeof De.markRenderScheduled == "function" && De.markRenderScheduled(e);
    }
    function kc(e, t) {
      De !== null && typeof De.markForceUpdateScheduled == "function" && De.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      De !== null && typeof De.markStateUpdateScheduled == "function" && De.markStateUpdateScheduled(e, t);
    }
    var Je = (
      /*                         */
      0
    ), nt = (
      /*                 */
      1
    ), Ct = (
      /*                    */
      2
    ), At = (
      /*               */
      8
    ), Na = (
      /*              */
      16
    ), oo = Math.clz32 ? Math.clz32 : Vr, gs = Math.log, oy = Math.LN2;
    function Vr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (gs(t) / oy | 0) | 0;
    }
    var Ss = 31, re = (
      /*                        */
      0
    ), Xn = (
      /*                          */
      0
    ), at = (
      /*                        */
      1
    ), wr = (
      /*    */
      2
    ), Ua = (
      /*             */
      4
    ), el = (
      /*            */
      8
    ), Ka = (
      /*                     */
      16
    ), so = (
      /*                */
      32
    ), du = (
      /*                       */
      4194240
    ), co = (
      /*                        */
      64
    ), Oc = (
      /*                        */
      128
    ), Dc = (
      /*                        */
      256
    ), Mc = (
      /*                        */
      512
    ), Lc = (
      /*                        */
      1024
    ), Nc = (
      /*                        */
      2048
    ), pu = (
      /*                        */
      4096
    ), Uc = (
      /*                        */
      8192
    ), fo = (
      /*                        */
      16384
    ), po = (
      /*                       */
      32768
    ), Ac = (
      /*                       */
      65536
    ), Es = (
      /*                       */
      131072
    ), zc = (
      /*                       */
      262144
    ), jc = (
      /*                       */
      524288
    ), Pc = (
      /*                       */
      1048576
    ), Fc = (
      /*                       */
      2097152
    ), vo = (
      /*                            */
      130023424
    ), vu = (
      /*                             */
      4194304
    ), Hc = (
      /*                             */
      8388608
    ), Vc = (
      /*                             */
      16777216
    ), _d = (
      /*                             */
      33554432
    ), Bc = (
      /*                             */
      67108864
    ), Fv = vu, Cs = (
      /*          */
      134217728
    ), kd = (
      /*                          */
      268435455
    ), ho = (
      /*               */
      268435456
    ), Al = (
      /*                        */
      536870912
    ), Br = (
      /*                   */
      1073741824
    );
    function sy(e) {
      {
        if (e & at)
          return "Sync";
        if (e & wr)
          return "InputContinuousHydration";
        if (e & Ua)
          return "InputContinuous";
        if (e & el)
          return "DefaultHydration";
        if (e & Ka)
          return "Default";
        if (e & so)
          return "TransitionHydration";
        if (e & du)
          return "Transition";
        if (e & vo)
          return "Retry";
        if (e & Cs)
          return "SelectiveHydration";
        if (e & ho)
          return "IdleHydration";
        if (e & Al)
          return "Idle";
        if (e & Br)
          return "Offscreen";
      }
    }
    var Cn = -1, $c = co, ya = vu;
    function hu(e) {
      switch (Vn(e)) {
        case at:
          return at;
        case wr:
          return wr;
        case Ua:
          return Ua;
        case el:
          return el;
        case Ka:
          return Ka;
        case so:
          return so;
        case co:
        case Oc:
        case Dc:
        case Mc:
        case Lc:
        case Nc:
        case pu:
        case Uc:
        case fo:
        case po:
        case Ac:
        case Es:
        case zc:
        case jc:
        case Pc:
        case Fc:
          return e & du;
        case vu:
        case Hc:
        case Vc:
        case _d:
        case Bc:
          return e & vo;
        case Cs:
          return Cs;
        case ho:
          return ho;
        case Al:
          return Al;
        case Br:
          return Br;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function mu(e, t) {
      var a = e.pendingLanes;
      if (a === re)
        return re;
      var i = re, u = e.suspendedLanes, s = e.pingedLanes, f = a & kd;
      if (f !== re) {
        var p = f & ~u;
        if (p !== re)
          i = hu(p);
        else {
          var v = f & s;
          v !== re && (i = hu(v));
        }
      } else {
        var y = a & ~u;
        y !== re ? i = hu(y) : s !== re && (i = hu(s));
      }
      if (i === re)
        return re;
      if (t !== re && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === re) {
        var E = Vn(i), D = Vn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === Ka && (D & du) !== re
        )
          return t;
      }
      (i & Ua) !== re && (i |= a & Ka);
      var _ = e.entangledLanes;
      if (_ !== re)
        for (var P = e.entanglements, $ = i & _; $ > 0; ) {
          var Y = jl($), Ue = 1 << Y;
          i |= P[Y], $ &= ~Ue;
        }
      return i;
    }
    function Hv(e, t) {
      for (var a = e.eventTimes, i = Cn; t > 0; ) {
        var u = jl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Vv(e, t) {
      switch (e) {
        case at:
        case wr:
        case Ua:
          return t + 250;
        case el:
        case Ka:
        case so:
        case co:
        case Oc:
        case Dc:
        case Mc:
        case Lc:
        case Nc:
        case pu:
        case Uc:
        case fo:
        case po:
        case Ac:
        case Es:
        case zc:
        case jc:
        case Pc:
        case Fc:
          return t + 5e3;
        case vu:
        case Hc:
        case Vc:
        case _d:
        case Bc:
          return Cn;
        case Cs:
        case ho:
        case Al:
        case Br:
          return Cn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Cn;
      }
    }
    function Bv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jl(f), v = 1 << p, y = s[p];
        y === Cn ? ((v & i) === re || (v & u) !== re) && (s[p] = Vv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Od(e) {
      return hu(e.pendingLanes);
    }
    function zl(e) {
      var t = e.pendingLanes & ~Br;
      return t !== re ? t : t & Br ? Br : re;
    }
    function Dd(e) {
      return (e & at) !== re;
    }
    function Rs(e) {
      return (e & kd) !== re;
    }
    function $v(e) {
      return (e & vo) === e;
    }
    function Iv(e) {
      var t = at | Ua | Ka;
      return (e & t) === re;
    }
    function Yv(e) {
      return (e & du) === e;
    }
    function Ts(e, t) {
      var a = wr | Ua | el | Ka;
      return (t & a) !== re;
    }
    function Wv(e, t) {
      return (t & e.expiredLanes) !== re;
    }
    function Md(e) {
      return (e & du) !== re;
    }
    function Qv() {
      var e = $c;
      return $c <<= 1, ($c & du) === re && ($c = co), e;
    }
    function ga() {
      var e = ya;
      return ya <<= 1, (ya & vo) === re && (ya = vu), e;
    }
    function Vn(e) {
      return e & -e;
    }
    function mo(e) {
      return Vn(e);
    }
    function jl(e) {
      return 31 - oo(e);
    }
    function Ic(e) {
      return jl(e);
    }
    function Sa(e, t) {
      return (e & t) !== re;
    }
    function yu(e, t) {
      return (e & t) === t;
    }
    function _t(e, t) {
      return e | t;
    }
    function bs(e, t) {
      return e & ~t;
    }
    function Yc(e, t) {
      return e & t;
    }
    function cy(e) {
      return e;
    }
    function Gv(e, t) {
      return e !== Xn && e < t ? e : t;
    }
    function ws(e) {
      for (var t = [], a = 0; a < Ss; a++)
        t.push(e);
      return t;
    }
    function gu(e, t, a) {
      e.pendingLanes |= t, t !== Al && (e.suspendedLanes = re, e.pingedLanes = re);
      var i = e.eventTimes, u = Ic(t);
      i[u] = a;
    }
    function qv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jl(i), s = 1 << u;
        a[u] = Cn, i &= ~s;
      }
    }
    function Wc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Qc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = re, e.pingedLanes = re, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jl(f), v = 1 << p;
        i[p] = re, u[p] = Cn, s[p] = Cn, f &= ~v;
      }
    }
    function Ld(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Xv(e, t) {
      var a = Vn(t), i;
      switch (a) {
        case Ua:
          i = wr;
          break;
        case Ka:
          i = el;
          break;
        case co:
        case Oc:
        case Dc:
        case Mc:
        case Lc:
        case Nc:
        case pu:
        case Uc:
        case fo:
        case po:
        case Ac:
        case Es:
        case zc:
        case jc:
        case Pc:
        case Fc:
        case vu:
        case Hc:
        case Vc:
        case _d:
        case Bc:
          i = so;
          break;
        case Al:
          i = ho;
          break;
        default:
          i = Xn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Xn ? Xn : i;
    }
    function Gc(e, t, a) {
      if (La)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Ic(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Nd(e, t) {
      if (La)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Ic(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function xs(e, t) {
      return null;
    }
    var Bn = at, tl = Ua, ki = Ka, yo = Al, go = Xn;
    function Ja() {
      return go;
    }
    function Pn(e) {
      go = e;
    }
    function $r(e, t) {
      var a = go;
      try {
        return go = e, t();
      } finally {
        go = a;
      }
    }
    function fy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function dy(e, t) {
      return e > t ? e : t;
    }
    function So(e, t) {
      return e !== 0 && e < t;
    }
    function xr(e) {
      var t = Vn(e);
      return So(Bn, t) ? So(tl, t) ? Rs(t) ? ki : yo : tl : Bn;
    }
    function qc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ie;
    function Eo(e) {
      Ie = e;
    }
    function Ud(e) {
      Ie(e);
    }
    var Xc;
    function py(e) {
      Xc = e;
    }
    var Co;
    function Kc(e) {
      Co = e;
    }
    var Jc;
    function Kv(e) {
      Jc = e;
    }
    var Ad;
    function Jv(e) {
      Ad = e;
    }
    var _s = !1, Ro = [], On = null, vr = null, Xr = null, To = /* @__PURE__ */ new Map(), bo = /* @__PURE__ */ new Map(), hr = [], Zv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Oi(e) {
      return Zv.indexOf(e) > -1;
    }
    function vy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function zd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          On = null;
          break;
        case "dragenter":
        case "dragleave":
          vr = null;
          break;
        case "mouseover":
        case "mouseout":
          Xr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          To.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          bo.delete(i);
          break;
        }
      }
    }
    function wo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = vy(t, a, i, u, s);
        if (t !== null) {
          var p = Uo(t);
          p !== null && Xc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function eh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return On = wo(On, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return vr = wo(vr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xr = wo(Xr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return To.set(y, wo(To.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var E = u, D = E.pointerId;
          return bo.set(D, wo(bo.get(D) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function jd(e) {
      var t = Fs(e.target);
      if (t !== null) {
        var a = Da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === q) {
            var u = gd(a);
            if (u !== null) {
              e.blockedOn = u, Ad(e.priority, function() {
                Co(a);
              });
              return;
            }
          } else if (i === ie) {
            var s = a.stateNode;
            if (qc(s)) {
              e.blockedOn = yc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function hy(e) {
      for (var t = Jc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < hr.length && So(t, hr[i].priority); i++)
        ;
      hr.splice(i, 0, a), i === 0 && jd(a);
    }
    function Su(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ir(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          us(s), u.target.dispatchEvent(s), ay();
        } else {
          var f = Uo(i);
          return f !== null && Xc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Zc(e, t, a) {
      Su(e) && a.delete(t);
    }
    function Za() {
      _s = !1, On !== null && Su(On) && (On = null), vr !== null && Su(vr) && (vr = null), Xr !== null && Su(Xr) && (Xr = null), To.forEach(Zc), bo.forEach(Zc);
    }
    function Ft(e, t) {
      e.blockedOn === t && (e.blockedOn = null, _s || (_s = !0, H.unstable_scheduleCallback(H.unstable_NormalPriority, Za)));
    }
    function Fn(e) {
      if (Ro.length > 0) {
        Ft(Ro[0], e);
        for (var t = 1; t < Ro.length; t++) {
          var a = Ro[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      On !== null && Ft(On, e), vr !== null && Ft(vr, e), Xr !== null && Ft(Xr, e);
      var i = function(p) {
        return Ft(p, e);
      };
      To.forEach(i), bo.forEach(i);
      for (var u = 0; u < hr.length; u++) {
        var s = hr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; hr.length > 0; ) {
        var f = hr[0];
        if (f.blockedOn !== null)
          break;
        jd(f), f.blockedOn === null && hr.shift();
      }
    }
    var wn = b.ReactCurrentBatchConfig, tr = !0;
    function Ea(e) {
      tr = !!e;
    }
    function xo() {
      return tr;
    }
    function nr(e, t, a) {
      var i = ef(t), u;
      switch (i) {
        case Bn:
          u = ks;
          break;
        case tl:
          u = Eu;
          break;
        case ki:
        default:
          u = _o;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ks(e, t, a, i) {
      var u = Ja(), s = wn.transition;
      wn.transition = null;
      try {
        Pn(Bn), _o(e, t, a, i);
      } finally {
        Pn(u), wn.transition = s;
      }
    }
    function Eu(e, t, a, i) {
      var u = Ja(), s = wn.transition;
      wn.transition = null;
      try {
        Pn(tl), _o(e, t, a, i);
      } finally {
        Pn(u), wn.transition = s;
      }
    }
    function _o(e, t, a, i) {
      tr && Pd(e, t, a, i);
    }
    function Pd(e, t, a, i) {
      var u = Ir(e, t, a, i);
      if (u === null) {
        Ly(e, t, i, Pl, a), zd(e, i);
        return;
      }
      if (eh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (zd(e, i), t & ru && Oi(e)) {
        for (; u !== null; ) {
          var s = Uo(u);
          s !== null && Ud(s);
          var f = Ir(e, t, a, i);
          if (f === null && Ly(e, t, i, Pl, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ly(e, t, i, null, a);
    }
    var Pl = null;
    function Ir(e, t, a, i) {
      Pl = null;
      var u = dc(i), s = Fs(u);
      if (s !== null) {
        var f = Da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === q) {
            var v = gd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ie) {
            var y = f.stateNode;
            if (qc(y))
              return yc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Pl = s, null;
    }
    function ef(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Bn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return tl;
        case "message": {
          var t = Cd();
          switch (t) {
            case Cc:
              return Bn;
            case su:
              return tl;
            case _i:
            case Nv:
              return ki;
            case Rc:
              return yo;
            default:
              return ki;
          }
        }
        default:
          return ki;
      }
    }
    function ko(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function nl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function tf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Fd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ei = null, Oo = null, ti = null;
    function nf(e) {
      return ei = e, Oo = Ds(), !0;
    }
    function Os() {
      ei = null, Oo = null, ti = null;
    }
    function rf() {
      if (ti)
        return ti;
      var e, t = Oo, a = t.length, i, u = Ds(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ti = u.slice(e, p), ti;
    }
    function Ds() {
      return "value" in ei ? ei.value : ei.textContent;
    }
    function Cu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function mr() {
      return !0;
    }
    function rl() {
      return !1;
    }
    function Nn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = mr : this.isDefaultPrevented = rl, this.isPropagationStopped = rl, this;
      }
      return lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = mr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = mr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: mr
      }), t;
    }
    var rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, af = Nn(rr), Ru = lt({}, rr, {
      view: 0,
      detail: 0
    }), Hd = Nn(Ru), Vd, Di, Do;
    function Bd(e) {
      e !== Do && (Do && e.type === "mousemove" ? (Vd = e.screenX - Do.screenX, Di = e.screenY - Do.screenY) : (Vd = 0, Di = 0), Do = e);
    }
    var Mi = lt({}, Ru, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $d,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Bd(e), Vd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Di;
      }
    }), lf = Nn(Mi), Tu = lt({}, Mi, {
      dataTransfer: 0
    }), th = Nn(Tu), nh = lt({}, Ru, {
      relatedTarget: 0
    }), Ms = Nn(nh), uf = lt({}, rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), my = Nn(uf), yy = lt({}, rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), rh = Nn(yy), ah = lt({}, rr, {
      data: 0
    }), Fl = Nn(ah), gy = Fl, Mo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, ih = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Hn(e) {
      if (e.key) {
        var t = Mo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Cu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ih[e.keyCode] || "Unidentified" : "";
    }
    var Sy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function lh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Sy[e];
      return i ? !!a[i] : !1;
    }
    function $d(e) {
      return lh;
    }
    var Ey = lt({}, Ru, {
      key: Hn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $d,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Cu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Cu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), uh = Nn(Ey), oh = lt({}, Mi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), sh = Nn(oh), ni = lt({}, Ru, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $d
    }), Id = Nn(ni), Cy = lt({}, rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Hl = Nn(Cy), of = lt({}, Mi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), bu = Nn(of), sf = [9, 13, 27, 32], cf = 229, Ls = gt && "CompositionEvent" in window, Ns = null;
    gt && "documentMode" in document && (Ns = document.documentMode);
    var Yd = gt && "TextEvent" in window && !Ns, ch = gt && (!Ls || Ns && Ns > 8 && Ns <= 11), Wd = 32, Qd = String.fromCharCode(Wd);
    function ff() {
      ke("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ke("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ke("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ke("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Us = !1;
    function fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Gd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ry(e, t) {
      return e === "keydown" && t.keyCode === cf;
    }
    function qd(e, t) {
      switch (e) {
        case "keyup":
          return sf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== cf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function df(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function As(e) {
      return e.locale === "ko";
    }
    var Vl = !1;
    function pf(e, t, a, i, u) {
      var s, f;
      if (Ls ? s = Gd(t) : Vl ? qd(t, i) && (s = "onCompositionEnd") : Ry(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ch && !As(i) && (!Vl && s === "onCompositionStart" ? Vl = nf(u) : s === "onCompositionEnd" && Vl && (f = rf()));
      var p = yh(a, s);
      if (p.length > 0) {
        var v = new Fl(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = df(i);
          y !== null && (v.data = y);
        }
      }
    }
    function dh(e, t) {
      switch (e) {
        case "compositionend":
          return df(t);
        case "keypress":
          var a = t.which;
          return a !== Wd ? null : (Us = !0, Qd);
        case "textInput":
          var i = t.data;
          return i === Qd && Us ? null : i;
        default:
          return null;
      }
    }
    function Ty(e, t) {
      if (Vl) {
        if (e === "compositionend" || !Ls && qd(e, t)) {
          var a = rf();
          return Os(), Vl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!fh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ch && !As(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vf(e, t, a, i, u) {
      var s;
      if (Yd ? s = dh(t, i) : s = Ty(t, i), !s)
        return null;
      var f = yh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new gy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function by(e, t, a, i, u, s, f) {
      pf(e, t, a, i, u), vf(e, t, a, i, u);
    }
    var zs = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function ph(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!zs[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function hf(e) {
      if (!gt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      ke("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      pc(i);
      var u = yh(t, "onChange");
      if (u.length > 0) {
        var s = new af("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, dc(e)), cd(m, t);
    }
    function m(e) {
      LS(e, 0);
    }
    function C(e) {
      var t = Cf(e);
      if (Wu(t))
        return e;
    }
    function w(e, t) {
      if (e === "change")
        return t;
    }
    var V = !1;
    gt && (V = hf("input") && (!document.documentMode || document.documentMode > 9));
    function fe(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", ue);
    }
    function pe() {
      l && (l.detachEvent("onpropertychange", ue), l = null, o = null);
    }
    function ue(e) {
      e.propertyName === "value" && C(o) && d(e);
    }
    function Fe(e, t, a) {
      e === "focusin" ? (pe(), fe(t, a)) : e === "focusout" && pe();
    }
    function We(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(o);
    }
    function Ke(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function $n(e, t) {
      if (e === "click")
        return C(t);
    }
    function N(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function O(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || st(e, "number", e.value);
    }
    function j(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (c(p) ? v = w : ph(p) ? V ? v = N : (v = We, y = Fe) : Ke(p) && (v = $n), v) {
        var E = v(t, a);
        if (E) {
          r(e, E, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && O(p);
    }
    function Ee() {
      et("onMouseEnter", ["mouseout", "mouseover"]), et("onMouseLeave", ["mouseout", "mouseover"]), et("onPointerEnter", ["pointerout", "pointerover"]), et("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ze(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !xv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Fs(y) || sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var E;
        if (u.window === u)
          E = u;
        else {
          var D = u.ownerDocument;
          D ? E = D.defaultView || D.parentWindow : E = window;
        }
        var _, P;
        if (v) {
          var $ = i.relatedTarget || i.toElement;
          if (_ = a, P = $ ? Fs($) : null, P !== null) {
            var Y = Da(P);
            (P !== Y || P.tag !== ne && P.tag !== Te) && (P = null);
          }
        } else
          _ = null, P = a;
        if (_ !== P) {
          var Ue = lf, ut = "onMouseLeave", rt = "onMouseEnter", Yt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ue = sh, ut = "onPointerLeave", rt = "onPointerEnter", Yt = "pointer");
          var Ht = _ == null ? E : Cf(_), U = P == null ? E : Cf(P), W = new Ue(ut, Yt + "leave", _, i, u);
          W.target = Ht, W.relatedTarget = U;
          var A = null, ve = Fs(u);
          if (ve === a) {
            var Be = new Ue(rt, Yt + "enter", P, i, u);
            Be.target = U, Be.relatedTarget = Ht, A = Be;
          }
          BR(e, W, A, _, P);
        }
      }
    }
    function pt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Qe = typeof Object.is == "function" ? Object.is : pt;
    function ht(e, t) {
      if (Qe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!St.call(t, s) || !Qe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ar(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Zt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function al(e, t) {
      for (var a = ar(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Wi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ar(Zt(a));
      }
    }
    function wy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return RR(e, u, s, f, p);
    }
    function RR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, E = e, D = null;
      e:
        for (; ; ) {
          for (var _ = null; E === t && (a === 0 || E.nodeType === Wi) && (f = s + a), E === i && (u === 0 || E.nodeType === Wi) && (p = s + u), E.nodeType === Wi && (s += E.nodeValue.length), (_ = E.firstChild) !== null; )
            D = E, E = _;
          for (; ; ) {
            if (E === e)
              break e;
            if (D === t && ++v === a && (f = s), D === i && ++y === u && (p = s), (_ = E.nextSibling) !== null)
              break;
            E = D, D = E.parentNode;
          }
          E = _;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function TR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = al(e, f), E = al(e, p);
        if (y && E) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === E.node && u.focusOffset === E.offset)
            return;
          var D = a.createRange();
          D.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(D), u.extend(E.node, E.offset)) : (D.setEnd(E.node, E.offset), u.addRange(D));
        }
      }
    }
    function ES(e) {
      return e && e.nodeType === Wi;
    }
    function CS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : ES(e) ? !1 : ES(t) ? CS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function bR(e) {
      return e && e.ownerDocument && CS(e.ownerDocument.documentElement, e);
    }
    function wR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function RS() {
      for (var e = window, t = wl(); t instanceof e.HTMLIFrameElement; ) {
        if (wR(t))
          e = t.contentWindow;
        else
          return t;
        t = wl(e.document);
      }
      return t;
    }
    function xy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function xR() {
      var e = RS();
      return {
        focusedElem: e,
        selectionRange: xy(e) ? kR(e) : null
      };
    }
    function _R(e) {
      var t = RS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && bR(a)) {
        i !== null && xy(a) && OR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === ca && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function kR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = wy(e), t || {
        start: 0,
        end: 0
      };
    }
    function OR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : TR(e, t);
    }
    var DR = gt && "documentMode" in document && document.documentMode <= 11;
    function MR() {
      ke("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, _y = null, Xd = null, ky = !1;
    function LR(e) {
      if ("selectionStart" in e && xy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function NR(e) {
      return e.window === e ? e.document : e.nodeType === hi ? e : e.ownerDocument;
    }
    function TS(e, t, a) {
      var i = NR(a);
      if (!(ky || mf == null || mf !== wl(i))) {
        var u = LR(mf);
        if (!Xd || !ht(Xd, u)) {
          Xd = u;
          var s = yh(_y, "onSelect");
          if (s.length > 0) {
            var f = new af("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function UR(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (ph(p) || p.contentEditable === "true") && (mf = p, _y = a, Xd = null);
          break;
        case "focusout":
          mf = null, _y = null, Xd = null;
          break;
        case "mousedown":
          ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ky = !1, TS(e, i, u);
          break;
        case "selectionchange":
          if (DR)
            break;
        case "keydown":
        case "keyup":
          TS(e, i, u);
      }
    }
    function vh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: vh("Animation", "AnimationEnd"),
      animationiteration: vh("Animation", "AnimationIteration"),
      animationstart: vh("Animation", "AnimationStart"),
      transitionend: vh("Transition", "TransitionEnd")
    }, Oy = {}, bS = {};
    gt && (bS = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function hh(e) {
      if (Oy[e])
        return Oy[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in bS)
          return Oy[e] = t[a];
      return e;
    }
    var wS = hh("animationend"), xS = hh("animationiteration"), _S = hh("animationstart"), kS = hh("transitionend"), OS = /* @__PURE__ */ new Map(), DS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Lo(e, t) {
      OS.set(e, t), ke(t, [e]);
    }
    function AR() {
      for (var e = 0; e < DS.length; e++) {
        var t = DS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Lo(a, "on" + i);
      }
      Lo(wS, "onAnimationEnd"), Lo(xS, "onAnimationIteration"), Lo(_S, "onAnimationStart"), Lo("dblclick", "onDoubleClick"), Lo("focusin", "onFocus"), Lo("focusout", "onBlur"), Lo(kS, "onTransitionEnd");
    }
    function zR(e, t, a, i, u, s, f) {
      var p = OS.get(t);
      if (p !== void 0) {
        var v = af, y = t;
        switch (t) {
          case "keypress":
            if (Cu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = uh;
            break;
          case "focusin":
            y = "focus", v = Ms;
            break;
          case "focusout":
            y = "blur", v = Ms;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ms;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = th;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Id;
            break;
          case wS:
          case xS:
          case _S:
            v = my;
            break;
          case kS:
            v = Hl;
            break;
          case "scroll":
            v = Hd;
            break;
          case "wheel":
            v = bu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = rh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = sh;
            break;
        }
        var E = (s & ru) !== 0;
        {
          var D = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = HR(a, p, i.type, E, D);
          if (_.length > 0) {
            var P = new v(p, y, null, i, u);
            e.push({
              event: P,
              listeners: _
            });
          }
        }
      }
    }
    AR(), Ee(), n(), MR(), ff();
    function jR(e, t, a, i, u, s, f) {
      zR(e, t, a, i, u, s);
      var p = (s & ry) === 0;
      p && (Ze(e, t, a, i, u), j(e, t, a, i, u), UR(e, t, a, i, u), by(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Dy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function MS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Xi(i, t, void 0, e), e.currentTarget = null;
    }
    function PR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          MS(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var E = t[y], D = E.instance, _ = E.currentTarget, P = E.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          MS(e, P, _), i = D;
        }
    }
    function LS(e, t) {
      for (var a = (t & ru) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        PR(s, f, a);
      }
      vd();
    }
    function FR(e, t, a, i, u) {
      var s = dc(a), f = [];
      jR(f, e, i, a, s, t), LS(f, t);
    }
    function Un(e, t) {
      Dy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = hb(t), u = $R(e);
      i.has(u) || (NS(t, e, is, a), i.add(u));
    }
    function My(e, t, a) {
      Dy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ru), NS(a, e, i, t);
    }
    var mh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[mh]) {
        e[mh] = !0, B.forEach(function(a) {
          a !== "selectionchange" && (Dy.has(a) || My(a, !1, e), My(a, !0, e));
        });
        var t = e.nodeType === hi ? e : e.ownerDocument;
        t !== null && (t[mh] || (t[mh] = !0, My("selectionchange", !1, t)));
      }
    }
    function NS(e, t, a, i, u) {
      var s = nr(e, t, a), f = void 0;
      cs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? tf(e, t, s, f) : nl(e, t, s) : f !== void 0 ? Fd(e, t, s, f) : ko(e, t, s);
    }
    function US(e, t) {
      return e === t || e.nodeType === Gn && e.parentNode === t;
    }
    function Ly(e, t, a, i, u) {
      var s = i;
      if (!(t & Gi) && !(t & is)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === ie || v === X) {
                var y = p.stateNode.containerInfo;
                if (US(y, f))
                  break;
                if (v === X)
                  for (var E = p.return; E !== null; ) {
                    var D = E.tag;
                    if (D === ie || D === X) {
                      var _ = E.stateNode.containerInfo;
                      if (US(_, f))
                        return;
                    }
                    E = E.return;
                  }
                for (; y !== null; ) {
                  var P = Fs(y);
                  if (P === null)
                    return;
                  var $ = P.tag;
                  if ($ === ne || $ === Te) {
                    p = s = P;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      cd(function() {
        return FR(e, t, a, s);
      });
    }
    function Zd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function HR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, E = null; y !== null; ) {
        var D = y, _ = D.stateNode, P = D.tag;
        if (P === ne && _ !== null && (E = _, p !== null)) {
          var $ = iu(y, p);
          $ != null && v.push(Zd(y, $, E));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function yh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ne && f !== null) {
          var v = f, y = iu(u, a);
          y != null && i.unshift(Zd(u, y, v));
          var E = iu(u, t);
          E != null && i.push(Zd(u, E, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ne);
      return e || null;
    }
    function VR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function AS(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, E = v.stateNode, D = v.tag;
        if (y !== null && y === i)
          break;
        if (D === ne && E !== null) {
          var _ = E;
          if (u) {
            var P = iu(p, s);
            P != null && f.unshift(Zd(p, P, _));
          } else if (!u) {
            var $ = iu(p, s);
            $ != null && f.push(Zd(p, $, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function BR(e, t, a, i, u) {
      var s = i && u ? VR(i, u) : null;
      i !== null && AS(e, t, i, s, !1), u !== null && a !== null && AS(e, a, u, s, !0);
    }
    function $R(e, t) {
      return e + "__bubble";
    }
    var ri = !1, ep = "dangerouslySetInnerHTML", gh = "suppressContentEditableWarning", No = "suppressHydrationWarning", zS = "autoFocus", js = "children", Ps = "style", Sh = "__html", Ny, Eh, tp, jS, Ch, PS, FS;
    Ny = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Eh = function(e, t) {
      fc(e, t), id(e, t), wv(e, t, {
        registrationNameDependencies: ee,
        possibleRegistrationNames: se
      });
    }, PS = gt && !document.documentMode, tp = function(e, t, a) {
      if (!ri) {
        var i = Rh(a), u = Rh(t);
        u !== i && (ri = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, jS = function(e) {
      if (!ri) {
        ri = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Ch = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, FS = function(e, t) {
      var a = e.namespaceURI === Yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var IR = /\r\n?/g, YR = /\u0000|\uFFFD/g;
    function Rh(e) {
      Sr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(IR, `
`).replace(YR, "");
    }
    function Th(e, t, a, i) {
      var u = Rh(t), s = Rh(e);
      if (s !== u && (i && (ri || (ri = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ae))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function HS(e) {
      return e.nodeType === hi ? e : e.ownerDocument;
    }
    function WR() {
    }
    function bh(e) {
      e.onclick = WR;
    }
    function QR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ps)
            f && Object.freeze(f), hv(t, f);
          else if (s === ep) {
            var p = f ? f[Sh] : void 0;
            p != null && av(t, p);
          } else if (s === js)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && uc(t, f);
            } else
              typeof f == "number" && uc(t, "" + f);
          else
            s === gh || s === No || s === zS || (ee.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ch(s, f), s === "onScroll" && Un("scroll", t)) : f != null && Wr(t, s, f, u));
        }
    }
    function GR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ps ? hv(e, f) : s === ep ? av(e, f) : s === js ? uc(e, f) : Wr(e, s, f, i);
      }
    }
    function qR(e, t, a, i) {
      var u, s = HS(a), f, p = i;
      if (p === Yi && (p = ic(e)), p === Yi) {
        if (u = Qi(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var E = f;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Yi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !St.call(Ny, e) && (Ny[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function XR(e, t) {
      return HS(t).createTextNode(e);
    }
    function KR(e, t, a, i) {
      var u = Qi(t, a);
      Eh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Un("cancel", e), Un("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Un("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            Un(Kd[f], e);
          s = a;
          break;
        case "source":
          Un("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Un("error", e), Un("load", e), s = a;
          break;
        case "details":
          Un("toggle", e), s = a;
          break;
        case "input":
          R(e, a), s = h(e, a), Un("invalid", e);
          break;
        case "option":
          cn(e, a), s = a;
          break;
        case "select":
          ts(e, a), s = es(e, a), Un("invalid", e);
          break;
        case "textarea":
          tv(e, a), s = Xf(e, a), Un("invalid", e);
          break;
        default:
          s = a;
      }
      switch (sc(t, s), QR(t, e, i, s, u), t) {
        case "input":
          Ba(e), ye(e, a, !1);
          break;
        case "textarea":
          Ba(e), rv(e);
          break;
        case "option":
          hn(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function JR(e, t, a, i, u) {
      Eh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = es(e, a), p = es(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      sc(t, p);
      var v, y, E = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ps) {
            var D = f[v];
            for (y in D)
              D.hasOwnProperty(y) && (E || (E = {}), E[y] = "");
          } else
            v === ep || v === js || v === gh || v === No || v === zS || (ee.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], P = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === P || _ == null && P == null))
          if (v === Ps)
            if (_ && Object.freeze(_), P) {
              for (y in P)
                P.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (E || (E = {}), E[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && P[y] !== _[y] && (E || (E = {}), E[y] = _[y]);
            } else
              E || (s || (s = []), s.push(v, E)), E = _;
          else if (v === ep) {
            var $ = _ ? _[Sh] : void 0, Y = P ? P[Sh] : void 0;
            $ != null && Y !== $ && (s = s || []).push(v, $);
          } else
            v === js ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === gh || v === No || (ee.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && Ch(v, _), v === "onScroll" && Un("scroll", e)), !s && P !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return E && (rs(E, p[Ps]), (s = s || []).push(Ps, E)), s;
    }
    function ZR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && F(e, u);
      var s = Qi(a, i), f = Qi(a, u);
      switch (GR(e, t, s, f), a) {
        case "input":
          I(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          Qm(e, u);
          break;
      }
    }
    function eT(e) {
      {
        var t = e.toLowerCase();
        return cc.hasOwnProperty(t) && cc[t] || null;
      }
    }
    function tT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Qi(t, a), Eh(t, a), t) {
        case "dialog":
          Un("cancel", e), Un("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Un("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            Un(Kd[y], e);
          break;
        case "source":
          Un("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Un("error", e), Un("load", e);
          break;
        case "details":
          Un("toggle", e);
          break;
        case "input":
          R(e, a), Un("invalid", e);
          break;
        case "option":
          cn(e, a);
          break;
        case "select":
          ts(e, a), Un("invalid", e);
          break;
        case "textarea":
          tv(e, a), Un("invalid", e);
          break;
      }
      sc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var E = e.attributes, D = 0; D < E.length; D++) {
          var _ = E[D].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(E[D].name);
          }
        }
      }
      var P = null;
      for (var $ in a)
        if (a.hasOwnProperty($)) {
          var Y = a[$];
          if ($ === js)
            typeof Y == "string" ? e.textContent !== Y && (a[No] !== !0 && Th(e.textContent, Y, s, f), P = [js, Y]) : typeof Y == "number" && e.textContent !== "" + Y && (a[No] !== !0 && Th(e.textContent, Y, s, f), P = [js, "" + Y]);
          else if (ee.hasOwnProperty($))
            Y != null && (typeof Y != "function" && Ch($, Y), $ === "onScroll" && Un("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Ue = void 0, ut = p && J ? null : Cr($);
            if (a[No] !== !0) {
              if (!($ === gh || $ === No || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === ep) {
                  var rt = e.innerHTML, Yt = Y ? Y[Sh] : void 0;
                  if (Yt != null) {
                    var Ht = FS(e, Yt);
                    Ht !== rt && tp($, rt, Ht);
                  }
                } else if ($ === Ps) {
                  if (v.delete($), PS) {
                    var U = ty(Y);
                    Ue = e.getAttribute("style"), U !== Ue && tp($, Ue, U);
                  }
                } else if (p && !J)
                  v.delete($.toLowerCase()), Ue = _a(e, $, Y), Y !== Ue && tp($, Ue, Y);
                else if (!Rn($, ut, p) && !rn($, Y, ut, p)) {
                  var W = !1;
                  if (ut !== null)
                    v.delete(ut.attributeName), Ue = Yr(e, $, Y, ut);
                  else {
                    var A = i;
                    if (A === Yi && (A = ic(t)), A === Yi)
                      v.delete($.toLowerCase());
                    else {
                      var ve = eT($);
                      ve !== null && ve !== $ && (W = !0, v.delete(ve)), v.delete($);
                    }
                    Ue = _a(e, $, Y);
                  }
                  var Be = J;
                  !Be && Y !== Ue && !W && tp($, Ue, Y);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[No] !== !0 && jS(v), t) {
        case "input":
          Ba(e), ye(e, a, !0);
          break;
        case "textarea":
          Ba(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return P;
    }
    function nT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Uy(e, t) {
      {
        if (ri)
          return;
        ri = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t) {
      {
        if (ri)
          return;
        ri = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t, a) {
      {
        if (ri)
          return;
        ri = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function jy(e, t) {
      {
        if (t === "" || ri)
          return;
        ri = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function rT(e, t, a) {
      switch (t) {
        case "input":
          dt(e, a);
          return;
        case "textarea":
          Kf(e, a);
          return;
        case "select":
          Gm(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var aT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], VS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], iT = VS.concat(["button"]), lT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], BS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = lt({}, e || BS), i = {
          tag: t
        };
        return VS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), iT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), aT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var uT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return lT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, oT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, $S = {};
      np = function(e, t, a) {
        a = a || BS;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = uT(e, u) ? null : i, f = s ? null : oT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!$S[y]) {
            $S[y] = !0;
            var E = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, v, D, _);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, v);
          }
        }
      };
    }
    var wh = "suppressHydrationWarning", xh = "$", _h = "/$", ap = "$?", ip = "$!", sT = "style", Py = null, Fy = null;
    function cT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case hi:
        case tu: {
          t = i === hi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Zf(null, "");
          break;
        }
        default: {
          var s = i === Gn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Zf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function fT(e, t, a) {
      {
        var i = e, u = Zf(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Vk(e) {
      return e;
    }
    function dT(e) {
      Py = xo(), Fy = xR();
      var t = null;
      return Ea(!1), t;
    }
    function pT(e) {
      _R(Fy), Ea(Py), Py = null, Fy = null;
    }
    function vT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = qR(e, t, a, s);
      return op(u, y), Qy(y, t), y;
    }
    function hT(e, t) {
      e.appendChild(t);
    }
    function mT(e, t, a, i, u) {
      switch (KR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function yT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return JR(e, t, a, i);
    }
    function Hy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function gT(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = XR(e, t);
      return op(i, s), s;
    }
    function ST() {
      var e = window.event;
      return e === void 0 ? ki : ef(e.type);
    }
    var Vy = typeof setTimeout == "function" ? setTimeout : void 0, ET = typeof clearTimeout == "function" ? clearTimeout : void 0, By = -1, IS = typeof Promise == "function" ? Promise : void 0, CT = typeof queueMicrotask == "function" ? queueMicrotask : typeof IS < "u" ? function(e) {
      return IS.resolve(null).then(e).catch(RT);
    } : Vy;
    function RT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function TT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function bT(e, t, a, i, u, s) {
      ZR(e, t, a, i, u), Qy(e, u);
    }
    function YS(e) {
      uc(e, "");
    }
    function wT(e, t, a) {
      e.nodeValue = a;
    }
    function xT(e, t) {
      e.appendChild(t);
    }
    function _T(e, t) {
      var a;
      e.nodeType === Gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function kT(e, t, a) {
      e.insertBefore(t, a);
    }
    function OT(e, t, a) {
      e.nodeType === Gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function DT(e, t) {
      e.removeChild(t);
    }
    function MT(e, t) {
      e.nodeType === Gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function $y(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Gn) {
          var s = u.data;
          if (s === _h)
            if (i === 0) {
              e.removeChild(u), Fn(t);
              return;
            } else
              i--;
          else
            (s === xh || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      Fn(t);
    }
    function LT(e, t) {
      e.nodeType === Gn ? $y(e.parentNode, t) : e.nodeType === ca && $y(e, t), Fn(e);
    }
    function NT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function UT(e) {
      e.nodeValue = "";
    }
    function AT(e, t) {
      e = e;
      var a = t[sT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = oc("display", i);
    }
    function zT(e, t) {
      e.nodeValue = t;
    }
    function jT(e) {
      e.nodeType === ca ? e.textContent = "" : e.nodeType === hi && e.documentElement && e.removeChild(e.documentElement);
    }
    function PT(e, t, a) {
      return e.nodeType !== ca || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function FT(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function HT(e) {
      return e.nodeType !== Gn ? null : e;
    }
    function WS(e) {
      return e.data === ap;
    }
    function Iy(e) {
      return e.data === ip;
    }
    function VT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function BT(e, t) {
      e._reactRetry = t;
    }
    function kh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ca || t === Wi)
          break;
        if (t === Gn) {
          var a = e.data;
          if (a === xh || a === ip || a === ap)
            break;
          if (a === _h)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return kh(e.nextSibling);
    }
    function $T(e) {
      return kh(e.firstChild);
    }
    function IT(e) {
      return kh(e.firstChild);
    }
    function YT(e) {
      return kh(e.nextSibling);
    }
    function WT(e, t, a, i, u, s, f) {
      op(s, e), Qy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & nt) !== Je;
      return tT(e, t, a, p, i, y, f);
    }
    function QT(e, t, a, i) {
      return op(a, e), a.mode & nt, nT(e, t);
    }
    function GT(e, t) {
      op(t, e);
    }
    function qT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Gn) {
          var i = t.data;
          if (i === _h) {
            if (a === 0)
              return lp(t);
            a--;
          } else
            (i === xh || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function QS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Gn) {
          var i = t.data;
          if (i === xh || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else
            i === _h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function XT(e) {
      Fn(e);
    }
    function KT(e) {
      Fn(e);
    }
    function JT(e) {
      return e !== "head" && e !== "body";
    }
    function ZT(e, t, a, i) {
      var u = !0;
      Th(t.nodeValue, a, i, u);
    }
    function eb(e, t, a, i, u, s) {
      if (t[wh] !== !0) {
        var f = !0;
        Th(i.nodeValue, u, s, f);
      }
    }
    function tb(e, t) {
      t.nodeType === ca ? Uy(e, t) : t.nodeType === Gn || Ay(e, t);
    }
    function nb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ca ? Uy(a, t) : t.nodeType === Gn || Ay(a, t));
      }
    }
    function rb(e, t, a, i, u) {
      (u || t[wh] !== !0) && (i.nodeType === ca ? Uy(a, i) : i.nodeType === Gn || Ay(a, i));
    }
    function ab(e, t, a) {
      zy(e, t);
    }
    function ib(e, t) {
      jy(e, t);
    }
    function lb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function ub(e, t) {
      {
        var a = e.parentNode;
        a !== null && jy(a, t);
      }
    }
    function ob(e, t, a, i, u, s) {
      (s || t[wh] !== !0) && zy(a, i);
    }
    function sb(e, t, a, i, u) {
      (u || t[wh] !== !0) && jy(a, i);
    }
    function cb(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function fb(e) {
      Jd(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Yy = "__reactProps$" + Sf, up = "__reactContainer$" + Sf, Wy = "__reactEvents$" + Sf, db = "__reactListeners$" + Sf, pb = "__reactHandles$" + Sf;
    function vb(e) {
      delete e[Ef], delete e[Yy], delete e[Wy], delete e[db], delete e[pb];
    }
    function op(e, t) {
      t[Ef] = e;
    }
    function Oh(e, t) {
      t[up] = e;
    }
    function GS(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function Fs(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = QS(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = QS(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Uo(e) {
      var t = e[Ef] || e[up];
      return t && (t.tag === ne || t.tag === Te || t.tag === q || t.tag === ie) ? t : null;
    }
    function Cf(e) {
      if (e.tag === ne || e.tag === Te)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[Yy] || null;
    }
    function Qy(e, t) {
      e[Yy] = t;
    }
    function hb(e) {
      var t = e[Wy];
      return t === void 0 && (t = e[Wy] = /* @__PURE__ */ new Set()), t;
    }
    var qS = {}, XS = b.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = Ti(e.type, e._source, t ? t.type : null);
        XS.setExtraStackFrame(a);
      } else
        XS.setExtraStackFrame(null);
    }
    function il(e, t, a, i, u) {
      {
        var s = Function.call.bind(St);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Mh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Mh(null)), p instanceof Error && !(p.message in qS) && (qS[p.message] = !0, Mh(u), g("Failed %s type: %s", a, p.message), Mh(null));
          }
      }
    }
    var Gy = [], Lh;
    Lh = [];
    var wu = -1;
    function Ao(e) {
      return {
        current: e
      };
    }
    function Ca(e, t) {
      if (wu < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Lh[wu] && g("Unexpected Fiber popped."), e.current = Gy[wu], Gy[wu] = null, Lh[wu] = null, wu--;
    }
    function Ra(e, t, a) {
      wu++, Gy[wu] = e.current, Lh[wu] = a, e.current = t;
    }
    var qy;
    qy = {};
    var Si = {};
    Object.freeze(Si);
    var xu = Ao(Si), Bl = Ao(!1), Xy = Si;
    function Rf(e, t, a) {
      return a && $l(t) ? Xy : xu.current;
    }
    function KS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Si;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Rt(e) || "Unknown";
          il(i, s, "context", p);
        }
        return u && KS(e, t, s), s;
      }
    }
    function Nh() {
      return Bl.current;
    }
    function $l(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Uh(e) {
      Ca(Bl, e), Ca(xu, e);
    }
    function Ky(e) {
      Ca(Bl, e), Ca(xu, e);
    }
    function JS(e, t, a) {
      {
        if (xu.current !== Si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Ra(xu, t, e), Ra(Bl, a, e);
      }
    }
    function ZS(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Rt(e) || "Unknown";
            qy[s] || (qy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Rt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Rt(e) || "Unknown";
          il(u, f, "child context", v);
        }
        return lt({}, a, f);
      }
    }
    function Ah(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Si;
        return Xy = xu.current, Ra(xu, a, e), Ra(Bl, Bl.current, e), !0;
      }
    }
    function eE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = ZS(e, t, Xy);
          i.__reactInternalMemoizedMergedChildContext = u, Ca(Bl, e), Ca(xu, e), Ra(xu, u, e), Ra(Bl, a, e);
        } else
          Ca(Bl, e), Ra(Bl, a, e);
      }
    }
    function mb(e) {
      {
        if (!Sd(e) || e.tag !== Z)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ie:
              return t.stateNode.context;
            case Z: {
              var a = t.type;
              if ($l(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var zo = 0, zh = 1, _u = null, Jy = !1, Zy = !1;
    function tE(e) {
      _u === null ? _u = [e] : _u.push(e);
    }
    function yb(e) {
      Jy = !0, tE(e);
    }
    function nE() {
      Jy && jo();
    }
    function jo() {
      if (!Zy && _u !== null) {
        Zy = !0;
        var e = 0, t = Ja();
        try {
          var a = !0, i = _u;
          for (Pn(Bn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          _u = null, Jy = !1;
        } catch (s) {
          throw _u !== null && (_u = _u.slice(e + 1)), Sc(Cc, jo), s;
        } finally {
          Pn(t), Zy = !1;
        }
      }
      return null;
    }
    var bf = [], wf = 0, jh = null, Ph = 0, Li = [], Ni = 0, Hs = null, ku = 1, Ou = "";
    function gb(e) {
      return Bs(), (e.flags & md) !== it;
    }
    function Sb(e) {
      return Bs(), Ph;
    }
    function Eb() {
      var e = Ou, t = ku, a = t & ~Cb(t);
      return a.toString(32) + e;
    }
    function Vs(e, t) {
      Bs(), bf[wf++] = Ph, bf[wf++] = jh, jh = e, Ph = t;
    }
    function rE(e, t, a) {
      Bs(), Li[Ni++] = ku, Li[Ni++] = Ou, Li[Ni++] = Hs, Hs = e;
      var i = ku, u = Ou, s = Fh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Fh(t) + s;
      if (v > 30) {
        var y = s - s % 5, E = (1 << y) - 1, D = (f & E).toString(32), _ = f >> y, P = s - y, $ = Fh(t) + P, Y = p << P, Ue = Y | _, ut = D + u;
        ku = 1 << $ | Ue, Ou = ut;
      } else {
        var rt = p << s, Yt = rt | f, Ht = u;
        ku = 1 << v | Yt, Ou = Ht;
      }
    }
    function eg(e) {
      Bs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Vs(e, a), rE(e, a, i);
      }
    }
    function Fh(e) {
      return 32 - oo(e);
    }
    function Cb(e) {
      return 1 << Fh(e) - 1;
    }
    function tg(e) {
      for (; e === jh; )
        jh = bf[--wf], bf[wf] = null, Ph = bf[--wf], bf[wf] = null;
      for (; e === Hs; )
        Hs = Li[--Ni], Li[Ni] = null, Ou = Li[--Ni], Li[Ni] = null, ku = Li[--Ni], Li[Ni] = null;
    }
    function Rb() {
      return Bs(), Hs !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function Tb(e, t) {
      Bs(), Li[Ni++] = ku, Li[Ni++] = Ou, Li[Ni++] = Hs, ku = t.id, Ou = t.overflow, Hs = e;
    }
    function Bs() {
      Jr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Kr = null, Ui = null, ll = !1, $s = !1, Po = null;
    function bb() {
      ll && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aE() {
      $s = !0;
    }
    function wb() {
      return $s;
    }
    function xb(e) {
      var t = e.stateNode.containerInfo;
      return Ui = IT(t), Kr = e, ll = !0, Po = null, $s = !1, !0;
    }
    function _b(e, t, a) {
      return Ui = YT(t), Kr = e, ll = !0, Po = null, $s = !1, a !== null && Tb(e, a), !0;
    }
    function iE(e, t) {
      switch (e.tag) {
        case ie: {
          tb(e.stateNode.containerInfo, t);
          break;
        }
        case ne: {
          var a = (e.mode & nt) !== Je;
          rb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case q: {
          var i = e.memoizedState;
          i.dehydrated !== null && nb(i.dehydrated, t);
          break;
        }
      }
    }
    function lE(e, t) {
      iE(e, t);
      var a = M_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ln) : i.push(a);
    }
    function ng(e, t) {
      {
        if ($s)
          return;
        switch (e.tag) {
          case ie: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ne:
                var i = t.type;
                t.pendingProps, ab(a, i);
                break;
              case Te:
                var u = t.pendingProps;
                ib(a, u);
                break;
            }
            break;
          }
          case ne: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ne: {
                var v = t.type, y = t.pendingProps, E = (e.mode & nt) !== Je;
                ob(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case Te: {
                var D = t.pendingProps, _ = (e.mode & nt) !== Je;
                sb(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case q: {
            var P = e.memoizedState, $ = P.dehydrated;
            if ($ !== null)
              switch (t.tag) {
                case ne:
                  var Y = t.type;
                  t.pendingProps, lb($, Y);
                  break;
                case Te:
                  var Ue = t.pendingProps;
                  ub($, Ue);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function uE(e, t) {
      t.flags = t.flags & ~Wa | Tn, ng(e, t);
    }
    function oE(e, t) {
      switch (e.tag) {
        case ne: {
          var a = e.type;
          e.pendingProps;
          var i = PT(t, a);
          return i !== null ? (e.stateNode = i, Kr = e, Ui = $T(i), !0) : !1;
        }
        case Te: {
          var u = e.pendingProps, s = FT(t, u);
          return s !== null ? (e.stateNode = s, Kr = e, Ui = null, !0) : !1;
        }
        case q: {
          var f = HT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Rb(),
              retryLane: Br
            };
            e.memoizedState = p;
            var v = L_(f);
            return v.return = e, e.child = v, Kr = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function rg(e) {
      return (e.mode & nt) !== Je && (e.flags & Et) === it;
    }
    function ag(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ig(e) {
      if (ll) {
        var t = Ui;
        if (!t) {
          rg(e) && (ng(Kr, e), ag()), uE(Kr, e), ll = !1, Kr = e;
          return;
        }
        var a = t;
        if (!oE(e, t)) {
          rg(e) && (ng(Kr, e), ag()), t = lp(a);
          var i = Kr;
          if (!t || !oE(e, t)) {
            uE(Kr, e), ll = !1, Kr = e;
            return;
          }
          lE(i, a);
        }
      }
    }
    function kb(e, t, a) {
      var i = e.stateNode, u = !$s, s = WT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Ob(e) {
      var t = e.stateNode, a = e.memoizedProps, i = QT(t, a, e);
      if (i) {
        var u = Kr;
        if (u !== null)
          switch (u.tag) {
            case ie: {
              var s = u.stateNode.containerInfo, f = (u.mode & nt) !== Je;
              ZT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ne: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, E = (u.mode & nt) !== Je;
              eb(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return i;
    }
    function Db(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      GT(a, e);
    }
    function Mb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return qT(a);
    }
    function sE(e) {
      for (var t = e.return; t !== null && t.tag !== ne && t.tag !== ie && t.tag !== q; )
        t = t.return;
      Kr = t;
    }
    function Hh(e) {
      if (e !== Kr)
        return !1;
      if (!ll)
        return sE(e), ll = !0, !1;
      if (e.tag !== ie && (e.tag !== ne || JT(e.type) && !Hy(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (rg(e))
            cE(e), ag();
          else
            for (; t; )
              lE(e, t), t = lp(t);
      }
      return sE(e), e.tag === q ? Ui = Mb(e) : Ui = Kr ? lp(e.stateNode) : null, !0;
    }
    function Lb() {
      return ll && Ui !== null;
    }
    function cE(e) {
      for (var t = Ui; t; )
        iE(e, t), t = lp(t);
    }
    function xf() {
      Kr = null, Ui = null, ll = !1, $s = !1;
    }
    function fE() {
      Po !== null && (aC(Po), Po = null);
    }
    function Jr() {
      return ll;
    }
    function lg(e) {
      Po === null ? Po = [e] : Po.push(e);
    }
    var Nb = b.ReactCurrentBatchConfig, Ub = null;
    function Ab() {
      return Nb.transition;
    }
    var ul = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var zb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & At && (t = a), a = a.return;
        return t;
      }, Is = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Ys = /* @__PURE__ */ new Set();
      ul.recordUnsafeLifecycleWarnings = function(e, t) {
        Ys.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & At && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & At && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & At && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, ul.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(_) {
          e.add(Rt(_) || "Component"), Ys.add(_.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(_) {
          t.add(Rt(_) || "Component"), Ys.add(_.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(_) {
          a.add(Rt(_) || "Component"), Ys.add(_.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(_) {
          i.add(Rt(_) || "Component"), Ys.add(_.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(_) {
          u.add(Rt(_) || "Component"), Ys.add(_.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(_) {
          s.add(Rt(_) || "Component"), Ys.add(_.type);
        }), hp = []), t.size > 0) {
          var f = Is(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Is(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Is(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Is(e);
          te(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var E = Is(a);
          te(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (u.size > 0) {
          var D = Is(u);
          te(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Vh = /* @__PURE__ */ new Map(), dE = /* @__PURE__ */ new Set();
      ul.recordLegacyContextWarning = function(e, t) {
        var a = zb(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!dE.has(e.type)) {
          var i = Vh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Vh.set(a, i)), i.push(e));
        }
      }, ul.flushLegacyContextWarning = function() {
        Vh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Rt(s) || "Component"), dE.add(s.type);
            });
            var u = Is(i);
            try {
              un(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              zn();
            }
          }
        });
      }, ul.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Vh = /* @__PURE__ */ new Map();
      };
    }
    var ug, og, sg, cg, fg, pE = function(e, t) {
    };
    ug = !1, og = !1, sg = {}, cg = {}, fg = {}, pE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Rt(t) || "Component";
        cg[a] || (cg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function jb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & At || Se) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== Z) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !jb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Rt(e) || "Component";
          sg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), sg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== Z)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var E = function(D) {
            var _ = v.refs;
            D === null ? delete _[y] : _[y] = D;
          };
          return E._stringRef = y, E;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Bh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = Rt(e) || "Component";
        if (fg[t])
          return;
        fg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function vE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function hE(e) {
      function t(U, W) {
        if (e) {
          var A = U.deletions;
          A === null ? (U.deletions = [W], U.flags |= ln) : A.push(W);
        }
      }
      function a(U, W) {
        if (!e)
          return null;
        for (var A = W; A !== null; )
          t(U, A), A = A.sibling;
        return null;
      }
      function i(U, W) {
        for (var A = /* @__PURE__ */ new Map(), ve = W; ve !== null; )
          ve.key !== null ? A.set(ve.key, ve) : A.set(ve.index, ve), ve = ve.sibling;
        return A;
      }
      function u(U, W) {
        var A = ec(U, W);
        return A.index = 0, A.sibling = null, A;
      }
      function s(U, W, A) {
        if (U.index = A, !e)
          return U.flags |= md, W;
        var ve = U.alternate;
        if (ve !== null) {
          var Be = ve.index;
          return Be < W ? (U.flags |= Tn, W) : Be;
        } else
          return U.flags |= Tn, W;
      }
      function f(U) {
        return e && U.alternate === null && (U.flags |= Tn), U;
      }
      function p(U, W, A, ve) {
        if (W === null || W.tag !== Te) {
          var Be = lS(A, U.mode, ve);
          return Be.return = U, Be;
        } else {
          var ze = u(W, A);
          return ze.return = U, ze;
        }
      }
      function v(U, W, A, ve) {
        var Be = A.type;
        if (Be === Pr)
          return E(U, W, A.props.children, ve, A.key);
        if (W !== null && (W.elementType === Be || // Keep this check inline so it only runs on the false path:
        EC(W, A) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Be == "object" && Be !== null && Be.$$typeof === S && vE(Be) === W.type)) {
          var ze = u(W, A.props);
          return ze.ref = mp(U, W, A), ze.return = U, ze._debugSource = A._source, ze._debugOwner = A._owner, ze;
        }
        var yt = iS(A, U.mode, ve);
        return yt.ref = mp(U, W, A), yt.return = U, yt;
      }
      function y(U, W, A, ve) {
        if (W === null || W.tag !== X || W.stateNode.containerInfo !== A.containerInfo || W.stateNode.implementation !== A.implementation) {
          var Be = uS(A, U.mode, ve);
          return Be.return = U, Be;
        } else {
          var ze = u(W, A.children || []);
          return ze.return = U, ze;
        }
      }
      function E(U, W, A, ve, Be) {
        if (W === null || W.tag !== xe) {
          var ze = qo(A, U.mode, ve, Be);
          return ze.return = U, ze;
        } else {
          var yt = u(W, A);
          return yt.return = U, yt;
        }
      }
      function D(U, W, A) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var ve = lS("" + W, U.mode, A);
          return ve.return = U, ve;
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case ua: {
              var Be = iS(W, U.mode, A);
              return Be.ref = mp(U, null, W), Be.return = U, Be;
            }
            case cr: {
              var ze = uS(W, U.mode, A);
              return ze.return = U, ze;
            }
            case S: {
              var yt = W._payload, bt = W._init;
              return D(U, bt(yt), A);
            }
          }
          if (Bt(W) || gn(W)) {
            var pn = qo(W, U.mode, A, null);
            return pn.return = U, pn;
          }
          Bh(U, W);
        }
        return typeof W == "function" && $h(U), null;
      }
      function _(U, W, A, ve) {
        var Be = W !== null ? W.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number")
          return Be !== null ? null : p(U, W, "" + A, ve);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case ua:
              return A.key === Be ? v(U, W, A, ve) : null;
            case cr:
              return A.key === Be ? y(U, W, A, ve) : null;
            case S: {
              var ze = A._payload, yt = A._init;
              return _(U, W, yt(ze), ve);
            }
          }
          if (Bt(A) || gn(A))
            return Be !== null ? null : E(U, W, A, ve, null);
          Bh(U, A);
        }
        return typeof A == "function" && $h(U), null;
      }
      function P(U, W, A, ve, Be) {
        if (typeof ve == "string" && ve !== "" || typeof ve == "number") {
          var ze = U.get(A) || null;
          return p(W, ze, "" + ve, Be);
        }
        if (typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case ua: {
              var yt = U.get(ve.key === null ? A : ve.key) || null;
              return v(W, yt, ve, Be);
            }
            case cr: {
              var bt = U.get(ve.key === null ? A : ve.key) || null;
              return y(W, bt, ve, Be);
            }
            case S:
              var pn = ve._payload, en = ve._init;
              return P(U, W, A, en(pn), Be);
          }
          if (Bt(ve) || gn(ve)) {
            var ir = U.get(A) || null;
            return E(W, ir, ve, Be, null);
          }
          Bh(W, ve);
        }
        return typeof ve == "function" && $h(W), null;
      }
      function $(U, W, A) {
        {
          if (typeof U != "object" || U === null)
            return W;
          switch (U.$$typeof) {
            case ua:
            case cr:
              pE(U, A);
              var ve = U.key;
              if (typeof ve != "string")
                break;
              if (W === null) {
                W = /* @__PURE__ */ new Set(), W.add(ve);
                break;
              }
              if (!W.has(ve)) {
                W.add(ve);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ve);
              break;
            case S:
              var Be = U._payload, ze = U._init;
              $(ze(Be), W, A);
              break;
          }
        }
        return W;
      }
      function Y(U, W, A, ve) {
        for (var Be = null, ze = 0; ze < A.length; ze++) {
          var yt = A[ze];
          Be = $(yt, Be, U);
        }
        for (var bt = null, pn = null, en = W, ir = 0, tn = 0, Kn = null; en !== null && tn < A.length; tn++) {
          en.index > tn ? (Kn = en, en = null) : Kn = en.sibling;
          var ba = _(U, en, A[tn], ve);
          if (ba === null) {
            en === null && (en = Kn);
            break;
          }
          e && en && ba.alternate === null && t(U, en), ir = s(ba, ir, tn), pn === null ? bt = ba : pn.sibling = ba, pn = ba, en = Kn;
        }
        if (tn === A.length) {
          if (a(U, en), Jr()) {
            var ia = tn;
            Vs(U, ia);
          }
          return bt;
        }
        if (en === null) {
          for (; tn < A.length; tn++) {
            var Ci = D(U, A[tn], ve);
            Ci !== null && (ir = s(Ci, ir, tn), pn === null ? bt = Ci : pn.sibling = Ci, pn = Ci);
          }
          if (Jr()) {
            var Pa = tn;
            Vs(U, Pa);
          }
          return bt;
        }
        for (var Fa = i(U, en); tn < A.length; tn++) {
          var wa = P(Fa, U, tn, A[tn], ve);
          wa !== null && (e && wa.alternate !== null && Fa.delete(wa.key === null ? tn : wa.key), ir = s(wa, ir, tn), pn === null ? bt = wa : pn.sibling = wa, pn = wa);
        }
        if (e && Fa.forEach(function(Yf) {
          return t(U, Yf);
        }), Jr()) {
          var zu = tn;
          Vs(U, zu);
        }
        return bt;
      }
      function Ue(U, W, A, ve) {
        var Be = gn(A);
        if (typeof Be != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          A[Symbol.toStringTag] === "Generator" && (og || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), og = !0), A.entries === Be && (ug || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ug = !0);
          var ze = Be.call(A);
          if (ze)
            for (var yt = null, bt = ze.next(); !bt.done; bt = ze.next()) {
              var pn = bt.value;
              yt = $(pn, yt, U);
            }
        }
        var en = Be.call(A);
        if (en == null)
          throw new Error("An iterable object provided no iterator.");
        for (var ir = null, tn = null, Kn = W, ba = 0, ia = 0, Ci = null, Pa = en.next(); Kn !== null && !Pa.done; ia++, Pa = en.next()) {
          Kn.index > ia ? (Ci = Kn, Kn = null) : Ci = Kn.sibling;
          var Fa = _(U, Kn, Pa.value, ve);
          if (Fa === null) {
            Kn === null && (Kn = Ci);
            break;
          }
          e && Kn && Fa.alternate === null && t(U, Kn), ba = s(Fa, ba, ia), tn === null ? ir = Fa : tn.sibling = Fa, tn = Fa, Kn = Ci;
        }
        if (Pa.done) {
          if (a(U, Kn), Jr()) {
            var wa = ia;
            Vs(U, wa);
          }
          return ir;
        }
        if (Kn === null) {
          for (; !Pa.done; ia++, Pa = en.next()) {
            var zu = D(U, Pa.value, ve);
            zu !== null && (ba = s(zu, ba, ia), tn === null ? ir = zu : tn.sibling = zu, tn = zu);
          }
          if (Jr()) {
            var Yf = ia;
            Vs(U, Yf);
          }
          return ir;
        }
        for (var Gp = i(U, Kn); !Pa.done; ia++, Pa = en.next()) {
          var Kl = P(Gp, U, ia, Pa.value, ve);
          Kl !== null && (e && Kl.alternate !== null && Gp.delete(Kl.key === null ? ia : Kl.key), ba = s(Kl, ba, ia), tn === null ? ir = Kl : tn.sibling = Kl, tn = Kl);
        }
        if (e && Gp.forEach(function(sk) {
          return t(U, sk);
        }), Jr()) {
          var ok = ia;
          Vs(U, ok);
        }
        return ir;
      }
      function ut(U, W, A, ve) {
        if (W !== null && W.tag === Te) {
          a(U, W.sibling);
          var Be = u(W, A);
          return Be.return = U, Be;
        }
        a(U, W);
        var ze = lS(A, U.mode, ve);
        return ze.return = U, ze;
      }
      function rt(U, W, A, ve) {
        for (var Be = A.key, ze = W; ze !== null; ) {
          if (ze.key === Be) {
            var yt = A.type;
            if (yt === Pr) {
              if (ze.tag === xe) {
                a(U, ze.sibling);
                var bt = u(ze, A.props.children);
                return bt.return = U, bt._debugSource = A._source, bt._debugOwner = A._owner, bt;
              }
            } else if (ze.elementType === yt || // Keep this check inline so it only runs on the false path:
            EC(ze, A) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof yt == "object" && yt !== null && yt.$$typeof === S && vE(yt) === ze.type) {
              a(U, ze.sibling);
              var pn = u(ze, A.props);
              return pn.ref = mp(U, ze, A), pn.return = U, pn._debugSource = A._source, pn._debugOwner = A._owner, pn;
            }
            a(U, ze);
            break;
          } else
            t(U, ze);
          ze = ze.sibling;
        }
        if (A.type === Pr) {
          var en = qo(A.props.children, U.mode, ve, A.key);
          return en.return = U, en;
        } else {
          var ir = iS(A, U.mode, ve);
          return ir.ref = mp(U, W, A), ir.return = U, ir;
        }
      }
      function Yt(U, W, A, ve) {
        for (var Be = A.key, ze = W; ze !== null; ) {
          if (ze.key === Be)
            if (ze.tag === X && ze.stateNode.containerInfo === A.containerInfo && ze.stateNode.implementation === A.implementation) {
              a(U, ze.sibling);
              var yt = u(ze, A.children || []);
              return yt.return = U, yt;
            } else {
              a(U, ze);
              break;
            }
          else
            t(U, ze);
          ze = ze.sibling;
        }
        var bt = uS(A, U.mode, ve);
        return bt.return = U, bt;
      }
      function Ht(U, W, A, ve) {
        var Be = typeof A == "object" && A !== null && A.type === Pr && A.key === null;
        if (Be && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case ua:
              return f(rt(U, W, A, ve));
            case cr:
              return f(Yt(U, W, A, ve));
            case S:
              var ze = A._payload, yt = A._init;
              return Ht(U, W, yt(ze), ve);
          }
          if (Bt(A))
            return Y(U, W, A, ve);
          if (gn(A))
            return Ue(U, W, A, ve);
          Bh(U, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? f(ut(U, W, "" + A, ve)) : (typeof A == "function" && $h(U), a(U, W));
      }
      return Ht;
    }
    var _f = hE(!0), mE = hE(!1);
    function Pb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ec(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ec(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Fb(e, t) {
      for (var a = e.child; a !== null; )
        x_(a, t), a = a.sibling;
    }
    var dg = Ao(null), pg;
    pg = {};
    var Ih = null, kf = null, vg = null, Yh = !1;
    function Wh() {
      Ih = null, kf = null, vg = null, Yh = !1;
    }
    function yE() {
      Yh = !0;
    }
    function gE() {
      Yh = !1;
    }
    function SE(e, t, a) {
      Ra(dg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== pg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = pg;
    }
    function hg(e, t) {
      var a = dg.current;
      Ca(dg, t), e._currentValue = a;
    }
    function mg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (yu(i.childLanes, t) ? u !== null && !yu(u.childLanes, t) && (u.childLanes = _t(u.childLanes, t)) : (i.childLanes = _t(i.childLanes, t), u !== null && (u.childLanes = _t(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hb(e, t, a) {
      Vb(e, t, a);
    }
    function Vb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Z) {
                var p = mo(a), v = Du(Cn, p);
                v.tag = Gh;
                var y = i.updateQueue;
                if (y !== null) {
                  var E = y.shared, D = E.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), E.pending = v;
                }
              }
              i.lanes = _t(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = _t(_.lanes, a)), mg(i.return, a, e), s.lanes = _t(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ct)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Lt) {
          var P = i.return;
          if (P === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          P.lanes = _t(P.lanes, a);
          var $ = P.alternate;
          $ !== null && ($.lanes = _t($.lanes, a)), mg(P, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var Y = u.sibling;
            if (Y !== null) {
              Y.return = u.return, u = Y;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Of(e, t) {
      Ih = e, kf = null, vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Sa(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function yr(e) {
      Yh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Ih === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Ih.dependencies = {
            lanes: re,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Ws = null;
    function yg(e) {
      Ws === null ? Ws = [e] : Ws.push(e);
    }
    function Bb() {
      if (Ws !== null) {
        for (var e = 0; e < Ws.length; e++) {
          var t = Ws[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ws = null;
      }
    }
    function EE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qh(e, i);
    }
    function $b(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ib(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qh(e, i);
    }
    function ai(e, t) {
      return Qh(e, t);
    }
    var Yb = Qh;
    function Qh(e, t) {
      e.lanes = _t(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = _t(a.lanes, t)), a === null && (e.flags & (Tn | Wa)) !== it && mC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = _t(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = _t(a.childLanes, t) : (u.flags & (Tn | Wa)) !== it && mC(e), i = u, u = u.return;
      if (i.tag === ie) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var CE = 0, RE = 1, Gh = 2, gg = 3, qh = !1, Sg, Xh;
    Sg = !1, Xh = null;
    function Eg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: re
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function TE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Du(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: CE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Fo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Xh === u && !Sg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Sg = !0), $x()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Yb(e, a);
      } else
        return Ib(e, u, t, a);
    }
    function Kh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Md(a)) {
          var s = u.lanes;
          s = Yc(s, e.pendingLanes);
          var f = _t(s, a);
          u.lanes = f, Ld(e, f);
        }
      }
    }
    function Cg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function Wb(e, t, a, i, u, s) {
      switch (a.tag) {
        case RE: {
          var f = a.payload;
          if (typeof f == "function") {
            yE();
            var p = f.call(s, i, u);
            {
              if (e.mode & At) {
                qn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  qn(!1);
                }
              }
              gE();
            }
            return p;
          }
          return f;
        }
        case gg:
          e.flags = e.flags & ~pr | Et;
        case CE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            yE(), y = v.call(s, i, u);
            {
              if (e.mode & At) {
                qn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  qn(!1);
                }
              }
              gE();
            }
          } else
            y = v;
          return y == null ? i : lt({}, i, y);
        }
        case Gh:
          return qh = !0, i;
      }
      return i;
    }
    function Jh(e, t, a, i) {
      var u = e.updateQueue;
      qh = !1, Xh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var E = e.alternate;
        if (E !== null) {
          var D = E.updateQueue, _ = D.lastBaseUpdate;
          _ !== f && (_ === null ? D.firstBaseUpdate = y : _.next = y, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var P = u.baseState, $ = re, Y = null, Ue = null, ut = null, rt = s;
        do {
          var Yt = rt.lane, Ht = rt.eventTime;
          if (yu(i, Yt)) {
            if (ut !== null) {
              var W = {
                eventTime: Ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Xn,
                tag: rt.tag,
                payload: rt.payload,
                callback: rt.callback,
                next: null
              };
              ut = ut.next = W;
            }
            P = Wb(e, u, rt, P, t, a);
            var A = rt.callback;
            if (A !== null && // If the update was already committed, we should not queue its
            // callback again.
            rt.lane !== Xn) {
              e.flags |= xi;
              var ve = u.effects;
              ve === null ? u.effects = [rt] : ve.push(rt);
            }
          } else {
            var U = {
              eventTime: Ht,
              lane: Yt,
              tag: rt.tag,
              payload: rt.payload,
              callback: rt.callback,
              next: null
            };
            ut === null ? (Ue = ut = U, Y = P) : ut = ut.next = U, $ = _t($, Yt);
          }
          if (rt = rt.next, rt === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Be = p, ze = Be.next;
            Be.next = null, rt = ze, u.lastBaseUpdate = Be, u.shared.pending = null;
          }
        } while (!0);
        ut === null && (Y = P), u.baseState = Y, u.firstBaseUpdate = Ue, u.lastBaseUpdate = ut;
        var yt = u.shared.interleaved;
        if (yt !== null) {
          var bt = yt;
          do
            $ = _t($, bt.lane), bt = bt.next;
          while (bt !== yt);
        } else
          s === null && (u.shared.lanes = re);
        $p($), e.lanes = $, e.memoizedState = P;
      }
      Xh = null;
    }
    function Qb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function bE() {
      qh = !1;
    }
    function Zh() {
      return qh;
    }
    function wE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Qb(f, a));
        }
    }
    var yp = {}, Ho = Ao(yp), gp = Ao(yp), em = Ao(yp);
    function tm(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function xE() {
      var e = tm(em.current);
      return e;
    }
    function Rg(e, t) {
      Ra(em, t, e), Ra(gp, e, e), Ra(Ho, yp, e);
      var a = cT(t);
      Ca(Ho, e), Ra(Ho, a, e);
    }
    function Df(e) {
      Ca(Ho, e), Ca(gp, e), Ca(em, e);
    }
    function Tg() {
      var e = tm(Ho.current);
      return e;
    }
    function _E(e) {
      tm(em.current);
      var t = tm(Ho.current), a = fT(t, e.type);
      t !== a && (Ra(gp, e, e), Ra(Ho, a, e));
    }
    function bg(e) {
      gp.current === e && (Ca(Ho, e), Ca(gp, e));
    }
    var Gb = 0, kE = 1, OE = 1, Sp = 2, ol = Ao(Gb);
    function wg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & kE;
    }
    function xg(e, t) {
      return e & kE | t;
    }
    function qb(e, t) {
      return e | t;
    }
    function Vo(e, t) {
      Ra(ol, t, e);
    }
    function Lf(e) {
      Ca(ol, e);
    }
    function Xb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function nm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === q) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || WS(i) || Iy(i))
              return t;
          }
        } else if (t.tag === wt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Et) !== it;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ii = (
      /*   */
      0
    ), _r = (
      /* */
      1
    ), Il = (
      /*  */
      2
    ), kr = (
      /*    */
      4
    ), Zr = (
      /*   */
      8
    ), _g = [];
    function kg() {
      for (var e = 0; e < _g.length; e++) {
        var t = _g[e];
        t._workInProgressVersionPrimary = null;
      }
      _g.length = 0;
    }
    function Kb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var He = b.ReactCurrentDispatcher, Ep = b.ReactCurrentBatchConfig, Og, Nf;
    Og = /* @__PURE__ */ new Set();
    var Qs = re, dn = null, Or = null, Dr = null, rm = !1, Cp = !1, Rp = 0, Jb = 0, Zb = 25, G = null, Ai = null, Bo = -1, Dg = !1;
    function sn() {
      {
        var e = G;
        Ai === null ? Ai = [e] : Ai.push(e);
      }
    }
    function Me() {
      {
        var e = G;
        Ai !== null && (Bo++, Ai[Bo] !== e && ew(e));
      }
    }
    function Uf(e) {
      e != null && !Bt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
    }
    function ew(e) {
      {
        var t = Rt(dn);
        if (!Og.has(t) && (Og.add(t), Ai !== null)) {
          for (var a = "", i = 30, u = 0; u <= Bo; u++) {
            for (var s = Ai[u], f = u === Bo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ta() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Mg(e, t) {
      if (Dg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", G), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, G, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Qe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Af(e, t, a, i, u, s) {
      Qs = s, dn = t, Ai = e !== null ? e._debugHookTypes : null, Bo = -1, Dg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = re, e !== null && e.memoizedState !== null ? He.current = KE : Ai !== null ? He.current = XE : He.current = qE;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, Rp = 0, p >= Zb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Dg = !1, Or = null, Dr = null, t.updateQueue = null, Bo = -1, He.current = JE, f = a(i, u);
        } while (Cp);
      }
      He.current = mm, t._debugHookTypes = Ai;
      var v = Or !== null && Or.next !== null;
      if (Qs = re, dn = null, Or = null, Dr = null, G = null, Ai = null, Bo = -1, e !== null && (e.flags & br) !== (t.flags & br) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & nt) !== Je && g("Internal React error: Expected static flag was missing. Please notify the React team."), rm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function zf() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function DE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Na) !== Je ? t.flags &= ~(ou | pa | _n | Ot) : t.flags &= ~(_n | Ot), e.lanes = bs(e.lanes, a);
    }
    function ME() {
      if (He.current = mm, rm) {
        for (var e = dn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rm = !1;
      }
      Qs = re, dn = null, Or = null, Dr = null, Ai = null, Bo = -1, G = null, IE = !1, Cp = !1, Rp = 0;
    }
    function Yl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Dr === null ? dn.memoizedState = Dr = e : Dr = Dr.next = e, Dr;
    }
    function zi() {
      var e;
      if (Or === null) {
        var t = dn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Or.next;
      var a;
      if (Dr === null ? a = dn.memoizedState : a = Dr.next, a !== null)
        Dr = a, a = Dr.next, Or = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Or = e;
        var i = {
          memoizedState: Or.memoizedState,
          baseState: Or.baseState,
          baseQueue: Or.baseQueue,
          queue: Or.queue,
          next: null
        };
        Dr === null ? dn.memoizedState = Dr = i : Dr = Dr.next = i;
      }
      return Dr;
    }
    function LE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Lg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ng(e, t, a) {
      var i = Yl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = aw.bind(null, dn, s);
      return [i.memoizedState, f];
    }
    function Ug(e, t, a) {
      var i = zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Or, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var E = f.next, D = s.baseState, _ = null, P = null, $ = null, Y = E;
        do {
          var Ue = Y.lane;
          if (yu(Qs, Ue)) {
            if ($ !== null) {
              var rt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Xn,
                action: Y.action,
                hasEagerState: Y.hasEagerState,
                eagerState: Y.eagerState,
                next: null
              };
              $ = $.next = rt;
            }
            if (Y.hasEagerState)
              D = Y.eagerState;
            else {
              var Yt = Y.action;
              D = e(D, Yt);
            }
          } else {
            var ut = {
              lane: Ue,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            };
            $ === null ? (P = $ = ut, _ = D) : $ = $.next = ut, dn.lanes = _t(dn.lanes, Ue), $p(Ue);
          }
          Y = Y.next;
        } while (Y !== null && Y !== E);
        $ === null ? _ = D : $.next = P, Qe(D, i.memoizedState) || Mp(), i.memoizedState = D, i.baseState = _, i.baseQueue = $, u.lastRenderedState = D;
      }
      var Ht = u.interleaved;
      if (Ht !== null) {
        var U = Ht;
        do {
          var W = U.lane;
          dn.lanes = _t(dn.lanes, W), $p(W), U = U.next;
        } while (U !== Ht);
      } else
        f === null && (u.lanes = re);
      var A = u.dispatch;
      return [i.memoizedState, A];
    }
    function Ag(e, t, a) {
      var i = zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var E = y.action;
          p = e(p, E), y = y.next;
        } while (y !== v);
        Qe(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Bk(e, t, a) {
    }
    function $k(e, t, a) {
    }
    function zg(e, t, a) {
      var i = dn, u = Yl(), s, f = Jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Nf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      } else {
        if (s = t(), !Nf) {
          var p = t();
          Qe(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
        }
        var v = Am();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(v, Qs) || NE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, om(AE.bind(null, i, y, e), [e]), i.flags |= _n, Tp(_r | Zr, UE.bind(null, i, y, s, t), void 0, null), s;
    }
    function am(e, t, a) {
      var i = dn, u = zi(), s = t();
      if (!Nf) {
        var f = t();
        Qe(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !Qe(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (wp(AE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Dr !== null && Dr.memoizedState.tag & _r) {
        i.flags |= _n, Tp(_r | Zr, UE.bind(null, i, y, s, t), void 0, null);
        var E = Am();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(E, Qs) || NE(i, t, s);
      }
      return s;
    }
    function NE(e, t, a) {
      e.flags |= ps;
      var i = {
        getSnapshot: t,
        value: a
      }, u = dn.updateQueue;
      if (u === null)
        u = LE(), dn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function UE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zE(t) && jE(e);
    }
    function AE(e, t, a) {
      var i = function() {
        zE(t) && jE(e);
      };
      return a(i);
    }
    function zE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Qe(a, i);
      } catch {
        return !0;
      }
    }
    function jE(e) {
      var t = ai(e, at);
      t !== null && Ur(t, e, at, Cn);
    }
    function im(e) {
      var t = Yl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: Lg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = iw.bind(null, dn, a);
      return [t.memoizedState, i];
    }
    function jg(e) {
      return Ug(Lg);
    }
    function Pg(e) {
      return Ag(Lg);
    }
    function Tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = dn.updateQueue;
      if (s === null)
        s = LE(), dn.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Fg(e) {
      var t = Yl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function lm(e) {
      var t = zi();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Yl(), s = i === void 0 ? null : i;
      dn.flags |= e, u.memoizedState = Tp(_r | t, a, void 0, s);
    }
    function um(e, t, a, i) {
      var u = zi(), s = i === void 0 ? null : i, f = void 0;
      if (Or !== null) {
        var p = Or.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Mg(s, v)) {
            u.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      dn.flags |= e, u.memoizedState = Tp(_r | t, a, f, s);
    }
    function om(e, t) {
      return (dn.mode & Na) !== Je ? bp(ou | _n | Ll, Zr, e, t) : bp(_n | Ll, Zr, e, t);
    }
    function wp(e, t) {
      return um(_n, Zr, e, t);
    }
    function Hg(e, t) {
      return bp(Ot, Il, e, t);
    }
    function sm(e, t) {
      return um(Ot, Il, e, t);
    }
    function Vg(e, t) {
      var a = Ot;
      return a |= da, (dn.mode & Na) !== Je && (a |= pa), bp(a, kr, e, t);
    }
    function cm(e, t) {
      return um(Ot, kr, e, t);
    }
    function PE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Bg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ot;
      return u |= da, (dn.mode & Na) !== Je && (u |= pa), bp(u, kr, PE.bind(null, t, e), i);
    }
    function fm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return um(Ot, kr, PE.bind(null, t, e), i);
    }
    function tw(e, t) {
    }
    var dm = tw;
    function $g(e, t) {
      var a = Yl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function pm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Mg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = Yl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function vm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Mg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Yg(e) {
      var t = Yl();
      return t.memoizedState = e, e;
    }
    function FE(e) {
      var t = zi(), a = Or, i = a.memoizedState;
      return VE(t, i, e);
    }
    function HE(e) {
      var t = zi();
      if (Or === null)
        return t.memoizedState = e, e;
      var a = Or.memoizedState;
      return VE(t, a, e);
    }
    function VE(e, t, a) {
      var i = !Iv(Qs);
      if (i) {
        if (!Qe(a, t)) {
          var u = Qv();
          dn.lanes = _t(dn.lanes, u), $p(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function nw(e, t, a) {
      var i = Ja();
      Pn(fy(i, tl)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && te("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Wg() {
      var e = im(!1), t = e[0], a = e[1], i = nw.bind(null, a), u = Yl();
      return u.memoizedState = i, [t, i];
    }
    function BE() {
      var e = jg(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    function $E() {
      var e = Pg(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    var IE = !1;
    function rw() {
      return IE;
    }
    function Qg() {
      var e = Yl(), t = Am(), a = t.identifierPrefix, i;
      if (Jr()) {
        var u = Eb();
        i = ":" + a + "R" + u;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Jb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function hm() {
      var e = zi(), t = e.memoizedState;
      return t;
    }
    function aw(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        WE(t, u);
      else {
        var s = EE(e, t, u, i);
        if (s !== null) {
          var f = ja();
          Ur(s, e, i, f), QE(s, t, i);
        }
      }
      GE(e, i);
    }
    function iw(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        WE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === re && (s === null || s.lanes === re)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = He.current, He.current = sl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Qe(y, v)) {
                $b(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              He.current = p;
            }
          }
        }
        var E = EE(e, t, u, i);
        if (E !== null) {
          var D = ja();
          Ur(E, e, i, D), QE(E, t, i);
        }
      }
      GE(e, i);
    }
    function YE(e) {
      var t = e.alternate;
      return e === dn || t !== null && t === dn;
    }
    function WE(e, t) {
      Cp = rm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function QE(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = Yc(i, e.pendingLanes);
        var u = _t(i, a);
        t.lanes = u, Ld(e, u);
      }
    }
    function GE(e, t, a) {
      ys(e, t);
    }
    var mm = {
      readContext: yr,
      useCallback: Ta,
      useContext: Ta,
      useEffect: Ta,
      useImperativeHandle: Ta,
      useInsertionEffect: Ta,
      useLayoutEffect: Ta,
      useMemo: Ta,
      useReducer: Ta,
      useRef: Ta,
      useState: Ta,
      useDebugValue: Ta,
      useDeferredValue: Ta,
      useTransition: Ta,
      useMutableSource: Ta,
      useSyncExternalStore: Ta,
      useId: Ta,
      unstable_isNewReconciler: ce
    }, qE = null, XE = null, KE = null, JE = null, Wl = null, sl = null, ym = null;
    {
      var Gg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Tt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      qE = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", sn(), Uf(t), $g(e, t);
        },
        useContext: function(e) {
          return G = "useContext", sn(), yr(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", sn(), Uf(t), om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", sn(), Uf(a), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", sn(), Uf(t), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", sn(), Uf(t), Vg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", sn(), Uf(t);
          var a = He.current;
          He.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", sn();
          var i = He.current;
          He.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", sn(), Fg(e);
        },
        useState: function(e) {
          G = "useState", sn();
          var t = He.current;
          He.current = Wl;
          try {
            return im(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", sn(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", sn(), Yg(e);
        },
        useTransition: function() {
          return G = "useTransition", sn(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", sn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", sn(), zg(e, t, a);
        },
        useId: function() {
          return G = "useId", sn(), Qg();
        },
        unstable_isNewReconciler: ce
      }, XE = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Me(), $g(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Me(), yr(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Me(), om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Me(), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Me(), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Me(), Vg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Me();
          var a = He.current;
          He.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Me();
          var i = He.current;
          He.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", Me(), Fg(e);
        },
        useState: function(e) {
          G = "useState", Me();
          var t = He.current;
          He.current = Wl;
          try {
            return im(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Me(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Me(), Yg(e);
        },
        useTransition: function() {
          return G = "useTransition", Me(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Me(), zg(e, t, a);
        },
        useId: function() {
          return G = "useId", Me(), Qg();
        },
        unstable_isNewReconciler: ce
      }, KE = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Me(), pm(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Me(), yr(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Me(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Me(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Me(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Me(), cm(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Me();
          var a = He.current;
          He.current = sl;
          try {
            return vm(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Me();
          var i = He.current;
          He.current = sl;
          try {
            return Ug(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", Me(), lm();
        },
        useState: function(e) {
          G = "useState", Me();
          var t = He.current;
          He.current = sl;
          try {
            return jg(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Me(), dm();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Me(), FE(e);
        },
        useTransition: function() {
          return G = "useTransition", Me(), BE();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Me(), am(e, t);
        },
        useId: function() {
          return G = "useId", Me(), hm();
        },
        unstable_isNewReconciler: ce
      }, JE = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Me(), pm(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Me(), yr(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Me(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Me(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Me(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Me(), cm(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Me();
          var a = He.current;
          He.current = ym;
          try {
            return vm(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Me();
          var i = He.current;
          He.current = ym;
          try {
            return Ag(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", Me(), lm();
        },
        useState: function(e) {
          G = "useState", Me();
          var t = He.current;
          He.current = ym;
          try {
            return Pg(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Me(), dm();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Me(), HE(e);
        },
        useTransition: function() {
          return G = "useTransition", Me(), $E();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Me(), am(e, t);
        },
        useId: function() {
          return G = "useId", Me(), hm();
        },
        unstable_isNewReconciler: ce
      }, Wl = {
        readContext: function(e) {
          return Gg(), yr(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Tt(), sn(), $g(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Tt(), sn(), yr(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Tt(), sn(), om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Tt(), sn(), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Tt(), sn(), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Tt(), sn(), Vg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Tt(), sn();
          var a = He.current;
          He.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Tt(), sn();
          var i = He.current;
          He.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", Tt(), sn(), Fg(e);
        },
        useState: function(e) {
          G = "useState", Tt(), sn();
          var t = He.current;
          He.current = Wl;
          try {
            return im(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Tt(), sn(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Tt(), sn(), Yg(e);
        },
        useTransition: function() {
          return G = "useTransition", Tt(), sn(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Tt(), sn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Tt(), sn(), zg(e, t, a);
        },
        useId: function() {
          return G = "useId", Tt(), sn(), Qg();
        },
        unstable_isNewReconciler: ce
      }, sl = {
        readContext: function(e) {
          return Gg(), yr(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Tt(), Me(), pm(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Tt(), Me(), yr(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Tt(), Me(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Tt(), Me(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Tt(), Me(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Tt(), Me(), cm(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Tt(), Me();
          var a = He.current;
          He.current = sl;
          try {
            return vm(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Tt(), Me();
          var i = He.current;
          He.current = sl;
          try {
            return Ug(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", Tt(), Me(), lm();
        },
        useState: function(e) {
          G = "useState", Tt(), Me();
          var t = He.current;
          He.current = sl;
          try {
            return jg(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Tt(), Me(), dm();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Tt(), Me(), FE(e);
        },
        useTransition: function() {
          return G = "useTransition", Tt(), Me(), BE();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Tt(), Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Tt(), Me(), am(e, t);
        },
        useId: function() {
          return G = "useId", Tt(), Me(), hm();
        },
        unstable_isNewReconciler: ce
      }, ym = {
        readContext: function(e) {
          return Gg(), yr(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", Tt(), Me(), pm(e, t);
        },
        useContext: function(e) {
          return G = "useContext", Tt(), Me(), yr(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", Tt(), Me(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", Tt(), Me(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", Tt(), Me(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", Tt(), Me(), cm(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", Tt(), Me();
          var a = He.current;
          He.current = sl;
          try {
            return vm(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", Tt(), Me();
          var i = He.current;
          He.current = sl;
          try {
            return Ag(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", Tt(), Me(), lm();
        },
        useState: function(e) {
          G = "useState", Tt(), Me();
          var t = He.current;
          He.current = sl;
          try {
            return Pg(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", Tt(), Me(), dm();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", Tt(), Me(), HE(e);
        },
        useTransition: function() {
          return G = "useTransition", Tt(), Me(), $E();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", Tt(), Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", Tt(), Me(), am(e, t);
        },
        useId: function() {
          return G = "useId", Tt(), Me(), hm();
        },
        unstable_isNewReconciler: ce
      };
    }
    var $o = H.unstable_now, ZE = 0, gm = -1, xp = -1, Sm = -1, qg = !1, Em = !1;
    function e1() {
      return qg;
    }
    function lw() {
      Em = !0;
    }
    function uw() {
      qg = !1, Em = !1;
    }
    function ow() {
      qg = Em, Em = !1;
    }
    function t1() {
      return ZE;
    }
    function n1() {
      ZE = $o();
    }
    function Xg(e) {
      xp = $o(), e.actualStartTime < 0 && (e.actualStartTime = $o());
    }
    function r1(e) {
      xp = -1;
    }
    function Cm(e, t) {
      if (xp >= 0) {
        var a = $o() - xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), xp = -1;
      }
    }
    function Ql(e) {
      if (gm >= 0) {
        var t = $o() - gm;
        gm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case me:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Kg(e) {
      if (Sm >= 0) {
        var t = $o() - Sm;
        Sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case me:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Gl() {
      gm = $o();
    }
    function Jg() {
      Sm = $o();
    }
    function Zg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cl(e, t) {
      if (e && e.defaultProps) {
        var a = lt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var e0 = {}, t0, n0, r0, a0, i0, a1, Rm, l0, u0, o0, _p;
    {
      t0 = /* @__PURE__ */ new Set(), n0 = /* @__PURE__ */ new Set(), r0 = /* @__PURE__ */ new Set(), a0 = /* @__PURE__ */ new Set(), l0 = /* @__PURE__ */ new Set(), i0 = /* @__PURE__ */ new Set(), u0 = /* @__PURE__ */ new Set(), o0 = /* @__PURE__ */ new Set(), _p = /* @__PURE__ */ new Set();
      var i1 = /* @__PURE__ */ new Set();
      Rm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          i1.has(a) || (i1.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, a1 = function(e, t) {
        if (t === void 0) {
          var a = Vt(e) || "Component";
          i0.has(a) || (i0.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(e0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(e0);
    }
    function s0(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & At) {
          qn(!0);
          try {
            s = a(i, u);
          } finally {
            qn(!1);
          }
        }
        a1(t, s);
      }
      var f = s == null ? u : lt({}, u, s);
      if (e.memoizedState = f, e.lanes === re) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var c0 = {
      isMounted: Ma,
      enqueueSetState: function(e, t, a) {
        var i = Ia(e), u = ja(), s = Qo(i), f = Du(u, s);
        f.payload = t, a != null && (Rm(a, "setState"), f.callback = a);
        var p = Fo(i, f, s);
        p !== null && (Ur(p, i, s, u), Kh(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ia(e), u = ja(), s = Qo(i), f = Du(u, s);
        f.tag = RE, f.payload = t, a != null && (Rm(a, "replaceState"), f.callback = a);
        var p = Fo(i, f, s);
        p !== null && (Ur(p, i, s, u), Kh(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ia(e), i = ja(), u = Qo(a), s = Du(i, u);
        s.tag = Gh, t != null && (Rm(t, "forceUpdate"), s.callback = t);
        var f = Fo(a, s, u);
        f !== null && (Ur(f, a, u, i), Kh(f, a, u)), kc(a, u);
      }
    };
    function l1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & At) {
            qn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              qn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Vt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ht(a, i) || !ht(u, s) : !0;
    }
    function sw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Vt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !_p.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & At) === Je && (_p.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !_p.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & At) === Je && (_p.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !u0.has(t) && (u0.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Vt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !r0.has(t) && (r0.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Vt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Bt(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function u1(e, t) {
      t.updater = c0, e.stateNode = t, to(t, e), t._reactInternalInstance = e0;
    }
    function o1(e, t, a) {
      var i = !1, u = Si, s = Si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === le && f._context === void 0
        );
        if (!p && !o0.has(t)) {
          o0.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === T ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Vt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = yr(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : Si;
      }
      var E = new t(a, s);
      if (e.mode & At) {
        qn(!0);
        try {
          E = new t(a, s);
        } finally {
          qn(!1);
        }
      }
      var D = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      u1(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var _ = Vt(t) || "Component";
          n0.has(_) || (n0.add(_), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, E.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var P = null, $ = null, Y = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? P = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (P = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? $ = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && ($ = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), P !== null || $ !== null || Y !== null) {
            var Ue = Vt(t) || "Component", ut = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            a0.has(Ue) || (a0.add(Ue), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ue, ut, P !== null ? `
  ` + P : "", $ !== null ? `
  ` + $ : "", Y !== null ? `
  ` + Y : ""));
          }
        }
      }
      return i && KS(e, u, s), E;
    }
    function cw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Rt(e) || "Component"), c0.enqueueReplaceState(t, t.state, null));
    }
    function s1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Rt(e) || "Component";
          t0.has(s) || (t0.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        c0.enqueueReplaceState(t, t.state, null);
      }
    }
    function f0(e, t, a, i) {
      sw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Eg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = yr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = Vt(t) || "Component";
          l0.has(p) || (l0.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & At && ul.recordLegacyContextWarning(e, u), ul.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (s0(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (cw(e, u), Jh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ot;
        y |= da, (e.mode & Na) !== Je && (y |= pa), e.flags |= y;
      }
    }
    function fw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Si;
      if (typeof p == "object" && p !== null)
        v = yr(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var E = t.getDerivedStateFromProps, D = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && s1(e, u, a, v), bE();
      var _ = e.memoizedState, P = u.state = _;
      if (Jh(e, a, u, i), P = e.memoizedState, s === a && _ === P && !Nh() && !Zh()) {
        if (typeof u.componentDidMount == "function") {
          var $ = Ot;
          $ |= da, (e.mode & Na) !== Je && ($ |= pa), e.flags |= $;
        }
        return !1;
      }
      typeof E == "function" && (s0(e, t, E, a), P = e.memoizedState);
      var Y = Zh() || l1(e, t, s, a, _, P, v);
      if (Y) {
        if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Ue = Ot;
          Ue |= da, (e.mode & Na) !== Je && (Ue |= pa), e.flags |= Ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ut = Ot;
          ut |= da, (e.mode & Na) !== Je && (ut |= pa), e.flags |= ut;
        }
        e.memoizedProps = a, e.memoizedState = P;
      }
      return u.props = a, u.state = P, u.context = v, Y;
    }
    function dw(e, t, a, i, u) {
      var s = t.stateNode;
      TE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : cl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, E = a.contextType, D = Si;
      if (typeof E == "object" && E !== null)
        D = yr(E);
      else {
        var _ = Rf(t, a, !0);
        D = Tf(t, _);
      }
      var P = a.getDerivedStateFromProps, $ = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !$ && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== D) && s1(t, s, i, D), bE();
      var Y = t.memoizedState, Ue = s.state = Y;
      if (Jh(t, i, s, u), Ue = t.memoizedState, f === v && Y === Ue && !Nh() && !Zh() && !Pe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Ot), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Ya), !1;
      typeof P == "function" && (s0(t, a, P, i), Ue = t.memoizedState);
      var ut = Zh() || l1(t, a, p, i, Y, Ue, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Pe;
      return ut ? (!$ && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ue, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ue, D)), typeof s.componentDidUpdate == "function" && (t.flags |= Ot), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ya)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Ot), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Ya), t.memoizedProps = i, t.memoizedState = Ue), s.props = i, s.state = Ue, s.context = D, ut;
    }
    function Gs(e, t) {
      return {
        value: e,
        source: t,
        stack: Bu(t),
        digest: null
      };
    }
    function d0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function pw(e, t) {
      return !0;
    }
    function p0(e, t) {
      try {
        var a = pw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Z)
            return;
          console.error(i);
        }
        var p = u ? Rt(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ie)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = Rt(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var D = v + `
` + f + `

` + ("" + y);
        console.error(D);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var vw = typeof WeakMap == "function" ? WeakMap : Map;
    function c1(e, t, a) {
      var i = Du(Cn, a);
      i.tag = gg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        l_(u), p0(e, t);
      }, i;
    }
    function v0(e, t, a) {
      var i = Du(Cn, a);
      i.tag = gg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          CC(e), p0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        CC(e), p0(e, t), typeof u != "function" && a_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Sa(e.lanes, at) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Rt(e) || "Unknown"));
      }), i;
    }
    function f1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new vw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = u_.bind(null, e, t, a);
        La && Ip(e, a), t.then(s, s);
      }
    }
    function hw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function mw(e, t) {
      var a = e.tag;
      if ((e.mode & nt) === Je && (a === Q || a === Ne || a === ge)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function d1(e) {
      var t = e;
      do {
        if (t.tag === q && Xb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function p1(e, t, a, i, u) {
      if ((e.mode & nt) === Je) {
        if (e === t)
          e.flags |= pr;
        else {
          if (e.flags |= Et, a.flags |= vs, a.flags &= ~(mc | Oa), a.tag === Z) {
            var s = a.alternate;
            if (s === null)
              a.tag = jt;
            else {
              var f = Du(Cn, at);
              f.tag = Gh, Fo(a, f, at);
            }
          }
          a.lanes = _t(a.lanes, at);
        }
        return e;
      }
      return e.flags |= pr, e.lanes = u, e;
    }
    function yw(e, t, a, i, u) {
      if (a.flags |= Oa, La && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        mw(a), Jr() && a.mode & nt && aE();
        var f = d1(t);
        if (f !== null) {
          f.flags &= ~jn, p1(f, t, a, e, u), f.mode & nt && f1(e, s, u), hw(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            f1(e, s, u), Q0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Jr() && a.mode & nt) {
        aE();
        var v = d1(t);
        if (v !== null) {
          (v.flags & pr) === it && (v.flags |= jn), p1(v, t, a, e, u), lg(Gs(i, a));
          return;
        }
      }
      i = Gs(i, a), Xx(i);
      var y = t;
      do {
        switch (y.tag) {
          case ie: {
            var E = i;
            y.flags |= pr;
            var D = mo(u);
            y.lanes = _t(y.lanes, D);
            var _ = c1(y, E, D);
            Cg(y, _);
            return;
          }
          case Z:
            var P = i, $ = y.type, Y = y.stateNode;
            if ((y.flags & Et) === it && (typeof $.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && !dC(Y))) {
              y.flags |= pr;
              var Ue = mo(u);
              y.lanes = _t(y.lanes, Ue);
              var ut = v0(y, P, Ue);
              Cg(y, ut);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function gw() {
      return null;
    }
    var kp = b.ReactCurrentOwner, fl = !1, h0, Op, m0, y0, g0, qs, S0, Tm, Dp;
    h0 = {}, Op = {}, m0 = {}, y0 = {}, g0 = {}, qs = !1, S0 = {}, Tm = {}, Dp = {};
    function Aa(e, t, a, i) {
      e === null ? t.child = mE(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function Sw(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function v1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Of(t, u), io(t);
      {
        if (kp.current = t, sa(!0), v = Af(e, t, f, i, p, u), y = zf(), t.mode & At) {
          qn(!0);
          try {
            v = Af(e, t, f, i, p, u), y = zf();
          } finally {
            qn(!1);
          }
        }
        sa(!1);
      }
      return ma(), e !== null && !fl ? (DE(e, t, u), Mu(e, t, u)) : (Jr() && y && eg(t), t.flags |= Dl, Aa(e, t, v, u), t.child);
    }
    function h1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (b_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = ge, t.type = f, R0(t, s), m1(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && il(
            p,
            i,
            // Resolved props
            "prop",
            Vt(s)
          ), a.defaultProps !== void 0) {
            var v = Vt(s) || "Unknown";
            Dp[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Dp[v] = !0);
          }
        }
        var y = aS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var E = a.type, D = E.propTypes;
        D && il(
          D,
          i,
          // Resolved props
          "prop",
          Vt(E)
        );
      }
      var _ = e.child, P = k0(e, u);
      if (!P) {
        var $ = _.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : ht, Y($, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Dl;
      var Ue = ec(_, i);
      return Ue.ref = t.ref, Ue.return = t, t.child = Ue, Ue;
    }
    function m1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === S) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && il(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Vt(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (ht(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = E, k0(e, u))
            (e.flags & vs) !== it && (fl = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, u);
      }
      return E0(e, t, a, i, u);
    }
    function y1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || be)
        if ((t.mode & nt) === Je) {
          var f = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (Sa(a, Br)) {
          var D = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var _ = s !== null ? s.baseLanes : a;
          zm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = _t(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Br;
          var E = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, zm(t, v), null;
        }
      else {
        var P;
        s !== null ? (P = _t(s.baseLanes, a), t.memoizedState = null) : P = a, zm(t, P);
      }
      return Aa(e, t, u, a), t.child;
    }
    function Ew(e, t, a) {
      var i = t.pendingProps;
      return Aa(e, t, i, a), t.child;
    }
    function Cw(e, t, a) {
      var i = t.pendingProps.children;
      return Aa(e, t, i, a), t.child;
    }
    function Rw(e, t, a) {
      {
        t.flags |= Ot;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Aa(e, t, s, a), t.child;
    }
    function g1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= fa, t.flags |= yd);
    }
    function E0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Of(t, u), io(t);
      {
        if (kp.current = t, sa(!0), v = Af(e, t, a, i, f, u), y = zf(), t.mode & At) {
          qn(!0);
          try {
            v = Af(e, t, a, i, f, u), y = zf();
          } finally {
            qn(!1);
          }
        }
        sa(!1);
      }
      return ma(), e !== null && !fl ? (DE(e, t, u), Mu(e, t, u)) : (Jr() && y && eg(t), t.flags |= Dl, Aa(e, t, v, u), t.child);
    }
    function S1(e, t, a, i, u) {
      {
        switch (F_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Et, t.flags |= pr;
            var y = new Error("Simulated error coming from DevTools"), E = mo(u);
            t.lanes = _t(t.lanes, E);
            var D = v0(t, Gs(y, t), E);
            Cg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && il(
            _,
            i,
            // Resolved props
            "prop",
            Vt(a)
          );
        }
      }
      var P;
      $l(a) ? (P = !0, Ah(t)) : P = !1, Of(t, u);
      var $ = t.stateNode, Y;
      $ === null ? (wm(e, t), o1(t, a, i), f0(t, a, i, u), Y = !0) : e === null ? Y = fw(t, a, i, u) : Y = dw(e, t, a, i, u);
      var Ue = C0(e, t, a, Y, P, u);
      {
        var ut = t.stateNode;
        Y && ut.props !== i && (qs || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Rt(t) || "a component"), qs = !0);
      }
      return Ue;
    }
    function C0(e, t, a, i, u, s) {
      g1(e, t);
      var f = (t.flags & Et) !== it;
      if (!i && !f)
        return u && eE(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, r1();
      else {
        io(t);
        {
          if (sa(!0), v = p.render(), t.mode & At) {
            qn(!0);
            try {
              p.render();
            } finally {
              qn(!1);
            }
          }
          sa(!1);
        }
        ma();
      }
      return t.flags |= Dl, e !== null && f ? Sw(e, t, v, s) : Aa(e, t, v, s), t.memoizedState = p.state, u && eE(t, a, !0), t.child;
    }
    function E1(e) {
      var t = e.stateNode;
      t.pendingContext ? JS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && JS(e, t.context, !1), Rg(e, t.containerInfo);
    }
    function Tw(e, t, a) {
      if (E1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      TE(e, t), Jh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & jn) {
          var E = Gs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return C1(e, t, p, a, E);
        } else if (p !== s) {
          var D = Gs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return C1(e, t, p, a, D);
        } else {
          xb(t);
          var _ = mE(t, null, p, a);
          t.child = _;
          for (var P = _; P; )
            P.flags = P.flags & ~Tn | Wa, P = P.sibling;
        }
      } else {
        if (xf(), p === s)
          return Mu(e, t, a);
        Aa(e, t, p, a);
      }
      return t.child;
    }
    function C1(e, t, a, i, u) {
      return xf(), lg(u), t.flags |= jn, Aa(e, t, a, i), t.child;
    }
    function bw(e, t, a) {
      _E(t), e === null && ig(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Hy(i, u);
      return p ? f = null : s !== null && Hy(i, s) && (t.flags |= on), g1(e, t), Aa(e, t, f, a), t.child;
    }
    function ww(e, t) {
      return e === null && ig(t), null;
    }
    function xw(e, t, a, i) {
      wm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = w_(v), E = cl(v, u), D;
      switch (y) {
        case Q:
          return R0(t, v), t.type = v = If(v), D = E0(null, t, v, E, i), D;
        case Z:
          return t.type = v = J0(v), D = S1(null, t, v, E, i), D;
        case Ne:
          return t.type = v = Z0(v), D = v1(null, t, v, E, i), D;
        case je: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && il(
              _,
              E,
              // Resolved for outer only
              "prop",
              Vt(v)
            );
          }
          return D = h1(
            null,
            t,
            v,
            cl(v.type, E),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var P = "";
      throw v !== null && typeof v == "object" && v.$$typeof === S && (P = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + P));
    }
    function _w(e, t, a, i, u) {
      wm(e, t), t.tag = Z;
      var s;
      return $l(a) ? (s = !0, Ah(t)) : s = !1, Of(t, u), o1(t, a, i), f0(t, a, i, u), C0(null, t, a, !0, s, u);
    }
    function kw(e, t, a, i) {
      wm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Of(t, i);
      var p, v;
      io(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Vt(a) || "Unknown";
          h0[y] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), h0[y] = !0);
        }
        t.mode & At && ul.recordLegacyContextWarning(t, null), sa(!0), kp.current = t, p = Af(null, t, a, u, s, i), v = zf(), sa(!1);
      }
      if (ma(), t.flags |= Dl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = Vt(a) || "Unknown";
        Op[E] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), Op[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = Vt(a) || "Unknown";
          Op[D] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Op[D] = !0);
        }
        t.tag = Z, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return $l(a) ? (_ = !0, Ah(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Eg(t), u1(t, p), f0(t, a, u, i), C0(null, t, a, !0, _, i);
      } else {
        if (t.tag = Q, t.mode & At) {
          qn(!0);
          try {
            p = Af(null, t, a, u, s, i), v = zf();
          } finally {
            qn(!1);
          }
        }
        return Jr() && v && eg(t), Aa(null, t, p, i), R0(t, a), t.child;
      }
    }
    function R0(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = qr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), g0[u] || (g0[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Vt(t) || "Unknown";
          Dp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Dp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Vt(t) || "Unknown";
          y0[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), y0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Vt(t) || "Unknown";
          m0[v] || (g("%s: Function components do not support contextType.", v), m0[v] = !0);
        }
      }
    }
    var T0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Xn
    };
    function b0(e) {
      return {
        baseLanes: e,
        cachePool: gw(),
        transitions: null
      };
    }
    function Ow(e, t) {
      var a = null;
      return {
        baseLanes: _t(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Dw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return wg(e, Sp);
    }
    function Mw(e, t) {
      return bs(e.childLanes, t);
    }
    function R1(e, t, a) {
      var i = t.pendingProps;
      H_(t) && (t.flags |= Et);
      var u = ol.current, s = !1, f = (t.flags & Et) !== it;
      if (f || Dw(u, e) ? (s = !0, t.flags &= ~Et) : (e === null || e.memoizedState !== null) && (u = qb(u, OE)), u = Mf(u), Vo(t, u), e === null) {
        ig(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return zw(t, v);
        }
        var y = i.children, E = i.fallback;
        if (s) {
          var D = Lw(t, y, E, a), _ = t.child;
          return _.memoizedState = b0(a), t.memoizedState = T0, D;
        } else
          return w0(t, y);
      } else {
        var P = e.memoizedState;
        if (P !== null) {
          var $ = P.dehydrated;
          if ($ !== null)
            return jw(e, t, f, i, $, P, a);
        }
        if (s) {
          var Y = i.fallback, Ue = i.children, ut = Uw(e, t, Ue, Y, a), rt = t.child, Yt = e.child.memoizedState;
          return rt.memoizedState = Yt === null ? b0(a) : Ow(Yt, a), rt.childLanes = Mw(e, a), t.memoizedState = T0, ut;
        } else {
          var Ht = i.children, U = Nw(e, t, Ht, a);
          return t.memoizedState = null, U;
        }
      }
    }
    function w0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = x0(u, i);
      return s.return = e, e.child = s, s;
    }
    function Lw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & nt) === Je && s !== null ? (p = s, p.childLanes = re, p.pendingProps = f, e.mode & Ct && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = qo(a, u, i, null)) : (p = x0(f, u), v = qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function x0(e, t, a) {
      return TC(e, t, re, null);
    }
    function T1(e, t) {
      return ec(e, t);
    }
    function Nw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = T1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & nt) === Je && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ln) : p.push(s);
      }
      return t.child = f, f;
    }
    function Uw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & nt) === Je && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var E = t.child;
        y = E, y.childLanes = re, y.pendingProps = v, t.mode & Ct && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = T1(f, v), y.subtreeFlags = f.subtreeFlags & br;
      var D;
      return p !== null ? D = ec(p, i) : (D = qo(i, s, u, null), D.flags |= Tn), D.return = t, y.return = t, y.sibling = D, t.child = y, D;
    }
    function bm(e, t, a, i) {
      i !== null && lg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = w0(t, s);
      return f.flags |= Tn, t.memoizedState = null, f;
    }
    function Aw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = x0(f, s), v = qo(i, s, u, null);
      return v.flags |= Tn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & nt) !== Je && _f(t, e.child, null, u), v;
    }
    function zw(e, t, a) {
      return (e.mode & nt) === Je ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = at) : Iy(t) ? e.lanes = el : e.lanes = Br, null;
    }
    function jw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & jn) {
          t.flags &= ~jn;
          var U = d0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, U);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Et, null;
          var W = i.children, A = i.fallback, ve = Aw(e, t, W, A, f), Be = t.child;
          return Be.memoizedState = b0(f), t.memoizedState = T0, ve;
        }
      else {
        if (bb(), (t.mode & nt) === Je)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Iy(u)) {
          var p, v, y;
          {
            var E = VT(u);
            p = E.digest, v = E.message, y = E.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = d0(D, p, y);
          return bm(e, t, f, _);
        }
        var P = Sa(f, e.childLanes);
        if (fl || P) {
          var $ = Am();
          if ($ !== null) {
            var Y = Xv($, f);
            if (Y !== Xn && Y !== s.retryLane) {
              s.retryLane = Y;
              var Ue = Cn;
              ai(e, Y), Ur($, e, Y, Ue);
            }
          }
          Q0();
          var ut = d0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, ut);
        } else if (WS(u)) {
          t.flags |= Et, t.child = e.child;
          var rt = o_.bind(null, e);
          return BT(u, rt), null;
        } else {
          _b(t, u, s.treeContext);
          var Yt = i.children, Ht = w0(t, Yt);
          return Ht.flags |= Wa, Ht;
        }
      }
    }
    function b1(e, t, a) {
      e.lanes = _t(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = _t(i.lanes, t)), mg(e.return, t, a);
    }
    function Pw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === q) {
          var u = i.memoizedState;
          u !== null && b1(i, a, e);
        } else if (i.tag === wt)
          b1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Fw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && nm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Hw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !S0[e])
        if (S0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Vw(e, t) {
      e !== void 0 && !Tm[e] && (e !== "collapsed" && e !== "hidden" ? (Tm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Tm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function w1(e, t) {
      {
        var a = Bt(e), i = !a && typeof gn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Bw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Bt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!w1(e[a], a))
              return;
        } else {
          var i = gn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!w1(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function _0(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function x1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Hw(u), Vw(s, u), Bw(f, u), Aa(e, t, f, a);
      var p = ol.current, v = wg(p, Sp);
      if (v)
        p = xg(p, Sp), t.flags |= Et;
      else {
        var y = e !== null && (e.flags & Et) !== it;
        y && Pw(t, t.child, a), p = Mf(p);
      }
      if (Vo(t, p), (t.mode & nt) === Je)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var E = Fw(t.child), D;
            E === null ? (D = t.child, t.child = null) : (D = E.sibling, E.sibling = null), _0(
              t,
              !1,
              // isBackwards
              D,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, P = t.child;
            for (t.child = null; P !== null; ) {
              var $ = P.alternate;
              if ($ !== null && nm($) === null) {
                t.child = P;
                break;
              }
              var Y = P.sibling;
              P.sibling = _, _ = P, P = Y;
            }
            _0(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            _0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function $w(e, t, a) {
      Rg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : Aa(e, t, i, a), t.child;
    }
    var _1 = !1;
    function Iw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || _1 || (_1 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && il(v, s, "prop", "Context.Provider");
      }
      if (SE(t, u, p), f !== null) {
        var y = f.value;
        if (Qe(y, p)) {
          if (f.children === s.children && !Nh())
            return Mu(e, t, a);
        } else
          Hb(t, u, a);
      }
      var E = s.children;
      return Aa(e, t, E, a), t.child;
    }
    var k1 = !1;
    function Yw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (k1 || (k1 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Of(t, a);
      var f = yr(i);
      io(t);
      var p;
      return kp.current = t, sa(!0), p = s(f), sa(!1), ma(), t.flags |= Dl, Aa(e, t, p, a), t.child;
    }
    function Mp() {
      fl = !0;
    }
    function wm(e, t) {
      (t.mode & nt) === Je && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tn);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), r1(), $p(t.lanes), Sa(a, t.childLanes) ? (Pb(e, t), t.child) : null;
    }
    function Ww(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ln) : s.push(e), a.flags |= Tn, a;
      }
    }
    function k0(e, t) {
      var a = e.lanes;
      return !!Sa(a, t);
    }
    function Qw(e, t, a) {
      switch (t.tag) {
        case ie:
          E1(t), t.stateNode, xf();
          break;
        case ne:
          _E(t);
          break;
        case Z: {
          var i = t.type;
          $l(i) && Ah(t);
          break;
        }
        case X:
          Rg(t, t.stateNode.containerInfo);
          break;
        case ct: {
          var u = t.memoizedProps.value, s = t.type._context;
          SE(t, s, u);
          break;
        }
        case me:
          {
            var f = Sa(a, t.childLanes);
            f && (t.flags |= Ot);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case q: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Vo(t, Mf(ol.current)), t.flags |= Et, null;
            var y = t.child, E = y.childLanes;
            if (Sa(a, E))
              return R1(e, t, a);
            Vo(t, Mf(ol.current));
            var D = Mu(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Vo(t, Mf(ol.current));
          break;
        }
        case wt: {
          var _ = (e.flags & Et) !== it, P = Sa(a, t.childLanes);
          if (_) {
            if (P)
              return x1(e, t, a);
            t.flags |= Et;
          }
          var $ = t.memoizedState;
          if ($ !== null && ($.rendering = null, $.tail = null, $.lastEffect = null), Vo(t, ol.current), P)
            break;
          return null;
        }
        case qe:
        case ot:
          return t.lanes = re, y1(e, t, a);
      }
      return Mu(e, t, a);
    }
    function O1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ww(e, t, aS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Nh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = k0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Et) === it)
            return fl = !1, Qw(e, t, a);
          (e.flags & vs) !== it ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, Jr() && gb(t)) {
        var f = t.index, p = Sb();
        rE(t, p, f);
      }
      switch (t.lanes = re, t.tag) {
        case he:
          return kw(e, t, t.type, a);
        case vt: {
          var v = t.elementType;
          return xw(e, t, v, a);
        }
        case Q: {
          var y = t.type, E = t.pendingProps, D = t.elementType === y ? E : cl(y, E);
          return E0(e, t, y, D, a);
        }
        case Z: {
          var _ = t.type, P = t.pendingProps, $ = t.elementType === _ ? P : cl(_, P);
          return S1(e, t, _, $, a);
        }
        case ie:
          return Tw(e, t, a);
        case ne:
          return bw(e, t, a);
        case Te:
          return ww(e, t);
        case q:
          return R1(e, t, a);
        case X:
          return $w(e, t, a);
        case Ne: {
          var Y = t.type, Ue = t.pendingProps, ut = t.elementType === Y ? Ue : cl(Y, Ue);
          return v1(e, t, Y, ut, a);
        }
        case xe:
          return Ew(e, t, a);
        case Ye:
          return Cw(e, t, a);
        case me:
          return Rw(e, t, a);
        case ct:
          return Iw(e, t, a);
        case mt:
          return Yw(e, t, a);
        case je: {
          var rt = t.type, Yt = t.pendingProps, Ht = cl(rt, Yt);
          if (t.type !== t.elementType) {
            var U = rt.propTypes;
            U && il(
              U,
              Ht,
              // Resolved for outer only
              "prop",
              Vt(rt)
            );
          }
          return Ht = cl(rt.type, Ht), h1(e, t, rt, Ht, a);
        }
        case ge:
          return m1(e, t, t.type, t.pendingProps, a);
        case jt: {
          var W = t.type, A = t.pendingProps, ve = t.elementType === W ? A : cl(W, A);
          return _w(e, t, W, ve, a);
        }
        case wt:
          return x1(e, t, a);
        case Pt:
          break;
        case qe:
          return y1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Ot;
    }
    function D1(e) {
      e.flags |= fa, e.flags |= yd;
    }
    var M1, O0, L1, N1;
    M1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ne || u.tag === Te)
          hT(e, u.stateNode);
        else if (u.tag !== X) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, O0 = function(e, t) {
    }, L1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Tg(), v = yT(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, N1 = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function Lp(e, t) {
      if (!Jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function ea(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = re, i = it;
      if (t) {
        if ((e.mode & Ct) !== Je) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = _t(a, _t(y.lanes, y.childLanes)), i |= y.subtreeFlags & br, i |= y.flags & br, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var E = e.child; E !== null; )
            a = _t(a, _t(E.lanes, E.childLanes)), i |= E.subtreeFlags & br, i |= E.flags & br, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ct) !== Je) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = _t(a, _t(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = _t(a, _t(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Gw(e, t, a) {
      if (Lb() && (t.mode & nt) !== Je && (t.flags & Et) === it)
        return cE(t), xf(), t.flags |= jn | Oa | pr, !1;
      var i = Hh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Db(t), ea(t), (t.mode & Ct) !== Je) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (xf(), (t.flags & Et) === it && (t.memoizedState = null), t.flags |= Ot, ea(t), (t.mode & Ct) !== Je) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return fE(), !0;
    }
    function U1(e, t, a) {
      var i = t.pendingProps;
      switch (tg(t), t.tag) {
        case he:
        case vt:
        case ge:
        case Q:
        case Ne:
        case xe:
        case Ye:
        case me:
        case mt:
        case je:
          return ea(t), null;
        case Z: {
          var u = t.type;
          return $l(u) && Uh(t), ea(t), null;
        }
        case ie: {
          var s = t.stateNode;
          if (Df(t), Ky(t), kg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Hh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & jn) !== it) && (t.flags |= Ya, fE());
            }
          }
          return O0(e, t), ea(t), null;
        }
        case ne: {
          bg(t);
          var v = xE(), y = t.type;
          if (e !== null && t.stateNode != null)
            L1(e, t, y, i, v), e.ref !== t.ref && D1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ea(t), null;
            }
            var E = Tg(), D = Hh(t);
            if (D)
              kb(t, v, E) && jf(t);
            else {
              var _ = vT(y, i, v, E, t);
              M1(_, t, !1, !1), t.stateNode = _, mT(_, y, i, v) && jf(t);
            }
            t.ref !== null && D1(t);
          }
          return ea(t), null;
        }
        case Te: {
          var P = i;
          if (e && t.stateNode != null) {
            var $ = e.memoizedProps;
            N1(e, t, $, P);
          } else {
            if (typeof P != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Y = xE(), Ue = Tg(), ut = Hh(t);
            ut ? Ob(t) && jf(t) : t.stateNode = gT(P, Y, Ue, t);
          }
          return ea(t), null;
        }
        case q: {
          Lf(t);
          var rt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Yt = Gw(e, t, rt);
            if (!Yt)
              return t.flags & pr ? t : null;
          }
          if ((t.flags & Et) !== it)
            return t.lanes = a, (t.mode & Ct) !== Je && Zg(t), t;
          var Ht = rt !== null, U = e !== null && e.memoizedState !== null;
          if (Ht !== U && Ht) {
            var W = t.child;
            if (W.flags |= Ml, (t.mode & nt) !== Je) {
              var A = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !L);
              A || wg(ol.current, OE) ? qx() : Q0();
            }
          }
          var ve = t.updateQueue;
          if (ve !== null && (t.flags |= Ot), ea(t), (t.mode & Ct) !== Je && Ht) {
            var Be = t.child;
            Be !== null && (t.treeBaseDuration -= Be.treeBaseDuration);
          }
          return null;
        }
        case X:
          return Df(t), O0(e, t), e === null && fb(t.stateNode.containerInfo), ea(t), null;
        case ct:
          var ze = t.type._context;
          return hg(ze, t), ea(t), null;
        case jt: {
          var yt = t.type;
          return $l(yt) && Uh(t), ea(t), null;
        }
        case wt: {
          Lf(t);
          var bt = t.memoizedState;
          if (bt === null)
            return ea(t), null;
          var pn = (t.flags & Et) !== it, en = bt.rendering;
          if (en === null)
            if (pn)
              Lp(bt, !1);
            else {
              var ir = Kx() && (e === null || (e.flags & Et) === it);
              if (!ir)
                for (var tn = t.child; tn !== null; ) {
                  var Kn = nm(tn);
                  if (Kn !== null) {
                    pn = !0, t.flags |= Et, Lp(bt, !1);
                    var ba = Kn.updateQueue;
                    return ba !== null && (t.updateQueue = ba, t.flags |= Ot), t.subtreeFlags = it, Fb(t, a), Vo(t, xg(ol.current, Sp)), t.child;
                  }
                  tn = tn.sibling;
                }
              bt.tail !== null && Ln() > tC() && (t.flags |= Et, pn = !0, Lp(bt, !1), t.lanes = Fv);
            }
          else {
            if (!pn) {
              var ia = nm(en);
              if (ia !== null) {
                t.flags |= Et, pn = !0;
                var Ci = ia.updateQueue;
                if (Ci !== null && (t.updateQueue = Ci, t.flags |= Ot), Lp(bt, !0), bt.tail === null && bt.tailMode === "hidden" && !en.alternate && !Jr())
                  return ea(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Ln() * 2 - bt.renderingStartTime > tC() && a !== Br && (t.flags |= Et, pn = !0, Lp(bt, !1), t.lanes = Fv);
            }
            if (bt.isBackwards)
              en.sibling = t.child, t.child = en;
            else {
              var Pa = bt.last;
              Pa !== null ? Pa.sibling = en : t.child = en, bt.last = en;
            }
          }
          if (bt.tail !== null) {
            var Fa = bt.tail;
            bt.rendering = Fa, bt.tail = Fa.sibling, bt.renderingStartTime = Ln(), Fa.sibling = null;
            var wa = ol.current;
            return pn ? wa = xg(wa, Sp) : wa = Mf(wa), Vo(t, wa), Fa;
          }
          return ea(t), null;
        }
        case Pt:
          break;
        case qe:
        case ot: {
          W0(t);
          var zu = t.memoizedState, Yf = zu !== null;
          if (e !== null) {
            var Gp = e.memoizedState, Kl = Gp !== null;
            Kl !== Yf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !be && (t.flags |= Ml);
          }
          return !Yf || (t.mode & nt) === Je ? ea(t) : Sa(Xl, Br) && (ea(t), t.subtreeFlags & (Tn | Ot) && (t.flags |= Ml)), null;
        }
        case Nt:
          return null;
        case ft:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qw(e, t, a) {
      switch (tg(t), t.tag) {
        case Z: {
          var i = t.type;
          $l(i) && Uh(t);
          var u = t.flags;
          return u & pr ? (t.flags = u & ~pr | Et, (t.mode & Ct) !== Je && Zg(t), t) : null;
        }
        case ie: {
          t.stateNode, Df(t), Ky(t), kg();
          var s = t.flags;
          return (s & pr) !== it && (s & Et) === it ? (t.flags = s & ~pr | Et, t) : null;
        }
        case ne:
          return bg(t), null;
        case q: {
          Lf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            xf();
          }
          var p = t.flags;
          return p & pr ? (t.flags = p & ~pr | Et, (t.mode & Ct) !== Je && Zg(t), t) : null;
        }
        case wt:
          return Lf(t), null;
        case X:
          return Df(t), null;
        case ct:
          var v = t.type._context;
          return hg(v, t), null;
        case qe:
        case ot:
          return W0(t), null;
        case Nt:
          return null;
        default:
          return null;
      }
    }
    function A1(e, t, a) {
      switch (tg(t), t.tag) {
        case Z: {
          var i = t.type.childContextTypes;
          i != null && Uh(t);
          break;
        }
        case ie: {
          t.stateNode, Df(t), Ky(t), kg();
          break;
        }
        case ne: {
          bg(t);
          break;
        }
        case X:
          Df(t);
          break;
        case q:
          Lf(t);
          break;
        case wt:
          Lf(t);
          break;
        case ct:
          var u = t.type._context;
          hg(u, t);
          break;
        case qe:
        case ot:
          W0(t);
          break;
      }
    }
    var z1 = null;
    z1 = /* @__PURE__ */ new Set();
    var xm = !1, ta = !1, Xw = typeof WeakSet == "function" ? WeakSet : Set, Ge = null, Pf = null, Ff = null;
    function Kw(e) {
      uu(null, function() {
        throw e;
      }), hd();
    }
    var Jw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ct)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function j1(e, t) {
      try {
        Io(kr, e);
      } catch (a) {
        xn(e, t, a);
      }
    }
    function D0(e, t, a) {
      try {
        Jw(e, a);
      } catch (i) {
        xn(e, t, i);
      }
    }
    function Zw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        xn(e, t, i);
      }
    }
    function P1(e, t) {
      try {
        H1(e);
      } catch (a) {
        xn(e, t, a);
      }
    }
    function Hf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (_e && k && e.mode & Ct)
              try {
                Gl(), i = a(null);
              } finally {
                Ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            xn(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Rt(e));
        } else
          a.current = null;
    }
    function _m(e, t, a) {
      try {
        a();
      } catch (i) {
        xn(e, t, i);
      }
    }
    var F1 = !1;
    function ex(e, t) {
      dT(e.containerInfo), Ge = t, tx();
      var a = F1;
      return F1 = !1, a;
    }
    function tx() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        (e.subtreeFlags & no) !== it && t !== null ? (t.return = e, Ge = t) : nx();
      }
    }
    function nx() {
      for (; Ge !== null; ) {
        var e = Ge;
        un(e);
        try {
          rx(e);
        } catch (a) {
          xn(e, e.return, a);
        }
        zn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function rx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ya) !== it) {
        switch (un(e), e.tag) {
          case Q:
          case Ne:
          case ge:
            break;
          case Z: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !qs && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : cl(e.type, i), u);
              {
                var p = z1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Rt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ie: {
            {
              var v = e.stateNode;
              jT(v.containerInfo);
            }
            break;
          }
          case ne:
          case Te:
          case X:
          case jt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        zn();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Zr) !== ii ? zv(t) : (e & kr) !== ii && gi(t), (e & Il) !== ii && Yp(!0), _m(t, a, p), (e & Il) !== ii && Yp(!1), (e & Zr) !== ii ? wc() : (e & kr) !== ii && lo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Io(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Zr) !== ii ? Ul(t) : (e & kr) !== ii && jv(t);
            var f = s.create;
            (e & Il) !== ii && Yp(!0), s.destroy = f(), (e & Il) !== ii && Yp(!1), (e & Zr) !== ii ? bc() : (e & kr) !== ii && hs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & kr) !== it ? v = "useLayoutEffect" : (s.tag & Il) !== it ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function ax(e, t) {
      if ((t.flags & Ot) !== it)
        switch (t.tag) {
          case me: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = t1(), p = t.alternate === null ? "mount" : "update";
            e1() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case ie:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case me:
                    var E = v.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function ix(e, t, a, i) {
      if ((a.flags & Hr) !== it)
        switch (a.tag) {
          case Q:
          case Ne:
          case ge: {
            if (!ta)
              if (a.mode & Ct)
                try {
                  Gl(), Io(kr | _r, a);
                } finally {
                  Ql(a);
                }
              else
                Io(kr | _r, a);
            break;
          }
          case Z: {
            var u = a.stateNode;
            if (a.flags & Ot && !ta)
              if (t === null)
                if (a.type === a.elementType && !qs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), a.mode & Ct)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : cl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !qs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), a.mode & Ct)
                  try {
                    Gl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !qs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), wE(a, p, u));
            break;
          }
          case ie: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ne:
                    y = a.child.stateNode;
                    break;
                  case Z:
                    y = a.child.stateNode;
                    break;
                }
              wE(a, v, y);
            }
            break;
          }
          case ne: {
            var E = a.stateNode;
            if (t === null && a.flags & Ot) {
              var D = a.type, _ = a.memoizedProps;
              TT(E, D, _);
            }
            break;
          }
          case Te:
            break;
          case X:
            break;
          case me: {
            {
              var P = a.memoizedProps, $ = P.onCommit, Y = P.onRender, Ue = a.stateNode.effectDuration, ut = t1(), rt = t === null ? "mount" : "update";
              e1() && (rt = "nested-update"), typeof Y == "function" && Y(a.memoizedProps.id, rt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ut);
              {
                typeof $ == "function" && $(a.memoizedProps.id, rt, Ue, ut), n_(a);
                var Yt = a.return;
                e:
                  for (; Yt !== null; ) {
                    switch (Yt.tag) {
                      case ie:
                        var Ht = Yt.stateNode;
                        Ht.effectDuration += Ue;
                        break e;
                      case me:
                        var U = Yt.stateNode;
                        U.effectDuration += Ue;
                        break e;
                    }
                    Yt = Yt.return;
                  }
              }
            }
            break;
          }
          case q: {
            px(e, a);
            break;
          }
          case wt:
          case jt:
          case Pt:
          case qe:
          case ot:
          case ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      ta || a.flags & fa && H1(a);
    }
    function lx(e) {
      switch (e.tag) {
        case Q:
        case Ne:
        case ge: {
          if (e.mode & Ct)
            try {
              Gl(), j1(e, e.return);
            } finally {
              Ql(e);
            }
          else
            j1(e, e.return);
          break;
        }
        case Z: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Zw(e, e.return, t), P1(e, e.return);
          break;
        }
        case ne: {
          P1(e, e.return);
          break;
        }
      }
    }
    function ux(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ne) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? NT(u) : AT(i.stateNode, i.memoizedProps);
            } catch (f) {
              xn(e, e.return, f);
            }
          }
        } else if (i.tag === Te) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? UT(s) : zT(s, i.memoizedProps);
            } catch (f) {
              xn(e, e.return, f);
            }
        } else if (!((i.tag === qe || i.tag === ot) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function H1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ne:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ct)
            try {
              Gl(), u = t(i);
            } finally {
              Ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Rt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Rt(e)), t.current = i;
      }
    }
    function ox(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function V1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, V1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ne) {
          var a = e.stateNode;
          a !== null && vb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function sx(e) {
      for (var t = e.return; t !== null; ) {
        if (B1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function B1(e) {
      return e.tag === ne || e.tag === ie || e.tag === X;
    }
    function $1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || B1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ne && t.tag !== Te && t.tag !== Lt; ) {
            if (t.flags & Tn || t.child === null || t.tag === X)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Tn))
            return t.stateNode;
        }
    }
    function cx(e) {
      var t = sx(e);
      switch (t.tag) {
        case ne: {
          var a = t.stateNode;
          t.flags & on && (YS(a), t.flags &= ~on);
          var i = $1(e);
          L0(e, i, a);
          break;
        }
        case ie:
        case X: {
          var u = t.stateNode.containerInfo, s = $1(e);
          M0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function M0(e, t, a) {
      var i = e.tag, u = i === ne || i === Te;
      if (u) {
        var s = e.stateNode;
        t ? OT(a, s, t) : _T(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          M0(f, t, a);
          for (var p = f.sibling; p !== null; )
            M0(p, t, a), p = p.sibling;
        }
      }
    }
    function L0(e, t, a) {
      var i = e.tag, u = i === ne || i === Te;
      if (u) {
        var s = e.stateNode;
        t ? kT(a, s, t) : xT(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          L0(f, t, a);
          for (var p = f.sibling; p !== null; )
            L0(p, t, a), p = p.sibling;
        }
      }
    }
    var na = null, pl = !1;
    function fx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ne: {
                na = i.stateNode, pl = !1;
                break e;
              }
              case ie: {
                na = i.stateNode.containerInfo, pl = !0;
                break e;
              }
              case X: {
                na = i.stateNode.containerInfo, pl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (na === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        I1(e, t, a), na = null, pl = !1;
      }
      ox(a);
    }
    function Yo(e, t, a) {
      for (var i = a.child; i !== null; )
        I1(e, t, i), i = i.sibling;
    }
    function I1(e, t, a) {
      switch (cu(a), a.tag) {
        case ne:
          ta || Hf(a, t);
        case Te: {
          {
            var i = na, u = pl;
            na = null, Yo(e, t, a), na = i, pl = u, na !== null && (pl ? MT(na, a.stateNode) : DT(na, a.stateNode));
          }
          return;
        }
        case Lt: {
          na !== null && (pl ? LT(na, a.stateNode) : $y(na, a.stateNode));
          return;
        }
        case X: {
          {
            var s = na, f = pl;
            na = a.stateNode.containerInfo, pl = !0, Yo(e, t, a), na = s, pl = f;
          }
          return;
        }
        case Q:
        case Ne:
        case je:
        case ge: {
          if (!ta) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, E = y;
                do {
                  var D = E, _ = D.destroy, P = D.tag;
                  _ !== void 0 && ((P & Il) !== ii ? _m(a, t, _) : (P & kr) !== ii && (gi(a), a.mode & Ct ? (Gl(), _m(a, t, _), Ql(a)) : _m(a, t, _), lo())), E = E.next;
                } while (E !== y);
              }
            }
          }
          Yo(e, t, a);
          return;
        }
        case Z: {
          if (!ta) {
            Hf(a, t);
            var $ = a.stateNode;
            typeof $.componentWillUnmount == "function" && D0(a, t, $);
          }
          Yo(e, t, a);
          return;
        }
        case Pt: {
          Yo(e, t, a);
          return;
        }
        case qe: {
          if (
            // TODO: Remove this dead flag
            a.mode & nt
          ) {
            var Y = ta;
            ta = Y || a.memoizedState !== null, Yo(e, t, a), ta = Y;
          } else
            Yo(e, t, a);
          break;
        }
        default: {
          Yo(e, t, a);
          return;
        }
      }
    }
    function dx(e) {
      e.memoizedState;
    }
    function px(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && KT(s);
          }
        }
      }
    }
    function Y1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Xw()), t.forEach(function(i) {
          var u = s_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), La)
              if (Pf !== null && Ff !== null)
                Ip(Ff, Pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function vx(e, t, a) {
      Pf = a, Ff = e, un(t), W1(t, e), un(t), Pf = null, Ff = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            fx(e, t, s);
          } catch (v) {
            xn(s, t, v);
          }
        }
      var f = nc();
      if (t.subtreeFlags & va)
        for (var p = t.child; p !== null; )
          un(p), W1(p, e), p = p.sibling;
      un(f);
    }
    function W1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Q:
        case Ne:
        case je:
        case ge: {
          if (vl(t, e), ql(e), u & Ot) {
            try {
              dl(Il | _r, e, e.return), Io(Il | _r, e);
            } catch (yt) {
              xn(e, e.return, yt);
            }
            if (e.mode & Ct) {
              try {
                Gl(), dl(kr | _r, e, e.return);
              } catch (yt) {
                xn(e, e.return, yt);
              }
              Ql(e);
            } else
              try {
                dl(kr | _r, e, e.return);
              } catch (yt) {
                xn(e, e.return, yt);
              }
          }
          return;
        }
        case Z: {
          vl(t, e), ql(e), u & fa && i !== null && Hf(i, i.return);
          return;
        }
        case ne: {
          vl(t, e), ql(e), u & fa && i !== null && Hf(i, i.return);
          {
            if (e.flags & on) {
              var s = e.stateNode;
              try {
                YS(s);
              } catch (yt) {
                xn(e, e.return, yt);
              }
            }
            if (u & Ot) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    bT(f, E, y, v, p, e);
                  } catch (yt) {
                    xn(e, e.return, yt);
                  }
              }
            }
          }
          return;
        }
        case Te: {
          if (vl(t, e), ql(e), u & Ot) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, _ = e.memoizedProps, P = i !== null ? i.memoizedProps : _;
            try {
              wT(D, P, _);
            } catch (yt) {
              xn(e, e.return, yt);
            }
          }
          return;
        }
        case ie: {
          if (vl(t, e), ql(e), u & Ot && i !== null) {
            var $ = i.memoizedState;
            if ($.isDehydrated)
              try {
                XT(t.containerInfo);
              } catch (yt) {
                xn(e, e.return, yt);
              }
          }
          return;
        }
        case X: {
          vl(t, e), ql(e);
          return;
        }
        case q: {
          vl(t, e), ql(e);
          var Y = e.child;
          if (Y.flags & Ml) {
            var Ue = Y.stateNode, ut = Y.memoizedState, rt = ut !== null;
            if (Ue.isHidden = rt, rt) {
              var Yt = Y.alternate !== null && Y.alternate.memoizedState !== null;
              Yt || Gx();
            }
          }
          if (u & Ot) {
            try {
              dx(e);
            } catch (yt) {
              xn(e, e.return, yt);
            }
            Y1(e);
          }
          return;
        }
        case qe: {
          var Ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & nt
          ) {
            var U = ta;
            ta = U || Ht, vl(t, e), ta = U;
          } else
            vl(t, e);
          if (ql(e), u & Ml) {
            var W = e.stateNode, A = e.memoizedState, ve = A !== null, Be = e;
            if (W.isHidden = ve, ve && !Ht && (Be.mode & nt) !== Je) {
              Ge = Be;
              for (var ze = Be.child; ze !== null; )
                Ge = ze, mx(ze), ze = ze.sibling;
            }
            ux(Be, ve);
          }
          return;
        }
        case wt: {
          vl(t, e), ql(e), u & Ot && Y1(e);
          return;
        }
        case Pt:
          return;
        default: {
          vl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & Tn) {
        try {
          cx(e);
        } catch (a) {
          xn(e, e.return, a);
        }
        e.flags &= ~Tn;
      }
      t & Wa && (e.flags &= ~Wa);
    }
    function hx(e, t, a) {
      Pf = a, Ff = t, Ge = e, Q1(e, t, a), Pf = null, Ff = null;
    }
    function Q1(e, t, a) {
      for (var i = (e.mode & nt) !== Je; Ge !== null; ) {
        var u = Ge, s = u.child;
        if (u.tag === qe && i) {
          var f = u.memoizedState !== null, p = f || xm;
          if (p) {
            N0(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, E = y || ta, D = xm, _ = ta;
            xm = p, ta = E, ta && !_ && (Ge = u, yx(u));
            for (var P = s; P !== null; )
              Ge = P, Q1(
                P,
                // New root; bubble back up to here and stop.
                t,
                a
              ), P = P.sibling;
            Ge = u, xm = D, ta = _, N0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Hr) !== it && s !== null ? (s.return = u, Ge = s) : N0(e, t, a);
      }
    }
    function N0(e, t, a) {
      for (; Ge !== null; ) {
        var i = Ge;
        if ((i.flags & Hr) !== it) {
          var u = i.alternate;
          un(i);
          try {
            ix(t, u, i, a);
          } catch (f) {
            xn(i, i.return, f);
          }
          zn();
        }
        if (i === e) {
          Ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ge = s;
          return;
        }
        Ge = i.return;
      }
    }
    function mx(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.child;
        switch (t.tag) {
          case Q:
          case Ne:
          case je:
          case ge: {
            if (t.mode & Ct)
              try {
                Gl(), dl(kr, t, t.return);
              } finally {
                Ql(t);
              }
            else
              dl(kr, t, t.return);
            break;
          }
          case Z: {
            Hf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && D0(t, t.return, i);
            break;
          }
          case ne: {
            Hf(t, t.return);
            break;
          }
          case qe: {
            var u = t.memoizedState !== null;
            if (u) {
              G1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ge = a) : G1(e);
      }
    }
    function G1(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        if (t === e) {
          Ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ge = a;
          return;
        }
        Ge = t.return;
      }
    }
    function yx(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.child;
        if (t.tag === qe) {
          var i = t.memoizedState !== null;
          if (i) {
            q1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ge = a) : q1(e);
      }
    }
    function q1(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        un(t);
        try {
          lx(t);
        } catch (i) {
          xn(t, t.return, i);
        }
        if (zn(), t === e) {
          Ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ge = a;
          return;
        }
        Ge = t.return;
      }
    }
    function gx(e, t, a, i) {
      Ge = t, Sx(t, e, a, i);
    }
    function Sx(e, t, a, i) {
      for (; Ge !== null; ) {
        var u = Ge, s = u.child;
        (u.subtreeFlags & Qa) !== it && s !== null ? (s.return = u, Ge = s) : Ex(e, t, a, i);
      }
    }
    function Ex(e, t, a, i) {
      for (; Ge !== null; ) {
        var u = Ge;
        if ((u.flags & _n) !== it) {
          un(u);
          try {
            Cx(t, u, a, i);
          } catch (f) {
            xn(u, u.return, f);
          }
          zn();
        }
        if (u === e) {
          Ge = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ge = s;
          return;
        }
        Ge = u.return;
      }
    }
    function Cx(e, t, a, i) {
      switch (t.tag) {
        case Q:
        case Ne:
        case ge: {
          if (t.mode & Ct) {
            Jg();
            try {
              Io(Zr | _r, t);
            } finally {
              Kg(t);
            }
          } else
            Io(Zr | _r, t);
          break;
        }
      }
    }
    function Rx(e) {
      Ge = e, Tx();
    }
    function Tx() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        if ((Ge.flags & ln) !== it) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ge = u, xx(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ge = e;
          }
        }
        (e.subtreeFlags & Qa) !== it && t !== null ? (t.return = e, Ge = t) : bx();
      }
    }
    function bx() {
      for (; Ge !== null; ) {
        var e = Ge;
        (e.flags & _n) !== it && (un(e), wx(e), zn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function wx(e) {
      switch (e.tag) {
        case Q:
        case Ne:
        case ge: {
          e.mode & Ct ? (Jg(), dl(Zr | _r, e, e.return), Kg(e)) : dl(Zr | _r, e, e.return);
          break;
        }
      }
    }
    function xx(e, t) {
      for (; Ge !== null; ) {
        var a = Ge;
        un(a), kx(a, t), zn();
        var i = a.child;
        i !== null ? (i.return = a, Ge = i) : _x(e);
      }
    }
    function _x(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.sibling, i = t.return;
        if (V1(t), t === e) {
          Ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ge = a;
          return;
        }
        Ge = i;
      }
    }
    function kx(e, t) {
      switch (e.tag) {
        case Q:
        case Ne:
        case ge: {
          e.mode & Ct ? (Jg(), dl(Zr, e, t), Kg(e)) : dl(Zr, e, t);
          break;
        }
      }
    }
    function Ox(e) {
      switch (e.tag) {
        case Q:
        case Ne:
        case ge: {
          try {
            Io(kr | _r, e);
          } catch (a) {
            xn(e, e.return, a);
          }
          break;
        }
        case Z: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            xn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Dx(e) {
      switch (e.tag) {
        case Q:
        case Ne:
        case ge: {
          try {
            Io(Zr | _r, e);
          } catch (t) {
            xn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Mx(e) {
      switch (e.tag) {
        case Q:
        case Ne:
        case ge: {
          try {
            dl(kr | _r, e, e.return);
          } catch (a) {
            xn(e, e.return, a);
          }
          break;
        }
        case Z: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && D0(e, e.return, t);
          break;
        }
      }
    }
    function Lx(e) {
      switch (e.tag) {
        case Q:
        case Ne:
        case ge:
          try {
            dl(Zr | _r, e, e.return);
          } catch (t) {
            xn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Np = Symbol.for;
      Np("selector.component"), Np("selector.has_pseudo_class"), Np("selector.role"), Np("selector.test_id"), Np("selector.text");
    }
    var Nx = [];
    function Ux() {
      Nx.forEach(function(e) {
        return e();
      });
    }
    var Ax = b.ReactCurrentActQueue;
    function zx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function X1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Ax.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var jx = Math.ceil, U0 = b.ReactCurrentDispatcher, A0 = b.ReactCurrentOwner, ra = b.ReactCurrentBatchConfig, hl = b.ReactCurrentActQueue, Mr = (
      /*             */
      0
    ), K1 = (
      /*               */
      1
    ), aa = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Lu = 0, Up = 1, Xs = 2, km = 3, Ap = 4, J1 = 5, z0 = 6, It = Mr, za = null, In = null, Lr = re, Xl = re, j0 = Ao(re), Nr = Lu, zp = null, Om = re, jp = re, Dm = re, Pp = null, li = null, P0 = 0, Z1 = 500, eC = 1 / 0, Px = 500, Nu = null;
    function Fp() {
      eC = Ln() + Px;
    }
    function tC() {
      return eC;
    }
    var Mm = !1, F0 = null, Vf = null, Ks = !1, Wo = null, Hp = re, H0 = [], V0 = null, Fx = 50, Vp = 0, B0 = null, $0 = !1, Lm = !1, Hx = 50, Bf = 0, Nm = null, Bp = Cn, Um = re, nC = !1;
    function Am() {
      return za;
    }
    function ja() {
      return (It & (aa | ji)) !== Mr ? Ln() : (Bp !== Cn || (Bp = Ln()), Bp);
    }
    function Qo(e) {
      var t = e.mode;
      if ((t & nt) === Je)
        return at;
      if ((It & aa) !== Mr && Lr !== re)
        return mo(Lr);
      var a = Ab() !== Ub;
      if (a) {
        if (ra.transition !== null) {
          var i = ra.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Um === Xn && (Um = Qv()), Um;
      }
      var u = Ja();
      if (u !== Xn)
        return u;
      var s = ST();
      return s;
    }
    function Vx(e) {
      var t = e.mode;
      return (t & nt) === Je ? at : ga();
    }
    function Ur(e, t, a, i) {
      f_(), nC && g("useInsertionEffect must not schedule updates."), $0 && (Lm = !0), gu(e, a, i), (It & aa) !== re && e === za ? v_(t) : (La && Gc(e, t, a), h_(t), e === za && ((It & aa) === Mr && (jp = _t(jp, a)), Nr === Ap && Go(e, Lr)), ui(e, i), a === at && It === Mr && (t.mode & nt) === Je && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && (Fp(), nE()));
    }
    function Bx(e, t, a) {
      var i = e.current;
      i.lanes = t, gu(e, t, a), ui(e, a);
    }
    function $x(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (It & aa) !== Mr
      );
    }
    function ui(e, t) {
      var a = e.callbackNode;
      Bv(e, t);
      var i = mu(e, e === za ? Lr : re);
      if (i === re) {
        a !== null && gC(a), e.callbackNode = null, e.callbackPriority = Xn;
        return;
      }
      var u = Vn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== X0)) {
        a == null && s !== at && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && gC(a);
      var f;
      if (u === at)
        e.tag === zo ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), yb(iC.bind(null, e))) : tE(iC.bind(null, e)), hl.current !== null ? hl.current.push(jo) : CT(function() {
          (It & (aa | ji)) === Mr && jo();
        }), f = null;
      else {
        var p;
        switch (xr(i)) {
          case Bn:
            p = Cc;
            break;
          case tl:
            p = su;
            break;
          case ki:
            p = _i;
            break;
          case yo:
            p = Rc;
            break;
          default:
            p = _i;
            break;
        }
        f = K0(p, rC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function rC(e, t) {
      if (uw(), Bp = Cn, Um = re, (It & (aa | ji)) !== Mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = mu(e, e === za ? Lr : re);
      if (u === re)
        return null;
      var s = !Ts(e, u) && !Wv(e, u) && !t, f = s ? Zx(e, u) : jm(e, u);
      if (f !== Lu) {
        if (f === Xs) {
          var p = zl(e);
          p !== re && (u = p, f = I0(e, p));
        }
        if (f === Up) {
          var v = zp;
          throw Js(e, re), Go(e, u), ui(e, Ln()), v;
        }
        if (f === z0)
          Go(e, u);
        else {
          var y = !Ts(e, u), E = e.current.alternate;
          if (y && !Yx(E)) {
            if (f = jm(e, u), f === Xs) {
              var D = zl(e);
              D !== re && (u = D, f = I0(e, D));
            }
            if (f === Up) {
              var _ = zp;
              throw Js(e, re), Go(e, u), ui(e, Ln()), _;
            }
          }
          e.finishedWork = E, e.finishedLanes = u, Ix(e, f, u);
        }
      }
      return ui(e, Ln()), e.callbackNode === a ? rC.bind(null, e) : null;
    }
    function I0(e, t) {
      var a = Pp;
      if (qc(e)) {
        var i = Js(e, t);
        i.flags |= jn, cb(e.containerInfo);
      }
      var u = jm(e, t);
      if (u !== Xs) {
        var s = li;
        li = a, s !== null && aC(s);
      }
      return u;
    }
    function aC(e) {
      li === null ? li = e : li.push.apply(li, e);
    }
    function Ix(e, t, a) {
      switch (t) {
        case Lu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case Xs: {
          Zs(e, li, Nu);
          break;
        }
        case km: {
          if (Go(e, a), $v(a) && // do not delay if we're inside an act() scope
          !SC()) {
            var i = P0 + Z1 - Ln();
            if (i > 10) {
              var u = mu(e, re);
              if (u !== re)
                break;
              var s = e.suspendedLanes;
              if (!yu(s, a)) {
                ja(), Wc(e, s);
                break;
              }
              e.timeoutHandle = Vy(Zs.bind(null, e, li, Nu), i);
              break;
            }
          }
          Zs(e, li, Nu);
          break;
        }
        case Ap: {
          if (Go(e, a), Yv(a))
            break;
          if (!SC()) {
            var f = Hv(e, a), p = f, v = Ln() - p, y = c_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Vy(Zs.bind(null, e, li, Nu), y);
              break;
            }
          }
          Zs(e, li, Nu);
          break;
        }
        case J1: {
          Zs(e, li, Nu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Yx(e) {
      for (var t = e; ; ) {
        if (t.flags & ps) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Qe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ps && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Go(e, t) {
      t = bs(t, Dm), t = bs(t, jp), qv(e, t);
    }
    function iC(e) {
      if (ow(), (It & (aa | ji)) !== Mr)
        throw new Error("Should not already be working.");
      Au();
      var t = mu(e, re);
      if (!Sa(t, at))
        return ui(e, Ln()), null;
      var a = jm(e, t);
      if (e.tag !== zo && a === Xs) {
        var i = zl(e);
        i !== re && (t = i, a = I0(e, i));
      }
      if (a === Up) {
        var u = zp;
        throw Js(e, re), Go(e, t), ui(e, Ln()), u;
      }
      if (a === z0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Zs(e, li, Nu), ui(e, Ln()), null;
    }
    function Wx(e, t) {
      t !== re && (Ld(e, _t(t, at)), ui(e, Ln()), (It & (aa | ji)) === Mr && (Fp(), jo()));
    }
    function Y0(e, t) {
      var a = It;
      It |= K1;
      try {
        return e(t);
      } finally {
        It = a, It === Mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && (Fp(), nE());
      }
    }
    function Qx(e, t, a, i, u) {
      var s = Ja(), f = ra.transition;
      try {
        return ra.transition = null, Pn(Bn), e(t, a, i, u);
      } finally {
        Pn(s), ra.transition = f, It === Mr && Fp();
      }
    }
    function Uu(e) {
      Wo !== null && Wo.tag === zo && (It & (aa | ji)) === Mr && Au();
      var t = It;
      It |= K1;
      var a = ra.transition, i = Ja();
      try {
        return ra.transition = null, Pn(Bn), e ? e() : void 0;
      } finally {
        Pn(i), ra.transition = a, It = t, (It & (aa | ji)) === Mr && jo();
      }
    }
    function lC() {
      return (It & (aa | ji)) !== Mr;
    }
    function zm(e, t) {
      Ra(j0, Xl, e), Xl = _t(Xl, t);
    }
    function W0(e) {
      Xl = j0.current, Ca(j0, e);
    }
    function Js(e, t) {
      e.finishedWork = null, e.finishedLanes = re;
      var a = e.timeoutHandle;
      if (a !== By && (e.timeoutHandle = By, ET(a)), In !== null)
        for (var i = In.return; i !== null; ) {
          var u = i.alternate;
          A1(u, i), i = i.return;
        }
      za = e;
      var s = ec(e.current, null);
      return In = s, Lr = Xl = t, Nr = Lu, zp = null, Om = re, jp = re, Dm = re, Pp = null, li = null, Bb(), ul.discardPendingWarnings(), s;
    }
    function uC(e, t) {
      do {
        var a = In;
        try {
          if (Wh(), ME(), zn(), A0.current = null, a === null || a.return === null) {
            Nr = Up, zp = t, In = null;
            return;
          }
          if (_e && a.mode & Ct && Cm(a, !0), Oe)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              fu(a, i, Lr);
            } else
              ms(a, t, Lr);
          yw(e, a.return, a, t, Lr), fC(a);
        } catch (u) {
          t = u, In === a && a !== null ? (a = a.return, In = a) : a = In;
          continue;
        }
        return;
      } while (!0);
    }
    function oC() {
      var e = U0.current;
      return U0.current = mm, e === null ? mm : e;
    }
    function sC(e) {
      U0.current = e;
    }
    function Gx() {
      P0 = Ln();
    }
    function $p(e) {
      Om = _t(e, Om);
    }
    function qx() {
      Nr === Lu && (Nr = km);
    }
    function Q0() {
      (Nr === Lu || Nr === km || Nr === Xs) && (Nr = Ap), za !== null && (Rs(Om) || Rs(jp)) && Go(za, Lr);
    }
    function Xx(e) {
      Nr !== Ap && (Nr = Xs), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function Kx() {
      return Nr === Lu;
    }
    function jm(e, t) {
      var a = It;
      It |= aa;
      var i = oC();
      if (za !== e || Lr !== t) {
        if (La) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, Lr), u.clear()), Nd(e, t);
        }
        Nu = xs(), Js(e, t);
      }
      kn(t);
      do
        try {
          Jx();
          break;
        } catch (s) {
          uC(e, s);
        }
      while (!0);
      if (Wh(), It = a, sC(i), In !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return _c(), za = null, Lr = re, Nr;
    }
    function Jx() {
      for (; In !== null; )
        cC(In);
    }
    function Zx(e, t) {
      var a = It;
      It |= aa;
      var i = oC();
      if (za !== e || Lr !== t) {
        if (La) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, Lr), u.clear()), Nd(e, t);
        }
        Nu = xs(), Fp(), Js(e, t);
      }
      kn(t);
      do
        try {
          e_();
          break;
        } catch (s) {
          uC(e, s);
        }
      while (!0);
      return Wh(), sC(i), It = a, In !== null ? (xc(), Lu) : (_c(), za = null, Lr = re, Nr);
    }
    function e_() {
      for (; In !== null && !Ec(); )
        cC(In);
    }
    function cC(e) {
      var t = e.alternate;
      un(e);
      var a;
      (e.mode & Ct) !== Je ? (Xg(e), a = G0(t, e, Xl), Cm(e, !0)) : a = G0(t, e, Xl), zn(), e.memoizedProps = e.pendingProps, a === null ? fC(e) : In = a, A0.current = null;
    }
    function fC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Oa) === it) {
          un(t);
          var u = void 0;
          if ((t.mode & Ct) === Je ? u = U1(a, t, Xl) : (Xg(t), u = U1(a, t, Xl), Cm(t, !1)), zn(), u !== null) {
            In = u;
            return;
          }
        } else {
          var s = qw(a, t);
          if (s !== null) {
            s.flags &= Ov, In = s;
            return;
          }
          if ((t.mode & Ct) !== Je) {
            Cm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Oa, i.subtreeFlags = it, i.deletions = null;
          else {
            Nr = z0, In = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          In = v;
          return;
        }
        t = i, In = t;
      } while (t !== null);
      Nr === Lu && (Nr = J1);
    }
    function Zs(e, t, a) {
      var i = Ja(), u = ra.transition;
      try {
        ra.transition = null, Pn(Bn), t_(e, t, a, i);
      } finally {
        ra.transition = u, Pn(i);
      }
      return null;
    }
    function t_(e, t, a, i) {
      do
        Au();
      while (Wo !== null);
      if (d_(), (It & (aa | ji)) !== Mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Nl(s), u === null)
        return Tc(), null;
      if (s === re && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = re, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Xn;
      var f = _t(u.lanes, u.childLanes);
      Qc(e, f), e === za && (za = null, In = null, Lr = re), ((u.subtreeFlags & Qa) !== it || (u.flags & Qa) !== it) && (Ks || (Ks = !0, V0 = a, K0(_i, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (no | va | Hr | Qa)) !== it, v = (u.flags & (no | va | Hr | Qa)) !== it;
      if (p || v) {
        var y = ra.transition;
        ra.transition = null;
        var E = Ja();
        Pn(Bn);
        var D = It;
        It |= ji, A0.current = null, ex(e, u), n1(), vx(e, u, s), pT(e.containerInfo), e.current = u, bd(s), hx(u, e, s), uo(), Lv(), It = D, Pn(E), ra.transition = y;
      } else
        e.current = u, n1();
      var _ = Ks;
      if (Ks ? (Ks = !1, Wo = e, Hp = s) : (Bf = 0, Nm = null), f = e.pendingLanes, f === re && (Vf = null), _ || hC(e.current, !1), ao(u.stateNode, i), La && e.memoizedUpdaters.clear(), Ux(), ui(e, Ln()), t !== null)
        for (var P = e.onRecoverableError, $ = 0; $ < t.length; $++) {
          var Y = t[$], Ue = Y.stack, ut = Y.digest;
          P(Y.value, {
            componentStack: Ue,
            digest: ut
          });
        }
      if (Mm) {
        Mm = !1;
        var rt = F0;
        throw F0 = null, rt;
      }
      return Sa(Hp, at) && e.tag !== zo && Au(), f = e.pendingLanes, Sa(f, at) ? (lw(), e === B0 ? Vp++ : (Vp = 0, B0 = e)) : Vp = 0, jo(), Tc(), null;
    }
    function Au() {
      if (Wo !== null) {
        var e = xr(Hp), t = dy(ki, e), a = ra.transition, i = Ja();
        try {
          return ra.transition = null, Pn(t), r_();
        } finally {
          Pn(i), ra.transition = a;
        }
      }
      return !1;
    }
    function n_(e) {
      H0.push(e), Ks || (Ks = !0, K0(_i, function() {
        return Au(), null;
      }));
    }
    function r_() {
      if (Wo === null)
        return !1;
      var e = V0;
      V0 = null;
      var t = Wo, a = Hp;
      if (Wo = null, Hp = re, (It & (aa | ji)) !== Mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      $0 = !0, Lm = !1, Pv(a);
      var i = It;
      It |= ji, Rx(t.current), gx(t, t.current, a, e);
      {
        var u = H0;
        H0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          ax(t, f);
        }
      }
      wd(), hC(t.current, !0), It = i, jo(), Lm ? t === Nm ? Bf++ : (Bf = 0, Nm = t) : Bf = 0, $0 = !1, Lm = !1, Xa(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function dC(e) {
      return Vf !== null && Vf.has(e);
    }
    function a_(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function i_(e) {
      Mm || (Mm = !0, F0 = e);
    }
    var l_ = i_;
    function pC(e, t, a) {
      var i = Gs(a, t), u = c1(e, i, at), s = Fo(e, u, at), f = ja();
      s !== null && (gu(s, at, f), ui(s, f));
    }
    function xn(e, t, a) {
      if (Kw(a), Yp(!1), e.tag === ie) {
        pC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ie) {
          pC(i, e, a);
          return;
        } else if (i.tag === Z) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !dC(s)) {
            var f = Gs(a, e), p = v0(i, f, at), v = Fo(i, p, at), y = ja();
            v !== null && (gu(v, at, y), ui(v, y));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function u_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ja();
      Wc(e, a), m_(e), za === e && yu(Lr, a) && (Nr === Ap || Nr === km && $v(Lr) && Ln() - P0 < Z1 ? Js(e, re) : Dm = _t(Dm, a)), ui(e, u);
    }
    function vC(e, t) {
      t === Xn && (t = Vx(e));
      var a = ja(), i = ai(e, t);
      i !== null && (gu(i, t, a), ui(i, a));
    }
    function o_(e) {
      var t = e.memoizedState, a = Xn;
      t !== null && (a = t.retryLane), vC(e, a);
    }
    function s_(e, t) {
      var a = Xn, i;
      switch (e.tag) {
        case q:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case wt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), vC(e, a);
    }
    function c_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : jx(e / 1960) * 1960;
    }
    function f_() {
      if (Vp > Fx)
        throw Vp = 0, B0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > Hx && (Bf = 0, Nm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function d_() {
      ul.flushLegacyContextWarning(), ul.flushPendingUnsafeLifecycleWarnings();
    }
    function hC(e, t) {
      un(e), Pm(e, pa, Mx), t && Pm(e, ou, Lx), Pm(e, pa, Ox), t && Pm(e, ou, Dx), zn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== it ? i = i.child : ((i.flags & t) !== it && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Fm = null;
    function mC(e) {
      {
        if ((It & aa) !== Mr || !(e.mode & nt))
          return;
        var t = e.tag;
        if (t !== he && t !== ie && t !== Z && t !== Q && t !== Ne && t !== je && t !== ge)
          return;
        var a = Rt(e) || "ReactComponent";
        if (Fm !== null) {
          if (Fm.has(a))
            return;
          Fm.add(a);
        } else
          Fm = /* @__PURE__ */ new Set([a]);
        var i = Mn;
        try {
          un(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? un(e) : zn();
        }
      }
    }
    var G0;
    {
      var p_ = null;
      G0 = function(e, t, a) {
        var i = bC(p_, t);
        try {
          return O1(e, t, a);
        } catch (s) {
          if (wb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Wh(), ME(), A1(e, t), bC(t, i), t.mode & Ct && Xg(t), uu(null, O1, null, e, t, a), uy()) {
            var u = hd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var yC = !1, q0;
    q0 = /* @__PURE__ */ new Set();
    function v_(e) {
      if (oa && !rw())
        switch (e.tag) {
          case Q:
          case Ne:
          case ge: {
            var t = In && Rt(In) || "Unknown", a = t;
            if (!q0.has(a)) {
              q0.add(a);
              var i = Rt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Z: {
            yC || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), yC = !0);
            break;
          }
        }
    }
    function Ip(e, t) {
      if (La) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Gc(e, i, t);
        });
      }
    }
    var X0 = {};
    function K0(e, t) {
      {
        var a = hl.current;
        return a !== null ? (a.push(t), X0) : Sc(e, t);
      }
    }
    function gC(e) {
      if (e !== X0)
        return Mv(e);
    }
    function SC() {
      return hl.current !== null;
    }
    function h_(e) {
      {
        if (e.mode & nt) {
          if (!X1())
            return;
        } else if (!zx() || It !== Mr || e.tag !== Q && e.tag !== Ne && e.tag !== ge)
          return;
        if (hl.current === null) {
          var t = Mn;
          try {
            un(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Rt(e));
          } finally {
            t ? un(e) : zn();
          }
        }
      }
    }
    function m_(e) {
      e.tag !== zo && X1() && hl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Yp(e) {
      nC = e;
    }
    var Pi = null, $f = null, y_ = function(e) {
      Pi = e;
    };
    function If(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function J0(e) {
      return If(e);
    }
    function Z0(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: de,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function EC(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Z: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Q: {
            (typeof i == "function" || s === S) && (u = !0);
            break;
          }
          case Ne: {
            (s === de || s === S) && (u = !0);
            break;
          }
          case je:
          case ge: {
            (s === zt || s === S) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Pi(a);
          if (f !== void 0 && f === Pi(i))
            return !0;
        }
        return !1;
      }
    }
    function CC(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var g_ = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          eS(e.current, i, a);
        });
      }
    }, S_ = function(e, t) {
      {
        if (e.context !== Si)
          return;
        Au(), Uu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function eS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Q:
          case ge:
          case Z:
            v = p;
            break;
          case Ne:
            v = p.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, E = !1;
        if (v !== null) {
          var D = Pi(v);
          D !== void 0 && (a.has(D) ? E = !0 : t.has(D) && (f === Z ? E = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || y) {
          var _ = ai(e, at);
          _ !== null && Ur(_, e, at, Cn);
        }
        u !== null && !E && eS(u, t, a), s !== null && eS(s, t, a);
      }
    }
    var E_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return tS(e.current, i, a), a;
      }
    };
    function tS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Q:
          case ge:
          case Z:
            p = f;
            break;
          case Ne:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? C_(e, a) : i !== null && tS(i, t, a), u !== null && tS(u, t, a);
      }
    }
    function C_(e, t) {
      {
        var a = R_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ne:
              t.add(i.stateNode);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
            case ie:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function R_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ne)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var nS;
    {
      nS = !1;
      try {
        var RC = Object.preventExtensions({});
      } catch {
        nS = !0;
      }
    }
    function T_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = it, this.subtreeFlags = it, this.deletions = null, this.lanes = re, this.childLanes = re, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !nS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ei = function(e, t, a, i) {
      return new T_(e, t, a, i);
    };
    function rS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function b_(e) {
      return typeof e == "function" && !rS(e) && e.defaultProps === void 0;
    }
    function w_(e) {
      if (typeof e == "function")
        return rS(e) ? Z : Q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === de)
          return Ne;
        if (t === zt)
          return je;
      }
      return he;
    }
    function ec(e, t) {
      var a = e.alternate;
      a === null ? (a = Ei(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = it, a.subtreeFlags = it, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & br, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case he:
        case Q:
        case ge:
          a.type = If(e.type);
          break;
        case Z:
          a.type = J0(e.type);
          break;
        case Ne:
          a.type = Z0(e.type);
          break;
      }
      return a;
    }
    function x_(e, t) {
      e.flags &= br | Tn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = re, e.lanes = t, e.child = null, e.subtreeFlags = it, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = it, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function __(e, t, a) {
      var i;
      return e === zh ? (i = nt, t === !0 && (i |= At, i |= Na)) : i = Je, La && (i |= Ct), Ei(ie, null, null, i);
    }
    function aS(e, t, a, i, u, s) {
      var f = he, p = e;
      if (typeof e == "function")
        rS(e) ? (f = Z, p = J0(p)) : p = If(p);
      else if (typeof e == "string")
        f = ne;
      else
        e:
          switch (e) {
            case Pr:
              return qo(a.children, u, s, t);
            case Ha:
              f = Ye, u |= At, (u & nt) !== Je && (u |= Na);
              break;
            case ka:
              return k_(a, u, s, t);
            case Xe:
              return O_(a, u, s, t);
            case Dt:
              return D_(a, u, s, t);
            case ae:
              return TC(a, u, s, t);
            case Re:
            case M:
            case xt:
            case Mt:
            case K:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case T:
                    f = ct;
                    break e;
                  case le:
                    f = mt;
                    break e;
                  case de:
                    f = Ne, p = Z0(p);
                    break e;
                  case zt:
                    f = je;
                    break e;
                  case S:
                    f = vt, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Rt(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var E = Ei(f, a, t, u);
      return E.elementType = e, E.type = p, E.lanes = s, E._debugOwner = i, E;
    }
    function iS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = aS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function qo(e, t, a, i) {
      var u = Ei(xe, e, i, t);
      return u.lanes = a, u;
    }
    function k_(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ei(me, e, i, t | Ct);
      return u.elementType = ka, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function O_(e, t, a, i) {
      var u = Ei(q, e, i, t);
      return u.elementType = Xe, u.lanes = a, u;
    }
    function D_(e, t, a, i) {
      var u = Ei(wt, e, i, t);
      return u.elementType = Dt, u.lanes = a, u;
    }
    function TC(e, t, a, i) {
      var u = Ei(qe, e, i, t);
      u.elementType = ae, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function lS(e, t, a) {
      var i = Ei(Te, e, null, t);
      return i.lanes = a, i;
    }
    function M_() {
      var e = Ei(ne, null, null, Je);
      return e.elementType = "DELETED", e;
    }
    function L_(e) {
      var t = Ei(Lt, null, null, Je);
      return t.stateNode = e, t;
    }
    function uS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ei(X, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function bC(e, t) {
      return e === null && (e = Ei(he, null, null, Je)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function N_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = By, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Xn, this.eventTimes = ws(re), this.expirationTimes = ws(Cn), this.pendingLanes = re, this.suspendedLanes = re, this.pingedLanes = re, this.expiredLanes = re, this.mutableReadLanes = re, this.finishedLanes = re, this.entangledLanes = re, this.entanglements = ws(re), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ss; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case zh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case zo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function wC(e, t, a, i, u, s, f, p, v, y) {
      var E = new N_(e, t, a, p, v), D = __(t, s);
      E.current = D, D.stateNode = E;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = _;
      }
      return Eg(D), E;
    }
    var oS = "18.3.1";
    function U_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return gr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: cr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var sS, cS;
    sS = !1, cS = {};
    function xC(e) {
      if (!e)
        return Si;
      var t = Ia(e), a = mb(t);
      if (t.tag === Z) {
        var i = t.type;
        if ($l(i))
          return ZS(t, i, a);
      }
      return a;
    }
    function A_(e, t) {
      {
        var a = Ia(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Ga(a);
        if (u === null)
          return null;
        if (u.mode & At) {
          var s = Rt(a) || "Component";
          if (!cS[s]) {
            cS[s] = !0;
            var f = Mn;
            try {
              un(u), a.mode & At ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? un(f) : zn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function _C(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return wC(e, t, v, y, a, i, u, s, f);
    }
    function kC(e, t, a, i, u, s, f, p, v, y) {
      var E = !0, D = wC(a, i, E, e, u, s, f, p, v);
      D.context = xC(null);
      var _ = D.current, P = ja(), $ = Qo(_), Y = Du(P, $);
      return Y.callback = t ?? null, Fo(_, Y, $), Bx(D, $, P), D;
    }
    function Wp(e, t, a, i) {
      Td(t, e);
      var u = t.current, s = ja(), f = Qo(u);
      xd(f);
      var p = xC(a);
      t.context === null ? t.context = p : t.pendingContext = p, oa && Mn !== null && !sS && (sS = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Rt(Mn) || "Unknown"));
      var v = Du(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Fo(u, v, f);
      return y !== null && (Ur(y, u, f, s), Kh(y, u, f)), f;
    }
    function Hm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ne:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function z_(e) {
      switch (e.tag) {
        case ie: {
          var t = e.stateNode;
          if (qc(t)) {
            var a = Od(t);
            Wx(t, a);
          }
          break;
        }
        case q: {
          Uu(function() {
            var u = ai(e, at);
            if (u !== null) {
              var s = ja();
              Ur(u, e, at, s);
            }
          });
          var i = at;
          fS(e, i);
          break;
        }
      }
    }
    function OC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Gv(a.retryLane, t));
    }
    function fS(e, t) {
      OC(e, t);
      var a = e.alternate;
      a && OC(a, t);
    }
    function j_(e) {
      if (e.tag === q) {
        var t = Cs, a = ai(e, t);
        if (a !== null) {
          var i = ja();
          Ur(a, e, t, i);
        }
        fS(e, t);
      }
    }
    function P_(e) {
      if (e.tag === q) {
        var t = Qo(e), a = ai(e, t);
        if (a !== null) {
          var i = ja();
          Ur(a, e, t, i);
        }
        fS(e, t);
      }
    }
    function DC(e) {
      var t = Dv(e);
      return t === null ? null : t.stateNode;
    }
    var MC = function(e) {
      return null;
    };
    function F_(e) {
      return MC(e);
    }
    var LC = function(e) {
      return !1;
    };
    function H_(e) {
      return LC(e);
    }
    var NC = null, UC = null, AC = null, zC = null, jC = null, PC = null, FC = null, HC = null, VC = null;
    {
      var BC = function(e, t, a) {
        var i = t[a], u = Bt(e) ? e.slice() : lt({}, e);
        return a + 1 === t.length ? (Bt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = BC(e[i], t, a + 1), u);
      }, $C = function(e, t) {
        return BC(e, t, 0);
      }, IC = function(e, t, a, i) {
        var u = t[i], s = Bt(e) ? e.slice() : lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Bt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = IC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, YC = function(e, t, a) {
        if (t.length !== a.length) {
          te("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              te("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return IC(e, t, a, 0);
      }, WC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Bt(e) ? e.slice() : lt({}, e);
        return s[u] = WC(e[u], t, a + 1, i), s;
      }, QC = function(e, t, a) {
        return WC(e, t, 0, a);
      }, dS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      NC = function(e, t, a, i) {
        var u = dS(e, t);
        if (u !== null) {
          var s = QC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = ai(e, at);
          f !== null && Ur(f, e, at, Cn);
        }
      }, UC = function(e, t, a) {
        var i = dS(e, t);
        if (i !== null) {
          var u = $C(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = lt({}, e.memoizedProps);
          var s = ai(e, at);
          s !== null && Ur(s, e, at, Cn);
        }
      }, AC = function(e, t, a, i) {
        var u = dS(e, t);
        if (u !== null) {
          var s = YC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = ai(e, at);
          f !== null && Ur(f, e, at, Cn);
        }
      }, zC = function(e, t, a) {
        e.pendingProps = QC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ai(e, at);
        i !== null && Ur(i, e, at, Cn);
      }, jC = function(e, t) {
        e.pendingProps = $C(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ai(e, at);
        a !== null && Ur(a, e, at, Cn);
      }, PC = function(e, t, a) {
        e.pendingProps = YC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ai(e, at);
        i !== null && Ur(i, e, at, Cn);
      }, FC = function(e) {
        var t = ai(e, at);
        t !== null && Ur(t, e, at, Cn);
      }, HC = function(e) {
        MC = e;
      }, VC = function(e) {
        LC = e;
      };
    }
    function V_(e) {
      var t = Ga(e);
      return t === null ? null : t.stateNode;
    }
    function B_(e) {
      return null;
    }
    function $_() {
      return Mn;
    }
    function I_(e) {
      var t = e.findFiberByHostInstance, a = b.ReactCurrentDispatcher;
      return Rd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: NC,
        overrideHookStateDeletePath: UC,
        overrideHookStateRenamePath: AC,
        overrideProps: zC,
        overridePropsDeletePath: jC,
        overridePropsRenamePath: PC,
        setErrorHandler: HC,
        setSuspenseHandler: VC,
        scheduleUpdate: FC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: V_,
        findFiberByHostInstance: t || B_,
        // React Refresh
        findHostInstancesForRefresh: E_,
        scheduleRefresh: g_,
        scheduleRoot: S_,
        setRefreshHandler: y_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: $_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: oS
      });
    }
    var GC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function pS(e) {
      this._internalRoot = e;
    }
    Vm.prototype.render = pS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Bm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Gn) {
          var i = DC(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Vm.prototype.unmount = pS.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        lC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Wp(null, e, null, null);
        }), GS(t);
      }
    };
    function Y_(e, t) {
      if (!Bm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      qC(e);
      var a = !1, i = !1, u = "", s = GC;
      t != null && (t.hydrate ? te("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ua && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = _C(e, zh, null, a, i, u, s);
      Oh(f.current, e);
      var p = e.nodeType === Gn ? e.parentNode : e;
      return Jd(p), new pS(f);
    }
    function Vm(e) {
      this._internalRoot = e;
    }
    function W_(e) {
      e && hy(e);
    }
    Vm.prototype.unstable_scheduleHydration = W_;
    function Q_(e, t, a) {
      if (!Bm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      qC(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = GC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = kC(t, null, e, zh, i, s, f, p, v);
      if (Oh(y.current, e), Jd(e), u)
        for (var E = 0; E < u.length; E++) {
          var D = u[E];
          Kb(y, D);
        }
      return new Vm(y);
    }
    function Bm(e) {
      return !!(e && (e.nodeType === ca || e.nodeType === hi || e.nodeType === tu || !x));
    }
    function Qp(e) {
      return !!(e && (e.nodeType === ca || e.nodeType === hi || e.nodeType === tu || e.nodeType === Gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function qC(e) {
      e.nodeType === ca && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var G_ = b.ReactCurrentOwner, XC;
    XC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Gn) {
        var t = DC(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = vS(e), u = !!(i && Uo(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ca && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function vS(e) {
      return e ? e.nodeType === hi ? e.documentElement : e.firstChild : null;
    }
    function KC() {
    }
    function q_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = Hm(f);
            s.call(_);
          };
        }
        var f = kC(
          t,
          i,
          e,
          zo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          KC
        );
        e._reactRootContainer = f, Oh(f.current, e);
        var p = e.nodeType === Gn ? e.parentNode : e;
        return Jd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var _ = Hm(E);
            y.call(_);
          };
        }
        var E = _C(
          e,
          zo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          KC
        );
        e._reactRootContainer = E, Oh(E.current, e);
        var D = e.nodeType === Gn ? e.parentNode : e;
        return Jd(D), Uu(function() {
          Wp(t, E, a, i);
        }), E;
      }
    }
    function X_(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $m(e, t, a, i, u) {
      XC(a), X_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = q_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Hm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return Hm(f);
    }
    var JC = !1;
    function K_(e) {
      {
        JC || (JC = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = G_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Vt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ca ? e : A_(e, "findDOMNode");
    }
    function J_(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $m(null, e, t, !0, a);
    }
    function Z_(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $m(null, e, t, !1, a);
    }
    function ek(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ds(e))
        throw new Error("parentComponent must be a valid React Component");
      return $m(e, t, a, !1, i);
    }
    var ZC = !1;
    function tk(e) {
      if (ZC || (ZC = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = vS(e), i = a && !Uo(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          $m(null, null, e, !1, function() {
            e._reactRootContainer = null, GS(e);
          });
        }), !0;
      } else {
        {
          var u = vS(e), s = !!(u && Uo(u)), f = e.nodeType === ca && Qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Eo(z_), py(j_), Kc(P_), Kv(Ja), Jv($r), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), _v(rT), vc(Y0, Qx, Uu);
    function nk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Bm(t))
        throw new Error("Target container is not a DOM element.");
      return U_(e, t, null, a);
    }
    function rk(e, t, a, i) {
      return ek(e, t, a, i);
    }
    var hS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Uo, Cf, Dh, pc, ss, Y0]
    };
    function ak(e, t) {
      return hS.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Y_(e, t);
    }
    function ik(e, t, a) {
      return hS.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Q_(e, t, a);
    }
    function lk(e) {
      return lC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var uk = I_({
      findFiberByHostInstance: Fs,
      bundleType: 1,
      version: oS,
      rendererPackageName: "react-dom"
    });
    if (!uk && gt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var eR = window.location.protocol;
      /^(https?|file):$/.test(eR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (eR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hS, si.createPortal = nk, si.createRoot = ak, si.findDOMNode = K_, si.flushSync = lk, si.hydrate = J_, si.hydrateRoot = ik, si.render = Z_, si.unmountComponentAtNode = tk, si.unstable_batchedUpdates = Y0, si.unstable_renderSubtreeIntoContainer = rk, si.version = oS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), si;
}
function pR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pR);
    } catch (z) {
      console.error(z);
    }
  }
}
process.env.NODE_ENV === "production" ? (pR(), SS.exports = Sk()) : SS.exports = Ek();
var Ck = SS.exports, Kp = Ck;
if (process.env.NODE_ENV === "production")
  Zp.createRoot = Kp.createRoot, Zp.hydrateRoot = Kp.hydrateRoot;
else {
  var Wm = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Zp.createRoot = function(z, H) {
    Wm.usingClientEntryPoint = !0;
    try {
      return Kp.createRoot(z, H);
    } finally {
      Wm.usingClientEntryPoint = !1;
    }
  }, Zp.hydrateRoot = function(z, H, b) {
    Wm.usingClientEntryPoint = !0;
    try {
      return Kp.hydrateRoot(z, H, b);
    } finally {
      Wm.usingClientEntryPoint = !1;
    }
  };
}
var ml = ev();
const Wk = /* @__PURE__ */ fR(ml), Qk = [
  {
    label: "sphere",
    cover: "models/sphere/cover.jpeg",
    glb: "models/sphere/scene.glb",
    mapScale: 36,
    // 貼圖比例（從原專案複製)
    maxScale: 33.22,
    // 最大縮放比例
    minScale: 1
    // 最小縮放比例
  },
  {
    label: "tshirt",
    cover: "models/tshirt/cover.jpeg",
    glb: "models/tshirt/scene.glb",
    mapScale: 26,
    maxScale: 23.99,
    minScale: 2
  },
  {
    label: "jacket",
    cover: "models/jacket/cover.jpeg",
    glb: "models/jacket/scene.glb",
    mapScale: 46,
    maxScale: 42.45,
    minScale: 2
  },
  {
    label: "shirt",
    cover: "models/shirt/cover.jpeg",
    glb: "models/shirt/scene.glb",
    mapScale: 36,
    maxScale: 33.22,
    minScale: 2
  },
  {
    label: "pants",
    cover: "models/pants/cover.jpeg",
    glb: "models/pants/scene.glb",
    mapScale: 41,
    maxScale: 37.83,
    minScale: 2
  },
  {
    label: "dress",
    cover: "models/dress/cover.jpeg",
    glb: "models/dress/scene.glb",
    mapScale: 6,
    maxScale: 5.54,
    minScale: 0.3
  },
  {
    label: "leggings",
    cover: "models/leggings/cover.jpeg",
    glb: "models/leggings/scene.glb",
    mapScale: 64,
    maxScale: 59.06,
    minScale: 2
  },
  {
    label: "backpack",
    cover: "models/backpack/cover.jpeg",
    glb: "models/backpack/scene.glb",
    mapScale: 2,
    maxScale: 1.85,
    minScale: 0.2
  },
  {
    label: "shoe",
    cover: "models/shoe/cover.jpeg",
    glb: "models/shoe/scene.glb",
    mapScale: 10,
    maxScale: 9.23,
    minScale: 1
  }
], vR = { defaultValue: "#ffffff", value: "#ffffff" }, Rk = [
  { name: "alpha", defaultValue: 1, value: 1, min: 0, max: 1 },
  { name: "roughness", defaultValue: 0.8, value: 0.8, min: 0, max: 1 },
  { name: "specular", defaultValue: 0.05, value: 0.05, min: 0, max: 1 },
  { name: "scaleSize", defaultValue: 0.5, value: 0.5, min: 0, max: 1 },
  { name: "rotationX", defaultValue: 0, value: 0, min: 0, max: 360 },
  { name: "rotationY", defaultValue: 0, value: 0, min: 0, max: 360 }
], hR = {
  base: "",
  alpha: "",
  bump: "",
  roughImgUrl: "",
  dispImgUrl: "",
  normalImgUrl: "",
  bumpScale: 0.05,
  defaultMapScale: 15,
  mapScale: 15,
  dpi: 600,
  normalScale: 0.5
}, mR = {
  alpha: "Alpha",
  roughness: "Roughness",
  specular: "Specular",
  scaleSize: "Scale size",
  rotationX: "Rotation X",
  rotationY: "Rotation Y",
  "3dViewer": "3d viewer",
  environmentMapping: "Environment Mapping",
  "3dViewerEditor": "3D viewer editor",
  mappingVisibility: "Mapping Visibility",
  enterPantone: "Enter a Pantone#",
  screenshot: "Screenshot",
  exit: "Exit",
  removeColor: "Remove Color",
  addColor: "Add Color",
  colorEditor: "color editor",
  temperature: "Color Temperature"
}, Tk = [
  {
    type: "model",
    uri: "/3d-viewer/panorama/ground.png",
    name: "Default"
  },
  {
    type: "image",
    uri: "/3d-viewer/panorama/studio.jpg",
    name: "Studio"
  },
  {
    type: "image",
    uri: "/3d-viewer/panorama/outdoor.jpg",
    name: "Outdoor"
  }
], bk = [
  { name: "Day Light", value: 6500 },
  { name: "Sunset", value: 3500 },
  { name: "Candle Light", value: 2e3 }
], Gk = 1;
var Yn = /* @__PURE__ */ ((z) => (z.Active = "active", z.View3DEvents = "view3DEvents", z.Display = "display", z.ModelPicker = "modelPicker", z.ImagePicker = "imagePicker", z.GUI_Slider = "guiSlider", z.GUI_Color = "guiColor", z.GUI_Panorama = "guiPanorama", z.GUI_temperature = "guiTemperature", z.UserProps = "userProps", z.DiffuseColor = "diffuseColor", z.WebGL = "webgl", z.LoadingProcess = "loadingProcess", z))(Yn || {}), yR = /* @__PURE__ */ ((z) => (z.Ball = "balls", z.Bars = "bars", z.Bubbles = "bubbles", z.Cubes = "cubes", z.Cylon = "cylon", z.Spin = "spin", z.SpinningBubbles = "spinningBubbles", z.Spokes = "spokes", z))(yR || {}), gR = /* @__PURE__ */ ((z) => (z[z["2D"] = 1] = "2D", z[z["3D"] = 2] = "3D", z))(gR || {});
const wk = {
  enabled: !0,
  type: yR.Spin,
  body: ""
}, xk = {
  data: Rk
}, _k = {
  data: [{ ...vR }]
}, kk = {
  name: "environmentMapping",
  index: 0,
  data: Tk,
  toggle: {
    name: "mappingVisibility",
    visible: !0
  }
}, Ok = {
  name: "temperature",
  index: 0,
  data: bk
}, SR = {
  [Yn.Active]: !1,
  [Yn.View3DEvents]: null,
  [Yn.Display]: gR["3D"],
  [Yn.ModelPicker]: 0,
  [Yn.ImagePicker]: "base",
  [Yn.GUI_Slider]: xk,
  [Yn.GUI_Color]: _k,
  [Yn.GUI_Panorama]: kk,
  [Yn.GUI_temperature]: Ok,
  [Yn.LoadingProcess]: wk,
  [Yn.UserProps]: null,
  [Yn.DiffuseColor]: vR.defaultValue,
  [Yn.WebGL]: !1
}, ER = ml.createContext([SR, () => {
}]), Dk = (z, H) => {
  if (H.state instanceof Object) {
    let b = {};
    return Object.entries(H.state).filter((Ce) => !!(Object.values(Yn).filter(
      (te) => te === Ce[0]
    ).length > 0 || H.type)).map((Ce) => Object.values(Yn).filter(
      (te) => te === Ce[0]
    ).length > 0 ? Ce : [H.type, Object.fromEntries([Ce])]).forEach((Ce) => {
      if (Ce) {
        const [oe, te] = Ce, g = String(oe), Ve = Object.fromEntries(
          Object.entries(z).filter((Q) => Q[0] === g)
        )[H.type];
        Object.prototype.hasOwnProperty.call(b, g) ? b = {
          [g]: { ...b[g], ...te }
        } : b = { [g]: { ...Ve, ...te } };
      }
    }), { ...z, ...b };
  }
  return H.type ? { ...z, [H.type]: H.state } : z;
}, Mk = console.error;
console.error = (...z) => {
  /defaultProps/.test(z[0]) || Mk(...z);
};
const Lk = console.warn;
console.warn = (...z) => {
  /Three.js/.test(z[0]) || Lk(...z);
};
var CR = { exports: {} };
(function(z, H) {
  (function(Ce, oe) {
    z.exports = oe();
  })(typeof self < "u" ? self : dk, function() {
    return (
      /******/
      function(b) {
        var Ce = {};
        function oe(te) {
          if (Ce[te])
            return Ce[te].exports;
          var g = Ce[te] = {
            /******/
            i: te,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return b[te].call(g.exports, g, g.exports, oe), g.l = !0, g.exports;
        }
        return oe.m = b, oe.c = Ce, oe.d = function(te, g, Ve) {
          oe.o(te, g) || Object.defineProperty(te, g, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: Ve
            /******/
          });
        }, oe.n = function(te) {
          var g = te && te.__esModule ? (
            /******/
            function() {
              return te.default;
            }
          ) : (
            /******/
            function() {
              return te;
            }
          );
          return oe.d(g, "a", g), g;
        }, oe.o = function(te, g) {
          return Object.prototype.hasOwnProperty.call(te, g);
        }, oe.p = "/", oe(oe.s = 7);
      }([
        /* 0 */
        /***/
        function(b, Ce, oe) {
          var te = function(Q) {
          };
          process.env.NODE_ENV !== "production" && (te = function(Q) {
            if (Q === void 0)
              throw new Error("invariant requires an error message argument");
          });
          function g(Ve, Q, Z, he, ie, X, ne, Te) {
            if (te(Q), !Ve) {
              var xe;
              if (Q === void 0)
                xe = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              else {
                var Ye = [Z, he, ie, X, ne, Te], mt = 0;
                xe = new Error(Q.replace(/%s/g, function() {
                  return Ye[mt++];
                })), xe.name = "Invariant Violation";
              }
              throw xe.framesToPop = 1, xe;
            }
          }
          b.exports = g;
        },
        /* 1 */
        /***/
        function(b, Ce, oe) {
          function te(Ve) {
            return function() {
              return Ve;
            };
          }
          var g = function() {
          };
          g.thatReturns = te, g.thatReturnsFalse = te(!1), g.thatReturnsTrue = te(!0), g.thatReturnsNull = te(null), g.thatReturnsThis = function() {
            return this;
          }, g.thatReturnsArgument = function(Ve) {
            return Ve;
          }, b.exports = g;
        },
        /* 2 */
        /***/
        function(b, Ce, oe) {
          /*
          object-assign
          (c) Sindre Sorhus
          @license MIT
          */
          var te = Object.getOwnPropertySymbols, g = Object.prototype.hasOwnProperty, Ve = Object.prototype.propertyIsEnumerable;
          function Q(he) {
            if (he == null)
              throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(he);
          }
          function Z() {
            try {
              if (!Object.assign)
                return !1;
              var he = new String("abc");
              if (he[5] = "de", Object.getOwnPropertyNames(he)[0] === "5")
                return !1;
              for (var ie = {}, X = 0; X < 10; X++)
                ie["_" + String.fromCharCode(X)] = X;
              var ne = Object.getOwnPropertyNames(ie).map(function(xe) {
                return ie[xe];
              });
              if (ne.join("") !== "0123456789")
                return !1;
              var Te = {};
              return "abcdefghijklmnopqrst".split("").forEach(function(xe) {
                Te[xe] = xe;
              }), Object.keys(Object.assign({}, Te)).join("") === "abcdefghijklmnopqrst";
            } catch {
              return !1;
            }
          }
          b.exports = Z() ? Object.assign : function(he, ie) {
            for (var X, ne = Q(he), Te, xe = 1; xe < arguments.length; xe++) {
              X = Object(arguments[xe]);
              for (var Ye in X)
                g.call(X, Ye) && (ne[Ye] = X[Ye]);
              if (te) {
                Te = te(X);
                for (var mt = 0; mt < Te.length; mt++)
                  Ve.call(X, Te[mt]) && (ne[Te[mt]] = X[Te[mt]]);
              }
            }
            return ne;
          };
        },
        /* 3 */
        /***/
        function(b, Ce, oe) {
          var te = oe(1), g = te;
          if (process.env.NODE_ENV !== "production") {
            var Ve = function(Z) {
              for (var he = arguments.length, ie = Array(he > 1 ? he - 1 : 0), X = 1; X < he; X++)
                ie[X - 1] = arguments[X];
              var ne = 0, Te = "Warning: " + Z.replace(/%s/g, function() {
                return ie[ne++];
              });
              typeof console < "u" && console.error(Te);
              try {
                throw new Error(Te);
              } catch {
              }
            };
            g = function(Z, he) {
              if (he === void 0)
                throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
              if (he.indexOf("Failed Composite propType: ") !== 0 && !Z) {
                for (var ie = arguments.length, X = Array(ie > 2 ? ie - 2 : 0), ne = 2; ne < ie; ne++)
                  X[ne - 2] = arguments[ne];
                Ve.apply(void 0, [he].concat(X));
              }
            };
          }
          b.exports = g;
        },
        /* 4 */
        /***/
        function(b, Ce, oe) {
          var te = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          b.exports = te;
        },
        /* 5 */
        /***/
        function(b, Ce, oe) {
          var te = {};
          process.env.NODE_ENV !== "production" && Object.freeze(te), b.exports = te;
        },
        /* 6 */
        /***/
        function(b, Ce, oe) {
          if (process.env.NODE_ENV !== "production")
            var te = oe(0), g = oe(3), Ve = oe(4), Q = {};
          function Z(he, ie, X, ne, Te) {
            if (process.env.NODE_ENV !== "production") {
              for (var xe in he)
                if (he.hasOwnProperty(xe)) {
                  var Ye;
                  try {
                    te(typeof he[xe] == "function", "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", ne || "React class", X, xe, typeof he[xe]), Ye = he[xe](ie, xe, ne, X, null, Ve);
                  } catch (ct) {
                    Ye = ct;
                  }
                  if (g(!Ye || Ye instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", X, xe, typeof Ye), Ye instanceof Error && !(Ye.message in Q)) {
                    Q[Ye.message] = !0;
                    var mt = Te ? Te() : "";
                    g(!1, "Failed %s type: %s%s", X, Ye.message, mt ?? "");
                  }
                }
            }
          }
          b.exports = Z;
        },
        /* 7 */
        /***/
        function(b, Ce, oe) {
          Object.defineProperty(Ce, "__esModule", {
            value: !0
          });
          var te = Object.assign || function(me) {
            for (var q = 1; q < arguments.length; q++) {
              var je = arguments[q];
              for (var ge in je)
                Object.prototype.hasOwnProperty.call(je, ge) && (me[ge] = je[ge]);
            }
            return me;
          }, g = /* @__PURE__ */ function() {
            function me(q, je) {
              for (var ge = 0; ge < je.length; ge++) {
                var vt = je[ge];
                vt.enumerable = vt.enumerable || !1, vt.configurable = !0, "value" in vt && (vt.writable = !0), Object.defineProperty(q, vt.key, vt);
              }
            }
            return function(q, je, ge) {
              return je && me(q.prototype, je), ge && me(q, ge), q;
            };
          }(), Ve = oe(8), Q = Te(Ve), Z = oe(11), he = Te(Z), ie = oe(14), X = ne(ie);
          function ne(me) {
            if (me && me.__esModule)
              return me;
            var q = {};
            if (me != null)
              for (var je in me)
                Object.prototype.hasOwnProperty.call(me, je) && (q[je] = me[je]);
            return q.default = me, q;
          }
          function Te(me) {
            return me && me.__esModule ? me : { default: me };
          }
          function xe(me, q) {
            var je = {};
            for (var ge in me)
              q.indexOf(ge) >= 0 || Object.prototype.hasOwnProperty.call(me, ge) && (je[ge] = me[ge]);
            return je;
          }
          function Ye(me, q) {
            if (!(me instanceof q))
              throw new TypeError("Cannot call a class as a function");
          }
          function mt(me, q) {
            if (!me)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return q && (typeof q == "object" || typeof q == "function") ? q : me;
          }
          function ct(me, q) {
            if (typeof q != "function" && q !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof q);
            me.prototype = Object.create(q && q.prototype, { constructor: { value: me, enumerable: !1, writable: !0, configurable: !0 } }), q && (Object.setPrototypeOf ? Object.setPrototypeOf(me, q) : me.__proto__ = q);
          }
          var Ne = function(me) {
            ct(q, me);
            function q() {
              var je, ge, vt, jt;
              Ye(this, q);
              for (var Lt = arguments.length, wt = Array(Lt), Pt = 0; Pt < Lt; Pt++)
                wt[Pt] = arguments[Pt];
              return jt = (ge = (vt = mt(this, (je = q.__proto__ || Object.getPrototypeOf(q)).call.apply(je, [this].concat(wt))), vt), vt.state = {
                delayed: vt.props.delay > 0
              }, ge), mt(vt, jt);
            }
            return g(q, [{
              key: "componentDidMount",
              value: function() {
                var ge = this, vt = this.props.delay, jt = this.state.delayed;
                jt && (this.timeout = setTimeout(function() {
                  ge.setState({
                    delayed: !1
                  });
                }, vt));
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                var ge = this.timeout;
                ge && clearTimeout(ge);
              }
            }, {
              key: "render",
              value: function() {
                var ge = this.props, vt = ge.color;
                ge.delay;
                var jt = ge.type, Lt = ge.height, wt = ge.width, Pt = xe(ge, ["color", "delay", "type", "height", "width"]), qe = this.state.delayed ? "blank" : jt, ot = X[qe], Nt = {
                  fill: vt,
                  height: Lt,
                  width: wt
                };
                return Q.default.createElement("div", te({
                  style: Nt,
                  dangerouslySetInnerHTML: { __html: ot }
                }, Pt));
              }
            }]), q;
          }(Ve.Component);
          Ne.propTypes = {
            color: he.default.string,
            delay: he.default.number,
            type: he.default.string,
            height: he.default.oneOfType([he.default.string, he.default.number]),
            width: he.default.oneOfType([he.default.string, he.default.number])
          }, Ne.defaultProps = {
            color: "#fff",
            delay: 0,
            type: "balls",
            height: 64,
            width: 64
          }, Ce.default = Ne;
        },
        /* 8 */
        /***/
        function(b, Ce, oe) {
          process.env.NODE_ENV === "production" ? b.exports = oe(9) : b.exports = oe(10);
        },
        /* 9 */
        /***/
        function(b, Ce, oe) {
          /** @license React v16.3.2
           * react.production.min.js
           *
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
          var te = oe(2), g = oe(0), Ve = oe(5), Q = oe(1), Z = typeof Symbol == "function" && Symbol.for, he = Z ? Symbol.for("react.element") : 60103, ie = Z ? Symbol.for("react.portal") : 60106, X = Z ? Symbol.for("react.fragment") : 60107, ne = Z ? Symbol.for("react.strict_mode") : 60108, Te = Z ? Symbol.for("react.provider") : 60109, xe = Z ? Symbol.for("react.context") : 60110, Ye = Z ? Symbol.for("react.async_mode") : 60111, mt = Z ? Symbol.for("react.forward_ref") : 60112, ct = typeof Symbol == "function" && Symbol.iterator;
          function Ne(k) {
            for (var B = arguments.length - 1, ee = "http://reactjs.org/docs/error-decoder.html?invariant=" + k, se = 0; se < B; se++)
              ee += "&args[]=" + encodeURIComponent(arguments[se + 1]);
            g(!1, "Minified React error #" + k + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", ee);
          }
          var me = { isMounted: function() {
            return !1;
          }, enqueueForceUpdate: function() {
          }, enqueueReplaceState: function() {
          }, enqueueSetState: function() {
          } };
          function q(k, B, ee) {
            this.props = k, this.context = B, this.refs = Ve, this.updater = ee || me;
          }
          q.prototype.isReactComponent = {}, q.prototype.setState = function(k, B) {
            typeof k != "object" && typeof k != "function" && k != null && Ne("85"), this.updater.enqueueSetState(this, k, B, "setState");
          }, q.prototype.forceUpdate = function(k) {
            this.updater.enqueueForceUpdate(this, k, "forceUpdate");
          };
          function je() {
          }
          je.prototype = q.prototype;
          function ge(k, B, ee) {
            this.props = k, this.context = B, this.refs = Ve, this.updater = ee || me;
          }
          var vt = ge.prototype = new je();
          vt.constructor = ge, te(vt, q.prototype), vt.isPureReactComponent = !0;
          var jt = { current: null }, Lt = Object.prototype.hasOwnProperty, wt = { key: !0, ref: !0, __self: !0, __source: !0 };
          function Pt(k, B, ee) {
            var se = void 0, ke = {}, et = null, gt = null;
            if (B != null)
              for (se in B.ref !== void 0 && (gt = B.ref), B.key !== void 0 && (et = "" + B.key), B)
                Lt.call(B, se) && !wt.hasOwnProperty(se) && (ke[se] = B[se]);
            var St = arguments.length - 2;
            if (St === 1)
              ke.children = ee;
            else if (1 < St) {
              for (var nn = Array(St), qt = 0; qt < St; qt++)
                nn[qt] = arguments[qt + 2];
              ke.children = nn;
            }
            if (k && k.defaultProps)
              for (se in St = k.defaultProps, St)
                ke[se] === void 0 && (ke[se] = St[se]);
            return { $$typeof: he, type: k, key: et, ref: gt, props: ke, _owner: jt.current };
          }
          function qe(k) {
            return typeof k == "object" && k !== null && k.$$typeof === he;
          }
          function ot(k) {
            var B = { "=": "=0", ":": "=2" };
            return "$" + ("" + k).replace(/[=:]/g, function(ee) {
              return B[ee];
            });
          }
          var Nt = /\/+/g, ft = [];
          function Ae(k, B, ee, se) {
            if (ft.length) {
              var ke = ft.pop();
              return ke.result = k, ke.keyPrefix = B, ke.func = ee, ke.context = se, ke.count = 0, ke;
            }
            return { result: k, keyPrefix: B, func: ee, context: se, count: 0 };
          }
          function ce(k) {
            k.result = null, k.keyPrefix = null, k.func = null, k.context = null, k.count = 0, 10 > ft.length && ft.push(k);
          }
          function Pe(k, B, ee, se) {
            var ke = typeof k;
            (ke === "undefined" || ke === "boolean") && (k = null);
            var et = !1;
            if (k === null)
              et = !0;
            else
              switch (ke) {
                case "string":
                case "number":
                  et = !0;
                  break;
                case "object":
                  switch (k.$$typeof) {
                    case he:
                    case ie:
                      et = !0;
                  }
              }
            if (et)
              return ee(se, k, B === "" ? "." + be(k, 0) : B), 1;
            if (et = 0, B = B === "" ? "." : B + ":", Array.isArray(k))
              for (var gt = 0; gt < k.length; gt++) {
                ke = k[gt];
                var St = B + be(ke, gt);
                et += Pe(ke, St, ee, se);
              }
            else if (k === null || typeof k > "u" ? St = null : (St = ct && k[ct] || k["@@iterator"], St = typeof St == "function" ? St : null), typeof St == "function")
              for (k = St.call(k), gt = 0; !(ke = k.next()).done; )
                ke = ke.value, St = B + be(ke, gt++), et += Pe(ke, St, ee, se);
            else
              ke === "object" && (ee = "" + k, Ne("31", ee === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : ee, ""));
            return et;
          }
          function be(k, B) {
            return typeof k == "object" && k !== null && k.key != null ? ot(k.key) : B.toString(36);
          }
          function L(k, B) {
            k.func.call(k.context, B, k.count++);
          }
          function x(k, B, ee) {
            var se = k.result, ke = k.keyPrefix;
            k = k.func.call(k.context, B, k.count++), Array.isArray(k) ? J(k, se, ee, Q.thatReturnsArgument) : k != null && (qe(k) && (B = ke + (!k.key || B && B.key === k.key ? "" : ("" + k.key).replace(Nt, "$&/") + "/") + ee, k = { $$typeof: he, type: k.type, key: B, ref: k.ref, props: k.props, _owner: k._owner }), se.push(k));
          }
          function J(k, B, ee, se, ke) {
            var et = "";
            ee != null && (et = ("" + ee).replace(Nt, "$&/") + "/"), B = Ae(B, et, se, ke), k == null || Pe(k, "", x, B), ce(B);
          }
          var Se = { Children: { map: function(k, B, ee) {
            if (k == null)
              return k;
            var se = [];
            return J(k, se, null, B, ee), se;
          }, forEach: function(k, B, ee) {
            if (k == null)
              return k;
            B = Ae(null, null, B, ee), k == null || Pe(k, "", L, B), ce(B);
          }, count: function(k) {
            return k == null ? 0 : Pe(k, "", Q.thatReturnsNull, null);
          }, toArray: function(k) {
            var B = [];
            return J(k, B, null, Q.thatReturnsArgument), B;
          }, only: function(k) {
            return qe(k) || Ne("143"), k;
          } }, createRef: function() {
            return { current: null };
          }, Component: q, PureComponent: ge, createContext: function(k, B) {
            return B === void 0 && (B = null), k = {
              $$typeof: xe,
              _calculateChangedBits: B,
              _defaultValue: k,
              _currentValue: k,
              _changedBits: 0,
              Provider: null,
              Consumer: null
            }, k.Provider = { $$typeof: Te, _context: k }, k.Consumer = k;
          }, forwardRef: function(k) {
            return { $$typeof: mt, render: k };
          }, Fragment: X, StrictMode: ne, unstable_AsyncMode: Ye, createElement: Pt, cloneElement: function(k, B, ee) {
            k == null && Ne("267", k);
            var se = void 0, ke = te({}, k.props), et = k.key, gt = k.ref, St = k._owner;
            if (B != null) {
              B.ref !== void 0 && (gt = B.ref, St = jt.current), B.key !== void 0 && (et = "" + B.key);
              var nn = void 0;
              k.type && k.type.defaultProps && (nn = k.type.defaultProps);
              for (se in B)
                Lt.call(B, se) && !wt.hasOwnProperty(se) && (ke[se] = B[se] === void 0 && nn !== void 0 ? nn[se] : B[se]);
            }
            if (se = arguments.length - 2, se === 1)
              ke.children = ee;
            else if (1 < se) {
              nn = Array(se);
              for (var qt = 0; qt < se; qt++)
                nn[qt] = arguments[qt + 2];
              ke.children = nn;
            }
            return { $$typeof: he, type: k.type, key: et, ref: gt, props: ke, _owner: St };
          }, createFactory: function(k) {
            var B = Pt.bind(null, k);
            return B.type = k, B;
          }, isValidElement: qe, version: "16.3.2", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: jt, assign: te } }, Oe = Object.freeze({ default: Se }), _e = Oe && Se || Oe;
          b.exports = _e.default ? _e.default : _e;
        },
        /* 10 */
        /***/
        function(b, Ce, oe) {
          /** @license React v16.3.2
           * react.development.js
           *
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
          process.env.NODE_ENV !== "production" && function() {
            var te = oe(2), g = oe(0), Ve = oe(5), Q = oe(3), Z = oe(1), he = oe(6), ie = "16.3.2", X = typeof Symbol == "function" && Symbol.for, ne = X ? Symbol.for("react.element") : 60103, Te = X ? Symbol.for("react.call") : 60104, xe = X ? Symbol.for("react.return") : 60105, Ye = X ? Symbol.for("react.portal") : 60106, mt = X ? Symbol.for("react.fragment") : 60107, ct = X ? Symbol.for("react.strict_mode") : 60108, Ne = X ? Symbol.for("react.provider") : 60109, me = X ? Symbol.for("react.context") : 60110, q = X ? Symbol.for("react.async_mode") : 60111, je = X ? Symbol.for("react.forward_ref") : 60112, ge = typeof Symbol == "function" && Symbol.iterator, vt = "@@iterator";
            function jt(S) {
              if (S === null || typeof S > "u")
                return null;
              var M = ge && S[ge] || S[vt];
              return typeof M == "function" ? M : null;
            }
            var Lt = function() {
            };
            {
              var wt = function(S) {
                for (var M = arguments.length, K = Array(M > 1 ? M - 1 : 0), ae = 1; ae < M; ae++)
                  K[ae - 1] = arguments[ae];
                var Re = 0, xt = "Warning: " + S.replace(/%s/g, function() {
                  return K[Re++];
                });
                typeof console < "u" && console.warn(xt);
                try {
                  throw new Error(xt);
                } catch {
                }
              };
              Lt = function(S, M) {
                if (M === void 0)
                  throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                if (!S) {
                  for (var K = arguments.length, ae = Array(K > 2 ? K - 2 : 0), Re = 2; Re < K; Re++)
                    ae[Re - 2] = arguments[Re];
                  wt.apply(void 0, [M].concat(ae));
                }
              };
            }
            var Pt = Lt, qe = {};
            function ot(S, M) {
              {
                var K = S.constructor, ae = K && (K.displayName || K.name) || "ReactClass", Re = ae + "." + M;
                if (qe[Re])
                  return;
                Q(!1, "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", M, ae), qe[Re] = !0;
              }
            }
            var Nt = {
              /**
               * Checks whether or not this composite component is mounted.
               * @param {ReactClass} publicInstance The instance we want to test.
               * @return {boolean} True if mounted, false otherwise.
               * @protected
               * @final
               */
              isMounted: function(S) {
                return !1;
              },
              /**
               * Forces an update. This should only be invoked when it is known with
               * certainty that we are **not** in a DOM transaction.
               *
               * You may want to call this when you know that some deeper aspect of the
               * component's state has changed but `setState` was not called.
               *
               * This will not invoke `shouldComponentUpdate`, but it will invoke
               * `componentWillUpdate` and `componentDidUpdate`.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {?function} callback Called after component is updated.
               * @param {?string} callerName name of the calling function in the public API.
               * @internal
               */
              enqueueForceUpdate: function(S, M, K) {
                ot(S, "forceUpdate");
              },
              /**
               * Replaces all of the state. Always use this or `setState` to mutate state.
               * You should treat `this.state` as immutable.
               *
               * There is no guarantee that `this.state` will be immediately updated, so
               * accessing `this.state` after calling this method may return the old value.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {object} completeState Next state.
               * @param {?function} callback Called after component is updated.
               * @param {?string} callerName name of the calling function in the public API.
               * @internal
               */
              enqueueReplaceState: function(S, M, K, ae) {
                ot(S, "replaceState");
              },
              /**
               * Sets a subset of the state. This only exists because _pendingState is
               * internal. This provides a merging strategy that is not available to deep
               * properties which is confusing. TODO: Expose pendingState or don't use it
               * during the merge.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {object} partialState Next partial state to be merged with state.
               * @param {?function} callback Called after component is updated.
               * @param {?string} Name of the calling function in the public API.
               * @internal
               */
              enqueueSetState: function(S, M, K, ae) {
                ot(S, "setState");
              }
            };
            function ft(S, M, K) {
              this.props = S, this.context = M, this.refs = Ve, this.updater = K || Nt;
            }
            ft.prototype.isReactComponent = {}, ft.prototype.setState = function(S, M) {
              typeof S == "object" || typeof S == "function" || S == null || g(!1, "setState(...): takes an object of state variables to update or a function which returns an object of state variables."), this.updater.enqueueSetState(this, S, M, "setState");
            }, ft.prototype.forceUpdate = function(S) {
              this.updater.enqueueForceUpdate(this, S, "forceUpdate");
            };
            {
              var Ae = {
                isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
                replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
              }, ce = function(S, M) {
                Object.defineProperty(ft.prototype, S, {
                  get: function() {
                    Pt(!1, "%s(...) is deprecated in plain JavaScript React classes. %s", M[0], M[1]);
                  }
                });
              };
              for (var Pe in Ae)
                Ae.hasOwnProperty(Pe) && ce(Pe, Ae[Pe]);
            }
            function be() {
            }
            be.prototype = ft.prototype;
            function L(S, M, K) {
              this.props = S, this.context = M, this.refs = Ve, this.updater = K || Nt;
            }
            var x = L.prototype = new be();
            x.constructor = L, te(x, ft.prototype), x.isPureReactComponent = !0;
            function J() {
              var S = {
                current: null
              };
              return Object.seal(S), S;
            }
            var Se = {
              /**
               * @internal
               * @type {ReactComponent}
               */
              current: null
            }, Oe = Object.prototype.hasOwnProperty, _e = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0
            }, k = void 0, B = void 0;
            function ee(S) {
              if (Oe.call(S, "ref")) {
                var M = Object.getOwnPropertyDescriptor(S, "ref").get;
                if (M && M.isReactWarning)
                  return !1;
              }
              return S.ref !== void 0;
            }
            function se(S) {
              if (Oe.call(S, "key")) {
                var M = Object.getOwnPropertyDescriptor(S, "key").get;
                if (M && M.isReactWarning)
                  return !1;
              }
              return S.key !== void 0;
            }
            function ke(S, M) {
              var K = function() {
                k || (k = !0, Q(!1, "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", M));
              };
              K.isReactWarning = !0, Object.defineProperty(S, "key", {
                get: K,
                configurable: !0
              });
            }
            function et(S, M) {
              var K = function() {
                B || (B = !0, Q(!1, "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", M));
              };
              K.isReactWarning = !0, Object.defineProperty(S, "ref", {
                get: K,
                configurable: !0
              });
            }
            var gt = function(S, M, K, ae, Re, xt, Mt) {
              var $e = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: ne,
                // Built-in properties that belong on the element
                type: S,
                key: M,
                ref: K,
                props: Mt,
                // Record the component responsible for creating this element.
                _owner: xt
              };
              return $e._store = {}, Object.defineProperty($e._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1
              }), Object.defineProperty($e, "_self", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: ae
              }), Object.defineProperty($e, "_source", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: Re
              }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
            };
            function St(S, M, K) {
              var ae = void 0, Re = {}, xt = null, Mt = null, $e = null, an = null;
              if (M != null) {
                ee(M) && (Mt = M.ref), se(M) && (xt = "" + M.key), $e = M.__self === void 0 ? null : M.__self, an = M.__source === void 0 ? null : M.__source;
                for (ae in M)
                  Oe.call(M, ae) && !_e.hasOwnProperty(ae) && (Re[ae] = M[ae]);
              }
              var gn = arguments.length - 2;
              if (gn === 1)
                Re.children = K;
              else if (gn > 1) {
                for (var lt = Array(gn), Sn = 0; Sn < gn; Sn++)
                  lt[Sn] = arguments[Sn + 2];
                Object.freeze && Object.freeze(lt), Re.children = lt;
              }
              if (S && S.defaultProps) {
                var Fr = S.defaultProps;
                for (ae in Fr)
                  Re[ae] === void 0 && (Re[ae] = Fr[ae]);
              }
              if ((xt || Mt) && (typeof Re.$$typeof > "u" || Re.$$typeof !== ne)) {
                var Rr = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
                xt && ke(Re, Rr), Mt && et(Re, Rr);
              }
              return gt(S, xt, Mt, $e, an, Se.current, Re);
            }
            function nn(S, M) {
              var K = gt(S.type, M, S.ref, S._self, S._source, S._owner, S.props);
              return K;
            }
            function qt(S, M, K) {
              S == null && g(!1, "React.cloneElement(...): The argument must be a React element, but you passed %s.", S);
              var ae = void 0, Re = te({}, S.props), xt = S.key, Mt = S.ref, $e = S._self, an = S._source, gn = S._owner;
              if (M != null) {
                ee(M) && (Mt = M.ref, gn = Se.current), se(M) && (xt = "" + M.key);
                var lt = void 0;
                S.type && S.type.defaultProps && (lt = S.type.defaultProps);
                for (ae in M)
                  Oe.call(M, ae) && !_e.hasOwnProperty(ae) && (M[ae] === void 0 && lt !== void 0 ? Re[ae] = lt[ae] : Re[ae] = M[ae]);
              }
              var Sn = arguments.length - 2;
              if (Sn === 1)
                Re.children = K;
              else if (Sn > 1) {
                for (var Fr = Array(Sn), Rr = 0; Rr < Sn; Rr++)
                  Fr[Rr] = arguments[Rr + 2];
                Re.children = Fr;
              }
              return gt(S.type, xt, Mt, $e, an, gn, Re);
            }
            function fn(S) {
              return typeof S == "object" && S !== null && S.$$typeof === ne;
            }
            var An = {};
            An.getCurrentStack = null, An.getStackAddendum = function() {
              var S = An.getCurrentStack;
              return S ? S() : null;
            };
            var gr = ".", Wn = ":";
            function lr(S) {
              var M = /[=:]/g, K = {
                "=": "=0",
                ":": "=2"
              }, ae = ("" + S).replace(M, function(Re) {
                return K[Re];
              });
              return "$" + ae;
            }
            var Sr = !1, ur = /\/+/g;
            function Ar(S) {
              return ("" + S).replace(ur, "$&/");
            }
            var Jn = 10, Zn = [];
            function yn(S, M, K, ae) {
              if (Zn.length) {
                var Re = Zn.pop();
                return Re.result = S, Re.keyPrefix = M, Re.func = K, Re.context = ae, Re.count = 0, Re;
              } else
                return {
                  result: S,
                  keyPrefix: M,
                  func: K,
                  context: ae,
                  count: 0
                };
            }
            function or(S) {
              S.result = null, S.keyPrefix = null, S.func = null, S.context = null, S.count = 0, Zn.length < Jn && Zn.push(S);
            }
            function la(S, M, K, ae) {
              var Re = typeof S;
              (Re === "undefined" || Re === "boolean") && (S = null);
              var xt = !1;
              if (S === null)
                xt = !0;
              else
                switch (Re) {
                  case "string":
                  case "number":
                    xt = !0;
                    break;
                  case "object":
                    switch (S.$$typeof) {
                      case ne:
                      case Ye:
                        xt = !0;
                    }
                }
              if (xt)
                return K(
                  ae,
                  S,
                  // If it's the only child, treat the name as if it was wrapped in an array
                  // so that it's consistent if the number of children grows.
                  M === "" ? gr + we(S, 0) : M
                ), 1;
              var Mt = void 0, $e = void 0, an = 0, gn = M === "" ? gr : M + Wn;
              if (Array.isArray(S))
                for (var lt = 0; lt < S.length; lt++)
                  Mt = S[lt], $e = gn + we(Mt, lt), an += la(Mt, $e, K, ae);
              else {
                var Sn = jt(S);
                if (typeof Sn == "function") {
                  Sn === S.entries && (Sr || Q(!1, "Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.%s", An.getStackAddendum()), Sr = !0);
                  for (var Fr = Sn.call(S), Rr = void 0, Ri = 0; !(Rr = Fr.next()).done; )
                    Mt = Rr.value, $e = gn + we(Mt, Ri++), an += la(Mt, $e, K, ae);
                } else if (Re === "object") {
                  var Tr = "";
                  Tr = " If you meant to render a collection of children, use an array instead." + An.getStackAddendum();
                  var yl = "" + S;
                  g(!1, "Objects are not valid as a React child (found: %s).%s", yl === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : yl, Tr);
                }
              }
              return an;
            }
            function Er(S, M, K) {
              return S == null ? 0 : la(S, "", M, K);
            }
            function we(S, M) {
              return typeof S == "object" && S !== null && S.key != null ? lr(S.key) : M.toString(36);
            }
            function tt(S, M, K) {
              var ae = S.func, Re = S.context;
              ae.call(Re, M, S.count++);
            }
            function kt(S, M, K) {
              if (S == null)
                return S;
              var ae = yn(null, null, M, K);
              Er(S, tt, ae), or(ae);
            }
            function Gt(S, M, K) {
              var ae = S.result, Re = S.keyPrefix, xt = S.func, Mt = S.context, $e = xt.call(Mt, M, S.count++);
              Array.isArray($e) ? Wt($e, ae, K, Z.thatReturnsArgument) : $e != null && (fn($e) && ($e = nn(
                $e,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                Re + ($e.key && (!M || M.key !== $e.key) ? Ar($e.key) + "/" : "") + K
              )), ae.push($e));
            }
            function Wt(S, M, K, ae, Re) {
              var xt = "";
              K != null && (xt = Ar(K) + "/");
              var Mt = yn(M, xt, ae, Re);
              Er(S, Gt, Mt), or(Mt);
            }
            function Dn(S, M, K) {
              if (S == null)
                return S;
              var ae = [];
              return Wt(S, ae, null, M, K), ae;
            }
            function Rn(S, M) {
              return Er(S, Z.thatReturnsNull, null);
            }
            function sr(S) {
              var M = [];
              return Wt(S, M, null, Z.thatReturnsArgument), M;
            }
            function rn(S) {
              return fn(S) || g(!1, "React.Children.only expected to receive a single React element child."), S;
            }
            function Cr(S, M) {
              M === void 0 ? M = null : M === null || typeof M == "function" || Q(!1, "createContext: Expected the optional second argument to be a function. Instead received: %s", M);
              var K = {
                $$typeof: me,
                _calculateChangedBits: M,
                _defaultValue: S,
                _currentValue: S,
                _changedBits: 0,
                // These are circular
                Provider: null,
                Consumer: null
              };
              return K.Provider = {
                $$typeof: Ne,
                _context: K
              }, K.Consumer = K, K._currentRenderer = null, K;
            }
            function Xt(S) {
              return typeof S != "function" && Q(!1, "forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S), {
                $$typeof: je,
                render: S
              };
            }
            var Kt = function(S, M, K) {
              return `
    in ` + (S || "Unknown") + (M ? " (at " + M.fileName.replace(/^.*[\\\/]/, "") + ":" + M.lineNumber + ")" : K ? " (created by " + K + ")" : "");
            };
            function xa(S) {
              return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
              S === mt || S === q || S === ct || typeof S == "object" && S !== null && (S.$$typeof === Ne || S.$$typeof === me || S.$$typeof === je);
            }
            function zr(S) {
              var M = S.type;
              if (typeof M == "function")
                return M.displayName || M.name;
              if (typeof M == "string")
                return M;
              switch (M) {
                case mt:
                  return "ReactFragment";
                case Ye:
                  return "ReactPortal";
                case Te:
                  return "ReactCall";
                case xe:
                  return "ReactReturn";
              }
              if (typeof M == "object" && M !== null)
                switch (M.$$typeof) {
                  case je:
                    var K = M.render.displayName || M.render.name || "";
                    return K !== "" ? "ForwardRef(" + K + ")" : "ForwardRef";
                }
              return null;
            }
            var Qn = void 0, ci = void 0, Hi = function() {
            }, jr = function() {
            };
            Qn = null, ci = !1, Hi = function(S) {
              return S == null ? "#empty" : typeof S == "string" || typeof S == "number" ? "#text" : typeof S.type == "string" ? S.type : S.type === mt ? "React.Fragment" : S.type.displayName || S.type.name || "Unknown";
            }, jr = function() {
              var S = "";
              if (Qn) {
                var M = Hi(Qn), K = Qn._owner;
                S += Kt(M, Qn._source, K && zr(K));
              }
              return S += An.getStackAddendum() || "", S;
            };
            function fi() {
              if (Se.current) {
                var S = zr(Se.current);
                if (S)
                  return `

Check the render method of \`` + S + "`.";
              }
              return "";
            }
            function Yr(S) {
              if (S != null && S.__source !== void 0) {
                var M = S.__source, K = M.fileName.replace(/^.*[\\\/]/, ""), ae = M.lineNumber;
                return `

Check your code at ` + K + ":" + ae + ".";
              }
              return "";
            }
            var _a = {};
            function Wr(S) {
              var M = fi();
              if (!M) {
                var K = typeof S == "string" ? S : S.displayName || S.name;
                K && (M = `

Check the top-level render call using <` + K + ">.");
              }
              return M;
            }
            function ua(S, M) {
              if (!(!S._store || S._store.validated || S.key != null)) {
                S._store.validated = !0;
                var K = Wr(M);
                if (!_a[K]) {
                  _a[K] = !0;
                  var ae = "";
                  S && S._owner && S._owner !== Se.current && (ae = " It was passed a child from " + zr(S._owner) + "."), Qn = S, Q(!1, 'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s', K, ae, jr()), Qn = null;
                }
              }
            }
            function cr(S, M) {
              if (typeof S == "object") {
                if (Array.isArray(S))
                  for (var K = 0; K < S.length; K++) {
                    var ae = S[K];
                    fn(ae) && ua(ae, M);
                  }
                else if (fn(S))
                  S._store && (S._store.validated = !0);
                else if (S) {
                  var Re = jt(S);
                  if (typeof Re == "function" && Re !== S.entries)
                    for (var xt = Re.call(S), Mt = void 0; !(Mt = xt.next()).done; )
                      fn(Mt.value) && ua(Mt.value, M);
                }
              }
            }
            function Pr(S) {
              var M = S.type;
              if (typeof M == "function") {
                var K = M.displayName || M.name, ae = M.propTypes;
                ae ? (Qn = S, he(ae, S.props, "prop", K, jr), Qn = null) : M.PropTypes !== void 0 && !ci && (ci = !0, Q(!1, "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown")), typeof M.getDefaultProps == "function" && (M.getDefaultProps.isReactClassApproved || Q(!1, "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."));
              }
            }
            function Ha(S) {
              Qn = S;
              for (var M = Object.keys(S.props), K = 0; K < M.length; K++) {
                var ae = M[K];
                if (ae !== "children" && ae !== "key") {
                  Q(!1, "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.%s", ae, jr());
                  break;
                }
              }
              S.ref !== null && Q(!1, "Invalid attribute `ref` supplied to `React.Fragment`.%s", jr()), Qn = null;
            }
            function ka(S, M, K) {
              var ae = xa(S);
              if (!ae) {
                var Re = "";
                (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var xt = Yr(M);
                xt ? Re += xt : Re += fi(), Re += jr() || "";
                var Mt = void 0;
                S === null ? Mt = "null" : Array.isArray(S) ? Mt = "array" : Mt = typeof S, Q(!1, "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Mt, Re);
              }
              var $e = St.apply(this, arguments);
              if ($e == null)
                return $e;
              if (ae)
                for (var an = 2; an < arguments.length; an++)
                  cr(arguments[an], S);
              return S === mt ? Ha($e) : Pr($e), $e;
            }
            function T(S) {
              var M = ka.bind(null, S);
              return M.type = S, Object.defineProperty(M, "type", {
                enumerable: !1,
                get: function() {
                  return Pt(!1, "Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
                    value: S
                  }), S;
                }
              }), M;
            }
            function le(S, M, K) {
              for (var ae = qt.apply(this, arguments), Re = 2; Re < arguments.length; Re++)
                cr(arguments[Re], ae.type);
              return Pr(ae), ae;
            }
            var de = {
              Children: {
                map: Dn,
                forEach: kt,
                count: Rn,
                toArray: sr,
                only: rn
              },
              createRef: J,
              Component: ft,
              PureComponent: L,
              createContext: Cr,
              forwardRef: Xt,
              Fragment: mt,
              StrictMode: ct,
              unstable_AsyncMode: q,
              createElement: ka,
              cloneElement: le,
              createFactory: T,
              isValidElement: fn,
              version: ie,
              __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentOwner: Se,
                // Used by renderers to avoid bundling object-assign twice in UMD bundles:
                assign: te
              }
            };
            te(de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
              // These should not be included in production.
              ReactDebugCurrentFrame: An,
              // Shim for React DOM 16.0.0 which still destructured (but not used) this.
              // TODO: remove in React 17.0.
              ReactComponentTreeHook: {}
            });
            var Xe = Object.freeze({
              default: de
            }), Dt = Xe && de || Xe, zt = Dt.default ? Dt.default : Dt;
            b.exports = zt;
          }();
        },
        /* 11 */
        /***/
        function(b, Ce, oe) {
          if (process.env.NODE_ENV !== "production") {
            var te = typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103, g = function(Q) {
              return typeof Q == "object" && Q !== null && Q.$$typeof === te;
            }, Ve = !0;
            b.exports = oe(12)(g, Ve);
          } else
            b.exports = oe(13)();
        },
        /* 12 */
        /***/
        function(b, Ce, oe) {
          var te = oe(1), g = oe(0), Ve = oe(3), Q = oe(2), Z = oe(4), he = oe(6);
          b.exports = function(ie, X) {
            var ne = typeof Symbol == "function" && Symbol.iterator, Te = "@@iterator";
            function xe(x) {
              var J = x && (ne && x[ne] || x[Te]);
              if (typeof J == "function")
                return J;
            }
            var Ye = "<<anonymous>>", mt = {
              array: q("array"),
              bool: q("boolean"),
              func: q("function"),
              number: q("number"),
              object: q("object"),
              string: q("string"),
              symbol: q("symbol"),
              any: je(),
              arrayOf: ge,
              element: vt(),
              instanceOf: jt,
              node: qe(),
              objectOf: wt,
              oneOf: Lt,
              oneOfType: Pt,
              shape: ot,
              exact: Nt
            };
            function ct(x, J) {
              return x === J ? x !== 0 || 1 / x === 1 / J : x !== x && J !== J;
            }
            function Ne(x) {
              this.message = x, this.stack = "";
            }
            Ne.prototype = Error.prototype;
            function me(x) {
              if (process.env.NODE_ENV !== "production")
                var J = {}, Se = 0;
              function Oe(k, B, ee, se, ke, et, gt) {
                if (se = se || Ye, et = et || ee, gt !== Z) {
                  if (X)
                    g(
                      !1,
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                  else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
                    var St = se + ":" + ee;
                    !J[St] && // Avoid spamming the console because they are often not actionable except for lib authors
                    Se < 3 && (Ve(
                      !1,
                      "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                      et,
                      se
                    ), J[St] = !0, Se++);
                  }
                }
                return B[ee] == null ? k ? B[ee] === null ? new Ne("The " + ke + " `" + et + "` is marked as required " + ("in `" + se + "`, but its value is `null`.")) : new Ne("The " + ke + " `" + et + "` is marked as required in " + ("`" + se + "`, but its value is `undefined`.")) : null : x(B, ee, se, ke, et);
              }
              var _e = Oe.bind(null, !1);
              return _e.isRequired = Oe.bind(null, !0), _e;
            }
            function q(x) {
              function J(Se, Oe, _e, k, B, ee) {
                var se = Se[Oe], ke = ce(se);
                if (ke !== x) {
                  var et = Pe(se);
                  return new Ne("Invalid " + k + " `" + B + "` of type " + ("`" + et + "` supplied to `" + _e + "`, expected ") + ("`" + x + "`."));
                }
                return null;
              }
              return me(J);
            }
            function je() {
              return me(te.thatReturnsNull);
            }
            function ge(x) {
              function J(Se, Oe, _e, k, B) {
                if (typeof x != "function")
                  return new Ne("Property `" + B + "` of component `" + _e + "` has invalid PropType notation inside arrayOf.");
                var ee = Se[Oe];
                if (!Array.isArray(ee)) {
                  var se = ce(ee);
                  return new Ne("Invalid " + k + " `" + B + "` of type " + ("`" + se + "` supplied to `" + _e + "`, expected an array."));
                }
                for (var ke = 0; ke < ee.length; ke++) {
                  var et = x(ee, ke, _e, k, B + "[" + ke + "]", Z);
                  if (et instanceof Error)
                    return et;
                }
                return null;
              }
              return me(J);
            }
            function vt() {
              function x(J, Se, Oe, _e, k) {
                var B = J[Se];
                if (!ie(B)) {
                  var ee = ce(B);
                  return new Ne("Invalid " + _e + " `" + k + "` of type " + ("`" + ee + "` supplied to `" + Oe + "`, expected a single ReactElement."));
                }
                return null;
              }
              return me(x);
            }
            function jt(x) {
              function J(Se, Oe, _e, k, B) {
                if (!(Se[Oe] instanceof x)) {
                  var ee = x.name || Ye, se = L(Se[Oe]);
                  return new Ne("Invalid " + k + " `" + B + "` of type " + ("`" + se + "` supplied to `" + _e + "`, expected ") + ("instance of `" + ee + "`."));
                }
                return null;
              }
              return me(J);
            }
            function Lt(x) {
              if (!Array.isArray(x))
                return process.env.NODE_ENV !== "production" && Ve(!1, "Invalid argument supplied to oneOf, expected an instance of array."), te.thatReturnsNull;
              function J(Se, Oe, _e, k, B) {
                for (var ee = Se[Oe], se = 0; se < x.length; se++)
                  if (ct(ee, x[se]))
                    return null;
                var ke = JSON.stringify(x);
                return new Ne("Invalid " + k + " `" + B + "` of value `" + ee + "` " + ("supplied to `" + _e + "`, expected one of " + ke + "."));
              }
              return me(J);
            }
            function wt(x) {
              function J(Se, Oe, _e, k, B) {
                if (typeof x != "function")
                  return new Ne("Property `" + B + "` of component `" + _e + "` has invalid PropType notation inside objectOf.");
                var ee = Se[Oe], se = ce(ee);
                if (se !== "object")
                  return new Ne("Invalid " + k + " `" + B + "` of type " + ("`" + se + "` supplied to `" + _e + "`, expected an object."));
                for (var ke in ee)
                  if (ee.hasOwnProperty(ke)) {
                    var et = x(ee, ke, _e, k, B + "." + ke, Z);
                    if (et instanceof Error)
                      return et;
                  }
                return null;
              }
              return me(J);
            }
            function Pt(x) {
              if (!Array.isArray(x))
                return process.env.NODE_ENV !== "production" && Ve(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), te.thatReturnsNull;
              for (var J = 0; J < x.length; J++) {
                var Se = x[J];
                if (typeof Se != "function")
                  return Ve(
                    !1,
                    "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                    be(Se),
                    J
                  ), te.thatReturnsNull;
              }
              function Oe(_e, k, B, ee, se) {
                for (var ke = 0; ke < x.length; ke++) {
                  var et = x[ke];
                  if (et(_e, k, B, ee, se, Z) == null)
                    return null;
                }
                return new Ne("Invalid " + ee + " `" + se + "` supplied to " + ("`" + B + "`."));
              }
              return me(Oe);
            }
            function qe() {
              function x(J, Se, Oe, _e, k) {
                return ft(J[Se]) ? null : new Ne("Invalid " + _e + " `" + k + "` supplied to " + ("`" + Oe + "`, expected a ReactNode."));
              }
              return me(x);
            }
            function ot(x) {
              function J(Se, Oe, _e, k, B) {
                var ee = Se[Oe], se = ce(ee);
                if (se !== "object")
                  return new Ne("Invalid " + k + " `" + B + "` of type `" + se + "` " + ("supplied to `" + _e + "`, expected `object`."));
                for (var ke in x) {
                  var et = x[ke];
                  if (et) {
                    var gt = et(ee, ke, _e, k, B + "." + ke, Z);
                    if (gt)
                      return gt;
                  }
                }
                return null;
              }
              return me(J);
            }
            function Nt(x) {
              function J(Se, Oe, _e, k, B) {
                var ee = Se[Oe], se = ce(ee);
                if (se !== "object")
                  return new Ne("Invalid " + k + " `" + B + "` of type `" + se + "` " + ("supplied to `" + _e + "`, expected `object`."));
                var ke = Q({}, Se[Oe], x);
                for (var et in ke) {
                  var gt = x[et];
                  if (!gt)
                    return new Ne(
                      "Invalid " + k + " `" + B + "` key `" + et + "` supplied to `" + _e + "`.\nBad object: " + JSON.stringify(Se[Oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
                    );
                  var St = gt(ee, et, _e, k, B + "." + et, Z);
                  if (St)
                    return St;
                }
                return null;
              }
              return me(J);
            }
            function ft(x) {
              switch (typeof x) {
                case "number":
                case "string":
                case "undefined":
                  return !0;
                case "boolean":
                  return !x;
                case "object":
                  if (Array.isArray(x))
                    return x.every(ft);
                  if (x === null || ie(x))
                    return !0;
                  var J = xe(x);
                  if (J) {
                    var Se = J.call(x), Oe;
                    if (J !== x.entries) {
                      for (; !(Oe = Se.next()).done; )
                        if (!ft(Oe.value))
                          return !1;
                    } else
                      for (; !(Oe = Se.next()).done; ) {
                        var _e = Oe.value;
                        if (_e && !ft(_e[1]))
                          return !1;
                      }
                  } else
                    return !1;
                  return !0;
                default:
                  return !1;
              }
            }
            function Ae(x, J) {
              return x === "symbol" || J["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && J instanceof Symbol;
            }
            function ce(x) {
              var J = typeof x;
              return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Ae(J, x) ? "symbol" : J;
            }
            function Pe(x) {
              if (typeof x > "u" || x === null)
                return "" + x;
              var J = ce(x);
              if (J === "object") {
                if (x instanceof Date)
                  return "date";
                if (x instanceof RegExp)
                  return "regexp";
              }
              return J;
            }
            function be(x) {
              var J = Pe(x);
              switch (J) {
                case "array":
                case "object":
                  return "an " + J;
                case "boolean":
                case "date":
                case "regexp":
                  return "a " + J;
                default:
                  return J;
              }
            }
            function L(x) {
              return !x.constructor || !x.constructor.name ? Ye : x.constructor.name;
            }
            return mt.checkPropTypes = he, mt.PropTypes = mt, mt;
          };
        },
        /* 13 */
        /***/
        function(b, Ce, oe) {
          var te = oe(1), g = oe(0), Ve = oe(4);
          b.exports = function() {
            function Q(ie, X, ne, Te, xe, Ye) {
              Ye !== Ve && g(
                !1,
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
            }
            Q.isRequired = Q;
            function Z() {
              return Q;
            }
            var he = {
              array: Q,
              bool: Q,
              func: Q,
              number: Q,
              object: Q,
              string: Q,
              symbol: Q,
              any: Q,
              arrayOf: Z,
              element: Q,
              instanceOf: Z,
              node: Q,
              objectOf: Z,
              oneOf: Z,
              oneOfType: Z,
              shape: Z,
              exact: Z
            };
            return he.checkPropTypes = te, he.PropTypes = he, he;
          };
        },
        /* 14 */
        /***/
        function(b, Ce, oe) {
          Object.defineProperty(Ce, "__esModule", {
            value: !0
          });
          var te = oe(15);
          Object.defineProperty(Ce, "blank", {
            enumerable: !0,
            get: function() {
              return Te(te).default;
            }
          });
          var g = oe(16);
          Object.defineProperty(Ce, "balls", {
            enumerable: !0,
            get: function() {
              return Te(g).default;
            }
          });
          var Ve = oe(17);
          Object.defineProperty(Ce, "bars", {
            enumerable: !0,
            get: function() {
              return Te(Ve).default;
            }
          });
          var Q = oe(18);
          Object.defineProperty(Ce, "bubbles", {
            enumerable: !0,
            get: function() {
              return Te(Q).default;
            }
          });
          var Z = oe(19);
          Object.defineProperty(Ce, "cubes", {
            enumerable: !0,
            get: function() {
              return Te(Z).default;
            }
          });
          var he = oe(20);
          Object.defineProperty(Ce, "cylon", {
            enumerable: !0,
            get: function() {
              return Te(he).default;
            }
          });
          var ie = oe(21);
          Object.defineProperty(Ce, "spin", {
            enumerable: !0,
            get: function() {
              return Te(ie).default;
            }
          });
          var X = oe(22);
          Object.defineProperty(Ce, "spinningBubbles", {
            enumerable: !0,
            get: function() {
              return Te(X).default;
            }
          });
          var ne = oe(23);
          Object.defineProperty(Ce, "spokes", {
            enumerable: !0,
            get: function() {
              return Te(ne).default;
            }
          });
          function Te(xe) {
            return xe && xe.__esModule ? xe : { default: xe };
          }
        },
        /* 15 */
        /***/
        function(b, Ce) {
          b.exports = `<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>
`;
        },
        /* 16 */
        /***/
        function(b, Ce) {
          b.exports = `<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`;
        },
        /* 17 */
        /***/
        function(b, Ce) {
          b.exports = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> 
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(8)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(14)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(20)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(26)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`;
        },
        /* 18 */
        /***/
        function(b, Ce) {
          b.exports = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`;
        },
        /* 19 */
        /***/
        function(b, Ce) {
          b.exports = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`;
        },
        /* 20 */
        /***/
        function(b, Ce) {
          b.exports = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`;
        },
        /* 21 */
        /***/
        function(b, Ce) {
          b.exports = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
  </path>
</svg>
`;
        },
        /* 22 */
        /***/
        function(b, Ce) {
          b.exports = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`;
        },
        /* 23 */
        /***/
        function(b, Ce) {
          b.exports = `<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
  </path>
</svg>
`;
        }
        /******/
      ])
    );
  });
})(CR);
var Nk = CR.exports;
const Uk = /* @__PURE__ */ fR(Nk), Ak = () => /* @__PURE__ */ Fi.jsx("div", { className: "absolute top-0 h-full w-full bg-grey-900 opacity-90" }), zk = ({ children: z }) => /* @__PURE__ */ Fi.jsx("span", { className: "text-textColor relative", children: z }), jk = ml.memo(() => {
  const [z] = ml.useContext(ER), H = z[Yn.LoadingProcess];
  return /* @__PURE__ */ Fi.jsxs("div", { className: "fixed top-0 z-50 flex h-full w-full flex-col items-center justify-center space-y-3", children: [
    /* @__PURE__ */ Fi.jsx(Ak, {}),
    /* @__PURE__ */ Fi.jsx(Uk, { className: "relative", color: "#21B185", type: H == null ? void 0 : H.type }),
    (H == null ? void 0 : H.body) && /* @__PURE__ */ Fi.jsx(zk, { children: H.body })
  ] });
}), Pk = ml.memo(() => ml.useMemo(() => {
  const H = ml.lazy(() => import("./index-DZqvWEa8.js"));
  return /* @__PURE__ */ Fi.jsx(ml.Suspense, { fallback: "", children: /* @__PURE__ */ Fi.jsx(H, {}) });
}, [])), Fk = ({ view3DEvents: z }) => {
  var oe;
  const [H, b] = ml.useReducer(Dk, SR), Ce = ml.useMemo(() => [H, b], [H]);
  return ml.useEffect(() => {
    b({ type: Yn.View3DEvents, state: z }), b({ type: Yn.UserProps, state: z.props }), z.onPropsChange = (te) => {
      b({
        type: Yn.UserProps,
        state: {
          texture: { ...hR, ...te.texture },
          translate: { ...mR, ...te.translate }
        }
      });
    }, b({ type: Yn.Active, state: !0 });
  }, []), /* @__PURE__ */ Fi.jsxs(ER.Provider, { value: Ce, children: [
    H[Yn.Active] && /* @__PURE__ */ Fi.jsx(Pk, {}),
    ((oe = H[Yn.LoadingProcess]) == null ? void 0 : oe.enabled) && /* @__PURE__ */ Fi.jsx(jk, {})
  ] });
};
class Hk {
  constructor() {
    ju(this, "onMounted");
    ju(this, "unmounted");
    ju(this, "onAssetsLoaded");
    ju(this, "onPropsChange");
    ju(this, "props", { texture: hR, translate: mR });
    ju(this, "render");
    ju(this, "app", null);
    ju(this, "renderIndex", 0);
    this.onMounted = () => {
    }, this.unmounted = () => {
      requestAnimationFrame(() => {
        var H;
        (H = this.app) == null || H.unmount(), this.renderIndex = 0;
      });
    }, this.onAssetsLoaded = () => {
    }, this.onPropsChange = () => {
    }, this.render = () => {
    };
  }
  addEventListeners(H, b) {
    switch (H) {
      case "onMounted":
        this.onMounted = b;
        break;
      case "unmounted":
        this.unmounted = () => {
          b(), requestAnimationFrame(() => {
            var Ce;
            (Ce = this.app) == null || Ce.unmount(), this.renderIndex = 0;
          });
        };
        break;
      case "onAssetsLoaded":
        this.onAssetsLoaded = b;
        break;
      default:
        console.warn("Event type not found");
    }
  }
  setProps(H) {
    this.props = { ...this.props, ...H }, this.onPropsChange(this.props);
  }
  setReactDom(H) {
    this.app = H;
  }
}
const Pu = new Hk();
Pu.render = () => {
  if (Pu.renderIndex === 0) {
    Pu.renderIndex = 1;
    const z = Zp.createRoot(document.getElementById("app"));
    z.render(/* @__PURE__ */ Fi.jsx(Fk, { view3DEvents: Pu }, (/* @__PURE__ */ new Date()).getTime())), Pu.setReactDom(z);
  }
};
if (process.env.NODE_ENV === "DEV") {
  const z = "B335E6";
  Pu.setProps({
    texture: {
      base: `/3d-viewer/mapping/${z}/base.jpg`,
      dispImgUrl: `/3d-viewer/mapping/${z}/disp.jpg`,
      roughImgUrl: `/3d-viewer/mapping/${z}/rough.jpg`,
      normalImgUrl: `/3d-viewer/mapping/${z}/nrm.jpg`,
      bump: `/3d-viewer/mapping/${z}/metal.jpg`,
      alpha: `/3d-viewer/mapping/${z}/alpha.jpg`,
      defaultMapScale: 15,
      mapScale: 15,
      dpi: 600,
      normalScale: 1
      // color: { r: 255, g: 0, b: 0 },
    }
  }), Pu.render(), window.addEventListener("keydown", (H) => {
    if (H.key === "r") {
      Pu.render();
      return;
    }
    if (H.key === "1" || H.key === "2" || H.key === "3" || H.key === "4" || H.key === "5" || H.key === "6" || H.key === "7" || H.key === "8" || H.key === "9" || H.key === "0" || H.key === "n") {
      const b = {
        base: `/3d-viewer/mapping/${H.key}/base.jpg`,
        dispImgUrl: `/3d-viewer/mapping/${H.key}/disp.jpg`,
        roughImgUrl: `/3d-viewer/mapping/${H.key}/rough.jpg`,
        normalImgUrl: `/3d-viewer/mapping/${H.key}/nrm.jpg`,
        bump: void 0,
        alpha: void 0
      };
      console.log(b), Pu.setProps({ texture: b });
    }
  });
}
export {
  Yn as A,
  ER as C,
  Qk as D,
  Wk as R,
  gR as T,
  ev as a,
  vR as b,
  dk as c,
  Yk as d,
  Gk as e,
  fR as g,
  Fi as j,
  ml as r,
  Pu as v
};
