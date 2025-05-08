// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Q1RYs9IvRUWoeXmoCadS3BUG9_LmEOk",
  authDomain: "babycode-28f5d.firebaseapp.com",
  projectId: "babycode-28f5d",
  storageBucket: "babycode-28f5d.firebasestorage.app",
  messagingSenderId: "186485822353",
  appId: ":186485822353:web:fe858b77f44510c0224030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export the auth object
export { auth };