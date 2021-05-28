
 import React, { Component,useState, useEffect } from 'react'
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import fire from './ firebase';



 const App = () => {
  const [user, setUser] = useState('');
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
   const [password, setPassword] = useState('');
   const [confirmpassword, setConfirmpassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setpasswordError] = useState('');
   const [hasAccount, setHasAccount] = useState('false');
    

   const clearInputs = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setMobile('');
    setPassword('');
    setConfirmpassword('');
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
    fire
    .auth()
    .createWithEmailAndPassword(firstname, lastname, mobile, confirmpassword, email,password)
    .then((userCredential)=>{
      // send verification mail.
    userCredential.user.sendEmailVerification();
    auth.signOut();
    alert("Check your email ");
  })
  
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
          case "auth/user-disabled":
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
       
       <Router>
         <Switch>
           <Route path="/">
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

             <Route path="/home">
               <Home handleLogout={handleLogout}/>
             </Route>
             <Route path="register">
               <Register
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
             </Route>
           </Route>
         </Switch>
       </Router>
       </div>
     )
 }
 
 export default App
 