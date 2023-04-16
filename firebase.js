import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAxH0elQGWU5Qs5C8zEzQU6uQ3W1UriXbo",
    authDomain: "fir-app2023-89363.firebaseapp.com",
    projectId: "fir-app2023-89363",
    storageBucket: "fir-app2023-89363.appspot.com",
    messagingSenderId: "326423112417",
    appId: "1:326423112417:web:2a1ca7cc1691997e3a65a0",
    measurementId: "G-F74KDZQDBF"
})
const database=firebaseApp.firestore();
export default database;