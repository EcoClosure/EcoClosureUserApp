import React, { useState } from "react";
import Login from "./components/Login";
import Dash from "./components/Dash";
import Page from "./components/Page";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { auth, signInWithGoogle} from "./config/firebase";

function App() {
  const [tempU, setTempU] = useState(null)
  const [page, setPage] = useState('login')
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {
      user ? <Page page={page} setPage={setPage}/>
      : <Login google={signInWithGoogle} setPage={setPage}/>
      }
    </div>
  );
}

export default App;
