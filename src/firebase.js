// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqxU5OlUY9NpErXUdMvnHN7UnHZADbSsQ",
  authDomain: "netflix-app-a0da1.firebaseapp.com",
  projectId: "netflix-app-a0da1",
  storageBucket: "netflix-app-a0da1.appspot.com",
  messagingSenderId: "191545070088",
  appId: "1:191545070088:web:afcca192226dc4915fb7bd",
  measurementId: "G-EEN6LE1E5N",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
