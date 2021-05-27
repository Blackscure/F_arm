import React from 'react';
import '../components/Register.css';
import { Link } from 'react-router-dom'

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
          <div className="form-wrapper">
            <h1>Welcome</h1>
            <form>
         
              <div className="email">
                <input
                  className="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  
                />
              </div>

              <div className="password">
                <input
                  className="password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <p className="errormsg">{passwordError}</p>
              </div>

              <div className="createAccount">
                <button type="submit" onClick={handleLogin}>Create Account</button>
                <small>Don't have an account? Click to <Link to='/login'>here</Link>create one.</small>
                 
              </div>
            </form>
          </div>
        </div>
        )
}

export default Login
