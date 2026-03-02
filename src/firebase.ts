// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsYW9s6SV34oBIdmPL51hzWjFbfct1PAY",
  authDomain: "career-guidance-b9ec6.firebaseapp.com",
  projectId: "career-guidance-b9ec6",
  storageBucket: "career-guidance-b9ec6.firebasestorage.app",
  messagingSenderId: "858564453481",
  appId: "1:858564453481:web:935b47ed696324b1f6eef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);