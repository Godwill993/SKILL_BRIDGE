// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlTY9jzq0ulMEecQnyrMs1MLW9M3_gYhs",
  authDomain: "skill-bridge-4744c.firebaseapp.com",
  projectId: "skill-bridge-4744c",
  storageBucket: "skill-bridge-4744c.firebasestorage.app",
  messagingSenderId: "575080874668",
  appId: "1:575080874668:web:5e320be6ed9151f4b51509",
  measurementId: "G-B9PG3J58RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app); 