import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbl-rwQRQktbr8eQqH7LnsgQL05zzQoF0",
  authDomain: "find-em-all.firebaseapp.com",
  projectId: "find-em-all",
  storageBucket: "find-em-all.appspot.com",
  messagingSenderId: "381554495292",
  appId: "1:381554495292:web:689944b96f65a5dafb9839",
  measurementId: "G-23B1QTNEX7",
};

//initalize firebase app

initializeApp(firebaseConfig);

//initialize services

export const db = getFirestore();
