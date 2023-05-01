// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// importing the firebase modules
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
//
const firebaseConfig = {
    apiKey: "AIzaSyBacP9YjFBfNsR8Fn8367efxnDdz1fDxNI",
    authDomain: "team-n.firebaseapp.com",
    projectId: "team-n",
    storageBucket: "team-n.appspot.com",
    messagingSenderId: "379743654759",
    appId: "1:379743654759:web:60ad3eefd839ae252c55c2",
    measurementId: "G-8Q9Q3M7N2J"
};
//
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
const googleProvider = new GoogleAuthProvider();
//export
export {auth,storage,googleProvider}
export default db

