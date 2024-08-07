"use client";
"use strict";
exports.__esModule = true;
var page_1 = require("../src/app/login/page");
var page_2 = require("../src/app/signup/page");
var header_module_css_1 = require("./header.module.css");
var modal_1 = require("./modal");
var react_1 = require("react");
function Loginandsignupbuttons() {
    var _a = react_1.useState(false), openUp = _a[0], setOpenUp = _a[1];
    var _b = react_1.useState(false), openUp1 = _b[0], setOpenUp1 = _b[1];
    return (React.createElement("div", { className: "flex xl:flex-row md:flex-col xl:gap-10 md:3 px-3" },
        React.createElement("button", { className: header_module_css_1["default"].button, onClick: function () { return setOpenUp1(true); } }, "SIGN UP"),
        React.createElement("button", { className: header_module_css_1["default"].button, onClick: function () { return setOpenUp(true); } }, "SIGN IN"),
        React.createElement(modal_1["default"], { isOpen: openUp, onClose: function () { return setOpenUp(false); } },
            React.createElement(page_1["default"], { closeModal: function () { return setOpenUp(false); } })),
        React.createElement(modal_1["default"], { isOpen: openUp1, onClose: function () { return setOpenUp1(false); } },
            React.createElement(page_2["default"], { closeModal: function () { return setOpenUp1(false); } }))));
}
exports["default"] = Loginandsignupbuttons;
