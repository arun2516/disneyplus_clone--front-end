import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBW5cDEtd8cBrIXtkYmBbkxFdzzFszFEAE",
    authDomain: "disney-plus-clone-f533a.firebaseapp.com",
    projectId: "disney-plus-clone-f533a",
    storageBucket: "disney-plus-clone-f533a.appspot.com",
    messagingSenderId: "469613364884",
    appId: "1:469613364884:web:601c2a070ecbbd31965681",
    measurementId: "G-WF6NTDQY1S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

