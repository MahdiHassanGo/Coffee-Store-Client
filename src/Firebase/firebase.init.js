// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNDuCI9sJTryugCVFo8p3ThvKhl7-Bkqw",
  authDomain: "coffee-store-2901a.firebaseapp.com",
  projectId: "coffee-store-2901a",
  storageBucket: "coffee-store-2901a.firebasestorage.app",
  messagingSenderId: "93930528325",
  appId: "1:93930528325:web:22037a5994195380778d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const  auth = getAuth(app)