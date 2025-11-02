import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR_WQ1QOD2S_j5g84Bv1Yqu8idPhya3O0",
  authDomain: "review-ca6fb.firebaseapp.com",
  projectId: "review-ca6fb",
  storageBucket: "review-ca6fb.appspot.com", // ✅ fixed
  messagingSenderId: "122488255667",
  appId: "1:122488255667:web:9a41f681e4ef21e40e6cc6",
  measurementId: "G-4G271TB5HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// ✅ Correct: named exports
export { db, auth };
