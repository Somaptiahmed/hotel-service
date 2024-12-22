// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMeGOcSjqh2f7SNnDIOfbHtxLjQfGDWeI",
  authDomain: "assignment-11-2c226.firebaseapp.com",
  projectId: "assignment-11-2c226",
  storageBucket: "assignment-11-2c226.firebasestorage.app",
  messagingSenderId: "969430535649",
  appId: "1:969430535649:web:4c7828e155577ae23e96a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;