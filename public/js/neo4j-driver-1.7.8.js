!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).neo4j = e()
    }
}(function () {
    return function o(a, s, u) {
        function l(t, e) {
            if (!s[t]) {
                if (!a[t]) {
                    var r = "function" == typeof require && require;
                    if (!e && r) return r(t, !0);
                    if (c) return c(t, !0);
                    var n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var i = s[t] = {exports: {}};
                a[t][0].call(i.exports, function (e) {
                    return l(a[t][1][e] || e)
                }, i, i.exports, o, a, s, u)
            }
            return s[t].exports
        }

        for (var c = "function" == typeof require && require, e = 0; e < u.length; e++) l(u[e]);
        return l
    }({
        1: [function (e, t, r) {
            t.exports = function (e) {
                if (Array.isArray(e)) return e
            }
        }, {}],
        2: [function (e, t, r) {
            t.exports = function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }
        }, {}],
        3: [function (e, t, r) {
            t.exports = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        }, {}],
        4: [function (e, t, r) {
            t.exports = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        }, {}],
        5: [function (e, n, t) {
            var o = e("./setPrototypeOf");

            function i(e, t, r) {
                return !function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }() ? n.exports = i = function (e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new (Function.bind.apply(e, n));
                    return r && o(i, r.prototype), i
                } : n.exports = i = Reflect.construct, i.apply(null, arguments)
            }

            n.exports = i
        }, {"./setPrototypeOf": 19}],
        6: [function (e, t, r) {
            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            t.exports = function (e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
        }, {}],
        7: [function (e, t, r) {
            t.exports = function (e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
        }, {}],
        8: [function (e, n, t) {
            var o = e("./superPropBase");

            function i(e, t, r) {
                return "undefined" != typeof Reflect && Reflect.get ? n.exports = i = Reflect.get : n.exports = i = function (e, t, r) {
                    var n = o(e, t);
                    if (n) {
                        var i = Object.getOwnPropertyDescriptor(n, t);
                        return i.get ? i.get.call(r) : i.value
                    }
                }, i(e, t, r || e)
            }

            n.exports = i
        }, {"./superPropBase": 21}],
        9: [function (e, t, r) {
            function n(e) {
                return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(e)
            }

            t.exports = n
        }, {}],
        10: [function (e, t, r) {
            var n = e("./setPrototypeOf");
            t.exports = function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && n(e, t)
            }
        }, {"./setPrototypeOf": 19}],
        11: [function (e, t, r) {
            t.exports = function (e) {
                return e && e.__esModule ? e : {default: e}
            }
        }, {}],
        12: [function (e, t, r) {
            t.exports = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                    n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                }
                return t.default = e, t
            }
        }, {}],
        13: [function (e, t, r) {
            t.exports = function (e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }
        }, {}],
        14: [function (e, t, r) {
            t.exports = function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
        }, {}],
        15: [function (e, t, r) {
            t.exports = function (e, t) {
                var r = [], n = !0, i = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0) ;
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return r
            }
        }, {}],
        16: [function (e, t, r) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }, {}],
        17: [function (e, t, r) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }
        }, {}],
        18: [function (e, t, r) {
            var n = e("../helpers/typeof"), i = e("./assertThisInitialized");
            t.exports = function (e, t) {
                return !t || "object" !== n(t) && "function" != typeof t ? i(e) : t
            }
        }, {"../helpers/typeof": 23, "./assertThisInitialized": 3}],
        19: [function (e, r, t) {
            function n(e, t) {
                return r.exports = n = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, n(e, t)
            }

            r.exports = n
        }, {}],
        20: [function (e, t, r) {
            var n = e("./arrayWithHoles"), i = e("./iterableToArrayLimit"), o = e("./nonIterableRest");
            t.exports = function (e, t) {
                return n(e) || i(e, t) || o()
            }
        }, {"./arrayWithHoles": 1, "./iterableToArrayLimit": 15, "./nonIterableRest": 16}],
        21: [function (e, t, r) {
            var n = e("./getPrototypeOf");
            t.exports = function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e));) ;
                return e
            }
        }, {"./getPrototypeOf": 9}],
        22: [function (e, t, r) {
            var n = e("./arrayWithoutHoles"), i = e("./iterableToArray"), o = e("./nonIterableSpread");
            t.exports = function (e) {
                return n(e) || i(e) || o()
            }
        }, {"./arrayWithoutHoles": 2, "./iterableToArray": 14, "./nonIterableSpread": 17}],
        23: [function (e, t, r) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e) {
                return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = i = function (e) {
                    return n(e)
                } : t.exports = i = function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
                }, i(e)
            }

            t.exports = i
        }, {}],
        24: [function (e, t, r) {
            var n = e("./getPrototypeOf"), i = e("./setPrototypeOf"), o = e("./isNativeFunction"), a = e("./construct");

            function s(e) {
                var r = "function" == typeof Map ? new Map : void 0;
                return t.exports = s = function (e) {
                    if (null === e || !o(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== r) {
                        if (r.has(e)) return r.get(e);
                        r.set(e, t)
                    }

                    function t() {
                        return a(e, arguments, n(this).constructor)
                    }

                    return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), i(t, e)
                }, s(e)
            }

            t.exports = s
        }, {"./construct": 5, "./getPrototypeOf": 9, "./isNativeFunction": 13, "./setPrototypeOf": 19}],
        25: [function (e, t, r) {
            "use strict";

            function l(e, t, r) {
                return t <= e && e <= r
            }

            function a(e) {
                if (void 0 === e) return {};
                if (e === Object(e)) return e;
                throw TypeError("Could not convert argument to dictionary")
            }

            function s(e) {
                this.tokens = [].slice.call(e)
            }

            s.prototype = {
                endOfStream: function () {
                    return !this.tokens.length
                }, read: function () {
                    return this.tokens.length ? this.tokens.shift() : -1
                }, prepend: function (e) {
                    if (Array.isArray(e)) for (var t = e; t.length;) this.tokens.unshift(t.pop()); else this.tokens.unshift(e)
                }, push: function (e) {
                    if (Array.isArray(e)) for (var t = e; t.length;) this.tokens.push(t.shift()); else this.tokens.push(e)
                }
            };

            function c(e, t) {
                if (e) throw TypeError("Decoder error");
                return t || 65533
            }

            var n = "utf-8";

            function i(e, t) {
                if (!(this instanceof i)) return new i(e, t);
                if ((e = void 0 !== e ? String(e).toLowerCase() : n) !== n) throw new Error("Encoding not supported. Only utf-8 is supported");
                t = a(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(t.fatal), this._ignoreBOM = Boolean(t.ignoreBOM), Object.defineProperty(this, "encoding", {value: "utf-8"}), Object.defineProperty(this, "fatal", {value: this._fatal}), Object.defineProperty(this, "ignoreBOM", {value: this._ignoreBOM})
            }

            function o(e, t) {
                if (!(this instanceof o)) return new o(e, t);
                if ((e = void 0 !== e ? String(e).toLowerCase() : n) !== n) throw new Error("Encoding not supported. Only utf-8 is supported");
                t = a(t), this._streaming = !1, this._encoder = null, this._options = {fatal: Boolean(t.fatal)}, Object.defineProperty(this, "encoding", {value: "utf-8"})
            }

            function u(e) {
                var n = e.fatal, i = 0, o = 0, a = 0, s = 128, u = 191;
                this.handler = function (e, t) {
                    if (-1 === t && 0 !== a) return a = 0, c(n);
                    if (-1 === t) return -1;
                    if (0 === a) {
                        if (l(t, 0, 127)) return t;
                        if (l(t, 194, 223)) a = 1, i = t - 192; else if (l(t, 224, 239)) 224 === t && (s = 160), 237 === t && (u = 159), a = 2, i = t - 224; else {
                            if (!l(t, 240, 244)) return c(n);
                            240 === t && (s = 144), 244 === t && (u = 143), a = 3, i = t - 240
                        }
                        return i <<= 6 * a, null
                    }
                    if (!l(t, s, u)) return i = a = o = 0, s = 128, u = 191, e.prepend(t), c(n);
                    if (u = 191, i += t - (s = 128) << 6 * (a - (o += 1)), o !== a) return null;
                    var r = i;
                    return i = a = o = 0, r
                }
            }

            function h(e) {
                e.fatal;
                this.handler = function (e, t) {
                    if (-1 === t) return -1;
                    if (l(t, 0, 127)) return t;
                    var r, n;
                    l(t, 128, 2047) ? (r = 1, n = 192) : l(t, 2048, 65535) ? (r = 2, n = 224) : l(t, 65536, 1114111) && (r = 3, n = 240);
                    for (var i = [(t >> 6 * r) + n]; 0 < r;) {
                        var o = t >> 6 * (r - 1);
                        i.push(128 | 63 & o), r -= 1
                    }
                    return i
                }
            }

            i.prototype = {
                decode: function (e, t) {
                    var r;
                    r = "object" == typeof e && e instanceof ArrayBuffer ? new Uint8Array(e) : "object" == typeof e && "buffer" in e && e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(0), t = a(t), this._streaming || (this._decoder = new u({fatal: this._fatal}), this._BOMseen = !1), this._streaming = Boolean(t.stream);
                    for (var n, i = new s(r), o = []; !i.endOfStream() && -1 !== (n = this._decoder.handler(i, i.read()));) null !== n && (Array.isArray(n) ? o.push.apply(o, n) : o.push(n));
                    if (!this._streaming) {
                        do {
                            if (-1 === (n = this._decoder.handler(i, i.read()))) break;
                            null !== n && (Array.isArray(n) ? o.push.apply(o, n) : o.push(n))
                        } while (!i.endOfStream());
                        this._decoder = null
                    }
                    return o.length && (-1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === o[0] ? (this._BOMseen = !0, o.shift()) : this._BOMseen = !0)), function (e) {
                        for (var t = "", r = 0; r < e.length; ++r) {
                            var n = e[r];
                            n <= 65535 ? t += String.fromCharCode(n) : (n -= 65536, t += String.fromCharCode(55296 + (n >> 10), 56320 + (1023 & n)))
                        }
                        return t
                    }(o)
                }
            }, o.prototype = {
                encode: function (e, t) {
                    e = e ? String(e) : "", t = a(t), this._streaming || (this._encoder = new h(this._options)), this._streaming = Boolean(t.stream);
                    for (var r, n = [], i = new s(function (e) {
                        for (var t = String(e), r = t.length, n = 0, i = []; n < r;) {
                            var o = t.charCodeAt(n);
                            if (o < 55296 || 57343 < o) i.push(o); else if (56320 <= o && o <= 57343) i.push(65533); else if (55296 <= o && o <= 56319) if (n === r - 1) i.push(65533); else {
                                var a = e.charCodeAt(n + 1);
                                if (56320 <= a && a <= 57343) {
                                    var s = 1023 & o, u = 1023 & a;
                                    i.push(65536 + (s << 10) + u), n += 1
                                } else i.push(65533)
                            }
                            n += 1
                        }
                        return i
                    }(e)); !i.endOfStream() && -1 !== (r = this._encoder.handler(i, i.read()));) Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
                    if (!this._streaming) {
                        for (; -1 !== (r = this._encoder.handler(i, i.read()));) Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
                        this._encoder = null
                    }
                    return new Uint8Array(n)
                }
            }, r.TextEncoder = o, r.TextDecoder = i
        }, {}],
        26: [function (e, t, r) {
            var n;
            n = this, function (e) {
                "use strict";

                function U() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    if (1 < t.length) {
                        t[0] = t[0].slice(0, -1);
                        for (var n = t.length - 1, i = 1; i < n; ++i) t[i] = t[i].slice(1, -1);
                        return t[n] = t[n].slice(1), t.join("")
                    }
                    return t[0]
                }

                function q(e) {
                    return "(?:" + e + ")"
                }

                function n(e) {
                    return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()
                }

                function d(e) {
                    return e.toUpperCase()
                }

                function t(e) {
                    var t = "[A-Za-z]", r = "[0-9]", n = U(r, "[A-Fa-f]"),
                        i = q(q("%[EFef]" + n + "%" + n + n + "%" + n + n) + "|" + q("%[89A-Fa-f]" + n + "%" + n + n) + "|" + q("%" + n + n)),
                        o = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", a = U("[\\:\\/\\?\\#\\[\\]\\@]", o),
                        s = e ? "[\\uE000-\\uF8FF]" : "[]",
                        u = U(t, r, "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]"),
                        l = q(t + U(t, r, "[\\+\\-\\.]") + "*"), c = q(q(i + "|" + U(u, o, "[\\:]")) + "*"),
                        h = (q(q("25[0-5]") + "|" + q("2[0-4]" + r) + "|" + q("1" + r + r) + "|" + q("[1-9]" + r) + "|" + r), q(q("25[0-5]") + "|" + q("2[0-4]" + r) + "|" + q("1" + r + r) + "|" + q("0?[1-9]" + r) + "|0?0?" + r)),
                        f = q(h + "\\." + h + "\\." + h + "\\." + h), d = q(n + "{1,4}"),
                        p = q(q(d + "\\:" + d) + "|" + f),
                        b = q([q(q(d + "\\:") + "{6}" + p), q("\\:\\:" + q(d + "\\:") + "{5}" + p), q(q(d) + "?\\:\\:" + q(d + "\\:") + "{4}" + p), q(q(q(d + "\\:") + "{0,1}" + d) + "?\\:\\:" + q(d + "\\:") + "{3}" + p), q(q(q(d + "\\:") + "{0,2}" + d) + "?\\:\\:" + q(d + "\\:") + "{2}" + p), q(q(q(d + "\\:") + "{0,3}" + d) + "?\\:\\:" + d + "\\:" + p), q(q(q(d + "\\:") + "{0,4}" + d) + "?\\:\\:" + p), q(q(q(d + "\\:") + "{0,5}" + d) + "?\\:\\:" + d), q(q(q(d + "\\:") + "{0,6}" + d) + "?\\:\\:")].join("|")),
                        v = q(q(u + "|" + i) + "+"),
                        m = (q(b + "\\%25" + v), q("\\[" + q(q(b + q("\\%25|\\%(?!" + n + "{2})") + v) + "|" + b + "|" + q("[vV]" + n + "+\\." + U(u, o, "[\\:]") + "+")) + "\\]")),
                        _ = q(q(i + "|" + U(u, o)) + "*"), y = q(m + "|" + f + "(?!" + _ + ")|" + _), g = q(r + "*"),
                        k = q(q(c + "@") + "?" + y + q("\\:" + g) + "?"), C = q(i + "|" + U(u, o, "[\\:\\@]")),
                        w = q(C + "*"), E = q(C + "+"), I = q(q(i + "|" + U(u, o, "[\\@]")) + "+"),
                        O = q(q("\\/" + w) + "*"), R = q("\\/" + q(E + O) + "?"), S = q(I + O), T = q(E + O),
                        P = "(?!" + C + ")",
                        N = (q(O + "|" + R + "|" + S + "|" + T + "|" + P), q(q(C + "|" + U("[\\/\\?]", s)) + "*")),
                        D = q(q(C + "|[\\/\\?]") + "*"), A = q(q("\\/\\/" + k + O) + "|" + R + "|" + T + "|" + P);
                    q(q(l + "\\:" + A + q("\\?" + N) + "?" + q("\\#" + D) + "?") + "|" + q(q(q("\\/\\/" + k + O) + "|" + R + "|" + S + "|" + P) + q("\\?" + N) + "?" + q("\\#" + D) + "?")), q(l + "\\:" + A + q("\\?" + N) + "?"), q(q("\\/\\/(" + q("(" + c + ")@") + "?(" + y + ")" + q("\\:(" + g + ")") + "?)") + "?(" + O + "|" + R + "|" + T + "|" + P + ")"), q("\\?(" + N + ")"), q("\\#(" + D + ")"), q(q("\\/\\/(" + q("(" + c + ")@") + "?(" + y + ")" + q("\\:(" + g + ")") + "?)") + "?(" + O + "|" + R + "|" + S + "|" + P + ")"), q("\\?(" + N + ")"), q("\\#(" + D + ")"), q(q("\\/\\/(" + q("(" + c + ")@") + "?(" + y + ")" + q("\\:(" + g + ")") + "?)") + "?(" + O + "|" + R + "|" + T + "|" + P + ")"), q("\\?(" + N + ")"), q("\\#(" + D + ")"), q("(" + c + ")@"), q("\\:(" + g + ")");
                    return {
                        NOT_SCHEME: new RegExp(U("[^]", t, r, "[\\+\\-\\.]"), "g"),
                        NOT_USERINFO: new RegExp(U("[^\\%\\:]", u, o), "g"),
                        NOT_HOST: new RegExp(U("[^\\%\\[\\]\\:]", u, o), "g"),
                        NOT_PATH: new RegExp(U("[^\\%\\/\\:\\@]", u, o), "g"),
                        NOT_PATH_NOSCHEME: new RegExp(U("[^\\%\\/\\@]", u, o), "g"),
                        NOT_QUERY: new RegExp(U("[^\\%]", u, o, "[\\:\\@\\/\\?]", s), "g"),
                        NOT_FRAGMENT: new RegExp(U("[^\\%]", u, o, "[\\:\\@\\/\\?]"), "g"),
                        ESCAPE: new RegExp(U("[^]", u, o), "g"),
                        UNRESERVED: new RegExp(u, "g"),
                        OTHER_CHARS: new RegExp(U("[^\\%]", u, a), "g"),
                        PCT_ENCODED: new RegExp(i, "g"),
                        IPV4ADDRESS: new RegExp("^(" + f + ")$"),
                        IPV6ADDRESS: new RegExp("^\\[?(" + b + ")" + q(q("\\%25|\\%(?!" + n + "{2})") + "(" + v + ")") + "?\\]?$")
                    }
                }

                var s = t(!1), u = t(!0), k = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function (e, t) {
                        var r = [], n = !0, i = !1, o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0) ;
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return r
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }, A = 2147483647, r = /^xn--/, i = /[^\0-\x7E]/, o = /[\x2E\u3002\uFF0E\uFF61]/g, a = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, x = Math.floor, M = String.fromCharCode;

                function j(e) {
                    throw new RangeError(a[e])
                }

                function l(e, t) {
                    var r = e.split("@"), n = "";
                    return 1 < r.length && (n = r[0] + "@", e = r[1]), n + function (e, t) {
                        for (var r = [], n = e.length; n--;) r[n] = t(e[n]);
                        return r
                    }((e = e.replace(o, ".")).split("."), t).join(".")
                }

                function L(e) {
                    for (var t = [], r = 0, n = e.length; r < n;) {
                        var i = e.charCodeAt(r++);
                        if (55296 <= i && i <= 56319 && r < n) {
                            var o = e.charCodeAt(r++);
                            56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), r--)
                        } else t.push(i)
                    }
                    return t
                }

                function F(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }

                function V(e, t, r) {
                    var n = 0;
                    for (e = r ? x(e / 700) : e >> 1, e += x(e / t); 455 < e; n += 36) e = x(e / 35);
                    return x(n + 36 * e / (e + 38))
                }

                function c(e) {
                    var t, r = [], n = e.length, i = 0, o = 128, a = 72, s = e.lastIndexOf("-");
                    s < 0 && (s = 0);
                    for (var u = 0; u < s; ++u) 128 <= e.charCodeAt(u) && j("not-basic"), r.push(e.charCodeAt(u));
                    for (var l = 0 < s ? s + 1 : 0; l < n;) {
                        for (var c = i, h = 1, f = 36; ; f += 36) {
                            n <= l && j("invalid-input");
                            var d = (t = e.charCodeAt(l++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36;
                            (36 <= d || d > x((A - i) / h)) && j("overflow"), i += d * h;
                            var p = f <= a ? 1 : a + 26 <= f ? 26 : f - a;
                            if (d < p) break;
                            var b = 36 - p;
                            h > x(A / b) && j("overflow"), h *= b
                        }
                        var v = r.length + 1;
                        a = V(i - c, v, 0 == c), x(i / v) > A - o && j("overflow"), o += x(i / v), i %= v, r.splice(i++, 0, o)
                    }
                    return String.fromCodePoint.apply(String, r)
                }

                function h(e) {
                    var t = [], r = (e = L(e)).length, n = 128, i = 0, o = 72, a = !0, s = !1, u = void 0;
                    try {
                        for (var l, c = e[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                            var h = l.value;
                            h < 128 && t.push(M(h))
                        }
                    } catch (e) {
                        s = !0, u = e
                    } finally {
                        try {
                            !a && c.return && c.return()
                        } finally {
                            if (s) throw u
                        }
                    }
                    var f = t.length, d = f;
                    for (f && t.push("-"); d < r;) {
                        var p = A, b = !0, v = !1, m = void 0;
                        try {
                            for (var _, y = e[Symbol.iterator](); !(b = (_ = y.next()).done); b = !0) {
                                var g = _.value;
                                n <= g && g < p && (p = g)
                            }
                        } catch (e) {
                            v = !0, m = e
                        } finally {
                            try {
                                !b && y.return && y.return()
                            } finally {
                                if (v) throw m
                            }
                        }
                        var k = d + 1;
                        p - n > x((A - i) / k) && j("overflow"), i += (p - n) * k, n = p;
                        var C = !0, w = !1, E = void 0;
                        try {
                            for (var I, O = e[Symbol.iterator](); !(C = (I = O.next()).done); C = !0) {
                                var R = I.value;
                                if (R < n && ++i > A && j("overflow"), R == n) {
                                    for (var S = i, T = 36; ; T += 36) {
                                        var P = T <= o ? 1 : o + 26 <= T ? 26 : T - o;
                                        if (S < P) break;
                                        var N = S - P, D = 36 - P;
                                        t.push(M(F(P + N % D, 0))), S = x(N / D)
                                    }
                                    t.push(M(F(S, 0))), o = V(i, k, d == f), i = 0, ++d
                                }
                            }
                        } catch (e) {
                            w = !0, E = e
                        } finally {
                            try {
                                !C && O.return && O.return()
                            } finally {
                                if (w) throw E
                            }
                        }
                        ++i, ++n
                    }
                    return t.join("")
                }

                var v = {
                    version: "2.1.0", ucs2: {
                        decode: L, encode: function (e) {
                            return String.fromCodePoint.apply(String, function (e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                    return r
                                }
                                return Array.from(e)
                            }(e))
                        }
                    }, decode: c, encode: h, toASCII: function (e) {
                        return l(e, function (e) {
                            return i.test(e) ? "xn--" + h(e) : e
                        })
                    }, toUnicode: function (e) {
                        return l(e, function (e) {
                            return r.test(e) ? c(e.slice(4).toLowerCase()) : e
                        })
                    }
                }, f = {};

                function p(e) {
                    var t = e.charCodeAt(0);
                    return t < 16 ? "%0" + t.toString(16).toUpperCase() : t < 128 ? "%" + t.toString(16).toUpperCase() : t < 2048 ? "%" + (t >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase() : "%" + (t >> 12 | 224).toString(16).toUpperCase() + "%" + (t >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase()
                }

                function b(e) {
                    for (var t = "", r = 0, n = e.length; r < n;) {
                        var i = parseInt(e.substr(r + 1, 2), 16);
                        if (i < 128) t += String.fromCharCode(i), r += 3; else if (194 <= i && i < 224) {
                            if (6 <= n - r) {
                                var o = parseInt(e.substr(r + 4, 2), 16);
                                t += String.fromCharCode((31 & i) << 6 | 63 & o)
                            } else t += e.substr(r, 6);
                            r += 6
                        } else if (224 <= i) {
                            if (9 <= n - r) {
                                var a = parseInt(e.substr(r + 4, 2), 16), s = parseInt(e.substr(r + 7, 2), 16);
                                t += String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & s)
                            } else t += e.substr(r, 9);
                            r += 9
                        } else t += e.substr(r, 3), r += 3
                    }
                    return t
                }

                function m(e, r) {
                    function t(e) {
                        var t = b(e);
                        return t.match(r.UNRESERVED) ? t : e
                    }

                    return e.scheme && (e.scheme = String(e.scheme).replace(r.PCT_ENCODED, t).toLowerCase().replace(r.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(r.PCT_ENCODED, t).replace(r.NOT_USERINFO, p).replace(r.PCT_ENCODED, d)), void 0 !== e.host && (e.host = String(e.host).replace(r.PCT_ENCODED, t).toLowerCase().replace(r.NOT_HOST, p).replace(r.PCT_ENCODED, d)), void 0 !== e.path && (e.path = String(e.path).replace(r.PCT_ENCODED, t).replace(e.scheme ? r.NOT_PATH : r.NOT_PATH_NOSCHEME, p).replace(r.PCT_ENCODED, d)), void 0 !== e.query && (e.query = String(e.query).replace(r.PCT_ENCODED, t).replace(r.NOT_QUERY, p).replace(r.PCT_ENCODED, d)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(r.PCT_ENCODED, t).replace(r.NOT_FRAGMENT, p).replace(r.PCT_ENCODED, d)), e
                }

                function C(e) {
                    return e.replace(/^0*(.*)/, "$1") || "0"
                }

                function w(e, t) {
                    var r = e.match(t.IPV4ADDRESS) || [], n = k(r, 2)[1];
                    return n ? n.split(".").map(C).join(".") : e
                }

                function _(e, t) {
                    var r = e.match(t.IPV6ADDRESS) || [], n = k(r, 3), i = n[1], o = n[2];
                    if (i) {
                        for (var a = i.toLowerCase().split("::").reverse(), s = k(a, 2), u = s[0], l = s[1], c = l ? l.split(":").map(C) : [], h = u.split(":").map(C), f = t.IPV4ADDRESS.test(h[h.length - 1]), d = f ? 7 : 8, p = h.length - d, b = Array(d), v = 0; v < d; ++v) b[v] = c[v] || h[p + v] || "";
                        f && (b[d - 1] = w(b[d - 1], t));
                        var m = b.reduce(function (e, t, r) {
                            if (!t || "0" === t) {
                                var n = e[e.length - 1];
                                n && n.index + n.length === r ? n.length++ : e.push({index: r, length: 1})
                            }
                            return e
                        }, []).sort(function (e, t) {
                            return t.length - e.length
                        })[0], _ = void 0;
                        if (m && 1 < m.length) {
                            var y = b.slice(0, m.index), g = b.slice(m.index + m.length);
                            _ = y.join(":") + "::" + g.join(":")
                        } else _ = b.join(":");
                        return o && (_ += "%" + o), _
                    }
                    return e
                }

                var y = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
                    g = void 0 === "".match(/(){0}/)[1];

                function E(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = {},
                        n = !1 !== t.iri ? u : s;
                    "suffix" === t.reference && (e = (t.scheme ? t.scheme + ":" : "") + "//" + e);
                    var i = e.match(y);
                    if (i) {
                        g ? (r.scheme = i[1], r.userinfo = i[3], r.host = i[4], r.port = parseInt(i[5], 10), r.path = i[6] || "", r.query = i[7], r.fragment = i[8], isNaN(r.port) && (r.port = i[5])) : (r.scheme = i[1] || void 0, r.userinfo = -1 !== e.indexOf("@") ? i[3] : void 0, r.host = -1 !== e.indexOf("//") ? i[4] : void 0, r.port = parseInt(i[5], 10), r.path = i[6] || "", r.query = -1 !== e.indexOf("?") ? i[7] : void 0, r.fragment = -1 !== e.indexOf("#") ? i[8] : void 0, isNaN(r.port) && (r.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? i[4] : void 0)), r.host && (r.host = _(w(r.host, n), n)), void 0 !== r.scheme || void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port || r.path || void 0 !== r.query ? void 0 === r.scheme ? r.reference = "relative" : void 0 === r.fragment ? r.reference = "absolute" : r.reference = "uri" : r.reference = "same-document", t.reference && "suffix" !== t.reference && t.reference !== r.reference && (r.error = r.error || "URI is not a " + t.reference + " reference.");
                        var o = f[(t.scheme || r.scheme || "").toLowerCase()];
                        if (t.unicodeSupport || o && o.unicodeSupport) m(r, n); else {
                            if (r.host && (t.domainHost || o && o.domainHost)) try {
                                r.host = v.toASCII(r.host.replace(n.PCT_ENCODED, b).toLowerCase())
                            } catch (e) {
                                r.error = r.error || "Host's domain name can not be converted to ASCII via punycode: " + e
                            }
                            m(r, s)
                        }
                        o && o.parse && o.parse(r, t)
                    } else r.error = r.error || "URI can not be parsed.";
                    return r
                }

                var I = /^\.\.?\//, O = /^\/\.(\/|$)/, R = /^\/\.\.(\/|$)/, S = /^\/?(?:.|\n)*?(?=\/|$)/;

                function T(e) {
                    for (var t = []; e.length;) if (e.match(I)) e = e.replace(I, ""); else if (e.match(O)) e = e.replace(O, "/"); else if (e.match(R)) e = e.replace(R, "/"), t.pop(); else if ("." === e || ".." === e) e = ""; else {
                        var r = e.match(S);
                        if (!r) throw new Error("Unexpected dot segment condition");
                        var n = r[0];
                        e = e.slice(n.length), t.push(n)
                    }
                    return t.join("")
                }

                function P(t) {
                    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = r.iri ? u : s,
                        n = [], i = f[(r.scheme || t.scheme || "").toLowerCase()];
                    if (i && i.serialize && i.serialize(t, r), t.host) if (e.IPV6ADDRESS.test(t.host)) ; else if (r.domainHost || i && i.domainHost) try {
                        t.host = r.iri ? v.toUnicode(t.host) : v.toASCII(t.host.replace(e.PCT_ENCODED, b).toLowerCase())
                    } catch (e) {
                        t.error = t.error || "Host's domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + e
                    }
                    m(t, e), "suffix" !== r.reference && t.scheme && (n.push(t.scheme), n.push(":"));
                    var o = function (e, t) {
                        var r = !1 !== t.iri ? u : s, n = [];
                        return void 0 !== e.userinfo && (n.push(e.userinfo), n.push("@")), void 0 !== e.host && n.push(_(w(String(e.host), r), r).replace(r.IPV6ADDRESS, function (e, t, r) {
                            return "[" + t + (r ? "%25" + r : "") + "]"
                        })), "number" == typeof e.port && (n.push(":"), n.push(e.port.toString(10))), n.length ? n.join("") : void 0
                    }(t, r);
                    if (void 0 !== o && ("suffix" !== r.reference && n.push("//"), n.push(o), t.path && "/" !== t.path.charAt(0) && n.push("/")), void 0 !== t.path) {
                        var a = t.path;
                        r.absolutePath || i && i.absolutePath || (a = T(a)), void 0 === o && (a = a.replace(/^\/\//, "/%2F")), n.push(a)
                    }
                    return void 0 !== t.query && (n.push("?"), n.push(t.query)), void 0 !== t.fragment && (n.push("#"), n.push(t.fragment)), n.join("")
                }

                function N(e, t) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, n = {};
                    return arguments[3] || (e = E(P(e, r), r), t = E(P(t, r), r)), !(r = r || {}).tolerant && t.scheme ? (n.scheme = t.scheme, n.userinfo = t.userinfo, n.host = t.host, n.port = t.port, n.path = T(t.path || ""), n.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (n.userinfo = t.userinfo, n.host = t.host, n.port = t.port, n.path = T(t.path || ""), n.query = t.query) : (t.path ? ("/" === t.path.charAt(0) ? n.path = T(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? n.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : n.path = t.path : n.path = "/" + t.path, n.path = T(n.path)), n.query = t.query) : (n.path = e.path, void 0 !== t.query ? n.query = t.query : n.query = e.query), n.userinfo = e.userinfo, n.host = e.host, n.port = e.port), n.scheme = e.scheme), n.fragment = t.fragment, n
                }

                function D(e, t) {
                    return e && e.toString().replace(t && t.iri ? u.PCT_ENCODED : s.PCT_ENCODED, b)
                }

                var B = {
                        scheme: "http", domainHost: !0, parse: function (e, t) {
                            return e.host || (e.error = e.error || "HTTP URIs must have a host."), e
                        }, serialize: function (e, t) {
                            return e.port !== ("https" !== String(e.scheme).toLowerCase() ? 80 : 443) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e
                        }
                    }, H = {scheme: "https", domainHost: B.domainHost, parse: B.parse, serialize: B.serialize}, z = {},
                    W = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
                    Z = "[0-9A-Fa-f]",
                    K = q(q("%[EFef]" + Z + "%" + Z + Z + "%" + Z + Z) + "|" + q("%[89A-Fa-f]" + Z + "%" + Z + Z) + "|" + q("%" + Z + Z)),
                    J = U("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
                    Y = new RegExp(W, "g"), G = new RegExp(K, "g"),
                    X = new RegExp(U("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", '[\\"]', J), "g"),
                    $ = new RegExp(U("[^]", W, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g"), Q = $;

                function ee(e) {
                    var t = b(e);
                    return t.match(Y) ? t : e
                }

                var te = {
                    scheme: "mailto", parse: function (e, t) {
                        var r = e, n = r.to = r.path ? r.path.split(",") : [];
                        if (r.path = void 0, r.query) {
                            for (var i = !1, o = {}, a = r.query.split("&"), s = 0, u = a.length; s < u; ++s) {
                                var l = a[s].split("=");
                                switch (l[0]) {
                                    case"to":
                                        for (var c = l[1].split(","), h = 0, f = c.length; h < f; ++h) n.push(c[h]);
                                        break;
                                    case"subject":
                                        r.subject = D(l[1], t);
                                        break;
                                    case"body":
                                        r.body = D(l[1], t);
                                        break;
                                    default:
                                        i = !0, o[D(l[0], t)] = D(l[1], t)
                                }
                            }
                            i && (r.headers = o)
                        }
                        r.query = void 0;
                        for (var d = 0, p = n.length; d < p; ++d) {
                            var b = n[d].split("@");
                            if (b[0] = D(b[0]), t.unicodeSupport) b[1] = D(b[1], t).toLowerCase(); else try {
                                b[1] = v.toASCII(D(b[1], t).toLowerCase())
                            } catch (e) {
                                r.error = r.error || "Email address's domain name can not be converted to ASCII via punycode: " + e
                            }
                            n[d] = b.join("@")
                        }
                        return r
                    }, serialize: function (e, t) {
                        var r = e, n = function (e) {
                            return null != e ? e instanceof Array ? e : "number" != typeof e.length || e.split || e.setInterval || e.call ? [e] : Array.prototype.slice.call(e) : []
                        }(e.to);
                        if (n) {
                            for (var i = 0, o = n.length; i < o; ++i) {
                                var a = String(n[i]), s = a.lastIndexOf("@"),
                                    u = a.slice(0, s).replace(G, ee).replace(G, d).replace(X, p), l = a.slice(s + 1);
                                try {
                                    l = t.iri ? v.toUnicode(l) : v.toASCII(D(l, t).toLowerCase())
                                } catch (e) {
                                    r.error = r.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + e
                                }
                                n[i] = u + "@" + l
                            }
                            r.path = n.join(",")
                        }
                        var c = e.headers = e.headers || {};
                        e.subject && (c.subject = e.subject), e.body && (c.body = e.body);
                        var h = [];
                        for (var f in c) c[f] !== z[f] && h.push(f.replace(G, ee).replace(G, d).replace($, p) + "=" + c[f].replace(G, ee).replace(G, d).replace(Q, p));
                        return h.length && (r.query = h.join("&")), r
                    }
                }, re = /^([^\:]+)\:(.*)/, ne = {
                    scheme: "urn", parse: function (e, t) {
                        var r = e.path && e.path.match(re), n = e;
                        if (r) {
                            var i = t.scheme || n.scheme || "urn", o = r[1].toLowerCase(), a = r[2],
                                s = i + ":" + (t.nid || o), u = f[s];
                            n.nid = o, n.nss = a, n.path = void 0, u && (n = u.parse(n, t))
                        } else n.error = n.error || "URN can not be parsed.";
                        return n
                    }, serialize: function (e, t) {
                        var r = t.scheme || e.scheme || "urn", n = e.nid, i = r + ":" + (t.nid || n), o = f[i];
                        o && (e = o.serialize(e, t));
                        var a = e, s = e.nss;
                        return a.path = (n || t.nid) + ":" + s, a
                    }
                }, ie = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, oe = {
                    scheme: "urn:uuid", parse: function (e, t) {
                        var r = e;
                        return r.uuid = r.nss, r.nss = void 0, t.tolerant || r.uuid && r.uuid.match(ie) || (r.error = r.error || "UUID is not valid."), r
                    }, serialize: function (e, t) {
                        var r = e;
                        return r.nss = (e.uuid || "").toLowerCase(), r
                    }
                };
                f[B.scheme] = B, f[H.scheme] = H, f[te.scheme] = te, f[ne.scheme] = ne, f[oe.scheme] = oe, e.SCHEMES = f, e.pctEncChar = p, e.pctDecChars = b, e.parse = E, e.removeDotSegments = T, e.serialize = P, e.resolveComponents = N, e.resolve = function (e, t, r) {
                    var n = function (e, t) {
                        var r = e;
                        if (t) for (var n in t) r[n] = t[n];
                        return r
                    }({scheme: "null"}, r);
                    return P(N(E(e, n), E(t, n), n, !0), n)
                }, e.normalize = function (e, t) {
                    return "string" == typeof e ? e = P(E(e, t), t) : "object" === n(e) && (e = E(P(e, t), t)), e
                }, e.equal = function (e, t, r) {
                    return "string" == typeof e ? e = P(E(e, r), r) : "object" === n(e) && (e = P(e, r)), "string" == typeof t ? t = P(E(t, r), r) : "object" === n(t) && (t = P(t, r)), e === t
                }, e.escapeComponent = function (e, t) {
                    return e && e.toString().replace(t && t.iri ? u.ESCAPE : s.ESCAPE, p)
                }, e.unescapeComponent = D, Object.defineProperty(e, "__esModule", {value: !0})
            }("object" == typeof r && void 0 !== t ? r : n.URI = n.URI || {})
        }, {}],
        27: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard");
            Object.defineProperty(r, "__esModule", {value: !0}), r.v1 = r.default = void 0;
            var i = n(e("./v1/index")), o = r.v1 = i;
            r.default = o
        }, {"./v1/index": 31, "@babel/runtime/helpers/interopRequireWildcard": 12}],
        28: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = r.WRITE = r.READ = r.Driver = void 0;
            var a = i(e("@babel/runtime/helpers/classCallCheck")), s = i(e("@babel/runtime/helpers/createClass")),
                u = i(e("./session")), l = i(e("./internal/pool")), c = i(e("./internal/connection")), h = e("./error"),
                f = e("./internal/connection-providers"), d = i(e("./internal/bookmark")),
                p = i(e("./internal/connectivity-verifier")), b = n(e("./internal/pool-config")),
                v = i(e("./internal/logger")), m = i(e("./internal/connection-error-handler")),
                _ = e("./internal/constants"), y = 36e5, o = _.ACCESS_MODE_READ;
            r.READ = o;
            var g = _.ACCESS_MODE_WRITE;
            r.WRITE = g;
            var k = 0, C = function () {
                function o(e, t) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                    (0, a.default)(this, o), function (e) {
                        e.maxConnectionLifetime = w(e.maxConnectionLifetime, y), e.maxConnectionPoolSize = w(e.maxConnectionPoolSize, b.DEFAULT_MAX_SIZE), e.connectionAcquisitionTimeout = w(e.connectionAcquisitionTimeout, b.DEFAULT_ACQUISITION_TIMEOUT)
                    }(n), this._id = k++, this._address = e, this._userAgent = t, this._openConnections = {}, this._authToken = r, this._config = n, this._log = v.default.create(n), this._pool = new l.default({
                        create: this._createConnection.bind(this),
                        destroy: this._destroyConnection.bind(this),
                        validate: this._validateConnection.bind(this),
                        installIdleObserver: this._installIdleObserverOnConnection.bind(this),
                        removeIdleObserver: this._removeIdleObserverOnConnection.bind(this),
                        config: b.default.fromDriverConfig(n),
                        log: this._log
                    }), this._connectionProvider = null, this._onCompleted = null, this._afterConstruction()
                }

                return (0, s.default)(o, [{
                    key: "_afterConstruction", value: function () {
                        this._log.info("Direct driver ".concat(this._id, " created for server address ").concat(this._address))
                    }
                }, {
                    key: "_createConnection", value: function (e, t) {
                        var r = this,
                            n = c.default.create(e, this._config, this._createConnectionErrorHandler(), this._log);
                        return n._release = function () {
                            return t(e, n)
                        }, (this._openConnections[n.id] = n).connect(this._userAgent, this._authToken).catch(function (e) {
                            throw r.onError && r.onError(e), r._destroyConnection(n), e
                        })
                    }
                }, {
                    key: "_validateConnection", value: function (e) {
                        if (!e.isOpen()) return !1;
                        var t = this._config.maxConnectionLifetime;
                        return Date.now() - e.creationTimestamp <= t
                    }
                }, {
                    key: "_installIdleObserverOnConnection", value: function (e, t) {
                        e._queueObserver(t)
                    }
                }, {
                    key: "_removeIdleObserverOnConnection", value: function (e) {
                        e._updateCurrentObserver()
                    }
                }, {
                    key: "_destroyConnection", value: function (e) {
                        delete this._openConnections[e.id], e.close()
                    }
                }, {
                    key: "session", value: function (e, t) {
                        var r = o._validateSessionMode(e), n = this._getOrCreateConnectionProvider(),
                            i = t ? new d.default(t) : d.default.empty();
                        return new u.default(r, n, i, this._config)
                    }
                }, {
                    key: "_createConnectionProvider", value: function (e, t, r) {
                        return new f.DirectConnectionProvider(e, t, r)
                    }
                }, {
                    key: "_createConnectionErrorHandler", value: function () {
                        return new m.default(h.SERVICE_UNAVAILABLE)
                    }
                }, {
                    key: "_getOrCreateConnectionProvider", value: function () {
                        if (!this._connectionProvider) {
                            var e = this._driverOnErrorCallback.bind(this);
                            this._connectionProvider = this._createConnectionProvider(this._address, this._pool, e)
                        }
                        return this._connectionProvider
                    }
                }, {
                    key: "_driverOnErrorCallback", value: function (e) {
                        var t = this.onError;
                        t && e.code === h.SERVICE_UNAVAILABLE && t(e)
                    }
                }, {
                    key: "close", value: function () {
                        this._log.info("Driver ".concat(this._id, " closing"));
                        try {
                            this._pool.purgeAll()
                        } finally {
                            for (var e in this._openConnections) this._openConnections.hasOwnProperty(e) && this._openConnections[e].close()
                        }
                    }
                }, {
                    key: "onCompleted", get: function () {
                        return this._onCompleted
                    }, set: function (e) {
                        if (this._onCompleted = e, this._onCompleted) {
                            var t = this._getOrCreateConnectionProvider();
                            new p.default(t, this._onCompleted).verify()
                        }
                    }
                }], [{
                    key: "_validateSessionMode", value: function (e) {
                        var t = e || g;
                        if (t !== _.ACCESS_MODE_READ && t !== _.ACCESS_MODE_WRITE) throw(0, h.newError)("Illegal session mode " + t);
                        return t
                    }
                }]), o
            }();

            function w(e, t) {
                var r = parseInt(e, 10);
                return 0 < r || 0 === r ? r : r < 0 ? Number.MAX_SAFE_INTEGER : t
            }

            var E = r.Driver = C;
            r.default = E
        }, {
            "./error": 29,
            "./internal/bookmark": 36,
            "./internal/connection": 49,
            "./internal/connection-error-handler": 46,
            "./internal/connection-providers": 48,
            "./internal/connectivity-verifier": 50,
            "./internal/constants": 51,
            "./internal/logger": 59,
            "./internal/pool": 63,
            "./internal/pool-config": 62,
            "./session": 85,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12
        }],
        29: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.newError = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "N/A";
                return new l(e, t)
            }, r.PROTOCOL_ERROR = r.SESSION_EXPIRED = r.SERVICE_UNAVAILABLE = r.Neo4jError = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")),
                o = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                a = n(e("@babel/runtime/helpers/getPrototypeOf")), s = n(e("@babel/runtime/helpers/inherits")),
                u = n(e("@babel/runtime/helpers/wrapNativeSuper"));
            r.SERVICE_UNAVAILABLE = "ServiceUnavailable";
            r.SESSION_EXPIRED = "SessionExpired";
            r.PROTOCOL_ERROR = "ProtocolError";
            var l = function (e) {
                function n(e) {
                    var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "N/A";
                    return (0, i.default)(this, n), (t = (0, o.default)(this, (0, a.default)(n).call(this, e))).message = e, t.code = r, t.name = "Neo4jError", t
                }

                return (0, s.default)(n, e), n
            }((0, u.default)(Error));
            r.Neo4jError = l
        }, {
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18,
            "@babel/runtime/helpers/wrapNativeSuper": 24
        }],
        30: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.PathSegment = r.Path = r.UnboundRelationship = r.Relationship = r.Node = void 0;
            var a = n(e("@babel/runtime/helpers/classCallCheck")), i = n(e("@babel/runtime/helpers/createClass")),
                o = function () {
                    function n(e, t, r) {
                        (0, a.default)(this, n), this.identity = e, this.labels = t, this.properties = r
                    }

                    return (0, i.default)(n, [{
                        key: "toString", value: function () {
                            for (var e = "(" + this.identity, t = 0; t < this.labels.length; t++) e += ":" + this.labels[t];
                            var r = Object.keys(this.properties);
                            if (0 < r.length) {
                                e += " {";
                                for (var n = 0; n < r.length; n++) 0 < n && (e += ","), e += r[n] + ":" + JSON.stringify(this.properties[r[n]]);
                                e += "}"
                            }
                            return e += ")"
                        }
                    }]), n
                }();
            r.Node = o;
            var s = function () {
                function o(e, t, r, n, i) {
                    (0, a.default)(this, o), this.identity = e, this.start = t, this.end = r, this.type = n, this.properties = i
                }

                return (0, i.default)(o, [{
                    key: "toString", value: function () {
                        var e = "(" + this.start + ")-[:" + this.type, t = Object.keys(this.properties);
                        if (0 < t.length) {
                            e += " {";
                            for (var r = 0; r < t.length; r++) 0 < r && (e += ","), e += t[r] + ":" + JSON.stringify(this.properties[t[r]]);
                            e += "}"
                        }
                        return e += "]->(" + this.end + ")"
                    }
                }]), o
            }();
            r.Relationship = s;
            var u = function () {
                function n(e, t, r) {
                    (0, a.default)(this, n), this.identity = e, this.type = t, this.properties = r
                }

                return (0, i.default)(n, [{
                    key: "bind", value: function (e, t) {
                        return new s(this.identity, e, t, this.type, this.properties)
                    }
                }, {
                    key: "toString", value: function () {
                        var e = "-[:" + this.type, t = Object.keys(this.properties);
                        if (0 < t.length) {
                            e += " {";
                            for (var r = 0; r < t.length; r++) 0 < r && (e += ","), e += t[r] + ":" + JSON.stringify(this.properties[t[r]]);
                            e += "}"
                        }
                        return e += "]->"
                    }
                }]), n
            }();
            r.UnboundRelationship = u;
            r.PathSegment = function e(t, r, n) {
                (0, a.default)(this, e), this.start = t, this.relationship = r, this.end = n
            };
            r.Path = function e(t, r, n) {
                (0, a.default)(this, e), this.start = t, this.end = r, this.segments = n, this.length = n.length
            }
        }, {
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        31: [function (N, e, D) {
            (function (r) {
                "use strict";
                var e = N("@babel/runtime/helpers/interopRequireDefault"),
                    t = N("@babel/runtime/helpers/interopRequireWildcard");
                Object.defineProperty(D, "__esModule", {value: !0}), D.driver = w, Object.defineProperty(D, "int", {
                    enumerable: !0,
                    get: function () {
                        return n.int
                    }
                }), Object.defineProperty(D, "isInt", {
                    enumerable: !0, get: function () {
                        return n.isInt
                    }
                }), Object.defineProperty(D, "Neo4jError", {
                    enumerable: !0, get: function () {
                        return o.Neo4jError
                    }
                }), Object.defineProperty(D, "isPoint", {
                    enumerable: !0, get: function () {
                        return b.isPoint
                    }
                }), Object.defineProperty(D, "isDate", {
                    enumerable: !0, get: function () {
                        return v.isDate
                    }
                }), Object.defineProperty(D, "isDateTime", {
                    enumerable: !0, get: function () {
                        return v.isDateTime
                    }
                }), Object.defineProperty(D, "isDuration", {
                    enumerable: !0, get: function () {
                        return v.isDuration
                    }
                }), Object.defineProperty(D, "isLocalDateTime", {
                    enumerable: !0, get: function () {
                        return v.isLocalDateTime
                    }
                }), Object.defineProperty(D, "isLocalTime", {
                    enumerable: !0, get: function () {
                        return v.isLocalTime
                    }
                }), Object.defineProperty(D, "isTime", {
                    enumerable: !0, get: function () {
                        return v.isTime
                    }
                }), D.default = D.temporal = D.spatial = D.error = D.session = D.types = D.logging = D.auth = D.integer = void 0;
                var n = t(N("./integer")), i = N("./graph-types"), o = N("./error"), a = e(N("./result")),
                    s = e(N("./result-summary")), u = e(N("./record")), l = N("./driver"), c = e(N("./routing-driver")),
                    h = e(N("../version")), f = N("./internal/util"), d = e(N("./internal/url-util")),
                    p = e(N("./internal/http/http-driver")), b = N("./spatial-types"), v = N("./temporal-types"),
                    m = e(N("./internal/server-address")), _ = {
                        basic: function (e, t, r) {
                            var n = 2 < arguments.length && void 0 !== r ? r : void 0;
                            return n ? {scheme: "basic", principal: e, credentials: t, realm: n} : {
                                scheme: "basic",
                                principal: e,
                                credentials: t
                            }
                        }, kerberos: function (e) {
                            return {scheme: "kerberos", principal: "", credentials: e}
                        }, custom: function (e, t, r, n, i) {
                            var o = 4 < arguments.length && void 0 !== i ? i : void 0;
                            return o ? {scheme: n, principal: e, credentials: t, realm: r, parameters: o} : {
                                scheme: n,
                                principal: e,
                                credentials: t,
                                realm: r
                            }
                        }
                    };
                D.auth = _;
                var y, g = "neo4j-javascript/" + h.default, k = {
                    console: (y = function (e) {
                        return {
                            level: e, logger: function (e, t) {
                                return console.log("".concat(r.Date.now(), " ").concat(e.toUpperCase(), " ").concat(t))
                            }
                        }
                    }, C.toString = function () {
                        return y.toString()
                    }, C)
                };

                function C(e) {
                    return y.apply(this, arguments)
                }

                function w(e, t) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    (0, f.assertString)(e, "Bolt URL");
                    var n = d.default.parseDatabaseUrl(e);
                    if (-1 !== ["bolt+routing", "neo4j"].indexOf(n.scheme)) return new c.default(m.default.fromUrl(n.hostAndPort), n.query, g, t, r);
                    if ("bolt" === n.scheme) {
                        if (!(0, f.isEmptyObjectOrNull)(n.query)) throw new Error("Parameters are not supported with scheme 'bolt'. Given URL: '".concat(e, "'"));
                        return new l.Driver(m.default.fromUrl(n.hostAndPort), g, t, r)
                    }
                    if ("http" === n.scheme || "https" === n.scheme) return new p.default(n, g, t, r);
                    throw new Error("Unknown scheme: ".concat(n.scheme))
                }

                D.logging = k;
                var E = {
                    Node: i.Node,
                    Relationship: i.Relationship,
                    UnboundRelationship: i.UnboundRelationship,
                    PathSegment: i.PathSegment,
                    Path: i.Path,
                    Result: a.default,
                    ResultSummary: s.default,
                    Record: u.default,
                    Point: b.Point,
                    Date: v.Date,
                    DateTime: v.DateTime,
                    Duration: v.Duration,
                    LocalDateTime: v.LocalDateTime,
                    LocalTime: v.LocalTime,
                    Time: v.Time,
                    Integer: n.default
                };
                D.types = E;
                var I = {READ: l.READ, WRITE: l.WRITE};
                D.session = I;
                var O = {
                    SERVICE_UNAVAILABLE: o.SERVICE_UNAVAILABLE,
                    SESSION_EXPIRED: o.SESSION_EXPIRED,
                    PROTOCOL_ERROR: o.PROTOCOL_ERROR
                };
                D.error = O;
                var R = {toNumber: n.toNumber, toString: n.toString, inSafeRange: n.inSafeRange};
                D.integer = R;
                var S = {isPoint: b.isPoint};
                D.spatial = S;
                var T = {
                    isDuration: v.isDuration,
                    isLocalTime: v.isLocalTime,
                    isTime: v.isTime,
                    isDate: v.isDate,
                    isLocalDateTime: v.isLocalDateTime,
                    isDateTime: v.isDateTime
                };
                D.temporal = T;
                var P = {
                    driver: w,
                    int: n.int,
                    isInt: n.isInt,
                    isPoint: b.isPoint,
                    isDuration: v.isDuration,
                    isLocalTime: v.isLocalTime,
                    isTime: v.isTime,
                    isDate: v.isDate,
                    isLocalDateTime: v.isLocalDateTime,
                    isDateTime: v.isDateTime,
                    integer: R,
                    Neo4jError: o.Neo4jError,
                    auth: _,
                    logging: k,
                    types: E,
                    session: I,
                    error: O,
                    spatial: S,
                    temporal: T
                };
                D.default = P
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "../version": 89,
            "./driver": 28,
            "./error": 29,
            "./graph-types": 30,
            "./integer": 32,
            "./internal/http/http-driver": 52,
            "./internal/server-address": 73,
            "./internal/url-util": 79,
            "./internal/util": 80,
            "./record": 81,
            "./result": 83,
            "./result-summary": 82,
            "./routing-driver": 84,
            "./spatial-types": 86,
            "./temporal-types": 87,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12
        }],
        32: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = r.toString = r.toNumber = r.inSafeRange = r.isInt = r.int = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                l = e("./error"), c = function () {
                    function d(e, t) {
                        (0, i.default)(this, d), this.low = 0 | e, this.high = 0 | t
                    }

                    return (0, o.default)(d, [{
                        key: "inSafeRange", value: function () {
                            return this.greaterThanOrEqual(d.MIN_SAFE_VALUE) && this.lessThanOrEqual(d.MAX_SAFE_VALUE)
                        }
                    }, {
                        key: "toInt", value: function () {
                            return this.low
                        }
                    }, {
                        key: "toNumber", value: function () {
                            return this.high * s + (this.low >>> 0)
                        }
                    }, {
                        key: "toNumberOrInfinity", value: function () {
                            return this.lessThan(d.MIN_SAFE_VALUE) ? Number.NEGATIVE_INFINITY : this.greaterThan(d.MAX_SAFE_VALUE) ? Number.POSITIVE_INFINITY : this.toNumber()
                        }
                    }, {
                        key: "toString", value: function (e) {
                            if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix out of range: " + e);
                            if (this.isZero()) return "0";
                            var t;
                            if (this.isNegative()) {
                                if (this.equals(d.MIN_VALUE)) {
                                    var r = d.fromNumber(e), n = this.div(r);
                                    return t = n.multiply(r).subtract(this), n.toString(e) + t.toInt().toString(e)
                                }
                                return "-" + this.negate().toString(e)
                            }
                            var i = d.fromNumber(Math.pow(e, 6));
                            t = this;
                            for (var o = ""; ;) {
                                var a = t.div(i), s = (t.subtract(a.multiply(i)).toInt() >>> 0).toString(e);
                                if ((t = a).isZero()) return s + o;
                                for (; s.length < 6;) s = "0" + s;
                                o = "" + s + o
                            }
                        }
                    }, {
                        key: "getHighBits", value: function () {
                            return this.high
                        }
                    }, {
                        key: "getLowBits", value: function () {
                            return this.low
                        }
                    }, {
                        key: "getNumBitsAbs", value: function () {
                            if (this.isNegative()) return this.equals(d.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
                            for (var e = 0 !== this.high ? this.high : this.low, t = 31; 0 < t && 0 == (e & 1 << t); t--) ;
                            return 0 !== this.high ? t + 33 : t + 1
                        }
                    }, {
                        key: "isZero", value: function () {
                            return 0 === this.high && 0 === this.low
                        }
                    }, {
                        key: "isNegative", value: function () {
                            return this.high < 0
                        }
                    }, {
                        key: "isPositive", value: function () {
                            return 0 <= this.high
                        }
                    }, {
                        key: "isOdd", value: function () {
                            return 1 == (1 & this.low)
                        }
                    }, {
                        key: "isEven", value: function () {
                            return 0 == (1 & this.low)
                        }
                    }, {
                        key: "equals", value: function (e) {
                            return d.isInteger(e) || (e = d.fromValue(e)), this.high === e.high && this.low === e.low
                        }
                    }, {
                        key: "notEquals", value: function (e) {
                            return !this.equals(e)
                        }
                    }, {
                        key: "lessThan", value: function (e) {
                            return this.compare(e) < 0
                        }
                    }, {
                        key: "lessThanOrEqual", value: function (e) {
                            return this.compare(e) <= 0
                        }
                    }, {
                        key: "greaterThan", value: function (e) {
                            return 0 < this.compare(e)
                        }
                    }, {
                        key: "greaterThanOrEqual", value: function (e) {
                            return 0 <= this.compare(e)
                        }
                    }, {
                        key: "compare", value: function (e) {
                            if (d.isInteger(e) || (e = d.fromValue(e)), this.equals(e)) return 0;
                            var t = this.isNegative(), r = e.isNegative();
                            return t && !r ? -1 : !t && r ? 1 : this.subtract(e).isNegative() ? -1 : 1
                        }
                    }, {
                        key: "negate", value: function () {
                            return this.equals(d.MIN_VALUE) ? d.MIN_VALUE : this.not().add(d.ONE)
                        }
                    }, {
                        key: "add", value: function (e) {
                            d.isInteger(e) || (e = d.fromValue(e));
                            var t = this.high >>> 16, r = 65535 & this.high, n = this.low >>> 16, i = 65535 & this.low,
                                o = e.high >>> 16, a = 65535 & e.high, s = e.low >>> 16, u = 0, l = 0, c = 0, h = 0;
                            return c += (h += i + (65535 & e.low)) >>> 16, l += (c += n + s) >>> 16, u += (l += r + a) >>> 16, u += t + o, d.fromBits((c &= 65535) << 16 | (h &= 65535), (u &= 65535) << 16 | (l &= 65535))
                        }
                    }, {
                        key: "subtract", value: function (e) {
                            return d.isInteger(e) || (e = d.fromValue(e)), this.add(e.negate())
                        }
                    }, {
                        key: "multiply", value: function (e) {
                            if (this.isZero()) return d.ZERO;
                            if (d.isInteger(e) || (e = d.fromValue(e)), e.isZero()) return d.ZERO;
                            if (this.equals(d.MIN_VALUE)) return e.isOdd() ? d.MIN_VALUE : d.ZERO;
                            if (e.equals(d.MIN_VALUE)) return this.isOdd() ? d.MIN_VALUE : d.ZERO;
                            if (this.isNegative()) return e.isNegative() ? this.negate().multiply(e.negate()) : this.negate().multiply(e).negate();
                            if (e.isNegative()) return this.multiply(e.negate()).negate();
                            if (this.lessThan(p) && e.lessThan(p)) return d.fromNumber(this.toNumber() * e.toNumber());
                            var t = this.high >>> 16, r = 65535 & this.high, n = this.low >>> 16, i = 65535 & this.low,
                                o = e.high >>> 16, a = 65535 & e.high, s = e.low >>> 16, u = 65535 & e.low, l = 0, c = 0,
                                h = 0, f = 0;
                            return h += (f += i * u) >>> 16, c += (h += n * u) >>> 16, h &= 65535, c += (h += i * s) >>> 16, l += (c += r * u) >>> 16, c &= 65535, l += (c += n * s) >>> 16, c &= 65535, l += (c += i * a) >>> 16, l += t * u + r * s + n * a + i * o, d.fromBits((h &= 65535) << 16 | (f &= 65535), (l &= 65535) << 16 | (c &= 65535))
                        }
                    }, {
                        key: "div", value: function (e) {
                            if (d.isInteger(e) || (e = d.fromValue(e)), e.isZero()) throw(0, l.newError)("division by zero");
                            if (this.isZero()) return d.ZERO;
                            var t, r, n;
                            {
                                if (this.equals(d.MIN_VALUE)) return e.equals(d.ONE) || e.equals(d.NEG_ONE) ? d.MIN_VALUE : e.equals(d.MIN_VALUE) ? d.ONE : (t = this.shiftRight(1).div(e).shiftLeft(1)).equals(d.ZERO) ? e.isNegative() ? d.ONE : d.NEG_ONE : (r = this.subtract(e.multiply(t)), n = t.add(r.div(e)));
                                if (e.equals(d.MIN_VALUE)) return d.ZERO
                            }
                            if (this.isNegative()) return e.isNegative() ? this.negate().div(e.negate()) : this.negate().div(e).negate();
                            if (e.isNegative()) return this.div(e.negate()).negate();
                            for (n = d.ZERO, r = this; r.greaterThanOrEqual(e);) {
                                t = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
                                for (var i = Math.ceil(Math.log(t) / Math.LN2), o = i <= 48 ? 1 : Math.pow(2, i - 48), a = d.fromNumber(t), s = a.multiply(e); s.isNegative() || s.greaterThan(r);) s = (a = d.fromNumber(t -= o)).multiply(e);
                                a.isZero() && (a = d.ONE), n = n.add(a), r = r.subtract(s)
                            }
                            return n
                        }
                    }, {
                        key: "modulo", value: function (e) {
                            return d.isInteger(e) || (e = d.fromValue(e)), this.subtract(this.div(e).multiply(e))
                        }
                    }, {
                        key: "not", value: function () {
                            return d.fromBits(~this.low, ~this.high)
                        }
                    }, {
                        key: "and", value: function (e) {
                            return d.isInteger(e) || (e = d.fromValue(e)), d.fromBits(this.low & e.low, this.high & e.high)
                        }
                    }, {
                        key: "or", value: function (e) {
                            return d.isInteger(e) || (e = d.fromValue(e)), d.fromBits(this.low | e.low, this.high | e.high)
                        }
                    }, {
                        key: "xor", value: function (e) {
                            return d.isInteger(e) || (e = d.fromValue(e)), d.fromBits(this.low ^ e.low, this.high ^ e.high)
                        }
                    }, {
                        key: "shiftLeft", value: function (e) {
                            return d.isInteger(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? d.fromBits(this.low << e, this.high << e | this.low >>> 32 - e) : d.fromBits(0, this.low << e - 32)
                        }
                    }, {
                        key: "shiftRight", value: function (e) {
                            return d.isInteger(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? d.fromBits(this.low >>> e | this.high << 32 - e, this.high >> e) : d.fromBits(this.high >> e - 32, 0 <= this.high ? 0 : -1)
                        }
                    }]), d
                }();
            c.__isInteger__ = !0, Object.defineProperty(c.prototype, "__isInteger__", {
                value: !0,
                enumerable: !1,
                configurable: !1
            }), c.isInteger = function (e) {
                return !0 === (e && e.__isInteger__)
            };
            var a = {};
            c.fromInt = function (e) {
                var t, r;
                return -128 <= (e |= 0) && e < 128 && (r = a[e]) ? r : (t = new c(e, e < 0 ? -1 : 0, !1), -128 <= e && e < 128 && (a[e] = t), t)
            }, c.fromNumber = function (e) {
                return isNaN(e) || !isFinite(e) ? c.ZERO : e <= -u ? c.MIN_VALUE : u <= e + 1 ? c.MAX_VALUE : e < 0 ? c.fromNumber(-e).negate() : new c(e % s | 0, e / s | 0)
            }, c.fromBits = function (e, t) {
                return new c(e, t)
            }, c.fromString = function (e, t) {
                if (0 === e.length) throw(0, l.newError)("number format error: empty string");
                if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return c.ZERO;
                if ((t = t || 10) < 2 || 36 < t) throw(0, l.newError)("radix out of range: " + t);
                var r;
                if (0 < (r = e.indexOf("-"))) throw(0, l.newError)('number format error: interior "-" character: ' + e);
                if (0 === r) return c.fromString(e.substring(1), t).negate();
                for (var n = c.fromNumber(Math.pow(t, 8)), i = c.ZERO, o = 0; o < e.length; o += 8) {
                    var a = Math.min(8, e.length - o), s = parseInt(e.substring(o, o + a), t);
                    if (a < 8) {
                        var u = c.fromNumber(Math.pow(t, a));
                        i = i.multiply(u).add(c.fromNumber(s))
                    } else i = (i = i.multiply(n)).add(c.fromNumber(s))
                }
                return i
            }, c.fromValue = function (e) {
                return e instanceof c ? e : "number" == typeof e ? c.fromNumber(e) : "string" == typeof e ? c.fromString(e) : new c(e.low, e.high)
            }, c.toNumber = function (e) {
                return c.fromValue(e).toNumber()
            }, c.toString = function (e, t) {
                return c.fromValue(e).toString(t)
            }, c.inSafeRange = function (e) {
                return c.fromValue(e).inSafeRange()
            };
            var s = 4294967296, u = s * s / 2, p = c.fromInt(1 << 24);
            c.ZERO = c.fromInt(0), c.ONE = c.fromInt(1), c.NEG_ONE = c.fromInt(-1), c.MAX_VALUE = c.fromBits(-1, 2147483647, !1), c.MIN_VALUE = c.fromBits(0, -2147483648, !1), c.MIN_SAFE_VALUE = c.fromBits(1, -2097152), c.MAX_SAFE_VALUE = c.fromBits(-1, 2097151);
            var h = c.fromValue;
            r.int = h;
            var f = c.isInteger;
            r.isInt = f;
            var d = c.inSafeRange;
            r.inSafeRange = d;
            var b = c.toNumber;
            r.toNumber = b;
            var v = c.toString;
            r.toString = v;
            var m = c;
            r.default = m
        }, {
            "./error": 29,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        33: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = i(e("@babel/runtime/helpers/classCallCheck")), a = i(e("@babel/runtime/helpers/createClass")),
                u = i(e("./request-message")), s = n(e("./packstream-v1")), l = e("../error"), c = i(e("./bookmark")),
                h = i(e("./tx-config")), f = e("./constants"), d = function () {
                    function n(e, t, r) {
                        (0, o.default)(this, n), this._connection = e, this._packer = this._createPacker(t), this._unpacker = this._createUnpacker(r)
                    }

                    return (0, a.default)(n, [{
                        key: "packer", value: function () {
                            return this._packer
                        }
                    }, {
                        key: "unpacker", value: function () {
                            return this._unpacker
                        }
                    }, {
                        key: "transformMetadata", value: function (e) {
                            return e
                        }
                    }, {
                        key: "initialize", value: function (e, t, r) {
                            var n = u.default.init(e, t);
                            this._connection.write(n, r, !0)
                        }
                    }, {
                        key: "prepareToClose", value: function (e) {
                        }
                    }, {
                        key: "beginTransaction", value: function (e, t, r, n) {
                            p(t, this._connection, n);
                            var i = u.default.run("BEGIN", e.asBeginTransactionParameters()), o = u.default.pullAll();
                            this._connection.write(i, n, !1), this._connection.write(o, n, !1)
                        }
                    }, {
                        key: "commitTransaction", value: function (e) {
                            this.run("COMMIT", {}, c.default.empty(), h.default.empty(), f.ACCESS_MODE_WRITE, e)
                        }
                    }, {
                        key: "rollbackTransaction", value: function (e) {
                            this.run("ROLLBACK", {}, c.default.empty(), h.default.empty(), f.ACCESS_MODE_WRITE, e)
                        }
                    }, {
                        key: "run", value: function (e, t, r, n, i, o) {
                            p(n, this._connection, o);
                            var a = u.default.run(e, t), s = u.default.pullAll();
                            this._connection.write(a, o, !1), this._connection.write(s, o, !0)
                        }
                    }, {
                        key: "reset", value: function (e) {
                            var t = u.default.reset();
                            this._connection.write(t, e, !0)
                        }
                    }, {
                        key: "_createPacker", value: function (e) {
                            return new s.Packer(e)
                        }
                    }, {
                        key: "_createUnpacker", value: function (e) {
                            return new s.Unpacker(e)
                        }
                    }]), n
                }();

            function p(e, t, r) {
                if (!e.isEmpty()) {
                    var n = (0, l.newError)("Driver is connected to the database that does not support transaction configuration. Please upgrade to neo4j 3.5.0 or later in order to use this functionality");
                    throw t._handleFatalError(n), r.onError(n), n
                }
            }

            r.default = d
        }, {
            "../error": 29,
            "./bookmark": 36,
            "./constants": 51,
            "./packstream-v1": 60,
            "./request-message": 66,
            "./tx-config": 78,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12
        }],
        34: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = i(e("@babel/runtime/helpers/classCallCheck")), a = i(e("@babel/runtime/helpers/createClass")),
                s = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = i(e("@babel/runtime/helpers/getPrototypeOf")), l = i(e("@babel/runtime/helpers/inherits")),
                c = i(e("./bolt-protocol-v1")), h = n(e("./packstream-v2")), f = function (e) {
                    function t() {
                        return (0, o.default)(this, t), (0, s.default)(this, (0, u.default)(t).apply(this, arguments))
                    }

                    return (0, l.default)(t, e), (0, a.default)(t, [{
                        key: "_createPacker", value: function (e) {
                            return new h.Packer(e)
                        }
                    }, {
                        key: "_createUnpacker", value: function (e) {
                            return new h.Unpacker(e)
                        }
                    }]), t
                }(c.default);
            r.default = f
        }, {
            "./bolt-protocol-v1": 33,
            "./packstream-v2": 61,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        35: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = n(e("@babel/runtime/helpers/getPrototypeOf")), u = n(e("@babel/runtime/helpers/inherits")),
                l = n(e("./bolt-protocol-v2")), c = n(e("./request-message")), h = function (e) {
                    function t() {
                        return (0, i.default)(this, t), (0, a.default)(this, (0, s.default)(t).apply(this, arguments))
                    }

                    return (0, u.default)(t, e), (0, o.default)(t, [{
                        key: "transformMetadata", value: function (e) {
                            return "t_first" in e && (e.result_available_after = e.t_first, delete e.t_first), "t_last" in e && (e.result_consumed_after = e.t_last, delete e.t_last), e
                        }
                    }, {
                        key: "initialize", value: function (e, t, r) {
                            f(r);
                            var n = c.default.hello(e, t);
                            this._connection.write(n, r, !0)
                        }
                    }, {
                        key: "prepareToClose", value: function (e) {
                            var t = c.default.goodbye();
                            this._connection.write(t, e, !0)
                        }
                    }, {
                        key: "beginTransaction", value: function (e, t, r, n) {
                            f(n);
                            var i = c.default.begin(e, t, r);
                            this._connection.write(i, n, !0)
                        }
                    }, {
                        key: "commitTransaction", value: function (e) {
                            f(e);
                            var t = c.default.commit();
                            this._connection.write(t, e, !0)
                        }
                    }, {
                        key: "rollbackTransaction", value: function (e) {
                            f(e);
                            var t = c.default.rollback();
                            this._connection.write(t, e, !0)
                        }
                    }, {
                        key: "run", value: function (e, t, r, n, i, o) {
                            var a = c.default.runWithMetadata(e, t, r, n, i), s = c.default.pullAll();
                            this._connection.write(a, o, !1), this._connection.write(s, o, !0)
                        }
                    }]), t
                }(l.default);

            function f(e) {
                e && "function" == typeof e.prepareToHandleSingleResponse && e.prepareToHandleSingleResponse()
            }

            r.default = h
        }, {
            "./bolt-protocol-v2": 34,
            "./request-message": 66,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        36: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = i(e("@babel/runtime/helpers/defineProperty")), a = i(e("@babel/runtime/helpers/classCallCheck")),
                s = i(e("@babel/runtime/helpers/createClass")), u = n(e("./util")), l = "neo4j:bookmark:v1:tx", c = -1,
                h = function () {
                    function t(e) {
                        (0, a.default)(this, t), this._values = function (e) {
                            if (!e) return [];
                            if (u.isString(e)) return [e];
                            if (Array.isArray(e)) {
                                for (var t = [], r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    if (null != n) {
                                        if (!u.isString(n)) throw new TypeError("Bookmark should be a string, given: '".concat(n, "'"));
                                        t.push(n)
                                    }
                                }
                                return t
                            }
                            throw new TypeError("Bookmark should either be a string or a string array, given: '".concat(e, "'"))
                        }(e), this._maxValue = function (e) {
                            if (!e || 0 === e.length) return null;
                            for (var t = e[0], r = d(t), n = 1; n < e.length; n++) {
                                var i = e[n], o = d(i);
                                r < o && (t = i, r = o)
                            }
                            return t
                        }(this._values)
                    }

                    return (0, s.default)(t, [{
                        key: "isEmpty", value: function () {
                            return null === this._maxValue
                        }
                    }, {
                        key: "maxBookmarkAsString", value: function () {
                            return this._maxValue
                        }
                    }, {
                        key: "values", value: function () {
                            return this._values
                        }
                    }, {
                        key: "asBeginTransactionParameters", value: function () {
                            var e;
                            return this.isEmpty() ? {} : (e = {}, (0, o.default)(e, "bookmark", this._maxValue), (0, o.default)(e, "bookmarks", this._values), e)
                        }
                    }], [{
                        key: "empty", value: function () {
                            return f
                        }
                    }]), t
                }(), f = new (r.default = h)(null);

            function d(e) {
                return e && 0 === e.indexOf(l) && parseInt(e.substring(l.length)) || c
            }
        }, {
            "./util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/defineProperty": 7,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12
        }],
        37: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = n(e("@babel/runtime/helpers/classCallCheck")), a = n(e("@babel/runtime/helpers/createClass")),
                s = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = n(e("@babel/runtime/helpers/getPrototypeOf")), l = n(e("@babel/runtime/helpers/inherits")),
                i = function (e) {
                    function i(e) {
                        var t;
                        (0, o.default)(this, i);
                        var r = e instanceof ArrayBuffer ? e : new ArrayBuffer(e);
                        return (t = (0, s.default)(this, (0, u.default)(i).call(this, r.byteLength)))._buffer = r, t._view = new DataView(t._buffer), t
                    }

                    return (0, l.default)(i, e), (0, a.default)(i, [{
                        key: "putUInt8", value: function (e, t) {
                            this._view.setUint8(e, t)
                        }
                    }, {
                        key: "getUInt8", value: function (e) {
                            return this._view.getUint8(e)
                        }
                    }, {
                        key: "putInt8", value: function (e, t) {
                            this._view.setInt8(e, t)
                        }
                    }, {
                        key: "getInt8", value: function (e) {
                            return this._view.getInt8(e)
                        }
                    }, {
                        key: "getFloat64", value: function (e) {
                            return this._view.getFloat64(e)
                        }
                    }, {
                        key: "putFloat64", value: function (e, t) {
                            this._view.setFloat64(e, t)
                        }
                    }, {
                        key: "getSlice", value: function (e, t) {
                            if (this._buffer.slice) return new i(this._buffer.slice(e, e + t));
                            for (var r = new i(t), n = 0; n < t; n++) r.putUInt8(n, this.getUInt8(n + e));
                            return r
                        }
                    }, {
                        key: "readView", value: function (e) {
                            return new DataView(this._buffer, this._updatePos(e), e)
                        }
                    }]), i
                }(n(e("../buf/base-buf")).default);
            r.default = i
        }, {
            "../buf/base-buf": 42,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        38: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var u = n(e("@babel/runtime/helpers/classCallCheck")), i = n(e("@babel/runtime/helpers/createClass")),
                l = n(e("./browser-buf")), c = e("../../error"), h = e("../util"), o = function () {
                    function s(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : d,
                            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : f;
                        (0, u.default)(this, s), this._open = !0, this._pending = [], this._error = null, this._handleConnectionError = this._handleConnectionError.bind(this);
                        var n = function (e, t) {
                            var r = function (e) {
                                return !0 === e.encrypted || e.encrypted === h.ENCRYPTION_ON
                            }(e), n = function (e) {
                                return !1 === e.encrypted || e.encrypted === h.ENCRYPTION_OFF
                            }(e), i = e.trust, o = function (e) {
                                var t = "function" == typeof e ? e() : "";
                                return t && 0 <= t.toLowerCase().indexOf("https")
                            }(t);
                            if (function (e, t, r) {
                                e && !r ? console.warn("Neo4j driver is configured to use secure WebSocket on a HTTP web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to not use encryption.") : t && r && console.warn("Neo4j driver is configured to use insecure WebSocket on a HTTPS web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to use encryption.")
                            }(r, n, o), n) return {scheme: "ws", error: null};
                            if (o) return {scheme: "wss", error: null};
                            if (r) {
                                return i && "TRUST_CUSTOM_CA_SIGNED_CERTIFICATES" !== i ? {
                                    scheme: null,
                                    error: (0, c.newError)("The browser version of this driver only supports one trust strategy, 'TRUST_CUSTOM_CA_SIGNED_CERTIFICATES'. " + i + ' is not supported. Please either use TRUST_CUSTOM_CA_SIGNED_CERTIFICATES or disable encryption by setting `encrypted:"' + h.ENCRYPTION_OFF + '"` in the driver configuration.')
                                } : {scheme: "wss", error: null}
                            }
                            return {scheme: "ws", error: null}
                        }(this._config = e, t), i = n.scheme, o = n.error;
                        if (o) this._error = o; else {
                            this._ws = r(i, e.address), this._ws.binaryType = "arraybuffer";
                            var a = this;
                            this._ws.onclose = function (e) {
                                e.wasClean || a._handleConnectionError(), a._open = !1
                            }, this._ws.onopen = function () {
                                a._clearConnectionTimeout();
                                var e = a._pending;
                                a._pending = null;
                                for (var t = 0; t < e.length; t++) a.write(e[t])
                            }, this._ws.onmessage = function (e) {
                                if (a.onmessage) {
                                    var t = new l.default(e.data);
                                    a.onmessage(t)
                                }
                            }, this._ws.onerror = this._handleConnectionError, this._connectionTimeoutFired = !1, this._connectionTimeoutId = this._setupConnectionTimeout()
                        }
                    }

                    return (0, i.default)(s, [{
                        key: "_handleConnectionError", value: function () {
                            if (this._connectionTimeoutFired) return this._error = (0, c.newError)("Failed to establish connection in ".concat(this._config.connectionTimeout, "ms"), this._config.connectionErrorCode), void (this.onerror && this.onerror(this._error));
                            this._open && (this._error = (0, c.newError)("WebSocket connection failure. Due to security constraints in your web browser, the reason for the failure is not available to this Neo4j Driver. Please use your browsers development console to determine the root cause of the failure. Common reasons include the database being unavailable, using the wrong connection URL or temporary network problems. If you have enabled encryption, ensure your browser is configured to trust the certificate Neo4j is configured to use. WebSocket `readyState` is: " + this._ws.readyState, this._config.connectionErrorCode), this.onerror && this.onerror(this._error))
                        }
                    }, {
                        key: "write", value: function (e) {
                            if (null !== this._pending) this._pending.push(e); else {
                                if (!(e instanceof l.default)) throw(0, c.newError)("Don't know how to send buffer: " + e);
                                this._ws.send(e._buffer)
                            }
                        }
                    }, {
                        key: "close", value: function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : function () {
                                return null
                            };
                            this._open = !1, this._clearConnectionTimeout(), this._ws.close(), this._ws.onclose = t
                        }
                    }, {
                        key: "_setupConnectionTimeout", value: function () {
                            var e = this, t = this._config.connectionTimeout;
                            if (t) {
                                var r = this._ws;
                                return setTimeout(function () {
                                    r.readyState !== WebSocket.OPEN && (e._connectionTimeoutFired = !0, r.close())
                                }, t)
                            }
                            return null
                        }
                    }, {
                        key: "_clearConnectionTimeout", value: function () {
                            var e = this._connectionTimeoutId;
                            !e && 0 !== e || (this._connectionTimeoutFired = !1, this._connectionTimeoutId = null, clearTimeout(e))
                        }
                    }]), s
                }();

            function f(t, r) {
                var e = t + "://" + r.asHostPort();
                try {
                    return new WebSocket(e)
                } catch (e) {
                    if (function (e, t) {
                        return "SyntaxError" === e.name && function (e) {
                            return "[" === e.charAt(0) && -1 !== e.indexOf("]")
                        }(t.asHostPort())
                    }(e, r)) {
                        var n = function (e, t) {
                            var r = t.host().replace(new RegExp(":", "g"), "-").replace("%", "s") + ".ipv6-literal.net";
                            return "".concat(e, "://").concat(r, ":").concat(t.port())
                        }(t, r);
                        return new WebSocket(n)
                    }
                    throw e
                }
            }

            function d() {
                return "undefined" != typeof window && window.location ? window.location.protocol : null
            }

            r.default = o
        }, {
            "../../error": 29,
            "../util": 80,
            "./browser-buf": 37,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        39: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = n(e("@babel/runtime/helpers/getPrototypeOf")), u = n(e("@babel/runtime/helpers/inherits")),
                l = function (e) {
                    function t() {
                        return (0, i.default)(this, t), (0, a.default)(this, (0, s.default)(t).apply(this, arguments))
                    }

                    return (0, u.default)(t, e), (0, o.default)(t, [{
                        key: "resolve", value: function (e) {
                            return this._resolveToItself(e)
                        }
                    }]), t
                }(n(e("../resolver/base-host-name-resolver")).default);
            r.default = l
        }, {
            "../resolver/base-host-name-resolver": 67,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        40: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("../browser/browser-buf")), o = e("text-encoding-utf-8"), a = new o.TextEncoder("utf-8"),
                s = new o.TextDecoder("utf-8");
            var u = {
                encode: function (e) {
                    return new i.default(a.encode(e).buffer)
                }, decode: function (e, t) {
                    if (e instanceof i.default) return s.decode(e.readView(Math.min(t, e.length - e.position)));
                    for (var r = new i.default(t), n = 0; n < t; n++) r.writeUInt8(e.readUInt8());
                    return r.reset(), s.decode(r.readView(t))
                }
            };
            r.default = u
        }, {
            "../browser/browser-buf": 37,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "text-encoding-utf-8": 25
        }],
        41: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.utf8 = r.HostNameResolver = r.Channel = r.alloc = void 0;
            var i = n(e("./browser-buf")), o = n(e("./browser-channel")), a = n(e("./browser-host-name-resolver")),
                s = n(e("./browser-utf8"));
            r.alloc = function (e) {
                return new i.default(e)
            };
            var u = o.default;
            r.Channel = u;
            var l = a.default;
            r.HostNameResolver = l;
            var c = s.default;
            r.utf8 = c
        }, {
            "./browser-buf": 37,
            "./browser-channel": 38,
            "./browser-host-name-resolver": 39,
            "./browser-utf8": 40,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        42: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                a = n(e("@babel/runtime/helpers/getPrototypeOf")), s = n(e("@babel/runtime/helpers/inherits")),
                u = n(e("@babel/runtime/helpers/classCallCheck")), l = n(e("@babel/runtime/helpers/createClass")),
                i = function () {
                    function t(e) {
                        (0, u.default)(this, t), this.position = 0, this.length = e
                    }

                    return (0, l.default)(t, [{
                        key: "getUInt8", value: function (e) {
                            throw new Error("Not implemented")
                        }
                    }, {
                        key: "getInt8", value: function (e) {
                            throw new Error("Not implemented")
                        }
                    }, {
                        key: "getFloat64", value: function (e) {
                            throw new Error("Not implemented")
                        }
                    }, {
                        key: "putUInt8", value: function (e, t) {
                            throw new Error("Not implemented")
                        }
                    }, {
                        key: "putInt8", value: function (e, t) {
                            throw new Error("Not implemented")
                        }
                    }, {
                        key: "putFloat64", value: function (e, t) {
                            throw new Error("Not implemented")
                        }
                    }, {
                        key: "getInt16", value: function (e) {
                            return this.getInt8(e) << 8 | this.getUInt8(e + 1)
                        }
                    }, {
                        key: "getUInt16", value: function (e) {
                            return this.getUInt8(e) << 8 | this.getUInt8(e + 1)
                        }
                    }, {
                        key: "getInt32", value: function (e) {
                            return this.getInt8(e) << 24 | this.getUInt8(e + 1) << 16 | this.getUInt8(e + 2) << 8 | this.getUInt8(e + 3)
                        }
                    }, {
                        key: "getUInt32", value: function (e) {
                            return this.getUInt8(e) << 24 | this.getUInt8(e + 1) << 16 | this.getUInt8(e + 2) << 8 | this.getUInt8(e + 3)
                        }
                    }, {
                        key: "getInt64", value: function (e) {
                            return this.getInt8(e) << 56 | this.getUInt8(e + 1) << 48 | this.getUInt8(e + 2) << 40 | this.getUInt8(e + 3) << 32 | this.getUInt8(e + 4) << 24 | this.getUInt8(e + 5) << 16 | this.getUInt8(e + 6) << 8 | this.getUInt8(e + 7)
                        }
                    }, {
                        key: "getSlice", value: function (e, t) {
                            return new c(e, t, this)
                        }
                    }, {
                        key: "putInt16", value: function (e, t) {
                            this.putInt8(e, t >> 8), this.putUInt8(e + 1, 255 & t)
                        }
                    }, {
                        key: "putUInt16", value: function (e, t) {
                            this.putUInt8(e, t >> 8 & 255), this.putUInt8(e + 1, 255 & t)
                        }
                    }, {
                        key: "putInt32", value: function (e, t) {
                            this.putInt8(e, t >> 24), this.putUInt8(e + 1, t >> 16 & 255), this.putUInt8(e + 2, t >> 8 & 255), this.putUInt8(e + 3, 255 & t)
                        }
                    }, {
                        key: "putUInt32", value: function (e, t) {
                            this.putUInt8(e, t >> 24 & 255), this.putUInt8(e + 1, t >> 16 & 255), this.putUInt8(e + 2, t >> 8 & 255), this.putUInt8(e + 3, 255 & t)
                        }
                    }, {
                        key: "putInt64", value: function (e, t) {
                            this.putInt8(e, t >> 48), this.putUInt8(e + 1, t >> 42 & 255), this.putUInt8(e + 2, t >> 36 & 255), this.putUInt8(e + 3, t >> 30 & 255), this.putUInt8(e + 4, t >> 24 & 255), this.putUInt8(e + 5, t >> 16 & 255), this.putUInt8(e + 6, t >> 8 & 255), this.putUInt8(e + 7, 255 & t)
                        }
                    }, {
                        key: "putBytes", value: function (e, t) {
                            for (var r = 0, n = t.remaining(); r < n; r++) this.putUInt8(e + r, t.readUInt8())
                        }
                    }, {
                        key: "readUInt8", value: function () {
                            return this.getUInt8(this._updatePos(1))
                        }
                    }, {
                        key: "readInt8", value: function () {
                            return this.getInt8(this._updatePos(1))
                        }
                    }, {
                        key: "readUInt16", value: function () {
                            return this.getUInt16(this._updatePos(2))
                        }
                    }, {
                        key: "readUInt32", value: function () {
                            return this.getUInt32(this._updatePos(4))
                        }
                    }, {
                        key: "readInt16", value: function () {
                            return this.getInt16(this._updatePos(2))
                        }
                    }, {
                        key: "readInt32", value: function () {
                            return this.getInt32(this._updatePos(4))
                        }
                    }, {
                        key: "readInt64", value: function () {
                            return this.getInt32(this._updatePos(8))
                        }
                    }, {
                        key: "readFloat64", value: function () {
                            return this.getFloat64(this._updatePos(8))
                        }
                    }, {
                        key: "writeUInt8", value: function (e) {
                            this.putUInt8(this._updatePos(1), e)
                        }
                    }, {
                        key: "writeInt8", value: function (e) {
                            this.putInt8(this._updatePos(1), e)
                        }
                    }, {
                        key: "writeInt16", value: function (e) {
                            this.putInt16(this._updatePos(2), e)
                        }
                    }, {
                        key: "writeInt32", value: function (e) {
                            this.putInt32(this._updatePos(4), e)
                        }
                    }, {
                        key: "writeUInt32", value: function (e) {
                            this.putUInt32(this._updatePos(4), e)
                        }
                    }, {
                        key: "writeInt64", value: function (e) {
                            this.putInt64(this._updatePos(8), e)
                        }
                    }, {
                        key: "writeFloat64", value: function (e) {
                            this.putFloat64(this._updatePos(8), e)
                        }
                    }, {
                        key: "writeBytes", value: function (e) {
                            this.putBytes(this._updatePos(e.remaining()), e)
                        }
                    }, {
                        key: "readSlice", value: function (e) {
                            return this.getSlice(this._updatePos(e), e)
                        }
                    }, {
                        key: "_updatePos", value: function (e) {
                            var t = this.position;
                            return this.position += e, t
                        }
                    }, {
                        key: "remaining", value: function () {
                            return this.length - this.position
                        }
                    }, {
                        key: "hasRemaining", value: function () {
                            return 0 < this.remaining()
                        }
                    }, {
                        key: "reset", value: function () {
                            this.position = 0
                        }
                    }, {
                        key: "toString", value: function () {
                            return this.constructor.name + "( position=" + this.position + " )\n  " + this.toHex()
                        }
                    }, {
                        key: "toHex", value: function () {
                            for (var e = "", t = 0; t < this.length; t++) {
                                var r = this.getUInt8(t).toString(16);
                                1 === r.length && (r = "0" + r), e += r, t !== this.length - 1 && (e += " ")
                            }
                            return e
                        }
                    }]), t
                }(), c = function (e) {
                    function i(e, t, r) {
                        var n;
                        return (0, u.default)(this, i), (n = (0, o.default)(this, (0, a.default)(i).call(this, t)))._start = e, n._inner = r, n
                    }

                    return (0, s.default)(i, e), (0, l.default)(i, [{
                        key: "putUInt8", value: function (e, t) {
                            this._inner.putUInt8(this._start + e, t)
                        }
                    }, {
                        key: "getUInt8", value: function (e) {
                            return this._inner.getUInt8(this._start + e)
                        }
                    }, {
                        key: "putInt8", value: function (e, t) {
                            this._inner.putInt8(this._start + e, t)
                        }
                    }, {
                        key: "putFloat64", value: function (e, t) {
                            this._inner.putFloat64(this._start + e, t)
                        }
                    }, {
                        key: "getInt8", value: function (e) {
                            return this._inner.getInt8(this._start + e)
                        }
                    }, {
                        key: "getFloat64", value: function (e) {
                            return this._inner.getFloat64(this._start + e)
                        }
                    }]), i
                }(r.default = i)
        }, {
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        43: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = n(e("@babel/runtime/helpers/classCallCheck")), a = n(e("@babel/runtime/helpers/createClass")),
                s = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = n(e("@babel/runtime/helpers/getPrototypeOf")), l = n(e("@babel/runtime/helpers/inherits")),
                i = n(e("./base-buf")), c = e("../browser"), h = function (e) {
                    function i(e) {
                        var t;
                        (0, o.default)(this, i);
                        for (var r = 0, n = 0; n < e.length; n++) r += e[n].length;
                        return (t = (0, s.default)(this, (0, u.default)(i).call(this, r)))._buffers = e, t
                    }

                    return (0, l.default)(i, e), (0, a.default)(i, [{
                        key: "getUInt8", value: function (e) {
                            for (var t = 0; t < this._buffers.length; t++) {
                                var r = this._buffers[t];
                                if (!(e >= r.length)) return r.getUInt8(e);
                                e -= r.length
                            }
                        }
                    }, {
                        key: "getInt8", value: function (e) {
                            for (var t = 0; t < this._buffers.length; t++) {
                                var r = this._buffers[t];
                                if (!(e >= r.length)) return r.getInt8(e);
                                e -= r.length
                            }
                        }
                    }, {
                        key: "getFloat64", value: function (e) {
                            for (var t = (0, c.alloc)(8), r = 0; r < 8; r++) t.putUInt8(r, this.getUInt8(e + r));
                            return t.getFloat64(0)
                        }
                    }]), i
                }(i.default);
            r.default = h
        }, {
            "../browser": 41,
            "./base-buf": 42,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        44: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = e("../error"), a = e("./util"),
                s = [null, void 0, !0, !1, a.ENCRYPTION_ON, a.ENCRYPTION_OFF],
                u = [null, void 0, "TRUST_ALL_CERTIFICATES", "TRUST_ON_FIRST_USE", "TRUST_SIGNED_CERTIFICATES", "TRUST_CUSTOM_CA_SIGNED_CERTIFICATES", "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES"];
            r.default = function e(t, r, n) {
                (0, i.default)(this, e), this.address = t, this.encrypted = function (e) {
                    var t = e.encrypted;
                    if (-1 !== s.indexOf(t)) return t;
                    throw(0, o.newError)("Illegal value of the encrypted setting ".concat(t, ". Expected one of ").concat(s))
                }(r), this.trust = function (e) {
                    var t = e.trust;
                    if (-1 !== u.indexOf(t)) return t;
                    throw(0, o.newError)("Illegal value of the trust setting ".concat(t, ". Expected one of ").concat(u))
                }(r), this.trustedCertificates = function (e) {
                    return e.trustedCertificates || []
                }(r), this.knownHostsPath = function (e) {
                    return e.knownHosts || null
                }(r), this.connectionErrorCode = n || o.SERVICE_UNAVAILABLE, this.connectionTimeout = function (e) {
                    var t = parseInt(e.connectionTimeout, 10);
                    return 0 === t ? null : t && t < 0 ? null : t || 3e4
                }(r)
            }
        }, {
            "../error": 29,
            "./util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        45: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.Dechunker = r.Chunker = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = n(e("@babel/runtime/helpers/getPrototypeOf")), u = n(e("@babel/runtime/helpers/inherits")),
                l = n(e("./buf/base-buf")), c = e("./browser"), h = n(e("./buf/combined-buf")), f = function (e) {
                    function n(e, t) {
                        var r;
                        return (0, i.default)(this, n), (r = (0, a.default)(this, (0, s.default)(n).call(this, 0)))._bufferSize = t || 1400, r._ch = e, r._buffer = (0, c.alloc)(r._bufferSize), r._currentChunkStart = 0, r._chunkOpen = !1, r
                    }

                    return (0, u.default)(n, e), (0, o.default)(n, [{
                        key: "putUInt8", value: function (e, t) {
                            this._ensure(1), this._buffer.writeUInt8(t)
                        }
                    }, {
                        key: "putInt8", value: function (e, t) {
                            this._ensure(1), this._buffer.writeInt8(t)
                        }
                    }, {
                        key: "putFloat64", value: function (e, t) {
                            this._ensure(8), this._buffer.writeFloat64(t)
                        }
                    }, {
                        key: "putBytes", value: function (e, t) {
                            for (; 0 < t.remaining();) this._ensure(1), this._buffer.remaining() > t.remaining() ? this._buffer.writeBytes(t) : this._buffer.writeBytes(t.readSlice(this._buffer.remaining()));
                            return this
                        }
                    }, {
                        key: "flush", value: function () {
                            if (0 < this._buffer.position) {
                                this._closeChunkIfOpen();
                                var e = this._buffer;
                                this._buffer = null, this._ch.write(e.getSlice(0, e.position)), this._buffer = (0, c.alloc)(this._bufferSize), this._chunkOpen = !1
                            }
                            return this
                        }
                    }, {
                        key: "messageBoundary", value: function () {
                            this._closeChunkIfOpen(), this._buffer.remaining() < 2 && this.flush(), this._buffer.writeInt16(0)
                        }
                    }, {
                        key: "_ensure", value: function (e) {
                            var t = this._chunkOpen ? e : e + 2;
                            this._buffer.remaining() < t && this.flush(), this._chunkOpen || (this._currentChunkStart = this._buffer.position, this._buffer.position = this._buffer.position + 2, this._chunkOpen = !0)
                        }
                    }, {
                        key: "_closeChunkIfOpen", value: function () {
                            if (this._chunkOpen) {
                                var e = this._buffer.position - (this._currentChunkStart + 2);
                                this._buffer.putUInt16(this._currentChunkStart, e), this._chunkOpen = !1
                            }
                        }
                    }]), n
                }(l.default);
            r.Chunker = f;
            var d = function () {
                function e() {
                    (0, i.default)(this, e), this._currentMessage = [], this._partialChunkHeader = 0, this._state = this.AWAITING_CHUNK
                }

                return (0, o.default)(e, [{
                    key: "AWAITING_CHUNK", value: function (e) {
                        return 2 <= e.remaining() ? this._onHeader(e.readUInt16()) : (this._partialChunkHeader = e.readUInt8() << 8, this.IN_HEADER)
                    }
                }, {
                    key: "IN_HEADER", value: function (e) {
                        return this._onHeader(65535 & (this._partialChunkHeader | e.readUInt8()))
                    }
                }, {
                    key: "IN_CHUNK", value: function (e) {
                        return this._chunkSize <= e.remaining() ? (this._currentMessage.push(e.readSlice(this._chunkSize)), this.AWAITING_CHUNK) : (this._chunkSize -= e.remaining(), this._currentMessage.push(e.readSlice(e.remaining())), this.IN_CHUNK)
                    }
                }, {
                    key: "CLOSED", value: function (e) {
                    }
                }, {
                    key: "_onHeader", value: function (e) {
                        return 0 !== e ? (this._chunkSize = e, this.IN_CHUNK) : (t = 1 === this._currentMessage.length ? this._currentMessage[0] : new h.default(this._currentMessage), this._currentMessage = [], this.onmessage(t), this.AWAITING_CHUNK);
                        var t
                    }
                }, {
                    key: "write", value: function (e) {
                        for (; e.hasRemaining();) this._state = this._state(e)
                    }
                }]), e
            }();
            r.Dechunker = d
        }, {
            "./browser": 41,
            "./buf/base-buf": 42,
            "./buf/combined-buf": 43,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        46: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = e("../error"), s = function () {
                    function n(e, t, r) {
                        (0, i.default)(this, n), this._errorCode = e, this._handleUnavailability = t || u, this._handleWriteFailure = r || u
                    }

                    return (0, o.default)(n, [{
                        key: "errorCode", value: function () {
                            return this._errorCode
                        }
                    }, {
                        key: "handleAndTransformError", value: function (e, t) {
                            return function (e) {
                                if (e) return e.code === a.SESSION_EXPIRED || e.code === a.SERVICE_UNAVAILABLE || "Neo.TransientError.General.DatabaseUnavailable" === e.code;
                                return !1
                            }(e) ? this._handleUnavailability(e, t) : function (e) {
                                if (e) return "Neo.ClientError.Cluster.NotALeader" === e.code || "Neo.ClientError.General.ForbiddenOnReadOnlyDatabase" === e.code;
                                return !1
                            }(e) ? this._handleWriteFailure(e, t) : e
                        }
                    }]), n
                }();

            function u(e) {
                return e
            }

            r.default = s
        }, {
            "../error": 29,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        47: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.EMPTY_CONNECTION_HOLDER = r.default = void 0;
            var i = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                o = n(e("@babel/runtime/helpers/getPrototypeOf")), a = n(e("@babel/runtime/helpers/inherits")),
                s = n(e("@babel/runtime/helpers/classCallCheck")), u = n(e("@babel/runtime/helpers/createClass")),
                l = e("../error"), c = function () {
                    function r(e, t) {
                        (0, s.default)(this, r), this._mode = e, this._connectionProvider = t, this._referenceCount = 0, this._connectionPromise = Promise.resolve(null)
                    }

                    return (0, u.default)(r, [{
                        key: "mode", value: function () {
                            return this._mode
                        }
                    }, {
                        key: "initializeConnection", value: function () {
                            0 === this._referenceCount && (this._connectionPromise = this._connectionProvider.acquireConnection(this._mode)), this._referenceCount++
                        }
                    }, {
                        key: "getConnection", value: function (t) {
                            return this._connectionPromise.then(function (e) {
                                return t.resolveConnection(e), e
                            })
                        }
                    }, {
                        key: "releaseConnection", value: function () {
                            return 0 === this._referenceCount ? this._connectionPromise : (this._referenceCount--, 0 === this._referenceCount ? this._releaseConnection() : this._connectionPromise)
                        }
                    }, {
                        key: "close", value: function () {
                            return 0 === this._referenceCount ? this._connectionPromise : (this._referenceCount = 0, this._releaseConnection())
                        }
                    }, {
                        key: "_releaseConnection", value: function () {
                            return this._connectionPromise = this._connectionPromise.then(function (e) {
                                return e ? e.resetAndFlush().catch(h).then(function () {
                                    return e._release()
                                }) : Promise.resolve()
                            }).catch(h), this._connectionPromise
                        }
                    }]), r
                }();

            function h() {
            }

            var f = new (function (e) {
                function t() {
                    return (0, s.default)(this, t), (0, i.default)(this, (0, o.default)(t).apply(this, arguments))
                }

                return (0, a.default)(t, e), (0, u.default)(t, [{
                    key: "initializeConnection", value: function () {
                    }
                }, {
                    key: "getConnection", value: function (e) {
                        return Promise.reject((0, l.newError)("This connection holder does not serve connections"))
                    }
                }, {
                    key: "releaseConnection", value: function () {
                        return Promise.resolve()
                    }
                }, {
                    key: "close", value: function () {
                        return Promise.resolve()
                    }
                }]), t
            }(r.default = c));
            r.EMPTY_CONNECTION_HOLDER = f
        }, {
            "../error": 29,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        48: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.SingleConnectionProvider = r.LoadBalancer = r.DirectConnectionProvider = void 0;
            var l = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                c = n(e("@babel/runtime/helpers/getPrototypeOf")), o = n(e("@babel/runtime/helpers/inherits")),
                h = n(e("@babel/runtime/helpers/classCallCheck")), a = n(e("@babel/runtime/helpers/createClass")),
                s = e("../error"), f = e("../driver"), i = n(e("../session")), d = n(e("./routing-table")),
                p = n(e("./rediscovery")), b = n(e("./routing-util")), v = e("./browser"), u = function () {
                    function e() {
                        (0, h.default)(this, e)
                    }

                    return (0, a.default)(e, [{
                        key: "acquireConnection", value: function (e) {
                            throw new Error("Abstract function")
                        }
                    }, {
                        key: "_withAdditionalOnErrorCallback", value: function (e, t) {
                            return e.catch(function (e) {
                                t(e)
                            }), e
                        }
                    }]), e
                }(), m = function (e) {
                    function i(e, t, r) {
                        var n;
                        return (0, h.default)(this, i), (n = (0, l.default)(this, (0, c.default)(i).call(this)))._address = e, n._connectionPool = t, n._driverOnErrorCallback = r, n
                    }

                    return (0, o.default)(i, e), (0, a.default)(i, [{
                        key: "acquireConnection", value: function (e) {
                            var t = this._connectionPool.acquire(this._address);
                            return this._withAdditionalOnErrorCallback(t, this._driverOnErrorCallback)
                        }
                    }]), i
                }(u);
            r.DirectConnectionProvider = m;
            var _ = function (e) {
                function u(e, t, r, n, i, o, a) {
                    var s;
                    return (0, h.default)(this, u), (s = (0, l.default)(this, (0, c.default)(u).call(this)))._seedRouter = e, s._routingTable = new d.default, s._rediscovery = new p.default(new b.default(t)), s._connectionPool = r, s._driverOnErrorCallback = o, s._loadBalancingStrategy = n, s._hostNameResolver = i, s._dnsResolver = new v.HostNameResolver, s._log = a, s._useSeedRouter = !0, s
                }

                return (0, o.default)(u, e), (0, a.default)(u, [{
                    key: "acquireConnection", value: function (n) {
                        var i = this, e = this._freshRoutingTable(n).then(function (e) {
                            if (n === f.READ) {
                                var t = i._loadBalancingStrategy.selectReader(e.readers);
                                return i._acquireConnectionToServer(t, "read")
                            }
                            if (n !== f.WRITE) throw(0, s.newError)("Illegal mode " + n);
                            var r = i._loadBalancingStrategy.selectWriter(e.writers);
                            return i._acquireConnectionToServer(r, "write")
                        });
                        return this._withAdditionalOnErrorCallback(e, this._driverOnErrorCallback)
                    }
                }, {
                    key: "forget", value: function (e) {
                        this._routingTable.forget(e), this._connectionPool.purge(e)
                    }
                }, {
                    key: "forgetWriter", value: function (e) {
                        this._routingTable.forgetWriter(e)
                    }
                }, {
                    key: "_acquireConnectionToServer", value: function (e, t) {
                        return e ? this._connectionPool.acquire(e) : Promise.reject((0, s.newError)("Failed to obtain connection towards ".concat(t, " server. Known routing table is: ").concat(this._routingTable), s.SESSION_EXPIRED))
                    }
                }, {
                    key: "_freshRoutingTable", value: function (e) {
                        var t = this._routingTable;
                        return t.isStaleFor(e) ? (this._log.info("Routing table is stale for ".concat(e, ": ").concat(t)), this._refreshRoutingTable(t)) : Promise.resolve(t)
                    }
                }, {
                    key: "_refreshRoutingTable", value: function (e) {
                        var t = e.routers;
                        return this._useSeedRouter ? this._fetchRoutingTableFromSeedRouterFallbackToKnownRouters(t, e) : this._fetchRoutingTableFromKnownRoutersFallbackToSeedRouter(t, e)
                    }
                }, {
                    key: "_fetchRoutingTableFromSeedRouterFallbackToKnownRouters", value: function (t, r) {
                        var n = this;
                        return this._fetchRoutingTableUsingSeedRouter([], this._seedRouter).then(function (e) {
                            return e ? (n._useSeedRouter = !1, e) : n._fetchRoutingTableUsingKnownRouters(t, r)
                        }).then(function (e) {
                            return n._applyRoutingTableIfPossible(e), e
                        })
                    }
                }, {
                    key: "_fetchRoutingTableFromKnownRoutersFallbackToSeedRouter", value: function (t, e) {
                        var r = this;
                        return this._fetchRoutingTableUsingKnownRouters(t, e).then(function (e) {
                            return e || r._fetchRoutingTableUsingSeedRouter(t, r._seedRouter)
                        }).then(function (e) {
                            return r._applyRoutingTableIfPossible(e), e
                        })
                    }
                }, {
                    key: "_fetchRoutingTableUsingKnownRouters", value: function (r, n) {
                        return this._fetchRoutingTable(r, n).then(function (e) {
                            if (e) return e;
                            var t = r.length - 1;
                            return u._forgetRouter(n, r, t), null
                        })
                    }
                }, {
                    key: "_fetchRoutingTableUsingSeedRouter", value: function (r, e) {
                        var n = this;
                        return this._resolveSeedRouter(e).then(function (e) {
                            var t = e.filter(function (e) {
                                return r.indexOf(e) < 0
                            });
                            return n._fetchRoutingTable(t, null)
                        })
                    }
                }, {
                    key: "_resolveSeedRouter", value: function (e) {
                        var t = this;
                        return this._hostNameResolver.resolve(e).then(function (e) {
                            return Promise.all(e.map(function (e) {
                                return t._dnsResolver.resolve(e)
                            }))
                        }).then(function (e) {
                            return [].concat.apply([], e)
                        })
                    }
                }, {
                    key: "_fetchRoutingTable", value: function (n, i) {
                        var o = this;
                        return n.reduce(function (e, t, r) {
                            return e.then(function (e) {
                                return e || (u._forgetRouter(i, n, r - 1), o._createSessionForRediscovery(t).then(function (e) {
                                    return e ? o._rediscovery.lookupRoutingTableOnRouter(e, t).catch(function (e) {
                                        return o._log.warn("unable to fetch routing table because of an error ".concat(e)), null
                                    }) : null
                                }))
                            })
                        }, Promise.resolve(null))
                    }
                }, {
                    key: "_createSessionForRediscovery", value: function (e) {
                        return this._connectionPool.acquire(e).then(function (e) {
                            var t = new y(e);
                            return new i.default(f.READ, t)
                        }).catch(function (e) {
                            if (e && "Neo.ClientError.Security.Unauthorized" === e.code) throw e;
                            return null
                        })
                    }
                }, {
                    key: "_applyRoutingTableIfPossible", value: function (e) {
                        if (!e) throw(0, s.newError)("Could not perform discovery. No routing servers available. Known routing table: ".concat(this._routingTable), s.SERVICE_UNAVAILABLE);
                        0 === e.writers.length && (this._useSeedRouter = !0), this._updateRoutingTable(e)
                    }
                }, {
                    key: "_updateRoutingTable", value: function (e) {
                        this._connectionPool.keepAll(e.allServers()), this._routingTable = e, this._log.info("Updated routing table ".concat(e))
                    }
                }], [{
                    key: "_forgetRouter", value: function (e, t, r) {
                        var n = t[r];
                        e && n && e.forgetRouter(n)
                    }
                }]), u
            }(u);
            r.LoadBalancer = _;
            var y = function (e) {
                function r(e) {
                    var t;
                    return (0, h.default)(this, r), (t = (0, l.default)(this, (0, c.default)(r).call(this)))._connection = e, t
                }

                return (0, o.default)(r, e), (0, a.default)(r, [{
                    key: "acquireConnection", value: function (e) {
                        var t = this._connection;
                        return this._connection = null, Promise.resolve(t)
                    }
                }]), r
            }(u);
            r.SingleConnectionProvider = y
        }, {
            "../driver": 28,
            "../error": 29,
            "../session": 85,
            "./browser": 41,
            "./rediscovery": 65,
            "./routing-table": 71,
            "./routing-util": 72,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        49: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var a = n(e("@babel/runtime/helpers/classCallCheck")), i = n(e("@babel/runtime/helpers/createClass")),
                s = e("./browser"), u = e("./chunking"), l = e("./../error"), c = n(e("./channel-config")),
                o = e("./server-version"), h = n(e("./protocol-handshaker"));

            function f() {
            }

            var d = {onNext: f, onCompleted: f, onError: f}, p = 0, b = function () {
                function o(e, t, r, n) {
                    var i = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
                    (0, a.default)(this, o), this.id = p++, this.address = r, this.server = {address: r.asHostPort()}, this.creationTimestamp = Date.now(), this._errorHandler = t, this._disableLosslessIntegers = i, this._pendingObservers = [], this._currentObserver = void 0, this._ch = e, this._dechunker = new u.Dechunker, this._chunker = new u.Chunker(e), this._log = n, this._dbConnectionId = null, this._protocol = null, this._currentFailure = null, this._isBroken = !1, this._log.isDebugEnabled() && this._log.debug("".concat(this, " created towards ").concat(r))
                }

                return (0, i.default)(o, [{
                    key: "connect", value: function (e, t) {
                        var r = this;
                        return this._negotiateProtocol().then(function () {
                            return r._initialize(e, t)
                        })
                    }
                }, {
                    key: "_negotiateProtocol", value: function () {
                        var n = this,
                            i = new h.default(this, this._ch, this._chunker, this._disableLosslessIntegers, this._log);
                        return new Promise(function (t, r) {
                            function e(e) {
                                n._handleFatalError(e), r(e)
                            }

                            n._ch.onerror = e.bind(n), n._ch._error && e(n._ch._error), n._ch.onmessage = function (e) {
                                try {
                                    n._protocol = i.createNegotiatedProtocol(e), n._ch.onerror = n._handleFatalError.bind(n), n._ch.onmessage = function (e) {
                                        return n._dechunker.write(e)
                                    }, n._dechunker.onmessage = function (e) {
                                        n._handleMessage(n._protocol.unpacker().unpack(e))
                                    }, e.hasRemaining() && n._dechunker.write(e.readSlice(e.remaining())), t(n)
                                } catch (e) {
                                    n._handleFatalError(e), r(e)
                                }
                            }, i.writeHandshakeRequest()
                        })
                    }
                }, {
                    key: "_initialize", value: function (n, i) {
                        var o = this;
                        return new Promise(function (e, t) {
                            var r = new v(o, e, t);
                            o._protocol.initialize(n, i, r)
                        })
                    }
                }, {
                    key: "protocol", value: function () {
                        return this._protocol
                    }
                }, {
                    key: "write", value: function (e, t, r) {
                        var n = this;
                        this._queueObserver(t) && (this._log.isDebugEnabled() && this._log.debug("".concat(this, " C: ").concat(e)), this._protocol.packer().packStruct(e.signature, e.fields.map(function (e) {
                            return n._packable(e)
                        }), function (e) {
                            return n._handleFatalError(e)
                        }), this._chunker.messageBoundary(), r && this._chunker.flush())
                    }
                }, {
                    key: "_handleFatalError", value: function (e) {
                        for (this._isBroken = !0, this._error = this._errorHandler.handleAndTransformError(e, this.address), this._log.isErrorEnabled() && this._log.error("".concat(this, " experienced a fatal error ").concat(JSON.stringify(this._error))), this._currentObserver && this._currentObserver.onError && this._currentObserver.onError(this._error); 0 < this._pendingObservers.length;) {
                            var t = this._pendingObservers.shift();
                            t && t.onError && t.onError(this._error)
                        }
                    }
                }, {
                    key: "_handleMessage", value: function (e) {
                        if (!this._isBroken) {
                            var t = e.fields[0];
                            switch (e.signature) {
                                case 113:
                                    this._log.isDebugEnabled() && this._log.debug("".concat(this, " S: RECORD ").concat(JSON.stringify(e))), this._currentObserver.onNext(t);
                                    break;
                                case 112:
                                    this._log.isDebugEnabled() && this._log.debug("".concat(this, " S: SUCCESS ").concat(JSON.stringify(e)));
                                    try {
                                        var r = this._protocol.transformMetadata(t);
                                        this._currentObserver.onCompleted(r)
                                    } finally {
                                        this._updateCurrentObserver()
                                    }
                                    break;
                                case 127:
                                    this._log.isDebugEnabled() && this._log.debug("".concat(this, " S: FAILURE ").concat(JSON.stringify(e)));
                                    try {
                                        var n = (0, l.newError)(t.message, t.code);
                                        this._currentFailure = this._errorHandler.handleAndTransformError(n, this.address), this._currentObserver.onError(this._currentFailure)
                                    } finally {
                                        this._updateCurrentObserver(), this._resetOnFailure()
                                    }
                                    break;
                                case 126:
                                    this._log.isDebugEnabled() && this._log.debug("".concat(this, " S: IGNORED ").concat(JSON.stringify(e)));
                                    try {
                                        this._currentFailure && this._currentObserver.onError ? this._currentObserver.onError(this._currentFailure) : this._currentObserver.onError && this._currentObserver.onError((0, l.newError)("Ignored either because of an error or RESET"))
                                    } finally {
                                        this._updateCurrentObserver()
                                    }
                                    break;
                                default:
                                    this._handleFatalError((0, l.newError)("Unknown Bolt protocol message: " + e))
                            }
                        }
                    }
                }, {
                    key: "resetAndFlush", value: function () {
                        var n = this;
                        return new Promise(function (e, r) {
                            n._protocol.reset({
                                onNext: function (e) {
                                    var t = n._handleProtocolError("Received RECORD as a response for RESET: " + JSON.stringify(e));
                                    r(t)
                                }, onError: function (e) {
                                    if (n._isBroken) r(e); else {
                                        var t = n._handleProtocolError("Received FAILURE as a response for RESET: " + e);
                                        r(t)
                                    }
                                }, onCompleted: function () {
                                    e()
                                }
                            })
                        })
                    }
                }, {
                    key: "_resetOnFailure", value: function () {
                        var t = this;
                        this._protocol.reset({
                            onNext: function (e) {
                                t._handleProtocolError("Received RECORD as a response for RESET: " + JSON.stringify(e))
                            }, onError: function () {
                                t._currentFailure = null
                            }, onCompleted: function () {
                                t._currentFailure = null
                            }
                        })
                    }
                }, {
                    key: "_queueObserver", value: function (e) {
                        return this._isBroken ? (e && e.onError && e.onError(this._error), !1) : ((e = e || d).onCompleted = e.onCompleted || f, e.onError = e.onError || f, e.onNext = e.onNext || f, void 0 === this._currentObserver ? this._currentObserver = e : this._pendingObservers.push(e), !0)
                    }
                }, {
                    key: "_updateCurrentObserver", value: function () {
                        this._currentObserver = this._pendingObservers.shift()
                    }
                }, {
                    key: "isOpen", value: function () {
                        return !this._isBroken && this._ch._open
                    }
                }, {
                    key: "close", value: function (e) {
                        var t = this, r = 0 < arguments.length && void 0 !== e ? e : function () {
                            return null
                        };
                        this._log.isDebugEnabled() && this._log.debug("".concat(this, " closing")), this._protocol && this.isOpen() && this._protocol.prepareToClose(d), this._ch.close(function () {
                            t._log.isDebugEnabled() && t._log.debug("".concat(t, " closed")), r()
                        })
                    }
                }, {
                    key: "toString", value: function () {
                        var e = this._dbConnectionId || "";
                        return "Connection [".concat(this.id, "][").concat(e, "]")
                    }
                }, {
                    key: "_packable", value: function (e) {
                        var t = this;
                        return this._protocol.packer().packable(e, function (e) {
                            return t._handleFatalError(e)
                        })
                    }
                }, {
                    key: "_handleProtocolError", value: function (e) {
                        this._currentFailure = null, this._updateCurrentObserver();
                        var t = (0, l.newError)(e, l.PROTOCOL_ERROR);
                        return this._handleFatalError(t), t
                    }
                }], [{
                    key: "create", value: function (e, t, r, n) {
                        var i = new c.default(e, t, r.errorCode());
                        return new o(new s.Channel(i), r, e, n, t.disableLosslessIntegers)
                    }
                }]), o
            }();
            r.default = b;
            var v = function () {
                function n(e, t, r) {
                    (0, a.default)(this, n), this._connection = e, this._onSuccess = t, this._onError = r
                }

                return (0, i.default)(n, [{
                    key: "onNext", value: function (e) {
                        this.onError((0, l.newError)("Received RECORD when initializing " + JSON.stringify(e)))
                    }
                }, {
                    key: "onError", value: function (e) {
                        this._connection._updateCurrentObserver(), this._connection._handleFatalError(e), this._onError(e)
                    }
                }, {
                    key: "onCompleted", value: function (e) {
                        if (e) {
                            var t = e.server;
                            if (!this._connection.server.version) this._connection.server.version = t, o.ServerVersion.fromString(t).compareTo(o.VERSION_3_2_0) < 0 && this._connection.protocol().packer().disableByteArrays();
                            var r = e.connection_id;
                            this._connection._dbConnectionId || (this._connection._dbConnectionId = r)
                        }
                        this._onSuccess(this._connection)
                    }
                }]), n
            }()
        }, {
            "./../error": 29,
            "./browser": 41,
            "./channel-config": 44,
            "./chunking": 45,
            "./protocol-handshaker": 64,
            "./server-version": 74,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        50: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = n(e("./connection-holder")), s = e("../driver"), u = n(e("./stream-observer")), l = function () {
                    function r(e, t) {
                        (0, i.default)(this, r), this._connectionProvider = e, this._successCallback = t
                    }

                    return (0, o.default)(r, [{
                        key: "verify", value: function () {
                            var t = this;
                            (function (e) {
                                var t = new a.default(s.READ, e);
                                t.initializeConnection();
                                var r = new u.default;
                                return t.getConnection(r).then(function (e) {
                                    return t.close().then(function () {
                                        return e.server
                                    })
                                }).catch(function (e) {
                                    return t.close().catch(function () {
                                    }).then(function () {
                                        return Promise.reject(e)
                                    })
                                })
                            })(this._connectionProvider).then(function (e) {
                                t._successCallback && t._successCallback(e)
                            }).catch(function () {
                            })
                        }
                    }]), r
                }();
            r.default = l
        }, {
            "../driver": 28,
            "./connection-holder": 47,
            "./stream-observer": 75,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        51: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0}), r.ACCESS_MODE_WRITE = r.ACCESS_MODE_READ = void 0;
            r.ACCESS_MODE_READ = "READ";
            r.ACCESS_MODE_WRITE = "WRITE"
        }, {}],
        52: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var a = n(e("@babel/runtime/helpers/classCallCheck")), i = n(e("@babel/runtime/helpers/createClass")),
                s = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = n(e("@babel/runtime/helpers/getPrototypeOf")), l = n(e("@babel/runtime/helpers/inherits")),
                o = n(e("../../driver")), c = n(e("./http-session")), h = n(e("./http-session-tracker")),
                f = n(e("../server-address")), d = function (e) {
                    function o(e, t, r, n) {
                        var i;
                        return (0, a.default)(this, o), (i = (0, s.default)(this, (0, u.default)(o).call(this, f.default.fromUrl(e.hostAndPort), t, r, n)))._url = e, i._sessionTracker = new h.default, i
                    }

                    return (0, l.default)(o, e), (0, i.default)(o, [{
                        key: "session", value: function () {
                            return new c.default(this._url, this._authToken, this._config, this._sessionTracker)
                        }
                    }, {
                        key: "close", value: function () {
                            return this._sessionTracker.close()
                        }
                    }]), o
                }(o.default);
            r.default = d
        }, {
            "../../driver": 28,
            "../server-address": 73,
            "./http-session": 56,
            "./http-session-tracker": 55,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        53: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                s = n(e("../stream-observer")), a = n(e("./http-response-converter")), u = e("../../error"),
                l = function () {
                    function r(e, t) {
                        (0, i.default)(this, r), this._url = e, this._authToken = t, this._converter = new a.default
                    }

                    return (0, o.default)(r, [{
                        key: "beginTransaction", value: function () {
                            var r = this;
                            return c("POST", h(this._url), null, this._authToken).then(function (e) {
                                var t = r._converter.extractError(e);
                                if (t) throw t;
                                return r._converter.extractTransactionId(e)
                            })
                        }
                    }, {
                        key: "commitTransaction", value: function (e) {
                            var r = this;
                            return c("POST", function (e, t) {
                                return f(e, t) + "/commit"
                            }(this._url, e), null, this._authToken).then(function (e) {
                                var t = r._converter.extractError(e);
                                if (t) throw t
                            })
                        }
                    }, {
                        key: "rollbackTransaction", value: function (e) {
                            var r = this;
                            return c("DELETE", f(this._url, e), null, this._authToken).then(function (e) {
                                var t = r._converter.extractError(e);
                                if (t) throw t
                            })
                        }
                    }, {
                        key: "runQuery", value: function (e, t, r) {
                            var n = this, i = new s.default, o = f(this._url, e), a = function (e, t, r, n) {
                                try {
                                    return function (e, t, r) {
                                        var n = r.encodeStatementParameters(t);
                                        return JSON.stringify({
                                            statements: [{
                                                statement: e,
                                                parameters: n,
                                                resultDataContents: ["row", "graph"],
                                                includeStats: !0
                                            }]
                                        })
                                    }(e, t, r)
                                } catch (e) {
                                    return n.onError(e), null
                                }
                            }(t, r, this._converter, i);
                            return a ? c("POST", o, a, this._authToken).then(function (e) {
                                !function (e, t, r) {
                                    if (!e) return;
                                    try {
                                        !function (e, t, r) {
                                            var n = t.extractError(e);
                                            if (n) r.onError(n); else {
                                                var i = t.extractRecordMetadata(e);
                                                r.onCompleted(i), t.extractRawRecords(e).forEach(function (e) {
                                                    return r.onNext(e)
                                                });
                                                var o = t.extractStatementMetadata(e);
                                                r.onCompleted(o)
                                            }
                                        }(e, t, r)
                                    } catch (e) {
                                        r.onError(e)
                                    }
                                }(e, n._converter, i)
                            }).catch(function (e) {
                                i.onError(e)
                            }).then(function () {
                                return i
                            }) : Promise.resolve(i)
                        }
                    }]), r
                }();

            function c(e, n, t, r) {
                try {
                    var i = {
                        method: e, headers: function (e) {
                            var t = new Headers;
                            return t.append("Accept", "application/json; charset=UTF-8"), t.append("Content-Type", "application/json"), t.append("Authorization", "Basic " + btoa(e.principal + ":" + e.credentials)), t
                        }(r), body: t
                    };
                    return new Promise(function (t, r) {
                        fetch(n, i).then(function (e) {
                            return e.json()
                        }).then(function (e) {
                            return t(e)
                        }).catch(function (e) {
                            return r(new u.Neo4jError(e.message, u.SERVICE_UNAVAILABLE))
                        })
                    })
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function h(e) {
                return function (e, t) {
                    return "".concat(e.scheme, "://").concat(e.host, ":").concat(e.port).concat(t)
                }(e, "/db/data/transaction")
            }

            function f(e, t) {
                return h(e) + "/" + t
            }

            r.default = l
        }, {
            "../../error": 29,
            "../stream-observer": 75,
            "./http-response-converter": 54,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        54: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var a = n(e("@babel/runtime/helpers/construct")), s = n(e("@babel/runtime/helpers/toConsumableArray")),
                i = n(e("@babel/runtime/helpers/typeof")), o = n(e("@babel/runtime/helpers/classCallCheck")),
                u = n(e("@babel/runtime/helpers/createClass")), l = e("../../integer"), p = e("../../graph-types"),
                b = e("../../error"), c = e("../../spatial-types"), h = e("../../temporal-types"), f = function () {
                    function e() {
                        (0, o.default)(this, e)
                    }

                    return (0, u.default)(e, [{
                        key: "encodeStatementParameters", value: function (e) {
                            return d(e)
                        }
                    }, {
                        key: "extractError", value: function (e) {
                            var t = e.errors;
                            if (t) {
                                var r = t[0];
                                if (r) {
                                    var n = e.password_change ? "Neo.ClientError.Security.CredentialsExpired" : r.code,
                                        i = r.message;
                                    return new b.Neo4jError(i, n)
                                }
                            }
                            return null
                        }
                    }, {
                        key: "extractTransactionId", value: function (e) {
                            var t = e.commit;
                            if (t) {
                                var r = t.replace("/commit", ""), n = r.substring(r.lastIndexOf("/") + 1),
                                    i = parseInt(n, 10);
                                if (i || 0 === i) return i
                            }
                            throw new b.Neo4jError("Unable to extract transaction id from the response JSON: ".concat(JSON.stringify(e)))
                        }
                    }, {
                        key: "extractRecordMetadata", value: function (e) {
                            var t = m(e);
                            return {fields: t ? t.columns : []}
                        }
                    }, {
                        key: "extractRawRecords", value: function (e) {
                            var t = m(e);
                            if (t) {
                                var r = t.data;
                                if (r) return r.map(function (e) {
                                    return function (r) {
                                        var e = r.row, n = function (e) {
                                            var t = e.graph;
                                            if (t) {
                                                var r = t.nodes;
                                                if (r) return r.reduce(function (e, t) {
                                                    var r = y(t.id), n = t.labels, i = _(t.properties);
                                                    return e[t.id] = new p.Node(r, n, i), e
                                                }, {})
                                            }
                                            return {}
                                        }(r), i = function (e) {
                                            var t = e.graph;
                                            if (t) {
                                                var r = t.relationships;
                                                if (r) return r.reduce(function (e, t) {
                                                    var r = y(t.id), n = y(t.startNode), i = y(t.endNode), o = t.type,
                                                        a = _(t.properties);
                                                    return e[t.id] = new p.Relationship(r, n, i, o, a), e
                                                }, {})
                                            }
                                            return {}
                                        }(r);
                                        if (e) return e.map(function (e, t) {
                                            return function (e, t, r, n) {
                                                var i = t.row ? t.row[e] : null, o = t.meta ? t.meta[e] : null;
                                                return o ? function (e, t, r, n) {
                                                    return function (e) {
                                                        return g("node", e)
                                                    }(t) ? r[t.id] : function (e) {
                                                        return g("relationship", e)
                                                    }(t) ? n[t.id] : function (e) {
                                                        return Array.isArray(e)
                                                    }(t) ? function (e, t, r) {
                                                        for (var n = null, i = null, o = [], a = 0; a < e.length; a++) {
                                                            var s = e[a], u = s.id, l = s.type,
                                                                c = null === n && null === i || null !== n && null !== i;
                                                            if (c && "node" !== l) throw new b.Neo4jError("Unable to parse path, node expected but got: ".concat(JSON.stringify(s), " in ").concat(JSON.stringify(e)));
                                                            if (!c && "node" === l) throw new b.Neo4jError("Unable to parse path, relationship expected but got: ".concat(JSON.stringify(s), " in ").concat(JSON.stringify(e)));
                                                            if (c) {
                                                                var h = t[u];
                                                                if (null === n) n = h; else {
                                                                    if (null === n || null === i) throw new b.Neo4jError("Unable to parse path, illegal node configuration: ".concat(JSON.stringify(e)));
                                                                    var f = new p.PathSegment(n, i, h);
                                                                    o.push(f), n = h, i = null
                                                                }
                                                            } else {
                                                                if (null !== i) throw new b.Neo4jError("Unable to parse path, illegal relationship configuration: ".concat(JSON.stringify(e)));
                                                                i = r[u]
                                                            }
                                                        }
                                                        var d = o[o.length - 1];
                                                        if (d && d.end !== n || null !== i) throw new b.Neo4jError("Unable to parse path: ".concat(JSON.stringify(e)));
                                                        return function (e) {
                                                            var t = e[0].start, r = e[e.length - 1].end;
                                                            return new p.Path(t, r, e)
                                                        }(o)
                                                    }(t, r, n) : function (e) {
                                                        return g("point", e)
                                                    }(t) ? function (e) {
                                                        if ("Point" !== e.type) throw new b.Neo4jError("Unexpected Point type received: ".concat(JSON.stringify(e)));
                                                        var t = e.coordinates;
                                                        if (!Array.isArray(t) && (2 !== t.length || 3 !== t.length)) throw new b.Neo4jError("Unexpected Point coordinates received: ".concat(JSON.stringify(e)));
                                                        var r = function (e) {
                                                            var t = e.crs;
                                                            if (!t || !t.name) throw new b.Neo4jError("Unexpected Point crs received: ".concat(JSON.stringify(e)));
                                                            var r = t.name.toLowerCase();
                                                            {
                                                                if ("wgs-84" === r) return 4326;
                                                                if ("wgs-84-3d" === r) return 4979;
                                                                if ("cartesian" === r) return 7203;
                                                                if ("cartesian-3d" === r) return 9157;
                                                                throw new b.Neo4jError("Unexpected Point crs received: ".concat(JSON.stringify(e)))
                                                            }
                                                        }(e);
                                                        return (0, a.default)(c.Point, [r].concat((0, s.default)(t)))
                                                    }(e) : e
                                                }(i, o, r, n) : _(i)
                                            }(t, r, n, i)
                                        });
                                        return []
                                    }(e)
                                })
                            }
                            return []
                        }
                    }, {
                        key: "extractStatementMetadata", value: function (e) {
                            var t = m(e);
                            if (t) {
                                var r = t.stats;
                                if (r) return {
                                    stats: Object.keys(r).reduce(function (e, t) {
                                        return "contains_updates" === t || (e[("relationship_deleted" === t ? "relationships_deleted" : t).replace("_", "-")] = r[t]), e
                                    }, {})
                                }
                            }
                            return {}
                        }
                    }]), e
                }();

            function d(r) {
                return r && "object" === (0, i.default)(r) ? Object.keys(r).reduce(function (e, t) {
                    return e[t] = function t(e) {
                        {
                            if (e instanceof p.Node) throw new b.Neo4jError("It is not allowed to pass nodes in query parameters", b.PROTOCOL_ERROR);
                            if (e instanceof p.Relationship) throw new b.Neo4jError("It is not allowed to pass relationships in query parameters", b.PROTOCOL_ERROR);
                            if (e instanceof p.Path) throw new b.Neo4jError("It is not allowed to pass paths in query parameters", b.PROTOCOL_ERROR);
                            if ((0, c.isPoint)(e)) throw v("points");
                            if ((0, h.isDate)(e)) throw v("dates");
                            if ((0, h.isDateTime)(e)) throw v("date-time");
                            if ((0, h.isDuration)(e)) throw v("durations");
                            if ((0, h.isLocalDateTime)(e)) throw v("local date-time");
                            if ((0, h.isLocalTime)(e)) throw v("local time");
                            if ((0, h.isTime)(e)) throw v("time");
                            return (0, l.isInt)(e) ? e.toNumber() : Array.isArray(e) ? e.map(function (e) {
                                return t(e)
                            }) : "object" === (0, i.default)(e) ? d(e) : e
                        }
                    }(r[t]), e
                }, {}) : r
            }

            function v(e) {
                return new b.Neo4jError("It is not allowed to pass ".concat(e, " in query parameters when using HTTP endpoint. ") + "Please consider using Cypher functions to create ".concat(e, " so that query parameters are plain objects."), b.PROTOCOL_ERROR)
            }

            function m(e) {
                var t = e.results;
                if (t) {
                    var r = t[0];
                    if (r) return r
                }
                return null
            }

            function _(r) {
                return null == r || void 0 === r ? null : "number" == typeof r ? y(r) : Array.isArray(r) ? r.map(function (e) {
                    return _(e)
                }) : "object" === (0, i.default)(r) ? Object.keys(r).reduce(function (e, t) {
                    return e[t] = _(r[t]), e
                }, {}) : r
            }

            function y(e) {
                return "number" == typeof e ? e : Number(e)
            }

            function g(e, t) {
                return !Array.isArray(t) && "object" === (0, i.default)(t) && t.type === e
            }

            r.default = f
        }, {
            "../../error": 29,
            "../../graph-types": 30,
            "../../integer": 32,
            "../../spatial-types": 86,
            "../../temporal-types": 87,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/construct": 5,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/toConsumableArray": 22,
            "@babel/runtime/helpers/typeof": 23
        }],
        55: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = function () {
                    function e() {
                        (0, i.default)(this, e), this._openSessions = new Set
                    }

                    return (0, o.default)(e, [{
                        key: "sessionOpened", value: function (e) {
                            this._openSessions.add(e)
                        }
                    }, {
                        key: "sessionClosed", value: function (e) {
                            this._openSessions.delete(e)
                        }
                    }, {
                        key: "close", value: function () {
                            var e = Array.from(this._openSessions);
                            return this._openSessions.clear(), Promise.all(e.map(function (e) {
                                return function (t) {
                                    return new Promise(function (e) {
                                        t.close(function () {
                                            e()
                                        })
                                    })
                                }(e)
                            }))
                        }
                    }]), e
                }();
            r.default = a
        }, {
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        56: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var a = n(e("@babel/runtime/helpers/classCallCheck")), i = n(e("@babel/runtime/helpers/createClass")),
                s = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = n(e("@babel/runtime/helpers/getPrototypeOf")),
                l = n(e("@babel/runtime/helpers/assertThisInitialized")), c = n(e("@babel/runtime/helpers/inherits")),
                h = e("../../driver"), o = n(e("../../session")), f = e("../util"), d = e("../../error"),
                p = n(e("./http-request-runner")), b = e("../connection-holder"), v = n(e("../../result")),
                m = function (e) {
                    function o(e, t, r, n) {
                        var i;
                        return (0, a.default)(this, o), (i = (0, s.default)(this, (0, u.default)(o).call(this, h.WRITE, null, null, r)))._ongoingTransactionIds = [], i._serverInfoSupplier = function (e) {
                            return function () {
                                return {server: {address: e.hostAndPort}}
                            }
                        }(e), i._requestRunner = new p.default(e, t), i._sessionTracker = n, i._sessionTracker.sessionOpened((0, l.default)(i)), i
                    }

                    return (0, c.default)(o, e), (0, i.default)(o, [{
                        key: "run", value: function (e, t) {
                            var r = this, n = 1 < arguments.length && void 0 !== t ? t : {},
                                i = (0, f.validateStatementAndParameters)(e, n), o = i.query, a = i.params;
                            return this._requestRunner.beginTransaction().then(function (t) {
                                return r._ongoingTransactionIds.push(t), r._requestRunner.runQuery(t, o, a).then(function (e) {
                                    return e.hasFailed() ? function (e, t, r) {
                                        return _(e, r).then(function () {
                                            return t
                                        })
                                    }(t, e, r._requestRunner) : function (e, t, r) {
                                        return r.commitTransaction(e).catch(function (e) {
                                            t.onError(e)
                                        }).then(function () {
                                            return t
                                        })
                                    }(t, e, r._requestRunner)
                                }).then(function (e) {
                                    return r._ongoingTransactionIds = r._ongoingTransactionIds.filter(function (e) {
                                        return e !== t
                                    }), new v.default(e, o, a, r._serverInfoSupplier, b.EMPTY_CONNECTION_HOLDER)
                                })
                            })
                        }
                    }, {
                        key: "beginTransaction", value: function () {
                            y()
                        }
                    }, {
                        key: "readTransaction", value: function () {
                            y()
                        }
                    }, {
                        key: "writeTransaction", value: function () {
                            y()
                        }
                    }, {
                        key: "lastBookmark", value: function () {
                            throw new d.Neo4jError("Experimental HTTP driver does not support bookmarks and routing")
                        }
                    }, {
                        key: "close", value: function (e) {
                            var t = this, r = 0 < arguments.length && void 0 !== e ? e : function () {
                                return null
                            }, n = this._ongoingTransactionIds.map(function (e) {
                                return _(e, t._requestRunner)
                            });
                            Promise.all(n).then(function () {
                                t._sessionTracker.sessionClosed(t), r()
                            })
                        }
                    }]), o
                }(o.default);

            function _(e, t) {
                return t.rollbackTransaction(e).catch(function () {
                })
            }

            function y() {
                throw new d.Neo4jError("Experimental HTTP driver does not support transactions")
            }

            r.default = m
        }, {
            "../../driver": 28,
            "../../error": 29,
            "../../result": 83,
            "../../session": 85,
            "../connection-holder": 47,
            "../util": 80,
            "./http-request-runner": 53,
            "@babel/runtime/helpers/assertThisInitialized": 3,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        57: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = r.LEAST_CONNECTED_STRATEGY_NAME = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = n(e("@babel/runtime/helpers/getPrototypeOf")), u = n(e("@babel/runtime/helpers/inherits")),
                l = n(e("./round-robin-array-index")), c = n(e("./load-balancing-strategy"));
            r.LEAST_CONNECTED_STRATEGY_NAME = "least_connected";
            var h = function (e) {
                function r(e) {
                    var t;
                    return (0, i.default)(this, r), (t = (0, a.default)(this, (0, s.default)(r).call(this)))._readersIndex = new l.default, t._writersIndex = new l.default, t._connectionPool = e, t
                }

                return (0, u.default)(r, e), (0, o.default)(r, [{
                    key: "selectReader", value: function (e) {
                        return this._select(e, this._readersIndex)
                    }
                }, {
                    key: "selectWriter", value: function (e) {
                        return this._select(e, this._writersIndex)
                    }
                }, {
                    key: "_select", value: function (e, t) {
                        var r = e.length;
                        if (0 === r) return null;
                        var n = t.next(r), i = n, o = null, a = Number.MAX_SAFE_INTEGER;
                        do {
                            var s = e[i], u = this._connectionPool.activeResourceCount(s);
                            u < a && (o = s, a = u), i === r - 1 ? i = 0 : i++
                        } while (i !== n);
                        return o
                    }
                }]), r
            }(c.default);
            r.default = h
        }, {
            "./load-balancing-strategy": 58,
            "./round-robin-array-index": 69,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        58: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = function () {
                    function e() {
                        (0, i.default)(this, e)
                    }

                    return (0, o.default)(e, [{
                        key: "selectReader", value: function (e) {
                            throw new Error("Abstract function")
                        }
                    }, {
                        key: "selectWriter", value: function (e) {
                            throw new Error("Abstract function")
                        }
                    }]), e
                }();
            r.default = a
        }, {
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        59: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i, o = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                a = n(e("@babel/runtime/helpers/getPrototypeOf")), s = n(e("@babel/runtime/helpers/inherits")),
                u = n(e("@babel/runtime/helpers/classCallCheck")), l = n(e("@babel/runtime/helpers/createClass")),
                c = n(e("@babel/runtime/helpers/defineProperty")), h = e("../error"), f = "error", d = "warn",
                p = "info", b = "debug",
                v = (i = {}, (0, c.default)(i, f, 0), (0, c.default)(i, d, 1), (0, c.default)(i, p, 2), (0, c.default)(i, b, 3), i),
                m = function () {
                    function r(e, t) {
                        (0, u.default)(this, r), this._level = e, this._loggerFunction = t
                    }

                    return (0, l.default)(r, [{
                        key: "isErrorEnabled", value: function () {
                            return y(this._level, f)
                        }
                    }, {
                        key: "error", value: function (e) {
                            this.isErrorEnabled() && this._loggerFunction(f, e)
                        }
                    }, {
                        key: "isWarnEnabled", value: function () {
                            return y(this._level, d)
                        }
                    }, {
                        key: "warn", value: function (e) {
                            this.isWarnEnabled() && this._loggerFunction(d, e)
                        }
                    }, {
                        key: "isInfoEnabled", value: function () {
                            return y(this._level, p)
                        }
                    }, {
                        key: "info", value: function (e) {
                            this.isInfoEnabled() && this._loggerFunction(p, e)
                        }
                    }, {
                        key: "isDebugEnabled", value: function () {
                            return y(this._level, b)
                        }
                    }, {
                        key: "debug", value: function (e) {
                            this.isDebugEnabled() && this._loggerFunction(b, e)
                        }
                    }], [{
                        key: "create", value: function (e) {
                            if (e && e.logging) {
                                var t = e.logging;
                                return new r(function (e) {
                                    if (e && e.level) {
                                        var t = e.level, r = v[t];
                                        if (!r && 0 !== r) throw(0, h.newError)("Illegal logging level: ".concat(t, ". Supported levels are: ").concat(Object.keys(v)));
                                        return t
                                    }
                                    return "info"
                                }(t), function (e) {
                                    if (e && e.logger) {
                                        var t = e.logger;
                                        if (t && "function" == typeof t) return t
                                    }
                                    throw(0, h.newError)("Illegal logger function: ".concat(e.logger))
                                }(t))
                            }
                            return this.noOp()
                        }
                    }, {
                        key: "noOp", value: function () {
                            return _
                        }
                    }]), r
                }(), _ = new (function (e) {
                    function t() {
                        return (0, u.default)(this, t), (0, o.default)(this, (0, a.default)(t).call(this, null, null))
                    }

                    return (0, s.default)(t, e), (0, l.default)(t, [{
                        key: "isErrorEnabled", value: function () {
                            return !1
                        }
                    }, {
                        key: "error", value: function (e) {
                        }
                    }, {
                        key: "isWarnEnabled", value: function () {
                            return !1
                        }
                    }, {
                        key: "warn", value: function (e) {
                        }
                    }, {
                        key: "isInfoEnabled", value: function () {
                            return !1
                        }
                    }, {
                        key: "info", value: function (e) {
                        }
                    }, {
                        key: "isDebugEnabled", value: function () {
                            return !1
                        }
                    }, {
                        key: "debug", value: function (e) {
                        }
                    }]), t
                }(m));

            function y(e, t) {
                return v[t] <= v[e]
            }

            var g = m;
            r.default = g
        }, {
            "../error": 29,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/defineProperty": 7,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        60: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.Structure = r.Unpacker = r.Packer = void 0;
            var u = i(e("@babel/runtime/helpers/typeof")), o = i(e("@babel/runtime/helpers/classCallCheck")),
                a = i(e("@babel/runtime/helpers/createClass")), s = e("./browser"), h = n(e("../integer")),
                f = e("./../error"), d = e("../graph-types"), l = function () {
                    function r(e, t) {
                        (0, o.default)(this, r), this.signature = e, this.fields = t
                    }

                    return (0, a.default)(r, [{
                        key: "toString", value: function () {
                            for (var e = "", t = 0; t < this.fields.length; t++) 0 < t && (e += ", "), e += this.fields[t];
                            return "Structure(" + this.signature + ", [" + e + "])"
                        }
                    }]), r
                }();
            r.Structure = l;
            var c = function () {
                function t(e) {
                    (0, o.default)(this, t), this._ch = e, this._byteArraysSupported = !0
                }

                return (0, a.default)(t, [{
                    key: "packable", value: function (o, a) {
                        var s = this;
                        if (null === o) return function () {
                            return s._ch.writeUInt8(192)
                        };
                        if (!0 === o) return function () {
                            return s._ch.writeUInt8(195)
                        };
                        if (!1 === o) return function () {
                            return s._ch.writeUInt8(194)
                        };
                        if ("number" == typeof o) return function () {
                            return s.packFloat(o)
                        };
                        if ("string" == typeof o) return function () {
                            return s.packString(o, a)
                        };
                        if ((0, h.isInt)(o)) return function () {
                            return s.packInteger(o)
                        };
                        if (o instanceof Int8Array) return function () {
                            return s.packBytes(o, a)
                        };
                        if (o instanceof Array) return function () {
                            s.packListHeader(o.length, a);
                            for (var e = 0; e < o.length; e++) s.packable(void 0 === o[e] ? null : o[e], a)()
                        };
                        if (function (e) {
                            return null != e && "function" == typeof e[Symbol.iterator]
                        }(o)) return this.packableIterable(o, a);
                        if (o instanceof d.Node) return this._nonPackableValue("It is not allowed to pass nodes in query parameters, given: ".concat(o), a);
                        if (o instanceof d.Relationship) return this._nonPackableValue("It is not allowed to pass relationships in query parameters, given: ".concat(o), a);
                        if (o instanceof d.Path) return this._nonPackableValue("It is not allowed to pass paths in query parameters, given: ".concat(o), a);
                        if (o instanceof l) {
                            for (var e = [], t = 0; t < o.fields.length; t++) e[t] = this.packable(o.fields[t], a);
                            return function () {
                                return s.packStruct(o.signature, e)
                            }
                        }
                        return "object" === (0, u.default)(o) ? function () {
                            for (var e = Object.keys(o), t = 0, r = 0; r < e.length; r++) void 0 !== o[e[r]] && t++;
                            s.packMapHeader(t, a);
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                void 0 !== o[i] && (s.packString(i), s.packable(o[i], a)())
                            }
                        } : this._nonPackableValue("Unable to pack the given value: ".concat(o), a)
                    }
                }, {
                    key: "packableIterable", value: function (t, r) {
                        try {
                            var e = Array.from(t);
                            return this.packable(e, r)
                        } catch (e) {
                            r((0, f.newError)("Cannot pack given iterable, ".concat(e.message, ": ").concat(t)))
                        }
                    }
                }, {
                    key: "packStruct", value: function (e, t, r) {
                        t = t || [], this.packStructHeader(t.length, e, r);
                        for (var n = 0; n < t.length; n++) t[n]()
                    }
                }, {
                    key: "packInteger", value: function (e) {
                        var t = e.high, r = e.low;
                        e.greaterThanOrEqual(-16) && e.lessThan(128) ? this._ch.writeInt8(r) : e.greaterThanOrEqual(-128) && e.lessThan(-16) ? (this._ch.writeUInt8(200), this._ch.writeInt8(r)) : e.greaterThanOrEqual(-32768) && e.lessThan(32768) ? (this._ch.writeUInt8(201), this._ch.writeInt16(r)) : (e.greaterThanOrEqual(-2147483648) && e.lessThan(2147483648) ? this._ch.writeUInt8(202) : (this._ch.writeUInt8(203), this._ch.writeInt32(t)), this._ch.writeInt32(r))
                    }
                }, {
                    key: "packFloat", value: function (e) {
                        this._ch.writeUInt8(193), this._ch.writeFloat64(e)
                    }
                }, {
                    key: "packString", value: function (e, t) {
                        var r = s.utf8.encode(e), n = r.length;
                        n < 16 ? (this._ch.writeUInt8(128 | n), this._ch.writeBytes(r)) : n < 256 ? (this._ch.writeUInt8(208), this._ch.writeUInt8(n), this._ch.writeBytes(r)) : n < 65536 ? (this._ch.writeUInt8(209), this._ch.writeUInt8(n / 256 >> 0), this._ch.writeUInt8(n % 256), this._ch.writeBytes(r)) : n < 4294967296 ? (this._ch.writeUInt8(210), this._ch.writeUInt8((n / 16777216 >> 0) % 256), this._ch.writeUInt8((n / 65536 >> 0) % 256), this._ch.writeUInt8((n / 256 >> 0) % 256), this._ch.writeUInt8(n % 256), this._ch.writeBytes(r)) : t((0, f.newError)("UTF-8 strings of size " + n + " are not supported"))
                    }
                }, {
                    key: "packListHeader", value: function (e, t) {
                        e < 16 ? this._ch.writeUInt8(144 | e) : e < 256 ? (this._ch.writeUInt8(212), this._ch.writeUInt8(e)) : e < 65536 ? (this._ch.writeUInt8(213), this._ch.writeUInt8((e / 256 >> 0) % 256), this._ch.writeUInt8(e % 256)) : e < 4294967296 ? (this._ch.writeUInt8(214), this._ch.writeUInt8((e / 16777216 >> 0) % 256), this._ch.writeUInt8((e / 65536 >> 0) % 256), this._ch.writeUInt8((e / 256 >> 0) % 256), this._ch.writeUInt8(e % 256)) : t((0, f.newError)("Lists of size " + e + " are not supported"))
                    }
                }, {
                    key: "packBytes", value: function (e, t) {
                        if (this._byteArraysSupported) {
                            this.packBytesHeader(e.length, t);
                            for (var r = 0; r < e.length; r++) this._ch.writeInt8(e[r])
                        } else t((0, f.newError)("Byte arrays are not supported by the database this driver is connected to"))
                    }
                }, {
                    key: "packBytesHeader", value: function (e, t) {
                        e < 256 ? (this._ch.writeUInt8(204), this._ch.writeUInt8(e)) : e < 65536 ? (this._ch.writeUInt8(205), this._ch.writeUInt8((e / 256 >> 0) % 256), this._ch.writeUInt8(e % 256)) : e < 4294967296 ? (this._ch.writeUInt8(206), this._ch.writeUInt8((e / 16777216 >> 0) % 256), this._ch.writeUInt8((e / 65536 >> 0) % 256), this._ch.writeUInt8((e / 256 >> 0) % 256), this._ch.writeUInt8(e % 256)) : t((0, f.newError)("Byte arrays of size " + e + " are not supported"))
                    }
                }, {
                    key: "packMapHeader", value: function (e, t) {
                        e < 16 ? this._ch.writeUInt8(160 | e) : e < 256 ? (this._ch.writeUInt8(216), this._ch.writeUInt8(e)) : e < 65536 ? (this._ch.writeUInt8(217), this._ch.writeUInt8(e / 256 >> 0), this._ch.writeUInt8(e % 256)) : e < 4294967296 ? (this._ch.writeUInt8(218), this._ch.writeUInt8((e / 16777216 >> 0) % 256), this._ch.writeUInt8((e / 65536 >> 0) % 256), this._ch.writeUInt8((e / 256 >> 0) % 256), this._ch.writeUInt8(e % 256)) : t((0, f.newError)("Maps of size " + e + " are not supported"))
                    }
                }, {
                    key: "packStructHeader", value: function (e, t, r) {
                        e < 16 ? (this._ch.writeUInt8(176 | e), this._ch.writeUInt8(t)) : e < 256 ? (this._ch.writeUInt8(220), this._ch.writeUInt8(e), this._ch.writeUInt8(t)) : e < 65536 ? (this._ch.writeUInt8(221), this._ch.writeUInt8(e / 256 >> 0), this._ch.writeUInt8(e % 256)) : r((0, f.newError)("Structures of size " + e + " are not supported"))
                    }
                }, {
                    key: "disableByteArrays", value: function () {
                        this._byteArraysSupported = !1
                    }
                }, {
                    key: "_nonPackableValue", value: function (e, t) {
                        return t && t((0, f.newError)(e, f.PROTOCOL_ERROR)), function () {
                        }
                    }
                }]), t
            }();
            r.Packer = c;
            var p = function () {
                function t() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    (0, o.default)(this, t), this._disableLosslessIntegers = e
                }

                return (0, a.default)(t, [{
                    key: "unpack", value: function (e) {
                        var t = e.readUInt8(), r = 240 & t, n = 15 & t;
                        if (192 === t) return null;
                        var i = this._unpackBoolean(t);
                        if (null !== i) return i;
                        var o = this._unpackNumberOrInteger(t, e);
                        if (null !== o) return this._disableLosslessIntegers && (0, h.isInt)(o) ? o.toNumberOrInfinity() : o;
                        var a = this._unpackString(t, r, n, e);
                        if (null !== a) return a;
                        var s = this._unpackList(t, r, n, e);
                        if (null !== s) return s;
                        var u = this._unpackByteArray(t, e);
                        if (null !== u) return u;
                        var l = this._unpackMap(t, r, n, e);
                        if (null !== l) return l;
                        var c = this._unpackStruct(t, r, n, e);
                        if (null !== c) return c;
                        throw(0, f.newError)("Unknown packed value with marker " + t.toString(16))
                    }
                }, {
                    key: "unpackInteger", value: function (e) {
                        var t = e.readUInt8(), r = this._unpackInteger(t, e);
                        if (null == r) throw(0, f.newError)("Unable to unpack integer value with marker " + t.toString(16));
                        return r
                    }
                }, {
                    key: "_unpackBoolean", value: function (e) {
                        return 195 === e || 194 !== e && null
                    }
                }, {
                    key: "_unpackNumberOrInteger", value: function (e, t) {
                        return 193 === e ? t.readFloat64() : this._unpackInteger(e, t)
                    }
                }, {
                    key: "_unpackInteger", value: function (e, t) {
                        if (0 <= e && e < 128) return (0, h.int)(e);
                        if (240 <= e && e < 256) return (0, h.int)(e - 256);
                        if (200 === e) return (0, h.int)(t.readInt8());
                        if (201 === e) return (0, h.int)(t.readInt16());
                        if (202 === e) {
                            var r = t.readInt32();
                            return (0, h.int)(r)
                        }
                        if (203 !== e) return null;
                        var n = t.readInt32(), i = t.readInt32();
                        return new h.default(i, n)
                    }
                }, {
                    key: "_unpackString", value: function (e, t, r, n) {
                        return 128 === t ? s.utf8.decode(n, r) : 208 === e ? s.utf8.decode(n, n.readUInt8()) : 209 === e ? s.utf8.decode(n, n.readUInt16()) : 210 === e ? s.utf8.decode(n, n.readUInt32()) : null
                    }
                }, {
                    key: "_unpackList", value: function (e, t, r, n) {
                        return 144 === t ? this._unpackListWithSize(r, n) : 212 === e ? this._unpackListWithSize(n.readUInt8(), n) : 213 === e ? this._unpackListWithSize(n.readUInt16(), n) : 214 === e ? this._unpackListWithSize(n.readUInt32(), n) : null
                    }
                }, {
                    key: "_unpackListWithSize", value: function (e, t) {
                        for (var r = [], n = 0; n < e; n++) r.push(this.unpack(t));
                        return r
                    }
                }, {
                    key: "_unpackByteArray", value: function (e, t) {
                        return 204 === e ? this._unpackByteArrayWithSize(t.readUInt8(), t) : 205 === e ? this._unpackByteArrayWithSize(t.readUInt16(), t) : 206 === e ? this._unpackByteArrayWithSize(t.readUInt32(), t) : null
                    }
                }, {
                    key: "_unpackByteArrayWithSize", value: function (e, t) {
                        for (var r = new Int8Array(e), n = 0; n < e; n++) r[n] = t.readInt8();
                        return r
                    }
                }, {
                    key: "_unpackMap", value: function (e, t, r, n) {
                        return 160 === t ? this._unpackMapWithSize(r, n) : 216 === e ? this._unpackMapWithSize(n.readUInt8(), n) : 217 === e ? this._unpackMapWithSize(n.readUInt16(), n) : 218 === e ? this._unpackMapWithSize(n.readUInt32(), n) : null
                    }
                }, {
                    key: "_unpackMapWithSize", value: function (e, t) {
                        for (var r = {}, n = 0; n < e; n++) {
                            r[this.unpack(t)] = this.unpack(t)
                        }
                        return r
                    }
                }, {
                    key: "_unpackStruct", value: function (e, t, r, n) {
                        return 176 === t ? this._unpackStructWithSize(r, n) : 220 === e ? this._unpackStructWithSize(n.readUInt8(), n) : 221 === e ? this._unpackStructWithSize(n.readUInt16(), n) : null
                    }
                }, {
                    key: "_unpackStructWithSize", value: function (e, t) {
                        var r = t.readUInt8();
                        return 78 === r ? this._unpackNode(e, t) : 82 === r ? this._unpackRelationship(e, t) : 114 === r ? this._unpackUnboundRelationship(e, t) : 80 === r ? this._unpackPath(e, t) : this._unpackUnknownStruct(r, e, t)
                    }
                }, {
                    key: "_unpackNode", value: function (e, t) {
                        return this._verifyStructSize("Node", 3, e), new d.Node(this.unpack(t), this.unpack(t), this.unpack(t))
                    }
                }, {
                    key: "_unpackRelationship", value: function (e, t) {
                        return this._verifyStructSize("Relationship", 5, e), new d.Relationship(this.unpack(t), this.unpack(t), this.unpack(t), this.unpack(t), this.unpack(t))
                    }
                }, {
                    key: "_unpackUnboundRelationship", value: function (e, t) {
                        return this._verifyStructSize("UnboundRelationship", 3, e), new d.UnboundRelationship(this.unpack(t), this.unpack(t), this.unpack(t))
                    }
                }, {
                    key: "_unpackPath", value: function (e, t) {
                        this._verifyStructSize("Path", 3, e);
                        for (var r = this.unpack(t), n = this.unpack(t), i = this.unpack(t), o = [], a = r[0], s = 0; s < i.length; s += 2) {
                            var u = r[i[s + 1]], l = i[s], c = void 0;
                            0 < l ? (c = n[l - 1]) instanceof d.UnboundRelationship && (n[l - 1] = c = c.bind(a.identity, u.identity)) : (c = n[-l - 1]) instanceof d.UnboundRelationship && (n[-l - 1] = c = c.bind(u.identity, a.identity)), o.push(new d.PathSegment(a, c, u)), a = u
                        }
                        return new d.Path(r[0], r[r.length - 1], o)
                    }
                }, {
                    key: "_unpackUnknownStruct", value: function (e, t, r) {
                        for (var n = new l(e, []), i = 0; i < t; i++) n.fields.push(this.unpack(r));
                        return n
                    }
                }, {
                    key: "_verifyStructSize", value: function (e, t, r) {
                        if (t !== r) throw(0, f.newError)("Wrong struct size for ".concat(e, ", expected ").concat(t, " but was ").concat(r), f.PROTOCOL_ERROR)
                    }
                }]), t
            }();
            r.Unpacker = p
        }, {
            "../graph-types": 30,
            "../integer": 32,
            "./../error": 29,
            "./browser": 41,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12,
            "@babel/runtime/helpers/typeof": 23
        }],
        61: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.Unpacker = r.Packer = void 0;
            var o = i(e("@babel/runtime/helpers/classCallCheck")), a = i(e("@babel/runtime/helpers/createClass")),
                s = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = i(e("@babel/runtime/helpers/getPrototypeOf")), l = i(e("@babel/runtime/helpers/get")),
                c = i(e("@babel/runtime/helpers/inherits")), h = n(e("./packstream-v1")), f = e("../spatial-types"),
                d = e("../temporal-types"), p = e("../integer"), b = e("../internal/temporal-util"), v = 88, m = 89,
                _ = 70, y = 102, g = function (e) {
                    function n() {
                        return (0, o.default)(this, n), (0, s.default)(this, (0, u.default)(n).apply(this, arguments))
                    }

                    return (0, c.default)(n, e), (0, a.default)(n, [{
                        key: "disableByteArrays", value: function () {
                            throw new Error("Bolt V2 should always support byte arrays")
                        }
                    }, {
                        key: "packable", value: function (e, t) {
                            var r = this;
                            return (0, f.isPoint)(e) ? function () {
                                return function (e, t, r) {
                                    null === e.z || void 0 === e.z ? function (e, t, r) {
                                        var n = [t.packable((0, p.int)(e.srid), r), t.packable(e.x, r), t.packable(e.y, r)];
                                        t.packStruct(v, n, r)
                                    }(e, t, r) : function (e, t, r) {
                                        var n = [t.packable((0, p.int)(e.srid), r), t.packable(e.x, r), t.packable(e.y, r), t.packable(e.z, r)];
                                        t.packStruct(m, n, r)
                                    }(e, t, r)
                                }(e, r, t)
                            } : (0, d.isDuration)(e) ? function () {
                                return function (e, t, r) {
                                    var n = (0, p.int)(e.months), i = (0, p.int)(e.days), o = (0, p.int)(e.seconds),
                                        a = (0, p.int)(e.nanoseconds),
                                        s = [t.packable(n, r), t.packable(i, r), t.packable(o, r), t.packable(a, r)];
                                    t.packStruct(69, s, r)
                                }(e, r, t)
                            } : (0, d.isLocalTime)(e) ? function () {
                                return function (e, t, r) {
                                    var n = (0, b.localTimeToNanoOfDay)(e.hour, e.minute, e.second, e.nanosecond),
                                        i = [t.packable(n, r)];
                                    t.packStruct(116, i, r)
                                }(e, r, t)
                            } : (0, d.isTime)(e) ? function () {
                                return function (e, t, r) {
                                    var n = (0, b.localTimeToNanoOfDay)(e.hour, e.minute, e.second, e.nanosecond),
                                        i = (0, p.int)(e.timeZoneOffsetSeconds), o = [t.packable(n, r), t.packable(i, r)];
                                    t.packStruct(84, o, r)
                                }(e, r, t)
                            } : (0, d.isDate)(e) ? function () {
                                return function (e, t, r) {
                                    var n = (0, b.dateToEpochDay)(e.year, e.month, e.day), i = [t.packable(n, r)];
                                    t.packStruct(68, i, r)
                                }(e, r, t)
                            } : (0, d.isLocalDateTime)(e) ? function () {
                                return function (e, t, r) {
                                    var n = (0, b.localDateTimeToEpochSecond)(e.year, e.month, e.day, e.hour, e.minute, e.second, e.nanosecond),
                                        i = (0, p.int)(e.nanosecond), o = [t.packable(n, r), t.packable(i, r)];
                                    t.packStruct(100, o, r)
                                }(e, r, t)
                            } : (0, d.isDateTime)(e) ? function () {
                                return function (e, t, r) {
                                    e.timeZoneId ? function (e, t, r) {
                                        var n = (0, b.localDateTimeToEpochSecond)(e.year, e.month, e.day, e.hour, e.minute, e.second, e.nanosecond),
                                            i = (0, p.int)(e.nanosecond), o = e.timeZoneId,
                                            a = [t.packable(n, r), t.packable(i, r), t.packable(o, r)];
                                        t.packStruct(y, a, r)
                                    }(e, t, r) : function (e, t, r) {
                                        var n = (0, b.localDateTimeToEpochSecond)(e.year, e.month, e.day, e.hour, e.minute, e.second, e.nanosecond),
                                            i = (0, p.int)(e.nanosecond), o = (0, p.int)(e.timeZoneOffsetSeconds),
                                            a = [t.packable(n, r), t.packable(i, r), t.packable(o, r)];
                                        t.packStruct(_, a, r)
                                    }(e, t, r)
                                }(e, r, t)
                            } : (0, l.default)((0, u.default)(n.prototype), "packable", this).call(this, e, t)
                        }
                    }]), n
                }(h.Packer);
            r.Packer = g;
            var k = function (e) {
                function n() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return (0, o.default)(this, n), (0, s.default)(this, (0, u.default)(n).call(this, e))
                }

                return (0, c.default)(n, e), (0, a.default)(n, [{
                    key: "_unpackUnknownStruct", value: function (e, t, r) {
                        return e === v ? function (e, t, r) {
                            return e._verifyStructSize("Point2D", 3, t), new f.Point(e.unpack(r), e.unpack(r), e.unpack(r), void 0)
                        }(this, t, r) : e === m ? function (e, t, r) {
                            return e._verifyStructSize("Point3D", 4, t), new f.Point(e.unpack(r), e.unpack(r), e.unpack(r), e.unpack(r))
                        }(this, t, r) : 69 === e ? function (e, t, r) {
                            e._verifyStructSize("Duration", 4, t);
                            var n = e.unpack(r), i = e.unpack(r), o = e.unpack(r), a = e.unpack(r);
                            return new d.Duration(n, i, o, a)
                        }(this, t, r) : 116 === e ? function (e, t, r, n) {
                            e._verifyStructSize("LocalTime", 1, t);
                            var i = e.unpackInteger(r);
                            return C((0, b.nanoOfDayToLocalTime)(i), n)
                        }(this, t, r, this._disableLosslessIntegers) : 84 === e ? function (e, t, r, n) {
                            e._verifyStructSize("Time", 2, t);
                            var i = e.unpackInteger(r), o = e.unpackInteger(r), a = (0, b.nanoOfDayToLocalTime)(i);
                            return C(new d.Time(a.hour, a.minute, a.second, a.nanosecond, o), n)
                        }(this, t, r, this._disableLosslessIntegers) : 68 === e ? function (e, t, r, n) {
                            e._verifyStructSize("Date", 1, t);
                            var i = e.unpackInteger(r);
                            return C((0, b.epochDayToDate)(i), n)
                        }(this, t, r, this._disableLosslessIntegers) : 100 === e ? function (e, t, r, n) {
                            e._verifyStructSize("LocalDateTime", 2, t);
                            var i = e.unpackInteger(r), o = e.unpackInteger(r);
                            return C((0, b.epochSecondAndNanoToLocalDateTime)(i, o), n)
                        }(this, t, r, this._disableLosslessIntegers) : e === _ ? function (e, t, r, n) {
                            e._verifyStructSize("DateTimeWithZoneOffset", 3, t);
                            var i = e.unpackInteger(r), o = e.unpackInteger(r), a = e.unpackInteger(r),
                                s = (0, b.epochSecondAndNanoToLocalDateTime)(i, o);
                            return C(new d.DateTime(s.year, s.month, s.day, s.hour, s.minute, s.second, s.nanosecond, a, null), n)
                        }(this, t, r, this._disableLosslessIntegers) : e === y ? function (e, t, r, n) {
                            e._verifyStructSize("DateTimeWithZoneId", 3, t);
                            var i = e.unpackInteger(r), o = e.unpackInteger(r), a = e.unpack(r),
                                s = (0, b.epochSecondAndNanoToLocalDateTime)(i, o);
                            return C(new d.DateTime(s.year, s.month, s.day, s.hour, s.minute, s.second, s.nanosecond, null, a), n)
                        }(this, t, r, this._disableLosslessIntegers) : (0, l.default)((0, u.default)(n.prototype), "_unpackUnknownStruct", this).call(this, e, t, r, this._disableLosslessIntegers)
                    }
                }]), n
            }(h.Unpacker);

            function C(e, t) {
                if (!t) return e;
                var r = Object.create(Object.getPrototypeOf(e));
                for (var n in e) if (e.hasOwnProperty(n)) {
                    var i = e[n];
                    r[n] = (0, p.isInt)(i) ? i.toNumberOrInfinity() : i
                }
                return Object.freeze(r), r
            }

            r.Unpacker = k
        }, {
            "../integer": 32,
            "../internal/temporal-util": 76,
            "../spatial-types": 86,
            "../temporal-types": 87,
            "./packstream-v1": 60,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/get": 8,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        62: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.DEFAULT_ACQUISITION_TIMEOUT = r.DEFAULT_MAX_SIZE = r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass"));
            r.DEFAULT_MAX_SIZE = 100;
            r.DEFAULT_ACQUISITION_TIMEOUT = 6e4;
            var a = function () {
                function r(e, t) {
                    (0, i.default)(this, r), this.maxSize = s(e, 100), this.acquisitionTimeout = s(t, 6e4)
                }

                return (0, o.default)(r, null, [{
                    key: "defaultConfig", value: function () {
                        return new r(100, 6e4)
                    }
                }, {
                    key: "fromDriverConfig", value: function (e) {
                        var t = u(e.connectionPoolSize);
                        return new r(u(e.maxConnectionPoolSize) ? e.maxConnectionPoolSize : t ? (console.warn('WARNING: neo4j-driver setting "connectionPoolSize" is deprecated, please use "maxConnectionPoolSize" instead'), e.connectionPoolSize) : 100, u(e.connectionAcquisitionTimeout) ? e.connectionAcquisitionTimeout : 6e4)
                    }
                }]), r
            }();

            function s(e, t) {
                return 0 === e || e ? e : t
            }

            function u(e) {
                return 0 === e || e
            }

            r.default = a
        }, {
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        63: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var v = n(e("@babel/runtime/helpers/classCallCheck")), i = n(e("@babel/runtime/helpers/createClass")),
                m = n(e("./pool-config")), u = e("../error"), _ = n(e("./logger")), o = function () {
                    function b() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.create,
                            r = void 0 === t ? function (e, t) {
                            } : t, n = e.destroy, i = void 0 === n ? function (e) {
                                return !0
                            } : n, o = e.validate, a = void 0 === o ? function (e) {
                                return !0
                            } : o, s = e.installIdleObserver, u = void 0 === s ? function (e, t) {
                            } : s, l = e.removeIdleObserver, c = void 0 === l ? function (e) {
                            } : l, h = e.config, f = void 0 === h ? m.default.defaultConfig() : h, d = e.log,
                            p = void 0 === d ? _.default.noOp() : d;
                        (0, v.default)(this, b), this._create = r, this._destroy = i, this._validate = a, this._installIdleObserver = u, this._removeIdleObserver = c, this._maxSize = f.maxSize, this._acquisitionTimeout = f.acquisitionTimeout, this._pools = {}, this._acquireRequests = {}, this._activeResourceCounts = {}, this._release = this._release.bind(this), this._log = p
                    }

                    return (0, i.default)(b, [{
                        key: "acquire", value: function (a) {
                            var s = this;
                            return this._acquire(a).then(function (e) {
                                var i = a.asKey();
                                if (e) {
                                    if (!(s._maxSize && s.activeResourceCount(a) >= s._maxSize)) return l(i, s._activeResourceCounts), s._log.isDebugEnabled() && s._log.debug("".concat(e, " acquired from the pool ").concat(i)), e;
                                    s._destroy(e)
                                }
                                var o = s._acquireRequests;
                                return o[i] || (o[i] = []), new Promise(function (e, t) {
                                    var n, r = setTimeout(function () {
                                        var e = o[i];
                                        if (e && (o[i] = e.filter(function (e) {
                                            return e !== n
                                        })), n.isCompleted()) ; else {
                                            var t = s.activeResourceCount(a), r = s.has(a) ? s._pools[i].length : 0;
                                            n.reject((0, u.newError)("Connection acquisition timed out in ".concat(s._acquisitionTimeout, " ms. Poos status: Active conn count = ").concat(t, ", Idle conn count = ").concat(r, ".")))
                                        }
                                    }, s._acquisitionTimeout);
                                    n = new c(i, e, t, r, s._log), o[i].push(n)
                                })
                            })
                        }
                    }, {
                        key: "purge", value: function (e) {
                            this._purgeKey(e.asKey())
                        }
                    }, {
                        key: "purgeAll", value: function () {
                            var t = this;
                            Object.keys(this._pools).forEach(function (e) {
                                return t._purgeKey(e)
                            })
                        }
                    }, {
                        key: "keepAll", value: function (e) {
                            var t = this, r = e.map(function (e) {
                                return e.asKey()
                            });
                            Object.keys(this._pools).filter(function (e) {
                                return -1 === r.indexOf(e)
                            }).forEach(function (e) {
                                return t._purgeKey(e)
                            })
                        }
                    }, {
                        key: "has", value: function (e) {
                            return e.asKey() in this._pools
                        }
                    }, {
                        key: "activeResourceCount", value: function (e) {
                            return this._activeResourceCounts[e.asKey()] || 0
                        }
                    }, {
                        key: "_acquire", value: function (e) {
                            var t = e.asKey(), r = this._pools[t];
                            for (r || (r = [], this._pools[t] = r); r.length;) {
                                var n = r.pop();
                                if (this._validate(n)) return this._removeIdleObserver && this._removeIdleObserver(n), Promise.resolve(n);
                                this._destroy(n)
                            }
                            return this._maxSize && this.activeResourceCount(e) >= this._maxSize ? Promise.resolve(null) : this._create(e, this._release)
                        }
                    }, {
                        key: "_release", value: function (e, r) {
                            var n = this, i = e.asKey(), t = this._pools[i];
                            t ? this._validate(r) ? (this._log.isDebugEnabled() && this._log.debug("".concat(r, " released to the pool ").concat(i)), this._installIdleObserver && this._installIdleObserver(r, {
                                onError: function (e) {
                                    n._log.debug("Idle connection ".concat(r, " destroyed because of error: ").concat(e));
                                    var t = n._pools[i];
                                    t && (n._pools[i] = t.filter(function (e) {
                                        return e !== r
                                    })), n._destroy(r)
                                }
                            }), t.push(r)) : (this._log.isDebugEnabled() && this._log.debug("".concat(r, " destroyed and can't be released to the pool ").concat(i, " because it is not functional")), this._destroy(r)) : (this._log.isDebugEnabled() && this._log.debug("".concat(r, " destroyed and can't be released to the pool ").concat(i, " because pool has been purged")), this._destroy(r)), function (e, t) {
                                var r = (t[e] || 0) - 1;
                                0 < r ? t[e] = r : delete t[e]
                            }(i, this._activeResourceCounts), this._processPendingAcquireRequests(e)
                        }
                    }, {
                        key: "_purgeKey", value: function (e) {
                            for (var t = this._pools[e] || []; t.length;) {
                                var r = t.pop();
                                this._removeIdleObserver && this._removeIdleObserver(r), this._destroy(r)
                            }
                            delete this._pools[e]
                        }
                    }, {
                        key: "_processPendingAcquireRequests", value: function (t) {
                            var r = this, n = t.asKey(), e = this._acquireRequests[n];
                            if (e) {
                                var i = e.shift();
                                i ? this._acquire(t).catch(function (e) {
                                    return i.reject(e), null
                                }).then(function (e) {
                                    e && (i.isCompleted() ? r._release(t, e) : (l(n, r._activeResourceCounts), i.resolve(e)))
                                }) : delete this._acquireRequests[n]
                            }
                        }
                    }]), b
                }();

            function l(e, t) {
                var r = t[e] || 0;
                t[e] = r + 1
            }

            var c = function () {
                function o(e, t, r, n, i) {
                    (0, v.default)(this, o), this._key = e, this._resolve = t, this._reject = r, this._timeoutId = n, this._log = i, this._completed = !1
                }

                return (0, i.default)(o, [{
                    key: "isCompleted", value: function () {
                        return this._completed
                    }
                }, {
                    key: "resolve", value: function (e) {
                        this._completed || (this._completed = !0, clearTimeout(this._timeoutId), this._log.isDebugEnabled() && this._log.debug("".concat(e, " acquired from the pool ").concat(this._key)), this._resolve(e))
                    }
                }, {
                    key: "reject", value: function (e) {
                        this._completed || (this._completed = !0, clearTimeout(this._timeoutId), this._reject(e))
                    }
                }]), o
            }(), a = o;
            r.default = a
        }, {
            "../error": 29,
            "./logger": 59,
            "./pool-config": 62,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        64: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var a = n(e("@babel/runtime/helpers/classCallCheck")), i = n(e("@babel/runtime/helpers/createClass")),
                s = e("./browser"), u = e("../error"), l = n(e("./bolt-protocol-v1")), c = n(e("./bolt-protocol-v2")),
                h = n(e("./bolt-protocol-v3")), o = function () {
                    function o(e, t, r, n, i) {
                        (0, a.default)(this, o), this._connection = e, this._channel = t, this._chunker = r, this._disableLosslessIntegers = n, this._log = i
                    }

                    return (0, i.default)(o, [{
                        key: "writeHandshakeRequest", value: function () {
                            this._channel.write(function () {
                                var e = (0, s.alloc)(20);
                                return e.writeInt32(1616949271), e.writeInt32(3), e.writeInt32(2), e.writeInt32(1), e.writeInt32(0), e.reset(), e
                            }())
                        }
                    }, {
                        key: "createNegotiatedProtocol", value: function (e) {
                            var t = e.readInt32();
                            return this._log.isDebugEnabled() && this._log.debug("".concat(this._connection, " negotiated protocol version ").concat(t)), this._createProtocolWithVersion(t)
                        }
                    }, {
                        key: "_createProtocolWithVersion", value: function (e) {
                            switch (e) {
                                case 1:
                                    return new l.default(this._connection, this._chunker, this._disableLosslessIntegers);
                                case 2:
                                    return new c.default(this._connection, this._chunker, this._disableLosslessIntegers);
                                case 3:
                                    return new h.default(this._connection, this._chunker, this._disableLosslessIntegers);
                                case 1213486160:
                                    throw(0, u.newError)("Server responded HTTP. Make sure you are not trying to connect to the http endpoint (HTTP defaults to port 7474 whereas BOLT defaults to port 7687)");
                                default:
                                    throw(0, u.newError)("Unknown Bolt protocol version: " + e)
                            }
                        }
                    }]), o
                }();
            r.default = o
        }, {
            "../error": 29,
            "./bolt-protocol-v1": 33,
            "./bolt-protocol-v2": 34,
            "./bolt-protocol-v3": 35,
            "./browser": 41,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        65: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                c = n(e("./routing-table")), h = e("../error"), a = function () {
                    function l(e) {
                        (0, i.default)(this, l), this._routingUtil = e
                    }

                    return (0, o.default)(l, [{
                        key: "lookupRoutingTableOnRouter", value: function (e, s) {
                            var u = this;
                            return this._routingUtil.callRoutingProcedure(e, s).then(function (e) {
                                if (null === e) return null;
                                if (1 !== e.length) throw(0, h.newError)('Illegal response from router "' + s + '". Received ' + e.length + " records but expected only one.\n" + JSON.stringify(e), h.PROTOCOL_ERROR);
                                var t = e[0], r = u._routingUtil.parseTtl(t, s), n = u._routingUtil.parseServers(t, s),
                                    i = n.routers, o = n.readers, a = n.writers;
                                return l._assertNonEmpty(i, "routers", s), l._assertNonEmpty(o, "readers", s), new c.default(i, o, a, r)
                            })
                        }
                    }], [{
                        key: "_assertNonEmpty", value: function (e, t, r) {
                            if (0 === e.length) throw(0, h.newError)("Received no " + t + " from router " + r, h.PROTOCOL_ERROR)
                        }
                    }]), l
                }();
            r.default = a
        }, {
            "../error": 29,
            "./routing-table": 71,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        66: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = e("./constants"), s = function () {
                    function a(e, t, r) {
                        (0, i.default)(this, a), this.signature = e, this.fields = t, this.toString = r
                    }

                    return (0, o.default)(a, null, [{
                        key: "init", value: function (e, t) {
                            return new a(1, [e, t], function () {
                                return "INIT ".concat(e, " {...}")
                            })
                        }
                    }, {
                        key: "run", value: function (e, t) {
                            return new a(16, [e, t], function () {
                                return "RUN ".concat(e, " ").concat(JSON.stringify(t))
                            })
                        }
                    }, {
                        key: "pullAll", value: function () {
                            return l
                        }
                    }, {
                        key: "reset", value: function () {
                            return c
                        }
                    }, {
                        key: "hello", value: function (e, t) {
                            return new a(1, [Object.assign({user_agent: e}, t)], function () {
                                return "HELLO {user_agent: '".concat(e, "', ...}")
                            })
                        }
                    }, {
                        key: "begin", value: function (e, t, r) {
                            var n = u(e, t, r);
                            return new a(17, [n], function () {
                                return "BEGIN ".concat(JSON.stringify(n))
                            })
                        }
                    }, {
                        key: "commit", value: function () {
                            return h
                        }
                    }, {
                        key: "rollback", value: function () {
                            return f
                        }
                    }, {
                        key: "runWithMetadata", value: function (e, t, r, n, i) {
                            var o = u(r, n, i);
                            return new a(16, [e, t, o], function () {
                                return "RUN ".concat(e, " ").concat(JSON.stringify(t), " ").concat(JSON.stringify(o))
                            })
                        }
                    }, {
                        key: "goodbye", value: function () {
                            return d
                        }
                    }]), a
                }();

            function u(e, t, r) {
                var n = {};
                return e.isEmpty() || (n.bookmarks = e.values()), t.timeout && (n.tx_timeout = t.timeout), t.metadata && (n.tx_metadata = t.metadata), r === a.ACCESS_MODE_READ && (n.mode = "r"), n
            }

            var l = new (r.default = s)(63, [], function () {
                return "PULL_ALL"
            }), c = new s(15, [], function () {
                return "RESET"
            }), h = new s(18, [], function () {
                return "COMMIT"
            }), f = new s(19, [], function () {
                return "ROLLBACK"
            }), d = new s(2, [], function () {
                return "GOODBYE"
            })
        }, {
            "./constants": 51,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        67: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = function () {
                    function e() {
                        (0, i.default)(this, e)
                    }

                    return (0, o.default)(e, [{
                        key: "resolve", value: function () {
                            throw new Error("Abstract function")
                        }
                    }, {
                        key: "_resolveToItself", value: function (e) {
                            return Promise.resolve([e])
                        }
                    }]), e
                }();
            r.default = a
        }, {
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        68: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = n(e("../server-address"));

            function s(e) {
                return Promise.resolve([e])
            }

            var u = function () {
                function t(e) {
                    (0, i.default)(this, t), this._resolverFunction = e || s
                }

                return (0, o.default)(t, [{
                    key: "resolve", value: function (t) {
                        var r = this;
                        return new Promise(function (e) {
                            return e(r._resolverFunction(t.asHostPort()))
                        }).then(function (e) {
                            if (!Array.isArray(e)) throw new TypeError("Configured resolver function should either return an array of addresses or a Promise resolved with an array of addresses." + "Each address is '<host>:<port>'. Got: ".concat(e));
                            return e.map(function (e) {
                                return a.default.fromUrl(e)
                            })
                        })
                    }
                }]), t
            }();
            r.default = u
        }, {
            "../server-address": 73,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        69: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = function () {
                    function t(e) {
                        (0, i.default)(this, t), this._offset = e || 0
                    }

                    return (0, o.default)(t, [{
                        key: "next", value: function (e) {
                            if (0 === e) return -1;
                            var t = this._offset;
                            return this._offset += 1, this._offset === Number.MAX_SAFE_INTEGER && (this._offset = 0), t % e
                        }
                    }]), t
                }();
            r.default = a
        }, {
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        70: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = r.ROUND_ROBIN_STRATEGY_NAME = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = n(e("@babel/runtime/helpers/getPrototypeOf")), u = n(e("@babel/runtime/helpers/inherits")),
                l = n(e("./round-robin-array-index")), c = n(e("./load-balancing-strategy"));
            r.ROUND_ROBIN_STRATEGY_NAME = "round_robin";
            var h = function (e) {
                function t() {
                    var e;
                    return (0, i.default)(this, t), (e = (0, a.default)(this, (0, s.default)(t).call(this)))._readersIndex = new l.default, e._writersIndex = new l.default, e
                }

                return (0, u.default)(t, e), (0, o.default)(t, [{
                    key: "selectReader", value: function (e) {
                        return this._select(e, this._readersIndex)
                    }
                }, {
                    key: "selectWriter", value: function (e) {
                        return this._select(e, this._writersIndex)
                    }
                }, {
                    key: "_select", value: function (e, t) {
                        var r = e.length;
                        return 0 === r ? null : e[t.next(r)]
                    }
                }]), t
            }(c.default);
            r.default = h
        }, {
            "./load-balancing-strategy": 58,
            "./round-robin-array-index": 69,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        71: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = n(e("@babel/runtime/helpers/toConsumableArray")), a = n(e("@babel/runtime/helpers/classCallCheck")),
                s = n(e("@babel/runtime/helpers/createClass")), u = e("../integer"), l = e("../driver"),
                i = function () {
                    function i(e, t, r, n) {
                        (0, a.default)(this, i), this.routers = e || [], this.readers = t || [], this.writers = r || [], this.expirationTime = n || (0, u.int)(0)
                    }

                    return (0, s.default)(i, [{
                        key: "forget", value: function (e) {
                            this.readers = c(this.readers, e), this.writers = c(this.writers, e)
                        }
                    }, {
                        key: "forgetRouter", value: function (e) {
                            this.routers = c(this.routers, e)
                        }
                    }, {
                        key: "forgetWriter", value: function (e) {
                            this.writers = c(this.writers, e)
                        }
                    }, {
                        key: "isStaleFor", value: function (e) {
                            return this.expirationTime.lessThan(Date.now()) || this.routers.length < 1 || e === l.READ && 0 === this.readers.length || e === l.WRITE && 0 === this.writers.length
                        }
                    }, {
                        key: "allServers", value: function () {
                            return [].concat((0, o.default)(this.routers), (0, o.default)(this.readers), (0, o.default)(this.writers))
                        }
                    }, {
                        key: "toString", value: function () {
                            return "RoutingTable[" + "expirationTime=".concat(this.expirationTime, ", ") + "currentTime=".concat(Date.now(), ", ") + "routers=[".concat(this.routers, "], ") + "readers=[".concat(this.readers, "], ") + "writers=[".concat(this.writers, "]]")
                        }
                    }]), i
                }();

            function c(e, t) {
                return e.filter(function (e) {
                    return e.asKey() !== t.asKey()
                })
            }

            r.default = i
        }, {
            "../driver": 28,
            "../integer": 32,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/toConsumableArray": 22
        }],
        72: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = i(e("@babel/runtime/helpers/classCallCheck")), a = i(e("@babel/runtime/helpers/createClass")),
                s = e("../error"), u = n(e("../integer")), l = e("./server-version"), c = i(e("./bookmark")),
                h = i(e("./tx-config")), f = e("./constants"), d = i(e("./server-address")), p = function () {
                    function t(e) {
                        (0, o.default)(this, t), this._routingContext = e
                    }

                    return (0, a.default)(t, [{
                        key: "callRoutingProcedure", value: function (t, r) {
                            return this._callAvailableRoutingProcedure(t).then(function (e) {
                                return t.close(), e.records
                            }).catch(function (e) {
                                if ("Neo.ClientError.Procedure.ProcedureNotFound" === e.code) throw(0, s.newError)("Server at ".concat(r.asHostPort(), " can't perform routing. Make sure you are connecting to a causal cluster"), s.SERVICE_UNAVAILABLE);
                                return null
                            })
                        }
                    }, {
                        key: "parseTtl", value: function (t, r) {
                            try {
                                var e = (0, u.int)(Date.now()), n = (0, u.int)(t.get("ttl")).multiply(1e3).add(e);
                                return n.lessThan(e) ? u.default.MAX_VALUE : n
                            } catch (e) {
                                throw(0, s.newError)("Unable to parse TTL entry from router ".concat(r, " from record:\n").concat(JSON.stringify(t), "\nError message: ").concat(e.message), s.PROTOCOL_ERROR)
                            }
                        }
                    }, {
                        key: "parseServers", value: function (t, r) {
                            try {
                                var e = t.get("servers"), n = [], i = [], o = [];
                                return e.forEach(function (e) {
                                    var t = e.role, r = e.addresses;
                                    if ("ROUTE" === t) n = b(r).map(function (e) {
                                        return d.default.fromUrl(e)
                                    }); else if ("WRITE" === t) o = b(r).map(function (e) {
                                        return d.default.fromUrl(e)
                                    }); else {
                                        if ("READ" !== t) throw(0, s.newError)('Unknown server role "' + t + '"', s.PROTOCOL_ERROR);
                                        i = b(r).map(function (e) {
                                            return d.default.fromUrl(e)
                                        })
                                    }
                                }), {routers: n, readers: i, writers: o}
                            } catch (e) {
                                throw(0, s.newError)("Unable to parse servers entry from router ".concat(r, " from record:\n").concat(JSON.stringify(t), "\nError message: ").concat(e.message), s.PROTOCOL_ERROR)
                            }
                        }
                    }, {
                        key: "_callAvailableRoutingProcedure", value: function (e) {
                            var o = this;
                            return e._run(null, null, function (e, t) {
                                var r, n, i = e.server.version;
                                n = 0 <= l.ServerVersion.fromString(i).compareTo(l.VERSION_3_2_0) ? (r = "CALL dbms.cluster.routing.getRoutingTable($context)", {context: o._routingContext}) : (r = "CALL dbms.cluster.routing.getServers", {}), e.protocol().run(r, n, c.default.empty(), h.default.empty(), f.ACCESS_MODE_WRITE, t)
                            })
                        }
                    }]), t
                }();

            function b(e) {
                if (!Array.isArray(e)) throw new TypeError("Array expected but got: " + e);
                return Array.from(e)
            }

            r.default = p
        }, {
            "../error": 29,
            "../integer": 32,
            "./bookmark": 36,
            "./constants": 51,
            "./server-address": 73,
            "./server-version": 74,
            "./tx-config": 78,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12
        }],
        73: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = n(e("@babel/runtime/helpers/classCallCheck")), a = n(e("@babel/runtime/helpers/createClass")),
                s = e("./util"), u = n(e("./url-util")), i = function () {
                    function i(e, t, r, n) {
                        (0, o.default)(this, i), this._host = (0, s.assertString)(e, "host"), this._resolved = t ? (0, s.assertString)(t, "resolved") : null, this._port = (0, s.assertNumber)(r, "port"), this._hostPort = n, this._stringValue = t ? "".concat(n, "(").concat(t, ")") : "".concat(n)
                    }

                    return (0, a.default)(i, [{
                        key: "host", value: function () {
                            return this._host
                        }
                    }, {
                        key: "resolvedHost", value: function () {
                            return this._resolved ? this._resolved : this._host
                        }
                    }, {
                        key: "port", value: function () {
                            return this._port
                        }
                    }, {
                        key: "resolveWith", value: function (e) {
                            return new i(this._host, e, this._port, this._hostPort)
                        }
                    }, {
                        key: "asHostPort", value: function () {
                            return this._hostPort
                        }
                    }, {
                        key: "asKey", value: function () {
                            return this._hostPort
                        }
                    }, {
                        key: "toString", value: function () {
                            return this._stringValue
                        }
                    }], [{
                        key: "fromUrl", value: function (e) {
                            var t = u.default.parseDatabaseUrl(e);
                            return new i(t.host, null, t.port, t.hostAndPort)
                        }
                    }]), i
                }();
            r.default = i
        }, {
            "./url-util": 79,
            "./util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        74: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.VERSION_IN_DEV = r.VERSION_4_0_0 = r.VERSION_3_5_0 = r.VERSION_3_4_0 = r.VERSION_3_2_0 = r.VERSION_3_1_0 = r.ServerVersion = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = e("./util"),
                s = new RegExp("^(Neo4j/)?(\\d+)\\.(\\d+)(?:\\.)?(\\d*)(\\.|-|\\+)?([0-9A-Za-z-.]*)?$"),
                u = function () {
                    function n(e, t, r) {
                        (0, i.default)(this, n), this.major = e, this.minor = t, this.patch = r
                    }

                    return (0, o.default)(n, [{
                        key: "compareTo", value: function (e) {
                            var t = c(this.major, e.major);
                            return 0 === t && 0 === (t = c(this.minor, e.minor)) && (t = c(this.patch, e.patch)), t
                        }
                    }], [{
                        key: "fromDriver", value: function (e) {
                            var t = e.session();
                            return t.run("RETURN 1").then(function (e) {
                                return t.close(), n.fromString(e.summary.server.version)
                            })
                        }
                    }, {
                        key: "fromString", value: function (e) {
                            if (!e) return new n(3, 0, 0);
                            if ((0, a.assertString)(e, "Neo4j version string"), e.toLowerCase() === "Neo4j/dev".toLowerCase()) return m;
                            var t = e.match(s);
                            if (!t) throw new Error("Unparsable Neo4j version: ".concat(e));
                            return new n(l(t[2]), l(t[3]), l(t[4] || 0))
                        }
                    }]), n
                }();

            function l(e, t) {
                var r = parseInt(e, 10);
                if (!r && 0 !== r) throw new Error("Unparsable number ".concat(t, ": '").concat(e, "'"));
                return r
            }

            function c(e, t) {
                return e < t ? -1 : e === t ? 0 : 1
            }

            var h = new (r.ServerVersion = u)(3, 1, 0);
            r.VERSION_3_1_0 = h;
            var f = new u(3, 2, 0);
            r.VERSION_3_2_0 = f;
            var d = new u(3, 4, 0);
            r.VERSION_3_4_0 = d;
            var p = new u(3, 5, 0);
            r.VERSION_3_5_0 = p;
            var b = new u(4, 0, 0);
            r.VERSION_4_0_0 = b;
            var v = Number.MAX_SAFE_INTEGER, m = new u(v, v, v);
            r.VERSION_IN_DEV = m
        }, {
            "./util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        75: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = n(e("../record")), s = function () {
                    function e() {
                        (0, i.default)(this, e), this._fieldKeys = null, this._fieldLookup = null, this._queuedRecords = [], this._tail = null, this._error = null, this._hasFailed = !1, this._observer = null, this._conn = null, this._meta = {}
                    }

                    return (0, o.default)(e, [{
                        key: "onNext", value: function (e) {
                            var t = new a.default(this._fieldKeys, e, this._fieldLookup);
                            this._observer ? this._observer.onNext(t) : this._queuedRecords.push(t)
                        }
                    }, {
                        key: "onCompleted", value: function (e) {
                            if (null === this._fieldKeys) {
                                if (this._fieldKeys = [], this._fieldLookup = {}, e.fields && 0 < e.fields.length) {
                                    this._fieldKeys = e.fields;
                                    for (var t = 0; t < e.fields.length; t++) this._fieldLookup[e.fields[t]] = t
                                }
                            } else this._observer ? this._observer.onCompleted(e) : this._tail = e;
                            this._copyMetadataOnCompletion(e)
                        }
                    }, {
                        key: "_copyMetadataOnCompletion", value: function (e) {
                            for (var t in e) e.hasOwnProperty(t) && (this._meta[t] = e[t])
                        }
                    }, {
                        key: "serverMetadata", value: function () {
                            var e = {server: this._conn.server};
                            return Object.assign({}, this._meta, e)
                        }
                    }, {
                        key: "resolveConnection", value: function (e) {
                            this._conn = e
                        }
                    }, {
                        key: "prepareToHandleSingleResponse", value: function () {
                            this._fieldKeys = []
                        }
                    }, {
                        key: "markCompleted", value: function () {
                            this._fieldKeys = [], this._tail = {}
                        }
                    }, {
                        key: "onError", value: function (e) {
                            this._hasFailed || (this._hasFailed = !0, this._observer ? this._observer.onError ? this._observer.onError(e) : console.log(e) : this._error = e)
                        }
                    }, {
                        key: "subscribe", value: function (e) {
                            if (this._error) e.onError(this._error); else {
                                if (0 < this._queuedRecords.length) for (var t = 0; t < this._queuedRecords.length; t++) e.onNext(this._queuedRecords[t]);
                                this._tail && e.onCompleted(this._tail), this._observer = e
                            }
                        }
                    }, {
                        key: "hasFailed", value: function () {
                            return this._hasFailed
                        }
                    }]), e
                }();
            r.default = s
        }, {
            "../record": 81,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        76: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.normalizeSecondsForDuration = function (e, t) {
                return (0, c.int)(e).add(D(t, k))
            }, r.normalizeNanosecondsForDuration = function (e) {
                return A(e, k)
            }, r.localTimeToNanoOfDay = function (e, t, r, n) {
                e = (0, c.int)(e), t = (0, c.int)(t), r = (0, c.int)(r), n = (0, c.int)(n);
                var i = e.multiply(E);
                return (i = (i = i.add(t.multiply(w))).add(r.multiply(k))).add(n)
            }, r.nanoOfDayToLocalTime = S, r.localDateTimeToEpochSecond = function (e, t, r, n, i, o, a) {
                var s = T(e, t, r), u = function (e, t, r) {
                    e = (0, c.int)(e), t = (0, c.int)(t), r = (0, c.int)(r);
                    var n = e.multiply(g);
                    return (n = n.add(t.multiply(y))).add(r)
                }(n, i, o);
                return s.multiply(R).add(u)
            }, r.epochSecondAndNanoToLocalDateTime = function (e, t) {
                var r = D(e, R), n = A(e, R).multiply(k).add(t), i = P(r), o = S(n);
                return new h.LocalDateTime(i.year, i.month, i.day, o.hour, o.minute, o.second, o.nanosecond)
            }, r.dateToEpochDay = T, r.epochDayToDate = P, r.durationToIsoString = function (e, t, r, n) {
                var i = q(e), o = q(t), a = function (e, t) {
                    var r, n;
                    e = (0, c.int)(e), t = (0, c.int)(t);
                    var i = e.isNegative(), o = t.greaterThan(0);
                    r = i && o ? e.equals(-1) ? "-0" : e.add(1).toString() : e.toString();
                    o && (n = U(i ? t.negate().add(2 * k).modulo(k) : t.add(k).modulo(k)));
                    return n ? r + n : r
                }(r, n);
                return "P".concat(i, "M").concat(o, "DT").concat(a, "S")
            }, r.timeToIsoString = function (e, t, r, n) {
                var i = q(e, 2), o = q(t, 2), a = q(r, 2), s = U(n);
                return "".concat(i, ":").concat(o, ":").concat(a).concat(s)
            }, r.timeZoneOffsetToIsoString = function (e) {
                if ((e = (0, c.int)(e)).equals(0)) return "Z";
                var t = e.isNegative();
                t && (e = e.multiply(-1));
                var r = t ? "-" : "+", n = q(e.div(g), 2), i = q(e.div(y).modulo(_), 2), o = e.modulo(y),
                    a = o.equals(0) ? null : q(o, 2);
                return a ? "".concat(r).concat(n, ":").concat(i, ":").concat(a) : "".concat(r).concat(n, ":").concat(i)
            }, r.dateToIsoString = function (e, t, r) {
                var n = (e = (0, c.int)(e)).isNegative();
                n && (e = e.multiply(-1));
                var i = q(e, 4);
                n && (i = "-" + i);
                var o = q(t, 2), a = q(r, 2);
                return "".concat(i, "-").concat(o, "-").concat(a)
            }, r.totalNanoseconds = function (e, t) {
                t = t || 0;
                var r = e.getMilliseconds() * C;
                return (0, c.isInt)(t) ? t.add(r) : t + r
            }, r.timeZoneOffsetInSeconds = function (e) {
                var t = e.getTimezoneOffset();
                return 0 !== t ? -1 * t * y : 0
            }, r.assertValidYear = function (e) {
                return N(e, l, "Year")
            }, r.assertValidMonth = function (e) {
                return N(e, f, "Month")
            }, r.assertValidDay = function (e) {
                return N(e, d, "Day")
            }, r.assertValidHour = function (e) {
                return N(e, p, "Hour")
            }, r.assertValidMinute = function (e) {
                return N(e, b, "Minute")
            }, r.assertValidSecond = function (e) {
                return N(e, v, "Second")
            }, r.assertValidNanosecond = function (e) {
                return N(e, m, "Nanosecond")
            };
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                c = e("../integer"), h = e("../temporal-types"), a = e("./util"), s = e("../error"), u = function () {
                    function r(e, t) {
                        (0, i.default)(this, r), this._minNumber = e, this._maxNumber = t, this._minInteger = (0, c.int)(e), this._maxInteger = (0, c.int)(t)
                    }

                    return (0, o.default)(r, [{
                        key: "contains", value: function (e) {
                            return (0, c.isInt)(e) ? e.greaterThanOrEqual(this._minInteger) && e.lessThanOrEqual(this._maxInteger) : e >= this._minNumber && e <= this._maxNumber
                        }
                    }, {
                        key: "toString", value: function () {
                            return "[".concat(this._minNumber, ", ").concat(this._maxNumber, "]")
                        }
                    }]), r
                }(), l = new u(-999999999, 999999999), f = new u(1, 12), d = new u(1, 31), p = new u(0, 23),
                b = new u(0, 59), v = new u(0, 59), m = new u(0, 999999999), _ = 60, y = 60, g = y * _, k = 1e9,
                C = 1e6, w = k * y, E = w * _, I = 719528, O = 146097, R = 86400;

            function S(e) {
                var t = (e = (0, c.int)(e)).div(E), r = (e = e.subtract(t.multiply(E))).div(w),
                    n = (e = e.subtract(r.multiply(w))).div(k), i = e.subtract(n.multiply(k));
                return new h.LocalTime(t, r, n, i)
            }

            function T(e, t, r) {
                e = (0, c.int)(e), t = (0, c.int)(t), r = (0, c.int)(r);
                var n = e.multiply(365);
                return n = (n = (n = e.greaterThanOrEqual(0) ? n.add(e.add(3).div(4).subtract(e.add(99).div(100)).add(e.add(399).div(400))) : n.subtract(e.div(-4).subtract(e.div(-100)).add(e.div(-400)))).add(t.multiply(367).subtract(362).div(12))).add(r.subtract(1)), t.greaterThan(2) && (n = n.subtract(1), function (e) {
                    return !!(e = (0, c.int)(e)).modulo(4).equals(0) && (!e.modulo(100).equals(0) || !!e.modulo(400).equals(0))
                }(e) || (n = n.subtract(1))), n.subtract(I)
            }

            function P(e) {
                var t = (e = (0, c.int)(e)).add(I).subtract(60), r = (0, c.int)(0);
                if (t.lessThan(0)) {
                    var n = t.add(1).div(O).subtract(1);
                    r = n.multiply(400), t = t.add(n.multiply(-O))
                }
                var i = t.multiply(400).add(591).div(O),
                    o = t.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)));
                o.lessThan(0) && (i = i.subtract(1), o = t.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)))), i = i.add(r);
                var a = o, s = a.multiply(5).add(2).div(153), u = s.add(2).modulo(12).add(1),
                    l = a.subtract(s.multiply(306).add(5).div(10)).add(1);
                return i = i.add(s.div(10)), new h.Date(i, u, l)
            }

            function N(e, t, r) {
                if ((0, a.assertNumberOrInteger)(e, r), !t.contains(e)) throw(0, s.newError)("".concat(r, " is expected to be in range ").concat(t, " but was: ").concat(e));
                return e
            }

            function D(e, t) {
                e = (0, c.int)(e), t = (0, c.int)(t);
                var r = e.div(t);
                return e.isPositive() !== t.isPositive() && r.multiply(t).notEquals(e) && (r = r.subtract(1)), r
            }

            function A(e, t) {
                return e = (0, c.int)(e), t = (0, c.int)(t), e.subtract(D(e, t).multiply(t))
            }

            function U(e) {
                return (e = (0, c.int)(e)).equals(0) ? "" : "." + q(e, 9)
            }

            function q(e, t) {
                var r = 1 < arguments.length && void 0 !== t ? t : void 0, n = (e = (0, c.int)(e)).isNegative();
                n && (e = e.negate());
                var i = e.toString();
                if (r) for (; i.length < r;) i = "0" + i;
                return n ? "-" + i : i
            }
        }, {
            "../error": 29,
            "../integer": 32,
            "../temporal-types": 87,
            "./util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        77: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = e("../error"), s = function () {
                    function u(e, t, r, n) {
                        (0, i.default)(this, u), this._maxRetryTimeMs = l(e, 3e4), this._initialRetryDelayMs = l(t, 1e3), this._multiplier = l(r, 2), this._jitterFactor = l(n, .2), this._inFlightTimeoutIds = [], this._verifyAfterConstruction()
                    }

                    return (0, o.default)(u, [{
                        key: "execute", value: function (n, i) {
                            var o = this;
                            return new Promise(function (e, t) {
                                o._executeTransactionInsidePromise(n, i, e, t)
                            }).catch(function (e) {
                                var t = Date.now(), r = o._initialRetryDelayMs;
                                return o._retryTransactionPromise(n, i, e, t, r)
                            })
                        }
                    }, {
                        key: "close", value: function () {
                            this._inFlightTimeoutIds.forEach(function (e) {
                                return clearTimeout(e)
                            }), this._inFlightTimeoutIds = []
                        }
                    }, {
                        key: "_retryTransactionPromise", value: function (i, o, e, r, a) {
                            var s = this;
                            return Date.now() - r > this._maxRetryTimeMs || !u._canRetryOn(e) ? Promise.reject(e) : new Promise(function (e, t) {
                                var r = s._computeDelayWithJitter(a), n = setTimeout(function () {
                                    s._inFlightTimeoutIds = s._inFlightTimeoutIds.filter(function (e) {
                                        return e !== n
                                    }), s._executeTransactionInsidePromise(i, o, e, t)
                                }, r);
                                s._inFlightTimeoutIds.push(n)
                            }).catch(function (e) {
                                var t = a * s._multiplier;
                                return s._retryTransactionPromise(i, o, e, r, t)
                            })
                        }
                    }, {
                        key: "_executeTransactionInsidePromise", value: function (e, t, r, n) {
                            var i, o = this;
                            try {
                                i = e()
                            } catch (e) {
                                return void n(e)
                            }
                            this._safeExecuteTransactionWork(i, t).then(function (e) {
                                return o._handleTransactionWorkSuccess(e, i, r, n)
                            }).catch(function (e) {
                                return o._handleTransactionWorkFailure(e, i, n)
                            })
                        }
                    }, {
                        key: "_safeExecuteTransactionWork", value: function (e, t) {
                            try {
                                var r = t(e);
                                return Promise.resolve(r)
                            } catch (e) {
                                return Promise.reject(e)
                            }
                        }
                    }, {
                        key: "_handleTransactionWorkSuccess", value: function (e, t, r, n) {
                            t.isOpen() ? t.commit().then(function () {
                                r(e)
                            }).catch(function (e) {
                                n(e)
                            }) : r(e)
                        }
                    }, {
                        key: "_handleTransactionWorkFailure", value: function (e, t, r) {
                            t.isOpen() ? t.rollback().catch(function () {
                            }).then(function () {
                                return r(e)
                            }) : r(e)
                        }
                    }, {
                        key: "_computeDelayWithJitter", value: function (e) {
                            var t = e * this._jitterFactor, r = e - t, n = e + t;
                            return Math.random() * (n - r) + r
                        }
                    }, {
                        key: "_verifyAfterConstruction", value: function () {
                            if (this._maxRetryTimeMs < 0) throw(0, a.newError)("Max retry time should be >= 0: " + this._maxRetryTimeMs);
                            if (this._initialRetryDelayMs < 0) throw(0, a.newError)("Initial retry delay should >= 0: " + this._initialRetryDelayMs);
                            if (this._multiplier < 1) throw(0, a.newError)("Multiplier should be >= 1.0: " + this._multiplier);
                            if (this._jitterFactor < 0 || 1 < this._jitterFactor) throw(0, a.newError)("Jitter factor should be in [0.0, 1.0]: " + this._jitterFactor)
                        }
                    }], [{
                        key: "_canRetryOn", value: function (e) {
                            return e && e instanceof a.Neo4jError && e.code && (e.code === a.SERVICE_UNAVAILABLE || e.code === a.SESSION_EXPIRED || this._isTransientError(e))
                        }
                    }, {
                        key: "_isTransientError", value: function (e) {
                            var t = e.code;
                            return 0 <= t.indexOf("TransientError") && ("Neo.TransientError.Transaction.Terminated" !== t && "Neo.TransientError.Transaction.LockClientStopped" !== t)
                        }
                    }]), u
                }();

            function l(e, t) {
                return e || 0 === e ? e : t
            }

            r.default = s
        }, {
            "../error": 29,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        78: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var o = i(e("@babel/runtime/helpers/classCallCheck")), a = i(e("@babel/runtime/helpers/createClass")),
                s = n(e("./util")), u = e("../integer"), l = e("../error"), c = function () {
                    function t(e) {
                        (0, o.default)(this, t), function (e) {
                            e && s.assertObject(e, "Transaction config")
                        }(e), this.timeout = function (e) {
                            if (!s.isObject(e) || !e.timeout && 0 !== e.timeout) return null;
                            s.assertNumberOrInteger(e.timeout, "Transaction timeout");
                            var t = (0, u.int)(e.timeout);
                            if (t.isZero()) throw(0, l.newError)("Transaction timeout should not be zero");
                            if (t.isNegative()) throw(0, l.newError)("Transaction timeout should not be negative");
                            return t
                        }(e), this.metadata = function (e) {
                            if (s.isObject(e) && e.metadata) {
                                var t = e.metadata;
                                if (s.assertObject(t), 0 !== Object.keys(t).length) return t
                            }
                            return null
                        }(e)
                    }

                    return (0, a.default)(t, [{
                        key: "isEmpty", value: function () {
                            return Object.values(this).every(function (e) {
                                return null == e
                            })
                        }
                    }], [{
                        key: "empty", value: function () {
                            return h
                        }
                    }]), t
                }(), h = new (r.default = c)({})
        }, {
            "../error": 29,
            "../integer": 32,
            "./util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12
        }],
        79: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;

            function l(e, t, r, n, i) {
                (0, o.default)(this, l), this.scheme = e, this.host = t, this.port = r, this.hostAndPort = n, this.query = i
            }

            var o = n(e("@babel/runtime/helpers/classCallCheck")), c = e("uri-js"), h = e("./util"), i = 7687, a = 7474,
                s = 7473;

            function f(e, t, r) {
                if (!(e = (e || "").trim())) throw new Error("Illegal empty ".concat(t, " in URL query '").concat(r, "'"));
                return e
            }

            function d(e) {
                var t = "[" === e.charAt(0), r = "]" === e.charAt(e.length - 1);
                if (t || r) {
                    if (t && r) return e;
                    throw new Error("Illegal IPv6 address ".concat(e))
                }
                return "[".concat(e, "]")
            }

            function p(e) {
                return "http" === e ? a : "https" === e ? s : i
            }

            var u = {
                parseDatabaseUrl: function (e) {
                    (0, h.assertString)(e, "URL");
                    var t = function (e) {
                        return -1 !== (e = e.trim()).indexOf("://") ? {schemeMissing: !1, url: e} : {
                            schemeMissing: !0,
                            url: "none://".concat(e)
                        }
                    }(e), r = (0, c.parse)(t.url), n = t.schemeMissing ? null : function (e) {
                        if (e) return ":" === (e = e.trim()).charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e;
                        return null
                    }(r.scheme), i = function (e, t) {
                        if (e) return e.trim();
                        throw new Error("Unable to extract host from ".concat(t))
                    }(r.host), o = function (e) {
                        if (e) return 0 <= e.indexOf(":") ? d(e) : e;
                        throw new Error("Illegal host ".concat(e))
                    }(i), a = function (e, t) {
                        var r = parseInt(e, 10);
                        return 0 === r || r ? r : p(t)
                    }(r.port, n), s = "".concat(o, ":").concat(a), u = function (e, i) {
                        var t = function (e) {
                            (e = (e || "").trim()) && "?" === e.charAt(0) && (e = e.substring(1, e.length));
                            return e
                        }(e), o = {};
                        t && t.split("&").forEach(function (e) {
                            var t = e.split("=");
                            if (2 !== t.length) throw new Error("Invalid parameters: '".concat(t, "' in URL '").concat(i, "'."));
                            var r = f(t[0], "key", i), n = f(t[1], "value", i);
                            if (o[r]) throw new Error("Duplicated query parameters with key '".concat(r, "' in URL '").concat(i, "'"));
                            o[r] = n
                        });
                        return o
                    }(r.query, e);
                    return new l(n, i, a, s, u)
                }, defaultPortForScheme: p, formatIPv4Address: function (e, t) {
                    return "".concat(e, ":").concat(t)
                }, formatIPv6Address: function (e, t) {
                    var r = d(e);
                    return "".concat(r, ":").concat(t)
                }
            };
            r.default = u
        }, {
            "./util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "uri-js": 26
        }],
        80: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.isEmptyObjectOrNull = function (e) {
                if (null === e) return !0;
                if (!a(e)) return !1;
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0
            }, r.isObject = a, r.isString = u, r.assertObject = function (e, t) {
                if (a(e)) return e;
                throw new TypeError(t + " expected to be an object but was: " + JSON.stringify(e))
            }, r.assertString = s, r.assertNumber = function (e, t) {
                if ("number" == typeof e) return e;
                throw new TypeError(t + " expected to be a number but was: " + JSON.stringify(e))
            }, r.assertNumberOrInteger = function (e, t) {
                if ("number" == typeof e || (0, o.isInt)(e)) return e;
                throw new TypeError(t + " expected to be either a number or an Integer object but was: " + JSON.stringify(e))
            }, r.assertValidDate = function (e, t) {
                if ("[object Date]" !== Object.prototype.toString.call(e)) throw new TypeError(t + " expected to be a standard JavaScript Date but was: " + JSON.stringify(e));
                if (Number.isNaN(e.getTime())) throw new TypeError(t + " expected to be valid JavaScript Date but its time was NaN: " + JSON.stringify(e));
                return e
            }, r.validateStatementAndParameters = function (e, t) {
                var r = e, n = t || {};
                "object" === (0, i.default)(e) && e.text && (r = e.text, n = e.parameters || {});
                return function (e) {
                    if (s(e, "Cypher statement"), 0 === e.trim().length) throw new TypeError("Cypher statement is expected to be a non-empty string.")
                }(r), function (e) {
                    if (!a(e)) {
                        var t = e.constructor ? " " + e.constructor.name : "";
                        throw new TypeError("Query parameters are expected to either be undefined/null or an object, given:".concat(t, " ").concat(e))
                    }
                }(n), {query: r, params: n}
            }, r.ENCRYPTION_OFF = r.ENCRYPTION_ON = void 0;
            var i = n(e("@babel/runtime/helpers/typeof")), o = e("../integer");
            r.ENCRYPTION_ON = "ENCRYPTION_ON";

            function a(e) {
                return "object" === (0, i.default)(e) && !Array.isArray(e) && null !== e
            }

            function s(e, t) {
                if (!u(e)) throw new TypeError(t + " expected to be string but was: " + JSON.stringify(e));
                return e
            }

            function u(e) {
                return "[object String]" === Object.prototype.toString.call(e)
            }

            r.ENCRYPTION_OFF = "ENCRYPTION_OFF"
        }, {"../integer": 32, "@babel/runtime/helpers/interopRequireDefault": 11, "@babel/runtime/helpers/typeof": 23}],
        81: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = e("./error");
            var s = function () {
                function n(e, t) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    (0, i.default)(this, n), this.keys = e, this.length = e.length, this._fields = t, this._fieldLookup = r || function (e) {
                        var r = {};
                        return e.forEach(function (e, t) {
                            r[e] = t
                        }), r
                    }(e)
                }

                return (0, o.default)(n, [{
                    key: "forEach", value: function (e) {
                        for (var t = 0; t < this.keys.length; t++) e(this._fields[t], this.keys[t], this)
                    }
                }, {
                    key: "toObject", value: function () {
                        var r = {};
                        return this.forEach(function (e, t) {
                            r[t] = e
                        }), r
                    }
                }, {
                    key: "get", value: function (e) {
                        var t;
                        if ("number" != typeof e) {
                            if (void 0 === (t = this._fieldLookup[e])) throw(0, a.newError)("This record has no field with key '" + e + "', available key are: [" + this.keys + "].")
                        } else t = e;
                        if (t > this._fields.length - 1 || t < 0) throw(0, a.newError)("This record has no field with index '" + t + "'. Remember that indexes start at `0`, and make sure your statement returns records in the shape you meant it to.");
                        return this._fields[t]
                    }
                }, {
                    key: "has", value: function (e) {
                        return "number" == typeof e ? 0 <= e && e < this._fields.length : void 0 !== this._fieldLookup[e]
                    }
                }]), n
            }();
            r.default = s
        }, {
            "./error": 29,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        82: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = r.statementType = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), o = n(e("@babel/runtime/helpers/createClass")),
                a = e("./integer"), s = function () {
                    function n(e, t, r) {
                        (0, i.default)(this, n), this.statement = {
                            text: e,
                            parameters: t
                        }, this.statementType = r.type, this.counters = new c(r.stats || {}), this.updateStatistics = this.counters, this.plan = !(!r.plan && !r.profile) && new u(r.plan || r.profile), this.profile = !!r.profile && new l(r.profile), this.notifications = this._buildNotifications(r.notifications), this.server = new f(r.server), this.resultConsumedAfter = r.result_consumed_after, this.resultAvailableAfter = r.result_available_after
                    }

                    return (0, o.default)(n, [{
                        key: "_buildNotifications", value: function (e) {
                            return e ? e.map(function (e) {
                                return new h(e)
                            }) : []
                        }
                    }, {
                        key: "hasPlan", value: function () {
                            return this.plan instanceof u
                        }
                    }, {
                        key: "hasProfile", value: function () {
                            return this.profile instanceof l
                        }
                    }]), n
                }(), u = function t(e) {
                    (0, i.default)(this, t), this.operatorType = e.operatorType, this.identifiers = e.identifiers, this.arguments = e.args, this.children = e.children ? e.children.map(function (e) {
                        return new t(e)
                    }) : []
                }, l = function t(e) {
                    (0, i.default)(this, t), this.operatorType = e.operatorType, this.identifiers = e.identifiers, this.arguments = e.args, this.dbHits = d(e.args.DbHits), this.rows = d(e.args.Rows), this.children = e.children ? e.children.map(function (e) {
                        return new t(e)
                    }) : []
                }, c = function () {
                    function e(t) {
                        var r = this;
                        (0, i.default)(this, e), this._stats = {
                            nodesCreated: 0,
                            nodesDeleted: 0,
                            relationshipsCreated: 0,
                            relationshipsDeleted: 0,
                            propertiesSet: 0,
                            labelsAdded: 0,
                            labelsRemoved: 0,
                            indexesAdded: 0,
                            indexesRemoved: 0,
                            constraintsAdded: 0,
                            constraintsRemoved: 0
                        }, Object.keys(t).forEach(function (e) {
                            r._stats[e.replace(/(-\w)/g, function (e) {
                                return e[1].toUpperCase()
                            })] = d(t[e])
                        })
                    }

                    return (0, o.default)(e, [{
                        key: "containsUpdates", value: function () {
                            var r = this;
                            return 0 < Object.keys(this._stats).reduce(function (e, t) {
                                return e + r._stats[t]
                            }, 0)
                        }
                    }, {
                        key: "nodesCreated", value: function () {
                            return this._stats.nodesCreated
                        }
                    }, {
                        key: "nodesDeleted", value: function () {
                            return this._stats.nodesDeleted
                        }
                    }, {
                        key: "relationshipsCreated", value: function () {
                            return this._stats.relationshipsCreated
                        }
                    }, {
                        key: "relationshipsDeleted", value: function () {
                            return this._stats.relationshipsDeleted
                        }
                    }, {
                        key: "propertiesSet", value: function () {
                            return this._stats.propertiesSet
                        }
                    }, {
                        key: "labelsAdded", value: function () {
                            return this._stats.labelsAdded
                        }
                    }, {
                        key: "labelsRemoved", value: function () {
                            return this._stats.labelsRemoved
                        }
                    }, {
                        key: "indexesAdded", value: function () {
                            return this._stats.indexesAdded
                        }
                    }, {
                        key: "indexesRemoved", value: function () {
                            return this._stats.indexesRemoved
                        }
                    }, {
                        key: "constraintsAdded", value: function () {
                            return this._stats.constraintsAdded
                        }
                    }, {
                        key: "constraintsRemoved", value: function () {
                            return this._stats.constraintsRemoved
                        }
                    }]), e
                }(), h = function () {
                    function t(e) {
                        (0, i.default)(this, t), this.code = e.code, this.title = e.title, this.description = e.description, this.severity = e.severity, this.position = t._constructPosition(e.position)
                    }

                    return (0, o.default)(t, null, [{
                        key: "_constructPosition", value: function (e) {
                            return e ? {offset: d(e.offset), line: d(e.line), column: d(e.column)} : {}
                        }
                    }]), t
                }(), f = function e(t) {
                    (0, i.default)(this, e), t && (this.address = t.address, this.version = t.version)
                };

            function d(e) {
                return (0, a.isInt)(e) ? e.toInt() : e
            }

            r.statementType = {READ_ONLY: "r", READ_WRITE: "rw", WRITE_ONLY: "w", SCHEMA_WRITE: "s"};
            var p = s;
            r.default = p
        }, {
            "./integer": 32,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        83: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;

            function u(e) {
                console.log("Uncaught error when processing result: " + e)
            }

            function l(e) {
            }

            var a = n(e("@babel/runtime/helpers/classCallCheck")), i = n(e("@babel/runtime/helpers/createClass")),
                c = n(e("./result-summary")), s = e("./internal/connection-holder");
            var o = function () {
                function o(e, t, r, n, i) {
                    (0, a.default)(this, o), this._stack = function () {
                        var e = new Error("");
                        if (e.stack) return e.stack.replace(/^Error(\n\r)*/, "");
                        return null
                    }(), this._streamObserver = e, this._p = null, this._statement = t, this._parameters = r || {}, this._metaSupplier = n || function () {
                        return {}
                    }, this._connectionHolder = i || s.EMPTY_CONNECTION_HOLDER
                }

                return (0, i.default)(o, [{
                    key: "_createPromise", value: function () {
                        if (!this._p) {
                            var i = this;
                            this._p = new Promise(function (t, r) {
                                var n = [], e = {
                                    onNext: function (e) {
                                        n.push(e)
                                    }, onCompleted: function (e) {
                                        t({records: n, summary: e})
                                    }, onError: function (e) {
                                        r(e)
                                    }
                                };
                                i.subscribe(e)
                            })
                        }
                    }
                }, {
                    key: "then", value: function (e, t) {
                        return this._createPromise(), this._p.then(e, t)
                    }
                }, {
                    key: "catch", value: function (e) {
                        return this._createPromise(), this._p.catch(e)
                    }
                }, {
                    key: "subscribe", value: function (i) {
                        var o = this, a = this, s = i.onCompleted || l;
                        i.onCompleted = function (e) {
                            var t = a._metaSupplier();
                            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                            var n = new c.default(o._statement, o._parameters, e);
                            a._connectionHolder.releaseConnection().then(function () {
                                s.call(i, n)
                            })
                        };
                        var t = i.onError || u;
                        i.onError = function (e) {
                            a._connectionHolder.releaseConnection().then(function () {
                                !function (e, t) {
                                    t && (e.stack = e.toString() + "\n" + t)
                                }(e, o._stack), t.call(i, e)
                            })
                        }, this._streamObserver.subscribe(i)
                    }
                }]), o
            }();
            r.default = o
        }, {
            "./internal/connection-holder": 47,
            "./result-summary": 82,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        84: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var s = i(e("@babel/runtime/helpers/classCallCheck")), o = i(e("@babel/runtime/helpers/createClass")),
                u = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                l = i(e("@babel/runtime/helpers/getPrototypeOf")), c = i(e("@babel/runtime/helpers/inherits")),
                a = e("./driver"), h = e("./error"), f = e("./internal/connection-providers"),
                d = n(e("./internal/least-connected-load-balancing-strategy")),
                p = n(e("./internal/round-robin-load-balancing-strategy")),
                b = i(e("./internal/connection-error-handler")),
                v = i(e("./internal/resolver/configured-custom-resolver"));
            var m = function (e) {
                function a(e, t, r) {
                    var n, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                        o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {};
                    return (0, s.default)(this, a), (n = (0, u.default)(this, (0, l.default)(a).call(this, e, r, i, function (e) {
                        if ("TRUST_ON_FIRST_USE" === e.trust) throw(0, h.newError)("The chosen trust mode is not compatible with a routing driver");
                        var t = e.resolver;
                        if (t && "function" != typeof t) throw new TypeError("Configured resolver should be a function. Got: ".concat(t));
                        return e
                    }(o))))._routingContext = t, n
                }

                return (0, c.default)(a, e), (0, o.default)(a, [{
                    key: "_afterConstruction", value: function () {
                        this._log.info("Routing driver ".concat(this._id, " created for server address ").concat(this._address))
                    }
                }, {
                    key: "_createConnectionProvider", value: function (e, t, r) {
                        var n = a._createLoadBalancingStrategy(this._config, t), i = function (e) {
                            return new v.default(e.resolver)
                        }(this._config);
                        return new f.LoadBalancer(e, this._routingContext, t, n, i, r, this._log)
                    }
                }, {
                    key: "_createConnectionErrorHandler", value: function () {
                        var r = this;
                        return new b.default(h.SESSION_EXPIRED, function (e, t) {
                            return r._handleUnavailability(e, t)
                        }, function (e, t) {
                            return r._handleWriteFailure(e, t)
                        })
                    }
                }, {
                    key: "_handleUnavailability", value: function (e, t) {
                        return this._log.warn("Routing driver ".concat(this._id, " will forget ").concat(t, " because of an error ").concat(e.code, " '").concat(e.message, "'")), this._connectionProvider.forget(t), e
                    }
                }, {
                    key: "_handleWriteFailure", value: function (e, t) {
                        return this._log.warn("Routing driver ".concat(this._id, " will forget writer ").concat(t, " because of an error ").concat(e.code, " '").concat(e.message, "'")), this._connectionProvider.forgetWriter(t), (0, h.newError)("No longer possible to write to server at " + t, h.SESSION_EXPIRED)
                    }
                }], [{
                    key: "_createLoadBalancingStrategy", value: function (e, t) {
                        var r = e.loadBalancingStrategy;
                        if (r && r !== d.LEAST_CONNECTED_STRATEGY_NAME) {
                            if (r === p.ROUND_ROBIN_STRATEGY_NAME) return new p.default;
                            throw(0, h.newError)("Unknown load balancing strategy: " + r)
                        }
                        return new d.default(t)
                    }
                }]), a
            }(a.Driver);
            r.default = m
        }, {
            "./driver": 28,
            "./error": 29,
            "./internal/connection-error-handler": 46,
            "./internal/connection-providers": 48,
            "./internal/least-connected-load-balancing-strategy": 57,
            "./internal/resolver/configured-custom-resolver": 68,
            "./internal/round-robin-load-balancing-strategy": 70,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        85: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                o = n(e("@babel/runtime/helpers/getPrototypeOf")), a = n(e("@babel/runtime/helpers/get")),
                s = n(e("@babel/runtime/helpers/inherits")), u = n(e("@babel/runtime/helpers/classCallCheck")),
                l = n(e("@babel/runtime/helpers/createClass")), c = n(e("./internal/stream-observer")),
                h = n(e("./result")), f = n(e("./transaction")), d = e("./error"), p = e("./internal/util"),
                b = n(e("./internal/connection-holder")), v = n(e("./driver")), m = e("./internal/constants"),
                _ = n(e("./internal/transaction-executor")), y = n(e("./internal/bookmark")),
                g = n(e("./internal/tx-config")), k = function () {
                    function i(e, t, r, n) {
                        (0, u.default)(this, i), this._mode = e, this._readConnectionHolder = new b.default(m.ACCESS_MODE_READ, t), this._writeConnectionHolder = new b.default(m.ACCESS_MODE_WRITE, t), this._open = !0, this._hasTx = !1, this._lastBookmark = r, this._transactionExecutor = function (e) {
                            var t = e && e.maxTransactionRetryTime ? e.maxTransactionRetryTime : null;
                            return new _.default(t)
                        }(n)
                    }

                    return (0, l.default)(i, [{
                        key: "run", value: function (e, t, r) {
                            var n = this, i = (0, p.validateStatementAndParameters)(e, t), o = i.query, a = i.params,
                                s = r ? new g.default(r) : g.default.empty();
                            return this._run(o, a, function (e, t) {
                                n._assertSessionIsOpen(), e.protocol().run(o, a, n._lastBookmark, s, n._mode, t)
                            })
                        }
                    }, {
                        key: "_run", value: function (e, t, r) {
                            var n = new C(this), i = this._connectionHolderWithMode(this._mode);
                            return this._hasTx ? n.onError((0, d.newError)("Statements cannot be run directly on a session with an open transaction; either run from within the transaction or use a different session.")) : (i.initializeConnection(), i.getConnection(n).then(function (e) {
                                return r(e, n)
                            }).catch(function (e) {
                                return n.onError(e)
                            })), new h.default(n, e, t, function () {
                                return n.serverMetadata()
                            }, i)
                        }
                    }, {
                        key: "beginTransaction", value: function (e) {
                            var t = e, r = g.default.empty();
                            return "string" == typeof t || t instanceof String || Array.isArray(t) ? this._updateBookmark(new y.default(t)) : t && (r = new g.default(t)), this._beginTransaction(this._mode, r)
                        }
                    }, {
                        key: "_beginTransaction", value: function (e, t) {
                            if (this._hasTx) throw(0, d.newError)("You cannot begin a transaction on a session with an open transaction; either run from within the transaction or use a different session.");
                            var r = v.default._validateSessionMode(e), n = this._connectionHolderWithMode(r);
                            n.initializeConnection(), this._hasTx = !0;
                            var i = new f.default(n, this._transactionClosed.bind(this), this._updateBookmark.bind(this), this._assertSessionIsOpen.bind(this));
                            return i._begin(this._lastBookmark, t), i
                        }
                    }, {
                        key: "_assertSessionIsOpen", value: function () {
                            if (!this._open) throw(0, d.newError)("You cannot run more transactions on a closed session.")
                        }
                    }, {
                        key: "_transactionClosed", value: function () {
                            this._hasTx = !1
                        }
                    }, {
                        key: "lastBookmark", value: function () {
                            return this._lastBookmark.maxBookmarkAsString()
                        }
                    }, {
                        key: "readTransaction", value: function (e, t) {
                            var r = new g.default(t);
                            return this._runTransaction(m.ACCESS_MODE_READ, r, e)
                        }
                    }, {
                        key: "writeTransaction", value: function (e, t) {
                            var r = new g.default(t);
                            return this._runTransaction(m.ACCESS_MODE_WRITE, r, e)
                        }
                    }, {
                        key: "_runTransaction", value: function (e, t, r) {
                            var n = this;
                            return this._transactionExecutor.execute(function () {
                                return n._beginTransaction(e, t)
                            }, r)
                        }
                    }, {
                        key: "_updateBookmark", value: function (e) {
                            e && !e.isEmpty() && (this._lastBookmark = e)
                        }
                    }, {
                        key: "close", value: function (e) {
                            var t = this, r = 0 < arguments.length && void 0 !== e ? e : function () {
                                return null
                            };
                            this._open ? (this._open = !1, this._transactionExecutor.close(), this._readConnectionHolder.close().then(function () {
                                t._writeConnectionHolder.close().then(function () {
                                    r()
                                })
                            })) : r()
                        }
                    }, {
                        key: "_connectionHolderWithMode", value: function (e) {
                            if (e === m.ACCESS_MODE_READ) return this._readConnectionHolder;
                            if (e === m.ACCESS_MODE_WRITE) return this._writeConnectionHolder;
                            throw(0, d.newError)("Unknown access mode: " + e)
                        }
                    }]), i
                }(), C = function (e) {
                    function r(e) {
                        var t;
                        return (0, u.default)(this, r), (t = (0, i.default)(this, (0, o.default)(r).call(this)))._session = e, t
                    }

                    return (0, s.default)(r, e), (0, l.default)(r, [{
                        key: "onCompleted", value: function (e) {
                            (0, a.default)((0, o.default)(r.prototype), "onCompleted", this).call(this, e);
                            var t = new y.default(e.bookmark);
                            this._session._updateBookmark(t)
                        }
                    }]), r
                }(c.default);
            var w = k;
            r.default = w
        }, {
            "./driver": 28,
            "./error": 29,
            "./internal/bookmark": 36,
            "./internal/connection-holder": 47,
            "./internal/constants": 51,
            "./internal/stream-observer": 75,
            "./internal/transaction-executor": 77,
            "./internal/tx-config": 78,
            "./internal/util": 80,
            "./result": 83,
            "./transaction": 88,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/get": 8,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        86: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.isPoint = function (e) {
                return !0 === (e && e[i])
            }, r.Point = void 0;
            var o = n(e("@babel/runtime/helpers/classCallCheck")), a = n(e("@babel/runtime/helpers/createClass")),
                s = e("./internal/util"), i = "__isPoint__", u = function () {
                    function i(e, t, r, n) {
                        (0, o.default)(this, i), this.srid = (0, s.assertNumberOrInteger)(e, "SRID"), this.x = (0, s.assertNumber)(t, "X coordinate"), this.y = (0, s.assertNumber)(r, "Y coordinate"), this.z = null == n ? n : (0, s.assertNumber)(n, "Z coordinate"), Object.freeze(this)
                    }

                    return (0, a.default)(i, [{
                        key: "toString", value: function () {
                            return this.z || 0 === this.z ? "Point{srid=".concat(l(this.srid), ", x=").concat(l(this.x), ", y=").concat(l(this.y), ", z=").concat(l(this.z), "}") : "Point{srid=".concat(l(this.srid), ", x=").concat(l(this.x), ", y=").concat(l(this.y), "}")
                        }
                    }]), i
                }();

            function l(e) {
                return Number.isInteger(e) ? e + ".0" : e.toString()
            }

            r.Point = u, Object.defineProperty(u.prototype, i, {value: !0, enumerable: !1, configurable: !1})
        }, {
            "./internal/util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11
        }],
        87: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.isDuration = function (e) {
                return E(e, s)
            }, r.isLocalTime = function (e) {
                return E(e, u)
            }, r.isTime = function (e) {
                return E(e, l)
            }, r.isDate = function (e) {
                return E(e, c)
            }, r.isLocalDateTime = function (e) {
                return E(e, h)
            }, r.isDateTime = function (e) {
                return E(e, f)
            }, r.DateTime = r.LocalDateTime = r.Date = r.Time = r.LocalTime = r.Duration = void 0;
            var p = i(e("@babel/runtime/helpers/slicedToArray")), b = i(e("@babel/runtime/helpers/classCallCheck")),
                a = i(e("@babel/runtime/helpers/createClass")), v = n(e("./internal/temporal-util")),
                m = e("./internal/util"), _ = e("./error"), o = {value: !0, enumerable: !1, configurable: !1},
                s = "__isDuration__", u = "__isLocalTime__", l = "__isTime__", c = "__isDate__",
                h = "__isLocalDateTime__", f = "__isDateTime__", d = function () {
                    function i(e, t, r, n) {
                        (0, b.default)(this, i), this.months = (0, m.assertNumberOrInteger)(e, "Months"), this.days = (0, m.assertNumberOrInteger)(t, "Days"), (0, m.assertNumberOrInteger)(r, "Seconds"), (0, m.assertNumberOrInteger)(n, "Nanoseconds"), this.seconds = v.normalizeSecondsForDuration(r, n), this.nanoseconds = v.normalizeNanosecondsForDuration(n), Object.freeze(this)
                    }

                    return (0, a.default)(i, [{
                        key: "toString", value: function () {
                            return v.durationToIsoString(this.months, this.days, this.seconds, this.nanoseconds)
                        }
                    }]), i
                }();
            r.Duration = d, Object.defineProperty(d.prototype, s, o);
            var y = function () {
                function i(e, t, r, n) {
                    (0, b.default)(this, i), this.hour = v.assertValidHour(e), this.minute = v.assertValidMinute(t), this.second = v.assertValidSecond(r), this.nanosecond = v.assertValidNanosecond(n), Object.freeze(this)
                }

                return (0, a.default)(i, [{
                    key: "toString", value: function () {
                        return v.timeToIsoString(this.hour, this.minute, this.second, this.nanosecond)
                    }
                }], [{
                    key: "fromStandardDate", value: function (e, t) {
                        return O(e, t), new i(e.getHours(), e.getMinutes(), e.getSeconds(), v.totalNanoseconds(e, t))
                    }
                }]), i
            }();
            r.LocalTime = y, Object.defineProperty(y.prototype, u, o);
            var g = function () {
                function o(e, t, r, n, i) {
                    (0, b.default)(this, o), this.hour = v.assertValidHour(e), this.minute = v.assertValidMinute(t), this.second = v.assertValidSecond(r), this.nanosecond = v.assertValidNanosecond(n), this.timeZoneOffsetSeconds = (0, m.assertNumberOrInteger)(i, "Time zone offset in seconds"), Object.freeze(this)
                }

                return (0, a.default)(o, [{
                    key: "toString", value: function () {
                        return v.timeToIsoString(this.hour, this.minute, this.second, this.nanosecond) + v.timeZoneOffsetToIsoString(this.timeZoneOffsetSeconds)
                    }
                }], [{
                    key: "fromStandardDate", value: function (e, t) {
                        return O(e, t), new o(e.getHours(), e.getMinutes(), e.getSeconds(), v.totalNanoseconds(e, t), v.timeZoneOffsetInSeconds(e))
                    }
                }]), o
            }();
            r.Time = g, Object.defineProperty(g.prototype, l, o);
            var k = function () {
                function n(e, t, r) {
                    (0, b.default)(this, n), this.year = v.assertValidYear(e), this.month = v.assertValidMonth(t), this.day = v.assertValidDay(r), Object.freeze(this)
                }

                return (0, a.default)(n, [{
                    key: "toString", value: function () {
                        return v.dateToIsoString(this.year, this.month, this.day)
                    }
                }], [{
                    key: "fromStandardDate", value: function (e) {
                        return O(e, null), new n(e.getFullYear(), e.getMonth() + 1, e.getDate())
                    }
                }]), n
            }();
            r.Date = k, Object.defineProperty(k.prototype, c, o);
            var C = function () {
                function s(e, t, r, n, i, o, a) {
                    (0, b.default)(this, s), this.year = v.assertValidYear(e), this.month = v.assertValidMonth(t), this.day = v.assertValidDay(r), this.hour = v.assertValidHour(n), this.minute = v.assertValidMinute(i), this.second = v.assertValidSecond(o), this.nanosecond = v.assertValidNanosecond(a), Object.freeze(this)
                }

                return (0, a.default)(s, [{
                    key: "toString", value: function () {
                        return I(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond)
                    }
                }], [{
                    key: "fromStandardDate", value: function (e, t) {
                        return O(e, t), new s(e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), v.totalNanoseconds(e, t))
                    }
                }]), s
            }();
            r.LocalDateTime = C, Object.defineProperty(C.prototype, h, o);
            var w = function () {
                function d(e, t, r, n, i, o, a, s, u) {
                    (0, b.default)(this, d), this.year = v.assertValidYear(e), this.month = v.assertValidMonth(t), this.day = v.assertValidDay(r), this.hour = v.assertValidHour(n), this.minute = v.assertValidMinute(i), this.second = v.assertValidSecond(o), this.nanosecond = v.assertValidNanosecond(a);
                    var l = function (e, t) {
                        var r = e || 0 === e, n = t && "" !== t;
                        {
                            if (r && !n) return (0, m.assertNumberOrInteger)(e, "Time zone offset in seconds"), [e, null];
                            if (!r && n) return (0, m.assertString)(t, "Time zone ID"), [null, t];
                            throw r && n ? (0, _.newError)("Unable to create DateTime with both time zone offset and id. Please specify either of them. Given offset: ".concat(e, " and id: ").concat(t)) : (0, _.newError)("Unable to create DateTime without either time zone offset or id. Please specify either of them. Given offset: ".concat(e, " and id: ").concat(t))
                        }
                    }(s, u), c = (0, p.default)(l, 2), h = c[0], f = c[1];
                    this.timeZoneOffsetSeconds = h, this.timeZoneId = f, Object.freeze(this)
                }

                return (0, a.default)(d, [{
                    key: "toString", value: function () {
                        return I(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond) + (this.timeZoneId ? "[".concat(this.timeZoneId, "]") : v.timeZoneOffsetToIsoString(this.timeZoneOffsetSeconds))
                    }
                }], [{
                    key: "fromStandardDate", value: function (e, t) {
                        return O(e, t), new d(e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), v.totalNanoseconds(e, t), v.timeZoneOffsetInSeconds(e), null)
                    }
                }]), d
            }();

            function E(e, t) {
                return !0 === (e && e[t])
            }

            function I(e, t, r, n, i, o, a) {
                return v.dateToIsoString(e, t, r) + "T" + v.timeToIsoString(n, i, o, a)
            }

            function O(e, t) {
                (0, m.assertValidDate)(e, "Standard date"), null != t && (0, m.assertNumberOrInteger)(t, "Nanosecond")
            }

            r.DateTime = w, Object.defineProperty(w.prototype, f, o)
        }, {
            "./error": 29,
            "./internal/temporal-util": 76,
            "./internal/util": 80,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/interopRequireWildcard": 12,
            "@babel/runtime/helpers/slicedToArray": 20
        }],
        88: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                o = n(e("@babel/runtime/helpers/getPrototypeOf")), a = n(e("@babel/runtime/helpers/get")),
                s = n(e("@babel/runtime/helpers/inherits")), u = n(e("@babel/runtime/helpers/classCallCheck")),
                l = n(e("@babel/runtime/helpers/createClass")), c = n(e("./internal/stream-observer")),
                h = n(e("./result")), f = e("./internal/util"), d = e("./internal/connection-holder"),
                p = n(e("./internal/bookmark")), b = n(e("./internal/tx-config")), v = function () {
                    function i(e, t, r, n) {
                        (0, u.default)(this, i), this._connectionHolder = e, this._state = _.ACTIVE, this._onClose = t, this._onBookmark = r, this._onConnection = n
                    }

                    return (0, l.default)(i, [{
                        key: "_begin", value: function (t, r) {
                            var n = this, i = new m(this);
                            this._connectionHolder.getConnection(i).then(function (e) {
                                n._onConnection(), e.protocol().beginTransaction(t, r, n._connectionHolder.mode(), i)
                            }).catch(function (e) {
                                return i.onError(e)
                            })
                        }
                    }, {
                        key: "run", value: function (e, t) {
                            var r = (0, f.validateStatementAndParameters)(e, t), n = r.query, i = r.params;
                            return this._state.run(this._connectionHolder, new m(this), n, i, this._onConnection)
                        }
                    }, {
                        key: "commit", value: function () {
                            var e = this._state.commit(this._connectionHolder, new m(this), this._onConnection);
                            return this._state = e.state, this._onClose(), e.result
                        }
                    }, {
                        key: "rollback", value: function () {
                            var e = this._state.rollback(this._connectionHolder, new m(this), this._onConnection);
                            return this._state = e.state, this._onClose(), e.result
                        }
                    }, {
                        key: "isOpen", value: function () {
                            return this._state === _.ACTIVE
                        }
                    }, {
                        key: "_onError", value: function () {
                            return this._state = _.FAILED, this._onClose(), this._connectionHolder.releaseConnection()
                        }
                    }]), i
                }(), m = function (e) {
                    function r(e) {
                        var t;
                        return (0, u.default)(this, r), (t = (0, i.default)(this, (0, o.default)(r).call(this)))._tx = e, t
                    }

                    return (0, s.default)(r, e), (0, l.default)(r, [{
                        key: "onError", value: function (e) {
                            var t = this;
                            this._hasFailed || this._tx._onError().then(function () {
                                (0, a.default)((0, o.default)(r.prototype), "onError", t).call(t, e)
                            })
                        }
                    }, {
                        key: "onCompleted", value: function (e) {
                            (0, a.default)((0, o.default)(r.prototype), "onCompleted", this).call(this, e);
                            var t = new p.default(e.bookmark);
                            this._tx._onBookmark(t)
                        }
                    }]), r
                }(c.default), _ = {
                    ACTIVE: {
                        commit: function (e, t, r) {
                            return {result: y(!0, e, t, r), state: _.SUCCEEDED}
                        }, rollback: function (e, t, r) {
                            return {result: y(!1, e, t, r), state: _.ROLLED_BACK}
                        }, run: function (t, r, n, i, o) {
                            var a = p.default.empty(), s = b.default.empty();
                            return t.getConnection(r).then(function (e) {
                                o(), e.protocol().run(n, i, a, s, t.mode(), r)
                            }).catch(function (e) {
                                return r.onError(e)
                            }), function (e, t, r, n) {
                                return new h.default(e, t, r, n, d.EMPTY_CONNECTION_HOLDER)
                            }(r, n, i, function () {
                                return r.serverMetadata()
                            })
                        }
                    }, FAILED: {
                        commit: function (e, t, r) {
                            return t.onError({error: "Cannot commit statements in this transaction, because previous statements in the transaction has failed and the transaction has been rolled back. Please start a new transaction to run another statement."}), {
                                result: g(t, "COMMIT", {}),
                                state: _.FAILED
                            }
                        }, rollback: function (e, t, r) {
                            return t.markCompleted(), {result: g(t, "ROLLBACK", {}), state: _.FAILED}
                        }, run: function (e, t, r, n, i) {
                            return t.onError({error: "Cannot run statement, because previous statements in the transaction has failed and the transaction has already been rolled back."}), g(t, r, n)
                        }
                    }, SUCCEEDED: {
                        commit: function (e, t, r) {
                            return t.onError({error: "Cannot commit statements in this transaction, because commit has already been successfully called on the transaction and transaction has been closed. Please start a new transaction to run another statement."}), {
                                result: g(t, "COMMIT", {}),
                                state: _.SUCCEEDED
                            }
                        }, rollback: function (e, t, r) {
                            return t.onError({error: "Cannot rollback transaction, because transaction has already been successfully closed."}), {
                                result: g(t, "ROLLBACK", {}),
                                state: _.SUCCEEDED
                            }
                        }, run: function (e, t, r, n, i) {
                            return t.onError({error: "Cannot run statement, because transaction has already been successfully closed."}), g(t, r, n)
                        }
                    }, ROLLED_BACK: {
                        commit: function (e, t, r) {
                            return t.onError({error: "Cannot commit this transaction, because it has already been rolled back."}), {
                                result: g(t, "COMMIT", {}),
                                state: _.ROLLED_BACK
                            }
                        }, rollback: function (e, t, r) {
                            return t.onError({error: "Cannot rollback transaction, because transaction has already been rolled back."}), {
                                result: g(t, "ROLLBACK", {}),
                                state: _.ROLLED_BACK
                            }
                        }, run: function (e, t, r, n, i) {
                            return t.onError({error: "Cannot run statement, because transaction has already been rolled back."}), g(t, r, n)
                        }
                    }
                };

            function y(t, e, r, n) {
                return e.getConnection(r).then(function (e) {
                    return n(), t ? e.protocol().commitTransaction(r) : e.protocol().rollbackTransaction(r)
                }).catch(function (e) {
                    return r.onError(e)
                }), new h.default(r, t ? "COMMIT" : "ROLLBACK", {}, k, e)
            }

            function g(e, t, r) {
                return new h.default(e, t, r, k, d.EMPTY_CONNECTION_HOLDER)
            }

            function k() {
                return {}
            }

            var C = v;
            r.default = C
        }, {
            "./internal/bookmark": 36,
            "./internal/connection-holder": 47,
            "./internal/stream-observer": 75,
            "./internal/tx-config": 78,
            "./internal/util": 80,
            "./result": 83,
            "@babel/runtime/helpers/classCallCheck": 4,
            "@babel/runtime/helpers/createClass": 6,
            "@babel/runtime/helpers/get": 8,
            "@babel/runtime/helpers/getPrototypeOf": 9,
            "@babel/runtime/helpers/inherits": 10,
            "@babel/runtime/helpers/interopRequireDefault": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 18
        }],
        89: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            r.default = "1.7.8"
        }, {}]
    }, {}, [27])(27)
});