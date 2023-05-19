// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGiPbmUvqyrFIIye0iMG6Fb7sUJznxfwQ",
  authDomain: "clienttell.firebaseapp.com",
  projectId: "clienttell",
  storageBucket: "clienttell.appspot.com",
  messagingSenderId: "995078231301",
  appId: "1:995078231301:web:4720d027f4e53cd414136c",
  measurementId: "G-BKBH9VCEWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
