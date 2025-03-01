/*!
 * imagesLoaded PACKAGED v3.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) { return function() { return this[e].apply(this, arguments) } }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) { var t, n, i = this._getEvents(); if ("object" == typeof e) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function(e) { var t, n = []; for (t = 0; e.length > t; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function(e) { return this.getListeners(e), this }, i.defineEvents = function(e) { for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function(e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function() { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function() { return this._events || (this._events = {}) }, e.noConflict = function() { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return e }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (r = function(e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } });
        var o = { bind: i, unbind: r };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e) {
        function t(e, t) { for (var n in t) e[n] = t[n]; return e }

        function n(e) { return "[object Array]" === f.call(e) }

        function i(e) {
            var t = [];
            if (n(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function r(e, n) {
            function r(e, n, s) {
                if (!(this instanceof r)) return new r(e, n);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = t({}, this.options), "function" == typeof n ? s = n : t(this.options, n), s && this.on("always", s), this.getImages(), o && (this.jqDeferred = new o.Deferred);
                var c = this;
                setTimeout(function() { c.check() })
            }

            function f(e) { this.img = e }

            function a(e) { this.src = e, h[e] = this }
            r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
                        var s = i[r];
                        this.addImage(s)
                    }
                }
            }, r.prototype.addImage = function(e) {
                var t = new f(e);
                this.images.push(t)
            }, r.prototype.check = function() {
                function e(e, r) { return t.options.debug && c && s.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0 }
                var t = this,
                    n = 0,
                    i = this.images.length;
                if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
                for (var r = 0; i > r; r++) {
                    var o = this.images[r];
                    o.on("confirm", e), o.check()
                }
            }, r.prototype.progress = function(e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function() { t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e) })
            }, r.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function() {
                    if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }, o && (o.fn.imagesLoaded = function(e, t) { var n = new r(this, e, t); return n.jqDeferred.promise(o(this)) }), f.prototype = new e, f.prototype.check = function() {
                var e = h[this.img.src] || new a(this.img.src);
                if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
                if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
                var t = this;
                e.on("confirm", function(e, n) { return t.confirm(e.isLoaded, n), !0 }), e.check()
            }, f.prototype.confirm = function(e, t) { this.isLoaded = e, this.emit("confirm", this, t) };
            var h = {};
            return a.prototype = new e, a.prototype.check = function() {
                if (!this.isChecked) {
                    var e = new Image;
                    n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
                }
            }, a.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, a.prototype.onload = function(e) { this.confirm(!0, "onload"), this.unbindProxyEvents(e) }, a.prototype.onerror = function(e) { this.confirm(!1, "onerror"), this.unbindProxyEvents(e) }, a.prototype.confirm = function(e, t) { this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t) }, a.prototype.unbindProxyEvents = function(e) { n.unbind(e.target, "load", this), n.unbind(e.target, "error", this) }, r
        }
        var o = e.jQuery,
            s = e.console,
            c = s !== void 0,
            f = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r) : e.imagesLoaded = r(e.EventEmitter, e.eventie)
    }(window);
/*!
Waypoints - 4.0.1
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function() { return this.enabled = !1, this }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function() { return this.group.next(this) }, t.prototype.previous = function() { return this.group.previous(this) }, t.invokeAll = function(t) { var e = []; for (var o in i) e.push(i[o]); for (var n = 0, r = e.length; r > n; n++) e[n][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { t.Context.refreshAll(); for (var e in i) i[e].enabled = !0; return this }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) { window.setTimeout(t, 1e3 / 60) }

    function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() { e.handleResize(), e.didResize = !1 }
        var e = this;
        this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)) })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() { e.handleScroll(), e.didScroll = !1 }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() { n.Context.refreshAll() }, e.prototype.handleScroll = function() {
        var t = {},
            e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
    }, e.prototype.innerHeight = function() { return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() { return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() { for (var t in o) o[t].flushTriggers() }), this
    }, e.findOrCreateByElement = function(t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function() { for (var t in o) o[t].refresh() }, e.findByElement = function(t) { return o[t.waypointContextKey] }, window.onload = function() { r && r(), e.refreshAll() }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) { return t.triggerPoint - e.triggerPoint }

    function e(t, e) { return e.triggerPoint - t.triggerPoint }

    function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this }
    var o = { vertical: {}, horizontal: {} },
        n = window.Waypoint;
    i.prototype.add = function(t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() { return this.waypoints[0] }, i.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function(t) { return o[t.axis][t.name] || new i(t) }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) { this.$element = e(t) }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) { t.prototype[i] = function() { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) { t[o] = e[o] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() { var n = t.extend({}, o, { element: this }); "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)) }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
! function(t) {
    var i = t(window);
    t.fn.visible = function(t, e, o) {
        if (!(this.length < 1)) {
            var r = this.length > 1 ? this.eq(0) : this,
                n = r.get(0),
                f = i.width(),
                h = i.height(),
                o = o ? o : "both",
                l = e === !0 ? n.offsetWidth * n.offsetHeight : !0;
            if ("function" == typeof n.getBoundingClientRect) {
                var g = n.getBoundingClientRect(),
                    u = g.top >= 0 && g.top < h,
                    s = g.bottom > 0 && g.bottom <= h,
                    c = g.left >= 0 && g.left < f,
                    a = g.right > 0 && g.right <= f,
                    v = t ? u || s : u && s,
                    b = t ? c || a : c && a;
                if ("both" === o) return l && v && b;
                if ("vertical" === o) return l && v;
                if ("horizontal" === o) return l && b
            } else {
                var d = i.scrollTop(),
                    p = d + h,
                    w = i.scrollLeft(),
                    m = w + f,
                    y = r.offset(),
                    z = y.top,
                    B = z + r.height(),
                    C = y.left,
                    R = C + r.width(),
                    j = t === !0 ? B : z,
                    q = t === !0 ? z : B,
                    H = t === !0 ? R : C,
                    L = t === !0 ? C : R;
                if ("both" === o) return !!l && p >= q && j >= d && m >= L && H >= w;
                if ("vertical" === o) return !!l && p >= q && j >= d;
                if ("horizontal" === o) return !!l && m >= L && H >= w
            }
        }
    }
}(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(a, b, c, d, e) { return jQuery.easing[jQuery.easing.def](a, b, c, d, e) }, easeInQuad: function(a, b, c, d, e) { return d * (b /= e) * b + c }, easeOutQuad: function(a, b, c, d, e) { return -d * (b /= e) * (b - 2) + c }, easeInOutQuad: function(a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b + c; return -d / 2 * (--b * (b - 2) - 1) + c }, easeInCubic: function(a, b, c, d, e) { return d * (b /= e) * b * b + c }, easeOutCubic: function(a, b, c, d, e) { return d * ((b = b / e - 1) * b * b + 1) + c }, easeInOutCubic: function(a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b + c; return d / 2 * ((b -= 2) * b * b + 2) + c }, easeInQuart: function(a, b, c, d, e) { return d * (b /= e) * b * b * b + c }, easeOutQuart: function(a, b, c, d, e) { return -d * ((b = b / e - 1) * b * b * b - 1) + c }, easeInOutQuart: function(a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b * b + c; return -d / 2 * ((b -= 2) * b * b * b - 2) + c }, easeInQuint: function(a, b, c, d, e) { return d * (b /= e) * b * b * b * b + c }, easeOutQuint: function(a, b, c, d, e) { return d * ((b = b / e - 1) * b * b * b * b + 1) + c }, easeInOutQuint: function(a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b * b * b + c; return d / 2 * ((b -= 2) * b * b * b * b + 2) + c }, easeInSine: function(a, b, c, d, e) { return -d * Math.cos(b / e * (Math.PI / 2)) + d + c }, easeOutSine: function(a, b, c, d, e) { return d * Math.sin(b / e * (Math.PI / 2)) + c }, easeInOutSine: function(a, b, c, d, e) { return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c }, easeInExpo: function(a, b, c, d, e) { return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c }, easeOutExpo: function(a, b, c, d, e) { return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c }, easeInOutExpo: function(a, b, c, d, e) { if (b == 0) return c; if (b == e) return c + d; if ((b /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (b - 1)) + c; return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c }, easeInCirc: function(a, b, c, d, e) { return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c }, easeOutCirc: function(a, b, c, d, e) { return d * Math.sqrt(1 - (b = b / e - 1) * b) + c }, easeInOutCirc: function(a, b, c, d, e) { if ((b /= e / 2) < 1) return -d / 2 * (Math.sqrt(1 - b * b) - 1) + c; return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c }, easeInElastic: function(a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e) == 1) return c + d; if (!g) g = e * .3; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c }, easeOutElastic: function(a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e) == 1) return c + d; if (!g) g = e * .3; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c }, easeInOutElastic: function(a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e / 2) == 2) return c + d; if (!g) g = e * .3 * 1.5; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); if (b < 1) return -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c; return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c }, easeInBack: function(a, b, c, d, e, f) { if (f == undefined) f = 1.70158; return d * (b /= e) * b * ((f + 1) * b - f) + c }, easeOutBack: function(a, b, c, d, e, f) { if (f == undefined) f = 1.70158; return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c }, easeInOutBack: function(a, b, c, d, e, f) { if (f == undefined) f = 1.70158; if ((b /= e / 2) < 1) return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c; return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c }, easeInBounce: function(a, b, c, d, e) { return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c }, easeOutBounce: function(a, b, c, d, e) { if ((b /= e) < 1 / 2.75) { return d * 7.5625 * b * b + c } else if (b < 2 / 2.75) { return d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c } else if (b < 2.5 / 2.75) { return d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c } else { return d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c } }, easeInOutBounce: function(a, b, c, d, e) { if (b < e / 2) return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c; return jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c } })
    /*! Mousewheel by Brandon Aaron (http://brandon.aaron.sh) */
    ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) {
        function b(b) {
            var g = b || window.event,
                h = i.call(arguments, 1),
                j = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, "mousewheel-line-height");
                    j *= q, m *= q, l *= q
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, "mousewheel-page-height");
                    j *= r, m *= r, l *= r
                }
                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                    var s = this.getBoundingClientRect();
                    o = b.clientX - s.left, p = b.clientY - s.top
                }
                return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
            }
        }

        function c() { f = null }

        function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 }
        var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
        if (a.event.fixHooks)
            for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                else this.onmousewheel = b;
                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                else this.onmousewheel = null;
                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(b) {
                var c = a(b),
                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
            },
            getPageHeight: function(b) { return a(b).height() },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
        };
        a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } })
    });
(function($, window, document) {
    jQuery(document).ready(function($) {
        function prettyPhotoInit() {
            $('.portfolio-items').each(function() {
                var $unique_id = Math.floor(Math.random() * 10000);
                $(this).find('.pretty_photo').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]').removeClass('pretty_photo');
            });
            $("a[data-rel='prettyPhoto[product-gallery]'], a[data-rel='prettyPhoto']").each(function() {
                $(this).attr('rel', $(this).attr('data-rel'));
                $(this).removeAttr('data-rel');
            });
            $('.wpb_gallery .wpb_flexslider').each(function() {
                var $unique_id = Math.floor(Math.random() * 10000);
                $(this).find('.slides li a').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]');
            });
            $('.wpb_gallery .wpb_gallery_slidesnectarslider_style').each(function() {
                var $unique_id = Math.floor(Math.random() * 10000);
                $(this).find('.swiper-slide a:not(.ext-url-link)').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]');
            });
            $('.wpb_gallery .wpb_gallery_slidesflickity_style').each(function() {
                var $unique_id = Math.floor(Math.random() * 10000);
                $(this).find('.cell > a:not(.ext-url-link)').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]');
            });
            $('.wpb_gallery .wpb_gallery_slidesparallax_image_grid').each(function() {
                var $unique_id = Math.floor(Math.random() * 10000);
                $(this).find('.parallaxImg-layer a.pretty_photo:not(.ext-url-link)').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]');
            });
            if ($('body').hasClass('nectar-auto-lightbox')) {
                $('.gallery').each(function() {
                    if ($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length == 0) {
                        var $unique_id = Math.floor(Math.random() * 10000);
                        $(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]').removeClass('pretty_photo');
                    }
                });
                $('.main-content img').each(function() { if ($(this).parent().is("[href]") && !$(this).parent().is("[rel*='prettyPhoto']") && $(this).parents('.product-image').length == 0 && $(this).parents('.iosSlider.product-slider').length == 0) { var match = $(this).parent().attr('href').match(/\.(jpg|png|gif)\b/); if (match) $(this).parent().attr('rel', 'prettyPhoto'); } });
            }
            $('a.pp').removeClass('pp').attr('rel', 'prettyPhoto');
            var loading_animation = ($('body[data-loading-animation]').attr('data-loading-animation') != 'none') ? $('body').attr('data-loading-animation') : null;
            var ascend_loader = ($('body').hasClass('ascend')) ? '<span class="default-loading-icon spin"></span>' : '';
            var ascend_loader_class = ($('body').hasClass('ascend')) ? 'default_loader ' : '';
            $("a[rel^='prettyPhoto']").prettyPhoto({ theme: 'dark_rounded', allow_resize: true, default_width: 1024, opacity: 0.85, animation_speed: 'normal', deeplinking: false, default_height: 576, social_tools: '', markup: '<div class="pp_pic_holder"> \
         <div class="ppt">&nbsp;</div> \
       <div class="pp_details"> \
        <div class="pp_nav"> \
            <a href="#" class="pp_arrow_previous"> <i class="icon-salient-left-arrow-thin icon-default-style"></i> </a> \
         <a href="#" class="pp_arrow_next"> <i class="icon-salient-right-arrow-thin icon-default-style"></i> </a> \
         <p class="currentTextHolder">0/0</p> \
        </div> \
        <a class="pp_close" href="#"><span class="icon-salient-x icon-default-style"></span></a> \
       </div> \
       <div class="pp_content_container"> \
        <div class="pp_left"> \
        <div class="pp_right"> \
         <div class="pp_content"> \
          <div class="pp_fade"> \
           <div class="pp_hoverContainer"> \
           </div> \
           <div id="pp_full_res"></div> \
           <p class="pp_description"></p> \
          </div> \
         </div> \
        </div> \
        </div> \
       </div> \
      </div> \
      <div class="pp_loaderIcon ' + ascend_loader_class + loading_animation + '"> ' + ascend_loader + ' </div> \
      <div class="pp_overlay"></div>' });
        }

        function magnificInit() {
            $('a.pp').removeClass('pp').addClass('magnific-popup');
            $("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr('rel').addClass('magnific-popup');
            $('.wpb_gallery .wpb_gallery_slidesnectarslider_style').each(function() {
                var $unique_id = Math.floor(Math.random() * 10000);
                $(this).find('.swiper-slide a:not(.ext-url-link)').addClass('pretty_photo');
            });
            $('.wpb_gallery_slides.wpb_flexslider').each(function() {
                var $unique_id = Math.floor(Math.random() * 10000);
                $(this).find('.slides > li > a').addClass('pretty_photo');
            });
            $('.wpb_gallery_slidesflickity_style').each(function() {
                var $unique_id = Math.floor(Math.random() * 10000);
                $(this).find('.cell > a:not(.ext-url-link)').addClass('pretty_photo');
            });
            $('.portfolio-items, .wpb_gallery .swiper-slide, .wpb_gallery_slidesflickity_style .cell, .wpb_gallery_slides.wpb_flexslider ul > li,  .wpb_gallery .parallax-grid-item').each(function() { if ($(this).find('.pretty_photo').length > 0) { $(this).find('.pretty_photo').removeClass('pretty_photo').addClass('gallery').addClass('magnific'); } else if ($(this).find('a[rel*="prettyPhoto["]').length > 0) { $(this).find('a[rel*="prettyPhoto["]').removeAttr('rel').addClass('gallery').addClass('magnific'); } });
            $("a[data-rel='prettyPhoto[product-gallery]']").each(function() { $(this).removeAttr('data-rel').addClass('magnific').addClass('gallery'); });
            if ($('body').hasClass('nectar-auto-lightbox')) {
                $('.gallery').each(function() {
                    if ($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length == 0) {
                        var $unique_id = Math.floor(Math.random() * 10000);
                        $(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').addClass('magnific').addClass('gallery').removeClass('pretty_photo');
                    }
                });
                $('.main-content img').each(function() { if ($(this).parent().is("[href]") && !$(this).parent().is(".magnific-popup") && $(this).parents('.product-image').length == 0 && $(this).parents('.iosSlider.product-slider').length == 0) { var match = $(this).parent().attr('href').match(/\.(jpg|png|gif)\b/); if (match) $(this).parent().addClass('magnific-popup').addClass('image-link'); } });
            }
            $('a.magnific-popup:not(.gallery):not(.nectar_video_lightbox)').magnificPopup({
                type: 'image',
                callbacks: {
                    imageLoadComplete: function() {
                        var $that = this;
                        setTimeout(function() { $that.wrap.addClass('mfp-image-loaded'); }, 10);
                    },
                    beforeOpen: function() { this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim'); },
                    open: function() {
                        $.magnificPopup.instance.next = function() {
                            var $that = this;
                            this.wrap.removeClass('mfp-image-loaded');
                            setTimeout(function() { $.magnificPopup.proto.next.call($that); }, 100);
                        }
                        $.magnificPopup.instance.prev = function() {
                            var $that = this;
                            this.wrap.removeClass('mfp-image-loaded');
                            setTimeout(function() { $.magnificPopup.proto.prev.call($that); }, 100);
                        }
                    }
                },
                fixedContentPos: false,
                mainClass: 'mfp-zoom-in',
                removalDelay: 400
            });
            $('a.magnific-popup.nectar_video_lightbox, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo], .nectar-video-box > a.full-link.magnific-popup').magnificPopup({ type: 'iframe', fixedContentPos: false, mainClass: 'mfp-zoom-in', removalDelay: 400 });
            $('a.magnific.gallery').each(function() {
                var $parentRow = ($(this).closest('.wpb_column').length > 0) ? $(this).closest('.wpb_column') : $(this).parents('.row');
                if ($parentRow.length > 0 && !$parentRow.hasClass('lightbox-col')) {
                    $parentRow.magnificPopup({
                        type: 'image',
                        delegate: 'a.magnific',
                        mainClass: 'mfp-zoom-in',
                        fixedContentPos: false,
                        callbacks: {
                            elementParse: function(item) { if ($(item.el.context).is('[href]') && $(item.el.context).attr('href').indexOf('iframe=true') != -1) { item.type = 'iframe'; } else { item.type = 'image'; } },
                            imageLoadComplete: function() {
                                var $that = this;
                                setTimeout(function() { $that.wrap.addClass('mfp-image-loaded'); }, 10);
                            },
                            beforeOpen: function() { this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim'); },
                            open: function() {
                                $.magnificPopup.instance.next = function() {
                                    var $that = this;
                                    this.wrap.removeClass('mfp-image-loaded');
                                    setTimeout(function() { $.magnificPopup.proto.next.call($that); }, 100);
                                }
                                $.magnificPopup.instance.prev = function() {
                                    var $that = this;
                                    this.wrap.removeClass('mfp-image-loaded');
                                    setTimeout(function() { $.magnificPopup.proto.prev.call($that); }, 100);
                                }
                            }
                        },
                        removalDelay: 400,
                        gallery: { enabled: true }
                    });
                    $parentRow.addClass('lightbox-col');
                }
            });
        }

        function lightBoxInit() { if ($('body[data-ls="pretty_photo"]').length > 0) { prettyPhotoInit(); } else if ($('body[data-ls="magnific"]').length > 0) { magnificInit(); } }
        lightBoxInit();
        setTimeout(lightBoxInit, 500);
        /*!
         * jQuery Transit - CSS3 transitions and transformations
         * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
         * MIT Licensed.
         *
         * http://ricostacruz.com/jquery.transit
         * http://github.com/rstacruz/jquery.transit
         */
        (function(k) {
            k.transit = { version: "0.9.9", propertyMap: { marginLeft: "margin", marginRight: "margin", marginBottom: "margin", marginTop: "margin", paddingLeft: "padding", paddingRight: "padding", paddingBottom: "padding", paddingTop: "padding" }, enabled: true, useTransitionEnd: false };
            var d = document.createElement("div");
            var q = {};

            function b(v) { if (v in d.style) { return v } var u = ["Moz", "Webkit", "O", "ms"]; var r = v.charAt(0).toUpperCase() + v.substr(1); if (v in d.style) { return v } for (var t = 0; t < u.length; ++t) { var s = u[t] + r; if (s in d.style) { return s } } }

            function e() {
                d.style[q.transform] = "";
                d.style[q.transform] = "rotateY(90deg)";
                return d.style[q.transform] !== ""
            }
            var a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
            q.transition = b("transition");
            q.transitionDelay = b("transitionDelay");
            q.transform = b("transform");
            q.transformOrigin = b("transformOrigin");
            q.transform3d = e();
            var i = { transition: "transitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", msTransition: "MSTransitionEnd" };
            var f = q.transitionEnd = i[q.transition] || null;
            for (var p in q) { if (q.hasOwnProperty(p) && typeof k.support[p] === "undefined") { k.support[p] = q[p] } }
            d = null;
            k.cssEase = { _default: "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)" };
            k.cssHooks["transit:transform"] = {
                get: function(r) { return k(r).data("transform") || new j() },
                set: function(s, r) {
                    var t = r;
                    if (!(t instanceof j)) { t = new j(t) }
                    if (q.transform === "WebkitTransform" && !a) { s.style[q.transform] = t.toString(true) } else { s.style[q.transform] = t.toString() }
                    k(s).data("transform", t)
                }
            };
            k.cssHooks.transform = { set: k.cssHooks["transit:transform"].set };
            if (k.fn.jquery < "1.8") {
                k.cssHooks.transformOrigin = { get: function(r) { return r.style[q.transformOrigin] }, set: function(r, s) { r.style[q.transformOrigin] = s } };
                k.cssHooks.transition = { get: function(r) { return r.style[q.transition] }, set: function(r, s) { r.style[q.transition] = s } }
            }
            n("scale");
            n("translate");
            n("rotate");
            n("rotateX");
            n("rotateY");
            n("rotate3d");
            n("perspective");
            n("skewX");
            n("skewY");
            n("x", true);
            n("y", true);

            function j(r) { if (typeof r === "string") { this.parse(r) } return this }
            j.prototype = {
                setFromString: function(t, s) {
                    var r = (typeof s === "string") ? s.split(",") : (s.constructor === Array) ? s : [s];
                    r.unshift(t);
                    j.prototype.set.apply(this, r)
                },
                set: function(s) { var r = Array.prototype.slice.apply(arguments, [1]); if (this.setter[s]) { this.setter[s].apply(this, r) } else { this[s] = r.join(",") } },
                get: function(r) { if (this.getter[r]) { return this.getter[r].apply(this) } else { return this[r] || 0 } },
                setter: {
                    rotate: function(r) { this.rotate = o(r, "deg") },
                    rotateX: function(r) { this.rotateX = o(r, "deg") },
                    rotateY: function(r) { this.rotateY = o(r, "deg") },
                    scale: function(r, s) {
                        if (s === undefined) { s = r }
                        this.scale = r + "," + s
                    },
                    skewX: function(r) { this.skewX = o(r, "deg") },
                    skewY: function(r) { this.skewY = o(r, "deg") },
                    perspective: function(r) { this.perspective = o(r, "px") },
                    x: function(r) { this.set("translate", r, null) },
                    y: function(r) { this.set("translate", null, r) },
                    translate: function(r, s) {
                        if (this._translateX === undefined) { this._translateX = 0 }
                        if (this._translateY === undefined) { this._translateY = 0 }
                        if (r !== null && r !== undefined) { this._translateX = o(r, "px") }
                        if (s !== null && s !== undefined) { this._translateY = o(s, "px") }
                        this.translate = this._translateX + "," + this._translateY
                    }
                },
                getter: { x: function() { return this._translateX || 0 }, y: function() { return this._translateY || 0 }, scale: function() { var r = (this.scale || "1,1").split(","); if (r[0]) { r[0] = parseFloat(r[0]) } if (r[1]) { r[1] = parseFloat(r[1]) } return (r[0] === r[1]) ? r[0] : r }, rotate3d: function() { var t = (this.rotate3d || "0,0,0,0deg").split(","); for (var r = 0; r <= 3; ++r) { if (t[r]) { t[r] = parseFloat(t[r]) } } if (t[3]) { t[3] = o(t[3], "deg") } return t } },
                parse: function(s) {
                    var r = this;
                    s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, v, u) { r.setFromString(v, u) })
                },
                toString: function(t) { var s = []; for (var r in this) { if (this.hasOwnProperty(r)) { if ((!q.transform3d) && ((r === "rotateX") || (r === "rotateY") || (r === "perspective") || (r === "transformOrigin"))) { continue } if (r[0] !== "_") { if (t && (r === "scale")) { s.push(r + "3d(" + this[r] + ",1)") } else { if (t && (r === "translate")) { s.push(r + "3d(" + this[r] + ",0)") } else { s.push(r + "(" + this[r] + ")") } } } } } return s.join(" ") }
            };

            function m(s, r, t) { if (r === true) { s.queue(t) } else { if (r) { s.queue(r, t) } else { t() } } }

            function h(s) {
                var r = [];
                k.each(s, function(t) {
                    t = k.camelCase(t);
                    t = k.transit.propertyMap[t] || k.cssProps[t] || t;
                    t = c(t);
                    if (k.inArray(t, r) === -1) { r.push(t) }
                });
                return r
            }

            function g(s, v, x, r) {
                var t = h(s);
                if (k.cssEase[x]) { x = k.cssEase[x] }
                var w = "" + l(v) + " " + x;
                if (parseInt(r, 10) > 0) { w += " " + l(r) }
                var u = [];
                k.each(t, function(z, y) { u.push(y + " " + w) });
                return u.join(", ")
            }
            k.fn.transition = k.fn.transit = function(z, s, y, C) {
                var D = this;
                var u = 0;
                var w = true;
                if (typeof s === "function") {
                    C = s;
                    s = undefined
                }
                if (typeof y === "function") {
                    C = y;
                    y = undefined
                }
                if (typeof z.easing !== "undefined") {
                    y = z.easing;
                    delete z.easing
                }
                if (typeof z.duration !== "undefined") {
                    s = z.duration;
                    delete z.duration
                }
                if (typeof z.complete !== "undefined") {
                    C = z.complete;
                    delete z.complete
                }
                if (typeof z.queue !== "undefined") {
                    w = z.queue;
                    delete z.queue
                }
                if (typeof z.delay !== "undefined") {
                    u = z.delay;
                    delete z.delay
                }
                if (typeof s === "undefined") { s = k.fx.speeds._default }
                if (typeof y === "undefined") { y = k.cssEase._default }
                s = l(s);
                var E = g(z, s, y, u);
                var B = k.transit.enabled && q.transition;
                var t = B ? (parseInt(s, 10) + parseInt(u, 10)) : 0;
                if (t === 0) {
                    var A = function(F) { D.css(z); if (C) { C.apply(D) } if (F) { F() } };
                    m(D, w, A);
                    return D
                }
                var x = {};
                var r = function(H) {
                    var G = false;
                    var F = function() { if (G) { D.unbind(f, F) } if (t > 0) { D.each(function() { this.style[q.transition] = (x[this] || null) }) } if (typeof C === "function") { C.apply(D) } if (typeof H === "function") { H() } };
                    if ((t > 0) && (f) && (k.transit.useTransitionEnd)) {
                        G = true;
                        D.bind(f, F)
                    } else { window.setTimeout(F, t) }
                    D.each(function() {
                        if (t > 0) { this.style[q.transition] = E }
                        k(this).css(z)
                    })
                };
                var v = function(F) {
                    this.offsetWidth;
                    r(F)
                };
                m(D, w, v);
                return this
            };

            function n(s, r) {
                if (!r) { k.cssNumber[s] = true }
                k.transit.propertyMap[s] = q.transform;
                k.cssHooks[s] = {
                    get: function(v) { var u = k(v).css("transit:transform"); return u.get(s) },
                    set: function(v, w) {
                        var u = k(v).css("transit:transform");
                        u.setFromString(s, w);
                        k(v).css({ "transit:transform": u })
                    }
                }
            }

            function c(r) { return r.replace(/([A-Z])/g, function(s) { return "-" + s.toLowerCase() }) }

            function o(s, r) { if ((typeof s === "string") && (!s.match(/^[\-0-9\.]+$/))) { return s } else { return "" + s + r } }

            function l(s) { var r = s; if (k.fx.speeds[r]) { r = k.fx.speeds[r] } return o(r, "ms") }
            k.transit.getTransitionValue = g
        })(jQuery);
        var $event = $.event,
            dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
            resizeTimeout;
        $event.special.smartresize = {
            setup: function() { $(this).bind("resize", $event.special.smartresize.handler); },
            teardown: function() { $(this).unbind("resize", $event.special.smartresize.handler); },
            handler: function(event, execAsap) {
                var context = this,
                    args = arguments;
                event.type = "smartresize";
                if (resizeTimeout) { clearTimeout(resizeTimeout); }
                resizeTimeout = setTimeout(function() { $event[dispatchMethod].apply(context, args); }, execAsap === "execAsap" ? 0 : 100);
            }
        };
        $.fn.smartresize = function(fn) { return fn ? this.bind("smartresize", fn) : this.trigger("smartresize", ["execAsap"]); };
        var $standAnimatedColTimeout = [];
        var $animatedSVGIconTimeout = [];
        var $svg_icons = [];

        function niceScrollInit() {
            $("html").niceScroll({ scrollspeed: 60, mousescrollstep: 40, cursorwidth: 15, cursorborder: 0, cursorcolor: '#303030', cursorborderradius: 6, autohidemode: false, horizrailenabled: false });
            if ($('#boxed').length == 0) { $('body, body #header-outer, body #header-secondary-outer, body #search-outer').css('padding-right', '16px'); } else if ($('body[data-ext-responsive="true"]').length == 0) { $('body').css('padding-right', '16px'); }
            $('html').addClass('no-overflow-y');
        }
        var $smoothActive = $('body').attr('data-smooth-scrolling');
        var $smoothCache = ($smoothActive == 1) ? true : false;
        if ($smoothActive == 1 && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) { niceScrollInit(); } else { $('body').attr('data-smooth-scrolling', '0'); }
        if ($smoothCache == false && navigator.platform.toUpperCase().indexOf('MAC') === -1 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && $(window).width() > 690 && $('#nectar_fullscreen_rows').length == 0) {
            ! function() {
                function e() {
                    var e = !1;
                    e && c("keydown", r), v.keyboardSupport && !e && u("keydown", r)
                }

                function t() {
                    if (document.body) {
                        var t = document.body,
                            n = document.documentElement,
                            o = window.innerHeight,
                            r = t.scrollHeight;
                        if (S = document.compatMode.indexOf("CSS") >= 0 ? n : t, w = t, e(), x = !0, top != self) y = !0;
                        else if (r > o && (t.offsetHeight <= o || n.offsetHeight <= o)) {
                            var a = !1,
                                i = function() { a || n.scrollHeight == document.height || (a = !0, setTimeout(function() { n.style.height = document.height + "px", a = !1 }, 500)) };
                            if (n.style.height = "auto", setTimeout(i, 10), S.offsetHeight <= o) {
                                var l = document.createElement("div");
                                l.style.clear = "both", t.appendChild(l)
                            }
                        }
                        v.fixedBackground || b || (t.style.backgroundAttachment = "scroll", n.style.backgroundAttachment = "scroll")
                    }
                }

                function n(e, t, n, o) {
                    if (o || (o = 1e3), d(t, n), 1 != v.accelerationMax) {
                        var r = +new Date,
                            a = r - C;
                        if (a < v.accelerationDelta) {
                            var i = (1 + 30 / a) / 2;
                            i > 1 && (i = Math.min(i, v.accelerationMax), t *= i, n *= i)
                        }
                        C = +new Date
                    }
                    if (M.push({ x: t, y: n, lastX: 0 > t ? .99 : -.99, lastY: 0 > n ? .99 : -.99, start: +new Date }), !T) {
                        var l = e === document.body,
                            u = function() {
                                for (var r = +new Date, a = 0, i = 0, c = 0; c < M.length; c++) {
                                    var s = M[c],
                                        d = r - s.start,
                                        f = d >= v.animationTime,
                                        h = f ? 1 : d / v.animationTime;
                                    v.pulseAlgorithm && (h = p(h));
                                    var m = s.x * h - s.lastX >> 0,
                                        w = s.y * h - s.lastY >> 0;
                                    a += m, i += w, s.lastX += m, s.lastY += w, f && (M.splice(c, 1), c--)
                                }
                                l ? window.scrollBy(a, i) : (a && (e.scrollLeft += a), i && (e.scrollTop += i)), t || n || (M = []), M.length ? N(u, e, o / v.frameRate + 1) : T = !1
                            };
                        N(u, e, 0), T = !0
                    }
                }

                function o(e) {
                    x || t();
                    var o = e.target,
                        r = l(o);
                    if (!r || e.defaultPrevented || s(w, "embed") || s(o, "embed") && /\.pdf/i.test(o.src)) return !0;
                    var a = e.wheelDeltaX || 0,
                        i = e.wheelDeltaY || 0;
                    return a || i || (i = e.wheelDelta || 0), !v.touchpadSupport && f(i) ? !0 : (Math.abs(a) > 1.2 && (a *= v.stepSize / 120), Math.abs(i) > 1.2 && (i *= v.stepSize / 120), n(r, -a, -i), void e.preventDefault())
                }

                function r(e) {
                    var t = e.target,
                        o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== H.spacebar;
                    if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || o) return !0;
                    if (s(t, "button") && e.keyCode === H.spacebar) return !0;
                    var r, a = 0,
                        i = 0,
                        u = l(w),
                        c = u.clientHeight;
                    switch (u == document.body && (c = window.innerHeight), e.keyCode) {
                        case H.up:
                            i = -v.arrowScroll;
                            break;
                        case H.down:
                            i = v.arrowScroll;
                            break;
                        case H.spacebar:
                            r = e.shiftKey ? 1 : -1, i = -r * c * .9;
                            break;
                        case H.pageup:
                            i = .9 * -c;
                            break;
                        case H.pagedown:
                            i = .9 * c;
                            break;
                        case H.home:
                            i = -u.scrollTop;
                            break;
                        case H.end:
                            var d = u.scrollHeight - u.scrollTop - c;
                            i = d > 0 ? d + 10 : 0;
                            break;
                        case H.left:
                            a = -v.arrowScroll;
                            break;
                        case H.right:
                            a = v.arrowScroll;
                            break;
                        default:
                            return !0
                    }
                    n(u, a, i), e.preventDefault()
                }

                function a(e) { w = e.target }

                function i(e, t) { for (var n = e.length; n--;) E[A(e[n])] = t; return t }

                function l(e) {
                    var t = [],
                        n = S.scrollHeight;
                    do { var o = E[A(e)]; if (o) return i(t, o); if (t.push(e), n === e.scrollHeight) { if (!y || S.clientHeight + 10 < n) return i(t, document.body) } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return i(t, e) } while (e = e.parentNode)
                }

                function u(e, t, n) { window.addEventListener(e, t, n || !1) }

                function c(e, t, n) { window.removeEventListener(e, t, n || !1) }

                function s(e, t) { return (e.nodeName || "").toLowerCase() === t.toLowerCase() }

                function d(e, t) { e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (k.x !== e || k.y !== t) && (k.x = e, k.y = t, M = [], C = 0) }

                function f(e) { if (e) { e = Math.abs(e), D.push(e), D.shift(), clearTimeout(z); var t = h(D[0], 120) && h(D[1], 120) && h(D[2], 120); return !t } }

                function h(e, t) { return Math.floor(e / t) == e / t }

                function m(e) { var t, n, o; return e *= v.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (n = Math.exp(-1), e -= 1, o = 1 - Math.exp(-e), t = n + o * (1 - n)), t * v.pulseNormalize }

                function p(e) { return e >= 1 ? 1 : 0 >= e ? 0 : (1 == v.pulseNormalize && (v.pulseNormalize /= m(1)), m(e)) }
                var w, g = { frameRate: 150, animationTime: 500, stepSize: 120, pulseAlgorithm: !0, pulseScale: 8, pulseNormalize: 1, accelerationDelta: 20, accelerationMax: 1, keyboardSupport: !0, arrowScroll: 50, touchpadSupport: !0, fixedBackground: !0, excluded: "" },
                    v = g,
                    b = !1,
                    y = !1,
                    k = { x: 0, y: 0 },
                    x = !1,
                    S = document.documentElement,
                    D = [120, 120, 120],
                    H = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
                    v = g,
                    M = [],
                    T = !1,
                    C = +new Date,
                    E = {};
                setInterval(function() { E = {} }, 1e4);
                var z, A = function() { var e = 0; return function(t) { return t.uniqueID || (t.uniqueID = e++) } }(),
                    N = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, n) { window.setTimeout(e, n || 1e3 / 60) } }(),
                    K = /chrome/i.test(window.navigator.userAgent),
                    L = null;
                "onwheel" in document.createElement("div") ? L = "wheel" : "onmousewheel" in document.createElement("div") && (L = "mousewheel"), L && K && (u(L, o), u("mousedown", a), u("load", t))
            }();
        }

        function flexsliderInit() {
            $('.flex-gallery').each(function() {
                var $that = $(this);
                imagesLoaded($(this), function(instance) {
                    $that.flexslider({ animation: 'fade', smoothHeight: false, animationSpeed: 500, useCSS: false, touch: true });
                    $('.flex-gallery .flex-direction-nav li a.flex-next').html('<i class="fa fa-angle-right"></i>');
                    $('.flex-gallery .flex-direction-nav li a.flex-prev').html('<i class="fa fa-angle-left"></i>');
                });
            });
        }
        flexsliderInit();

        function flickityInit() {
            if ($('.nectar-flickity:not(.masonry)').length == 0) return false;
            var $flickitySliders = [];
            $('.nectar-flickity:not(.masonry)').each(function(i) {
                var $freeScrollBool = ($(this).is('[data-free-scroll]') && $(this).attr('data-free-scroll') == 'true') ? true : false;
                var $groupCellsBool = true;
                if ($freeScrollBool == true) { $groupCellsBool = false; }
                if ($(this).attr('data-controls').length > 0 && $(this).attr('data-controls') == 'next_prev_arrows') { var $paginationBool = false; var $nextPrevArrowBool = true; } else { var $paginationBool = true; var $nextPrevArrowBool = false; }
                if ($(this).attr('data-controls').length > 0 && $(this).attr('data-controls') == 'none') { var $paginationBool = false; var $nextPrevArrowBool = false; }
                var $flickity_autoplay = false;
                var $selectedAttraction = 0.025;
                if ($(this).is('[data-autoplay]') && $(this).attr('data-autoplay') == 'true') {
                    $flickity_autoplay = true;
                    $selectedAttraction = 0.019;
                    if ($(this).is('[data-autoplay-dur]') && $(this).attr('data-autoplay-dur').length > 0) { if (parseInt($(this).attr('data-autoplay-dur')) > 100 && parseInt($(this).attr('data-autoplay-dur')) < 30000) { $flickity_autoplay = parseInt($(this).attr('data-autoplay-dur')); } }
                }
                var $that = $(this);
                $flickitySliders[i] = $(this).flickity({ contain: true, draggable: true, lazyLoad: false, imagesLoaded: true, percentPosition: true, selectedAttraction: $selectedAttraction, groupCells: $groupCellsBool, prevNextButtons: $nextPrevArrowBool, freeScroll: $freeScrollBool, pageDots: $paginationBool, resize: true, autoPlay: $flickity_autoplay, pauseAutoPlayOnHover: false, setGallerySize: true, wrapAround: true, accessibility: false, arrowShape: { x0: 20, x1: 70, y1: 30, x2: 70, y2: 25, x3: 70 } });
                var $removeHiddenTimeout;
                $flickitySliders[i].on('dragStart.flickity', function() {
                    clearTimeout($removeHiddenTimeout);
                    $that.find('.flickity-prev-next-button').addClass('hidden');
                });
                $flickitySliders[i].on('dragEnd.flickity', function() { $removeHiddenTimeout = setTimeout(function() { $that.find('.flickity-prev-next-button').removeClass('hidden'); }, 600); });
                $('.flickity-prev-next-button').on('click', function() {
                    clearTimeout($removeHiddenTimeout);
                    $(this).parents('.nectar-flickity').find('.flickity-prev-next-button').addClass('hidden');
                    $removeHiddenTimeout = setTimeout(function() { $that.find('.flickity-prev-next-button').removeClass('hidden'); }, 600);
                });
            });
        }
        setTimeout(flickityInit, 100);

        function flickityBlogInit() {
            if ($('.nectar-flickity.masonry.not-initialized').length == 0) return false;
            $('.nectar-flickity.masonry.not-initialized').each(function() {
                if ($(this).parents('article').hasClass('large_featured'))
                    $(this).insertBefore($(this).parents('article').find('.content-inner'));
            });
            $('.nectar-flickity.masonry.not-initialized').flickity({ contain: true, draggable: false, lazyLoad: false, imagesLoaded: true, percentPosition: true, prevNextButtons: true, pageDots: false, resize: true, setGallerySize: true, wrapAround: true, accessibility: false });
            $('.nectar-flickity.masonry').removeClass('not-initialized');
            $('.nectar-flickity.masonry:not(.not-initialized)').each(function() {
                if ($(this).find('.item-count').length == 0) {
                    $('<div class="item-count"/>').insertBefore($(this).find('.flickity-prev-next-button.next'));
                    $(this).find('.item-count').html('<span class="current">1</span>/<span class="total">' + $(this).find('.flickity-slider .cell').length + '</span>');
                    $(this).find('.flickity-prev-next-button, .item-count').wrapAll('<div class="control-wrap" />');
                    if ($(this).parents('article').hasClass('wide_tall'))
                        $(this).find('.control-wrap').insertBefore($(this));
                }
            });
            $('.masonry .flickity-prev-next-button.previous,  .masonry .flickity-prev-next-button.next').click(function() {
                if ($(this).parents('.wide_tall').length > 0)
                    $(this).parent().find('.item-count .current').html($(this).parents('article').find('.nectar-flickity .cell.is-selected').index() + 1);
                else
                    $(this).parent().find('.item-count .current').html($(this).parents('.nectar-flickity').find('.cell.is-selected').index() + 1);
            });
            $('body').on('mouseover', '.flickity-prev-next-button.next', function() { $(this).parent().find('.flickity-prev-next-button.previous, .item-count').addClass('next-hovered'); });
            $('body').on('mouseleave', '.flickity-prev-next-button.next', function() { $(this).parent().find('.flickity-prev-next-button.previous, .item-count').removeClass('next-hovered'); });
        }
        $('.twentytwenty-container').each(function() {
            var $that = $(this);
            $(this).imagesLoaded(function() { $that.twentytwenty(); });
        });
        var $usingFullScreenRows = false;
        var $fullscreenSelector = '';
        var $disableFPonMobile = ($('#nectar_fullscreen_rows[data-mobile-disable]').length > 0) ? $('#nectar_fullscreen_rows').attr('data-mobile-disable') : 'off';
        var $onMobileBrowser = navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/);
        if (!$onMobileBrowser)
            $disableFPonMobile = 'off';
        if ($disableFPonMobile == 'on' && $('#nectar_fullscreen_rows').length > 0) {
            $('#nectar_fullscreen_rows > .wpb_row[data-fullscreen-anchor-id]').each(function() {
                if ($(this).attr('data-fullscreen-anchor-id').length > 0)
                    $(this).attr('id', $(this).attr('data-fullscreen-anchor-id'));
            });
            $('.container-wrap .main-content > .row').css({ 'padding-bottom': '0' });
            if ($('#nectar_fullscreen_rows > .wpb_row:nth-child(1)').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && !$('#nectar_fullscreen_rows > .wpb_row:nth-child(1)').hasClass('full-width-content')) { $('#nectar_fullscreen_rows > .wpb_row:nth-child(1)').addClass('extra-top-padding'); }
        }
        if ($('#nectar_fullscreen_rows').length > 0 && $disableFPonMobile != 'on' || $().fullpage && $disableFPonMobile != 'on') {
            function setFPNavColoring(index, direction) {
                if ($('#boxed').length > 0 && overallWidth > 750) return;
                if ($('#nectar_fullscreen_rows > .wpb_row:nth-child(' + index + ')').find('.span_12.light').length > 0) {
                    $('#fp-nav').addClass('light-controls');
                    if (direction == 'up')
                        $('#header-outer.dark-slide').removeClass('dark-slide');
                    else
                        setTimeout(function() { $('#header-outer.dark-slide').removeClass('dark-slide'); }, 520);
                } else {
                    $('#fp-nav.light-controls').removeClass('light-controls');
                    if (direction == 'up')
                        $('#header-outer').addClass('dark-slide');
                    else
                        setTimeout(function() { $('#header-outer').addClass('dark-slide'); }, 520);
                }
            }
            var $anchors = [];
            var $names = [];

            function setFPNames() {
                $anchors = [];
                $names = [];
                $('#nectar_fullscreen_rows > .wpb_row').each(function(i) {
                    $id = ($(this).is('[data-fullscreen-anchor-id]')) ? $(this).attr('data-fullscreen-anchor-id') : '';
                    if ($('#nectar_fullscreen_rows[data-anchors="on"]').length > 0) {
                        if ($id.indexOf('fws_') == -1) $anchors.push($id);
                        else $anchors.push('section-' + (i + 1));
                    }
                    if ($(this).find('.full-page-inner-wrap[data-name]').length > 0)
                        $names.push($(this).find('.full-page-inner-wrap').attr('data-name'));
                    else
                        $names.push(' ');
                });
            }
            setFPNames();

            function initFullPageFooter() {
                var $footerPos = $('#nectar_fullscreen_rows').attr('data-footer');
                if ($footerPos == 'default') { $('#footer-outer').appendTo('#nectar_fullscreen_rows').addClass('fp-auto-height').addClass('fp-section').addClass('wpb_row').attr('data-anchor', ' ').wrapInner('<div class="span_12" />').wrapInner('<div class="container" />').wrapInner('<div class="full-page-inner" />').wrapInner('<div class="full-page-inner-wrap" />').wrapInner('<div class="full-page-inner-wrap-outer" />'); } else if ($footerPos == 'last_row') {
                    $('#footer-outer').remove();
                    $('#nectar_fullscreen_rows > .wpb_row:last-child').attr('id', 'footer-outer').addClass('fp-auto-height');
                } else { $('#footer-outer').remove(); }
            }
            if ($('#nectar_fullscreen_rows').length > 0)
                initFullPageFooter();

            function fullscreenRowLogic() {
                $('.full-page-inner-wrap .full-page-inner > .span_12 > .wpb_column').each(function() {
                    if ($(this).find('> .vc_column-inner > .wpb_wrapper').find('> .wpb_row').length > 0) {
                        $(this).find('> .vc_column-inner > .wpb_wrapper').addClass('only_rows');
                        $rowNum = $(this).find('> .vc_column-inner > .wpb_wrapper').find('> .wpb_row').length;
                        $(this).find('> .vc_column-inner > .wpb_wrapper').attr('data-inner-row-num', $rowNum);
                    } else if ($(this).find('> .column-inner-wrap > .column-inner > .wpb_wrapper').find('> .wpb_row').length > 0) {
                        $(this).find('> .column-inner-wrap > .column-inner > .wpb_wrapper').addClass('only_rows');
                        $rowNum = $(this).find('> .column-inner-wrap > .column-inner > .wpb_wrapper').find('> .wpb_row').length;
                        $(this).find('> .column-inner-wrap > .column-inner > .wpb_wrapper').attr('data-inner-row-num', $rowNum);
                    }
                });
            }
            fullscreenRowLogic();

            function fullHeightRowOverflow() {
                if ($(window).width() >= 1000) {
                    $('#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap[data-content-pos="full_height"]').each(function() {
                        $(this).find('> .full-page-inner').css('height', '100%');
                        var maxHeight = overallHeight;
                        var columnPaddingTop = 0;
                        var columnPaddingBottom = 0;
                        if ($('#nectar_fullscreen_rows').attr('data-animation') == 'none')
                            $(this).find('> .full-page-inner > .span_12 ').css('height', '100%');
                        else
                            $(this).find('> .full-page-inner > .span_12 ').css('height', overallHeight);
                        $(this).find('> .full-page-inner > .span_12 > .wpb_column > .vc_column-inner > .wpb_wrapper').each(function() {
                            columnPaddingTop = parseInt($(this).parents('.wpb_column').css('padding-top'));
                            columnPaddingBottom = parseInt($(this).parents('.wpb_column').css('padding-bottom'));
                            maxHeight = maxHeight > $(this).height() + columnPaddingTop + columnPaddingBottom ? maxHeight : $(this).height() + columnPaddingTop + columnPaddingBottom;
                        });
                        if (maxHeight > overallHeight)
                            $(this).find('> .full-page-inner > .span_12').height(maxHeight).css('float', 'none');
                    });
                } else {
                    $('#nectar_fullscreen_rows > .wpb_row').each(function() {
                        $totalColHeight = 0;
                        $(this).find('.fp-scrollable > .fp-scroller > .full-page-inner-wrap-outer > .full-page-inner-wrap[data-content-pos="full_height"] > .full-page-inner > .span_12 > .wpb_column').each(function() { $totalColHeight += $(this).outerHeight(true); });
                        $(this).find('.fp-scrollable > .fp-scroller > .full-page-inner-wrap-outer > .full-page-inner-wrap > .full-page-inner').css('height', '100%');
                        if ($totalColHeight > $(this).find('.fp-scrollable > .fp-scroller > .full-page-inner-wrap-outer > .full-page-inner-wrap > .full-page-inner').height())
                            $(this).find('.fp-scrollable  > .fp-scroller > .full-page-inner-wrap-outer > .full-page-inner-wrap > .full-page-inner').height($totalColHeight);
                    });
                }
            }

            function fullscreenElementSizing() {
                $nsSelector = '.nectar-slider-wrap[data-fullscreen="true"][data-full-width="true"], .nectar-slider-wrap[data-fullscreen="true"][data-full-width="boxed-full-width"]';
                if ($('.nectar-slider-wrap[data-fullscreen="true"][data-full-width="true"]').length > 0 || $('.nectar-slider-wrap[data-fullscreen="true"][data-full-width="boxed-full-width"]').length > 0) {
                    if ($('#nectar_fullscreen_rows .wpb_row').length > 0)
                        $($nsSelector).find('.swiper-container').attr('data-height', $('#nectar_fullscreen_rows .wpb_row').height() + 1);
                    $(window).trigger('resize.nsSliderContent');
                    $($nsSelector).parents('.full-page-inner').addClass('only-nectar-slider');
                }
            }
            $('#nectar_fullscreen_rows[data-row-bg-animation="ken_burns"] > .wpb_row:first-child .row-bg.using-image').addClass('kenburns');
            setTimeout(function() { $('#nectar_fullscreen_rows[data-row-bg-animation="ken_burns"] > .wpb_row:first-child .row-bg.using-image').removeClass('kenburns'); }, 500);
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) $('#nectar_fullscreen_rows[data-row-bg-animation="ken_burns"]').attr('data-row-bg-animation', 'none');
            var overallHeight = $(window).height();
            var overallWidth = $(window).width();
            var $fpAnimation = $('#nectar_fullscreen_rows').attr('data-animation');
            var $fpAnimationSpeed;
            var $svgResizeTimeout;
            switch ($('#nectar_fullscreen_rows').attr('data-animation-speed')) {
                case 'slow':
                    $fpAnimationSpeed = 1150;
                    break;
                case 'medium':
                    $fpAnimationSpeed = 850;
                    break;
                case 'fast':
                    $fpAnimationSpeed = 650;
                    break;
                default:
                    $fpAnimationSpeed = 850;
            }

            function initNectarFP() {
                $usingFullScreenRows = true;
                $fullscreenSelector = '.wpb_row.active ';
                $('.container-wrap, .container-wrap .main-content > .row').css({ 'padding-bottom': '0', 'margin-bottom': '0' });
                $('#nectar_fullscreen_rows').fullpage({
                    sectionSelector: '#nectar_fullscreen_rows > .wpb_row',
                    navigation: true,
                    css3: true,
                    scrollingSpeed: $fpAnimationSpeed,
                    anchors: $anchors,
                    scrollOverflow: true,
                    navigationPosition: 'right',
                    navigationTooltips: $names,
                    afterLoad: function(anchorLink, index, slideAnchor, slideIndex) {
                        if ($('#nectar_fullscreen_rows').hasClass('afterLoaded')) {
                            $('.wpb_row:not(.last-before-footer):not(:nth-child(' + index + ')) .fp-scrollable').each(function() {
                                $scrollable = $(this).data('iscrollInstance');
                                $scrollable.scrollTo(0, 0);
                            });
                            $('.wpb_row:not(:nth-child(' + index + ')) .owl-carousel').trigger('to.owl.carousel', [0]);
                            var $row_id = $('#nectar_fullscreen_rows > .wpb_row:nth-child(' + index + ')').attr('id');
                            $('#nectar_fullscreen_rows > .wpb_row').removeClass('transition-out').removeClass('trans');
                            $('#nectar_fullscreen_rows > .wpb_row:nth-child(' + index + ')').removeClass('next-current');
                            $('#nectar_fullscreen_rows > .wpb_row:nth-child(' + index + ') .full-page-inner-wrap-outer').css({ 'height': '100%' });
                            $('#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap-outer').css({ 'transform': 'none' });
                            if ($row_id != 'footer-outer' && $('#nectar_fullscreen_rows > .wpb_row:nth-child(' + index + ').last-before-footer').length == 0) {
                                waypoints();
                                if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
                                    resetWaypoints();
                                    Waypoint.destroyAll();
                                    startMouseParallax();
                                }
                                responsiveTooltips();
                            }
                            if ($row_id != 'footer-outer') {
                                $('#nectar_fullscreen_rows > .wpb_row').removeClass('last-before-footer').css('transform', 'initial');
                                $('#nectar_fullscreen_rows > .wpb_row:not(.active):not(#footer-outer)').css({ 'transform': 'translateY(0)', 'left': '-9999px', 'transition': 'none', 'opacity': '1', 'will-change': 'auto' });
                                $('#nectar_fullscreen_rows > .wpb_row:not(#footer-outer)').find('.full-page-inner-wrap-outer').css({ 'transition': 'none', 'transform': 'none', 'will-change': 'auto' });
                                $('#nectar_fullscreen_rows > .wpb_row:not(#footer-outer)').find('.fp-tableCell').css({ 'transition': 'none', 'transform': 'none', 'will-change': 'auto' });
                                $('#nectar_fullscreen_rows > .wpb_row:not(#footer-outer)').find('.full-page-inner-wrap-outer > .full-page-inner-wrap > .full-page-inner > .container').css({ 'backface-visibility': 'visible', 'z-index': 'auto' });
                            }
                        } else {
                            fullHeightRowOverflow();
                            overallHeight = $('#nectar_fullscreen_rows').height();
                            $('#nectar_fullscreen_rows').addClass('afterLoaded');
                            setTimeout(function() { window.scrollTo(0, 0); }, 1800);
                            $('#nectar_fullscreen_rows[data-row-bg-animation="ken_burns"] > .wpb_row:first-child .row-bg.using-image').removeClass('kenburns');
                            fullscreenElementSizing();
                        }
                        $('#nectar_fullscreen_rows').removeClass('nextSectionAllowed');
                    },
                    onLeave: function(index, nextIndex, direction) {
                        var $row_id = $('#nectar_fullscreen_rows > .wpb_row:nth-child(' + nextIndex + ')').attr('id');
                        var $indexRow = $('#nectar_fullscreen_rows > .wpb_row:nth-child(' + index + ')');
                        var $nextIndexRow = $('#nectar_fullscreen_rows > .wpb_row:nth-child(' + nextIndex + ')');
                        var $nextIndexRowInner = $nextIndexRow.find('.full-page-inner-wrap-outer');
                        var $nextIndexRowFpTable = $nextIndexRow.find('.fp-tableCell');
                        var $transformProp = (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) ? 'transform' : 'all';
                        if ($row_id == 'footer-outer') {
                            $indexRow.addClass('last-before-footer');
                            $('#footer-outer').css('opacity', '1');
                        } else {
                            $('#nectar_fullscreen_rows > .wpb_row.last-before-footer').css('transform', 'translateY(0px)');
                            $('#footer-outer').css('opacity', '0');
                        }
                        if ($indexRow.attr('id') == 'footer-outer') {
                            $('#footer-outer').css({ 'transition': $transformProp + ' 460ms cubic-bezier(0.60, 0.23, 0.2, 0.93)', 'backface-visibility': 'hidden' });
                            $('#footer-outer').css({ 'transform': 'translateY(45%) translateZ(0)' });
                        }
                        if ($nextIndexRow.attr('id') != 'footer-outer') { $nextIndexRowFpTable.find('.full-page-inner-wrap-outer > .full-page-inner-wrap > .full-page-inner > .container').css({ 'backface-visibility': 'hidden', 'z-index': '110' }); }
                        if ($nextIndexRow.attr('id') != 'footer-outer' && $indexRow.attr('id') != 'footer-outer' && $('#nectar_fullscreen_rows[data-animation="none"]').length == 0) {
                            if (direction == 'down') {
                                if ($fpAnimation == 'parallax') {
                                    $indexRow.css({ 'transition': $transformProp + ' ' + $fpAnimationSpeed + 'ms cubic-bezier(.29,.23,.13,1)', 'will-change': 'transform', 'transform': 'translateZ(0)', 'z-index': '100' });
                                    setTimeout(function() { $indexRow.css({ 'transform': 'translateY(-50%) translateZ(0)' }); }, 60);
                                    $nextIndexRow.css({ 'z-index': '1000', 'top': '0', 'left': '0' });
                                    $nextIndexRowFpTable.css({ 'transform': 'translateY(100%) translateZ(0)', 'will-change': 'transform' });
                                    $nextIndexRowInner.css({ 'transform': 'translateY(-50%) translateZ(0)', 'will-change': 'transform' });
                                } else if ($fpAnimation == 'zoom-out-parallax') {
                                    $indexRow.css({ 'transition': 'opacity ' + $fpAnimationSpeed + 'ms cubic-bezier(0.37, 0.31, 0.2, 0.85), transform ' + $fpAnimationSpeed + 'ms cubic-bezier(0.37, 0.31, 0.2, 0.85)', 'z-index': '100', 'will-change': 'transform' });
                                    setTimeout(function() { $indexRow.css({ 'transform': 'scale(0.77) translateZ(0)', 'opacity': '0' }); }, 60);
                                    $nextIndexRow.css({ 'z-index': '1000', 'top': '0', 'left': '0' });
                                    $nextIndexRowFpTable.css({ 'transform': 'translateY(100%) translateZ(0)', 'will-change': 'transform' });
                                    $nextIndexRowInner.css({ 'transform': 'translateY(-50%) translateZ(0)', 'will-change': 'transform' });
                                }
                            } else {
                                if ($fpAnimation == 'parallax') {
                                    $indexRow.css({ 'transition': $transformProp + ' ' + $fpAnimationSpeed + 'ms cubic-bezier(.29,.23,.13,1)', 'z-index': '100', 'will-change': 'transform' });
                                    setTimeout(function() { $indexRow.css({ 'transform': 'translateY(50%) translateZ(0)' }); }, 60);
                                    $nextIndexRow.css({ 'z-index': '1000', 'top': '0', 'left': '0' });
                                    $nextIndexRowFpTable.css({ 'transform': 'translateY(-100%) translateZ(0)', 'will-change': 'transform' });
                                    $nextIndexRowInner.css({ 'transform': 'translateY(50%) translateZ(0)', 'will-change': 'transform' });
                                } else if ($fpAnimation == 'zoom-out-parallax') {
                                    $indexRow.css({ 'transition': 'opacity ' + $fpAnimationSpeed + 'ms cubic-bezier(0.37, 0.31, 0.2, 0.85), transform ' + $fpAnimationSpeed + 'ms cubic-bezier(0.37, 0.31, 0.2, 0.85)', 'z-index': '100', 'will-change': 'transform' });
                                    setTimeout(function() { $indexRow.css({ 'transform': 'scale(0.77) translateZ(0)', 'opacity': '0' }); }, 60);
                                    $nextIndexRow.css({ 'z-index': '1000', 'top': '0', 'left': '0' });
                                    $nextIndexRowFpTable.css({ 'transform': 'translateY(-100%) translateZ(0)', 'will-change': 'transform' });
                                    $nextIndexRowInner.css({ 'transform': 'translateY(50%) translateZ(0)', 'will-change': 'transform' });
                                }
                            }
                            setTimeout(function() { $nextIndexRowFpTable.css({ 'transition': $transformProp + ' ' + $fpAnimationSpeed + 'ms cubic-bezier(.29,.23,.13,1) 0ms', 'transform': 'translateY(0%) translateZ(0)' }); if ($fpAnimation != 'none') $nextIndexRowInner.css({ 'transition': $transformProp + ' ' + $fpAnimationSpeed + 'ms cubic-bezier(.29,.23,.13,1) 0ms', 'transform': 'translateY(0%) translateZ(0)' }); }, 60);
                        }
                        if ($('#nectar_fullscreen_rows[data-animation="none"]').length == 0 && $nextIndexRow.find('.fp-scrollable').length > 0)
                            $nextIndexRow.find('.full-page-inner-wrap-outer').css('height', overallHeight);
                        setTimeout(function() {
                            if ($row_id == 'footer-outer') {
                                $indexRow.css('transform', 'translateY(-' + ($('#footer-outer').height() - 1) + 'px)');
                                $('#footer-outer').css({ 'transform': 'translateY(45%) translateZ(0)' });
                                $('#footer-outer').css({ 'transition-duration': '0s', 'backface-visibility': 'hidden' });
                                setTimeout(function() {
                                    $('#footer-outer').css({ 'transition': $transformProp + ' 500ms cubic-bezier(0.60, 0.23, 0.2, 0.93)', 'backface-visibility': 'hidden' });
                                    $('#footer-outer').css({ 'transform': 'translateY(0%) translateZ(0)' });
                                }, 30);
                            }
                        }, 30);
                        if ($row_id != 'footer-outer') {
                            stopMouseParallax();
                            setFPNavColoring(nextIndex, direction);
                        }
                    },
                    afterResize: function() {
                        overallHeight = $('#nectar_fullscreen_rows').height();
                        overallWidth = $(window).width();
                        fullHeightRowOverflow();
                        fullscreenElementSizing();
                        fullscreenFooterCalcs();
                        if ($('#footer-outer.active').length > 0) { setTimeout(function() { $('.last-before-footer').css('transform', 'translateY(-' + $('#footer-outer').height() + 'px)'); }, 200); }
                        clearTimeout($svgResizeTimeout);
                        $svgResizeTimeout = setTimeout(function() {
                            if ($svg_icons.length > 0) {
                                $('.svg-icon-holder.animated-in').each(function(i) {
                                    $(this).css('opacity', '1');
                                    $svg_icons[$(this).attr('id').slice(-1)].finish();
                                });
                            }
                        }, 300);
                    }
                });
            }
            if ($('#nectar_fullscreen_rows').length > 0)
                initNectarFP();
            $(window).smartresize(function() {
                if ($('#nectar_fullscreen_rows').length > 0) {
                    setTimeout(function() {
                        $('.wpb_row:not(.last-before-footer) .fp-scrollable').each(function() {
                            $scrollable = $(this).data('iscrollInstance');
                            $scrollable.refresh();
                        });
                    }, 200);
                    fullHeightRowOverflow();
                }
            });

            function fullscreenFooterCalcs() {
                if ($('#footer-outer.active').length > 0) {
                    $('.last-before-footer').addClass('fp-notransition').css('transform', 'translateY(-' + $('#footer-outer').height() + 'px)');
                    setTimeout(function() { $('.last-before-footer').removeClass('fp-notransition'); }, 10);
                }
            }

            function stopMouseParallax() { $.each($mouseParallaxScenes, function(k, v) { v.parallax('disable'); }); }

            function startMouseParallax() { if ($('#nectar_fullscreen_rows > .wpb_row.active .nectar-parallax-scene').length > 0) { $.each($mouseParallaxScenes, function(k, v) { v.parallax('enable'); }); } }
            if ($('#nectar_fullscreen_rows').length > 0) {
                if ($('#fp-nav.tooltip_alt').length == 0) setFPNavColoring(1, 'na');
                fullscreenElementSizing();
            }

            function resetWaypoints() {
                $('img.img-with-animation.animated-in:not([data-animation="none"])').css({ 'transition': 'none' });
                $('img.img-with-animation.animated-in:not([data-animation="none"])').css({ 'opacity': '0', 'transform': 'none' }).removeClass('animated-in');
                $('.col.has-animation.animated-in:not([data-animation*="reveal"]), .wpb_column.has-animation.animated-in:not([data-animation*="reveal"])').css({ 'transition': 'none' });
                $('.col.has-animation.animated-in:not([data-animation*="reveal"]), .wpb_column.has-animation.animated-in:not([data-animation*="reveal"]), .nectar_cascading_images .cascading-image:not([data-animation="none"]) .inner-wrap').css({ 'opacity': '0', 'transform': 'none', 'left': 'auto', 'right': 'auto' }).removeClass('animated-in');
                $('.col.has-animation.boxed:not([data-animation*="reveal"]), .wpb_column.has-animation.boxed:not([data-animation*="reveal"])').addClass('no-pointer-events');
                $('.wpb_column.has-animation[data-animation*="reveal"], .nectar_cascading_images').removeClass('animated-in');
                if (overallWidth > 1000 && $('.using-mobile-browser').length == 0) {
                    $('.wpb_column.has-animation[data-animation="reveal-from-bottom"] > .column-inner-wrap').css({ 'transition': 'none', 'transform': 'translate(0, 100%)' });
                    $('.wpb_column.has-animation[data-animation="reveal-from-bottom"] > .column-inner-wrap > .column-inner').css({ 'transition': 'none', 'transform': 'translate(0, -90%)' });
                    $('.wpb_column.has-animation[data-animation="reveal-from-top"] > .column-inner-wrap').css({ 'transition': 'none', 'transform': 'translate(0, -100%)' });
                    $('.wpb_column.has-animation[data-animation="reveal-from-top"] > .column-inner-wrap > .column-inner').css({ 'transition': 'none', 'transform': 'translate(0, 90%)' });
                    $('.wpb_column.has-animation[data-animation="reveal-from-left"] > .column-inner-wrap').css({ 'transition-duration': '0s', 'transform': 'translate(-100%, 0)' });
                    $('.wpb_column.has-animation[data-animation="reveal-from-left"] > .column-inner-wrap > .column-inner').css({ 'transition-duration': '0s', 'transform': 'translate(90%, 0)' });
                    $('.wpb_column.has-animation[data-animation="reveal-from-right"] > .column-inner-wrap').css({ 'transition-duration': '0s', 'transform': 'translate(100%, 0)' });
                    $('.wpb_column.has-animation[data-animation="reveal-from-right"] > .column-inner-wrap > .column-inner').css({ 'transition-duration': '0s', 'transform': 'translate(-90%, 0)' });
                }
                $('.wpb_column.has-animation[data-animation*="reveal"] > .column-inner-wrap, .wpb_column.has-animation[data-animation*="reveal"] > .column-inner-wrap > .column-inner').removeClass('no-transform');
                $('.wpb_animate_when_almost_visible.animated').removeClass('wpb_start_animation').removeClass('animated');
                $('.wpb_column[data-border-animation="true"] .border-wrap.animation').removeClass('animation').removeClass('completed');
                $('.nectar-milestone.animated-in').removeClass('animated-in').removeClass('in-sight');
                $('.nectar-milestone .symbol').removeClass('in-sight');
                $('.nectar-fancy-ul[data-animation="true"]').removeClass('animated-in');
                $('.nectar-fancy-ul[data-animation="true"] ul li').css({ 'opacity': '0', 'left': '-20px' });
                $('.nectar-progress-bar').parent().removeClass('completed');
                $('.nectar-progress-bar .bar-wrap > span').css({ 'width': '0px' });
                $('.nectar-progress-bar .bar-wrap > span > strong').css({ 'opacity': '0' });
                $('.nectar-progress-bar .bar-wrap').css({ 'opacity': '0' });
                $('.clients.fade-in-animation').removeClass('animated-in');
                $('.clients.fade-in-animation > div').css('opacity', '0');
                $('.owl-carousel[data-enable-animation="true"]').removeClass('animated-in');
                $('.owl-carousel[data-enable-animation="true"] .owl-stage > .owl-item').css({ 'transition': 'none', 'opacity': '0', 'transform': 'translate(0, 70px)' });
                $('.divider-small-border[data-animate="yes"], .divider-border[data-animate="yes"]').removeClass('completed').css({ 'transition': 'none', 'transform': 'scale(0,1)' });
                $('.nectar-icon-list').removeClass('completed');
                $('.nectar-icon-list-item').removeClass('animated');
                $('.portfolio-items .col').removeClass('animated-in');
                $('.nectar-split-heading').removeClass('animated-in');
                $('.nectar-split-heading .heading-line > div').transit({ 'y': '200%' }, 0);
                $('.nectar_image_with_hotspots[data-animation="true"]').removeClass('completed');
                $('.nectar_image_with_hotspots[data-animation="true"] .nectar_hotspot_wrap').removeClass('animated-in');
                $('.nectar-animated-title').removeClass('completed');
                if ($('.vc_pie_chart').length > 0)
                    vc_pieChart();
                $('.col.has-animation:not([data-animation*="reveal"]), .wpb_column.has-animation:not([data-animation*="reveal"])').each(function(i) { clearTimeout($standAnimatedColTimeout[i]); });
            }
        } else if ($('#nectar_fullscreen_rows').length > 0 && $disableFPonMobile == 'on' || $().fullpage && $disableFPonMobile == 'on') { $('html,body').css({ 'height': 'auto', 'overflow-y': 'auto' }); }

        function initSF() {
            if ($('body[data-header-format="left-header"]').length == 0) {
                $disableHI = ($('body[data-dropdown-style="minimal"]').length > 0) ? true : false;
                $(".sf-menu").superfish({ delay: 650, speed: 'fast', speedOut: 'fast', animation: { opacity: 'show' } });
                $('#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul').each(function() {
                    if ($(this).offset().left + $(this).outerWidth() > $(window).width()) {
                        $(this).addClass('on-left-side');
                        $(this).find('ul').addClass('on-left-side');
                    }
                });
                $('body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li:has("> ul")').addClass('has-ul');
                if ($('body[data-megamenu-width="full-width"]').length > 0) {
                    megamenuFullwidth();
                    $(window).on('smartresize', megamenuFullwidth);
                    $('header#top nav > ul > li.megamenu > .sub-menu').css('box-sizing', 'content-box');
                }
                $('header#top nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, header#top .megamenu .sub-menu a .sf-sub-indicator').remove();
                $('header#top nav > ul > li.megamenu > ul.sub-menu > li > a').each(function() { if ($(this).text() == '–') { $(this).remove(); } });
            }
        }

        function megamenuFullwidth() {
            var $windowWidth = $(window).width();
            var $headerContainerWidth = $('header#top > .container').width();
            $('header#top nav > ul > li.megamenu > .sub-menu').css({ 'padding-left': ($windowWidth - $headerContainerWidth) / 2 + 'px', 'padding-right': ($windowWidth + 2 - $headerContainerWidth) / 2 + 'px', 'width': $headerContainerWidth, 'left': '-' + ($windowWidth - $headerContainerWidth) / 2 + 'px' });
        }
        var $navLeave;

        function addOrRemoveSF() {
            if (window.innerWidth < 1000 && $('body').attr('data-responsive') == '1') {
                $('body').addClass('mobile');
                $('header#top nav').hide();
            } else {
                $('body').removeClass('mobile');
                $('header#top nav').show();
                $('#mobile-menu').hide();
                $('.slide-out-widget-area-toggle #toggle-nav .lines-button').removeClass('close');
                $('.sf-sub-indicator').css('height', $('a.sf-with-ul').height());
            }
            if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) $('body').addClass('using-mobile-browser');
        }

        function showOnLeftSubMenu() {
            $('#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul').each(function() {
                $(this).removeClass('on-left-side');
                if ($(this).offset().left + $(this).outerWidth() > $(window).width()) {
                    $(this).addClass('on-left-side');
                    $(this).find('ul').addClass('on-left-side');
                } else {
                    $(this).removeClass('on-left-side');
                    $(this).find('ul').removeClass('on-left-side');
                }
            });
        }
        addOrRemoveSF();
        initSF();
        $(window).resize(addOrRemoveSF);

        function SFArrows() { $('.sf-sub-indicator').css('height', $('a.sf-with-ul').height()); }
        SFArrows();
        if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
            $('body').attr('data-hhun', '0');

        function standardCarouselInit() {
            $('.carousel:not(".clients")').each(function() {
                var $that = $(this);
                var maxCols = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 'auto' : 3;
                var scrollNum = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 'auto' : '';
                var colWidth = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 500 : 453;
                var scrollSpeed, easing;
                var $autoplayBool = ($(this).attr('data-autorotate') == 'true') ? true : false;
                if ($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') { if ($(this).find('li').length % 3 === 0) { var $themeSkin = true; var $themeSkin2 = true; } else { var $themeSkin = false; var $themeSkin2 = true; } } else { var $themeSkin = true; var $themeSkin2 = true; }
                (parseInt($(this).attr('data-scroll-speed'))) ? scrollSpeed = parseInt($(this).attr('data-scroll-speed')): scrollSpeed = 700;
                ($(this).attr('data-easing').length > 0) ? easing = $(this).attr('data-easing'): easing = 'linear';
                var $element = $that;
                if ($that.find('img').length == 0) $element = $('body');
                imagesLoaded($element, function(instance) {
                    $that.carouFredSel({
                        circular: $themeSkin,
                        infinite: $themeSkin2,
                        height: 'auto',
                        responsive: true,
                        items: { width: colWidth, visible: { min: 1, max: maxCols } },
                        swipe: {
                            onTouch: true,
                            onMouse: true,
                            options: { excludedElements: "button, input, select, textarea, .noSwipe", tap: function(event, target) { if ($(target).attr('href') && !$(target).is('[target="_blank"]') && !$(target).is('[rel^="prettyPhoto"]') && !$(target).is('.magnific-popup') && !$(target).is('.magnific')) window.open($(target).attr('href'), '_self'); } },
                            onBefore: function() {
                                $that.find('.work-item').trigger('mouseleave');
                                $that.find('.work-item .work-info a').trigger('mouseup');
                            }
                        },
                        scroll: {
                            items: scrollNum,
                            easing: easing,
                            duration: scrollSpeed,
                            onBefore: function(data) { if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') { $that.parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($that.find('> li').length / $that.triggerHandler("currentVisible").length)); } },
                            onAfter: function(data) {
                                if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
                                    $that.parents('.carousel-wrap').find('.item-count .current').html($that.triggerHandler('currentPage') + 1);
                                    $that.parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($that.find('> li').length / $that.triggerHandler("currentVisible").length));
                                }
                            }
                        },
                        prev: { button: function() { return $that.parents('.carousel-wrap').find('.carousel-prev'); } },
                        next: { button: function() { return $that.parents('.carousel-wrap').find('.carousel-next'); } },
                        auto: { play: $autoplayBool }
                    }, { transition: true }).animate({ 'opacity': 1 }, 1300);
                    $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
                    if ($that.parents('.carousel-wrap').attr('data-full-width') == 'true') $that.parents('.carousel-outer').css('overflow', 'visible');
                    if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') { $('<div class="item-count"><span class="current">1</span>/<span class="total">' + ($that.find('> li').length / $that.triggerHandler("currentVisible").length) + '</span></div>').insertAfter($that.parents('.carousel-wrap').find('.carousel-prev')); }
                    $that.addClass('finished-loading');
                    carouselHeightCalcs();
                    if (!$('body').hasClass('mobile') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
                        $(".portfolio-items.carousel .work-item.style-3 img").panr({ scaleDuration: .28 });
                        $(".portfolio-items:not(.carousel) .work-item.style-3-alt img").panr({ scaleDuration: .28, sensitivity: 12.6, scaleTo: 1.08, panDuration: 3 });
                    }
                });
            });
        }
        if ($('.carousel').length > 0) standardCarouselInit();

        function owlCarouselInit() {
            $('.owl-carousel').each(function() {
                var $that = $(this);
                var $stagePadding = ($(window).width() < 1000) ? 0 : parseInt($(this).attr('data-column-padding'));
                var $autoRotateBool = $that.attr('data-autorotate');
                var $autoRotateSpeed = $that.attr('data-autorotations-peed');
                $(this).owlCarousel({ responsive: { 0: { items: $(this).attr('data-mobile-cols') }, 690: { items: $(this).attr('data-tablet-cols') }, 1000: { items: $(this).attr('data-desktop-small-cols') }, 1300: { items: $(this).attr('data-desktop-cols') } }, autoplay: $autoRotateBool, autoplayTimeout: $autoRotateSpeed, onTranslate: function() { $that.addClass('moving'); }, onTranslated: function() { $that.removeClass('moving'); } });
                $(this).on('changed.owl.carousel', function(event) {
                    if (event.item.count - event.page.size == event.item.index)
                        $(event.target).find('.owl-dots div:last').addClass('active').siblings().removeClass('active');
                });
            });
        }

        function owl_carousel_animate() {
            $($fullscreenSelector + '.owl-carousel[data-enable-animation="true"]').each(function() {
                $owlOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : 'bottom-in-view';
                var $animationDelay = ($(this).is('[data-animation-delay]') && $(this).attr('data-animation-delay').length > 0 && $(this).attr('data-animation') != 'false') ? $(this).attr('data-animation-delay') : 0;
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                        setTimeout(function() {
                            $that.find('.owl-stage > .owl-item').each(function(i) {
                                var $that = $(this);
                                $that.delay(i * 200).transition({ 'opacity': '1', 'y': '0' }, 600, 'easeOutQuart');
                            });
                            $that.addClass('animated-in');
                        }, $animationDelay);
                        waypoint.destroy();
                    },
                    offset: $owlOffsetPos
                });
            });
        }

        function productCarouselInit() {
            $('.products-carousel').each(function() {
                var $that = $(this).find('ul');
                var maxCols = 'auto';
                var scrollNum = 'auto';
                var colWidth = ($(this).parents('.full-width-content ').length > 0) ? 400 : 353;
                var scrollSpeed = 800;
                var easing = 'easeInOutQuart';
                var $element = $that;
                if ($that.find('img').length == 0) $element = $('body');
                $(this).append('<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>')
                imagesLoaded($element, function(instance) {
                    $that.carouFredSel({
                        circular: true,
                        responsive: true,
                        items: { width: colWidth, visible: { min: 1, max: maxCols } },
                        swipe: {
                            onTouch: true,
                            onMouse: true,
                            options: {
                                excludedElements: "button, input, select, textarea, .noSwipe",
                                tap: function(event, target) {
                                    if ($(target).attr('href') && !$(target).is('[target="_blank"]') && !$(target).hasClass('add_to_wishlist') && !$(target).hasClass('add_to_cart_button') && !$(target).is('[rel^="prettyPhoto"]'))
                                        window.open($(target).attr('href'), '_self');
                                    if ($(target).parent().attr('href') && !$(target).parent().is('[target="_blank"]') && !$(target).parent().hasClass('add_to_wishlist') && !$(target).parent().hasClass('add_to_cart_button') && !$(target).parent().is('[rel^="prettyPhoto"]'))
                                        window.open($(target).parent().attr('href'), '_self');
                                }
                            },
                            onBefore: function() {
                                $that.find('.product-wrap').trigger('mouseleave');
                                $that.find('.product a').trigger('mouseup');
                            }
                        },
                        scroll: { items: scrollNum, easing: easing, duration: scrollSpeed },
                        prev: { button: function() { return $that.parents('.carousel-wrap').find('.carousel-prev'); } },
                        next: { button: function() { return $that.parents('.carousel-wrap').find('.carousel-next'); } },
                        auto: { play: false }
                    }).animate({ 'opacity': 1 }, 1300);
                    $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
                    $that.addClass('finished-loading');
                    fullWidthContentColumns();
                    $(window).trigger('resize');
                });
            });
        }
        if ($('.products-carousel').length > 0) productCarouselInit();

        function fwCarouselLinkFix() {
            var $mousePosStart = 0;
            var $mousePosEnd = 0;
            $('.carousel-wrap .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a').mousedown(function(e) { $mousePosStart = e.clientX; });
            $('.carousel-wrap .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a').mouseup(function(e) { $mousePosEnd = e.clientX; });
            $('.carousel-wrap .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a').click(function(e) { if (Math.abs($mousePosStart - $mousePosEnd) > 10) return false; });
        }
        fwCarouselLinkFix();

        function carouselHeightCalcs() {
            $('.carousel.portfolio-items.finished-loading').each(function() {
                var bottomSpace = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true' && $(this).find('.style-2, .style-3, .style-4').length > 0) ? 0 : 28;
                var tallestMeta = 0;
                $(this).find('> li').each(function() {
                    ($(this).find('.work-meta').height() > tallestMeta) ? tallestMeta = $(this).find('.work-meta').height(): tallestMeta = tallestMeta;
                });
                $(this).parents('.caroufredsel_wrapper').css({ 'height': ($(this).find('.work-item').outerHeight() + tallestMeta + bottomSpace - 2) + 'px' });
                if ($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
                    $(this).parents('.carousel-wrap').find('.item-count .current').html(Math.ceil(($(this).triggerHandler("currentPosition") + 1) / $(this).triggerHandler("currentVisible").length));
                    $(this).parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($(this).find('> li').length / $(this).triggerHandler("currentVisible").length));
                }
            });
            $('.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading').each(function() {
                var tallestColumn = 0;
                $(this).find('> li').each(function() {
                    ($(this).height() > tallestColumn) ? tallestColumn = $(this).height(): tallestColumn = tallestColumn;
                });
                $(this).css('height', tallestColumn + 5);
                $(this).parents('.caroufredsel_wrapper').css('height', tallestColumn + 5);
                if ($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
                    $(this).parents('.carousel-wrap').find('.item-count .current').html(Math.ceil(($(this).triggerHandler("currentPosition") + 1) / $(this).triggerHandler("currentVisible").length));
                    $(this).parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($(this).find('> li').length / $(this).triggerHandler("currentVisible").length));
                }
            });
        }

        function clientsCarouselInit() {
            $('.carousel.clients').each(function() {
                var $that = $(this);
                var columns;
                var $autoRotate = (!$(this).hasClass('disable-autorotate')) ? true : false;
                (parseInt($(this).attr('data-max'))) ? columns = parseInt($(this).attr('data-max')): columns = 5;
                if ($(window).width() < 690 && $('body').attr('data-responsive') == '1') {
                    columns = 2;
                    $(this).addClass('phone')
                }
                var $element = $that;
                if ($that.find('img').length == 0) $element = $('body');
                imagesLoaded($element, function(instance) {
                    $that.carouFredSel({ circular: true, responsive: true, items: { height: $that.find('> div:first').height(), width: $that.find('> div:first').width(), visible: { min: 1, max: columns } }, swipe: { onTouch: true, onMouse: true }, scroll: { items: 1, easing: 'easeInOutCubic', duration: '800', pauseOnHover: true }, auto: { play: $autoRotate, timeoutDuration: 2700 } }).animate({ 'opacity': 1 }, 1300);
                    $that.addClass('finished-loading');
                    $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
                    $(window).trigger('resize');
                });
            });
        }
        if ($('.carousel').length > 0) clientsCarouselInit();

        function clientsCarouselHeightRecalc() {
            var tallestImage = 0;
            $('.carousel.clients.finished-loading').each(function() {
                $(this).find('> div').each(function() {
                    ($(this).height() > tallestImage) ? tallestImage = $(this).height(): tallestImage = tallestImage;
                });
                $(this).css('height', tallestImage);
                $(this).parent().css('height', tallestImage);
            });
        }

        function carouselfGrabbingClass() {
            $('body').on('mousedown', '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a', function() { $(this).addClass('active'); });
            $('body').on('mouseup', '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a', function() { $(this).removeClass('active'); });
        }
        carouselfGrabbingClass();
        $('body.ascend').on('mouseover', '.carousel-next', function() { $(this).parent().find('.carousel-prev, .item-count').addClass('next-hovered'); });
        $('body.ascend').on('mouseleave', '.carousel-next', function() { $(this).parent().find('.carousel-prev, .item-count').removeClass('next-hovered'); });

        function clientsFadeIn() {
            $clientsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? 100 : 'bottom-in-view';
            $($fullscreenSelector + '.clients.fade-in-animation').each(function() {
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                        $that.find('> div').each(function(i) { $(this).delay(i * 80).transition({ 'opacity': "1" }, 450); });
                        setTimeout(function() { $that.addClass('completed'); }, ($that.find('> div').length * 80) + 450);
                        $that.addClass('animated-in');
                        waypoint.destroy();
                    },
                    offset: $clientsOffsetPos
                });
            });
        }
        jQuery.fn.setCursorPosition = function(position) { if (this.lengh == 0) return this; return $(this).setSelection(position, position); }
        jQuery.fn.setSelection = function(selectionStart, selectionEnd) {
            if (this.lengh == 0) return this;
            input = this[0];
            if (input.createTextRange) {
                var range = input.createTextRange();
                range.collapse(true);
                range.moveEnd('character', selectionEnd);
                range.moveStart('character', selectionStart);
                range.select();
            } else if (input.setSelectionRange) {
                input.focus();
                input.setSelectionRange(selectionStart, selectionEnd);
            }
            return this;
        }
        $.extend($.expr[':'], { transparent: function(elem, i, attr) { return ($(elem).css("opacity") === "0"); } });

        function getQueryParams(qs) {
            qs = qs.split("+").join(" ");
            var params = {},
                tokens, re = /[?&]?([^=]+)=([^&]*)/g;
            while (tokens = re.exec(qs)) { params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]); }
            return params;
        }
        var $_GET = getQueryParams(document.location.search);
        var CountUp = function(target, startVal, endVal, decimals, duration, options) {
            var lastTime = 0;
            var vendors = ['webkit', 'moz', 'ms', 'o'];
            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
            }
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            }
            if (!window.cancelAnimationFrame) { window.cancelAnimationFrame = function(id) { clearTimeout(id); }; }
            var self = this;
            self.options = { useEasing: true, useGrouping: true, separator: ',', decimal: '.', easingFn: null, formattingFn: null };
            for (var key in options) { if (options.hasOwnProperty(key)) { self.options[key] = options[key]; } }
            if (self.options.separator === '') { self.options.useGrouping = false; }
            if (!self.options.prefix) self.options.prefix = '';
            if (!self.options.suffix) self.options.suffix = '';
            self.d = (typeof target === 'string') ? document.getElementById(target) : target;
            self.startVal = Number(startVal);
            self.endVal = Number(endVal);
            self.countDown = (self.startVal > self.endVal);
            self.frameVal = self.startVal;
            self.decimals = Math.max(0, decimals || 0);
            self.dec = Math.pow(10, self.decimals);
            self.duration = Number(duration) * 1000 || 2000;
            self.formatNumber = function(nStr) {
                nStr = nStr.toFixed(self.decimals);
                nStr += '';
                var x, x1, x2, rgx;
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? self.options.decimal + x[1] : '';
                rgx = /(\d+)(\d{3})/;
                if (self.options.useGrouping) { while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + self.options.separator + '$2'); } }
                return self.options.prefix + x1 + x2 + self.options.suffix;
            };
            self.easeOutExpo = function(t, b, c, d) { return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b; };
            self.easingFn = self.options.easingFn ? self.options.easingFn : self.easeOutExpo;
            self.formattingFn = self.options.formattingFn ? self.options.formattingFn : self.formatNumber;
            self.version = function() { return '1.7.1'; };
            self.printValue = function(value) {
                var result = self.formattingFn(value);
                if (self.d.tagName === 'INPUT') { this.d.value = result; } else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') { this.d.textContent = result; } else { this.d.innerHTML = result; }
            };
            self.count = function(timestamp) {
                if (!self.startTime) { self.startTime = timestamp; }
                self.timestamp = timestamp;
                var progress = timestamp - self.startTime;
                self.remaining = self.duration - progress;
                if (self.options.useEasing) { if (self.countDown) { self.frameVal = self.startVal - self.easingFn(progress, 0, self.startVal - self.endVal, self.duration); } else { self.frameVal = self.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration); } } else { if (self.countDown) { self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration)); } else { self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration); } }
                if (self.countDown) { self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal; } else { self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal; }
                self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
                self.printValue(self.frameVal);
                if (progress < self.duration) { self.rAF = requestAnimationFrame(self.count); } else { if (self.callback) { self.callback(); } }
            };
            self.start = function(callback) {
                self.callback = callback;
                self.rAF = requestAnimationFrame(self.count);
                return false;
            };
            self.pauseResume = function() {
                if (!self.paused) {
                    self.paused = true;
                    cancelAnimationFrame(self.rAF);
                } else {
                    self.paused = false;
                    delete self.startTime;
                    self.duration = self.remaining;
                    self.startVal = self.frameVal;
                    requestAnimationFrame(self.count);
                }
            };
            self.reset = function() {
                self.paused = false;
                delete self.startTime;
                self.startVal = startVal;
                cancelAnimationFrame(self.rAF);
                self.printValue(self.startVal);
            };
            self.update = function(newEndVal) {
                cancelAnimationFrame(self.rAF);
                self.paused = false;
                delete self.startTime;
                self.startVal = self.frameVal;
                self.endVal = Number(newEndVal);
                self.countDown = (self.startVal > self.endVal);
                self.rAF = requestAnimationFrame(self.count);
            };
            self.printValue(self.startVal);
        };
        var easeOutCubic = function(t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b; };

        function vcWaypoints() {
            $($fullscreenSelector + ' .wpb_animate_when_almost_visible').each(function() {
                var $vcOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '90%';
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated')) { waypoint.destroy(); return; }
                        $that.addClass("animated");
                        $that.addClass("wpb_start_animation");
                        waypoint.destroy();
                    },
                    offset: $vcOffsetPos
                });
            });
        }

        function milestoneInit() {
            $('.nectar-milestone').each(function() {
                if ($(this).is('[data-symbol]')) {
                    if ($(this).find('.symbol-wrap').length == 0) { if ($(this).attr('data-symbol-pos') == 'before') { $(this).find('.number').prepend('<div class="symbol-wrap"><span class="symbol">' + $(this).attr('data-symbol') + '</span></div>'); } else { $(this).find('.number').append('<div class="symbol-wrap"><span class="symbol">' + $(this).attr('data-symbol') + '</span></div>'); } }
                    $symbol_size = ($(this).attr('data-symbol-size') == $(this).find('.number').attr('data-number-size') && $(this).attr('data-symbol-alignment') == 'superscript') ? 32 : parseInt($(this).attr('data-symbol-size'));
                    $(this).find('.symbol-wrap').css({ 'font-size': $symbol_size + 'px', 'line-height': $symbol_size + 'px' });
                }
                $(this).find('.number').css({ 'font-size': $(this).find('.number').attr('data-number-size') + 'px', 'line-height': $(this).find('.number').attr('data-number-size') + 'px' });
            });
            if (!$('body').hasClass('mobile') && $('.nectar-milestone').length > 0) {
                var $blurCssString = '';
                $($fullscreenSelector + '.nectar-milestone.motion_blur').each(function(i) {
                    $(this).addClass('instance-' + i);
                    var $currentColor = $(this).find('.number').css('color');
                    var colorInt = parseInt($currentColor.substring(1), 16);
                    var R = (colorInt & 0xFF0000) >> 16;
                    var G = (colorInt & 0x00FF00) >> 8;
                    var B = (colorInt & 0x0000FF) >> 0;
                    var $rgbaColorStart = 'rgba(' + R + ',' + G + ',' + B + ',0.2)';
                    var $rgbaColorEnd = 'rgba(' + R + ',' + G + ',' + B + ',1)';
                    var $numberSize = parseInt($(this).find('.number').attr('data-number-size'));
                    $blurCssString += '@keyframes motion-blur-number-' + i + ' { ' + ' 0% { ' + 'opacity: 0;' + 'color: ' + $rgbaColorStart + '; ' + 'text-shadow: 0 ' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + '; ' + 'transform: translateZ(0px) translateY(-100%); ' + '-webkit-transform: translateZ(0px) translateY(-100%); ' + '} ' + '33% { opacity: 1 }' + '100% { ' + 'color: ' + $rgbaColorEnd + '; ' + 'text-shadow: none; ' + 'transform: translateZ(0px) translateY(0px); ' + '-webkit-transform: translateZ(0px) translateY(0px); ' + '} ' + '} ' + '@-webkit-keyframes motion-blur-number-' + i + ' { ' + ' 0% { ' + 'opacity: 0;' + 'color: ' + $rgbaColorStart + '; ' + 'text-shadow: 0 ' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + '; ' + 'transform: translateZ(0px) translateY(-100%); ' + '-webkit-transform: translateZ(0px) translateY(-100%); ' + '} ' + '33% { opacity: 1 }' + '100% { ' + 'color: ' + $rgbaColorEnd + '; ' + 'text-shadow: none; ' + 'transform: translateZ(0px) translateY(0px); ' + '-webkit-transform: translateZ(0px) translateY(0px); ' + '} ' + '} ' + '.nectar-milestone.motion_blur.instance-' + i + ' .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-' + i + '; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-' + i + '; } ';
                    $symbol = $(this).find('.symbol-wrap').clone();
                    $(this).find('.symbol-wrap').remove();
                    var characters = $(this).find('.number').text().split("");
                    $this = $(this).find('.number');
                    $this.empty();
                    $.each(characters, function(i, el) { $this.append("<span>" + el + "</span"); });
                    if ($(this).has('[data-symbol]')) { if ($(this).attr('data-symbol-pos') == 'after') { $this.append($symbol); } else { $this.prepend($symbol); } }
                });
                var head = document.head || document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) { style.styleSheet.cssText = $blurCssString; } else { style.appendChild(document.createTextNode($blurCssString)); }
                $(style).attr('id', 'milestone-blur');
                $('head #milestone-blur').remove();
                head.appendChild(style);
                milestoneWaypoint();
            }
        }

        function milestoneWaypoint() {
            $($fullscreenSelector + '.nectar-milestone').each(function() {
                var $offset = ($(this).hasClass('motion_blur')) ? '90%' : '105%';
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                        var $endNum = parseInt($that.find('.number span:not(.symbol)').text());
                        if (!$that.hasClass('motion_blur')) {
                            var countOptions = { easingFn: easeOutCubic };
                            var $countEle = $that.find('.number span:not(.symbol)')[0];
                            var numAnim = new CountUp($countEle, 0, $endNum, 0, 2.2, countOptions);
                            numAnim.start();
                        } else {
                            $that.find('span').each(function(i) {
                                var $that = $(this);
                                setTimeout(function() { $that.addClass('in-sight'); }, 200 * i);
                            });
                        }
                        $that.addClass('animated-in');
                        waypoint.destroy();
                    },
                    offset: 'bottom-in-view'
                });
            });
        }
        var $animationOnScrollTimeOut = ($('.nectar-box-roll').length > 0) ? 850 : 125;
        $tabbedClickCount = 0;
        $('body').on('click', '.tabbed > ul li:not(.cta-button) a', function() {
            var $id = $(this).parents('li').index() + 1;
            if (!$(this).hasClass('active-tab') && !$(this).hasClass('loading')) {
                $(this).parents('ul').find('a').removeClass('active-tab');
                $(this).addClass('active-tab');
                $(this).parents('.tabbed').find('> div:not(.clear)').css({ 'visibility': 'hidden', 'position': 'absolute', 'opacity': '0', 'left': '-9999px', 'display': 'none' });
                $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').css({ 'visibility': 'visible', 'position': 'relative', 'left': '0', 'display': 'block' }).stop().transition({ 'opacity': 1 }, 300);
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ') .iframe-embed').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ') .portfolio-items').length > 0) setTimeout(function() { $(window).resize(); }, 10);
            }
            if ($tabbedClickCount != 0) {
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-progress-bar').length > 0)
                    progressBars();
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.divider-small-border [data-animate="yes"]').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.divider-border [data-animate="yes"]').length > 0)
                    dividers();
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('img.img-with-animation').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.col.has-animation').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar_cascading_images').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.wpb_column.has-animation').length > 0) {
                    colAndImgAnimations();
                    cascadingImageBGSizing();
                }
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-milestone').length > 0)
                    milestoneWaypoint();
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar_image_with_hotspots[data-animation="true"]').length > 0)
                    imageWithHotspots();
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-fancy-ul').length > 0)
                    nectar_fancy_ul_init();
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-split-heading').length > 0)
                    splitLineHeadings();
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.wpb_column[data-border-animation="true"]').length > 0) { animatedColBorders(); }
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.wpb_animate_when_almost_visible').length > 0) { vcWaypoints(); }
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-animated-title').length > 0) { animated_titles(); }
                if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar_food_menu_item').length > 0) { foodMenuItems(); }
                if ($(this).parents('.wpb_row').length > 0) {
                    if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.vc_pie_chart').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.wp-video-shortcode').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.twentytwenty-container').length > 0 || $(this).parents('.wpb_row').next().hasClass('parallax_section'))
                        $(window).trigger('resize');
                    if ($(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-flickity').length > 0)
                        $('.nectar-flickity:not(.masonry)').flickity('resize');
                }
                $(this).parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.svg-icon-holder').each(function(i) {
                    var $that = $(this);
                    setTimeout(function() {
                        var $animationDelay = ($(this).is('[data-animation-delay]') && $(this).attr('data-animation-delay').length > 0 && $(this).attr('data-animation') != 'false') ? $(this).attr('data-animation-delay') : 0;
                        clearTimeout($animatedSVGIconTimeout[i]);
                        if ($that.attr('data-animation') == 'false') {
                            $animationSpeed = 1;
                            $that.css('opacity', '1');
                            $svg_icons[$that.attr('id').slice(-1)].finish();
                        } else {
                            $svg_icons[$that.attr('id').slice(-1)].reset();
                            $animatedSVGIconTimeout[i] = setTimeout(function() { $svg_icons[$that.attr('id').slice(-1)].play(); }, $animationDelay);
                        }
                    }, 150);
                });
            }
            $(this).parents('.tabbed').find('.wpb_row').each(function() {
                if (typeof $(this).find('[class*="vc_col-"]').first().offset() != 'undefined') {
                    var $firstChildOffset = $(this).find('[class*="vc_col-"]').first().offset().left;
                    $(this).find('[class*="vc_col-"]').each(function() { $(this).removeClass('no-left-margin'); if ($(this).offset().left < $firstChildOffset + 15) { $(this).addClass('no-left-margin'); } else { $(this).removeClass('no-left-margin'); } });
                }
            });
            $tabbedClickCount++;
            if ($(this).parent().parent().find('.magic-line').length > 0) { magicLineCalc($(this)); }
            return false;
        });

        function magicLineCalc($ele) {
            var el, leftPos, ratio;
            el = $ele.parent();
            if (el.length) {
                leftPos = el.position().left;
                ratio = el.width();
            } else { leftPos = ratio = 0; }
            $ele.parent().parent().find('.magic-line').css('transform', 'translateX(' + leftPos + 'px) scaleX(' + ratio + ')');
        }

        function tabbedInit() {
            $('.tabbed').each(function() {
                if ($(this).find('.swiper-container').length == 0 && $(this).find('.testimonial_slider').length == 0 && $(this).find('.portfolio-items:not(".carousel")').length == 0 && $(this).find('.wpb_gallery .portfolio-items').length == 0 && $(this).find('iframe').length == 0) { $(this).find('> ul li:first-child a').click(); }
                if ($(this).find('.testimonial_slider').length > 0 || $(this).find('.portfolio-items:not(".carousel")').length > 0 || $(this).find('.wpb_gallery .portfolio-items').length > 0 || $(this).find('iframe').length > 0) {
                    var $that = $(this);
                    $(this).find('.wpb_tab').show().css({ 'opacity': 0, 'height': '1px' });
                    $(this).find('> ul li a').addClass('loading');
                    setTimeout(function() {
                        $that.find('.wpb_tab').hide().css({ 'opacity': 1, 'height': 'auto' });
                        $that.find('> ul li a').removeClass('loading');
                        $that.find('> ul li:first-child a').click();
                    }, 900);
                }
                if ($(this).is('[data-style="minimal_alt"]')) {
                    $(this).find('> ul').append('<li class="magic-line" />');
                    magicLineCalc($(this).find('> ul > li:first-child > a'));
                }
            });
        }
        tabbedInit();

        function tabbbedDeepLinking() {
            if (typeof $_GET['tab'] != 'undefined') {
                $('.wpb_tabs_nav').each(function() {
                    $(this).find('li').each(function() {
                        var $currentText = $(this).find('a').text();
                        var $getText = $_GET['tab'];
                        var $that = $(this);
                        $currentText = $currentText.replace(/\s+/g, '-').toLowerCase();
                        $getText = $getText.replace(/\s+/g, '-').replace(/</g, '&lt;').replace(/"/g, '&quot;').toLowerCase();
                        if ($currentText == $getText) {
                            $(this).find('a').click();
                            setTimeout(function() { $that.find('a').click(); }, 901);
                        }
                    })
                });
            }
        }
        tabbbedDeepLinking();
        $('body').on('click', '.toggle h3 a', function() {
            if (!$(this).parents('.toggles').hasClass('accordion')) {
                $(this).parents('.toggle').find('> div').slideToggle(300);
                $(this).parents('.toggle').toggleClass('open');
                if ($(this).parents('.toggle').hasClass('open')) { $(this).find('i').attr('class', 'icon-minus-sign'); } else { $(this).find('i').attr('class', 'icon-plus-sign'); }
                if ($(this).parents('.toggle').find('> div .iframe-embed').length > 0 && $(this).parents('.toggle').find('> div .iframe-embed iframe').height() == '0') responsiveVideoIframes();
                if ($(this).parents('.full-width-content').length > 0) setTimeout(function() { fullWidthContentColumns(); }, 300);
                if ($('#nectar_fullscreen_rows').length > 0) setTimeout(function() { $(window).trigger('smartresize'); }, 300);
                return false;
            }
        });
        $('body').on('click', '.accordion .toggle h3 a', function() {
            if ($(this).parents('.toggle').hasClass('open')) return false;
            $(this).parents('.toggles').find('.toggle > div').slideUp(300);
            $(this).parents('.toggles').find('.toggle h3 a i').attr('class', 'icon-plus-sign');
            $(this).parents('.toggles').find('.toggle').removeClass('open');
            $(this).parents('.toggle').find('> div').slideDown(300);
            $(this).parents('.toggle').addClass('open');
            if ($(this).parents('.toggle').hasClass('open')) { $(this).find('i').attr('class', 'icon-minus-sign'); } else { $(this).find('i').attr('class', 'icon-plus-sign'); }
            if ($(this).parents('.full-width-content').length > 0) { clearTimeout($t); var $t = setTimeout(function() { fullWidthContentColumns(); }, 400); }
            if ($('#nectar_fullscreen_rows').length > 0) { clearTimeout($t); var $t = setTimeout(function() { $(window).trigger('smartresize'); }, 400); }
            return false;
        });

        function accordionInit() {
            $('.accordion').each(function() {
                $(this).find('> .toggle').first().addClass('open').find('> div').show();
                $(this).find('> .toggle').first().find('a i').attr('class', 'icon-minus-sign');
            });
            $('.toggles').each(function() {
                var $isAccordion = ($(this).hasClass('accordion')) ? true : false;
                $(this).find('.toggle').each(function() {
                    if ($(this).find('> div .testimonial_slider').length > 0 || $(this).find('> div iframe').length > 0) {
                        var $that = $(this);
                        $(this).find('> div').show().css({ 'opacity': 0, 'height': '1px', 'padding': '0' });
                        testimonialHeightResize();
                        setTimeout(function() { $that.find('> div').hide().css({ 'opacity': 1, 'height': 'auto', 'padding': '10px 14px' }); if ($isAccordion == true && $that.index() == 0) $that.find('> div').slideDown(300); }, 900);
                    }
                });
            })
        }
        accordionInit();

        function accordionDeepLinking() {
            if (typeof $_GET['toggle'] != 'undefined') {
                $('.toggles').each(function() {
                    $(this).find('.toggle').each(function() {
                        var $currentText = $(this).find('h3 a').clone();
                        var $getText = $_GET['toggle'];
                        $($currentText).find('i').remove();
                        $currentText = $currentText.text();
                        $currentText = $currentText.replace(/\s+/g, '-').toLowerCase();
                        $getText = $getText.replace(/\s+/g, '-').replace(/</g, '&lt;').replace(/"/g, '&quot;').toLowerCase();
                        if ($currentText == $getText) $(this).find('h3 a').click();
                    });
                });
            }
        }
        accordionDeepLinking();
        $.cssHooks.color = {
            get: function(elem) {
                if (elem.currentStyle)
                    var color = elem.currentStyle["color"];
                else if (window.getComputedStyle)
                    var color = document.defaultView.getComputedStyle(elem, null).getPropertyValue("color");
                if (color.search("rgb") == -1)
                    return color;
                else {
                    color = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                    function hex(x) { return ("0" + parseInt(x).toString(16)).slice(-2); }
                    if (color) { return "#" + hex(color[1]) + hex(color[2]) + hex(color[3]); }
                }
            }
        }
        $.cssHooks.backgroundColor = {
            get: function(elem) {
                if (elem.currentStyle)
                    var bg = elem.currentStyle["backgroundColor"];
                else if (window.getComputedStyle)
                    var bg = document.defaultView.getComputedStyle(elem, null).getPropertyValue("background-color");
                if (bg.search("rgb") == -1)
                    return bg;
                else {
                    bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                    function hex(x) { return ("0" + parseInt(x).toString(16)).slice(-2); }
                    if (bg) { return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]); }
                }
            }
        }

        function shadeColor(hex, lum) {
            hex = String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) { hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]; }
            lum = lum || 0;
            var rgb = "#",
                c, i;
            for (i = 0; i < 3; i++) {
                c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
                rgb += ("00" + c).substr(c.length);
            }
            return rgb;
        }

        function coloredButtons() {
            $('.nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]').each(function() {
                $(this).css('visibility', 'visible');
                if ($(this).hasClass('see-through-3') && $(this).attr('data-color-override') == 'false') { return true; }
                if ($(this).attr('data-color-override') != 'false') { var $color = $(this).attr('data-color-override'); } else {
                    if ($(this).parents('.dark').length > 0)
                        var $color = '#000000';
                    else
                        var $color = '#ffffff';
                }
                if (!$(this).hasClass('see-through-3')) $(this).css('color', $color);
                $(this).find('i').css('color', $color);
                var colorInt = parseInt($color.substring(1), 16);
                var $hoverColor = ($(this).has('[data-hover-color-override]')) ? $(this).attr('data-hover-color-override') : 'no-override';
                var $hoverTextColor = ($(this).has('[data-hover-text-color-override]')) ? $(this).attr('data-hover-text-color-override') : '#fff';
                var R = (colorInt & 0xFF0000) >> 16;
                var G = (colorInt & 0x00FF00) >> 8;
                var B = (colorInt & 0x0000FF) >> 0;
                $opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75';
                $(this).css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')');
                if ($(this).hasClass('see-through')) { $(this).hover(function() { $(this).css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',1)'); }, function() { $(this).css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')'); }); } else {
                    $(this).find('i').css('color', $hoverTextColor);
                    if ($hoverColor != 'no-override') { $(this).hover(function() { $(this).css({ 'border-color': $hoverColor, 'background-color': $hoverColor, 'color': $hoverTextColor }); }, function() { $opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75'; if (!$(this).hasClass('see-through-3')) { $(this).css({ 'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')', 'background-color': 'transparent', 'color': $color }); } else { $(this).css({ 'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')', 'background-color': 'transparent' }); } }); } else {
                        $(this).hover(function() { $(this).css({ 'border-color': $hoverColor, 'color': $hoverTextColor }); }, function() {
                            $opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75';
                            $(this).css({ 'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')', 'color': $hoverTextColor });
                        });
                    }
                }
            });
            $('.nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]').each(function() {
                $(this).css('visibility', 'visible');
                if ($(this).attr('data-color-override') != 'false') {
                    var $color = $(this).attr('data-color-override');
                    $(this).removeClass('accent-color').removeClass('extra-color-1').removeClass('extra-color-2').removeClass('extra-color-3');
                    $(this).css('background-color', $color);
                }
            });
            if ($('.swiper-slide .solid_color_2').length > 0 || $('.tilt-button-inner').length > 0) {
                var $tiltButtonCssString = '';
                $('.swiper-slide .solid_color_2 a').each(function(i) {
                    $(this).addClass('instance-' + i);
                    if ($(this).attr('data-color-override') != 'false') { var $color = $(this).attr('data-color-override'); } else {
                        if ($(this).parents('.dark').length > 0)
                            var $color = '#000000';
                        else
                            var $color = '#ffffff';
                    }
                    $(this).css('color', $color);
                    $(this).find('i').css('color', $color);
                    var $currentColor = $(this).css('background-color');
                    var $topColor = shadeColor($currentColor, 0.13);
                    var $bottomColor = shadeColor($currentColor, -0.15);
                    $tiltButtonCssString += '.swiper-slide .solid_color_2 a.instance-' + i + ':after { background-color: ' + $topColor + ';  }' + ' .swiper-slide .solid_color_2 a.instance-' + i + ':before { background-color: ' + $bottomColor + '; } ';
                });
                $('.tilt-button-wrap a').each(function(i) {
                    $(this).addClass('instance-' + i);
                    var $currentColor = $(this).css('background-color');
                    if ($(this).attr('data-color-override') != 'false') {
                        var $color = $(this).attr('data-color-override');
                        $(this).css('background-color', $color);
                        $currentColor = $color;
                    }
                    var $topColor = shadeColor($currentColor, 0.13);
                    var $bottomColor = shadeColor($currentColor, -0.15);
                    $tiltButtonCssString += '.tilt-button-wrap a.instance-' + i + ':after { background-color: ' + $topColor + ';  }' + ' .tilt-button-wrap a.instance-' + i + ':before { background-color: ' + $bottomColor + '; } ';
                });
                var head = document.head || document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) { style.styleSheet.cssText = $tiltButtonCssString; } else { style.appendChild(document.createTextNode($tiltButtonCssString)); }
                head.appendChild(style);
            }
            if ($('.nectar-3d-transparent-button').length > 0) {
                var $3dTransButtonCssString = '';
                $('.nectar-3d-transparent-button').each(function(i) {
                    var $that = $(this);
                    var $size = $that.attr('data-size');
                    var $padding = 0;
                    if ($size == 'large') {
                        $padding = 46;
                        $font_size = 16;
                    } else if ($size == 'medium') {
                        $padding = 30;
                        $font_size = 16;
                    } else if ($size == 'small') {
                        $padding = 20;
                        $font_size = 12;
                    } else if ($size == 'jumbo') {
                        $padding = 54;
                        $font_size = 24;
                    } else if ($size == 'extra_jumbo') {
                        $padding = 100;
                        $font_size = 64;
                    }
                    $that.find('svg text').attr('font-size', $font_size);
                    $boundingRect = $(this).find('.back-3d .button-text')[0].getBoundingClientRect();
                    $text_width = $boundingRect.width;
                    $text_height = $font_size * 1.5;
                    $extraMult = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? 0 : 1;
                    $that.css({ 'width': ($text_width + $padding * 1.5) + 'px', 'height': ($text_height + $padding) + 'px' });
                    $that.find('> a').css({ 'height': ($text_height + $padding) + 'px' });
                    $that.find('.back-3d svg, .front-3d svg').css({ 'width': ($text_width + $padding * 1.5) + 'px', 'height': ($text_height + $padding) + 'px' }).attr('viewBox', '0 0 ' + ($text_width + $padding) + ' ' + ($text_height + $padding));
                    if ($size == 'jumbo')
                        $that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * 1.5) / 2 + ' ' + (($text_height + $padding) / 1.68) + ')');
                    else if ($size == 'extra_jumbo')
                        $that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * 1.6) / 2 + ' ' + (($text_height + $padding) / 1.6) + ')');
                    else if ($size == 'large') { $that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * 1.5) / 2 + ' ' + (($text_height + $padding) / 1.7) + ')'); } else { $that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * 1.5) / 2 + ' ' + (($text_height + $padding) / 1.65) + ')'); }
                    $that.find('.front-3d ').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
                    $that.find('.back-3d').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
                    $(this).find('.front-3d svg > rect').attr('id', 'masked-rect-id-' + i);
                    $(this).find('.front-3d defs mask').attr('id', 'button-text-mask-' + i);
                    $that.css('visibility', 'visible');
                    $3dTransButtonCssString += '#masked-rect-id-' + i + ' { mask: url(#button-text-mask-' + i + '); -webkit-mask: url(#button-text-mask-' + i + ')} ';
                });

                function createExtraJumboSize() {
                    $('.nectar-3d-transparent-button').each(function(i) {
                        if ($(this).css('visibility') != 'visible') return;
                        var $that = $(this);
                        var $size = $that.attr('data-size');
                        if ($size == 'extra_jumbo') {
                            $extraMult = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? 0 : 1;
                            if (window.innerWidth < 1000 && window.innerWidth > 690) {
                                $padding = 64;
                                $font_size = 34;
                                $that.find('.back-3d rect').attr('stroke-width', '12');
                                $vert_height_divider = 1.7;
                            } else if (window.innerWidth <= 690) {
                                $padding = 46;
                                $font_size = 16;
                                $that.find('.back-3d rect').attr('stroke-width', '10');
                                $vert_height_divider = 1.7;
                            } else {
                                $padding = 100;
                                $font_size = 64;
                                $that.find('.back-3d rect').attr('stroke-width', '20');
                                $vert_height_divider = 1.6;
                            }
                            $that.find('svg text').attr('font-size', $font_size);
                            $boundingRect = $(this).find('.back-3d .button-text')[0].getBoundingClientRect();
                            $text_width = $boundingRect.width;
                            $text_height = $font_size * 1.5;
                            $that.css({ 'width': ($text_width + $padding * 1.5) + 'px', 'height': ($text_height + $padding) + 'px' });
                            $that.find('> a').css({ 'height': ($text_height + $padding) + 'px' });
                            $that.find('.back-3d svg, .front-3d svg').css({ 'width': ($text_width + $padding * 1.5) + 'px', 'height': ($text_height + $padding) + 'px' }).attr('viewBox', '0 0 ' + ($text_width + $padding) + ' ' + ($text_height + $padding));
                            $that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * 1.6) / 2 + ' ' + (($text_height + $padding) / $vert_height_divider) + ')');
                            $that.find('.front-3d ').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
                            $that.find('.back-3d').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
                        }
                    });
                }
                createExtraJumboSize();
                $(window).on('smartresize', createExtraJumboSize);
                var head = document.head || document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) { style.styleSheet.cssText = $3dTransButtonCssString; } else { style.appendChild(document.createTextNode($3dTransButtonCssString)); }
                head.appendChild(style);
            }
            setTimeout(function() { $('.nectar-button.extra-color-gradient-1 .start, .nectar-button.extra-color-gradient-2 .start, .nectar-button.see-through-extra-color-gradient-1 .start, .nectar-button.see-through-extra-color-gradient-2 .start').removeClass('loading'); }, 150);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.match(/Trident\/7\./)) { $('.nectar-button.extra-color-gradient-1, .nectar-button.extra-color-gradient-2, .nectar-button.see-through-extra-color-gradient-1, .nectar-button.see-through-extra-color-gradient-2').addClass('no-text-grad'); }
        }
        coloredButtons();

        function largeIconHover() {
            $('.icon-3x').each(function() { $(this).closest('.col').hover(function() { $(this).find('.icon-3x').addClass('hovered') }, function() { $('.icon-3x').removeClass('hovered') }); });
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.match(/Trident\/7\./))
                $('[class^="icon-"].extra-color-gradient-1, [class^="icon-"].extra-color-gradient-2, [class^="icon-"][data-color="extra-color-gradient-1"], [class^="icon-"][data-color="extra-color-gradient-2"], .nectar_icon_wrap[data-color*="extra-color-gradient"] .nectar_icon, .nectar-gradient-text').addClass('no-grad');
        }
        largeIconHover();

        function teamMemberFullscreen() {
            $('body').on('click', '.team-member[data-style="bio_fullscreen"]', function() {
                if ($('.nectar_team_member_overlay').length > 0) return;
                $teamMemberMeta = $(this).find('.nectar_team_bio').html();
                $teamMemberImg = ($(this).find('.nectar_team_bio_img[data-img-src]').length > 0) ? $(this).find('.nectar_team_bio_img').attr('data-img-src') : '';
                $('body').append('<div class="nectar_team_member_overlay"><div class="inner-wrap"><div class="team_member_details"><h2>' + $(this).find('.team-meta h3').html() + '</h2><div class="title">' + $(this).find('.team-meta p').html() + '</div><div class="team-desc">' + $teamMemberMeta + '</div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div><div class="nectar_team_member_close"><div class="inner"></div></div>');
                if ($teamMemberImg.length > 0) {
                    var teamTmpImg = new Image();
                    teamTmpImg.src = $teamMemberImg;
                    teamTmpImg.onload = function() { $('.nectar_team_member_overlay .team_member_image').css('opacity', '1'); };
                    $('.nectar_team_member_overlay .team_member_image').css({ 'background-image': 'url("' + $teamMemberImg + '")' });
                }
                var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-outer').height();
                $('.nectar_team_member_overlay .inner-wrap').css({ 'top': $headerNavSpace });
                teamFullscreenResize();
                $('.nectar_team_member_overlay').addClass('open').addClass('animating');
                setTimeout(function() {
                    $('.nectar_team_member_close').addClass('visible');
                    $('.nectar_team_member_overlay').removeClass('animating');
                }, 500);
                $(document).on('mousemove', teamMousemoveOn);
                if ($('.team-member[data-style="bio_fullscreen"]').length > 0 && navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)) { $('.nectar_team_member_overlay').addClass('on-mobile'); }
            });
            $('body').on('click', '.nectar_team_member_overlay', function() {
                if (!$(this).hasClass('animating')) {
                    $('.nectar_team_member_overlay').removeClass('open');
                    $('.nectar_team_member_close').removeClass('visible');
                    setTimeout(function() {
                        $(document).off('mousemove', teamMousemoveOn);
                        $('.nectar_team_member_overlay, .nectar_team_member_close').remove();
                    }, 820);
                }
            });
            if ($('.team-member[data-style="bio_fullscreen"]').length > 0) { $(window).resize(teamFullscreenResize); }
        }

        function teamFullscreenResize() {
            var $leftHeaderSize = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 275 : 0;
            $('.nectar_team_member_overlay').css({ 'width': $(window).width() - $leftHeaderSize, 'left': $leftHeaderSize });
        }

        function teamMousemoveOn(e) {
            if ($('a:hover').length > 0) { $('.nectar_team_member_close .inner').removeClass('visible'); } else { $('.nectar_team_member_close .inner').addClass('visible'); }
            $('.nectar_team_member_close').css({ left: e.pageX - 26, top: e.pageY - $(window).scrollTop() - 29 });
        }
        teamMemberFullscreen();

        function columnBGColors() {
            var $columnColorCSS = '';
            $('.wpb_column').each(function(i) {
                $(this).addClass('instance-' + i);
                if ($(this).attr('data-has-bg-color') == 'true') {
                    if ($(this).is('[data-animation*="reveal"]') && $(this).hasClass('has-animation'))
                        $columnColorCSS += '.wpb_column.instance-' + i + ' .column-inner-wrap .column-inner:before { background-color:' + $(this).attr('data-bg-color') + ';  opacity: ' + $(this).attr('data-bg-opacity') + '; }';
                    else
                        $columnColorCSS += '.wpb_column.instance-' + i + ':before { background-color:' + $(this).attr('data-bg-color') + ';  opacity: ' + $(this).attr('data-bg-opacity') + '; }';
                }
                if ($(this).is('[data-hover-bg^="#"]')) {
                    if ($(this).is('[data-animation*="reveal"]') && $(this).hasClass('has-animation'))
                        $columnColorCSS += '.wpb_column.instance-' + i + ':hover .column-inner:before { background-color: ' + $(this).attr('data-hover-bg') + '; opacity: ' + $(this).attr('data-hover-bg-opacity') + '; }';
                    else
                        $columnColorCSS += '.wpb_column.instance-' + i + ':hover:before { background-color: ' + $(this).attr('data-hover-bg') + '; opacity: ' + $(this).attr('data-hover-bg-opacity') + '; }';
                }
            });
            if ($columnColorCSS.length > 1) {
                var head = document.head || document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) { style.styleSheet.cssText = $columnColorCSS; } else { style.appendChild(document.createTextNode($columnColorCSS)); }
                head.appendChild(style);
            }
        }
        columnBGColors();

        function rowColorOverlay() {
            var $rowOverlayCSS = '';
            $('.row > .wpb_row > .row-bg-wrap .row-bg[data-color_overlay],  #nectar_fullscreen_rows .full-page-inner-wrap > .full-page-inner > .row-bg-wrap .row-bg[data-color_overlay], #portfolio-extra > .wpb_row > .row-bg-wrap .row-bg[data-color_overlay], .single #post-area .content-inner > .wpb_row > .row-bg-wrap .row-bg[data-color_overlay]').each(function(i) {
                $(this).parents('.row-bg-wrap').addClass('instance-' + i);
                $overlayOpacity = ($(this).attr('data-overlay_strength').length > 0) ? $(this).attr('data-overlay_strength') : '1';
                var $using_img_trans = false;
                if ($overlayOpacity == 'image_trans') {
                    $overlayOpacity = '1';
                    $using_img_trans = true;
                }
                $overlay1 = ($(this).attr('data-color_overlay').length > 0) ? $(this).attr('data-color_overlay') : 'transparent';
                $overlay2 = ($(this).attr('data-color_overlay_2').length > 0) ? $(this).attr('data-color_overlay_2') : 'transparent';
                $gradientDirection = ($(this).attr('data-gradient_direction').length > 0) ? $(this).attr('data-gradient_direction') : 'left_t_right';
                switch ($gradientDirection) {
                    case 'left_to_right':
                        var $gradientDirectionDeg = '90deg';
                        break;
                    case 'left_t_to_right_b':
                        var $gradientDirectionDeg = '135deg';
                        break;
                    case 'left_b_to_right_t':
                        var $gradientDirectionDeg = '45deg';
                        break;
                    case 'top_to_bottom':
                        var $gradientDirectionDeg = 'to bottom';
                        break;
                }
                $enableGradient = ($(this).attr('data-enable_gradient') == 'true') ? true : false;
                if ($enableGradient) {
                    if ($overlay1 == '#ffffff' && $overlay2 == 'transparent') $overlay2 = 'rgba(255,255,255,0.001)';
                    if ($overlay1 == 'transparent' && $overlay2 == '#ffffff') $overlay1 = 'rgba(255,255,255,0.001)';
                    if ($gradientDirection == 'top_to_bottom') {
                        if ($overlay2 == 'transparent' || $overlay2 == 'rgba(255,255,255,0.001)') { $rowOverlayCSS += '.row-bg-wrap.instance-' + i + ':after { background: linear-gradient(' + $gradientDirectionDeg + ',' + $overlay1 + ' 0%,' + $overlay2 + ' 75%);  opacity: ' + $overlayOpacity + '; }'; }
                        if ($overlay1 == 'transparent' || $overlay1 == 'rgba(255,255,255,0.001)') { $rowOverlayCSS += '.row-bg-wrap.instance-' + i + ':after { background: linear-gradient(' + $gradientDirectionDeg + ',' + $overlay1 + ' 25%,' + $overlay2 + ' 100%);  opacity: ' + $overlayOpacity + '; }'; }
                        if ($overlay1 != 'transparent' && $overlay2 != 'transparent') { $rowOverlayCSS += '.row-bg-wrap.instance-' + i + ':after {  background: ' + $overlay1 + '; background: linear-gradient(' + $gradientDirectionDeg + ',' + $overlay1 + ' 0%,' + $overlay2 + ' 100%);  opacity: ' + $overlayOpacity + '; }'; }
                    } else if ($gradientDirection == 'left_to_right') {
                        if ($overlay1 == 'transparent' || $overlay1 == 'rgba(255,255,255,0.001)') { $rowOverlayCSS += '.row-bg-wrap.instance-' + i + ':after { background: ' + $overlay1 + '; background: linear-gradient(' + $gradientDirectionDeg + ',' + $overlay1 + ' 25%,' + $overlay2 + ' 100%);  opacity: ' + $overlayOpacity + '; }'; }
                        if ($overlay1 != 'transparent' && $overlay2 != 'transparent') { $rowOverlayCSS += '.row-bg-wrap.instance-' + i + ':after { background: ' + $overlay1 + '; background: linear-gradient(' + $gradientDirectionDeg + ',' + $overlay1 + ' 0%,' + $overlay2 + ' 100%);  opacity: ' + $overlayOpacity + '; }'; }
                    } else { $rowOverlayCSS += '.row-bg-wrap.instance-' + i + ':after { background: ' + $overlay1 + '; background: linear-gradient(' + $gradientDirectionDeg + ',' + $overlay1 + ' 0%,' + $overlay2 + ' 100%);  opacity: ' + $overlayOpacity + '; }'; }
                } else { if ($(this).attr('data-color_overlay').length > 0) { $rowOverlayCSS += '.row-bg-wrap.instance-' + i + ':after { background-color:' + $overlay1 + ';  opacity: ' + $overlayOpacity + '; }'; } }
            });
            if ($rowOverlayCSS.length > 1) {
                var head = document.head || document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) { style.styleSheet.cssText = $rowOverlayCSS; } else { style.appendChild(document.createTextNode($rowOverlayCSS)); }
                head.appendChild(style);
            }
        }
        rowColorOverlay();

        function morphingOutlines() {
            if ($('.morphing-outline').length > 0) {
                $morphingOutlineCSS = '';
                $('.morphing-outline').each(function(i) {
                    $(this).addClass('instance-' + i).css({ 'visibility': 'visible' });
                    var $width = $(this).find('.inner').width();
                    var $height = $(this).find('.inner').height();
                    var $border = parseInt($(this).attr("data-border-thickness"));
                    var $hover = ($('body[data-button-style*="rounded"]').length > 0) ? ':hover' : '';
                    var $hover2 = ($('body[data-button-style*="rounded"]').length > 0) ? '' : ':hover';
                    $morphingOutlineCSS += 'body .morphing-outline.instance-' + i + ' .inner > * { color: ' + $(this).attr("data-starting-color") + '; } ';
                    $morphingOutlineCSS += 'body .morphing-outline.instance-' + i + ' .inner:after  { border-width:' + $(this).attr("data-border-thickness") + 'px ; border-color: ' + $(this).attr("data-starting-color") + '; } ';
                    $morphingOutlineCSS += 'body .wpb_column:hover > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner > *, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner > * { color: ' + $(this).attr("data-hover-color") + '; } ';
                    $morphingOutlineCSS += 'body .wpb_column:hover > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after  { border-color: ' + $(this).attr("data-hover-color") + '; } ';
                    $morphingOutlineCSS += 'body .wpb_column' + $hover2 + ' > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover2 + ' > .vc_column-inner > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after { padding: ' + (($width + 100 + $border * 2 - $height) / 2 - $border) + 'px 50px}';
                    $morphingOutlineCSS += '.morphing-outline.instance-' + i + ' { padding: ' + (30 + ($width + 80 + $border * 2 - $height) / 2 - $border) + 'px 50px}';
                    $morphingOutlineCSS += 'body .wpb_column' + $hover2 + ' > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover2 + ' > .vc_column-inner > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after { top: -' + parseInt((($width + 100 + $border * 2 - $height) / 2 - $border) + $border) + 'px }';
                    $morphingOutlineCSS += 'body .wpb_column > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column > .vc_column-inner > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after { left: -' + parseInt(50 + $border) + 'px }';
                    $morphingOutlineCSS += 'body .wpb_column' + $hover + ' > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover + ' > .vc_column-inner > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after { padding: 50px 50px}';
                    $morphingOutlineCSS += 'body .wpb_column' + $hover + ' > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover + ' > .vc_column-inner > .wpb_wrapper > .morphing-outline.instance-' + i + ' .inner:after { top: -' + parseInt(50 + $border) + 'px }';
                });
                var head = document.head || document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'morphing-outlines';
                if (style.styleSheet) { style.styleSheet.cssText = $morphingOutlineCSS; } else { style.appendChild(document.createTextNode($morphingOutlineCSS)); }
                $('#morphing-outlines').remove();
                head.appendChild(style);
            }
        }
        setTimeout(morphingOutlines, 100);
        setTimeout(fullWidthContentColumns, 126);
        var $svg_icons = [];

        function svgAnimations() {
            $svgOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
            if ($svg_icons.length == 0) {
                $('.svg-icon-holder:not(.animated-in)').each(function(i) {
                    var $that = $(this);
                    if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)) $that.attr('data-animation', 'false');
                    $that.css({ 'height': parseInt($that.attr('data-size')) + 'px', 'width': parseInt($that.attr('data-size')) + 'px' });
                    $(this).attr('id', 'nectar-svg-animation-instance-' + i);
                    var $animationSpeed = ($that.is('[data-animation-speed]') && $that.attr('data-animation-speed').length > 0) ? $that.attr('data-animation-speed') : 200;
                    if ($that.attr('data-animation') == 'false') {
                        $animationSpeed = 1;
                        $that.css('opacity', '1');
                    }
                    if (!$that.hasClass('bound'))
                        $svg_icons[i] = new Vivus($that.attr('id'), { type: 'delayed', pathTimingFunction: Vivus.EASE_OUT, animTimingFunction: Vivus.LINEAR, duration: $animationSpeed, file: $that.text(), onReady: svgInit });
                    $that.find('span').remove();
                    if ($animationSpeed !== 1) {
                        var $that = $(this);
                        var waypoint = new Waypoint({
                            element: $that,
                            handler: function(direction) {
                                if ($that.hasClass('animated-in')) { waypoint.destroy(); return; }
                                checkIfReady();
                                $that.addClass('animated-in');
                                waypoint.destroy();
                            },
                            offset: $svgOffsetPos
                        });
                    } else { checkIfReady(); }

                    function checkIfReady() {
                        var $animationDelay = ($that.is('[data-animation-delay]') && $that.attr('data-animation-delay').length > 0 && $that.attr('data-animation') != 'false') ? $that.attr('data-animation-delay') : 0;
                        if ($svg_icons[$that.attr('id').slice(-1)].isReady == true) {
                            $that.css('opacity', '1');
                            setTimeout(function() { $svg_icons[$that.attr('id').slice(-1)].reset().play(); }, $animationDelay);
                        } else { setTimeout(checkIfReady, 50); }
                    }

                    function svgInit() {
                        $that.find('object').css({ 'height': parseInt($that.attr('data-size')) + 'px', 'width': parseInt($that.attr('data-size')) + 'px' });
                        $svg_icons[$that.attr('id').slice(-1)].reset().stop();
                        var svgDoc = $that.find('object')[0].contentDocument;
                        var styleElement = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
                        styleElement.textContent = "svg, svg path { stroke: " + $that.css('color') + "; fill: none; }";
                        svgDoc.getElementById("Layer_1").appendChild(styleElement);
                    }
                    $that.addClass('bound');
                });
            } else { $('.svg-icon-holder').addClass('animated-in').css('opacity', '1'); }
            $('.svg-icon-holder.animated-in').each(function(i) {
                var $animationDelay = ($(this).is('[data-animation-delay]') && $(this).attr('data-animation-delay').length > 0 && $(this).attr('data-animation') != 'false') ? $(this).attr('data-animation-delay') : 0;
                var $that = $(this);
                clearTimeout($animatedSVGIconTimeout[i]);
                if ($that.attr('data-animation') == 'false') {
                    $animationSpeed = 1;
                    $that.css('opacity', '1');
                    $svg_icons[$that.attr('id').slice(-1)].finish();
                } else {
                    if ($(this).parents('.active').length > 0 || $(this).parents('#footer-outer').length > 0 || $('body.mobile').length > 0) {
                        $svg_icons[$that.attr('id').slice(-1)].reset();
                        $animatedSVGIconTimeout[i] = setTimeout(function() { $svg_icons[$that.attr('id').slice(-1)].play(); }, $animationDelay);
                    } else { $svg_icons[$(this).attr('id').slice(-1)].reset().stop(); }
                }
            });
        }
        if ($('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length > 0 && $('#nectar_fullscreen_rows').length == 0) {
            $(window).on('smartresize', function() {
                clearTimeout($svgResizeTimeout);
                $svgResizeTimeout = setTimeout(function() {
                    if ($svg_icons.length > 0) {
                        $('.svg-icon-holder.animated-in').each(function(i) {
                            $(this).css('opacity', '1');
                            $svg_icons[$(this).attr('id').slice(-1)].finish();
                        });
                    }
                }, 300);
            });
        }

        function nectar_fancy_ul_init() {
            $($fullscreenSelector + '.nectar-fancy-ul').each(function() {
                var $icon = $(this).attr('data-list-icon');
                var $color = $(this).attr('data-color');
                var $animation = $(this).attr('data-animation');
                var $animationDelay = ($(this).is('[data-animation-delay]') && $(this).attr('data-animation-delay').length > 0 && $(this).attr('data-animation') != 'false') ? $(this).attr('data-animation-delay') : 0;
                $(this).find('li').each(function() {
                    if ($(this).find('> i').length == 0)
                        $(this).prepend('<i class="icon-default-style ' + $icon + ' ' + $color + '"></i> ');
                });
                if ($animation == 'true') {
                    var $that = $(this);
                    var waypoint = new Waypoint({
                        element: $that,
                        handler: function(direction) {
                            if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                            setTimeout(function() {
                                $that.find('li').each(function(i) {
                                    var $that = $(this);
                                    $that.delay(i * 220).transition({ 'opacity': '1', 'left': '0' }, 220, 'easeOutCubic');
                                });
                            }, $animationDelay);
                            $that.addClass('animated-in');
                            waypoint.destroy();
                        },
                        offset: 'bottom-in-view'
                    });
                }
            });
        }
        setTimeout(function() {}, $animationOnScrollTimeOut);

        function flipBoxHeights() {
            $('.nectar-flip-box').each(function() {
                var $flipBoxMinHeight = parseInt($(this).attr('data-min-height'));
                var $flipBoxHeight = ($(this).find('.flip-box-back .inner').height() > $(this).find('.flip-box-front .inner').height()) ? $(this).find('.flip-box-back .inner').height() : $(this).find('.flip-box-front .inner').height();
                if ($flipBoxHeight >= $flipBoxMinHeight - 80) { $(this).find('> div').css('height', $flipBoxHeight + 80); } else
                    $(this).find('> div').css('height', 'auto');
            });
        }
        flipBoxHeights();
        if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)) { $('body').on('click', '.nectar-flip-box', function() { $(this).toggleClass('flipped'); }); }
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) { setTimeout(f, 1000 / 60) }
        var $window = $(window);
        var windowHeight = $window.height();
        $window.unbind('scroll.parallaxSections').unbind('resize.parallaxSections');
        $window.unbind('resize.parallaxSectionsUpdateHeight');
        $window.unbind('load.parallaxSectionsOffsetL');
        $window.unbind('resize.parallaxSectionsOffsetR');
        $window.on('resize.parallaxSectionsUpdateHeight', psUpdateWindowHeight);

        function psUpdateWindowHeight() { windowHeight = $window.height(); }

        function psUpdateOffset($this) { $this.each(function() { firstTop = $this.offset().top; }); }
        $.fn.parallaxScroll = function(xpos, speedFactor, outerHeight) {
            var $this = $(this);
            var getHeight;
            var firstTop;
            var paddingTop = 0;
            $this.each(function() { firstTop = $this.offset().top; });
            $window.on('resize.parallaxSectionsOffsetR', psUpdateOffset($this));
            $window.on('load.parallaxSectionsOffsetL', psUpdateOffset($this));
            getHeight = function(jqo) { return jqo.outerHeight(true); };
            if (arguments.length < 1 || xpos === null) xpos = "50%";
            if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
            if (arguments.length < 3 || outerHeight === null) outerHeight = true;
            var $element, top, height, pos;

            function update() {
                pos = $window.scrollTop();
                $this.each(function() {
                    firstTop = $this.offset().top;
                    $element = $(this);
                    top = $element.offset().top;
                    height = getHeight($element);
                    if (top + height < pos || top > pos + windowHeight) { return; }
                    var ua = window.navigator.userAgent;
                    var msie = ua.indexOf("MSIE ");
                    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || $smoothCache == true || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { $this.find('.row-bg.using-image').css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px"); } else {
                        var $ifFast = ($this.find('.row-bg[data-parallax-speed="fast"]').length > 0) ? ($element.find('.row-bg').height() - height) / 2.5 : 0;
                        $this.find('.row-bg.using-image').addClass('translate').css({ 'transform': 'translate3d(0, ' + Math.round(((window.innerHeight + pos - firstTop) * speedFactor) - ($ifFast)) + 'px, 0), scale(1.005)' });
                    }
                });
            }
            if (window.addEventListener) { window.addEventListener('scroll', function() { requestAnimationFrame(update); }, false); }
            $window.on('resize.parallaxSections', update);
            update();
        };
        $('.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]').each(function() { if ($(this).parents('.wpb_row.full-width-section').length == 0 && $(this).parents('.wpb_row.full-width-content').length == 0) { $(this).parents('.wpb_row').addClass('full-width-section'); } });

        function fullWidthSections() {
            var $scrollBar = ($('#ascrail2000').length > 0 && window.innerWidth > 1000) ? -13 : 0;
            var $bodyBorderWidth = ($('.body-border-right').length > 0 && window.innerWidth > 1000) ? parseInt($('.body-border-right').width()) * 2 : 0;
            if ($('#boxed').length == 1) { $justOutOfSight = ((parseInt($('.container-wrap').width()) - parseInt($('.main-content').width())) / 2) + 4; } else {
                var $extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && window.innerWidth >= 1000) ? 180 : 0;
                var $leftHeaderSize = ($('#header-outer[data-format="left-header"]').length > 0 && window.innerWidth >= 1000) ? parseInt($('#header-outer[data-format="left-header"]').width()) : 0;
                if ($(window).width() - $leftHeaderSize - $bodyBorderWidth <= parseInt($('.main-content').css('max-width'))) { var $windowWidth = parseInt($('.main-content').css('max-width')); if ($extResponsivePadding == 180) $windowWidth = $windowWidth - $scrollBar; } else { var $windowWidth = $(window).width() - $leftHeaderSize - $bodyBorderWidth; }
                $contentWidth = parseInt($('.main-content').css('max-width'));
                if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0) {
                    $contentWidth = $('#post-area').width();
                    $extResponsivePadding = 0;
                }
                $justOutOfSight = Math.ceil((($windowWidth + $extResponsivePadding + $scrollBar - $contentWidth) / 2))
            }
            $('.full-width-section').each(function() {
                if (!$(this).parents('.span_9').length > 0 && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner' && $(this).parent().attr('id') != 'portfolio-extra' && !$(this).hasClass('non-fw')) { $(this).css({ 'margin-left': -$justOutOfSight, 'padding-left': $justOutOfSight, 'padding-right': $justOutOfSight, 'visibility': 'visible' }); if ($('#boxed').length > 0 && $('#nectar_fullscreen_rows').length > 0) $(this).css({ 'padding-left': 0, 'padding-right': 0 }); } else if ($(this).parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length != 0) { $(this).css({ 'margin-left': -$justOutOfSight, 'padding-left': $justOutOfSight, 'padding-right': $justOutOfSight, 'visibility': 'visible' }); } else { $(this).css({ 'margin-left': 0, 'padding-left': 0, 'padding-right': 0, 'visibility': 'visible' }); }
            });
            $('.carousel-outer').has('.carousel-wrap[data-full-width="true"]').css('overflow', 'visible');
            $('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .full-width-content').each(function() {
                var $leftHeaderSize = ($('#header-outer[data-format="left-header"]').length > 0 && window.innerWidth >= 1000) ? parseInt($('#header-outer[data-format="left-header"]').width()) : 0;
                var $bodyBorderWidth = ($('.body-border-right').length > 0 && window.innerWidth > 1000) ? parseInt($('.body-border-right').width()) * 2 : 0;
                if ($('#boxed').length == 1) {
                    var $mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
                    if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 && $(this).parents('#post-area').length > 0) {
                        $contentWidth = $('#post-area').width();
                        $extResponsivePadding = 0;
                        $windowWidth = $(window).width() - $bodyBorderWidth;
                        $justOutOfSight = Math.ceil((($windowWidth + $extResponsivePadding + $scrollBar - $contentWidth) / 2))
                    } else {
                        if ($(this).parents('.page-submenu').length > 0)
                            $justOutOfSight = ((parseInt($('.container-wrap').width()) - $mainContentWidth) / 2);
                        else
                            $justOutOfSight = ((parseInt($('.container-wrap').width()) - $mainContentWidth) / 2) + 4;
                    }
                } else {
                    if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 && $(this).parents('#post-area').length > 0) {
                        $contentWidth = $('#post-area').width();
                        $extResponsivePadding = 0;
                        $windowWidth = $(window).width() - $leftHeaderSize - $bodyBorderWidth;
                    } else {
                        var $mainContentMaxWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').css('max-width')) : parseInt($(this).parents('.container').css('max-width'));
                        if ($('#boxed').length == 0 && $(this).hasClass('portfolio-items') && $(this).is('[data-gutter*="px"]') && $(this).attr('data-gutter').length > 0 && $(this).attr('data-gutter') != 'none') { $scrollBar = ($('#ascrail2000').length > 0 && window.innerWidth > 1000) ? -13 : 0; }
                        if ($(window).width() - $leftHeaderSize - $bodyBorderWidth <= $mainContentMaxWidth) { $windowWidth = $mainContentMaxWidth; if ($extResponsivePadding == 180) $windowWidth = $windowWidth - $scrollBar; }
                        $contentWidth = $mainContentMaxWidth;
                        $extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && window.innerWidth >= 1000) ? 180 : 0;
                        if ($leftHeaderSize > 0) $extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && window.innerWidth >= 1000) ? 120 : 0;
                    }
                    $justOutOfSight = Math.ceil((($windowWidth + $extResponsivePadding + $scrollBar - $contentWidth) / 2))
                }
                $extraSpace = 0;
                if ($(this).hasClass('carousel-wrap')) $extraSpace = 1;
                if ($(this).hasClass('portfolio-items')) $extraSpace = 5;
                $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : $(window).width() - $leftHeaderSize - $bodyBorderWidth + $extraSpace + $scrollBar;
                if ($('#boxed').length == 0 && $(this).hasClass('portfolio-items') && $(this).is('[data-gutter*="px"]') && $(this).attr('data-gutter').length > 0 && $(this).attr('data-gutter') != 'none') {
                    if ($(window).width() > 1000)
                        $carouselWidth = $(window).width() - $leftHeaderSize - $bodyBorderWidth + $scrollBar + 3
                    else
                        $carouselWidth = $(window).width() - $leftHeaderSize - $bodyBorderWidth + $scrollBar
                }
                if ($(this).parent().hasClass('default-style')) {
                    var $mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
                    if ($('#boxed').length != 0) { $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : $(window).width() - $leftHeaderSize + $extraSpace + $scrollBar; } else {
                        $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : ($(window).width() - $leftHeaderSize - $bodyBorderWidth) - (($(window).width() - $leftHeaderSize - $bodyBorderWidth) * .025) + $extraSpace + $scrollBar;
                        $windowWidth = ($(window).width() - $leftHeaderSize - $bodyBorderWidth <= $mainContentWidth) ? $mainContentWidth : ($(window).width() - $leftHeaderSize - $bodyBorderWidth) - (($(window).width() - $leftHeaderSize - $bodyBorderWidth) * .025);
                        $justOutOfSight = Math.ceil((($windowWidth + $scrollBar - $mainContentWidth) / 2))
                    }
                } else if ($(this).parent().hasClass('spaced')) {
                    var $mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
                    if ($('#boxed').length != 0) { $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) - ($(window).width() * .02) : $(window).width() + $extraSpace + $scrollBar; } else {
                        $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : ($(window).width() - $leftHeaderSize - $bodyBorderWidth) - Math.ceil(($(window).width() - $leftHeaderSize - $bodyBorderWidth) * .02) + $extraSpace + $scrollBar;
                        var $windowWidth2 = ($(window).width() - $leftHeaderSize - $bodyBorderWidth <= $mainContentWidth) ? $mainContentWidth : ($(window).width() - $leftHeaderSize - $bodyBorderWidth) - (($(window).width() - $leftHeaderSize - $bodyBorderWidth) * .02);
                        $justOutOfSight = Math.ceil((($windowWidth2 + $scrollBar - $mainContentWidth) / 2) + 2)
                    }
                }
                if (!$(this).parents('.span_9').length > 0 && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner' && $(this).parent().attr('id') != 'portfolio-extra' && !$(this).find('.carousel-wrap[data-full-width="true"]').length > 0 && !$(this).find('.portfolio-items:not(".carousel")[data-col-num="elastic"]').length > 0) { if ($('.single-product').length > 0 && $(this).parents('#tab-description').length > 0 && $(this).parents('.full-width-tabs').length == 0) { $(this).css({ 'visibility': 'visible' }); } else { if ($(this).hasClass('portfolio-items')) { $(this).css({ 'transform': 'translateX(-' + $justOutOfSight + 'px)', 'margin-left': 0, 'width': $carouselWidth, 'visibility': 'visible' }); } else { $(this).css({ 'margin-left': -$justOutOfSight, 'width': $carouselWidth, 'visibility': 'visible' }); } } } else if ($(this).parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length != 0) { $(this).css({ 'margin-left': -$justOutOfSight, 'width': $carouselWidth, 'visibility': 'visible' }); } else { $(this).css({ 'margin-left': 0, 'visibility': 'visible' }); }
            });
        }
        var $contentElementsNum = ($('#portfolio-extra').length == 0) ? $('.main-content > .row > *').length : $('.main-content > .row #portfolio-extra > *').length;

        function parallaxSrollSpeed(speedString) {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            var speed;
            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || $smoothCache == true || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                switch (speedString) {
                    case 'slow':
                        speed = 0.2;
                        break;
                    case 'medium':
                        speed = 0.4;
                        break;
                    case 'fast':
                        speed = 0.6;
                        break;
                }
            } else {
                switch (speedString) {
                    case 'slow':
                        speed = 0.6;
                        break;
                    case 'medium':
                        speed = 0.4;
                        break;
                    case 'fast':
                        speed = 0.25;
                        break;
                }
            }
            return speed;
        }

        function parallaxScrollInit() {
            parallaxRowsBGCals();
            $('.full-width-section.parallax_section, .full-width-content.parallax_section').each(function() { var $id = $(this).attr('id'); var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE "); if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || $smoothCache == true || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { if ($(this).find('[data-parallax-speed="fixed"]').length == 0) $('#' + $id + ".parallax_section").parallaxScroll("50%", parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed'))); } else if ($(this).find('[data-parallax-speed="fixed"]').length == 0) { $('#' + $id + ".parallax_section").parallaxScroll("50%", parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed'))); } });
        }
        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)) {
            parallaxScrollInit();
            $(window).load(parallaxRowsBGCals);
            setTimeout(parallaxRowsBGCals, 100);
        }

        function parallaxRowsBGCals() { $('.full-width-section.parallax_section, .full-width-content.parallax_section').each(function() { var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE "); if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || $smoothCache == true || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { $(this).find('.row-bg').css({ 'height': $(this).outerHeight(true) * 2.8, 'margin-top': '-' + ($(this).outerHeight(true) * 2.8) / 2 + 'px' }); } else { $(this).find('.row-bg').css({ 'height': Math.ceil($(window).height() * parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed'))) + $(this).outerHeight(true) }); } }); }

        function fwsClasses() {
            $('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(function() { if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') { if ($(this).parents('.wpb_row').index() == '0') { $(this).addClass('first-nectar-slider'); } } });
            if ($('#portfolio-extra').length == 0) { $contentElementsNum = ($('.main-content > .row > .wpb_row').length > 0) ? $('.main-content > .row > .wpb_row').length : $('.main-content > .row > *').length; } else { $contentElementsNum = $('.main-content > .row #portfolio-extra > *').length; }
            $('.full-width-section, .full-width-content:not(.page-submenu .full-width-content), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer, .portfolio-items[data-col-num="elastic"]').each(function() {
                if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') {
                    if ($(this).parents('.wpb_row').length > 0) {
                        if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) return false;
                        if ($(this).parents('.wpb_row').index() == '0' && $('#page-header-bg').length != 0 || $(this).parents('.wpb_row').index() == '0' && $('.parallax_slider_outer').length != 0) {} else if ($(this).parents('.wpb_row').index() == '0' && $('#page-header-bg').length == 0 && $('.page-header-no-bg').length == 0 && $('.project-title').length == 0 && $(this).parents('.wpb_row').index() == '0' && $('.parallax_slider_outer').length == 0 && $('.project-title').length == 0 && $('body[data-bg-header="true"]').length == 0) { if ($('body[data-header-resize="0"]').length == 1 && $('.single').length == 0) { $('.container-wrap').css('padding-top', '0px'); } else { $(this).css('margin-top', '-70px').addClass('first-section'); } }
                        if ($(this).parents('.wpb_row').index() == $contentElementsNum - 1 && $('#respond').length == 0) {
                            if ($(this).attr('id') != 'portfolio-filters-inline') {
                                $('.container-wrap').css('padding-bottom', '0px');
                                $('#call-to-action .triangle').remove();
                            }
                        }
                    } else {
                        if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) return false;
                        if ($(this).find('.portfolio-filters-inline').length == 0 && $(this).attr('id') != 'post-area') {
                            if ($(this).index() == '0' && $('#page-header-bg').length != 0 || $(this).index() == '0' && $('.parallax_slider_outer').length != 0) {} else if ($(this).index() == '0' && $('#page-header-bg').length == 0 && $(this).index() == '0' && $('.page-header-no-bg').length == 0 && $(this).index() == '0' && $('.parallax_slider_outer').length == 0 && !$(this).hasClass('blog_next_prev_buttons')) { if ($('body[data-header-resize="0"]').length == 1 && $('.single').length == 0) { $('.container-wrap').css('padding-top', '0px'); } else { $(this).css('margin-top', '-70px').addClass('first-section'); } }
                            if ($(this).index() == $contentElementsNum - 1 && $('#respond').length == 0) {
                                $('.container-wrap').css('padding-bottom', '0px');
                                $('.bottom_controls').css('margin-top', '0px');
                                $('#call-to-action .triangle').remove();
                            }
                        }
                    }
                }
            });
            $('.full-width-section.wpb_row, .full-width-content.wpb_row').each(function() {
                if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') {
                    if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) return false;
                    if ($(this).index() == '0' && $('#page-header-bg').length == 0 && $('.page-header-no-bg').length == 0 && $('.project-title').length == 0 && $('body.single').length == 0 && $('.parallax_slider_outer').length == 0 && $('.project-title').length == 0) {
                        $(this).addClass('first-section');
                        var $that = $(this);
                        setTimeout(function() { $that.addClass('loaded'); }, 50);
                    }
                }
            });
            $('#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap').each(function() {
                if ($(this).index() == $contentElementsNum - 1 && $('#commentform').length == 0 && $('#pagination').length == 0) {
                    if (parseInt($('.container-wrap').css('padding-bottom')) > 0) $(this).css('margin-bottom', '-40px');
                    $('#call-to-action .triangle').remove();
                }
            });
            $('.portfolio-filters').each(function() { if ($(this).index() == '0' && $('#page-header-bg').length != 0 || $(this).index() == '0' && $('.parallax_slider_outer').length != 0) { $(this).css({ 'margin-top': '-2.1em' }).addClass('first-section nder-page-header'); } else if ($(this).index() == '0' && $('#page-header-bg').length == 0 || $(this).index() == '0' && $('.parallax_slider_outer').length == 0) { $(this).css({ 'margin-top': '0px' }).addClass('first-section'); } });
            $('.portfolio-filters-inline').each(function() { if ($(this).parents('.wpb_row').length > 0) { if ($(this).parents('.wpb_row').index() == '0' && $('#page-header-bg').length != 0 || $(this).parents('.wpb_row').index() == '0' && $('.parallax_slider_outer').length != 0) { if ($('body[data-header-resize="0"]').length == 0) $(this).css({ 'margin-top': '-2.1em', 'padding-top': '19px' }).addClass('first-section nder-page-header'); } else if ($(this).parents('.wpb_row').index() == '0' && $('#page-header-bg').length == 0 || $(this).parents('.wpb_row').index() == '0' && $('.parallax_slider_outer').length == 0) { if ($('body[data-header-resize="0"]').length == 1) {} else { $(this).css({ 'margin-top': '-70px', 'padding-top': '50px' }).addClass('first-section'); } } } else { if ($(this).index() == '0' && $('#page-header-bg').length != 0 || $(this).index() == '0' && $('.parallax_slider_outer').length != 0) { $(this).css({ 'margin-top': '-2.1em', 'padding-top': '19px' }).addClass('first-section nder-page-header'); } else if ($(this).index() == '0' && $('#page-header-bg').length == 0 || $(this).index() == '0' && $('.parallax_slider_outer').length == 0) { if ($('body[data-header-resize="0"]').length == 1) { $(this).css({ 'margin-top': '-30px', 'padding-top': '50px' }).addClass('first-section'); } else { $(this).css({ 'margin-top': '-70px', 'padding-top': '50px' }).addClass('first-section'); } } } });
            $('.parallax_slider_outer').each(function() {
                if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') {
                    if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) return false;
                    if ($(this).parent().index() == '0' && $('#page-header-bg').length != 0) { $(this).addClass('first-section nder-page-header'); } else if ($(this).parent().index() == '0' && $('#page-header-bg').length == 0) { $(this).css('margin-top', '-40px').addClass('first-section'); if (!$('body').hasClass('single-post')) $('.container-wrap').css('padding-top', '0px'); }
                    if ($(this).parent().index() == $contentElementsNum - 1 && $('#post-area').length == 0) {
                        $('#call-to-action .triangle').remove();
                        $('.container-wrap').hide();
                    }
                }
            });
        }
        fullWidthSections();
        fwsClasses();

        function fullwidthImgOnlySizingInit() {
            $('.full-width-section:not(.custom-skip)').each(function() {
                var $fwsHeight = $(this).outerHeight(true);
                if ($(this).find('.span_12 *').length == 0 && $.trim($(this).find('.span_12').text()).length == 0 && $fwsHeight > 40) {
                    $(this).addClass('bg-only');
                    $(this).css({ 'height': $fwsHeight, 'padding-top': '0px', 'padding-bottom': '0px' });
                    $(this).attr('data-image-height', $fwsHeight);
                }
            });
        }

        function fullwidthImgOnlySizing() {
            $('.full-width-section.bg-only').each(function() {
                var $initialHeight = $(this).attr('data-image-height');
                if (window.innerWidth < 1000 && window.innerWidth > 690) { $(this).css('height', $initialHeight - $initialHeight * .60); } else if (window.innerWidth <= 690) { $(this).css('height', $initialHeight - $initialHeight * .78); } else if (window.innerWidth < 1300 && window.innerWidth >= 1000) { $(this).css('height', $initialHeight - $initialHeight * .33); } else { $(this).css('height', $initialHeight); }
            });
        }
        fullwidthImgOnlySizingInit();
        fullwidthImgOnlySizing();

        function fullWidthRowPaddingAdjustInit() { if ($('#boxed').length == 0) { $('.full-width-section, .full-width-content').each(function() { var $topPadding = $(this)[0].style.paddingTop; var $bottomPadding = $(this)[0].style.paddingBottom; if ($topPadding.indexOf("%") >= 0) $(this).attr('data-top-percent', $topPadding); if ($bottomPadding.indexOf("%") >= 0) $(this).attr('data-bottom-percent', $bottomPadding); }); } }

        function fullWidthRowPaddingAdjustCalc() {
            if ($('#boxed').length == 0) {
                $('.full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent],  .full-width-content[data-bottom-percent]').each(function() {
                    var $windowHeight = $(window).width();
                    var $topPadding = ($(this).attr('data-top-percent')) ? $(this).attr('data-top-percent') : 'skip';
                    var $bottomPadding = ($(this).attr('data-bottom-percent')) ? $(this).attr('data-bottom-percent') : 'skip';
                    if ($topPadding != 'skip') { $(this).css('padding-top', $windowHeight * (parseInt($topPadding) / 100)); }
                    if ($bottomPadding != 'skip') { $(this).css('padding-bottom', $windowHeight * (parseInt($bottomPadding) / 100)); }
                });
            }
        }
        fullWidthRowPaddingAdjustInit();
        fullWidthRowPaddingAdjustCalc();

        function fullWidthContentColumns() {
            $('.main-content > .row > .full-width-content, #portfolio-extra > .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, #post-area.span_12 article .content-inner > .full-width-content').each(function() {
                if ($(this).find('> .span_12 > .col').length > 1) {
                    var tallestColumn = 0;
                    var $columnInnerHeight = 0;
                    $(this).find('> .span_12 > .col').each(function() {
                        $column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
                        var $padding = parseInt($(this).css('padding-top'));
                        ($(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height() + ($padding * 2) > tallestColumn) ? tallestColumn = $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height() + ($padding * 2): tallestColumn = tallestColumn;
                    });
                    $(this).find('> .span_12 > .col').each(function() {
                        $column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
                        if ($(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper > *').length > 0) { if (!$(this).parent().parent().hasClass('vc_row-o-equal-height')) $(this).css('height', tallestColumn); } else { $(this).css('min-height', tallestColumn); if ($(this).is('[data-animation*="reveal"]')) $(this).find('.column-inner').css('min-height', tallestColumn); }
                    });
                    var $childRows = $(this).find('> .span_12 > .col .wpb_row').length;
                    if (window.innerWidth > 1000) { var $padding = parseInt($(this).find('> .span_12 > .col').css('padding-top')); } else { $(this).find('> .span_12 > .col .wpb_row .col').css('min-height', '0px'); }
                    if ($(this).hasClass('vertically-align-columns') && window.innerWidth > 1000 && !$(this).hasClass('vc_row-o-equal-height')) {
                        $(this).find('> .span_12 > .col').each(function() {
                            $column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
                            $columnInnerHeight = $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height();
                            var $marginCalc = ($(this).height() / 2) - ($columnInnerHeight / 2);
                            if ($marginCalc <= 0) $marginCalc = 0;
                            $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').css('margin-top', $marginCalc);
                            $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').css('margin-bottom', $marginCalc);
                        });
                    }
                }
            });
            $('.main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height').each(function() {
                if ($(this).find('>.span_12>.wpb_column[data-animation*="reveal"]').length > 0) {
                    var tallestColumn = 0;
                    var $columnInnerHeight = 0;
                    $(this).find('> .span_12 > .col').each(function() {
                        var $padding = parseInt($(this).find('> .column-inner-wrap > .column-inner').css('padding-top'));
                        ($(this).find('> .column-inner-wrap > .column-inner').height() + ($padding * 2) > tallestColumn) ? tallestColumn = $(this).find('> .column-inner-wrap > .column-inner').height() + ($padding * 2): tallestColumn = tallestColumn;
                    });
                    $(this).find('> .span_12 > .col').each(function() {
                        if ($(this).find('> .column-inner-wrap > .column-inner .wpb_wrapper > *').length > 0) { $(this).find('> .column-inner-wrap').css('height', tallestColumn); } else { $(this).css('min-height', tallestColumn); if ($(this).is('[data-animation*="reveal"]')) $(this).find('.column-inner').css('min-height', tallestColumn); }
                    });
                }
            });
            $('.vc_row.vc_row-o-equal-height>.span_12>.wpb_column[class*="padding-"][data-padding-pos="all"]').each(function() { $(this).css({ 'padding-top': $(this).css('padding-left'), 'padding-bottom': $(this).css('padding-left') }); });
        }
        fullWidthContentColumns();
        if ($('.owl-carousel').length > 0) owlCarouselInit();
        var $mouseParallaxScenes = [];

        function mouseParallaxInit() {
            $('.wpb_row:has(.nectar-parallax-scene)').each(function(i) {
                var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-space').height();
                if ($(this).hasClass('first-section')) {
                    $('body #header-outer[data-transparent-header="true"] .ns-loading-cover').show();
                    if ($('body #header-outer[data-transparent-header="true"]').length > 0) {
                        $(this).css('overflow', 'hidden');
                        $(this).find('.nectar-slider-loading').css({ 'top': $headerNavSpace, 'margin-top': '-1px' });
                        $(this).find('.nectar-slider-loading .loading-icon').css({ 'height': $('.first-section .nectar-parallax-scene').height() - $headerNavSpace + 'px', 'opacity': '1' });
                    }
                }
                var $strength = parseInt($(this).find('.nectar-parallax-scene').attr('data-scene-strength'));
                $mouseParallaxScenes[i] = $(this).find('.nectar-parallax-scene').parallax({ scalarX: $strength, scalarY: $strength });
                var images = $(this).find('.nectar-parallax-scene li');
                $.each(images, function() {
                    if ($(this).find('div').length > 0) {
                        var el = $(this).find('div'),
                            image = el.css('background-image').replace(/"/g, '').replace(/url\(|\)$/ig, '');
                        if (image && image !== '' && image !== 'none')
                            images = images.add($('<img>').attr('src', image));
                    }
                });
                var $that = $(this);
                images.imagesLoaded(function() { $that.find('> .nectar-slider-loading, .full-page-inner > .nectar-slider-loading').fadeOut(800, 'easeInOutExpo'); if ($that.hasClass('first-section')) { $('body #header-outer[data-transparent-header="true"] .ns-loading-cover').fadeOut(800, 'easeInOutExpo', function() { $(this).remove(); }); } });
            });
        }
        mouseParallaxInit();

        function ulChecks() { $('ul.checks li').prepend('<i class="icon-ok-sign"></i>'); }
        ulChecks();

        function colAndImgAnimations() {
            $colAndImgOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '88%';
            $colAndImgOffsetPos2 = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '70%';
            $($fullscreenSelector + 'img.img-with-animation').each(function() {
                var $that = $(this);
                var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
                var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
                            if ($that.attr('data-animation') == 'fade-in-from-left') { $that.delay($that.attr('data-delay')).transition({ 'opacity': 1, 'x': '0px' }, $animationDuration, $animationEasing); } else if ($that.attr('data-animation') == 'fade-in-from-right') { $that.delay($that.attr('data-delay')).transition({ 'opacity': 1, 'x': '0px' }, $animationDuration, $animationEasing); } else if ($that.attr('data-animation') == 'fade-in-from-bottom') { $that.delay($that.attr('data-delay')).transition({ 'opacity': 1, 'y': '0px' }, $animationDuration, $animationEasing); } else if ($that.attr('data-animation') == 'fade-in') { $that.delay($that.attr('data-delay')).transition({ 'opacity': 1 }, $animationDuration, $animationEasing); } else if ($that.attr('data-animation') == 'grow-in') { setTimeout(function() { $that.transition({ scale: 1, 'opacity': 1 }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'flip-in') { setTimeout(function() { $that.transition({ rotateY: 0, 'opacity': 1 }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'flip-in-vertical') { setTimeout(function() { $that.transition({ rotateX: 0, 'opacity': 1 }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); }
                            $that.addClass('animated-in');
                        }
                        waypoint.destroy();
                    },
                    offset: $colAndImgOffsetPos
                });
            });
            $($fullscreenSelector + '.nectar_cascading_images').each(function() {
                var $that = $(this);
                var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
                var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';
                var $animationDelay = ($(this).is('[data-animation-timing]')) ? $(this).attr('data-animation-timing') : 175;
                $animationDelay = parseInt($animationDelay);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
                            $that.find('.cascading-image').each(function(i) { var $that2 = $(this); if ($that2.attr('data-animation') == 'flip-in' || $that2.attr('data-animation') == 'flip-in-vertical') { setTimeout(function() { $that2.find('.inner-wrap').css({ 'opacity': 1, 'transform': 'rotate(0deg) translateZ(0px)' }); }, i * $animationDelay); } else { setTimeout(function() { $that2.find('.inner-wrap').css({ 'opacity': 1, 'transform': 'translateX(0px) translateY(0px) scale(1,1) translateZ(0px)' }); }, i * $animationDelay); } });
                            $that.addClass('animated-in');
                        }
                        waypoint.destroy();
                    },
                    offset: $colAndImgOffsetPos
                });
            });
            $($fullscreenSelector + '.col.has-animation:not([data-animation*="reveal"]), ' + $fullscreenSelector + '.wpb_column.has-animation:not([data-animation*="reveal"])').each(function(i) {
                var $that = $(this);
                var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
                var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';
                if ($that.is('[data-animation="flip-in-vertical"]')) { $that.parents('.col.span_12').addClass('flip-in-vertical-wrap'); }
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
                            if ($that.attr('data-animation') == 'fade-in-from-left') { $standAnimatedColTimeout[i] = setTimeout(function() { $that.transition({ 'opacity': 1, 'x': '0px' }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'fade-in-from-right') { $standAnimatedColTimeout[i] = setTimeout(function() { $that.transition({ 'opacity': 1, 'x': '0px' }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'fade-in-from-bottom') { $standAnimatedColTimeout[i] = setTimeout(function() { $that.transition({ 'opacity': 1, 'y': '0px' }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'fade-in') { $standAnimatedColTimeout[i] = setTimeout(function() { $that.transition({ 'opacity': 1 }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'grow-in') { $standAnimatedColTimeout[i] = setTimeout(function() { $that.transition({ scale: 1, 'opacity': 1 }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'flip-in') { $standAnimatedColTimeout[i] = setTimeout(function() { $that.transition({ rotateY: 0, 'opacity': 1 }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'flip-in-vertical') { $standAnimatedColTimeout[i] = setTimeout(function() { $that.transition({ rotateX: 0, y: 0, 'opacity': 1 }, $animationDuration, $animationEasing); }, $that.attr('data-delay')); }
                            if ($that.hasClass('boxed')) {
                                $that.addClass('no-pointer-events');
                                setTimeout(function() { $that.removeClass('no-pointer-events'); }, parseInt($animationDuration) + parseInt($that.attr('data-delay')) + 30);
                            }
                            $that.addClass('animated-in');
                        }
                        waypoint.destroy();
                    },
                    offset: $colAndImgOffsetPos
                });
            });
            $($fullscreenSelector + '.wpb_column.has-animation[data-animation*="reveal"]').each(function() {
                var $that = $(this);
                var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
                var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
                            if ($that.attr('data-animation') == 'reveal-from-bottom' || $that.attr('data-animation') == 'reveal-from-top') { setTimeout(function() { if ($that.hasClass('animated-in')) $that.find('.column-inner-wrap, .column-inner').transition({ 'y': 0 }, $animationDuration, $animationEasing, function() { if ($that.hasClass('animated-in')) $that.find('.column-inner-wrap, .column-inner').addClass('no-transform'); }); }, $that.attr('data-delay')); } else if ($that.attr('data-animation') == 'reveal-from-right' || $that.attr('data-animation') == 'reveal-from-left') { setTimeout(function() { if ($that.hasClass('animated-in')) $that.find('.column-inner-wrap, .column-inner').transition({ 'x': 0 }, $animationDuration, $animationEasing, function() { if ($that.hasClass('animated-in')) $that.find('.column-inner-wrap, .column-inner').addClass('no-transform'); }); }, $that.attr('data-delay')); }
                            $that.addClass('animated-in');
                        }
                        waypoint.destroy();
                    },
                    offset: $colAndImgOffsetPos2
                });
            });
        }
        setTimeout(function() {}, $animationOnScrollTimeOut);

        function cascadingImageBGSizing() {
            $('.nectar_cascading_images').each(function() {
                if ($(this).parents('.vc_row-o-equal-height').length > 0 && $(this).parents('.wpb_column').length > 0)
                    $(this).css('max-width', $(this).parents('.wpb_column').width());
                $(this).find('.bg-color').each(function() {
                    var $bgColorHeight = 0;
                    var $bgColorWidth = 0;
                    if ($(this).parent().find('.img-wrap').length == 0) {
                        $firstSibling = $(this).parents('.cascading-image').siblings('.cascading-image[data-has-img="true"]').first();
                        $firstSibling.css({ 'position': 'relative', 'visiblity': 'hidden' });
                        $bgColorHeight = $firstSibling.find('.img-wrap').height();
                        $bgColorWidth = $firstSibling.find('.img-wrap').width();
                        if ($firstSibling.index() == 0) { $firstSibling.css({ 'visiblity': 'visible' }); } else { $firstSibling.css({ 'position': 'absolute', 'visiblity': 'visible' }); }
                    } else {
                        $bgColorHeight = $(this).parent().find('.img-wrap').height();
                        $bgColorWidth = $(this).parent().find('.img-wrap').width();
                    }
                    $(this).css({ 'height': $bgColorHeight, 'width': $bgColorWidth });
                });
            });
        }
        imagesLoaded($('.nectar_cascading_images'), function(instance) { cascadingImageBGSizing(); });

        function splitLineHeadings() {
            $splitLineOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : 'bottom-in-view';
            $($fullscreenSelector + '.nectar-split-heading').each(function() {
                var $that = $(this);
                var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
                var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
                            $that.find('.heading-line').each(function(i) { $(this).find('> div').delay(i * 70).transition({ 'y': '0px' }, $animationDuration, $animationEasing); });
                            $that.addClass('animated-in');
                        }
                        waypoint.destroy();
                    },
                    offset: $splitLineOffsetPos
                });
            });
        }

        function oneFourthClasses() {
            $('.col.span_3, .vc_span3, .vc_col-sm-3').each(function() {
                var $currentDiv = $(this);
                var $nextDiv = $(this).next('div');
                if ($nextDiv.hasClass('span_3') && !$currentDiv.hasClass('one-fourths') || $nextDiv.hasClass('vc_span3') && !$currentDiv.hasClass('one-fourths') || $nextDiv.hasClass('vc_col-sm-3') && !$currentDiv.hasClass('one-fourths')) {
                    $currentDiv.addClass('one-fourths clear-both');
                    $nextDiv.addClass('one-fourths right-edge');
                }
            });
            $('.span_12 .col.span_6').each(function() { if ($(this).next('div').hasClass('span_6') && $.trim($(this).next('div').html()).length == 0) { $(this).addClass('empty-second') } });
        }
        oneFourthClasses();

        function progressBars() {
            $progressBarsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : 'bottom-in-view';
            $($fullscreenSelector + '.nectar-progress-bar').parent().each(function(i) {
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) { waypoint.destroy(); return; }
                        if ($progressBarsOffsetPos == '100%') $that.find('.nectar-progress-bar .bar-wrap').css('opacity', '1');
                        $that.find('.nectar-progress-bar').each(function(i) {
                            var percent = $(this).find('span').attr('data-width');
                            var $endNum = parseInt($(this).find('span strong i').text());
                            var $that = $(this);
                            $that.find('span').delay(i * 90).transition({ 'width': percent + '%' }, 1050, 'easeInOutQuint', function() {});
                            setTimeout(function() {
                                var countOptions = { useEasing: false };
                                var $countEle = $that.find('span strong i')[0];
                                var numAnim = new CountUp($countEle, 0, $endNum, 0, 1, countOptions);
                                numAnim.start();
                                $that.find('span strong').transition({ 'opacity': 1 }, 550, 'easeInCirc');
                            }, (i * 90));
                            if (percent == '100') { $that.find('span strong').addClass('full'); }
                        });
                        $that.addClass('completed');
                        waypoint.destroy();
                    },
                    offset: $progressBarsOffsetPos
                });
            });
        }

        function animatedColBorders() {
            $progressBarsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : '75%';
            $($fullscreenSelector + '.wpb_column[data-border-animation="true"]').each(function(i) {
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) { waypoint.destroy(); return; }
                        $borderDelay = ($that.attr('data-border-animation-delay').length > 0) ? parseInt($that.attr('data-border-animation-delay')) : 0;
                        setTimeout(function() {
                            $that.find('.border-wrap').addClass('animation');
                            $that.find('.border-wrap').addClass('completed');
                        }, $borderDelay)
                        waypoint.destroy();
                    },
                    offset: $progressBarsOffsetPos
                });
            });
        }

        function foodMenuItems() {
            $foodItemOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : '80%';
            $($fullscreenSelector + '.nectar_food_menu_item').parent().each(function(i) {
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) { waypoint.destroy(); return; }
                        $that.find('.nectar_food_menu_item').each(function(i) {
                            var $that = $(this);
                            setTimeout(function() { $that.addClass('animated-in'); }, i * 150);
                        });
                        waypoint.destroy();
                    },
                    offset: $foodItemOffsetPos
                });
            });
        }

        function dividers() {
            $dividerOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : 'bottom-in-view';
            $($fullscreenSelector + '.divider-small-border[data-animate="yes"], ' + $fullscreenSelector + '.divider-border[data-animate="yes"]').each(function(i) {
                var $lineDur = ($(this).hasClass('divider-small-border')) ? 1300 : 1500;
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) { waypoint.destroy(); return; }
                        $that.each(function(i) {
                            $(this).css({ 'transform': 'scale(0,1)', 'visibility': 'visible' });
                            var $that = $(this);
                            $that.delay($that.attr('data-animation-delay')).transition({ 'transform': 'scale(1, 1)' }, $lineDur, 'cubic-bezier(.18,1,.22,1)');
                        });
                        $that.addClass('completed');
                        waypoint.destroy();
                    },
                    offset: $dividerOffsetPos
                });
            });
        }

        function iconList() {
            $iconListOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : 'bottom-in-view';
            $($fullscreenSelector + '.nectar-icon-list[data-animate="true"]').each(function(i) {
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) { waypoint.destroy(); return; }
                        $that.each(function(i) {
                            $(this).find('.nectar-icon-list-item').each(function(i) {
                                var $thatt = $(this);
                                setTimeout(function() { $thatt.addClass('animated') }, i * 300);
                            });
                        });
                        $that.addClass('completed');
                        waypoint.destroy();
                    },
                    offset: $iconListOffsetPos
                });
            });
        }
        var nectarIconBGCss = '';
        $('.nectar-icon-list[data-icon-style="border"], .nectar_icon_wrap[data-style="border-animation"][data-color*="extra-color-gradient-"]').each(function(i) {
            if ($(this).parents('.wpb_column[data-bg-color*="#"]').length > 0 && $(this).parents('.wpb_column[data-bg-opacity="1"]').length > 0) { var $bgColorToSet = $(this).parents('.wpb_column').attr('data-bg-color'); } else if ($(this).parents('.wpb_row').length > 0 && $(this).parents('.wpb_row').find('.row-bg.using-bg-color').length > 0) { var $bgColorToSet = $(this).parents('.wpb_row').find('.row-bg.using-bg-color').css('background-color'); } else {
                if ($('#nectar_fullscreen_rows').length > 0)
                    var $bgColorToSet = $('#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap').css('background-color');
                else
                    var $bgColorToSet = $('.container-wrap').css('background-color');
            }
            if ($(this).hasClass('nectar-icon-list'))
                $(this).find('.list-icon-holder').css('background-color', $bgColorToSet);
            else {
                $(this).addClass('instance-' + i);
                nectarIconBGCss += '.nectar_icon_wrap.instance-' + i + ' .nectar_icon:before { background-color: ' + $bgColorToSet + '!important; }';
            }
        });
        if (nectarIconBGCss.length > 0) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) { style.styleSheet.cssText = nectarIconBGCss; } else { style.appendChild(document.createTextNode(nectarIconBGCss)); }
            head.appendChild(style);
        }
        $('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(function() {
            $(this).find('.nectar_hotspot_wrap').each(function(i) {
                var $that = $(this);
                setTimeout(function() { $that.find('.nectar_hotspot').addClass('pulse'); }, i * 300);
            });
        });

        function hotSpotHoverBind() {
            var hotSpotHoverTimeout = [];
            $('.nectar_image_with_hotspots:not([data-tooltip-func="click"]) .nectar_hotspot').each(function(i) {
                hotSpotHoverTimeout[i] = '';
                $(this).on('mouseover', function() {
                    clearTimeout(hotSpotHoverTimeout[i]);
                    $(this).parent().css({ 'z-index': '400', 'height': 'auto', 'width': 'auto' });
                });
                $(this).on('mouseleave', function() {
                    var $that = $(this);
                    $that.parent().css({ 'z-index': 'auto' });
                    hotSpotHoverTimeout[i] = setTimeout(function() { $that.parent().css({ 'height': '30px', 'width': '30px' }); }, 300);
                });
            });
        }
        hotSpotHoverBind();

        function responsiveTooltips() {
            $('.nectar_image_with_hotspots').each(function() {
                $(this).find('.nectar_hotspot_wrap').each(function(i) {
                    if ($(window).width() > 690) {
                        if ($(this).parents('.nectar_image_with_hotspots[data-tooltip-func="hover"]').length > 0) {
                            $(this).find('.nectar_hotspot').removeClass('click');
                            $(this).find('.nttip').removeClass('open');
                        }
                        $(this).find('.nttip .inner a.tipclose').remove();
                        $('.nttip').css('height', 'auto');
                        $(this).css({ 'width': 'auto', 'height': 'auto' });
                        $(this).find('.nttip').removeClass('force-right').removeClass('force-left').removeClass('force-top').css('width', 'auto');
                        var $tipOffset = $(this).find('.nttip').offset();
                        if ($tipOffset.left > $(this).parents('.nectar_image_with_hotspots').width() - 200)
                            $(this).find('.nttip').css('width', '250px');
                        else
                            $(this).find('.nttip').css('width', 'auto');
                        if ($tipOffset.left < 0)
                            $(this).find('.nttip').addClass('force-right');
                        else if ($tipOffset.left + $(this).find('.nttip').outerWidth(true) > $(window).width())
                            $(this).find('.nttip').addClass('force-left').css('width', '250px');
                        else if ($tipOffset.top + $(this).find('.nttip').height() + 35 > $(window).height() && $('#nectar_fullscreen_rows').length > 0)
                            $(this).find('.nttip').addClass('force-top');
                        if ($(this).find('> .open').length == 0)
                            $(this).css({ 'width': '30px', 'height': '30px' });
                    } else {
                        $(this).find('.nttip').removeClass('force-left').removeClass('force-right').removeClass('force-top');
                        $(this).find('.nectar_hotspot').addClass('click');
                        if ($(this).find('.nttip a.tipclose').length == 0)
                            $(this).find('.nttip .inner').append('<a href="#" class="tipclose"><span></span></a>');
                        $('.nttip').css('height', $(window).height());
                    }
                });
            });
        }
        responsiveTooltips();

        function imageWithHotspotClickEvents() {
            $('body').on('click', '.nectar_hotspot.click', function() {
                $(this).parents('.nectar_image_with_hotspots').find('.nttip').removeClass('open');
                $(this).parent().find('.nttip').addClass('open');
                $(this).parents('.nectar_image_with_hotspots').find('.nectar_hotspot').removeClass('open');
                $(this).parent().find('.nectar_hotspot').addClass('open');
                if ($(window).width() > 690) {
                    $(this).parent().css({ 'z-index': '10', 'height': 'auto', 'width': 'auto' });
                    var $that = $(this);
                    setTimeout(function() {
                        $that.parents('.nectar_image_with_hotspots').find('.nectar_hotspot_wrap').each(function() {
                            if ($(this).find('> .open').length == 0)
                                $(this).css({ 'height': '30px', 'width': '30px', 'z-index': 'auto' });
                        });
                    }, 300);
                }
                if ($(window).width() <= 690) $(this).parents('.wpb_row, [class*="vc_col-"]').css('z-index', '200');
                return false;
            });
            $('body').on('click', '.nectar_hotspot.open', function() {
                $(this).parent().find('.nttip').removeClass('open');
                $(this).parent().find('.nectar_hotspot').removeClass('open');
                $(this).parents('.wpb_row').css('z-index', 'auto');
                return false;
            });
            $('body').on('click', '.nttip.open', function() {
                $(this).parents('.nectar_image_with_hotspots').find('.nttip').removeClass('open');
                $(this).parents('.wpb_row').css('z-index', 'auto');
                return false;
            });
        }
        imageWithHotspotClickEvents();

        function imageWithHotspots() {
            $imageWithHotspotsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : '50%';
            $($fullscreenSelector + '.nectar_image_with_hotspots[data-animation="true"]').each(function(i) {
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) { waypoint.destroy(); return; }
                        $that.addClass('completed');
                        $that.find('.nectar_hotspot_wrap').each(function(i) {
                            var $that2 = $(this);
                            var $extrai = ($that2.parents('.col.has-animation').length > 0) ? 1 : 0;
                            setTimeout(function() { $that2.addClass('animated-in'); }, 175 * (i + $extrai));
                        });
                        waypoint.destroy();
                    },
                    offset: $imageWithHotspotsOffsetPos
                });
            });
        }

        function animated_titles() {
            $animatedTitlesOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : 'bottom-in-view';
            $($fullscreenSelector + '.nectar-animated-title').each(function(i) {
                var $that = $(this);
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) { waypoint.destroy(); return; }
                        $that.addClass('completed');
                        waypoint.destroy();
                    },
                    offset: $animatedTitlesOffsetPos
                });
            });
        }
        var $tallestCol;

        function pricingTableHeight() {
            $('.pricing-table[data-style="default"]').each(function() {
                $tallestCol = 0;
                $(this).find('> div ul').each(function() {
                    ($(this).height() > $tallestCol) ? $tallestCol = $(this).height(): $tallestCol = $tallestCol;
                });
                if ($tallestCol == 0) $tallestCol = 'auto';
                $(this).find('> div ul').css('height', $tallestCol);
            });
        }
        pricingTableHeight();
        $('body').on('click', '.testimonial_slider:not([data-style*="multiple_visible"]):not([data-style="minimal"]) .controls li', function() {
            if ($(this).find('span').hasClass('active')) return false;
            var $index = $(this).index();
            var currentHeight = $(this).parents('.testimonial_slider').find('.slides blockquote').eq($index).height();
            $(this).parents('.testimonial_slider').find('li span').removeClass('active');
            $(this).find('span').addClass('active');
            $(this).parents('.testimonial_slider').find('.slides blockquote').addClass('no-trans');
            $(this).parents('.testimonial_slider').find('.slides blockquote').css({ 'opacity': '0', 'transform': 'translateX(-25px)', 'z-index': '1' });
            $(this).parents('.testimonial_slider').find('.slides blockquote').eq($index).removeClass('no-trans').css({ 'opacity': '1', 'transform': 'translateX(0px)' }).css('z-index', '20');
            $(this).parents('.testimonial_slider:not(.disable-height-animation)').find('.slides').stop(true, true).animate({ 'height': currentHeight + 40 + 'px' }, 450, 'easeOutCubic');
            resizeVideoToCover();
        });
        $('body').on('click', '.testimonial_slider[data-style="minimal"] .testimonial-next-prev a', function() {
            var $index = $(this).parents('.testimonial_slider').find('.slides blockquote.active').index();
            var $actualIndex = $index;
            $(this).parents('.testimonial_slider').find('.slides blockquote').addClass('no-trans');
            $(this).parents('.testimonial_slider').find('.slides blockquote').css({ 'opacity': '0', 'transform': 'translateX(-25px)', 'z-index': '1' });
            $(this).parents('.testimonial_slider').find('.slides blockquote').eq($index).removeClass('active');
            if ($(this).hasClass('next')) {
                if ($index + 1 >= $(this).parents('.testimonial_slider').find('.slides blockquote').length) { $actualIndex = 0; } else { $actualIndex = $index + 1; }
                var currentHeight = $(this).parents('.testimonial_slider').find('.slides blockquote').eq($actualIndex).height();
                $(this).parents('.testimonial_slider').find('.slides blockquote').eq($actualIndex).addClass('active').removeClass('no-trans').css({ 'opacity': '1', 'transform': 'translateX(0px)' }).css('z-index', '20');
                $(this).parents('.testimonial_slider').find('.control-wrap ul').css({ 'transform': 'translateX(-' + (20 * $actualIndex) + 'px)' });
            } else {
                if ($index - 1 == -1) { $actualIndex = $(this).parents('.testimonial_slider').find('.slides blockquote').length - 1; } else { $actualIndex = $index - 1; }
                var currentHeight = $(this).parents('.testimonial_slider').find('.slides blockquote').eq($index - 1).height();
                $(this).parents('.testimonial_slider').find('.slides blockquote').eq($index - 1).addClass('active').removeClass('no-trans').css({ 'opacity': '1', 'transform': 'translateX(0px)' }).css('z-index', '20');
                $(this).parents('.testimonial_slider').find('.control-wrap ul').css({ 'transform': 'translateX(-' + (20 * $actualIndex) + 'px)' });
            }
            $(this).parents('.testimonial_slider:not(.disable-height-animation)').find('.slides').stop(true, true).animate({ 'height': currentHeight + 40 + 'px' }, 450, 'easeOutCubic');
            resizeVideoToCover();
            return false;
        });
        var $tallestQuote;

        function createTestimonialControls() {
            $('.testimonial_slider:not([data-style*="multiple_visible"])').animate({ 'opacity': '1' }, 800);
            $('.testimonial_slider:not([data-style*="multiple_visible"])').each(function(i) {
                if ($(this).find('blockquote').length > 1 && $(this).find('.controls').length == 0) {
                    $(this).append('<div class="controls"><ul></ul></div>');
                    var slideNum = $(this).find('blockquote').length;
                    var $that = $(this);
                    for (var i = 0; i < slideNum; i++) { if (!$(this).is('[data-style="minimal"]')) { $that.find('.controls ul').append('<li><span class="pagination-switch"></span></li>'); } else { $that.find('.controls ul').append('<li>' + (i + 1) + '</li>'); } }
                    if ($(this).is('[data-style="minimal"]')) {
                        $(this).append('<div class="testimonial-next-prev"><a href="#" class="prev fa fa-angle-left"></a><a href="#" class="next fa fa-angle-right"></a></div>');
                        $(this).find('.slides blockquote:first-child').addClass('active').css({ 'opacity': '1', 'transform': 'translateX(0px)' }).css('z-index', '20');
                        if (!$(this).hasClass('disable-height-animation')) { $(this).find('.slides').css({ 'height': $(this).find('.slides blockquote:first-child').height() + 40 + 'px' }); }
                        if ($(this).attr('data-autorotate').length > 0) { slide_interval = (parseInt($(this).attr('data-autorotate')) < 100) ? 4000 : parseInt($(this).attr('data-autorotate')); var $that = $(this); var $rotate = setInterval(function() { testimonialRotate($that) }, slide_interval); }
                        $(this).find('.testimonial-next-prev a').click(function(e) { if (typeof e.clientX != 'undefined') clearInterval($rotate); });
                        $(this).find('.controls ul').wrap('<div class="control-wrap" />');
                        $(this).find('.controls ul').css('width', (($(this).find('.controls ul li').length * 20) + 1) + 'px');
                        $(this).find('.controls').append('<span class="out-of">/</span><span class="total">' + $(this).find('blockquote').length + '</span>');
                        $(this).swipe({
                            swipeLeft: function(e) {
                                $(this).find('.testimonial-next-prev .next').trigger('click');
                                e.stopImmediatePropagation();
                                clearInterval($rotate);
                                return false;
                            },
                            swipeRight: function(e) {
                                $(this).find('.testimonial-next-prev .prev').trigger('click');
                                e.stopImmediatePropagation();
                                clearInterval($rotate);
                                return false;
                            }
                        });
                    }
                    if (!$(this).is('[data-style="minimal"]')) {
                        $(this).find('.controls ul li').first().click();
                        if ($(this).attr('data-autorotate').length > 0) { slide_interval = (parseInt($(this).attr('data-autorotate')) < 100) ? 4000 : parseInt($(this).attr('data-autorotate')); var $that = $(this); var $rotate = setInterval(function() { testimonialRotate($that) }, slide_interval); }
                        $(this).find('.controls li').click(function(e) { if (typeof e.clientX != 'undefined') clearInterval($rotate); });
                        $(this).swipe({
                            swipeLeft: function(e) {
                                $(this).find('.controls ul li span.active').parent().next('li').find('span').trigger('click');
                                e.stopImmediatePropagation();
                                clearInterval($rotate);
                                return false;
                            },
                            swipeRight: function(e) {
                                $(this).find('.controls ul li span.active').parent().prev('li').find('span').trigger('click');
                                e.stopImmediatePropagation();
                                clearInterval($rotate);
                                return false;
                            }
                        });
                    }
                } else if ($(this).find('.controls').length == 0) {
                    var currentHeight = $(this).find('.slides blockquote').height();
                    $(this).find('.slides blockquote').css({ 'opacity': '0', 'transform': 'translateX(-25px)', 'z-index': '1' });
                    $(this).find('.slides blockquote').css({ 'opacity': '1', 'transform': 'translateX(0px)' }).css('z-index', '20');
                    $(this).find('.slides').stop(true, true).animate({ 'height': currentHeight + 20 + 'px' }, 450, 'easeOutCubic');
                }
            });
            $('.testimonial_slider[data-style*="multiple_visible"] .slides').each(function() {
                var $that = $(this);
                var $element = $that;
                var $autoplay = ($that.parents('.testimonial_slider').attr('data-autorotate').length > 1 && parseInt($that.parents('.testimonial_slider').attr('data-autorotate')) > 100) ? parseInt($that.parents('.testimonial_slider').attr('data-autorotate')) : 4000;
                if ($that.find('img').length == 0) $element = $('body');
                if ($(this).parents('.testimonial_slider').attr('data-style') != 'multiple_visible_minimal') { $(this).find('blockquote').each(function() { $(this).find('.image-icon').insertAfter($(this).find('p')); }); } else { if ($(this).find('blockquote').length > 4) { $(this).parents('.testimonial_slider').addClass('has-alf'); } }
                var $testimonialGroupCells = ($(this).parents('.testimonial_slider').attr('data-style') == 'multiple_visible_minimal') ? true : false;
                imagesLoaded($element, function(instance) {
                    $that.flickity({ contain: true, draggable: true, groupCells: $testimonialGroupCells, lazyLoad: false, imagesLoaded: true, percentPosition: true, prevNextButtons: false, pageDots: true, resize: true, setGallerySize: true, wrapAround: true, autoPlay: $autoplay, accessibility: false });
                    $that.parents('.testimonial_slider').css('opacity', '1');
                });
            });
        }
        createTestimonialControls();

        function testimonialRotate(slider) { var $testimonialLength = slider.find('li').length; var $currentTestimonial = slider.find('.pagination-switch.active').parent().index(); if (slider.parents('.toggle').length > 0 && slider.parents('.toggle').hasClass('open')) { if (!slider.is('[data-style="minimal"]')) { if ($currentTestimonial + 1 == $testimonialLength) { slider.find('ul li:first-child').click(); } else { slider.find('.pagination-switch.active').parent().next('li').click(); } } else { slider.find('.testimonial-next-prev .next').click(); } } else { if (!slider.is('[data-style="minimal"]')) { if ($currentTestimonial + 1 == $testimonialLength) { slider.find('ul li:first-child').click(); } else { slider.find('.pagination-switch.active').parent().next('li').click(); } } else { slider.find('.testimonial-next-prev .next').click(); } } }

        function testimonialHeightResize() {
            $('.testimonial_slider:not(.disable-height-animation):not([data-style*="multiple_visible"])').each(function() {
                var $index = $(this).find('.controls ul li span.active').parent().index();
                var currentHeight = $(this).find('.slides blockquote').eq($index).height();
                $(this).find('.slides').stop(true, true).css({ 'height': currentHeight + 40 + 'px' });
            });
        }

        function testimonialSliderHeight() {
            $('.testimonial_slider.disable-height-animation:not([data-style*="multiple_visible"])').each(function() {
                $tallestQuote = 0;
                $(this).find('blockquote').each(function() {
                    ($(this).height() > $tallestQuote) ? $tallestQuote = $(this).height(): $tallestQuote = $tallestQuote;
                });
                if ($tallestQuote == 0) $tallestQuote = 100;
                $(this).find('.slides').css('height', $tallestQuote + 40 + 'px');
                $(this).animate({ 'opacity': '1' });
                fullWidthContentColumns();
            });
        }

        function testimonialSliderHeightMinimalMult() {
            $('.testimonial_slider[data-style="multiple_visible_minimal"]').each(function() {
                $tallestQuote = 0;
                $(this).find('blockquote > .inner p').css('height', 'auto');
                $(this).find('blockquote > .inner p').each(function() {
                    ($(this).height() > $tallestQuote) ? $tallestQuote = $(this).height(): $tallestQuote = $tallestQuote;
                });
                if ($tallestQuote == 0) $tallestQuote = 200;
                $(this).find('blockquote > .inner p').css('height', $tallestQuote + 'px');
            });
        }
        if ($('.testimonial_slider.disable-height-animation:not([data-style*="multiple_visible"])').length > 0) {
            testimonialSliderHeight();
            setTimeout(testimonialSliderHeight, 500);
        }
        if ($('.testimonial_slider[data-style="multiple_visible_minimal"]').length > 0) {
            testimonialSliderHeightMinimalMult();
            setTimeout(testimonialSliderHeightMinimalMult, 500);
        }

        function responsiveVideoIframesInit() {
            $('iframe').each(function() {
                if (typeof $(this).attr('src') != 'undefined' && !$(this).parent().hasClass('iframe-embed') && $(this).parents('.ult_modal').length == 0 && $(this).parents('.ls-slide').length == 0 && $(this).parents('.esg-entry-media').length == 0) {
                    if ($(this).attr('src').toLowerCase().indexOf("youtube") >= 0 || $(this).attr('src').toLowerCase().indexOf("vimeo") >= 0 || $(this).attr('src').toLowerCase().indexOf("twitch.tv") >= 0 || $(this).attr('src').toLowerCase().indexOf("kickstarter") >= 0 || $(this).attr('src').toLowerCase().indexOf("embed-ssl.ted") >= 0 || $(this).attr('src').toLowerCase().indexOf("dailymotion") >= 0) {
                        $(this).wrap('<div class="iframe-embed"/>');
                        $(this).attr('data-aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
                        if ($(this).attr('src').indexOf('wmode=transparent') == -1) { if ($(this).attr('src').indexOf('?') == -1) { $(this).attr('src', $(this).attr('src') + '?wmode=transparent'); } else { $(this).attr('src', $(this).attr('src') + '&wmode=transparent'); } }
                    }
                } else {}
            });
        }

        function responsiveVideoIframes() {
            $('iframe[data-aspectRatio]').each(function() {
                var newWidth = $(this).parent().width();
                var $el = $(this);
                if ($(this).parents('.swiper-slide').length > 0) { if ($(this).is(':visible')) $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio')); } else { $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio')); }
            });
        }

        function videoshortcodeSize() {
            $('.wp-video').each(function() {
                $(this).attr('data-aspectRatio', parseInt($(this).find('.mejs-overlay').height()) / parseInt($(this).find('.wp-video-shortcode').css('width')));
                var newWidth = $(this).width();
                var $el = $(this).find('.wp-video-shortcode');
                $(this).width(newWidth).height(newWidth * $(this).attr('data-aspectRatio'));
            });
        }
        responsiveVideoIframesInit();
        responsiveVideoIframes();
        videoshortcodeSize();
        $('.video-wrap iframe').unwrap();
        $('#sidebar iframe[src]').unwrap();
        $('video:not(.slider-video)').attr('width', '100%');
        $('video:not(.slider-video)').attr('height', '100%');
        $('audio').attr('width', '100%');
        $('audio').attr('height', '100%');
        $('audio').css('visibility', 'visible');
        if ($('body').hasClass('mobile')) { $('video').css('visibility', 'hidden'); } else { $('video').css('visibility', 'visible'); }
        $(window).load(function() {
            $('video').css('visibility', 'visible');
            showLateIframes();
            videoshortcodeSize();
        });
        $('.wp-video').each(function() {
            video = $(this).find('video').get(0);
            video.addEventListener('loadeddata', function() {
                videoshortcodeSize();
                $(window).trigger('resize');
            }, false);
        });
        $('.main-content iframe[src]').each(function() {
            $(this).attr('src', $(this).attr('src'));
            $(this).css({ 'opacity': '1', 'visibility': 'visible' });
        });
        showLateIframes();

        function showLateIframes() {
            $('iframe[src]').css('opacity', '1');
            setTimeout(function() { $('iframe[src]').css('opacity', '1'); }, 100);
            setTimeout(function() { $('iframe[src]').css('opacity', '1'); }, 500);
            setTimeout(function() { $('iframe[src]').css('opacity', '1'); }, 1000);
            setTimeout(function() { $('iframe[src]').css('opacity', '1'); }, 1500);
            setTimeout(function() { $('iframe[src]').css('opacity', '1'); }, 2500);
        }
        $('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function(i) { $(this).css('z-index', 100 + i); });
        var min_w = 1200;
        var vid_w_orig;
        var vid_h_orig;
        vid_w_orig = 1280;
        vid_h_orig = 720;

        function resizeVideoToCover() {
            $('.nectar-video-wrap').each(function(i) {
                if ($(this).find('video').length == 0) return;
                if ($(this).parents('#page-header-bg').length > 0) { if ($('.container-wrap.auto-height').length > 0) return false; var $containerHeight = $(this).parents('#page-header-bg').outerHeight(); var $containerWidth = $(this).parents('#page-header-bg').outerWidth(); } else { var $containerHeight = $(this).parents('.wpb_row').outerHeight(); var $containerWidth = $(this).parents('.wpb_row').outerWidth(); }
                $(this).width($containerWidth);
                $(this).height($containerHeight);
                var scale_h = $containerWidth / vid_w_orig;
                var scale_v = ($containerHeight - $containerHeight) / vid_h_orig;
                var scale = scale_h > scale_v ? scale_h : scale_v;
                min_w = 1280 / 720 * ($containerHeight + 40);
                if (scale * vid_w_orig < min_w) { scale = min_w / vid_w_orig; }
                $(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * vid_w_orig + 0));
                $(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * vid_h_orig + 0));
                $(this).scrollLeft(($(this).find('video').width() - $containerWidth) / 2);
                $(this).scrollTop(($(this).find('video').height() - ($containerHeight)) / 2);
                $(this).find('.mejs-overlay, .mejs-poster').scrollTop(($(this).find('video').height() - ($containerHeight)) / 2);
                if ($(this).attr('data-bg-alignment') == 'center bottom' || $(this).attr('data-bg-alignment') == 'bottom') { $(this).scrollTop(($(this).find('video').height() - ($containerHeight + 6))); } else if ($(this).attr('data-bg-alignment') == 'center top' || $(this).attr('data-bg-alignment') == 'top') { $(this).scrollTop(0); }
            });
        }

        function videoBGInit() {
            setTimeout(function() {
                resizeVideoToCover();
                $('.video-color-overlay').each(function() { $(this).css('background-color', $(this).attr('data-color')); });
                $('.nectar-video-wrap').each(function(i) {
                    if ($(this).find('video').length == 0) return;
                    var $headerVideo = ($(this).parents('#page-header-bg').length > 0) ? true : false;
                    var $that = $(this);
                    var videoReady = setInterval(function() {
                        if ($that.find('video').get(0).readyState > 3) {
                            $that.transition({ 'opacity': '1' }, 400);
                            $that.find('video').transition({ 'opacity': '1' }, 400);
                            $that.parent().find('.video-color-overlay').transition({ 'opacity': '0.7' }, 400);
                            if ($headerVideo == true) { pageHeaderTextEffect(); }
                            $('#ajax-loading-screen').addClass('loaded');
                            setTimeout(function() { $('#ajax-loading-screen').addClass('hidden'); }, 1000);
                            clearInterval(videoReady);
                        }
                    }, 60);
                });
            }, 300);
            if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
                $('.wpb_row .mobile-video-image, #page-header-wrap .mobile-video-image, .fullscreen-header .mobile-video-image').show();
                $('.nectar-video-wrap').remove();
            }
            if (navigator.userAgent.indexOf('Chrome') > 0 && !/Edge\/12./i.test(navigator.userAgent) && !/Edge\/\d./i.test(navigator.userAgent)) {
                $('.nectar-video-wrap').each(function(i) {
                    if (jQuery(this).find('video source[type="video/webm"]').length > 0) {
                        var webmSource = jQuery(this).find('video source[type="video/webm"]').attr('src') + "?id=" + Math.ceil(Math.random() * 10000);
                        var firstVideo = jQuery(this).find('video').get(0);
                        firstVideo.src = webmSource;
                        firstVideo.load();
                    }
                });
            }
            jQuery(".vc_row").each(function() {
                var youtubeUrl, youtubeId, $row = jQuery(this);
                $row.find('.nectar-youtube-bg').length > 0 ? (youtubeUrl = $row.find('.nectar-youtube-bg span').text(), youtubeId = nectarExtractYoutubeId(youtubeUrl), youtubeId && ($row.find(".vc_video-bg").remove(), nectarInsertYoutubeVideoAsBackground($row.find('.nectar-youtube-bg'), youtubeId))) : $row.find(".nectar-youtube-bg").remove()
                $row.find('.nectar-youtube-bg span').remove();
                $row.find('.nectar-video-wrap, .nectar-youtube-bg').css({ 'opacity': '1', 'width': '100%', 'height': '100%' });
                $row.find('.video-color-overlay').transition({ 'opacity': '0.7' }, 400);
            });

            function nectarInsertYoutubeVideoAsBackground($element, youtubeId, counter) {
                if ("undefined" == typeof YT.Player) return counter = "undefined" == typeof counter ? 0 : counter, counter > 100 ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() { nectarInsertYoutubeVideoAsBackground($element, youtubeId, counter++) }, 100);
                var $container = $element.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");
                new YT.Player($container[0], { width: "100%", height: "100%", videoId: youtubeId, playerVars: { playlist: youtubeId, iv_load_policy: 3, enablejsapi: 1, disablekb: 1, autoplay: 1, controls: 0, showinfo: 0, rel: 0, loop: 1 }, events: { onReady: function(event) { event.target.mute().setLoop(!0); } } }), nectarResizeVideoBackground($element), jQuery(window).bind("resize", function() { nectarResizeVideoBackground($element) })
            }

            function nectarResizeVideoBackground($element) {
                var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                    containerH = $element.innerHeight(),
                    ratio1 = 16,
                    ratio2 = 9;
                ratio1 / ratio2 > containerW / containerH ? (iframeW = containerH * (ratio1 / ratio2), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (ratio2 / ratio1), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".vc_video-bg iframe").css({ maxWidth: "1000%", marginLeft: marginLeft, marginTop: marginTop, width: iframeW, height: iframeH })
            }

            function nectarExtractYoutubeId(url) { if ("undefined" == typeof url) return !1; var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/); return null !== id ? id[1] : !1 }
        }
        videoBGInit();
        $mobileNavSelector = ($('.off-canvas-menu-container.mobile-only').length > 0) ? '.off-canvas-menu-container.mobile-only ' : '#mobile-menu .container ';
        $($mobileNavSelector + '.megamenu > ul > li > a').each(function() {
            if ($(this).text() == '–') {
                $navLIs = $(this).parent().find('> ul > li').clone();
                $(this).parent().find('ul').remove();
                $(this).parent().parent().append($navLIs);
                $(this).parent().remove();
            }
        });
        var $bodyBorderHeaderColorMatch = ($('.body-border-top').css('background-color') == '#ffffff' && $('body').attr('data-header-color') == 'light' || $('.body-border-top').css('background-color') == $('#header-outer').attr('data-user-set-bg')) ? true : false;
        var $bodyBorderWidth = ($('.body-border-right').length > 0) ? $('.body-border-right').width() : 0;
        var $resetHeader;
        if ($('#slide-out-widget-area.slide-out-from-right-hover').length > 0) {
            if ($('#ajax-content-wrap > .slide-out-widget-area-toggle').length == 0) { $('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" class="closed"> <span> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter('#slide-out-widget-area'); if ($('#header-outer[data-has-menu="true"]').length > 0 || $('body[data-header-search="true"]').length > 0) $('#ajax-content-wrap > .slide-out-widget-area-toggle').addClass('small'); }

            function calculateHoverNavMinHeight() {
                $widgetHeights = 0;
                $('#slide-out-widget-area > .widget').each(function() { $widgetHeights += $(this).height(); });
                $menuHeight = (($('#slide-out-widget-area').height() - 25 - $('.bottom-meta-wrap').outerHeight(true) - $widgetHeights) > $('#slide-out-widget-area .off-canvas-menu-container').height()) ? $('#slide-out-widget-area').height() - 25 - $('.bottom-meta-wrap').outerHeight(true) - $widgetHeights : $('#slide-out-widget-area .off-canvas-menu-container').height();
                $('#slide-out-widget-area .inner').css({ 'height': 'auto', 'min-height': $menuHeight });
                $('#slide-out-widget-area.slide-out-from-right-hover > .inner .off-canvas-menu-container').transition({ y: '-' + ($('#slide-out-widget-area.slide-out-from-right-hover > .inner .off-canvas-menu-container').height() / 2) + 'px' }, 0);
            }

            function openRightHoverNav() {
                calculateHoverNavMinHeight();
                if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && $('.slide-out-widget-area-toggle  .unhidden-line').length > 0) { mobileCloseNavCheck(); return; }
                $('#slide-out-widget-area').css({ 'transform': 'translate3d(0,0,0)' }).addClass('open');
                if ($('header#top .container .span_9 > .slide-out-widget-area-toggle').length > 0) {
                    var adminBarHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0;
                    if ($('body.mobile').length > 0) { $('.slide-out-hover-icon-effect').css({ 'top': adminBarHeight + $('header#top .span_9 > .slide-out-widget-area-toggle').position().top + parseInt($('#header-outer').css('padding-top')) - 5, 'right': parseInt($('#header-outer header > .container').css('padding-right')) + 1 }); } else {
                        if ($('body.ascend').length > 0) {
                            var $extraCushion = ($('#header-outer[data-has-menu="false"]').length > 0) ? 2 : 1;
                            $('.slide-out-hover-icon-effect').css({ 'top': adminBarHeight + parseInt($('header#top nav >ul .slide-out-widget-area-toggle a').css('padding-top')), 'right': parseInt($('#header-outer header >.container').css('padding-right')) + $extraCushion });
                        } else { $('.slide-out-hover-icon-effect').css({ 'top': adminBarHeight + parseInt($('header#top nav >ul .slide-out-widget-area-toggle').css('padding-top')) + parseInt($('#header-outer').css('padding-top')), 'right': parseInt($('#header-outer header >.container').css('padding-right')) + 1 + parseInt($('header#top nav ul .slide-out-widget-area-toggle').css('margin-right')) }); }
                    }
                }
                $('.slide-out-hover-icon-effect .lines-button').removeClass('no-delay').addClass('unhidden-line');
                if ($('#header-outer[data-permanent-transparent="1"]').length == 0 && $('#nectar_fullscreen_rows').length == 0) {
                    if (!($(window).scrollTop() == 0 && $('#header-outer.transparent').length > 0)) {
                        if ($('body.mobile').length == 0) {
                            $('#header-outer').attr('data-transparent', 'true').addClass('no-bg-color').addClass('slide-out-hover');
                            $('#header-outer header, #header-outer > .cart-outer').addClass('all-hidden');
                        }
                    }
                    var headerResize = $('#header-outer').attr('data-header-resize');
                    if (headerResize == 1) {
                        $(window).off('scroll', bigNav);
                        $(window).off('scroll', smallNav);
                    } else {
                        $(window).off('scroll', opaqueCheck);
                        $(window).off('scroll', transparentCheck);
                    }
                }
                if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/))
                    $(window).on('mousemove.rightOffsetCheck', closeNavCheck);
            }

            function closeNavCheck(e) {
                var $windowWidth = $(window).width();
                if (e.clientX < $windowWidth - 340 - $bodyBorderWidth) {
                    $(window).off('mousemove.rightOffsetCheck', closeNavCheck);
                    $('#slide-out-widget-area').css({ 'transform': 'translate3d(341px,0,0)' }).removeClass('open');
                    $('#header-outer').removeClass('style-slide-out-from-right');
                    $('.slide-out-hover-icon-effect .lines-button').removeClass('unhidden-line').addClass('no-delay');
                    if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
                        if (!($(window).scrollTop() == 0 && $('#header-outer.transparent').length > 0)) {
                            if ($('body.mobile').length == 0) {
                                $('#header-outer').removeClass('no-bg-color');
                                $('#header-outer header, #header-outer > .cart-outer').removeClass('all-hidden');
                            }
                        }
                        var headerResize = $('#header-outer').attr('data-header-resize');
                        if (headerResize == 1) {
                            $(window).off('scroll.headerResizeEffect');
                            if ($(window).scrollTop() == 0) { $(window).on('scroll.headerResizeEffect', smallNav); if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $('.body-border-top').length > 0 && $bodyBorderHeaderColorMatch == true && $('#header-outer.pseudo-data-transparent').length > 0) { $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({ 'padding': '0' }, { queue: false, duration: 250, easing: 'easeOutCubic' }); } } else { $(window).on('scroll.headerResizeEffect', bigNav); }
                        } else {
                            $(window).off('scroll.headerResizeEffectOpaque');
                            $(window).on('scroll.headerResizeEffectOpaque', opaqueCheck);
                        }
                    }
                }
            }

            function mobileCloseNavCheck(e) {
                $('#slide-out-widget-area').css({ 'transform': 'translate3d(341px,0,0)' }).removeClass('open');
                $('#header-outer').removeClass('style-slide-out-from-right');
                $('.slide-out-hover-icon-effect .lines-button').removeClass('unhidden-line').addClass('no-delay');
                if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
                    $('#header-outer').removeClass('no-bg-color');
                    $('#header-outer header').removeClass('all-hidden');
                }
            }
            if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/))
                $('body').on('mouseenter', '#header-outer .slide-out-widget-area-toggle:not(.std-menu) a', openRightHoverNav);
            else
                $('body').on('click', '.slide-out-widget-area-toggle:not(.std-menu) a', openRightHoverNav);
            $(window).on('smartresize', calculateHoverNavMinHeight);
        }
        $('body').on('click', '.slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating)', function() {
            if (animating == 'true' || $('.slide-out-from-right-hover').length > 0) return false;
            var $that = $(this);
            $('#header-outer').removeClass('no-transition');
            if ($('#slide-out-widget-area').hasClass('slide-out-from-right')) {
                $slideOutAmount = ($('.body-border-top').length > 0 && $('body.mobile').length == 0) ? $('.body-border-top').height() : 0;
                $('#slide-out-widget-area .inner').css({ 'height': 'auto', 'min-height': $('#slide-out-widget-area').height() - 25 - $('.bottom-meta-wrap').height() });
                if ($('#boxed').length == 0) {
                    $('.container-wrap, .home-wrap, #header-secondary-outer, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, .parallax_slider_outer .swiper-slide .image-bg, .parallax_slider_outer .swiper-slide .video-wrap, .parallax_slider_outer .swiper-slide .mobile-video-image, .parallax_slider_outer .swiper-slide .container, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(true).transition({ x: '-300px' }, 700, 'easeInOutCubic');
                    if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0) { if ($('#header-outer[data-transparency-option="1"]').length == 0 || ($('#header-outer[data-transparency-option="1"]').length > 0 && $('#header-outer[data-full-width="true"]').length == 0) || $('body.mobile').length > 0) { $('#header-outer').stop(true).css('transform', 'translateY(0)').transition({ x: '-' + (300 + $slideOutAmount) + 'px' }, 700, 'easeInOutCubic'); } else { $('#header-outer').stop(true).css('transform', 'translateY(0)').transition({ x: '-' + (300 + $slideOutAmount) + 'px', 'background-color': 'transparent', 'border-bottom': '1px solid rgba(255,255,255,0.22)' }, 700, 'easeInOutCubic'); } } else { $('#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap').transition({ x: '-300px' }, 700, 'easeInOutCubic'); }
                    $('#ascrail2000').transition({ 'x': '-' + (300 + $slideOutAmount) + 'px' }, 700, 'easeInOutCubic');
                    $('body:not(.ascend) #header-outer .cart-menu').stop(true).transition({ 'x': '300px' }, 700, 'easeInOutCubic');
                }
                $('#slide-out-widget-area').stop(true).transition({ x: '-' + $slideOutAmount + 'px' }, 700, 'easeInOutCubic').addClass('open');
                if ($('#boxed').length == 0) {
                    if ($('#header-outer[data-full-width="true"]').length > 0 && !$('body').hasClass('mobile')) {
                        $('#header-outer').addClass('highzI');
                        $('#ascrail2000').addClass('z-index-adj');
                        if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0) {
                            if ($bodyBorderWidth == 0)
                                $('header#top #logo').stop(true).transition({ x: (300 + $slideOutAmount) + 'px' }, 700, 'easeInOutCubic');
                        }
                        $('header#top .slide-out-widget-area-toggle .lines-button').addClass('close');
                        if ($('#header-outer[data-remove-border="true"]').length > 0) { $('body:not(.ascend) #header-outer[data-full-width="true"] header#top nav > ul.product_added').stop(true).transition({ x: '64px' }, 700, 'easeInOutCubic'); } else { $('body:not(.ascend) #header-outer[data-full-width="true"] header#top nav > ul.product_added').stop(true).transition({ x: '89px' }, 700, 'easeInOutCubic'); }
                        $('body #header-outer nav > ul > li > a').css({ 'margin-bottom': '0' });
                    }
                }
                $('#header-outer').addClass('style-slide-out-from-right');
                $('#slide-out-widget-area-bg').css({ 'height': '100%', 'width': '100%' }).stop(true).transition({ 'opacity': 1 }, 700, 'easeInOutCubic', function() { $('.slide-out-widget-area-toggle:not(.std-menu) > div > a').removeClass('animating'); });
                if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0) { $logoWidth = ($('#logo img:visible').length > 0) ? $('#logo img:visible').width() : $('#logo').width(); if ($('header#top nav > .sf-menu').offset().left - $logoWidth - 300 < 20) $('#header-outer').addClass('hidden-menu'); } else { $('#header-outer').addClass('hidden-menu-items'); }
                var headerResize = $('#header-outer').attr('data-header-resize');
                if ($bodyBorderHeaderColorMatch == true && headerResize == 1) {
                    $('#header-outer').stop(true).transition({ y: '0' }, 0).addClass('transparent').css('transition', 'transform');
                    if ($('#header-outer').attr('data-transparent-header') != 'true') { $('#header-outer').attr('data-transparent-header', 'true').addClass('pseudo-data-transparent'); }
                    $(window).off('scroll', bigNav);
                    $(window).off('scroll', smallNav);
                } else if ($bodyBorderHeaderColorMatch == true) {
                    $('#header-outer').addClass('transparent');
                    $(window).off('scroll', opaqueCheck);
                    $(window).off('scroll', transparentCheck);
                    if ($('#header-outer').attr('data-transparent-header') != 'true') { $('#header-outer').attr('data-transparent-header', 'true').addClass('pseudo-data-transparent'); }
                }
            } else if ($('#slide-out-widget-area').hasClass('fullscreen')) {
                var $scrollDelay = 0;
                var $scrollDelay2 = 0;
                if ($(window).scrollTop() + $(window).height() > $('.blurred-wrap').height() && $('#nectar_fullscreen_rows').length == 0) {
                    $('body,html').stop().animate({ scrollTop: $('.blurred-wrap').height() - $(window).height() }, 600, 'easeInOutCubic');
                    $scrollDelay = 550;
                    $scrollDelay2 = 200;
                }
                $('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');
                setTimeout(function() { $('.blurred-wrap').addClass('blurred'); }, $scrollDelay);
                $('#slide-out-widget-area.fullscreen').show().addClass('open');
                if ($('.nectar-social-sharing-fixed').length == 0) { hideToTop(); }
                $('.container-wrap').addClass('no-shadow');
                $('#header-outer').stop(true).css('transform', 'translateY(0)');
                setTimeout(function() {
                    $('.off-canvas-menu-container .menu > li').each(function(i) { $(this).delay(i * 50).transition({ y: 0, 'opacity': 1 }, 800, 'easeOutExpo'); });
                    $('#slide-out-widget-area.fullscreen .widget').each(function(i) { $(this).delay(i * 100).transition({ y: 0, 'opacity': 1 }, 800, 'easeOutExpo'); });
                }, 370 + $scrollDelay2);
                setTimeout(function() {
                    $('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');
                    $('#slide-out-widget-area .off-canvas-social-links li').each(function(i) { $(this).delay(i * 50).transition({ 'scale': 1 }, 400, 'easeOutCubic'); });
                    $('#slide-out-widget-area .bottom-text').transition({ 'opacity': 0.7 }, 400, 'easeOutCubic');
                }, 750 + $scrollDelay2);
                setTimeout(function() {
                    $easing = ($('body.mobile').length > 0) ? 'easeOutCubic' : 'easeInOutQuint';
                    $('#slide-out-widget-area-bg').css({ 'height': '100%', 'width': '100%' }).show().stop(true).transition({ 'y': '0%' }, 920, $easing, function() { $('.slide-out-widget-area-toggle > div > a').removeClass('animating'); });
                }, 50 + $scrollDelay2);
                slideOutWidgetOverflowState();
                if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) $('#ajax-content-wrap').addClass('at-content');
                if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || $('.mobile').length == 0 && $('#header-outer.transparent').length == 0) $('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top', $('#header-outer').height());
            } else if ($('#slide-out-widget-area').hasClass('fullscreen-alt')) {
                $('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');
                $('#slide-out-widget-area.fullscreen-alt').show().addClass('open');
                $('#slide-out-widget-area-bg').addClass('open');
                $('body > div[class*="body-border"]').css('z-index', '9995');
                $('.off-canvas-menu-container .menu').transition({ y: '0px', 'opacity': 1 }, 0);
                if ($('.nectar-social-sharing-fixed').length == 0) { hideToTop(); }
                if ($('#header-outer.transparent').length == 0) {} else {
                    if ($('.body-border-top').length > 0) {
                        $('.admin-bar #slide-out-widget-area-bg.fullscreen-alt').css({ 'padding-top': ($('.body-border-top').outerHeight(true) + 32) + 'px' });
                        $('body:not(.admin-bar) #slide-out-widget-area-bg.fullscreen-alt').css({ 'padding-top': ($('.body-border-top').outerHeight(true)) + 'px' });
                    }
                }
                if ($('#logo .starting-logo').length > 0 && $(window).width() > 1000) { $('#header-outer').stop(true).css('transform', 'translateY(0)').addClass('transparent'); if ($('#header-outer').attr('data-transparent-header') != 'true') { $('#header-outer').attr('data-transparent-header', 'true').addClass('pseudo-data-transparent'); } }
                $('.off-canvas-menu-container .clip-wrap').css('transition-duration', '0s');
                setTimeout(function() {
                    $('.off-canvas-menu-container .menu > li').each(function(i) { $(this).delay(i * 50).transition({ y: 0, 'opacity': 1 }, 750, 'easeOutCubic').addClass('no-pointer-events'); });
                    setTimeout(function() {
                        $('.off-canvas-menu-container .menu > li').removeClass('no-pointer-events');
                        $('.off-canvas-menu-container .clip-wrap').css('transition-duration', '.45s');
                    }, 500);
                    $('#slide-out-widget-area.fullscreen-alt .widget').each(function(i) { $(this).delay(i * 100).transition({ y: 0, 'opacity': 1 }, 650, 'easeOutCubic'); });
                }, 200);
                setTimeout(function() {
                    $('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');
                    $('#slide-out-widget-area .off-canvas-social-links li').css('opacity', '1').each(function(i) { $(this).delay(i * 50).transition({ 'scale': 1 }, 400, 'easeOutCubic'); });
                    $('#slide-out-widget-area .bottom-text').transition({ 'opacity': 1 }, 600, 'easeOutCubic');
                }, 200);
                if ($('#slide-out-widget-area-bg').hasClass('solid')) $opacity = 1;
                if ($('#slide-out-widget-area-bg').hasClass('dark')) $opacity = 0.97;
                if ($('#slide-out-widget-area-bg').hasClass('medium')) $opacity = 0.6;
                if ($('#slide-out-widget-area-bg').hasClass('light')) $opacity = 0.4;
                $('#slide-out-widget-area-bg').removeClass('no-transition');
                $('#slide-out-widget-area-bg').addClass('padding-removed').css({ 'height': '100%', 'width': '100%', 'left': '0', 'opacity': $opacity });
                setTimeout(function() { $('.slide-out-widget-area-toggle > div > a').removeClass('animating'); }, 600);
                slideOutWidgetOverflowState();
                if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) $('#ajax-content-wrap').addClass('at-content');
                if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || $('.mobile').length == 0 && $('#header-outer.transparent').length == 0) $('#slide-out-widget-area.fullscreen-alt .inner-wrap').css('padding-top', $('#header-outer').height());
            }
            $('#header-outer').removeClass('side-widget-closed').addClass('side-widget-open');
            if ($('#header-outer[data-transparency-option="1"]').length > 0 && $('#boxed').length == 0 && $('#header-outer[data-full-width="true"]').length > 0) { $('#header-outer').addClass('transparent'); }
            if ($('#header-outer.dark-slide.transparent').length > 0 && $('#boxed').length == 0) $('#header-outer').removeClass('dark-slide').addClass('temp-removed-dark-slide');
            $('.slide-out-widget-area-toggle > div > a').removeClass('closed').addClass('open');
            $('.slide-out-widget-area-toggle > div > a').addClass('animating');
            return false;
        });
        $('body').on('click', '.slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), #slide-out-widget-area .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right', function() {
            if ($('.slide-out-widget-area-toggle:not(.std-menu) a.animating').length > 0) return;
            $('#header-outer').removeClass('no-transition');
            var $that = $(this);
            $('.slide-out-widget-area-toggle:not(.std-menu) a').removeClass('open').addClass('closed');
            $('.slide-out-widget-area-toggle:not(.std-menu) a').addClass('animating');
            if ($('#slide-out-widget-area').hasClass('slide-out-from-right')) {
                $('.container-wrap, .home-wrap, #header-secondary-outer, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, .parallax_slider_outer .swiper-slide .image-bg, .parallax_slider_outer .swiper-slide .container, .parallax_slider_outer .swiper-slide .video-wrap, .parallax_slider_outer .swiper-slide .mobile-video-image, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(true).transition({ x: '0px' }, 700, 'easeInOutCubic');
                if ($('#header-outer[data-transparency-option="1"]').length > 0 && $('#boxed').length == 0) {
                    $currentRowBG = ($('#header-outer[data-current-row-bg-color]').length > 0) ? $('#header-outer').attr('data-current-row-bg-color') : $('#header-outer').attr('data-user-set-bg');
                    $('#header-outer').stop(true).transition({ x: '0px', 'background-color': $currentRowBG }, 700, 'easeInOutCubic');
                } else { $('#header-outer').stop(true).transition({ x: '0px' }, 700, 'easeInOutCubic'); }
                $('#ascrail2000').stop(true).transition({ 'x': '0px' }, 700, 'easeInOutCubic');
                $('body:not(.ascend) #header-outer .cart-menu').stop(true).transition({ 'x': '0px' }, 700, 'easeInOutCubic');
                $('#slide-out-widget-area').stop(true).transition({ x: '301px' }, 700, 'easeInOutCubic').removeClass('open');
                if ($('#boxed').length == 0) {
                    if ($('#header-outer[data-full-width="true"]').length > 0) {
                        $('#header-outer').removeClass('highzI');
                        $('header#top #logo').stop(true).transition({ x: '0px' }, 700, 'easeInOutCubic');
                        $('.lines-button').removeClass('close');
                        $('body:not(.ascend) #header-outer[data-full-width="true"] header#top nav > ul.product_added').stop(true).transition({ x: '0px' }, 700, 'easeInOutCubic');
                    }
                }
                if ($('#header-outer[data-format="centered-logo-between-menu"]').length > 0) { $('#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap').stop(true).transition({ x: '0px' }, 700, 'easeInOutCubic'); }
                $('#slide-out-widget-area-bg').stop(true).transition({ 'opacity': 0 }, 700, 'easeInOutCubic', function() {
                    $('.slide-out-widget-area-toggle a').removeClass('animating');
                    $(this).css({ 'height': '1px', 'width': '1px' });
                    if ($('#header-outer').hasClass('parallax-contained') && $(window).scrollTop() > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) { $('#header-outer').removeClass('parallax-contained').addClass('detached').removeClass('transparent'); } else if ($(window).scrollTop() == 0 && $('body[data-hhun="1"]').length > 0 && $('#page-header-bg[data-parallax="1"]').length > 0 || $(window).scrollTop() == 0 && $('body[data-hhun="1"]').length > 0 && $('.parallax_slider_outer').length > 0) {
                        if ($('#header-outer[data-transparency-option="1"]').length > 0) $('#header-outer').addClass('transparent');
                        $('#header-outer').addClass('parallax-contained').removeClass('detached');
                    }
                    $('.container-wrap').css('transform', 'none');
                });
                $('#header-outer').removeClass('style-slide-out-from-right');
                var headerResize = $('#header-outer').attr('data-header-resize');
                if ($bodyBorderHeaderColorMatch == true && headerResize == 1) {
                    $(window).off('scroll.headerResizeEffect');
                    if ($(window).scrollTop() == 0) { $(window).on('scroll.headerResizeEffect', smallNav); if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $('.body-border-top').length > 0 && $bodyBorderHeaderColorMatch == true && $('#header-outer.pseudo-data-transparent').length > 0) { $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({ 'padding': '0' }, { queue: false, duration: 250, easing: 'easeOutCubic' }); } } else
                        $(window).on('scroll.headerResizeEffect', bigNav);
                    if ($('#header-outer').hasClass('pseudo-data-transparent')) { $('#header-outer').attr('data-transparent-header', 'false').removeClass('pseudo-data-transparent').removeClass('transparent'); }
                    $('#header-outer').css('transition', 'transform');
                } else if ($bodyBorderHeaderColorMatch == true) {
                    $(window).off('scroll.headerResizeEffectOpaque');
                    $(window).on('scroll.headerResizeEffectOpaque', opaqueCheck);
                    $('#header-outer').css('transition', 'transform');
                    if ($('#header-outer').hasClass('pseudo-data-transparent')) { $('#header-outer').attr('data-transparent-header', 'false').removeClass('pseudo-data-transparent').removeClass('transparent'); }
                }
            } else if ($('#slide-out-widget-area').hasClass('fullscreen')) {
                $('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');
                $('.blurred-wrap').removeClass('blurred');
                $('#slide-out-widget-area.fullscreen').transition({ 'opacity': 0 }, 700, 'easeOutQuad', function() { $('#slide-out-widget-area.fullscreen').hide().css('opacity', '1'); }).removeClass('open');
                $('#slide-out-widget-area.fullscreen .widget').transition({ 'opacity': 0 }, 700, 'easeOutQuad', function() { $(this).transition({ y: '110px' }, 0); });
                setTimeout(function() {
                    $('.off-canvas-menu-container .menu > li').transition({ y: '80px', 'opacity': 0 }, 0);
                    $('#slide-out-widget-area .off-canvas-social-links li').transition({ 'scale': 0 }, 0);
                    $('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
                    $('#slide-out-widget-area .bottom-text').transition({ 'opacity': 0 }, 0);
                    $('#slide-out-widget-area .menuwrapper .menu').removeClass('subview');
                    $('#slide-out-widget-area .menuwrapper .menu li').removeClass('subview subviewopen');
                    $('#slide-out-widget-area.fullscreen .inner .off-canvas-menu-container').css('height', 'auto');
                }, 800);
                setTimeout(function() {
                    if ($('.nectar-social-sharing-fixed').length == 0) { showToTop(); }
                    $('.container-wrap').removeClass('no-shadow');
                }, 500);
                $('#slide-out-widget-area-bg').stop(true).transition({ 'opacity': 0 }, 900, 'easeOutQuad', function() {
                    if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) $('#ajax-content-wrap').removeClass('at-content');
                    if ($('.mobile #header-outer[data-permanent-transparent="false"]').length == 0) $('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top', '0');
                    $('.slide-out-widget-area-toggle a').removeClass('animating');
                    if ($('#slide-out-widget-area-bg').hasClass('solid')) $opacity = 1;
                    if ($('#slide-out-widget-area-bg').hasClass('dark')) $opacity = 0.93;
                    if ($('#slide-out-widget-area-bg').hasClass('medium')) $opacity = 0.6;
                    if ($('#slide-out-widget-area-bg').hasClass('light')) $opacity = 0.4;
                    $(this).css({ 'height': '1px', 'width': '1px', 'opacity': $opacity }).transition({ y: '-100%' }, 0);
                });
            } else if ($('#slide-out-widget-area').hasClass('fullscreen-alt')) {
                $('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');
                $('.blurred-wrap').removeClass('blurred');
                $('#slide-out-widget-area-bg').removeClass('open');
                $('#slide-out-widget-area.fullscreen-alt .widget').transition({ 'opacity': 0 }, 500, 'easeOutQuad', function() { $(this).transition({ y: '40px' }, 0); });
                $('#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li').transition({ 'opacity': 0 }, 250, 'easeOutQuad');
                $('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
                $('.off-canvas-menu-container .menu').transition({ y: '-13px', 'opacity': 0 }, 400);
                setTimeout(function() {
                    $('.off-canvas-menu-container .menu > li').stop(true, true).transition({ y: '40px', 'opacity': 0 }, 0);
                    $('#slide-out-widget-area .off-canvas-social-links li').transition({ 'scale': 0 }, 0);
                    $('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
                    $('#slide-out-widget-area .menuwrapper .menu').removeClass('subview');
                    $('#slide-out-widget-area .menuwrapper .menu li').removeClass('subview subviewopen');
                    $('#slide-out-widget-area.fullscreen-alt .inner .off-canvas-menu-container').css('height', 'auto');
                    if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) $('#ajax-content-wrap').removeClass('at-content');
                    if ($('.mobile #header-outer[data-permanent-transparent="false"]').length == 0) $('#slide-out-widget-area.fullscreen-alt .inner-wrap').css('padding-top', '0');
                    $('.slide-out-widget-area-toggle a').removeClass('animating');
                    $('#slide-out-widget-area-bg').css({ 'height': '1px', 'width': '1px', 'left': '-100%' });
                    $('#slide-out-widget-area.fullscreen-alt').hide().removeClass('open');
                }, 550);
                setTimeout(function() { if ($('.nectar-social-sharing-fixed').length == 0) { showToTop(); } }, 600);
                setTimeout(function() { $('#slide-out-widget-area-bg').removeClass('padding-removed'); }, 50);
                var borderDelay = ($bodyBorderHeaderColorMatch == true) ? 150 : 50;
                setTimeout(function() { $('#slide-out-widget-area-bg').stop(true).css({ 'opacity': 0 }); if ($('[data-transparent-header="true"]').length > 0) $('body > div[class*="body-border"]').css('z-index', '10000'); }, borderDelay);
                setTimeout(function() { $('#header-outer.transparent.small-nav, #header-outer.transparent.detached, #header-outer.transparent.scrolled-down').removeClass('transparent'); if ($('#header-outer').hasClass('pseudo-data-transparent')) { $('#header-outer').attr('data-transparent-header', 'false').removeClass('pseudo-data-transparent').removeClass('transparent'); } }, 100);
            }
            if ($('#header-outer.temp-removed-dark-slide.transparent').length > 0 && $('#boxed').length == 0) $('#header-outer').removeClass('temp-removed-dark-slide').addClass('dark-slide');
            if ($('#header-outer[data-permanent-transparent="1"]').length == 0 && $('#slide-out-widget-area.fullscreen-alt').length == 0) { if ($('.nectar-box-roll').length == 0) { if ($('#header-outer.small-nav').length > 0 || $('#header-outer.scrolled-down').length > 0 || $('#header-outer.detached').length > 0) $('#header-outer').removeClass('transparent'); } else { if ($('#header-outer.small-nav').length > 0 || $('#header-outer.scrolled-down').length > 0 || $('.container-wrap.auto-height').length > 0) $('#header-outer').removeClass('transparent'); } }
            $('#header-outer').removeClass('hidden-menu');
            $('#header-outer').removeClass('side-widget-open').addClass('side-widget-closed');
            return false;
        });

        function slideOutWidgetOverflowState() {
            if (window.innerWidth < 1000 || $('body > #boxed').length > 0) {
                $('#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links').appendTo('#slide-out-widget-area .inner');
                $('#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text').appendTo('#slide-out-widget-area .inner');
            } else {
                $('#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links').appendTo('#slide-out-widget-area .inner-wrap');
                $('#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text').appendTo('#slide-out-widget-area .inner-wrap');
            }
            if ($('#slide-out-widget-area[class*="fullscreen"] .inner').height() >= $(window).height() - 100) { $('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').addClass('overflow-state'); } else { $('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').removeClass('overflow-state'); }
            $('#slide-out-widget-area[class*="fullscreen"] .inner').transition({ y: '-' + ($('#slide-out-widget-area[class*="fullscreen"] .inner').height() / 2) + 'px' }, 0);
            if ($('.slide-out-from-right.open .off-canvas-menu-container.mobile-only').length > 0 && $('body.mobile').length == 0) $('#slide-out-widget-area .slide_out_area_close').trigger('click');
        }

        function fullWidthHeaderSlidingWidgetMenuCalc() { $('header#top nav > ul > li.megamenu > ul.sub-menu').stop(true).transition({ 'width': $(window).width() - 360, 'left': '300px' }, 700, 'easeInOutCubic'); }

        function slideOutWidgetAreaScrolling() {
            $('#slide-out-widget-area').mousewheel(function(event, delta) {
                this.scrollTop -= (delta * 30);
                event.preventDefault();
            });
        }
        slideOutWidgetAreaScrolling();
        if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) { $('#slide-out-widget-area').addClass('mobile'); }

        function closeOCM(item) {
            if ($('#slide-out-widget-area.open').length > 0) {
                var $windowCurrentLocation = window.location.href.split("#")[0];
                var $windowClickedLocation = item.find('> a').attr('href').split("#")[0];
                if ($windowCurrentLocation == $windowClickedLocation || item.find('a[href^="#"]').length > 0)
                    $('.slide-out-widget-area-toggle a').trigger('click');
            }
        }

        function leftHeaderSubmenus() {
            $('#header-outer nav li.megamenu').removeClass('megamenu');
            $('#header-outer li.menu-item-has-children > a').click(function() {
                if ($(this).parent().hasClass('open-submenu')) {
                    $(this).parent().find('.sub-menu').css({ 'max-height': '0' });
                    $(this).parent().removeClass('open-submenu');
                } else {
                    var $that = $(this);
                    var $maxSubMenuHeight;
                    $that.parent().find('> .sub-menu').addClass('no-trans');
                    setTimeout(function() {
                        $that.parent().find('> .sub-menu').css({ 'max-height': 'none', 'position': 'absolute', 'visibility': 'hidden' });
                        $maxSubMenuHeight = $that.parent().find('> .sub-menu').height();
                        $that.parent().find('> .sub-menu').removeClass('no-trans');
                        $that.parent().find('> .sub-menu').css({ 'max-height': '0', 'position': 'relative', 'visibility': 'visible' });
                    }, 25);
                    setTimeout(function() {
                        $that.closest('ul').find('li.menu-item-has-children').removeClass('open-submenu');
                        $that.closest('ul').find('li.menu-item-has-children > .sub-menu').css({ 'max-height': '0' });
                        $that.parent().addClass('open-submenu');
                        $that.parent().find('> .sub-menu').css('max-height', $maxSubMenuHeight);
                        if ($that.parents('ul').length > 0) {
                            $that.parents('ul:not(.sf-menu)').each(function() {
                                $(this).css('max-height');
                                $(this).css('max-height', parseInt($(this).height() + parseInt($(this).css('padding-top')) * 2 + $maxSubMenuHeight) + 'px');
                            });
                        }
                    }, 50);
                }
                return false;
            });
            var $maxSubMenuHeightArr = [];
            $('.current-menu-ancestor').find('.current-menu-item').parents('ul.sub-menu').each(function(i) {
                $maxSubMenuHeightArr[i] = $(this).parent().find('> .sub-menu').height();
                var $that = $(this);
                setTimeout(function() {
                    var $totalSubMenuHeight = 0;
                    for (var $i = 0; $i < $maxSubMenuHeightArr.length; $i++) { $totalSubMenuHeight += parseInt($maxSubMenuHeightArr[i]); }
                    $that.parent().addClass('open-submenu');
                    $that.css('max-height', $totalSubMenuHeight);
                }, 40);
            });
        }
        if ($('#header-outer[data-format="left-header"]').length > 0)
            leftHeaderSubmenus();;
        (function($, window, undefined) {
            'use strict';
            var Modernizr = window.Modernizr,
                $body = $('body');
            $.DLMenu = function(options, element) {
                this.$el = $(element);
                this._init(options);
            };
            $.DLMenu.defaults = { animationClasses: { classin: 'dl-animate-in-1', classout: 'dl-animate-out-1' }, onLevelClick: function(el, name) { return false; }, onLinkClick: function(el, ev) { return false; } };
            $.DLMenu.prototype = {
                _init: function(options) {
                    this.options = $.extend(true, {}, $.DLMenu.defaults, options);
                    this._config();
                    var animEndEventNames = { 'WebkitAnimation': 'webkitAnimationEnd', 'OAnimation': 'oAnimationEnd', 'msAnimation': 'MSAnimationEnd', 'animation': 'animationend' },
                        transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' };
                    this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.menu';
                    this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.menu', this.supportAnimations = Modernizr.cssanimations, this.supportTransitions = Modernizr.csstransitions;
                    this._initEvents();
                },
                _config: function() {
                    this.open = false;
                    this.$trigger = this.$el.children('.trigger');
                    this.$menu = this.$el.children('ul.menu');
                    this.$menuitems = this.$menu.find('li:not(.back) > a');
                    this.$el.find('ul.sub-menu').prepend('<li class="back"><a href="#"> ' + $('#slide-out-widget-area').attr('data-back-txt') + ' </a></li>');
                    this.$back = this.$menu.find('li.back');
                },
                _initEvents: function() {
                    var self = this;
                    this.$trigger.on('click.menu', function() {
                        if (self.open) { self._closeMenu(); } else { self._openMenu(); }
                        return false;
                    });
                    this.$menuitems.on('click.menu', function(event) {
                        var $item = $(this).parent('li'),
                            $submenu = $item.children('ul.sub-menu');
                        $('.fullscreen-alt .off-canvas-menu-container .clip-wrap, .fullscreen-alt .off-canvas-menu-container .clip-wrap span').css('transition-duration', '0s');
                        if ($submenu.length > 0) {
                            var $flyin = $submenu.clone().css('opacity', 0).insertAfter(self.$menu),
                                onAnimationEndFn = function() {
                                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('subview');
                                    $item.addClass('subviewopen').parents('.subviewopen:first').removeClass('subviewopen').addClass('subview');
                                    $flyin.remove();
                                    setTimeout(function() {
                                        $('.off-canvas-menu-container .menu > li').removeClass('no-pointer-events');
                                        $('.off-canvas-menu-container .clip-wrap, .off-canvas-menu-container .clip-wrap span').css('transition-duration', '.45s');
                                    }, 300);
                                };
                            setTimeout(function() {
                                $flyin.addClass(self.options.animationClasses.classin);
                                self.$menu.addClass(self.options.animationClasses.classout);
                                if (self.supportAnimations) { self.$menu.on(self.animEndEventName, onAnimationEndFn); } else { onAnimationEndFn.call(); }
                                self.options.onLevelClick($item, $item.children('a:first').text());
                            });
                            $item.parents('.off-canvas-menu-container').css('height', $item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height()).transition({ 'height': $flyin.height() }, 500, 'easeInOutQuad');
                            return false;
                        } else { self.options.onLinkClick($item.find('> a'), event); }
                        closeOCM($item);
                    });
                    this.$back.on('click.menu', function(event) {
                        var $this = $(this),
                            $submenu = $this.parents('ul.sub-menu:first'),
                            $item = $submenu.parent(),
                            $flyin = $submenu.clone().insertAfter(self.$menu);
                        var onAnimationEndFn = function() {
                            self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);
                            $flyin.remove();
                        };
                        setTimeout(function() {
                            $flyin.addClass(self.options.animationClasses.classout);
                            self.$menu.addClass(self.options.animationClasses.classin);
                            if (self.supportAnimations) { self.$menu.on(self.animEndEventName, onAnimationEndFn); } else { onAnimationEndFn.call(); }
                            $item.removeClass('subviewopen');
                            var $subview = $this.parents('.subview:first');
                            if ($subview.is('li')) { $subview.addClass('subviewopen'); }
                            $subview.removeClass('subview');
                        });
                        $item.parents('.off-canvas-menu-container').css('height', $item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height())
                        setTimeout(function() { $item.parents('.off-canvas-menu-container').transition({ 'height': $item.parent().height() }, 500, 'easeInOutQuad'); }, 50);
                        return false;
                    });
                },
                closeMenu: function() { if (this.open) { this._closeMenu(); } },
                _closeMenu: function() {
                    var self = this,
                        onTransitionEndFn = function() {
                            self.$menu.off(self.transEndEventName);
                            self._resetMenu();
                        };
                    this.$menu.removeClass('menuopen');
                    this.$menu.addClass('menu-toggle');
                    this.$trigger.removeClass('active');
                    if (this.supportTransitions) { this.$menu.on(this.transEndEventName, onTransitionEndFn); } else { onTransitionEndFn.call(); }
                    this.open = false;
                },
                openMenu: function() { if (!this.open) { this._openMenu(); } },
                _openMenu: function() {
                    var self = this;
                    $body.off('click').on('click.menu', function() { self._closeMenu(); });
                    this.$menu.addClass('menuopen menu-toggle').on(this.transEndEventName, function() { $(this).removeClass('menu-toggle'); });
                    this.$trigger.addClass('active');
                    this.open = true;
                },
                _resetMenu: function() {
                    this.$menu.removeClass('subview');
                    this.$menuitems.removeClass('subview subviewopen');
                }
            };
            var logError = function(message) { if (window.console) { window.console.error(message); } };
            $.fn.dlmenu = function(options) {
                if (typeof options === 'string') {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var instance = $.data(this, 'menu');
                        if (!instance) { logError("cannot call methods on menu prior to initialization; " + "attempted to call method '" + options + "'"); return; }
                        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") { logError("no such method '" + options + "' for menu instance"); return; }
                        instance[options].apply(instance, args);
                    });
                } else {
                    this.each(function() {
                        var instance = $.data(this, 'menu');
                        if (instance) { instance._init(); } else { instance = $.data(this, 'menu', new $.DLMenu(options, this)); }
                    });
                }
                return this;
            };
        })(jQuery, window);

        function fullscreenMenuInit() {
            $('#slide-out-widget-area .off-canvas-menu-container .menu').wrap('<div class="menu-wrap menuwrapper" />');
            $('#slide-out-widget-area .off-canvas-menu-container .menu').addClass('menuopen');
            $ocmAnimationClassNum = ($('#slide-out-widget-area.fullscreen-alt').length > 0) ? '4' : '5';
            $('#slide-out-widget-area .off-canvas-menu-container .menu-wrap').dlmenu({ animationClasses: { classin: 'dl-animate-in-' + $ocmAnimationClassNum, classout: 'dl-animate-out-' + $ocmAnimationClassNum } });
            $('#slide-out-widget-area.fullscreen-alt .menu li, #slide-out-widget-area.slide-out-from-right-hover .menu li').each(function() {
                if ($(this).parents('.slide-out-from-right-hover').length > 0 && $(this).find('a').length > 0) {
                    var $ocmLinkTextCopy = $(this).find('a').clone();
                    var $ocmLinkHeight = $(this).find('a').height();
                    $('<div id="nectar-ocm-ht-line-check"></div>').appendTo('body');
                    $('#nectar-ocm-ht-line-check').append($ocmLinkTextCopy);
                    if ($ocmLinkHeight > $('#nectar-ocm-ht-line-check').height() * 1.5) { $(this).parents('.slide-out-from-right-hover').addClass('no-text-effect'); }
                    $('#nectar-ocm-ht-line-check').remove();
                }
                var $menuItemText = $(this).find('> a').html();
                $(this).find('> a ').html($menuItemText.replace(/ /g, "&nbsp;"));
                $(this).find('> a').append('<span class="clip-wrap"><span>' + $(this).find('> a').text() + '</span></span>');
            });
            $('body').on('mouseover', '#slide-out-widget-area.fullscreen-alt .menu li a', function() {
                var $that = $(this);
                $(this).find('> .clip-wrap').css({ 'transition-duration': '0s' });
                $(this).find('> .clip-wrap span ').css({ 'transition-duration': '0s' });
                $that.find('> .clip-wrap').css({ 'width': '0%', 'transform': 'translateX(0%)' });
                $that.find('> .clip-wrap span').css({ 'transform': 'translateX(0%)' });
                setTimeout(function() {
                    $that.find('> .clip-wrap').css({ 'transition-duration': '0.45s' });
                    $that.find('> .clip-wrap').css({ 'width': '100%', 'left': '0', 'right': 'auto' });
                }, 50);
            });
            $('body').on('mouseleave', '#slide-out-widget-area.fullscreen-alt .menu li a', function() {
                var $that = $(this);
                $(this).find('> .clip-wrap').css({ 'transition-duration': '0s' });
                $(this).find('> .clip-wrap span ').css({ 'transition-duration': '0s' });
                $that.find('> .clip-wrap').css({ 'width': '100%', 'transform': 'translateX(0%)' });
                $that.find('> .clip-wrap span').css({ 'transform': 'translateX(0%)' });
                $that.find('> .clip-wrap').css({ 'transition-duration': '0.45s' });
                $that.find('> .clip-wrap span').css({ 'transition-duration': '0.45s' });
                $that.find('> .clip-wrap').css({ 'transform': 'translateX(100%)' });
                $that.find('> .clip-wrap span').css({ 'transform': 'translateX(-100%)' });
            });
        }
        fullscreenMenuInit();
        $('body').on('mouseover', '#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a', function() {
            var $currentTxt = $(this).text();
            $('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');
            $('.off-canvas-menu-container .menuwrapper .menu li > a:contains(' + $currentTxt + ')').addClass('hovered');
        });
        $('body').on('mouseover', '.off-canvas-menu-container .menuwrapper .menu li > a', function() { $('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered'); });
        var pageHeaderHeight;
        var pageHeaderHeightCopy;
        var pageHeadingHeight;
        var extraSpaceFromResize = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.nectar-box-roll').length == 0) ? 51 : 1;
        var $headerRemoveStickyness = ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length > 0) ? 1 : 0;

        function fullScreenHeaderInit() {
            pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
            pageHeaderHeightCopy = parseInt($('#page-header-bg').attr('data-height'));
            var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && window.innerWidth > 1000) ? 0 : $('#header-outer').height();
            if ($('.fullscreen-header').length > 0) {
                if ($('#header-outer[data-transparency-option]').length > 0 && $('#header-outer').attr('data-transparency-option') != '0') { var calculatedNum = (!$('body').hasClass('mobile')) ? $(window).height() : $(window).height() - parseInt($headerNavSpace); } else { var calculatedNum = (!$('body').hasClass('mobile')) ? $(window).height() - parseInt($headerNavSpace) + extraSpaceFromResize : $(window).height() - parseInt($headerNavSpace); }
                var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0;
                if ($('.nectar-box-roll').length > 0) extraHeight = 0;
                pageHeaderHeight = calculatedNum - extraHeight;
                pageHeaderHeightCopy = calculatedNum - extraHeight;
            }
            $('#page-header-bg').css('height', pageHeaderHeight + 'px').removeClass('not-loaded');
            setTimeout(function() { $('#page-header-bg').css('overflow', 'visible') }, 800);
        }
        fullScreenHeaderInit();

        function pageHeader() {
            $('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass('loaded');
            var $scrollTop = $(window).scrollTop();
            var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && window.innerWidth > 1000) ? 0 : $('#header-outer').height();
            if ($('.fullscreen-header').length > 0) {
                if ($('#header-outer[data-transparency-option]').length > 0 && $('#header-outer').attr('data-transparency-option') != '0') { var calculatedNum = (!$('body').hasClass('mobile')) ? $(window).height() : $(window).height() - parseInt($headerNavSpace); if ($('body[data-permanent-transparent="1"]').length > 0) calculatedNum = $(window).height(); } else { var calculatedNum = (!$('body').hasClass('mobile')) ? $(window).height() - parseInt($headerNavSpace) + extraSpaceFromResize : $(window).height() - parseInt($headerNavSpace); }
                var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0;
                if ($('.nectar-box-roll').length > 0) extraHeight = 0;
                pageHeaderHeight = calculatedNum - extraHeight;
                pageHeaderHeightCopy = calculatedNum - extraHeight;
            }
            if (window.innerWidth < 1000 && window.innerWidth > 690 && !$('body').hasClass('salient_non_responsive')) {
                var $multiplier = ($('.fullscreen-header').length > 0) ? 1 : 1.6;
                $('#page-header-bg').attr('data-height', pageHeaderHeightCopy / $multiplier).css('height', pageHeaderHeightCopy / $multiplier + 'px');
                $('#page-header-wrap').css('height', pageHeaderHeightCopy / $multiplier + 'px');
            } else if (window.innerWidth <= 690 && window.innerWidth > 480 && !$('body').hasClass('salient_non_responsive')) {
                var $multiplier = ($('.fullscreen-header').length > 0) ? 1 : 2.1;
                $('#page-header-bg').attr('data-height', pageHeaderHeightCopy / $multiplier).css('height', pageHeaderHeightCopy / $multiplier + 'px');
                $('#page-header-wrap').css('height', pageHeaderHeightCopy / $multiplier + 'px');
            } else if (window.innerWidth <= 480 && !$('body').hasClass('salient_non_responsive')) {
                var $multiplier = ($('.fullscreen-header').length > 0) ? 1 : 2.5;
                $('#page-header-bg').attr('data-height', pageHeaderHeightCopy / $multiplier).css('height', pageHeaderHeightCopy / $multiplier + 'px');
                $('#page-header-wrap').css('height', pageHeaderHeightCopy / $multiplier + 'px');
            } else {
                $('#page-header-bg').attr('data-height', pageHeaderHeightCopy).css('height', pageHeaderHeightCopy + 'px');
                if ($('.fullscreen-header').length > 0) { $('#page-header-wrap').css('height', pageHeaderHeightCopy + 'px'); } else { $('#page-header-wrap').css('height', pageHeaderHeightCopy + 'px'); }
                if ($('#page-header-bg[data-parallax="1"]').length == 0) $('#page-header-wrap').css('height', pageHeaderHeightCopy + 'px');
            }
            if ($('body[data-header-format="left-header"]').length > 0) $('#page-header-bg[data-parallax="1"]').css('width', $('#ajax-content-wrap').width())
            if (!$('body').hasClass('mobile')) {
                pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
                $('#page-header-bg .container > .row').css('top', 0);
                var $divisionMultipler = ($('#header-outer[data-remove-border="true"]').length > 0 && $('#header-outer[data-format="centered-menu-under-logo"]').length == 0) ? 2 : 1;
                pageHeadingHeight = $('#page-header-bg .col.span_6').height();
                if ($('#header-outer[data-transparent-header="true"]').length > 0 && $('.fullscreen-header').length == 0) { $('#page-header-bg:not("[data-parallax=1]") .col.span_6').css('top', ((pageHeaderHeight + $('#header-space').height() / $divisionMultipler) / 2) - (pageHeadingHeight / 2)); } else {
                    var $extraResizeHeight = ($('#header-outer[data-header-resize="1"]').length > 0) ? 22 : 0;
                    $('#page-header-bg:not("[data-parallax=1]") .col.span_6').css('top', (pageHeaderHeight / 2) - (pageHeadingHeight / 2) + $extraResizeHeight);
                }
                $('#page-header-bg:not("[data-parallax=1]") .portfolio-filters').css('top', (pageHeaderHeight / 2) + 2);
                if ($('#page-header-bg[data-parallax="1"] .span_6').css('opacity') > 0) {
                    if ($('#header-outer[data-transparent-header="true"]').length > 0 && $('body.single-post .fullscreen-header').length == 0) {
                        if ($headerRemoveStickyness) {
                            $('#page-header-bg[data-parallax="1"] .span_6').css({ 'top': (((pageHeaderHeight + $('#header-space').height() / $divisionMultipler) / 2) - (pageHeadingHeight / 2)) + "px" });
                            $('#page-header-bg[data-parallax="1"] .portfolio-filters').css({ 'top': ($scrollTop * -0.10) + ((pageHeaderHeight / 2)) - 7 + "px" });
                        } else {
                            $('#page-header-bg[data-parallax="1"] .span_6').css({ 'opacity': 1 - ($scrollTop / (pageHeaderHeight - ($('#page-header-bg .col.span_6').height() * 2) + 60)), 'top': (((pageHeaderHeight + $('#header-space').height() / $divisionMultipler) / 2) - (pageHeadingHeight / 2)) + "px" });
                            $('#page-header-bg[data-parallax="1"] .portfolio-filters').css({ 'opacity': 1 - ($scrollTop / (pageHeaderHeight - ($('#page-header-bg .col.span_6').height() * 2) + 75)), 'top': ($scrollTop * -0.10) + ((pageHeaderHeight / 2)) - 7 + "px" });
                        }
                    } else {
                        if ($headerRemoveStickyness) {
                            $('#page-header-bg[data-parallax="1"] .span_6').css({ 'top': ((pageHeaderHeight / 2) - (pageHeadingHeight / 2)) + 10 + "px" });
                            $('#page-header-bg[data-parallax="1"] .portfolio-filters').css({ 'top': ($scrollTop * -0.10) + ((pageHeaderHeight / 2)) - 7 + "px" });
                        } else {
                            $('#page-header-bg[data-parallax="1"] .span_6').css({ 'opacity': 1 - ($scrollTop / (pageHeaderHeight - ($('#page-header-bg .col.span_6').height() * 2) + 60)), 'top': ((pageHeaderHeight / 2) - (pageHeadingHeight / 2)) + 10 + "px" });
                            $('#page-header-bg[data-parallax="1"] .portfolio-filters').css({ 'opacity': 1 - ($scrollTop / (pageHeaderHeight - ($('#page-header-bg .col.span_6').height() * 2) + 75)), 'top': ($scrollTop * -0.10) + ((pageHeaderHeight / 2)) - 7 + "px" });
                        }
                    }
                }
            } else {
                pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
                var pageHeadingHeight = $('#page-header-bg .container > .row').height();
                $('#page-header-bg .container > .row').css('top', (pageHeaderHeight / 2) - (pageHeadingHeight / 2) + 5);
            }
            $('#page-header-bg .container > .row').css('visibility', 'visible');
        }
        var $pt_timeout = ($('body[data-ajax-transitions="true"]').length > 0 && $('#page-header-bg[data-animate-in-effect="slide-down"]').length > 0) ? 350 : 0;
        setTimeout(function() { pageHeader(); }, $pt_timeout);
        if ($('#header-outer').attr('data-header-resize') == '' || $('#header-outer').attr('data-header-resize') == '0') { $('#page-header-wrap').css('margin-top', '0'); }

        function extractUrl(input) { return input.replace(/"/g, "").replace(/url\(|\)$/ig, ""); }
        if ($('#page-header-bg[data-parallax="1"]').length > 0) {
            var img = new Image();
            var imgX, imgY, aspectRatio;
            var diffX, diffY;
            var pageHeadingHeight = $('#page-header-bg .col.span_6').height();
            var pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
            var headerPadding2 = parseInt($('#header-outer').attr('data-padding')) * 2;
            var wooCommerceHeader = ($('.demo_store').length > 0) ? 32 : 0;
            var $initialImgCheck = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
            if ($initialImgCheck && $initialImgCheck.indexOf('.') !== -1) {
                img.onload = function() { pageHeaderInit(); }
                img.src = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
            } else { pageHeaderInit(); }
            var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0;
            if ($('body[data-hhun="1"]').length > 0 && !$('#header-outer[data-remove-fixed="1"]').length > 0) $('#header-outer').addClass('parallax-contained');
            window.addEventListener('scroll', function() { window.requestAnimationFrame(bindHeaderParallax); }, false);
        }

        function bindHeaderParallax() {
            var $scrollTop = $(window).scrollTop();
            var pageHeadingHeight = $('#page-header-bg .col.span_6').height();
            if (!$('body').hasClass('mobile') && navigator.userAgent.match(/iPad/i) == null) {
                var $multiplier1 = ($('body[data-hhun="1"]').length > 0) ? 0.40 : 0.2;
                var $multiplier2 = ($('body[data-hhun="1"]').length > 0) ? 0.09 : 0.14;
                var $parallaxHeaderHUN = ($('#header-outer[data-transparency-option="1"]').length > 0) ? 0.49 : 0.4;
                if ($('#page-header-bg .nectar-particles').length == 0 && $('#page-header-bg.out-of-sight').length == 0) {
                    if ($headerRemoveStickyness) { $('#page-header-bg[data-parallax="1"]').css({ 'transform': 'translateY(' + $scrollTop * -0.55 + 'px)' }); } else { $('#page-header-bg[data-parallax="1"]').css({ 'transform': 'translateY(' + $scrollTop * -$multiplier1 + 'px)' }); }
                    var multipler = ($('body').hasClass('single')) ? 1 : 2;
                    if (!$headerRemoveStickyness) { $('#page-header-bg[data-parallax="1"] .span_6,  #page-header-bg[data-parallax="1"][data-post-hs="default_minimal"] .author-section').css({ 'opacity': 1 - ($scrollTop / (pageHeaderHeight - 60)) }); }
                    if ($headerRemoveStickyness) { $('#page-header-bg[data-parallax="1"] .span_6, body[data-button-style="rounded"] #page-header-bg[data-parallax="1"] .scroll-down-wrap, #page-header-bg[data-parallax="1"][data-post-hs="default_minimal"] .author-section').css({ 'transform': 'translateY(' + $scrollTop * -0.45 + 'px)' }); } else { $('#page-header-bg[data-parallax="1"] .span_6, body[data-button-style="rounded"] #page-header-bg[data-parallax="1"] .section-down-arrow, #page-header-bg[data-parallax="1"][data-post-hs="default_minimal"] .author-section').css({ 'transform': 'translateY(' + $scrollTop * -$multiplier2 + 'px)' }); }
                    if ($('#page-header-bg[data-parallax="1"] .span_6').css('opacity') == 0) { $('#page-header-bg[data-parallax="1"] .span_6, #page-header-bg[data-parallax="1"] .portfolio-filters').hide(); } else { $('#page-header-bg[data-parallax="1"] .span_6, #page-header-bg[data-parallax="1"] .portfolio-filters').show(); }
                    if ($('body[data-hhun="1"]').length > 0 && !$('#header-outer').hasClass('side-widget-open') && !$('#header-outer .slide-out-widget-area-toggle a').hasClass('animating')) { $('#header-outer.parallax-contained').css({ 'transform': 'translateY(' + $scrollTop * -$parallaxHeaderHUN + 'px)' }); }
                } else if ($('#page-header-bg.out-of-sight').length == 0) {
                    var multipler = ($('body').hasClass('single')) ? 1 : 2;
                    $('#page-header-wrap .nectar-particles .fade-out').css({ 'opacity': 0 + ($scrollTop / (pageHeaderHeight + pageHeaderHeight * $multiplier)) });
                }
                if (($scrollTop / (pageHeaderHeight + $('#header-space').height() + extraHeight)) > 1) { $('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility', 'hidden').hide().addClass('out-of-sight'); } else {
                    $('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility', 'visible').show().removeClass('out-of-sight');
                    pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
                    $('#page-header-bg .container > .row').css('top', 0);
                    var $divisionMultipler = ($('#header-outer[data-remove-border="true"]').length > 0 && $('#header-outer[data-format="centered-menu-under-logo"]').length == 0) ? 2 : 1;
                    pageHeadingHeight = $('#page-header-bg .col.span_6').height();
                    if ($('#header-outer[data-transparent-header="true"]').length > 0 && $('body.single-post .fullscreen-header').length == 0) { $('#page-header-bg[data-parallax="1"] .span_6').css({ 'top': (((pageHeaderHeight + $('#header-space').height() / $divisionMultipler) / 2) - (pageHeadingHeight / 2)) + "px" }); } else { $('#page-header-bg[data-parallax="1"] .span_6').css({ 'top': ((pageHeaderHeight / 2) - (pageHeadingHeight / 2)) + 10 + "px" }); }
                }
            }
        }
        if ($('#page-header-bg').length > 0) { var $initialImgCheckAscend = extractUrl($('#page-header-bg').css('background-image')); if ($initialImgCheckAscend && $initialImgCheckAscend.indexOf('.') !== -1) { $('#page-header-bg').addClass('has-bg'); } }

        function pageHeaderInit() {
            var wooCommerceHeader = ($('.demo_store').length > 0) ? 32 : 0;
            var centeredNavAltSpace = ($('#header-outer[data-format="centered-menu-under-logo"]').length > 0) ? $('header#top nav > .sf-menu').height() - 20 : null;
            if ($('#header-outer[data-transparent-header="true"]').length > 0) { $('#page-header-bg[data-parallax="1"]').css({ 'top': extraHeight + wooCommerceHeader }); } else { var logoHeight = parseInt($('#header-outer').attr('data-logo-height')); var headerPadding = parseInt($('#header-outer').attr('data-padding')); var headerPadding2 = parseInt($('#header-outer').attr('data-padding')); var extraDef = 10; var headerResize = ($('body').hasClass('pp-video-function')) ? '1' : $('#header-outer').attr('data-header-resize'); var headerResizeOffExtra = 0; var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; var usingLogoImage = true; var mediaElement = ($('.wp-video-shortcode').length > 0) ? 36 : 0; var secondaryHeader = ($('#header-outer').attr('data-using-secondary') == '1') ? 32 : 0; if ($('body[data-header-resize="0"]').length == 0) $('#page-header-bg[data-parallax="1"]').css({ 'top': (logoHeight + headerPadding + centeredNavAltSpace + headerResizeOffExtra + extraHeight - extraDef + secondaryHeader + wooCommerceHeader) + 'px' }); }
            if ($('#ajax-content-wrap').length == 0 || !$('body').hasClass('ajax-loaded')) { $('#page-header-bg[data-parallax="1"]').animate({ 'opacity': 1 }, 650, 'easeInCubic'); } else if ($('#ajax-content-wrap').length == 1) { $('#page-header-bg[data-parallax="1"]').css({ 'opacity': 1 }); }
            if ($smoothCache == true && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
                niceScrollInit();
                $(window).trigger('resize')
            }
            $('#page-header-bg[data-parallax="1"] .nectar-particles').append('<div class="fade-out" />');
        }

        function nectarPageHeader() {
            if ($('#page-header-bg').length > 0) {
                fullScreenHeaderInit();
                pageHeader();
            }
            if ($('#page-header-bg[data-parallax="1"]').length > 0) {
                var img = new Image();
                var $initialImgCheck = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
                if ($initialImgCheck && $initialImgCheck.indexOf('.') !== -1) {
                    img.onload = function() { pageHeaderInit(); }
                    img.src = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
                } else { pageHeaderInit(); }
                $('#page-header-bg[data-parallax="1"] .span_6').css({ 'opacity': 1 });
                if (window.addEventListener) { window.addEventListener('scroll', function() { requestAnimationFrame(bindHeaderParallax); }, false); }
            }
            if ($('#page-header-bg').length > 0) { var $initialImgCheckAscend = extractUrl($('#page-header-bg').css('background-image')); if ($initialImgCheckAscend && $initialImgCheckAscend.indexOf('.') !== -1) { $('#page-header-bg').addClass('has-bg'); } }
        }
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { window.onunload = function() { nectarPageHeader(); }; }

        function pageHeaderTextEffectInit() {
            $('#page-header-bg').each(function() {
                if ($(this).attr('data-text-effect') == 'rotate_in') {
                    var $topHeading = 'none';
                    if ($(this).find('.span_6 h1').length > 0) { $topHeading = 'h1'; }
                    if ($topHeading != 'none') {
                        var $selector = ($(this).find('.nectar-particles').length > 0) ? '.inner-wrap.shape-1' : '.span_6';
                        $(this).find($selector).find($topHeading).addClass('top-heading').contents().filter(function() { return this.nodeType === 3 && typeof this.data != 'undefined' && this.data.replace(/\s+/, ""); }).wrap('<span class="wraped"></span>');
                        $(this).find($selector).find('.wraped').each(function() {
                            textNode = $(this);
                            text = textNode.text().split(' ');
                            replace = '';
                            $.each(text, function(index, value) { if (value.replace(/\s+/, "")) { replace += '<span class="wraped"><span>' + value + '</span></span> '; } });
                            textNode.replaceWith($(replace));
                        });
                    }
                }
            });
        }

        function pageHeaderTextEffect() {
            if ($('#page-header-bg .nectar-particles').length == 0 && $('#page-header-bg[data-text-effect="none"]').length == 0 || $('.nectar-box-roll').length > 0 && $('#page-header-bg .nectar-particles').length == 0) {
                var $selector = ($('.nectar-box-roll').length == 0) ? '#page-header-bg .span_6' : '.nectar-box-roll .overlaid-content .span_6';
                $($selector).find('.wraped').each(function(i) { $(this).find('span').delay(i * 370).transition({ rotateX: '0', 'opacity': 1, y: 0 }, 400, 'easeOutQuad'); });
                setTimeout(function() {
                    $($selector).find('.inner-wrap > *:not(.top-heading)').each(function(i) { $(this).delay(i * 370).transition({ rotateX: '0', 'opacity': 1, y: 0 }, 650, 'easeOutQuad'); });
                    $('.scroll-down-wrap').removeClass('hidden');
                }, $($selector).find('.wraped').length * 370);
            }
        }
        var $effectTimeout = ($('#ajax-loading-screen').length > 0) ? 800 : 0;
        pageHeaderTextEffectInit();
        if ($('#page-header-bg .nectar-video-wrap video').length == 0) setTimeout(pageHeaderTextEffect, $effectTimeout);
        if ($('header#top nav > ul.sf-menu ul').length > 0) {
            var $midnightSubmenuTimeout;
            $('body').on('mouseover', '#header-outer .midnightHeader .sf-with-ul, #header-outer .midnightHeader .cart-menu', function() {
                if ($(this).parents('.midnightHeader').offset().top - $(window).scrollTop() < 50) {
                    $(this).parents('.midnightHeader').css({ 'z-index': '9999' }).addClass('overflow');
                    $(this).parents('.midnightInner').css('overflow', 'visible');
                }
            });
            $('body').on('mouseleave', '#header-outer .midnightHeader', function() {
                var $that = $(this);
                clearTimeout($midnightSubmenuTimeout);
                $midnightSubmenuTimeout = setTimeout(function() {
                    if (!$that.is(':hover')) {
                        $that.css({ 'z-index': 'auto' }).removeClass('overflow');
                        $that.find('.midnightInner').css('overflow', 'hidden');
                    }
                }, 900);
            });
        }

        function midnightInit() {
            if ($('#header-outer[data-permanent-transparent="1"]').length > 0 && $('body[data-bg-header="true"]').length > 0) {
                $('#header-outer').midnight();
                if ($('#header-outer[data-format="menu-left-aligned"] #logo img:visible').length > 0) { $('#header-outer #logo').css({ 'width': $('#header-outer #logo img:visible').width(), 'height': $('#header-outer #logo img:visible').height() }); }
                if ($('#header-outer[data-has-menu="false"]').length > 0 && $('#header-outer[data-format="centered-logo-between-menu"]').length == 0) {
                    var $buttonsOffset = ($('#social-in-menu').length > 0) ? $('#social-in-menu').position() : $('#header-outer header#top nav > ul.buttons').position();
                    if ($('#header-outer #logo img:visible').length > 0) { var $logoOffset = $('#header-outer #logo img:visible').position(); var $logoOffsetTop = $('#header-outer #logo img:visible').position().top; var $logoMargin = parseInt($('#header-outer #logo img:visible').css('margin-top')); var $logoWidth = $('#header-outer #logo img:visible').width(); } else { var $logoOffset = $('#header-outer .span_3 #logo:visible').offset(); var $logoOffsetTop = $('#header-outer .span_3 #logo:visible').offset().top - $(window).scrollTop(); var $logoMargin = parseInt($('#header-outer .span_3 #logo:visible').css('margin-top')); var $logoWidth = $('#header-outer #logo').width(); }
                    var $bodyBorderSize = ($('.body-border-top').length > 0) ? $('.body-border-top').height() : 0;
                    var $containerMargin = parseInt($('#header-outer header > .container').css('padding-left'));
                    var $headerOffset = $('#header-outer').position();
                    $(window).on('smartresize', function() {
                        if ($('#header-outer #logo img').length > 0) {
                            $logoMargin = parseInt($('#header-outer #logo img:visible').css('margin-top'));
                            $logoOffset = $('#header-outer #logo img:visible').position();
                            $logoOffsetTop = $('#header-outer #logo img:visible').position().top;
                            $logoWidth = $('#header-outer #logo img:visible').width();
                        } else {
                            $logoMargin = parseInt($('#header-outer .span_3 #logo:visible').css('margin-top'));
                            $logoOffset = $('#header-outer .span_3 #logo:visible').offset();
                            $logoOffsetTop = $('#header-outer .span_3 #logo:visible').offset().top - $(window).scrollTop();
                            $logoWidth = $('#header-outer #logo').width();
                        }
                        $containerMargin = parseInt($('#header-outer header > .container').css('padding-left'));
                        $buttonsOffset = ($('#social-in-menu').length > 0) ? $('#social-in-menu').position() : $('#header-outer header#top nav > ul.buttons').position();
                        $headerOffset = $('#header-outer').position();
                    });
                    $('body').mousemove(function(e) { if ($('body.mobile').length == 0 && $('#header-outer header').length > 0) { if (e.clientX >= $buttonsOffset.left + $containerMargin && e.clientY >= $buttonsOffset.top + $bodyBorderSize && e.clientY <= $buttonsOffset.top + $headerOffset.top + $bodyBorderSize + $('#header-outer header#top nav > ul.buttons').height() || e.clientX <= $logoOffset.left + $containerMargin + $logoWidth && e.clientY >= $logoOffsetTop + $bodyBorderSize && e.clientY <= $logoOffsetTop + $logoMargin + $bodyBorderSize + $headerOffset.top + $('#header-outer #logo img:visible').height()) { $('.midnightHeader, #header-outer').removeClass('no-pointer-events'); } else { $('.midnightHeader, #header-outer').addClass('no-pointer-events'); } } else { $('.midnightHeader, #header-outer').removeClass('no-pointer-events'); } });
                } else if ($('#header-outer[data-has-menu="true"]').length > 0) {
                    var $headerPos = $('header#top .container').position();
                    var $headerOffset = $('header#top .container').offset();
                    var $bodyBorderSize = ($('.body-border-top').length > 0) ? $('.body-border-top').height() : 0;
                    $(window).on('smartresize', function() {
                        $headerPos = $('header#top .container').position();
                        $headerOffset = $('header#top .container').offset();
                    });
                    $('body').mousemove(function(e) { if ($('body.mobile').length == 0 && $('#header-outer header').length > 0) { if (e.clientX >= $headerOffset.left && e.clientY >= $headerPos.top + $bodyBorderSize && e.clientY <= $('header#top .container .row').height() + $bodyBorderSize) { $('.midnightHeader, #header-outer').removeClass('no-pointer-events'); } else if ($('li.sfHover').length == 0) { $('.midnightHeader, #header-outer').addClass('no-pointer-events'); } } else { $('.midnightHeader, #header-outer').removeClass('no-pointer-events'); } });
                }
            }
        }

        function getScrollbarWidth() {
            var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            outer.style.msOverflowStyle = "scrollbar";
            document.body.appendChild(outer);
            var widthNoScroll = outer.offsetWidth;
            outer.style.overflow = "scroll";
            var inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);
            var widthWithScroll = inner.offsetWidth;
            outer.parentNode.removeChild(outer);
            return widthNoScroll - widthWithScroll;
        }

        function boxRollInit() {
            if ($('.nectar-box-roll').length > 0) {
                $('body').attr('data-scrollbar-width', getScrollbarWidth());
                $('body, html, #ajax-content-wrap, .container-wrap, .blurred-wrap').addClass('no-scroll');
                $('body,html').stop().animate({ scrollTop: 0 }, 0);
                $('.container-wrap').css('opacity', 0).addClass('no-transform-animation-bottom-out').addClass('bottomBoxOut');
                if ($('.mobile').length == 0) $('#ajax-loading-screen .loading-icon > span').css({ 'left': '-' + getScrollbarWidth() / 2 + 'px' });
                var $overlaid = $('#page-header-bg .overlaid-content').clone();
                var $scrollDownOverlaid = $('.scroll-down-wrap').clone();
                $('#page-header-bg').removeAttr('data-midnight');
                $('#page-header-bg .overlaid-content, #page-header-bg .scroll-down-wrap').remove();
                $('.nectar-box-roll').append($overlaid).attr('data-midnight', 'light');
                $('.overlaid-content').append($scrollDownOverlaid);
                if ($('.page-submenu[data-sticky="true"]').length > 0) { $('.container-wrap').addClass('no-trans'); }
                nectarBoxRollContentHeight();
                setTimeout(function() { pageLoadHash(); }, 700);
            } else {
                $('#ajax-content-wrap, .blurred-wrap').addClass('at-content');
                $('body, html, #ajax-content-wrap, .container-wrap, .blurred-wrap').removeClass('no-scroll');
                $('.container-wrap').css('opacity', 1).removeClass('no-transform-animation-bottom-out').removeClass('bottomBoxOut').removeClass('bottomBoxIn');
                perspect = 'not-rolled';
            }
        }
        boxRollInit();

        function nectarBoxRollContentHeight() {
            var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-space').height();
            if ($('#header-outer[data-transparent-header="true"]').length == 0) {
                $('.nectar-box-roll .overlaid-content, .nectar-box-roll .canvas-bg, .container-wrap').css({ 'height': window.innerHeight - $headerNavSpace, 'min-height': window.innerHeight - $headerNavSpace });
                if ($('.mobile').length == 0 && $('body[data-header-format="left-header"]').length == 0) {
                    $('#ajax-content-wrap').css('margin-top', $headerNavSpace);
                    $('#slide-out-widget-area.fullscreen').css('margin-top', '-' + $headerNavSpace + 'px');
                } else $('#ajax-content-wrap, #slide-out-widget-area.fullscreen').css('margin-top', '0');
            } else { $('.nectar-box-roll .overlaid-content, .nectar-box-roll .canvas-bg, .container-wrap').css('height', window.innerHeight); }
        }
        if ($('.nectar-box-roll').length > 0) $(window).on('resize', nectarBoxRollContentHeight);
        var perspect = 'not-rolled';
        var animating = 'false';

        function boxRoll(e, d) {
            var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-space').height();
            if ($('#slide-out-widget-area.open').length > 0) return false;
            if ($('.nectar-box-roll canvas').length > 0 && $('.nectar-box-roll canvas[data-loaded="true"]').length == 0) return false;
            if (perspect == 'not-rolled' && animating == 'false' && d == -1) {
                perspect = 'rolled';
                animating = 'true';
                $('body').addClass('box-animating').addClass('box-perspective-rolled').addClass('box-rolling');
                $('.nectar-box-roll #page-header-bg').removeClass('topBoxIn').addClass('topBoxOut').css('will-change', 'transform');
                $('.nectar-box-roll .overlaid-content').removeClass('topBoxIn2').removeClass('topBoxIn').addClass('topBoxOut2').css('will-change', 'transform');
                $('.container-wrap').removeClass('bottomBoxOut').addClass('bottomBoxIn').removeClass('no-transform-animation-bottom-out').addClass('nectar-box-roll-class').css('will-change', 'transform');
                if ($('#header-outer[data-transparent-header="true"]').length == 0) {
                    $('.container-wrap').css({ 'height': $(window).height() - $headerNavSpace, 'opacity': 1 });
                    $('#slide-out-widget-area.fullscreen').css('margin-top', '0px');
                } else { $('.container-wrap').css({ 'height': $(window).height(), 'opacity': 1 }); }
                $('.nectar-slider-wrap').css({ 'opacity': 0 });
                updateRowRightPadding(d);
                pauseVideoBG();
                var timeout1 = 1220;
                var timeout2 = 1650;
                var timeout3 = 1700;
                var timeout4 = 1350;
                if ($('html.no-cssanimations').length > 0) {
                    timeout1 = 1;
                    timeout2 = 1;
                    timeout3 = 1;
                    timeout4 = 1;
                }
                $('.container-wrap').css('padding-right', $('body').attr('data-scrollbar-width') + 'px');
                setTimeout(function() {
                    $('#header-outer, #wpadminbar, .cart-outer .cart-menu, .midnightHeader .midnightInner').animate({ 'padding-right': $('body').attr('data-scrollbar-width') }, 250);
                    $('.nectar-box-roll .canvas-bg').addClass('out-of-sight');
                    if ($('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').removeClass('transparent');
                    if ($('body.mobile').length > 0) $('.nectar-box-roll').css({ 'z-index': '1' });
                }, timeout1);
                setTimeout(function() {
                    updateRowRightPadding(1);
                    $('body,html,#ajax-content-wrap, .container-wrap, .blurred-wrap').removeClass('no-scroll');
                    $('#ajax-content-wrap, .blurred-wrap').addClass('at-content');
                    $('.container-wrap, #footer-outer').removeClass('bottomBoxIn').removeClass('nectar-box-roll-class').addClass('auto-height');
                    $('#header-outer, #wpadminbar, .container-wrap, .cart-outer .cart-menu, .midnightHeader .midnightInner').stop().css('padding-right', 0);
                    if ($smoothActive == 1 && $(window).width() > 690 && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) { niceScrollInit(); }
                    $('.nectar-box-roll').css({ 'z-index': '-1000' }).transition({ 'y': '-200%' }, 0);
                    $('.nectar-box-roll canvas').hide();
                    $('body').removeClass('box-rolling');
                    $('.nectar-slider-wrap').transition({ 'opacity': 1 }, 600, 'easeOutCubic');
                    $('.nectar-box-roll #page-header-bg, .nectar-box-roll .overlaid-content, .container-wrap').css('will-change', 'auto');
                    if ($waypointsBound == false) waypoints();
                }, timeout2);
                setTimeout(function() { $('.container-wrap .main-content > .row > div > div[class*="col"]').css({ 'opacity': 1 }); }, timeout4);
                setTimeout(function() {
                    animating = 'false';
                    $('body').removeClass('box-animating');
                }, timeout3);
                if ($('#header-outer[data-permanent-transparent="1"]').length == 0 && $('.mobile').length == 0 && $('#header-outer[data-transparent-header="true"]').length != 0) { $('#ajax-content-wrap').transition({ 'margin-top': $('#header-outer').outerHeight(true) + $('#header-outer').offset().top }, 2000, 'easeInOutQuad'); }
                if ($('.mobile #header-outer[data-permanent-transparent="1"]').length > 0 && $('.mobile #header-outer[data-mobile-fixed="false"]').length == 1) $('#header-outer').transition({ 'y': '-100%' }, 400, 'easeOutCubic');
            } else if (perspect == 'rolled' && animating == 'false' && d == 1 && $(window).scrollTop() < 100) {
                $('.container-wrap').removeClass('auto-height');
                if ($('#header-outer[data-transparent-header="true"]').length == 0) { $('.container-wrap').css({ 'height': $(window).height() - $headerNavSpace, 'opacity': 1 }); } else { $('.container-wrap').css({ 'height': $(window).height(), 'opacity': 1 }); }
                $('#footer-outer').removeClass('auto-height');
                $('body').addClass('box-rolling');
                perspect = 'not-rolled';
                animating = 'true';
                $('body').addClass('box-animating').addClass('box-perspective-not-rolled');
                $('#header-outer, #wpadminbar, .container-wrap, .cart-outer .cart-menu, .midnightHeader .midnightInner').css('padding-right', $('body').attr('data-scrollbar-width') + 'px');
                $('.nectar-slider-wrap').transition({ 'opacity': 0 }, 600, 'easeOutCubic');
                $('.container-wrap .main-content > .row > div > div[class*="col"]').stop(true).css({ 'opacity': 0 });
                setTimeout(function() {
                    $('#header-outer, #wpadminbar, .cart-outer .cart-menu, .midnightHeader .midnightInner').animate({ 'padding-right': 0 }, 250);
                    $('.nectar-box-roll .canvas-bg').removeClass('out-of-sight');
                    resizeVideoToCover();
                    if ($('#header-outer[data-transparent-header="true"]').length != 0) { $('#ajax-content-wrap').stop(true, true).transition({ 'margin-top': 0 }, 2000, 'easeInOutCubic'); } else { if ($('.mobile').length == 0) $('#slide-out-widget-area.fullscreen').css('margin-top', '-' + $headerNavSpace + 'px'); }
                }, 30);
                var timeout1 = 1700;
                var timeout2 = 1600;
                var timeout3 = 1300;
                if ($('html.no-cssanimations').length > 0) {
                    timeout1 = 1;
                    timeout2 = 1;
                    timeout3 = 1;
                }
                if ($('body.mobile').length > 0) { setTimeout(function() { $('.nectar-box-roll').css('z-index', '1000'); }, timeout3); } else { $('.nectar-box-roll').css('z-index', '1000'); }
                updateRowRightPadding(d);
                removeNiceScroll();
                $('.nectar-box-roll').transition({ 'y': '0' }, 0);
                $('.nectar-box-roll canvas').show();
                setTimeout(function() {
                    updateRowRightPadding(1);
                    animating = 'false';
                    $('body').removeClass('box-animating');
                    $('#page-header-bg').removeClass('topBoxIn');
                    $('.overlaid-content').removeClass('topBoxIn2');
                    $('body').removeClass('box-rolling');
                    resumeVideoBG();
                    $('.nectar-box-roll #page-header-bg, .nectar-box-roll .overlaid-content, .container-wrap').css('will-change', 'auto');
                }, timeout1);
                setTimeout(function() { if ($('.mobile #header-outer[data-permanent-transparent="1"]').length > 0 && $('.mobile #header-outer[data-mobile-fixed="false"]').length == 1) $('#header-outer').transition({ 'y': '0%' }, 400, 'easeOutCubic'); }, timeout2);
                $('body,html,#ajax-content-wrap, .container-wrap, .blurred-wrap').addClass('no-scroll');
                $('#ajax-content-wrap, .blurred-wrap').removeClass('at-content');
                $('.container-wrap').addClass('nectar-box-roll-class');
                $('.nectar-box-roll #page-header-bg').removeClass('topBoxOut').addClass('topBoxIn').css('will-change', 'transform');
                $('.container-wrap').removeClass('bottomBoxIn').addClass('bottomBoxOut').css('will-change', 'transform');
                if ($('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').addClass('transparent');
                $('.nectar-box-roll .overlaid-content').removeClass('topBoxOut2').removeClass('topBoxOut').addClass('topBoxIn2').css('will-change', 'transform');
                if ($('#header-outer[data-header-resize="1"]').length > 0) { bigNav(); }
                $('.nectar-box-roll .trigger-scroll-down').removeClass('hovered');
            }
        }

        function boxScrollEvent(event, delta) {
            if ($('#slide-out-widget-area.open.fullscreen').length > 0) return false;
            boxRoll(event, delta);
        }

        function boxRollMouseWheelInit() { if ($('.nectar-box-roll').length > 0) { $('body').on("mousewheel", boxScrollEvent); } else { $('body').off("mousewheel", boxScrollEvent); } }
        boxRollMouseWheelInit();
        $('body').on('click', '.nectar-box-roll .section-down-arrow', function() {
            boxRoll(null, -1);
            $(this).addClass('hovered');
            setTimeout(function() { $('.nectar-box-roll .section-down-arrow').removeClass('hovered'); }, 2000);
            return false;
        });

        function updateRowRightPadding(d) {
            $('.wpb_row.full-width-section').each(function() { if ($(this).hasClass('extraPadding') && d == 1) { $(this).css('padding-right', parseInt($(this).css('padding-right')) - parseInt($('body').attr('data-scrollbar-width')) + 'px').removeClass('extraPadding'); } else { $(this).css('padding-right', parseInt($('body').attr('data-scrollbar-width')) + parseInt($(this).css('padding-right')) + 'px').addClass('extraPadding'); } });
            $('.wpb_row.full-width-content').each(function() { if ($(this).find('.row-bg.using-image').length == 0) { if ($(this).hasClass('extraPadding') && d == 1) { $(this).find('.row-bg').css('width', parseInt($(this).width()) - parseInt($('body').attr('data-scrollbar-width')) + 'px').removeClass('extraPadding'); } else { $(this).find('.row-bg').css('width', parseInt($('body').attr('data-scrollbar-width')) + $(this).width() + 'px').addClass('extraPadding'); } } });
        }

        function pauseVideoBG() { if ($('.nectar-box-roll video').length > 0) $('.nectar-box-roll video')[0].pause(); }

        function resumeVideoBG() { if ($('.nectar-box-roll video').length > 0) $('.nectar-box-roll video')[0].play(); }
        if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && $('.nectar-box-roll').length > 0) {
            $('body').swipe({
                tap: function(event, target) {
                    if ($(target).parents('.nectar-flip-box').length > 0)
                        $(target).parents('.nectar-flip-box').trigger('click');
                    if ($(target).is('.nectar-flip-box'))
                        $(target).trigger('click');
                },
                swipeStatus: function(event, phase, direction, distance, duration, fingers) {
                    if ($('#slide-out-widget-area.open').length > 0) return false;
                    if (direction == 'up') { boxRoll(null, -1); if ($('#ajax-content-wrap.no-scroll').length == 0) $('body').swipe("option", "allowPageScroll", 'vertical'); } else if (direction == "down" && $(window).scrollTop() == 0) {
                        boxRoll(null, 1);
                        $('body').swipe("option", "allowPageScroll", 'auto');
                    }
                }
            });
        }

        function removeNiceScroll() {
            if ($().niceScroll && $("html").getNiceScroll()) {
                var nice = $("html").getNiceScroll();
                nice.stop();
                $('html').removeClass('no-overflow-y');
                $('.nicescroll-rails').hide();
                if ($('#boxed').length == 0) { $('body, body #header-outer, body #header-secondary-outer, body #search-outer, .midnightHeader .midnightInner').css('padding-right', '0px'); } else if ($('body[data-ext-responsive="true"]').length == 0) { $('body').css('padding-right', '0px'); }
                $('body').attr('data-smooth-scrolling', '0');
            }
        }
        $waypointsBound = false;

        function waypoints() {
            colAndImgAnimations();
            progressBars();
            dividers();
            iconList();
            animated_titles();
            imageWithHotspots();
            clientsFadeIn();
            splitLineHeadings();
            svgAnimations();
            milestoneInit();
            nectar_fancy_ul_init();
            owl_carousel_animate();
            headerRowColorInheritInit();
            morphingOutlines();
            portfolioLoadIn();
            animatedColBorders();
            foodMenuItems();
            vcWaypoints();
            $waypointsBound = true;
        }
        var timeout;
        var productToAdd;
        var $dropdownStyle = ($('body[data-dropdown-style="minimal"]').length > 0) ? 'minimal' : 'default';
        $('body').on('click', '.product .add_to_cart_button', function() {
            productToAdd = $(this).parents('li').find('h3').text();
            $('#header-outer .cart-notification span.item-name').html(productToAdd);
        });
        $('body').on('mouseenter', '#header-outer .cart-notification', function() {
            if ($dropdownStyle == 'minimal') {
                $(this).hide();
                $('#header-outer .widget_shopping_cart').addClass('open').stop(true, true).show();
                $('#header-outer .cart_list').stop(true, true).show();
            } else {
                $(this).fadeOut(400);
                $('#header-outer .widget_shopping_cart').stop(true, true).fadeIn(300);
                $('#header-outer .cart_list').stop(true, true).fadeIn(300);
            }
            clearTimeout(timeout);
        });
        $('#header-outer div.cart-outer').hoverIntent(function() {
            if ($dropdownStyle == 'minimal') {
                $('#header-outer .widget_shopping_cart').addClass('open').stop(true, true).show()
                $('#header-outer .cart_list').stop(true, true).show();
                clearTimeout(timeout);
                $('#header-outer .cart-notification').hide();
            } else {
                $('#header-outer .widget_shopping_cart').addClass('open').stop(true, true).fadeIn(300);
                $('#header-outer .cart_list').stop(true, true).fadeIn(300);
                clearTimeout(timeout);
                $('#header-outer .cart-notification').fadeOut(300);
            }
        });
        $('body').on('mouseleave', '#header-outer div.cart-outer', function() {
            var $that = $(this);
            setTimeout(function() {
                if (!$that.is(':hover')) {
                    $('#header-outer .widget_shopping_cart').removeClass('open').stop(true, true).fadeOut(300);
                    $('#header-outer .cart_list').stop(true, true).fadeOut(300);
                }
            }, 100);
        });
        if ($('#header-outer[data-cart="false"]').length == 0) {
            $('body').on('added_to_cart', shopping_cart_dropdown_show);
            $('body').on('added_to_cart', shopping_cart_dropdown);
        }

        function shopping_cart_dropdown() {
            if (!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && $('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0) {
                $('.cart-menu-wrap').addClass('has_products');
                $('header#top nav > ul, #search-outer #search #close a').addClass('product_added');
                if (!$('.cart-menu-wrap').hasClass('static')) $('.cart-menu-wrap').addClass('first-load');
                if ($('#header-outer').hasClass('directional-nav-effect') && $('#header-outer .cart-icon-wrap .dark').length == 0 && $('body.ascend').length > 0) {
                    $('#header-outer .cart-outer .cart-icon-wrap').each(function() {
                        $(this).find('> i, > span.light, > span.dark, > span.original').remove();
                        $(this).append('<span class="dark"><span><i class="icon-salient-cart"></i></span></span><span class="light"><span><i class="icon-salient-cart"></i></span></span><span class="original"><span><i class="icon-salient-cart"></i></span></span>');
                        $(this).find('.original').attr('data-w', $(this).find('span.original').width() + 1);
                    });
                }
            }
        }

        function shopping_cart_dropdown_show(e) {
            clearTimeout(timeout);
            if (!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && $('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 && typeof e.type != 'undefined') {
                if (!$('#header-outer .cart-menu-wrap').hasClass('has_products')) { setTimeout(function() { $('#header-outer .cart-notification').fadeIn(400); }, 400); } else if (!$('#header-outer .cart-notification').is(':visible')) { $('#header-outer .cart-notification').fadeIn(400); } else { $('#header-outer .cart-notification').show(); }
                timeout = setTimeout(hideCart, 2700);
                $('.cart-menu a, .widget_shopping_cart a').addClass('no-ajaxy');
            }
        }

        function hideCart() { $('#header-outer .cart-notification').stop(true, true).fadeOut(); }

        function checkForWooItems() {
            var checkForCartItems = setInterval(shopping_cart_dropdown, 250);
            setTimeout(function() { clearInterval(checkForCartItems); }, 4500);
        }
        if ($('#header-outer[data-cart="false"]').length == 0) { checkForWooItems(); }
        var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0;
        var secondaryHeader = ($('#header-outer').attr('data-using-secondary') == '1') ? 32 : 0;

        function searchFieldCenter() {
            var $headerHeightSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-outer').outerHeight();
            $('#search-outer').css('top', $headerHeightSpace + extraHeight + secondaryHeader);
            $('#search-outer > #search #search-box').css('top', ($(window).height() / 2) - ($('#search-outer > #search input').height() / 2) - $headerHeightSpace);
        }
        $('body').on('mouseover', '.text_on_hover .product-wrap', function() { $(this).parent().addClass('hovered'); });
        $('body').on('mouseover', '.text_on_hover > a:first-child', function() { $(this).parent().addClass('hovered'); });
        $('body').on('mouseout', '.text_on_hover .product-wrap', function() { $(this).parent().removeClass('hovered'); });
        $('body').on('mouseout', '.text_on_hover > a:first-child', function() { $(this).parent().removeClass('hovered'); });
        if ($('.material.product').length > 0) {
            $productZindex = 101;
            $('body').on('mouseenter', '.material.product', function() {
                $productZindex++;
                $(this).css('z-index', $productZindex + 1);
            });
            $('body').on('mouseleave', '.material.product', function() {
                var $that = $(this);
                setTimeout(function() { if (!$that.is(':hover')) $that.css('z-index', 100); }, 280);
            });
            setInterval(function() {
                $('.material.product:not(:hover)').css('z-index', 100);
                $productZindex = 101;
            }, 10000);
        }
        $('body').on('click', '#sidebar .widget.woocommerce:not(.widget_price_filter) h4', function() {
            if ($(window).width() < 1000) {
                $(this).parent().find('> ul').slideToggle();
                $(this).parent().toggleClass('open-filter');
            }
        });
        $('body').on('mouseenter', '#header-outer [data-cart-style="slide_in"] .cart-menu-wrap', openRightCart);

        function openRightCart() {
            if ($('.nectar-slide-in-cart ul.cart_list li:not(.empty)').length > 0) {
                $('.nectar-slide-in-cart').addClass('open');
                $(window).on('mousemove.rightCartOffsetCheck', closeCartCheck);
            }
        }

        function closeCartCheck(e) {
            var $windowWidth = $(window).width();
            if (e.clientX < $windowWidth - 370 - $bodyBorderWidth) {
                $(window).off('mousemove.rightCartOffsetCheck', closeNavCheck);
                $('.nectar-slide-in-cart').removeClass('open');
            }
        }
        var $placeholder = $('#search input[type=text]').attr('data-placeholder');
        var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
        $('body').on('click', '#search-btn a', function() { return false; });
        $('body').on('mousedown', '#search-btn a:not(.inactive)', function() {
            if ($(this).hasClass('open-search')) { return false; }
            if ($('body').hasClass('ascend') || $('body[data-header-format="left-header"]').length > 0) {
                $('#search-outer > #search form, #search-outer #search .span_12 span').css('opacity', 0);
                $('#search-outer > #search form').css('bottom', '10px');
                $('#search-outer #search .span_12 span').css('top', '10px');
                $('#search-outer').show();
                $('#search-outer').stop().transition({ scale: '1,0', 'opacity': 1 }, 0).transition({ scale: '1,1' }, 400, 'easeInOutCubic');
                $('#search-outer > #search form').delay(400).animate({ 'opacity': 1, 'bottom': 0 }, 'easeOutCirc');
                $('#search-outer #search .span_12 span').delay(470).animate({ 'opacity': 1, 'top': 0 }, 'easeOutCirc');
            } else { $('#search-outer').stop(true).fadeIn(600, 'easeOutExpo'); }
            if ($('body[data-header-format="left-header"]').length == 0) { $('body:not(.ascend) #search-outer > #search input[type="text"]').css({ 'top': $('#search-outer').height() / 2 - $('#search-outer > #search input[type="text"]').height() / 2 }); }
            setTimeout(function() { $('#search input[type=text]').focus(); if ($('#search input[type=text]').attr('value') == $placeholder) { $('#search input[type=text]').setCursorPosition(0); } }, 300);
            if ($('body').hasClass('ascend') || $('body[data-header-format="left-header"]').length > 0) { searchFieldCenter(); }
            $(this).toggleClass('open-search');
            $('.slide-out-widget-area-toggle a:not(#toggle-nav).open:not(.animating)').trigger('click');
            return false;
        });
        $('body').on('keydown', '#search input[type=text]', function() { if ($(this).attr('value') == $placeholder) { $(this).attr('value', ''); } });
        $('body').on('keyup', '#search input[type=text]', function() {
            if ($(this).attr('value') == '') {
                $(this).attr('value', $placeholder);
                $(this).setCursorPosition(0);
            }
        });
        $('body').on('click', '#close', function() {
            closeSearch();
            $('#search-btn a').removeClass('open-search');
            return false;
        });
        $('body').on('blur', '#search-box input[type=text]', function(e) {
            closeSearch();
            $('#search-btn a').removeClass('open-search');
        });

        function closeSearch() {
            if ($('body').hasClass('ascend') || $('body[data-header-format="left-header"]').length > 0) {
                $('#search-outer').stop().transition({ 'opacity': 0 }, 300, 'easeOutCubic');
                $('#search-btn a').addClass('inactive');
                setTimeout(function() {
                    $('#search-outer').hide();
                    $('#search-btn a').removeClass('inactive');
                }, 300);
            } else { $('#search-outer').stop(true).fadeOut(450, 'easeOutExpo'); }
        }
        $('body').on('click', '#mobile-menu #mobile-search .container a#show-search', function() { $('#mobile-menu .container > ul').slideUp(500); return false; });

        function centeredLogoMargins() {
            if ($('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && $(window).width() > 1000) {
                $midnightSelector = ($('#header-outer .midnightHeader').length > 0) ? '> .midnightHeader:first-child' : '';
                var $navItemLength = $('#header-outer[data-format="centered-logo-between-menu"] ' + $midnightSelector + ' nav > .sf-menu > li').length;
                if ($('#header-outer #social-in-menu').length > 0) $navItemLength--;
                $centerLogoWidth = ($('#header-outer .row .col.span_3 #logo img:visible').length == 0) ? parseInt($('#header-outer .row .col.span_3').width()) : parseInt($('#header-outer .row .col.span_3 img:visible').width());
                $extraMenuSpace = ($('#header-outer[data-lhe="animated_underline"]').length > 0) ? parseInt($('#header-outer header#top nav > ul > li:first-child > a').css('margin-right')) : parseInt($('#header-outer header#top nav > ul > li:first-child > a').css('padding-right'));
                if ($extraMenuSpace > 30) { $extraMenuSpace += 45; } else if ($extraMenuSpace > 20) { $extraMenuSpace += 40; } else { $extraMenuSpace += 30; }
                $('#header-outer[data-format="centered-logo-between-menu"] nav > .sf-menu > li:nth-child(' + Math.floor($navItemLength / 2) + ')').css({ 'margin-right': ($centerLogoWidth + $extraMenuSpace) + 'px' }).addClass('menu-item-with-margin');
                $leftMenuWidth = 0;
                $rightMenuWidth = 0;
                $('#header-outer[data-format="centered-logo-between-menu"] ' + $midnightSelector + ' nav > .sf-menu > li:not(#social-in-menu)').each(function(i) { if (i + 1 <= Math.floor($navItemLength / 2)) { $leftMenuWidth += $(this).width(); } else { $rightMenuWidth += $(this).width(); } });
                $menuDiff = Math.abs($rightMenuWidth - $leftMenuWidth);
                if ($leftMenuWidth > $rightMenuWidth)
                    $('#header-outer .row > .col.span_9').css('padding-right', $menuDiff);
                else
                    $('#header-outer .row > .col.span_9').css('padding-left', $menuDiff);
                $('#header-outer[data-format="centered-logo-between-menu"] nav').css('visibility', 'visible');
            }
        }
        var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
        var headerPadding = parseInt($('#header-outer').attr('data-padding'));
        var usingLogoImage = $('#header-outer').attr('data-using-logo');
        if (isNaN(headerPadding) || headerPadding.length == 0) { headerPadding = 28; }
        if (isNaN(logoHeight) || usingLogoImage.length == 0) {
            usingLogoImage = false;
            logoHeight = 30;
        }
        if ($('header#top nav > ul li#search-btn a').length > 0) { $searchBtnHeight = $('header#top nav > ul li#search-btn a').height(); } else { $searchBtnHeight = 24; }

        function headerInit() {
            if ($('#header-outer[data-format="left-header"]').length > 0) return;
            $('#header-outer #logo img').css({ 'height': logoHeight, });
            $('#header-outer, .ascend #header-outer[data-full-width="true"][data-using-pr-menu="true"] header#top nav ul.buttons li.menu-item, .ascend #header-outer[data-full-width="true"][data-format="centered-menu"] header#top nav ul.buttons li#social-in-menu').css({ 'padding-top': headerPadding });
            if ($('body.mobile').length == 0) {
                $('header#top nav > ul > li:not(#social-in-menu) > a').css({ 'padding-bottom': Math.floor(((logoHeight / 2) - ($('header#top nav > ul > li > a').height() / 2)) + headerPadding), 'padding-top': Math.floor((logoHeight / 2) - ($('header#top nav > ul > li > a').height() / 2)) });
                $('header#top nav > ul > li#social-in-menu > a').css({ 'margin-bottom': Math.floor(((logoHeight / 2) - ($('header#top nav > ul > li#social-in-menu > a i').height() / 2)) + headerPadding), 'margin-top': Math.floor((logoHeight / 2) - ($('header#top nav > ul > li#social-in-menu > a i').height() / 2)) });
            }
            if ($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) { $('#header-outer .cart-menu').css({ 'padding-bottom': Math.ceil(((logoHeight / 2) - ($searchBtnHeight / 2)) + headerPadding), 'padding-top': Math.ceil(((logoHeight / 2) - ($searchBtnHeight / 2)) + headerPadding) }); }
            $('header#top nav > ul li#search-btn, header#top nav > ul li.slide-out-widget-area-toggle').css({ 'padding-bottom': (logoHeight / 2) - ($searchBtnHeight / 2), 'padding-top': (logoHeight / 2) - ($searchBtnHeight / 2) });
            if ($('body.ascend ').length > 0 && $('#header-outer[data-full-width="true"]').length > 0) {
                $('header#top nav > ul li#search-btn, header#top nav > ul li.slide-out-widget-area-toggle').css({ 'padding-top': 0, 'padding-bottom': 0 });
                $('header#top nav > ul.buttons').css({ 'margin-top': -headerPadding, 'height': Math.floor(logoHeight + headerPadding * 2) - 1 });
                $('header#top nav > ul li#search-btn a, header#top nav > ul li.slide-out-widget-area-toggle a').css({ 'visibility': 'visible', 'padding-top': Math.floor((logoHeight / 2) - ($searchBtnHeight / 2) + headerPadding), 'padding-bottom': Math.floor((logoHeight / 2) - ($searchBtnHeight / 2) + headerPadding) });
            }
            $('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').css({ 'top': $('header#top nav > ul.sf-menu > li > a').outerHeight() });
            setTimeout(function() { $('body:not(.ascend) #search-outer #search-box .ui-autocomplete').css({ 'top': parseInt($('#header-outer').outerHeight()) + 'px' }); }, 1000);
            $('body:not(.ascend) #search-outer #search-box .ui-autocomplete').css({ 'top': parseInt($('#header-outer').outerHeight()) + 'px' });
            if ($('.nectar-parallax-scene.first-section').length == 0) { if ($('#header-outer').attr('data-using-secondary') == '1') { if ($('#header-outer[data-mobile-fixed="false"]').length > 0 || $('body.mobile').length == 0) { $('#header-space').css('height', parseInt($('#header-outer').outerHeight()) + $('#header-secondary-outer').height()); } else { $('#header-space').css('height', parseInt($('#header-outer').outerHeight())); } } else { $('#header-space').css('height', $('#header-outer').outerHeight()); } }
            $('#header-outer .container, #header-outer .cart-menu').css('visibility', 'visible');
            centeredLogoMargins();
            if (usingLogoImage && $('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && $('header#top #logo img:first-child[src]').length > 0) {
                var tempLogoImg = new Image();
                tempLogoImg.src = $('header#top #logo img:first-child').attr('src');
                tempLogoImg.onload = function() { centeredLogoMargins(); };
            }
            if ($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
                $('body:not(.ascend) #search-outer, #search .container').css({ 'height': logoHeight + headerPadding * 2 });
                $('body:not(.ascend) #search-outer > #search input[type="text"]').css({ 'font-size': 43, 'height': '59px', 'top': ((logoHeight + headerPadding * 2) / 2) - $('#search-outer > #search input[type="text"]').height() / 2 });
                $('body:not(.ascend) #search-outer > #search #close a').css({ 'top': ((logoHeight + headerPadding * 2) / 2) - 8 });
            } else {
                $('body:not(.ascend) #search-outer, #search .container').css({ 'height': logoHeight + headerPadding * 2 + logoHeight + 17 });
                $('body:not(.ascend) #search-outer > #search input[type="text"]').css({ 'font-size': 43, 'height': '59px', 'top': ((logoHeight + headerPadding * 2) / 2) - ($('#search-outer > #search input[type="text"]').height() / 2) + logoHeight / 2 + 17 });
                $('body:not(.ascend) #search-outer > #search #close a').css({ 'top': ((logoHeight + headerPadding * 2) / 2) - 8 + logoHeight / 2 + 17 });
            }
        }
        $(window).load(function() { if ($(window).scrollTop() == 0) headerSpace(); });
        var headerResize = $('#header-outer').attr('data-header-resize');
        var headerHideUntilNeeded = $('body').attr('data-hhun');
        if ($('#header-outer[data-remove-fixed="1"]').length == 0) { if ($(window).scrollTop() != 0 && $('#header-outer.transparent[data-permanent-transparent="false"]').length == 1) $('#header-outer').removeClass('transparent'); }
        if (headerResize == 1 && headerHideUntilNeeded != '1') {
            headerInit();
            $(window).off('scroll.headerResizeEffect');
            if ($('#nectar_fullscreen_rows').length == 0) { $(window).on('scroll.headerResizeEffect', smallNav); } else if ($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) { $(window).on('scroll.headerResizeEffect', smallNav); }
        } else if (headerHideUntilNeeded != '1') {
            headerInit();
            $(window).off('scroll.headerResizeEffectOpaque');
            $(window).on('scroll.headerResizeEffectOpaque', opaqueCheck);
        } else if (headerHideUntilNeeded == '1') {
            headerInit();
            if ($('.nectar-box-roll').length > 0) $('#header-outer').addClass('at-top-before-box');
            var previousScroll = 0,
                menuOffset = $('#header-space').height() * 2,
                detachPoint = ($('body.mobile').length > 0) ? 150 : 600,
                hideShowOffset = 6;

            function hhunCalcs(e) {
                if ($('body.animated-scrolling').length > 0 && $('#header-outer.detached').length > 0) return false;
                if ($('#header-outer[data-mobile-fixed="false"]').length > 0 && $('body.mobile').length > 0) { $('#header-outer').removeClass('detached'); return false; }
                var currentScroll = $(this).scrollTop(),
                    scrollDifference = Math.abs(currentScroll - previousScroll);
                if (!$('#header-outer').hasClass('side-widget-open') && !$('#header-outer .slide-out-widget-area-toggle a').hasClass('animating')) {
                    if (currentScroll > menuOffset) {
                        if (currentScroll > detachPoint) {
                            if (!$('#header-outer').hasClass('detached'))
                                $('#header-outer').addClass('detached').removeClass('parallax-contained');
                            $('#header-outer').removeClass('no-transition');
                            if ($('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').removeClass('transparent');
                        }
                        if (scrollDifference >= hideShowOffset) {
                            if (currentScroll > previousScroll) {
                                if (!$('#header-outer').hasClass('invisible'))
                                    $('#header-outer').addClass('invisible').removeClass('at-top');
                                $('.page-submenu.stuck').css('transform', 'translateY(0px)').addClass('header-not-visible');
                            } else {
                                if ($('#header-outer').hasClass('invisible'))
                                    $('#header-outer').removeClass('invisible');
                                $('.page-submenu.stuck').css('transform', 'translateY(' + $('#header-outer').outerHeight() + 'px)').removeClass('header-not-visible');
                            }
                        }
                    } else {
                        $topDetachNum = ($('#header-outer[data-using-secondary="1"]').length > 0) ? 32 : 0;
                        if ($('.body-border-top').length > 0) { $topDetachNum = ($('#header-outer[data-using-secondary="1"]').length > 0) ? 32 + $('.body-border-top').height() : $('.body-border-top').height(); }
                        if (currentScroll <= $topDetachNum) {
                            $('#header-outer').removeClass('detached').addClass('at-top');
                            if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                                if ($('#header-outer[data-transparent-header="true"]').length > 0 && $('.nectar-box-roll').length == 0 && $('.megamenu.sfHover').length == 0) {
                                    $('#header-outer').addClass('transparent').css('transform', 'translateY(0)');
                                    $('#header-outer').removeClass('no-transition');
                                } else if ($('.nectar-box-roll').length > 0) $('#header-outer').css('transform', 'translateY(0)').addClass('at-top-before-box');
                            } else {
                                if ($('#header-outer[data-transparent-header="true"]').length > 0 && $('.nectar-box-roll').length == 0) $('#header-outer').addClass('transparent').css('transform', 'translateY(0)');
                                else if ($('.nectar-box-roll').length > 0) $('#header-outer').css('transform', 'translateY(0)').addClass('at-top-before-box');
                            }
                            if ($('.parallax_slider_outer').length > 0 || $('#page-header-bg[data-parallax="1"]').length > 0) $('#header-outer').addClass('parallax-contained').css('transform', 'translateY(0)');
                        }
                    }
                    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                        $('#header-outer').removeClass('invisible');
                        $('.page-submenu.stuck').css('transform', 'translateY(' + $('#header-outer').outerHeight() + 'px)').removeClass('header-not-visible');
                    }
                }
                previousScroll = currentScroll;
            }
            if ($('#header-outer[data-remove-fixed="1"]').length == 0) {
                hhunCalcs();
                $(window).scroll(hhunCalcs);
            }
        }
        if ($('#nectar_fullscreen_rows').length == 0) midnightInit();
        else($('#header-outer').attr('data-permanent-transparent', 'false'))
        var shrinkNum = 6;
        var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0;
        var $bodyBorderHeaderColorMatch = ($('.body-border-top').css('background-color') == '#ffffff' && $('body').attr('data-header-color') == 'light' || $('.body-border-top').css('background-color') == $('#header-outer').attr('data-user-set-bg')) ? true : false;
        if ($('#header-outer[data-shrink-num]').length > 0) shrinkNum = $('#header-outer').attr('data-shrink-num');

        function smallNav() {
            var $offset = $(window).scrollTop();
            var $windowWidth = $(window).width();
            if ($offset > 0 && $windowWidth > 1000) {
                if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                    if ($('#header-outer').attr('data-transparent-header') == 'true' && $('#header-outer.side-widget-open').length == 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0 && $('.megamenu.sfHover').length == 0) {
                        $('#header-outer').removeClass('transparent');
                        $('#header-outer').removeClass('no-transition');
                    }
                } else { if ($('#header-outer').attr('data-transparent-header') == 'true' && $('#header-outer.side-widget-open').length == 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').removeClass('transparent'); }
                $('.ns-loading-cover').hide();
                $('#header-outer, #search-outer').addClass('small-nav');
                $('#header-outer #logo img').stop(true, true).animate({ 'height': logoHeight - shrinkNum }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                $('#header-outer, .ascend #header-outer[data-full-width="true"][data-using-pr-menu="true"] header#top nav ul.buttons li.menu-item, .ascend #header-outer[data-full-width="true"][data-format="centered-menu"] header#top nav ul.buttons li#social-in-menu').stop(true, true).animate({ 'padding-top': Math.ceil(headerPadding / 1.8) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                if ($('#header-outer[data-format="centered-menu-under-logo"]').length > 0) { $('#header-outer .row > .span_3').stop(true, true).animate({ 'padding-bottom': Math.ceil(headerPadding / 1.8) }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                $('header#top nav > ul > li:not(#social-in-menu) > a').stop(true, true).animate({ 'padding-bottom': Math.floor((((logoHeight - shrinkNum) / 2) - ($('header#top nav > ul > li > a').height() / 2)) + headerPadding / 1.8), 'padding-top': Math.floor(((logoHeight - shrinkNum) / 2) - ($('header#top nav > ul > li > a').height() / 2)) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $('.body-border-top').length > 0 && $bodyBorderHeaderColorMatch == true) { $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({ 'padding': '0' }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                $('header#top nav > ul > li#social-in-menu > a').stop(true, true).animate({ 'margin-bottom': Math.floor((((logoHeight - shrinkNum) / 2) - ($('header#top nav > ul > li#social-in-menu > a').height() / 2)) + headerPadding / 1.8), 'margin-top': Math.floor(((logoHeight - shrinkNum) / 2) - ($('header#top nav > ul > li#social-in-menu > a').height() / 2)) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                $('header#top nav > ul > li.menu-item-with-margin').stop(true, true).animate({ 'margin-right': (parseInt($('header#top nav > ul > li.menu-item-with-margin').css('margin-right')) - parseInt(shrinkNum) * 3) + 'px' }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                if ($bodyBorderHeaderColorMatch == true) { $('.body-border-top').stop(true, true).animate({ 'margin-top': '-' + $('.body-border-top').height() + 'px' }, { queue: false, duration: 400, easing: 'easeOutCubic', complete: function() { $(this).css('margin-top', 0) } }); }
                if ($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) { $('#header-outer .cart-menu').stop(true, true).animate({ 'padding-top': Math.ceil(((logoHeight - shrinkNum) / 2) - ($searchBtnHeight / 2) + headerPadding / 1.7), 'padding-bottom': Math.ceil(((logoHeight - shrinkNum) / 2) - ($searchBtnHeight / 2) + headerPadding / 1.7) + 1 }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                if ($('body.ascend ').length > 0 && $('#header-outer[data-full-width="true"]').length > 0) {
                    $('header#top nav > ul.buttons').stop(true, true).animate({ 'margin-top': -Math.ceil(headerPadding / 1.8), 'height': Math.floor((headerPadding * 2) / 1.8 + logoHeight - shrinkNum) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('header#top nav > ul li#search-btn a, header#top nav > ul li.slide-out-widget-area-toggle a').stop(true, true).animate({ 'padding-top': Math.ceil(((logoHeight - shrinkNum) / 2) - ($searchBtnHeight / 2) + headerPadding / 1.7), 'padding-bottom': Math.ceil(((logoHeight - shrinkNum) / 2) - ($searchBtnHeight / 2) + headerPadding / 1.7) + 1 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                } else { $('header#top nav > ul li#search-btn, header#top nav > ul li.slide-out-widget-area-toggle').stop(true, true).animate({ 'padding-bottom': Math.ceil(((logoHeight - shrinkNum) / 2) - ($searchBtnHeight / 2)), 'padding-top': Math.ceil(((logoHeight - shrinkNum) / 2) - ($searchBtnHeight / 2)) }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                if ($('#header-outer[data-format="centered-menu-under-logo"]').length > 0) { $('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').stop(true, true).animate({ 'top': Math.floor($('header#top nav > ul > li > a').outerHeight()) }, { queue: false, duration: 250, easing: 'easeOutCubic' }); } else { $('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').stop(true, true).animate({ 'top': Math.floor($('header#top nav > ul > li > a').height() + (((logoHeight - shrinkNum) / 2) - ($('header#top nav > ul > li > a').height() / 2)) * 2 + headerPadding / 1.8), }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                $('body:not(.ascend) #search-outer #search-box .ui-autocomplete').stop(true, true).animate({ 'top': Math.floor((logoHeight - shrinkNum) + (headerPadding * 2) / 1.8) + 'px' }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                if ($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
                    $('body:not(.ascend) #search-outer, #search .container').stop(true, true).animate({ 'height': Math.floor((logoHeight - shrinkNum) + (headerPadding * 2) / 1.8) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('body:not(.ascend) #search-outer > #search input[type="text"]').stop(true, true).animate({ 'font-size': 30, 'line-height': '30px', 'height': '44px', 'top': ((logoHeight - shrinkNum + headerPadding + 5) / 2) - ($('#search-outer > #search input[type="text"]').height() - 15) / 2 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('body:not(.ascend) #search-outer > #search #close a').stop(true, true).animate({ 'top': ((logoHeight - shrinkNum + headerPadding + 5) / 2) - 10 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                } else {
                    $('body:not(.ascend) #search-outer, #search .container').stop(true, true).animate({ 'height': Math.floor((logoHeight - shrinkNum) + (headerPadding * 2) / 1.8) + logoHeight - shrinkNum + 17 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('body:not(.ascend) #search-outer > #search input[type="text"]').stop(true, true).animate({ 'font-size': 30, 'line-height': '30px', 'height': '44px', 'top': ((logoHeight - shrinkNum + headerPadding + 5) / 2) - ($('#search-outer > #search input[type="text"]').height() - 15) / 2 + (logoHeight - shrinkNum) / 2 + 8 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('body:not(.ascend) #search-outer > #search #close a').stop(true, true).animate({ 'top': ((logoHeight - shrinkNum + headerPadding + 5) / 2) - 10 + (logoHeight - shrinkNum) / 2 + 8 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                }
                if ($('.nectar-box-roll').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#ajax-content-wrap').animate({ 'margin-top': (Math.floor((logoHeight - shrinkNum) + (headerPadding * 2) / 1.8 + extraHeight + secondaryHeader)) }, { queue: false, duration: 250, easing: 'easeOutCubic' })
                if ($('body').hasClass('ascend')) { $('#search-outer').stop(true, true).animate({ 'top': Math.floor((logoHeight - shrinkNum) + (headerPadding * 2) / 1.8 + extraHeight + secondaryHeader) }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                if (usingLogoImage == false) $('header#top #logo').stop(true, true).animate({ 'margin-top': 0 }, { queue: false, duration: 450, easing: 'easeOutExpo' });
                $(window).off('scroll', smallNav);
                $(window).on('scroll', bigNav);
                $('#header-outer[data-transparent-header="true"]').css('transition', 'background-color 0.30s ease, box-shadow 0.30s ease, margin 0.25s ease-out');
                $('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'none');
                setTimeout(function() {
                    $('#header-outer[data-transparent-header="true"]').css('transition', 'background-color 0.30s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out');
                    $('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'border-color 0.30s ease');
                }, 300);
            }
        }

        function bigNav() {
            var $offset = $(window).scrollTop();
            var $windowWidth = $(window).width();
            if ($offset == 0 && $windowWidth > 1000 || $('.small-nav').length > 0 && $('#ajax-content-wrap.no-scroll').length > 0 || $('.small-nav').length > 0 && $('.slide-out-from-right-hover.open').length > 0 || $('.small-nav').length > 0 && $('.slide-out-from-right.open').length > 0 && $bodyBorderHeaderColorMatch == true) {
                $('#header-outer, #search-outer').removeClass('small-nav');
                if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                    if ($('#header-outer').attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0 && $('.megamenu.sfHover').length == 0) {
                        $('#header-outer').addClass('transparent');
                        $('#header-outer').removeClass('no-transition');
                    }
                } else { if ($('#header-outer').attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0) $('#header-outer').addClass('transparent'); }
                $('.ns-loading-cover').show();
                $('#header-outer #logo img').stop(true, true).animate({ 'height': logoHeight, }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $('.body-border-top').length > 0 && $bodyBorderHeaderColorMatch == true) { $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({ 'padding': '0 28px' }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                $('#header-outer, .ascend #header-outer[data-full-width="true"][data-using-pr-menu="true"] header#top nav ul.buttons li.menu-item, .ascend #header-outer[data-full-width="true"][data-format="centered-menu"] header#top nav ul.buttons li#social-in-menu').stop(true, true).animate({ 'padding-top': headerPadding }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                if ($('#header-outer[data-format="centered-menu-under-logo"]').length > 0) { $('#header-outer .row > .span_3').stop(true, true).animate({ 'padding-bottom': headerPadding }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                $('header#top nav > ul > li:not(#social-in-menu) > a').stop(true, true).animate({ 'padding-bottom': ((logoHeight / 2) - ($('header#top nav > ul > li > a').height() / 2)) + headerPadding, 'padding-top': (logoHeight / 2) - ($('header#top nav > ul > li > a').height() / 2) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                $('header#top nav > ul > li#social-in-menu > a').stop(true, true).animate({ 'margin-bottom': ((logoHeight / 2) - ($('header#top nav > ul > li#social-in-menu > a').height() / 2)) + headerPadding, 'margin-top': (logoHeight / 2) - ($('header#top nav > ul > li#social-in-menu > a').height() / 2) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                $('header#top nav > ul > li.menu-item-with-margin').stop(true, true).animate({ 'margin-right': (parseInt($('header#top nav > ul > li.menu-item-with-margin').css('margin-right')) + parseInt(shrinkNum) * 3) + 'px' }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                if ($bodyBorderHeaderColorMatch == true) { $('.body-border-top').css({ 'margin-top': '-' + $('.body-border-top').height() + 'px' }).stop(true, true).animate({ 'margin-top': '0' }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                if ($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) { $('#header-outer .cart-menu').stop(true, true).animate({ 'padding-bottom': Math.ceil(((logoHeight / 2) - ($searchBtnHeight / 2)) + headerPadding), 'padding-top': Math.ceil(((logoHeight / 2) - ($searchBtnHeight / 2)) + headerPadding) }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                if ($('body.ascend ').length > 0 && $('#header-outer[data-full-width="true"]').length > 0) {
                    $('header#top nav > ul.buttons').stop(true, true).animate({ 'margin-top': -Math.ceil(headerPadding), 'height': Math.floor(headerPadding * 2 + logoHeight) - 1 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('header#top nav > ul li#search-btn a, header#top nav > ul li.slide-out-widget-area-toggle a').stop(true, true).animate({ 'padding-top': Math.floor((logoHeight / 2) - ($searchBtnHeight / 2) + headerPadding), 'padding-bottom': Math.floor((logoHeight / 2) - ($searchBtnHeight / 2) + headerPadding) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                } else { $('header#top nav > ul li#search-btn, header#top nav > ul li.slide-out-widget-area-toggle').stop(true, true).animate({ 'padding-bottom': Math.floor((logoHeight / 2) - ($searchBtnHeight / 2)), 'padding-top': Math.ceil((logoHeight / 2) - ($searchBtnHeight / 2)) }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                if ($('#header-outer[data-format="centered-menu-under-logo"]').length > 0) { $('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').stop(true, true).animate({ 'top': Math.floor($('header#top nav > ul > li > a').outerHeight()) }, { queue: false, duration: 250, easing: 'easeOutCubic' }); } else { $('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').stop(true, true).animate({ 'top': Math.ceil($('header#top nav > ul > li > a').height() + (((logoHeight) / 2) - ($('header#top nav > ul > li > a').height() / 2)) * 2 + headerPadding), }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                $('body:not(.ascend) #search-outer #search-box .ui-autocomplete').stop(true, true).animate({ 'top': Math.ceil(logoHeight + headerPadding * 2) + 'px' }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                if ($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
                    $('body:not(.ascend) #search-outer, #search .container').stop(true, true).animate({ 'height': Math.ceil(logoHeight + headerPadding * 2) }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('body:not(.ascend) #search-outer > #search input[type="text"]').stop(true, true).animate({ 'font-size': 43, 'line-height': '43px', 'height': '59px', 'top': ((logoHeight + headerPadding * 2) / 2) - 30 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('body:not(.ascend) #search-outer > #search #close a').stop(true, true).animate({ 'top': ((logoHeight + headerPadding * 2) / 2) - 8 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                } else {
                    $('body:not(.ascend) #search-outer, #search .container').stop(true, true).animate({ 'height': Math.ceil(logoHeight + headerPadding * 2) + logoHeight + 17 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('body:not(.ascend) #search-outer > #search input[type="text"]').stop(true, true).animate({ 'font-size': 43, 'line-height': '43px', 'height': '59px', 'top': ((logoHeight + headerPadding * 2) / 2) - 30 + (logoHeight) / 2 + 8 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                    $('body:not(.ascend) #search-outer > #search #close a').stop(true, true).animate({ 'top': ((logoHeight + headerPadding * 2) / 2) - 8 + (logoHeight) / 2 + 8 }, { queue: false, duration: 250, easing: 'easeOutCubic' });
                }
                if ($('body').hasClass('ascend')) { $('#search-outer').stop(true, true).animate({ 'top': (logoHeight) + (headerPadding * 2) + extraHeight + secondaryHeader }, { queue: false, duration: 250, easing: 'easeOutCubic' }); }
                if (usingLogoImage == false) $('header#top #logo').stop(true, true).animate({ 'margin-top': 4 }, { queue: false, duration: 450, easing: 'easeOutExpo' });
                if ($('.nectar-box-roll').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#ajax-content-wrap').animate({ 'margin-top': (Math.floor((logoHeight) + (headerPadding * 2) + extraHeight + secondaryHeader)) }, { queue: false, duration: 250, easing: 'easeOutCubic' })
                $(window).off('scroll', bigNav);
                $(window).on('scroll', smallNav);
                $('#header-outer[data-transparent-header="true"]').css('transition', 'background-color 0.30s ease, box-shadow 0.30s ease, margin 0.25s ease-out');
                $('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'none');
                setTimeout(function() {
                    $('#header-outer[data-transparent-header="true"]').css('transition', 'background-color 0.30s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out');
                    $('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'border-color 0.30s ease');
                }, 300);
            }
        }

        function headerSpace() {
            if ($('.mobile').length > 0) {
                if (window.innerHeight < window.innerWidth && window.innerWidth > 1000) {
                    if ($('#header-outer.small-nav').length == 0)
                        $('#header-space').css('height', $('#header-outer').outerHeight() + $('#header-secondary-outer').height());
                } else { $('#header-space').css('height', $('#header-outer').outerHeight()); }
            } else { if ($('.nectar-parallax-scene.first-section').length == 0) { var shrinkNum = 6; var headerPadding = parseInt($('#header-outer').attr('data-padding')); if ($('#header-outer[data-shrink-num]').length > 0) shrinkNum = $('#header-outer').attr('data-shrink-num'); var headerPadding2 = headerPadding - headerPadding / 1.8; var $headerHeight = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.small-nav').length > 0) ? $('#header-outer').outerHeight() + (parseInt(shrinkNum) + headerPadding2 * 2) : $('#header-outer').outerHeight(); if ($('#header-outer').attr('data-using-secondary') == '1') { $('#header-space').css('height', $headerHeight + $('#header-secondary-outer').height()); } else { $('#header-space').css('height', $headerHeight); } } }
        }
        if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/) && $('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#header-outer[data-permanent-transparent="false"]').length > 0) { $('#header-space').css('height', $('#header-outer').outerHeight()); }
        var lastPosition = -1;

        function headerOffsetAdjust() {
            var $scrollTop = $(window).scrollTop();
            if (lastPosition == $scrollTop) { requestAnimationFrame(headerOffsetAdjust); return false; } else lastPosition = $scrollTop;
            headerOffsetAdjustCalc();
            requestAnimationFrame(headerOffsetAdjust);
        }

        function headerOffsetAdjustCalc() {
            if ($('body.mobile').length > 0) {
                var $eleHeight = 0;
                var $endOffset = ($('#wpadminbar').css('position') == 'fixed') ? $('#wpadminbar').height() : 0;
                if ($('#header-secondary-outer').length > 0) $eleHeight += $('#header-secondary-outer').height();
                if ($('#wpadminbar').length > 0) $eleHeight += $('#wpadminbar').height();
                if ($eleHeight - $scrollTop > $endOffset) { $('#header-outer').css('top', $eleHeight - $scrollTop + 'px'); } else { $('#header-outer').css('top', $endOffset); }
            } else {
                var $eleHeight = 0;
                if ($('#header-secondary-outer').length > 0) $eleHeight += $('#header-secondary-outer').height();
                if ($('#wpadminbar').length > 0) $eleHeight += $('#wpadminbar').height();
                $('#header-outer').css('top', $eleHeight + 'px');
            }
        }
        if ($('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#wpadminbar').length > 0 || $('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#header-secondary-outer').length > 0) {
            if ($('#nectar_fullscreen_rows').length == 0) requestAnimationFrame(headerOffsetAdjust);
            $(window).smartresize(headerOffsetAdjustCalc);
        }

        function footerRevealCalcs() {
            var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-outer').outerHeight();
            if ($(window).height() - $('#wpadminbar').height() - $headerNavSpace - $('#footer-outer').height() - 1 - $('#page-header-bg').height() - $('.parallax_slider_outer').height() - $('.page-header-no-bg').height() > 0) {
                $resizeExtra = ($('#header-outer[data-header-resize="1"]').length > 0) ? 55 : 0;
                $('.container-wrap').css({ 'margin-bottom': $('#footer-outer').height() - 1, 'min-height': $(window).height() - $('#wpadminbar').height() - $headerNavSpace - $('#footer-outer').height() - 1 - $('.page-header-no-bg').height() - $('#page-header-bg').height() - $('.parallax_slider_outer').height() + $resizeExtra });
            } else { $('.container-wrap').css({ 'margin-bottom': $('#footer-outer').height() - 1 }); }
            if ($(window).width() < 1000) $('#footer-outer').attr('data-midnight', 'light');
            else $('#footer-outer').removeAttr('data-midnight');
        }
        if ($('body[data-footer-reveal="1"]').length > 0) { footerRevealCalcs(); if ($('body[data-footer-reveal-shadow="large_2"]').length > 0) $('.container-wrap').css({ boxShadow: '0 70px 110px -30px ' + $('#footer-outer').css('backgroundColor') }); }

        function opaqueCheck() {
            var $offset = $(window).scrollTop();
            var $windowWidth = $(window).width();
            if ($offset > 0 && $windowWidth > 1000) {
                if ($('#header-outer').attr('data-transparent-header') == 'true' && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').removeClass('transparent').addClass('scrolled-down');
                $('.ns-loading-cover').hide();
                $(window).off('scroll', opaqueCheck);
                $(window).on('scroll', transparentCheck);
            }
        }

        function transparentCheck() {
            var $offset = $(window).scrollTop();
            var $windowWidth = $(window).width();
            if ($offset == 0 && $windowWidth > 1000) {
                if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                    if ($('#header-outer').attr('data-transparent-header') == 'true' && $('.megamenu.sfHover').length == 0) {
                        $('#header-outer').addClass('transparent').removeClass('scrolled-down');
                        $('#header-outer').removeClass('no-transition');
                    } else if ($('#header-outer').attr('data-transparent-header') == 'true') $('#header-outer').removeClass('scrolled-down');
                } else { if ($('#header-outer').attr('data-transparent-header') == 'true') $('#header-outer').addClass('transparent').removeClass('scrolled-down'); }
                $('.ns-loading-cover').show();
                $(window).off('scroll', transparentCheck);
                $(window).on('scroll', opaqueCheck);
            }
        }
        var adminBarHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0;

        function headerRowColorInheritInit() {
            if ($('body[data-header-inherit-rc="true"]').length > 0 && $('.mobile').length == 0) {
                var headerOffset = ($('#header-outer[data-permanent-transparent="1"]').length == 0) ? (logoHeight - shrinkNum) + Math.ceil((headerPadding * 2) / 1.8) + adminBarHeight : logoHeight / 2 + headerPadding + adminBarHeight;
                $('.main-content > .row > .wpb_row').each(function() {
                    var $that = $(this);
                    var waypoint = new Waypoint({
                        element: $that,
                        handler: function(direction) {
                            if (direction == 'down') {
                                if ($that.find('.row-bg.using-bg-color').length > 0) {
                                    var $textColor = ($that.find('> .col.span_12.light').length > 0) ? 'light-text' : 'dark-text';
                                    $('#header-outer').css('background-color', $that.find('.row-bg').css('background-color')).removeClass('light-text').removeClass('dark-text').addClass($textColor);
                                    $('#header-outer').attr('data-current-row-bg-color', $that.find('.row-bg').css('background-color'));
                                } else {
                                    $('#header-outer').css('background-color', $('#header-outer').attr('data-user-set-bg')).removeClass('light-text').removeClass('dark-text');
                                    $('#header-outer').attr('data-current-row-bg-color', $('#header-outer').attr('data-user-set-bg'));
                                }
                            } else {
                                if ($that.prev('div.wpb_row').find('.row-bg.using-bg-color').length > 0) {
                                    var $textColor = ($that.prev('div.wpb_row').find('> .col.span_12.light').length > 0) ? 'light-text' : 'dark-text';
                                    $('#header-outer').css('background-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color')).removeClass('light-text').removeClass('dark-text').addClass($textColor);
                                    $('#header-outer').attr('data-current-row-bg-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color'));
                                } else {
                                    $('#header-outer').css('background-color', $('#header-outer').attr('data-user-set-bg')).removeClass('light-text').removeClass('dark-text');
                                    $('#header-outer').attr('data-current-row-bg-color', $('#header-outer').attr('data-user-set-bg'));
                                }
                            }
                        },
                        offset: headerOffset
                    });
                });
            }
        }
        if ($('.page-submenu[data-sticky="true"]').length > 0 && $('#nectar_fullscreen_rows').length == 0) {
            (function() {
                'use strict'
                var $ = window.jQuery
                var Waypoint = window.Waypoint
                var $offsetHeight = 0;
                var shrinkNum = 6;
                var headerPadding = parseInt($('#header-outer').attr('data-padding'));
                if ($('#header-outer[data-shrink-num]').length > 0) shrinkNum = $('#header-outer').attr('data-shrink-num');
                var headerPadding2 = headerPadding - headerPadding / 1.8;
                var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-outer').outerHeight();
                var $headerHeight = ($('#header-outer[data-header-resize="1"]').length > 0 && $('body.mobile').length == 0) ? $headerNavSpace - (parseInt(shrinkNum) + headerPadding2 * 2) : $headerNavSpace;
                if ($('#header-secondary-outer').length > 0 && $('body.mobile').length == 0) $headerHeight += $('#header-secondary-outer').height();
                $(window).on('smartresize', function() {
                    $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-outer').outerHeight();
                    $headerHeight = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.small-nav').length == 0 && $('body.mobile').length == 0) ? $headerNavSpace - (parseInt(shrinkNum) + headerPadding2 * 2) : $headerNavSpace;
                    if ($('#header-secondary-outer').length > 0 && $('body.mobile').length == 0) $headerHeight += $('#header-secondary-outer').height();
                    $offsetHeight = 0;
                    if ($('#wpadminbar').length > 0 && $('#wpadminbar').css('position') == 'fixed') $offsetHeight += $('#wpadminbar').height();
                    if ($('body[data-hhun="0"] #header-outer').length > 0 && !($('body.mobile').length > 0 && $('#header-outer[data-mobile-fixed="false"]').length > 0)) { $offsetHeight += $headerHeight; }
                    if ($('.page-submenu.stuck').length > 0) {
                        $('.page-submenu.stuck').addClass('no-trans').css('top', $offsetHeight).css('transform', 'translateY(0)').addClass('stuck');
                        var $that = this;
                        setTimeout(function() { $('.page-submenu.stuck').removeClass('no-trans'); }, 50);
                        $('.page-submenu.stuck').parents('.wpb_row').css('z-index', 10000);
                        if ($('#boxed').length > 0) {
                            var $negMargin = ($(window).width() > 1000) ? $('.container-wrap').width() * 0.04 : 39;
                            $('.page-submenu.stuck').css({ 'margin-left': '-' + $negMargin + 'px', 'width': $('.container-wrap').width() });
                        }
                    } else {
                        $('.page-submenu.stuck').css('top', '0').removeClass('stuck');
                        $('.page-submenu.stuck').parents('.wpb_row').css('z-index', 'auto');
                        if ($('#boxed').length > 0) $('.page-submenu.stuck').css({ 'margin-left': '0px', 'width': '100%' });
                    }
                });

                function Sticky(options) {
                    this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options)
                    this.element = this.options.element
                    this.$element = $(this.element)
                    this.createWrapper()
                    this.createWaypoint()
                }
                Sticky.prototype.createWaypoint = function() {
                    var originalHandler = this.options.handler
                    $offsetHeight = 0;
                    if ($('#wpadminbar').length > 0 && $('#wpadminbar').css('position') == 'fixed') $offsetHeight += $('#wpadminbar').height();
                    if ($('body[data-hhun="0"] #header-outer').length > 0 && !($('body.mobile').length > 0 && $('#header-outer[data-mobile-fixed="false"]').length > 0)) { $offsetHeight += $headerHeight; }
                    this.waypoint = new Waypoint($.extend({}, this.options, {
                        element: this.wrapper,
                        handler: $.proxy(function(direction) {
                            var shouldBeStuck = this.options.direction.indexOf(direction) > -1
                            var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : ''
                            this.$wrapper.height(wrapperHeight)
                            if (shouldBeStuck) {
                                this.$element.addClass('no-trans').css('top', $offsetHeight).css('transform', 'translateY(0)').addClass('stuck');
                                var $that = this;
                                setTimeout(function() { $that.$element.removeClass('no-trans'); }, 50);
                                this.$element.parents('.wpb_row').css('z-index', 10000);
                                if ($('#boxed').length > 0) {
                                    var $negMargin = ($(window).width() > 1000) ? $('.container-wrap').width() * 0.04 : 39;
                                    this.$element.css({ 'margin-left': '-' + $negMargin + 'px', 'width': $('.container-wrap').width() });
                                }
                            } else { this.$element.css('top', '0').removeClass('stuck'); if ($('#boxed').length > 0) this.$element.css({ 'margin-left': '0px', 'width': '100%' }); }
                            if (originalHandler) { originalHandler.call(this, direction) }
                        }, this),
                        offset: $offsetHeight
                    }))
                    var $that = this;
                    setInterval(function() {
                        if ($('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length > 0)
                            $that.waypoint.options.offset = $offsetHeight + $headerHeight;
                        else
                            $that.waypoint.options.offset = $offsetHeight;
                        Waypoint.refreshAll();
                    }, 100);
                }
                Sticky.prototype.createWrapper = function() {
                    if (this.options.wrapper) { this.$element.wrap(this.options.wrapper) }
                    this.$wrapper = this.$element.parent()
                    this.wrapper = this.$wrapper[0]
                }
                Sticky.prototype.destroy = function() {
                    if (this.$element.parent()[0] === this.wrapper) {
                        this.waypoint.destroy()
                        this.$element.removeClass(this.options.stuckClass)
                        if (this.options.wrapper) { this.$element.unwrap() }
                    }
                }
                Sticky.defaults = { wrapper: '<div class="sticky-wrapper" />', stuckClass: 'stuck', direction: 'down right' }
                Waypoint.Sticky = Sticky
            }());
            if ($('.page-submenu').parents('.span_12').find('> .wpb_column').length > 1) {
                var pageMenu = $('.page-submenu').clone();
                var pageMenuParentRow = $('.page-submenu').parents('.wpb_row');
                $('.page-submenu').remove();
                pageMenuParentRow.before(pageMenu);
            }
            var sticky = new Waypoint.Sticky({ element: $('.page-submenu[data-sticky="true"]')[0] });
        }
        if ($('#nectar_fullscreen_rows').length == 0)
            $('.page-submenu').parents('.wpb_row').css('z-index', 10000);
        $('.page-submenu .mobile-menu-link').on('click', function() { $(this).parents('.page-submenu').find('ul').stop(true).slideToggle(350); return false; });
        $('.page-submenu ul li a').on('click', function() { if ($('body.mobile').length > 0) $(this).parents('.page-submenu').find('ul').stop(true).slideToggle(350); });
        $('body').on('click', '#toggle-nav', function() {
            $(this).find('.lines-button').toggleClass('close');
            $('#mobile-menu').stop(true, true).slideToggle(500);
            return false;
        });
        if ($('header#top nav > ul > li.menu-item-language').length > 0 && $('#header-secondary-outer ul > li.menu-item-language').length == 0) {
            var $langSelector = $('header#top nav > ul > li.menu-item-language').clone();
            $langSelector.insertBefore('#mobile-menu ul #mobile-search');
        }
        $('#mobile-menu .container ul li').each(function() {
            if ($(this).find('> ul').length > 0) {
                $(this).addClass('has-ul');
                $(this).find('> a').append('<span class="sf-sub-indicator"><i class="icon-angle-down"></i></span>');
            }
        });
        $('#mobile-menu .container ul li:has(">ul") > a .sf-sub-indicator').click(function() {
            $(this).parent().parent().toggleClass('open');
            $(this).parent().parent().find('> ul').stop(true, true).slideToggle();
            return false;
        });

        function vcFullHeightRow() {
            var $element = $(".vc_row-o-full-height:first");
            if ($element.length) {
                var $window, windowHeight, offsetTop, fullHeight;
                $window = $(window), windowHeight = $window.height();
                $(".vc_row-o-full-height").each(function() {
                    offsetTop = $(this).offset().top;
                    if (offsetTop < windowHeight && $(this).index() == 0) {
                        fullHeight = 100 - offsetTop / (windowHeight / 100);
                        $(this).css("min-height", fullHeight + "vh");
                        $(this).find('> .col.span_12').css("min-height", fullHeight + "vh");
                    } else {
                        $(this).css("min-height", windowHeight);
                        $(this).find('> .col.span_12').css("min-height", windowHeight);
                    }
                });
            }
        }

        function fixIeFlexbox() {
            var ua = window.navigator.userAgent,
                msie = ua.indexOf("MSIE ");
            (msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() { "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>') })
        }
        fixIeFlexbox();
        vcFullHeightRow();

        function piVertCenter() { $('.portfolio-items  > .col').each(function() { $(this).find('.style-4 .work-info .bottom-meta:not(.shown)').stop().animate({ 'bottom': '-' + $(this).find('.work-info .bottom-meta').outerHeight() - 2 + 'px' }, 420, 'easeOutCubic'); }); }
        $(window).load(function() {
            portfolioCommentOrder();
            fullWidthContentColumns();
            resizeVideoToCover();
        });

        function ie8Width() { if ($(window).width() >= 1300) { $('.container').css('max-width', '1100px'); } else { $('.container').css('max-width', '880px'); } }
        if ($(window).width() >= 1300 && $('html').hasClass('no-video')) {
            $('.container').css('max-width', '1100px');
            $(window).resize(ie8Width);
        };

        function smartResizeInit() {
            carouselHeightCalcs();
            clientsCarouselHeightRecalc();
            portfolioCommentOrder();
            testimonialHeightResize();
            testimonialSliderHeight();
            fullWidthContentColumns();
            if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)) { parallaxRowsBGCals(); }
            vcFullHeightRow();
            headerSpace();
            centeredLogoMargins();
            slideOutWidgetOverflowState();
            recentPostHeight();
            morphingOutlines();
            flipBoxHeights();
            showOnLeftSubMenu();
            if ($('.tabbed[data-style="minimal_alt"]').length > 0) { magicLineCalc($('.tabbed[data-style="minimal_alt"] > ul > li > a.active-tab')); }
        }
        $(window).off('smartresize.srInit');
        $(window).on('smartresize.srInit', smartResizeInit);

        // function resizeInit() {
        //     portfolioDeviceCheck();
        //     fullWidthSections();
        //     fullwidthImgOnlySizing();
        //     fullWidthContentColumns();
        //     fullWidthRowPaddingAdjustCalc();
        //     responsiveVideoIframes();
        //     videoshortcodeSize();
        //     testimonialSliderHeightMinimalMult();
        //     if ($('.nectar-social.full-width').length > 0) { nectarLoveFWCenter(); }
        //     if ($('body').hasClass('ascend')) { searchFieldCenter(); }
        //     if ($('body').hasClass('single-post')) centerPostNextButtonImg();
        //     sidebarPxConversion();
        //     cascadingImageBGSizing();
        //     responsiveTooltips();
        //     if ($('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length > 0) vcMobileColumns();
        //     if ($('body[data-footer-reveal="1"]').length > 0) footerRevealCalcs();
        //     if ($('#page-header-bg').length > 0) pageHeader();
        //     if ($('.nectar-video-bg').length > 0) { resizeVideoToCover(); }
        // }
        // $(window).off('resize.srInit');
        // $(window).on('resize.srInit', resizeInit);
        // $(window).on("orientationchange", function() { setTimeout(clientsCarouselHeightRecalc, 200); });

        function postNextButtonEffect() {
            $('.blog_next_prev_buttons').imagesLoaded(function() {
                centerPostNextButtonImg();
                $('.blog_next_prev_buttons img').css('opacity', '1');
                if (!$('body').hasClass('mobile') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) { $('.blog_next_prev_buttons img').panr({ scaleDuration: .28, sensitivity: 22, scaleTo: 1.06 }); }
            });
        }

        function centerPostNextButtonImg() {
            if ($('.blog_next_prev_buttons').length == 0) return false;
            if ($('.blog_next_prev_buttons img').height() >= $('.blog_next_prev_buttons').height() + 50) { var $height = 'auto'; var $width = $('.blog_next_prev_buttons').width(); } else { if ($('.blog_next_prev_buttons').width() < $('.blog_next_prev_buttons img').width()) { var $height = $('.blog_next_prev_buttons').height() + 49; var $width = 'auto'; } else { var $height = 'auto'; var $width = '100%'; } }
            $('.blog_next_prev_buttons img').css({ 'height': $height, 'width': $width });
            $('.blog_next_prev_buttons img').css({ 'top': ($('.blog_next_prev_buttons').height() / 2) - ($('.blog_next_prev_buttons img').height() / 2) + 'px', 'left': ($('.blog_next_prev_buttons').width() / 2) - ($('.blog_next_prev_buttons img').width() / 2) + 'px' });
            $('.blog_next_prev_buttons .inner').each(function() { $(this).css({ 'top': $(this).parent().height() / 2 - ($(this).height() / 2), 'opacity': '1' }); })
        }
        postNextButtonEffect();

        function recentPostHeight() {
            $('.blog-recent[data-style="title_only"]').each(function() {
                if ($(this).find('> .col').length > 1) return false;
                if ($(this).parent().parent().parent().hasClass('vc_col-sm-3') || $(this).parent().parent().parent().hasClass('vc_col-sm-4') || $(this).parent().parent().parent().hasClass('vc_col-sm-6') || $(this).parent().parent().parent().hasClass('vc_col-sm-8') || $(this).parent().parent().parent().hasClass('vc_col-sm-9')) {
                    if ($('body.mobile').length == 0 && $(this).next('div').length == 0) {
                        var tallestColumn = 0;
                        $(this).find('> .col').css('padding', '50px 20px');
                        $(this).parents('.span_12').find(' > .wpb_column').each(function() {
                            (Math.floor($(this).height()) > tallestColumn) ? tallestColumn = Math.floor($(this).height()): tallestColumn = tallestColumn;
                        });
                        if (Math.floor($(this).find('> .col').outerHeight(true)) < Math.floor($(this).parents('.wpb_row').height()) - 1) {
                            $(this).find('> .col').css('padding-top', (tallestColumn - $(this).find('> .col').height()) / 2 + 'px');
                            $(this).find('> .col').css('padding-bottom', (tallestColumn - $(this).find('> .col').height()) / 2 + 'px');
                        }
                    } else { $(this).find('> .col').css('padding', '50px 20px'); }
                }
            });
        }
        recentPostHeight();

        function recentPostsFlickityInit() {
            $('.blog-recent[data-style="classic_enhanced_alt"] .inner-wrap').each(function() {
                $(this).find('.post-featured-img').each(function() {
                    var $src = $(this).find('img').attr('src');
                    $(this).css('background-image', 'url(' + $src + ')');
                });
            });
            if ($('.nectar-recent-posts-slider-inner').length == 0) return false;
            var $rpF = $('.nectar-recent-posts-slider-inner').flickity({ contain: true, draggable: true, lazyLoad: false, imagesLoaded: true, percentPosition: true, prevNextButtons: false, pageDots: true, resize: true, setGallerySize: true, wrapAround: true, accessibility: false });
            setTimeout(function() { $('.nectar-recent-posts-slider-inner').addClass('loaded'); }, 1150);
            var flkty = $rpF.data('flickity');
            $rpF.on('dragStart', function() { $('.flickity-viewport').addClass('is-moving'); });
            $rpF.on('dragEnd', function() { $('.flickity-viewport').removeClass('is-moving'); });
            recentPostSliderHeight();
            $(window).resize(recentPostSliderHeight);
            if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
                $(window).resize(recentPostSliderParallaxMargins);

            function recentPostSliderHeight() {
                $('.nectar-recent-posts-slider').each(function() {
                    var $heightCalc;
                    var $minHeight = 250;
                    var $windowWidth = $(window).width();
                    var $definedHeight = parseInt($(this).attr('data-height'));
                    var dif = ($('body[data-ext-responsive="true"]').length > 0) ? $(window).width() / 1400 : $(window).width() / 1100;
                    if (window.innerWidth > 1000 && $('#boxed').length == 0) { if ($(this).parents('.full-width-content').length == 0) { if ($('body[data-ext-responsive="true"]').length > 0 && window.innerWidth >= 1400) { $(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height', Math.ceil($definedHeight)); } else if ($('body[data-ext-responsive="true"]').length == 0 && window.innerWidth >= 1100) { $(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height', Math.ceil($definedHeight)); } else { $(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height', Math.ceil($definedHeight * dif)); } } else { $(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height', Math.ceil($definedHeight * dif)); } } else {
                        var $parentCol = ($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column') : $(this).parents('.col');
                        if ($parentCol.length == 0) $parentCol = $('.main-content');
                        if (!$parentCol.hasClass('vc_span12') && !$parentCol.hasClass('main-content') && !$parentCol.hasClass('span_12') && !$parentCol.hasClass('vc_col-sm-12')) { var $parentColWidth = sliderColumnDesktopWidth($parentCol); var $aspectRatio = $definedHeight / $parentColWidth; if ($aspectRatio * $parentCol.width() <= $minHeight) { $(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height', $minHeight); } else { $(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height', $aspectRatio * $parentCol.width()); } } else { if ($definedHeight * dif <= $minHeight) { $(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height', $minHeight); } else { $(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height', Math.ceil($definedHeight * dif)); } }
                    }
                });
            }

            function sliderColumnDesktopWidth(parentCol) {
                var $parentColWidth = 1100;
                var $columnNumberParsed = $(parentCol).attr('class').match(/\d+/);
                if ($columnNumberParsed == '2') { $parentColWidth = 170 } else if ($columnNumberParsed == '3') { $parentColWidth = 260 } else if ($columnNumberParsed == '4') { $parentColWidth = 340 } else if ($columnNumberParsed == '6') { $parentColWidth = 530 } else if ($columnNumberParsed == '8') { $parentColWidth = 700 } else if ($columnNumberParsed == '9') { $parentColWidth = 805 } else if ($columnNumberParsed == '10') { $parentColWidth = 916.3 } else if ($columnNumberParsed == '12') { $parentColWidth = 1100 }
                return $parentColWidth;
            }
        }
        recentPostsFlickityInit();
        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
            if ($('.nectar-recent-posts-slider').length > 0) window.requestAnimationFrame(recentPostSliderParallax);

        function recentPostSliderParallax() {
            $('.nectar-recent-posts-slider').each(function() {
                var $offset = parseInt($(this).find('.flickity-slider').position().left);
                var $slideLength = $(this).find('.nectar-recent-post-slide').length;
                var $lastChildIndex = $(this).find('.nectar-recent-post-slide:last-child').index();
                var $slideWidth = $(this).find('.nectar-recent-post-slide').width();
                if ($offset >= -3) { $(this).find('.nectar-recent-post-slide:last-child .nectar-recent-post-bg').css('margin-left', parseInt(Math.ceil($slideWidth / 3.5)) + 'px'); } else { $(this).find('.nectar-recent-post-slide:last-child .nectar-recent-post-bg').css('margin-left', '-' + parseInt(Math.ceil($slideWidth / 3.5 * $lastChildIndex)) + 'px'); }
                if (Math.abs($offset) >= ($slideLength - 1) * $slideWidth) { $(this).find('.nectar-recent-post-slide:first-child .nectar-recent-post-bg').css('margin-left', '-' + parseInt(Math.ceil(($slideWidth / 3.5) * $slideLength)) + 'px'); } else { $(this).find('.nectar-recent-post-slide:first-child .nectar-recent-post-bg').css('margin-left', '0px'); }
                $(this).find('.nectar-recent-post-bg').css('transform', 'translateX(' + Math.ceil($(this).find('.flickity-slider').position().left / -3.5) + 'px)');
            });
            requestAnimationFrame(recentPostSliderParallax);
        }

        function recentPostSliderParallaxMargins() {
            $('.nectar-recent-posts-slider').each(function() {
                var $slideWidth = $(this).find('.nectar-recent-post-slide').width();
                $(this).find('.nectar-recent-post-slide').each(function(i) { $(this).find('.nectar-recent-post-bg').css('margin-left', '-' + parseInt(Math.ceil($slideWidth / 3.5) * i) + 'px'); });
            });
        }
        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
            recentPostSliderParallaxMargins();

        function portfolioHoverEffects() {
            if (!$('body').hasClass('mobile') && !navigator.userAgent.match(/(iPad|IEMobile)/)) {
                $('.portfolio-items:not([data-ps="7"]) .col .work-item:not(.style-3-alt):not(.style-3):not([data-custom-content="on"])').hover(function() {
                    $(this).find('.work-info .vert-center').css({ 'margin-top': 0 });
                    $(this).find('.work-info, .work-info .vert-center *, .work-info > i').css({ 'opacity': 1 });
                    $(this).find('.work-info-bg').css({ 'opacity': 0.9 });
                }, function() {
                    $(this).find('.work-info .vert-center').css({ 'margin-top': -20 });
                    $(this).find('.work-info, .work-info .vert-center *, .work-info > i').css({ 'opacity': 0 });
                    $(this).find('.work-info-bg').css({ 'opacity': 0 });
                });
                $('.portfolio-items .col .work-item.style-3').hover(function() { $(this).find('.work-info-bg').css({ 'opacity': 0 }); }, function() { $(this).find('.work-info-bg').css({ 'opacity': 0.45 }); });
                $('.portfolio-items .col .work-item.style-4').hover(function() {
                    $(this).find('img').stop().animate({ 'top': '-' + $(this).find('.work-info .bottom-meta').outerHeight() / 2 + 'px' }, 250, 'easeOutCubic');
                    $(this).find('.work-info .bottom-meta').addClass('shown').stop().animate({ 'bottom': '0px' }, 320, 'easeOutCubic');
                }, function() {
                    $(this).find('img').stop().animate({ 'top': '0px' }, 250, 'easeOutCubic');
                    $(this).find('.work-info .bottom-meta').removeClass('shown').stop().animate({ 'bottom': '-' + $(this).find('.work-info .bottom-meta').outerHeight() - 2 + 'px' }, 320, 'easeOutCubic');
                });
            } else { portfolioDeviceCheck(); }
        }
        portfolioHoverEffects();

        function style6Img() {
            $('.style-5').each(function() { $(this).find('.sizer').insertBefore($(this).find('.parallaxImg')); });
            $('.style-5').parents('.wpb_row').css('z-index', '100');
            var d = document,
                de = d.documentElement,
                bd = d.getElementsByTagName('body')[0],
                htm = d.getElementsByTagName('html')[0],
                win = window,
                imgs = d.querySelectorAll('.parallaxImg'),
                totalImgs = imgs.length,
                supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;
            if (totalImgs <= 0) { return; }
            for (var l = 0; l < totalImgs; l++) {
                var thisImg = imgs[l],
                    layerElems = thisImg.querySelectorAll('.parallaxImg-layer'),
                    totalLayerElems = layerElems.length;
                if (totalLayerElems <= 0) { continue; }
                while (thisImg.firstChild) { thisImg.removeChild(thisImg.firstChild); }
                var lastMove = 0;
                var eventThrottle = $('html').hasClass('cssreflections') ? 1 : 80;
                if (eventThrottle == 80) $('body').addClass('cssreflections');
                var containerHTML = d.createElement('div'),
                    shineHTML = d.createElement('div'),
                    shadowHTML = d.createElement('div'),
                    layersHTML = d.createElement('div'),
                    layers = [];
                thisImg.id = 'parallaxImg__' + l;
                containerHTML.className = 'parallaxImg-container';
                shadowHTML.className = 'parallaxImg-shadow';
                layersHTML.className = 'parallaxImg-layers';
                for (var i = 0; i < totalLayerElems; i++) {
                    var layer = d.createElement('div'),
                        layerInner = d.createElement('div'),
                        imgSrc = layerElems[i].getAttribute('data-img');
                    $(layer).html($(layerElems[i]).html());
                    layer.className = 'parallaxImg-rendered-layer';
                    layer.setAttribute('data-layer', i);
                    if (i == 0 && $(thisImg).parents('.wpb_gallery').length == 0) {
                        layerInner.className = 'bg-img';
                        layerInner.style.backgroundImage = 'url(' + imgSrc + ')';
                        layer.appendChild(layerInner);
                    }
                    layersHTML.appendChild(layer);
                    layers.push(layer);
                }
                containerHTML.appendChild(layersHTML);
                thisImg.appendChild(containerHTML);
                $(thisImg).wrap('<div class="parallaxImg-wrap" />');
                if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) { $(thisImg).parent().append(shadowHTML); }
                var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
                if (supportsTouch) {} else {
                    (function(_thisImg, _layers, _totalLayers, _shine) {
                        $(thisImg).parents('.style-5').on('mousemove', function(e) {
                            var now = Date.now();
                            if (now > lastMove + eventThrottle) {
                                lastMove = now;
                                window.requestAnimationFrame(function() { processMovement(e, false, _thisImg, _layers, _totalLayers, _shine); });
                            }
                        });
                        $(thisImg).parents('.style-5').on('mouseenter', function(e) { processEnter(e, _thisImg, _layers, _totalLayers, _shine); });
                        $(thisImg).parents('.style-5').on('mouseleave', function(e) { processExit(e, _thisImg, _layers, _totalLayers, _shine); });
                    })(thisImg, layers, totalLayerElems, shineHTML);
                }
                (function(_thisImg, _layers, _totalLayers, _shine) {
                    depths(false, _thisImg, _layers, _totalLayers, _shine);
                    window.addEventListener('resize', function(e) { depths(false, _thisImg, _layers, _totalLayers, _shine); });
                })(thisImg, layers, totalLayerElems, shineHTML);
            }

            function processMovement(e, touchEnabled, elem, layers, totalLayers, shine) {
                if (!$(elem.firstChild).hasClass('over')) { processExit(e, elem, layers, totalLayers, shine); return false }
                if ($(elem).parents('.col.wide').length > 0) { var yMult = 0.03; var xMult = 0.063; } else if ($(elem).parents('.col.regular').length > 0 || $(elem).parents('.wpb_gallery').length > 0) { var yMult = 0.045; var xMult = 0.045; } else if ($(elem).parents('.col.tall').length > 0) { var yMult = 0.05; var xMult = 0.015; } else if ($(elem).parents('.col.wide_tall').length > 0) { var yMult = 0.04; var xMult = 0.04; } else { var yMult = 0.045; var xMult = 0.075; }
                var bdst = bd.scrollTop || htm.scrollTop,
                    bdsl = bd.scrollLeft,
                    pageX = (touchEnabled) ? e.touches[0].pageX : e.pageX,
                    pageY = (touchEnabled) ? e.touches[0].pageY : e.pageY,
                    offsets = elem.getBoundingClientRect(),
                    w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
                    h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
                    wMultiple = 320 / w,
                    offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
                    offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
                    dy = (pageY - offsets.top - bdst) - h / 2,
                    dx = (pageX - offsets.left - bdsl) - w / 2,
                    yRotate = (offsetX - dx) * (yMult * wMultiple),
                    xRotate = (dy - offsetY) * (xMult * wMultiple);
                if ($(elem).parents('.wpb_gallery').length > 0) { var imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + -xRotate * 1.9 + 'deg) rotateY(' + -yRotate * 1.3 + 'deg)'; } else { if ($(elem).parents('.wide_tall').length == 0 && $(elem).parents('.wide').length == 0 && $(elem).parents('.tall').length == 0) { var imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)  translateY(' + offsetY * -10 + 'px) translateX(' + offsetX * -10 + 'px) scale(1.03)'; } else { var imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)  translateY(' + offsetY * -10 + 'px) translateX(' + offsetX * -10 + 'px) scale(1.013)'; } }
                if (elem.firstChild.className.indexOf(' over') != -1) { if ($(elem).parents('.portfolio-items.masonry-items').length > 0) {} else {} }
                $(elem).find('.parallaxImg-container').css('transform', imgCSS);
                if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) { $(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform', imgCSS); }
            }

            function processShineMovement(e, touchEnabled, elem, layers, totalLayers, shine) {
                var bdst = bd.scrollTop || htm.scrollTop,
                    bdsl = bd.scrollLeft,
                    pageX = (touchEnabled) ? e.touches[0].pageX : e.pageX,
                    pageY = (touchEnabled) ? e.touches[0].pageY : e.pageY,
                    offsets = elem.getBoundingClientRect(),
                    w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
                    h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
                    wMultiple = 320 / w,
                    offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
                    offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
                    dy = (pageY - offsets.top - bdst) - h / 2,
                    dx = (pageX - offsets.left - bdsl) - w / 2,
                    yRotate = (offsetX - dx) * (0.040 * wMultiple),
                    xRotate = (dy - offsetY) * (0.070 * wMultiple),
                    arad = Math.atan2(dy, dx),
                    angle = arad * 180 / Math.PI - 90;
                if (angle < 0) { angle = angle + 360; }
                shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst) / h * 0.3 + ') 0%,rgba(255,255,255,0) 80%)';
                shine.style.transform = 'translateX(' + (offsetX * totalLayers) - 0.1 + 'px) translateY(' + (offsetY * totalLayers) - 0.1 + 'px) ';
            }

            function processEnter(e, elem, layers, totalLayers, shine) {
                elem.firstChild.className += ' over';
                elem.className += ' over';
                $(elem).addClass('transition');
                if ($(elem).parents('.wpb_gallery').length > 0) { var $timeout = setTimeout(function() { $(elem).removeClass('transition'); }, 450); } else { var $timeout = setTimeout(function() { $(elem).removeClass('transition'); }, 200); }
            }

            function processExit(e, elem, layers, totalLayers, shine) {
                var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
                var container = elem.firstChild;
                container.className = container.className.replace(' over', '');
                elem.className = elem.className.replace(' over', '');
                $(container).css('transform', 'perspective(' + w * 3 + 'px) rotateX(0deg) rotateY(0deg) translateZ(0)');
                $(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform', 'perspective(' + w * 3 + 'px) rotateX(0deg) rotateY(0deg) translateZ(0)');
                $(elem).addClass('transition');
                var $timeout = setTimeout(function() { $(elem).removeClass('transition'); }, 200);
            }

            function depths(touchEnabled, elem, layers, totalLayers, shine) {
                var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
                var revNum = totalLayers;
                var container = elem.firstChild;
                for (var ly = 0; ly < totalLayers; ly++) {
                    if (ly == 0) $(layers[ly]).css('transform', 'translateZ(0px)');
                    else $(layers[ly]).css('transform', 'translateZ(' + (w * 3) / 27 * (ly * 1.1) + 'px) ');
                    revNum--;
                }
                totalLayers = totalLayers + 3;
                $(container).css('transform', 'perspective(' + w * 3 + 'px)');
            }

            function removeDepths(touchEnabled, elem, layers, totalLayers, shine) {
                var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
                var revNum = totalLayers;
                for (var ly = 0; ly < totalLayers; ly++) {
                    if (ly == 0) $(layers[ly]).css('transform', 'translateZ(' + (w * 3) / 45 * (ly * 1.1) + 'px) scale(1)');
                    else $(layers[ly]).css('transform', 'translateZ(' + (w * 3) / 45 * (ly * 1.1) + 'px) scale(1)');
                    revNum--;
                }
                totalLayers = totalLayers + 3;
            }
        }
        style6Img();

        function portfolioDeviceCheck() {
            if ($('body').hasClass('mobile') || navigator.userAgent.match(/(iPad|IEMobile)/)) {
                if ($('.portfolio-items .col .work-item').find('a:not(".pp")').length > 0) { $('.portfolio-items .col .work-item').find('a.pp').css('display', 'none'); } else { $('.portfolio-items .col .work-item').find('a:not(".pp")').css('display', 'none'); }
            } else { $('.portfolio-items .col .work-item').find('a').css('display', 'inline'); }
        }
        $('.nectar_fullscreen_zoom_recent_projects').each(function() {
            if ($(this).parents('.span_12').find('> .wpb_column').length > 1) {
                var $zoomProjects = $(this).clone();
                var $zoomProjectsRow = $(this).parents('.span_12');
                $(this).remove();
                $zoomProjectsRow.prepend($zoomProjects);
            }
        });
        $.fn.lines = function(opts) {
            var s = $.extend({ 'lineClass': 'line' }, opts);
            return this.each(function() {
                var self = this,
                    $self = $(self),
                    $line, $prev;
                $self.find('.' + s.lineClass).contents().unwrap();
                $self.html(function(i, h) { return h.replace(/(\b[\w']+\b)/g, '<span class="' + s.lineClass + '">$1</span>'); });
                $self.find('.line + .line').each(function(i, el) {
                    $line = $(this), $prev = $line.prev('.line');
                    if ($line.offset().top === $prev.offset().top) {
                        $prev.append(el.previousSibling, $line.contents());
                        $line.remove();
                    }
                });
            });
        };

        function portfolioFullScreenText() {
            $('.nectar_fullscreen_zoom_recent_projects').each(function() {
                $(this).find('.project-slide').each(function(i) {
                    $(this).find('.project-info h1 > span > span.inner').unwrap();
                    $(this).find('.project-info h1 > span').each(function() {
                        var spantext = $(this).text();
                        $(this).replaceWith(spantext);
                    });
                    var spanInserted = $(this).find('.project-info h1').html().split(" ").join(" </span> <span>");
                    var wrapped = ("<span>").concat(spanInserted, "</span>");
                    $(this).find('.project-info h1').html(wrapped);
                    var refPos = $(this).find('.project-info h1 > span:first-child').position().top;
                    var newPos;
                    $(this).find('.project-info h1 > span').each(function(index) {
                        if ($(this).text().trim().length > 0) {
                            newPos = $(this).position().top
                            if (index == 0) { return; }
                            if (newPos == refPos) {
                                $(this).prepend($(this).prev().text());
                                $(this).prev().remove();
                            }
                            refPos = newPos;
                        } else { $(this).remove(); }
                    });
                    $(this).find('.project-info h1 > span').wrapInner('<span class="inner" />');
                });
            });
        }

        function portfolioFullScreenSliderCalcs() { $('.nectar_fullscreen_zoom_recent_projects').each(function() { if ($(this).parents('.first-section').length > 0) { $(this).css('height', $(window).height() - $(this).offset().top); } else { $(this).css('height', $(window).height()); } }); }

        function portfolioSliderRotate(slider) { var $slideLength = slider.find('.dot-nav > span').length; var $currentSlide = slider.find('.dot-nav > span.active').index(); if ($currentSlide + 1 == $slideLength) { slider.find('.dot-nav > span:first-child').click(); } else { slider.find('.dot-nav > span.active').next('span').click(); } }

        function portfolioSliderResetRotate(slider) {
            clearInterval($portfolioSliderRotate);
            if (slider.attr('data-autorotate').length > 0) {
                slide_interval = (parseInt(slider.attr('data-autorotate')) < 100) ? 4000 : parseInt(slider.attr('data-autorotate'));
                $portfolioSliderRotate = setInterval(function() { portfolioSliderRotate(slider) }, slide_interval);
            }
        }
        var $portfolioSliderRotate;
        if ($('.nectar_fullscreen_zoom_recent_projects').length > 0) {
            portfolioFullScreenSliderCalcs();
            portfolioFullScreenText();
            $(window).resize(portfolioFullScreenText);
            $(window).resize(portfolioFullScreenSliderCalcs);
        }
        $('.nectar_fullscreen_zoom_recent_projects').each(function() {
            var $projLength = $(this).find('.project-slide').length;
            if ($(this).attr('data-autorotate').length > 0) {
                slide_interval = (parseInt($(this).attr('data-autorotate')) < 100) ? 4000 : parseInt($(this).attr('data-autorotate'));
                var $that = $(this);
                $portfolioSliderRotate = setInterval(function() { portfolioSliderRotate($that) }, slide_interval);
            }
            $(this).find('.zoom-slider-controls .next').click(function() {
                var $that = $(this);
                if (!$that.parent().hasClass('timeout')) { setTimeout(function() { $that.parent().removeClass('timeout'); }, 1150); }
                if ($(this).parent().hasClass('timeout')) return false;
                $(this).parent().addClass('timeout');
                portfolioSliderResetRotate($that.parents('.nectar_fullscreen_zoom_recent_projects'));
                var $current = $(this).parents('.nectar_fullscreen_zoom_recent_projects').find('.project-slide.current');
                var $sliderInstance = $(this).parents('.nectar_fullscreen_zoom_recent_projects');
                $sliderInstance.find('.project-slide').removeClass('next').removeClass('prev');
                $sliderInstance.find('.project-slide').each(function(i) {
                    if (i < $current.index() + 1 && $current.index() + 1 < $projLength)
                        $(this).addClass('prev');
                    else
                        $(this).addClass('next');
                });
                if ($current.index() + 1 == $projLength) { $sliderInstance.find('.project-slide:first-child').addClass('no-trans'); }
                setTimeout(function() {
                    if ($current.index() + 1 == $projLength) {
                        $sliderInstance.find('.project-slide:first-child').removeClass('no-trans').removeClass('next').removeClass('prev').addClass('current');
                        $sliderInstance.find('.project-slide:last-child').removeClass('next').removeClass('current').addClass('prev');
                    } else {
                        $current.next('.project-slide').removeClass('next').removeClass('prev').addClass('current');
                        $current.removeClass('current').addClass('prev');
                    }
                    if ($sliderInstance.find('.dot-nav').length > 0) {
                        $sliderInstance.find('.dot-nav span.active').removeClass('active');
                        $sliderInstance.find('.dot-nav span:nth-child(' + ($sliderInstance.find('.project-slide.current').index() + 1) + ')').addClass('active');
                    }
                }, 30);
                return false;
            });
            $(this).find('.zoom-slider-controls .prev').click(function() {
                var $that = $(this);
                if (!$that.parent().hasClass('timeout')) { setTimeout(function() { $that.parent().removeClass('timeout'); }, 1150); }
                if ($(this).parent().hasClass('timeout')) return false;
                $(this).parent().addClass('timeout');
                portfolioSliderResetRotate($that.parents('.nectar_fullscreen_zoom_recent_projects'));
                var $current = $(this).parents('.nectar_fullscreen_zoom_recent_projects').find('.project-slide.current');
                var $sliderInstance = $(this).parents('.nectar_fullscreen_zoom_recent_projects');
                $sliderInstance.find('.project-slide').removeClass('next').removeClass('prev');
                $sliderInstance.find('.project-slide').each(function(i) {
                    if (i < $current.index() || $current.index() == 0)
                        $(this).addClass('prev');
                    else
                        $(this).addClass('next');
                });
                if ($current.index() == 0)
                    $sliderInstance.find('.project-slide:last-child').addClass('no-trans');
                setTimeout(function() {
                    if ($current.index() == 0) {
                        $sliderInstance.find('.project-slide:last-child').removeClass('no-trans').removeClass('next').removeClass('prev').addClass('current');
                        $sliderInstance.find('.project-slide:first-child').removeClass('next').removeClass('prev').removeClass('current').addClass('next');
                    } else {
                        $current.prev('.project-slide').removeClass('next').removeClass('prev').addClass('current');
                        $current.removeClass('current').addClass('next');
                    }
                    if ($sliderInstance.find('.dot-nav').length > 0) {
                        $sliderInstance.find('.dot-nav span.active').removeClass('active');
                        $sliderInstance.find('.dot-nav span:nth-child(' + ($sliderInstance.find('.project-slide.current').index() + 1) + ')').addClass('active');
                    }
                }, 30);
                return false;
            });
            $(this).find('> .normal-container').append('<div class="dot-nav"></div>');
            for (var $i = 0; $i < $projLength; $i++) { if ($i == 0) { $(this).find('.dot-nav').append('<span class="dot active"><span></span></span>'); } else { $(this).find('.dot-nav').append('<span class="dot"><span></span></span>'); } }
            var $dotIndex = 1;
            $('.nectar_fullscreen_zoom_recent_projects .dot-nav > span').click(function() {
                if ($(this).hasClass('active')) return;
                var $that = $(this);
                if (!$that.parent().hasClass('timeout')) { setTimeout(function() { $that.parent().removeClass('timeout'); }, 1150); }
                if ($(this).parent().hasClass('timeout')) return;
                $(this).parent().addClass('timeout');
                portfolioSliderResetRotate($that.parents('.nectar_fullscreen_zoom_recent_projects'));
                $(this).parent().find('span.active').removeClass('active');
                $(this).addClass('active');
                $dotIndex = $(this).index() + 1;
                var $current = $(this).parents('.nectar_fullscreen_zoom_recent_projects').find('.project-slide.current');
                var $sliderInstance = $(this).parents('.nectar_fullscreen_zoom_recent_projects');
                var $prevIndex = $current.index() + 1;
                $sliderInstance.find('.project-slide').removeClass('next').removeClass('prev');
                $sliderInstance.find('.project-slide').each(function(i) {
                    if (i < $dotIndex - 1)
                        $(this).addClass('prev');
                    else
                        $(this).addClass('next');
                });
                if ($prevIndex > $dotIndex) {
                    $sliderInstance.find('.project-slide').eq($dotIndex - 1).addClass('no-trans').addClass('prev').removeClass('next');
                    setTimeout(function() {
                        $sliderInstance.find('.project-slide').eq($dotIndex - 1).removeClass('no-trans').removeClass('next').removeClass('prev').addClass('current');
                        $current.removeClass('current').addClass('next');
                    }, 30);
                } else {
                    $sliderInstance.find('.project-slide').eq($dotIndex - 1).addClass('no-trans').addClass('next').removeClass('prev');
                    setTimeout(function() {
                        $sliderInstance.find('.project-slide').eq($dotIndex - 1).removeClass('no-trans').removeClass('next').removeClass('prev').addClass('current');
                        $current.removeClass('current').addClass('prev');
                    }, 30);
                }
            });
        });

        function portfolioAccentColor() {
            var portfolioSocialColorCss = '';
            $('.portfolio-items .col').each(function() {
                if ($(this).has('[data-project-color]')) {
                    $(this).find('.work-info-bg, .bottom-meta').css('background-color', $(this).attr('data-project-color'));
                    $(this).find('.parallaxImg-rendered-layer .bg-overlay').css('border-color', $(this).attr('data-project-color'));
                    var $projColor = $(this).attr('data-project-color');
                    if ($(this).find('.custom-content .nectar-social').length > 0 && $('body[data-button-style="rounded"]')) portfolioSocialColorCss += 'body[data-button-style="rounded"] .col[data-project-color="' + $projColor + '"] .custom-content .nectar-social > *:hover i { color: ' + $projColor + '!important; } ';
                }
            });
            if (portfolioSocialColorCss.length > 1) {
                var head = document.head || document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) { style.styleSheet.cssText = portfolioSocialColorCss; } else { style.appendChild(document.createTextNode(portfolioSocialColorCss)); }
                head.appendChild(style);
            }
        }
        portfolioAccentColor();
        $('body').on('mouseenter', '.portfolio-filters', function() {
            $(this).find('> ul').stop(true, true).slideDown(500, 'easeOutExpo');
            $(this).find('a#sort-portfolio span').html($(this).find('a#sort-portfolio').attr('data-sortable-label'));
        });
        $('body').on('mouseleave', '.portfolio-filters', function() {
            var $activeCat = $(this).find('a.active').html();
            if (typeof $activeCat == 'undefined' || $activeCat.length == 0) $activeCat = $(this).attr('data-sortable-label');
            $(this).find('a#sort-portfolio span').html($activeCat);
            $(this).find('> ul').stop(true, true).slideUp(500, 'easeOutExpo');
        });
        $('body').on('click', '.portfolio-filters ul li a', function() { $(this).parents('.portfolio-filters').find('#sort-portfolio span').html($(this).html()); });
        $('body').on('click', '.portfolio-filters-inline ul li a', function() {
            $(this).parents('ul').find('li a').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.portfolio-filters-inline').find('#current-category').html($(this).html());
        });

        function portfolioFiltersInit() {
            if ($('body').hasClass('mobile') || navigator.userAgent.match(/(iPad|IEMobile)/)) {
                $('.portfolio-filters').unbind('mouseenter mouseleave');
                $('.portfolio-filters > a, .portfolio-filters ul li a').click(function(e) { if (e.originalEvent !== undefined) $(this).parents('.portfolio-filters').find('> ul').stop(true, true).slideToggle(600, 'easeOutCubic'); });
            }
            if ($('.portfolio-filters-inline[data-alignment="left"]').length > 0 || $('.portfolio-filters-inline[data-alignment="center"]').length > 0) { $('.portfolio-filters-inline .container > ul > li:nth-child(1) a').click(); } else { $('.portfolio-filters-inline .container > ul > li:nth-child(2) a').click(); }
            $('body.single-portfolio #header-outer nav > ul > li > a:contains("Portfolio")').parents('li').addClass('current-menu-item');
            $('body.single-post #header-outer nav > ul > li > a:contains("Blog")').parents('li').addClass('current-menu-item');
        }
        portfolioFiltersInit();

        function centerLove() {
            $('.post').each(function() {
                var $loveWidth = $(this).find('.post-meta .nectar-love').outerWidth();
                var $loveWrapWidth = $(this).find('.post-meta  .nectar-love-wrap').width();
                $(this).find('.post-meta .nectar-love').css('margin-left', $loveWrapWidth / 2 - $loveWidth / 2 + 'px');
                $(this).find('.nectar-love-wrap').css('visibility', 'visible');
            });
        }
        $('.nectar-love').on('click', function() { centerLove(); });
        centerLove();

        function portfolioCommentOrder() {
            if ($('body').hasClass('mobile') && $('body').hasClass('single-portfolio') && $('#respond').length > 0) { $('#sidebar').insertBefore('.comments-section'); } else if ($('body').hasClass('single-portfolio') && $('#respond').length > 0) { $('#sidebar').insertAfter('#post-area'); }
        }
        portfolioCommentOrder();
        var sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');

        function portfolioSidebarFollow() {
            sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');
            if ($('body.single-portfolio').length > 0 && sidebarFollow == 1 && !$('body').hasClass('mobile') && parseInt($('#sidebar').height()) + 50 <= parseInt($('#post-area').height())) {
                $('#sidebar').addClass('fixed-sidebar');
                var $footer = ($('.comment-wrap.full-width-section').length == 0) ? '#footer-outer' : '.comment-wrap';
                if ($('#call-to-action').length > 0) $footer = '#call-to-action';
                sidebarPxConversion();
                $('#sidebar').stickyMojo({ footerID: $footer, contentID: '#post-area' });
            }
        }

        function sidebarPxConversion() {
            if ($('body.single-portfolio').length > 0 && sidebarFollow == 1 && !$('body').hasClass('mobile')) {
                var $containerWidth = $('.main-content > .row').width();
                var $sidebarWidth = $containerWidth * .235;
                if (window.innerWidth > 1300) { $sidebarWidth = $containerWidth * .235; } else if (window.innerWidth < 1300 && window.innerWidth > 1000) { $sidebarWidth = $containerWidth * .273; }
                $('#sidebar').css('width', $sidebarWidth + 'px');
            }
        }
        $(window).load(function() { setTimeout(portfolioSidebarFollow, 200); });

        function isotopeCatSelection() {
            $('.portfolio-items:not(".carousel")').each(function() {
                var isotopeCatArr = [];
                var $portfolioCatCount = 0;
                $(this).parent().parent().find('div[class^=portfolio-filters] ul li').each(function(i) {
                    if ($(this).find('a').length > 0) {
                        isotopeCatArr[$portfolioCatCount] = $(this).find('a').attr('data-filter').substring(1);
                        $portfolioCatCount++;
                    }
                });
                isotopeCatArr.shift();
                var itemCats = '';
                $(this).find('> div').each(function(i) { itemCats += $(this).attr('data-project-cat'); });
                itemCats = itemCats.split(' ');
                itemCats.pop();
                itemCats = $.unique(itemCats);
                if ($(this).attr('data-categories-to-show').length != 0 && $(this).attr('data-categories-to-show') != 'all') {
                    $userSelectedCats = $(this).attr('data-categories-to-show').replace(/,/g, ' ');
                    $userSelectedCats = $userSelectedCats.split(' ');
                    if (!$(this).hasClass('infinite_scroll')) $(this).removeAttr('data-categories-to-show');
                } else { $userSelectedCats = itemCats; }
                var notFoundCats = [];
                $.grep(isotopeCatArr, function(el) { if ($.inArray(el, itemCats) == -1) notFoundCats.push(el); if ($.inArray(el, $userSelectedCats) == -1) notFoundCats.push(el); });
                if (notFoundCats.length != 0) { $(this).parent().parent().find('div[class^=portfolio-filters] ul li').each(function() { if ($(this).find('a').length > 0) { if ($.inArray($(this).find('a').attr('data-filter').substring(1), notFoundCats) != -1) { $(this).hide(); } else { $(this).show(); } } }) }
            });
        }
        isotopeCatSelection();
        var completed = 0;
        var windowLocation = window.location.href.replace(window.location.hash, '');

        function facebookShare() {
            windowLocation = window.location.href.replace(window.location.hash, '');
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + windowLocation, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
            return false;
        }

        function googlePlusShare() {
            windowLocation = window.location.href.replace(window.location.hash, '');
            window.open('https://plus.google.com/share?url=' + windowLocation, "googlePlusWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
            return false;
        }

        function twitterShare() {
            windowLocation = window.location.href.replace(window.location.hash, '');
            if ($(".section-title h1").length > 0) { var $pageTitle = encodeURIComponent($(".section-title h1").text()); } else { var $pageTitle = encodeURIComponent($(document).find("title").text()); }
            window.open('http://twitter.com/intent/tweet?text=' + $pageTitle + ' ' + windowLocation, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
            return false;
        }

        function wooTwitterShare() {
            windowLocation = window.location.href.replace(window.location.hash, '');
            window.open('http://twitter.com/intent/tweet?text=' + $("h1.product_title").text() + ' ' + windowLocation, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
            return false;
        }

        function linkedInShare() {
            windowLocation = window.location.href.replace(window.location.hash, '');
            if ($(".section-title h1").length > 0) { var $pageTitle = encodeURIComponent($(".section-title h1").text()); } else { var $pageTitle = encodeURIComponent($(document).find("title").text()); }
            window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + windowLocation + '&title=' + $pageTitle + '', "linkedInWindow", "height=480,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
            return false;
        }

        function woolinkedInShare() {
            windowLocation = window.location.href.replace(window.location.hash, '');
            window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + windowLocation + '&title=' + $("h1.product_title").text(), "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
            return false;
        }

        function pinterestShare() {
            windowLocation = window.location.href.replace(window.location.hash, '');
            var $sharingImg = ($('.single-portfolio').length > 0 && $('div[data-featured-img]').attr('data-featured-img') != 'empty') ? $('div[data-featured-img]').attr('data-featured-img') : $('#ajax-content-wrap img').first().attr('src');
            if ($(".section-title h1").length > 0) { var $pageTitle = encodeURIComponent($(".section-title h1").text()); } else { var $pageTitle = encodeURIComponent($(document).find("title").text()); }
            window.open('http://pinterest.com/pin/create/button/?url=' + windowLocation + '&media=' + $sharingImg + '&description=' + $pageTitle, "pinterestWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
            return false;
        }

        function wooPinterestShare() {
            $imgToShare = ($('img.attachment-shop_single').length > 0) ? $('img.attachment-shop_single').first().attr('src') : $('.single-product-main-image img').first().attr('src');
            windowLocation = window.location.href.replace(window.location.hash, '');
            window.open('http://pinterest.com/pin/create/button/?url=' + windowLocation + '&media=' + $imgToShare + '&description=' + $('h1.product_title').text(), "pinterestWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
            return false;
        }

        function socialFade() {
            if (completed == $('a.nectar-sharing').length && $('a.nectar-sharing').parent().hasClass('in-sight')) {
                $('.nectar-social .nectar-love span').show(350, 'easeOutSine', function() { $(this).stop().animate({ 'opacity': 1 }, 800); });
                $('.nectar-social > a').each(function(i) {
                    var $that = $(this);
                    $(this).find('> span').show(350, 'easeOutSine', function() { $that.find('> span').stop().animate({ 'opacity': 1 }, 800); });
                });
                var $totalShares = 0;
                $('.nectar-social > a .count').each(function() { $totalShares += parseInt($(this).html()); });
                if ($totalShares != 1) {
                    $('.single .meta-share-count .plural').css({ 'opacity': '1', 'display': 'inline' });
                    $('.single .meta-share-count .singular').remove();
                } else {
                    $('.single .meta-share-count .singular').css({ 'opacity': '1', 'position': 'relative', 'display': 'inline' });
                    $('.single .meta-share-count .plural').remove();
                }
                $('.meta-share-count .share-count-total').html($totalShares).css('opacity', 1);
            }
        }
        $('body').on('click', '#single-below-header .nectar-social a', function() { return false; });
        $('body').on('click', '.facebook-share:not(.inactive)', facebookShare);
        $('body').on('click', '.google-plus-share:not(.inactive)', googlePlusShare);
        $('body').on('click', '.nectar-social:not(".woo") .twitter-share:not(.inactive)', twitterShare);
        $('body').on('click', '.nectar-social.woo .twitter-share', wooTwitterShare);
        $('body').on('click', '.nectar-social:not(".woo") .linkedin-share:not(.inactive)', linkedInShare);
        $('body').on('click', '.nectar-social.woo .linkedin-share', woolinkedInShare);
        $('body').on('click', '.nectar-social:not(".woo") .pinterest-share:not(.inactive)', pinterestShare);
        $('body').on('click', '.nectar-social.woo .pinterest-share', wooPinterestShare);
        $('body').on('click', '.nectar-social-sharing-fixed > a', function() { return false; });

        function socialSharingInit() {
            if ($('body').hasClass('mobile') && $('.single-post .fullscreen-header').length > 0) { $('#single-below-header .nectar-social .nectar-sharing, #single-below-header .nectar-social .nectar-sharing-alt').addClass('inactive'); }
            completed = 0;
            if ($('a.facebook-share').length > 0 || $('a.twitter-share').length > 0 || $('a.google-plus-share').length > 0 || $('a.linkedin-share').length > 0 || $('a.pinterest-share').length > 0) {
                if ($('a.facebook-share:not(.sharing-default-minimal a.facebook-share)').length > 0 && $('body[data-button-style="rounded"]').length == 0 || $('#project-meta a.facebook-share').length > 0 || $('#single-meta a.facebook-share').length > 0 || $('#single-below-header .facebook-share').length > 0) {
                    $.getJSON("https://graph.facebook.com/?id=" + windowLocation + "&callback=?", function(data) {
                        if (data.share != undefined && data.share.share_count != undefined && data.share.share_count != 0 && (data.share.share_count != null)) { $('.facebook-share a span.count, a.facebook-share span.count').html(data.share.share_count); } else { $('.facebook-share a span.count, a.facebook-share span.count').html(0); }
                        completed++;
                        socialFade();
                    });
                } else if ($('a.facebook-share').length > 0 && $('body[data-button-style="rounded"]').length > 0 || $('.sharing-default-minimal a.facebook-share').length > 0) {
                    completed++;
                    socialFade();
                }
                if ($('a.twitter-share:not(.sharing-default-minimal a.twitter-share)').length > 0 && $('body[data-button-style="rounded"]').length == 0 || $('#project-meta a.twitter-share').length > 0 || $('#single-meta a.twitter-share').length > 0 || $('#single-below-header .twitter-share').length > 0) {
                    $('.twitter-share a span.count, a.twitter-share span.count').html(0);
                    completed++;
                    socialFade();
                } else if ($('a.twitter-share').length > 0 && $('body[data-button-style="rounded"]').length > 0 || $('.sharing-default-minimal a.twitter-share').length > 0) {
                    completed++;
                    socialFade();
                }
                if ($('a.linkedin-share:not(.sharing-default-minimal a.linkedin-share)').length > 0 && $('body[data-button-style="rounded"]').length == 0 || $('#project-meta a.linkedin-share').length > 0 || $('#single-meta a.linkedin-share').length > 0 || $('#single-below-header .linkedin-share').length > 0) {
                    $('.linkedin-share a span.count, a.linkedin-share span.count').html(0);
                    completed++;
                    socialFade();
                } else if ($('a.linkedin-share').length > 0 && $('body[data-button-style="rounded"]').length > 0 || $('.sharing-default-minimal a.linkedin-share').length > 0) {
                    completed++;
                    socialFade();
                }
                if ($('a.pinterest-share:not(.sharing-default-minimal a.pinterest-share)').length > 0 && $('body[data-button-style="rounded"]').length == 0 || $('#project-meta a.pinterest-share').length > 0 || $('#single-meta a.pinterest-share').length > 0 || $('#single-below-header .pinterest-share').length > 0) {
                    $.getJSON('https://api.pinterest.com/v1/urls/count.json?url=' + windowLocation + '&callback=?', function(data) {
                        if ((data.count != 0) && (data.count != undefined) && (data.count != null)) { $('.pinterest-share a span.count, a.pinterest-share span.count').html(data.count); } else { $('.pinterest-share a span.count, a.pinterest-share span.count').html(0); }
                        completed++;
                        socialFade();
                    });
                } else if ($('a.pinterest-share').length > 0 && $('body[data-button-style="rounded"]').length > 0 || $('.sharing-default-minimal a.pinterest-share').length > 0) {
                    completed++;
                    socialFade();
                }
                $('a.nectar-sharing > span.count, a.nectar-sharing-alt > span.count').hide().css('width', 'auto');
                $('.nectar-social').each(function() {
                    if ($(this).parents('.custom-content').length == 0) {
                        var $that = $(this);
                        var waypoint = new Waypoint({
                            element: $that,
                            handler: function(direction) {
                                $slide_timeout = ($('#page-header-bg[data-animate-in-effect="slide-down"] .nectar-social').length > 0) ? 900 : 1;
                                setTimeout(function() {
                                    $that.addClass('in-sight');
                                    socialFade();
                                    if ($('#page-header-bg .nectar-social').length == 0) {
                                        $that.find('> *').each(function(i) {
                                            var $that = $(this);
                                            var $timeout = ($('body[data-button-style="rounded"]').length > 0) ? 0 : 750;
                                            setTimeout(function() {
                                                $that.delay(i * 80).queue(function() {
                                                    var $that = $(this);
                                                    $(this).addClass('hovered');
                                                    setTimeout(function() { $that.removeClass('hovered'); }, 300);
                                                });
                                            }, $timeout);
                                        });
                                    }
                                }, $slide_timeout);
                                $that.addClass('animated-in');
                                waypoint.destroy();
                            },
                            offset: 'bottom-in-view'
                        });
                    }
                });
            }
        }
        socialSharingInit();
        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
            var $socialTimeout;
            $('body').on('mouseenter', '#single-meta .meta-share-count, #project-meta .meta-share-count', function() {
                clearTimeout($socialTimeout);
                if ($(this).parents('[id*="single-meta"]').length > 0 && $('[data-tab-pos="fullwidth"]').length == 0)
                    $(this).find('.nectar-social').show().stop(true).animate({ 'opacity': 1, 'right': '0px' }, 0);
                else
                    $(this).find('.nectar-social').show().stop(true).animate({ 'opacity': 1, 'left': '0px' }, 0);
                $(this).parents('[id*="-meta"]').addClass('social-hovered');
                $(this).parents('[id*="-meta"]').find('.n-shortcode a, .meta-comment-count a, .meta-share-count > a ').stop(true).animate({ 'opacity': 0 }, 250);
                $(this).find('.nectar-social a').each(function(i) { $(this).stop(true).delay(i * 40).animate({ 'opacity': 1, 'left': '0px' }, 150); });
            });
            $('body').on('mouseleave', '#single-meta .meta-share-count, #project-meta .meta-share-count', function() {
                $(this).parents('[id*="-meta"]').removeClass('social-hovered');
                if ($(this).parents('[id*="single-meta"]').length > 0 && $('[data-tab-pos="fullwidth"]').length == 0)
                    $(this).find('.nectar-social').stop(true).animate({ 'opacity': 0, 'right': '-20px' }, 200);
                else
                    $(this).find('.nectar-social').stop(true).animate({ 'opacity': 0, 'left': '-20px' }, 200);
                $(this).parents('[id*="-meta"]').find('.n-shortcode a, .meta-comment-count a, .meta-share-count > a ').stop(true).animate({ 'opacity': 1 }, 250);
                var $that = $(this);
                $socialTimeout = setTimeout(function() {
                    $that.find('.nectar-social').hide();
                    if ($that.parents('[id*="single-meta"]').length > 0 && $('[data-tab-pos="fullwidth"]').length == 0)
                        $that.find('.nectar-social a').stop(true).animate({ 'opacity': 0, 'left': '20px' }, 0);
                    else
                        $that.find('.nectar-social a').stop(true).animate({ 'opacity': 0, 'left': '-20px' }, 0);
                }, 200);
            });
        } else {
            var $socialTimeout;
            $('body').on('click', '#single-meta .meta-share-count, #project-meta .meta-share-count', function() {
                clearTimeout($socialTimeout);
                if ($(this).parents('[id*="single-meta"]').length > 0 && $('[data-tab-pos="fullwidth"]').length == 0)
                    $(this).find('.nectar-social').show().stop(true).animate({ 'opacity': 1, 'right': '0px' }, 0);
                else
                    $(this).find('.nectar-social').show().stop(true).animate({ 'opacity': 1, 'left': '0px' }, 0);
                $(this).parents('[id*="-meta"]').addClass('social-hovered');
                $(this).parents('[id*="-meta"]').find('.n-shortcode a, .meta-comment-count a, .meta-share-count > a ').stop(true).animate({ 'opacity': 0 }, 250);
                $(this).find('.nectar-social a').each(function(i) { $(this).stop(true).delay(i * 40).animate({ 'opacity': 1, 'left': '0px' }, 150); });
                return false;
            });
        }
        $('body').on('mouseenter', '.fullscreen-header  .meta-share-count', function() {
            $(this).find('> a, > i').stop(true).animate({ 'opacity': 0 }, 400);
            $(this).find('.nectar-social > *').each(function(i) { $(this).stop(true).delay(i * 50).animate({ 'opacity': '1', 'top': '0px' }, 250, 'easeOutCubic'); });
            setTimeout(function() { $('.meta-share-count .nectar-sharing, .meta-share-count .nectar-sharing-alt').removeClass('inactive'); }, 300);
        });
        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
            $('body').on('mouseleave', '.fullscreen-header  .meta-share-count', function() {
                $(this).find('> a, > i').stop(true).animate({ 'opacity': 1 }, 300, 'easeInCubic');
                $(this).find('.nectar-social > *').each(function(i) { $(this).stop(true).animate({ 'opacity': '0', 'top': '10px' }, 200, 'easeInCubic'); });
            });
        }

        // function nectarLoveFWCenter() { $('.nectar-social.full-width').each(function() { $(this).find('.n-shortcode .nectar-love').css('padding-top', $(this).find('> a').css('padding-top')); }); }
        // nectarLoveFWCenter();
        // $('.fullscreen-header .nectar-love').each(function() {
        //     if ($(this).find('.nectar-love-count').text() == '1') {
        //         $(this).find('span.love-txt.single').css({ 'visibility': 'visible', 'text-indent': '0' });
        //         $(this).find('span.love-txt.plural').css({ 'visibility': 'hidden', 'text-indent': '-9999px' });
        //     } else {
        //         $(this).find('span.love-txt.single').css({ 'visibility': 'hidden', 'text-indent': '-9999px' });
        //         $(this).find('span.love-txt.plural').css({ 'visibility': 'visible', 'text-indent': '0' });
        //     }
        // });
        // $('body').on('click', '.nectar-love', function() {
        //     var $loveLink = $(this);
        //     var $id = $(this).attr('id');
        //     var $that = $(this);
        //     if ($loveLink.hasClass('loved')) return false;
        //     if ($(this).hasClass('inactive')) return false;
        //     var $dataToPass = { action: 'nectar-love', loves_id: $id, love_nonce: nectarLove.loveNonce }
        //     $.post(nectarLove.ajaxurl, $dataToPass, function(data) {
        //         $loveLink.find('span:not(.love-txt)').html(data);
        //         $loveLink.addClass('loved').attr('title', 'You already love this!');
        //         $loveLink.find('span:not(.love-txt)').css({ 'opacity': 1, 'width': 'auto' });
        //         if ($(data).text() == '1') {
        //             $loveLink.find('span.love-txt.single').css({ 'visibility': 'visible', 'text-indent': '0' });
        //             $loveLink.find('span.love-txt.plural').css({ 'visibility': 'hidden', 'text-indent': '-9999px' });
        //         } else {
        //             $loveLink.find('span.love-txt.single').css({ 'visibility': 'hidden', 'text-indent': '-9999px' });
        //             $loveLink.find('span.love-txt.plural').css({ 'visibility': 'visible', 'text-indent': '0' });
        //         }
        //         if ($('body').hasClass('ascend') && $that.parents('.classic_enhanced').length == 0) { $that.find('.icon-salient-heart-2').addClass('loved'); } else if ($that.parents('.classic_enhanced').length > 0) { $that.find('.icon-salient-heart-2').addClass('loved'); }
        //     });
        //     $(this).addClass('inactive');
        //     return false;
        // });

        function infiniteScrollInit() {
            if ($('.infinite_scroll').length > 0) {
                $('.portfolio-items.infinite_scroll').infinitescroll({ navSelector: "div#pagination", nextSelector: "div#pagination a:first", itemSelector: ".portfolio-items.infinite_scroll .element", finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>", msgText: " ", }, function(newElements) {
                    var $container = $('.portfolio-items.infinite_scroll:not(.carousel)');
                    var $newElems = $(newElements).css('opacity', 0);
                    $newElems.imagesLoaded(function() {
                        $(newElements).css('opacity', 1);
                        $container.isotope('appended', $(newElements));
                        $(newElements).find('.work-item').addClass('ajax-loaded');
                        $(newElements).addClass('ajax-loaded');
                        $(newElements).find('.work-meta, .nectar-love-wrap').css({ 'opacity': 1 });
                        if ($('.portfolio-filters-inline').length > 0 || $('.portfolio-filters').length > 0) {
                            if ($('.portfolio-filters-inline').length > 0) { var selector = $('.portfolio-filters-inline a.active').attr('data-filter'); } else { var selector = $('.portfolio-filters a.active').attr('data-filter'); }
                            $('.portfolio-filters-inline a.active').attr('data-filter');
                            $container.isotope({ filter: selector });
                        }
                        portfolioItemWidths();
                        reLayout();
                        if ($(newElements).find('.work-item.style-5').length > 0) style6Img();
                        if ($(newElements).find('.inner-wrap').attr('data-animation') == 'none') { $('.portfolio-items .col .inner-wrap').removeClass('animated'); } else {
                            masonryZindex();
                            $(newElements).each(function(i) {
                                var $that = $(this);
                                var waypoint = new Waypoint({
                                    element: $that,
                                    handler: function(direction) {
                                        var $portfolioAnimationDelay = ($that.is('[data-masonry-type="photography"].masonry-items')) ? 85 : 115;
                                        setTimeout(function() { $that.addClass("animated-in"); }, $portfolioAnimationDelay * $that.attr('data-delay-amount'));
                                        waypoint.destroy();
                                    },
                                    offset: $portfolioOffsetPos
                                });
                            });
                        }
                        portfolioHoverEffects();
                        portfolioAccentColor();
                        if ($smoothCache == true && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
                            niceScrollInit();
                            $(window).trigger('resize')
                        }
                        if (!$('body').hasClass('mobile') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
                            $(".portfolio-items:not(.carousel) .work-item.style-3 img").panr({ scaleDuration: .28 });
                            $(".portfolio-items:not(.carousel) .work-item.style-3-alt img").panr({ scaleDuration: .28, sensitivity: 12.6, scaleTo: 1.08, panDuration: 3 });
                        }
                        $('.portfolio-items').each(function() {
                            var $unique_id = Math.floor(Math.random() * 10000);
                            $(this).find('a[rel^="prettyPhoto"], a.pretty_photo').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]').removeClass('pretty_photo');
                        });
                        lightBoxInit();
                        piVertCenter();
                        setTimeout(function() {
                            masonryZindex();
                            reLayout();
                            $(newElements).removeClass('ajax-loaded');
                        }, 700);
                        isotopeCatSelection();
                        parallaxRowsBGCals();
                    });
                });
                $('#post-area.infinite_scroll .posts-container').infinitescroll({ navSelector: "div#pagination", nextSelector: "div#pagination a:first", itemSelector: "#post-area .posts-container .post", finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>", msgText: " " }, function(newElements) {
                    if ($('.masonry.meta_overlaid').length == 0) {
                        centerLove();
                        $(newElements).find('.flex-gallery').each(function() {
                            var $that = $(this);
                            $that.flexslider({ animation: 'fade', smoothHeight: false, animationSpeed: 500, useCSS: false, touch: true });
                            $('.flex-gallery .flex-direction-nav li a.flex-next').html('<i class="fa fa-angle-right"></i>');
                            $('.flex-gallery .flex-direction-nav li a.flex-prev').html('<i class="fa fa-angle-left"></i>');
                        });
                        if ($().mediaelementplayer) $(newElements).find('.wp-audio-shortcode, .wp-video-shortcode').mediaelementplayer();
                        lightBoxInit();
                        if ($('.carousel').length > 0) {
                            standardCarouselInit();
                            clientsCarouselInit();
                        }
                        showLateIframes();
                        $(newElements).find('.nectar-milestone').each(function() { if ($(this).has('[data-symbol]')) { if ($(this).attr('data-symbol-pos') == 'before') { $(this).find('.number').prepend($(this).attr('data-symbol')); } else { $(this).find('.number').append($(this).attr('data-symbol')); } } });
                        if (!$('body').hasClass('mobile')) {
                            $(newElements).find('.nectar-milestone').each(function() {
                                var $that = $(this);
                                var waypoint = new Waypoint({
                                    element: $that,
                                    handler: function(direction) {
                                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                                        var $endNum = parseInt($that.find('.number span').text());
                                        var countOptions = { easingFn: easeOutCubic };
                                        var $countEle = $that.find('.number span:not(.symbol)')[0];
                                        var numAnim = new CountUp($countEle, 0, $endNum, 0, 2.2, countOptions);
                                        numAnim.start();
                                        $that.addClass('animated-in');
                                        waypoint.destroy();
                                    },
                                    offset: 'bottom-in-view'
                                });
                            });
                        }
                        if ($().vcChat) $(newElements).find('.vc_pie_chart').vcChat();
                        nectar_fancy_ul_init();
                        $('.testimonial_slider').animate({ 'opacity': '1' }, 800);
                        createTestimonialControls();
                        testimonialSliderHeight();
                        testimonialHeightResize();
                        $(newElements).find('.nectar-progress-bar').each(function(i) {
                            var $that = $(this);
                            var waypoint = new Waypoint({
                                element: $that,
                                handler: function(direction) {
                                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                                    var percent = $that.find('span').attr('data-width');
                                    var $endNum = parseInt($that.find('span strong i').text());
                                    $that.find('span').transition({ 'width': percent + '%' }, 1600, 'easeInOutCirc', function() {});
                                    $that.find('span strong').transition({ 'opacity': 1 }, 1350);
                                    var countOptions = { useEasing: false };
                                    var $countEle = $that.find('span strong i')[0];
                                    var numAnim = new CountUp($countEle, 0, $endNum, 0, 1.2, countOptions);
                                    numAnim.start();
                                    if (percent == '100') { $that.find('span strong').addClass('full'); }
                                    $that.addClass('animated-in');
                                    waypoint.destroy();
                                },
                                offset: 'bottom-in-view'
                            });
                        });
                        colAndImgAnimations();
                        splitLineHeadings();
                        setTimeout(function() {
                            videoshortcodeSize();
                            responsiveVideoIframesInit();
                            responsiveVideoIframes();
                            $(window).trigger('resize');
                        }, 500);
                        parallaxRowsBGCals();
                        $(window).trigger('resize');
                    } else {
                        parallaxRowsBGCals();
                        $(window).trigger('resize');
                    }
                    var $container = $('.posts-container');
                    if ($container.parent().hasClass('masonry')) {
                        $(newElements).addClass('masonry-blog-item');
                        $(newElements).prepend('<span class="bottom-line"></span>');
                        $(newElements).each(function() {
                            var $metaClone = $(this).find('.post-meta').clone();
                            $(this).find('.post-meta').remove();
                            if ($('#post-area.meta_overlaid').length > 0) { $(this).find('.post-header h2').after($metaClone); } else { $(this).find('.content-inner').after($metaClone); }
                        });
                    }
                    var $newElems = $(newElements);
                    if ($newElems.find('img').length == 0) $newElems = $('body');
                    $newElems.imagesLoaded(function() {
                        $container.isotope('appended', $(newElements));
                        flickityBlogInit();
                        $(newElements).addClass('ajax-loaded');
                        if ($container.parent().hasClass('classic_enhanced')) {
                            $container.find('.large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img').each(function() {
                                var $src = $(this).find('img').attr('src');
                                $(this).css('background-image', 'url(' + $src + ')');
                            });
                            $container.find('.large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity').each(function() {
                                $(this).find('.cell').each(function() {
                                    var $src = $(this).find('img').attr('src');
                                    $(this).css('background-image', 'url(' + $src + ')');
                                });
                            });
                        }
                        if ($(newElements).parents('.posts-container').attr('data-animation') == 'none') { $(newElements).find('.inner-wrap').removeClass('animated'); } else {
                            blogMasonryZindex();
                            $(newElements).each(function(i) {
                                var $that = $(this);
                                var waypoint = new Waypoint({
                                    element: $that,
                                    handler: function(direction) {
                                        setTimeout(function() { $that.addClass("animated-in"); }, 80 * $that.attr('data-delay-amount'));
                                        waypoint.destroy();
                                    },
                                    offset: '90%'
                                });
                            });
                        }
                        setTimeout(function() { $(newElements).removeClass('ajax-loaded'); }, 700);
                    });
                });
            }
        }
        infiniteScrollInit();

        function destroyInfiniteScroll() {
            $('#post-area.infinite_scroll .posts-container').infinitescroll('destroy');
            $('.portfolio-items.infinite_scroll').infinitescroll('destroy');
        }
        var $scrollTop = $(window).scrollTop();

        function toTopBind() {
            if ($('#to-top').length > 0 && $(window).width() > 1020 || $('#to-top').length > 0 && $('#to-top.mobile-enabled').length > 0) {
                if ($scrollTop > 350) { $(window).on('scroll', hideToTop); } else { $(window).on('scroll', showToTop); }
            }
        }
        if ($('.nectar-social-sharing-fixed').length == 0) { toTopBind(); } else {
            if ($(window).width() < 1000) {
                if ($scrollTop > 150) { $(window).on('scroll', hideFixedSharing); } else { $(window).on('scroll', showFixedSharing); }
            }
            $(window).smartresize(function() {
                if ($(window).width() > 1000) { $('.nectar-social-sharing-fixed').addClass('visible'); } else if ($scrollTop < 150) {
                    $(window).off('scroll', hideFixedSharing);
                    $(window).on('scroll', showFixedSharing);
                    $('.nectar-social-sharing-fixed').removeClass('visible');
                } else {
                    $(window).off('scroll', showFixedSharing);
                    $(window).on('scroll', hideFixedSharing);
                }
            });
        }

        function showFixedSharing() {
            if ($scrollTop > 150) {
                $('.nectar-social-sharing-fixed').addClass('visible');
                $(window).off('scroll', showFixedSharing);
                $(window).on('scroll', hideFixedSharing);
            }
        }

        function hideFixedSharing() {
            if ($scrollTop < 150) {
                $('.nectar-social-sharing-fixed').removeClass('visible');
                $(window).off('scroll', hideFixedSharing);
                $(window).on('scroll', showFixedSharing);
            }
        }

        function showToTop() {
            if ($scrollTop > 350 && $('#slide-out-widget-area.fullscreen.open').length == 0) {
                $('#to-top').stop().transition({ 'bottom': '17px' }, 350, 'easeInOutCubic');
                $(window).off('scroll', showToTop);
                $(window).on('scroll', hideToTop);
            }
        }

        function hideToTop() {
            if ($scrollTop < 350 || $('#slide-out-widget-area.fullscreen.open').length > 0) {
                $animationTiming = ($('#slide-out-widget-area.fullscreen.open').length > 0) ? 1150 : 350;
                $('#to-top').stop().transition({ 'bottom': '-30px' }, $animationTiming, 'easeInOutQuint');
                $(window).off('scroll', hideToTop);
                $(window).on('scroll', showToTop);
            }
        }
        if ($('#to-top').length > 0) {
            var $windowHeight, $pageHeight, $footerHeight, $ctaHeight;

            function calcToTopColor() {
                $scrollTop = $(window).scrollTop();
                $windowHeight = $(window).height();
                $pageHeight = $('body').height();
                $footerHeight = $('#footer-outer').height();
                $ctaHeight = ($('#call-to-action').length > 0) ? $('#call-to-action').height() : 0;
                if (($scrollTop - 35 + $windowHeight) >= ($pageHeight - $footerHeight) && $('#boxed').length == 0) { $('#to-top').addClass('dark'); } else { $('#to-top').removeClass('dark'); }
            }
            $(window).scroll(calcToTopColor);
            $(window).resize(calcToTopColor);
        }
        if ($('body[data-button-style*="rounded"]').length > 0) {
            var $clone = $('#to-top .fa-angle-up').clone();
            $clone.addClass('top-icon');
            $('#to-top').prepend($clone)
        }
        $('body').on('click', '#to-top, a[href="#top"]', function() {
            $('body,html').stop().animate({ scrollTop: 0 }, 800, 'easeOutQuad', function() { if ($('.nectar-box-roll').length > 0) { $('body').trigger('mousewheel', [1, 0, 0]); } })
            return false;
        });

        function scrollSpyInit() {
            var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-outer').outerHeight();
            $("#header-outer a[href*='" + location.pathname + "']").each(function() {
                var $href = $(this).attr('href');
                if ($href.indexOf("#") != -1 && $('div' + $href.substr($href.indexOf("#"))).length > 0) {
                    $(this).attr('href', $href.substr($href.indexOf("#")));
                    $(this).parent().removeClass('current_page_item').removeClass('current-menu-item');
                }
                if ($('div[data-fullscreen-anchor-id="' + $href.substr($href.indexOf("#") + 1) + '"]').length > 0) { $(this).parent().removeClass('current_page_item').removeClass('current-menu-item'); }
            });
            $target = ($('.page-submenu[data-sticky="true"]').length == 0) ? '#header-outer nav' : '.page-submenu';
            $('body').scrollspy({ target: $target, offset: $headerNavSpace + adminBarHeight + 40 });
        }

        function pageLoadHash() {
            var $hash = window.location.hash;
            var $hashSubstrng = ($hash && $hash.length > 0) ? $hash.substring(1, $hash.length) : 0;
            if ($hash && $($hash).length > 0 || $hash && $('[data-fullscreen-anchor-id="' + $hashSubstrng + '"]').length > 0) {
                $hashObj = ($($hash).length > 0) ? $($hash) : $('div[data-fullscreen-anchor-id="' + $hashSubstrng + '"]');
                var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-space').outerHeight();
                $timeoutVar = 0;
                if ($('.nectar-box-roll').length > 0 && $('.container-wrap.bottomBoxOut').length > 0) {
                    boxRoll(null, -1);
                    $timeoutVar = 2050;
                }
                setTimeout(function() {
                    if ($('body[data-permanent-transparent="1"]').length == 0) {
                        if (!$('body').hasClass('mobile')) {
                            $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(shrinkNum) + headerPadding2 * 2;
                            if ($('#header-outer[data-remove-fixed="1"]').length > 0) { $headerNavSpace = 0; }
                            var $scrollTopDistance = $hashObj.offset().top - parseInt($headerNavSpace) + $resize + 3 - adminBarHeight;
                        } else { var $scrollTopDistance = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? $hashObj.offset().top + 2 - $headerNavSpace + adminBarHeight : $hashObj.offset().top - adminBarHeight + 1; }
                    } else { var $scrollTopDistance = $hashObj.offset().top - adminBarHeight + 1; }
                    if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) {
                        if ($('#header-outer.detached').length == 0)
                            $scrollTopDistance = $scrollTopDistance + $headerNavSpace;
                    }
                    var $pageSubMenu = ($('.page-submenu[data-sticky="true"]').length > 0) ? $('.page-submenu').height() : 0;
                    $('body,html').stop().animate({ scrollTop: $scrollTopDistance - $pageSubMenu }, 800, 'easeInOutCubic');
                }, $timeoutVar);
            }
        }
        if ($('body[data-animated-anchors="true"]').length > 0) {
            + function(t) {
                "use strict";

                function s(e, i) {
                    var r = t.proxy(this.process, this);
                    this.$body = t("body"), this.$scrollElement = t(t(e).is("body") ? window : e), this.options = t.extend({}, s.DEFAULTS, i), this.selector = (this.options.target || "") + " ul li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process()
                }

                function e(e) {
                    return this.each(function() {
                        var i = t(this),
                            r = i.data("bs.scrollspy"),
                            o = "object" == typeof e && e;
                        r || i.data("bs.scrollspy", r = new s(this, o)), "string" == typeof e && r[e]()
                    })
                }
                s.VERSION = "3.2.0", s.DEFAULTS = { offset: 10 }, s.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, s.prototype.refresh = function() {
                    var s = "offset",
                        e = 0;
                    t.isWindow(this.$scrollElement[0]) || (s = "position", e = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
                    var i = this;
                    this.$body.find(this.selector).map(function() {
                        var i = t(this),
                            r = i.data("target") || i.attr("href"),
                            o = /^#./.test(r) && t(r);
                        return o && o.length && o.is(":visible") && [
                            [o[s]().top + e, r]
                        ] || null
                    }).sort(function(t, s) { return t[0] - s[0] }).each(function() { i.offsets.push(this[0]), i.targets.push(this[1]) })
                }, s.prototype.process = function() {
                    var $pageSubMenu = ($('.page-submenu[data-sticky="true"]').length > 0 && $('body[data-hhun="1"]').length == 0 || $('.page-submenu[data-sticky="true"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length > 0) ? $('.page-submenu').height() : 0;
                    var t, s = this.$scrollElement.scrollTop() + this.options.offset + $pageSubMenu,
                        e = this.getScrollHeight(),
                        i = this.options.offset + e - this.$scrollElement.height() - $pageSubMenu,
                        r = this.offsets,
                        o = this.targets,
                        l = this.activeTarget;
                    if (this.scrollHeight != e && this.refresh(), s >= i) return l != (t = o[o.length - 1]) && this.activate(t);
                    if (l && s <= r[0]) return l != (t = o[0]) && this.activate(t);
                    for (t = r.length; t--;) l != o[t] && s >= r[t] && (!r[t + 1] || s <= r[t + 1]) && this.activate(o[t])
                }, s.prototype.activate = function(s) {
                    this.activeTarget = s, t(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item").removeClass('sfHover');
                    var e = this.selector + '[data-target="' + s + '"],' + this.selector + '[href="' + s + '"]',
                        i = t(e).parents("li").addClass("current-menu-item");
                    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("current-menu-item")), i.trigger("activate.bs.scrollspy")
                };
                var i = t.fn.scrollspy;
                t.fn.scrollspy = e, t.fn.scrollspy.Constructor = s, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = i, this }
            }(jQuery);
            var shrinkNum = 6;
            if ($('#header-outer[data-shrink-num]').length > 0) shrinkNum = $('#header-outer').attr('data-shrink-num');
            headerPadding2 = headerPadding - headerPadding / 1.8;
            setTimeout(scrollSpyInit, 200);
            var $animatedScrollingTimeout;
            $('body').on('click', '#header-outer nav .sf-menu a, #footer-outer .nectar-button, .container-wrap a:not(.wpb_tabs_nav a):not(.woocommerce-tabs a), .swiper-slide .button a, #slide-out-widget-area a, #mobile-menu .container ul li a, #slide-out-widget-area .inner div a', function(e) {
                var $hash = $(this).prop("hash");
                $('body').addClass('animated-scrolling');
                clearTimeout($animatedScrollingTimeout);
                $animatedScrollingTimeout = setTimeout(function() { $('body').removeClass('animated-scrolling'); }, 850);
                var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-space').outerHeight();
                if ($hash && $($hash).length > 0 && $hash != '#top' && $hash != '' && $(this).attr('href').indexOf(window.location.href.split("#")[0]) !== -1 || $(this).is('[href^="#"]') && $hash != '' && $($hash).length > 0 && $hash != '#top') {
                    if (history.pushState) { history.pushState(null, null, $hash); } else { location.hash = $hash; }
                    if ($(this).parents('ul').length > 0) { $(this).parents('ul').find('li').removeClass('current-menu-item'); }
                    if ($(this).parents('#slide-out-widget-area').length > 0) { $('#slide-out-widget-area .slide_out_area_close').trigger('click'); }
                    if ($(this).parents('#mobile-menu').length > 0) $('#toggle-nav').trigger('click');
                    var $mobileMenuHeight = ($(this).parents('#mobile-menu').length > 0) ? $(this).parents('#mobile-menu').height() : null;
                    $timeoutVar = 1;
                    if ($('.nectar-box-roll').length > 0 && $('.container-wrap.bottomBoxOut').length > 0) {
                        boxRoll(null, -1);
                        $timeoutVar = 2050;
                    }
                    var $that = $(this);
                    setTimeout(function() {
                        var $headerSpace = ($('body[data-permanent-transparent="1"]').length > 0) ? 0 : parseInt($headerNavSpace);
                        if ($('body[data-permanent-transparent="1"]').length == 0) {
                            if (!$('body').hasClass('mobile')) {
                                $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(shrinkNum) + headerPadding2 * 2;
                                if ($('#header-outer[data-remove-fixed="1"]').length > 0) { $headerNavSpace = 0; }
                                var $scrollTopDistance = $($hash).offset().top - $mobileMenuHeight - parseInt($headerNavSpace) + $resize + 3 - adminBarHeight;
                            } else { var $scrollTopDistance = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? $($hash).offset().top + 2 - $headerNavSpace + adminBarHeight : $($hash).offset().top - $mobileMenuHeight - adminBarHeight + 1; }
                        } else { var $scrollTopDistance = $($hash).offset().top - adminBarHeight + 1; }
                        if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) {
                            if ($('#header-outer.detached').length == 0 || $that.parents('.page-submenu[data-sticky="true"]').length > 0)
                                $scrollTopDistance = $scrollTopDistance + $headerNavSpace;
                            if ($that.parents('.page-submenu[data-sticky="true"]').length > 0) {
                                $('#header-outer.detached').addClass('invisible');
                                $('.page-submenu').addClass('header-not-visible').css('transform', 'translateY(0px)');
                            }
                        }
                        var $pageSubMenu = ($that.parents('.page-submenu[data-sticky="true"]').length > 0) ? $that.parents('.page-submenu').height() : 0;
                        $('body,html').stop().animate({ scrollTop: $scrollTopDistance - $pageSubMenu }, 800, 'easeInOutCubic');
                    }, $timeoutVar);
                    e.preventDefault();
                }
                if ($hash == '#top') { if ($(this).parents('#slide-out-widget-area').length > 0) { $('#slide-out-widget-area .slide_out_area_close').trigger('click'); } }
            });
            if ($('.nectar-box-roll').length == 0 && $('#nectar_fullscreen_rows').length == 0) $(window).load(pageLoadHash);
            if ($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && $('.nectar-box-roll').length == 0 && $onMobileBrowser) { $(window).load(pageLoadHash); }
        }
        if ($('.portfolio-items .col .style-3-alt').length > 0 || $('.portfolio-items .col .style-3').length > 0 || $('.portfolio-items .col .style-2').length > 0 || $('.portfolio-items .col .style-5').length > 0) {
            var portfolioColorCss = '';
            $('.portfolio-items .col').each(function() {
                $titleColor = $(this).attr('data-title-color');
                $subTitleColor = $(this).attr('data-subtitle-color');
                if ($titleColor.length > 0) {
                    portfolioColorCss += '.col[data-title-color="' + $titleColor + '"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="' + $titleColor + '"] .work-meta h4 { color: ' + $titleColor + '; } ';
                    portfolioColorCss += ' .portfolio-items[data-ps="8"] .col[data-title-color="' + $titleColor + '"] .line { background-color: ' + $titleColor + '; }';
                    portfolioColorCss += '.portfolio-items[data-ps="8"] .col[data-title-color="' + $titleColor + '"] .next-arrow line { stroke: ' + $titleColor + '; } ';
                }
                if ($subTitleColor.length > 0) portfolioColorCss += '.col[data-subtitle-color="' + $subTitleColor + '"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="' + $titleColor + '"] .work-meta p { color: ' + $subTitleColor + '; } ';
            });
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) { style.styleSheet.cssText = portfolioColorCss; } else { style.appendChild(document.createTextNode(portfolioColorCss)); }
            head.appendChild(style);
        }
        $('body').on('mouseleave', '.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li', function() { $(this).addClass('mouse-leaving'); });
        var $portfolio_containers = [];
        $('.portfolio-items:not(.carousel)').each(function(i) { $portfolio_containers[i] = $(this); });

        function masonryPortfolioInit() {
            $portfolio_containers = [];
            $('.portfolio-items:not(.carousel)').each(function(i) { $portfolio_containers[i] = $(this); });
            var $window = jQuery(window);
            $.each($portfolio_containers, function(i) {
                $portfolio_containers[i].imagesLoaded(function() {
                    if ($smoothCache == true && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
                        niceScrollInit();
                        $(window).trigger('resize')
                    }
                    var $isoUseTransforms = true;
                    if (!$('body').hasClass('mobile') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
                        $(".portfolio-items:not(.carousel) .work-item.style-3 img").panr({ scaleDuration: .28 });
                        $(".portfolio-items:not(.carousel) .work-item.style-3-alt img").panr({ scaleDuration: .28, sensitivity: 20, scaleTo: 1.12, panDuration: 1 });
                        $isoUseTransforms = true;
                    }
                    piVertCenter();
                    var $layoutMode = ($portfolio_containers[i].hasClass('masonry-items')) ? 'packery' : 'fitRows';
                    var $startingFilter = ($portfolio_containers[i].attr('data-starting-filter') != '' && $portfolio_containers[i].attr('data-starting-filter') != 'default') ? '.' + $portfolio_containers[i].attr('data-starting-filter') : '*';
                    reLayout();
                    $portfolio_containers[i].isotope({ itemSelector: '.element', filter: $startingFilter, layoutMode: $layoutMode, transitionDuration: '0.6s', packery: { gutter: 0 } }).isotope('layout');
                    if ($startingFilter != '*') { $('.portfolio-filters ul a[data-filter="' + $startingFilter + '"], .portfolio-filters-inline ul a[data-filter="' + $startingFilter + '"]').click(); }
                    masonryZindex();
                    setTimeout(function() { masonryZindex(); }, 800);
                    $window.resize(reLayout);
                    $window.smartresize(function() { setTimeout(masonryZindex, 700); });
                    if ($portfolio_containers[i].parents('.full-width-content').length > 0) { setTimeout(function() { fullWidthContentColumns(); }, 200); }
                    $('.portfolio-loading').stop(true, true).fadeOut(200);
                    if ($portfolio_containers[i].find('.inner-wrap').attr('data-animation') == 'none') { $portfolio_containers[i].find('.inner-wrap').removeClass('animated'); } else {}
                });
            });
        }
        masonryPortfolioInit();

        function portfolioLoadIn() {
            $($fullscreenSelector + '.portfolio-items').each(function() {
                $portfolioOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '100%' : '90%';
                if ($(this).find('.inner-wrap').attr('data-animation') == 'none') return;
                $(this).find('.col').each(function(i) {
                    var $that = $(this);
                    if ($(this).visible(true) || $(this).parents('#nectar_fullscreen_rows').length > 0) {
                        var $portfolioAnimationDelay = ($that.is('[data-masonry-type="photography"].masonry-items')) ? 90 : 115;
                        $(this).delay($portfolioAnimationDelay * i).queue(function(next) {
                            $(this).addClass("animated-in");
                            next();
                        });
                    } else {
                        var waypoint = new Waypoint({
                            element: $that,
                            handler: function(direction) {
                                if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { waypoint.destroy(); return; }
                                var $portfolioAnimationDelay = ($that.is('[data-masonry-type="photography"].masonry-items')) ? 85 : 100;
                                setTimeout(function() { $that.addClass("animated-in"); }, $portfolioAnimationDelay * $that.attr('data-delay-amount'));
                                waypoint.destroy();
                            },
                            offset: $portfolioOffsetPos
                        });
                    }
                });
            });
        }
        if ($('.portfolio-items .inner-wrap[data-animation="perspective"]').length > 0 || $('.posts-container[data-load-animation="perspective"]').length > 0) {
            var lastScrollTop = $(window).scrollTop();
            $('.portfolio-items, .posts-container[data-load-animation="perspective"]').css('perspective-origin', '50% ' + (lastScrollTop + $(window).height()) + 'px');
            requestAnimationFrame(updatePerspectiveOrigin);

            function updatePerspectiveOrigin() {
                var scrollTop = $(window).scrollTop();
                if (lastScrollTop === scrollTop) { requestAnimationFrame(updatePerspectiveOrigin); return; } else {
                    lastScrollTop = scrollTop;
                    $('.portfolio-items,.posts-container[data-load-animation="perspective"]').css('perspective-origin', '50% ' + (lastScrollTop + $(window).height()) + 'px');
                    requestAnimationFrame(updatePerspectiveOrigin);
                }
            }
        }
        var mediaQuerySize;

        function reLayout() {
            clearTimeout(clearIsoAnimation);
            $('.portfolio-items .col').addClass('no-transition');
            clearIsoAnimation = setTimeout(function() { $('.portfolio-items .col').removeClass('no-transition'); }, 700);
            var windowSize = $window.width();
            var masonryObj;
            var masonryObjHolder = [];
            var userDefinedColWidth;
            $.each($portfolio_containers, function(i) {
                if ($portfolio_containers[i].attr('data-user-defined-cols') == 'span4') { userDefinedColWidth = 3 } else if ($portfolio_containers[i].attr('data-user-defined-cols') == 'span3') { userDefinedColWidth = 4 }
                var isFullWidth = $portfolio_containers[i].attr('data-col-num') == 'elastic';
                if (window.innerWidth > 1600) { if ($portfolio_containers[i].hasClass('fullwidth-constrained')) { if ($portfolio_containers[i].is('[data-masonry-type="photography"]')) { mediaQuerySize = 'three'; } else { mediaQuerySize = 'four'; } } else { if ($portfolio_containers[i].hasClass('constrain-max-cols')) { mediaQuerySize = 'four'; } else { mediaQuerySize = 'five'; } } } else if (window.innerWidth <= 1600 && window.innerWidth > 1300) { if ($portfolio_containers[i].hasClass('fullwidth-constrained')) { if ($portfolio_containers[i].is('[data-masonry-type="photography"]')) { mediaQuerySize = 'three'; } else { mediaQuerySize = 'four'; } } else { mediaQuerySize = 'four'; } } else if (window.innerWidth <= 1300 && window.innerWidth > 990) { if ($portfolio_containers[i].hasClass('constrain-max-cols')) { mediaQuerySize = 'four'; } else { mediaQuerySize = 'three'; } } else if (window.innerWidth <= 990 && window.innerWidth > 470) { mediaQuerySize = 'two'; } else if (window.innerWidth <= 470) { mediaQuerySize = 'one'; }
                if ($('#boxed').length > 0) { if (window.innerWidth > 1300) { mediaQuerySize = 'four'; } else if (window.innerWidth < 1300 && window.innerWidth > 990) { if ($portfolio_containers[i].hasClass('constrain-max-cols')) { mediaQuerySize = 'four'; } else { mediaQuerySize = 'three'; } } else if (window.innerWidth < 990) { mediaQuerySize = 'one'; } }
                switch (mediaQuerySize) {
                    case 'five':
                        (isFullWidth) ? colWidth = 5: colWidth = userDefinedColWidth;
                        if (isFullWidth && $portfolio_containers[i].is('[data-masonry-type="photography"]')) colWidth = 6;
                        masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / parseInt(colWidth)) };
                        break;
                    case 'four':
                        (isFullWidth) ? colWidth = 4: colWidth = userDefinedColWidth;
                        if (isFullWidth && $portfolio_containers[i].is('[data-masonry-type="photography"]')) colWidth = 5;
                        masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / parseInt(colWidth)) };
                        break;
                    case 'three':
                        (isFullWidth) ? colWidth = 3: colWidth = userDefinedColWidth;
                        if (isFullWidth && $portfolio_containers[i].is('[data-masonry-type="photography"]')) colWidth = 4;
                        masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / parseInt(colWidth)) };
                        break;
                    case 'two':
                        masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / 2) };
                        break;
                    case 'one':
                        masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / 1) };
                        break;
                }
                portfolioItemWidths();
                if ($portfolio_containers[i].find('.col.elastic-portfolio-item[class*="regular"]:visible').length > 0 || $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="wide"]:visible').length > 0 || $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="tall"]:visible').length > 0 || $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="wide_tall"]:visible').length > 0) {
                    var $gutterSize = ($portfolio_containers[i].is('[data-gutter*="px"]') && $portfolio_containers[i].attr('data-gutter').length > 0 && $portfolio_containers[i].attr('data-gutter') != 'none') ? parseInt($portfolio_containers[i].attr('data-gutter')) : 0;
                    var multipler = (window.innerWidth > 470) ? 2 : 1;
                    $itemClassForSizing = 'regular';
                    if ($portfolio_containers[i].find('.col.elastic-portfolio-item[class*="regular"]:visible').length == 0 && $portfolio_containers[i].find('.col.elastic-portfolio-item.wide:visible').length > 0) { $itemClassForSizing = 'wide'; } else if ($portfolio_containers[i].find('.col.elastic-portfolio-item[class*="regular"]:visible').length == 0 && $portfolio_containers[i].find('.col.elastic-portfolio-item.wide_tall:visible').length > 0) {
                        $itemClassForSizing = 'wide_tall';
                        multipler = 1;
                    } else if ($portfolio_containers[i].find('.col.elastic-portfolio-item[class*="regular"]:visible').length == 0 && $portfolio_containers[i].find('.col.elastic-portfolio-item.tall:visible').length > 0) {
                        $itemClassForSizing = 'tall';
                        multipler = 1;
                    }
                    $portfolio_containers[i].find('.col.elastic-portfolio-item.' + $itemClassForSizing + ' img').css('height', 'auto');
                    var tallColHeight = $portfolio_containers[i].find('.col.elastic-portfolio-item.' + $itemClassForSizing + ':visible img').height();
                    $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="tall"] img, .col.elastic-portfolio-item.wide img, .col.elastic-portfolio-item.regular img').removeClass('auto-height');
                    $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="tall"] img:not(.custom-thumbnail)').css('height', (tallColHeight * multipler) + ($gutterSize * 2));
                    if ($itemClassForSizing == 'regular' || $itemClassForSizing == 'wide') { $portfolio_containers[i].find('.col.elastic-portfolio-item.wide img:not(.custom-thumbnail), .col.elastic-portfolio-item.regular img:not(.custom-thumbnail)').css('height', tallColHeight); } else { $portfolio_containers[i].find('.col.elastic-portfolio-item.wide img:not(.custom-thumbnail), .col.elastic-portfolio-item.regular img:not(.custom-thumbnail)').css('height', (tallColHeight / 2) - ($gutterSize * 2)); }
                    $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="tall"] .parallaxImg').css('height', (tallColHeight * multipler) + parseInt($portfolio_containers[i].find('.col.elastic-portfolio-item').css('padding-bottom')) * 2);
                    if ($itemClassForSizing == 'regular' || $itemClassForSizing == 'wide') { $portfolio_containers[i].find('.col.elastic-portfolio-item.regular .parallaxImg, .col.elastic-portfolio-item.wide .parallaxImg').css('height', tallColHeight); } else { $portfolio_containers[i].find('.col.elastic-portfolio-item.regular .parallaxImg, .col.elastic-portfolio-item.wide .parallaxImg').css('height', (tallColHeight / 2) - ($gutterSize * 2)); }
                } else { $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="tall"] img, .col.elastic-portfolio-item.wide img, .col.elastic-portfolio-item.regular img').addClass('auto-height'); }
                if ($portfolio_containers[i].hasClass('no-masonry') && $portfolio_containers[i].find('.col:first:visible').length > 0 && $portfolio_containers[i].parents('.wpb_gallery').length == 0) {
                    $portfolio_containers[i].find('.col img').css('height', 'auto');
                    var tallColHeight = $portfolio_containers[i].find('.col:first:visible img').height();
                    $portfolio_containers[i].find('.col img:not(.custom-thumbnail)').css('height', tallColHeight);
                    $portfolio_containers[i].find('.col .parallaxImg').css('height', tallColHeight);
                }
                masonryObjHolder[i] = masonryObj;
                if ($portfolio_containers[i].isotope()) $portfolio_containers[i].isotope('layout');
            });
        }

        function portfolioItemWidths() {
            $.each($portfolio_containers, function(i, v) {
                var isFullWidth = $portfolio_containers[i].attr('data-col-num') == 'elastic';
                var $colSize = 4;
                var $mult = (mediaQuerySize == 'one') ? 1 : 2;
                if (mediaQuerySize == 'five') $colSize = 5;
                if (mediaQuerySize == 'four') $colSize = 4;
                if (mediaQuerySize == 'three') $colSize = 3;
                if (mediaQuerySize == 'two') $colSize = 2;
                if (mediaQuerySize == 'one') $colSize = 1;
                if ($(v).is('[data-ps="6"]') && $colSize == 5) $colSize = 4;
                if (isFullWidth && $portfolio_containers[i].is('[data-masonry-type="photography"]') && !$portfolio_containers[i].hasClass('no-masonry')) { if (mediaQuerySize == 'five') $colSize = 6; if (mediaQuerySize == 'four') $colSize = 5; if (mediaQuerySize == 'three') $colSize = 4; }
                if ($(v).width() % $colSize == 0) {
                    $(v).find('.elastic-portfolio-item:not(.wide):not(.wide_tall)').css('width', Math.floor($(v).width() / $colSize) + 'px');
                    $(v).find('.elastic-portfolio-item.wide, .elastic-portfolio-item.wide_tall').css('width', Math.floor($(v).width() / $colSize * $mult) + 'px');
                } else {
                    var $loopEndNum = ($(window).width() > 1000) ? 6 : 3;
                    if ($portfolio_containers[i].hasClass('fullwidth-constrained') && $(window).width() > 1000) $loopEndNum = 4;
                    for (var i = 1; i < $loopEndNum; i++) {
                        if (($(v).width() - i) % $colSize == 0) {
                            $(v).find('.elastic-portfolio-item:not(.wide):not(.wide_tall)').css('width', ($(v).width() - i) / $colSize + 'px');
                            $(v).find('.elastic-portfolio-item.wide, .elastic-portfolio-item.wide_tall').css('width', ($(v).width() - i) / $colSize * $mult + 'px');
                        }
                    }
                }
            });
        }

        function masonryZindex() {
            if ($('body .portfolio-items:not(".carousel") .elastic-portfolio-item').length > 0 && $('body .portfolio-items:not(".carousel") .elastic-portfolio-item').offset().left) {
                var $coords = {};
                var $zindexRelation = {};
                $('body .portfolio-items:not(".carousel") .elastic-portfolio-item').each(function() {
                    var $itemOffset = $(this).offset();
                    $itemOffset = $itemOffset.left;
                    $coords[$(this).index()] = $itemOffset;
                    $(this).css('z-index', Math.abs(Math.floor($(this).offset().left / 20)));
                });
                var $corrdsArr = $.map($coords, function(value) { return value; });
                $corrdsArr = removeDuplicates($corrdsArr);
                $corrdsArr.sort(function(a, b) { return a - b });
                for (var i = 0; i < $corrdsArr.length; i++) { $zindexRelation[$corrdsArr[i]] = i; }
                $.each($coords, function(k, v) {
                    var $zindex;
                    var $coordCache = v;
                    $.each($zindexRelation, function(k, v) { if ($coordCache == k) { $zindex = v; } });
                    $('body .portfolio-items:not(".carousel") .elastic-portfolio-item:eq(' + k + ')').attr('data-delay-amount', $zindex);
                });
            }
        }

        function blogMasonryZindex() {
            if ($('body #post-area .masonry-blog-item').length > 0 && $('body #post-area .masonry-blog-item').offset().left) {
                var $coords = {};
                var $zindexRelation = {};
                $('body #post-area .masonry-blog-item').each(function() {
                    var $itemOffset = $(this).offset();
                    $itemOffset = $itemOffset.left;
                    $coords[$(this).index()] = $itemOffset;
                });
                var $corrdsArr = $.map($coords, function(value) { return value; });
                $corrdsArr = removeDuplicates($corrdsArr);
                $corrdsArr.sort(function(a, b) { return a - b });
                for (var i = 0; i < $corrdsArr.length; i++) { $zindexRelation[$corrdsArr[i]] = i * 1; }
                $.each($coords, function(k, v) {
                    var $zindex;
                    var $coordCache = v;
                    $.each($zindexRelation, function(k, v) { if ($coordCache == k) { $zindex = v; } });
                    $('body #post-area .masonry-blog-item:eq(' + k + ')').css('z-index', $zindex).attr('data-delay-amount', $zindex);
                });
            }
        }

        function matrixToArray(matrix) { return matrix.substr(7, matrix.length - 8).split(', '); }

        function removeDuplicates(inputArray) {
            var i;
            var len = inputArray.length;
            var outputArray = [];
            var temp = {};
            for (i = 0; i < len; i++) { temp[inputArray[i]] = 0; }
            for (i in temp) { outputArray.push(i); }
            return outputArray;
        }
        var clearIsoAnimation = null;
        var $checkForScrollBar = null;
        $('.portfolio-items:not(".carousel")').each(function(i) {
            $(this).attr('instance', i);
            $(this).parent().parent().find('div[class^=portfolio-filters]').attr('instance', i);
        });

        function isoClickFilter() {
            var $timeout;
            if (window.innerWidth > 690 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
                clearTimeout($timeout);
                $timeout = setTimeout(function() { masonryZindex(); }, 600);
            }
            var selector = $(this).attr('data-filter');
            var $instance = $(this).parents('div[class^=portfolio-filters]').attr('instance');
            $.each($portfolio_containers, function(i) {
                if ($portfolio_containers[i].attr('instance') == $instance) {
                    $portfolio_containers[i].isotope({ filter: selector }).attr('data-current-cat', selector);
                    $portfolio_containers[i].find('.col').addClass('animated-in');
                }
            });
            $(this).parent().parent().find('li a').removeClass('active');
            $(this).addClass('active');
            if ($('.portfolio-items a[rel^="prettyPhoto"]').length > 0) { setTimeout(updatePrettyPhotoGallery, 170); } else { setTimeout(updateMagPrettyPhotoGallery, 170); }
            return false;
        }
        $('body').on('click', '.portfolio-filters ul li a, .portfolio-filters-inline ul li a', isoClickFilter);

        function updatePrettyPhotoGallery() {
            $('.portfolio-items').each(function() {
                if ($(this).find('a[rel^="prettyPhoto"]').length > 0) {
                    var $unique_id = Math.floor(Math.random() * 10000);
                    var $currentCat = $(this).attr('data-current-cat');
                    $(this).find('.col' + $currentCat).find('a[rel^="prettyPhoto"]').attr('rel', 'prettyPhoto[' + $unique_id + '_sorted]');
                }
            });
        }

        function updateMagPrettyPhotoGallery() {
            $('.portfolio-items').each(function() {
                var $currentCat = $(this).attr('data-current-cat');
                $(this).find('.col').each(function() {
                    $(this).find('a.gallery').removeClass('gallery').removeClass('magnific');
                    if ($(this).is($currentCat))
                        $(this).find('.work-info a').addClass('gallery').addClass('magnific');
                });
            });
        }

        function masonryBlogInit() {
            var $posts_container = $('.posts-container')
            if ($posts_container.parent().hasClass('masonry')) {
                $posts_container.find('article').addClass('masonry-blog-item');
                $posts_container.find('article').prepend('<span class="bottom-line"></span>');
                $posts_container.find('article').each(function() {
                    var $metaClone = $(this).find('.post-meta').clone();
                    $(this).find('.post-meta').remove();
                    if ($('#post-area.meta_overlaid').length > 0) { $(this).find('.post-header h2').after($metaClone); } else { $(this).find('.content-inner').after($metaClone); }
                });
                if ($posts_container.parent().hasClass('masonry') && $posts_container.parent().hasClass('full-width-content')) {
                    $posts_container.parent().wrap('<div class="full-width-content blog-fullwidth-wrap"> </div>').removeClass('full-width-content').css({ 'margin-left': '0', 'width': 'auto' });
                    if ($posts_container.parents('.wpb_row').length > 0) $posts_container.parents('.wpb_row').css('z-index', 100);
                    if ($('.masonry.meta_overlaid').length == 0) { if ($('.masonry.classic_enhanced').length > 0) { $posts_container.parent().parents('.full-width-content').css({ 'padding': '0px 0.2% 0px 2.4%' }); } else { $posts_container.parent().parents('.full-width-content').css({ 'padding': '0px 0.2% 0px 3.2%' }); } } else {
                        $posts_container.parent().parents('.full-width-content').addClass('meta-overlaid');
                        $('.container-wrap').addClass('meta_overlaid_blog');
                    }
                    fullWidthSections();
                }
                var $cols = 3;
                var $element = $posts_container;
                if ($posts_container.find('img').length == 0) $element = $('<img />');
                imagesLoaded($element, function(instance) {
                    if ($('body').hasClass('mobile') || $('#post-area').hasClass('span_9')) { $cols = 2; }
                    if ($posts_container.parent().hasClass('classic_enhanced')) {
                        $posts_container.find('.large_featured.has-post-thumbnail .post-featured-img, .wide_tall.has-post-thumbnail .post-featured-img').each(function() {
                            var $src = $(this).find('img').attr('src');
                            $(this).css('background-image', 'url(' + $src + ')');
                        });
                        $posts_container.find('.large_featured .nectar-flickity, .wide_tall .nectar-flickity').each(function() {
                            $(this).find('.cell').each(function() {
                                var $src = $(this).find('img').attr('src');
                                $(this).css('background-image', 'url(' + $src + ')');
                            });
                        });
                    }
                    $cols = blogColumnNumbCalcs();
                    blogHeightCalcs($posts_container, $cols);
                    if ($('#post-area.meta_overlaid').length > 0) { $posts_container.isotope({ itemSelector: 'article', transitionDuration: '0s', layoutMode: 'packery', packery: { gutter: 0 } }).isotope('layout'); } else {
                        if ($posts_container.parent().hasClass('classic_enhanced')) { if ($('.span_9.masonry').length == 0) { $multiplier = (window.innerWidth >= 1600) ? .015 : .02; } else { $multiplier = .04; } } else { $multiplier = ($('.span_9.masonry').length == 0) ? .02 : .04; }
                        $posts_container.isotope({ itemSelector: 'article', transitionDuration: '0s', layoutMode: 'packery', packery: { gutter: $('#post-area').width() * $multiplier } }).isotope('layout');
                    }
                    blogLoadIn();
                    flickityBlogInit();
                    $(window).trigger('resize');
                    blogMasonryZindex();
                    setTimeout(blogMasonryZindex, 700);
                    $window.smartresize(function() { setTimeout(blogMasonryZindex, 700); });
                });
                $(window).resize(function() {
                    $cols = blogColumnNumbCalcs();
                    blogHeightCalcs($posts_container, $cols);
                    if ($('#post-area.meta_overlaid').length > 0) { $posts_container.isotope({ layoutMode: 'packery', packery: { gutter: 0 } }); } else {
                        if ($posts_container.parent().hasClass('classic_enhanced')) { if ($('.span_9.masonry').length == 0) { $multiplier = (window.innerWidth >= 1600) ? .015 : .02; } else { $multiplier = .04; } } else { $multiplier = ($('.span_9.masonry').length == 0) ? .02 : .04; }
                        $posts_container.isotope({ layoutMode: 'packery', packery: { gutter: $('#post-area').width() * $multiplier } });
                    }
                });
            } else { blogLoadIn(); }
        }
        masonryBlogInit();

        function blogLoadIn() {
            $('.posts-container').each(function() {
                if ($(this).attr('data-load-animation') == 'none') { $(this).find('.inner-wrap').removeClass('animated'); } else {
                    $(this).find('article').each(function(i) {
                        if ($(this).visible(true)) {
                            $(this).delay(110 * i).queue(function(next) {
                                $(this).addClass("animated-in");
                                next();
                            });
                        } else {
                            var $that = $(this);
                            var waypoint = new Waypoint({
                                element: $that,
                                handler: function(direction) {
                                    setTimeout(function() { $that.addClass("animated-in"); }, 80 * $that.attr('data-delay-amount'));
                                    waypoint.destroy();
                                },
                                offset: '90%'
                            });
                        }
                    });
                }
            });
        }

        function blogHeightCalcs($posts_container, cols) {
            if ($posts_container.parent().hasClass('meta_overlaid') && $posts_container.find('article[class*="regular"]').length > 0) {
                $.each($posts_container, function(i, v) {
                    var $colSize = 4;
                    var $mult = (cols == 1) ? 1 : 2;
                    if ($('html.no-csstransitions').length == 0) {
                        $(v).find('article[class*="regular"]').css('width', Math.floor($(v).width() / cols) + 'px');
                        $(v).find('article[class*="tall"]').css('width', Math.floor($(v).width() / cols * $mult) + 'px');
                    } else { $('#post-area.masonry').css('width', '100%'); }
                });
                $posts_container.find('article[class*="regular"] img').css('height', 'auto');
                var tallColHeight = Math.ceil($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote") img').first().height());
                var multipler = (window.innerWidth > 690) ? 2 : 1;
                $posts_container.find('article[class*="tall"] img, .article.wide img, article.regular img').removeClass('auto-height');
                $posts_container.find('article[class*="tall"] img').css('height', (tallColHeight * multipler));
                $posts_container.find('article[class*="regular"] img').css('height', (tallColHeight));
                $posts_container.find('article.regular.format-link,article.regular.format-quote').each(function() { if (window.innerWidth > 690) { $(this).css({ 'height': tallColHeight }); } else { $(this).css({ 'height': 'auto' }); } });
            } else { $posts_container.find('article[class*="tall"] img, article.regular img').addClass('auto-height'); }
            if ($posts_container.parent().hasClass('classic_enhanced') && $posts_container.find('article[class*="regular"]').length > 0) {
                if ($(window).width() > 690)
                    classicEnhancedSizing($posts_container.find('article:not(.large_featured):not(.wide_tall)'));
                else
                    classicEnhancedSizing($posts_container.find('article:not(.wide_tall)'));
                var tallColHeight = ($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().length > 0) ? Math.ceil($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().css('height', 'auto').height()) : 600;
                if ($(window).width() > 690)
                    $posts_container.find('article.large_featured, article.regular, article[class*="wide_tall"]').css('height', (tallColHeight));
                else
                    $posts_container.find('article.regular, article[class*="wide_tall"]').css('height', (tallColHeight));
            } else if ($posts_container.parent().hasClass('classic_enhanced') && $posts_container.find('article[class*="regular"]').length == 0) {
                var tallColHeight = ($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().length > 0) ? Math.ceil($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().css('height', 'auto').height()) : 600;
                if ($(window).width() > 690)
                    $posts_container.find('article.large_featured, article.regular, article[class*="wide_tall"]').css('height', (tallColHeight));
                else
                    $posts_container.find('article.regular, article[class*="wide_tall"]').css('height', (tallColHeight));
            }
            if ($('html.no-csstransitions').length > 0)
                $('#post-area.masonry').css('width', '100%');
        }

        function classicEnhancedSizing(elements) {
            var tallestCol = 0;
            elements.find('.article-content-wrap').css('height', 'auto');
            elements.filter('.has-post-thumbnail').each(function() {
                ($(this).find('.article-content-wrap').outerHeight(true) > tallestCol) ? tallestCol = $(this).find('.article-content-wrap').outerHeight(true): tallestCol = tallestCol;
            });
            elements.filter('.has-post-thumbnail').find('.article-content-wrap').css('height', (tallestCol));
        }
        var blogMediaQuerySize;

        function blogColumnNumbCalcs() {
            if ($('body').hasClass('mobile') && window.innerWidth < 990 || $('#post-area').hasClass('span_9') && $('#post-area.meta_overlaid').length == 0) { $cols = 2; } else if ($('#post-area').hasClass('full-width-content') || $('#post-area').parent().hasClass('full-width-content') && $('#boxed').length == 0 || $('#post-area.meta_overlaid').length > 0) {
                var windowSize = $(window).width();
                if (window.innerWidth >= 1600) { blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'four' : 'five'; } else if (window.innerWidth < 1600 && window.innerWidth >= 1300) { blogMediaQuerySize = 'four'; } else if (window.innerWidth < 1300 && window.innerWidth >= 990) { blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'four' : 'three'; } else if (window.innerWidth < 990 && window.innerWidth >= 470) { blogMediaQuerySize = 'two'; } else if (window.innerWidth < 470) { blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'two' : 'one'; }
                if ($('#boxed').length > 0) { if (window.innerWidth > 1300) { blogMediaQuerySize = 'four'; } else if (window.innerWidth < 1300 && window.innerWidth > 990) { blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'four' : 'three'; } else if (window.innerWidth < 990) { blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'two' : 'one'; } }
                switch (blogMediaQuerySize) {
                    case 'five':
                        $cols = 5;
                        break;
                    case 'four':
                        $cols = 4;
                        break;
                    case 'three':
                        $cols = 3;
                        break;
                    case 'two':
                        $cols = 2;
                        break;
                    case 'one':
                        $cols = 1;
                        break;
                }
            } else { $cols = 3; }
            return $cols;
        }
        var shrinkNum = 6;
        if ($('#header-outer[data-shrink-num]').length > 0) shrinkNum = $('#header-outer').attr('data-shrink-num');
        headerPadding2 = headerPadding - headerPadding / 1.8;
        $('body').on('click', '.section-down-arrow', function() {
            if ($(this).parents('.nectar-box-roll').length > 0) return false;
            var $currentSection = $(this).parents('#page-header-bg');
            var $topDistance = $currentSection.attr('data-height');
            var $offset = ($currentSection.parents('.first-section').length == 0 || $('body[data-transparent-header="false"]').length > 0) ? $currentSection.offset().top : 0;
            var $bodyBorderSize = ($('.body-border-top').length > 0 && $(window).width() > 1000) ? $('.body-border-top').height() : 0;
            var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0) ? 0 : $('#header-space').height();
            if ($('body[data-permanent-transparent="1"]').length == 0) {
                if (!$('body').hasClass('mobile')) {
                    if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) { $('body,html').stop().animate({ scrollTop: parseInt($topDistance) + $offset + 2 - $bodyBorderSize * 2 }, 1000, 'easeInOutCubic') } else {
                        $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(shrinkNum) + headerPadding2 * 2;
                        if ($('#header-outer[data-remove-fixed="1"]').length > 0) {
                            $headerNavSpace = 0;
                            $offset = 0;
                        }
                        $('body,html').stop().animate({ scrollTop: parseInt($topDistance - $headerNavSpace) + $resize + 3 + $offset }, 1000, 'easeInOutCubic')
                    }
                } else {
                    $scrollPos = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? parseInt($topDistance) - $headerNavSpace + parseInt($currentSection.offset().top) + 2 : parseInt($topDistance) + parseInt($currentSection.offset().top) + 2;
                    $('body,html').stop().animate({ scrollTop: $scrollPos - $bodyBorderSize * 2 }, 1000, 'easeInOutCubic')
                }
            } else { $('body,html').stop().animate({ scrollTop: parseInt($topDistance) + parseInt($currentSection.offset().top) + 2 - $bodyBorderSize * 2 }, 1000, 'easeInOutCubic') }
            return false;
        });

        function crossBrowserFixes() {
            if ($("body").hasClass("single-portfolio") || $('body').hasClass("error404") || $('body').hasClass("search-results")) { $("li").removeClass("current_page_parent").removeClass("current-menu-ancestor").removeClass('current_page_ancestor'); }
            $('.recent_projects_widget div a:nth-child(3n+3), #sidebar #flickr div:nth-child(3n+3) a, #footer-outer #flickr div:nth-child(3n+3) a').css('margin-right', '0px');
            $('code').find('br').remove();
            if ($('.container.main-content > .row > div:last-child').hasClass('clear')) { $('.container.main-content > .row > div:last-child').css('padding-bottom', '0'); }
            $('.container-wrap .blog-recent > div:last-child').addClass('col_last');
            if ($('.single .blog_next_prev_buttons').length > 0) $('.container-wrap').css('padding-bottom', 0);
            $('.wpcf7-form p:has(input[type=submit])').css('padding-bottom', '0px');
            $('.full-width-content .wpcf7-submit').on('click', function() {
                setTimeout(function() { fullWidthContentColumns() }, 1000);
                setTimeout(function() { fullWidthContentColumns() }, 2000);
            });
            $('#featured article').each(function() { if ($(this).find('h2').attr('data-has-caption') == '0') { $(this).parents('.slide').addClass('no-caption'); } });
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("Edge/index.html");
            if (msie > 0)
            // $('body').addClass('msie');$('.gform_body').click(function(){setTimeout(function(){fullWidthContentColumns();},200);});$('article.post.format-chat .content-inner dt:odd').css('color','#333');$('.full-width-section').each(function(){$(this).find('> .span_12 > div.col_last').last().css('margin-bottom','0');});$('#portfolio-extra p').each(function(){if($(this).find('*').length==1&&$(this).find('img').length==1){$(this).find('img').unwrap();}});$('.vc_text_separator').each(function(){if($(this).parents('.full-width-section').length>0)$(this).find('div').css('background-color',$(this).parents('.full-width-section').find('.row-bg').css('background-color'));});$('.carousel-heading').each(function(){if($(this).find('h2').length>0)$(this).find('.carousel-prev, .carousel-next').css('top','7px');});$('.carousel-wrap').each(function(){if($(this).find('.carousel-heading .container:empty').length>0)$(this).find('.carousel-heading').remove();});$('.woocommerce div.product div.images div.thumbnails a:nth-child(4n+4)').css('margin-right','0px');$('article.post .gallery-slider .gallery,  article.post .gallery-slider .jetpack-slideshow, .single-portfolio .gallery-slider .gallery, .single-portfolio .gallery-slider .jetpack-slideshow').remove();$('.woocommerce .span_9 .products.related .products li:nth-child(4), .woocommerce .span_9 .products.upsells .products li:nth-child(4)').remove();$('.woocommerce .span_9 .products.related .products li:nth-child(3), .woocommerce .span_9 .products.upsells .products li:nth-child(3)').css('margin-right','0');$('.cart-menu a, .widget_shopping_cart a').addClass('no-ajaxy');$('div.clients').each(function(){$(this).find('> div').each(function(){if($(this).find('a').length==0){$(this).addClass('no-link');}});});if(nectarLove.disqusComments=='true')$('#post-area article a, .blog_next_prev_buttons a, #portfolio-nav #prev-link a, #portfolio-nav #next-link a, .portfolio-items .col .work-item .work-info a').addClass('no-ajaxy');if($('.blog_next_prev_buttons').find('.bg-color-only-indicator').length>0)$('.blog_next_prev_buttons').addClass('bg-color-only').find('.bg-color-only-indicator').remove();if($('#single-below-header').hasClass('fullscreen-header')&&$('.blog_next_prev_buttons').length==0)$('#author-bio, .comment-wrap').addClass('lighter-grey');if($('body.woocommerce').find('#page-header-bg').length>0){$('.container-wrap').css({'margin-top':'0px','padding-top':'30px'});}
                if ($('.demo_store').length > 0) $('#header-outer, #header-space').css('margin-top', '32px');
            $('#footer-widgets .container .row > div:last-child').addClass('col_last');
            $('.swiper-slide.external-button-1 .buttons > div:nth-child(1) a').attr('target', '_blank');
            $('.swiper-slide.external-button-2 .buttons > div:nth-child(2) a').attr('target', '_blank');
            $(".portfolio-items a[href*='http://']:not([href*='" + window.location.hostname + "']), .recent_projects_widget a[href*='http://']:not([href*='" + window.location.hostname + "'])").attr("target", "_blank");
            $('.container-wrap .row > .wpb_row').each(function() { if ($(this).find('> .span_12 > .wpb_column > .wpb_wrapper').length > 0 && $(this).find('> .span_12 > .wpb_column > .wpb_wrapper').find('*').length == 0) $(this).find('> .span_12 ').remove(); });
            $('.full-width-content .col.boxed').removeClass('boxed');
            $('.full-width-content .wpb_column .nectar-slider-wrap[data-full-width="true"]').attr('data-full-width', 'false');
            if ($('.nectar-slider-wrap.first-section').length == 0 && $('.full-width-section.first-section > .span_12 > .vc_span12 > .wpb_wrapper > .nectar-slider-wrap').length == 0 && $('.parallax_slider_outer.first-section').length == 0 && $('.full-width-content.first-section .wpb_wrapper > .nectar-slider-wrap').length == 0 && !($('.wpb_row.first-section > .nectar-parallax-scene').length == 1 && $('#header-outer[data-transparent-header="true"]').length == 1)) { $('#header-outer .ns-loading-cover').remove(); }
            $('.wpb_column.neg-marg').parents('.wpb_row').css('z-index', '110');
            var $tmpTitle = null;
            $('.portfolio-items > .col a[title]').hover(function() {
                $tmpTitle = $(this).attr('title');
                $(this).attr('title', ' ');
            }, function() { $(this).attr('title', $tmpTitle); });
            $('.portfolio-items > .col a[title]').click(function() { $(this).attr('title', $tmpTitle); });
        };
        crossBrowserFixes();
        jQuery(document.body).on('updated_cart_totals', function() {
            if ($('.plus').length == 0)
                $('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
        });
        if ($('.plus').length == 0) {
            $('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
            $(document).on('click', '.plus, .minus', function() {
                var $qty = $(this).closest('.quantity').find('.qty'),
                    currentVal = parseFloat($qty.val()),
                    max = parseFloat($qty.attr('max')),
                    min = parseFloat($qty.attr('min')),
                    step = $qty.attr('step');
                if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
                if (max === '' || max === 'NaN') max = '';
                if (min === '' || min === 'NaN') min = 0;
                if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;
                if ($(this).is('.plus')) { if (max && (max == currentVal || currentVal > max)) { $qty.val(max); } else { $qty.val(currentVal + parseFloat(step)); } } else { if (min && (min == currentVal || currentVal < min)) { $qty.val(min); } else if (currentVal > 0) { $qty.val(currentVal - parseFloat(step)); } }
                $qty.trigger('change');
            });
        }

        function wooPriceSlider() {
            if (typeof woocommerce_price_slider_params === 'undefined' || !$('body').hasClass('woocommerce')) { return false; }
            $('input#min_price, input#max_price').hide();
            $('.price_slider, .price_label').show();
            var min_price = $('.price_slider_amount #min_price').data('min'),
                max_price = $('.price_slider_amount #max_price').data('max');
            current_min_price = parseInt(min_price, 10);
            current_max_price = parseInt(max_price, 10);
            if (woocommerce_price_slider_params.min_price) current_min_price = parseInt(woocommerce_price_slider_params.min_price, 10);
            if (woocommerce_price_slider_params.max_price) current_max_price = parseInt(woocommerce_price_slider_params.max_price, 10);
            $('body').bind('price_slider_create price_slider_slide', function(event, min, max) {
                if (woocommerce_price_slider_params.currency_pos === 'left') {
                    $('.price_slider_amount span.from').html(woocommerce_price_slider_params.currency_symbol + min);
                    $('.price_slider_amount span.to').html(woocommerce_price_slider_params.currency_symbol + max);
                } else if (woocommerce_price_slider_params.currency_pos === 'left_space') {
                    $('.price_slider_amount span.from').html(woocommerce_price_slider_params.currency_symbol + " " + min);
                    $('.price_slider_amount span.to').html(woocommerce_price_slider_params.currency_symbol + " " + max);
                } else if (woocommerce_price_slider_params.currency_pos === 'right') {
                    $('.price_slider_amount span.from').html(min + woocommerce_price_slider_params.currency_symbol);
                    $('.price_slider_amount span.to').html(max + woocommerce_price_slider_params.currency_symbol);
                } else if (woocommerce_price_slider_params.currency_pos === 'right_space') {
                    $('.price_slider_amount span.from').html(min + " " + woocommerce_price_slider_params.currency_symbol);
                    $('.price_slider_amount span.to').html(max + " " + woocommerce_price_slider_params.currency_symbol);
                }
                $('body').trigger('price_slider_updated', min, max);
            });
            $('.price_slider').slider({
                range: true,
                animate: true,
                min: min_price,
                max: max_price,
                values: [current_min_price, current_max_price],
                create: function(event, ui) {
                    $('.price_slider_amount #min_price').val(current_min_price);
                    $('.price_slider_amount #max_price').val(current_max_price);
                    $('body').trigger('price_slider_create', [current_min_price, current_max_price]);
                },
                slide: function(event, ui) {
                    $('input#min_price').val(ui.values[0]);
                    $('input#max_price').val(ui.values[1]);
                    $('body').trigger('price_slider_slide', [ui.values[0], ui.values[1]]);
                },
                change: function(event, ui) { $('body').trigger('price_slider_change', [ui.values[0], ui.values[1]]); },
            });
        }

        function vcMobileColumns() {
            $('.wpb_row').each(function() {
                if (typeof $(this).find('.span_12').offset() != 'undefined') {
                    $(this).find('[class*="vc_col-"]').each(function() {
                        var $firstChildOffset = $(this).parents('.span_12').offset().left;
                        $(this).removeClass('no-left-margin');
                        if ($(this).offset().left < $firstChildOffset + 27) { $(this).addClass('no-left-margin'); } else { $(this).removeClass('no-left-margin'); }
                    });
                }
            });
        }
        if ($('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length > 0) vcMobileColumns();
        if ($('body[data-form-style="minimal"]').length > 0) {
            function convertPlaceholders() {
                $('form input[placeholder]:not([name="min_price"]):not([name="max_price"]), form textarea[placeholder]').each(function(i) {
                    if ($(this).attr('placeholder').length > 1) {
                        var $placeholder = $(this).attr('placeholder');
                        var $inputID = ($(this).is('[id]')) ? $(this).attr('id') : 'id-' + i;
                        if ($(this).parents('.wpcf7-form-control-wrap').length == 0) { if ($(this).prev('label').length == 0 || $(this).is('textarea')) { $('<label for="' + $inputID + '">' + $placeholder + '</label>').insertBefore($(this)); } } else { if ($(this).parents('.wpcf7-form-control-wrap').find('label').length == 0) { $('<label for="' + $inputID + '">' + $placeholder + '</label>').insertBefore($(this).parents('.wpcf7-form-control-wrap ')); } }
                        $(this).removeAttr('placeholder');
                    }
                });
            }
            convertPlaceholders();
            setTimeout(convertPlaceholders, 500);
            $('#billing_country, #shipping_country, .country_to_state').on('change', function() {
                convertPlaceholders();
                removeExcessLabels();
                var $wooDynamicPlaceholders = setInterval(function() {
                    convertPlaceholders();
                    convertToMinimalStyle('form label');
                    removeExcessLabels();
                }, 30);
                setTimeout(function() { clearInterval($wooDynamicPlaceholders); }, 600);
            });

            function convertToMinimalStyle(selector) {
                $(selector).each(function() {
                    if ($(this).parent().find('input:not([type="checkbox"]):not([type="hidden"]):not(#search-outer input):not(.adminbar-input):not([type="radio"]):not([type="submit"]):not([type="button"]):not([type="date"]):not([type="color"]):not([type="range"]):not([role="button"]):not([role="combobox"]):not(.select2-focusser):not([name="min_price"]):not([name="max_price"])').length == 1 || $(this).parent().find('textarea').length == 1) {
                        if ($(this).parents('.minimal-form-input').length == 0) {
                            if ($(this).next('input').length == 1) { $(this).next('input').andSelf().wrapAll('<div class="minimal-form-input"/>'); } else if ($(this).find('.wpcf7-form-control-wrap').length > 0) {
                                var $cloneInput = $(this).find('.wpcf7-form-control-wrap');
                                $(this).find('.wpcf7-form-control-wrap').remove();
                                $cloneInput.insertAfter($(this));
                                $(this).parent().wrapInner('<div class="minimal-form-input" />');
                            } else { $(this).parent().wrapInner('<div class="minimal-form-input" />'); }
                            $html = $(this).html();
                            $(this)[0].innerHTML = '<span class="text"><span class="text-inner">' + $html + '</span></span>';
                            if ($(this).parent().find('textarea').length == 1) $(this).parents('.minimal-form-input').addClass('textarea');
                        }
                    }
                });
                $(selector).each(function() {
                    if ($(this).parents('.minimal-form-input').length == 1 && $(this).find('.text').length == 0) {
                        $html = $(this).html();
                        $(this)[0].innerHTML = '<span class="text"><span class="text-inner">' + $html + '</span></span>';
                    }
                });
            }
            convertToMinimalStyle('form label');
            jQuery(document.body).on('updated_cart_totals', function() { convertToMinimalStyle('form label'); });
            setTimeout(function() {
                convertToMinimalStyle('form label');
                removeExcessLabels();
                checkValueOnLoad();
            }, 501);

            function removeExcessLabels() {
                $('.minimal-form-input').each(function() {
                    if ($(this).find('label').length > 1) {
                        $lngth = 0;
                        $(this).find('label').each(function() {
                            if ($(this).text().length >= $lngth) {
                                $lngth = $(this).text().length;
                                $(this).parents('.minimal-form-input').find('label').addClass('tbr');
                                $(this).removeClass('tbr');
                            }
                        });
                        $(this).find('label.tbr').remove();
                    }
                });
            }
            removeExcessLabels();
            $('input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not(#search-outer input):not([type="hidden"]):not([type="button"]):not([type="date"]):not([type="color"]):not([type="number"]):not([type="range"]):not([role="button"]):not([role="combobox"]):not(.select2-focusser):not([name="min_price"]):not([name="max_price"]), textarea').each(function() {
                if ($(this).parents('.minimal-form-input').length == 0) {
                    $('<label></label>').insertBefore($(this));
                    convertToMinimalStyle($(this).prev('label'));
                }
            });
            $('body').on('focus', '.minimal-form-input input, .minimal-form-input textarea', function() { $(this).parents('.minimal-form-input').addClass('filled').removeClass('no-text'); });
            $('body').on('blur', '.minimal-form-input input, .minimal-form-input textarea', function() {
                if ($(this).val().length > 0) $(this).parents('.minimal-form-input').addClass('has-text').removeClass('no-text');
                else $(this).parents('.minimal-form-input').removeClass('has-text').addClass('no-text');
                $(this).parents('.minimal-form-input').removeClass('filled');
            });

            function checkValueOnLoad() { $('.minimal-form-input input, .minimal-form-input textarea').each(function() { if ($(this).val().length > 0) $(this).parents('.minimal-form-input').addClass('has-text').removeClass('no-text'); }); }
            checkValueOnLoad();
            var hiddenDiv = $('.hiddendiv').first();
            if (!hiddenDiv.length) {
                hiddenDiv = $('<div class="textareahiddendiv common"></div>');
                $('body').append(hiddenDiv);
            }
            var text_area_selector = 'textarea';

            function textareaAutoResize($textarea) {
                var fontFamily = $textarea.css('font-family');
                var fontSize = $textarea.css('font-size');
                if (fontSize) { hiddenDiv.css('font-size', fontSize); }
                if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }
                if ($textarea.attr('wrap') === "off") { hiddenDiv.css('overflow-wrap', "normal").css('white-space', "pre"); }
                hiddenDiv.text($textarea.val() + '\n');
                var content = hiddenDiv.html().replace(/\n/g, '<br>');
                hiddenDiv.html(content);
                if ($textarea.is(':visible')) { hiddenDiv.css('width', $textarea.width()); } else { hiddenDiv.css('width', $(window).width() / 2); }
                $textarea.css('height', hiddenDiv.height());
            }
            $(text_area_selector).each(function() { var $textarea = $(this); if ($textarea.val().length) { textareaAutoResize($textarea); } });
            $('body').on('keyup keydown autoresize', text_area_selector, function() { textareaAutoResize($(this)); });
        }
        if ($('body[data-fancy-form-rcs="1"]').length > 0) {
            $('input[type="checkbox"]').each(function() { $id = $(this).attr('id'); if (typeof $id !== typeof undefined && $id !== false && $('label[for="' + $id + '"]').length > 0) { $('label[for="' + $id + '"]').prepend('<span></span>'); } });
            $('.wpcf7-radio .wpcf7-list-item-label').each(function(i) {
                var $data = $(this).html();
                var $name = $(this).parent().find('input').attr('name') + i;
                $(this).parent().find('input').attr('id', $name);
                $(this).replaceWith('<label for="' + $name + '">' + $data + '</label>');
            });
            $('.wpcf7-checkbox .wpcf7-list-item-label').each(function() {
                var $data = $(this).html();
                var $name = $(this).parent().find('input').attr('value');
                $(this).parent().find('input').attr('id', $name);
                $(this).replaceWith('<label for="' + $name + '"><span></span>' + $data + '</label>');
            });
            $('select:not(.comment-form-rating #rating)').each(function() {
                if ($(this).parents('.wpcf7-form-control-wrap').length > 0) {
                    if ($(this).parents('.wpcf7-form-control-wrap').find('.select2-container').length > 0) { $selector = $($(this).prev('.select2-container')); } else { $selector = $(this); }
                    if ($selector.parents('.wpcf7-form-control-wrap').parent().find('label').length == 1) { $selector.parents('.wpcf7-form-control-wrap').parent().wrapInner('<div class="fancy-select-wrap" />'); } else { $selector.wrap('<div class="fancy-select-wrap" />'); }
                } else {
                    if ($(this).prev('.select2-container').length > 0) { $selector = $(this).prev('.select2-container'); } else { $selector = $(this); }
                    if ($selector.prev('label').length == 1) { $selector.prev('label').andSelf().wrapAll('<div class="fancy-select-wrap" />'); } else if ($selector.next('label').length == 1) { $selector.next('label').andSelf().wrapAll('<div class="fancy-select-wrap" />'); } else { $selector.wrap('<div class="fancy-select-wrap" />'); }
                }
            });

            function select2Init() { $('select:not(.state_select):not(.country_select):not(.comment-form-rating #rating)').each(function() { if ($(this).parents('.woocommerce-ordering').length == 0) { $(this).select2({ minimumResultsForSearch: 7, }); } else { $(this).select2({ minimumResultsForSearch: 7, dropdownCssClass: 'bigdrop' }); } }); }
            select2Init();
        }
        if ($('body[data-ajax-transitions="true"]').length > 0 && $('#ajax-loading-screen[data-method="ajax"]').length > 0 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && $(window).width() > 690) {
            $('#ajax-content-wrap').ajaxify({ 'selector': '#ajax-content-wrap a:not(.no-ajaxy):not([target="_blank"]):not([href^="#"]):not(.comment-edit-link):not(#cancel-comment-reply-link):not(.comment-reply-link):not(#toggle-nav):not(.cart_list a):not(.logged-in-as a):not(.no-widget-added a):not(.add_to_cart_button):not(.product-wrap a):not(.section-down-arrow):not([data-filter]):not(.product_list_widget a):not(.pp):not([rel^="prettyPhoto"]):not(.pretty_photo), #header-outer li:not(.no-ajaxy) > a:not(.no-ajaxy), #header-outer #logo', 'verbosity': 0, requestDelay: 400, previewoff: true, memoryoff: true, turbo: false });
            $(window).on("pronto.render", initPage).on("pronto.load", destroyPage).on("pronto.request", transitionPage);
            if ($('.nectar-box-roll').length == 0 && $('#ajax-loading-screen[data-effect="horizontal_swipe"]').length > 0) setTimeout(function() { waypoints(); }, 750);
            else if ($('.nectar-box-roll').length == 0) setTimeout(function() { waypoints(); }, 300);
            if ($('#ajax-loading-screen[data-effect="horizontal_swipe"]').length > 0) { setTimeout(function() { $('#ajax-loading-screen').addClass('loaded'); }, 30); }
            initPage();
        } else if ($('body[data-ajax-transitions="true"]').length > 0 && $('#ajax-loading-screen[data-method="standard"]').length > 0) {
            $('html').addClass('page-trans-loaded');
            if ($('#ajax-loading-screen[data-effect="standard"]').length > 0) {
                if ($('.nectar-particles').length == 0) setTimeout(function() {
                    $('#ajax-loading-screen').stop().transition({ 'opacity': 0 }, 700, function() { $(this).css({ 'display': 'none' }); });
                    $('#ajax-loading-screen .loading-icon').transition({ 'opacity': 0 }, 700)
                }, 60);
                if ($('.nectar-box-roll').length == 0) setTimeout(function() { waypoints(); }, 750);
                if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                    window.onunload = function() {
                        $('#ajax-loading-screen').stop().transition({ 'opacity': 0 }, 800, function() { $(this).css({ 'display': 'none' }); });
                        $('#ajax-loading-screen .loading-icon').transition({ 'opacity': 0 }, 600)
                    };
                    window.onpageshow = function(event) {
                        if (event.persisted) {
                            $('#ajax-loading-screen').stop().transition({ 'opacity': 0 }, 800, function() { $(this).css({ 'display': 'none' }); });
                            $('#ajax-loading-screen .loading-icon').transition({ 'opacity': 0 }, 600);
                        }
                    }
                } else if (navigator.userAgent.indexOf('Firefox') != -1) { window.onunload = function() {}; }
            } else {
                if ($('#ajax-loading-screen[data-effect="horizontal_swipe"]').length > 0) { setTimeout(function() { $('#ajax-loading-screen').addClass('loaded'); }, 60); }
                if ($('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length == 0 && $('.parallax_slider_outer').length == 0 && $('.first-nectar-slider').length == 0) {
                    setTimeout(function() {
                        $('#ajax-loading-screen:not(.loaded)').addClass('loaded');
                        setTimeout(function() { $('#ajax-loading-screen').addClass('hidden'); }, 1000);
                    }, 150);
                }
                if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                    window.onunload = function() {
                        $('#ajax-loading-screen').stop().transition({ 'opacity': 0 }, 800, function() { $(this).css({ 'display': 'none' }); });
                        $('#ajax-loading-screen .loading-icon').transition({ 'opacity': 0 }, 600)
                    };
                    window.onpageshow = function(event) {
                        if (event.persisted) {
                            $('#ajax-loading-screen').stop().transition({ 'opacity': 0 }, 800, function() { $(this).css({ 'display': 'none' }); });
                            $('#ajax-loading-screen .loading-icon').transition({ 'opacity': 0 }, 600);
                        }
                    }
                } else if (navigator.userAgent.indexOf('Firefox') != -1) { window.onunload = function() {}; }
                if ($('.nectar-box-roll').length == 0 && $('#ajax-loading-screen[data-effect="horizontal_swipe"]').length > 0) { setTimeout(function() { waypoints(); }, 850); } else if ($('.nectar-box-roll').length == 0) setTimeout(function() { waypoints(); }, 350);
            }
            $('.portfolio-loading, .nectar-slider-loading .loading-icon').remove();
            if ($('#ajax-loading-screen[data-disable-fade-on-click="1"]').length == 0) {
                $('a[href]:not(.no-ajaxy):not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not(.comment-edit-link):not(.magnific-popup):not(.magnific):not(.meta-comment-count a):not(.comments-link):not(#cancel-comment-reply-link):not(.comment-reply-link):not(#toggle-nav):not(.logged-in-as a):not(.add_to_cart_button):not(.section-down-arrow):not([data-filter]):not(.pp):not([rel^="prettyPhoto"]):not(.pretty_photo)').click(function(e) {
                    if ($(this).is('[href^="#"]')) return;
                    var $windowCurrentLocation = window.location.href.split("#")[0];
                    var $windowClickedLocation = $(this).attr('href').split("#")[0];
                    if ($(this).parents('#header-outer[data-format="left-header"]').length > 0 && $(this).parent().hasClass('menu-item-has-children'))
                        return;
                    if ($(this).parent('.menu-item-has-children').length > 0 && $(this).parents('.off-canvas-menu-container').length > 0 || ($windowClickedLocation == $windowCurrentLocation)) {} else {
                        if (!$(this).parent().hasClass('no-ajaxy')) {
                            var $targetLocation = $(this).attr('href');
                            var $timeOutDur = 0;
                            if ($targetLocation != '') {
                                $('#ajax-loading-screen').addClass('set-to-fade');
                                transitionPageStandard();
                                setTimeout(function() { window.location = $targetLocation; }, $timeOutDur)
                                return false;
                            }
                        }
                    }
                });
            }
        } else { if ($('.nectar-box-roll').length == 0) setTimeout(function() { waypoints(); }, 100); }

        function transitionPage(e) {
            if ($('#ajax-loading-screen[data-effect="horizontal_swipe"]').length > 0) {
                if ($(window).scrollTop() > 0) {
                    if ($().niceScroll && $("html").getNiceScroll()) {
                        var nice = $("html").getNiceScroll();
                        nice.stop();
                    }
                    $('body,html').stop(true, true).animate({ scrollTop: 0 }, 500, 'easeOutQuad', function() {
                        setTimeout(function() { if ($('#header-outer').hasClass('side-widget-open')) $('.slide-out-widget-area-toggle a').trigger('click'); }, 400);
                        $('#ajax-loading-screen').removeClass('loaded');
                        $('#ajax-loading-screen').addClass('in-from-right');
                        setTimeout(function() { $('#ajax-loading-screen').addClass('loaded'); }, 30);
                    });
                } else {
                    setTimeout(function() { if ($('#header-outer').hasClass('side-widget-open')) $('.slide-out-widget-area-toggle a').trigger('click'); }, 400);
                    $('#ajax-loading-screen').removeClass('loaded');
                    $('#ajax-loading-screen').addClass('in-from-right');
                    setTimeout(function() { $('#ajax-loading-screen').addClass('loaded'); }, 30);
                }
            } else {
                if ($(window).scrollTop() > 0) {
                    if ($().niceScroll && $("html").getNiceScroll()) {
                        var nice = $("html").getNiceScroll();
                        nice.stop();
                    }
                    $('body,html').stop(true, true).animate({ scrollTop: 0 }, 500, 'easeOutQuad', function() {
                        $('#ajax-loading-screen').css({ 'opacity': '1', 'display': 'none' });
                        $('#ajax-loading-screen').stop(true, true).fadeIn(600, function() {
                            $('#ajax-loading-screen .loading-icon').animate({ 'opacity': 1 }, 400);
                            setTimeout(function() { if ($('#header-outer').hasClass('side-widget-open')) $('.slide-out-widget-area-toggle a').trigger('click'); }, 400);
                        });
                    });
                } else {
                    $('#ajax-loading-screen').css('opacity', '1').stop().fadeIn(600, function() { $('#ajax-loading-screen .loading-icon').animate({ 'opacity': 1 }, 400); });
                    setTimeout(function() { if ($('#header-outer').hasClass('side-widget-open')) $('.slide-out-widget-area-toggle a').trigger('click'); }, 400);
                }
            }
        }

        function transitionPageStandard(e) {
            if ($('#ajax-loading-screen[data-effect="horizontal_swipe"]').length > 0) {
                $('#ajax-loading-screen').removeClass('loaded');
                $('#ajax-loading-screen').addClass('in-from-right');
                setTimeout(function() { $('#ajax-loading-screen').addClass('loaded'); }, 30);
            } else { if ($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0) { $('#ajax-loading-screen').css('opacity', '0').css('display', 'block').transition({ 'opacity': '1' }, 450); } else { $('#ajax-loading-screen').show().transition({ 'opacity': '1' }, 450); } }
        }

        function destroyPage(e) {
            $(window).off('scroll.appear');
            if ($('#nectar_fullscreen_rows').length > 0 && $().fullpage)
                $.fn.fullpage.destroy('all');
        }

        function initPage(e) {
            if (!$('body').hasClass('ajax-loaded')) return false;
            lightBoxInit();
            addOrRemoveSF();
            if ($('body[data-header-format="left-header"]').length == 0)
                $(".sf-menu").superfish('destroy');
            $('#header-outer').removeClass('dark-slide');
            initSF();
            SFArrows();
            headerInit();
            var $effectTimeout = ($('#ajax-loading-screen').length > 0) ? 800 : 0;
            pageHeaderTextEffectInit();
            if ($('#page-header-bg .nectar-video-wrap video').length == 0) setTimeout(pageHeaderTextEffect, $effectTimeout);
            coloredButtons();
            columnBGColors();
            fwCarouselLinkFix();
            if ($('.carousel').length > 0) {
                standardCarouselInit();
                clientsCarouselInit();
                carouselHeightCalcs();
            }
            if ($('.owl-carousel').length > 0) owlCarouselInit();
            if ($('.products-carousel').length > 0) productCarouselInit();
            if ($('#nectar_fullscreen_rows').length > 0 && $().fullpage) {
                setFPNames();
                initFullPageFooter();
                fullscreenRowLogic();
                initNectarFP();
            }
            flexsliderInit();
            accordionInit();
            tabbedInit();
            tabbbedDeepLinking();
            accordionDeepLinking();
            ulChecks();
            oneFourthClasses();
            carouselfGrabbingClass();
            cascadingImageBGSizing();
            fullWidthSections();
            fwsClasses();
            fullwidthImgOnlySizingInit();
            fullwidthImgOnlySizing();
            fullWidthRowPaddingAdjustInit();
            fullWidthRowPaddingAdjustCalc();
            boxRollInit();
            rowColorOverlay();
            setTimeout(function() {
                waypoints();
                flickityInit();
            }, 100);
            if ($('body[data-animated-anchors="true"]').length > 0) setTimeout(scrollSpyInit, 200);
            socialSharingInit();
            hotSpotHoverBind();
            pricingTableHeight();
            createTestimonialControls();
            imageWithHotspotClickEvents();
            testimonialSliderHeight();
            largeIconHover();
            fullscreenMenuInit();
            boxRollMouseWheelInit();
            midnightInit();
            responsiveVideoIframesInit();
            responsiveVideoIframes();
            fullWidthContentColumns();
            videoBGInit();
            $window.unbind('scroll.parallaxSections').unbind('resize.parallaxSections');
            parallaxScrollInit();
            masonryBlogInit();
            masonryPortfolioInit();
            portfolioAccentColor();
            portfolioHoverEffects();
            portfolioFiltersInit();
            style6Img();
            isotopeCatSelection();
            $(window).unbind('.infscr');
            infiniteScrollInit();
            toTopBind();
            centerLove();
            postNextButtonEffect();
            pageLoadHash();
            slideOutWidgetAreaScrolling();
            if ($().wpcf7InitForm) $('div.wpcf7 > form').wpcf7InitForm();
            wooPriceSlider();
            if (typeof twttr != 'undefined') { twttr.widgets.load(); }
            if (typeof init_rhc === 'function') { init_rhc(); }
            $('.video-wrap iframe').unwrap();
            $('#sidebar iframe[src]').unwrap();
            $('video:not(.slider-video)').attr('width', '100%');
            $('video:not(.slider-video)').attr('height', '100%');
            $('.wp-video-shortcode.mejs-container').each(function() { $(this).attr('data-aspectRatio', parseInt($(this).css('height')) / parseInt($(this).css('width'))); });
            $('video.wp-media-shortcode-ajax, audio.wp-media-shortcode-ajax').each(function() { if (!$(this).parent().hasClass('mejs-mediaelement') && $().mediaelementplayer) { $(this).mediaelementplayer(); } });
            $('.mejs-container').css({ 'height': '100%', 'width': '100%' });
            $('audio').attr('width', '100%');
            $('audio').attr('height', '100%');
            $('audio').css('visibility', 'visible');
            if ($('body').hasClass('mobile')) { $('video').css('visibility', 'hidden'); } else { $('video').css('visibility', 'visible'); }
            $('.wpb_row:has(".nectar-video-wrap")').each(function(i) { $(this).css('z-index', 100 + i); });
            showLateIframes();
            mouseParallaxInit();
            if (navigator.userAgent.indexOf('Chrome') > 0) {
                $('.swiper-wrapper .video-wrap').each(function(i) {
                    var webmSource = jQuery(this).find('video source[type="video/webm"]').attr('src') + "?id=" + Math.ceil(Math.random() * 10000);
                    var firstVideo = jQuery(this).find('video').get(0);
                    firstVideo.src = webmSource;
                    firstVideo.load();
                });
            }
            if ($('.nectar-video-bg').length > 0) {
                setTimeout(function() {
                    resizeVideoToCover();
                    $('.video-color-overlay').each(function() { $(this).css('background-color', $(this).attr('data-color')); });
                    $('.nectar-video-wrap').transition({ 'opacity': '1' }, 0);
                    $('.video-color-overlay').transition({ 'opacity': '0.7' }, 0);
                }, 400);
            }
            nectarPageHeader();
            $('#header-outer div.cart-outer').hoverIntent(function() {
                $('#header-outer .widget_shopping_cart').addClass('open').stop(true, true).fadeIn(400);
                $('#header-outer .cart_list').stop(true, true).fadeIn(400);
                clearTimeout(timeout);
                $('#header-outer .cart-notification').fadeOut(300);
            });
            $('.portfolio-loading, .nectar-slider-loading .loading-icon').remove();
            setTimeout(portfolioSidebarFollow, 250);
            setTimeout(portfolioSidebarFollow, 500);
            setTimeout(portfolioSidebarFollow, 1000);
            crossBrowserFixes();
            $(window).trigger('resize');
            $("#wpadminbar").show();
            if ($('#header-outer').hasClass('side-widget-open')) $('.slide-out-widget-area-toggle a').trigger('click');
            if ($('#ajax-loading-screen[data-effect="horizontal_swipe"]').length > 0) {
                closeSearch();
                $('#ajax-loading-screen').removeClass('in-from-right').removeClass('loaded');
                setTimeout(function() { $('#ajax-loading-screen').addClass('loaded'); }, 30);
            } else {
                setTimeout(function() {
                    $('#ajax-loading-screen').stop(true, true).fadeOut(500, function() { $('#ajax-loading-screen .loading-icon').css({ 'opacity': 0 }); });
                    closeSearch();
                }, 200);
                setTimeout(function() {
                    $('#ajax-loading-screen').stop(true, true).fadeOut(500, function() { $('#ajax-loading-screen .loading-icon').css({ 'opacity': 0 }); });
                    closeSearch();
                }, 900);
            }
        }
        (function($) {
            if (!$.fn.textareaCount) {
                $.fn.textareaCount = function(options, fn) {
                    var defaults = { maxCharacterSize: -1, originalStyle: 'originalTextareaInfo', warningStyle: 'warningTextareaInfo', warningNumber: 20, displayFormat: '#input characters | #words words' };
                    var options = $.extend(defaults, options);
                    var container = $(this);
                    $("<div class='charleft'>&nbsp;</div>").insertAfter(container);
                    var charLeftCss = { 'width': container.width() };
                    var charLeftInfo = getNextCharLeftInformation(container);
                    charLeftInfo.addClass(options.originalStyle);
                    var numInput = 0;
                    var maxCharacters = options.maxCharacterSize;
                    var numLeft = 0;
                    var numWords = 0;
                    container.bind('keyup', function(event) { limitTextAreaByCharacterCount(); }).bind('mouseover', function(event) { setTimeout(function() { limitTextAreaByCharacterCount(); }, 10); }).bind('paste', function(event) { setTimeout(function() { limitTextAreaByCharacterCount(); }, 10); });
                    limitTextAreaByCharacterCount();

                    function limitTextAreaByCharacterCount() {
                        charLeftInfo.html(countByCharacters());
                        if (typeof fn != 'undefined') { fn.call(this, getInfo()); }
                        return true;
                    }

                    function countByCharacters() {
                        var content = container.val();
                        var contentLength = content.length;
                        if (options.maxCharacterSize > 0) {
                            if (contentLength >= options.maxCharacterSize) { content = content.substring(0, options.maxCharacterSize); }
                            var newlineCount = getNewlineCount(content);
                            var systemmaxCharacterSize = options.maxCharacterSize - newlineCount;
                            if (!isWin()) { systemmaxCharacterSize = options.maxCharacterSize }
                            if (contentLength > systemmaxCharacterSize) {
                                var originalScrollTopPosition = this.scrollTop;
                                container.val(content.substring(0, systemmaxCharacterSize));
                                this.scrollTop = originalScrollTopPosition;
                            }
                            charLeftInfo.removeClass(options.warningStyle);
                            if (systemmaxCharacterSize - contentLength <= options.warningNumber) { charLeftInfo.addClass(options.warningStyle); }
                            numInput = container.val().length + newlineCount;
                            if (!isWin()) { numInput = container.val().length; }
                            numWords = countWord(getCleanedWordString(container.val()));
                            numLeft = maxCharacters - numInput;
                        } else {
                            var newlineCount = getNewlineCount(content);
                            numInput = container.val().length + newlineCount;
                            if (!isWin()) { numInput = container.val().length; }
                            numWords = countWord(getCleanedWordString(container.val()));
                        }
                        return formatDisplayInfo();
                    }

                    function formatDisplayInfo() {
                        var format = options.displayFormat;
                        format = format.replace('#input', numInput);
                        format = format.replace('#words', numWords);
                        if (maxCharacters > 0) {
                            format = format.replace('#max', maxCharacters);
                            format = format.replace('#left', numLeft);
                        }
                        return format;
                    }

                    function getInfo() { var info = { input: numInput, max: maxCharacters, left: numLeft, words: numWords }; return info; }

                    function getNextCharLeftInformation(container) { return container.next('.charleft'); }

                    function isWin() {
                        var strOS = navigator.appVersion;
                        if (strOS.toLowerCase().indexOf('win') != -1) { return true; }
                        return false;
                    }

                    function getNewlineCount(content) {
                        var newlineCount = 0;
                        for (var i = 0; i < content.length; i++) { if (content.charAt(i) == '\n') { newlineCount++; } }
                        return newlineCount;
                    }

                    function getCleanedWordString(content) { var fullStr = content + " "; var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi; var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, ""); var non_alphanumerics_rExp = rExp = /[^A-Za-z0-9]+/gi; var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " "); var splitString = cleanedStr.split(" "); return splitString; }

                    function countWord(cleanedWordString) { var word_count = cleanedWordString.length - 1; return word_count; }
                };
            }
        })(jQuery);
    });
}(window.jQuery, window, document));

function resizeIframe() {
    var element = document.getElementById("pp_full_res").getElementsByTagName("iframe");
    var height = element[0].contentWindow.document.body.scrollHeight;
    element[0].style.height = height + 'px';
    document.getElementsByClassName("pp_content_container")[0].style.height = height + 40 + 'px';
    document.getElementsByClassName("pp_content")[0].style.height = height + 40 + 'px';
}
if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {;
    (function($, window, document, undefined) {
        var pluginName = "panr",
            defaults = { sensitivity: 22, moveTarget: "parent", scale: false, scaleOnHover: false, scaleTo: 1.1, scaleDuration: .28, panY: true, panX: true, panDuration: 0.7, resetPanOnMouseLeave: true, onEnter: function() {}, onLeave: function() {} };

        function Plugin(element, options) {
            this.element = element;
            this.settings = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }
        Plugin.prototype = {
            init: function() {
                if (Modernizr.touch) { return; }
                var settings = this.settings,
                    target = $(this.element),
                    w = target.width(),
                    targetWidth = target.width() - settings.sensitivity,
                    cx = (w - targetWidth) / targetWidth,
                    x, y, panVars, xPanVars, yPanVars, mouseleaveVars;
                if (settings.scale || (!settings.scaleOnHover && settings.scale)) { TweenMax.set(target, { scale: settings.scaleTo }); }
                if (!settings.moveTarget) { settings.moveTarget = $(this.element); }
                if (settings.moveTarget == "parent") { settings.moveTarget = $(this.element).parent(); }
                if (settings.moveTarget == "parent parent") { settings.moveTarget = $(this.element).parent().parent(); }
                if (settings.moveTarget == "parent parent parent") { settings.moveTarget = $(this.element).parent().parent().parent(); }
                settings.moveTarget.on('mousemove', function(e) {
                    x = e.pageX - target.offset().left - target.width() / 2;
                    y = e.pageY - target.offset().top - target.height() / 2;
                    if (settings.panX) { xPanVars = { x: -cx * x }; }
                    if (settings.panY) { yPanVars = { y: -cx * y }; }
                    panVars = $.extend({}, xPanVars, yPanVars);
                    TweenMax.to(target, settings.panDuration, panVars);
                });
                settings.moveTarget.on('mouseenter', function(e) {
                    TweenMax.to(target, settings.scaleDuration, { scale: settings.scaleTo });
                    settings.onEnter(target);
                });
                if (!settings.scale || (!settings.scaleOnHover && !settings.scale)) { mouseleaveVars = { scale: 1.005, x: 0, y: 0 }; } else { if (settings.resetPanOnMouseLeave) { mouseleaveVars = { x: 0, y: 0 }; } }
                settings.moveTarget.on('mouseleave', function(e) {
                    TweenMax.to(target, .35, mouseleaveVars);
                    settings.onLeave(target);
                });
            }
        };
        $.fn[pluginName] = function(options) { return this.each(function() { if (!$.data(this, "plugin_" + pluginName)) { $.data(this, "plugin_" + pluginName, new Plugin(this, options)); } }); };
    })(jQuery, window, document);
}
/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 */
(function(e) {
    e.fn.hoverIntent = function(t, n, r) {
        var i = { interval: 60, sensitivity: 3, timeout: 0 };
        if (typeof t === "object") { i = e.extend(i, t) } else if (e.isFunction(n)) { i = e.extend(i, { over: t, out: n, selector: r }) } else { i = e.extend(i, { over: t, out: t, selector: n }) }
        var s, o, u, a;
        var f = function(e) {
            s = e.pageX;
            o = e.pageY
        };
        var l = function(t, n) {
            n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
            if (Math.abs(u - s) + Math.abs(a - o) < i.sensitivity) {
                e(n).off("mousemove.hoverIntent", f);
                n.hoverIntent_s = 1;
                return i.over.apply(n, [t])
            } else {
                u = s;
                a = o;
                n.hoverIntent_t = setTimeout(function() { l(t, n) }, i.interval)
            }
        };
        var c = function(e, t) {
            t.hoverIntent_t = clearTimeout(t.hoverIntent_t);
            t.hoverIntent_s = 0;
            return i.out.apply(t, [e])
        };
        var h = function(t) {
            var n = jQuery.extend({}, t);
            var r = this;
            if (r.hoverIntent_t) { r.hoverIntent_t = clearTimeout(r.hoverIntent_t) }
            if (t.type == "mouseenter") {
                u = n.pageX;
                a = n.pageY;
                e(r).on("mousemove.hoverIntent", f);
                if (r.hoverIntent_s != 1) { r.hoverIntent_t = setTimeout(function() { l(n, r) }, i.interval) }
            } else { e(r).off("mousemove.hoverIntent", f); if (r.hoverIntent_s == 1) { r.hoverIntent_t = setTimeout(function() { c(n, r) }, i.timeout) } }
        };
        return this.on({ "mouseenter.hoverIntent": h, "mouseleave.hoverIntent": h }, i.selector)
    }
})(jQuery);
(function($) {
    $.prettyPhoto = { version: '3.1.6' };
    $.fn.prettyPhoto = function(pp_settings) {
        pp_settings = jQuery.extend({ hook: 'rel', animation_speed: 'normal', ajaxcallback: function() {}, slideshow: 5000, autoplay_slideshow: false, opacity: 0.80, show_title: true, allow_resize: true, allow_expand: true, default_width: 1024, default_height: 576, counter_separator_label: '/', theme: 'pp_default', horizontal_padding: 20, hideflash: false, wmode: 'opaque', autoplay: true, modal: false, deeplinking: true, overlay_gallery: true, overlay_gallery_max: 30, keyboard_shortcuts: true, changepicturecallback: function() {}, callback: function() {}, ie6_fallback: true, markup: '<div class="pp_pic_holder"> \
      <div class="ppt">&nbsp;</div> \
      <div class="pp_top"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
      <div class="pp_content_container"> \
       <div class="pp_left"> \
       <div class="pp_right"> \
        <div class="pp_content"> \
         <div class="pp_loaderIcon"></div> \
         <div class="pp_fade"> \
          <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
          <div class="pp_hoverContainer"> \
           <a class="pp_next" href="#">next</a> \
           <a class="pp_previous" href="#">previous</a> \
          </div> \
          <div id="pp_full_res"></div> \
          <div class="pp_details"> \
           <div class="pp_nav"> \
            <a href="#" class="pp_arrow_previous">Previous</a> \
            <p class="currentTextHolder">0/0</p> \
            <a href="#" class="pp_arrow_next">Next</a> \
           </div> \
           <p class="pp_description"></p> \
           <div class="pp_social">{pp_social}</div> \
           <a class="pp_close" href="#">Close</a> \
          </div> \
         </div> \
        </div> \
       </div> \
       </div> \
      </div> \
      <div class="pp_bottom"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
     </div> \
     <div class="pp_overlay"></div>', gallery_markup: '<div class="pp_gallery"> \
        <a href="#" class="pp_arrow_previous">Previous</a> \
        <div> \
         <ul> \
          {gallery} \
         </ul> \
        </div> \
        <a href="#" class="pp_arrow_next">Next</a> \
       </div>', image_markup: '<img id="fullResImage" src="{path}" />', flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>', quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>', iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" onload="setTimeout(resizeIframe);" frameborder="no" allowfullscreen></iframe>', inline_markup: '<div class="pp_inline">{content}</div>', custom_markup: '', social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' }, pp_settings);
        var matchedObjects = this,
            percentBased = false,
            pp_dimensions, pp_open, pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth, windowHeight = $(window).height(),
            windowWidth = $(window).width(),
            pp_slideshow;
        doresize = true, scroll_pos = _get_scroll();
        $(window).unbind('resize.prettyphoto').bind('resize.prettyphoto', function() {
            _center_overlay();
            _resize_overlay();
        });
        if (pp_settings.keyboard_shortcuts) {
            $(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto', function(e) {
                if (typeof $pp_pic_holder != 'undefined') {
                    if ($pp_pic_holder.is(':visible')) {
                        switch (e.keyCode) {
                            case 37:
                                $.prettyPhoto.changePage('previous');
                                e.preventDefault();
                                break;
                            case 39:
                                $.prettyPhoto.changePage('next');
                                e.preventDefault();
                                break;
                            case 27:
                                if (!settings.modal)
                                    $.prettyPhoto.close();
                                e.preventDefault();
                                break;
                        };
                    };
                };
            });
        };
        $.prettyPhoto.initialize = function() {
            settings = pp_settings;
            if (settings.theme == 'pp_default') settings.horizontal_padding = 16;
            theRel = $(this).attr(settings.hook);
            galleryRegExp = /\[(?:.*)\]/;
            isSet = (galleryRegExp.exec(theRel)) ? true : false;
            pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i) { if ($(n).attr(settings.hook).indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(this).attr('href'));
            pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i) { if ($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(this).find('img').attr('alt'));
            pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i) { if ($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(this).attr('title'));
            if (pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
            set_position = jQuery.inArray($(this).attr('href'), pp_images);
            rel_index = (isSet) ? set_position : $("a[" + settings.hook + "^='" + theRel + "']").index($(this));
            _build_overlay(this);
            if (settings.allow_resize)
                $.prettyPhoto.open();
            return false;
        }
        $.prettyPhoto.open = function(event) {
            if (typeof settings == "undefined") {
                settings = pp_settings;
                pp_images = $.makeArray(arguments[0]);
                pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
                pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
                isSet = (pp_images.length > 1) ? true : false;
                set_position = (arguments[3]) ? arguments[3] : 0;
                _build_overlay(event.target);
            }
            if (settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility', 'hidden');
            _checkPosition($(pp_images).size());
            $('.pp_loaderIcon').fadeIn(600);
            if (settings.deeplinking)
                setHashtag();
            if (settings.social_tools) {
                facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href));
                $pp_pic_holder.find('.pp_social').html(facebook_like_link);
            }
            if ($ppt.is(':hidden')) $ppt.css('opacity', 0).show();
            $pp_overlay.css('opacity', 0.85);
            $pp_pic_holder.find('.currentTextHolder').text((set_position + 1) + settings.counter_separator_label + $(pp_images).size());
            if (typeof pp_descriptions[set_position] != 'undefined' && pp_descriptions[set_position] != "") { $pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position])); } else { $pp_pic_holder.find('.pp_description').hide(); }
            movie_width = (parseFloat(getParam('width', pp_images[set_position]))) ? getParam('width', pp_images[set_position]) : settings.default_width.toString();
            movie_height = (parseFloat(getParam('height', pp_images[set_position]))) ? getParam('height', pp_images[set_position]) : settings.default_height.toString();
            percentBased = false;
            if (movie_height.indexOf('%') != -1) {
                movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150);
                percentBased = true;
            }
            if (movie_width.indexOf('%') != -1) {
                movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150);
                percentBased = true;
            }
            $pp_pic_holder.fadeIn(function() {
                (settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined") ? $ppt.html(unescape(pp_titles[set_position])): $ppt.html('&nbsp;');
                imgPreloader = "";
                skipInjection = false;
                switch (_getFileType(pp_images[set_position])) {
                    case 'image':
                        imgPreloader = new Image();
                        nextImage = new Image();
                        if (isSet && set_position < $(pp_images).size() - 1) nextImage.src = pp_images[set_position + 1];
                        prevImage = new Image();
                        if (isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];
                        $pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
                        imgPreloader.onload = function() {
                            pp_dimensions = _fitToViewport(imgPreloader.width, imgPreloader.height);
                            _showContent();
                        };
                        imgPreloader.onerror = function() {
                            alert('Image cannot be loaded. Make sure the path is correct and image exist.');
                            $.prettyPhoto.close();
                        };
                        imgPreloader.src = pp_images[set_position];
                        break;
                    case 'youtube':
                        pp_dimensions = _fitToViewport(movie_width, movie_height);
                        movie_id = getParam('v', pp_images[set_position]);
                        if (movie_id == "") {
                            movie_id = pp_images[set_position].split('youtu.be/index.html');
                            movie_id = movie_id[1];
                            if (movie_id.indexOf('?') > 0)
                                movie_id = movie_id.substr(0, movie_id.indexOf('?'));
                            if (movie_id.indexOf('&') > 0)
                                movie_id = movie_id.substr(0, movie_id.indexOf('&'));
                        }
                        movie = 'http://www.youtube.com/embed/' + movie_id;
                        (getParam('rel', pp_images[set_position])) ? movie += "?rel=" + getParam('rel', pp_images[set_position]): movie += "?rel=1";
                        if (settings.autoplay) movie += "&autoplay=1";
                        toInject = settings.iframe_markup.replace(/{width}/g, pp_dimensions['width']).replace(/{height}/g, pp_dimensions['height']).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case 'vimeo':
                        pp_dimensions = _fitToViewport(movie_width, movie_height);
                        movie_id = pp_images[set_position];
                        var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
                        var match = movie_id.match(regExp);
                        movie = 'http://player.vimeo.com/video/' + match[3] + '?title=0&amp;byline=0&amp;portrait=0';
                        if (settings.autoplay) movie += "&autoplay=1;";
                        vimeo_width = pp_dimensions['width'] + '/embed/?moog_width=' + pp_dimensions['width'];
                        toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, pp_dimensions['height']).replace(/{path}/g, movie);
                        break;
                    case 'quicktime':
                        pp_dimensions = _fitToViewport(movie_width, movie_height);
                        pp_dimensions['height'] += 15;
                        pp_dimensions['contentHeight'] += 15;
                        pp_dimensions['containerHeight'] += 15;
                        toInject = settings.quicktime_markup.replace(/{width}/g, pp_dimensions['width']).replace(/{height}/g, pp_dimensions['height']).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case 'flash':
                        pp_dimensions = _fitToViewport(movie_width, movie_height);
                        flash_vars = pp_images[set_position];
                        flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10, pp_images[set_position].length);
                        filename = pp_images[set_position];
                        filename = filename.substring(0, filename.indexOf('?'));
                        toInject = settings.flash_markup.replace(/{width}/g, pp_dimensions['width']).replace(/{height}/g, pp_dimensions['height']).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + '?' + flash_vars);
                        break;
                    case 'iframe':
                        pp_dimensions = _fitToViewport(movie_width, movie_height);
                        frame_url = pp_images[set_position];
                        frame_url = frame_url.substr(0, frame_url.indexOf('iframe') - 1);
                        toInject = settings.iframe_markup.replace(/{width}/g, pp_dimensions['width']).replace(/{height}/g, pp_dimensions['height']).replace(/{path}/g, frame_url);
                        break;
                    case 'ajax':
                        doresize = false;
                        pp_dimensions = _fitToViewport(movie_width, movie_height);
                        doresize = true;
                        skipInjection = true;
                        $.get(pp_images[set_position], function(responseHTML) {
                            toInject = settings.inline_markup.replace(/{content}/g, responseHTML);
                            $pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
                            _showContent();
                        });
                        break;
                    case 'custom':
                        pp_dimensions = _fitToViewport(movie_width, movie_height);
                        toInject = settings.custom_markup;
                        break;
                    case 'inline':
                        myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({ 'width': settings.default_width }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();
                        doresize = false;
                        pp_dimensions = _fitToViewport($(myClone).width(), $(myClone).height());
                        doresize = true;
                        $(myClone).remove();
                        toInject = settings.inline_markup.replace(/{content}/g, $(pp_images[set_position]).html());
                        break;
                };
                if (!imgPreloader && !skipInjection) {
                    $pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
                    _showContent();
                };
            });
            return false;
        };
        $.prettyPhoto.changePage = function(direction) {
            currentGalleryPage = 0;
            if (direction == 'previous') { set_position--; if (set_position < 0) set_position = $(pp_images).size() - 1; } else if (direction == 'next') { set_position++; if (set_position > $(pp_images).size() - 1) set_position = 0; } else { set_position = direction; };
            rel_index = set_position;
            if (!doresize) doresize = true;
            if (settings.allow_expand) { $('.pp_contract').removeClass('pp_contract').addClass('pp_expand'); }
            _hideContent(function() { $.prettyPhoto.open(); });
        };
        $.prettyPhoto.changeGalleryPage = function(direction) {
            if (direction == 'next') { currentGalleryPage++; if (currentGalleryPage > totalPage) currentGalleryPage = 0; } else if (direction == 'previous') { currentGalleryPage--; if (currentGalleryPage < 0) currentGalleryPage = totalPage; } else { currentGalleryPage = direction; };
            slide_speed = (direction == 'next' || direction == 'previous') ? settings.animation_speed : 0;
            slide_to = currentGalleryPage * (itemsPerPage * itemWidth);
            $pp_gallery.find('ul').animate({ left: -slide_to }, slide_speed);
        };
        $.prettyPhoto.startSlideshow = function() {
            if (typeof pp_slideshow == 'undefined') {
                $pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function() { $.prettyPhoto.stopSlideshow(); return false; });
                pp_slideshow = setInterval($.prettyPhoto.startSlideshow, settings.slideshow);
            } else { $.prettyPhoto.changePage('next'); };
        }
        $.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function() { $.prettyPhoto.startSlideshow(); return false; });
            clearInterval(pp_slideshow);
            pp_slideshow = undefined;
        }
        $.prettyPhoto.close = function() {
            if ($pp_overlay.is(":animated")) return;
            $.prettyPhoto.stopSlideshow();
            $pp_pic_holder.stop().find('object,embed').css('visibility', 'hidden');
            $('div.pp_pic_holder,div.ppt,.pp_fade, div.pp_details, .pp_loaderIcon').fadeOut(350, function() { $(this).remove(); });
            $pp_overlay.css('opacity', 0);
            setTimeout(function() {
                if (typeof settings.hideflash != 'undefined' && settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility', 'visible');
                $pp_overlay.remove();
                $(window).unbind('scroll.prettyphoto');
                clearHashtag();
                settings.callback();
                doresize = true;
                pp_open = false;
                delete settings;
            }, 350);
        };

        function _showContent() {
            projectedTop = scroll_pos['scrollTop'] + ((windowHeight / 2) - (pp_dimensions['containerHeight'] / 2));
            if (projectedTop < 0) projectedTop = 0;
            $ppt.fadeTo(settings.animation_speed, 1);
            $pp_pic_holder.find('.pp_content').css({ height: pp_dimensions['contentHeight'], width: pp_dimensions['contentWidth'] });
            $pp_pic_holder.css({ 'top': projectedTop, 'left': ((windowWidth / 2) - (pp_dimensions['containerWidth'] / 2) < 0) ? 0 : (windowWidth / 2) - (pp_dimensions['containerWidth'] / 2), width: pp_dimensions['containerWidth'] });
            $pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);
            if ($pp_pic_holder.find('#pp_full_res > iframe').length == 0) {
                $('.pp_loaderIcon').stop(true, true).fadeOut();
                $pp_pic_holder.find('.pp_fade, div.pp_details').fadeIn(settings.animation_speed);
            } else {
                $pp_pic_holder.find('iframe').load(function() {
                    $pp_pic_holder.css({ 'top': projectedTop - 50, });
                    $('.pp_loaderIcon').stop(true, true).fadeOut();
                    $pp_pic_holder.find('.pp_fade, div.pp_details').fadeIn(settings.animation_speed);
                });
            }
            if (isSet && _getFileType(pp_images[set_position]) == "image") { $pp_pic_holder.find('.pp_hoverContainer').show(); } else { $pp_pic_holder.find('.pp_hoverContainer').hide(); }
            if (settings.allow_expand) { if (pp_dimensions['resized']) { $('a.pp_expand,a.pp_contract').show(); } else { $('a.pp_expand').hide(); } }
            if (settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();
            settings.changepicturecallback();
            pp_open = true;
            _insert_gallery();
            pp_settings.ajaxcallback();
        };

        function _hideContent(callback) {
            $pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility', 'hidden');
            $('.pp_loaderIcon').fadeIn(600);
            $pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed, function() { callback(); });
        };

        function _checkPosition(setCount) {
            (setCount > 1) ? $('.pp_nav').show(): $('.pp_nav').hide();
        };

        function _fitToViewport(width, height) {
            resized = false;
            _getDimensions(width, height);
            imageWidth = width, imageHeight = height;
            if (((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
                resized = true, fitting = false;
                while (!fitting) {
                    if ((pp_containerWidth > windowWidth)) {
                        imageWidth = (windowWidth - 200);
                        imageHeight = (height / width) * imageWidth;
                    } else if ((pp_containerHeight > windowHeight)) {
                        imageHeight = (windowHeight - 200);
                        imageWidth = (width / height) * imageHeight;
                    } else { fitting = true; };
                    pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
                };
                if ((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) { _fitToViewport(pp_containerWidth, pp_containerHeight) };
                _getDimensions(imageWidth, imageHeight);
            };
            return { width: Math.floor(imageWidth), height: Math.floor(imageHeight), containerHeight: Math.floor(pp_containerHeight), containerWidth: Math.floor(pp_containerWidth) + (settings.horizontal_padding * 2), contentHeight: Math.floor(pp_contentHeight), contentWidth: Math.floor(pp_contentWidth), resized: resized };
        };

        function _getDimensions(width, height) {
            width = parseFloat(width);
            height = parseFloat(height);
            $pp_details = $pp_pic_holder.find('.pp_details');
            $pp_details.width(width);
            detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
            $pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({ 'position': 'absolute', 'top': -10000 });
            detailsHeight += $pp_details.height();
            detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight;
            $pp_details.remove();
            $pp_title = $pp_pic_holder.find('.ppt');
            $pp_title.width(width);
            titleHeight = parseFloat($pp_title.css('marginTop')) + parseFloat($pp_title.css('marginBottom'));
            $pp_title = $pp_title.clone().appendTo($('body')).css({ 'position': 'absolute', 'top': -10000 });
            titleHeight += $pp_title.height();
            $pp_title.remove();
            pp_contentHeight = height + detailsHeight;
            pp_contentWidth = width;
            pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
            pp_containerWidth = width;
        }

        function _getFileType(itemSrc) { if (itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i)) { return 'youtube'; } else if (itemSrc.match(/vimeo\.com/i)) { return 'vimeo'; } else if (itemSrc.match(/\b.mov\b/i)) { return 'quicktime'; } else if (itemSrc.match(/\b.swf\b/i)) { return 'flash'; } else if (itemSrc.match(/\biframe=true\b/i)) { return 'iframe'; } else if (itemSrc.match(/\bajax=true\b/i)) { return 'ajax'; } else if (itemSrc.match(/\bcustom=true\b/i)) { return 'custom'; } else if (itemSrc.substr(0, 1) == '#') { return 'inline'; } else { return 'image'; }; };

        function _center_overlay() {
            if (doresize && typeof $pp_pic_holder != 'undefined') {
                scroll_pos = _get_scroll();
                contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();
                projectedTop = (windowHeight / 2) + scroll_pos['scrollTop'] - (contentHeight / 2);
                if (projectedTop < 0) projectedTop = 0;
                if (contentHeight > windowHeight)
                    return;
                $pp_pic_holder.css({ 'top': projectedTop, 'left': (windowWidth / 2) + scroll_pos['scrollLeft'] - (contentwidth / 2) });
            };
        };

        function _get_scroll() { if (self.pageYOffset) { return { scrollTop: self.pageYOffset, scrollLeft: self.pageXOffset }; } else if (document.documentElement && document.documentElement.scrollTop) { return { scrollTop: document.documentElement.scrollTop, scrollLeft: document.documentElement.scrollLeft }; } else if (document.body) { return { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft }; }; };

        function _resize_overlay() { windowHeight = $(window).height(), windowWidth = $(window).width(); if (typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height()).width(windowWidth); };

        function _insert_gallery() {
            if (isSet && settings.overlay_gallery && _getFileType(pp_images[set_position]) == "image") {
                itemWidth = 52 + 5;
                navWidth = (settings.theme == "facebook" || settings.theme == "pp_default") ? 50 : 30;
                itemsPerPage = Math.floor((pp_dimensions['containerWidth'] - 100 - navWidth) / itemWidth);
                itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
                totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
                if (totalPage == 0) {
                    navWidth = 0;
                    $pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();
                } else { $pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show(); };
                galleryWidth = itemsPerPage * itemWidth;
                fullGalleryWidth = pp_images.length * itemWidth;
                $pp_gallery.css('margin-left', -((galleryWidth / 2) + (navWidth / 2))).find('div:first').width(galleryWidth + 5).find('ul').width(fullGalleryWidth).find('li.selected').removeClass('selected');
                goToPage = (Math.floor(set_position / itemsPerPage) < totalPage) ? Math.floor(set_position / itemsPerPage) : totalPage;
                $.prettyPhoto.changeGalleryPage(goToPage);
                $pp_gallery_li.filter(':eq(' + set_position + ')').addClass('selected');
            } else { $pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave'); }
        }

        function _build_overlay(caller) {
            if (settings.social_tools)
                facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href));
            settings.markup = settings.markup.replace('{pp_social}', '');
            $('body').append(settings.markup);
            $pp_pic_holder = $('.pp_pic_holder'), $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay');
            if (isSet && settings.overlay_gallery) {
                currentGalleryPage = 0;
                toInject = "";
                for (var i = 0; i < pp_images.length; i++) {
                    if (!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
                        classname = 'default';
                        img_src = '';
                    } else {
                        classname = '';
                        img_src = pp_images[i];
                    }
                    toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                };
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
                $pp_pic_holder.find('#pp_full_res').after(toInject);
                $pp_gallery = $('.pp_pic_holder .pp_gallery'), $pp_gallery_li = $pp_gallery.find('li');
                $pp_gallery.find('.pp_arrow_next').click(function() {
                    $.prettyPhoto.changeGalleryPage('next');
                    $.prettyPhoto.stopSlideshow();
                    return false;
                });
                $pp_gallery.find('.pp_arrow_previous').click(function() {
                    $.prettyPhoto.changeGalleryPage('previous');
                    $.prettyPhoto.stopSlideshow();
                    return false;
                });
                $pp_pic_holder.find('.pp_content').hover(function() { $pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn(); }, function() { $pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut(); });
                itemWidth = 52 + 5;
                $pp_gallery_li.each(function(i) {
                    $(this).find('a').click(function() {
                        $.prettyPhoto.changePage(i);
                        $.prettyPhoto.stopSlideshow();
                        return false;
                    });
                });
            };
            if (settings.slideshow) {
                $pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
                $pp_pic_holder.find('.pp_nav .pp_play').click(function() { $.prettyPhoto.startSlideshow(); return false; });
            }
            $pp_pic_holder.attr('class', 'pp_pic_holder ' + settings.theme);
            $pp_overlay.css({ 'height': $(document).height(), 'width': $(window).width() }).bind('click', function() { if (!settings.modal) $.prettyPhoto.close(); });
            $('a.pp_close').bind('click', function() { $.prettyPhoto.close(); return false; });
            if (settings.allow_expand) {
                $('a.pp_expand').bind('click', function(e) {
                    if ($(this).hasClass('pp_expand')) {
                        $(this).removeClass('pp_expand').addClass('pp_contract');
                        doresize = false;
                    } else {
                        $(this).removeClass('pp_contract').addClass('pp_expand');
                        doresize = true;
                    };
                    _hideContent(function() { $.prettyPhoto.open(); });
                    return false;
                });
            }
            $pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click', function() {
                $.prettyPhoto.changePage('previous');
                $.prettyPhoto.stopSlideshow();
                return false;
            });
            $pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click', function() {
                $.prettyPhoto.changePage('next');
                $.prettyPhoto.stopSlideshow();
                return false;
            });
            _center_overlay();
        };
        if (!pp_alreadyInitialized && getHashtag()) {
            pp_alreadyInitialized = true;
            hashIndex = getHashtag();
            hashRel = hashIndex;
            hashIndex = hashIndex.substring(hashIndex.indexOf('index.html') + 1, hashIndex.length - 1);
            hashRel = hashRel.substring(0, hashRel.indexOf('index.html'));
            setTimeout(function() { $("a[" + pp_settings.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger('click'); }, 50);
        }
        return this.unbind('click.prettyphoto').bind('click.prettyphoto', $.prettyPhoto.initialize);
    };

    function getHashtag() {
        var url = location.href;
        hashtag = (url.indexOf('#prettyPhoto') !== -1) ? decodeURI(url.substring(url.indexOf('#prettyPhoto') + 1, url.length)) : false;
        if (hashtag) { hashtag = hashtag.replace(/<|>/g, ''); }
        return hashtag;
    };

    function setHashtag() {
        if (typeof theRel == 'undefined') return;
        location.hash = theRel + '/' + rel_index + '/';
    };

    function clearHashtag() { if (location.href.indexOf('#prettyPhoto') !== -1) location.hash = "prettyPhoto"; }

    function getParam(name, url) { name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); var regexS = "[\\?&]" + name + "=([^&#]*)"; var regex = new RegExp(regexS); var results = regex.exec(url); return (results == null) ? "" : results[1]; }
})(jQuery);
var pp_alreadyInitialized = false;;

function vc_js() {

    /* nectar addition */
    /*
    vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_googleMapsPointer(), vc_ttaActivation();
    jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)*/
    /* nectar addition end */

}

function getSizeName() {
    var screen_w = jQuery(window).width();
    return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && 1169 > screen_w ? "desktop" : 768 < screen_w && 959 > screen_w ? "tablet" : 300 < screen_w && 767 > screen_w ? "mobile" : 300 > screen_w ? "mobile_portrait" : ""
}

function loadScript(url, $obj, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript", script.readyState && (script.onreadystatechange = function() {
        "loaded" !== script.readyState && "complete" !== script.readyState || (script.onreadystatechange = null, callback())
    }), script.src = url, $obj.get(0).appendChild(script)
}

function vc_ttaActivation() {
    jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
        var $ = window.jQuery,
            ui = {};
        ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
    })
}

function vc_accordionActivate(event, ui) {
    if (ui.newPanel.length && ui.newHeader.length) {
        var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
            $round_charts = ui.newPanel.find(".vc_round-chart"),
            $line_charts = ui.newPanel.find(".vc_line-chart"),
            $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
        "undefined" != typeof jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: !1
        }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: !1
        }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
            jQuery(this).isotope("layout")
        })
    }
}

function initVideoBackgrounds() {
    return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
}

function vc_initVideoBackgrounds() {
    jQuery("[data-vc-video-bg]").each(function() {
        var youtubeUrl, youtubeId, $element = jQuery(this);
        $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), youtubeId = vcExtractYoutubeId(youtubeUrl), youtubeId && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
            $element.has($grid).length && vcResizeVideoBackground($element)
        })) : $element.find(".vc_video-bg").remove()
    })
}

function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
    if ("undefined" == typeof YT || "undefined" == typeof YT.Player) return counter = "undefined" == typeof counter ? 0 : counter, 100 < counter ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
        insertYoutubeVideoAsBackground($element, youtubeId, counter++)
    }, 100);
    var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
    new YT.Player($container[0], {
        width: "100%",
        height: "100%",
        videoId: youtubeId,
        playerVars: {
            playlist: youtubeId,
            iv_load_policy: 3,
            enablejsapi: 1,
            disablekb: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            wmode: "transparent"
        },
        events: {
            onReady: function(event) {
                event.target.mute().setLoop(!0)
            }
        }
    }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
        vcResizeVideoBackground($element)
    })
}

function vcResizeVideoBackground($element) {
    var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
        containerH = $element.innerHeight(),
        ratio1 = 16,
        ratio2 = 9;
    containerW / containerH < ratio1 / ratio2 ? (iframeW = containerH * (ratio1 / ratio2), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (ratio2 / ratio1), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".vc_video-bg iframe").css({
        maxWidth: "1000%",
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: iframeW,
        height: iframeH
    })
}

function vcExtractYoutubeId(url) {
    if ("undefined" == typeof url) return !1;
    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    return null !== id && id[1]
}

function vc_googleMapsPointer() {
    var $ = window.jQuery,
        $wpbGmapsWidget = $(".wpb_gmaps_widget");
    $wpbGmapsWidget.click(function() {
        $("iframe", this).css("pointer-events", "auto")
    }), $wpbGmapsWidget.mouseleave(function() {
        $("iframe", this).css("pointer-events", "none")
    }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
}
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
        var $slider = $parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider");
        $slider.each(function() {
            var this_element = jQuery(this),
                sliderSpeed = 800,
                sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval")),
                sliderFx = this_element.attr("data-flex_fx"),
                slideshow = !0;
            0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: sliderSpeed,
                smoothHeight: !0
            })
        })
    }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
        0 < jQuery(".wpb_googleplus").length && ! function() {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "../apis.google.com/js/plusone.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
        0 < jQuery(".wpb_pinterest").length && ! function() {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "../assets.pinterest.com/js/pinit.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
        "undefined" != typeof jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function() {
            jQuery(this).find(".vc_single_bar").each(function(index) {
                var $this = jQuery(this),
                    bar = $this.find(".vc_bar"),
                    val = bar.data("percentage-value");
                setTimeout(function() {
                    bar.css({
                        width: val + "%"
                    })
                }, 200 * index)
            })
        }, {
            offset: "85%"
        })
    }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
        "undefined" != typeof jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function() {
            jQuery(this).addClass("wpb_start_animation animated")
        }, {
            offset: "85%"
        })
    }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
        function event(e) {
            e && e.preventDefault && e.preventDefault();
            var title = jQuery(this),
                element = title.closest(".vc_toggle"),
                content = element.find(".vc_toggle_content");
            element.hasClass("vc_toggle_active") ? content.slideUp({
                duration: 300,
                complete: function() {
                    element.removeClass("vc_toggle_active")
                }
            }) : content.slideDown({
                duration: 300,
                complete: function() {
                    element.addClass("vc_toggle_active")
                }
            })
        }
        $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").click(event) : $el.find(".vc_toggle_title").unbind("click").click(event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
    }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
        if (jQuery.ui) {
            var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                old_version = 1 === parseInt(ver[0]) && 9 > parseInt(ver[1]);
            $call.each(function(index) {
                var $tabs, interval = jQuery(this).attr("data-interval"),
                    tabs_array = [];
                if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        beforeActivate: function(event, ui) {
                            1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
                        },
                        activate: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    }), interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (e) {
                    window.console && window.console.log && console.log(e)
                }
                jQuery(this).find(".wpb_tab").each(function() {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").click(function(e) {
                    return e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e) {
                    if (e.preventDefault(), old_version) {
                        var index = $tabs.tabs("option", "selected");
                        jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, 0 > index ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)
                    } else {
                        var index = $tabs.tabs("option", "active"),
                            length = $tabs.find(".wpb_tab").length;
                        index = jQuery(this).parent().hasClass("wpb_next_slide") ? index + 1 >= length ? 0 : index + 1 : 0 > index - 1 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)
                    }
                })
            })
        }
    }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
        jQuery(".wpb_accordion").each(function(index) {
            var $tabs, $this = jQuery(this),
                active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1),
                collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
            $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                header: "> div > h3",
                autoHeight: !1,
                heightStyle: "content",
                active: active_tab,
                collapsible: collapsible,
                navigation: !0,
                activate: vc_accordionActivate,
                change: function(event, ui) {
                    "undefined" != typeof jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                }
            }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
        })
    }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
        var layout_modes = {
            fitrows: "fitRows",
            masonry: "masonry"
        };
        jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
            var $container = jQuery(this),
                $thumbs = $container.find(".wpb_thumbnails"),
                layout_mode = $thumbs.attr("data-layout-mode");
            $thumbs.isotope({
                itemSelector: ".isotope-item",
                layoutMode: "undefined" == typeof layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
            }), $container.find(".categories_filter a").data("isotope", $thumbs).click(function(e) {
                e.preventDefault();
                var $thumbs = jQuery(this).data("isotope");
                jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                    filter: jQuery(this).attr("data-filter")
                })
            }), jQuery(window).bind("load resize", function() {
                $thumbs.isotope("layout")
            })
        })
    }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
        var $carousel = $parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel");
        $carousel.each(function() {
            var $this = jQuery(this);
            if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                $this.data("carousel_enabled", !0);
                var carousel_speed = (getColumnsCount(jQuery(this)), 500);
                jQuery(this).hasClass("columns_count_1") && (carousel_speed = 900);
                var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                carousele_li.css({
                    "margin-right": carousele_li.css("margin-left"),
                    "margin-left": 0
                });
                var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                fluid_ul.width(fluid_ul.width() + 300), jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName(), before_resize != screen_size && window.setTimeout("location.reload()", 20)
                })
            }
        })
    }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
        jQuery(".wpb_gallery_slides").each(function(index) {
            var $imagesGrid, this_element = jQuery(this);
            if (this_element.hasClass("wpb_slider_nivo")) {
                var sliderSpeed = 800,
                    sliderTimeout = 1e3 * this_element.attr("data-interval");
                0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: sliderSpeed,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })
            } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                $imagesGrid.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                })
            }) : this_element.find(".wpb_image_grid_ul").isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
            }))
        })
    }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
        try {
            jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                animationSpeed: "normal",
                hook: "data-rel",
                padding: 15,
                opacity: .7,
                showTitle: !0,
                allowresize: !0,
                counter_separator_label: "/",
                hideflash: !1,
                deeplinking: !1,
                modal: !1,
                callback: function() {
                    var url = location.href;
                    url.indexOf("#!prettyPhoto") > -1 && (location.hash = "")
                },
                social_tools: ""
            })
        } catch (err) {
            window.console && window.console.log && console.log(err)
        }
    }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
        return !1
    }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
        function fullWidthRow() {
            var $elements = $('[data-vc-full-width="true"]');
            $.each($elements, function(key, item) {
                var $el = $(this);
                $el.addClass("vc_hidden");
                var $el_full = $el.next(".vc_row-full-width");
                if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                    var el_margin_left = parseInt($el.css("margin-left"), 10),
                        el_margin_right = parseInt($el.css("margin-right"), 10),
                        offset = 0 - $el_full.offset().left - el_margin_left,
                        width = $(window).width();
                    if ($el.css({
                            position: "relative",
                            left: offset,
                            "box-sizing": "border-box",
                            width: $(window).width()
                        }), !$el.data("vcStretchContent")) {
                        var padding = -1 * offset;
                        0 > padding && (padding = 0);
                        var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                        0 > paddingRight && (paddingRight = 0), $el.css({
                            "padding-left": padding + "px",
                            "padding-right": paddingRight + "px"
                        })
                    }
                    $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    })
                }
            }), $(document).trigger("vc-full-width-row", $elements)
        }

        function parallaxRow() {
            var vcSkrollrOptions, callSkrollInit = !1;
            return window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrSpeed, skrollrSize, skrollrStart, skrollrEnd, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), $parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this)), $parallaxElement.height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), youtubeId = vcExtractYoutubeId(parallaxImage), youtubeId ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : "undefined" != typeof parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrSpeed = skrollrSize - 100, skrollrStart = -skrollrSpeed, skrollrEnd = 0, $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: " + skrollrEnd + "%;")
            }), !(!callSkrollInit || !window.skrollr) && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }

        function fullHeightRow() {
            var $element = $(".vc_row-o-full-height:first");
            if ($element.length) {
                var $window, windowHeight, offsetTop, fullHeight;
                $window = $(window), windowHeight = $window.height(), offsetTop = $element.offset().top, offsetTop < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh"))
            }
            $(document).trigger("vc-full-height-row", $element)
        }

        function fixIeFlexbox() {
            var ua = window.navigator.userAgent,
                msie = ua.indexOf("MSIE ");
            (msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            })
        }
        var $ = window.jQuery;
        $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), fixIeFlexbox(), vc_initVideoBackgrounds(), parallaxRow()
    }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
        jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
    }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
        for (var find = !1, i = 1; !1 === find;) {
            if (el.hasClass("columns_count_" + i)) return find = !0, i;
            i++
        }
    });
var screen_size = getSizeName();
"function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
    var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
        $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
        $round_charts = panel.find(".vc_round-chart"),
        $line_charts = panel.find(".vc_line-chart"),
        $carousel = panel.find('[data-ride="vc_carousel"]');
    if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: !1
        }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: !1
        }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
        var $frame = $google_maps.find("iframe");
        $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
    }
    panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
        jQuery(this).isotope("layout")
    })
}), "function" != typeof window.vc_googleMapsPointer, jQuery(document).ready(function($) {
    window.vc_js()
});;;
(function($) {
    "use strict";
    var methods = (function() {
        var c = { bcClass: 'sf-breadcrumb', menuClass: 'sf-js-enabled', anchorClass: 'sf-with-ul', menuArrowClass: 'sf-arrows' },
            ios = (function() {
                var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (ios) { $(window).load(function() { $('body').children().on('click', $.noop); }); }
                return ios;
            })(),
            wp7 = (function() { var style = document.documentElement.style; return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent)); })(),
            toggleMenuClasses = function($menu, o) {
                var classes = c.menuClass;
                if (o.cssArrows) { classes += ' ' + c.menuArrowClass; }
                $menu.toggleClass(classes);
            },
            setPathToCurrent = function($menu, o) { return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + ' ' + c.bcClass).filter(function() { return ($(this).children(o.popUpSelector).hide().show().length); }).removeClass(o.pathClass); },
            toggleAnchorClass = function($li) { $li.children('a').toggleClass(c.anchorClass); },
            toggleTouchAction = function($menu) {
                var touchAction = $menu.css('ms-touch-action');
                touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
                $menu.css('ms-touch-action', touchAction);
            },
            applyHandlers = function($menu, o) {
                var targets = 'li:has(' + o.popUpSelector + ')';
                if ($.fn.hoverIntent && !o.disableHI) { $menu.hoverIntent(over, out, targets); } else { $menu.on('mouseenter.superfish', targets, over).on('mouseleave.superfish', targets, out); }
                var touchevent = 'MSPointerDown.superfish';
                if (!ios) { touchevent += ' touchend.superfish'; }
                if (wp7) { touchevent += ' mousedown.superfish'; }
                $menu.on('focusin.superfish', 'li', over).on('focusout.superfish', 'li', out).on(touchevent, 'a', o, touchHandler);
            },
            touchHandler = function(e) {
                var $this = $(this),
                    $ul = $this.siblings(e.data.popUpSelector);
                if ($ul.length > 0 && $ul.is(':hidden')) { $this.one('click.superfish', false); if (e.type === 'MSPointerDown') { $this.trigger('focus'); } else { $.proxy(over, $this.parent('li'))(); } }
            },
            over = function() {
                var $this = $(this),
                    o = getOptions($this);
                if ($(this).parents('.megamenu').length > 0) return;
                clearTimeout(o.sfTimer);
                $this.siblings().superfish('hide').end().superfish('show');
            },
            out = function() {
                var $this = $(this),
                    o = getOptions($this);
                if (ios) { $.proxy(close, $this, o)(); } else {
                    clearTimeout(o.sfTimer);
                    o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
                }
            },
            close = function(o) {
                o.retainPath = ($.inArray(this[0], o.$path) > -1);
                this.superfish('hide');
                if (!this.parents('.' + o.hoverClass).length) { o.onIdle.call(getMenu(this)); if (o.$path.length) { $.proxy(over, o.$path)(); } }
            },
            getMenu = function($el) { return $el.closest('.' + c.menuClass); },
            getOptions = function($el) { return getMenu($el).data('sf-options'); };
        return {
            hide: function(instant) {
                if (this.length) {
                    var $this = this,
                        o = getOptions($this);
                    if (!o) { return this; }
                    var not = (o.retainPath === true) ? o.$path : '',
                        $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
                        speed = o.speedOut;
                    if (instant) {
                        $ul.show();
                        speed = 0;
                    }
                    o.retainPath = false;
                    o.onBeforeHide.call($ul);
                    if (o.dropdownStyle == 'minimal') {
                        var $this = $(this);
                        o.onHide.call($this);
                    } else {
                        $ul.stop(true, true).animate(o.animationOut, speed, function() {
                            var $this = $(this);
                            o.onHide.call($this);
                        });
                    }
                    if ($(this).parents('.megamenu').length > 0) return;
                    if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0) { if ($('#header-outer.scrolled-down').length == 0 && $('#header-outer.small-nav').length == 0 && $('#header-outer.detached').length == 0) { $('#header-outer').addClass('transparent'); } }
                }
                return this;
            },
            show: function() {
                if ($(this).parents('.megamenu').length > 0) return;
                var o = getOptions(this);
                if (!o) { return this; }
                var $this = this.addClass(o.hoverClass),
                    $ul = $this.children(o.popUpSelector);
                if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $(this).hasClass('megamenu')) {
                    $('#header-outer').addClass('no-transition');
                    $('#header-outer').removeClass('transparent');
                }
                o.onBeforeShow.call($ul);
                if (!$($ul).parents('li').hasClass('megamenu') && !$($ul).parents('ul').hasClass('sub-menu') && $ul.offset()) {
                    $ul.addClass('temp-hidden-display');
                    var docW = $("#top .container").width();
                    var elm = $ul;
                    var off = elm.offset();
                    var l = off.left - ($(window).width() - docW) / 2;
                    var w = elm.width();
                    var isEntirelyVisible = (l + w <= $(window).width() - 100);
                    if (!isEntirelyVisible) { $ul.parents('li').addClass('edge'); } else { $ul.parents('li').removeClass('edge'); }
                    $ul.removeClass('temp-hidden-display');
                }
                if (o.dropdownStyle == 'minimal') { o.onShow.call($ul); } else { $ul.stop(true, true).animate(o.animation, o.speed, function() { o.onShow.call($ul); }); }
                if ($ul.length > 0 && $ul.parents('.sub-menu').length > 0 && $ul.parent().parent().parent().parent().hasClass('sf-menu')) {
                    if ($ul.offset().left + $ul.outerWidth() > $(window).width()) {
                        $ul.addClass('on-left-side');
                        $ul.find('ul').addClass('on-left-side');
                    }
                }
                return this;
            },
            destroy: function() {
                return this.each(function() {
                    var $this = $(this),
                        o = $this.data('sf-options'),
                        $hasPopUp;
                    if (!o) { return false; }
                    $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    clearTimeout(o.sfTimer);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    $this.off('.superfish').off('.hoverIntent');
                    $hasPopUp.children(o.popUpSelector).attr('style', function(i, style) { return style.replace(/display[^;]+;?/g, ''); });
                    o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
                    $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
                    o.onDestroy.call($this);
                    $this.removeData('sf-options');
                });
            },
            init: function(op) {
                return this.each(function() {
                    var $this = $(this);
                    if ($this.data('sf-options')) { return false; }
                    var o = $.extend({}, $.fn.superfish.defaults, op),
                        $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    o.$path = setPathToCurrent($this, o);
                    $this.data('sf-options', o);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    applyHandlers($this, o);
                    $hasPopUp.not('.' + c.bcClass).superfish('hide', true);
                    o.onInit.call(this);
                });
            }
        };
    })();
    $.fn.superfish = function(method, args) {
        if (methods[method]) { return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)); } else if (typeof method === 'object' || !method) { return methods.init.apply(this, arguments); } else { return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish'); }
    };
    $.fn.superfish.defaults = { popUpSelector: 'ul,.sf-mega', hoverClass: 'sfHover', pathClass: 'overrideThisToUse', pathLevels: 1, delay: 800, animation: { opacity: 'show' }, animationOut: { opacity: 'hide' }, speed: 'normal', speedOut: 'fast', cssArrows: true, disableHI: false, onInit: $.noop, onBeforeShow: $.noop, onShow: $.noop, onBeforeHide: $.noop, onHide: $.noop, onIdle: $.noop, onDestroy: $.noop, dropdownStyle: ($('body[data-dropdown-style="minimal"]').length > 0) ? 'minimal' : 'classic' };
    $.fn.extend({ hideSuperfishUl: methods.hide, showSuperfishUl: methods.show });
})(jQuery);;
if (!jQuery().swiper) {
    var Swiper = function(selector, params) {
        if (document.body.__defineGetter__) { if (HTMLElement) { var element = HTMLElement.prototype; if (element.__defineGetter__) { element.__defineGetter__("outerHTML", function() { return new XMLSerializer().serializeToString(this); }); } } }
        if (!window.getComputedStyle) {
            window.getComputedStyle = function(el, pseudo) {
                this.el = el;
                this.getPropertyValue = function(prop) {
                    var re = /(\-([a-z]){1})/g;
                    if (prop === 'float') prop = 'styleFloat';
                    if (re.test(prop)) { prop = prop.replace(re, function() { return arguments[2].toUpperCase(); }); }
                    return el.currentStyle[prop] ? el.currentStyle[prop] : null;
                }
                return this;
            }
        }
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(obj, start) {
                for (var i = (start || 0), j = this.length; i < j; i++) { if (this[i] === obj) { return i; } }
                return -1;
            }
        }
        if (!document.querySelectorAll) { if (!window.jQuery) return; }

        function $$(selector, context) {
            if (document.querySelectorAll)
                return (context || document).querySelectorAll(selector);
            else
                return jQuery(selector, context);
        }
        if (typeof selector === 'undefined') return;
        if (!(selector.nodeType)) { if ($$(selector).length === 0) return; }
        var _this = this;
        _this.touches = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0 };
        _this.positions = { start: 0, abs: 0, diff: 0, current: 0 };
        _this.times = { start: 0, end: 0 };
        _this.id = (new Date()).getTime();
        _this.container = (selector.nodeType) ? selector : $$(selector)[0];
        _this.isTouched = false;
        _this.isMoved = false;
        _this.activeIndex = 0;
        _this.activeLoaderIndex = 0;
        _this.activeLoopIndex = 0;
        _this.previousIndex = null;
        _this.velocity = 0;
        _this.snapGrid = [];
        _this.slidesGrid = [];
        _this.imagesToLoad = [];
        _this.imagesLoaded = 0;
        _this.wrapperLeft = 0;
        _this.wrapperRight = 0;
        _this.wrapperTop = 0;
        _this.wrapperBottom = 0;
        var wrapper, slideSize, wrapperSize, direction, isScrolling, containerSize;
        var defaults = { mode: 'horizontal', touchRatio: 1, speed: 300, freeMode: false, freeModeFluid: false, momentumRatio: 1, momentumBounce: true, momentumBounceRatio: 1, slidesPerView: 1, slidesPerGroup: 1, simulateTouch: true, followFinger: true, shortSwipes: true, moveStartThreshold: false, autoplay: false, onlyExternal: false, createPagination: true, pagination: false, paginationElement: 'span', paginationClickable: false, paginationAsRange: true, resistance: true, scrollContainer: false, preventLinks: true, noSwiping: false, noSwipingClass: 'swiper-no-swiping', initialSlide: 0, keyboardControl: false, mousewheelControl: false, mousewheelDebounce: 600, useCSS3Transforms: true, loop: false, loopAdditionalSlides: 0, calculateHeight: false, updateOnImagesReady: true, releaseFormElements: true, watchActiveIndex: false, visibilityFullFit: false, offsetPxBefore: 0, offsetPxAfter: 0, offsetSlidesBefore: 0, offsetSlidesAfter: 0, centeredSlides: false, queueStartCallbacks: false, queueEndCallbacks: false, autoResize: true, resizeReInit: false, DOMAnimation: true, loader: { slides: [], slidesHTMLType: 'inner', surroundGroups: 1, logic: 'reload', loadAllSlides: false }, slideElement: 'div', slideClass: 'swiper-slide', slideActiveClass: 'swiper-slide-active', slideVisibleClass: 'swiper-slide-visible', wrapperClass: 'swiper-wrapper', paginationElementClass: 'swiper-pagination-switch', paginationActiveClass: 'swiper-active-switch', paginationVisibleClass: 'swiper-visible-switch' }
        params = params || {};
        for (var prop in defaults) {
            if (prop in params && typeof params[prop] === 'object') { for (var subProp in defaults[prop]) { if (!(subProp in params[prop])) { params[prop][subProp] = defaults[prop][subProp]; } } } else if (!(prop in params)) { params[prop] = defaults[prop] }
        }
        _this.params = params;
        if (params.scrollContainer) {
            params.freeMode = true;
            params.freeModeFluid = true;
        }
        if (params.loop) { params.resistance = '100%'; }
        var isH = params.mode === 'horizontal';
        _this.touchEvents = { touchStart: _this.support.touch || !params.simulateTouch ? 'touchstart' : (_this.browser.ie10 ? 'MSPointerDown' : 'mousedown'), touchMove: _this.support.touch || !params.simulateTouch ? 'touchmove' : (_this.browser.ie10 ? 'MSPointerMove' : 'mousemove'), touchEnd: _this.support.touch || !params.simulateTouch ? 'touchend' : (_this.browser.ie10 ? 'MSPointerUp' : 'mouseup') };
        for (var i = _this.container.childNodes.length - 1; i >= 0; i--) { if (_this.container.childNodes[i].className) { var _wrapperClasses = _this.container.childNodes[i].className.split(/\s+/); for (var j = 0; j < _wrapperClasses.length; j++) { if (_wrapperClasses[j] === params.wrapperClass) { wrapper = _this.container.childNodes[i]; } } } }
        _this.wrapper = wrapper;
        _this._extendSwiperSlide = function(el) {
            el.append = function() {
                if (params.loop) {
                    el.insertAfter(_this.slides.length - _this.loopedSlides);
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else { _this.wrapper.appendChild(el); }
                _this.reInit();
                return el;
            }
            el.prepend = function() {
                if (params.loop) {
                    _this.wrapper.insertBefore(el, _this.slides[_this.loopedSlides]);
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else { _this.wrapper.insertBefore(el, _this.wrapper.firstChild); }
                _this.reInit();
                return el;
            }
            el.insertAfter = function(index) {
                if (typeof index === 'undefined') return false;
                var beforeSlide;
                if (params.loop) {
                    beforeSlide = _this.slides[index + 1 + _this.loopedSlides];
                    _this.wrapper.insertBefore(el, beforeSlide);
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else {
                    beforeSlide = _this.slides[index + 1];
                    _this.wrapper.insertBefore(el, beforeSlide)
                }
                _this.reInit();
                return el;
            }
            el.clone = function() { return _this._extendSwiperSlide(el.cloneNode(true)) }
            el.remove = function() {
                _this.wrapper.removeChild(el);
                _this.reInit();
            }
            el.html = function(html) {
                if (typeof html === 'undefined') { return el.innerHTML; } else { el.innerHTML = html; return el; }
            }
            el.index = function() {
                var index;
                for (var i = _this.slides.length - 1; i >= 0; i--) { if (el === _this.slides[i]) index = i; }
                return index;
            }
            el.isActive = function() {
                if (el.index() === _this.activeIndex) return true;
                else return false;
            }
            if (!el.swiperSlideDataStorage) el.swiperSlideDataStorage = {};
            el.getData = function(name) { return el.swiperSlideDataStorage[name]; }
            el.setData = function(name, value) { el.swiperSlideDataStorage[name] = value; return el; }
            el.data = function(name, value) {
                if (!value) { return el.getAttribute('data-' + name); } else { el.setAttribute('data-' + name, value); return el; }
            }
            el.getWidth = function(outer) { return _this.h.getWidth(el, outer); }
            el.getHeight = function(outer) { return _this.h.getHeight(el, outer); }
            el.getOffset = function() { return _this.h.getOffset(el); }
            return el;
        }
        _this.calcSlides = function(forceCalcSlides) {
            var oldNumber = _this.slides ? _this.slides.length : false;
            _this.slides = [];
            _this.displaySlides = [];
            for (var i = 0; i < _this.wrapper.childNodes.length; i++) { if (_this.wrapper.childNodes[i].className) { var _className = _this.wrapper.childNodes[i].className; var _slideClasses = _className.split(' '); for (var j = 0; j < _slideClasses.length; j++) { if (_slideClasses[j] === params.slideClass) { _this.slides.push(_this.wrapper.childNodes[i]); } } } }
            for (i = _this.slides.length - 1; i >= 0; i--) { _this._extendSwiperSlide(_this.slides[i]); }
            if (!oldNumber) return;
            if (oldNumber !== _this.slides.length || forceCalcSlides) {
                removeSlideEvents();
                addSlideEvents();
                _this.updateActiveSlide();
                if (params.createPagination && _this.params.pagination) _this.createPagination();
                _this.callPlugins('numberOfSlidesChanged');
            }
        }
        _this.createSlide = function(html, slideClassList, el) {
            var slideClassList = slideClassList || _this.params.slideClass;
            var el = el || params.slideElement;
            var newSlide = document.createElement(el);
            newSlide.innerHTML = html || '';
            newSlide.className = slideClassList;
            return _this._extendSwiperSlide(newSlide);
        }
        _this.appendSlide = function(html, slideClassList, el) {
            if (!html) return;
            if (html.nodeType) { return _this._extendSwiperSlide(html).append() } else { return _this.createSlide(html, slideClassList, el).append() }
        }
        _this.prependSlide = function(html, slideClassList, el) {
            if (!html) return;
            if (html.nodeType) { return _this._extendSwiperSlide(html).prepend() } else { return _this.createSlide(html, slideClassList, el).prepend() }
        }
        _this.insertSlideAfter = function(index, html, slideClassList, el) {
            if (typeof index === 'undefined') return false;
            if (html.nodeType) { return _this._extendSwiperSlide(html).insertAfter(index); } else { return _this.createSlide(html, slideClassList, el).insertAfter(index); }
        }
        _this.removeSlide = function(index) {
            if (_this.slides[index]) {
                if (params.loop) {
                    if (!_this.slides[index + _this.loopedSlides]) return false;
                    _this.slides[index + _this.loopedSlides].remove();
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else _this.slides[index].remove();
                return true;
            } else return false;
        }
        _this.removeLastSlide = function() {
            if (_this.slides.length > 0) {
                if (params.loop) {
                    _this.slides[_this.slides.length - 1 - _this.loopedSlides].remove();
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else _this.slides[(_this.slides.length - 1)].remove();
                return true;
            } else { return false; }
        }
        _this.removeAllSlides = function() { for (var i = _this.slides.length - 1; i >= 0; i--) { _this.slides[i].remove() } }
        _this.getSlide = function(index) { return _this.slides[index] }
        _this.getLastSlide = function() { return _this.slides[_this.slides.length - 1] }
        _this.getFirstSlide = function() { return _this.slides[0] }
        _this.activeSlide = function() { return _this.slides[_this.activeIndex] }
        var _plugins = [];
        for (var plugin in _this.plugins) { if (params[plugin]) { var p = _this.plugins[plugin](_this, params[plugin]); if (p) _plugins.push(p); } }
        _this.callPlugins = function(method, args) {
            if (!args) args = {}
            for (var i = 0; i < _plugins.length; i++) { if (method in _plugins[i]) { _plugins[i][method](args); } }
        }
        _this.fireCallback = function() { var callback = arguments[0]; if (Object.prototype.toString.call(callback) === '[object Array]') { for (var i = 0; i < callback.length; i++) { if (typeof callback[i] === 'function') { callback[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) } } } else { callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); } }

        function isArray(obj) { "use strict"; if (Object.prototype.toString.apply(obj) === '[object Array]') return true; return false; }
        _this.addCallback = function(callback, func) {
            "use strict";
            var _this = this,
                tempFunc;
            if (_this.params['on' + callback]) {
                if (isArray(this.params['on' + callback])) { return this.params['on' + callback].push(func); } else if (typeof this.params['on' + callback] === 'function') {
                    tempFunc = this.params['on' + callback];
                    this.params['on' + callback] = [];
                    this.params['on' + callback].push(tempFunc);
                    return this.params['on' + callback].push(func);
                }
            } else { this.params['on' + callback] = []; return this.params['on' + callback].push(func); }
        }
        _this.removeCallbacks = function(callback) { if (_this.params['on' + callback]) { return _this.params['on' + callback] = null; } }
        if (_this.browser.ie10 && !params.onlyExternal) { _this.wrapper.classList.add('swiper-wp8-' + (isH ? 'horizontal' : 'vertical')); }
        if (params.freeMode) { _this.container.className += ' swiper-free-mode'; }
        _this.initialized = false;
        _this.init = function(force, forceCalcSlides) {
            var _width = _this.h.getWidth(_this.container);
            var _height = _this.h.getHeight(_this.container);
            if (_width === _this.width && _height === _this.height && !force) return;
            _this.width = _width;
            _this.height = _height;
            containerSize = isH ? _width : _height;
            var wrapper = _this.wrapper;
            if (force) { _this.calcSlides(forceCalcSlides); }
            if (params.slidesPerView === 'auto') {
                var slidesWidth = 0;
                var slidesHeight = 0;
                if (params.slidesOffset > 0) {
                    wrapper.style.paddingLeft = '';
                    wrapper.style.paddingRight = '';
                    wrapper.style.paddingTop = '';
                    wrapper.style.paddingBottom = '';
                }
                wrapper.style.width = '';
                wrapper.style.height = '';
                if (params.offsetPxBefore > 0) {
                    if (isH) _this.wrapperLeft = params.offsetPxBefore;
                    else _this.wrapperTop = params.offsetPxBefore;
                }
                if (params.offsetPxAfter > 0) {
                    if (isH) _this.wrapperRight = params.offsetPxAfter;
                    else _this.wrapperBottom = params.offsetPxAfter;
                }
                if (params.centeredSlides) {
                    if (isH) {
                        _this.wrapperLeft = (containerSize - this.slides[0].getWidth(true)) / 2;
                        _this.wrapperRight = (containerSize - _this.slides[_this.slides.length - 1].getWidth(true)) / 2;
                    } else {
                        _this.wrapperTop = (containerSize - _this.slides[0].getHeight(true)) / 2;
                        _this.wrapperBottom = (containerSize - _this.slides[_this.slides.length - 1].getHeight(true)) / 2;
                    }
                }
                if (isH) { if (_this.wrapperLeft >= 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px'; if (_this.wrapperRight >= 0) wrapper.style.paddingRight = _this.wrapperRight + 'px'; } else { if (_this.wrapperTop >= 0) wrapper.style.paddingTop = _this.wrapperTop + 'px'; if (_this.wrapperBottom >= 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px'; }
                var slideLeft = 0;
                var centeredSlideLeft = 0;
                _this.snapGrid = [];
                _this.slidesGrid = [];
                var slideMaxHeight = 0;
                for (var i = 0; i < _this.slides.length; i++) {
                    var slideWidth = _this.slides[i].getWidth(true);
                    var slideHeight = _this.slides[i].getHeight(true);
                    if (params.calculateHeight) { slideMaxHeight = Math.max(slideMaxHeight, slideHeight) }
                    var _slideSize = isH ? slideWidth : slideHeight;
                    if (params.centeredSlides) {
                        var nextSlideWidth = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getWidth(true);
                        var nextSlideHeight = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getHeight(true);
                        var nextSlideSize = isH ? nextSlideWidth : nextSlideHeight;
                        if (_slideSize > containerSize) {
                            for (var j = 0; j <= Math.floor(_slideSize / (containerSize + _this.wrapperLeft)); j++) {
                                if (j === 0) _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                                else _this.snapGrid.push(slideLeft + _this.wrapperLeft + containerSize * j);
                            }
                            _this.slidesGrid.push(slideLeft + _this.wrapperLeft);
                        } else {
                            _this.snapGrid.push(centeredSlideLeft);
                            _this.slidesGrid.push(centeredSlideLeft);
                        }
                        centeredSlideLeft += _slideSize / 2 + nextSlideSize / 2;
                    } else {
                        if (_slideSize > containerSize) { for (var j = 0; j <= Math.floor(_slideSize / containerSize); j++) { _this.snapGrid.push(slideLeft + containerSize * j); } } else { _this.snapGrid.push(slideLeft); }
                        _this.slidesGrid.push(slideLeft);
                    }
                    slideLeft += _slideSize;
                    slidesWidth += slideWidth;
                    slidesHeight += slideHeight;
                }
                if (params.calculateHeight) _this.height = slideMaxHeight;
                if (isH) {
                    wrapperSize = slidesWidth + _this.wrapperRight + _this.wrapperLeft;
                    wrapper.style.width = (slidesWidth) + 'px';
                    wrapper.style.height = (_this.height) + 'px';
                } else {
                    wrapperSize = slidesHeight + _this.wrapperTop + _this.wrapperBottom;
                    wrapper.style.width = (_this.width) + 'px';
                    wrapper.style.height = (slidesHeight) + 'px';
                }
            } else if (params.scrollContainer) {
                wrapper.style.width = '';
                wrapper.style.height = '';
                var wrapperWidth = _this.slides[0].getWidth(true);
                var wrapperHeight = _this.slides[0].getHeight(true);
                wrapperSize = isH ? wrapperWidth : wrapperHeight;
                wrapper.style.width = wrapperWidth + 'px';
                wrapper.style.height = wrapperHeight + 'px';
                slideSize = isH ? wrapperWidth : wrapperHeight;
            } else {
                if (params.calculateHeight) {
                    var slideMaxHeight = 0;
                    var wrapperHeight = 0;
                    if (!isH) _this.container.style.height = '';
                    wrapper.style.height = '';
                    for (var i = 0; i < _this.slides.length; i++) {
                        _this.slides[i].style.height = '';
                        slideMaxHeight = Math.max(_this.slides[i].getHeight(true), slideMaxHeight);
                        if (!isH) wrapperHeight += _this.slides[i].getHeight(true);
                    }
                    var slideHeight = slideMaxHeight;
                    _this.height = slideHeight;
                    if (isH) wrapperHeight = slideHeight;
                    else containerSize = slideHeight, _this.container.style.height = containerSize + 'px';
                } else { var slideHeight = isH ? _this.height : _this.height / params.slidesPerView; var wrapperHeight = isH ? _this.height : _this.slides.length * slideHeight; }
                var slideWidth = isH ? _this.width / params.slidesPerView : _this.width;
                var wrapperWidth = isH ? _this.slides.length * slideWidth : _this.width;
                slideSize = isH ? slideWidth : slideHeight;
                if (params.offsetSlidesBefore > 0) {
                    if (isH) _this.wrapperLeft = slideSize * params.offsetSlidesBefore;
                    else _this.wrapperTop = slideSize * params.offsetSlidesBefore;
                }
                if (params.offsetSlidesAfter > 0) {
                    if (isH) _this.wrapperRight = slideSize * params.offsetSlidesAfter;
                    else _this.wrapperBottom = slideSize * params.offsetSlidesAfter;
                }
                if (params.offsetPxBefore > 0) {
                    if (isH) _this.wrapperLeft = params.offsetPxBefore;
                    else _this.wrapperTop = params.offsetPxBefore;
                }
                if (params.offsetPxAfter > 0) {
                    if (isH) _this.wrapperRight = params.offsetPxAfter;
                    else _this.wrapperBottom = params.offsetPxAfter;
                }
                if (params.centeredSlides) {
                    if (isH) {
                        _this.wrapperLeft = (containerSize - slideSize) / 2;
                        _this.wrapperRight = (containerSize - slideSize) / 2;
                    } else {
                        _this.wrapperTop = (containerSize - slideSize) / 2;
                        _this.wrapperBottom = (containerSize - slideSize) / 2;
                    }
                }
                if (isH) { if (_this.wrapperLeft > 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px'; if (_this.wrapperRight > 0) wrapper.style.paddingRight = _this.wrapperRight + 'px'; } else { if (_this.wrapperTop > 0) wrapper.style.paddingTop = _this.wrapperTop + 'px'; if (_this.wrapperBottom > 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px'; }
                wrapperSize = isH ? wrapperWidth + _this.wrapperRight + _this.wrapperLeft : wrapperHeight + _this.wrapperTop + _this.wrapperBottom;
                if (!params.cssWidthAndHeight) {
                    if (parseFloat(wrapperWidth) > 0) { wrapper.style.width = wrapperWidth + 'px'; }
                    if (parseFloat(wrapperHeight) > 0) { wrapper.style.height = wrapperHeight + 'px'; }
                }
                var slideLeft = 0;
                _this.snapGrid = [];
                _this.slidesGrid = [];
                for (var i = 0; i < _this.slides.length; i++) {
                    _this.snapGrid.push(slideLeft);
                    _this.slidesGrid.push(slideLeft);
                    slideLeft += slideSize;
                    if (!params.cssWidthAndHeight) {
                        if (parseFloat(slideWidth) > 0) { _this.slides[i].style.width = slideWidth + 'px'; }
                        if (parseFloat(slideHeight) > 0) { _this.slides[i].style.height = slideHeight + 'px'; }
                    }
                }
            }
            if (!_this.initialized) { _this.callPlugins('onFirstInit'); if (params.onFirstInit) _this.fireCallback(params.onFirstInit, _this); } else { _this.callPlugins('onInit'); if (params.onInit) _this.fireCallback(params.onInit, _this); }
            _this.initialized = true;
        }
        _this.reInit = function(forceCalcSlides) { _this.init(true, forceCalcSlides); }
        _this.resizeFix = function(reInit) {
            _this.callPlugins('beforeResizeFix');
            _this.init(params.resizeReInit || reInit);
            if (!params.freeMode) { _this.swipeTo((params.loop ? _this.activeLoopIndex : _this.activeIndex), 0, false); } else if (_this.getWrapperTranslate() < -maxWrapperPosition()) {
                _this.setWrapperTransition(0);
                _this.setWrapperTranslate(-maxWrapperPosition());
            }
            _this.callPlugins('afterResizeFix');
        }

        function maxWrapperPosition() {
            var a = (wrapperSize - containerSize);
            if (params.freeMode) { a = wrapperSize - containerSize; }
            if (params.slidesPerView > _this.slides.length) a = 0;
            if (a < 0) a = 0;
            return a;
        }

        function minWrapperPosition() { var a = 0; return a; }

        function initEvents() {
            var bind = _this.h.addEventListener;
            if (!_this.browser.ie10) {
                if (_this.support.touch) {
                    bind(_this.wrapper, 'touchstart', onTouchStart);
                    bind(_this.wrapper, 'touchmove', onTouchMove);
                    bind(_this.wrapper, 'touchend', onTouchEnd);
                }
                if (params.simulateTouch) {
                    bind(_this.wrapper, 'mousedown', onTouchStart);
                    bind(document, 'mousemove', onTouchMove);
                    bind(document, 'mouseup', onTouchEnd);
                }
            } else {
                bind(_this.wrapper, _this.touchEvents.touchStart, onTouchStart);
                bind(document, _this.touchEvents.touchMove, onTouchMove);
                bind(document, _this.touchEvents.touchEnd, onTouchEnd);
            }
            if (params.autoResize) { bind(window, 'resize', _this.resizeFix); }
            addSlideEvents();
            _this._wheelEvent = false;
            if (params.mousewheelControl) {
                if (document.onmousewheel !== undefined) { _this._wheelEvent = "mousewheel"; }
                try {
                    WheelEvent("wheel");
                    _this._wheelEvent = "wheel";
                } catch (e) {}
                if (!_this._wheelEvent) { _this._wheelEvent = "DOMMouseScroll"; }
                if (_this._wheelEvent) { bind(_this.container, _this._wheelEvent, handleMousewheel); }
            }
            if (params.keyboardControl) { bind(document, 'keydown', handleKeyboardKeys); }
            if (params.updateOnImagesReady) { _this.imagesToLoad = $$('img', _this.container); for (var i = 0; i < _this.imagesToLoad.length; i++) { _loadImage(_this.imagesToLoad[i].getAttribute('src')) } }

            function _loadImage(src) {
                var image = new Image();
                image.onload = function() { _this.imagesLoaded++; if (_this.imagesLoaded == _this.imagesToLoad.length) { _this.reInit(); if (params.onImagesReady) _this.fireCallback(params.onImagesReady, _this); } }
                image.src = src;
            }
        }
        _this.destroy = function(removeResizeFix) {
            var unbind = _this.h.removeEventListener;
            if (!_this.browser.ie10) {
                if (_this.support.touch) {
                    unbind(_this.wrapper, 'touchstart', onTouchStart);
                    unbind(_this.wrapper, 'touchmove', onTouchMove);
                    unbind(_this.wrapper, 'touchend', onTouchEnd);
                }
                if (params.simulateTouch) {
                    unbind(_this.wrapper, 'mousedown', onTouchStart);
                    unbind(document, 'mousemove', onTouchMove);
                    unbind(document, 'mouseup', onTouchEnd);
                }
            } else {
                unbind(_this.wrapper, _this.touchEvents.touchStart, onTouchStart);
                unbind(document, _this.touchEvents.touchMove, onTouchMove);
                unbind(document, _this.touchEvents.touchEnd, onTouchEnd);
            }
            if (params.autoResize) { unbind(window, 'resize', _this.resizeFix); }
            removeSlideEvents();
            if (params.paginationClickable) { removePaginationEvents(); }
            if (params.mousewheelControl && _this._wheelEvent) { unbind(_this.container, _this._wheelEvent, handleMousewheel); }
            if (params.keyboardControl) { unbind(document, 'keydown', handleKeyboardKeys); }
            if (params.autoplay) { _this.stopAutoplay(); }
            _this.callPlugins('onDestroy');
            _this = null;
        }

        function addSlideEvents() {
            var bind = _this.h.addEventListener,
                i;
            if (params.preventLinks) { var links = $$('a', _this.container); for (i = 0; i < links.length; i++) { bind(links[i], 'click', preventClick); } }
            if (params.releaseFormElements) { var formElements = $$('input, textarea, select', _this.container); for (i = 0; i < formElements.length; i++) { bind(formElements[i], _this.touchEvents.touchStart, releaseForms, true); } }
            if (params.onSlideClick) { for (i = 0; i < _this.slides.length; i++) { bind(_this.slides[i], 'click', slideClick); } }
            if (params.onSlideTouch) { for (i = 0; i < _this.slides.length; i++) { bind(_this.slides[i], _this.touchEvents.touchStart, slideTouch); } }
        }

        function removeSlideEvents() {
            var unbind = _this.h.removeEventListener,
                i;
            if (params.onSlideClick) { for (i = 0; i < _this.slides.length; i++) { unbind(_this.slides[i], 'click', slideClick); } }
            if (params.onSlideTouch) { for (i = 0; i < _this.slides.length; i++) { unbind(_this.slides[i], _this.touchEvents.touchStart, slideTouch); } }
            if (params.releaseFormElements) { var formElements = $$('input, textarea, select', _this.container); for (i = 0; i < formElements.length; i++) { unbind(formElements[i], _this.touchEvents.touchStart, releaseForms, true); } }
            if (params.preventLinks) { var links = $$('a', _this.container); for (i = 0; i < links.length; i++) { unbind(links[i], 'click', preventClick); } }
        }

        function handleKeyboardKeys(e) {
            var kc = e.keyCode || e.charCode;
            if (kc == 37 || kc == 39 || kc == 38 || kc == 40) {
                var inView = false;
                var swiperOffset = _this.h.getOffset(_this.container);
                var scrollLeft = _this.h.windowScroll().left;
                var scrollTop = _this.h.windowScroll().top;
                var windowWidth = _this.h.windowWidth();
                var windowHeight = _this.h.windowHeight();
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + _this.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + _this.height],
                    [swiperOffset.left + _this.width, swiperOffset.top + _this.height]
                ]
                for (var i = 0; i < swiperCoord.length; i++) { var point = swiperCoord[i]; if (point[0] >= scrollLeft && point[0] <= scrollLeft + windowWidth && point[1] >= scrollTop && point[1] <= scrollTop + windowHeight) { inView = true; } }
                if (!inView) return;
            }
            if (isH) {
                if (kc == 37 || kc == 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc == 39) _this.swipeNext();
                if (kc == 37) _this.swipePrev();
            } else {
                if (kc == 38 || kc == 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc == 40) _this.swipeNext();
                if (kc == 38) _this.swipePrev();
            }
        }
        var allowScrollChange = true;
        var lastScrollTime = (new Date()).getTime();

        function handleMousewheel(e) {
            var we = _this._wheelEvent;
            var delta = 0;
            if (e.detail) delta = -e.detail;
            else if (we == 'mousewheel') delta = e.wheelDelta;
            else if (we == 'DOMMouseScroll') delta = -e.detail;
            else if (we == 'wheel') { delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY; }
            if (!params.freeMode) {
                if (delta < 0) _this.swipeNext();
                else _this.swipePrev();
            } else {
                var position = _this.getWrapperTranslate() + delta;
                if (position > 0) position = 0;
                if (position < -maxWrapperPosition()) position = -maxWrapperPosition();
                _this.setWrapperTransition(0);
                _this.setWrapperTranslate(position);
                _this.updateActiveSlide(position);
            }
            if (params.autoplay) _this.stopAutoplay();
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        if (params.grabCursor) {
            var containerStyle = _this.container.style;
            containerStyle.cursor = 'move';
            containerStyle.cursor = 'grab';
            containerStyle.cursor = '-moz-grab';
            containerStyle.cursor = '-webkit-grab';
        }
        _this.allowSlideClick = true;

        function slideClick(event) {
            if (_this.allowSlideClick) {
                setClickedSlide(event);
                this.fireCallback(params.onSlideClick, _this, event);
            }
        }

        function slideTouch(event) {
            setClickedSlide(event);
            _this.fireCallback(params.onSlideTouch, _this, event);
        }

        function setClickedSlide(event) {
            if (!event.currentTarget) {
                var element = event.srcElement;
                do { if (element.className.indexOf(params.slideClass) > -1) { break; } }
                while (element = element.parentNode);
                _this.clickedSlide = element;
            } else { _this.clickedSlide = event.currentTarget; }
            _this.clickedSlideIndex = _this.slides.indexOf(_this.clickedSlide);
            _this.clickedSlideLoopIndex = _this.clickedSlideIndex - (_this.loopedSlides || 0);
        }
        _this.allowLinks = true;

        function preventClick(e) {
            if (!_this.allowLinks) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                return false;
            }
        }

        function releaseForms(e) {
            if (e.stopPropagation) e.stopPropagation();
            else e.returnValue = false;
            return false;
        }
        var isTouchEvent = false;
        var allowThresholdMove;
        var allowMomentumBounce = true;

        function onTouchStart(event) {
            if (jQuery(event.target).parents('.swiper-container').attr('data-desktop-swipe') == 'false' && !Modernizr.touch) return false;
            if (jQuery(event.target).parents('.swiper-container').find('.swiper-slide').length == 1) return false;
            if (jQuery(event.target).parents('.swiper-container').find('.swiper-slide.duplicate-transition').length > 0) return false;
            if (params.preventLinks) _this.allowLinks = true;
            if (_this.isTouched || params.onlyExternal) { return false; }
            if (params.noSwiping && (event.target || event.srcElement) && noSwipingSlide(event.target || event.srcElement)) return false;
            allowMomentumBounce = false;
            _this.isTouched = true;
            isTouchEvent = event.type == 'touchstart';
            if (!isTouchEvent || event.targetTouches.length == 1) {
                _this.callPlugins('onTouchStartBegin');
                if (!isTouchEvent) {
                    if (event.preventDefault) event.preventDefault();
                    else event.returnValue = false;
                }
                var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
                var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);
                _this.touches.startX = _this.touches.currentX = pageX;
                _this.touches.startY = _this.touches.currentY = pageY;
                _this.touches.start = _this.touches.current = isH ? pageX : pageY;
                _this.setWrapperTransition(0);
                _this.positions.start = _this.positions.current = _this.getWrapperTranslate();
                _this.setWrapperTranslate(_this.positions.start);
                _this.times.start = (new Date()).getTime();
                isScrolling = undefined;
                if (params.moveStartThreshold > 0) allowThresholdMove = false;
                if (params.onTouchStart) _this.fireCallback(params.onTouchStart, _this);
                _this.callPlugins('onTouchStartEnd');
            }
        }
        var velocityPrevPosition, velocityPrevTime;

        function onTouchMove(event) {
            if (!_this.isTouched || params.onlyExternal) return;
            if (isTouchEvent && event.type == 'mousemove') return;
            var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
            var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);
            if (typeof isScrolling === 'undefined' && isH) { isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) > Math.abs(pageX - _this.touches.startX)); }
            if (typeof isScrolling === 'undefined' && !isH) { isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) < Math.abs(pageX - _this.touches.startX)); }
            if (isScrolling) { _this.isTouched = false; return; }
            if (event.assignedToSwiper) { _this.isTouched = false; return; }
            event.assignedToSwiper = true;
            if (params.preventLinks) { _this.allowLinks = false; }
            if (params.onSlideClick) { _this.allowSlideClick = false; }
            if (params.autoplay) { _this.stopAutoplay(); }
            if (!isTouchEvent || event.touches.length == 1) {
                if (!_this.isMoved) {
                    _this.callPlugins('onTouchMoveStart');
                    if (params.loop) {
                        _this.fixLoop();
                        _this.positions.start = _this.getWrapperTranslate();
                    }
                    if (params.onTouchMoveStart) _this.fireCallback(params.onTouchMoveStart, _this);
                }
                _this.isMoved = true;
                if (event.preventDefault) event.preventDefault();
                else event.returnValue = false;
                _this.touches.current = isH ? pageX : pageY;
                _this.positions.current = (_this.touches.current - _this.touches.start) * params.touchRatio + _this.positions.start;
                if (_this.positions.current > 0 && params.onResistanceBefore) { _this.fireCallback(params.onResistanceBefore, _this, _this.positions.current); }
                if (_this.positions.current < -maxWrapperPosition() && params.onResistanceAfter) { _this.fireCallback(params.onResistanceAfter, _this, Math.abs(_this.positions.current + maxWrapperPosition())); }
                if (params.resistance && params.resistance != '100%') {
                    if (_this.positions.current > 0) {
                        var resistance = 1 - _this.positions.current / containerSize / 2;
                        if (resistance < 0.5)
                            _this.positions.current = (containerSize / 2);
                        else
                            _this.positions.current = _this.positions.current * resistance;
                    }
                    if (_this.positions.current < -maxWrapperPosition()) {
                        var diff = (_this.touches.current - _this.touches.start) * params.touchRatio + (maxWrapperPosition() + _this.positions.start);
                        var resistance = (containerSize + diff) / (containerSize);
                        var newPos = _this.positions.current - diff * (1 - resistance) / 2;
                        var stopPos = -maxWrapperPosition() - containerSize / 2;
                        if (newPos < stopPos || resistance <= 0)
                            _this.positions.current = stopPos;
                        else
                            _this.positions.current = newPos;
                    }
                }
                if (params.resistance && params.resistance == '100%') {
                    if (_this.positions.current > 0 && !(params.freeMode && !params.freeModeFluid)) { _this.positions.current = 0; }
                    if ((_this.positions.current) < -maxWrapperPosition() && !(params.freeMode && !params.freeModeFluid)) { _this.positions.current = -maxWrapperPosition(); }
                }
                if (!params.followFinger) return;
                if (!params.moveStartThreshold) { _this.setWrapperTranslate(_this.positions.current); } else {
                    if (Math.abs(_this.touches.current - _this.touches.start) > params.moveStartThreshold || allowThresholdMove) {
                        allowThresholdMove = true;
                        _this.setWrapperTranslate(_this.positions.current);
                    } else { _this.positions.current = _this.positions.start; }
                }
                if (params.freeMode || params.watchActiveIndex) { _this.updateActiveSlide(_this.positions.current); }
                if (params.grabCursor) {
                    _this.container.style.cursor = 'move';
                    _this.container.style.cursor = 'grabbing';
                    _this.container.style.cursor = '-moz-grabbing';
                    _this.container.style.cursor = '-webkit-grabbing';
                }
                if (!velocityPrevPosition) velocityPrevPosition = _this.touches.current;
                if (!velocityPrevTime) velocityPrevTime = (new Date).getTime();
                _this.velocity = (_this.touches.current - velocityPrevPosition) / ((new Date).getTime() - velocityPrevTime) / 2;
                if (Math.abs(_this.touches.current - velocityPrevPosition) < 2) _this.velocity = 0;
                velocityPrevPosition = _this.touches.current;
                velocityPrevTime = (new Date).getTime();
                _this.callPlugins('onTouchMoveEnd');
                if (params.onTouchMove) _this.fireCallback(params.onTouchMove, _this);
                return false;
            }
        }

        function onTouchEnd(event) {
            if (isScrolling) { _this.swipeReset(); }
            if (params.onlyExternal || !_this.isTouched) return;
            _this.isTouched = false
            if (params.grabCursor) {
                _this.container.style.cursor = 'move';
                _this.container.style.cursor = 'grab';
                _this.container.style.cursor = '-moz-grab';
                _this.container.style.cursor = '-webkit-grab';
            }
            if (!_this.positions.current && _this.positions.current !== 0) { _this.positions.current = _this.positions.start }
            if (params.followFinger) { _this.setWrapperTranslate(_this.positions.current); }
            _this.times.end = (new Date()).getTime();
            _this.touches.diff = _this.touches.current - _this.touches.start
            _this.touches.abs = Math.abs(_this.touches.diff)
            _this.positions.diff = _this.positions.current - _this.positions.start
            _this.positions.abs = Math.abs(_this.positions.diff)
            var diff = _this.positions.diff;
            var diffAbs = _this.positions.abs;
            var timeDiff = _this.times.end - _this.times.start
            if (diffAbs < 5 && (timeDiff) < 300 && _this.allowLinks == false) {
                if (!params.freeMode && diffAbs != 0) _this.swipeReset()
                if (params.preventLinks) { _this.allowLinks = true; }
                if (params.onSlideClick) { _this.allowSlideClick = true; }
            }
            setTimeout(function() {
                if (params.preventLinks) { _this.allowLinks = true; }
                if (params.onSlideClick) { _this.allowSlideClick = true; }
            }, 100);
            var maxPosition = maxWrapperPosition();
            if (!_this.isMoved && params.freeMode) {
                _this.isMoved = false;
                if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
                _this.callPlugins('onTouchEnd');
                return;
            }
            if (!_this.isMoved || _this.positions.current > 0 || _this.positions.current < -maxPosition) {
                _this.swipeReset();
                if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
                _this.callPlugins('onTouchEnd');
                return;
            }
            _this.isMoved = false;
            if (params.freeMode) {
                if (params.freeModeFluid) {
                    var momentumDuration = 1000 * params.momentumRatio;
                    var momentumDistance = _this.velocity * momentumDuration;
                    var newPosition = _this.positions.current + momentumDistance
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(_this.velocity) * 20 * params.momentumBounceRatio;
                    if (newPosition < -maxPosition) {
                        if (params.momentumBounce && _this.support.transitions) {
                            if (newPosition + maxPosition < -bounceAmount) newPosition = -maxPosition - bounceAmount;
                            afterBouncePosition = -maxPosition;
                            doBounce = true;
                            allowMomentumBounce = true;
                        } else newPosition = -maxPosition;
                    }
                    if (newPosition > 0) {
                        if (params.momentumBounce && _this.support.transitions) {
                            if (newPosition > bounceAmount) newPosition = bounceAmount;
                            afterBouncePosition = 0
                            doBounce = true;
                            allowMomentumBounce = true;
                        } else newPosition = 0;
                    }
                    if (_this.velocity != 0) momentumDuration = Math.abs((newPosition - _this.positions.current) / _this.velocity)
                    _this.setWrapperTranslate(newPosition);
                    _this.setWrapperTransition(momentumDuration);
                    if (params.momentumBounce && doBounce) {
                        _this.wrapperTransitionEnd(function() {
                            if (!allowMomentumBounce) return;
                            if (params.onMomentumBounce) params.onMomentumBounce(_this);
                            _this.setWrapperTranslate(afterBouncePosition);
                            _this.setWrapperTransition(300);
                        })
                    }
                    _this.updateActiveSlide(newPosition)
                }
                if (!params.freeModeFluid || timeDiff >= 300) _this.updateActiveSlide(_this.positions.current)
                if (params.onTouchEnd) params.onTouchEnd(_this)
                _this.callPlugins('onTouchEnd');
                return;
            }
            direction = diff < 0 ? "toNext" : "toPrev"
            if (direction == "toNext" && (timeDiff <= 300)) {
                if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset()
                else _this.swipeNext(true);
            }
            if (direction == "toPrev" && (timeDiff <= 300)) {
                if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset()
                else _this.swipePrev(true);
            }
            var targetSlideSize = 0;
            if (params.slidesPerView == 'auto') {
                var currentPosition = Math.abs(_this.getWrapperTranslate());
                var slidesOffset = 0;
                var _slideSize;
                for (var i = 0; i < _this.slides.length; i++) {
                    _slideSize = isH ? _this.slides[i].getWidth(true) : _this.slides[i].getHeight(true);
                    slidesOffset += _slideSize;
                    if (slidesOffset > currentPosition) { targetSlideSize = _slideSize; break; }
                }
                if (targetSlideSize > containerSize) targetSlideSize = containerSize;
            } else { targetSlideSize = slideSize * params.slidesPerView; }
            if (direction == "toNext" && (timeDiff > 300)) {
                if (diffAbs >= targetSlideSize * 0.5) { _this.swipeNext(true) } else { _this.swipeReset() }
            }
            if (direction == "toPrev" && (timeDiff > 300)) {
                if (diffAbs >= targetSlideSize * 0.5) { _this.swipePrev(true); } else { _this.swipeReset() }
            }
            if (params.onTouchEnd) params.onTouchEnd(_this)
            _this.callPlugins('onTouchEnd');
        }

        function noSwipingSlide(el) {
            var noSwiping = false;
            do {
                if (el.className.indexOf(params.noSwipingClass) > -1) { noSwiping = true; }
                el = el.parentElement;
            } while (!noSwiping && el.parentElement && el.className.indexOf(params.wrapperClass) == -1);
            if (!noSwiping && el.className.indexOf(params.wrapperClass) > -1 && el.className.indexOf(params.noSwipingClass) > -1)
                noSwiping = true;
            return noSwiping;
        }
        _this.swipeNext = function(internal) {
            if (!internal && params.loop) _this.fixLoop();
            _this.callPlugins('onSwipeNext');
            var currentPosition = _this.getWrapperTranslate();
            var newPosition = currentPosition;
            if (params.slidesPerView == 'auto') {
                for (var i = 0; i < _this.snapGrid.length; i++) {
                    if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                        newPosition = -_this.snapGrid[i + 1]
                        break;
                    }
                }
            } else {
                var groupSize = slideSize * params.slidesPerGroup;
                newPosition = -(Math.floor(Math.abs(currentPosition) / Math.floor(groupSize)) * groupSize + groupSize);
            }
            if (newPosition < -maxWrapperPosition()) { newPosition = -maxWrapperPosition() };
            if (newPosition == currentPosition) return false;
            swipeToPosition(newPosition, 'next');
            return true
        }
        _this.swipePrev = function(internal) {
            if (!internal && params.loop) _this.fixLoop();
            if (!internal && params.autoplay) _this.stopAutoplay();
            _this.callPlugins('onSwipePrev');
            var currentPosition = Math.ceil(_this.getWrapperTranslate());
            var newPosition;
            if (params.slidesPerView == 'auto') {
                newPosition = 0;
                for (var i = 1; i < _this.snapGrid.length; i++) {
                    if (-currentPosition == _this.snapGrid[i]) {
                        newPosition = -_this.snapGrid[i - 1]
                        break;
                    }
                    if (-currentPosition > _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                        newPosition = -_this.snapGrid[i]
                        break;
                    }
                }
            } else {
                var groupSize = slideSize * params.slidesPerGroup;
                newPosition = -(Math.ceil(-currentPosition / groupSize) - 1) * groupSize;
            }
            if (newPosition > 0) newPosition = 0;
            if (newPosition == currentPosition) return false;
            swipeToPosition(newPosition, 'prev');
            return true;
        }
        _this.swipeReset = function() {
            _this.callPlugins('onSwipeReset');
            var currentPosition = _this.getWrapperTranslate();
            var groupSize = slideSize * params.slidesPerGroup;
            var newPosition;
            var maxPosition = -maxWrapperPosition();
            if (params.slidesPerView == 'auto') {
                newPosition = 0;
                for (var i = 0; i < _this.snapGrid.length; i++) {
                    if (-currentPosition === _this.snapGrid[i]) return;
                    if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                        if (_this.positions.diff > 0) newPosition = -_this.snapGrid[i + 1]
                        else newPosition = -_this.snapGrid[i]
                        break;
                    }
                }
                if (-currentPosition >= _this.snapGrid[_this.snapGrid.length - 1]) newPosition = -_this.snapGrid[_this.snapGrid.length - 1];
                if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition()
            } else { newPosition = currentPosition < 0 ? Math.round(currentPosition / groupSize) * groupSize : 0 }
            if (params.scrollContainer) { newPosition = currentPosition < 0 ? currentPosition : 0; }
            if (newPosition < -maxWrapperPosition()) { newPosition = -maxWrapperPosition() }
            if (params.scrollContainer && (containerSize > slideSize)) { newPosition = 0; }
            if (newPosition == currentPosition) return false;
            swipeToPosition(newPosition, 'reset');
            return true;
        }
        _this.swipeTo = function(index, speed, runCallbacks) {
            index = parseInt(index, 10);
            _this.callPlugins('onSwipeTo', { index: index, speed: speed });
            if (params.loop) index = index + _this.loopedSlides;
            var currentPosition = _this.getWrapperTranslate();
            if (index > (_this.slides.length - 1) || index < 0) return;
            var newPosition
            if (params.slidesPerView == 'auto') { newPosition = -_this.slidesGrid[index]; } else { newPosition = -index * slideSize; }
            if (newPosition < -maxWrapperPosition()) { newPosition = -maxWrapperPosition(); };
            if (newPosition == currentPosition) return false;
            runCallbacks = runCallbacks === false ? false : true;
            swipeToPosition(newPosition, 'to', { index: index, speed: speed, runCallbacks: runCallbacks });
            return true;
        }

        function swipeToPosition(newPosition, action, toOptions) {
            var speed = (action == 'to' && toOptions.speed >= 0) ? toOptions.speed : params.speed;
            var timeOld = +new Date();
            if (_this.support.transitions || !params.DOMAnimation) {
                _this.setWrapperTranslate(newPosition);
                _this.setWrapperTransition(speed);
            } else {
                var currentPosition = _this.getWrapperTranslate();
                var animationStep = Math.ceil((newPosition - currentPosition) / speed * (1000 / 60));
                var direction = currentPosition > newPosition ? 'toNext' : 'toPrev';
                var condition = direction == 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
                if (_this._DOMAnimating) return;
                anim();
            }

            function anim() {
                var timeNew = +new Date();
                var time = timeNew - timeOld;
                currentPosition += animationStep * time / (1000 / 60);
                condition = direction == 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
                if (condition) {
                    _this.setWrapperTranslate(Math.round(currentPosition));
                    _this._DOMAnimating = true
                    window.setTimeout(function() { anim() }, 1000 / 60)
                } else {
                    if (params.onSlideChangeEnd) _this.fireCallback(params.onSlideChangeEnd, _this);
                    _this.setWrapperTranslate(newPosition);
                    _this._DOMAnimating = false;
                }
            }
            _this.updateActiveSlide(newPosition);
            if (params.onSlideNext && action == 'next') { _this.fireCallback(params.onSlideNext, _this, newPosition); }
            if (params.onSlidePrev && action == 'prev') { _this.fireCallback(params.onSlidePrev, _this, newPosition); }
            if (params.onSlideReset && action == 'reset') { _this.fireCallback(params.onSlideReset, _this, newPosition); }
            if (action == 'next' || action == 'prev' || (action == 'to' && toOptions.runCallbacks == true))
                slideChangeCallbacks(action);
        }
        _this._queueStartCallbacks = false;
        _this._queueEndCallbacks = false;

        function slideChangeCallbacks(direction) {
            _this.callPlugins('onSlideChangeStart');
            if (params.onSlideChangeStart) {
                if (params.queueStartCallbacks && _this.support.transitions) {
                    if (_this._queueStartCallbacks) return;
                    _this._queueStartCallbacks = true;
                    _this.fireCallback(params.onSlideChangeStart, _this, direction)
                    _this.wrapperTransitionEnd(function() { _this._queueStartCallbacks = false; })
                } else _this.fireCallback(params.onSlideChangeStart, _this, direction)
            }
            if (params.onSlideChangeEnd) {
                if (_this.support.transitions) {
                    if (params.queueEndCallbacks) {
                        if (_this._queueEndCallbacks) return;
                        _this._queueEndCallbacks = true;
                        _this.wrapperTransitionEnd(function(swiper) {
                            setTimeout(function() { if (params.loop) _this.fixLoop(); }, 50);
                            _this.fireCallback(params.onSlideChangeEnd, swiper, direction)
                        })
                    } else _this.wrapperTransitionEnd(function(swiper) {
                        setTimeout(function() { if (params.loop) _this.fixLoop(); }, 50);
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction)
                    })
                } else { if (!params.DOMAnimation) { setTimeout(function() { _this.fireCallback(params.onSlideChangeStart, _this, direction) }, 10) } }
            }
        }
        _this.updateActiveSlide = function(position) {
            if (!_this.initialized) return;
            if (_this.slides.length == 0) return;
            _this.previousIndex = _this.activeIndex;
            if (typeof position == 'undefined') position = _this.getWrapperTranslate();
            if (position > 0) position = 0;
            if (params.slidesPerView == 'auto') {
                var slidesOffset = 0;
                _this.activeIndex = _this.slidesGrid.indexOf(-position);
                if (_this.activeIndex < 0) {
                    for (var i = 0; i < _this.slidesGrid.length - 1; i++) { if (-position > _this.slidesGrid[i] && -position < _this.slidesGrid[i + 1]) { break; } }
                    var leftDistance = Math.abs(_this.slidesGrid[i] + position)
                    var rightDistance = Math.abs(_this.slidesGrid[i + 1] + position)
                    if (leftDistance <= rightDistance) _this.activeIndex = i;
                    else _this.activeIndex = i + 1;
                }
            } else { _this.activeIndex = Math[params.visibilityFullFit ? 'ceil' : 'round'](-position / slideSize); }
            if (_this.activeIndex == _this.slides.length) _this.activeIndex = _this.slides.length - 1;
            if (_this.activeIndex < 0) _this.activeIndex = 0;
            if (!_this.slides[_this.activeIndex]) return;
            _this.calcVisibleSlides(position);
            var activeClassRegexp = new RegExp("\\s*" + params.slideActiveClass);
            var inViewClassRegexp = new RegExp("\\s*" + params.slideVisibleClass);
            for (var i = 0; i < _this.slides.length; i++) { _this.slides[i].className = _this.slides[i].className.replace(activeClassRegexp, '').replace(inViewClassRegexp, ''); if (_this.visibleSlides.indexOf(_this.slides[i]) >= 0) { _this.slides[i].className += ' ' + params.slideVisibleClass; } }
            _this.slides[_this.activeIndex].className += ' ' + params.slideActiveClass;
            if (params.loop) {
                var ls = _this.loopedSlides;
                _this.activeLoopIndex = _this.activeIndex - ls;
                if (_this.activeLoopIndex >= _this.slides.length - ls * 2) { _this.activeLoopIndex = _this.slides.length - ls * 2 - _this.activeLoopIndex; }
                if (_this.activeLoopIndex < 0) { _this.activeLoopIndex = _this.slides.length - ls * 2 + _this.activeLoopIndex; }
            } else { _this.activeLoopIndex = _this.activeIndex; }
            if (params.pagination) { _this.updatePagination(position); }
        }
        _this.createPagination = function(firstInit) {
            if (params.paginationClickable && _this.paginationButtons) { removePaginationEvents(); }
            var paginationHTML = "";
            var numOfSlides = _this.slides.length;
            var numOfButtons = numOfSlides;
            if (params.loop) numOfButtons -= _this.loopedSlides * 2
            for (var i = 0; i < numOfButtons; i++) { paginationHTML += '<' + params.paginationElement + ' class="' + params.paginationElementClass + '"></' + params.paginationElement + '>' }
            _this.paginationContainer = params.pagination.nodeType ? params.pagination : $$(params.pagination)[0];
            _this.paginationContainer.innerHTML = paginationHTML;
            _this.paginationButtons = $$('.' + params.paginationElementClass, _this.paginationContainer);
            if (!firstInit) _this.updatePagination()
            _this.callPlugins('onCreatePagination');
            if (params.paginationClickable) { addPaginationEvents(); }
        }

        function removePaginationEvents() { var pagers = _this.paginationButtons; for (var i = 0; i < pagers.length; i++) { _this.h.removeEventListener(pagers[i], 'click', paginationClick); } }

        function addPaginationEvents() { var pagers = _this.paginationButtons; for (var i = 0; i < pagers.length; i++) { _this.h.addEventListener(pagers[i], 'click', paginationClick); } }

        function paginationClick(e) {
            var index;
            var target = e.target || e.srcElement;
            var pagers = _this.paginationButtons;
            for (var i = 0; i < pagers.length; i++) { if (target === pagers[i]) index = i; }
            _this.swipeTo(index)
        }
        _this.updatePagination = function(position) {
            if (!params.pagination) return;
            if (_this.slides.length < 1) return;
            var activePagers = $$('.' + params.paginationActiveClass, _this.paginationContainer);
            if (!activePagers) return;
            var pagers = _this.paginationButtons;
            if (pagers.length == 0) return;
            for (var i = 0; i < pagers.length; i++) { pagers[i].className = params.paginationElementClass }
            var indexOffset = params.loop ? _this.loopedSlides : 0;
            if (params.paginationAsRange) {
                if (!_this.visibleSlides) _this.calcVisibleSlides(position)
                var visibleIndexes = [];
                for (var i = 0; i < _this.visibleSlides.length; i++) {
                    var visIndex = _this.slides.indexOf(_this.visibleSlides[i]) - indexOffset
                    if (params.loop && visIndex < 0) { visIndex = _this.slides.length - _this.loopedSlides * 2 + visIndex; }
                    if (params.loop && visIndex >= _this.slides.length - _this.loopedSlides * 2) {
                        visIndex = _this.slides.length - _this.loopedSlides * 2 - visIndex;
                        visIndex = Math.abs(visIndex)
                    }
                    visibleIndexes.push(visIndex)
                }
                for (i = 0; i < visibleIndexes.length; i++) { if (pagers[visibleIndexes[i]]) pagers[visibleIndexes[i]].className += ' ' + params.paginationVisibleClass; }
                if (params.loop) { pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass; } else { pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass; }
            } else {
                if (params.loop) { pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass; } else { pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass; }
            }
        }
        _this.calcVisibleSlides = function(position) {
            var visibleSlides = [];
            var _slideLeft = 0,
                _slideSize = 0,
                _slideRight = 0;
            if (isH && _this.wrapperLeft > 0) position = position + _this.wrapperLeft;
            if (!isH && _this.wrapperTop > 0) position = position + _this.wrapperTop;
            for (var i = 0; i < _this.slides.length; i++) {
                _slideLeft += _slideSize;
                if (params.slidesPerView == 'auto')
                    _slideSize = isH ? _this.h.getWidth(_this.slides[i], true) : _this.h.getHeight(_this.slides[i], true);
                else _slideSize = slideSize;
                _slideRight = _slideLeft + _slideSize;
                var isVisibile = false;
                if (params.visibilityFullFit) { if (_slideLeft >= -position && _slideRight <= -position + containerSize) isVisibile = true; if (_slideLeft <= -position && _slideRight >= -position + containerSize) isVisibile = true; } else { if (_slideRight > -position && _slideRight <= ((-position + containerSize))) isVisibile = true; if (_slideLeft >= -position && _slideLeft < ((-position + containerSize))) isVisibile = true; if (_slideLeft < -position && _slideRight > ((-position + containerSize))) isVisibile = true; }
                if (isVisibile) visibleSlides.push(_this.slides[i])
            }
            if (visibleSlides.length == 0) visibleSlides = [_this.slides[_this.activeIndex]]
            _this.visibleSlides = visibleSlides;
        }
        _this.autoPlayIntervalId = undefined;
        _this.startAutoplay = function() {
            if (typeof _this.autoPlayIntervalId !== 'undefined') return false;
            if (params.autoplay && !params.loop) { _this.autoPlayIntervalId = setInterval(function() { if (!_this.swipeNext(true)) _this.swipeTo(0); }, params.autoplay) }
            if (params.autoplay && params.loop) { _this.autoPlayIntervalId = setInterval(function() { _this.swipeNext(); }, params.autoplay) }
            _this.callPlugins('onAutoplayStart');
        }
        _this.stopAutoplay = function() {
            if (_this.autoPlayIntervalId) clearInterval(_this.autoPlayIntervalId);
            _this.autoPlayIntervalId = undefined;
            _this.callPlugins('onAutoplayStop');
        }
        _this.loopCreated = false;
        _this.removeLoopedSlides = function() { if (_this.loopCreated) { for (var i = 0; i < _this.slides.length; i++) { if (_this.slides[i].getData('looped') === true) _this.wrapper.removeChild(_this.slides[i]); } } }
        _this.createLoop = function() {
            if (_this.slides.length == 0) return;
            _this.loopedSlides = params.slidesPerView + params.loopAdditionalSlides;
            if (_this.loopedSlides > _this.slides.length) { _this.loopedSlides = _this.slides.length; }
            var slideFirstHTML = '',
                slideLastHTML = '',
                i;
            for (i = 0; i < _this.loopedSlides; i++) { slideFirstHTML += _this.slides[i].outerHTML; }
            for (i = _this.slides.length - _this.loopedSlides; i < _this.slides.length; i++) { slideLastHTML += _this.slides[i].outerHTML; }
            wrapper.innerHTML = slideLastHTML + wrapper.innerHTML + slideFirstHTML;
            _this.loopCreated = true;
            _this.calcSlides();
            for (i = 0; i < _this.slides.length; i++) { if (i < _this.loopedSlides || i >= _this.slides.length - _this.loopedSlides) _this.slides[i].setData('looped', true); }
            _this.callPlugins('onCreateLoop');
        }
        _this.fixLoop = function() {
            if (_this.params.loop == true) {
                var newIndex;
                if (_this.activeIndex < _this.loopedSlides) {
                    newIndex = _this.slides.length - _this.loopedSlides * 3 + _this.activeIndex;
                    _this.swipeTo(newIndex, 0, false);
                } else if (_this.activeIndex > _this.slides.length - params.slidesPerView * 2) {
                    newIndex = -_this.slides.length + _this.activeIndex + _this.loopedSlides
                    _this.swipeTo(newIndex, 0, false);
                }
            }
        }
        _this.loadSlides = function() {
            var slidesHTML = '';
            _this.activeLoaderIndex = 0;
            var slides = params.loader.slides;
            var slidesToLoad = params.loader.loadAllSlides ? slides.length : params.slidesPerView * (1 + params.loader.surroundGroups);
            for (var i = 0; i < slidesToLoad; i++) {
                if (params.loader.slidesHTMLType == 'outer') slidesHTML += slides[i];
                else { slidesHTML += '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>'; }
            }
            _this.wrapper.innerHTML = slidesHTML;
            _this.calcSlides(true);
            if (!params.loader.loadAllSlides) { _this.wrapperTransitionEnd(_this.reloadSlides, true); }
        }
        _this.reloadSlides = function() {
            var slides = params.loader.slides;
            var newActiveIndex = parseInt(_this.activeSlide().data('swiperindex'), 10)
            if (newActiveIndex < 0 || newActiveIndex > slides.length - 1) return
            _this.activeLoaderIndex = newActiveIndex;
            var firstIndex = Math.max(0, newActiveIndex - params.slidesPerView * params.loader.surroundGroups)
            var lastIndex = Math.min(newActiveIndex + params.slidesPerView * (1 + params.loader.surroundGroups) - 1, slides.length - 1)
            if (newActiveIndex > 0) {
                var newTransform = -slideSize * (newActiveIndex - firstIndex)
                _this.setWrapperTranslate(newTransform);
                _this.setWrapperTransition(0);
            }
            if (params.loader.logic === 'reload') {
                _this.wrapper.innerHTML = '';
                var slidesHTML = '';
                for (var i = firstIndex; i <= lastIndex; i++) { slidesHTML += params.loader.slidesHTMLType == 'outer' ? slides[i] : '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>'; }
                _this.wrapper.innerHTML = slidesHTML;
            } else {
                var minExistIndex = 1000;
                var maxExistIndex = 0;
                for (var i = 0; i < _this.slides.length; i++) {
                    var index = _this.slides[i].data('swiperindex');
                    if (index < firstIndex || index > lastIndex) { _this.wrapper.removeChild(_this.slides[i]); } else {
                        minExistIndex = Math.min(index, minExistIndex)
                        maxExistIndex = Math.max(index, maxExistIndex)
                    }
                }
                for (var i = firstIndex; i <= lastIndex; i++) {
                    if (i < minExistIndex) {
                        var newSlide = document.createElement(params.slideElement);
                        newSlide.className = params.slideClass;
                        newSlide.setAttribute('data-swiperindex', i);
                        newSlide.innerHTML = slides[i];
                        _this.wrapper.insertBefore(newSlide, _this.wrapper.firstChild);
                    }
                    if (i > maxExistIndex) {
                        var newSlide = document.createElement(params.slideElement);
                        newSlide.className = params.slideClass;
                        newSlide.setAttribute('data-swiperindex', i);
                        newSlide.innerHTML = slides[i];
                        _this.wrapper.appendChild(newSlide);
                    }
                }
            }
            _this.reInit(true);
        }

        function makeSwiper() {
            _this.calcSlides();
            if (params.loader.slides.length > 0 && _this.slides.length == 0) { _this.loadSlides(); }
            if (params.loop) { _this.createLoop(); }
            _this.init();
            initEvents();
            if (params.pagination && params.createPagination) { _this.createPagination(true); }
            if (params.loop || params.initialSlide > 0) { _this.swipeTo(params.initialSlide, 0, false); } else { _this.updateActiveSlide(0); }
            if (params.autoplay) { _this.startAutoplay(); }
        }
        makeSwiper();
    }
    Swiper.prototype = {
        plugins: {},
        wrapperTransitionEnd: function(callback, permanent) {
            var a = this,
                el = a.wrapper,
                events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                i;

            function fireCallBack() { callback(a); if (a.params.queueEndCallbacks) a._queueEndCallbacks = false; if (!permanent) { for (i = 0; i < events.length; i++) { a.h.removeEventListener(el, events[i], fireCallBack); } } }
            if (callback) { for (i = 0; i < events.length; i++) { a.h.addEventListener(el, events[i], fireCallBack); } }
        },
        getWrapperTranslate: function(axis) {
            var el = this.wrapper,
                matrix, curTransform, curStyle, transformMatrix;
            if (typeof axis == 'undefined') { axis = this.params.mode == 'horizontal' ? 'x' : 'y'; }
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) { transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform); } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(',');
            }
            if (this.support.transforms && this.params.useCSS3Transforms) {
                if (axis == 'x') {
                    if (window.WebKitCSSMatrix)
                        curTransform = transformMatrix.m41;
                    else if (matrix.length == 16)
                        curTransform = parseFloat(matrix[12]);
                    else
                        curTransform = parseFloat(matrix[4]);
                }
                if (axis == 'y') {
                    if (window.WebKitCSSMatrix)
                        curTransform = transformMatrix.m42;
                    else if (matrix.length == 16)
                        curTransform = parseFloat(matrix[13]);
                    else
                        curTransform = parseFloat(matrix[5]);
                }
            } else { if (axis == 'x') curTransform = parseFloat(el.style.left, 10) || 0; if (axis == 'y') curTransform = parseFloat(el.style.top, 10) || 0; }
            return curTransform || 0;
        },
        setWrapperTranslate: function(x, y, z) {
            var es = this.wrapper.style,
                coords = { x: 0, y: 0, z: 0 },
                translate;
            if (arguments.length == 3) {
                coords.x = x;
                coords.y = y;
                coords.z = z;
            } else {
                if (typeof y == 'undefined') { y = this.params.mode == 'horizontal' ? 'x' : 'y'; }
                coords[y] = x;
            }
            if (this.support.transforms && this.params.useCSS3Transforms) {
                translate = this.support.transforms3d ? 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)' : 'translate(' + coords.x + 'px, ' + coords.y + 'px)';
                es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = translate;
            } else {
                es.left = coords.x + 'px';
                es.top = coords.y + 'px';
            }
            this.callPlugins('onSetWrapperTransform', coords);
            if (this.params.onSetWrapperTransform) this.fireCallback(this.params.onSetWrapperTransform, this, coords);
        },
        setWrapperTransition: function(duration) {
            var es = this.wrapper.style;
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = (duration / 1000) + 's';
            this.callPlugins('onSetWrapperTransition', { duration: duration });
            if (this.params.onSetWrapperTransition) this.fireCallback(this.params.onSetWrapperTransition, this, duration);
        },
        h: {
            getWidth: function(el, outer) {
                var width = window.getComputedStyle(el, null).getPropertyValue('width')
                var returnWidth = parseFloat(width);
                if (isNaN(returnWidth) || width.indexOf('%') > 0) { returnWidth = el.offsetWidth - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right')); }
                if (outer) returnWidth += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'))
                return returnWidth;
            },
            getHeight: function(el, outer) {
                if (outer) return el.offsetHeight;
                var height = window.getComputedStyle(el, null).getPropertyValue('height')
                var returnHeight = parseFloat(height);
                if (isNaN(returnHeight) || height.indexOf('%') > 0) { returnHeight = el.offsetHeight - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom')); }
                if (outer) returnHeight += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'))
                return returnHeight;
            },
            getOffset: function(el) {
                var box = el.getBoundingClientRect();
                var body = document.body;
                var clientTop = el.clientTop || body.clientTop || 0;
                var clientLeft = el.clientLeft || body.clientLeft || 0;
                var scrollTop = window.pageYOffset || el.scrollTop;
                var scrollLeft = window.pageXOffset || el.scrollLeft;
                if (document.documentElement && !window.pageYOffset) {
                    scrollTop = document.documentElement.scrollTop;
                    scrollLeft = document.documentElement.scrollLeft;
                }
                return { top: box.top + scrollTop - clientTop, left: box.left + scrollLeft - clientLeft };
            },
            windowWidth: function() {
                if (window.innerWidth) return window.innerWidth
                else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
            },
            windowHeight: function() {
                if (window.innerHeight) return window.innerHeight
                else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
            },
            windowScroll: function() {
                var left = 0,
                    top = 0;
                if (typeof pageYOffset != 'undefined') { return { left: window.pageXOffset, top: window.pageYOffset } } else if (document.documentElement) { return { left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop } }
            },
            addEventListener: function(el, event, listener, useCapture) {
                if (typeof useCapture == 'undefined') { useCapture = false; }
                if (el.addEventListener) { el.addEventListener(event, listener, useCapture); } else if (el.attachEvent) { el.attachEvent('on' + event, listener); }
            },
            removeEventListener: function(el, event, listener, useCapture) {
                if (typeof useCapture == 'undefined') { useCapture = false; }
                if (el.removeEventListener) { el.removeEventListener(event, listener, useCapture); } else if (el.detachEvent) { el.detachEvent('on' + event, listener); }
            }
        },
        setTransform: function(el, transform) {
            var es = el.style
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transform
        },
        setTranslate: function(el, translate) {
            var es = el.style
            var pos = { x: translate.x || 0, y: translate.y || 0, z: translate.z || 0 };
            var transformString = this.support.transforms3d ? 'translate3d(' + (pos.x) + 'px,' + (pos.y) + 'px,' + (pos.z) + 'px)' : 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)';
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transformString;
            if (!this.support.transforms) {
                es.left = pos.x + 'px'
                es.top = pos.y + 'px'
            }
        },
        setTransition: function(el, duration) {
            var es = el.style
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = duration + 'ms';
        },
        support: { touch: (window.Modernizr && Modernizr.touch === true) || (function() { return !!(("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch); })(), transforms3d: (window.Modernizr && Modernizr.csstransforms3d === true) || (function() { var div = document.createElement('div').style; return ("webkitPerspective" in div || "MozPerspective" in div || "OPerspective" in div || "MsPerspective" in div || "perspective" in div); })(), transforms: (window.Modernizr && Modernizr.csstransforms === true) || (function() { var div = document.createElement('div').style; return ('transform' in div || 'WebkitTransform' in div || 'MozTransform' in div || 'msTransform' in div || 'MsTransform' in div || 'OTransform' in div); })(), transitions: (window.Modernizr && Modernizr.csstransitions === true) || (function() { var div = document.createElement('div').style; return ('transition' in div || 'WebkitTransition' in div || 'MozTransition' in div || 'msTransition' in div || 'MsTransition' in div || 'OTransition' in div); })() },
        browser: {
            ie8: (function() {
                var rv = -1;
                if (navigator.appName == 'Microsoft Internet Explorer') {
                    var ua = navigator.userAgent;
                    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) != null)
                        rv = parseFloat(RegExp.$1);
                }
                return rv != -1 && rv < 9;
            })(),
            ie10: window.navigator.msPointerEnabled
        }
    }
    if (window.jQuery || window.Zepto) {
        (function($) {
            if (!jQuery().swiper) {
                $.fn.swiper = function(params) {
                    var s = new Swiper($(this)[0], params)
                    $(this).data('swiper', s);
                    return s;
                }
            }
        })(window.jQuery || window.Zepto)
    }
    if (typeof(module) !== 'undefined') { module.exports = Swiper; }
}
Swiper.prototype.plugins.progress = function(a) {
    function b() {
        for (var b = 0; b < a.slides.length; b++) {
            var c = a.slides[b];
            c.progressSlideSize = e ? a.h.getWidth(c) : a.h.getHeight(c), c.progressSlideOffset = "offsetLeft" in c ? e ? c.offsetLeft : c.offsetTop : e ? c.getOffset().left - a.h.getOffset(a.container).left : c.getOffset().top - a.h.getOffset(a.container).top
        }
        d = e ? a.h.getWidth(a.wrapper) + a.wrapperLeft + a.wrapperRight - a.width : a.h.getHeight(a.wrapper) + a.wrapperTop + a.wrapperBottom - a.height
    }

    function c(b) {
        var c, b = b || { x: 0, y: 0, z: 0 };
        c = 1 == a.params.centeredSlides ? e ? -b.x + a.width / 2 : -b.y + a.height / 2 : e ? -b.x : -b.y;
        for (var f = 0; f < a.slides.length; f++) {
            var g = a.slides[f],
                h = 1 == a.params.centeredSlides ? g.progressSlideSize / 2 : 0,
                i = (c - g.progressSlideOffset - h) / g.progressSlideSize;
            g.progress = i
        }
        a.progress = e ? -b.x / d : -b.y / d, a.params.onProgressChange && a.fireCallback(a.params.onProgressChange, a)
    }
    var d, e = "horizontal" == a.params.mode,
        f = { onFirstInit: function() { b(), c({ x: a.getWrapperTranslate("x"), y: a.getWrapperTranslate("y") }) }, onInit: function() { b() }, onSetWrapperTransform: function(a) { c(a) } };
    return f
};
jQuery(document).ready(function($) {
    Array.prototype.getKeyByValue = function(value) {
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                if (this[prop] === value)
                    return prop;
            }
        }
    }
    var doneVideoInit = false;
    var $captionTrans = 0;
    var $loading_bg_storage = $('.first-section .nectar-slider-loading').css('background-image');

    function transparentheaderLoadingCalcs() {
        if ($('body #header-outer[data-transparent-header="true"]').length > 0) {
            if ($('#page-header-bg').length == 0) {
                $('.nectar-slider-wrap.first-section .swiper-container .swiper-wrapper .swiper-slide').addClass('not-loaded');
                if ($('.container-wrap .main-content > .row > div').find('.nectar-slider-wrap.first-section').length > 0) { $('.container-wrap .main-content > .row > div').first().css('padding-top', '0'); }
                $('body #header-outer[data-transparent-header="true"] .ns-loading-cover').show();
                if ($('#header-outer[data-remove-border="true"]').length == 0) {
                    if ($('.first-section .nectar-slider-wrap[data-flexible-height="true"]').length == 0 && $('.first-section .nectar-slider-wrap[data-fullscreen="true"]').length == 0) {
                        $('.first-section .nectar-slider-loading').css({ 'top': $('#header-space').height(), 'background-position': 'center ' + ((($('.first-section .swiper-container').height() / 2) + 15) - $('#header-space').height()) + 'px' });
                        $('.first-section .nectar-slider-wrap .nectar-slider-loading .loading-icon').css({ 'opacity': '1', 'height': $('.first-section .swiper-container').height() - $('#header-space').height() + 'px' });
                    } else {
                        var $loading_bg_storage = $('.first-section .nectar-slider-loading').css('background-image');
                        $('.first-section .nectar-slider-loading').css({ 'top': $('#header-space').height(), 'background-image': 'none' });
                    }
                }
            }
        }
    }
    transparentheaderLoadingCalcs();
    var parallaxSlider = $('.parallax_slider_outer.first-section');
    $(window).on("pronto.request", function() {
        $(window).off('resize.nsSliderContent');
        $(window).off('resize.dynamicHeights');
        $(window).off('resize.nsHeightUpdate');
        $('.nectar-slider-wrap').each(function() { if ($(this).attr('data-autorotate') && $(this).attr('data-autorotate').length > 1) { var $autoplayVal = $('#' + $(this).attr('id')).attr('data-autorotate'); if (typeof $autoplayVal != 'undefined' && $autoplayVal.length != '0' && parseInt($autoplayVal)) { clearInterval(autoplay[$('#' + $(this).attr('id')).attr('autoplay-id')]); } } });
    });
    $(window).on("pronto.render", function() {
        if ($('.nectar-slider-wrap').length > 0) {
            $(window).on('resize.nsSliderContent', nsSliderContentResize);
            parallaxSlider = $('.parallax_slider_outer.first-section');
            $(window).unbind('resize.nsHeightUpdate');
            transparentheaderLoadingCalcs();
            if ($('body.single #page-header-bg').length > 0) $('.parallax_slider_outer').removeClass('parallax_slider_outer').addClass('no-left-margin');
            parallaxSliderPos();
            nectarSliderMainInit();
            setTimeout(function() {
                initialSlideLoad();
                dynamicHeightSliders();
                $(window).on('resize.dynamicHeights', dynamicHeightSliders);
                sliderSize();
                resizeToCover();
                parallaxCheck();
                sliderbuttonHoverEffect();
            }, 150);
        }
    });

    function parallaxSliderPos() {
        if (parallaxSlider.parent().attr('class') == 'wpb_wrapper') {
            if (parallaxSlider.parents('.wpb_row').length > 0) { if (parallaxSlider.parents('.wpb_row').not('[id^="fws_"]').length > 0) parallaxSlider.attr('id', parallaxSlider.parents('.wpb_row').attr('id')); }
            parallaxSlider.parents('.wpb_row').remove();
        }
        parallaxSlider.insertBefore('.container-wrap');
    }
    if ($('body.single #page-header-bg').length > 0) $('.parallax_slider_outer').removeClass('parallax_slider_outer').addClass('no-left-margin');
    parallaxSliderPos();
    var $smoothSrollWidth = ($('body').attr('data-smooth-scrolling') == '1') ? 0 : 0;
    var $nectarSliders = [];

    function nectarSliderMainInit() {
        $nectarSliders = [];
        $('.nectar-slider-wrap[data-full-width="boxed-full-width"]').each(function() { if ($(this).parents('.wpb_column').length > 0 && $(this).parents('.full-width-content').length > 0) $(this).attr('data-full-width', 'false') });
        var $leftHeaderSize = ($('#header-outer[data-format="left-header"]').length > 0 && window.innerWidth >= 1000) ? parseInt($('#header-outer[data-format="left-header"]').width()) : 0;
        var $windowWidth = $(window).width() - $leftHeaderSize;
        if ($('body > #boxed').length == 0 && $('.nectar-slider-wrap[data-full-width="true"]').parent().attr('id') != 'portfolio-extra' && $('.nectar-slider-wrap[data-full-width="true"]').parents('#post-area:not(".span_12")').length == 0) {
            $('.nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .nectar-slider-wrap').css('left', -(($windowWidth - $smoothSrollWidth) / 2 - $('.main-content').width() / 2)) + 'px';
            $('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css('width', $windowWidth);
        } else if ($('.nectar-slider-wrap[data-full-width="true"]').parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length != 0) {
            $('.nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .nectar-slider-wrap').css('left', -(($windowWidth - $smoothSrollWidth) / 2 - $('.main-content').width() / 2)) + 'px';
            $('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css('width', $windowWidth);
        } else {
            var $container = ($('body > #boxed').length == 0) ? '#post-area' : '.container-wrap';
            if ($($container).width() == '0' && $('body > #boxed').length > 0) $container = '#boxed';
            $('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css('width', $($container).width());
        }
        $('.nectar-slider-wrap').show();
        $('.swiper-container, .swiper-slide').css('background-color', '#000');
        $('.video-texture').css('opacity', '1');
        $('.nectar-slider-wrap').each(function(i) {
            var $arrows = $(this).find('.swiper-container').attr('data-arrows');
            var $bullets = $(this).find('.swiper-container').attr('data-bullets');
            var $swipe = $(this).find('.swiper-container').attr('data-desktop-swipe');
            var $loop = $(this).find('.swiper-container').attr('data-loop');
            if ($swipe == 'true' && $('#' + $(this).attr('id') + ' .swiper-wrapper > div').length > 1 && $(this).attr('data-overall_style') != 'directional') { var $grab = 1; var $desktopSwipe = 1; } else { var $grab = 0; var $desktopSwipe = 0; }
            if ($('body').hasClass('mobile') && $(this).attr('data-overall_style') != 'directional') $desktopSwipe = 1;
            if ($bullets == 'true' && $(this).find('.swiper-wrapper > div').length > 1 && $(this).attr('data-overall_style') != 'directional') { $bullets = '#' + $(this).attr('id') + ' .slider-pagination'; } else { $bullets = null; }
            $useLoop = ($loop == 'true' && $(this).find('.swiper-wrapper > div').length > 1 && !$('html').hasClass('no-video') || $(this).attr('data-overall_style') == 'directional' && $(this).find('.swiper-wrapper > div').length > 1 && !$('html').hasClass('no-video')) ? true : false;
            if ($useLoop == false) $(this).find('.swiper-container').attr('data-loop', 'false');
            if ($(this).attr('data-transition') == 'fade' && $(this).attr('data-overall_style') != 'directional' && $(this).attr('data-button-styling') != 'btn_with_preview') {
                var progressVar = true;
                var touchRatio = 1.3;
                $sliderOptions = {
                    loop: $useLoop,
                    grabCursor: $grab,
                    touchRatio: touchRatio,
                    speed: 900,
                    pagination: $bullets,
                    simulateTouch: $desktopSwipe,
                    onSlideChangeEnd: captionTransition,
                    onTouchEnd: captionTransition,
                    onSlideChangeStart: onChangeStart,
                    onTouchMove: clearAutoplay,
                    onFirstInit: nectarInit,
                    progress: progressVar,
                    onProgressChange: function(swiper) {
                        if ($(swiper.container).parents('.nectar-slider-wrap').hasClass('loaded')) {
                            for (var i = 0; i < swiper.slides.length; i++) {
                                var slide = swiper.slides[i];
                                var progress = slide.progress;
                                var translate = progress * swiper.width;
                                var opacity = 1 - Math.min(Math.abs(progress), 1);
                                slide.style.opacity = opacity;
                                swiper.setTransform(slide, 'translate3d(' + translate + 'px,0,0)');
                            }
                        }
                    },
                    onTouchStart: function(swiper) { for (var i = 0; i < swiper.slides.length; i++) { swiper.setTransition(swiper.slides[i], 0); } },
                    onSetWrapperTransition: function(swiper, speed) { for (var i = 0; i < swiper.slides.length; i++) { swiper.setTransition(swiper.slides[i], speed); } }
                }
            } else {
                var touchRatio = 0.6;
                var css3Trans = ($('#' + $(this).attr('id') + '.nectar-slider-wrap[data-overall_style="directional"]').length == 1) ? false : true;
                $sliderOptions = { loop: $useLoop, grabCursor: $grab, touchRatio: touchRatio, speed: 550, useCSS3Transforms: css3Trans, pagination: $bullets, simulateTouch: $desktopSwipe, onSlideChangeEnd: captionTransition, onSlideChangeStart: onChangeStart, onTouchMove: clearAutoplay, onFirstInit: nectarInit }
            }
            $nectarSliders[i] = new Swiper('#' + $(this).attr('id') + ' .swiper-container', $sliderOptions);
            $nectarSliders[i].swipeReset();
            if (navigator.userAgent.indexOf('Chrome') > 0 && !/Edge\/12./i.test(navigator.userAgent) && !/Edge\/\d./i.test(navigator.userAgent)) {
                if (jQuery(this).find('.swiper-slide:nth-child(2) video source[type="video/webm"]').length > 0 && jQuery(this).find('.swiper-container').attr('data-loop') == 'true') {
                    var webmSource = jQuery(this).find('.swiper-slide:nth-child(2) video source[type="video/webm"]').attr('src') + "?id=" + Math.ceil(Math.random() * 10000);
                    var firstVideo = jQuery(this).find('.swiper-slide:nth-child(2) video').get(0);
                    firstVideo.src = webmSource;
                    firstVideo.load();
                    var webmSource2 = jQuery(this).find('.swiper-slide:last-child video source[type="video/webm"]').attr('src') + "?id=" + Math.ceil(Math.random() * 10000);
                    var lastVideo = jQuery(this).find('.swiper-slide:last-child video').get(0);
                    lastVideo.src = webmSource2;
                    lastVideo.load();
                }
                if (jQuery(this).find('.swiper-slide:eq(-2) video source[type="video/webm"]').length > 0 && jQuery(this).find('.swiper-container').attr('data-loop') == 'true') {
                    var webmSource = jQuery(this).find('.swiper-slide:eq(-2) video source[type="video/webm"]').attr('src') + "?id=" + Math.ceil(Math.random() * 10000);
                    var firstVideo = jQuery(this).find('.swiper-slide:eq(-2) video').get(0);
                    firstVideo.src = webmSource;
                    firstVideo.load();
                    var webmSource2 = jQuery(this).find('.swiper-slide:nth-child(1) video source[type="video/webm"]').attr('src') + "?id=" + Math.ceil(Math.random() * 10000);
                    var lastVideo = jQuery(this).find('.swiper-slide:nth-child(1) video').get(0);
                    lastVideo.src = webmSource2;
                    lastVideo.load();
                }
            }
            if ($arrows == 'true' && $('#' + $(this).attr('id') + ' .swiper-wrapper > div').length > 1 && $('#' + $(this).attr('id') + '.nectar-slider-wrap[data-button-styling="btn_with_preview"]').length == 0 && $('#' + $(this).attr('id') + '.nectar-slider-wrap[data-overall_style="directional"]').length == 0) {
                $('.slide-count i').transition({ scale: 0.5, opacity: 0 });
                $('body').on('mouseenter', '.nectar-slider-wrap[data-button-styling="btn_with_count"][data-overall_style="classic"]  .swiper-container .slider-prev, .nectar-slider-wrap[data-button-styling="btn_with_count"] .swiper-container .slider-next', function() {
                    $(this).find('.slide-count i').clearQueue().stop(true, true).delay(110).transition({ scale: 1, opacity: 1 }, 200);
                    $(this).stop(true, true).animate({ 'width': '100px' }, 300, 'easeOutCubic');
                    $(this).find('.slide-count span').clearQueue().stop().delay(100).animate({ 'opacity': '1' }, 225, 'easeOutCubic');
                });
                $('body').on('mouseleave', '.nectar-slider-wrap[data-button-styling="btn_with_count"][data-overall_style="classic"] .swiper-container .slider-prev, .nectar-slider-wrap[data-button-styling="btn_with_count"] .swiper-container .slider-next', function() {
                    $('.slide-count i').stop(true, true).transition({ scale: 0, opacity: 0 }, 200);
                    $(this).stop().delay(150).animate({ 'width': '50px' }, 300, 'easeOutCubic');
                    $(this).find('.slide-count span').stop(true, true).animate({ 'opacity': '0' }, 200, 'easeOutCubic');
                });
                var $slideCount = ($(this).find('.swiper-container').attr('data-loop') != 'true') ? $('#' + $(this).attr('id') + ' .swiper-wrapper > div').length : $('#' + $(this).attr('id') + ' .swiper-wrapper > div').length - 2;
                if ($('html').hasClass('no-video')) $slideCount = $('#' + $(this).attr('id') + ' .swiper-wrapper > div').length;
                $('#' + $(this).attr('id') + ' .slider-prev .slide-count .slide-total').html($slideCount);
                $('#' + $(this).attr('id') + ' .slider-next .slide-count .slide-total').html($slideCount);

                function prevArrowAnimation(e) {
                    if ($(this).hasClass('inactive')) return false;
                    var $that = $(this);
                    if ($(this).parents('.swiper-container').attr('data-loop') != 'true') {
                        if ($(this).parents('.swiper-container').find('.swiper-slide-active').index() + 1 == 1 && !$('html').hasClass('no-video')) {
                            var $timeout;
                            clearTimeout($timeout);
                            $timeout = setTimeout(function() { $that.removeClass('inactive'); }, 700);
                            if ($(this).parents('.nectar-slider-wrap ').attr('data-transition') != 'fade') {
                                var $that = $(this);
                                $(this).parents('.swiper-container').animate({ 'left': 25 + 'px' }, 250, function() { $that.parents('.swiper-container').stop().animate({ 'left': 0 + 'px' }, 250); });
                            }
                            $(this).addClass('inactive');
                        }
                    }
                    e.preventDefault();
                    $nectarSliders[i].swipePrev();
                    if ($(this).parents('.nectar-slider-wrap ').attr('data-transition') == 'fade') {
                        var $timeout;
                        clearTimeout($timeout);
                        $timeout = setTimeout(function() { $that.removeClass('inactive'); }, 800);
                        $(this).addClass('inactive');
                    }
                }
                $('body').off('click', '#' + $(this).attr('id') + ' .slider-prev', prevArrowAnimation);
                $('body').on('click', '#' + $(this).attr('id') + ' .slider-prev', prevArrowAnimation);

                function nextArrowAnimation(e) {
                    if ($(this).hasClass('inactive')) return false;
                    var $that = $(this);
                    var $slideNum = $(this).parents('.swiper-container').find('.swiper-wrapper > div').length;
                    if ($(this).parents('.swiper-container').attr('data-loop') != 'true') {
                        if ($(this).parents('.swiper-container').find('.swiper-slide-active').index() + 1 == $slideNum && !$('html').hasClass('no-video')) {
                            var $timeout;
                            clearTimeout($timeout);
                            $timeout = setTimeout(function() { $that.removeClass('inactive'); }, 700);
                            if ($(this).parents('.nectar-slider-wrap ').attr('data-transition') != 'fade') {
                                var $that = $(this);
                                $(this).parents('.swiper-container').animate({ 'left': -25 + 'px' }, 250, function() { $that.parents('.swiper-container').stop().animate({ 'left': 0 + 'px' }, 250); });
                            }
                            $(this).addClass('inactive');
                        }
                    }
                    e.preventDefault();
                    $nectarSliders[i].swipeNext();
                    if ($(this).parents('.nectar-slider-wrap ').attr('data-transition') == 'fade') {
                        var $timeout;
                        clearTimeout($timeout);
                        $timeout = setTimeout(function() { $that.removeClass('inactive'); }, 800);
                        $(this).addClass('inactive');
                    }
                }
                $('body').off('click', '#' + $(this).attr('id') + ' .slider-next', nextArrowAnimation);
                $('body').on('click', '#' + $(this).attr('id') + ' .slider-next', nextArrowAnimation);
            } else if ($arrows == 'true' && $('#' + $(this).attr('id') + ' .swiper-wrapper > div').length > 1 && $('#' + $(this).attr('id') + '.nectar-slider-wrap[data-button-styling="btn_with_preview"]').length == 1 && $('#' + $(this).attr('id') + '.nectar-slider-wrap[data-overall_style="directional"]').length == 0) {
                function prevArrowAnimationWithPreview(e) {
                    if ($(this).hasClass('inactive')) return false;
                    var $that = $(this);
                    var $timeout;
                    clearTimeout($timeout);
                    $timeout = setTimeout(function() { $that.removeClass('inactive'); }, 1000);
                    var $timeout2;
                    clearTimeout($timeout2);
                    $timeout2 = setTimeout(function() { $that.removeClass('stophover'); }, 500);
                    $(this).addClass('inactive').addClass('stophover');
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').prev('.swiper-slide').removeClass('prev-high-z-index');
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().removeClass('prev-move');
                    e.preventDefault();
                    $nectarSliders[i].swipePrev();
                }

                function nextArrowAnimationWithPreview(e) {
                    if ($(this).hasClass('inactive')) return false;
                    var $that = $(this);
                    var $timeout;
                    clearTimeout($timeout);
                    $timeout = setTimeout(function() { $that.removeClass('inactive'); }, 1000);
                    var $timeout2;
                    clearTimeout($timeout2);
                    $timeout2 = setTimeout(function() { $that.removeClass('stophover'); }, 500);
                    $(this).addClass('inactive').addClass('stophover');
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').next('.swiper-slide').removeClass('high-z-index');
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().removeClass('next-move');
                    e.preventDefault();
                    $nectarSliders[i].swipeNext();
                }

                function darkSlideNextMouseOver(currentSlider, activeIndex) {
                    var $indexAdd = ($(currentSlider).find('.swiper-container').attr('data-loop') == 'true') ? 2 : 2;
                    if ($(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex + 1) + ')').attr('data-color-scheme') == 'dark') {
                        if ($(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex + $indexAdd) + ')').attr('data-color-scheme') == 'dark') { $(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex + $indexAdd) + ') .video-texture').addClass('half-light-overlay').addClass('no-trans'); } else { $(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex + $indexAdd) + ') .video-texture').addClass('light-overlay').addClass('no-trans'); }
                    } else { if ($(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex + $indexAdd) + ')').attr('data-color-scheme') == 'light') { $(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex + $indexAdd) + ') .video-texture').addClass('half-dark-overlay').addClass('no-trans'); } else { $(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex + $indexAdd) + ') .video-texture').addClass('dark-overlay').addClass('no-trans'); } }
                }

                function darkSlidePrevMouseOver(currentSlider, activeIndex) { var $indexAdd = ($(currentSlider).find('.swiper-container').attr('data-loop') == 'true') ? 0 : 0; if ($(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex + 1) + ')').attr('data-color-scheme') == 'dark') { if ($(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex - $indexAdd) + ')').attr('data-color-scheme') == 'dark') { $(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex - $indexAdd) + ') .video-texture').addClass('half-light-overlay').addClass('no-trans'); } else { $(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex - $indexAdd) + ') .video-texture').addClass('light-overlay').addClass('no-trans'); } } else { if ($(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex - $indexAdd) + ')').attr('data-color-scheme') == 'light') { $(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex - $indexAdd) + ') .video-texture').addClass('half-dark-overlay').addClass('no-trans'); } else { $(currentSlider).find('.swiper-slide:nth-child(' + (activeIndex - $indexAdd) + ') .video-texture').addClass('dark-overlay').addClass('no-trans'); } } }
                $('body').off('click', '#' + $(this).attr('id') + ' .slider-prev', prevArrowAnimationWithPreview);
                $('body').on('click', '#' + $(this).attr('id') + ' .slider-prev', prevArrowAnimationWithPreview);
                $('body').off('click', '#' + $(this).attr('id') + ' .slider-next', nextArrowAnimationWithPreview);
                $('body').on('click', '#' + $(this).attr('id') + ' .slider-next', nextArrowAnimationWithPreview);
                $('body').on('mouseenter', '.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-next:not(.stophover)', function() {
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').next('.swiper-slide').addClass('high-z-index');
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().addClass('next-move');
                    $(this).stop().addClass('next-arrow-move');
                    darkSlideNextMouseOver($(this).parents('.nectar-slider-wrap'), $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').index());
                });
                $('body').on('mouseleave', '.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-next', function() {
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').next('.swiper-slide').removeClass('high-z-index');
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().removeClass('next-move');
                    $(this).stop().removeClass('next-arrow-move');
                });
                $('body').on('mouseenter', '.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-prev:not(.stophover)', function() {
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').prev('.swiper-slide').addClass('prev-high-z-index');
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().addClass('prev-move');
                    $(this).stop().addClass('prev-arrow-move');
                    darkSlidePrevMouseOver($(this).parents('.nectar-slider-wrap'), $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').index());
                });
                $('body').on('mouseleave', '.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-prev', function() {
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').prev('.swiper-slide').removeClass('prev-high-z-index');
                    $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().removeClass('prev-move');
                    $(this).stop().removeClass('prev-arrow-move');
                });
            } else if ($('#' + $(this).attr('id') + '.nectar-slider-wrap[data-overall_style="directional"]').length == 1) {
                function prevArrowAnimationDirectional(e) {
                    if ($(this).hasClass('inactive') || $(this).parents('.swiper-container').find('.slider-next').hasClass('inactive')) return false;
                    var $that = $(this);
                    if ($('#header-outer.transparent').length > 0) {
                        $('#header-outer nav > ul.sf-menu > li > a, #header-outer nav > ul.buttons > li#search-btn a, #header-outer nav > ul.buttons > li.slide-out-widget-area-toggle a > span, #header-outer .cart-icon-wrap, header#top #logo').each(function() {
                            var $extraWidth = ($(this).find('.original .sf-sub-indicator').length > 0) ? 14 : 1;
                            $(this).find('.original').attr('data-w', $(this).find('span.original').width() + $extraWidth);
                        });
                    }
                    var $timeout;
                    clearTimeout($timeout);
                    $timeout = setTimeout(function() {
                        $that.parents('.swiper-container').removeClass('directional-trans-prev');
                        $that.parents('.swiper-container').find('.swiper-wrapper').transition({ 'x': 0, 'left': parseInt($that.parents('.swiper-container').find('.swiper-wrapper').css('left')) + $that.parents('.swiper-container').width() }, 0);
                        setTimeout(function() {
                            $nectarSliders[i].updateActiveSlide();
                            $nectarSliders[i].fixLoop();
                            $that.removeClass('inactive');
                        }, 50);
                        resetContentPos();
                    }, 1100);
                    var $timeout2;
                    clearTimeout($timeout2);
                    $timeout2 = setTimeout(function() {
                        if ($that.parents('.swiper-container').attr('data-loop') != 'true') { if ($that.parents('.swiper-container').find('.swiper-slide-active').index() + 1 != 1) { onChangeStart($nectarSliders[i]); } } else { onChangeStart($nectarSliders[i]); }
                    }, 100);
                    if ($(this).parents('.swiper-container').attr('data-loop') != 'true') { $(this).parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active .content').children().each(function(i) { $(this).stop().delay(i * 50).transition({ 'x': $that.parents('.swiper-container').width() / 2.5 + "px" }, 950, 'easeInOutQuart'); }); }
                    $(this).addClass('inactive');
                    $(this).parents('.swiper-container').find('.swiper-wrapper').transition({ 'x': $(this).parents('.swiper-container').width() + "px" }, 1100, 'easeInOutQuart');
                    if ($(this).parents('.swiper-container').attr('data-loop') == 'true') { $(this).parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active .content > *').each(function(i) { $(this).stop().delay(i * 50).transition({ 'x': $that.parents('.swiper-container').width() / 2.5 + "px" }, 950, 'easeInOutQuart'); }); }
                    $that.parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active').prev('.swiper-slide').find('.content > *').transition({ 'x': '-' + $that.parents('.swiper-container').width() + "px" }, 0);
                    setTimeout(function() { $that.parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active').prev('.swiper-slide').find('.content > *').each(function(i) { $(this).stop().delay(i * 50).transition({ 'x': "0px" }, 750, 'easeInOutQuart'); }); }, 200);
                    $that.parents('.swiper-container').addClass('directional-trans-prev');
                    e.preventDefault();
                }

                function nextArrowAnimationDirectional(e) {
                    if ($(this).hasClass('inactive') || $(this).parents('.swiper-container').find('.slider-prev').hasClass('inactive')) return false;
                    var $that = $(this);
                    if ($('#header-outer.transparent').length > 0) {
                        $('#header-outer nav > ul.sf-menu > li > a, #header-outer nav > ul.buttons > li#search-btn a, #header-outer nav > ul.buttons > li.slide-out-widget-area-toggle a > span, #header-outer .cart-icon-wrap, header#top #logo').each(function() {
                            var $extraWidth = ($(this).find('.original .sf-sub-indicator').length > 0) ? 14 : 1;
                            $(this).find('.original').attr('data-w', $(this).find('span.original').width() + $extraWidth);
                        });
                    }
                    var $timeout;
                    clearTimeout($timeout);
                    $timeout = setTimeout(function() {
                        $that.parents('.swiper-container').removeClass('directional-trans-next');
                        $that.parents('.swiper-container').find('.swiper-wrapper').transition({ 'x': 0, 'left': parseInt($that.parents('.swiper-container').find('.swiper-wrapper').css('left')) - $that.parents('.swiper-container').width() }, 0);
                        setTimeout(function() {
                            $nectarSliders[i].updateActiveSlide();
                            $nectarSliders[i].fixLoop();
                            $that.removeClass('inactive');
                        }, 50);
                        resetContentPos();
                    }, 1100);
                    var $timeout2;
                    clearTimeout($timeout2);
                    $timeout2 = setTimeout(function() {
                        if ($that.parents('.swiper-container').attr('data-loop') != 'true') { if ($that.parents('.swiper-container').find('.swiper-slide-active').index() + 1 != $slideNum) { onChangeStart($nectarSliders[i]); } } else { onChangeStart($nectarSliders[i]); }
                    }, 100);
                    var $slideNum = $(this).parents('.swiper-container').find('.swiper-wrapper > div').length;
                    if ($(this).parents('.swiper-container').attr('data-loop') != 'true') {
                        if ($(this).parents('.swiper-container').find('.swiper-slide-active').index() + 1 == $slideNum && !$('html').hasClass('no-video')) {
                            if ($(this).parents('.nectar-slider-wrap ').attr('data-transition') != 'fade') {
                                $(this).parents('.swiper-container').find('.swiper-wrapper').stop(true, false).css('transition', 'none').animate({ 'left': parseInt($(this).parents('.swiper-container').find('.swiper-wrapper').css('left')) - 20 }, 200, function() {
                                    $(this).parents('.swiper-container').find('.swiper-wrapper').stop(true, false).css('transition', 'left,top');
                                    $nectarSliders[i].swipeReset();
                                });
                            }
                        } else { $(this).parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active .content > *').each(function(i) { $(this).stop().delay(i * 50).transition({ 'x': '-' + $that.parents('.swiper-container').width() / 2.5 + "px" }, 950, 'easeInOutQuart'); }); }
                    }
                    $(this).addClass('inactive');
                    $(this).parents('.swiper-container').find('.swiper-wrapper').transition({ 'x': -$(this).parents('.swiper-container').width() + "px" }, 1100, 'easeInOutQuart');
                    if ($(this).parents('.swiper-container').attr('data-loop') == 'true') { $(this).parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active .content > *').each(function(i) { $(this).stop().delay(i * 50).transition({ 'x': '-' + $that.parents('.swiper-container').width() / 2.5 + "px" }, 950, 'easeInOutQuart'); }); }
                    $that.parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active').next('.swiper-slide').find('.content > *').transition({ 'x': $that.parents('.swiper-container').width() + "px" }, 0);
                    setTimeout(function() { $that.parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active').next('.swiper-slide').find('.content > *').each(function(i) { $(this).stop().delay(i * 50).transition({ 'x': "0px" }, 750, 'easeInOutQuart'); }); }, 200);
                    $that.parents('.swiper-container').addClass('directional-trans-next');
                    e.preventDefault();
                }
                $('body').off('click', '#' + $(this).attr('id') + ' .slider-prev', prevArrowAnimationDirectional);
                $('body').on('click', '#' + $(this).attr('id') + ' .slider-prev', prevArrowAnimationDirectional);
                $('body').off('click', '#' + $(this).attr('id') + ' .slider-next', nextArrowAnimationDirectional);
                $('body').on('click', '#' + $(this).attr('id') + ' .slider-next', nextArrowAnimationDirectional);

                function resetContentPos() { $($nectarSliders[i].container).find('.swiper-slide .content > *').transition({ 'x': '0px' }, 0); }
            }
            if ($('#' + $(this).attr('id') + ' .swiper-container').attr('data-bullet_style') == 'scale') { $('#' + $(this).attr('id') + ' .slider-pagination .swiper-pagination-switch').append('<i />'); }
            if ($bullets != null && $('#' + $(this).attr('id') + ' .swiper-wrapper > div').length > 1) { $('#' + $(this).attr('id') + ' .slider-pagination .swiper-pagination-switch').click(function() { $nectarSliders[i].swipeTo($(this).index()); }); }
        });
    }
    nectarSliderMainInit();

    function darkFirstSlide(slider) { if (slider.parents('.parallax_slider_outer').length > 0 && slider.find('.swiper-slide-active[data-color-scheme="dark"]').length > 0) { $('#header-outer').addClass('dark-slide'); } else if (slider.parents('.parallax_slider_outer').length > 0 || slider.parents('.first-section').length > 0) { $('#header-outer').removeClass('dark-slide'); } }

    function directionalNavColorInit(slider) {
        if (slider.attr('data-overall_style') == 'directional' && slider.find('.swiper-slide[data-color-scheme="dark"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0) {
            if (slider.parents('.parallax_slider_outer').length > 0 || slider.parents('.first-section').length > 0) {
                $('#header-outer').addClass('directional-nav-effect');
                $selector = ($('#header-outer[data-permanent-transparent="1"]').length == 0) ? '#header-outer' : '#header-outer .midnightHeader.nectar-slider';
                $($selector + ' nav > ul.sf-menu > li > a, ' + $selector + ' nav > ul.buttons > li.slide-out-widget-area-toggle a span, ' + $selector + ' nav > ul.buttons > li#search-btn a').each(function() {
                    var $text = $(this).html();
                    $(this).html(' ');
                    $(this).append('<span class="dark"><span>' + $text + '</span></span>');
                    $(this).append('<span class="light"><span>' + $text + '</span></span>');
                    $(this).append('<span class="original"><span>' + $text + '</span></span>');
                });
                $($selector + ' .cart-outer .cart-icon-wrap').each(function() {
                    $(this).find('> i').remove();
                    $(this).append('<span class="dark"><span><i class="icon-salient-cart"></i></span></span>');
                    $(this).append('<span class="light"><span><i class="icon-salient-cart"></i></span></span>');
                    $(this).append('<span class="original"><span><i class="icon-salient-cart"></i></span></span>');
                });
                setTimeout(function() {
                    $($selector + ' .cart-outer .cart-icon-wrap').each(function() {
                        $(this).find('> i, > span').remove();
                        $(this).append('<span class="dark"><span><i class="icon-salient-cart"></i></span></span>');
                        $(this).append('<span class="light"><span><i class="icon-salient-cart"></i></span></span>');
                        $(this).append('<span class="original"><span><i class="icon-salient-cart"></i></span></span>');
                    });
                }, 1000);
                if ($($selector + ' header#top #logo img').length > 0) {
                    $($selector + ' header#top #logo').append('<span class="dark"><span></span></span>');
                    $($selector + ' header#top #logo').append('<span class="light"><span></span></span>');
                    $($selector + ' header#top #logo').append('<span class="original"><span></span></span>');
                    $($selector + ' header#top #logo img:first').clone().appendTo($($selector + ' header#top #logo .original span'));
                    if ($($selector + ' header#top #logo img.starting-logo').length > 0) $($selector + ' header#top #logo img.starting-logo:not(.dark-version)').clone().appendTo($($selector + ' header#top #logo .light span'));
                    if ($($selector + ' header#top #logo img.starting-logo.retina.logo').length > 0) $($selector + ' header#top #logo img.starting-logo.retina-logo:not(.dark-version)').clone().appendTo($($selector + ' header#top #logo .light span'));
                    if ($($selector + ' header#top #logo img.starting-logo.dark-version').length > 0) $($selector + ' header#top #logo img.starting-logo.dark-version').clone().appendTo($($selector + ' header#top #logo .dark span'));
                    if ($($selector + ' header#top #logo img.starting-logo.dark-version.retina.logo').length > 0) $($selector + ' header#top #logo img.starting-logo.dark-version.retina-logo').clone().appendTo($($selector + ' header#top #logo .dark span'));
                    $($selector + ' header#top #logo > img').remove();
                } else {
                    var $logoText = $('header#top #logo').text();
                    $($selector + ' header#top #logo').html(' ');
                    $($selector + ' header#top #logo').append('<span class="dark"><span>' + $logoText + '</span></span>');
                    $($selector + ' header#top #logo').append('<span class="light"><span>' + $logoText + '</span></span>');
                    $($selector + ' header#top #logo').append('<span class="original"><span>' + $logoText + '</span></span>');
                }
                if ($('.retina-logo:visible').length > 0) $($selector + ' header#top #logo').css('width', $('.retina-logo').width());
                $($selector + ' nav > ul.sf-menu > li > a, ' + $selector + ' nav > ul.buttons > li#search-btn a, ' + $selector + ' nav > ul.buttons > li.slide-out-widget-area-toggle a > span, ' + $selector + ' .cart-icon-wrap, ' + $selector + ' header#top #logo').each(function() {
                    var $extraWidth = ($(this).find('.original .sf-sub-indicator').length > 0) ? 14 : 1;
                    $(this).find('.original').attr('data-w', $(this).find('span.original').width() + $extraWidth);
                });
            }
        }
    }
    var $animating = false;
    var $sliderHeights = [];
    var $existingSliders = [];

    function initialSlideLoad() {
        $animating = false;
        $sliderHeights = [];
        $existingSliders = [];
        $('.swiper-wrapper').each(function() { if ($(this).find('.swiper-slide:nth-child(2) video').length > 0) $(this).find('.swiper-slide:nth-child(2)').addClass('first_video_slide'); });
        $('.nectar-slider-wrap').each(function(i) {
            var $sliderWrapCount = $('.nectar-slider-wrap').length;
            var $that = $(this);
            if ($(this).find('.swiper-slide-active video').length > 0) {
                if (!$('html').hasClass('no-video') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
                    var videoReady = setInterval(function() {
                        if ($that.find('.swiper-slide-active:first video').get(0).readyState > 3) {
                            showSliderControls();
                            resizeToCover();
                            slideContentPos();
                            sliderLoadIn($that, i);
                            var $timeout = 0;
                            if ($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0 && $that.parents('.parallax_slider_outer').length > 0 || $('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0 && $that.hasClass('first-nectar-slider')) { $timeout = 450; }
                            setTimeout(function() { captionTransition($nectarSliders[i]); }, $timeout);
                            darkFirstSlide($that);
                            clearInterval(videoReady);
                            $that.addClass('loaded');
                            if ($that.parents('.parallax_slider_outer').length > 0 || $that.hasClass('first-nectar-slider')) {
                                $('#ajax-loading-screen').addClass('loaded');
                                setTimeout(function() { $('#ajax-loading-screen').addClass('hidden'); }, 1000);
                            }
                        }
                    }, 60);
                } else {
                    showSliderControls();
                    resizeToCover();
                    slideContentPos();
                    sliderLoadIn($that, i);
                    captionTransition($nectarSliders[i]);
                    darkFirstSlide($that);
                }
            } else {
                var $firstBg = $(this).find('.swiper-slide-active .image-bg').attr('style');
                var pattern = /url\(["']?([^'")]+)['"]?\)/;
                var match = pattern.exec($firstBg);
                if (match) {
                    var slideImg = new Image();
                    slideImg.src = match[1];
                    $(slideImg).load(function() {
                        showSliderControls();
                        resizeToCover();
                        slideContentPos();
                        sliderLoadIn($that, i);
                        var $timeout = 0;
                        if ($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0 && $that.parents('.parallax_slider_outer').length > 0 || $('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0 && $that.hasClass('first-nectar-slider')) { $timeout = 450; }
                        setTimeout(function() { captionTransition($nectarSliders[i]); }, $timeout);
                        darkFirstSlide($that);
                        $that.addClass('loaded');
                        if ($that.parents('.parallax_slider_outer').length > 0 || $that.hasClass('first-nectar-slider')) {
                            $('#ajax-loading-screen').addClass('loaded');
                            setTimeout(function() { $('#ajax-loading-screen').addClass('hidden'); }, 1000);
                        }
                    });
                }
            }
            if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
                captionTransition($nectarSliders[i]);
                showSliderControls();
                resizeToCover();
                slideContentPos();
                darkFirstSlide($that);
                setTimeout(function() {
                    resizeToCover();
                    slideContentPos();
                }, 400);
                $('.nectar-slider-wrap').find('.nectar-slider-loading').fadeOut(800, 'easeInOutExpo');
                $('body #header-outer[data-transparent-header="true"] .ns-loading-cover').fadeOut(800, 'easeInOutExpo', function() {
                    $(this).remove();
                    $('.nectar-slider-wrap.first-section .swiper-container .swiper-wrapper .swiper-slide').removeClass('not-loaded');
                });
                $('.nectar-slider-wrap .mobile-video-image').show();
                $('.nectar-slider-wrap .video-wrap').remove();
                $(this).addClass('loaded');
                if ($that.parents('.parallax_slider_outer').length > 0 || $that.hasClass('first-nectar-slider')) {
                    $('#ajax-loading-screen').addClass('loaded');
                    setTimeout(function() { $('#ajax-loading-screen').addClass('hidden'); }, 1000);
                }
                autorotateInit($(this), i);
            }
            if ($('header#top #logo img').length > 0) {
                var logoImg = new Image();
                logoImg.src = $('header#top #logo img:first').attr('src');
                $(logoImg).load(function() {
                    directionalNavColorInit($that);
                    if ($that.attr('data-overall_style') == 'directional') {
                        $that.find('.swiper-container').addClass('directional-trans-current');
                        onChangeStart($nectarSliders[i]);
                    }
                });
            } else {
                directionalNavColorInit($that);
                if ($that.attr('data-overall_style') == 'directional') {
                    $that.find('.swiper-container').addClass('directional-trans-current');
                    onChangeStart($nectarSliders[i]);
                }
            }
        });
        $('.swiper-container').each(function(i) {
            $sliderHeights[i] = parseInt($(this).attr('data-height'));
            $existingSliders[i] = $(this).parent().attr('id');
        });
    }

    function nectarInit() {
        if (doneVideoInit == true) return;
        if ($().prettyPhoto) prettyPhotoInit();
        $('.swiper-slide iframe[data-aspectRatio]').each(function() {
            var newWidth = $(this).parent().width();
            var $el = $(this);
            if ($(this).parents('.swiper-slide').length > 0) { if ($(this).is(':visible')) $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio')); } else { $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio')); }
        });
        doneVideoInit = true;
    }
    var autoplay = [];
    var sliderAutoplayCount = -1;
    initialSlideLoad();
    var headerPadding = parseInt($('#header-outer').attr('data-padding'));
    var shrinkNum = 8;
    if ($('#header-outer[data-shrink-num]').length > 0) shrinkNum = $('#header-outer').attr('data-shrink-num');
    dynamicHeightSliders();

    function dynamicHeightSliders() {
        var $adminBarHeight = ($('#wpadminbar').length > 0) ? 28 : 0;
        $('.nectar-slider-wrap').each(function() {
            var $heightCalc;
            var $minHeight = $('.swiper-container').attr('data-min-height');
            if ($(this).attr('data-fullscreen') == 'true' && $(this).attr('data-full-width') == 'true' || $(this).attr('data-fullscreen') == 'true' && $(this).attr('data-full-width') == 'boxed-full-width') {
                if ($(this).parents('#nectar_fullscreen_rows').length == 0) {
                    if ($(this).hasClass('first-section') && $(this).index() == 0 || $(this).parents('.wpb_row').length > 0 && $(this).parents('.wpb_row').hasClass('first-section') && $(this).index() == 0 && $(this).parents('.parallax_slider_outer').length == 0) {
                        $heightCal = (($(window).height() - $(this).offset().top + 2) <= $minHeight) ? $minHeight : $(window).height() - $(this).offset().top + 2;
                        $(this).find('.swiper-container').attr('data-height', $heightCal);
                    } else if ($(this).parents('.parallax_slider_outer').length > 0 && $(this).parents('#full_width_portfolio').length == 0) {
                        $heightCal = (($(window).height() - $(this).parent().offset().top + 2) <= $minHeight) ? $minHeight : $(window).height() - $(this).parent().offset().top + 2;
                        $(this).find('.swiper-container').attr('data-height', $heightCal);
                    } else if ($(this).parents('#full_width_portfolio').length > 0 && $(this).attr('data-parallax') != 'true' && $(this).index() == 0) {
                        $heightCal = (($(window).height() - $(this).offset().top + 2) <= $minHeight) ? $minHeight : $(window).height() - $(this).offset().top + 2;
                        $(this).find('.swiper-container').attr('data-height', $heightCal);
                    } else if ($(this).parents('#full_width_portfolio').length > 0 && $(this).attr('data-parallax') == 'true') {
                        $heightCal = (($(window).height() - $(this).offset().top + 2) <= $minHeight) ? $minHeight : $(window).height() - $(this).offset().top + 2;
                        $(this).find('.swiper-container').attr('data-height', $heightCal);
                    } else {
                        $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(shrinkNum) + headerPadding * 2;
                        $headerSize = ($('#header-outer[data-permanent-transparent="false"]').length > 0) ? $('#header-space').height() - $resize - 3 : -3;
                        if ($('#nectar_fullscreen_rows').length > 0 || ($('body[data-header-format="left-header"]').length > 0 && window.innerWidth >= 1000)) $headerSize = $adminBarHeight;
                        $heightCal = ($(window).height() - $headerSize <= $minHeight) ? $minHeight : $(window).height() - $headerSize;
                        $(this).find('.swiper-container').attr('data-height', $heightCal);
                    }
                    if ($('#header-outer[data-remove-border="true"]').length == 0) {
                        if ($('body #header-outer[data-transparent-header="true"]').length > 0 && $('.first-section .nectar-slider-wrap[data-fullscreen="true"]').length > 0 && $('#page-header-bg').length == 0) {
                            $('.first-section .nectar-slider-loading').css({ 'background-image': $loading_bg_storage, 'background-position': 'center ' + ((($(window).height() / 2) + 15) - $('#header-space').height()) + 'px' });
                            $('.first-section .nectar-slider-wrap .nectar-slider-loading .loading-icon').css({ 'opacity': '1', 'height': $(window).height() - $('#header-space').height() + 'px' });
                        }
                    }
                }
            }
            if ($(this).attr('data-flexible-height') == 'true' && $(this).attr('data-fullscreen') != 'true') {
                if ($(this).parents('.wpb_row.full-width-content').length == 0 && $(this).attr('data-full-width') == 'false') { $(this).attr('data-flexible-height', 'false'); return false; }
                var $minHeight = $('.swiper-container').attr('data-min-height');
                var currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                var $windowWidth = $(window).width();
                var $definedHeight = $sliderHeights[currentKey];
                var dif = $(window).width() / 1600;
                if (window.innerWidth > 1000 && $('#boxed').length == 0) { $(this).find('.swiper-container').attr('data-height', Math.ceil($definedHeight * dif)); } else {
                    var $parentCol = ($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column') : $(this).parents('.col');
                    if ($parentCol.length == 0) $parentCol = $('.main-content');
                    if (!$parentCol.hasClass('vc_span12') && !$parentCol.hasClass('main-content') && !$parentCol.hasClass('span_12') && !$parentCol.hasClass('vc_col-sm-12')) { var $parentColWidth = sliderColumnDesktopWidth($parentCol); var $parentColRatio = 1100 / $parentColWidth; if ($definedHeight * dif <= $minHeight) { $(this).find('.swiper-container').attr('data-height', $minHeight); } else { $(this).find('.swiper-container').attr('data-height', Math.ceil($parentColRatio * $definedHeight * dif)); } } else if ($('#boxed').length > 0) {
                        var dif = $('#boxed').width() / 1600;
                        if (window.innerWidth > 1300) {
                            if ($('body[data-ext-responsive="true"]').length > 0) {
                                if ($(this).has('[data-full-width="boxed-full-width"]')) {
                                    ($('#boxed').width() < 1400) ? $(this).find('.swiper-container').attr('data-height', Math.ceil($definedHeight * dif)): $(this).find('.swiper-container').attr('data-height', $definedHeight * (1400 / 1600));
                                }
                            } else { if ($(this).has('[data-full-width="boxed-full-width"]')) $(this).find('.swiper-container').attr('data-height', Math.ceil($definedHeight * (1200 / 1600))); }
                        } else if (window.innerWidth <= 1300 && window.innerWidth >= 1000) { if ($('body[data-ext-responsive="true"]').length > 0) { $(this).find('.swiper-container').attr('data-height', Math.ceil($definedHeight * dif)); } else { if ($(this).has('[data-full-width="boxed-full-width"]')) $(this).find('.swiper-container').attr('data-height', Math.ceil($definedHeight * (980 / 1600))); } } else if (window.innerWidth < 1000 && window.innerWidth > 690) { var $heightCalc = ($definedHeight * (679 / 1600) <= $minHeight) ? $minHeight : $definedHeight * (679 / 1600); if ($(this).has('[data-full-width="boxed-full-width"]')) $(this).find('.swiper-container').attr('data-height', $minHeight); } else if (window.innerWidth <= 690 && window.innerWidth >= 470) { var $heightCalc = ($definedHeight * (410 / 1600) <= $minHeight) ? $minHeight : $definedHeight * (410 / 1600); if ($(this).has('[data-full-width="boxed-full-width"]')) $(this).find('.swiper-container').attr('data-height', $heightCalc); } else if (window.innerWidth < 470) { var $heightCalc = ($definedHeight * (318 / 1600) <= $minHeight) ? $minHeight : $definedHeight * (318 / 1600); if ($(this).has('[data-full-width="boxed-full-width"]')) $(this).find('.swiper-container').attr('data-height', $heightCalc); }
                    } else { if ($definedHeight * dif <= $minHeight) { $(this).find('.swiper-container').attr('data-height', $minHeight); } else { $(this).find('.swiper-container').attr('data-height', Math.ceil($definedHeight * dif)); } }
                }
                if ($('body #header-outer[data-transparent-header="true"]').length > 0 && $('.first-section .nectar-slider-wrap[data-flexible-height="true"]').length > 0) {
                    $('.first-section .nectar-slider-loading').css({ 'background-image': $loading_bg_storage, 'background-position': 'center ' + (((($definedHeight * dif) / 2) + 15) - $('#header-space').height()) + 'px' });
                    $('.first-section .nectar-slider-wrap .nectar-slider-loading .loading-icon').css({ 'opacity': '1', 'height': $definedHeight * dif - $('#header-space').height() + 'px' });
                }
            }
        });
    }
    if (window.innerWidth > 690) { $(window).on('resize.dynamicHeights', dynamicHeightSliders); } else {
        var $windowWidth = $(window).width(),
            $windowHeight = $(window).height();
        var $orientationChange = 0;
        window.addEventListener("orientationchange", function() { $orientationChange = 1; });
        $(window).resize(function() {
            if (($(window).width() != $windowWidth && $(window).height != $windowHeight) || $orientationChange == 1) {
                dynamicHeightSliders();
                $orientationChange = 0;
            }
        });
    }
    setTimeout(function() { dynamicHeightSliders(); }, 100);

    function sliderColumnDesktopWidth(parentCol) {
        var $parentColWidth = 1100;
        var $columnNumberParsed = $(parentCol).attr('class').match(/\d+/);
        if ($columnNumberParsed == '2') { $parentColWidth = 170 } else if ($columnNumberParsed == '3') { $parentColWidth = 260 } else if ($columnNumberParsed == '4') { $parentColWidth = 340 } else if ($columnNumberParsed == '6') { $parentColWidth = 530 } else if ($columnNumberParsed == '8') { $parentColWidth = 700 } else if ($columnNumberParsed == '9') { $parentColWidth = 805 } else if ($columnNumberParsed == '10') { $parentColWidth = 916.3 } else if ($columnNumberParsed == '12') { $parentColWidth = 1100 }
        return $parentColWidth;
    }
    sliderSize();
    $(window).resize(sliderSize);

    function sliderSize() {
        if (window.innerWidth < 1000 && window.innerWidth > 690) {
            $('.nectar-slider-wrap[data-full-width="true"]:not([data-fullscreen="true"],[data-flexible-height="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                $(this).find('.swiper-container').attr('data-height', $sliderHeights[currentKey] / 1.4)
            });
            $('.nectar-slider-wrap[data-full-width="false"]:not([data-flexible-height="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                var $currentSliderHeight = $sliderHeights[currentKey];
                var $parentCol = ($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column') : $(this).parents('.col');
                if ($(this).parents('#post-area').length > 0 && $(this).parents('.vc_span12').length > 0) $parentCol = $(this).parents('#post-area');
                if ($parentCol.length == 0) $parentCol = $('.main-content');
                var $parentColWidth = sliderColumnDesktopWidth($parentCol);
                var $aspectRatio = $currentSliderHeight / $parentColWidth;
                $(this).find('.swiper-container').attr('data-height', $aspectRatio * $parentCol.width());
            });
            $('.nectar-slider-wrap[data-full-width="boxed-full-width"]:not([data-flexible-height="true"]):not([data-fullscreen="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                $(this).find('.swiper-container').attr('data-height', $sliderHeights[currentKey] / 1.9)
            });
        } else if (window.innerWidth <= 690) {
            $('.nectar-slider-wrap[data-full-width="true"]:not([data-fullscreen="true"],[data-flexible-height="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                $(this).find('.swiper-container').attr('data-height', $sliderHeights[currentKey] / 2.7)
            });
            $('.nectar-slider-wrap[data-full-width="false"]:not([data-flexible-height="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                var $currentSliderHeight = $sliderHeights[currentKey];
                var $parentCol = ($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column') : $(this).parents('.col');
                if ($(this).parents('#post-area').length > 0 && $(this).parents('.vc_span12').length > 0) $parentCol = $(this).parents('#post-area');
                if ($parentCol.length == 0) $parentCol = $('.main-content');
                var $parentColWidth = sliderColumnDesktopWidth($parentCol);
                var $aspectRatio = $currentSliderHeight / $parentColWidth;
                $(this).find('.swiper-container').attr('data-height', $aspectRatio * $parentCol.width());
            });
            $('.nectar-slider-wrap[data-full-width="boxed-full-width"]:not([data-flexible-height="true"]):not([data-fullscreen="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                $(this).find('.swiper-container').attr('data-height', $sliderHeights[currentKey] / 2.9)
            });
        } else if (window.innerWidth < 1300 && window.innerWidth >= 1000) {
            $('.nectar-slider-wrap[data-full-width="true"]:not([data-fullscreen="true"],[data-flexible-height="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                $(this).find('.swiper-container').attr('data-height', $sliderHeights[currentKey] / 1.2)
            });
            $('.nectar-slider-wrap[data-full-width="false"]:not([data-flexible-height="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                var $currentSliderHeight = $sliderHeights[currentKey];
                var $parentCol = ($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column') : $(this).parents('.col');
                if ($(this).parents('#post-area').length > 0 && $(this).parents('.vc_span12').length > 0) $parentCol = $(this).parents('#post-area');
                if ($parentCol.length == 0) $parentCol = $('.main-content');
                var $parentColWidth = sliderColumnDesktopWidth($parentCol);
                var $aspectRatio = $currentSliderHeight / $parentColWidth;
                $(this).find('.swiper-container').attr('data-height', $aspectRatio * $parentCol.width());
            });
            $('.nectar-slider-wrap[data-full-width="boxed-full-width"]:not([data-flexible-height="true"]):not([data-fullscreen="true"])').each(function(i) {
                currentKey = $existingSliders.getKeyByValue($(this).attr('id'));
                $(this).find('.swiper-container').attr('data-height', $sliderHeights[currentKey] / 1.2)
            });
        } else {
            $('.nectar-slider-wrap[data-full-width="true"]:not([data-fullscreen="true"],[data-flexible-height="true"])').each(function(i) { currentKey = $existingSliders.getKeyByValue($(this).attr('id')); if ($(this).attr('data-flexible-height') != 'true') $(this).find('.swiper-container').attr('data-height', $sliderHeights[currentKey]) });
            $('.nectar-slider-wrap[data-full-width="false"], .nectar-slider-wrap[data-full-width="boxed-full-width"]:not([data-flexible-height="true"]):not([data-fullscreen="true"])').each(function(i) { currentKey = $existingSliders.getKeyByValue($(this).attr('id')); if ($(this).attr('data-flexible-height') != 'true') $(this).find('.swiper-container').attr('data-height', $sliderHeights[currentKey]) });
        }
    }
    $('.nectar-slider-wrap').each(function() {
        if ($(this).find('.swiper-wrapper .swiper-slide').length == 1) {
            $(this).find('.swiper-slide').addClass('no-transform');
            $(this).find('.swiper-wrapper').addClass('no-transform');
        }
    });
    var min_w = 1500;
    var vid_w_orig;
    var vid_h_orig;
    vid_w_orig = 1280;
    vid_h_orig = 720;
    var $headerHeight = $('header').height() - 1;

    function nsSliderContentResize(e) {
        resizeToCover();
        slideContentPos();
        for (var i = 0; i < $nectarSliders.length; i++) {
            if ($($nectarSliders[i].container).parent().attr('data-transition') && $($nectarSliders[i].container).parent().attr('data-transition') == 'fade') {
                for (var k = 0; k < $nectarSliders[i].slides.length; k++) { $nectarSliders[i].setTransition($nectarSliders[i].slides[k], 0); }
                $('.swiper-wrapper').stop(true, true).css('transition-duration', '0s');
                if ($('.nectar-slider-loading').css('display') == 'none') { $('.swiper-wrapper .swiper-slide.swiper-slide-active .content > *').css({ 'opacity': 1, 'padding-top': 0 }); }
            }
            $nectarSliders[i].reInit();
            $nectarSliders[i].resizeFix();
        }
    }
    $(window).on('resize.nsSliderContent', nsSliderContentResize);

    function resizeToCover() {
        $('.nectar-slider-wrap').each(function(i) {
            if ($(this).css('visibility') != 'hidden') {
                var $leftHeaderSize = ($('#header-outer[data-format="left-header"]').length > 0 && window.innerWidth >= 1000) ? parseInt($('#header-outer[data-format="left-header"]').width()) : 0;
                var $windowWidth = $(window).width() - $leftHeaderSize;
                if ($('body > #boxed').length == 0 && $('.nectar-slider-wrap[data-full-width="true"]').parent().attr('id') != 'portfolio-extra' && $(this).parents('#post-area:not(".span_12")').length == 0) {
                    $('.nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .nectar-slider-wrap').css('left', -(($windowWidth - $smoothSrollWidth) / 2 - $('.main-content').width() / 2)) + 'px';
                    $('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css('width', $windowWidth);
                } else if ($('.nectar-slider-wrap[data-full-width="true"]').parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length != 0) {
                    $('.nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .nectar-slider-wrap').css('left', -(($windowWidth - $smoothSrollWidth) / 2 - $('.main-content').width() / 2)) + 'px';
                    $('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css('width', $windowWidth);
                } else {
                    var $container = ($('body > #boxed').length == 0) ? '#post-area' : '.container-wrap';
                    if ($($container).width() == '0' && $('body > #boxed').length > 0) $container = '#boxed';
                    $('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css('width', $($container).width());
                }
                var $sliderHeight = parseInt($(this).find('.swiper-container').attr('data-height'));
                var isFullWidthCompatible = ($(this).attr('data-full-width') == 'true') ? 'true' : 'false';
                if ($(this).parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length == 0 || $(this).parents('#post-area').length > 0) { isFullWidthCompatible = 'false'; };
                var $sliderWidth = (isFullWidthCompatible == 'true') ? $windowWidth - $smoothSrollWidth : $(this).width();
                $(this).parents('.parallax_slider_outer').css('height', $sliderHeight);
                $(this).css('height', $sliderHeight);
                $(this).find('.swiper-container, .swiper-slide').css({ 'height': $sliderHeight + 2, 'top': '-1px' });
                $(this).find('.swiper-container').css('width', $sliderWidth);
                $(this).find('.video-wrap').width($sliderWidth + 2);
                $(this).find('.video-wrap').height($sliderHeight + 2);
                if ($('body[data-header-format="left-header"]').length > 0) {
                    $('.parallax_slider_outer.first-section .nectar-slider-wrap, .parallax_slider_outer.first-section .nectar-slider-wrap .swiper-container').css('width', $('#ajax-content-wrap').width());
                    if ($(this).parents('.parallax_slider_outer.first-section').length > 0) {
                        $sliderWidth = (isFullWidthCompatible == 'true') ? $(window).width() - $smoothSrollWidth - $('#header-outer').width() : $(this).width() - $('#header-outer').width();
                        $(this).find('.video-wrap').width($sliderWidth + 2);
                    }
                }
                var scale_h = $sliderWidth / vid_w_orig;
                var scale_v = ($sliderHeight - $headerHeight) / vid_h_orig;
                var scale = scale_h > scale_v ? scale_h : scale_v;
                min_w = 1280 / 720 * ($sliderHeight + 20);
                if (scale * vid_w_orig < min_w) { scale = min_w / vid_w_orig; }
                $(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * vid_w_orig + 2));
                $(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * vid_h_orig + 2));
                $(this).find('.video-wrap').scrollLeft(($(this).find('video').width() - $sliderWidth) / 2);
                $(this).find('.swiper-slide').each(function() {
                    if ($(this).find('.video-wrap').length > 0) {
                        if ($(this).attr('data-bg-alignment') == 'center') { $(this).find('.video-wrap, .mejs-overlay, .mejs-poster').scrollTop(($(this).find('video').height() - ($sliderHeight)) / 2); } else if ($(this).attr('data-bg-alignment') == 'bottom') { $(this).find('.video-wrap').scrollTop(($(this).find('video').height() - ($sliderHeight + 2))); } else { $(this).find('.video-wrap').scrollTop(0); }
                    }
                });
            }
        });
    };
    resizeToCover();

    function captionTransition(obj) {
        resizeToCover();
        var $containerClass;
        (typeof obj == 'undefined') ? $containerClass = 'div[id^=ns-id-]': $containerClass = '#' + $(obj.container).parents('.nectar-slider-wrap').attr('id');;
        var fromLeft = Math.abs(parseInt($($containerClass + ' .swiper-wrapper').css('left')));
        var currentSlide = Math.round(fromLeft / $($containerClass + ' .swiper-slide').width());
        var $slideNum = $($containerClass + ':first .swiper-wrapper > div').length;
        currentSlide = $($containerClass + ' .swiper-slide-active').index();
        if ($($containerClass + ' .swiper-slide:nth-child(' + (currentSlide + 1) + ')').find('.content *').length > 0) { if ($($containerClass + ' .swiper-slide:nth-child(' + (currentSlide + 1) + ')').find('.content *').css('opacity') != '0' && !$('html').hasClass('no-video')) { playVideoBG(currentSlide + 1, $containerClass); if (!$($containerClass + ' .swiper-slide:nth-child(' + (currentSlide + 1) + ')').hasClass('autorotate-shown')) { return false; } else { $($containerClass + ' .swiper-slide').removeClass('autorotate-shown'); } } }
        if (!$('html').hasClass('no-video')) { $($containerClass + ' .swiper-slide .content p, ' + $containerClass + ' .swiper-slide .content h2, ' + $containerClass + ' .swiper-slide .content .buttons').stop(true, true).css({ 'opacity': 0, 'padding-top': 55 }); }
        $($containerClass + ' .swiper-slide').each(function() { if ($(this).find('.video-wrap video').length > 0 && !$('html').hasClass('no-video')) { $(this).find('.video-wrap video').get(0).pause(); } });
        $($containerClass + ' .swiper-slide:not(".swiper-slide-active")').each(function() { if ($(this).find('.video-wrap video').length > 0) { if ($(this).find('.video-wrap video').get(0).currentTime != 0) $(this).find('.video-wrap video').get(0).currentTime = 0; } });
        if ($($containerClass + ' .swiper-container').attr('data-loop') == 'true') {
            if ($($containerClass + ' .swiper-slide-active').index() + 1 == 2 && $($containerClass + ' .swiper-slide-active video').length > 0 && !$('html').hasClass('no-video')) {
                $($containerClass + ' .swiper-slide:last-child').find('.video-wrap video').get(0).play();
                $($containerClass + ' .swiper-slide:last-child').find('.video-wrap video').get(0).pause();
            }
            if ($($containerClass + ' .swiper-slide-active').index() + 1 == $slideNum - 1 && $($containerClass + ' .swiper-slide-active video').length > 0 && !$('html').hasClass('no-video')) {
                $($containerClass + ' .swiper-slide:first-child').find('.video-wrap video').get(0).play();
                $($containerClass + ' .swiper-slide:first-child').find('.video-wrap video').get(0).pause();
            }
            if ($($containerClass + ' .swiper-slide-active').index() + 1 != 2 && $($containerClass + ' .swiper-slide:nth-child(2) video').length > 0 && !$('html').hasClass('no-video')) {
                $($containerClass + ' .swiper-slide:last-child').find('.video-wrap video').get(0).play();
                $($containerClass + ' .swiper-slide:last-child').find('.video-wrap video').get(0).pause();
                $($containerClass + ' .swiper-slide:nth-child(2) video').get(0).pause();
                if ($($containerClass + ' .swiper-slide:nth-child(2) video').get(0).currentTime != 0) $($containerClass + ' .swiper-slide:nth-child(2) video').get(0).currentTime = 0;
            }
            if ($($containerClass).attr('data-overall_style') != 'directional') {
                if ($($containerClass + ' .swiper-slide-active').index() + 1 == $slideNum - 1) { $($containerClass + ' .swiper-slide:nth-child(1)').find('.content').children().each(function(i) { $(this).stop().delay(i * 95).transition({ 'opacity': 1, 'padding-top': 0 }, 600, 'easeOutQuart'); }); }
                if ($($containerClass + ' .swiper-slide-active').index() + 1 == 2) { $($containerClass + ' .swiper-slide:nth-child(' + ($slideNum) + ')').find('.content').children().each(function(i) { $(this).stop().delay(i * 95).transition({ 'opacity': 1, 'padding-top': 0 }, 600, 'easeOutQuart'); }); }
                if ($($containerClass + ' .swiper-slide-active').index() + 1 == $slideNum) { $($containerClass + ' .swiper-slide:nth-child(2)').find('.content').children().each(function(i) { $(this).stop().delay(i * 95).transition({ 'opacity': 1, 'padding-top': 0 }, 600, 'easeOutQuart'); }); }
                if ($($containerClass + ' .swiper-slide-active').index() + 1 == 1) { $($containerClass + ' .swiper-slide:eq(-2)').find('.content').children().each(function(i) { $(this).stop().delay(i * 95).transition({ 'opacity': 1, 'padding-top': 0 }, 600, 'easeOutQuart'); }); }
            }
        }
        setTimeout(function() { playVideoBG($($containerClass + ' .swiper-slide-active').index() + 1, $containerClass); }, 50);
        if ($($containerClass).attr('data-overall_style') != 'directional') { $($containerClass + ' .swiper-slide:nth-child(' + (currentSlide + 1) + ')').find('.content').children().each(function(i) { $(this).stop().delay(i * 95).transition({ 'opacity': 1, 'padding-top': 0 }, 600, 'easeOutQuart'); }); }
        $captionTrans++;
        if ($captionTrans == $('.swiper-wrapper').length) { $('div.first_video_slide').addClass('nulled') }
        setTimeout(function() {
            if ($('.slider-next').hasClass('next-arrow-move')) { $('.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-next').trigger('mouseenter'); } else if ($('.slider-prev').hasClass('prev-arrow-move')) { $('.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-prev').trigger('mouseenter'); }
            if ($($containerClass).attr('data-button-styling') == 'btn_with_preview') {
                $($containerClass + ' .swiper-slide').addClass('prev-high-z-index-static');
                $($containerClass + ' .swiper-slide.swiper-slide-active').removeClass('prev-high-z-index-static');
            }
        }, 175);
    }

    function playVideoBG(nthChild, containerClass) {
        if ($(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.video-wrap video').length > 0) {
            if (!$('html').hasClass('no-video')) $(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.video-wrap video').get(0).play();
            if (!$(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.mejs-overlay.mejs-overlay-play').hasClass('playing') && $(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.mejs-overlay.mejs-overlay-play').hasClass('mobile-played')) { $(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.mejs-overlay.mejs-overlay-play').addClass('playing'); }
            if (!$(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.mejs-poster').hasClass('playing') && $(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.mejs-poster').hasClass('mobile-played')) $(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.mejs-poster').addClass('playing');
            var $that = $(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.mejs-overlay.mejs-overlay-play');
            var $that2 = $(containerClass + ' .swiper-slide:nth-child(' + (nthChild) + ')').find('.mejs-poster');
            if ($that.hasClass('playing') && $that.hasClass('mobile-played')) {
                setTimeout(function() {
                    $that.addClass('behind-buttons');
                    $that2.addClass('behind-buttons');
                }, 200);
            } else {
                $that.removeClass('behind-buttons');
                $that2.removeClass('behind-buttons');
            }
        }
    }
    var $startingSlide = null;

    function slideContentPos() {
        $('.swiper-wrapper').each(function() {
            var $extraHeight = ($(this).parents('.nectar-slider-wrap').hasClass('first-section') || $(this).parents('.parallax_slider_outer').hasClass('first-section')) ? 30 : 0;
            var $sliderHeight = parseInt($(this).parents('.swiper-container').attr('data-height'));
            var $transparentHeader = ($('#header-outer[data-transparent-header="true"]').length > 0) ? $('#header-space').height() : 0;
            if ($(this).parents('.first-section').length == 0 || window.innerWidth < 1000) { $transparentHeader = null; } else if ($transparentHeader != 0 && $('#header-outer[data-remove-border="true"]').length > 0) { $transparentHeader = $transparentHeader / 2 }
            $(this).find('.swiper-slide').each(function() {
                var $contentHeight = $(this).find('.content').height();
                var $contentItems = $(this).find('.content > *').length;
                $contentHeight2 = 0;
                $(this).find('.content > *').each(function() { $contentHeight2 += $(this).height() + parseInt($(this).css('margin-bottom')) + parseInt($(this).css('padding-bottom')); });
                if ($(this).find('.content > *').css('padding-top') == '25px') $contentHeight = $contentHeight - 25 * $contentItems;
                if ($(this).attr('data-y-pos') == 'top') {
                    var $topHeight = ($contentHeight2 / 2) < ((($sliderHeight + $transparentHeader) / 4) - 30) ? ((($sliderHeight + $transparentHeader) / 4) - ($contentHeight2 / 2)) + 20 : ($sliderHeight + $transparentHeader) / 8;
                    $(this).find('.content').css('top', $topHeight + 'px');
                } else if ($(this).attr('data-y-pos') == 'middle') { $(this).find('.content').css('top', ((($sliderHeight + $transparentHeader) / 2) - ($contentHeight2 / 2)) + 'px'); } else { if ($contentHeight2 > 180) { $(this).find('.content').css('top', ((($sliderHeight + $transparentHeader) / 2) - ($contentHeight2 / 10)) + 'px'); } else { $(this).find('.content').css('top', ((($sliderHeight + $transparentHeader) / 2) + ($contentHeight2 / 9)) + 'px'); } }
            });
        });
    }

    function showSliderControls() { $('.swiper-container .slider-prev, .swiper-container .slider-next, .slider-pagination').animate({ 'opacity': 1 }, 550, 'easeOutSine'); }
    var sliderLength = $('.swiper-container').length;
    var sliderLoadedLength = 0;

    function sliderLoadIn(slider, index) {
        slider.find('.nectar-slider-loading').fadeOut(800, 'easeInOutExpo');
        $('body #header-outer[data-transparent-header="true"] .ns-loading-cover').fadeOut(800, 'easeInOutExpo', function() {
            $(this).remove();
            $('.nectar-slider-wrap.first-section .swiper-container .swiper-wrapper .swiper-slide').removeClass('not-loaded');
        });
        slider.find('span.ie-fix').remove();
        var $smoothActive = $('body').attr('data-smooth-scrolling');
        if ($smoothActive == 1 && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && $('#ascrail2000').length == 0 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
            niceScrollInit();
            resizeToCover();
        }
        sliderLoadedLength++;
        if ($('.tabbed').find('.swiper-container').length > 0 && sliderLoadedLength == sliderLength) { setTimeout(function() { $('.tabbed > ul li:first-child a').click(); }, 200); }
        if (!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) autorotateInit(slider, index);
    }
    $('body').on('mouseover', '.swiper-slide', function() { if ($(this).find('video').length > 0 && $(this).find('video').get(0).paused == true && $animating == false) { $(this).find('video').get(0).play(); } });
    $('body').on('click', '.mejs-overlay.mejs-overlay-play', function() {
        $(this).toggleClass('playing');
        $(this).addClass('mobile-played');
        $(this).parent().find('.mejs-poster').toggleClass('playing');
        $(this).parent().find('.mejs-poster').addClass('mobile-played');
        var $that = $(this);
        var $that2 = $(this).parent().find('.mejs-poster');
        if ($(this).hasClass('playing') && $(this).hasClass('mobile-played')) {
            setTimeout(function() {
                $that.addClass('behind-buttons');
                $that2.addClass('behind-buttons');
            }, 200);
        } else {
            setTimeout(function() {
                $that.removeClass('behind-buttons');
                $that2.removeClass('behind-buttons');
            }, 1);
        }
    });
    var $sliderHeight = parseInt($(this).find('.swiper-container').attr('data-height'));
    var portfolioHeaderHeight = ($('.project-title.parallax-effect').length > 0) ? 100 : 0;

    function autorotateInit(slider, num) { var $autoplayVal = slider.attr('data-autorotate'); var $that = slider; var $sliderNum = num; if (typeof $autoplayVal != 'undefined' && $autoplayVal.length != '0' && parseInt($autoplayVal)) { nectarSlideRotateInit(slider, $autoplayVal, $sliderNum); } }

    function nectarSlideRotateInit(slider, interval, sliderNum) {
        autoplay[sliderAutoplayCount] = setInterval(function() { nectarSlideRotate(slider, sliderNum); }, interval);
        $('#' + slider.attr('id')).attr('autoplay-id', sliderAutoplayCount);
        $('#' + slider.attr('id') + ' a.slider-prev, #' + slider.attr('id') + ' a.slider-next, #' + slider.attr('id') + ' .slider-pagination span').click(function(e) { if (typeof e.clientY != 'undefined') { clearInterval(autoplay[$('#' + slider.attr('id')).attr('autoplay-id')]); if ($('#' + slider.attr('id')).parent().hasClass('parallax_slider_outer') && $('#' + slider.attr('id')).attr('data-overall_style') == 'directional') { $('#' + slider.attr('id')).parent().addClass('user-stopped'); } } });
        sliderAutoplayCount++;
    }

    function nectarSlideRotate(slider, sliderNum) {
        if ($('#nectar_fullscreen_rows').length > 0) { if ($(slider).parents('.wpb_row.active').length == 0) { return true; } }
        if ($nectarSliders[sliderNum].activeIndex + 1 < $(slider).find('.swiper-wrapper > div.swiper-slide').length) {
            if ($(slider).attr('data-button-styling') == 'btn_with_preview') {
                $(slider).find('.swiper-slide').removeClass('high-z-index').removeClass('prev-high-z-index');
                $(slider).find('.swiper-slide').removeClass('next-move').removeClass('prev-move');
            }
            if ($(slider).attr('data-overall_style') != 'directional') { $nectarSliders[sliderNum].swipeNext(); } else { $($nectarSliders[sliderNum].container).find('.slider-next').trigger('click'); }
        } else {
            if ($(slider).find('.swiper-container').is("[data-loop]") && $(slider).find('.swiper-container').attr('data-loop') == 'true') { if ($(slider).attr('data-overall_style') != 'directional') { $nectarSliders[sliderNum].swipeNext(); } else { $($nectarSliders[sliderNum].container).find('.slider-next').trigger('click'); } } else {
                if ($(slider).attr('data-overall_style') != 'directional') { $nectarSliders[sliderNum].swipeTo(0, 800); } else {
                    $(slider).find('.swiper-container').addClass('directional-trans-prev');
                    $nectarSliders[sliderNum].swipeTo(0, 800);
                    var $timeout2;
                    clearTimeout($timeout2);
                    $timeout2 = setTimeout(function() { onChangeStart($nectarSliders[sliderNum]); }, 100);
                }
            }
        }
    }

    function clearAutoplay(e) { var $autoplayVal = $('#' + $(e.container).parent().attr('id')).attr('data-autorotate'); if (typeof $autoplayVal != 'undefined' && $autoplayVal.length != '0' && parseInt($autoplayVal)) { clearInterval(autoplay[$('#' + $(e.container).parent().attr('id')).attr('autoplay-id')]); } }
    var animationQueue = null;

    function onChangeStart(e) {
        var $obj = e;
        $animating = true;
        var $slideNum = $($obj.container).find('.swiper-wrapper > div').length;
        $activeIndex = ($($obj.container).attr('data-loop') == 'true') ? $obj.activeIndex + 1 : $obj.activeIndex + 1;
        $activeIndex2 = ($($obj.container).attr('data-loop') == 'true') ? $obj.activeIndex : $obj.activeIndex + 1;
        if ($($obj.container).parent().attr('data-overall_style') != 'directional') { if ($($obj.container).parents('.parallax_slider_outer').length > 0 && $($obj.container).find('.swiper-slide-active[data-color-scheme="dark"]').length > 0 || $($obj.container).parents('.first-section').length > 0 && $($obj.container).find('.swiper-slide-active[data-color-scheme="dark"]').length > 0) { $('#header-outer').addClass('dark-slide'); } else if ($($obj.container).parents('.parallax_slider_outer').length > 0 || $($obj.container).parents('.first-section').length > 0) { $('#header-outer').removeClass('dark-slide'); } } else {
            if ($($obj.container).hasClass('directional-trans-next')) {
                if ($($obj.container).parents('.parallax_slider_outer').length > 0 && $($obj.container).find('.swiper-slide-active').next('.swiper-slide').is('[data-color-scheme="dark"]') || $($obj.container).parents('.first-section').length > 0 && $($obj.container).find('.swiper-slide-active').next('.swiper-slide').is('[data-color-scheme="dark"]')) {
                    $('#header-outer').addClass('dark-slide');
                    if ($('body.mobile').length == 0) {
                        $('#header-outer nav > ul.sf-menu > li > a, #header-outer nav > ul.buttons > li#search-btn a, #header-outer nav > ul.buttons > li.slide-out-widget-area-toggle a > span, #header-outer .cart-icon-wrap, header#top #logo').each(function() {
                            var $itemWidth = parseInt($(this).find('span.original').attr('data-w'));
                            $(this).find('span.dark').css('display', 'inline').transition({ 'margin-left': '0' }, 0).transition({ 'width': $itemWidth }, 325, 'easeInOutQuart');
                            $(this).find('span.dark > span').transition({ 'margin-left': '0' }, 0);
                            $(this).find('span.light').css('display', 'inline-block').transition({ 'margin-left': $itemWidth, 'width': '0' }, 325, 'easeInOutQuart');
                            $(this).find('span.light > span').transition({ 'margin-left': '-' + ($itemWidth) + 'px', 'width': $itemWidth }, 325, 'easeInOutQuart');
                        });
                    }
                } else {
                    $('#header-outer').removeClass('dark-slide');
                    if ($('body.mobile').length == 0) {
                        $('#header-outer nav > ul.sf-menu > li > a, #header-outer nav > ul.buttons > li#search-btn a, #header-outer nav > ul.buttons > li.slide-out-widget-area-toggle a > span, #header-outer .cart-icon-wrap, header#top #logo').each(function() {
                            var $itemWidth = parseInt($(this).find('span.original').attr('data-w'));
                            $(this).find('span.light').css('display', 'inline').transition({ 'margin-left': '0' }, 0).css('display', 'inline').transition({ 'width': $itemWidth }, 325, 'easeInOutQuart');
                            $(this).find('span.light > span').transition({ 'margin-left': '0' }, 0);
                            $(this).find('span.dark').css('display', 'inline-block').transition({ 'margin-left': $itemWidth, 'width': '0' }, 325, 'easeInOutQuart');
                            $(this).find('span.dark > span').transition({ 'margin-left': '-' + ($itemWidth) + 'px', 'width': $itemWidth }, 325, 'easeInOutQuart');
                        });
                    }
                }
            } else if ($($obj.container).hasClass('directional-trans-prev')) {
                if ($($obj.container).parents('.parallax_slider_outer').length > 0 && $($obj.container).find('.swiper-slide-active').prev('.swiper-slide').is('[data-color-scheme="dark"]') || $($obj.container).parents('.first-section').length > 0 && $($obj.container).find('.swiper-slide-active').prev('.swiper-slide').is('[data-color-scheme="dark"]')) {
                    $('#header-outer').addClass('dark-slide');
                    if ($('body.mobile').length == 0) {
                        $('#header-outer nav > ul.sf-menu > li > a, #header-outer nav > ul.buttons > li#search-btn a, #header-outer nav > ul.buttons > li.slide-out-widget-area-toggle a > span, #header-outer .cart-icon-wrap, header#top #logo').each(function() {
                            var $itemWidth = parseInt($(this).find('span.original').attr('data-w'));
                            $(this).find('span.dark').css('display', 'inline').transition({ 'margin-left': '0' }, 0).transition({ 'width': $itemWidth }, 325, 'easeInOutQuart');
                            $(this).find('span.dark > span').transition({ 'margin-left': '0' }, 0);
                            $(this).find('span.light').css('display', 'inline-block').transition({ 'margin-left': $itemWidth, 'width': '0' }, 325, 'easeInOutQuart');
                            $(this).find('span.light > span').transition({ 'margin-left': '-' + ($itemWidth) + 'px', 'width': $itemWidth }, 325, 'easeInOutQuart');
                        });
                    }
                } else {
                    $('#header-outer').removeClass('dark-slide');
                    if ($('body.mobile').length == 0) {
                        $('#header-outer nav > ul.sf-menu > li > a, #header-outer nav > ul.buttons > li#search-btn a, #header-outer nav > ul.buttons > li.slide-out-widget-area-toggle a > span, #header-outer .cart-icon-wrap, header#top #logo').each(function() {
                            var $itemWidth = parseInt($(this).find('span.original').attr('data-w'));
                            $(this).find('span.light').css('display', 'inline').transition({ 'margin-left': '0' }, 0).transition({ 'width': $itemWidth }, 325, 'easeInOutQuart');
                            $(this).find('span.light > span').transition({ 'margin-left': '0' }, 0);
                            $(this).find('span.dark').css('display', 'inline-block').transition({ 'margin-left': $itemWidth, 'width': '0' }, 325, 'easeInOutQuart');
                            $(this).find('span.dark > span').transition({ 'margin-left': '-' + ($itemWidth) + 'px', 'width': $itemWidth }, 325, 'easeInOutQuart');
                        });
                    }
                }
            } else if ($($obj.container).hasClass('directional-trans-current')) {
                if ($($obj.container).parents('.parallax_slider_outer').length > 0 && $($obj.container).find('.swiper-slide-active').is('[data-color-scheme="dark"]') || $($obj.container).parents('.first-section').length > 0 && $($obj.container).find('.swiper-slide-active').is('[data-color-scheme="dark"]')) {
                    $('#header-outer').addClass('dark-slide');
                    if ($('body.mobile').length == 0) {
                        $('#header-outer nav > ul.sf-menu > li > a, #header-outer nav > ul.buttons > li#search-btn a, #header-outer nav > ul.buttons > li.slide-out-widget-area-toggle a > span, #header-outer .cart-icon-wrap, header#top #logo').each(function() {
                            var $itemWidth = parseInt($(this).find('span.original').attr('data-w'));
                            $(this).find('span.dark').css('display', 'inline').transition({ 'margin-left': '0' }, 0).transition({ 'width': $itemWidth }, 325, 'easeInOutQuart');
                            $(this).find('span.dark > span').transition({ 'margin-left': '0' }, 0);
                            $(this).find('span.light').css('display', 'inline-block').transition({ 'margin-left': $itemWidth, 'width': '0' }, 325, 'easeInOutQuart');
                            $(this).find('span.light > span').transition({ 'margin-left': '-' + ($itemWidth) + 'px', 'width': $itemWidth }, 325, 'easeInOutQuart');
                        });
                    }
                } else {
                    $('#header-outer').removeClass('dark-slide');
                    if ($('body.mobile').length == 0) {
                        $('#header-outer nav > ul.sf-menu > li > a, #header-outer nav > ul.buttons > li#search-btn a, #header-outer nav > ul.buttons > li.slide-out-widget-area-toggle a > span, #header-outer .cart-icon-wrap, header#top #logo').each(function() {
                            var $itemWidth = parseInt($(this).find('span.original').attr('data-w'));
                            $(this).find('span.light').css('display', 'inline').transition({ 'margin-left': '0' }, 0).transition({ 'width': $itemWidth }, 325, 'easeInOutQuart');
                            $(this).find('span.light > span').transition({ 'margin-left': '0' }, 0);
                            $(this).find('span.dark').css('display', 'inline-block').transition({ 'margin-left': $itemWidth, 'width': '0' }, 325, 'easeInOutQuart');
                            $(this).find('span.dark > span').transition({ 'margin-left': '-' + ($itemWidth) + 'px', 'width': $itemWidth }, 325, 'easeInOutQuart');
                        });
                    }
                }
            }
        }
        if ($($obj.container).parent().attr('data-overall_style') != 'directional') {
            if ($($obj.container).find('.swiper-slide:nth-child(' + ($activeIndex) + ')').attr('data-color-scheme') == 'dark') {
                $($obj.container).find('.slider-pagination').addClass('dark-cs');
                $($obj.container).find('.slider-prev, .slider-next').addClass('dark-cs');
            } else {
                $($obj.container).find('.slider-pagination').removeClass('dark-cs');
                $($obj.container).find('.slider-prev, .slider-next').removeClass('dark-cs');
            }
        } else {
            if ($($obj.container).hasClass('directional-trans-next')) {
                if ($($obj.container).find('.swiper-slide:nth-child(' + ($activeIndex + 1) + ')').attr('data-color-scheme') == 'dark') {
                    $($obj.container).find('.slider-pagination').addClass('dark-cs');
                    $($obj.container).find('.slider-prev, .slider-next').addClass('dark-cs');
                } else {
                    $($obj.container).find('.slider-pagination').removeClass('dark-cs');
                    $($obj.container).find('.slider-prev, .slider-next').removeClass('dark-cs');
                }
            } else if ($($obj.container).hasClass('directional-trans-prev')) {
                if ($($obj.container).find('.swiper-slide:nth-child(' + ($activeIndex - 1) + ')').attr('data-color-scheme') == 'dark') {
                    $($obj.container).find('.slider-pagination').addClass('dark-cs');
                    $($obj.container).find('.slider-prev, .slider-next').addClass('dark-cs');
                } else {
                    $($obj.container).find('.slider-pagination').removeClass('dark-cs');
                    $($obj.container).find('.slider-prev, .slider-next').removeClass('dark-cs');
                }
            } else if ($($obj.container).hasClass('directional-trans-current')) {
                if ($($obj.container).find('.swiper-slide:nth-child(' + ($activeIndex) + ')').attr('data-color-scheme') == 'dark') {
                    $($obj.container).find('.slider-pagination').addClass('dark-cs');
                    $($obj.container).find('.slider-prev, .slider-next').addClass('dark-cs');
                } else {
                    $($obj.container).find('.slider-pagination').removeClass('dark-cs');
                    $($obj.container).find('.slider-prev, .slider-next').removeClass('dark-cs');
                }
            }
        }
        $($obj.container).find('.swiper-slide .video-texture').removeClass('no-trans').removeClass('light-overlay').removeClass('dark-overlay').removeClass('half-dark-overlay').removeClass('half-light-overlay');
        $($obj.container).find('.slider-prev .slide-count .slide-current').html($activeIndex2);
        $($obj.container).find('.slider-next .slide-count .slide-current').html($activeIndex2);
        if ($($obj.container).attr('data-loop') == 'true') {
            if ($($obj.container).find('.swiper-slide-active').index() + 1 == 1) { $($obj.container).find('.slider-next .slide-count .slide-current, .slider-prev .slide-count .slide-current').html($slideNum - 2); } else if ($($obj.container).find('.swiper-slide-active').index() + 1 == $slideNum) { $($obj.container).find('.slider-next .slide-count .slide-current, .slider-prev .slide-count .slide-current').html(1); }
        }
        if ($obj.activeIndex >= 10) { $($obj.container).find('.slider-next .slide-count .slide-current').addClass('double-digits'); } else { $($obj.container).find('.slider-next .slide-count .slide-current').removeClass('double-digits'); }
        $($obj.container).find('.swiper-slide:not(".swiper-slide-active")').each(function() { if ($(this).find('.video-wrap video').length > 0) {} });
        if ($($obj.container).attr('data-loop') == 'true') { if ($obj.previousIndex == 1 && $obj.activeIndex == 0 || $obj.previousIndex == $slideNum - 2 && $obj.activeIndex == $slideNum - 1) { $('.swiper-slide').addClass('duplicate-transition'); } }
        clearTimeout(animationQueue);
        animationQueue = setTimeout(function() {
            $animating = false;
            $('.swiper-slide').removeClass('duplicate-transition');
        }, 800);
    }

    function hideSlider() {
        if ($(window).scrollTop() / ($sliderHeight + portfolioHeaderHeight + 125) >= 1) {
            $('.parallax_slider_outer .nectar-slider-wrap, .project-title.parallax-effect').css('visibility', 'hidden').hide();
            $('.parallax_slider_outer').removeClass('element-in-view').addClass('element-out-of-view');
            if ($('.parallax_slider_outer .nectar-slider-wrap[data-overall_style="directional"]').length > 0) { var $autoplayVal = $('.parallax_slider_outer .nectar-slider-wrap[data-overall_style="directional"]').attr('data-autorotate'); if (typeof $autoplayVal != 'undefined' && $autoplayVal.length != '0' && parseInt($autoplayVal)) { clearInterval(autoplay[$('.parallax_slider_outer .nectar-slider-wrap').attr('autoplay-id')]); } }
            $(window).on('scroll', showSlider);
            $(window).off('scroll', hideSlider);
        }
    }

    function showSlider() {
        if ($(window).scrollTop() / ($sliderHeight + portfolioHeaderHeight + 125) <= 1) {
            $('.parallax_slider_outer .nectar-slider-wrap, .project-title.parallax-effect').css('visibility', 'visible').show();
            $('.parallax_slider_outer').addClass('element-in-view');
            if ($('.parallax_slider_outer .nectar-slider-wrap[data-overall_style="directional"]').length > 0 && $('.parallax_slider_outer.element-out-of-view').length > 0 && $('.parallax_slider_outer.user-stopped').length == 0) { var $autoplayVal = $('.parallax_slider_outer .nectar-slider-wrap[data-overall_style="directional"]').attr('data-autorotate'); if (typeof $autoplayVal != 'undefined' && $autoplayVal.length != '0' && parseInt($autoplayVal)) { nectarSlideRotateInit($('.parallax_slider_outer .nectar-slider-wrap'), $autoplayVal, 0); } }
            $('.parallax_slider_outer').removeClass('element-out-of-view');
            $('.swiper-slide iframe[data-aspectRatio]').each(function() { var newWidth = $(this).parent().width(); var $el = $(this); if ($(this).is(':visible')) $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio')); });
            nsSliderContentResize();
            if ($('.parallax_slider_outer').length > 0) {
                var fromLeft = Math.abs(parseInt($('.parallax_slider_outer .nectar-slider-wrap .swiper-wrapper').css('left')));
                var currentSlide = Math.round(fromLeft / $('.parallax_slider_outer .nectar-slider-wrap .swiper-slide').width());
                $('.parallax_slider_outer .swiper-wrapper .swiper-slide:eq(' + currentSlide + ')').find('.content').children().each(function(i) { $(this).stop(true, true).css({ 'opacity': 1, 'padding-top': 0 }); });
                $('.parallax_slider_outer .swiper-wrapper .swiper-slide:eq(' + currentSlide + ')').addClass('autorotate-shown');
            }
            $(window).on('scroll', hideSlider);
            $(window).off('scroll', showSlider);
        }
    }

    function sliderCorrectDisplayCheck() {
        if ($(window).scrollTop() / ($sliderHeight + portfolioHeaderHeight + 125) >= 1) { hideSlider(); }
        $(window).unbind('scroll', sliderCorrectDisplayCheck);
    }
    var $smoothActive = $('body').attr('data-smooth-scrolling');
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) { setTimeout(f, 1000 / 60) }
    var lastPosition = -1;
    var $headerRemoveStickyness = ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length > 0) ? 1 : 0;
    if ($headerRemoveStickyness) { var $multiplier1 = 0.55; var $multiplier2 = 0.45; } else { var $multiplier1 = ($('body[data-hhun="1"]').length > 0) ? 0.40 : 0.2; var $multiplier2 = ($('body[data-hhun="1"]').length > 0) ? 0.09 : 0.14; }
    var $parallaxHeaderHUN = ($('#header-outer[data-transparency-option="1"]').length > 0) ? 0.49 : 0.4;

    function parallaxScroll() {
        var $scrollTop = $(window).scrollTop();
        if (lastPosition == $scrollTop || $('.parallax_slider_outer.element-in-view').length == 0) { return false; } else lastPosition = $scrollTop;
        if ($smoothActive == 1 && navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { return false; }
        if ($('body[data-hhun="1"]').length > 0 && !$('#header-outer').hasClass('side-widget-open') && !$('#header-outer .slide-out-widget-area-toggle a').hasClass('animating')) { $('#header-outer.parallax-contained').css({ 'transform': 'translateY(' + $scrollTop * -$parallaxHeaderHUN + 'px)' }); }
        $('.parallax_slider_outer.first-section .nectar-slider-wrap[data-parallax="true"]').css({ 'transform': 'translateY(' + $scrollTop * -$multiplier1 + 'px)' });
        $('.parallax_slider_outer.first-section .swiper-slide:not(".static"):not(".caption-no-fade") .content, .parallax_slider_outer.first-section .nectar-slider-wrap[data-parallax="true"] .swiper-container .slider-next, .parallax_slider_outer.first-section .nectar-slider-wrap[data-parallax="true"] .swiper-container .slider-prev, .swiper-wrapper .slider-down-arrow').css({ 'transform': 'translateY(' + $scrollTop * -$multiplier2 + 'px)' });
        if (!$headerRemoveStickyness) { $('.parallax_slider_outer.first-section .swiper-slide:not(".static"):not(".caption-no-fade") .content, .parallax_slider_outer.first-section .nectar-slider-wrap[data-parallax="true"] .swiper-container .slider-next, .parallax_slider_outer.first-section .nectar-slider-wrap[data-parallax="true"] .swiper-container .slider-prev, .swiper-wrapper .slider-down-arrow').css({ 'opacity': 1 - ($scrollTop / ($sliderHeight - 120)) }); }
        $('#full_width_portfolio .project-title.parallax-effect').css({ 'transform': 'translateY(' + $scrollTop * -$multiplier1 + 'px)' });
    }

    function sliderParallaxUpdateHeight() {
        $sliderHeight = parseInt($('.parallax_slider_outer.first-section .swiper-container').attr('data-height'));
        $('.project-title').css({ 'top': $headerNavSpace + $adminBarHeight + 'px', 'width': $('#ajax-content-wrap').width() });
    }
    var $sliderHeight = parseInt($('.parallax_slider_outer.first-section .swiper-container').attr('data-height'));
    var $adminBarHeight = ($('#wpadminbar').length > 0) ? 28 : 0;
    var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $(window).width() > 1000) ? 0 : $('#header-space').height();

    function sliderParallaxInit() {
        if ($('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) { return false; }
        $('.parallax_slider_outer').addClass('element-in-view');
        window.addEventListener('scroll', function() { window.requestAnimationFrame(parallaxScroll); }, false);
        parallaxScroll();
        var portfolioHeaderHeight = ($('.project-title.parallax-effect').length > 0) ? 100 : 0;

        function displayParallaxSliderInit() {
            if ($(window).scrollTop() / ($sliderHeight + portfolioHeaderHeight + 90) >= 1) {
                $(window).off('scroll.nsVisibilityHide');
                $(window).on('scroll.nsVisibilityHide', hideSlider);
                $(window).on('scroll', showSlider);
            } else {
                $(window).off('scroll.nsVisibilityShow');
                $(window).on('scroll.nsVisibilityShow', showSlider);
                $(window).off('scroll', hideSlider);
            }
        }
        displayParallaxSliderInit();
        $(window).off('scroll.nsCorrectDisplayCheck');
        $(window).on('scroll.nsCorrectDisplayCheck', sliderCorrectDisplayCheck);
        $('body:not(".single") .page-header-no-bg, body:not(".single") #page-header-wrap, body:not(".single") #page-header-bg').remove();
        $('.project-title').addClass('parallax-effect').css({ 'top': $headerNavSpace + $adminBarHeight + 'px', 'width': $('#ajax-content-wrap').width() });
        if ($('.project-title.parallax-effect').length > 0) {
            $('.parallax_slider_outer.first-section .swiper-slide .content, .nectar-slider-wrap.first-section .swiper-slide .content').css('margin-top', '0px');
            $('.swiper-container .slider-prev, .swiper-container .slider-next').css('margin-top', '-28px');
        }
        if ($('.demo_store').length > 0) $('.project-title.parallax-effect').css('margin-top', '-25px');
        if ($('#full_width_portfolio').length > 0) { $('.parallax_slider_outer.first-section').css('margin-top', '93px'); }
        $(window).off('resize.nsHeightUpdate');
        $(window).on('resize.nsHeightUpdate', sliderParallaxUpdateHeight);
    }

    function parallaxCheck() {
        $(window).off('scroll.nsParallaxScroll');
        if ($('.parallax_slider_outer').length > 0 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) { sliderParallaxInit(); if ($('body[data-hhun="1"]').length > 0 && !$('#header-outer[data-remove-fixed="1"]').length > 0) $('#header-outer').addClass('parallax-contained'); } else if ($('.parallax_slider_outer').length > 0 && navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
            $('.project-title').addClass('parallax-effect').css({ 'top': $headerNavSpace + $adminBarHeight + 'px', 'width': $('#ajax-content-wrap').width() });
            $('body:not(".single") .page-header-no-bg, body:not(".single") #page-header-wrap, body:not(".single") #page-header-bg').remove();
        } else { $('.project-title').css({ 'top': '0' }); }
    }
    parallaxCheck();

    function niceScrollInit() {
        $("html").niceScroll({ scrollspeed: 60, mousescrollstep: 40, cursorwidth: 15, cursorborder: 0, cursorcolor: '#303030', cursorborderradius: 6, autohidemode: false, horizrailenabled: false });
        if ($('#boxed').length == 0) { $('body, body #header-outer, body #header-secondary-outer, body #search-outer').css('padding-right', '16px'); }
        $('html').addClass('no-overflow-y');
    }
    $('.portfolio-items a.pp:contains(Video), .swiper-container .buttons a.pp').click(function() { $('.swiper-slide').each(function() { if ($(this).find('.video-wrap video').length > 0) { $(this).find('.video-wrap video').get(0).pause(); } }); });
    $.cssHooks.backgroundColor = {
        get: function(elem) {
            if (elem.currentStyle)
                var bg = elem.currentStyle["backgroundColor"];
            else if (window.getComputedStyle)
                var bg = document.defaultView.getComputedStyle(elem, null).getPropertyValue("background-color");
            if (bg.search("rgb") == -1)
                return bg;
            else {
                bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                function hex(x) { return ("0" + parseInt(x).toString(16)).slice(-2); }
                if (bg) { return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]); }
            }
        }
    }

    function shadeColor(color, shade) {
        var colorInt = parseInt(color.substring(1), 16);
        var R = (colorInt & 0xFF0000) >> 16;
        var G = (colorInt & 0x00FF00) >> 8;
        var B = (colorInt & 0x0000FF) >> 0;
        R = R + Math.floor((shade / 255) * R);
        G = G + Math.floor((shade / 255) * G);
        B = B + Math.floor((shade / 255) * B);
        var newColorInt = (R << 16) + (G << 8) + (B);
        var newColorStr = "#" + newColorInt.toString(16);
        return newColorStr;
    }

    function sliderbuttonHoverEffect() {
        $('.swiper-slide').each(function() {
            $(this).find('.solid_color').each(function() {
                var $currentColor = $(this).find('a').css('background-color');
                var $hoverColor = shadeColor($currentColor, -16);
                $(this).find('a').hover(function() { $(this).attr('style', 'background-color:' + $hoverColor + '!important;'); }, function() { $(this).attr('style', ''); });
            });
        });
    }
    sliderbuttonHoverEffect();

    function sliderFontOverrides() {
        var $overrideCSS = '';
        $('.nectar-slider-wrap').each(function(i) {
            if ($(this).find('.swiper-container[data-tho]').length > 0) {
                $tho = $(this).find('.swiper-container').attr('data-tho');
                $tco = $(this).find('.swiper-container').attr('data-tco');
                $pho = $(this).find('.swiper-container').attr('data-pho');
                $pco = $(this).find('.swiper-container').attr('data-pco');
                if ($tho != 'auto' || $tco != 'auto') {
                    $overrideCSS += '@media only screen and (max-width: 1000px) and (min-width: 690px) {';
                    if ($tho != 'auto')
                        $overrideCSS += '#' + $(this).attr('id') + '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content h2, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content h2 { font-size:' + $tho + 'px!important; line-height:' + (parseInt($tho) + 10) + 'px!important;  }';
                    if ($pho != 'auto')
                        $overrideCSS += '#' + $(this).attr('id') + '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content p, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content p { font-size:' + $tco + 'px!important; line-height:' + (parseInt($tco) + 10) + 'px!important;  }';
                    $overrideCSS += '}';
                }
                if ($pho != 'auto' || $pco != 'auto') {
                    $overrideCSS += '@media only screen and (max-width: 690px) {';
                    if ($pho != 'auto')
                        $overrideCSS += '#' + $(this).attr('id') + '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content h2, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content h2 { font-size:' + $pho + 'px!important; line-height:' + (parseInt($pho) + 10) + 'px!important;  }';
                    if ($pho != 'auto')
                        $overrideCSS += '#' + $(this).attr('id') + '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content p,  body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content p { font-size:' + $pco + 'px!important; line-height:' + (parseInt($pco) + 10) + 'px!important;  }';
                    $overrideCSS += '}';
                }
            }
        });
        if ($overrideCSS.length > 1) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) { style.styleSheet.cssText = $overrideCSS; } else { style.appendChild(document.createTextNode($overrideCSS)); }
            head.appendChild(style);
        }
    }
    sliderFontOverrides();
    var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
    headerPadding = headerPadding - headerPadding / 1.8;
    $('body').on('click', '.slider-down-arrow', function() {
        var $currentSlider = $(this).parents('.swiper-container');
        var $topDistance = $currentSlider.attr('data-height');
        var $offset = ($currentSlider.parents('.first-section').length == 0 || $('body[data-transparent-header="false"]').length > 0) ? $currentSlider.offset().top : 0;
        if ($('body[data-permanent-transparent="1"]').length == 0) {
            if (!$('body').hasClass('mobile')) { if ($('body[data-hhun="1"]').length > 0) { $('body,html').stop().animate({ scrollTop: parseInt($topDistance) + $offset + 2 }, 1000, 'easeInOutCubic') } else { $('body,html').stop().animate({ scrollTop: parseInt($topDistance - $('#header-space').height()) + parseInt(shrinkNum) + headerPadding * 2 + $offset + 2 }, 1000, 'easeInOutCubic') } } else {
                $scrollPos = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? parseInt($topDistance) - $('#header-space').height() + parseInt($currentSlider.offset().top) + 2 : parseInt($topDistance) + parseInt($currentSlider.offset().top) + 2;
                $('body,html').stop().animate({ scrollTop: $scrollPos }, 1000, 'easeInOutCubic')
            }
        } else { $('body,html').stop().animate({ scrollTop: parseInt($topDistance) + parseInt($currentSlider.offset().top) + 2 }, 1000, 'easeInOutCubic') }
        return false;
    });

    function prettyPhotoInit() {
        var loading_animation = ($('body[data-loading-animation]').attr('data-loading-animation') != 'none') ? $('body').attr('data-loading-animation') : null;
        var ascend_loader = ($('body').hasClass('ascend')) ? '<span class="default-loading-icon spin"></span>' : '';
        var ascend_loader_class = ($('body').hasClass('ascend')) ? 'default_loader ' : '';
        $(".nectar-slider-wrap a[rel^='prettyPhoto']").prettyPhoto({ theme: 'dark_rounded', allow_resize: true, default_width: 690, opacity: 0.85, animation_speed: 'normal', default_height: 388, social_tools: '', markup: '<div class="pp_pic_holder"> \
         <div class="ppt">&nbsp;</div> \
       <div class="pp_details"> \
        <div class="pp_nav"> \
            <a href="#" class="pp_arrow_previous"> <i class="icon-salient-left-arrow-thin icon-default-style"></i> </a> \
         <a href="#" class="pp_arrow_next"> <i class="icon-salient-right-arrow-thin icon-default-style"></i> </a> \
         <p class="currentTextHolder">0/0</p> \
        </div> \
        <a class="pp_close" href="#"><span class="icon-salient-x icon-default-style"></span></a> \
       </div> \
       <div class="pp_content_container"> \
        <div class="pp_left"> \
        <div class="pp_right"> \
         <div class="pp_content"> \
          <div class="pp_fade"> \
           <div class="pp_hoverContainer"> \
           </div> \
           <div id="pp_full_res"></div> \
                                            <p class="pp_description"></p> \
          </div> \
         </div> \
        </div> \
        </div> \
       </div> \
      </div> \
      <div class="pp_loaderIcon ' + ascend_loader_class + loading_animation + '"> ' + ascend_loader + ' </div> \
      <div class="pp_overlay"></div>' });
    }
});