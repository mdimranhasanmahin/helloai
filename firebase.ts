// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBza49QYqkIM7PmrvbiM-jjZsxAr3mVkT8",
  authDomain: "hello-ai-f7f8a.firebaseapp.com",
  projectId: "hello-ai-f7f8a",
  storageBucket: "hello-ai-f7f8a.firebasestorage.app",
  messagingSenderId: "712428801032",
  appId: "1:712428801032:web:e8c780ecc1fa46516215bd",
  measurementId: "G-4WHSPDJF3B"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
