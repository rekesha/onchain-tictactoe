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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBarConnect\": function() { return /* binding */ NavBarConnect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useEagerConnect */ \"./utils/useEagerConnect.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction NavBarConnect(param) {\n    let { currentAccountFunc  } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s1(()=>{\n        _s1();\n        (0,_utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_5__.useEagerConnect)();\n    }, \"0U4jnhnvDnTKEB6FRoL4ne+pi3s=\", false, function() {\n        return [\n            _utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_5__.useEagerConnect\n        ];\n    }), []);\n    //This handles chain changes or account changes on Metamask\n    try {\n        const { ethereum  } = window;\n        ethereum.on(\"accountsChanged\", async ()=>{\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Found account\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n            currentAccountFunc(accounts[0]);\n        });\n        ethereum.on(\"chainChanged\", async ()=>{\n            let chainId = await ethereum.request({\n                method: \"eth_chainId\"\n            });\n            console.log(\"Connected to chain: \", chainId);\n            const mumbaiChainId = \"0x13881\";\n            if (chainId !== mumbaiChainId) {\n                alert(\"You are not connected to Mumbai Testnet\");\n                return;\n            }\n        });\n    } catch (e) {\n    // console.log(\"Error while handling Metamask account or chain changed\", e);\n    }\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { active , account , library , connector , activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();\n    const connectWallet = async ()=>{\n        try {\n            const injected = await new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.InjectedConnector({\n                supportedChainIds: [\n                    1,\n                    3,\n                    4,\n                    5,\n                    42,\n                    80001\n                ]\n            });\n            console.log(\"Trying to connect wallet, injected = \", injected);\n            await activate(injected);\n            console.log(active, account, library, connector, activate, deactivate);\n            setCurrentAccount(account);\n            currentAccountFunc(account);\n        } catch (e) {\n            console.log(\"Error connecting to metamask\", e);\n        }\n    };\n    const disconnectWallet = async ()=>{\n        try {\n            await deactivate();\n            await setCurrentAccount(null);\n            await currentAccountFunc(null);\n        } catch (e) {\n            console.log(\"Error while disconnecting metamask\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n        bg: \"light\",\n        fixed: \"top\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                    href: \"#home\",\n                    children: \"Navbar\"\n                }, void 0, false, {\n                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                    className: \"justify-content-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                            href: \"#home\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 69,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                            href: \"#features\",\n                            children: \"Features\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 70,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                            href: \"#pricing\",\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 71,\n                            columnNumber: 6\n                        }, this),\n                        currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NavDropdown, {\n                            id: \"nav-dropdown-dark-example\",\n                            title: (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentAccount),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NavDropdown.Item, {\n                                href: \"#action/3.1\",\n                                onClick: disconnectWallet,\n                                children: \"Disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                                lineNumber: 74,\n                                columnNumber: 8\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 73,\n                            columnNumber: 7\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Item, {\n                            as: \"button\",\n                            className: \"btn btn-primary btn-sm\",\n                            onClick: connectWallet,\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 79,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                    lineNumber: 68,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n            lineNumber: 66,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n        lineNumber: 65,\n        columnNumber: 3\n    }, this);\n}\n_s(NavBarConnect, \"z6U5VaO7scndngkFUlZuO/Igp1E=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = NavBarConnect;\nvar _c;\n$RefreshReg$(_c, \"NavBarConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7aURBS2pFLDhEQUFDaEMscURBQVE7NEJBQUMyQyxJQUFHOzRCQUFTTixXQUFVOzRCQUF5QkssU0FBU2I7c0NBQWU7Ozs7O2dDQUdqRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS04sQ0FBQztHQTdFZXRCOztRQTRCdURMLDBEQUFZQTs7O0tBNUJuRUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXJDb25uZWN0LmpzPzRkMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBOYXZEcm9wZG93biwgTmF2LCBOYXZiYXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCI7XG5pbXBvcnQgdHJ1bmNhdGVFdGhBZGRyZXNzIGZyb20gXCJ0cnVuY2F0ZS1ldGgtYWRkcmVzc1wiO1xuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0IH0gZnJvbSBcIi4uL3V0aWxzL3VzZUVhZ2VyQ29ubmVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2QmFyQ29ubmVjdCh7IGN1cnJlbnRBY2NvdW50RnVuYyB9KSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0dXNlRWFnZXJDb25uZWN0KCk7XG5cdH0sIFtdKTtcblx0Ly9UaGlzIGhhbmRsZXMgY2hhaW4gY2hhbmdlcyBvciBhY2NvdW50IGNoYW5nZXMgb24gTWV0YW1hc2tcblx0dHJ5IHtcblx0XHRjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cdFx0ZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiRm91bmQgYWNjb3VudFwiLCBhY2NvdW50c1swXSk7XG5cdFx0XHRzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG5cdFx0XHRjdXJyZW50QWNjb3VudEZ1bmMoYWNjb3VudHNbMF0pO1xuXHRcdH0pO1xuXHRcdGV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGxldCBjaGFpbklkID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfY2hhaW5JZFwiIH0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gY2hhaW46IFwiLCBjaGFpbklkKTtcblx0XHRcdGNvbnN0IG11bWJhaUNoYWluSWQgPSBcIjB4MTM4ODFcIjtcblxuXHRcdFx0aWYgKGNoYWluSWQgIT09IG11bWJhaUNoYWluSWQpIHtcblx0XHRcdFx0YWxlcnQoXCJZb3UgYXJlIG5vdCBjb25uZWN0ZWQgdG8gTXVtYmFpIFRlc3RuZXRcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgaGFuZGxpbmcgTWV0YW1hc2sgYWNjb3VudCBvciBjaGFpbiBjaGFuZ2VkXCIsIGUpO1xuXHR9XG5cblx0Y29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgeyBhY3RpdmUsIGFjY291bnQsIGxpYnJhcnksIGNvbm5lY3RvciwgYWN0aXZhdGUsIGRlYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuXG5cdGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGluamVjdGVkID0gYXdhaXQgbmV3IEluamVjdGVkQ29ubmVjdG9yKHtcblx0XHRcdFx0c3VwcG9ydGVkQ2hhaW5JZHM6IFsxLCAzLCA0LCA1LCA0MiwgODAwMDFdLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlRyeWluZyB0byBjb25uZWN0IHdhbGxldCwgaW5qZWN0ZWQgPSBcIiwgaW5qZWN0ZWQpO1xuXHRcdFx0YXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQpO1xuXHRcdFx0Y29uc29sZS5sb2coYWN0aXZlLCBhY2NvdW50LCBsaWJyYXJ5LCBjb25uZWN0b3IsIGFjdGl2YXRlLCBkZWFjdGl2YXRlKTtcblx0XHRcdHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xuXHRcdFx0Y3VycmVudEFjY291bnRGdW5jKGFjY291bnQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3IgY29ubmVjdGluZyB0byBtZXRhbWFza1wiLCBlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGRpc2Nvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGRlYWN0aXZhdGUoKTtcblx0XHRcdGF3YWl0IHNldEN1cnJlbnRBY2NvdW50KG51bGwpO1xuXHRcdFx0YXdhaXQgY3VycmVudEFjY291bnRGdW5jKG51bGwpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZGlzY29ubmVjdGluZyBtZXRhbWFza1wiKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8TmF2YmFyIGJnPVwibGlnaHRcIiBmaXhlZD1cInRvcFwiPlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj5OYXZiYXI8L05hdmJhci5CcmFuZD5cblx0XHRcdFx0PE5hdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG5cdFx0XHRcdFx0PE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPkhvbWU8L05hdi5MaW5rPlxuXHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiI2ZlYXR1cmVzXCI+RmVhdHVyZXM8L05hdi5MaW5rPlxuXHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiI3ByaWNpbmdcIj5QcmljaW5nPC9OYXYuTGluaz5cblx0XHRcdFx0XHR7Y3VycmVudEFjY291bnQgPyAoXG5cdFx0XHRcdFx0XHQ8TmF2RHJvcGRvd24gaWQ9XCJuYXYtZHJvcGRvd24tZGFyay1leGFtcGxlXCIgdGl0bGU9e3RydW5jYXRlRXRoQWRkcmVzcyhjdXJyZW50QWNjb3VudCl9PlxuXHRcdFx0XHRcdFx0XHQ8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIiBvbkNsaWNrPXtkaXNjb25uZWN0V2FsbGV0fT5cblx0XHRcdFx0XHRcdFx0XHREaXNjb25uZWN0XG5cdFx0XHRcdFx0XHRcdDwvTmF2RHJvcGRvd24uSXRlbT5cblx0XHRcdFx0XHRcdDwvTmF2RHJvcGRvd24+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxOYXYuSXRlbSBhcz1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5cblx0XHRcdFx0XHRcdFx0Q29ubmVjdCBXYWxsZXRcblx0XHRcdFx0XHRcdDwvTmF2Lkl0ZW0+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9OYXY+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L05hdmJhcj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiTmF2RHJvcGRvd24iLCJOYXYiLCJOYXZiYXIiLCJ1c2VXZWIzUmVhY3QiLCJXZWIzUHJvdmlkZXIiLCJJbmplY3RlZENvbm5lY3RvciIsInRydW5jYXRlRXRoQWRkcmVzcyIsInVzZUVhZ2VyQ29ubmVjdCIsIk5hdkJhckNvbm5lY3QiLCJjdXJyZW50QWNjb3VudEZ1bmMiLCJldGhlcmV1bSIsIndpbmRvdyIsIm9uIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInNldEN1cnJlbnRBY2NvdW50IiwiY2hhaW5JZCIsIm11bWJhaUNoYWluSWQiLCJhbGVydCIsImUiLCJjdXJyZW50QWNjb3VudCIsImFjdGl2ZSIsImFjY291bnQiLCJsaWJyYXJ5IiwiY29ubmVjdG9yIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiY29ubmVjdFdhbGxldCIsImluamVjdGVkIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJkaXNjb25uZWN0V2FsbGV0IiwiYmciLCJmaXhlZCIsIkJyYW5kIiwiaHJlZiIsImNsYXNzTmFtZSIsIkxpbmsiLCJpZCIsInRpdGxlIiwiSXRlbSIsIm9uQ2xpY2siLCJhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBarConnect.js\n"));

/***/ })

});