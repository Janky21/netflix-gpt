// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5sAbykLN7Dv9CdySF9MJUdeXifnnDzTk",
  authDomain: "netflixgpt-2ea2a.firebaseapp.com",
  projectId: "netflixgpt-2ea2a",
  storageBucket: "netflixgpt-2ea2a.firebasestorage.app",
  messagingSenderId: "686737254268",
  appId: "1:686737254268:web:ad139ea3d226862a6ba6f9",
  measurementId: "G-LGWTESLEP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
