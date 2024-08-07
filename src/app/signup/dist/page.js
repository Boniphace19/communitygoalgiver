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
var sonner_1 = require("sonner");
var react_1 = require("react");
var page_1 = require("../login/page");
var header_module_css_1 = require("/components/header.module.css");
var modal_1 = require("../../../components/modal");
var react_2 = require("react");
var navigation_1 = require("next/navigation");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var z = require("zod");
var firestore_1 = require("firebase/firestore");
var firebase_1 = require("@/app/config/firebase");
var auth_1 = require("firebase/auth");
var FormSchema = z
    .object({
    firstname: z.string().min(1, "Fullname required"),
    lastname: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    mobileno: z.string().min(1, "Mobile number required").max(10),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required")
})
    .refine(function (data) { return data.password === data.confirmPassword; }, {
    path: ["confirmPassword"],
    message: "Password do not match"
});
function SignUp(_a) {
    var _this = this;
    var closeModal = _a.closeModal;
    var _b = react_2.useState(false), openUp = _b[0], setOpenUp = _b[1];
    var _c = react_2.useState(null), message = _c[0], setMessage = _c[1];
    var _d = react_2.useState(null), feedback = _d[0], setFeedback = _d[1];
    var _e = react_2.useState(null), message1 = _e[0], setMessage1 = _e[1];
    var _f = react_2.useState(true), submitted = _f[0], setSubmitted = _f[1];
    var router = navigation_1.useRouter();
    //configuring resolver
    var _g = react_hook_form_1.useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            password: "",
            email: "",
            mobileno: "",
            confirmPassword: ""
        },
        resolver: zod_1.zodResolver(FormSchema)
    }), register = _g.register, reset = _g.reset, handleSubmit = _g.handleSubmit, setError = _g.setError, _h = _g.formState, errors = _h.errors, isSubmitting = _h.isSubmitting;
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var userCredential, user, docRef, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, auth_1.createUserWithEmailAndPassword(firebase_1.auth, data.email, data.password)];
                case 1:
                    userCredential = _a.sent();
                    user = userCredential.user;
                    // Send email verification
                    return [4 /*yield*/, auth_1.sendEmailVerification(user)];
                case 2:
                    // Send email verification
                    _a.sent();
                    return [4 /*yield*/, firestore_1.addDoc(firestore_1.collection(firebase_1.db, "users"), {
                            firstname: data.firstname,
                            lastname: data.lastname,
                            email: data.email,
                            mobileno: data.mobileno,
                            password: data.password,
                            confirmPassword: data.confirmPassword
                        })];
                case 3:
                    docRef = _a.sent();
                    reset();
                    router.push("/home");
                    sonner_1.toast.success('Sign up successful! Verification email sent', { duration: 5000 });
                    setOpenUp(true);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    sonner_1.toast.error('Sign up failed! Please try again.');
                    console.error("Error adding document: ", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
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
            } }, "SIGN UP"),
        react_1["default"].createElement("hr", { className: header_module_css_1["default"].hr }),
        react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit), style: {
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            } },
            react_1["default"].createElement("input", __assign({}, register("firstname"), { id: "firstname", name: "firstname", type: "text", placeholder: "First name", className: header_module_css_1["default"].formInput })),
            errors.firstname && (react_1["default"].createElement("div", { className: "text-red-500" }, errors.firstname.message)),
            react_1["default"].createElement("input", __assign({}, register("lastname"), { type: "text", id: "lastname", name: "lastname", placeholder: "Last name", className: header_module_css_1["default"].formInput })),
            errors.lastname && (react_1["default"].createElement("div", { className: "text-red-500" }, errors.lastname.message)),
            feedback && react_1["default"].createElement("p", { className: "text-red-500 " }, feedback),
            react_1["default"].createElement("input", __assign({}, register("email"), { name: "email", type: "email", id: "email", placeholder: "E-mail", className: header_module_css_1["default"].formInput })),
            errors.email && (react_1["default"].createElement("div", { className: "text-red-500" }, errors.email.message)),
            message && react_1["default"].createElement("p", { className: "text-red-500 " }, message),
            react_1["default"].createElement("input", __assign({}, register("mobileno"), { name: "mobileno", type: "number", id: "mobileno", placeholder: "Mobile number", className: header_module_css_1["default"].formInput })),
            errors.mobileno && (react_1["default"].createElement("div", { className: "text-red-500" }, errors.mobileno.message)),
            react_1["default"].createElement("input", __assign({}, register("password"), { name: "password", id: "password", type: "password", placeholder: "Password (8-characters)", className: header_module_css_1["default"].formInput })),
            errors.password && (react_1["default"].createElement("div", { className: "text-red-500" }, errors.password.message)),
            react_1["default"].createElement("input", __assign({}, register("confirmPassword"), { type: "password", id: "confirmPassword", name: "confirmPassword", placeholder: "Confirm-password (8-characters)", className: header_module_css_1["default"].formInput })),
            errors.confirmPassword && (react_1["default"].createElement("div", { className: "text-red-500" }, errors.confirmPassword.message)),
            message1 && react_1["default"].createElement("p", { className: "text-red-500" }, message1),
            react_1["default"].createElement("button", { disabled: isSubmitting, type: "submit", className: header_module_css_1["default"].bttn },
                react_1["default"].createElement("span", null, isSubmitting ? "Registering....." : " SIGN UP"))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(sonner_1.Toaster, { richColors: true, position: "top-center" })),
        react_1["default"].createElement(modal_1["default"], { isOpen: openUp, onClose: function () { return setOpenUp(false); } },
            react_1["default"].createElement(page_1["default"], null)),
        ";"));
}
exports["default"] = SignUp;
