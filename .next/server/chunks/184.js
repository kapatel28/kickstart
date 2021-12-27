"use strict";
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/Header.js




//<Menu.Item>   CrowdCoin   </Menu.Item>
//<Menu.Item>  Campaings  </Menu.Item>
//<Menu.Item>   +   </Menu.Item>
/* harmony default export */ const Header = (()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        style: {
            marginTop: '10px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                route: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "item",
                    children: "CrowdCoin"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Menu, {
                position: "right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            children: "Campaings"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "/campaigns/new",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            children: "+"
                        })
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    async: true,
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
            }),
            props.children
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
// old setup
//import Web3 from "web3";
//window.ethereum.request({ method: "eth_requestAccounts" });
//const web3 = new Web3(window.ethereum);
//export default web3;
// new setup for next.js

let web3;
if (false) {} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)("https://rinkeby.infura.io/v3/0e377a34870e4cc8ac1cf36561508de4");
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);


/***/ }),

/***/ 215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const routes = __webpack_require__(662)(); // function will invoked immediately
//routes.add('..'.'..');
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;


/***/ })

};
;