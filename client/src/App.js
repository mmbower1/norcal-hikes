import React from 'react';
// containers
import Landing from './containers/landing/Landing'; 
import Main from './containers/main/Main';
// scss
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Landing />
      <Main />
    </div>
  );
}

export default App;
