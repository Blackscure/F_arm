import React, { Component,useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import fire from './firebase';
//import firebase from 'firebase'
require('firebase/auth')



 const App = () => {
  const [user, setUser] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setpasswordError] = useState('');
   const [hasAccount, setHasAccount] = useState('false');

   const clearInputs = () => {
    setEmail('');
    setPassword('');
   }

   const clearErrors = () => {
     setEmailError('');
     setpasswordError('');
   }

   const handleLogin = () => {
     clearErrors();
    fire
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch(err => {
              switch(err.code){
                case "auth/invalid-email":
                  case "auth/user-disabled":
                    case "auth/user-not-found":
                      setEmailError(err.message);
                      break;
                      case "auth/wrong-password":
                        setpasswordError(err.message);
                        break;
              }
            });
   };

   const handleLogout = () => {
     fire.auth().signOut();
   };

   //check if user exists
   const authListener = () => {
     fire.auth().onAuthStateChanged(user => {
       if(user){
         clearInputs();
         setUser(user);
       } else {
         setUser("");
       }
     });
   };

   useEffect(() => {
     authListener();
   }, [])

   const handleSignup = () => {
    clearErrors();
     
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.sendEmailVerification();
      alert("Check your email ");
      // Signed in 
      var user = userCredential.user;
       
      // ...
    })
  
  
  
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
          case "auth/user-disabled":ß
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                setpasswordError(err.message);
                break;
      }
    });
   }




     return (
       <div className = "App"> 
       {user ? (
            <Home handleLogout={handleLogout}/>
       ) : (
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
    />
       )}
       </div>
     )
 }
 
 export default App
 