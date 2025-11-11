// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBboklWHZ3khseMFxyRcgdiokwJlOpxvSY",
  authDomain: "habit-tracker-a53d4.firebaseapp.com",
  projectId: "habit-tracker-a53d4",
  storageBucket: "habit-tracker-a53d4.firebasestorage.app",
  messagingSenderId: "703933179077",
  appId: "1:703933179077:web:b84c5a2dc226668bb8fcac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
