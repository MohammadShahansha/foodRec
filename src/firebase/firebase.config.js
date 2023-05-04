// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable:', import.meta.env.VITE_appId)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: "AIzaSyBCc0wTtJ7g64iT-KAVH6SwZuVafLxpYlk",
// authDomain: "for-assignment-ten.firebaseapp.com",
// projectId: "for-assignment-ten",
// storageBucket: "for-assignment-ten.appspot.com",
// messagingSenderId: "599660008423",
// appId: "1:599660008423:web:0a012a717a990bb6b9a342"