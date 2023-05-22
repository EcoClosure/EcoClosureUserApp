import React, { useState } from "react";
import Login from "./components/Login";
import Dash from "./components/Dash";
import Page from "./components/Page";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { auth, signInWithGoogle, signInWithEmailPass} from "./config/firebase";
import SignUp from "./components/SignUp";

function App() {
  const [page, setPage] = useState('login')
  const [accPage, setAccPage] = useState('login')
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {
        user ? <Page page={page} setPage={setPage}/> :
        accPage === 'login' ? <Login google={signInWithGoogle} emailS={signInWithEmailPass} setPage={setPage} signup={setAccPage} test={accPage}/>:
        <SignUp login={setAccPage}/> 
      }
    </div>
  );
}

export default App;
