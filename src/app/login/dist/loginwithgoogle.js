"use client";
"use strict";
exports.__esModule = true;
var action_1 = require("../../../components/action");
var react_google_button_1 = require("react-google-button");
function LoginWithGoogle() {
    return (React.createElement("div", { style: {
            alignSelf: "center",
            marginTop: "20px"
        } },
        React.createElement(react_google_button_1["default"], { onClick: function () {
                action_1.login("google");
            } })));
}
exports["default"] = LoginWithGoogle;
