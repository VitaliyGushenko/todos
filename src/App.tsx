import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import fire from './firebase/fire';
import LoginRegister from './pages/authentication/LoginRegister';
import Home from './pages/Home';

function App() {
  
  const [user, setState]: any = useState(null);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user: any) => {
      user ? setState(() => user) : setState(() => null);
    });
  };

  useEffect(() => {
    authListener(); 
  }, []);

  return (
    <BrowserRouter>
      {!user ? (
        <LoginRegister />
      ) : (
        <Home email={user.email} uid={user.uid} />
      )}
    </BrowserRouter>
  );
}

export default App;
