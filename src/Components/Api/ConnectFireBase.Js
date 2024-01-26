// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1WYibp-5W9gwhBmSwAinKrBnsgMUWbP8",
  authDomain: "testing1-b8058.firebaseapp.com",
  projectId: "testing1-b8058",
  storageBucket: "testing1-b8058.appspot.com",
  messagingSenderId: "704378768343",
  appId: "1:704378768343:web:a5d89c25f6d4a36446d992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };