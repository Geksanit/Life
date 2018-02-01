var scripts =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext;function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    }, is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return K(a, "nextSibling");
    }, prev: function prev(a) {
      return K(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
    var b = {};return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function N(a) {
    return a;
  }function O(a) {
    throw a;
  }function P(a, b, c, d) {
    var e;try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        P(e[c], h(c), g.reject);
      }return g.promise();
    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var R = r.Deferred();r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    } }), r.ready.then = R.then;function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function V() {
    this.expando = r.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }function _(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}X.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    }, data: function data(a, b, c) {
      return X.access(a, b, c);
    }, removeData: function removeData(a, b) {
      X.remove(a, b);
    }, _data: function _data(a, b, c) {
      return W.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      W.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }W.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ga = {};function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ia(this, !0);
    }, hide: function hide() {
      return ia(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    } });var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;function va() {
    return !0;
  }function wa() {
    return !1;
  }function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ya(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ya(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return B(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ga(a) {
    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ha(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }function Ia(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ja(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }return a;
  }function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[W.expando] = void 0;
          }c[X.expando] && (c[X.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ka(this, a, !0);
    }, remove: function remove(a) {
      return Ka(this, a);
    }, text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ja(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Pa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = { position: "absolute", visibility: "hidden", display: "block" },
      Ta = { letterSpacing: "0", fontWeight: "400" },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;function Wa(a) {
    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }function Xa(a) {
    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }function Ya(a, b, c) {
    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Za(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }return g;
  }function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({ css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }function gb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
  }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    }, prefilters: [ib], prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var lb,
      mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), lb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function pb(a) {
    var b = a.match(L) || [];return b.join(" ");
  }function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      } };
  });var tb = a.location,
      ub = r.now(),
      vb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } });var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Rb = { 0: 200, 1223: 204 },
      Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || ra;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == "function" && __webpack_require__(17) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return r;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb = a.jQuery,
      Wb = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EventSender = /** @class */ (function () {
    function EventSender(sender) {
        this.sender = sender;
        this.listeners = [];
    }
    EventSender.prototype.attach = function (listener) {
        this.listeners.push(listener);
    };
    EventSender.prototype.notify = function (args) {
        var _this = this;
        this.listeners.forEach(function (listener) {
            listener(_this.sender, args);
        });
    };
    return EventSender;
}());
/* harmony default export */ __webpack_exports__["a"] = (EventSender);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__favicons_favicons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_slider_slider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_slider_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mvc_controller_Controller_ts__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mvc_model_Model__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mvc_view_View__ = __webpack_require__(22);






var controller = new __WEBPACK_IMPORTED_MODULE_3__mvc_controller_Controller_ts__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_4__mvc_model_Model__["a" /* default */](10, 10), new __WEBPACK_IMPORTED_MODULE_5__mvc_view_View__["a" /* default */]());


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var faviconsContext = __webpack_require__(5);

faviconsContext.keys().forEach(faviconsContext);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-48x48.png": 6,
	"./apple-touch-icon.png": 7,
	"./browserconfig.xml": 8,
	"./favicon-16x16.png": 9,
	"./favicon-32x32.png": 10,
	"./favicon.ico": 11,
	"./manifest.json": 12,
	"./mstile-150x150.png": 13,
	"./safari-pinned-tab.svg": 14
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/android-chrome-48x48.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/apple-touch-icon.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/browserconfig.xml";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-16x16.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-32x32.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon.ico";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/manifest.json";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/mstile-150x150.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/safari-pinned-tab.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global $ */


var _convertRemToPixels = __webpack_require__(18);

var _convertRemToPixels2 = _interopRequireDefault(_convertRemToPixels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider(element) {
    _classCallCheck(this, Slider);

    this.$element = $(element);
    this.$parent = this.$element.parent();
    this.$view = this.$parent.find('.js-slider__view');
    this.$line = this.$parent.find('.js-slider__line');
    this.sliderChange.call(this);
    this.$element.on('input.slider', this.sliderChange.bind(this));
  }

  _createClass(Slider, [{
    key: 'sliderChange',
    value: function sliderChange() {
      var $element = this.$element;

      var width = $element.width() - (0, _convertRemToPixels2.default)(1.25);
      var value = $element.val();
      var min = this.$element.prop('min');
      var max = this.$element.prop('max');
      var newLeft = width / (max - min) * (value - min) - (0, _convertRemToPixels2.default)(0.625);
      this.$view.text(value).css({ left: newLeft });
      var newWidth = width / (max - min) * (value - min) + (0, _convertRemToPixels2.default)(0.625);
      this.$line.width(newWidth);
    }
  }]);

  return Slider;
}();

var sliders = [];
$('.js-slider__input').each(function (index, element) {
  return sliders.push(new Slider(element));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var convertRemToPixels = function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
exports.default = convertRemToPixels;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Controller = /** @class */ (function () {
    function Controller(model, view) {
        this.model = model;
        this.view = view;
        this.fps = 1;
        this.setSubscription();
        this.view.initTable(this.model.matrix);
        this.setRunning(false);
    }
    Controller.prototype.setSubscription = function () {
        var _this = this;
        this.model.matrixChanged.attach(function (sender, obj) {
            if (obj.resized) {
                _this.view.initTable(obj.matrix);
            }
            else {
                _this.view.changeTable(obj.matrix);
            }
        });
        this.view.tableCellChanged.attach(function (sender, _a) {
            var row = _a.row, cell = _a.cell;
            _this.model.toggleCell(row, cell);
        });
        this.view.startEvent.attach(function () {
            _this.setRunning(true);
            _this.anim();
        });
        this.view.pauseEvent.attach(function () {
            _this.setRunning(false);
        });
        this.view.clearEvent.attach(function () {
            _this.model.clearMatrix();
            _this.setRunning(false);
        });
        this.view.speedChanged.attach(function (sender, options) {
            _this.fps = options.value;
        });
        this.view.widthChanged.attach(function (sender, options) {
            _this.setRunning(false);
            _this.model.setWidthMatrix(options.value);
        });
        this.view.heightChanged.attach(function (sender, options) {
            _this.setRunning(false);
            _this.model.setHeightMatrix(options.value);
        });
    };
    Controller.prototype.setRunning = function (value) {
        this.isRunning = value;
        this.view.setStatus(this.isRunning);
    };
    Controller.prototype.anim = function (callback) {
        var _this = this;
        // останавливается и вызывет callback(для тестов), когда матрица перестает меняться
        var loop = function () {
            setTimeout(function () {
                if (_this.isRunning) {
                    requestAnimationFrame(loop);
                    _this.model.calculateMatrix();
                    if (_this.model.isRepeatMatrix()) {
                        _this.setRunning(false);
                    }
                }
                else if (callback) {
                    callback();
                }
            }, 1000 / _this.fps);
        };
        loop();
    };
    return Controller;
}());
/* harmony default export */ __webpack_exports__["a"] = (Controller);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_arrayFrom_polyfill__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_arrayFrom_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_arrayFrom_polyfill__);


var Model = /** @class */ (function () {
    function Model(rows, columns) {
        if (rows === void 0) { rows = 10; }
        if (columns === void 0) { columns = 10; }
        this.initMatrix(rows, columns);
        this.rows = rows;
        this.columns = columns;
        this.listOldMatrix = [];
        this.matrixChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
    }
    Model.prototype.initMatrix = function (rows, columns) {
        this.matrix = Array.from(Array(rows), function () { return Array.from(Array(columns), function () { return false; }); });
    };
    Model.prototype.getNewRow = function (length) {
        return Array.from(Array(length), function () { return false; });
    };
    Model.prototype.setWidthMatrix = function (newWidth) {
        var _this = this;
        this.matrix = this.matrix.map(function (row) {
            if (_this.columns < newWidth) {
                return row.concat(_this.getNewRow(newWidth - _this.columns));
            }
            return row.slice(0, newWidth);
        });
        this.columns = newWidth;
        this.listOldMatrix = [];
        this.matrixChanged.notify({ matrix: this.matrix, resized: true });
    };
    Model.prototype.setHeightMatrix = function (newHeight) {
        var _this = this;
        this.matrix = Array.from(Array(newHeight), function (row, i) {
            if (i < _this.rows) {
                return _this.matrix[i].slice();
            }
            return _this.getNewRow(_this.columns);
        });
        this.rows = newHeight;
        this.listOldMatrix = [];
        this.matrixChanged.notify({ matrix: this.matrix, resized: true });
    };
    Model.prototype.clearMatrix = function () {
        this.initMatrix(this.rows, this.columns);
        this.listOldMatrix = [];
        this.matrixChanged.notify({ matrix: this.matrix });
    };
    Model.prototype.calculateMatrix = function () {
        var _this = this;
        this.matrix = this.matrix.map(function (row, i) {
            return row.map(function (cell, j) { return _this.calculateCell(i, j); });
        });
        this.matrixChanged.notify({ matrix: this.matrix });
    };
    Model.prototype.isRepeatMatrix = function () {
        var _this = this;
        var result = this.listOldMatrix.some(function (matrix) {
            return matrix.every(function (row, i) {
                return row.every(function (cell, j) {
                    return (cell === _this.matrix[i][j]);
                });
            });
        });
        if (result) {
            this.listOldMatrix = [];
        }
        else {
            this.listOldMatrix.push(this.matrix);
        }
        return result;
    };
    Model.prototype.calculateCell = function (row, column) {
        var matrix = this.matrix;
        var countLivingNeighbors = this.getCountLivingNeighbors(row, column, matrix);
        var newCell = matrix[row][column];
        if (countLivingNeighbors < 2 || countLivingNeighbors > 3) {
            newCell = false;
        }
        else if (countLivingNeighbors === 3) {
            newCell = true;
        }
        return newCell;
    };
    Model.prototype.getCountLivingNeighbors = function (row, column, matrix) {
        var indexes = [-1, 0, 1];
        return indexes.reduce(function (count, i) {
            var indexRow = row + i;
            if (!matrix[indexRow]) {
                return count;
            }
            return count + indexes.reduce(function (countInRow, j) {
                var indexCell = column + j;
                if (!matrix[indexRow][indexCell] || (i === 0 && j === 0)) {
                    return countInRow;
                }
                return countInRow + 1;
            }, 0);
        }, 0);
    };
    Model.prototype.toggleCell = function (row, column) {
        this.matrix[row][column] = !this.matrix[row][column];
        this.matrixChanged.notify({ matrix: this.matrix });
    };
    return Model;
}());
/* harmony default export */ __webpack_exports__["a"] = (Model);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Шаги алгоритма ECMA-262, 6-е издание, 22.1.2.1
// Ссылка: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
var toStr = Object.prototype.toString;
var isCallable = function (fn) { return typeof fn === 'function' || toStr.call(fn) === '[object Function]'; };
var toInteger = function (value) {
    var num = Number(value);
    if (isNaN(num)) {
        return 0;
    }
    if (num === 0 || !isFinite(num)) {
        return num;
    }
    return (num > 0 ? 1 : -1) * Math.floor(Math.abs(num));
};
var maxSafeInteger = Math.pow(2, 53) - 1;
var toLength = function (value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
};
Array.from = function (arrayLike, mapFn, thisArg) {
    // place code from MDN here
    // 1. Положим C равным значению this.
    var C = this;
    // 2. Положим items равным ToObject(arrayLike).
    var items = Object(arrayLike);
    // 3. ReturnIfAbrupt(items).
    if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
    }
    // 4. Если mapfn равен undefined, положим mapping равным false.
    // const mapFn = arguments.length > 1 ? arguments[1] : void undefined;
    var T;
    if (typeof mapFn !== 'undefined') {
        // 5. иначе
        // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
        if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        // 5. b. Если thisArg присутствует, положим T равным thisArg;
        // иначе положим T равным undefined.
        if (arguments.length > 2) {
            T = arguments[2];
        }
    }
    // 10. Положим lenValue равным Get(items, "length").
    // 11. Положим len равным ToLength(lenValue).
    var len = toLength(items.length);
    // 13. Если IsConstructor(C) равен true, то
    // 13. a. Положим A равным результату вызова внутреннего метода [[Construct]]
    //     объекта C со списком аргументов, содержащим единственный элемент len.
    // 14. a. Иначе, положим A равным ArrayCreate(len).
    var A = isCallable(C) ? Object(new C(len)) : new Array(len);
    // 16. Положим k равным 0.
    var k = 0;
    // 17. Пока k < len, будем повторять... (шаги с a по h)
    var kValue;
    while (k < len) {
        kValue = items[k];
        if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        }
        else {
            A[k] = kValue;
        }
        k += 1;
    }
    // 18. Положим putStatus равным Put(A, "length", len, true).
    A.length = len;
    // 20. Вернём A.
    return A;
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__ = __webpack_require__(1);

var CLASS_CEIL = 'game__ceil';
var CLASS_CEIL_LIVE = 'game__ceil_live';
var View = /** @class */ (function () {
    function View() {
        this.initDOMElements();
        this.initEvents();
        this.initHandlers();
    }
    View.prototype.initDOMElements = function () {
        this.$table = $('.js-game__board');
        this.$controls = $('.js-game__controls');
        this.$buttonStart = this.$controls.find('.js-game__button-start');
        this.$buttonPause = this.$controls.find('.js-game__button-pause');
        this.$buttonClear = this.$controls.find('.js-game__button-clear');
        this.$sliderSpeed = this.$controls.find('.js-game__slider-speed');
        this.$sliderWidth = this.$controls.find('.js-game__slider-width');
        this.$sliderHeight = this.$controls.find('.js-game__slider-height');
        this.$status = this.$controls.find('.js-game__status');
    };
    View.prototype.initEvents = function () {
        this.tableCellChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
        this.startEvent = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
        this.pauseEvent = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
        this.clearEvent = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
        this.widthChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
        this.heightChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
        this.speedChanged = new __WEBPACK_IMPORTED_MODULE_0__utils_EventSender__["a" /* default */](this);
    };
    View.prototype.initHandlers = function () {
        var _this = this;
        this.$table.on('click.view', 'td', function (_a) {
            var target = _a.target;
            var cell = $(target).prop('cellIndex');
            var row = $(target.parentElement).prop('sectionRowIndex');
            _this.tableCellChanged.notify({ row: row, cell: cell });
        });
        this.$buttonStart.on('click.view', function () {
            _this.startEvent.notify({});
        });
        this.$buttonPause.on('click.view', function () {
            _this.pauseEvent.notify({});
        });
        this.$buttonClear.on('click.view', function () {
            _this.clearEvent.notify({});
        });
        this.$sliderSpeed.on('change.view', function (_a) {
            var target = _a.target;
            var value = Number($(target).val());
            _this.speedChanged.notify({ value: value });
        });
        this.$sliderWidth.on('change.view', function (_a) {
            var target = _a.target;
            var value = Number($(target).val());
            _this.widthChanged.notify({ value: value });
        });
        this.$sliderHeight.on('change.view', function (_a) {
            var target = _a.target;
            var value = Number($(target).val());
            _this.heightChanged.notify({ value: value });
        });
    };
    View.prototype.setButtons = function (running) {
        this.$buttonStart.prop('disabled', running);
        this.$buttonPause.prop('disabled', !running);
    };
    View.prototype.setStatus = function (running) {
        this.setButtons(running);
        if (running) {
            this.$status.removeClass('game__status_stopped');
        }
        else {
            this.$status.addClass('game__status_stopped');
        }
    };
    View.prototype.getNewTbody = function (matrix, tableWidth) {
        var _this = this;
        var columns = matrix[0].length;
        var size = tableWidth / columns;
        var rows = matrix.map(function (row) {
            var cells = row.map(function (cell) {
                var $td = $('<td/>').css({ width: size, height: size }).addClass(CLASS_CEIL);
                _this.setTdClass($td, cell);
                return $td;
            });
            return $('<tr/>').append(cells);
        });
        return $('<tbody/>').append(rows);
    };
    View.prototype.initTable = function (matrix) {
        var $table = this.$table;
        var $newTbody = this.getNewTbody(matrix, $table.width());
        var $oldTbody = $table.find('tbody');
        if ($oldTbody.length) {
            $oldTbody.replaceWith($newTbody);
        }
        else {
            $table.append($newTbody);
        }
    };
    View.prototype.changeTable = function (matrix) {
        var _this = this;
        var table = this.$table[0];
        matrix.forEach(function (row, i) {
            row.forEach(function (cell, j) {
                _this.setTdClass($(table.rows[i].cells[j]), cell);
            });
        });
    };
    View.prototype.setTdClass = function ($td, isLive) {
        if (isLive) {
            $td.addClass(CLASS_CEIL_LIVE);
        }
        else {
            $td.removeClass(CLASS_CEIL_LIVE);
        }
    };
    return View;
}());
/* harmony default export */ __webpack_exports__["a"] = (View);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjQ5MTdmODQyOWM2YzQ4YjJhY2YiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9qcXVlcnktMy4yLjEubWluLmpzIiwid2VicGFjazovLy8uL212Yy91dGlscy9FdmVudFNlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2Zhdmljb25zL2Zhdmljb25zLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanMiLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nIiwid2VicGFjazovLy8uL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nIiwid2VicGFjazovLy8uL2Zhdmljb25zL2Jyb3dzZXJjb25maWcueG1sIiwid2VicGFjazovLy8uL2Zhdmljb25zL2Zhdmljb24tMTZ4MTYucG5nIiwid2VicGFjazovLy8uL2Zhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nIiwid2VicGFjazovLy8uL2Zhdmljb25zL2Zhdmljb24uaWNvIiwid2VicGFjazovLy8uL2Zhdmljb25zL21hbmlmZXN0Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nIiwid2VicGFjazovLy8uL2Zhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvY29udmVydFJlbVRvUGl4ZWxzLmpzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyL0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL21vZGVsL01vZGVsLnRzIiwid2VicGFjazovLy8uL3NjcmlwdHMvYXJyYXlGcm9tLXBvbHlmaWxsLnRzIiwid2VicGFjazovLy8uL212Yy92aWV3L1ZpZXcudHMiXSwibmFtZXMiOlsiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsImMiLCJkIiwiZSIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiZiIsInNsaWNlIiwiZyIsImNvbmNhdCIsImgiLCJwdXNoIiwiaSIsImluZGV4T2YiLCJqIiwiayIsInRvU3RyaW5nIiwibCIsImhhc093blByb3BlcnR5IiwibSIsIm4iLCJjYWxsIiwibyIsInAiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInEiLCJyIiwiZm4iLCJpbml0IiwicyIsInQiLCJ1IiwidiIsInRvVXBwZXJDYXNlIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJsZW5ndGgiLCJ0b0FycmF5IiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiZWFjaCIsIm1hcCIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwiaXNGdW5jdGlvbiIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwidHlwZSIsImlzV2luZG93IiwiaXNOdW1lcmljIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJjYW1lbENhc2UiLCJ3IiwidHJpbSIsIm1ha2VBcnJheSIsImluQXJyYXkiLCJncmVwIiwiZ3VpZCIsInByb3h5Iiwibm93IiwiRGF0ZSIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJ4IiwieSIsImhhIiwieiIsIkEiLCJCIiwiQyIsIkQiLCJFIiwicG9wIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlJlZ0V4cCIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJJRCIsIkNMQVNTIiwiVEFHIiwiQVRUUiIsIlBTRVVETyIsIkNISUxEIiwiYm9vbCIsIm5lZWRzQ29udGV4dCIsIlciLCJYIiwiWSIsIloiLCIkIiwiXyIsImFhIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYmEiLCJjYSIsImNoYXJDb2RlQXQiLCJkYSIsImVhIiwidGEiLCJkaXNhYmxlZCIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwibm9kZVR5cGUiLCJmYSIsImdhIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsIm5vZGVOYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2EiLCJqb2luIiwicWEiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImlhIiwiamEiLCJrYSIsImF0dHJIYW5kbGUiLCJsYSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJtYSIsIm5hIiwib2EiLCJpc0Rpc2FibGVkIiwicGEiLCJpc1hNTCIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJpbm5lclRleHQiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwiZXZlbiIsIm9kZCIsImx0IiwiZ3QiLCJudGgiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJzdWJtaXQiLCJyZXNldCIsInJhIiwiZmlsdGVycyIsInRva2VuaXplIiwidWEiLCJ2YSIsIndhIiwieGEiLCJ5YSIsInphIiwiY29tcGlsZSIsInNlbGVjdG9yIiwic2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZXhwciIsInVuaXF1ZSIsImlzWE1MRG9jIiwiZXNjYXBlU2VsZWN0b3IiLCJpcyIsInBhcnNlSFRNTCIsInJlYWR5IiwiY2hpbGRyZW4iLCJjb250ZW50cyIsInByZXYiLCJjbG9zZXN0IiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwic2libGluZ3MiLCJjb250ZW50RG9jdW1lbnQiLCJjb250ZW50IiwicmV2ZXJzZSIsIkNhbGxiYWNrcyIsIm9uY2UiLCJzdG9wT25GYWxzZSIsIm1lbW9yeSIsInJlbW92ZSIsImRpc2FibGUiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiRGVmZXJyZWQiLCJzdGF0ZSIsImFsd2F5cyIsInBpcGUiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInJlc29sdmUiLCJyZWplY3QiLCJUeXBlRXJyb3IiLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJleGNlcHRpb25Ib29rIiwic3RhY2tUcmFjZSIsInJlamVjdFdpdGgiLCJnZXRTdGFja0hvb2siLCJzZXRUaW1lb3V0Iiwid2hlbiIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsInJlYWR5RXhjZXB0aW9uIiwicmVhZHlXYWl0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkb1Njcm9sbCIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsInN0eWxlIiwiZGlzcGxheSIsImNzcyIsImN1ciIsImNzc051bWJlciIsInVuaXQiLCJzdGFydCIsImJvZHkiLCJzaG93IiwiaGlkZSIsInRvZ2dsZSIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIl9kZWZhdWx0Iiwib3B0Z3JvdXAiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaHRtbFByZWZpbHRlciIsImNyZWF0ZVRleHROb2RlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib2ZmIiwiZXZlbnQiLCJnbG9iYWwiLCJoYW5kbGVyIiwiZXZlbnRzIiwiaGFuZGxlIiwidHJpZ2dlcmVkIiwiZGlzcGF0Y2giLCJzcGVjaWFsIiwiZGVsZWdhdGVUeXBlIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsIm5hbWVzcGFjZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3N0RGlzcGF0Y2giLCJhZGRQcm9wIiwiRXZlbnQiLCJlbnVtZXJhYmxlIiwib3JpZ2luYWxFdmVudCIsIndyaXRhYmxlIiwibG9hZCIsIm5vQnViYmxlIiwidHJpZ2dlciIsImJsdXIiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJpc1NpbXVsYXRlZCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY2hhckNvZGUiLCJrZXkiLCJrZXlDb2RlIiwiYnV0dG9ucyIsImNsaWVudFgiLCJjbGllbnRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwidGFyZ2V0VG91Y2hlcyIsInRvRWxlbWVudCIsInRvdWNoZXMiLCJ3aGljaCIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwib24iLCJvbmUiLCJBYSIsIkJhIiwiQ2EiLCJEYSIsIkVhIiwiRmEiLCJHYSIsIkhhIiwiSWEiLCJKYSIsImh0bWwiLCJjbG9uZSIsInNyYyIsIl9ldmFsVXJsIiwiS2EiLCJjbGVhbkRhdGEiLCJkZXRhY2giLCJhcHBlbmQiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VDaGlsZCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiTGEiLCJNYSIsIk5hIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNzc1RleHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwicGl4ZWxQb3NpdGlvbiIsImJveFNpemluZ1JlbGlhYmxlIiwicGl4ZWxNYXJnaW5SaWdodCIsInJlbGlhYmxlTWFyZ2luTGVmdCIsIk9hIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJQYSIsIlFhIiwiUmEiLCJTYSIsInBvc2l0aW9uIiwidmlzaWJpbGl0eSIsIlRhIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJVYSIsIlZhIiwiV2EiLCJYYSIsImNzc1Byb3BzIiwiWWEiLCJtYXgiLCJaYSIsIiRhIiwiY3NzSG9va3MiLCJvcGFjaXR5IiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJjb2x1bW5Db3VudCIsImZpbGxPcGFjaXR5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwibGluZUhlaWdodCIsIm9yZGVyIiwib3JwaGFucyIsIndpZG93cyIsInpJbmRleCIsInpvb20iLCJzZXRQcm9wZXJ0eSIsImlzRmluaXRlIiwiZ2V0Q2xpZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImV4cGFuZCIsIl9hIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJhYiIsImJiIiwiY2IiLCJkYiIsImViIiwiaGlkZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW50ZXJ2YWwiLCJ0aWNrIiwiZmIiLCJnYiIsImhlaWdodCIsImhiIiwia2IiLCJ0d2VlbmVycyIsImliIiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImpiIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImNvbXBsZXRlIiwidGltZXIiLCJhbmltIiwiQW5pbWF0aW9uIiwidHdlZW5lciIsInByZWZpbHRlciIsInNwZWVkIiwic3BlZWRzIiwib2xkIiwiZmFkZVRvIiwiYW5pbWF0ZSIsImZpbmlzaCIsInRpbWVycyIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImZhZGVJbiIsImZhZGVPdXQiLCJmYWRlVG9nZ2xlIiwic2xvdyIsImZhc3QiLCJkZWxheSIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInJhZGlvVmFsdWUiLCJsYiIsIm1iIiwicmVtb3ZlQXR0ciIsImF0dHJIb29rcyIsIm5iIiwib2IiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsInBhcnNlSW50IiwicGIiLCJxYiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwicmIiLCJ2YWwiLCJ2YWxIb29rcyIsInNiIiwiaXNUcmlnZ2VyIiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsImhvdmVyIiwiZm9jdXNpbiIsInRiIiwidWIiLCJ2YiIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwid2IiLCJ4YiIsInliIiwiemIiLCJBYiIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsIkxiIiwiTWIiLCJOYiIsImRhdGFUeXBlcyIsIk9iIiwiYWpheFNldHRpbmdzIiwiZmxhdE9wdGlvbnMiLCJQYiIsIm1pbWVUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJjb252ZXJ0ZXJzIiwiUWIiLCJyZXNwb25zZUZpZWxkcyIsImRhdGFGaWx0ZXIiLCJkYXRhVHlwZSIsImFjdGl2ZSIsImxhc3RNb2RpZmllZCIsImV0YWciLCJ1cmwiLCJpc0xvY2FsIiwicHJvdG9jb2wiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJhY2NlcHRzIiwieG1sIiwianNvbiIsImNvbnRleHQiLCJhamF4U2V0dXAiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJzdGF0dXNDb2RlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIm92ZXJyaWRlTWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwiaG9zdCIsInRyYWRpdGlvbmFsIiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJ0aW1lb3V0Iiwic2VuZCIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiUmIiLCJTYiIsImNvcnMiLCJvcGVuIiwidXNlcm5hbWUiLCJ4aHJGaWVsZHMiLCJvbmxvYWQiLCJvbmVycm9yIiwib25hYm9ydCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsImJpbmFyeSIsInJlc3BvbnNlIiwic2NyaXB0IiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJUYiIsIlViIiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJhbmltYXRlZCIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvZmZzZXRQYXJlbnQiLCJzY3JvbGxUbyIsIkhlaWdodCIsIldpZHRoIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsIlZiIiwialF1ZXJ5IiwiV2IiLCJub0NvbmZsaWN0IiwiZmF2aWNvbnNDb250ZXh0Iiwia2V5cyIsImZvckVhY2giLCJTbGlkZXIiLCJlbGVtZW50IiwiJGVsZW1lbnQiLCIkcGFyZW50IiwiJHZpZXciLCIkbGluZSIsInNsaWRlckNoYW5nZSIsIm1pbiIsIm5ld0xlZnQiLCJuZXdXaWR0aCIsInNsaWRlcnMiLCJjb252ZXJ0UmVtVG9QaXhlbHMiLCJyZW0iLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDO0FBQWEsOENBQWlCQyxNQUFqQixNQUF5QixvQkFBaUJBLE9BQU9DLE9BQXhCLENBQXpCLEdBQXlERCxPQUFPQyxPQUFQLEdBQWVILEVBQUVJLFFBQUYsR0FBV0gsRUFBRUQsQ0FBRixFQUFJLENBQUMsQ0FBTCxDQUFYLEdBQW1CLFVBQVNBLENBQVQsRUFBVztBQUFDLFFBQUcsQ0FBQ0EsRUFBRUksUUFBTixFQUFlLE1BQU0sSUFBSUMsS0FBSixDQUFVLDBDQUFWLENBQU4sQ0FBNEQsT0FBT0osRUFBRUQsQ0FBRixDQUFQO0FBQVksR0FBOUwsR0FBK0xDLEVBQUVELENBQUYsQ0FBL0w7QUFBb00sQ0FBL04sQ0FBZ08sZUFBYSxPQUFPTSxNQUFwQixHQUEyQkEsTUFBM0IsWUFBaE8sRUFBdVEsVUFBU04sQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQztBQUFhLE1BQUlNLElBQUUsRUFBTjtBQUFBLE1BQVNDLElBQUVSLEVBQUVJLFFBQWI7QUFBQSxNQUFzQkssSUFBRUMs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LEdBQUcsT0FBRSxJQUFJLFFBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsRUFBVTtnQkFBUixrQkFBTTtZQUMzQyxJQUFNLEtBQUssR0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFNBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsRUFBVTtnQkFBUixrQkFBTTtZQUMzQyxJQUFNLEtBQUssR0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFNBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVB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SUFBYSxFQUFFLENBQVM7Z0JBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx5QkFBVSxHQUFWLFVBQVcsR0FBVyxFQUFFLE1BQWU7UUFDckMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxDQUFDO1lBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDO0FBRUQseURBQWUsSUFBSSxFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjQ5MTdmODQyOWM2YzQ4YjJhY2YiLCIvKiEgalF1ZXJ5IHYzLjIuMSB8IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO3ZhciBjPVtdLGQ9YS5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZixmPWMuc2xpY2UsZz1jLmNvbmNhdCxoPWMucHVzaCxpPWMuaW5kZXhPZixqPXt9LGs9ai50b1N0cmluZyxsPWouaGFzT3duUHJvcGVydHksbT1sLnRvU3RyaW5nLG49bS5jYWxsKE9iamVjdCksbz17fTtmdW5jdGlvbiBwKGEsYil7Yj1ifHxkO3ZhciBjPWIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtjLnRleHQ9YSxiLmhlYWQuYXBwZW5kQ2hpbGQoYykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKX12YXIgcT1cIjMuMi4xXCIscj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgci5mbi5pbml0KGEsYil9LHM9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHQ9L14tbXMtLyx1PS8tKFthLXpdKS9nLHY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtyLmZuPXIucHJvdG90eXBlPXtqcXVlcnk6cSxjb25zdHJ1Y3RvcjpyLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZi5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/Zi5jYWxsKHRoaXMpOmE8MD90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV19LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1yLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gci5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhmLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKGE8MD9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZjPGI/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmgsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxyLmV4dGVuZD1yLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fHIuaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aDxpO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihyLmlzUGxhaW5PYmplY3QoZCl8fChlPUFycmF5LmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJkFycmF5LmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZyLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPXIuZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxyLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhxK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXIudHlwZShhKX0saXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3ZhciBiPXIudHlwZShhKTtyZXR1cm4oXCJudW1iZXJcIj09PWJ8fFwic3RyaW5nXCI9PT1iKSYmIWlzTmFOKGEtcGFyc2VGbG9hdChhKSl9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYztyZXR1cm4hKCFhfHxcIltvYmplY3QgT2JqZWN0XVwiIT09ay5jYWxsKGEpKSYmKCEoYj1lKGEpKXx8KGM9bC5jYWxsKGIsXCJjb25zdHJ1Y3RvclwiKSYmYi5jb25zdHJ1Y3RvcixcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiZtLmNhbGwoYyk9PT1uKSl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/altrLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3AoYSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHQsXCJtcy1cIikucmVwbGFjZSh1LHYpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHcoYSkpe2ZvcihjPWEubGVuZ3RoO2Q8YztkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKHMsXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYodyhPYmplY3QoYSkpP3IubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6aC5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmkuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtkPGM7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7ZjxnO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9MCxoPVtdO2lmKHcoYSkpZm9yKGQ9YS5sZW5ndGg7ZjxkO2YrKyllPWIoYVtmXSxmLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihmIGluIGEpZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGcuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZTtpZihcInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIGQ9Zi5jYWxsKGFyZ3VtZW50cywyKSxlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChmLmNhbGwoYXJndW1lbnRzKSkpfSxlLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8ci5ndWlkKyssZX0sbm93OkRhdGUubm93LHN1cHBvcnQ6b30pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHIuZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLHIuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7altcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gdyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPXIudHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCIhPT1jJiYhci5pc1dpbmRvdyhhKSYmKFwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYSl9dmFyIHg9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1oYSgpLHo9aGEoKSxBPWhhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9e30uaGFzT3duUHJvcGVydHksRD1bXSxFPUQucG9wLEY9RC5wdXNoLEc9RC5wdXNoLEg9RC5zbGljZSxJPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxKPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixLPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixMPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixNPVwiXFxcXFtcIitLK1wiKihcIitMK1wiKSg/OlwiK0srXCIqKFsqXiR8IX5dPz0pXCIrSytcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0wrXCIpKXwpXCIrSytcIipcXFxcXVwiLE49XCI6KFwiK0wrXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK00rXCIpKil8LiopXFxcXCl8KVwiLE89bmV3IFJlZ0V4cChLK1wiK1wiLFwiZ1wiKSxQPW5ldyBSZWdFeHAoXCJeXCIrSytcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrSytcIiskXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitLK1wiKixcIitLK1wiKlwiKSxSPW5ldyBSZWdFeHAoXCJeXCIrSytcIiooWz4rfl18XCIrSytcIilcIitLK1wiKlwiKSxTPW5ldyBSZWdFeHAoXCI9XCIrSytcIiooW15cXFxcXSdcXFwiXSo/KVwiK0srXCIqXFxcXF1cIixcImdcIiksVD1uZXcgUmVnRXhwKE4pLFU9bmV3IFJlZ0V4cChcIl5cIitMK1wiJFwiKSxWPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTCtcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitMK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTCtcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitNKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitOKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitLK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrSytcIiooPzooWystXXwpXCIrSytcIiooXFxcXGQrKXwpKVwiK0srXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0srXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0srXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0srXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFc9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxYPS9eaFxcZCQvaSxZPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLywkPS9bK35dLyxfPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitLK1wiP3woXCIrSytcIil8LilcIixcImlnXCIpLGFhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjpkPDA/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGJhPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGNhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/XCJcXDBcIj09PWE/XCJcXHVmZmZkXCI6YS5zbGljZSgwLC0xKStcIlxcXFxcIithLmNoYXJDb2RlQXQoYS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2F9LGRhPWZ1bmN0aW9uKCl7bSgpfSxlYT10YShmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwJiYoXCJmb3JtXCJpbiBhfHxcImxhYmVsXCJpbiBhKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7Ry5hcHBseShEPUguY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRFt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChmYSl7Rz17YXBwbHk6RC5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtGLmFwcGx5KGEsSC5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZ2EoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscz1iJiZiLm93bmVyRG9jdW1lbnQsdz1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXcmJjkhPT13JiYxMSE9PXcpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT13JiYobD1aLmV4ZWMoYSkpKWlmKGY9bFsxXSl7aWYoOT09PXcpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZihzJiYoaj1zLmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihsWzJdKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1sWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09dylzPWIscj1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYmEsY2EpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixrPXUpLG89ZyhhKSxoPW8ubGVuZ3RoO3doaWxlKGgtLSlvW2hdPVwiI1wiK2srXCIgXCIrc2Eob1toXSk7cj1vLmpvaW4oXCIsXCIpLHM9JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxifWlmKHIpdHJ5e3JldHVybiBHLmFwcGx5KGQscy5xdWVyeVNlbGVjdG9yQWxsKHIpKSxkfWNhdGNoKHgpe31maW5hbGx5e2s9PT11JiZiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFAsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gaGEoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBpYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGphKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24gbGEoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiZhLnNvdXJjZUluZGV4LWIuc291cmNlSW5kZXg7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuXCJmb3JtXCJpbiBiP2IucGFyZW50Tm9kZSYmYi5kaXNhYmxlZD09PSExP1wibGFiZWxcImluIGI/XCJsYWJlbFwiaW4gYi5wYXJlbnROb2RlP2IucGFyZW50Tm9kZS5kaXNhYmxlZD09PWE6Yi5kaXNhYmxlZD09PWE6Yi5pc0Rpc2FibGVkPT09YXx8Yi5pc0Rpc2FibGVkIT09IWEmJmVhKGIpPT09YTpiLmRpc2FibGVkPT09YTpcImxhYmVsXCJpbiBiJiZiLmRpc2FibGVkPT09YX19ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGlhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGlhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gcWEoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9Z2Euc3VwcG9ydD17fSxmPWdhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hIWImJlwiSFRNTFwiIT09Yi5ub2RlTmFtZX0sbT1nYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSx2IT09biYmKGU9bi5kZWZhdWx0VmlldykmJmUudG9wIT09ZSYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixkYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZGEpKSxjLmF0dHJpYnV0ZXM9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPVkudGVzdChuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFuLmdldEVsZW1lbnRzQnlOYW1lfHwhbi5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0sZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0pOihkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19LGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYyxkLGUsZj1iLmdldEVsZW1lbnRCeUlkKGEpO2lmKGYpe2lmKGM9Zi5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksYyYmYy52YWx1ZT09PWEpcmV0dXJuW2ZdO2U9Yi5nZXRFbGVtZW50c0J5TmFtZShhKSxkPTA7d2hpbGUoZj1lW2QrK10paWYoYz1mLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxjJiZjLnZhbHVlPT09YSlyZXR1cm5bZl19cmV0dXJuW119fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmcClyZXR1cm4gYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpfSxyPVtdLHE9W10sKGMucXNhPVkudGVzdChuLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGphKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitLK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitLK1wiKig/OnZhbHVlfFwiK0orXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksamEoZnVuY3Rpb24oYSl7YS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrSytcIipbKl4kfCF+XT89XCIpLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksby5hcHBlbmRDaGlsZChhKS5kaXNhYmxlZD0hMCwyIT09YS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVkudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmamEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcIipcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixOKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPVkudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fFkudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PW58fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09bnx8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9JKGssYSktSShrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGc9W2FdLGg9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PW4/LTE6Yj09PW4/MTplPy0xOmY/MTprP0koayxhKS1JKGssYik6MDtpZihlPT09ZilyZXR1cm4gbGEoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpZy51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7d2hpbGUoZ1tkXT09PWhbZF0pZCsrO3JldHVybiBkP2xhKGdbZF0saFtkXSk6Z1tkXT09PXY/LTE6aFtkXT09PXY/MTowfSxuKTpufSxnYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGdhKGEsbnVsbCxudWxsLGIpfSxnYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoUyxcIj0nJDEnXVwiKSxjLm1hdGNoZXNTZWxlY3RvciYmcCYmIUFbYitcIiBcIl0mJighcnx8IXIudGVzdChiKSkmJighcXx8IXEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGdhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGdhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZ2EuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkMuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGdhLmVzY2FwZT1mdW5jdGlvbihhKXtyZXR1cm4oYStcIlwiKS5yZXBsYWNlKGJhLGNhKX0sZ2EuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGdhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1nYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWdhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmlhLG1hdGNoOlYsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoXyxhYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShfLGFhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxnYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZnYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gVi5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlQudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitLK1wiKVwiK2ErXCIoXCIrSytcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWdhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOiFifHwoZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShPLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iJiYoZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aWEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUkoYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aWEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFAsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aWEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczppYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGdhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKF8sYWEpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBVLnRlc3QoYXx8XCJcIil8fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoXyxhYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpvYSghMSksZGlzYWJsZWQ6b2EoITApLGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFcudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpwYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6cGEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOnBhKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bYzwwP2MrYjpjXX0pLGV2ZW46cGEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGI7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6cGEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtjPGI7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpwYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWM8MD9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1uYShiKTtmdW5jdGlvbiByYSgpe31yYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHJhLGc9Z2EudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXtjJiYhKGU9US5leGVjKGgpKXx8KGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Ui5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShQLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1WW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/Z2EuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBzYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtiPGM7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9Yi5uZXh0LGY9ZXx8ZCxnPWMmJlwicGFyZW50Tm9kZVwiPT09ZixoPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZSl7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKXJldHVybiBhKGIsYyxlKTtyZXR1cm4hMX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtPVt3LGhdO2lmKGkpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGcpJiZhKGIsYyxpKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZylpZihsPWJbdV18fChiW3VdPXt9KSxrPWxbYi51bmlxdWVJRF18fChsW2IudW5pcXVlSURdPXt9KSxlJiZlPT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWI9YltkXXx8YjtlbHNle2lmKChqPWtbZl0pJiZqWzBdPT09dyYmalsxXT09PWgpcmV0dXJuIG1bMl09alsyXTtpZihrW2ZdPW0sbVsyXT1hKGIsYyxpKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gdWEoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdmEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZDxlO2QrKylnYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gd2EoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aDxpO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB4YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD14YShkKSksZSYmIWVbdV0mJihlPXhhKGUsZikpLGlhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHZhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6d2EocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXdhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9JKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj13YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6Ry5hcHBseShnLHIpfSl9ZnVuY3Rpb24geWEoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD10YShmdW5jdGlvbihhKXtyZXR1cm4gSShiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07aTxmO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVt0YSh1YShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtlPGY7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4geGEoaT4xJiZ1YShtKSxpPjEmJnNhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUCxcIiQxXCIpLGMsaTxlJiZ5YShhLnNsaWNlKGksZSkpLGU8ZiYmeWEoYT1hLnNsaWNlKGUpKSxlPGYmJnNhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHVhKG0pfWZ1bmN0aW9uIHphKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1FLmNhbGwoaSkpO3U9d2EodSl9Ry5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmdhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9pYShmKTpmfXJldHVybiBoPWdhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXlhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx6YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9Z2Euc2VsZWN0PWZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGksaixrLGwsbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG49IWUmJmcoYT1tLnNlbGVjdG9yfHxhKTtpZihjPWN8fFtdLDE9PT1uLmxlbmd0aCl7aWYoaT1uWzBdPW5bMF0uc2xpY2UoMCksaS5sZW5ndGg+MiYmXCJJRFwiPT09KGo9aVswXSkudHlwZSYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbaVsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGoubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGM7bSYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2UoaS5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9Zj1WLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6aS5sZW5ndGg7d2hpbGUoZi0tKXtpZihqPWlbZl0sZC5yZWxhdGl2ZVtrPWoudHlwZV0pYnJlYWs7aWYoKGw9ZC5maW5kW2tdKSYmKGU9bChqLm1hdGNoZXNbMF0ucmVwbGFjZShfLGFhKSwkLnRlc3QoaVswXS50eXBlKSYmcWEoYi5wYXJlbnROb2RlKXx8YikpKXtpZihpLnNwbGljZShmLDEpLGE9ZS5sZW5ndGgmJnNhKGkpLCFhKXJldHVybiBHLmFwcGx5KGMsZSksYzticmVha319fXJldHVybihtfHxoKGEsbikpKGUsYiwhcCxjLCFifHwkLnRlc3QoYSkmJnFhKGIucGFyZW50Tm9kZSl8fGIpLGN9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxrYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7aWYoIWMpcmV0dXJuIGEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGthKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7aWYoIWMmJlwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gYS5kZWZhdWx0VmFsdWV9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxrYShKLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZighYylyZXR1cm4gYVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxnYX0oYSk7ci5maW5kPXgsci5leHByPXguc2VsZWN0b3JzLHIuZXhwcltcIjpcIl09ci5leHByLnBzZXVkb3Msci51bmlxdWVTb3J0PXIudW5pcXVlPXgudW5pcXVlU29ydCxyLnRleHQ9eC5nZXRUZXh0LHIuaXNYTUxEb2M9eC5pc1hNTCxyLmNvbnRhaW5zPXguY29udGFpbnMsci5lc2NhcGVTZWxlY3Rvcj14LmVzY2FwZTt2YXIgeT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmcihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LEE9ci5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBCKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX12YXIgQz0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSxEPS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiBFKGEsYixjKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGIpP3IuZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pOmIubm9kZVR5cGU/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pOlwic3RyaW5nXCIhPXR5cGVvZiBiP3IuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBpLmNhbGwoYixhKT4tMSE9PWN9KTpELnRlc3QoYik/ci5maWx0ZXIoYixhLGMpOihiPXIuZmlsdGVyKGIsYSksci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09YyYmMT09PWEubm9kZVR5cGV9KSl9ci5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP3IuZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106ci5maW5kLm1hdGNoZXMoYSxyLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LHIuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmxlbmd0aCxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKHIoYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtiPGQ7YisrKWlmKHIuY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYz10aGlzLnB1c2hTdGFjayhbXSksYj0wO2I8ZDtiKyspci5maW5kKGEsZVtiXSxjKTtyZXR1cm4gZD4xP3IudW5pcXVlU29ydChjKTpjfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEUodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEUodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIUUodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmQS50ZXN0KGEpP3IoYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgRixHPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvLEg9ci5mbi5pbml0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZSxmO2lmKCFhKXJldHVybiB0aGlzO2lmKGM9Y3x8RixcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoZT1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpHLmV4ZWMoYSksIWV8fCFlWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8YykuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoZVsxXSl7aWYoYj1iIGluc3RhbmNlb2Ygcj9iWzBdOmIsci5tZXJnZSh0aGlzLHIucGFyc2VIVE1MKGVbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6ZCwhMCkpLEMudGVzdChlWzFdKSYmci5pc1BsYWluT2JqZWN0KGIpKWZvcihlIGluIGIpci5pc0Z1bmN0aW9uKHRoaXNbZV0pP3RoaXNbZV0oYltlXSk6dGhpcy5hdHRyKGUsYltlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiYodGhpc1swXT1mLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOnIuaXNGdW5jdGlvbihhKT92b2lkIDAhPT1jLnJlYWR5P2MucmVhZHkoYSk6YShyKTpyLm1ha2VBcnJheShhLHRoaXMpfTtILnByb3RvdHlwZT1yLmZuLEY9cihkKTt2YXIgST0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxKPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O3IuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9cihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxjO2ErKylpZihyLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz1cInN0cmluZ1wiIT10eXBlb2YgYSYmcihhKTtpZighQS50ZXN0KGEpKWZvcig7ZDxlO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJnIuZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9yLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2kuY2FsbChyKGEpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci51bmlxdWVTb3J0KHIubWVyZ2UodGhpcy5nZXQoKSxyKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEsoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfXIuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBLKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gSyhhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHooKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB6KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBCKGEsXCJpZnJhbWVcIik/YS5jb250ZW50RG9jdW1lbnQ6KEIoYSxcInRlbXBsYXRlXCIpJiYoYT1hLmNvbnRlbnR8fGEpLHIubWVyZ2UoW10sYS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1yLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1yLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoSlthXXx8ci51bmlxdWVTb3J0KGUpLEkudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBMPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBNKGEpe3ZhciBiPXt9O3JldHVybiByLmVhY2goYS5tYXRjaChMKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1yLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP00oYSk6ci5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWV8fGEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7ci5lYWNoKGIsZnVuY3Rpb24oYixjKXtyLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1yLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gci5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPXIuaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksYzw9aCYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP3IuaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHxifHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9O2Z1bmN0aW9uIE4oYSl7cmV0dXJuIGF9ZnVuY3Rpb24gTyhhKXt0aHJvdyBhfWZ1bmN0aW9uIFAoYSxiLGMsZCl7dmFyIGU7dHJ5e2EmJnIuaXNGdW5jdGlvbihlPWEucHJvbWlzZSk/ZS5jYWxsKGEpLmRvbmUoYikuZmFpbChjKTphJiZyLmlzRnVuY3Rpb24oZT1hLnRoZW4pP2UuY2FsbChhLGIsYyk6Yi5hcHBseSh2b2lkIDAsW2FdLnNsaWNlKGQpKX1jYXRjaChhKXtjLmFwcGx5KHZvaWQgMCxbYV0pfX1yLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYil7dmFyIGM9W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixyLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxkPVwicGVuZGluZ1wiLGU9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBmLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiBlLnRoZW4obnVsbCxhKX0scGlwZTpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gci5EZWZlcnJlZChmdW5jdGlvbihiKXtyLmVhY2goYyxmdW5jdGlvbihjLGQpe3ZhciBlPXIuaXNGdW5jdGlvbihhW2RbNF1dKSYmYVtkWzRdXTtmW2RbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZSYmZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmci5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkucHJvZ3Jlc3MoYi5ub3RpZnkpLmRvbmUoYi5yZXNvbHZlKS5mYWlsKGIucmVqZWN0KTpiW2RbMF0rXCJXaXRoXCJdKHRoaXMsZT9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKGIsZCxlKXt2YXIgZj0wO2Z1bmN0aW9uIGcoYixjLGQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGg9dGhpcyxpPWFyZ3VtZW50cyxqPWZ1bmN0aW9uKCl7dmFyIGEsajtpZighKGI8Zikpe2lmKGE9ZC5hcHBseShoLGkpLGE9PT1jLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO2o9YSYmKFwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSYmYS50aGVuLHIuaXNGdW5jdGlvbihqKT9lP2ouY2FsbChhLGcoZixjLE4sZSksZyhmLGMsTyxlKSk6KGYrKyxqLmNhbGwoYSxnKGYsYyxOLGUpLGcoZixjLE8sZSksZyhmLGMsTixjLm5vdGlmeVdpdGgpKSk6KGQhPT1OJiYoaD12b2lkIDAsaT1bYV0pLChlfHxjLnJlc29sdmVXaXRoKShoLGkpKX19LGs9ZT9qOmZ1bmN0aW9uKCl7dHJ5e2ooKX1jYXRjaChhKXtyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJnIuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhhLGsuc3RhY2tUcmFjZSksYisxPj1mJiYoZCE9PU8mJihoPXZvaWQgMCxpPVthXSksYy5yZWplY3RXaXRoKGgsaSkpfX07Yj9rKCk6KHIuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYoay5zdGFja1RyYWNlPXIuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLGEuc2V0VGltZW91dChrKSl9fXJldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGEpe2NbMF1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihlKT9lOk4sYS5ub3RpZnlXaXRoKSksY1sxXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGIpP2I6TikpLGNbMl1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihkKT9kOk8pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9yLmV4dGVuZChhLGUpOmV9fSxmPXt9O3JldHVybiByLmVhY2goYyxmdW5jdGlvbihhLGIpe3ZhciBnPWJbMl0saD1iWzVdO2VbYlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtkPWh9LGNbMy1hXVsyXS5kaXNhYmxlLGNbMF1bMl0ubG9jayksZy5hZGQoYlszXS5maXJlKSxmW2JbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGZbYlswXStcIldpdGhcIl0odGhpcz09PWY/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxmW2JbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxlLnByb21pc2UoZiksYiYmYi5jYWxsKGYsZiksZn0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj1hcmd1bWVudHMubGVuZ3RoLGM9YixkPUFycmF5KGMpLGU9Zi5jYWxsKGFyZ3VtZW50cyksZz1yLkRlZmVycmVkKCksaD1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyl7ZFthXT10aGlzLGVbYV09YXJndW1lbnRzLmxlbmd0aD4xP2YuY2FsbChhcmd1bWVudHMpOmMsLS1ifHxnLnJlc29sdmVXaXRoKGQsZSl9fTtpZihiPD0xJiYoUChhLGcuZG9uZShoKGMpKS5yZXNvbHZlLGcucmVqZWN0LCFiKSxcInBlbmRpbmdcIj09PWcuc3RhdGUoKXx8ci5pc0Z1bmN0aW9uKGVbY10mJmVbY10udGhlbikpKXJldHVybiBnLnRoZW4oKTt3aGlsZShjLS0pUChlW2NdLGgoYyksZy5yZWplY3QpO3JldHVybiBnLnByb21pc2UoKX19KTt2YXIgUT0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oYixjKXthLmNvbnNvbGUmJmEuY29uc29sZS53YXJuJiZiJiZRLnRlc3QoYi5uYW1lKSYmYS5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitiLm1lc3NhZ2UsYi5zdGFjayxjKX0sci5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihiKXthLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBifSl9O3ZhciBSPXIuRGVmZXJyZWQoKTtyLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBSLnRoZW4oYSlbXCJjYXRjaFwiXShmdW5jdGlvbihhKXtyLnJlYWR5RXhjZXB0aW9uKGEpfSksdGhpc30sci5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLXIucmVhZHlXYWl0OnIuaXNSZWFkeSl8fChyLmlzUmVhZHk9ITAsYSE9PSEwJiYtLXIucmVhZHlXYWl0PjB8fFIucmVzb2x2ZVdpdGgoZCxbcl0pKX19KSxyLnJlYWR5LnRoZW49Ui50aGVuO2Z1bmN0aW9uIFMoKXtkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsUyksXG5hLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUyksci5yZWFkeSgpfVwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9hLnNldFRpbWVvdXQoci5yZWFkeSk6KGQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixTKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUykpO3ZhciBUPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PXIudHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKVQoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsci5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKHIoYSksYyl9KSksYikpZm9yKDtoPGk7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sVT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIFYoKXt0aGlzLmV4cGFuZG89ci5leHBhbmRvK1YudWlkKyt9Vi51aWQ9MSxWLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxVKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW3IuY2FtZWxDYXNlKGIpXT1jO2Vsc2UgZm9yKGQgaW4gYillW3IuY2FtZWxDYXNlKGQpXT1iW2RdO3JldHVybiBlfSxnZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdm9pZCAwPT09Yj90aGlzLmNhY2hlKGEpOmFbdGhpcy5leHBhbmRvXSYmYVt0aGlzLmV4cGFuZG9dW3IuY2FtZWxDYXNlKGIpXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/dGhpcy5nZXQoYSxiKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09ZCl7aWYodm9pZCAwIT09Yil7QXJyYXkuaXNBcnJheShiKT9iPWIubWFwKHIuY2FtZWxDYXNlKTooYj1yLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5tYXRjaChMKXx8W10pLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBkW2JbY11dfSh2b2lkIDA9PT1ifHxyLmlzRW1wdHlPYmplY3QoZCkpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFyLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgVz1uZXcgVixYPW5ldyBWLFk9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFo9L1tBLVpdL2c7ZnVuY3Rpb24gJChhKXtyZXR1cm5cInRydWVcIj09PWF8fFwiZmFsc2VcIiE9PWEmJihcIm51bGxcIj09PWE/bnVsbDphPT09K2ErXCJcIj8rYTpZLnRlc3QoYSk/SlNPTi5wYXJzZShhKTphKX1mdW5jdGlvbiBfKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoWixcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPSQoYyl9Y2F0Y2goZSl7fVguc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfXIuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBYLmhhc0RhdGEoYSl8fFcuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFguYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1gucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gVy5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1cucmVtb3ZlKGEsYil9fSksci5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1YLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIVcuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1yLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxfKGYsZCxlW2RdKSkpO1cuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5zZXQodGhpcyxhKX0pOlQodGhpcyxmdW5jdGlvbihiKXt2YXIgYztpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVguZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPV8oZixhKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1gucmVtb3ZlKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGEpcmV0dXJuIGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Vy5nZXQoYSxiKSxjJiYoIWR8fEFycmF5LmlzQXJyYXkoYyk/ZD1XLmFjY2VzcyhhLGIsci5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W119LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1yLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPXIuX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7ci5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gVy5nZXQoYSxjKXx8Vy5hY2Nlc3MoYSxjLHtlbXB0eTpyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1cucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksci5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9yLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPXIucXVldWUodGhpcyxhLGIpO3IuX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJnIuZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPXIuRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPVcuZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIGFhPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxiYT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIithYStcIikoW2EteiVdKikkXCIsXCJpXCIpLGNhPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxkYT1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1hLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1hLnN0eWxlLmRpc3BsYXkmJnIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJkaXNwbGF5XCIpfSxlYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07ZnVuY3Rpb24gZmEoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwoci5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KHIuY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJmJhLmV4ZWMoci5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixyLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBnYT17fTtmdW5jdGlvbiBoYShhKXt2YXIgYixjPWEub3duZXJEb2N1bWVudCxkPWEubm9kZU5hbWUsZT1nYVtkXTtyZXR1cm4gZT9lOihiPWMuYm9keS5hcHBlbmRDaGlsZChjLmNyZWF0ZUVsZW1lbnQoZCkpLGU9ci5jc3MoYixcImRpc3BsYXlcIiksYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLFwibm9uZVwiPT09ZSYmKGU9XCJibG9ja1wiKSxnYVtkXT1lLGUpfWZ1bmN0aW9uIGlhKGEsYil7Zm9yKHZhciBjLGQsZT1bXSxmPTAsZz1hLmxlbmd0aDtmPGc7ZisrKWQ9YVtmXSxkLnN0eWxlJiYoYz1kLnN0eWxlLmRpc3BsYXksYj8oXCJub25lXCI9PT1jJiYoZVtmXT1XLmdldChkLFwiZGlzcGxheVwiKXx8bnVsbCxlW2ZdfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZkYShkKSYmKGVbZl09aGEoZCkpKTpcIm5vbmVcIiE9PWMmJihlW2ZdPVwibm9uZVwiLFcuc2V0KGQsXCJkaXNwbGF5XCIsYykpKTtmb3IoZj0wO2Y8ZztmKyspbnVsbCE9ZVtmXSYmKGFbZl0uc3R5bGUuZGlzcGxheT1lW2ZdKTtyZXR1cm4gYX1yLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBpYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBpYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2RhKHRoaXMpP3IodGhpcykuc2hvdygpOnIodGhpcykuaGlkZSgpfSl9fSk7dmFyIGphPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGthPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSxsYT0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLG1hPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07bWEub3B0Z3JvdXA9bWEub3B0aW9uLG1hLnRib2R5PW1hLnRmb290PW1hLmNvbGdyb3VwPW1hLmNhcHRpb249bWEudGhlYWQsbWEudGg9bWEudGQ7ZnVuY3Rpb24gbmEoYSxiKXt2YXIgYztyZXR1cm4gYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W10sdm9pZCAwPT09Ynx8YiYmQihhLGIpP3IubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gb2EoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspVy5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Vy5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBwYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gcWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxuPTAsbz1hLmxlbmd0aDtuPG87bisrKWlmKGY9YVtuXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09ci50eXBlKGYpKXIubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKHBhLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KGthLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9bWFbaF18fG1hLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rci5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO3IubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbj0wO3doaWxlKGY9bVtuKytdKWlmKGQmJnIuaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9ci5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1uYShsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJm9hKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlsYS50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLG8uY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixvLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIHJhPWQuZG9jdW1lbnRFbGVtZW50LHNhPS9ea2V5Lyx0YT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sdWE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB2YSgpe3JldHVybiEwfWZ1bmN0aW9uIHdhKCl7cmV0dXJuITF9ZnVuY3Rpb24geGEoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIHlhKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYil5YShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPXdhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHIoKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9ci5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9ci5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1XLmdldChhKTtpZihxKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJhLGUpLGMuZ3VpZHx8KGMuZ3VpZD1yLmd1aWQrKyksKGk9cS5ldmVudHMpfHwoaT1xLmV2ZW50cz17fSksKGc9cS5oYW5kbGUpfHwoZz1xLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgciYmci5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/ci5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goTCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPXVhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbiYmKGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxrPXIuZXh0ZW5kKHt0eXBlOm4sb3JpZ1R5cGU6cCxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJnIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6by5qb2luKFwiLlwiKX0sZiksKG09aVtuXSl8fChtPWlbbl09W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxvLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG4sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxyLmV2ZW50Lmdsb2JhbFtuXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vy5oYXNEYXRhKGEpJiZXLmdldChhKTtpZihxJiYoaT1xLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEwpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD11YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4pe2w9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLG09aVtuXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrby5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnAhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEsbyxxLmhhbmRsZSkhPT0hMXx8ci5yZW1vdmVFdmVudChhLG4scS5oYW5kbGUpLGRlbGV0ZSBpW25dKX1lbHNlIGZvcihuIGluIGkpci5ldmVudC5yZW1vdmUoYSxuK2Jbal0sYyxkLCEwKTtyLmlzRW1wdHlPYmplY3QoaSkmJlcucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dmFyIGI9ci5ldmVudC5maXgoYSksYyxkLGUsZixnLGgsaT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksaj0oVy5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV18fFtdLGs9ci5ldmVudC5zcGVjaWFsW2IudHlwZV18fHt9O2ZvcihpWzBdPWIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspaVtjXT1hcmd1bWVudHNbY107aWYoYi5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxiKSE9PSExKXtoPXIuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGIsaiksYz0wO3doaWxlKChmPWhbYysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2IuY3VycmVudFRhcmdldD1mLmVsZW0sZD0wO3doaWxlKChnPWYuaGFuZGxlcnNbZCsrXSkmJiFiLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpYi5ybmFtZXNwYWNlJiYhYi5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpfHwoYi5oYW5kbGVPYmo9ZyxiLmRhdGE9Zy5kYXRhLGU9KChyLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihiLnJlc3VsdD1lKT09PSExJiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxiKSxiLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoPVtdLGk9Yi5kZWxlZ2F0ZUNvdW50LGo9YS50YXJnZXQ7aWYoaSYmai5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1hLnR5cGUmJmEuYnV0dG9uPj0xKSlmb3IoO2ohPT10aGlzO2o9ai5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1qLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxqLmRpc2FibGVkIT09ITApKXtmb3IoZj1bXSxnPXt9LGM9MDtjPGk7YysrKWQ9YltjXSxlPWQuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09Z1tlXSYmKGdbZV09ZC5uZWVkc0NvbnRleHQ/cihlLHRoaXMpLmluZGV4KGopPi0xOnIuZmluZChlLHRoaXMsbnVsbCxbal0pLmxlbmd0aCksZ1tlXSYmZi5wdXNoKGQpO2YubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpmfSl9cmV0dXJuIGo9dGhpcyxpPGIubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpiLnNsaWNlKGkpfSksaH0sYWRkUHJvcDpmdW5jdGlvbihhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLkV2ZW50LnByb3RvdHlwZSxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ci5pc0Z1bmN0aW9uKGIpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBiKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbYV19LHNldDpmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fSl9LGZpeDpmdW5jdGlvbihhKXtyZXR1cm4gYVtyLmV4cGFuZG9dP2E6bmV3IHIuRXZlbnQoYSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT14YSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT14YSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmQih0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LHIucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LHIuRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHIuRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP3ZhOndhLHRoaXMudGFyZ2V0PWEudGFyZ2V0JiYzPT09YS50YXJnZXQubm9kZVR5cGU/YS50YXJnZXQucGFyZW50Tm9kZTphLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9YS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1hLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1hLGImJnIuZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fHIubm93KCksdm9pZCh0aGlzW3IuZXhwYW5kb109ITApKTpuZXcgci5FdmVudChhLGIpfSxyLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6ci5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6d2EsaXNQcm9wYWdhdGlvblN0b3BwZWQ6d2EsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6d2EsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxyLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oYSl7dmFyIGI9YS5idXR0b247cmV0dXJuIG51bGw9PWEud2hpY2gmJnNhLnRlc3QoYS50eXBlKT9udWxsIT1hLmNoYXJDb2RlP2EuY2hhckNvZGU6YS5rZXlDb2RlOiFhLndoaWNoJiZ2b2lkIDAhPT1iJiZ0YS50ZXN0KGEudHlwZSk/MSZiPzE6MiZiPzM6NCZiPzI6MDphLndoaWNofX0sci5ldmVudC5hZGRQcm9wKSxyLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtyLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fHIuY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLHIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geWEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB5YSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixyKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9d2EpLHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIHphPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLEFhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEJhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksQ2E9L150cnVlXFwvKC4qKS8sRGE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIEVhKGEsYil7cmV0dXJuIEIoYSxcInRhYmxlXCIpJiZCKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP3IoXCI+dGJvZHlcIixhKVswXXx8YTphfWZ1bmN0aW9uIEZhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIEdhKGEpe3ZhciBiPUNhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBIYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKFcuaGFzRGF0YShhKSYmKGY9Vy5hY2Nlc3MoYSksZz1XLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7YzxkO2MrKylyLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9WC5oYXNEYXRhKGEpJiYoaD1YLmFjY2VzcyhhKSxpPXIuZXh0ZW5kKHt9LGgpLFguc2V0KGIsaSkpfX1mdW5jdGlvbiBJYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZqYS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIEphKGEsYixjLGQpe2I9Zy5hcHBseShbXSxiKTt2YXIgZSxmLGgsaSxqLGssbD0wLG09YS5sZW5ndGgsbj1tLTEscT1iWzBdLHM9ci5pc0Z1bmN0aW9uKHEpO2lmKHN8fG0+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFvLmNoZWNrQ2xvbmUmJkJhLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3MmJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxKYShmLGIsYyxkKX0pO2lmKG0mJihlPXFhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZj1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWYpLGZ8fGQpKXtmb3IoaD1yLm1hcChuYShlLFwic2NyaXB0XCIpLEZhKSxpPWgubGVuZ3RoO2w8bTtsKyspaj1lLGwhPT1uJiYoaj1yLmNsb25lKGosITAsITApLGkmJnIubWVyZ2UoaCxuYShqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbF0saixsKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxyLm1hcChoLEdhKSxsPTA7bDxpO2wrKylqPWhbbF0sbGEudGVzdChqLnR5cGV8fFwiXCIpJiYhVy5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJnIuY29udGFpbnMoayxqKSYmKGouc3JjP3IuX2V2YWxVcmwmJnIuX2V2YWxVcmwoai5zcmMpOnAoai50ZXh0Q29udGVudC5yZXBsYWNlKERhLFwiXCIpLGspKX1yZXR1cm4gYX1mdW5jdGlvbiBLYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9yLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8ci5jbGVhbkRhdGEobmEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJnIuY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZvYShuYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfXIuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoemEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPXIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoby5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8ci5pc1hNTERvYyhhKSkpZm9yKGc9bmEoaCksZj1uYShhKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUlhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG5hKGEpLGc9Z3x8bmEoaCksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylIYShmW2RdLGdbZF0pO2Vsc2UgSGEoYSxoKTtyZXR1cm4gZz1uYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm9hKGcsIWkmJm5hKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9ci5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoVShjKSl7aWYoYj1jW1cuZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/ci5ldmVudC5yZW1vdmUoYyxkKTpyLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tXLmV4cGFuZG9dPXZvaWQgMH1jW1guZXhwYW5kb10mJihjW1guZXhwYW5kb109dm9pZCAwKX19fSksci5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gS2EodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiBLYSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/ci50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1FYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUVhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG5hKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGwhPWEmJmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiByLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhQWEudGVzdChhKSYmIW1hWyhrYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9ci5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2M8ZDtjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG5hKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtyLmluQXJyYXkodGhpcyxhKTwwJiYoci5jbGVhbkRhdGEobmEodGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxyLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9cihhKSxmPWUubGVuZ3RoLTEsZz0wO2c8PWY7ZysrKWM9Zz09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxyKGVbZ10pW2JdKGMpLGguYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIExhPS9ebWFyZ2luLyxNYT1uZXcgUmVnRXhwKFwiXihcIithYStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxOYT1mdW5jdGlvbihiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIGMmJmMub3BlbmVyfHwoYz1hKSxjLmdldENvbXB1dGVkU3R5bGUoYil9OyFmdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtpZihpKXtpLnN0eWxlLmNzc1RleHQ9XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixpLmlubmVySFRNTD1cIlwiLHJhLmFwcGVuZENoaWxkKGgpO3ZhciBiPWEuZ2V0Q29tcHV0ZWRTdHlsZShpKTtjPVwiMSVcIiE9PWIudG9wLGc9XCIycHhcIj09PWIubWFyZ2luTGVmdCxlPVwiNHB4XCI9PT1iLndpZHRoLGkuc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixmPVwiNHB4XCI9PT1iLm1hcmdpblJpZ2h0LHJhLnJlbW92ZUNoaWxkKGgpLGk9bnVsbH19dmFyIGMsZSxmLGcsaD1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5zdHlsZSYmKGkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGkuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLG8uY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWkuc3R5bGUuYmFja2dyb3VuZENsaXAsaC5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixoLmFwcGVuZENoaWxkKGkpLHIuZXh0ZW5kKG8se3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGN9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxlfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxmfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGd9fSkpfSgpO2Z1bmN0aW9uIE9hKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8TmEoYSksYyYmKGc9Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdLFwiXCIhPT1nfHxyLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9ci5zdHlsZShhLGIpKSwhby5waXhlbE1hcmdpblJpZ2h0KCkmJk1hLnRlc3QoZykmJkxhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9ZikpLHZvaWQgMCE9PWc/ZytcIlwiOmd9ZnVuY3Rpb24gUGEoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19dmFyIFFhPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxSYT0vXi0tLyxTYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sVGE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxVYT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sVmE9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIFdhKGEpe2lmKGEgaW4gVmEpcmV0dXJuIGE7dmFyIGI9YVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksYz1VYS5sZW5ndGg7d2hpbGUoYy0tKWlmKGE9VWFbY10rYixhIGluIFZhKXJldHVybiBhfWZ1bmN0aW9uIFhhKGEpe3ZhciBiPXIuY3NzUHJvcHNbYV07cmV0dXJuIGJ8fChiPXIuY3NzUHJvcHNbYV09V2EoYSl8fGEpLGJ9ZnVuY3Rpb24gWWEoYSxiLGMpe3ZhciBkPWJhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzJdLShjfHwwKSkrKGRbM118fFwicHhcIik6Yn1mdW5jdGlvbiBaYShhLGIsYyxkLGUpe3ZhciBmLGc9MDtmb3IoZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MDtmPDQ7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPXIuY3NzKGEsYytjYVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09ci5jc3MoYSxcInBhZGRpbmdcIitjYVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1yLmNzcyhhLFwiYm9yZGVyXCIrY2FbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPXIuY3NzKGEsXCJwYWRkaW5nXCIrY2FbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9ci5jc3MoYSxcImJvcmRlclwiK2NhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uICRhKGEsYixjKXt2YXIgZCxlPU5hKGEpLGY9T2EoYSxiLGUpLGc9XCJib3JkZXItYm94XCI9PT1yLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSk7cmV0dXJuIE1hLnRlc3QoZik/ZjooZD1nJiYoby5ib3hTaXppbmdSZWxpYWJsZSgpfHxmPT09YS5zdHlsZVtiXSksXCJhdXRvXCI9PT1mJiYoZj1hW1wib2Zmc2V0XCIrYlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSldKSxmPXBhcnNlRmxvYXQoZil8fDAsZitaYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxlKStcInB4XCIpfXIuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9T2EoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPVJhLnRlc3QoYiksaj1hLnN0eWxlO3JldHVybiBpfHwoYj1YYShoKSksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6altiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9YmEuZXhlYyhjKSkmJmVbMV0mJihjPWZhKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwoci5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxvLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaltiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpP2ouc2V0UHJvcGVydHkoYixjKTpqW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPXIuY2FtZWxDYXNlKGIpLGk9UmEudGVzdChiKTtyZXR1cm4gaXx8KGI9WGEoaCkpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9T2EoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBUYSYmKGU9VGFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxpc0Zpbml0ZShmKT9mfHwwOmUpOmV9fSksci5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe2lmKGMpcmV0dXJuIVFhLnRlc3Qoci5jc3MoYSxcImRpc3BsYXlcIikpfHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoPyRhKGEsYixkKTplYShhLFNhLGZ1bmN0aW9uKCl7cmV0dXJuICRhKGEsYixkKX0pfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9ZCYmTmEoYSksZz1kJiZaYShhLGIsZCxcImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKSxmKTtyZXR1cm4gZyYmKGU9YmEuZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9ci5jc3MoYSxiKSksWWEoYSxjLGcpfX19KSxyLmNzc0hvb2tzLm1hcmdpbkxlZnQ9UGEoby5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtpZihiKXJldHVybihwYXJzZUZsb2F0KE9hKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LWVhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLHIuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTtkPDQ7ZCsrKWVbYStjYVtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxMYS50ZXN0KGEpfHwoci5jc3NIb29rc1thK2JdLnNldD1ZYSl9KSxyLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihBcnJheS5pc0FycmF5KGIpKXtmb3IoZD1OYShhKSxlPWIubGVuZ3RoO2c8ZTtnKyspZltiW2ddXT1yLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/ci5zdHlsZShhLGIsYyk6ci5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9fSk7ZnVuY3Rpb24gX2EoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IF9hLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9ci5Ud2Vlbj1fYSxfYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOl9hLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fHIuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwoci5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1fYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6X2EucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9X2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPXIuZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpfYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxfYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9X2EucHJvdG90eXBlLF9hLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPXIuY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtyLmZ4LnN0ZXBbYS5wcm9wXT9yLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbci5jc3NQcm9wc1thLnByb3BdXSYmIXIuY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpyLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxfYS5wcm9wSG9va3Muc2Nyb2xsVG9wPV9hLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LHIuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxyLmZ4PV9hLnByb3RvdHlwZS5pbml0LHIuZnguc3RlcD17fTt2YXIgYWIsYmIsY2I9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGRiPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gZWIoKXtiYiYmKGQuaGlkZGVuPT09ITEmJmEucmVxdWVzdEFuaW1hdGlvbkZyYW1lP2EucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGViKTphLnNldFRpbWVvdXQoZWIsci5meC5pbnRlcnZhbCksci5meC50aWNrKCkpfWZ1bmN0aW9uIGZiKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe2FiPXZvaWQgMH0pLGFiPXIubm93KCl9ZnVuY3Rpb24gZ2IoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowO2Q8NDtkKz0yLWIpYz1jYVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBoYihhLGIsYyl7Zm9yKHZhciBkLGU9KGtiLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KGtiLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gaWIoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD1cIndpZHRoXCJpbiBifHxcImhlaWdodFwiaW4gYixtPXRoaXMsbj17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZkYShhKSxxPVcuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGc9ci5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09Zy51bnF1ZXVlZCYmKGcudW5xdWV1ZWQ9MCxoPWcuZW1wdHkuZmlyZSxnLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtnLnVucXVldWVkfHxoKCl9KSxnLnVucXVldWVkKyssbS5hbHdheXMoZnVuY3Rpb24oKXttLmFsd2F5cyhmdW5jdGlvbigpe2cudW5xdWV1ZWQtLSxyLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGcuZW1wdHkuZmlyZSgpfSl9KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sY2IudGVzdChlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bltkXT1xJiZxW2RdfHxyLnN0eWxlKGEsZCl9aWYoaT0hci5pc0VtcHR5T2JqZWN0KGIpLGl8fCFyLmlzRW1wdHlPYmplY3Qobikpe2wmJjE9PT1hLm5vZGVUeXBlJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1xJiZxLmRpc3BsYXksbnVsbD09aiYmKGo9Vy5nZXQoYSxcImRpc3BsYXlcIikpLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksXCJub25lXCI9PT1rJiYoaj9rPWo6KGlhKFthXSwhMCksaj1hLnN0eWxlLmRpc3BsYXl8fGosaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxpYShbYV0pKSksKFwiaW5saW5lXCI9PT1rfHxcImlubGluZS1ibG9ja1wiPT09ayYmbnVsbCE9aikmJlwibm9uZVwiPT09ci5jc3MoYSxcImZsb2F0XCIpJiYoaXx8KG0uZG9uZShmdW5jdGlvbigpe28uZGlzcGxheT1qfSksbnVsbD09aiYmKGs9by5kaXNwbGF5LGo9XCJub25lXCI9PT1rP1wiXCI6aykpLG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixtLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSksaT0hMTtmb3IoZCBpbiBuKWl8fChxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1XLmFjY2VzcyhhLFwiZnhzaG93XCIse2Rpc3BsYXk6an0pLGYmJihxLmhpZGRlbj0hcCkscCYmaWEoW2FdLCEwKSxtLmRvbmUoZnVuY3Rpb24oKXtwfHxpYShbYV0pLFcucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGQgaW4gbilyLnN0eWxlKGEsZCxuW2RdKX0pKSxpPWhiKHA/cVtkXTowLGQsbSksZCBpbiBxfHwocVtkXT1pLnN0YXJ0LHAmJihpLmVuZD1pLnN0YXJ0LGkuc3RhcnQ9MCkpfX1mdW5jdGlvbiBqYihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPXIuY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sQXJyYXkuaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9ci5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIGtiKGEsYixjKXt2YXIgZCxlLGY9MCxnPWtiLnByZWZpbHRlcnMubGVuZ3RoLGg9ci5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9YWJ8fGZiKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2c8aTtnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSxmPDEmJmk/YzooaXx8aC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOnIuZXh0ZW5kKHt9LGIpLG9wdHM6ci5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOnIuZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6YWJ8fGZiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1yLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2M8ZDtjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKGpiKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2Y8ZztmKyspaWYoZD1rYi5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gci5pc0Z1bmN0aW9uKGQuc3RvcCkmJihyLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9ci5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIHIubWFwKGssaGIsaiksci5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyksci5meC50aW1lcihyLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqfXIuQW5pbWF0aW9uPXIuZXh0ZW5kKGtiLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBmYShjLmVsZW0sYSxiYS5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe3IuaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEwpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWM9YVtkXSxrYi50d2VlbmVyc1tjXT1rYi50d2VlbmVyc1tjXXx8W10sa2IudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbaWJdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/a2IucHJlZmlsdGVycy51bnNoaWZ0KGEpOmtiLnByZWZpbHRlcnMucHVzaChhKX19KSxyLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9yLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fHIuaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhci5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gci5meC5vZmY/ZC5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiBkLmR1cmF0aW9uJiYoZC5kdXJhdGlvbiBpbiByLmZ4LnNwZWVkcz9kLmR1cmF0aW9uPXIuZnguc3BlZWRzW2QuZHVyYXRpb25dOmQuZHVyYXRpb249ci5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPWQucXVldWUmJmQucXVldWUhPT0hMHx8KGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtyLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJnIuZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxyLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihkYSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1yLmlzRW1wdHlPYmplY3QoYSksZj1yLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9a2IodGhpcyxyLmV4dGVuZCh7fSxhKSxmKTsoZXx8Vy5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPXIudGltZXJzLGc9Vy5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmZGIudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTshYiYmY3x8ci5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1XLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPXIudGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxyLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtiPGc7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLHIuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmZuW2JdO3IuZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGdiKGIsITApLGEsZCxlKX19KSxyLmVhY2goe3NsaWRlRG93bjpnYihcInNob3dcIiksc2xpZGVVcDpnYihcImhpZGVcIiksc2xpZGVUb2dnbGU6Z2IoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksci50aW1lcnM9W10sci5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9ci50aW1lcnM7Zm9yKGFiPXIubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8ci5meC5zdG9wKCksYWI9dm9pZCAwfSxyLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe3IudGltZXJzLnB1c2goYSksci5meC5zdGFydCgpfSxyLmZ4LmludGVydmFsPTEzLHIuZnguc3RhcnQ9ZnVuY3Rpb24oKXtiYnx8KGJiPSEwLGViKCkpfSxyLmZ4LnN0b3A9ZnVuY3Rpb24oKXtiYj1udWxsfSxyLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxyLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9ci5meD9yLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9ZC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsby5jaGVja09uPVwiXCIhPT1hLnZhbHVlLG8ub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixvLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBsYixtYj1yLmV4cHIuYXR0ckhhbmRsZTtyLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsci5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLHIuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9yLnByb3AoYSxiLGMpOigxPT09ZiYmci5pc1hNTERvYyhhKXx8KGU9ci5hdHRySG9va3NbYi50b0xvd2VyQ2FzZSgpXXx8KHIuZXhwci5tYXRjaC5ib29sLnRlc3QoYik/bGI6dm9pZCAwKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIHIucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9ci5maW5kLmF0dHIoYSxiKSxcbm51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighby5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZCKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPWImJmIubWF0Y2goTCk7aWYoZSYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1lW2QrK10pYS5yZW1vdmVBdHRyaWJ1dGUoYyl9fSksbGI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9yLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxyLmVhY2goci5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9bWJbYl18fHIuZmluZC5hdHRyO21iW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmLGc9Yi50b0xvd2VyQ2FzZSgpO3JldHVybiBkfHwoZj1tYltnXSxtYltnXT1lLGU9bnVsbCE9YyhhLGIsZCk/ZzpudWxsLG1iW2ddPWYpLGV9fSk7dmFyIG5iPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksb2I9L14oPzphfGFyZWEpJC9pO3IuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxyLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW3IucHJvcEZpeFthXXx8YV19KX19KSxyLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJnIuaXNYTUxEb2MoYSl8fChiPXIucHJvcEZpeFtiXXx8YixlPXIucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOm5iLnRlc3QoYS5ub2RlTmFtZSl8fG9iLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksby5vcHRTZWxlY3RlZHx8KHIucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7YiYmKGIuc2VsZWN0ZWRJbmRleCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxyLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7ci5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO2Z1bmN0aW9uIHBiKGEpe3ZhciBiPWEubWF0Y2goTCl8fFtdO3JldHVybiBiLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHFiKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1yLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixxYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChMKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1xYihjKSxkPTE9PT1jLm5vZGVUeXBlJiZcIiBcIitwYihlKStcIiBcIil7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1wYihkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixxYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChMKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1xYihjKSxkPTE9PT1jLm5vZGVUeXBlJiZcIiBcIitwYihlKStcIiBcIil7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPXBiKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6ci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMscWIodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9cih0aGlzKSxmPWEubWF0Y2goTCl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Ugdm9pZCAwIT09YSYmXCJib29sZWFuXCIhPT1jfHwoYj1xYih0aGlzKSxiJiZXLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGIpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6Vy5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQ9MDtiPVwiIFwiK2ErXCIgXCI7d2hpbGUoYz10aGlzW2QrK10paWYoMT09PWMubm9kZVR5cGUmJihcIiBcIitwYihxYihjKSkrXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHJiPS9cXHIvZztyLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9ci5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLHIodGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpBcnJheS5pc0FycmF5KGUpJiYoZT1yLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9ci52YWxIb29rc1t0aGlzLnR5cGVdfHxyLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPXIudmFsSG9va3NbZS50eXBlXXx8ci52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UocmIsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxyLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXIuZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOnBiKHIudGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT1hLm9wdGlvbnMsZj1hLnNlbGVjdGVkSW5kZXgsZz1cInNlbGVjdC1vbmVcIj09PWEudHlwZSxoPWc/bnVsbDpbXSxpPWc/ZisxOmUubGVuZ3RoO2ZvcihkPWY8MD9pOmc/ZjowO2Q8aTtkKyspaWYoYz1lW2RdLChjLnNlbGVjdGVkfHxkPT09ZikmJiFjLmRpc2FibGVkJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUIoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPXIoYykudmFsKCksZylyZXR1cm4gYjtoLnB1c2goYil9cmV0dXJuIGh9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1yLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9ci5pbkFycmF5KHIudmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLHIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtyLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtpZihBcnJheS5pc0FycmF5KGIpKXJldHVybiBhLmNoZWNrZWQ9ci5pbkFycmF5KHIoYSkudmFsKCksYik+LTF9fSxvLmNoZWNrT258fChyLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBzYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87ci5leHRlbmQoci5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixrLG0sbixvPVtlfHxkXSxwPWwuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixxPWwuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIXNiLnRlc3QocCtyLmV2ZW50LnRyaWdnZXJlZCkmJihwLmluZGV4T2YoXCIuXCIpPi0xJiYocT1wLnNwbGl0KFwiLlwiKSxwPXEuc2hpZnQoKSxxLnNvcnQoKSksaz1wLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitwLGI9YltyLmV4cGFuZG9dP2I6bmV3IHIuRXZlbnQocCxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9cS5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Euam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpyLm1ha2VBcnJheShjLFtiXSksbj1yLmV2ZW50LnNwZWNpYWxbcF18fHt9LGZ8fCFuLnRyaWdnZXJ8fG4udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW4ubm9CdWJibGUmJiFyLmlzV2luZG93KGUpKXtmb3Ioaj1uLmRlbGVnYXRlVHlwZXx8cCxzYi50ZXN0KGorcCl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlvLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmby5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9b1tnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6bi5iaW5kVHlwZXx8cCxtPShXLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmVy5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1rJiZoW2tdLG0mJm0uYXBwbHkmJlUoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXAsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8bi5fZGVmYXVsdCYmbi5fZGVmYXVsdC5hcHBseShvLnBvcCgpLGMpIT09ITF8fCFVKGUpfHxrJiZyLmlzRnVuY3Rpb24oZVtwXSkmJiFyLmlzV2luZG93KGUpJiYoaT1lW2tdLGkmJihlW2tdPW51bGwpLHIuZXZlbnQudHJpZ2dlcmVkPXAsZVtwXSgpLHIuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtrXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ci5leHRlbmQobmV3IHIuRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7ci5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKX19KSxyLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtpZihjKXJldHVybiByLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApfX0pLHIuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxyLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksby5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLG8uZm9jdXNpbnx8ci5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtyLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsci5ldmVudC5maXgoYSkpfTtyLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vy5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxXLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPVcuYWNjZXNzKGQsYiktMTtlP1cuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksVy5yZW1vdmUoZCxiKSl9fX0pO3ZhciB0Yj1hLmxvY2F0aW9uLHViPXIubm93KCksdmI9L1xcPy87ci5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4gYyYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fHIuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIHdiPS9cXFtcXF0kLyx4Yj0vXFxyP1xcbi9nLHliPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSx6Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gQWIoYSxiLGMsZCl7dmFyIGU7aWYoQXJyYXkuaXNBcnJheShiKSlyLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fHdiLnRlc3QoYSk/ZChhLGUpOkFiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09ci50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpQWIoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1yLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7dmFyIGM9ci5pc0Z1bmN0aW9uKGIpP2IoKTpiO2RbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09Yz9cIlwiOmMpfTtpZihBcnJheS5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIXIuaXNQbGFpbk9iamVjdChhKSlyLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUFiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpfSxyLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHIucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1yLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP3IubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIXIodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJnpiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiF5Yi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhamEudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1yKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6QXJyYXkuaXNBcnJheShjKT9yLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZSh4YixcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgQmI9LyUyMC9nLENiPS8jLiokLyxEYj0vKFs/Jl0pXz1bXiZdKi8sRWI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxGYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxHYj0vXig/OkdFVHxIRUFEKSQvLEhiPS9eXFwvXFwvLyxJYj17fSxKYj17fSxLYj1cIiovXCIuY29uY2F0KFwiKlwiKSxMYj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0xiLmhyZWY9dGIuaHJlZjtmdW5jdGlvbiBNYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goTCl8fFtdO2lmKHIuaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1KYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLHIuZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIE9iKGEsYil7dmFyIGMsZCxlPXIuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJnIuZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBQYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfWlmKGYpcmV0dXJuIGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXX1mdW5jdGlvbiBRYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fXIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDp0Yi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOkZiLnRlc3QodGIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOktiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpyLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9PYihPYihhLHIuYWpheFNldHRpbmdzKSxiKTpPYihyLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpNYihJYiksYWpheFRyYW5zcG9ydDpNYihKYiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbSxuLG89ci5hamF4U2V0dXAoe30sYykscD1vLmNvbnRleHR8fG8scT1vLmNvbnRleHQmJihwLm5vZGVUeXBlfHxwLmpxdWVyeSk/cihwKTpyLmV2ZW50LHM9ci5EZWZlcnJlZCgpLHQ9ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx1PW8uc3RhdHVzQ29kZXx8e30sdj17fSx3PXt9LHg9XCJjYW5jZWxlZFwiLHk9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZihrKXtpZighaCl7aD17fTt3aGlsZShiPUViLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaz9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09ayYmKGE9d1thLnRvTG93ZXJDYXNlKCldPXdbYS50b0xvd2VyQ2FzZSgpXXx8YSx2W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWsmJihvLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZihrKXkuYWx3YXlzKGFbeS5zdGF0dXNdKTtlbHNlIGZvcihiIGluIGEpdVtiXT1bdVtiXSxhW2JdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8eDtyZXR1cm4gZSYmZS5hYm9ydChiKSxBKDAsYiksdGhpc319O2lmKHMucHJvbWlzZSh5KSxvLnVybD0oKGJ8fG8udXJsfHx0Yi5ocmVmKStcIlwiKS5yZXBsYWNlKEhiLHRiLnByb3RvY29sK1wiLy9cIiksby50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG8ubWV0aG9kfHxvLnR5cGUsby5kYXRhVHlwZXM9KG8uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEwpfHxbXCJcIl0sbnVsbD09by5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9by51cmwsai5ocmVmPWouaHJlZixvLmNyb3NzRG9tYWluPUxiLnByb3RvY29sK1wiLy9cIitMYi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeil7by5jcm9zc0RvbWFpbj0hMH19aWYoby5kYXRhJiZvLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygby5kYXRhJiYoby5kYXRhPXIucGFyYW0oby5kYXRhLG8udHJhZGl0aW9uYWwpKSxOYihJYixvLGMseSksaylyZXR1cm4geTtsPXIuZXZlbnQmJm8uZ2xvYmFsLGwmJjA9PT1yLmFjdGl2ZSsrJiZyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksby50eXBlPW8udHlwZS50b1VwcGVyQ2FzZSgpLG8uaGFzQ29udGVudD0hR2IudGVzdChvLnR5cGUpLGY9by51cmwucmVwbGFjZShDYixcIlwiKSxvLmhhc0NvbnRlbnQ/by5kYXRhJiZvLnByb2Nlc3NEYXRhJiYwPT09KG8uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJihvLmRhdGE9by5kYXRhLnJlcGxhY2UoQmIsXCIrXCIpKToobj1vLnVybC5zbGljZShmLmxlbmd0aCksby5kYXRhJiYoZis9KHZiLnRlc3QoZik/XCImXCI6XCI/XCIpK28uZGF0YSxkZWxldGUgby5kYXRhKSxvLmNhY2hlPT09ITEmJihmPWYucmVwbGFjZShEYixcIiQxXCIpLG49KHZiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIit1YisrICtuKSxvLnVybD1mK24pLG8uaWZNb2RpZmllZCYmKHIubGFzdE1vZGlmaWVkW2ZdJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLHIubGFzdE1vZGlmaWVkW2ZdKSxyLmV0YWdbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixyLmV0YWdbZl0pKSwoby5kYXRhJiZvLmhhc0NvbnRlbnQmJm8uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnkuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG8uY29udGVudFR5cGUpLHkuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG8uZGF0YVR5cGVzWzBdJiZvLmFjY2VwdHNbby5kYXRhVHlwZXNbMF1dP28uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09by5kYXRhVHlwZXNbMF0/XCIsIFwiK0tiK1wiOyBxPTAuMDFcIjpcIlwiKTpvLmFjY2VwdHNbXCIqXCJdKTtmb3IobSBpbiBvLmhlYWRlcnMpeS5zZXRSZXF1ZXN0SGVhZGVyKG0sby5oZWFkZXJzW21dKTtpZihvLmJlZm9yZVNlbmQmJihvLmJlZm9yZVNlbmQuY2FsbChwLHksbyk9PT0hMXx8aykpcmV0dXJuIHkuYWJvcnQoKTtpZih4PVwiYWJvcnRcIix0LmFkZChvLmNvbXBsZXRlKSx5LmRvbmUoby5zdWNjZXNzKSx5LmZhaWwoby5lcnJvciksZT1OYihKYixvLGMseSkpe2lmKHkucmVhZHlTdGF0ZT0xLGwmJnEudHJpZ2dlcihcImFqYXhTZW5kXCIsW3ksb10pLGspcmV0dXJuIHk7by5hc3luYyYmby50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3kuYWJvcnQoXCJ0aW1lb3V0XCIpfSxvLnRpbWVvdXQpKTt0cnl7az0hMSxlLnNlbmQodixBKX1jYXRjaCh6KXtpZihrKXRocm93IHo7QSgtMSx6KX19ZWxzZSBBKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIEEoYixjLGQsaCl7dmFyIGosbSxuLHYsdyx4PWM7a3x8KGs9ITAsaSYmYS5jbGVhclRpbWVvdXQoaSksZT12b2lkIDAsZz1ofHxcIlwiLHkucmVhZHlTdGF0ZT1iPjA/NDowLGo9Yj49MjAwJiZiPDMwMHx8MzA0PT09YixkJiYodj1QYihvLHksZCkpLHY9UWIobyx2LHksaiksaj8oby5pZk1vZGlmaWVkJiYodz15LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYoci5sYXN0TW9kaWZpZWRbZl09dyksdz15LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYoci5ldGFnW2ZdPXcpKSwyMDQ9PT1ifHxcIkhFQURcIj09PW8udHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09Yj94PVwibm90bW9kaWZpZWRcIjooeD12LnN0YXRlLG09di5kYXRhLG49di5lcnJvcixqPSFuKSk6KG49eCwhYiYmeHx8KHg9XCJlcnJvclwiLGI8MCYmKGI9MCkpKSx5LnN0YXR1cz1iLHkuc3RhdHVzVGV4dD0oY3x8eCkrXCJcIixqP3MucmVzb2x2ZVdpdGgocCxbbSx4LHldKTpzLnJlamVjdFdpdGgocCxbeSx4LG5dKSx5LnN0YXR1c0NvZGUodSksdT12b2lkIDAsbCYmcS50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3ksbyxqP206bl0pLHQuZmlyZVdpdGgocCxbeSx4XSksbCYmKHEudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt5LG9dKSwtLXIuYWN0aXZlfHxyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB5fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gci5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gci5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxyLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7cltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksci5hamF4KHIuZXh0ZW5kKHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSxyLmlzUGxhaW5PYmplY3QoYSkmJmEpKX19KSxyLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiByLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LHIuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiB0aGlzWzBdJiYoci5pc0Z1bmN0aW9uKGEpJiYoYT1hLmNhbGwodGhpc1swXSkpLGI9cihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9cih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1yLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucGFyZW50KGEpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe3IodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksci5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFyLmV4cHIucHNldWRvcy52aXNpYmxlKGEpfSxyLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiEhKGEub2Zmc2V0V2lkdGh8fGEub2Zmc2V0SGVpZ2h0fHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sci5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgUmI9ezA6MjAwLDEyMjM6MjA0fSxTYj1yLmFqYXhTZXR0aW5ncy54aHIoKTtvLmNvcnM9ISFTYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFNiLG8uYWpheD1TYj0hIVNiLHIuYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO2lmKG8uY29yc3x8U2ImJiFiLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihSYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX0pLHIuYWpheFByZWZpbHRlcihmdW5jdGlvbihhKXthLmNyb3NzRG9tYWluJiYoYS5jb250ZW50cy5zY3JpcHQ9ITEpfSksci5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ2xvYmFsRXZhbChhKSxhfX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLHIuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPXIoXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgVGI9W10sVWI9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztyLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1UYi5wb3AoKXx8ci5leHBhbmRvK1wiX1wiK3ViKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKFViLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZVYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtpZihofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXSlyZXR1cm4gZT1iLmpzb25wQ2FsbGJhY2s9ci5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoVWIsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0odmIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8ci5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9yKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLFRiLnB1c2goZSkpLGcmJnIuaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIn0pLG8uY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gYS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1hLmNoaWxkTm9kZXMubGVuZ3RofSgpLHIucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm5bXTtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSk7dmFyIGUsZixnO3JldHVybiBifHwoby5jcmVhdGVIVE1MRG9jdW1lbnQ/KGI9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksZT1iLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpLGUuaHJlZj1kLmxvY2F0aW9uLmhyZWYsYi5oZWFkLmFwcGVuZENoaWxkKGUpKTpiPWQpLGY9Qy5leGVjKGEpLGc9IWMmJltdLGY/W2IuY3JlYXRlRWxlbWVudChmWzFdKV06KGY9cWEoW2FdLGIsZyksZyYmZy5sZW5ndGgmJnIoZykucmVtb3ZlKCksci5tZXJnZShbXSxmLmNoaWxkTm9kZXMpKX0sci5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9cGIoYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLHIuaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJnIuYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/cihcIjxkaXY+XCIpLmFwcGVuZChyLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkodGhpcyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LHIuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7ci5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLHIuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiByLmdyZXAoci50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9LHIub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9ci5jc3MoYSxcInBvc2l0aW9uXCIpLGw9cihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPXIuY3NzKGEsXCJ0b3BcIiksaT1yLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLHIuaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxyLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LHIuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtyLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkLGUsZj10aGlzWzBdO2lmKGYpcmV0dXJuIGYuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGQ9Zi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxiPWYub3duZXJEb2N1bWVudCxjPWIuZG9jdW1lbnRFbGVtZW50LGU9Yi5kZWZhdWx0Vmlldyx7dG9wOmQudG9wK2UucGFnZVlPZmZzZXQtYy5jbGllbnRUb3AsbGVmdDpkLmxlZnQrZS5wYWdlWE9mZnNldC1jLmNsaWVudExlZnR9KTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PXIuY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksQihhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZD17dG9wOmQudG9wK3IuY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxsZWZ0OmQubGVmdCtyLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApfSkse3RvcDpiLnRvcC1kLnRvcC1yLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1yLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09ci5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fHJhfSl9fSksci5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7ci5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhhKT9mPWE6OT09PWEubm9kZVR5cGUmJihmPWEuZGVmYXVsdFZpZXcpLHZvaWQgMD09PWU/Zj9mW2JdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9mLnBhZ2VYT2Zmc2V0OmUsYz9lOmYucGFnZVlPZmZzZXQpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoKX19KSxyLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT1QYShvLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtpZihjKXJldHVybiBjPU9hKGEsYiksTWEudGVzdChjKT9yKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmN9KX0pLHIuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe3IuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtyLmZuW2RdPWZ1bmN0aW9uKGUsZil7dmFyIGc9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaD1jfHwoZT09PSEwfHxmPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGIsYyxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhiKT8wPT09ZC5pbmRleE9mKFwib3V0ZXJcIik/YltcImlubmVyXCIrYV06Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZj1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxmW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZltcIm9mZnNldFwiK2FdLGZbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWU/ci5jc3MoYixjLGgpOnIuc3R5bGUoYixjLGUsaCl9LGIsZz9lOnZvaWQgMCxnKX19KX0pLHIuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSksci5ob2xkUmVhZHk9ZnVuY3Rpb24oYSl7YT9yLnJlYWR5V2FpdCsrOnIucmVhZHkoITApfSxyLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxyLnBhcnNlSlNPTj1KU09OLnBhcnNlLHIubm9kZU5hbWU9QixcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTt2YXIgVmI9YS5qUXVlcnksV2I9YS4kO3JldHVybiByLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PXImJihhLiQ9V2IpLGImJmEualF1ZXJ5PT09ciYmKGEualF1ZXJ5PVZiKSxyfSxifHwoYS5qUXVlcnk9YS4kPXIpLHJ9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvanF1ZXJ5LTMuMi4xLm1pbi5qcyIsImltcG9ydCBJRXZlbnRTZW5kZXIgZnJvbSAnLi9JRXZlbnRTZW5kZXInO1xuXG5jbGFzcyBFdmVudFNlbmRlciBpbXBsZW1lbnRzIElFdmVudFNlbmRlciB7XG4gIHNlbmRlcjogb2JqZWN0O1xuICBsaXN0ZW5lcnM6IEFycmF5PChhLCBiKSA9PiB2b2lkPjtcbiAgY29uc3RydWN0b3Ioc2VuZGVyOiBvYmplY3QpIHtcbiAgICB0aGlzLnNlbmRlciA9IHNlbmRlcjtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGF0dGFjaChsaXN0ZW5lcjogKGEsIGIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxuICBub3RpZnkoYXJnczogb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyKHRoaXMuc2VuZGVyLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlbmRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vbXZjL3V0aWxzL0V2ZW50U2VuZGVyLnRzIiwiaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0ICcuL2Zhdmljb25zL2Zhdmljb25zJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9tdmMvY29udHJvbGxlci9Db250cm9sbGVyLnRzJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL212Yy9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL212Yy92aWV3L1ZpZXcnO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIobmV3IE1vZGVsKDEwLCAxMCksIG5ldyBWaWV3KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9pbmRleC50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGZhdmljb25zQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnISFmaWxlLWxvYWRlcj9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGljb3x4bWx8anNvbikkLyk7XG5cbmZhdmljb25zQ29udGV4dC5rZXlzKCkuZm9yRWFjaChmYXZpY29uc0NvbnRleHQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZmF2aWNvbnMvZmF2aWNvbnMuanMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYW5kcm9pZC1jaHJvbWUtNDh4NDgucG5nXCI6IDYsXG5cdFwiLi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiOiA3LFxuXHRcIi4vYnJvd3NlcmNvbmZpZy54bWxcIjogOCxcblx0XCIuL2Zhdmljb24tMTZ4MTYucG5nXCI6IDksXG5cdFwiLi9mYXZpY29uLTMyeDMyLnBuZ1wiOiAxMCxcblx0XCIuL2Zhdmljb24uaWNvXCI6IDExLFxuXHRcIi4vbWFuaWZlc3QuanNvblwiOiAxMixcblx0XCIuL21zdGlsZS0xNTB4MTUwLnBuZ1wiOiAxMyxcblx0XCIuL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiOiAxNFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mYXZpY29ucyAhLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIFxcLihzdmd8cG5nfGljb3x4bWx8anNvbikkXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTQ4eDQ4LnBuZ1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb25zL2Jyb3dzZXJjb25maWcueG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9mYXZpY29uLmljb1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz9uYW1lPWZhdmljb25zL1tuYW1lXS5bZXh0XSEuL2Zhdmljb25zL2Zhdmljb24uaWNvXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9tYW5pZmVzdC5qc29uXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvbWFuaWZlc3QuanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzP25hbWU9ZmF2aWNvbnMvW25hbWVdLltleHRdIS4vZmF2aWNvbnMvbXN0aWxlLTE1MHgxNTAucG5nXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanM/bmFtZT1mYXZpY29ucy9bbmFtZV0uW2V4dF0hLi9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCAkICovXG5pbXBvcnQgY29udmVydFJlbVRvUGl4ZWxzIGZyb20gJy4uLy4uL3NjcmlwdHMvY29udmVydFJlbVRvUGl4ZWxzJztcblxuY2xhc3MgU2xpZGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIHRoaXMuJHBhcmVudCA9IHRoaXMuJGVsZW1lbnQucGFyZW50KCk7XG4gICAgdGhpcy4kdmlldyA9IHRoaXMuJHBhcmVudC5maW5kKCcuanMtc2xpZGVyX192aWV3Jyk7XG4gICAgdGhpcy4kbGluZSA9IHRoaXMuJHBhcmVudC5maW5kKCcuanMtc2xpZGVyX19saW5lJyk7XG4gICAgdGhpcy5zbGlkZXJDaGFuZ2UuY2FsbCh0aGlzKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdpbnB1dC5zbGlkZXInLCB0aGlzLnNsaWRlckNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgfVxuICBzbGlkZXJDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyAkZWxlbWVudCB9ID0gdGhpcztcbiAgICBjb25zdCB3aWR0aCA9ICRlbGVtZW50LndpZHRoKCkgLSBjb252ZXJ0UmVtVG9QaXhlbHMoMS4yNSk7XG4gICAgY29uc3QgdmFsdWUgPSAkZWxlbWVudC52YWwoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLiRlbGVtZW50LnByb3AoJ21pbicpO1xuICAgIGNvbnN0IG1heCA9IHRoaXMuJGVsZW1lbnQucHJvcCgnbWF4Jyk7XG4gICAgY29uc3QgbmV3TGVmdCA9ICgod2lkdGggLyAobWF4IC0gbWluKSkgKiAodmFsdWUgLSBtaW4pKSAtIGNvbnZlcnRSZW1Ub1BpeGVscygwLjYyNSk7XG4gICAgdGhpcy4kdmlldy50ZXh0KHZhbHVlKS5jc3MoeyBsZWZ0OiBuZXdMZWZ0IH0pO1xuICAgIGNvbnN0IG5ld1dpZHRoID0gKCh3aWR0aCAvIChtYXggLSBtaW4pKSAqICh2YWx1ZSAtIG1pbikpICsgY29udmVydFJlbVRvUGl4ZWxzKDAuNjI1KTtcbiAgICB0aGlzLiRsaW5lLndpZHRoKG5ld1dpZHRoKTtcbiAgfVxufVxuXG5sZXQgc2xpZGVycyA9IFtdO1xuJCgnLmpzLXNsaWRlcl9faW5wdXQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4gc2xpZGVycy5wdXNoKG5ldyBTbGlkZXIoZWxlbWVudCkpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGNvbnZlcnRSZW1Ub1BpeGVscyA9IGZ1bmN0aW9uIGNvbnZlcnRSZW1Ub1BpeGVscyhyZW0pIHtcbiAgcmV0dXJuIHJlbSAqIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0UmVtVG9QaXhlbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2NvbnZlcnRSZW1Ub1BpeGVscy5qcyIsImltcG9ydCBJTW9kZWwgZnJvbSAnLi4vbW9kZWwvSU1vZGVsJztcbmltcG9ydCBJVmlldyBmcm9tICcuLi92aWV3L0lWaWV3JztcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIG1vZGVsOiBJTW9kZWw7XG4gIHZpZXc6IElWaWV3O1xuICBpc1J1bm5pbmc6IGJvb2xlYW47XG4gIGZwczogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihtb2RlbDogSU1vZGVsLCB2aWV3OiBJVmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMuZnBzID0gMTtcbiAgICB0aGlzLnNldFN1YnNjcmlwdGlvbigpO1xuICAgIHRoaXMudmlldy5pbml0VGFibGUodGhpcy5tb2RlbC5tYXRyaXgpO1xuICAgIHRoaXMuc2V0UnVubmluZyhmYWxzZSk7XG4gIH1cbiAgc2V0U3Vic2NyaXB0aW9uKCk6dm9pZCB7XG4gICAgdGhpcy5tb2RlbC5tYXRyaXhDaGFuZ2VkLmF0dGFjaCgoc2VuZGVyLCBvYmopID0+IHtcbiAgICAgIGlmIChvYmoucmVzaXplZCkgeyB0aGlzLnZpZXcuaW5pdFRhYmxlKG9iai5tYXRyaXgpOyB9XG4gICAgICBlbHNlIHsgdGhpcy52aWV3LmNoYW5nZVRhYmxlKG9iai5tYXRyaXgpOyB9XG4gICAgfSk7XG4gICAgdGhpcy52aWV3LnRhYmxlQ2VsbENoYW5nZWQuYXR0YWNoKChzZW5kZXIsIHsgcm93LCBjZWxsIH0pID0+IHtcbiAgICAgIHRoaXMubW9kZWwudG9nZ2xlQ2VsbChyb3csIGNlbGwpO1xuICAgIH0pO1xuICAgIHRoaXMudmlldy5zdGFydEV2ZW50LmF0dGFjaCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFJ1bm5pbmcodHJ1ZSk7XG4gICAgICB0aGlzLmFuaW0oKTtcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcucGF1c2VFdmVudC5hdHRhY2goKCkgPT4ge1xuICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcuY2xlYXJFdmVudC5hdHRhY2goKCkgPT4ge1xuICAgICAgdGhpcy5tb2RlbC5jbGVhck1hdHJpeCgpO1xuICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcuc3BlZWRDaGFuZ2VkLmF0dGFjaCgoc2VuZGVyLCBvcHRpb25zKSA9PiB7XG4gICAgICB0aGlzLmZwcyA9IG9wdGlvbnMudmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy52aWV3LndpZHRoQ2hhbmdlZC5hdHRhY2goKHNlbmRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgdGhpcy5zZXRSdW5uaW5nKGZhbHNlKTtcbiAgICAgIHRoaXMubW9kZWwuc2V0V2lkdGhNYXRyaXgob3B0aW9ucy52YWx1ZSk7XG4gICAgfSk7XG4gICAgdGhpcy52aWV3LmhlaWdodENoYW5nZWQuYXR0YWNoKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgIHRoaXMuc2V0UnVubmluZyhmYWxzZSk7XG4gICAgICB0aGlzLm1vZGVsLnNldEhlaWdodE1hdHJpeChvcHRpb25zLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBzZXRSdW5uaW5nKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc1J1bm5pbmcgPSB2YWx1ZTtcbiAgICB0aGlzLnZpZXcuc2V0U3RhdHVzKHRoaXMuaXNSdW5uaW5nKTtcbiAgfVxuICBhbmltKGNhbGxiYWNrPyk6IHZvaWQge1xuICAgIC8vINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQuCDQstGL0LfRi9Cy0LXRgiBjYWxsYmFjayjQtNC70Y8g0YLQtdGB0YLQvtCyKSwg0LrQvtCz0LTQsCDQvNCw0YLRgNC40YbQsCDQv9C10YDQtdGB0YLQsNC10YIg0LzQtdC90Y/RgtGM0YHRj1xuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgIHRoaXMubW9kZWwuY2FsY3VsYXRlTWF0cml4KCk7XG4gICAgICAgICAgaWYgKHRoaXMubW9kZWwuaXNSZXBlYXRNYXRyaXgoKSkgeyB0aGlzLnNldFJ1bm5pbmcoZmFsc2UpOyB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfVxuICAgICAgfSwgMTAwMCAvIHRoaXMuZnBzKTtcbiAgICB9O1xuICAgIGxvb3AoKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vbXZjL2NvbnRyb2xsZXIvQ29udHJvbGxlci50cyIsImltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9FdmVudFNlbmRlcic7XG5pbXBvcnQgSU1vZGVsIGZyb20gJy4vSU1vZGVsJztcbmltcG9ydCAnLi4vLi4vc2NyaXB0cy9hcnJheUZyb20tcG9seWZpbGwnO1xuXG5jbGFzcyBNb2RlbCBpbXBsZW1lbnRzIElNb2RlbHtcbiAgbWF0cml4OiBib29sZWFuW11bXTtcbiAgcm93czogbnVtYmVyO1xuICBjb2x1bW5zOiBudW1iZXI7XG4gIGxpc3RPbGRNYXRyaXg6IGJvb2xlYW5bXVtdW107XG4gIG1hdHJpeENoYW5nZWQ6IEV2ZW50O1xuICBjb25zdHJ1Y3Rvcihyb3dzOiBudW1iZXIgPSAxMCwgY29sdW1uczogbnVtYmVyID0gMTApIHtcbiAgICB0aGlzLmluaXRNYXRyaXgocm93cywgY29sdW1ucyk7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMubGlzdE9sZE1hdHJpeCA9IFtdO1xuICAgIHRoaXMubWF0cml4Q2hhbmdlZCA9IG5ldyBFdmVudCh0aGlzKTtcbiAgfVxuICBpbml0TWF0cml4KHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tYXRyaXggPSBBcnJheS5mcm9tKEFycmF5KHJvd3MpLCAoKSA9PiBBcnJheS5mcm9tKEFycmF5KGNvbHVtbnMpLCAoKSA9PiBmYWxzZSkpO1xuICB9XG4gIGdldE5ld1JvdyhsZW5ndGg6IG51bWJlcik6IGJvb2xlYW5bXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkobGVuZ3RoKSwgKCkgPT4gZmFsc2UpO1xuICB9XG4gIHNldFdpZHRoTWF0cml4KG5ld1dpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm1hdHJpeCA9IHRoaXMubWF0cml4Lm1hcCgocm93KSA9PiB7XG4gICAgICBpZiAodGhpcy5jb2x1bW5zIDwgbmV3V2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHJvdy5jb25jYXQodGhpcy5nZXROZXdSb3cobmV3V2lkdGggLSB0aGlzLmNvbHVtbnMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3cuc2xpY2UoMCwgbmV3V2lkdGgpO1xuICAgIH0pO1xuICAgIHRoaXMuY29sdW1ucyA9IG5ld1dpZHRoO1xuICAgIHRoaXMubGlzdE9sZE1hdHJpeCA9IFtdO1xuICAgIHRoaXMubWF0cml4Q2hhbmdlZC5ub3RpZnkoeyBtYXRyaXg6IHRoaXMubWF0cml4LCByZXNpemVkOiB0cnVlIH0pO1xuICB9XG4gIHNldEhlaWdodE1hdHJpeChuZXdIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWF0cml4ID0gQXJyYXkuZnJvbShBcnJheShuZXdIZWlnaHQpLCAocm93LCBpKSA9PiB7XG4gICAgICBpZiAoaSA8IHRoaXMucm93cykgeyByZXR1cm4gdGhpcy5tYXRyaXhbaV0uc2xpY2UoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0TmV3Um93KHRoaXMuY29sdW1ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5yb3dzID0gbmV3SGVpZ2h0O1xuICAgIHRoaXMubGlzdE9sZE1hdHJpeCA9IFtdO1xuICAgIHRoaXMubWF0cml4Q2hhbmdlZC5ub3RpZnkoeyBtYXRyaXg6IHRoaXMubWF0cml4LCByZXNpemVkOiB0cnVlIH0pO1xuICB9XG4gIGNsZWFyTWF0cml4KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdE1hdHJpeCh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgdGhpcy5saXN0T2xkTWF0cml4ID0gW107XG4gICAgdGhpcy5tYXRyaXhDaGFuZ2VkLm5vdGlmeSh7IG1hdHJpeDogdGhpcy5tYXRyaXggfSk7XG4gIH1cbiAgY2FsY3VsYXRlTWF0cml4KCk6IHZvaWQge1xuICAgIHRoaXMubWF0cml4ID0gdGhpcy5tYXRyaXgubWFwKChyb3c6IGJvb2xlYW5bXSwgaTogbnVtYmVyKSA9PlxuICAgICAgcm93Lm1hcCgoY2VsbDogYm9vbGVhbiwgajogbnVtYmVyKSA9PiB0aGlzLmNhbGN1bGF0ZUNlbGwoaSwgaikpLFxuICAgICk7XG4gICAgdGhpcy5tYXRyaXhDaGFuZ2VkLm5vdGlmeSh7IG1hdHJpeDogdGhpcy5tYXRyaXggfSk7XG4gIH1cbiAgaXNSZXBlYXRNYXRyaXgoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzdWx0OiBib29sZWFuID0gdGhpcy5saXN0T2xkTWF0cml4LnNvbWUoKG1hdHJpeDogYm9vbGVhbltdW10pID0+XG4gICAgICBtYXRyaXguZXZlcnkoKHJvdzogYm9vbGVhbltdLCBpOiBudW1iZXIpID0+XG4gICAgICAgIHJvdy5ldmVyeSgoY2VsbDogYm9vbGVhbiwgajogbnVtYmVyKSA9PlxuICAgICAgICAgIChjZWxsID09PSB0aGlzLm1hdHJpeFtpXVtqXSksXG4gICAgICAgICksXG4gICAgICApLFxuICAgICk7XG4gICAgaWYgKHJlc3VsdCkgeyB0aGlzLmxpc3RPbGRNYXRyaXggPSBbXTsgfVxuICAgIGVsc2UgeyB0aGlzLmxpc3RPbGRNYXRyaXgucHVzaCh0aGlzLm1hdHJpeCk7IH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGNhbGN1bGF0ZUNlbGwocm93OiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBtYXRyaXggfSA9IHRoaXM7XG4gICAgY29uc3QgY291bnRMaXZpbmdOZWlnaGJvcnMgOiBudW1iZXIgPSB0aGlzLmdldENvdW50TGl2aW5nTmVpZ2hib3JzKHJvdywgY29sdW1uLCBtYXRyaXgpO1xuICAgIGxldCBuZXdDZWxsOiBib29sZWFuID0gbWF0cml4W3Jvd11bY29sdW1uXTtcblxuICAgIGlmIChjb3VudExpdmluZ05laWdoYm9ycyA8IDIgfHwgY291bnRMaXZpbmdOZWlnaGJvcnMgPiAzKSB7IG5ld0NlbGwgPSBmYWxzZTsgfVxuICAgIGVsc2UgaWYgKGNvdW50TGl2aW5nTmVpZ2hib3JzID09PSAzKSB7IG5ld0NlbGwgPSB0cnVlOyB9XG4gICAgcmV0dXJuIG5ld0NlbGw7XG4gIH1cbiAgZ2V0Q291bnRMaXZpbmdOZWlnaGJvcnMgKHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlciwgbWF0cml4OiBib29sZWFuW11bXSk6IG51bWJlciB7XG4gICAgY29uc3QgaW5kZXhlczogbnVtYmVyW10gPSBbLTEsIDAsIDFdO1xuICAgIHJldHVybiBpbmRleGVzLnJlZHVjZSgoY291bnQ6IG51bWJlciwgaTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IGluZGV4Um93OiBudW1iZXIgPSByb3cgKyBpO1xuICAgICAgaWYgKCFtYXRyaXhbaW5kZXhSb3ddKSB7IHJldHVybiBjb3VudDsgfVxuICAgICAgcmV0dXJuIGNvdW50ICsgaW5kZXhlcy5yZWR1Y2UoKGNvdW50SW5Sb3c6IG51bWJlciwgajogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhDZWxsOiBudW1iZXIgPSBjb2x1bW4gKyBqO1xuICAgICAgICBpZiAoIW1hdHJpeFtpbmRleFJvd11baW5kZXhDZWxsXSB8fCAoaSA9PT0gMCAmJiBqID09PSAwKSkgeyByZXR1cm4gY291bnRJblJvdzsgfVxuICAgICAgICByZXR1cm4gY291bnRJblJvdyArIDE7XG4gICAgICB9LCAwKTtcbiAgICB9LCAwKTtcbiAgfVxuICB0b2dnbGVDZWxsKHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWF0cml4W3Jvd11bY29sdW1uXSA9ICF0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbl07XG4gICAgdGhpcy5tYXRyaXhDaGFuZ2VkLm5vdGlmeSh7IG1hdHJpeDogdGhpcy5tYXRyaXggfSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9tdmMvbW9kZWwvTW9kZWwudHMiLCJpbnRlcmZhY2UgQXJyYXlDb25zdHJ1Y3RvciB7XG4gIGZyb20oYXJyYXlMaWtlOiBhbnksIG1hcEZuPywgdGhpc0FyZz8pOiBBcnJheTxhbnk+O1xufVxuXG4vLyDQqNCw0LPQuCDQsNC70LPQvtGA0LjRgtC80LAgRUNNQS0yNjIsIDYt0LUg0LjQt9C00LDQvdC40LUsIDIyLjEuMi4xXG4vLyDQodGB0YvQu9C60LA6IGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hcnJheS5mcm9tXG5jb25zdCB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5jb25zdCBpc0NhbGxhYmxlID0gKGZuOiBhbnkpID0+IHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbmNvbnN0IHRvSW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBjb25zdCBudW0gPSBOdW1iZXIodmFsdWUpO1xuICBpZiAoaXNOYU4obnVtKSkgeyByZXR1cm4gMDsgfVxuICBpZiAobnVtID09PSAwIHx8ICFpc0Zpbml0ZShudW0pKSB7IHJldHVybiBudW07IH1cbiAgcmV0dXJuIChudW0gPiAwID8gMSA6IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtKSk7XG59O1xuY29uc3QgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuY29uc3QgdG9MZW5ndGggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgY29uc3QgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKTtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKTtcbn07XG5cbkFycmF5LmZyb20gPSBmdW5jdGlvbihhcnJheUxpa2U6IGFueSwgbWFwRm4/LCB0aGlzQXJnPyk6IEFycmF5PGFueT4ge1xuICAvLyBwbGFjZSBjb2RlIGZyb20gTUROIGhlcmVcbiAgLy8gMS4g0J/QvtC70L7QttC40LwgQyDRgNCw0LLQvdGL0Lwg0LfQvdCw0YfQtdC90LjRjiB0aGlzLlxuICBjb25zdCBDOiBhbnkgPSB0aGlzO1xuXG4gIC8vIDIuINCf0L7Qu9C+0LbQuNC8IGl0ZW1zINGA0LDQstC90YvQvCBUb09iamVjdChhcnJheUxpa2UpLlxuICBjb25zdCBpdGVtczogYW55ID0gT2JqZWN0KGFycmF5TGlrZSk7XG5cbiAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICAvLyA0LiDQldGB0LvQuCBtYXBmbiDRgNCw0LLQtdC9IHVuZGVmaW5lZCwg0L/QvtC70L7QttC40LwgbWFwcGluZyDRgNCw0LLQvdGL0LwgZmFsc2UuXG4gIC8vIGNvbnN0IG1hcEZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIHVuZGVmaW5lZDtcbiAgbGV0IFQ7XG4gIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gNS4g0LjQvdCw0YfQtVxuICAgIC8vIDUuIGEuINCV0YHQu9C4INCy0YvQt9C+0LIgSXNDYWxsYWJsZShtYXBmbikg0YDQsNCy0LXQvSBmYWxzZSwg0LLRi9C60LjQtNGL0LLQsNC10Lwg0LjRgdC60LvRjtGH0LXQvdC40LUgVHlwZUVycm9yLlxuICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgLy8gNS4gYi4g0JXRgdC70LggdGhpc0FyZyDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIsINC/0L7Qu9C+0LbQuNC8IFQg0YDQsNCy0L3Ri9C8IHRoaXNBcmc7XG4gICAgLy8g0LjQvdCw0YfQtSDQv9C+0LvQvtC20LjQvCBUINGA0LDQstC90YvQvCB1bmRlZmluZWQuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICBUID0gYXJndW1lbnRzWzJdO1xuICAgIH1cbiAgfVxuXG4gIC8vIDEwLiDQn9C+0LvQvtC20LjQvCBsZW5WYWx1ZSDRgNCw0LLQvdGL0LwgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cbiAgLy8gMTEuINCf0L7Qu9C+0LbQuNC8IGxlbiDRgNCw0LLQvdGL0LwgVG9MZW5ndGgobGVuVmFsdWUpLlxuICBjb25zdCBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpO1xuXG4gIC8vIDEzLiDQldGB0LvQuCBJc0NvbnN0cnVjdG9yKEMpINGA0LDQstC10L0gdHJ1ZSwg0YLQvlxuICAvLyAxMy4gYS4g0J/QvtC70L7QttC40LwgQSDRgNCw0LLQvdGL0Lwg0YDQtdC30YPQu9GM0YLQsNGC0YMg0LLRi9C30L7QstCwINCy0L3Rg9GC0YDQtdC90L3QtdCz0L4g0LzQtdGC0L7QtNCwIFtbQ29uc3RydWN0XV1cbiAgLy8gICAgINC+0LHRitC10LrRgtCwIEMg0YHQviDRgdC/0LjRgdC60L7QvCDQsNGA0LPRg9C80LXQvdGC0L7Qsiwg0YHQvtC00LXRgNC20LDRidC40Lwg0LXQtNC40L3RgdGC0LLQtdC90L3Ri9C5INGN0LvQtdC80LXQvdGCIGxlbi5cbiAgLy8gMTQuIGEuINCY0L3QsNGH0LUsINC/0L7Qu9C+0LbQuNC8IEEg0YDQsNCy0L3Ri9C8IEFycmF5Q3JlYXRlKGxlbikuXG4gIGNvbnN0IEEgOiBhbnkgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XG5cbiAgLy8gMTYuINCf0L7Qu9C+0LbQuNC8IGsg0YDQsNCy0L3Ri9C8IDAuXG4gIGxldCBrID0gMDtcbiAgLy8gMTcuINCf0L7QutCwIGsgPCBsZW4sINCx0YPQtNC10Lwg0L/QvtCy0YLQvtGA0Y/RgtGMLi4uICjRiNCw0LPQuCDRgSBhINC/0L4gaClcbiAgbGV0IGtWYWx1ZTtcbiAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICBrVmFsdWUgPSBpdGVtc1trXTtcbiAgICBpZiAobWFwRm4pIHtcbiAgICAgIEFba10gPSB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbihrVmFsdWUsIGspIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspO1xuICAgIH0gZWxzZSB7XG4gICAgICBBW2tdID0ga1ZhbHVlO1xuICAgIH1cbiAgICBrICs9IDE7XG4gIH1cbiAgLy8gMTguINCf0L7Qu9C+0LbQuNC8IHB1dFN0YXR1cyDRgNCw0LLQvdGL0LwgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXG4gIEEubGVuZ3RoID0gbGVuO1xuICAvLyAyMC4g0JLQtdGA0L3RkdC8IEEuXG4gIHJldHVybiBBO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9zY3JpcHRzL2FycmF5RnJvbS1wb2x5ZmlsbC50cyIsImltcG9ydCBFdmVudFNlbmRlciBmcm9tICcuLi91dGlscy9FdmVudFNlbmRlcic7XG5pbXBvcnQgSVZpZXcgZnJvbSAnLi9JVmlldyc7XG5cbmNvbnN0IENMQVNTX0NFSUwgPSAnZ2FtZV9fY2VpbCc7XG5jb25zdCBDTEFTU19DRUlMX0xJVkUgPSAnZ2FtZV9fY2VpbF9saXZlJztcblxuY2xhc3MgVmlldyBpbXBsZW1lbnRzIElWaWV3e1xuICAkdGFibGU6IEpRdWVyeTtcbiAgJGNvbnRyb2xzOiBKUXVlcnk7XG4gICRidXR0b25TdGFydDogSlF1ZXJ5O1xuICAkYnV0dG9uUGF1c2U6IEpRdWVyeTtcbiAgJGJ1dHRvbkNsZWFyOiBKUXVlcnk7XG4gICRzbGlkZXJTcGVlZDogSlF1ZXJ5O1xuICAkc2xpZGVyV2lkdGg6IEpRdWVyeTtcbiAgJHNsaWRlckhlaWdodDogSlF1ZXJ5O1xuICAkc3RhdHVzOiBKUXVlcnk7XG5cbiAgdGFibGVDZWxsQ2hhbmdlZDogRXZlbnRTZW5kZXI7XG4gIHN0YXJ0RXZlbnQ6IEV2ZW50U2VuZGVyO1xuICBwYXVzZUV2ZW50OiBFdmVudFNlbmRlcjtcbiAgY2xlYXJFdmVudDogRXZlbnRTZW5kZXI7XG4gIHdpZHRoQ2hhbmdlZDogRXZlbnRTZW5kZXI7XG4gIGhlaWdodENoYW5nZWQ6IEV2ZW50U2VuZGVyO1xuICBzcGVlZENoYW5nZWQ6IEV2ZW50U2VuZGVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRET01FbGVtZW50cygpO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XG4gIH1cbiAgaW5pdERPTUVsZW1lbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuJHRhYmxlID0gJCgnLmpzLWdhbWVfX2JvYXJkJyk7XG4gICAgdGhpcy4kY29udHJvbHMgPSAkKCcuanMtZ2FtZV9fY29udHJvbHMnKTtcbiAgICB0aGlzLiRidXR0b25TdGFydCA9IHRoaXMuJGNvbnRyb2xzLmZpbmQoJy5qcy1nYW1lX19idXR0b24tc3RhcnQnKTtcbiAgICB0aGlzLiRidXR0b25QYXVzZSA9IHRoaXMuJGNvbnRyb2xzLmZpbmQoJy5qcy1nYW1lX19idXR0b24tcGF1c2UnKTtcbiAgICB0aGlzLiRidXR0b25DbGVhciA9IHRoaXMuJGNvbnRyb2xzLmZpbmQoJy5qcy1nYW1lX19idXR0b24tY2xlYXInKTtcbiAgICB0aGlzLiRzbGlkZXJTcGVlZCA9IHRoaXMuJGNvbnRyb2xzLmZpbmQoJy5qcy1nYW1lX19zbGlkZXItc3BlZWQnKTtcbiAgICB0aGlzLiRzbGlkZXJXaWR0aCA9IHRoaXMuJGNvbnRyb2xzLmZpbmQoJy5qcy1nYW1lX19zbGlkZXItd2lkdGgnKTtcbiAgICB0aGlzLiRzbGlkZXJIZWlnaHQgPSB0aGlzLiRjb250cm9scy5maW5kKCcuanMtZ2FtZV9fc2xpZGVyLWhlaWdodCcpO1xuICAgIHRoaXMuJHN0YXR1cyA9IHRoaXMuJGNvbnRyb2xzLmZpbmQoJy5qcy1nYW1lX19zdGF0dXMnKTtcbiAgfVxuICBpbml0RXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMudGFibGVDZWxsQ2hhbmdlZCA9IG5ldyBFdmVudFNlbmRlcih0aGlzKTtcbiAgICB0aGlzLnN0YXJ0RXZlbnQgPSBuZXcgRXZlbnRTZW5kZXIodGhpcyk7XG4gICAgdGhpcy5wYXVzZUV2ZW50ID0gbmV3IEV2ZW50U2VuZGVyKHRoaXMpO1xuICAgIHRoaXMuY2xlYXJFdmVudCA9IG5ldyBFdmVudFNlbmRlcih0aGlzKTtcbiAgICB0aGlzLndpZHRoQ2hhbmdlZCA9IG5ldyBFdmVudFNlbmRlcih0aGlzKTtcbiAgICB0aGlzLmhlaWdodENoYW5nZWQgPSBuZXcgRXZlbnRTZW5kZXIodGhpcyk7XG4gICAgdGhpcy5zcGVlZENoYW5nZWQgPSBuZXcgRXZlbnRTZW5kZXIodGhpcyk7XG4gIH1cbiAgaW5pdEhhbmRsZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuJHRhYmxlLm9uKCdjbGljay52aWV3JywgJ3RkJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IGNlbGw6IG51bWJlciA9ICQodGFyZ2V0KS5wcm9wKCdjZWxsSW5kZXgnKSBhcyBudW1iZXI7XG4gICAgICBjb25zdCByb3c6IG51bWJlciA9ICQodGFyZ2V0LnBhcmVudEVsZW1lbnQpLnByb3AoJ3NlY3Rpb25Sb3dJbmRleCcpIGFzIG51bWJlcjtcbiAgICAgIHRoaXMudGFibGVDZWxsQ2hhbmdlZC5ub3RpZnkoeyByb3csIGNlbGwgfSk7XG4gICAgfSk7XG4gICAgdGhpcy4kYnV0dG9uU3RhcnQub24oJ2NsaWNrLnZpZXcnLCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0RXZlbnQubm90aWZ5KHt9KTtcbiAgICB9KTtcbiAgICB0aGlzLiRidXR0b25QYXVzZS5vbignY2xpY2sudmlldycsICgpID0+IHtcbiAgICAgIHRoaXMucGF1c2VFdmVudC5ub3RpZnkoe30pO1xuICAgIH0pO1xuICAgIHRoaXMuJGJ1dHRvbkNsZWFyLm9uKCdjbGljay52aWV3JywgKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckV2ZW50Lm5vdGlmeSh7fSk7XG4gICAgfSk7XG4gICAgdGhpcy4kc2xpZGVyU3BlZWQub24oJ2NoYW5nZS52aWV3JywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBOdW1iZXIoJCh0YXJnZXQpLnZhbCgpKTtcbiAgICAgIHRoaXMuc3BlZWRDaGFuZ2VkLm5vdGlmeSh7IHZhbHVlIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuJHNsaWRlcldpZHRoLm9uKCdjaGFuZ2UudmlldycsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gTnVtYmVyKCQodGFyZ2V0KS52YWwoKSk7XG4gICAgICB0aGlzLndpZHRoQ2hhbmdlZC5ub3RpZnkoeyB2YWx1ZSB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiRzbGlkZXJIZWlnaHQub24oJ2NoYW5nZS52aWV3JywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBOdW1iZXIoJCh0YXJnZXQpLnZhbCgpKTtcbiAgICAgIHRoaXMuaGVpZ2h0Q2hhbmdlZC5ub3RpZnkoeyB2YWx1ZSB9KTtcbiAgICB9KTtcbiAgfVxuICBzZXRCdXR0b25zKHJ1bm5pbmc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLiRidXR0b25TdGFydC5wcm9wKCdkaXNhYmxlZCcsIHJ1bm5pbmcpO1xuICAgIHRoaXMuJGJ1dHRvblBhdXNlLnByb3AoJ2Rpc2FibGVkJywgIXJ1bm5pbmcpO1xuICB9XG4gIHNldFN0YXR1cyhydW5uaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXRCdXR0b25zKHJ1bm5pbmcpO1xuICAgIGlmIChydW5uaW5nKSB7IHRoaXMuJHN0YXR1cy5yZW1vdmVDbGFzcygnZ2FtZV9fc3RhdHVzX3N0b3BwZWQnKTsgfVxuICAgIGVsc2UgeyB0aGlzLiRzdGF0dXMuYWRkQ2xhc3MoJ2dhbWVfX3N0YXR1c19zdG9wcGVkJyk7IH1cbiAgfVxuICBnZXROZXdUYm9keShtYXRyaXg6IGJvb2xlYW5bXVtdLCB0YWJsZVdpZHRoOiBudW1iZXIpOiBKUXVlcnkge1xuICAgIGNvbnN0IGNvbHVtbnM6IG51bWJlciA9IG1hdHJpeFswXS5sZW5ndGg7XG4gICAgY29uc3Qgc2l6ZTogbnVtYmVyID0gdGFibGVXaWR0aCAvIGNvbHVtbnM7XG4gICAgY29uc3Qgcm93cyA9IG1hdHJpeC5tYXAoKHJvdykgPT4ge1xuICAgICAgY29uc3QgY2VsbHMgPSByb3cubWFwKChjZWxsKSA9PiB7XG4gICAgICAgIGxldCAkdGQgPSAkKCc8dGQvPicpLmNzcyh7IHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfSkuYWRkQ2xhc3MoQ0xBU1NfQ0VJTCk7XG4gICAgICAgIHRoaXMuc2V0VGRDbGFzcygkdGQsIGNlbGwpO1xuICAgICAgICByZXR1cm4gJHRkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gJCgnPHRyLz4nKS5hcHBlbmQoY2VsbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiAkKCc8dGJvZHkvPicpLmFwcGVuZChyb3dzKTtcbiAgfVxuICBpbml0VGFibGUobWF0cml4OiBib29sZWFuW11bXSk6IHZvaWQge1xuICAgIGNvbnN0IHsgJHRhYmxlIH0gPSB0aGlzO1xuICAgIGNvbnN0ICRuZXdUYm9keSA9IHRoaXMuZ2V0TmV3VGJvZHkobWF0cml4LCAkdGFibGUud2lkdGgoKSk7XG4gICAgY29uc3QgJG9sZFRib2R5ID0gJHRhYmxlLmZpbmQoJ3Rib2R5Jyk7XG4gICAgaWYgKCRvbGRUYm9keS5sZW5ndGgpIHsgJG9sZFRib2R5LnJlcGxhY2VXaXRoKCRuZXdUYm9keSk7IH1cbiAgICBlbHNlIHsgJHRhYmxlLmFwcGVuZCgkbmV3VGJvZHkpOyB9XG4gIH1cbiAgY2hhbmdlVGFibGUobWF0cml4OiBib29sZWFuW11bXSk6IHZvaWQge1xuICAgIGNvbnN0IHRhYmxlID0gdGhpcy4kdGFibGVbMF0gYXMgSFRNTFRhYmxlRWxlbWVudDtcbiAgICBtYXRyaXguZm9yRWFjaCgocm93OiBib29sZWFuW10sIGk6IG51bWJlcikgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNlbGw6IGJvb2xlYW4sIGo6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLnNldFRkQ2xhc3MoJCh0YWJsZS5yb3dzW2ldLmNlbGxzW2pdKSwgY2VsbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBzZXRUZENsYXNzKCR0ZDogSlF1ZXJ5LCBpc0xpdmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaXNMaXZlKSB7ICR0ZC5hZGRDbGFzcyhDTEFTU19DRUlMX0xJVkUpOyB9XG4gICAgZWxzZSB7ICR0ZC5yZW1vdmVDbGFzcyhDTEFTU19DRUlMX0xJVkUpOyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vbXZjL3ZpZXcvVmlldy50cyJdLCJzb3VyY2VSb290IjoiIn0=