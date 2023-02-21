"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavBarConnect.js":
/*!*************************************!*\
  !*** ./components/NavBarConnect.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBarConnect\": function() { return /* binding */ NavBarConnect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useEagerConnect */ \"./utils/useEagerConnect.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction NavBarConnect(param) {\n    let { currentAccountFunc  } = param;\n    _s();\n    //This handles chain changes or account changes on Metamask\n    try {\n        const { ethereum  } = window;\n        ethereum.on(\"accountsChanged\", async ()=>{\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Found account\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n            currentAccountFunc(accounts[0]);\n        });\n        ethereum.on(\"chainChanged\", async ()=>{\n            let chainId = await ethereum.request({\n                method: \"eth_chainId\"\n            });\n            console.log(\"Connected to chain: \", chainId);\n            const mumbaiChainId = \"0x13881\";\n            if (chainId !== mumbaiChainId) {\n                alert(\"You are not connected to Mumbai Testnet\");\n                return;\n            }\n        });\n    } catch (e) {\n    // console.log(\"Error while handling Metamask account or chain changed\", e);\n    }\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { active , account , library , connector , activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();\n    const connectWallet = async ()=>{\n        try {\n            const injected = await new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.InjectedConnector({\n                supportedChainIds: [\n                    1,\n                    3,\n                    4,\n                    5,\n                    42,\n                    80001\n                ]\n            });\n            console.log(\"Trying to connect wallet, injected = \", injected);\n            await activate(injected);\n            console.log(active, account, library, connector, activate, deactivate);\n            setCurrentAccount(account);\n            currentAccountFunc(account);\n        } catch (e) {\n            console.log(\"Error connecting to metamask\", e);\n        }\n    };\n    const disconnectWallet = async ()=>{\n        try {\n            await deactivate();\n            await setCurrentAccount(null);\n            await currentAccountFunc(null);\n        } catch (e) {\n            console.log(\"Error while disconnecting metamask\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n        bg: \"light\",\n        fixed: \"top\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                    href: \"#home\",\n                    children: \"Navbar\"\n                }, void 0, false, {\n                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                    lineNumber: 64,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                    className: \"justify-content-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                            href: \"#home\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 66,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                            href: \"#features\",\n                            children: \"Features\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 67,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                            href: \"#pricing\",\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, this),\n                        account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NavDropdown, {\n                            id: \"nav-dropdown-dark-example\",\n                            title: (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(account),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NavDropdown.Item, {\n                                href: \"#action/3.1\",\n                                onClick: disconnectWallet,\n                                children: \"Disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                                lineNumber: 71,\n                                columnNumber: 8\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 70,\n                            columnNumber: 7\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Item, {\n                            as: \"button\",\n                            className: \"btn btn-primary btn-sm\",\n                            onClick: connectWallet,\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 76,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                    lineNumber: 65,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n            lineNumber: 63,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n_s(NavBarConnect, \"5zIH191vbUsby/x9Ay3Iqu0rva0=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = NavBarConnect;\nvar _c;\n$RefreshReg$(_c, \"NavBarConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU7Ozs7O2dDQUdqRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS04sQ0FBQztHQTFFZXRCOztRQXlCdURMLDBEQUFZQTs7O0tBekJuRUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXJDb25uZWN0LmpzPzRkMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBOYXZEcm9wZG93biwgTmF2LCBOYXZiYXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCI7XG5pbXBvcnQgdHJ1bmNhdGVFdGhBZGRyZXNzIGZyb20gXCJ0cnVuY2F0ZS1ldGgtYWRkcmVzc1wiO1xuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0IH0gZnJvbSBcIi4uL3V0aWxzL3VzZUVhZ2VyQ29ubmVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2QmFyQ29ubmVjdCh7IGN1cnJlbnRBY2NvdW50RnVuYyB9KSB7XG5cdC8vVGhpcyBoYW5kbGVzIGNoYWluIGNoYW5nZXMgb3IgYWNjb3VudCBjaGFuZ2VzIG9uIE1ldGFtYXNrXG5cdHRyeSB7XG5cdFx0Y29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXHRcdGV0aGVyZXVtLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkZvdW5kIGFjY291bnRcIiwgYWNjb3VudHNbMF0pO1xuXHRcdFx0c2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuXHRcdFx0Y3VycmVudEFjY291bnRGdW5jKGFjY291bnRzWzBdKTtcblx0XHR9KTtcblx0XHRldGhlcmV1bS5vbihcImNoYWluQ2hhbmdlZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRsZXQgY2hhaW5JZCA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2NoYWluSWRcIiB9KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIGNoYWluOiBcIiwgY2hhaW5JZCk7XG5cdFx0XHRjb25zdCBtdW1iYWlDaGFpbklkID0gXCIweDEzODgxXCI7XG5cblx0XHRcdGlmIChjaGFpbklkICE9PSBtdW1iYWlDaGFpbklkKSB7XG5cdFx0XHRcdGFsZXJ0KFwiWW91IGFyZSBub3QgY29ubmVjdGVkIHRvIE11bWJhaSBUZXN0bmV0XCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGhhbmRsaW5nIE1ldGFtYXNrIGFjY291bnQgb3IgY2hhaW4gY2hhbmdlZFwiLCBlKTtcblx0fVxuXG5cdGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IHsgYWN0aXZlLCBhY2NvdW50LCBsaWJyYXJ5LCBjb25uZWN0b3IsIGFjdGl2YXRlLCBkZWFjdGl2YXRlIH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuXHRjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpbmplY3RlZCA9IGF3YWl0IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XG5cdFx0XHRcdHN1cHBvcnRlZENoYWluSWRzOiBbMSwgMywgNCwgNSwgNDIsIDgwMDAxXSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJUcnlpbmcgdG8gY29ubmVjdCB3YWxsZXQsIGluamVjdGVkID0gXCIsIGluamVjdGVkKTtcblx0XHRcdGF3YWl0IGFjdGl2YXRlKGluamVjdGVkKTtcblx0XHRcdGNvbnNvbGUubG9nKGFjdGl2ZSwgYWNjb3VudCwgbGlicmFyeSwgY29ubmVjdG9yLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSk7XG5cdFx0XHRzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcblx0XHRcdGN1cnJlbnRBY2NvdW50RnVuYyhhY2NvdW50KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcgdG8gbWV0YW1hc2tcIiwgZSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBkaXNjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBkZWFjdGl2YXRlKCk7XG5cdFx0XHRhd2FpdCBzZXRDdXJyZW50QWNjb3VudChudWxsKTtcblx0XHRcdGF3YWl0IGN1cnJlbnRBY2NvdW50RnVuYyhudWxsKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGRpc2Nvbm5lY3RpbmcgbWV0YW1hc2tcIik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PE5hdmJhciBiZz1cImxpZ2h0XCIgZml4ZWQ9XCJ0b3BcIj5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+TmF2YmFyPC9OYXZiYXIuQnJhbmQ+XG5cdFx0XHRcdDxOYXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuXHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXYuTGluaz5cblx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIiNmZWF0dXJlc1wiPkZlYXR1cmVzPC9OYXYuTGluaz5cblx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIiNwcmljaW5nXCI+UHJpY2luZzwvTmF2Lkxpbms+XG5cdFx0XHRcdFx0e2FjY291bnQgPyAoXG5cdFx0XHRcdFx0XHQ8TmF2RHJvcGRvd24gaWQ9XCJuYXYtZHJvcGRvd24tZGFyay1leGFtcGxlXCIgdGl0bGU9e3RydW5jYXRlRXRoQWRkcmVzcyhhY2NvdW50KX0+XG5cdFx0XHRcdFx0XHRcdDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMVwiIG9uQ2xpY2s9e2Rpc2Nvbm5lY3RXYWxsZXR9PlxuXHRcdFx0XHRcdFx0XHRcdERpc2Nvbm5lY3Rcblx0XHRcdFx0XHRcdFx0PC9OYXZEcm9wZG93bi5JdGVtPlxuXHRcdFx0XHRcdFx0PC9OYXZEcm9wZG93bj5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PE5hdi5JdGVtIGFzPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9PlxuXHRcdFx0XHRcdFx0XHRDb25uZWN0IFdhbGxldFxuXHRcdFx0XHRcdFx0PC9OYXYuSXRlbT5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L05hdj5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvTmF2YmFyPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJOYXZEcm9wZG93biIsIk5hdiIsIk5hdmJhciIsInVzZVdlYjNSZWFjdCIsIldlYjNQcm92aWRlciIsIkluamVjdGVkQ29ubmVjdG9yIiwidHJ1bmNhdGVFdGhBZGRyZXNzIiwidXNlRWFnZXJDb25uZWN0IiwiTmF2QmFyQ29ubmVjdCIsImN1cnJlbnRBY2NvdW50RnVuYyIsImV0aGVyZXVtIiwid2luZG93Iiwib24iLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwic2V0Q3VycmVudEFjY291bnQiLCJjaGFpbklkIiwibXVtYmFpQ2hhaW5JZCIsImFsZXJ0IiwiZSIsImN1cnJlbnRBY2NvdW50IiwiYWN0aXZlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjb25uZWN0V2FsbGV0IiwiaW5qZWN0ZWQiLCJzdXBwb3J0ZWRDaGFpbklkcyIsImRpc2Nvbm5lY3RXYWxsZXQiLCJiZyIsImZpeGVkIiwiQnJhbmQiLCJocmVmIiwiY2xhc3NOYW1lIiwiTGluayIsImlkIiwidGl0bGUiLCJJdGVtIiwib25DbGljayIsImFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBarConnect.js\n"));

/***/ })

});