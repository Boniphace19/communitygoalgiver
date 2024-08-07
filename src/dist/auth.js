"use strict";
var _a;
exports.__esModule = true;
exports.signOut = exports.signIn = exports.handlers = exports.auth = void 0;
var next_auth_1 = require("next-auth");
var google_1 = require("next-auth/providers/google");
exports.auth = (_a = next_auth_1["default"]({
    providers: [google_1["default"]]
}), _a.auth), exports.handlers = _a.handlers, exports.signIn = _a.signIn, exports.signOut = _a.signOut;
