// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKe080NkqaAKPBURX2gFfC02TYAvzHuJg",
  authDomain: "wherenext-project.firebaseapp.com",
  projectId: "wherenext-project",
  storageBucket: "wherenext-project.appspot.com",
  messagingSenderId: "125916312290",
  appId: "1:125916312290:web:ad90d41bea7409fa1ee4bb",
  measurementId: "G-4WVSBCEERJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);