import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbojsEyXn3yvYcGx3d43RJu3-2FgFChYQ",
  authDomain: "ema-jhan-simple.firebaseapp.com",
  projectId: "ema-jhan-simple",
  storageBucket: "ema-jhan-simple.appspot.com",
  messagingSenderId: "223620026437",
  appId: "1:223620026437:web:125bd021f27ddbd930532c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;