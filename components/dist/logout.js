"use client";
"use strict";
exports.__esModule = true;
var action_1 = require("./action");
var Logout = function () {
    return (React.createElement("div", { onClick: function () { return action_1.logout(); } },
        React.createElement("div", { className: "bg-red-600 font-malikfont text-white text-sm px-4 py-2 rounded-45 cursor-pointer" }, "LOG OUT")));
};
exports["default"] = Logout;
