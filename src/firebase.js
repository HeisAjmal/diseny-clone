import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgCcBcv1JRxXKnDCijtUpZlDL6FDwM7vA",
  authDomain: "ajmal-s-disneyplus-clone.firebaseapp.com",
  projectId: "ajmal-s-disneyplus-clone",
  storageBucket: "ajmal-s-disneyplus-clone.appspot.com",
  messagingSenderId: "874401317518",
  appId: "1:874401317518:web:3a935e23fd4ca46957ffdf",
  measurementId: "G-9C8XYWD7YL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
