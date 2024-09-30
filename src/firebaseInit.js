// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm3I40h4nGMwOT_7fQV45GzgIICtLdQ-E",
  authDomain: "blogging-app-b670e.firebaseapp.com",
  projectId: "blogging-app-b670e",
  storageBucket: "blogging-app-b670e.appspot.com",
  messagingSenderId: "817530596160",
  appId: "1:817530596160:web:3c2fe2e7a2956bbc5ce8a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);