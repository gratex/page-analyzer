﻿window.Modernizr = function (i, e, p) {
    function u(a, b) {
        return typeof a === b
    }
    function E(a, b) {
        for (var c in a) if (m[a[c]] !== p && (!b || b(a[c], F))) return true
    }
    function q(a, b) {
        var c = a.charAt(0).toUpperCase() + a.substr(1);
        c = (a + " " + G.join(c + " ") + c).split(" ");
        return !!E(c, b)
    }
    function V() {
        g.input = function (a) {
            for (var b = 0, c = a.length; b < c; b++) K[a[b]] = !!(a[b] in j);
            return K
        } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        g.inputtypes = function (a) {
            for (var b = 0, c, k = a.length; b < k; b++) {
                j.setAttribute("type", a[b]);
                if (c = j.type !== "text") {
                    j.value = L;
                    if (/^range$/.test(j.type) && j.style.WebkitAppearance !== p) {
                        n.appendChild(j);
                        c = e.defaultView;
                        c = c.getComputedStyle && c.getComputedStyle(j, null).WebkitAppearance !== "textfield" && j.offsetHeight !== 0;
                        n.removeChild(j)
                    } else / ^ (search | tel) $ /.test(j.type) || (c = /^(url|email)$/.test(j.type) ? j.checkValidity && j.checkValidity() === false : j.value != L)
                }
                M[a[b]] = !!c
            }
            return M
        } ("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var g = {},
        n = e.documentElement,
        N = e.head || e.getElementsByTagName("head")[0],
        F = e.createElement("modernizr"),
        m = F.style,
        j = e.createElement("input"),
        L = ":)",
        O = Object.prototype.toString,
        v = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
        G = "Webkit Moz O ms Khtml".split(" "),
        y = {
            svg: "http://www.w3.org/2000/svg"
        },
        d = {},
        M = {},
        K = {},
        P = [],
        z, Q = function (a) {
            var b = e.createElement("style"),
                c = e.createElement("div");
            b.textContent = a + "{#modernizr{height:3px}}";
            N.appendChild(b);
            c.id = "modernizr";
            n.appendChild(c);
            a = c.offsetHeight === 3;
            b.parentNode.removeChild(b);
            c.parentNode.removeChild(c);
            return !!a
        },
        H = function () {
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function (b, c) {
                c = c || e.createElement(a[b] || "div");
                b = "on" + b;
                var k = b in c;
                if (!k) {
                    c.setAttribute || (c = e.createElement("div"));
                    if (c.setAttribute && c.removeAttribute) {
                        c.setAttribute(b, "");
                        k = u(c[b], "function");
                        u(c[b], p) || (c[b] = p);
                        c.removeAttribute(b)
                    }
                }
                return k
            }
        } (),
        I = {}.hasOwnProperty,
        R;
    R = !u(I, p) && !u(I.call, p) ?
    function (a, b) {
        return I.call(a, b)
    } : function (a, b) {
        return b in a && u(a.constructor.prototype[b], p)
    };
    d.flexbox = function () {
        var a = e.createElement("div"),
            b = e.createElement("div");
        (function (k, h, s, A) {
            h += ":";
            k.style.cssText = (h + v.join(s + ";" + h)).slice(0, -h.length) + (A || "")
        })(a, "display", "box", "width:42px;padding:0;");
        b.style.cssText = v.join("box-flex:1;") + "width:10px;";
        a.appendChild(b);
        n.appendChild(a);
        var c = b.offsetWidth === 42;
        a.removeChild(b);
        n.removeChild(a);
        return c
    };
    d.canvas = function () {
        var a = e.createElement("canvas");
        return !!(a.getContext && a.getContext("2d"))
    };
    d.canvastext = function () {
        return !!(g.canvas && u(e.createElement("canvas").getContext("2d").fillText, "function"))
    };
    d.webgl = function () {
        var a = e.createElement("canvas");
        try {
            if (a.getContext("webgl")) return true
        } catch (b) { }
        try {
            if (a.getContext("experimental-webgl")) return true
        } catch (c) { }
        return false
    };
    d.touch = function () {
        return "ontouchstart" in i || Q("@media (" + v.join("touch-enabled),(") + "modernizr)")
    };
    d.geolocation = function () {
        return !!navigator.geolocation
    };
    d.postmessage = function () {
        return !!i.postMessage
    };
    d.websqldatabase =

    function () {
        return !!i.openDatabase
    };
    d.indexedDB = function () {
        for (var a = -1, b = G.length; ++a < b; ) {
            var c = G[a].toLowerCase();
            if (i[c + "_indexedDB"] || i[c + "IndexedDB"]) return true
        }
        return false
    };
    d.hashchange = function () {
        return H("hashchange", i) && (e.documentMode === p || e.documentMode > 7)
    };
    d.history = function () {
        return !!(i.history && history.pushState)
    };
    d.draganddrop = function () {
        return H("dragstart") && H("drop")
    };
    d.websockets = function () {
        return "WebSocket" in i
    };
    d.rgba = function () {
        m.cssText = "background-color:rgba(150,255,150,.5)";
        return ("" + m.backgroundColor).indexOf("rgba") !== -1
    };
    d.hsla = function () {
        m.cssText = "background-color:hsla(120,40%,100%,.5)";
        return ("" + m.backgroundColor).indexOf("rgba") !== -1 || ("" + m.backgroundColor).indexOf("hsla") !== -1
    };
    d.multiplebgs = function () {
        m.cssText = "background:url(//:),url(//:),red url(//:)";
        return /(url\s*\(.*?){3}/.test(m.background)
    };
    d.backgroundsize = function () {
        return q("backgroundSize")
    };
    d.borderimage = function () {
        return q("borderImage")
    };
    d.borderradius = function () {
        return q("borderRadius", "", function (a) {
            return ("" + a).indexOf("orderRadius") !== -1
        })
    };
    d.boxshadow = function () {
        return q("boxShadow")
    };
    d.textshadow = function () {
        return e.createElement("div").style.textShadow === ""
    };
    d.cssanimations = function () {
        return q("animationName")
    };
    d.csscolumns = function () {
        return q("columnCount")
    };
    d.cssgradients = function () {
        var a = ("background-image:" + v.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + v.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        m.cssText = a;
        return ("" + m.backgroundImage).indexOf("gradient") !== -1
    };
    d.cssreflections = function () {
        return q("boxReflect")
    };
    d.csstransforms = function () {
        return !!E(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
    };
    d.csstransforms3d = function () {
        var a = !!E(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
        if (a && "webkitPerspective" in n.style) a = Q("@media (" + v.join("transform-3d),(") + "modernizr)");
        return a
    };
    d.csstransitions = function () {
        return q("transitionProperty")
    };
    d.fontface = function () {
        var a, b = N || n,
            c = e.createElement("style"),
            k = e.implementation || {
                hasFeature: function () {
                    return false
                }
            };
        c.type = "text/css";
        b.insertBefore(c, b.firstChild);
        a = c.sheet || c.styleSheet;
        b = k.hasFeature("CSS2", "") ?
        function (h) {
            if (!(a && h)) return false;
            var s = false;
            try {
                a.insertRule(h, 0);
                s = !/unknown/i.test(a.cssRules[0].cssText);
                a.deleteRule(a.cssRules.length - 1)
            } catch (A) { }
            return s
        } : function (h) {
            if (!(a && h)) return false;
            a.cssText = h;
            return a.cssText.length !== 0 && !/unknown/i.test(a.cssText) && a.cssText.replace(/\r+|\n+/g, "").indexOf(h.split(" ")[0]) === 0
        };
        g._fontfaceready = function (h) {
            h(g.fontface)
        };
        return b('@font-face { font-family: "font"; src: "font.ttf"; }')
    };
    d.video = function () {
        var a = e.createElement("video"),
            b = !!a.canPlayType;
        if (b) {
            b = new Boolean(b);
            b.ogg = a.canPlayType('video/ogg; codecs="theora"');
            b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"') || a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
            b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"')
        }
        return b
    };
    d.audio = function () {
        var a = e.createElement("audio"),
            b = !!a.canPlayType;
        if (b) {
            b = new Boolean(b);
            b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"');
            b.mp3 = a.canPlayType("audio/mpeg;");
            b.wav = a.canPlayType('audio/wav; codecs="1"');
            b.m4a = a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
        }
        return b
    };
    d.localstorage = function () {
        try {
            return "localStorage" in i && i.localStorage !== null
        } catch (a) {
            return false
        }
    };
    d.sessionstorage = function () {
        try {
            return "sessionStorage" in i && i.sessionStorage !== null
        } catch (a) {
            return false
        }
    };
    d.webWorkers = function () {
        return !!i.Worker
    };
    d.applicationcache =

    function () {
        return !!i.applicationCache
    };
    d.svg = function () {
        return !!e.createElementNS && !!e.createElementNS(y.svg, "svg").createSVGRect
    };
    d.inlinesvg = function () {
        var a = e.createElement("div");
        a.innerHTML = "<svg/>";
        return (a.firstChild && a.firstChild.namespaceURI) == y.svg
    };
    d.smil = function () {
        return !!e.createElementNS && /SVG/.test(O.call(e.createElementNS(y.svg, "animate")))
    };
    d.svgclippaths = function () {
        return !!e.createElementNS && /SVG/.test(O.call(e.createElementNS(y.svg, "clipPath")))
    };
    for (var J in d) if (R(d, J)) {
        z = J.toLowerCase();
        g[z] = d[J]();
        P.push((g[z] ? "" : "no-") + z)
    }
    g.input || V();
    g.crosswindowmessaging = g.postmessage;
    g.historymanagement = g.history;
    g.addTest = function (a, b) {
        a = a.toLowerCase();
        if (!g[a]) {
            b = !!b();
            n.className += " " + (b ? "" : "no-") + a;
            g[a] = b;
            return g
        }
    };
    m.cssText = "";
    F = f = null;
    i.attachEvent &&
    function () {
        var a = e.createElement("div");
        a.innerHTML = "<elem></elem>";
        return a.childNodes.length !== 1
    } () &&
    function (a, b) {
        function c(r) {
            for (var l = -1; ++l < s; ) r.createElement(h[l])
        }
        function k(r, l) {
            for (var t = -1, o = r.length, B, S = []; ++t < o; ) {
                B = r[t];
                if ((l =
                B.media || l) != "screen") S.push(k(B.imports, l), B.cssText)
            }
            return S.join("")
        }
        var h = "abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),
            s = h.length,
            A = RegExp("(^|\\s)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)", "gi"),
            W = RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)", "gi"),
            X = RegExp("(^|[^\\n]*?\\s)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
            T = b.createDocumentFragment(),
            C = b.documentElement,
            U = C.firstChild,
            x = b.createElement("body"),
            D = b.createElement("style"),
            w;
        c(b);
        c(T);
        U.insertBefore(D, U.firstChild);
        D.media = "print";
        a.attachEvent("onbeforeprint", function () {
            var r = -1,
                l = k(b.styleSheets, "all"),
                t = [],
                o;
            for (w = w || b.body;
            (o = X.exec(l)) != null; ) t.push((o[1] + o[2] + o[3]).replace(A, "$1.iepp_$2") + o[4]);
            for (D.styleSheet.cssText = t.join("\n"); ++r < s; ) {
                l = b.getElementsByTagName(h[r]);
                t = l.length;
                for (o = -1; ++o < t; ) if (l[o].className.indexOf("iepp_") < 0) l[o].className += " iepp_" + h[r]
            }
            T.appendChild(w);
            C.appendChild(x);
            x.className = w.className;
            x.innerHTML = w.innerHTML.replace(W, "<$1font")
        });
        a.attachEvent("onafterprint", function () {
            x.innerHTML = "";
            C.removeChild(x);
            C.appendChild(w);
            D.styleSheet.cssText = ""
        })
    } (i, e);
    g._enableHTML5 = true;
    g._version = "1.6";
    n.className = n.className.replace(/\bno-js\b/, "") + " js";
    n.className += " " + P.join(" ");
    return g
} (this, this.document);