import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCTW3EenAtVx_GB50oCLEbEF5-7ZibZHr0",
  authDomain: "ecodata-63bfa.firebaseapp.com",
  projectId: "ecodata-63bfa",
  storageBucket: "ecodata-63bfa.appspot.com",
  messagingSenderId: "305964274305",
  appId: "1:305964274305:web:6fa8bf70bb4aa341663380",
  measurementId: "G-6V0W3E7H3D"
})

export const auth = firebase.auth();
const firestore = firebase.firestore();

export const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("this is called")
    auth.signInWithPopup(provider)
}

export const globalSignOut = () =>{
  console.log("signed out")
  auth.signOut()  
}