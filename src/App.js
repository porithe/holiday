import React from 'react';
import './App.scss';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Gallery from "./components/Gallery.js";
import Cennik from "./components/Cennik.js";
import Kontakt from "./components/Kontakt.js";

function App() {
  return (
      <div className={"App"}>
        <Nav />
        <Header />
        <Gallery />
        <Cennik />
        <Kontakt />
      </div>
  )
}


export default App;
