// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhvkpMzl-LGg4BPP2mDdbm17ZytY_b0_g",
  authDomain: "flipdesk-2.firebaseapp.com",
  projectId: "flipdesk-2",
  storageBucket: "flipdesk-2.appspot.com",
  messagingSenderId: "109403351395",
  appId: "1:109403351395:web:dacd78b63565488acecb56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });

export { auth, db };
