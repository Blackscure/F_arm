import React, { Component, useState } from 'react';
import auth from '../firebase';
import '../components/Register.css';
import { Link } from 'react-router-dom'

const Login = () => {
   
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
                  
                />
              </div>

              <div className="password">
                <input
                  className="password"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>

              <div className="createAccount">
                <button type="submit">Create Account</button>
                <small>Don't have an account? Clickto <Link to='/login'>here</Link>create one.</small>
                 
              </div>
            </form>
          </div>
        </div>
        )
}

export default Login
