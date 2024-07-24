// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBThAMB-YU4O0UJRaOXi5Dj-h2eaho7mU8",
  authDomain: "netflixgpt-13b83.firebaseapp.com",
  projectId: "netflixgpt-13b83",
  storageBucket: "netflixgpt-13b83.appspot.com",
  messagingSenderId: "114772260268",
  appId: "1:114772260268:web:7fa3e369a2f6dd7760b609",
  measurementId: "G-TM9N9R7YFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
