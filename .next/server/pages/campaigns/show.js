"use strict";
(() => {
var exports = {};
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(544);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(148);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(508);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/ContributeForm.js






class ContributeForm extends external_react_.Component {
    state = {
        value: '',
        errorMessage: '',
        loadingFlag: false
    };
    onSubmit = async (event)=>{
        event.preventDefault();
        const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
        //console.log(this.props.address);
        this.setState({
            loadingFlag: true,
            errorMessage: ''
        });
        try {
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            //console.log(accounts[0]);
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3/* default.utils.toWei */.Z.utils.toWei(this.state.value, "ether")
            });
            routes.Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (err) {
            this.setState({
                errorMessage: err.message
            });
        }
        this.setState({
            loadingFlag: false,
            value: ''
        });
    };
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
            onSubmit: this.onSubmit,
            error: !!this.state.errorMessage,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Field, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            children: "Amount to Contribute"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
                            value: this.state.value,
                            onChange: (event)=>this.setState({
                                    value: event.target.value
                                })
                            ,
                            label: "Ether",
                            labelPosition: "right"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                    error: true,
                    header: "Oops!",
                    content: this.state.errorMessage
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    primary: true,
                    loading: this.state.loadingFlag,
                    children: " Contribute!"
                })
            ]
        }));
    }
}
/* harmony default export */ const components_ContributeForm = (ContributeForm);

;// CONCATENATED MODULE: ./pages/campaigns/show.js








class CampaignShow extends external_react_.Component {
    static async getInitialProps(props) {
        const campaign = (0,ethereum_campaign/* default */.Z)(props.query.address);
        //console.log(props.query.address); // address of campaings
        //const {address} = props.query;
        //const campaign = Campaign(address);
        const summary = await campaign.methods.getSummary().call();
        //console.log(summary);
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }
    renderCards() {
        const { balance , manager , minimumContribution , requestsCount , approversCount  } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this capaign and can create request.',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this must wei to become approver',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: requestsCount,
                meta: 'Number of Request',
                description: 'A request tries to withdraw money from contract and needs to be approved.',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: web3/* default.utils.fromWei */.Z.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.',
                style: {
                    overflowWrap: 'break-word'
                }
            }
        ];
        return(/*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
            items: items
        }));
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: " Campaign Show "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                    width: 10,
                                    children: this.renderCards()
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                    width: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ContributeForm, {
                                        address: this.props.address
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                                    route: `/campaigns/${this.props.address}/requests`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                                primary: true,
                                                children: "View Request"
                                            }),
                                            " "
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const show = (CampaignShow);


/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [184,148], () => (__webpack_exec__(507)));
module.exports = __webpack_exports__;

})();