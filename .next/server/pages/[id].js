"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// import axios from \"axios\";\n// import { useEffect, useState } from \"react\"\n// const User=({userId})=>{\n//     //create a hooks useState\n//     const [user,setUser]=useState(null);\n//     useEffect(()=>{\n//         axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)\n//         .then(res=>{\n//             setUser(res.data);\n//         }).catch(error=>{\n//             console.error(error);\n//         });\n//     },[userId])\n//     if(!user){\n//         return <p>Loading...</p>\n//     }\n//     return(\n//         <div>\n//             <h1>User:{user.id}</h1>\n//             <p>Name:{user.name}</p>\n//             <p>Email:{user.email}</p>\n//             <p>Phone:{user.phone}</p>\n//         </div>\n//     )\n// }\n// User.getInitialProps=({query})=>{\n//     return {userId:query.id};\n// };\n// export default User;\n\n\n\nconst Comment = ({ commentId  })=>{\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`https://jsonplaceholder.typicode.com/comments/${commentId}`).then((response)=>{\n            setComment(response.data);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, [\n        commentId\n    ]);\n    if (!comment) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\nextjs\\\\myproject\\\\pages\\\\[id].js\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Comment:\",\n                    comment.id\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\nextjs\\\\myproject\\\\pages\\\\[id].js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Name:\",\n                    comment.name\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\nextjs\\\\myproject\\\\pages\\\\[id].js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Email:\",\n                    comment.email\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\nextjs\\\\myproject\\\\pages\\\\[id].js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Body:\",\n                    comment.body\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\nextjs\\\\myproject\\\\pages\\\\[id].js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\nextjs\\\\myproject\\\\pages\\\\[id].js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\nComment.getInitialProps = ({ query  })=>{\n    return {\n        commentId: query.id\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFFOUMsMkJBQTJCO0FBQzNCLGdDQUFnQztBQUNoQywyQ0FBMkM7QUFFM0Msc0JBQXNCO0FBQ3RCLDRFQUE0RTtBQUM1RSx1QkFBdUI7QUFDdkIsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixvQ0FBb0M7QUFDcEMsY0FBYztBQUNkLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsbUNBQW1DO0FBQ25DLFFBQVE7QUFDUixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxpQkFBaUI7QUFDakIsUUFBUTtBQUVSLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFFTCx1QkFBdUI7QUFHdkI7QUFBK0M7QUFDcEI7QUFFM0IsTUFBTUksVUFBUSxDQUFDLEVBQUNDLFVBQVMsRUFBQyxHQUFHO0lBQ3pCLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFDTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXhDQyxnREFBU0EsQ0FBQyxJQUFJO1FBQ1ZDLGlEQUFTLENBQUMsQ0FBQyw4Q0FBOEMsRUFBRUUsVUFBVSxDQUFDLEVBQ3JFSSxJQUFJLENBQUMsQ0FBQ0MsV0FBVztZQUNkSCxXQUFXRyxTQUFTQyxJQUFJO1FBQzVCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFRO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSixHQUFFO1FBQUNSO0tBQVU7SUFDakIsSUFBRyxDQUFDQyxTQUFRO1FBQ1IscUJBQU8sOERBQUNVO3NCQUFFOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7O29CQUFHO29CQUFTWixRQUFRYSxFQUFFOzs7Ozs7OzBCQUN2Qiw4REFBQ0g7O29CQUFFO29CQUFNVixRQUFRYyxJQUFJOzs7Ozs7OzBCQUNyQiw4REFBQ0o7O29CQUFFO29CQUFPVixRQUFRZSxLQUFLOzs7Ozs7OzBCQUN2Qiw4REFBQ0w7O29CQUFFO29CQUFNVixRQUFRZ0IsSUFBSTs7Ozs7Ozs7Ozs7OztBQUk3QjtBQUNBbEIsUUFBUW1CLGVBQWUsR0FBQyxDQUFDLEVBQUNDLE1BQUssRUFBQyxHQUFHO0lBQy9CLE9BQU87UUFBQ25CLFdBQVVtQixNQUFNTCxFQUFFO0lBQUE7QUFDOUI7QUFFQSxpRUFBZWYsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215cHJvamVjdC8uL3BhZ2VzL1tpZF0uanM/YTMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuLy8gY29uc3QgVXNlcj0oe3VzZXJJZH0pPT57XHJcbi8vICAgICAvL2NyZWF0ZSBhIGhvb2tzIHVzZVN0YXRlXHJcbi8vICAgICBjb25zdCBbdXNlcixzZXRVc2VyXT11c2VTdGF0ZShudWxsKTtcclxuXHJcbi8vICAgICB1c2VFZmZlY3QoKCk9PntcclxuLy8gICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3VzZXJJZH1gKVxyXG4vLyAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4vLyAgICAgICAgICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcclxuLy8gICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH0sW3VzZXJJZF0pXHJcbi8vICAgICBpZighdXNlcil7XHJcbi8vICAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4oXHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPGgxPlVzZXI6e3VzZXIuaWR9PC9oMT5cclxuLy8gICAgICAgICAgICAgPHA+TmFtZTp7dXNlci5uYW1lfTwvcD5cclxuLy8gICAgICAgICAgICAgPHA+RW1haWw6e3VzZXIuZW1haWx9PC9wPlxyXG4vLyAgICAgICAgICAgICA8cD5QaG9uZTp7dXNlci5waG9uZX08L3A+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcblxyXG4vLyB9XHJcblxyXG4vLyBVc2VyLmdldEluaXRpYWxQcm9wcz0oe3F1ZXJ5fSk9PntcclxuLy8gICAgIHJldHVybiB7dXNlcklkOnF1ZXJ5LmlkfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcblxyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zICBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBDb21tZW50PSh7Y29tbWVudElkfSk9PntcclxuICAgIGNvbnN0IFtjb21tZW50LHNldENvbW1lbnRdPXVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzLyR7Y29tbWVudElkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBzZXRDb21tZW50KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbY29tbWVudElkXSlcclxuaWYoIWNvbW1lbnQpe1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbn1cclxuXHJcbnJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkNvbW1lbnQ6e2NvbW1lbnQuaWR9PC9oMT5cclxuICAgICAgICA8cD5OYW1lOntjb21tZW50Lm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPkVtYWlsOntjb21tZW50LmVtYWlsfTwvcD5cclxuICAgICAgICA8cD5Cb2R5Ontjb21tZW50LmJvZHl9PC9wPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbn07XHJcbkNvbW1lbnQuZ2V0SW5pdGlhbFByb3BzPSh7cXVlcnl9KT0+e1xyXG4gICAgcmV0dXJuIHtjb21tZW50SWQ6cXVlcnkuaWR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkNvbW1lbnQiLCJjb21tZW50SWQiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInAiLCJkaXYiLCJoMSIsImlkIiwibmFtZSIsImVtYWlsIiwiYm9keSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[id].js"));
module.exports = __webpack_exports__;

})();