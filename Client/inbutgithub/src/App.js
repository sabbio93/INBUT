import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GitHub from 'github-api';


class App extends Component
 {
  render() 
  {
   this.auth = new GitHub({
            username: "sabbio93",
            password: "BlackLife1993@#"
                });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        username<input type="text"/>
        password<input type="password"/>
        <input type="submit" value="accedi" onClick={()=>console.log("hello")}/>
      </div>
    );
  }//render

 }//APP


export default App;
