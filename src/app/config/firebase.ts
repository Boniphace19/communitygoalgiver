// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";

import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQJib3L-NMSXgAxMLyio_ElSsdbpGmRJs",
  authDomain: "goal-giver.firebaseapp.com",
  projectId: "goal-giver",
  storageBucket: "goal-giver.appspot.com",
  messagingSenderId: "1087784079867",
  appId: "1:1087784079867:web:7e480a5c5319a15ee13b5e",
  measurementId: "G-C82MTMFR4D"
};

// Initialize Firebase
const app = !getApps().length?initializeApp(firebaseConfig):getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth}
export default app;

