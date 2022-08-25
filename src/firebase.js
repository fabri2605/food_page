// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCYydkH17ZPG-kb2FnhOtSdEj1HyPRChQ",
  authDomain: "food-crud.firebaseapp.com",
  projectId: "food-crud",
  storageBucket: "food-crud.appspot.com",
  messagingSenderId: "339261000089",
  appId: "1:339261000089:web:5b915ad7c73b1d02bb2b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);