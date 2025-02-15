// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
/* TODO: Add SDKs for Firebase products that you want to use*/
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCCmMmtXHk954WX9Z2oy3lV0Cfp02WzPY",
  authDomain: "netflix-gpt-6cc3a.firebaseapp.com",
  projectId: "netflix-gpt-6cc3a",
  storageBucket: "netflix-gpt-6cc3a.firebasestorage.app",
  messagingSenderId: "5461823011",
  appId: "1:5461823011:web:541a798977a43f8809eb96",
  measurementId: "G-5C9TXCGZP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();