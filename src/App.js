 import React, { Component } from 'react'
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
 
 export class App extends Component {
   render() {
     return (
       <Router>
         <Switch>
           <Route path="/">
             <Login/>
             <Route path="/home">
               <Home/>
             </Route>
             <Route path="register">
               <Register/>
             </Route>
           </Route>
         </Switch>
       </Router>
     )
   }
 }
 
 export default App
 