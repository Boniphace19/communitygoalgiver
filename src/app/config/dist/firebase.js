"use strict";
exports.__esModule = true;
exports.auth = exports.db = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
require("firebase/auth");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAQJib3L-NMSXgAxMLyio_ElSsdbpGmRJs",
    authDomain: "goal-giver.firebaseapp.com",
    projectId: "goal-giver",
    storageBucket: "goal-giver.appspot.com",
    messagingSenderId: "1087784079867",
    appId: "1:1087784079867:web:7e480a5c5319a15ee13b5e",
    measurementId: "G-C82MTMFR4D"
};
// Initialize Firebase
var app = !app_1.getApps().length ? app_1.initializeApp(firebaseConfig) : app_1.getApp();
var auth = auth_1.getAuth(app);
exports.auth = auth;
var db = firestore_1.getFirestore(app);
exports.db = db;
exports["default"] = app;
