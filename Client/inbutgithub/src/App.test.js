import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Requestable from '/home/andrea/Documenti/worksapceEclipse/INBUT/Client/inbutgithub/node_modules/github-api/dist/components/Requestable.js';
import GitHubUse from './GitHubLib.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('list repo',()=>{

  console.log("ciao");
});
