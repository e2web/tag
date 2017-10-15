(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"), require("Vuex"), require("VueRouter"), require("ELEMENT"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue", "Vuex", "VueRouter", "ELEMENT"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("Vue"), require("Vuex"), require("VueRouter"), require("ELEMENT")) : factory(root["Vue"], root["Vuex"], root["VueRouter"], root["ELEMENT"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_17__) {
return webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "Vue"
var external__Vue_ = __webpack_require__(2);
var external__Vue__default = /*#__PURE__*/__webpack_require__.n(external__Vue_);

// EXTERNAL MODULE: external "Vuex"
var external__Vuex_ = __webpack_require__(5);
var external__Vuex__default = /*#__PURE__*/__webpack_require__.n(external__Vuex_);

// CONCATENATED MODULE: ./src/webapp/store.ts
external__Vue__default.a.use(external__Vuex__default.a);var state={version:null};/* harmony default export */ var store = (new external__Vuex__default.a.Store({state:state,mutations:{update:function(a,b){return a.version=b.version}},actions:{refresh:function(a){var b=a.commit;return fetch('/api/version').then(function(a){b('update',a.data)}).catch(function(a){console.error(a)})}}}));
// EXTERNAL MODULE: external "VueRouter"
var external__VueRouter_ = __webpack_require__(6);
var external__VueRouter__default = /*#__PURE__*/__webpack_require__.n(external__VueRouter_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib?presets[]=babili!./node_modules/vue-ts-loader?transpileOnly=true&configFile=./src/webapp/tsconfig.json!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/webapp/components/home.vue
/* harmony default export */ var home = ({mounted:function(){},data:function(){return{radio:'1'}}});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f059516","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/webapp/components/home.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "layout-column" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "feature-list" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "feature" }, [
          _c("svg", { staticClass: "icon icon-git-branch" }, [
            _c("use", {
              attrs: {
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xlink:href": "#icon-git-branch"
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(2)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "feature" }, [
          _c("svg", { staticClass: "icon icon-git-pull-request right" }, [
            _c("use", {
              attrs: {
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xlink:href": "#icon-git-pull-request"
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(3)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "feature" }, [
          _c("svg", { staticClass: "icon icon-git-merge" }, [
            _c("use", {
              attrs: {
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xlink:href": "#icon-git-merge"
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(4)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "setup" }, [
      _c("div", { staticClass: "container" }, [
        _c("h2", [_vm._v("Easy Setup")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Best part is it is so easy to setup for your account or organization."
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "steps" }, [
          _c("div", { staticClass: "step" }, [
            _c("svg", { staticClass: "icon number icon-number" }, [
              _c("use", {
                attrs: {
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  "xlink:href": "#icon-number"
                }
              })
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v("Install the free WaffleBot Integration in GitHub")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "step" }, [
            _c("svg", { staticClass: "icon number icon-number2" }, [
              _c("use", {
                attrs: {
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  "xlink:href": "#icon-number2"
                }
              })
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                ' Name your GitHub Project columns "Ready", "In Progress", "Needs Review", and "Done"'
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "step" }, [
            _c("svg", { staticClass: "icon number icon-number3" }, [
              _c("use", {
                attrs: {
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  "xlink:href": "#icon-number3"
                }
              })
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Get to work!")])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(5)
    ]),
    _vm._v(" "),
    _vm._m(6),
    _vm._v(" "),
    _vm._m(7),
    _vm._v(" "),
    _c(
      "svg",
      {
        staticStyle: {
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden"
        },
        attrs: {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }
      },
      [
        _c("defs", [
          _c(
            "symbol",
            { attrs: { id: "icon-git-branch", viewBox: "0 0 20 32" } },
            [
              _c("title", [_vm._v("git-branch")]),
              _vm._v(" "),
              _c("path", {
                staticClass: "path1",
                attrs: {
                  d:
                    "M16 6c-2.219 0-4 1.781-4 4 0 1.469 0.813 2.75 2 3.438v0.563c0 2-2 4-4 4-1.656 0-2.969 0.344-4 0.906v-9.469c1.188-0.688 2-1.969 2-3.438 0-2.219-1.781-4-4-4s-4 1.781-4 4c0 1.469 0.813 2.75 2 3.438v13.094c-1.188 0.688-2 1.969-2 3.438 0 2.219 1.781 4 4 4s4-1.781 4-4c0-1.063-0.406-2-1.063-2.719 0.594-0.719 1.531-1.281 3.063-1.281 4 0 8-4 8-8v-0.563c1.188-0.688 2-1.969 2-3.438 0-2.219-1.781-4-4-4zM4 4c1.094 0 2 0.906 2 2s-0.906 2-2 2-2-0.906-2-2 0.906-2 2-2zM4 28c-1.094 0-2-0.906-2-2s0.906-2 2-2 2 0.906 2 2-0.906 2-2 2zM16 12c-1.094 0-2-0.906-2-2s0.906-2 2-2 2 0.906 2 2-0.906 2-2 2z"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "symbol",
            { attrs: { id: "icon-git-merge", viewBox: "0 0 24 32" } },
            [
              _c("title", [_vm._v("git-merge")]),
              _vm._v(" "),
              _c("path", {
                staticClass: "path1",
                attrs: {
                  d:
                    "M20 14c-1.488 0-2.77 0.822-3.457 2.028-0.18-0.013-0.355-0.028-0.543-0.028-4.096 0-7.982-3.12-9.4-6.982 0.853-0.733 1.4-1.808 1.4-3.018 0-2.208-1.792-4-4-4s-4 1.792-4 4c0 1.476 0.808 2.752 2 3.446v13.108c-1.192 0.693-2 1.969-2 3.445 0 2.207 1.792 4 4 4s4-1.793 4-4c0-1.477-0.808-2.752-2-3.445v-7.196c2.63 2.782 6.262 4.642 10 4.642 0.199 0 0.363-0.014 0.543-0.020 0.691 1.201 1.973 2.020 3.457 2.020 2.207 0 4-1.793 4-4s-1.793-4-4-4zM4 28c-1.103 0-2-0.895-2-2 0-1.104 0.897-2 2-2 1.106 0 2 0.896 2 2 0 1.105-0.894 2-2 2zM4 8c-1.103 0-2-0.894-2-2s0.897-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM20 20c-1.104 0-2-0.895-2-2s0.896-2 2-2c1.105 0 2 0.894 2 2s-0.895 2-2 2z"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "symbol",
            { attrs: { id: "icon-git-pull-request", viewBox: "0 0 24 32" } },
            [
              _c("title", [_vm._v("git-pull-request")]),
              _vm._v(" "),
              _c("path", {
                staticClass: "path1",
                attrs: {
                  d:
                    "M22 22.563s0-9.563 0-12.563-3-6-6-6c-2 0-2 0-2 0v-4l-6 6 6 6v-4s1 0 2 0 2 1 2 2 0 12.563 0 12.563c-1.188 0.688-2 1.969-2 3.438 0 2.219 1.781 4 4 4s4-1.781 4-4c0-1.469-0.813-2.75-2-3.438zM20 28c-1.094 0-2-0.906-2-2s0.906-2 2-2 2 0.906 2 2-0.906 2-2 2zM4 2c-2.219 0-4 1.781-4 4 0 1.469 0.813 2.75 2 3.438v13.094c-1.188 0.688-2 1.969-2 3.438 0 2.219 1.781 4 4 4s4-1.781 4-4c0-1.469-0.813-2.75-2-3.438v-13.094c1.188-0.688 2-1.969 2-3.438 0-2.219-1.781-4-4-4zM4 28c-1.094 0-2-0.906-2-2s0.906-2 2-2 2 0.906 2 2-0.906 2-2 2zM4 8c-1.094 0-2-0.906-2-2s0.906-2 2-2 2 0.906 2 2-0.906 2-2 2z"
                }
              })
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "svg",
      {
        staticStyle: {
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden"
        },
        attrs: {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }
      },
      [
        _c("defs", [
          _c("symbol", { attrs: { id: "icon-number", viewBox: "0 0 32 32" } }, [
            _c("title", [_vm._v("number")]),
            _vm._v(" "),
            _c("path", {
              staticClass: "path1",
              attrs: {
                d:
                  "M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM16 27c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11zM14.828 12.709c-0.589 0.458-1.134 0.77-1.635 0.934v1.742c0.953-0.314 1.781-0.799 2.484-1.455v7.111h2.047v-10h-1.686c-0.218 0.612-0.622 1.209-1.21 1.668z"
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "symbol",
            { attrs: { id: "icon-number2", viewBox: "0 0 32 32" } },
            [
              _c("title", [_vm._v("number2")]),
              _vm._v(" "),
              _c("path", {
                staticClass: "path1",
                attrs: {
                  d:
                    "M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM16 27c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11zM17.564 17.777c0.607-0.556 1.027-0.982 1.26-1.278 0.351-0.447 0.607-0.875 0.77-1.282 0.161-0.408 0.242-0.838 0.242-1.289 0-0.793-0.283-1.457-0.848-1.99s-1.342-0.8-2.331-0.8c-0.902 0-1.654 0.23-2.256 0.69s-0.96 1.218-1.073 2.275l1.914 0.191c0.036-0.56 0.173-0.96 0.41-1.201s0.555-0.361 0.956-0.361c0.405 0 0.723 0.115 0.952 0.345 0.23 0.23 0.346 0.56 0.346 0.988 0 0.387-0.133 0.779-0.396 1.176-0.195 0.287-0.727 0.834-1.592 1.64-1.076 0.998-1.796 1.799-2.16 2.403s-0.584 1.242-0.656 1.917h6.734v-1.781h-3.819c0.101-0.173 0.231-0.351 0.394-0.534 0.16-0.183 0.545-0.552 1.153-1.109z"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "symbol",
            { attrs: { id: "icon-number3", viewBox: "0 0 32 32" } },
            [
              _c("title", [_vm._v("number3")]),
              _vm._v(" "),
              _c("path", {
                staticClass: "path1",
                attrs: {
                  d:
                    "M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM16 27c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11zM17.248 15.219c0.963-0.525 1.443-1.228 1.443-2.108 0-0.621-0.234-1.177-0.705-1.67-0.571-0.602-1.33-0.903-2.275-0.903-0.553 0-1.052 0.104-1.497 0.311s-0.792 0.493-1.042 0.855c-0.248 0.362-0.435 0.847-0.559 1.454l1.773 0.302c0.051-0.439 0.193-0.772 0.426-1.001s0.516-0.343 0.845-0.343c0.334 0 0.603 0.101 0.804 0.301 0.201 0.201 0.302 0.471 0.302 0.809 0 0.398-0.138 0.716-0.413 0.957-0.273 0.24-0.673 0.353-1.195 0.339l-0.213 1.565c0.344-0.096 0.638-0.144 0.885-0.144 0.374 0 0.691 0.141 0.952 0.423s0.391 0.665 0.391 1.147c0 0.509-0.136 0.914-0.407 1.214s-0.607 0.45-1.004 0.45c-0.37 0-0.686-0.125-0.945-0.375-0.261-0.25-0.42-0.612-0.479-1.086l-1.859 0.226c0.096 0.843 0.442 1.525 1.040 2.047s1.35 0.782 2.258 0.782c0.957 0 1.758-0.309 2.401-0.929s0.965-1.368 0.965-2.247c0-0.605-0.172-1.122-0.515-1.55-0.346-0.427-0.804-0.703-1.377-0.826z"
                }
              })
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "layout-row hero" }, [
      _c("img", { attrs: { src: __webpack_require__(10) } }),
      _vm._v(" "),
      _c("div", { staticClass: "layout-column layout-align-center-center" }, [
        _c("h3", { staticStyle: { "font-size": "35px" } }, [
          _vm._v("Say hello to")
        ]),
        _vm._v(" "),
        _c("h1", { staticStyle: { "font-size": "82px" } }, [
          _vm._v("tag365_bot")
        ]),
        _vm._v(" "),
        _c("h3", { staticStyle: { "font-size": "38px" } }, [
          _vm._v("Attendance system in your pocket")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "overview" }, [
      _c("h2", [_vm._v("WaffleBot updates your GitHub Project for you.")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n          GitHub’s new Project feature is pretty awesome, but you still have to manually track your work.\n          WaffleBot automatically moves your Issues and Pull Requests on your GitHub Project,\n          based on common actions that we interpret as work that’s in progress. By the way, it's free!\n        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "feature-text" }, [
      _c("h3", [_vm._v("Create a Branch")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Wafflebot will move the issue referenced in the branch name to the In Progress column."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "feature-text" }, [
      _c("h3", [_vm._v("Create a PR")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Wafflebot will move the issue referenced in the PR to the Needs Review column."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "feature-text" }, [
      _c("h3", [_vm._v("Merge PR")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Wafflebot will move the issue referenced in the merged PR to the Done column."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("link", {
        attrs: {
          href: "//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css",
          rel: "stylesheet",
          type: "text/css"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "second-cta-form", attrs: { id: "mc_embed_signup" } },
        [
          _c(
            "form",
            {
              staticClass: "validate",
              attrs: {
                action:
                  "//waffle.us13.list-manage.com/subscribe/post?u=acdbfaa3d60219505630ceb30&id=fe044950b4",
                method: "post",
                id: "mc-embedded-subscribe-form",
                name: "mc-embedded-subscribe-form",
                target: "_blank",
                novalidate: ""
              }
            },
            [
              _c("div", { attrs: { id: "mc_embed_signup_scroll" } }, [
                _c("input", {
                  staticClass: "email input",
                  attrs: {
                    type: "email",
                    value: "",
                    name: "EMAIL",
                    id: "mce-EMAIL",
                    placeholder: "email address",
                    required: ""
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: { position: "absolute", left: "-5000px" },
                    attrs: { "aria-hidden": "true" }
                  },
                  [
                    _c("input", {
                      attrs: {
                        type: "text",
                        name: "b_acdbfaa3d60219505630ceb30_fe044950b4",
                        tabindex: "-1",
                        value: ""
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "clear" }, [
                  _c("input", {
                    staticClass: "button primary",
                    attrs: {
                      type: "submit",
                      value: "Coming Soon - Notify Me!",
                      name: "subscribe",
                      id: "mc-embedded-subscribe"
                    }
                  })
                ])
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "waffle-user" }, [
      _c("div", { staticClass: "container" }, [
        _c("h2", [_vm._v("Using Waffle’s board to track your work?")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n        WaffleBot works seamlessly for you too, today!\n        Just install the integration and you’re good to go.\n\n      "
          )
        ]),
        _c(
          "div",
          { staticClass: "container", staticStyle: { "margin-top": "30px" } },
          [
            _c(
              "a",
              {
                staticClass: "button primary",
                attrs: { href: "https://github.com/integration/wafflebot" }
              },
              [_vm._v("Install Now")]
            )
          ]
        ),
        _vm._v(" "),
        _c("p")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("a", { attrs: { href: "https://waffle.io", target: "_blank" } }, [
        _c("i", { staticClass: "ico-logo waffle-icon" })
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "awesome-quote" }, [
        _c("q", [_vm._v("A waffle is like a pancake with a syrup trap.")]),
        _vm._v(" - Mitch Hedberg")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "fine-print" }, [
        _vm._v("\n      © 2017 HR Cloud Sdn Bhd.\n    ")
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_home = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f059516", esExports)
  }
}
// CONCATENATED MODULE: ./src/webapp/components/home.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(7)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  home,
  components_home,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/webapp/components/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f059516", Component.options)
  } else {
    hotAPI.reload("data-v-5f059516", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var webapp_components_home = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib?presets[]=babili!./node_modules/vue-ts-loader?transpileOnly=true&configFile=./src/webapp/tsconfig.json!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/webapp/components/404.vue
/* harmony default export */ var _04 = ({});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-75e7ea5e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/webapp/components/404.vue
var _04_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "flex layout-column layout-align-center-center" },
    [
      _c("h1", [_vm._v("404 Route Not Found")]),
      _vm._v(" "),
      _c("router-link", { staticClass: "menu-item", attrs: { to: "/" } }, [
        _vm._v("Back to Home")
      ])
    ],
    1
  )
}
var _04_staticRenderFns = []
_04_render._withStripped = true
var _04_esExports = { render: _04_render, staticRenderFns: _04_staticRenderFns }
/* harmony default export */ var components_404 = (_04_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75e7ea5e", _04_esExports)
  }
}
// CONCATENATED MODULE: ./src/webapp/components/404.vue
var _04_disposed = false
var _04_normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* template functional */
  var _04___vue_template_functional__ = false
/* styles */
var _04___vue_styles__ = null
/* scopeId */
var _04___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var _04___vue_module_identifier__ = null
var _04_Component = _04_normalizeComponent(
  _04,
  components_404,
  _04___vue_template_functional__,
  _04___vue_styles__,
  _04___vue_scopeId__,
  _04___vue_module_identifier__
)
_04_Component.options.__file = "src/webapp/components/404.vue"
if (_04_Component.esModule && Object.keys(_04_Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75e7ea5e", _04_Component.options)
  } else {
    hotAPI.reload("data-v-75e7ea5e", _04_Component.options)
' + '  }
  module.hot.dispose(function (data) {
    _04_disposed = true
  })
})()}

/* harmony default export */ var webapp_components_404 = (_04_Component.exports);

// CONCATENATED MODULE: ./src/webapp/routes.ts
external__Vue__default.a.use(external__VueRouter__default.a);var routes=[{path:'/',component:webapp_components_home},{path:'*',component:webapp_components_404}];/* harmony default export */ var webapp_routes = (new external__VueRouter__default.a({mode:'history',routes:routes}));
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?presets[]=babili!./node_modules/vue-ts-loader?transpileOnly=true&configFile=./src/webapp/tsconfig.json!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/webapp/layouts/app.vue
/* harmony default export */ var app = ({data:function(){return{activeIndex:'1',activeIndex2:'1'}},methods:{handleSelect:function(a,b){console.log(a,b)}}});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f05d3f9","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/webapp/layouts/app.vue
var app_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [_c("router-view")], 1)
}
var app_staticRenderFns = []
app_render._withStripped = true
var app_esExports = { render: app_render, staticRenderFns: app_staticRenderFns }
/* harmony default export */ var layouts_app = (app_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f05d3f9", app_esExports)
  }
}
// CONCATENATED MODULE: ./src/webapp/layouts/app.vue
var app_disposed = false
function app_injectStyle (ssrContext) {
  if (app_disposed) return
  __webpack_require__(11)
  __webpack_require__(13)
  __webpack_require__(15)
}
var app_normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* template functional */
  var app___vue_template_functional__ = false
/* styles */
var app___vue_styles__ = app_injectStyle
/* scopeId */
var app___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var app___vue_module_identifier__ = null
var app_Component = app_normalizeComponent(
  app,
  layouts_app,
  app___vue_template_functional__,
  app___vue_styles__,
  app___vue_scopeId__,
  app___vue_module_identifier__
)
app_Component.options.__file = "src/webapp/layouts/app.vue"
if (app_Component.esModule && Object.keys(app_Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f05d3f9", app_Component.options)
  } else {
    hotAPI.reload("data-v-5f05d3f9", app_Component.options)
' + '  }
  module.hot.dispose(function (data) {
    app_disposed = true
  })
})()}

/* harmony default export */ var webapp_layouts_app = (app_Component.exports);

// EXTERNAL MODULE: external "ELEMENT"
var external__ELEMENT_ = __webpack_require__(17);
var external__ELEMENT__default = /*#__PURE__*/__webpack_require__.n(external__ELEMENT_);

// CONCATENATED MODULE: ./src/webapp/main.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return main_app; });
external__Vue__default.a.use(external__ELEMENT__default.a);var main_app=new external__Vue__default.a({el:'#app',router:webapp_routes,store:store,components:{App:webapp_layouts_app},render:function(a){return a('app')}});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0e23cb36", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f059516\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f059516\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo.033aab4.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("de9a8142", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f05d3f9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./app.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f05d3f9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.menu-item {\n  padding-right: 16px;\n}\n\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("9d97fc7a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f05d3f9\",\"scoped\":false,\"hasInlineConfig\":false}!./flex.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f05d3f9\",\"scoped\":false,\"hasInlineConfig\":false}!./flex.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n@charset \"utf-8\";\n.flex {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  box-sizing: border-box;\n}\n.flex-grow {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 100%;\n  flex: 1 1 100%;\n  box-sizing: border-box;\n}\n.flex-initial {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  flex: 0 1 auto;\n  box-sizing: border-box;\n}\n.flex-auto {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n.flex-none {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n.flex-noshrink {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0 auto;\n  flex: 1 0 auto;\n  box-sizing: border-box;\n}\n.flex-nogrow {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  flex: 0 1 auto;\n  box-sizing: border-box;\n}\n.layout-column > .flex {\n  min-height: 0;\n}\n.layout-column, .layout-row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.layout-column {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n.layout-row {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n.layout-align,\n.layout-align-start-stretch {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n  -webkit-align-content: stretch;\n  align-content: stretch;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  align-items: stretch;\n}\n.layout-align-start,\n.layout-align-start-start,\n.layout-align-start-center,\n.layout-align-start-end,\n.layout-align-start-stretch {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n}\n.layout-align-center,\n.layout-align-center-start,\n.layout-align-center-center,\n.layout-align-center-end,\n.layout-align-center-stretch {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n.layout-align-end,\n.layout-align-end-start,\n.layout-align-end-center,\n.layout-align-end-end,\n.layout-align-end-stretch {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n}\n.layout-align-space-around,\n.layout-align-space-around-center,\n.layout-align-space-around-start,\n.layout-align-space-around-end,\n.layout-align-space-around-stretch {\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n}\n.layout-align-space-between,\n.layout-align-space-between-center,\n.layout-align-space-between-start,\n.layout-align-space-between-end,\n.layout-align-space-between-stretch {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}\n.layout-align-start-start,\n.layout-align-center-start,\n.layout-align-end-start,\n.layout-align-space-between-start,\n.layout-align-space-around-start {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n  -webkit-align-content: flex-start;\n  align-content: flex-start;\n}\n.layout-align-start-center,\n.layout-align-center-center,\n.layout-align-end-center,\n.layout-align-space-between-center,\n.layout-align-space-around-center {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-align-content: center;\n  align-content: center;\n  max-width: 100%;\n}\n.layout-align-start-center > *,\n.layout-align-center-center > *,\n.layout-align-end-center > *,\n.layout-align-space-between-center > *,\n.layout-align-space-around-center > * {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.layout-align-start-end,\n.layout-align-center-end,\n.layout-align-end-end,\n.layout-align-space-between-end,\n.layout-align-space-around-end {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n  align-items: flex-end;\n  -webkit-align-content: flex-end;\n  align-content: flex-end;\n}\n.layout-align-start-stretch,\n.layout-align-center-stretch,\n.layout-align-end-stretch,\n.layout-align-space-between-stretch,\n.layout-align-space-around-stretch {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  align-items: stretch;\n  -webkit-align-content: stretch;\n  align-content: stretch;\n}\n.layout-padding-sm > * {\n  padding: 4px;\n}\n.layout-padding > * {\n  padding: 8px;\n}\n.layout-padding-lg > * {\n  padding: 16px;\n}\n.layout-margin-sm > * {\n  margin: 4px;\n}\n.layout-margin > * {\n  margin: 8px;\n}\n.layout-margin-lg > * {\n  margin: 16px;\n}\n.layout-wrap {\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.layout-nowrap {\n  -webkit-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n.layout-fill {\n  margin: 0;\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0bc8f996", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f05d3f9\",\"scoped\":false,\"hasInlineConfig\":false}!./site.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f05d3f9\",\"scoped\":false,\"hasInlineConfig\":false}!./site.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\nhtml {\n  height: 100%;\n}\nbody {\n  color: #343434;\n  font: normal 16px 'Open Sans', sans-serif;\n  margin: 0;\n  min-height: 100%;\n}\nh1,h2,h3,h4,h5 {\n  font-weight: normal;\n}\n.preview .content {\n  min-height: calc(100vh - 200px);\n}\n.hero {\n  color: white;\n  background-color: #405f81;\n  font-family: 'Roboto', 'Open Sans', sans-serif;\n  text-align: center;\n  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);\n  -webkit-font-smoothing: antialiased;\n}\n.hero-ct {\n  background: url(/resources/images/hero-image.jpg) 0 0 no-repeat;\n  background-size: cover;\n  margin: 0;\n  width: 100%;\n}\n.hero-text-ct {\n  padding: 170px 0 92px 310px;\n}\n.preview .hero-text-ct {\n  padding: 177px 0 231px 446px;\n}\n.hero-text {\n  display: block;\n}\n.intro {\n  display: block;\n  font-size: 35px;\n}\n.hero-heading {\n  font-size: 82px;\n  font-weight: normal;\n  margin: 0;\n}\n.caption {\n  font-size: 38px;\n  margin: 5px 0 45px 5px;\n}\n.hero .button {\n  box-shadow: 1px 1px 4px #222;\n}\n.mini-hero {\n  background: #424242;\n  display: none;\n  padding-bottom: 30px;\n}\nfooter {\n  background: #424242;\n  color: white;\n  text-align: center;\n}\n.preview footer {\n  background: white;\n  color: #343434;\n  height: 200px;\n}\n.waffle-icon {\n  color: white;\n  font-size: 80px;\n  padding-top: 30px;\n}\n.preview .waffle-icon {\n  color: #343434;\n}\n.awesome-quote {\n  padding-bottom: 10px;\n}\nq {\n  font-size: 20px;\n}\n.fine-print {\n  color: #999;\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n.button {\n  background: #f8c22f;\n  border-radius: 5px;\n  box-shadow: 0px 1px 2px #222;\n  color: #222;\n  cursor: pointer;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 22px;\n  padding: 12px 50px 15px;\n  text-decoration: none;\n  text-shadow: none;\n  transition: all 300ms;\n}\n.button:hover, .button:focus {\n  background: #f7bb16;\n}\n.button:active {\n  background: #ecaf08;\n}\n@media (max-width:1100px) {\n.hero-heading {\n    font-size: 60px;\n}\n.caption {\n    font-size: 28px;\n}\n.sub-caption {\n    font-size: 18px;\n}\n.hero-text-ct {\n    padding: 8em 0 5em 20em;\n}\n.preview .hero-text-ct {\n    padding: 9em 0 13em 20em;\n}\n.button {\n    padding: 8px 50px 11px;\n}\n}\n@media (max-width:826px) {\n.preview .hero-text-ct {\n    padding: 7em 0 7em 20em;\n}\n}\n@media (max-width:698px) {\n.hero-text {\n    display: none;\n}\n.preview .hero-ct {\n    background-position: -130px;\n}\n.hero-text-ct {\n    padding: 229px 0 95px 172px;\n}\n.preview .hero-text-ct {\n    padding: 241px 0 50px 262px;\n}\n.caption {\n    font-size: 32px;\n}\n.sub-caption {\n    font-size: 20px;\n    padding: 15px 26px 50px;\n}\n.mini-hero {\n    display: block;\n}\n.button {\n    padding: 10px 35px 13px;\n}\n}\n@media (max-width:475px) {\n.hero-text-ct {\n    padding-top: 190px;\n}\n.preview .hero-text-ct {\n    padding: 28px 0 20px 150px;\n}\n}\n.container {\n  margin: 0 auto;\n  max-width: 1000px;\n  padding: 0 40px;\n}\n.overview {\n  font-size: 18px;\n  padding: 70px 0 90px;\n  text-align: center;\n}\nh2 {\n  font-size: 34px;\n  margin-bottom: 0;\n}\nh3 {\n  font-size: 28px;\n  margin-bottom: 0;\n}\n.feature {\n  display: flex;\n  display: -ms-flexbox;\n  flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  padding-bottom: 120px;\n}\n.right {\n  order: 2;\n}\n.feature-text {\n  flex: 1 0 350px;\n  -ms-flex: 1 0 350px;\n  padding-bottom: 25px;\n}\n.feature-img {\n  width: 352px;\n  height: 25px;\n}\n.setup {\n  background: #f8f8f8;\n  font-size: 18px;\n  padding: 50px;\n  text-align: center;\n}\nul {\n  list-style-type: none;\n}\n.icon-git-branch {\n  fill: #408dc0;\n}\n.icon-git-pull-request {\n  fill: #77c644;\n}\n.icon-git-merge {\n  fill: #695494;\n}\n@media (max-width:830px) {\n.feature {\n    text-align: center;\n}\n.icon {\n    margin: 0 auto;\n}\n.right {\n    order: 1;\n}\n.feature-text {\n    order: 2;\n}\n}\n.steps {\n  margin: 60px auto 90px;\n  max-width: 735px;\n  text-align: left;\n}\n.step {\n  display: flex;\n  display: -ms-flexbox;\n  margin-bottom: 45px;\n}\n.number {\n  height: 70px;\n  flex: 0 0 70px;\n  -ms-flex: 0 0 70px;\n  margin-right: 10px;\n  width: auto;\n}\n@media (max-width:835px) {\n.steps {\n    text-align: center;\n}\n.step {\n    display: block;\n}\n.number {\n    height: 100px;\n    flex: 0 0 100px;\n    -ms-flex: 0 0 100px;\n    width: 100%;\n}\n}\n.waffle-user {\n  background: #ececec;\n  text-align: center;\n  padding: 50px;\n}\n@media (max-width:530px) {\n.container {\n    padding: 0 10px;\n}\n}\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
],[4]);
});