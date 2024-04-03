(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    640: function (e, t, n) {
      "use strict";
      var r = n(1742),
        a = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          o,
          i,
          l,
          s,
          c,
          d,
          u,
          f = !1;
        t || (t = {}), (i = t.debug || !1);
        try {
          if (
            ((s = r()),
            (c = document.createRange()),
            (d = document.getSelection()),
            ((u = document.createElement("span")).textContent = e),
            (u.ariaHidden = "true"),
            (u.style.all = "unset"),
            (u.style.position = "fixed"),
            (u.style.top = 0),
            (u.style.clip = "rect(0, 0, 0, 0)"),
            (u.style.whiteSpace = "pre"),
            (u.style.webkitUserSelect = "text"),
            (u.style.MozUserSelect = "text"),
            (u.style.msUserSelect = "text"),
            (u.style.userSelect = "text"),
            u.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  i && console.warn("unable to use e.clipboardData"),
                    i && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = a[t.format] || a.default;
                  window.clipboardData.setData(r, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(u),
            c.selectNodeContents(u),
            d.addRange(c),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          f = !0;
        } catch (r) {
          i && console.error("unable to copy using execCommand: ", r),
            i && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (f = !0);
          } catch (r) {
            i && console.error("unable to copy using clipboardData: ", r),
              i && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (o =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (l = n.replace(/#{\s*key\s*}/g, o)),
              window.prompt(l, e);
          }
        } finally {
          d &&
            ("function" == typeof d.removeRange
              ? d.removeRange(c)
              : d.removeAllRanges()),
            u && document.body.removeChild(u),
            s();
        }
        return f;
      };
    },
    5557: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(6853);
        },
      ]);
    },
    6853: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(5893),
        a = n(5266),
        o = n.n(a);
      n(7294);
      var i = n(4855),
        l = n.n(i),
        s = () =>
          (0, r.jsx)("div", {
            children: (0, r.jsxs)("div", {
              className: "container mx-auto px-6 pt-16 lg:pt-24",
              children: [
                (0, r.jsx)("h2", {
                  className:
                    "font-heading  text-center text-3xl lg:text-6xl font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "Tokenomics",
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-3 gap-16 mt-8 lg:mt-16",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "border-4 border-black border-dashed text-center text-2xl p-4 font-heading",
                      children: [
                        (0, r.jsx)("div", { children: " Name " }),
                        (0, r.jsx)("div", { children: "MeowthWifHat" }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "border-4 border-black border-dashed text-center text-2xl p-4 font-heading",
                      children: [
                        (0, r.jsx)("div", { children: " Symbol " }),
                        (0, r.jsx)("div", { children: "$Meowth " }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "border-4 border-black border-dashed text-center text-2xl p-4 font-heading",
                      children: [
                        (0, r.jsx)("div", { children: "Supply " }),
                        (0, r.jsx)("div", { children: "999,999,999 " }),
                        (0, r.jsx)("span", {
                          className: "text-sm",
                          children:
                            "because cats have nine lives, and we love big numbers!",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "border-4  flex gap-2 items-center justify-center border-black border-dashed text-center text-2xl p-4 font-heading mt-6",
                  children: [
                    (0, r.jsx)("div", {
                      className: "text-xs sm:text-base",
                      children: "C6LSZPXSFvL7BTS2rBtUg9SAem7HGxrCozh1Jz382f1X",
                    }),
                    (0, r.jsx)(l(), {
                      text: "C6LSZPXSFvL7BTS2rBtUg9SAem7HGxrCozh1Jz382f1X",
                      children: (0, r.jsx)("button", {
                        children: (0, r.jsx)("img", {
                          src: "/copy.svg",
                          className: "w-6",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "text-center font-heading mt-2",
                  children:
                    "Scratch this into your ledger; it's where the magic begins.",
                }),
              ],
            }),
          }),
        c = n(3795),
        d = n.n(c),
        u = () =>
          (0, r.jsx)("div", {
            children: (0, r.jsx)("div", {
              className: "container mx-auto px-6 py-16 ",
              children: (0, r.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-16 items-center",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h1", {
                        className:
                          "font-heading  text-3xl lg:text-7xl font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                        children: "The Purr-fect Blend of Crypto and Cats!",
                      }),
                      (0, r.jsx)("div", {
                        className: "".concat(d().className, " mt-3"),
                        children:
                          "Imagine a world where your love for memes and investment can not only coexist but thrive together. MeowthCap isn't just another coin; it's a movement. A digital currency powered by the community, for the community, inspired by the internet’s undying love for cats with hats. But we're not just any cats - we're talking about the legendary Meowth, with his iconic charm and a brand-new, stylish hat!",
                      }),
                      (0, r.jsxs)("div", {
                        className: "mt-6 flex gap-2 items-center",
                        children: [
                          (0, r.jsx)("a", {
                            className: "button-ani py-2 px-6 text-black",
                            href: "",
                            target: "_blank",
                            children: "Buy Now",
                          }),
                          (0, r.jsx)("a", {
                            className: "button-ani py-2 px-6 text-black",
                            href: "",
                            target: "_blank",
                            children: "Chart",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    children: (0, r.jsx)("img", { src: "/hero.png" }),
                  }),
                ],
              }),
            }),
          }),
        f = n(7005),
        p = () =>
          (0, r.jsx)("div", {
            children: (0, r.jsxs)(f.Z, {
              className: "py-3 shadow",
              children: [
                "•",
                (0, r.jsx)("div", {
                  className:
                    "px-4 font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "i mean bro, its's literally a meowth wif a hat",
                }),
                "•",
                " ",
                (0, r.jsx)("div", {
                  className:
                    "px-4 font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "i mean bro, its's literally a meowth wif a hat",
                }),
                "•",
                " ",
                (0, r.jsx)("div", {
                  className:
                    "px-4 font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "i mean bro, its's literally a meowth wif a hat",
                }),
                "•",
                " ",
                (0, r.jsx)("div", {
                  className:
                    "px-4 font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "i mean bro, its's literally a meowth wif a hat",
                }),
                "•",
                " ",
                (0, r.jsx)("div", {
                  className:
                    "px-4 font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "i mean bro, its's literally a meowth wif a hat",
                }),
                "•",
                " ",
                (0, r.jsx)("div", {
                  className:
                    "px-4 font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "i mean bro, its's literally a meowth wif a hat",
                }),
                "•",
                " ",
                (0, r.jsx)("div", {
                  className:
                    "px-4 font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "i mean bro, its's literally a meowth wif a hat",
                }),
              ],
            }),
          }),
        m = () =>
          (0, r.jsx)("div", {
            children: (0, r.jsxs)("div", {
              className: "container mx-auto px-6 py-16 lg:py-24",
              children: [
                (0, r.jsx)("h2", {
                  className:
                    "font-heading  text-center text-3xl lg:text-6xl font-bold bg-gradient-to-tr from-purple-500 via-teal-500 to-violet-600 bg-clip-text text-transparent",
                  children: "Partners",
                }),
                (0, r.jsxs)("div", {
                  className:
                    "mt-8 lg:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-16 items-center bg-black p-6 lg:p-12",
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.pinksale.finance/",
                      target: "_blank",
                      className: "",
                      children: (0, r.jsx)("img", { src: "/pinksale.png" }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.dexview.com/",
                      target: "_blank",
                      className: "",
                      children: (0, r.jsx)("img", { src: "/dexview.png" }),
                    }),
                    (0, r.jsx)("a", {
                      href: "#",
                      target: "_blank",
                      className: "",
                      children: (0, r.jsx)("img", { src: "/dextools.png" }),
                    }),
                    (0, r.jsx)("a", {
                      href: "#",
                      target: "_blank",
                      className: "",
                      children: (0, r.jsx)("img", { src: "/ave.png" }),
                    }),
                    (0, r.jsx)("a", {
                      href: "#",
                      target: "_blank",
                      className: "",
                      children: (0, r.jsx)("img", { src: "/cmc.png" }),
                    }),
                    (0, r.jsx)("a", {
                      href: "#",
                      target: "_blank",
                      className: "",
                      children: (0, r.jsx)("img", { src: "/cg.png" }),
                    }),
                  ],
                }),
              ],
            }),
          });
      function h() {
        return (0, r.jsxs)("main", {
          className: " ".concat(o().className),
          children: [
            (0, r.jsx)(p, {}),
            (0, r.jsxs)("div", {
              className:
                "flex justify-center items-center gap-6 text-xs sm:text-base shadow-2xl h-16",
              children: [
                (0, r.jsx)("a", {
                  href: "",
                  target: "_blank",
                  className: "uppercase",
                  children: "Buy wif us",
                }),
                (0, r.jsx)("a", {
                  href: "https://twitter.com/MeowthWifHat_",
                  target: "_blank",
                  className: "uppercase",
                  children: "Support Chart wif us",
                }),
                (0, r.jsx)("a", {
                  href: " https://t.me/SolMeowthWifHat",
                  target: "_blank",
                  className: "uppercase",
                  children: "Chat wif us",
                }),
              ],
            }),
            (0, r.jsx)(u, {}),
            (0, r.jsx)(s, {}),
            (0, r.jsx)(m, {}),
            (0, r.jsx)("div", {
              className: "bg-black py-2 px-6",
              children: (0, r.jsx)("div", {
                className: "text-center text-white",
                children: "\xa9 2024 MeowthWifHat. All rights reserved.",
              }),
            }),
          ],
        });
      }
    },
    3795: function (e) {
      e.exports = {
        style: { fontFamily: "'__Pixelify_Sans_f44144'", fontStyle: "normal" },
        className: "__className_f44144",
      };
    },
    5266: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
          fontStyle: "normal",
        },
        className: "__className_aaf875",
      };
    },
    4300: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var a = l(n(7294)),
        o = l(n(640)),
        i = ["text", "onCopy", "options", "children"];
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var h = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && u(e, t);
        })(h, e);
        var t,
          n,
          l,
          s =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = p(h);
              if (t) {
                var a = p(this).constructor;
                e = Reflect.construct(n, arguments, a);
              } else e = n.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === r(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return f(e);
              })(this, e);
            });
        function h() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, h);
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            m(
              f((e = s.call.apply(s, [this].concat(n)))),
              "onClick",
              function (t) {
                var n = e.props,
                  r = n.text,
                  i = n.onCopy,
                  l = n.children,
                  s = n.options,
                  c = a.default.Children.only(l),
                  d = (0, o.default)(r, s);
                i && i(r, d),
                  c &&
                    c.props &&
                    "function" == typeof c.props.onClick &&
                    c.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (n = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          r,
                          a = {},
                          o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < o.length; r++)
                        (n = o[r]),
                          !(t.indexOf(n) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                            (a[n] = e[n]);
                    }
                    return a;
                  })(e, i),
                  r = a.default.Children.only(t);
                return a.default.cloneElement(
                  r,
                  c(c({}, n), {}, { onClick: this.onClick })
                );
              },
            },
          ]),
          d(h.prototype, n),
          l && d(h, l),
          Object.defineProperty(h, "prototype", { writable: !1 }),
          h
        );
      })(a.default.PureComponent);
      (t.CopyToClipboard = h),
        m(h, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    4855: function (e, t, n) {
      "use strict";
      var r = n(4300).CopyToClipboard;
      (r.CopyToClipboard = r), (e.exports = r);
    },
    7005: function (e, t, n) {
      var r = n(7294),
        a = r && "object" == typeof r && "default" in r ? r : { default: r };
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let o = r.forwardRef(function (
        {
          style: e = {},
          className: t = "",
          autoFill: n = !1,
          play: o = !0,
          pauseOnHover: i = !1,
          pauseOnClick: l = !1,
          direction: s = "left",
          speed: c = 50,
          delay: d = 0,
          loop: u = 0,
          gradient: f = !1,
          gradientColor: p = "white",
          gradientWidth: m = 200,
          onFinish: h,
          onCycleComplete: x,
          onMount: b,
          children: g,
        },
        y
      ) {
        let [v, w] = r.useState(0),
          [j, N] = r.useState(0),
          [C, _] = r.useState(1),
          [k, O] = r.useState(!1),
          E = r.useRef(null),
          P = y || E,
          S = r.useRef(null),
          D = r.useCallback(() => {
            if (S.current && P.current) {
              let e = P.current.getBoundingClientRect(),
                t = S.current.getBoundingClientRect(),
                r = e.width,
                a = t.width;
              ("up" === s || "down" === s) && ((r = e.height), (a = t.height)),
                n && r && a ? _(a < r ? Math.ceil(r / a) : 1) : _(1),
                w(r),
                N(a);
            }
          }, [n, P, s]);
        r.useEffect(() => {
          if (k && (D(), S.current && P.current)) {
            let e = new ResizeObserver(() => D());
            return (
              e.observe(P.current),
              e.observe(S.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [D, P, k]),
          r.useEffect(() => {
            D();
          }, [D, g]),
          r.useEffect(() => {
            O(!0);
          }, []),
          r.useEffect(() => {
            "function" == typeof b && b();
          }, []);
        let R = r.useMemo(
            () => (n ? (j * C) / c : j < v ? v / c : j / c),
            [n, v, j, C, c]
          ),
          M = r.useMemo(
            () =>
              Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !o || i ? "paused" : "running",
                "--pause-on-click": !o || (i && !l) || l ? "paused" : "running",
                "--width": "up" === s || "down" === s ? "100vh" : "100%",
                "--transform":
                  "up" === s
                    ? "rotate(-90deg)"
                    : "down" === s
                    ? "rotate(90deg)"
                    : "none",
              }),
            [e, o, i, l, s]
          ),
          T = r.useMemo(
            () => ({
              "--gradient-color": p,
              "--gradient-width": "number" == typeof m ? `${m}px` : m,
            }),
            [p, m]
          ),
          A = r.useMemo(
            () => ({
              "--play": o ? "running" : "paused",
              "--direction": "left" === s ? "normal" : "reverse",
              "--duration": `${R}s`,
              "--delay": `${d}s`,
              "--iteration-count": u ? `${u}` : "infinite",
              "--min-width": n ? "auto" : "100%",
            }),
            [o, s, R, d, u, n]
          ),
          B = r.useMemo(
            () => ({
              "--transform":
                "up" === s
                  ? "rotate(90deg)"
                  : "down" === s
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [s]
          ),
          q = r.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                a.default.createElement(
                  r.Fragment,
                  { key: t },
                  r.Children.map(g, (e) =>
                    a.default.createElement(
                      "div",
                      { style: B, className: "rfm-child" },
                      e
                    )
                  )
                )
              ),
            [B, g]
          );
        return k
          ? a.default.createElement(
              "div",
              { ref: P, style: M, className: "rfm-marquee-container " + t },
              f &&
                a.default.createElement("div", {
                  style: T,
                  className: "rfm-overlay",
                }),
              a.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: A,
                  onAnimationIteration: x,
                  onAnimationEnd: h,
                },
                a.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: S },
                  r.Children.map(g, (e) =>
                    a.default.createElement(
                      "div",
                      { style: B, className: "rfm-child" },
                      e
                    )
                  )
                ),
                q(C - 1)
              ),
              a.default.createElement(
                "div",
                { className: "rfm-marquee", style: A },
                q(C)
              )
            )
          : null;
      });
      t.Z = o;
    },
    1742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
