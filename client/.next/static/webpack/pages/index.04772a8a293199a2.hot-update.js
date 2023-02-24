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

/***/ "./components/AllGames.js":
/*!********************************!*\
  !*** ./components/AllGames.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AllGames\": function() { return /* binding */ AllGames; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _lib_contract_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/contract_config */ \"./lib/contract_config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AllGames(param) {\n    let { selectedGameFunc  } = param;\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedGame, setSelectedGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();\n    const findGames = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum);\n                const signer = provider.getSigner();\n                let registry_contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_lib_contract_config__WEBPACK_IMPORTED_MODULE_2__.registry_address, _lib_contract_config__WEBPACK_IMPORTED_MODULE_2__.registry_abi, signer);\n                if (account) {\n                    console.log(\"Calling for address = \", account);\n                    let tx = await registry_contract.getGameList(account);\n                    console.log(\"List of games = \", tx);\n                    setGames(tx);\n                }\n            }\n        } catch (e) {\n            console.log(\"Error while finding games\", e);\n        }\n    };\n    const setGame = async (event)=>{\n        console.log(\"Choosing the game = \", event.target.dataset.id);\n        const selectedGameContract = event.target.dataset.id;\n        let gameBoardState;\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum);\n                const signer = provider.getSigner();\n                let gameContractObj = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(selectedGameContract, _lib_contract_config__WEBPACK_IMPORTED_MODULE_2__.tictactoe_abi, signer);\n                if (account) {\n                    let tx = await gameContractObj.getGame();\n                    console.log(\"Game state = \", tx.toString());\n                    gameBoardState = tx.toString();\n                }\n            }\n        } catch (e) {\n            console.log(\"Error while finding games\", e);\n        }\n        const gameObject = {\n            gameContract: event.target.dataset.id,\n            gameBoard: gameBoardState\n        };\n        selectedGameFunc(gameObject);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        findGames();\n    }, [\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Your on-chain games\"\n            }, void 0, false, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                lineNumber: 64,\n                columnNumber: 4\n            }, this),\n            games.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Table, {\n                striped: true,\n                bordered: true,\n                hover: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"First Player\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Second Player\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Game Contract\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 8\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                            lineNumber: 68,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                        lineNumber: 67,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: games.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: index\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item[0])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item[1])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item[2])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                            variant: \"outline-primary\",\n                                            size: \"sm\",\n                                            \"data-id\": item[2],\n                                            onClick: setGame,\n                                            type: \"submit\",\n                                            children: \"Choose\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 10\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                                lineNumber: 78,\n                                columnNumber: 8\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                        lineNumber: 76,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                lineNumber: 66,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"You haven't created any games yet. Please create a new game.\"\n            }, void 0, false, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/AllGames.js\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AllGames, \"dg2MdZH5IMFSnxreT3R5k9AwvPw=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React\n    ];\n});\n_c = AllGames;\nvar _c;\n$RefreshReg$(_c, \"AllGames\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLDhEQUFDTTtrREFBSUQ7Ozs7OztrREFDTCw4REFBQ0M7a0RBQUlqRCxnRUFBa0JBLENBQUMrQyxJQUFJLENBQUMsRUFBRTs7Ozs7O2tEQUMvQiw4REFBQ0U7a0RBQUlqRCxnRUFBa0JBLENBQUMrQyxJQUFJLENBQUMsRUFBRTs7Ozs7O2tEQUMvQiw4REFBQ0U7a0RBQUlqRCxnRUFBa0JBLENBQUMrQyxJQUFJLENBQUMsRUFBRTs7Ozs7O2tEQUMvQiw4REFBQ0U7a0RBQ0EsNEVBQUM5RCxtREFBTUE7NENBQUMrRCxTQUFROzRDQUFrQkMsTUFBSzs0Q0FBS0MsV0FBU0wsSUFBSSxDQUFDLEVBQUU7NENBQUVNLFNBQVM3Qjs0Q0FBUzhCLE1BQUs7c0RBQVM7Ozs7Ozs7Ozs7OzsrQkFOdkZOOzs7Ozs7Ozs7Ozs7Ozs7cUNBZVosOERBQUNPOzBCQUFHOzs7OztvQkFDSjs7O0FBR0osQ0FBQztHQXhGZXJEOztRQUdLRCwwREFBWUE7OztLQUhqQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGxHYW1lcy5qcz9iNjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgVGFibGUsIENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB0aWN0YWN0b2VfYWJpLCB0aWN0YWN0b2VfYnl0ZWNvZGUsIHJlZ2lzdHJ5X2FiaSwgcmVnaXN0cnlfYWRkcmVzcyB9IGZyb20gXCIuLi9saWIvY29udHJhY3RfY29uZmlnXCI7XG5pbXBvcnQgeyBldGhlcnMsIEJpZ051bWJlciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0cnVuY2F0ZUV0aEFkZHJlc3MgZnJvbSBcInRydW5jYXRlLWV0aC1hZGRyZXNzXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQWxsR2FtZXMoeyBzZWxlY3RlZEdhbWVGdW5jIH0pIHtcblx0Y29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IFtzZWxlY3RlZEdhbWUsIHNldFNlbGVjdGVkR2FtZV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgeyBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuXHRjb25zdCBmaW5kR2FtZXMgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblx0XHRcdGlmIChldGhlcmV1bSkge1xuXHRcdFx0XHRjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG5cdFx0XHRcdGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXHRcdFx0XHRsZXQgcmVnaXN0cnlfY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KHJlZ2lzdHJ5X2FkZHJlc3MsIHJlZ2lzdHJ5X2FiaSwgc2lnbmVyKTtcblx0XHRcdFx0aWYgKGFjY291bnQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkNhbGxpbmcgZm9yIGFkZHJlc3MgPSBcIiwgYWNjb3VudCk7XG5cdFx0XHRcdFx0bGV0IHR4ID0gYXdhaXQgcmVnaXN0cnlfY29udHJhY3QuZ2V0R2FtZUxpc3QoYWNjb3VudCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJMaXN0IG9mIGdhbWVzID0gXCIsIHR4KTtcblx0XHRcdFx0XHRzZXRHYW1lcyh0eCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGZpbmRpbmcgZ2FtZXNcIiwgZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNldEdhbWUgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIkNob29zaW5nIHRoZSBnYW1lID0gXCIsIGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkKTtcblx0XHRjb25zdCBzZWxlY3RlZEdhbWVDb250cmFjdCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkO1xuXHRcdGxldCBnYW1lQm9hcmRTdGF0ZTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXHRcdFx0aWYgKGV0aGVyZXVtKSB7XG5cdFx0XHRcdGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKTtcblx0XHRcdFx0Y29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cdFx0XHRcdGxldCBnYW1lQ29udHJhY3RPYmogPSBuZXcgZXRoZXJzLkNvbnRyYWN0KHNlbGVjdGVkR2FtZUNvbnRyYWN0LCB0aWN0YWN0b2VfYWJpLCBzaWduZXIpO1xuXHRcdFx0XHRpZiAoYWNjb3VudCkge1xuXHRcdFx0XHRcdGxldCB0eCA9IGF3YWl0IGdhbWVDb250cmFjdE9iai5nZXRHYW1lKCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJHYW1lIHN0YXRlID0gXCIsIHR4LnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGdhbWVCb2FyZFN0YXRlID0gdHgudG9TdHJpbmcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZmluZGluZyBnYW1lc1wiLCBlKTtcblx0XHR9XG5cdFx0Y29uc3QgZ2FtZU9iamVjdCA9IHtcblx0XHRcdGdhbWVDb250cmFjdDogZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQsXG5cdFx0XHRnYW1lQm9hcmQ6IGdhbWVCb2FyZFN0YXRlLFxuXHRcdH07XG5cdFx0c2VsZWN0ZWRHYW1lRnVuYyhnYW1lT2JqZWN0KTtcblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZpbmRHYW1lcygpO1xuXHR9LCBbYWNjb3VudF0pO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aDM+WW91ciBvbi1jaGFpbiBnYW1lczwvaDM+XG5cdFx0XHR7Z2FtZXMubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0PFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXI+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD5GaXJzdCBQbGF5ZXI8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+U2Vjb25kIFBsYXllcjwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD5HYW1lIENvbnRyYWN0PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPjwvdGg+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0e2dhbWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PHRyIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57aW5kZXh9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3RydW5jYXRlRXRoQWRkcmVzcyhpdGVtWzBdKX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57dHJ1bmNhdGVFdGhBZGRyZXNzKGl0ZW1bMV0pfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkPnt0cnVuY2F0ZUV0aEFkZHJlc3MoaXRlbVsyXSl9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzaXplPVwic21cIiBkYXRhLWlkPXtpdGVtWzJdfSBvbkNsaWNrPXtzZXRHYW1lfSB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdENob29zZVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvVGFibGU+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8aDQ+WW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgZ2FtZXMgeWV0LiBQbGVhc2UgY3JlYXRlIGEgbmV3IGdhbWUuPC9oND5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiQnV0dG9uIiwiVGFibGUiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJ0aWN0YWN0b2VfYWJpIiwidGljdGFjdG9lX2J5dGVjb2RlIiwicmVnaXN0cnlfYWJpIiwicmVnaXN0cnlfYWRkcmVzcyIsImV0aGVycyIsIkJpZ051bWJlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidHJ1bmNhdGVFdGhBZGRyZXNzIiwidXNlV2ViM1JlYWN0IiwiQWxsR2FtZXMiLCJzZWxlY3RlZEdhbWVGdW5jIiwiZ2FtZXMiLCJzZXRHYW1lcyIsInNlbGVjdGVkR2FtZSIsInNldFNlbGVjdGVkR2FtZSIsImFjY291bnQiLCJmaW5kR2FtZXMiLCJldGhlcmV1bSIsIndpbmRvdyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwicmVnaXN0cnlfY29udHJhY3QiLCJDb250cmFjdCIsImNvbnNvbGUiLCJsb2ciLCJ0eCIsImdldEdhbWVMaXN0IiwiZSIsInNldEdhbWUiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJpZCIsInNlbGVjdGVkR2FtZUNvbnRyYWN0IiwiZ2FtZUJvYXJkU3RhdGUiLCJnYW1lQ29udHJhY3RPYmoiLCJnZXRHYW1lIiwidG9TdHJpbmciLCJnYW1lT2JqZWN0IiwiZ2FtZUNvbnRyYWN0IiwiZ2FtZUJvYXJkIiwiaDMiLCJsZW5ndGgiLCJzdHJpcGVkIiwiYm9yZGVyZWQiLCJob3ZlciIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaXRlbSIsImluZGV4IiwidGQiLCJ2YXJpYW50Iiwic2l6ZSIsImRhdGEtaWQiLCJvbkNsaWNrIiwidHlwZSIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AllGames.js\n"));

/***/ })

});