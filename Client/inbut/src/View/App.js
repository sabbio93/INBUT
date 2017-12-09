import React, { Component } from 'react';
import './App.css';
//import createCORSRequest from '../Model/FileGetter.js';
class App extends Component
{
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>{console.log("ciao")}}>ciao</button>
      </div>
    );
  }
}
//BUG XMLHttpRequest cannot load http://www.google.it/. Redirect from 'http://www.google.it/' to 'https://www.google.it/?gws_rd=ssl' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://10.103.65.95:3000' is therefore not allowed access.
// eslint-disable-next-line
/*
function usget()
{
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  console.log(("withCredentials" in xhr));
  xhr.open('GET','http://www.google.it', true);
  xhr.send();
  console.log(xhr);

  console.log('ciao');
  var url='https://github.com/sabbio93/SMARTGARDEN';
  var xhr = createCORSRequest('GET', url);
  if (!xhr)
  {
    throw new Error('CORS not supported');
  }
  console.log(xhr);
  
}
*/
export default App;
