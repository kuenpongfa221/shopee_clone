// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDErGjCruEyphTW0vAe2eyE9GnRuv0oVrg",
  authDomain: "shopee-clone-a786a.firebaseapp.com",
  projectId: "shopee-clone-a786a",
  storageBucket: "shopee-clone-a786a.appspot.com",
  messagingSenderId: "11915534530",
  appId: "1:11915534530:web:e904a6f72b77b47332db5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initial services
const auth = getAuth();

export { auth };
