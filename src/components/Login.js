import React from 'react';
import '../components/Register.css';
import { Link } from 'react-router-dom';

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword, 
        handleLogin, 
        handleSignup,
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;
   
        return (
          <div className="wrapper">
          
           
              <div className="email">
                <input
                  className="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                />
                <p className="errorMsg">{emailError}</p>
              </div>

              <div className="password">
                <input
                  className="password"
                  placeholder="Password"
                  type="password"
                  required
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <p className="errorMsg">{passwordError}</p>
              </div>
              <div className="createAccount">
                {hasAccount ? (
                  <>
                  <button onClick={handleLogin}>Sign In</button>
                  <small>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></small>
                  </>
                ) : (
                  <>
                  <button onClick={handleSignup}>Sign Up</button>
                  <small>Have an Account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></small>
                  </>
                )}
              </div>
           
         
        </div>
        )
}

export default Login
