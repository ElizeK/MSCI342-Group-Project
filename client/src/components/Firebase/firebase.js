import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZAB2T8nEvaN_2vZtQ02DHCwKNYO0eAZ0",
  authDomain: "pulse-news-a78ea.firebaseapp.com",
  databaseURL: "https://pulse-news-a78ea-default-rtdb.firebaseio.com",
  projectId: "pulse-news-a78ea",
  storageBucket: "pulse-news-a78ea.appspot.com",
  messagingSenderId: "330468143787",
  appId: "1:330468143787:web:73cd4c80d52d0c576cbdee",
  measurementId: "G-TSE18HSSZ7"
  };

// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//   }
  
//   // *** Auth API ***

//   doCreateUserWithEmailAndPassword = (email, password) =>
//   this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) =>
//   this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = password =>
//     this.auth.currentUser.updatePassword(password);

//   doGetIdToken = (bool) => {
//     return this.auth.currentUser.getIdToken(/* forceRefresh */ bool);
//   }

//   doGetUserByEmail = email => this.auth.getUserByEmail(email);

// }

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export default { auth, db };