// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDllfiSQwdrkZUf-1SI_ZZ29re4eEIcNas",
  authDomain: "cinetrovegpt.firebaseapp.com",
  projectId: "cinetrovegpt",
  storageBucket: "cinetrovegpt.appspot.com",
  messagingSenderId: "453952612217",
  appId: "1:453952612217:web:104099c1ff59f50ad871a8",
  measurementId: "G-3ZVKTGL65W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();