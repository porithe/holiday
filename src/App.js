import React from 'react';
import './App.scss';
import Nav from './components/Nav.js';
import Header from './components/Header.js';

function App() {
  return (
      <div className={"App"}>
        <Nav />
        <Header />
        <div className={"test"}>
        </div>
      </div>
  )
}


export default App;
