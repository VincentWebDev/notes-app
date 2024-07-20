// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPEnurHTZ3GtKiEfjlRkUriD0arTPm7vg",
  authDomain: "react-notes-885fc.firebaseapp.com",
  projectId: "react-notes-885fc",
  storageBucket: "react-notes-885fc.appspot.com",
  messagingSenderId: "643353490004",
  appId: "1:643353490004:web:5113f770bd56f9fd4673c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
