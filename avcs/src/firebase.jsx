// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATezClHZZl1sfBjPYH0mVBGxC81ILQIo",
  authDomain: "authentication-f6759.firebaseapp.com",
  projectId: "authentication-f6759",
  storageBucket: "authentication-f6759.appspot.com",
  messagingSenderId: "187325745160",
  appId: "1:187325745160:web:95f917c94643d3b6d569bd"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);