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

/***/ "./components/Board.js":
/*!*****************************!*\
  !*** ./components/Board.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square */ \"./components/Square.js\");\n/* harmony import */ var _NewGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewGame */ \"./components/NewGame.js\");\n/* harmony import */ var _NavBarConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBarConnect */ \"./components/NavBarConnect.js\");\n/* harmony import */ var _AllGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllGames */ \"./components/AllGames.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/useEagerConnect */ \"./utils/useEagerConnect.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Board() {\n    _s();\n    const [squares, setSquares] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedGame, setSelectedGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [gameWinner, setGameWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,_utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_9__.useEagerConnect)();\n    //This function sets the current account from the child component NavBarConnect\n    const currentAccountFunc = (account)=>{\n        setCurrentAccount(account);\n    };\n    //This function sets a game from the AllGames component\n    const selectedGameFunc = (game)=>{\n        setSelectedGame(game);\n    };\n    const handleClick = (i)=>{\n        if (!selectedGame) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning(\"You need to choose an account and select a game first!\", {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_RIGHT\n            });\n            return;\n        }\n        const squaresClone = squares.slice();\n        if (squares[i] !== null) {\n            return;\n        }\n        if (!winner) {\n            squaresClone[i] = xIsNext ? \"X\" : \"O\";\n            setSquares(squaresClone);\n            setXIsNext(!xIsNext);\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning(\"Game is over!\", {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_RIGHT\n            });\n        }\n    };\n    const renderSquare = (i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Square__WEBPACK_IMPORTED_MODULE_2__.Square, {\n            value: squares[i],\n            onClick: ()=>{\n                handleClick(i);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n            lineNumber: 54,\n            columnNumber: 4\n        }, this);\n    };\n    const winner = calculateWinner(squares);\n    let status;\n    if (winner) {\n        // setGameWinner(winner);\n        status = \"Winner: \" + winner;\n    } else {\n        status = \"Next player: \" + (xIsNext ? \"X\" : \"O\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBarConnect__WEBPACK_IMPORTED_MODULE_4__.NavBarConnect, {\n                currentAccountFunc: currentAccountFunc\n            }, void 0, false, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                lineNumber: 75,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {\n                            md: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"board-row\",\n                                            children: [\n                                                renderSquare(0),\n                                                renderSquare(1),\n                                                renderSquare(2)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"board-row\",\n                                            children: [\n                                                renderSquare(3),\n                                                renderSquare(4),\n                                                renderSquare(5)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"board-row\",\n                                            children: [\n                                                renderSquare(6),\n                                                renderSquare(7),\n                                                renderSquare(8)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 8\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 8\n                                        }, this),\n                                        selectedGame && selectedGame.gameContract ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"Your game contract is\",\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"https://mumbai.polygonscan.com/address/\".concat(selectedGame.gameContract),\n                                                    target: \"_blank\",\n                                                    children: (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(selectedGame.gameContract)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 10\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 9\n                                        }, this) : null,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"status\",\n                                            children: status\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 8\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                            lineNumber: 78,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {\n                            md: 8,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewGame__WEBPACK_IMPORTED_MODULE_3__.NewGame, {\n                                        currentAccount: currentAccount\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AllGames__WEBPACK_IMPORTED_MODULE_5__.AllGames, {\n                                        currentAccount: currentAccount,\n                                        selectedGameFunc: selectedGameFunc\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                            lineNumber: 111,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                    lineNumber: 77,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Board, \"TE2QO5gh8bieIsZ6hYjAkTAFd/I=\", false, function() {\n    return [\n        _utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_9__.useEagerConnect\n    ];\n});\n_c = Board;\nfunction calculateWinner(squares) {\n    const lines = [\n        [\n            0,\n            1,\n            2\n        ],\n        [\n            3,\n            4,\n            5\n        ],\n        [\n            6,\n            7,\n            8\n        ],\n        [\n            0,\n            3,\n            6\n        ],\n        [\n            1,\n            4,\n            7\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            0,\n            4,\n            8\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            2,\n            4,\n            6\n        ]\n    ];\n    for(let i = 0; i < lines.length; i++){\n        const [a, b, c] = lines[i];\n        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n            return squares[a];\n        }\n    }\n    return null;\n}\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUNtQyxFQUFFLEtBQUtuQyxPQUFPLENBQUMwQyxFQUFFLEVBQUU7WUFDekUsT0FBTzFDLE9BQU8sQ0FBQ21DLEVBQUU7UUFDbEIsQ0FBQztJQUNGO0lBQ0EsT0FBTyxJQUFJO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2FyZC5qcz9kM2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTcXVhcmUgfSBmcm9tIFwiLi9TcXVhcmVcIjtcbmltcG9ydCB7IE5ld0dhbWUgfSBmcm9tIFwiLi9OZXdHYW1lXCI7XG5pbXBvcnQgeyBOYXZCYXJDb25uZWN0IH0gZnJvbSBcIi4vTmF2QmFyQ29ubmVjdFwiO1xuaW1wb3J0IHsgQWxsR2FtZXMgfSBmcm9tIFwiLi9BbGxHYW1lc1wiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgdHJ1bmNhdGVFdGhBZGRyZXNzIGZyb20gXCJ0cnVuY2F0ZS1ldGgtYWRkcmVzc1wiO1xuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0IH0gZnJvbSBcIkAvdXRpbHMvdXNlRWFnZXJDb25uZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKCkge1xuXHRjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShBcnJheSg5KS5maWxsKG51bGwpKTtcblx0Y29uc3QgW3hJc05leHQsIHNldFhJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtzZWxlY3RlZEdhbWUsIHNldFNlbGVjdGVkR2FtZV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW2dhbWVXaW5uZXIsIHNldEdhbWVXaW5uZXJdID0gdXNlU3RhdGUoKTtcblx0dXNlRWFnZXJDb25uZWN0KCk7XG5cblx0Ly9UaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGN1cnJlbnQgYWNjb3VudCBmcm9tIHRoZSBjaGlsZCBjb21wb25lbnQgTmF2QmFyQ29ubmVjdFxuXHRjb25zdCBjdXJyZW50QWNjb3VudEZ1bmMgPSAoYWNjb3VudCkgPT4ge1xuXHRcdHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xuXHR9O1xuXG5cdC8vVGhpcyBmdW5jdGlvbiBzZXRzIGEgZ2FtZSBmcm9tIHRoZSBBbGxHYW1lcyBjb21wb25lbnRcblx0Y29uc3Qgc2VsZWN0ZWRHYW1lRnVuYyA9IChnYW1lKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWRHYW1lKGdhbWUpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGkpID0+IHtcblx0XHRpZiAoIXNlbGVjdGVkR2FtZSkge1xuXHRcdFx0dG9hc3Qud2FybmluZyhcIllvdSBuZWVkIHRvIGNob29zZSBhbiBhY2NvdW50IGFuZCBzZWxlY3QgYSBnYW1lIGZpcnN0IVwiLCB7XG5cdFx0XHRcdHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfUklHSFQsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgc3F1YXJlc0Nsb25lID0gc3F1YXJlcy5zbGljZSgpO1xuXHRcdGlmIChzcXVhcmVzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghd2lubmVyKSB7XG5cdFx0XHRzcXVhcmVzQ2xvbmVbaV0gPSB4SXNOZXh0ID8gXCJYXCIgOiBcIk9cIjtcblx0XHRcdHNldFNxdWFyZXMoc3F1YXJlc0Nsb25lKTtcblx0XHRcdHNldFhJc05leHQoIXhJc05leHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2FzdC53YXJuaW5nKFwiR2FtZSBpcyBvdmVyIVwiLCB7XG5cdFx0XHRcdHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfUklHSFQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyU3F1YXJlID0gKGkpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFNxdWFyZVxuXHRcdFx0XHR2YWx1ZT17c3F1YXJlc1tpXX1cblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGhhbmRsZUNsaWNrKGkpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9O1xuXHRjb25zdCB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcyk7XG5cdGxldCBzdGF0dXM7XG5cdGlmICh3aW5uZXIpIHtcblx0XHQvLyBzZXRHYW1lV2lubmVyKHdpbm5lcik7XG5cdFx0c3RhdHVzID0gXCJXaW5uZXI6IFwiICsgd2lubmVyO1xuXHR9IGVsc2Uge1xuXHRcdHN0YXR1cyA9IFwiTmV4dCBwbGF5ZXI6IFwiICsgKHhJc05leHQgPyBcIlhcIiA6IFwiT1wiKTtcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8VG9hc3RDb250YWluZXIgLz5cblx0XHRcdDxOYXZCYXJDb25uZWN0IGN1cnJlbnRBY2NvdW50RnVuYz17Y3VycmVudEFjY291bnRGdW5jfSAvPlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHQ8Q29sIG1kPXs0fT5cblx0XHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlclNxdWFyZSgwKX1cblx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyU3F1YXJlKDEpfVxuXHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJTcXVhcmUoMil9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJTcXVhcmUoMyl9XG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlclNxdWFyZSg0KX1cblx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyU3F1YXJlKDUpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyU3F1YXJlKDYpfVxuXHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJTcXVhcmUoNyl9XG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlclNxdWFyZSg4KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRHYW1lICYmIHNlbGVjdGVkR2FtZS5nYW1lQ29udHJhY3QgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFlvdXIgZ2FtZSBjb250cmFjdCBpc3tcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BodHRwczovL211bWJhaS5wb2x5Z29uc2Nhbi5jb20vYWRkcmVzcy8ke3NlbGVjdGVkR2FtZS5nYW1lQ29udHJhY3R9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0cnVuY2F0ZUV0aEFkZHJlc3Moc2VsZWN0ZWRHYW1lLmdhbWVDb250cmFjdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPEJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiPlNldCB1cCBnYW1lPC9CdXR0b24+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPntzdGF0dXN9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs4fT5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxOZXdHYW1lIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8aHI+PC9ocj5cblx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PEFsbEdhbWVzIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH0gc2VsZWN0ZWRHYW1lRnVuYz17c2VsZWN0ZWRHYW1lRnVuY30gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykge1xuXHRjb25zdCBsaW5lcyA9IFtcblx0XHRbMCwgMSwgMl0sXG5cdFx0WzMsIDQsIDVdLFxuXHRcdFs2LCA3LCA4XSxcblx0XHRbMCwgMywgNl0sXG5cdFx0WzEsIDQsIDddLFxuXHRcdFsyLCA1LCA4XSxcblx0XHRbMCwgNCwgOF0sXG5cdFx0WzIsIDUsIDhdLFxuXHRcdFsyLCA0LCA2XSxcblx0XTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xuXHRcdGlmIChzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSkge1xuXHRcdFx0cmV0dXJuIHNxdWFyZXNbYV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTcXVhcmUiLCJOZXdHYW1lIiwiTmF2QmFyQ29ubmVjdCIsIkFsbEdhbWVzIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsInRydW5jYXRlRXRoQWRkcmVzcyIsInVzZUVhZ2VyQ29ubmVjdCIsIkJvYXJkIiwic3F1YXJlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJ4SXNOZXh0Iiwic2V0WElzTmV4dCIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJzZWxlY3RlZEdhbWUiLCJzZXRTZWxlY3RlZEdhbWUiLCJnYW1lV2lubmVyIiwic2V0R2FtZVdpbm5lciIsImN1cnJlbnRBY2NvdW50RnVuYyIsImFjY291bnQiLCJzZWxlY3RlZEdhbWVGdW5jIiwiZ2FtZSIsImhhbmRsZUNsaWNrIiwiaSIsIndhcm5pbmciLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiVE9QX1JJR0hUIiwic3F1YXJlc0Nsb25lIiwic2xpY2UiLCJ3aW5uZXIiLCJyZW5kZXJTcXVhcmUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJjYWxjdWxhdGVXaW5uZXIiLCJzdGF0dXMiLCJtZCIsImRpdiIsImNsYXNzTmFtZSIsImJyIiwiZ2FtZUNvbnRyYWN0IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJociIsImxpbmVzIiwibGVuZ3RoIiwiYiIsImMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});