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
const Users = firestore.collection('Users')
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerEmail = new firebase.auth.EmailAuthProvider();
let uName = ""

export const signInWithGoogle = () =>{
  auth.signInWithPopup(providerGoogle)
  .then((result) => {
    uName = result.user.displayName
    if(result.additionalUserInfo.isNewUser === true){
      Users.add({
        email: result.additionalUserInfo.profile.email,
        password: "N/A",
        type: "google acc"
      })
    }
  })

}

export const signInWithEmailPass = (email, pass) =>{
  auth.signInWithEmailAndPassword(email, pass)
  .then((result) =>{
    uName = result.user.displayName
  }).catch((error) => {
    console.log(error)
  });
}

export const createWithEmailPass = async (email, user, pass, cpass) => {
  let res = ""
  if(pass == cpass){
    await auth.createUserWithEmailAndPassword(email, pass)
    .then((result)=>{
      if(result.additionalUserInfo.isNewUser === true){
        result.user.updateProfile({
          displayName: user
        })
        uName = user
        Users.add({
          email: email,
          type: "email",
          username: user
        }).catch((e)=>{
          res = e.message
        })
        res = true
      }
    }).catch((e)=>{
      let error = e.message
      console.log(error)
      res = error
    })
  }
  return res
}

export const globalSignOut = () =>{
  console.log("signed out")
  auth.signOut()  
}

export const userName = () =>{
  return uName
}