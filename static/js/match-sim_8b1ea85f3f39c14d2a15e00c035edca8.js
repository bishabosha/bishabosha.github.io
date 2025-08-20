(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && u(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = l(c);
    fetch(c.href, d);
  }
})();
var Vo = { exports: {} },
  vs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wm;
function Nb() {
  if (Wm) return vs;
  Wm = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function l(u, c, d) {
    var f = null;
    if (
      (d !== void 0 && (f = "" + d),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var h in c) h !== "key" && (d[h] = c[h]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: u, key: f, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return ((vs.Fragment = i), (vs.jsx = l), (vs.jsxs = l), vs);
}
var tp;
function Rb() {
  return (tp || ((tp = 1), (Vo.exports = Nb())), Vo.exports);
}
var j = Rb(),
  ko = { exports: {} },
  ct = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ep;
function Ob() {
  if (ep) return ct;
  ep = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function x(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (v && S[v]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    q = {};
  function V(S, U, Q) {
    ((this.props = S),
      (this.context = U),
      (this.refs = q),
      (this.updater = Q || A));
  }
  ((V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (S, U) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, U, "setState");
    }),
    (V.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    }));
  function k() {}
  k.prototype = V.prototype;
  function C(S, U, Q) {
    ((this.props = S),
      (this.context = U),
      (this.refs = q),
      (this.updater = Q || A));
  }
  var B = (C.prototype = new k());
  ((B.constructor = C), w(B, V.prototype), (B.isPureReactComponent = !0));
  var P = Array.isArray,
    G = { H: null, A: null, T: null, S: null, V: null },
    J = Object.prototype.hasOwnProperty;
  function F(S, U, Q, K, W, ft) {
    return (
      (Q = ft.ref),
      { $$typeof: a, type: S, key: U, ref: Q !== void 0 ? Q : null, props: ft }
    );
  }
  function I(S, U) {
    return F(S.type, U, void 0, void 0, void 0, S.props);
  }
  function ot(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function gt(S) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (Q) {
        return U[Q];
      })
    );
  }
  var St = /\/+/g;
  function nt(S, U) {
    return typeof S == "object" && S !== null && S.key != null
      ? gt("" + S.key)
      : U.toString(36);
  }
  function bt() {}
  function zt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(bt, bt)
            : ((S.status = "pending"),
              S.then(
                function (U) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = U));
                },
                function (U) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = U));
                },
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function $(S, U, Q, K, W) {
    var ft = typeof S;
    (ft === "undefined" || ft === "boolean") && (S = null);
    var ut = !1;
    if (S === null) ut = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case i:
              ut = !0;
              break;
            case g:
              return ((ut = S._init), $(ut(S._payload), U, Q, K, W));
          }
      }
    if (ut)
      return (
        (W = W(S)),
        (ut = K === "" ? "." + nt(S, 0) : K),
        P(W)
          ? ((Q = ""),
            ut != null && (Q = ut.replace(St, "$&/") + "/"),
            $(W, U, Q, "", function (xn) {
              return xn;
            }))
          : W != null &&
            (ot(W) &&
              (W = I(
                W,
                Q +
                  (W.key == null || (S && S.key === W.key)
                    ? ""
                    : ("" + W.key).replace(St, "$&/") + "/") +
                  ut,
              )),
            U.push(W)),
        1
      );
    ut = 0;
    var pe = K === "" ? "." : K + ":";
    if (P(S))
      for (var Ct = 0; Ct < S.length; Ct++)
        ((K = S[Ct]), (ft = pe + nt(K, Ct)), (ut += $(K, U, Q, ft, W)));
    else if (((Ct = x(S)), typeof Ct == "function"))
      for (S = Ct.call(S), Ct = 0; !(K = S.next()).done; )
        ((K = K.value), (ft = pe + nt(K, Ct++)), (ut += $(K, U, Q, ft, W)));
    else if (ft === "object") {
      if (typeof S.then == "function") return $(zt(S), U, Q, K, W);
      throw (
        (U = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ut;
  }
  function D(S, U, Q) {
    if (S == null) return S;
    var K = [],
      W = 0;
    return (
      $(S, K, "", "", function (ft) {
        return U.call(Q, ft, W++);
      }),
      K
    );
  }
  function N(S) {
    if (S._status === -1) {
      var U = S._result;
      ((U = U()),
        U.then(
          function (Q) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = Q));
          },
          function (Q) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = Q));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = U)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var X =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var U = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function tt() {}
  return (
    (ct.Children = {
      map: D,
      forEach: function (S, U, Q) {
        D(
          S,
          function () {
            U.apply(this, arguments);
          },
          Q,
        );
      },
      count: function (S) {
        var U = 0;
        return (
          D(S, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (S) {
        return (
          D(S, function (U) {
            return U;
          }) || []
        );
      },
      only: function (S) {
        if (!ot(S))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return S;
      },
    }),
    (ct.Component = V),
    (ct.Fragment = l),
    (ct.Profiler = c),
    (ct.PureComponent = C),
    (ct.StrictMode = u),
    (ct.Suspense = m),
    (ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (ct.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return G.H.useMemoCache(S);
      },
    }),
    (ct.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (ct.cloneElement = function (S, U, Q) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + ".",
        );
      var K = w({}, S.props),
        W = S.key,
        ft = void 0;
      if (U != null)
        for (ut in (U.ref !== void 0 && (ft = void 0),
        U.key !== void 0 && (W = "" + U.key),
        U))
          !J.call(U, ut) ||
            ut === "key" ||
            ut === "__self" ||
            ut === "__source" ||
            (ut === "ref" && U.ref === void 0) ||
            (K[ut] = U[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) K.children = Q;
      else if (1 < ut) {
        for (var pe = Array(ut), Ct = 0; Ct < ut; Ct++)
          pe[Ct] = arguments[Ct + 2];
        K.children = pe;
      }
      return F(S.type, W, void 0, void 0, ft, K);
    }),
    (ct.createContext = function (S) {
      return (
        (S = {
          $$typeof: f,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: d, _context: S }),
        S
      );
    }),
    (ct.createElement = function (S, U, Q) {
      var K,
        W = {},
        ft = null;
      if (U != null)
        for (K in (U.key !== void 0 && (ft = "" + U.key), U))
          J.call(U, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (W[K] = U[K]);
      var ut = arguments.length - 2;
      if (ut === 1) W.children = Q;
      else if (1 < ut) {
        for (var pe = Array(ut), Ct = 0; Ct < ut; Ct++)
          pe[Ct] = arguments[Ct + 2];
        W.children = pe;
      }
      if (S && S.defaultProps)
        for (K in ((ut = S.defaultProps), ut))
          W[K] === void 0 && (W[K] = ut[K]);
      return F(S, ft, void 0, void 0, null, W);
    }),
    (ct.createRef = function () {
      return { current: null };
    }),
    (ct.forwardRef = function (S) {
      return { $$typeof: h, render: S };
    }),
    (ct.isValidElement = ot),
    (ct.lazy = function (S) {
      return { $$typeof: g, _payload: { _status: -1, _result: S }, _init: N };
    }),
    (ct.memo = function (S, U) {
      return { $$typeof: p, type: S, compare: U === void 0 ? null : U };
    }),
    (ct.startTransition = function (S) {
      var U = G.T,
        Q = {};
      G.T = Q;
      try {
        var K = S(),
          W = G.S;
        (W !== null && W(Q, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(tt, X));
      } catch (ft) {
        X(ft);
      } finally {
        G.T = U;
      }
    }),
    (ct.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (ct.use = function (S) {
      return G.H.use(S);
    }),
    (ct.useActionState = function (S, U, Q) {
      return G.H.useActionState(S, U, Q);
    }),
    (ct.useCallback = function (S, U) {
      return G.H.useCallback(S, U);
    }),
    (ct.useContext = function (S) {
      return G.H.useContext(S);
    }),
    (ct.useDebugValue = function () {}),
    (ct.useDeferredValue = function (S, U) {
      return G.H.useDeferredValue(S, U);
    }),
    (ct.useEffect = function (S, U, Q) {
      var K = G.H;
      if (typeof Q == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return K.useEffect(S, U);
    }),
    (ct.useId = function () {
      return G.H.useId();
    }),
    (ct.useImperativeHandle = function (S, U, Q) {
      return G.H.useImperativeHandle(S, U, Q);
    }),
    (ct.useInsertionEffect = function (S, U) {
      return G.H.useInsertionEffect(S, U);
    }),
    (ct.useLayoutEffect = function (S, U) {
      return G.H.useLayoutEffect(S, U);
    }),
    (ct.useMemo = function (S, U) {
      return G.H.useMemo(S, U);
    }),
    (ct.useOptimistic = function (S, U) {
      return G.H.useOptimistic(S, U);
    }),
    (ct.useReducer = function (S, U, Q) {
      return G.H.useReducer(S, U, Q);
    }),
    (ct.useRef = function (S) {
      return G.H.useRef(S);
    }),
    (ct.useState = function (S) {
      return G.H.useState(S);
    }),
    (ct.useSyncExternalStore = function (S, U, Q) {
      return G.H.useSyncExternalStore(S, U, Q);
    }),
    (ct.useTransition = function () {
      return G.H.useTransition();
    }),
    (ct.version = "19.1.1"),
    ct
  );
}
var np;
function Ac() {
  return (np || ((np = 1), (ko.exports = Ob())), ko.exports);
}
var Z = Ac(),
  Uo = { exports: {} },
  bs = {},
  Bo = { exports: {} },
  Lo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function Cb() {
  return (
    ap ||
      ((ap = 1),
      (function (a) {
        function i(D, N) {
          var X = D.length;
          D.push(N);
          t: for (; 0 < X; ) {
            var tt = (X - 1) >>> 1,
              S = D[tt];
            if (0 < c(S, N)) ((D[tt] = N), (D[X] = S), (X = tt));
            else break t;
          }
        }
        function l(D) {
          return D.length === 0 ? null : D[0];
        }
        function u(D) {
          if (D.length === 0) return null;
          var N = D[0],
            X = D.pop();
          if (X !== N) {
            D[0] = X;
            t: for (var tt = 0, S = D.length, U = S >>> 1; tt < U; ) {
              var Q = 2 * (tt + 1) - 1,
                K = D[Q],
                W = Q + 1,
                ft = D[W];
              if (0 > c(K, X))
                W < S && 0 > c(ft, K)
                  ? ((D[tt] = ft), (D[W] = X), (tt = W))
                  : ((D[tt] = K), (D[Q] = X), (tt = Q));
              else if (W < S && 0 > c(ft, X))
                ((D[tt] = ft), (D[W] = X), (tt = W));
              else break t;
            }
          }
          return N;
        }
        function c(D, N) {
          var X = D.sortIndex - N.sortIndex;
          return X !== 0 ? X : D.id - N.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            h = f.now();
          a.unstable_now = function () {
            return f.now() - h;
          };
        }
        var m = [],
          p = [],
          g = 1,
          v = null,
          x = 3,
          A = !1,
          w = !1,
          q = !1,
          V = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          C = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        function P(D) {
          for (var N = l(p); N !== null; ) {
            if (N.callback === null) u(p);
            else if (N.startTime <= D)
              (u(p), (N.sortIndex = N.expirationTime), i(m, N));
            else break;
            N = l(p);
          }
        }
        function G(D) {
          if (((q = !1), P(D), !w))
            if (l(m) !== null) ((w = !0), J || ((J = !0), nt()));
            else {
              var N = l(p);
              N !== null && $(G, N.startTime - D);
            }
        }
        var J = !1,
          F = -1,
          I = 5,
          ot = -1;
        function gt() {
          return V ? !0 : !(a.unstable_now() - ot < I);
        }
        function St() {
          if (((V = !1), J)) {
            var D = a.unstable_now();
            ot = D;
            var N = !0;
            try {
              t: {
                ((w = !1), q && ((q = !1), C(F), (F = -1)), (A = !0));
                var X = x;
                try {
                  e: {
                    for (
                      P(D), v = l(m);
                      v !== null && !(v.expirationTime > D && gt());

                    ) {
                      var tt = v.callback;
                      if (typeof tt == "function") {
                        ((v.callback = null), (x = v.priorityLevel));
                        var S = tt(v.expirationTime <= D);
                        if (((D = a.unstable_now()), typeof S == "function")) {
                          ((v.callback = S), P(D), (N = !0));
                          break e;
                        }
                        (v === l(m) && u(m), P(D));
                      } else u(m);
                      v = l(m);
                    }
                    if (v !== null) N = !0;
                    else {
                      var U = l(p);
                      (U !== null && $(G, U.startTime - D), (N = !1));
                    }
                  }
                  break t;
                } finally {
                  ((v = null), (x = X), (A = !1));
                }
                N = void 0;
              }
            } finally {
              N ? nt() : (J = !1);
            }
          }
        }
        var nt;
        if (typeof B == "function")
          nt = function () {
            B(St);
          };
        else if (typeof MessageChannel < "u") {
          var bt = new MessageChannel(),
            zt = bt.port2;
          ((bt.port1.onmessage = St),
            (nt = function () {
              zt.postMessage(null);
            }));
        } else
          nt = function () {
            k(St, 0);
          };
        function $(D, N) {
          F = k(function () {
            D(a.unstable_now());
          }, N);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (a.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (I = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (a.unstable_next = function (D) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = x;
            }
            var X = x;
            x = N;
            try {
              return D();
            } finally {
              x = X;
            }
          }),
          (a.unstable_requestPaint = function () {
            V = !0;
          }),
          (a.unstable_runWithPriority = function (D, N) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var X = x;
            x = D;
            try {
              return N();
            } finally {
              x = X;
            }
          }),
          (a.unstable_scheduleCallback = function (D, N, X) {
            var tt = a.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? tt + X : tt))
                : (X = tt),
              D)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = X + S),
              (D = {
                id: g++,
                callback: N,
                priorityLevel: D,
                startTime: X,
                expirationTime: S,
                sortIndex: -1,
              }),
              X > tt
                ? ((D.sortIndex = X),
                  i(p, D),
                  l(m) === null &&
                    D === l(p) &&
                    (q ? (C(F), (F = -1)) : (q = !0), $(G, X - tt)))
                : ((D.sortIndex = S),
                  i(m, D),
                  w || A || ((w = !0), J || ((J = !0), nt()))),
              D
            );
          }),
          (a.unstable_shouldYield = gt),
          (a.unstable_wrapCallback = function (D) {
            var N = x;
            return function () {
              var X = x;
              x = N;
              try {
                return D.apply(this, arguments);
              } finally {
                x = X;
              }
            };
          }));
      })(Lo)),
    Lo
  );
}
var ip;
function _b() {
  return (ip || ((ip = 1), (Bo.exports = Cb())), Bo.exports);
}
var Yo = { exports: {} },
  ie = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp;
function wb() {
  if (sp) return ie;
  sp = 1;
  var a = Ac();
  function i(m) {
    var p = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var u = {
      d: {
        f: l,
        r: function () {
          throw Error(i(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(m, p, g) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: v == null ? null : "" + v,
      children: m,
      containerInfo: p,
      implementation: g,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, p) {
    if (m === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (ie.createPortal = function (m, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(i(299));
      return d(m, p, null, g);
    }),
    (ie.flushSync = function (m) {
      var p = f.T,
        g = u.p;
      try {
        if (((f.T = null), (u.p = 2), m)) return m();
      } finally {
        ((f.T = p), (u.p = g), u.d.f());
      }
    }),
    (ie.preconnect = function (m, p) {
      typeof m == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        u.d.C(m, p));
    }),
    (ie.prefetchDNS = function (m) {
      typeof m == "string" && u.d.D(m);
    }),
    (ie.preinit = function (m, p) {
      if (typeof m == "string" && p && typeof p.as == "string") {
        var g = p.as,
          v = h(g, p.crossOrigin),
          x = typeof p.integrity == "string" ? p.integrity : void 0,
          A = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        g === "style"
          ? u.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: A,
            })
          : g === "script" &&
            u.d.X(m, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: A,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ie.preinitModule = function (m, p) {
      if (typeof m == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var g = h(p.as, p.crossOrigin);
            u.d.M(m, {
              crossOrigin: g,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && u.d.M(m);
    }),
    (ie.preload = function (m, p) {
      if (
        typeof m == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var g = p.as,
          v = h(g, p.crossOrigin);
        u.d.L(m, g, {
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ie.preloadModule = function (m, p) {
      if (typeof m == "string")
        if (p) {
          var g = h(p.as, p.crossOrigin);
          u.d.m(m, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else u.d.m(m);
    }),
    (ie.requestFormReset = function (m) {
      u.d.r(m);
    }),
    (ie.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (ie.useFormState = function (m, p, g) {
      return f.H.useFormState(m, p, g);
    }),
    (ie.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (ie.version = "19.1.1"),
    ie
  );
}
var lp;
function zb() {
  if (lp) return Yo.exports;
  lp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Yo.exports = wb()), Yo.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rp;
function Vb() {
  if (rp) return bs;
  rp = 1;
  var a = _b(),
    i = Ac(),
    l = zb();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (d(t) !== t) throw Error(u(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, s = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var o = r.alternate;
      if (o === null) {
        if (((s = r.return), s !== null)) {
          n = s;
          continue;
        }
        break;
      }
      if (r.child === o.child) {
        for (o = r.child; o; ) {
          if (o === n) return (h(r), t);
          if (o === s) return (h(r), e);
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== s.return) ((n = r), (s = o));
      else {
        for (var y = !1, b = r.child; b; ) {
          if (b === n) {
            ((y = !0), (n = r), (s = o));
            break;
          }
          if (b === s) {
            ((y = !0), (s = r), (n = o));
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = o.child; b; ) {
            if (b === n) {
              ((y = !0), (n = o), (s = r));
              break;
            }
            if (b === s) {
              ((y = !0), (s = o), (n = r));
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(u(189));
        }
      }
      if (n.alternate !== s) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = p(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    v = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    V = Symbol.for("react.profiler"),
    k = Symbol.for("react.provider"),
    C = Symbol.for("react.consumer"),
    B = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    G = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    F = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    ot = Symbol.for("react.activity"),
    gt = Symbol.for("react.memo_cache_sentinel"),
    St = Symbol.iterator;
  function nt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (St && t[St]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var bt = Symbol.for("react.client.reference");
  function zt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === bt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case w:
        return "Fragment";
      case V:
        return "Profiler";
      case q:
        return "StrictMode";
      case G:
        return "Suspense";
      case J:
        return "SuspenseList";
      case ot:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case A:
          return "Portal";
        case B:
          return (t.displayName || "Context") + ".Provider";
        case C:
          return (t._context.displayName || "Context") + ".Consumer";
        case P:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case F:
          return (
            (e = t.displayName || null),
            e !== null ? e : zt(t.type) || "Memo"
          );
        case I:
          ((e = t._payload), (t = t._init));
          try {
            return zt(t(e));
          } catch {}
      }
    return null;
  }
  var $ = Array.isArray,
    D = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    tt = [],
    S = -1;
  function U(t) {
    return { current: t };
  }
  function Q(t) {
    0 > S || ((t.current = tt[S]), (tt[S] = null), S--);
  }
  function K(t, e) {
    (S++, (tt[S] = t.current), (t.current = e));
  }
  var W = U(null),
    ft = U(null),
    ut = U(null),
    pe = U(null);
  function Ct(t, e) {
    switch ((K(ut, e), K(ft, t), K(W, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Dm(e)), (t = Nm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (Q(W), K(W, t));
  }
  function xn() {
    (Q(W), Q(ft), Q(ut));
  }
  function br(t) {
    t.memoizedState !== null && K(pe, t);
    var e = W.current,
      n = Nm(e, t.type);
    e !== n && (K(ft, t), K(W, n));
  }
  function Bs(t) {
    (ft.current === t && (Q(W), Q(ft)),
      pe.current === t && (Q(pe), (hs._currentValue = X)));
  }
  var xr = Object.prototype.hasOwnProperty,
    Sr = a.unstable_scheduleCallback,
    Tr = a.unstable_cancelCallback,
    l0 = a.unstable_shouldYield,
    r0 = a.unstable_requestPaint,
    Xe = a.unstable_now,
    u0 = a.unstable_getCurrentPriorityLevel,
    rf = a.unstable_ImmediatePriority,
    uf = a.unstable_UserBlockingPriority,
    Ls = a.unstable_NormalPriority,
    o0 = a.unstable_LowPriority,
    of = a.unstable_IdlePriority,
    c0 = a.log,
    f0 = a.unstable_setDisableYieldValue,
    Si = null,
    ye = null;
  function Sn(t) {
    if (
      (typeof c0 == "function" && f0(t),
      ye && typeof ye.setStrictMode == "function")
    )
      try {
        ye.setStrictMode(Si, t);
      } catch {}
  }
  var ge = Math.clz32 ? Math.clz32 : m0,
    d0 = Math.log,
    h0 = Math.LN2;
  function m0(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((d0(t) / h0) | 0)) | 0);
  }
  var Ys = 256,
    Hs = 4194304;
  function In(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function qs(t, e, n) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var r = 0,
      o = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var b = s & 134217727;
    return (
      b !== 0
        ? ((s = b & ~o),
          s !== 0
            ? (r = In(s))
            : ((y &= b),
              y !== 0
                ? (r = In(y))
                : n || ((n = b & ~t), n !== 0 && (r = In(n)))))
        : ((b = s & ~o),
          b !== 0
            ? (r = In(b))
            : y !== 0
              ? (r = In(y))
              : n || ((n = s & ~t), n !== 0 && (r = In(n)))),
      r === 0
        ? 0
        : e !== 0 &&
            e !== r &&
            (e & o) === 0 &&
            ((o = r & -r),
            (n = e & -e),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? e
          : r
    );
  }
  function Ti(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function p0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cf() {
    var t = Ys;
    return ((Ys <<= 1), (Ys & 4194048) === 0 && (Ys = 256), t);
  }
  function ff() {
    var t = Hs;
    return ((Hs <<= 1), (Hs & 62914560) === 0 && (Hs = 4194304), t);
  }
  function Ar(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ai(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function y0(t, e, n, s, r, o) {
    var y = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var b = t.entanglements,
      T = t.expirationTimes,
      O = t.hiddenUpdates;
    for (n = y & ~n; 0 < n; ) {
      var L = 31 - ge(n),
        H = 1 << L;
      ((b[L] = 0), (T[L] = -1));
      var _ = O[L];
      if (_ !== null)
        for (O[L] = null, L = 0; L < _.length; L++) {
          var z = _[L];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~H;
    }
    (s !== 0 && df(t, s, 0),
      o !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(y & ~e)));
  }
  function df(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var s = 31 - ge(e);
    ((t.entangledLanes |= e),
      (t.entanglements[s] = t.entanglements[s] | 1073741824 | (n & 4194090)));
  }
  function hf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var s = 31 - ge(n),
        r = 1 << s;
      ((r & e) | (t[s] & e) && (t[s] |= e), (n &= ~r));
    }
  }
  function Er(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function jr(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function mf() {
    var t = N.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : $m(t.type));
  }
  function g0(t, e) {
    var n = N.p;
    try {
      return ((N.p = t), e());
    } finally {
      N.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2),
    ne = "__reactFiber$" + Tn,
    oe = "__reactProps$" + Tn,
    Aa = "__reactContainer$" + Tn,
    Mr = "__reactEvents$" + Tn,
    v0 = "__reactListeners$" + Tn,
    b0 = "__reactHandles$" + Tn,
    pf = "__reactResources$" + Tn,
    Ei = "__reactMarker$" + Tn;
  function Dr(t) {
    (delete t[ne], delete t[oe], delete t[Mr], delete t[v0], delete t[b0]);
  }
  function Ea(t) {
    var e = t[ne];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Aa] || n[ne])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = _m(t); t !== null; ) {
            if ((n = t[ne])) return n;
            t = _m(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function ja(t) {
    if ((t = t[ne] || t[Aa])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ji(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Ma(t) {
    var e = t[pf];
    return (
      e ||
        (e = t[pf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Qt(t) {
    t[Ei] = !0;
  }
  var yf = new Set(),
    gf = {};
  function Fn(t, e) {
    (Da(t, e), Da(t + "Capture", e));
  }
  function Da(t, e) {
    for (gf[t] = e, t = 0; t < e.length; t++) yf.add(e[t]);
  }
  var x0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    vf = {},
    bf = {};
  function S0(t) {
    return xr.call(bf, t)
      ? !0
      : xr.call(vf, t)
        ? !1
        : x0.test(t)
          ? (bf[t] = !0)
          : ((vf[t] = !0), !1);
  }
  function Xs(t, e, n) {
    if (S0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var s = e.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Gs(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function tn(t, e, n, s) {
    if (s === null) t.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + s);
    }
  }
  var Nr, xf;
  function Na(t) {
    if (Nr === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Nr = (e && e[1]) || ""),
          (xf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Nr +
      t +
      xf
    );
  }
  var Rr = !1;
  function Or(t, e) {
    if (!t || Rr) return "";
    Rr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (z) {
                  var _ = z;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (z) {
                  _ = z;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                _ = z;
              }
              (H = t()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (z) {
            if (z && _ && typeof z.stack == "string") return [z.stack, _.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name",
      );
      r &&
        r.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = s.DetermineComponentFrameRoot(),
        y = o[0],
        b = o[1];
      if (y && b) {
        var T = y.split(`
`),
          O = b.split(`
`);
        for (
          r = s = 0;
          s < T.length && !T[s].includes("DetermineComponentFrameRoot");

        )
          s++;
        for (; r < O.length && !O[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (s === T.length || r === O.length)
          for (
            s = T.length - 1, r = O.length - 1;
            1 <= s && 0 <= r && T[s] !== O[r];

          )
            r--;
        for (; 1 <= s && 0 <= r; s--, r--)
          if (T[s] !== O[r]) {
            if (s !== 1 || r !== 1)
              do
                if ((s--, r--, 0 > r || T[s] !== O[r])) {
                  var L =
                    `
` + T[s].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      L.includes("<anonymous>") &&
                      (L = L.replace("<anonymous>", t.displayName)),
                    L
                  );
                }
              while (1 <= s && 0 <= r);
            break;
          }
      }
    } finally {
      ((Rr = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Na(n) : "";
  }
  function T0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Na(t.type);
      case 16:
        return Na("Lazy");
      case 13:
        return Na("Suspense");
      case 19:
        return Na("SuspenseList");
      case 0:
      case 15:
        return Or(t.type, !1);
      case 11:
        return Or(t.type.render, !1);
      case 1:
        return Or(t.type, !0);
      case 31:
        return Na("Activity");
      default:
        return "";
    }
  }
  function Sf(t) {
    try {
      var e = "";
      do ((e += T0(t)), (t = t.return));
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Me(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Tf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function A0(t) {
    var e = Tf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      s = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var r = n.get,
        o = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (y) {
            ((s = "" + y), o.call(this, y));
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (y) {
            s = "" + y;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Zs(t) {
    t._valueTracker || (t._valueTracker = A0(t));
  }
  function Af(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      s = "";
    return (
      t && (s = Tf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = s),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Ks(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var E0 = /[\n"\\]/g;
  function De(t) {
    return t.replace(E0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Cr(t, e, n, s, r, o, y, b) {
    ((t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      e != null
        ? y === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Me(e))
          : t.value !== "" + Me(e) && (t.value = "" + Me(e))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      e != null
        ? _r(t, y, Me(e))
        : n != null
          ? _r(t, y, Me(n))
          : s != null && t.removeAttribute("value"),
      r == null && o != null && (t.defaultChecked = !!o),
      r != null &&
        (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (t.name = "" + Me(b))
        : t.removeAttribute("name"));
  }
  function Ef(t, e, n, s, r, o, y, b) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) return;
      ((n = n != null ? "" + Me(n) : ""),
        (e = e != null ? "" + Me(e) : n),
        b || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((s = s ?? r),
      (s = typeof s != "function" && typeof s != "symbol" && !!s),
      (t.checked = b ? t.checked : !!s),
      (t.defaultChecked = !!s),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y));
  }
  function _r(t, e, n) {
    (e === "number" && Ks(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ra(t, e, n, s) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        ((r = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && s && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Me(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          ((t[r].selected = !0), s && (t[r].defaultSelected = !0));
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function jf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Me(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Me(n) : "";
  }
  function Mf(t, e, n, s) {
    if (e == null) {
      if (s != null) {
        if (n != null) throw Error(u(92));
        if ($(s)) {
          if (1 < s.length) throw Error(u(93));
          s = s[0];
        }
        n = s;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Me(e)),
      (t.defaultValue = n),
      (s = t.textContent),
      s === n && s !== "" && s !== null && (t.value = s));
  }
  function Oa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var j0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Df(t, e, n) {
    var s = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? s
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : s
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || j0.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Nf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var s in n)
        !n.hasOwnProperty(s) ||
          (e != null && e.hasOwnProperty(s)) ||
          (s.indexOf("--") === 0
            ? t.setProperty(s, "")
            : s === "float"
              ? (t.cssFloat = "")
              : (t[s] = ""));
      for (var r in e)
        ((s = e[r]), e.hasOwnProperty(r) && n[r] !== s && Df(t, r, s));
    } else for (var o in e) e.hasOwnProperty(o) && Df(t, o, e[o]);
  }
  function wr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var M0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    D0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $s(t) {
    return D0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var zr = null;
  function Vr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ca = null,
    _a = null;
  function Rf(t) {
    var e = ja(t);
    if (e && (t = e.stateNode)) {
      var n = t[oe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Cr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + De("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var s = n[e];
              if (s !== t && s.form === t.form) {
                var r = s[oe] || null;
                if (!r) throw Error(u(90));
                Cr(
                  s,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((s = n[e]), s.form === t.form && Af(s));
          }
          break t;
        case "textarea":
          jf(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Ra(t, !!n.multiple, e, !1));
      }
    }
  }
  var kr = !1;
  function Of(t, e, n) {
    if (kr) return t(e, n);
    kr = !0;
    try {
      var s = t(e);
      return s;
    } finally {
      if (
        ((kr = !1),
        (Ca !== null || _a !== null) &&
          (_l(), Ca && ((e = Ca), (t = _a), (_a = Ca = null), Rf(e), t)))
      )
        for (e = 0; e < t.length; e++) Rf(t[e]);
    }
  }
  function Mi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var s = n[oe] || null;
    if (s === null) return null;
    n = s[e];
    t: switch (e) {
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
        ((s = !s.disabled) ||
          ((t = t.type),
          (s = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !s));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(u(231, e, typeof n));
    return n;
  }
  var en = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ur = !1;
  if (en)
    try {
      var Di = {};
      (Object.defineProperty(Di, "passive", {
        get: function () {
          Ur = !0;
        },
      }),
        window.addEventListener("test", Di, Di),
        window.removeEventListener("test", Di, Di));
    } catch {
      Ur = !1;
    }
  var An = null,
    Br = null,
    Qs = null;
  function Cf() {
    if (Qs) return Qs;
    var t,
      e = Br,
      n = e.length,
      s,
      r = "value" in An ? An.value : An.textContent,
      o = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var y = n - t;
    for (s = 1; s <= y && e[n - s] === r[o - s]; s++);
    return (Qs = r.slice(t, 1 < s ? 1 - s : void 0));
  }
  function Ps(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Js() {
    return !0;
  }
  function _f() {
    return !1;
  }
  function ce(t) {
    function e(n, s, r, o, y) {
      ((this._reactName = n),
        (this._targetInst = r),
        (this.type = s),
        (this.nativeEvent = o),
        (this.target = y),
        (this.currentTarget = null));
      for (var b in t)
        t.hasOwnProperty(b) && ((n = t[b]), (this[b] = n ? n(o) : o[b]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Js
          : _f),
        (this.isPropagationStopped = _f),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Js));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Js));
        },
        persist: function () {},
        isPersistent: Js,
      }),
      e
    );
  }
  var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Is = ce(Wn),
    Ni = g({}, Wn, { view: 0, detail: 0 }),
    N0 = ce(Ni),
    Lr,
    Yr,
    Ri,
    Fs = g({}, Ni, {
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
      getModifierState: qr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ri &&
              (Ri && t.type === "mousemove"
                ? ((Lr = t.screenX - Ri.screenX), (Yr = t.screenY - Ri.screenY))
                : (Yr = Lr = 0),
              (Ri = t)),
            Lr);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Yr;
      },
    }),
    wf = ce(Fs),
    R0 = g({}, Fs, { dataTransfer: 0 }),
    O0 = ce(R0),
    C0 = g({}, Ni, { relatedTarget: 0 }),
    Hr = ce(C0),
    _0 = g({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    w0 = ce(_0),
    z0 = g({}, Wn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    V0 = ce(z0),
    k0 = g({}, Wn, { data: 0 }),
    zf = ce(k0),
    U0 = {
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
      MozPrintableKey: "Unidentified",
    },
    B0 = {
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
      224: "Meta",
    },
    L0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Y0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = L0[t])
        ? !!e[t]
        : !1;
  }
  function qr() {
    return Y0;
  }
  var H0 = g({}, Ni, {
      key: function (t) {
        if (t.key) {
          var e = U0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ps(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? B0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qr,
      charCode: function (t) {
        return t.type === "keypress" ? Ps(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ps(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    q0 = ce(H0),
    X0 = g({}, Fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Vf = ce(X0),
    G0 = g({}, Ni, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qr,
    }),
    Z0 = ce(G0),
    K0 = g({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $0 = ce(K0),
    Q0 = g({}, Fs, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    P0 = ce(Q0),
    J0 = g({}, Wn, { newState: 0, oldState: 0 }),
    I0 = ce(J0),
    F0 = [9, 13, 27, 32],
    Xr = en && "CompositionEvent" in window,
    Oi = null;
  en && "documentMode" in document && (Oi = document.documentMode);
  var W0 = en && "TextEvent" in window && !Oi,
    kf = en && (!Xr || (Oi && 8 < Oi && 11 >= Oi)),
    Uf = " ",
    Bf = !1;
  function Lf(t, e) {
    switch (t) {
      case "keyup":
        return F0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Yf(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var wa = !1;
  function tv(t, e) {
    switch (t) {
      case "compositionend":
        return Yf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Bf = !0), Uf);
      case "textInput":
        return ((t = e.data), t === Uf && Bf ? null : t);
      default:
        return null;
    }
  }
  function ev(t, e) {
    if (wa)
      return t === "compositionend" || (!Xr && Lf(t, e))
        ? ((t = Cf()), (Qs = Br = An = null), (wa = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return kf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var nv = {
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
    week: !0,
  };
  function Hf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!nv[t.type] : e === "textarea";
  }
  function qf(t, e, n, s) {
    (Ca ? (_a ? _a.push(s) : (_a = [s])) : (Ca = s),
      (e = Bl(e, "onChange")),
      0 < e.length &&
        ((n = new Is("onChange", "change", null, n, s)),
        t.push({ event: n, listeners: e })));
  }
  var Ci = null,
    _i = null;
  function av(t) {
    Tm(t, 0);
  }
  function Ws(t) {
    var e = ji(t);
    if (Af(e)) return t;
  }
  function Xf(t, e) {
    if (t === "change") return e;
  }
  var Gf = !1;
  if (en) {
    var Gr;
    if (en) {
      var Zr = "oninput" in document;
      if (!Zr) {
        var Zf = document.createElement("div");
        (Zf.setAttribute("oninput", "return;"),
          (Zr = typeof Zf.oninput == "function"));
      }
      Gr = Zr;
    } else Gr = !1;
    Gf = Gr && (!document.documentMode || 9 < document.documentMode);
  }
  function Kf() {
    Ci && (Ci.detachEvent("onpropertychange", $f), (_i = Ci = null));
  }
  function $f(t) {
    if (t.propertyName === "value" && Ws(_i)) {
      var e = [];
      (qf(e, _i, t, Vr(t)), Of(av, e));
    }
  }
  function iv(t, e, n) {
    t === "focusin"
      ? (Kf(), (Ci = e), (_i = n), Ci.attachEvent("onpropertychange", $f))
      : t === "focusout" && Kf();
  }
  function sv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ws(_i);
  }
  function lv(t, e) {
    if (t === "click") return Ws(e);
  }
  function rv(t, e) {
    if (t === "input" || t === "change") return Ws(e);
  }
  function uv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ve = typeof Object.is == "function" ? Object.is : uv;
  function wi(t, e) {
    if (ve(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      s = Object.keys(e);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var r = n[s];
      if (!xr.call(e, r) || !ve(t[r], e[r])) return !1;
    }
    return !0;
  }
  function Qf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Pf(t, e) {
    var n = Qf(t);
    t = 0;
    for (var s; n; ) {
      if (n.nodeType === 3) {
        if (((s = t + n.textContent.length), t <= e && s >= e))
          return { node: n, offset: e - t };
        t = s;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Qf(n);
    }
  }
  function Jf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Jf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function If(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ks(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ks(t.document);
    }
    return e;
  }
  function Kr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var ov = en && "documentMode" in document && 11 >= document.documentMode,
    za = null,
    $r = null,
    zi = null,
    Qr = !1;
  function Ff(t, e, n) {
    var s =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qr ||
      za == null ||
      za !== Ks(s) ||
      ((s = za),
      "selectionStart" in s && Kr(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (zi && wi(zi, s)) ||
        ((zi = s),
        (s = Bl($r, "onSelect")),
        0 < s.length &&
          ((e = new Is("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: s }),
          (e.target = za))));
  }
  function ta(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Va = {
      animationend: ta("Animation", "AnimationEnd"),
      animationiteration: ta("Animation", "AnimationIteration"),
      animationstart: ta("Animation", "AnimationStart"),
      transitionrun: ta("Transition", "TransitionRun"),
      transitionstart: ta("Transition", "TransitionStart"),
      transitioncancel: ta("Transition", "TransitionCancel"),
      transitionend: ta("Transition", "TransitionEnd"),
    },
    Pr = {},
    Wf = {};
  en &&
    ((Wf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Va.animationend.animation,
      delete Va.animationiteration.animation,
      delete Va.animationstart.animation),
    "TransitionEvent" in window || delete Va.transitionend.transition);
  function ea(t) {
    if (Pr[t]) return Pr[t];
    if (!Va[t]) return t;
    var e = Va[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Wf) return (Pr[t] = e[n]);
    return t;
  }
  var td = ea("animationend"),
    ed = ea("animationiteration"),
    nd = ea("animationstart"),
    cv = ea("transitionrun"),
    fv = ea("transitionstart"),
    dv = ea("transitioncancel"),
    ad = ea("transitionend"),
    id = new Map(),
    Jr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Jr.push("scrollEnd");
  function Be(t, e) {
    (id.set(t, e), Fn(e, [t]));
  }
  var sd = new WeakMap();
  function Ne(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = sd.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Sf(e) }), sd.set(t, e), e);
    }
    return { value: t, source: e, stack: Sf(e) };
  }
  var Re = [],
    ka = 0,
    Ir = 0;
  function tl() {
    for (var t = ka, e = (Ir = ka = 0); e < t; ) {
      var n = Re[e];
      Re[e++] = null;
      var s = Re[e];
      Re[e++] = null;
      var r = Re[e];
      Re[e++] = null;
      var o = Re[e];
      if (((Re[e++] = null), s !== null && r !== null)) {
        var y = s.pending;
        (y === null ? (r.next = r) : ((r.next = y.next), (y.next = r)),
          (s.pending = r));
      }
      o !== 0 && ld(n, r, o);
    }
  }
  function el(t, e, n, s) {
    ((Re[ka++] = t),
      (Re[ka++] = e),
      (Re[ka++] = n),
      (Re[ka++] = s),
      (Ir |= s),
      (t.lanes |= s),
      (t = t.alternate),
      t !== null && (t.lanes |= s));
  }
  function Fr(t, e, n, s) {
    return (el(t, e, n, s), nl(t));
  }
  function Ua(t, e) {
    return (el(t, null, null, e), nl(t));
  }
  function ld(t, e, n) {
    t.lanes |= n;
    var s = t.alternate;
    s !== null && (s.lanes |= n);
    for (var r = !1, o = t.return; o !== null; )
      ((o.childLanes |= n),
        (s = o.alternate),
        s !== null && (s.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = o),
        (o = o.return));
    return t.tag === 3
      ? ((o = t.stateNode),
        r &&
          e !== null &&
          ((r = 31 - ge(n)),
          (t = o.hiddenUpdates),
          (s = t[r]),
          s === null ? (t[r] = [e]) : s.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function nl(t) {
    if (50 < ss) throw ((ss = 0), (io = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ba = {};
  function hv(t, e, n, s) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function be(t, e, n, s) {
    return new hv(t, e, n, s);
  }
  function Wr(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function nn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = be(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function rd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function al(t, e, n, s, r, o) {
    var y = 0;
    if (((s = t), typeof t == "function")) Wr(t) && (y = 1);
    else if (typeof t == "string")
      y = pb(t, n, W.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case ot:
          return (
            (t = be(31, n, e, r)),
            (t.elementType = ot),
            (t.lanes = o),
            t
          );
        case w:
          return na(n.children, r, o, e);
        case q:
          ((y = 8), (r |= 24));
          break;
        case V:
          return (
            (t = be(12, n, e, r | 2)),
            (t.elementType = V),
            (t.lanes = o),
            t
          );
        case G:
          return ((t = be(13, n, e, r)), (t.elementType = G), (t.lanes = o), t);
        case J:
          return ((t = be(19, n, e, r)), (t.elementType = J), (t.lanes = o), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case k:
              case B:
                y = 10;
                break t;
              case C:
                y = 9;
                break t;
              case P:
                y = 11;
                break t;
              case F:
                y = 14;
                break t;
              case I:
                ((y = 16), (s = null));
                break t;
            }
          ((y = 29),
            (n = Error(u(130, t === null ? "null" : typeof t, ""))),
            (s = null));
      }
    return (
      (e = be(y, n, e, r)),
      (e.elementType = t),
      (e.type = s),
      (e.lanes = o),
      e
    );
  }
  function na(t, e, n, s) {
    return ((t = be(7, t, s, e)), (t.lanes = n), t);
  }
  function tu(t, e, n) {
    return ((t = be(6, t, null, e)), (t.lanes = n), t);
  }
  function eu(t, e, n) {
    return (
      (e = be(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var La = [],
    Ya = 0,
    il = null,
    sl = 0,
    Oe = [],
    Ce = 0,
    aa = null,
    an = 1,
    sn = "";
  function ia(t, e) {
    ((La[Ya++] = sl), (La[Ya++] = il), (il = t), (sl = e));
  }
  function ud(t, e, n) {
    ((Oe[Ce++] = an), (Oe[Ce++] = sn), (Oe[Ce++] = aa), (aa = t));
    var s = an;
    t = sn;
    var r = 32 - ge(s) - 1;
    ((s &= ~(1 << r)), (n += 1));
    var o = 32 - ge(e) + r;
    if (30 < o) {
      var y = r - (r % 5);
      ((o = (s & ((1 << y) - 1)).toString(32)),
        (s >>= y),
        (r -= y),
        (an = (1 << (32 - ge(e) + r)) | (n << r) | s),
        (sn = o + t));
    } else ((an = (1 << o) | (n << r) | s), (sn = t));
  }
  function nu(t) {
    t.return !== null && (ia(t, 1), ud(t, 1, 0));
  }
  function au(t) {
    for (; t === il; )
      ((il = La[--Ya]), (La[Ya] = null), (sl = La[--Ya]), (La[Ya] = null));
    for (; t === aa; )
      ((aa = Oe[--Ce]),
        (Oe[Ce] = null),
        (sn = Oe[--Ce]),
        (Oe[Ce] = null),
        (an = Oe[--Ce]),
        (Oe[Ce] = null));
  }
  var re = null,
    Ut = null,
    At = !1,
    sa = null,
    Ge = !1,
    iu = Error(u(519));
  function la(t) {
    var e = Error(u(418, ""));
    throw (Ui(Ne(e, t)), iu);
  }
  function od(t) {
    var e = t.stateNode,
      n = t.type,
      s = t.memoizedProps;
    switch (((e[ne] = t), (e[oe] = s), n)) {
      case "dialog":
        (pt("cancel", e), pt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        pt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < rs.length; n++) pt(rs[n], e);
        break;
      case "source":
        pt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (pt("error", e), pt("load", e));
        break;
      case "details":
        pt("toggle", e);
        break;
      case "input":
        (pt("invalid", e),
          Ef(
            e,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0,
          ),
          Zs(e));
        break;
      case "select":
        pt("invalid", e);
        break;
      case "textarea":
        (pt("invalid", e), Mf(e, s.value, s.defaultValue, s.children), Zs(e));
    }
    ((n = s.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      s.suppressHydrationWarning === !0 ||
      Mm(e.textContent, n)
        ? (s.popover != null && (pt("beforetoggle", e), pt("toggle", e)),
          s.onScroll != null && pt("scroll", e),
          s.onScrollEnd != null && pt("scrollend", e),
          s.onClick != null && (e.onclick = Ll),
          (e = !0))
        : (e = !1),
      e || la(t));
  }
  function cd(t) {
    for (re = t.return; re; )
      switch (re.tag) {
        case 5:
        case 13:
          Ge = !1;
          return;
        case 27:
        case 3:
          Ge = !0;
          return;
        default:
          re = re.return;
      }
  }
  function Vi(t) {
    if (t !== re) return !1;
    if (!At) return (cd(t), (At = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || So(t.type, t.memoizedProps))),
        (n = !n)),
      n && Ut && la(t),
      cd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Ut = Ye(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Ut = null;
      }
    } else
      e === 27
        ? ((e = Ut), Ln(t.type) ? ((t = jo), (jo = null), (Ut = t)) : (Ut = e))
        : (Ut = re ? Ye(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ki() {
    ((Ut = re = null), (At = !1));
  }
  function fd() {
    var t = sa;
    return (
      t !== null &&
        (he === null ? (he = t) : he.push.apply(he, t), (sa = null)),
      t
    );
  }
  function Ui(t) {
    sa === null ? (sa = [t]) : sa.push(t);
  }
  var su = U(null),
    ra = null,
    ln = null;
  function En(t, e, n) {
    (K(su, e._currentValue), (e._currentValue = n));
  }
  function rn(t) {
    ((t._currentValue = su.current), Q(su));
  }
  function lu(t, e, n) {
    for (; t !== null; ) {
      var s = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
          : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function ru(t, e, n, s) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var o = r.dependencies;
      if (o !== null) {
        var y = r.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var b = o;
          o = r;
          for (var T = 0; T < e.length; T++)
            if (b.context === e[T]) {
              ((o.lanes |= n),
                (b = o.alternate),
                b !== null && (b.lanes |= n),
                lu(o.return, n, t),
                s || (y = null));
              break t;
            }
          o = b.next;
        }
      } else if (r.tag === 18) {
        if (((y = r.return), y === null)) throw Error(u(341));
        ((y.lanes |= n),
          (o = y.alternate),
          o !== null && (o.lanes |= n),
          lu(y, n, t),
          (y = null));
      } else y = r.child;
      if (y !== null) y.return = r;
      else
        for (y = r; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((r = y.sibling), r !== null)) {
            ((r.return = y.return), (y = r));
            break;
          }
          y = y.return;
        }
      r = y;
    }
  }
  function Bi(t, e, n, s) {
    t = null;
    for (var r = e, o = !1; r !== null; ) {
      if (!o) {
        if ((r.flags & 524288) !== 0) o = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var y = r.alternate;
        if (y === null) throw Error(u(387));
        if (((y = y.memoizedProps), y !== null)) {
          var b = r.type;
          ve(r.pendingProps.value, y.value) ||
            (t !== null ? t.push(b) : (t = [b]));
        }
      } else if (r === pe.current) {
        if (((y = r.alternate), y === null)) throw Error(u(387));
        y.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(hs) : (t = [hs]));
      }
      r = r.return;
    }
    (t !== null && ru(e, t, n, s), (e.flags |= 262144));
  }
  function ll(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ve(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ua(t) {
    ((ra = t),
      (ln = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function ae(t) {
    return dd(ra, t);
  }
  function rl(t, e) {
    return (ra === null && ua(t), dd(t, e));
  }
  function dd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), ln === null)) {
      if (t === null) throw Error(u(308));
      ((ln = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else ln = ln.next = e;
    return n;
  }
  var mv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, s) {
                  t.push(s);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    pv = a.unstable_scheduleCallback,
    yv = a.unstable_NormalPriority,
    Kt = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function uu() {
    return { controller: new mv(), data: new Map(), refCount: 0 };
  }
  function Li(t) {
    (t.refCount--,
      t.refCount === 0 &&
        pv(yv, function () {
          t.controller.abort();
        }));
  }
  var Yi = null,
    ou = 0,
    Ha = 0,
    qa = null;
  function gv(t, e) {
    if (Yi === null) {
      var n = (Yi = []);
      ((ou = 0),
        (Ha = fo()),
        (qa = {
          status: "pending",
          value: void 0,
          then: function (s) {
            n.push(s);
          },
        }));
    }
    return (ou++, e.then(hd, hd), e);
  }
  function hd() {
    if (--ou === 0 && Yi !== null) {
      qa !== null && (qa.status = "fulfilled");
      var t = Yi;
      ((Yi = null), (Ha = 0), (qa = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function vv(t, e) {
    var n = [],
      s = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      t.then(
        function () {
          ((s.status = "fulfilled"), (s.value = e));
          for (var r = 0; r < n.length; r++) (0, n[r])(e);
        },
        function (r) {
          for (s.status = "rejected", s.reason = r, r = 0; r < n.length; r++)
            (0, n[r])(void 0);
        },
      ),
      s
    );
  }
  var md = D.S;
  D.S = function (t, e) {
    (typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      gv(t, e),
      md !== null && md(t, e));
  };
  var oa = U(null);
  function cu() {
    var t = oa.current;
    return t !== null ? t : Ot.pooledCache;
  }
  function ul(t, e) {
    e === null ? K(oa, oa.current) : K(oa, e.pool);
  }
  function pd() {
    var t = cu();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var Hi = Error(u(460)),
    yd = Error(u(474)),
    ol = Error(u(542)),
    fu = { then: function () {} };
  function gd(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function cl() {}
  function vd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(cl, cl), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), xd(t), t);
      default:
        if (typeof e.status == "string") e.then(cl, cl);
        else {
          if (((t = Ot), t !== null && 100 < t.shellSuspendCounter))
            throw Error(u(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (s) {
                if (e.status === "pending") {
                  var r = e;
                  ((r.status = "fulfilled"), (r.value = s));
                }
              },
              function (s) {
                if (e.status === "pending") {
                  var r = e;
                  ((r.status = "rejected"), (r.reason = s));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), xd(t), t);
        }
        throw ((qi = e), Hi);
    }
  }
  var qi = null;
  function bd() {
    if (qi === null) throw Error(u(459));
    var t = qi;
    return ((qi = null), t);
  }
  function xd(t) {
    if (t === Hi || t === ol) throw Error(u(483));
  }
  var jn = !1;
  function du(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function hu(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Mn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Dn(t, e, n) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (Et & 2) !== 0)) {
      var r = s.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (s.pending = e),
        (e = nl(t)),
        ld(t, null, n),
        e
      );
    }
    return (el(t, s, e, n), nl(t));
  }
  function Xi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var s = e.lanes;
      ((s &= t.pendingLanes), (n |= s), (e.lanes = n), hf(t, n));
    }
  }
  function mu(t, e) {
    var n = t.updateQueue,
      s = t.alternate;
    if (s !== null && ((s = s.updateQueue), n === s)) {
      var r = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var y = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (o === null ? (r = o = y) : (o = o.next = y), (n = n.next));
        } while (n !== null);
        o === null ? (r = o = e) : (o = o.next = e);
      } else r = o = e;
      ((n = {
        baseState: s.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: o,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var pu = !1;
  function Gi() {
    if (pu) {
      var t = qa;
      if (t !== null) throw t;
    }
  }
  function Zi(t, e, n, s) {
    pu = !1;
    var r = t.updateQueue;
    jn = !1;
    var o = r.firstBaseUpdate,
      y = r.lastBaseUpdate,
      b = r.shared.pending;
    if (b !== null) {
      r.shared.pending = null;
      var T = b,
        O = T.next;
      ((T.next = null), y === null ? (o = O) : (y.next = O), (y = T));
      var L = t.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (b = L.lastBaseUpdate),
        b !== y &&
          (b === null ? (L.firstBaseUpdate = O) : (b.next = O),
          (L.lastBaseUpdate = T)));
    }
    if (o !== null) {
      var H = r.baseState;
      ((y = 0), (L = O = T = null), (b = o));
      do {
        var _ = b.lane & -536870913,
          z = _ !== b.lane;
        if (z ? (vt & _) === _ : (s & _) === _) {
          (_ !== 0 && _ === Ha && (pu = !0),
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var lt = t,
              it = b;
            _ = e;
            var Nt = n;
            switch (it.tag) {
              case 1:
                if (((lt = it.payload), typeof lt == "function")) {
                  H = lt.call(Nt, H, _);
                  break t;
                }
                H = lt;
                break t;
              case 3:
                lt.flags = (lt.flags & -65537) | 128;
              case 0:
                if (
                  ((lt = it.payload),
                  (_ = typeof lt == "function" ? lt.call(Nt, H, _) : lt),
                  _ == null)
                )
                  break t;
                H = g({}, H, _);
                break t;
              case 2:
                jn = !0;
            }
          }
          ((_ = b.callback),
            _ !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = r.callbacks),
              z === null ? (r.callbacks = [_]) : z.push(_)));
        } else
          ((z = {
            lane: _,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            L === null ? ((O = L = z), (T = H)) : (L = L.next = z),
            (y |= _));
        if (((b = b.next), b === null)) {
          if (((b = r.shared.pending), b === null)) break;
          ((z = b),
            (b = z.next),
            (z.next = null),
            (r.lastBaseUpdate = z),
            (r.shared.pending = null));
        }
      } while (!0);
      (L === null && (T = H),
        (r.baseState = T),
        (r.firstBaseUpdate = O),
        (r.lastBaseUpdate = L),
        o === null && (r.shared.lanes = 0),
        (Vn |= y),
        (t.lanes = y),
        (t.memoizedState = H));
    }
  }
  function Sd(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function Td(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Sd(n[t], e);
  }
  var Xa = U(null),
    fl = U(0);
  function Ad(t, e) {
    ((t = mn), K(fl, t), K(Xa, e), (mn = t | e.baseLanes));
  }
  function yu() {
    (K(fl, mn), K(Xa, Xa.current));
  }
  function gu() {
    ((mn = fl.current), Q(Xa), Q(fl));
  }
  var Nn = 0,
    dt = null,
    Mt = null,
    Xt = null,
    dl = !1,
    Ga = !1,
    ca = !1,
    hl = 0,
    Ki = 0,
    Za = null,
    bv = 0;
  function Yt() {
    throw Error(u(321));
  }
  function vu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!ve(t[n], e[n])) return !1;
    return !0;
  }
  function bu(t, e, n, s, r, o) {
    return (
      (Nn = o),
      (dt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (D.H = t === null || t.memoizedState === null ? lh : rh),
      (ca = !1),
      (o = n(s, r)),
      (ca = !1),
      Ga && (o = jd(e, n, s, r)),
      Ed(t),
      o
    );
  }
  function Ed(t) {
    D.H = bl;
    var e = Mt !== null && Mt.next !== null;
    if (((Nn = 0), (Xt = Mt = dt = null), (dl = !1), (Ki = 0), (Za = null), e))
      throw Error(u(300));
    t === null ||
      Pt ||
      ((t = t.dependencies), t !== null && ll(t) && (Pt = !0));
  }
  function jd(t, e, n, s) {
    dt = t;
    var r = 0;
    do {
      if ((Ga && (Za = null), (Ki = 0), (Ga = !1), 25 <= r))
        throw Error(u(301));
      if (((r += 1), (Xt = Mt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((D.H = Mv), (o = e(n, s)));
    } while (Ga);
    return o;
  }
  function xv() {
    var t = D.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? $i(e) : e),
      (t = t.useState()[0]),
      (Mt !== null ? Mt.memoizedState : null) !== t && (dt.flags |= 1024),
      e
    );
  }
  function xu() {
    var t = hl !== 0;
    return ((hl = 0), t);
  }
  function Su(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Tu(t) {
    if (dl) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      dl = !1;
    }
    ((Nn = 0), (Xt = Mt = dt = null), (Ga = !1), (Ki = hl = 0), (Za = null));
  }
  function fe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Xt === null ? (dt.memoizedState = Xt = t) : (Xt = Xt.next = t), Xt);
  }
  function Gt() {
    if (Mt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = Xt === null ? dt.memoizedState : Xt.next;
    if (e !== null) ((Xt = e), (Mt = t));
    else {
      if (t === null)
        throw dt.alternate === null ? Error(u(467)) : Error(u(310));
      ((Mt = t),
        (t = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Xt === null ? (dt.memoizedState = Xt = t) : (Xt = Xt.next = t));
    }
    return Xt;
  }
  function Au() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $i(t) {
    var e = Ki;
    return (
      (Ki += 1),
      Za === null && (Za = []),
      (t = vd(Za, t, e)),
      (e = dt),
      (Xt === null ? e.memoizedState : Xt.next) === null &&
        ((e = e.alternate),
        (D.H = e === null || e.memoizedState === null ? lh : rh)),
      t
    );
  }
  function ml(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return $i(t);
      if (t.$$typeof === B) return ae(t);
    }
    throw Error(u(438, String(t)));
  }
  function Eu(t) {
    var e = null,
      n = dt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var s = dt.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (e = {
              data: s.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Au()), (dt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), s = 0; s < t; s++) n[s] = gt;
    return (e.index++, n);
  }
  function un(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function pl(t) {
    var e = Gt();
    return ju(e, Mt, t);
  }
  function ju(t, e, n) {
    var s = t.queue;
    if (s === null) throw Error(u(311));
    s.lastRenderedReducer = n;
    var r = t.baseQueue,
      o = s.pending;
    if (o !== null) {
      if (r !== null) {
        var y = r.next;
        ((r.next = o.next), (o.next = y));
      }
      ((e.baseQueue = r = o), (s.pending = null));
    }
    if (((o = t.baseState), r === null)) t.memoizedState = o;
    else {
      e = r.next;
      var b = (y = null),
        T = null,
        O = e,
        L = !1;
      do {
        var H = O.lane & -536870913;
        if (H !== O.lane ? (vt & H) === H : (Nn & H) === H) {
          var _ = O.revertLane;
          if (_ === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: O.action,
                  hasEagerState: O.hasEagerState,
                  eagerState: O.eagerState,
                  next: null,
                }),
              H === Ha && (L = !0));
          else if ((Nn & _) === _) {
            ((O = O.next), _ === Ha && (L = !0));
            continue;
          } else
            ((H = {
              lane: 0,
              revertLane: O.revertLane,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null,
            }),
              T === null ? ((b = T = H), (y = o)) : (T = T.next = H),
              (dt.lanes |= _),
              (Vn |= _));
          ((H = O.action),
            ca && n(o, H),
            (o = O.hasEagerState ? O.eagerState : n(o, H)));
        } else
          ((_ = {
            lane: H,
            revertLane: O.revertLane,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          }),
            T === null ? ((b = T = _), (y = o)) : (T = T.next = _),
            (dt.lanes |= H),
            (Vn |= H));
        O = O.next;
      } while (O !== null && O !== e);
      if (
        (T === null ? (y = o) : (T.next = b),
        !ve(o, t.memoizedState) && ((Pt = !0), L && ((n = qa), n !== null)))
      )
        throw n;
      ((t.memoizedState = o),
        (t.baseState = y),
        (t.baseQueue = T),
        (s.lastRenderedState = o));
    }
    return (r === null && (s.lanes = 0), [t.memoizedState, s.dispatch]);
  }
  function Mu(t) {
    var e = Gt(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var s = n.dispatch,
      r = n.pending,
      o = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var y = (r = r.next);
      do ((o = t(o, y.action)), (y = y.next));
      while (y !== r);
      (ve(o, e.memoizedState) || (Pt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, s];
  }
  function Md(t, e, n) {
    var s = dt,
      r = Gt(),
      o = At;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var y = !ve((Mt || r).memoizedState, n);
    (y && ((r.memoizedState = n), (Pt = !0)), (r = r.queue));
    var b = Rd.bind(null, s, r, t);
    if (
      (Qi(2048, 8, b, [t]),
      r.getSnapshot !== e || y || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Ka(9, yl(), Nd.bind(null, s, r, n, e), null),
        Ot === null)
      )
        throw Error(u(349));
      o || (Nn & 124) !== 0 || Dd(s, e, n);
    }
    return n;
  }
  function Dd(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = dt.updateQueue),
      e === null
        ? ((e = Au()), (dt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Nd(t, e, n, s) {
    ((e.value = n), (e.getSnapshot = s), Od(e) && Cd(t));
  }
  function Rd(t, e, n) {
    return n(function () {
      Od(e) && Cd(t);
    });
  }
  function Od(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ve(t, n);
    } catch {
      return !0;
    }
  }
  function Cd(t) {
    var e = Ua(t, 2);
    e !== null && Ee(e, t, 2);
  }
  function Du(t) {
    var e = fe();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ca)) {
        Sn(!0);
        try {
          n();
        } finally {
          Sn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: t,
      }),
      e
    );
  }
  function _d(t, e, n, s) {
    return ((t.baseState = n), ju(t, Mt, typeof s == "function" ? s : un));
  }
  function Sv(t, e, n, s, r) {
    if (vl(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          o.listeners.push(y);
        },
      };
      (D.T !== null ? n(!0) : (o.isTransition = !1),
        s(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), wd(e, o))
          : ((o.next = n.next), (e.pending = n.next = o)));
    }
  }
  function wd(t, e) {
    var n = e.action,
      s = e.payload,
      r = t.state;
    if (e.isTransition) {
      var o = D.T,
        y = {};
      D.T = y;
      try {
        var b = n(r, s),
          T = D.S;
        (T !== null && T(y, b), zd(t, e, b));
      } catch (O) {
        Nu(t, e, O);
      } finally {
        D.T = o;
      }
    } else
      try {
        ((o = n(r, s)), zd(t, e, o));
      } catch (O) {
        Nu(t, e, O);
      }
  }
  function zd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (s) {
            Vd(t, e, s);
          },
          function (s) {
            return Nu(t, e, s);
          },
        )
      : Vd(t, e, n);
  }
  function Vd(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      kd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), wd(t, n))));
  }
  function Nu(t, e, n) {
    var s = t.pending;
    if (((t.pending = null), s !== null)) {
      s = s.next;
      do ((e.status = "rejected"), (e.reason = n), kd(e), (e = e.next));
      while (e !== s);
    }
    t.action = null;
  }
  function kd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ud(t, e) {
    return e;
  }
  function Bd(t, e) {
    if (At) {
      var n = Ot.formState;
      if (n !== null) {
        t: {
          var s = dt;
          if (At) {
            if (Ut) {
              e: {
                for (var r = Ut, o = Ge; r.nodeType !== 8; ) {
                  if (!o) {
                    r = null;
                    break e;
                  }
                  if (((r = Ye(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                ((o = r.data), (r = o === "F!" || o === "F" ? r : null));
              }
              if (r) {
                ((Ut = Ye(r.nextSibling)), (s = r.data === "F!"));
                break t;
              }
            }
            la(s);
          }
          s = !1;
        }
        s && (e = n[0]);
      }
    }
    return (
      (n = fe()),
      (n.memoizedState = n.baseState = e),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ud,
        lastRenderedState: e,
      }),
      (n.queue = s),
      (n = ah.bind(null, dt, s)),
      (s.dispatch = n),
      (s = Du(!1)),
      (o = wu.bind(null, dt, !1, s.queue)),
      (s = fe()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (s.queue = r),
      (n = Sv.bind(null, dt, r, o, n)),
      (r.dispatch = n),
      (s.memoizedState = t),
      [e, n, !1]
    );
  }
  function Ld(t) {
    var e = Gt();
    return Yd(e, Mt, t);
  }
  function Yd(t, e, n) {
    if (
      ((e = ju(t, e, Ud)[0]),
      (t = pl(un)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var s = $i(e);
      } catch (y) {
        throw y === Hi ? ol : y;
      }
    else s = e;
    e = Gt();
    var r = e.queue,
      o = r.dispatch;
    return (
      n !== e.memoizedState &&
        ((dt.flags |= 2048), Ka(9, yl(), Tv.bind(null, r, n), null)),
      [s, o, t]
    );
  }
  function Tv(t, e) {
    t.action = e;
  }
  function Hd(t) {
    var e = Gt(),
      n = Mt;
    if (n !== null) return Yd(e, n, t);
    (Gt(), (e = e.memoizedState), (n = Gt()));
    var s = n.queue.dispatch;
    return ((n.memoizedState = t), [e, s, !1]);
  }
  function Ka(t, e, n, s) {
    return (
      (t = { tag: t, create: n, deps: s, inst: e, next: null }),
      (e = dt.updateQueue),
      e === null && ((e = Au()), (dt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((s = n.next), (n.next = t), (t.next = s), (e.lastEffect = t)),
      t
    );
  }
  function yl() {
    return { destroy: void 0, resource: void 0 };
  }
  function qd() {
    return Gt().memoizedState;
  }
  function gl(t, e, n, s) {
    var r = fe();
    ((s = s === void 0 ? null : s),
      (dt.flags |= t),
      (r.memoizedState = Ka(1 | e, yl(), n, s)));
  }
  function Qi(t, e, n, s) {
    var r = Gt();
    s = s === void 0 ? null : s;
    var o = r.memoizedState.inst;
    Mt !== null && s !== null && vu(s, Mt.memoizedState.deps)
      ? (r.memoizedState = Ka(e, o, n, s))
      : ((dt.flags |= t), (r.memoizedState = Ka(1 | e, o, n, s)));
  }
  function Xd(t, e) {
    gl(8390656, 8, t, e);
  }
  function Gd(t, e) {
    Qi(2048, 8, t, e);
  }
  function Zd(t, e) {
    return Qi(4, 2, t, e);
  }
  function Kd(t, e) {
    return Qi(4, 4, t, e);
  }
  function $d(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Qd(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), Qi(4, 4, $d.bind(null, e, t), n));
  }
  function Ru() {}
  function Pd(t, e) {
    var n = Gt();
    e = e === void 0 ? null : e;
    var s = n.memoizedState;
    return e !== null && vu(e, s[1]) ? s[0] : ((n.memoizedState = [t, e]), t);
  }
  function Jd(t, e) {
    var n = Gt();
    e = e === void 0 ? null : e;
    var s = n.memoizedState;
    if (e !== null && vu(e, s[1])) return s[0];
    if (((s = t()), ca)) {
      Sn(!0);
      try {
        t();
      } finally {
        Sn(!1);
      }
    }
    return ((n.memoizedState = [s, e]), s);
  }
  function Ou(t, e, n) {
    return n === void 0 || (Nn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Wh()), (dt.lanes |= t), (Vn |= t), n);
  }
  function Id(t, e, n, s) {
    return ve(n, e)
      ? n
      : Xa.current !== null
        ? ((t = Ou(t, n, s)), ve(t, e) || (Pt = !0), t)
        : (Nn & 42) === 0
          ? ((Pt = !0), (t.memoizedState = n))
          : ((t = Wh()), (dt.lanes |= t), (Vn |= t), e);
  }
  function Fd(t, e, n, s, r) {
    var o = N.p;
    N.p = o !== 0 && 8 > o ? o : 8;
    var y = D.T,
      b = {};
    ((D.T = b), wu(t, !1, e, n));
    try {
      var T = r(),
        O = D.S;
      if (
        (O !== null && O(b, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var L = vv(T, s);
        Pi(t, e, L, Ae(t));
      } else Pi(t, e, s, Ae(t));
    } catch (H) {
      Pi(t, e, { then: function () {}, status: "rejected", reason: H }, Ae());
    } finally {
      ((N.p = o), (D.T = y));
    }
  }
  function Av() {}
  function Cu(t, e, n, s) {
    if (t.tag !== 5) throw Error(u(476));
    var r = Wd(t).queue;
    Fd(
      t,
      r,
      e,
      X,
      n === null
        ? Av
        : function () {
            return (th(t), n(s));
          },
    );
  }
  function Wd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: X,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: un,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function th(t) {
    var e = Wd(t).next.queue;
    Pi(t, e, {}, Ae());
  }
  function _u() {
    return ae(hs);
  }
  function eh() {
    return Gt().memoizedState;
  }
  function nh() {
    return Gt().memoizedState;
  }
  function Ev(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ae();
          t = Mn(n);
          var s = Dn(e, t, n);
          (s !== null && (Ee(s, e, n), Xi(s, e, n)),
            (e = { cache: uu() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function jv(t, e, n) {
    var s = Ae();
    ((n = {
      lane: s,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vl(t)
        ? ih(e, n)
        : ((n = Fr(t, e, n, s)), n !== null && (Ee(n, t, s), sh(n, e, s))));
  }
  function ah(t, e, n) {
    var s = Ae();
    Pi(t, e, n, s);
  }
  function Pi(t, e, n, s) {
    var r = {
      lane: s,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vl(t)) ih(e, r);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var y = e.lastRenderedState,
            b = o(y, n);
          if (((r.hasEagerState = !0), (r.eagerState = b), ve(b, y)))
            return (el(t, e, r, 0), Ot === null && tl(), !1);
        } catch {
        } finally {
        }
      if (((n = Fr(t, e, r, s)), n !== null))
        return (Ee(n, t, s), sh(n, e, s), !0);
    }
    return !1;
  }
  function wu(t, e, n, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: fo(),
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vl(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = Fr(t, n, s, 2)), e !== null && Ee(e, t, 2));
  }
  function vl(t) {
    var e = t.alternate;
    return t === dt || (e !== null && e === dt);
  }
  function ih(t, e) {
    Ga = dl = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function sh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var s = e.lanes;
      ((s &= t.pendingLanes), (n |= s), (e.lanes = n), hf(t, n));
    }
  }
  var bl = {
      readContext: ae,
      use: ml,
      useCallback: Yt,
      useContext: Yt,
      useEffect: Yt,
      useImperativeHandle: Yt,
      useLayoutEffect: Yt,
      useInsertionEffect: Yt,
      useMemo: Yt,
      useReducer: Yt,
      useRef: Yt,
      useState: Yt,
      useDebugValue: Yt,
      useDeferredValue: Yt,
      useTransition: Yt,
      useSyncExternalStore: Yt,
      useId: Yt,
      useHostTransitionStatus: Yt,
      useFormState: Yt,
      useActionState: Yt,
      useOptimistic: Yt,
      useMemoCache: Yt,
      useCacheRefresh: Yt,
    },
    lh = {
      readContext: ae,
      use: ml,
      useCallback: function (t, e) {
        return ((fe().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: ae,
      useEffect: Xd,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          gl(4194308, 4, $d.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return gl(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        gl(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = fe();
        e = e === void 0 ? null : e;
        var s = t();
        if (ca) {
          Sn(!0);
          try {
            t();
          } finally {
            Sn(!1);
          }
        }
        return ((n.memoizedState = [s, e]), s);
      },
      useReducer: function (t, e, n) {
        var s = fe();
        if (n !== void 0) {
          var r = n(e);
          if (ca) {
            Sn(!0);
            try {
              n(e);
            } finally {
              Sn(!1);
            }
          }
        } else r = e;
        return (
          (s.memoizedState = s.baseState = r),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: r,
          }),
          (s.queue = t),
          (t = t.dispatch = jv.bind(null, dt, t)),
          [s.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = fe();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Du(t);
        var e = t.queue,
          n = ah.bind(null, dt, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Ru,
      useDeferredValue: function (t, e) {
        var n = fe();
        return Ou(n, t, e);
      },
      useTransition: function () {
        var t = Du(!1);
        return (
          (t = Fd.bind(null, dt, t.queue, !0, !1)),
          (fe().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var s = dt,
          r = fe();
        if (At) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), Ot === null)) throw Error(u(349));
          (vt & 124) !== 0 || Dd(s, e, n);
        }
        r.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (r.queue = o),
          Xd(Rd.bind(null, s, o, t), [t]),
          (s.flags |= 2048),
          Ka(9, yl(), Nd.bind(null, s, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = fe(),
          e = Ot.identifierPrefix;
        if (At) {
          var n = sn,
            s = an;
          ((n = (s & ~(1 << (32 - ge(s) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = hl++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»"));
        } else ((n = bv++), (e = "«" + e + "r" + n.toString(32) + "»"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: _u,
      useFormState: Bd,
      useActionState: Bd,
      useOptimistic: function (t) {
        var e = fe();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = wu.bind(null, dt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Eu,
      useCacheRefresh: function () {
        return (fe().memoizedState = Ev.bind(null, dt));
      },
    },
    rh = {
      readContext: ae,
      use: ml,
      useCallback: Pd,
      useContext: ae,
      useEffect: Gd,
      useImperativeHandle: Qd,
      useInsertionEffect: Zd,
      useLayoutEffect: Kd,
      useMemo: Jd,
      useReducer: pl,
      useRef: qd,
      useState: function () {
        return pl(un);
      },
      useDebugValue: Ru,
      useDeferredValue: function (t, e) {
        var n = Gt();
        return Id(n, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = pl(un)[0],
          e = Gt().memoizedState;
        return [typeof t == "boolean" ? t : $i(t), e];
      },
      useSyncExternalStore: Md,
      useId: eh,
      useHostTransitionStatus: _u,
      useFormState: Ld,
      useActionState: Ld,
      useOptimistic: function (t, e) {
        var n = Gt();
        return _d(n, Mt, t, e);
      },
      useMemoCache: Eu,
      useCacheRefresh: nh,
    },
    Mv = {
      readContext: ae,
      use: ml,
      useCallback: Pd,
      useContext: ae,
      useEffect: Gd,
      useImperativeHandle: Qd,
      useInsertionEffect: Zd,
      useLayoutEffect: Kd,
      useMemo: Jd,
      useReducer: Mu,
      useRef: qd,
      useState: function () {
        return Mu(un);
      },
      useDebugValue: Ru,
      useDeferredValue: function (t, e) {
        var n = Gt();
        return Mt === null ? Ou(n, t, e) : Id(n, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Mu(un)[0],
          e = Gt().memoizedState;
        return [typeof t == "boolean" ? t : $i(t), e];
      },
      useSyncExternalStore: Md,
      useId: eh,
      useHostTransitionStatus: _u,
      useFormState: Hd,
      useActionState: Hd,
      useOptimistic: function (t, e) {
        var n = Gt();
        return Mt !== null
          ? _d(n, Mt, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: Eu,
      useCacheRefresh: nh,
    },
    $a = null,
    Ji = 0;
  function xl(t) {
    var e = Ji;
    return ((Ji += 1), $a === null && ($a = []), vd($a, t, e));
  }
  function Ii(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Sl(t, e) {
    throw e.$$typeof === v
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function uh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function oh(t) {
    function e(M, E) {
      if (t) {
        var R = M.deletions;
        R === null ? ((M.deletions = [E]), (M.flags |= 16)) : R.push(E);
      }
    }
    function n(M, E) {
      if (!t) return null;
      for (; E !== null; ) (e(M, E), (E = E.sibling));
      return null;
    }
    function s(M) {
      for (var E = new Map(); M !== null; )
        (M.key !== null ? E.set(M.key, M) : E.set(M.index, M), (M = M.sibling));
      return E;
    }
    function r(M, E) {
      return ((M = nn(M, E)), (M.index = 0), (M.sibling = null), M);
    }
    function o(M, E, R) {
      return (
        (M.index = R),
        t
          ? ((R = M.alternate),
            R !== null
              ? ((R = R.index), R < E ? ((M.flags |= 67108866), E) : R)
              : ((M.flags |= 67108866), E))
          : ((M.flags |= 1048576), E)
      );
    }
    function y(M) {
      return (t && M.alternate === null && (M.flags |= 67108866), M);
    }
    function b(M, E, R, Y) {
      return E === null || E.tag !== 6
        ? ((E = tu(R, M.mode, Y)), (E.return = M), E)
        : ((E = r(E, R)), (E.return = M), E);
    }
    function T(M, E, R, Y) {
      var et = R.type;
      return et === w
        ? L(M, E, R.props.children, Y, R.key)
        : E !== null &&
            (E.elementType === et ||
              (typeof et == "object" &&
                et !== null &&
                et.$$typeof === I &&
                uh(et) === E.type))
          ? ((E = r(E, R.props)), Ii(E, R), (E.return = M), E)
          : ((E = al(R.type, R.key, R.props, null, M.mode, Y)),
            Ii(E, R),
            (E.return = M),
            E);
    }
    function O(M, E, R, Y) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== R.containerInfo ||
        E.stateNode.implementation !== R.implementation
        ? ((E = eu(R, M.mode, Y)), (E.return = M), E)
        : ((E = r(E, R.children || [])), (E.return = M), E);
    }
    function L(M, E, R, Y, et) {
      return E === null || E.tag !== 7
        ? ((E = na(R, M.mode, Y, et)), (E.return = M), E)
        : ((E = r(E, R)), (E.return = M), E);
    }
    function H(M, E, R) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = tu("" + E, M.mode, R)), (E.return = M), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case x:
            return (
              (R = al(E.type, E.key, E.props, null, M.mode, R)),
              Ii(R, E),
              (R.return = M),
              R
            );
          case A:
            return ((E = eu(E, M.mode, R)), (E.return = M), E);
          case I:
            var Y = E._init;
            return ((E = Y(E._payload)), H(M, E, R));
        }
        if ($(E) || nt(E))
          return ((E = na(E, M.mode, R, null)), (E.return = M), E);
        if (typeof E.then == "function") return H(M, xl(E), R);
        if (E.$$typeof === B) return H(M, rl(M, E), R);
        Sl(M, E);
      }
      return null;
    }
    function _(M, E, R, Y) {
      var et = E !== null ? E.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return et !== null ? null : b(M, E, "" + R, Y);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case x:
            return R.key === et ? T(M, E, R, Y) : null;
          case A:
            return R.key === et ? O(M, E, R, Y) : null;
          case I:
            return ((et = R._init), (R = et(R._payload)), _(M, E, R, Y));
        }
        if ($(R) || nt(R)) return et !== null ? null : L(M, E, R, Y, null);
        if (typeof R.then == "function") return _(M, E, xl(R), Y);
        if (R.$$typeof === B) return _(M, E, rl(M, R), Y);
        Sl(M, R);
      }
      return null;
    }
    function z(M, E, R, Y, et) {
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return ((M = M.get(R) || null), b(E, M, "" + Y, et));
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case x:
            return (
              (M = M.get(Y.key === null ? R : Y.key) || null),
              T(E, M, Y, et)
            );
          case A:
            return (
              (M = M.get(Y.key === null ? R : Y.key) || null),
              O(E, M, Y, et)
            );
          case I:
            var ht = Y._init;
            return ((Y = ht(Y._payload)), z(M, E, R, Y, et));
        }
        if ($(Y) || nt(Y))
          return ((M = M.get(R) || null), L(E, M, Y, et, null));
        if (typeof Y.then == "function") return z(M, E, R, xl(Y), et);
        if (Y.$$typeof === B) return z(M, E, R, rl(E, Y), et);
        Sl(E, Y);
      }
      return null;
    }
    function lt(M, E, R, Y) {
      for (
        var et = null, ht = null, at = E, st = (E = 0), It = null;
        at !== null && st < R.length;
        st++
      ) {
        at.index > st ? ((It = at), (at = null)) : (It = at.sibling);
        var Tt = _(M, at, R[st], Y);
        if (Tt === null) {
          at === null && (at = It);
          break;
        }
        (t && at && Tt.alternate === null && e(M, at),
          (E = o(Tt, E, st)),
          ht === null ? (et = Tt) : (ht.sibling = Tt),
          (ht = Tt),
          (at = It));
      }
      if (st === R.length) return (n(M, at), At && ia(M, st), et);
      if (at === null) {
        for (; st < R.length; st++)
          ((at = H(M, R[st], Y)),
            at !== null &&
              ((E = o(at, E, st)),
              ht === null ? (et = at) : (ht.sibling = at),
              (ht = at)));
        return (At && ia(M, st), et);
      }
      for (at = s(at); st < R.length; st++)
        ((It = z(at, M, st, R[st], Y)),
          It !== null &&
            (t &&
              It.alternate !== null &&
              at.delete(It.key === null ? st : It.key),
            (E = o(It, E, st)),
            ht === null ? (et = It) : (ht.sibling = It),
            (ht = It)));
      return (
        t &&
          at.forEach(function (Gn) {
            return e(M, Gn);
          }),
        At && ia(M, st),
        et
      );
    }
    function it(M, E, R, Y) {
      if (R == null) throw Error(u(151));
      for (
        var et = null,
          ht = null,
          at = E,
          st = (E = 0),
          It = null,
          Tt = R.next();
        at !== null && !Tt.done;
        st++, Tt = R.next()
      ) {
        at.index > st ? ((It = at), (at = null)) : (It = at.sibling);
        var Gn = _(M, at, Tt.value, Y);
        if (Gn === null) {
          at === null && (at = It);
          break;
        }
        (t && at && Gn.alternate === null && e(M, at),
          (E = o(Gn, E, st)),
          ht === null ? (et = Gn) : (ht.sibling = Gn),
          (ht = Gn),
          (at = It));
      }
      if (Tt.done) return (n(M, at), At && ia(M, st), et);
      if (at === null) {
        for (; !Tt.done; st++, Tt = R.next())
          ((Tt = H(M, Tt.value, Y)),
            Tt !== null &&
              ((E = o(Tt, E, st)),
              ht === null ? (et = Tt) : (ht.sibling = Tt),
              (ht = Tt)));
        return (At && ia(M, st), et);
      }
      for (at = s(at); !Tt.done; st++, Tt = R.next())
        ((Tt = z(at, M, st, Tt.value, Y)),
          Tt !== null &&
            (t &&
              Tt.alternate !== null &&
              at.delete(Tt.key === null ? st : Tt.key),
            (E = o(Tt, E, st)),
            ht === null ? (et = Tt) : (ht.sibling = Tt),
            (ht = Tt)));
      return (
        t &&
          at.forEach(function (Db) {
            return e(M, Db);
          }),
        At && ia(M, st),
        et
      );
    }
    function Nt(M, E, R, Y) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === w &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case x:
            t: {
              for (var et = R.key; E !== null; ) {
                if (E.key === et) {
                  if (((et = R.type), et === w)) {
                    if (E.tag === 7) {
                      (n(M, E.sibling),
                        (Y = r(E, R.props.children)),
                        (Y.return = M),
                        (M = Y));
                      break t;
                    }
                  } else if (
                    E.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === I &&
                      uh(et) === E.type)
                  ) {
                    (n(M, E.sibling),
                      (Y = r(E, R.props)),
                      Ii(Y, R),
                      (Y.return = M),
                      (M = Y));
                    break t;
                  }
                  n(M, E);
                  break;
                } else e(M, E);
                E = E.sibling;
              }
              R.type === w
                ? ((Y = na(R.props.children, M.mode, Y, R.key)),
                  (Y.return = M),
                  (M = Y))
                : ((Y = al(R.type, R.key, R.props, null, M.mode, Y)),
                  Ii(Y, R),
                  (Y.return = M),
                  (M = Y));
            }
            return y(M);
          case A:
            t: {
              for (et = R.key; E !== null; ) {
                if (E.key === et)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === R.containerInfo &&
                    E.stateNode.implementation === R.implementation
                  ) {
                    (n(M, E.sibling),
                      (Y = r(E, R.children || [])),
                      (Y.return = M),
                      (M = Y));
                    break t;
                  } else {
                    n(M, E);
                    break;
                  }
                else e(M, E);
                E = E.sibling;
              }
              ((Y = eu(R, M.mode, Y)), (Y.return = M), (M = Y));
            }
            return y(M);
          case I:
            return ((et = R._init), (R = et(R._payload)), Nt(M, E, R, Y));
        }
        if ($(R)) return lt(M, E, R, Y);
        if (nt(R)) {
          if (((et = nt(R)), typeof et != "function")) throw Error(u(150));
          return ((R = et.call(R)), it(M, E, R, Y));
        }
        if (typeof R.then == "function") return Nt(M, E, xl(R), Y);
        if (R.$$typeof === B) return Nt(M, E, rl(M, R), Y);
        Sl(M, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          E !== null && E.tag === 6
            ? (n(M, E.sibling), (Y = r(E, R)), (Y.return = M), (M = Y))
            : (n(M, E), (Y = tu(R, M.mode, Y)), (Y.return = M), (M = Y)),
          y(M))
        : n(M, E);
    }
    return function (M, E, R, Y) {
      try {
        Ji = 0;
        var et = Nt(M, E, R, Y);
        return (($a = null), et);
      } catch (at) {
        if (at === Hi || at === ol) throw at;
        var ht = be(29, at, null, M.mode);
        return ((ht.lanes = Y), (ht.return = M), ht);
      } finally {
      }
    };
  }
  var Qa = oh(!0),
    ch = oh(!1),
    _e = U(null),
    Ze = null;
  function Rn(t) {
    var e = t.alternate;
    (K($t, $t.current & 1),
      K(_e, t),
      Ze === null &&
        (e === null || Xa.current !== null || e.memoizedState !== null) &&
        (Ze = t));
  }
  function fh(t) {
    if (t.tag === 22) {
      if ((K($t, $t.current), K(_e, t), Ze === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ze = t);
      }
    } else On();
  }
  function On() {
    (K($t, $t.current), K(_e, _e.current));
  }
  function on(t) {
    (Q(_e), Ze === t && (Ze = null), Q($t));
  }
  var $t = U(0);
  function Tl(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Eo(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function zu(t, e, n, s) {
    ((e = t.memoizedState),
      (n = n(s, e)),
      (n = n == null ? e : g({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Vu = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var s = Ae(),
        r = Mn(s);
      ((r.payload = e),
        n != null && (r.callback = n),
        (e = Dn(t, r, s)),
        e !== null && (Ee(e, t, s), Xi(e, t, s)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var s = Ae(),
        r = Mn(s);
      ((r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = Dn(t, r, s)),
        e !== null && (Ee(e, t, s), Xi(e, t, s)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ae(),
        s = Mn(n);
      ((s.tag = 2),
        e != null && (s.callback = e),
        (e = Dn(t, s, n)),
        e !== null && (Ee(e, t, n), Xi(e, t, n)));
    },
  };
  function dh(t, e, n, s, r, o, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(s, o, y)
        : e.prototype && e.prototype.isPureReactComponent
          ? !wi(n, s) || !wi(r, o)
          : !0
    );
  }
  function hh(t, e, n, s) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, s),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, s),
      e.state !== t && Vu.enqueueReplaceState(e, e.state, null));
  }
  function fa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var s in e) s !== "ref" && (n[s] = e[s]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = g({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  var Al =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function mh(t) {
    Al(t);
  }
  function ph(t) {
    console.error(t);
  }
  function yh(t) {
    Al(t);
  }
  function El(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function gh(t, e, n) {
    try {
      var s = t.onCaughtError;
      s(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function ku(t, e, n) {
    return (
      (n = Mn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        El(t, e);
      }),
      n
    );
  }
  function vh(t) {
    return ((t = Mn(t)), (t.tag = 3), t);
  }
  function bh(t, e, n, s) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = s.value;
      ((t.payload = function () {
        return r(o);
      }),
        (t.callback = function () {
          gh(e, n, s);
        }));
    }
    var y = n.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        (gh(e, n, s),
          typeof r != "function" &&
            (kn === null ? (kn = new Set([this])) : kn.add(this)));
        var b = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: b !== null ? b : "",
        });
      });
  }
  function Dv(t, e, n, s, r) {
    if (
      ((n.flags |= 32768),
      s !== null && typeof s == "object" && typeof s.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Bi(e, n, r, !0),
        (n = _e.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Ze === null ? lo() : n.alternate === null && Bt === 0 && (Bt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              s === fu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([s])) : e.add(s),
                  uo(t, s, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              s === fu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([s])) : n.add(s)),
                  uo(t, s, r)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (uo(t, s, r), lo(), !1);
    }
    if (At)
      return (
        (e = _e.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            s !== iu && ((t = Error(u(422), { cause: s })), Ui(Ne(t, n))))
          : (s !== iu && ((e = Error(u(423), { cause: s })), Ui(Ne(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (s = Ne(s, n)),
            (r = ku(t.stateNode, s, r)),
            mu(t, r),
            Bt !== 4 && (Bt = 2)),
        !1
      );
    var o = Error(u(520), { cause: s });
    if (
      ((o = Ne(o, n)),
      is === null ? (is = [o]) : is.push(o),
      Bt !== 4 && (Bt = 2),
      e === null)
    )
      return !0;
    ((s = Ne(s, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = r & -r),
            (n.lanes |= t),
            (t = ku(n.stateNode, s, t)),
            mu(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (kn === null || !kn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = vh(r)),
              bh(r, t, n, s),
              mu(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var xh = Error(u(461)),
    Pt = !1;
  function Ft(t, e, n, s) {
    e.child = t === null ? ch(e, null, n, s) : Qa(e, t.child, n, s);
  }
  function Sh(t, e, n, s, r) {
    n = n.render;
    var o = e.ref;
    if ("ref" in s) {
      var y = {};
      for (var b in s) b !== "ref" && (y[b] = s[b]);
    } else y = s;
    return (
      ua(e),
      (s = bu(t, e, n, y, o, r)),
      (b = xu()),
      t !== null && !Pt
        ? (Su(t, e, r), cn(t, e, r))
        : (At && b && nu(e), (e.flags |= 1), Ft(t, e, s, r), e.child)
    );
  }
  function Th(t, e, n, s, r) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Wr(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), Ah(t, e, o, s, r))
        : ((t = al(n.type, null, s, e, e.mode, r)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !Gu(t, r))) {
      var y = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : wi), n(y, s) && t.ref === e.ref)
      )
        return cn(t, e, r);
    }
    return (
      (e.flags |= 1),
      (t = nn(o, s)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ah(t, e, n, s, r) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (wi(o, s) && t.ref === e.ref)
        if (((Pt = !1), (e.pendingProps = s = o), Gu(t, r)))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else return ((e.lanes = t.lanes), cn(t, e, r));
    }
    return Uu(t, e, n, s, r);
  }
  function Eh(t, e, n) {
    var s = e.pendingProps,
      r = s.children,
      o = t !== null ? t.memoizedState : null;
    if (s.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((s = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (r = e.child = t.child, o = 0; r !== null; )
            ((o = o | r.lanes | r.childLanes), (r = r.sibling));
          e.childLanes = o & ~s;
        } else ((e.childLanes = 0), (e.child = null));
        return jh(t, e, s, n);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ul(e, o !== null ? o.cachePool : null),
          o !== null ? Ad(e, o) : yu(),
          fh(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          jh(t, e, o !== null ? o.baseLanes | n : n, n)
        );
    } else
      o !== null
        ? (ul(e, o.cachePool), Ad(e, o), On(), (e.memoizedState = null))
        : (t !== null && ul(e, null), yu(), On());
    return (Ft(t, e, r, n), e.child);
  }
  function jh(t, e, n, s) {
    var r = cu();
    return (
      (r = r === null ? null : { parent: Kt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && ul(e, null),
      yu(),
      fh(e),
      t !== null && Bi(t, e, s, !0),
      null
    );
  }
  function jl(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Uu(t, e, n, s, r) {
    return (
      ua(e),
      (n = bu(t, e, n, s, void 0, r)),
      (s = xu()),
      t !== null && !Pt
        ? (Su(t, e, r), cn(t, e, r))
        : (At && s && nu(e), (e.flags |= 1), Ft(t, e, n, r), e.child)
    );
  }
  function Mh(t, e, n, s, r, o) {
    return (
      ua(e),
      (e.updateQueue = null),
      (n = jd(e, s, n, r)),
      Ed(t),
      (s = xu()),
      t !== null && !Pt
        ? (Su(t, e, o), cn(t, e, o))
        : (At && s && nu(e), (e.flags |= 1), Ft(t, e, n, o), e.child)
    );
  }
  function Dh(t, e, n, s, r) {
    if ((ua(e), e.stateNode === null)) {
      var o = Ba,
        y = n.contextType;
      (typeof y == "object" && y !== null && (o = ae(y)),
        (o = new n(s, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Vu),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = s),
        (o.state = e.memoizedState),
        (o.refs = {}),
        du(e),
        (y = n.contextType),
        (o.context = typeof y == "object" && y !== null ? ae(y) : Ba),
        (o.state = e.memoizedState),
        (y = n.getDerivedStateFromProps),
        typeof y == "function" && (zu(e, n, y, s), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((y = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          y !== o.state && Vu.enqueueReplaceState(o, o.state, null),
          Zi(e, s, o, r),
          Gi(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (s = !0));
    } else if (t === null) {
      o = e.stateNode;
      var b = e.memoizedProps,
        T = fa(n, b);
      o.props = T;
      var O = o.context,
        L = n.contextType;
      ((y = Ba), typeof L == "object" && L !== null && (y = ae(L)));
      var H = n.getDerivedStateFromProps;
      ((L =
        typeof H == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (b = e.pendingProps !== b),
        L ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((b || O !== y) && hh(e, o, s, y)),
        (jn = !1));
      var _ = e.memoizedState;
      ((o.state = _),
        Zi(e, s, o, r),
        Gi(),
        (O = e.memoizedState),
        b || _ !== O || jn
          ? (typeof H == "function" && (zu(e, n, H, s), (O = e.memoizedState)),
            (T = jn || dh(e, n, T, s, _, O, y))
              ? (L ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = s),
                (e.memoizedState = O)),
            (o.props = s),
            (o.state = O),
            (o.context = y),
            (s = T))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (s = !1)));
    } else {
      ((o = e.stateNode),
        hu(t, e),
        (y = e.memoizedProps),
        (L = fa(n, y)),
        (o.props = L),
        (H = e.pendingProps),
        (_ = o.context),
        (O = n.contextType),
        (T = Ba),
        typeof O == "object" && O !== null && (T = ae(O)),
        (b = n.getDerivedStateFromProps),
        (O =
          typeof b == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((y !== H || _ !== T) && hh(e, o, s, T)),
        (jn = !1),
        (_ = e.memoizedState),
        (o.state = _),
        Zi(e, s, o, r),
        Gi());
      var z = e.memoizedState;
      y !== H ||
      _ !== z ||
      jn ||
      (t !== null && t.dependencies !== null && ll(t.dependencies))
        ? (typeof b == "function" && (zu(e, n, b, s), (z = e.memoizedState)),
          (L =
            jn ||
            dh(e, n, L, s, _, z, T) ||
            (t !== null && t.dependencies !== null && ll(t.dependencies)))
            ? (O ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(s, z, T),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(s, z, T)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (y === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = s),
              (e.memoizedState = z)),
          (o.props = s),
          (o.state = z),
          (o.context = T),
          (s = L))
        : (typeof o.componentDidUpdate != "function" ||
            (y === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 1024),
          (s = !1));
    }
    return (
      (o = s),
      jl(t, e),
      (s = (e.flags & 128) !== 0),
      o || s
        ? ((o = e.stateNode),
          (n =
            s && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && s
            ? ((e.child = Qa(e, t.child, null, r)),
              (e.child = Qa(e, null, n, r)))
            : Ft(t, e, n, r),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = cn(t, e, r)),
      t
    );
  }
  function Nh(t, e, n, s) {
    return (ki(), (e.flags |= 256), Ft(t, e, n, s), e.child);
  }
  var Bu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Lu(t) {
    return { baseLanes: t, cachePool: pd() };
  }
  function Yu(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= we), t);
  }
  function Rh(t, e, n) {
    var s = e.pendingProps,
      r = !1,
      o = (e.flags & 128) !== 0,
      y;
    if (
      ((y = o) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : ($t.current & 2) !== 0),
      y && ((r = !0), (e.flags &= -129)),
      (y = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (At) {
        if ((r ? Rn(e) : On(), At)) {
          var b = Ut,
            T;
          if ((T = b)) {
            t: {
              for (T = b, b = Ge; T.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break t;
                }
                if (((T = Ye(T.nextSibling)), T === null)) {
                  b = null;
                  break t;
                }
              }
              b = T;
            }
            b !== null
              ? ((e.memoizedState = {
                  dehydrated: b,
                  treeContext: aa !== null ? { id: an, overflow: sn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = be(18, null, null, 0)),
                (T.stateNode = b),
                (T.return = e),
                (e.child = T),
                (re = e),
                (Ut = null),
                (T = !0))
              : (T = !1);
          }
          T || la(e);
        }
        if (
          ((b = e.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return (Eo(b) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        on(e);
      }
      return (
        (b = s.children),
        (s = s.fallback),
        r
          ? (On(),
            (r = e.mode),
            (b = Ml({ mode: "hidden", children: b }, r)),
            (s = na(s, r, n, null)),
            (b.return = e),
            (s.return = e),
            (b.sibling = s),
            (e.child = b),
            (r = e.child),
            (r.memoizedState = Lu(n)),
            (r.childLanes = Yu(t, y, n)),
            (e.memoizedState = Bu),
            s)
          : (Rn(e), Hu(e, b))
      );
    }
    if (
      ((T = t.memoizedState), T !== null && ((b = T.dehydrated), b !== null))
    ) {
      if (o)
        e.flags & 256
          ? (Rn(e), (e.flags &= -257), (e = qu(t, e, n)))
          : e.memoizedState !== null
            ? (On(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (On(),
              (r = s.fallback),
              (b = e.mode),
              (s = Ml({ mode: "visible", children: s.children }, b)),
              (r = na(r, b, n, null)),
              (r.flags |= 2),
              (s.return = e),
              (r.return = e),
              (s.sibling = r),
              (e.child = s),
              Qa(e, t.child, null, n),
              (s = e.child),
              (s.memoizedState = Lu(n)),
              (s.childLanes = Yu(t, y, n)),
              (e.memoizedState = Bu),
              (e = r));
      else if ((Rn(e), Eo(b))) {
        if (((y = b.nextSibling && b.nextSibling.dataset), y)) var O = y.dgst;
        ((y = O),
          (s = Error(u(419))),
          (s.stack = ""),
          (s.digest = y),
          Ui({ value: s, source: null, stack: null }),
          (e = qu(t, e, n)));
      } else if (
        (Pt || Bi(t, e, n, !1), (y = (n & t.childLanes) !== 0), Pt || y)
      ) {
        if (
          ((y = Ot),
          y !== null &&
            ((s = n & -n),
            (s = (s & 42) !== 0 ? 1 : Er(s)),
            (s = (s & (y.suspendedLanes | n)) !== 0 ? 0 : s),
            s !== 0 && s !== T.retryLane))
        )
          throw ((T.retryLane = s), Ua(t, s), Ee(y, t, s), xh);
        (b.data === "$?" || lo(), (e = qu(t, e, n)));
      } else
        b.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (Ut = Ye(b.nextSibling)),
            (re = e),
            (At = !0),
            (sa = null),
            (Ge = !1),
            t !== null &&
              ((Oe[Ce++] = an),
              (Oe[Ce++] = sn),
              (Oe[Ce++] = aa),
              (an = t.id),
              (sn = t.overflow),
              (aa = e)),
            (e = Hu(e, s.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (On(),
        (r = s.fallback),
        (b = e.mode),
        (T = t.child),
        (O = T.sibling),
        (s = nn(T, { mode: "hidden", children: s.children })),
        (s.subtreeFlags = T.subtreeFlags & 65011712),
        O !== null ? (r = nn(O, r)) : ((r = na(r, b, n, null)), (r.flags |= 2)),
        (r.return = e),
        (s.return = e),
        (s.sibling = r),
        (e.child = s),
        (s = r),
        (r = e.child),
        (b = t.child.memoizedState),
        b === null
          ? (b = Lu(n))
          : ((T = b.cachePool),
            T !== null
              ? ((O = Kt._currentValue),
                (T = T.parent !== O ? { parent: O, pool: O } : T))
              : (T = pd()),
            (b = { baseLanes: b.baseLanes | n, cachePool: T })),
        (r.memoizedState = b),
        (r.childLanes = Yu(t, y, n)),
        (e.memoizedState = Bu),
        s)
      : (Rn(e),
        (n = t.child),
        (t = n.sibling),
        (n = nn(n, { mode: "visible", children: s.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((y = e.deletions),
          y === null ? ((e.deletions = [t]), (e.flags |= 16)) : y.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Hu(t, e) {
    return (
      (e = Ml({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ml(t, e) {
    return (
      (t = be(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function qu(t, e, n) {
    return (
      Qa(e, t.child, null, n),
      (t = Hu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Oh(t, e, n) {
    t.lanes |= e;
    var s = t.alternate;
    (s !== null && (s.lanes |= e), lu(t.return, e, n));
  }
  function Xu(t, e, n, s, r) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: n,
          tailMode: r,
        })
      : ((o.isBackwards = e),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = s),
        (o.tail = n),
        (o.tailMode = r));
  }
  function Ch(t, e, n) {
    var s = e.pendingProps,
      r = s.revealOrder,
      o = s.tail;
    if ((Ft(t, e, s.children, n), (s = $t.current), (s & 2) !== 0))
      ((s = (s & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Oh(t, n, e);
          else if (t.tag === 19) Oh(t, n, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      s &= 1;
    }
    switch ((K($t, s), r)) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          ((t = n.alternate),
            t !== null && Tl(t) === null && (r = n),
            (n = n.sibling));
        ((n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Xu(e, !1, r, n, o));
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Tl(t) === null)) {
            e.child = r;
            break;
          }
          ((t = r.sibling), (r.sibling = n), (n = r), (r = t));
        }
        Xu(e, !0, n, null, o);
        break;
      case "together":
        Xu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function cn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Vn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Bi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (
        t = e.child, n = nn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        ((t = t.sibling),
          (n = n.sibling = nn(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Gu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ll(t)));
  }
  function Nv(t, e, n) {
    switch (e.tag) {
      case 3:
        (Ct(e, e.stateNode.containerInfo),
          En(e, Kt, t.memoizedState.cache),
          ki());
        break;
      case 27:
      case 5:
        br(e);
        break;
      case 4:
        Ct(e, e.stateNode.containerInfo);
        break;
      case 10:
        En(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var s = e.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (Rn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Rh(t, e, n)
              : (Rn(e), (t = cn(t, e, n)), t !== null ? t.sibling : null);
        Rn(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((s = (n & e.childLanes) !== 0),
          s || (Bi(t, e, n, !1), (s = (n & e.childLanes) !== 0)),
          r)
        ) {
          if (s) return Ch(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          K($t, $t.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), Eh(t, e, n));
      case 24:
        En(e, Kt, t.memoizedState.cache);
    }
    return cn(t, e, n);
  }
  function _h(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Pt = !0;
      else {
        if (!Gu(t, n) && (e.flags & 128) === 0) return ((Pt = !1), Nv(t, e, n));
        Pt = (t.flags & 131072) !== 0;
      }
    else ((Pt = !1), At && (e.flags & 1048576) !== 0 && ud(e, sl, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var s = e.elementType,
            r = s._init;
          if (((s = r(s._payload)), (e.type = s), typeof s == "function"))
            Wr(s)
              ? ((t = fa(s, t)), (e.tag = 1), (e = Dh(null, e, s, t, n)))
              : ((e.tag = 0), (e = Uu(null, e, s, t, n)));
          else {
            if (s != null) {
              if (((r = s.$$typeof), r === P)) {
                ((e.tag = 11), (e = Sh(null, e, s, t, n)));
                break t;
              } else if (r === F) {
                ((e.tag = 14), (e = Th(null, e, s, t, n)));
                break t;
              }
            }
            throw ((e = zt(s) || s), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return Uu(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((s = e.type), (r = fa(s, e.pendingProps)), Dh(t, e, s, r, n));
      case 3:
        t: {
          if ((Ct(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          s = e.pendingProps;
          var o = e.memoizedState;
          ((r = o.element), hu(t, e), Zi(e, s, null, n));
          var y = e.memoizedState;
          if (
            ((s = y.cache),
            En(e, Kt, s),
            s !== o.cache && ru(e, [Kt], n, !0),
            Gi(),
            (s = y.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: s, isDehydrated: !1, cache: y.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = Nh(t, e, s, n);
              break t;
            } else if (s !== r) {
              ((r = Ne(Error(u(424)), e)), Ui(r), (e = Nh(t, e, s, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Ut = Ye(t.firstChild),
                  re = e,
                  At = !0,
                  sa = null,
                  Ge = !0,
                  n = ch(e, null, s, n),
                  e.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((ki(), s === r)) {
              e = cn(t, e, n);
              break t;
            }
            Ft(t, e, s, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          jl(t, e),
          t === null
            ? (n = km(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : At ||
                ((n = e.type),
                (t = e.pendingProps),
                (s = Yl(ut.current).createElement(n)),
                (s[ne] = e),
                (s[oe] = t),
                te(s, n, t),
                Qt(s),
                (e.stateNode = s))
            : (e.memoizedState = km(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          br(e),
          t === null &&
            At &&
            ((s = e.stateNode = wm(e.type, e.pendingProps, ut.current)),
            (re = e),
            (Ge = !0),
            (r = Ut),
            Ln(e.type) ? ((jo = r), (Ut = Ye(s.firstChild))) : (Ut = r)),
          Ft(t, e, e.pendingProps.children, n),
          jl(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            At &&
            ((r = s = Ut) &&
              ((s = nb(s, e.type, e.pendingProps, Ge)),
              s !== null
                ? ((e.stateNode = s),
                  (re = e),
                  (Ut = Ye(s.firstChild)),
                  (Ge = !1),
                  (r = !0))
                : (r = !1)),
            r || la(e)),
          br(e),
          (r = e.type),
          (o = e.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (s = o.children),
          So(r, o) ? (s = null) : y !== null && So(r, y) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((r = bu(t, e, xv, null, null, n)), (hs._currentValue = r)),
          jl(t, e),
          Ft(t, e, s, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            At &&
            ((t = n = Ut) &&
              ((n = ab(n, e.pendingProps, Ge)),
              n !== null
                ? ((e.stateNode = n), (re = e), (Ut = null), (t = !0))
                : (t = !1)),
            t || la(e)),
          null
        );
      case 13:
        return Rh(t, e, n);
      case 4:
        return (
          Ct(e, e.stateNode.containerInfo),
          (s = e.pendingProps),
          t === null ? (e.child = Qa(e, null, s, n)) : Ft(t, e, s, n),
          e.child
        );
      case 11:
        return Sh(t, e, e.type, e.pendingProps, n);
      case 7:
        return (Ft(t, e, e.pendingProps, n), e.child);
      case 8:
        return (Ft(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (Ft(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (s = e.pendingProps),
          En(e, e.type, s.value),
          Ft(t, e, s.children, n),
          e.child
        );
      case 9:
        return (
          (r = e.type._context),
          (s = e.pendingProps.children),
          ua(e),
          (r = ae(r)),
          (s = s(r)),
          (e.flags |= 1),
          Ft(t, e, s, n),
          e.child
        );
      case 14:
        return Th(t, e, e.type, e.pendingProps, n);
      case 15:
        return Ah(t, e, e.type, e.pendingProps, n);
      case 19:
        return Ch(t, e, n);
      case 31:
        return (
          (s = e.pendingProps),
          (n = e.mode),
          (s = { mode: s.mode, children: s.children }),
          t === null
            ? ((n = Ml(s, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = nn(t.child, s)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return Eh(t, e, n);
      case 24:
        return (
          ua(e),
          (s = ae(Kt)),
          t === null
            ? ((r = cu()),
              r === null &&
                ((r = Ot),
                (o = uu()),
                (r.pooledCache = o),
                o.refCount++,
                o !== null && (r.pooledCacheLanes |= n),
                (r = o)),
              (e.memoizedState = { parent: s, cache: r }),
              du(e),
              En(e, Kt, r))
            : ((t.lanes & n) !== 0 && (hu(t, e), Zi(e, null, null, n), Gi()),
              (r = t.memoizedState),
              (o = e.memoizedState),
              r.parent !== s
                ? ((r = { parent: s, cache: s }),
                  (e.memoizedState = r),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = r),
                  En(e, Kt, s))
                : ((s = o.cache),
                  En(e, Kt, s),
                  s !== r.cache && ru(e, [Kt], n, !0))),
          Ft(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function fn(t) {
    t.flags |= 4;
  }
  function wh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Hm(e))) {
      if (
        ((e = _e.current),
        e !== null &&
          ((vt & 4194048) === vt
            ? Ze !== null
            : ((vt & 62914560) !== vt && (vt & 536870912) === 0) || e !== Ze))
      )
        throw ((qi = fu), yd);
      t.flags |= 8192;
    }
  }
  function Dl(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? ff() : 536870912), (t.lanes |= e), (Fa |= e)));
  }
  function Fi(t, e) {
    if (!At)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var s = null; n !== null; )
            (n.alternate !== null && (s = n), (n = n.sibling));
          s === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Vt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      s = 0;
    if (e)
      for (var r = t.child; r !== null; )
        ((n |= r.lanes | r.childLanes),
          (s |= r.subtreeFlags & 65011712),
          (s |= r.flags & 65011712),
          (r.return = t),
          (r = r.sibling));
    else
      for (r = t.child; r !== null; )
        ((n |= r.lanes | r.childLanes),
          (s |= r.subtreeFlags),
          (s |= r.flags),
          (r.return = t),
          (r = r.sibling));
    return ((t.subtreeFlags |= s), (t.childLanes = n), e);
  }
  function Rv(t, e, n) {
    var s = e.pendingProps;
    switch ((au(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Vt(e), null);
      case 1:
        return (Vt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          e.memoizedState.cache !== s && (e.flags |= 2048),
          rn(Kt),
          xn(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Vi(e)
              ? fn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), fd())),
          Vt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (fn(e),
              n !== null ? (Vt(e), wh(e, n)) : (Vt(e), (e.flags &= -16777217)))
            : n
              ? n !== t.memoizedState
                ? (fn(e), Vt(e), wh(e, n))
                : (Vt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== s && fn(e), Vt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (Bs(e), (n = ut.current));
        var r = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== s && fn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(u(166));
            return (Vt(e), null);
          }
          ((t = W.current),
            Vi(e) ? od(e) : ((t = wm(r, s, n)), (e.stateNode = t), fn(e)));
        }
        return (Vt(e), null);
      case 5:
        if ((Bs(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== s && fn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(u(166));
            return (Vt(e), null);
          }
          if (((t = W.current), Vi(e))) od(e);
          else {
            switch (((r = Yl(ut.current)), t)) {
              case 1:
                t = r.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = r.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((t = r.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof s.is == "string"
                        ? r.createElement("select", { is: s.is })
                        : r.createElement("select")),
                      s.multiple
                        ? (t.multiple = !0)
                        : s.size && (t.size = s.size));
                    break;
                  default:
                    t =
                      typeof s.is == "string"
                        ? r.createElement(n, { is: s.is })
                        : r.createElement(n);
                }
            }
            ((t[ne] = e), (t[oe] = s));
            t: for (r = e.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                ((r.child.return = r), (r = r.child));
                continue;
              }
              if (r === e) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === e) break t;
                r = r.return;
              }
              ((r.sibling.return = r.return), (r = r.sibling));
            }
            e.stateNode = t;
            t: switch ((te(t, n, s), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!s.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && fn(e);
          }
        }
        return (Vt(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== s && fn(e);
        else {
          if (typeof s != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = ut.current), Vi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (s = null),
              (r = re),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  s = r.memoizedProps;
              }
            ((t[ne] = e),
              (t = !!(
                t.nodeValue === n ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                Mm(t.nodeValue, n)
              )),
              t || la(e));
          } else
            ((t = Yl(t).createTextNode(s)), (t[ne] = e), (e.stateNode = t));
        }
        return (Vt(e), null);
      case 13:
        if (
          ((s = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = Vi(e)), s !== null && s.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(u(318));
              if (
                ((r = e.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(u(317));
              r[ne] = e;
            } else
              (ki(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Vt(e), (r = !1));
          } else
            ((r = fd()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = r),
              (r = !0));
          if (!r) return e.flags & 256 ? (on(e), e) : (on(e), null);
        }
        if ((on(e), (e.flags & 128) !== 0)) return ((e.lanes = n), e);
        if (
          ((n = s !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          ((s = e.child),
            (r = null),
            s.alternate !== null &&
              s.alternate.memoizedState !== null &&
              s.alternate.memoizedState.cachePool !== null &&
              (r = s.alternate.memoizedState.cachePool.pool));
          var o = null;
          (s.memoizedState !== null &&
            s.memoizedState.cachePool !== null &&
            (o = s.memoizedState.cachePool.pool),
            o !== r && (s.flags |= 2048));
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          Dl(e, e.updateQueue),
          Vt(e),
          null
        );
      case 4:
        return (xn(), t === null && yo(e.stateNode.containerInfo), Vt(e), null);
      case 10:
        return (rn(e.type), Vt(e), null);
      case 19:
        if ((Q($t), (r = e.memoizedState), r === null)) return (Vt(e), null);
        if (((s = (e.flags & 128) !== 0), (o = r.rendering), o === null))
          if (s) Fi(r, !1);
          else {
            if (Bt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = Tl(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      Fi(r, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      Dl(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    (rd(n, t), (n = n.sibling));
                  return (K($t, ($t.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            r.tail !== null &&
              Xe() > Ol &&
              ((e.flags |= 128), (s = !0), Fi(r, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = Tl(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Dl(e, t),
                Fi(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !o.alternate &&
                  !At)
              )
                return (Vt(e), null);
            } else
              2 * Xe() - r.renderingStartTime > Ol &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Fi(r, !1), (e.lanes = 4194304));
          r.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = r.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (r.last = o));
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = Xe()),
            (e.sibling = null),
            (t = $t.current),
            K($t, s ? (t & 1) | 2 : t & 1),
            e)
          : (Vt(e), null);
      case 22:
      case 23:
        return (
          on(e),
          gu(),
          (s = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== s && (e.flags |= 8192)
            : s && (e.flags |= 8192),
          s
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Vt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Vt(e),
          (n = e.updateQueue),
          n !== null && Dl(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (s = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          s !== n && (e.flags |= 2048),
          t !== null && Q(oa),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          rn(Kt),
          Vt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Ov(t, e) {
    switch ((au(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          rn(Kt),
          xn(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Bs(e), null);
      case 13:
        if (
          (on(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(u(340));
          ki();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (Q($t), null);
      case 4:
        return (xn(), null);
      case 10:
        return (rn(e.type), null);
      case 22:
      case 23:
        return (
          on(e),
          gu(),
          t !== null && Q(oa),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (rn(Kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zh(t, e) {
    switch ((au(e), e.tag)) {
      case 3:
        (rn(Kt), xn());
        break;
      case 26:
      case 27:
      case 5:
        Bs(e);
        break;
      case 4:
        xn();
        break;
      case 13:
        on(e);
        break;
      case 19:
        Q($t);
        break;
      case 10:
        rn(e.type);
        break;
      case 22:
      case 23:
        (on(e), gu(), t !== null && Q(oa));
        break;
      case 24:
        rn(Kt);
    }
  }
  function Wi(t, e) {
    try {
      var n = e.updateQueue,
        s = n !== null ? n.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            s = void 0;
            var o = n.create,
              y = n.inst;
            ((s = o()), (y.destroy = s));
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (b) {
      Rt(e, e.return, b);
    }
  }
  function Cn(t, e, n) {
    try {
      var s = e.updateQueue,
        r = s !== null ? s.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        s = o;
        do {
          if ((s.tag & t) === t) {
            var y = s.inst,
              b = y.destroy;
            if (b !== void 0) {
              ((y.destroy = void 0), (r = e));
              var T = n,
                O = b;
              try {
                O();
              } catch (L) {
                Rt(r, T, L);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    } catch (L) {
      Rt(e, e.return, L);
    }
  }
  function Vh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Td(e, n);
      } catch (s) {
        Rt(t, t.return, s);
      }
    }
  }
  function kh(t, e, n) {
    ((n.props = fa(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (s) {
      Rt(t, e, s);
    }
  }
  function ts(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = t.stateNode;
            break;
          case 30:
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(s)) : (n.current = s);
      }
    } catch (r) {
      Rt(t, e, r);
    }
  }
  function Ke(t, e) {
    var n = t.ref,
      s = t.refCleanup;
    if (n !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (r) {
          Rt(t, e, r);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Rt(t, e, r);
        }
      else n.current = null;
  }
  function Uh(t) {
    var e = t.type,
      n = t.memoizedProps,
      s = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && s.focus();
          break t;
        case "img":
          n.src ? (s.src = n.src) : n.srcSet && (s.srcset = n.srcSet);
      }
    } catch (r) {
      Rt(t, t.return, r);
    }
  }
  function Zu(t, e, n) {
    try {
      var s = t.stateNode;
      (Iv(s, t.type, n, e), (s[oe] = e));
    } catch (r) {
      Rt(t, t.return, r);
    }
  }
  function Bh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Ln(t.type)) ||
      t.tag === 4
    );
  }
  function Ku(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Bh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Ln(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $u(t, e, n) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ll)));
    else if (
      s !== 4 &&
      (s === 27 && Ln(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for ($u(t, e, n), t = t.sibling; t !== null; )
        ($u(t, e, n), (t = t.sibling));
  }
  function Nl(t, e, n) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      s !== 4 &&
      (s === 27 && Ln(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Nl(t, e, n), t = t.sibling; t !== null; )
        (Nl(t, e, n), (t = t.sibling));
  }
  function Lh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var s = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      (te(e, s, n), (e[ne] = t), (e[oe] = n));
    } catch (o) {
      Rt(t, t.return, o);
    }
  }
  var dn = !1,
    Ht = !1,
    Qu = !1,
    Yh = typeof WeakSet == "function" ? WeakSet : Set,
    Jt = null;
  function Cv(t, e) {
    if (((t = t.containerInfo), (bo = Kl), (t = If(t)), Kr(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var s = n.getSelection && n.getSelection();
          if (s && s.rangeCount !== 0) {
            n = s.anchorNode;
            var r = s.anchorOffset,
              o = s.focusNode;
            s = s.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break t;
            }
            var y = 0,
              b = -1,
              T = -1,
              O = 0,
              L = 0,
              H = t,
              _ = null;
            e: for (;;) {
              for (
                var z;
                H !== n || (r !== 0 && H.nodeType !== 3) || (b = y + r),
                  H !== o || (s !== 0 && H.nodeType !== 3) || (T = y + s),
                  H.nodeType === 3 && (y += H.nodeValue.length),
                  (z = H.firstChild) !== null;

              )
                ((_ = H), (H = z));
              for (;;) {
                if (H === t) break e;
                if (
                  (_ === n && ++O === r && (b = y),
                  _ === o && ++L === s && (T = y),
                  (z = H.nextSibling) !== null)
                )
                  break;
                ((H = _), (_ = H.parentNode));
              }
              H = z;
            }
            n = b === -1 || T === -1 ? null : { start: b, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      xo = { focusedElem: t, selectionRange: n }, Kl = !1, Jt = e;
      Jt !== null;

    )
      if (
        ((e = Jt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = e), (Jt = t));
      else
        for (; Jt !== null; ) {
          switch (((e = Jt), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                ((t = void 0),
                  (n = e),
                  (r = o.memoizedProps),
                  (o = o.memoizedState),
                  (s = n.stateNode));
                try {
                  var lt = fa(n.type, r, n.elementType === n.type);
                  ((t = s.getSnapshotBeforeUpdate(lt, o)),
                    (s.__reactInternalSnapshotBeforeUpdate = t));
                } catch (it) {
                  Rt(n, n.return, it);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Ao(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ao(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Jt = t));
            break;
          }
          Jt = e.return;
        }
  }
  function Hh(t, e, n) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (_n(t, n), s & 4 && Wi(5, n));
        break;
      case 1:
        if ((_n(t, n), s & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (y) {
              Rt(n, n.return, y);
            }
          else {
            var r = fa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Rt(n, n.return, y);
            }
          }
        (s & 64 && Vh(n), s & 512 && ts(n, n.return));
        break;
      case 3:
        if ((_n(t, n), s & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Td(t, e);
          } catch (y) {
            Rt(n, n.return, y);
          }
        }
        break;
      case 27:
        e === null && s & 4 && Lh(n);
      case 26:
      case 5:
        (_n(t, n), e === null && s & 4 && Uh(n), s & 512 && ts(n, n.return));
        break;
      case 12:
        _n(t, n);
        break;
      case 13:
        (_n(t, n),
          s & 4 && Gh(t, n),
          s & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Yv.bind(null, n)), ib(t, n)))));
        break;
      case 22:
        if (((s = n.memoizedState !== null || dn), !s)) {
          ((e = (e !== null && e.memoizedState !== null) || Ht), (r = dn));
          var o = Ht;
          ((dn = s),
            (Ht = e) && !o ? wn(t, n, (n.subtreeFlags & 8772) !== 0) : _n(t, n),
            (dn = r),
            (Ht = o));
        }
        break;
      case 30:
        break;
      default:
        _n(t, n);
    }
  }
  function qh(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), qh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Dr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var _t = null,
    de = !1;
  function hn(t, e, n) {
    for (n = n.child; n !== null; ) (Xh(t, e, n), (n = n.sibling));
  }
  function Xh(t, e, n) {
    if (ye && typeof ye.onCommitFiberUnmount == "function")
      try {
        ye.onCommitFiberUnmount(Si, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ht || Ke(n, e),
          hn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ht || Ke(n, e);
        var s = _t,
          r = de;
        (Ln(n.type) && ((_t = n.stateNode), (de = !1)),
          hn(t, e, n),
          os(n.stateNode),
          (_t = s),
          (de = r));
        break;
      case 5:
        Ht || Ke(n, e);
      case 6:
        if (
          ((s = _t),
          (r = de),
          (_t = null),
          hn(t, e, n),
          (_t = s),
          (de = r),
          _t !== null)
        )
          if (de)
            try {
              (_t.nodeType === 9
                ? _t.body
                : _t.nodeName === "HTML"
                  ? _t.ownerDocument.body
                  : _t
              ).removeChild(n.stateNode);
            } catch (o) {
              Rt(n, e, o);
            }
          else
            try {
              _t.removeChild(n.stateNode);
            } catch (o) {
              Rt(n, e, o);
            }
        break;
      case 18:
        _t !== null &&
          (de
            ? ((t = _t),
              Cm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              gs(t))
            : Cm(_t, n.stateNode));
        break;
      case 4:
        ((s = _t),
          (r = de),
          (_t = n.stateNode.containerInfo),
          (de = !0),
          hn(t, e, n),
          (_t = s),
          (de = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ht || Cn(2, n, e), Ht || Cn(4, n, e), hn(t, e, n));
        break;
      case 1:
        (Ht ||
          (Ke(n, e),
          (s = n.stateNode),
          typeof s.componentWillUnmount == "function" && kh(n, e, s)),
          hn(t, e, n));
        break;
      case 21:
        hn(t, e, n);
        break;
      case 22:
        ((Ht = (s = Ht) || n.memoizedState !== null), hn(t, e, n), (Ht = s));
        break;
      default:
        hn(t, e, n);
    }
  }
  function Gh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        gs(t);
      } catch (n) {
        Rt(e, e.return, n);
      }
  }
  function _v(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Yh()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Yh()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Pu(t, e) {
    var n = _v(t);
    e.forEach(function (s) {
      var r = Hv.bind(null, t, s);
      n.has(s) || (n.add(s), s.then(r, r));
    });
  }
  function xe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var s = 0; s < n.length; s++) {
        var r = n[s],
          o = t,
          y = e,
          b = y;
        t: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (Ln(b.type)) {
                ((_t = b.stateNode), (de = !1));
                break t;
              }
              break;
            case 5:
              ((_t = b.stateNode), (de = !1));
              break t;
            case 3:
            case 4:
              ((_t = b.stateNode.containerInfo), (de = !0));
              break t;
          }
          b = b.return;
        }
        if (_t === null) throw Error(u(160));
        (Xh(o, y, r),
          (_t = null),
          (de = !1),
          (o = r.alternate),
          o !== null && (o.return = null),
          (r.return = null));
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) (Zh(e, t), (e = e.sibling));
  }
  var Le = null;
  function Zh(t, e) {
    var n = t.alternate,
      s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (xe(e, t),
          Se(t),
          s & 4 && (Cn(3, t, t.return), Wi(3, t), Cn(5, t, t.return)));
        break;
      case 1:
        (xe(e, t),
          Se(t),
          s & 512 && (Ht || n === null || Ke(n, n.return)),
          s & 64 &&
            dn &&
            ((t = t.updateQueue),
            t !== null &&
              ((s = t.callbacks),
              s !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? s : n.concat(s))))));
        break;
      case 26:
        var r = Le;
        if (
          (xe(e, t),
          Se(t),
          s & 512 && (Ht || n === null || Ke(n, n.return)),
          s & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((s = t.memoizedState), n === null))
            if (s === null)
              if (t.stateNode === null) {
                t: {
                  ((s = t.type),
                    (n = t.memoizedProps),
                    (r = r.ownerDocument || r));
                  e: switch (s) {
                    case "title":
                      ((o = r.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Ei] ||
                          o[ne] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = r.createElement(s)),
                          r.head.insertBefore(
                            o,
                            r.querySelector("head > title"),
                          )),
                        te(o, s, n),
                        (o[ne] = t),
                        Qt(o),
                        (s = o));
                      break t;
                    case "link":
                      var y = Lm("link", "href", r).get(s + (n.href || ""));
                      if (y) {
                        for (var b = 0; b < y.length; b++)
                          if (
                            ((o = y[b]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            y.splice(b, 1);
                            break e;
                          }
                      }
                      ((o = r.createElement(s)),
                        te(o, s, n),
                        r.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (y = Lm("meta", "content", r).get(
                          s + (n.content || ""),
                        ))
                      ) {
                        for (b = 0; b < y.length; b++)
                          if (
                            ((o = y[b]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            y.splice(b, 1);
                            break e;
                          }
                      }
                      ((o = r.createElement(s)),
                        te(o, s, n),
                        r.head.appendChild(o));
                      break;
                    default:
                      throw Error(u(468, s));
                  }
                  ((o[ne] = t), Qt(o), (s = o));
                }
                t.stateNode = s;
              } else Ym(r, t.type, t.stateNode);
            else t.stateNode = Bm(r, s, t.memoizedProps);
          else
            o !== s
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                s === null
                  ? Ym(r, t.type, t.stateNode)
                  : Bm(r, s, t.memoizedProps))
              : s === null &&
                t.stateNode !== null &&
                Zu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (xe(e, t),
          Se(t),
          s & 512 && (Ht || n === null || Ke(n, n.return)),
          n !== null && s & 4 && Zu(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (xe(e, t),
          Se(t),
          s & 512 && (Ht || n === null || Ke(n, n.return)),
          t.flags & 32)
        ) {
          r = t.stateNode;
          try {
            Oa(r, "");
          } catch (z) {
            Rt(t, t.return, z);
          }
        }
        (s & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), Zu(t, r, n !== null ? n.memoizedProps : r)),
          s & 1024 && (Qu = !0));
        break;
      case 6:
        if ((xe(e, t), Se(t), s & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((s = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = s;
          } catch (z) {
            Rt(t, t.return, z);
          }
        }
        break;
      case 3:
        if (
          ((Xl = null),
          (r = Le),
          (Le = Hl(e.containerInfo)),
          xe(e, t),
          (Le = r),
          Se(t),
          s & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            gs(e.containerInfo);
          } catch (z) {
            Rt(t, t.return, z);
          }
        Qu && ((Qu = !1), Kh(t));
        break;
      case 4:
        ((s = Le),
          (Le = Hl(t.stateNode.containerInfo)),
          xe(e, t),
          Se(t),
          (Le = s));
        break;
      case 12:
        (xe(e, t), Se(t));
        break;
      case 13:
        (xe(e, t),
          Se(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (eo = Xe()),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), Pu(t, s))));
        break;
      case 22:
        r = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          O = dn,
          L = Ht;
        if (
          ((dn = O || r),
          (Ht = L || T),
          xe(e, t),
          (Ht = L),
          (dn = O),
          Se(t),
          s & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || T || dn || Ht || da(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((o = T.stateNode), r))
                    ((y = o.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none"));
                  else {
                    b = T.stateNode;
                    var H = T.memoizedProps.style,
                      _ =
                        H != null && H.hasOwnProperty("display")
                          ? H.display
                          : null;
                    b.style.display =
                      _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (z) {
                  Rt(T, T.return, z);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = r ? "" : T.memoizedProps;
                } catch (z) {
                  Rt(T, T.return, z);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        s & 4 &&
          ((s = t.updateQueue),
          s !== null &&
            ((n = s.retryQueue),
            n !== null && ((s.retryQueue = null), Pu(t, n))));
        break;
      case 19:
        (xe(e, t),
          Se(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), Pu(t, s))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (xe(e, t), Se(t));
    }
  }
  function Se(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, s = t.return; s !== null; ) {
          if (Bh(s)) {
            n = s;
            break;
          }
          s = s.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              o = Ku(t);
            Nl(t, o, r);
            break;
          case 5:
            var y = n.stateNode;
            n.flags & 32 && (Oa(y, ""), (n.flags &= -33));
            var b = Ku(t);
            Nl(t, b, y);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              O = Ku(t);
            $u(t, O, T);
            break;
          default:
            throw Error(u(161));
        }
      } catch (L) {
        Rt(t, t.return, L);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Kh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Kh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function _n(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Hh(t, e.alternate, e), (e = e.sibling));
  }
  function da(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Cn(4, e, e.return), da(e));
          break;
        case 1:
          Ke(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && kh(e, e.return, n),
            da(e));
          break;
        case 27:
          os(e.stateNode);
        case 26:
        case 5:
          (Ke(e, e.return), da(e));
          break;
        case 22:
          e.memoizedState === null && da(e);
          break;
        case 30:
          da(e);
          break;
        default:
          da(e);
      }
      t = t.sibling;
    }
  }
  function wn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var s = e.alternate,
        r = t,
        o = e,
        y = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (wn(r, o, n), Wi(4, o));
          break;
        case 1:
          if (
            (wn(r, o, n),
            (s = o),
            (r = s.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (O) {
              Rt(s, s.return, O);
            }
          if (((s = o), (r = s.updateQueue), r !== null)) {
            var b = s.stateNode;
            try {
              var T = r.shared.hiddenCallbacks;
              if (T !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < T.length; r++)
                  Sd(T[r], b);
            } catch (O) {
              Rt(s, s.return, O);
            }
          }
          (n && y & 64 && Vh(o), ts(o, o.return));
          break;
        case 27:
          Lh(o);
        case 26:
        case 5:
          (wn(r, o, n), n && s === null && y & 4 && Uh(o), ts(o, o.return));
          break;
        case 12:
          wn(r, o, n);
          break;
        case 13:
          (wn(r, o, n), n && y & 4 && Gh(r, o));
          break;
        case 22:
          (o.memoizedState === null && wn(r, o, n), ts(o, o.return));
          break;
        case 30:
          break;
        default:
          wn(r, o, n);
      }
      e = e.sibling;
    }
  }
  function Ju(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Li(n)));
  }
  function Iu(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Li(t)));
  }
  function $e(t, e, n, s) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) ($h(t, e, n, s), (e = e.sibling));
  }
  function $h(t, e, n, s) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ($e(t, e, n, s), r & 2048 && Wi(9, e));
        break;
      case 1:
        $e(t, e, n, s);
        break;
      case 3:
        ($e(t, e, n, s),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Li(t))));
        break;
      case 12:
        if (r & 2048) {
          ($e(t, e, n, s), (t = e.stateNode));
          try {
            var o = e.memoizedProps,
              y = o.id,
              b = o.onPostCommit;
            typeof b == "function" &&
              b(
                y,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            Rt(e, e.return, T);
          }
        } else $e(t, e, n, s);
        break;
      case 13:
        $e(t, e, n, s);
        break;
      case 23:
        break;
      case 22:
        ((o = e.stateNode),
          (y = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? $e(t, e, n, s)
              : es(t, e)
            : o._visibility & 2
              ? $e(t, e, n, s)
              : ((o._visibility |= 2),
                Pa(t, e, n, s, (e.subtreeFlags & 10256) !== 0)),
          r & 2048 && Ju(y, e));
        break;
      case 24:
        ($e(t, e, n, s), r & 2048 && Iu(e.alternate, e));
        break;
      default:
        $e(t, e, n, s);
    }
  }
  function Pa(t, e, n, s, r) {
    for (r = r && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var o = t,
        y = e,
        b = n,
        T = s,
        O = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (Pa(o, y, b, T, r), Wi(8, y));
          break;
        case 23:
          break;
        case 22:
          var L = y.stateNode;
          (y.memoizedState !== null
            ? L._visibility & 2
              ? Pa(o, y, b, T, r)
              : es(o, y)
            : ((L._visibility |= 2), Pa(o, y, b, T, r)),
            r && O & 2048 && Ju(y.alternate, y));
          break;
        case 24:
          (Pa(o, y, b, T, r), r && O & 2048 && Iu(y.alternate, y));
          break;
        default:
          Pa(o, y, b, T, r);
      }
      e = e.sibling;
    }
  }
  function es(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          s = e,
          r = s.flags;
        switch (s.tag) {
          case 22:
            (es(n, s), r & 2048 && Ju(s.alternate, s));
            break;
          case 24:
            (es(n, s), r & 2048 && Iu(s.alternate, s));
            break;
          default:
            es(n, s);
        }
        e = e.sibling;
      }
  }
  var ns = 8192;
  function Ja(t) {
    if (t.subtreeFlags & ns)
      for (t = t.child; t !== null; ) (Qh(t), (t = t.sibling));
  }
  function Qh(t) {
    switch (t.tag) {
      case 26:
        (Ja(t),
          t.flags & ns &&
            t.memoizedState !== null &&
            gb(Le, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Ja(t);
        break;
      case 3:
      case 4:
        var e = Le;
        ((Le = Hl(t.stateNode.containerInfo)), Ja(t), (Le = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = ns), (ns = 16777216), Ja(t), (ns = e))
            : Ja(t));
        break;
      default:
        Ja(t);
    }
  }
  function Ph(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function as(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          ((Jt = s), Ih(s, t));
        }
      Ph(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Jh(t), (t = t.sibling));
  }
  function Jh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (as(t), t.flags & 2048 && Cn(9, t, t.return));
        break;
      case 3:
        as(t);
        break;
      case 12:
        as(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Rl(t))
          : as(t);
        break;
      default:
        as(t);
    }
  }
  function Rl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          ((Jt = s), Ih(s, t));
        }
      Ph(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Cn(8, e, e.return), Rl(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Rl(e)));
          break;
        default:
          Rl(e);
      }
      t = t.sibling;
    }
  }
  function Ih(t, e) {
    for (; Jt !== null; ) {
      var n = Jt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Cn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var s = n.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Li(n.memoizedState.cache);
      }
      if (((s = n.child), s !== null)) ((s.return = n), (Jt = s));
      else
        t: for (n = t; Jt !== null; ) {
          s = Jt;
          var r = s.sibling,
            o = s.return;
          if ((qh(s), s === n)) {
            Jt = null;
            break t;
          }
          if (r !== null) {
            ((r.return = o), (Jt = r));
            break t;
          }
          Jt = o;
        }
    }
  }
  var wv = {
      getCacheForType: function (t) {
        var e = ae(Kt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
    },
    zv = typeof WeakMap == "function" ? WeakMap : Map,
    Et = 0,
    Ot = null,
    mt = null,
    vt = 0,
    jt = 0,
    Te = null,
    zn = !1,
    Ia = !1,
    Fu = !1,
    mn = 0,
    Bt = 0,
    Vn = 0,
    ha = 0,
    Wu = 0,
    we = 0,
    Fa = 0,
    is = null,
    he = null,
    to = !1,
    eo = 0,
    Ol = 1 / 0,
    Cl = null,
    kn = null,
    Wt = 0,
    Un = null,
    Wa = null,
    ti = 0,
    no = 0,
    ao = null,
    Fh = null,
    ss = 0,
    io = null;
  function Ae() {
    if ((Et & 2) !== 0 && vt !== 0) return vt & -vt;
    if (D.T !== null) {
      var t = Ha;
      return t !== 0 ? t : fo();
    }
    return mf();
  }
  function Wh() {
    we === 0 && (we = (vt & 536870912) === 0 || At ? cf() : 536870912);
    var t = _e.current;
    return (t !== null && (t.flags |= 32), we);
  }
  function Ee(t, e, n) {
    (((t === Ot && (jt === 2 || jt === 9)) || t.cancelPendingCommit !== null) &&
      (ei(t, 0), Bn(t, vt, we, !1)),
      Ai(t, n),
      ((Et & 2) === 0 || t !== Ot) &&
        (t === Ot &&
          ((Et & 2) === 0 && (ha |= n), Bt === 4 && Bn(t, vt, we, !1)),
        Qe(t)));
  }
  function tm(t, e, n) {
    if ((Et & 6) !== 0) throw Error(u(327));
    var s = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ti(t, e),
      r = s ? Uv(t, e) : ro(t, e, !0),
      o = s;
    do {
      if (r === 0) {
        Ia && !s && Bn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !Vv(n))) {
          ((r = ro(t, e, !1)), (o = !1));
          continue;
        }
        if (r === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var y = 0;
          else
            ((y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
          if (y !== 0) {
            e = y;
            t: {
              var b = t;
              r = is;
              var T = b.current.memoizedState.isDehydrated;
              if ((T && (ei(b, y).flags |= 256), (y = ro(b, y, !1)), y !== 2)) {
                if (Fu && !T) {
                  ((b.errorRecoveryDisabledLanes |= o), (ha |= o), (r = 4));
                  break t;
                }
                ((o = he),
                  (he = r),
                  o !== null &&
                    (he === null ? (he = o) : he.push.apply(he, o)));
              }
              r = y;
            }
            if (((o = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (ei(t, 0), Bn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((s = t), (o = r), o)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Bn(s, e, we, !zn);
              break t;
            case 2:
              he = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((r = eo + 300 - Xe()), 10 < r)) {
            if ((Bn(s, e, we, !zn), qs(s, 0, !0) !== 0)) break t;
            s.timeoutHandle = Rm(
              em.bind(null, s, n, he, Cl, to, e, we, ha, Fa, zn, o, 2, -0, 0),
              r,
            );
            break t;
          }
          em(s, n, he, Cl, to, e, we, ha, Fa, zn, o, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Qe(t);
  }
  function em(t, e, n, s, r, o, y, b, T, O, L, H, _, z) {
    if (
      ((t.timeoutHandle = -1),
      (H = e.subtreeFlags),
      (H & 8192 || (H & 16785408) === 16785408) &&
        ((ds = { stylesheets: null, count: 0, unsuspend: yb }),
        Qh(e),
        (H = vb()),
        H !== null))
    ) {
      ((t.cancelPendingCommit = H(
        um.bind(null, t, e, o, n, s, r, y, b, T, L, 1, _, z),
      )),
        Bn(t, o, y, !O));
      return;
    }
    um(t, e, o, n, s, r, y, b, T);
  }
  function Vv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var s = 0; s < n.length; s++) {
          var r = n[s],
            o = r.getSnapshot;
          r = r.value;
          try {
            if (!ve(o(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Bn(t, e, n, s) {
    ((e &= ~Wu),
      (e &= ~ha),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      s && (t.warmLanes |= e),
      (s = t.expirationTimes));
    for (var r = e; 0 < r; ) {
      var o = 31 - ge(r),
        y = 1 << o;
      ((s[o] = -1), (r &= ~y));
    }
    n !== 0 && df(t, n, e);
  }
  function _l() {
    return (Et & 6) === 0 ? (ls(0), !1) : !0;
  }
  function so() {
    if (mt !== null) {
      if (jt === 0) var t = mt.return;
      else ((t = mt), (ln = ra = null), Tu(t), ($a = null), (Ji = 0), (t = mt));
      for (; t !== null; ) (zh(t.alternate, t), (t = t.return));
      mt = null;
    }
  }
  function ei(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Wv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      so(),
      (Ot = t),
      (mt = n = nn(t.current, null)),
      (vt = e),
      (jt = 0),
      (Te = null),
      (zn = !1),
      (Ia = Ti(t, e)),
      (Fu = !1),
      (Fa = we = Wu = ha = Vn = Bt = 0),
      (he = is = null),
      (to = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var s = t.entangledLanes;
    if (s !== 0)
      for (t = t.entanglements, s &= e; 0 < s; ) {
        var r = 31 - ge(s),
          o = 1 << r;
        ((e |= t[r]), (s &= ~o));
      }
    return ((mn = e), tl(), n);
  }
  function nm(t, e) {
    ((dt = null),
      (D.H = bl),
      e === Hi || e === ol
        ? ((e = bd()), (jt = 3))
        : e === yd
          ? ((e = bd()), (jt = 4))
          : (jt =
              e === xh
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Te = e),
      mt === null && ((Bt = 1), El(t, Ne(e, t.current))));
  }
  function am() {
    var t = D.H;
    return ((D.H = bl), t === null ? bl : t);
  }
  function im() {
    var t = D.A;
    return ((D.A = wv), t);
  }
  function lo() {
    ((Bt = 4),
      zn || ((vt & 4194048) !== vt && _e.current !== null) || (Ia = !0),
      ((Vn & 134217727) === 0 && (ha & 134217727) === 0) ||
        Ot === null ||
        Bn(Ot, vt, we, !1));
  }
  function ro(t, e, n) {
    var s = Et;
    Et |= 2;
    var r = am(),
      o = im();
    ((Ot !== t || vt !== e) && ((Cl = null), ei(t, e)), (e = !1));
    var y = Bt;
    t: do
      try {
        if (jt !== 0 && mt !== null) {
          var b = mt,
            T = Te;
          switch (jt) {
            case 8:
              (so(), (y = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              _e.current === null && (e = !0);
              var O = jt;
              if (((jt = 0), (Te = null), ni(t, b, T, O), n && Ia)) {
                y = 0;
                break t;
              }
              break;
            default:
              ((O = jt), (jt = 0), (Te = null), ni(t, b, T, O));
          }
        }
        (kv(), (y = Bt));
        break;
      } catch (L) {
        nm(t, L);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (ln = ra = null),
      (Et = s),
      (D.H = r),
      (D.A = o),
      mt === null && ((Ot = null), (vt = 0), tl()),
      y
    );
  }
  function kv() {
    for (; mt !== null; ) sm(mt);
  }
  function Uv(t, e) {
    var n = Et;
    Et |= 2;
    var s = am(),
      r = im();
    Ot !== t || vt !== e
      ? ((Cl = null), (Ol = Xe() + 500), ei(t, e))
      : (Ia = Ti(t, e));
    t: do
      try {
        if (jt !== 0 && mt !== null) {
          e = mt;
          var o = Te;
          e: switch (jt) {
            case 1:
              ((jt = 0), (Te = null), ni(t, e, o, 1));
              break;
            case 2:
            case 9:
              if (gd(o)) {
                ((jt = 0), (Te = null), lm(e));
                break;
              }
              ((e = function () {
                ((jt !== 2 && jt !== 9) || Ot !== t || (jt = 7), Qe(t));
              }),
                o.then(e, e));
              break t;
            case 3:
              jt = 7;
              break t;
            case 4:
              jt = 5;
              break t;
            case 7:
              gd(o)
                ? ((jt = 0), (Te = null), lm(e))
                : ((jt = 0), (Te = null), ni(t, e, o, 7));
              break;
            case 5:
              var y = null;
              switch (mt.tag) {
                case 26:
                  y = mt.memoizedState;
                case 5:
                case 27:
                  var b = mt;
                  if (!y || Hm(y)) {
                    ((jt = 0), (Te = null));
                    var T = b.sibling;
                    if (T !== null) mt = T;
                    else {
                      var O = b.return;
                      O !== null ? ((mt = O), wl(O)) : (mt = null);
                    }
                    break e;
                  }
              }
              ((jt = 0), (Te = null), ni(t, e, o, 5));
              break;
            case 6:
              ((jt = 0), (Te = null), ni(t, e, o, 6));
              break;
            case 8:
              (so(), (Bt = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        Bv();
        break;
      } catch (L) {
        nm(t, L);
      }
    while (!0);
    return (
      (ln = ra = null),
      (D.H = s),
      (D.A = r),
      (Et = n),
      mt !== null ? 0 : ((Ot = null), (vt = 0), tl(), Bt)
    );
  }
  function Bv() {
    for (; mt !== null && !l0(); ) sm(mt);
  }
  function sm(t) {
    var e = _h(t.alternate, t, mn);
    ((t.memoizedProps = t.pendingProps), e === null ? wl(t) : (mt = e));
  }
  function lm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Mh(n, e, e.pendingProps, e.type, void 0, vt);
        break;
      case 11:
        e = Mh(n, e, e.pendingProps, e.type.render, e.ref, vt);
        break;
      case 5:
        Tu(e);
      default:
        (zh(n, e), (e = mt = rd(e, mn)), (e = _h(n, e, mn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? wl(t) : (mt = e));
  }
  function ni(t, e, n, s) {
    ((ln = ra = null), Tu(e), ($a = null), (Ji = 0));
    var r = e.return;
    try {
      if (Dv(t, r, e, n, vt)) {
        ((Bt = 1), El(t, Ne(n, t.current)), (mt = null));
        return;
      }
    } catch (o) {
      if (r !== null) throw ((mt = r), o);
      ((Bt = 1), El(t, Ne(n, t.current)), (mt = null));
      return;
    }
    e.flags & 32768
      ? (At || s === 1
          ? (t = !0)
          : Ia || (vt & 536870912) !== 0
            ? (t = !1)
            : ((zn = t = !0),
              (s === 2 || s === 9 || s === 3 || s === 6) &&
                ((s = _e.current),
                s !== null && s.tag === 13 && (s.flags |= 16384))),
        rm(e, t))
      : wl(e);
  }
  function wl(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        rm(e, zn);
        return;
      }
      t = e.return;
      var n = Rv(e.alternate, e, mn);
      if (n !== null) {
        mt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        mt = e;
        return;
      }
      mt = e = t;
    } while (e !== null);
    Bt === 0 && (Bt = 5);
  }
  function rm(t, e) {
    do {
      var n = Ov(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (mt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        mt = t;
        return;
      }
      mt = t = n;
    } while (t !== null);
    ((Bt = 6), (mt = null));
  }
  function um(t, e, n, s, r, o, y, b, T) {
    t.cancelPendingCommit = null;
    do zl();
    while (Wt !== 0);
    if ((Et & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= Ir),
        y0(t, n, o, y, b, T),
        t === Ot && ((mt = Ot = null), (vt = 0)),
        (Wa = e),
        (Un = t),
        (ti = n),
        (no = o),
        (ao = r),
        (Fh = s),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            qv(Ls, function () {
              return (hm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (s = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || s)
      ) {
        ((s = D.T), (D.T = null), (r = N.p), (N.p = 2), (y = Et), (Et |= 4));
        try {
          Cv(t, e, n);
        } finally {
          ((Et = y), (N.p = r), (D.T = s));
        }
      }
      ((Wt = 1), om(), cm(), fm());
    }
  }
  function om() {
    if (Wt === 1) {
      Wt = 0;
      var t = Un,
        e = Wa,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = D.T), (D.T = null));
        var s = N.p;
        N.p = 2;
        var r = Et;
        Et |= 4;
        try {
          Zh(e, t);
          var o = xo,
            y = If(t.containerInfo),
            b = o.focusedElem,
            T = o.selectionRange;
          if (
            y !== b &&
            b &&
            b.ownerDocument &&
            Jf(b.ownerDocument.documentElement, b)
          ) {
            if (T !== null && Kr(b)) {
              var O = T.start,
                L = T.end;
              if ((L === void 0 && (L = O), "selectionStart" in b))
                ((b.selectionStart = O),
                  (b.selectionEnd = Math.min(L, b.value.length)));
              else {
                var H = b.ownerDocument || document,
                  _ = (H && H.defaultView) || window;
                if (_.getSelection) {
                  var z = _.getSelection(),
                    lt = b.textContent.length,
                    it = Math.min(T.start, lt),
                    Nt = T.end === void 0 ? it : Math.min(T.end, lt);
                  !z.extend && it > Nt && ((y = Nt), (Nt = it), (it = y));
                  var M = Pf(b, it),
                    E = Pf(b, Nt);
                  if (
                    M &&
                    E &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== M.node ||
                      z.anchorOffset !== M.offset ||
                      z.focusNode !== E.node ||
                      z.focusOffset !== E.offset)
                  ) {
                    var R = H.createRange();
                    (R.setStart(M.node, M.offset),
                      z.removeAllRanges(),
                      it > Nt
                        ? (z.addRange(R), z.extend(E.node, E.offset))
                        : (R.setEnd(E.node, E.offset), z.addRange(R)));
                  }
                }
              }
            }
            for (H = [], z = b; (z = z.parentNode); )
              z.nodeType === 1 &&
                H.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (
              typeof b.focus == "function" && b.focus(), b = 0;
              b < H.length;
              b++
            ) {
              var Y = H[b];
              ((Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top));
            }
          }
          ((Kl = !!bo), (xo = bo = null));
        } finally {
          ((Et = r), (N.p = s), (D.T = n));
        }
      }
      ((t.current = e), (Wt = 2));
    }
  }
  function cm() {
    if (Wt === 2) {
      Wt = 0;
      var t = Un,
        e = Wa,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = D.T), (D.T = null));
        var s = N.p;
        N.p = 2;
        var r = Et;
        Et |= 4;
        try {
          Hh(t, e.alternate, e);
        } finally {
          ((Et = r), (N.p = s), (D.T = n));
        }
      }
      Wt = 3;
    }
  }
  function fm() {
    if (Wt === 4 || Wt === 3) {
      ((Wt = 0), r0());
      var t = Un,
        e = Wa,
        n = ti,
        s = Fh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Wt = 5)
        : ((Wt = 0), (Wa = Un = null), dm(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (
        (r === 0 && (kn = null),
        jr(n),
        (e = e.stateNode),
        ye && typeof ye.onCommitFiberRoot == "function")
      )
        try {
          ye.onCommitFiberRoot(Si, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        ((e = D.T), (r = N.p), (N.p = 2), (D.T = null));
        try {
          for (var o = t.onRecoverableError, y = 0; y < s.length; y++) {
            var b = s[y];
            o(b.value, { componentStack: b.stack });
          }
        } finally {
          ((D.T = e), (N.p = r));
        }
      }
      ((ti & 3) !== 0 && zl(),
        Qe(t),
        (r = t.pendingLanes),
        (n & 4194090) !== 0 && (r & 42) !== 0
          ? t === io
            ? ss++
            : ((ss = 0), (io = t))
          : (ss = 0),
        ls(0));
    }
  }
  function dm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Li(e)));
  }
  function zl(t) {
    return (om(), cm(), fm(), hm());
  }
  function hm() {
    if (Wt !== 5) return !1;
    var t = Un,
      e = no;
    no = 0;
    var n = jr(ti),
      s = D.T,
      r = N.p;
    try {
      ((N.p = 32 > n ? 32 : n), (D.T = null), (n = ao), (ao = null));
      var o = Un,
        y = ti;
      if (((Wt = 0), (Wa = Un = null), (ti = 0), (Et & 6) !== 0))
        throw Error(u(331));
      var b = Et;
      if (
        ((Et |= 4),
        Jh(o.current),
        $h(o, o.current, y, n),
        (Et = b),
        ls(0, !1),
        ye && typeof ye.onPostCommitFiberRoot == "function")
      )
        try {
          ye.onPostCommitFiberRoot(Si, o);
        } catch {}
      return !0;
    } finally {
      ((N.p = r), (D.T = s), dm(t, e));
    }
  }
  function mm(t, e, n) {
    ((e = Ne(n, e)),
      (e = ku(t.stateNode, e, 2)),
      (t = Dn(t, e, 2)),
      t !== null && (Ai(t, 2), Qe(t)));
  }
  function Rt(t, e, n) {
    if (t.tag === 3) mm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          mm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var s = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (kn === null || !kn.has(s)))
          ) {
            ((t = Ne(n, t)),
              (n = vh(2)),
              (s = Dn(e, n, 2)),
              s !== null && (bh(n, s, e, t), Ai(s, 2), Qe(s)));
            break;
          }
        }
        e = e.return;
      }
  }
  function uo(t, e, n) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new zv();
      var r = new Set();
      s.set(e, r);
    } else ((r = s.get(e)), r === void 0 && ((r = new Set()), s.set(e, r)));
    r.has(n) ||
      ((Fu = !0), r.add(n), (t = Lv.bind(null, t, e, n)), e.then(t, t));
  }
  function Lv(t, e, n) {
    var s = t.pingCache;
    (s !== null && s.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Ot === t &&
        (vt & n) === n &&
        (Bt === 4 || (Bt === 3 && (vt & 62914560) === vt && 300 > Xe() - eo)
          ? (Et & 2) === 0 && ei(t, 0)
          : (Wu |= n),
        Fa === vt && (Fa = 0)),
      Qe(t));
  }
  function pm(t, e) {
    (e === 0 && (e = ff()), (t = Ua(t, e)), t !== null && (Ai(t, e), Qe(t)));
  }
  function Yv(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), pm(t, n));
  }
  function Hv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var s = t.stateNode,
          r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (s !== null && s.delete(e), pm(t, n));
  }
  function qv(t, e) {
    return Sr(t, e);
  }
  var Vl = null,
    ai = null,
    oo = !1,
    kl = !1,
    co = !1,
    ma = 0;
  function Qe(t) {
    (t !== ai &&
      t.next === null &&
      (ai === null ? (Vl = ai = t) : (ai = ai.next = t)),
      (kl = !0),
      oo || ((oo = !0), Gv()));
  }
  function ls(t, e) {
    if (!co && kl) {
      co = !0;
      do
        for (var n = !1, s = Vl; s !== null; ) {
          if (t !== 0) {
            var r = s.pendingLanes;
            if (r === 0) var o = 0;
            else {
              var y = s.suspendedLanes,
                b = s.pingedLanes;
              ((o = (1 << (31 - ge(42 | t) + 1)) - 1),
                (o &= r & ~(y & ~b)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), bm(s, o));
          } else
            ((o = vt),
              (o = qs(
                s,
                s === Ot ? o : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || Ti(s, o) || ((n = !0), bm(s, o)));
          s = s.next;
        }
      while (n);
      co = !1;
    }
  }
  function Xv() {
    ym();
  }
  function ym() {
    kl = oo = !1;
    var t = 0;
    ma !== 0 && (Fv() && (t = ma), (ma = 0));
    for (var e = Xe(), n = null, s = Vl; s !== null; ) {
      var r = s.next,
        o = gm(s, e);
      (o === 0
        ? ((s.next = null),
          n === null ? (Vl = r) : (n.next = r),
          r === null && (ai = n))
        : ((n = s), (t !== 0 || (o & 3) !== 0) && (kl = !0)),
        (s = r));
    }
    ls(t);
  }
  function gm(t, e) {
    for (
      var n = t.suspendedLanes,
        s = t.pingedLanes,
        r = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var y = 31 - ge(o),
        b = 1 << y,
        T = r[y];
      (T === -1
        ? ((b & n) === 0 || (b & s) !== 0) && (r[y] = p0(b, e))
        : T <= e && (t.expiredLanes |= b),
        (o &= ~b));
    }
    if (
      ((e = Ot),
      (n = vt),
      (n = qs(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (s = t.callbackNode),
      n === 0 ||
        (t === e && (jt === 2 || jt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && Tr(s),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Ti(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((s !== null && Tr(s), jr(n))) {
        case 2:
        case 8:
          n = uf;
          break;
        case 32:
          n = Ls;
          break;
        case 268435456:
          n = of;
          break;
        default:
          n = Ls;
      }
      return (
        (s = vm.bind(null, t)),
        (n = Sr(n, s)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      s !== null && s !== null && Tr(s),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function vm(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (zl() && t.callbackNode !== n) return null;
    var s = vt;
    return (
      (s = qs(
        t,
        t === Ot ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      s === 0
        ? null
        : (tm(t, s, e),
          gm(t, Xe()),
          t.callbackNode != null && t.callbackNode === n
            ? vm.bind(null, t)
            : null)
    );
  }
  function bm(t, e) {
    if (zl()) return null;
    tm(t, e, !0);
  }
  function Gv() {
    tb(function () {
      (Et & 6) !== 0 ? Sr(rf, Xv) : ym();
    });
  }
  function fo() {
    return (ma === 0 && (ma = cf()), ma);
  }
  function xm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : $s("" + t);
  }
  function Sm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Zv(t, e, n, s, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var o = xm((r[oe] || null).action),
        y = s.submitter;
      y &&
        ((e = (e = y[oe] || null)
          ? xm(e.formAction)
          : y.getAttribute("formAction")),
        e !== null && ((o = e), (y = null)));
      var b = new Is("action", "action", null, s, r);
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (ma !== 0) {
                  var T = y ? Sm(r, y) : new FormData(r);
                  Cu(
                    n,
                    { pending: !0, data: T, method: r.method, action: o },
                    null,
                    T,
                  );
                }
              } else
                typeof o == "function" &&
                  (b.preventDefault(),
                  (T = y ? Sm(r, y) : new FormData(r)),
                  Cu(
                    n,
                    { pending: !0, data: T, method: r.method, action: o },
                    o,
                    T,
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var ho = 0; ho < Jr.length; ho++) {
    var mo = Jr[ho],
      Kv = mo.toLowerCase(),
      $v = mo[0].toUpperCase() + mo.slice(1);
    Be(Kv, "on" + $v);
  }
  (Be(td, "onAnimationEnd"),
    Be(ed, "onAnimationIteration"),
    Be(nd, "onAnimationStart"),
    Be("dblclick", "onDoubleClick"),
    Be("focusin", "onFocus"),
    Be("focusout", "onBlur"),
    Be(cv, "onTransitionRun"),
    Be(fv, "onTransitionStart"),
    Be(dv, "onTransitionCancel"),
    Be(ad, "onTransitionEnd"),
    Da("onMouseEnter", ["mouseout", "mouseover"]),
    Da("onMouseLeave", ["mouseout", "mouseover"]),
    Da("onPointerEnter", ["pointerout", "pointerover"]),
    Da("onPointerLeave", ["pointerout", "pointerover"]),
    Fn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Fn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Fn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Fn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Fn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var rs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Qv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(rs),
    );
  function Tm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var s = t[n],
        r = s.event;
      s = s.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var y = s.length - 1; 0 <= y; y--) {
            var b = s[y],
              T = b.instance,
              O = b.currentTarget;
            if (((b = b.listener), T !== o && r.isPropagationStopped()))
              break t;
            ((o = b), (r.currentTarget = O));
            try {
              o(r);
            } catch (L) {
              Al(L);
            }
            ((r.currentTarget = null), (o = T));
          }
        else
          for (y = 0; y < s.length; y++) {
            if (
              ((b = s[y]),
              (T = b.instance),
              (O = b.currentTarget),
              (b = b.listener),
              T !== o && r.isPropagationStopped())
            )
              break t;
            ((o = b), (r.currentTarget = O));
            try {
              o(r);
            } catch (L) {
              Al(L);
            }
            ((r.currentTarget = null), (o = T));
          }
      }
    }
  }
  function pt(t, e) {
    var n = e[Mr];
    n === void 0 && (n = e[Mr] = new Set());
    var s = t + "__bubble";
    n.has(s) || (Am(e, t, 2, !1), n.add(s));
  }
  function po(t, e, n) {
    var s = 0;
    (e && (s |= 4), Am(n, t, s, e));
  }
  var Ul = "_reactListening" + Math.random().toString(36).slice(2);
  function yo(t) {
    if (!t[Ul]) {
      ((t[Ul] = !0),
        yf.forEach(function (n) {
          n !== "selectionchange" && (Qv.has(n) || po(n, !1, t), po(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ul] || ((e[Ul] = !0), po("selectionchange", !1, e));
    }
  }
  function Am(t, e, n, s) {
    switch ($m(e)) {
      case 2:
        var r = Sb;
        break;
      case 8:
        r = Tb;
        break;
      default:
        r = Oo;
    }
    ((n = r.bind(null, e, n, t)),
      (r = void 0),
      !Ur ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
      s
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
          ? t.addEventListener(e, n, { passive: r })
          : t.addEventListener(e, n, !1));
  }
  function go(t, e, n, s, r) {
    var o = s;
    if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
      t: for (;;) {
        if (s === null) return;
        var y = s.tag;
        if (y === 3 || y === 4) {
          var b = s.stateNode.containerInfo;
          if (b === r) break;
          if (y === 4)
            for (y = s.return; y !== null; ) {
              var T = y.tag;
              if ((T === 3 || T === 4) && y.stateNode.containerInfo === r)
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (((y = Ea(b)), y === null)) return;
            if (((T = y.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              s = o = y;
              continue t;
            }
            b = b.parentNode;
          }
        }
        s = s.return;
      }
    Of(function () {
      var O = o,
        L = Vr(n),
        H = [];
      t: {
        var _ = id.get(t);
        if (_ !== void 0) {
          var z = Is,
            lt = t;
          switch (t) {
            case "keypress":
              if (Ps(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = q0;
              break;
            case "focusin":
              ((lt = "focus"), (z = Hr));
              break;
            case "focusout":
              ((lt = "blur"), (z = Hr));
              break;
            case "beforeblur":
            case "afterblur":
              z = Hr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = O0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Z0;
              break;
            case td:
            case ed:
            case nd:
              z = w0;
              break;
            case ad:
              z = $0;
              break;
            case "scroll":
            case "scrollend":
              z = N0;
              break;
            case "wheel":
              z = P0;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = V0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Vf;
              break;
            case "toggle":
            case "beforetoggle":
              z = I0;
          }
          var it = (e & 4) !== 0,
            Nt = !it && (t === "scroll" || t === "scrollend"),
            M = it ? (_ !== null ? _ + "Capture" : null) : _;
          it = [];
          for (var E = O, R; E !== null; ) {
            var Y = E;
            if (
              ((R = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                R === null ||
                M === null ||
                ((Y = Mi(E, M)), Y != null && it.push(us(E, Y, R))),
              Nt)
            )
              break;
            E = E.return;
          }
          0 < it.length &&
            ((_ = new z(_, lt, null, n, L)),
            H.push({ event: _, listeners: it }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (z = t === "mouseout" || t === "pointerout"),
            _ &&
              n !== zr &&
              (lt = n.relatedTarget || n.fromElement) &&
              (Ea(lt) || lt[Aa]))
          )
            break t;
          if (
            (z || _) &&
            ((_ =
              L.window === L
                ? L
                : (_ = L.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            z
              ? ((lt = n.relatedTarget || n.toElement),
                (z = O),
                (lt = lt ? Ea(lt) : null),
                lt !== null &&
                  ((Nt = d(lt)),
                  (it = lt.tag),
                  lt !== Nt || (it !== 5 && it !== 27 && it !== 6)) &&
                  (lt = null))
              : ((z = null), (lt = O)),
            z !== lt)
          ) {
            if (
              ((it = wf),
              (Y = "onMouseLeave"),
              (M = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((it = Vf),
                (Y = "onPointerLeave"),
                (M = "onPointerEnter"),
                (E = "pointer")),
              (Nt = z == null ? _ : ji(z)),
              (R = lt == null ? _ : ji(lt)),
              (_ = new it(Y, E + "leave", z, n, L)),
              (_.target = Nt),
              (_.relatedTarget = R),
              (Y = null),
              Ea(L) === O &&
                ((it = new it(M, E + "enter", lt, n, L)),
                (it.target = R),
                (it.relatedTarget = Nt),
                (Y = it)),
              (Nt = Y),
              z && lt)
            )
              e: {
                for (it = z, M = lt, E = 0, R = it; R; R = ii(R)) E++;
                for (R = 0, Y = M; Y; Y = ii(Y)) R++;
                for (; 0 < E - R; ) ((it = ii(it)), E--);
                for (; 0 < R - E; ) ((M = ii(M)), R--);
                for (; E--; ) {
                  if (it === M || (M !== null && it === M.alternate)) break e;
                  ((it = ii(it)), (M = ii(M)));
                }
                it = null;
              }
            else it = null;
            (z !== null && Em(H, _, z, it, !1),
              lt !== null && Nt !== null && Em(H, Nt, lt, it, !0));
          }
        }
        t: {
          if (
            ((_ = O ? ji(O) : window),
            (z = _.nodeName && _.nodeName.toLowerCase()),
            z === "select" || (z === "input" && _.type === "file"))
          )
            var et = Xf;
          else if (Hf(_))
            if (Gf) et = rv;
            else {
              et = sv;
              var ht = iv;
            }
          else
            ((z = _.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? O && wr(O.elementType) && (et = Xf)
                : (et = lv));
          if (et && (et = et(t, O))) {
            qf(H, et, n, L);
            break t;
          }
          (ht && ht(t, _, O),
            t === "focusout" &&
              O &&
              _.type === "number" &&
              O.memoizedProps.value != null &&
              _r(_, "number", _.value));
        }
        switch (((ht = O ? ji(O) : window), t)) {
          case "focusin":
            (Hf(ht) || ht.contentEditable === "true") &&
              ((za = ht), ($r = O), (zi = null));
            break;
          case "focusout":
            zi = $r = za = null;
            break;
          case "mousedown":
            Qr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Qr = !1), Ff(H, n, L));
            break;
          case "selectionchange":
            if (ov) break;
          case "keydown":
          case "keyup":
            Ff(H, n, L);
        }
        var at;
        if (Xr)
          t: {
            switch (t) {
              case "compositionstart":
                var st = "onCompositionStart";
                break t;
              case "compositionend":
                st = "onCompositionEnd";
                break t;
              case "compositionupdate":
                st = "onCompositionUpdate";
                break t;
            }
            st = void 0;
          }
        else
          wa
            ? Lf(t, n) && (st = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (st = "onCompositionStart");
        (st &&
          (kf &&
            n.locale !== "ko" &&
            (wa || st !== "onCompositionStart"
              ? st === "onCompositionEnd" && wa && (at = Cf())
              : ((An = L),
                (Br = "value" in An ? An.value : An.textContent),
                (wa = !0))),
          (ht = Bl(O, st)),
          0 < ht.length &&
            ((st = new zf(st, t, null, n, L)),
            H.push({ event: st, listeners: ht }),
            at
              ? (st.data = at)
              : ((at = Yf(n)), at !== null && (st.data = at)))),
          (at = W0 ? tv(t, n) : ev(t, n)) &&
            ((st = Bl(O, "onBeforeInput")),
            0 < st.length &&
              ((ht = new zf("onBeforeInput", "beforeinput", null, n, L)),
              H.push({ event: ht, listeners: st }),
              (ht.data = at))),
          Zv(H, t, O, n, L));
      }
      Tm(H, e);
    });
  }
  function us(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Bl(t, e) {
    for (var n = e + "Capture", s = []; t !== null; ) {
      var r = t,
        o = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          o === null ||
          ((r = Mi(t, n)),
          r != null && s.unshift(us(t, r, o)),
          (r = Mi(t, e)),
          r != null && s.push(us(t, r, o))),
        t.tag === 3)
      )
        return s;
      t = t.return;
    }
    return [];
  }
  function ii(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Em(t, e, n, s, r) {
    for (var o = e._reactName, y = []; n !== null && n !== s; ) {
      var b = n,
        T = b.alternate,
        O = b.stateNode;
      if (((b = b.tag), T !== null && T === s)) break;
      ((b !== 5 && b !== 26 && b !== 27) ||
        O === null ||
        ((T = O),
        r
          ? ((O = Mi(n, o)), O != null && y.unshift(us(n, O, T)))
          : r || ((O = Mi(n, o)), O != null && y.push(us(n, O, T)))),
        (n = n.return));
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var Pv = /\r\n?/g,
    Jv = /\u0000|\uFFFD/g;
  function jm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Pv,
        `
`,
      )
      .replace(Jv, "");
  }
  function Mm(t, e) {
    return ((e = jm(e)), jm(t) === e);
  }
  function Ll() {}
  function Dt(t, e, n, s, r, o) {
    switch (n) {
      case "children":
        typeof s == "string"
          ? e === "body" || (e === "textarea" && s === "") || Oa(t, s)
          : (typeof s == "number" || typeof s == "bigint") &&
            e !== "body" &&
            Oa(t, "" + s);
        break;
      case "className":
        Gs(t, "class", s);
        break;
      case "tabIndex":
        Gs(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gs(t, n, s);
        break;
      case "style":
        Nf(t, s, o);
        break;
      case "data":
        if (e !== "object") {
          Gs(t, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "symbol" ||
          typeof s == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((s = $s("" + s)), t.setAttribute(n, s));
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && Dt(t, e, "name", r.name, r, null),
                Dt(t, e, "formEncType", r.formEncType, r, null),
                Dt(t, e, "formMethod", r.formMethod, r, null),
                Dt(t, e, "formTarget", r.formTarget, r, null))
              : (Dt(t, e, "encType", r.encType, r, null),
                Dt(t, e, "method", r.method, r, null),
                Dt(t, e, "target", r.target, r, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((s = $s("" + s)), t.setAttribute(n, s));
        break;
      case "onClick":
        s != null && (t.onclick = Ll);
        break;
      case "onScroll":
        s != null && pt("scroll", t);
        break;
      case "onScrollEnd":
        s != null && pt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(u(61));
          if (((n = s.__html), n != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        t.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "boolean" ||
          typeof s == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = $s("" + s)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(n, "" + s)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        s === !0
          ? t.setAttribute(n, "")
          : s !== !1 &&
              s != null &&
              typeof s != "function" &&
              typeof s != "symbol"
            ? t.setAttribute(n, s)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        !isNaN(s) &&
        1 <= s
          ? t.setAttribute(n, s)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
          ? t.removeAttribute(n)
          : t.setAttribute(n, s);
        break;
      case "popover":
        (pt("beforetoggle", t), pt("toggle", t), Xs(t, "popover", s));
        break;
      case "xlinkActuate":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
        break;
      case "xlinkRole":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
        break;
      case "xlinkShow":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
        break;
      case "xlinkTitle":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
        break;
      case "xlinkType":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
        break;
      case "xmlBase":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
        break;
      case "xmlLang":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
        break;
      case "xmlSpace":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
        break;
      case "is":
        Xs(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = M0.get(n) || n), Xs(t, n, s));
    }
  }
  function vo(t, e, n, s, r, o) {
    switch (n) {
      case "style":
        Nf(t, s, o);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(u(61));
          if (((n = s.__html), n != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof s == "string"
          ? Oa(t, s)
          : (typeof s == "number" || typeof s == "bigint") && Oa(t, "" + s);
        break;
      case "onScroll":
        s != null && pt("scroll", t);
        break;
      case "onScrollEnd":
        s != null && pt("scrollend", t);
        break;
      case "onClick":
        s != null && (t.onclick = Ll);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!gf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((r = n.endsWith("Capture")),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (o = t[oe] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, r),
              typeof s == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, s, r));
              break t;
            }
            n in t
              ? (t[n] = s)
              : s === !0
                ? t.setAttribute(n, "")
                : Xs(t, n, s);
          }
    }
  }
  function te(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (pt("error", t), pt("load", t));
        var s = !1,
          r = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var y = n[o];
            if (y != null)
              switch (o) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Dt(t, e, o, y, n, null);
              }
          }
        (r && Dt(t, e, "srcSet", n.srcSet, n, null),
          s && Dt(t, e, "src", n.src, n, null));
        return;
      case "input":
        pt("invalid", t);
        var b = (o = y = r = null),
          T = null,
          O = null;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var L = n[s];
            if (L != null)
              switch (s) {
                case "name":
                  r = L;
                  break;
                case "type":
                  y = L;
                  break;
                case "checked":
                  T = L;
                  break;
                case "defaultChecked":
                  O = L;
                  break;
                case "value":
                  o = L;
                  break;
                case "defaultValue":
                  b = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null) throw Error(u(137, e));
                  break;
                default:
                  Dt(t, e, s, L, n, null);
              }
          }
        (Ef(t, o, b, T, O, y, r, !1), Zs(t));
        return;
      case "select":
        (pt("invalid", t), (s = y = o = null));
        for (r in n)
          if (n.hasOwnProperty(r) && ((b = n[r]), b != null))
            switch (r) {
              case "value":
                o = b;
                break;
              case "defaultValue":
                y = b;
                break;
              case "multiple":
                s = b;
              default:
                Dt(t, e, r, b, n, null);
            }
        ((e = o),
          (n = y),
          (t.multiple = !!s),
          e != null ? Ra(t, !!s, e, !1) : n != null && Ra(t, !!s, n, !0));
        return;
      case "textarea":
        (pt("invalid", t), (o = r = s = null));
        for (y in n)
          if (n.hasOwnProperty(y) && ((b = n[y]), b != null))
            switch (y) {
              case "value":
                s = b;
                break;
              case "defaultValue":
                r = b;
                break;
              case "children":
                o = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(u(91));
                break;
              default:
                Dt(t, e, y, b, n, null);
            }
        (Mf(t, s, r, o), Zs(t));
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && ((s = n[T]), s != null))
            switch (T) {
              case "selected":
                t.selected =
                  s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                Dt(t, e, T, s, n, null);
            }
        return;
      case "dialog":
        (pt("beforetoggle", t),
          pt("toggle", t),
          pt("cancel", t),
          pt("close", t));
        break;
      case "iframe":
      case "object":
        pt("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < rs.length; s++) pt(rs[s], t);
        break;
      case "image":
        (pt("error", t), pt("load", t));
        break;
      case "details":
        pt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (pt("error", t), pt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in n)
          if (n.hasOwnProperty(O) && ((s = n[O]), s != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Dt(t, e, O, s, n, null);
            }
        return;
      default:
        if (wr(e)) {
          for (L in n)
            n.hasOwnProperty(L) &&
              ((s = n[L]), s !== void 0 && vo(t, e, L, s, n, void 0));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && ((s = n[b]), s != null && Dt(t, e, b, s, n, null));
  }
  function Iv(t, e, n, s) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null,
          o = null,
          y = null,
          b = null,
          T = null,
          O = null,
          L = null;
        for (z in n) {
          var H = n[z];
          if (n.hasOwnProperty(z) && H != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = H;
              default:
                s.hasOwnProperty(z) || Dt(t, e, z, null, s, H);
            }
        }
        for (var _ in s) {
          var z = s[_];
          if (((H = n[_]), s.hasOwnProperty(_) && (z != null || H != null)))
            switch (_) {
              case "type":
                o = z;
                break;
              case "name":
                r = z;
                break;
              case "checked":
                O = z;
                break;
              case "defaultChecked":
                L = z;
                break;
              case "value":
                y = z;
                break;
              case "defaultValue":
                b = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(u(137, e));
                break;
              default:
                z !== H && Dt(t, e, _, z, s, H);
            }
        }
        Cr(t, y, b, T, O, L, o, r);
        return;
      case "select":
        z = y = b = _ = null;
        for (o in n)
          if (((T = n[o]), n.hasOwnProperty(o) && T != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                z = T;
              default:
                s.hasOwnProperty(o) || Dt(t, e, o, null, s, T);
            }
        for (r in s)
          if (
            ((o = s[r]),
            (T = n[r]),
            s.hasOwnProperty(r) && (o != null || T != null))
          )
            switch (r) {
              case "value":
                _ = o;
                break;
              case "defaultValue":
                b = o;
                break;
              case "multiple":
                y = o;
              default:
                o !== T && Dt(t, e, r, o, s, T);
            }
        ((e = b),
          (n = y),
          (s = z),
          _ != null
            ? Ra(t, !!n, _, !1)
            : !!s != !!n &&
              (e != null ? Ra(t, !!n, e, !0) : Ra(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        z = _ = null;
        for (b in n)
          if (
            ((r = n[b]),
            n.hasOwnProperty(b) && r != null && !s.hasOwnProperty(b))
          )
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, b, null, s, r);
            }
        for (y in s)
          if (
            ((r = s[y]),
            (o = n[y]),
            s.hasOwnProperty(y) && (r != null || o != null))
          )
            switch (y) {
              case "value":
                _ = r;
                break;
              case "defaultValue":
                z = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(u(91));
                break;
              default:
                r !== o && Dt(t, e, y, r, s, o);
            }
        jf(t, _, z);
        return;
      case "option":
        for (var lt in n)
          if (
            ((_ = n[lt]),
            n.hasOwnProperty(lt) && _ != null && !s.hasOwnProperty(lt))
          )
            switch (lt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Dt(t, e, lt, null, s, _);
            }
        for (T in s)
          if (
            ((_ = s[T]),
            (z = n[T]),
            s.hasOwnProperty(T) && _ !== z && (_ != null || z != null))
          )
            switch (T) {
              case "selected":
                t.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Dt(t, e, T, _, s, z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var it in n)
          ((_ = n[it]),
            n.hasOwnProperty(it) &&
              _ != null &&
              !s.hasOwnProperty(it) &&
              Dt(t, e, it, null, s, _));
        for (O in s)
          if (
            ((_ = s[O]),
            (z = n[O]),
            s.hasOwnProperty(O) && _ !== z && (_ != null || z != null))
          )
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(u(137, e));
                break;
              default:
                Dt(t, e, O, _, s, z);
            }
        return;
      default:
        if (wr(e)) {
          for (var Nt in n)
            ((_ = n[Nt]),
              n.hasOwnProperty(Nt) &&
                _ !== void 0 &&
                !s.hasOwnProperty(Nt) &&
                vo(t, e, Nt, void 0, s, _));
          for (L in s)
            ((_ = s[L]),
              (z = n[L]),
              !s.hasOwnProperty(L) ||
                _ === z ||
                (_ === void 0 && z === void 0) ||
                vo(t, e, L, _, s, z));
          return;
        }
    }
    for (var M in n)
      ((_ = n[M]),
        n.hasOwnProperty(M) &&
          _ != null &&
          !s.hasOwnProperty(M) &&
          Dt(t, e, M, null, s, _));
    for (H in s)
      ((_ = s[H]),
        (z = n[H]),
        !s.hasOwnProperty(H) ||
          _ === z ||
          (_ == null && z == null) ||
          Dt(t, e, H, _, s, z));
  }
  var bo = null,
    xo = null;
  function Yl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Nm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function So(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var To = null;
  function Fv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === To
        ? !1
        : ((To = t), !0)
      : ((To = null), !1);
  }
  var Rm = typeof setTimeout == "function" ? setTimeout : void 0,
    Wv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Om = typeof Promise == "function" ? Promise : void 0,
    tb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Om < "u"
          ? function (t) {
              return Om.resolve(null).then(t).catch(eb);
            }
          : Rm;
  function eb(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Ln(t) {
    return t === "head";
  }
  function Cm(t, e) {
    var n = e,
      s = 0,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((t.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (0 < s && 8 > s) {
            n = s;
            var y = t.ownerDocument;
            if ((n & 1 && os(y.documentElement), n & 2 && os(y.body), n & 4))
              for (n = y.head, os(n), y = n.firstChild; y; ) {
                var b = y.nextSibling,
                  T = y.nodeName;
                (y[Ei] ||
                  T === "SCRIPT" ||
                  T === "STYLE" ||
                  (T === "LINK" && y.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(y),
                  (y = b));
              }
          }
          if (r === 0) {
            (t.removeChild(o), gs(e));
            return;
          }
          r--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? r++
            : (s = n.charCodeAt(0) - 48);
      else s = 0;
      n = o;
    } while (n);
    gs(e);
  }
  function Ao(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Ao(n), Dr(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function nb(t, e, n, s) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (s) {
        if (!t[Ei])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== r.rel ||
                t.getAttribute("href") !==
                  (r.href == null || r.href === "" ? null : r.href) ||
                t.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Ye(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function ab(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ye(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Eo(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function ib(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var s = function () {
        (e(), n.removeEventListener("DOMContentLoaded", s));
      };
      (n.addEventListener("DOMContentLoaded", s), (t._reactRetry = s));
    }
  }
  function Ye(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var jo = null;
  function _m(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function wm(t, e, n) {
    switch (((e = Yl(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function os(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Dr(t);
  }
  var ze = new Map(),
    zm = new Set();
  function Hl(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var pn = N.d;
  N.d = { f: sb, r: lb, D: rb, C: ub, L: ob, m: cb, X: db, S: fb, M: hb };
  function sb() {
    var t = pn.f(),
      e = _l();
    return t || e;
  }
  function lb(t) {
    var e = ja(t);
    e !== null && e.tag === 5 && e.type === "form" ? th(e) : pn.r(t);
  }
  var si = typeof document > "u" ? null : document;
  function Vm(t, e, n) {
    var s = si;
    if (s && typeof e == "string" && e) {
      var r = De(e);
      ((r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
        zm.has(r) ||
          (zm.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          s.querySelector(r) === null &&
            ((e = s.createElement("link")),
            te(e, "link", t),
            Qt(e),
            s.head.appendChild(e))));
    }
  }
  function rb(t) {
    (pn.D(t), Vm("dns-prefetch", t, null));
  }
  function ub(t, e) {
    (pn.C(t, e), Vm("preconnect", t, e));
  }
  function ob(t, e, n) {
    pn.L(t, e, n);
    var s = si;
    if (s && t && e) {
      var r = 'link[rel="preload"][as="' + De(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + De(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (r += '[imagesizes="' + De(n.imageSizes) + '"]'))
        : (r += '[href="' + De(t) + '"]');
      var o = r;
      switch (e) {
        case "style":
          o = li(t);
          break;
        case "script":
          o = ri(t);
      }
      ze.has(o) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        ze.set(o, t),
        s.querySelector(r) !== null ||
          (e === "style" && s.querySelector(cs(o))) ||
          (e === "script" && s.querySelector(fs(o))) ||
          ((e = s.createElement("link")),
          te(e, "link", t),
          Qt(e),
          s.head.appendChild(e)));
    }
  }
  function cb(t, e) {
    pn.m(t, e);
    var n = si;
    if (n && t) {
      var s = e && typeof e.as == "string" ? e.as : "script",
        r =
          'link[rel="modulepreload"][as="' + De(s) + '"][href="' + De(t) + '"]',
        o = r;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ri(t);
      }
      if (
        !ze.has(o) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        ze.set(o, t),
        n.querySelector(r) === null)
      ) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(fs(o))) return;
        }
        ((s = n.createElement("link")),
          te(s, "link", t),
          Qt(s),
          n.head.appendChild(s));
      }
    }
  }
  function fb(t, e, n) {
    pn.S(t, e, n);
    var s = si;
    if (s && t) {
      var r = Ma(s).hoistableStyles,
        o = li(t);
      e = e || "default";
      var y = r.get(o);
      if (!y) {
        var b = { loading: 0, preload: null };
        if ((y = s.querySelector(cs(o)))) b.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = ze.get(o)) && Mo(t, n));
          var T = (y = s.createElement("link"));
          (Qt(T),
            te(T, "link", t),
            (T._p = new Promise(function (O, L) {
              ((T.onload = O), (T.onerror = L));
            })),
            T.addEventListener("load", function () {
              b.loading |= 1;
            }),
            T.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            ql(y, e, s));
        }
        ((y = { type: "stylesheet", instance: y, count: 1, state: b }),
          r.set(o, y));
      }
    }
  }
  function db(t, e) {
    pn.X(t, e);
    var n = si;
    if (n && t) {
      var s = Ma(n).hoistableScripts,
        r = ri(t),
        o = s.get(r);
      o ||
        ((o = n.querySelector(fs(r))),
        o ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = ze.get(r)) && Do(t, e),
          (o = n.createElement("script")),
          Qt(o),
          te(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        s.set(r, o));
    }
  }
  function hb(t, e) {
    pn.M(t, e);
    var n = si;
    if (n && t) {
      var s = Ma(n).hoistableScripts,
        r = ri(t),
        o = s.get(r);
      o ||
        ((o = n.querySelector(fs(r))),
        o ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = ze.get(r)) && Do(t, e),
          (o = n.createElement("script")),
          Qt(o),
          te(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        s.set(r, o));
    }
  }
  function km(t, e, n, s) {
    var r = (r = ut.current) ? Hl(r) : null;
    if (!r) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = li(n.href)),
            (n = Ma(r).hoistableStyles),
            (s = n.get(e)),
            s ||
              ((s = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, s)),
            s)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = li(n.href);
          var o = Ma(r).hoistableStyles,
            y = o.get(t);
          if (
            (y ||
              ((r = r.ownerDocument || r),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, y),
              (o = r.querySelector(cs(t))) &&
                !o._p &&
                ((y.instance = o), (y.state.loading = 5)),
              ze.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                ze.set(t, n),
                o || mb(r, t, n, y.state))),
            e && s === null)
          )
            throw Error(u(528, ""));
          return y;
        }
        if (e && s !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ri(n)),
              (n = Ma(r).hoistableScripts),
              (s = n.get(e)),
              s ||
                ((s = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, s)),
              s)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function li(t) {
    return 'href="' + De(t) + '"';
  }
  function cs(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Um(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function mb(t, e, n, s) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (s.loading = 1)
      : ((e = t.createElement("link")),
        (s.preload = e),
        e.addEventListener("load", function () {
          return (s.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (s.loading |= 2);
        }),
        te(e, "link", n),
        Qt(e),
        t.head.appendChild(e));
  }
  function ri(t) {
    return '[src="' + De(t) + '"]';
  }
  function fs(t) {
    return "script[async]" + t;
  }
  function Bm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var s = t.querySelector('style[data-href~="' + De(n.href) + '"]');
          if (s) return ((e.instance = s), Qt(s), s);
          var r = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (t.ownerDocument || t).createElement("style")),
            Qt(s),
            te(s, "style", r),
            ql(s, n.precedence, t),
            (e.instance = s)
          );
        case "stylesheet":
          r = li(n.href);
          var o = t.querySelector(cs(r));
          if (o) return ((e.state.loading |= 4), (e.instance = o), Qt(o), o);
          ((s = Um(n)),
            (r = ze.get(r)) && Mo(s, r),
            (o = (t.ownerDocument || t).createElement("link")),
            Qt(o));
          var y = o;
          return (
            (y._p = new Promise(function (b, T) {
              ((y.onload = b), (y.onerror = T));
            })),
            te(o, "link", s),
            (e.state.loading |= 4),
            ql(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = ri(n.src)),
            (r = t.querySelector(fs(o)))
              ? ((e.instance = r), Qt(r), r)
              : ((s = n),
                (r = ze.get(o)) && ((s = g({}, n)), Do(s, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                Qt(r),
                te(r, "link", s),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((s = e.instance), (e.state.loading |= 4), ql(s, n.precedence, t));
    return e.instance;
  }
  function ql(t, e, n) {
    for (
      var s = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        r = s.length ? s[s.length - 1] : null,
        o = r,
        y = 0;
      y < s.length;
      y++
    ) {
      var b = s[y];
      if (b.dataset.precedence === e) o = b;
      else if (o !== r) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Mo(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Do(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Xl = null;
  function Lm(t, e, n) {
    if (Xl === null) {
      var s = new Map(),
        r = (Xl = new Map());
      r.set(n, s);
    } else ((r = Xl), (s = r.get(n)), s || ((s = new Map()), r.set(n, s)));
    if (s.has(t)) return s;
    for (
      s.set(t, null), n = n.getElementsByTagName(t), r = 0;
      r < n.length;
      r++
    ) {
      var o = n[r];
      if (
        !(
          o[Ei] ||
          o[ne] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = o.getAttribute(e) || "";
        y = t + y;
        var b = s.get(y);
        b ? b.push(o) : s.set(y, [o]);
      }
    }
    return s;
  }
  function Ym(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function pb(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Hm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ds = null;
  function yb() {}
  function gb(t, e, n) {
    if (ds === null) throw Error(u(475));
    var s = ds;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var r = li(n.href),
          o = t.querySelector(cs(r));
        if (o) {
          ((t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (s.count++, (s = Gl.bind(s)), t.then(s, s)),
            (e.state.loading |= 4),
            (e.instance = o),
            Qt(o));
          return;
        }
        ((o = t.ownerDocument || t),
          (n = Um(n)),
          (r = ze.get(r)) && Mo(n, r),
          (o = o.createElement("link")),
          Qt(o));
        var y = o;
        ((y._p = new Promise(function (b, T) {
          ((y.onload = b), (y.onerror = T));
        })),
          te(o, "link", n),
          (e.instance = o));
      }
      (s.stylesheets === null && (s.stylesheets = new Map()),
        s.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (s.count++,
          (e = Gl.bind(s)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  function vb() {
    if (ds === null) throw Error(u(475));
    var t = ds;
    return (
      t.stylesheets && t.count === 0 && No(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && No(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                ((t.unsuspend = null), s());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Gl() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) No(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Zl = null;
  function No(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Zl = new Map()),
        e.forEach(bb, t),
        (Zl = null),
        Gl.call(t)));
  }
  function bb(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Zl.get(t);
      if (n) var s = n.get(null);
      else {
        ((n = new Map()), Zl.set(t, n));
        for (
          var r = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < r.length;
          o++
        ) {
          var y = r[o];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (n.set(y.dataset.precedence, y), (s = y));
        }
        s && n.set(null, s);
      }
      ((r = e.instance),
        (y = r.getAttribute("data-precedence")),
        (o = n.get(y) || s),
        o === s && n.set(null, r),
        n.set(y, r),
        this.count++,
        (s = Gl.bind(this)),
        r.addEventListener("load", s),
        r.addEventListener("error", s),
        o
          ? o.parentNode.insertBefore(r, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var hs = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function xb(t, e, n, s, r, o, y, b) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ar(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ar(0)),
      (this.hiddenUpdates = Ar(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = r),
      (this.onCaughtError = o),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map()));
  }
  function qm(t, e, n, s, r, o, y, b, T, O, L, H) {
    return (
      (t = new xb(t, e, n, y, b, T, O, H)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = be(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = uu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: s, isDehydrated: n, cache: e }),
      du(o),
      t
    );
  }
  function Xm(t) {
    return t ? ((t = Ba), t) : Ba;
  }
  function Gm(t, e, n, s, r, o) {
    ((r = Xm(r)),
      s.context === null ? (s.context = r) : (s.pendingContext = r),
      (s = Mn(e)),
      (s.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (s.callback = o),
      (n = Dn(t, s, e)),
      n !== null && (Ee(n, t, e), Xi(n, t, e)));
  }
  function Zm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Ro(t, e) {
    (Zm(t, e), (t = t.alternate) && Zm(t, e));
  }
  function Km(t) {
    if (t.tag === 13) {
      var e = Ua(t, 67108864);
      (e !== null && Ee(e, t, 67108864), Ro(t, 67108864));
    }
  }
  var Kl = !0;
  function Sb(t, e, n, s) {
    var r = D.T;
    D.T = null;
    var o = N.p;
    try {
      ((N.p = 2), Oo(t, e, n, s));
    } finally {
      ((N.p = o), (D.T = r));
    }
  }
  function Tb(t, e, n, s) {
    var r = D.T;
    D.T = null;
    var o = N.p;
    try {
      ((N.p = 8), Oo(t, e, n, s));
    } finally {
      ((N.p = o), (D.T = r));
    }
  }
  function Oo(t, e, n, s) {
    if (Kl) {
      var r = Co(s);
      if (r === null) (go(t, e, s, $l, n), Qm(t, s));
      else if (Eb(r, t, e, n, s)) s.stopPropagation();
      else if ((Qm(t, s), e & 4 && -1 < Ab.indexOf(t))) {
        for (; r !== null; ) {
          var o = ja(r);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var y = In(o.pendingLanes);
                  if (y !== 0) {
                    var b = o;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                      var T = 1 << (31 - ge(y));
                      ((b.entanglements[1] |= T), (y &= ~T));
                    }
                    (Qe(o), (Et & 6) === 0 && ((Ol = Xe() + 500), ls(0)));
                  }
                }
                break;
              case 13:
                ((b = Ua(o, 2)), b !== null && Ee(b, o, 2), _l(), Ro(o, 2));
            }
          if (((o = Co(s)), o === null && go(t, e, s, $l, n), o === r)) break;
          r = o;
        }
        r !== null && s.stopPropagation();
      } else go(t, e, s, null, n);
    }
  }
  function Co(t) {
    return ((t = Vr(t)), _o(t));
  }
  var $l = null;
  function _o(t) {
    if ((($l = null), (t = Ea(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (($l = t), null);
  }
  function $m(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (u0()) {
          case rf:
            return 2;
          case uf:
            return 8;
          case Ls:
          case o0:
            return 32;
          case of:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wo = !1,
    Yn = null,
    Hn = null,
    qn = null,
    ms = new Map(),
    ps = new Map(),
    Xn = [],
    Ab =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Qm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Hn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        ms.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ps.delete(e.pointerId);
    }
  }
  function ys(t, e, n, s, r, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: s,
          nativeEvent: o,
          targetContainers: [r],
        }),
        e !== null && ((e = ja(e)), e !== null && Km(e)),
        t)
      : ((t.eventSystemFlags |= s),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function Eb(t, e, n, s, r) {
    switch (e) {
      case "focusin":
        return ((Yn = ys(Yn, t, e, n, s, r)), !0);
      case "dragenter":
        return ((Hn = ys(Hn, t, e, n, s, r)), !0);
      case "mouseover":
        return ((qn = ys(qn, t, e, n, s, r)), !0);
      case "pointerover":
        var o = r.pointerId;
        return (ms.set(o, ys(ms.get(o) || null, t, e, n, s, r)), !0);
      case "gotpointercapture":
        return (
          (o = r.pointerId),
          ps.set(o, ys(ps.get(o) || null, t, e, n, s, r)),
          !0
        );
    }
    return !1;
  }
  function Pm(t) {
    var e = Ea(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            ((t.blockedOn = e),
              g0(t.priority, function () {
                if (n.tag === 13) {
                  var s = Ae();
                  s = Er(s);
                  var r = Ua(n, s);
                  (r !== null && Ee(r, n, s), Ro(n, s));
                }
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ql(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Co(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var s = new n.constructor(n.type, n);
        ((zr = s), n.target.dispatchEvent(s), (zr = null));
      } else return ((e = ja(n)), e !== null && Km(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Jm(t, e, n) {
    Ql(t) && n.delete(e);
  }
  function jb() {
    ((wo = !1),
      Yn !== null && Ql(Yn) && (Yn = null),
      Hn !== null && Ql(Hn) && (Hn = null),
      qn !== null && Ql(qn) && (qn = null),
      ms.forEach(Jm),
      ps.forEach(Jm));
  }
  function Pl(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      wo ||
        ((wo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, jb)));
  }
  var Jl = null;
  function Im(t) {
    Jl !== t &&
      ((Jl = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Jl === t && (Jl = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            s = t[e + 1],
            r = t[e + 2];
          if (typeof s != "function") {
            if (_o(s || n) === null) continue;
            break;
          }
          var o = ja(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Cu(o, { pending: !0, data: r, method: n.method, action: s }, s, r));
        }
      }));
  }
  function gs(t) {
    function e(T) {
      return Pl(T, t);
    }
    (Yn !== null && Pl(Yn, t),
      Hn !== null && Pl(Hn, t),
      qn !== null && Pl(qn, t),
      ms.forEach(e),
      ps.forEach(e));
    for (var n = 0; n < Xn.length; n++) {
      var s = Xn[n];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < Xn.length && ((n = Xn[0]), n.blockedOn === null); )
      (Pm(n), n.blockedOn === null && Xn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (s = 0; s < n.length; s += 3) {
        var r = n[s],
          o = n[s + 1],
          y = r[oe] || null;
        if (typeof o == "function") y || Im(n);
        else if (y) {
          var b = null;
          if (o && o.hasAttribute("formAction")) {
            if (((r = o), (y = o[oe] || null))) b = y.formAction;
            else if (_o(r) !== null) continue;
          } else b = y.action;
          (typeof b == "function" ? (n[s + 1] = b) : (n.splice(s, 3), (s -= 3)),
            Im(n));
        }
      }
  }
  function zo(t) {
    this._internalRoot = t;
  }
  ((Il.prototype.render = zo.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        s = Ae();
      Gm(n, s, t, e, null, null);
    }),
    (Il.prototype.unmount = zo.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Gm(t.current, 2, null, t, null, null), _l(), (e[Aa] = null));
        }
      }));
  function Il(t) {
    this._internalRoot = t;
  }
  Il.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = mf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Xn.length && e !== 0 && e < Xn[n].priority; n++);
      (Xn.splice(n, 0, t), n === 0 && Pm(t));
    }
  };
  var Fm = i.version;
  if (Fm !== "19.1.1") throw Error(u(527, Fm, "19.1.1"));
  N.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return (
      (t = m(e)),
      (t = t !== null ? p(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Mb = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fl.isDisabled && Fl.supportsFiber)
      try {
        ((Si = Fl.inject(Mb)), (ye = Fl));
      } catch {}
  }
  return (
    (bs.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        s = "",
        r = mh,
        o = ph,
        y = yh,
        b = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (y = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (b = e.unstable_transitionCallbacks)),
        (e = qm(t, 1, !1, null, null, n, s, r, o, y, b, null)),
        (t[Aa] = e.current),
        yo(t),
        new zo(e)
      );
    }),
    (bs.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var s = !1,
        r = "",
        o = mh,
        y = ph,
        b = yh,
        T = null,
        O = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (y = n.onCaughtError),
          n.onRecoverableError !== void 0 && (b = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (T = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (O = n.formState)),
        (e = qm(t, 1, !0, e, n ?? null, s, r, o, y, b, T, O)),
        (e.context = Xm(null)),
        (n = e.current),
        (s = Ae()),
        (s = Er(s)),
        (r = Mn(s)),
        (r.callback = null),
        Dn(n, r, s),
        (n = s),
        (e.current.lanes = n),
        Ai(e, n),
        Qe(e),
        (t[Aa] = e.current),
        yo(t),
        new Il(e)
      );
    }),
    (bs.version = "19.1.1"),
    bs
  );
}
var up;
function kb() {
  if (up) return Uo.exports;
  up = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Uo.exports = Vb()), Uo.exports);
}
var Ub = kb();
function Bb({ dark: a, setDark: i }) {
  return j.jsxs("div", {
    className: "flex items-center justify-between mb-6",
    children: [
      j.jsxs("div", {
        children: [
          j.jsx("h2", {
            className: "text-3xl font-bold mb-1",
            children: "Scala 3 Match Type & Disjointness Checker",
          }),
          j.jsx("p", {
            className: "text-sm text-gray-600 dark:text-gray-300",
            children: "Simulate match types and check provable disjointness.",
          }),
        ],
      }),
      j.jsx("div", {
        className: "flex items-center gap-3",
        children: j.jsx("button", {
          onClick: () => i(!a),
          children: a ? "☀️" : "🌙",
        }),
      }),
    ],
  });
}
function Lb({ activeTab: a, setActiveTab: i }) {
  const l = [
    { id: "match-types", label: "Match Types" },
    { id: "disjointness", label: "Disjointness Checker" },
    { id: "custom-types", label: "Custom Types" },
  ];
  return j.jsx("div", {
    className: "mb-6",
    children: j.jsx("div", {
      className: "border-b border-gray-200 dark:border-gray-600",
      children: j.jsx("nav", {
        className: "-mb-px flex space-x-8",
        children: l.map((u) =>
          j.jsx(
            "button",
            {
              onClick: () => i(u.id),
              className: `py-2 px-1 border-b-2 font-medium text-sm ${a === u.id ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"}`,
              children: u.label,
            },
            u.id,
          ),
        ),
      }),
    }),
  });
}
const Ec = Z.createContext({});
function jc(a) {
  const i = Z.useRef(null);
  return (i.current === null && (i.current = a()), i.current);
}
const Mc = typeof window < "u",
  My = Mc ? Z.useLayoutEffect : Z.useEffect,
  pr = Z.createContext(null);
function Dc(a, i) {
  a.indexOf(i) === -1 && a.push(i);
}
function Nc(a, i) {
  const l = a.indexOf(i);
  l > -1 && a.splice(l, 1);
}
const vn = (a, i, l) => (l > i ? i : l < a ? a : l);
let Rc = () => {};
const bn = {},
  Dy = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function Ny(a) {
  return typeof a == "object" && a !== null;
}
const Ry = (a) => /^0[^.\s]+$/u.test(a);
function Oc(a) {
  let i;
  return () => (i === void 0 && (i = a()), i);
}
const Ue = (a) => a,
  Yb = (a, i) => (l) => i(a(l)),
  zs = (...a) => a.reduce(Yb),
  Ds = (a, i, l) => {
    const u = i - a;
    return u === 0 ? 1 : (l - a) / u;
  };
class Cc {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (Dc(this.subscriptions, i), () => Nc(this.subscriptions, i));
  }
  notify(i, l, u) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, l, u);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(i, l, u);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ie = (a) => a * 1e3,
  Fe = (a) => a / 1e3;
function Oy(a, i) {
  return i ? a * (1e3 / i) : 0;
}
const Cy = (a, i, l) =>
    (((1 - 3 * l + 3 * i) * a + (3 * l - 6 * i)) * a + 3 * i) * a,
  Hb = 1e-7,
  qb = 12;
function Xb(a, i, l, u, c) {
  let d,
    f,
    h = 0;
  do ((f = i + (l - i) / 2), (d = Cy(f, u, c) - a), d > 0 ? (l = f) : (i = f));
  while (Math.abs(d) > Hb && ++h < qb);
  return f;
}
function Vs(a, i, l, u) {
  if (a === i && l === u) return Ue;
  const c = (d) => Xb(d, 0, 1, a, l);
  return (d) => (d === 0 || d === 1 ? d : Cy(c(d), i, u));
}
const _y = (a) => (i) => (i <= 0.5 ? a(2 * i) / 2 : (2 - a(2 * (1 - i))) / 2),
  wy = (a) => (i) => 1 - a(1 - i),
  zy = Vs(0.33, 1.53, 0.69, 0.99),
  _c = wy(zy),
  Vy = _y(_c),
  ky = (a) =>
    (a *= 2) < 1 ? 0.5 * _c(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  wc = (a) => 1 - Math.sin(Math.acos(a)),
  Uy = wy(wc),
  By = _y(wc),
  Gb = Vs(0.42, 0, 1, 1),
  Zb = Vs(0, 0, 0.58, 1),
  Ly = Vs(0.42, 0, 0.58, 1),
  Kb = (a) => Array.isArray(a) && typeof a[0] != "number",
  Yy = (a) => Array.isArray(a) && typeof a[0] == "number",
  $b = {
    linear: Ue,
    easeIn: Gb,
    easeInOut: Ly,
    easeOut: Zb,
    circIn: wc,
    circInOut: By,
    circOut: Uy,
    backIn: _c,
    backInOut: Vy,
    backOut: zy,
    anticipate: ky,
  },
  Qb = (a) => typeof a == "string",
  op = (a) => {
    if (Yy(a)) {
      Rc(a.length === 4);
      const [i, l, u, c] = a;
      return Vs(i, l, u, c);
    } else if (Qb(a)) return $b[a];
    return a;
  },
  Wl = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Pb(a, i) {
  let l = new Set(),
    u = new Set(),
    c = !1,
    d = !1;
  const f = new WeakSet();
  let h = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(g) {
    (f.has(g) && (p.schedule(g), a()), g(h));
  }
  const p = {
    schedule: (g, v = !1, x = !1) => {
      const w = x && c ? l : u;
      return (v && f.add(g), w.has(g) || w.add(g), g);
    },
    cancel: (g) => {
      (u.delete(g), f.delete(g));
    },
    process: (g) => {
      if (((h = g), c)) {
        d = !0;
        return;
      }
      ((c = !0),
        ([l, u] = [u, l]),
        l.forEach(m),
        l.clear(),
        (c = !1),
        d && ((d = !1), p.process(g)));
    },
  };
  return p;
}
const Jb = 40;
function Hy(a, i) {
  let l = !1,
    u = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (l = !0),
    f = Wl.reduce((B, P) => ((B[P] = Pb(d)), B), {}),
    {
      setup: h,
      read: m,
      resolveKeyframes: p,
      preUpdate: g,
      update: v,
      preRender: x,
      render: A,
      postRender: w,
    } = f,
    q = () => {
      const B = bn.useManualTiming ? c.timestamp : performance.now();
      ((l = !1),
        bn.useManualTiming ||
          (c.delta = u ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, Jb), 1)),
        (c.timestamp = B),
        (c.isProcessing = !0),
        h.process(c),
        m.process(c),
        p.process(c),
        g.process(c),
        v.process(c),
        x.process(c),
        A.process(c),
        w.process(c),
        (c.isProcessing = !1),
        l && i && ((u = !1), a(q)));
    },
    V = () => {
      ((l = !0), (u = !0), c.isProcessing || a(q));
    };
  return {
    schedule: Wl.reduce((B, P) => {
      const G = f[P];
      return (
        (B[P] = (J, F = !1, I = !1) => (l || V(), G.schedule(J, F, I))),
        B
      );
    }, {}),
    cancel: (B) => {
      for (let P = 0; P < Wl.length; P++) f[Wl[P]].cancel(B);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: wt,
  cancel: Qn,
  state: ee,
  steps: Ho,
} = Hy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0);
let ir;
function Ib() {
  ir = void 0;
}
const me = {
    now: () => (
      ir === void 0 &&
        me.set(
          ee.isProcessing || bn.useManualTiming
            ? ee.timestamp
            : performance.now(),
        ),
      ir
    ),
    set: (a) => {
      ((ir = a), queueMicrotask(Ib));
    },
  },
  qy = (a) => (i) => typeof i == "string" && i.startsWith(a),
  zc = qy("--"),
  Fb = qy("var(--"),
  Vc = (a) => (Fb(a) ? Wb.test(a.split("/*")[0].trim()) : !1),
  Wb =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  vi = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  Ns = { ...vi, transform: (a) => vn(0, 1, a) },
  tr = { ...vi, default: 1 },
  Ts = (a) => Math.round(a * 1e5) / 1e5,
  kc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function tx(a) {
  return a == null;
}
const ex =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Uc = (a, i) => (l) =>
    !!(
      (typeof l == "string" && ex.test(l) && l.startsWith(a)) ||
      (i && !tx(l) && Object.prototype.hasOwnProperty.call(l, i))
    ),
  Xy = (a, i, l) => (u) => {
    if (typeof u != "string") return u;
    const [c, d, f, h] = u.match(kc);
    return {
      [a]: parseFloat(c),
      [i]: parseFloat(d),
      [l]: parseFloat(f),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  nx = (a) => vn(0, 255, a),
  qo = { ...vi, transform: (a) => Math.round(nx(a)) },
  va = {
    test: Uc("rgb", "red"),
    parse: Xy("red", "green", "blue"),
    transform: ({ red: a, green: i, blue: l, alpha: u = 1 }) =>
      "rgba(" +
      qo.transform(a) +
      ", " +
      qo.transform(i) +
      ", " +
      qo.transform(l) +
      ", " +
      Ts(Ns.transform(u)) +
      ")",
  };
function ax(a) {
  let i = "",
    l = "",
    u = "",
    c = "";
  return (
    a.length > 5
      ? ((i = a.substring(1, 3)),
        (l = a.substring(3, 5)),
        (u = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((i = a.substring(1, 2)),
        (l = a.substring(2, 3)),
        (u = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (i += i),
        (l += l),
        (u += u),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(l, 16),
      blue: parseInt(u, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const nc = { test: Uc("#"), parse: ax, transform: va.transform },
  ks = (a) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(a) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${a}`,
  }),
  Zn = ks("deg"),
  We = ks("%"),
  rt = ks("px"),
  ix = ks("vh"),
  sx = ks("vw"),
  cp = {
    ...We,
    parse: (a) => We.parse(a) / 100,
    transform: (a) => We.transform(a * 100),
  },
  ui = {
    test: Uc("hsl", "hue"),
    parse: Xy("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: i, lightness: l, alpha: u = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      We.transform(Ts(i)) +
      ", " +
      We.transform(Ts(l)) +
      ", " +
      Ts(Ns.transform(u)) +
      ")",
  },
  Zt = {
    test: (a) => va.test(a) || nc.test(a) || ui.test(a),
    parse: (a) =>
      va.test(a) ? va.parse(a) : ui.test(a) ? ui.parse(a) : nc.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
          ? va.transform(a)
          : ui.transform(a),
    getAnimatableNone: (a) => {
      const i = Zt.parse(a);
      return ((i.alpha = 0), Zt.transform(i));
    },
  },
  lx =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function rx(a) {
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (a.match(kc)?.length || 0) + (a.match(lx)?.length || 0) > 0
  );
}
const Gy = "number",
  Zy = "color",
  ux = "var",
  ox = "var(",
  fp = "${}",
  cx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Rs(a) {
  const i = a.toString(),
    l = [],
    u = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const h = i
    .replace(
      cx,
      (m) => (
        Zt.test(m)
          ? (u.color.push(d), c.push(Zy), l.push(Zt.parse(m)))
          : m.startsWith(ox)
            ? (u.var.push(d), c.push(ux), l.push(m))
            : (u.number.push(d), c.push(Gy), l.push(parseFloat(m))),
        ++d,
        fp
      ),
    )
    .split(fp);
  return { values: l, split: h, indexes: u, types: c };
}
function Ky(a) {
  return Rs(a).values;
}
function $y(a) {
  const { split: i, types: l } = Rs(a),
    u = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < u; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const h = l[f];
        h === Gy
          ? (d += Ts(c[f]))
          : h === Zy
            ? (d += Zt.transform(c[f]))
            : (d += c[f]);
      }
    return d;
  };
}
const fx = (a) =>
  typeof a == "number" ? 0 : Zt.test(a) ? Zt.getAnimatableNone(a) : a;
function dx(a) {
  const i = Ky(a);
  return $y(a)(i.map(fx));
}
const Pn = {
  test: rx,
  parse: Ky,
  createTransformer: $y,
  getAnimatableNone: dx,
};
function Xo(a, i, l) {
  return (
    l < 0 && (l += 1),
    l > 1 && (l -= 1),
    l < 1 / 6
      ? a + (i - a) * 6 * l
      : l < 1 / 2
        ? i
        : l < 2 / 3
          ? a + (i - a) * (2 / 3 - l) * 6
          : a
  );
}
function hx({ hue: a, saturation: i, lightness: l, alpha: u }) {
  ((a /= 360), (i /= 100), (l /= 100));
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = l;
  else {
    const h = l < 0.5 ? l * (1 + i) : l + i - l * i,
      m = 2 * l - h;
    ((c = Xo(m, h, a + 1 / 3)), (d = Xo(m, h, a)), (f = Xo(m, h, a - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: u,
  };
}
function ur(a, i) {
  return (l) => (l > 0 ? i : a);
}
const kt = (a, i, l) => a + (i - a) * l,
  Go = (a, i, l) => {
    const u = a * a,
      c = l * (i * i - u) + u;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  mx = [nc, va, ui],
  px = (a) => mx.find((i) => i.test(a));
function dp(a) {
  const i = px(a);
  if (!i) return !1;
  let l = i.parse(a);
  return (i === ui && (l = hx(l)), l);
}
const hp = (a, i) => {
    const l = dp(a),
      u = dp(i);
    if (!l || !u) return ur(a, i);
    const c = { ...l };
    return (d) => (
      (c.red = Go(l.red, u.red, d)),
      (c.green = Go(l.green, u.green, d)),
      (c.blue = Go(l.blue, u.blue, d)),
      (c.alpha = kt(l.alpha, u.alpha, d)),
      va.transform(c)
    );
  },
  ac = new Set(["none", "hidden"]);
function yx(a, i) {
  return ac.has(a) ? (l) => (l <= 0 ? a : i) : (l) => (l >= 1 ? i : a);
}
function gx(a, i) {
  return (l) => kt(a, i, l);
}
function Bc(a) {
  return typeof a == "number"
    ? gx
    : typeof a == "string"
      ? Vc(a)
        ? ur
        : Zt.test(a)
          ? hp
          : xx
      : Array.isArray(a)
        ? Qy
        : typeof a == "object"
          ? Zt.test(a)
            ? hp
            : vx
          : ur;
}
function Qy(a, i) {
  const l = [...a],
    u = l.length,
    c = a.map((d, f) => Bc(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < u; f++) l[f] = c[f](d);
    return l;
  };
}
function vx(a, i) {
  const l = { ...a, ...i },
    u = {};
  for (const c in l)
    a[c] !== void 0 && i[c] !== void 0 && (u[c] = Bc(a[c])(a[c], i[c]));
  return (c) => {
    for (const d in u) l[d] = u[d](c);
    return l;
  };
}
function bx(a, i) {
  const l = [],
    u = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const d = i.types[c],
      f = a.indexes[d][u[d]],
      h = a.values[f] ?? 0;
    ((l[c] = h), u[d]++);
  }
  return l;
}
const xx = (a, i) => {
  const l = Pn.createTransformer(i),
    u = Rs(a),
    c = Rs(i);
  return u.indexes.var.length === c.indexes.var.length &&
    u.indexes.color.length === c.indexes.color.length &&
    u.indexes.number.length >= c.indexes.number.length
    ? (ac.has(a) && !c.values.length) || (ac.has(i) && !u.values.length)
      ? yx(a, i)
      : zs(Qy(bx(u, c), c.values), l)
    : ur(a, i);
};
function Py(a, i, l) {
  return typeof a == "number" && typeof i == "number" && typeof l == "number"
    ? kt(a, i, l)
    : Bc(a)(a, i);
}
const Sx = (a) => {
    const i = ({ timestamp: l }) => a(l);
    return {
      start: (l = !0) => wt.update(i, l),
      stop: () => Qn(i),
      now: () => (ee.isProcessing ? ee.timestamp : me.now()),
    };
  },
  Jy = (a, i, l = 10) => {
    let u = "";
    const c = Math.max(Math.round(i / l), 2);
    for (let d = 0; d < c; d++)
      u += Math.round(a(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${u.substring(0, u.length - 2)})`;
  },
  or = 2e4;
function Lc(a) {
  let i = 0;
  const l = 50;
  let u = a.next(i);
  for (; !u.done && i < or; ) ((i += l), (u = a.next(i)));
  return i >= or ? 1 / 0 : i;
}
function Tx(a, i = 100, l) {
  const u = l({ ...a, keyframes: [0, i] }),
    c = Math.min(Lc(u), or);
  return {
    type: "keyframes",
    ease: (d) => u.next(c * d).value / i,
    duration: Fe(c),
  };
}
const Ax = 5;
function Iy(a, i, l) {
  const u = Math.max(i - Ax, 0);
  return Oy(l - a(u), i - u);
}
const Lt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Zo = 0.001;
function Ex({
  duration: a = Lt.duration,
  bounce: i = Lt.bounce,
  velocity: l = Lt.velocity,
  mass: u = Lt.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = vn(Lt.minDamping, Lt.maxDamping, f)),
    (a = vn(Lt.minDuration, Lt.maxDuration, Fe(a))),
    f < 1
      ? ((c = (p) => {
          const g = p * f,
            v = g * a,
            x = g - l,
            A = ic(p, f),
            w = Math.exp(-v);
          return Zo - (x / A) * w;
        }),
        (d = (p) => {
          const v = p * f * a,
            x = v * l + l,
            A = Math.pow(f, 2) * Math.pow(p, 2) * a,
            w = Math.exp(-v),
            q = ic(Math.pow(p, 2), f);
          return ((-c(p) + Zo > 0 ? -1 : 1) * ((x - A) * w)) / q;
        }))
      : ((c = (p) => {
          const g = Math.exp(-p * a),
            v = (p - l) * a + 1;
          return -Zo + g * v;
        }),
        (d = (p) => {
          const g = Math.exp(-p * a),
            v = (l - p) * (a * a);
          return g * v;
        })));
  const h = 5 / a,
    m = Mx(c, d, h);
  if (((a = Ie(a)), isNaN(m)))
    return { stiffness: Lt.stiffness, damping: Lt.damping, duration: a };
  {
    const p = Math.pow(m, 2) * u;
    return { stiffness: p, damping: f * 2 * Math.sqrt(u * p), duration: a };
  }
}
const jx = 12;
function Mx(a, i, l) {
  let u = l;
  for (let c = 1; c < jx; c++) u = u - a(u) / i(u);
  return u;
}
function ic(a, i) {
  return a * Math.sqrt(1 - i * i);
}
const Dx = ["duration", "bounce"],
  Nx = ["stiffness", "damping", "mass"];
function mp(a, i) {
  return i.some((l) => a[l] !== void 0);
}
function Rx(a) {
  let i = {
    velocity: Lt.velocity,
    stiffness: Lt.stiffness,
    damping: Lt.damping,
    mass: Lt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!mp(a, Nx) && mp(a, Dx))
    if (a.visualDuration) {
      const l = a.visualDuration,
        u = (2 * Math.PI) / (l * 1.2),
        c = u * u,
        d = 2 * vn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Lt.mass, stiffness: c, damping: d };
    } else {
      const l = Ex(a);
      ((i = { ...i, ...l, mass: Lt.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function cr(a = Lt.visualDuration, i = Lt.bounce) {
  const l =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: i }
      : a;
  let { restSpeed: u, restDelta: c } = l;
  const d = l.keyframes[0],
    f = l.keyframes[l.keyframes.length - 1],
    h = { done: !1, value: d },
    {
      stiffness: m,
      damping: p,
      mass: g,
      duration: v,
      velocity: x,
      isResolvedFromDuration: A,
    } = Rx({ ...l, velocity: -Fe(l.velocity || 0) }),
    w = x || 0,
    q = p / (2 * Math.sqrt(m * g)),
    V = f - d,
    k = Fe(Math.sqrt(m / g)),
    C = Math.abs(V) < 5;
  (u || (u = C ? Lt.restSpeed.granular : Lt.restSpeed.default),
    c || (c = C ? Lt.restDelta.granular : Lt.restDelta.default));
  let B;
  if (q < 1) {
    const G = ic(k, q);
    B = (J) => {
      const F = Math.exp(-q * k * J);
      return (
        f - F * (((w + q * k * V) / G) * Math.sin(G * J) + V * Math.cos(G * J))
      );
    };
  } else if (q === 1) B = (G) => f - Math.exp(-k * G) * (V + (w + k * V) * G);
  else {
    const G = k * Math.sqrt(q * q - 1);
    B = (J) => {
      const F = Math.exp(-q * k * J),
        I = Math.min(G * J, 300);
      return (
        f - (F * ((w + q * k * V) * Math.sinh(I) + G * V * Math.cosh(I))) / G
      );
    };
  }
  const P = {
    calculatedDuration: (A && v) || null,
    next: (G) => {
      const J = B(G);
      if (A) h.done = G >= v;
      else {
        let F = G === 0 ? w : 0;
        q < 1 && (F = G === 0 ? Ie(w) : Iy(B, G, J));
        const I = Math.abs(F) <= u,
          ot = Math.abs(f - J) <= c;
        h.done = I && ot;
      }
      return ((h.value = h.done ? f : J), h);
    },
    toString: () => {
      const G = Math.min(Lc(P), or),
        J = Jy((F) => P.next(G * F).value, G, 30);
      return G + "ms " + J;
    },
    toTransition: () => {},
  };
  return P;
}
cr.applyToOptions = (a) => {
  const i = Tx(a, 100, cr);
  return (
    (a.ease = i.ease),
    (a.duration = Ie(i.duration)),
    (a.type = "keyframes"),
    a
  );
};
function sc({
  keyframes: a,
  velocity: i = 0,
  power: l = 0.8,
  timeConstant: u = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: h,
  max: m,
  restDelta: p = 0.5,
  restSpeed: g,
}) {
  const v = a[0],
    x = { done: !1, value: v },
    A = (I) => (h !== void 0 && I < h) || (m !== void 0 && I > m),
    w = (I) =>
      h === void 0
        ? m
        : m === void 0 || Math.abs(h - I) < Math.abs(m - I)
          ? h
          : m;
  let q = l * i;
  const V = v + q,
    k = f === void 0 ? V : f(V);
  k !== V && (q = k - v);
  const C = (I) => -q * Math.exp(-I / u),
    B = (I) => k + C(I),
    P = (I) => {
      const ot = C(I),
        gt = B(I);
      ((x.done = Math.abs(ot) <= p), (x.value = x.done ? k : gt));
    };
  let G, J;
  const F = (I) => {
    A(x.value) &&
      ((G = I),
      (J = cr({
        keyframes: [x.value, w(x.value)],
        velocity: Iy(B, I, x.value),
        damping: c,
        stiffness: d,
        restDelta: p,
        restSpeed: g,
      })));
  };
  return (
    F(0),
    {
      calculatedDuration: null,
      next: (I) => {
        let ot = !1;
        return (
          !J && G === void 0 && ((ot = !0), P(I), F(I)),
          G !== void 0 && I >= G ? J.next(I - G) : (!ot && P(I), x)
        );
      },
    }
  );
}
function Ox(a, i, l) {
  const u = [],
    c = l || bn.mix || Py,
    d = a.length - 1;
  for (let f = 0; f < d; f++) {
    let h = c(a[f], a[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || Ue : i;
      h = zs(m, h);
    }
    u.push(h);
  }
  return u;
}
function Cx(a, i, { clamp: l = !0, ease: u, mixer: c } = {}) {
  const d = a.length;
  if ((Rc(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = a[0] === a[1];
  a[0] > a[d - 1] && ((a = [...a].reverse()), (i = [...i].reverse()));
  const h = Ox(i, u, c),
    m = h.length,
    p = (g) => {
      if (f && g < a[0]) return i[0];
      let v = 0;
      if (m > 1) for (; v < a.length - 2 && !(g < a[v + 1]); v++);
      const x = Ds(a[v], a[v + 1], g);
      return h[v](x);
    };
  return l ? (g) => p(vn(a[0], a[d - 1], g)) : p;
}
function _x(a, i) {
  const l = a[a.length - 1];
  for (let u = 1; u <= i; u++) {
    const c = Ds(0, i, u);
    a.push(kt(l, 1, c));
  }
}
function wx(a) {
  const i = [0];
  return (_x(i, a.length - 1), i);
}
function zx(a, i) {
  return a.map((l) => l * i);
}
function Vx(a, i) {
  return a.map(() => i || Ly).splice(0, a.length - 1);
}
function As({
  duration: a = 300,
  keyframes: i,
  times: l,
  ease: u = "easeInOut",
}) {
  const c = Kb(u) ? u.map(op) : op(u),
    d = { done: !1, value: i[0] },
    f = zx(l && l.length === i.length ? l : wx(i), a),
    h = Cx(f, i, { ease: Array.isArray(c) ? c : Vx(i, c) });
  return {
    calculatedDuration: a,
    next: (m) => ((d.value = h(m)), (d.done = m >= a), d),
  };
}
const kx = (a) => a !== null;
function Yc(a, { repeat: i, repeatType: l = "loop" }, u, c = 1) {
  const d = a.filter(kx),
    h = c < 0 || (i && l !== "loop" && i % 2 === 1) ? 0 : d.length - 1;
  return !h || u === void 0 ? d[h] : u;
}
const Ux = { decay: sc, inertia: sc, tween: As, keyframes: As, spring: cr };
function Fy(a) {
  typeof a.type == "string" && (a.type = Ux[a.type]);
}
class Hc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, l) {
    return this.finished.then(i, l);
  }
}
const Bx = (a) => a / 100;
class qc extends Hc {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: l } = this.options;
        (l && l.updatedAt !== me.now() && this.tick(me.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    Fy(i);
    const {
      type: l = As,
      repeat: u = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: f = 0,
    } = i;
    let { keyframes: h } = i;
    const m = l || As;
    m !== As &&
      typeof h[0] != "number" &&
      ((this.mixKeyframes = zs(Bx, Py(h[0], h[1]))), (h = [0, 100]));
    const p = m({ ...i, keyframes: h });
    (d === "mirror" &&
      (this.mirroredGenerator = m({
        ...i,
        keyframes: [...h].reverse(),
        velocity: -f,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = Lc(p)));
    const { calculatedDuration: g } = p;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + c),
      (this.totalDuration = this.resolvedDuration * (u + 1) - c),
      (this.generator = p));
  }
  updateTime(i) {
    const l = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = l);
  }
  tick(i, l = !1) {
    const {
      generator: u,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: h,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return u.next(0);
    const {
      delay: p = 0,
      keyframes: g,
      repeat: v,
      repeatType: x,
      repeatDelay: A,
      type: w,
      onUpdate: q,
      finalKeyframe: V,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - c / this.speed, this.startTime)),
      l ? (this.currentTime = i) : this.updateTime(i));
    const k = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      C = this.playbackSpeed >= 0 ? k < 0 : k > c;
    ((this.currentTime = Math.max(k, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let B = this.currentTime,
      P = u;
    if (v) {
      const I = Math.min(this.currentTime, c) / h;
      let ot = Math.floor(I),
        gt = I % 1;
      (!gt && I >= 1 && (gt = 1),
        gt === 1 && ot--,
        (ot = Math.min(ot, v + 1)),
        !!(ot % 2) &&
          (x === "reverse"
            ? ((gt = 1 - gt), A && (gt -= A / h))
            : x === "mirror" && (P = f)),
        (B = vn(0, 1, gt) * h));
    }
    const G = C ? { done: !1, value: g[0] } : P.next(B);
    d && (G.value = d(G.value));
    let { done: J } = G;
    !C &&
      m !== null &&
      (J =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const F =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && J));
    return (
      F && w !== sc && (G.value = Yc(g, this.options, V, this.speed)),
      q && q(G.value),
      F && this.finish(),
      G
    );
  }
  then(i, l) {
    return this.finished.then(i, l);
  }
  get duration() {
    return Fe(this.calculatedDuration);
  }
  get time() {
    return Fe(this.currentTime);
  }
  set time(i) {
    ((i = Ie(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver?.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(me.now());
    const l = this.playbackSpeed !== i;
    ((this.playbackSpeed = i), l && (this.time = Fe(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = Sx, startTime: l } = this.options;
    (this.driver || (this.driver = i((c) => this.tick(c))),
      this.options.onPlay?.());
    const u = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = u))
      : this.holdTime !== null
        ? (this.startTime = u - this.holdTime)
        : this.startTime || (this.startTime = l ?? u),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(me.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function Lx(a) {
  for (let i = 1; i < a.length; i++) a[i] ?? (a[i] = a[i - 1]);
}
const ba = (a) => (a * 180) / Math.PI,
  lc = (a) => {
    const i = ba(Math.atan2(a[1], a[0]));
    return rc(i);
  },
  Yx = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: lc,
    rotateZ: lc,
    skewX: (a) => ba(Math.atan(a[1])),
    skewY: (a) => ba(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  rc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  pp = lc,
  yp = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  gp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  Hx = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: yp,
    scaleY: gp,
    scale: (a) => (yp(a) + gp(a)) / 2,
    rotateX: (a) => rc(ba(Math.atan2(a[6], a[5]))),
    rotateY: (a) => rc(ba(Math.atan2(-a[2], a[0]))),
    rotateZ: pp,
    rotate: pp,
    skewX: (a) => ba(Math.atan(a[4])),
    skewY: (a) => ba(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function uc(a) {
  return a.includes("scale") ? 1 : 0;
}
function oc(a, i) {
  if (!a || a === "none") return uc(i);
  const l = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let u, c;
  if (l) ((u = Hx), (c = l));
  else {
    const h = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((u = Yx), (c = h));
  }
  if (!c) return uc(i);
  const d = u[i],
    f = c[1].split(",").map(Xx);
  return typeof d == "function" ? d(f) : f[d];
}
const qx = (a, i) => {
  const { transform: l = "none" } = getComputedStyle(a);
  return oc(l, i);
};
function Xx(a) {
  return parseFloat(a.trim());
}
const bi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  xi = new Set(bi),
  vp = (a) => a === vi || a === rt,
  Gx = new Set(["x", "y", "z"]),
  Zx = bi.filter((a) => !Gx.has(a));
function Kx(a) {
  const i = [];
  return (
    Zx.forEach((l) => {
      const u = a.getValue(l);
      u !== void 0 &&
        (i.push([l, u.get()]), u.set(l.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const xa = {
  width: ({ x: a }, { paddingLeft: i = "0", paddingRight: l = "0" }) =>
    a.max - a.min - parseFloat(i) - parseFloat(l),
  height: ({ y: a }, { paddingTop: i = "0", paddingBottom: l = "0" }) =>
    a.max - a.min - parseFloat(i) - parseFloat(l),
  top: (a, { top: i }) => parseFloat(i),
  left: (a, { left: i }) => parseFloat(i),
  bottom: ({ y: a }, { top: i }) => parseFloat(i) + (a.max - a.min),
  right: ({ x: a }, { left: i }) => parseFloat(i) + (a.max - a.min),
  x: (a, { transform: i }) => oc(i, "x"),
  y: (a, { transform: i }) => oc(i, "y"),
};
xa.translateX = xa.x;
xa.translateY = xa.y;
const Sa = new Set();
let cc = !1,
  fc = !1,
  dc = !1;
function Wy() {
  if (fc) {
    const a = Array.from(Sa).filter((u) => u.needsMeasurement),
      i = new Set(a.map((u) => u.element)),
      l = new Map();
    (i.forEach((u) => {
      const c = Kx(u);
      c.length && (l.set(u, c), u.render());
    }),
      a.forEach((u) => u.measureInitialState()),
      i.forEach((u) => {
        u.render();
        const c = l.get(u);
        c &&
          c.forEach(([d, f]) => {
            u.getValue(d)?.set(f);
          });
      }),
      a.forEach((u) => u.measureEndState()),
      a.forEach((u) => {
        u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
      }));
  }
  ((fc = !1), (cc = !1), Sa.forEach((a) => a.complete(dc)), Sa.clear());
}
function tg() {
  Sa.forEach((a) => {
    (a.readKeyframes(), a.needsMeasurement && (fc = !0));
  });
}
function $x() {
  ((dc = !0), tg(), Wy(), (dc = !1));
}
class Xc {
  constructor(i, l, u, c, d, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = l),
      (this.name = u),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Sa.add(this),
          cc || ((cc = !0), wt.read(tg), wt.resolveKeyframes(Wy)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: l,
      element: u,
      motionValue: c,
    } = this;
    if (i[0] === null) {
      const d = c?.get(),
        f = i[i.length - 1];
      if (d !== void 0) i[0] = d;
      else if (u && l) {
        const h = u.readValue(l, f);
        h != null && (i[0] = h);
      }
      (i[0] === void 0 && (i[0] = f), c && d === void 0 && c.set(i[0]));
    }
    Lx(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Sa.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Sa.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Qx = (a) => a.startsWith("--");
function Px(a, i, l) {
  Qx(i) ? a.style.setProperty(i, l) : (a.style[i] = l);
}
const Jx = Oc(() => window.ScrollTimeline !== void 0),
  Ix = {};
function Fx(a, i) {
  const l = Oc(a);
  return () => Ix[i] ?? l();
}
const eg = Fx(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Ss = ([a, i, l, u]) => `cubic-bezier(${a}, ${i}, ${l}, ${u})`,
  bp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ss([0, 0.65, 0.55, 1]),
    circOut: Ss([0.55, 0, 1, 0.45]),
    backIn: Ss([0.31, 0.01, 0.66, -0.59]),
    backOut: Ss([0.33, 1.53, 0.69, 0.99]),
  };
function ng(a, i) {
  if (a)
    return typeof a == "function"
      ? eg()
        ? Jy(a, i)
        : "ease-out"
      : Yy(a)
        ? Ss(a)
        : Array.isArray(a)
          ? a.map((l) => ng(l, i) || bp.easeOut)
          : bp[a];
}
function Wx(
  a,
  i,
  l,
  {
    delay: u = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: h = "easeOut",
    times: m,
  } = {},
  p = void 0,
) {
  const g = { [i]: l };
  m && (g.offset = m);
  const v = ng(h, c);
  Array.isArray(v) && (g.easing = v);
  const x = {
    delay: u,
    duration: c,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (p && (x.pseudoElement = p), a.animate(g, x));
}
function ag(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function t1({ type: a, ...i }) {
  return ag(a) && eg()
    ? a.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class e1 extends Hc {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: l,
      name: u,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: h,
      onComplete: m,
    } = i;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = i),
      Rc(typeof i.type != "string"));
    const p = t1(i);
    ((this.animation = Wx(l, u, c, p, d)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const g = Yc(c, this.options, h, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(g) : Px(l, u, g),
            this.animation.cancel());
        }
        (m?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Fe(Number(i));
  }
  get time() {
    return Fe(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    ((this.finishedTime = null), (this.animation.currentTime = Ie(i)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: l }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && Jx() ? ((this.animation.timeline = i), Ue) : l(this)
    );
  }
}
const ig = { anticipate: ky, backInOut: Vy, circInOut: By };
function n1(a) {
  return a in ig;
}
function a1(a) {
  typeof a.ease == "string" && n1(a.ease) && (a.ease = ig[a.ease]);
}
const xp = 10;
class i1 extends e1 {
  constructor(i) {
    (a1(i),
      Fy(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const {
      motionValue: l,
      onUpdate: u,
      onComplete: c,
      element: d,
      ...f
    } = this.options;
    if (!l) return;
    if (i !== void 0) {
      l.set(i);
      return;
    }
    const h = new qc({ ...f, autoplay: !1 }),
      m = Ie(this.finishedTime ?? this.time);
    (l.setWithVelocity(h.sample(m - xp).value, h.sample(m).value, xp),
      h.stop());
  }
}
const Sp = (a, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Pn.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function s1(a) {
  const i = a[0];
  if (a.length === 1) return !0;
  for (let l = 0; l < a.length; l++) if (a[l] !== i) return !0;
}
function l1(a, i, l, u) {
  const c = a[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = a[a.length - 1],
    f = Sp(c, i),
    h = Sp(d, i);
  return !f || !h ? !1 : s1(a) || ((l === "spring" || ag(l)) && u);
}
function hc(a) {
  ((a.duration = 0), a.type);
}
const r1 = new Set(["opacity", "clipPath", "filter", "transform"]),
  u1 = Oc(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function o1(a) {
  const {
    motionValue: i,
    name: l,
    repeatDelay: u,
    repeatType: c,
    damping: d,
    type: f,
  } = a;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: m, transformTemplate: p } = i.owner.getProps();
  return (
    u1() &&
    l &&
    r1.has(l) &&
    (l !== "transform" || !p) &&
    !m &&
    !u &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const c1 = 40;
class f1 extends Hc {
  constructor({
    autoplay: i = !0,
    delay: l = 0,
    type: u = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: h,
    name: m,
    motionValue: p,
    element: g,
    ...v
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = me.now()));
    const x = {
        autoplay: i,
        delay: l,
        type: u,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        name: m,
        motionValue: p,
        element: g,
        ...v,
      },
      A = g?.KeyframeResolver || Xc;
    ((this.keyframeResolver = new A(
      h,
      (w, q, V) => this.onKeyframesResolved(w, q, x, !V),
      m,
      p,
      g,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(i, l, u, c) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: h,
      delay: m,
      isHandoff: p,
      onUpdate: g,
    } = u;
    ((this.resolvedAt = me.now()),
      l1(i, d, f, h) ||
        ((bn.instantAnimations || !m) && g?.(Yc(i, u, l)),
        (i[0] = i[i.length - 1]),
        hc(u),
        (u.repeat = 0)));
    const x = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > c1
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: l,
        ...u,
        keyframes: i,
      },
      A =
        !p && o1(x)
          ? new i1({ ...x, element: x.motionValue.owner.current })
          : new qc(x);
    (A.finished.then(() => this.notifyFinished()).catch(Ue),
      this.pendingTimeline &&
        ((this.stopTimeline = A.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = A));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, l) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), $x()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
const d1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function h1(a) {
  const i = d1.exec(a);
  if (!i) return [,];
  const [, l, u, c] = i;
  return [`--${l ?? u}`, c];
}
function sg(a, i, l = 1) {
  const [u, c] = h1(a);
  if (!u) return;
  const d = window.getComputedStyle(i).getPropertyValue(u);
  if (d) {
    const f = d.trim();
    return Dy(f) ? parseFloat(f) : f;
  }
  return Vc(c) ? sg(c, i, l + 1) : c;
}
function Gc(a, i) {
  return a?.[i] ?? a?.default ?? a;
}
const lg = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...bi,
  ]),
  m1 = { test: (a) => a === "auto", parse: (a) => a },
  rg = (a) => (i) => i.test(a),
  ug = [vi, rt, We, Zn, sx, ix, m1],
  Tp = (a) => ug.find(rg(a));
function p1(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
      ? a === "none" || a === "0" || Ry(a)
      : !0;
}
const y1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function g1(a) {
  const [i, l] = a.slice(0, -1).split("(");
  if (i === "drop-shadow") return a;
  const [u] = l.match(kc) || [];
  if (!u) return a;
  const c = l.replace(u, "");
  let d = y1.has(i) ? 1 : 0;
  return (u !== l && (d *= 100), i + "(" + d + c + ")");
}
const v1 = /\b([a-z-]*)\(.*?\)/gu,
  mc = {
    ...Pn,
    getAnimatableNone: (a) => {
      const i = a.match(v1);
      return i ? i.map(g1).join(" ") : a;
    },
  },
  Ap = { ...vi, transform: Math.round },
  b1 = {
    rotate: Zn,
    rotateX: Zn,
    rotateY: Zn,
    rotateZ: Zn,
    scale: tr,
    scaleX: tr,
    scaleY: tr,
    scaleZ: tr,
    skew: Zn,
    skewX: Zn,
    skewY: Zn,
    distance: rt,
    translateX: rt,
    translateY: rt,
    translateZ: rt,
    x: rt,
    y: rt,
    z: rt,
    perspective: rt,
    transformPerspective: rt,
    opacity: Ns,
    originX: cp,
    originY: cp,
    originZ: rt,
  },
  Zc = {
    borderWidth: rt,
    borderTopWidth: rt,
    borderRightWidth: rt,
    borderBottomWidth: rt,
    borderLeftWidth: rt,
    borderRadius: rt,
    radius: rt,
    borderTopLeftRadius: rt,
    borderTopRightRadius: rt,
    borderBottomRightRadius: rt,
    borderBottomLeftRadius: rt,
    width: rt,
    maxWidth: rt,
    height: rt,
    maxHeight: rt,
    top: rt,
    right: rt,
    bottom: rt,
    left: rt,
    padding: rt,
    paddingTop: rt,
    paddingRight: rt,
    paddingBottom: rt,
    paddingLeft: rt,
    margin: rt,
    marginTop: rt,
    marginRight: rt,
    marginBottom: rt,
    marginLeft: rt,
    backgroundPositionX: rt,
    backgroundPositionY: rt,
    ...b1,
    zIndex: Ap,
    fillOpacity: Ns,
    strokeOpacity: Ns,
    numOctaves: Ap,
  },
  x1 = {
    ...Zc,
    color: Zt,
    backgroundColor: Zt,
    outlineColor: Zt,
    fill: Zt,
    stroke: Zt,
    borderColor: Zt,
    borderTopColor: Zt,
    borderRightColor: Zt,
    borderBottomColor: Zt,
    borderLeftColor: Zt,
    filter: mc,
    WebkitFilter: mc,
  },
  og = (a) => x1[a];
function cg(a, i) {
  let l = og(a);
  return (
    l !== mc && (l = Pn),
    l.getAnimatableNone ? l.getAnimatableNone(i) : void 0
  );
}
const S1 = new Set(["auto", "none", "0"]);
function T1(a, i, l) {
  let u = 0,
    c;
  for (; u < a.length && !c; ) {
    const d = a[u];
    (typeof d == "string" && !S1.has(d) && Rs(d).values.length && (c = a[u]),
      u++);
  }
  if (c && l) for (const d of i) a[d] = cg(l, c);
}
class A1 extends Xc {
  constructor(i, l, u, c, d) {
    super(i, l, u, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: l, name: u } = this;
    if (!l || !l.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let p = i[m];
      if (typeof p == "string" && ((p = p.trim()), Vc(p))) {
        const g = sg(p, l.current);
        (g !== void 0 && (i[m] = g),
          m === i.length - 1 && (this.finalKeyframe = p));
      }
    }
    if ((this.resolveNoneKeyframes(), !lg.has(u) || i.length !== 2)) return;
    const [c, d] = i,
      f = Tp(c),
      h = Tp(d);
    if (f !== h)
      if (vp(f) && vp(h))
        for (let m = 0; m < i.length; m++) {
          const p = i[m];
          typeof p == "string" && (i[m] = parseFloat(p));
        }
      else xa[u] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: l } = this,
      u = [];
    for (let c = 0; c < i.length; c++) (i[c] === null || p1(i[c])) && u.push(c);
    u.length && T1(i, u, l);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: l, name: u } = this;
    if (!i || !i.current) return;
    (u === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xa[u](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (l[0] = this.measuredOrigin));
    const c = l[l.length - 1];
    c !== void 0 && i.getValue(u, c).jump(c, !1);
  }
  measureEndState() {
    const { element: i, name: l, unresolvedKeyframes: u } = this;
    if (!i || !i.current) return;
    const c = i.getValue(l);
    c && c.jump(this.measuredOrigin, !1);
    const d = u.length - 1,
      f = u[d];
    ((u[d] = xa[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([h, m]) => {
          i.getValue(h).set(m);
        }),
      this.resolveNoneKeyframes());
  }
}
function E1(a, i, l) {
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let u = document;
    const c = l?.[a] ?? u.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a);
}
const fg = (a, i) => (i && typeof a == "number" ? i.transform(a) : a);
function dg(a) {
  return Ny(a) && "offsetHeight" in a;
}
const Ep = 30,
  j1 = (a) => !isNaN(parseFloat(a));
class M1 {
  constructor(i, l = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (u) => {
        const c = me.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(u),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = l.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = me.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = j1(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, l) {
    this.events[i] || (this.events[i] = new Cc());
    const u = this.events[i].add(l);
    return i === "change"
      ? () => {
          (u(),
            wt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : u;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, l) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = l));
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, l, u) {
    (this.set(l),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - u));
  }
  jump(i, l = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      l && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = me.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Ep
    )
      return 0;
    const l = Math.min(this.updatedAt - this.prevUpdatedAt, Ep);
    return Oy(parseFloat(this.current) - parseFloat(this.prevFrameValue), l);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((l) => {
        ((this.hasAnimated = !0),
          (this.animation = i(l)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function yi(a, i) {
  return new M1(a, i);
}
const { schedule: Kc } = Hy(queueMicrotask, !1),
  qe = { x: !1, y: !1 };
function hg() {
  return qe.x || qe.y;
}
function D1(a) {
  return a === "x" || a === "y"
    ? qe[a]
      ? null
      : ((qe[a] = !0),
        () => {
          qe[a] = !1;
        })
    : qe.x || qe.y
      ? null
      : ((qe.x = qe.y = !0),
        () => {
          qe.x = qe.y = !1;
        });
}
function mg(a, i) {
  const l = E1(a),
    u = new AbortController(),
    c = { passive: !0, ...i, signal: u.signal };
  return [l, c, () => u.abort()];
}
function jp(a) {
  return !(a.pointerType === "touch" || hg());
}
function N1(a, i, l = {}) {
  const [u, c, d] = mg(a, l),
    f = (h) => {
      if (!jp(h)) return;
      const { target: m } = h,
        p = i(m, h);
      if (typeof p != "function" || !m) return;
      const g = (v) => {
        jp(v) && (p(v), m.removeEventListener("pointerleave", g));
      };
      m.addEventListener("pointerleave", g, c);
    };
  return (
    u.forEach((h) => {
      h.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const pg = (a, i) => (i ? (a === i ? !0 : pg(a, i.parentElement)) : !1),
  $c = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  R1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function O1(a) {
  return R1.has(a.tagName) || a.tabIndex !== -1;
}
const sr = new WeakSet();
function Mp(a) {
  return (i) => {
    i.key === "Enter" && a(i);
  };
}
function Ko(a, i) {
  a.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const C1 = (a, i) => {
  const l = a.currentTarget;
  if (!l) return;
  const u = Mp(() => {
    if (sr.has(l)) return;
    Ko(l, "down");
    const c = Mp(() => {
        Ko(l, "up");
      }),
      d = () => Ko(l, "cancel");
    (l.addEventListener("keyup", c, i), l.addEventListener("blur", d, i));
  });
  (l.addEventListener("keydown", u, i),
    l.addEventListener("blur", () => l.removeEventListener("keydown", u), i));
};
function Dp(a) {
  return $c(a) && !hg();
}
function _1(a, i, l = {}) {
  const [u, c, d] = mg(a, l),
    f = (h) => {
      const m = h.currentTarget;
      if (!Dp(h)) return;
      sr.add(m);
      const p = i(m, h),
        g = (A, w) => {
          (window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", x),
            sr.has(m) && sr.delete(m),
            Dp(A) && typeof p == "function" && p(A, { success: w }));
        },
        v = (A) => {
          g(
            A,
            m === window ||
              m === document ||
              l.useGlobalTarget ||
              pg(m, A.target),
          );
        },
        x = (A) => {
          g(A, !1);
        };
      (window.addEventListener("pointerup", v, c),
        window.addEventListener("pointercancel", x, c));
    };
  return (
    u.forEach((h) => {
      ((l.useGlobalTarget ? window : h).addEventListener("pointerdown", f, c),
        dg(h) &&
          (h.addEventListener("focus", (p) => C1(p, c)),
          !O1(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)));
    }),
    d
  );
}
function yg(a) {
  return Ny(a) && "ownerSVGElement" in a;
}
function w1(a) {
  return yg(a) && a.tagName === "svg";
}
const le = (a) => !!(a && a.getVelocity),
  z1 = [...ug, Zt, Pn],
  V1 = (a) => z1.find(rg(a)),
  Qc = Z.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
class k1 extends Z.Component {
  getSnapshotBeforeUpdate(i) {
    const l = this.props.childRef.current;
    if (l && i.isPresent && !this.props.isPresent) {
      const u = l.offsetParent,
        c = (dg(u) && u.offsetWidth) || 0,
        d = this.props.sizeRef.current;
      ((d.height = l.offsetHeight || 0),
        (d.width = l.offsetWidth || 0),
        (d.top = l.offsetTop),
        (d.left = l.offsetLeft),
        (d.right = c - d.width - d.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function U1({ children: a, isPresent: i, anchorX: l, root: u }) {
  const c = Z.useId(),
    d = Z.useRef(null),
    f = Z.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: h } = Z.useContext(Qc);
  return (
    Z.useInsertionEffect(() => {
      const { width: m, height: p, top: g, left: v, right: x } = f.current;
      if (i || !d.current || !m || !p) return;
      const A = l === "left" ? `left: ${v}` : `right: ${x}`;
      d.current.dataset.motionPopId = c;
      const w = document.createElement("style");
      h && (w.nonce = h);
      const q = u ?? document.head;
      return (
        q.appendChild(w),
        w.sheet &&
          w.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${p}px !important;
            ${A}px !important;
            top: ${g}px !important;
          }
        `),
        () => {
          q.contains(w) && q.removeChild(w);
        }
      );
    }, [i]),
    j.jsx(k1, {
      isPresent: i,
      childRef: d,
      sizeRef: f,
      children: Z.cloneElement(a, { ref: d }),
    })
  );
}
const B1 = ({
  children: a,
  initial: i,
  isPresent: l,
  onExitComplete: u,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
  anchorX: h,
  root: m,
}) => {
  const p = jc(L1),
    g = Z.useId();
  let v = !0,
    x = Z.useMemo(
      () => (
        (v = !1),
        {
          id: g,
          initial: i,
          isPresent: l,
          custom: c,
          onExitComplete: (A) => {
            p.set(A, !0);
            for (const w of p.values()) if (!w) return;
            u && u();
          },
          register: (A) => (p.set(A, !1), () => p.delete(A)),
        }
      ),
      [l, p, u],
    );
  return (
    d && v && (x = { ...x }),
    Z.useMemo(() => {
      p.forEach((A, w) => p.set(w, !1));
    }, [l]),
    Z.useEffect(() => {
      !l && !p.size && u && u();
    }, [l]),
    f === "popLayout" &&
      (a = j.jsx(U1, { isPresent: l, anchorX: h, root: m, children: a })),
    j.jsx(pr.Provider, { value: x, children: a })
  );
};
function L1() {
  return new Map();
}
function gg(a = !0) {
  const i = Z.useContext(pr);
  if (i === null) return [!0, null];
  const { isPresent: l, onExitComplete: u, register: c } = i,
    d = Z.useId();
  Z.useEffect(() => {
    if (a) return c(d);
  }, [a]);
  const f = Z.useCallback(() => a && u && u(d), [d, u, a]);
  return !l && u ? [!1, f] : [!0];
}
const er = (a) => a.key || "";
function Np(a) {
  const i = [];
  return (
    Z.Children.forEach(a, (l) => {
      Z.isValidElement(l) && i.push(l);
    }),
    i
  );
}
const Y1 = ({
    children: a,
    custom: i,
    initial: l = !0,
    onExitComplete: u,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
    anchorX: h = "left",
    root: m,
  }) => {
    const [p, g] = gg(f),
      v = Z.useMemo(() => Np(a), [a]),
      x = f && !p ? [] : v.map(er),
      A = Z.useRef(!0),
      w = Z.useRef(v),
      q = jc(() => new Map()),
      [V, k] = Z.useState(v),
      [C, B] = Z.useState(v);
    My(() => {
      ((A.current = !1), (w.current = v));
      for (let J = 0; J < C.length; J++) {
        const F = er(C[J]);
        x.includes(F) ? q.delete(F) : q.get(F) !== !0 && q.set(F, !1);
      }
    }, [C, x.length, x.join("-")]);
    const P = [];
    if (v !== V) {
      let J = [...v];
      for (let F = 0; F < C.length; F++) {
        const I = C[F],
          ot = er(I);
        x.includes(ot) || (J.splice(F, 0, I), P.push(I));
      }
      return (d === "wait" && P.length && (J = P), B(Np(J)), k(v), null);
    }
    const { forceRender: G } = Z.useContext(Ec);
    return j.jsx(j.Fragment, {
      children: C.map((J) => {
        const F = er(J),
          I = f && !p ? !1 : v === C || x.includes(F),
          ot = () => {
            if (q.has(F)) q.set(F, !0);
            else return;
            let gt = !0;
            (q.forEach((St) => {
              St || (gt = !1);
            }),
              gt && (G?.(), B(w.current), f && g?.(), u && u()));
          };
        return j.jsx(
          B1,
          {
            isPresent: I,
            initial: !A.current || l ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: c,
            mode: d,
            root: m,
            onExitComplete: I ? void 0 : ot,
            anchorX: h,
            children: J,
          },
          F,
        );
      }),
    });
  },
  vg = Z.createContext({ strict: !1 }),
  Rp = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  gi = {};
for (const a in Rp) gi[a] = { isEnabled: (i) => Rp[a].some((l) => !!i[l]) };
function H1(a) {
  for (const i in a) gi[i] = { ...gi[i], ...a[i] };
}
const q1 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function fr(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    q1.has(a)
  );
}
let bg = (a) => !fr(a);
function X1(a) {
  typeof a == "function" && (bg = (i) => (i.startsWith("on") ? !fr(i) : a(i)));
}
try {
  X1(require("@emotion/is-prop-valid").default);
} catch {}
function G1(a, i, l) {
  const u = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((bg(c) ||
        (l === !0 && fr(c)) ||
        (!i && !fr(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (u[c] = a[c]));
  return u;
}
const yr = Z.createContext({});
function gr(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Os(a) {
  return typeof a == "string" || Array.isArray(a);
}
const Pc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Jc = ["initial", ...Pc];
function vr(a) {
  return gr(a.animate) || Jc.some((i) => Os(a[i]));
}
function xg(a) {
  return !!(vr(a) || a.variants);
}
function Z1(a, i) {
  if (vr(a)) {
    const { initial: l, animate: u } = a;
    return {
      initial: l === !1 || Os(l) ? l : void 0,
      animate: Os(u) ? u : void 0,
    };
  }
  return a.inherit !== !1 ? i : {};
}
function K1(a) {
  const { initial: i, animate: l } = Z1(a, Z.useContext(yr));
  return Z.useMemo(() => ({ initial: i, animate: l }), [Op(i), Op(l)]);
}
function Op(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Cs = {};
function $1(a) {
  for (const i in a) ((Cs[i] = a[i]), zc(i) && (Cs[i].isCSSVariable = !0));
}
function Sg(a, { layout: i, layoutId: l }) {
  return (
    xi.has(a) ||
    a.startsWith("origin") ||
    ((i || l !== void 0) && (!!Cs[a] || a === "opacity"))
  );
}
const Q1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  P1 = bi.length;
function J1(a, i, l) {
  let u = "",
    c = !0;
  for (let d = 0; d < P1; d++) {
    const f = bi[d],
      h = a[f];
    if (h === void 0) continue;
    let m = !0;
    if (
      (typeof h == "number"
        ? (m = h === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(h) === 0),
      !m || l)
    ) {
      const p = fg(h, Zc[f]);
      if (!m) {
        c = !1;
        const g = Q1[f] || f;
        u += `${g}(${p}) `;
      }
      l && (i[f] = p);
    }
  }
  return ((u = u.trim()), l ? (u = l(i, c ? "" : u)) : c && (u = "none"), u);
}
function Ic(a, i, l) {
  const { style: u, vars: c, transformOrigin: d } = a;
  let f = !1,
    h = !1;
  for (const m in i) {
    const p = i[m];
    if (xi.has(m)) {
      f = !0;
      continue;
    } else if (zc(m)) {
      c[m] = p;
      continue;
    } else {
      const g = fg(p, Zc[m]);
      m.startsWith("origin") ? ((h = !0), (d[m] = g)) : (u[m] = g);
    }
  }
  if (
    (i.transform ||
      (f || l
        ? (u.transform = J1(i, a.transform, l))
        : u.transform && (u.transform = "none")),
    h)
  ) {
    const { originX: m = "50%", originY: p = "50%", originZ: g = 0 } = d;
    u.transformOrigin = `${m} ${p} ${g}`;
  }
}
const Fc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Tg(a, i, l) {
  for (const u in i) !le(i[u]) && !Sg(u, l) && (a[u] = i[u]);
}
function I1({ transformTemplate: a }, i) {
  return Z.useMemo(() => {
    const l = Fc();
    return (Ic(l, i, a), Object.assign({}, l.vars, l.style));
  }, [i]);
}
function F1(a, i) {
  const l = a.style || {},
    u = {};
  return (Tg(u, l, a), Object.assign(u, I1(a, i)), u);
}
function W1(a, i) {
  const l = {},
    u = F1(a, i);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((l.draggable = !1),
      (u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none"),
      (u.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (l.tabIndex = 0),
    (l.style = u),
    l
  );
}
const tS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  eS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function nS(a, i, l = 1, u = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? tS : eS;
  a[d.offset] = rt.transform(-u);
  const f = rt.transform(i),
    h = rt.transform(l);
  a[d.array] = `${f} ${h}`;
}
function Ag(
  a,
  {
    attrX: i,
    attrY: l,
    attrScale: u,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...h
  },
  m,
  p,
  g,
) {
  if ((Ic(a, h, p), m)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  ((a.attrs = a.style), (a.style = {}));
  const { attrs: v, style: x } = a;
  (v.transform && ((x.transform = v.transform), delete v.transform),
    (x.transform || v.transformOrigin) &&
      ((x.transformOrigin = v.transformOrigin ?? "50% 50%"),
      delete v.transformOrigin),
    x.transform &&
      ((x.transformBox = g?.transformBox ?? "fill-box"), delete v.transformBox),
    i !== void 0 && (v.x = i),
    l !== void 0 && (v.y = l),
    u !== void 0 && (v.scale = u),
    c !== void 0 && nS(v, c, d, f, !1));
}
const Eg = () => ({ ...Fc(), attrs: {} }),
  jg = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function aS(a, i, l, u) {
  const c = Z.useMemo(() => {
    const d = Eg();
    return (
      Ag(d, i, jg(u), a.transformTemplate, a.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [i]);
  if (a.style) {
    const d = {};
    (Tg(d, a.style, a), (c.style = { ...d, ...c.style }));
  }
  return c;
}
const iS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Wc(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(iS.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function sS(a, i, l, { latestValues: u }, c, d = !1) {
  const h = (Wc(a) ? aS : W1)(i, u, c, a),
    m = G1(i, typeof a == "string", d),
    p = a !== Z.Fragment ? { ...m, ...h, ref: l } : {},
    { children: g } = i,
    v = Z.useMemo(() => (le(g) ? g.get() : g), [g]);
  return Z.createElement(a, { ...p, children: v });
}
function Cp(a) {
  const i = [{}, {}];
  return (
    a?.values.forEach((l, u) => {
      ((i[0][u] = l.get()), (i[1][u] = l.getVelocity()));
    }),
    i
  );
}
function tf(a, i, l, u) {
  if (typeof i == "function") {
    const [c, d] = Cp(u);
    i = i(l !== void 0 ? l : a.custom, c, d);
  }
  if (
    (typeof i == "string" && (i = a.variants && a.variants[i]),
    typeof i == "function")
  ) {
    const [c, d] = Cp(u);
    i = i(l !== void 0 ? l : a.custom, c, d);
  }
  return i;
}
function lr(a) {
  return le(a) ? a.get() : a;
}
function lS({ scrapeMotionValuesFromProps: a, createRenderState: i }, l, u, c) {
  return { latestValues: rS(l, u, c, a), renderState: i() };
}
function rS(a, i, l, u) {
  const c = {},
    d = u(a, {});
  for (const x in d) c[x] = lr(d[x]);
  let { initial: f, animate: h } = a;
  const m = vr(a),
    p = xg(a);
  i &&
    p &&
    !m &&
    a.inherit !== !1 &&
    (f === void 0 && (f = i.initial), h === void 0 && (h = i.animate));
  let g = l ? l.initial === !1 : !1;
  g = g || f === !1;
  const v = g ? h : f;
  if (v && typeof v != "boolean" && !gr(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let A = 0; A < x.length; A++) {
      const w = tf(a, x[A]);
      if (w) {
        const { transitionEnd: q, transition: V, ...k } = w;
        for (const C in k) {
          let B = k[C];
          if (Array.isArray(B)) {
            const P = g ? B.length - 1 : 0;
            B = B[P];
          }
          B !== null && (c[C] = B);
        }
        for (const C in q) c[C] = q[C];
      }
    }
  }
  return c;
}
const Mg = (a) => (i, l) => {
  const u = Z.useContext(yr),
    c = Z.useContext(pr),
    d = () => lS(a, i, u, c);
  return l ? d() : jc(d);
};
function ef(a, i, l) {
  const { style: u } = a,
    c = {};
  for (const d in u)
    (le(u[d]) ||
      (i.style && le(i.style[d])) ||
      Sg(d, a) ||
      l?.getValue(d)?.liveStyle !== void 0) &&
      (c[d] = u[d]);
  return c;
}
const uS = Mg({ scrapeMotionValuesFromProps: ef, createRenderState: Fc });
function Dg(a, i, l) {
  const u = ef(a, i, l);
  for (const c in a)
    if (le(a[c]) || le(i[c])) {
      const d =
        bi.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      u[d] = a[c];
    }
  return u;
}
const oS = Mg({ scrapeMotionValuesFromProps: Dg, createRenderState: Eg }),
  cS = Symbol.for("motionComponentSymbol");
function oi(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function fS(a, i, l) {
  return Z.useCallback(
    (u) => {
      (u && a.onMount && a.onMount(u),
        i && (u ? i.mount(u) : i.unmount()),
        l && (typeof l == "function" ? l(u) : oi(l) && (l.current = u)));
    },
    [i],
  );
}
const nf = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  dS = "framerAppearId",
  Ng = "data-" + nf(dS),
  Rg = Z.createContext({});
function hS(a, i, l, u, c) {
  const { visualElement: d } = Z.useContext(yr),
    f = Z.useContext(vg),
    h = Z.useContext(pr),
    m = Z.useContext(Qc).reducedMotion,
    p = Z.useRef(null);
  ((u = u || f.renderer),
    !p.current &&
      u &&
      (p.current = u(a, {
        visualState: i,
        parent: d,
        props: l,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: m,
      })));
  const g = p.current,
    v = Z.useContext(Rg);
  g &&
    !g.projection &&
    c &&
    (g.type === "html" || g.type === "svg") &&
    mS(p.current, l, c, v);
  const x = Z.useRef(!1);
  Z.useInsertionEffect(() => {
    g && x.current && g.update(l, h);
  });
  const A = l[Ng],
    w = Z.useRef(
      !!A &&
        !window.MotionHandoffIsComplete?.(A) &&
        window.MotionHasOptimisedAnimation?.(A),
    );
  return (
    My(() => {
      g &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        g.updateFeatures(),
        g.scheduleRenderMicrotask(),
        w.current && g.animationState && g.animationState.animateChanges());
    }),
    Z.useEffect(() => {
      g &&
        (!w.current && g.animationState && g.animationState.animateChanges(),
        w.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(A);
          }),
          (w.current = !1)),
        (g.enteringChildren = void 0));
    }),
    g
  );
}
function mS(a, i, l, u) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: h,
    layoutScroll: m,
    layoutRoot: p,
    layoutCrossfade: g,
  } = i;
  ((a.projection = new l(
    a.latestValues,
    i["data-framer-portal-id"] ? void 0 : Og(a.parent),
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (h && oi(h)),
      visualElement: a,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: u,
      crossfade: g,
      layoutScroll: m,
      layoutRoot: p,
    }));
}
function Og(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Og(a.parent);
}
function $o(a, { forwardMotionProps: i = !1 } = {}, l, u) {
  l && H1(l);
  const c = Wc(a) ? oS : uS;
  function d(h, m) {
    let p;
    const g = { ...Z.useContext(Qc), ...h, layoutId: pS(h) },
      { isStatic: v } = g,
      x = K1(h),
      A = c(h, v);
    if (!v && Mc) {
      yS();
      const w = gS(g);
      ((p = w.MeasureLayout),
        (x.visualElement = hS(a, A, g, u, w.ProjectionNode)));
    }
    return j.jsxs(yr.Provider, {
      value: x,
      children: [
        p && x.visualElement
          ? j.jsx(p, { visualElement: x.visualElement, ...g })
          : null,
        sS(a, h, fS(A, x.visualElement, m), A, v, i),
      ],
    });
  }
  d.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const f = Z.forwardRef(d);
  return ((f[cS] = a), f);
}
function pS({ layoutId: a }) {
  const i = Z.useContext(Ec).id;
  return i && a !== void 0 ? i + "-" + a : a;
}
function yS(a, i) {
  Z.useContext(vg).strict;
}
function gS(a) {
  const { drag: i, layout: l } = gi;
  if (!i && !l) return {};
  const u = { ...i, ...l };
  return {
    MeasureLayout:
      i?.isEnabled(a) || l?.isEnabled(a) ? u.MeasureLayout : void 0,
    ProjectionNode: u.ProjectionNode,
  };
}
function vS(a, i) {
  if (typeof Proxy > "u") return $o;
  const l = new Map(),
    u = (d, f) => $o(d, f, a, i),
    c = (d, f) => u(d, f);
  return new Proxy(c, {
    get: (d, f) =>
      f === "create"
        ? u
        : (l.has(f) || l.set(f, $o(f, void 0, a, i)), l.get(f)),
  });
}
function Cg({ top: a, left: i, right: l, bottom: u }) {
  return { x: { min: i, max: l }, y: { min: a, max: u } };
}
function bS({ x: a, y: i }) {
  return { top: i.min, right: a.max, bottom: i.max, left: a.min };
}
function xS(a, i) {
  if (!i) return a;
  const l = i({ x: a.left, y: a.top }),
    u = i({ x: a.right, y: a.bottom });
  return { top: l.y, left: l.x, bottom: u.y, right: u.x };
}
function Qo(a) {
  return a === void 0 || a === 1;
}
function pc({ scale: a, scaleX: i, scaleY: l }) {
  return !Qo(a) || !Qo(i) || !Qo(l);
}
function ya(a) {
  return (
    pc(a) ||
    _g(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function _g(a) {
  return _p(a.x) || _p(a.y);
}
function _p(a) {
  return a && a !== "0%";
}
function dr(a, i, l) {
  const u = a - l,
    c = i * u;
  return l + c;
}
function wp(a, i, l, u, c) {
  return (c !== void 0 && (a = dr(a, c, u)), dr(a, l, u) + i);
}
function yc(a, i = 0, l = 1, u, c) {
  ((a.min = wp(a.min, i, l, u, c)), (a.max = wp(a.max, i, l, u, c)));
}
function wg(a, { x: i, y: l }) {
  (yc(a.x, i.translate, i.scale, i.originPoint),
    yc(a.y, l.translate, l.scale, l.originPoint));
}
const zp = 0.999999999999,
  Vp = 1.0000000000001;
function SS(a, i, l, u = !1) {
  const c = l.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let h = 0; h < c; h++) {
    ((d = l[h]), (f = d.projectionDelta));
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (u &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        fi(a, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), wg(a, f)),
      u && ya(d.latestValues) && fi(a, d.latestValues));
  }
  (i.x < Vp && i.x > zp && (i.x = 1), i.y < Vp && i.y > zp && (i.y = 1));
}
function ci(a, i) {
  ((a.min = a.min + i), (a.max = a.max + i));
}
function kp(a, i, l, u, c = 0.5) {
  const d = kt(a.min, a.max, c);
  yc(a, i, l, d, u);
}
function fi(a, i) {
  (kp(a.x, i.x, i.scaleX, i.scale, i.originX),
    kp(a.y, i.y, i.scaleY, i.scale, i.originY));
}
function zg(a, i) {
  return Cg(xS(a.getBoundingClientRect(), i));
}
function TS(a, i, l) {
  const u = zg(a, l),
    { scroll: c } = i;
  return (c && (ci(u.x, c.offset.x), ci(u.y, c.offset.y)), u);
}
const Up = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  di = () => ({ x: Up(), y: Up() }),
  Bp = () => ({ min: 0, max: 0 }),
  qt = () => ({ x: Bp(), y: Bp() }),
  gc = { current: null },
  Vg = { current: !1 };
function AS() {
  if (((Vg.current = !0), !!Mc))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (gc.current = a.matches);
      (a.addEventListener("change", i), i());
    } else gc.current = !1;
}
const ES = new WeakMap();
function jS(a, i, l) {
  for (const u in i) {
    const c = i[u],
      d = l[u];
    if (le(c)) a.addValue(u, c);
    else if (le(d)) a.addValue(u, yi(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(u)) {
        const f = a.getValue(u);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = a.getStaticValue(u);
        a.addValue(u, yi(f !== void 0 ? f : c, { owner: a }));
      }
  }
  for (const u in l) i[u] === void 0 && a.removeValue(u);
  return i;
}
const Lp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class MS {
  scrapeMotionValuesFromProps(i, l, u) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: l,
      presenceContext: u,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: f,
    },
    h = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Xc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const x = me.now();
        this.renderScheduledAt < x &&
          ((this.renderScheduledAt = x), wt.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: p } = f;
    ((this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = l.initial ? { ...m } : {}),
      (this.renderState = p),
      (this.parent = i),
      (this.props = l),
      (this.presenceContext = u),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = h),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = vr(l)),
      (this.isVariantNode = xg(l)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: g, ...v } = this.scrapeMotionValuesFromProps(
      l,
      {},
      this,
    );
    for (const x in v) {
      const A = v[x];
      m[x] !== void 0 && le(A) && A.set(m[x]);
    }
  }
  mount(i) {
    ((this.current = i),
      ES.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((l, u) => this.bindToMotionValue(u, l)),
      Vg.current || AS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : gc.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Qn(this.notifyUpdate),
      Qn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const l = this.features[i];
      l && (l.unmount(), (l.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, l) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const u = xi.has(i);
    u && this.onBindTransform && this.onBindTransform();
    const c = l.on("change", (f) => {
      ((this.latestValues[i] = f),
        this.props.onUpdate && wt.preRender(this.notifyUpdate),
        u && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, i, l)),
      this.valueSubscriptions.set(i, () => {
        (c(), d && d(), l.owner && l.stop());
      }));
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in gi) {
      const l = gi[i];
      if (!l) continue;
      const { isEnabled: u, Feature: c } = l;
      if (
        (!this.features[i] &&
          c &&
          u(this.props) &&
          (this.features[i] = new c(this)),
        this.features[i])
      ) {
        const d = this.features[i];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : qt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, l) {
    this.latestValues[i] = l;
  }
  update(i, l) {
    ((i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = l));
    for (let u = 0; u < Lp.length; u++) {
      const c = Lp[u];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = jS(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const l = this.getClosestVariantNode();
    if (l)
      return (
        l.variantChildren && l.variantChildren.add(i),
        () => l.variantChildren.delete(i)
      );
  }
  addValue(i, l) {
    const u = this.values.get(i);
    l !== u &&
      (u && this.removeValue(i),
      this.bindToMotionValue(i, l),
      this.values.set(i, l),
      (this.latestValues[i] = l.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const l = this.valueSubscriptions.get(i);
    (l && (l(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, l) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let u = this.values.get(i);
    return (
      u === void 0 &&
        l !== void 0 &&
        ((u = yi(l === null ? void 0 : l, { owner: this })),
        this.addValue(i, u)),
      u
    );
  }
  readValue(i, l) {
    let u =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      u != null &&
        (typeof u == "string" && (Dy(u) || Ry(u))
          ? (u = parseFloat(u))
          : !V1(u) && Pn.test(l) && (u = cg(i, l)),
        this.setBaseTarget(i, le(u) ? u.get() : u)),
      le(u) ? u.get() : u
    );
  }
  setBaseTarget(i, l) {
    this.baseTarget[i] = l;
  }
  getBaseTarget(i) {
    const { initial: l } = this.props;
    let u;
    if (typeof l == "string" || typeof l == "object") {
      const d = tf(this.props, l, this.presenceContext?.custom);
      d && (u = d[i]);
    }
    if (l && u !== void 0) return u;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !le(c)
      ? c
      : this.initialValues[i] !== void 0 && u === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, l) {
    return (
      this.events[i] || (this.events[i] = new Cc()),
      this.events[i].add(l)
    );
  }
  notify(i, ...l) {
    this.events[i] && this.events[i].notify(...l);
  }
  scheduleRenderMicrotask() {
    Kc.render(this.render);
  }
}
class kg extends MS {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = A1));
  }
  sortInstanceNodePosition(i, l) {
    return i.compareDocumentPosition(l) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, l) {
    return i.style ? i.style[l] : void 0;
  }
  removeValueFromRenderState(i, { vars: l, style: u }) {
    (delete l[i], delete u[i]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    le(i) &&
      (this.childSubscription = i.on("change", (l) => {
        this.current && (this.current.textContent = `${l}`);
      }));
  }
}
function Ug(a, { style: i, vars: l }, u, c) {
  const d = a.style;
  let f;
  for (f in i) d[f] = i[f];
  c?.applyProjectionStyles(d, u);
  for (f in l) d.setProperty(f, l[f]);
}
function DS(a) {
  return window.getComputedStyle(a);
}
class NS extends kg {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Ug));
  }
  readValueFromInstance(i, l) {
    if (xi.has(l)) return this.projection?.isProjecting ? uc(l) : qx(i, l);
    {
      const u = DS(i),
        c = (zc(l) ? u.getPropertyValue(l) : u[l]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: l }) {
    return zg(i, l);
  }
  build(i, l, u) {
    Ic(i, l, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, l, u) {
    return ef(i, l, u);
  }
}
const Bg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function RS(a, i, l, u) {
  Ug(a, i, void 0, u);
  for (const c in i.attrs) a.setAttribute(Bg.has(c) ? c : nf(c), i.attrs[c]);
}
class OS extends kg {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = qt));
  }
  getBaseTargetFromProps(i, l) {
    return i[l];
  }
  readValueFromInstance(i, l) {
    if (xi.has(l)) {
      const u = og(l);
      return (u && u.default) || 0;
    }
    return ((l = Bg.has(l) ? l : nf(l)), i.getAttribute(l));
  }
  scrapeMotionValuesFromProps(i, l, u) {
    return Dg(i, l, u);
  }
  build(i, l, u) {
    Ag(i, l, this.isSVGTag, u.transformTemplate, u.style);
  }
  renderInstance(i, l, u, c) {
    RS(i, l, u, c);
  }
  mount(i) {
    ((this.isSVGTag = jg(i.tagName)), super.mount(i));
  }
}
const CS = (a, i) =>
  Wc(a) ? new OS(i) : new NS(i, { allowProjection: a !== Z.Fragment });
function pi(a, i, l) {
  const u = a.getProps();
  return tf(u, i, l !== void 0 ? l : u.custom, a);
}
const vc = (a) => Array.isArray(a);
function _S(a, i, l) {
  a.hasValue(i) ? a.getValue(i).set(l) : a.addValue(i, yi(l));
}
function wS(a) {
  return vc(a) ? a[a.length - 1] || 0 : a;
}
function zS(a, i) {
  const l = pi(a, i);
  let { transitionEnd: u = {}, transition: c = {}, ...d } = l || {};
  d = { ...d, ...u };
  for (const f in d) {
    const h = wS(d[f]);
    _S(a, f, h);
  }
}
function VS(a) {
  return !!(le(a) && a.add);
}
function bc(a, i) {
  const l = a.getValue("willChange");
  if (VS(l)) return l.add(i);
  if (!l && bn.WillChange) {
    const u = new bn.WillChange("auto");
    (a.addValue("willChange", u), u.add(i));
  }
}
function Lg(a) {
  return a.props[Ng];
}
const kS = (a) => a !== null;
function US(a, { repeat: i, repeatType: l = "loop" }, u) {
  const c = a.filter(kS),
    d = i && l !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
const BS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  LS = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  YS = { type: "keyframes", duration: 0.8 },
  HS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  qS = (a, { keyframes: i }) =>
    i.length > 2
      ? YS
      : xi.has(a)
        ? a.startsWith("scale")
          ? LS(i[1])
          : BS
        : HS;
function XS({
  when: a,
  delay: i,
  delayChildren: l,
  staggerChildren: u,
  staggerDirection: c,
  repeat: d,
  repeatType: f,
  repeatDelay: h,
  from: m,
  elapsed: p,
  ...g
}) {
  return !!Object.keys(g).length;
}
const af =
  (a, i, l, u = {}, c, d) =>
  (f) => {
    const h = Gc(u, a) || {},
      m = h.delay || u.delay || 0;
    let { elapsed: p = 0 } = u;
    p = p - Ie(m);
    const g = {
      keyframes: Array.isArray(l) ? l : [null, l],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...h,
      delay: -p,
      onUpdate: (x) => {
        (i.set(x), h.onUpdate && h.onUpdate(x));
      },
      onComplete: () => {
        (f(), h.onComplete && h.onComplete());
      },
      name: a,
      motionValue: i,
      element: d ? void 0 : c,
    };
    (XS(h) || Object.assign(g, qS(a, g)),
      g.duration && (g.duration = Ie(g.duration)),
      g.repeatDelay && (g.repeatDelay = Ie(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from));
    let v = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        (hc(g), g.delay === 0 && (v = !0)),
      (bn.instantAnimations || bn.skipAnimations) &&
        ((v = !0), hc(g), (g.delay = 0)),
      (g.allowFlatten = !h.type && !h.ease),
      v && !d && i.get() !== void 0)
    ) {
      const x = US(g.keyframes, h);
      if (x !== void 0) {
        wt.update(() => {
          (g.onUpdate(x), g.onComplete());
        });
        return;
      }
    }
    return h.isSync ? new qc(g) : new f1(g);
  };
function GS({ protectedKeys: a, needsAnimating: i }, l) {
  const u = a.hasOwnProperty(l) && i[l] !== !0;
  return ((i[l] = !1), u);
}
function Yg(a, i, { delay: l = 0, transitionOverride: u, type: c } = {}) {
  let { transition: d = a.getDefaultTransition(), transitionEnd: f, ...h } = i;
  u && (d = u);
  const m = [],
    p = c && a.animationState && a.animationState.getState()[c];
  for (const g in h) {
    const v = a.getValue(g, a.latestValues[g] ?? null),
      x = h[g];
    if (x === void 0 || (p && GS(p, g))) continue;
    const A = { delay: l, ...Gc(d || {}, g) },
      w = v.get();
    if (
      w !== void 0 &&
      !v.isAnimating &&
      !Array.isArray(x) &&
      x === w &&
      !A.velocity
    )
      continue;
    let q = !1;
    if (window.MotionHandoffAnimation) {
      const k = Lg(a);
      if (k) {
        const C = window.MotionHandoffAnimation(k, g, wt);
        C !== null && ((A.startTime = C), (q = !0));
      }
    }
    (bc(a, g),
      v.start(
        af(g, v, x, a.shouldReduceMotion && lg.has(g) ? { type: !1 } : A, a, q),
      ));
    const V = v.animation;
    V && m.push(V);
  }
  return (
    f &&
      Promise.all(m).then(() => {
        wt.update(() => {
          f && zS(a, f);
        });
      }),
    m
  );
}
function Hg(a, i, l, u = 0, c = 1) {
  const d = Array.from(a)
      .sort((p, g) => p.sortNodePosition(g))
      .indexOf(i),
    f = a.size,
    h = (f - 1) * u;
  return typeof l == "function" ? l(d, f) : c === 1 ? d * u : h - d * u;
}
function xc(a, i, l = {}) {
  const u = pi(a, i, l.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = u || {};
  l.transitionOverride && (c = l.transitionOverride);
  const d = u ? () => Promise.all(Yg(a, u, l)) : () => Promise.resolve(),
    f =
      a.variantChildren && a.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: p = 0,
              staggerChildren: g,
              staggerDirection: v,
            } = c;
            return ZS(a, i, m, p, g, v, l);
          }
        : () => Promise.resolve(),
    { when: h } = c;
  if (h) {
    const [m, p] = h === "beforeChildren" ? [d, f] : [f, d];
    return m().then(() => p());
  } else return Promise.all([d(), f(l.delay)]);
}
function ZS(a, i, l = 0, u = 0, c = 0, d = 1, f) {
  const h = [];
  for (const m of a.variantChildren)
    (m.notify("AnimationStart", i),
      h.push(
        xc(m, i, {
          ...f,
          delay:
            l +
            (typeof u == "function" ? 0 : u) +
            Hg(a.variantChildren, m, u, c, d),
        }).then(() => m.notify("AnimationComplete", i)),
      ));
  return Promise.all(h);
}
function KS(a, i, l = {}) {
  a.notify("AnimationStart", i);
  let u;
  if (Array.isArray(i)) {
    const c = i.map((d) => xc(a, d, l));
    u = Promise.all(c);
  } else if (typeof i == "string") u = xc(a, i, l);
  else {
    const c = typeof i == "function" ? pi(a, i, l.custom) : i;
    u = Promise.all(Yg(a, c, l));
  }
  return u.then(() => {
    a.notify("AnimationComplete", i);
  });
}
function qg(a, i) {
  if (!Array.isArray(i)) return !1;
  const l = i.length;
  if (l !== a.length) return !1;
  for (let u = 0; u < l; u++) if (i[u] !== a[u]) return !1;
  return !0;
}
const $S = Jc.length;
function Xg(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const l = a.parent ? Xg(a.parent) || {} : {};
    return (a.props.initial !== void 0 && (l.initial = a.props.initial), l);
  }
  const i = {};
  for (let l = 0; l < $S; l++) {
    const u = Jc[l],
      c = a.props[u];
    (Os(c) || c === !1) && (i[u] = c);
  }
  return i;
}
const QS = [...Pc].reverse(),
  PS = Pc.length;
function JS(a) {
  return (i) =>
    Promise.all(i.map(({ animation: l, options: u }) => KS(a, l, u)));
}
function IS(a) {
  let i = JS(a),
    l = Yp(),
    u = !0;
  const c = (m) => (p, g) => {
    const v = pi(a, g, m === "exit" ? a.presenceContext?.custom : void 0);
    if (v) {
      const { transition: x, transitionEnd: A, ...w } = v;
      p = { ...p, ...w, ...A };
    }
    return p;
  };
  function d(m) {
    i = m(a);
  }
  function f(m) {
    const { props: p } = a,
      g = Xg(a.parent) || {},
      v = [],
      x = new Set();
    let A = {},
      w = 1 / 0;
    for (let V = 0; V < PS; V++) {
      const k = QS[V],
        C = l[k],
        B = p[k] !== void 0 ? p[k] : g[k],
        P = Os(B),
        G = k === m ? C.isActive : null;
      G === !1 && (w = V);
      let J = B === g[k] && B !== p[k] && P;
      if (
        (J && u && a.manuallyAnimateOnMount && (J = !1),
        (C.protectedKeys = { ...A }),
        (!C.isActive && G === null) ||
          (!B && !C.prevProp) ||
          gr(B) ||
          typeof B == "boolean")
      )
        continue;
      const F = FS(C.prevProp, B);
      let I = F || (k === m && C.isActive && !J && P) || (V > w && P),
        ot = !1;
      const gt = Array.isArray(B) ? B : [B];
      let St = gt.reduce(c(k), {});
      G === !1 && (St = {});
      const { prevResolvedValues: nt = {} } = C,
        bt = { ...nt, ...St },
        zt = (N) => {
          ((I = !0),
            x.has(N) && ((ot = !0), x.delete(N)),
            (C.needsAnimating[N] = !0));
          const X = a.getValue(N);
          X && (X.liveStyle = !1);
        };
      for (const N in bt) {
        const X = St[N],
          tt = nt[N];
        if (A.hasOwnProperty(N)) continue;
        let S = !1;
        (vc(X) && vc(tt) ? (S = !qg(X, tt)) : (S = X !== tt),
          S
            ? X != null
              ? zt(N)
              : x.add(N)
            : X !== void 0 && x.has(N)
              ? zt(N)
              : (C.protectedKeys[N] = !0));
      }
      ((C.prevProp = B),
        (C.prevResolvedValues = St),
        C.isActive && (A = { ...A, ...St }),
        u && a.blockInitialAnimation && (I = !1));
      const $ = J && F;
      I &&
        (!$ || ot) &&
        v.push(
          ...gt.map((N) => {
            const X = { type: k };
            if (
              typeof N == "string" &&
              u &&
              !$ &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: tt } = a,
                S = pi(tt, N);
              if (tt.enteringChildren && S) {
                const { delayChildren: U } = S.transition || {};
                X.delay = Hg(tt.enteringChildren, a, U);
              }
            }
            return { animation: N, options: X };
          }),
        );
    }
    if (x.size) {
      const V = {};
      if (typeof p.initial != "boolean") {
        const k = pi(a, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        k && k.transition && (V.transition = k.transition);
      }
      (x.forEach((k) => {
        const C = a.getBaseTarget(k),
          B = a.getValue(k);
        (B && (B.liveStyle = !0), (V[k] = C ?? null));
      }),
        v.push({ animation: V }));
    }
    let q = !!v.length;
    return (
      u &&
        (p.initial === !1 || p.initial === p.animate) &&
        !a.manuallyAnimateOnMount &&
        (q = !1),
      (u = !1),
      q ? i(v) : Promise.resolve()
    );
  }
  function h(m, p) {
    if (l[m].isActive === p) return Promise.resolve();
    (a.variantChildren?.forEach((v) => v.animationState?.setActive(m, p)),
      (l[m].isActive = p));
    const g = f(m);
    for (const v in l) l[v].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: f,
    setActive: h,
    setAnimateFunction: d,
    getState: () => l,
    reset: () => {
      ((l = Yp()), (u = !0));
    },
  };
}
function FS(a, i) {
  return typeof i == "string" ? i !== a : Array.isArray(i) ? !qg(i, a) : !1;
}
function pa(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Yp() {
  return {
    animate: pa(!0),
    whileInView: pa(),
    whileHover: pa(),
    whileTap: pa(),
    whileDrag: pa(),
    whileFocus: pa(),
    exit: pa(),
  };
}
class Jn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class WS extends Jn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = IS(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    gr(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: l } = this.node.prevProps || {};
    i !== l && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let tT = 0;
class eT extends Jn {
  constructor() {
    (super(...arguments), (this.id = tT++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: l } = this.node.presenceContext,
      { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === u) return;
    const c = this.node.animationState.setActive("exit", !i);
    l &&
      !i &&
      c.then(() => {
        l(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: l } = this.node.presenceContext || {};
    (l && l(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const nT = { animation: { Feature: WS }, exit: { Feature: eT } };
function _s(a, i, l, u = { passive: !0 }) {
  return (a.addEventListener(i, l, u), () => a.removeEventListener(i, l));
}
function Us(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const aT = (a) => (i) => $c(i) && a(i, Us(i));
function Es(a, i, l, u) {
  return _s(a, i, aT(l), u);
}
const Gg = 1e-4,
  iT = 1 - Gg,
  sT = 1 + Gg,
  Zg = 0.01,
  lT = 0 - Zg,
  rT = 0 + Zg;
function ue(a) {
  return a.max - a.min;
}
function uT(a, i, l) {
  return Math.abs(a - i) <= l;
}
function Hp(a, i, l, u = 0.5) {
  ((a.origin = u),
    (a.originPoint = kt(i.min, i.max, a.origin)),
    (a.scale = ue(l) / ue(i)),
    (a.translate = kt(l.min, l.max, a.origin) - a.originPoint),
    ((a.scale >= iT && a.scale <= sT) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= lT && a.translate <= rT) || isNaN(a.translate)) &&
      (a.translate = 0));
}
function js(a, i, l, u) {
  (Hp(a.x, i.x, l.x, u ? u.originX : void 0),
    Hp(a.y, i.y, l.y, u ? u.originY : void 0));
}
function qp(a, i, l) {
  ((a.min = l.min + i.min), (a.max = a.min + ue(i)));
}
function oT(a, i, l) {
  (qp(a.x, i.x, l.x), qp(a.y, i.y, l.y));
}
function Xp(a, i, l) {
  ((a.min = i.min - l.min), (a.max = a.min + ue(i)));
}
function Ms(a, i, l) {
  (Xp(a.x, i.x, l.x), Xp(a.y, i.y, l.y));
}
function ke(a) {
  return [a("x"), a("y")];
}
const Kg = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  Gp = (a, i) => Math.abs(a - i);
function cT(a, i) {
  const l = Gp(a.x, i.x),
    u = Gp(a.y, i.y);
  return Math.sqrt(l ** 2 + u ** 2);
}
class $g {
  constructor(
    i,
    l,
    {
      transformPagePoint: u,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = Jo(this.lastMoveEventInfo, this.history),
          A = this.startEvent !== null,
          w = cT(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!A && !w) return;
        const { point: q } = x,
          { timestamp: V } = ee;
        this.history.push({ ...q, timestamp: V });
        const { onStart: k, onMove: C } = this.handlers;
        (A ||
          (k && k(this.lastMoveEvent, x),
          (this.startEvent = this.lastMoveEvent)),
          C && C(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, A) => {
        ((this.lastMoveEvent = x),
          (this.lastMoveEventInfo = Po(A, this.transformPagePoint)),
          wt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, A) => {
        this.end();
        const { onEnd: w, onSessionEnd: q, resumeAnimation: V } = this.handlers;
        if (
          (this.dragSnapToOrigin && V && V(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = Jo(
          x.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Po(A, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && w && w(x, k), q && q(x, k));
      }),
      !$c(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = l),
      (this.transformPagePoint = u),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const h = Us(i),
      m = Po(h, this.transformPagePoint),
      { point: p } = m,
      { timestamp: g } = ee;
    this.history = [{ ...p, timestamp: g }];
    const { onSessionStart: v } = l;
    (v && v(i, Jo(m, this.history)),
      (this.removeListeners = zs(
        Es(this.contextWindow, "pointermove", this.handlePointerMove),
        Es(this.contextWindow, "pointerup", this.handlePointerUp),
        Es(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Qn(this.updatePoint));
  }
}
function Po(a, i) {
  return i ? { point: i(a.point) } : a;
}
function Zp(a, i) {
  return { x: a.x - i.x, y: a.y - i.y };
}
function Jo({ point: a }, i) {
  return {
    point: a,
    delta: Zp(a, Qg(i)),
    offset: Zp(a, fT(i)),
    velocity: dT(i, 0.1),
  };
}
function fT(a) {
  return a[0];
}
function Qg(a) {
  return a[a.length - 1];
}
function dT(a, i) {
  if (a.length < 2) return { x: 0, y: 0 };
  let l = a.length - 1,
    u = null;
  const c = Qg(a);
  for (; l >= 0 && ((u = a[l]), !(c.timestamp - u.timestamp > Ie(i))); ) l--;
  if (!u) return { x: 0, y: 0 };
  const d = Fe(c.timestamp - u.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - u.x) / d, y: (c.y - u.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function hT(a, { min: i, max: l }, u) {
  return (
    i !== void 0 && a < i
      ? (a = u ? kt(i, a, u.min) : Math.max(a, i))
      : l !== void 0 && a > l && (a = u ? kt(l, a, u.max) : Math.min(a, l)),
    a
  );
}
function Kp(a, i, l) {
  return {
    min: i !== void 0 ? a.min + i : void 0,
    max: l !== void 0 ? a.max + l - (a.max - a.min) : void 0,
  };
}
function mT(a, { top: i, left: l, bottom: u, right: c }) {
  return { x: Kp(a.x, l, c), y: Kp(a.y, i, u) };
}
function $p(a, i) {
  let l = i.min - a.min,
    u = i.max - a.max;
  return (
    i.max - i.min < a.max - a.min && ([l, u] = [u, l]),
    { min: l, max: u }
  );
}
function pT(a, i) {
  return { x: $p(a.x, i.x), y: $p(a.y, i.y) };
}
function yT(a, i) {
  let l = 0.5;
  const u = ue(a),
    c = ue(i);
  return (
    c > u
      ? (l = Ds(i.min, i.max - u, a.min))
      : u > c && (l = Ds(a.min, a.max - c, i.min)),
    vn(0, 1, l)
  );
}
function gT(a, i) {
  const l = {};
  return (
    i.min !== void 0 && (l.min = i.min - a.min),
    i.max !== void 0 && (l.max = i.max - a.min),
    l
  );
}
const Sc = 0.35;
function vT(a = Sc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = Sc),
    { x: Qp(a, "left", "right"), y: Qp(a, "top", "bottom") }
  );
}
function Qp(a, i, l) {
  return { min: Pp(a, i), max: Pp(a, l) };
}
function Pp(a, i) {
  return typeof a == "number" ? a : a[i] || 0;
}
const bT = new WeakMap();
class xT {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = qt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: l = !1, distanceThreshold: u } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (v) => {
        const { dragSnapToOrigin: x } = this.getProps();
        (x ? this.pauseAnimation() : this.stopAnimation(),
          l && this.snapToCursor(Us(v).point));
      },
      f = (v, x) => {
        const { drag: A, dragPropagation: w, onDragStart: q } = this.getProps();
        if (
          A &&
          !w &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = D1(A)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ke((k) => {
            let C = this.getAxisMotionValue(k).get() || 0;
            if (We.test(C)) {
              const { projection: B } = this.visualElement;
              if (B && B.layout) {
                const P = B.layout.layoutBox[k];
                P && (C = ue(P) * (parseFloat(C) / 100));
              }
            }
            this.originPoint[k] = C;
          }),
          q && wt.postRender(() => q(v, x)),
          bc(this.visualElement, "transform"));
        const { animationState: V } = this.visualElement;
        V && V.setActive("whileDrag", !0);
      },
      h = (v, x) => {
        ((this.latestPointerEvent = v), (this.latestPanInfo = x));
        const {
          dragPropagation: A,
          dragDirectionLock: w,
          onDirectionLock: q,
          onDrag: V,
        } = this.getProps();
        if (!A && !this.openDragLock) return;
        const { offset: k } = x;
        if (w && this.currentDirection === null) {
          ((this.currentDirection = ST(k)),
            this.currentDirection !== null && q && q(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, k),
          this.updateAxis("y", x.point, k),
          this.visualElement.render(),
          V && V(v, x));
      },
      m = (v, x) => {
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = x),
          this.stop(v, x),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      p = () =>
        ke(
          (v) =>
            this.getAnimationState(v) === "paused" &&
            this.getAxisMotionValue(v).animation?.play(),
        ),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new $g(
      i,
      {
        onSessionStart: d,
        onStart: f,
        onMove: h,
        onSessionEnd: m,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: u,
        contextWindow: Kg(this.visualElement),
      },
    );
  }
  stop(i, l) {
    const u = i || this.latestPointerEvent,
      c = l || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !u)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && wt.postRender(() => h(u, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: l } = this.visualElement;
    (i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: u } = this.getProps();
    (!u &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      l && l.setActive("whileDrag", !1));
  }
  updateAxis(i, l, u) {
    const { drag: c } = this.getProps();
    if (!u || !nr(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + u[i];
    (this.constraints &&
      this.constraints[i] &&
      (f = hT(f, this.constraints[i], this.elastic[i])),
      d.set(f));
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: l } = this.getProps(),
      u =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    (i && oi(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && u
        ? (this.constraints = mT(u.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = vT(l)),
      c !== this.constraints &&
        u &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ke((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = gT(u.layoutBox[d], this.constraints[d]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: l } = this.getProps();
    if (!i || !oi(i)) return !1;
    const u = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = TS(u, c.root, this.visualElement.getTransformPagePoint());
    let f = pT(c.layout.layoutBox, d);
    if (l) {
      const h = l(bS(f));
      ((this.hasMutatedConstraints = !!h), h && (f = Cg(h)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: l,
        dragMomentum: u,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: h,
      } = this.getProps(),
      m = this.constraints || {},
      p = ke((g) => {
        if (!nr(g, l, this.currentDirection)) return;
        let v = (m && m[g]) || {};
        f && (v = { min: 0, max: 0 });
        const x = c ? 200 : 1e6,
          A = c ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: u ? i[g] : 0,
            bounceStiffness: x,
            bounceDamping: A,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...v,
          };
        return this.startAxisValueAnimation(g, w);
      });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(i, l) {
    const u = this.getAxisMotionValue(i);
    return (
      bc(this.visualElement, i),
      u.start(af(i, u, 0, l, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ke((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    ke((i) => this.getAxisMotionValue(i).animation?.pause());
  }
  getAnimationState(i) {
    return this.getAxisMotionValue(i).animation?.state;
  }
  getAxisMotionValue(i) {
    const l = `_drag${i.toUpperCase()}`,
      u = this.visualElement.getProps(),
      c = u[l];
    return (
      c ||
      this.visualElement.getValue(i, (u.initial ? u.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    ke((l) => {
      const { drag: u } = this.getProps();
      if (!nr(l, u, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(l);
      if (c && c.layout) {
        const { min: f, max: h } = c.layout.layoutBox[l];
        d.set(i[l] - kt(f, h, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: l } = this.getProps(),
      { projection: u } = this.visualElement;
    if (!oi(l) || !u || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    ke((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const m = h.get();
        c[f] = yT({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      u.root && u.root.updateScroll(),
      u.updateLayout(),
      this.resolveConstraints(),
      ke((f) => {
        if (!nr(f, i, null)) return;
        const h = this.getAxisMotionValue(f),
          { min: m, max: p } = this.constraints[f];
        h.set(kt(m, p, c[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    bT.set(this.visualElement, this);
    const i = this.visualElement.current,
      l = Es(i, "pointerdown", (m) => {
        const { drag: p, dragListener: g = !0 } = this.getProps();
        p && g && this.start(m);
      }),
      u = () => {
        const { dragConstraints: m } = this.getProps();
        oi(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", u);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      wt.read(u));
    const f = _s(window, "resize", () => this.scalePositionWithinConstraints()),
      h = c.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (ke((g) => {
              const v = this.getAxisMotionValue(g);
              v &&
                ((this.originPoint[g] += m[g].translate),
                v.set(v.get() + m[g].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (f(), l(), d(), h && h());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: l = !1,
        dragDirectionLock: u = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Sc,
        dragMomentum: h = !0,
      } = i;
    return {
      ...i,
      drag: l,
      dragDirectionLock: u,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: h,
    };
  }
}
function nr(a, i, l) {
  return (i === !0 || i === a) && (l === null || l === a);
}
function ST(a, i = 10) {
  let l = null;
  return (Math.abs(a.y) > i ? (l = "y") : Math.abs(a.x) > i && (l = "x"), l);
}
class TT extends Jn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = Ue),
      (this.removeListeners = Ue),
      (this.controls = new xT(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ue));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Jp = (a) => (i, l) => {
  a && wt.postRender(() => a(i, l));
};
class AT extends Jn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ue));
  }
  onPointerDown(i) {
    this.session = new $g(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Kg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: l,
      onPan: u,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: Jp(i),
      onStart: Jp(l),
      onMove: u,
      onEnd: (d, f) => {
        (delete this.session, c && wt.postRender(() => c(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Es(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const rr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ip(a, i) {
  return i.max === i.min ? 0 : (a / (i.max - i.min)) * 100;
}
const xs = {
    correct: (a, i) => {
      if (!i.target) return a;
      if (typeof a == "string")
        if (rt.test(a)) a = parseFloat(a);
        else return a;
      const l = Ip(a, i.target.x),
        u = Ip(a, i.target.y);
      return `${l}% ${u}%`;
    },
  },
  ET = {
    correct: (a, { treeScale: i, projectionDelta: l }) => {
      const u = a,
        c = Pn.parse(a);
      if (c.length > 5) return u;
      const d = Pn.createTransformer(a),
        f = typeof c[0] != "number" ? 1 : 0,
        h = l.x.scale * i.x,
        m = l.y.scale * i.y;
      ((c[0 + f] /= h), (c[1 + f] /= m));
      const p = kt(h, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= p),
        typeof c[3 + f] == "number" && (c[3 + f] /= p),
        d(c)
      );
    },
  };
let Io = !1;
class jT extends Z.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: l,
        switchLayoutGroup: u,
        layoutId: c,
      } = this.props,
      { projection: d } = i;
    ($1(MT),
      d &&
        (l.group && l.group.add(d),
        u && u.register && c && u.register(d),
        Io && d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (rr.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: l,
        visualElement: u,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: f } = u;
    return (
      f &&
        ((f.isPresent = d),
        (Io = !0),
        c || i.layoutDependency !== l || l === void 0 || i.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              wt.postRender(() => {
                const h = f.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      Kc.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: l,
        switchLayoutGroup: u,
      } = this.props,
      { projection: c } = i;
    ((Io = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        l && l.group && l.group.remove(c),
        u && u.deregister && u.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function Pg(a) {
  const [i, l] = gg(),
    u = Z.useContext(Ec);
  return j.jsx(jT, {
    ...a,
    layoutGroup: u,
    switchLayoutGroup: Z.useContext(Rg),
    isPresent: i,
    safeToRemove: l,
  });
}
const MT = {
  borderRadius: {
    ...xs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: xs,
  borderTopRightRadius: xs,
  borderBottomLeftRadius: xs,
  borderBottomRightRadius: xs,
  boxShadow: ET,
};
function DT(a, i, l) {
  const u = le(a) ? a : yi(a);
  return (u.start(af("", u, i, l)), u.animation);
}
const NT = (a, i) => a.depth - i.depth;
class RT {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (Dc(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Nc(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(NT),
      (this.isDirty = !1),
      this.children.forEach(i));
  }
}
function OT(a, i) {
  const l = me.now(),
    u = ({ timestamp: c }) => {
      const d = c - l;
      d >= i && (Qn(u), a(d - i));
    };
  return (wt.setup(u, !0), () => Qn(u));
}
const Jg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  CT = Jg.length,
  Fp = (a) => (typeof a == "string" ? parseFloat(a) : a),
  Wp = (a) => typeof a == "number" || rt.test(a);
function _T(a, i, l, u, c, d) {
  c
    ? ((a.opacity = kt(0, l.opacity ?? 1, wT(u))),
      (a.opacityExit = kt(i.opacity ?? 1, 0, zT(u))))
    : d && (a.opacity = kt(i.opacity ?? 1, l.opacity ?? 1, u));
  for (let f = 0; f < CT; f++) {
    const h = `border${Jg[f]}Radius`;
    let m = ty(i, h),
      p = ty(l, h);
    if (m === void 0 && p === void 0) continue;
    (m || (m = 0),
      p || (p = 0),
      m === 0 || p === 0 || Wp(m) === Wp(p)
        ? ((a[h] = Math.max(kt(Fp(m), Fp(p), u), 0)),
          (We.test(p) || We.test(m)) && (a[h] += "%"))
        : (a[h] = p));
  }
  (i.rotate || l.rotate) && (a.rotate = kt(i.rotate || 0, l.rotate || 0, u));
}
function ty(a, i) {
  return a[i] !== void 0 ? a[i] : a.borderRadius;
}
const wT = Ig(0, 0.5, Uy),
  zT = Ig(0.5, 0.95, Ue);
function Ig(a, i, l) {
  return (u) => (u < a ? 0 : u > i ? 1 : l(Ds(a, i, u)));
}
function ey(a, i) {
  ((a.min = i.min), (a.max = i.max));
}
function Ve(a, i) {
  (ey(a.x, i.x), ey(a.y, i.y));
}
function ny(a, i) {
  ((a.translate = i.translate),
    (a.scale = i.scale),
    (a.originPoint = i.originPoint),
    (a.origin = i.origin));
}
function ay(a, i, l, u, c) {
  return (
    (a -= i),
    (a = dr(a, 1 / l, u)),
    c !== void 0 && (a = dr(a, 1 / c, u)),
    a
  );
}
function VT(a, i = 0, l = 1, u = 0.5, c, d = a, f = a) {
  if (
    (We.test(i) &&
      ((i = parseFloat(i)), (i = kt(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let h = kt(d.min, d.max, u);
  (a === d && (h -= i),
    (a.min = ay(a.min, i, l, h, c)),
    (a.max = ay(a.max, i, l, h, c)));
}
function iy(a, i, [l, u, c], d, f) {
  VT(a, i[l], i[u], i[c], i.scale, d, f);
}
const kT = ["x", "scaleX", "originX"],
  UT = ["y", "scaleY", "originY"];
function sy(a, i, l, u) {
  (iy(a.x, i, kT, l ? l.x : void 0, u ? u.x : void 0),
    iy(a.y, i, UT, l ? l.y : void 0, u ? u.y : void 0));
}
function ly(a) {
  return a.translate === 0 && a.scale === 1;
}
function Fg(a) {
  return ly(a.x) && ly(a.y);
}
function ry(a, i) {
  return a.min === i.min && a.max === i.max;
}
function BT(a, i) {
  return ry(a.x, i.x) && ry(a.y, i.y);
}
function uy(a, i) {
  return (
    Math.round(a.min) === Math.round(i.min) &&
    Math.round(a.max) === Math.round(i.max)
  );
}
function Wg(a, i) {
  return uy(a.x, i.x) && uy(a.y, i.y);
}
function oy(a) {
  return ue(a.x) / ue(a.y);
}
function cy(a, i) {
  return (
    a.translate === i.translate &&
    a.scale === i.scale &&
    a.originPoint === i.originPoint
  );
}
class LT {
  constructor() {
    this.members = [];
  }
  add(i) {
    (Dc(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if (
      (Nc(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const l = this.members[this.members.length - 1];
      l && this.promote(l);
    }
  }
  relegate(i) {
    const l = this.members.findIndex((c) => i === c);
    if (l === 0) return !1;
    let u;
    for (let c = l; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        u = d;
        break;
      }
    }
    return u ? (this.promote(u), !0) : !1;
  }
  promote(i, l) {
    const u = this.lead;
    if (i !== u && ((this.prevLead = u), (this.lead = i), i.show(), u)) {
      (u.instance && u.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = u),
        l && (i.resumeFrom.preserveOpacity = !0),
        u.snapshot &&
          ((i.snapshot = u.snapshot),
          (i.snapshot.latestValues = u.animationValues || u.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0));
      const { crossfade: c } = i.options;
      c === !1 && u.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: l, resumingFrom: u } = i;
      (l.onExitComplete && l.onExitComplete(),
        u && u.options.onExitComplete && u.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function YT(a, i, l) {
  let u = "";
  const c = a.x.translate / i.x,
    d = a.y.translate / i.y,
    f = l?.z || 0;
  if (
    ((c || d || f) && (u = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (u += `scale(${1 / i.x}, ${1 / i.y}) `),
    l)
  ) {
    const {
      transformPerspective: p,
      rotate: g,
      rotateX: v,
      rotateY: x,
      skewX: A,
      skewY: w,
    } = l;
    (p && (u = `perspective(${p}px) ${u}`),
      g && (u += `rotate(${g}deg) `),
      v && (u += `rotateX(${v}deg) `),
      x && (u += `rotateY(${x}deg) `),
      A && (u += `skewX(${A}deg) `),
      w && (u += `skewY(${w}deg) `));
  }
  const h = a.x.scale * i.x,
    m = a.y.scale * i.y;
  return ((h !== 1 || m !== 1) && (u += `scale(${h}, ${m})`), u || "none");
}
const Fo = ["", "X", "Y", "Z"],
  HT = 1e3;
let qT = 0;
function Wo(a, i, l, u) {
  const { latestValues: c } = i;
  c[a] && ((l[a] = c[a]), i.setStaticValue(a, 0), u && (u[a] = 0));
}
function t0(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: i } = a.options;
  if (!i) return;
  const l = Lg(i);
  if (window.MotionHasOptimisedAnimation(l, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(l, "transform", wt, !(c || d));
  }
  const { parent: u } = a;
  u && !u.hasCheckedOptimisedAppear && t0(u);
}
function e0({
  attachResizeListener: a,
  defaultParent: i,
  measureScroll: l,
  checkIsScrollRoot: u,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, h = i?.()) {
      ((this.id = qT++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(ZT),
            this.nodes.forEach(PT),
            this.nodes.forEach(JT),
            this.nodes.forEach(KT));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0));
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new RT());
    }
    addEventListener(f, h) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Cc()),
        this.eventHandlers.get(f).add(h)
      );
    }
    notifyListeners(f, ...h) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...h);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = yg(f) && !w1(f)), (this.instance = f));
      const { layoutId: h, layout: m, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || h) && (this.isLayoutDirty = !0),
        a)
      ) {
        let g,
          v = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        (wt.read(() => {
          v = window.innerWidth;
        }),
          a(f, () => {
            const A = window.innerWidth;
            A !== v &&
              ((v = A),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = OT(x, 250)),
              rr.hasAnimatedSinceResize &&
                ((rr.hasAnimatedSinceResize = !1), this.nodes.forEach(hy)));
          }));
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          p &&
          (h || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: v,
              hasRelativeLayoutChanged: x,
              layout: A,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const w =
                  this.options.transition || p.getDefaultTransition() || e2,
                { onLayoutAnimationStart: q, onLayoutAnimationComplete: V } =
                  p.getProps(),
                k = !this.targetLayout || !Wg(this.targetLayout, A),
                C = !v && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                C ||
                (v && (k || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const B = { ...Gc(w, "layout"), onPlay: q, onComplete: V };
                ((p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((B.delay = 0), (B.type = !1)),
                  this.startAnimation(B),
                  this.setAnimationOrigin(g, C));
              } else
                (v || hy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = A;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Qn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(IT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          t0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        ((v.shouldResetTransform = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1));
      }
      const { layoutId: h, layout: m } = this.options;
      if (h === void 0 && !m) return;
      const p = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = p
        ? p(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(fy));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(dy);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(QT),
            this.nodes.forEach(XT),
            this.nodes.forEach(GT))
          : this.nodes.forEach(dy),
        this.clearAllSnapshots());
      const h = me.now();
      ((ee.delta = vn(0, 1e3 / 60, h - ee.timestamp)),
        (ee.timestamp = h),
        (ee.isProcessing = !0),
        Ho.update.process(ee),
        Ho.preRender.process(ee),
        Ho.render.process(ee),
        (ee.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Kc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach($T), this.sharedNodes.forEach(FT));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        wt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      wt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ue(this.snapshot.measuredBox.x) &&
          !ue(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = qt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (h = !1),
        h && this.instance)
      ) {
        const m = u(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: l(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !Fg(this.projectionDelta),
        m = this.getTransformTemplate(),
        p = m ? m(this.latestValues, "") : void 0,
        g = p !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (h || ya(this.latestValues) || g) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let m = this.removeElementScroll(h);
      return (
        f && (m = this.removeTransform(m)),
        n2(m),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return qt();
      const h = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(a2))) {
        const { scroll: p } = this.root;
        p && (ci(h.x, p.offset.x), ci(h.y, p.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      const h = qt();
      if ((Ve(h, f), this.scroll?.wasRoot)) return h;
      for (let m = 0; m < this.path.length; m++) {
        const p = this.path[m],
          { scroll: g, options: v } = p;
        p !== this.root &&
          g &&
          v.layoutScroll &&
          (g.wasRoot && Ve(h, f), ci(h.x, g.offset.x), ci(h.y, g.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1) {
      const m = qt();
      Ve(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        (!h &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          fi(m, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          ya(g.latestValues) && fi(m, g.latestValues));
      }
      return (ya(this.latestValues) && fi(m, this.latestValues), m);
    }
    removeTransform(f) {
      const h = qt();
      Ve(h, f);
      for (let m = 0; m < this.path.length; m++) {
        const p = this.path[m];
        if (!p.instance || !ya(p.latestValues)) continue;
        pc(p.latestValues) && p.updateSnapshot();
        const g = qt(),
          v = p.measurePageBox();
        (Ve(g, v),
          sy(h, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g));
      }
      return (ya(this.latestValues) && sy(h, this.latestValues), h);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ee.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const h = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty));
      const m = !!this.resumingFrom || this !== h;
      if (
        !(
          f ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (!(!this.layout || !(g || v))) {
        if (
          ((this.resolvedRelativeTargetAt = ee.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = qt()),
              (this.relativeTargetOrigin = qt()),
              Ms(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox,
              ),
              Ve(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = qt()), (this.targetWithTransforms = qt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              oT(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ve(this.target, this.layout.layoutBox),
                wg(this.target, this.targetDelta))
              : Ve(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x &&
          !!x.resumingFrom == !!this.resumingFrom &&
          !x.options.layoutScroll &&
          x.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = qt()),
              (this.relativeTargetOrigin = qt()),
              Ms(this.relativeTargetOrigin, this.target, x.target),
              Ve(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          pc(this.parent.latestValues) ||
          _g(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === ee.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: p, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || g))
      )
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        x = this.treeScale.y;
      (SS(this.layoutCorrected, this.treeScale, this.path, h),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = qt())));
      const { target: A } = f;
      if (!A) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ny(this.prevProjectionDelta.x, this.projectionDelta.x),
          ny(this.prevProjectionDelta.y, this.projectionDelta.y)),
        js(this.projectionDelta, this.layoutCorrected, A, this.latestValues),
        (this.treeScale.x !== v ||
          this.treeScale.y !== x ||
          !cy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !cy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", A)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = di()),
        (this.projectionDelta = di()),
        (this.projectionDeltaWithTransform = di()));
    }
    setAnimationOrigin(f, h = !1) {
      const m = this.snapshot,
        p = m ? m.latestValues : {},
        g = { ...this.latestValues },
        v = di();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h));
      const x = qt(),
        A = m ? m.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        q = A !== w,
        V = this.getStack(),
        k = !V || V.members.length <= 1,
        C = !!(q && !k && this.options.crossfade === !0 && !this.path.some(t2));
      this.animationProgress = 0;
      let B;
      ((this.mixTargetDelta = (P) => {
        const G = P / 1e3;
        (my(v.x, f.x, G),
          my(v.y, f.y, G),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ms(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            WT(this.relativeTarget, this.relativeTargetOrigin, x, G),
            B && BT(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = qt()),
            Ve(B, this.relativeTarget)),
          q &&
            ((this.animationValues = g), _T(g, p, this.latestValues, G, C, k)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = G));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Qn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = wt.update(() => {
          ((rr.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = yi(0)),
            (this.currentAnimation = DT(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (h) => {
                (this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(HT),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: h,
        target: m,
        layout: p,
        latestValues: g,
      } = f;
      if (!(!h || !m || !p)) {
        if (
          this !== f &&
          this.layout &&
          p &&
          n0(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          m = this.target || qt();
          const v = ue(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + v));
          const x = ue(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + x));
        }
        (Ve(h, m),
          fi(h, g),
          js(this.projectionDeltaWithTransform, this.layoutCorrected, h, g));
      }
    }
    registerSharedNode(f, h) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new LT()),
        this.sharedNodes.get(f).add(h));
      const p = h.options.initialPromotionConfig;
      h.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: m } = {}) {
      const p = this.getStack();
      (p && p.promote(this, m),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let h = !1;
      const { latestValues: m } = f;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (h = !0),
        !h)
      )
        return;
      const p = {};
      m.z && Wo("z", f, p, this.animationValues);
      for (let g = 0; g < Fo.length; g++)
        (Wo(`rotate${Fo[g]}`, f, p, this.animationValues),
          Wo(`skew${Fo[g]}`, f, p, this.animationValues));
      f.render();
      for (const g in p)
        (f.setStaticValue(g, p[g]),
          this.animationValues && (this.animationValues[g] = p[g]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = lr(h?.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none"));
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = lr(h?.pointerEvents) || "")),
          this.hasProjected &&
            !ya(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let v = YT(this.projectionDeltaWithTransform, this.treeScale, g);
      (m && (v = m(g, v)), (f.transform = v));
      const { x, y: A } = this.projectionDelta;
      ((f.transformOrigin = `${x.origin * 100}% ${A.origin * 100}% 0`),
        p.animationValues
          ? (f.opacity =
              p === this
                ? (g.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (f.opacity =
              p === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0));
      for (const w in Cs) {
        if (g[w] === void 0) continue;
        const { correct: q, applyTo: V, isCSSVariable: k } = Cs[w],
          C = v === "none" ? g[w] : q(g[w], p);
        if (V) {
          const B = V.length;
          for (let P = 0; P < B; P++) f[V[P]] = C;
        } else
          k ? (this.options.visualElement.renderState.vars[w] = C) : (f[w] = C);
      }
      this.options.layoutId &&
        (f.pointerEvents = p === this ? lr(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(fy),
        this.root.sharedNodes.clear());
    }
  };
}
function XT(a) {
  a.updateLayout();
}
function GT(a) {
  const i = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && i && a.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: u } = a.layout,
      { animationType: c } = a.options,
      d = i.source !== a.layout.source;
    c === "size"
      ? ke((g) => {
          const v = d ? i.measuredBox[g] : i.layoutBox[g],
            x = ue(v);
          ((v.min = l[g].min), (v.max = v.min + x));
        })
      : n0(c, i.layoutBox, l) &&
        ke((g) => {
          const v = d ? i.measuredBox[g] : i.layoutBox[g],
            x = ue(l[g]);
          ((v.max = v.min + x),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[g].max = a.relativeTarget[g].min + x)));
        });
    const f = di();
    js(f, l, i.layoutBox);
    const h = di();
    d ? js(h, a.applyTransform(u, !0), i.measuredBox) : js(h, l, i.layoutBox);
    const m = !Fg(f);
    let p = !1;
    if (!a.resumeFrom) {
      const g = a.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: v, layout: x } = g;
        if (v && x) {
          const A = qt();
          Ms(A, i.layoutBox, v.layoutBox);
          const w = qt();
          (Ms(w, l, x.layoutBox),
            Wg(A, w) || (p = !0),
            g.options.layoutRoot &&
              ((a.relativeTarget = w),
              (a.relativeTargetOrigin = A),
              (a.relativeParent = g)));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: l,
      snapshot: i,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: p,
    });
  } else if (a.isLead()) {
    const { onExitComplete: l } = a.options;
    l && l();
  }
  a.options.transition = void 0;
}
function ZT(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function KT(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function $T(a) {
  a.clearSnapshot();
}
function fy(a) {
  a.clearMeasurements();
}
function dy(a) {
  a.isLayoutDirty = !1;
}
function QT(a) {
  const { visualElement: i } = a.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    a.resetTransform());
}
function hy(a) {
  (a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0));
}
function PT(a) {
  a.resolveTargetDelta();
}
function JT(a) {
  a.calcProjection();
}
function IT(a) {
  a.resetSkewAndRotation();
}
function FT(a) {
  a.removeLeadSnapshot();
}
function my(a, i, l) {
  ((a.translate = kt(i.translate, 0, l)),
    (a.scale = kt(i.scale, 1, l)),
    (a.origin = i.origin),
    (a.originPoint = i.originPoint));
}
function py(a, i, l, u) {
  ((a.min = kt(i.min, l.min, u)), (a.max = kt(i.max, l.max, u)));
}
function WT(a, i, l, u) {
  (py(a.x, i.x, l.x, u), py(a.y, i.y, l.y, u));
}
function t2(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const e2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  yy = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  gy = yy("applewebkit/") && !yy("chrome/") ? Math.round : Ue;
function vy(a) {
  ((a.min = gy(a.min)), (a.max = gy(a.max)));
}
function n2(a) {
  (vy(a.x), vy(a.y));
}
function n0(a, i, l) {
  return (
    a === "position" || (a === "preserve-aspect" && !uT(oy(i), oy(l), 0.2))
  );
}
function a2(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const i2 = e0({
    attachResizeListener: (a, i) => _s(a, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  tc = { current: void 0 },
  a0 = e0({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!tc.current) {
        const a = new i2({});
        (a.mount(window), a.setOptions({ layoutScroll: !0 }), (tc.current = a));
      }
      return tc.current;
    },
    resetTransform: (a, i) => {
      a.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  s2 = {
    pan: { Feature: AT },
    drag: { Feature: TT, ProjectionNode: a0, MeasureLayout: Pg },
  };
function by(a, i, l) {
  const { props: u } = a;
  a.animationState &&
    u.whileHover &&
    a.animationState.setActive("whileHover", l === "Start");
  const c = "onHover" + l,
    d = u[c];
  d && wt.postRender(() => d(i, Us(i)));
}
class l2 extends Jn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = N1(
        i,
        (l, u) => (by(this.node, u, "Start"), (c) => by(this.node, c, "End")),
      ));
  }
  unmount() {}
}
class r2 extends Jn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = zs(
      _s(this.node.current, "focus", () => this.onFocus()),
      _s(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function xy(a, i, l) {
  const { props: u } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    u.whileTap &&
    a.animationState.setActive("whileTap", l === "Start");
  const c = "onTap" + (l === "End" ? "" : l),
    d = u[c];
  d && wt.postRender(() => d(i, Us(i)));
}
class u2 extends Jn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = _1(
        i,
        (l, u) => (
          xy(this.node, u, "Start"),
          (c, { success: d }) => xy(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Tc = new WeakMap(),
  ec = new WeakMap(),
  o2 = (a) => {
    const i = Tc.get(a.target);
    i && i(a);
  },
  c2 = (a) => {
    a.forEach(o2);
  };
function f2({ root: a, ...i }) {
  const l = a || document;
  ec.has(l) || ec.set(l, {});
  const u = ec.get(l),
    c = JSON.stringify(i);
  return (
    u[c] || (u[c] = new IntersectionObserver(c2, { root: a, ...i })),
    u[c]
  );
}
function d2(a, i, l) {
  const u = f2(i);
  return (
    Tc.set(a, l),
    u.observe(a),
    () => {
      (Tc.delete(a), u.unobserve(a));
    }
  );
}
const h2 = { some: 0, all: 1 };
class m2 extends Jn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: l, margin: u, amount: c = "some", once: d } = i,
      f = {
        root: l ? l.current : void 0,
        rootMargin: u,
        threshold: typeof c == "number" ? c : h2[c],
      },
      h = (m) => {
        const { isIntersecting: p } = m;
        if (
          this.isInView === p ||
          ((this.isInView = p), d && !p && this.hasEnteredView)
        )
          return;
        (p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p));
        const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(),
          x = p ? g : v;
        x && x(m);
      };
    return d2(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: l } = this.node;
    ["amount", "margin", "root"].some(p2(i, l)) && this.startObserver();
  }
  unmount() {}
}
function p2({ viewport: a = {} }, { viewport: i = {} } = {}) {
  return (l) => a[l] !== i[l];
}
const y2 = {
    inView: { Feature: m2 },
    tap: { Feature: u2 },
    focus: { Feature: r2 },
    hover: { Feature: l2 },
  },
  g2 = { layout: { ProjectionNode: a0, MeasureLayout: Pg } },
  v2 = { ...nT, ...y2, ...s2, ...g2 },
  Kn = vS(v2, CS),
  xt = {
    KEYWORD: "keyword",
    TYPE: "type",
    IDENTIFIER: "identifier",
    STRING: "string",
    NUMBER: "number",
    OPERATOR: "operator",
    PUNCTUATION: "punctuation",
    COMMENT: "comment",
    WHITESPACE: "whitespace",
    NEWLINE: "newline",
    TYPE_PARAM: "typeParam",
  },
  b2 = new Set([
    "type",
    "match",
    "case",
    "class",
    "trait",
    "object",
    "def",
    "val",
    "var",
    "import",
    "package",
    "extends",
    "with",
    "override",
    "abstract",
    "sealed",
    "final",
    "private",
    "protected",
    "public",
    "if",
    "else",
    "for",
    "while",
    "do",
    "try",
    "catch",
    "finally",
    "throw",
    "return",
    "yield",
    "lazy",
    "implicit",
  ]),
  je = {
    Seq: {
      supertypes: ["Iterable"],
      subtypes: ["List", "Vector", "Array"],
      kind: "trait",
      variance: ["+"],
    },
    List: {
      supertypes: ["Seq"],
      subtypes: ["Nil"],
      kind: "sealed_trait",
      variance: ["+"],
    },
    Option: {
      supertypes: ["AnyRef"],
      subtypes: ["None", "Some"],
      kind: "sealed_trait",
      variance: ["+"],
    },
    Some: {
      supertypes: ["Option"],
      subtypes: [],
      kind: "final_class",
      variance: ["+"],
    },
    None: { supertypes: ["Option"], subtypes: [], kind: "object" },
    Vector: {
      supertypes: ["Seq"],
      subtypes: [],
      kind: "class",
      variance: ["+"],
    },
    Array: {
      supertypes: ["Seq"],
      subtypes: [],
      kind: "final_class",
      variance: ["="],
    },
    Iterable: {
      supertypes: ["AnyRef"],
      subtypes: ["Seq", "Set"],
      kind: "trait",
      variance: ["+"],
    },
    Future: {
      supertypes: ["AnyRef"],
      subtypes: [],
      kind: "trait",
      variance: ["+"],
    },
    Set: {
      supertypes: ["Iterable"],
      subtypes: ["HashSet", "TreeSet"],
      kind: "trait",
      variance: ["="],
    },
    HashSet: {
      supertypes: ["Set"],
      subtypes: [],
      kind: "class",
      variance: ["="],
    },
    TreeSet: {
      supertypes: ["Set"],
      subtypes: [],
      kind: "class",
      variance: ["="],
    },
    Nil: { supertypes: ["List"], subtypes: [], kind: "object" },
    Any: {
      supertypes: [],
      subtypes: ["AnyRef", "Null", "AnyVal"],
      kind: "trait",
    },
    AnyRef: {
      supertypes: ["Any"],
      subtypes: ["String", "Iterable"],
      kind: "trait",
    },
    AnyVal: {
      supertypes: ["Any"],
      subtypes: ["Int", "String", "Boolean", "Double"],
      kind: "trait",
    },
    Null: { supertypes: ["Any"], subtypes: [], kind: "final_class" },
    String: { supertypes: ["AnyRef"], subtypes: [], kind: "final_class" },
    Int: { supertypes: ["AnyVal"], subtypes: [], kind: "final_class" },
    Char: { supertypes: ["AnyVal"], subtypes: [], kind: "final_class" },
    Boolean: { supertypes: ["AnyVal"], subtypes: [], kind: "final_class" },
    Double: { supertypes: ["AnyVal"], subtypes: [], kind: "final_class" },
    Nothing: { supertypes: ["Any"], subtypes: [], kind: "sealed_trait" },
    Tuple: {
      supertypes: ["Any"],
      subtypes: ["EmptyTuple", "*:"],
      kind: "sealed_trait",
    },
    EmptyTuple: { supertypes: ["Tuple"], subtypes: [], kind: "object" },
    Tuple2: {
      supertypes: ["*:"],
      subtypes: [],
      kind: "final_class",
      variance: ["+", "+"],
    },
    "*:": {
      supertypes: ["Tuple"],
      subtypes: ["Tuple2"],
      kind: "final_class",
      variance: ["+", "+"],
      infix: !0,
    },
  },
  i0 = `trait Foo { type X; type Y }
type Foo_Of[X0, Y0] = Foo { type X = X0; type Y = Y0 }
type Foo_Of_X[X0] = Foo { type X = X0 }
type Foo_Of_Y[Y0] = Foo { type Y = Y0 }
type A
trait T
trait U
sealed trait S
class C
class D
class MixTraits extends T, U
class MixClassAndTrait extends C, T
final class F
object O
class Tag[Z]
object ITag extends Tag[Int]
object STag extends Tag[String]`,
  x2 = [
    {
      name: "Abstract Type vs Concrete",
      description: "Not disjoint - abstract types unpredictable",
      type1: "A",
      type2: "String",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Advanced",
      customTypes: null,
    },
    {
      name: "Two Traits",
      description: "Not disjoint - class may mix both",
      type1: "T",
      type2: "U",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Advanced",
      customTypes: null,
    },
    {
      name: "Trait vs Class",
      description: "Not disjoint - trait may mix with C child",
      type1: "T",
      type2: "C",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Advanced",
      customTypes: null,
    },
    {
      name: "Trait vs Final Class",
      description: "Disjoint - final classes can't be extended",
      type1: "T",
      type2: "F",
      expectedDisjoint: !0,
      color: "green",
      category: "Advanced",
      customTypes: null,
    },
    {
      name: "Trait vs Object",
      description: "Disjoint - objects can't be extended",
      type1: "T",
      type2: "O.type",
      expectedDisjoint: !0,
      color: "green",
      category: "Advanced",
      customTypes: null,
    },
    {
      name: "Sealed Trait vs Class",
      description: "Disjoint - sealed traits closed set",
      type1: "S",
      type2: "C",
      expectedDisjoint: !0,
      color: "green",
      category: "Advanced",
      customTypes: null,
    },
    {
      name: "Two Unrelated Classes",
      description: "Disjoint - single inheritance",
      type1: "C",
      type2: "D",
      expectedDisjoint: !0,
      color: "green",
      category: "Advanced",
      customTypes: null,
    },
    {
      name: "Subtype vs Supertype",
      description: "Not disjoint - List <: Seq",
      type1: "Seq[Int]",
      type2: "List[Int]",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Basic",
      customTypes: null,
    },
    {
      name: "Different Collection Branches",
      description: "Disjoint - different branches",
      type1: "List[Int]",
      type2: "Set[Int]",
      expectedDisjoint: !0,
      color: "green",
      category: "Basic",
      customTypes: null,
    },
    {
      name: "Different Value Types",
      description: "Disjoint - different supertypes",
      type1: "String",
      type2: "Int",
      expectedDisjoint: !0,
      color: "green",
      category: "Basic",
      customTypes: null,
    },
    {
      name: "Value Type Hierarchy",
      description: "Not disjoint - Int <: AnyVal",
      type1: "AnyVal",
      type2: "Int",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Basic",
      customTypes: null,
    },
    {
      name: "Different Set Implementations",
      description: "Disjoint - different Set impls",
      type1: "HashSet[String]",
      type2: "TreeSet[String]",
      expectedDisjoint: !0,
      color: "green",
      category: "Basic",
      customTypes: null,
    },
    {
      name: "Collection vs Implementation",
      description: "Not disjoint - Vector <: Iterable",
      type1: "Iterable[String]",
      type2: "Vector[String]",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Basic",
      customTypes: null,
    },
    {
      name: "Non-empty vs Empty Tuple",
      description: "Disjoint - non-empty vs empty",
      type1: "Int *: String *: EmptyTuple.type",
      type2: "EmptyTuple.type",
      expectedDisjoint: !0,
      color: "green",
      category: "Tuples",
      customTypes: null,
    },
    {
      name: "Tuple Constructor vs Tuple",
      description: "Not disjoint - *:[T,Ts] <: Tuple",
      type1: "Int *: EmptyTuple.type",
      type2: "Tuple",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Tuples",
      customTypes: null,
    },
    {
      name: "EmptyTuple vs Tuple",
      description: "Not disjoint - EmptyTuple <: Tuple",
      type1: "EmptyTuple.type",
      type2: "Tuple",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Tuples",
      customTypes: null,
    },
    {
      name: "Different Tuple Element Types",
      description: "Disjoint - covariant tuple elements differ",
      type1: "(String, Int)",
      type2: "(Int, String)",
      expectedDisjoint: !0,
      color: "green",
      category: "Tuples",
      customTypes: null,
    },
    {
      name: "Tuple Second Element Differs",
      description: "Disjoint - second elements differ",
      type1: "(String, String)",
      type2: "(String, Int)",
      expectedDisjoint: !0,
      color: "green",
      category: "Tuples",
      customTypes: null,
    },
    {
      name: "Constructor Tuples with Different Heads",
      description: "Disjoint - heads differ",
      type1: "String *: Int *: EmptyTuple.type",
      type2: "Int *: String *: EmptyTuple.type",
      expectedDisjoint: !0,
      color: "green",
      category: "Tuples",
      customTypes: null,
    },
    {
      name: "Singleton None.type vs Option[Nothing]",
      description: "Not disjoint - None.type <: Option[Nothing]",
      type1: "None.type",
      type2: "Option[Nothing]",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Singleton Types",
      customTypes: null,
    },
    {
      name: "Singleton Nil.type vs List[Nothing]",
      description: "Not disjoint - Nil.type <: List[Nothing]",
      type1: "Nil.type",
      type2: "List[Nothing]",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Singleton Types",
      customTypes: null,
    },
    {
      name: "Singleton None.type vs Some[Int]",
      description: "Disjoint - different Option subtypes",
      type1: "None.type",
      type2: "Some[Int]",
      expectedDisjoint: !0,
      color: "green",
      category: "Singleton Types",
      customTypes: null,
    },
    {
      name: "Different String Literals",
      description: "Disjoint - different string literals",
      type1: '"hello"',
      type2: '"world"',
      expectedDisjoint: !0,
      color: "green",
      category: "Literal Types",
      customTypes: null,
    },
    {
      name: "Different Number Literals",
      description: "Disjoint - different number literals",
      type1: "23",
      type2: "42",
      expectedDisjoint: !0,
      color: "green",
      category: "Literal Types",
      customTypes: null,
    },
    {
      name: "String Literal vs String Type",
      description: "Not disjoint - string literal <: String",
      type1: '"hello"',
      type2: "String",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Literal Types",
      customTypes: null,
    },
    {
      name: "Number Literal vs Int Type",
      description: "Not disjoint - number literal <: Int",
      type1: "42",
      type2: "Int",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Literal Types",
      customTypes: null,
    },
    {
      name: "Union of Two Types",
      description: "Not disjoint - Int overlaps",
      type1: "String | Int",
      type2: "Int | Null",
      expectedDisjoint: !1,
      color: "yellow",
      category: "Union Types",
      customTypes: null,
    },
  ],
  S2 = [
    {
      name: "Identity",
      description: "Return the argument",
      invocation: "Id[Int]",
      cases: "case T => T",
      color: "green",
      category: "Basic",
    },
    {
      name: "Tuple Unpack",
      description: "Match refinement types against type alias patterns",
      invocation: "Unpack[(ITag.type, STag.type)]",
      cases: "case (Tag[x], Tag[y]) => (x, y)",
      color: "green",
      category: "Basic",
    },
    {
      name: "Refinement Type Matching",
      description: "Match refinement types against type alias patterns",
      invocation: "ExtractX[Foo { type X = String; type Y = Int }]",
      cases: "case Foo_Of_X[x] => x",
      color: "green",
      category: "Basic",
    },
    {
      name: "Element Type",
      description: "Extract element type from collection-like things",
      invocation: "Elem[Some[Int]]",
      cases: `case EmptyTuple.type => Nothing
case String => Char
case Seq[x] => x
case Option[x] => x`,
      color: "green",
      category: "Basic",
    },
    {
      name: "ListOrVec",
      description: "Extract the first element of a tuple",
      invocation: "ListOrVec[List[Int]]",
      cases: `case List[?] => "list"
case Vector[?] => "vector"`,
      color: "amber",
      category: "Disjointness",
    },
    {
      name: "IntLit",
      description: "compare to specific integer literals",
      invocation: "IntLit[42]",
      cases: `case 42 => "meaning of life"
case T => "unknown"`,
      color: "amber",
      category: "Disjointness",
    },
    {
      name: "Leaf Elem",
      description: "Recursively find the last element in a Option type",
      invocation: "LeafElem[Option[Option[Option[Int]]]]",
      cases: `case Option[x] => LeafElem[x]
case T => T`,
      color: "purple",
      category: "Recursive",
    },
    {
      name: "Last Tuple Element",
      description: "Recursively find the last element in a tuple type",
      invocation: "Last[Int *: String *: Boolean *: EmptyTuple.type]",
      cases: `case x *: EmptyTuple.type => x
case _ *: xs => Last[xs]`,
      color: "purple",
      category: "Recursive",
    },
    {
      name: "Type Alias: Illegal Multiple Bindings",
      description: "Foo_Of binds two type members X and Y, which is illegal",
      invocation: 'ExtractBoth[Foo { type X = 23; type Y = "abc" }]',
      cases: "case Foo_Of[x, y] => x",
      color: "red",
      category: "Type Alias",
    },
    {
      name: "Illegal: Nested in Invariant",
      description:
        "Array is invariant, so nested patterns in Array[_] are illegal",
      invocation: "BadArray[Array[List[String]]]",
      cases: "case Array[List[x]] => x",
      color: "red",
      category: "Illegal",
    },
    {
      name: "Illegal: Union Pattern with Binding",
      description: "Union patterns cannot bind type parameters",
      invocation: "StripNull[String]",
      cases: "case a | Null => a",
      color: "red",
      category: "Illegal",
    },
    {
      name: "Illegal: Intersection Pattern with Binding",
      description: "Intersection patterns cannot bind type parameters",
      invocation: "MixesString[String]",
      cases: "case a & String => a",
      color: "red",
      category: "Illegal",
    },
  ];
function sf(a) {
  const i = [];
  let l = 0;
  const u = a.length;
  for (; l < u; ) {
    const c = a[l];
    if (c === " " || c === "	") {
      let d = l;
      for (; l < u && (a[l] === " " || a[l] === "	"); ) l++;
      i.push({ type: xt.WHITESPACE, value: a.slice(d, l) });
      continue;
    }
    if (
      c ===
      `
`
    ) {
      (i.push({
        type: xt.NEWLINE,
        value: `
`,
      }),
        l++);
      continue;
    }
    if (c === "/" && l + 1 < u && a[l + 1] === "/") {
      let d = l;
      for (
        ;
        l < u &&
        a[l] !==
          `
`;

      )
        l++;
      i.push({ type: xt.COMMENT, value: a.slice(d, l) });
      continue;
    }
    if (c === '"') {
      let d = l;
      for (l++; l < u && a[l] !== '"'; )
        a[l] === "\\" && l + 1 < u ? (l += 2) : l++;
      (l < u && l++, i.push({ type: xt.STRING, value: a.slice(d, l) }));
      continue;
    }
    if (c >= "0" && c <= "9") {
      let d = l;
      for (; l < u && ((a[l] >= "0" && a[l] <= "9") || a[l] === "."); ) l++;
      i.push({ type: xt.NUMBER, value: a.slice(d, l) });
      continue;
    }
    if (c === "*" && l + 1 < u && a[l + 1] === ":") {
      (i.push({ type: xt.OPERATOR, value: "*:" }), (l += 2));
      continue;
    }
    if (c === "<" && l + 1 < u && a[l + 1] === ":") {
      (i.push({ type: xt.OPERATOR, value: "<:" }), (l += 2));
      continue;
    }
    if (c === ">" && l + 1 < u && a[l + 1] === ":") {
      (i.push({ type: xt.OPERATOR, value: ">:" }), (l += 2));
      continue;
    }
    if (c === "=" && l + 1 < u && a[l + 1] === ">") {
      (i.push({ type: xt.OPERATOR, value: "=>" }), (l += 2));
      continue;
    }
    if (c === "-" && l + 1 < u && a[l + 1] === ">") {
      (i.push({ type: xt.OPERATOR, value: "->" }), (l += 2));
      continue;
    }
    if (c === "?" && l + 2 < u && a[l + 1] === "?" && a[l + 2] === "?") {
      (i.push({ type: xt.OPERATOR, value: "???" }), (l += 3));
      continue;
    }
    if ("[()]".includes(c)) {
      (i.push({ type: xt.KEYWORD, value: c }), l++);
      continue;
    }
    if ("|&]},".includes(c)) {
      (i.push({ type: xt.PUNCTUATION, value: c }), l++);
      continue;
    }
    if (c === ":") {
      (i.push({ type: xt.PUNCTUATION, value: ":" }), l++);
      continue;
    }
    if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || c === "_") {
      let d = l;
      for (
        ;
        l < u &&
        ((a[l] >= "a" && a[l] <= "z") ||
          (a[l] >= "A" && a[l] <= "Z") ||
          (a[l] >= "0" && a[l] <= "9") ||
          a[l] === "_");

      )
        l++;
      const f = a.slice(d, l);
      b2.has(f)
        ? i.push({ type: xt.KEYWORD, value: f })
        : je[f]
          ? i.push({ type: xt.TYPE, value: f })
          : f === "_"
            ? i.push({ type: xt.KEYWORD, value: f })
            : f.length === 1 && f >= "a" && f <= "z"
              ? i.push({ type: xt.TYPE_PARAM, value: f })
              : i.push({ type: xt.IDENTIFIER, value: f });
      continue;
    }
    (i.push({ type: xt.PUNCTUATION, value: c }), l++);
  }
  return i;
}
function hr(a, i, l) {
  switch (a.type) {
    case xt.KEYWORD:
      return `<span style="color:${i.keyword};">${a.value}</span>`;
    case xt.TYPE:
      return `<span style="color:${i.type};font-weight:bold;">${a.value}</span>`;
    case xt.IDENTIFIER:
      return l.has(a.value)
        ? `<span style="color:${i.type};font-weight:bold;">${a.value}</span>`
        : a.value;
    case xt.STRING:
      return `<span style="color:${i.string};">${a.value}</span>`;
    case xt.NUMBER:
      return `<span style="color:${i.number};">${a.value}</span>`;
    case xt.OPERATOR:
      return a.value === "*:"
        ? `<span style="color:${i.operator};font-weight:bold;">${a.value}</span>`
        : `<span style="color:${i.operator};">${a.value}</span>`;
    case xt.PUNCTUATION:
      return `<span style="color:${i.punctuation};">${a.value}</span>`;
    case xt.COMMENT:
      return `<span style="color:${i.comment};font-style:italic;">${a.value}</span>`;
    case xt.TYPE_PARAM:
      return `<span style="color:${i.typeParam};font-style:italic;">${a.value}</span>`;
    case xt.NEWLINE:
      return "<br>";
    case xt.WHITESPACE:
    default:
      return a.value.replace(/ /g, "&nbsp;");
  }
}
function T2(a, i, l = []) {
  const u = new Set(l);
  let c = "";
  for (const d of a) c += hr(d, i, u);
  return c;
}
function A2(a, i, l = null, u = []) {
  return a == null
    ? ""
    : a
        .split(
          `
`,
        )
        .map((f, h) => {
          if (f.trim() === "") return "<div><br></div>";
          if (l && l.activeIndex === h)
            return `<div>${E2(f, i, u, l.highlightRHS)}</div>`;
          {
            const m = sf(f),
              p = new Set(u);
            let g = "";
            for (const v of m) g += hr(v, i, p);
            return `<div>${g}</div>`;
          }
        })
        .join("");
}
function E2(a, i, l, u) {
  const c = new Set(l),
    d = sf(a);
  let f = -1;
  for (let v = 0; v < d.length; v++)
    if (
      d[v].type === xt.OPERATOR &&
      (d[v].value === "=>" || d[v].value === "⇒")
    ) {
      f = v;
      break;
    }
  const h = new Array(d.length).fill(!1);
  let m = !1;
  for (let v = 0; v < d.length; v++) {
    const x = d[v];
    x.type === xt.KEYWORD && x.value === "case"
      ? ((m = !0), (h[v] = !1))
      : f !== -1
        ? u
          ? (h[v] = v > f)
          : (h[v] = m && v < f)
        : u
          ? (h[v] = !1)
          : (h[v] = m || !m);
  }
  let p = "",
    g = 0;
  for (; g < d.length; ) {
    const v = d[g];
    if (h[g]) {
      const x = g;
      for (; g < d.length && h[g]; ) g++;
      const A = g;
      let w = "";
      for (let q = x; q < A; q++) w += hr(d[q], i, c);
      p += `<span style="background-color:${i.stepHighlight};padding:0 4px;border-radius:4px;">${w}</span>`;
    } else ((p += hr(v, i, c)), g++);
  }
  return p;
}
const j2 = {
    keyword: "#ff79c6",
    type: "#8be9fd",
    string: "#f1fa8c",
    number: "#bd93f9",
    operator: "#ff79c6",
    comment: "#6272a4",
    typeParam: "#50fa7b",
    punctuation: "#f8f8f2",
    stepHighlight: "rgba(234, 179, 8, 0.3)",
  },
  M2 = {
    keyword: "#418FB2",
    type: "#3470C1",
    string: "#984782ff",
    number: "#005cc5",
    operator: "#7235C8",
    comment: "#6a737d",
    typeParam: "#3470C1",
    punctuation: "#24292e",
    stepHighlight: "#fcd593ff",
  };
function s0(a) {
  return a ? j2 : M2;
}
function ar(a, i = !1, l = []) {
  if (a == null) return "";
  const u = s0(i),
    c = sf(a);
  return T2(c, u, l);
}
function D2(a, i = !1, l = null, u = []) {
  if (a == null) return "";
  const c = s0(i);
  return A2(a, c, l, u);
}
const ws = ({
  value: a,
  onChange: i,
  placeholder: l,
  className: u = "",
  rows: c = 5,
  language: d = "scala",
  isDark: f = !1,
  stepHighlighting: h = null,
  matchTypeName: m = null,
  userDefinedTypes: p = [],
  readOnly: g = !1,
  style: v = {},
  ...x
}) => {
  const A = Z.useRef(null),
    [w, q] = Z.useState(!1),
    [V, k] = Z.useState(!1),
    C = Z.useMemo(() => {
      const nt = [...p];
      return (m && nt.push(m), nt);
    }, [m, p]),
    B = (nt) => {
      i && i({ target: { value: nt } });
    },
    P = () => {
      const nt = A.current;
      if (!nt) return;
      const bt = a || "",
        zt = bt ? D2(bt, f, h, C) : "";
      nt.innerHTML !== zt && (nt.innerHTML = zt || "");
    },
    G = (nt) => {
      if (!nt) return "";
      let bt = "";
      const zt = nt.childNodes;
      for (let $ = 0; $ < zt.length; $++) {
        const D = zt[$];
        (D.nodeType === Node.ELEMENT_NODE &&
          D.tagName.toLowerCase() === "div" &&
          $ > 0 &&
          (bt += `
`),
          (bt += D.textContent || ""));
      }
      return bt;
    };
  Z.useEffect(() => {
    const nt = A.current;
    if (!nt) return;
    const bt = G(nt);
    if (a !== bt) {
      w ? (nt.textContent = a) : P();
      return;
    }
    (!w || h) && P();
  }, [a, f, h, w, C]);
  const J = () => {
      if (g || V) return;
      const nt = A.current;
      if (!nt) return;
      let bt = "";
      const zt = nt.childNodes;
      for (let $ = 0; $ < zt.length; $++) {
        const D = zt[$];
        (D.nodeType === Node.ELEMENT_NODE &&
          D.tagName.toLowerCase() === "div" &&
          $ > 0 &&
          (bt += `
`),
          (bt += D.textContent || ""));
      }
      B(bt);
    },
    F = () => {
      if (g) {
        A.current?.blur();
        return;
      }
      q(!0);
      const nt = A.current;
      if (nt) {
        const bt = nt.textContent || "";
        nt.innerHTML.includes("<span") && (nt.textContent = bt);
      }
    },
    I = () => {
      (q(!1), setTimeout(P, 0));
    },
    ot = (nt) => {
      if (g) {
        nt.preventDefault();
        return;
      }
      nt.preventDefault();
      const bt = (nt.clipboardData || window.clipboardData).getData("text");
      document.execCommand("insertText", !1, bt);
    },
    gt = (nt) => {
      if (g) {
        nt.preventDefault();
        return;
      }
      nt.key === "Tab" &&
        (nt.preventDefault(), document.execCommand("insertText", !1, "  "));
    },
    St = c ? `${c * 1.5}rem` : void 0;
  return j.jsx("div", {
    ref: A,
    role: "textbox",
    "aria-multiline": "true",
    contentEditable: !0,
    suppressContentEditableWarning: !0,
    onInput: J,
    onFocus: F,
    onBlur: I,
    onPaste: ot,
    onKeyDown: gt,
    onCompositionStart: () => k(!0),
    onCompositionEnd: () => k(!1),
    className: `w-full p-3 rounded-lg border border-transparent font-mono text-sm whitespace-pre-wrap caret-emerald-400 selection:bg-emerald-600/30 outline-none ${f ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} ${u}`,
    style: { tabSize: 2, minHeight: St, ...v },
    "data-language": d,
    placeholder: l,
    ...x,
  });
};
function gn({
  code: a,
  isDark: i = !1,
  highlightedSubstring: l = null,
  userDefinedTypes: u = [],
  className: c = "",
}) {
  const d = ar(a || "", i, u);
  if (!l || !a)
    return j.jsx("span", {
      className: `font-mono ${c}`,
      dangerouslySetInnerHTML: { __html: d },
    });
  const f = a.indexOf(l);
  if (f === -1)
    return j.jsx("span", {
      className: `font-mono ${c}`,
      dangerouslySetInnerHTML: { __html: d },
    });
  const h = a.slice(0, f),
    m = a.slice(f, f + l.length),
    p = a.slice(f + l.length),
    g = ar(h, i, u),
    v = ar(m, i, u),
    x = ar(p, i, u);
  return j.jsxs("span", {
    className: `font-mono ${c}`,
    children: [
      j.jsx("span", { dangerouslySetInnerHTML: { __html: g } }),
      j.jsx("span", {
        className: "bg-orange-200 dark:bg-yellow-600/30 px-1 rounded",
        dangerouslySetInnerHTML: { __html: v },
      }),
      j.jsx("span", { dangerouslySetInnerHTML: { __html: x } }),
    ],
  });
}
function N2({
  steps: a,
  index: i,
  setIndex: l,
  showDisjointnessSteps: u,
  setShowDisjointnessSteps: c,
}) {
  const d = Z.useMemo(() => (u ? a : a.filter((x) => !x.isDisjoint)), [a, u]),
    f = Z.useMemo(() => {
      if (u) return a.map((x, A) => A);
      {
        const x = [];
        for (let A = 0; A < a.length; A++) a[A].isDisjoint || x.push(A);
        return x;
      }
    }, [a, u]),
    h = Z.useMemo(() => f.findIndex((x) => x === i), [f, i]),
    m = () => {
      const x = h;
      if (x > 0) {
        const A = f[x - 1];
        l(A);
      }
    },
    p = () => {
      const x = h;
      if (x < d.length - 1) {
        const A = f[x + 1];
        l(A);
      }
    },
    g = (x) => {
      const A = Number(x.target.value),
        w = f[A];
      l(w);
    },
    v = a.some((x) => x.isDisjoint);
  return j.jsxs(Kn.div, {
    layout: !0,
    className: "p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg",
    children: [
      j.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          j.jsx("div", {
            className: "font-medium text-gray-700 dark:text-gray-200",
            children: "Timeline",
          }),
          j.jsx("div", {
            className: "text-sm text-gray-500 dark:text-gray-300",
            children:
              d.length === 0 ? "0/0" : `${Math.max(1, h + 1)}/${d.length}`,
          }),
        ],
      }),
      j.jsxs("div", {
        className: "mt-3 flex items-center justify-between",
        children: [
          j.jsxs("label", {
            className: "flex items-center cursor-pointer",
            children: [
              j.jsx("input", {
                type: "checkbox",
                checked: u,
                onChange: (x) => c(x.target.checked),
                className:
                  "mr-2 w-3 h-3 text-indigo-600 rounded focus:ring-indigo-500 focus:ring-1",
              }),
              j.jsx("span", {
                className: "text-xs text-gray-500 dark:text-gray-400",
                children: "Show disjointness steps",
              }),
            ],
          }),
          v &&
            j.jsxs("span", {
              className: "text-xs text-gray-400 dark:text-gray-500",
              children: [a.filter((x) => x.isDisjoint).length, " hidden"],
            }),
        ],
      }),
      j.jsxs("div", {
        className: "mt-3 flex gap-2",
        children: [
          j.jsx("button", {
            onClick: m,
            disabled: d.length === 0 || h <= 0,
            className: `flex-1 px-3 py-2 rounded-lg border ${d.length === 0 || h <= 0 ? "border-gray-200 text-gray-400 bg-gray-50 dark:border-gray-700 dark:text-gray-500 dark:bg-gray-800 cursor-not-allowed" : "border-gray-300 text-gray-700 bg-white dark:border-gray-600 dark:text-gray-100 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"}`,
            children: "Prev",
          }),
          j.jsx("button", {
            onClick: p,
            disabled: d.length === 0 || h >= d.length - 1,
            className: `flex-1 px-3 py-2 rounded-lg ${d.length === 0 || h >= d.length - 1 ? "bg-gray-400 text-gray-300 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}`,
            children: "Next",
          }),
        ],
      }),
      j.jsx("input", {
        type: "range",
        min: 0,
        max: Math.max(0, d.length - 1),
        value: Math.max(0, h),
        onChange: g,
        className: "w-full mt-3",
      }),
    ],
  });
}
function R2(a) {
  const i = a
      .split(/\n/)
      .map((f) => f.trim())
      .filter(Boolean),
    l = {},
    u = {};
  function c(f) {
    if (!f) return [];
    const h = f.replace(/^extends\s+/, "");
    return h.includes(",")
      ? h
          .split(/\s*,\s+/)
          .map((m) => m.trim())
          .filter(Boolean)
      : h
          .split(/\s+with\s+/)
          .map((m) => m.trim())
          .filter(Boolean);
  }
  function d(f) {
    if (!f) return {};
    const h = f.replace(/^{\s*/, "").replace(/\s*}$/, ""),
      m = {};
    if (h.trim()) {
      const p = h
        .split(/;/)
        .map((g) => g.trim())
        .filter(Boolean);
      for (const g of p) {
        const v = g.match(/^type\s+([A-Za-z_][A-Za-z0-9_]*)(?:\s*=\s*(.+))?$/);
        if (v) {
          const x = v[1],
            A = v[2];
          m[x] = A || null;
        }
      }
    }
    return m;
  }
  for (const f of i)
    if (!f.startsWith("//")) {
      if (
        f.match(
          /^type\s+([A-Za-z_][A-Za-z0-9_]*)\s*\[([^\]]+)\]\s*=\s*([A-Za-z_][A-Za-z0-9_]*)\s*\{([^}]+)\}\s*$/,
        )
      ) {
        const h = f.match(
            /^type\s+([A-Za-z_][A-Za-z0-9_]*)\s*\[([^\]]+)\]\s*=\s*([A-Za-z_][A-Za-z0-9_]*)\s*\{([^}]+)\}\s*$/,
          ),
          m = h[1],
          p = h[2].split(",").map((A) => A.trim()),
          g = h[3],
          v = h[4],
          x = d(`{${v}}`);
        u[m] = {
          typeParams: p,
          baseType: g,
          typeMembers: x,
          kind: "type_alias",
        };
      } else if (
        f.match(
          /^type\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+.+))?\s*$/,
        )
      ) {
        const h = f.match(
            /^type\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+.+))?\s*$/,
          ),
          m = h[1],
          p = h[2],
          g = h[3],
          v = p ? p.split(",").map((A) => A.trim()) : [],
          x = c(g);
        l[m] = {
          supertypes: x.length > 0 ? x : ["Any"],
          subtypes: [],
          typeParams: v,
          kind: "type",
        };
      } else if (
        f.match(
          /^trait\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+[^{]+?))?\s*$/,
        )
      ) {
        const h = f.match(
            /^trait\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+[^{]+?))?\s*$/,
          ),
          m = h[1],
          p = h[2],
          g = h[3],
          v = p ? p.split(",").map((A) => A.trim()) : [],
          x = c(g);
        l[m] = {
          supertypes: x.length > 0 ? x : ["AnyRef"],
          subtypes: [],
          typeParams: v,
          kind: "trait",
        };
      } else if (
        f.match(
          /^trait\s+([A-Za-z_][A-Za-z0-9_]*)(?:\s+(extends\s+[^{]+?))?\s*\{([^}]*)\}\s*$/,
        )
      ) {
        const h = f.match(
            /^trait\s+([A-Za-z_][A-Za-z0-9_]*)(?:\s+(extends\s+[^{]+?))?\s*\{([^}]*)\}\s*$/,
          ),
          m = h[1],
          p = h[2],
          g = h[3],
          v = c(p),
          x = d(`{${g}}`);
        l[m] = {
          supertypes: v.length > 0 ? v : ["AnyRef"],
          subtypes: [],
          typeMembers: x,
          kind: "trait",
        };
      } else if (
        f.match(
          /^sealed\s+trait\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+.+))?\s*$/,
        )
      ) {
        const h = f.match(
            /^sealed\s+trait\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+.+))?\s*$/,
          ),
          m = h[1],
          p = h[2],
          g = h[3],
          v = p ? p.split(",").map((A) => A.trim()) : [],
          x = c(g);
        l[m] = {
          supertypes: x.length > 0 ? x : ["AnyRef"],
          subtypes: [],
          typeParams: v,
          kind: "sealed_trait",
        };
      } else if (
        f.match(
          /^class\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+.+))?\s*$/,
        )
      ) {
        const h = f.match(
            /^class\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+.+))?\s*$/,
          ),
          m = h[1],
          p = h[2],
          g = h[3],
          v = p ? p.split(",").map((A) => A.trim()) : [],
          x = c(g);
        l[m] = {
          supertypes: x.length > 0 ? x : ["AnyRef"],
          subtypes: [],
          typeParams: v,
          kind: "class",
        };
      } else if (
        f.match(
          /^final\s+class\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+.+))?\s*$/,
        )
      ) {
        const h = f.match(
            /^final\s+class\s+([A-Za-z_][A-Za-z0-9_]*)(?:\[([^\]]+)\])?(?:\s+(extends\s+.+))?\s*$/,
          ),
          m = h[1],
          p = h[2],
          g = h[3],
          v = p ? p.split(",").map((A) => A.trim()) : [],
          x = c(g);
        l[m] = {
          supertypes: x.length > 0 ? x : ["AnyRef"],
          subtypes: [],
          typeParams: v,
          kind: "final_class",
        };
      } else if (
        f.match(/^object\s+([A-Za-z_][A-Za-z0-9_]*)(?:\s+(extends\s+.+))?\s*$/)
      ) {
        const h = f.match(
            /^object\s+([A-Za-z_][A-Za-z0-9_]*)(?:\s+(extends\s+.+))?\s*$/,
          ),
          m = h[1],
          p = h[2],
          g = c(p);
        l[m] = {
          supertypes: g.length > 0 ? g : ["AnyRef"],
          subtypes: [],
          typeParams: [],
          kind: "object",
        };
      }
    }
  return { types: l, aliases: u };
}
function O2(a = {}) {
  const i = { ...je },
    l = a.types || a;
  for (const [u, c] of Object.entries(l)) {
    i[u] = {
      supertypes: [...c.supertypes],
      subtypes: [...c.subtypes],
      kind: c.kind,
      typeParams: c.typeParams || [],
    };
    for (const d of c.supertypes)
      i[d] && (i[d].subtypes.includes(u) || i[d].subtypes.push(u));
  }
  return i;
}
function Ta(a, i, l = je) {
  if (a === i) return !0;
  const u = l[a];
  return u
    ? u.supertypes.includes(i)
      ? !0
      : u.supertypes.some((c) => Ta(c, i, l))
    : !1;
}
function mr(a) {
  return a.kind === "Infix"
    ? { kind: "Ident", name: a.op, args: [a.left, a.right] }
    : a;
}
function Sy(a) {
  return a
    ? a.kind === "Ident" || a.kind === "ScrutineeRef"
      ? a.name
      : a.kind === "SingletonType"
        ? a.objectName
        : a.kind === "StringLiteral"
          ? "String"
          : a.kind === "NumberLiteral"
            ? "Int"
            : a.kind === "Capture" ||
                a.kind === "Union" ||
                a.kind === "Intersect"
              ? null
              : a.kind === "Infix"
                ? a.op
                : null
    : null;
}
function C2(a, i) {
  const l = i[a];
  if (!l || l.kind !== "object") return null;
  if (a === "None")
    return {
      kind: "Ident",
      name: "Option",
      args: [{ kind: "Ident", name: "Nothing", args: [] }],
    };
  if (a === "Nil")
    return {
      kind: "Ident",
      name: "List",
      args: [{ kind: "Ident", name: "Nothing", args: [] }],
    };
  if (a === "EmptyTuple") return { kind: "Ident", name: "Tuple", args: [] };
  for (const u of l.supertypes)
    if (
      !(u === "AnyRef" || u === "Any") &&
      u.includes("[") &&
      u.includes("]")
    ) {
      const c = u.match(/^([A-Za-z_][A-Za-z0-9_]*)\[(.+)\]$/);
      if (c) {
        const d = c[1],
          h = c[2]
            .split(",")
            .map((m) => ({ kind: "Ident", name: m.trim(), args: [] }));
        return { kind: "Ident", name: d, args: h };
      }
    }
  return null;
}
function $n(a, i, l = je) {
  if (!a || !i) return !1;
  if (
    (a.kind === "StringLiteral" && i.kind === "Ident" && i.name === "String") ||
    (a.kind === "NumberLiteral" && i.kind === "Ident" && i.name === "Int")
  )
    return !0;
  const u = mr(a),
    c = mr(i);
  if (u.kind === "SingletonType") {
    const d = C2(u.objectName, l);
    if (d) return $n(d, c, l);
    const f = { kind: "Ident", name: u.objectName, args: [] };
    return $n(f, c, l);
  }
  if (u.kind === "Ident" && c.kind === "Ident") {
    if (u.name === c.name) {
      const d = u.args || [],
        f = c.args || [];
      if (d.length !== f.length) return !1;
      for (let h = 0; h < d.length; h++) {
        const m = lf(u.name, h, l);
        if (m === "+") {
          if (!$n(d[h], f[h], l)) return !1;
        } else if (m === "-") {
          if (!$n(f[h], d[h], l)) return !1;
        } else if (!$n(d[h], f[h], l) || !$n(f[h], d[h], l)) return !1;
      }
      return !0;
    }
    return Ta(u.name, c.name, l);
  }
  return !1;
}
function Ty(a, i) {
  const l = i[a];
  return (l && l.kind) || "unknown";
}
function _2(a, i = je) {
  const l = i[a];
  return l && l.infix === !0;
}
function lf(a, i, l) {
  const u = l[a];
  return u && u.variance && i < u.variance.length ? u.variance[i] : "=";
}
function hi(a, i, l = je) {
  if (!a || !i)
    return {
      disjoint: !1,
      reason: "Cannot determine disjointness for null types",
    };
  if (a.kind === "Capture" || i.kind === "Capture")
    return {
      disjoint: !1,
      reason: "Cannot determine disjointness for type variables",
    };
  if (a.kind === "StringLiteral" && i.kind === "StringLiteral")
    return a.value === i.value
      ? { disjoint: !1, reason: "Same string literal" }
      : {
          disjoint: !0,
          reason: `Different string literals: ${a.value} vs ${i.value}`,
        };
  if (a.kind === "NumberLiteral" && i.kind === "NumberLiteral")
    return a.value === i.value
      ? { disjoint: !1, reason: "Same number literal" }
      : {
          disjoint: !0,
          reason: `Different number literals: ${a.value} vs ${i.value}`,
        };
  if (a.kind === "Union" && i.kind === "Union") {
    for (const v of a.types)
      for (const x of i.types) {
        const A = hi(v, x, l);
        if (!A.disjoint)
          return {
            disjoint: !1,
            reason: `Union components overlap: ${se(v)} and ${se(x)} are not disjoint (${A.reason})`,
          };
      }
    return {
      disjoint: !0,
      reason: "All union components are pairwise disjoint",
    };
  }
  if (a.kind === "Union") {
    for (const v of a.types) {
      const x = hi(v, i, l);
      if (!x.disjoint)
        return {
          disjoint: !1,
          reason: `Union component ${se(v)} overlaps with ${se(i)} (${x.reason})`,
        };
    }
    return {
      disjoint: !0,
      reason: "All union components are disjoint from the other type",
    };
  }
  if (i.kind === "Union") {
    for (const v of i.types) {
      const x = hi(a, v, l);
      if (!x.disjoint)
        return {
          disjoint: !1,
          reason: `${se(a)} overlaps with union component ${se(v)} (${x.reason})`,
        };
    }
    return {
      disjoint: !0,
      reason: "Type is disjoint from all union components",
    };
  }
  if (a.kind === "StringLiteral" && i.kind === "Ident" && i.name === "String")
    return { disjoint: !1, reason: "String literal is a subtype of String" };
  if (i.kind === "StringLiteral" && a.kind === "Ident" && a.name === "String")
    return { disjoint: !1, reason: "String literal is a subtype of String" };
  if (a.kind === "NumberLiteral" && i.kind === "Ident" && i.name === "Int")
    return { disjoint: !1, reason: "Number literal is a subtype of Int" };
  if (i.kind === "NumberLiteral" && a.kind === "Ident" && a.name === "Int")
    return { disjoint: !1, reason: "Number literal is a subtype of Int" };
  if (
    (a.kind === "StringLiteral" || a.kind === "NumberLiteral") &&
    i.kind === "Ident" &&
    i.name !== "String" &&
    i.name !== "Int"
  )
    return {
      disjoint: !0,
      reason: `Literal type is disjoint from unrelated type ${i.name}`,
    };
  if (
    (i.kind === "StringLiteral" || i.kind === "NumberLiteral") &&
    a.kind === "Ident" &&
    a.name !== "String" &&
    a.name !== "Int"
  )
    return {
      disjoint: !0,
      reason: `Literal type is disjoint from unrelated type ${a.name}`,
    };
  if (
    (a.kind === "StringLiteral" && i.kind === "NumberLiteral") ||
    (a.kind === "NumberLiteral" && i.kind === "StringLiteral")
  )
    return {
      disjoint: !0,
      reason: "String literals and number literals are disjoint",
    };
  const u = mr(a),
    c = mr(i);
  if ($n(u, c, l)) return { disjoint: !1, reason: `${se(a)} <: ${se(i)}` };
  if ($n(c, u, l)) return { disjoint: !1, reason: `${se(i)} <: ${se(a)}` };
  if (
    u.kind === "Ident" &&
    c.kind === "Ident" &&
    u.name === c.name &&
    (u.args || []).length > 0 &&
    (c.args || []).length > 0
  ) {
    const v = u.args || [],
      x = c.args || [];
    if (v.length === x.length) {
      for (let A = 0; A < v.length; A++)
        if (lf(u.name, A, l) === "+") {
          const q = hi(v[A], x[A], l);
          if (q.disjoint)
            return {
              disjoint: !0,
              reason: `${u.name} type arguments are disjoint: ${q.reason}`,
            };
        }
      return {
        disjoint: !1,
        reason: `${u.name} structures match and corresponding elements are not provably disjoint`,
      };
    }
  }
  const d = Sy(a),
    f = Sy(i);
  if (!d || !f)
    return {
      disjoint: !1,
      reason: "Cannot determine disjointness for complex types",
    };
  if (d === f) return { disjoint: !1, reason: "Same type constructor" };
  const h = Ty(d, l),
    m = Ty(f, l);
  if (h === "type" || m === "type")
    return {
      disjoint: !1,
      reason:
        "Abstract types (type aliases) cannot be proven disjoint - they may be instantiated with any concrete type",
    };
  if (h === "trait" && m === "trait")
    return {
      disjoint: !1,
      reason: "Traits cannot be proven disjoint - a class may mix both traits",
    };
  if ((h === "trait" && m === "class") || (h === "class" && m === "trait"))
    return {
      disjoint: !1,
      reason:
        "Trait and class cannot be proven disjoint - the trait may be mixed into a child of the class",
    };
  if (
    (h === "trait" && m === "final_class") ||
    (h === "final_class" && m === "trait")
  ) {
    const v = h === "trait" ? d : f,
      x = h === "final_class" ? d : f;
    return Ta(x, v, l)
      ? {
          disjoint: !1,
          reason: `Final class ${x} already extends/mixes trait ${v}`,
        }
      : {
          disjoint: !0,
          reason: `Trait ${v} and final class ${x} are disjoint - final classes cannot be extended to mix new traits`,
        };
  }
  if (
    (h === "sealed_trait" && m === "class") ||
    (h === "class" && m === "sealed_trait")
  )
    return {
      disjoint: !0,
      reason:
        "Sealed trait and class are disjoint - sealed traits have a closed set of implementations",
    };
  if (h === "class" && m === "class")
    return {
      disjoint: !0,
      reason: "Different classes are disjoint - Scala has single inheritance",
    };
  if (h === "final_class" && m === "final_class")
    return {
      disjoint: !0,
      reason:
        "Different final classes are disjoint - they cannot be extended or mixed",
    };
  if (
    (h === "final_class" && m === "class") ||
    (h === "class" && m === "final_class")
  )
    return {
      disjoint: !0,
      reason:
        "Final class and regular class are disjoint - final classes cannot extend other classes",
    };
  if (h === "sealed_trait" && m === "sealed_trait")
    return {
      disjoint: !0,
      reason:
        "Different sealed traits are disjoint - each has a closed set of implementations",
    };
  if (h === "object" || m === "object")
    return {
      disjoint: !0,
      reason:
        "Objects that don't share a common supertype are disjoint as they are final.",
    };
  const g = Object.keys(l).filter((v) => Ta(v, d, l) && Ta(v, f, l));
  return g.length > 1 || (g.length === 1 && g[0] !== "Nothing")
    ? { disjoint: !1, reason: `Share common subtypes: ${g.join(", ")}` }
    : {
        disjoint: !0,
        reason:
          "No subtype relationship and no common subtypes (except Nothing)",
      };
}
function se(a, i = !1) {
  if (!a) return "null";
  switch (a.kind) {
    case "Ident":
      if (a.args && a.args.length > 0) {
        if (_2(a.name, je) && a.args.length === 2)
          return `${se(a.args[0], !0)} ${a.name} ${se(a.args[1], !0)}`;
        const l = "[" + a.args.map(() => "?").join(", ") + "]";
        return a.name + l;
      }
      return i ? "?" : a.name;
    case "Capture":
      return "?";
    case "Wildcard":
      return "?";
    case "Infix":
      return `${se(a.left, !0)} ${a.op} ${se(a.right, !0)}`;
    case "Union":
      return a.types.map((l) => se(l, i)).join(" | ");
    case "Intersect":
      return a.types.map((l) => se(l, i)).join(" & ");
    case "StringLiteral":
      return a.value;
    case "NumberLiteral":
      return a.value;
    case "SingletonType":
      return `${a.objectName}.type`;
    default:
      return a.kind || "unknown";
  }
}
function w2(a) {
  const i = [],
    l =
      /\s*("([^"])*"|[0-9]+\.?[0-9]*|=\u003e|-\u003e|\*:\s*|\*\:|\*:|\*|[A-Za-z_][A-Za-z0-9_]*\.type|\.|[A-Za-z_][A-Za-z0-9_]*|\||\&|\[|\]|\{|\}|;|=|,|\(|\)|_|\?|\u003c:|\u003e:)/g;
  let u;
  for (; (u = l.exec(a)) !== null; ) {
    const c = u[1].trim();
    c && i.push(c);
  }
  return i;
}
function ga(a, i = je, l = !1) {
  if (!a || !a.trim()) return null;
  const u = w2(a);
  let c = 0;
  function d() {
    return u[c];
  }
  function f() {
    return u[c++];
  }
  function h() {
    const v = d();
    if (!v) return null;
    if (v === "(") {
      f();
      const A = [];
      if (d() && d() !== ")")
        for (A.push(g()); d() === ","; )
          (f(), d() && d() !== ")" && A.push(g()));
      if ((d() === ")" && f(), A.length === 2))
        return { kind: "Ident", name: "Tuple2", args: A };
      if (A.length === 1) return A[0];
      if (A.length === 0) return { kind: "Ident", name: "Unit", args: [] };
      {
        let w = { kind: "Ident", name: "EmptyTuple", args: [] };
        for (let q = A.length - 1; q >= 0; q--)
          w = { kind: "Infix", op: "*:", left: A[q], right: w };
        return w;
      }
    }
    if (v === "_") return (f(), { kind: "Wildcard", token: "_" });
    if (v === "?") return (f(), { kind: "Wildcard", token: "?" });
    if (v.startsWith('"') && v.endsWith('"'))
      return { kind: "StringLiteral", value: f() };
    if (/^[0-9]+\.?[0-9]*$/.test(v))
      return { kind: "NumberLiteral", value: f() };
    if (v.endsWith(".type"))
      return { kind: "SingletonType", objectName: f().slice(0, -5) };
    const x = f();
    if (d() === "[") {
      f();
      const A = [];
      for (; d() && d() !== "]"; ) (A.push(g()), d() === "," && f());
      return (d() === "]" && f(), { kind: "Ident", name: x, args: A });
    }
    if (d() === "{") {
      f();
      const A = {};
      for (; d() && d() !== "}"; )
        if (d() === "type") {
          f();
          const w = f();
          if (d() === "=") {
            f();
            const q = g();
            A[w] = q;
          } else A[w] = null;
          d() === ";" && f();
        } else f();
      return (
        d() === "}" && f(),
        { kind: "RefinementType", baseType: x, typeMembers: A }
      );
    }
    return x === "T" && !i.T
      ? l
        ? { kind: "Ident", name: x, args: [] }
        : { kind: "ScrutineeRef", name: x }
      : /^[a-z]/.test(x)
        ? { kind: "Capture", name: x }
        : { kind: "Ident", name: x, args: [] };
  }
  function m() {
    let v = h();
    if (d() === "*:") {
      const x = f(),
        A = m();
      return { kind: "Infix", op: x, left: v, right: A };
    }
    return v;
  }
  function p() {
    let v = m();
    for (; d() === "&"; ) {
      f();
      const x = m();
      v.kind === "Intersect"
        ? v.types.push(x)
        : (v = { kind: "Intersect", types: [v, x] });
    }
    return v;
  }
  function g() {
    let v = p();
    for (; d() === "|"; ) {
      f();
      const x = p();
      v.kind === "Union"
        ? v.types.push(x)
        : (v = { kind: "Union", types: [v, x] });
    }
    return v;
  }
  return g();
}
function yt(a) {
  if (!a) return "";
  switch (a.kind) {
    case "Ident":
      return !a.args || a.args.length === 0
        ? a.name
        : a.name === "Tuple2" && a.args.length === 2
          ? `(${yt(a.args[0])}, ${yt(a.args[1])})`
          : `${a.name}[${a.args.map(yt).join(", ")}]`;
    case "RefinementType":
      const i = Object.entries(a.typeMembers).map(([l, u]) =>
        u === null ? `type ${l}` : `type ${l} = ${yt(u)}`,
      );
      return `${a.baseType} { ${i.join("; ")} }`;
    case "Union":
      return a.types.map(yt).join(" | ");
    case "Intersect":
      return a.types.map(yt).join(" & ");
    case "Capture":
      return a.name;
    case "ScrutineeRef":
      return a.name;
    case "Wildcard":
      return a.token || "_";
    case "StringLiteral":
      return a.value;
    case "NumberLiteral":
      return a.value;
    case "SingletonType":
      return `${a.objectName}.type`;
    case "Infix":
      return `${yt(a.left)} *: ${yt(a.right)}`;
    default:
      return JSON.stringify(a);
  }
}
function z2({ current: a, index: i, dark: l, allUserDefinedTypes: u }) {
  return j.jsx(Y1, {
    mode: "wait",
    children: j.jsxs(
      Kn.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.28 },
        className: "p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg",
        children: [
          j.jsx("div", {
            className: "font-medium text-gray-700 dark:text-gray-200 mb-2",
            children: "Current step",
          }),
          a
            ? j.jsxs("div", {
                children: [
                  j.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      j.jsx("div", {
                        className:
                          "text-sm text-gray-500 dark:text-gray-300 mb-1",
                        children: a.title,
                      }),
                      a.isDisjoint &&
                        j.jsx("span", {
                          className:
                            "px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full",
                          children: "✓ Disjoint",
                        }),
                      a.isError &&
                        !a.isFatal &&
                        j.jsx("span", {
                          className:
                            "px-2 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full",
                          children: "⚠ Pattern Issue",
                        }),
                      a.isIllegalPattern &&
                        j.jsx("span", {
                          className:
                            "px-2 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full",
                          children: "✗ Illegal Pattern",
                        }),
                    ],
                  }),
                  j.jsx("div", {
                    className: `p-3 rounded text-sm break-words overflow-wrap-anywhere ${a.isError ? (a.isFatal ? "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100 border-2 border-red-300 dark:border-red-700" : "bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100 border border-red-200 dark:border-red-800") : a.isDisjoint ? "bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100 border border-green-200 dark:border-green-800" : "bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"}`,
                    children: j.jsx(gn, {
                      code: a.desc,
                      isDark: l,
                      userDefinedTypes: u,
                    }),
                  }),
                  a.bindings &&
                    Object.keys(a.bindings).length > 0 &&
                    j.jsxs("div", {
                      className: "mt-3",
                      children: [
                        j.jsx("div", {
                          className:
                            "text-xs text-gray-500 dark:text-gray-300 mb-2",
                          children: "Bindings",
                        }),
                        j.jsx("div", {
                          className: "grid grid-cols-1 gap-2",
                          children: Object.keys(a.bindings).map((c) =>
                            j.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-2 rounded",
                                children: [
                                  j.jsx("div", {
                                    className: "font-mono text-xs",
                                    children: j.jsx(gn, {
                                      code: c,
                                      isDark: l,
                                      userDefinedTypes: u,
                                      className:
                                        "text-gray-700 dark:text-gray-200",
                                    }),
                                  }),
                                  j.jsx("div", {
                                    className: "font-mono text-xs",
                                    children: j.jsx(gn, {
                                      code: yt(a.bindings[c]),
                                      isDark: l,
                                      userDefinedTypes: u,
                                      className:
                                        "text-gray-900 dark:text-gray-100",
                                    }),
                                  }),
                                ],
                              },
                              c,
                            ),
                          ),
                        }),
                      ],
                    }),
                  a.resultAST &&
                    j.jsxs("div", {
                      className: "mt-3",
                      children: [
                        j.jsx("div", {
                          className:
                            "text-xs text-gray-500 dark:text-gray-300 mb-1",
                          children: "Result",
                        }),
                        j.jsx("div", {
                          className:
                            "p-2 rounded bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100",
                          children: j.jsx(gn, {
                            code: yt(a.resultAST),
                            isDark: l,
                            userDefinedTypes: u,
                          }),
                        }),
                      ],
                    }),
                ],
              })
            : j.jsx("div", {
                className: "text-sm text-gray-500",
                children: "No steps yet. Click Evaluate.",
              }),
        ],
      },
      i,
    ),
  });
}
function Ay(a, i, l) {
  const u = l[a];
  if (!u || u.kind !== "object") return null;
  if (a === "None" && i === "Option")
    return {
      kind: "Ident",
      name: "Option",
      args: [{ kind: "Ident", name: "Nothing", args: [] }],
    };
  if (a === "Nil" && i === "List")
    return {
      kind: "Ident",
      name: "List",
      args: [{ kind: "Ident", name: "Nothing", args: [] }],
    };
  if (a === "EmptyTuple" && i === "Tuple")
    return { kind: "Ident", name: "Tuple", args: [] };
  for (const c of u.supertypes)
    if (!(c === "AnyRef" || c === "Any")) {
      if (c.includes("[") && c.includes("]")) {
        const d = c.match(/^([A-Za-z_][A-Za-z0-9_]*)\[(.+)\]$/);
        if (d && d[1] === i) {
          const f = d[1],
            m = d[2]
              .split(",")
              .map((p) => ({ kind: "Ident", name: p.trim(), args: [] }));
          return { kind: "Ident", name: f, args: m };
        }
      } else if (c === i) return { kind: "Ident", name: i, args: [] };
    }
  return null;
}
const V2 = "⇒";
function He(a, i, l = {}, u = je, c = {}) {
  if (!i) return { success: !1 };
  if (i.kind === "Wildcard")
    return { success: !0, bindings: l, matchedNode: a };
  if (i.kind === "Capture") {
    const d = { ...l };
    return ((d[i.name] = a), { success: !0, bindings: d, matchedNode: a });
  }
  if (i.kind === "ScrutineeRef")
    return { success: !0, bindings: l, matchedNode: a };
  if (i.kind === "StringLiteral")
    return a && a.kind === "StringLiteral" && a.value === i.value
      ? { success: !0, bindings: l, matchedNode: a }
      : { success: !1 };
  if (i.kind === "NumberLiteral")
    return a && a.kind === "NumberLiteral" && a.value === i.value
      ? { success: !0, bindings: l, matchedNode: a }
      : { success: !1 };
  if (i.kind === "Union")
    if (a && a.kind === "Union") {
      for (const d of a.types) {
        let f = !1;
        for (const h of i.types)
          if (He(d, h, l, u, c).success) {
            f = !0;
            break;
          }
        if (!f) return { success: !1 };
      }
      return { success: !0, bindings: l, matchedNode: a };
    } else {
      for (const d of i.types) {
        const f = He(a, d, l, u, c);
        if (f.success) return f;
      }
      return { success: !1 };
    }
  if (i.kind === "Intersect") {
    let d = { ...l };
    for (const f of i.types) {
      const h = He(a, f, d, u, c);
      if (!h.success) return { success: !1 };
      d = { ...h.bindings };
    }
    return { success: !0, bindings: d, matchedNode: a };
  }
  if (a && a.kind === "SingletonType") {
    if (i.kind === "Ident" && i.args && i.args.length > 0) {
      const f = Ay(a.objectName, i.name, u);
      if (f && f.args !== void 0) {
        let h = { ...l };
        const m = i.args || [],
          p = f.args || [];
        if (m.length === p.length) {
          for (let g = 0; g < m.length; g++) {
            const v = He(p[g], m[g], h, u, c);
            if (!v.success) return { success: !1 };
            h = { ...v.bindings };
          }
          return { success: !0, bindings: h, matchedNode: a };
        }
      } else if (Ta(a.objectName, i.name, u)) {
        const h = Ay(a.objectName, i.name, u);
        if (h && h.args !== void 0) {
          let m = { ...l };
          const p = i.args || [],
            g = h.args || [];
          if (p.length === g.length) {
            for (let v = 0; v < p.length; v++) {
              const x = He(g[v], p[v], m, u, c);
              if (!x.success) return { success: !1 };
              m = { ...x.bindings };
            }
            return { success: !0, bindings: m, matchedNode: a };
          }
        }
      }
    }
    const d = { kind: "Ident", name: a.objectName, args: [] };
    return He(d, i, l, u, c);
  }
  if (i.kind === "SingletonType")
    return a && a.kind === "SingletonType" && a.objectName === i.objectName
      ? { success: !0, bindings: l, matchedNode: a }
      : a &&
          a.kind === "Ident" &&
          a.name === i.objectName &&
          (!a.args || a.args.length === 0)
        ? { success: !0, bindings: l, matchedNode: a }
        : { success: !1 };
  if (i.kind === "Ident") {
    if (l[i.name]) {
      const m = l[i.name];
      return JSON.stringify(a) === JSON.stringify(m)
        ? { success: !0, bindings: l, matchedNode: a }
        : { success: !1 };
    }
    if (/^[A-Z]/.test(i.name) && !u[i.name] && !c[i.name]) {
      const m = { ...l };
      return ((m[i.name] = a), { success: !0, bindings: m, matchedNode: a });
    }
    if (a && (a.kind === "StringLiteral" || a.kind === "NumberLiteral")) {
      const m = a.kind === "StringLiteral" ? "String" : "Int";
      if (i.name === m && (!i.args || i.args.length === 0))
        return { success: !0, bindings: l, matchedNode: a };
    }
    if (c[i.name] && a && a.kind === "RefinementType") {
      const m = c[i.name];
      if (m.baseType !== a.baseType) return { success: !1 };
      const p = i.args || [],
        g = m.typeParams || [];
      if (p.length !== g.length) return { success: !1 };
      let v = { ...l };
      for (let x = 0; x < g.length; x++) {
        g[x];
        const A = p[x],
          w = Object.keys(m.typeMembers)[x];
        if (!a.typeMembers[w]) return { success: !1 };
        const q = a.typeMembers[w],
          V = He(q, A, v, u, c);
        if (!V.success) return { success: !1 };
        v = { ...V.bindings };
      }
      return { success: !0, bindings: v, matchedNode: a };
    }
    if (!a || a.kind !== "Ident") return { success: !1 };
    if (!Ta(a.name, i.name, u)) return { success: !1 };
    const d = i.args || [],
      f = a.args || [];
    if (d.length !== f.length) return { success: !1 };
    let h = { ...l };
    for (let m = 0; m < d.length; m++) {
      const p = He(f[m], d[m], h, u, c);
      if (!p.success) return { success: !1 };
      h = { ...p.bindings };
    }
    return { success: !0, bindings: h, matchedNode: a };
  }
  if (i.kind === "Infix") {
    if (!a || a.kind !== "Infix") return { success: !1 };
    if (a.op !== i.op) return { success: !1 };
    const d = He(a.left, i.left, l, u, c);
    if (!d.success) return { success: !1 };
    const f = He(a.right, i.right, d.bindings, u, c);
    return f.success
      ? { success: !0, bindings: f.bindings, matchedNode: a }
      : { success: !1 };
  }
  return JSON.stringify(a) === JSON.stringify(i)
    ? { success: !0, bindings: l, matchedNode: a }
    : { success: !1 };
}
function yn(a, i) {
  if (!a) return a;
  switch (a.kind) {
    case "Capture":
      return i[a.name] ? yn(i[a.name], i) : a;
    case "ScrutineeRef":
      return i[a.name] ? yn(i[a.name], i) : a;
    case "StringLiteral":
      return a;
    case "NumberLiteral":
      return a;
    case "Ident":
      return i[a.name]
        ? yn(i[a.name], i)
        : {
            kind: "Ident",
            name: a.name,
            args: (a.args || []).map((l) => yn(l, i)),
          };
    case "Union":
      return { kind: "Union", types: a.types.map((l) => yn(l, i)) };
    case "Intersect":
      return { kind: "Intersect", types: a.types.map((l) => yn(l, i)) };
    case "SingletonType":
      return a;
    case "Infix":
      return {
        kind: "Infix",
        op: a.op,
        left: yn(a.left, i),
        right: yn(a.right, i),
      };
    default:
      return a;
  }
}
function Ey(a, i, l = 40, u = je, c = null) {
  const d = [];
  let f = 0;
  function h(p) {
    if (f++ > l)
      return (
        d.push({
          title: "Max recursion depth",
          desc: `Exceeded max recursion (${l})`,
        }),
        { result: { kind: "Ident", name: "Unknown", args: [] } }
      );
    if (!p || p.kind !== "Ident")
      return (
        d.push({
          title: "Not a match-type invocation",
          desc: yt(p),
          resultAST: p,
        }),
        { result: p }
      );
    const g = i[p.name];
    if (!g)
      return (
        d.push({ title: "No match-type defined", desc: yt(p), resultAST: p }),
        { result: p }
      );
    const v = p.args && p.args[0] ? p.args[0] : null;
    if (c)
      for (let A = 0; A < g.cases.length; A++) {
        const [w, q] = g.cases[A],
          V = c(w, u, 0, g.typeAliases || {});
        if (!V.legal)
          return (
            d.push({
              title: `Illegal pattern (case ${A + 1})`,
              desc: `Pattern ${yt(w)} is illegal: ${V.reason}.`,
              ast: v,
              pattern: w,
              result: q,
              caseIndex: A,
              isError: !0,
              isFatal: !0,
              isIllegalPattern: !0,
            }),
            { result: null }
          );
      }
    d.push({
      title: `Evaluate ${p.name}`,
      desc: `Scrutinee: ${yt(v)}`,
      ast: v,
    });
    const x = { T: v };
    for (let A = 0; A < g.cases.length; A++) {
      const [w, q] = g.cases[A];
      d.push({
        title: `Try case ${A + 1}`,
        desc: `${yt(w)} ${V2} ${yt(q)}`,
        ast: v,
        pattern: w,
        result: q,
        caseIndex: A,
      });
      const V = He(v, w, x, u, g.typeAliases || {});
      if (V.success) {
        const k = Object.keys(V.bindings);
        d.push({
          title: `Pattern matched (case ${A + 1})`,
          desc: `Bindings: ${k.join(", ")}`,
          bindings: V.bindings,
          matchedNode: V.matchedNode,
          caseIndex: A,
        });
        const C = yn(q, V.bindings);
        return (
          d.push({
            title: "Substitute RHS",
            desc: yt(C),
            resultAST: C,
            matchedNode: V.matchedNode,
            caseIndex: A,
          }),
          C.kind === "Ident" && i[C.name]
            ? (d.push({
                title: "Recurse into nested match-type",
                desc: yt(C),
                matchedNode: V.matchedNode,
                caseIndex: A,
              }),
              h(C))
            : { result: C, finalCaseIndex: A }
        );
      } else {
        const k = hi(v, w, u);
        if (k.disjoint)
          d.push({
            title: `Pattern disjoint (case ${A + 1})`,
            desc: `${yt(w)} is provably disjoint from ${yt(v)} - ${k.reason}`,
            ast: v,
            caseIndex: A,
            isDisjoint: !0,
          });
        else
          return (
            d.push({
              title: `Match type evaluation error (case ${A + 1})`,
              desc: `${yt(w)} did not match ${yt(v)} but types are not provably disjoint (${k.reason}).`,
              ast: v,
              caseIndex: A,
              isError: !0,
              isFatal: !0,
            }),
            { result: null }
          );
      }
    }
    return (
      d.push({
        title: "No case matched",
        desc: `No pattern matched scrutinee ${yt(v)}, will not reduce`,
        resultAST: p,
        caseIndex: null,
      }),
      { result: p }
    );
  }
  const m = h(a);
  if (m && m.result) {
    let p;
    for (let g = d.length - 1; g >= 0; g--)
      if (d[g].caseIndex !== void 0) {
        p = d[g].caseIndex;
        break;
      }
    d.push({
      title: "Final result",
      desc: yt(m.result),
      resultAST: m.result,
      caseIndex: p,
    });
  }
  return d;
}
function jy(a) {
  try {
    return JSON.stringify(a, null, 2);
  } catch {
    return String(a);
  }
}
function k2(a, i) {
  const l = a.length === 0 ? a : a[0].toLowerCase() + a.slice(1),
    u = i.map((c) => {
      const d = yt(c.pattern),
        f = yt(c.result);
      return `  case t: ${d} => ??? : ${f}`;
    });
  return `def ${l}[T](t: T): ${a}[T] = t match
${u.join(`
`)}`;
}
function U2(a, i) {
  const l = i[a];
  if (!l)
    return {
      legal: !0,
      reason: "Unknown type treated as abstract type constructor",
    };
  const u = l.kind;
  return u === "class" || u === "final_class" || u === "sealed_trait"
    ? { legal: !0, reason: "Class type constructor" }
    : u === "type"
      ? { legal: !0, reason: "Abstract type constructor" }
      : u === "trait"
        ? { legal: !0, reason: "Trait type constructor" }
        : u === "object"
          ? { legal: !0, reason: "Object (singleton type)" }
          : a === "S"
            ? {
                legal: !0,
                reason: "scala.compiletime.ops.int.S type constructor",
              }
            : { legal: !0, reason: "Built-in type constructor" };
}
function mi(a, i = je, l = {}) {
  if (!a) return null;
  switch (a.kind) {
    case "Capture":
      return a.name;
    case "Ident":
      if (/^[A-Z]/.test(a.name) && !i[a.name] && !l[a.name]) return a.name;
      if (a.args)
        for (const u of a.args) {
          const c = mi(u, i, l);
          if (c) return c;
        }
      return null;
    case "Union":
    case "Intersect":
      for (const u of a.types) {
        const c = mi(u, i, l);
        if (c) return c;
      }
      return null;
    case "Infix":
      return mi(a.left, i, l) || mi(a.right, i, l);
    default:
      return null;
  }
}
function Je(a, i = je, l = {}) {
  if (!a) return !1;
  switch (a.kind) {
    case "Capture":
      return !0;
    case "Ident":
      return /^[A-Z]/.test(a.name) && !i[a.name] && !l[a.name]
        ? !0
        : a.args
          ? a.args.some((u) => Je(u, i, l))
          : !1;
    case "Union":
    case "Intersect":
      return a.types.some((u) => Je(u, i, l));
    case "Infix":
      return Je(a.left, i, l) || Je(a.right, i, l);
    case "StringLiteral":
    case "NumberLiteral":
    case "SingletonType":
    case "Wildcard":
    case "ScrutineeRef":
      return !1;
    default:
      return !1;
  }
}
function Pe(a, i = je, l = 0, u = {}) {
  if (!a) return { legal: !1, reason: "Null pattern" };
  if (a.kind === "Ident" && (!a.args || a.args.length === 0))
    return { legal: !0, reason: "Simple type pattern" };
  if (a.kind === "Capture") return { legal: !0, reason: "Type capture" };
  if (a.kind === "Wildcard") return { legal: !0, reason: "Wildcard pattern" };
  if (a.kind === "ScrutineeRef")
    return { legal: !0, reason: "Scrutinee reference" };
  if (a.kind === "StringLiteral")
    return { legal: !0, reason: "String literal pattern" };
  if (a.kind === "NumberLiteral")
    return { legal: !0, reason: "Number literal pattern" };
  if (a.kind === "SingletonType")
    return { legal: !0, reason: "Singleton type pattern" };
  if (a.kind === "Ident" && a.args && a.args.length > 0) {
    const c = a.name,
      d = a.args;
    if (u[c]) {
      u[c];
      let h = 0;
      for (const m of d) Je(m, i, u) && h++;
      if (h > 1)
        return {
          legal: !1,
          reason: `Type alias pattern ${c}[...] contains multiple type member bindings (${h}). Only one type member binding is allowed per pattern.`,
        };
      for (let m = 0; m < d.length; m++) {
        const p = d[m];
        let g = l === 0 ? 1 : l + 1;
        if (p.kind === "Capture") {
          if (g >= 2)
            return {
              legal: !1,
              reason: `Pattern contains unaccounted type parameter \`${p.name}\``,
            };
          continue;
        }
        if (Je(p, i, u)) {
          if (g >= 2)
            return {
              legal: !1,
              reason: `Nested pattern ${yt(p)} contains unaccounted type parameters`,
            };
          const v = Pe(p, i, g, u);
          if (!v.legal) return v;
        }
      }
      return {
        legal: !0,
        reason: `Type alias pattern ${c}[...] with valid type member bindings`,
      };
    }
    const f = U2(c, i);
    if (!f.legal)
      return {
        legal: !1,
        reason: `Type constructor ${c} is not pattern-legal: ${f.reason}`,
      };
    for (let h = 0; h < d.length; h++) {
      const m = d[h],
        p = lf(c, h, i);
      let g;
      if (
        (p === "+" && l === 0
          ? (g = 0)
          : p === "=" && l === 0
            ? (g = 1)
            : (g = l + 1),
        m.kind === "Capture")
      ) {
        if (g >= 2)
          return {
            legal: !1,
            reason: `Pattern contains unaccounted type parameter \`${m.name}\``,
          };
        continue;
      }
      if (!(m.kind === "Ident" && (!m.args || m.args.length === 0))) {
        if (m.kind === "Ident" && m.args && m.args.length > 0) {
          if (Je(m, i, u) && g >= 2)
            return {
              legal: !1,
              reason: `Nested pattern ${yt(m)} contains unaccounted type parameters`,
            };
          const v = Pe(m, i, g, u);
          if (!v.legal) return { legal: !1, reason: v.reason };
        }
        if (
          m.kind === "Union" ||
          m.kind === "Intersect" ||
          m.kind === "Infix"
        ) {
          if (Je(m, i, u) && g >= 2)
            return {
              legal: !1,
              reason: `Complex pattern ${yt(m)} contains unaccounted type parameters`,
            };
          const v = Pe(m, i, g, u);
          if (!v.legal)
            return {
              legal: !1,
              reason: `Complex pattern is illegal: ${v.reason}`,
            };
        }
      }
    }
    return {
      legal: !0,
      reason: `Applied pattern ${c}[...] with legal arguments`,
    };
  }
  if (a.kind === "Infix") {
    if (a.op === "*:") {
      const c = Pe(a.left, i, 0, u);
      if (!c.legal)
        return {
          legal: !1,
          reason: `Left side of *: pattern illegal: ${c.reason}`,
        };
      const d = Pe(a.right, i, 0, u);
      return d.legal
        ? { legal: !0, reason: "Infix *: pattern with legal operands" }
        : {
            legal: !1,
            reason: `Right side of *: pattern illegal: ${d.reason}`,
          };
    }
    return { legal: !0, reason: `Infix pattern with operator ${a.op}` };
  }
  if (a.kind === "Union") {
    for (const c of a.types)
      if (Je(c, i, u))
        return {
          legal: !1,
          reason: `Pattern contains unaccounted type parameter \`${mi(c, i, u)}\` - union patterns cannot bind type parameters`,
        };
    for (const c of a.types) {
      const d = Pe(c, i, l, u);
      if (!d.legal)
        return { legal: !1, reason: `Union component illegal: ${d.reason}` };
    }
    return { legal: !0, reason: "Union pattern with all legal components" };
  }
  if (a.kind === "Intersect") {
    for (const c of a.types)
      if (Je(c, i, u))
        return {
          legal: !1,
          reason: `Pattern contains unaccounted type parameter \`${mi(c, i, u)}\` - intersection patterns cannot bind type parameters`,
        };
    for (const c of a.types) {
      const d = Pe(c, i, l, u);
      if (!d.legal)
        return {
          legal: !1,
          reason: `Intersection component illegal: ${d.reason}`,
        };
    }
    return {
      legal: !0,
      reason: "Intersection pattern with all legal components",
    };
  }
  return { legal: !1, reason: `Unknown pattern kind: ${a.kind}` };
}
function B2({
  invocationText: a,
  setInvocationText: i,
  casesText: l,
  setCasesText: u,
  steps: c,
  setSteps: d,
  index: f,
  setIndex: h,
  parsedInvocation: m,
  invocationDefinition: p,
  currentScrutineeStr: g,
  parsedCases: v,
  current: x,
  activeCaseIndex: A,
  customTypeDefinitions: w,
  mergedTypeHierarchy: q,
  allUserDefinedTypes: V,
  dark: k,
  showDependentMethod: C,
  setShowDependentMethod: B,
  showDisjointnessSteps: P,
  setShowDisjointnessSteps: G,
  run: J,
  runToResult: F,
  resetState: I,
  loadExample: ot,
}) {
  function gt($, D = new Set(), N = !1) {
    if (!$) return D;
    switch ($.kind) {
      case "Ident":
        ((N && $.name === "T") || D.add($.name),
          $.args && $.args.forEach((X) => gt(X, D, N)));
        break;
      case "RefinementType":
        ((N && $.baseType === "T") || D.add($.baseType),
          Object.values($.typeMembers).forEach((X) => {
            X && gt(X, D, N);
          }));
        break;
      case "Union":
      case "Intersect":
        $.types && $.types.forEach((X) => gt(X, D, N));
        break;
      case "Infix":
        ($.op && D.add($.op), gt($.left, D, N), gt($.right, D, N));
        break;
      case "SingletonType":
        D.add($.objectName);
        break;
    }
    return D;
  }
  const St = Z.useMemo(() => {
      try {
        const $ = new Set(),
          D = new Set(),
          N = new Set();
        (m && gt(m, $),
          v.forEach((tt) => {
            (tt.pattern && gt(tt.pattern, D, !0),
              tt.result && gt(tt.result, N, !0));
          }));
        const X = new Set([...$, ...D, ...N]);
        return {
          invocationTypes: $,
          patternTypes: D,
          resultTypes: N,
          allTypes: X,
        };
      } catch {
        return {
          invocationTypes: new Set(),
          patternTypes: new Set(),
          resultTypes: new Set(),
          allTypes: new Set(),
        };
      }
    }, [m, v]),
    nt = Z.useMemo(() => {
      const $ = new Set(),
        D = new Set([
          ...Object.keys(w.types || {}),
          ...Object.keys(w.aliases || {}),
        ]);
      for (const N of D) {
        if (St.allTypes.has(N)) {
          $.add(N);
          continue;
        }
        Array.from(St.allTypes).some((tt) => bt(N, tt, q)) && $.add(N);
      }
      return $;
    }, [St, w, q]);
  function bt($, D, N) {
    if ($ === D) return !0;
    const X = N[$];
    return !X || !X.supertypes
      ? !1
      : X.supertypes.includes(D)
        ? !0
        : X.supertypes.some((tt) => bt(tt, D, N));
  }
  const zt = Z.useMemo(() => {
    if (nt.size === 0)
      return "// No custom types involved in current match type definition";
    const $ = [];
    for (const [D, N] of Object.entries(w.types || {}))
      if (nt.has(D)) {
        let X = "";
        switch (N.kind) {
          case "type":
            if (
              ((X = `type ${D}`),
              N.typeParams &&
                N.typeParams.length > 0 &&
                (X += `[${N.typeParams.join(", ")}]`),
              N.supertypes.length > 0 && !N.supertypes.includes("Any"))
            ) {
              const tt = N.supertypes.length > 1 ? ", " : " with ";
              X += ` extends ${N.supertypes.join(tt)}`;
            }
            break;
          case "trait":
            if (
              ((X = `trait ${D}`),
              N.typeParams &&
                N.typeParams.length > 0 &&
                (X += `[${N.typeParams.join(", ")}]`),
              N.supertypes.length > 0 && !N.supertypes.includes("AnyRef"))
            ) {
              const tt = N.supertypes.length > 1 ? ", " : " with ";
              X += ` extends ${N.supertypes.join(tt)}`;
            }
            if (N.typeMembers && Object.keys(N.typeMembers).length > 0) {
              const tt = Object.entries(N.typeMembers).map(([S, U]) =>
                U ? `type ${S} = ${U}` : `type ${S}`,
              );
              X += ` { ${tt.join("; ")} }`;
            }
            break;
          case "sealed_trait":
            if (
              ((X = `sealed trait ${D}`),
              N.typeParams &&
                N.typeParams.length > 0 &&
                (X += `[${N.typeParams.join(", ")}]`),
              N.supertypes.length > 0 && !N.supertypes.includes("AnyRef"))
            ) {
              const tt = N.supertypes.length > 1 ? ", " : " with ";
              X += ` extends ${N.supertypes.join(tt)}`;
            }
            if (N.typeMembers && Object.keys(N.typeMembers).length > 0) {
              const tt = Object.entries(N.typeMembers).map(([S, U]) =>
                U ? `type ${S} = ${U}` : `type ${S}`,
              );
              X += ` { ${tt.join("; ")} }`;
            }
            break;
          case "class":
            if (
              ((X = `class ${D}`),
              N.typeParams &&
                N.typeParams.length > 0 &&
                (X += `[${N.typeParams.join(", ")}]`),
              N.supertypes.length > 0 && !N.supertypes.includes("AnyRef"))
            ) {
              const tt = N.supertypes.length > 1 ? ", " : " with ";
              X += ` extends ${N.supertypes.join(tt)}`;
            }
            break;
          case "final_class":
            if (
              ((X = `final class ${D}`),
              N.typeParams &&
                N.typeParams.length > 0 &&
                (X += `[${N.typeParams.join(", ")}]`),
              N.supertypes.length > 0 && !N.supertypes.includes("AnyRef"))
            ) {
              const tt = N.supertypes.length > 1 ? ", " : " with ";
              X += ` extends ${N.supertypes.join(tt)}`;
            }
            break;
          case "object":
            if (
              ((X = `object ${D}`),
              N.supertypes.length > 0 && !N.supertypes.includes("AnyRef"))
            ) {
              const tt = N.supertypes.length > 1 ? ", " : " with ";
              X += ` extends ${N.supertypes.join(tt)}`;
            }
            break;
          default:
            X = `// Unknown type: ${D}`;
        }
        $.push(X);
      }
    for (const [D, N] of Object.entries(w.aliases || {}))
      if (nt.has(D)) {
        const X = N.typeParams.length > 0 ? `[${N.typeParams.join(", ")}]` : "",
          tt = Object.entries(N.typeMembers)
            .map(([U, Q]) => (Q ? `type ${U} = ${Q}` : `type ${U}`))
            .join("; "),
          S = `type ${D}${X} = ${N.baseType} { ${tt} }`;
        $.push(S);
      }
    return $.length === 0
      ? "// No custom types involved in current match type definition"
      : $.join(`
`);
  }, [nt, w]);
  return j.jsxs("div", {
    className: "grid grid-cols-1 lg:grid-cols-5 gap-6",
    children: [
      j.jsxs("div", {
        className: "lg:col-span-3 space-y-4",
        children: [
          j.jsxs(Kn.div, {
            layout: !0,
            className: "p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg",
            children: [
              j.jsx("div", {
                className: "mb-4",
                children: j.jsx("div", {
                  className:
                    "p-3 rounded bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
                  children: j.jsx(gn, {
                    code: zt,
                    isDark: k,
                    userDefinedTypes: V,
                    className: "whitespace-pre-wrap text-sm leading-relaxed",
                  }),
                }),
              }),
              j.jsx("label", {
                className:
                  "block text-sm font-medium text-gray-700 dark:text-gray-300",
                children: "Match-type invocation",
              }),
              j.jsx("div", {
                className: "mt-2",
                children: j.jsx(ws, {
                  value: a,
                  onChange: ($) => i($.target.value),
                  rows: 1,
                  language: "scala",
                  isDark: k,
                  placeholder: "e.g., Foo[List[String]]",
                  readOnly: c.length > 0,
                  userDefinedTypes: V,
                }),
              }),
              j.jsx("div", {
                className:
                  "block text-sm text-gray-700 dark:text-gray-300 mt-4",
                children:
                  x && x.title.startsWith("Evaluate")
                    ? j.jsx(gn, {
                        code: `type ${p}[T] = ${g} match`,
                        isDark: k,
                        highlightedSubstring: g,
                        userDefinedTypes: V,
                      })
                    : j.jsx(gn, {
                        code: `type ${p}[T] = ${g} match`,
                        isDark: k,
                        userDefinedTypes: V,
                      }),
              }),
              j.jsx("div", {
                className: "relative mt-2",
                children: j.jsx(ws, {
                  value: l,
                  onChange: ($) => u($.target.value),
                  rows: 5,
                  language: "scala",
                  isDark: k,
                  placeholder: "case T => T\\ncase Option[x] => x",
                  matchTypeName: p,
                  userDefinedTypes: V,
                  readOnly: c.length > 0,
                  stepHighlighting:
                    c.length > 0 && A !== null
                      ? {
                          activeIndex: A,
                          highlightRHS: !!(
                            x &&
                            (x.title === "Substitute RHS" ||
                              x.title.startsWith("Recurse into") ||
                              x.title === "Final result")
                          ),
                        }
                      : null,
                }),
              }),
              j.jsxs("div", {
                className: "mt-4",
                children: [
                  j.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                      j.jsx("div", {
                        className:
                          "text-sm font-medium text-gray-700 dark:text-gray-200",
                        children: "Dependent Method",
                      }),
                      j.jsx("button", {
                        onClick: () => B(!C),
                        className:
                          "text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300",
                        children: C ? "Hide" : "Show",
                      }),
                    ],
                  }),
                  C &&
                    j.jsx("div", {
                      className:
                        "p-3 rounded bg-gray-50 dark:bg-gray-900 text-sm",
                      children: j.jsx(gn, {
                        code: k2(p, v),
                        isDark: k,
                        userDefinedTypes: V,
                      }),
                    }),
                ],
              }),
              j.jsxs("div", {
                className: "mt-4 space-y-3",
                children: [
                  j.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      j.jsx(Kn.button, {
                        whileTap: { scale: 0.98 },
                        onClick: J,
                        className:
                          "px-4 py-2 rounded-lg bg-emerald-500 text-white shadow",
                        children: "Begin",
                      }),
                      j.jsx(Kn.button, {
                        whileTap: { scale: 0.98 },
                        onClick: F,
                        className:
                          "px-4 py-2 rounded-lg bg-blue-500 text-white shadow",
                        children: "Result",
                      }),
                      j.jsx(Kn.button, {
                        whileTap: { scale: 0.98 },
                        onClick: I,
                        className:
                          "px-4 py-2 rounded-lg bg-gray-500 text-white shadow",
                        title: "Clear evaluation state to make editor usable",
                        children: "Reset",
                      }),
                      j.jsxs("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300",
                        children: [
                          "Steps: ",
                          j.jsx("strong", { children: c.length }),
                        ],
                      }),
                    ],
                  }),
                  j.jsxs("div", {
                    className:
                      "border-t border-gray-200 dark:border-gray-600 pt-3",
                    children: [
                      j.jsx("div", {
                        className:
                          "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                        children: "Quick Examples:",
                      }),
                      j.jsx("div", {
                        className: "flex gap-2 flex-wrap",
                        children: S2.map(($, D) =>
                          j.jsx(
                            Kn.button,
                            {
                              whileTap: { scale: 0.98 },
                              onClick: () => ot($),
                              className: `px-3 py-1.5 text-xs rounded-lg transition-colors ${$.color === "indigo" ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/50" : $.color === "purple" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50" : $.color === "green" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50" : $.color === "red" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50" : $.color === "blue" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50" : $.color === "amber" ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50" : $.color === "rose" ? "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-900/50" : $.color === "emerald" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50" : $.color === "teal" ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 hover:bg-teal-200 dark:hover:bg-teal-900/50" : $.color === "cyan" ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-900/50" : "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900/50"}`,
                              title: $.description,
                              children: $.name,
                            },
                            D,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          j.jsxs(Kn.div, {
            layout: !0,
            className: "p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg",
            children: [
              j.jsx("div", {
                className: "text-sm text-gray-500 dark:text-gray-300 mb-2",
                children: "Parsed invocation AST",
              }),
              j.jsx("pre", {
                className:
                  "p-3 rounded bg-gray-50 dark:bg-gray-900 font-mono text-sm overflow-auto text-gray-900 dark:text-gray-100 text-left",
                children: jy(m),
              }),
              j.jsx("div", {
                className: "text-sm text-gray-500 dark:text-gray-300 mb-2",
                children: "Parsed cases",
              }),
              j.jsx("pre", {
                className:
                  "p-3 rounded bg-gray-50 dark:bg-gray-900 font-mono text-sm overflow-auto text-gray-900 dark:text-gray-100 text-left",
                children: jy(
                  v.map(($) => ({
                    pattern: yt($.pattern),
                    result: yt($.result),
                  })),
                ),
              }),
              j.jsx("div", {
                className: "text-sm text-gray-500 dark:text-gray-300 mt-4 mb-2",
                children: "Pattern Legality (Scala 3 Spec)",
              }),
              j.jsx("div", {
                className: "space-y-2",
                children: v.map(($, D) => {
                  const N = Pe($.pattern, q, 0, w.aliases || {});
                  return j.jsxs(
                    "div",
                    {
                      className: `p-2 rounded border ${N.legal ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700" : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"}`,
                      children: [
                        j.jsxs("div", {
                          className: "flex items-center gap-2 mb-1",
                          children: [
                            j.jsx("span", {
                              className: `text-sm font-mono ${N.legal ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`,
                              children: yt($.pattern),
                            }),
                            j.jsx("span", {
                              className: `px-2 py-1 text-xs rounded-full ${N.legal ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300" : "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300"}`,
                              children: N.legal ? "✓ Legal" : "✗ Illegal",
                            }),
                          ],
                        }),
                        j.jsx("div", {
                          className: `text-xs ${N.legal ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`,
                          children: N.reason,
                        }),
                      ],
                    },
                    D,
                  );
                }),
              }),
            ],
          }),
        ],
      }),
      j.jsxs("div", {
        className: "lg:col-span-2 space-y-4",
        children: [
          j.jsx(N2, {
            steps: c,
            index: f,
            setIndex: h,
            showDisjointnessSteps: P,
            setShowDisjointnessSteps: G,
          }),
          j.jsx(z2, { current: x, index: f, dark: k, allUserDefinedTypes: V }),
        ],
      }),
    ],
  });
}
function L2({
  type1Text: a,
  setType1Text: i,
  type2Text: l,
  setType2Text: u,
  disjointnessResult: c,
  dark: d,
  allUserDefinedTypes: f,
  setCustomTypesText: h,
  customTypesText: m,
  mergedTypeHierarchy: p,
  customTypeDefinitions: g,
}) {
  function v(V, k = new Set()) {
    if (!V) return k;
    switch (V.kind) {
      case "Ident":
        (k.add(V.name), V.args && V.args.forEach((C) => v(C, k)));
        break;
      case "RefinementType":
        (k.add(V.baseType),
          Object.values(V.typeMembers).forEach((C) => {
            C && v(C, k);
          }));
        break;
      case "Union":
      case "Intersect":
        V.types && V.types.forEach((C) => v(C, k));
        break;
      case "Infix":
        (V.op && k.add(V.op), v(V.left, k), v(V.right, k));
        break;
      case "SingletonType":
        k.add(V.objectName);
        break;
    }
    return k;
  }
  const x = Z.useMemo(() => {
      try {
        const V = ga(a, p, !1),
          k = ga(l, p, !1),
          C = new Set(),
          B = new Set();
        return (
          v(V, C),
          v(k, B),
          { types1: C, types2: B, allTypes: new Set([...C, ...B]) }
        );
      } catch {
        return { types1: new Set(), types2: new Set(), allTypes: new Set() };
      }
    }, [a, l, p]),
    A = Z.useMemo(() => {
      const V = new Set(),
        k = new Set([
          ...Object.keys(g.types || {}),
          ...Object.keys(g.aliases || {}),
        ]);
      for (const C of k) {
        if (x.allTypes.has(C)) {
          V.add(C);
          continue;
        }
        if (x.types1.size > 0 && x.types2.size > 0) {
          const B = Array.from(x.types1).every((G) => w(C, G, p)),
            P = Array.from(x.types2).every((G) => w(C, G, p));
          B && P && V.add(C);
        }
      }
      return V;
    }, [x, g, p]);
  function w(V, k, C) {
    if (V === k) return !0;
    const B = C[V];
    return !B || !B.supertypes
      ? !1
      : B.supertypes.includes(k)
        ? !0
        : B.supertypes.some((P) => w(P, k, C));
  }
  const q = Z.useMemo(() => {
    if (A.size === 0)
      return "// No custom types involved in current comparison";
    const V = [];
    for (const [k, C] of Object.entries(g.types || {}))
      if (A.has(k)) {
        let B = "";
        switch (C.kind) {
          case "type":
            if (
              ((B = `type ${k}`),
              C.typeParams &&
                C.typeParams.length > 0 &&
                (B += `[${C.typeParams.join(", ")}]`),
              C.supertypes.length > 0 && !C.supertypes.includes("Any"))
            ) {
              const P = C.supertypes.length > 1 ? ", " : " with ";
              B += ` extends ${C.supertypes.join(P)}`;
            }
            break;
          case "trait":
            if (
              ((B = `trait ${k}`),
              C.typeParams &&
                C.typeParams.length > 0 &&
                (B += `[${C.typeParams.join(", ")}]`),
              C.supertypes.length > 0 && !C.supertypes.includes("AnyRef"))
            ) {
              const P = C.supertypes.length > 1 ? ", " : " with ";
              B += ` extends ${C.supertypes.join(P)}`;
            }
            if (C.typeMembers && Object.keys(C.typeMembers).length > 0) {
              const P = Object.entries(C.typeMembers).map(([G, J]) =>
                J ? `type ${G} = ${J}` : `type ${G}`,
              );
              B += ` { ${P.join("; ")} }`;
            }
            break;
          case "sealed_trait":
            if (
              ((B = `sealed trait ${k}`),
              C.typeParams &&
                C.typeParams.length > 0 &&
                (B += `[${C.typeParams.join(", ")}]`),
              C.supertypes.length > 0 && !C.supertypes.includes("AnyRef"))
            ) {
              const P = C.supertypes.length > 1 ? ", " : " with ";
              B += ` extends ${C.supertypes.join(P)}`;
            }
            if (C.typeMembers && Object.keys(C.typeMembers).length > 0) {
              const P = Object.entries(C.typeMembers).map(([G, J]) =>
                J ? `type ${G} = ${J}` : `type ${G}`,
              );
              B += ` { ${P.join("; ")} }`;
            }
            break;
          case "class":
            if (
              ((B = `class ${k}`),
              C.typeParams &&
                C.typeParams.length > 0 &&
                (B += `[${C.typeParams.join(", ")}]`),
              C.supertypes.length > 0 && !C.supertypes.includes("AnyRef"))
            ) {
              const P = C.supertypes.length > 1 ? ", " : " with ";
              B += ` extends ${C.supertypes.join(P)}`;
            }
            break;
          case "final_class":
            if (
              ((B = `final class ${k}`),
              C.typeParams &&
                C.typeParams.length > 0 &&
                (B += `[${C.typeParams.join(", ")}]`),
              C.supertypes.length > 0 && !C.supertypes.includes("AnyRef"))
            ) {
              const P = C.supertypes.length > 1 ? ", " : " with ";
              B += ` extends ${C.supertypes.join(P)}`;
            }
            break;
          case "object":
            if (
              ((B = `object ${k}`),
              C.supertypes.length > 0 && !C.supertypes.includes("AnyRef"))
            ) {
              const P = C.supertypes.length > 1 ? ", " : " with ";
              B += ` extends ${C.supertypes.join(P)}`;
            }
            break;
          default:
            B = `// Unknown type: ${k}`;
        }
        V.push(B);
      }
    for (const [k, C] of Object.entries(g.aliases || {}))
      if (A.has(k)) {
        const B = C.typeParams.length > 0 ? `[${C.typeParams.join(", ")}]` : "",
          P = Object.entries(C.typeMembers)
            .map(([J, F]) => (F ? `type ${J} = ${F}` : `type ${J}`))
            .join("; "),
          G = `type ${k}${B} = ${C.baseType} { ${P} }`;
        V.push(G);
      }
    return V.length === 0
      ? "// No custom types involved in current comparison"
      : V.join(`
`);
  }, [A, g]);
  return j.jsx("div", {
    className: "max-w-4xl mx-auto space-y-6",
    children: j.jsxs("div", {
      className: "p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg",
      children: [
        j.jsx("h3", {
          className:
            "text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4",
          children: "Provable Disjointness Checker",
        }),
        j.jsx("p", {
          className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
          children:
            "Check if two types are provably disjoint. For example, List is a subtype of Seq, so Seq[T] cannot be provably disjoint from List[Int]. Custom types defined in the Custom Types tab are included in the analysis.",
        }),
        j.jsx("div", {
          className: "mb-4",
          children: j.jsx("div", {
            className:
              "p-3 rounded bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
            children: j.jsx(gn, {
              code: q,
              isDark: d,
              userDefinedTypes: f,
              className: "whitespace-pre-wrap text-sm leading-relaxed",
            }),
          }),
        }),
        j.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
          children: [
            j.jsxs("div", {
              children: [
                j.jsx("label", {
                  className:
                    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                  children: "Type 1",
                }),
                j.jsx(ws, {
                  value: a,
                  onChange: (V) => i(V.target.value),
                  rows: 1,
                  language: "scala",
                  isDark: d,
                  placeholder: "e.g., Seq[Int]",
                  userDefinedTypes: f,
                }),
              ],
            }),
            j.jsxs("div", {
              children: [
                j.jsx("label", {
                  className:
                    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                  children: "Type 2",
                }),
                j.jsx(ws, {
                  value: l,
                  onChange: (V) => u(V.target.value),
                  rows: 1,
                  language: "scala",
                  isDark: d,
                  placeholder: "e.g., List[Int]",
                  userDefinedTypes: f,
                }),
              ],
            }),
          ],
        }),
        j.jsxs("div", {
          className: `p-4 rounded-lg border-l-4 ${c.disjoint ? "bg-green-50 dark:bg-green-900/20 border-green-400" : "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400"}`,
          children: [
            j.jsxs("div", {
              className: "flex items-center mb-2",
              children: [
                j.jsx("span", {
                  className: `text-lg mr-2 ${c.disjoint ? "text-green-600" : "text-yellow-600"}`,
                  children: c.disjoint ? "✓" : "⚠",
                }),
                j.jsx("span", {
                  className: `font-semibold ${c.disjoint ? "text-green-800 dark:text-green-200" : "text-yellow-800 dark:text-yellow-200"}`,
                  children: c.disjoint
                    ? "Provably Disjoint"
                    : "Not Provably Disjoint",
                }),
              ],
            }),
            j.jsxs("div", {
              className: `text-sm ${c.disjoint ? "text-green-700 dark:text-green-300" : "text-yellow-700 dark:text-yellow-300"}`,
              children: [
                j.jsx("strong", { children: "Reason:" }),
                " ",
                c.reason,
              ],
            }),
          ],
        }),
        j.jsx("div", {
          className: "mt-4 flex items-center justify-between",
          children: j.jsxs("div", {
            className: "text-xs text-gray-500 dark:text-gray-400",
            children: [
              j.jsx("strong", { children: "Type Hierarchy:" }),
              " List <: Seq <: Iterable <: Any | Set <: Iterable | String, Int, Boolean <: AnyVal <: Any",
            ],
          }),
        }),
        j.jsxs("div", {
          className: "mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg",
          children: [
            j.jsx("div", {
              className:
                "text-xs font-medium text-gray-700 dark:text-gray-300 mb-3",
              children: "Quick Examples:",
            }),
            j.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-xs",
              children: x2.map((V, k) => {
                const C = {
                    green: "text-green-600",
                    yellow: "text-yellow-600",
                    red: "text-red-600",
                    blue: "text-blue-600",
                    purple: "text-purple-600",
                  },
                  G =
                    {
                      Advanced:
                        "bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/30",
                    }[V.category] ||
                    "bg-white dark:bg-gray-800 rounded border hover:bg-gray-100 dark:hover:bg-gray-700",
                  J = () => {
                    (i(V.type1),
                      u(V.type2),
                      V.customTypes ? h(V.customTypes) : h(i0));
                  };
                return j.jsxs(
                  "button",
                  {
                    onClick: J,
                    className: `text-left p-2 ${G}`,
                    title: V.description,
                    children: [
                      j.jsxs("div", {
                        className: `font-mono ${C[V.color] || "text-gray-600"}`,
                        children: [V.type1, " vs ", V.type2],
                      }),
                      j.jsxs("div", {
                        className: "text-gray-500",
                        children: [
                          V.expectedDisjoint ? "✅" : "⚠️",
                          " ",
                          V.description,
                        ],
                      }),
                    ],
                  },
                  k,
                );
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Y2({
  customTypesText: a,
  setCustomTypesText: i,
  customTypeDefinitions: l,
  dark: u,
  allUserDefinedTypes: c,
}) {
  return j.jsx("div", {
    className: "max-w-4xl mx-auto space-y-6",
    children: j.jsxs("div", {
      className: "p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg",
      children: [
        j.jsx("h3", {
          className:
            "text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4",
          children: "Custom Type Definitions",
        }),
        j.jsx("p", {
          className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
          children:
            "Define your own types that will be added to the built-in type hierarchy. These custom types will be used in both match type evaluation and disjointness checking.",
        }),
        j.jsxs("div", {
          className: "mb-4",
          children: [
            j.jsx("label", {
              className:
                "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
              children: "Type Definitions (Scala-like syntax)",
            }),
            j.jsx(ws, {
              value: a,
              onChange: (d) => i(d.target.value),
              rows: 12,
              language: "scala",
              isDark: u,
              placeholder: `type A
trait T
sealed trait S
class C
final class F
object O`,
              userDefinedTypes: c,
            }),
          ],
        }),
        j.jsxs("div", {
          className: "text-xs text-gray-500 dark:text-gray-400",
          children: [
            j.jsx("strong", { children: "Supported formats:" }),
            j.jsxs("div", {
              className: "font-mono mt-1 space-y-1",
              children: [
                j.jsxs("div", {
                  children: [
                    "• ",
                    j.jsx("span", {
                      className: "text-blue-600 dark:text-blue-400",
                      children: "type A",
                    }),
                    " — abstract type, extends Any",
                  ],
                }),
                j.jsxs("div", {
                  children: [
                    "• ",
                    j.jsx("span", {
                      className: "text-green-600 dark:text-green-400",
                      children: "trait T[A, B]",
                    }),
                    " — parameterized trait, extends AnyRef",
                  ],
                }),
                j.jsxs("div", {
                  children: [
                    "• ",
                    j.jsx("span", {
                      className: "text-purple-600 dark:text-purple-400",
                      children: "sealed trait S[T]",
                    }),
                    " — parameterized sealed trait, extends AnyRef",
                  ],
                }),
                j.jsxs("div", {
                  children: [
                    "• ",
                    j.jsx("span", {
                      className: "text-orange-600 dark:text-orange-400",
                      children: "class C[T]",
                    }),
                    " — parameterized class, extends AnyRef",
                  ],
                }),
                j.jsxs("div", {
                  children: [
                    "• ",
                    j.jsx("span", {
                      className: "text-red-600 dark:text-red-400",
                      children: "final class F[A, B]",
                    }),
                    " — parameterized final class, extends AnyRef",
                  ],
                }),
                j.jsxs("div", {
                  children: [
                    "• ",
                    j.jsx("span", {
                      className: "text-indigo-600 dark:text-indigo-400",
                      children: "object O",
                    }),
                    " — object, extends AnyRef",
                  ],
                }),
              ],
            }),
            j.jsxs("div", {
              className: "mt-3",
              children: [
                j.jsx("strong", { children: "With inheritance (optional):" }),
                j.jsxs("div", {
                  className:
                    "font-mono mt-1 space-y-1 text-gray-600 dark:text-gray-400",
                  children: [
                    j.jsxs("div", {
                      children: [
                        "• ",
                        j.jsx("span", {
                          className: "text-green-600 dark:text-green-400",
                          children: "trait A extends B, C",
                        }),
                        " (Scala 3 comma syntax)",
                      ],
                    }),
                    j.jsxs("div", {
                      children: [
                        "• ",
                        j.jsx("span", {
                          className: "text-orange-600 dark:text-orange-400",
                          children: "class D extends A, B",
                        }),
                      ],
                    }),
                    j.jsxs("div", {
                      children: [
                        "• ",
                        j.jsx("span", {
                          className: "text-red-600 dark:text-red-400",
                          children: "final class E extends A",
                        }),
                      ],
                    }),
                    j.jsxs("div", {
                      children: [
                        "• ",
                        j.jsx("span", {
                          className: "text-indigo-600 dark:text-indigo-400",
                          children: "object O extends T, U",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            j.jsxs("div", {
              className: "mt-3",
              children: [
                j.jsx("strong", { children: "Type aliases with refinements:" }),
                j.jsxs("div", {
                  className:
                    "font-mono mt-1 space-y-1 text-gray-600 dark:text-gray-400",
                  children: [
                    j.jsxs("div", {
                      children: [
                        "• ",
                        j.jsx("span", {
                          className: "text-cyan-600 dark:text-cyan-400",
                          children:
                            "type Foo_Of[X0, Y0] = Foo { type X = X0; type Y = Y0 }",
                        }),
                      ],
                    }),
                    j.jsxs("div", {
                      children: [
                        "• ",
                        j.jsx("span", {
                          className: "text-cyan-600 dark:text-cyan-400",
                          children: "type Foo_Of_X[X0] = Foo { type X = X0 }",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (Object.keys(l.types || {}).length > 0 ||
          Object.keys(l.aliases || {}).length > 0) &&
          j.jsxs("div", {
            className: "mt-4 space-y-3",
            children: [
              Object.keys(l.types || {}).length > 0 &&
                j.jsxs("div", {
                  className:
                    "p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400",
                  children: [
                    j.jsxs("div", {
                      className:
                        "text-sm font-medium text-blue-800 dark:text-blue-200 mb-2",
                      children: [
                        "✓ Added ",
                        Object.keys(l.types || {}).length,
                        " custom type(s) to hierarchy",
                      ],
                    }),
                    j.jsx("div", {
                      className:
                        "text-xs text-blue-700 dark:text-blue-300 font-mono",
                      children: Object.entries(l.types || {}).map(([d, f]) => {
                        const h =
                          f.typeParams && f.typeParams.length > 0
                            ? `[${f.typeParams.join(", ")}]`
                            : "";
                        return j.jsxs(
                          "div",
                          {
                            children: [
                              d,
                              h,
                              " (",
                              f.kind,
                              ") — extends ",
                              f.supertypes.join(", "),
                            ],
                          },
                          d,
                        );
                      }),
                    }),
                  ],
                }),
              Object.keys(l.aliases || {}).length > 0 &&
                j.jsxs("div", {
                  className:
                    "p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-400",
                  children: [
                    j.jsxs("div", {
                      className:
                        "text-sm font-medium text-purple-800 dark:text-purple-200 mb-2",
                      children: [
                        "✓ Added ",
                        Object.keys(l.aliases || {}).length,
                        " type alias(es)",
                      ],
                    }),
                    j.jsx("div", {
                      className:
                        "text-xs text-purple-700 dark:text-purple-300 font-mono space-y-1",
                      children: Object.entries(l.aliases || {}).map(
                        ([d, f]) => {
                          const h = Object.entries(f.typeMembers)
                            .map(
                              ([m, p], g) =>
                                (g > 0 ? "; " : "") +
                                `type ${m}${p ? ` = ${p}` : ""}`,
                            )
                            .join("");
                          return j.jsxs(
                            "div",
                            {
                              className: "font-bold",
                              children: [
                                d,
                                "[",
                                f.typeParams.join(", "),
                                "] = ",
                                f.baseType,
                                " ",
                                "{",
                                h,
                                "}",
                              ],
                            },
                            d,
                          );
                        },
                      ),
                    }),
                  ],
                }),
            ],
          }),
      ],
    }),
  });
}
function H2() {
  const [a, i] = Z.useState("Id[Int]"),
    [l, u] = Z.useState("case T => T"),
    [c, d] = Z.useState([]),
    [f, h] = Z.useState(0),
    [m, p] = Z.useState(!1),
    [g, v] = Z.useState("Seq[Int]"),
    [x, A] = Z.useState("List[Int]"),
    [w, q] = Z.useState(i0),
    [V, k] = Z.useState("match-types"),
    [C, B] = Z.useState(!1),
    [P, G] = Z.useState(!1),
    J = Z.useMemo(() => R2(w), [w]),
    F = Z.useMemo(() => O2(J), [J]),
    I = Z.useMemo(() => ga(a, F, !1), [a, F]),
    ot = I.kind === "Ident" ? I.name : "Unknown";
  Z.useMemo(
    () => (I && I.kind === "Ident" && I.args && I.args[0] ? yt(I.args[0]) : ""),
    [I],
  );
  const gt = Z.useMemo(() => {
      if (c && c.length > 0)
        for (let S = Math.min(f, c.length - 1); S >= 0; S--) {
          const U = c[S];
          if (U && U.ast) return yt(U.ast);
        }
      return "T";
    }, [c, f]),
    St = Z.useMemo(
      () =>
        l
          .split(/\n+/)
          .map((Q) => Q.trim())
          .filter(Boolean)
          .map((Q) => {
            if (!Q.startsWith("case "))
              return (
                console.warn(`Match type case must start with 'case': ${Q}`),
                null
              );
            const W = Q.substring(5).split("=>");
            if (W.length !== 2) return null;
            const ft = ga(W[0].trim(), F, !0),
              ut = ga(W[1].trim(), F, !1);
            return { raw: Q, pattern: ft, result: ut };
          })
          .filter(Boolean),
      [l, F],
    );
  function nt() {
    try {
      const S = J.aliases || {};
      for (let K = 0; K < St.length; K++) {
        const W = St[K],
          ft = Pe(W.pattern, F, 0, S);
        if (!ft.legal) {
          (d([
            {
              title: `Illegal pattern (case ${K + 1})`,
              desc: `Pattern ${yt(W.pattern)} is illegal: ${ft.reason}.`,
              pattern: W.pattern,
              result: W.result,
              caseIndex: K,
              isError: !0,
              isFatal: !0,
              isIllegalPattern: !0,
            },
          ]),
            h(0));
          return;
        }
      }
      const U = {
          [ot]: { cases: St.map((K) => [K.pattern, K.result]), typeAliases: S },
        },
        Q = Ey(I, U, 60, F);
      (d(Q), h(0));
    } catch (S) {
      (d([{ title: "Error", desc: String(S) }]), h(0));
    }
  }
  function bt() {
    try {
      const S = J.aliases || {};
      for (let K = 0; K < St.length; K++) {
        const W = St[K],
          ft = Pe(W.pattern, F, 0, S);
        if (!ft.legal) {
          (d([
            {
              title: `Illegal pattern (case ${K + 1})`,
              desc: `Pattern ${yt(W.pattern)} is illegal: ${ft.reason}.`,
              pattern: W.pattern,
              result: W.result,
              caseIndex: K,
              isError: !0,
              isFatal: !0,
              isIllegalPattern: !0,
            },
          ]),
            h(0));
          return;
        }
      }
      const U = {
          [ot]: { cases: St.map((K) => [K.pattern, K.result]), typeAliases: S },
        },
        Q = Ey(I, U, 60, F);
      (d(Q), h(Q.length > 0 ? Q.length - 1 : 0));
    } catch (S) {
      (d([{ title: "Error", desc: String(S) }]), h(0));
    }
  }
  function zt(S) {
    (i(S.invocation), u(S.cases), d([]), h(0));
  }
  function $() {
    (d([]), h(0));
  }
  (Z.useEffect(() => {
    c.length > 0 && window.scrollTo({ top: 0, behavior: "smooth" });
  }, [c]),
    Z.useEffect(() => {
      const S = document.documentElement;
      m ? S.classList.add("dark") : S.classList.remove("dark");
    }, [m]));
  const D = c[f] || null,
    N = D && typeof D.caseIndex == "number" ? D.caseIndex : null,
    X = Z.useMemo(() => {
      const S = [ot, "T"];
      if (ot && ot !== "Unknown") {
        const U = ot[0].toLowerCase() + ot.slice(1);
        S.push(U);
      }
      return (
        J.types && S.push(...Object.keys(J.types)),
        J.aliases && S.push(...Object.keys(J.aliases)),
        S.filter(Boolean)
      );
    }, [ot, J]),
    tt = Z.useMemo(() => {
      const S = ga(g, F, !1),
        U = ga(x, F, !1);
      return hi(S, U, F);
    }, [g, x, F]);
  return j.jsx("div", {
    className:
      "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors text-gray-900 dark:text-gray-100",
    children: j.jsxs("div", {
      className: "max-w-6xl mx-auto p-8",
      children: [
        j.jsx(Bb, { dark: m, setDark: p }),
        j.jsx(Lb, { activeTab: V, setActiveTab: k }),
        V === "match-types"
          ? j.jsx(B2, {
              invocationText: a,
              setInvocationText: i,
              casesText: l,
              setCasesText: u,
              steps: c,
              setSteps: d,
              index: f,
              setIndex: h,
              parsedInvocation: I,
              invocationDefinition: ot,
              currentScrutineeStr: gt,
              parsedCases: St,
              current: D,
              activeCaseIndex: N,
              customTypeDefinitions: J,
              mergedTypeHierarchy: F,
              allUserDefinedTypes: X,
              dark: m,
              showDependentMethod: C,
              setShowDependentMethod: B,
              showDisjointnessSteps: P,
              setShowDisjointnessSteps: G,
              run: nt,
              runToResult: bt,
              resetState: $,
              loadExample: zt,
            })
          : V === "disjointness"
            ? j.jsx(L2, {
                type1Text: g,
                setType1Text: v,
                type2Text: x,
                setType2Text: A,
                disjointnessResult: tt,
                dark: m,
                allUserDefinedTypes: X,
                setCustomTypesText: q,
                customTypesText: w,
                mergedTypeHierarchy: F,
                customTypeDefinitions: J,
              })
            : j.jsx(Y2, {
                customTypesText: w,
                setCustomTypesText: q,
                customTypeDefinitions: J,
                dark: m,
                allUserDefinedTypes: X,
              }),
        j.jsxs("div", {
          className: "mt-8 text-sm text-gray-600 dark:text-gray-400",
          children: [
            "Tip: use tuples with ",
            j.jsx("span", { className: "font-mono", children: "*:" }),
            " and ",
            j.jsx("span", { className: "font-mono", children: "EmptyTuple" }),
            ". This demo approximates the Scala 3 match-type reductions for illustration.",
          ],
        }),
      ],
    }),
  });
}
Ub.createRoot(document.getElementById("root")).render(
  j.jsx(Z.StrictMode, { children: j.jsx(H2, {}) }),
);
