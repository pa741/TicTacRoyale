// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3FFetP5jviPliqNJPwnKFmZZ5HDDdteM",
  authDomain: "tictactoeroyale.firebaseapp.com",
  projectId: "tictactoeroyale",
  storageBucket: "tictactoeroyale.appspot.com",
  messagingSenderId: "913682554953",
  appId: "1:913682554953:web:48ce760d29a45cfdbc1f98",
  measurementId: "G-315YB5165C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);