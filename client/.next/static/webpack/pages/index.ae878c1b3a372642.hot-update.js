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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBarConnect\": function() { return /* binding */ NavBarConnect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction NavBarConnect() {\n    _s();\n    //This handles chain changes or account changes on Metamask\n    try {\n        const { ethereum  } = window;\n        ethereum.on(\"chainChanged\", async ()=>{\n            let chainId = await ethereum.request({\n                method: \"eth_chainId\"\n            });\n            console.log(\"Connected to chain: \", chainId);\n            const mumbaiChainId = \"0x13881\";\n            if (chainId !== mumbaiChainId) {\n                alert(\"You are not connected to Mumbai Testnet\");\n                return;\n            }\n        });\n    } catch (e) {\n    // console.log(\"Error while handling Metamask account or chain changed\", e);\n    }\n    const { active , account , library , connector , activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();\n    const connectWallet = async ()=>{\n        try {\n            const injected = await new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.InjectedConnector({\n                supportedChainIds: [\n                    1,\n                    3,\n                    4,\n                    5,\n                    42,\n                    80001\n                ]\n            });\n            console.log(\"Trying to connect wallet, injected = \", injected);\n            await activate(injected);\n        } catch (e) {\n            console.log(\"Error connecting to metamask\", e);\n        }\n    };\n    const disconnectWallet = async ()=>{\n        try {\n            await deactivate();\n        } catch (e) {\n            console.log(\"Error while disconnecting metamask\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {\n        bg: \"light\",\n        fixed: \"top\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                    href: \"#home\",\n                    children: \"Navbar\"\n                }, void 0, false, {\n                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {\n                    className: \"justify-content-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                            href: \"#home\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 53,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                            href: \"#features\",\n                            children: \"Features\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 54,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                            href: \"#pricing\",\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, this),\n                        account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NavDropdown, {\n                            id: \"nav-dropdown-dark-example\",\n                            title: (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(account),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NavDropdown.Item, {\n                                href: \"#action/3.1\",\n                                onClick: disconnectWallet,\n                                children: \"Disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                                lineNumber: 58,\n                                columnNumber: 8\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 57,\n                            columnNumber: 7\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Item, {\n                            as: \"button\",\n                            className: \"btn btn-primary btn-sm\",\n                            onClick: connectWallet,\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                            lineNumber: 63,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n            lineNumber: 50,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/NavBarConnect.js\",\n        lineNumber: 49,\n        columnNumber: 3\n    }, this);\n}\n_s(NavBarConnect, \"3xXgvxT7IjmJicz07oB2rdzZCWg=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = NavBarConnect;\nvar _c;\n$RefreshReg$(_c, \"NavBarConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhckNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDMEI7QUFDdEI7QUFDUTtBQUNXO0FBQ2I7QUFFL0MsU0FBU1csZ0JBQWdCOztJQUMvQiwyREFBMkQ7SUFDM0QsSUFBSTtRQUNILE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdDO1FBQ3JCRCxTQUFTRSxFQUFFLENBQUMsZ0JBQWdCLFVBQVk7WUFDdkMsSUFBSUMsVUFBVSxNQUFNSCxTQUFTSSxPQUFPLENBQUM7Z0JBQUVDLFFBQVE7WUFBYztZQUM3REMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3Qko7WUFDcEMsTUFBTUssZ0JBQWdCO1lBRXRCLElBQUlMLFlBQVlLLGVBQWU7Z0JBQzlCQyxNQUFNO2dCQUNOO1lBQ0QsQ0FBQztRQUNGO0lBQ0QsRUFBRSxPQUFPQyxHQUFHO0lBQ1gsNEVBQTRFO0lBQzdFO0lBRUEsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBRUMsV0FBVSxFQUFFLEdBQUdyQiw4REFBWUE7SUFFbEYsTUFBTXNCLGdCQUFnQixVQUFZO1FBQ2pDLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU0sSUFBSXJCLDZFQUFpQkEsQ0FBQztnQkFDNUNzQixtQkFBbUI7b0JBQUM7b0JBQUc7b0JBQUc7b0JBQUc7b0JBQUc7b0JBQUk7aUJBQU07WUFDM0M7WUFDQWIsUUFBUUMsR0FBRyxDQUFDLHlDQUF5Q1c7WUFDckQsTUFBTUgsU0FBU0c7UUFDaEIsRUFBRSxPQUFPUixHQUFHO1lBQ1hKLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NHO1FBQzdDO0lBQ0Q7SUFDQSxNQUFNVSxtQkFBbUIsVUFBWTtRQUNwQyxJQUFJO1lBQ0gsTUFBTUo7UUFDUCxFQUFFLE9BQU9OLEdBQUc7WUFDWEosUUFBUUMsR0FBRyxDQUFDO1FBQ2I7SUFDRDtJQUVBLHFCQUNDLDhEQUFDYixtREFBTUE7UUFBQzJCLElBQUc7UUFBUUMsT0FBTTtrQkFDeEIsNEVBQUMvQixzREFBU0E7OzhCQUNULDhEQUFDRyx5REFBWTtvQkFBQzhCLE1BQUs7OEJBQVE7Ozs7Ozs4QkFDM0IsOERBQUMvQixnREFBR0E7b0JBQUNnQyxXQUFVOztzQ0FDZCw4REFBQ2hDLHFEQUFROzRCQUFDK0IsTUFBSztzQ0FBUTs7Ozs7O3NDQUN2Qiw4REFBQy9CLHFEQUFROzRCQUFDK0IsTUFBSztzQ0FBWTs7Ozs7O3NDQUMzQiw4REFBQy9CLHFEQUFROzRCQUFDK0IsTUFBSztzQ0FBVzs7Ozs7O3dCQUN6Qlosd0JBQ0EsOERBQUNwQix3REFBV0E7NEJBQUNtQyxJQUFHOzRCQUE0QkMsT0FBTzlCLGdFQUFrQkEsQ0FBQ2M7c0NBQ3JFLDRFQUFDcEIsNkRBQWdCO2dDQUFDZ0MsTUFBSztnQ0FBY00sU0FBU1Y7MENBQWtCOzs7Ozs7Ozs7O2lEQUtqRSw4REFBQzNCLHFEQUFROzRCQUFDc0MsSUFBRzs0QkFBU04sV0FBVTs0QkFBeUJLLFNBQVNiO3NDQUFlOzs7OztnQ0FHakY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtOLENBQUM7R0E5RGVsQjs7UUFrQnVESiwwREFBWUE7OztLQWxCbkVJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyQ29ubmVjdC5qcz80ZDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgTmF2RHJvcGRvd24sIE5hdiwgTmF2YmFyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIjtcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiO1xuaW1wb3J0IHRydW5jYXRlRXRoQWRkcmVzcyBmcm9tIFwidHJ1bmNhdGUtZXRoLWFkZHJlc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE5hdkJhckNvbm5lY3QoKSB7XG5cdC8vVGhpcyBoYW5kbGVzIGNoYWluIGNoYW5nZXMgb3IgYWNjb3VudCBjaGFuZ2VzIG9uIE1ldGFtYXNrXG5cdHRyeSB7XG5cdFx0Y29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXHRcdGV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGxldCBjaGFpbklkID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfY2hhaW5JZFwiIH0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gY2hhaW46IFwiLCBjaGFpbklkKTtcblx0XHRcdGNvbnN0IG11bWJhaUNoYWluSWQgPSBcIjB4MTM4ODFcIjtcblxuXHRcdFx0aWYgKGNoYWluSWQgIT09IG11bWJhaUNoYWluSWQpIHtcblx0XHRcdFx0YWxlcnQoXCJZb3UgYXJlIG5vdCBjb25uZWN0ZWQgdG8gTXVtYmFpIFRlc3RuZXRcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgaGFuZGxpbmcgTWV0YW1hc2sgYWNjb3VudCBvciBjaGFpbiBjaGFuZ2VkXCIsIGUpO1xuXHR9XG5cblx0Y29uc3QgeyBhY3RpdmUsIGFjY291bnQsIGxpYnJhcnksIGNvbm5lY3RvciwgYWN0aXZhdGUsIGRlYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuXG5cdGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGluamVjdGVkID0gYXdhaXQgbmV3IEluamVjdGVkQ29ubmVjdG9yKHtcblx0XHRcdFx0c3VwcG9ydGVkQ2hhaW5JZHM6IFsxLCAzLCA0LCA1LCA0MiwgODAwMDFdLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlRyeWluZyB0byBjb25uZWN0IHdhbGxldCwgaW5qZWN0ZWQgPSBcIiwgaW5qZWN0ZWQpO1xuXHRcdFx0YXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3IgY29ubmVjdGluZyB0byBtZXRhbWFza1wiLCBlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGRpc2Nvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGRlYWN0aXZhdGUoKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGRpc2Nvbm5lY3RpbmcgbWV0YW1hc2tcIik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PE5hdmJhciBiZz1cImxpZ2h0XCIgZml4ZWQ9XCJ0b3BcIj5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+TmF2YmFyPC9OYXZiYXIuQnJhbmQ+XG5cdFx0XHRcdDxOYXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuXHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXYuTGluaz5cblx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIiNmZWF0dXJlc1wiPkZlYXR1cmVzPC9OYXYuTGluaz5cblx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIiNwcmljaW5nXCI+UHJpY2luZzwvTmF2Lkxpbms+XG5cdFx0XHRcdFx0e2FjY291bnQgPyAoXG5cdFx0XHRcdFx0XHQ8TmF2RHJvcGRvd24gaWQ9XCJuYXYtZHJvcGRvd24tZGFyay1leGFtcGxlXCIgdGl0bGU9e3RydW5jYXRlRXRoQWRkcmVzcyhhY2NvdW50KX0+XG5cdFx0XHRcdFx0XHRcdDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMVwiIG9uQ2xpY2s9e2Rpc2Nvbm5lY3RXYWxsZXR9PlxuXHRcdFx0XHRcdFx0XHRcdERpc2Nvbm5lY3Rcblx0XHRcdFx0XHRcdFx0PC9OYXZEcm9wZG93bi5JdGVtPlxuXHRcdFx0XHRcdFx0PC9OYXZEcm9wZG93bj5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PE5hdi5JdGVtIGFzPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9PlxuXHRcdFx0XHRcdFx0XHRDb25uZWN0IFdhbGxldFxuXHRcdFx0XHRcdFx0PC9OYXYuSXRlbT5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L05hdj5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvTmF2YmFyPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJOYXZEcm9wZG93biIsIk5hdiIsIk5hdmJhciIsInVzZVdlYjNSZWFjdCIsIldlYjNQcm92aWRlciIsIkluamVjdGVkQ29ubmVjdG9yIiwidHJ1bmNhdGVFdGhBZGRyZXNzIiwiTmF2QmFyQ29ubmVjdCIsImV0aGVyZXVtIiwid2luZG93Iiwib24iLCJjaGFpbklkIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJtdW1iYWlDaGFpbklkIiwiYWxlcnQiLCJlIiwiYWN0aXZlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjb25uZWN0V2FsbGV0IiwiaW5qZWN0ZWQiLCJzdXBwb3J0ZWRDaGFpbklkcyIsImRpc2Nvbm5lY3RXYWxsZXQiLCJiZyIsImZpeGVkIiwiQnJhbmQiLCJocmVmIiwiY2xhc3NOYW1lIiwiTGluayIsImlkIiwidGl0bGUiLCJJdGVtIiwib25DbGljayIsImFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBarConnect.js\n"));

/***/ })

});