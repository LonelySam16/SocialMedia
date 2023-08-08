// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAwsACRcwqy9RyPohBaHZIPEUGcJv0QjU",
  authDomain: "ankansocialmedia.firebaseapp.com",
  projectId: "ankansocialmedia",
  storageBucket: "ankansocialmedia.appspot.com",
  messagingSenderId: "392344887931",
  appId: "1:392344887931:web:24b151d5315bd4f0ae78de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);