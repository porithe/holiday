import React from 'react';
import './App.scss';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Gallery from "./components/Gallery.js";

function App() {
  return (
      <div className={"App"}>
        <Nav />
        <Header />
        <Gallery />
      </div>
  )
}


export default App;
