// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuIcHGwgHGdaAoCbmZTGs4DtO8Ea7YRac",
  authDomain: "miniproject-e2ec3.firebaseapp.com",
  projectId: "miniproject-e2ec3",
  storageBucket: "miniproject-e2ec3.appspot.com",
  messagingSenderId: "573129095515",
  appId: "1:573129095515:web:6b2d23e60b2eed8539027e",
  measurementId: "G-Y09J575GBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);