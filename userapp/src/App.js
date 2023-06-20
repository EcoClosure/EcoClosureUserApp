import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Page from "./components/Page";

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, signInWithGoogle, signInWithEmailPass, setUname, userName} from "./config/firebase";
import SignUp from "./components/SignUp";


function App() {
  const [page, setPage] = useState('login')
  const [accPage, setAccPage] = useState('login')
  const [user] = useAuthState(auth);

  
  useEffect(()=>{ 
    const loadUser = () =>{
      if(user){
        setUname(user.displayName)
        console.log(userName())
      }
    }
    window.addEventListener('load', loadUser);
  },[])

  return (
    <div className="App">
      {
        
        user ? <Page page={page} setPage={setPage} user={user}/> :
        accPage === 'login' ? <Login google={signInWithGoogle} emailS={signInWithEmailPass} setPage={setPage} signup={setAccPage} test={accPage}/>:
        <SignUp login={setAccPage}/> 
      }
    </div>
  );
}

export default App;
