!function (t, e) {
    "use strict";
    if ("object" == typeof exports && "object" == typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var n = e();
        for (var i in n)("object" == typeof exports ? exports : t)[i] = n[i]
    }
}(this, function () {
    return function (t) {
        function e(i) {
            if (n[i])return n[i].exports;
            var r = n[i] = {exports: {}, id: i, loaded: !1};
            return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function (t, e, n) {
        (function (e) {
            "use strict";
            var i = n(4), r = n(8), o = n(2), s = n(9), a = n(1).Promise, u = n(15), h = n(16);
            t.exports = e.SC = {
                initialize: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    o.set("oauth_token", t.oauth_token), o.set("client_id", t.client_id), o.set("redirect_uri", t.redirect_uri), o.set("baseURL", t.baseURL), o.set("connectURL", t.connectURL)
                }, get: function (t, e) {
                    return i.request("GET", t, e)
                }, post: function (t, e) {
                    return i.request("POST", t, e)
                }, put: function (t, e) {
                    return i.request("PUT", t, e)
                }, "delete": function (t) {
                    return i.request("DELETE", t)
                }, upload: function (t) {
                    return i.upload(t)
                }, connect: function (t) {
                    return s(t)
                }, isConnected: function () {
                    return void 0 !== o.get("oauth_token")
                }, oEmbed: function (t, e) {
                    return i.oEmbed(t, e)
                }, resolve: function (t) {
                    return i.resolve(t)
                }, Recorder: u, Promise: a, stream: function (t, e) {
                    return h(t, e)
                }, connectCallback: function () {
                    r.notifyDialog(this.location)
                }
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e, n) {
        var i;
        (function (t, r, o, s) {/*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
         * @version   2.3.0
         */
            (function () {
                "use strict";
                function a(t) {
                    return "function" == typeof t || "object" == typeof t && null !== t
                }

                function u(t) {
                    return "function" == typeof t
                }

                function h(t) {
                    return "object" == typeof t && null !== t
                }

                function c(t) {
                    q = t
                }

                function l(t) {
                    Q = t
                }

                function f() {
                    var e = t.nextTick, n = t.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                    return Array.isArray(n) && "0" === n[1] && "10" === n[2] && (e = r), function () {
                        e(m)
                    }
                }

                function d() {
                    return function () {
                        K(m)
                    }
                }

                function p() {
                    var t = 0, e = new et(m), n = document.createTextNode("");
                    return e.observe(n, {characterData: !0}), function () {
                        n.data = t = ++t % 2
                    }
                }

                function g() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = m, function () {
                        t.port2.postMessage(0)
                    }
                }

                function _() {
                    return function () {
                        setTimeout(m, 1)
                    }
                }

                function m() {
                    for (var t = 0; Z > t; t += 2) {
                        var e = rt[t], n = rt[t + 1];
                        e(n), rt[t] = void 0, rt[t + 1] = void 0
                    }
                    Z = 0
                }

                function y() {
                    try {
                        var t = n(26);
                        return K = t.runOnLoop || t.runOnContext, d()
                    } catch (e) {
                        return _()
                    }
                }

                function v() {
                }

                function E() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function S() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function A(t) {
                    try {
                        return t.then
                    } catch (e) {
                        return ut.error = e, ut
                    }
                }

                function w(t, e, n, i) {
                    try {
                        t.call(e, n, i)
                    } catch (r) {
                        return r
                    }
                }

                function T(t, e, n) {
                    Q(function (t) {
                        var i = !1, r = w(n, e, function (n) {
                            i || (i = !0, e !== n ? I(t, n) : O(t, n))
                        }, function (e) {
                            i || (i = !0, R(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                        !i && r && (i = !0, R(t, r))
                    }, t)
                }

                function b(t, e) {
                    e._state === st ? O(t, e._result) : e._state === at ? R(t, e._result) : D(e, void 0, function (e) {
                        I(t, e)
                    }, function (e) {
                        R(t, e)
                    })
                }

                function P(t, e) {
                    if (e.constructor === t.constructor) b(t, e); else {
                        var n = A(e);
                        n === ut ? R(t, ut.error) : void 0 === n ? O(t, e) : u(n) ? T(t, e, n) : O(t, e)
                    }
                }

                function I(t, e) {
                    t === e ? R(t, E()) : a(e) ? P(t, e) : O(t, e)
                }

                function L(t) {
                    t._onerror && t._onerror(t._result), M(t)
                }

                function O(t, e) {
                    t._state === ot && (t._result = e, t._state = st, 0 !== t._subscribers.length && Q(M, t))
                }

                function R(t, e) {
                    t._state === ot && (t._state = at, t._result = e, Q(L, t))
                }

                function D(t, e, n, i) {
                    var r = t._subscribers, o = r.length;
                    t._onerror = null, r[o] = e, r[o + st] = n, r[o + at] = i, 0 === o && t._state && Q(M, t)
                }

                function M(t) {
                    var e = t._subscribers, n = t._state;
                    if (0 !== e.length) {
                        for (var i, r, o = t._result, s = 0; s < e.length; s += 3)i = e[s], r = e[s + n], i ? x(n, i, r, o) : r(o);
                        t._subscribers.length = 0
                    }
                }

                function k() {
                    this.error = null
                }

                function N(t, e) {
                    try {
                        return t(e)
                    } catch (n) {
                        return ht.error = n, ht
                    }
                }

                function x(t, e, n, i) {
                    var r, o, s, a, h = u(n);
                    if (h) {
                        if (r = N(n, i), r === ht ? (a = !0, o = r.error, r = null) : s = !0, e === r)return void R(e, S())
                    } else r = i, s = !0;
                    e._state !== ot || (h && s ? I(e, r) : a ? R(e, o) : t === st ? O(e, r) : t === at && R(e, r))
                }

                function C(t, e) {
                    try {
                        e(function (e) {
                            I(t, e)
                        }, function (e) {
                            R(t, e)
                        })
                    } catch (n) {
                        R(t, n)
                    }
                }

                function F(t, e) {
                    var n = this;
                    n._instanceConstructor = t, n.promise = new t(v), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? O(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && O(n.promise, n._result))) : R(n.promise, n._validationError())
                }

                function U(t) {
                    return new ct(this, t).promise
                }

                function B(t) {
                    function e(t) {
                        I(r, t)
                    }

                    function n(t) {
                        R(r, t)
                    }

                    var i = this, r = new i(v);
                    if (!$(t))return R(r, new TypeError("You must pass an array to race.")), r;
                    for (var o = t.length, s = 0; r._state === ot && o > s; s++)D(i.resolve(t[s]), void 0, e, n);
                    return r
                }

                function H(t) {
                    var e = this;
                    if (t && "object" == typeof t && t.constructor === e)return t;
                    var n = new e(v);
                    return I(n, t), n
                }

                function j(t) {
                    var e = this, n = new e(v);
                    return R(n, t), n
                }

                function G() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function Y() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function V(t) {
                    this._id = gt++, this._state = void 0, this._result = void 0, this._subscribers = [], v !== t && (u(t) || G(), this instanceof V || Y(), C(this, t))
                }

                function z() {
                    var t;
                    if ("undefined" != typeof o) t = o; else if ("undefined" != typeof self) t = self; else try {
                        t = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var n = t.Promise;
                    n && "[object Promise]" === Object.prototype.toString.call(n.resolve()) && !n.cast || (t.Promise = _t)
                }

                var W;
                W = Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var K, q, X, $ = W, Z = 0, Q = ({}.toString, function (t, e) {
                    rt[Z] = t, rt[Z + 1] = e, Z += 2, 2 === Z && (q ? q(m) : X())
                }), J = "undefined" != typeof window ? window : void 0, tt = J || {}, et = tt.MutationObserver || tt.WebKitMutationObserver, nt = "undefined" != typeof t && "[object process]" === {}.toString.call(t), it = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, rt = new Array(1e3);
                X = nt ? f() : et ? p() : it ? g() : void 0 === J ? y() : _();
                var ot = void 0, st = 1, at = 2, ut = new k, ht = new k;
                F.prototype._validateInput = function (t) {
                    return $(t)
                }, F.prototype._validationError = function () {
                    return new Error("Array Methods must be provided an Array")
                }, F.prototype._init = function () {
                    this._result = new Array(this.length)
                };
                var ct = F;
                F.prototype._enumerate = function () {
                    for (var t = this, e = t.length, n = t.promise, i = t._input, r = 0; n._state === ot && e > r; r++)t._eachEntry(i[r], r)
                }, F.prototype._eachEntry = function (t, e) {
                    var n = this, i = n._instanceConstructor;
                    h(t) ? t.constructor === i && t._state !== ot ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(i.resolve(t), e) : (n._remaining--, n._result[e] = t)
                }, F.prototype._settledAt = function (t, e, n) {
                    var i = this, r = i.promise;
                    r._state === ot && (i._remaining--, t === at ? R(r, n) : i._result[e] = n), 0 === i._remaining && O(r, i._result)
                }, F.prototype._willSettleAt = function (t, e) {
                    var n = this;
                    D(t, void 0, function (t) {
                        n._settledAt(st, e, t)
                    }, function (t) {
                        n._settledAt(at, e, t)
                    })
                };
                var lt = U, ft = B, dt = H, pt = j, gt = 0, _t = V;
                V.all = lt, V.race = ft, V.resolve = dt, V.reject = pt, V._setScheduler = c, V._setAsap = l, V._asap = Q, V.prototype = {
                    constructor: V,
                    then: function (t, e) {
                        var n = this, i = n._state;
                        if (i === st && !t || i === at && !e)return this;
                        var r = new this.constructor(v), o = n._result;
                        if (i) {
                            var s = arguments[i - 1];
                            Q(function () {
                                x(i, r, s, o)
                            })
                        } else D(n, r, t, e);
                        return r
                    },
                    "catch": function (t) {
                        return this.then(null, t)
                    }
                };
                var mt = z, yt = {Promise: _t, polyfill: mt};
                n(19).amd ? (i = function () {
                    return yt
                }.call(e, n, e, s), !(void 0 !== i && (s.exports = i))) : "undefined" != typeof s && s.exports ? s.exports = yt : "undefined" != typeof this && (this.ES6Promise = yt), mt()
            }).call(this)
        }).call(e, n(6), n(3).setImmediate, function () {
            return this
        }(), n(20)(t))
    }, function (t, e) {
        "use strict";
        var n = {
            oauth_token: void 0,
            baseURL: "https://api.soundcloud.com",
            connectURL: "//connect.soundcloud.com",
            client_id: void 0,
            redirect_uri: void 0
        };
        t.exports = {
            get: function (t) {
                return n[t]
            }, set: function (t, e) {
                e && (n[t] = e)
            }
        }
    }, function (t, e, n) {
        (function (t, i) {
            function r(t, e) {
                this._id = t, this._clearFn = e
            }

            var o = n(6).nextTick, s = Function.prototype.apply, a = Array.prototype.slice, u = {}, h = 0;
            e.setTimeout = function () {
                return new r(s.call(setTimeout, window, arguments), clearTimeout)
            }, e.setInterval = function () {
                return new r(s.call(setInterval, window, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function (t) {
                t.close()
            }, r.prototype.unref = r.prototype.ref = function () {
            }, r.prototype.close = function () {
                this._clearFn.call(window, this._id)
            }, e.enroll = function (t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function (t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function (t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, e.setImmediate = "function" == typeof t ? t : function (t) {
                var n = h++, i = arguments.length < 2 ? !1 : a.call(arguments, 1);
                return u[n] = !0, o(function () {
                    u[n] && (i ? t.apply(null, i) : t.call(null), e.clearImmediate(n))
                }), n
            }, e.clearImmediate = "function" == typeof i ? i : function (t) {
                delete u[t]
            }
        }).call(e, n(3).setImmediate, n(3).clearImmediate)
    }, function (t, e, n) {
        (function (e) {
            "use strict";
            var i = n(2), r = n(17), o = n(1).Promise, s = function (t, n, i, r) {
                var s = void 0, a = new o(function (o) {
                    var a = e.FormData && i instanceof FormData;
                    s = new XMLHttpRequest, s.upload && s.upload.addEventListener("progress", r), s.open(t, n, !0), a || s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.onreadystatechange = function () {
                        4 === s.readyState && o({responseText: s.responseText, request: s})
                    }, s.send(i)
                });
                return a.request = s, a
            }, a = function (t) {
                var e = t.responseText, n = t.request, i = void 0, r = void 0;
                try {
                    r = JSON.parse(e)
                } catch (o) {
                }
                return r ? r.errors && (i = {message: ""}, r.errors[0] && r.errors[0].error_message && (i = {message: r.errors[0].error_message})) : i = n ? {message: "HTTP Error: " + n.status} : {message: "Unknown error"}, i && (i.status = n.status), {
                    json: r,
                    error: i
                }
            }, u = function c(t, e, n, i) {
                var r = s(t, e, n, i), o = r.then(function (t) {
                    var e = t.responseText, n = t.request, i = a({responseText: e, request: n});
                    if (i.json && "302 - Found" === i.json.status)return c("GET", i.json.location, null);
                    if (200 !== n.status && i.error)throw i.error;
                    return i.json
                });
                return o.request = r.request, o
            }, h = function (t, e, n) {
                Object.keys(e).forEach(function (i) {
                    n ? t.append(i, e[i]) : t[i] = e[i]
                })
            };
            t.exports = {
                request: function (t, n) {
                    var o = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], s = arguments.length <= 3 || void 0 === arguments[3] ? function () {
                    } : arguments[3], a = i.get("oauth_token"), c = i.get("client_id"), l = {}, f = e.FormData && o instanceof FormData, d = void 0, p = void 0;
                    return l.format = "json", a ? l.oauth_token = a : l.client_id = c, h(o, l, f), "GET" !== t && (d = f ? o : r.encode(o), o = {oauth_token: a}), n = "/" !== n[0] ? "/" + n : n, p = "" + i.get("baseURL") + n + "?" + r.encode(o), u(t, p, d, s)
                }, oEmbed: function (t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = e.element;
                    delete e.element, e.url = t;
                    var i = "https://soundcloud.com/oembed.json?" + r.encode(e);
                    return u("GET", i, null).then(function (t) {
                        return n && t.html && (n.innerHTML = t.html), t
                    })
                }, upload: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = t.asset_data || t.file, n = i.get("oauth_token") && t.title && e;
                    if (!n)return new o(function (t, e) {
                        e({
                            status: 0,
                            error_message: "oauth_token needs to be present and title and asset_data / file passed as parameters"
                        })
                    });
                    var r = Object.keys(t), s = new FormData;
                    return r.forEach(function (e) {
                        var n = t[e];
                        "file" === e && (e = "asset_data", n = t.file), s.append("track[" + e + "]", n)
                    }), this.request("POST", "/tracks", s, t.progress)
                }, resolve: function (t) {
                    return this.request("GET", "/resolve", {url: t, _status_code_map: {302: 200}})
                }
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e) {
        "use strict";
        var n = {};
        t.exports = {
            get: function (t) {
                return n[t]
            }, set: function (t, e) {
                n[t] = e
            }
        }
    }, function (t, e) {
        function n() {
            h && s && (h = !1, s.length ? u = s.concat(u) : c = -1, u.length && i())
        }

        function i() {
            if (!h) {
                var t = setTimeout(n);
                h = !0;
                for (var e = u.length; e;) {
                    for (s = u, u = []; ++c < e;)s && s[c].run();
                    c = -1, e = u.length
                }
                s = null, h = !1, clearTimeout(t)
            }
        }

        function r(t, e) {
            this.fun = t, this.array = e
        }

        function o() {
        }

        var s, a = t.exports = {}, u = [], h = !1, c = -1;
        a.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
            u.push(new r(t, e)), 1 !== u.length || h || setTimeout(i, 0)
        }, r.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = o, a.addListener = o, a.once = o, a.off = o, a.removeListener = o, a.removeAllListeners = o, a.emit = o, a.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, a.cwd = function () {
            return "/"
        }, a.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, a.umask = function () {
            return 0
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(18);
        e.extract = function (t) {
            return t.split("?")[1] || ""
        }, e.parse = function (t) {
            return "string" != typeof t ? {} : (t = t.trim().replace(/^(\?|#|&)/, ""), t ? t.split("&").reduce(function (t, e) {
                var n = e.replace(/\+/g, " ").split("="), i = n.shift(), r = n.length > 0 ? n.join("=") : void 0;
                return i = decodeURIComponent(i), r = void 0 === r ? null : decodeURIComponent(r), t.hasOwnProperty(i) ? Array.isArray(t[i]) ? t[i].push(r) : t[i] = [t[i], r] : t[i] = r, t
            }, {}) : {})
        }, e.stringify = function (t) {
            return t ? Object.keys(t).sort().map(function (e) {
                var n = t[e];
                return Array.isArray(n) ? n.sort().map(function (t) {
                    return i(e) + "=" + i(t)
                }).join("&") : i(e) + "=" + i(n)
            }).filter(function (t) {
                return t.length > 0
            }).join("&") : ""
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(7), r = n(5);
        t.exports = {
            notifyDialog: function (t) {
                var e = i.parse(t.search), n = i.parse(t.hash), o = {
                    oauth_token: e.access_token || n.access_token,
                    dialog_id: e.state || n.state,
                    error: e.error || n.error,
                    error_description: e.error_description || n.error_description
                }, s = r.get(o.dialog_id);
                s && s.handleConnectResponse(o)
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(2), r = n(11), o = n(1).Promise, s = function (t) {
            return i.set("oauth_token", t.oauth_token), t
        };
        t.exports = function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = i.get("oauth_token");
            if (e)return new o(function (t) {
                t({oauth_token: e})
            });
            var n = {
                client_id: t.client_id || i.get("client_id"),
                redirect_uri: t.redirect_uri || i.get("redirect_uri"),
                response_type: "code_and_token",
                scope: t.scope || "non-expiring",
                display: "popup"
            };
            if (!n.client_id || !n.redirect_uri)throw new Error("Options client_id and redirect_uri must be passed");
            var a = new r(n);
            return a.open().then(s)
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(1).Promise;
        t.exports = function () {
            var t = {};
            return t.promise = new i(function (e, n) {
                t.resolve = e, t.reject = n
            }), t
        }
    }, function (t, e, n) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), o = n(10), s = n(5), a = n(12), u = n(7), h = "SoundCloud_Dialog", c = function () {
            return [h, Math.ceil(1e6 * Math.random()).toString(16)].join("_")
        }, l = function (t) {
            return "https://soundcloud.com/connect?" + u.stringify(t)
        }, f = function () {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                i(this, t), this.id = c(), this.options = e, this.options.state = this.id, this.width = 456, this.height = 510, this.deferred = o()
            }

            return r(t, [{
                key: "open", value: function () {
                    var t = l(this.options);
                    return this.popup = a.open(t, this.width, this.height), s.set(this.id, this), this.deferred.promise
                }
            }, {
                key: "handleConnectResponse", value: function (t) {
                    var e = t.error;
                    e ? this.deferred.reject(t) : this.deferred.resolve(t), this.popup.close()
                }
            }]), t
        }();
        t.exports = f
    }, function (t, e) {
        "use strict";
        t.exports = {
            open: function (t, e, n) {
                var i = {}, r = void 0;
                return i.location = 1, i.width = e, i.height = n, i.left = window.screenX + (window.outerWidth - e) / 2, i.top = window.screenY + (window.outerHeight - n) / 2, i.toolbar = "no", i.scrollbars = "yes", r = Object.keys(i).map(function (t) {
                    return t + "=" + i[t]
                }).join(", "), window.open(t, i.name, r)
            }
        }
    }, function (t, e) {
        (function (e) {
            "use strict";
            var n = e.AudioContext || e.webkitAudioContext, i = null;
            t.exports = function () {
                return i ? i : i = new n
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e) {
        (function (e) {
            "use strict";
            var n = e.navigator.getUserMedia || e.navigator.webkitGetUserMedia || e.navigator.mozGetUserMedia;
            t.exports = function (t, i, r) {
                n.call(e.navigator, t, i, r)
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e, n) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), o = n(13), s = n(14), a = n(1).Promise, u = n(24), h = function () {
            var t = this, e = this.context;
            return new a(function (n, i) {
                t.source ? t.source instanceof AudioNode ? n(t.source) : i(new Error("source needs to be an instance of AudioNode")) : s({audio: !0}, function (i) {
                    t.stream = i, t.source = e.createMediaStreamSource(i), n(t.source)
                }.bind(t), i)
            })
        }, c = function () {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                i(this, t), this.context = e.context || o(), this._recorder = null, this.source = e.source, this.stream = null
            }

            return r(t, [{
                key: "start", value: function () {
                    var t = this;
                    return h.call(this).then(function (e) {
                        return t._recorder = new u(e), t._recorder.record(), e
                    })
                }
            }, {
                key: "stop", value: function () {
                    if (this._recorder && this._recorder.stop(), this.stream)if (this.stream.stop) this.stream.stop(); else if (this.stream.getTracks) {
                        var t = this.stream.getTracks()[0];
                        t && t.stop()
                    }
                }
            }, {
                key: "getBuffer", value: function () {
                    var t = this;
                    return new a(function (e, n) {
                        t._recorder ? t._recorder.getBuffer(function (n) {
                            var i = t.context.sampleRate, r = t.context.createBuffer(2, n[0].length, i);
                            r.getChannelData(0).set(n[0]), r.getChannelData(1).set(n[1]), e(r)
                        }.bind(t)) : n(new Error("Nothing has been recorded yet."))
                    })
                }
            }, {
                key: "getWAV", value: function () {
                    var t = this;
                    return new a(function (e, n) {
                        t._recorder ? t._recorder.exportWAV(function (t) {
                            e(t)
                        }) : n(new Error("Nothing has been recorded yet."))
                    })
                }
            }, {
                key: "play", value: function () {
                    var t = this;
                    return this.getBuffer().then(function (e) {
                        var n = t.context.createBufferSource();
                        return n.buffer = e, n.connect(t.context.destination), n.start(0), n
                    })
                }
            }, {
                key: "saveAs", value: function (t) {
                    return this.getWAV().then(function (e) {
                        u.forceDownload(e, t)
                    })
                }
            }, {
                key: "delete", value: function () {
                    this._recorder && (this._recorder.stop(), this._recorder.clear(), this._recorder = null), this.stream && this.stream.stop()
                }
            }]), t
        }();
        t.exports = c
    }, function (t, e, n) {
        "use strict";
        var i = n(4), r = n(23), o = new r({flashAudioPath: "https://connect.soundcloud.com/sdk/flashAudio.swf"}), s = n(2), a = n(25);
        t.exports = function (t, e) {
            var n = e ? {secret_token: e} : {};
            return i.request("GET", t, n).then(function (t) {
                var n = s.get("baseURL"), i = s.get("client_id"), r = n + "/tracks/" + t.id + "/streams?client_id=" + i, u = n + "/tracks/" + t.id + "/plays?client_id=" + i;
                return e && (r += "&secret_token=" + e, u += "&secret_token=" + e), new a(o, {
                    soundId: t.id,
                    duration: t.duration,
                    streamUrlsEndpoint: r,
                    registerEndpoint: u
                })
            })
        }
    }, function (t, e) {
        t.exports = {
            encode: function (t, e) {
                function n(t) {
                    return t.filter(function (t) {
                        return "string" == typeof t && t.length
                    }).join("&")
                }

                function i(t) {
                    var e = Object.keys(t);
                    return l ? e.sort() : e
                }

                function r(t, e) {
                    var r = ":name[:prop]";
                    return n(i(e).map(function (n) {
                        return s(r.replace(/:name/, t).replace(/:prop/, n), e[n])
                    }))
                }

                function o(t, e) {
                    var i = ":name[]";
                    return n(e.map(function (e) {
                        return s(i.replace(/:name/, t), e)
                    }))
                }

                function s(t, e) {
                    var n = /%20/g, i = encodeURIComponent, s = typeof e, a = null;
                    return Array.isArray(e) ? a = o(t, e) : "string" === s ? a = i(t) + "=" + u(e) : "number" === s ? a = i(t) + "=" + i(e).replace(n, "+") : "boolean" === s ? a = i(t) + "=" + e : "object" === s && (null !== e ? a = r(t, e) : c || (a = i(t) + "=null")), a
                }

                function a(t) {
                    return "%" + ("0" + t.charCodeAt(0).toString(16)).slice(-2).toUpperCase()
                }

                function u(t) {
                    return t.replace(/[^ !'()~\*]*/g, encodeURIComponent).replace(/ /g, "+").replace(/[!'()~\*]/g, a)
                }

                var h = "object" == typeof e ? e : {}, c = h.ignorenull || !1, l = h.sorted || !1;
                return n(i(t).map(function (e) {
                    return s(e, t[e])
                }))
            }
        }
    }, function (t, e) {
        "use strict";
        t.exports = function (t) {
            return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            })
        }
    }, function (t, e) {
        t.exports = function () {
            throw new Error("define cannot be used indirect")
        }
    }, function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {
            }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
        }
    }, function (t, e) {
        var n = window.URL || window.webkitURL;
        t.exports = function (t, e) {
            try {
                try {
                    var i;
                    try {
                        var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                        i = new r, i.append(t), i = i.getBlob()
                    } catch (o) {
                        i = new Blob([t])
                    }
                    return new Worker(n.createObjectURL(i))
                } catch (o) {
                    return new Worker("data:application/javascript," + encodeURIComponent(t))
                }
            } catch (o) {
                return new Worker(e)
            }
        }
    }, function (t, e, n) {
        t.exports = function () {
            return n(21)('!function(t){function n(r){if(e[r])return e[r].exports;var a=e[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n){(function(t){function n(t){h=t.sampleRate,v=t.numChannels,s()}function e(t){for(var n=0;v>n;n++)p[n].push(t[n]);g+=t[0].length}function r(t){for(var n=[],e=0;v>e;e++)n.push(i(p[e],g));if(2===v)var r=f(n[0],n[1]);else var r=n[0];var a=l(r),o=new Blob([a],{type:t});this.postMessage(o)}function a(){for(var t=[],n=0;v>n;n++)t.push(i(p[n],g));this.postMessage(t)}function o(){g=0,p=[],s()}function s(){for(var t=0;v>t;t++)p[t]=[]}function i(t,n){for(var e=new Float32Array(n),r=0,a=0;a<t.length;a++)e.set(t[a],r),r+=t[a].length;return e}function f(t,n){for(var e=t.length+n.length,r=new Float32Array(e),a=0,o=0;e>a;)r[a++]=t[o],r[a++]=n[o],o++;return r}function c(t,n,e){for(var r=0;r<e.length;r++,n+=2){var a=Math.max(-1,Math.min(1,e[r]));t.setInt16(n,0>a?32768*a:32767*a,!0)}}function u(t,n,e){for(var r=0;r<e.length;r++)t.setUint8(n+r,e.charCodeAt(r))}function l(t){var n=new ArrayBuffer(44+2*t.length),e=new DataView(n);return u(e,0,"RIFF"),e.setUint32(4,36+2*t.length,!0),u(e,8,"WAVE"),u(e,12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,v,!0),e.setUint32(24,h,!0),e.setUint32(28,4*h,!0),e.setUint16(32,2*v,!0),e.setUint16(34,16,!0),u(e,36,"data"),e.setUint32(40,2*t.length,!0),c(e,44,t),e}var h,v,g=0,p=[];t.onmessage=function(t){switch(t.data.command){case"init":n(t.data.config);break;case"record":e(t.data.buffer);break;case"exportWAV":r(t.data.type);break;case"getBuffer":a();break;case"clear":o()}}}).call(n,function(){return this}())}]);\n//# sourceMappingURL=9f9aac32c9a7432b5555.worker.js.map', n.p + "9f9aac32c9a7432b5555.worker.js")
        }
    }, function (t, e) {
        t.exports = function (t) {
            function e(i) {
                if (n[i])return n[i].exports;
                var r = n[i] = {exports: {}, id: i, loaded: !1};
                return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }

            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }(function (t) {
            for (var e in t)if (Object.prototype.hasOwnProperty.call(t, e))switch (typeof t[e]) {
                case"function":
                    break;
                case"object":
                    t[e] = function (e) {
                        var n = e.slice(1), i = t[e[0]];
                        return function (t, e, r) {
                            i.apply(this, [t, e, r].concat(n))
                        }
                    }(t[e]);
                    break;
                default:
                    t[e] = t[t[e]]
            }
            return t
        }([function (t, e, n) {
            var i, r = n(1), o = n(12), s = n(14), a = n(38), u = n(43), h = n(39), c = n(16), l = n(42), f = n(128), d = n(129);
            t.exports = i = function (t) {
                t = t || {}, this._players = {}, this._volume = 1, this._mute = !1, this.States = a, this.Errors = u, this._settings = o({}, t, i.defaults)
            }, i.MimeTypes = d, i.Protocols = f, i.Events = h, i.States = a, i.Errors = u, i.BrowserUtils = c, i.defaults = {
                flashAudioPath: "flashAudio.swf",
                flashLoadTimeout: 2e3,
                flashObjectID: "flashAudioObject",
                audioObjectID: "html5AudioObject",
                updateInterval: 300,
                bufferTime: 8e3,
                bufferingDelay: 800,
                streamUrlProvider: null,
                debug: !1
            }, i.capabilities = l.names, i.createDefaultMediaDescriptor = function (t, e, n) {
                if (!t || !e || !e.length)throw new Error("invalid input to create media descriptor");
                return n || (n = 0), {
                    id: t,
                    src: e,
                    duration: n,
                    forceSingle: !1,
                    forceFlash: !1,
                    forceHTML5: !1,
                    forceCustomHLS: !1,
                    mimeType: void 0
                }
            }, i.prototype.getAudioPlayer = function (t) {
                return this._players[t]
            }, i.prototype.hasAudioPlayer = function (t) {
                return void 0 !== this._players[t]
            }, i.prototype.removeAudioPlayer = function (t) {
                this.hasAudioPlayer(t) && delete this._players[t]
            }, i.prototype.setVolume = function (t) {
                t = Math.min(1, t), this._volume = Math.max(0, t);
                for (var e in this._players)this._players.hasOwnProperty(e) && this._players[e].setVolume(this._volume)
            }, i.prototype.getVolume = function () {
                return this._volume
            }, i.prototype.setMute = function (t) {
                this._muted = t;
                for (var e in this._players)this._players.hasOwnProperty(e) && this._players[e].setMute(this._muted)
            }, i.prototype.getMute = function () {
                return this._muted
            }, i.prototype.createAudioPlayer = function (t, e) {
                var n, i = r({}, this._settings, e);
                if (!t)throw"AudioManager: No media descriptor object passed, can`t build any player";
                if (t.id || (t.id = Math.floor(1e10 * Math.random()).toString() + (new Date).getTime().toString()), !t.src)throw new Error("AudioManager: You need to pass a valid media source URL");
                if (!this._players[t.id]) {
                    if (n = s.createAudioPlayer(t, i), !n)throw new Error("AudioManager: No player could be created from the given descriptor");
                    this._players[t.id] = n
                }
                return this._players[t.id].setVolume(this._volume), this._players[t.id].setMute(this._muted), this._players[t.id].on(h.STATE_CHANGE, this._onStateChange, this), this._players[t.id]
            }, i.prototype._onStateChange = function (t, e) {
                e.getState() === a.DEAD && this.removeAudioPlayer(e.getId())
            }
        }, [130, 2, 8, 4], [131, 3, 4], function (t, e) {
            function n(t, e, n) {
                n || (n = {});
                for (var i = -1, r = e.length; ++i < r;) {
                    var o = e[i];
                    n[o] = t[o]
                }
                return n
            }

            t.exports = n
        }, [132, 5, 6, 7], function (t, e) {
            function n(t) {
                return !!t && "object" == typeof t
            }

            function i(t, e) {
                var n = null == t ? void 0 : t[e];
                return s(n) ? n : void 0
            }

            function r(t) {
                return o(t) && f.call(t) == a
            }

            function o(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function s(t) {
                return null == t ? !1 : r(t) ? d.test(c.call(t)) : n(t) && u.test(t)
            }

            var a = "[object Function]", u = /^\[object .+?Constructor\]$/, h = Object.prototype, c = Function.prototype.toString, l = h.hasOwnProperty, f = h.toString, d = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = i
        }, function (t, e) {
            function n(t) {
                return !!t && "object" == typeof t
            }

            function i(t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            }

            function r(t) {
                return null != t && o(l(t))
            }

            function o(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && c >= t
            }

            function s(t) {
                return n(t) && r(t) && u.call(t, "callee") && !h.call(t, "callee")
            }

            var a = Object.prototype, u = a.hasOwnProperty, h = a.propertyIsEnumerable, c = 9007199254740991, l = i("length");
            t.exports = s
        }, function (t, e) {
            function n(t) {
                return !!t && "object" == typeof t
            }

            function i(t, e) {
                var n = null == t ? void 0 : t[e];
                return a(n) ? n : void 0
            }

            function r(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && m >= t
            }

            function o(t) {
                return s(t) && p.call(t) == h
            }

            function s(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function a(t) {
                return null == t ? !1 : o(t) ? g.test(f.call(t)) : n(t) && c.test(t)
            }

            var u = "[object Array]", h = "[object Function]", c = /^\[object .+?Constructor\]$/, l = Object.prototype, f = Function.prototype.toString, d = l.hasOwnProperty, p = l.toString, g = RegExp("^" + f.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), _ = i(Array, "isArray"), m = 9007199254740991, y = _ || function (t) {
                    return n(t) && r(t.length) && p.call(t) == u
                };
            t.exports = y
        }, [133, 9, 10, 11], function (t, e) {
            function n(t, e, n) {
                if ("function" != typeof t)return i;
                if (void 0 === e)return t;
                switch (n) {
                    case 1:
                        return function (n) {
                            return t.call(e, n)
                        };
                    case 3:
                        return function (n, i, r) {
                            return t.call(e, n, i, r)
                        };
                    case 4:
                        return function (n, i, r, o) {
                            return t.call(e, n, i, r, o)
                        };
                    case 5:
                        return function (n, i, r, o, s) {
                            return t.call(e, n, i, r, o, s)
                        }
                }
                return function () {
                    return t.apply(e, arguments)
                }
            }

            function i(t) {
                return t
            }

            t.exports = n
        }, function (t, e) {
            function n(t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            }

            function i(t) {
                return null != t && s(c(t))
            }

            function r(t, e) {
                return t = "number" == typeof t || u.test(t) ? +t : -1, e = null == e ? h : e, t > -1 && t % 1 == 0 && e > t
            }

            function o(t, e, n) {
                if (!a(n))return !1;
                var o = typeof e;
                if ("number" == o ? i(n) && r(e, n.length) : "string" == o && e in n) {
                    var s = n[e];
                    return t === t ? t === s : s !== s
                }
                return !1
            }

            function s(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && h >= t
            }

            function a(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            var u = /^\d+$/, h = 9007199254740991, c = n("length");
            t.exports = o
        }, function (t, e) {
            function n(t, e) {
                if ("function" != typeof t)throw new TypeError(i);
                return e = r(void 0 === e ? t.length - 1 : +e || 0, 0), function () {
                    for (var n = arguments, i = -1, o = r(n.length - e, 0), s = Array(o); ++i < o;)s[i] = n[e + i];
                    switch (e) {
                        case 0:
                            return t.call(this, s);
                        case 1:
                            return t.call(this, n[0], s);
                        case 2:
                            return t.call(this, n[0], n[1], s)
                    }
                    var a = Array(e + 1);
                    for (i = -1; ++i < e;)a[i] = n[i];
                    return a[e] = s, t.apply(this, a)
                }
            }

            var i = "Expected a function", r = Math.max;
            t.exports = n
        }, function (t, e, n) {
            function i(t, e) {
                return void 0 === t ? e : t
            }

            function r(t, e) {
                return s(function (n) {
                    var i = n[0];
                    return null == i ? i : (n.push(e), t.apply(void 0, n))
                })
            }

            var o = n(1), s = n(13), a = r(o, i);
            t.exports = a
        }, 11, function (t, e, n) {
            t.exports = n(15)
        }, function (t, e, n) {
            var i, r = n(16), o = n(17), s = n(45), a = n(49), u = n(46), h = n(48), c = n(50), l = n(129);
            t.exports = i = function () {
            }, i.createAudioPlayer = function (t, e) {
                var n;
                if (n = t.src.split(":")[0], ("rtmp" === n || "rtmpt" === n || t.forceFlash) && !t.forceHTML5)return new o(t, e);
                if (t.mimeType = i.getMimeType(t), t.mimeType === l.M3U8) {
                    if (r.isMSESupportMPEG() || r.isMSESupportMP4())return new c(t, e);
                    if (r.isNativeHlsSupported() && !t.forceCustomHLS)return r.isMobile() || t.forceSingle ? new a(t, e) : new s(t, e)
                } else {
                    if (r.supportHTML5Audio() && r.canPlayType(t.mimeType) || t.forceHTML5)return r.isMobile() || t.forceSingle ? new h(t, e) : new u(t, e);
                    if (t.mimeType === l.MP3)return new o(t, e)
                }
                return null
            }, i.getMimeType = function (t) {
                if (t.mimeType)return t.mimeType;
                var e = t.src.split("?")[0];
                return e = e.substring(e.lastIndexOf(".") + 1, e.length), l.getTypeByExtension(e)
            }
        }, function (t, e) {
            function n() {
                return !(!window.MediaSource && !window.WebKitMediaSource)
            }

            t.exports = {
                supportHTML5Audio: function () {
                    var t;
                    try {
                        if (window.HTMLAudioElement && "undefined" != typeof Audio)return t = new Audio, !0
                    } catch (e) {
                        return !1
                    }
                }, createAudioElement: function () {
                    var t = document.createElement("audio");
                    return t.setAttribute("msAudioCategory", "BackgroundCapableMedia"), t.mozAudioChannelType = "content", t
                }, isMobile: function (t) {
                    var e = window.navigator.userAgent, n = ["mobile", "iPhone", "iPad", "iPod", "Android", "Skyfire"];
                    return n.some(function (t) {
                        return t = new RegExp(t, "i"), t.test(e)
                    })
                }, isIE10Mobile: function () {
                    return /IEmobile\/10\.0/gi.test(navigator.userAgent)
                }, canPlayType: function (t) {
                    var e = document.createElement("audio");
                    return !!(e && e.canPlayType && e.canPlayType(t).match(/maybe|probably/i))
                }, isNativeHlsSupported: function () {
                    var t, e, n, i = navigator.userAgent, r = ["iPhone", "iPad", "iPod"];
                    return t = function (t) {
                        return t.test(i)
                    }, e = !t(/chrome/i) && !t(/opera/i) && t(/safari/i), n = r.some(function (e) {
                        return t(new RegExp(e, "i"))
                    }), n || e
                }, isMSESupported: n, isMSESupportMPEG: function () {
                    return n() && MediaSource.isTypeSupported("audio/mpeg")
                }, isMSESupportMP4: function () {
                    return n() && MediaSource.isTypeSupported("audio/mp4")
                }
            }
        }, function (t, e, n) {
            function i(t, e) {
                a.call(this, "FlashAudioProxy", t, e), i.players[t.id] = this, this._errorMessage = null, this._errorID = null, this._volume = 1, this._muted = !1, i.creatingFlashAudio || (i.flashAudio ? this._createFlashAudio() : i.createFlashObject(e))
            }

            var r = n(1), o = n(18), s = n(29), a = n(35), u = n(39), h = n(43), c = n(38), l = n(44);
            t.exports = i, r(i.prototype, a.prototype), i.players = {}, i.createFlashObject = function (t) {
                i.creatingFlashAudio = !0, i.containerElement = document.createElement("div"), i.containerElement.setAttribute("id", t.flashObjectID + "-container"), i.flashElementTarget = document.createElement("div"), i.flashElementTarget.setAttribute("id", t.flashObjectID + "-target"), i.containerElement.appendChild(i.flashElementTarget), document.body.appendChild(i.containerElement);
                var e = function (e) {
                    if (e.success) i.flashAudio = document.getElementById(t.flashObjectID), window.setTimeout(function () {
                        if (i.flashAudio && !("PercentLoaded" in i.flashAudio))for (var t in i.players)i.players.hasOwnProperty(t) && (i.players[t]._errorID = h.FLASH_PROXY_FLASH_BLOCKED, i.players[t]._errorMessage = "Flash object blocked", i.players[t]._setState(c.ERROR), i.players[t]._logger.type = i.players[t].getType(), i.players[t]._logger.log(i.players[t]._errorMessage))
                    }, t.flashLoadTimeout), i.flashAudio.triggerEvent = function (t, e) {
                        i.players[t]._triggerEvent(e)
                    }, i.flashAudio.onPositionChange = function (t, e, n, r) {
                        i.players[t]._onPositionChange(e, n, r)
                    }, i.flashAudio.onDebug = function (t, e, n) {
                        i.players[t]._logger.type = e, i.players[t]._logger.log(n)
                    }, i.flashAudio.onStateChange = function (t, e) {
                        i.players[t]._setState(e), e === c.DEAD && delete i.players[t]
                    }, i.flashAudio.onInit = function (t) {
                        i.creatingFlashAudio = !1, o(s(i.players), "_createFlashAudio")
                    }; else for (var n in i.players)i.players.hasOwnProperty(n) && (i.players[n]._errorID = h.FLASH_PROXY_CANT_LOAD_FLASH, i.players[n]._errorMessage = "Cannot create flash object", i.players[n]._setState(c.ERROR))
                };
                document.getElementById(t.flashObjectID) || l.embedSWF(t.flashAudioPath, t.flashObjectID + "-target", "1", "1", "9.0.24", "", {json: encodeURIComponent(JSON.stringify(t))}, {allowscriptaccess: "always"}, {
                    id: t.flashObjectID,
                    tabIndex: "-1"
                }, e)
            }, i._ready = function () {
                return i.flashAudio && !i.creatingFlashAudio
            }, i.prototype._createFlashAudio = function () {
                i.flashAudio.createAudio(this.getDescriptor()), this._state = i.flashAudio.getState(this.getId()), this.setVolume(this._volume), this.setMute(this._muted)
            }, i.prototype._triggerEvent = function (t) {
                this._logger.log("Flash element triggered event: " + t), this.trigger(t, this)
            }, i.prototype._setState = function (t) {
                this._state !== t && (this._state = t, this.trigger(u.STATE_CHANGE, t, this))
            }, i.prototype._onPositionChange = function (t, e, n) {
                this.trigger(u.POSITION_CHANGE, t, e, n, this)
            }, i.prototype.getType = function () {
                return i._ready() ? i.flashAudio.getType(this.getId()) : this._type
            }, i.prototype.getContainerElement = function () {
                return i.containerElement
            }, i.prototype.play = function (t) {
                if (i._ready()) {
                    if (this.getState() === c.PAUSED)return void this.resume();
                    t = void 0 === t ? 0 : t, i.flashAudio.playAudio(this.getId(), t)
                }
            }, i.prototype.pause = function () {
                i._ready() && i.flashAudio.pauseAudio(this.getId())
            }, i.prototype.seek = function (t) {
                i._ready() && i.flashAudio.seekAudio(this.getId(), t)
            }, i.prototype.resume = function () {
                i._ready() && i.flashAudio.resumeAudio(this.getId())
            }, i.prototype.setVolume = function (t) {
                this._volume = t, i._ready() && i.flashAudio.setVolume(this.getId(), t)
            }, i.prototype.getVolume = function () {
                return i._ready() ? i.flashAudio.getVolume(this.getId()) : this._volume
            }, i.prototype.setMute = function (t) {
                this._muted = t, i._ready() && i.flashAudio.setMute(this.getId(), t)
            }, i.prototype.getMute = function () {
                return i._ready() ? i.flashAudio.getMute(this.getId()) : this._muted
            }, i.prototype.getState = function () {
                return this._state
            }, i.prototype.getCurrentPosition = function () {
                return i._ready() ? i.flashAudio.getCurrentPosition(this.getId()) : 0
            }, i.prototype.getLoadedPosition = function () {
                return i._ready() ? i.flashAudio.getLoadedPosition(this.getId()) : 0
            }, i.prototype.getDuration = function () {
                return i._ready() ? i.flashAudio.getDuration(this.getId()) : 0
            }, i.prototype.kill = function () {
                return i._ready() ? void i.flashAudio.killAudio(this.getId()) : 0
            }, i.prototype.getErrorMessage = function () {
                return this._errorMessage ? this._errorMessage : i.flashAudio.getErrorMessage(this.getId())
            }, i.prototype.getErrorID = function () {
                return this._errorID ? this._errorID : i.flashAudio.getErrorID(this.getId())
            }, i.prototype.getLevelNum = function () {
                return i._ready() ? i.flashAudio.getLevelNum(this.getId()) : 0
            }, i.prototype.getLevel = function () {
                return i._ready() ? i.flashAudio.getLevel(this.getId()) : 0
            }, i.prototype.setLevel = function (t) {
                return i._ready() ? i.flashAudio.setLevel(this.getId(), t) : 0
            }
        }, function (t, e, n) {
            function i(t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            }

            function r(t) {
                return null != t && s(_(t))
            }

            function o(t, e) {
                var n = typeof t;
                if ("string" == n && p.test(t) || "number" == n)return !0;
                if (l(t))return !1;
                var i = !d.test(t);
                return i || null != e && t in a(e)
            }

            function s(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && g >= t
            }

            function a(t) {
                return u(t) ? t : Object(t)
            }

            function u(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            var h = n(19), c = n(24), l = n(23), f = n(28), d = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, p = /^\w*$/, g = 9007199254740991, _ = i("length"), m = f(function (t, e, n) {
                var i = -1, s = "function" == typeof e, a = o(e), u = r(t) ? Array(t.length) : [];
                return h(t, function (t) {
                    var r = s ? e : a && null != t ? t[e] : void 0;
                    u[++i] = r ? r.apply(t, n) : c(t, e, n)
                }), u
            });
            t.exports = m
        }, [134, 20], [132, 21, 22, 23], 5, 6, 7, function (t, e, n) {
            function i(t, e, n) {
                null == t || r(e, t) || (e = c(e), t = 1 == e.length ? t : u(t, h(e, 0, -1)), e = s(e));
                var i = null == t ? t : t[e];
                return null == i ? void 0 : i.apply(t, n)
            }

            function r(t, e) {
                var n = typeof t;
                if ("string" == n && d.test(t) || "number" == n)return !0;
                if (l(t))return !1;
                var i = !f.test(t);
                return i || null != e && t in o(e)
            }

            function o(t) {
                return a(t) ? t : Object(t)
            }

            function s(t) {
                var e = t ? t.length : 0;
                return e ? t[e - 1] : void 0
            }

            function a(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            var u = n(25), h = n(26), c = n(27), l = n(23), f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, d = /^\w*$/;
            t.exports = i
        }, function (t, e) {
            function n(t, e, n) {
                if (null != t) {
                    void 0 !== n && n in i(t) && (e = [n]);
                    for (var r = 0, o = e.length; null != t && o > r;)t = t[e[r++]];
                    return r && r == o ? t : void 0
                }
            }

            function i(t) {
                return r(t) ? t : Object(t)
            }

            function r(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            t.exports = n
        }, function (t, e) {
            function n(t, e, n) {
                var i = -1, r = t.length;
                e = null == e ? 0 : +e || 0, 0 > e && (e = -e > r ? 0 : r + e), n = void 0 === n || n > r ? r : +n || 0, 0 > n && (n += r), r = e > n ? 0 : n - e >>> 0, e >>>= 0;
                for (var o = Array(r); ++i < r;)o[i] = t[i + e];
                return o
            }

            t.exports = n
        }, function (t, e, n) {
            function i(t) {
                return null == t ? "" : t + ""
            }

            function r(t) {
                if (o(t))return t;
                var e = [];
                return i(t).replace(s, function (t, n, i, r) {
                    e.push(i ? r.replace(a, "$1") : n || t)
                }), e
            }

            var o = n(23), s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g, a = /\\(\\)?/g;
            t.exports = r
        }, 11, function (t, e, n) {
            function i(t) {
                return r(t, o(t))
            }

            var r = n(30), o = n(31);
            t.exports = i
        }, function (t, e) {
            function n(t, e) {
                for (var n = -1, i = e.length, r = Array(i); ++n < i;)r[n] = t[e[n]];
                return r
            }

            t.exports = n
        }, [132, 32, 33, 34], 5, 6, 7, function (t, e, n) {
            function i(t, e, n, i) {
                this._type = t, this._id = e.id, this._descriptor = e, this._settings = n, this._currentPosition = this._loadedPosition = this._duration = 0, this._capabilities = r({}, h.createDefaults(), i), this._logger = new u(this.getType(), this.getId(), e.title, n);
                try {
                    h.validate(this.getCapabilities())
                } catch (o) {
                    return this.getLogger().log("Bad caps: " + o), void this.updateState(s.ERROR)
                }
                this.updateState(s.INITIALIZE)
            }

            var r = n(1), o = n(36), s = n(38), a = n(39), u = n(40), h = n(42);
            t.exports = i, r(i.prototype, o), i.prototype.canPlay = function () {
                return !1
            }, i.prototype.getCapabilities = function () {
                return this._capabilities
            }, i.prototype.getLogger = function () {
                return this._logger
            }, i.prototype.getSettings = function () {
                return this._settings
            }, i.prototype.getDescriptor = function () {
                return this._descriptor
            }, i.prototype.getType = function () {
                return this._type
            }, i.prototype.getId = function () {
                return this._id + ""
            }, i.prototype.beforeStateChange = function (t, e) {
                return !0
            }, i.prototype.notifyStateChange = function (t, e) {
                return !0
            }, i.prototype.afterStateChange = function (t, e) {
            }, i.prototype.updateState = function (t) {
                var e = this._state;
                e !== t && e !== s.DEAD && this.beforeStateChange(e, t) && (this._state = t, this._logger.log('state changed "' + this.getState() + '", position: ' + this.getCurrentPosition() + ", duration: " + this.getDuration()), this.notifyStateChange(e, t) && this.trigger(a.STATE_CHANGE, t, this), this.afterStateChange(e, t))
            }, i.prototype.getState = function () {
                return this._state
            }, i.prototype._isInOneOfStates = function () {
                for (var t in arguments)if (arguments[t] === this.getState())return !0;
                return !1
            }, i.prototype.getCurrentPosition = function () {
                return this._currentPosition
            }, i.prototype.getLoadedPosition = function () {
                return this._loadedPosition
            }, i.prototype.getDuration = function () {
                return this._duration
            }
        }, function (t, e, n) {
            t.exports = n(37)
        }, function (t, e, n) {
            !function () {
                function n() {
                    return {
                        keys: Object.keys || function (t) {
                            if ("object" != typeof t && "function" != typeof t || null === t)throw new TypeError("keys() called on a non-object");
                            var e, n = [];
                            for (e in t)t.hasOwnProperty(e) && (n[n.length] = e);
                            return n
                        }, uniqueId: function (t) {
                            var e = ++a + "";
                            return t ? t + e : e
                        }, has: function (t, e) {
                            return o.call(t, e)
                        }, each: function (t, e, n) {
                            if (null != t)if (r && t.forEach === r) t.forEach(e, n); else if (t.length === +t.length)for (var i = 0, o = t.length; o > i; i++)e.call(n, t[i], i, t); else for (var s in t)this.has(t, s) && e.call(n, t[s], s, t)
                        }, once: function (t) {
                            var e, n = !1;
                            return function () {
                                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
                            }
                        }
                    }
                }

                var i, r = Array.prototype.forEach, o = Object.prototype.hasOwnProperty, s = Array.prototype.slice, a = 0, u = n();
                i = {
                    on: function (t, e, n) {
                        if (!c(this, "on", t, [e, n]) || !e)return this;
                        this._events || (this._events = {});
                        var i = this._events[t] || (this._events[t] = []);
                        return i.push({callback: e, context: n, ctx: n || this}), this
                    }, once: function (t, e, n) {
                        if (!c(this, "once", t, [e, n]) || !e)return this;
                        var i = this, r = u.once(function () {
                            i.off(t, r), e.apply(this, arguments)
                        });
                        return r._callback = e, this.on(t, r, n)
                    }, off: function (t, e, n) {
                        var i, r, o, s, a, h, l, f;
                        if (!this._events || !c(this, "off", t, [e, n]))return this;
                        if (!t && !e && !n)return this._events = {}, this;
                        for (s = t ? [t] : u.keys(this._events), a = 0, h = s.length; h > a; a++)if (t = s[a], o = this._events[t]) {
                            if (this._events[t] = i = [], e || n)for (l = 0, f = o.length; f > l; l++)r = o[l], (e && e !== r.callback && e !== r.callback._callback || n && n !== r.context) && i.push(r);
                            i.length || delete this._events[t]
                        }
                        return this
                    }, trigger: function (t) {
                        if (!this._events)return this;
                        var e = s.call(arguments, 1);
                        if (!c(this, "trigger", t, e))return this;
                        var n = this._events[t], i = this._events.all;
                        return n && l(n, e), i && l(i, arguments), this
                    }, stopListening: function (t, e, n) {
                        var i = this._listeners;
                        if (!i)return this;
                        var r = !e && !n;
                        "object" == typeof e && (n = this), t && ((i = {})[t._listenerId] = t);
                        for (var o in i)i[o].off(e, n, this), r && delete this._listeners[o];
                        return this
                    }
                };
                var h = /\s+/, c = function (t, e, n, i) {
                    if (!n)return !0;
                    if ("object" == typeof n) {
                        for (var r in n)t[e].apply(t, [r, n[r]].concat(i));
                        return !1
                    }
                    if (h.test(n)) {
                        for (var o = n.split(h), s = 0, a = o.length; a > s; s++)t[e].apply(t, [o[s]].concat(i));
                        return !1
                    }
                    return !0
                }, l = function (t, e) {
                    var n, i = -1, r = t.length, o = e[0], s = e[1], a = e[2];
                    switch (e.length) {
                        case 0:
                            for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o);
                            return;
                        case 2:
                            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o, s);
                            return;
                        case 3:
                            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o, s, a);
                            return;
                        default:
                            for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e)
                    }
                }, f = {listenTo: "on", listenToOnce: "once"};
                u.each(f, function (t, e) {
                    i[e] = function (e, n, i) {
                        var r = this._listeners || (this._listeners = {}), o = e._listenerId || (e._listenerId = u.uniqueId("l"));
                        return r[o] = e, "object" == typeof n && (i = this), e[t](n, i, this), this
                    }
                }), i.bind = i.on, i.unbind = i.off, i.mixin = function (t) {
                    var e = ["on", "once", "off", "trigger", "stopListening", "listenTo", "listenToOnce", "bind", "unbind"];
                    return u.each(e, function (e) {
                        t[e] = this[e]
                    }, this), t
                }, "undefined" != typeof t && t.exports && (e = t.exports = i), e.BackboneEvents = i
            }(this)
        }, function (t, e) {
            t.exports = {
                PLAYING: "playing",
                LOADING: "loading",
                SEEKING: "seeking",
                PAUSED: "paused",
                ERROR: "error",
                IDLE: "idle",
                INITIALIZE: "initialize",
                ENDED: "ended",
                DEAD: "dead"
            }
        }, function (t, e) {
            t.exports = {
                POSITION_CHANGE: "position-change",
                STATE_CHANGE: "state-change",
                DATA: "data",
                NETWORK_TIMEOUT: "network-timeout",
                METADATA: "metadata"
            }
        }, function (t, e, n) {
            var i, r = n(41), o = null;
            t.exports = function (t, e, n, s) {
                if (!i && (i = r(!!s.debug, "audiomanager"), o)) {
                    var a = i;
                    i = function () {
                        a(o(arguments[0] + "%s", Array.prototype.slice.call(arguments, 1)))
                    }
                }
                return n = n && n.length ? " [" + n.replace(/\s/g, "").substr(0, 6) + "]" : "", {log: i.bind(null, "%s (%s)%s", t, e, n)}
            }
        }, function (t, e) {
            function n() {
                function t(t, n) {
                    for (var i, r = arguments.length, o = Array(r > 2 ? r - 2 : 0), s = 2; r > s; s++)o[s - 2] = arguments[s];
                    "string" == typeof n ? n = " " + n : (o.unshift(n), n = ""), (i = window.console)[t].apply(i, [e() + " |" + c + "%c" + n].concat(l, o))
                }

                function e() {
                    var t = new Date, e = null === h ? 0 : t - h;
                    return h = +t, "%c" + r(t.getHours()) + ":" + r(t.getMinutes()) + ":" + r(t.getSeconds()) + "." + i(t.getMilliseconds(), "0", 3) + "%c (%c" + i("+" + e + "ms", " ", 8) + "%c)"
                }

                var n = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0], o = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                if (!n)return s;
                var h = null, c = a(o), l = ["color: green", "color: grey", "color: blue", "color: grey", u(o), ""], f = t.bind(null, "log");
                return f.log = f, ["info", "warn", "error"].forEach(function (e) {
                    f[e] = t.bind(null, e)
                }), f
            }

            function i(t, e, n) {
                return o(e, n - ("" + t).length) + t
            }

            function r(t) {
                return i(t, "0", 2)
            }

            function o(t, e) {
                return e > 0 ? new Array(e + 1).join(t) : ""
            }

            function s() {
            }

            function a(t) {
                return t ? "%c" + t : "%c"
            }

            t.exports = n, s.log = s.info = s.warn = s.error = s;
            var u = function () {
                var t = ["#51613C", "#447848", "#486E5F", "#787444", "#6E664E"], e = 0;
                return function (n) {
                    return n ? "background-color:" + t[e++ % t.length] + ";color:#fff;border-radius:3px;padding:2px 4px;font-family:sans-serif;text-transform:uppercase;font-size:9px;margin:0 4px" : ""
                }
            }()
        }, function (t, e) {
            function n(t) {
                for (var e in r)if (r.hasOwnProperty(e) && void 0 === t[r[e]])throw new Error("Caps lack required field: " + e);
                if (!(t[r.PROTOCOLS] instanceof Array))throw new Error("Caps protocols must be an array");
                if (!(t[r.MIMETYPES] instanceof Array))throw new Error("Caps mimetypes must be an array");
                return !0
            }

            function i() {
                var t = {};
                return t[r.MIMETYPES] = [], t[r.PROTOCOLS] = [], t[r.AUDIO_ONLY] = !0, t[r.CAN_SEEK_ALWAYS] = !0, t[r.NEEDS_URL_REFRESH] = !0, t
            }

            var r = {
                MIMETYPES: "mimetypes",
                PROTOCOLS: "protocols",
                AUDIO_ONLY: "audioOnly",
                CAN_SEEK_ALWAYS: "canSeekAlways",
                NEEDS_URL_REFRESH: "needsUrlRefresh"
            }, o = {createDefaults: i, names: r, validate: n};
            t.exports = o
        }, function (t, e) {
            t.exports = {
                FLASH_HLS_PLAYLIST_NOT_FOUND: "HLS_PLAYLIST_NOT_FOUND",
                FLASH_HLS_PLAYLIST_SECURITY_ERROR: "HLS_SECURITY_ERROR",
                FLASH_HLS_NOT_VALID_PLAYLIST: "HLS_NOT_VALID_PLAYLIST",
                FLASH_HLS_NO_TS_IN_PLAYLIST: "HLS_NO_TS_IN_PLAYLIST",
                FLASH_HLS_NO_PLAYLIST_IN_MANIFEST: "HLS_NO_PLAYLIST_IN_MANIFEST",
                FLASH_HLS_TS_IS_CORRUPT: "HLS_TS_IS_CORRUPT",
                FLASH_HLS_FLV_TAG_CORRUPT: "HLS_FLV_TAG_CORRUPT",
                FLASH_HTTP_FILE_NOT_FOUND: "HTTP_FILE_NOT_FOUND",
                FLASH_RTMP_CONNECT_FAILED: "RTMP_CONNECT_FAILED",
                FLASH_RTMP_CONNECT_CLOSED: "RTMP_CONNECT_CLOSED",
                FLASH_RTMP_CANNOT_PLAY_STREAM: "RTMP_CANNOT_PLAY_STREAM",
                FLASH_PROXY_CANT_LOAD_FLASH: "CANT_LOAD_FLASH",
                FLASH_PROXY_FLASH_BLOCKED: "FLASH_PROXY_FLASH_BLOCKED",
                GENERIC_AUDIO_ENDED_EARLY: "GENERIC_AUDIO_ENDED_EARLY",
                GENERIC_AUDIO_OVERRUN: "GENERIC_AUDIO_OVERRUN",
                HTML5_AUDIO_ABORTED: "HTML5_AUDIO_ABORTED",
                HTML5_AUDIO_NETWORK: "HTML5_AUDIO_NETWORK",
                HTML5_AUDIO_DECODE: "HTML5_AUDIO_DECODE",
                HTML5_AUDIO_SRC_NOT_SUPPORTED: "HTML5_AUDIO_SRC_NOT_SUPPORTED",
                MSE_BAD_OBJECT_STATE: "MSE_BAD_OBJECT_STATE",
                MSE_NOT_SUPPORTED: "MSE_NOT_SUPPORTED",
                MSE_MP3_NOT_SUPPORTED: "MSE_MP3_NOT_SUPPORTED",
                MSE_HLS_NOT_VALID_PLAYLIST: "MSE_HLS_NOT_VALID_PLAYLIST",
                MSE_HLS_PLAYLIST_NOT_FOUND: "MSE_HLS_PLAYLIST_NOT_FOUND",
                MSE_HLS_SEGMENT_NOT_FOUND: "MSE_HLS_SEGMENT_NOT_FOUND"
            }
        }, function (t, e) {
            function n() {
                if (!q && document.getElementsByTagName("body")[0]) {
                    try {
                        var t, e = v("span");
                        e.style.display = "none", t = j.getElementsByTagName("body")[0].appendChild(e), t.parentNode.removeChild(t), t = null, e = null
                    } catch (n) {
                        return
                    }
                    q = !0;
                    for (var i = V.length, r = 0; i > r; r++)V[r]()
                }
            }

            function i(t) {
                q ? t() : V[V.length] = t
            }

            function r(t) {
                if (typeof H.addEventListener != k) H.addEventListener("load", t, !1); else if (typeof j.addEventListener != k) j.addEventListener("load", t, !1); else if (typeof H.attachEvent != k) S(H, "onload", t); else if ("function" == typeof H.onload) {
                    var e = H.onload;
                    H.onload = function () {
                        e(), t()
                    }
                } else H.onload = t
            }

            function o() {
                var t = j.getElementsByTagName("body")[0], e = v(N);
                e.setAttribute("style", "visibility: hidden;"), e.setAttribute("type", F);
                var n = t.appendChild(e);
                if (n) {
                    var i = 0;
                    !function r() {
                        if (typeof n.GetVariable != k)try {
                            var o = n.GetVariable("$version");
                            o && (o = o.split(" ")[1].split(","), Q.pv = [E(o[0]), E(o[1]), E(o[2])])
                        } catch (a) {
                            Q.pv = [8, 0, 0]
                        } else if (10 > i)return i++, void window.setTimeout(r, 10);
                        t.removeChild(e), n = null, s()
                    }()
                } else s()
            }

            function s() {
                var t = z.length;
                if (t > 0)for (var e = 0; t > e; e++) {
                    var n = z[e].id, i = z[e].callbackFn, r = {success: !1, id: n};
                    if (Q.pv[0] > 0) {
                        var o = y(n);
                        if (o)if (!A(z[e].swfVersion) || Q.wk && Q.wk < 312)if (z[e].expressInstall && u()) {
                            var s = {};
                            s.data = z[e].expressInstall, s.width = o.getAttribute("width") || "0", s.height = o.getAttribute("height") || "0", o.getAttribute("class") && (s.styleclass = o.getAttribute("class")), o.getAttribute("align") && (s.align = o.getAttribute("align"));
                            for (var l = {}, f = o.getElementsByTagName("param"), d = f.length, p = 0; d > p; p++)"movie" !== f[p].getAttribute("name").toLowerCase() && (l[f[p].getAttribute("name")] = f[p].getAttribute("value"));
                            h(s, l, n, i)
                        } else c(o), i && i(r); else T(n, !0), i && (r.success = !0, r.ref = a(n), r.id = n, i(r))
                    } else if (T(n, !0), i) {
                        var g = a(n);
                        g && typeof g.SetVariable != k && (r.success = !0, r.ref = g, r.id = g.id), i(r)
                    }
                }
            }

            function a(t) {
                var e = null, n = y(t);
                return n && "OBJECT" === n.nodeName.toUpperCase() && (e = typeof n.SetVariable !== k ? n : n.getElementsByTagName(N)[0] || n), e
            }

            function u() {
                return !X && A("6.0.65") && (Q.win || Q.mac) && !(Q.wk && Q.wk < 312)
            }

            function h(t, e, n, i) {
                var r = y(n);
                if (n = m(n), X = !0, O = i || null, R = {success: !1, id: n}, r) {
                    "OBJECT" === r.nodeName.toUpperCase() ? (I = l(r), L = null) : (I = r, L = n), t.id = U, (typeof t.width == k || !/%$/.test(t.width) && E(t.width) < 310) && (t.width = "310"), (typeof t.height == k || !/%$/.test(t.height) && E(t.height) < 137) && (t.height = "137");
                    var o = Q.ie ? "ActiveX" : "PlugIn", s = "MMredirectURL=" + encodeURIComponent(H.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + o + "&MMdoctitle=" + encodeURIComponent(j.title.slice(0, 47) + " - Flash Player Installation");
                    if (typeof e.flashvars != k ? e.flashvars += "&" + s : e.flashvars = s, Q.ie && 4 !== r.readyState) {
                        var a = v("div");
                        n += "SWFObjectNew", a.setAttribute("id", n), r.parentNode.insertBefore(a, r), r.style.display = "none", g(r)
                    }
                    d(t, e, n)
                }
            }

            function c(t) {
                if (Q.ie && 4 !== t.readyState) {
                    t.style.display = "none";
                    var e = v("div");
                    t.parentNode.insertBefore(e, t), e.parentNode.replaceChild(l(t), e), g(t)
                } else t.parentNode.replaceChild(l(t), t)
            }

            function l(t) {
                var e = v("div");
                if (Q.win && Q.ie) e.innerHTML = t.innerHTML; else {
                    var n = t.getElementsByTagName(N)[0];
                    if (n) {
                        var i = n.childNodes;
                        if (i)for (var r = i.length, o = 0; r > o; o++)1 === i[o].nodeType && "PARAM" === i[o].nodeName || 8 === i[o].nodeType || e.appendChild(i[o].cloneNode(!0))
                    }
                }
                return e
            }

            function f(t, e) {
                var n = v("div");
                return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + t + "'>" + e + "</object>", n.firstChild
            }

            function d(t, e, n) {
                var i, r = y(n);
                if (n = m(n), Q.wk && Q.wk < 312)return i;
                if (r) {
                    var o, s, a, u = v(Q.ie ? "div" : N);
                    typeof t.id == k && (t.id = n);
                    for (a in e)e.hasOwnProperty(a) && "movie" !== a.toLowerCase() && p(u, a, e[a]);
                    Q.ie && (u = f(t.data, u.innerHTML));
                    for (o in t)t.hasOwnProperty(o) && (s = o.toLowerCase(), "styleclass" === s ? u.setAttribute("class", t[o]) : "classid" !== s && "data" !== s && u.setAttribute(o, t[o]));
                    Q.ie ? W[W.length] = t.id : (u.setAttribute("type", F), u.setAttribute("data", t.data)), r.parentNode.replaceChild(u, r), i = u
                }
                return i
            }

            function p(t, e, n) {
                var i = v("param");
                i.setAttribute("name", e), i.setAttribute("value", n), t.appendChild(i)
            }

            function g(t) {
                var e = y(t);
                e && "OBJECT" === e.nodeName.toUpperCase() && (Q.ie ? (e.style.display = "none", function n() {
                    if (4 === e.readyState) {
                        for (var t in e)"function" == typeof e[t] && (e[t] = null);
                        e.parentNode.removeChild(e)
                    } else window.setTimeout(n, 10)
                }()) : e.parentNode.removeChild(e))
            }

            function _(t) {
                return t && t.nodeType && 1 === t.nodeType
            }

            function m(t) {
                return _(t) ? t.id : t
            }

            function y(t) {
                if (_(t))return t;
                var e = null;
                try {
                    e = j.getElementById(t)
                } catch (n) {
                }
                return e
            }

            function v(t) {
                return j.createElement(t)
            }

            function E(t) {
                return parseInt(t, 10)
            }

            function S(t, e, n) {
                t.attachEvent(e, n), K[K.length] = [t, e, n]
            }

            function A(t) {
                t += "";
                var e = Q.pv, n = t.split(".");
                return n[0] = E(n[0]), n[1] = E(n[1]) || 0, n[2] = E(n[2]) || 0, e[0] > n[0] || e[0] === n[0] && e[1] > n[1] || e[0] === n[0] && e[1] === n[1] && e[2] >= n[2]
            }

            function w(t, e, n, i) {
                var r = j.getElementsByTagName("head")[0];
                if (r) {
                    var o = "string" == typeof n ? n : "screen";
                    if (i && (D = null, M = null), !D || M !== o) {
                        var s = v("style");
                        s.setAttribute("type", "text/css"), s.setAttribute("media", o), D = r.appendChild(s), Q.ie && typeof j.styleSheets != k && j.styleSheets.length > 0 && (D = j.styleSheets[j.styleSheets.length - 1]), M = o
                    }
                    D && (typeof D.addRule != k ? D.addRule(t, e) : typeof j.createTextNode != k && D.appendChild(j.createTextNode(t + " {" + e + "}")))
                }
            }

            function T(t, e) {
                if ($) {
                    var n = e ? "visible" : "hidden", i = y(t);
                    q && i ? i.style.visibility = n : "string" == typeof t && w("#" + t, "visibility:" + n)
                }
            }

            function b(t) {
                var e = /[\\\"<>\.;]/, n = null != e.exec(t);
                return n && typeof encodeURIComponent != k ? encodeURIComponent(t) : t
            }

            /*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
             is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
             */
            var P, I, L, O, R, D, M, k = "undefined", N = "object", x = "Shockwave Flash", C = "ShockwaveFlash.ShockwaveFlash", F = "application/x-shockwave-flash", U = "SWFObjectExprInst", B = "onreadystatechange", H = window, j = document, G = navigator, Y = !1, V = [], z = [], W = [], K = [], q = !1, X = !1, $ = !0, Z = !1, Q = function () {
                var t = typeof j.getElementById != k && typeof j.getElementsByTagName != k && typeof j.createElement != k, e = G.userAgent.toLowerCase(), n = G.platform.toLowerCase(), i = n ? /win/.test(n) : /win/.test(e), r = n ? /mac/.test(n) : /mac/.test(e), o = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, s = "Microsoft Internet Explorer" === G.appName, a = [0, 0, 0], u = null;
                if (typeof G.plugins != k && typeof G.plugins[x] == N) u = G.plugins[x].description, u && typeof G.mimeTypes != k && G.mimeTypes[F] && G.mimeTypes[F].enabledPlugin && (Y = !0, s = !1, u = u.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = E(u.replace(/^(.*)\..*$/, "$1")), a[1] = E(u.replace(/^.*\.(.*)\s.*$/, "$1")), a[2] = /[a-zA-Z]/.test(u) ? E(u.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0); else if (typeof H.ActiveXObject != k)try {
                    var h = new ActiveXObject(C);
                    h && (u = h.GetVariable("$version"), u && (s = !0, u = u.split(" ")[1].split(","), a = [E(u[0]), E(u[1]), E(u[2])]))
                } catch (c) {
                }
                return {w3: t, pv: a, wk: o, ie: s, win: i, mac: r}
            }();
            !function () {
                Q.w3 && ((typeof j.readyState != k && ("complete" === j.readyState || "interactive" === j.readyState) || typeof j.readyState == k && (j.getElementsByTagName("body")[0] || j.body)) && n(), q || (typeof j.addEventListener != k && j.addEventListener("DOMContentLoaded", n, !1), Q.ie && (j.attachEvent(B, function t() {
                    "complete" === j.readyState && (j.detachEvent(B, t), n())
                }), H === top && !function e() {
                    if (!q) {
                        try {
                            j.documentElement.doScroll("left")
                        } catch (t) {
                            return void window.setTimeout(e, 0)
                        }
                        n()
                    }
                }()), Q.wk && !function i() {
                    return q ? void 0 : /loaded|complete/.test(j.readyState) ? void n() : void window.setTimeout(i, 0)
                }()))
            }(), V[0] = function () {
                Y ? o() : s()
            }, function () {
                Q.ie && window.attachEvent("onunload", function () {
                    for (var t = K.length, e = 0; t > e; e++)K[e][0].detachEvent(K[e][1], K[e][2]);
                    for (var n = W.length, i = 0; n > i; i++)g(W[i]);
                    for (var r in Q)Q[r] = null;
                    Q = null;
                    for (var o in P)P[o] = null;
                    P = null
                })
            }(), t.exports = P = {
                registerObject: function (t, e, n, i) {
                    if (Q.w3 && t && e) {
                        var r = {};
                        r.id = t, r.swfVersion = e, r.expressInstall = n, r.callbackFn = i, z[z.length] = r, T(t, !1)
                    } else i && i({success: !1, id: t})
                }, getObjectById: function (t) {
                    return Q.w3 ? a(t) : void 0
                }, embedSWF: function (t, e, n, r, o, s, a, c, l, f) {
                    var p = m(e), g = {success: !1, id: p};
                    Q.w3 && !(Q.wk && Q.wk < 312) && t && e && n && r && o ? (T(p, !1), i(function () {
                        n += "", r += "";
                        var i = {};
                        if (l && typeof l === N)for (var _ in l)i[_] = l[_];
                        i.data = t, i.width = n, i.height = r;
                        var m = {};
                        if (c && typeof c === N)for (var y in c)m[y] = c[y];
                        if (a && typeof a === N)for (var v in a)if (a.hasOwnProperty(v)) {
                            var E = Z ? encodeURIComponent(v) : v, S = Z ? encodeURIComponent(a[v]) : a[v];
                            typeof m.flashvars != k ? m.flashvars += "&" + E + "=" + S : m.flashvars = E + "=" + S
                        }
                        if (A(o)) {
                            var w = d(i, m, e);
                            i.id === p && T(p, !0), g.success = !0, g.ref = w, g.id = w.id
                        } else {
                            if (s && u())return i.data = s, void h(i, m, e, f);
                            T(p, !0)
                        }
                        f && f(g)
                    })) : f && f(g)
                }, switchOffAutoHideShow: function () {
                    $ = !1
                }, enableUriEncoding: function (t) {
                    Z = typeof t === k ? !0 : t
                }, ua: Q, getFlashPlayerVersion: function () {
                    return {major: Q.pv[0], minor: Q.pv[1], release: Q.pv[2]}
                }, hasFlashPlayerVersion: A, createSWF: function (t, e, n) {
                    return Q.w3 ? d(t, e, n) : void 0
                }, showExpressInstall: function (t, e, n, i) {
                    Q.w3 && u() && h(t, e, n, i)
                }, removeSWF: function (t) {
                    Q.w3 && g(t)
                }, createCSS: function (t, e, n, i) {
                    Q.w3 && w(t, e, n, i)
                }, addDomLoadEvent: i, addLoadEvent: r, getQueryParamValue: function (t) {
                    var e = j.location.search || j.location.hash;
                    if (e) {
                        if (/\?/.test(e) && (e = e.split("?")[1]), null == t)return b(e);
                        for (var n = e.split("&"), i = 0; i < n.length; i++)if (n[i].substring(0, n[i].indexOf("=")) === t)return b(n[i].substring(n[i].indexOf("=") + 1))
                    }
                    return ""
                }, expressInstallCallback: function () {
                    if (X) {
                        var t = y(U);
                        t && I && (t.parentNode.replaceChild(I, t), L && (T(L, !0), Q.ie && (I.style.display = "block")), O && O(R)), X = !1
                    }
                }, version: "2.3"
            }
        }, function (t, e, n) {
            function i(t, e, n, i) {
                if (n !== s && n !== o && void 0 !== n)throw new Error("Can not use the provided base class");
                this._baseclass = n || o, this._baseclass.call(this, t, e, i || "HLSAudioPlayer"), this._seekPosition = 0
            }

            var r = n(1), o = n(46), s = n(48), a = n(38);
            t.exports = i, r(i.prototype, o.prototype), i.prototype.seek = function (t) {
                this._baseclass.prototype.seek.apply(this, arguments), this._isInOneOfStates(a.LOADING, a.SEEKING) && (this._seekPosition = t)
            }, i.prototype.getCurrentPosition = function () {
                if (this._isInOneOfStates(a.LOADING) && this._seekPosition > 0)return this._seekPosition;
                if (this._isInOneOfStates(a.PLAYING, a.SEEKING)) {
                    if (this._seekPosition >= this._currentPosition)return this._seekPosition;
                    this._seekPosition = 0
                }
                return this._baseclass.prototype.getCurrentPosition.apply(this, arguments)
            }
        }, function (t, e, n) {
            function i(t, e, n) {
                this._duration = 0, this._currentPosition = 0, this._loadedPosition = 0, h.prototype.constructor.call(this, n || "HTML5AudioPlayer", t, e), this._isLoaded = !1, this._prevCurrentPosition = 0, this._prevCheckTime = 0, this._positionUpdateTimer = 0, this._playRequested = !1, this._startFromPosition = 0, this.getDescriptor().duration && (this._duration = this.getDescriptor().duration), this._bindHandlers(), this._initMediaElement(), this.updateState(s.IDLE)
            }

            var r = n(1), o = n(47).bindAll, s = n(38), a = n(39), u = n(43), h = n(35), c = n(16);
            t.exports = i, r(i.prototype, h.prototype), i.MediaAPIEvents = ["ended", "play", "playing", "pause", "seeking", "waiting", "seeked", "error", "loadeddata", "loadedmetadata"], i.prototype.play = function (t) {
                return this._isInOneOfStates(s.ERROR, s.DEAD) ? void this._logger.log("play called but state is ERROR or DEAD") : (this._logger.log("play from " + t), this._startFromPosition = t || 0, this._playRequested = !0, this._isInOneOfStates(s.PAUSED, s.ENDED) ? void this.resume() : (this.updateState(s.LOADING), this._html5Audio.readyState > 0 && this._onLoadedMetadata(), this._html5Audio.readyState > 1 && this._onLoaded(), void(this._isLoaded ? this._playAfterLoaded() : this.once(a.DATA, this._playAfterLoaded))))
            }, i.prototype.pause = function () {
                this._isInOneOfStates(s.ERROR, s.DEAD) || (this._logger.log("pause"), this._playRequested = !1, this._html5Audio && this._html5Audio.pause())
            }, i.prototype.seek = function (t) {
                var e, n = !1, i = t / 1e3, r = this._html5Audio.seekable;
                if (!this._isInOneOfStates(s.ERROR, s.DEAD)) {
                    if (!this._isLoaded)return this.once(a.DATA, function () {
                        this.seek(t)
                    }), void this._logger.log("postponing seek for when loaded");
                    if (c.isIE10Mobile) n = !0; else for (e = 0; e < r.length; e++)if (i <= r.end(e) && i >= r.start(e)) {
                        n = !0;
                        break
                    }
                    if (!n)return void this._logger.log("can not seek");
                    this._logger.log("seek"), this.updateState(s.SEEKING), this._html5Audio.currentTime = i, this._currentPosition = t, this._lastMediaClockCheck = null
                }
            }, i.prototype.resume = function () {
                return this._isInOneOfStates(s.ERROR, s.DEAD) ? void this._logger.log("resume called but state is ERROR or DEAD") : (this._logger.log("resume"), void(this.getState() === s.PAUSED ? (this.updateState(s.PLAYING), this._html5Audio.play(this._html5Audio.currentTime)) : this.getState() === s.ENDED && this._html5Audio.play(0)))
            }, i.prototype.setVolume = function (t) {
                this._html5Audio && (this._html5Audio.volume = t)
            }, i.prototype.getVolume = function () {
                return this._html5Audio ? this._html5Audio.volume : 1
            }, i.prototype.setMute = function (t) {
                this._html5Audio && (this._html5Audio.muted = t)
            }, i.prototype.getMute = function () {
                return this._html5Audio ? this._html5Audio.muted : !1
            }, i.prototype.kill = function () {
                this._state !== s.DEAD && (this._logger.log("killing ..."), this._resetPositionInterval(!1), this._playRequested = !1, this._toggleEventListeners(!1), this.pause(), delete this._html5Audio, this.updateState(s.DEAD), this._logger.log("dead"))
            }, i.prototype.getErrorMessage = function () {
                return this._errorMessage
            }, i.prototype.getErrorID = function () {
                return this._errorID
            }, i.prototype._bindHandlers = function () {
                o(this, ["_onPositionChange", "_onHtml5MediaEvent", "_onLoaded", "_onLoadedMetadata"])
            }, i.prototype._initMediaElement = function () {
                this._html5Audio = c.createAudioElement(), this._html5Audio.id = this.getSettings().audioObjectID + "_" + this.getId(), this._html5Audio.preload = "auto", this._html5Audio.type = this.getDescriptor().mimeType, this._html5Audio.src = this.getDescriptor().src, this._html5Audio.load(), this._toggleEventListeners(!0)
            }, i.prototype._playAfterLoaded = function () {
                this._playRequested && (this._trySeekToStartPosition(), this._html5Audio.play())
            }, i.prototype._isInOneOfStates = function () {
                for (var t in arguments)if (arguments[t] === this._state)return !0;
                return !1
            }, i.prototype._toggleEventListeners = function (t) {
                if (this._html5Audio) {
                    var e = t ? "addEventListener" : "removeEventListener";
                    i.MediaAPIEvents.forEach(function (t) {
                        switch (t) {
                            case"loadeddata":
                                this._html5Audio[e]("loadeddata", this._onLoaded);
                                break;
                            case"loadedmetadata":
                                this._html5Audio[e]("loadedmetadata", this._onLoadedMetadata);
                                break;
                            default:
                                this._html5Audio[e](t, this._onHtml5MediaEvent)
                        }
                    }, this)
                }
            }, i.prototype._trySeekToStartPosition = function () {
                var t;
                return this._startFromPosition > 0 && (this._logger.log("seek to start position: " + this._startFromPosition), t = this._startFromPosition / 1e3, this._html5Audio.currentTime = t, this._html5Audio.currentTime === t) ? (this._lastMediaClockCheck = null, this._currentPosition = this._startFromPosition, this._startFromPosition = 0, !0) : !1
            }, i.prototype._onLoaded = function () {
                this._logger.log("HTML5 media loadeddata event"), this.trigger(a.DATA, this)
            }, i.prototype._onLoadedMetadata = function () {
                this._logger.log("HTML5 media loadedmetadata event"), (void 0 === this._duration || 0 === this._duration) && (this._duration = 1e3 * this._html5Audio.duration), this._loadedPosition = this._duration, this._isLoaded = !0, this.trigger(a.METADATA, this)
            }, i.prototype._resetPositionInterval = function (t) {
                window.clearInterval(this._positionUpdateTimer), t && (this._positionUpdateTimer = window.setInterval(this._onPositionChange, this.getSettings().updateInterval))
            }, i.prototype._onPositionChange = function () {
                if (!this._isInOneOfStates(s.DEAD)) {
                    var t;
                    return Date.now(), this._currentPosition = 1e3 * this._html5Audio.currentTime, this.trigger(a.POSITION_CHANGE, this.getCurrentPosition(), this._loadedPosition, this._duration, this), this._isInOneOfStates(s.PLAYING, s.LOADING) ? 0 !== this._duration && (this._currentPosition > this._duration || this._currentPosition > this._loadedPosition && !c.isIE10Mobile) ? void this._onHtml5MediaEvent({type: "ended"}) : this.getState() !== s.PLAYING || this._mediasHasProgressed() ? void(this.getState() !== s.PLAYING && this._mediasHasProgressed() && this.updateState(s.PLAYING)) : (this._logger.log("media clock check failed, playhead is not advancing anymore"), void this.updateState(s.LOADING)) : void(this._state === s.SEEKING && t > 0 && this.updateState(s.PLAYING))
                }
            }, i.prototype._mediasHasProgressed = function () {
                var t = !1, e = Date.now();
                if (this._lastMediaClockCheck) {
                    var n = e - this._lastMediaClockCheck, i = this._currentPosition - this._lastMediaClockValue;
                    if (.1 * n > i) {
                        if (0 === i && 50 > n)return !0;
                        t = !0
                    }
                }
                return this._lastMediaClockValue = this._currentPosition, this._lastMediaClockCheck = e, !t
            }, i.prototype._onHtml5MediaEvent = function (t) {
                switch (this._logger.log("HTML5 media event: " + t.type), t.type) {
                    case"playing":
                        if (this._trySeekToStartPosition())break;
                        this._onPositionChange(), this._resetPositionInterval(!0), this.updateState(s.PLAYING);
                        break;
                    case"pause":
                        this._onPositionChange(), this._resetPositionInterval(!1), this.updateState(s.PAUSED);
                        break;
                    case"ended":
                        this._currentPosition = this._loadedPosition = this._duration, this._resetPositionInterval(!1), this.updateState(s.ENDED);
                        break;
                    case"waiting":
                        if (this.getState() === s.SEEKING)break;
                        this.updateState(s.LOADING);
                        break;
                    case"seeking":
                        this.updateState(s.SEEKING);
                        break;
                    case"seeked":
                        this._html5Audio.paused ? this.updateState(s.PAUSED) : this.updateState(s.PLAYING), this._onPositionChange(t);
                        break;
                    case"error":
                        this._error(this._html5AudioErrorCodeToErrorId(), !0)
                }
            }, i.prototype._html5AudioErrorCodeToErrorId = function () {
                return {
                    1: u.HTML5_AUDIO_ABORTED,
                    2: u.HTML5_AUDIO_NETWORK,
                    3: u.HTML5_AUDIO_DECODE,
                    4: u.HTML5_AUDIO_SRC_NOT_SUPPORTED
                }[this._html5Audio.error.code]
            }, i.prototype._error = function (t, e) {
                var n = "error: ";
                e && (n = "error (native): "), this._errorID = t, this._errorMessage = this._getErrorMessage(this._errorID), this._logger.log(n + this._errorID + " " + this._errorMessage), this.updateState(s.ERROR), this._toggleEventListeners(!1)
            }, i.prototype._getErrorMessage = function (t) {
                var e = {};
                return e[u.HTML5_AUDIO_ABORTED] = "The fetching process for the media resource was aborted by the user agent at the user's request.", e[u.HTML5_AUDIO_NETWORK] = "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.", e[u.HTML5_AUDIO_DECODE] = "An error of some description occurred while decoding the media resource, after the resource was established to be usable.", e[u.HTML5_AUDIO_SRC_NOT_SUPPORTED] = "The media resource indicated by the src attribute was not suitable.", e[t]
            }
        }, function (t, e) {
            function n(t, e) {
                var n = new Uint8Array(t.byteLength + e.byteLength);
                return n.set(new Uint8Array(t), 0), n.set(new Uint8Array(e), t.byteLength), n
            }

            t.exports = {
                bindAll: function (t, e) {
                    e.forEach(function (e) {
                        t[e] = t[e].bind(t)
                    })
                }, concatBuffersToUint8Array: n
            }
        }, function (t, e, n) {
            function i(t, e, n) {
                u.prototype.constructor.call(this, t, e, n || "HTML5SingleAudioPlayer")
            }

            var r, o = n(1), s = n(16), a = n(39), u = n(46), h = n(38), c = {};
            t.exports = i, o(i.prototype, u.prototype), i._onLoaded = function (t) {
                i._pauseOthersAndForwardEvent("_onLoaded", t)
            }, i._onLoadedMetadata = function (t) {
                i._pauseOthersAndForwardEvent("_onLoadedMetadata", t)
            }, i._onHtml5MediaEvent = function (t) {
                i._pauseOthersAndForwardEvent("_onHtml5MediaEvent", t)
            }, i._pauseOthersAndForwardEvent = function (t, e) {
                Object.keys(c).forEach(function (n) {
                    var i = c[n];
                    n === r ? i[t](e) : i.pause()
                })
            }, i.prototype._initMediaElement = function () {
                i._html5Audio || (i._html5Audio = s.createAudioElement(), i._html5Audio.id = this.getSettings().audioObjectID + "_Single", u.prototype._toggleEventListeners.call(i, !0)), this._toggleEventListeners(!0), this._html5Audio = i._html5Audio, this._logger.log("initialized player for use with: " + this.getDescriptor().src)
            }, i.prototype._toggleEventListeners = function (t) {
                t ? c[this.getId()] = this : delete c[this.getId()]
            }, i.prototype.play = function (t) {
                this._logger.log("singleton play at: " + t), (0 === this._html5Audio.readyState || this.getDescriptor().src !== this._html5Audio.src) && (this._logger.log("setting up audio element for use with: " + this.getDescriptor().src), r = this.getId(), this._isInOneOfStates(h.PAUSED) && (this._logger.log("state was paused"), t = this._currentPosition || 0), this._toggleEventListeners(!0), this._html5Audio.preload = "auto", this._html5Audio.type = this.getDescriptor().mimeType, this._html5Audio.src = this.getDescriptor().src, this._html5Audio.load()), u.prototype.play.call(this, t)
            }, i.prototype.resume = function () {
                return this._isInOneOfStates(h.ERROR, h.DEAD) ? void 0 : r !== this.getId() ? void this.play(this._currentPosition) : void u.prototype.resume.apply(this, arguments)
            }, i.prototype.pause = function () {
                this._isInOneOfStates(h.ERROR, h.DEAD) || (this._logger.log("singleton pause"), r === this.getId() ? u.prototype.pause.apply(this, arguments) : (this._toggleEventListeners(!1), this._isInOneOfStates(h.PAUSED) || this.updateState(h.PAUSED), this._resetPositionInterval(!1)))
            }, i.prototype.seek = function (t) {
                return r !== this.getId() ? (this._currentPosition = t, void this.trigger(a.POSITION_CHANGE, this._currentPosition, this._loadedPosition, this._duration, this)) : void u.prototype.seek.apply(this, arguments)
            }
        }, function (t, e, n) {
            function i(t, e) {
                o.call(this, t, e, s, "HLSSingleAudioPlayer")
            }

            var r = n(1), o = n(45), s = n(48);
            t.exports = i, r(i.prototype, s.prototype, o.prototype)
        }, function (t, e, n) {
            function i(t, e) {
                return u.prototype.constructor.call(this, "HLSMSEPlayer", t, e, w()), o(this, ["_onPositionChange", "_onPlaylistLoaded", "_onPlaylistFailed", "_onSegmentLoaded", "_onSegmentProgress", "_onSegmentFailed", "_onHtml5MediaEvent", "_onLoadedData", "_onLoadedMetadata", "_onMediaSourceAppend", "_onMediaSourceReady", "_onMediaSourceDestroy", "_onMediaSourceError"]), this._streamUrlProvider = this.getSettings().streamUrlProvider || null, this._minPreBufferLengthForPlayback = 5e3, this._maxBufferLength = 3e4, this._streamUrlRetryTimer = null, this._streamUrlTimesFailed = 0, this._playlistRetryTimer = null, this._playlistTimesFailed = 0, this._playlistRefreshInProgress = !1, this._isPlaylistLoaded = !1, this._loadOnInit = !1, this._schedulingSegmentIndex = -1, this._segmentsDownloading = [], this._nextSchedulingTimeout = null, this._mimeType = T(), this._mimeType ? (this._mseToolkit = new l(this._logger, this._mimeType), this._mseToolkit.on(l.Events.SEGMENT_APPENDED, this._onMediaSourceAppend), this._mseToolkit.on(l.Events.SOURCE_READY, this._onMediaSourceReady), this._mseToolkit.on(l.Events.SOURCE_DESTROY, this._onMediaSourceDestroy), this._mseToolkit.on(l.Events.SOURCE_ERROR, this._onMediaSourceError), this._hlsToolkit = new c(this._logger, this.getDescriptor().src), this._hlsToolkit.on(c.Events.SEGMENT_LOADED, this._onSegmentLoaded), this._hlsToolkit.on(c.Events.SEGMENT_PROGRESS, this._onSegmentProgress), this._hlsToolkit.on(c.Events.SEGMENT_FAILED, this._onSegmentFailed), this._hlsToolkit.on(c.Events.PLAYLIST_LOADED, this._onPlaylistLoaded), this._hlsToolkit.on(c.Events.PLAYLIST_FAILED, this._onPlaylistFailed), this._hlsToolkit.on(c.Events.PLAYLIST_PARSE_ERROR, this._onPlaylistFailed), this._html5Audio = this._mseToolkit.media(), void this._toggleEventListeners(!0)) : void this._error(a.MSE_NOT_SUPPORTED)
            }

            var r = n(1), o = n(47).bindAll, s = n(39), a = n(43), u = n(35), h = n(46), c = n(51), l = n(66), f = n(67), d = n(38), p = n(42), g = n(128), _ = n(129), m = n(16), y = 200, v = 500, E = 3, S = 1e4, A = function (t) {
                var e = t / E, n = v * (Math.pow(Math.E, e) / Math.E);
                return n += Math.random() * y, n > S && (n = S), n
            }, w = function () {
                var t = {};
                return t[p.names.PROTOCOLS] = [g.HLS], t[p.names.MIMETYPES] = [_.HLS, _.M3U8, _.MP3], t[p.names.NEEDS_URL_REFRESH] = !1, t
            }, T = function () {
                return m.isMSESupportMPEG() && !m.isNativeHlsSupported() ? "audio/mpeg" : m.isMSESupportMP4() ? "audio/mp4" : null
            };
            t.exports = i, r(i.prototype, u.prototype), i.prototype._onLoadedData = function () {
                this._logger.log("loadeddata event handler"), this.trigger(s.DATA)
            }, i.prototype._onLoadedMetadata = function () {
                this._logger.log("loadedmetadata event handler")
            }, i.prototype._mediasHasProgressed = function () {
                var t = !1, e = Date.now();
                if (this._lastMediaClockCheck) {
                    var n = e - this._lastMediaClockCheck, i = this._currentPosition - this._lastMediaClockValue;
                    if (.1 * n > i) {
                        if (0 === i && 50 > n)return !0;
                        t = !0
                    }
                }
                return this._lastMediaClockValue = this._currentPosition, this._lastMediaClockCheck = e, !t
            }, i.prototype._onPositionChange = function () {
                return this._html5Audio && this.getState() !== d.SEEKING ? (this._currentPosition = 1e3 * this._html5Audio.currentTime, this.getState() !== d.PLAYING || this._mediasHasProgressed() ? (this.getState() !== d.PLAYING && this._mediasHasProgressed() && this.updateState(d.PLAYING), this._triggerPositionEvent(), this._currentPosition >= this._duration ? void this.updateState(d.ENDED) : void 0) : (this._logger.log("media clock check failed, playhead is not advancing anymore"), void this.updateState(d.LOADING))) : void 0
            }, i.prototype._onMediaSourceReady = function () {
                this.getDescriptor().duration && (this._setDuration(this.getDescriptor().duration), this._logger.log("duration set from descriptor to " + this._duration)), this.updateState(d.IDLE), this._loadOnInit && this._loadInitialPlaylist()
            }, i.prototype._onMediaSourceDestroy = function () {
                this.kill()
            }, i.prototype._onMediaSourceError = function (t) {
                this._logger.log("MediaSource API error: " + t.message), this._error(a.MSE_BAD_OBJECT_STATE), this.kill()
            }, i.prototype._onMediaSourceAppend = function (t) {
                this._logger.log("segment appended: " + t.index), this.trigger(s.DATA, t), this._loadedPosition = t.endPosition, this._playRequested && (this._logger.log("triggering playback after appending enough segments"), this._html5Audio.play(this._currentPosition))
            }, i.prototype._onSegmentProgress = function (t) {
                var e = Math.round(t.loaded / t.total * 100);
                this._logger.log("segment " + t.index + " loaded " + t.loaded + " of " + t.total + " bytes (" + e + "%)"), this._loadedPosition = t.endPosition - t.duration * (t.loaded / t.total)
            }, i.prototype._onSegmentLoaded = function (t) {
                return this._mseToolkit.sourceIsReady() ? void this._appendSegments() : void this._logger.log("we have been disposed while loading a segment, noop")
            }, i.prototype._onSegmentFailed = function (t) {
                switch (this._logger.log("segment loading failed handler: " + t.status), t.status) {
                    case c.Status.NOT_FOUND:
                    case c.Status.FORBIDDEN:
                        this._cancelNextScheduling(), this._cancelAllInFlightRequests(), this._refreshPlaylist();
                        break;
                    case c.Status.TIMEOUT:
                        this.trigger(s.NETWORK_TIMEOUT);
                    case c.Status.SERVER_ERROR:
                        if (t.aborted) {
                            this._logger.log("aborted segment has been prevented from being retried");
                            break
                        }
                        t.scheduleRetry(A(t.timesFailed), this._hlsToolkit.loadSegment, this._hlsToolkit);
                        break;
                    case c.Status.FAILED:
                        this._logger.log("WARNING: segment loading failed for unknown reason!");
                        break;
                    default:
                        throw new Error("Invalid status on failed segment: " + t.status)
                }
            }, i.prototype._onPlaylistLoaded = function () {
                return this._logger.log("playlist loaded handler"), this._mseToolkit.sourceIsReady() ? (this._playlistRefreshInProgress && (this._cancelNextScheduling(), this._runScheduling()), this._playlistRefreshInProgress = !1, this._playlistTimesFailed = 0, this._isPlaylistLoaded = !0, this._inspectEncryptionData(), this._setDuration(this._hlsToolkit.getDuration()), this._logger.log("duration set from playlist info to " + this._duration), void this.trigger(s.METADATA)) : void this._logger.log("we have been disposed while loading the playlist, noop")
            }, i.prototype._onPlaylistFailed = function (t) {
                return this._logger.log("playlist loading failed handler. HTTP status code is " + t), this._mseToolkit.sourceIsReady() ? (this._logger.log("Playlist loading failed  " + this._playlistTimesFailed + " times before"), this._playlistTimesFailed++, this._playlistRetryTimer = window.setTimeout(function () {
                    this.hasStreamUrlProvider() ? this._refreshPlaylist() : this._hlsToolkit.updatePlaylist()
                }.bind(this), A(this._playlistTimesFailed)), void(0 === t && this.trigger(s.NETWORK_TIMEOUT))) : void this._logger.log("we have been disposed while loading the playlist, noop")
            }, i.prototype.afterStateChange = function (t, e) {
                switch (e) {
                    case d.PLAYING:
                        this._runScheduling();
                        break;
                    case d.PAUSED:
                        this._cancelNextScheduling()
                }
            }, i.prototype._onHtml5MediaEvent = function (t) {
                switch (this._logger.log('HTML5 media event "' + t.type + '"'), this._waitingToPause = !1, t.type) {
                    case"playing":
                        this._playRequested = !1, this._triggerPositionEvent(), this._resetPositionTimer(!0), this.updateState(d.PLAYING);
                        break;
                    case"pause":
                        this._triggerPositionEvent(), this._resetPositionTimer(!1), this.updateState(d.PAUSED);
                        break;
                    case"ended":
                        this._currentPosition = this._loadedPosition = this._duration, this._triggerPositionEvent(), this._resetPositionTimer(!1), this.updateState(d.ENDED);
                        break;
                    case"waiting":
                        if (this.getState() === d.SEEKING)break;
                        this.updateState(d.LOADING);
                        break;
                    case"seeking":
                        this._triggerPositionEvent(), this.updateState(d.SEEKING);
                        break;
                    case"seeked":
                        this._html5Audio.paused ? this.updateState(d.PAUSED) : this.updateState(d.PLAYING), this._onPositionChange();
                        break;
                    case"error":
                        this._error(this._html5AudioErrorCodeToErrorId(), !0)
                }
            }, i.prototype._toggleEventListeners = function (t) {
                if (this._html5Audio) {
                    var e = t ? "addEventListener" : "removeEventListener";
                    h.MediaAPIEvents.forEach(function (t) {
                        switch (t) {
                            case"loadeddata":
                                this._html5Audio[e]("loadeddata", this._onLoadedData);
                                break;
                            case"loadedmetadata":
                                this._html5Audio[e]("loadedmetadata", this._onLoadedMetadata);
                                break;
                            case"timeupdate":
                            default:
                                this._html5Audio[e](t, this._onHtml5MediaEvent)
                        }
                    }, this)
                }
            }, i.prototype._loadInitialPlaylist = function () {
                this.updateState(d.LOADING), this._hlsToolkit.updatePlaylist()
            }, i.prototype._refreshPlaylist = function () {
                this.hasStreamUrlProvider() && (this._playlistRefreshfInProgress || (this._playlistRefreshInProgress = !0, this._streamUrlProvider().done(function (t) {
                    this._logger.log("got new M3u8 URL: " + t), this._streamUrlTimesFailed = 0, this._hlsToolkit.setUri(t), this._hlsToolkit.updatePlaylist()
                }.bind(this)).fail(function () {
                    this._logger.log("failed to retrieve stream URL :("), this._streamUrlRetryTimer = window.setTimeout(function () {
                        this._playlistRefreshInProgress = !1, this._refreshPlaylist()
                    }.bind(this), A(++this._streamUrlTimesFailed))
                }.bind(this))))
            }, i.prototype._setDuration = function (t) {
                this._duration = t;
                try {
                    this._mseToolkit.duration(this._duration)
                } catch (e) {
                    this._onMediaSourceError(e)
                }
            }, i.prototype._resetPositionTimer = function (t) {
                window.clearInterval(this._positionUpdateTimer), t && (this._positionUpdateTimer = window.setInterval(this._onPositionChange, this.getSettings().updateInterval))
            }, i.prototype._triggerPositionEvent = function () {
                this.trigger(s.POSITION_CHANGE, this._currentPosition, this._loadedPosition, this._duration, this)
            }, i.prototype._initTransmuxerOnce = function (t, e) {
                if (!this._transmuxer) {
                    var n = this._mimeType !== t.mimeType ? f.Configs.MP3_TO_FMP4 : f.Configs.VOID;
                    this._transmuxer = new f(n), this._transmuxer.on("segment", function (t) {
                        this._logger.log("transmuxed data ready, " + t.data.length + " bytes for segment " + t.index), e(t)
                    }.bind(this))
                }
            }, i.prototype._transmuxSegment = function (t, e) {
                this._logger.log("transmuxing segment " + t.index), this._initTransmuxerOnce(t, e), this._transmuxer.process(t)
            }, i.prototype._appendSegments = function () {
                var t = !0;
                this._segmentsDownloading.slice().forEach(function (e) {
                    e.isComplete() && t ? (this._decryptSegment(e), this._transmuxSegment(e, function (t) {
                        this._mseToolkit.append(t)
                    }.bind(this)), this._segmentsDownloading.shift()) : t = !1
                }, this)
            }, i.prototype._cancelNextScheduling = function () {
                this._logger.log("cancelling next scheduling"), window.clearTimeout(this._nextSchedulingTimeout), this._nextSchedulingTimeout = null
            }, i.prototype._getBufferUntilTime = function () {
                return this._currentPosition + this._maxBufferLength
            }, i.prototype._getCurrentSegment = function () {
                return this._schedulingSegmentIndex > 0 ? this._hlsToolkit.getSegment(this._schedulingSegmentIndex) : this._hlsToolkit.getSegmentForTime(this._currentPosition)
            }, i.prototype._runScheduling = function () {
                function t() {
                    var e = !1, n = this._getBufferUntilTime(), i = this._getCurrentSegment(), r = i ? i.duration : Math.Infinity;
                    if (this._logger.log("scheduling next requests, current buffer-until time: " + n + " ms"), !i)return void this._logger.log("no segment to schedule, closing loop");
                    for (this._logger.log("current segment index: " + i.index); i.endPosition <= n;) {
                        if (this._logger.log("scheduling loop at " + this._currentPosition + " ms, current segment " + i.index), this._requestSegment(i), i.isLast) {
                            e = !0, this._logger.log("end of playlist reached");
                            break
                        }
                        this._schedulingSegmentIndex = i.index + 1, i = this._hlsToolkit.getSegment(this._schedulingSegmentIndex)
                    }
                    this._isInOneOfStates(d.DEAD, d.PAUSED) || e ? (this._logger.log("not re-scheduling"), this._nextSchedulingTimeout = null) : (this._logger.log("timing next check for more data in " + r + " ms"), this._nextSchedulingTimeout = window.setTimeout(t.bind(this), r))
                }

                this._nextSchedulingTimeout || t.call(this)
            }, i.prototype._cancelAllInFlightRequests = function () {
                this._schedulingSegmentIndex = -1, this._segmentsDownloading.forEach(function (t) {
                    t.isComplete() || t.cancel()
                }), this._segmentsDownloading = []
            }, i.prototype._requestSegment = function (t) {
                return this._segmentsDownloading.push(t), t.isComplete() ? (this._logger.log("requested data is already loaded from segment " + t.index), void this._onSegmentLoaded(t)) : t.hasBeenRequested() || t.hasFailed() ? void this._logger.log("segment already in flight or failed (will retry): " + t.timesFailed + " times") : void this._hlsToolkit.loadSegment(t)
            }, i.prototype._decryptSegment = function (t) {
                this._hlsToolkit.isAES128Encrypted() && this._hlsToolkit.decryptSegmentAES128(t)
            }, i.prototype._inspectEncryptionData = function () {
                this._hlsToolkit.isAES128Encrypted() && (this._logger.log("got key of byte length " + this._hlsToolkit.getEncryptionKey().byteLength), this._hlsToolkit.getEncryptionIv() ? this._logger.log("got IV of byte length " + this._hlsToolkit.getEncryptionIv().byteLength) : this._logger.log("no IV found in header, will use per-segment-index IV"))
            }, i.prototype._html5AudioErrorCodeToErrorId = function () {
                return {
                    1: a.HTML5_AUDIO_ABORTED,
                    2: a.HTML5_AUDIO_NETWORK,
                    3: a.HTML5_AUDIO_DECODE,
                    4: a.HTML5_AUDIO_SRC_NOT_SUPPORTED
                }[this._html5Audio.error.code]
            }, i.prototype._error = function (t, e) {
                this._errorID = t, this._errorMessage = this._getErrorMessage(this._errorID), e && this._html5Audio.error && (this._errorMessage += " (native message: " + this._html5Audio.error.message + ")"), this._logger.log(this._errorID + " " + this._errorMessage), this.updateState(d.ERROR), this._toggleEventListeners(!1)
            }, i.prototype._getErrorMessage = function (t) {
                var e = {};
                return e[a.MSE_NOT_SUPPORTED] = "The browser does not support MediaSource API", e[a.MSE_BAD_OBJECT_STATE] = "MediaSource API has thrown an exception", e[t] ? "Error: " + t + " (" + e[t] + ")" : "Error: " + t
            }, i.prototype.setVolume = function (t) {
                this._html5Audio && (this._html5Audio.volume = t)
            }, i.prototype.getVolume = function () {
                return this._html5Audio ? this._html5Audio.volume : 1
            }, i.prototype.setMute = function (t) {
                this._html5Audio && (this._html5Audio.muted = t)
            }, i.prototype.getMute = function () {
                return this._html5Audio ? this._html5Audio.muted : !1
            }, i.prototype.getErrorID = function () {
                return this._errorID
            }, i.prototype.play = function (t) {
                return this._isInOneOfStates(d.ERROR, d.DEAD) ? void this._logger.log("play called but state is ERROR or DEAD") : this._isInOneOfStates(d.IDLE, d.INITIALIZE) ? (t = t || 0, this._logger.log("play from " + t), this._playRequested = !0, this.seek(t), this.getState() === d.INITIALIZE ? void(this._loadOnInit = !0) : void this._loadInitialPlaylist()) : void this.resume()
            }, i.prototype.pause = function () {
                this._html5Audio && (this._playRequested = !1, this._html5Audio.pause())
            }, i.prototype.seek = function (t) {
                if (!this._isInOneOfStates(d.ERROR, d.DEAD)) {
                    if (!this._isPlaylistLoaded)return void this.once(s.METADATA, function () {
                        this.seek(t)
                    }.bind(this));
                    if (t > this._duration)return void this._logger.log("can not seek to position over duration");
                    this._logger.log("seek to " + t + " ms"), this.updateState(d.SEEKING), this._lastMediaClockCheck = null, this._currentPosition = t;
                    try {
                        this._html5Audio.currentTime = t / 1e3
                    } catch (e) {
                        this._logger.log("error seeking: " + e.message)
                    }
                    this._cancelAllInFlightRequests(), this._cancelNextScheduling(), this._runScheduling()
                }
            }, i.prototype.resume = function () {
                this._html5Audio && (this._logger.log("resume from " + this._currentPosition), this._html5Audio.play(1e3 * this._currentPosition))
            }, i.prototype.kill = function () {
                this.getState() !== d.DEAD && (this._logger.log("kill"), this._resetPositionTimer(!1), this._cancelNextScheduling(), this._cancelAllInFlightRequests(), window.clearTimeout(this._playlistRetryTimer), window.clearTimeout(this._streamUrlRetryTimer), this._playRequested = !1, this._toggleEventListeners(!1), this._html5Audio.pause(), this.updateState(d.DEAD))
            }, i.prototype.getErrorMessage = function () {
                return this._errorMessage
            }, i.prototype.hasStreamUrlProvider = function () {
                return !!this._streamUrlProvider
            }
        }, function (t, e, n) {
            var i, r = n(1), o = n(52), s = n(58), a = null, u = n(36), h = {
                NEW: "new",
                REQUESTED: "requested",
                COMPLETE: "complete",
                TIMEOUT: "timeout",
                FORBIDDEN: "forbidden",
                NOT_FOUND: "not-found",
                SERVER_ERROR: "server-error",
                FAILED: "failed"
            }, c = {
                FIRST: "#EXTM3U",
                PLAYLIST: "#EXT-X-STREAM-INF:",
                SEGMENT: "#EXTINF:",
                END_TAG: "#EXT-X-ENDLIST",
                ENCRYPTION: "#EXT-X-KEY:"
            };
            t.exports = i = function (t, e) {
                this._logger = t, this._duration = 0, this.setUri(e)
            }, i.Events = {
                PLAYLIST_LOADED: "playlist-loaded",
                PLAYLIST_PARSE_ERROR: "playlist-parse-error",
                PLAYLIST_FAILED: "playlist-failed",
                SEGMENT_LOADED: "segment-loaded",
                SEGMENT_PROGRESS: "segment-progress",
                SEGMENT_FAILED: "segment-failed",
                SEGMENT_CANCELED: "segment-canceled"
            }, i.Status = h, r(i.prototype, u), i.Segment = function (t, e, n, i, o) {
                r(this, {
                    toolkit: t,
                    uri: e,
                    startPosition: n,
                    endPosition: n + i,
                    duration: i,
                    index: o,
                    data: null,
                    status: h.NEW,
                    isLast: !1,
                    timesFailed: 0,
                    loaded: 0,
                    total: -1,
                    aborted: !1,
                    xhr: null,
                    mimeType: "audio/mpeg"
                }), this._logger = t._logger
            }, i.Segment.prototype.containsTime = function (t) {
                return t >= this.startPosition && t <= this.endPosition
            }, i.Segment.prototype.isComplete = function () {
                return this.status === h.COMPLETE
            }, i.Segment.prototype.hasFailed = function () {
                return this.status === h.TIMEOUT || this.status === h.FORBIDDEN || this.status === h.NOT_FOUND || this.status === h.SERVER_ERROR || this.status === h.FAILED
            }, i.Segment.prototype.isNew = function () {
                return this.status === h.NEW
            }, i.Segment.prototype.hasBeenRequested = function () {
                return this.status === h.REQUESTED
            }, i.Segment.prototype.scheduleRetry = function (t, e, n) {
                var i = this;
                this._retryTimer = window.setTimeout(function () {
                    e.call(n, i)
                }, t)
            }, i.Segment.prototype.cancel = function () {
                this._logger.log("segment cancelled, clearing timeout: " + this.index), window.clearTimeout(this._retryTimer), this.xhr && (this._logger.log("will abort & reset segment: " + this.index), this.status = h.NEW, this.aborted = !0, this.data = null, this.timesFailed = 0, this.xhr.abort(), this.xhr = null, this.toolkit.trigger(i.Events.SEGMENT_CANCELED, this));
            }, i.prototype.setUri = function (t) {
                var e = this._uri = t;
                e.indexOf("?") > -1 && (e = e.substr(0, e.indexOf("?"))), this._baseURI = e.substr(0, e.lastIndexOf("/") + 1)
            }, i.prototype.updatePlaylist = function () {
                var t = !1, e = new XMLHttpRequest;
                e.open("GET", this._uri, !0), e.responseType = "text", this._logger.log("downloading playlist");
                var n = function (n) {
                    t || (t = !0, this.trigger(i.Events.PLAYLIST_FAILED, e.status))
                }.bind(this);
                e.onload = function (t) {
                    return 200 !== e.status ? void n() : (this._segments = [], this._duration = 0, this._parsePlaylist(e.responseText) ? (this.getLastSegment().isLast = !0, this._logger.log("playlist download complete"), void this._retrieveEncryptionKey(function () {
                        this.trigger(i.Events.PLAYLIST_LOADED)
                    })) : (this._logger.log("error parsing playlist"), void this.trigger(i.Events.PLAYLIST_PARSE_ERROR)))
                }.bind(this), e.onerror = function (t) {
                    n(t)
                }.bind(this), e.send()
            }, i.prototype._parsePlaylist = function (t) {
                for (var e, n, r, o = t.split("\n"), s = !1, a = 0, u = 0; a < o.length;)e = o[a++], 0 === e.indexOf(c.SEGMENT) ? (r = 1e3 * Number(e.substr(8, e.indexOf(",") - 8)), n = this._createSegmentURL(o[a]), this._addSegment(new i.Segment(this, n, this._duration, r, u++)), a++) : 0 === e.indexOf(c.ENCRYPTION) ? this._parsePlaylistEncryptionHeader(e) : 0 === e.indexOf(c.END_TAG) && (s = !0);
                return !(0 === this.getNumSegments() || !s)
            }, i.prototype._addSegment = function (t) {
                this._segments.push(t), this._duration += t.duration
            }, i.prototype._parsePlaylistEncryptionHeader = function (t) {
                var e, n, i, r = t.substr(c.ENCRYPTION.length).split(",");
                if (s(r, function (t) {
                        t.indexOf("METHOD") >= 0 ? n = t.split("=")[1] : t.indexOf("URI") >= 0 ? e = t.split("=")[1] : t.indexOf("IV") >= 0 && (i = t.split("=")[1])
                    }), !(n && e && n.length && e.length))throw new Error("Failed to parse M3U8 encryption header");
                n = n.trim(), e = e.trim().replace(/"/g, ""), this._encryptionMethod = n, this._encryptionKeyUri = e, i && i.length ? (this._encryptionIvHexString = i.trim(), this._parseEncryptionIvHexString()) : this._encryptionIv = null
            }, i.prototype._parseEncryptionIvHexString = function () {
                var t, e = this._encryptionIvHexString.replace("0x", ""), n = new Uint16Array(8), i = 0;
                if (e.length % 4 !== 0)throw new Error("Failed to parse M3U8 encryption IV (length is not multiple of 4)");
                for (; i < e.length; i += 4) {
                    if (t = parseInt(e.substr(i, 4), 16), isNaN(t))throw new Error("Failed to parse hex number in IV string");
                    n[i / 4] = t
                }
                this._encryptionIv = n
            }, i.prototype._encryptionIvForSegment = function (t) {
                var e = new DataView(new ArrayBuffer(16));
                return e.setUint32(0, t.index, !0), e.buffer
            }, i.prototype._retrieveEncryptionKey = function (t) {
                if (t) {
                    if (!this._encryptionKeyUri)return void t.call(this);
                    var e = this._encryptionKeyUri, n = new XMLHttpRequest;
                    n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = o(function (i) {
                        200 === n.status ? this._encryptionKey = new Uint8Array(n.response) : this._logger.log("Failed to retrieve encryption key from " + e + ", returned status " + n.status), t.call(this)
                    }, this), n.send(), this._logger.log("Downloading encryption key from " + e)
                }
            }, i.prototype._removeEncryptionPaddingBytes = function (t) {
                var e = t.data[t.data.byteLength - 1];
                e ? (this._logger.log("Detected PKCS7 padding length of " + e + " bytes, slicing segment."), t.data = t.data.subarray(0, t.data.byteLength - e)) : this._logger.log("No padding detected (last byte is zero)")
            }, i.prototype.decryptSegmentAES128 = function (t) {
                if (this._logger.log("Decrypting AES-128 cyphered segment ..."), !a)throw new Error("AES decryption not built-in");
                var e = a.cipher.createDecipher("AES-CBC", a.util.createBuffer(this._encryptionKey)), n = 0, i = t.data.byteLength, r = this._encryptionIv || this._encryptionIvForSegment(t);
                for (this._logger.log("Using IV ->"), e.start({iv: a.util.createBuffer(r)}), e.update(a.util.createBuffer(t.data)), e.finish(), t.data = new Uint8Array(i); i > n; n++)t.data[n] = e.output.getByte();
                this._removeEncryptionPaddingBytes(t)
            }, i.prototype.isAES128Encrypted = function () {
                return "AES-128" === this._encryptionMethod
            }, i.prototype.getEncryptionKeyUri = function () {
                return this._encryptionKeyUri
            }, i.prototype.getEncryptionIv = function () {
                return this._encryptionIv
            }, i.prototype.getEncryptionKey = function () {
                return this._encryptionKey
            }, i.prototype._createSegmentURL = function (t) {
                return "http://" === t.substr(0, 7) || "https://" === t.substr(0, 8) || "/" === t.substr(0, 1) ? t : this._baseURI + t
            }, i.prototype._handleLoadSegmentFailure = function (t, e, n) {
                t.aborted || (this._logger.log("segment aborted: " + t.aborted), this._logger.log("segment loading failure: HTTP response status: " + e.status), 0 === e.status ? t.status = h.TIMEOUT : 403 === e.status ? t.status = h.FORBIDDEN : 404 === e.status ? t.status = h.NOT_FOUND : e.status >= 500 ? t.status = h.SERVER_ERROR : t.status = h.FAILED, t.timesFailed++, this.trigger(i.Events.SEGMENT_FAILED, t))
            }, i.prototype.loadSegment = function (t) {
                var e = !1, n = new XMLHttpRequest, r = t.uri, o = function (i) {
                    e || (e = !0, this._handleLoadSegmentFailure(t, n, i))
                }.bind(this);
                (t.hasBeenRequested() || t.isComplete()) && this._logger.log("segment cant be loaded, requested: ", !!t.hasBeenRequested(), " complete: ", t.isComplete()), n.open("GET", r, !0), n.responseType = "arraybuffer", n.onload = function () {
                    if (!t.aborted) {
                        if (200 !== n.status)return void o();
                        this._logger.log("download of segment " + t.index + " complete"), t.status = h.COMPLETE, t.data = new Uint8Array(n.response), t.downloadTime = Date.now() - t.downloadStartTime, this.trigger(i.Events.SEGMENT_LOADED, t)
                    }
                }.bind(this), n.onprogress = function (e) {
                    t.aborted || e.loaded && e.total && (t.loaded = e.loaded, t.total = e.total, this.trigger(i.Events.SEGMENT_PROGRESS, t))
                }.bind(this), n.onerror = function (t) {
                    o(t)
                }.bind(this), this._logger.log("requesting segment " + t.index + " from " + r), t.xhr = n, t.aborted = !1, t.downloadStartTime = Date.now(), t.status = h.REQUESTED, n.send()
            }, i.prototype.getSegment = function (t) {
                return this._segments && this._segments[t] ? this._segments[t] : null
            }, i.prototype.getSegmentIndexForTime = function (t) {
                var e, n;
                if (t > this._duration || 0 > t || !this._segments || 0 === this._segments.length)return -1;
                for (e = Math.floor(this._segments.length * (t / this._duration)), n = this._segments[e]; !(n.startPosition <= t && n.startPosition + n.duration > t);)n.startPosition + n.duration >= t ? e-- : e++, n = this._segments[e];
                return e
            }, i.prototype.getSegmentForTime = function (t) {
                var e = this.getSegmentIndexForTime(t);
                return e >= 0 ? this._segments[e] : null
            }, i.prototype.getDuration = function () {
                return this._duration
            }, i.prototype.getNumSegments = function () {
                return this._segments.length
            }, i.prototype.getLastSegment = function () {
                return this._segments.length ? this._segments[this._segments.length - 1] : null
            }
        }, function (t, e, n) {
            var i = n(53), r = n(56), o = n(57), s = 1, a = 32, u = o(function (t, e, n) {
                var o = s;
                if (n.length) {
                    var h = r(n, u.placeholder);
                    o |= a
                }
                return i(t, o, e, n, h)
            });
            u.placeholder = {}, t.exports = u
        }, function (t, e, n) {
            (function (e) {
                function i(t, e, n) {
                    for (var i = n.length, r = -1, o = P(t.length - i, 0), s = -1, a = e.length, u = Array(a + o); ++s < a;)u[s] = e[s];
                    for (; ++r < i;)u[n[r]] = t[r];
                    for (; o--;)u[s++] = t[r++];
                    return u
                }

                function r(t, e, n) {
                    for (var i = -1, r = n.length, o = -1, s = P(t.length - r, 0), a = -1, u = e.length, h = Array(s + u); ++o < s;)h[o] = t[o];
                    for (var c = o; ++a < u;)h[c + a] = e[a];
                    for (; ++i < r;)h[c + n[i]] = t[o++];
                    return h
                }

                function o(t, n) {
                    function i() {
                        var o = this && this !== e && this instanceof i ? r : t;
                        return o.apply(n, arguments)
                    }

                    var r = s(t);
                    return i
                }

                function s(t) {
                    return function () {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                            case 5:
                                return new t(e[0], e[1], e[2], e[3], e[4]);
                            case 6:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                            case 7:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                        }
                        var n = p(t.prototype), i = t.apply(n, e);
                        return f(i) ? i : n
                    }
                }

                function a(t, n, o, u, h, c, f, p, T, b) {
                    function I() {
                        for (var y = arguments.length, v = y, E = Array(y); v--;)E[v] = arguments[v];
                        if (u && (E = i(E, u, h)), c && (E = r(E, c, f)), D || k) {
                            var w = I.placeholder, x = g(E, w);
                            if (y -= x.length, b > y) {
                                var C = p ? d(p) : void 0, F = P(b - y, 0), U = D ? x : void 0, B = D ? void 0 : x, H = D ? E : void 0, j = D ? void 0 : E;
                                n |= D ? S : A, n &= ~(D ? A : S), M || (n &= ~(_ | m));
                                var G = a(t, n, o, H, U, j, B, C, T, F);
                                return G.placeholder = w, G
                            }
                        }
                        var Y = O ? o : this, V = R ? Y[t] : t;
                        return p && (E = l(E, p)), L && T < E.length && (E.length = T), this && this !== e && this instanceof I && (V = N || s(t)), V.apply(Y, E)
                    }

                    var L = n & w, O = n & _, R = n & m, D = n & v, M = n & y, k = n & E, N = R ? void 0 : s(t);
                    return I
                }

                function u(t, n, i, r) {
                    function o() {
                        for (var n = -1, s = arguments.length, h = -1, c = r.length, l = Array(c + s); ++h < c;)l[h] = r[h];
                        for (; s--;)l[h++] = arguments[++n];
                        var f = this && this !== e && this instanceof o ? u : t;
                        return f.apply(a ? i : this, l)
                    }

                    var a = n & _, u = s(t);
                    return o
                }

                function h(t, e, n, i, r, s, h, c) {
                    var l = e & m;
                    if (!l && "function" != typeof t)throw new TypeError(T);
                    var f = i ? i.length : 0;
                    if (f || (e &= ~(S | A), i = r = void 0), f -= r ? r.length : 0, e & A) {
                        var d = i, p = r;
                        i = r = void 0
                    }
                    var g = [t, e, n, i, r, d, p, s, h, c];
                    if (g[9] = null == c ? l ? 0 : t.length : P(c - f, 0) || 0, e == _)var y = o(g[0], g[2]); else y = e != S && e != (_ | S) || g[4].length ? a.apply(void 0, g) : u.apply(void 0, g);
                    return y
                }

                function c(t, e) {
                    return t = "number" == typeof t || b.test(t) ? +t : -1, e = null == e ? L : e, t > -1 && t % 1 == 0 && e > t
                }

                function l(t, e) {
                    for (var n = t.length, i = I(e.length, n), r = d(t); i--;) {
                        var o = e[i];
                        t[i] = c(o, n) ? r[o] : void 0
                    }
                    return t
                }

                function f(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                var d = n(54), p = n(55), g = n(56), _ = 1, m = 2, y = 4, v = 8, E = 16, S = 32, A = 64, w = 128, T = "Expected a function", b = /^\d+$/, P = Math.max, I = Math.min, L = 9007199254740991;
                t.exports = h
            }).call(e, function () {
                return this
            }())
        }, function (t, e) {
            function n(t, e) {
                var n = -1, i = t.length;
                for (e || (e = Array(i)); ++n < i;)e[n] = t[n];
                return e
            }

            t.exports = n
        }, function (t, e) {
            function n(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            var i = function () {
                function t() {
                }

                return function (e) {
                    if (n(e)) {
                        t.prototype = e;
                        var i = new t;
                        t.prototype = void 0
                    }
                    return i || {}
                }
            }();
            t.exports = i
        }, function (t, e) {
            function n(t, e) {
                for (var n = -1, r = t.length, o = -1, s = []; ++n < r;)t[n] === e && (t[n] = i, s[++o] = n);
                return s
            }

            var i = "__lodash_placeholder__";
            t.exports = n
        }, 11, function (t, e, n) {
            function i(t, e) {
                return function (n, i, r) {
                    return "function" == typeof i && void 0 === r && a(n) ? t(n, i) : e(n, s(i, r, 3))
                }
            }

            var r = n(59), o = n(60), s = n(65), a = n(64), u = i(r, o);
            t.exports = u
        }, function (t, e) {
            function n(t, e) {
                for (var n = -1, i = t.length; ++n < i && e(t[n], n, t) !== !1;);
                return t
            }

            t.exports = n
        }, [134, 61], [132, 62, 63, 64], 5, 6, 7, 9, function (t, e, n) {
            var i, r = n(36), o = n(16), s = n(47).bindAll, a = n(1);
            t.exports = i = function (t, e) {
                s(this, ["_onMSEInit", "_onMSEDispose", "_onSourceBufferUpdate"]), this.mimeType = e, this._logger = t, this._isBufferPrepared = !1, this._sourceBufferPtsOffset = 0, this._segmentsAwaitingAppendance = [], this._isNotReady = !0, this._sourceBuffer = null, this._mediaSource = new MediaSource, this._mediaSource.addEventListener("sourceopen", this._onMSEInit, !1), this._mediaSource.addEventListener("sourceclose", this._onMSEDispose, !1), this._mediaElem = o.createAudioElement(), this._mediaElem.src = window.URL.createObjectURL(this._mediaSource)
            }, i.Events = {
                SOURCE_READY: "source-ready",
                SOURCE_DESTROYED: "source-destroy",
                SOURCE_ERROR: "source-error",
                SEGMENT_APPENDED: "segment-appended"
            }, a(i.prototype, r), a(i.prototype, {
                _onMSEInit: function () {
                    this._logger.log("source open handler"), this._isNotReady = !1, this._mediaSource.removeEventListener("sourceopen", this._onMSEInit, !1), this._sourceBuffer = this._mediaSource.addSourceBuffer(this.mimeType), this._sourceBuffer.addEventListener("update", this._onSourceBufferUpdate), this.trigger(i.Events.SOURCE_READY)
                }, _onMSEDispose: function () {
                    this._isNotReady = !0, this._logger.log("source dispose handler"), this._mediaSource.removeEventListener("sourceclose", this._onMSEDispose, !1)
                }, _appendNextSegment: function (t) {
                    try {
                        if (this._sourceBuffer.updating)return this._logger.log("source buffer is busy updating already, enqueuing data for later appending"), void this._segmentsAwaitingAppendance.unshift(t);
                        t.isLast && this._logger.log("about to append last segment"), this._currentSegmentAppending = t, this._sourceBuffer.timestampOffset = t.startPosition / 1e3, this._sourceBuffer.appendBuffer(t.data), this._logger.log("appending segment " + t.index)
                    } catch (e) {
                        this._logger.log("error while appending to SourceBuffer: " + e.message + ")"), this.trigger(i.Events.SOURCE_ERROR, e)
                    }
                }, _tryAppendEos: function () {
                    this._logger.log("attempting to finalize stream");
                    try {
                        "open" !== this._mediaSource.readyState || this._sourceBuffer.updating ? this._logger.log("couldn't call endOfStream because SourceBuffer is still updating, we'll call it once its done") : (this._mediaSource.endOfStream(), this._logger.log("called endOfStream"))
                    } catch (t) {
                        this._logger.log("SourceBuffer endOfStream() call failed with error: " + t.message), this.trigger(i.Events.SOURCE_ERROR, t)
                    }
                }, _onSourceBufferUpdate: function () {
                    (this._currentSegmentAppending || this._sourceBuffer.updating) && (this._logger.log("done updating SourceBuffer with segment " + this._currentSegmentAppending.index), this.trigger(i.Events.SEGMENT_APPENDED, this._currentSegmentAppending), this._currentSegmentAppending.isLast && (this._logger.log("was last segment, setting on EOS on SourceBuffer"), this._tryAppendEos()), this._segmentsAwaitingAppendance.length && !this._sourceBuffer.updating && this._appendNextSegment(this._segmentsAwaitingAppendance.pop()))
                }, append: function (t) {
                    if (!this.sourceIsReady())throw new Error("MediaSource is not ready yet");
                    this._appendNextSegment(t)
                }, media: function () {
                    return this._mediaElem
                }, sourceIsReady: function () {
                    return !this._isNotReady
                }, duration: function (t) {
                    return this._mediaSource.duration = t / 1e3, 1e3 * this._mediaSource.duration
                }
            })
        }, function (t, e, n) {
            var i, r = n(47).concatBuffersToUint8Array, o = n(1), s = n(36), a = n(68);
            t.exports = i = function (t) {
                this.config = t, this.reset(), this.segments = [], this.pushedInitData = !1
            }, o(i.prototype, s), i.prototype.process = function (t) {
                switch (this.segments.push(t), this.config) {
                    case i.Configs.VOID:
                        this.trigger("segment", t);
                        break;
                    case i.Configs.MP3_TO_FMP4:
                        this.src.enqueue(new a.Unit.Transfer(t.data, "binary")), this.src.enqueue(a.Unit.Transfer.Flush());
                        break;
                    default:
                        throw new Error("Config " + this.config + " not supported")
                }
            }, i.prototype.dequeue = function () {
                return this.segments.shift()
            }, i.prototype.reset = function () {
                switch (this.config) {
                    case i.Configs.VOID:
                        break;
                    case i.Configs.MP3_TO_FMP4:
                        this.gotInitData = !1, this.src = new a.Unit.BasePushSrc, this.parser = new a.Units.MP3Parser, this.muxer = new a.Units.MP4Mux(a.Units.MP4Mux.Profiles.MP3_AUDIO_ONLY), this.sink = new a.Unit.BaseSink, this.sink._onData = function () {
                            var t, e = this.sink.dequeue().data;
                            return this.gotInitData ? (t = this.dequeue(), t.mimeType = "audio/mp4", this.gotInitData && !this.pushedInitData ? (t.data = r(this.initData, e), this.pushedInitData = !0) : t.data = e, this.trigger("segment", t), void this.reset()) : (this.gotInitData = !0, void(this.initData = e))
                        }.bind(this), a.Unit.link(this.src, this.parser, this.muxer, this.sink);
                        break;
                    default:
                        throw new Error("Config " + this.config + " not supported")
                }
            }, i.Configs = {VOID: "VOID", MP3_TO_FMP4: "MP3_TO_FMP4"}
        }, function (t, e, n) {
            var i, r = n(69), o = n(115), s = n(118), a = n(121), u = n(124), h = n(125);
            t.exports = i = {Unit: r, Units: {File: h, MP4Mux: o, MP3Parser: s, MSESink: a, XHR: u}}
        }, function (t, e, n) {
            (function (e) {
                var i, r, o, s, a, u, h, c, l, f, d = n(74), p = n(76), g = n(85), _ = n(96), m = n(97);
                t.exports = i = function () {
                    _.call(this), this.inputs || (this.inputs = []), this.outputs || (this.outputs = [])
                }, i.create = function (t) {
                    return p(i.prototype, t)
                }, i.createBaseSrc = function (t) {
                    return p(u.prototype, t)
                }, i.createBasePushSrc = function (t) {
                    return p(h.prototype, t)
                }, i.createBaseSink = function (t) {
                    return p(c.prototype, t)
                }, i.createBaseTransform = function (t) {
                    return p(a.prototype, t)
                }, i.createBaseParser = function (t) {
                    return p(l.prototype, t)
                }, i.link = function (t, e) {
                    if (arguments.length > 2)return i.linkArray(arguments);
                    for (var n = 0; n < Math.min(t.numberOfOuts(), e.numberOfIns()); n++)t.out(n).pipe(e["in"](n));
                    return e
                }, i.linkArray = function (t) {
                    var e, n, r;
                    for (r = 0; r < t.length; r++)e = t[r], t.length > r + 1 && (n = t[r + 1], i.link(e, n));
                    return n
                };
                var y = i.Event = {
                    CHAIN: "chain",
                    NEED_DATA: "need-data",
                    FINISH: "finish",
                    PIPE: "pipe",
                    UNPIPE: "unpipe",
                    ERROR: "error",
                    END: "end",
                    OPEN: "open",
                    CLOSE: "close"
                };
                i.prototype = p(_.prototype, {
                    constructor: i, "in": function (t) {
                        return this.inputs[t]
                    }, out: function (t) {
                        return this.outputs[t]
                    }, numberOfIns: function () {
                        return this.inputs.length
                    }, numberOfOuts: function () {
                        return this.outputs.length
                    }, add: function (t) {
                        return t instanceof r ? this.addInput(t) : t instanceof o && this.addOutput(t), this
                    }, remove: function (t) {
                        t instanceof r ? this.removeInput(t) : t instanceof o && this.removeOutput(t)
                    }, addInput: function (t) {
                        this._installEventForwarder(t, y.FINISH), this._installEventForwarder(t, y.OPEN), this._installEventForwarder(t, y.PIPE), this._installEventForwarder(t, y.UNPIPE), this._installEventForwarder(t, y.ERROR), this._installEventForwarder(t, y.CHAIN), this.inputs.push(t)
                    }, addOutput: function (t) {
                        this._installEventForwarder(t, y.END), this._installEventForwarder(t, y.OPEN), this._installEventForwarder(t, y.CLOSE), this._installEventForwarder(t, y.ERROR), this._installEventForwarder(t, y.NEED_DATA), this.outputs.push(t)
                    }, removeInput: function (t) {
                        removePut(this.inputs, t)
                    }, removeOutput: function (t) {
                        removePut(this.outputs, t)
                    }, removePut: function (t, e) {
                        t.slice().forEach(function (n, i) {
                            n == e && t.splice(i, 1)
                        })
                    }, _installEventForwarder: function (t, e) {
                        t.on(e, function (n) {
                            this.emit(e, t, n)
                        }.bind(this))
                    }
                }), i.Transfer = s = function (t, n, i) {
                    n || (n = t instanceof e ? "buffer" : t instanceof String ? "utf8" : "object"), this.resolved = !1, this.data = t, this.encoding = n, this.doneCallback = i
                }, s.prototype = p(Object.prototype, {
                    constructor: s, resolve: function () {
                        this.doneCallback && !this.resolved && (this.doneCallback(), this.resolved = !0)
                    }, setFlushing: function (t) {
                        return this.data.flush = t, this
                    }, setEmpty: function (t) {
                        return this.data.empty = t, this
                    }
                }), s.Flush = function () {
                    return new s({}, "binary").setFlushing(!0).setEmpty(!0)
                }, s.EOS = function () {
                    return new s(null, "binary")
                }, i.Input = r = function (t, e) {
                    m.Writable.prototype.constructor.call(this, {objectMode: !0, decodeStrings: !1})
                }, r.prototype = p(m.Writable.prototype, {
                    constructor: r, _write: function (t, e, n) {
                        d("_write: " + e), this.emit(i.Event.CHAIN, new s(t, e, n))
                    }
                }), i.Output = o = function (t) {
                    m.Readable.prototype.constructor.call(this, {objectMode: !0}), this._dataRequested = 0, this._shouldPushMore = !0
                }, o.eos = function (t) {
                    t.push(null, "null")
                }, o.prototype = p(m.Readable.prototype, {
                    constructor: o, _read: function (t) {
                        this._dataRequested++, this.emit(y.NEED_DATA, this)
                    }, push: function (t, e) {
                        return this._dataRequested--, this._shouldPushMore = m.Readable.prototype.push.call(this, t, e), this._shouldPushMore
                    }, isPulling: function () {
                        return this._dataRequested > 0
                    }, eos: function () {
                        m.Readable.prototype.push.call(this, null, "null")
                    }
                }), i.BaseTransform = a = function () {
                    i.prototype.constructor.apply(this, arguments), this.add(new r).add(new o), this.on(y.CHAIN, this._onChain.bind(this)), this.on(y.FINISH, this._onFinish.bind(this))
                }, a.prototype = p(i.prototype, {
                    constructor: a, _onChain: function (t, e) {
                        this._transform(e), this.out(0).push(e.data, e.encoding), e.resolve()
                    }, _onFinish: function (t) {
                        o.eos(this.out(0))
                    }, _transform: function (t) {
                    }
                }), i.BaseSrc = u = function () {
                    i.prototype.constructor.apply(this, arguments), this.add(new o), this.on(y.NEED_DATA, this.squeeze.bind(this))
                }, u.prototype = p(i.prototype, {
                    constructor: u, squeeze: function () {
                        d("squeeze");
                        var t = this._source();
                        t && (this.out(0).push(t.data, t.encoding), t.resolve())
                    }, _source: function () {
                    }
                }), i.BasePushSrc = h = function () {
                    u.prototype.constructor.apply(this, arguments), this._bufferOut = []
                }, h.prototype = p(u.prototype, {
                    constructor: h, _source: function () {
                        return this._bufferOut.length ? this._bufferOut.shift() : null
                    }, enqueue: function (t) {
                        this._bufferOut.push(t), this.out(0).isPulling && this.out(0).isPulling() && this.squeeze()
                    }
                }), i.BaseSink = c = function () {
                    i.prototype.constructor.apply(this, arguments), this.add(new r), this.on(y.CHAIN, this._onChain.bind(this)), this._bufferIn = []
                }, c.prototype = p(i.prototype, {
                    constructor: c, _onChain: function (t, e) {
                        d("BaseSink._onChain: " + e.encoding), this._bufferIn.push(e), this._onData(), e.resolve()
                    }, _onData: function () {
                    }, dequeue: function () {
                        return this._bufferIn.length ? this._bufferIn.shift() : null
                    }
                }), i.BaseParser = l = function () {
                    h.prototype.constructor.apply(this, arguments), c.prototype.constructor.apply(this, arguments), this.on("finish", this._onFinish.bind(this))
                }, g(l.prototype, i.prototype, _.prototype, u.prototype, h.prototype, c.prototype, {
                    constructor: l,
                    _onData: function () {
                        this._parse(this.dequeue())
                    },
                    _onFinish: function () {
                        d("BaseParser._onFinish"), o.eos(this.out(0))
                    },
                    _parse: function (t) {
                    }
                }), i.InputSelector = f = function (t) {
                    for (a.prototype.constructor.apply(this, arguments), t = (t || 1) - 1; t-- > 0;)this.add(new r);
                    this.selectedInputIndex = 0
                }, g(f.prototype, a.prototype, {
                    constructor: f, _onChain: function (t, e) {
                        var n = this["in"](this.selectedInputIndex);
                        return t !== n ? void e.resolve() : (this._transform(e), this.out(0).push(e.data, e.encoding), void e.resolve())
                    }, _onFinish: function (t) {
                        var e = this["in"](this.selectedInputIndex);
                        t === e && o.eos(this.out(0))
                    }
                })
            }).call(e, n(70).Buffer)
        }, function (t, e, n) {
            (function (t, i) {
                function r() {
                    function t() {
                    }

                    try {
                        var e = new Uint8Array(1);
                        return e.foo = function () {
                            return 42
                        }, e.constructor = t, 42 === e.foo() && e.constructor === t && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (n) {
                        return !1
                    }
                }

                function o() {
                    return t.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function t(e) {
                    return this instanceof t ? (this.length = 0, this.parent = void 0, "number" == typeof e ? s(this, e) : "string" == typeof e ? a(this, e, arguments.length > 1 ? arguments[1] : "utf8") : u(this, e)) : arguments.length > 1 ? new t(e, arguments[1]) : new t(e)
                }

                function s(e, n) {
                    if (e = g(e, 0 > n ? 0 : 0 | _(n)), !t.TYPED_ARRAY_SUPPORT)for (var i = 0; n > i; i++)e[i] = 0;
                    return e
                }

                function a(t, e, n) {
                    ("string" != typeof n || "" === n) && (n = "utf8");
                    var i = 0 | y(e, n);
                    return t = g(t, i), t.write(e, n), t
                }

                function u(e, n) {
                    if (t.isBuffer(n))return h(e, n);
                    if ($(n))return c(e, n);
                    if (null == n)throw new TypeError("must start with number, buffer, array or string");
                    if ("undefined" != typeof ArrayBuffer) {
                        if (n.buffer instanceof ArrayBuffer)return l(e, n);
                        if (n instanceof ArrayBuffer)return f(e, n)
                    }
                    return n.length ? d(e, n) : p(e, n)
                }

                function h(t, e) {
                    var n = 0 | _(e.length);
                    return t = g(t, n), e.copy(t, 0, 0, n), t
                }

                function c(t, e) {
                    var n = 0 | _(e.length);
                    t = g(t, n);
                    for (var i = 0; n > i; i += 1)t[i] = 255 & e[i];
                    return t
                }

                function l(t, e) {
                    var n = 0 | _(e.length);
                    t = g(t, n);
                    for (var i = 0; n > i; i += 1)t[i] = 255 & e[i];
                    return t
                }

                function f(e, n) {
                    return t.TYPED_ARRAY_SUPPORT ? (n.byteLength, e = t._augment(new Uint8Array(n))) : e = l(e, new Uint8Array(n)), e
                }

                function d(t, e) {
                    var n = 0 | _(e.length);
                    t = g(t, n);
                    for (var i = 0; n > i; i += 1)t[i] = 255 & e[i];
                    return t
                }

                function p(t, e) {
                    var n, i = 0;
                    "Buffer" === e.type && $(e.data) && (n = e.data, i = 0 | _(n.length)), t = g(t, i);
                    for (var r = 0; i > r; r += 1)t[r] = 255 & n[r];
                    return t
                }

                function g(e, n) {
                    t.TYPED_ARRAY_SUPPORT ? (e = t._augment(new Uint8Array(n)), e.__proto__ = t.prototype) : (e.length = n, e._isBuffer = !0);
                    var i = 0 !== n && n <= t.poolSize >>> 1;
                    return i && (e.parent = Z), e
                }

                function _(t) {
                    if (t >= o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
                    return 0 | t
                }

                function m(e, n) {
                    if (!(this instanceof m))return new m(e, n);
                    var i = new t(e, n);
                    return delete i.parent, i
                }

                function y(t, e) {
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n)return 0;
                    for (var i = !1; ;)switch (e) {
                        case"ascii":
                        case"binary":
                        case"raw":
                        case"raws":
                            return n;
                        case"utf8":
                        case"utf-8":
                            return Y(t).length;
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return 2 * n;
                        case"hex":
                            return n >>> 1;
                        case"base64":
                            return W(t).length;
                        default:
                            if (i)return Y(t).length;
                            e = ("" + e).toLowerCase(), i = !0
                    }
                }

                function v(t, e, n) {
                    var i = !1;
                    if (e = 0 | e, n = void 0 === n || n === 1 / 0 ? this.length : 0 | n, t || (t = "utf8"), 0 > e && (e = 0), n > this.length && (n = this.length), e >= n)return "";
                    for (; ;)switch (t) {
                        case"hex":
                            return D(this, e, n);
                        case"utf8":
                        case"utf-8":
                            return I(this, e, n);
                        case"ascii":
                            return O(this, e, n);
                        case"binary":
                            return R(this, e, n);
                        case"base64":
                            return P(this, e, n);
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return M(this, e, n);
                        default:
                            if (i)throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), i = !0
                    }
                }

                function E(t, e, n, i) {
                    n = Number(n) || 0;
                    var r = t.length - n;
                    i ? (i = Number(i), i > r && (i = r)) : i = r;
                    var o = e.length;
                    if (o % 2 !== 0)throw new Error("Invalid hex string");
                    i > o / 2 && (i = o / 2);
                    for (var s = 0; i > s; s++) {
                        var a = parseInt(e.substr(2 * s, 2), 16);
                        if (isNaN(a))throw new Error("Invalid hex string");
                        t[n + s] = a
                    }
                    return s
                }

                function S(t, e, n, i) {
                    return K(Y(e, t.length - n), t, n, i)
                }

                function A(t, e, n, i) {
                    return K(V(e), t, n, i)
                }

                function w(t, e, n, i) {
                    return A(t, e, n, i)
                }

                function T(t, e, n, i) {
                    return K(W(e), t, n, i)
                }

                function b(t, e, n, i) {
                    return K(z(e, t.length - n), t, n, i)
                }

                function P(t, e, n) {
                    return 0 === e && n === t.length ? q.fromByteArray(t) : q.fromByteArray(t.slice(e, n))
                }

                function I(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var i = [], r = e; n > r;) {
                        var o = t[r], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                        if (n >= r + a) {
                            var u, h, c, l;
                            switch (a) {
                                case 1:
                                    128 > o && (s = o);
                                    break;
                                case 2:
                                    u = t[r + 1], 128 === (192 & u) && (l = (31 & o) << 6 | 63 & u, l > 127 && (s = l));
                                    break;
                                case 3:
                                    u = t[r + 1], h = t[r + 2], 128 === (192 & u) && 128 === (192 & h) && (l = (15 & o) << 12 | (63 & u) << 6 | 63 & h, l > 2047 && (55296 > l || l > 57343) && (s = l));
                                    break;
                                case 4:
                                    u = t[r + 1], h = t[r + 2], c = t[r + 3], 128 === (192 & u) && 128 === (192 & h) && 128 === (192 & c) && (l = (15 & o) << 18 | (63 & u) << 12 | (63 & h) << 6 | 63 & c, l > 65535 && 1114112 > l && (s = l))
                            }
                        }
                        null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, i.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), i.push(s), r += a
                    }
                    return L(i)
                }

                function L(t) {
                    var e = t.length;
                    if (Q >= e)return String.fromCharCode.apply(String, t);
                    for (var n = "", i = 0; e > i;)n += String.fromCharCode.apply(String, t.slice(i, i += Q));
                    return n
                }

                function O(t, e, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var r = e; n > r; r++)i += String.fromCharCode(127 & t[r]);
                    return i
                }

                function R(t, e, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var r = e; n > r; r++)i += String.fromCharCode(t[r]);
                    return i
                }

                function D(t, e, n) {
                    var i = t.length;
                    (!e || 0 > e) && (e = 0), (!n || 0 > n || n > i) && (n = i);
                    for (var r = "", o = e; n > o; o++)r += G(t[o]);
                    return r
                }

                function M(t, e, n) {
                    for (var i = t.slice(e, n), r = "", o = 0; o < i.length; o += 2)r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                    return r
                }

                function k(t, e, n) {
                    if (t % 1 !== 0 || 0 > t)throw new RangeError("offset is not uint");
                    if (t + e > n)throw new RangeError("Trying to access beyond buffer length")
                }

                function N(e, n, i, r, o, s) {
                    if (!t.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");
                    if (n > o || s > n)throw new RangeError("value is out of bounds");
                    if (i + r > e.length)throw new RangeError("index out of range")
                }

                function x(t, e, n, i) {
                    0 > e && (e = 65535 + e + 1);
                    for (var r = 0, o = Math.min(t.length - n, 2); o > r; r++)t[n + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
                }

                function C(t, e, n, i) {
                    0 > e && (e = 4294967295 + e + 1);
                    for (var r = 0, o = Math.min(t.length - n, 4); o > r; r++)t[n + r] = e >>> 8 * (i ? r : 3 - r) & 255
                }

                function F(t, e, n, i, r, o) {
                    if (e > r || o > e)throw new RangeError("value is out of bounds");
                    if (n + i > t.length)throw new RangeError("index out of range");
                    if (0 > n)throw new RangeError("index out of range")
                }

                function U(t, e, n, i, r) {
                    return r || F(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, n, i, 23, 4), n + 4
                }

                function B(t, e, n, i, r) {
                    return r || F(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, n, i, 52, 8), n + 8
                }

                function H(t) {
                    if (t = j(t).replace(tt, ""), t.length < 2)return "";
                    for (; t.length % 4 !== 0;)t += "=";
                    return t
                }

                function j(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }

                function G(t) {
                    return 16 > t ? "0" + t.toString(16) : t.toString(16)
                }

                function Y(t, e) {
                    e = e || 1 / 0;
                    for (var n, i = t.length, r = null, o = [], s = 0; i > s; s++) {
                        if (n = t.charCodeAt(s), n > 55295 && 57344 > n) {
                            if (!r) {
                                if (n > 56319) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (s + 1 === i) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                r = n;
                                continue
                            }
                            if (56320 > n) {
                                (e -= 3) > -1 && o.push(239, 191, 189), r = n;
                                continue
                            }
                            n = (r - 55296 << 10 | n - 56320) + 65536
                        } else r && (e -= 3) > -1 && o.push(239, 191, 189);
                        if (r = null, 128 > n) {
                            if ((e -= 1) < 0)break;
                            o.push(n)
                        } else if (2048 > n) {
                            if ((e -= 2) < 0)break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (65536 > n) {
                            if ((e -= 3) < 0)break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(1114112 > n))throw new Error("Invalid code point");
                            if ((e -= 4) < 0)break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function V(t) {
                    for (var e = [], n = 0; n < t.length; n++)e.push(255 & t.charCodeAt(n));
                    return e
                }

                function z(t, e) {
                    for (var n, i, r, o = [], s = 0; s < t.length && !((e -= 2) < 0); s++)n = t.charCodeAt(s), i = n >> 8, r = n % 256, o.push(r), o.push(i);
                    return o
                }

                function W(t) {
                    return q.toByteArray(H(t))
                }

                function K(t, e, n, i) {
                    for (var r = 0; i > r && !(r + n >= e.length || r >= t.length); r++)e[r + n] = t[r];
                    return r
                }

                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                 * @license  MIT
                 */
                var q = n(71), X = n(72), $ = n(73);
                e.Buffer = t, e.SlowBuffer = m, e.INSPECT_MAX_BYTES = 50, t.poolSize = 8192;
                var Z = {};
                t.TYPED_ARRAY_SUPPORT = void 0 !== i.TYPED_ARRAY_SUPPORT ? i.TYPED_ARRAY_SUPPORT : r(), t.TYPED_ARRAY_SUPPORT && (t.prototype.__proto__ = Uint8Array.prototype, t.__proto__ = Uint8Array), t.isBuffer = function (t) {
                    return !(null == t || !t._isBuffer)
                }, t.compare = function (e, n) {
                    if (!t.isBuffer(e) || !t.isBuffer(n))throw new TypeError("Arguments must be Buffers");
                    if (e === n)return 0;
                    for (var i = e.length, r = n.length, o = 0, s = Math.min(i, r); s > o && e[o] === n[o];)++o;
                    return o !== s && (i = e[o], r = n[o]), r > i ? -1 : i > r ? 1 : 0
                }, t.isEncoding = function (t) {
                    switch (String(t).toLowerCase()) {
                        case"hex":
                        case"utf8":
                        case"utf-8":
                        case"ascii":
                        case"binary":
                        case"base64":
                        case"raw":
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, t.concat = function (e, n) {
                    if (!$(e))throw new TypeError("list argument must be an Array of Buffers.");
                    if (0 === e.length)return new t(0);
                    var i;
                    if (void 0 === n)for (n = 0, i = 0; i < e.length; i++)n += e[i].length;
                    var r = new t(n), o = 0;
                    for (i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.copy(r, o), o += s.length
                    }
                    return r
                }, t.byteLength = y, t.prototype.length = void 0, t.prototype.parent = void 0, t.prototype.toString = function () {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? I(this, 0, t) : v.apply(this, arguments)
                }, t.prototype.equals = function (e) {
                    if (!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");
                    return this === e ? !0 : 0 === t.compare(this, e)
                }, t.prototype.inspect = function () {
                    var t = "", n = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
                }, t.prototype.compare = function (e) {
                    if (!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");
                    return this === e ? 0 : t.compare(this, e)
                }, t.prototype.indexOf = function (e, n) {
                    function i(t, e, n) {
                        for (var i = -1, r = 0; n + r < t.length; r++)if (t[n + r] === e[-1 === i ? 0 : r - i]) {
                            if (-1 === i && (i = r), r - i + 1 === e.length)return n + i
                        } else i = -1;
                        return -1
                    }

                    if (n > 2147483647 ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n >>= 0, 0 === this.length)return -1;
                    if (n >= this.length)return -1;
                    if (0 > n && (n = Math.max(this.length + n, 0)), "string" == typeof e)return 0 === e.length ? -1 : String.prototype.indexOf.call(this, e, n);
                    if (t.isBuffer(e))return i(this, e, n);
                    if ("number" == typeof e)return t.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, e, n) : i(this, [e], n);
                    throw new TypeError("val must be string, number or Buffer")
                }, t.prototype.get = function (t) {
                    return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(t)
                }, t.prototype.set = function (t, e) {
                    return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(t, e)
                }, t.prototype.write = function (t, e, n, i) {
                    if (void 0 === e) i = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) i = e, n = this.length, e = 0; else if (isFinite(e)) e = 0 | e, isFinite(n) ? (n = 0 | n, void 0 === i && (i = "utf8")) : (i = n, n = void 0); else {
                        var r = i;
                        i = e, e = 0 | n, n = r
                    }
                    var o = this.length - e;
                    if ((void 0 === n || n > o) && (n = o), t.length > 0 && (0 > n || 0 > e) || e > this.length)throw new RangeError("attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var s = !1; ;)switch (i) {
                        case"hex":
                            return E(this, t, e, n);
                        case"utf8":
                        case"utf-8":
                            return S(this, t, e, n);
                        case"ascii":
                            return A(this, t, e, n);
                        case"binary":
                            return w(this, t, e, n);
                        case"base64":
                            return T(this, t, e, n);
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return b(this, t, e, n);
                        default:
                            if (s)throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), s = !0
                    }
                }, t.prototype.toJSON = function () {
                    return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
                };
                var Q = 4096;
                t.prototype.slice = function (e, n) {
                    var i = this.length;
                    e = ~~e, n = void 0 === n ? i : ~~n, 0 > e ? (e += i, 0 > e && (e = 0)) : e > i && (e = i), 0 > n ? (n += i, 0 > n && (n = 0)) : n > i && (n = i), e > n && (n = e);
                    var r;
                    if (t.TYPED_ARRAY_SUPPORT) r = t._augment(this.subarray(e, n)); else {
                        var o = n - e;
                        r = new t(o, void 0);
                        for (var s = 0; o > s; s++)r[s] = this[s + e]
                    }
                    return r.length && (r.parent = this.parent || this), r
                }, t.prototype.readUIntLE = function (t, e, n) {
                    t = 0 | t, e = 0 | e, n || k(t, e, this.length);
                    for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256);)i += this[t + o] * r;
                    return i
                }, t.prototype.readUIntBE = function (t, e, n) {
                    t = 0 | t, e = 0 | e, n || k(t, e, this.length);
                    for (var i = this[t + --e], r = 1; e > 0 && (r *= 256);)i += this[t + --e] * r;
                    return i
                }, t.prototype.readUInt8 = function (t, e) {
                    return e || k(t, 1, this.length), this[t]
                }, t.prototype.readUInt16LE = function (t, e) {
                    return e || k(t, 2, this.length), this[t] | this[t + 1] << 8
                }, t.prototype.readUInt16BE = function (t, e) {
                    return e || k(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, t.prototype.readUInt32LE = function (t, e) {
                    return e || k(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, t.prototype.readUInt32BE = function (t, e) {
                    return e || k(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, t.prototype.readIntLE = function (t, e, n) {
                    t = 0 | t, e = 0 | e, n || k(t, e, this.length);
                    for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256);)i += this[t + o] * r;
                    return r *= 128, i >= r && (i -= Math.pow(2, 8 * e)), i
                }, t.prototype.readIntBE = function (t, e, n) {
                    t = 0 | t, e = 0 | e, n || k(t, e, this.length);
                    for (var i = e, r = 1, o = this[t + --i]; i > 0 && (r *= 256);)o += this[t + --i] * r;
                    return r *= 128, o >= r && (o -= Math.pow(2, 8 * e)), o
                }, t.prototype.readInt8 = function (t, e) {
                    return e || k(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, t.prototype.readInt16LE = function (t, e) {
                    e || k(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, t.prototype.readInt16BE = function (t, e) {
                    e || k(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, t.prototype.readInt32LE = function (t, e) {
                    return e || k(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, t.prototype.readInt32BE = function (t, e) {
                    return e || k(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, t.prototype.readFloatLE = function (t, e) {
                    return e || k(t, 4, this.length), X.read(this, t, !0, 23, 4)
                }, t.prototype.readFloatBE = function (t, e) {
                    return e || k(t, 4, this.length), X.read(this, t, !1, 23, 4)
                }, t.prototype.readDoubleLE = function (t, e) {
                    return e || k(t, 8, this.length), X.read(this, t, !0, 52, 8)
                }, t.prototype.readDoubleBE = function (t, e) {
                    return e || k(t, 8, this.length), X.read(this, t, !1, 52, 8)
                }, t.prototype.writeUIntLE = function (t, e, n, i) {
                    t = +t, e = 0 | e, n = 0 | n, i || N(this, t, e, n, Math.pow(2, 8 * n), 0);
                    var r = 1, o = 0;
                    for (this[e] = 255 & t; ++o < n && (r *= 256);)this[e + o] = t / r & 255;
                    return e + n
                }, t.prototype.writeUIntBE = function (t, e, n, i) {
                    t = +t, e = 0 | e, n = 0 | n, i || N(this, t, e, n, Math.pow(2, 8 * n), 0);
                    var r = n - 1, o = 1;
                    for (this[e + r] = 255 & t; --r >= 0 && (o *= 256);)this[e + r] = t / o & 255;
                    return e + n
                }, t.prototype.writeUInt8 = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 1, 255, 0), t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[n] = 255 & e, n + 1
                }, t.prototype.writeUInt16LE = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 2, 65535, 0), t.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8) : x(this, e, n, !0), n + 2
                }, t.prototype.writeUInt16BE = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 2, 65535, 0), t.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 8, this[n + 1] = 255 & e) : x(this, e, n, !1), n + 2
                }, t.prototype.writeUInt32LE = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 4, 4294967295, 0), t.TYPED_ARRAY_SUPPORT ? (this[n + 3] = e >>> 24, this[n + 2] = e >>> 16, this[n + 1] = e >>> 8, this[n] = 255 & e) : C(this, e, n, !0), n + 4
                }, t.prototype.writeUInt32BE = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 4, 4294967295, 0), t.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e) : C(this, e, n, !1), n + 4
                }, t.prototype.writeIntLE = function (t, e, n, i) {
                    if (t = +t, e = 0 | e, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        N(this, t, e, n, r - 1, -r)
                    }
                    var o = 0, s = 1, a = 0 > t ? 1 : 0;
                    for (this[e] = 255 & t; ++o < n && (s *= 256);)this[e + o] = (t / s >> 0) - a & 255;
                    return e + n
                }, t.prototype.writeIntBE = function (t, e, n, i) {
                    if (t = +t, e = 0 | e, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        N(this, t, e, n, r - 1, -r)
                    }
                    var o = n - 1, s = 1, a = 0 > t ? 1 : 0;
                    for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);)this[e + o] = (t / s >> 0) - a & 255;
                    return e + n
                }, t.prototype.writeInt8 = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 1, 127, -128), t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[n] = 255 & e, n + 1
                }, t.prototype.writeInt16LE = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 2, 32767, -32768), t.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8) : x(this, e, n, !0), n + 2
                }, t.prototype.writeInt16BE = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 2, 32767, -32768), t.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 8, this[n + 1] = 255 & e) : x(this, e, n, !1), n + 2
                }, t.prototype.writeInt32LE = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 4, 2147483647, -2147483648), t.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8, this[n + 2] = e >>> 16, this[n + 3] = e >>> 24) : C(this, e, n, !0), n + 4
                }, t.prototype.writeInt32BE = function (e, n, i) {
                    return e = +e, n = 0 | n, i || N(this, e, n, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), t.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e) : C(this, e, n, !1), n + 4
                }, t.prototype.writeFloatLE = function (t, e, n) {
                    return U(this, t, e, !0, n)
                }, t.prototype.writeFloatBE = function (t, e, n) {
                    return U(this, t, e, !1, n)
                }, t.prototype.writeDoubleLE = function (t, e, n) {
                    return B(this, t, e, !0, n)
                }, t.prototype.writeDoubleBE = function (t, e, n) {
                    return B(this, t, e, !1, n)
                }, t.prototype.copy = function (e, n, i, r) {
                    if (i || (i = 0), r || 0 === r || (r = this.length), n >= e.length && (n = e.length), n || (n = 0), r > 0 && i > r && (r = i), r === i)return 0;
                    if (0 === e.length || 0 === this.length)return 0;
                    if (0 > n)throw new RangeError("targetStart out of bounds");
                    if (0 > i || i >= this.length)throw new RangeError("sourceStart out of bounds");
                    if (0 > r)throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - n < r - i && (r = e.length - n + i);
                    var o, s = r - i;
                    if (this === e && n > i && r > n)for (o = s - 1; o >= 0; o--)e[o + n] = this[o + i]; else if (1e3 > s || !t.TYPED_ARRAY_SUPPORT)for (o = 0; s > o; o++)e[o + n] = this[o + i]; else e._set(this.subarray(i, i + s), n);
                    return s
                }, t.prototype.fill = function (t, e, n) {
                    if (t || (t = 0), e || (e = 0), n || (n = this.length), e > n)throw new RangeError("end < start");
                    if (n !== e && 0 !== this.length) {
                        if (0 > e || e >= this.length)throw new RangeError("start out of bounds");
                        if (0 > n || n > this.length)throw new RangeError("end out of bounds");
                        var i;
                        if ("number" == typeof t)for (i = e; n > i; i++)this[i] = t; else {
                            var r = Y(t.toString()), o = r.length;
                            for (i = e; n > i; i++)this[i] = r[i % o]
                        }
                        return this
                    }
                }, t.prototype.toArrayBuffer = function () {
                    if ("undefined" != typeof Uint8Array) {
                        if (t.TYPED_ARRAY_SUPPORT)return new t(this).buffer;
                        for (var e = new Uint8Array(this.length), n = 0, i = e.length; i > n; n += 1)e[n] = this[n];
                        return e.buffer
                    }
                    throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
                };
                var J = t.prototype;
                t._augment = function (e) {
                    return e.constructor = t, e._isBuffer = !0, e._set = e.set, e.get = J.get, e.set = J.set, e.write = J.write, e.toString = J.toString, e.toLocaleString = J.toString, e.toJSON = J.toJSON, e.equals = J.equals, e.compare = J.compare, e.indexOf = J.indexOf, e.copy = J.copy, e.slice = J.slice, e.readUIntLE = J.readUIntLE, e.readUIntBE = J.readUIntBE, e.readUInt8 = J.readUInt8, e.readUInt16LE = J.readUInt16LE, e.readUInt16BE = J.readUInt16BE, e.readUInt32LE = J.readUInt32LE, e.readUInt32BE = J.readUInt32BE, e.readIntLE = J.readIntLE, e.readIntBE = J.readIntBE, e.readInt8 = J.readInt8, e.readInt16LE = J.readInt16LE, e.readInt16BE = J.readInt16BE, e.readInt32LE = J.readInt32LE, e.readInt32BE = J.readInt32BE, e.readFloatLE = J.readFloatLE, e.readFloatBE = J.readFloatBE, e.readDoubleLE = J.readDoubleLE, e.readDoubleBE = J.readDoubleBE, e.writeUInt8 = J.writeUInt8, e.writeUIntLE = J.writeUIntLE, e.writeUIntBE = J.writeUIntBE, e.writeUInt16LE = J.writeUInt16LE, e.writeUInt16BE = J.writeUInt16BE, e.writeUInt32LE = J.writeUInt32LE, e.writeUInt32BE = J.writeUInt32BE, e.writeIntLE = J.writeIntLE, e.writeIntBE = J.writeIntBE, e.writeInt8 = J.writeInt8, e.writeInt16LE = J.writeInt16LE, e.writeInt16BE = J.writeInt16BE, e.writeInt32LE = J.writeInt32LE, e.writeInt32BE = J.writeInt32BE, e.writeFloatLE = J.writeFloatLE, e.writeFloatBE = J.writeFloatBE, e.writeDoubleLE = J.writeDoubleLE, e.writeDoubleBE = J.writeDoubleBE, e.fill = J.fill, e.inspect = J.inspect, e.toArrayBuffer = J.toArrayBuffer, e
                };
                var tt = /[^+\/0-9A-Za-z-_]/g
            }).call(e, n(70).Buffer, function () {
                return this
            }())
        }, function (t, e, n) {
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            !function (t) {
                "use strict";
                function e(t) {
                    var e = t.charCodeAt(0);
                    return e === s || e === l ? 62 : e === a || e === f ? 63 : u > e ? -1 : u + 10 > e ? e - u + 26 + 26 : c + 26 > e ? e - c : h + 26 > e ? e - h + 26 : void 0
                }

                function n(t) {
                    function n(t) {
                        h[l++] = t
                    }

                    var i, r, s, a, u, h;
                    if (t.length % 4 > 0)throw new Error("Invalid string. Length must be a multiple of 4");
                    var c = t.length;
                    u = "=" === t.charAt(c - 2) ? 2 : "=" === t.charAt(c - 1) ? 1 : 0, h = new o(3 * t.length / 4 - u), s = u > 0 ? t.length - 4 : t.length;
                    var l = 0;
                    for (i = 0, r = 0; s > i; i += 4, r += 3)a = e(t.charAt(i)) << 18 | e(t.charAt(i + 1)) << 12 | e(t.charAt(i + 2)) << 6 | e(t.charAt(i + 3)), n((16711680 & a) >> 16), n((65280 & a) >> 8), n(255 & a);
                    return 2 === u ? (a = e(t.charAt(i)) << 2 | e(t.charAt(i + 1)) >> 4, n(255 & a)) : 1 === u && (a = e(t.charAt(i)) << 10 | e(t.charAt(i + 1)) << 4 | e(t.charAt(i + 2)) >> 2, n(a >> 8 & 255), n(255 & a)), h
                }

                function r(t) {
                    function e(t) {
                        return i.charAt(t)
                    }

                    function n(t) {
                        return e(t >> 18 & 63) + e(t >> 12 & 63) + e(t >> 6 & 63) + e(63 & t)
                    }

                    var r, o, s, a = t.length % 3, u = "";
                    for (r = 0, s = t.length - a; s > r; r += 3)o = (t[r] << 16) + (t[r + 1] << 8) + t[r + 2], u += n(o);
                    switch (a) {
                        case 1:
                            o = t[t.length - 1], u += e(o >> 2), u += e(o << 4 & 63), u += "==";
                            break;
                        case 2:
                            o = (t[t.length - 2] << 8) + t[t.length - 1], u += e(o >> 10), u += e(o >> 4 & 63), u += e(o << 2 & 63), u += "="
                    }
                    return u
                }

                var o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "+".charCodeAt(0), a = "/".charCodeAt(0), u = "0".charCodeAt(0), h = "a".charCodeAt(0), c = "A".charCodeAt(0), l = "-".charCodeAt(0), f = "_".charCodeAt(0);
                t.toByteArray = n, t.fromByteArray = r
            }(e)
        }, function (t, e) {
            e.read = function (t, e, n, i, r) {
                var o, s, a = 8 * r - i - 1, u = (1 << a) - 1, h = u >> 1, c = -7, l = n ? r - 1 : 0, f = n ? -1 : 1, d = t[e + l];
                for (l += f, o = d & (1 << -c) - 1, d >>= -c, c += a; c > 0; o = 256 * o + t[e + l], l += f, c -= 8);
                for (s = o & (1 << -c) - 1, o >>= -c, c += i; c > 0; s = 256 * s + t[e + l], l += f, c -= 8);
                if (0 === o) o = 1 - h; else {
                    if (o === u)return s ? NaN : (d ? -1 : 1) * (1 / 0);
                    s += Math.pow(2, i), o -= h
                }
                return (d ? -1 : 1) * s * Math.pow(2, o - i)
            }, e.write = function (t, e, n, i, r, o) {
                var s, a, u, h = 8 * o - r - 1, c = (1 << h) - 1, l = c >> 1, f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : o - 1, p = i ? 1 : -1, g = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), e += s + l >= 1 ? f / u : f * Math.pow(2, 1 - l), e * u >= 2 && (s++, u /= 2), s + l >= c ? (a = 0, s = c) : s + l >= 1 ? (a = (e * u - 1) * Math.pow(2, r), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, r), s = 0)); r >= 8; t[n + d] = 255 & a, d += p, a /= 256, r -= 8);
                for (s = s << r | a, h += r; h > 0; t[n + d] = 255 & s, d += p, s /= 256, h -= 8);
                t[n + d - p] |= 128 * g
            }
        }, function (t, e) {
            var n = Array.isArray, i = Object.prototype.toString;
            t.exports = n || function (t) {
                    return !!t && "[object Array]" == i.call(t)
                }
        }, function (t, e, n) {
            var i = n(75);
            t.exports = function () {
                i.loggingEnabled() && console.log.apply(console, arguments)
            }
        }, function (t, e) {
            var n = !1;
            t.exports = {
                loggingEnabled: function (t) {
                    return void 0 !== t && (n = t), n
                }
            }
        }, function (t, e, n) {
            function i(t, e, n) {
                var i = o(t);
                return n && s(t, e, n) && (e = void 0), e ? r(i, e) : i
            }

            var r = n(77), o = n(83), s = n(84);
            t.exports = i
        }, [131, 78, 79], 3, [132, 80, 81, 82], 5, 6, 7, 55, 10, [130, 86, 92, 88], [131, 87, 88], 3, [132, 89, 90, 91], 5, 6, 7, [133, 93, 94, 95], 9, 10, 11, function (t, e) {
            function n() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function i(t) {
                return "function" == typeof t
            }

            function r(t) {
                return "number" == typeof t
            }

            function o(t) {
                return "object" == typeof t && null !== t
            }

            function s(t) {
                return void 0 === t
            }

            t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
                if (!r(t) || 0 > t || isNaN(t))throw TypeError("n must be a positive number");
                return this._maxListeners = t, this
            }, n.prototype.emit = function (t) {
                var e, n, r, a, u, h;
                if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                    if (e = arguments[1], e instanceof Error)throw e;
                    throw TypeError('Uncaught, unspecified "error" event.')
                }
                if (n = this._events[t], s(n))return !1;
                if (i(n))switch (arguments.length) {
                    case 1:
                        n.call(this);
                        break;
                    case 2:
                        n.call(this, arguments[1]);
                        break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        a = Array.prototype.slice.call(arguments, 1), n.apply(this, a)
                } else if (o(n))for (a = Array.prototype.slice.call(arguments, 1), h = n.slice(), r = h.length, u = 0; r > u; u++)h[u].apply(this, a);
                return !0
            }, n.prototype.addListener = function (t, e) {
                var r;
                if (!i(e))throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (r = s(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[t].length > r && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())), this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
                function n() {
                    this.removeListener(t, n), r || (r = !0, e.apply(this, arguments))
                }

                if (!i(e))throw TypeError("listener must be a function");
                var r = !1;
                return n.listener = e, this.on(t, n), this
            }, n.prototype.removeListener = function (t, e) {
                var n, r, s, a;
                if (!i(e))throw TypeError("listener must be a function");
                if (!this._events || !this._events[t])return this;
                if (n = this._events[t], s = n.length, r = -1, n === e || i(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (o(n)) {
                    for (a = s; a-- > 0;)if (n[a] === e || n[a].listener && n[a].listener === e) {
                        r = a;
                        break
                    }
                    if (0 > r)return this;
                    1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, e)
                }
                return this
            }, n.prototype.removeAllListeners = function (t) {
                var e, n;
                if (!this._events)return this;
                if (!this._events.removeListener)return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
                if (0 === arguments.length) {
                    for (e in this._events)"removeListener" !== e && this.removeAllListeners(e);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (n = this._events[t], i(n)) this.removeListener(t, n); else if (n)for (; n.length;)this.removeListener(t, n[n.length - 1]);
                return delete this._events[t], this
            }, n.prototype.listeners = function (t) {
                var e;
                return e = this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
            }, n.prototype.listenerCount = function (t) {
                if (this._events) {
                    var e = this._events[t];
                    if (i(e))return 1;
                    if (e)return e.length
                }
                return 0
            }, n.listenerCount = function (t, e) {
                return t.listenerCount(e)
            }
        }, function (t, e, n) {
            function i() {
                r.call(this)
            }

            t.exports = i;
            var r = n(96).EventEmitter, o = n(98);
            o(i, r), i.Readable = n(99), i.Writable = n(111), i.Duplex = n(112), i.Transform = n(113), i.PassThrough = n(114), i.Stream = i, i.prototype.pipe = function (t, e) {
                function n(e) {
                    t.writable && !1 === t.write(e) && h.pause && h.pause()
                }

                function i() {
                    h.readable && h.resume && h.resume()
                }

                function o() {
                    c || (c = !0, t.end())
                }

                function s() {
                    c || (c = !0, "function" == typeof t.destroy && t.destroy())
                }

                function a(t) {
                    if (u(), 0 === r.listenerCount(this, "error"))throw t
                }

                function u() {
                    h.removeListener("data", n), t.removeListener("drain", i), h.removeListener("end", o), h.removeListener("close", s), h.removeListener("error", a), t.removeListener("error", a), h.removeListener("end", u), h.removeListener("close", u), t.removeListener("close", u)
                }

                var h = this;
                h.on("data", n), t.on("drain", i), t._isStdio || e && e.end === !1 || (h.on("end", o), h.on("close", s));
                var c = !1;
                return h.on("error", a), t.on("error", a), h.on("end", u), h.on("close", u), t.on("close", u), t.emit("pipe", h), t
            }
        }, function (t, e) {
            "function" == typeof Object.create ? t.exports = function (t, e) {
                t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : t.exports = function (t, e) {
                t.super_ = e;
                var n = function () {
                };
                n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }
        }, function (t, e, n) {
            e = t.exports = n(100), e.Stream = n(97), e.Readable = e, e.Writable = n(107), e.Duplex = n(106), e.Transform = n(109), e.PassThrough = n(110)
        }, function (t, e, n) {
            (function (e) {
                function i(t, e) {
                    var i = n(106);
                    t = t || {};
                    var r = t.highWaterMark, o = t.objectMode ? 16 : 16384;
                    this.highWaterMark = r || 0 === r ? r : o, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.objectMode = !!t.objectMode, e instanceof i && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (L || (L = n(108).StringDecoder), this.decoder = new L(t.encoding), this.encoding = t.encoding)
                }

                function r(t) {
                    return n(106), this instanceof r ? (this._readableState = new i(t, this), this.readable = !0, void P.call(this)) : new r(t)
                }

                function o(t, e, n, i, r) {
                    var o = h(e, n);
                    if (o) t.emit("error", o); else if (I.isNullOrUndefined(n)) e.reading = !1, e.ended || c(t, e); else if (e.objectMode || n && n.length > 0)if (e.ended && !r) {
                        var a = new Error("stream.push() after EOF");
                        t.emit("error", a)
                    } else if (e.endEmitted && r) {
                        var a = new Error("stream.unshift() after end event");
                        t.emit("error", a)
                    } else!e.decoder || r || i || (n = e.decoder.write(n)), r || (e.reading = !1), e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && l(t)), d(t, e); else r || (e.reading = !1);
                    return s(e)
                }

                function s(t) {
                    return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
                }

                function a(t) {
                    if (t >= R) t = R; else {
                        t--;
                        for (var e = 1; 32 > e; e <<= 1)t |= t >> e;
                        t++
                    }
                    return t
                }

                function u(t, e) {
                    return 0 === e.length && e.ended ? 0 : e.objectMode ? 0 === t ? 0 : 1 : isNaN(t) || I.isNull(t) ? e.flowing && e.buffer.length ? e.buffer[0].length : e.length : 0 >= t ? 0 : (t > e.highWaterMark && (e.highWaterMark = a(t)), t > e.length ? e.ended ? e.length : (e.needReadable = !0, 0) : t)
                }

                function h(t, e) {
                    var n = null;
                    return I.isBuffer(e) || I.isString(e) || I.isNullOrUndefined(e) || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
                }

                function c(t, e) {
                    if (e.decoder && !e.ended) {
                        var n = e.decoder.end();
                        n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length)
                    }
                    e.ended = !0, l(t)
                }

                function l(t) {
                    var n = t._readableState;
                    n.needReadable = !1, n.emittedReadable || (O("emitReadable", n.flowing), n.emittedReadable = !0, n.sync ? e.nextTick(function () {
                        f(t)
                    }) : f(t))
                }

                function f(t) {
                    O("emit readable"), t.emit("readable"), y(t)
                }

                function d(t, n) {
                    n.readingMore || (n.readingMore = !0, e.nextTick(function () {
                        p(t, n)
                    }))
                }

                function p(t, e) {
                    for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (O("maybeReadMore read 0"), t.read(0), n !== e.length);)n = e.length;
                    e.readingMore = !1
                }

                function g(t) {
                    return function () {
                        var e = t._readableState;
                        O("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && b.listenerCount(t, "data") && (e.flowing = !0, y(t))
                    }
                }

                function _(t, n) {
                    n.resumeScheduled || (n.resumeScheduled = !0, e.nextTick(function () {
                        m(t, n)
                    }))
                }

                function m(t, e) {
                    e.resumeScheduled = !1, t.emit("resume"), y(t), e.flowing && !e.reading && t.read(0)
                }

                function y(t) {
                    var e = t._readableState;
                    if (O("flow", e.flowing), e.flowing)do var n = t.read(); while (null !== n && e.flowing)
                }

                function v(t, e) {
                    var n, i = e.buffer, r = e.length, o = !!e.decoder, s = !!e.objectMode;
                    if (0 === i.length)return null;
                    if (0 === r) n = null; else if (s) n = i.shift(); else if (!t || t >= r) n = o ? i.join("") : T.concat(i, r), i.length = 0; else if (t < i[0].length) {
                        var a = i[0];
                        n = a.slice(0, t), i[0] = a.slice(t)
                    } else if (t === i[0].length) n = i.shift(); else {
                        n = o ? "" : new T(t);
                        for (var u = 0, h = 0, c = i.length; c > h && t > u; h++) {
                            var a = i[0], l = Math.min(t - u, a.length);
                            o ? n += a.slice(0, l) : a.copy(n, u, 0, l), l < a.length ? i[0] = a.slice(l) : i.shift(), u += l
                        }
                    }
                    return n
                }

                function E(t) {
                    var n = t._readableState;
                    if (n.length > 0)throw new Error("endReadable called on non-empty stream");
                    n.endEmitted || (n.ended = !0, e.nextTick(function () {
                        n.endEmitted || 0 !== n.length || (n.endEmitted = !0, t.readable = !1, t.emit("end"))
                    }))
                }

                function S(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)e(t[n], n)
                }

                function A(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
                    return -1
                }

                t.exports = r;
                var w = n(102), T = n(70).Buffer;
                r.ReadableState = i;
                var b = n(96).EventEmitter;
                b.listenerCount || (b.listenerCount = function (t, e) {
                    return t.listeners(e).length
                });
                var P = n(97), I = n(103);
                I.inherits = n(104);
                var L, O = n(105);
                O = O && O.debuglog ? O.debuglog("stream") : function () {
                }, I.inherits(r, P), r.prototype.push = function (t, e) {
                    var n = this._readableState;
                    return I.isString(t) && !n.objectMode && (e = e || n.defaultEncoding, e !== n.encoding && (t = new T(t, e), e = "")), o(this, n, t, e, !1)
                }, r.prototype.unshift = function (t) {
                    var e = this._readableState;
                    return o(this, e, t, "", !0)
                }, r.prototype.setEncoding = function (t) {
                    return L || (L = n(108).StringDecoder), this._readableState.decoder = new L(t), this._readableState.encoding = t, this
                };
                var R = 8388608;
                r.prototype.read = function (t) {
                    O("read", t);
                    var e = this._readableState, n = t;
                    if ((!I.isNumber(t) || t > 0) && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended))return O("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? E(this) : l(this), null;
                    if (t = u(t, e), 0 === t && e.ended)return 0 === e.length && E(this), null;
                    var i = e.needReadable;
                    O("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && (i = !0, O("length less than watermark", i)), (e.ended || e.reading) && (i = !1, O("reading or ended", i)), i && (O("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1), i && !e.reading && (t = u(n, e));
                    var r;
                    return r = t > 0 ? v(t, e) : null, I.isNull(r) && (e.needReadable = !0, t = 0), e.length -= t, 0 !== e.length || e.ended || (e.needReadable = !0), n !== t && e.ended && 0 === e.length && E(this), I.isNull(r) || this.emit("data", r), r
                }, r.prototype._read = function (t) {
                    this.emit("error", new Error("not implemented"))
                }, r.prototype.pipe = function (t, n) {
                    function i(t) {
                        O("onunpipe"), t === l && o()
                    }

                    function r() {
                        O("onend"), t.end()
                    }

                    function o() {
                        O("cleanup"), t.removeListener("close", u), t.removeListener("finish", h), t.removeListener("drain", _), t.removeListener("error", a), t.removeListener("unpipe", i), l.removeListener("end", r), l.removeListener("end", o), l.removeListener("data", s), !f.awaitDrain || t._writableState && !t._writableState.needDrain || _()
                    }

                    function s(e) {
                        O("ondata");
                        var n = t.write(e);
                        !1 === n && (O("false write response, pause", l._readableState.awaitDrain), l._readableState.awaitDrain++, l.pause())
                    }

                    function a(e) {
                        O("onerror", e), c(), t.removeListener("error", a), 0 === b.listenerCount(t, "error") && t.emit("error", e)
                    }

                    function u() {
                        t.removeListener("finish", h), c()
                    }

                    function h() {
                        O("onfinish"), t.removeListener("close", u), c()
                    }

                    function c() {
                        O("unpipe"), l.unpipe(t)
                    }

                    var l = this, f = this._readableState;
                    switch (f.pipesCount) {
                        case 0:
                            f.pipes = t;
                            break;
                        case 1:
                            f.pipes = [f.pipes, t];
                            break;
                        default:
                            f.pipes.push(t)
                    }
                    f.pipesCount += 1, O("pipe count=%d opts=%j", f.pipesCount, n);
                    var d = (!n || n.end !== !1) && t !== e.stdout && t !== e.stderr, p = d ? r : o;
                    f.endEmitted ? e.nextTick(p) : l.once("end", p), t.on("unpipe", i);
                    var _ = g(l);
                    return t.on("drain", _), l.on("data", s), t._events && t._events.error ? w(t._events.error) ? t._events.error.unshift(a) : t._events.error = [a, t._events.error] : t.on("error", a), t.once("close", u), t.once("finish", h), t.emit("pipe", l), f.flowing || (O("pipe resume"), l.resume()), t
                }, r.prototype.unpipe = function (t) {
                    var e = this._readableState;
                    if (0 === e.pipesCount)return this;
                    if (1 === e.pipesCount)return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this), this);
                    if (!t) {
                        var n = e.pipes, i = e.pipesCount;
                        e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                        for (var r = 0; i > r; r++)n[r].emit("unpipe", this);
                        return this
                    }
                    var r = A(e.pipes, t);
                    return -1 === r ? this : (e.pipes.splice(r, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this), this)
                }, r.prototype.on = function (t, n) {
                    var i = P.prototype.on.call(this, t, n);
                    if ("data" === t && !1 !== this._readableState.flowing && this.resume(), "readable" === t && this.readable) {
                        var r = this._readableState;
                        if (!r.readableListening)if (r.readableListening = !0, r.emittedReadable = !1, r.needReadable = !0, r.reading) r.length && l(this, r); else {
                            var o = this;
                            e.nextTick(function () {
                                O("readable nexttick read 0"), o.read(0)
                            })
                        }
                    }
                    return i
                }, r.prototype.addListener = r.prototype.on, r.prototype.resume = function () {
                    var t = this._readableState;
                    return t.flowing || (O("resume"), t.flowing = !0, t.reading || (O("resume read 0"), this.read(0)), _(this, t)), this
                }, r.prototype.pause = function () {
                    return O("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (O("pause"), this._readableState.flowing = !1, this.emit("pause")), this
                }, r.prototype.wrap = function (t) {
                    var e = this._readableState, n = !1, i = this;
                    t.on("end", function () {
                        if (O("wrapped end"), e.decoder && !e.ended) {
                            var t = e.decoder.end();
                            t && t.length && i.push(t)
                        }
                        i.push(null)
                    }), t.on("data", function (r) {
                        if (O("wrapped data"), e.decoder && (r = e.decoder.write(r)), r && (e.objectMode || r.length)) {
                            var o = i.push(r);
                            o || (n = !0, t.pause())
                        }
                    });
                    for (var r in t)I.isFunction(t[r]) && I.isUndefined(this[r]) && (this[r] = function (e) {
                        return function () {
                            return t[e].apply(t, arguments)
                        }
                    }(r));
                    var o = ["error", "close", "destroy", "pause", "resume"];
                    return S(o, function (e) {
                        t.on(e, i.emit.bind(i, e))
                    }), i._read = function (e) {
                        O("wrapped _read", e), n && (n = !1, t.resume())
                    }, i
                }, r._fromList = v
            }).call(e, n(101))
        }, function (t, e) {
            function n() {
                h = !1, s.length ? u = s.concat(u) : c = -1, u.length && i()
            }

            function i() {
                if (!h) {
                    var t = setTimeout(n);
                    h = !0;
                    for (var e = u.length; e;) {
                        for (s = u, u = []; ++c < e;)s && s[c].run();
                        c = -1, e = u.length
                    }
                    s = null, h = !1, clearTimeout(t)
                }
            }

            function r(t, e) {
                this.fun = t, this.array = e
            }

            function o() {
            }

            var s, a = t.exports = {}, u = [], h = !1, c = -1;
            a.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
                u.push(new r(t, e)), 1 !== u.length || h || setTimeout(i, 0)
            }, r.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = o, a.addListener = o, a.once = o, a.off = o, a.removeListener = o, a.removeAllListeners = o, a.emit = o, a.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, a.cwd = function () {
                return "/"
            }, a.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, a.umask = function () {
                return 0
            }
        }, function (t, e) {
            t.exports = Array.isArray || function (t) {
                    return "[object Array]" == Object.prototype.toString.call(t)
                }
        }, function (t, e, n) {
            (function (t) {
                function n(t) {
                    return Array.isArray ? Array.isArray(t) : "[object Array]" === _(t)
                }

                function i(t) {
                    return "boolean" == typeof t
                }

                function r(t) {
                    return null === t
                }

                function o(t) {
                    return null == t
                }

                function s(t) {
                    return "number" == typeof t
                }

                function a(t) {
                    return "string" == typeof t
                }

                function u(t) {
                    return "symbol" == typeof t
                }

                function h(t) {
                    return void 0 === t
                }

                function c(t) {
                    return "[object RegExp]" === _(t)
                }

                function l(t) {
                    return "object" == typeof t && null !== t
                }

                function f(t) {
                    return "[object Date]" === _(t)
                }

                function d(t) {
                    return "[object Error]" === _(t) || t instanceof Error
                }

                function p(t) {
                    return "function" == typeof t
                }

                function g(t) {
                    return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t
                }

                function _(t) {
                    return Object.prototype.toString.call(t)
                }

                e.isArray = n, e.isBoolean = i, e.isNull = r, e.isNullOrUndefined = o, e.isNumber = s, e.isString = a, e.isSymbol = u, e.isUndefined = h, e.isRegExp = c, e.isObject = l, e.isDate = f, e.isError = d, e.isFunction = p, e.isPrimitive = g, e.isBuffer = t.isBuffer
            }).call(e, n(70).Buffer)
        }, 98, function (t, e) {
        }, function (t, e, n) {
            (function (e) {
                function i(t) {
                    return this instanceof i ? (u.call(this, t), h.call(this, t), t && t.readable === !1 && (this.readable = !1), t && t.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", r)) : new i(t)
                }

                function r() {
                    this.allowHalfOpen || this._writableState.ended || e.nextTick(this.end.bind(this))
                }

                function o(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)e(t[n], n)
                }

                t.exports = i;
                var s = Object.keys || function (t) {
                        var e = [];
                        for (var n in t)e.push(n);
                        return e
                    }, a = n(103);
                a.inherits = n(104);
                var u = n(100), h = n(107);
                a.inherits(i, u), o(s(h.prototype), function (t) {
                    i.prototype[t] || (i.prototype[t] = h.prototype[t])
                })
            }).call(e, n(101))
        }, function (t, e, n) {
            (function (e) {
                function i(t, e, n) {
                    this.chunk = t, this.encoding = e, this.callback = n
                }

                function r(t, e) {
                    var i = n(106);
                    t = t || {};
                    var r = t.highWaterMark, o = t.objectMode ? 16 : 16384;
                    this.highWaterMark = r || 0 === r ? r : o, this.objectMode = !!t.objectMode, e instanceof i && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                    var s = t.decodeStrings === !1;
                    this.decodeStrings = !s, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
                        d(e, t)
                    }, this.writecb = null, this.writelen = 0, this.buffer = [], this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1
                }

                function o(t) {
                    var e = n(106);
                    return this instanceof o || this instanceof e ? (this._writableState = new r(t, this), this.writable = !0, void w.call(this)) : new o(t)
                }

                function s(t, n, i) {
                    var r = new Error("write after end");
                    t.emit("error", r), e.nextTick(function () {
                        i(r)
                    })
                }

                function a(t, n, i, r) {
                    var o = !0;
                    if (!(A.isBuffer(i) || A.isString(i) || A.isNullOrUndefined(i) || n.objectMode)) {
                        var s = new TypeError("Invalid non-string/buffer chunk");
                        t.emit("error", s), e.nextTick(function () {
                            r(s)
                        }), o = !1
                    }
                    return o
                }

                function u(t, e, n) {
                    return !t.objectMode && t.decodeStrings !== !1 && A.isString(e) && (e = new S(e, n)), e
                }

                function h(t, e, n, r, o) {
                    n = u(e, n, r), A.isBuffer(n) && (r = "buffer");
                    var s = e.objectMode ? 1 : n.length;
                    e.length += s;
                    var a = e.length < e.highWaterMark;
                    return a || (e.needDrain = !0), e.writing || e.corked ? e.buffer.push(new i(n, r, o)) : c(t, e, !1, s, n, r, o), a
                }

                function c(t, e, n, i, r, o, s) {
                    e.writelen = i, e.writecb = s, e.writing = !0, e.sync = !0, n ? t._writev(r, e.onwrite) : t._write(r, o, e.onwrite), e.sync = !1
                }

                function l(t, n, i, r, o) {
                    i ? e.nextTick(function () {
                        n.pendingcb--, o(r)
                    }) : (n.pendingcb--, o(r)), t._writableState.errorEmitted = !0, t.emit("error", r)
                }

                function f(t) {
                    t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
                }

                function d(t, n) {
                    var i = t._writableState, r = i.sync, o = i.writecb;
                    if (f(i), n) l(t, i, r, n, o); else {
                        var s = m(t, i);
                        s || i.corked || i.bufferProcessing || !i.buffer.length || _(t, i), r ? e.nextTick(function () {
                            p(t, i, s, o)
                        }) : p(t, i, s, o)
                    }
                }

                function p(t, e, n, i) {
                    n || g(t, e), e.pendingcb--, i(), v(t, e)
                }

                function g(t, e) {
                    0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
                }

                function _(t, e) {
                    if (e.bufferProcessing = !0, t._writev && e.buffer.length > 1) {
                        for (var n = [], i = 0; i < e.buffer.length; i++)n.push(e.buffer[i].callback);
                        e.pendingcb++, c(t, e, !0, e.length, e.buffer, "", function (t) {
                            for (var i = 0; i < n.length; i++)e.pendingcb--, n[i](t)
                        }), e.buffer = []
                    } else {
                        for (var i = 0; i < e.buffer.length; i++) {
                            var r = e.buffer[i], o = r.chunk, s = r.encoding, a = r.callback, u = e.objectMode ? 1 : o.length;
                            if (c(t, e, !1, u, o, s, a), e.writing) {
                                i++;
                                break
                            }
                        }
                        i < e.buffer.length ? e.buffer = e.buffer.slice(i) : e.buffer.length = 0
                    }
                    e.bufferProcessing = !1
                }

                function m(t, e) {
                    return e.ending && 0 === e.length && !e.finished && !e.writing
                }

                function y(t, e) {
                    e.prefinished || (e.prefinished = !0, t.emit("prefinish"))
                }

                function v(t, e) {
                    var n = m(t, e);
                    return n && (0 === e.pendingcb ? (y(t, e), e.finished = !0, t.emit("finish")) : y(t, e)), n
                }

                function E(t, n, i) {
                    n.ending = !0, v(t, n), i && (n.finished ? e.nextTick(i) : t.once("finish", i)), n.ended = !0
                }

                t.exports = o;
                var S = n(70).Buffer;
                o.WritableState = r;
                var A = n(103);
                A.inherits = n(104);
                var w = n(97);
                A.inherits(o, w), o.prototype.pipe = function () {
                    this.emit("error", new Error("Cannot pipe. Not readable."))
                }, o.prototype.write = function (t, e, n) {
                    var i = this._writableState, r = !1;
                    return A.isFunction(e) && (n = e, e = null), A.isBuffer(t) ? e = "buffer" : e || (e = i.defaultEncoding), A.isFunction(n) || (n = function () {
                    }), i.ended ? s(this, i, n) : a(this, i, t, n) && (i.pendingcb++, r = h(this, i, t, e, n)), r
                }, o.prototype.cork = function () {
                    var t = this._writableState;
                    t.corked++
                }, o.prototype.uncork = function () {
                    var t = this._writableState;
                    t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.buffer.length || _(this, t))
                }, o.prototype._write = function (t, e, n) {
                    n(new Error("not implemented"))
                }, o.prototype._writev = null, o.prototype.end = function (t, e, n) {
                    var i = this._writableState;
                    A.isFunction(t) ? (n = t, t = null, e = null) : A.isFunction(e) && (n = e, e = null), A.isNullOrUndefined(t) || this.write(t, e), i.corked && (i.corked = 1, this.uncork()), i.ending || i.finished || E(this, i, n)
                }
            }).call(e, n(101))
        }, function (t, e, n) {
            function i(t) {
                if (t && !u(t))throw new Error("Unknown encoding: " + t)
            }

            function r(t) {
                return t.toString(this.encoding)
            }

            function o(t) {
                this.charReceived = t.length % 2, this.charLength = this.charReceived ? 2 : 0
            }

            function s(t) {
                this.charReceived = t.length % 3, this.charLength = this.charReceived ? 3 : 0
            }

            var a = n(70).Buffer, u = a.isEncoding || function (t) {
                    switch (t && t.toLowerCase()) {
                        case"hex":
                        case"utf8":
                        case"utf-8":
                        case"ascii":
                        case"binary":
                        case"base64":
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                        case"raw":
                            return !0;
                        default:
                            return !1
                    }
                }, h = e.StringDecoder = function (t) {
                switch (this.encoding = (t || "utf8").toLowerCase().replace(/[-_]/, ""), i(t), this.encoding) {
                    case"utf8":
                        this.surrogateSize = 3;
                        break;
                    case"ucs2":
                    case"utf16le":
                        this.surrogateSize = 2, this.detectIncompleteChar = o;
                        break;
                    case"base64":
                        this.surrogateSize = 3, this.detectIncompleteChar = s;
                        break;
                    default:
                        return void(this.write = r)
                }
                this.charBuffer = new a(6), this.charReceived = 0, this.charLength = 0
            };
            h.prototype.write = function (t) {
                for (var e = ""; this.charLength;) {
                    var n = t.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t.length;
                    if (t.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength)return "";
                    t = t.slice(n, t.length), e = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
                    var i = e.charCodeAt(e.length - 1);
                    if (!(i >= 55296 && 56319 >= i)) {
                        if (this.charReceived = this.charLength = 0, 0 === t.length)return e;
                        break
                    }
                    this.charLength += this.surrogateSize, e = ""
                }
                this.detectIncompleteChar(t);
                var r = t.length;
                this.charLength && (t.copy(this.charBuffer, 0, t.length - this.charReceived, r), r -= this.charReceived), e += t.toString(this.encoding, 0, r);
                var r = e.length - 1, i = e.charCodeAt(r);
                if (i >= 55296 && 56319 >= i) {
                    var o = this.surrogateSize;
                    return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), t.copy(this.charBuffer, 0, 0, o), e.substring(0, r)
                }
                return e
            }, h.prototype.detectIncompleteChar = function (t) {
                for (var e = t.length >= 3 ? 3 : t.length; e > 0; e--) {
                    var n = t[t.length - e];
                    if (1 == e && n >> 5 == 6) {
                        this.charLength = 2;
                        break
                    }
                    if (2 >= e && n >> 4 == 14) {
                        this.charLength = 3;
                        break
                    }
                    if (3 >= e && n >> 3 == 30) {
                        this.charLength = 4;
                        break
                    }
                }
                this.charReceived = e
            }, h.prototype.end = function (t) {
                var e = "";
                if (t && t.length && (e = this.write(t)), this.charReceived) {
                    var n = this.charReceived, i = this.charBuffer, r = this.encoding;
                    e += i.slice(0, n).toString(r)
                }
                return e
            }
        }, function (t, e, n) {
            function i(t, e) {
                this.afterTransform = function (t, n) {
                    return r(e, t, n)
                }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null
            }

            function r(t, e, n) {
                var i = t._transformState;
                i.transforming = !1;
                var r = i.writecb;
                if (!r)return t.emit("error", new Error("no writecb in Transform class"));
                i.writechunk = null, i.writecb = null, u.isNullOrUndefined(n) || t.push(n), r && r(e);
                var o = t._readableState;
                o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && t._read(o.highWaterMark)
            }

            function o(t) {
                if (!(this instanceof o))return new o(t);
                a.call(this, t), this._transformState = new i(t, this);
                var e = this;
                this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("prefinish", function () {
                    u.isFunction(this._flush) ? this._flush(function (t) {
                        s(e, t)
                    }) : s(e)
                })
            }

            function s(t, e) {
                if (e)return t.emit("error", e);
                var n = t._writableState, i = t._transformState;
                if (n.length)throw new Error("calling transform done when ws.length != 0");
                if (i.transforming)throw new Error("calling transform done when still transforming");
                return t.push(null)
            }

            t.exports = o;
            var a = n(106), u = n(103);
            u.inherits = n(104), u.inherits(o, a), o.prototype.push = function (t, e) {
                return this._transformState.needTransform = !1, a.prototype.push.call(this, t, e)
            }, o.prototype._transform = function (t, e, n) {
                throw new Error("not implemented")
            }, o.prototype._write = function (t, e, n) {
                var i = this._transformState;
                if (i.writecb = n, i.writechunk = t, i.writeencoding = e, !i.transforming) {
                    var r = this._readableState;
                    (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
                }
            }, o.prototype._read = function (t) {
                var e = this._transformState;
                u.isNull(e.writechunk) || !e.writecb || e.transforming ? e.needTransform = !0 : (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform))
            }
        }, function (t, e, n) {
            function i(t) {
                return this instanceof i ? void r.call(this, t) : new i(t)
            }

            t.exports = i;
            var r = n(109), o = n(103);
            o.inherits = n(104), o.inherits(i, r), i.prototype._transform = function (t, e, n) {
                n(null, t)
            }
        }, function (t, e, n) {
            t.exports = n(107)
        }, function (t, e, n) {
            t.exports = n(106)
        }, function (t, e, n) {
            t.exports = n(109)
        }, function (t, e, n) {
            t.exports = n(110)
        }, function (t, e, n) {
            (function (e) {
                var i, r = n(74), o = n(69), s = (o.BaseTransform, o.BaseParser), a = n(116);
                t.exports = i = function (t, e) {
                    o.BaseParser.prototype.constructor.apply(this, arguments), t || (t = {
                        audioTrackId: -1,
                        videoTrackId: -1,
                        tracks: []
                    }), this.muxer = new a(t), this.muxer.ondata = this._onMp4Data.bind(this), this.muxer.oncodecinfo = this._onCodecInfo.bind(this), this._codecInfo = null, this._timestamp = 0, e && (this.worker = "undefined" != typeof Worker ? new Worker("/dist/mp4-mux-worker-bundle.js") : null), this.worker && (this.worker.onmessage = function (t) {
                        this._onMp4Data(t.data)
                    }.bind(this), this.worker.postMessage({mp4MuxProfile: t}))
                }, i.Profiles = a.Profiles, i.prototype = o.createBaseParser({
                    constructor: i, _onMp4Data: function (t) {
                        r("_onMp4Data"), this.enqueue(new o.Transfer(new e(t), "buffer"))
                    }, _onCodecInfo: function (t) {
                        r("Codec info: " + t), this._codecInfo = t
                    }, _onFinish: function (t) {
                        r("MP4Mux._onFinish"), this.worker ? this.worker.postMessage({eos: !0}) : this.muxer && this.muxer.flush(), s.prototype._onFinish.call(this, t)
                    }, _parse: function (t) {
                        var e;
                        t.data && (e = this._timestamp = t.data.timestamp), t.data.flush && (this._needFlush = !0), r("UnitMP4Mux Timestamp: " + this._timestamp), r("UnitMP4Mux._parse: Payload type: " + typeof t.data), this.worker ? (t.data.empty || this.worker.postMessage({
                            data: t.data,
                            meta: t.data.meta,
                            timestamp: e,
                            packetType: a.TYPE_AUDIO_PACKET
                        }), this._needFlush && (this.worker.postMessage({eos: !0}), this._needFlush = !1)) : this.muxer && (t.data.empty || this.muxer.pushPacket(a.TYPE_AUDIO_PACKET, new Uint8Array(t.data), e, t.data.meta), this._needFlush && (this.muxer.flush(), this._needFlush = !1))
                    }
                })
            }).call(e, n(70).Buffer)
        }, function (t, e, n) {
            function i(t) {
                for (var e = t.length >> 1, n = new Uint8Array(e), i = 0; e > i; i++)n[i] = parseInt(t.substr(2 * i, 2), 16);
                return n
            }

            function r(t, e) {
                var n, i = 0, r = s.RAW;
                switch (e.codecId) {
                    case l:
                        var o = t[i++];
                        r = o, n = 1024;
                        break;
                    case c:
                        var u = t[i + 1] >> 3 & 3, f = t[i + 1] >> 1 & 3;
                        n = 1 === f ? 3 === u ? 1152 : 576 : 3 === f ? 384 : 1152
                }
                return info = {
                    codecDescription: h[e.codecId],
                    codecId: e.codecId,
                    data: t.subarray(i),
                    rate: e.sampleRate,
                    size: e.sampleSize,
                    channels: e.channels,
                    samples: n,
                    packetType: r
                }, a("parsed audio packet with %d samples", n), info
            }

            function o(t) {
                var e = 0, n = t[e] >> 4, i = 15 & t[e];
                e++;
                var r = {frameType: n, codecId: i, codecDescription: d[i]};
                switch (i) {
                    case g:
                        var o = t[e++];
                        r.packetType = o, r.compositionTime = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8) >> 8, e += 3;
                        break;
                    case p:
                        r.packetType = _.NALU, r.horizontalOffset = t[e] >> 4 & 15, r.verticalOffset = 15 & t[e], r.compositionTime = 0, e++
                }
                return r.data = t.subarray(e), r
            }

            var s, a = n(74), u = n(117), h = ["PCM", "ADPCM", "MP3", "PCM le", "Nellymouser16", "Nellymouser8", "Nellymouser", "G.711 A-law", "G.711 mu-law", null, "AAC", "Speex", "MP3 8khz"], c = 2, l = 10;
            !function (t) {
                t[t.HEADER = 0] = "HEADER", t[t.RAW = 1] = "RAW"
            }(s || (s = {}));
            var f, d = [null, "JPEG", "Sorenson", "Screen", "VP6", "VP6 alpha", "Screen2", "AVC"], p = 4, g = 7;
            !function (t) {
                t[t.KEY = 1] = "KEY", t[t.INNER = 2] = "INNER", t[t.DISPOSABLE = 3] = "DISPOSABLE", t[t.GENERATED = 4] = "GENERATED", t[t.INFO = 5] = "INFO"
            }(f || (f = {}));
            var _;
            !function (t) {
                t[t.HEADER = 0] = "HEADER", t[t.NALU = 1] = "NALU", t[t.END = 2] = "END"
            }(_ || (_ = {}));
            var m, y = 8, v = 9, E = !0;
            !function (t) {
                t[t.CAN_GENERATE_HEADER = 0] = "CAN_GENERATE_HEADER", t[t.NEED_HEADER_DATA = 1] = "NEED_HEADER_DATA", t[t.MAIN_PACKETS = 2] = "MAIN_PACKETS"
            }(m || (m = {}));
            var S = function () {
                function t(t) {
                    var e = this;
                    this.oncodecinfo = function (t) {
                        throw new Error("MP4Mux.oncodecinfo is not set")
                    }, this.ondata = function (t) {
                        throw new Error("MP4Mux.ondata is not set")
                    }, this.metadata = t, this.trackStates = this.metadata.tracks.map(function (t, n) {
                        var i = {
                            trackId: n + 1,
                            trackInfo: t,
                            cachedDuration: 0,
                            samplesProcessed: 0,
                            initializationData: []
                        };
                        return e.metadata.audioTrackId === n && (e.audioTrackState = i), e.metadata.videoTrackId === n && (e.videoTrackState = i), i
                    }, this), this._checkIfNeedHeaderData(), this.filePos = 0, this.cachedPackets = [], this.chunkIndex = 0
                }

                return t.prototype.pushPacket = function (t, e, n, i) {
                    switch (this.state === m.CAN_GENERATE_HEADER && this._tryGenerateHeader(), t) {
                        case y:
                            var a = this.audioTrackState, u = r(e, i);
                            if (!a || a.trackInfo.codecId !== u.codecId)throw new Error("Unexpected audio packet codec: " + u.codecDescription);
                            switch (u.codecId) {
                                default:
                                    throw new Error("Unsupported audio codec: " + u.codecDescription);
                                case c:
                                    break;
                                case l:
                                    if (u.packetType === s.HEADER)return void a.initializationData.push(u.data)
                            }
                            this.cachedPackets.push({packet: u, timestamp: n, trackId: a.trackId});
                            break;
                        case v:
                            var h = this.videoTrackState, f = o(e);
                            if (!h || h.trackInfo.codecId !== f.codecId)throw new Error("Unexpected video packet codec: " + f.codecDescription);
                            switch (f.codecId) {
                                default:
                                    throw new Error("unsupported video codec: " + f.codecDescription);
                                case p:
                                    break;
                                case g:
                                    if (f.packetType === _.HEADER)return void h.initializationData.push(f.data)
                            }
                            this.cachedPackets.push({packet: f, timestamp: n, trackId: h.trackId});
                            break;
                        default:
                            throw new Error("unknown packet type: " + t)
                    }
                    this.state === m.NEED_HEADER_DATA && this._tryGenerateHeader()
                }, t.prototype.flush = function () {
                    this.cachedPackets.length > 0 && this._chunk()
                }, t.prototype._checkIfNeedHeaderData = function () {
                    this.trackStates.some(function (t) {
                        return t.trackInfo.codecId === l || t.trackInfo.codecId === g
                    }) ? this.state = m.NEED_HEADER_DATA : this.state = m.CAN_GENERATE_HEADER
                }, t.prototype._tryGenerateHeader = function () {
                    var t = this.trackStates.every(function (t) {
                        switch (t.trackInfo.codecId) {
                            case l:
                            case g:
                                return t.initializationData.length > 0;
                            default:
                                return !0
                        }
                    });
                    if (t) {
                        for (var e = ["isom"], n = 1, r = 1, o = [], s = 0; s < this.trackStates.length; s++) {
                            var a, h = this.trackStates[s], f = h.trackInfo;
                            switch (f.codecId) {
                                case l:
                                    var d = h.initializationData[0];
                                    a = new u.AudioSampleEntry("mp4a", n, f.channels, f.samplesize, f.samplerate);
                                    var _ = new Uint8Array(41 + d.length);
                                    _.set(i("0000000003808080"), 0), _[8] = 32 + d.length, _.set(i("00020004808080"), 9), _[16] = 18 + d.length, _.set(i("40150000000000FA000000000005808080"), 17), _[34] = d.length, _.set(d, 35), _.set(i("068080800102"), 35 + d.length), a.otherBoxes = [new u.RawTag("esds", _)];
                                    var y = d[0] >> 3;
                                    h.mimeTypeCodec = "mp4a.40." + y;
                                    break;
                                case c:
                                    a = new u.AudioSampleEntry(".mp3", n, f.channels, f.samplesize, f.samplerate), h.mimeTypeCodec = "mp3";
                                    break;
                                case g:
                                    var v = h.initializationData[0];
                                    a = new u.VideoSampleEntry("avc1", r, f.width, f.height), a.otherBoxes = [new u.RawTag("avcC", v)];
                                    var E = v[1] << 16 | v[2] << 8 | v[3];
                                    h.mimeTypeCodec = "avc1." + (16777216 | E).toString(16).substr(1), e.push("iso2", "avc1", "mp41");
                                    break;
                                case p:
                                    a = new u.VideoSampleEntry("VP6F", r, f.width, f.height), a.otherBoxes = [new u.RawTag("glbl", i("00"))], h.mimeTypeCodec = "avc1.42001E";
                                    break;
                                default:
                                    throw new Error("not supported track type")
                            }
                            var S, A = u.TrackHeaderFlags.TRACK_ENABLED | u.TrackHeaderFlags.TRACK_IN_MOVIE;
                            h === this.audioTrackState ? S = new u.TrackBox(new u.TrackHeaderBox(A, h.trackId, -1, 0, 0, 1, s), new u.MediaBox(new u.MediaHeaderBox(f.timescale, -1, f.language), new u.HandlerBox("soun", "SoundHandler"), new u.MediaInformationBox(new u.SoundMediaHeaderBox, new u.DataInformationBox(new u.DataReferenceBox([new u.DataEntryUrlBox(u.SELF_CONTAINED_DATA_REFERENCE_FLAG)])), new u.SampleTableBox(new u.SampleDescriptionBox([a]), new u.RawTag("stts", i("0000000000000000")), new u.RawTag("stsc", i("0000000000000000")), new u.RawTag("stsz", i("000000000000000000000000")), new u.RawTag("stco", i("0000000000000000")))))) : h === this.videoTrackState && (S = new u.TrackBox(new u.TrackHeaderBox(A, h.trackId, -1, f.width, f.height, 0, s), new u.MediaBox(new u.MediaHeaderBox(f.timescale, -1, f.language), new u.HandlerBox("vide", "VideoHandler"), new u.MediaInformationBox(new u.VideoMediaHeaderBox, new u.DataInformationBox(new u.DataReferenceBox([new u.DataEntryUrlBox(u.SELF_CONTAINED_DATA_REFERENCE_FLAG)])), new u.SampleTableBox(new u.SampleDescriptionBox([a]), new u.RawTag("stts", i("0000000000000000")), new u.RawTag("stsc", i("0000000000000000")), new u.RawTag("stsz", i("000000000000000000000000")), new u.RawTag("stco", i("0000000000000000"))))))), o.push(S)
                        }
                        var w = new u.MovieExtendsBox(null, [new u.TrackExtendsBox(1, 1, 0, 0, 0), new u.TrackExtendsBox(2, 1, 0, 0, 0)], null), T = new u.BoxContainerBox("udat", [new u.MetaBox(new u.RawTag("hdlr", i("00000000000000006D6469726170706C000000000000000000")), [new u.RawTag("ilst", i("00000025A9746F6F0000001D6461746100000001000000004C61766635342E36332E313034"))])]), b = new u.MovieHeaderBox(1e3, 0, this.trackStates.length + 1), P = new u.MovieBox(b, o, w, T), I = new u.FileTypeBox("isom", 512, e), L = I.layout(0), O = P.layout(L), R = new Uint8Array(L + O);
                        I.write(R), P.write(R), this.oncodecinfo(this.trackStates.map(function (t) {
                            return t.mimeTypeCodec
                        })), this.ondata(R), this.filePos += R.length, this.state = m.MAIN_PACKETS
                    }
                }, t.prototype._chunk = function () {
                    var t = this.cachedPackets;
                    if (E && this.videoTrackState) {
                        for (var e = t.length - 1, n = this.videoTrackState.trackId; e > 0 && (t[e].trackId !== n || t[e].packet.frameType !== f.KEY);)e--;
                        e > 0 && (t = t.slice(0, e))
                    }
                    if (0 !== t.length) {
                        for (var i = [], r = 0, o = [], s = [], a = 0; a < this.trackStates.length; a++) {
                            var h = this.trackStates[a], d = h.trackInfo, _ = h.trackId, m = t.filter(function (t) {
                                return t.trackId === _
                            });
                            if (0 !== m.length) {
                                var y, v, S, A = new u.TrackFragmentBaseMediaDecodeTimeBox(h.cachedDuration);
                                switch (s.push(r), d.codecId) {
                                    case l:
                                    case c:
                                        S = [];
                                        for (var e = 0; e < m.length; e++) {
                                            var w = m[e].packet, T = Math.round(w.samples * d.timescale / d.samplerate);
                                            i.push(w.data), r += w.data.length, S.push({
                                                duration: T,
                                                size: w.data.length
                                            }), h.samplesProcessed += w.samples
                                        }
                                        var b = u.TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT;
                                        y = new u.TrackFragmentHeaderBox(b, _, 0, 0, 0, 0, u.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);
                                        var P = u.TrackRunFlags.DATA_OFFSET_PRESENT | u.TrackRunFlags.SAMPLE_DURATION_PRESENT | u.TrackRunFlags.SAMPLE_SIZE_PRESENT;
                                        v = new u.TrackRunBox(P, S, 0, 0), h.cachedDuration = Math.round(h.samplesProcessed * d.timescale / d.samplerate);
                                        break;
                                    case g:
                                    case p:
                                        S = [];
                                        for (var I = h.samplesProcessed, L = I * d.timescale / d.framerate, O = Math.round(L), e = 0; e < m.length; e++) {
                                            var R = m[e].packet;
                                            I++;
                                            var D = Math.round(I * d.timescale / d.framerate), M = D - O;
                                            O = D;
                                            var k = Math.round(I * d.timescale / d.framerate + R.compositionTime * d.timescale / 1e3);
                                            i.push(R.data), r += R.data.length;
                                            var N = R.frameType === f.KEY ? u.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS : u.SampleFlags.SAMPLE_DEPENDS_ON_OTHER | u.SampleFlags.SAMPLE_IS_NOT_SYNC;
                                            S.push({
                                                duration: M,
                                                size: R.data.length,
                                                flags: N,
                                                compositionTimeOffset: k - D
                                            })
                                        }
                                        var b = u.TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT;
                                        y = new u.TrackFragmentHeaderBox(b, _, 0, 0, 0, 0, u.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);
                                        var P = u.TrackRunFlags.DATA_OFFSET_PRESENT | u.TrackRunFlags.SAMPLE_DURATION_PRESENT | u.TrackRunFlags.SAMPLE_SIZE_PRESENT | u.TrackRunFlags.SAMPLE_FLAGS_PRESENT | u.TrackRunFlags.SAMPLE_COMPOSITION_TIME_OFFSET;
                                        v = new u.TrackRunBox(P, S, 0, 0), h.cachedDuration = O, h.samplesProcessed = I;
                                        break;
                                    default:
                                        throw new Error("Un codec")
                                }
                                var x = new u.TrackFragmentBox(y, A, v);
                                o.push(x)
                            }
                        }
                        this.cachedPackets.splice(0, t.length);
                        for (var C = new u.MovieFragmentHeaderBox(++this.chunkIndex), F = new u.MovieFragmentBox(C, o), U = F.layout(0), B = new u.MediaDataBox(i), H = B.layout(U), j = U + 8, a = 0; a < o.length; a++)o[a].run.dataOffset = j + s[a];
                        var G = new Uint8Array(U + H);
                        F.write(G), B.write(G), this.ondata(G), this.filePos += G.length
                    }
                }, t
            }();
            t.exports = S, S.MP3_SOUND_CODEC_ID = c, S.AAC_SOUND_CODEC_ID = l, S.TYPE_AUDIO_PACKET = y, S.TYPE_VIDEO_PACKET = v, S.Profiles = {
                MP3_AUDIO_ONLY: {
                    audioTrackId: 0,
                    videoTrackId: -1,
                    tracks: [{
                        codecId: S.MP3_SOUND_CODEC_ID,
                        channels: 2,
                        samplerate: 44100,
                        samplesize: 16,
                        timescale: 44100
                    }]
                }
            }
        }, function (t, e) {
            function n(t) {
                for (var e = new Uint8Array(4 * t.length), n = 0, i = 0, r = t.length; r > i; i++) {
                    var o = t.charCodeAt(i);
                    if (127 >= o) e[n++] = o; else {
                        if (o >= 55296 && 56319 >= o) {
                            var s = t.charCodeAt(i + 1);
                            s >= 56320 && 57343 >= s && (o = ((1023 & o) << 10) + (1023 & s) + 65536, ++i)
                        }
                        0 !== (4292870144 & o) ? (e[n++] = 248 | o >>> 24 & 3, e[n++] = 128 | o >>> 18 & 63, e[n++] = 128 | o >>> 12 & 63, e[n++] = 128 | o >>> 6 & 63, e[n++] = 128 | 63 & o) : 0 !== (4294901760 & o) ? (e[n++] = 240 | o >>> 18 & 7, e[n++] = 128 | o >>> 12 & 63, e[n++] = 128 | o >>> 6 & 63, e[n++] = 128 | 63 & o) : 0 !== (4294965248 & o) ? (e[n++] = 224 | o >>> 12 & 15, e[n++] = 128 | o >>> 6 & 63, e[n++] = 128 | 63 & o) : (e[n++] = 192 | o >>> 6 & 31, e[n++] = 128 | 63 & o)
                    }
                }
                return e.subarray(0, n)
            }

            function i(t) {
                for (var e = [], n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
                return Array.prototype.concat.apply(t, e)
            }

            function r(t, e, n) {
                t[e] = n >> 24 & 255, t[e + 1] = n >> 16 & 255, t[e + 2] = n >> 8 & 255, t[e + 3] = 255 & n
            }

            function o(t) {
                return t.charCodeAt(0) << 24 | t.charCodeAt(1) << 16 | t.charCodeAt(2) << 8 | t.charCodeAt(3)
            }

            function s(t) {
                return (t - d) / 1e3 | 0
            }

            function a(t) {
                return 65536 * t | 0
            }

            function u(t) {
                return 1073741824 * t | 0
            }

            function h(t) {
                return 256 * t | 0
            }

            function c(t) {
                return (31 & t.charCodeAt(0)) << 10 | (31 & t.charCodeAt(1)) << 5 | 31 & t.charCodeAt(2)
            }

            var l, f = this && this.__extends || function (t, e) {
                    function n() {
                        this.constructor = t
                    }

                    for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
                    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                };
            t.exports = l = {};
            var d = -20828448e5, p = [1, 0, 0, 0, 1, 0, 0, 0, 1], g = [0, 0, 0], _ = function () {
                function t(t, e) {
                    this.boxtype = t, "uuid" === t && (this.userType = e)
                }

                return t.prototype.layout = function (t) {
                    this.offset = t;
                    var e = 8;
                    return this.userType && (e += 16), this.size = e, e
                }, t.prototype.write = function (t) {
                    return r(t, this.offset, this.size), r(t, this.offset + 4, o(this.boxtype)), this.userType ? (t.set(this.userType, this.offset + 8), 24) : 8
                }, t.prototype.toUint8Array = function () {
                    var t = this.layout(0), e = new Uint8Array(t);
                    return this.write(e), e
                }, t
            }();
            l.Box = _;
            var m = function (t) {
                function e(e, n, i) {
                    void 0 === n && (n = 0), void 0 === i && (i = 0), t.call(this, e), this.version = n, this.flags = i
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 4, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, this.version << 24 | this.flags), n + 4
                }, e
            }(_);
            l.FullBox = m;
            var y = function (t) {
                function e(e, n, i) {
                    t.call(this, "ftype"), this.majorBrand = e, this.minorVersion = n, this.compatibleBrands = i
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 4 * (2 + this.compatibleBrands.length), this.size
                }, e.prototype.write = function (e) {
                    var n = this, i = t.prototype.write.call(this, e);
                    return r(e, this.offset + i, o(this.majorBrand)), r(e, this.offset + i + 4, this.minorVersion), i += 8, this.compatibleBrands.forEach(function (t) {
                        r(e, n.offset + i, o(t)), i += 4
                    }, this), i
                }, e
            }(_);
            l.FileTypeBox = y;
            var v = function (t) {
                function e(e, n) {
                    t.call(this, e), this.children = n
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e);
                    return this.children.forEach(function (t) {
                        t && (n += t.layout(e + n))
                    }), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return this.children.forEach(function (t) {
                        t && (n += t.write(e))
                    }), n
                }, e
            }(_);
            l.BoxContainerBox = v;
            var E = function (t) {
                function e(e, n, r, o) {
                    t.call(this, "moov", i([e], n, [r, o])), this.header = e, this.tracks = n, this.extendsBox = r, this.userData = o
                }

                return f(e, t), e
            }(v);
            l.MovieBox = E;
            var S = function (t) {
                function e(e, n, i, r, o, s, a, u) {
                    void 0 === r && (r = 1), void 0 === o && (o = 1), void 0 === s && (s = p), void 0 === a && (a = d), void 0 === u && (u = d), t.call(this, "mvhd", 0, 0), this.timescale = e, this.duration = n, this.nextTrackId = i, this.rate = r, this.volume = o, this.matrix = s, this.creationTime = a, this.modificationTime = u
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 16 + 4 + 2 + 2 + 8 + 36 + 24 + 4, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, s(this.creationTime)), r(e, this.offset + n + 4, s(this.modificationTime)), r(e, this.offset + n + 8, this.timescale), r(e, this.offset + n + 12, this.duration), n += 16, r(e, this.offset + n, a(this.rate)), r(e, this.offset + n + 4, h(this.volume) << 16), r(e, this.offset + n + 8, 0), r(e, this.offset + n + 12, 0), n += 16, r(e, this.offset + n, a(this.matrix[0])), r(e, this.offset + n + 4, a(this.matrix[1])), r(e, this.offset + n + 8, a(this.matrix[2])), r(e, this.offset + n + 12, a(this.matrix[3])), r(e, this.offset + n + 16, a(this.matrix[4])), r(e, this.offset + n + 20, a(this.matrix[5])), r(e, this.offset + n + 24, u(this.matrix[6])), r(e, this.offset + n + 28, u(this.matrix[7])), r(e, this.offset + n + 32, u(this.matrix[8])), n += 36, r(e, this.offset + n, 0), r(e, this.offset + n + 4, 0), r(e, this.offset + n + 8, 0), r(e, this.offset + n + 12, 0), r(e, this.offset + n + 16, 0), r(e, this.offset + n + 20, 0), n += 24, r(e, this.offset + n, this.nextTrackId), n += 4
                }, e
            }(m);
            l.MovieHeaderBox = S, function (t) {
                t[t.TRACK_ENABLED = 1] = "TRACK_ENABLED", t[t.TRACK_IN_MOVIE = 2] = "TRACK_IN_MOVIE", t[t.TRACK_IN_PREVIEW = 4] = "TRACK_IN_PREVIEW"
            }(l.TrackHeaderFlags || (l.TrackHeaderFlags = {}));
            var A = (l.TrackHeaderFlags, function (t) {
                function e(e, n, i, r, o, s, a, u, h, c, l) {
                    void 0 === a && (a = 0), void 0 === u && (u = 0), void 0 === h && (h = p), void 0 === c && (c = d), void 0 === l && (l = d), t.call(this, "tkhd", 0, e), this.trackId = n, this.duration = i, this.width = r, this.height = o, this.volume = s, this.alternateGroup = a, this.layer = u, this.matrix = h, this.creationTime = c, this.modificationTime = l
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 20 + 8 + 6 + 2 + 36 + 8, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, s(this.creationTime)), r(e, this.offset + n + 4, s(this.modificationTime)), r(e, this.offset + n + 8, this.trackId), r(e, this.offset + n + 12, 0), r(e, this.offset + n + 16, this.duration), n += 20, r(e, this.offset + n, 0), r(e, this.offset + n + 4, 0), r(e, this.offset + n + 8, this.layer << 16 | this.alternateGroup), r(e, this.offset + n + 12, h(this.volume) << 16), n += 16, r(e, this.offset + n, a(this.matrix[0])), r(e, this.offset + n + 4, a(this.matrix[1])), r(e, this.offset + n + 8, a(this.matrix[2])), r(e, this.offset + n + 12, a(this.matrix[3])), r(e, this.offset + n + 16, a(this.matrix[4])), r(e, this.offset + n + 20, a(this.matrix[5])), r(e, this.offset + n + 24, u(this.matrix[6])), r(e, this.offset + n + 28, u(this.matrix[7])), r(e, this.offset + n + 32, u(this.matrix[8])), n += 36, r(e, this.offset + n, a(this.width)), r(e, this.offset + n + 4, a(this.height)), n += 8
                }, e
            }(m));
            l.TrackHeaderBox = A;
            var w = function (t) {
                function e(e, n, i, r, o) {
                    void 0 === i && (i = "unk"), void 0 === r && (r = d), void 0 === o && (o = d), t.call(this, "mdhd", 0, 0), this.timescale = e, this.duration = n, this.language = i, this.creationTime = r, this.modificationTime = o
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 16 + 4, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, s(this.creationTime)), r(e, this.offset + n + 4, s(this.modificationTime)), r(e, this.offset + n + 8, this.timescale), r(e, this.offset + n + 12, this.duration), r(e, this.offset + n + 16, c(this.language) << 16), n + 20
                }, e
            }(m);
            l.MediaHeaderBox = w;
            var T = function (t) {
                function e(e, i) {
                    t.call(this, "hdlr", 0, 0), this.handlerType = e, this.name = i, this._encodedName = n(this.name)
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 8 + 12 + (this._encodedName.length + 1), this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, 0), r(e, this.offset + n + 4, o(this.handlerType)), r(e, this.offset + n + 8, 0), r(e, this.offset + n + 12, 0), r(e, this.offset + n + 16, 0), n += 20, e.set(this._encodedName, this.offset + n), e[this.offset + n + this._encodedName.length] = 0, n += this._encodedName.length + 1
                }, e
            }(m);
            l.HandlerBox = T;
            var b = function (t) {
                function e(e) {
                    void 0 === e && (e = 0), t.call(this, "smhd", 0, 0), this.balance = e
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 4, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, h(this.balance) << 16), n + 4
                }, e
            }(m);
            l.SoundMediaHeaderBox = b;
            var P = function (t) {
                function e(e, n) {
                    void 0 === e && (e = 0), void 0 === n && (n = g), t.call(this, "vmhd", 0, 0), this.graphicsMode = e, this.opColor = n
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 8, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, this.graphicsMode << 16 | this.opColor[0]), r(e, this.offset + n + 4, this.opColor[1] << 16 | this.opColor[2]), n + 8
                }, e
            }(m);
            l.VideoMediaHeaderBox = P, l.SELF_CONTAINED_DATA_REFERENCE_FLAG = 1;
            var I = function (t) {
                function e(e, i) {
                    void 0 === i && (i = null), t.call(this, "url ", 0, e), this.location = i, e & l.SELF_CONTAINED_DATA_REFERENCE_FLAG || (this._encodedLocation = n(i))
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e);
                    return this._encodedLocation && (n += this._encodedLocation.length + 1), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return this._encodedLocation && (e.set(this._encodedLocation, this.offset + n), e[this.offset + n + this._encodedLocation.length] = 0, n += this._encodedLocation.length), n
                }, e
            }(m);
            l.DataEntryUrlBox = I;
            var L = function (t) {
                function e(e) {
                    t.call(this, "dref", 0, 0), this.entries = e
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e) + 4;
                    return this.entries.forEach(function (t) {
                        n += t.layout(e + n)
                    }), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, this.entries.length), this.entries.forEach(function (t) {
                        n += t.write(e)
                    }), n
                }, e
            }(m);
            l.DataReferenceBox = L;
            var O = function (t) {
                function e(e) {
                    t.call(this, "dinf", [e]), this.dataReference = e
                }

                return f(e, t), e
            }(v);
            l.DataInformationBox = O;
            var R = function (t) {
                function e(e) {
                    t.call(this, "stsd", 0, 0), this.entries = e
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e);
                    return n += 4, this.entries.forEach(function (t) {
                        n += t.layout(e + n)
                    }), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, this.entries.length), n += 4, this.entries.forEach(function (t) {
                        n += t.write(e)
                    }), n
                }, e
            }(m);
            l.SampleDescriptionBox = R;
            var D = function (t) {
                function e(e, n, i, r, o) {
                    t.call(this, "stbl", [e, n, i, r, o]), this.sampleDescriptions = e, this.timeToSample = n, this.sampleToChunk = i, this.sampleSizes = r, this.chunkOffset = o
                }

                return f(e, t), e
            }(v);
            l.SampleTableBox = D;
            var M = function (t) {
                function e(e, n, i) {
                    t.call(this, "minf", [e, n, i]), this.header = e, this.info = n, this.sampleTable = i
                }

                return f(e, t), e
            }(v);
            l.MediaInformationBox = M;
            var k = function (t) {
                function e(e, n, i) {
                    t.call(this, "mdia", [e, n, i]), this.header = e, this.handler = n, this.info = i
                }

                return f(e, t), e
            }(v);
            l.MediaBox = k;
            var N = function (t) {
                function e(e, n) {
                    t.call(this, "trak", [e, n]), this.header = e, this.media = n
                }

                return f(e, t), e
            }(v);
            l.TrackBox = N;
            var x = function (t) {
                function e(e, n, i, r, o) {
                    t.call(this, "trex", 0, 0), this.trackId = e, this.defaultSampleDescriptionIndex = n, this.defaultSampleDuration = i, this.defaultSampleSize = r, this.defaultSampleFlags = o
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 20, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, this.trackId), r(e, this.offset + n + 4, this.defaultSampleDescriptionIndex), r(e, this.offset + n + 8, this.defaultSampleDuration), r(e, this.offset + n + 12, this.defaultSampleSize), r(e, this.offset + n + 16, this.defaultSampleFlags), n + 20
                }, e
            }(m);
            l.TrackExtendsBox = x;
            var C = function (t) {
                function e(e, n, r) {
                    t.call(this, "mvex", i([e], n, [r])), this.header = e, this.tracDefaults = n, this.levels = r
                }

                return f(e, t), e
            }(v);
            l.MovieExtendsBox = C;
            var F = function (t) {
                function e(e, n) {
                    t.call(this, "meta", 0, 0), this.handler = e, this.otherBoxes = n
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e);
                    return n += this.handler.layout(e + n), this.otherBoxes.forEach(function (t) {
                        n += t.layout(e + n)
                    }), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return n += this.handler.write(e), this.otherBoxes.forEach(function (t) {
                        n += t.write(e)
                    }), n
                }, e
            }(m);
            l.MetaBox = F;
            var U = function (t) {
                function e(e) {
                    t.call(this, "mfhd", 0, 0), this.sequenceNumber = e
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 4, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, this.sequenceNumber), n + 4
                }, e
            }(m);
            l.MovieFragmentHeaderBox = U, function (t) {
                t[t.BASE_DATA_OFFSET_PRESENT = 1] = "BASE_DATA_OFFSET_PRESENT", t[t.SAMPLE_DESCRIPTION_INDEX_PRESENT = 2] = "SAMPLE_DESCRIPTION_INDEX_PRESENT", t[t.DEFAULT_SAMPLE_DURATION_PRESENT = 8] = "DEFAULT_SAMPLE_DURATION_PRESENT", t[t.DEFAULT_SAMPLE_SIZE_PRESENT = 16] = "DEFAULT_SAMPLE_SIZE_PRESENT", t[t.DEFAULT_SAMPLE_FLAGS_PRESENT = 32] = "DEFAULT_SAMPLE_FLAGS_PRESENT"
            }(l.TrackFragmentFlags || (l.TrackFragmentFlags = {}));
            var B = l.TrackFragmentFlags, H = function (t) {
                function e(e, n, i, r, o, s, a) {
                    t.call(this, "tfhd", 0, e), this.trackId = n, this.baseDataOffset = i, this.sampleDescriptionIndex = r, this.defaultSampleDuration = o, this.defaultSampleSize = s, this.defaultSampleFlags = a
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e) + 4, i = this.flags;
                    return i & B.BASE_DATA_OFFSET_PRESENT && (n += 8), i & B.SAMPLE_DESCRIPTION_INDEX_PRESENT && (n += 4), i & B.DEFAULT_SAMPLE_DURATION_PRESENT && (n += 4), i & B.DEFAULT_SAMPLE_SIZE_PRESENT && (n += 4), i & B.DEFAULT_SAMPLE_FLAGS_PRESENT && (n += 4), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e), i = this.flags;
                    return r(e, this.offset + n, this.trackId), n += 4, i & B.BASE_DATA_OFFSET_PRESENT && (r(e, this.offset + n, 0), r(e, this.offset + n + 4, this.baseDataOffset), n += 8), i & B.SAMPLE_DESCRIPTION_INDEX_PRESENT && (r(e, this.offset + n, this.sampleDescriptionIndex), n += 4), i & B.DEFAULT_SAMPLE_DURATION_PRESENT && (r(e, this.offset + n, this.defaultSampleDuration), n += 4), i & B.DEFAULT_SAMPLE_SIZE_PRESENT && (r(e, this.offset + n, this.defaultSampleSize), n += 4), i & B.DEFAULT_SAMPLE_FLAGS_PRESENT && (r(e, this.offset + n, this.defaultSampleFlags), n += 4), n
                }, e
            }(m);
            l.TrackFragmentHeaderBox = H;
            var j = function (t) {
                function e(e) {
                    t.call(this, "tfdt", 0, 0), this.baseMediaDecodeTime = e
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 4, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, this.baseMediaDecodeTime), n + 4
                }, e
            }(m);
            l.TrackFragmentBaseMediaDecodeTimeBox = j;
            var G = function (t) {
                function e(e, n, i) {
                    t.call(this, "traf", [e, n, i]), this.header = e, this.decodeTime = n, this.run = i
                }

                return f(e, t), e
            }(v);
            l.TrackFragmentBox = G, function (t) {
                t[t.IS_LEADING_MASK = 201326592] = "IS_LEADING_MASK", t[t.SAMPLE_DEPENDS_ON_MASK = 50331648] = "SAMPLE_DEPENDS_ON_MASK", t[t.SAMPLE_DEPENDS_ON_OTHER = 16777216] = "SAMPLE_DEPENDS_ON_OTHER", t[t.SAMPLE_DEPENDS_ON_NO_OTHERS = 33554432] = "SAMPLE_DEPENDS_ON_NO_OTHERS", t[t.SAMPLE_IS_DEPENDED_ON_MASK = 12582912] = "SAMPLE_IS_DEPENDED_ON_MASK", t[t.SAMPLE_HAS_REDUNDANCY_MASK = 3145728] = "SAMPLE_HAS_REDUNDANCY_MASK", t[t.SAMPLE_PADDING_VALUE_MASK = 917504] = "SAMPLE_PADDING_VALUE_MASK", t[t.SAMPLE_IS_NOT_SYNC = 65536] = "SAMPLE_IS_NOT_SYNC", t[t.SAMPLE_DEGRADATION_PRIORITY_MASK = 65535] = "SAMPLE_DEGRADATION_PRIORITY_MASK"
            }(l.SampleFlags || (l.SampleFlags = {})), l.SampleFlags, !function (t) {
                t[t.DATA_OFFSET_PRESENT = 1] = "DATA_OFFSET_PRESENT", t[t.FIRST_SAMPLE_FLAGS_PRESENT = 4] = "FIRST_SAMPLE_FLAGS_PRESENT", t[t.SAMPLE_DURATION_PRESENT = 256] = "SAMPLE_DURATION_PRESENT", t[t.SAMPLE_SIZE_PRESENT = 512] = "SAMPLE_SIZE_PRESENT", t[t.SAMPLE_FLAGS_PRESENT = 1024] = "SAMPLE_FLAGS_PRESENT", t[t.SAMPLE_COMPOSITION_TIME_OFFSET = 2048] = "SAMPLE_COMPOSITION_TIME_OFFSET"
            }(l.TrackRunFlags || (l.TrackRunFlags = {}));
            var Y = l.TrackRunFlags, V = function (t) {
                function e(e, n, i, r) {
                    t.call(this, "trun", 1, e), this.samples = n, this.dataOffset = i, this.firstSampleFlags = r
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e) + 4, i = this.samples.length, r = this.flags;
                    return r & Y.DATA_OFFSET_PRESENT && (n += 4), r & Y.FIRST_SAMPLE_FLAGS_PRESENT && (n += 4), r & Y.SAMPLE_DURATION_PRESENT && (n += 4 * i), r & Y.SAMPLE_SIZE_PRESENT && (n += 4 * i), r & Y.SAMPLE_FLAGS_PRESENT && (n += 4 * i), r & Y.SAMPLE_COMPOSITION_TIME_OFFSET && (n += 4 * i), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e), i = this.samples.length, o = this.flags;
                    r(e, this.offset + n, i), n += 4, o & Y.DATA_OFFSET_PRESENT && (r(e, this.offset + n, this.dataOffset), n += 4), o & Y.FIRST_SAMPLE_FLAGS_PRESENT && (r(e, this.offset + n, this.firstSampleFlags), n += 4);
                    for (var s = 0; i > s; s++) {
                        var a = this.samples[s];
                        o & Y.SAMPLE_DURATION_PRESENT && (r(e, this.offset + n, a.duration), n += 4), o & Y.SAMPLE_SIZE_PRESENT && (r(e, this.offset + n, a.size), n += 4), o & Y.SAMPLE_FLAGS_PRESENT && (r(e, this.offset + n, a.flags), n += 4), o & Y.SAMPLE_COMPOSITION_TIME_OFFSET && (r(e, this.offset + n, a.compositionTimeOffset), n += 4)
                    }
                    return n
                }, e
            }(m);
            l.TrackRunBox = V;
            var z = function (t) {
                function e(e, n) {
                    t.call(this, "moof", i([e], n)), this.header = e, this.trafs = n
                }

                return f(e, t), e
            }(v);
            l.MovieFragmentBox = z;
            var W = function (t) {
                function e(e) {
                    t.call(this, "mdat"), this.chunks = e
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e);
                    return this.chunks.forEach(function (t) {
                        n += t.length
                    }), this.size = n
                }, e.prototype.write = function (e) {
                    var n = this, i = t.prototype.write.call(this, e);
                    return this.chunks.forEach(function (t) {
                        e.set(t, n.offset + i), i += t.length
                    }, this), i
                }, e
            }(_);
            l.MediaDataBox = W;
            var K = function (t) {
                function e(e, n) {
                    t.call(this, e), this.dataReferenceIndex = n
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + 8, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, 0), r(e, this.offset + n + 4, this.dataReferenceIndex), n + 8
                }, e
            }(_);
            l.SampleEntry = K;
            var q = function (t) {
                function e(e, n, i, r, o, s) {
                    void 0 === i && (i = 2), void 0 === r && (r = 16), void 0 === o && (o = 44100), void 0 === s && (s = null), t.call(this, e, n), this.channelCount = i, this.sampleSize = r, this.sampleRate = o, this.otherBoxes = s
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e) + 20;
                    return this.otherBoxes && this.otherBoxes.forEach(function (t) {
                        n += t.layout(e + n)
                    }), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return r(e, this.offset + n, 0), r(e, this.offset + n + 4, 0), r(e, this.offset + n + 8, this.channelCount << 16 | this.sampleSize), r(e, this.offset + n + 12, 0), r(e, this.offset + n + 16, this.sampleRate << 16), n += 20, this.otherBoxes && this.otherBoxes.forEach(function (t) {
                        n += t.write(e)
                    }), n
                }, e
            }(K);
            l.AudioSampleEntry = q, l.COLOR_NO_ALPHA_VIDEO_SAMPLE_DEPTH = 24;
            var X = function (t) {
                function e(e, n, i, r, o, s, a, u, h, c) {
                    if (void 0 === o && (o = ""), void 0 === s && (s = 72), void 0 === a && (a = 72), void 0 === u && (u = 1), void 0 === h && (h = l.COLOR_NO_ALPHA_VIDEO_SAMPLE_DEPTH), void 0 === c && (c = null), t.call(this, e, n), this.width = i, this.height = r, this.compressorName = o, this.horizResolution = s, this.vertResolution = a, this.frameCount = u, this.depth = h, this.otherBoxes = c, o.length > 31)throw new Error("invalid compressor name")
                }

                return f(e, t), e.prototype.layout = function (e) {
                    var n = t.prototype.layout.call(this, e) + 16 + 12 + 4 + 2 + 32 + 2 + 2;
                    return this.otherBoxes && this.otherBoxes.forEach(function (t) {
                        n += t.layout(e + n)
                    }), this.size = n
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    r(e, this.offset + n, 0), r(e, this.offset + n + 4, 0), r(e, this.offset + n + 8, 0), r(e, this.offset + n + 12, 0), n += 16, r(e, this.offset + n, this.width << 16 | this.height), r(e, this.offset + n + 4, a(this.horizResolution)), r(e, this.offset + n + 8, a(this.vertResolution)), n += 12, r(e, this.offset + n, 0), r(e, this.offset + n + 4, this.frameCount << 16), n += 6, e[this.offset + n] = this.compressorName.length;
                    for (var i = 0; 31 > i; i++)e[this.offset + n + i + 1] = i < this.compressorName.length ? 127 & this.compressorName.charCodeAt(i) : 0;
                    return n += 32, r(e, this.offset + n, this.depth << 16 | 65535), n += 4, this.otherBoxes && this.otherBoxes.forEach(function (t) {
                        n += t.write(e)
                    }), n
                }, e
            }(K);
            l.VideoSampleEntry = X;
            var $ = function (t) {
                function e(e, n) {
                    t.call(this, e), this.data = n
                }

                return f(e, t), e.prototype.layout = function (e) {
                    return this.size = t.prototype.layout.call(this, e) + this.data.length, this.size
                }, e.prototype.write = function (e) {
                    var n = t.prototype.write.call(this, e);
                    return e.set(this.data, this.offset + n), n + this.data.length
                }, e
            }(_);
            l.RawTag = $
        }, function (t, e, n) {
            (function (e) {
                var i, r = n(74), o = n(69), s = (o.BaseTransform, n(119));
                n(120), t.exports = i = function () {
                    o.BaseParser.prototype.constructor.apply(this, arguments), this.parser = new s, this.parser.onFrame = this._onMp3Frame.bind(this), this.parser.onNoise = this._onNoise.bind(this), this.parser.onClose = this._onClose.bind(this), this._sampleRate = 0, this._bitRate = 0, this._timestamp = 0
                }, i.prototype = o.createBaseParser({
                    constructor: i, _onMp3Frame: function (t, n, i) {
                        r("Found frame length " + t.length + " bitRate=" + n + ", sampleRate=" + i);
                        var s = new e(t), a = 1152;
                        s.meta = {
                            mimeType: "audio/mpeg",
                            codecId: 2,
                            channels: 2,
                            bitRate: n,
                            sampleRate: i,
                            sampleSize: 16
                        }, s.duration = a, s.timestamp = this._timestamp, this.enqueue(new o.Transfer(s, "buffer")), this._bitRate = n, this._timestamp += a
                    }, _onNoise: function () {
                        r("mp3 has noise")
                    }, _onClose: function () {
                        r("parser closed")
                    }, _parse: function (t) {
                        return r("parse called"), t.data.empty ? (r("empty transfer"), void this.enqueue(t)) : void this.parser.push(new Uint8Array(t.data))
                    }
                })
            }).call(e, n(70).Buffer)
        }, function (t, e, n) {
            var i = n(74), r = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], o = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], s = function () {
                function t() {
                    this.buffer = null, this.bufferSize = 0
                }

                return t.prototype.push = function (t) {
                    var e;
                    if (this.bufferSize > 0) {
                        var n = t.length + this.bufferSize;
                        if (!this.buffer || this.buffer.length < n) {
                            var r = new Uint8Array(n);
                            this.bufferSize > 0 && r.set(this.buffer.subarray(0, this.bufferSize)), this.buffer = r
                        }
                        this.buffer.set(t, this.bufferSize), this.bufferSize = n, t = this.buffer, e = n
                    } else e = t.length;
                    i("push " + e);
                    for (var o, s = 0; e > s && (o = this._parse(t, s, e)) > 0;)s += o;
                    var a = e - s;
                    a > 0 && (!this.buffer || this.buffer.length < a ? this.buffer = new Uint8Array(t.subarray(s, e)) : this.buffer.set(t.subarray(s, e))), this.bufferSize = a
                }, t.prototype._parse = function (t, e, n) {
                    if (i("_parse"), e + 2 > n)return -1;
                    if (255 === t[e] || 224 === (224 & t[e + 1])) {
                        if (e + 24 > n)return -1;
                        var s = t[e + 1] >> 3 & 3, a = t[e + 1] >> 1 & 3, u = t[e + 2] >> 4 & 15, h = t[e + 2] >> 2 & 3, c = !!(2 & t[e + 2]);
                        if (1 !== s && 0 !== u && 15 !== u && 3 !== h) {
                            var l = 3 === s ? 3 - a : 3 === a ? 3 : 4, f = 1e3 * r[14 * l + u - 1], d = 3 === s ? 0 : 2 === s ? 1 : 2, p = o[3 * d + h], g = c ? 1 : 0, _ = 3 === a ? (3 === s ? 12 : 6) * f / p + g << 2 : (3 === s ? 144 : 72) * f / p + g | 0;
                            return e + _ > n ? -1 : (this.onFrame && (i("onFrame"), this.onFrame(t.subarray(e, e + _), f, p)), _)
                        }
                    }
                    for (var m = e + 2; n > m;) {
                        if (255 === t[m - 1] && 224 === (224 & t[m]))return this.onNoise && this.onNoise(t.subarray(e, m - 1)), m - e - 1;
                        m++
                    }
                    return -1
                }, t.prototype.close = function () {
                    this.bufferSize > 0 && this.onNoise && this.onNoise(this.buffer.subarray(0, this.bufferSize)), this.buffer = null, this.bufferSize = 0, this.onClose && this.onClose()
                }, t
            }();
            t.exports = s
        }, function (t, e) {
            var n = 1e9;
            t.exports = {TIMESCALE_SECONDS: n}
        }, function (t, e, n) {
            var i, r = n(122), o = n(69), s = o.BaseSink, a = n(123);
            t.exports = i = function (t) {
                if (s.prototype.constructor.call(this), !r.haveMediaSourceSupportMimeType(t))throw new Error("Local MediaSource doesn't support provided MIME type: " + t);
                var e;
                e = arguments.length > 1 ? Array.prototype.slice.call(arguments) : t instanceof Array ? t : [t], this.mimeTypes = e, this.mediaSource = new MediaSource, this.mseWriter = new a(this.mediaSource), this.dataSources = [], this.selectedDataSourceIndex = 0, this.mimeTypes.forEach(function (t) {
                    var e = {mimeType: t};
                    this.mseWriter.listen(e), this.dataSources.push(e)
                }.bind(this))
            }, i.prototype = o.createBaseSink({
                constructor: i, _onData: function () {
                    var t = this.dataSources[this.selectedDataSourceIndex];
                    if (!t || !t.onData)throw new Error("DataSource is not existing or has no onData function defined");
                    var e = this.dequeue();
                    e && t.onData(e.data)
                }, getMediaSourceUrl: function () {
                    return URL.createObjectURL(this.mediaSource)
                }
            })
        }, function (t, e) {
            var n;
            t.exports = n = {
                haveGlobalWindow: function () {
                    return "undefined" != typeof window
                }, haveMediaSourceExtensions: function () {
                    return n.haveGlobalWindow() && window.MediaSource
                }, haveMediaSourceSupportMimeType: function (t) {
                    return n.haveMediaSourceExtensions() && window.MediaSource.isTypeSupported(t)
                }
            }
        }, function (t, e) {
            var n = function () {
                function t(t, e) {
                    this.mediaSource = t, this.dataSource = e, this.dataSource.onData = this.pushData.bind(this), this.updateEnabled = !1, this.buffer = [], this.sourceBuffer = null, this.sourceBufferUpdatedBound = null
                }

                return t.prototype.allowWriting = function () {
                    this.updateEnabled = !0, this.update()
                }, t.prototype.pushData = function (t) {
                    this.buffer.push(t), this.update()
                }, t.prototype.update = function () {
                    if (this.updateEnabled && 0 !== this.buffer.length) {
                        this.sourceBuffer || (this.sourceBuffer = this.mediaSource.addSourceBuffer(this.dataSource.mimeType), this.sourceBufferUpdatedBound = this._sourceBufferUpdated.bind(this), this.sourceBuffer.addEventListener("update", this.sourceBufferUpdatedBound)), this.updateEnabled = !1;
                        var t = this.buffer.shift();
                        if (null === t)return void this.sourceBuffer.removeEventListener("update", this.sourceBufferUpdatedBound);
                        t.timestamp && (this.sourceBuffer.timestampOffset = t.timestamp / 1e9), this.sourceBuffer.appendBuffer(t)
                    }
                }, t.prototype._sourceBufferUpdated = function (t) {
                    this.updateEnabled = !0, this.update()
                }, t.prototype.finish = function () {
                    this.buffer.push(null), this.update()
                }, t
            }(), i = function () {
                function t(t) {
                    this.bufferWriters = [], this.mediaSource = t, this.mediaSourceOpened = !1, this.mediaSource.addEventListener("sourceopen", function (t) {
                        this.mediaSourceOpened = !0, this.bufferWriters.forEach(function (t) {
                            t.allowWriting()
                        })
                    }.bind(this)), this.mediaSource.addEventListener("sourceend", function (t) {
                        this.mediaSourceOpened = !1
                    }.bind(this))
                }

                return t.prototype.listen = function (t) {
                    var e = new n(this.mediaSource, t);
                    this.bufferWriters.push(e), this.mediaSourceOpened && e.allowWriting()
                }, t
            }();
            t.exports = i
        }, function (t, e, n) {
            var i, r, o = n(69);
            r = function (t) {
                o.BasePushSrc.prototype.constructor.call(this);
                var e = this.req = new XMLHttpRequest;
                e.open("GET", t, !0), e.responseType = "arraybuffer", e.onload = function (t) {
                    this.enqueue(new o.Transfer(new Uint8Array(e.response), "binary")), this.enqueue(new o.Transfer(null, "binary"))
                }.bind(this), e.send()
            }, r.prototype = o.createBasePushSrc({constructor: r}), t.exports = i = {Src: r}
        }, function (t, e, n) {
            var i, r, o, s = n(69), a = n(126);
            n(76), r = function (t, e) {
                s.prototype.constructor.call(this);
                var n = a.createReadStream(t, e);
                this.on("end", function () {
                    n.close()
                }), this.addOutput(n)
            }, r.prototype = s.create({constructor: r}), o = function (t, e) {
                s.prototype.constructor.call(this);
                var n = a.createWriteStream(t, e);
                this.on("finish", function () {
                    n.close()
                }), this.addInput(n)
            }, o.prototype = s.create({constructor: o}), t.exports = i = {Src: r, Sink: o}
        }, function (t, e, n) {
            var i = n(122);
            t.exports = i.haveGlobalWindow() ? new (n(127)) : n(!function () {
                var t = new Error('Cannot find module "fs"');
                throw t.code = "MODULE_NOT_FOUND", t
            }())
        }, function (t, e, n) {
            var i;
            i = function () {
                function t() {
                    return !1
                }

                function e(t) {
                    return !(!(t && t.data instanceof Object) || n(t))
                }

                function n(t) {
                    return !!(t && t.data instanceof ArrayBuffer)
                }

                function i(t, n) {
                    var i, r = t.length, o = n;
                    for (i = 0; r > i; ++i) {
                        if (!e(o))throw new Error("ENOENT");
                        o = o.data[t[i]]
                    }
                    return o
                }

                String.prototype.trim || !function () {
                    var t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function () {
                        return this.replace(t, "")
                    }
                }();
                var r = function () {
                    var t = Date.now();
                    this.root = {mtime: t, ctime: t, atime: t, data: {}}
                };
                return r.prototype.join = function () {
                    var t = [], e = arguments || [];
                    return t = this.parse(Array.prototype.slice.call(e).join("/")), ("/" === e[0][0] ? "/" : "") + t.join("/")
                }, r.prototype.parse = function (t) {
                    var e = [];
                    return t = t || "/", t.split(/\/+/).forEach(function (t) {
                        t = t.trim(), t.length && "." !== t && (".." === t ? e.pop() : e.push(t))
                    }), e
                }, r.prototype.fileSizeSI = function (t, e, n, i, r) {
                    return (e = Math, n = e.log, i = 1e3, r = n(t) / n(i) | 0, t / e.pow(i, r)).toFixed(r ? 2 : 0) + " " + (r ? "kMGTPEZY"[--r] + "B" : "Bytes")
                }, r.prototype.fileSizeIEC = function (t, e, n, i, r) {
                    return (e = Math, n = e.log, i = 1024, r = n(t) / n(i) | 0, t / e.pow(i, r)).toFixed(r ? 2 : 0) + " " + (r ? "KMGTPEZY"[--r] + "iB" : "Bytes")
                }, r.prototype.statSync = function (n) {
                    var r = this.parse(n), o = i(r, this.root), s = e(o);
                    if (!o || !o.data)throw new Error("ENOENT");
                    return {
                        size: s ? Object.keys(o.data).length : o.data.byteLength,
                        ctime: new Date(o.ctime),
                        mtime: new Date(o.mtime),
                        atime: new Date(o.atime),
                        isFile: function () {
                            return !s
                        },
                        isDirectory: function () {
                            return s
                        },
                        isBlockDevice: t,
                        isCharacterDevice: t,
                        isSymbolicLink: t,
                        isFIFO: t,
                        isSocket: t
                    }
                }, r.prototype.existsSync = function (t) {
                    var n, i = this.parse(t), r = i.length, o = this.root;
                    for (n = 0; r > n; ++n) {
                        if (!e(o))return !1;
                        o = o.data[i[n]]
                    }
                    return !!o
                }, r.prototype.mkdirSync = function (t) {
                    var n = this.parse(t), r = i(n.slice(0, n.length - 1), this.root), o = Date.now();
                    if (!n.length || !e(r))throw new Error("ENODIR");
                    r.data[n[n.length - 1]] = {data: {}, ctime: o, mtime: o, atime: o}, r.mtime = o
                }, r.prototype.mkdirpSync = function (t) {
                    var r, o, s, a = this.parse(t), u = a.length;
                    if (!a.length)throw new Error("ENODIR");
                    for (o = 0; u > o; ++o) {
                        if (r = a.slice(0, o + 1), s = i(r, this.root), n(s))throw new Error("ENODIR");
                        e(s) || this.mkdirSync(r.join("/"))
                    }
                }, r.prototype.readdirSync = function (t) {
                    var n = this.parse(t), r = i(n, this.root);
                    if (!e(r))throw new Error("ENODIR");
                    return r.atime = Date.now(), Object.keys(r.data)
                }, r.prototype.rmdirSync = function (t) {
                    var n = this.parse(t), r = i(n, this.root);
                    if (dirname = n.pop(), parentDir = i(n, this.root), !e(r))throw new Error("ENODIR");
                    if (Object.keys(r.data).length)throw new Error("ENOTEMPTY");
                    delete parentDir.data[dirname], parentDir.mtime = Date.now()
                }, r.prototype.rmrfSync = function (t) {
                    var n = this.parse(t), r = n.pop(), o = i(n, this.root);
                    if (!e(o))throw new Error("ENODIR");
                    r ? delete o.data[r] : o.data = {}, o.mtime = Date.now()
                }, r.prototype.writeFileSync = function (t, n, r) {
                    var o, s, a = this.parse(t), u = a.pop(), h = this.existsSync(t), c = i(a, this.root);
                    if (!e(c))throw new Error("ENODIR");
                    if (!u)throw new Error("EINVALIDPATH");
                    if (r = r || {encoding: !0}, "string" == typeof n) {
                        o = new ArrayBuffer(2 * n.length);
                        for (var l = new Uint16Array(o), f = 0, d = n.length; d > f; ++f)l[f] = n.charCodeAt(f)
                    } else o = n;
                    s = Date.now(), c.data[u] = {data: o, ctime: s, mtime: s, atime: s}, h || (c.mtime = s), c.atime = s
                }, r.prototype.readFileSync = function (t, e) {
                    var r = this.parse(t), o = i(r, this.root), e = e || {encoding: !1};
                    if (!n(o))throw new Error("ENOENT");
                    return o.atime = Date.now(), e.encoding ? String.fromCharCode.apply(null, new Uint16Array(o.data)) : o.data
                }, r.prototype.renameSync = function (t, n) {
                    var r = this.parse(t), o = i(r, this.root), s = i(r.slice(0, r.length - 1), this.root), a = r[r.length - 1], u = this.parse(n), h = i(u, this.root), c = i(u.slice(0, u.length - 1), this.root), l = u[u.length - 1], f = Date.now();
                    if (!r.length || !u.length)throw new Error("ENOENT");
                    if (!e(s || !e(c)))throw new Error("ENODIR");
                    if (h)throw new Error("EEXISTS");
                    c.data[l] = h = o, h.ctime = f, c.mtime = f, delete s.data[a], s.mtime = f
                }, ["stat", "exists", "readdir", "mkdirp", "mkdir", "rmdir", "rmrf", "unlink"].forEach(function (t) {
                    r.prototype[t] = function (e, n) {
                        try {
                            var i = this[t + "Sync"](e)
                        } catch (r) {
                            return n(r)
                        }
                        return n(null, i)
                    }
                }), ["writeFile", "readFile"].forEach(function (t) {
                    r.prototype[t] = function (e, n, i) {
                        i || (i = n, n = void 0);
                        try {
                            var r = this[t + "Sync"](e, n)
                        } catch (o) {
                            return i(o)
                        }
                        return i(null, r)
                    }
                }), ["rename"].forEach(function (t) {
                    r.prototype[t] = function (e, n, i) {
                        try {
                            var r = this[t + "Sync"](e, n)
                        } catch (o) {
                            return i(o)
                        }
                        return i(null, r)
                    }
                }), r
            }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
        }, function (t, e) {
            var n = {HTTP: "http", RTMP: "rtmp", HLS: "hls"};
            t.exports = n
        }, function (t, e) {
            t.exports = {
                AAC: "audio/aac",
                M3U8: "application/x-mpegURL",
                HLS: "application/vnd.apple.mpegurl",
                MP4A: "audio/mp4",
                MP3: "audio/mpeg",
                OGG: "audio/ogg",
                WAV: "audio/wav",
                WEBMA: "audio/webm",
                getTypeByExtension: function (t) {
                    var e = {
                        mp3: this.MP3,
                        aac: this.AAC,
                        mp4: this.MP4A,
                        mp4a: this.MP4A,
                        ogg: this.OGG,
                        oga: this.OGG,
                        opus: this.OGG,
                        webm: this.WEBM,
                        wav: this.WAV,
                        m3u8: this.M3U8
                    };
                    return e[t] || null
                }
            }
        }, function (t, e, n, i, r, o) {
            function s(t, e, n) {
                for (var i = -1, r = h(e), o = r.length; ++i < o;) {
                    var s = r[i], a = t[s], u = n(a, e[s], s, t, e);
                    (u === u ? u === a : a !== a) && (void 0 !== a || s in t) || (t[s] = u)
                }
                return t
            }

            var a = n(i), u = n(r), h = n(o), c = u(function (t, e, n) {
                return n ? s(t, e, n) : a(t, e)
            });
            t.exports = c
        }, function (t, e, n, i, r) {
            function o(t, e) {
                return null == e ? t : s(e, a(e), t)
            }

            var s = n(i), a = n(r);
            t.exports = o
        }, function (t, e, n, i, r, o) {
            function s(t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            }

            function a(t) {
                return null != t && h(S(t))
            }

            function u(t, e) {
                return t = "number" == typeof t || _.test(t) ? +t : -1, e = null == e ? E : e, t > -1 && t % 1 == 0 && e > t
            }

            function h(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && E >= t
            }

            function c(t) {
                for (var e = f(t), n = e.length, i = n && t.length, r = !!i && h(i) && (g(t) || p(t)), o = -1, s = []; ++o < n;) {
                    var a = e[o];
                    (r && u(a, i) || y.call(t, a)) && s.push(a)
                }
                return s
            }

            function l(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function f(t) {
                if (null == t)return [];
                l(t) || (t = Object(t));
                var e = t.length;
                e = e && h(e) && (g(t) || p(t)) && e || 0;
                for (var n = t.constructor, i = -1, r = "function" == typeof n && n.prototype === t, o = Array(e), s = e > 0; ++i < e;)o[i] = i + "";
                for (var a in t)s && u(a, e) || "constructor" == a && (r || !y.call(t, a)) || o.push(a);
                return o
            }

            var d = n(i), p = n(r), g = n(o), _ = /^\d+$/, m = Object.prototype, y = m.hasOwnProperty, v = d(Object, "keys"), E = 9007199254740991, S = s("length"), A = v ? function (t) {
                var e = null == t ? void 0 : t.constructor;
                return "function" == typeof e && e.prototype === t || "function" != typeof t && a(t) ? c(t) : l(t) ? v(t) : []
            } : c;
            t.exports = A
        }, function (t, e, n, i, r, o) {
            function s(t) {
                return h(function (e, n) {
                    var i = -1, r = null == e ? 0 : n.length, o = r > 2 ? n[r - 2] : void 0, s = r > 2 ? n[2] : void 0, h = r > 1 ? n[r - 1] : void 0;
                    for ("function" == typeof o ? (o = a(o, h, 5), r -= 2) : (o = "function" == typeof h ? h : void 0, r -= o ? 1 : 0), s && u(n[0], n[1], s) && (o = 3 > r ? void 0 : o, r = 1); ++i < r;) {
                        var c = n[i];
                        c && t(e, c, o)
                    }
                    return e
                })
            }

            var a = n(i), u = n(r), h = n(o);
            t.exports = s
        }, function (t, e, n, i) {
            function r(t, e) {
                return p(t, e, l)
            }

            function o(t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            }

            function s(t, e) {
                return function (n, i) {
                    var r = n ? g(n) : 0;
                    if (!u(r))return t(n, i);
                    for (var o = e ? r : -1, s = h(n); (e ? o-- : ++o < r) && i(s[o], o, s) !== !1;);
                    return n
                }
            }

            function a(t) {
                return function (e, n, i) {
                    for (var r = h(e), o = i(e), s = o.length, a = t ? s : -1; t ? a-- : ++a < s;) {
                        var u = o[a];
                        if (n(r[u], u, r) === !1)break
                    }
                    return e
                }
            }

            function u(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && f >= t
            }

            function h(t) {
                return c(t) ? t : Object(t)
            }

            function c(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            var l = n(i), f = 9007199254740991, d = s(r), p = a(), g = o("length");
            t.exports = d
        }]))
    }, function (t, e, n) {
        var i = n(22), r = function (t, e) {
            var n = e || {}, r = n.bufferLen || 4096, o = n.numChannels || 2;
            this.context = t.context, this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, r, o, o);
            var s = new i;
            s.postMessage({command: "init", config: {sampleRate: this.context.sampleRate, numChannels: o}});
            var a, u = !1;
            this.node.onaudioprocess = function (t) {
                if (u) {
                    for (var e = [], n = 0; o > n; n++)e.push(t.inputBuffer.getChannelData(n));
                    s.postMessage({command: "record", buffer: e})
                }
            }, this.configure = function (t) {
                for (var e in t)t.hasOwnProperty(e) && (n[e] = t[e])
            }, this.record = function () {
                u = !0
            }, this.stop = function () {
                u = !1
            }, this.clear = function () {
                s.postMessage({command: "clear"})
            }, this.getBuffer = function (t) {
                a = t || n.callback, s.postMessage({command: "getBuffer"})
            }, this.exportWAV = function (t, e) {
                if (a = t || n.callback, e = e || n.type || "audio/wav", !a)throw new Error("Callback not set");
                s.postMessage({command: "exportWAV", type: e})
            }, s.onmessage = function (t) {
                var e = t.data;
                a(e)
            }, t.connect(this.node), this.node.connect(this.context.destination)
        };
        r.forceDownload = function (t, e) {
            var n = (window.URL || window.webkitURL).createObjectURL(t), i = window.document.createElement("a");
            i.href = n, i.download = e || "output.wav";
            var r = document.createEvent("Event");
            r.initEvent("click", !0, !0), i.dispatchEvent(r)
        }, t.exports = r
    }, function (t, e) {
        t.exports = function (t) {
            function e(i) {
                if (n[i])return n[i].exports;
                var r = n[i] = {exports: {}, id: i, loaded: !1};
                return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }

            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function (t, e, n) {
            function i() {
                return this._hooksPause.every(function (t) {
                    return t.call()
                })
            }

            function r(t) {
                var e = t.resource_id || t.id || t.cid;
                if (!e)throw new Error("Your model should have a unique `id`, `cid` or `resource_id` property");
                return e
            }

            function o(t) {
                C = t, t && (x.AudioManagerStates = t.States)
            }

            function s() {
                var t = G();
                return p.call(this, !0).done(function (e) {
                    t.resolve(e.url)
                }).fail(function () {
                    t.reject()
                }), t.promise()
            }

            function a(t) {
                var e, n = this.options;
                return e = {
                    id: this.getId(),
                    src: t.url,
                    duration: $.result(n.duration),
                    title: this.options.title,
                    mimeType: t.mimeType,
                    forceSingle: n.useSinglePlayer
                }, C.createAudioPlayer(e, {streamUrlProvider: s.bind(this)})
            }

            function u(t, e) {
                var n = e ? "on" : "off";
                t[n]("state-change", L, this)[n]("position-change", c, this)[n]("metadata", h, this)
            }

            function h() {
                this.trigger(Y.METADATA)
            }

            function c() {
                this._prevPosition !== this.currentTime() && (this.trigger(Y.TIME), this._prevPosition = this.currentTime())
            }

            function l() {
                this._initAudioDefer && (this._initAudioDefer.reject(), this._initAudioDefer = null, this.streamInfo = null)
            }

            function f() {
                l.call(this), this.controller && (this._storedPosition = this.currentTime(), this.controller.kill(), this.controller = null, this.trigger(Y.RESET))
            }

            function d() {
                this._registerPlays = !0, this.pause(), this.trigger(Y.FINISH)
            }

            function p(t) {
                var e = G(), n = this.streamInfo && !t;
                return n ? e.resolve(this.streamInfo) : g.call(this).done(function (t) {
                    var n = q.choosePreferredStream(t, this.options);
                    n ? e.resolve(n) : (this.trigger(Y.NO_PROTOCOL), F.warn("(%s) Could not match a protocol of given media descriptor to one of the supported protocols (%s), aborting attempt to play.", this.getId(), this.options.protocols), e.reject())
                }.bind(this)).fail(function (t) {
                    F.warn("(%s) Stream request failed with status: %d", this.getId(), t.status), _.call(this, t), m.call(this, t), e.reject()
                }.bind(this)), e.promise()
            }

            function g() {
                if (this.options.streamUrls && !this._usedPrefetchUrls) {
                    var t, e = G();
                    return this._usedPrefetchUrls = !0, t = $.result(this.options.streamUrls), e.resolve(t), e.promise()
                }
                return this.ajax({
                    type: "GET",
                    url: $.result(this.options.streamUrlsEndpoint),
                    dataType: "json",
                    async: this.options.asyncFetch,
                    timeout: this.options.asyncFetch ? nt : et
                })
            }

            function _(t) {
                var e = t.status >= 400 && -1 !== (t.responseText || "").indexOf("geo_blocked");
                e && this.trigger(Y.GEO_BLOCKED)
            }

            function m(t) {
                0 === t.status && this.trigger(Y.NO_CONNECTION)
            }

            function y() {
                return this.controller && this.controller.getCapabilities && this.controller.getCapabilities() ? this.controller.getCapabilities().needsUrlRefresh : !0
            }

            function v(t) {
                if (!y.call(this))return !0;
                var e = this._initAudioDefer && this._initAudioDefer.state(), n = q.streamValidForPlayingFrom(this.streamInfo, t);
                return this.controller && this.controller.hasStreamUrlProvider && this.controller.hasStreamUrlProvider() ? !0 : e && ("pending" === e || "resolved" === e && n)
            }

            function E(t) {
                t && !this._bufferingTimeout ? this._bufferingTimeout = window.setTimeout(function () {
                    this._isBuffering = !0, this.trigger(Y.BUFFERRING_START)
                }.bind(this), it) : t || (this._bufferingTimeout && (window.clearTimeout(this._bufferingTimeout), this._bufferingTimeout = null), this._isBuffering && (this._isBuffering = !1, this.trigger(Y.BUFFERRING_END)))
            }

            function S() {
                this.off(Y.TIME, this.seekTimeEventHandler), this.trigger(Y.SEEKED), this.seekTimeEventHandler = null
            }

            function A() {
                this._errorRecoveryFlagsResetTimeout = window.setTimeout(function () {
                    this._errorRecoveryTime = null, this._errorRecoveryCounts = 0
                }.bind(this), at)
            }

            function w() {
                this._errorRecoveryFlagsResetTimeout && window.clearTimeout(this._errorRecoveryFlagsResetTimeout)
            }

            function T() {
                var t = this.isPlaying(), e = Date.now();
                return w.call(this), this._errorRecoveryTime && this._errorRecoveryTime + ot > e && this._errorRecoveryCounts > st ? void this.trigger(Y.AUDIO_ERROR, this) : (this._errorRecoveryTime = Date.now(), this._errorRecoveryCounts++, f.call(this), void(t && this.play({
                    seek: this.currentTime(),
                    userInitiated: !1
                })))
            }

            function b(t) {
                this.logAudioError({
                    error_code: t,
                    protocol: this.streamInfo ? this.streamInfo.protocol : void 0,
                    player_type: this.controller ? this.controller.getType() : void 0,
                    host: this.streamInfo ? X.getUrlHost(this.streamInfo.url) : void 0,
                    url: this.streamInfo ? this.streamInfo.url : void 0
                })
            }

            function P() {
                var t, e = C.Errors;
                if (!this.controller)return F.error("(%s) Controller is null, aborting error handler.", this.getId(), this), b.call(this, null), void T.call(this);
                switch (t = this.controller && this.controller.getErrorID(), F.error("(%s) %s", this.getId(), this.controller.getErrorMessage ? this.controller.getErrorMessage() : "Controller does not provide getErrorMessage()"), D(t, "MSE", "GENERIC", "HTML5_AUDIO_DECODE", "HTML5_AUDIO_SRC_NOT_SUPPORTED", "FLASH_PROXY", "FLASH_RTMP_CONNECT_FAILED", "FLASH_RTMP_CANNOT_PLAY_STREAM") && b.call(this, t), t) {
                    case e.FLASH_PROXY_CANT_LOAD_FLASH:
                        this.trigger(Y.FLASH_NOT_LOADED);
                        break;
                    case e.FLASH_PROXY_FLASH_BLOCKED:
                        this.trigger(Y.FLASH_BLOCK);
                        break;
                    case e.FLASH_RTMP_CONNECT_FAILED:
                        $.without(this.options.protocols, W.RTMP);
                    case e.FLASH_RTMP_CANNOT_PLAY_STREAM:
                    case e.FLASH_RTMP_CONNECT_CLOSED:
                    case e.HTML5_AUDIO_NETWORK:
                    case e.HTML5_AUDIO_ABORTED:
                    case e.HTML5_AUDIO_DECODE:
                    case e.HTML5_AUDIO_SRC_NOT_SUPPORTED:
                    case e.GENERIC_AUDIO_ENDED_EARLY:
                    case e.MSE_BAD_OBJECT_STATE:
                    case e.MSE_NOT_SUPPORTED:
                    case e.MSE_MP3_NOT_SUPPORTED:
                    case e.MSE_HLS_NOT_VALID_PLAYLIST:
                    case e.MSE_HLS_PLAYLIST_NOT_FOUND:
                    case e.MSE_HLS_SEGMENT_NOT_FOUND:
                        T.call(this);
                        break;
                    case e.GENERIC_AUDIO_OVERRUN:
                        d.call(this);
                        break;
                    default:
                        F.error("(%s) Unhandled audio error code: %s", this.getId(), t, this)
                }
            }

            function I(t, e) {
                switch (this.options.debug && O.call(this, t, e), t) {
                    case Y.PAUSE:
                        this._isPlaying = !1, this._isPlayActionQueued = !1;
                        break;
                    case Y.PLAY:
                        var n = e;
                        this.toggleMute(J.muted), this.setVolume(J.volume), this._isPlaying = !1, this._isPlayActionQueued = !0, this._userInitiatedPlay = void 0 !== n.userInitiated ? !!n.userInitiated : !0, M.call(this);
                        break;
                    case Y.PLAY_START:
                        this._isPlaying = !0, this._isPlayActionQueued = !1, this._registerPlays && this.registerPlay();
                        break;
                    case Y.BUFFERRING_START:
                    case Y.SEEK:
                        this._isPlaying && (this._isPlaying = !1, this._isPlayActionQueued = !0);
                        break;
                    case Y.BUFFERRING_END:
                    case Y.SEEKED:
                        this._isPlayActionQueued && (this._isPlaying = !0, this._isPlayActionQueued = !1);
                        break;
                    case Y.NO_CONNECTION:
                        this._hasNoConnection = !0, this._noConnectionSince = Date.now();
                        break;
                    case Y.NO_STREAMS:
                        this.pause(), E.call(this, !1), l.call(this), N.call(this);
                        break;
                    case Y.STREAMS:
                        this._noConnectionSince = null, this._hasNoConnection = !1;
                        break;
                    case Y.ONLINE:
                        k.call(this);
                        break;
                    case Y.OFFLINE:
                }
            }

            function L(t) {
                var e = C.States, n = C.Errors;
                switch (t) {
                    case e.IDLE:
                        R.call(this), this.controller && this.controller.getErrorID() === n.FLASH_PROXY_FLASH_BLOCKED && this.trigger(Y.FLASH_UNBLOCK);
                        break;
                    case e.PAUSED:
                        R.call(this), E.call(this, !1), this.seekTimeEventHandler && this.isPaused() && S.call(this), this.isPlaying() && this.trigger(Y.PAUSE, {position: this.currentTime()});
                        break;
                    case e.PLAYING:
                        R.call(this), E.call(this, !1), A.call(this), this.trigger(Y.PLAY_RESUME);
                        break;
                    case e.LOADING:
                    case e.SEEKING:
                        R.call(this), E.call(this, !0);
                        break;
                    case e.ENDED:
                        R.call(this), d.call(this);
                        break;
                    case e.ERROR:
                        E.call(this, !1), P.call(this)
                }
                this.trigger(Y.STATE_CHANGE, t)
            }

            function O(t, e) {
                var n = this.options.title;
                n = n && n.length ? " [" + n.replace(/\s/g, "").substr(0, 6) + "]" : "", t === Y.STATE_CHANGE ? F("(%s)%s Event: %s (%s)", this.getId(), n, t, e) : t !== Y.TIME || this._loggedTime ? t !== Y.TIME && F("(%s)%s Event: %s", this.getId(), n, t) : F("(%s)%s Event: %s %dms", this.getId(), n, t, this.currentTime()), this._loggedTime = t === Y.TIME
            }

            function R() {
                this._initAudioDefer && this._initAudioDefer.resolve()
            }

            function D(t) {
                return void 0 === C.Errors[t] ? !1 : Array.prototype.slice.call(arguments, 1).some(function (e) {
                    return 0 === t.indexOf(e)
                })
            }

            function M() {
                function t() {
                    var t = window.navigator.onLine;
                    F("Navigator `onLine` status is now: " + t), window.setTimeout(function () {
                        window.navigator.onLine === t && this.trigger(t ? Y.ONLINE : Y.OFFLINE)
                    }.bind(this), 500)
                }

                this._onlineEventsRegistered || (this._onlineEventsRegistered = !0, window.addEventListener("online", t.bind(this)), window.addEventListener("offline", t.bind(this)))
            }

            function k() {
                if (this.hasNoConnection() && this._isPlayRetryQueued) {
                    var t = Date.now() - this._noConnectionSince;
                    this._isPlayRetryQueued = !0, t < this.options.retryAfterNoConnectionEventTimeout && this.play({userInitiated: !1})
                }
            }

            function N() {
                this.hasNoConnection() && !this._userInitiatedPlay && (this._isPlayRetryQueued = !0)
            }

            var x, C, F, U = n(1), B = n(6), H = n(8), j = n(9), G = n(2).Deferred, Y = n(7), V = n(14), z = n(10), W = n(15), K = n(16), q = n(18), X = n(12), $ = n(13), Z = n(19), Q = {}, J = {
                muted: !1,
                volume: 1
            }, tt = {
                soundId: Q,
                duration: Q,
                title: null,
                registerEndpoint: Q,
                streamUrlsEndpoint: Q,
                resourceId: !1,
                debug: !1,
                asyncFetch: !0,
                useSinglePlayer: !0,
                protocols: [W.HLS, W.RTMP, W.HTTP],
                extensions: [V.MP3],
                maxBitrate: 1 / 0,
                mediaSourceEnabled: !1,
                mseFirefox: !1,
                mseSafari: !1,
                eventLogger: null,
                logErrors: !0,
                logPerformance: !0,
                ajax: null,
                retryAfterNoConnectionEventTimeout: 6e4,
                fadeOutOnPause: !1,
                fadeOutAlgo: Z.VolumeAutomator.Algos.EaseInOut
            }, et = 6e3, nt = 6e3, it = 400, rt = 6e4, ot = 6e3, st = 3, at = 3e4, ut = [];
            x = t.exports = function (t, e) {
                if (1 === arguments.length ? e = t : x.setAudioManager(t), !C)throw new Error("SCAudio: AudioManager instance must be set with `SCAudio.setAudioManager()` or passed via the constructor");
                this.options = $.extend({}, tt, e);
                var n = Object.keys(this.options).filter(function (t) {
                    return this.options[t] === Q
                }, this);
                if (n.length)throw new Error("SCAudio: pass into constructor the following options: " + n.join(", "));
                K.prioritizeAndFilter(this.options), this.controller = null, this.streamInfo = null, this._userInitiatedPlay = this._registerPlays = !0, this._registerCounts = this._errorRecoveryCounts = 0, this._isPlayActionQueued = this._onlineEventsRegistered = this._usedPrefetchUrls = this._isPlaying = this._isBuffering = this._hasNoConnection = !1, this._initAudioDefer = this._expirationTimeout = this._bufferingTimeout = this._errorRecoveryTime = this._errorRecoveryFlagsResetTimeout = this._storedPosition = this._prevPosition = this._noConnectionSince = null, this.options.debug && (this._loggedTime = !1), this._modelListeners = {}, this._hooksPause = [], this.audioPerfMonitor = new H(this, this.logAudioPerformance.bind(this)), this.audioLogger = new B(this), this.volumeAutomator = new Z.VolumeAutomator(this), F = F || j(e.debug, "scaudio")
            }, $.extend(x.prototype, z, {
                constructor: x, initAudio: function () {
                    return this._initAudioDefer || (this._initAudioDefer = G(), p.call(this).done(function (t) {
                        var e = !0;
                        this.streamInfo && (e = !1), this.streamInfo = t, e && this.trigger(Y.STREAMS), this.controller = a.call(this, t), u.call(this, this.controller, !0), L.call(this, this.controller.getState())
                    }.bind(this)).fail(function () {
                        this.trigger(Y.NO_STREAMS)
                    }.bind(this)), this._initAudioDefer.done(function () {
                        this.trigger(Y.CREATED)
                    }.bind(this))), this._initAudioDefer.promise()
                }, registerPlay: function () {
                    var t = this.options.soundId, e = !1;
                    return -1 === ut.indexOf(t) && (ut.push(t), window.setTimeout(function () {
                        var e = ut.indexOf(t);
                        e > -1 && ut.splice(e, 1)
                    }, rt), this.ajax({
                        type: "POST",
                        url: $.result(this.options.registerEndpoint),
                        dataType: "json"
                    }), this._registerCounts++, this._registerPlays = !1, this.trigger(Y.REGISTERED), e = !0), e
                }, toggle: function () {
                    this[this.isPaused() ? "play" : "pause"]()
                }, play: function (t) {
                    var e;
                    if (t && null != t.seek) e = t.seek; else {
                        if (this.isPlaying())return;
                        e = this.currentTime()
                    }
                    t = $.extend({}, t, {position: e}), this.trigger(Y.PLAY, t), v.call(this, e) || (f.call(this), this._isPlayActionQueued = !0), this.initAudio().done(function () {
                        this._isPlayActionQueued && (this._storedPosition = null, this.trigger(Y.PLAY_START, t), this.controller && this.controller.play(e))
                    }.bind(this)), E.call(this, !0)
                }, pause: function (t) {
                    this.isPaused() || (t = $.extend({}, t, {position: this.currentTime()}), i.call(this) && (this.trigger(Y.PAUSE, t), this.controller && this.controller.pause()))
                }, registerHook: function (t, e) {
                    switch (t) {
                        case"pause":
                            this._hooksPause.push(e);
                            break;
                        default:
                            throw new Error("can`t register hook for " + t)
                    }
                }, getListenTime: function () {
                    return this.audioLogger ? this.audioLogger.getListenTime() : 0
                }, dispose: function () {
                    this.audioLogger = null, this.audioPerfMonitor = null, $.without(ut, this.options.soundId), window.clearTimeout(this._bufferingTimeout), l.call(this), this.controller && (this.controller.kill(), this.controller = null), delete this.controller, this.trigger(Y.DESTROYED), this.off()
                }, seek: function (t) {
                    return this.controller ? t >= $.result(this.options.duration) ? void d.call(this) : (this.seekTimeEventHandler && this.off(Y.TIME, this.seekTimeEventHandler), this.seekTimeEventHandler = $.after(2, function () {
                        S.call(this)
                    }.bind(this)), this.on(Y.TIME, this.seekTimeEventHandler), this.trigger(Y.SEEK, {
                        from: this.currentTime(),
                        to: t
                    }), this.isPlaying() && !v.call(this, t) ? (f.call(this), void this.play({seek: t})) : void this.controller.seek(t)) : void 0
                }, seekRelative: function (t) {
                    this.controller && this.seek(this.currentTime() + t)
                }, currentTime: function () {
                    return this._storedPosition ? this._storedPosition : this.controller ? this.controller.getCurrentPosition() : 0
                }, loadProgress: function () {
                    var t = 0;
                    return this.controller && (t = this.controller.getLoadedPosition() / this.controller.getDuration(), t = t >= .99 ? 1 : t), t
                }, buffered: function () {
                    return this.controller && this.controller.getDuration() || 0
                }, isPaused: function () {
                    return !this.isPlaying()
                }, isBuffering: function () {
                    return this._isBuffering
                }, isPlaying: function () {
                    return this._isPlayActionQueued || this._isPlaying
                }, isLoading: function () {
                    return !(!this.controller || this.controller.getState() !== C.States.LOADING)
                }, hasNoConnection: function () {
                    return !!this._hasNoConnection
                }, hasStreamInfo: function () {
                    return !!this.streamInfo
                }, toggleMute: function (t) {
                    x.toggleMute(t)
                }, isMuted: function () {
                    return x.isMuted()
                }, setVolume: function (t) {
                    x.setVolume(t)
                }, getVolume: function () {
                    return x.getVolume()
                }, logAudioPerformance: function (t) {
                    this.getEventLogger() && this.options.logPerformance && this.getEventLogger().audioPerformance(t)
                }, logAudioError: function (t) {
                    this.getEventLogger() && this.options.logErrors && this.getEventLogger().audioError(t)
                }, getAudioManagerStates: function () {
                    return C.States
                }, getId: function () {
                    return this.options.resourceId || this.options.soundId
                }, getEventLogger: function () {
                    return this.options.eventLogger
                }, registerModelEventListener: function (t, e) {
                    var n = r(t);
                    if (this._modelListeners[n])throw new Error("Data model is already registered (forgot to unregister it or registering twice?)");
                    this._modelListeners[n] = e = e.bind(this, t), this.on("all", e)
                }, unregisterModelEventListener: function (t) {
                    var e = r(t);
                    this._modelListeners[e] && (this.off("all", this._modelListeners[e]), delete this._modelListeners[e])
                }, ajax: function (t) {
                    return this.options.ajax ? this.options.ajax(t) : U(t)
                }, trigger: function (t, e) {
                    I.call(this, t, e), z.trigger.call(this, t, e)
                }
            }), $.extend(x, {
                getSettings: function () {
                    return J
                }, setSettings: function (t) {
                    $.extend(J, t)
                }, setAudioManager: o, setAudioManagerOnce: $.once(o), toggleMute: function (t) {
                    J.muted = void 0 === t ? !J.muted : !!t, C && C.setVolume(J.muted ? 0 : 1)
                }, isMuted: function () {
                    return J.muted
                }, setVolume: function (t) {
                    J.volume = void 0 === t ? 1 : t, C && C.setVolume(J.volume)
                }, getVolume: function () {
                    return J.volume
                }, Extensions: V, Protocols: W, Events: Y, BUFFER_DELAY: it, PLAY_REGISTRATION_TIMEOUT: rt
            })
        }, function (t, e, n) {
            var i = n(2).Deferred, r = 4;
            t.exports = function (t) {
                var e, n, o, s, a, u, h, c;
                t && (o = t.data || null, n = t.url || "", e = t.type || "GET", s = t.dataType || "text", a = t.async, u = t.timeout, h = t.beforeSend || null);
                var l = i();
                a = a !== !1;
                var f = new XMLHttpRequest;
                return f.open(e, n, a), a && (f.responseType = "text"), h && h(f), f.onreadystatechange = function () {
                    if (f.readyState === r)if (clearTimeout(c), 0 !== f.status && f.status < 400) {
                        var t = f.responseText;
                        if ("json" === s)try {
                            t = JSON.parse(t)
                        } catch (e) {
                            return void l.reject(f)
                        }
                        l.resolve(t)
                    } else l.reject(f)
                }, null != u && (c = setTimeout(function () {
                    f.readyState !== r && (f.abort(), l.reject(f))
                }, u)), f.send(o), l.promise()
            }
        }, function (t, e, n) {
            t.exports = n(3)
        }, function (t, e, n) {/*!
         * jquery-deferred
         * Copyright(c) 2011 Hidden <zzdhidden@gmail.com>
         * MIT Licensed
         */
            var i = t.exports = n(4), r = Array.prototype.slice;
            i.extend({
                Deferred: function (t) {
                    var e = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]], n = "pending", r = {
                        state: function () {
                            return n
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return i.Deferred(function (n) {
                                i.each(e, function (e, r) {
                                    var s = r[0], a = t[e];
                                    o[r[1]](i.isFunction(a) ? function () {
                                        var t = a.apply(this, arguments);
                                        t && i.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === o ? n : this, [t])
                                    } : n[s])
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? i.extend(t, r) : r
                        }
                    }, o = {};
                    return r.pipe = r.then, i.each(e, function (t, i) {
                        var s = i[2], a = i[3];
                        r[i[1]] = s.add, a && s.add(function () {
                            n = a
                        }, e[1 ^ t][2].disable, e[2][2].lock), o[i[0]] = s.fire, o[i[0] + "With"] = s.fireWith
                    }), r.promise(o), t && t.call(o, o), o
                }, when: function (t) {
                    var e, n, o, s = 0, a = r.call(arguments), u = a.length, h = 1 !== u || t && i.isFunction(t.promise) ? u : 0, c = 1 === h ? t : i.Deferred(), l = function (t, n, i) {
                        return function (o) {
                            n[t] = this, i[t] = arguments.length > 1 ? r.call(arguments) : o, i === e ? c.notifyWith(n, i) : --h || c.resolveWith(n, i)
                        }
                    };
                    if (u > 1)for (e = new Array(u), n = new Array(u), o = new Array(u); u > s; s++)a[s] && i.isFunction(a[s].promise) ? a[s].promise().done(l(s, o, a)).fail(c.reject).progress(l(s, n, e)) : --h;
                    return h || c.resolveWith(o, a), c.promise()
                }
            })
        }, function (t, e, n) {
            function i(t) {
                var e = s[t] = {};
                return r.each(t.split(o), function (t, n) {
                    e[n] = !0
                }), e
            }

            var r = t.exports = n(5), o = /\s+/, s = {};
            r.Callbacks = function (t) {
                t = "string" == typeof t ? s[t] || i(t) : r.extend({}, t);
                var e, n, o, a, u, h, c = [], l = !t.once && [], f = function (i) {
                    for (e = t.memory && i, n = !0, h = a || 0, a = 0, u = c.length, o = !0; c && u > h; h++)if (c[h].apply(i[0], i[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                    o = !1, c && (l ? l.length && f(l.shift()) : e ? c = [] : d.disable())
                }, d = {
                    add: function () {
                        if (c) {
                            var n = c.length;
                            !function i(e) {
                                r.each(e, function (e, n) {
                                    var o = r.type(n);
                                    "function" === o ? t.unique && d.has(n) || c.push(n) : n && n.length && "string" !== o && i(n)
                                })
                            }(arguments), o ? u = c.length : e && (a = n, f(e))
                        }
                        return this
                    }, remove: function () {
                        return c && r.each(arguments, function (t, e) {
                            for (var n; (n = r.inArray(e, c, n)) > -1;)c.splice(n, 1), o && (u >= n && u--, h >= n && h--)
                        }), this
                    }, has: function (t) {
                        return r.inArray(t, c) > -1
                    }, empty: function () {
                        return c = [], this
                    }, disable: function () {
                        return c = l = e = void 0, this
                    }, disabled: function () {
                        return !c
                    }, lock: function () {
                        return l = void 0, e || d.disable(), this
                    }, locked: function () {
                        return !l
                    }, fireWith: function (t, e) {
                        return e = e || [], e = [t, e.slice ? e.slice() : e], !c || n && !l || (o ? l.push(e) : f(e)), this
                    }, fire: function () {
                        return d.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!n
                    }
                };
                return d
            }
        }, function (t, e) {
            function n(t) {
                return null == t ? String(t) : c[h.call(t)] || "object"
            }

            function i(t) {
                return "function" === u.type(t)
            }

            function r(t) {
                return "array" === u.type(t)
            }

            function o(t, e, n) {
                var r, o = 0, s = t.length, a = void 0 === s || i(t);
                if (n)if (a) {
                    for (r in t)if (e.apply(t[r], n) === !1)break
                } else for (; s > o && e.apply(t[o++], n) !== !1;); else if (a) {
                    for (r in t)if (e.call(t[r], r, t[r]) === !1)break
                } else for (; s > o && e.call(t[o], o, t[o++]) !== !1;);
                return t
            }

            function s(t) {
                return !(!t || "object" !== u.type(t))
            }

            function a() {
                var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, h = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, a = 2), "object" == typeof s || u.isFunction(s) || (s = {}), h === a && (s = this, --a); h > a; a++)if (null != (t = arguments[a]))for (e in t)n = s[e], i = t[e], s !== i && (c && i && (u.isPlainObject(i) || (r = u.isArray(i))) ? (r ? (r = !1, o = n && u.isArray(n) ? n : []) : o = n && u.isPlainObject(n) ? n : {}, s[e] = u.extend(c, o, i)) : void 0 !== i && (s[e] = i));
                return s
            }

            var u = t.exports = {
                type: n,
                isArray: r,
                isFunction: i,
                isPlainObject: s,
                each: o,
                extend: a,
                noop: function () {
                }
            }, h = Object.prototype.toString, c = {};
            "Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function (t) {
                c["[object " + t + "]"] = t.toLowerCase()
            })
        }, function (t, e, n) {
            function i(t) {
                this.listenTime += t.from - this.currentTime, this.currentTime = t.to
            }

            function r(t) {
                this.listenTime += t.position - this.currentTime, this.currentTime = t.position
            }

            function o(t) {
                this.currentTime = t.position
            }

            var s, a = n(7);
            s = t.exports = function (t) {
                this.scAudio = t, this.listenTime = 0, this.currentTime = 0, this.scAudio.on(a.SEEK, i, this).on(a.PLAY_START, o, this).on(a.PAUSE, r, this)
            }, s.prototype = {
                constructor: s, getListenTime: function () {
                    return this.listenTime + this.scAudio.currentTime() - this.currentTime
                }
            }
        }, function (t, e) {
            var n = {
                CREATED: "created",
                STATE_CHANGE: "state-change",
                DESTROYED: "destroyed",
                PLAY: "play",
                PLAY_START: "play-start",
                PLAY_RESUME: "play-resume",
                METADATA: "metadata",
                PAUSE: "pause",
                FINISH: "finish",
                RESET: "reset",
                SEEK: "seek",
                SEEKED: "seeked",
                GEO_BLOCKED: "geo_blocked",
                BUFFERRING_START: "buffering_start",
                BUFFERRING_END: "buffering_end",
                FLASH_NOT_LOADED: "flash_not_loaded",
                FLASH_BLOCK: "flash_blocked",
                FLASH_UNBLOCK: "flash_unblocked",
                AUDIO_ERROR: "audio_error",
                TIME: "time",
                NO_STREAMS: "no_streams",
                STREAMS: "streams",
                NO_PROTOCOL: "no_protocol",
                NO_CONNECTION: "no_connection",
                REGISTERED: "registered",
                ONLINE: "online",
                OFFLINE: "offline"
            };
            t.exports = n
        }, function (t, e, n) {
            function i() {
                return this.scAudio.controller ? this.controller ? void m.warn("(%s) Setup was called while it was already initialized (returned with a no-op)", this.scAudio.getId()) : (m("(%s) Initialized", this.scAudio.getId()), this.controller = this.scAudio.controller, this.protocol = this.scAudio.streamInfo.protocol, void(this.host = S.getUrlHost(this.scAudio.streamInfo.url))) : void m.warn("CanÂ´t initialize when controller is null")
            }

            function r() {
                this.controller && (m("(%s) Reset", this.scAudio.getId()), this.controller = this.protocol = this.host = null, this.timeToPlayMeasured = !1)
            }

            function o(t) {
                var e = this.scAudio.getAudioManagerStates();
                t === e.LOADING ? this.timeToPlayMeasured && f.call(this) : A.isNull(this.bufferingStartTime) || d.call(this)
            }

            function s() {
                this.metadataLoadStartTime = Date.now()
            }

            function a() {
                return A.isNull(this.metadataLoadStartTime) ? void m.warn("(%s) onMetadataEnd was called without onMetadataStart being called before.", this.scAudio.getId()) : (this.log({
                    type: "metadata",
                    latency: Date.now() - this.metadataLoadStartTime
                }), void(this.metadataLoadStartTime = null))
            }

            function u() {
                this.playClickTime = Date.now()
            }

            function h() {
                if (!this.timeToPlayMeasured) {
                    if (A.isNull(this.playClickTime))return void m.warn("(%s) onPlayResume was called without onPlayStart being called before.", this.scAudio.getId());
                    this.log({
                        type: "play",
                        latency: Date.now() - this.playClickTime
                    }), this.playClickTime = null, this.timeToPlayMeasured = !0
                }
            }

            function c() {
                this.scAudio.isPaused() || (this.seekStartTime = Date.now())
            }

            function l() {
                if (!this.scAudio.isPaused()) {
                    if (A.isNull(this.seekStartTime))return void m.warn("(%s) onSeekEnd was called without onSeekStart being called before.", this.scAudio.getId());
                    this.log({type: "seek", latency: Date.now() - this.seekStartTime}), this.seekStartTime = null
                }
            }

            function f() {
                this.bufferingStartTime || (this.bufferingStartTime = Date.now())
            }

            function d() {
                return A.isNull(this.bufferingStartTime) ? void m.warn("(%s) onBufferingEnd was called without onBufferingStart being called before.", this.scAudio.getId()) : (p.call(this), void(this.bufferingStartTime = null))
            }

            function p() {
                A.isNull(this.bufferingStartTime) || (A.isNull(this.bufferingTimeAccumulated) && (this.bufferingTimeAccumulated = 0), this.bufferingTimeAccumulated += Date.now() - this.bufferingStartTime)
            }

            function g() {
                p.call(this), A.isNull(this.bufferingTimeAccumulated) || (this.log({
                    type: "buffer",
                    latency: this.bufferingTimeAccumulated
                }), this.bufferingStartTime = this.bufferingTimeAccumulated = null)
            }

            var _, m, y = n(9), v = n(7), E = n(10), S = n(12), A = n(13);
            _ = t.exports = function (t, e) {
                this.scAudio = t, this.logFn = e, this.controller = null, this.reset(), m = m || y(t.options.debug, "audioperf"), t.on(v.CREATED, i, this).on(v.RESET, r, this).on(v.DESTROYED, r, this).on(v.SEEK, c, this).on(v.SEEKED, l, this).on(v.PLAY, u, this).on(v.PLAY_START, s, this).on(v.PLAY_RESUME, h, this).on(v.PAUSE, g, this).on(v.FINISH, g, this).on(v.STATE_CHANGE, o, this).on(v.METADATA, a, this)
            }, A.extend(_.prototype, E, {
                constructor: _, log: function (t) {
                    return this.controller ? (A.extend(t, {
                        protocol: this.protocol,
                        host: this.host,
                        playertype: this.controller.getType()
                    }), m("(%s) %s latency: %d protocol: %s host: %s playertype: %s", this.scAudio.getId(), t.type, t.latency, t.protocol, t.host, t.playertype), void this.logFn(t)) : void m.warn("(%s) Monitor log was called while controller is null (returned with a no-op)", this.scAudio.getId())
                }, reset: function () {
                    this.bufferingStartTime = this.bufferingTimeAccumulated = this.playClickTime = this.seekStartTime = this.metadataLoadStartTime = null, this.timeToPlayMeasured = !1
                }
            })
        }, function (t, e) {
            function n() {
                function t(t, n) {
                    for (var i, r = arguments.length, o = Array(r > 2 ? r - 2 : 0), s = 2; r > s; s++)o[s - 2] = arguments[s];
                    "string" == typeof n ? n = " " + n : (o.unshift(n), n = ""), (i = window.console)[t].apply(i, [e() + " |" + c + "%c" + n].concat(l, o))
                }

                function e() {
                    var t = new Date, e = null === h ? 0 : t - h;
                    return h = +t, "%c" + r(t.getHours()) + ":" + r(t.getMinutes()) + ":" + r(t.getSeconds()) + "." + i(t.getMilliseconds(), "0", 3) + "%c (%c" + i("+" + e + "ms", " ", 8) + "%c)"
                }

                var n = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0], o = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                if (!n)return s;
                var h = null, c = a(o), l = ["color: green", "color: grey", "color: blue", "color: grey", u(o), ""], f = t.bind(null, "log");
                return f.log = f, ["info", "warn", "error"].forEach(function (e) {
                    f[e] = t.bind(null, e)
                }), f
            }

            function i(t, e, n) {
                return o(e, n - ("" + t).length) + t
            }

            function r(t) {
                return i(t, "0", 2)
            }

            function o(t, e) {
                return e > 0 ? new Array(e + 1).join(t) : ""
            }

            function s() {
            }

            function a(t) {
                return t ? "%c" + t : "%c"
            }

            t.exports = n, s.log = s.info = s.warn = s.error = s;
            var u = function () {
                var t = ["#51613C", "#447848", "#486E5F", "#787444", "#6E664E"], e = 0;
                return function (n) {
                    return n ? "background-color:" + t[e++ % t.length] + ";color:#fff;border-radius:3px;padding:2px 4px;font-family:sans-serif;text-transform:uppercase;font-size:9px;margin:0 4px" : ""
                }
            }()
        }, function (t, e, n) {
            t.exports = n(11)
        }, function (t, e, n) {
            !function () {
                function n() {
                    return {
                        keys: Object.keys || function (t) {
                            if ("object" != typeof t && "function" != typeof t || null === t)throw new TypeError("keys() called on a non-object");
                            var e, n = [];
                            for (e in t)t.hasOwnProperty(e) && (n[n.length] = e);
                            return n
                        }, uniqueId: function (t) {
                            var e = ++a + "";
                            return t ? t + e : e
                        }, has: function (t, e) {
                            return o.call(t, e)
                        }, each: function (t, e, n) {
                            if (null != t)if (r && t.forEach === r) t.forEach(e, n); else if (t.length === +t.length)for (var i = 0, o = t.length; o > i; i++)e.call(n, t[i], i, t); else for (var s in t)this.has(t, s) && e.call(n, t[s], s, t)
                        }, once: function (t) {
                            var e, n = !1;
                            return function () {
                                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
                            }
                        }
                    }
                }

                var i, r = Array.prototype.forEach, o = Object.prototype.hasOwnProperty, s = Array.prototype.slice, a = 0, u = n();
                i = {
                    on: function (t, e, n) {
                        if (!c(this, "on", t, [e, n]) || !e)return this;
                        this._events || (this._events = {});
                        var i = this._events[t] || (this._events[t] = []);
                        return i.push({callback: e, context: n, ctx: n || this}), this
                    }, once: function (t, e, n) {
                        if (!c(this, "once", t, [e, n]) || !e)return this;
                        var i = this, r = u.once(function () {
                            i.off(t, r), e.apply(this, arguments)
                        });
                        return r._callback = e, this.on(t, r, n)
                    }, off: function (t, e, n) {
                        var i, r, o, s, a, h, l, f;
                        if (!this._events || !c(this, "off", t, [e, n]))return this;
                        if (!t && !e && !n)return this._events = {}, this;
                        for (s = t ? [t] : u.keys(this._events), a = 0, h = s.length; h > a; a++)if (t = s[a], o = this._events[t]) {
                            if (this._events[t] = i = [], e || n)for (l = 0, f = o.length; f > l; l++)r = o[l], (e && e !== r.callback && e !== r.callback._callback || n && n !== r.context) && i.push(r);
                            i.length || delete this._events[t]
                        }
                        return this
                    }, trigger: function (t) {
                        if (!this._events)return this;
                        var e = s.call(arguments, 1);
                        if (!c(this, "trigger", t, e))return this;
                        var n = this._events[t], i = this._events.all;
                        return n && l(n, e), i && l(i, arguments), this
                    }, stopListening: function (t, e, n) {
                        var i = this._listeners;
                        if (!i)return this;
                        var r = !e && !n;
                        "object" == typeof e && (n = this), t && ((i = {})[t._listenerId] = t);
                        for (var o in i)i[o].off(e, n, this), r && delete this._listeners[o];
                        return this
                    }
                };
                var h = /\s+/, c = function (t, e, n, i) {
                    if (!n)return !0;
                    if ("object" == typeof n) {
                        for (var r in n)t[e].apply(t, [r, n[r]].concat(i));
                        return !1
                    }
                    if (h.test(n)) {
                        for (var o = n.split(h), s = 0, a = o.length; a > s; s++)t[e].apply(t, [o[s]].concat(i));
                        return !1
                    }
                    return !0
                }, l = function (t, e) {
                    var n, i = -1, r = t.length, o = e[0], s = e[1], a = e[2];
                    switch (e.length) {
                        case 0:
                            for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o);
                            return;
                        case 2:
                            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o, s);
                            return;
                        case 3:
                            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o, s, a);
                            return;
                        default:
                            for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e)
                    }
                }, f = {listenTo: "on", listenToOnce: "once"};
                u.each(f, function (t, e) {
                    i[e] = function (e, n, i) {
                        var r = this._listeners || (this._listeners = {}), o = e._listenerId || (e._listenerId = u.uniqueId("l"));
                        return r[o] = e, "object" == typeof n && (i = this), e[t](n, i, this), this
                    }
                }), i.bind = i.on, i.unbind = i.off, i.mixin = function (t) {
                    var e = ["on", "once", "off", "trigger", "stopListening", "listenTo", "listenToOnce", "bind", "unbind"];
                    return u.each(e, function (e) {
                        t[e] = this[e]
                    }, this), t
                }, "undefined" != typeof t && t.exports && (e = t.exports = i), e.BackboneEvents = i
            }(this)
        }, function (t, e) {
            var n = {
                getUrlParams: function (t) {
                    var e = {}, n = t.indexOf("?");
                    return n > -1 && t.substr(n + 1).split("&").forEach(function (t) {
                        var n = t.split("=");
                        e[n[0]] = n[1]
                    }), e
                }, getUrlHost: function (t) {
                    var e, n = t.split("//");
                    return e = n[0] === t ? n[0].split("/")[0] : n[1] ? n[1].split("/")[0] : ""
                }
            };
            t.exports = n
        }, function (t, e) {
            var n = {
                extend: function (t) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    return e.forEach(function (e) {
                        if (e)for (var n in e)e.hasOwnProperty(n) && (t[n] = e[n])
                    }), t
                }, each: function (t, e, n) {
                    Object.keys(t).forEach(function (i) {
                        e.call(n || null, t[i], i)
                    })
                }, without: function (t, e) {
                    var n = t.indexOf(e);
                    n > -1 && t.splice(n, 1)
                }, result: function (t) {
                    var e = t;
                    return n.isFunction(e) && (e = t()), e
                }, isFunction: function (t) {
                    return "function" == typeof t
                }, after: function (t, e) {
                    return function () {
                        return --t < 1 ? e.apply(this, arguments) : void 0
                    }
                }, isNull: function (t) {
                    return null === t
                }, once: function (t) {
                    var e, n = !1;
                    return function () {
                        return n ? e : (n = !0, void(e = t.apply(this, arguments)))
                    }
                }
            };
            t.exports = n
        }, function (t, e) {
            var n = {AAC: "aac", MP3: "mp3", OGG: "ogg", OPUS: "opus", WAV: "wav"};
            t.exports = n
        }, function (t, e) {
            var n = {HTTP: "http", RTMP: "rtmp", HLS: "hls"};
            t.exports = n
        }, function (t, e, n) {
            function i(t) {
                return h.supportsMediaSourceExtensions() && t.mediaSourceEnabled && (h.isChrome() && h.getChromeVersion() >= 35 || h.isFirefox() && t.mseFirefox || h.isSafari() && t.mseSafari)
            }

            function r(t) {
                return function (e) {
                    var n = !1;
                    switch (e) {
                        case u.RTMP:
                            n = h.supportsFlash();
                            break;
                        case u.HTTP:
                            n = h.supportsHTML5Audio() || h.supportsFlash();
                            break;
                        case u.HLS:
                            n = i(t)
                    }
                    return n
                }
            }

            function o(t) {
                return h.isSafari() || h.isFirefox() ? [u.HLS, u.HTTP, u.RTMP] : t
            }

            function s(t) {
                t.protocols = o(t.protocols).filter(r(t))
            }

            var a, u = n(15), h = n(17);
            a = {prioritizeAndFilter: s}, t.exports = a
        }, function (t, e) {
            function n(t) {
                return t.test(window.navigator.userAgent.toLowerCase())
            }

            function i(t, e) {
                try {
                    return window.navigator.userAgent.toLowerCase().match(t)[e]
                } catch (n) {
                    return null
                }
            }

            function r() {
                try {
                    return parseInt(i(/chrom(e|ium)\/([0-9]+)\./, 2), 10)
                } catch (t) {
                    return NaN
                }
            }

            function o() {
                return !h() && n(/safari/)
            }

            function s() {
                return o() && n(/version\/7\.1/)
            }

            function a() {
                return o() && n(/version\/8/) && !n(/version\/80/)
            }

            function u() {
                return o() && n(/version\/9\./)
            }

            function h() {
                return n(/chrom(e|ium)/)
            }

            function c() {
                return n(/firefox/)
            }

            function l() {
                return !!window.MediaSource && (window.MediaSource.isTypeSupported("audio/mpeg") || window.MediaSource.isTypeSupported("audio/mp4"))
            }

            function f() {
                try {
                    return window.hasOwnProperty("Audio") && !!(new window.Audio).canPlayType("audio/mpeg")
                } catch (t) {
                    return !1
                }
            }

            function d() {
                try {
                    var t = o() && n(/version\/5\.0/), e = window.hasOwnProperty("Audio") && (!!(new window.Audio).canPlayType('audio/x-mpegURL; codecs="mp3"') || !!(new window.Audio).canPlayType('vnd.apple.mpegURL; codecs="mp3"'));
                    return !t && e
                } catch (i) {
                    return !1
                }
            }

            function p() {
                return _(g()) >= y
            }

            function g() {
                var t, e, n, i;
                if ("undefined" != typeof window.ActiveXObject)try {
                    i = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), i && (t = i.GetVariable("$version"))
                } catch (r) {
                    t = null
                } else window.navigator && window.navigator.plugins && window.navigator.plugins.length > 0 && (n = "application/x-shockwave-flash", e = window.navigator.mimeTypes, e && e[n] && e[n].enabledPlugin && e[n].enabledPlugin.description && (t = e[n].enabledPlugin.description));
                return t
            }

            function _(t) {
                if (!t)return 0;
                var e = t.match(/\d\S+/)[0].replace(/,/g, ".").split(".");
                return parseFloat([e[0], e[1]].join(".")) || 0
            }

            var m, y = 9;
            m = {
                flashPlugin: g,
                isSafari: o,
                isSafari71: s,
                isSafari8: a,
                isSafari9: u,
                isChrome: h,
                getChromeVersion: r,
                isFirefox: c,
                supportsNativeHLSAudio: d,
                supportsHTML5Audio: f,
                supportsFlash: p,
                supportsMediaSourceExtensions: l
            }, t.exports = m
        }, function (t, e, n) {
            function i(t) {
                var e = f.getUrlHost(t);
                return p.every(function (t) {
                    return 0 !== e.indexOf(t)
                })
            }

            function r(t, e) {
                return !(t === c.HLS && !i(e))
            }

            function o(t, e) {
                if (!t)return !1;
                var n = t.issuedAt + s(t.protocol, t.duration);
                return a(t.protocol) ? Date.now() + t.duration - (e || 0) < n : Date.now() < n
            }

            function s(t, e) {
                var n = a(t);
                return g + (n ? l.result(e) : 0)
            }

            function a(t) {
                return t === c.HTTP || t === c.HLS
            }

            function u(t, e) {
                function n(t) {
                    return -1 * t
                }

                function i(t, e) {
                    return Math.abs(e - m) - Math.abs(t - m)
                }

                var o, s, a, u, h, c, f, d, p, g, _ = {}, m = e.maxBitrate, y = e.protocols, v = e.extensions;
                for (l.each(t, function (t, e) {
                    var n = e.split("_"), i = n[0], r = n[1], o = n[2];
                    _[i] = _[i] || {}, _[i][r] = _[i][r] || {}, _[i][r][o] = t
                }), h = 0, c = y.length; c > h; ++h)for (u = y[h], d = 0, p = v.length; p > d; ++d)if (f = v[d], _[u] && _[u][f]) {
                    if (o = Object.keys(_[u][f]).map(Number).sort(n), s = m === 1 / 0, a = m === -(1 / 0), m = s || a ? o[s ? "pop" : "shift"]() : o.sort(i).pop(), g = _[u][f][m], !r(u, g))continue;
                    return {
                        url: g,
                        bitrate: m,
                        protocol: u,
                        extension: f,
                        issuedAt: Date.now(),
                        duration: l.result(e.duration)
                    }
                }
                return null
            }

            var h, c = n(15), l = n(13), f = n(12), d = .9, p = [], g = Math.floor(12e4 * d);
            h = {choosePreferredStream: u, streamValidForPlayingFrom: o}, t.exports = h
        }, function (t, e, n) {
            var i, r, o = n(7), s = n(13), a = {Linear: 0, EaseOut: 1, EaseInOut: 2}, u = 600, h = 25;
            t.exports = i = {}, i.VolumeAutomator = r = function (t) {
                this.scAudio = t, this.fadeOutAlgo = this.scAudio.options.fadeOutAlgo, this.fadeOutTimer = null, this.initialVolume = void 0, this.scAudio.options.fadeOutOnPause && r.isSupported() && (this.scAudio.on(o.PLAY, this.onPlay, this), this.scAudio.registerHook("pause", this.hookPause.bind(this)))
            }, i.VolumeAutomator.isSupported = function () {
                var t = new window.Audio, e = t.volume, n = 0 === e ? 1 : e / 2;
                return t.volume = n, t.volume === n
            }, i.VolumeAutomator.Algos = a, s.extend(r.prototype, {
                fadeOutAndPause: function () {
                    var t = Date.now(), e = function () {
                        var n, i = (Date.now() - t) / u, r = this.initialVolume;
                        if (i >= 1) this.scAudio.controller && this.scAudio.controller.pause(), this.cancelFadeout(); else {
                            switch (this.fadeOutAlgo) {
                                case a.Linear:
                                    n = r * (1 - i);
                                    break;
                                case a.EaseOut:
                                    n = r * (1 / (10 * (i + .1)) - .05);
                                    break;
                                case a.EaseInOut:
                                default:
                                    n = r * (Math.cos(i * Math.PI) / 2 + .5)
                            }
                            this.scAudio.setVolume(n), window.clearTimeout(this.fadeOutTimer), this.fadeOutTimer = window.setTimeout(e, h)
                        }
                    }.bind(this);
                    this.initialVolume = this.scAudio.getVolume(), e()
                }, cancelFadeout: function () {
                    this.fadeOutTimer && (window.clearTimeout(this.fadeOutTimer), this.fadeOutTimer = null, this.scAudio.setVolume(this.initialVolume), this.initialVolume = void 0)
                }, hookPause: function (t) {
                    return this.fadeOutAndPause(), !1
                }, onPlay: function () {
                    this.cancelFadeout()
                }
            })
        }])
    }, function (t, e) {
    }])
});
