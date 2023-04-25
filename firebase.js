import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXS9cD6epCcK5xSge1JeEu0smYkU79UMk",
  authDomain: "to-do-list-77173.firebaseapp.com",
  projectId: "to-do-list-77173",
  storageBucket: "to-do-list-77173.appspot.com",
  messagingSenderId: "383876156500",
  appId: "1:383876156500:web:e5e6dcf7c27b0214c531c1",
  measurementId: "G-VWKFMBYJ76"
};
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db}
