import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { browserSessionPersistence } from 'firebase/auth';
import { setPersistence } from 'firebase/auth';

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
const Panels = firestore.collection('Panels')
const providerGoogle = new firebase.auth.GoogleAuthProvider();
let uName = ""

export const signInWithGoogle = () =>{
  setPersistence(auth, browserSessionPersistence)
  .then(()=>{
    auth.signInWithPopup(providerGoogle)
    .then((result) => {
      console.log(result)
      uName = result.user.displayName
      if(result.additionalUserInfo.isNewUser === true){
        Users.add({
          email: result.additionalUserInfo.profile.email,
          password: "N/A",
          type: "google acc",
          id: result.user.uid
        })
      }
    })
  })
}

export const signInWithEmailPass = (email, pass) =>{
  setPersistence(auth, browserSessionPersistence)
  .then(()=>{
    auth.signInWithEmailAndPassword(email, pass)
    .then((result) =>{
      uName = result.user.displayName
    }).catch((error) => {
      console.log(error)
    });
  })
}

export const createWithEmailPass = async (email, user, pass, cpass) => {
  let res = ""
  if(pass === cpass){
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
          username: user,
          id: result.user.uid
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

export const setUname = (name) => {
  uName = name
}

export const userName = () =>{
  return uName
}

export const panelQuery = async (uid) => {
  let docs = [];
  const querySnapshot = await Panels.where("owner", "==", uid).get();
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return docs;
};

export const addDevice = async (id) =>{
  const querySnapshot = await Panels.where("id", "==", id).get();
  let res = "";
  if(querySnapshot.size === 1){
    let t = querySnapshot.docs[0].get("owner")
    console.log(t)
    if(querySnapshot.docs[0].get("owner") === ""){
      res = "pannel found"
      const deviceRef = querySnapshot.docs[0]
      deviceRef.ref.update({owner: auth.currentUser.uid})
    } else {
      console.log(querySnapshot.docs[0].get("owner"))
      res = "this pannel already has an owner"
    }
  } else {
    res = "could not find a pannel with that id"
  }
  return res
}