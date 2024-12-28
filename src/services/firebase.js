import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4dosgr0qhB7EIq0klK7-rbNdjO767vp4",
  authDomain: "shamandy-1c3ae.firebaseapp.com",
  projectId: "shamandy-1c3ae",
  storageBucket: "shamandy-1c3ae.firebasestorage.app",
  messagingSenderId: "248363562463",
  appId: "1:248363562463:web:e08a9c7e3104e8f136806a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
