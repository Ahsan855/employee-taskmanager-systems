// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "employee-taskmanagement-system.firebaseapp.com",
  projectId: "employee-taskmanagement-system",
  storageBucket: "employee-taskmanagement-system.appspot.com",
  messagingSenderId: "202643695086",
  appId: "1:202643695086:web:faf96b203a782e15cf5aff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
