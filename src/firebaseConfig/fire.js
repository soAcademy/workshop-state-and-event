// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzOS6r6x_nrvqnBM-pXLvttv9aKLnFVlw",
  authDomain: "shabudule.firebaseapp.com",
  projectId: "shabudule",
  storageBucket: "shabudule.appspot.com",
  messagingSenderId: "458585135469",
  appId: "1:458585135469:web:d755d27d544e2b24db6264",
  measurementId: "G-W660MCEFWK",
};

// Initialize Firebase
export const fire = initializeApp(firebaseConfig);
export const analytics = getAnalytics(fire);
