"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("react");
var header_module_css_1 = require("/components/header.module.css");
var z = require("zod");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var action_1 = require("../../../components/action");
var navigation_1 = require("next/navigation");
var auth_1 = require("firebase/auth");
var firebase_1 = require("@/app/config/firebase");
var sonner_1 = require("sonner");
var react_google_button_1 = require("react-google-button");
var FormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must have more than 8 characters")
});
function Login(_a) {
    var _this = this;
    var closeModal = _a.closeModal;
    var router = navigation_1.useRouter();
    var _b = react_hook_form_1.useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zod_1.zodResolver(FormSchema)
    }), register = _b.register, handleSubmit = _b.handleSubmit, setError = _b.setError, _c = _b.formState, errors = _c.errors, isSubmitting = _c.isSubmitting;
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, auth_1.signInWithEmailAndPassword(firebase_1.auth, data.email, data.password)];
                case 1:
                    _a.sent();
                    sessionStorage.setItem("user", JSON.stringify(true));
                    console.log("Resetting form");
                    console.log("Showing success toast");
                    sonner_1.toast.success('Sign in successful!');
                    router.push("/home");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    sonner_1.toast.error('Sign in failed! Please try again.');
                    console.error("Error signing in: ", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { style: { display: "flex", flexDirection: "column" } },
        react_1["default"].createElement("h3", { style: {
                alignSelf: "center",
                fontFamily: "malikfont",
                fontWeight: "500",
                color: "#151b28",
                marginBottom: "5px"
            } }, "SIGN IN"),
        react_1["default"].createElement("hr", { className: header_module_css_1["default"].hr }),
        react_1["default"].createElement("form", { 
            /*{...form}*/
            onSubmit: handleSubmit(onSubmit), style: {
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            } },
            react_1["default"].createElement("input", __assign({}, register("email"), { type: "e-mail", name: "email", placeholder: "E-mail", className: header_module_css_1["default"].formInput })),
            errors.email && (react_1["default"].createElement("div", { className: "text-red-500" }, errors.email.message)),
            react_1["default"].createElement("input", __assign({}, register("password"), { type: "password", name: "password", placeholder: "Password", className: header_module_css_1["default"].formInput })),
            errors.password && (react_1["default"].createElement("div", { className: "text-red-500" }, errors.password.message)),
            react_1["default"].createElement("button", { disabled: isSubmitting, type: "submit", className: header_module_css_1["default"].bttn },
                react_1["default"].createElement("span", null, isSubmitting ? "LOADING....." : "SIGN IN"))),
        react_1["default"].createElement(sonner_1.Toaster, { richColors: true, position: "top-center" }),
        react_1["default"].createElement("div", { className: "mt-5  flex flex-nowrap justify-center items-center" },
            react_1["default"].createElement("hr", { className: "w-20 border-blue-300 border-2 mr-5" }),
            react_1["default"].createElement("p", null, "OR"),
            react_1["default"].createElement("hr", { className: "w-20 border-blue-300 ml-5 border-2" })),
        react_1["default"].createElement(react_google_button_1["default"], { style: {
                alignSelf: "center",
                marginTop: "20px"
            }, onClick: function () { return action_1.login("google"); } })));
}
exports["default"] = Login;
