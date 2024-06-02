// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZvelpDc_dGxabPyhkwij5xnZ-nkZwefs",
  authDomain: "book-berry.firebaseapp.com",
  projectId: "book-berry",
  storageBucket: "book-berry.appspot.com",
  messagingSenderId: "780142871984",
  appId: "1:780142871984:web:3abd0e08380ee6b0d84275"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);