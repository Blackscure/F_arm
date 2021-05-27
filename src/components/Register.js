import React from 'react';
import '../components/Register.css';
import { Link } from 'react-router-dom'

 
  const Register = (props) => {

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
            <h1>Create Account</h1>
            <form>
            <div class="row">
                        <div class="col">
                          <input type="text" 
                          class="form-control" 
                          id="fname" 
                          placeholder="First name"
                          />
                        </div>

                        <div class="col">
                          <input type="text" 
                          class="form-control" 
                          id="lname"
                          placeholder="Last name"
                          /><br></br>
                        </div>
                      </div>
              
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
                  placeholder="Mobile"
                  type="mobile"
                  name="mobile"
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
              </div>

              <div className="password">
                <input
                  className="password"
                  placeholder="ConfirmPassword"
                  type="password"
                  name="password"
                />
              </div>
              <div className="createAccount">
                <button type="submit"onClick={handleSignup}>Create Account</button>
                <small>Already Have an Account?</small>
                <Link to='/login'>sign in</Link>
              </div>
            </form>
          </div>
        </div>
        )
}

export default Register
