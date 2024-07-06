import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDyINIuj2kaeftGpqDhCu9xq8Y4gcF-JD0",
    authDomain: "clone-a2862.firebaseapp.com",
    projectId: "clone-a2862",
    storageBucket: "clone-a2862.appspot.com",
    messagingSenderId: "475349026337",
    appId: "1:475349026337:web:249a35059f8ad766430560",
    measurementId: "G-JMRHWYM5HQ"
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider };