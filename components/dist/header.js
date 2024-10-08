"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var header_module_css_1 = require("./header.module.css");
var link_1 = require("next/link");
var image_1 = require("next/image");
var loginandsignupbuttons_1 = require("./loginandsignupbuttons");
var navlinks_1 = require("./navlinks");
var verticalline_1 = require("./verticalline");
//import { auth, signOut } from "../src/app/api/auth/[...nextauth]/options";
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var search_1 = require("./search");
var auth_1 = require("react-firebase-hooks/auth");
var firebase_1 = require("@/app/config/firebase");
var auth_2 = require("firebase/auth");
function Page() {
    var _this = this;
    //const session = await auth();
    var user = auth_1.useAuthState(firebase_1.auth)[0];
    var router = navigation_1.useRouter();
    var handleSignOut = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, auth_2.signOut(firebase_1.auth)];
                case 1:
                    _a.sent();
                    router.push('/');
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("nav", { className: header_module_css_1["default"].div1 },
        React.createElement("div", { className: header_module_css_1["default"].div2 },
            React.createElement("div", { className: header_module_css_1["default"].div4 },
                React.createElement("div", null,
                    React.createElement(image_1["default"], { src: "/logo.png", width: "50", height: "50", alt: "Logo image" })),
                React.createElement("div", null,
                    React.createElement("p", null,
                        "COMMUNITY ",
                        React.createElement("br", null),
                        " GOAL GIVER"))),
            React.createElement("div", { className: header_module_css_1["default"].div5 },
                React.createElement(search_1["default"], null)),
            React.createElement("div", { className: header_module_css_1["default"].div6 },
                React.createElement(link_1["default"], { href: "" },
                    React.createElement("div", { className: "flex items-center content-stretch" },
                        React.createElement(lucide_react_1.ShoppingCart, { size: 32 }))),
                user ? (React.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "center",
                        opacity: "0.9",
                        height: "40px",
                        padding: "5px",
                        borderRadius: "40%",
                        alignItems: "center"
                    } },
                    React.createElement("p", { className: "text-cyan-200 underline decoration-slate-400" }, user.email),
                    React.createElement("div", { className: "ml-6" },
                        React.createElement("button", { className: "bg-color-red ", onClick: handleSignOut }, "LOG OUT")))) : (React.createElement(loginandsignupbuttons_1["default"], null)))),
        React.createElement("div", { className: header_module_css_1["default"].div3 },
            React.createElement(navlinks_1["default"], { href: "/home" }, "HOME"),
            React.createElement(verticalline_1["default"], { color: "#ffbf00", thickness: "3", height: "22" }),
            React.createElement(navlinks_1["default"], { href: "/market" }, "MARKET"),
            React.createElement(verticalline_1["default"], { color: "#ffbf00", thickness: "3", height: "22" }),
            React.createElement(navlinks_1["default"], { href: "/ranking" }, "RANKINGS"),
            React.createElement(verticalline_1["default"], { color: "#ffbf00", thickness: "3", height: "22" }),
            React.createElement(navlinks_1["default"], { href: "/collection" }, "COLLECTIONS"))));
}
exports["default"] = Page;
