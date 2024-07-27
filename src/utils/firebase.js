// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-c4f5d.firebaseapp.com",
  projectId: "blog-app-c4f5d",
  storageBucket: "blog-app-c4f5d.appspot.com",
  messagingSenderId: "637310351259",
  appId: "1:637310351259:web:6d049cfb61be64cbdb533e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
