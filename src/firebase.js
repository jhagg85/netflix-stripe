import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-_l_quG9-xaAhXSWLJ3bnZfW_f7jqaew",
  authDomain: "netflix-stripe-c76c2.firebaseapp.com",
  projectId: "netflix-stripe-c76c2",
  storageBucket: "netflix-stripe-c76c2.appspot.com",
  messagingSenderId: "480321823272",
  appId: "1:480321823272:web:f0a444e5918af7cf28cb1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
